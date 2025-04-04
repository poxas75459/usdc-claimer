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
    "4F9kG42Rw4bYEvQCTcmsjheyK7BrGBvKUCk2LxsBKP912d3KpBpTzmpsZtxC21R2fE9fP8Wj3jc3oaPQmoaaSKeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCYBHBbDnjVHXeazEC68eq4HxSbeBjs5YaYecvp7ox6aaUqBBBPxHUUKYmqHR8RD4TXucbum8q7qwHL9WjEKYQM",
  "key1": "FVxL4YxUwPA149aZKWrFp5fhaEzUNzALjqRykzKn6txm5fNvxQBprbLcanevJpDhqYTudYjVs1inHvgaMECJJdQ",
  "key2": "4W5yeVi4bMVHnvNfHPYT2pSMdoPE2jrzCcv7uUkUm5qx5v2x9tfT52YxYYbJ64yumdZigK6VoFJk7kfpr29ww9SP",
  "key3": "3Z4RimSziMvrUNS2GVDQdd1yc6X73grSyTdHiSVwgMnnoABCThFE1ptn9BdXKENVprQQR18VabHFeZ8np5cuS2mv",
  "key4": "4Tj7YWNA1B9aaPWfCNUntgs9KYKVdNEmQgtDyKdaZsGHfMdB4wRH5VPE7kHkFMAJ65Eq3B1KraWDmZ6N866njAfv",
  "key5": "48vEgvkteEoC2ye5gcYpEhGd5BtnYQaaiPu2jxh8EoRonRVtidzDQsBMJ8YJb7nxZ34JWrmS9rdVKmC2dZPLJF99",
  "key6": "2KGnBLjBopRdQNWbrCsLTxVUwMQX6TyytMizCcRdjFecc1ka9dhkeRZk3TxDQ71XUcXCMC3hmrRyJ5Rbmt7ufapV",
  "key7": "6baM9qWBqd5xDcH1xmWLC6CnQjf3svdnE9gRhrmabGq6YfDxL1pYEEY2SkwGxqTGFEU2SvzhmoZoUj3JswFccPy",
  "key8": "5CLDYUWfKv83jAaz46R6DtxXH3rx3YiNn6DFaosp6n3QqrjjufLsNP9VGF7wmJjneFEd8xFv5ECXrMf3kgrJFTZ1",
  "key9": "3T9ncYipuE6qFKeHbZRb7kpD56HCsk36ukhRi7iVMna2XeJcGZ451vnFg6vBDhL7jFuY5GDSegcuVzqzAvnij4WW",
  "key10": "52L1cCXENadtttGFC2fkvZy53V1r34pfGUEoj31iZyFCkmcpFBno6admT3UZf7CYu4EMGXjSmFiJQ4FMEbpryb7D",
  "key11": "5DZ26wzPLq2gVhFnxD5PDqWe65MiHGjH7eBE5P7ak21K5msG6g2CjS2KXR6CCUDP3RQLjNrYMC45YVGgXFBanRbq",
  "key12": "36wVapPuZpvd94d3uTGvpqfEKR6wTDCrkWtz61Nnrb4kspxHFTYCw976XxFtczGBtb1xwBzxYBQTq6SFbRbyRrwp",
  "key13": "5CLGb73AJCFNyeE9E7ivqbpzrDLsK7LtXNKv4hZzCHYL8KzQgnJHcPzurJWFevTuzMtx3BJiMkbicxX4e3au5Z7n",
  "key14": "4vgc6ptJuqDb1DUo7JyoAUmHyUaxJ8CCkN57nA6JvWF22Am5nGSioxg6zKuNvRhtswzZptqUZj6EWkZ7etYGVjWb",
  "key15": "3LpJ9sKPJdzszLC4uQniWpWJMWshHpNndWbCaJNZeYHe45atenwxqLKqfDssqjH9TpDbnbWwfyZif6dsrcgqLa7b",
  "key16": "3R2LbeuLcD9g7LCzGncvh54BVfKKiN8hRHNSqvrb8b44QnH81NC9RszhTxfnSebQUtPdH5TuYdysz3Z4pCq6JayA",
  "key17": "4n7WxFiAhhmWBBTJDiLJ22TorUGFtkh411ZuSjUcYA3sZCsswC2HpQJAjCqmWq2gy7pKCFq1335eb9qQm3ZWPLhN",
  "key18": "2FVkYuwP8gBrDGPU4PFqqWCm6umYxAouuk6gsA38kfYtyT26S4S1tQicGfGoZrBSVqoKxF1DkbGgWwufsnxPNFyj",
  "key19": "ZrJXRizzhqyt6KB7jTeYc3Pg7GjLwYzLf1nvvqXKGjf8sPrKEoeQfp9a92YBzYLiBxv9E1qSEsh4pVDYXDSJipr",
  "key20": "4vV3htFQzPRm4Ux6GdsvFGT26mW65ytNYGH9YAGGGi7Ak7UbFzF85GAYUhXFShSUjU8HTMLTUcbZBaDHZQNpWq2A",
  "key21": "dYgjfHKGhPpdWAKBUY5Lp3CMrTeR5MesZyyFjstp4byCMryQGHAEzypbZo8nYyYFo7v1CxEB7fsEngmCGT8cgP7",
  "key22": "4kRxkPTdigKEmXuPKBqZEjsfMwc8BoLqbetexACyHUCKNg5DHfV59WHcEAGKjbNPKoR9HB7pCakW5QJHkRRPtGib",
  "key23": "2G5DswGzYrdh5fy4MqtrddRWkjJ7jfoz6moeUBjgVEeJbSBiXn9UbvszXzvbP5dmF4ZR6wd98DbbTq77QNVdb3Ch",
  "key24": "4DZ9wdCLgB32VAn7TKC6rL9YKxHhGe79XDzJ53BoP7AkMYX4Uy99HQmfffsiAZXYVtaMyrVc4m8JUViLFjv8okHh",
  "key25": "o841znWT7Ry2mQ35yhyJzCYzseCXP7anzgTvRFxAMRYDnRtJrv3kBsiUkbVRj2DThikHtWjMkBY82bQbfEjXqYx",
  "key26": "279QSjBqV7nmEizQDY17HYzvjJQKLa3W71HEhRJfkjAdES8ZAf3S69pPndgV62Dr77bpYoZqRSgu4oUB5MezgAwt",
  "key27": "3GrGxERhpWz4w3oaapvhPyRTyyQeW9KVWjsb3U2P68BJJf38dBNEm3z2xienusSAGhX1TKEPFFVLyCCGZ3dTpo4",
  "key28": "2YKGQsuyWYu8ZGQy4X72dg5y5tXRMnfC4C6nxkREauXv4G2LQQr5vBmAip8vgwKJGjCj1UFwi3uJo9gSsKhQf4rR",
  "key29": "57fiA8mDpan2eF4RqAksBh3tE3VdpQdYKCa2khkvVRHXjiEQLRqFHBo8tqvTrz4h3pkGVtUQC3XDbRZ2HUhD95PK",
  "key30": "NfAdS2bWj79fPTtvTmiY5DPn1SAUVMxVqjSnxX3imEXJHS2pQrjcfCCVk1bkFUV3SM24KDrjUxTfinRQXxFq2ni",
  "key31": "2EybTJfKcmE6aB41Ym3sDXZesD4so6uVsExE3nWXiiXYZvpfx5S83VPDzvuMJPpnuQDdfazvdnviaJM6LxpcjkWa",
  "key32": "4EhrfapV2aMo38uSjV2ohTBqbF6a7DPSVpnndnXhkJigKuG58fnCXvJVzUV6NFnp7Dni5K3VWyYQjHBpQqGnq1Ab"
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
