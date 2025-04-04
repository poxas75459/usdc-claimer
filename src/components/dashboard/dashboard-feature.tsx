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
    "CDqwgsLkBf1LhFh71LqGvMcBxS5Kq6s8LHRk7FzaG4jEKGwXDoyUxt1oPkLwYcsnZbWbsUj5eUeAwqYWWNmrjE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nf2r2fQzSSAnnhWFFFcn8KczH6Jbph5ebmEqEok4Yy7ufkiV2ahFhTLNGxbWEzzg8ef7Kmp8AkrhLoDUnGxnd9D",
  "key1": "GtaJkXjErDZd5NFbDUAgQe116nYawJurQXcMPFufctchu8h6Ka37eq96hgEMcZVmtXt9S92CEPQxtC8J8AKYGyc",
  "key2": "r9o5ZPkJGN6y5khrgGt6XbEne3zjjKqDx3saMg8Cz4FGszYYa5zYd6oiX2M2WGLYwEMueAwdicRmDmgv2crMVAm",
  "key3": "3uzZXJsi6TFirEWQhT8SgkDaZv5G2QEmDt1rTgwZ884HkMJ8k29JRMhfvi2qpsETik35YQvKQVph2L8sn3xgXYrB",
  "key4": "47RTmDVB7qVodZWXSxLGNFgRiVvkeFBr5DFEWKGFf4HxTajbxi4CwVwskTk87jQ29yLPQHRm7cnF87PiQNDvoxKs",
  "key5": "2Xvp8XnwsKbD657LPQkA8xQWyXeKK7fFBr2dJrgn3NwFMZd98ef73UN4U9qW15hrZiBfeHq353ktN8ceVJpteSc2",
  "key6": "2uJcsRpTKZ2aTo3ohCgb8wv9NMx6fGBniYpp9mzA6iCEZqZZxkZcTF5P21sDDd9dGu4uAcpVtwnuSvSQXNN4e7N",
  "key7": "4UPPvdcvx7m2FnAi9rJ1zR2aDYyMRnMwtearkwmjsLdLJGU9MFJp1aqdGc9v8vMUJJyfdJ6GaqqTYyTyzvbpZNGK",
  "key8": "4kq8KGNWeJFspKbx8eXLCL2KGpYwWy6NNxpFxJX4AiN3G7xQ78WV573qUsZ1nbYQvjLj2kDunjWmoxmxZCHxTksL",
  "key9": "5sk1czQGntsdxoDJoEokSPY2CDEGk1WSUPfmaYw2gzzXyCqHnMjVy9JdsC1H9Tdri769YfcsbVHYGpsF2QUu9cXZ",
  "key10": "fJoqn1GTeC5MayBqTuXBuZ52eWTPLguL8UPXhrpJeB35WC2ToNHY4e8PXmjyf388W1Jas1KGU42n6VSxRd1n8Ad",
  "key11": "3ms2g15ZA1Z7kGpstyVcfcHLkEdWcnWFRkQ3tzV2LEq4ZiT9cUBnTYyWrf29wobzfMkaTtpCffXb64TYUKeuoBQ4",
  "key12": "2vJPCBujeH2B3mbuKQ9dj1N6imyUSPrYUkfPTM5x1zgB9ntwScwzH26r9nXgr1kdC7iqNRxAY7rFZ19dE73qMdjB",
  "key13": "51zbWo1p5tZW1Lry7kC1TTR2fo7C7JLbXnq6ukp2HGzGSewcz3yaAhy9Km8o69rBc64fq91qPjbsmVPAZDePLy8X",
  "key14": "4LWRzHjDzjYuuhh49WtwfC4XuhZYwQmL4odChdTEX2ovnhLXdBsBGvNrEsL5vxjw84vf5QhhfcPfzJcyFPpfLoxt",
  "key15": "Dwqh4ASxysyzy7nUCTo3EWxYJCANwciA9wgTyYPu7MRtiH9xuTHHFLRW7MS4h4Mubahz1rgtHPtvS8YAWE38PET",
  "key16": "3objiiHYShtBe1EftdvRF77qQkUKhYrD5BU5CvLTFSTkp92VpuVrGBzfPpSJNtZG4UMdCXsNLgNAHtQgiEHzrxz4",
  "key17": "PSCKQtAhLBaRKQAK4pMFjEhYzrEgwfr2k9Qofq8dfXopPwZzZMw7zJqpEbbxkmhWgk3nJzGoh51GeX3D26pcfSB",
  "key18": "233uFLw5EGkitZohiKfxh5NqFGx9RNKLFdJHCwShyVQCP3X7zmXKgVMKqAfjfndcDFWFtXeFNKK72CoNWzmQ7Tsr",
  "key19": "38WqDUZywKjviwkRi5kPmzYhsFZkta6mKdpEvmiefhgRfwBifcA29iqzuV3Xr5jU4YHRUDfzTz42RV2A5CtYTQkX",
  "key20": "3x9q86ChKvWrg2GuHJjSSgvHoSoAuKBUyxBnTwcQV3ZFEpMCfrwsT9JxAU6BFL4kTNwpA7RgPKdpYA2jSQjqGR3o",
  "key21": "5h29SimvBYFzumZAf9gxmkyvevZBkPyp9Sy1c5Ln426hh4D6tGopsD649ApmNnNyVTGrP93jfSHdfshajEhmQTN9",
  "key22": "5y9RYM3Xyn9M9hSzw61Jc4C7wWpGgTT1nvvGB2EmgjcqKdaXJWUoWcxpayv7QEtyeCw69JfpwGZh5QJaLSFMfAvF",
  "key23": "2S2HCij2eQyXgwPBn3C3mDMLL1XpP6pFMpNdeqe69rGhCRRn8VckNdtsNkH8hyM4P8ZyWakWhafq6gwVaf8sLzbK",
  "key24": "4wBKWyXMuWkFFHaWTdHCNeGNHdffMrKcYVi8rMxejBftHciT1fHnT74RRiSnzLRW42tmpGTtojQvEn8qoNCGUG2C",
  "key25": "4x2Lh2yzihUeMAhBd5YdUBVrZ2AxKgwa99QTKwf4jou8PS8kwgL5cE7M6N5Tz4Hbbej8Eeivt4JovPq8e8wshvt6",
  "key26": "3kHRj3Ny2Np2Mg52z4M3vVcU4Vs9zXfW2AhD1T1waR9FLmAwuuQV8wcPS9NjZQ32XqaNtokbGgWFmrczanNxZUJn",
  "key27": "4n6oAiczALA2vxwrr5bJi7UNXrJpRfz1ezm2SpyF9wPeDsVfjyWW9iacXWgbqvKHD73axTQPf5qt9UvKNrReDSQk",
  "key28": "5E3HcEsfA9NURRDJbg8su7FyuSFvhb9Sy2VChbXxyLxSYjCMjY3FTYMM4wk7anmiJDvGLVCoBnRRQjiCvQsGZc2L",
  "key29": "4n1pHPxjhZHuDnxSd6pzThfBeukxhrLzvEp7xg4bqjMq4t2W3TCRhmCmbiG2bmtKeoceDgBECRB6ogjeJzd2P9t4",
  "key30": "4Nv4vePvNCAnKjDt1hzEeGJM82v89sy7gLbN92kqMTNSZKwoZHwG5uNQkMXiYsWTAtVaNaUEUwt5JVWCZL5Pc5gM",
  "key31": "4KJ6TNxHcdkdX5i9ZY6JFEqWbPf6HB2geDqAPDnSxJAaCtmQ44PidPMJGUATebymcfkYmWSYqjZnTyfnswVqDdzX",
  "key32": "3Fi3umDLy7hYWmWGbk1CKx2vt4TLaWJG3FHU2k41vmxrrkLMzkVuUytYYjCen9HthAaqUt1RUcG3VWt3pvpBgLpk",
  "key33": "5US9XPH2sBRjA3iyWkEXXbvBuAESRjSsty4QF52gfHbrPbrjv5WZdiJ1WKgXGYTLWZhfbwJQvgkrnnj5KNy53Et9",
  "key34": "4a514rZoc6HioCzoSr2zF8wt8ZPrX9bVQUeLoG3xZ3Lxqts6a527rYpraHWV86UN1cYGacBaRNjfjok92iKzJfLX",
  "key35": "5Tam93hr1gn7QS9416J6gbsmfMoEvomsVUkh6h6EP3cN3n8zKA3uBjuBaLNyWeJ6TQCddj1VXC4GzX59Dzc3GqQP",
  "key36": "2DBJUbmqKsKiAkYq9w9iT1MGvDZjMh174zwLsriSkXaVyMZfdujK8BiRFbpdA4YWkDGW61UuCKgrEX7mEvZsWxiV",
  "key37": "2XuQ8Ps7bUPSim4suN4Q3kVE9oQQmyqcKMQxwvJsitB5rGpyDQt2jBCneZgqVQauLW9NErANp3RceUGeQ2XBEEFG",
  "key38": "5mkyTim639KzHcYemSthoU8NC1DSPaEcUJKtja87b25ytog4ZTr92f35S1YHWa6VEsDP5gW7PshRVegkxgEgKBzZ",
  "key39": "3EQfybTEjWUBbgnhvoBZvfmnFYnkXUr3NBMva4z4fMgGzh7hT1v45jxs5ovZ2DmjpE3JV2N7YgAyqE7R4kHszGW4",
  "key40": "5qsZWb1Wm5muYhVqgj6DobY6QkW5rBaHeJ8n4GrYn15KfctscSRdi66pGvG6Wn26LmiZRxbiAYU4NTFqec2BwK84",
  "key41": "5Y5RfxDirJvisbhhbiP6DrehQ5gXNux7XmhU2MW7PPQ4V44rdZqutmpc1f3L41or6mbyAwHg6skfp3K5wHGWhP8c"
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
