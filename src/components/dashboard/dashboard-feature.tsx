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
    "5H42oTPtLhCSKTze4xYUHbGVFNEDih1fys5sqrwArz5LGe1cFtFQ3iGBani1m15VJBwYW7QVikfx3V9RzxUsprqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61UFF4i6Q8n6osTS2FKX1cZY2uQFuqv5Ftu8p2hcTXuxUj72M6crndbVT1WqVU3z3PSVvoY6Zk2BsDMpPsV1kXTg",
  "key1": "3YntdawS1ozq2BA7hF6nenbxjmjB9GvZdCwTjXzyZ92XoXCK96FnVCiHC1WSccHyFKKPkLKf1REftH3xQhXDETTv",
  "key2": "2be6JfCff7tNU1hBWrSmzHa6Vp22EjpGM1u7TURKrFnDjLQgNXiD6WE1MxAYYViKnsjeGucJ4SodsuEovysJwgq8",
  "key3": "xHFL44kipBwYJAYDu7Pi6qMPDyJDGiCXLskDaTLYACXePx3Pnt5qoum9rddtTmTVE4GN44sYSKzMMhiw76mqVCj",
  "key4": "41qtKeQsSFFkjFh9hSPXXx4DEaSN2DsPgFVa2X1o7m79hswN3xS5XCAdVNtk45JAT32Y7SSQESBMK1Ko4ELEnFEd",
  "key5": "3xR1ownPrtpUPe8XGTqSK7w4pmLUHgX3gasU4HWdfzDY6pCtE9284eW9TmghRgaqwGxvSx6enu2mtM2c8RtByZms",
  "key6": "3rsroVCBg8LoEjf9aHMeDTyaYC8cT2Sm6DnoLeS675YmyQf2LdfvcNB4dxvuoNM13LQTYH9G4RnXLoU39enq6hLd",
  "key7": "5vTMvP766FR48VNb5oNEvjmQv8QnoZ9kCTwhJiffx3wZK18qLsQHwkbBLnBV7JScMgPDemKwbqFADeB9wfwoNgUE",
  "key8": "cBon7Wn7kiVMjtxNQLhN95FuBfTA7o26DgUZxeSY4YQcG3ZD6YSDVHAAkZdtTc9orhHd55sXwXLXPsmpUYKZ2N7",
  "key9": "4KuP1vtRGgn8jUhdWruoAcndmTc8RkSkAprMD6UhRQHf2ccF3eeifDgLGERVskmdjGC6UdGH7v2zohM29zBa3NXd",
  "key10": "2erxt2DEPpXZz7riWweFdt1kw9hDTHHrSSPsefXJ6qg1sbd2DGeFd27A8mLSF9J5CN4QeCHEn5DxHKebef8zJtsX",
  "key11": "5dQXqFCGCqxiM177Hp3gJ943pM47wyupH2xxuQJVpcVDRPekSV8wuyjGAUSAGKkx8cH2Tox4Rfnr4YfTfiivGTDY",
  "key12": "4bqq9Q299WCprCDQmQXffPWwSrH4kBDq2uZ2DhSHPyG1sWLGJA7jboE762Z7kaGXYyzPASQL7w912c3cCpzsHSqB",
  "key13": "5zcLQ7JLUDQuYeKet4hh9nmM7Lceh1dsz6XGjnjG6e17JtqpWWAfLjCQVS3HmHmYMABHMHFQNVRUamHS2yUYUf78",
  "key14": "4qHpdDciMYuteGV7fmmwZaPunut3RjSXR1h72WY9RnKZZFTcwCaoVjaem3VGs2itnUBVZtSJeQNKF8hjvmZfmLn9",
  "key15": "5T2NeCiyTMy6bdzpa4eM8hvRwktKf72uZnxJgR9Xkpuv6rh4LxvvdqfKnJXzf5DwstCoSTN8MkfCbxbog9A5NDYJ",
  "key16": "5hkC2Apb4HmBdtTDma7uYexM7FCoxbs8avCHvZ2oGtzpQdn4kN2DPhjXQTPMUUz6ZxoPZpWJZCNgmrk3j14ww9De",
  "key17": "27PGjjKFLssmfTY1ZvgcHj9Puqe9V4XufMuPphGmUMQTH9nYydhrnZujdDBYCjGroDte3DV6ozHNTXrbmuMZSZKT",
  "key18": "2eRi5t5RhnpXKjBQzaG8bLAfgAAbcjpxx5rcs6MuZEWm3bhLmm9N2jftecpDbXR29gsUUKZpjVFSYKQfhJJ7Mr7G",
  "key19": "3ZVR7DXDPRP2Cbz2uq3jVhKonAvdbZ5Y2MnNwALZeA7ePWPc5B8HsbykF2jsrQisnLyEwQMp2WH9KXQKBXwqQqEK",
  "key20": "2aR5WQpbRbRM3vEmmp8cByzwjct9EL5Mu63yojENkRSwTrGKtYD7nxyHuqQRvhxw14WTWKBQCH4JpgEeT4nsRhnt",
  "key21": "4rVekaTy7UDEdgz2Rwf2zY99MzPPgDQcHU6Pc34ePk7VEQg3SVse5RZTmizg7ZT18jvg6nZ3yYG8yaKc7sqgdGEF",
  "key22": "AgtNcn7LTZW6D6obfJbtenQJwxtct1Mj9bcw79WpzMeXQmxcTcx5ojBVwcKm1umjSk7JKevDGNpcnGi6oHuXSiB",
  "key23": "3n39S47AG4FxH1RxRQCjrMBGXMQN4HsFByTRH3AU4vprAahEF6SgFXTgTfPX1zHUSPjyU3uDR42HXBMnDEd1e3Hh",
  "key24": "2LkSRr7q4XR9k8YAhwcdLizbfPXsYYZpsJAFZNWoycqsFgeE58FYacbiscLB5oJ1B6RvUn7yPmpRTyeSJALynog6",
  "key25": "67JsbnPSpmgtDpfzd1xAv4A9kowv6AqS8ZhruHgTieYRg9men2F6cF7bs6GjyGzr2TcpKw6aR8kvCHCb4mABQ9d1",
  "key26": "3ga7kfKhp1XDT4dwguBFezWvp5Up7v9jY7Jo98HaN6c2SoPfZk3evSX2k8JEBdW7wpHKNARQfS6tKXdZdSmBZvRg",
  "key27": "56Ld7EYskT2SqdxeTQV5QvFsyVNH1NfdxsbShGkwnXgwvBbNiF1dwSLwpZrd8ngVXwiMn5BAz7kHrmqD2i3WiLHd",
  "key28": "3UaqBqjp6nZDSLZuWLfry5CuJ14QUWS2whuozUbdzJfkAFKTd39u3VZuHLgfqFB1PCKsJKBrGByrG63yDAzuMVR"
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
