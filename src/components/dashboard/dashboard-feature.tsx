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
    "2MMQooKcxyoiFzqwS86hU88RFkwWj2uDmuw6dKyoPEAhr1z68uzBNbeAH4REWSoBvfg9XjoGXkEXGehNxnu3F3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PRVwybLF5wGkgzdqUSymF9VsRjLAbhEkvWpgNzVTn1RybGMH7yFCF7yUZHRRqZciFLDdeUG34AJjDxCy5Hj99Sf",
  "key1": "25wRUdogtVc7RwF6udiNoZtEET3B2i4Z2umC9Gg4fhcaco5VJ8EbHfxbioSesFgqmS9pYnHGoi2fkFepqWjYuBDw",
  "key2": "mrEZhFPtYsrFAbZT2cWsk5oX5ikmDQ6ksecsdzLPzDgezUsqkPuqbk8gwnydWWto6iBwCSkR57VF4ppKGSUgsuL",
  "key3": "5tCBYzSHMf6LRsHmVoJQhJZBZz9J8QdJ58XF3igzwE8LMqu4PXfcLrzsQFkW1a7XBxYpuR53aKg3wuGZqxFHJVLG",
  "key4": "2aqYMT7zXUn7EpiNcCJkJHbh5fgDPKmop5SJ9pHAC6HHZoyRBdtZjYd6myTiCLZRJEo666jHWBRZ33ZPXqtDT8gs",
  "key5": "2HGZStdoehHqqpimHBR1QY2rCNsS9oLeEgphQj8UczqVFXNLBQFddiFki7h1afMsyU2t5Df1Bu4t2FmN57wiErN6",
  "key6": "eeDw1KYjDPXit989cw2uVJ6iSXvtSU9c8YihXi3tWYww9FPEX2tgUc7u8qbKM5DdPGcLz24P5LWxPnegMiE8emZ",
  "key7": "J5Rwnm78A8BGzM1VRLTbL2nryLc8kDPxXYXRFf8XUsmQ8ihA3dk7EkcanVWta7ut8mmh39fu1jwu5RKLdgeCYpp",
  "key8": "5Qz8QZGNb1fjyb6jZNGZMcMFmvCCQhR6ULLLH4EBtnYeqoZAuU7R64uAP6A3pEJJXMkdY6HRvtKgDCxyqsPdE11A",
  "key9": "4TAMmMg6AreSD97yTBCVmPni2xP2vXgvB6Z9XxcWbdNszhELWtAGnBcSyXywnhdp2Prq7dn4fgg1AyNhcngtmtnD",
  "key10": "4CjhdkMMQ91tvwz38hx5RGmesXCcmm4Cpmh2T4giuoZ1cKjrKjDETAyKXWQHD1ctPbWKUHvNwbSirRw48xk5EPT5",
  "key11": "W52NZsfUMF5ghUbTT6ahgc9p6c5Pn6zdYqK7GddYhpRWADXt2gj5tE1HhMWEgVTdvVuvPrY2hWvV1ggKxkJv375",
  "key12": "EHtECGBRyqg8JiXrsjv6L7VvfJ6ixATHnpaET4VuqAPYFXvmEFCyQFFLBgaJwRMrJ5r4MD865QGTm3AGV79S7nB",
  "key13": "QstPr1hUiqQB9AsGwvA1p8q9UFLWu3VHgYwffs8VxyBUGLuXwmmfwLHbWnDyyjKRoWkPF3yqcMFZsh6gcYbtkUD",
  "key14": "2vJgF6AhsK62cSuAAjxkKVE8TuUTsdHoP1X9cqRkgv4W6sRjqV2oJwzrd1QfkJ1r5XvgzbHSWNdvvzAf33UbHDMh",
  "key15": "2xxeGTDCdCvgnTaNR5iwCAJ2TFktWjtSWsBBS1BR66A2uma3m831us4aeGsGqtmB33couYTz5BXfEcLn4sd7PBbM",
  "key16": "5BMm6RxBTVHDzphz2HtnBRzDjL2PoYFiHi1KDKmNYQ7gL9w7ZhFmBZboNzpynCD1fVmWsgyWeaQS3tYo8GdNwa3v",
  "key17": "3xEz4kiZcEoisFuDuvSvYgfNdKMQ9Kp42Fr1RdK1JM6j93GiQZdJuC4c2hnyPxQwqLyzvCiC7H2nrK7hWf5KM18N",
  "key18": "PuiDYdk6VgahTj2Zgu5EkZ1u7uCdHJkv8w5V9mCXK3ReiwjbjiQAu8vcmbkXD7FLpY1R93g9sf8XZo2XmAcECb9",
  "key19": "22fbPuSKMVsHbCMbvQKPy2Kktqezp4AZscniDaRwYR3ybTsV2QaMqNwu4LFdth8Hoovrf4eggnHs1kvaT4de9oon",
  "key20": "Q7trC6YvLJ5aPaB1np6RBWaYq1zzP1TGo1npGfM9s9zXLNSAo68EG7o6xJgatdHNDDsxurarKQdGJVMYvNm8n3F",
  "key21": "57GCVEBAnGdxfrtZLafgLmExN1kDUuyKcihM6mpv9GCbxDg1e2eushRn2DYp3qKv6vxiEzib8qSxvpDGdjm1LK1L",
  "key22": "3VqD8mnnRC6RWGZQmen59Q7FS744xRf33ssdcWHwx5a4zWM5vsf68bdkmrWPy3pCmWYT932rrzJZnKfSjbd7dTxb",
  "key23": "QBJNHHfEypr5uyWvLnuXhPfHuaE7YdXmyVwXmeivbkwznHPJaeJkwPW5PHVkH2Raxwb7NGcPyfd1wqyforsXrW1",
  "key24": "3HvdSz4H7XYLbNL6LyboVBCbzd5PRM4cK9GMFjnMQPs6wvKhKge6MufVusipqSeHLgJvSNDHp2SBKaf3Uc41CfTv",
  "key25": "4dhXosDPh1vevZKBJzkTaHhiFPKDQANbSjXFsaz1jh7tcDdUhAe5avPNcWtaoWfHsGepiFxpoFb4jzfSef1CXoDg",
  "key26": "2JRWz87sxuSLpcjdVFyUE8A4G2TdKQPtmtYAvm3NkkrCXWXJ9Z7t71eE2SNHE7znY8sr6TwbrC5sd3AeTT3pu5TR",
  "key27": "2hGjC7qkPwiS7pJM1QdVUA8s1DNocaMwxNzkGmHPh3j7PAVUEHrxC3eZYGLcidEujyuH7HFUcFZARLSDLmQzPz9r",
  "key28": "4RKWTgePtC8VCq6fJbVYehBQnETVzjhQXVRn9gbHkPWrj5CVS6sbiob8LhcfBejKe4YcS2Ltq2NV5DJMm3yuyqRy",
  "key29": "k6w9etEKyX2DLtvedgjWTEGN8JpCwpNDUnCWK26xSXLpgHKRAxYRkTkXYrySYrmR4qUvA7epcm3pBruEhX87Z2s",
  "key30": "3CHkTxwB8UoR6qXyAeC4To1ygvemL5Tp7mNsTV6V6tK6kXNLmGo6GnoLL6oXm6GArx9e3SwbiXdcgYtCSjfrtiNs",
  "key31": "5Qk4PGUFV5bandb5Jwr7tQPRbMbsNuPomwGcGc7kCrnNUf9stswd82JC7NRxZWLJvLUmoKeyfYMGzbSD8tgYVm3m",
  "key32": "eaVciw6L6tAtuKr4QosnUqjNcBSorYNTsnidwFEzqAZWWri95yCwa1MBagPjejMsDcqQBwkyuvgEGknhgYNVoZw",
  "key33": "HAWC39nJHkuKczX4AdKGUxoeUGQnuCpU6sNDFYurcQrnhCQveSwbXuQ5S7UuW8vpsZDgLV2RDMfeNuE8TEBDqGo",
  "key34": "5QirZKLv94PMnEqC9ABB3X6SZAafhK4Knd54DqFiMrCCLCXAUNGU3u44NVC1XcoRKXpTeQGeUFuVQ54DBVMg6Xuo",
  "key35": "8xWRYEiyskWAdfEw83nRyfY8f91xhgw8Ga5ZJie5yVEApV66A4K8mXUWEZaKG21zERKgJ5xwVUC8Jhg9meDRMrc",
  "key36": "XxP6HC5kTE4hmi4wyYqsLYWorJwAJ5UG11Yi3XgDn86oQe3eE4qRXv1zHGRPXAJiAMGZ4TLHNYgVJBCU5ErgnwS",
  "key37": "2bxzATtDGMrxUhQW1fW93oPwcZeavx1iZnN8zPTS6sjjPnbue6x3RN8W7ZR6ezPxyiP9qXPMC3akzfkXFozAQqri",
  "key38": "4Wi6DmYBeghjdm9SDRh249pAoMe1JK8QXpEyKaDsDfxdKgp5fKf77dwbBuiHZ28D35cXwuf1VDx2EfqXLGPAD5R",
  "key39": "5jPLve6BLDBNvCLYKS529fm2XxG1nyUZFkiFkNd6Q3U7jW4GFkqqBvnTuHsNR1D7m3mfe3aPfkx411pHZqbSXUia",
  "key40": "4FdXZNxH9ZU7skuLtAGKzGNJFcobr8JJBp598cvPDFhEbvmrtTdvFKLEdwhVobq7b275Y8DxV1ZUaKReGUad9rVa",
  "key41": "2q8HczrM3b2XhiWfGCfTSp1CE7HKAdZPvxsT61fKnno8X7yr1JC4PhG8sxLJfzTpbqctS4FCdApWp6E1Z36aHo7w",
  "key42": "2j5w4ez1kkiWRcrFbS88gXCLiJj4eP3hhMG2RvcW6uZJewo5fqVvmdDcErq2jwKgqdiEKYHt8xjHgLAkCoe7DgB1",
  "key43": "4D2rLbJd9SvdtRt7ArBCQDDPv3GrAjDCYAuguvVGCSEj3WGFyCgsjy8P7euLt7CgZ4XgDeVJYt7ZpZ7PXTDSeF5s",
  "key44": "4beb1NFJJFVGmvbp62ASBwQmW7xezcL5b2MNFSbsvAK5i7wtD9ft5UnT7DKqgpunAXBS22GKPPobWEotKirbANFu"
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
