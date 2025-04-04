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
    "gQptNS2whGFSD54jJUTPLDjD19UtfT8cJhsHKFosoUubWF67fYDAXBZJ6k8ke6z9RtQyAj79ZZ4YuCHyJR8gCKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUS88a8BqJoFeBSHx2d1YTRjeU9VuyBrorPceFFBxxXkMSseVpRto5CPkke8DDxqN1gowkPBrDjB174umhTpmAQ",
  "key1": "5s4ito38a7W2jqa5APxDCzxdqNkj9DGRijbg8FAaugLoLcf2SSMNDYucDDJGz59vZZSg8Ux6HGwcfkSzWuaiwrp6",
  "key2": "2j2DRddFaVgJjXhf1jpCwG6tbfzkoirU32CqzuWxVQHwa1e3YaaytvdaEfSS5SkUbUN5QgteAoJS6xKHz6b7d5JH",
  "key3": "A3j43CMQYwGMLfv6QhBvwVWGd7dGjZCKW1adUnehVnFTveyVJonjjsdq4xuRXrfidrmTHUzcFdTNtSWZD9a3Cy4",
  "key4": "4pDnnhmwUkyPj6FTSCwbPeXdVQJyWaEatb8dgaFJfuumKzX3SDQWNncN1sophnaNRBQqU3TmDxLPQCFoMoumFcRY",
  "key5": "o8ZHoSpfgS8MSZXay4jgVuCWABCWhT4CpsJp3VipTn5qZFBf53U8R7zpPSC1vF6Uw8xyZXWztd9YPPxDdWtRoJu",
  "key6": "4fnrqKLHJxreXBWMt8QaMJ9C9jzDZb8h1VNuf3vntomdTDdShLhkq9MMqpR3zVXyd9xX6v6Gh9wkuHyzaJQXudfD",
  "key7": "2E3LdcBakCXMnMppTUNkFMUy7Ks8DziXanjsobggyTuRVLthFQRA7hKFw461kRKNMvSu2EUcGfcnxPqDEpTdrojU",
  "key8": "5EkX6xeTzT3gmx71mDoHautX2XgSehRCpvgR7si8ANE69t9q3Q9VFy4tELDFsPwj9WXTUw2sRe339W6v9Kewme1D",
  "key9": "3BaukF64y4ZDwwTj5SFwtodjxA2BrhDgYWF3wF6NSK4KST7tPnRX37dHJVRQna7AooXYUVFBFdKPcSa61M6RX3jy",
  "key10": "5uuW6xi9cPY11hgAcSq79Y43i4CTuQGvfRuzFwv9fQoaKDVn6mV9mAn4M7MAyE11916DQMMgrX4XL8Wjw3TmXrPd",
  "key11": "4WKktwU5MU1ZtjCxQNdVQiJDaoyVrGJ3VqDjSJxn84h8KJ14s3tudvY4ZxhY4C4osoTnntwjRyd9dXSk48eCiWeN",
  "key12": "3vkq2aYG4pcmy1kHXMs9yRb3NmT3wnxzbrekJYcbFKGS3cbcgVhdXrTvuA9BGfjTfUoTnqeVBrUEUNWSM49o7WZR",
  "key13": "4kx5YyeeVzvxWSBpRFewcpxD1VLJxTsuPBcp2roKzwokw53nzqq28CeyX56BtiuH5N7xaxPtfaZuQ99UUDQyFxEW",
  "key14": "382RbvDKdzVJrfL1QrcLoKDiNSa2E22rkUet5FTbHSTfs99wrEmNvodbnEmbhUBxyS9q8hMbrhRokdGRorwUkL5s",
  "key15": "2L8SjVnwjcm1iRzxUsEaqVY4kEqhDDTW3j5wZ7UN1MvEXY3kgYu9nzXXzUHMfdcEfMvGYGuCnzbAUZ9Ap3nGP1Lh",
  "key16": "58fQDL6wBHgVXzzh5H6Gufe7xuDGZS51GbYPwATuiSDzgWtFDYYJBCVGRiFrQVuBPavQPWQkx192qgzkR63XygJv",
  "key17": "TyFT6qtBUJq4TasyRi43YaJmSwfNipDwm6pcE3tsrNqX7XBnuynzA4rxQ7MueaK8zRmRNtVeszbRpMhpm6UF48E",
  "key18": "45CPkvN9mARY9TBFBTr1uiYvR4jwsn8J8nKAGkcARnGsFMH4qFdVvsJjZQvLnoqw72gDeRksrmPUbmDrxj28QFgA",
  "key19": "3d2QASztGTYzEs4o68vgtdEaqr5jswXPJPa361D1gTUdntzGfNKzGRVJWYnkegcVUDaDq8rLeBshDuKJS2G4qr5m",
  "key20": "2eYaaERBC9e5EETGh46ex4uCWc2vUF7xeN3M6ek9t1zVKgPF9nVuw1Ss4RscgCUBTfCJARhMC2ruZKxARC8US2DF",
  "key21": "5R5r769rvmPcr3cq24DLSfKvyU1tpvEnpiKeGZ1ECqXDLXt62eNvssSUgi8YmRHZokFtromsvL8HsLkz7Xvm4ppP",
  "key22": "4LSjFZKHscsoCjocZDnSgSsWnXZuhFT1xrnoS7NkacXeqACymsAFj5nd4b5SdAgkdaT1KPRm3VafQMyrPoZbzfp3",
  "key23": "6TXvT5psUF453U3Sa7deVUNuoiS2LoMHgzuks8HN3aZQfJAkRix77RDgKyCsFtgaHkDKEVDQHnv5nzDsSWsYAxi",
  "key24": "5fxZRBurE7X76H8GUfBhhNfy19FB24918zWp9G7GrDkiuegEF3qcrbjLHNxE8Y4WSqTYB5onRh1cHqfeTE4H9oXV",
  "key25": "3rNjmsPT8kgJcpHaYCGQwmKi85jPjHAwQdY6j9n5wXU5SLBzUGjfeQTywyhgtP7YiWsaZEyDnM3w2EvRBE637xUd",
  "key26": "8tV4FjLH8rz6cNxCFqzFCgwLDCc1VGaVx1vfYUscWMy7LzFZB3uoYyY6dZiX2JFHkmaobe98EMU95dx4mQXZpu1",
  "key27": "4yaW8gP7EHPjGKKUZB1nSkM7hxKLuT7jjwGB8WnDZ8wUT5qkxyN47wKWGZRnBDmfrxkgDwBWqLmrFLzz3gC2PALU",
  "key28": "dWpmQQuspzpBLSbJdeihSY876HmSNbXdni6yCvXqrZWPeeqGeaP2LjQhyfGbJqsTHBrPhQA3tHbQPE325GEp4us",
  "key29": "34R812UQMiWwMCiNh7dvWTR4aRTSWbsYkqQiMM5Z36egeX3JrbkjgSkD5JQ5GHWmfKBxkhrjqNYRNipBgnMYee2A",
  "key30": "24HSjAfZty4T2pEFBvMXzvgknc7JaMsj2k7oVTHT5wdw7SB6Ah6ssNUVjXdguDr3TETj5EopndsB9j9Pa3PNiHeV",
  "key31": "3ihYKEYLvirbQy3YFpZRVuuX8W7u9G6S44d6dXgM3hQMyyemrkfARcZAmZm1rMUMDg5MNK8wruNdnmfXnqW4bQfR",
  "key32": "3C3D88pDhFk1w2kZeMpqMeajUPRaw4kDKiymTwM58PvhzEvCzEgmbu1T4tknyKaP8knc4qTmn2xBxGVyo6gm4q4w",
  "key33": "2vdaFCunXC7i4uDkDb2pHAZuPQVaMQcFT2AG4ACFJ6kc1twzt98WCdW7Da4oK1oRuBRbHZWdrucT6ArwRG1DCSDK",
  "key34": "281GYYXo2LJtzDwQhUcbjSfkARB1MpwLBKMdjfc8yap4VRLjoW33KrCexouVCUrky8FxL3bMWc54eBvPfWcH9VRf",
  "key35": "39BfRAhuPRyJ1N3sEkpLYMKXaH4tr2RUjxooqs6KGsdmCtW4krG1UsfA3FMr5WnMaaJE9iZEJiVL1W6vzUUGwPDT",
  "key36": "5NnsTtZBkYqGdKmhHKm2tbtd7TnN3j5oadkyzrqwc9w4MDMiLFuMQXYMcdAptoa3uqWrJc8k63XQp8hirB7ML25P",
  "key37": "3uhHHVcoKchtNE98Ph8LQZ8FYx3vBqZfBCQHmUPT1U82pS4dja4J7sbYytkBzkuhf2GMWcNfPYncM5cf5dwjQDnw",
  "key38": "63GB6bE39ze1kPEEZ5ainYj5nNB6EF27uaL1CiTs8quQsj5x97KRZ8oFNC6wP3GzP8CGVsyHkLoWzrwDoaBkuq3W"
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
