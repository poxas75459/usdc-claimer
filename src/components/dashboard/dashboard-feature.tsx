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
    "3NpwR1wXzCE8ZALspZtRjVGDiex6DAeestxsexahjVoZiLQzXJon9hQMinmyY16bvYf3UhXJ6PtPSNsskF8z7tXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tP9ZkJUk9PQAzMQxuXXfa7oXqthPpjLKptcHyzjrPHmCpQ5xtASNUW8xZ79aMf2ESMjhDrrQRMx2wb2rYBHy466",
  "key1": "51hcPdvadGGPy9d5gmmvpz4uZdAuoM5HWEmukGcASg85zjhDbUA3nGUYGXV5U2PbbE7HtdCzyViQPWA6dVBJ5g9a",
  "key2": "5tSMVsL78cofxgoMcT6LCEnC15GCg4Wsz3CPytXQaDLDdPFvphQCAQcbWzhHFz9q2XiCgLnHmAUJpoPRvejF6e6X",
  "key3": "22zoAbBxNtARYrnxQvU6HdzF8GU9NtJ5ysCD9friCTPQqdvhVp1MVUaf9VFcrxDgyxbdESWoUEnZzao5YmUQQdhi",
  "key4": "c12firvrYHGW4mpPG7mn2kZ2amrWbN1rCBGMbdjSkmktZf4v6dZqpj3MbTAogAQEQSgGiVmvnzCtec1qfi6kHBw",
  "key5": "Pr4rKNBKi8c98ceeEw37DAjnz2ppef7MP5yjtRrH7MG2gFTThdUduSkuyLMvnCaCwCQTrwia6ycVJsUwTNqMSvn",
  "key6": "23epq9iV9kJcojri7t7QmeFYa8SxMZBzgjdbKjWGhgFTj4J35QtzctcbFPRFJSPghobsd25PiGT3aVzt4amdi4Xa",
  "key7": "2VLxYEb3KFkMpae1HNjQmUJK5WsaRB3Pd1Q2GGQRoGFF6DDnukaU4faN1oDXRCkyUY42x29nimYrdiz28C5ayxo3",
  "key8": "472KFiuMuGcBDM8fvpxQe5QtFKqXWxDZ3nZTPgB6kBeUgrDD1bZA9Yi7xU6vSqUdNeVKgMB3U5uMYybsMHkokE3e",
  "key9": "26hxP9mM7b4vG4ozNgh1pudD3ijqnnddfX96QyB8CA2h2vc7Q1Aoe35vKAPHqvCoLsKeDDGJu8EtAeGWWsZhTCm2",
  "key10": "2QyujwzTVzbzuU6aB3C1i28WgFStqtxK1RqveEmajN7Y87zzozcogAtQUo9yQWN31bKEAgwEkedqHjnRkEaZX77h",
  "key11": "5KgYh7PrfPn6nPEF5SFBCSAK1AiKJhwNcRhtBFjZfvHcUcux5FWx3Lh3QgJwzwJkQRVhuSErLPerjMzsTyctzUNS",
  "key12": "HERZ4A2ENx2wARY7y8UbpUyPCDpm8AQwHPQYCPddSchRAUFSQPGkqRP5p6Z61nL3z4pFBLgdPodz8h8QbtCsQeS",
  "key13": "3R5smNZBBqgRmYfQEttqvKFLVdaZvnCkreW5ffEQLqPXSmAve8HtaTQKa5swVaQphRiPTAAc48kojwr3Lxjob6ic",
  "key14": "5nxWHrXcuhexHKkivPxhpkMFC8eCimCTXQqwseo2ccBismxQVnCa2eWcLnMxfkHeL8DjQzkff21x9fBn3cr2WzPi",
  "key15": "DH2VZPSoUYxZNf8TVYgxxCARHiTmVesSioMTnWFQhDPh7nEmyVihPLvQUhYhJfpQt65tLehdMGDFQAbAe1DWkoV",
  "key16": "3fwurLSKrkbQjNHeTJEbxwzkZcYTqBxuw8nG4qFeGV6Cg5nEbREKNZfGyN1diDUe2Vudy5nEcJJTVNu2VFC8D5cM",
  "key17": "4vWUvhhktvPwZYq25jmeircgT3qJXrMqFr49nX8fznD3TwCnWZrB1e5GxW3VSzoroEz7b3JB95XfdL8S2YxUqhva",
  "key18": "4pGaNwQhRCTc54iEJtEWbBv6FjtjWUANBcj9tsW9ReDAuP7S5LR9E6LLk51KV7zgFQh8uBVgDT97MqbwL6GdVWSw",
  "key19": "4hA3wHMmJVoVjX7dm3jCaD7CtBckEsefErkik38zh4CXQ7tEzqGQ7SmdS35jFu8Uwtk5qjc6L9HPmXmUATkxtUmV",
  "key20": "ADwaS1aMqQxbBvHRFC9jo9ZhVt2nRNBY5pRSrFHouqKPc8SeB1WDWbYqXF1JC1rdR7RbeAQeNabx52VrhC9Wtfo",
  "key21": "65ZeJLScG536os9zcbd34UA489hkxaszNee3n7MhJx9APhFq6AkMvAFUHvfBSMQDZFenzy8B71xrfXsrDJNH27Rk",
  "key22": "27Mt2TjjLXT1VvCYYgmxaaPZd3yHaLG5FN4aAnA3wKZQWJ6AxPGcmWnMTTBcgrnLQyJaw2FAkTk3ixk2DWiUkoe3",
  "key23": "4f9BmoTVVaCerfPyecaThiNUfhutQNZrBA9vB5DBQ9cXnJQSKVW1R5fJUpJy6sZTPZkhgJc3vV6WqcMVMbUd7KrV",
  "key24": "4k7eLJcpiJRJ79APzsYDJUNWufydjnAgshgyqN3Gm9FdByTvf9jUKEsEZotoYr5G6KGVinNvC1bZW797Pd8yQk1P",
  "key25": "3nVsFhFcbuDDWM2CvRMmYktzWn9d9vK8z83dNjvaKywXoefxJTCbALhdeMrSYbSLhD4Vwqf83eAaKaTx78TrnASW",
  "key26": "3rKRKw79WDuMQT9y7A8R5QRHpfYsU9YSNBr3ver4Uymgojmkrj2BwrJboYo6bciV8KN7hs3Ye3F9DScqhpgPss5R",
  "key27": "5vEbqaVWMMyr8VDaUidGK8nK6J682MXN4exRCcToqYLeBCSEfFfVQbe3DEesF6Z1vushMb74m9noMeNLQ1H6KrZU",
  "key28": "2rzSKr3N3khMmpgYXN71VyEdGZcEWu19CQjFehDgr2f7Fsc3RzpG1XyMhkBQoWXwBNDV4xe6xKWXTi9RKHUZZ2MS",
  "key29": "5jqncfZBRRkCEbMiyawuxh7YWfk7KvRamP8WqhEnwJyeaUVgpHcBpFvM412PmVAAo1D8e2XLDdpUFWyqbroPNMD3",
  "key30": "2BvViKSE9MGFgcfksWSvZvTK1zuc8HSnWu1XWq4ai4kRLdwCJsoESoi4NsXVp2B4sQUe1N9JfLq3hdtUwJ2SzSQX",
  "key31": "5NdjFbSbvZSDVfu7G5j8XLntXpSYbQx5UqwNeiBFRtptVngYg8FnqdbsSa3TYShEjXfNhAob6RwruqqphbNPjST",
  "key32": "iMGCqxURgSwmnmnEvEuvXTkcMCEYFEjFLm2tiHg3MfHHeDWMfNezy3WeRwNLzDRciye41hHP6wtf9GjAYzPNYR5",
  "key33": "5nLchE51ZGmHQbThKng9oo9PJKgFDW1hieW5ZhjfY1dPXWsfKBAoajzFnZTqcpFatMYBfj5C7AFKzBVGmrnfnQt3",
  "key34": "2BeiBZstskTH1e4Kg33cPfXf3yterKHzFkwRYnKkcixvXoZmQsRfvRgZwAv8UhGZF35SYbYWJj4cVaxHvfkkna9L",
  "key35": "44eAG2gqmL2FoTHLnftgDQjWvVQDjsFhqqsChAkXSeejx7dV9YWAqCV2aQdRm38FqHGKuio3ETg8kEcgss5JXqiq",
  "key36": "3CNbDT7pv3i6vCvc6jKyPTriR1PX5385RnoUX7L8tcVn4rpq6qhpirNJTfQXDH7f9ij69o5Z4Qd2fys3mzkc2tWV",
  "key37": "5WB3XdsnGniPq16wEDsVHGKhmaPbNxsMErZU6pyZ5K1VCSyh6Gb8yMJCnYjU3XAC5A4d28Q2iNEm18FmygdExFpy",
  "key38": "34Py2JD21CqcgiBMkXcAo3Zn6fNb4ArxsJyey1eTzTKdwYsozG7y3a7BBSj2C5BYUg1WUyXZwNoq4YwoyfLYqXNV",
  "key39": "3P1K12UHWba9H4Lz9AAtzZWdZRA11431AGuZagH1TapyZBoenaCESUPBwZCjrurpZG1tgyZx9fcqSC1bNZneaipv",
  "key40": "5WhkoC2GySL3yfNA81faNtLpvBbgGBQYibVN4WKTTbforaoDaZTYmjf5YCaWrv5gHVQuYBgumf9QgbZ8DRz7TGxS",
  "key41": "3nA2ucEGJb8HUFQZgXxoLPekq8NNYBdAKc99rr9N7axoo2diqAo8mWq2S5LcDAiRQELHREU1Xp2ir7wNh3Grv1AR",
  "key42": "3UejxE6uyMj7UFgc6TZmN9yhuhma45jWTj6sAARN5yuu1mrXw7p1AqKPDDg8GzQMzgDKLNDC7C6qj5SQZNS2zXvs",
  "key43": "zB97F4REDzExPXkRLEUqLv27dPJofkmoLnp1BGLu3drRiCnEVZFj3hZYB6dDweN4qnkLkEa9rGM1SzwzDk7dpYt"
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
