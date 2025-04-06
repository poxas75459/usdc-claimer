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
    "65q3qA3UE8QSdLNbgRhzBE9gXoTAEa4pQyR3rnvimU4oBNZCVUBkb27XErCgbwjJrWRh3RNJNnk1Aoh2RhJoiAMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahQ6jm8Zaz6WWxEcrEFnDtFFYce6rJQArbnSe71dPDhFmFkF8xSRa5JUJ7m5hgBsEnRSDg4fdHtentuvFNznXcv",
  "key1": "3C9h5vbEqMLNnNu2bTCCjD29we1tatAAB8LHJEH3i4ephTu7CY2sguW5T5eN4hHMyvw7ihgcMSq2mMLaCvP5KBxK",
  "key2": "CTGE1vFTzgD7PnkcDRsM3UhbMRu7ZcqrJE5MgLxwEVymULtKNFGYrDCHZvjNYpWuXTSpRe9akScqXeWAKLJcmKx",
  "key3": "4FjSMbP8bht2TosQHyE14SnzjKbzNdiHfXC1ytYRbDbXUvsEVsginXGVfG6LiHu4tJyVFByotGtzjjuZojwh4jGw",
  "key4": "2X15bQKiyoJ51uCkMSZZELeqwXcxTg4nrLBn7cEysUmsGNqa9yG4xzWSHWd6m6g8qrMtPE74fETT52Be1wcUx3Gz",
  "key5": "1ZUChPSPbFaruqyuFSLTprk6NSRobjQMdSMKFJL1VKnwg7UaCN7CnC6Cwbz3qrLppZdJDB7V2P255nRNCU6nYE6",
  "key6": "3auTAPycgPWrGjPShMekfJT2C7DcDpkzb6qrHGJx2LNeVKT93Hpd7sCCMrw1GHuqGmSg4wnoMEXQ6JD6DYV9vzjF",
  "key7": "2qbx9KjgyWKEZ9qdLY5Xm7eegBgZcngsbwd1ESSiHL2NUUUMA1vEncSajc7MqmZcG7pw5P7NnndAX7JzFdgMmV3j",
  "key8": "473XRsFDNsR5CUvZcvczi8sg1tEy3LgniZVfKQPy1k9MCrpNHorRJTavw7v57dw82aTCE7VLA9WgMndEs2XZEXeR",
  "key9": "3hg7KGSRRfKLX9RHmFLjFqKJQsM9AsU1EHJ4qhLNeMAppmwSKNsX6jqaRDJ9sLRuXenLD9meyzuL1wqnAPghAarD",
  "key10": "2zVrWNFRUYa8LTWBcsbCWHHhCri8KLwPBibPPcrR4zHdS8yDpvaH6mp1cVPxjxpAsR1swAY4gkhUWMo5T66kcDDB",
  "key11": "3X6xuT9tb9yH8dwHXE4Uhqw6EADvsUjC5qdwQQVtKVvsQMSU9j76nJP69sE1FnrPigD3LjLnWTwUdD7afj972iwp",
  "key12": "27bXCH6zkSk3NokM9TMe6tcUrkoKu9HCPjaWD9ixncYhag1VxoqmBSEgo7qvbWWtYJZAFnSCJju7xhYzxUXixTMe",
  "key13": "3H74828BxH7ahWwRa9eWe3cW8Y2PE7Eo9QEatAhqDZ7aF1P8kLv4rtWXmcFiDmMdBeJ8HSjFuhDjirbMyrwEQof",
  "key14": "2rFvHZGoMmrbbsyHYgdFENjkv7srBKtuPQNM95CBzE1HihfojEJsW9BhzRfxBMLtWnY1nrQGvz3aJ3HLE1WNGna6",
  "key15": "3UBBGRFGezeNwjjHhCWButuea8ex5jh2Na5KYkdN6EeFg1bbVg6cZw4hVgNDnyYNsfXC9FjLA2CbD9M9fuV7J5Nx",
  "key16": "5NvT8otqYV84vsFXvrPphAZ1x5AZvaDCgejzAqznszBaaNmqRZbtKa7pvtBciSpoAPwd1Jctefk9DB1EoWYyE8pX",
  "key17": "64V5H4RR2mdNRkEGb9ezphVBkzU5vDdhL5kucc84Cs6r9KNSKozAmdBzkfG1siLCPLtbAQShgzBCDeye7DcYNy3r",
  "key18": "s2VJYsCVCEfx6J4G5u9y5jxQz92yXfawErcYe7whjV1j12DZ6VsWTKb5ScQ5y4sfGfAp9NHLjdUkZiwyd7Uoz74",
  "key19": "252qoFssz1zMSLmP25z7E9FNkS3b4NKPxFBZSYxeeYzzXGH4RbRTitRcho3c6SRF6jXztkLcBkFoUCArXPWnNNCg",
  "key20": "2xxpK8N3wa1czxrL4aM5putEEud6Fr1mhPJGuZcz3MAtstZKSjrm4WktR1Tpfc6tx3GKEQ4jSufHFz7LK3wMfB6F",
  "key21": "F2bMzWP3Bjcxf4kUghYAwS4ZrsZDbJqme4csee33b26drAr7c3jawm8anX8Mttp5nQTAJjRHMSjdM7yiEMZ3RT3",
  "key22": "3k9FYmRQScPpk2Nxu9pozGhCM1gMKox9oFrbw9GAjwK9ZJA2fNX5eghLsbzUDzGPAJPP3kFQ2CB3fGn99QFHsyU6",
  "key23": "3hjFz1GVqF5t75DdgWXT5kDXVgiiW22u61n5k6ZgvyfAdT5VAGtvHzE1rrTPN9nSG1Vv37yZdDQnzZy4FSynzPNL",
  "key24": "3mQiMbw1EktG455WW4yyS2wwDi3PTEgDG8cRP6qrnbAA1piPFXiKULjNphxDkWDKQdP54eA9awpyF2W66BXKkRdk",
  "key25": "1222BTJbnD87ZJ4BXVTdgDPLs2gMRho3mNMN86BBw5mpoET4E6BHyvktbsrQj59eJYhwkXm4SeqHtDK5jiPwCj6q",
  "key26": "3tPXuWDZxDQxbuDSG225LGSsf8JTTmoLAmwtK7VhBp5xPsRTbbar79thcghajjjjJPGZvjLQYpWFx5npvghQM9M7",
  "key27": "3bwkqpUamuMNhtfABMCeMbJMZQjEEg3GytDGn8P2GGXDwvvXKwg6ZgWQovJuzL4vbFj1XHKNrgxmv7HJKVbJzJov",
  "key28": "2fERAfWTHzWhf18AhEcGR1vbubezt3ce22BTFPxgHSxpNyFaS7Tci5YVoJyPAZZbSNK4B6Js6VJq7DeMKpyrqsET",
  "key29": "5FX89f7Fg6jBHonCa9zU9B2RAdN7jUFvBeY3DA17dAthpx93wCF8RkSn8sgqRJx7GgyQaQ3MpzuYffE4jBiCdTYf",
  "key30": "3p7GWBppH4cJYBPeCidjmTHSJaiCa2SQbDmMGRM2KhDBM3RbTKfHzaMEypxXycRzpRzsQBteG6Jzek8Yd6xsYfyd",
  "key31": "4PeZ5jRxnzLq1bBwk5WaJub77jnQmJbfgAat91Wa7GJ4jmivAh4Q69aK59TLLnHfr9y2Z8GdaHd14SBkvoaE2PPa",
  "key32": "4jphMLJeeLsdxDBhRKNP4imrXjKGKpKF3Nyji93Wzjaw5BVgGCfUAe2MqBCEKr3kVZAk9qvFBxJyUgwqy4dJ99ku",
  "key33": "5kigsrCymwrxTRqi3FQALNNJR7LX1ZiXrtLYBp4W8yVFZv46gqwDMpR35JsKQpcaJsYeT7KeRf6hZRgYNWAEN4Ka",
  "key34": "3VL6APFwGRU6i5UjSd1Ww8v6L7qPdsRXBKtYj5JAJaNoVgoAHw9LwHygQ4NVc3NXngWKvk94V4wi8Z4Kjm7kBdpy",
  "key35": "5SfWbuAreV6v42oy4xmguzsHLBNp6Ch4J3M4YhzfLKPX3s4BDvRWm8uUYouQWBK2CrLYh5qdFSA4BLmTC48Fc3wH"
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
