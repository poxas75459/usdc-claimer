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
    "2UPBSbgjbRwHWXqrFsWntjRoVVi7Gf5gwTpUBcfjd1BVoYnPNjY4725vz4c3MfRBQJx2zTFUE1Te9Aoqbju8L388"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xt9pCpoyACAWGG32uX5nV8fr6BK6uvtPBPnjPNMnn2ZK8bTsjzLoHVe3A8q2jRouQMN4fGk751PtCMrMThoPxXW",
  "key1": "4BMUZ4zdn1BZ4gs9NszixxLdhHyATMHCdkqzHjXxt23yQk8ynWpG19NJMK1jveAUiGwbN7VtmEYZLx5TiXppSFhM",
  "key2": "2YHM4zPEStbB4y18dhuShcKdL5N9KimEurJmtFvRnVqv6QXAJXgBtkHAiM2cNQz4xNW81HCMXxVkY9zPxMBcMAVW",
  "key3": "4cUyCs45Nx6BuNgchhwCrascT3ERcpmNceApCcpavX1XFmZtzhp3LHNgkW1qmAU2CFRbKNuoMiRodFbFG2ARYNT9",
  "key4": "4gE41axfBUmz6itc93t1LtryewUWb5JzYQzBZ6JjmEWHqD2QUPzSiBysjZygJ5Mu1GtxDH2AECiVNmPHoCBDRxDC",
  "key5": "UBgkdzEmTawHJfFqKzfVooBXgrQnGFY8qMvUk7CFWfvp24SE1NMYyTPPJ6rhbhkXUzoQ6g5QKgQLnAKb71mkruk",
  "key6": "hjt4zRRCQkj6UfXKFPhQyfXFnfu3GohJTddNLdoaqWkANZZXbQpPHrZt2mS41hBfAF1Tzx8xQZ6esjzZQATSEvX",
  "key7": "EacwTp9GHXcTyHBV67RyTNkLHS8j2QJVHoiWvvJ7koZTP1yawigkksGfREjzWXcvnYui4RcFz7rQjWnwmo3xeiP",
  "key8": "HQLVF3Q1NQsxvWRvYqB436rSjQ1BzxdapQRub9bqzAKfcDPrpZiNs1c6NXB3o5R3rqpUPfu8VW2rTPLyLRfQGDn",
  "key9": "5SPnt2h8MX9GQaL3bLxrmLfwnJx5QYJUBxoC6oSbVjoSJSovJ6kMVc3PMLJoGFshjSXWbuC8FXhSyMCC2Q4psikp",
  "key10": "4Fb1ajgcYmnJdDk7XPdi5mtprUUCbYpZKgo1VZXw6CQ8cZTQBjC1GeVARfaxiNfMefWoeBTRPZegRbg8GMzFrULu",
  "key11": "HNPMvFyLMzcoz6Qy1ztgncHwxTxsQpBKE3x9oEpPauJXLoscKLPVJ1GkYjhEZa9HCTgSsfgfnUWUQyFW3pRF32A",
  "key12": "WooqVEQwqLNokAv2F87h4WwB24DadvCg1NDYfM3EsAzL6dL1duP8Bj2APzcCKhWfDsiffoBNRsR6GXZyhiSPKiB",
  "key13": "pZDJSejXWMbAz92ZwBE9Cx6sotEhk3Guaq2zYDcQoczrgLpUKCEzgqeCbTDHX6KqCxxYtezca1gsPcfpriftStF",
  "key14": "63gVHyqoCw11W8tSBufZJwQcHeTjxSK5P7YJ8Zrg59kaxMMNtBu8t5L5NL4XwjJxS9kj9wM3YKJg7CcrgcpHY1ev",
  "key15": "EKKxGnyidYd4bADx8Eo2P5sab55TrxpXcsTzafPDHToyL5iVzk7WCJTxEbbiCYJqqrPpNmsetdG9v2R1WfPrhMw",
  "key16": "z4Qn9NhwvUkt5VzwGhqU7TBHWBkxw8s6zSwSSH1B12RFkg3TB6iqgu2NSh16fPiLgjBGmfK3JHg5SLTewjffnDz",
  "key17": "7uwrV7kFR57MCknT2v46e2EfNwRWUdxuocUsqd2zSDR6s2uBAyUTM8nkammRMiJNZCg8M3iSC4YWFjXcyzXTcV3",
  "key18": "3caH4hU5HqM9DFAcv8fLoqY1zqE124YobgSGNp6WeY3nvakXYiaWr34mg6A7UrPM665KdT1WvQzMpYQzruE2GULa",
  "key19": "5VdmHNjYVxst4b1iSmj5H8CW9TEZDFWZBvmdkgVJEs5fF4gt6AHucVyPeKoa4nJuHZfpjzpsxLzWd5gxxp6Foqvx",
  "key20": "qetgCgpTbWuS79GVyS68mEuLk3CJCinLEJhuqB2oWs9yVtmk8noQ2KLPZV4GXHKxuYUwJqp5kXjb9KSotmZD6Ws",
  "key21": "3ZwcPR386F9MoMw3pMjtK4EGF2mPiUjp3LzgKm1pp1AvUYzLLZ43v74EZHtbzP2Sq6aYmG1YcpPazojn3Tw3kbi5",
  "key22": "BaxqpviraYN3Jf9P1HugUcagzAdKVyDTL6xkVKEWeUuu2g9NLgu2W22Pvwva3qwxG1xrzhMsnqXuSWiK4jjMzRi",
  "key23": "2pwYKKuRpGwQLLSnmZ4tEdKYJCG7i1VrQNp8qKXmqYZAkJFazQ8tohbXCx9RowxQ5uXXKP3T59qAKi2HDdBJpDXk",
  "key24": "291dXoXYkTxjwt7kz66UW8QMipoddVS2hQZ7DDpjftgkHTBLQhaTTmhg3MsNy2yAhQP6GrEgTcjaeRZUc9ef3D4n",
  "key25": "64Ax5sE7zdeWF1cSQVgiP1WduDzcoixJY4dcdZoskW9mRhpA4XAD3XMXeuzL7SmpXQXTD8WjuVWppZSGxFC6oYXN",
  "key26": "3XaVZ59eSpz1N12KUrARdzMdQyf1rhpG4j8hRzhbFK6V6ay8joPxy8cMXJ3ZjnQhffMijM1HLYdQUkry3V8pQ1j",
  "key27": "5MhfnwPvtW2sWYuRPTVp4NY81EEV8AGGB5yDqNcZ3W7gwxPHFkL5RJ59S8F7VshbawDWGBGnqxYKPmGaDGfem8H8",
  "key28": "RcTtthW1gngwKc4DTVq2bBsa6PUXxU8W1352mU5XrZsPjUDqP6ZfhqZ8i8k1QyWuPfHekbYWfZAmGSEgEvJ9Rbx",
  "key29": "2AADF2fPNtEEYNWijYJLCaNhToPUtQkk1UngnsybAhsEgsQekztoMXzCH26DNY9HbTm7LYo2j29bmBAFa9KVYqyz",
  "key30": "35AUdL9SnNFsY6NqWfm5MTz8QX2myxR6sAC7gxgu8Xwko2frp4nKM2z6ivpWhKyCCg1rLaCZdZ4sBnEDxNMmtZ76",
  "key31": "59Qb9dEdxHZxgGRA7cVFLYqVKfkYTAcYMQSphRTRdk2ZykfLx2xbFR1HCEFYt5ToVYRDcrdnvErMYFD4ax9Ut3Xj",
  "key32": "3nELSP48dcFru1BQELckTszUsDftKhFabdEK6aqxki9LbfZ926ozkezbrUt9PTSKGNc4n39NiLt5zjNW7UubwwCg",
  "key33": "2HWPLgWuHCZAZDAb49CmmkWXAQeVTB3Jttn4jRYLk1jfi6kyWstnvrncESU5pciUCEYkrHH8SDLLReMREYgfqtR4",
  "key34": "5ns8b6FkcFbkTKVnh3Fa37SMYUkcM5QCXz8DdnXzdTv8iJSq7ytTdGdZECPNBrww4Erdo6hv9anCcBFEAnCFzHd3",
  "key35": "3HJViESqgMf9Qi4t6bii3EQp56BW9MGTV39fV95KH8hPMT6wbZTEJQDa1msHnRfJSCF6JvF21UM6X6Rqa4ZopwUL",
  "key36": "4oKrgjBskUEA5w5x9GKXnJ5nGAkZ2sSGsVN24thN85BeNvxEUp4MyUstqN5qH1m5SkVSGSXvhZc3sVyJh2o5u3QB",
  "key37": "4Se65p4mbnxLBbN7bd4GFuN7yHnxbHaXPsnJPZeR5HRRcYyGTN5HZFeMhtGdL6WunZ7q786ZXHsg59B3agqQ2mLe",
  "key38": "2vc7MCzu8AxUkLbLhRxB1wyddGoUutfmfAwCkCL5tyMXET5YTufaETG57oqZA1SomLbscEgd1W9vE7j2wwoswdoh",
  "key39": "5M5mE4M3VQ451z9yS3BS1v5VK1Xjt8iFcYoPDt5mUS7rt66azpNnaevPRybH6rN3q8x3QJ4Jg52L44pyeh1cFTgM",
  "key40": "Tp2MmMXPz6pcxpjUqHR9kRmW5YrFGsCHDXTLrnBfWzYyLcqQAX8wZoLHobtUwRG5iyY6bHkAzUaJGcxb7UguxsE",
  "key41": "2w3HhQUj4cXQqVRhwgCgAg5A9XNedL7GzYVfayCFtQAXWsPPRDugfMJs7P9hBC6rAQPKRWT2E4Cg7hsQxkvKs1Uq",
  "key42": "3pD6CSk6zThR4oQZZ988geWbbobEUsUMh7RDke8QWM62cUYVphq9x1PjJSQGm8aE8ZqAvMUfHSWAADCK5ju6udhG",
  "key43": "532CL6MmpJX7x7VkMGAtEkHrwEoVrLshJzEAh1k4KHPH7KPcq2Ja7FCEUSvApvWwG9UiCnH3pViCQCJ7RuPr9Vos",
  "key44": "4m2f4B9FGC7Era12rjQnsoWbTBUKc5rje18G17v1gqLS57PY2NDPNP7Jh4VmQdGEdJJejnxVDkQcXq2Jb7nQN9Mm",
  "key45": "4qfC7fByB3fTt1oKg2g5ZsWsKNZ3hwtfNBokPk1UMrzCxqPzVek7rB8quHJKV52AhnjmrSCe7E7cWgspZcZPkQ38"
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
