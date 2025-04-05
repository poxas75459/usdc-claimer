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
    "3o5ZuuYM4ChhfweeSEF2Cm2LiuLrpwLSbvq49ax2xkBJMWvS8xKHikWBkr3TkLe2C9R2ty4TybCJTyG3nSertbsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i95iJED9Z6Ak1cmF6JhPQ8fBcddZCfUviXJBsga5SpvojZaqKkRFg8zYSUMiiKVJvSX9pco4rCy53DybNuXpBV5",
  "key1": "vWgVbTN2ggD6uJqJNB9dzqzDsy6viMkzXWkd2hbZsAz7Eig4igYTVNwhiE2ffWeDwPMbgVmMaQLwSbAJnNuPRB3",
  "key2": "5XjjuZ1Fcz3cE4zVB2BjaWSXTBwctF2yauNx7uZECvvaAuGNSa21M66tmZJAgsh7HgtxTZpFGgawELM1crWG1K8n",
  "key3": "3v1UBpnFDvjU3pPvfXxGZbUKyqbUWow61Wq1AZ5W5D4foPqYoqkVG9RVs3w7dQKmcgAn9brfJH8tX4Fam3QjgXDB",
  "key4": "5wotG7iqPsnpSYnYV22QAKcAohHBC3WapTEyibe22hUGyrXFSMzHH7ya3K3rK5g7wxMbhxSMpSvCmR3ffYda6A7Q",
  "key5": "2ZeCbxzyq2x1RRZc962vSdbN44WfwtJvM8LreCPT45uvXkJhVMUQHDZPsMuEGN7FWzqkYzZHkUdmQewLr16ayKK9",
  "key6": "3b8j8idWyi2jdvbTHk9TM3Jm7ZG6tbz6p3jEFtJ45rGYSdAa58aTUsMkb4cdL78a7sJSBBDVMy1MFEDKT8poD2id",
  "key7": "5Xo4hW1msdiuXN8yNhYPsiVJe2AWDJmCRt4iZfvC3fhRanLjFHusRv17ns4AiN247n2Gir6H1UBDExznu4XeS8a8",
  "key8": "2BdJ7MnSmBgMRLbbB4W5DrBggi6pyYLwnXUcPEcUqikZy5xfiiBYHnQNDQ1frgXyDfr4uGyMqa22oM3HKnDnMAic",
  "key9": "2Eceec1ZV9YaU2Dfa8Kc372hkqLm4ddqZMzmeLuqVDnHW6BPKASxAbyYDCeC6Eup9obPmTWEf1Y2gCAmUds3frvY",
  "key10": "2823ywaiaeUNWyZVubsLm3nDugWvLtpKZpHpQ6xJxYqmwGhnABYz9SixcnpwRFWFjGXFNhBG9BV5VESFxzdtfrTQ",
  "key11": "5rPEDkXHR971bxDreawPZRLKWdNPvAUAJsP2zWSMnGtEaCyhqMD5SHkkxh3Gxc4G2ZfukekBozLFFoUEgg5QQfzT",
  "key12": "5YBQpUMDShhCR32bWbYaBBspiVgRvUmafnYydNqkc2T3yh9tdpzkW4xk5oQuksVevMrkVaVyvF2FdcfequBxm3jm",
  "key13": "3wdCU98jGoSjg7hAFZK6ci1ZScgkN7tQcqWTQduDVRFvp5pSYoc3yuFuZbKrdWYZPeuzeP2aSwPc83wemuiMxujy",
  "key14": "pyAPcL7xct1FfnPgRnhaG8P6sWein3qocZaqfFzQsCL7ARgpuCNZM7XraSUgmSJbkL5eqCTNMfnojc1ZgpC2jkM",
  "key15": "2CU3Tup6kHL3nktGeiZjs3ADEuGNqz3mL9eUxKv5ZGMJeMXU3KgHcieXxAZHKdN3jj1x91xh9rZzt1F6BAy35Jii",
  "key16": "4NWA1fhnJm1oBwdTpK2qnsVN4YNHYtQn7kxL3KLQy6LhKsYaGzmnzbEeLcS8RKQeYcXq1Wq1Y6jmPheT6mVhPRBW",
  "key17": "2oRh6dge8DR1ScUqTxRXamuYNajyB8NFZLRwASYVX8gaf5XxAYeyAM28fy3TpBRAnWCX35MnN5LHAypKCDPnoGoe",
  "key18": "2RKvt7asJdPBJNJ33N1q1LyjxLN66E3mDhP5YuHf39E7YvZqzYPTfahVEzyheXgpKhVeRfPC3PWNJhSosxdNbuwE",
  "key19": "Ar6568gTxrqtbk28ivnm1cGidF2nPUCzjC8973UNt8VcpZhkzVrCkb4tjt7SDabrVRX3jEGQk8pTyP7nboAKbBD",
  "key20": "2dkhEwsvgYz7D4V9YZfbCQ2zxtP8NbsmDs6ov6qh1Bgfrgi6B9yV8c4aXMDnConbrmFo7qhN9gtEoWGptEHk2h3j",
  "key21": "3cehnP5BUpUfbwEf6YEykzy4nZyZYMDt9uBordE8zcVRMAdXzTPYibW5CxCAQKF5AgKnzpUCsWyznFFUpsy9Fwj2",
  "key22": "23xJC4WCB3kR5BZqR397kUeVFgSjiZqDDgXBJbYmo1NTT1N6hPxP52RZG753w6WzPncM3oMfmgkpxY2jgMjwF4ba",
  "key23": "5uposgwzNbh3M9ucBLzzf6WmYgboh4tw99Yi2hG5tYr3TwzjqVUc9XebU6tSdYp5nA6PuSxs8GuXYamGxtJtvP8o",
  "key24": "frCSEJQ1GbmutVG4EwuhTctD3DwpbXGsZrii6S3jgfjTHj7y8G1Q6g6cvVEwGJqxtEe7ftPVdrEbvADHnWydFfC",
  "key25": "3QzuYMdLkTgZKsunQi1NuYjvKDtZA8zJedZXGzzWCqU74Q3TBHX6FJz17cLXP91f6XXHZCxaBXVCKY5D4WMqqL2g",
  "key26": "4skup6pQeLhHbWCS1EuxfkestJuGE9bRjpKWuyo6pRgbFfirTeijVrASyLUQMf85zbE8hpzqrJRhuzRJfYhzPH9J",
  "key27": "2TwKEeM688TBA1tmCFEmy1Tssd5JVZqDVxccvamspviatZJ5sEzyhNuc5ynq5mNWoDmu46JE3a3tKXjZ9zpiQR61",
  "key28": "4F4fEDpKALbBZAJ3VLoNe847WitWuiKzsjTBy7vbUuhgxB5nPuPSFP2f6bihpLacBWhSH78j4LAn4koeUZuUKQnd",
  "key29": "29NcHAUJtmxGLfRmGP3ii9eEoswoupTyNsEFec7JLLCof4N8dAsahCqyDeiv8Uyhw2K1ZgGSdvdZmS7iiQJJQ1Je",
  "key30": "4Z3q8SaxwJJqbJYNdwgyPR5JM6x5ryQanKq76z49YAVsC815m7d2c343P8cLYvgtikryoV7p6iZWBoww8jWyxEeo",
  "key31": "4hsde6XZvhX19DMPLF8ksoP5vw5GkxCfVBcapAxv4hG1A7sPumnSo1KEuCPuvmBtbwAjR77o2yoj1cjVfReS3omJ",
  "key32": "5N2FaRxn6rTEhjRhUP5F4GiAVz8eU5iTu8YUhgs3s947huxNZXvgfmiXiDeEPLHCmhefhnyNUJ7B73Xo4XzmgC4X",
  "key33": "1Kt31osxAnSH8hY8fCxJCcqw9rrzYdnTMKykPAPk4RxpLzZAMh48CjiL9AVzXXAMHgYWoC9PQkD68egLpdjqeJf",
  "key34": "3Ti3Yc9hgzm7CpGdCrayFs95qthVbkTZ7NZ8xwXrFTKcasPVGi8BXAPfm5tcAbm8rTqChr9h7GbbKtnp98rKkL3h",
  "key35": "4qxt9PR4g3yBjKP6qfG3FZAsYBRs2tNc6pkYd5mrXMDhD8wEPWKnj2or3ppMNL41eTTbUpEfSWUXA94d2gTSrJJR",
  "key36": "4ZF1aBvrGQfSrD6F9A4XYSRk6jyjKtnUo8gzpYK5PAKEbKDbZXc7DdUf14oLegWrYyMauezhaii7ShRKY7dX5uWr",
  "key37": "LCVzgE7U6zWJKHo4bf4TejihCLAiDmZGTZmk5wR7C7ZCWa1ZDEmu64X9yC1zFVEdVR4mTp5kKonBvEecTKqTouc",
  "key38": "4JijXwpB6S1T7E39Q63DsVtLg6EnMU9CgnGfrUBemBfWAGnXS3drzkXng24ZGv5BwR5ebn4QXmUWsNJYMwywcGjg",
  "key39": "wR8HSzysGY5BSVazZ624dtVH32ZYJhMPsUBnzyE38TqbV5MxFKhY9Zpmqex1UaZhzN84VGZQJKLQUM3eemrQRgP",
  "key40": "2oefgHLujPZ95heDE9WEuZEDFCHbQG5GqH8Lr9PZj2v3qtKJMLH3Ue54oKeLJD7W88WuRvJsrjrGZUHZjQCz41Ex",
  "key41": "j6h2E6KcdH2Yr2xa7xTpxQxso8KCJUtT7NNEXcGKfwCXBkCKqr6wT7C3HEDcXFSwmS9LjJ9PdSbd3iUmgnQeLrR",
  "key42": "2cac7ftGazBMGFabYAd5gq6tohBi579Tw93yWQrnCkg3DL3hJi5j5voimca8AamWYPh9qT7Gq46xy8TCjtgNCUMN",
  "key43": "3auSyYRK7KKQcu2zPvMGq4YXfiRMoWzkhThgvDXMoSkQRNALMLeEpTLECAVR18HT9Y3wXSMiEwbJBZmutW591v9k"
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
