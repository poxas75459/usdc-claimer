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
    "5ZtWwindm7JWLEWVdwZ77zBCgL8gt8ejU51tsvqMtmQk2ugaoAMrSex5XcLtgTddPD1pywr6KSnBqY4eZW9bQYNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Df6DngeFUGJMkhbSGHtTigCyw7Qyr4sWqQVLgc1XWBj138JZczHBAt57Rahqb5k1Q8YYzqZ1NaVimwkb6McNR3F",
  "key1": "4eZ2NB9sdGdSpVZcrXq7KLZ4b1Biuck68rnboLXaECLC6jA6GS8KTSUPQC42hK9w5o7BvNVogqxYcsHcNE4X9gHo",
  "key2": "97VkuJtxgmZGBCwQLnGxFQv8EsopbLJuZoW8VGoT51b86yCrFYjBj9qDi4U5pvF1BXYvDeMJcQt7XCcqgTfGwyb",
  "key3": "2YAGx87S8cYj5YetdyAWKy2uAcediA74XwiMA5TM8H7G7xHnzHgnbbtKTvPphXvrdD4rxUTV5QSsRggNxjJdSv97",
  "key4": "2dmADUXANRZUS5NR1Y2Wdq4zHd7UFaQEw3psF4oeQFDcVHLx28LC1LtAF4QiJcLU5a98rGUSjJuZRiLWNzDXNs5D",
  "key5": "3B3C3QZiDfB4z1wfvMtWuWwkE2XhuMYZeNXK6cAF9FXcfPxkoDqBHG2oJQF4x6MfKwAYADqXe6jRnbZnQPX1PbXW",
  "key6": "5Zw248LDG9dhJDoDuXQ8DfGrFWaWpZTgpWY8v1PEgvoLkrB32uLhQY1BB3447T8ig7jrKManorjC31dA4oXBjcpP",
  "key7": "2eHy2jBeqJUAijm2ikjTjtGomBTiSF3BY4GpQWa81YstUSZiHFsoNuPzH93cLWiL3eUPKhiVb1k7DtitXcyzeGvm",
  "key8": "2VJtP4Wnz7WNZeDuy2MKKNwLXxX7p7u7Wgp6HxpQJcfJb55MoGNE3xgjpUa6EeEQKG8TYjimus4wPXSDDUYgis8z",
  "key9": "2AefEnxFcNdLzNaTQkAR6BVWeZUJTefpcy2WRoEZ9KBUUtyKh97k3e82yysqhjfNqJB6rArb3tjr68n9QR3DgN5g",
  "key10": "4P39q2FUgYKjF1iF1wjMRdboGJxoanDjM6gHEQ3KYD5qBujY2Qydehsfqtexf93PrcguHCg6d5Zrjp6viDpVMU7H",
  "key11": "46xd5iLht4oKFryNzy4JBFyfoSfcMJ1f3GnjQJQjUD7v2cL6K4VSgXyVidG3cg1aNLLfuQaisUR6RfDxxxMTt2qZ",
  "key12": "5B1nY79ATy3Ai4ds5X2hEKvkHH8PUSo7dXE8HLGqgPXbYAdqErEYnqtH75LEhfZCnLLt9m5qmoA3QB6UAaiPn1LC",
  "key13": "5pjEfvuhzLbS6amoDMBsofZYAk7mBbQXEfn79yebgQ6EUkmbPfLTfwoDvvRDwrpyLx81mkWnLAg8XHkJ87V46omE",
  "key14": "B32kQuqsto63ndBu3q3ar4Zcs96rHyxyEieEHYJoQR9xWKt8ZEuSLXUmqLaBTDQh7owaBcGG5Ljhsx8UM57be8j",
  "key15": "4s58p3Es3sshZdN6b5xKgQ88QzQAQq4Myfemt9MbntfMhQKS1Nhu8g2VsYuvgpNMzKRJWUTx2NqPGnpxHGTsxqLq",
  "key16": "4Fz3Xkhq7CPFFzSA2oitZeSYyzRR8bZmB7tPqz5DRNoFw2XULBGGMkY1cS2qbW2Je7ju5pBaFc7ihb2uhJAgESer",
  "key17": "53j4f2uNt1wq1N3j5LDPJ9V8sRtEszzJEzu7wfRNhuDz6de5TMBm998tRXCeXk8S27ero7V9u7qYdXafjTLBWW4E",
  "key18": "4c7UxUjRLBKrmGA9yjD5fj4cdzhWwBaQnd2NjEeGhLBycFfwjGtTpnzTQFctPTzgkzKArvh6o9BTAVroGMo3yQEV",
  "key19": "2SRPtMWx8sZEwBJnp1HCr1je4pg9HgSaP4H9RfbtZVJzWPF5zqyPV5rzN73SNZ7nX3RAtgeZCuqZr9degjq18ijq",
  "key20": "67FpRZWfNwYa6x6KQnem2VCVoyhDKsU1yGC8sZvadgk5Jj8X5736M2Z5grhdiq1tnXVHHKYa5vtpMF5D6htyMvUd",
  "key21": "3FW1Nzq9GHu9Bm27ad6UYhwYK5GrwN88maiHzkysrDLwEkyGA78G7CoykKCPiZdmTTBXdu9xnHZESmp8sT61WuWm",
  "key22": "27kL57zPbfWJLjeFnoj38DfmYuwHb3HuHvMFHQkHWNyrUytXh8ukLM1L1mz3269fx8hFX12CJiGwNDu4qSLCHry4",
  "key23": "57ByAZwjfHLYXSjfrpcd6c2riPxucPuEzUTLWg8iMVHz53WE66xENMVTYmAfsgGfsM2VAHfZE9Vm9hHzCtoQWRXW",
  "key24": "3QUfTUxyGdL8o2NWD1uJz7ojpV7Gi4MwvBc74xT7gBAEotGro29k2qtMA5VsMVDHUgPkbzfPjDoD72NWbfV1P4Qv",
  "key25": "4vP3RDc5c42a3Pe7iNJ8M4mxxxA69PCCz9fL4mFKvDw1iosSo5Ga6XtvaLxMsTDSHiFZPiVYYyYYzAwcdsCNxQKB",
  "key26": "25s1ANGutREhcX3u8XmTpTc4V1DkkVzKsMwJpo8b269eNtDRz4q8uqHd9zWPgEaFyDD4bpFWMuQzgE6WZbaF9mrZ",
  "key27": "bXgAQmSLRABfbxLEQeTRLtS5nVa1FD8phyj51oVFoKYXf9HWRU2pCR4nnRySeztL3B98mhYRbUXP4z7sWmbRYnL",
  "key28": "5PAbG6rLCbCdCZrpi4FJN8hhTBuLUtEowWGPREF1b3BHiuo6yxwvsFStUTABVjuCV7gdmTJi4jGKA5dTXCnLysxh",
  "key29": "389q9q51xc1xudSirMA6CMayfpcXeVmVrLoxcisrfL5vukMsGee8n4afaKLUHGqxVnmcqC5G85b95prXCfmyPG9i",
  "key30": "18xKBB2ZPB9MtWowKKHUNaYyeP4q6JU6t6HJosbkbnb56vQTZdNJn3jybt8YMaM3Zt92vHbDNzs9dK4aJ5TVSg3",
  "key31": "5iiWmhG57FP7wRBZk5usqKgLoJSyN4QkYyF4bWVGxB32mWZ1XcLjPH24tdH1TfDtaZSSQ5RvPbaQQMDck9WGzDQx",
  "key32": "4yRGRxBY9yV5gPqDXpG5MXVoNhyFJ44ffowmzDMYa2r4GqcHFYS5AytSQmtfz4rFPtxJ1x7ZsgaDj9xABW4a1xFD",
  "key33": "5o9JM1TRsGPNZW9dbA3wghuQxdsJzN2uX8aBV7LwSAVcEhffcy8dhpcrB6iJhk5NAGg37GLXpLJtMVuZAHPjDKVC",
  "key34": "2xFZVmYgLGSfFQnDkxvToVz8cTLTCTe91SusU7V8B2qnJYNLBBVR95fW3vWhDezinpWFYwvNeiM6hV7k4XQfVLSF",
  "key35": "uvRhftMM4H9yk4zJ9pZmmGbp9iL81vAZRQ3xG6BywGfL7vGkfqk3jT8BNey5Wo5J3mwrfhuysYsAXpAszJJ3M6R",
  "key36": "4F2brvDe8EuK4qynEz81RiMQNrnnoJ7A4VG3AFZg5nyYvw7mhAMcG8D1s6nYsb7hoWebLEbwumtiCoKZqAEwEkpZ",
  "key37": "5wb73K9dcNLQduyAtGSrB6eYdTQe6rnjjRdb5ywGa1KnYXa3X9bBMCxBLZB73xRW5gxQFFahrn8equ8tuYB3jjK4",
  "key38": "57YQz52mWgJatM7ZnbriTKEpujUHpVe7BzcDGTukNoovrwND2ZGRAaZftoZNWSv4giEfG36njgHWkPPsftRhCS1i",
  "key39": "DEG6QyT86etJgu845B8nsxyajsRqrNupL7zMwsTBL5manpdmVhv4xRt7PV5FJBX9vgHDqwDgVsMrgvtVnnSgkec",
  "key40": "3so7cSfMm7RmfxWLoW65tW2mAeisLmAKYbAU9HjNd6ULLEgy7cKtaMadcG9gA8uxp6uYGUijanoK5pXaMXZVx2oh",
  "key41": "x93XeSmhiNjiFua2rZ5xiUqt9CRv41Ep7ap854H67SwoG7v1tLAugEv3cxHWmZVovBr9ZuvpkvSY7S2hqodp7jS",
  "key42": "5Armq9sLXDazttVxLq9YeVhP3WbReq78mpXZF6mqmxPNzgJnp2TyezKBYkBd699w7W4LdLy5D936k3Vpn6JgqSRU",
  "key43": "59zjLy65pMPeBsdMtcm2RDECLAS1EmgK4n1rNNaA9GotHfxuq3rjtcXPQ6AbcT622SxUqRHkeojneodhzzn4RVRZ"
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
