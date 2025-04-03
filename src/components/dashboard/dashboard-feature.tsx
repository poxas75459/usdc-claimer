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
    "ue9dLmacpAkG21TWXJAvU66GB51za4DA8HoaMLmD8qWJ2MMCx1Mg1cQpFW6zVQHC7kRworN71MfMHP2LPpauwiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BCLzhbKEPDacMmCuZW9gzP9eGRbEHHfyxxm3z53V6h2pFYbSwf4KW8no9tKXLrG4QapayESqFDMNrWV7DXXo1WQ",
  "key1": "4pBViBJ8bCdQsWPD3udwhJwYoMjrvaLvQ1bHaT4PV9Xqxd7ho2345SUHd1Aozm32gHJtiWoyg3Exux5Q5mNSLADa",
  "key2": "2zeRAbXHN8C82DJnyWjeqLf7UzmNQPdykLA3ouKvzkcAznUzzNf1mGYRZubhC7km4GEcw9wLeY2abVPBYCk4VjGv",
  "key3": "5yZa1Fuc6fyeV9CCY89JYUKrGmzv7Nji4ZGsQft61dSNqE4at4gt6nCpFT5nRfDhM2Wgmz4KRjGcH3f4R3HYhFuP",
  "key4": "5BcAErZXtBjVbAsXy8cidVFm7WXDJn7q4DWTEBjR3GXUySdvRL1DimjknCt39YKY87zXfNdoaDpvekK5sjt4fx5Q",
  "key5": "3i5d57ToaugDoNDYWTKw9WAx18fKX1KDzzqh2g7rnn9jmK4aQqaSKPMjaeNsp4Aqn2EUrxd197a1rx4i2y3t2zhQ",
  "key6": "iQofNSFtEVBPyXGfjCfZLb2NqoyYstZkk9PDnenrNjhpX2fw2javMpX1M7pcNppbSHh13kmH5grmHsmNjZWnfFD",
  "key7": "4SECfHPEWh33U3bnGPNFyVyNgCm91hFCvjmwcRAug3SXHergVeXpvyc3B7PtHzZzmbszPeFFAGdXsVj8gQQZ5U8H",
  "key8": "jU5zxV5UGwTCEyXRMmj6hfzd8YJZc6T9fWHQHzQHJoCueLwcZny2rrEMnxcGnkGpYyCqUm1FaQnSTZr27JW3LZ3",
  "key9": "26EA5bsDbwucayN5qt5zNJx73wMZMrfDo22JieL7J7fy5ReZyfudpqAH8wdyHtX2JzvXPSu3GHCpka9658qbgUiT",
  "key10": "DL9YaftXTnoWeQWWvktBmQR1BDXUmhxiwd9tiYFpG728MFNN8BeYaqgQJ8u2vrox7aSbTtPF6o3pw1NUc7sq5dT",
  "key11": "sCSEUqkmscU6QK6UEpBr5QcTU2b6uyFYfF6SuE355cv1Z1EWreihqAM3v9Hj9WQpgLZ3dJXR2Amoy3fer95tQ7P",
  "key12": "XWbNBAVeMv7U9HBtYvTFhSx8qimuLS6HuBMhwVww5X5f7r3qwwnkM7h7Ynb3nPgcykc4B5NW7b5g1BJTN95pVuz",
  "key13": "bP7MpqRqe2vSTFNN9fzVrNSX3HaMVkWDTkazjm4Wr6yeNr6dwxi5YA93v8pd8w8pBBDLMSsS53LBe3y62cCSi5s",
  "key14": "4X23jJRmwFjviXjaX8N9qrx6csFAZf5PinRoLJoG8Zux5F66sJnjspeAV9chjmMhg6gzZ1VJJC7di5vXNMUvW5u2",
  "key15": "2BQ38FhAXtR3YrNHLaApU4kU42fxrCxXH7qjNLJitfV7sCzH6ekFcVojwQsfjqTDVn2szL4brqQubu4683xRKh5f",
  "key16": "4JhbudThukRRa3hFfGLj8AtLmwmL5mivMCim2VkHjkySgS6VpK3iq673uJHHx22Jg9NfW9u8MSNgpEGTNxA8FHzr",
  "key17": "RB7sSvBjRrn3r8S1JbsupvD1GXyfdTqp3ZAdPudgfY8Bw1y28yXo8WJ2swG4G1pJLXeHx4Mu5BXkq5mEZNusKgW",
  "key18": "3TjbzCXmWiT5k5G4whzAEQxfLqRmpv7PLFoFUuRDwkQXttMVn9o3bzWPEaxcCeVCBNyiLzEEPCFDgqyqcYqDAn8q",
  "key19": "2oyqrPforjFQ7LRTeiS73j7MbSCxbFiTUrAZ795HyYw4ojfT81GXuoyb2oURDPnKhP5NG4coyUoceDdwsq9ZBFkR",
  "key20": "29CydToN7UT5i4tMu4BCpBzxpa4BHGhre2UaD9SVBgbre2FHhXaZ6qTc3UZLwFt4LSBr8boAFMGZRdwQAfqTcuBk",
  "key21": "3arw45uTeKG9DGfFqzBuFT2woi6tteJbZTSmuSkh4RtYw12CkNhbnhKKgrBH4S5eJLepVECCSzj2VqNbuTyshbBp",
  "key22": "4WKjEzaMAChcrWBugkPHj6RUfYzoNVCkQsr3Dtc18owahfGd8pjcr4SKYK99oMVvTJxbgQ5ChEfJqbiMtc5WL2dy",
  "key23": "4xcTqpmsnrcL6EkKqp2ajFJSnhNJAWe9THeDmjUb5CVTtsC4Yo2VsxEFWRoWyHSnLiEV1arqMuRtyj6swPcwNDts",
  "key24": "5WH9ZKizce4GqonUeJimu1eWj6KYHuH99PgUorJSUL3SirnAAfDvu3Fg6P2YvbwhtBserjb6hyPG6ZyZsYDvnDz6",
  "key25": "5gusgtG9Jg7QgzNEAL3usTLSBZ21kdD9Qs7Fbkht4Jr2jBLm9BD1KWdX9LuoRwzu4CsCR23b7Jq7TTSqeCmdNQio",
  "key26": "2ueKnv6JsL1cgud6epKn2hWjaNwho4J31eRwXp1NAQ9FpEgFNrQtPf5FTwmma8yk8XwZmbLpWnQBaBvncBra9EdT",
  "key27": "56mWyS7GVZyPxyfjLiTWj5BtUPm2hQNB2o4PQFw5h1ZAXRNXAdg3PLLfx6cwxgVesBaLaL8S5nMp1Dwf6TkNdUZR",
  "key28": "6313nH7QiyXLsf3tfDS8VkCoBBj1jvJSsycmd28MRuoJK39vK3wbgiAminsKZhVGCsP5jmioyGcs5PHKKaWEV6Hs",
  "key29": "4fVM7sdM6Qn3TtC2qrUKii2LetmWofNHTRvBkpEn8PY5jmXry5mDXJ3D89K15nFCYC1hQdg3XrCgKHbwnELC8wyw",
  "key30": "5uwrGzZcyoETjJi1H7R9D2Xv4nu8qCvbmsZtrQGfbVB2CxgqZS4yTVbDdRKoGXbC4DhUjHzW2rwi8XHWvUd82g18",
  "key31": "5iwUTWkT6WFFkkWzgZQANnhsvPkRnKnzn59oJPUikztPwVm1srpM62E5Nem6kJLYaRX6Zg69gCEiDu1Bm5praPxL",
  "key32": "DjrhcT6jAubcLAzH6LTYycaK6V6BsGYiotViBFLHGPoq7NQY17qtsJBBxTBHJKhjU1h7pp3CMwZS3UJ2H1i48MM",
  "key33": "5MdTPGPsAYwu5zTSdN56upfeFy9ex1hQzGTxY1pRR5UDVmCzQfPY4HH7Rm14ceyYbm7REqFWPwb4wxJp2ikxLUF2",
  "key34": "4Havw8xfqbasAH8pAmXcTz9mDbE7XVLevfeMAdVnhDWPB3UVn8fqhumiZZQRuCcMSaKBdX4kCWzMTiPyvuFWcdYZ",
  "key35": "3n8Zaeq82Qv44nWrCqpyqEwmNHQsZMNB1xRN55frktvNZzQdiVGjknyzfqYuiirRE1bXPFXgaXq2giwdrjcCY4ZT",
  "key36": "2i7aPy2LJzEw87NjbRMMHJmDXFspehGyigFx5gg9ixYd3YpvYDwwBaM6Kgmfu23fsN844kdJLLkATLE3yeKBWdLP",
  "key37": "5AaN2vwtpesTjm45y6th8sUZBM5h8t2gr4c15rBwA4bc4BBm6QvYUTt4bgQ1fi4L6Sp2Cw2ur6DsQwVAxv7nU9vp",
  "key38": "4JAWrmfZ2bxzU6r4C8EnkoUcACPdKQiRZoZ3Xh8PGP9GMYUsJBMYVh9uWfS6Y8vmDtV39ahN2B5tDxv5DG9dJ5jT",
  "key39": "UbUQZo8SQZh5NMkTTcbGegZV6TP9Y7JxMNDTi5VaEEWnWPiWD58E5UqtFZ5F24NisorYCJaUgT8FMY7aVeTrDZp",
  "key40": "3NPDrLrz4QrKEnvSoFUxUcwt63HyPMr2tSrwVyBiThZzoSC4RfHZSfwLofBNQ4GKX7ZRvx6vL5rGU9b3jc3SyzJQ",
  "key41": "4b2uV3USjoF2wsCuZe8Y3uMty4GmceFUFNUboBefwVAdX6mWSCF44tRP51iQDk4KdZRL8GTqGm1BmeCNzXwgCWxh",
  "key42": "2Rw5gBU4rBpvyqSqVVzxxQBB1x6TnRp4tLueH3Hk5xqL5sxMFQrR11LZtbAvinV8nUxip6BaLZ9YA9ebu5J2RS7o",
  "key43": "5g1TpbBAdpV1uGEy3cGhs9BK5dUMZxQvW6EZq8tAJ8JtsGrZcNb2B6SYsPhL1rJNuRbwZGBxfpM3kamWGDFLpoFL",
  "key44": "27NdHXFBbSJroREDkgNAVRwT55cvd45xjkPxp1FcLq2HFmsWGWxe4Xqdiq6KHvGaSC3eWo5L3yR1GCChYMc3ucAH",
  "key45": "3xdL8b6cE6kG58YEVChPN9ji8wUZS6qN4zUR3KtbhqQuTMzu6WDCYe3S48gG8Di27aj5yKYfH9iD5i7qvEpi9Egb",
  "key46": "4eyUvmfvmZFLbryRPGSCbHFLb3TKazRUBNSDQivAfC3YUyNm3kkqokMYPipTm5wgNKxdvrQMQfCPZTcQewQ55WQa"
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
