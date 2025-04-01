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
    "53Zu9CEFy2fTGCMqXMCRT84ACv1nCZ8d58ciyFYCgQ3mJU2Pi71dWmY58F4HeJ6JfrjpJvHK1ezX9steoxrRaKJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNdcTrZXEgpiL57NnbFr5NeyEiBWQ5oyDG815quP7JdPtJqAKex1kNc5pZsFytkd2WZ85HhJub17PLi1xEYX6h",
  "key1": "nyjRbcfcWtz7wkwrPTBfWtNfCcoujxYmCELmT8hA1JuENHjdda7BgQ9KTUvLokaskt1VyA8RwSBAukbLRKNfpth",
  "key2": "5cdhGgrjVkUQFJdhFmsA8kKModA2dpntmpP6st3dknbJqaw2kXjNjtP8dc6ogTo3wwLAviLzMteWQQeGXSp5GRfJ",
  "key3": "e4aXMMoQRoXSYHZhpcKuaWehtGXQJWnwVxPzErnLus1PL7rLhow1L9Q4CDmhNhJHL4WeGTYpwwARR8sc9yCz7rz",
  "key4": "27whAoeA7w2TRkUmKgmhifq9Y3BnWnHipBR4aArV6G6vDqXwbCTrQd9eE9dT1X78ckrchrJSiQ8xV3W4mXvLcuwi",
  "key5": "MRg4R32REUi5thdZh5ufqwwE37cqoYwLNXjz7YEu1Ziw1D9ThvJzCfQZt9G6sFBcgPpHAyhkYLXi584z9jXaUce",
  "key6": "3BgE4wddxGndqd11DYEJjf4qbdbKJv6kwNrY6SkwzhPEbRRCxJ939CwHmSG6HnorGyQd76mgMugstFR89bLRrEQP",
  "key7": "36Kx5dXZRBkmjbxdaPHT8eTvt1sDXoe6xxhRiW5Sk1P7sZ1b87RXtaPttfKWafqFSWSkNnsKgsJgA3L5EajXLAjN",
  "key8": "3mj2SiynbguhoPVAcZKCWe6FsZcwJyuvWTHaQA4bKP3FKVM13NDU5K3YQsk7RRhyVGTciaMoDov4YVkWQSvAGnkm",
  "key9": "7FRQJcb154qBWx1Hk73pWRfmbeHXjny89FyCzZyMh3uHPDkDXm9fBesnEb79qDQw7W6TRmDm3iiPBaTMCXo4mUT",
  "key10": "GJ8WcNiJh6YLprPdV8XFa4PfyJHWLF2dtGNUqAo8qD8W6YHNGkaayNAoGyhuYXRWbVK8Z6JNZMpuipZqf8u1Yeh",
  "key11": "4rarEV7fhX3MMjfY7ZbmAJDmW4B9JND9pQSu18pVvce6Do5B93vxB6xQgQsjYruyMzP4GYLdhbRmKT3LWeD2TPF1",
  "key12": "38QKRvcnHaKfUaqnvZ5bZ1oy4fFHno8a5EE7PFyjP39Rymsbi39DwYiYSZjLMDD6czULvtVqQTTW6H8DbEEUUj34",
  "key13": "56opkSw4X8ddGGzZgghPouDFHpp98fayhJ88Gxud6wLLrDMjds46gyXfuTiyr4ZDyBv1hNSFyTSUDg9NhnJRMvRd",
  "key14": "2czGqm9hz3T7mUuVqk3fyaBwC2kiZbwp7SSbhDMzmQ4uizzSeU1YHS3EbVyLiZ1AuW8DJE14TsX7sRmH6TtrMJvX",
  "key15": "5osKHwNC4ycnxgkgvtac8ya4DWRd5zG6m8Rw7HQLPvyMGKt5H2Q6AcPYNAUt9cjoT4P1QE2pk1YojYhVZxASrSZf",
  "key16": "5SHgjHcy8mqVkQMP7fywyLj47uUoSiKaMBZVoci74kCidyjx4dERC4dXYJsGw9gigcyUuKgirBJci9qF7M3fDYtj",
  "key17": "3QCw3dLfzvcc19KRRgbzf9Mogi4WaYYvR7x8NhUHhSMdiVZpmNFwp78KMN3d1nP2cxvqFTxhmBzhnbuQG758XCBQ",
  "key18": "JxgoyWMj3bNgpUNpJAVcRGwdTe7XQr6xLwaRTt5mMSdVnnm2QzQ9yTcYVYuh2Gm3PWSpV5mdZTFrs63SyFg5bVD",
  "key19": "4bB922Wdggj9Xkes6Zp6g3CTvXTxVBH3ZnDMARGpWxZWVnr6xKQ8q8JPYtapaarho4FjroxYSwFMafthkti8m9HY",
  "key20": "5khuYiAzBjSwfiaATw8JXnZKEha23xeqKb4Wzkn9qh5Bw4sveZ6MvhuuP17YpSximAESonmQeNLQo4SFHxhNcMqr",
  "key21": "4fZCwG9PY1YnumefofFEYaUTjwU695rA57MFZihLWB5zCYzYQRYLzF5515wpEKrWZsjFjYweejgEW3fWmFXznKAv",
  "key22": "kh9H7qhj1ksNxh7tYq4XuWvqbZJvBYbofgE7LgPbuUgr3bpRHB2SEpDECjaJGb7hDvcojnrFTKeDr7ytbPaaK2i",
  "key23": "aRNyVYyaejHx7suPaxuPNxwuWoM9HyJ41FZnHsRydrX2dPcVSYSDVxV8VzmJ8n8byqXXw8xDoKdWmJBG2qE1HVi",
  "key24": "2q8KbqCdRj8besFtuoKca5EuKrNdo4KT5aD9H5smZ8MS5BkCiBPtfAb9pgf4vS2odxi9CSdk7kcLv9u86o1U4spk",
  "key25": "2E4n5AR7Jug4PXoCAuk2kiZmRA6TuW5hK64spViKLxGr1t3DnhGTkYrRe1msgSBfb9CtaNheAeJDLRBMif84KbUz",
  "key26": "34QqrpxBomnzSzaHh3DLMcBgFF1zbXP3HGt1MhiJqE2hjREUsFtadVPnqxyo2vSZWrw4qp7rCoSSY9e6uy16JTmy",
  "key27": "3FMkf7XfAd4w4Ei1fddH6JcVPkLSnmUcxKMEHLKL5u5ABUyXry3aceSsukpQ4fPSpqLGePUxvfTGQCvSnS4EZJvi",
  "key28": "3G8E7SfUV27g19WmE5UE6runnKDuA7sKCFa2cDrn3sA3XYFyNFkHkGAPKHFY5Vr5fJJnhVcKCACxpkLEJPNdi8CM",
  "key29": "49UCQevRFFtADNAw1QdprW5cquhWwfjG6aTMJ9hExtoJNmxBpBbrUhyo3vqVUh15cMFtyvNVgEzB7sYZ9UMJCNbe",
  "key30": "2e15WprSjSQNJBwyBSUYeoRnzVySb95Xc8qv6gJv7CY3WfjuDtEQiafCZUGxHBK1WQtmkB1PHEqfNnMRPa179tmQ"
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
