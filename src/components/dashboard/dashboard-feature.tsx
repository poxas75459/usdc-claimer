/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2FtcPhCi5DWCjFEPbnACtZGkz5iNjRYLx7Nwg3Rxd5tQkTBLCvQJUmVuLMGx2uw6CLcpyWzw2CHAbuHS4WX5JTAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SD85Hj2CL4MeB8rhww72UcnpqJJW6XekULwUAugoHcdsDsGT5BLCbcdp3L1DUbNaZnS64ZxjttgLJZzRep2je53",
  "key1": "4uBfR9mamyYovYD1gc6a4Ge1ovB9pNSTgYfSQW1E6BA2byKu7j3rbjFUpepfLuixB53bguTcFPgDsCMdbDekPfrv",
  "key2": "2FGkift6ZdPtxL4euj4AHHN4q2c9zTLzKjA2VBiGh8Wr1bAy84ur6sYVErVyDzCRKgf5CExPYQJgCSAQSGc7Dh9C",
  "key3": "4Ut79GWtHUTJbaiTLiVMq7oMpbm2HeVZVfKPsNbg351dR3BePfXNNfxnLjppBGQtxoW28Rj7SLBtUK6Cwc6rG5X4",
  "key4": "3CZPDZB3bCgaYrpHTAz8N4BNU8Ad3ySQq4MHuB7Cc919tLvkCuCzmoWL319YUyc1YZEHnazUR83pL9d1s4hicXvW",
  "key5": "3BVPKac8gUTQFjTtpieVUp3GpapY48rdR9ZrBrz1xLS9QeXbpNL8r2SB9A2dHJBP85Sz1QxgE8uim4zVxMRspzFQ",
  "key6": "5v7i5Hp2TQK3ohktCgcciChW8PxyKcD7aBkZDdrj8Zwu79YvbJbkpXMuJgKCjf4Ub2P3rq5mnA53iCfsuzTkRzG3",
  "key7": "3TA93iZLW68sF3ukJtG4MYWbxf5gvu4DrQJPj6M5mP3MfqFbH1SZF6rEkFGKjuZRCrbg5C8jkwEzMdwZQjrSdpDx",
  "key8": "SCLaReAe7XvDFjsHVJyKTMLQjRi5tD5YY8BRSUf5LpCJg211FM4mi9VGwjFUdKZ2XiX4UY5Ha6bhcHdNPSVFGeE",
  "key9": "mtFbrnUMHm4rZU4xUDJSMbqKmx4RhX7ibk89FmHKgRkd4tontpstsryT9hsLFYWCt9gXH8hLBVdznu6bk3Hpd8R",
  "key10": "WokvB9H3Pq74ukywUdKLeG6k5BDBQ9F8QvmWbqNchdHNWuvgjGN8AJc5kQ8bZFUa3eFWCTj39HFZxY3vBrTf4oS",
  "key11": "4mxKaEqXZex85XNLYRhSpL4PnfAZxGyoPstNhWpGkecJxUNFU1Kp2aekFEoZpiDTqxMr8hV7LEvUFQvWBeJfWYhd",
  "key12": "34E2UU71zDsMEZRpWa8yb9JBVCaq1HwWqA1ZjEVqbnhHmWMWfpi5Dsh6wvxET3Lc4uExX8iDxQcrFnc4ybjPeLs9",
  "key13": "3Q7Uo7uaAzSNDVb9o7zCMcsD7ZzyhqFKZ2PKNbMktHPmEbbfq2pUE5E7oDX9rxMmEr5mJb49AvTiyfatPzHGMJ4u",
  "key14": "7L4Ycg7tJ6psZViFqYgdnezrKVay9GNTeF5iXXFVx6caTmjdN7uAMv2x2kAcCKfUkYkWf8y9ATqAPBF9jumx6PP",
  "key15": "2tryPfmmK4YgcWkPHLZiugP75W5aFLDPsHxTMKoXiVR8ij2ZhcvrnMS5PiPJDHKwM58nLKSaYDh4a1n4WnpJhEhM",
  "key16": "YrmoTnb5vRiQoNCVs2UrkLrLjjxNf2kgjyjYtiVm22fXin4Pp5E3UNKbEucjou8RFQHE7ToWfQGJJ7wvKsPTTYc",
  "key17": "5EAPnnJVnjhwqpjQzv8iRiSw3yWNUkerUFHYurCCnTBf2BsgJFyGJLGLNCiZ1FXohX1XFkaXWfbQWRRizFkrFU3r",
  "key18": "2dn6w7KzpKG6B1tH4rzzPYZWL2QosV1Lfho2Y2qFTBCs7QowFkG8Jantaus5EGCwAnUB9rZNZPg4CFEyiVdne81j",
  "key19": "3nsGJ3DgAM21r8T2Y9BZj6p1HwvctXv8ZWQJWHRLmH6rFK8vqu7cu9ueVXz5GhbmABuyKWNTv3iytwBHSsk1rLw2",
  "key20": "5EhqS4BfuUerB8G7RssoDDttD9bpHjMdxuf9Bcthi5pCr2p1UFx8yPa6snSzMqB3JxowWeq8x9yc8wXCuiRCzT4T",
  "key21": "2G6LprKterq7XRMGJZmMEYMxnGQ5oa2w2DDjqXqooJXVzmLfw7zMq8d6agSKgaKGNsxZp9jxhMyJDfgwVhNe6sTs",
  "key22": "4frCqJ4D7BBLQUhR7bHRxKLdRa1LeAx9Jvw9mjSazyofAMgPvGN28WfsVYTtpXVRy2jFpQGS5QKUYE83AYcT6Mie",
  "key23": "45pFtH2ZVVPNEit71KuuqPx221qNukB3nobLsDL9Ze2gRxXRbPu2SvmWJfMPbjHhHyTe6nNcfa8Y1qKvPu6r1vyz",
  "key24": "2JA21pNpBAwWYGc3Wuq3DEeZiPSPxwU9vCuBJyPgCY4qHaUV3weVKYnJYYDgUMD57Uk33eASDPnGAkR4CNvkM74X",
  "key25": "51v2mZDXU1ndHVb7CUWpjN6EMrhw9akNRSf4J1xshVHDyB1UtkBUzCuGFyPd7TA5qSfk8QMwjiBgp8RY5fvdKe9G",
  "key26": "4ocps4Zsj9jFispiU4X3bCEHp4t2bVdaZYKNvKSSCSV1cLbjDtZhqTU4eo6LQvn8XNDDEK1EPd4RpW2bRj97YCvs",
  "key27": "44goKpdhPbJAFwVuAn7VTYbgJFdGbZBNSqqFv5xPnLhRQbXRKcXYCa1ZHxHtBfhhKenxBSrGdgrkWQa8qUtvEpkh",
  "key28": "5hZ5jF7JrDjFJrBAoc6bWW6zw5c9Hro2ksYRpjHmP7q4caQ5iWjPZFH4jegfHYaK1L6CBGip2iiCnjvZF1t84czk",
  "key29": "2QBR7aE47wXeT85oWMWHJgAi8dEdV3LBgwdSEwvotSzXQajyQ3qTLS88HuzXaevLSiYfic5QV7zhN3jSLPPGwpcK",
  "key30": "XSz2neCxUjSMYtQvN59BQoJhBxCeBqKsjSMitZDdF9EKcRWY32wmqbEYpYJ97FpivXjWiVGAkae1uuCdmLRfm2R",
  "key31": "2qUjFunex4Bu4VooE1edMfAQNB6hLNJSYH7wL39pRjCv4sa9aiXzJgktvXCyHmDQSqNNhNRsBGxgu9dY9juUP1Zt",
  "key32": "42V6JjoJ2f89pWAH5VcUs2KLdJThHpByb5vyAXz6zjegy7wsgaBdbE3J6aF2oxmcg87CNcJuo59mHq9kJhjeq13G",
  "key33": "3FPEA6qktTTFSnFcxy1umnH5QdqwFJaby6nR3qF8UDDvD2Uy7PgAxWVFvpyj7bQdBsy24XYAVNv7qyVK1QhowBtw",
  "key34": "3qSgpoPXCNkF5qPfyF2whqaXkeuTRwWaNbxAP7dF1UFdutYEKnGBgpvfPf8PRvhfY12gqnQYsGC9riufqmDUvpg4"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
