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
    "5fpHWfGeqgKWtsSkqdxNFpUie5M2WyDG6b824ucm4euJJcYnjVrieCYmhKX5yRfsLNUdwWiLZ4ZTNhtLGzR8i74Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ECtwTnpjJgNYX1JqFryATbpuuGCY33uvXsJwR92DzG4ZtXLivkNJN4DjazKTPteD2NBUuKJD9YiKXu341kat3x",
  "key1": "5QkApDNnfwEkbxfNyrWwPnBS44owtzU8ZyayFHEJ2kRptrF5NNCJjfE95AdLJWTDTDscQUi1nfTZAYY8sTdrUJVB",
  "key2": "2BAkTTuuv4jWeBKNvop9Xq1TRzeyujiBVqocxBVZSXm8Lwhp8vPSUCtN2DUXNGT2oNy4cMvcYtiBeC627bxUE8mJ",
  "key3": "3GvT8ZqccqLLzN8y51sGGj6LLUaXgCcrGK2cBQhZ45JwHAJ1suP4fKzsCxBa2xEmJxuLZuWHzwY4bNGa5rYDcpfT",
  "key4": "qLT8SjX3XEcFR3TayXRVYXUWALs7krYqUVpyNPWMwdnEvGhyc6UandDSxADETrMCr71wR4da2GERYRiExbxT9gy",
  "key5": "4FvkZCqEXrX3kTmYyHANjvv2gZj4wKQS1RnYrA6dXiRULg4mWB9rHnfPpakMMUZ68ETsuCLnsAirXCKiEtvUzSRT",
  "key6": "3BC5jntxTihSvB9mXfAnBhGFd6dAJJdgE5wnpkNZxxLrYYBPS3NsRH7FYP9uq9EhH2qpDSerpwe7r3tMv221weUX",
  "key7": "5VjBTN6vspd15MzpCkTgo1wR5kfdGYtyZAYYzVburfQgEMBNJ1V9pHmCC3sL1ssVdX43siuAeuUKAueQMh22viZS",
  "key8": "4UAaWJ5JJYfxiAQiGx8QoZbfLmbaV9TvpQNuaiASbxFFohAB2TCzvuykkC4czMGrc2WdC5qrXXUxPtLYvRiF2tTe",
  "key9": "VQEhoWKfVtmc3vMELCuPTB9GULdL4H845NGzkfLvM11yG1FnbAGSG1x5aE29RGBeGALe9cnwCmWSsZyYvt6AVx4",
  "key10": "2a1s5vBxBrzajweqcrb1PzqV8J7KUs7tYbnqTRN8Axa512FUFKLpXu8kLhXrv2gmqurngexteR4oTZvj31oeLM5P",
  "key11": "JCNz7E4rpud4H1ufVftXckB2zWy2JtjE9nwQcoKymzbigVr5q6Cj3GXaUpET8mYdbBbxdUn4fqiKVs62WSuEoDg",
  "key12": "4YLFd43eRuUqwFhS5N5cboyFYeYirwg3sbuioW7qNgEdSkncBbgmdAB1wWb9gEN7yV4b6vvoMhcTurzWobUFDFt4",
  "key13": "2FvAr4hqGALQjHoL6LVYm5bwQ1FuD5GLudeHdsuJ9Cbzr5b4V1eomFNx2g1tCKsVKDs3Pf2sEC8KrQDV3WE2mpyp",
  "key14": "WFdkhA6CXATxhMJYo2Pimgidx1nAjbpCFyZEgCFATLJC9bueBh67pLLDN2EqvvznKRAFmHV4MnN8H5RYcgDhCDg",
  "key15": "2fgms454Q48F2nZ7hBRrEV5mzsm1rNA4TEG7i1U6HxLAJQMgHQMk63X8598pDFi1NxL7F2ixboW4bM7Ypx4U6kvv",
  "key16": "2QkTXFeb2UTJHRk3trb5iMLWjEwkqtRdqD87Ptkk6syHbtwSe49wRh2ZmEyQ97cWaLq2eCoX9Kd4aZ7F64WPBWpZ",
  "key17": "t13SpHUwjv4GxkbgHVnCjxkbxensxQrWeiDs3uuEbS5imZGW4DJftgRctAwzgDb8QBpHTKX3UkSQvRBMx4JAj4u",
  "key18": "2ghXPZgYePEfXu5rWcHaxwQqQ4KDECm4FAtsFvwrWagyHNiV4NWNjJ5YEbqoAizencQsgdcXqwhCvZ8EF4QSxdj8",
  "key19": "hVyrzyhQYj6vsgwfNwCAnaXwWZEkkTPwkohyPTbtfU9SjpyJePZJB2u89A15CNcw1j6C4jcAQ4YTVfLNyPB8ZqY",
  "key20": "2ju1y7JvwwtJ8ydERRz6bfsqG6FmeUMZT7okzSqENcoyiiEC96T1D74pzo7bw3F9ac4UfTLSG6F2CHva2wz2x5yD",
  "key21": "4aBfEjhtGm4ZXTh6R74abUavPsj21afs55U2MBHtYZWXfQ9buMdL5zN1HPqDnfnty5PCjXhQ2xeEWbSBcWib3tm1",
  "key22": "5qFLg59R5ySDstMQyT4NwWnAo5FobkkHcZ2eXDSsoswsyhCgBMArSVxBH7W8KnjeGStu8eMr517KwBkefNYzCwav",
  "key23": "6ygGM1n4Eu7mg53zwDNhhBAKT5Z2k7z8vg4Ba3PswDHBsoGBJDdx91SPojXoViKc3XtGSVsrREK4KgSeGkPAurh",
  "key24": "4tTLAvN7r44ur2zR8GXa23qgBjqcLTXjZyVjBBadzMead1KTi2fQYaZWPkd6Cr8REbRX6HUXwpp1F88AH9J3e8Qr",
  "key25": "61ymuf985h8jnh2sJ5EEWxkiv4NG4BPffYPckPDAPNxtuQDpDAp6NjMr81seHSJjCVCWM6ZoRp1nLaZnLVrEBTy",
  "key26": "2pFCUxAMne6XVodKUr7y9rczddaxUfqzrnLr5cMW69WKWi9wrFgEjW65kQiu9m6CT9UCoH1vBnictoK6vNmptKF"
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
