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
    "52mUoFy5qWhAYTViaN7w9eqhc9ntE9aCaSgviFn1NdsbGMF4vqvKU7DKtS6nPNJifkodPEzyG79Be3WsCYeHzxDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qG6kzcUTEn2UF7Admp5VrqT7QhdzBHeTsSTVgtced8AJQit5seT8uSnowZMyUYPB9dpPSEQ9gtZFZR7yw66pAZb",
  "key1": "e3KnLLtZ4yXB49bp58KqsmjHbYkRuABgNHrMuDeRjTZyY5XSmzNmVTjYT9vrGkcNWrrc6fTNpzHgbe25G9frGiB",
  "key2": "2ZiHgceheJX4Yddi4pJJrDxFgtFuSFeQFWGkibNZ5mHX2EoVTJv7bYnUQRj21MuX9SeZbghBpjf7zeEv8GyqiSVa",
  "key3": "3pz3mUf78Hb5X4HN7WqboFhts9ThHypkRrhKURSsHW1J7nbQJcfYYcJXcPh3NJxtZ376v3ouQVVA9oFEMoFkzZY8",
  "key4": "47S8h5bDpMFprXTYpyZ4f29YHYJtYeWuS7vtHHxbwrQovTt4vesc8mftXQmTWrCAhQxTczZKc3hC39aTd8nM94JL",
  "key5": "ijVzpYokPk5hCBccucmEWfNGEm7kRiyaVnh3h8rnLyoo1SFwaUJexhSPxv2cFevavWerE8XQtVv7uqC67GRBVfa",
  "key6": "2kpBrFNaYb8EWrGNnemqBmsNZLY2qLq1cDe9RXX6GXcjguKmRYdgzmmnoy215sityVUqbweH6UXRxGxWy9xWj9PF",
  "key7": "59eZYhUDTE8j1176YPo5TsHb4fczqdkSFuvfHBhz8pkXpBQo1fBR8r9EspNuTh7vtegz995NVdU7VXaosGmYqac5",
  "key8": "3Utc52B7YCkMNSn57BHQZmoQvyMR2YXBeJzR7HkXQJqKBSgz6ZSyKZDoVGo5Gjz7gqMdNVgu5Jzokea8qbQhyXrZ",
  "key9": "5WPA2JTaMcSaxhnc3XDqUcj868DFiezQ3uQ4bnCVxEDirBgxEg7fsP9Ka4G2No3JsWdt4HpzoEaHVstYM6j9Sed7",
  "key10": "472wnDkzFDnmw7uZNjSWvvVZW1QDS4aDQ9hGWHgVgxZrZaVMVY1U8HyXUwLqAGqwB8xNBAEs5vBWVzt7p1EnmK7C",
  "key11": "32KLLLRa1HJ2kBsDUzazx13YxdWyjqiCGhYy1QhSokzDW7y7fsEyuQ9q4FLGPkuvMX811LN5tBMhCNjjD5pfJD7V",
  "key12": "3go3gcA8WqwZViS3icTAFvgiAky5MPdcjWXDycsYuwfJwbSgaXKUUZVfdEruRRmBXFPGdqrxr2vxixuj7n3NG4Ek",
  "key13": "3CJSCbCG5FMjGhSJidGfnEhE4pfvqNvJve3ToBTpCjwtTvm1c8JPkAPNn7NuSoG3zFqimgEMMpajKFGfH7K2Hkwe",
  "key14": "5YDqHJagiqBtosDWTXyY5BP1m98yHEXc3aGc6TUMAYHx9G3rRpj3VDAhNejP7aSTo4hzmdAyD6RxdZriZrVMRGDN",
  "key15": "37F4MhTP6MAY1SRJMQ1AvZPDRfqC6SUWfE6cp4CV853uGxiyFEKL5KdJQbxUpnAKhgCJKEswcKbY7BkYvjJHuVw",
  "key16": "4JbBeZ1zNr1uZ4QCCyCEntU5d2FfmvtSopkpYz4DqcuiKuCXMT3qtVTmbe55YwkMkQSv1C6UnopwhYBRgvGReWJ2",
  "key17": "57vzGZjw9s8hT3Hm7djM87tJjzwiGF7st5WVGJq8stp46UDUnVUYEsnDcs2peQ4bMrzRkGpHh3P6nwdqHQrfHkyL",
  "key18": "6tVGyioc4fVvSiKMoDhhPogXR3h1n7XbBcMu4u6cy4SgNpbuDDZF2jvE6r6FgBX8Mv9hizffTx49uxsHCi33yh8",
  "key19": "2d4f14GwJ3FCXvJMSfdCXGUirqYdchFXj2NLD5biwcFNCkXamXwQAjrXEuKQ4HwiyEmKHdJ7DNjXiEXhb6srNeGG",
  "key20": "5uisV4RYdARxQokA1fT7WsyCavRfBSMrcqBpQmyT7khZtPbF95SCPcy61UxscNkpPa1RtGXcNESrUis77o29DQbN",
  "key21": "2qdQouS8YFQs5gWgzG3ewJHqrKS2tDUDtYX3sHCnpzcuYRegPUFgJLMEt7qnnQg38okh3VDtYN7tnif8AKF6e7kF",
  "key22": "4dnAJEeekNhCmVR2gZmoQbbbmfV2zJMqvQJrFLr5qpTBKvURZHzfTKukZGuS6DoKAWXafDyLCc8dDY2jy5DDrr43",
  "key23": "VoFwDWEa4EXVu1t45wj14pAjx6BeiHytksadFE8tYgqgCZ18uMNGr4aoa5VVRPArjainUnmpxrkqae8apUrrrvz",
  "key24": "4wNJvfiNUkJJQznfBWS56JiXX4FWCMtTkUyDhWdXF3fn6syxTPSYr1ZBdnmFjzV1wvypq22C1HUnZBdEHK22w1EE",
  "key25": "3HCyYNYF71PRVGvJ67aVZJwzbswTAfmxGR7xrzT7kEm9qbEkrYKPCJ5juCbBYCTgfQZ95mZyoPorDjfmEkyjLZ41",
  "key26": "66VuUKaYwZQ6W835vSKZBnwoTLf1HXZTcpFVo3Mtc42jMGjZQYjLmta2vfNk5zkkj8w24ZaEQYpsU67DeMJfeiQm",
  "key27": "8JJB2Zg3yaHKzUvbDfViNg7gWBDqpE7GbnBBJKe2ew3ZMtsVwy2CqAUYJLbk2AzFrEhAVDzZxUuXmbG1G69pNM6",
  "key28": "2oiCAwdPzJZPXNYchJQDAmkUukk9oRcPD6LGyfRVwkrdPBJU3RvmVWLtkA6cKPBwxJ4HyBNsSbFbeia3Vr7pL3v2",
  "key29": "438EVDWHNRJv9HzaZjjFEKymfzux3SWEGj9xHrfTmEXr7HRXYSQTBMsEGZc1jpJRfcuhe1NhVAjiB82JrMkDHHtM",
  "key30": "kTYYgvVNVq1bvKEEr8Y3qfii7zxoUfnNAhdGwJmd47BExHi9qkUw4Ce6Nn64zC7Mr7mvQZSD7NE3FyNrJqgZCMH",
  "key31": "3BLs6CM2hzsj4BNnQTmmEe6p1bBB5VaDrNG9o8Fb4wb6Lh5KvkHLQLqZDad9xzfMsKMJkLnkF24yUvPqTeM254wk",
  "key32": "2BWCt8gDW4Kh3VNf45rKgnNLZqficA7AB5xiGZ662SAvxW3DdJVSeMgziLdqbRMmHZVJvH2V4z2MPDP74EnUZToY",
  "key33": "wuhVVYYRtA8qmWYuCQcbSM5ddkCZLgtXw263XcivDmN5e7qMu8NaHvtPLpAKBbfRys1F6qVzo3onJiqA4u9Vd1u",
  "key34": "63YhxC1bBerAmDAVnRzh8wQq4guTsnXSMiGrcKKNfC5XkszM2go6RQkJfZvdqWMYfv4jjuhp3PZaSY3nj6NdcsCL",
  "key35": "5RwLSY8PLDmpAvPoCvTrmYWA8VBp5uiQEssGUe3bS2DdYEAVP4EK2VEQXDcJQ9tQgcSkCAQbBUfyonAABiMSjRV5",
  "key36": "61B9ngzyzNEyeD1xGhELALeh2w5MD9vHLEDnL88zQSnYEZ46Nr7YkExQP3teyad7CFFoQwi79nEzmXgF7nzFwGni"
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
