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
    "3EZr9DbYbqJL9D1BZy6LHNhnaPQWvc1AwZBy9jFUCfVkrgMa8Rr46oxG6kSkadAPSLk2BpZefCqWre3dAMC7sjvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPoFvjchKygMAHAoPieCV6EhedgM1XuiBB263LPMZjEhSRvyeCYapENmbUjP4xtxdPcgGL4FmDdkXEAN5BGYr8x",
  "key1": "4ep7u4Cuimf92aocyV4eNCCLb13psoZNQZokQzYnexeicbyrSgXyS9qEFMucMMxSUytfVPWechyA8aXviTvE5jsU",
  "key2": "n5od7u3reY7bBoboBLZ3ry3TYhnVUGJ28VQn7xob5K5j2u7dTkrPBSAAHu9Spx8UNaCnisycJdnq3XMYoFGYFdc",
  "key3": "L78SWqrThfPznWWCz8LdeSsuDYwk6knVqMBg9bWjZzcf7HM8MMo4oQZjuq7Qi3rgcuZzRav1ydBZ8zt8xixLK7k",
  "key4": "32kpDR4vyz6WMFF52Dydp2wjLHiEDXas6aUs7bnfC628ykHvMXfEGMWBZDFSQmV4V4BmX5wxWXX5mQSkw9fPGWvg",
  "key5": "3C7GxjRo1aUwRPb9gEs36sCHdmmAaHZviNvYx6F7wkVq9mPnoQEk26cx8EtwLAGHEzLKyUWLLmjMeHC674cnvwwH",
  "key6": "2J3hyPHVK4k7vsiK3q1NVt9xhSQYqoqhXa9FTXpCLd2zKTuWo1rz8xVqPJsPkbuhsbk3qqGc5fBjads9xs72DHRM",
  "key7": "38cGaQ4pQbDFqTrYx1cWbXpC823AnmBdEmuZdJc9kgvwA9gUunRBhzafVZ8jqoB3ZkyT4AC3ns7i9AXYtp3FWRDX",
  "key8": "2Ut857n2sRKjRCv7KuqQ2phrazvus95XBFxfCsKJKBaMZHZvYvmFKwRqbcfVv5P83ESHQDw6KLDsZix42PwYDmZK",
  "key9": "2nNTSLTtiJPCb3SDcYGZDwaMcqgs3o49YWkx7DJK8CJ8QHWRRKgvkBaSMQhASnYDNkw6eCEPJELDeixKpRMwbjxv",
  "key10": "22pw8HhawVH8nMgw8gg8vMz8iFKbde6csLxKpk1PMLN2iq1Egr5PHFFf4q1Vhg7JGWBYCtbueYJcHryWMuLnzF46",
  "key11": "2EJNgx4CHt2hgY8ynpuitRMPnni9noaftnyHDwqbXEG8dc3CWDdhVjjfaLSPh3abfpSwpqCrndwX9oLesNjbXXxD",
  "key12": "3YpvGG1UfkJER7zAfFFeDSsQ15iHYA3DVEVYi6QoQCFtLmH4FqUhgYyQSiaRpJ2swNmwKcW3bppLhx1f5nJwbAoW",
  "key13": "4Ryff2fXErFPVcofTSr3jGxtVtjKqxSnc9CyfqRiuht4vUTrmQLSDQX553nWoRQKNWdpGPJ6yetZvL9An1a1eEGr",
  "key14": "5SacyL1beDfD67v6URvbyBC4mwj54x71iujtQdiFUKYUH2Diy358DtJ2mDz2jvFr9Xx6yugpC1A8J13n5DhM8Ngd",
  "key15": "5opSKGjBQuxMuLxk7xYJwdUqjnc62itXmdS7HF3u9riBGbeLA4rNrdJ4A44mwPbbV8ix4UrwQLD68P28e43sPkwa",
  "key16": "4JCfr6dCX9RyLAvSX796vc17kW8GHxsAMEHsZhB5QTGEkSAdvjWtTCz3R3K6Yef66irR46Qpg3tL86zDyT4C8L5B",
  "key17": "3ayAqqbmDevJ1g6ChuupJKg8amTCkcHLB1Sj4kzeVhPNtVy4CqxupxKHh8BbZVfRs3x4XFHUBd2BP5dNLNfp1mjH",
  "key18": "57qjmBK8uoRTjZ7iF82VSffXMLtudL1mEKsgwgxe5t88eEvg4aHEFCa1qdauFQhYuCmjP5X7N1Gd1ZMwcUtxue7X",
  "key19": "5Uuy7hxDX8uLmHERbqFRmxiZQR8NhgsgixZtHDnWW6SnXiqAH8C9xQF9LFj4RhPGgxwhXT1kEvzRjacHtQPVdBX3",
  "key20": "3ZhxCyLHTitgB621uC6XRcdt38fF22iyhvShkkdYwGTT3rk9yc3bywJ3Ds5htSTPGbg63TXZUhrA9P2YRviv236m",
  "key21": "cdti7qQgjz9dL3QXfdH5RySfYpotcrNPJVJNztETj4mj5Rvi3tnFTUVMwJw9L6NTFhU3ougkFySwFBvdFX7pXdP",
  "key22": "29gxf4JT2U5oG1zJiHZmfEswLPH7SekSfAdcumRHFCsFdfKbnrRu7kh86qrTgLCnaeN7nAJcDzLUfKpF6zamsyf3",
  "key23": "4XZu7VZ7rdUSTLTWJuA66c8KZb4W5yLjW1czHW17MLFtxpN2CcQyh2jgNdQv4KRhKY1NnihgXpfyZTEzwXJCo8BZ",
  "key24": "2bsYmQTb56s9qL1H8vDePDC5YCKFwGkprwdVygwfnfmBH4hgKMc9cL3JAQa1c1KyYJsFureJ8mRZdxvUMohChFjb",
  "key25": "2LXgAnJNbpoJtPx4TkcRR7uosbC5EpvuR977n7pcqgBF21ZhjFkyAZ83Ji946BL79fJrAm9WwJb5LpLRUPEFP3Qy",
  "key26": "3kkhtzQkbVpvaPpac2c2dnSCd4EY1GJsMeRzJdptzkLSgWvxyxHuYDpHqRiBF4bBy9r2tjfAHrFM5JGEHFMjjWK1",
  "key27": "3idNG9PrS6Ku4SZpkC1ZYPWRnA18iptwfJQXwFGenGAZP7h8jFiQ52f4vTS4cVz6LZtXJcFqRvxMSYR5zYjvgzKV",
  "key28": "4PrB9QsX1UcUppDAvPx6qs5CkRVCrwqqC5pzL2Den3T4Lh5JeZYSDqHcbHRwN6yTRoRegSQhnWadSe9ZbHpfTQrB",
  "key29": "5TM6FmB9gDrvaWZGHxLue3dFWJ8rAGab2FBFtM7p4RhkSNQAnt5wt7dNypa9Ptsh5JJQpUytFii1zoh5G7CQFUWp",
  "key30": "4UxZGFyNtusSAcgrc4A5M9QpGJoZyoVM1SkgsQczc75MVz5NrZdm8eCf97Gy4mERKapHBpB9yUkdMAgFVAxadqFk",
  "key31": "YeWUFWq8QA47Y52r1svPevwJcvUHgwnKHsod7ravKUjgpjBpZUpHTxuTwykMUhYa2JBAnF73WeqRskkJ7Hsr4nC",
  "key32": "35oqKpyouwtXxkCbaTcM5UfPW1VjRXqmwHnZjPc5pvGvj4rmxL2jWsW6u4nizD36jCKhBVZDTmnH52BvuLhr9K3c",
  "key33": "35PpjE1B3fGW5fSF2EwiXZ4BWPMuifVQVLBFtcvXhJj5bGDm3cu6L7or2oDz965NUU8jkRbteDGF4LQryhSsc4pb",
  "key34": "3bi5K49gEn4jTBhRCLEhRVbFrBBgxVvtf2SSg3i4qf2i44NjSjMaB2bBaxxqWfEHH84x1DEMoKqnDSA8PbV3VEq4",
  "key35": "4EnA3sgFMzWhfGE4rgnQoXK38zRkPkMZBfqXT1Mft7fwyGRNLaZGqoesGpDJ1q7mpiz7dbf6TsNDUroWob4rP3Zw",
  "key36": "3fBANrs98ooJ2LamnDm9iUaJrbV3bsMGZEJeSz6VBVUjs9RiJTVPcdGJenfW7hqP4U1jzgbbZx6Mkfa1FbDR2tdN",
  "key37": "HvrBSoTZ33F32SoAoZmWGJKMv94d3ziNYBpvJ27qqCnqASzvnW4nwQTg1WrLYXUCEpKfFP4cTzKvpTNqwhjsX1z",
  "key38": "3ixjjTrMVx5EdWzLmef1XLD51JPZaSAqjZUXeuv9aVHBPUe6NT1NYtScAQQoqeaxSJkrq1kATUruH22kiEPAdVEe",
  "key39": "4qC3mvtTL4UPyLF6avvQYbcQ4SY7zhEZFoGck9PAApZ335J6kfFBYmmckHmwhEfxfBqv71CDAxW8SUFT6UsSpgEu",
  "key40": "42vybj9LWGUqBgyFGHVUXiEWbw4XZe1aY43r4t3nsPGR5vAEAik3Kr4vXAjXvKnWwHKKsxBDda3otfckfAKyxJAV",
  "key41": "4J3GbhGUzpAANdiLP73WwQjM8zCrWBmVWNGYp9qmnFnGJAeXjAr9iHyApRByWtyU8BnkJVV13Et4GZwdQhh1HSFY",
  "key42": "2r7FFs2YmvaHsB7XonNNPDCAuuCiApTPaEhWZhtzzeQMndsZpwjZw7QTsE8sSxtLY8JBv7wC1fmc5qZ2RdW6NqZL",
  "key43": "JFy1c9CHfHgx33DEtxRQuzZZk4QNN4kkRkbuSecmNBhV2erHRACTLBJMubeDdBu8F8NdV3R1irxhb7eDQsCxfrU"
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
