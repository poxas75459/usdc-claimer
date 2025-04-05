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
    "3w1HDX8R9bkFjiBhUhDM6TRvc9Qu6RzVWec8tthgheJzDxLconnnhNQJd6iToypZS7ZsYFsnjpFPiJbSqA4fNowz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMSeoHUUHyLaNoa52ZHaf21AbNvrRrbGCzNLAym57XyfsZ6eJsxtAbFVciZ11J93bynY8xTPqUbkxptgARBuJqH",
  "key1": "4gzssvwGJ7wbcAvwBvDxLYU767KdE3KhCiDCG2RxzpP1Jh4R11Li1ARnTPRG9bb2HuU7vkUJRkR8Sd1neL7CfMt4",
  "key2": "5UZKxDZEnhW57y9raVB7sAcFrcLgfEPMmqoFMZQrM3mcbKjy9RU4Dj17WioqV6akNjrgrrc2Xfh8GkWVLzwu5Dr2",
  "key3": "3APtqQ7ERoAGXLdD6T2cncUPwcq5AvQNPPVkCPjnp7BQdREv5MJMkYGQKzHHZAL44u1qjnaLPm8LdCobDqrjkx1c",
  "key4": "4jKjGjsjW6sHZbSjzFeL4sdso5wysUf5DbJWmjFLZp5dgVE2YpvyXydbEDji2QWSz78gJN8fUN2XyDaaRpFK53Pk",
  "key5": "2p5obnujU7BXKcpNBeNN4SjgQWeaxA6dasMjhhsaPDqQExJKSxC2BrmSrQXUMPEnkGBctuBrL7JkFCzGuNVJYMRL",
  "key6": "27W5ghCL7mNPv4UHvG1XBMK1iZQLpgNGt76Fh5vnK8sWdWvUCG7zRhRwrD1tzSTkbbSTjhNcGdxbPRTRqoZfwEUW",
  "key7": "5TZDSWKg3RYHXQeP1grqVSuJmFjVmsXFVsqMoEyVNCkkNJ8T2iWuxQ1qBeYtFnQD1uvDhz9nwVn6Jsac2kjsnePC",
  "key8": "5Skk2mMZfQSsd8o4468sQUbb1zmKFvnwbqQN4oFeutkCo7Q46giJWkyK4aQN4GJZyxmkiQ1nrHK2LcJvwf31Vkdk",
  "key9": "4uqy9iBb7WR6Aka4oTbYXnsMdYR94XCNj9QbTnsjawcYehp6hBM9MpfJ6R5AL94scmA7g4dtfGkzVATBTCkCJaRe",
  "key10": "2hPkvrsfdra71gdCCu11XAGSDXjUKRuSEvGwtVSZBsCpiCkxY4GgpsKXTPQcBpbv1QyrD2xsLAPHpdY5TZhfQgiB",
  "key11": "LKsK2NXxKaB8TTrJfUEuN6YXMXdH7dLQxP3VhRwLFr9b7voa5ZC7w6MXaibPShpuQxeFKAWYzDsCa2WNGJgyCSy",
  "key12": "5MnrCHheb9EMkr2f9KoTdPvDx4jpYH1ttcbnvk3vb5UT1wghQspfYxAdtPNUCeGGL7zjfw84bUCkQyjpfD2hnDS7",
  "key13": "3s2TPzgujSz4U8vGAzDfQurPdb4jPqcwwzh3WU1FTjCEb1nYM7rHifseSQDJ3hmkaf6CRHfdgnTbxPujTEkVzgmL",
  "key14": "xsExdkcyVyuDXh4QuSND1Q5fMmZD5CWDLJuG6icr6SVz8TTWjt6JF9kYkenKyBiSQkcYR3a8Vrqhbsog86MQ4Xv",
  "key15": "2PAWyKZ8tEHYEfrB1SQ9EWm276b3CJcWq5KeHivpr9ded92Fdee9MDzisc4FtxSsezM6puZr5Xx3qer71wRnfn5u",
  "key16": "4k8rwpinkAKJAXxYZQH3J2d1p9CaFGERVpkaK1LXJP7p9r7CYm1MFXHjiDyARGKMeRoksN6PrTJm6YEUd1idwkXF",
  "key17": "4dUpybRMkYnVTgdVHhKzJy29x4dzgr985DKZTHYsPejkwwWnR7cTEqrhCU76CLdDGztJjng875FB1L5tWnMdfWSi",
  "key18": "65XJhEKZc3Yix29KATf5n5UV8PhHbF251ZZZhK6tWtVTLY649TuQG9BjZ8XvoqfVmTUGHH8gCV7fQUhkMkjViVkA",
  "key19": "5xnecjmtqyqLckdkRsNmccq8JNqwhReNo2uJBnspN518gnCE5D263p1fBK2ppM4Vus8bomWc5ZDC9FRYgy6PNkc8",
  "key20": "22mNF1pVTCutuFyj69uAMYyrTNU3dxuEoYsUdrUGFiNkG8r6umi8fjb9NiC6n1t9pjcFM6tTWgVUsbvMJxWXjqcm",
  "key21": "4v5Aw8TiL1kwU9LpyYFpL5ZDr33QW4RzFSVLWoAAPLEy3jriFTH36hp1QdUrVGTFTvi5t5yTkttbcGqd1RtPj6FL",
  "key22": "4gmnQ1aYajPEGQBv9ATUQqqVGBJ987x8FBpTFF7QVhb6ALhHD2WodeuSv6qWdVhkMSspH9aYvuXf5mXnkCzoZ3Mj",
  "key23": "5wpZF8GFNzNHJsLtsmqGrSQuVAVYe6qNSQvxfsaLPPDikgLP3EsLLBRhdhoHZJT1eJjSe7beHd5yxh6fcsf1vaDy",
  "key24": "2TYPZTwyxTMN1eFagT6ya4eSKsZ3TJQG2ZaPn6owK2hkdbExnRQNKjJuNARpdU9jxZ2NV7QX4h8xGVzeWQ3ioRCR",
  "key25": "2mdE34kMF2QhR5QudL7PSgq77s7UcDP7wPpBNx7QyPJb5hoqYRHQCv1Vh4DAzXuqTJ63ncRpYss5kmHMx9xx6t4J",
  "key26": "2yYDarBaT98ptk8MWEiPeXkCSqUEuxDhGhK2L2rC4BEbAcqQrczDRkTaFjY5HLXHLB8MunQpi6GyUuSjDW3NwZc8",
  "key27": "374bgKd8EVJb9E4UPY5zbhs6eFqKv2isXubFRSbramo3UvuJfchmoe1UuqdxHCyJLMMhCi8a7upNMd9wpfNH9RZa",
  "key28": "8DikcnAFECtrs87WPURgXkJHHziqHa2qTeBGxg6jptinGAVtnXpbAFfWtjdzrpAwzQwUvREfhnW417VL8NbaQn8",
  "key29": "ZzReDsDiaY6RMpAtT3RXSntxnyacnbk48hgedRcMNg7ivAeg3BXCKsjUe2e8q5zqB2Dq7owz4zdJa5DtB2UMSWT",
  "key30": "2hp5RZ7VyCUTzppHa7df1YkpSrhRm7spB9whvM8dVdkXVkBycgkpSpPkrj1a62jZLxt48J778fWJwthE2PVc2HyT"
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
