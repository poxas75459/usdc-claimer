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
    "5JCnw9DAmGPvSXfVcNXG14e2NsW15jiL6avXpHhWAhGmiYJbUdWUUrbbd58AQ3egP88HEtmwVeJmifrLAp9n7agv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ifpGvqbVfgbvGyFimvSDMvYG4vAiLvwbANpArrb8hUCYRCWkSN679VJD8yurAaHvxV96TV2zcHNh1UUTM6iCqn",
  "key1": "5cQUy5gc6DAB9wnZS9qtYK9zwq7mNQrfcYp6BhRGTtGukqwXJ1LXTSph4dDHTaUP4xxmvZyFoJboG3P5SmMkzyYF",
  "key2": "2uLi5zowDd7aypk5SR8aLJYSvxR6h5pMa2ijqcrCXCogn4DdfokeH6LMQ54s5X9EttXJBTkNCPkZ1AQDnEKXZDoQ",
  "key3": "5HomhMCNbQtnT7dRisAdCfHRhkVsPZP1F9BqUJ6ur8fnzsF27pdQrR5zCNHHMK1PztGgwTPTAiiqZemDmoh8RLXt",
  "key4": "2UnwYpboXMdWTmxZavV4VuHDmUcqgZXi6wZ15mRqyUvw9ysVRv76VVosPdYeAXKhroo63wG7VfK3dUA6rw2mLzuD",
  "key5": "63YHbbKUMp7q9LXNW1bFN6XJzq8tCyHxkM2n9wKA7SfxZqm8RfN59BQ3HByNj265kcR29Wesxv76Scy857edAZn3",
  "key6": "uUwgXyp2SVYFzMtY45DRpuEe959xn6Gn3ghXGxJQNPYa9hFxFdaqhceYv5p3pJUs3oFbLFz7jhyG5ExMRjz7pFU",
  "key7": "k7NRWVtojbg9Rn67WgpCkLXPwn3rjTf4yWxgh28vRkeKWaQbgGLAQ6npSHHMo3n4APAt4kHrjT1Csf6WcK1pmXp",
  "key8": "3sQzEacnBSP37Nm6t3VD5zzxsdzdEhSWj1q2YVkstGYiGHZyhF18U5AqJqp7Kgbx5XfSoPCD7ioQLCcQPhCwJr6R",
  "key9": "4k8SGSoxUR7q6wvmtwFQSrVR9BzuU4UhuWpVDqmF3ht934PpieVQ7ffGR6KsFS6PKZmhn8Dx5ARYL9XAdQzPiMmY",
  "key10": "47U2BN5mRkj9KKjRaeCyX7PBPpvuXADvkKw3voKjB4crYJC4egLAbVGCp3siVC7kyokLWxe6XTGC4hToaYmu1MCS",
  "key11": "4ptBg8dFoT25HCbajmFdLWXUvdsud9MyR5r4BK5kxAQvwgDXzP7Xgdfy8Vj2NZsPhUQiCYa4N7LAUQaiw4gvUSKN",
  "key12": "ocEA8j6E4jvm9MR7b2ubcfYoid639BTfMyTc23SZmJDV8h4zVEfvpyJGdW6nempNo7JrwrHmsboS9Fewd5HNJK3",
  "key13": "3rCShWHijxFtuKPqtYPoKS3BgzUMtoo7pPszoxHUWtZGg9ADdpwZRU5QybVcT5JE4VJKbhwNVpsbArJjfuKdchcb",
  "key14": "3ZfuJxj5G8x83vaSN1oVi7MctYRm94qhBhXXGqkEkScMitqLpXirv8pFkNJ4Ho4EUsKBY3qmW3j14yjSwkWmucDa",
  "key15": "42fSYuhEGpCGQDUP8N8i2ngAYywNMr2MCMLV1CvhE3qVZehSWB3x2xUXEiLLwkG22ish2Ego9H4P5RbgnWw9D3Uu",
  "key16": "5JoQBcbF2jupQ3m5NQg4EHb6cHQji1PTX6KZ6JyUsbZz6mLerknTfM12Zt6GJ18hpXaD6TNQcLWWc7fvAcbb26Zp",
  "key17": "3ZtH2qog8bAVHm7kN9XKPEg3qCMiKwRUMaiTurAn7mgNVeS1xNmBcnPXXapTGkgAXapZrcSa5ie2R4L2SxutwL25",
  "key18": "mvp8NyK9D24ZZuVKoS4XjZYJB8UUz455aCpRRFRcDRQyayaZmGyMZs8oL6GMvp1iTVaEUt14h4cMKfRPCqsMBcT",
  "key19": "2FcgfGegvewByHjkCRkh6HefjCtAw6CdG1UJSLmAgNwcMHBa8Xdm7iS6Tijnq4Yef4nYXjmqR6HCbqYvBcZrhhVC",
  "key20": "22kAoCyuxHCRU14fFR94tLQvrpnUJ5ovv5fU76XuresiENZFovJYAxURC7RG3rEtUxWTHkYpd73H8e84F8LVqGr1",
  "key21": "3oEBT4UjUWFDsJKXXnCZBfGZ91sLcfuUGqxqWk63mYbnAQLBTQFPsQZmf3pMK6HmAJmujc8cBY9FUeRZa9UZ4yq8",
  "key22": "irWMC4hFCx7Ufj1aFN2dG8Ugt8DTMofx3V1cn4JiHgCDtvksGiedYzs3oRZ7j7WE3rjzfghmvC2aqokeRKLqLbm",
  "key23": "53PpESucfJCUCTvVXMmpK8KGDF8HWKH26eKH53NCbkiCFxsnwt2a8SzncNmuFbYoDiPX4KXSEzHBvzp1rufqimGf",
  "key24": "4QqegmCErBZdkt95mgX4fhEaCULaPHbH7q5hBHZXqr7UohY4VY72X7sUqB6SSuphi77pGytHwte3NfMpL8caLTmA",
  "key25": "4zwxyiZR29GKP3pf7drbhgcBL13iq4jsYHZEsUBpH86DLbZiJqmRLkDnsLV77yNL7Dv9vwTYhXGuU5A6XThxZQpY"
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
