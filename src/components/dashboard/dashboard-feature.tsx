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
    "3v8DbcxQBde2qVGXdAn4d9dBwwFH83XU68meuKyjaABXNaowaqSAFsCQC8svrfN31SJ66MxmSMsnEnrViSvSHSXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mv1teWEBBtAqn7PFEBYCFu6KrgF2F7LaBTBsPEYMtmmfWazBLx3fzRRFdDJsi8cuq6hufNcxX9cA5HABeJE269Y",
  "key1": "5jbrN4Wo7FoCuWiw9e4h1tEmSYmWgrerJivZ5effTGxnUWqzWAaMvnUkmyT2X9YUjneAVTW3fXfXjAntHa2btjqd",
  "key2": "5LE4BBVFWVEpFwFpC6BFJjdkd3pS9JMrKYfAosq4KMH99LWz97Jy9oTqGMu5wZGCNvJyAodLErcec6ZL6QDMUUfn",
  "key3": "4bggneooZkeKFgroWtnZbt9zqzehn47Y5p9eoqss8U1KPopkJeuqYjuwsgjejr5qcsYTcTYuu1awJmJPnRwueY8N",
  "key4": "3j65n3H5hivLvqSfGSD3AX3vyRm7zesnRN7rcSBYAayJtPrzSdu5ttQV7yRTzfBLG8pZbiWoaeuyeJi4LLwdktRW",
  "key5": "5NFxrK94PeKa9Zq9suFVTg6ekNUphxzbLPZT5nwvwdnKJ3iKUTAfLz4s72eMgJwraM281C8datEsn4E8JGZKUC9f",
  "key6": "3FzMehvYTdfsbSSoLcNwK4Wq2xLn6NZpmZvEwQnood5HMcpz1EZxuCQAYty5THkbjVVtBTTkSzaPu9VxgYUhsy2e",
  "key7": "5AsPcMgFnj5Er4pi2v7DyDeY3H2XT47xkGM8crstA7bN7QZGn3pHzXxNb24AXpRzbgnme9WbG8GyQ2BURyB4RnDn",
  "key8": "2k1GCnATiqVxGs8KHog18M4KiE4haZ3xgcMh2E6VmnPrZyWPXQ7nHp2MgCvBQ2HSG7QhMKbkydsUUPsGQc6wgPbj",
  "key9": "3vcD25g1h2hYT8HWdq5gQLAWf3zmobUnWFG9mZvqY7yyrm8iBMtMLgdcg3gGgNmvgZZLZuPSc6bkKrtoT5QPEM3D",
  "key10": "LXTZXbDTgdt8rWUXK6GtBnbsoeNo2CZqdbsXRx7rhvsQbL2LEWmfKU9J4U1o4QVn8kPcYeX1vdc5eQFt7v52DAQ",
  "key11": "2dqA3CjoRDq8WqgA5jDsbgcaqAT7SWS8Foce3CEMAtET2ARs6PJxG8r1SPqu7X2H3KAjF8KR3UNk3B22hHHDUKtQ",
  "key12": "52n1YsVbZ8VN6uKb21kesi6SaKn1Czyyn4vy45CrJMsyeaSJERWYRLXKB3jiE2AhjovkXr96coCBzRd59EZKJGjr",
  "key13": "4jaCnwHhVQKJgsoBVWxxKmM8rkkR7NH1pqFUWZLrmZEis5h2manZStAY7CiUG91FPW44fqhPHnpGfA93Vcnt8qhQ",
  "key14": "3xw85dudCuw1MZATH1kYSznBnDhgNEngostn48A3wXz7jEbjqUpnWeuFbvwDpnuUiQC49T5CENRY7tNZLeiZeYQf",
  "key15": "3zaA6G8fxYqdsW6pbMV796hgJuokeF4qbPc31dhKwQWwz6NTY5kvafg7mVKAMVZLkPzXf74E6sRbxNUuWz66gety",
  "key16": "4SCEXBGeFqwfA9s5Siifw8FyC6eVcAeswP9yUEstVRWjHyRuq1feDKL7pp1HzD4Xtpa1aoTf22bB7zoRDhEfuoth",
  "key17": "5ArTfgR5zcvcBYDYFX4oh6hoT7uET73Yjyj7GAyZBxr4cxDNX3GUPupCBnUo8YK837J9Yc8iVdnyrzd8kbZHdMXa",
  "key18": "4fWquQUcLfvipYHWLoZMgZ3bYzxH1cauNJXoBqXi6P38uxoSrgRgNRorH4n91Etok4tVgCzF6CqEj94YLeZ4DGwd",
  "key19": "4as9itpXbtdFLDNMVzj4jHjWmyqnquZc9Kj6GEK5AvrY6M7fNaQocZQgWtmtShH9DrLrZkgwFbNGzcDw96wHXrXd",
  "key20": "5qLGQNs2cZgKJXJVwN5LuW6jPSAEtMHvokb2a8Jnks7uhfaTwoZFiAiLgWtsede9RRfjciQuXLyLbbK5vmfDsMDF",
  "key21": "5wWdBtFF1ucnpY3pNgAJXTHMsB5TYGFXP97XMuU8L5jaJAtSFUY231jDi1dEA2EAA1Fcx348vUSVeFcAYFf7WnDf",
  "key22": "4S8XZgmGnk2QyUoPQKd3WnacYPQdAEUXUvkDgYFY7cM5TUmLzipvVdbFzG2ccj8ScUfU9RheDVX3G12h7KfaKa8A",
  "key23": "4hMTTDmoEbNGVujp4feBwvs1WZRm5tGLhcmQarb9sxtibg9o8L6cwJ6V4v3Ni2AjgGmj6x6EaZB8FoiNuikG4z34",
  "key24": "PVrjWQoNqaJzSykuYhwXzX3f38h2mCQThZ6A5oekkcw2SMzdWCjG79Eooe9tFQ977QRParmfJCEh6gYAfiYYkPy",
  "key25": "21pRzznmf3FiaiMMQMw3vVP44EtmyhNPuF2xRuNebnvcYFnq7QTMNRyZShfhodF7B4a95EAZA2P81VLTSAUiweNj"
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
