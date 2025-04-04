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
    "41nj2pTarZcubABy6xbriXqJYxAPB8avUSq93GzSJWcXzgYLrtN5WjqF1EJ2wAS6U5i64kf6DUVbbyN9oQtmBsiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LFSxCHyHK97wDykRxDNfWJWwNRYGCHUusUGekeiKhXXnkFkcrXCW3wjEDokR4cXQ86EFmDCDYicjBCq6PnWu8v",
  "key1": "4W2xWtjVBj61Zxk4vLKsufRNukbQG6yt4kyKvZYsohJJHT8RLMyEgAPx11S6rJXNxd1e1N1CPYa2b1C6qZCeGnzM",
  "key2": "2qJXsJNEh7f2RR4NncqhJa2hZGyUdrqYt7e6pHVCmUF3Rhk3inmgpmVgMb6sT63L6otZJwkv7DxwHNpHbwkqBLXC",
  "key3": "4C1d6k5QHNSVctzCdakN9F63BYXwgHmRvgaEpCgN6NLBzuF6yGSz9aZPTYYZpckG27R66XXJ9jSyeHZQJas3SueS",
  "key4": "4XhJoYx71eTNo8RUCkRwcqEf7Y2oyJeyEFnVwKmoirMd8HCubNavUiaLWSUWt12B245v2bjpvf4CVy1RPizwiA6c",
  "key5": "2dH2m1dpc5f3ffSovxtaPBRkSYZSU5RtmapWYwnZUjFihaTECc2KsxBdxHpL2a4yYhG6ED78NrRenfxykDmepfBs",
  "key6": "5Cjyww9mZEvhm7mCt5M2WHAPqRhvG1N5KFaGZXTAGxfo5q8jiBEKXWNyaSyLGXCnGSDNGS5aLu4z2eXYyXcVshgJ",
  "key7": "2eNmYfZ7TMWbMuESGr2Fw3gaijm5rrDYFeBD8Ac2dqEg1gAPcxR4agZjowFFVwMB9z4eLuqNDp2518zHBnW22E19",
  "key8": "3bRk5QXDzUwDTLdWW3VbhHf3gXBntCKx7nzXVNLGyJh8sE4D4Kfodyz3JEDuwt9DN2avKfsjqmG4v4Nhb4Nfum9j",
  "key9": "5X3Z7EcFepV2Kbv5DUtCLS82JBuiG1RXkzZj5yGwJ5T3mfEY4Q9Z6WDNWUpHqU9TqaQnAknFmJKAeKeBUG9tNbHV",
  "key10": "21gUpbvgeZdHZJ8Sst2dEZSd2B3SheFLigbCySqC13ZXgQfGk64uMd5bdu2HpuLyHMTD72gkLkEkczut63gtcDs6",
  "key11": "4wjoBVr2P2KKCS5QAeMuVfHVgTZVe6rBANwMS8ySReeNrHGBN7dgc9pVFmU3oHAZhUHQESMwbDiVyHdr1GWzYivV",
  "key12": "51BHeeTneWNf1TGtraDgWSDH2hyaiNdgS3ArrGdg1kPHMqKBaUT5NnEcwdJYoeeUueZVipUouJfXj3iU2SCqmRKy",
  "key13": "4b6HMDXcdzX5tJpZ1bfVXL2tF6Gtoa5vv8d3mkPYYnweG9id8G8ow9qbTkx9kiUK5CbdkWVpVYo4BMv3jC3LhHUb",
  "key14": "4UHrf3tFZ1Ukiq9SqQ2KYuQAKKFSqQ4youfLpP3miGvrA5Xw1Kh7oiB6n6BTivBUC9ACiaL2WxSKVBtC6Dx2XhPQ",
  "key15": "3pVVcXFGCSm4ZULSkAqJHYZxoFvFFywxwgqcQD26FTyBM1aiaHqJ3PjCHj5jf279q9gQ3kYxEg1BNMweovGZTpVR",
  "key16": "4apjewWPiXCJhxM2YbdQMUvLU1jFGWCcVFr8tqrB4ck7pkt783x7QmJCpdxxGM4TjVwBHQPmavG1pV199tCY9Jvt",
  "key17": "3hmWkx16spe7zQAfQsjW4JGCpe9r55EvvXCvW2hqpRCqkcoTL8GcbLSrAx9m2DiQnscStnRJTeeGUAXsAvxDTxxk",
  "key18": "zzwDgXWqwBFBkFoWKj4mZbCi7CoqnTTW3u3PR3kUyYSPWkFiGnFmkoNLNN72pMJ1BbA71PM8SDZk1qapo2bdRrx",
  "key19": "3mHHBNyQvSQGkoJvBGT956C9ZjFJsLm8WZhDdg5hprHKpZtACCn7rTum6HUkQsBFuq88Mhwapdf8kU2HzkBMtDrx",
  "key20": "FJQLujiiRHdsrJfZb4TVSrTJghqCVpBTCLuYRU7v5aTZMTKG3tC1A4FNawuqXaXJhwsuzXu9PhLwsifkWpPheQj",
  "key21": "4sPW9ozULbATKrks7BQUEWR9JhotYmv1isq7Bdtiit73QsynZACm1kFqPt6dY2nVEvr4ccjXfAzS9FuXb4bK2qS8",
  "key22": "2eL3PJBVhRS1AQXBx5JTbm8TuCaK9nHwq6GF369jRWizPc9QzYGEaQRRk89SvZMpQebMgnRA3B4yFti9CmNWqbmd",
  "key23": "5zBaHRyF7gKzwGiFUzpSdMGHWapNr5EJfPJNPRBKbcZsmDy4WbU1QnTeDNpfcpcoY7uqAPwVyuYAdwcobciCwn6w",
  "key24": "5iai7dB5eAzRDgkFPnqEtiiYPYf4gf5s5strRTwrCQsP99Jv3x131itsXudJthzt2BxAp6dGBvDkDH9kLg2XNKVa",
  "key25": "mrPiZG3sDp8Ji84LE6VBB1MYAABDW6ieKH1YDvKLpm7wSrQQBpb6XaKZi75LXHiga2bSnbSNuAG3FfkpD5Ttprj",
  "key26": "dsN5NEghGJfA9vNKzXuEJRDU4V3ry5Z1oAD4J7i7J9LK4ioatzaiTDqtFYP6anu5r9oC1iQnrTRJeZsJQcoRLVP",
  "key27": "ptNKtPUGCyR1kKW8Lf6BuqvvgTmy41uuFQSkRBXgezCG7FVLfFZPcaum8Y1gRfySKMMMbBGYhR33QudbNzUT4kx",
  "key28": "ca77W4ynFBwjMu4yRQRSvV7LNtj5VVsekp4u3N1UTuvVeFwy8MoqWAHJwTA1YayXv3rc5LL7GuWKRUfZKYtBoZX",
  "key29": "3dfpH6fHSYn1vyGXHtPtPGAyNH6jb5B4kR56hv1ZG7gX1gShNgRp9xpkwjSLNpNDqBWa6Rr7orNuto3Ywh9zdL8L",
  "key30": "G2LxHnQDvSRFftmdd95eSA3ye7iAzskaADpcWYTzNNtoJ2Tz8FePc5oB5jWQ3rj4rC6L4mbZHoAph3hKZQSkX7q",
  "key31": "3xsaR75Wp8jLyV2Bf9wC86NiV8oRKZ4Kt8zqFdzaoUqLfvPWfTjPXFXzMETHxAvVu7FciN7uiTm4xp1h1r3dWyjW",
  "key32": "3CAiH96Lm2rTpLrqWzGWVS7WRarzmmh9MmMnSY38QKBzpqobMYxKU3NAbALLBH5xzt1ixdRq2LPsYuhUkTtMmCD",
  "key33": "63BUEcFnnbNKjvxW5ai5ST3PvzR1yZRGt37gTdKaxQYVZ9FQ6D1csrj8c9vyFxKf7SAK9pv3krx8W1rNH8G5guQp"
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
