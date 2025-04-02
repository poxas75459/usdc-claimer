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
    "2cxReqmyAnTRav79sJVa3m4rHieasDYAHPFHbzbAZ1qE1VEJgCrAS1vdL2dnhFY5jroc1sReePNcn1obERWoyXRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdFU57CDJEhSQ5ngEkjUv1VhE3UvcpeFJ5iNoJbipMDd9fiNMNocdrANUKo8mHS2rcf3vcdnQxfWdDpzoLPzTrC",
  "key1": "kd3pN9DiWzFcF3VgMT5BdRJMHohzWNqR4RQiQ2Mtn86Xe81RQqTS352Jmeyj3h9rXRgej42xFMbjQVLaPSTmNH7",
  "key2": "3v5SxxW6PLTi4VR5BkSRKmhB4yStm7kLpdGVHHGZTUcgWzezMoBGbdarcsAZvFKxgG8Tz6vADBEiSJZk5dmLzeDt",
  "key3": "36HB9oBHwD5L7oxVBkHVTfgsPXndAAB1cPBwPd7EX35w3NhRC5zicHRo6r6q9XDxoEJwUQ8Vwz9GArU8q9fX663w",
  "key4": "N1WCyP3oa9PokaMQTq3qAXXJ8HSe5pyDYho9SG22hNGpSLtC9f2oVFW9JkRDk2sDE8yvffip2zgqzBi4QYdq1Rq",
  "key5": "2wHwxDaFscFX2B8k2EJtPDn4dAhZt8uRgN2e9iK9gMr8ZYiWuZewatUJ3qa1YawZ4LhMXydFVt6xppFX7dEMbAYp",
  "key6": "52F6z71Rmoah91S4zzGskSf9iiENHPYq8F5qDGBa6sgpHKYLQZkU517NRyZby38pi9BC9GGmjRufFBgKVjw1f2KY",
  "key7": "Ucv3JXsUv5KsFheR84qDZcxBHJwNL4dYW6r9JjW9WNNrDUNszYTyQzfgMnXZigDFBgFgmHvA1nBh8FFNNJcvAWd",
  "key8": "5KxvP2MA8dezdp1duxHdN8RmRH4kocgMTViA619SkuCNBBVP9TvA1Eipa8MXD4fTeW1UhuwWKW2GSqdPC3EMxANg",
  "key9": "3HotBsv3fjjAoeUYnqE9VooDiqvPZ4ERnWiVCfmwhm2JgDi69k9VCpjgNBv7H4hQzrgyu5y8VEYboG9qy4bDJBFL",
  "key10": "2aTsVrun2pS7WDH3mRtz9JPT1fAvCg47DV5NGYS5ki6gSAbjK3xeCv9hcecqSmXwGSXfbcg6hwij7dZtA2PY5vaq",
  "key11": "qmXuHTkMJAj2y2XV2TRh5cADBRBFdTjvghB8ByND2Rk1mrqzkPxd1iN2ewdhVvqShgkPNvkF95d97H4yUbhTFGW",
  "key12": "5bT2jnKFJG5yvYfTxBYab9C4Vcgz48axHTapfYUY6FvXA47W7xVHAwzu88RECvvQJuCitRiX7iHDYsH9G2Uy6Re1",
  "key13": "2NSWh2eTFKAkksbourMCy2FQ9DU1tD6yHK3j3DGtD3t9cVQtpKfXhH5vMgThHqsxTqsyd2RVp92S5pEQSGT9EHEH",
  "key14": "5ziJL6xbiUVZ7Bxe77nwf9i3kxTdJmtzLLWyQXH1V9tfPQvPayn2twHeKdL1w22HEZTTs7XrDDK6r6ABYirzsjbZ",
  "key15": "3v8ERgfyea44iWf6h39aoowiLg5KNsAgmE7DykxSWJaCbg5zyaTM5QBPYq2vN5v7syA5pTurLY9RUScUKiMDcUZX",
  "key16": "4k31XeQAFsaMqjZKgs88TQsbcBiRATvXfydwxKoG3HLFUSfKBukNjWDRXL1wH6SdFR8XZBazVdehL5bfPtGkMPxP",
  "key17": "4UVigGEyJTTZMVfRvW5NTqxcQKcMUAM8yPiLfW3gT3Vao5cqo3KM2mYzAfmmwNPUkXM8Hv9YDfzvjX61sZo6dtRD",
  "key18": "44YHjDdN1RkyG7iL1jPJCj8gNvGQuN4wV6o7xDh8QueA8eA5zFMfeTaNk8bn1qdaD8d5Z4s3oUfiqyZUfSGUyCTx",
  "key19": "2YWtbjUaGHGnF6PyMTqLuqpDPwRv7QjZQ3Vocpdigo5uuSrhkriEbd3JA9aMrHxJSenxWcdipaggJrHa9Rrgc9LE",
  "key20": "2aDb3TQWcznYbLpwYyEhDrcrVeyqZar36jFameFk5KnnM68GfpesTQ498K1VtpEMHsgAJGDkCgotLQ6ghpKcCnGs",
  "key21": "5DMxSziC5buaGhGSNX3fdHkrET2n5Kx2NU5TVMgmK46qUiad1nWiwsDLQYvQjsgzMin5yjxMaz6ru9FBunRdCTiK",
  "key22": "5rU6NYssVUYx2GVqPTGdH5S6iVMHJW1Rx9MgmFmtZL2TXbQsNcNosckuH7jFQdRW78XywMLFsracuxBPcFhEruLH",
  "key23": "2x2FRic76knjts7UTSXzR7SWEA21bDdAkMwjW7Mkwr3vg7Wc829m2d6nMtVS1AuejtTB7evMbHndy6nax9cm8C9u",
  "key24": "45FDNdToy6qZmugTM7E1E7zLj2bmNfJY2UqstyJ4HoqvzjKcgNTK4h9B9vvvc3d4E76MzzJ5EiPD9wQkTXGBBVv4",
  "key25": "YDZuxcHWMXVCC6SJoxWqaZc5vH32RtkY7mQKaGnk5hPFz4R2LNncnvUfXJzxErCwrkLWbsBEbDuuat5ifUZ6h61",
  "key26": "3ZGoGvkTVBcZ8brSrgrrXELvUHYUFzrZ3ezyqZ18n6qgcedwAMgKvQA6Qhk4CxruniB9epqE5jh9DsTEtZY68DLD",
  "key27": "65SDJrNfDzGwLeJ48kMZF1wRsn8fD7dUx96gBu3RbpgA2r7vNvx9RZX5KuHim3ujCJybia64QbCZMtJAH16YoAw9",
  "key28": "4kp6mcCaFbBfMMnjRsL5TZiJLoKosBGTMhYoqebyRw2tPpivXkj6eSbFfvyehYU1mFYa1NC8iwkjaRAHKWpm9BXH",
  "key29": "4aHN8vtNPG2ifCboaErHqcHgqCqkXjV9nUDVMSuHEMNaezuCcLTMaLMKug3VzSpq3NDruaAKcQVbPwVMrmVu9XQe",
  "key30": "3RzdmSt1irtwL15fTn1bfrXQw6adVKSAARh76Max61FWBNDZpMse3N66vFnFUUNKMgGEgEgmqgxxxmMzd3w5XVXr",
  "key31": "67rKXzrPsoEvoeYrne62YdR1pC4wVigJzTsTgc7uCBsC8eChVKc4im563JMreHDfL6PtApGuUN4pdvFkh11QJ8wF",
  "key32": "5jj8zzvv8vMQk5VXUCaZHQYW7yBQwuN2QtoVkMwnP5SaLXuAeAGmdPzVrAcd7rT9WEKyM2qFYajFUSmD9XhubXHn",
  "key33": "2F48i6y6uqjMWWFHeJntwiUVjdnKEhCxUj9Pr1ZUB1Nyii7StzFX8ieHcNDa1iGyqRwvFpWr1aPk1tFZfjVdyXHD",
  "key34": "5obnw1JWshEep7ufyGX79ApjWtz35fBmkhkuiDrD4fGpnge8AoGfN6oVtWEkcsJP4XQtCbMVMVcopN2BKwtns29w",
  "key35": "2P94toYCVL49kR7s2r9tUr4ihS6NQC78r1N96A4z6WPHVJ681BSc5Kw3C8vsgkkBXpmmWPg6SkQ85WojWfTyz6uB",
  "key36": "aauooNbS1QhXxjvXvFLbo32UspDMmchacuQ8psNVBZwwvvDWvJobvWyT8KzA8YFGipunQPfU5sENtqhnqbTvWhY",
  "key37": "hffVAvAdewYM1vSHuWBeQpbxqVZy7vA2pUjLdD6B4fT72JJshKQVfSZmFwQ5EJqQShyFgiDoTNAAoRUCSPR2w5m",
  "key38": "5JZCgcrKwJby6TnkRxsU5wvEvBj2pewxPhnDMgSCq7CU87CbcbDcS7WWksrWFoioHySNESf6YLTyJCeoPVRYh62A",
  "key39": "6474T1Ua2ze3y5sueUHcVYY9AJDB4dop3Jj6robyvgS2eg1a43R7zRT8zkv9yaD27ffJk7TFiUzmgW41WrhvJkXt",
  "key40": "X9L6h6ZuuLmwnpjPQgL2F5ZCuc63A5azNp1YnsFjuKHhUXH9uiuPi89GwokkgyT8yxDfwQjKxgqTwdWBy4Z5khc",
  "key41": "5hLzCP1BuE3KPVKDLc8Wa8eA9H8ohWcXrq3iHuHx2iaCdiVTmVZwdLezjHZpr63RuJ8DotRdm8GSDdvQeSH6Vspu",
  "key42": "2gwAKf2HpTFeLDFhxADotAooBMhboU1sex6jCssFbTnVN1TxRt285JfGEKjYsexdfZhcmejn2tbsu6yvv3EPCGUk"
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
