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
    "3oxrSZ93bDNskJQ7oyJSwSV516KvPbNQy6gaavPDqeEWVwXUfPq7NqJGpLXveBuxggYicAwdxtTUtLHaFoZovZH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xPvEBPGKz1UTEvNGTNrrTkD18gWStBujDFmxr5zCpSQFaBQe6zxdA97SA7mTg2DvGke4z16T9oFpsNa9hXzeL9P",
  "key1": "4FnNJzsL31FrjAC5r9Cvy8PkoozYVdZGsDKM8p8Lkb8HwDZ29VXro2Esve31K1PQvUQ9wkh9bDjL65vQrt11aZ1c",
  "key2": "5fX1NvWfABfB8jo7QpNzMC2uZaEFJovUa4dSAMmLKvdxpadJ7KVFchKhFnaKBd6cahFHDy7dSzkugeMiki5gtiWo",
  "key3": "5j8YLjfbJNKjoAvYzCxC5KNiLhJZP8wFd3FMQyGpEszmbyGx2kesezjPAt4x9UWNFgBJaQpn4YB6RRYCKuPRkQer",
  "key4": "3zZqb3S86DLq7dwfFeV7LyYrZbWZUY7n1hxqzxbfhxm4FsXdu1f5kb4VRKYxAnUb45Mg5MwezSdkUVbabB5KA7UW",
  "key5": "2mpQe3fwqkFNrzqvWcnh9Rz32Ngn8SJsUJ56HvTfeYTyRWGGMMyJSNe6yFbjkRoSjGz7nZB6a4mxLEM5XyoWqTFf",
  "key6": "4Km8ptbXueuP88wTx7Zh9wfghmftfbewt8rhoJJXAg2a2zhGCX1TSttKLe8P3eBhnG57aQ7HQkmhiavBTMQ4j53B",
  "key7": "572wA4VSe6JnGreNDGoh1CoQngc4ezoM1LN7U8MHXHyFjprCyWXZpAfFeU1f22ipidDdXDeXCdEdCcLDWzSqFfnR",
  "key8": "w53AgRuGYk76srknpA8uNPDV5wzGSHNQV5u5HgfTLNdszGzBmAtwuLx7KHPt9cMTq2aozaSbGYmemyHTNvjtU9W",
  "key9": "6GV6Q6dfMZxtx5pun5GzNQTmL9n7DWDedHoDX44NMHm4xHT5hxY7dWx8GteU6tt58iXPRW8FjCEC16wd1jGa5hu",
  "key10": "43PkWoBQhWtoY3dx4zYy5cFRbsC1v15aP9oHQjiJK9FLsyCXiv1pfpniUqbtfcfnr9uWnWBCbBUSxwHCvCwxd72x",
  "key11": "Ju231nVk9iGNryX6ULpiHs6aV3tQBWwUCGTipaYxDmV6C5JuoVo8E5m82coYdYdwkX8ebYwZFFbWAZb3Ab9i5Qy",
  "key12": "5JE2NzZHm5WaUgMC9Xm5Mnsh2WVY5P3KhKR7Xa92M9MYHQXEA5YpWzN29K9bFdknNdfD5nFew6TELnh6Zgmiy6ei",
  "key13": "4f3a6hUUSX3bPecfLb9GccXpvVquRypwWndNBJe1Q9kvx7PfMB8zx8eTNn3Aa1KU8NaAuDVeRrpR5pF8sMk6Fh8z",
  "key14": "2BCMB2KgGsXpHtWTWhQvg9FormqV5QMoSfeFCp9iDXGRmhVmgBeE4QokFyWc3EXLje3NEMDE37tDZFP6vcCk6WUz",
  "key15": "4cK1VNBQ7rct1ScinxwsMcpFsxGzDSyDgDqDoX4btJkMXiuPuJVEBP8frGh3Q4cDxNkN2XJTxBk93hzCbM7oUQsF",
  "key16": "5mKxco2beSc5r5pUYxAK3bficiwV8rcUKAaVnSCsgdfBLBa6JPbYTMjKp9QwrBgK5LbdxhnS2b1KjprwU39AuwQr",
  "key17": "jyHtLKazXekZ9GE3FCSjFHTraWTukhTyEudFmTmqM3FmNUosK9pGm4dtyJyjU5WSTdVjHjfAhbzrP5VKprTTiC5",
  "key18": "5REzz4oJKZs7RGAd5TVFzPmeqzTtS1DHLx6bxNC7azZ1mMzbGKoJkj8ygjgFiX7TnvnsPq357Ep8fMYhfdVhMw2S",
  "key19": "4qWC2UWocp61wP2VzFYdXECVTty2jxh68jJJinhKqX3id34M4Tn38yBf3HzMuqeKhr9xsq89svRsnfXrpUQPruwL",
  "key20": "NohFqGYsPgF38mss3Wp22SYgYCTy5hXpLiS2pqNQbR5UWtbZA926XkfBPnwq4pR8on4paawPMgPujFBzTDGwWs5",
  "key21": "2hPBf2TdFs7PYF3whvohkh5mAUW1d5xr3Axa8rJ4qu8kxEui6MStpQWWrdSaaqWCF8jDQTdhVCjtUJuSqkKGhyJD",
  "key22": "yWX2eKYtVQmZzYUZa4RnF95YMuLM3yiZ2vn5vaEJ2QhpDUKsULjcjmXhXqdZHUz4hsgnyQo7GB8MFjmMXK5aVX2",
  "key23": "5pVWtDHsXZ6Qgw4GmiZrma2oxwuuEqsoe5AmqnQs2uER478P7XUbBDzJDJ38tceZsfZdd8cc14hEHxPch8QMDzEG",
  "key24": "3rGT9YDaRTdpjTMM238p7UnkwDA1qGDVHvZYR8jg6FWRGDTVC2DYfQvPbp9AVoebcRKwNFGouYgoBRjHkxWjdzxH",
  "key25": "3gfCcp7LHmQpDC817Qcx2iyzAnuLjhYTu7pkFdosQ5XqTWkGf6z9ryAS3o6dcygj4bB3mfcucP2Hf8ZJDTr6ZTSF",
  "key26": "5YjThYCcG1nABxFhpKaSQ5KbMYahfzFLphQ4NEdVe9kNTEaA3osmpbbLmBeLGx7mhbPprFS7hgrJnmfaAoHbGdUC",
  "key27": "AwXPAukuXaK8xFoKcuuB6YGey5fUNWa4uXekp8KBsK519RVy1JW5FyN126JXuQwp7rYXcKJzgV2s9bncFVx5i9m",
  "key28": "4gRY9Ln5YSfxftcMC9RiCU2wY68YNULXSdzbe1UrYrukpefwv4f83nkULjm43CczgKosHAJVjK8LVoi3TucHgww8",
  "key29": "4kZoiWFsLUc8NaG7ydwE3Ksj8ADgpNSWyvBN2YQLg29cy8uaP1VEP4ZPxjHRAkKQf8fVhJ14qvmtswoXArcE7yyo",
  "key30": "2habPfSb3EabLfCpwX7fgu2MRDQ7hkDz5YdKJWEfYxEbjKohG9Wyq5pwPybFG1SV5dZ2AzqoZSL6NQhxwZa7Kto",
  "key31": "5zC6imv6ADGG7DUsMMYvRdjhbvLMnz5zW2pa1HLmk2eoCa1yChtgVCRB6AR5cUNt1enGtZYL3CKdXeivpkGKCz2G",
  "key32": "2rXy6PBnPfMoxPVDdXEeoNQDXNWRpHQfnT9CTxYjAoFNybCc5LNN728gxbCHAnuq3VtXW6FQm8ZZEPyVJyFsk5B2",
  "key33": "2qfxzbF1V4wtdrdHw3MgmPQFiC2Q6RLGnqDPpJ3Hb6meiRLxpedVV1SCxsSHG1hqh2Zq9WRLxohP4XT63Pwyxw66",
  "key34": "3LmqnnvVK5FgzPCUU2tUeFuhSaviwrob3MV1kHJgH37JMudkA2axWrWo5vMYa3F55gao44Xb3rX8vuCEeJLK3dZi"
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
