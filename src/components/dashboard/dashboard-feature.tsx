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
    "ebgmmk6SSPyM1izzzBs2QkDeTUvGkg7ygYUUZx2mba5NBHKKdUXZsFjkhgxEQz6eBJCpyV5TTgp98BgcUCRFtYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8pSCz5VqDna8becwiCWpT32dV891ud4aZSci823izPxvz74q2UMCxFgvqemYXTknE3hSouHLiATgGnxeQFGE69",
  "key1": "FYcFvyqCZBDeJ3Nyx4EbeRPuGjnHkdNMBiLu1fryWQWhhCwGyf3pPMoHC98B3RU7g1YZVXH9vtf4J8bb7ewFJKi",
  "key2": "4sJFFLcqEKFhw6ZVCTZrYc2GL14nqaWSCrL35YKzhpt7rLj18f2xXF9bvoBXxjTA2bvuCq3JPJGUQHRtZM9mg1Re",
  "key3": "3XyfuNSY1sC8VaZ2w4BLiPtYsxtz6BsKCeo7CEu7y7bjPs4mTV7EWiuGT7rpwSATEVAPTuBuwbj9HgB4NnvMBV1u",
  "key4": "2osLmcqgcGkK516yBmz67YGN36EzBNSRTVknmwxP7QhdZqh7ngjZtYjdpi6TmbrAwpDcF3Qd3YtMBwqnSaBw7oj5",
  "key5": "3FDgLpY5BpakXVxvoS2jf89Bwvm4Mt1G83FH7DJdgc8jhhgw7dbiw7UT2gEzv6NLcPW9DBVpLay2xWYbq24AMD5K",
  "key6": "2118MwR641XgeDcW5khAvwWe327W3konQfkSyBKa634wuzQhV2NLizRU6Q1HEp6iGSXtRZBpEncBttBs4DcxACqN",
  "key7": "4mUY3dsUtCDB7HaiCgf5MPFGQKUTmi6Kr2iTefmAKjsf44y67si4k232PRcqha9LvC3a8C1w9hHJJSKSoR2RXsac",
  "key8": "3gqtAjSVk6E1WNcfHpXz1vj7UKUVVjpoyWRDSLCEJXzmEfXGckYaeVK1NA9qyW21SDMwX1VvFsMAesLhgW6WwWRg",
  "key9": "4ypMF1Y5CwZSquR5DPnREdFnnaKYmuYHSpiF7bGuGRHCF9PetxC2XmiC1LweJmip1eGxHTr4pX6tKi6mpsQbWcCY",
  "key10": "2VVVyFmdripo6NDeUJbUn6D6StZTVmiLHVHo5JjnSuVrHH9Sq9JxqAL8ySU1VUSPzWR6NYzydLNVxFyXsNuSeihi",
  "key11": "48ZPbNE2f5HpmenHR4j8Dj1Vc2p3883SnmdSXHpffDRqPtVfa4a7z6n5Wpkg4kNYVPbj6F4LGtMPbBKFjr3GDUom",
  "key12": "4rxSfpfRWmjKS1QPuKGNnu7nLGxfChMeGLYjPUvrm5KeMFbv4NzmFVDeeiPYGcEm7nSrPtdLq3fkitaxshLqAy2T",
  "key13": "4bj9cax12YPTLw8YNNKVzz9diBGaJETfqKcboThm6ADg9QGDLZiP5kekLamivBVumBHDxX1KHKrT9aTMefpd1LZM",
  "key14": "3f1AXbxXV2r1hfkczgk4VqLZiB2ofwhwZMSinJPikFZoTirsu769oQ5R5qBqmN5VPYRqbW2q5ZRM2m2ufZjjxjax",
  "key15": "3i8mgRxn5oA7HZpgRyijyLSWLeCzhc7XGpx2rYM46LCkw4Q7rEbJi3jfaQ47CmVGX3Lz59uEb2XS5mxPwq6RJLPb",
  "key16": "T9fJpoRjgGDagZJqgiQDi5uoNVFruewU2tzLkba4xch9sJTZtsUBEiNqEHPjsAWywM4QoQ1qrq3C4sXpgfiUeGz",
  "key17": "2Htwz19AfPmC6iFfFvcCM2TrYgwc7Q1Sz7pYvVrf7tBNJiRWkBxcGWaYmJ6jVmHEgf4Qddz1jTbKS98uRuLZHMhe",
  "key18": "4Cmvngr7tcb7S79Wjp8pDUpJvoQGxLXpSXnB4sa7bDq9bV5RdVJQ65nxSrjGiG7jJtBJZ5E3AX7j78Z3CzkmS1vB",
  "key19": "5wMA2H4QwKRCce4WD2qR8aFatz9PMB5hafwdEodx8up44oGTRmCgg5CyRBFpkkvJdyC9dnBKB8ocdjZFQZt4iEpe",
  "key20": "59eXWoTXqdtyoDXYsxFHfCjex7y8Ygee1FbmHqMoS7M7bNhiuPo3so2jVwZpNbpr7QofuL7CFkDSDt8J6tgM6Pxw",
  "key21": "RNc4jke5A8F9Y9CmaEfwLufusEANNdNakLnjfLxNL4TTJd9QHR1P1far8WvUmxpJEC2NZPLWqiEdcv1dSFVQNeX",
  "key22": "4bDwoqgKTPa5SskaWpMotJGXiJmj6c6oNHJV4ho6D6ZLxgbCX5u7BGiJNGPwEsDPYVvDhLdYdChLoLdpuaNbZEV1",
  "key23": "4sh3dUU3zGTJ7MbUJcAE4EtQpfU98tMoJLyFLqMN2otV7xy6UxgPjqcGGdes3HTs5S9ZYsG72MVCd3CQRsW6rZM",
  "key24": "cixS2PjsRBk1ui2erqiwVv61buDSUR5nf5iZLvhZgiRWy2Djm8nporHoQbDKAv9EmDQndvJN8eovXVi8ZhZNJPm",
  "key25": "4z43zcqnoJ1jvoPiVya5zRDngXLmQ5TYue1LfV3vherhGsUBmcyFQmNPCSK3P7tXiMCKnCPgrr8zpAxfBvyWjoo8",
  "key26": "3mC3x1hvUG4sEFintDSFmT2p9Eki3hwwvBA5X3wtDnHDPRuYsUM4M7sRBz5wKSHb4Cht8G4Db3Ssj5i7YK3C2Kwf",
  "key27": "4k3EavdEctqWLAP7jgKfR6AfysW3qNggtsPaASTT7JSgWC8Nex6Ai2EUcuPsbi4Ur6D4Cm6JXR3GJjK5QSVif5CT",
  "key28": "2ZgiepCoecKB9kb7tUhQv1dXcRxtGAVCiHmrgMMQ94a32d9F3m7ZTaPemqUVgaz3pmwjxuwA27kyxTG9FSkNQEwG",
  "key29": "4TxeFnHWccKbgSvuhtAWzQyQGbGLZokhwkxVprWBHSWEC8fbsiYq6hPA31wjwxSxjf2pqsnJeSPgnVRKWiunccRL",
  "key30": "2yMUw5SJVAQ5StLc9K6raFvyuFNTRBoisZMv8ZhhgeKL4hnDVqEcPLpyefxfjQZzq7UxsLPwEbzXGpzQWV6RhNxX",
  "key31": "4DU7oQrAXgRgK4NaLpQNRbyQndvJkk1nv6mmcBX6yWK1LM79C9C1hZyLpCQw61SRp8AoG7Lu22VAp6wsEnQk4FFc",
  "key32": "2uKFevQoCWrujbYNySvvzQA5vxJChEtA8NUpYD7UvNcndncPRKrcXGtaVwWZVyi1JrwwbZPYS5xpvgjbbjEKu81s",
  "key33": "gNhPcGLQkwtrj4PbgTHdw6UPNg7D2h5TyjB6WgsQQyyDYdALGbg8LtSrZcpGJaQzR6K9TUky6jTV5cFtVbF4Apy",
  "key34": "5mmC1nAN7dngER2wQuxxWAgZ3sfx7ksMPwUrYBvfzshc6CZcfxbj8cz26cPRyZk6F9PPWRqbQBQRaNtVJRsdu9Yn",
  "key35": "44TXEAGqWxPnaVh2pZdxWAu11VV8LRQYEW2wDe7qLjoQoz2anyefC847MAqbkSe3oaG2yajYRvBNkcuFqQzTkW78",
  "key36": "PuY1Tc8Rj9bx6bzY22xriDPXmNwXDyKyWR4M62MMF5fysxcjc7BsFb9aVjKUNW3d1rPRHDi5hbUKthBweSRZTeT",
  "key37": "2jerA1ovBVbDUTRPRDTbk1TBBvDRq96zvGj24fgXZgUKjV31x7H9oXTA8XwbmRdeWcnuZuu47Ys49Kjnz6njphcq",
  "key38": "3Q9FyyaM41yG56krDJ9uztPd92KevCpZpsWssS8R33Rdr7Xd7kQEY9zFjPwjhGCQw16pjNkHbn7GxLUJpxiG7L7T",
  "key39": "4U4pdV72g7oHtuce44TZehQWfcUuYVVNXMs6p2ftKqi6pKD9aud6eMpFFt5nKERB2V6ycf5aRNcjpsZE3LBE4Us1",
  "key40": "3Vrt6mr7d8zu3mBSEguhT9KZibp5njUqTqJXiQk9cDnwHLUrbrFRdo4C8Nqu5Tqm8CQbKUHk5kEaFcvPSBxSvbqg",
  "key41": "3cRmMH7uiQXs9vCFjtxyMCnAxncGgmjbw267PVeoFN91o1v5NRBZPDApfkwKBf8wbbcq5HtAn7fFsc8WRCAyv7PR",
  "key42": "4Vz8TSZ3oeUcmSPQ7janDhDPneQmkgEfas5Uzcn1f9g2bRWJ2i23GHN9oemriCoVyg5ouDEoaovwuJUkRPtFKy7k",
  "key43": "65XS8GnzX5h3zbdkuuxpG95RLG1T2tzBq5zWvPXiBNcxqJzK4XeMsiauK9UFAU6CAbk3UY4TVLV1EF78fnmSGZnQ",
  "key44": "42mKHNtjhTToK6oJtxFa6j5fAEuJrE8HMTTSQWCAmo3nFkr572KaLDneooZzrLk9RDuZxLVxff63ZmJFJ31fVKLN",
  "key45": "Pky4s3EGfkKp7K6ekYX2kEe957zUqvPHAMgdecZVQqiykC8Acjt223nRtXxbc1tVJg3jsweSD62Rtxf6jid2ZGX"
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
