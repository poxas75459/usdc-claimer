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
    "5zGCBP4iecNe4zvNdU4K87QsqWWi58E56vmMhjHjXt1cDjiDMRzCrZkc9mCH5qY1sio9db7272iGxeSFzfL5stZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271V6vdvdEwcrg9ERKjLVwWcqcwJYmqeBvfrdbUe1jhDeRWR4yaWsp6dx2xT7PpcKgcejj1QQZGj9sQ4b6oSkwcS",
  "key1": "3ZhkfugpYzqoSigvBo5z5eLAGwsoEFsTBrShoUrBAe3DSHozKxsH1fq8ZFNX7XBED12pHNrED7iEU4DF84898rNp",
  "key2": "1PUGT3F4YXkDkhTLsEr1PWFXYPrKSiuFu5VYLjfkago2nTXDdyymihypyAkF1zApPJXkGaHHcr9oGijtJVbVDSf",
  "key3": "5cpM3MJcpmsziJQhPfN96aETTdi37yDeu14G2sUnq7eBmaHNwipSCcRZKvND4fhACM6B9gyp7K6zAK7tGVPecDu1",
  "key4": "4ZkRmyXZD3iQQ1p4oybJHsPQ3MSyfi8TziFycTRQyeX8kMmVJPdzjwpwDdER8U4TFP6VXxiGCusFtmYMsMeBmG7S",
  "key5": "5atEE6z95GQYidCRUxQCQpDwFJxnzh1Zn7jR8KGhb5CQa789aUBNKjWYbrvFU7AtpmQGT7mSEMqt7rXSmqYjkEwu",
  "key6": "9KTzYseSzXdsz7xPXYvJHmepte1viSu43qdNUCZ72u1LyjcrjE9tUWAYu3hsux8fK4YS9X3ADxh4rd5RAMxrXVz",
  "key7": "3Th4rtp6FnnVPX6pFvTrNmuNfupQRRKdj3uZoq96hLWT5sR7Huw66AhKJEgXEZ9KbpkiD9NthgjwAUjYjw2zR5f8",
  "key8": "49pdpXpm3FtTgcNQiTy4xTGsueL9JefzLCffyoNZXDLB4DLSP7e6uRFVC5RYFyHhWFhsWVHW3qjsXi2sxprQL47R",
  "key9": "44jpDgNgXgsP9vVwfHyBV2bT4thYX2UwQaZ2aM7keoSiBjazhegk6j4dB7RKtrDXv5GqzAnh8MJ74TDzJ1i2tWkJ",
  "key10": "55CdXeMriMij5nNqMw9PQs6N8GAac7BqotFeF99iLixiwNJe9Xc4KW4BE7ocpzCCor8L1g49WTh9seouqDGvJ5ak",
  "key11": "4ktowfZyCE2L9SF7y1LrtobALQwz5CByUrMtxDAqb6GeJPjWdKoBxV7e4TcpegDSeGpwSeUnYxxFqfBv4AhRsBe6",
  "key12": "oJGKvSNEoxpwvET5YFvScJepS2CW2TaRoe2Qe7yUyGVxJCkugC8j9DZT3aXGL96ebSvEU9xNPYBnKiAhYokTzY9",
  "key13": "45Mj3Erfv4XHBetuJ4g21VuEwBAXYzDjQW1mgmTPozWxcdWzyhs7GA9riZopHCQN14aMEHFwPPJ2zq5Ee6D7vDhh",
  "key14": "4CDc93uNiA8avHB1AV2jdWYEPYYFxwdPzWLGEv2kGboiiqv9T7UCMHrYKf2B8iu7aqroiNqD91vseqFn7j3gAkCs",
  "key15": "4y8ygnmHHh1aPUZQby7Au8Ctj4kBBBR4spC3ZoYLUA1iZWbHNHASyVU2vHnHMdYGDR9MLzA1UWdxZWiiEVama8th",
  "key16": "Uw2FAuck5kZBZYJt5MTDhEGHkwAfpraHkesuUs84xpxCLxuLpzy3w7b6dntvr3XCt6DPYZsWHzYNBg6dPHkGsBE",
  "key17": "3i1HKcspDDGzwGUbwx1mnLbRUSnTSmXdo7J3jjJZXZiBi1uNRFzvNTiPqFxmZnfkQJFBz4tB8EeCad1mFF26EEVb",
  "key18": "5QcU8DQD7vBJTkBu1VX7DXe17o6C8ctC5j3h6k2vHPB1F69BewfE7RuG9v79inoyuQist8LzykP25jnAMXKeJyeU",
  "key19": "42ddkMNKPR3VsFidML5CcD6rLDXep3wiUDGrSbAC79ibpzSvUu6PXt516cXRKiwM9CSjcmLT6AUcY2RD8Q51Hwiq",
  "key20": "J8LB6JapTnsg4wymHXozdP2NwVefi2e3aYtC54vGr2ZgqEm6N8T3pGFAPdda9143FW1ruH15MeGihkfhgRNykrY",
  "key21": "4d72XFRd4tfYSBaV9n9Wz4YABuB9KmCBJ7wRjvgooBAgxNvLcVfacY49AZULDLfyLakaG9gKosWignCXEJ1KBsJg",
  "key22": "3VnRrBenxEHriMBrW5v68X61cUqpgsJHrRtkbPoAhBYRsRTMZJdAHphP2iGERwDyJA9BoLwFpLsKTzeCwuJwNGk",
  "key23": "2fMdTzx2xE3mQBKD485vyLgEEDZ5TmTytgijiDQ7uMWgkMb1sJXtnkpxU7oqz2FTzo7gm2yS1XFRqsZD8w2JDHB1",
  "key24": "2BK3fW4UgdmTRZ56FqjudLPpihszL3kRNiy8Za8MZMpwYuboGEqx9oWX88rojXhU6CuBTkf2Wa1REcqcFvs31zis",
  "key25": "3VzNWnRdMBPCmkCaSTqQeXJ3VR9yu8LTg8iC44hRmmopTZtprQKEbQJ4eXav1xUpq5pBMXHo8KD2N2a3v4DmbPGf",
  "key26": "3syXdTquQawUnXTY7sCeBf4mWiQFy2cNa4gTwTy75M2ekGhnuCJDztELc8mjamDjYaqfAvr2CAbkTrAZBipRJEQh",
  "key27": "4PGj2Mqy3WeA5FckCfTEmwS7CRpfqsbsn5DuTS6cLNtGUHVNS4uGBCfMiNsawJYytFpSZ7EjvyCWEdyQUhMS4unk",
  "key28": "2jnCgn6pXBhjegsvsLFuGLKskUCDun5ZXcpTMXnmwW2sFqhuT5Mnm21mTqNaJ86T9qYWeNewrfBKsGACHKpuofYP",
  "key29": "57uK5KCBygQk9A5KokqxxN8feLqsKLCMAPS3oJEMYrJZL2EsaERXiUQ4nAuBZbs3uvC7MBkJANjYDvoveQ8eovqD",
  "key30": "4EfYVHGTTTVE5N7QQEQ7gqfwC7prUEfQKKtv4mwkTvruKEDnwcCH1UshnL1N6fotVFrq1TVqvTHeDrcYM4yQvDTJ"
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
