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
    "3HZK2C5eG4eQ2AjDk5mSRLikP7BcJQDcUH42gpJyiFGjvnunMz4XHRB5zyHeoJ5EhrZrrTz73SvZWYXqB3ZS3U8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ufFG2YQGrr19UTcjy9vNTy9ReftkpapW6s2JSpdhJWwffjThHbwts2VxAPV3312AQbk7C1rZ8nHhtWsiaNBksj",
  "key1": "5JLfTDEG5m1DtKf5CmjHqniVUax7fcgAStA51UR7bgwAfJgscT4T5GsSwUuMJxXo4tL3pjt4cjHH8nS8AEZm7GZ7",
  "key2": "5aXD7eqa5z9Eh5o7Mve6b79zZQHXZQknHq6EHgbEEs2G4eSfsqdHpL2H2jDNuNDpHe8Yj8daF1j34gXb9wYS1yCw",
  "key3": "2zyjhLFiX5g5s1upDvkJ623k8u14FkRAxENW5yUModfYzLpGroFN1PtUn9wG9xHvYaGSW4qCvPSKUncXF9NhJWPp",
  "key4": "2xsoegm7Gnrw7Y1N8wPm6N3uqjoGzxXATFbzLYPfyc2yhErp5EQS7NpRL2kspiYK67kZJGK7GCHqwP1CxYynmXfk",
  "key5": "28vQqQq1S7rRE3KNRavv81a11jTnxTVAWrb39uFx6vAz2mXvMdepQAq7s9G1zXChiYMYSJxGxwGbgwu1GBJ8kecd",
  "key6": "3R4HGYSRwKdLm7divVY9vxe5BReJdAoSRBjA7MkNnheEUWHu97bUPwdx9GRH11nExXtRQS23rodwV3bKUijJoFas",
  "key7": "JFPwgEoQ7hGdLsuznBVaK2nsxqZAv2EuxAEwywPkR76mhGWU4W6hb45vny4nxbNHDtkFfMsb7KWTb4k3Wt23Wg4",
  "key8": "WQjmZ1tSxEekW3tgtpUwVXLszyhutVQHjVG84UwbvpYP1GPd171hCRVj56NwQomr8gZaQ7KUPDsRvVM8mPqC1hf",
  "key9": "5fN3z3Wpvv13G7pQVwR4P3BHE2bfwRcDYFfgZ5db2Zg9t9YnbEfn5KmxsgcLwQSuUFFAW4iUn648AMay8tFsCTc9",
  "key10": "3J4eAvSsLrPiFcYm6HkNe3xkXEgQJRpuD78FAD27tEtUYzyHG1VzyPsVsCAB7fWDSYndEppeLcjcKLeVuMiqVZPZ",
  "key11": "3eiiCi6eyhXeEXhdVjDvpPSeUKKRaR2FoRKz5jtMBQgbuNCtuaYCUgWMnLepR7qQHW1nCmnPnQQN3u5NUoY9Xbwq",
  "key12": "2LVrhm7bxGhNFJDCQ1bf1zZEkAxHRnLiFMffpkyEtcZ5Z2oRRqzE8uqtv2Rp5zs5w53rqut6HtBAESru6RyrajYJ",
  "key13": "5ZQo4jzTiXmPvC6aLXkRLYNMxUpFYoPfrmMeuhen7mUX2csaVH95B2DgSmb4drdPYzK7N2WiUpKtFbDb3HCdDfbU",
  "key14": "3Rci4tWVAqZqNB4hgrieGWqUMPzh9MD5zqSkq2oiVZh27xDU192or5uopMK8tCqdNXJY1ebbeG1W8VRbcxmoTpim",
  "key15": "5pxzfMJTw8yZGPaZs71G9pvfEmFa5R6oPesD1p1HoRgSLbpTJKw9svnB7bQ3uP6Y6kLgoSgHPNFCZRXcRopjNZKm",
  "key16": "3Qjkc4yz3gGgkK96afNoynGqRvjvtiwbxi56ALFdBoRdp2U5KuGQhj9qCgLCcLF6uef2C8zUtkksUTwHYg4o5rmV",
  "key17": "291pjvDeSyKZwYMhfJ2pWuJiWTSchoo1Q4ASwSxs3DaYBfYXqv91cXu2dYYZPQqqY6tzViTnGNYyMpfqWoksJ36Z",
  "key18": "5xD2JFxuiZ23jnhJGqhA2a2VMoF8U4ug8HGWfz7Qo4gmCdMfmWEYD9rM5UqU1wB6tp8Wg2L5sYKydhi1qpfD1yFy",
  "key19": "5VPMp9p6KFSYCoVqbkqXbhH9TB8FZzR2iUzQ3TTqne67jAahbNYVeKBEK9EUsqBGGQv4vfRZVqQRrnjghQr1bN5m",
  "key20": "4DQh2zJKvL3thSV2vMnBv2RHEN4rktqmSZmyPjHyAD1qPpijZwMFHqrxakKaDoeHMnUpbNQeJwyNWxvy9p8izwSq",
  "key21": "5kc8hfhcybvb5exnFaFTdVNhHookhrJ9rSj4isHDfVZTQpSCgiwgXVpJrmnCGt1UitTKMCEnndSgRgdNxR2Vv6GM",
  "key22": "2HFk5zz4wzrDPcRpCa6NooshD2uAYL9u6Yn4PRTc1JoWCqzwZqk9MnQkBcJ2HfktgCYLbkxccZ4EmWNiuWWbnGbj",
  "key23": "4hRgjULxaqVsqhjnAeeEiuXQx93DZ4QvhPPoTPyopfYYZ7RbigS92sGrh1GEFQoZP4xsTVKy2TEUc5nZ8S6zawj5",
  "key24": "5G9VfC6hkrcvMLkMxjtqVLFoQKmNof3xJE5fN1j1LsqkHffDNmxCoVpPx6xdpgNzAVTfwcRtV5cpmm7yMzy2vff3",
  "key25": "empSNCag4bS3XdqEsQbonRrCV6LLaFXz1Caan7qkvr8y74W5dckkBda2CcvHfFvj7zH2UYEfnyhE6C24pvHxkGv",
  "key26": "3WWkGnEHzUj4Bj1qtvYmLT6NXbr9u7o3bUVVTFCXLCpqpXVftipfgL6oECdHiurNZBsJeMRsjXPyfrPTqZ7NEcae",
  "key27": "n67j5cAsrDaSHVNLGxuhF6c1A7PqTsJujyBsTDAnGiw8VFh5fTHJ91j53zyExSMdAVbbth4nSERAe5qM4gyC3Nn",
  "key28": "2AgzgFxbbHjg8fZHrrjTnWg3ACFvSq9KYBL4nwC7LRQLMRDiHhijV8SRFQV2w8eGUUwZsUTitvWtL6gZKqQ1c87J",
  "key29": "5TB2D24r9TQsBWML1E5N1JcUhiPBuh7nQUxrepJh6DokxgKgqFFx4Eeh5rwYhjCHUcQr5KRHKsZ8LuYKCyrfDAnm",
  "key30": "4GEfkhdrGZUQuDxdghiVyVk2zJABAaLgyKaaakkJCSxuwtuzJhfZuRhYFy4eXiE4zLGK63j1BvLZ7D2VscJ8nTub"
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
