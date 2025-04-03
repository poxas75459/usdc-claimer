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
    "57efEh1cUrucJ6KdgLqdLaoGXEnYZNjTmkZiYVMYvxpjWuh2rKjZvGF3Cr7ytnUKq2miscHHUppJXmH6o1vgdc13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64BWsz52kXYqiPYzchrj7nbyz5HvZAQBAe5DTsWEESM3qiZ7XrCaLtCGNN1PFFyv93pC57AcCHBEFReAUkopzKbd",
  "key1": "3CF7cDDUrMUFiTF9qg3hrtQtskMD8kivfpTf6gQMPBSTMEn1uyhBMVpFnCMYwxoeTEPGZMTSircdmfvBkrrKhXLh",
  "key2": "32BqAT7PabkB7hQwHVWWmMbDb61SGJa2RzTmwrWW2LEZqS9ghdSJG3whuPnmmKvrVzETzFFJBgd7HBGXNSM95ywN",
  "key3": "q3DgDy5bGMcg2ee78ZPKmVdY81FcLujoWTfw2TjG1Yu1XpkcwZept7dVQHQJa9ZpwV2DpmLukJm8NDaUUr3SzRq",
  "key4": "32eiym4WiNCtXgVK7eoDsPdEHKroVS2jUdBSQLyCZydLF2ZAcFN2yi4seYFzNw9dnphKbnbWVSYmGdCiAteHX9QH",
  "key5": "2WgNZfQfVpvhNNs5ymLiWoUhexhHqjeNqiP9EMBcUzC6SBMhT9v2QBnd4rYbMQHBSW2GnpudzoXJT4z9y7arEgAh",
  "key6": "3vgHhVgFVkuSFvfm1jL5S8GgG7WiFKPGecTeW15Zyowf3rjpKmMhrsWhMi97My1isU9pCbuaPeZ4a1o9JJYTFPrD",
  "key7": "4GWNMpWx3YtAoNKdY44ZXooxBWL7qQEKCScx9i1dAkNce3oC7uZusSNXR1MzjVf62NUNB74XTudrADVHbf2uM2qj",
  "key8": "4Ub28Avv1u5asDAGcFQrYM5LkD5oNX6ZCcvejYfNZrXV3vYY2EmEJ2jizUdrqjiLkb3fZRczdAqzdZFmFXGM4h6m",
  "key9": "2M3HMJb7F89CPz3U1ncRtVr7u1giDkj81s5u6YsKCpMqeUTbd4nGqX5bCW3nUCcyECnLSL3H3PSzqvYK8bfLDahw",
  "key10": "2auffbbpDH8pYiP7SCJEu5JpSkL5EeS6ZYQieXBvZTSmRWe7Y4g8fwGp3FtNfcFp3mxe4HYx9Zcpgdnvv4MdHSBP",
  "key11": "231bSxQVEZkuYsS5GT8vnGruYrYPASdhKfHkxyE4LF96oHDGaYY3fQgwVEyzBKEfCA7QEL4fnu3M21pStE4hWkGH",
  "key12": "42pjefpAoo9E5RYzDMNJC8vTSXRC7S3ykCac5NqpvtfW9dthwC4E1UNrThx6TheMk3Tt43zSR6BteDEGa89u1G1A",
  "key13": "47vobDdzxJeCr4PokqC7yHtUHTG9xM87gJAzRp7qaUb1xACXgjuuuZ8YPi9ttQcto81FGyG1GBSzkuQvhZ8M8LQ1",
  "key14": "47PCdq5Mhev8Pyp32j8Q6WWJkxgToVL7Nv1DMAhub2vrRBZj45GAzt84D7sSkhfvGNDHJbvnd5XZZMhb1Ljo5fau",
  "key15": "5CTTZCiNKJEP2X8Gfpx6Qbg6T4UAHNthVv8DG3jrQTGuyUBfSHj7frRgSWpxT91yd4xzACYuVLmTZT5Pzr1rj9Ma",
  "key16": "3EeA4dqsaTeZqgTEbcUbBBvEjqPfvk6X4L29Hn7RchoHNGNCRuJgAeA8YDCcypLqstku95jbhCp2G9evpdF93DPv",
  "key17": "5sCyeiLNc69LPimfKZGduKu3YGJtwdJnGoqooUeiNucc8q6aoZ3QmX42SVcbLBuJpGnbFx3q1Kf2nZkPALhMxmsE",
  "key18": "3w7mnJeC7MjtPoLS9CWJbK7qneBckEa7uYwEskdVRpCQwrFVfBVuWBtj471rW5iyLMXzviZYuUtQMMA2Nk3wQEMZ",
  "key19": "3rL58makJKqNgQkpPHabT5XBLEyGVtZRt3hfhfh9kUntTKYeCWugnG6b6CRfipKFY4gjh8YER32NwqrN2iG6BRfg",
  "key20": "5ULzTAwZvjLJVy5ChyT4rQrqFRNdFBTpTLSrzHFJUFkY6XiiKAnqRicKRSk7wQN5j7uHAYZWc4RQsMXew9AfFVMD",
  "key21": "2jyV1DGkhn5PNw5c8QcGDARKY7eRm8RNkUWWyN7tmKN2VHtkQJ7yRLBkjJXV6AiJJnZDcUHL2UL3sSbgreWLy8YQ",
  "key22": "kmN8zcBxXWrHeGYcxAS5xh3XahhrJkrdCMGQjMWXQuzvKa3wQKXoupvDqsbDB78FvsboBhTV4vsSwXNkMSmWgtQ",
  "key23": "48GqwsjsocfyFkhXnJbqSfJUDVc17og3FVa9zSKXzEgjjsppi2J23vY4WWSaXS9ZNVjieaYJKCwUWsLRhr9EXxSC",
  "key24": "2mPMDKhN3d4zpKb7Jrvtn43VDHFAYkMM2pdxCXis1yieLRpwZjAwK69SbNtQN6VyM7SV2FQYhqkHa7Co8xE7zwii",
  "key25": "4hCAX1qLde8kKZQzA3RLgfpRV3e6eYRgze7BVuAyjg5D1VsN7kR2nGbawBF6L7dLyhzz11HFq9kN5S99NMkMH5sM",
  "key26": "2Uxb2ZeiBZBRbCQ8KvYjbZaSwaBDBJxipheaRhWH1pbjvCuGjFkFocsGyfK8VAKoaw17HqzssPyRaGmASWT8BePV",
  "key27": "3YLQ7TqCnqiN2B8us1Crcqkhk5roRZ2M8KUEAYRhxp5LuaKpKcYZbg32pLfLCADpmQHUbxNQcMkSnSuZAqRrQ21f",
  "key28": "8synpWLLhH24Yo7vSbBaBMgeWdLsMsbFWhugxo93HpR3LKdyS292LCFuj3cZ35ZEYn9azLeKaggS8j1929csQFZ",
  "key29": "2wD61DjWhHX4ghxENZGyCVrTFSeZaKtCe2MtZehYR98cPe3H8KeXYcZahXK33c6zotDdvwCNDqGxcNtUhXX8o4q4",
  "key30": "4HTrGrzEj3dPSbnRr1gztzL3TAYF3eTwqgTUKXEm65Y2TgyLWwgHifrLNvrmHVtdUUNHP47WWvGSUu2YPt23X6LP",
  "key31": "4BZ7Q1ZPLr2yeu5BTNK26Zp8irgjx6PW5dmxZ2xq5eY3bgkwZpDFamapXfqhrHqyAFjK37CaZMGbERwbDTLhh3aA",
  "key32": "2jWyKrbnZVFfExoAL6iBSHbzs3YTYFzWFCW7ufRqPmw2eR1P7cZpurHY1hZ1ge68u8GFBgE5UYYVCnwbcZhZEV79",
  "key33": "2y763AAzENfaY16XR7rfbrkGCfcjcUUSz2xtzZYa1vfcyQ5cxK1BQgSkty6k5QUUHmJ3TjNigRnemWCPBLHj8cy2",
  "key34": "54StA7ZXC1FgmjBxiUbiYowHHzRM7cF7hToABrmfrqDzzLo49Hyy2Gwncg3kXC2NDa6yvnJNH1saBpievzx6bnGY",
  "key35": "4XewEksBJ4JduazEeJckDu2iAVHZSMMc7jC5sprzimyzJ1xfhM56LLBFyMho6Am5MJLZtU122A79CH8ooLoNLm15",
  "key36": "3unvaByaX2C6jMXb3hi3P7H4tz36nA8vMnUqXfY6sTMn9gXTMXa6N3ve9mzkkVcJCLH3HwvtgkpQuRsCucb3nukB",
  "key37": "3aavgWsgMojCSyz5oKq3Vrh1RTaidQ1Zi54TqLTBzbbygU79BdL8BAyygr93vTrZC4N7Z7wzXgPvM9xK3d9ZMDFi",
  "key38": "3g9Fn247Q69SpBFaUJFw18RxuYyq1PrPfH2nR37PcXmbDBVFBG46bQ7ZnjCqPv8ZxKDeZMX1dbZZv3r5cDA55YX5",
  "key39": "3nVKf7UAFcCKjDYHMFR7r9PdPZa3w9P33FCgwQDK37fTY5mS8P5uY6fo1uKqbNEpDzUXcb4aMJH9iWbF1obqofnV",
  "key40": "27UnG7rvieKtTVhsZChnoRFrdm85Dg6ffaVH8HjW2Gwf8WDBkRpbAq9t81j4sxnM5iabECx4Qv5Gr52kv39P7YBD",
  "key41": "2t8vNaaU41jcostSX6CbCXxxEqMt8nAh162HMJ4z81tPXr42ZzLGvwTJBZWPKDMBrgLqMsoydp3nkAVJTZSkG559",
  "key42": "4fzc7cezkJsoX84pef8XuTxETAbXFFsxPydWQeNVCxrkc9pzPrHZa9FQEmU3GLnC3hRP3St1TRssKoiffpLRSeWh",
  "key43": "4qnkVP4coqoixjuWcRD9co7XXxNHsuEQ7SygLDz9UngyGUmRL383DBRenFhsif5dtunEHetEi2yNmVZjNK75tFVs",
  "key44": "3gRbyyM7HDBNosbG3Y94CftMK1AMPwHoiaVksGehNnjJ1pRJvJmTSpYBRUYwuTfUADXqLKELiKrBC68X6w5ZEChE",
  "key45": "2VLdzmVvVicbLPhmKrM2D6f2tdmjEpJPqCiRV9rrLfPA67rwGDMwcrdAjbcvvg6EJRhhA8VSpu1KHnQjZf3BeajG",
  "key46": "2Sr7eyfMzNyMsub2wzP2Z21tCrFDKYcBKpgB5Y5BaYjwHnfhnkbWXkCVYxfiCG4y2Cnwo2RM6TNAzb7RQprkXvpw"
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
