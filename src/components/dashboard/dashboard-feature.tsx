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
    "5pdLthknMth25BP7Mh9uoNsutkrde8nQVbq8g8Ukev2v8Jy3sfPuk9nDn6a9qKYCVfsKYbFNjTzz5BQpxMkAUFkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FDS83gAy9JZjNQ3eNibweEChV3QyJhwkPuMTYnPJFbFyuq1EdSXKR1KNonE212KNGEBhQsUprEDEotq2SATpACK",
  "key1": "mz7Uu3jbTvx88wE7CjkwkL2kkNwrqj7m6e3MVxXuoirSDryFFdSYaMcL3FZUnzji8Nx5UBxCEnCgdoqVG8ggWAS",
  "key2": "3fEuMwwJFZEZKK8xC3nPGiYvdbf4wmoUsAcBvZ9G1ZWedRFWnhpZQmcSyThJ3qh1vduQvwZjb7BUXz8ym3XUqg5e",
  "key3": "UHUWbmUDFuRUrtZFSdorQiW1aKyYotsSG5AzBPniLee3hXgccX6fYF7u7snRpeVfwMhtipWeh8hKb2GsNz6xLDT",
  "key4": "5iMyeWtWULavQUk38J3odfuhVdsm4jZQtu8wty5ZUZ8CUt53MsaAviHiotLc8oWmdcqcqBGFGL9koVF12AW84wH9",
  "key5": "474kqXAvk2ZJfDpV2dynRLXkBXvYFDDkcb3sgSUdm241MBsU7XD3FY6xUhzCa7Sibjr6sUksRetz2gK4vEsdDNZi",
  "key6": "2g5io8w9KApnELf7zDRYmGSt8Go199z9uaH7DyX4KWepWJsJSLKon5Q21inixP6xjLrgSmUM5LUUFXp8Xewmwvgx",
  "key7": "4FnQhow1sV26HmpZ1fpiinnRfHXRTiUUnJmyHNiESksFdkrNu5K8dhP9DoC6AUbERpFAzrwcERroVDn4FSnkLh9K",
  "key8": "2RPfudMR7EzdHc7fQunvYVnFE19adJsLzqaShhYAwyJ7CEQBp2pEfBsJ8td6cJobGUTLnbLkHGviURX4ZQk9DJde",
  "key9": "3htoepK8tnjed1TSeskmPYAUZEfbuXVp9rGMSMgwXx8ifXf5rVmzVH1RkrTTM3Q3i9Hr29eNPnHHoiK4mLb4u3j4",
  "key10": "5a23Q1Xnyob9tQmTwSAFbDTAV3WPVof8DjSgBCVjs4muvopTsTXt9tj91pCdaSZhFvrhDC6S95A7d4V3mGSqRWeK",
  "key11": "28zFHNfH54RxY3xF99JeN7yv9KnhRATQLNEiLJo8xdrk1z5rs3sxmbM92PyKjbzLDLcrFRVThGqMDeDe8r9pRSmd",
  "key12": "5F5MtGHLfBDsrocvJAYUL8Bo2pQSVSH4Lt9AVsUY7NzUdNB4Eo5Nh38FRSNzkLqhhFzobYK5VMWsqWVn2163CoVk",
  "key13": "5wnihfUZy4skg12x2cMCb5xxfmW9aV6X3R6Frk1Rt7hhewVGDV4eYs3MFuKaXifBZwBSyCQGimB9BCzNPRVZ4ft2",
  "key14": "4iAkDTDmgsZqaBf8nPjcMQaEJokNhdWw7cPf9LjkeLCRxzzdN4iMycQmZ8AxoPfbrWojA99kJd36g4ZRB6jHFymr",
  "key15": "5vGdPjhM3JS9ay4Wj74JKoAxR1nooUrLQ3oRdYi94AhPwKTGC2kFZQgFAwZrhWca5ChbKfHdYiko2QCrzAfApWwX",
  "key16": "53JxrtK1qK8jpbCeUgji1hK6qfHU9NWvRQYN2E9S9oxD48JeGpE29fj7Uo6yg8Ry192DLNM5pqQjV1E3NgPQQadC",
  "key17": "CQtqpEJR2Eqoya57vtpBNz8ELzUVNnAhhNMCHuHDWFW6kr2PaYaCtXN9VysdajmgFP6FUQxJ8HSPkMmUrRNq2RA",
  "key18": "4xxGjQenmzKHJ1sWSbSGvQj3TqCnMef1n9rsDxk4u5gFEEFqyrcGQYcJwayCpDVTpcG8zhAKcmZnsmhwBw9gWLdk",
  "key19": "5T6ympK4JYyoqo9LMtGvmwB5vmVfXSNuTEvq8dDV2SWjKQ1wEohowgRG4dwQbuB6ufGDkDAZVonDFwiBiUAaYMLf",
  "key20": "2sBwauypkgB9QLULVTT9cYVjgw1QGUoX1h7eDjYqFWNeLf2mTasfBefaM5DPJqS4eyMue7z4bN7vaGHc8QkbjJiR",
  "key21": "57cAYb3BGpRzmW8sidtaXt43bHq24pKRoxRr2QQX3jMrNczchiwXbZcKWrxDRu86p2Dm8QZE1XBzFipi9Q8vBQAs",
  "key22": "2cd85qTRsjHUfHYPJ2YydZ5rNwu1fhgzB7mpK5CvcRuvsaKk4vAA5vqbmTmpC2ChcQthzsExxYaimGTQ9LzcqjoC",
  "key23": "4RTcbsKofhn3ZZv1Ey6H9m8D9QrmL1XtaiXpr3uqnqTmYRJ7T2fbjiQvbBmqQZcndTLY6syLTvTE4pPxJpvHaMHN",
  "key24": "49h46tbYhSQ1SfZMPnCY3kECYMYrMZvTyZLkECJtfNLTVxeLkRNepC8jj1itZeF2GSLXxnc9PNRAYsi8vSMHhXtu",
  "key25": "5Lwh3MrFBZVzJ2EyQaQ8o6Yhb3qCog4JxiuNeRQnaQ7DM51FPrY8ZJdnhjTm2Q9PKfAvJPmBx8Nc83xcFVTV3YkB",
  "key26": "3gY7L2br7sTfN9MRV4WFEgLTepBGsTWA88JSvfFCGW1PHXe21YiwY2uNRFRkyPnmZC94MCUhW5CEcNKtWC1jtjM1",
  "key27": "3Z6YMw3WbAU9iju9uAdYFZkGrzCGCaZTS5bXafrte6aMy7eDJkHVoTpyhftjKLSRyb38BM8truN2emvkmoULt7VF",
  "key28": "37yQXsbriBWvAcExsK3BXR2LeQtceJMzNu7JLWPe3pnS1FXrgm7cxS7M6TF44cf5Rf7nyFhUXU23jSEQRVbxDcRJ",
  "key29": "3W1t6UWU6k4np9pXkXkULhq4a9tW3rpXkHS2zBkEx1omwGQm4dNsZ2d7dFFASecdF2zH3AL681VbJc3HemHVPGHh",
  "key30": "3twibrkaFRCzSF1oYuXcqKibXQf5117Dz2441zMi8m3NezeWVN2C4XczcLeDryd53cADM674U3pKsZ6MPFXqbuGx",
  "key31": "3V6KZa6ZBfCitszCT2DQFE2dzff3bXK54JEZoizXVhXJTRmUniPkss7RSYkv12Nctz8ezzmJkroaGnrnQ5cW3Pvg",
  "key32": "53fLP7C6DmsDKxvsniBNJV4p7n9DBhUfX1fSFziW7FTD76TUBqCYE5uvi2MQtzaL1H7QyVY9j31Z2tsZ7G1S2n1f",
  "key33": "4kkqy4e82uzCpY6xNDY4wiyzWZ33E9D7XJDB3JbMb5N8CDpTQevrRqXJZdEekGD5hoN2wDQJtydVCfbr4omS6gBr"
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
