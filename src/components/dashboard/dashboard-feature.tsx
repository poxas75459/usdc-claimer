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
    "bifMD1dng8vEjpAQZTY29g8g67kCSpMjFxLa6rZL8rcvSHSPUhZTtaaFvhQ9YfXunDHpohDBH7a6SVD1eXrm7AF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Q9BLT14P6ABig5wK1aZS8ey4qQsUeuXzBG3hsCMH8TZx1Td9zxLGXCMZBkhVU3w91yajBZ9MokzUnYgebmi9HL",
  "key1": "4vKQvW563vLVzWtFUhB4BxiAQuoXkf2M6epGjuMaZtNSPisqJKPELoMZrjiRGdpWEezh3GECT2UGvH4aqyzvzGom",
  "key2": "2gcuyxZ7212edUmaBj7VWaELhQEmE9uSTLoWfFRXZMTVd4SSEp9GPUhRLK9CEVQVVMdF2W8uHrxv82xxaTdA1wu",
  "key3": "4G44doF2bpPdhskXYVytyyxRZxp9KWddm1gZuju3ogH2uSE2Vm6SM1xjJsLbh51KFGwcSTnaTcfsA56Tje6R3URf",
  "key4": "2H1sh5gCGSfoR9T56Egq6MjwrRdEF83tuSQuUrpEa6ejQRp2EWKDei8XSw8BTEtxH2zKu3HSD9wwXCUJ9MawkZVk",
  "key5": "3th9qk7femnfB4B2mLNbSPXdg6bMbxNTJ7x6ka38QVm6NCFSnSDU7NPRsLXZ5RpmYU3c5rwoWw3uv6RsBCFr5m9z",
  "key6": "2K7Eg7PhgcEp9h9vvrqeNcxwg5gk4NoGqQ2JCkLhkaoSGwyQ5yTJoUkq1wAkZnPkatYgxW2BmBKkoD3LaUcfqppx",
  "key7": "2HhFcSfXhURWWSXHTesojf1iaBgNCW1o9Mqbu42u7wyJqfmG1oV9EdL9gb1ZCcLUpMAWKoaCL3s1yvsuVmmwchij",
  "key8": "L69EKMkWCq5jGoQuNok4rWt5p4zGLVGvsLa5QtiBGfq1hvpHx3VzXU4T1TeLebfZLCxeVUCYr7if2pBj8HiGaeh",
  "key9": "EWwHnJvUU1NmttvTfTuw5EaTMveL92Vcng1TDqwcCTwx4BAMmBZzfsJsJN2hKmfQbQrbZQkehsgHSuf1CHUN9U4",
  "key10": "4N8vwHTrwHTPyn8H1RXTeCxwBbXNFZVrPwPcR2GLKjqQMdz7MGNdLpRcuN5odYQPkVKVF6v84eyw5M2YibQbTn3P",
  "key11": "2ynfmmJzcM5F8jsTzqWFGy9MQ3MDhyJFrLYEuvyzopAgFYGVE8KrET4e3uUaDWdxGXiZ3eaNNdpYHKT9jADi2Ymv",
  "key12": "2sToJvdnE5WbbhiUSJNcR4URDgMK1U9WtZb7bwFpSUwZHGnausSwCozrVGgN21FMpF8DV2WZoCNseX2UTPGdzkLv",
  "key13": "3eotmMuzSaHoCXBcTciAjytEWyJkqFzAJD5sR4ZXLY644DTG65E8vLz99gMaxSxnBxDztAj2XiYeYoxq4Z7pBgtY",
  "key14": "24eULCZM3MLNKnLk8qe81c8gB7Lq27juSbn5y6McvPwdhxjWENx4pssY4zMZy8paq4UDkgCia22gTreKCasq4dDu",
  "key15": "3fX1NHccGkRe8iVgpNEB3sviFbtzszxE4AXfsCyh3HZm1WjVMUzcyQCqNMeBXtyNUv2bxK1RAZx4H7DnsYNj3xmf",
  "key16": "52wkJ49dB6zwPYHvjHZ5XgRLYE9rbZY6hfGUXNBjdFLvSJDSCsbrriFhRzNXESdWEMQqTqmMyB12URbTf7CeyGoq",
  "key17": "3WhEe1tyXfTEokByxyHMP2wWrbaFZ9v6zVLDoE394MfE67pvzwzQh9F4zGXiRBSZkuLrFo9weyKrKSkePYhegZfp",
  "key18": "4x2kHte5uqBpWPm5GvtyV5dRq9gpEoY9u1eg3VbQwGZuJ6H6gFUaxb7vhG3NSWDQ9oW3pWEAXkpwCWSZGbcmZasA",
  "key19": "3yY5goWuc9svHzmxCUYwLZBMjosMZqXELEccHRpRbDdApvJPgvmkUH1hkaVZUFT7YSak9pCssHSk7fbmviWRCUVH",
  "key20": "71jTjTYGFEgSkjnMm1Bmgmyz2cAH2vrPAdyMunk3B2ZMHBDbVQsSrGKyU3okkCj2Wdjkmz1suECoehsspzTX2uX",
  "key21": "2HR4iXtFF7RN82z5siT3aTKKAVuj3bqykcoC4UsF4MvKwZS6KJWTn1uFaASMKccZwW8D6Z5x7yDnevfmYoY6Qu1W",
  "key22": "5JnnSRRVvRwof7Mu8e8V7NjcS43K8MSFpiRZKgYkuRNE36k9mXoPwxzHeFmRNA3HxV4zvo37ZXKw1XTevqcnvuwS",
  "key23": "5oKgxei9HD4NCQwGR3TF4k13KjUp21YSLaRNkbnWwtKJBitvCkkDnVwkSac1EMc7EpTJeBa8u2mUeMfa79cpcHwC",
  "key24": "45A9dFirWxUE1R2bYAHWzJ3u3ySfdW3dg5EKCV5sd3yzTtsEEW4u7sTAP4TTELRtMVuAG4evjEhFsvz4CX1VQx7B",
  "key25": "5tN6QBs8xK7ot8PbGokh86pApsiwdShHFRMwWuavcSgygbhzxy2wqjDDhV4usn9rNipx9kdPG9S6jWLXXfCFwREU",
  "key26": "43fvqotxjyrYtmoVUwmmUvueJuDqNGN17ksp2Ap6WQa2qaNvWAPWMKQPuXvyRfaPHGSwEy3uG7m1N2GFjs5SEDrr",
  "key27": "4C8HSs6sc8WnT8Qr2WNzAf7jEAfuMKqr98jKtqxRB9YnPLmmsrbi4miLmRUnEA8QRhBmuVxCbpKHg5QYFCruuuK",
  "key28": "4CotR1bbPqB2BXNCfntkKTWLALGbNfLwUBwVZkJMWFHnWMZDNKLNDNJtDWtpm6GkSBV4Hbm82LCHrsbkwJdLoXfW",
  "key29": "5c2HY651knw17ggpSrwYE4KSb74bNKPvuGgqaMbVbHaPU5SRB6HVW2uwmdcanNgZK9s2vJoYc7tKLnPtPZa79KZc",
  "key30": "mGPcJfC9gZvneHeD835tokMNn77KwrKQN1DaTUvwri8CnDqfi8SFJWsuHMrCbscTDHixSQLF3WTfL6UDQoPgPS7",
  "key31": "5Z4GMNXwhpJL7q8Vta2urrZXQjzrSZR9qzj1qfGMyNhnecUNkFrLJHHzWVQ3V3TLUM7SJmpt9bRksiBqunHiFsqC",
  "key32": "5B1pWXkYeftVpUcz9wNNZyTNVb6XTLcXCXgaAyBqSYgzhGeTrVGxjeox32KyzcVQRA45afJUNdwN6v5mjTjZ3476",
  "key33": "5w8RyFdVGp9weFY1qwVxQc9oA7pfmonb6rh6qmERrqZWa4fJkrehPUCkHBDN25jmrs8wjCAyeK73nmochsXBCfAp",
  "key34": "4vPaGyrWaAhWT4mgdc44HVm4yo8q6DDovCLTaanGx9Ychg6VevkHpc5GVCsFn3cdUywCu2gZ8SFPvAt3gWUXSxi2",
  "key35": "57mdVM4PaxLPmjNHMWixRjG1nKJjSixHHFnjHCSEGQxNUfaNi6YdqTt6GN36Ru4wpE9JrJouU3mxkETK5EZCfzyF",
  "key36": "9vBxLs8h8VXKU96k3s61EvUPDUanGKXF2kK3WX5ZSvDdAqbJ7axFtcswDk5gkAVQM5DdWvgi6K87B7AWXQH944s",
  "key37": "4N1eFNpiKXyeya57uezU4WEHb4DkkgT5hrPWpjZX2ZUEwXaWMc2ZiBBg3LD6RtsBVX5YDUXeSyCBQ873kQanHs6i",
  "key38": "4xi3ycgcZNC7JbbxdKAG9hEMdTzsZLfxUu3AQsDSmxTRYwCDnq9n2HPbWaT8JWiBtJkniBudkukRE5mzzgWteexL",
  "key39": "65Krn82suNCxsZBfcE2wa5a31fiwVhnahJxoi5GMgMxaKfuzdrbQ9LhgLwK9nery1ywPnL4kC6pmPH6aqnMDErzy",
  "key40": "31a4DGjQQ4WCdTVTme7MPMHtpzUb5VXgGR35bnSSS2ZXqDzmyLRkg7sKwVgrrwFtcsa41fEtto6FUfa4MC7exv3b",
  "key41": "3JjxHf7XhGTSr91qdt6xYCyKNCJArJwxHArj4Jj6e7fNiVQo9A9mHf4CgpfQP3m4mxbpzPfBU8zd2RMhVmsY3gjy",
  "key42": "5C7yukMftrL6ycePbQFHgUrGYXq4x25Te4jbHsLaEt855gQZ1C2HZCbfEdxnj9Ceg2o7HmawgQLRsNSYHgZt2utE",
  "key43": "3hZHAGMjbxXv8FAqjmWQ8x5FgFH2seJdN4PDqWiG22B81gL3Mwi7e3g4EQhRf17fmHAppQKRXSv124W2mQUvZeWo",
  "key44": "rNpJDFY7aHcVLGVHKpgcWaX6cmXGbyarcXqnMrkZAX1hZZTZBhetFFscxjobWAjugHwHBaNoXGA4WGZ5VAyxfed",
  "key45": "56z4ZuZE5FGEPMcYx44fnQs3TsaWfUzPoTsxTZ2XjLd3YXkomY4Car9qoM8V4FmQEkpSNaQQBbxrJN4FUHa3TGde",
  "key46": "5zgE45Jh8CjMN4KNcqqFeHfiYyo3Z2hkwqz2ZRH2EW8YoXAhq58mNCjMby3bD5xaQx3qGwSWd8F6bbSZ5ZvFNbC"
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
