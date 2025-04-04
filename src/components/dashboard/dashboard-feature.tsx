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
    "2eoPGPqpR2qP85nC9HgfhD5D4PxHNJbuGqqkdCFSyo9XzZmwbyz3BLXbiWV9vv6xrTyyuoDT8ThNMvjCztLe3g4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57pxHKPr86PiogkmAbVwCK3UmmH9NWrX7kj4BgfWgsQXpjqByhmpwkKqC3FqfQUS53yjaKmNMhC3L59nERa75iTF",
  "key1": "54PVChdffzLwbKbFBnXwHENqS47BDNjpbh1Y8BQSsK4YRp2z7JcqvZmYbjUVpKNkxUhuLMZx4Sfif6feVfVxKcBr",
  "key2": "4Dm4awG2safE4RnojY1V7Rx2gdzGQSWZGqDqm5dFbxwsBhaGqGMPiqL79W2bNrBdjQet1rS43eT1r9zzUxKQ2BhQ",
  "key3": "5SN6yzHfVYsqjpxHbkexnA6a6Bo32meXEzVgTWiBTSvGkH4awg6cUCpTKpnQukwQxAhMfinqi2V2sKGQAxUJoGX4",
  "key4": "5GvR9U5R6Lyvfurb3PbD2sVq5JWB7a4MWBCfiFjpszpVnbKaj2cuU4D9tR9atpNwz1cdK68JgB4c7M91LtN3rHyw",
  "key5": "513gvRcBGiXDrpbpMJgFTnsAkgfxdmTwchJMENapRCW2ZAoey74FjhN7g6wHfDP33GcDE55bEgvb3gGkUoQ93etr",
  "key6": "ik6tXED4wSpw5fQu8KbSrpsZNL7a4U5dohMBdA9kNTnuRX9Q5nyRyPAjstbQn2aSa7WQkVrSricwWSLnaNJk5QK",
  "key7": "5pGMqdSEtVCNfeFpKQ3A5BVxC66Jbfx2HRz2VFcsBbir7ZWSihciZpgVxaQbaVeS2BUYZ2TsprAvuCAMuoYfR1Rr",
  "key8": "5nwQZbB6ajcsRi86jFd4dqGJuZsJfkMvMUT2VqUiadYjfoeXZYVHqojExK21KSMGwqF1tYswTMS5ZBPvcodfrYXb",
  "key9": "2QXDrkBwJKtmwzSrZqaBB3JP4mo7NHNXFSb3BqM8jpM3FyLLehbb44gUgPH1ViCbnuWvVwEfZfMyvzMLJdNfaTWG",
  "key10": "4YZNQnChS5vNPtbPhzVWJ32ZSqQz4rjjFTuvYkXAciQsRGavnZ9CkuyRmYQCL4PfQB89AXcJqeziKeKBojYo91ac",
  "key11": "WrYX7UE8wQhdzVsUqwpUDTmyqXP6PQeVG2ymjj8zqh9qLSPMLjAu3fEut1u2JwJgVuuRU2qvwqtJvw76xcForua",
  "key12": "2HRwC2B3mjPd6HwCcksJi9WEGbNpsoukv8CQybZZRzF8QcGgSkByCgwa1z5uw96712Xw8ZZPHgeBrvUqyBE3DrZ7",
  "key13": "5nQK5L2SJgDYXU7zKsoEFe11xYZQFv49saUm7Y6Uqbv3eLojJmKAP39sH5KZ4gxPnL7KBfLwbt3W7uRGc9qLeHAC",
  "key14": "4ZKFwfDoRHY1BehhjjsYVsRnswDEGjYJG3JEzzXPLHUmTJfxrMyQfmXY8RHNPPutxkcrVdtHy6xhna2SkRsDgH4c",
  "key15": "26YNUmcNNXLoKcFtuwkzzcARZ6RGpbjgTNeRfu3P5d17Eoxk12to6JL79FbNbW5redmmVjxfrHv88Xtr6NLxSrbE",
  "key16": "2dcLMB7MkhR1kuWsEWVe9odb3aUb8uqzQeGkMcMpYtUtDznvyHahhhtKWg4VsThqvrQ5nyLKdmj49jhhGjysSoyY",
  "key17": "2A3sgvhGfyusSZmY4aWifex3gjSvqHYUZGa9cg4ZuaUmMELJDJUifEDcXr5vMz9JrUUjzKmbas42hgo2G9i8r4tU",
  "key18": "652mgVqGe9otjxKz16eJ1ri3HeDgjf6AKVjVnUqJFjQgh1EVfq2NhDxUqo2WxtuB9fVF5HRDJGJ95xuexA6XEHhK",
  "key19": "4EdLgNVHXLG6R5ZGkR2ZgKgH6hTewxW9tAp1tdBmN7R9jxSoCtNdHNeB2FwprdvR2VZXg7KYWnWzVtypEmfLFMK1",
  "key20": "DHDk4qdgRBbU32LQybz3oNaJibYAFtc9xygavfP2PXMwsG5NXtgWGWZZjvs2V7Ro5Y1SZubQW4XsTdYndk6HxPE",
  "key21": "JqPR311L4sVBZ9Sc8ZiA1a23LtiLo6sASj5dSPURthxJVUmDbiEZTVtGiotVWpYgpPnP8ZjH5PNV1byRuU95YhW",
  "key22": "4A9npABQtppTee76zwHR3PeRJbKJCe4qvBeVc4wrVMQwLoVb6zgMcmDUMLhRT3BoPE3BYasx6zAothX4JhwHruqs",
  "key23": "5DCFS34HHbSRDPMWDwqZhj51GJtL4wSYK22i5NVwineaTdSCubJ312QeKdeaQSvqjDJtix6mzCn7huXb5S73nTAi",
  "key24": "4DKBwYaichSQn3gmJcFtNwR1V1TJEEiECxUPPiTtBbzcKSvwk2kJoSBuuhxhph2xZiQ6Pg76YRts6fm7FE6uRvMg",
  "key25": "64zCEcJCF3TXWsq5Zeu8wGVjA2o6YiPvsiwhjEoHenNVHyeJYM6AXRs5zzCNsPuJ6hYjsyKCBw7Q7scc7JBqygnU",
  "key26": "2u4h9kx17WPNVZmGFw5VdKeHr2T3jAyHv8bJsdZ37qbdjYko7H6Rmva8xSNYiMV5dL5EPE1wxEu1vFfDHEzCfccE",
  "key27": "2S3ahMUwmazjeem3YNGAk1PDD5Qz5D9kFxTciWEjijazBtwRDJTVWGmtGdzfPs9bVp656V7QTbgucZQD7UdiW4rd",
  "key28": "3f87uMLUgJirtxpTushLrxHExXGxpF34LmnHHErxR3FU7nH2JL4TAikhwEomTHk7RyjQcyTU4g9uRakeSA9YJgmS",
  "key29": "5QvfsUuab1VgQpyGM67TWxKRHgQtdS13W5TS2Vv5RHPoq2uf4Ni616LvMGGcmRbBVGPowtjya8p6A4sXdP51PtCc",
  "key30": "2fgxpM2arCj36QDDmDPYj1zE4qikwb91XvMx4QWRZQzsRWFxyDjqteethiVhqaDuLytXuRFu4iovRtA19UVLTX5a",
  "key31": "rE2Dwuyu6DjgyMpV3szfEw23hdYJtHXWejBfCNTSDi2oznJGJRLiH2LtN6gC3wiFTRvh3Y53kD4nremWmfpSy5P",
  "key32": "1vHxFm57nxakN3dZjZTGYD6RApMZFxiRAVLgxZY8nRBsfV3fQywqN46kBigm6PehRVtSHgtsPCLKAPTcSeZcSj2",
  "key33": "2yFHDfNTdLCMwKC8T26xE7zsi7i3cpnHU1frYFWGRCHUxmhUTf7EDEPMpmXgCjN6KuU4Kz3byVmChMXAzeNiaC3k",
  "key34": "4a4T7vNao4SJRQYBUqce8aQsCPV9iAHWRrua9PoQWmgugrCXzwHKe5D3z1ZaQzXQXZBTaaydT37jCcpnoHUHHnZk",
  "key35": "4CuGTD8jv2gUZc1WbL8vr3PwsXp2CKNJT7RiJxLYkacJHbFwtHFRJQiKA47y48bKnwHA1N6iY91DyDT6f9h1bSba",
  "key36": "56E3Vg4xHwTRiCepuntr4CwWg8c5eFrj12rHfsDsocNAcgfF3uwMgVN3eyhT3Xwfgn7NJEk434r5wYVd9Xdzz95n",
  "key37": "3Psmard7eyCWctozbCYvdky8qNFCtNayhSKLM5Spuk5tNbd6NqShFGF6cWfbtGu36m5pZrNULE5AoCtMrqxreQtV",
  "key38": "3LaXqaTPjqYo9oQn9v3NXtD5FrAXHgBwa46ptnrr1chERSUoqUvbEvvWymXwQG1a2DN4ouP3ykDZCGCZAfTvNrip"
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
