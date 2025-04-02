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
    "uSGDpcZWvYiwT51uUGN3wDtUeFmMd8TSGqww8UMqoxG3r91NirmtsUKxkiYxe59w7xq9EDdevGSj4twtea2TUCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RqxdCDuiKcE3aQekK1ZhNK4StNH3tqe9pBFLtrSt4cHGGZQ3t4rPUJR6sBzL3GvTH1yBjEeNHYm37o4t5t1dazj",
  "key1": "62vcYv2poKxLbr7wTmfvD4C1pBwVwGvyyPBZK52KsA6aqe27LZqz6fCvz7a8P5FMY7fAHkoJL4FiJ2v8kw2Yg8ZV",
  "key2": "3nnkWpDgFYfTMB47szGuCypY5mhGWzKk2vmYfbpT5VKR5WtVKNvBfdSLmNe6J7o28HBdi19VhS7RD844rSdKuUYS",
  "key3": "BU4EyAEDg2pGCAAdSGgHFKZbPVop9Mdxg9uz87PMS9eDcvqk6wCtDmtgvjx6q4fcHWwbgMCewwSxayw96yLvEeT",
  "key4": "46hxrJNBQ6yLTwACsktM7N6k5rtWYyGAx6zReSs8gfJtv8J5r1cWND1RCwyosmVH6XEhJD5TMxjJsmc8JQBHSkAd",
  "key5": "3ZVYuakNDKgJKnz6HAYiHHMRp658hbuNJSNJgQbcZy2Qmk5MNczc42oLasvDHp5uLR9ePwLoJspFoRP7rFTNETjU",
  "key6": "3uWrQuA4Sce2Ko4MAp33MAJ2WX78KjfpzeMcTx7a6VJP9V7s7Co3cqsuCY86nHRBjWLZo1cDz6xBQe32gubA9Tyz",
  "key7": "2khynrqYnBT2VY9jrBHohzqhAfBL5gyGU3f8T1xrA5uqd36L8MXDd64ZfC2akQdEcoP9ekzLWeVTFwqBTho8w3p3",
  "key8": "BJeNWPQMmd8YgxixLpSQk2v6GBUuZzrwUW6rdVGz8VczejkXE7fQ93obDNsMxZXrd94a9fwFNySSvHyxhsASGPL",
  "key9": "BbBpYji4Kmae2xbHpUez8Ckb3d5Wd3KsfsnGujGJNADP6YTELUku8rwCncVpqwbXNxtvKkqsVrarciGJ5XeEMaF",
  "key10": "47F9nBhNwoFGhm1eDZfzc4mSiRiAUowowyFDRCqDizVhupy9atcDzPqa1PXyrkVak6E9RcUHNKa31FXLswD7NsEN",
  "key11": "5MfzJbguuny23YKSy6vgjrnE57m9V8A4A4g4ajGKUn4xtZJSRtBeECT1x4SZLPNdDFH7UiPyBaAcLY1uRjaDQGv6",
  "key12": "2z11e5NTet97SpPVAbLpFFWtD2WQ6WsVGdUxcy4PiptEKQqQQN8F9xyFB6zwE2vnkVr9UEPJeQ9uNu5D7W4gnXxv",
  "key13": "B4X3boeuwNgi5Vy8XocbaPmbjJCQjhvV6ebcFZpZes3ctHYMWX2pCom6kAG8gGhyykhJ3pdjmdynY3RsZkbNAca",
  "key14": "3yoK3Z9MEdL8D7GSK9Az2RZv9fHe2zKH5uLuh9ZkHFkYUsLich69hXmF9gkTBmZjJcfvptsV5sUKTD3XiMPKj5hy",
  "key15": "4RqPTJd8DfVZueo7Z6vdN7gBLecAusqDPk5z2E83GBaFcrt1XmUJUZ1wbL6ttKZn31N2Sh8VHbc7v2LqzysxYcCH",
  "key16": "U846iLEkuvVEB6ZXuBurG8fgALqQSv2v3wBacwiw1xsyU57ehCvSutaZowhcNTV2CdNsLAtjPCLfTqm6aM8J5sn",
  "key17": "5bXXx1Xg4Nqu6ybrU7uSpHY9oAYKFvdcZ89opSio2mJfcvcfXuf9ZLjQr5UAzB71FTEJRjNE7Qif8FYwHKP9XrEF",
  "key18": "2ZEXU2c1aMmPGnokrWghWVHntQXnth879mwpEy6pf9FU1EvoL3t7v5Cpqrxf9wxmmFgG8zmbx8EzzHJjbAKUSsL2",
  "key19": "Bb3VSTseY44ckJ1gR2LeNxc4sLA97a4PgmsHZKeTpx24RWF3fPTfazqrC1NwzSNU4uaw4hknFSnQawSLcgcFHK8",
  "key20": "5V9jwvTRy1MSx5svgxJguvvjD5V5xf8yV2aWQgCAthG2JXMjUDG5MDzt9ZbUG7FpU8ZGaABrQJWNi7tv5YfSa2Dh",
  "key21": "4WG1G8fELU31RN2DuZeqkT6EucseYc4MmiGpP27xGUDM8m4NrGzgtrbs3q2RjNnp1F2jhkqyBGASohbSp71ExRp7",
  "key22": "GawAJWQFjXqGWU8xeLS3k9XNtF9a1SqsVT9wcMz5JdJt9gWwpNYXHDZpCF7SWDAUjcy5RTMcEfLiBbsNePaWFxk",
  "key23": "nbFV3f267hgc333e6baWdLKT5FBHTbVCGoQCKFC4gs3CcGqo65YyD4gEbr2kE6hp1bxNZsXgjKzkjCd1yPHH1Hx",
  "key24": "39azxiDBAT6fm5qNSS5mEqDHYuceSsJsyds95frn2HN8QGL5V9PQVzDk477hPtByd9Stxmzqv9BXLCF1CxJEz53N",
  "key25": "uptbgqWxVf5j2AJ2d4YaLmZpSebM1c7QRPezX7PEMoRNss5RsL7WDjj566Lq9cFG3hiMut2B8D5eaarEbkaeKNG",
  "key26": "3LQ6rSMYHXU4iLrUySrPHKbKg57z9vf7nNT1GbJkVCyZfGuzj54Wp5LZu2ew8Ewo6HXiz8UARRpG816CwA2mnBQ9",
  "key27": "hgZZKDQPtewinQhdSpt1nwWik8NqiWDnY6bnCrsASLyqgpdVC1x3RsnGG7LQfqcKAQqTqfT8ZRrZ96DqHn3kwUV",
  "key28": "5Q6aWjeVyeqJJ2pfwiC4Ett1JNuj2HCbke1agpvVL7Bx7WyhFMBh2d6SbrZctA83R3bNi78Pq3JRfSo2UjZTPhkD",
  "key29": "5bYc1oZTw9oQC6XhHb27Rw3Vz4P1D8Zd4iux4DYqe4WMkXnbddHP6TptN1VJoWHoBGu5Rxe3vud6F9hSoWqtmmY1",
  "key30": "5QaW9ei33SkRD7LtJ3uHSAwW16sTZ2VZ1P2VqxjfXdtDENpwWdnm1sZGjTvtTwtE5AXxUQ14bfwo7jZePXwhzxgs",
  "key31": "3e2fkuax2kCvXFEpjry1kP3YEMHTN5oY4RsSNqRMaaYMncfBt6QdDmeJi83dW7Z4djogemY76QFKKq6eHynmdZgw",
  "key32": "qjAiFKZ7yTT1GFq7j4y9AG8RB9Gc4TrU9KmhHNZsutaUBLxXxuSzKMCbdJpq2wWx1MzUrpenxekxnsDpjEsVPsP",
  "key33": "67oU5c1iE6tjZdwTSBgNzKMcg8jrnNhp5CArA8YeN6we256M3PTpsquKG5VjQK4owMW1foLhMeoPdqtDi6EYPtGs",
  "key34": "1kYWQQZU9nNncr4nckpU1pu7yYHXxUHgGVuAdpmwxXgJYrFB5UZWocjf1NodEqcGqKyNNx3V59SC9iGut9MgF7o",
  "key35": "2Mq5i8W2gdsNMRoiSeXzShqe4xHKiecbyE53ryDbz2VjNSM7vmbE67uZBQCeiswZqtLLJeY7hR3tDYBUR37x2Mdp",
  "key36": "4iZG9FgfnJ49mAd1tQT4EzeKZXpErRS2Cgq6H1Y4Yuo4J1kJqMkVwrLzkHfQnn6DxGzy2QMUjGwaHUY3vxMnA14t",
  "key37": "5ocA49AeJeBiyJznbYN2wmknEg1R3T97mBMMuTnnZJGfrVzAHb3whx2ri92294ki897ZgRXX6T8HJkwD7sXiW9c2",
  "key38": "2sAqhVfy1SzycBHcRdnJCc5gvNrEheQuwA3uBhgN2ULEDYMXUSFdA6p5rzTzpWCYF9ECxCvoe4ryqCLqPCMTrqSp",
  "key39": "2aDJi4PkAdrg1tW9RVw9JHzYx4mLX6WxSatrsoH6w64f7JiqhDabKB4qrJALxZvFRmqpt67YHiPZbpDvNYLgrc6u",
  "key40": "2rdccHABDvz7noBrG1y5v3hKZoYaMQJArKaSnWGEQP1Y8CcuaX1GeydtaAMi8oCPr34HsyUD9Vao4SUDyxPDTkSd",
  "key41": "2KjGRcENL7SwKFck7X5FZqBVdTqj5qWF1hAR8wm8LmzP18rpXLYwSDk5qex37qRZmfujXJpcWKe46DhHbHeDkFKb",
  "key42": "56NHAfLeSBsCrNSmrtDKhgucJvod9D4RfrYg1sdh5ZFGGFmLkKszQcFjJ2Abw7x1AcPfHSHfQ6G9wYWuiGi7zmGg",
  "key43": "bWx9mGPQK2S8Wo9jgbZ6YMVE3PRYMBn8pSqd5qb8yen9bE3eCYyfDYG7YaL8cceTsazWXAVxnXG8GbjhCYZ8zyy"
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
