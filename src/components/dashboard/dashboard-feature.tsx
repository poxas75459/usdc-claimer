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
    "3TU4jmTUgugmihQSwG3vTc8CFZ2UYxjaswJnsSXzBgdax4De9F34DRF3RCBPRsrN3DoWgvez3ckRCdvKu93pvUG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ecwFbnyjGf5DqfQfjYwS1jH5UufYfqLhjAk2erbHhrU6hdQYgXPKNxrbjUZP9UyswoH45dizsN7qwujkpfbyZmc",
  "key1": "Gc8V5dLEqsTPWrSyeWSXwji3FpbEAr9RQe9Ydj1nRcd9sgL59958oiJuGszkfiTbG6kGH9Dbw34LmetsUydTo2L",
  "key2": "3vuPFcocytnjhjDVyMTZGtRrvNMKJEK6Vz5Rdi8RWT5b3pdCLrKWbzCo4ex4ABQAVzSWznG7FJ8nza1q7QrUoh6V",
  "key3": "561CaE5mZUoS2wXPzjt6XB8XB5q6SgN5qoNARaUvCXZQ42aNC3zDit3J33WBYK4NjQSVRnmkK3E1gU6nhFAFemwR",
  "key4": "35uuAtDAzSxPLVvXJTEZo7t9Uoh2cD6pjTdjK67jG9xeXXNXkTBw3QTr18pG1XXv9vBWaCxCrKJkhTXLXhN1ERDP",
  "key5": "64qcFfpJfLCWz1psvow1UMwNZZdY5rN8o9yv71tT3x9nXwKU71G2WzTyf2EPyvBSiDxScBFMCMVoRMtXKeV1Tvhp",
  "key6": "QP9dAxnrV8rv1RbbWXyePNh9ciepSHXQpVEGonYaizQDaXaXoF3yo7yAYxNYQSkibG4nDsx5CGGD5boSkLAZVpn",
  "key7": "2H8b343bTaet5sCPzXoQaQU55SZhGUu6WzLUJUPARNmjKhbeVZn9N4w1ZMtH87W69Jbvxn1kLGqUhyjHV8bY5dPu",
  "key8": "318XcDYY5Qpt9nY9hQesRGefPqy4ma9SmREbnRx9iB9C3enViPRsWoK1RXzJJfMV8HqSkEXnr3YbToUwS2KmYJhT",
  "key9": "4Ep8bBYCQwrXYtPNhSmKwLWwoFUf6p4rx9HSdB9VvvwSRQE2u23aQMh6pVLS18eiwkUgX4avDERQUByfPi2ijeL",
  "key10": "4NBfMGT6Hrwjg8Vw1kxKgjDrh3qRieKkjqENMevx7rd8U7w53BJwRg1wArJswQBMdZXuPxe7rASM8avBfUHyJD9q",
  "key11": "2JuCbzDaVGDLpVu1TJ6KptMGveAzJp8ZDHyd4VXnTtGwqQG6sZdZzQLaR6oWpRMW98c2FUgvc2rTkUsaZfdDH5qq",
  "key12": "47MKythidpT2yXhdchh9ypd8MddXucFKmZfj7fPo4oZ44HoqnHfoGm7GN12brXUR8rADiSAhGvxxUf4UYZbpC3JV",
  "key13": "41VyNfTCkxQHbScngaquQ6Dy6QrqTq8n4mZwa1uC8L1rWi53gRX1JHdSATQ5rqREifeca7hULjzUsXDYV6CVXjbf",
  "key14": "3uA9zEXBmyBYDSp2VSd4GqazL8y9Vo8kpEXiksiqDtNrB9HacLgH8yc2ptzqibGXb9tsMA8VTHUJz6mqbbaWuYVL",
  "key15": "ngBTje5LGEchqhTGcme1ssKa3o86cCoXzboRdaNuKnefkYSxSWP2Q9MfCJaNNT1i6gU5yxyKnCcM1aKHEqJRoU6",
  "key16": "qVShGsjmUWAzW59JpjEsq11KsTpxgEmU9VVMf44vyp3msnBbvSnH46C4DZoeLpW3XVqsvPjuXQnvoy23P53zJ2R",
  "key17": "rKDEjsoLfLejvoeLQejzGYzunBx2T2xpbuodqGXa6oehkVbK2EdxwkzwKxokeVq8dG11k5NU5E1MyNRjQ1WeS7b",
  "key18": "3Ameg6UE98vH26JDQrG8J9WQbKLBwNTT2qeWMVErD1Lnw15ybJEz8z3vn6MsLLVKdXiEDJfYX8CUUJMWKTyx8ati",
  "key19": "bMUA6VRpGFnSYQoZpKxsgmFS9WJThLiZCJhh7aPurfS7n22MGUNBHbmcDEsRsDGH73ZXNKCJGnvAWGrDzKZgLAA",
  "key20": "3jTSoR5PCngP72cLTHQsYec18Nb1Hav5vA6hAqiFtDru36LvKYqPXYyA1y6DZkhM9XudqZtqgVS1PyQjWRz8pZDr",
  "key21": "46HTEdxTjrVTTrVrii9rdxrRnmDvBvKoBXC118G9oSvsSqMsHZMNyhyCByfFKaup6xGgkN7sE9YCewJMiHsXHGh",
  "key22": "2d5wMhzRgYd4Xgga6JD9dUfneuPvyM2iFbV4dFiYC2gKy9YnzFfk7UFWnQntsg11WCGF84xikkJiRLPcKW2dLUgE",
  "key23": "26Nz3r3imZ9PPeMP4qnmSnAFExyw1mHx9i5USwpvDhsT2du6ovusqiYUudRLzwbAVbhdhfcRMgjz4JiFt1akCfGA",
  "key24": "52PUtfQrHyHBa2sfd563h9zC4kyn9g3vDLWQo9DoaPZxCroyFSXGTiEKsyDcNz451vXoNSaWxueCmuTSKEH27R11",
  "key25": "61CKPmuH7BVkFaRYHhqWCNXersr2BXHn4aL26WzqoxjbvZHFHM8NVCXymxhq5iMewpziAnMFq7f4hRT13y6aUVHL",
  "key26": "51H2R2Lyc8AUpsS9c7wvfn151PLrTpQFr5wQc8rXe7sWCzm1syPss2scD3JepnBHuqhmZqUsifQHJDUucv2ETg7Z",
  "key27": "4FzddJHm73jH7k3uj5owVZM6a566GroF1oL9zuyi4gxjrQHhRWWzixhCEy59eJDiuSsbpbUPzKtJ2uuerEWUhcMs",
  "key28": "fgi2e6JT1bpZsV45DsDEZC3kTkt1rBUn6ACDKowb9ScJ9SiREd64QAdxpA7bFFrnVZdXNEBhdohuk9vf4cMUkJY"
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
