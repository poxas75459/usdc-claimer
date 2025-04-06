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
    "5rgy2zMX6rrjArnwmDytpGuxX3qwYtQThbfmQJqu82HoJ7qsk18L8u3oCMN7UgHsfdtGnbQ4g22C4qf6skGtY8tC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JgkVCqoWNmE3kWHhDRYLYYwMMrRHm5tTy61WM22v5gQKPBoYp321KB7RoUXxyTtjy5r2p1Rr5bthx74mHBoKAof",
  "key1": "3dmaDoS1CbGPEU3dV4zn5ozmwUgnCcP52d6WEQFXFNLi6EWuXUciyp82qt6YBpVgcDceUZ9rjLpjy1xpf78hzXBL",
  "key2": "5GFpszJSsHn2EF3mXhA28ETtDvb1fUAAZo6tvs8Hx5JhveW4iMtMYHsVP9HoJnKe67FpKZ9FD9kybKCwV9U35C9v",
  "key3": "4b7qWhcsRexSMjNNpACy7nPwakbQ1qkoJd4c3n8KshKPzTsspoximPAxLKwBjBnEsxcWAfYNt7WoWYpj2UYm7D4G",
  "key4": "3yrE38Pj12WB9v6izPQSJgKHsHW27CYRtLd45k9UveHrzws1ZdCDYJJ2ggsGDRBsWVankPso31cPK2scXAWz9wek",
  "key5": "5G3njwBm6FyBVZorFfjmut1s386KRF3cB7nvavxgMQJraYv2g8F8hCrndDeyjstPX5C6kCFNwvbrVhUgNitvMdei",
  "key6": "3APbWkEKAqaqxUi2NnkxNf1i1wfdkDBRQ693kDtR292zHrW24zaSS2DNvmhfaDbJJh2Axx6r2tcFB5FmgypwziyU",
  "key7": "4bdXsQoVG9AVXCizP8LHufpBJYmYwEtFQgxMYrX3tkda17XCpMokmHHJETQ8HyAvajcxQckDi28ApNDaywYk8Cg7",
  "key8": "4jkTRSCXGbKmnpxowmwqCGFwsJP7HH8LcMaieh1K57ZXw5hXJtDjMDAxcEAda5o2TGfjdeBVNNVsbTr4ojaAbvxr",
  "key9": "2cB34BxNYJ9cvgZzju2wkBEiuL74ViTiX1WzedivXqPKpgFgUc8hJWVhJCAs3yJSr2Nj37QFpQduEVozXNo8LvbA",
  "key10": "4rtdwzecE1SMEK9CrJQ9gx9pHdFB81NvgFzjwLXsAP7jwAD8Tzo9jGbdEhpkrDdFcKoUNHrWSjsT82iRTeSyfNFH",
  "key11": "3bmMkZXvekAe3sGw7CbHcnRd79dvnMW85Gtzo5YXK11bvaTRo2xfzBoPSQqrLF8kzBBgrBiW5VMPxMVACCZTyhne",
  "key12": "5FgiTmv88SSeACZAZ8gfQRYJ1FwwR4fkeP2uc17yAS3kzPrYdsyAUsZik2u2mXZnjnA7sPWbwg5iTGfZLAJ4qD6j",
  "key13": "2MTZfjeuSySuAgu8WydMnqz4rokupeX8kta6bWPB81vvYAdhxd1c4if8gG4EjhpZE7Jq5M6g1GAHQphfAkh9WQzk",
  "key14": "5U1FyMj3hWFjxkeVEM84N5edv3Pg4ibZE5dugeaAP84BX4vSojL3yVxMT1rGtJXDdjHXJy3A1qzC5Wm6HovCGgta",
  "key15": "24oazLrfvfJgTuXhQEXBinpUhiocSQGyHp8jZHB4Qt7j6HTKhYGb6q4QCzXXvFE1XCC89EQLCf6BXnfnSAuv6xBX",
  "key16": "446jvXpwYsg9UbPSJnHMrn7uR8QDj8ZpmZgLLP7zx4HDk93UoAjttmWPyw5wTkzX8xoNn7GNqvth2S1FHiKVXYcc",
  "key17": "3ZHMCyyk6CPD3uaUKmi9mnikKVqfTvY1ik2fbNDgHeug6syrV6PdYtMxELqXEtDCvHZ7SfnjAMSBMUw1ykRHaYKu",
  "key18": "5AAKoFQQ96TsNEawTZQxT9QaMmqsofjhcNDrGW4oqsLAZB6wyWgimRsPgZ29wShw4iKUp45npG65Wk5rncmLbojS",
  "key19": "3222vCwm5uhD2ZkU5rJxQXuYgKEtCimdTRDbBnoqGqnfhop7p68gFbiybQ7GVYMyUX39a98y9FFbo7FrTKwx3jNY",
  "key20": "3jt1MSCkwoiMPMg27KVGbnhDs7Rsvr7Qj1r9Kdg61jvU8oF5mfXqMnYpSH2VSuSpndfkyofypyqGhATgwKYVWDwJ",
  "key21": "3n5A6j9QJUX9oiV6wQWRJ4qWdYpEukD7kGR6igxvswrsDT9oypHtgDUEHobKyfnPJ8DWpxpwvqbfQC6DUeVHBrxY",
  "key22": "b5emUDuBMHJHvYUgDoDPKQ9ZcW3oFFvWcKVos1h4PcirpVeYVcc7nYt5p1ASrCEvZ2oKBti6AjSWyTp8SvsfzH3",
  "key23": "63TWy2qwswxa9SprY857L5zHNxgtFe6UjkZtcbeyZXZBUStMzpkdnGd3VLdyUCw5KzsErai93rFKnNP9JG9YzPgB",
  "key24": "bYcEX3MrqpikHSAbNiezxY2p2AHdNdFcduWYSAU3EdHrhCMjBQSNshTq1hYPXdvNBUBdouwrsMzjWcyskmQXZZd",
  "key25": "64BRYxPtCDyjjrbzDTQcb1VhFoHCx1rtq9eWJzw7TjpY4RNKURxMhSZerjy8fXnvp68ekUCCjucj4DVpSunDmqPL",
  "key26": "3Rw25hzLFLchC55tba2x7gR6A44fyTsZDeytbZVEHavaybA1afq5rcdLtyhCWj6dgdnyEEsokbJMDfuKcWXemLKb",
  "key27": "2moz2Ps9AuYZvFmXk5c2GjL3fHzq9drw39Ar6TuaBzbfB8SjE2vmX4TXA5Xp1rvTAFgPoVHYh7jtEdYodTGvfxzu",
  "key28": "4Uh1kYvQgSTVHAvRBuGxCbuCkzrLM1LJcajNnYyhY1uMVUgaVc6mxCtNe5GmCtkBmQ94UBmmjzS2XRXqLe6Z73Fb",
  "key29": "C5bC4HcL9cJaFXPMcaqiLKJNGyaAediyfCkEgsveY8rdXYvomLiRt9EtDvCA5VfSMBP6uTW6CZDbxWhJGzcgp2B",
  "key30": "5QygGCeeTURvSWC3UdbGKhXKsJqBrxqGpc4fYSTktXbPbT2EZP6qe5TG3yV6Be6Beni3Ljc5oGe4ANgMB4H2W75A",
  "key31": "4YWQQyMge3BpMNZFfSCZFLve1THpYKuEAJQV6AQ1D9z3fHeXJVXQtVuiTFcC9DfAdz7bmvqYoBdkvHh9BuKHkLDU",
  "key32": "3odBLwuxU21fAwrev37R1mdDF9gFLrHNki4jFDLbvkaRTZZmkzdRjjCjmZzjCg5VVizCZa3QuRwVqYm2PKmNyRFR",
  "key33": "41CAXuQRYDd6qUyrw7vVk1Zab5VbWDPqg1CeCvHkSYcxPYSB1kMPDv6gDREBh539J9rTggxDnRhYKuzeusyKjwmC",
  "key34": "4cChXxYATDqknZRa2vEuiPHn5UZoJXzSUiMhtcn6gpicaAhxcFxpWvMwvZDnsSfveW3MmQCghvz7uh6FfMMM6XZZ",
  "key35": "56HZivEV3iAjxeFgRbXuBSnMrXrJ3HMaeFwHeeSDgrqj8pedhd1L7K9f3MVhJ6A6qWyrhPp4xxQf6MfNmwnMaYKB",
  "key36": "3X61pHTMa8bHb6ACcJ8kM99vsrLrrMC7dNVRN9aHxd4kYCeJR1Wu3rr66dfNzZ8LJpqwyXpbM89C5muwcNxHHU5D",
  "key37": "3siyZRqyfHsWtu4kAPVvuW3XufrxBdBGfnogN2KbfU9mgjN1odSQX2HbmB53qiGCY3uoRnwTrUvyNESZE6avVEgJ"
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
