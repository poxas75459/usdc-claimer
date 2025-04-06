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
    "eqNd5aycmJ9Xya2v251reviKJFNmQF8Wbu5NuMXxygmCcevhntovkiXcVnktfNkxcxXJiEkKeCNzP2XXo9XAQiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "214LWgmupYb4hDUUK2xM4dmuekqd1Sdyn5iayg8MYcspM1hFWT2cZa5kZxHZdPju7tRR82bU8jgQEmaTctXotCji",
  "key1": "jdp4SHdC8WW9CJsYtAYabUZSKqJLn21U9JCVAosRw1ZeUbSbmAQyhjrUUk1ZPXnPQrju7ngeeL6p1njFt7636ZF",
  "key2": "5LN8BnHU5j7tdMEELmLkKkvvJNqsYpvq5pALa4Pe5nyznmWBXLu7hsqXxeA44jVSXbfqvnJknms1Vr8uvUJNV219",
  "key3": "5waK9MbAJD5QKLsUQ2sQvkbBtcL3fm8mn3SPzfRdbt322eg826uhKgBzoCn7zxa96Y8jpLefoQjjAdz89cKXkqD5",
  "key4": "2gQaQo7JmycrFwX6EdwpKcFFMJY7DAzDXz5K6fJEPWbL9DLrJZVSVZX3TPXpjJbqJP5WoCfxCWBKSYo29V7Ydha6",
  "key5": "64gyQ2oniE8wU7beAxiHaoX6A6LFDXVNxegkze6wn7EjbbPJwW9t4SJ7WdbaFySDu3WwcGGCNaYp5H9zYVwXNNZb",
  "key6": "4zRHS7soUsHCZsLfXCsRgCTK8ZwLE5SP31Z5dh7ApCNS5bbsQjXUYHqCb387FoQmeU4Be3h7cV1DUPKQ8usnVz2k",
  "key7": "43aCT586qgDKrirWV7kQkoSaXmgRYnyyAU2pARa9UXjzZYasdenBNujKXuu6BN3fCqjvhAxhA9qYQAobhRSYgM7",
  "key8": "37EdDTanNKg4PXYRDiL8JEM7osYEj6xgxiRSYwZTFdNWuQvqzHycGykZKbFwjg4aJdmByYgBG9Dnpo4c1agTntzu",
  "key9": "5ZiwC8n6mYa2q2i5deWDqr5d8G6cMzEVjXdFkUvxzm9dwrwYWVccZAxbDRoka4B8ybR46rDZe5jXewtzeBit3c9n",
  "key10": "fA7aV81vjQwrpNdLDrnaNksuC5qbrb7qcmKSbiT852NkNPymPmH6VDNWmY63cXSnvup6xRgnnsFrJyPoJkcBqXx",
  "key11": "34VbwqjYsMjEsd1NqCDSG8R88QhNSLYQoVKwGaxAciVpGqqn1AiZPatdhVU9qkk4JnDUvqzd6UTwrn3g21saG1rA",
  "key12": "4M1U48v3KyioqQyYnivMiH4w2BvobC52UstuWDQ1yk4259tDPFX8PwZQE4yuTTbGixjVj2hbVLrmuDVyURSjVkaR",
  "key13": "56fqeGZWCsyKi9hvFTe5NpXTjk1zVhW1ZTTsicYtzxBxCHPWpJkcFREeXCdChKTUjo1MohTRs5V4ttjk6ttenWA",
  "key14": "3Nt7Z9yWsGjH2YWfdsiPmdeACStWGC3WcMkAjD4pEq46tVBgFokHRp8uGnRoExMDmEomEskAYmFZQWyFVWpgCFHR",
  "key15": "55eG7XXDiAX3JRiZWgLnxNQvzReW3W5wxsYhG6ujJYjjXS8pZwFF8bni2bkFcfey4LZwvG7AUtrCi4iX6Nn3nxtR",
  "key16": "5E8H8N8QnMbML1NhyYw71bUtDc3RzuuASKpshTQskYZCx8k7EQ8Fwi8fMafT2SqpimAfvJeWFz2ZnUg9i2skfqE6",
  "key17": "31NGWzLBEqumSyJfVVaxn3ocd51RwnNJmskZx5tWXh4tVTejpkntN46TnT5muwePNjNgZtKpJRH9LihShbTMnFEy",
  "key18": "2CMUuQjj1kGr44XoBoQ6E8tUdKvviWaZYj7MArBKG4fue3tSRQ6iEa9qgRyt1cGNvLo2EBsr9bVcrATBA3p1eNfR",
  "key19": "A5ozw3XPsaFGbnfsUPX3snuQcWjFf4BEJziZdDA6M7NPadBfzURiVvkrGtj2L5EGYZBaMqsELmT5FzT7aX3JqqC",
  "key20": "2njMQkvsoRr1iMac78Jm8qxCjo86mPVgcizV8B71SKW6FUigQj8NCFJ2nQBeUqz9W46cZGbrTBaPGQYEAmSi5JEz",
  "key21": "4AikGGNgAE2iRZyMKioskq5Uz5YP9giBw5HugJgGYehAUXyUY6xGjcUq6YpUqPqcE7ZGMyAPD6sf2q8EqmN6eBq7",
  "key22": "2duKCqytG1BSj9BpdZC1wqKnXrcHRo3v1V64aLtyij87mokVucd1ju4wwyjufY95J5ebLnZBL4ZuBXhq1AJWvugE",
  "key23": "pHMrH2nVHi9S1ird68d4ApRpeF5vzW5uES2fynsNkrHD9kvH4Hbu848JRfmErZSVNfMPNQMrynFQ7yYCvwfGrqS",
  "key24": "9oMpyQrgg19y6DT2zoz78xWZajLNnzbCgS7P4fFzT69DmbauYsL3waG8dkCWmJgTwYNWKLu68R48fnefmaU2ceX",
  "key25": "3R1uedb7isxjCZKNCmkN7wVVS5jQGLLVi5jaf9nMMDHSSp8zTrF9GwNteowPKZqtp9QMNR36Lg9DSvRVMtM8NY1i",
  "key26": "4J6GyimeJ2WhwxkuSFuJi8QnooxYHo79eH24AKR8oSmYGJSseqDKf48oPt76cbADGr65g167azJbr4qQipR2cehP",
  "key27": "ppxYiJqje6QnjQb2fv8Eym1kjb8sVF8i2XxYxKgbyeToAgW6LVg3DnmBcK2vUARVb6h5TpMpWqGWwgXTaWE6tSp",
  "key28": "47yUu6riBjVA9jb5oic79J9YnYerYCQi5yYaNGuib4PucNfiUFSUvgDANLW8CKGiDacT6S6SHHkQPUvCPmmDMeSA",
  "key29": "5qY2zTbWrVQ2V6T5KjScJWVUmyAg7tSgcpNcqxr8ch7rt7LPkfzGTRVTMZEHZfdw5gcxmXq8ZS49M45H1aErbp2s",
  "key30": "5hcHohHGf9FDttSMNojATGMybY6NcMkZ6NyM6NPSxUDLRUktCfWELNpFAMbbZ4YZcm1Ga9bKduN91aPgtxuQXCyY",
  "key31": "Ys9p4HXZxZF4KDntqP2shRrCJEP68bgPRPpch3p5E4b1v9hdCrGWgtG1FBf5EjFEUHzoiy5LSPtw32bVCkKoX4u",
  "key32": "2CLAxUZJn49RAUAZ49ZtXRGUwyaW2YQsaE4UZLMcTH1Fi4wbNZvLiVSPCWzxgVf8p8cnS5MXiaWUBTArUMYKq7wW",
  "key33": "5XhoGKEA49Uq8YW1oJQJirgDGWT5kSF77CGWuUYLBZ2RsMjQ9Z3h9yJTC7nUdHTEww3Q87psKkmFDmEtidzv3o6A",
  "key34": "zBTyrVw5627R4xQMDwMiPPU1itakRxDN9eT4gB1gL9fXN4TKy7oLkbLKgsrn6PMCSrYyBwtMASmSNowcn2d6MYE",
  "key35": "43VmcMXFFZMmuCkRpTWPJ2uLoSdM12Fhrb6rGtaUYmALwKtUCTrw3gFtQG6eLUyR6HPk7NR2JSeAnBNjCTXK57p2",
  "key36": "ovfcw4TiLhjs7dnvKNvDKuW4faMSSUT64KvSxPuzNwyfzkPzCUrHC57xZL6YDwau6vJuH7dj578CrK2DSbwaMT7",
  "key37": "2hTYg1k9DNPNWH4Qs4GmmXrroQhR1LcTDGT6yhX8ywq5ftjNxj4RBmaRA6vtQawkduCoSiRLXjsFWE6kW4FVTzNH",
  "key38": "2a4YJ4dWUXydtwqRy9e9zXdAmD46nCtt5U413g2ZCRmMCkxwz3cE2UBb1Cjjs1F1AMHEuB92jUs7fyffUxP57nnA",
  "key39": "2kpEs84H2cTPZT66qmNS4neEbcKozwLktJG7wUBwATH4wceCJw97fS9SHMKecMJXp3wJWT6dMC3boqA8WZVsks8G",
  "key40": "3oiZNtcnrsqmKko84mdzcVmnjzaiDytR9R8FcvdQsWL6sq8gNpvmL7tXLJkuts4SsTRGg65VPbcAvYju9DVakUaj",
  "key41": "tvALdZbvkwymuFUTM72gC3MSyoWdbEHA18z3qjkf9KTfg1rFRevjUppQZmb6XKGb8UCAob8RvRzh69yJfx4vd85",
  "key42": "yH8dXrQCNZk7GeHfcQqfpotf4kFfrgPV2xScdeDtnfxUrneXrhr5SAkDoreLii7R9iTzq3sS18cMaBUHwv65Ypt",
  "key43": "5fQD2ijsjjdjSMzxb2Cy45VwcfkNm8jN5aFuoin4XodhiN9j7Qww6VevLkkFpxn2jEXKBeNgqCMu7z81BKqk6YCg",
  "key44": "2YwjCfVk2cEkgbNmzRZ4uv9WpRv9E3rTrPAifomNaXowaf5BBcrQStj5F2bYMWLUNa6FztuTGKFwUyYR7Lnzq45d",
  "key45": "nEsupUbJa1VS4eMDj21awhrbipMNb5aELNz5R9hTJBTDQZLtUCEXW8gSszBSoQrgQ75WxkF5MEzHiCwkNgbgSNy",
  "key46": "59MM7697m77hjegCAS6dAKSYyFxLunJZGQ3PoWDaR7zhCuDRMabDSxovBEL3Q6ow2vscA33xZzMiBHejc9Bo3dgJ"
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
