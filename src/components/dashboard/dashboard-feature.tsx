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
    "4J1MZgfiMo9W1mG4sX4y25tsH7RbXBjqCrLhiCbVL1fwDv41UaEt1mFVfnSnxyWjaNWo4PHq49eCgx9WpuD8sRfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZRhUybpLAjiR4mPhz7mfWx6R3XyfiSKrLEkwNgCqqDyFez1QryQx6SZV21xXGrCCJPCwYzycy7XkqZHwTmZPuff",
  "key1": "4JyUtNZMFgSD2tWMHdZsQSGigEDYibzvi7SpERTLUTJjViQACHVfyDEMBUXvwoyy1cD4PDMbXqrjQSAZqL8L1Jbh",
  "key2": "5bpjoi8rfvjPHen6hStWVUszGagVvvKQc26uawn6tsEPTD8nzs19hdrQwM43vNLmCxQG932mkzdinHv1sDa7Q6TT",
  "key3": "638QpqNZKhjWxyJbKYXwivU2e3KXdotJKruvKZssYW1qR6HXaDe1QN7j8eXL2NehVJ6jXkeiRVQmHgeGUtCGBp2B",
  "key4": "3TneFraFyYkNU9JeujvjqaTJRWw5VJStCYwodpVYB8TvEb4hLcSFtymUXEaRxXJ99UiEs6JoWft2v9JnVoksDD2G",
  "key5": "4AYu1KPw8W2HBKUZeSnBhdpyLZCGQjHf3Rzu7GhnPjc3g3rsSLyG33wEGDXB2Gcdo24fGaKzG5PDekm3WkMzthqT",
  "key6": "5KG5hv2SHtN3vLDZD3Bvx7Mh9ThnLPuwuxDHXcctvvV7EBYh2VSZJsjhbBjcCQpHegTWxtHPF9wjz2i8YQDDEAt7",
  "key7": "2QyLTZwZ6QmEpxZBnMkTuEpeFT4vrzNRtbXdCkYjpko1DFCroBZMCDvKjjZeSg6qb3JakfjunZgcH4jEJgcaJiWe",
  "key8": "2rw6zYFvpdDPP9Bcru8gmUA27vyLK1oPxxAg5aSoqW26ta9S94hjT738nUAwRdzNeUtMt13UFnYwQxvfAoCULvsn",
  "key9": "2AAcq8GKeziRCu3EqP2qc9mqGD6jBmmSjPfRdWWaGMhEeF2rzaXnve4Wh516QPULKx8AVVjqJS1fMatpof44pWnU",
  "key10": "2xDTFPcTtRudxojUUAiBG9mMo5ThKup9ZHBE8isnCizJLpKJ9sYEQ87gijGXsMB8AVqGNChfixJ6AbwGc91MsmRw",
  "key11": "3a2xkfefa1X3WeETXMSeP1LTRZhJynCs7he7XykK5DV3meDo3yDxCXepGtkDaHAG2aReK1unoYdeRn2mtZyPzMtE",
  "key12": "TfT5zQ1wUSxXyfhdDPP4UYP1SCHzKRVbzYSZGurpMe32oQqQT7ustFrjDTNHyosecku6wkchfYBwqrwKxrqV5jh",
  "key13": "39sYoUeGfgBxofGuteTXFdnbGy82wAtsDjfokxjTy6WWrVZ3767x4sVLyHwJaXLP2k5qR3MwvpQjE93CCC5w1SHa",
  "key14": "4kzcVYrMaQsULcweqLU9JaiNfGw88kAJhYoPZPpvEGdcMEQ9YaELzDorGUwTQwU7G4Rh7hqksk9BczUqER9vf5Ee",
  "key15": "gAs7tS221xPHFHzGrxUKw2PkwdWjiuS9J3r2Jx3Hnr76NyqJCGJEqK6Yd14Pqkmk3JJ22mGT5UQSbXqB3B7jvfH",
  "key16": "2yTTpbite6YBFKeVWbpF7E99GxrxbXnNkdGpdVA8nThxTW57kfiY51RUySpnHaBkM7NBAvog4FMQDWTUJgHoc8kW",
  "key17": "nAqNAn3WMbrrxGhQ2LYtvNd3p9PEwuY7muzHH4b7Si1ePwWf5i32mk5VRPGzXqBayCiuvauSsvoxGiBhQ5GQ6fJ",
  "key18": "4eivifB38F5ampfHkgS8STW5Gd7xBbYjQmTzD5VSHF1LBmzk3mnAGjFuZJjYfg9kVX3asA93Yqee4zbo2RiQsoXw",
  "key19": "4PMMrxVDhvLEwcfGe41behKV3zyrCZkq2nxA5oPStR4jqCoDZdXHYk8RRNNTTNHJoFZsvJ3NQ6SBkKcCXFjS1bZ1",
  "key20": "5HPZQMnoLWut5vn1oCtGLnbHh11JTyMVewL1oKoK8VeafPozy3PrMjjJuhPHovPZyLdbPnV852zVkekRyyedykWS",
  "key21": "5c7ak669peRm9pz3nA32mTWPkkcXkTe5FCVRKape7Xq4y8yXDdVLAnUeaCJbfkxH9BKeeaAHhwxwBAw1M5GpKX8h",
  "key22": "2s3CbCfxsM7C3pK1NhqKSiZPp5j4dFtPcGk7YC2CZPCMEF3X8cfc1gY5h84BzmEcjtjCRvThWzEF8A5DanJ76XSW",
  "key23": "5uumthBp9pBhn9kWczC4ATFJckJ6Po8M3vGKE3UEfFisE1AZu7c9EmU8D6y9xoeB8jM4N58HYmojt5L1BrmMNDnV",
  "key24": "2vNTsRrLr2og8pmXdghE2xmE6RAzx1uDc31yewv2zm45KFgb8vxRpxpmMr3VKKctrTCSCrUrJ2Z2gndte34zmnWP",
  "key25": "2Ufq7UcgDwoYR5ZwvS7AhTr9gWTtRA71jMftsJ7QWeHeNv8Pt4f58T9bbkoTfNWQ5QBs4bFaJrnvksDuKExNTUFm",
  "key26": "434x95uey2LHTPoNwM9x9SED7jAZrjBtwdLhF8egyPZLJBP6wNLxggiiEqwc9rpQkvWNR2v6fkpxPqPhUTUQPDR5",
  "key27": "56gPQttkHaryJKsSwyuQPYnNtG97skLwhMA2mRrmmB2dWS6iByzPE75GyuY5BvFfcH7AoeEaQ5zM69Ebtc5GZ3G",
  "key28": "3fwaTDGynoRZQDGWb9HLyLmRMwDjXM6NtpjoNnMWnVj8XgbzzKYDzyxiJGJQqgqXdMqB3GnnvknkUPHWGGpmT5zL",
  "key29": "4vTiKifFyPSidzoEanuTRmxXXh1P2NAxWM6soXgy1wi4m6eKmdUXbJ3BJbkuD4bSmampvVCM1mw4KFNgCEQSzQa7",
  "key30": "dbeYupG1bJp8usrrmmUv2fLfZrMLUyzqEzUAGr3gYfVxBzAQ3PUdWseHbPExXiuTeHzVR6LB8jedmxxBaLsyNYc",
  "key31": "5GLZBWe3CXuyv1tgBwMVweYJDrRV3kE4jMAqAYoUTT7KpMtgybwPrLDty4e85aiKqpYVSKeDwHUWyDQETqKTsS83",
  "key32": "329p5QPfaSrRUdkzWqummxdnrq4RwfhjimEuCZp6kTNsoFAS8Q9BVzZhgJS4esGT6LcmcKrssLfT2wgTocsHUpPg",
  "key33": "2QujJGFvwNjKCaQJSm9UZrHHcd5bJiGi6NyypBzQGE9mMJL5WtLcbrzqabo4YcayuDNWRLVcST6AQhkhy9Hz8WMW",
  "key34": "62YiNsprsGg8sENfP3P9sgBwBx7kPtYjLwrrnEitfKPhQCBK9VUN8mqhiy1gF3iG4kV3aLdLJ8p946KYUZWYGFnx",
  "key35": "2KzQ5LZdw3ebq431oy7dmv3P7zMbqbnkKUw376xM1kMKLwNNixN79EgoRFE8ZEPCAkgFz6af9qzMrHF6YcTVuMMu"
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
