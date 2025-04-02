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
    "65JiQ5VGTkDfZDmDUsMgD5MzDMRqjHBARm3snuhVfioUbsD3W8P3V4cafe6Ce4gAzniFddzRxKyzPHo1EtNryNX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGKfW7JA1TtnDvJxJnmMav7Sq8Xktrsi4bAott5gySgxJzWyGRx3TnquzD9UmwUKjmCMq5mkm2Fb9hcvBEgmUQg",
  "key1": "2QaBwuKUKpCZB3gwNAXWFcZHgpUeaHm1HBcCpjAAejv3jXME6ja7Pm5rw7Uc7dKP3ZxCaQVFTFTz1oj7FN67UjaU",
  "key2": "3pJ1mDCiGo2yahNi5GRVgGZCbwFapBAv1cV7HkJpP6NZaT3BH6mQWWKJKBoeYkyYXCkLJtQWYxYzvN15z5AYkxu",
  "key3": "5TScripvcoM8GpKnttu9usHoa856KVtJaj2Nw1M9sCjf52LBR6fU6gRop9kVgXebHNcpMUqdRihsdQgF8efzsVq",
  "key4": "2CoMnLn9rmonNmZukcCkGcudqpGXMR6kudUULtA47k3SSFv2gQXDtJD2JxQVPYLFAzmSvf1b3nkSrThbHgBnuHku",
  "key5": "42AapLsuryhuXz1cjmsN51qUw5FHr4NTH59mmX5iSeBLMBP5oq3NnthmvovNcdg8htK3yQtdauu7WXKkTAc29SjC",
  "key6": "2EvEvzLdNUFVyRsssXByb3bQhQ2J148pMx3i3GgohZVCsmTJ4WinXa4XVqbpGFnPq1PMGDNFpRDttXNNdMZbnGDi",
  "key7": "muYVSTMiMXAXQaM8yPNzv93q9RHmC2DfeLv6tac7dzKGyc6FNs5d5mhB3uWtjvdZubetiN76DrMN4q3Mk1QBEwk",
  "key8": "2XiUwzeXds2UNMPGXmycUffE3CpqbcX8QwFZthzyLWFU981xrHYYn4Wf5MMEWJ2mX44fJ16RmHzNXM7m6wUBekHm",
  "key9": "3kyn6LPesG1fKMjGpy8rCK7fXhiEtc2fEiU5vxcnVcbxNZJ83zxAatCdyD74dHQPtz1nRUm8F2AgoHtaQ6VEyHgb",
  "key10": "3CMLaLMcJqhPW77dmpia4YLbHmLBzmqumsSv5WNkNvARo6BYtew24ycKodxfjegY89aSH8QQRnNCbPPQv4fqzq2D",
  "key11": "5kngz1xu1zeGRe35wtGyNoLUa9hnXXW6rp8NNPPciWMpaKpywhbCz965SM1Mkto6Xk4fJSfh4GowgDQGFvJDsVgM",
  "key12": "ashwArvGjnB5vGmcPQTTvcixVFLs58Ko2ophA79GUAuD2y9mEvNJRr7SvsTLyV81Lp6u2D1Wn2ZmcnZd51iS1p1",
  "key13": "5WtgSUgM8YB6rqxrYR5WLHpdMM5a6ML3YwxN1tMadQjD4SL4H2MVmLpJ4zqga7p9f96YTReuKhRuGGsQyhrTz9fR",
  "key14": "41s2WVACNbhfZRcogSGMq7DDxfGs7EQGmsg1GZgwgHjckkTS6WwsiqcQgAPtN2vdfkxhGwCUTv92Q66W2AoY446u",
  "key15": "64BWJ6cutPLSNnfmxG5ivqbrHo9rucgdbB2XyhD4BcYTRMX6nEiCFtJHsWUFYfCfPLvQqJ8hMkekKUJT6uSyPvit",
  "key16": "3PyfdYoi5Ejtrk6XRfZZc8qGipmSPs8K17REz2nXfeVFEjiYTXVhQNmNLFYFCk3koZLCYUvy6N2q3X6osNZV9EtG",
  "key17": "5sJbdk2CdxCHmt8m9jLXuu4nZSQFDH6AxEzSfGga1Vm7bXZsK32CfT7Vx5wR1V3faR8K2MPjWMriDwVF1hKSgGaC",
  "key18": "5vNQzuQKZ1Jj4y3fn5XqxGXjPJvHRCnDJXSpSHoDVdjsE1DrydgpprcGZG2xCnhW244MyhkeXwbzozJWk7yFvstB",
  "key19": "4pC1PfWk6nnHefcKvEdUhWWVABWvcUPYXAsjw25noP4unUarnd4WneTUsoozuM4EvArrX6YaiZgCgj8UqFvHjvGu",
  "key20": "4U3ow5GLiu4ZUiG1CWrmUwhot5aSHpK8qZAkj2TRdSt7svpY5LBUA4j1K9RwHDTRFpVnfzcWx6PAin22aKcjcbGW",
  "key21": "Z6bSyixyZq2Q2wc9Kjxq2aJTXpWSYyrUv4S6YxRCCi6iREYqS8XBJ46TbCZbo1VMBSiHinFUqZXjwD17XphFaca",
  "key22": "2fLDMAx1mc3TyA5SuzWjzDuAE94ga5mDEfRE653iZ3t3GqcAfxGQWLAPExQzcPN2CwFF5iECpf7UtYuLvneh7kxU",
  "key23": "3nmm7KGto7RBc52VcSj3s5MJiEziQSPVxYcEUsmvXwQQQPcH5LiTdgAJQdU1wyEpNcjgq5LPU8jQjUtx7HMgj3Rf",
  "key24": "5hnJJtjphK1LuT3tL7TDhimER2xbAKDnBjjgyiPiM6n3tWRAhXQNipMPNTtEPnumcT6UrbEnE323YMNsL1LC2p7J",
  "key25": "3ZUNEmCC1CU45MUrG3wZjpZgnRZp4Wk74vQ5jxHP35d5j5xNmRvVKBoPAGsJbaJEDjWYs71PZjsA6VhdTwGQYpnB",
  "key26": "2unzp24BaPS2UX2uVMbZsdxs1m4eBjjQYEPyruwnAVNRF34sUio52jdKmnpQBTWj4iLuQwoqFJjY6RLJqG7GpvfA",
  "key27": "5i8BuRgrsrFoqqW3cJNaTP6NARoSRJnmzAJVzCC2AERLFps3W3TEbittCtZGXktU2XGQ11xBk3DBodBCS9fRXZqx",
  "key28": "Qcs4UKgH2CwvuVGLxoGLGJrHudzSUgVGuGmMZt7fhWS7c4CEstxMkK26bTzRRzWDQ8PZrcrApAHj2FKWbpZcoww",
  "key29": "5XUzk4LAX9jk42SCcjZrmTARP4ssC7hKeamb4WMs79mSTJP8Kwdd8JyHsDa9fBemDFLbZV9wSWYvw1GWgA917sNa",
  "key30": "31C6SHZYmAaDJdXz1MnU6x6nZ57bX3crw4CqA52gfk2ELGPAS2c6YYz8aFjRgitJcJgNRrVUGmuBhppSJ8MkaD1U",
  "key31": "4JsfuR3UM5Djqci8mMWiEd5rKe2k6KPCymzBe3VTg3HMTZecNTUxTm6wNJmg66X92h3YvPJwfTuV3M6T8rLvsFF3",
  "key32": "3YRFXM4rsKbk5TWqxCXLsHrdrBSGKWwj7FqhfqDomUVFieNttoPRBvAvPdcB2KSPonM7MTv2k4tSR1zXbSeGt5gD",
  "key33": "UQF3XLcWxdMnaPkLK2kYEU8qBso7qkobXkwGQENANfJbQAm2HPoqwL2psjhXuf9k6KLydg9btgqozTMSPGxZ8oB",
  "key34": "2gQ8hFm3MyKhNtA3o3WHvMyb1V1o42sswcy23u7WA2nd4AfE2fTxJnAqAaKcqpDthUiGkeZS2B1kbHiwkptQHkX4",
  "key35": "vatcNR7KjqVHHUwXkKz71gQYgpo3BmFo38WvXtLqrULc4NTjvjC5Pa2PTKNfQBZu2fW4AWUnHzjZdXs1MoTS68k",
  "key36": "2hTJR17QdnnLpp5A8C2MPwCAXPfFEWR99ykUkaBiWEWkNPxZhiKowho87MqbMzHbfHRohj6pQQVy9BnkMHYpXCRz",
  "key37": "a9NX4fWNM23MeQuZND6nx9PaGzNaCRyd5phUmQtMuPdY5LTDpPy99CL3pt25cHbFN5tqYNRFLQHepk7pBLuVuJC"
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
