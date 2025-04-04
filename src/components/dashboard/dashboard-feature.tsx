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
    "5FGJpZMoHXv492hXLako9Fk2F6NLQV4x6ewfQn16CZqmnXt1axHoCwxJZpvuz6AipXZCwchhx7cbAwty7Qafragx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfiGxwHMaNQFHarrs2aXkU5zAMyxPkEZ54vuTcv5KinCFb3BFGPs3sBWYzxzgTcMPGRW8XeZG6AfaTf6CEBHjCW",
  "key1": "2wADVKBLy6ukdSbM8oTwC2KDJnt9azayRBuKSnzPrSEXnNaBagYRhT2r1RwSFt24AHiMnFCjMHhFWQCC66SxK8x1",
  "key2": "3gxu7gugkm1ND2R387eT5BCqsswbNNSB2U7o17nPM81YEUWfzaJwsVW6Lupo4kJKpoqEqAmWKLLqZsQAUrNcqsfp",
  "key3": "3z8jPNxXCP1Hr9MpsDft9GhM6WNmejDq1Qa2xY3hg6oC8LNvYDJAaR4uF9PiuRMaeuTXxmRN3iu66EwmDdbEYiNf",
  "key4": "5CcRxAuDez5oDPF3WzbVGYFKejdXeX8mCZdWWA54AcAC4xWBaVGuTxoiL8SMCpFLiVoJUvdo4AG1UEk9Wps2ratS",
  "key5": "5BtyjQex76K1HXPRPudqxsaex9hVw832JeFasJ55MqcyjbpGDnhpSA3AVyYnSWnmckajfmmbVJcEFU2LrmFDb8kz",
  "key6": "58KuW9VByCAmeAUncW4kDWN2bXSznMjDtwHPUCoBqgX1df1FK6g9WWc5whFnTCyVs4tpi74xWZ85X2yQ6uc2Cu5a",
  "key7": "a2MRpbZJZsF8FXgUns8MzER9N1zFNibY5mjs3spskqcDNoP23asLubKqqPKVVcdFX1W4gWomZzHYFm5zL9NqUwU",
  "key8": "SqrpcH9ipK1KgidzvXZKUKVRUuDyyD7x4WAEfMKzjBetdbwh9Tro1H111k3MNrCpeSwHWDWNstExNfvF4hHkQRw",
  "key9": "5fL1KXruNJbm2M4uHA5PdW7vaERymuKvcZ8skFbCvtds1gQ8HLjMjw6XG5zSBpqCcRYDax8Eh8qfN3cgpn9EUGDi",
  "key10": "5uchPNbhA3KPoVVBWvA76ibJDLvKKdNLpXAfJP9o9naos8WyJneBDZxjeX23igrEr5WvQPoDXs66QLgRuUyNPP5r",
  "key11": "3XS8BYJzyj3hMYMnbzNmAYe1kuzzMmNRKdF4mRBw1d3HnUL2qjK9ndogDExQmCSXvuBuhqWvgHdwX5brbiyo8DCm",
  "key12": "2T2HBobbGDxuVoTKE4SBzFbpv684f55yEdVvkqGVvpXt26Y8659pBKGHpoSoHQ7XKr77PyHQW5mkxdYx4GBQ1n4w",
  "key13": "3D4TGBD6UMFL1RBC7mj9yWgnfWhzaD5wgZcj3CrxoACqeGRXbatm8V8tYVAxsSCfYTusNqujYYsApeWH7bS8dhCc",
  "key14": "MaJS9UyUaiBujfL6pPHjm5PeToLydpxv3jNLDESj88YcVeUjEq7iRqsifKZ81TNQ5mZqjETZdPJEfAvYZ9LemhM",
  "key15": "28ZPMfdCtBGb5nATwWbd7jgvHo8vFCd2o3FTQxWHxQLk3PkdEXAtvfy2kgz7Ph5PPCtBRuFnCVNu4wsZMMgR5rx8",
  "key16": "5VFvRkQkJtuUW7utfKftZVvgqs3GmZ4Nmhk2apTiZXKgva2z6Mnc5Kop1qGy53p8nYDejaH97GqSYY2L8D3DgEj9",
  "key17": "kqcDvSfW2UovN9P5cTXf33gFJWbgGcop3hJMoQT3n1AB1xvC2z4iBVMbG6CytuBLHt1yJFwr7n4qwgwnuWqGZys",
  "key18": "B1Qiu1a2DbrNjbZDfzo9ZTYNoDHzL6TjRVgCzDu8PcK3zdkE9pGiHbkBcasP45isDtEZkWAaKcFapxL5CnPWdCD",
  "key19": "3bjM8SiFaxJVqNSFGQkrATwY73LWdWcd13bBTWWhcfJCMgMF6jbpDp1uGFMd4pFZTocdM4itbn1mkdVNe1t22LYh",
  "key20": "4L8ajmckHpnUR7kCTLEfaDhE6w5AZhs38Hq7GENoneoy8bNfCE9ZbqHpKX7TYhXGEKoVRL4APCRgCLKhbDHJo72U",
  "key21": "5MZfAPXLKPFGQ8UsXW8dtqsC5nYoYXxsq7ZHGaSu1XjQcPF3qiTnJdHnyHGy2WMv4LGa2NEDC5xELdtLJquR7796",
  "key22": "62Mifv13eKdXvEoUetibnhi24wnuB8PGbA42j7FLNk5nguMd9EYxtNsTtVAjmRiic5zL5LXqcCiYxzvMbxd9hvyg",
  "key23": "Tjs8VxagfKxjpb8kEMgVrqMdCGPhBhEzMgB77wnrFN9VrudzhcmAYZWDctYZLcDNqec26eHSzuJMAEe2Wq4LeE7",
  "key24": "3wdgqZ6vwaKBxXfJ85NseeEGUyg5pCkYS4SeFPEz6qoa28CWabphgszhMqiVJpppkkJ7xZBaHYmw2f5LPYJAXc6Z",
  "key25": "3Grd3AMAbtkZ7tzRMeEChn9LzHrT5TkcXspasv8H5g3X5X2uNuBYNs1WjC4NntqH3SoeaViNVThiN77JxYRmaduw",
  "key26": "4aD3bqjGFBgRDBASoAjHpr1dDj9yAVWV6XgPTQaRcZ8urEvdUMF7YaxiT7SSjX4dV5VqmRYPUg31STcWiPXpFKBp",
  "key27": "4rQF739vDe9g3zV1ALBSy2zn47v4UDCaLQgm4fv44654hY62BY5JJA1fvovdXuavPpUmQ6kAd3TBUBTHH52kbx6j",
  "key28": "64XddvsN2pYNVuWYNEgsK4ajDqJCUuNTgQfeVxyuhfDusB1xKQjg3tKZhpyUotkNL4DLqMBBp2P571Xs5QxJx1Fs",
  "key29": "66ueJwkGdHNpw2RPap6Sx5gMrGyoVXnRqraVYCt1MEjDpcsCmu7kKrho2bNPh6J9UjA6NJv2xkwdLHpgKxGgN9fQ",
  "key30": "63t3tY2WHcygmY1NWaU79wptihCkwCwKaxtq1PW8aaFJfpNpia4gWYE2ejMWy1hjcvYUZrkVYTQNAUyXyZeDiPqz",
  "key31": "3WuiFZG5v2LqCAD2PnKC6T59WdUwFtfHw7jXE3mPxYsUiTCyP3HcQVmRUJz8UwPKHWu5Hk5gkmzJVcZFSZfvAzVZ",
  "key32": "4e5FhSMsmo7dL115VHzGkDEi1KuS3QWmHgPQEftQFUkWNwqWUHgTTPd1SDGDQvwYd52Uera145ZE1PD2BNqnwXcc",
  "key33": "5cGq5pJkK8oSXSEhSLPz7T2cJLk67YJ13nE9iUhfgsKDwNDsALqKq67og9HGT561WDD5b3t2XRu25sHDKUu3xWRs",
  "key34": "3GG5QRpUtkS3ngVsqRrbJQsNwsWf6eFj9whsCzi7Htab5SEvZx4i3kK2ZAeADn5WjQLB6yJg8Dv3PPYF1ru8Y9qC",
  "key35": "5CEqtdjhaFAXhud7VHBtfbabgsntThM9g7mE5XLe9J2P9SBNxJgwceahgm5gQaqpEP2kUCFFh87ESMzfxxRbWz1R",
  "key36": "5Jv64fHxXELTSQFuMgZfnEgNyTKWM8v36C9uRtZDJcJrimaZuA4dZamG6agYFKLq4D9AcsZwt8GVXurDLx51FLFq",
  "key37": "2Cw741EWbvWsqSpWfecrAtZ6Cca2JfnKaCGNZtszdqeVumBtmgsddVDHdp7LJKRY9S3r69FyZ4rP88VpB4SEv53D",
  "key38": "2mFSUnEcLscUKJ8KhJLgfm4Lop1ae1xrC9LJAsAuHpUuicLMUskuSywwts9MMV4kSKyNLuqWho7BUPaRyd8Pjy8i"
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
