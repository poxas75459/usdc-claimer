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
    "3h4qGMPJKgCsnog7A2Lhw3z7ymEbN4SaLXc3xDzwJohfiskPhbcX2zaxTEqgqrvugJj16dSEA8QNYFFgSVJ75Qt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o5aQ5V5Mre37i5c11MgdbBofE622zFTP7mHon7SHQK9sqTgrqz5fXp25yK9QAQR3QQtaXdPso99XgGsfgdjdsbe",
  "key1": "2yC4Zj7Nb9vMbCJyz1YqGSwf1DgrCE5LXxRdeVrgs5ctBybrUPRYDuLyh22hm4kJTKt97mnnVpwHMZX82ccTkLK6",
  "key2": "hKU6Fc57ZrCAmuGWyWNypduWVbpWbQrR6Qeqe3B2Exei3rUHUctVf9DvQCz8GAubgQwHBPP56B3RLsRuPCt1Yc7",
  "key3": "3yp8EyWhAVW2icWuVpibnhpFYcHNAc9Pe6ZHUJKud4eNmcSxQxLyNc38VYLxeWUW5iya9Xd55NNCgs6zuCHQdaxa",
  "key4": "4PR7QeAFP523s3RN5QqF9vRkhJoKRDUS6BHRC4BYTo89q7c4iygtHBZxqtv5kXqCb5QgCNcT52oQHUtK5NpS8D3W",
  "key5": "DArfK1RjZnc1H3QVqnsTmsFQSrGE3x4DWD6ASLy8Gvsp42XEeHmmqU8oazP7im7dQ7HntNqiacD4qae47Y6xkwT",
  "key6": "pqJQ9BFKKqafAiRtBMGcnbqaruNvmxRdbFHgAJfn3ZhifrobYtH5Tr1GFQ78hiVk1CSsL8TBuu2RyFE59G7TBzv",
  "key7": "2SohiogKdsX8WyKRgcJFtB3CqeeQu9i5giJL18Krw6CX3bK7YyeMDV9eTMjp5mEWFvthexfkbAGrcjJn1KDYZmBd",
  "key8": "48c8sRcnVn5jRoZirx7MoxrLxSNyGV3w1iSp7r8aZjJVJuaGpiATUveWSFswW6XLxy2qf1kqoqHmvRNzjJDUbXeB",
  "key9": "55WsHhCjCyeagfH71bWSQdqATB7ihtGYpbU8FbF11r5XFVBFbgZrkj5NiKqmbp53JRvFm8uCY4xVA5Xrf41SXAtC",
  "key10": "waC1otKKozwrx9WYh6YaR3b83e4jaxadXpfXdFLp41cQv3EGZt8CQTK9aV9AXGxMFMiaCDMC3qpsqSC1ZSNNFi7",
  "key11": "Y3xpskELaM1WVwLiafsXBQS1judBzNHe2SoBbKNgTuJRuzgiznNZEeLhP3tF95838QiShw1vxTjJcmHgQmeJXbw",
  "key12": "37v7EaLPJp6Rfr1f7AqHJaMMNXkUvR15t56BY4WownCE4KP57atku5rmfd7e2c5rU1APfHQRRi3kBE2PqJCiDeGX",
  "key13": "5jLU7HVADdvzUGdHAsb8pdgaj4iyx3dwt9R9DKUpaTVNhGjEHd83ZeL8PSYbQZU2YztAQyUpZdT5DpSvHJ56Cyzn",
  "key14": "5Y2SoqCspwjVffasyCFsQAtwkpommSV217tga5gVdDSYhfwYMAZW3spMW8H4KUfxYnE2hWuUtq2azQtEHwNgJwYQ",
  "key15": "57X9A91VKz7Fmb4LP3pXki5vKAnvNXx5xw4jwAwQg3wPAhavMKocM7F8y4KXVCEWoNRbrU4CWUecuWiwWgrQMVPX",
  "key16": "25eCQy5TFQuDH4SQzt5Jea7PLef2v4TvezsqpB7UB5v3XMfKLDjBAVYJ8UqnQDKfFtpuCDzB82fajEtMDUDjt94B",
  "key17": "5hgxGCWBSkyeouqqueajypmfAabD3LJ5KfRb8zWiu4pzjsW4B3kEmYB5Su4ydDZaT9wjrmR1DWyrsj4CK7WFMx9P",
  "key18": "5QhrFbzoSx3kthqMfEVensCdTqXimJ6E83DDPZ4uD8cMQGJZmzYb4iBRmK6WWt13zLsL9XVqZTACLvHs3bnUftyJ",
  "key19": "cqk9sgP5j1rMhB5E9BmfamTe581wggmTbQTvTUt9jqnnSiwMprGUueQn8pPDV858j1GvYDwkUbTqQyfMhxBiF6k",
  "key20": "KCkDeVHPsDxkiS9cL1wcphwKa8bX3GUQY25Y7txqwnxqgLwxbqQK1m6nMC4uXaZVYj2nqM3w6BmR1sHN2Gcdjy7",
  "key21": "4qcvbyYQ8XUBCevwdk87Q62VzCzR12WYn5iieVahDauX7pappnPyoCAPSYHbxaSkRV63abzAQjndFzmjFDdLEHAk",
  "key22": "2TMaSfSbxzH7biGPwzYmoKjPMYv8QQ2StyjZTeAsjzoY1hhixsjYWvq5tFg7aARokMNUgpNYwU5xfh5qLMdNgDRu",
  "key23": "2M3r8ogSJvPM2x266b1vBbYZX3WyhZLztj9PndNVGE4nB5L81HNRTnXXUbNEu2XCD1JCyJD4CiJeo4Ux5icHvLMv",
  "key24": "2SXM4a2QCFtnQ17Ya9dKiLSL974MNKJKo19dUgw5KS2bpdJbPtsYiaFPpFudx2sC9kLqDv7uxFEmmo5f47JWPKZd",
  "key25": "2SkUoRmenWMgs1pB9vjz9F7CLuJKdg8ks36tuMYw12ehKPy9wfN6sNeF9E45kPQKoJkoSGxtcLPf58rE6ERGneMq",
  "key26": "27zPc8qEEZV1C6mdXugYLCib9rT8zkKPvXGLpzs3AVFo7dAvdicEWh1thRktbf7hmxchyQnudTMTULbPHBCRQfpf",
  "key27": "3vFyCJ71pke9xKtdkwxLDtPErJoX7EGFdqHXc5UPZuxuQDH8sv1gW1s1Bw8Hne3js3QGqZhNrrXXUM49HkqKo7yS",
  "key28": "28R8cHcmR9HhqKnxj6widqkx8upZGaYUvs5EZ17Gxhehbcvm76qerGeQv7rPKE1fbwa3UnJ7cr8CN6iJGA4A52Nd",
  "key29": "2bUerNNS1gLUGc19Za5yk8pMqpX8Z9GmEtKrQfDo1AxP68EnFNzg9yFU5UyuCjePaJXLB4QZip7cgAEpZSZWjuec",
  "key30": "3ijTfkiBwrFXWH2asQDdiaCvH89mvkpX9sostmpGEEjEXHuWBxukfUmXvEtsuHLkUmwrBsfwtLffL3wCCnvD3FtC",
  "key31": "uv5L7t6hK8Z37WsCNLuLfFV3rHe6qeoSzbynRCtDdCNAyftMSBREeBeKyF66fDtY6ufgJTxkf2r8yDEWsL9Kxxu",
  "key32": "5GMLRxKdZRSE1kj8MVnnUgd8xNSmma9sGG1exYEXJ1SwFeeBY6Y5npzjxEDibzEJjyyHhTgsD8C1B91wyRic3t2G",
  "key33": "2m6Mq2Ta36oKfPnxisMbwhZ52RMBUgTyF1KCQGP4iiw7mkKQ2Z2GKpavKybX6ut1HCv6uxDHE8n6tQg4vGenx3Na"
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
