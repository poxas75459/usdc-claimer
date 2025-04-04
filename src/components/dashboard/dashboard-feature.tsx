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
    "YcB99AcKAEQRfXYma2Zny9GXnCdfSWqD9gnWNsVG2D9SNvRPMDerVt9ohrgeFbLb9CiuKaCUMTYGv6uWuq3y78H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o77Fwo1mNRCpH26CA99WH9H3ucZ8o5YjwQoGvRe9ySxpSdCFap34i7VSAoQvYj7FBy5GnfFPWmknB1qqAyax15G",
  "key1": "kxyCgZDjEBCo3YKdpDiP3Vwz7MCAHipijfa4junnmmtaHAo9jsWq76hA7XpzodfybJANEZUj7M6XKqXcXzgS7Wy",
  "key2": "4rNrHQCX84nk8ZqhwY4a4M6CkY7DN4MfMVXP6W1W6THtCV5kf7VZBa8qe3xqLxS3QaqtXKJXJkK6nZp47K9CpYHY",
  "key3": "2r3TpRGhcQj6BwwAQoWbArHKnCL4uCRM3jxBkcJNGbZ2LHrqbg1udyyPm86N41VmoZmL76fimvLfrzVLEchJSuBe",
  "key4": "3gr4d2DuD9nNYPtZdbhQCGWR2ryqAYiFcrSYsdQGqMxi8Jv8kt5m27d97gVpNAbnKkqTKUEGgAFmjB2XM7Dy1rzZ",
  "key5": "5C1XJkt3xmwPmRKf2TpzeTuyqDpqexZZXFe7Rg5ebMVkSDANRxjrQH1594fWc81PJAyq8agRt6wENfjG66sfadt3",
  "key6": "2UcrKhVrT6hVhminQm1aGq1CG2jUA97r4sJuCpqTkc97nAAkTzZuUPBM4FEokHe4hK6rJZmGkpCFCcHQ6gFVnUR6",
  "key7": "22fAcmnUz9dss3gd7vSZsk5JExbADTALJM3HhNA4UmsE3svSKyV9jG7CGMPN3AvVE8bx1sQJiR35QMfVUouP56ci",
  "key8": "58SMfArM3VaJmkhB2JbcbbYbvaLr9HHxvyvQLXsEPQDLswwMDSzGcoVEPTVP9Fn2Rr7kyv648aCWb2jBZzZypGB3",
  "key9": "2HvpP2yYvuJC7USmqmeK5xaQNLB961qNevUauWz3SCjF7YURMhzhny6zRmJ3YPjhVj6sGLsyZr5PL8wvRFw7PzXx",
  "key10": "3pLU3GjePzcU8UbwmXWFQCLhkCU65ZuqP7kpobbU4L43cQdPGfp1somvnq9jWdGBKdXR7oRHfaSRKHJYNWH9eFZH",
  "key11": "5kAxMDMVpN7mnUf2b5tC1t9cE9WraCnMtuy4jsJj3hhrSUDT2hMcGfAEEDeZKS7HFwb1dfnjF9WCf66nhHivQtWp",
  "key12": "4oLQMRAxkCEso75wRABgePuTQAA5EggQpBPCQ2pKG7jSjNBoo2NSqLUsyhN2piZoPPL6aVGh51XkjhUMrVapEjML",
  "key13": "4dQYBUUQoBz4NabexkrgxQ2qaNgTBXDZP77cpG6yDXV4CxCfR4VAB9UeHi3QDa3FUGbA6t7zpRPmDTUcb9z9BKjH",
  "key14": "2F1fJuT9k4Lxs9h8teTZTg9UvepiffvPxWikWTTJ4SWdtCJrTCtMsZs7hVgh5iUXmZ1ddvAa9kn9dXnM63MCWVkG",
  "key15": "5JADaAVuHxmvGFqdDKnGwMbUSvrosSnRLv13LpwM8zYmtEKYYB542wh2MQ3Mef5soa94fcaoEdJR3QrcSsonBmWN",
  "key16": "3Z6BM96Xh7CF4RFkXDWX6eFrGhVzARn68tbkVtQAXSsEdfAk2NRryZdZJEbGfxhZK52EwP2NrpBvzYugbqVLuCCn",
  "key17": "4zDrua9M7VFhp57U79uy9uoirthNJK7jqyq8fJc38ibR5WP6hsteND1n4ytJ3ReVBiHrx5Kc7LF83xjRG5MnW9Vy",
  "key18": "3LCh5Q842D8L3zpoUAL57NhAtRibgDVsTjnK2SPmgff4wrKnegJMkFqr2sgb675LpmQaMiALMv4e6ovVniiu4g8Y",
  "key19": "3uux62urkGH96ZQvwL5BPSqv6jegM6m87oGSVd7AoHdU3juU8LXMRibbnXcAXhruRkj7MF9BhhGeZ73HJcPxuQzj",
  "key20": "47ksmAmq9PfGoEEoYDsbqs7D2GrB4pT5gUE17QHp2pGuPv9TBiaLduK9oU5KG81fBV281UcrwLcoMVrREzrmH4pT",
  "key21": "3iCFZR61aVxEpQ7v3hGRFap2idqhJqqw6zKLrUyxDCigo5qCEh8f3A7YZhCY9SuYz8b2csBU41SiLLgXDUfeasUb",
  "key22": "4yEcnAZSwtVPvvQZ5PdDpFkqRH1N1phVCXZNM6cFEbXcd1bMNrDqM7T5fur2dxHiw1R6hfKnt14KTucjEh2phpnm",
  "key23": "3rv5frrAminLfC24zY6ybHNx3pVvudJzDcPhwsfsvAcK9gdqH7GBGF8kJXq3ZtsDaF8JDZvujSWanWTfBB1thc8x",
  "key24": "2DE24s6DPkorisFbNL1YY8S9Xr772NzGWNwBL89DPHo6QpBFkQVB7WXcCYaxSEPGy7RkmwhVt5px4jnjFr4ye2o4",
  "key25": "2kqxzB3XZXT9QY79X6fofgMGSKjBfvAjdn8wEhJTU5E1zeCNRfiFvN7EcGWE24Vas9Vna4Wm3g96LpVZNeQV59gF",
  "key26": "4j8fGt8cMD7LMVjmt24JMm1W4VtYpMs3pajrotuHXFwBwPoZRZghW9KW7qjJU7xCbUKZqZu2NtysRmGREyRyi8XB",
  "key27": "5ni6gWk9NKP8p1mLnSRhGYQ8HfG69fooBb6ZLQ6ugfDNS3Sm3EcbFP9wAuAhRoXgMGw3UD5Hx2ehzRoJfXaL4GeS"
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
