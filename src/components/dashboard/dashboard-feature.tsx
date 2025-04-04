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
    "6LAsCdh35JHj7oDsZNKHguXE4JLGLQGbSEqc2QkyonN8xYJGeZw2JmVQWZR5k45xaJbaif6p2AUNUpvfFXvYpWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DDaVXK3irE4hZfkSY2Fr9rmsdMXuxCer67G7FRbjXxkSbooa8JUCesMZYDjRrBo6pGVkAnVx6haVupqWXEgbMhT",
  "key1": "2Bwe9qFw91rbxY4nRitZ1RD7bUSWXBC62kprwdffWD5KaZTMz5iNpGh9NaDC9NhvHfYvW8ww82miJqWZwoqwwa6S",
  "key2": "5r79mRJ7Z3L1PAP4rPpM7MAXMvyhbEqdr6XXtKnxxuc64VASBv2qQBezP6QErBgFDYL3do3FhVyVyqMveA8mj32o",
  "key3": "36Vk1Pz8Z4HBmsK1nQ9EU24mL7Wmnggkcct8b6TBwiPW8SBqSJE5NkVqzBjrQS99WC8fu12mk2aAfEhV3nXivnZK",
  "key4": "4chH5W1BeNCLU65hbpb46puu2QgFg9JXEE6fpBnfqctpTwyWnjuppLLdgLVxt8RvH6hHiGBhXFLYHES32KBZNmMn",
  "key5": "3mLXHqrkeJAzrfYt2oSD8UDYw3xsKSA2xZhDkpQ8BiNNxPxqG1GzMDnqY6gczytZE8TE6ujU8uhmH2bEDsSWVb1k",
  "key6": "3aveUWZZ8U47FW6Z9ff95Y4Btd5LbD2tUHz1QWvQcnruierLw1JLRfZMZjHADgR5T4zRNv8v8DRfgyXb7C3bSmu6",
  "key7": "2GjfsdUWK8AGR5umRJDvHzSyn5vnVgfoYv1oLc2HGX3aSenM23md2mFwUFD7WmcEAaqcffegcaxziVVjPq9RBsfs",
  "key8": "2MeoFXh6vsjHvtukGjVKnMFYkbdnVcC1x1NipFPy5Mxhzmr68FVoyVDq6FSdDQtjcXkKuDTma13vYSjbHYX7LfQ1",
  "key9": "32pSPw6dnUtxPyACgU99wCzTdpf5oiBMtUzCPRpdUo7Jhkjxc6wcZ3npqVHjgabM5YLNFo4zYb2GndR98R4LFCfP",
  "key10": "FpXnBriotFvSDdniFoDqRve7qewzum5pukXuyoEJr8QzYHra2BAvHzT6b79hqVdXJKiTot4VPzsdTiUzq1cs1gm",
  "key11": "5r6BM67RSGp8JW67DxXcVDRFryH91kvBd1H6ofDudJApdTxLCBJLDEW8YVHwJA9Bi1N7H4fHrAQc1G1KhrekBPYt",
  "key12": "5bCNJgMuS4Z4iyMExH51H4h9PoFYK1gLR9dJxjv8t5P3Q2siohXzfEV1mvZRU1ABJjR526TMkDpuqEGTdYaFSAbk",
  "key13": "3uViHwa31ja3pk9vm1PEN8s2DjLFi8DYTXTVM5qD1TT6gn3Ki6CxxgHwa8JBX3KiZd3rviUYoNae2E8TpSrChewR",
  "key14": "4RTany6EkBJ9LQRf3HqyrcMHAyU4XmzmgF6srjXdUGzNZGS3X6XWQJCmmpEwfPG4D9yQbqxLoyrEGFCo6m4CNWhg",
  "key15": "qyiHPD5ohwMnJDAbQsQHBUkBALrUp8tRynvH1q93qJCDoEyZhXaRCw4jn6bEz6NhGJKmDrfJQzZK828r3Vj2mhw",
  "key16": "5qSRpJathGPLmWXDu33ciVa8G7cHMzjxjgM3FJHWs1bhBN1HhiwVzGt4czrJQg7uf3QEVE5YVQMymozxLWDrK2Er",
  "key17": "2vc3KNw7LnjUKSMFcnKQgC9AMM5Zw1hxyzz4LCe9HDNCTUKMRkPdzFdRbceSwcCjstuUpQtwfBhhmJaAvZ7jfMMz",
  "key18": "47aAFCfKqpVJou4DgCDta8tjSfNWwTYnuU2AZHrD2ZkHBqG6LyQrN2ebgmc8PoxqzrzUSrZjtkNDmWBS6QNH7MZi",
  "key19": "4S2d7PyGpa4Bq4M1E9zcVfCo5wLe5ffUw6g9esjrKCbSaojL4ReRgAvAHmuoiSyNhnYPyFGKPpwESVVHgdi5ZZaQ",
  "key20": "64gsKVz6yPjRouWsWHqYyqTnZoZrHXYE2JnwtTtjnjSekuXAxCdq9FVGEfGS6MEQD6VmfSgPYpSXpCsv6CEoA9Yy",
  "key21": "32GH3PnG6CiMJc7TJXURhV4BVWehrw5XSmoHaKZsMEwtvxDajumHSno5nPCbXbryvwmLH1yUW3ahhe3UfxXQXSqN",
  "key22": "3JAFZevRuSaVjsP1nMg6kTLbCKKbWf8Xnf1EPU9DJyguyzJ5b4zAXiq2VEJV6AMCdThide9eGzNHLPuNDrBdag9Z",
  "key23": "2AzhY4YiXyoaVVfid7pZTHsurAfi1wGuFJnDtSkQZH7E2p3v1eHyK1wJiY3e2RgARCRvu8G4X2cCy51k2v285jzD",
  "key24": "3cWTFrxK8Ms7crzTNQCeXjqipfu1hH1Dh9T8ryoBLDNDTW3KB9dpyMfnwBkDVBXhZGpRuprRfmv2HLXKi6MVg4Mi",
  "key25": "ghCSumfjaWvEi5u6yJhq6wUx9CjLuH2JFfkcvpsovowr8djqPfkKb2UVyfwMBhoBrF5hkFyxjQy6AnDkAEkAu8m",
  "key26": "43WcTcVDsVSGsN3dPsHGuxgNg3Z2ah2ow4mQgQdAHBQ8FXxnQqaoqxAJRzKe2ufB96JC8DqMKrkwJjCAR4sHgF6k",
  "key27": "2E1naW881e555f2fcBBwoqRK3wNtfEvZdLoFGWuFDfmqU4yBVJzHntzj586pNQiavxKSSF17nnJw6AddMpW5fHfe",
  "key28": "4HotVVE9S2qqAvTS7RhHfCNG7VE48vB9mKzsDWnBvAbKRqgffoxLX43uY7V2okDbcr6Z1vyX5cM4pLFvfckaMvm4",
  "key29": "sTfac7Lkb47VxfTbkjN7romt2M8mQMTusNdC5NmUvL7xdRtMyHFGarXMKM3s1XSTvmUsyaDFPwd36FhQsKKPNzc",
  "key30": "5q5KtVGo3bEkN4cWCBdZMx4s2VZpgdk6oXeC7X6fyoo9w3ce9Z5o1wHRB28JNfwvvnpBDtubpnPpiYKXE491mYDq",
  "key31": "3HoWNkZmYjTojcdx9mDrQCfJU7s26UctE4Gqz89hng2gu9GfpSEJuxMEGHXELiG4SiioiKJB9yD7vdFfe91ZEgpC",
  "key32": "3UM9dgPw1Fk69Qm3z24JQSPdQ6gYZcTvpMKnYECz2nv6vjLjT3BGkDbKyqqkGi9zjzLkfecga7NUyNBhRn3jBdWh",
  "key33": "5BqHXwgut19FrfWBCYnaULrVpbxPjy5piCC7WEAyF1BgJ5cgxYKx3bAL2Vb6mmftT2c1j2wACvmsATjz7XS4FY6a",
  "key34": "4riwjdUHCt1dnRZ5JCEUbFxXkEZDKrUwiVkcRpiJ3yCeXgUtek8Mn8UbeJqg44sYPtPscBUQ9R7dVR8iprfDVy12",
  "key35": "2ps4RHZKh2MRz9rtby5JRbmfSjmwd4WytXfrZLjZt1y14BCtzmDx4Bq85LTPA4Njs8iXvYypcVYk9XnBYSYcXr7w",
  "key36": "HduSAhHcGQUED796Lx8rpFZqzmX15qTULfSzg1z5mVhDpzY5T1s5rqVUsqwndXbpehf7AKG6nsBKrppnDjMeJGw",
  "key37": "3RN52WFTufEufR6FNpbsHcFoMBnDuCmJ5mYJQb8bEMTiu13u3daHqMJdNfBJ5tyM6zZUnDK4nPaN5bRPw85zi8sy",
  "key38": "4oe9crnPdvXVnniYF9oQ6Jq2xSiQaEUk6zvgfYaK1ctn36mKm6fiRj1LZDyM3corBiRh1TbK3iFB2g1oPEJTBgwx",
  "key39": "5oAchkfcswvewb2wxwbGToWJSFmNyF6wjq2egjhrBnG8aKrKRFFz45Q6gc1g2fuCnjc4sEw3wK9QisiAwW7fHi8A",
  "key40": "5btDUWjjiHj1qDrq4c1wmP3SRzMwNPWJaubtrdfNhgiTRo7iGXpQuWyxm5ur4KumU4i4mjiqnEhw1uMTkrAvk4hP",
  "key41": "39us14T1WFyiKHXxwxaB8FJ2iSxSW3HKQTW7MTBAfvGBqg8mYLCvuv5fcFkUfxBi7k3Ah2EkrHqNMtdQBR3vN1PQ",
  "key42": "3ZUiPF4JQsfRn7diaPfqzQmFGzFNhVqcbnfqpVAXYNLHGgqFsP6h68mNxEBnSETJ4uD8YuwU3q93ufYgk7GvjKMd",
  "key43": "2jGwwMDdeP2hdyA6KW3mpFLDgG1LptSoxf263vTJ8KuvquXctJr2fgWQNi6Xtbvbrpsg7zUiZpy3vvViviMhTuUi",
  "key44": "2jUebCtU2kXn7YxUKnXB5bS2TgUxNaazJeZZFPmL1ELNRGG2ZwYdbSdDXzgpL5Ng4wBBiQ4YzYdJBCXk6okCYwfa",
  "key45": "4oDkpCkNwV9QJ3jLczkSAoPEe5cThrWDZqRQ7yiunJtdc8Vc5ja4wWNYbfarVmwRarZE41y24sbFJ69PEA1zERzf",
  "key46": "3y9ky2mv5EJx6KUaHNbQS4YZNMk47WQZZZejvQNM3fGyAeauB1EH5rzsuc6m3e3BbTxEsGEQ288bRk62RdVJNozr",
  "key47": "4fpJdjavphx7eYuZqnX8XFnZNdvYYG2nWCmxno6pGqEAyipW3QZo8QBs2FuoJ4gnTChGNUbANQpkHN54qquzsaCy",
  "key48": "4NTL7xU7fLVnq7AEYsKtQ2j6TTXVTKCG2NYk8BvbT9yq8ZLKKrYsWopZvtzWtyHttVCAmcUmkAXur5rCMkq8na91",
  "key49": "4fWkXqEXDRxWRU6n1bzPkwxbi5k7mJ7qgTh3w3c8oxvGrU4ESs65rg3AMopRGRVjkwgoQ4rbRDspe6s7Gpc72Jyb"
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
