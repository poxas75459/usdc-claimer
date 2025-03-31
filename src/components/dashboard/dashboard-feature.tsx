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
    "2iGCSg62hAXHwdRAkYDgFrjnN6b7PYWh3dvoRcgxjER344w9FNoniYV2K5AxJPuRw9Zw4CwPkaGcpcHzYBx5UZ4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "quaPCuAEFuZAGes9gyMmd8UgfD5oMq32JBktZrKzhg2TDwFKKMBwkAvBPD53PnRmF6jHpJoxMXkHxeGXEoSSZ6x",
  "key1": "gvPvPnzDrFe6NZ5g25bhSRJVUDgfh5wXr6dyDUdZyfuSfpAVy8J53ishBdt58APG2PkzXdV46n3bP3j8iXPPn8r",
  "key2": "3NBaZWJ6CxqEKAsfepvJHXth9VnZESUcScj2rD4ofHS3yEd8KBXrRq5zatDy9Pp2DyEcEY3uahBhByA1DZWos7fp",
  "key3": "XinERH5Z2K1PYRdSivdgngUmjdCiyBUJG4b8V3tbsta6Lf3mDKk5RoLfBmDQzeHFUdsuxQEYoZTD1VgDEGRFF4n",
  "key4": "4dmLasYbwqXmnWruFqPkeujnbqYFsXH7Xe499s55fFQC9JQ4ruoN4Dx9brzdkoo8bxLkDtgerFGkkDf4m1oK6Fvb",
  "key5": "49fvRzQKDTnhRmkfgrSVgvj9hYbjM99d94tUKB4Jam6K78ihYNr1YUqfvuvBUzikqzRVaA5YNswxpvXR8AH8DWwC",
  "key6": "46JmKv7bsxsh3w1jwLZ5JcfKNJULQu6eN7HsguoqjuYYTBaachGFN8BWhJTfGhwCxJgTNHy6zf6SLkfbc9STU5yR",
  "key7": "3Z5JhvdCPZyYa6wQsxEVGHWpB9JJfBhHigaJskny7io6MWJmZds4j2JFZbRvLHVh5stFmPAFiK5WDGb6SZno38GU",
  "key8": "5BKULEtvtToYAnrVzEh3J1vRLbcHtqS3KnETYMLbqSSXUbM6G9v5MUNeviQw5s3qjafBqjHQBuHPR63ofBxeUNWh",
  "key9": "5BaEvUzYot3D58aLVv52SLvtUYB65wqYiXbrp9avvwwZPabJkQvunMGgKww2kek8fvrm3WkadadwVYoNP7VTNfZA",
  "key10": "3jATrpRpSh6SWuhznYPYw172E29jYhBMHoxyjMVyu49X6FsJhkzVzy45YZYCfJrRMcsRZioXZrVXtgujz85pY8sK",
  "key11": "4GbjiypvUxT6y1pciJ7Y1GLCunrFxqRvSxHbDWyvuT6NbbiVChkqK9CkwxCSmsR7FA5UManeCnNvdtdcZdhKcpdS",
  "key12": "tj7RyirfbZhSphSa1arddyTQjTp8yhpPDyQng9JDYvZypoFhzGeTM1tbrW5sXvJHN43gvfyuRTULqgTSXE4d8X5",
  "key13": "5wvFpr9Hof7eeqan9hwNogfvZ8vpNtj3cnkeVHmU95Gj9fqykwdLEV6yfK6LmsKQTSNBJsLmvEE3eVotjFJNvtfK",
  "key14": "3jSgTZDi9EqhCHZJ2xdJAmDcF6vUEbhgSCHsy1xuzHEtdY1feF2WSc3gMxP9urWiFsFVRdriwnuR9nVMZFnhH54g",
  "key15": "5uYm4SGvM61WDPNgNbgP6sJKMLD1Y8MK5xPoP8d622w7T8YVjPxU999AT9kXTWR2raEiEwqHrrNVr8cMT7bAiRmQ",
  "key16": "4ZhvpCcDxWxpkzkU4AydvAY1ZWYdyGwxASqD8PYueTsM74C4w1VAvqkEv6RjWhsWZeBehNQRHejQ8tm61TdKbb8G",
  "key17": "2o1NLXYgJEmbqarYP3zEkmkszpQugqRfxHoizTmfyuear1YJ2uGiJaFWwqG8L4AM4S4cayAMXen9s1VHuqJWpTu4",
  "key18": "3KmoQhXjfPM9UppQhLqP8N8suDdYk5MubEoVVhXvfRD2TTmZCkeyRqNiq9jwrQncD4mN2kGMttCg9D6Jd2QsvKdf",
  "key19": "5ykEiAqc2zM4h4GGyoeMTF9Mo3z9PoPJYVPRPoMcSGAd6CiKFJA78Bhxkn1TYECVvuHt17XSVQ5f5KZwA5u1w3Te",
  "key20": "5d9Z2cU86oFBbAAMisdnSAD8cTbjhEuwXdWVY3hY4jQxobWR4oMsK6s8qP9bPiTB9SDpYuZgPDQVtDjeFDbx88kZ",
  "key21": "5RUTyWnSaqbiPafpk1PJukn9R6zx4AEFEDwboqFEDPMsteVxpRndwK9TEyarjY5mqPLPPP35HuMvv1zy9v37P4wi",
  "key22": "Aqgz9ducebQDRJSm3Wjs5WRjKVvwZJyNTejayr9jtJME9UrWU4wvt8wdUgf1tCx1W2Z3fEb5jQkBZPp92jn3eXB",
  "key23": "4MKX547wUCT87XNr99nigTrGXejqPpSJVZVx27QXEsxBJgwpUEK2HEDzCWmczdHhJXnGArrCeh8Hfa6DRsdzAxo5",
  "key24": "x8UteUJTwk9wFpoTCpZnpRiBhKKefFU91b7PzPGioGjrAAGHD69eP9rTfvKrFMVRr1M8rD7S2VZFKyjugyx5WvZ",
  "key25": "3QEbBCESUkbFcyMmJ9tGo8C2R3vVfAkTqPqjfTSebshgdDf5nJjJou2h2gmq11k7PDJxK6EQNcpCAT6EhAMpFbUK",
  "key26": "4rUwuRJXj1qsCMkikq5qgzppPxFUeCqv2WCSFxqAfHt5pmHL7T1R8jL346bTSmc4FP5sUn84HNWxZWLGeFoBRKfG"
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
