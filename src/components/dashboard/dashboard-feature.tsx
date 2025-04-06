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
    "3cnRCCVpR78vk187RHyUyKKq7y3iQkRRNg1uKvFvDPQMFu5aHqYJAjv1LDLpfULqQmPfVLA8EKjmmJjVqecib77J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XwQhBzmm6SG27vjQv2oYDZ4fWptrtMsnQr69NRxXGTCjYyouDw649rKXja6qsdUerpKn9byUYWbSZhNVafKk35N",
  "key1": "2z8yjn4d2NoaeEvdCE3xSDjvWCKnEKAE1pGBD6PrNgTT2ZZ6GnoxZSdHxCoY171d7dkKrT92GthBuJdBP4sR4XJZ",
  "key2": "XUG3Y7XLCMoarojDJyz2K9Y1GC4vyh4TdKouYar2BwCJ7QFweWBGuwnKjhnsEb6C49aSn8a7wPcRQCpdsxE4TLM",
  "key3": "5RkveCKLCz3NyFHaneYMCbXzrABxeeyKskBdSRhToJfeheEodtGWLhAP66zr7uiZ61F9Mvvfu5ShGEWJUibQ7zvN",
  "key4": "3CM3CfLUhTVTpSxQ9XrRRp2Vm5P5cu5BCESF6MSnFEzDU2awwkAym9mPiAKzEA9N96mbf8ALDaneQixFzCKftZmi",
  "key5": "3cwjxQLnDHJtDvChj3TEe8A1XkTkzTKx2h2MCx6qE2D11daMMcB4bABvdKfYSAq3fNvdhh943ft8Pt2NSSGDsjXJ",
  "key6": "49RkT9JQPYisbirdVbvjKCuuuFQiSYWmjXupsPRAW78KD775h14gtQnzbyGcbk2xM7dLCc2qMf9jqtQ1hSbrGi3o",
  "key7": "3GqTKgtCt3k9gYvdjorzQsfHM4ei6tM2tSTueunN8JpYm3CdAJpy3hHdXqRkhbUNMuMTR26QMmHKhciQfsgj76xk",
  "key8": "3CXzE6FUjQi3iSgjST5FjH3Wvo4RxSHHJ4wh2t7dmT25gTf7s5rP1punriCZHocsdrE6SqRe1yVWdKpxoFnoAHWx",
  "key9": "2iPy4JYN6gjmKMhjemu115oHtsos9jBqmhsM4Bvi8gXUkjrwxpLwa2ufqSyrEBsmNM46CpFJUSXjJjAvJhgVUjut",
  "key10": "3jViPCFjXvKGCYgUmKHsvhL74DKV4pPwyPtrKSWdYMstYxjLdiovdK47eYbFkRmghTnhwYJJyxgxwyuJk33aeSNc",
  "key11": "d5rTuGLbJvqFLyEyybYVxiQriPzrcbt8iS8UZAr47d1cKELGKr8CZYxqNhTV4SEm7XHoFmxgFhMSNaB3mB82Nc6",
  "key12": "44B9Viny1K7krLe2fjJuvB2DCDwZokLrh7HUyQvPXfpk3PeFYtuy7A2waecMM6N8t5Rd7PUVUjR2Rj7GQ82ZTMvt",
  "key13": "vuuXknQPHMxtVx1KMaUABQeMAQzVL57sZaoVLZjUkT8BM1ipyvkwgRZfAzS44a4jbLZMcwGGhNurkrZ2z28iFKV",
  "key14": "cnCH93UMhan3Uje3uEPwZLca3sddRDBjYFUc3suowQAWKtvMViGMePyDtKo4yFrbsu1xzEnVnJUjXS7kGBDgKG1",
  "key15": "5eCQwoShGK4Cwyn4FzQeBqwUhC1WyomaJAmGrLQWvVvzjSd7MTCCTEBfzR82a1fXw4VNMC35R8Dw3yQKshkvFm3Y",
  "key16": "5tx7V4YF5zTpuL5NyZMoJXSo9894JRaMyEBK4kDLKkbP8ojoFqCdhBGsGVZi93uQcGmVgaTYxYoCcXRq3EqAK4ng",
  "key17": "5n2mKEp6pUFepPj6Y27GAJe52wFqkHjTmDRnrqdNQgzhpZmLpGCb6MUNn94boYMUaW9psqMCKimpYvjRYLjzGvt1",
  "key18": "4zy5JSj9EvjdFGDe1qBPvQP7i7uShBYGdNmciHQDDH98VAgoTsP237C6BS6AYAQufsfD5R5Y3fkN8NwcSiXFWsV1",
  "key19": "3QxNYg2YtpCPK9bt7HoWWRgHMxM3WrGDmdcR7LdRXFvjMHXtPM26ofde6g1YrYkjYRehDRupCx2dQZarJARSdZs2",
  "key20": "5JnPHNWYPN2CsC7AAeCzVcciuhGLH5L7K287qGHvbZBhNh5fRyNmaouRgPJf65c5pYBk9j17XDihqujUG81k4EuQ",
  "key21": "3ENXTKcziZANTCt95HeG2gwHU5MsZRunQGAXG1G8RYB2CegzMyH7YxL7m55EbEazpH9yMDqQkGobmNYGFrdRK2vU",
  "key22": "2buz4xHgQMiC6Zifv3wnu2Q3HTENMn9iVkXSwtq8y49EwWCV8bLcMtm8pG9eiziFt2AyFSk3FeeB8s8wYQi3Vp3F",
  "key23": "58S6B5fcg3sPmJY4oyZf5PXaA1beWuYZoo9gLhpdsn9Tdiy64CfFBx22nbjN6GGu1NutE2MnUMy1sZ9N6STZigCJ",
  "key24": "54Nr63Bkxx1porEmD4KSJLVrCDtN7eBVKswrbw9wPcChFQ9VuGmKC4ZtcocougCd2rXP1NEvvxXc6ApqDJKAixak",
  "key25": "2ES3SXXFouB2EVeTXLmqkfhrM25sT4gSEuyFmCgHyHeBxk17CkatcRBCrupQSLaa5Dy2J26sR3ZNSVJe9eSSKFEj",
  "key26": "44jsHVUE6uGfKhpET8wiEdiHgzDLExCx385arRLugPTfN4YpXd79kgUQiBqhBYx3SW57ynDg4X9eEHTTBu5nNEDE",
  "key27": "4e4zfxRHN41gg29yo1VzphiGAWwgDs49s8tPsMRxz3SyMnTDkVhUb2syGnodq4czVC3qrFhrkXZp3Q76LQKqxKJD",
  "key28": "h3ZPUFSLWpgUX3EptBWB8ox2sRMEie4RyWj88LxwywfEQLSeXV5WfoTUqz6ygfeqD9Gn9mT4zpVNhap5tCrAwuS",
  "key29": "4WoTLZbegzxy5QDAEBqXYVvMx3wGqoEudwMLrrmuexJZsEFmyeQouxngRWvGdYQnXMkK8WdRBpMrkJefpHTYUkd3",
  "key30": "5GZQyduhr9vyxNdvU4GLFE3p4R4iLyAi6M6z9ssABPY4JeeSdqLNPYw9vT5n4kckypX9TneE77rm6K7YX31DCCCf",
  "key31": "2kWYezUPocG8eHJ8PtmynrEMUWwzeFP2c1zkYyKBSFvTWfU11qYVq9apXkmTWbTNm1eseqrUSZBLc2wsWCqNmiWw"
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
