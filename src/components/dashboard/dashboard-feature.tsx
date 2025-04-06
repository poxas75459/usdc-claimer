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
    "hhV4QLUxvg5Er1i7XCCiKLD72azBV2ij4XZ1VSF9XF7XPmyxssYPTR8Uss2Stw6NM5gZEV4uDcnHVx87nwrENwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UNMfSBTM7agV535YPNwFpN8isTVwWiGsMCrTa6BeMtyt177jM54iZjESFXPP3oJkb425LSmUVYoPRmpAhgKZuiP",
  "key1": "3YMXWfsnPQtkjjRiJhduJ1fVEWAV6FBTN41QDD3V1nfXgeKKAyVK5kaisGZEWTTDt1xrBcBXDCV4JF4Fy6JcGG3B",
  "key2": "51x46gETSqZqXVfUHAef4rrxM7tU8MMqkkAtyyi3Eufpes1PaoHLF21ecELPmXUvSEMLPbe1MnswYHQrpCrvxjD5",
  "key3": "7E84yJoGvn4pNET9ko44CudxqoAtAX6gJUAhYACEHqATfz3LdYAzaGpCvgP5pBY7pJFy6YAeawUAoRynraLdsrn",
  "key4": "4euvNSvpqR6Q18CgmmwY6D7RXSwUhiWM3VVJCSiP4ovSv9WWBFRUh2mE9GFEbwKLxxtFr4hKt4xwet7rrt9zjwHp",
  "key5": "5suPwgg7eVuvdQ9haeA4exRD8PgykymtiaS79c7xtVA2kjNKBgRPkNJCpC2dAdGewBjc4xgQuMTJkGbB5VmuWZoo",
  "key6": "53zy8APxj2EqktxwvnYkCZzTmH7FCccm2Vi5PPWtgrrG8Qv7iecuGXJp7oxv4rF2xavxw7D6Bvc5x3Rhd2Nftmzj",
  "key7": "5peg8UxeXW69MdBVaPrbekCn5Pf7gzzyZefsQzqQ16XoCeYcRHfBuBcKuPCehYmHjvnwnKwZGHBtbBtEk9xBj1Kd",
  "key8": "2VZcGi7hGit4nmyRnmFYW8NFyziZQCfDZfUDXEEU4LAZ1rzxtiZJjtKo3iRENVrVWQXzYKp9FRephZVPTQJJnHYX",
  "key9": "5m2eg957QzqEqssct471z9AbT98A7ytwPt7KKp1CkiuqBJqnDiSPvBG5JXTCo6iRUgci61fMdC8Srmp6pPkNoPYX",
  "key10": "3yPgJQEhBZbvrwBG82MfsZZDsRtNYpUe36McQPuVM1z1RnDB8Ga6tHbeTxfTjFB9XjtJeWf4fFexDHHVJkjMDSfK",
  "key11": "4sgvqGKFgjWNMQWashj7YBiKe4hiZk9jHN88CUWFdCrCjcFj4spcDJTiZmxi52N4d3RRNHw1pPLGdQE6UhejxwoS",
  "key12": "PduvACthVUVwot9YtAHMJuaBcXBtEJUok7NY8DeLLG7hNWsg1w9kYKCFf3zedjq3g4HapguStfCiybM5vksrN1F",
  "key13": "5pxrQNqouLHtFc8mrBkx9NqqAthTCsaHuL387Epvsf9mk7ZM5a4JGYnhzAF5x9fpjyzYKfTij4SP9W7aqwysT7TS",
  "key14": "5RXsbKWmTCmTLg8MJcLC89KVYPbqEqg1gg3TAJZQgrC7xTHnKd2FqVtzVSNQwszsNcb2ffbcCXTU1JnpbQxbQpES",
  "key15": "2RNs4UfYTt3eBm1dmzytb6nGR9MNgfGuJKr7BYEP5wyBdFKUavxysJcKgrNsYEi8pZfp5x145gyrPKMtPYvkbemE",
  "key16": "2QhqodaWC5GJHTF1fRQwd2hdEHDzY7E6ZyfGWAmPNsYfx9LaEVPY7G5RWXwrbrY74C7mk2JuNA9SVKEEijLh4fKq",
  "key17": "5UqtVxjicputTY8BL8V6Tv6cyrgWxUfB3yAH1wSCpt9AVzQRBHMJ3TUfts5m912rW941YwftkBcgYREaEa2MPEt8",
  "key18": "5Z8mddtsBQLAf7PjrKS2F9iA9TpAVTDD5uSAHbSkE3tcmFhNxH1VucXM7kRomtsHB5UqTTEjyboi5zufeEJGRN3z",
  "key19": "2oXJVFZfK8kMKVdyNXVCGpbLSdS3jdPz8dS6uaJXDNUS6b1sNiqL2JwzTsJSwp92Km554deZT9P6KfzB6HWATEdu",
  "key20": "y7ch5XkD53HfHGfHiCqsQhAKQPf3KmMd3wQUQzyWzdPhPw9sZoGxfLopGHTpQZyRW5S73LznQCor9FDZPxva73y",
  "key21": "3wYidMEA7xsthCqWsrZMUPh8o2cNvUxsW68hrt53PSrNm7JmhoTKgnPojg5hT2YeYfSCmwYsZsmSbmHbYoSdYwm1",
  "key22": "3wdCjMEx5FAbz1n2SobddsVfxBVAngQNgeJSpSbkbGJTEJgnBHQdU5osjKfbaPnaFzQkASEGYXkAJqyfvaECWd5P",
  "key23": "qVRzAZzNuAiuEdqvwxVGU1rvnC89oVFnLssakWJLhQC6dDEcdByxyZbqLGTBCH4yKpPDRaD7f2pwBVFGQRBZnXf",
  "key24": "o8QYH8FJUmvyYrDADKi3j28vHkxgMWf4VAnVQFAJnRNC9DpAhFE7Pk2FAnMfNYyaiXf3Eg5tMSERzFtA4JnfLmQ",
  "key25": "cZfU5xWW1fkQ1MF7Up9SoCkVfR11wUMZ45ZtNgGWX5N7iA8uHhE9h3jDEa1FTcGaEESb6Hqam59bdQDmmimynwW",
  "key26": "2kDiKtBvJCmR4F3yaipPp5T8BvGWvDgEHhHUMZsdhp3NtcZvHtTYzbrJ8K75RpECeAXqQhAPVjA8cbkhv2Uf5bvK",
  "key27": "4UczqE8ibHkXQM2r9BsrJrVFRyiMzbTJf7SLtDx6kFLhpq1tvHgnUPmd1BdptNhD56M7b2mijq3st87nezPMpsf9",
  "key28": "3SBKmAcTpjVZyTpoWcnAmLvUbNSAdFcQq4VZbLkKQPms5ncR8ErEJqkguUdvx2JadfBSxxTX9j2m9myTj6NcDVMy",
  "key29": "2SWsesmwoNCxKCnNE9tkgDJe28KZLgbZhvVJ1rAthu4NSbcXLU71ntgYQxqkRS645TezSmELLsNik6JVuukSUsXL",
  "key30": "4aTKD4pMVdS7p6kJt6N5VcbWZJUCopKS37kF7pKxJeP2j7L3aQUfoRVciXR2BFbzbGtqNfibnzSpgKo64Np2P8k9",
  "key31": "3Aj89vfXsWKW688Q9bRcncSs6FhKB8mkmTzcHXEGLKe7grf89XpSLVoC1BE3p22sjkAniB82buABAFTzPTWWbNRw",
  "key32": "3GsT8gVxqe38jTGh1XQKijv4prjp8AmebSmb2rwbXXpAbQp69tJSRaPaC4Lcx25VTTjJAYKQZNQhy4LHPdFTx5Wc",
  "key33": "5wHftLoibvGNoRyNhUTdCxSfetCFVgnaHn5exCGPtCAjrzfK4mqxkHmS2xRR9zHfgvRpmdb37E2MXqn7qdMo8F2g",
  "key34": "3GBmZx7Bq4KahJrAdyxGChrsFjxD3eLukYzcE5gGKsTWabLSbiLJagaqZS2yzCCE58wUsubHZeT2DTw4itjLtUpa",
  "key35": "2x6KeAb6GPmYFBNFgDoRYeUoVEjf2APPd3RVQxy4BizJ5kHnXRuovZ9L48ia96NNTcCmD1HLygavBrFhbXh7jagM",
  "key36": "5ovVJb6qLVWPiPE8TZ9UBUuAa4t63zBmhhLg3rGrppPjtrCbhY53faiPgvU1PUkwLgV89cKTLSjaNhLbpidcPpYG",
  "key37": "4yVkSxeBGaB31GqNJYCvjNXhHCa6WZxVvafacB1GjsebymXpPBrWh8KmhUYvvepQi8NMFF7z2df6UWi4fMgRAkJ3",
  "key38": "EXNxfS33SLFbTNnbbQkMAXVDU7gCzVkdz9YcLDFCJrBh6KEzujQGBFYBnFyPqnpSF7mADrxKXifRToey3BXeYFj",
  "key39": "2M1yHHUGPHmUeYv91GCEfR38eTqLsBWwGUxSzWjFkm27uF7wpzevoiLH3Tdy15zFuwX1xQWTdi52vuaQxopTZd98",
  "key40": "5XnWqCbtcdfbMNv6EyioJyqiReSMsBKbVF56C2coJC5JgnCBcUCPooQvZtUhH8z1kwrmNCC9C7LsZA1ro1Aef7a8",
  "key41": "48DLA3o8t8vbW7x9fymk24qrhJNxFXhJPBRVTwg5npWyyyoarp39u4Qp168m3fvyszWCP3yjdMF9KebKf42semCq"
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
