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
    "RGYfJKMCVKEBDZaAj99ubAyCZtnMNFx2aBZigCTEQ1FNWckb8txeZGXkQndinDhSfwg4HcBdv6frbuffRhhheRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxUXhxpQLnhapbcvHLwzK8F3jTg9c8NmFDvNqBjn6KqrJKzQPxeHWrtYzJ3hqkXJVU31bfbRgpkSp5fB12eBKMC",
  "key1": "3KWr1c3M4B6oN62LuEjH18VxwXzngy3qdQMtCJ9GaHrfQyMD1tbW5fCW6xrJh5a9EXatL35iZbGeKhrEkMSvgemW",
  "key2": "4fjvkd92WmiCVKQDeuAVCKtsEmV3y8Ae3LwNUKUKEL7Uucu2f4RHPzZSfZMD1Exk5LRKijRJ3JiyKTeLkLRjwWRg",
  "key3": "5QypBrvGXDNwJMnhzn6rdhZkPuEm7KzQcEYLJgXnFq9heewZXKsosEmHwKprt7aRVUye9aWFvkdQvAW4rTkkAWxy",
  "key4": "5NVs4f9wvT9N9sbVCcSUgpg8LH2E4mn4R7xtPb2xwxtxHNH9uYho2y5yeXpkgYsyz4afwNd61xhLKPjGAyHR2rHE",
  "key5": "2ua8dDDXdLJFf1AFkTPqayHb4896tppKSz1rTUpoxWhJKb7cmN1eWsZwNGgVB3XuW32YEiBwxYj8YTLfVQZecAVo",
  "key6": "5VuxnoLt7dGnnuo3Uz8hiqV5TgoenXDvxSaKR3vV1EVHnQaseBKUUiHDF1o4pi3hkhkV92YyPa5mhLtYGS2cYSQk",
  "key7": "4WR3cGLz8dsFFyQ5idywTWdqXhRWTFrPUQEe6mZM7xZsa8mAy2PddpVEtZxG4yKdpeTuBrXVnztKeL1psJvLTSyM",
  "key8": "2CXnXogLBtE8LKijnNasvM6DSvzBReHjJjKsvpsd1qXTP6w7hovcYD23kYLYq2k1qfpz8FooFXwgd36MfszTHPMY",
  "key9": "x2Ykh5ZgVGzrJVRT3HWtyfUcaWvWMRfdQjP91E6BvQuYem5Bn2jFwFRr6PE5BKYAvMgAjcECV3ohioviwMEGSEQ",
  "key10": "4rReMCyJA3M2fbFguXceDS7frPtScsNjXNojtsHeyKxwcN4baeDUaSZNiVZsZM9zULtNnqNw6t6nFw9HMsCpQf7z",
  "key11": "4zEtsVAqw7n5Nn5sSz1KPMamui6K7eGHEz6nVeVm77TosJB7414JDqr23ViFLzqmkkarTspTzE7X4k7RkwaXBeHA",
  "key12": "3yanj5t93FT4wCe1ZweTDR5R45i6V8eeycWZiVSPVwiRiLw4325xnD8B7LehhU6pw3aNnWPBrLJhRe6ktfsTnRBt",
  "key13": "4az4tEh4YfXKjpUP4kvYDwkweEoYpeBm5c4wHoGN1bykxSgcTPJNjbUzEPDwNdo8X6UF4FqffL2SiocxVLdJgfua",
  "key14": "4exVNnLddzyiWLoTEFdyCyZAdz1yMVBemUNL8T4sFPVp77nWkcBTySLETVXG9iwkzncfQyj1sNT1L4vBWASKFcRN",
  "key15": "3hB5QzjTtozf7C8Pus94YtEhAsAbo9HhS2iMibtAksxpzt6cDtgupSBzJUCfcyqXKT9cJuk8Zx4cyr2Eyh6L74Ys",
  "key16": "5mhZxBA68MCDG9sfv6YRUjTbkVzhPRn2k98vzHbRAh1wgi5VDSA6tihPkzaoKtTwfJX4fbybyEfhXozq4SyGpV1J",
  "key17": "5dyR7qQsQWohdrxoYK1ptW73hV1CYajqkABVn2SxJxKdEkMiV5Ax4kfp9WvDWs5wsZ7pACNtT6fsh7w6vbBjwkjd",
  "key18": "EgcvJtK3wRkgDguMm35RMa314QeLiRAdN38Fc5cFvnL3Jk7Mmu1QmWbhG7YJAWWXxarxn2KrGaHPZ3Qbc6rYM3s",
  "key19": "2FJUsiMM3vaJqqbWoxP8mVNy4zcXHiY3JokzozZujNpHPn43cq7y8S3MPydAajSJVv7yhKs7LXEm5GCV3fDD4WgP",
  "key20": "dAqLKhSEM5LwWRfwai9ng1ZAmXuH2NT8Br2mdgoLpzEjcr1mRXxyuAs5TA1iXYCqHyRzZ2kAutbiN4kGM5P42nV",
  "key21": "ZvywnN2TKqBpK9fqN35eWbskhCwW771Geua2U5jBS7FxWtGMHf39vVcmbG2DyH7yT5DgUVew6VcyTgwouQqmXA2",
  "key22": "3gap9LSZzAwseAMooC2NwnhMPTQr9QLVGaF7oKSWTLyN7WDKLqdw5bNLdRys1cngfeEnbxrBS7Xqf9fvTQWrnRME",
  "key23": "24R7aRVuAiERv6Z8ytC64oc2qWQ6bUFtsMurbSdXnsGE74DzfPyBo4QPzaVfN9UuTfdNctj9uesyraiMujE3zV6Y",
  "key24": "3A2RowMh1JWyvQAEBmbhLod3CsoMEu6SuQL3GftLiT1TH45sSQQN3wQd95DBKXRhRuyHN9pVGevpZ6Hdr1JGsM9n"
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
