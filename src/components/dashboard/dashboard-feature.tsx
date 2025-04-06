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
    "x9NXBEKBhfgk4p2sesubDwh8PWEQLk1A5nVB9U5QLbX8tCENnamK18VfDN3ysteMqAUPEYA2hLNDc5pynBhKz94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BJPPknhptCYma1rBvtBRdRg8dmFFE2RLdWHDyL5HWSzUz8qMPc5Fxq21RLJQJ2Vhn3pQktS3wb38845RdpqFrXQ",
  "key1": "5YWDLNGb6pVGYRqXBrbdNQDZrcCFb9LrQSnxm2e8feGKtHj6RVPawkmHmpJvay1rYKsDVw1US13r5DTpFFBcJsty",
  "key2": "4KeZBSSayeefbPB6mJYCvofALVCGsa3JevKP8if9PfoAspJZCQvtJGKPYh8F3hhdKKnaQaTJt4dGQJxHgk8FxXDv",
  "key3": "maVPr76HaEKEaooT6PM6jGxcQvoRGHKuZWA2yqHjfaB4tU4bkwYSPuGTwHPBJeSYzXq8ZN23ENfF9qiJ8gucHfq",
  "key4": "2dc2M78mE8zqbPDJ337ymvvZVju4UN7CbhrXQ8NdkGJsgaVfVfUJiqgk4XJZzVfYUqdtv9aACNYVqnmbzeChupCU",
  "key5": "5HChXy1dF8evCbT67EZTCkTop5x5Kqm84UY1Jcaer7pLyC5nPTETVtrtxhEr2e1Qx8W1CGA9Cauw9319zgtDKUUH",
  "key6": "ewerCAs3SyBMDsQZs5xEmR7cHj3R5yUH7VjyRJJtnR3F4RHAhL94Z6HWZgzKCLMbA2PdMrEXnZLiKY1ZXRPueXr",
  "key7": "3YjuwvZsZAsnfgm9s5v4kGepKNjteyfx56YRkur5jgE575rL7fWmqBDMKTYYnuVwPg6Tck2tMDyW1HYkJ76dReWA",
  "key8": "5UZ5YvYmwAf3S1HNA4XjvniH9KNeKXGVrK15XFMA4w6HPsfQVqfWEHfR6JZEqH3umdxBnoEtM7irECZY68z1CyGa",
  "key9": "2YiG3s2UUoBtDM8rdQ6ziYVvJoZALJgr7FJLpwMfSokwLDHuoJ4Vrzh12LqaiDa3BtHeDRtFSFe8EL8UFkXSwDv1",
  "key10": "64a2JiGP6j7oNp3tUSVgDn9tWh1Bwe6EnvTXRzAm4Js8X1AXWGGSfVfCUHp3hXYjGjh8FVUvLNB2X4a1RfkYNgLp",
  "key11": "2VMcTuX7Tinegp9YvJna85mxC7tz4x5aNKijtufmeKY9THYaPnYhi9tmCxnDh93V9vXqN3crk76i2Rfs7uaB1fRf",
  "key12": "5cma1ZmWRbX9qJfKbrbWHALyvGhSJ19RTL7nysvtyHMLSmqgU3dTGigBD2WP4JQtCmaZRJ7xGbP3fsQFaTzMe9PA",
  "key13": "5u7rdqYhCJ3pYTCuAE92aAfQzmwCPygTSMbo1yS8ZU4CeH9gZHuCQ9wocPh1hNopufmNTrP1pyEjuj32X5JEcPob",
  "key14": "2zgmed69u3J9FBQM2sTL9RfZhZEisaU1FpmzEydn8iQWFCpSGS8ugoz5J1Z7Pu5er7ALjFADBtsYmUhUYXTaD6Ao",
  "key15": "54qd1BTRSRbjxLALZwyV2WriFUjzm2K3vWnSVbuBxvAU3YiASrZiN78Wf6aBjt3NWuPu6Q2x5f2d8pWkQCHXbRnp",
  "key16": "5PYjCEWCtvtXXVCtppHZfhGZSdTGpGDNjskdugVmSDca8tDa8BwkG25kVjJRwcpJtDeMCYWwGfravTjbET4iN81E",
  "key17": "uCAvXPTRjDxkEee1SM7FDDbfVgG2NzEsjS34oM3N6nW5sumpYzFkcPEmmrBA2wvDgJsCgrXXg8HXzKJRS68ExnD",
  "key18": "NEVi8ruR4aRbFfHmkkxwLyW6qgXebZHEZzvBpPEriQR8vKX1D9hhXdjpFTLt2CG6cKLPTYmXmtQWFqFtBQXqPFb",
  "key19": "2tKu2buxZDuddmdeuGzQL4G9k9VQVhEaFMwCBHW9PEV6gaFy1wJr1ioV2wz2Pn5EequByRpkPYsHL1Qs9QxN2SEn",
  "key20": "4srYmHw3KwyqHxYFzRnxSENYg3RnwcfeBo7j9Fk3dbzUH7d8Vy9kiQG4fo2uMXXBUpC4zbgbAneZbxEwZauqXc4r",
  "key21": "3eN56QJDnV9PiNa2xRGGzFkpXRkS2y7fA3JUbfBttncSa7osTwaszXeEdQoCQbBdEeVNu7AVzMXAvhgUSswE6Tu6",
  "key22": "3WGqsY81rqVuuN4ycZeTYhSXgHjVaSxD5gLufwrJWifsiFLSNgvvcQBdjs8YhAZeHvRc3QueChXWeX2MVHe47xiS",
  "key23": "3GuF4XCE9XjjoPkzAoCcCUEPQSmR3KKZKD2rRZXXkeLmQuiSAK4Y4QvyPrSSLWvYvrJkfcAUFenkDa6xtReA7JsG",
  "key24": "aWwGSy59zshAR4DXXmwjJfQKfnYoJxzUVtZPY5YWgVmobkaoneW9efneHxp1kLYprVYtp4t4fvkzC2ak6u4Ukhs",
  "key25": "4Lf13fYYQGhLTcB5Y1PYr4vgZQ11RKtS7KM44nxjRjWnuBk6duEkjFfLnyj8B2smze4UTYrKpZX2yz1zV33fvzhb",
  "key26": "5Thj9MU9t7j7s1RvRms7SsRcREzXnFd6TuqFCUGT12mJ6LBUEGZxT45JYpfrvKYpSCrq48YpnJcgQAeUsrXaPjep",
  "key27": "3PKez2pFC545PMJ2wo2dhdsb5cEqSkWz2v5Eh9K3MiP1NHRwCjc5kxWuwGN3K8p3dGtzvUBX37TRspBHjyh4D2tc",
  "key28": "5x6xMtdxaMwmjgpybMenDnJm2q66okz9onYRbHgQcEYY36bMRnty5ztuiUmjLd7Y4ZThDpGfpYxn4WgjFTANTWpK",
  "key29": "3wdsvDNpoyogzqDWVrAv9xDk5xuKmc1P8NCR7PvYdUMnieQrbr9CcNzfpU3vi96DyAFqLq14pRn9oVZQnkTcHWNB",
  "key30": "VxLwsfbxiQXFxbN83BDn1aFaZQrEnFgoaPoqYsuw3C6dRBa8mYQPaTLv57cxPfbfGdVyTJHbWYRUePh844Z7vfK",
  "key31": "4UJfygcTySf5S2ue3w7tXBUa2wKonw2cyU7sj3B4DmuXUcFvLMHHxot1ZXzmNUY16jrezdB55kHqQJPM3ekFX9QN",
  "key32": "4WsF8iWgLaXbLd3WebdMHhmYnULMu6XKQYx8dTreTjZmk2xQjLsMGDYQMZVZ6wdqo1gco9DwCnaKkU6KZTDeptPV",
  "key33": "2nfnFEqFRdjgfWYv1gXLEwmYq8HepujJji15Vht8FQsdoHk2hiz7sUog4S8dbVeqX3MfhKVPr1ppNwcJ2jxJ2k8Y",
  "key34": "5YAt1dHz3i2gVkSWviCiEoAE8VJ63RPrhFe2U9NeyYhyBbdXYDGNJoJyteYQXitGapAS6HbpYFDrHp8zQraBYBTb",
  "key35": "4hmfmuohmfEDUGJkejfG9m8ukAQUVQxcxmhZoqbffiCQry8JZTsFmSEGyxBN8R8oh6eTAt7MgKf3Yuh8giQmUbji"
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
