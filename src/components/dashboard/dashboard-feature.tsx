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
    "HxYgyTx4jdL3PBRVuL7EK6BzZxgXGURAnkpG1jSxnahmpCAE9FoD3jroJea9oz2Vd6NPUuHRFYRDQBhGqwvXN3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kUpGgcwWKnfPycEKRtVm3Nv5c3QV8a1yDomwdhsWhrQGixHmHFxJa59dmA2xKh9v8TrAuQxWJcqxnRszzc57QSQ",
  "key1": "4NBTtE71kVp9M2X4xFNkLsnjqsVpmxD5EqAMLSReePV2GNf9ExuEcXknM71rxxmbxY7A2YFNSUafsYEBNXS5kuug",
  "key2": "4z7RWFs9mYty41TMzdycSBc7cGUEr5xmMnmyfLv7Y5hr4nAiW62FUmVGk8QFMRL9t76PPUT285vxZMM86Q3LApyW",
  "key3": "3tix72hFgj7fS4TEddHJiQ8kZuxtzYozgak4ScnNAP7zPzkgdHqJwLWTm5osbKEVBvW6bKR77shRzeofQG5zjVRQ",
  "key4": "3Qwh3VXf3RwNbbws55PWEjQCzk6ip8huaxuWawVduZugzMXgWUwRsNaxQnP6hNj36SKPd7cjCoKGPvp24D6XMbZc",
  "key5": "52rueyzAufb38CoKRrtHSijKXErtMbnqJRkqQY4HmHoR2WwXP8RYWCEmopknd87MTfiaevaEB6TXXS6mhEaN3EJ9",
  "key6": "52eh8sRWXPh8wu3TVGFnfNWvG8URECw5bCCtwVAabgSa9AXEF8zuJgJAjCA9hVKKPs8j2MCmdB5n1rCUykfsJpEg",
  "key7": "3r12FEgpbk3j43B8xg4koqmomnupepVDTY77fjbRb3ADjzCHt4oaTKT8pRgsiZBhN1YLCo3gRv4vaugZLVkHPRip",
  "key8": "wKpK2Z7Wuaop3Jj2DaKCtBPechgMBGLk71XP9UdfUNVqUd9nrnxz8tH2vcT2aZfhefj8VMPSgz41942g7iDwoPY",
  "key9": "2Lf6RKenvZ5VzJvoX2CQ56orEGC1Gu2wRh4r2VEyLRQNVTSYBvQFL7xLn75sAu6w2E4UtQKpSn97Yf11jXWiffmx",
  "key10": "4eEUovi6Az9UfbgY6CZz5Dfwu4fAa9jUWmWJPqQH8HyJEq4wXjyDfkvN4LzqbK7HJKBFaWCwTn5ZPiNJi9tWfMvP",
  "key11": "5NaZYnXgfRqSR3fEZNJTW5FVAdwgLJr7fqFaRhdv728ftecmLQrBKLdEHx4Tzz99C5DJcUbwgeW9vWSG5eBEYYT3",
  "key12": "4s75ZVcRH6WUN3JCKhPbgqasKtHbR5MYsUDs9iW9BqR2FKFixn9ssWeq1HQL8uMAW9yM1HSaEo3R784wW8pQKETF",
  "key13": "46cPvBF2R5zaNxU5RoPeEHwPFCP4dMyq1k33nnkDKL4Z9RSE2eBtvizNVdkyoNBZqmtXExCqGPdBMcbvLmuzuKXb",
  "key14": "2wVZheF9THMxARG9rfuCjDvfdEGeswk3VZxuobR8snVFKK7D5ZFvTXDi65Npr7Xxs1J6vw1sYeJ7mqf9dTbMKeaT",
  "key15": "4gC1N2acGByYJMnp6rcT8puc3WGHbNGhpUddKUDJt76caPqvJdvXoULhxfTKoFeGktXWjedYpynouiwNMSpcu7Uf",
  "key16": "czgUmw5YmG7M1C4F3MESeeSD94KokaJpUayhB6EeJo5wgmKTosaciwy1D73akAckokt1gQy1kdBgDWzpYopCKAC",
  "key17": "2qkXxQMUCimb2wLEdyvEttt7qVGfnPeHsYfEB5XdLbZMdcQmiAwxKFbrLUmnUSYPPXSyk8TaZSp4xX4ztTX5hpub",
  "key18": "2rZBNqm1nyNsCw1S3JzWkevKVeGFSoSX5i5r5BzB5MfrgnNPtYsJfGvmzcTR694UnYhnZeMzx3NaJ61BR3JGFtKq",
  "key19": "2oA1enw1K8NXAGtYiwc41Rc74B2YpcM5X3Gf4dQeoVEcbvhpd4FZVynuVdY6rC7kRAo5QgJbvRerHiNT1t6GCrUv",
  "key20": "mko6e5MBzNyvjoUE8ssEF9zEeMbWDzkLrDe4dw4hYrEN29SLLSYJEvHMzV5kziERGBwaBJtMtzskL3BUkatDM4A",
  "key21": "F5Jrk81r5oPt5M753STjJzhChTUh36PWu6CbhtKZ1RoQXEtji75w3haGQ5TwAvZqdeNPWRVw2KhpE9hGixo7t6S",
  "key22": "4qrMCBG2FVRe9YfsKuxzy342te7p9YRLAEh8LaNY4doUm6z9u93yQG5B7ymti7Z17M6DrWVhU9yY4VxQ5nh94fry",
  "key23": "4eGRBpwJaXAkwPdHAVHWRazvZA3L6KUt8zRa8TXhuixe3DyrRm4rqKLEW3R7WgaEe3VVuaxyu5iy7ZauEtfHqVJR",
  "key24": "3p1YdXVRwR8FssBLoypAdUTBSoYSzuodcaWpMBXtFG41SNfenaKSypgXs5LwUh2rfqv8CKxBSL55febnc1LCX4Np",
  "key25": "36NMfYHME8pCTemtNo9u3KLNnhmxk2GMYY6n78Exv789tbXCrh9UMsCaXD9awgKSJaH2nqpQowiPe2UrtFwBQVjd",
  "key26": "3eNA6Hjcq64MTz4v5UY8WvmSrK9iP4mFhaAoBBf1C7r5dxUtdwgsoZ8Q2EbibVMe9fsnsXLaUF4cU5asNAGAmLrd",
  "key27": "2JfWWGqx82Y9mhcYmhUFwEtrEdH7Lprkm7UWdtcBkdWDZRnQGpMwWKEgMg1nYs8v8nskY5XNxei5cn2QSKiVDJnF"
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
