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
    "3fsGih5M5s8waQHJ4WtZcxG1E9bGdrEXLTHbzSLCuVGkmPoAE9VUxMRHjzzcYtm3VmU9dLbH3UVoQU5fLr5BSswd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oGS7kzfS24BaFUQEdAMjiRoFBpoZ2X2Jh4owVGKMcxTNY4np1gduY5EBnTcc6qKKFpoyhxQBkqj1RthaocLPCFv",
  "key1": "3Nxg4rwgXKcvFWMqtaJBnHfh6y5Gjz79JQenaxoXGG51tCzAaVVdQsbc8fkbybdYR6ZAd8Qbk2YDCdqhGx4rQZHo",
  "key2": "DTLw8feJiBWh3cd1kcYZ4RZWowWaBuqcHc4gAu24ReVmHw8Ay7yE88ba8VDCAmib4sSmufJAVfgqiby5MuQcXEH",
  "key3": "2St1RUDG75S3T8ZxvnMr9KmJBRGe5nm94R3DQQWZBmuzNonZyS2EbopfQdKNpvmhWkXEueWKLN3XqmDfC6LjnnQS",
  "key4": "4PVtXUkkmyk6wLrU6Z5ob7bvUJcfk9o8sEakv9krQS8J22gbvrfxo3LeNvXr1wr9MEt3i52ARbYXqZ27tKeDk3z5",
  "key5": "3bgAzogtYiWiBuusi6yqt8Zt21H8Qh3vdX68jZ9MYHpk91phTMLhnZH3fs3XjUj2V91LneHTHJFhpMgPKXCq5T4z",
  "key6": "3sQsbB7ge2m7SAah2NGemuTVASXE3iFnRvJBD6vvHhtYWdwHPYgQ2rru8qazPzYcU5UAiH9AgXP7sPAZjWUszRE9",
  "key7": "5p2WXAH32ouxX5HkYbTimvDJXoH7VQsi2Lt18C4M6YyTP4UjKGNrFQWEAhoWvS526mJ6RvXy7so9C4ZQ8xfC1xxq",
  "key8": "BMCshpqT6EDTkaCTLrZtRUz5Fx4WB6ozywKYY2mq1fkZeR1waSsinKFYuoj4Tu44sv5M8Zk3LhJMkQRBXFbf32w",
  "key9": "3aytAev9wkFhzFr7Z7RaFt8AP3qMxMMtuHEyG27hLEVbnMquMc6p8eh4ty2nU7oCbsXDZcYEJWK1UyTvJcgJtzWa",
  "key10": "2H58XPDBB9dHhTBUGG14kTwX4sYQchz63J7C6VZw9cszgqVr4YETRDUrHr9zzK7CVYftGFdSumwPpffbTPMNTVLA",
  "key11": "2wxcd4cCEWCqmJz2ntbrCUbQnarxry56UhTjMgS5br9aASSx2yzotQ4hvqkk8BVpSNiS7gFARSxWAjrryzDQda6g",
  "key12": "26U7wFhiFBxy69WuBpwBT1FbGjhE583GrHvvNpqNYExc5sGEkMESL4zUhFGzCd1vDZqe4zYKsDiDrZbAJPEDXEXB",
  "key13": "My74ymNZb5YrrBj5aTmTKkoSErrRuPJgCZ8L8ykeorEjGjUBZC4XWWFhvoSwFcM92SrjbmCpf8o5Xj1HrixvqEb",
  "key14": "5VL36ae1T1tbrykZRVuSESpWMDdc1vrqhRQ8tBTBFwvEZmeE4JkVY8Nx9tPHVnxAKrmq1NgTyEPqdJGsnGQXbCrA",
  "key15": "4devsiKozDraKs31Hcn52kSiGNbLidyMntXHY535k6Hszmxwex821Dvyym4gEPSq5QhXF6MQ1PbgC9MZLPQbBUpm",
  "key16": "ZJo69A4sBZ5JgsmRTZFpCQgeDDiHYscrMWdCR2o5FmyGiu5mDGWJoBGpiAPMXPxyvMYVeB19xPNQ6pcnRPnVmdD",
  "key17": "5RxdJTyfaArrUu4Db1QsX86s5puFJ88S29tVbiMfVkaHbQTzdT5yjtuRhLKUW9qXa2QVBv2fTd5xWnPsVcRqFBgG",
  "key18": "36wadTksFaBUmRggGBq9AgBj6JbCu39p49vrLBHFSfxhqTbgjNZa3xYc4wUZFroJMHHBVXgxZM6b4sxrA5AhrxLK",
  "key19": "4oBFEmu73qK2ujjM4ZLen1X68ZpaT4rJpWvgcRbmFQwdb6V5BPhV1jHUbXF4iz7BuGrtD79xyZFspNsVTJ9TNVBt",
  "key20": "4S2uxWk3Dwik71XXDxzqcBeNmmrto8jNWbPscVBStTLdABAjwJP3bDQW2SKTRgZypWzEhJqzg1c62wxcdiJiBz5x",
  "key21": "zzaVgi21VQeyg7E1oC83KUPFYmZaA7f868cazV1HC1ZLTAm3KVPfYFKhbZ2WNe1Fx1X1jpBCGYbZXivPVjgcd6Z",
  "key22": "Y1TkeFZEhwMGVQhkwCULssU7to5W4B6j2sYy75q39TxLv6ijZsr2AYkfdvgfHojanBfSBPCyJtcuqfRK4LmpnJY",
  "key23": "257Dg5Rn2gVmaqYtDYgj7tfbUqxNhURNMy37KbBjeDSyQSRw2hzYRBm1q8SoJzQde9UgzX9HwXjrs1Bxtt1pqDAc",
  "key24": "ieiytL28fNwhGKUG3J2qrE88UL6UesXQctXyHSK5B72KPrFvGDLRCuxYMc9CG487tVQnXjCFnXDt7KBaRDh38Xj",
  "key25": "4iHK9tqT6BWz2oqjwwKwQqnhpcYirA6YZ72tg5MNLD4D1sFVvftSBsjBzWPQztXPdxtCQ1j7EQL25CNXsQMuzYvN",
  "key26": "xiaj92VDr6bTdfdHe4vN69Je4swwi47myaV5KeAJEMrLuahKjcBtYRfSx7pST83Aw66VCXF5i9Kuwcw3G7wH4hg",
  "key27": "GwiNZk2TFr7RpyRVCs9edYMoBySiUn9Gfgk7PAa9X31oHwP3TCVVGnQb5q3KcLS719ia9SDSjHgPr2og18j1bsA",
  "key28": "4LKXQucFZKB4JLSk9c61jxPjuTfsjoBv5aCZ8SndE4YjaU5Ba1CxgY9fTtLNY1ujshPqkN6bLoXEjF3H1zaGQ6y3",
  "key29": "2J7kmcoyGMqiXUGNfczgnk3C3nZJ2xmHfaTwLyE8J74m3SUQwMydMK33Y5Bp7zC3asTEQ9XjoEELtKZPxMm16BAk",
  "key30": "2hynZJ8V3tU7jpwtKYUUGhMF5geYNQvXyPJeCapv5M9y9ghGqf9UNABV6kuh9PPfY8SwSp2nWL4ZczWPfqP6XhQS",
  "key31": "33t8BBbp3sHfnycVpvAw9Hy8eoq9kiFUG9LCjavHNg5DoFo4mHayJFALLd8StN6JKfhw9mcrnGKkpiSXW16TP1bD",
  "key32": "36tXpw7gZp1DVbF7qjGaYrEpP8Kopqx1EHysTNaAefnbZEGJYt9byijB5CASTKASwNfdiZQXUesSpPKXmJURKVAj",
  "key33": "4cso44MEeVRshcCZxLrd9rrsY7Qwiwoc9zvgD2M3yT99JYJxa77D6GRJueaj2hYZ8Xa6FVHTnXr7QToio2SBXydz",
  "key34": "5TCm6pxQbbNxzMcZTJs84iHm3YBUccbTJeENNvKjgYdnfR6miHGhtodMUsEVNgZKhrGY7EQUPfGebZ2NDz554qU7",
  "key35": "3harss8AmurwDycWo1LatjTAZyabqJXz7bqXFh69Vro4fvwnSBEsKa3TZxArEu9ZYWquHvkMGp8DredPZkFQiDnL",
  "key36": "56uaNiD9tCiXDJBChdjZMtXmHywgZbu7qUbRvyG7uSgvXtigy4m4p8SAAnei3FvrxTqkxWJPWLuqDvgu6u8GhZMd",
  "key37": "4V1sDW5oHez579qGut74sV65JLCNwmwc6dEsZVPvTmiurb41vJub3grN5vqdj684SZyrSx5C8sd9UhbcFoD94Ui5",
  "key38": "53PdNk7bePFJngLvNWdpmSzT6n66p8YCSFZNyj9eGhN4xoe9vVdMkCfMnJsLn2YQysw53D8BZQfENE121PR4xxWc",
  "key39": "2NZcqJA6feNC1gqTrsqPVfxkPLcR77zqwyktET67E4JKc2tBNDmtFNmb2KiJvqXS4REpfcuqUdrsWVvDrbChxdWQ",
  "key40": "2p3wZfR7jq8L2EU7kqGz5m7QqLFyYMVMDJhHfMTK1KjbzZD9ymd1ApBVMgp6RFLv8mVgVyp8w6bJW595rFuxGKmD",
  "key41": "5zVtU9LcifSDSq4WSZ3tonw4gQtnqaCyaHk83sKnVvP97WTVD9KuDVZJC2ZYyr1XSoyot6sy61d8di6YspCsC3Rj",
  "key42": "56BPjRRWdSHPGjh9HsCot8qAFtjGnvuGAY66ZWVbFffLJZL83AKXPTKGoyYL88wGXVB2Dr3KazAd3AZbLn52BwRL",
  "key43": "QKtAv58psZEztEitv5rNFqBJsPPK4V5JCzpL3gBNN962BUFyLuR8LB1ViM9f233G2ysTi3vy5wL425vRRUBu1KE",
  "key44": "ipHWb562vvF9TMh5cfKD25fLKgXxh6W6t7W96MdPm7Jn5B8eZZLdaq6mgTnAMYmZ2RTNCDhH46bSaqChwWbhxbS",
  "key45": "aWQyeJNNz3TAnrY4kYdxSYn4w2aPLjcyjjttHfQsHDjPmMYLKqTqCUvXPbLx3m3NyB5cFdoum3N5KVCMtiZpivB"
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
