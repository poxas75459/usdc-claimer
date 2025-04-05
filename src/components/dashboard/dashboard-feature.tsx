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
    "5reVWyxAQhe7ApVpuxbq8EFNq4wtpXVb5bKTgAwG23g7zL8yw6eNKhuAuYzdmWZUeAMa95mefo4xU1G6hRDguCx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7Yny4k4WrGnBq5rHZxKuSNrTVR9nEtL2yurtSYUm2G6BGYQasHt6VxAfjXrvKUxZPptWDmT3DkpgxddQhvSZdk",
  "key1": "4M1vyuwx28Jvgbq3ge6Vz2qrdpoE86ccfHmujWF4RnySgAqw78nhQj1rp1ZuzugF48wkF7qHBtbzHX6RqtgdB2WK",
  "key2": "31XxtVyWNDRuqFBhG9UPafnQkizo658mecHQQdeuGTxq5pmKEA98nzwwt2KydSNC9FiGpejFSuW1roVqRgVm1BUq",
  "key3": "2UtzBcySL7CVJRHpsTPqTDNa2K68UjhCmP5WKpc8ahT5iaKAroWGELHGGo4uojgSkiTZXrM2PdYYBa2wBPJGgDZ2",
  "key4": "2mDiv9pwQAj4WotKf2xiTRtvWqsqP8kSmr48KTzJYziyYruKE2VvYhUJDsUBCu7nmWYcd8STWEjiTZx2vJvUJqNh",
  "key5": "3V2YYqEHzSuzymMbk2BvKqp2da1RuC7acVzfG21W2XjxeDV9WoCEMnqbimfzN2VSRX7qKWwa2Do1RSZeVMipvjyo",
  "key6": "4NRVRkuk6ew45SjRMocuzw1Ag2i1FsHo6cTc9KFe8uixtbcQVD2tYMcaeqta4QVm1RnpPH677DuuxLTJQo3FNBHb",
  "key7": "BneX9FFaQMZ91k25UdbKetkGFTcabRfzUdWGf59tisXgTtMLoSBihgFzxrZkbd4NjmcA4FSdMPXi5Sa7jMF4YLj",
  "key8": "3R9LuRfXeHjkMuqto8Y77mZGKvaMweB37MCdnrf8DeJAtn96eKP5u5np32PfUWwnBb7Hm8isuNMaL2QNshfv17JE",
  "key9": "2XTkMdegFCws7KFnGh9AkVxZm4bEJSXywWbNACPisZVoDNjxyvktc989rRTtyuaNwVekZeZosKUMJFp45P1zsek",
  "key10": "4XeD3uZg6nCWh2jCyWUE1sStr5aBdSS7z8NP5vTX5qsxy88as2KAX3PvMBmuVSRL8j4YxUQWfuAwahZoqLmw7g99",
  "key11": "JxFVzwU9RRDcaTCXqF9UzCcgPQJpUobDxt78iAWLWCdoJ9vYENQZwPFjuzjCyDjDHwM38oYHoHYWK2U4H1iCGRY",
  "key12": "64G5Cpg7q9Jg6zXX3WDvozHoUnik3HfxqaM7uN61kxP4HoSU8yoWwpUgghJZhgrywYms5Sy3y8AbsYhLJJCAaeAo",
  "key13": "39rh1FigpgtQ5XqD8G3mmBrep8xV6B9pADqPtH75hXvcpPBC73GyKs7Y7KhxjKUJinGkwy5BpwSGGZsfbMwEyxK",
  "key14": "29tYDXtbH6DwogrNA3dQe4TMuhKDZ6bWBy661Vr2gx8Nn4UFvsrdi9JWcENaZ2d4j8QyNYSosDFT28YbkVUDt11m",
  "key15": "3UeLJpvrH4fdQ4GnvSUVf5BWabZ2xosXfc812cd3V3DReFnuhru8SjbE5erFuppTcyjrUi8hgjKXcwTBarbk7WuS",
  "key16": "62koMcYvxxMhMDXDXNmRmnHoQwZx5TfKDV6jZ2MG6HM4oytaXzywQYe2dwgCK3N5r8cPLKDGGW96kFqhFvmGLyAQ",
  "key17": "2KkbyQFjL8avECZk7yRhodcVJ6pZeZKBeeTP8pbKkAVyrJcDuaaJBdRGVq1BDefiW3FUWpEFyEirtVx84ZAGDMvx",
  "key18": "3V83SiqTkFoEFCTyNErQAwWJKi7dpghnHnt2Z53z34TP2GBHJUL7H2XFXsBoqqEvpKfcQYbUzxwqbkKDd2DDTFD5",
  "key19": "4dXfeVqPkTpsiJV9igzXT8cyUTg1b9YDK5RAMZoebKkB9KieybpM2n8MhiFbpH96GrSHtNa4N6UKk8XX4WEhTm4T",
  "key20": "5m51m8igGZkjxaTtSscX7tsFi3gjN1sS4y1oM2Reg3svfWDaaHP6nEQcaaYsPffQ8jrz7BRQPHCF3VqR4Li32mw9",
  "key21": "54ye9RcnwrV5NEzXTZZcHaP9yhVPoLrAgGAygxtvQ6LvKas9wXfGehGzkUe7heUKunoyzH6JmfPy5yHTavc6W8CY",
  "key22": "2zLVWCWpi1EBZBK6oX3236i4TUPRQiD4Z5D2Xcwq8ZAS1XmQRzSWgGcFH9w3EUgeU3ED3aqUgBqK8K1u9LD26R7G",
  "key23": "5iGip9CJUE5om7hQCwZsFdsrnJy4nSK9E8gfjwEeEH145fhmavPmPmZ3hkKbL7zqE5Fyg7PN8gsvf1NNUdMChDko",
  "key24": "2VJUvqRieoHkNLBPS8F4ygVwkxjRhiZzLwbCGEvjpyiCNHR8DDuD8MB3fVfJQEZdN4FG34okhn9p1a6iLomxy2yc",
  "key25": "3H7wagRwJjqXEK9p5J1dNFX8MteYVeV2nyL9KuVu2hQBHMiiiy4mnQbhKfRYmxkDvqGzpxvVBrkSkK2YP5CrE9h9",
  "key26": "3SpT9CtcxRfkpfUNLyBUwaC126NQiSfsVtnwKZfjaKujBRCPd6E1Yh8DQeExyqai5bJAgNWeJy2PhnKHxJPwWSUX",
  "key27": "QDgWyikCvUsPkphMiBS3TwuqEMh14LWjQ2eTRtdYCEgMGrFWSGf2D4Aies26rLTr2vuAbK3cHidQ1f6cfHf4Xut",
  "key28": "3ZqZ43NN4cZD4uRuzRYoNwD7z4kVXHn1dforThHHeaERjr2wTxeadjgGTdU9g9LKsCReaHnwxjffnGVGUBGfsdj3",
  "key29": "2V8vVyPpy3ZftchdpMbKtasKXtdPJawJjLNq8GQjma4iHUyd1LKgHFCC76E8BNtYG9sNffTxSreSuRkdurmM78FW",
  "key30": "NhHZYvCaNZ15gxq3sJm2Zx91BdbiK5oMoUePLekRX6PxsqgHzstExzWYHdvxRsop2bKD1HPfZ7BVipRwgTCfLMX",
  "key31": "EaorsUnQC5A2se3gHCh57axLTJyx4wJwHPF7dW8eofHVs9G1ZGDbDNmECmYn6NCSUwiHa8BesDAZhGCZaEGTBeT",
  "key32": "5tW8xt9pyu7J8YkTvUP5pakuW3EaLkY1SKnpe7V7GFvLJJnDMRZbMqYRX4vBp7pPopssERvJ1gaFgw72PcdBZSch",
  "key33": "2K5arqwfsKU1Nd25RL1B8dzy3F4KgN1Ues4xo9cZmBA1NcSqFfhx5NJ8bB895DRjvdzXMS4ww4vALP73HaKMwbUo",
  "key34": "5eekeNTm9u4XH4YMHAYcFrGxaqME2YjD3rgybFy8nbhxnF7CWcd6W3UQGPpuKnUYxt2BqcQEZ1XsZfhSuATzSTjv",
  "key35": "4teawCY9stiy4w33GEZMrSv2xzXs3ZAZ6xvyGvjfupVFczRF5JmgUV8wbdn8NgiGmAQDTjwez7BpvBQAJDAKRA1x",
  "key36": "3xMep78aVanyWf7NkHHy3pzsYCmiRU4pnQq15RkRidCgEz4Wk9xvJrKu3VhpguSukaXe6jSCEHPdS7Uc2ZLe5btk",
  "key37": "SfJoBMQ166Jb38K7MqkoBnDMaMGXMe2FUU2ca1CmBvXmJfWeaicNp6RWvGmRqUJS2u4i4SchKZY4FV6h5hG8Ec5",
  "key38": "5tE8Px66S98AbKNjJgf3TQwMNC28CrqsYbRvTxmUGLks9rC5KAE1aCJzAi4BzxzqnCem57jmPsGh3D2HA4xtFqJ9",
  "key39": "4f9zLAtSruWrrWbc9SjTZ1itqMbZPHxCwUgszf6CeGtDVzXHAJJQ1ybSY6Wx9qmgwoVe1KGixsmUJ7SVnojUwC21"
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
