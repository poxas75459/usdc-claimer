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
    "4GEEbqPDXj7xnLMWU7eWw8o954fZoanSoNprxXmeSLznc42gKRJwqcAG3iZiUEf67zmkr45Y1QJ31KEQASMSEG2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zMtDoYCvaYL5RD4JeLirFAhBMM2QVE43FEm8RU4779jdKjxu1Jj9Ec4zKbTKy88RGkcViLFLpNRaHKJumWpvVAt",
  "key1": "ZtXMvm4pC8Dm3AmyArjtyWYunjzH4m3BmgehKM1ScxzhCZEyMkpEkK23G1xb4nZJrQ2sV5LQM7bL8UqiU9guTRN",
  "key2": "4wN9V4nGD3DPVFyfjXeEAq4cdaWEwXuJsdNmCrhiec3mhnjRpuSs6M94mgf9C8iQDnzjUrMytt3EFMMR9UU9Px9j",
  "key3": "2XX6bjRpZz9PtktWHDrDqm55pucRuWJtKhJVZpvVSQXeKD3qpVf5NS6WvYSHdu8hsAuHSCAoJxEbvNHuW6tQSuGT",
  "key4": "4xTAKxwj3PqKjqazaNYbFxVWsayFfVerU5rWxf4THQ8HMCbRaEfaHMYXN9AdsMGuu97Z5Lb1s3QB91oevNGUH1UN",
  "key5": "3tJA3BYgfAsDmVwamfthVUa4TURCe1QdTM9MEcvWCkrY3najYZDGcrgym4Rz9QbnZXnNvYMTWe8WpqzyKmZetFZR",
  "key6": "3tw2WE36PWYwiazNSbEt4BQ1jZ4EeQXjfdwv8h2xckN2nrnAAKwRhPpnPwnyKvx8BVMMnP6xpVXMBchQjochELRn",
  "key7": "z3QLDWZEYA1oG9NAdAJxvRBAhVnpwW37WmatLF3zCsjmBFW9uRdc3gCqJATUokLdy8k4ZeEjYH1kkb8JwW8ZVRp",
  "key8": "4HKr8X8ZQPyckZthUq9tNPARaamQ7Fhb1wKkbmraMsBjLyLkEEa5jxLVRRxvznKyntUzHFDZU9uYJP1hkEQYq1uY",
  "key9": "4ijCHN5cE2szAgkbPuD8bEYnG7RgHiTUtYAjTuE3JB6ZufZqtkhKwBvvL3XJe8JK5bjpognQsxVyfC2KqvxpVmUV",
  "key10": "59jwawx2V4JeBa72nFLfUSRiER8Z72Y4FJmDdWDjdcEUatWAu7WgFUo8mDpMcdm8AXUX6hStNcmeaCMLz82FvsMi",
  "key11": "5NHxB8QtjxEmQLbNc6gse5ZKuWDqozSzA9eHyQ82bYYgPsoNdN6pv9T6wjwhALA3rdFLNY6TsgbJm2ncrKPeJ5Gj",
  "key12": "5qhqanCXb7eie6hkQTQddDn9TGWtcEa4hW6XY4YF83sufoD3jSGxF4aqXdDBJ5QYLFFCo5am9CJLFm2TARwKFa8W",
  "key13": "2mmPVUBEHeps9kmRrrpvNZVtCREwcSE7rMScgLEafdknygiFcNkKwaeoFapsAXHnbLUm887mkaZYDgG3k6MiZTi5",
  "key14": "5t9LyG61uLDRcGjZLRDh1CHqsLDSrURtZs45DyKz2XX9feosonJHXD14gXx3UJ4dpmWt1EkyuZypQNnmL9D6wSWE",
  "key15": "2TiPPaMX7zeCu8EVUk87KiQ2hJNM81EyTP8BA2kroK2g3QW6YESK9LXrkdWZuk4X1iG5Hqir11kQFMvxbvVttc8m",
  "key16": "3dwooneP1W2RuiRa4qKakJpiRTq6WmSh1MofhgmS7FnEyu5APiUJStv6vR1xU868yHiNA81PzGtmDZs2EoV9PDGt",
  "key17": "5Ta2sNUAR6GmxYdjmdJsKSUUiCqo3GZMsTMKiyRvKCxtpSkhMTs9iBZNPUeKQ3kRnx6oGSosPpvtQvieEum8M2AH",
  "key18": "kw1DKFrygBAJnrUVrQo4s4Z8T9RGaHNembwMz3TfNwNGkWWt6oTNz9n67S2cmJbMWJmpQeZ9uQpiTcYAaGAiC6B",
  "key19": "3DEuxSDMUgsDsMomBbq5nFnsWP7TsonqpQ6r4yB3LyGN7U95AvxxkiBZ5KynARci46yyFg2wkPpxeWdjfe3tXye2",
  "key20": "2VekDzarisRsjCWyEU98CJjCpomTZC2Z75GRh9B1aKLqJ8KN7ULDWD3ybG4hdd8RPVEcaTadL34q2CzFQ2gzEQcb",
  "key21": "jUaVo1XGnPdwh8h9dwgFtyzFwr29WRRyGC1Frx4ToUiRJW3oopmcZztqNUSzRx27xiwnxWtyLpZnom14dSvHob5",
  "key22": "xsuN1qWuKvjFFJ7mhVZc7dvKi7kri26gRefTTbj2GrHHDwr6etsyZE7YwsE2g8fJSDs1GXBkMgjPBEPquPmQT3Z",
  "key23": "44Pn373JC6Dps8BodEc2iF7fobsoFPumgEnsvnZXPiXjzeN13B9WzrzextZXomv3UTmBFHXHFFS77AEF9F1TehDK",
  "key24": "5driuj9e7xTpCTpd62mCZEMEKZcEHoS66bRcc9bqfZktcozzGU5261yBZY14aom6YYxPZcZWvcg7kRHpAiTQrAe2",
  "key25": "3y1zV7QQW5Qg7gyuWYHbHBBt8sVqeGbTJCGqe5Wu1pgGBRmUsDGfJUco17ZDwUfreqD4y6uZ66eGMhUoyz3F6xCT",
  "key26": "Rd8X6g2zSSPvqrgqxoiRbqMtgu3j9GMCPUSNVykAymnReYXwAU6L63CxzErqSDxSsd7dYBMzY2WcHS4CtY2kWRL",
  "key27": "h8duQyUpEU8yGEpXrs1eY4AJTpRMLBhjYoVAouxKMLjSnZPc5W8D3ny6LdfLAHE6X2j1atvhiLDufhuvGtKevW3",
  "key28": "2gRBfKsc4TYHpsYfLaLMEapgWjLRx3aKio932XW9ZoLhMc8gUCE3Rp4T2WSRCJdye82n8TvY8iZwaKw7NmqpE9c5",
  "key29": "3ebFnCDVhEy6E5Fmai2uivREDMDVaccE7zMAStokVXjkgisEZTb4udSaajYwuRonHEUcZjNEbnGXSo9dJXAdAuib",
  "key30": "f2pKLjjdFbLVu4kUCsPimHBk17cq5ZzKYpr1rn7X22gCFn9pc4hMoJJW29kGZVt1yGC7dp7gDymub1bv2MWQyMF",
  "key31": "49cZ2XuqbDmZKr93hejxhTSRaDC5TuH99tttaXwk78nDxZLitkpsYT6hQcRiVrR5aoCTVL4KRSwD87xJpm9K5S5W",
  "key32": "2aYUgodQUk6PSxyrBDyJFTMTqrYXWd6CPMRQyEcCxQBkPEGf2pACd7iKaE7K5sJnBzqp8o9F4LY9m21TEWA7aomV",
  "key33": "x2rHgVX6h3Erot1FAGWR5Dd7wZksBhyiVys1fgZSBTR9HuiERoy2D3TTxAk3bGshTkCExJRuEi3JRfiGt26snxY",
  "key34": "44XZzm8BfLKBwVwfBhR6Vv1UX7Gqs7zpSRBxjRFtAkiWrE81xmgd8MHe7mafVt4Z6Z9NwottN3UCd1JuBs3R4ECw",
  "key35": "2V69V8Fd6qGpMC3tnxEiAwtgRe6HuwcaYpKfqEmR8EfFVDC6HLc41bYidd68tf6MgQjPwSf62tdKWGnj7iChj6aM",
  "key36": "3omXeLqvSbZq3ad37e5ggifLK5ncfBzZ3s6PamsqEVJd7wRcedmZjYKjCbjFsVDiAi5wbhszUW88APPqUj9Smk7q",
  "key37": "5z4ZVDoknEZtFD2PyKESKr6dSQHzAUWtFrRuRpq1fEM5iurp8akfoughakxkaK8eg6vhj6RAxNEqvGU7qjEkba5P",
  "key38": "2ifa6aQfrTMEKW6nfUYdrb1QumS4Pzqu7Dn6GgtHvW2ZxbQtsEzaDPomY41buxn9SRsK6gvvGyNPMMfiyHE65ccK",
  "key39": "2UgCjN7L4cpHEXY3wEEGUHKYcEA3gkfVDZYbtgRAiKSvXiXiJUiq5sd7QdMb4853fyZVoh5h3QmFYBMM7YWiJW5m",
  "key40": "3oYxB7SY7UwUekiUSVyGQ67QzPAe6WWa1fTjynt1mey4o8YdGU8PjmoQeLwbQjqK9WGNpqsPhDybyW25WN6MrZez",
  "key41": "3vENVYJi8GPafLwbmwbaUKtxRg2Bg9fbHvijDcuRDhSgkFWPMNqkuiQxKviVxiucMuK5wZ7CMjCpE46Q9WfcuMtX",
  "key42": "2sAHdycutBPPaqxKZkt4mkwnJffKy7X2Mcae13CQaSx2D7Qwwp85CBFLdV15W8YNzxEZnaYe8cZjUSR7KGbWSLRc",
  "key43": "yGv2JXXNGaYhh6rktsHL453x8g2FqW8Gf7pKE2StaVmmProy1cXhGzWdZC5JobiHMp8MEgPUA6JZP6zLUXniLnV",
  "key44": "2ofi76Ed3Y9XnPGxothZtCD1cg4K87BQG6J3nzvR1hsPKnzuoxx12q156DUH1QUXxzPsMi4e6szB9QQt6xCE5gEQ",
  "key45": "5M35WpXLNHHtFBXssHUkjVJ4tH3vwfcrd97gVgta3V8LwtavmAuCt47fECCJfoi4i5AXANfSSdQkF8ZMZXU821Za",
  "key46": "kgvPSz2qvGmyf4vPLXtsg6nyXvpsLzHifztqHEutbx6mM4yjBj5jeDkD3obfcCW6XjpYUonK98cBqzjPya6tWDW",
  "key47": "4thzpS6cXeSVghgWp5GD8QNmiT4hWAqLT9Y6jP8XoEUrnxSvLzCuDts6LD22XpRUf9xpmgDot2bVNM6KRmk5yEaX"
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
