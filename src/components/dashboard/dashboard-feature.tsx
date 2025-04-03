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
    "2BRQh7hmBvweqmgVzgqET1gPUKphuDtHVARfA4DPUASK6D1Mf6ATvYHLUg1AqZHzK2TwrQok1j1isx2esUELb9b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21inCnzoX7hCiUXUDqi8nC3mWKfLyrxEB5D1wrTGek92TXuBewJG9cJJZeYsjdwDG2fgRUm7iAXx3c7mXhrdULfD",
  "key1": "3tn4bQmqsMUxyT1w1NNem8cNUHFJcd3UiRFhD481erYpieBtSZcBgkFo1MhQJ2EBBnrtPnwtzxZ4U67y62iC8sdL",
  "key2": "t1CoHEGyzJdaXJ5HQagtcZNH9FgtLEHJKxuZX4swoke1zW84rg682DGANyGEQWsoix55C1UjENjDxEDDtEh8DF1",
  "key3": "2VqTdWk852WE7soico8RnEU21rBC9vN5MrPNtGHhdeDJa5bDx1Cguyuphut8CC9eTNa284Mmc6Lac7whzFjtwPhu",
  "key4": "5a9WRmaQtw6cLXAGQQPtx7Yh7Bq9itdZjMYZrzGpdzPGM1CoJpyvZPeUgoAEqp3Ccqsp8Wmg69ZNNS5fD9pemdTy",
  "key5": "5sBbscieT5gJGjPfR5FMm93gTa6BaGzrgQD9EB16EJrvN3NbbKf8oGg6zvY31rBba1nJFKzhYLEs2rwcJn5jLDjE",
  "key6": "L9MLnTgvqgUCwmGMY5BSE3a6V5pxRgcJTfUae4ZYhLXNtgwD9M22fFXJ8kfr6p6Wsk6Ggb3hovEofUavqo65VkA",
  "key7": "2YLzDwzwL5c1yZVqFDzTLm7SQodpunDfwyH57V3Vr6FWh7jQ6xBgtjCedokmSLyhu6mJHRYffSxswZujEtA9owam",
  "key8": "2STDa1Kf1DKc7jtHd81MNo93sXTmAyYvRBLFFmcG7fmZzyTKpJbzSco5yfynoNKXUsCvgrEoJTBBdDeiRg8N1mCL",
  "key9": "4hWLSaB8ZdRwFTB5ZKjof7AEMyYryrTKbQQnVXpYisnQjvbKZr2zFaCBv3tvvzVwqCV8Q5uezyDgu2vCFMH1dMU8",
  "key10": "2omM7MoyPAzhesomTxmsut4NygiYHc3sprfFHQmGujjoEvxMeYHfoMKYeZBfoBPgeX1ZFGRHMqV3MDiVHX2AJhsP",
  "key11": "4ThPDrMa7XVzbrjDnAM3hmkG7PEnFpertatj5qK33jjv9NWnFdhje1vnF9feuLzxMLjomE5WZrEnpNkoppk8bEtJ",
  "key12": "5zzZBhf6BrMS3Sqz7hYomtGUU9b41zb2kziqACpXpsudMGHem4MBcsnihPTxntAAMeY2sbTgvFZkCTCH2cAxQYiu",
  "key13": "2Fpghg5saUi57rZ7BMRYkeKNaZcMMyavAekhqRkxCpDhFQZqw9MWvY84vi9L8FCLxXK8ydxz5EoWByB2EFzRJueL",
  "key14": "5uGYYqLMXGmNJTM4PJ7sbXUNRuQZMFTA4eLHWAgaoJoWqdXWNMo8xV3Tw4vUVGajTLjc3Abhn6WiqjtxXfqtvk9Z",
  "key15": "N1b4cyhnhP9mM5EQpbhtncbK3EPj1men8ng2Sfujwjn9voXBJbXQouLH6M9ow3PbT32P8EsYFQSB9X7yzh3vXzm",
  "key16": "2Gqdi51vStkaMo93R2fJQbajEaSPGKEhTyJ2MySxhqdFzuwXdxYTSA1jfm4hdeKKVHoWhPdb6ofR4ToK5NTkCvKQ",
  "key17": "AS1wyzm8wadPCgVgLRDEZ12VswNJ5gvQASvhd8T4kRozSp7tgc4u5t8PUaM4hfJLSAEK86jqWSwbnnscZd2MjDQ",
  "key18": "3egaTTyav5TATUSiMBWEdCzkF9GiazN4CG6C11douwafPy9HVTinFTYKeaVz7idSiVwzdJcXykGUDmwiUSphjWME",
  "key19": "4zSLGBs1qcBT7k4pT4WpPXKsnqjxbhBfUdCqPhD29u4zTfxY4jtQuWWF1eD9HQqGmuqLFPpZqd49YBMnPhx7ftf9",
  "key20": "5wVBSFnSRMUb41fY839YKLr4Xcq4bJFakkfx2ao6z6aXse8XFjRUSjBHoT1KJruKL1YUCqPJ4EEx5zXowPXTvewK",
  "key21": "5kruCZnWvfnBFvt2YaVupgFRgmhZN1DKpuANZ1jsTdPHmHowyJMYajfBx1RzzewauR12bdnsrkqQgXfT93ZhABBy",
  "key22": "4ivzxodeY48GvyT3WMf6mudP1fJXeo6NKskNGBJwqbmaQkmd8xuQbLmGwL7JXWwZwp2P2z93qKw1NxNZcc11jmXu",
  "key23": "2XpLArxyeGP8dHhAYKcV1rcGE2fvAcxSaou5tJFZuSH5a92bRB1uodxuDe7UAMov527NRAVFomMRWuhhMhQDrXVj",
  "key24": "5cTdRQAHWtwBiFKaByJDC1JaNpPbC9mWbBxTNK4ADUfzSAwdKhVGV6bbdn7nr3jhWyfVgWK3xsFCrwWXpvHR4UML",
  "key25": "2UfWZgfFZXw4hZ7hPtAeNDYvdfYTNmwA3twyBpBas2j19KGutVuYmvjycCyyVCArf6kvHF1P9CgrT5ZiVmYmPmG4",
  "key26": "5wfPNVn11NypCdAM11KYbZhF7XswUGw5YP3ZwdD4MhUHsXopHMAtQHaewvdyPK2S37F3PxRN4hcyy5ReWfbpbaxd",
  "key27": "45mnk962pFLQMPSNYBZd7XBgJu5ePrTyj8Eqw2ioBK7YY1GjQ5nUPM69b1qHCnidUX1c5rKKSkeQHxDNJNNGdBWL"
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
