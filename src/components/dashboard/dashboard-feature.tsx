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
    "XidM28U6KujXUQDL1yM8mcgjcSWvVVHqgRv4HFo5GCicHV6fgCSqMZqwkoYf1Dvn2jkcyCNgVaQXxu5TmMeBE61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616n78YkqExN47HJXp2xBXXcNUWyKA5TTeNbmJnuW6nFL91Mn9sGTyc7sfUxbPRnTFvfETSLQMYY6wqjxVzQg1zF",
  "key1": "5R1C4JADXdZDFQaEjL2aDkT2123gyEA5KPpbcPymVh1vssRnJaUJP7zb43foCY82bcyRQxNmywPTT5FLsBj9aeLc",
  "key2": "5pBCdX2ZvufEWN5F6Pb3p9cjWtdEMRzms4T22CBLnC3mTnmkYcoBPsGRa31Co8DL4MoccJZRtKkz8n1bRdz9GQju",
  "key3": "9D7eRJ3BNYwCqkkP8fRXHdwh8qdhdkiNDwdHDKiPLeEcjM2NPRQUtXcPoJQncC26d1cCVfC58RGFFaGACQVZ5TZ",
  "key4": "4GBEa8qhrSEC6u26J83BTuUMWtJnyzy6AgvucyH94d2jVnZxyEdyZqKTFoDDcJ7QgvbmABB2qCRbWp7KwvjfcP9H",
  "key5": "5wpMf9zJe1LNYnjtHdxPeoCuhfYUP5Ak8YkDBRHbfTzakpSGbc9kM1Cz9qZ9QoKdHeqNi8neN6vpjM8hUKpjPFZo",
  "key6": "2wsfASU6zAGJySfn6w3JFwjzjRffaKSQmoykbR6bSFvteGE2GDeSbUwG7WNbhubBnxN5jDtbUHEisRECjiuXaYBe",
  "key7": "49VQ4cZ2cyWYjmZhmECdpzQa5779K8gMh71Gi7LiZTmrsDRPoLg9vtSR75KqGzSEXY6e59ZvVT46TMm7nVcNRrpb",
  "key8": "57Pv6dcCDuDVjHmHTdtkxGniUgDTovVjg4NybMNmZBRFc2jWdrfprkQMETpKYWayrweGhsUPWPJEp88DMXhU5Ggd",
  "key9": "2ks7mXJF7cSRNGPYKUs1W7qHgGnzXW9XU1tTcxQM5MCurquDLUMTtno36xRnhfhEhXeveGnTmY5uvFSuK3o3e28Z",
  "key10": "541thvHLCepBN37PWq9mkaJwp4gA1payXNDvdzLALBMbP8C1uLweZ3PPouaAVEDEaPYnbJ31WnN5iWQ7kJSNTm5J",
  "key11": "4rhyjC4hJBreQhU1thseeQf4PpnPZUAAwi5E1Kd5p5atyTbRcCrkkyKR4EmrcmPmm5y7mi447Dp55k1ETjvAsFxB",
  "key12": "irFczHnh5iBpgt4ZPfw4sy51yPk2Tf73dxX5vwrEAeGjteLWgdKhGLiUUJSongYSBgtdWSBs6yLJtQXH4hjiQa7",
  "key13": "5Eu9V7RZfBjbMMGjUq9wcwmVgZUft7KLyokJ2wQBqebrasgS1f5AZy6jocF43tE6FTKUN34nsLSs9t1cvcvV6CJZ",
  "key14": "62KVbi6W5w3SUEoNppSbTKkysAfZthRpBciHDwgnaBjJ351XoW7mFVPDiBzYnMqFjoqCQsX3HX5FiAyfSzZN6GhU",
  "key15": "3wzNxCpJwcsuvvMn4KdJGirN5H9d6TdN9krJAa5FNGCXj1ikkNshRaw3kioMLhvdQgqkBB8J5ir8y6EEaTHy3E6B",
  "key16": "5SLEZ5a8yWJYh62ToHHhM9k2kdF1M12tyke7CW2Dz7pifFuWJ954LyHQpAebNkBbmxecBqrcdxLhrBBiJcEJqeSJ",
  "key17": "5S54DfkSiaxmU46g6K5gyNjB9tffJwXJsfpUf8X1WqrzNVzB3biTiMwFpyyZwqYnHTjwFLCEgmtCFnWxTM4a1ynH",
  "key18": "2FFV197U1nK7pySG1pMmuGE4ZUpqEgUrC3bYdyhUMPBE8QKEbCi89rqWRQJZgKwB3Cc9jeRxxinfQC8JEfjS6RBQ",
  "key19": "1ZUMezT5HChUfDrdccjXYAGgYLRi3a4dHHhfwUSdp7Hqn2DiKvBjbucA4LiZ7i7kM4Y7WYCBMKkRqcUbTsWMzVF",
  "key20": "2TQu23KaJ7AeWtQNGm43acZ8ai8uD83frgGFDfEneVvEnTisf3MeFDWwMZoEDHf5HS1v5DaPU2k4rdEVgekezxwv",
  "key21": "2x5B9Y4GskqN2rP3Gedu7BDF8DbD8BX2zGUvg52fVJDCJDurMvFSRq1uQ9P6zyPuYmmQGWHKgaVx9Aso9mqfMC1G",
  "key22": "gL4yrxzQZczDi8quRsKWm3tp4S1b9qnFykVddwqSe4jx547h7pZuvT5VCLJ3NHSUQnyFKoNtEMdAhdqfy6EQBEG",
  "key23": "2odFXnUuqRQJ1c9a6iymajnxrxtMLro3SKR4D2JMMJZRFEibAZo24n4C5a6vMbPC6ymv3ibRM1sgJEhoWRMGgAB4",
  "key24": "2XMKH1m1rQDux7rEPeedkmmAid3NkVsEMEHE95zKgRwBiaNENa25Kv2nPdCq4uN4kyGVJRy1CmDPVruGx3obVQZ2",
  "key25": "4Y5scjDp1Y57xTXgAq416JjVDdBLdvcBUkTnJFVJMZkM86axcTWqQZxyh4zzdzgb4ceUEPDGaR5hRW15KaVvQbME",
  "key26": "3LJeGHJaFJKaNu53NuCE3mKe67di5ujaYH95VXaw3QESHWEaNziK6HZgKnXk9hbaQVxTNfFazoomyigxyYoz4oxy",
  "key27": "4kw7f2yfUNN4r1YnhPLEMCNrpzqmXn35utUHe96NieK5iW4AcfieM5AKHTW3BdrPvFViJRRZjxKjC8CYqbu2oKJ4",
  "key28": "2N6Cj1Pv3thMxLLTcPM5DwxjNUzBVKYCqbcfNVGspSF4ndyk7gfdjTxghYXudKY1xR1DvwFNz2jMFdbU9B69Bnq4",
  "key29": "5LtcpTBMTk7Ktnx6M39GDbSv9u6FrH6VBB54DK8SDHcYLVvBZb5WJQ3W3J5BtRrDFmKgcPozrMNuNSnJ2wCRsvo5",
  "key30": "39TSUfD184bytzexW9Aez2TcPb9cT3psfGuenQHWXvP5HagLKsVjefL6q3SHkMEhYhn3TieEKcPfkj1H72ZQQXsA",
  "key31": "4HSKYwHmuLvHGcgyRaLJYUPicAYQ4RPYbwhj5fUmtzfiEF81udHU8otPegVt3fRWMHTV4Av7HYGa8W5NTxYfx7AA",
  "key32": "2aEo3JmTfGzCAbC4KwM6k6Z2o1RbyLsoKc9yiNqtjJAffj7Nrr9S6wkQ1jkx16n1VZWjYsSvjoQXetx1gCCsnZPr",
  "key33": "3QwjRHnvQdGiD7dcyQNhNCTjpyk7coqHzS1vy5FYPHfLkURkC2y8WCk9Hw1W3cDTcFpnQUG3envB556VZiFk58qG",
  "key34": "RnYQRb5oibNxVsPTQaGWHwFqv3wj48nrAsXezPaH9ob2UHw6siduY6Yvh9RjwDuvk3iSPinKL3obKLJK3MXDk9P",
  "key35": "5KBcMATcdZfDfpjUfFvzXhdHoLgMSYNuBPENKS7QVDRffmhUBCwqXHwjpxgHPxjnuWz2LegQJtTHVVJcdcga8wxz",
  "key36": "2Yx825xhwrsNxt6fGSUXoVDPJm1A8TijuQZ2YL64JgkCQiaMZVjsm8rNrXyiUUE9HicrzJHdoA4BBhxrRoGVJmvi",
  "key37": "4e6Q7Gviy6aGdLuPmvXkafzxmJV1dr55JBUkr34sSNZwyGR5eoJxKPhbcZPc8yLza7X1WwJdfEy7sNubbsQuHN4D",
  "key38": "2mdsSh4LQ5cDwfCpsZrEqmGtMwffVUBrsCSQgxdFWhNxLANbwzGjqWPvcLRtFMCB7G6qKErthFAr7c2N3RWTyS2h",
  "key39": "5RS2mmifAEp4MBscDqty2FpQ343njna9vfqbDqsqswXy4uX2xUTpYHBnvGq93WZD7oLr49VXQbFFtyQhAWDwg8dz",
  "key40": "5Au1zbma7r1HaeJDEtXANVuF68mLSbx9yZxLGPmNwwBDptGHKwUm3fTbKSTcg1ygXKr3fqH56JswJPCqF8XBUBpy",
  "key41": "5QQ1sSTiWqs9W5CgDbjGrUw5bUpgEz1mmeHCph1AMBq5mr9JcuAmZmLaDjvt317UKywv62FW6AQ94b3Qd3ak55nt",
  "key42": "3R9qPZBjxDVe2NQNPjtHePRRSuSKETRPpvFHPbZVV5CXBQCdorwQKge5eCAG25cmjH95NXdiKyCANSrJ1p3ANinv",
  "key43": "NXZVmjHxnXa3K2BubGr541fM61ghCVEioR1yTZPp9MgtbTFiebWUu1ktFj3ibQJSkWGzbBLGHZhvLknXvG7T5KJ"
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
