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
    "5bKc15rMBMZ7HpeALj66JbX8b7sehMafzXBb4oSrVyPcbtFAM8aAX5GXtApd5vdSffcwitLnTZsgEzMuMuyy8R8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ndfUyX4he38yGmwBVjibx3Buc6R2tyRkDL4hngH8aBab6PPbTLz9Z7ykNbeXaxyoBixpebMTR7kkG3tXRqGNLDR",
  "key1": "B9iaasyJAWtmWD5JE48LDHT5gwxnLoeVJLWcSaBpWKrHEyA5zjpESnGLFfD3N1iQRz8t1DwTF43tSKhGcSEyV2p",
  "key2": "63fGHg9XtjB7xVPcCKTXcvrKsiUnUTT9BW34wJB6456F4N99xv7Np3fAmFfQXa87v1f3cnER1ySQKQ1AkGdZo979",
  "key3": "3ie3z1CNuZ53HzUUqgp3AkCuLH789haxgNCP9w4QZaioc7fNLdTtsZAVD2e2hPhDPjUqUF5vHMH3NauLUzRceMJX",
  "key4": "39ZaUcEjosdRQ9cgnAVBuJVxUX8seUiUHBgUP6NKcBRf7Qvz1aHvhkxEZUf1EnaEtFffKhpxHuwfBwMtjJGbXc8a",
  "key5": "5B9teybaq5qGfdxsWC3vixyRLYjvrC4zMxwR5A8vW3Q2sLpKyApBMpWNqZ5TVybP46KFEv11GxVHoBBXENpKU2rt",
  "key6": "3fFhHZsmHZqpHf2aDeAQSnKUAaTpezfHfrgfHjJM2z58vj3cWbmseHHDxF25bxSAbv7oUNJAtScMp6XEtYy3aDig",
  "key7": "3TFh52povHJxcUfSn9ohfVCBj1y8KxZsJ5YrHLsX2rnWgPHWBMmgy8nYqAEF1ftHtKU4kg52GKVtBXYv763qWRJE",
  "key8": "4GK1mJLCkkxHtmi2sVfKJKuMRRCgRW4X2XWrPcAa3y8zYTCYtiXjWvpw9TorVrFLPF9VpimHqTyQTMWX6zC4nuy7",
  "key9": "ua3f2LTokruMGf9yoLbNYsBikmsaHYMcYNUKLFMZUxDP4MEMVpN8H3qpJY4iTz7Nim8RrpbG2S4e1gisA9e8ShA",
  "key10": "4aUHDNJkbeXFT3h6F3qZDDwmHs1QsF6gP5AVvWXrgNJkHbep74Hfpwrn8Vy2XiSiXq3Sb7UsmG5JnCc33wRJCDFC",
  "key11": "5knugqQeHk6K9jwANLmzETyzz7osZdhpdjc2yHhStPKgzvtKYSs1JXsXpLPWW1ue1YMhZ2VGn2dXaMur7gChcvCh",
  "key12": "5WTGcakjBFifMxiRzKPyC8xgWYJHZuzmjzprY4uCmiim79aXHDVs8oUHZRR7YMYSoQmx8E481A3opC1KFB6erkQi",
  "key13": "4HkAd6DHYwxfsGjFNBoBVxZPC2nEs9wyjndudgXkSnEb6GCk2z2cxNHYrrCrmP4BCUk12oFJa67iaxt7XFVSewxj",
  "key14": "63oWri2N5HcYRFXp3VHx9reKfvfyZPT1kcV8UqRNAGbiDVf91RvVbFAJp9hpE8aPQY9iugPvneF8TAoZ9SEWZvJY",
  "key15": "xBr1kKfkQvdh3vivuzxAwx4UzqMTdQVMd2xEVE2L89wPSx6BbR1GYNqC8qM1CybopzW6STMHGAem1sMdRqsyRak",
  "key16": "3itvsBj8FzMFCdZCqP3sEuuZhHE9VQwJ16jwz5FZnhnHQMeFyM5AFFaXspjmmsYWDN725AcWJa8N9VCmueFRKasf",
  "key17": "3Cnt1m3ZoXwvyByPugaDqjKwKkPqzw5AqdvUBGiBgTPj8RGuptqh8G4q3vt5nAHCG5rPZjRPHnHD18ycbMH7CyuU",
  "key18": "35rr1ASEx2ev4x5Nu7e3NTS1apN2A7rEp1crWT9hbUWBxF2wVd9V3uwzGKpEFxxkBivrgrXvsuGsuj2TF3zAXxRW",
  "key19": "4uFoq7J996fVfaguZAKqeQqq7UDJtMJFoaKVqof22HQaDpMKARUtYh9drYPbS9bQaXLbhnwDUNryEWfzXEsv4UWM",
  "key20": "3x5cDffo3Dddn3qPsdSXuQN2NQqinVLy5AsUa85wa7a4H1vNBvf4VKLJ6Z1ecG5ya3XGw6n1eMAekLDYWJRQJceo",
  "key21": "5NRcTxSd1w3Kw9bXkzP2PvR2pja1auemwH3CRpCm81vLAn85wk8fcnBSYHXjza7EtK4B8UKTZqpWC2z1o8AkFKzY",
  "key22": "2o5kvBE6o1o6ZU6M1JhoULmjJCbcYBrwYSHcwzKL6dJWtipUEvfo3h3dcYMoLABrBWYnGKeMBCbu9cuEngBjq798",
  "key23": "SUf54ppkDsdNi1Nw9kktzxf6JCc1E4KHpG7DdZaws4vEdoZmDGp9zDPiZcW51yL4KZj6JDawrXjXxKukcx36Eer",
  "key24": "3MBNTeCP2DyTkEqTjJRUcTHYTvCX5WF58B89KMYhEi99SnbFhpJf8CwXVaxGHv8cGcZ1aGuibsLjKszgg5Uzp6sX",
  "key25": "4ZDKCduJ2A5fR4vnawEKydjvN4SrAa96s5TeNV2sqGg3UgQMLWR4K8wep5r6oDdQpHXLvz1fmX1Gc21himj1eXeP",
  "key26": "2vi8Q27pYjw3ivQQHV6Ve6DmxbehsXB8wPtkJXBFoDUutugQAnn2GFxgSnGDdMXKbQM6hPVLDa4nP6cPnvTd8EPb",
  "key27": "3v5Xs74po8ymFHoqMJa1aFuGttNdyvEwmNhMsgCR39fA4EzZejZzjVTaZyK7NGPK81wLF64tUvFZzgzrgwk6Ru7v",
  "key28": "2m1mK3KfUCjRD6BNsiZJ5LokR5hc1BvjWD4dT1E5MaH6TvZwr7KoTE3dm74gSihGjNZbDmw1c3LJmCHN13ixsHf9",
  "key29": "hYwcN9rXREpxk6MJJMV2zfmYFqhUyXwuyivdx8LtNWwSQ81aZsRwnE5UBJRti4KQ1kRbXsuSqq9t7L4HUxFdHMR",
  "key30": "2RyaiBDZf3fmxDaYypzc7gqe14uPCC6FYYmZbPcmWRiwXndcSWhKKpbL34awfktbs7GgA94f8UApGvCHFoX3HZJJ",
  "key31": "5HP9piugFt2Ygk2kgWkb2uYLcWdw8cdzCJKW4yYukp8YaayqJ3gmaadXFgEWBjGFtQadrPRMHp7BihpBu6Wv22oB",
  "key32": "qACp8qkXPoV14k6hsbdLqyB97yL26WFMcy7K9pCYuJbKMZ9CzBtQVt9hjp9oP4bDmWz5G1hkbESzxWFN1L13G15",
  "key33": "zLcWWH856iNpAELKVqt2vFDT6RrQhK8sTsJ2HANzUkH4j3xSwwmK7U25a1rurhCmEwERm9R7uyzbDLbY7AdRyHm",
  "key34": "2AuiZfdQ66vx7t8ZmbX4zxY5LPJJMeW8qWcovMqnLcqqpEDijaVmDsJnjP6stsk1jTghz4zzaqh64KkzhKbpykxq",
  "key35": "58eoBjgXsjagu315QxoeHSWy3Df3wHZ2kQYaA9orHGQXtEfK71hMWqjFwDswUvvu9Yd6hPJAfCudv664u7rdTBWa",
  "key36": "2KiF4JY2xnPwtZFxxyKpJh9B17ybjX53dPRRt5dYBGW76YbdectAcx9fswDYzYbJftkjMkjkcxNS3eNLTebZNQNo",
  "key37": "abVtEfXtJUcu7UPftuk4xv3Y4cG3YUqaxB9a5Redp9rorcjKAyanrDrkWgqmBBvHwGRzf6H4CfaDpBjR9S3kPy5",
  "key38": "Z2zGgTmsF4Lx2tgvvJ4GC4CkCsUDEpuq5iFcUC4oduN7sYM73otLcqHyVonw89YjLLmXEhg4GsWBK9qSJFh48ZU",
  "key39": "5FHVw2SFwtfmFCHj7uRhsAqjg4hMWEmBTbHGza6VrjYdzPCYH6vUHpn39y4dFkYjeKB3EwaXHknMSbW8mCs29znd",
  "key40": "2rUNKCAVZAgfx3ZvpQDjm96ZmnUT7a8TZ97WjUBDx1wFSdTA5pCH8Pj7obyeDNKao4X4e7XR2B1Nf4PeFpqVC6aV",
  "key41": "5XE1LhbZXoiyXzVT8dLLjdpaGQ34oA1a9cbZugz6FpgvzVEqeVEFWzXjWE5bsBZ2TkwPSCpa3747qSVGDNy4YzFu",
  "key42": "66qhgXCA78zUUi1uzkh3svFeEztFVJfhUADHkgZa1un3XTPeCmY3Mv44tRdQDKANECZ5eUmnC78yYLi2eyMsKDBo",
  "key43": "4ioH5whuhGpsLNhwWU5qgxY2Ddy8dwos443MeNDsuvd47CcEfs48vBT3YEmwu2ko9ZrRFQ2CEzUQov18Nt36UpiL",
  "key44": "2cGvCXSZcePurs8LXPkvPPdWxpanZQ9J9Jn9CYQZjR3jBXSG18E2zN6SHvvTqXt2H6VF3DtVjxG8G36KJTVXUKru"
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
