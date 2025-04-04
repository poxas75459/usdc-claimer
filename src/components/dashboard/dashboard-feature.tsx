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
    "2QZjVUuzXeqg8a3dZ25uhRQtXQ15UNovvdeFuChFUtUXYabsn37VSTTZ8ovBxFg7kSzdoXx7xmFwcB4p7qCWursL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUFbbMZKV1jiFLpazJsDhxoagNmGa93tRLgu7ZLDPe6DVA8SwJGnJBw4ZhTJgRtvcgcDRBzQgvLfAV4Lr7Lpsh2",
  "key1": "5eFJraL5q3uT1wEQUFmpJ5gQ11EXNvx5J8w8viqxWHhUaan1omwpdSfAzGtYxNmFAGkCVphbeNJVWCPKx4JEtnvf",
  "key2": "2osGnXj7C3QoE6rJn649qHjWtRsSRcPrnHpDrG7SxpSqZoTxCu9ufkisW5rbcohFqT4kQVWvRbe1mDrMG6XhLDYE",
  "key3": "2sVvCz3XHvXdCgt1Dn2A5KA7tcxh4uJDqnQNDpA6y2Gf4J8ibEBiAL8JMGeqeZWHn3BJ2iXCQ1wKyFYsMBT3bxET",
  "key4": "3gzmBNoWNEFCqkkDRPuzAwiwRJ7EUuD91XXHYTyfjKAEndy21CBNsfEoubwPNCkfLdnaWh4Y8vVG9azDvk9mESNF",
  "key5": "3oZzEXuzSkHFQBLrtjna6HgbwcUk4jg4LyWBsBt8xfysgToog4jmvpCynDm55NWbkv6yFXu4coHVqmmWiY72wCwJ",
  "key6": "3q5HtVnxoqZmdQ1K4BNH7mp55QURNWgzvBWjzqXnHNx2qBiFaCWisVAQxmah1BFpZWVDA71iMDRxLwjcpC3Y9Bxw",
  "key7": "5qZn46Hu9SpUr3hMGw8yYjMcgsS9eYaQo4pe9SUXxNwyrUEdn7LuSWPgqvMqw3NXqVFqgfKRYFykEt8xGiGCzXVR",
  "key8": "3xnoYcNtm7BeMz438XeYfKnveq1U9hGSts9nRf9SSqS49dWupaPdrwxGVDRPY5aHdM2Nsadt6wKqyen4Nbk6RF3E",
  "key9": "3uAvjGBr8iSaQ1nziVUVKAxA366gWBTR9zj1g9E5fv5bDQDsW9d7ZQyBNbVe5UsGaPbdms5T9JkDg9ngsuSFcup8",
  "key10": "2gyZwpf77XoRvBxvKcEPkE9rKzhFRqYCHcnviHLoUzKvWWYD5tVELDgtdZ5NN3iTk6vGs6ErLwsaBrQvGt1WS4hc",
  "key11": "2r6wP98qN929f6JYTDuWmsvW6JL63kFjbjTDGpA1uW1CuuCEiLRvqHQvJDTemhjyPXqcjwJn9iSuM1uD8HsEzsEc",
  "key12": "v6aSPecR91tEWEDt91gFDNLUbawF7EywkxwMwYA6aH8P4UroGhjs7vna4Qc6s8Lxsi6WRJwih6bypAmPSkt4Lin",
  "key13": "cRPu8TAS5BUkSt39GMpLZToMUM4hobJVpMmCBobfYTPPK1aSef8DAWDH86Ay8W6uRzVn1ZgHFKzoyECHKC75MLW",
  "key14": "QtpgBgGKydKSSGbEf4jPAwZXbXAgvumSodEQiU27C9koFBhEAvjRePKTUYVvKKBMF9HnfoKhco272gLs9QsNgHp",
  "key15": "398xhqbkb7tYkBXvjtKNobn6ERYbSgvfWXQuxuMvQkgf4AFTT2fQaV4edG9KkFJF7z7tyA9Njj6yrymSzfAbhTmC",
  "key16": "3JH6p1QQDeDcCKW5AxWXKg9FwsDey1zKwhXjnMtRza8zpwNFQpUdkWcoxwepxgbfVhTNvuozP4WVbZtcDfG5n5Bh",
  "key17": "4dAm6DUyKRa7N7AQamASTatddzdifzH6gyozZNgmtk8B1QvSjh18CUBVA7whC3nCSfq2KRe52dnZRbxfLTk2AeUr",
  "key18": "Y3zzwkSmfYX7tgaZCVHekaSdERMrcp6DTHuC6fHMs9dLAcHmH88phpbvn4HT3huM921BPVZ7hGn8vkkXQZNLq2r",
  "key19": "4k35ZGS3SgFXxNrYdHydvqwJs9LShjz7zAasqPPmLss72wkuzvrsr4eVmUe4GCMAh7Y6JEZsvHQtrZbwy69t6wXu",
  "key20": "5gCH6sDwRdtkq8kvdX8Vm2VkDFWPuUAsmZvYGRNkxv4c5MBetLxZuuYNfiePrEVU9z9qD9rPYKVLQXFa5mPLrVPz",
  "key21": "3mBKDMKHpkCheDwteDs7Ay58VcWbHp5RfT9yoMDQAPM8KBALsmttDfov9jXLAygVgACGW8SSQfUCNCxx3x6naikL",
  "key22": "2fUe9f3ZgY28FiEtQJEP1f9L2mxZwoe5HgfTQDfyhvQKMvfAVrmKwELvijfEcMnqxBb4zFFRcc2f1KwhREyKpSAH",
  "key23": "52rv7aw6YRhnC5Aqueh9aCd65zvR3LTNDUsGQ9YbG1gdpymd31RHcBQp9jDvarnAQy2Jp4Jz6tMkMVNzUMghxQD9",
  "key24": "afoJBSHP59CiB9Jbqhraek8FzhcgnPxPnq9E4ZPEhxofTxwDNpNoQ8Wb5tMQWc6TZjHd3aBbs5YQzsnz7NXcneA",
  "key25": "496Zv3U8TtHLjHe6FhWUig9QRR53GSk3A6fJRZ59EJ5JXJVmk3V32Ez4cTdeXvWT3rvJpLyGN4PYDSajvtug2tsw",
  "key26": "4h29GAz8Ycdu8nQCTxCTqdWBh9MLh6phWFKSmtQ47VKGntsEwvEoQBcuML3BfngR4n3jbQPNW68gPMUJ3FSgXgU6",
  "key27": "2hXAKkN3Jgea7qWgHAiugjsLRSLm1kgVjybG9et2xdqVhbcSxS3Wf9yg8jSWzrafncqCcsYbb9qMS97FZn4C1AeU",
  "key28": "5PXnoC7g8PJV9Z7dqaFyrSNYRJwnpzGC7SVwsdcNvQVVL9HVYrDt8jr6t99GwYPz917yGc3yFSzbRCzSqXxpoBc7",
  "key29": "4dnJNzqnG5XyFhX5rw6REcZgggDRZdVNvJjKyXTx8H88yypDs8m3ZUdb6U3tqcD62iiRSsXGHSGdgkUfjN5Eq22s",
  "key30": "5zX2yyDZqD9nP2d7m6LEobcmUHMsfSJz4BhrjjCV34snC1W11oRwqaK1VoQU7sZyhknRcv4NNZ8hqLnTRJySkNSa",
  "key31": "4C2RDfhR39syLw8z5bkSDhnAKUuaHmzALYm9d4k3Bk79ESLYF3p2JTzMsTUymgP34D43DjW4SJtsxMqUYZbFKttg",
  "key32": "2zoJ2SWgYShuMy9g44fQbN1jMw4ZvMqMVFPLwx7PYdGdb5judxA6K54yJjUEUbcyX3HhHQbHhMgVtcsKkNYC3YWk",
  "key33": "faR2jknULmXWS6vgbsd4pRYkz4z5ntG4NdE5pYSmv69qKgQp62pxQK6LmBSqKi2PF3KkGQpQJEXnHnpTgabRCR1",
  "key34": "3dyW54JRqszwx3XMhXnnP1ZMCNx5ueJ38cmCAhGdJrbL8o4ntBAAEjUBuAazpC2quxSSudd7u3WTdBBmaU3mCBP7",
  "key35": "9ZgeTL7a81wKKgcY1FEUAVAcFywd82HDpki5xTUfZNAAiRJsQteFXfsXXTD3ECUaKo5hztRCGCfMiyvq7U5EC49",
  "key36": "4LPYQu6zAFNmPZMjd68Rt1yWP9b6vWShNzhb6wxcbHGe3wj2VStuGNunQ4KtzpWBBkHxHKt5mwmXDk3mxLhkhqUJ",
  "key37": "4hSg88GAKHNoQ8fa1W2SfTJm2ucsQ5AkyFixovFSrdfk2cXmuFTFWzQoxBSRcg1nmCyVdfZMJcrk9NHp46ZE2PQg",
  "key38": "2PE2fNwxpg6J1SoSJdaPfSs7PutkhADZGSAEyvXUfgKMkdUTgdpXgvMBXfUJdaEWTXfHoKcsCooGTovjve7Fd68T",
  "key39": "2C41nuECaSmTiBLtsDqhZ3gFXmFjg8smD2pf6a2NAbQgDazoZzFn6YTo6cADMdUf5YeQhT9pWZr9oUTnNTMGCgnL",
  "key40": "3TfAft84FkQuVbDRN1JK5DiUA17sgMNh6Qer5WA1RdwCr5ak7FXhjByojCzhdv9RBLNBRA1VtqaDzkXaKTVefgaY",
  "key41": "dedMR7X4dSNkXS1JCJzBwwG5h3GoFTCsA4rdRYVjjdqaX6vyxrbToVKXUAK9uu48mL8AcbJcA9rydLmJbh5USKb",
  "key42": "4ZP2Gr1N2bPZ6X659hJjhb52uHmCXZS2XQgmeC4XoVCzaMu7veMtPVfuG8Zmqkt9bC81BRfEfiSkVUvi8SuU52oh",
  "key43": "58Gm1opeTcTFpWtsJedDCE2Gk9y2UUwvWMwcctVTY2M3JyjUvrtC9vN5UEwjdziDA7kUtZKTg6FaSsfCtNc6Vn7W"
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
