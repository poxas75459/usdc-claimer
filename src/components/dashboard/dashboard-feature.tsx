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
    "2KosmDnbnccfifaUmBXYyFwgYTNZcs1mzuk8YYssGSkrUfA9T8mKPwKvA3swTM2HW2ZYioJusV32NZjoJ2AQrYss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ShYtpErM81vvKBRdhT1Vabrri7qH5SFFH1rzRtmoezBtSexx1WxqHtAVKQ2cuFDm2MpQmtXwJcF1qMQnQjqLry8",
  "key1": "4uBRoyLD8p91VS5LfNxXechG33LHdi9KxDxWkNCZL9BtgvvVmFcwNoJ3WtW9xqGKKFPGS8y5TYVdXmQiuhN633po",
  "key2": "59tpBturCT3VT9pYrH3xnmMMR1H73eAjmR1uJ8PK54FuUv4xK2JZKoEAyfXVdWodLRgDS794uv2CcMR3JuaKkwxq",
  "key3": "3GEmCZR88YHyBBJDK13Zjj8dkvj6MWiH3DeRqe7cWTjacuAvBPabmfNDvKEa9PPvbPYZq2mRi6vqvY6P1Ep76tps",
  "key4": "2iDxnSCTr7su6RQH8MJQBhzyF8v2hsqXDenVo5NutTTjPUhuJ8kYugAECBHnCjm3kAz96W4QZD41EpJpdUSAfRud",
  "key5": "25N8LXLxzsySrWfuVbh8xqpmFL5uhsxKWJbkPZ9fzF2ogTNEPeVojpNt3AZxSzmEYqp9Aa1UmXvfuvTQUZaaTEgU",
  "key6": "4TyTTUHcT1T9HtJC2ST4CcKUQVqX1pnhYGYRCegNUCvbuGVeZk7n5DvewLudSu6i5t7QmwjTj1AZoKqHULA52ast",
  "key7": "5msBagUTV1LtZFNVS6KEUdspLJqojqAK8tU8YFSi5fFsPxi2JthnZwkshkahh9c4AoUB3Si5aeb9DP785G2XrC2E",
  "key8": "43QUKgWgJkRxxVUPrvBwEvSV1cuERWmjh7sqAMEmjDNuX6QKEbBBkX9j1zSNVoxxQ7BQmYwFia2AX3cHj29kmBjP",
  "key9": "wM5pqYnmMGfABMuLRo8SXSuLK5MXoLoxNKNtfwSBCTCP4ZvU7woej8htmJJbck4UhxBT5f6rEsEFfT6pYqfK1H5",
  "key10": "4UfxK8LNUo9wQnheFri7koTKMMcjNxC8PTNMhUywmimy9MDwJBTfKjo2feKrmsr5m4X2bt7WrGL2NwN4kX7wYjS1",
  "key11": "3Cj72FgFKt1ujZMJfVAc6mxV8z648uxuWH4A5Y5zYQkARjw3kLMnxNW859M7UpEjVqvLJ8F2msoojNzPKpTzEztY",
  "key12": "4tW3h4cJhtpWPd94HAMmtBhBrSc4dHCT4Pv7oejfcRrvwVtMwE6ghn4M7SRKb5GNdMBaY2QAto97YSo1HSu1SSJp",
  "key13": "jqQFiyetqLrE5TXpuzAKzyWqQZCcJ6jLeyZiL7jRK1VsYB42xcSaCTbMP7jvCd1KEGii1s16CN56AE8B2mQhoRo",
  "key14": "34Ehbn6Se66wsuRjoQj9DgFMjsYUZaLcHMzkzZM3mMG1NWz2gwH5uesjcDMPMthUubaPbxNhx1GN5FybyS5owpXq",
  "key15": "3eEWSNBb97dcdLdxjZZeR8w4U6KAphnJDpa4nQteR6AEFfxy3u5esTDqDEZzcoAHa42BymR4s7G9vf4xsF8WdYeH",
  "key16": "4CXqqJ1j97TxyqZuMajZLQpe2pt7xUSaTV2Hfu8U92XjWJM1yuLsVJpbzyT2a4iMbGdR2xHDkYCLpBzoLduUUHY6",
  "key17": "g1HKbQTxwAz9q2sZjmBkS5AxdEapBsRS3zcN8HM3SxJW2x93C8bDixFSQDq8A5BLCyhjCfvHRtH6JxwpZCmEEs3",
  "key18": "TzLjxctvDy53WgCH6RLNKp94Audg1ofdw4nDUvPP2cYwmtQtFVwjtHj3yUdXqHbTxD1iWXCYWwdaqeLTGCft82W",
  "key19": "4wNydm8FPEsk3U8mKqPhMPPThsNfVSjhiVM5GZxEmJ9Pkr6RqTN3SxJm3WJqMpsRowpWXwJpgrEsJ7UP3W1GSnN5",
  "key20": "5LTZDgR7kLG3DBHm3bohePBhEDimacXUFj8NMjW11oh8KVkyfdhSXk5CLAqohgA1c1v3zQo8S4LDsVBdYrrzgmYt",
  "key21": "fyqnQsVHfr6QjhDjPpvXxiCLcLpm26YHj6swmscKVEQQ1voXYd5pUzunTeAtm55oXq6Y9jZKMx93b1YiKD1j2Rz",
  "key22": "nKjQLo8qmLAjmfWoRHGqBGX19dnQqsHXotQbn4bhEHKC97Abz9V3oGiBrnYNN6X2Ln9RLrLgvKaQdRP3xXU9Qtm",
  "key23": "32wr9xJsDXfztrR4h9yVWw3HnBvfTcV6Vy25gjAx7o3McvXM8sZPNfBC1aSRBaaZeD3b6J8BatU8Tt16rRGyonD4",
  "key24": "3utn1DetSqGghKdBm2QQpYttKKKHA73mRqPRNRLjqa4mugb7icsQJLxCoN5AY4WHzjUjQNHDmgPk9H8vzn1Lhqd8",
  "key25": "65M1qaRrQkhb2vT2bskSRzvaaU8Rt7YGVMo1cgKSju6J9SHDippSKY5D3NKsc2dQXTkXrrwmTFQN9KpQx4Ht8Sve",
  "key26": "3Nh9EnkNgJvpwSyrssea8J1Z7C4SWn8HnpFMoSrCEFqRPtLaDJNGnsLPywPa4DZJrfN3WF5TR6JZfgqg5rpRSyko",
  "key27": "2oKQgLhcunQyzmVtJJvAdXqmT4tD25iuyu8Gm478X3S5rrcq5D5LbS1NDRuyzp5yk84SaHUpzhzQA33o8wDpNudH",
  "key28": "3jY91Xe9BLoQrz4EtkqXUvvAy41yxLfNKhoWN6bddEFeCTFFbQ71bJoSTmLQABMfd9TuvQNkDrYToWhfkyJXvGJa",
  "key29": "5ZZDZEoECG8EMcyJsQF8J5sMonZvcgiFnEJS9Kp2sKfVSfkMWURfzrLZz6k1tJmzRkwVCaaCq9BNRLExV5Q3o7Nt",
  "key30": "3WjUVoXwriSR6AWaNh7GjW6iFEbwUAiErNU7qsx4jxYD4EwG7pkqNYfNYa4HFJTmz7FaS2amGgb124MGcD1wgDMk",
  "key31": "5aCSouYoK13iofdwRbwXeRdJqsMzJvBrRRRhm2rFyUvasrdond515bjPUAoM6jtQ4KVpBTDuGbuxBt4XG5JUTApm",
  "key32": "5tiWRU6JX6VNWH7QMQM1AjhDEfPSjPPN2J6gwra8qPxYBJq9YYYwXthQVfbFQArnWBxEJE2hm5EVa87ZRVX5BY7o",
  "key33": "5oYcKd549jncy57Coj61MMTBvp2YmoT51sRDTnRiJnLKPtetVvCGA8wVjcW2kT7Eo4MzL9YxXDHTNnHvQoqLsbi7",
  "key34": "E35XHzf7GtfBZwUp3cAcTMAa9WGjXdffL75keArGgugisySfmCQsVh6n5ZvqsJj8iDkEsycQt6cu5YcCuXM263F",
  "key35": "6651GME9VPFTte1tbFy6poVj4R4J2SXjXjBTvCSpzRUNBuCSVM7H9U3QX3VViyZxEXfcDgutxiWqBGtpAZ46LGwE",
  "key36": "4zyBg5J3DjeDhAf3cXaRf9J965YhwRbJhFckE7WKsqBgeA3HvaGTRYhxaCDRLAR5iu4vKkhoadCZp7iAiv18cZ19",
  "key37": "4GrDSpH9pec7FQrq7a61PFKbmTY4ZHankHbUgUDg3JkAhpikeEkPWH7n8kbPVJqukqaheq1Lah5enGGAVNf24cWB"
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
