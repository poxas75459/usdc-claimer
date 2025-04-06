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
    "4KbKcbWuyToXZXk8xqZHuqF5r3VphrA821eLa3turAVgG2i4fg3GMzz654jataAvVM7pHzmBDEPsEY6ztjszRWjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SBggshQzPyMp4t8aD9SnKzgXKA1m4c7H6whwvdEfXXNQNeBskjX8rhy7McJPo5Jajoekgj5W3LDabLS8X8WntNP",
  "key1": "3QT3215cqz8MMWptGYhVzgVLrUtTxcxitu7jnrWXiHdW7FHom141F8UH8Nm8nVvPrEavijZcEad7zo6K929Z66J3",
  "key2": "61EWp9PbHXfzyXnVbvpCpjhkFqT7HNfMCmJJASG935miy7Xj1u1KxkbE9DPk753yhnSqNnnuPAU74VjsyvW3ZTTJ",
  "key3": "3RyNgBvAvczMVcgBxo5NHbKrNWsxZrLFtWJ3ywwggpvW9ytXNcEVnpF8xCatkAQU9Vnmz2fRcwgs2SwawoMcm8Ny",
  "key4": "3FQe17pv6snsTzNejQ5HxuopxEeyH9JrmkZvfLV3YpM8zBhQ2jiVYTmUcDPNGcPmbJZXqk4ZPbHTWzu6r4hXx7Be",
  "key5": "3QJ1owkjk75y8gWrtZrb1vVSyP9YctKVed2N72GXVjXovxQfpHW3KtC6YTRFee4k1TwPC2fN7phWAfcdhfHLMVvd",
  "key6": "4qYh5evVgJd1XzGKHVK52XyBFEtTV5x8x15g91ruEzqDTCxPb3C8qdUfofRzZmFj1TeKgy8kbeib5JgJeGCqvKxT",
  "key7": "3S3Gh1nsXyHfKi2EwmkUeH2RZ7tkmBpzpmpA6Xx3fymTMx4GPpc76p7CH853pCd6qjZVGPmBRtAsuJFNX9XpuQu2",
  "key8": "4RxFTKt9sCcDm2LLZKAEHE1NqQJj1tdVSmNBYwAAepNpnG6zLtWdoNFKPHTcDruzfDCoQJTATE5AP9MFxRbJCg7r",
  "key9": "6dwSXM7ywpuMnwKYijaqU6BBLfG3EUzCfq5TaCRfuzYATgqSFu5BtCkDqKeaKsim519Qtp1dLPhxFHDD1Fyq15E",
  "key10": "i28JW11n4fBmaxmEggvCjWQewhHUGSF4scBB1B95Lr8tbvLmWLNPqC2TiRNSe7hHeNqSnhUtiVVk6CE2wv8p4rW",
  "key11": "5AyqV4STs42kLjHYneTgkUQc1iSyEM5VCatV3B2Gc9gr79HftBKMJvRnHSAFvDbZnj7Cn5v7j47FHaepoQJYoE1r",
  "key12": "5LbcJRaJ5KsvGLDpYcPNLR8Jgqx7p5gAU4Rd8fPdjsfJDvepCHYmZmpeehH8zmbuSfvvUn1JotEiwZt7mJCN4aPk",
  "key13": "5jLzJz4Y3Pps66bGPrZ3EGKCtKBGXo868nQSRFCrYc5dUjqgrXpKCwPsAkUooU6TVco7BzpEre3hsJnbreSk9wpc",
  "key14": "2hsyp5Fxnm2aoN3r5AqLSVpq961qgvFc9uiJtgqsHaj8gVDBFmKbBRGTwZHwcr34UFxj5XAWRGwKpuAxYR5ev3Mn",
  "key15": "5VaoP5PCoYbTNz3GtBNFq6Ln4abY9nDyPCgV28bLA2EaFRs2TKuK7ExB4XkdUDPCfK949pokeEPw39vQA1ZsQAk4",
  "key16": "3QR1YrPj1Si5Xi7AuYEHfHdzegofyeEbUqR5DMDnf7Wt1amdKWc28RTvTb7bNmqcv57eYskwKnCfGZBEZH68CzGJ",
  "key17": "4F6CDav9uVPLnpPUc8oPWCxLb164ssTVHjoYpDSf9p2bTjZr1YYJsjFWE12erh9HPLdDVjRvQci8g1W2HZRNVVgr",
  "key18": "5tH1NC7PjVGEq2n71tf6TkpMZAY4QBVyfegCui8f91eUiy7RGyyCeosuJ2sfFpYmty7ALmHfV78Ln7UPYiLGNhSj",
  "key19": "3PMBUv69AL7TQvieUYN6fTq3wFVW1N51a5ENrHSLvnishENrfqi7jZzcZ7eFT1hBDdq1oqRMMTKq9nSR3J6vD2Se",
  "key20": "4dHVQ8eXGcCA4YfE7Xv7MU2sQd1oXnUqE5JP7zXdwwu3vDAkb95k1n6jWRwnt2zEnvFSCi21JtZFypuXwrarKFkL",
  "key21": "4VkPzLqWLwHUwU4TH398uEKZ7SM8WB2umPygktKYEBm5HcTosW6cWGY8oH5ThJU2T53hszTWZGuxr8ZudCKTzvNi",
  "key22": "42sD8gR2pSvBcJxZkmehybs2EjdNnSK9BDYWVKzmX5GZLs2xwHtKWW8Z1bKxtNvbLNfAUQLQ2PVj2sapH9ptJTAR",
  "key23": "42uiaEwkKDMqE364NYpfUN5AzxKKTT1n6CKWzrZ4a7v4GnTv72HwXf1KjHDtkTYTjvqsAnAjaiZbpno6JuNXNnWo",
  "key24": "3h9XuYJvxeMokBernvch6nqDSei6gQepzugpU2G8D3A7XU7QHVbGgjeGvRoMqGu3gz511AjPyHqcU5Ffbzo75qra",
  "key25": "4hF7gxYbSUVD3qwHhd7JsRBoLryAUjE9xkV6k9MZtrUgiFvvEydNozeUbpnEdcRsyryBpw58SexogjahKzXfTpzm",
  "key26": "2YC7NrRmmeSArHLHwxWrJJivcmRcT49YEWAwhMMyNUDBffgMc88ibH3SLGxXFS5YWetofkoKQDBQd6Xd5bdLYsyJ",
  "key27": "4TYgEkBeyryEuEu4YEPkprNtGugwnoPbikLHoiEUnEpxY59DUraRxq6tEpf7MbXTmUskZuZvJRmUQuXCQMeBnBA4",
  "key28": "4gK8U4uxPD7SawuwqbdowvSokWJTfmEMsJ35g757VLu1dtNrsdhRMMo3P8WWPrwF49yQmdYaLgqY8paoKdD3kuWE",
  "key29": "5i6sBPPP3N7UUgzvexeS5e585MzkMRh3rbRD3EsYQVQrunM91UmsjuMEgcnjxwVCT8YmZTTpPrEghWMFYc3xSk6A",
  "key30": "42AAhFUNpMdFUBGrtQ8M1yonNginrQQoABafBMLwQZrDgFLvJadwknRJioBsG9M4KMmzrJWSpPkxHBGJx3z4bZvV",
  "key31": "2tEHFGmcFM9cSx9p859fj2Js5UXezJhn1h3RhznZBXc6MFbSC8vUDnJQFfKn1ZLurbS2UM7VzGGBRcdVc9CKwXUj",
  "key32": "5gf4UF68F6nJcQT1okWdE4NVm4iz2Z49j7BF7QThUbT5o2FTM8p84ZGPuckULQcJhXUNoH65eqCVYh22ycYyeS1w",
  "key33": "6ryzkdyQtuSc5kq1qW52gmQqgsU9GXSCGqXaJeu2TMjNYaDZpmDfnVspKo9YF1WEpzfNpqCLrWLJe8shPJpfeMU",
  "key34": "5qQ9LubMdqmhA11smQ8gNaL5dL5ues8avuy7PDpM2JJgyvwpaaTtyoDBkZci6UyGGtEH3vaLD2kNH6YgMfcAFTCZ",
  "key35": "pKqQh4WBsjx6CkqtHGUTGskdjBqRL5aQEKD65ESTJv9sjRWJ12D64jsDuLBahJZR1etK25nTewAwvF3YEhQcpaa",
  "key36": "2fSh7UUpwUfcXKXa8Ks2jd26ayGXkzJJN514B5ivC5p3wr4hKLeU4CNcPyweqDFu7ALhkHWd97186rwrdVkW8Skc",
  "key37": "VrmCaTqtadwibJQdgv1torUDXwUaAofqJD4xdtLFNtK4kJTFUMUFF9FK5HpaWTrvNurBWfe68YkEXw5aE1BZrd9",
  "key38": "3fqnt5mBzh8Q451sZjYYCp8Dabd6ARRQJrAUYCFdVmrHovcHcKJgtRXQvC1UbSw4TVWju6PzzPodw4xBoCtWhE3Z",
  "key39": "3sWHpLT4FibUYrAZfq3FZx9PRVDKhjixiJqxPC9GAc2j7DjmdF17woWmbzMtDYLQsjQtveM8qMTd9eqr28fSKkWz",
  "key40": "5wsXFprFiDG2GaDEySyHtxbyNDFNhdQ12RyRGiiBJmjkaMiqF36k3pPQrq6SDgcHE4fd4d3GgDVioMYFPTG5Fhvd",
  "key41": "4w8VaoR4K8SSufrYpbeVausJ1tCUPuMPcwZBaTzwDLig6dzNBTo1g1Aid4ALGepGFf7DBq1xbfZi4mPVfGHKeVgj",
  "key42": "exwqA4Tw84CMqnvTvu3ZwpQMEw5LXCGUSSHenFe8KU4Yehf98sPRwkMVcaUWmUZvXHjPfSrvUeNy4NQsVhxmcQq",
  "key43": "5qvdYbvNAhc3mR8uQToPqpCfCboqFGjodKAwsSnRYTrsuS7sX1punbkwZeRrQmeB7WCCueENioJnGG79pkkzA9Dw",
  "key44": "6448GJkTx9sYtD8nW56mmQG34LX6ueKhdacxHpRH8d7rKZqV12aJnwu16wYd8K8HragNn1f4RbfyxQY8ENor2nac",
  "key45": "6HPfyUWHWKFfnfEEkpZrjzZYPCMpRY8NNU5136oqYecgi7h44FKxA31STZbw7orLcnu4mnPrcpsTADaJP7tUGEy"
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
