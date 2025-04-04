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
    "4nkiDjkN9nuSRF34X9EMF9SjrV2aCRMpTcs2CfMHHknSkr7TA6PwY8H5sYi6UhhfE8PWyawszzq8TaSEvkATLhEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BrEcTwfZ6HZMmYByY5uhWRATF1xM1YS78Hukvq4DRZWr5o6KzJnk7mmfABAkcqe742oJ6QpizNswDaF7wKZSmSZ",
  "key1": "2BawajJHRkVGBwEXJTVVDqo6X2v27w4ETxdkDvG68RNNVQHXq514qQnsTvALXmGogJ6kgauReqUoc6RPSdX3DV6M",
  "key2": "4B1WLD1auTU6nRCSRepC8EiMwkBoHPNQKZ2tFRSYfhTMvNnmJA1JBspHQFKFEzF1CQejJ26vN9VZmJebB7tCmkPk",
  "key3": "5VmTEPg9koXcULJNQ8DDvdWxCrX3JhzPn9xaLjpJrDEc4jxRKvXQHAF7zSjrEscvPp42cNvRKwygZJfUab3gSqtt",
  "key4": "4G45MUwSB51mzTrwR2CmcNsZUjDU5ZM9qL97HNQHW8wZmaA7FTX73XddynvAtcxRVHGJ3NLHxcsHf88x3f5gGKsA",
  "key5": "2vAMC9wqibrMfXLwF73U8cSNVx1j2EeUUjstX5v887doKAZ2aQXbm2yXaPC5E84bQpihDJ9mE3v1A7RgLiYC5bZx",
  "key6": "SX3pLwa6CJufvse571krhkbwNzaE2NLe9CKTkxyjh3byLD2SEQj8fgXagVJMF12ZP1WXtnT6xq5Yg1GUdU6UGDe",
  "key7": "5UxhdQ8Sa8Z1j6Sp6gt6CwBuyZTakYZVicJ5Xjt5uSurszBfGyzjJjRepAwHN7AGsGZN5mHtLBe5Qsm8eAqiGmsm",
  "key8": "3Fa3dHTJKQn9c3ktjTuV4jecoSFCVuuHp9xG6WJsKGrtgjSxAtc33WtNYY7KcDUgjdH3TjVhFzMwH1po8Eb7z8wb",
  "key9": "3YnSqihzHUCAHRWmwF4jQBTKNVZD8cwSK6HCBgLTFXL3ULiN9eKUJP1NkK9dhKXLj8DTdqcumm1VGP9etqdvei6",
  "key10": "Xy28d9LAXiGnQj2XmeXBEhxB5fdVEfPJr1VjU8mbf5LRmdSxwx4rFJADFSpxsPnaKrW3DcUfNmdF8WefDvhwiyW",
  "key11": "4m3AD5kg7nyW5DMMKBZ42JpUXnysJpa6DzAtgotvzciAs21vjzg2G29qtZLBryuyR5mz6owEFKpTDiBtP3fVmDEM",
  "key12": "2pMSYDEg5Bxq1ZBs4UfWrnKxBPN8dSPwd8jFRBMy6SpsVRMqoo16dnKcnTRVbrnEdFDvr79Zvw12MP8hk4pr6DDF",
  "key13": "4obfrYVvh4ayDoQS8ULRb7UHtRHTDqTrV6HCVFMBZozy1WE1YvNbjcFN2Ef8BG5Au3aHzNuunnuy8SGpkdxamNEZ",
  "key14": "2JbPzbW8M7ic7dDkoSHpzydCvY8zGZXJkWeaKXNVSoJgiTZ2Nc1xoRzELFxgXSg6S76sX2vsGXnbx57vVoJXwDmb",
  "key15": "4aqJZBuNCXMFAhxaqpFxDcdYqznpzeekHiZ65DJb2BgPkmoHUUAhUn2sG2RPtTdGGSUxZ1JqKPEuJgvuTkWF9vzz",
  "key16": "3HXXcwutz1dD7rEcqz5pfbnzdBTvAwyU3oXLsCkfqozVq3zQvjqppEdtcVHiGumfFtyZwW5MSkoMj8DTaKNtU1h6",
  "key17": "5gH4MBLwg9HprgJJv7VjtsqisRUmoK2xmb2UNU1CFp4oGQGG283v6e1x7dLR6HmTa5erLHYMn5zK7jrFRMYKQgf6",
  "key18": "SkaE2NNqg8WuvJhjZqr9BRQoXKeuogJHkWrNemFN4E4symFdQnx4mEKEdGxmJr75Paqemn7o28qFYVUp2fLzy1q",
  "key19": "4oUrtZU8ueyzEKPxGukFZ7LKP26D9tgqATr9fzn5QisNURCNmVqEk4FjBMbA3M4Ps6QQXk3UF3DLEUX9wdiP221w",
  "key20": "5DbSfdQGVCeiF8L3mXJfiaKDWswS12NcXxnPM2Kg5nW1cGsqaCUReP7wCyUZbYf8MZEeruRSSVRp1Lht9XKbMbk7",
  "key21": "6hDQWe7ZtFUjdAUfoynjoGDUgayCXMx7Mu1297R7woA2PkWodc9rCumKMDiTSF27dUfSdCBgVqXuptYs1g1MDG4",
  "key22": "66CQTLeNG3eX6wXvAkcrjrPaMbkwoBrFJQoqqfG4zZX59R5s2Hmqbn6nQ3dXU5DSbmaYqUNaCm4uQAvWz5ixkqZi",
  "key23": "33Md2Pb8oKWqx5pgCoqjW87RFrsYh3MsWDtnkurzZQLaYvFCfmE6td8qqfSEob9GRoeCkWQ3SEPHt5hXBq8HWci1",
  "key24": "2R9m7mRR3jTs5evDE3UTT65nMSDFBbFTRE9KvdbPdLXdiBzraLbAhdymjTpwWi6GDZLmGEvGb73FHtXF5Vu3Bfm2",
  "key25": "55BKXzUzYaLASJbpHi9rNWxvKfpF8eF46wb4JU8Ezyeryi9iLVzdEdTM1VJcceF4spNsH9KuqhkCfRj34yhXhkXY",
  "key26": "4iXjFTPcBSzFxZB1qQw11utVmAZNf99U2vWG4Vn6Gw15zmyy9idZXBAeqkdiq4vzMGQgNvv5J71wEHQ7ahanPaR3",
  "key27": "21t3WrtfKm2zNBSGzoS5EJ15tuEi3y4ohLq4MTMRitqpe5wdcMAEwudUwAg5bXWg2PNoNrUfhhRCtGGw3FRm9QRU",
  "key28": "26D5bhmC5zV8qrNSTezCmpVhH4jRSvF19NjFVzrDPSgCyZ2hYNZ3GfpyHMKtnpQMCAEeTSB4a2CEnQeMEuy9W6Gk",
  "key29": "4ZeeGHsjVE98Y5hXxnkS39QwgYjySmycYPLeaHo516fFmRkQCUSxsVeKHXWgiX4rqmbhRADCRCF1bbnXrHVHqpMm",
  "key30": "5FDq1uNR2M2EuC4h7Y5X1cVeHh96oi7eLYSGA46MFHMx4uJSDEf9No5e1ZQnPmA3K9FA7E79XMeDxyZuJ7Gzh7vw",
  "key31": "5KZ22ZtrS5VzdSFhzpRtwgLqWsgWQrQ4Uqvc2Q2TWDWQTQRTdi14TP2WyvPoGnwsPNURmgTGAbm16imU1ygJJ1t7",
  "key32": "35WqHQvGSf72sSL4rqZXuM4ADHnQv1ocLNf26kuW7fw9Gpqg3N3Nzq9Q7ndshCSCmAmtqM1bMWj74nbBpc6Pype9"
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
