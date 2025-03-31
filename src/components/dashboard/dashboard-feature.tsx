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
    "3aH8EJAGNf4EL6UfoBt1QHF3b3zCRodJL8QiY8MawLkypqu2MVgZpXwF7rBCovyGvvR9QHqDicQeqXdYZ3Nyibt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSXenuDYRJMbP2kHdUiKByuPpj9gXuYfagLww7wAtEmwvhsJFnWoyXwBRYMYKwSx271PvPL6z4BoUA42s22L4oW",
  "key1": "yBE152UZhd89UKkPfTYC5Kv5sVXbxp1FsZzFjSxA7eEUqonv99nRWARFUkqZnitg6EfiMEFhbhLKj1ioLpXumnX",
  "key2": "3oKoMRxVZEaweHC3oj6HK7CAK1QRuXTZBJdR1CDXUap5hsHy6yE3thYUjHKFzUzcic2E5TcFy4H2LBg21jG5TMP2",
  "key3": "2zNv47YeFmDrGsfCuZaes73VKxyUtZLaoBYpRmAzaaeDyD7tiDqzuzQZTNgYm6SDyygykK8PCLaN12cTfB1nbfjm",
  "key4": "2yAMgyFyAvhZTRr8kEaGZNRzwvjDSdKxiBNyz6wSqJWXzNrCqEdCzqYUhb6jF7ZzaRtC2XKuyrijBgg9vmDCunHv",
  "key5": "iP37PJL36PKL7Fc4EVXqNoS2wHEnPe8NGYALvHhosHg7KJiE2TPSKrGia4wHZD9gUjfbPvwP22nQezYsiS8BgVT",
  "key6": "w1BoskXhuzyj4MKyvFbBXZacXFnRK7CABLjywodPpWHH9QZ5S2Hx1Hwvny771bf7FmNootdsUXv17Vt1GSGTBGu",
  "key7": "2DYujMeYENQ2Pg76SGdk6Q3s4D34fBJfaBNkawTcN27bt8ubqDyMrePaTJXgLnzy2iWXzCgmiPo4himUaC9MuaUJ",
  "key8": "8LpLcN56YiKVYPgx7o5XgJ47cLW1vuxcYP2Ek7EeueNK5j6jACLmWZakPjnJre7PxmCxkaVNxV1ZV9CffaQrgE2",
  "key9": "YhUsVhroZTdtH9bapBU4iGHFrxRfVZTkyLhEbSYrsX9UhCVqhEdumtFeViJvNPap1jPe1zqht2zmgUfRyx1XJfb",
  "key10": "SfZfWfkzsyPKNhwE713ndZoGbomtKjEjgKtM3K7RQjYNu6VV8rLNNtkEGFn1F1VGfXwZSvy4eAfeKCsC3f1A2wu",
  "key11": "qw6eHVdVcYNbYZKJxHhTrqXLb51FL4FVtvo5VxoKPL9QrGcWTaGBuxmtGsRdsB2MmBwDmTHgLpQF5pJ9Gfn36QW",
  "key12": "5T7LrFU8jocQ44s2d3DdR1UyVp86W7tVKcwt6dRF8SyJXUEL1efkoZitd2f2qg8W1XA8czLpXNTk7Lp2TzQzP4S2",
  "key13": "2j6FUk4eDv7ixZ8AX8dZscwm4mWxc3ak4v1DXWCkvLofJwokoU44U7KmiPs3ofTuzrArQhJVViPGNW5DJb6fNoVN",
  "key14": "3x7Rwam8YiFeFmB6fhV868HtW6oXkMQwKxhiU1VHDavX7Gp4Nn8UdGtmPnmDEXDRutsaa3ZVX9RUbByZq9e2mpED",
  "key15": "2aYBVHXYtSNnX1UG6zCcUBMLQERfUWnFwr6NsDNPzx6ShHqwWPS1t5Y7FBzKSd4xJRr6nhgwHbTLSPCqdNxTjazm",
  "key16": "3aabetpBE54X4pkHWpX7rAtX1zWrzaSKidS8Fh7CgrzhyRs2AwXT4TFucmd1Ydw5E3CYhQRXKm5p5RkawrPTe9Zp",
  "key17": "67QqedjPNJDhcar8gxGucZ5EiDfUDLvFvoYNpNXMPX2XAG3TZvvb7QAQeVMBaFJdGGGe95GK9Sd6MeMynPpmwvce",
  "key18": "k1F378KWNcDC1995qQA9mXFCt7nzPLLb71cEZr4cXyjwch28Q3x1U1UFggeJHH4QDcc77CTprQPHZXMoqRY7st8",
  "key19": "5QpVovp2Z4opH6qpstJPguVuUEQ3ViNU7CucHCGf7u6imFn2gVqW8RXnFrHdf65Z2X1pG7Yv5AbLKst2dMspc6Fj",
  "key20": "3jDyvsaUXZm2WbfvpDV1gApVVsaPWbZD4QNNc3eDRrZq1SPWRFHzCFodsYmSHp9FpSGtyj8R9J84h1wMKVSWT4LG",
  "key21": "4mbaEo7Ev5qJTnwB5h6Z6vD5gEf1TQVTzKNJ5L3sTZosCgUdQufc7XeUdSgcpKWz28Emrr3TjBmKZTbcz91yt233",
  "key22": "xXQzxCR2hb7vxbNPJvxc65LxnNzFMcyN73vzD4iY299CvbYubu4P7cS4A3CGV2kNgZK7tzRqSZCSjPLTKM6nsFR",
  "key23": "358xr9eersjtNT7AuicfAafb7EHT2PsGXwNcRjoHTUKaejHRnC4zyGcpY9Pd3HcAG4EcgSRgpevSgqN52qbxy95i",
  "key24": "4F4mtYbCGWCkVEAtgAkaTuBbD26c4aupzLY5ptDizvwZGz4mmmKtm2XQBkd1khbzazrSG245xmWErJWJy6QaKC8c",
  "key25": "pWiHnoJvnUQfw8ZbBX9dz8BUGkg3SPafg8pnbLAZEy44maFvKt26wXU8BGoz5XRGe4NNvPjACQehfw99F2Zc2qF",
  "key26": "2ywfkSxfxLyFh6mCHfi2jehUqnW5C3xsCiLPmgrNuVzoqiM371p2t9E8PsNzEUtjoRDVQXLhQuAzcsiEWwG2mY7N",
  "key27": "Y8Dz4VtGajVVVRahYFSnFBMhBxmdWKz8EKcQT2u7KpSE3WkW3bDvADu15n1dCEdTijbgoiL6iuix2x6J34vsffC",
  "key28": "56Qc4mDDzDs7CPG6ixKxUk6ShJZJqyAN2W4bWSSUHvhDfTkDRMTgZA7XxFnTaJZmdGBwGrcurtnoH1LSQjwVq9FW",
  "key29": "2raCxkd9KtXpRzgGT9UcmJ5Bin8k7JtRCQwMN6crnpe9CuRmU7qu16gkr6syaLWy3GZQK7HzphQsTtCfxNnTeAja",
  "key30": "26r3q3rRybJf2wTdpD3zP4twwvpMMPZf8hneZaYJFcJkfqTUMtzzFSMzApai8HiKHH7tABjKpokS6JuhvcRWHw7m",
  "key31": "65UqzjgN2i1jPDNEJ3RUiJs8rcMYcofkQfz7PKw6bJ6GyXphy5nH6XDA1crCbNCyeiwZrB5QJPmVCQ7mwGoGe3qQ",
  "key32": "3C1zPV5JP1bJkeBVCEkAMJUdTPspB1Bj9Duq5gGdCc1MGGF4EturJNW3LbKrQY8Tkq9nuWeZgSsPMH57qWZgWKiW",
  "key33": "4PBeN8ojJreDC2aGCJpMXB1yhemmZV2VgcuJf7D1SuoXF5iz6dQJW6ZGEZDxP43Wh36XNy87KMhCqpHKZ7geLJ5G",
  "key34": "29ASgy85mWnUPpybdUiFPRkddJzwJZmW8M6q7yGfCF6g45r6p7Uj3raKPu6Eg3A3YWL5L4EicmBwM3Ku2SFH2vwr",
  "key35": "2JfFD2ZAGd39YPLuaimA9PA5f3kqupgFYBephCuXRbb8LwUtCpbmUoQsCCjT4nvtVbvRFAVjyEgRFwvFDDshBnKc",
  "key36": "68qvNydN7gC6SRvvW2vMaoD1BCt2jJ1b1i9BVgSVioqiTYCF9CJ7WacZGgiqzXgR3huFyF8qp1YaNxHhcoAZahq",
  "key37": "5XEMZmL4kt1KRQ4vgSxg2Yf5kKe1WwxpBYFiLKSsD7zd7YuJ9HnmYXC7PoWsYB6QhQb3srmVV9vu7CJ4JS8iS1E1",
  "key38": "89pgc4GgmiytwDStyzonZjAEvxF7imssPKDy74jy41LmnxukczNKr5nvY4QGhqVDoQm2QnA3x5EHv4511za4hPP"
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
