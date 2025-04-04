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
    "5ShjPw9nbxsiSFcF2znRjASgTbLdoBgmr8XaMvFi3WfMqnqMMS6mHUgDVsMH6ndrR9WUnwwrSmnZM9We55RkrfNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QECtPEVK3kfcApj78PaetBxW4ePTCPKsW1S8Ce9w2mqKJQ4p3S1P1msMXQ9FPpmLTr1ifzWv25gf9vK1s7KLGK",
  "key1": "38HyFEa6JYAieFoxqkiBbki5YDQvA4eXA6eqoPY354dUE6EibcuGbw6yM9G5SkuEEyCM27aUSpNeEH9t4nXRnib6",
  "key2": "2rUBDMzYgB1jDxJPqA9WsBttt96hXW3ywUHE6ZJVx7CkV31TAVeyjZZGqU61r89XTEXnatqv2kMNMYbJjU4vgqo2",
  "key3": "53cmnJExrehoCuisnQvGgrh1az8tAGBJziasvHGGsBbr7tAkfagAg5u1XvqYAskFkh5UiQjk3nNz7XQ3GfovMSn4",
  "key4": "z2pND3D2haexjsR1q36ScNx6wdChGEMvM6TNi5Up3y3J11tLmUwKcCVndbZJkqbnGodnwBpEHmKWmf9gtwYE7QQ",
  "key5": "594KWVse7MpUgiWUHuZBjHjSCBcrgqRbQTmbgbtW5ZgA6xTu6zyiZvbKnw759k85K4tVFTdF7WVDueB5A6TCsMX2",
  "key6": "LKahwx5Z5CEnPgVD8FmgpXNYDdkPTRwymyCWwnXmSfKdRtx9S8525p4hcDiiar9VVAQ9jzCxU8pqzhdtzqe6brJ",
  "key7": "3SSBNo8renQT5brrKR29mEpfEjU8rPrGp61CdKhyJUSwsywwSD5ubzJYqidhdhdPcZ1vUch9fHfNK7UomzDdqmBG",
  "key8": "57Yx2FekTEPjn27ZwkTaenKw11SpCjnFCPiDnvBSD4c1LaLFTLVThFEAkbsoz46EDEod2cpZisJACPc4PpWTjshk",
  "key9": "47598RCSA7rNUQboa3KL69RHUSGnExMFUVqFbaEbzHTRWPvzvmaEkrZBX6tqtxzMic99QsXtDmfxsA1KUnZwCaGk",
  "key10": "4u4AaPeL2MCHx7gCYh1nwpGH1Z12af1JHTjYzoi7FrFqyb33gcx9ABHh76u7BxePAfZtSwpgwHKydQ4GPY81ZWjV",
  "key11": "62skCHSxyXShwgMGgvKBsVwkgZewAxPrvTbHGuXxmdriVApTmPKw31Ag2EsxRfJLS97uRRAs6tneKf2kb9ymWYrt",
  "key12": "4YjS5pCc8fezg3acB95h8toLbaxBKGBz81WS9RQRETr3xEimLrfd6YeqBhfzKfNuNiKj4CnLEkGBUy4v2yZPGw5q",
  "key13": "5Voh3U5a5Tvtatn5u2z8jo9ppayVkakrcWNFPpCBDGDVzz2vFs2d5JiCrp1Y2gxPsBDixjznwfiCfPzegM7eKv2P",
  "key14": "3E2bfWf56vVXv6E4c6yX2PkW42i9MTnxuDRy99GHboqi7iQaqTuhPEkpEwWGT6dSb6zPyLQFAJdwotMK1qZFF85E",
  "key15": "3kybww9ywhjnoLVEMmEwaScNQFPP7xpVHxxw5tR5cYhmtXbkU8YdY8tDHbAfpbU3GTGeqNfHMftGCBzAEUYSixdG",
  "key16": "5BkvfgEdFHYKtacUnL23Cvbag7thnio1aKCa9ttMHpWJpHb6GUdTCDcBk8uhAtM38e8R9yqzQ3HZ6VrNbqKB3d18",
  "key17": "4Y2f2Zau1rNxqcX86n12NwaXxfifQu9daaHjqNBN1Nz8XQAmdAKitNryW426AP9488dmbcHYkwYePgGMxaRD8bT8",
  "key18": "3Ckvv2SMLEQiBr8GXb3hHi3h8pBs224yyf3HVcCgQFm2QkvqXH2WT6QP3qVNMJbQC24696oEqrFFzgAo2KzTugbr",
  "key19": "6jRP3DqxLZxjEoxZS5YNTBSAdB8F5kdT2qYsA3kNttwFu69FE8yU8X5tRjoALh5pALFZAvirz2eEtNgVLX73b6q",
  "key20": "2tzc9c6wyoUxpe19BhVn982bEYPDqUwnRKm11aTAsJB5BQiCiLRu7nfdU9JuDjRe2BiDjhnhsQLdEd8rhbEc7fu8",
  "key21": "GLHXmQ34k1jFBBm5LD7DB8Gj2Z9vjJuy5DhFfCvaTR1exebwLGAsZz5FgmxKP9efzvpQWeFPCbgNssmC1dt2o9U",
  "key22": "5JM4kh7MsK6JN63hHnyUEG2dehwxe497VUbcvUZ3zWcGkgdv9Rkm43o7b9GnoQBr3VDUbMcKcfGuH1w8VsdCvokR",
  "key23": "ZqKgrPqJK33TYBBZnZLeM76hhJQa1dxEYCxUWrQAYX2RpNA7EwsGpUf8nHHTLtpQMmgwDWWYHfJv2gsXv6jU7fB",
  "key24": "NdzHsY9a5A4Rztc6cw6XbkyhLns2Wgd8hNawDvGDktUcxfxezozCCzpe58UpGFBCuXxEwsea3beNtYacQfzWx1r",
  "key25": "53PNc5rANoF2DoyAZprqgDJT5qDbBAmrLJ2Ac1H9L4o7UgqsJMSZEQFoRdRaw5tPNxwXxSsooALu53PakRyS82M6",
  "key26": "23GEVxe67hrwevum5ZWW928kbmdPZpCRG3hbP3er93D2CnEgvRKMzgTLSWzMt5tW1fmyyWJD5D3WH383BnYudRLy",
  "key27": "5Sr6cRiwFKZVadBkexzy1y154a4cF2FJhMNDngNhiNreaXJfRxznfr6rLMWrzMfBbaMwjKMmWLnZWAdYYSz9XvKc",
  "key28": "5rpy8KFR1pkLpF6Pk7vKXPLsDypdGaHtx17dNPawiWKZi6y8VymA498RrpjtozNcWVazHpbhBaCX8Prr6mVR5cZ4",
  "key29": "3t3NfZXr2P7GCnZR6Tk7wdx476P6WpgTmqJiw3WSNkXq76XbPmV67BkBYWcvSRQgjc7njYgNdR3YXSep6vmVuSQH",
  "key30": "4fmTAQaNJaoZr2VKZvPD2XupNCHCUWnDpv49NAVPNA7H4N8oguxfdJRSuJntaAdQt3ArV92kvcyMqEQAE2qeb8yJ",
  "key31": "4qLsX774vAtt7DUZQa2nHrz7jNZzShMGghxcKsWYPXEKZKM5FPcRUymvaJvnAyjyVLMeNPDrvCP5wUrdkNiCJZe6",
  "key32": "uJAo4tXTVxWuY8qSn9hNYfMYm585KhkxHJgiJLsrv3sUZwk4UWLE3ks7Eo5tiXnWnpqVm9gdNRGjwQP4dgXLZ5i",
  "key33": "3NF8VqGDTd3rj2KtWz3JsAwi1XtgU3YnVcrXEyfgpdFD63iLCptxE2RwrF8re46BoyaTne35ZNNDmHYx6BPL5TeC",
  "key34": "3pSNuA4N9mAL8yWQK1YZrJj2YmtQV5aj4jS3QLHcndrtG7ssV7A5ia5YgZLJN7HvDGHX9UtotkLw4tpv4uFcNerF",
  "key35": "3v87ghh5PJ7MhAJJqEumN9dnfoUo3qkJ1xzwsHnLfzb9rCxBFMVk7jSdPxJNyUcQBPcnf5NGrBxPSzULUe24bKEd",
  "key36": "34CwNqWToN2b5zGm5YQALtNHkepA18hVAoKpDDzzCrKk8ddjBVpE5egftvuJpbJP2ZnwXtG91PADGqTo3NxUJv3Z",
  "key37": "5bz8R2umHMvfAWpmZuL4UCqofFAs7PpjyAh9hqpGu5DWMrvmVkuqxqzrXFQKscNwdv4EgtHxP4b1bMbL7SSnPaXg"
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
