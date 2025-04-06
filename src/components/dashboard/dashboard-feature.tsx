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
    "2o7bGy48jSzfkEe22A9Z5c9qbvZwjiBhkQRu5uwVSxCRueGAsQeftkCoNpByMpVVFpRGG16zR5qYrM69EKhtZokB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5vJsjMidLnWRUnBCTUJ3tCeFLVDKHVoDBQDDMRK47sVsYZUtChPeHEsnfrgEJJ7pp5VcdgcXxQYp5KDPLcLSP3",
  "key1": "GrMymgGdisNpczky39fbjBfQTFC7B2kLbFnhU9gsaNLDYoknD66qVixswv7yL8BneTcUXNYauSh3dut3y6noc3Y",
  "key2": "2rfopoeMJ75EyD5Ad5ajHaajBLA9Eg2DUvULfqyrdX3LYbUgZyGbcuC9yaQmz3TFJrRdQHW93BXTPviL9cUuRksm",
  "key3": "2ySfCAFUEfFcRae7PdtsEvXzDUPQj2x3vb1EZK6C2YnBAfphezDjoGxHUCysxWDFxwfbTzCsVFMKEifiQ5KmG9vk",
  "key4": "4Ng5pepN2FDE1EFcMYvECcDdQeQvJWXP4dKzQAsrdrvLxbw4qU7ZMXmVywq3MDLn82tvNH1M7Ds9dYvtr75ksiBj",
  "key5": "2RHXpQCbRFnf9VyyA2CVAGzHQrobVz93EXf9dgqFQEqrbzM3VDpBigGD5hHtA2KMd2pddEM3V4TPiH4y7QepgpxQ",
  "key6": "3XJKdPxWCKk9SXM9oGV2hYtkV83nkPPRVDDoTptNwzmeuDPsko577SzvJ5Jeb3G2Kj7JyukKw2W7qpdNQKnxGvrW",
  "key7": "45gMGsX4Yggj4EoGmjkQFcfaggEPpHUvz37kCGikiSwuAJ2ymmnFnYiPPvRWFWbKBRLuUaMH9eFBDX5fuSF84T97",
  "key8": "35dCp4Rn6NCsrfSXGRnPbKfUE5qm7ZehsbSE5tRK61wpRZjjXYYhjzG7JT3w73w5D1qx6EuAfsZXdxQw45WpDB47",
  "key9": "3mMKYFNdw2WawXw8CmCRTk5EUXKHA85dWUZZcX5DnSouUWNSJGAi7hCKnawYkwoWe3fTRE4Dnj7eJ5RStZhGYwBg",
  "key10": "dfBKFvqbJr5tNtJ6wqav168QBbT8V1stwmWxYe9FUsax1s7AfqN3B8bwhM884tFhrkpYbsn5tuWq69tS8hL5L2F",
  "key11": "3YfDryXtpk4pGHsgDCXFpFekRwxf7w44yCVpEW3DbHNtL6xug3pDERiJ8e6DzJTimLcvfBJKH5e7U3Wo4ob7cru6",
  "key12": "4ebaVTBPUPqHkHwxLAaauqGDzkuFb8Vz6inJUwd9oPkxKgAUTAuRS6aJsZUmAB4rHsbfRRL5UMHwvSTfg4FXQDX8",
  "key13": "3qTy6x6hCogUwTiniqsW65tt23V4bXQdRjhdhLd4SRQwjR5y4n8rjb8hYntmJ2LBu6Ydmo4T9oc5La7rmSf1wVDb",
  "key14": "2npbt5VfrUW6C9c3tU9H99mSbTNdRrFjJuDqdHQ2ucegpcJs2Wb3XHfQKTRHVTECWKhG1AaQ8ys8rtgnrSAfHWcZ",
  "key15": "23rpfSJ1sRZWDFBWb5kXLvLfFsjgnNyHpAAsMMbQ51DteGuy86UwXKbSSUMxNoiKVpbmceqXnUc68ToRdjvZjQXs",
  "key16": "61tyrJ1DkhmQ9mUDCf7KSsqoduUL8P7kWzkCvgYTXDRhredA8GJDXmzqpJbqRoDJS6VKMdzj5KbJgKVBcYFbxQYJ",
  "key17": "3kuKmw7rfvtFCmBNQPxGdejZtvj8j7rHkhGL47D47YTUwWd9H4WLKQGPB3UGarHdwdqL8XadkWgMNwwiKWi3bQ8b",
  "key18": "2Hm8SoQP6iPJXfqRpH7cqyUz2s64CNdzJtM2omftD2HYuDkbXBYX63EAGUkBai5yhDizq98whyT568ADWxb1JGTd",
  "key19": "zNgcLS2wPAnW1AAhyusKJPdbg9SGm1jTFCdko44wat8ap3meVvrv5A4PCaynzwigaz9ygARynGtbmy9xFd7dzMe",
  "key20": "4MLRsL6vT5QGbr4LGPsawKYSeigJboFJxdFs46BQu8AAqrxuYbtePZPHkmtn5kHKZjACYv77XvWrn5EZCKbiokp4",
  "key21": "5rzN9mktzftptNh5amQNYMXh33BHb1KUQ2bQ6rZ4hWKTat9oVi63UaDqS8FuwUeFHzkpGmojvjwusRShfxPxbzEW",
  "key22": "3HyGuDXUAnTuww56fy9NBWqwVN121NNxXx1VyhEXtgthk5sSDXre29E8J34i9UMMuio883R3LVxe3zfYqdyMuhmz",
  "key23": "5QiQ8K4y8oXqGTvpR2ZEvFQUYi9982NnrZUmQFoBVAU1gB9eFzDAKK5VuHhwX8FDSKoE64MtvxQe819sKN9md93T",
  "key24": "FhGvjaeho4V7oySnLf5ZrsgXGTgwtYqsBwRfNMcFtEdjBH2bAU6wgBqmtJ1hXCSXUgKBM9fVj2dq6pp9MM46uQt",
  "key25": "3zVPyBqZm3uf8PPBGWPR5i5uG1Z7riNwam8YdET9kcqw3WATESXi2RxS6H9n76FYFtzeoB3hpRw49WRYm194gsWc"
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
