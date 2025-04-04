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
    "CfSbdvg3SMbqLrr1F6pmR76DQJk7KvoebVZJdW4Dm2gJV9feBx6Raskcc85MXNXgyz3DkrFhcaFbSi9jMoEkvCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F6DEgpkv3EMFMCFeCBfgVzfyb4iBny36T46M8fKCLVAUpo4K9Vfow7SMDsowykaA37aGSA53ZZwEQezKpwxQN7k",
  "key1": "3VvksiPW8ifBfCAeVzqaVaGgdoGwDBhq6HmFbMezgtdky2nFFvc1WBhUpVdcyGZgg4WfL71aRr9pdT1YmpWPQodN",
  "key2": "wBELd7Fj6Bv6hJBBpa3sDmuG2NTpR2Nx1Kq1ffKCymvLCrAZKS5DK3ungT58WUirmmVnjtqzMoMJ7SCaQSHdnp3",
  "key3": "24j8papZtHZXD8GBn4dwH6Y3z2RkqMwjMUUnWHPb1w97idhnnRsjxgC7aK2FeipFSdSz4SdEDC4tj34dX4H7bWSq",
  "key4": "3Xxv7pmwn77S6hYkDTgqnxYvdmYicT5ojyTbnpGRVj4EmA9eGaKaA612WJ69aPzJtb3aEshJprvoe3k721u6Ln9k",
  "key5": "2JRJEJxc8bJz9bfKpEATWnSPpkxfghJQLkQr1STbMrocnnHcPxs5LsQGWvaSApZjvaWaFPkXUAgPyz8UojpDWJub",
  "key6": "SNdAJdDprjpcKoNjLHzWJgXjZB91AohKLF1mLKjfqz9offArMAEi65TVUTi75kqphsgx7MQdfCzsSDBQmfDWf1b",
  "key7": "Wz7s4Qz6qQdPtPpJctKTBuYGTwemnSVSKtZ1c4VqXbVadP2dnqe68co94qPZ6UPvr2ErzZ28Aawp5xjFZWQLiRJ",
  "key8": "2t4qR6rAyTSovex29QifyLzMTLxvZCbZQdFFRjBz8AaHRkTuUuSPDy9nrMcmV9ynypJzwjpDit3MLgH53j5efjoz",
  "key9": "3qX7nJEKErrrpL765CNwg1U7wdXK5PELUUUckomWA1voZt7iofMepaap7h4D6iAkcsY73tcPvc36oiLS1J3MFT7V",
  "key10": "5XWkaLeZfDEvk1GFq4qjAt6XnpEr5nkdZH6GEbUZsZdZ7Vdsn2Yrx58NJ8zh5K7WBJktYUcSRdtAznzKzPPKgh59",
  "key11": "Lu1KvHZMAodU5rz8RKNKs8vCTmfkt7wqnQ5DSBGEQreAsCABHutqKbeHAdnahbk7BrDtV1KwQNfkMts61MdGfrq",
  "key12": "2aBg8DwbPsgrCtnhszzj62ma5p2UJnLus7tK2RssWQgL8anHwSzMyQ4CBKwgE9NquSCKzr8vfvCZJawWKRrfepZk",
  "key13": "2tiC3AqmvKhva9mswmiCmf5vtjDBndmkUgh4RCbcYNrdC8382Zs7MX18JYCrt3zWvuenRp26LVZgb6SqUcrMTd8q",
  "key14": "2HRQTdsLkx4Ur8iNe1HUkZV4o1ykk3pjsDjADQLByw5PjtCy5yrYnxXfsuAyvfeyB222aQt5WhzZgKF2iS6HhcV2",
  "key15": "5BVM77f1f5Tjq2e6QTQCnNmbmBMHYQRPcKsyLjCFWdtDiY6aynrvobN3TKfx3GdLLh2g6DnV436fWk9wXathUdQb",
  "key16": "ixxQcZ9RGQaqkoSmCTmDWsSWAiVJY4Cymmc3w8XSiJnjzdZQbGExJGCNRtzYkqyP93HmSZSk1qfuh2opf1AEeac",
  "key17": "434sFh2i1eKS3EFtEBcvdkgSpVLvQkGo79gXoDQ9cpqbjDACXhNr5kxt1Gh2LE5suLwJUkEd1FQ3WsXT6KnpSa44",
  "key18": "47EaJ4YZJ7zTJxntdzcyAwu2peVva2o1KkUKxJZWF9xSoUxPsyku35QPMc8Az8ACzE5hUi7DvgDWZYKYn5bFrfmR",
  "key19": "3zT1wBuQG2nCupxqK6JmoqqhJ6Q8j98B42vQ8xRKxXmrJmm1yBqmMssNz24LUzvkpSKrwMfcvQHBKhamvV64EMJu",
  "key20": "3jRo46Fvinte6ocKE93akNPmU36z1GagKjhRyg78yiE5wYz6NRTKmpwNQYX4keJzTg5b7bZeTWMWWMYSm7gYoZ8t",
  "key21": "27UkTG6cnUgbLmnXgYxnCffdyA49YXUfDGmgdozkbk1pWFEhoF7B8hPmyfi63oJhUxMkuPZoDfcGoWdm3u3gHFx5",
  "key22": "5eN8P3QKfw3ky55hCz69ajqS2treGg7pinVnUpGs8tdKqxuoTgVGuEDawGsLCNYVpR57DtRuTfsh7DKJ1c2NiGBh",
  "key23": "5rRW5hb9GTXdn9sPR5cnZa1XdkbfMtcGZmFpEeT19zHAZKrUTYW5BP5djTFpDC83ZKLEkyJ9Jo6dGBgHh7XtDnwx",
  "key24": "3Rn1U3U9PvoksCwiKgtQKn6xmiqxXesp9qVy356T5FZ7FW3Jncjj4HqbRWBN9yZSXLVmLNSg8dpLhVDRQK95Zk4v",
  "key25": "3Uir6wPUvBf4Djg4AWuoRViQJGkpWjoFJFC45Gw9AQHneR4gK83tQ1HGwcsAB2urzbgN1W929h9N15g9RZmFEyxA",
  "key26": "2hNXenJrrDaKw36hV7JQnkk5tLBWWQqwsc5XJu9BWYBTyQQg4QBwXv6g6GJiWMwM5j8BAh7hiLpZ8EMVbPa6W9XL",
  "key27": "3cMK2yQ949LW468CBznCe64tqQdNgXu6pYD7rEN1buqDiMEZpovvHfeZMeUeeuKDXULMhCiaLNnVdYkB8eysZr6u",
  "key28": "3MtQrXzVwFNVD7ZPAMAyZJDHU2o2spp9NS8pUXiZvnBqis5yyHX3MSsmk7jtRMCpdKgpH1cnQZ1TTBtfSrzMmHN7",
  "key29": "5WVdu8ut8HP4T2vRERUfTsg74Ro8N2k9dkHfEoyc59PxBuxKY8CrJAR8dNpXWby6cZ7LoGXjgnRKbgwejXd93892",
  "key30": "21oecdvDaku87DPv878mmCNfvgtKSmWpRTUFVzfdgarCCGoUjagQyNPXRRtWPhtyFyR7SD5Knm8CBirMiMHMhYhR",
  "key31": "2an84GqpsrSK3CGDsCzSHHoeHDT7RmZpMHDKakvx7RHhyNHqi4b13Gd2nDv1FLua8crZSyiGAxBBb8CQZauu3fDJ",
  "key32": "3RwVAXX3kShor9tftn6HX1SkKmvzQx6Qm16Z1BZTkJeyq2uWdSQhi8xa2B5zMruAXaZyEcKucqDVzBBxrn1uQfmg",
  "key33": "5onpqUoBvfj5G6Q4RGvLBmzjobNdTBJt9udD9mjgWh3gmUbBT7nAG6WydhCnZLuDaR8YZpkrqijvmvWCDGLJ6kix",
  "key34": "n1asmTJVGepFW6o8sA5iDNWZwQC61ZVA3BdmLM3qToiNJmNkQu7hok6Jmyn9Tvyx1TyUcDvj8PPSVoy3PNqSJug",
  "key35": "3VDSxyAH87ivTYmHtejVSW1hL6HZyWre5xmCEoNi1XZzV1jArtPFNVAYCWSRnascGD1WdFVTuwGfBszvvV52NR1M"
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
