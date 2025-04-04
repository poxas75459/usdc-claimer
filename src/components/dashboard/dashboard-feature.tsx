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
    "4pH2nhLDwaASJ4KTLSGMa3aFEkm9b5AMMT5yt8PWNHmovzooffvt5Kb6YEibGcDt5VABRKiRGhLJbC3W35qBu9XW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fiWoXA5o1frBfQbKvQfT5NnuoYxBwckadPR6PKkQ61X1Q4eoixN6DfFVkLuofuDCAEKLrjGEaipUgREQHjMNqnq",
  "key1": "2J7TAdE5gmDpZ1JKR1cgGRFTx4jqqp8BHWk1X6nBWiF6tHXJpjYZCg3nccQDEY8uJDKNV4uyHVc5r1srrPCAYN1N",
  "key2": "CCK4ZLvpAcFzA8CZPLBe2n1d9w87LUySGTUDN1WUw2wEKC5eUzNvEugTktmaP6onAaY6DT3U3iQ2HpwuEfxkAWU",
  "key3": "4SyAYSSVYuzYiBM55hfxNh5fePEA5UVLyE9Sdrj1Hqjg5yohTmbU778BSsWFw2koLQNDmR42yWZc72gcBGZSQ27u",
  "key4": "3H9ABfyPuYZp97d7t2RrXHYAPth91JY3euXEX1jUzeYdJnZnqVTD7VCPrAm5MvY6dsNvQHuYBRHCAeQB2WRdaVuc",
  "key5": "5uBGeaGyxekoVjjDT1FYJVgFLH5HZeHQfkH4HfXw4aq5Uq3SDvLh8gwSxKBKGgeUy7p3cXjedszRCXbD15dm9Wu3",
  "key6": "247346odumkYJEpgx5ipAKSkJy6wYi7gAMretexwc8xDE6R52e2FSRsDMLDGBoBDR8SfTFudeUatS4vhMdDRvsHN",
  "key7": "3rgaCp2tpFj542kWk6N1k8fHREqFkgGaeJDyahCLcuSR7uTMwjSrJ28tSXwsz6Bd4nMFACryYJn5StRVLvm6HUF4",
  "key8": "4Un2qwMUGjsAN86noL7Vm15fBQVTgSkzjkD9MqnHc2KfqsY5WSa2Ft7uzZJm8iejvERi8oEGPbbcrEYSwwLWsA17",
  "key9": "2f5oSukdr2s3eFRbCQu2NbFKUX6TfJkyabFqtTifuJ8u2mCNLyrM3KPGX39qbf1P8WQfwg6x8UrjfGkLnEgLPXDL",
  "key10": "3dosUsssXUjRvsh7fGu9dDqCmMSzrSGDcywyLzFNJxGgtbKhWHCnHc9mMX5dPcUCSAJty91RkR5AnNEVA6B2JWG8",
  "key11": "3NzJibvckNGrCKV7NoErhGfevsJdNLjy4bfdpvzghNno1vxKTZZbcdreaavk7b9itwdZbbiHjH4FJShEHKrfCmQ7",
  "key12": "2iAu7RYL7dqLkmKk8o9kg1QVQYFjbBUmdqkMDSq9TSibxjiR6nuD6RodsRqVwNgZ7e3r6kG13cprXDFKeLAJM7WU",
  "key13": "66Gqtm3YkyC7itkUafCeihtW4zLnPP6ZL9ad4wKLXpc5wW5ZMppTfmGH58XwwZjQ3ECZz68Hy5VREE1k4kpVLRc2",
  "key14": "2VeMsawExgqv8DcFnbzuMkHjN7FHiYg3NfvjLuDh7UwXZhajZ4RstL7AoviMUJumvSkN6PHQfWdsDMcMsfe6BCYK",
  "key15": "5HLG48J3REDgsYPSxKJxg74YW8vn1Vy2Wj2oYRTGB7SxmitkU1BZT9MMPwVVRmaaeYeJ7Tzr8Use6XDVAzoQAZcM",
  "key16": "5rwWjHECU4ecvwf1MJ38Jd4CNvH6Mqh8M21bxcccKg8LCtvq7jTjJ2VrdgmvXCwskqPHTBrABc9UBePu6HVRrxvX",
  "key17": "fAeNiG1xaBMtojj4hVSVVQ2u6Yw1GDsZm9xF9nRNjs5gcjd5ZRCUVj2riFEs7BzmEQ4uNwSotBu9xdrkR2NqtqY",
  "key18": "bHA3hVTuL78CgeTgsHsmQNsb4LQnXfBwVzbNKe6pjkkfwJfz872Aeg6RZsd3yuz9WMEB7i7QFQVY8x4dZ1zSq6k",
  "key19": "4qu9daSaF4ZMMuDzDZLh7SN9yatULjDdhJ8uAJUaYCu2WguyDUeK21tw8ui89DxqnUVPVbLY3cvVnANiihPjE2RG",
  "key20": "2J4fwJLaocR2D4UTs6yN7FLzmnGtwVwrfGWuzds6eB2zxBCD9g6eoXuiC94n6hEe29NPeoq6GQaTg6S2B3aQAoJY",
  "key21": "2d74JZNVwB9W4KWEvuPXFwe2twFf9v3Mz11muEQqdpTdsrSqG1P37M3qfPxoFfdQPinjgsD72wUwZUMZDtAKUc2L",
  "key22": "3eouVX2cNparyX6HiKqeuXDUxE9wfX1pN9ZJRZmpPB1uo7wmR32QXLzuqsUrpAD1nRrm6CL1qM2UP8YRhHDgRXtY",
  "key23": "4DFJFxsTuHYPpHNWgJQibh3A4FiJVKMfNXxig7QeYFfmzmPmZ8yP4X2UHbTVGpBAfpcgAdMavfahwEEMxhBG8jSL",
  "key24": "4wgBHZsnfTXEgKTEbJR3GLoty6gX9RRuiQEK3ojAsVeoDDuPTdZmsf8EK6DDhjvE7PXuVyGzWD7Kx6NxDvu8bPo2",
  "key25": "SemWu16HNod1Dq8fycX7E14wwXzVadyRKvcX5chjwE5rxko7gWobpKRQ5TAZiCC96RUqEcgVQDjRNmA2YWGopDe",
  "key26": "4Ujw62Z6pNoV5EWWD8EWVfZBQSkmGq4G2yDnXej1NNFXSrp9GiYKUB3e2m7gtfZqNrQox1AmaPWVYKrUpfXkWHqp",
  "key27": "5xyi55UVsfpYgzqL7By8hiZXuxhgEKFx4uLhG46vgduGvqjR1GfQPjxrrDeChyxdZoRXJsFrQ5cG9QziGyty8kEm",
  "key28": "2Gw9sM4Fc65KVtonnwY5fN3UDnWEbEmmhZrcPaN7XAF8Vgg1Bg8ke8ESW4JeJqQPXGLnB1KAsM3i7hKbassAMrAX",
  "key29": "4pyevX9gk8YigFoyn9rqPn2QsVVSUTPT2ZXZNNtnUzJqhyC8MAyQ69qqtuJFKTemYjp3fBheUdrYC3SWYVNunTVi",
  "key30": "2AytjupQkjLpieAcjxjpXNXXCn153UzztQkADMU4HdP9ddBQXgDVm1WRwu7bj1FT7k1ppSKrX86kn4qRHkSzGqFb",
  "key31": "623VKEgASVyiQtUrN79HAATVAEhBnR34fcAKgzBwkm9qMedTGN2HNapfo6ouToJumgsQ47CQocdkeRAJ5GvHPFpj",
  "key32": "2BwnKGfLUJ5ABTjqB5QgTsdjg1j2YbvisedupkmJ6mX7QzJhCFXKiT6719HpK9Upj3awK1QHdCRZnK65MrNKcZVP",
  "key33": "wE13d2aH7FysH4mKvEz5ivkML84JAMUeFEsvrCDQ1XHvZbGgRwKcx1n3pZq5LESVrzcJtTEZRN2ZSjqn77JWQ8r",
  "key34": "2juhKEji7bQsUYbfEctGtaZ3VQsFq7hyhTL7ivCNn3ckMrHTvaokZLrxZp8Uzqm6jwA8yiqSvBFmA8yxBq9W939",
  "key35": "2PAfH37SFdoNBxHq2Q4ccpw7TZkhuMMBuXhbppNdp5RNGDpRtDG9QqF3REkMH1HQoNY3Qd3SwDPwh3pzFcTzwsD4"
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
