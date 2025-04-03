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
    "4d4oyko9xcrMnq7booAkEqvR66SX8XxS1a5b54RjsBfDaYtBwsD6FRzC8m4K7AJGLaWt9h2vpczf13i9k54R1aA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQ9i6qu8Eq995gJ5ZqwByG9eJLmZvyyH4uFRDxd5J6oV24zHQGgi6yoXn8EMTUX5ZYx23i3tZ42qamWaATfMxdr",
  "key1": "5ixU29hTJZWtwAvE48GN19fPRxucbdkAwtEGXueTgfz2ydp6xRRxBZPXvvvBmZYM3zh7iQbigHBziLhfpdYfpJjR",
  "key2": "48PC1CNyuMS8XV9yzzxYackVsYLWnGY3eKiADZMAu4zJaoaeNXZ3gdQ4bS7LCAN74588TtBQfqc2WiftNwy7xryq",
  "key3": "2QKVkmmMxS5js2genebyVJeYVKM5ooqpXTxmeEswnzkWqEGfvTBJfNgq6sAPXDiQo462GxxA3nrmoqyuaVBVMxYU",
  "key4": "2q3H5Q7jJW289GrKBSJ3DghBUbcbo3cf5AmPbabqjoExVw6jDmTXAsuBHWQ8UTVuCuWPgczHwXaf6QM65Szyjuaw",
  "key5": "2Mo7iCsx3KostjyE9J7B4vpG432SkCFVsq7GgFmfc8CtjWBhF8nnngJuAp59jDZ2pme8nss5zEXUVjH9oAamwcd8",
  "key6": "4iH4RQXD6geULbcBn1evGHyQ13siswF8FFnJ9jd6MCJLMEnEAWS1K1tH48BECmwvk9v4y8s7MhZbdYdgDWaWggrV",
  "key7": "5BW9WPoKcLcTNweZSQ3BHwwTGiNG2Tu1DJJwczUcHEcKxG9msKVFtjG3cZZ1mKLjmp2R73rKfy9EmUcYhNuR9YBJ",
  "key8": "3C24uA6E71iayK2M3UGTs2bEHiiXPDFd4WfNDHiGJ9MevAMe8Fy5LmohQwjpvE7KFhjtzW4nwqxn8NfRDNRnVPDM",
  "key9": "3ZAp78v9ChiRfKvLmfjjbwEreJENDTq7Hku8kpoEbGvMG1NNpeMytePymWBNCJTrwmBTHJGdArpJUWoWV7iW38Yu",
  "key10": "5YzjuSdY9JVjXaSi56ZmcL1r9GbKFFuEWJhn8Ug89sLVKK5UXdxK2idFrx6H7u3NEKhXrVLXnUM9QgqhqVLUWJAj",
  "key11": "aGkFoof7idrhen9NwAzC4AhrtfrVG7NEGyWt7bfEV4VwvmRBBdT5XFLubm5BfM8Cb5mavgyfCVh6XZJ1LvmF7AQ",
  "key12": "Rq7LYNdRiTeXfXNtrNuhhVBrH6oqcTgo9bnaCs7Cd5whdprV4gSdcb88ru2tuj4SApcHS8eq2FZcPpF2FoqRxrV",
  "key13": "2H7sXktzNfTDp9xMmgjNefAbpzz7xhHKMWjDRj8oEC7YtERKeHH1jbJZ8u82pzDup1RRLikKfECyCyD5AUFGKZoW",
  "key14": "5nbeWjCTyny37VmwXVQvjXJKA8FfPnDUvgE1EDyYFfBekbisc53iBb6FniAqsRpnoaDcBsjMgzLBiWtUmrmGnxxS",
  "key15": "qh8v3B5vTYrv3qvajYHh7pt5JDqFPiNoW9BgdimDEeaBRS7t5rP2tWVhhjMyTdrRE2ywoC9snMM4SrWYbgoqQg8",
  "key16": "4Uw2sZrSfDqLvJERk3QNJeXgqaRBfi7yJdi8WXkZTtbagQEuJdWfW3UgemTTgaamsN2ig2xx8rFVEXdXwjhF5zGX",
  "key17": "2u3Lk5NhdcWdUEma9c3JfDYRHMHXN5A52aS1yWKGDDk4Vus6wp1A1o5TFCq2jhPoAvSZBJJisWTRKkhWZTjMRitR",
  "key18": "4iFtCe6LGmP2s6sdUhiPPbfK98knZrKYiaJAp8m17uXjj1Xs3NDDRoW2orSXmuCDaPwFXuQZ8hWNQr4d65aPaAmw",
  "key19": "5f5GjVoDbMztBz2AXBRGwRX7nmAUMCgvmBGByoNyQ3yY5ggxQK5aw3DcK8cQt3ThS1t4aPum8ssRKUxtxYStQEfW",
  "key20": "3cVjvCiWvha3xU8TzXffLR6Suxxy7w3sZLN5WHWGKwUZbUbyHT8KKR7P32SHamNgG9T8NzRzN2po25439sLQVAUu",
  "key21": "o18YRrCsENrNNTK2GMEtbsdRFMyg17vvXU1ygPb2zCTrLFPHfJYR48icMvRAkH1mHMZn8v1eSTCdJmtZKG5NpRy",
  "key22": "37K4vVgAgrZ3vrShai3DQtUznuYoTV2cgn776QfkqX7ppSeQG2yftAFehmczxd3bT53uuSrtdMSiWmSq6hDiewAA",
  "key23": "4S974aTy2rvgEx3KAcCNcoyW6F8MioauVQQsu2f89CYCaPHhdWXBAceFH3X4NYwcbsxCXpawBtd7GACjUabonaEi",
  "key24": "ZuodTtmfzhVPM6CbCw3gkvwMoG8ZCzwcS9icNEGKbN21Tci76BHTK67HqUd83CuXfNhvQSx4SjzfqBCw1YDvEZv",
  "key25": "5vGpKTvWEYvzs3Tu6x7rmBSK7jT7gswGcrJs4eMso2yTEh1pBtnioXJB7G6Sx5ERjfp9wRi5drEZ1EKCBBJvPwpH",
  "key26": "5W9XLhZoK5GQRzb7p3hBWWVfXtpifR3qwLEJSdfoQ6PD2jTdPiKCTQHABXduiBgUhZBdSqoLGQNY76w3PUwjnmL8",
  "key27": "ULN3mcbwfJzzRYhyohGyvoCDeMts2xtPwnEUo7NB2YhyLYiyD3o8ZYDj4swbhBd2GaxzyLKtkjZpV1cEKUCb1W3",
  "key28": "5suPTTajAvYjTTrAgsmPwnddBrWyCJEHpw4X1xm9s6r1cPwQdCh41JjAUXEU2XEDaSefbLy43QRa3mnrDaYuvBKE",
  "key29": "4t8MYfuNWvE33svkecMqnAekQ84vQyfUdX4NfsFU2eu7D5W9X5r8ZPjuyE6Lb5r88W3bS9fBNEyXfv8FWNjUBuw8",
  "key30": "5j6B2yJ4T3KEdT12cBSQwY8cAcdScSMSxcfhvT877jfrKdWCFz7zY7jp8nx131bGi9hRrZPbGZaPEKDjyM4s9n4r",
  "key31": "5cz77ANm3QsedDfAcPBLwbGZmLXLfXijfDErhL67qGEhor6fYcHxPNMybJzDT3LWDfZv83TSNSEUb1e1jHyqrwg",
  "key32": "56vVXFdPyJsUpWG61k3EuKh5UUemgohz834boaBG64ifCseRMoQTzryybcPcadqrftWECUf4LCnD4RcksPnTi4ZB",
  "key33": "GKTeFaUsYpo9totUKYx7CoYLEgdQZMnQnGDPpLvzX7EDyEieAkTneHgJHVXoeCUuDJVYeXGfguF3wSLAdqd7YCC",
  "key34": "oDkbBiTNLFD1sNckakSF1DJAhcxNLvqARhC4pzuQbR3xnW5zZvn2KAYW9y8raEW9L8rxXXT95iNW9DTsg5m4Xm6",
  "key35": "8zEkFkQ9AKitbu8G8unZc3Z9MjCmLXL5sVJTXu4x42PRR5u9KzfmFr3vdgLGTBmxjsZ49RmgEvo6n4AZxzqW8ND",
  "key36": "NbqoTQQv2rQMfn8cQDhFN5eHfF4nLFibZCivXa9jhoPRYMo7xEinmnDQNHPaCNsZdR3tMiJfiCi2fyJNXmwcusq",
  "key37": "5vVyH87bo4TT18wuYBKPvb7VKbudsH7KhGWApcdmTXTiueq9pyubrZds86jjfGWSYAw4zmKqykaLSSk5FHVsDZuZ",
  "key38": "52xcaR1j4HBQuVYC88XkR6dYYRYi31wPD3MFYvRvvWDSRzKV4TBi4ZHNEHFki9bouMVWnULv3KX2RDdpFFLYgXjG",
  "key39": "2972Ya6gxKZnaeh7a1pJ38Pb3eSant9cGRDtppxUFDqRrbWDQTtJjh5gAqKFKD91yRpGp4i7xbf5Kf44cJfnjW2Y",
  "key40": "e3ZvuMWMXAiLNA1LVuhcFPAkgD5SPRfEDpvPmcEgLiUFAVNC5N3pVQFUBj9dnecFeEHaqqArXXeiE2VQxEroaCs",
  "key41": "52efxx3ddAXY7ZbGQRcdg9db2YmxXX3okvE4MBiyJ5ANPJVz7xfJUH8Vx6RWXr5aaWVu8rCJouGFmUmG1b5hQ12W"
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
