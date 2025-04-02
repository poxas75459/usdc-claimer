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
    "4KJL5bHttvNxvmwQPpc8wgQEfhavHWX4MSYoM8rxNhPGo9RqQpi3PfJyAr2ZuLRhYCKpR6GXGYrPVNAa22wm9KPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ooWgBp2gcgSY7E1T79YLVDjeEVJbFwVr4wKoZGz6KJccb9q8FZtmg8oreHV5vSvAfQgsEeBLAXoRzP1yV7ww8Wj",
  "key1": "2sVomFNiHaPFS7GWswiu6WA9RwsaqWuZhgd1VUKDSvHTxaLpCg81HzdnHrNJYFoHJFXyCq3m1KRaF7a9biGgLvbr",
  "key2": "4ivoaFVvT8Bu1KTpyWByTy7J8HCeUy8752Kk6xjAyw8XRvK3uYxANcfJMkqBBBNXkWMFCVWqmfyCfK9shNq3py42",
  "key3": "4eihX9QvZttebEhTDZmkP6ddm2bF6mfvPwoiYSd8d6J9WvnKBZhan9en9jXpih93nwLFkbwT7A9ujpoNqRuTfANY",
  "key4": "277eFTDcHuF9MtvKmejo3vBdNR8wfDNjDbuwBxUy6QDAvi5QEVgkrb4n7WGC7P3RhUEgHjP1DF6cvwGhu7rPTwMY",
  "key5": "43CRT73qb6dBxPao3gZ6bw9LFYJe4ZvT4zUVnfwzHSGNdFPd63NqKWdvHp3hgjXDhvEUds9pmiQuxpdhgbN95gt9",
  "key6": "2JyWWBRpN9r2tuiFHbwNibndYeCyp654pExkSXp4jtcyHyCkDhA1Ai91WCYNXPv2FxWfemNaAV4Ym7KdHv5VsWTX",
  "key7": "5832VRpodxoP8t8Jnpo4dW5qU3vPJyFDLYkGzppydRnTpygMC8HAuwhLRvW4jFMPusbFgFq6S5iZnRB6A7hJcdKn",
  "key8": "5YJyfLN1pnXUxkp16xjosP8h52ebGsDbLk8WTtUkkVGAq8kkr7NXjpgCLNSuDbLqpzqS3U3mJgrbNaHriaM2VphR",
  "key9": "5odgqEAKfbJVZQhCx2XHM6Uf1Me4ZmLYoTY1TjEHFhaEDVbEzRoHjCzfGtW6dmCz2A1isZ3js48vUH6VGj4rbezf",
  "key10": "4hW43q4WaeZMizxcefBDmgz5wCdQYe7k3MWWMwQ2pknWwMDdo1DnTz169fzfx4FegF8pFuz1admrMMow5ReovX4L",
  "key11": "53e5HkxeXUKSesMGYrV5uEnttAGHaSBrpMRAYhZBNbUh7dchzppxEifW6iwnqHTFp9yzFFsYFjqC1GU5WtMZMds8",
  "key12": "2gw6MMLgjjbCMYpwd7XqFeExCTNbAWGsjwfb6Tp6oKPLuZyTvj8Jvts7dvjbF5jirUvnCUne55VbAPuQ8Nogqchh",
  "key13": "2aWhe29PH9tsjazx1dHH2x4rUqSHgEEF7d8441RKeHdx7w8ZLkYj89SLatMMFPf5ZVMqSSB5ZJRMjtqLgpcttVjX",
  "key14": "39gPzcSi51XmMD7MLYS6EuAkGjPJ3HEjaH1UCcBMWqG1qnCHiyCvchKXFL9C4Jrg1Uc6oPAiuW34xjhCWRQphz5B",
  "key15": "4zvWhew82Jv3NKs3VoqDzxrE8Z3hGCX8AaqxDGB34GS7R54bBPwE95RyBg7q6Zw61GZkRfwzW9uSazPDBY8r8D3z",
  "key16": "qo3bsHPmfrwPmQkwQbkeVDrLM6TyfrWjLd7MFtvGUPQEfRqiD2vf3tEu1zxHdkXYNYeKThx59HF1b6Gt951HG6e",
  "key17": "4RjB4JdFCZhJzq1jgN8EpggfpDafyqjxbjrXLtch7c2CJLL6nud9y6cNEWFwog2ubaBe35rvNf9jtkq6yk8vfy1C",
  "key18": "2omoDMbSkM9ymqYadkqPvoadLDpzf4XaN2BLuYbmsc9XaHfpjHVeBJ3xxRqbFGDAaab2jceFcZ1mzBoqh5HLQ9qn",
  "key19": "4Ciwab4SBJWN35e9mUySkE2sdnXN2EubZWYyBsfRwzoo9UxFqL5gWPM3npz6M5R5mSLNeSs22km9XaJrrbmTe1wc",
  "key20": "4wa6kQ14xDHZtuDUUoPotUnTaJejzSmLzmPauumG97JRga5BbXZWdXa5co6r18DH1RSNFTBp3tVCyhc6xqBvBonZ",
  "key21": "3KRjd6q1vJTFqq1rqUEA8jmEfftk8YKD89u1cmfQ2hWeTE8Ly8NJ4uGu1ruhBM2UnPr8YKXYWgKiPUadN9SuBqit",
  "key22": "eEuxJk2HaTcq7ZnU5AugZqPzMhdoDe2QqiejW3fonaXo57SvHjX2xBTWZeMvU3it8DnfDNdMsiy7JADboujJU5T",
  "key23": "4A5hHhKhgWnNV5nZffdz9FkttAVZrNik9UuRb8rgR9HebfhbxreoAgzDGB77ZFsUrA523A1teRiw6FvjSY7TX72P",
  "key24": "3LAjFkTdK4BsmJ15aHmHPGnAGgQuRwQ8dJXhqhqRB2ubJrEe9FreK5moCqq82WPeMPtA7N3gyhADZmGSiVRAcTjX",
  "key25": "3hHQYwACiPygJ2DAyNiyNvwRhyGArS5ubA3Lv2vD1guTbSivhAavh5XCGaysJJR1HNT43FRaikpvKDi4tC1eiKPK",
  "key26": "fgzZBsKttuZG4BekkiHk5mcSQFKVnzxgyeTLybZtJS5Hs6MwTe8N8uxhPxX2VU8zm6mdsEbvwPnsaP2G3rc5PkS"
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
