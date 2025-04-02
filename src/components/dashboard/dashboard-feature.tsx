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
    "4XG77Ed1BhVsHje4BnmrXyjyUqW3dbHY5TzG5Jnkdj5Dqxn2d1d8QerFDjadvDrbnSfj9YviiSnfePMmmsCozYYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMpDUagKosLibFFXQfNd4RJW9e4Smc5CobVxGWoG3dKK3w7nj2HVhD7RHkYxWVULezdu1T2h1yoSiPHpBHUaYRR",
  "key1": "5QdoGZv2BXQnxwYFZ6Ck5XpWbxjBuv6ircbQ89Tp6nShkgq3WGrhzsLhGWGawmJdEyYoGHGYVSNUFUgMyULW99so",
  "key2": "2uCWFvK8jGYdMT4oLcKJy5A8LHWay3P4BYpLCXNbxTAVwQEsA3yrN55eMzNiZ2MoN8BzGzbhsVBqRu2eXrqGvRU9",
  "key3": "48z8NADvymv285KSJ7VuCMhdtCpScTAdwQb85ddwnvNQUUe4Np496VuyXAYDqMHbVffdvnh65W219pUgPArqn4iu",
  "key4": "4AeYFHf3RyRgpjzfezwu7xQL4x4oxLAB9q8AfVxJ26xPcbvfrA72tW8c3v6ZNruWxbbA5RLeFzcZCa8inH1Cr7U6",
  "key5": "3yCb7uyoQxWvYXSNXk83zFW8m5iRHopskVsvDCBMZXrjAcA885bRGHvadapEwegXmTzXPAhNu2cWbdUmo45gs3Fd",
  "key6": "6o5x2yZTZ72466PQGZ28Qg43qPePLbXJo1CnL32F6wLNsUHixYLdz44biFDDVz4KbMJbmNFXbN5GLGfhD6ajGCT",
  "key7": "4Ln8NLf7iyNqVea99S4RB4ozTtuRnKhRZu1g7yZfegWYJBQvRDKmif3zexQBAJzGPU39CmT7SEccnj1Dc5gfZ7iX",
  "key8": "2E58dPZPH8BzVBJ4MyzfM8FF4NyHk6zbR9i2qFg37pBaV3uts3khbpLX6jcP1saWWfsSbuBYhhYXHrfSc2CwpLd1",
  "key9": "2YS7EHoH3qSHKQ8id59u1YnnMQygf6iwGZY8NiMwEmU3D9UFpYPnzEYxfbbEzW94Cqz19pTA1ccytpHgkEXgbLyc",
  "key10": "237QSAbamMY7gz5wuFooK2sZ7b6itoCxCFump3mGL7xbvMMk7iwcdDsjEdb7NnqfPN288VR2jm7pvMCw8Fstq8os",
  "key11": "UBuUVaT2V3LxwNzu6niRrbHhx15D6uVNbvtREeRQVhnvuQ8hWyiKqk8o6VDsBBMPLuyjDamRfxSCDsEtCLT1cte",
  "key12": "5NVNjCCCPYDSmagGu8kjnawRpaKjF8L2kAVsZceXYdefjNBcS8FZEWZN3DbvTiXyq6p1P1Bdr7cxBBH4K6TXxW1J",
  "key13": "2253YchzMKoz5dCPJNC4Lqh54Vz2j24p7441TSEwyiGrbS8p7UYmvJeHpeBPXksXsUaq5CzEueW9orhDxyJteiwv",
  "key14": "4tr9PjWc6fWHSQEx5F5kLTsCt3P5yeSdw5f3YHfjPKJxQKxxytwn8cGUdQeuASYYKw2qyqMBUaA6wbLCNfpLkMJE",
  "key15": "4ibjVaGzFviF5XmCU1V7tZFRCSQTx1DzdMu8akoPKgsZgs9BXPckjRpSa1WwYcUALcshj5u4x2oDcw2w2PD1ViG3",
  "key16": "3qZaguo44n8k8R6hTZRiiLLwXHoDpoyvcCRtHEs9FnFeZmkVAWmHQNpnDX5H989X5BhKbZshj8p1yRDBM9MkoAgx",
  "key17": "3t7noB8CdWpyDCxLZhr8Cxy2fxsAsMp7kYT1VUbZCqtD15pGSqQGx3HAxBE7BKQcLv4rGBAmEDCvtUgr1ALH4kJ9",
  "key18": "5swWqmmFhtAUcV7ZyuBXX63mKztVd9fv1APYxvmDVKXefTrkWntm53hQCoQcDqKRzxGmH54FWFKLNnd74ix6qnGf",
  "key19": "CZvHYqAFRcbubzkWz8P3VwrTYfeyBjQpUiC7X5nMSKybgYUZBa81yhTYzJH3ZAmEA6afiK9ZsNHnpRx7c21oSpK",
  "key20": "49L7cuERM6hWVKuxpAcDj8K7YQTYyaFkqUQrwjNkHXuvas7jiXfgxMU2iLREdU1dQpuqVNkU32inxtzkgiUp1CdW",
  "key21": "5nc1ecuZtfwxZTKw9LY8cVx36XervGbh1YYXmpMVCeSryhdrGZbvWa8rRjRm6udiL4rdA6J6YjpzgGwCBd726P8J",
  "key22": "waA2WSd9UzghdrT6CbragbsJk3fNY6M5N6A7JEffW5QSdftLUPdhyx3UYzFEoyxc5fSm6GeD2GbPqx8UdJsC8GJ",
  "key23": "PdoQ4yWQvr8yAoju5zrRY5tvWwtBr8DMyfzYxYaAGepXtd3growLDLqQhipJyWiLXenjp8tfHf946afeneLf3vg",
  "key24": "29j1MV7YcxFAj2tPzmfGh6u1kRwY7jnwJbHDQxzhJvPFdUzS45Qk6SiN8WeTPLXM71xLyVsBTe9jYAcmSHA9VfTi",
  "key25": "4ts4vhzRmfGNhCDZF6M4pFYA7kNdgV6UadJZ6EuChgwejyJhdDs97BcCzGLuLiiEg9YK7CJXkgTkyhZA19czgr2n",
  "key26": "3nzzVxTppwPE8RRpsUmc8CPuWPArN5Y4bDQFzRJSuj4W8kp8WWZZEWewci6G8wib2ACJjcF2RQstNZaJFib74Sfo",
  "key27": "2onzNKXFBCiYu9aFztLJ56UAQWKjswd3GEHWrsUCTe8GW3cBGDSju3At5TL7dZm8eTudaqVTQW1ckrSakPadTYiY",
  "key28": "45C2QzNAbEYSbv2PkreBS24rBa26YcyLj9CQLpARQqR1vMhPaLHwkh16h5fKHKXpb9wEyEzcaRDSBoXkypUYSAwW",
  "key29": "5Bx7YRJuWxRWmMDFTAUjL22Eb2bjPqGP8jyg637DPCjYpmhhUDCGeoZgx3XFQU4nbwd7cfcNixxT4WtNzvon9h2A",
  "key30": "4KGsX55LWRYFuMPKEDZypF1DaWDm28LSGGSo1oXcA19h82hSnXZaLTCigCZp2QnDaiZJbqpyE27qSV5BUt7HFLdj",
  "key31": "bkCdWdrqSkLXoMCphiw4E9oaL8Q6hYJc1Ws1Xkq6iMzfxTyJckSJRrkHvUuSEypHC7Ht19XM8kboREvzU229b8y",
  "key32": "477kGy8jcj8cyfuVzaquwkUCwzkPPMhbBDdNbj2jt4WznwkCXpFy8mSpwxHtFX5NMvLP9Wrggrvv7vLY2cbuYCPb",
  "key33": "3puiRcVhbTfnpuyYXBRnbEsJYnfvJPH5btdkU77GabVtFZKujXwzT1FnoGUT1m7qL4pRWJvhCDDofdxLFEnDtcoi",
  "key34": "2VyEo2sqGa78fF1xqi2dekctW5jjnVq2L2WtbJ1TvRGsodzdp1FBhXFeLWnebYMQMEyV97zzCBoUk5kdGJDicsEv",
  "key35": "QaNihhamQ42tWwb5195m2CAU69NkNeqbgygexeP4psK1vxB7PKiEr6BEVviVaaAxNQ584gRsWj4ZkcwnjjXRbFE",
  "key36": "dtGkNEnbVHHcZWEt2PHR4HttkmxAhijEEB9zZ2H7HaCik6QDNLw3S2ZkYGYFdk4ZaGkU1ocgYzQv3cbYyKYxW92",
  "key37": "5bmxQkQem6QMWUP99yLnUKXCzsrnchmhtjGdF97kYnK6HxENeSHuy4sqJkFSdztxXz3EYxuvJpqZ2X1NoPPLMHBT",
  "key38": "4Sbd6ZYPF7hE5AFQobS47BXbksDucCzn3ESvR9B1HEZSqVutvvJkowtbeR3yNtTbnmELhoHBn2jvZzMQuhtDGfaP",
  "key39": "4b3wS95zqw5zk6uh7MdZhwWDN9H9ngZUMNJ7S5TCC3oqb2fsLMoeLvNnmwBudrfv1R6dp27QP1cevK1TeXYaNb8v",
  "key40": "2Wvz1dVtN4AXoTULDExr65KwfD9WboewSpTWPmfGEZhrzak3K8UKAXNbQd8NaD5V7ggq2aVNErQXAUyiehpSYr8n",
  "key41": "5mVJdgL5chnyzWWGr9TgPmM29G1A5B4nV5C3s1Rtw95KgEmbBvFJuT7BwmJnM2Wis7CryHvV4jvZhReJUkiwiurj",
  "key42": "5jZCNQLRsD51AEHRcMhr8hJPb53EoRdU87xEr7EoYpVVGBCQSDawKuCvPhS2QW87uqutUrgHR5bN9Roittxmtfna",
  "key43": "2urcshDzraHnKiFzaBZYppkS5LrhiV1JYZ6KCLtph6pKTXQRBJW5Jv3HPAD7nsqr4tonSkdBDtS2A8LMJeoEk4Pk",
  "key44": "2t93A2ALi5gDePRc3GkpgV2FPVqUhou2aXABZPMe9ge7iWVA8XyTtJi2zhciE8NKPkM8E232Qkgqpk5B6QdXuvDM",
  "key45": "2NN6SwqKq7zuHcZ18zw7UN7RtpnHoDehEq5iFMggZJ6EZTBsafgKZE2dBqt5xjSES3gBp213jZ8qcSjbYmtEGtK8",
  "key46": "2Ptgd8Air7KXyNgbKz512qoVLYYQQrfGUqH1qyAAJv8QUDypKdxG1zi9NuBJZW2itRX9Rys8oitgtZ36szS1dRLw",
  "key47": "2F4VL21NE8kSQbb2K3bTZtvqDDNvbG6ikstq4sGoCXMiWroTNvLCkiEUbnxRZvnxQ9BhmDRnBPeE8YUyACoJFXNN",
  "key48": "2fsDb1egSQQHqjJS6PtRMgJJp7ZXrm1dTQb5K1ruVn8QiUn6e5xpAGS8kDyxLs8xSsPEkHpQbhYy94KuQhtzoum3"
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
