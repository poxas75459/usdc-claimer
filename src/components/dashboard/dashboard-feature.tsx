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
    "64Kzm69P9C5p4A7kcksSqtPa1ifudDQDi5Xzxnx2AMjGNqKBihVa8iGvYP4GvXx5sHXGF7W7S6ENTng87qYjo1Pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g58yweRWgQDe3vLZ9duALhULzmhakKTrhRSSt37tYQyRbaRFYzHkyw68WsQ5rnVfjS1E8zVwLhTqCEookyri1iD",
  "key1": "5npLmpygWoSYgbE3VguFEq7PfGcPnaroXfyusp7CT6oo3ykonCNUhqWhhEkLKtiyeqyvewwDpXuvNA3o25Z3TPAA",
  "key2": "4jC6Vt1rsYZ1NEtwLM7MbkWFDhRpofzLESeb4sitPjrbok2CAc2RVd6XvHc7nUR6Mp5R7t7pFbUYvkU4jPhrgf8B",
  "key3": "3TLE68vBU4y9iHUfpfKVX6f2Co6cPhUwWiTMsLVfJH6U81Q5rUkBRUnuc4NMqN3LMA8mJRqi6FMDjX7UuWq6CgF5",
  "key4": "372b6eMWmifsfVuZqumAPB7vqtCdH7zfZTXzjkkfmU8HAwZdmqxo3qUdV3XcjZsT59anXkt9QHuFtcZLf4ofmEwy",
  "key5": "25CM6ugVu6p26oUJf3ZEf2QWgP7kccvqLGxhv1DptdugddPRVa5RjvukuBXxHj9UuepjaivCCvQqvYnENfmNSTeS",
  "key6": "67r11HqN2n3aTjWsJyBMU1mKztrQd8rMTJqv7AJN4zTeoVsi7WBxNGB9ZJ2L3EYWVgMrqgfs117xYfh48j24ZWCj",
  "key7": "2GJ3YoE62AdQNriBMkwwmHMyhcvSHjxRUgVhUv7nDJtXnrqRQwLGG39s7Zi5WovbGyLv7paWqY4XvNRhgGjtXRVC",
  "key8": "3mgTfKxXFoJRVWPij3nQR5fS2PAHmMPdC267NdZMS5m3fNYFKUDy7AabeRAkNznx36E4iQyJ9f8azAF9ECYbfbCM",
  "key9": "gxoJeZvfocxxqZCxvLMyKpauKMsDYsYxkUPx8WPJmMdCT1gdFq78wLXRK1ydG8xRL1M9VDLhEateKZBBZnfb5Uo",
  "key10": "4d4azhXhmyENDXFUztBvssLhNvGZXn6ECshCpaz1ipi8MTCs8kBrN1ZPqqkdTL21Qs4CLDtuWTERRWCpbMjG4ejJ",
  "key11": "5bwfu2koJgVbm5U7HFrNBHPuacBxqPcVaQYbmcvvXSegweCLZP31XFcvSBPs2AfM9XNTrbtWfcsC77bAfQR75cmg",
  "key12": "5hdUxTXtmgGizVQTF37QfvqjmGiddGzNC99DiaJs4zBmsHYMacVtKinSbiF23Vghr61cYfDf9bw1J6c2HmR4e5kN",
  "key13": "r4yUSJ4RRvRSACSgeEErk1XnzP8XzDDfEW6mRBV5FbD34R4fbMsw7XBk6vyEKaXo5tG7XrPw7SnPcTbZtX61sz9",
  "key14": "123cEpKNNUwGkTeEZNYtiFoJpzoGPSKStYTdAz9vsp5wGtFkEd7EbFoEpcSLf3tByrR7mCadXhuHRBoCGuKUCeYP",
  "key15": "56ATpWPzVWRP1dDuMdSyX5JtzAjJGLPpy1tNsXrAqhfrrRUBhP1zYQRMFH5MLs3paQwLEv2z7Rdy3P64tQF8TK5s",
  "key16": "s92y1g8njmFwnZKwRtbC69hRzCtHWVVwD5bQ7cqoba7hm8fCGEAr3ud4UkNCB1yeZuhXKvCzKfT4XWb7s4ZNpwh",
  "key17": "2ZSBQZkcEPCbmTwTAVzghy6hXyvCyXnchZsyxcyJsNCiGzoMy1m7NAAkyFz5SfcRMs6HzBv6Xyt5NDPWzENkZSCL",
  "key18": "27uQhLjKWfDvUCcjMe1ZaBur6zHC5UCLTUnFMS5SoVFM2nogQA1TuoUBDaLE5bnGuQjbs4p7omsGdwBYbjCjGs38",
  "key19": "2LypGLUTJ1LLHTHMeNPr92pfvwtihyjEc5PMbUC27W5dXSJLqYkYj34QcL8tHwKJmnxSbqaWVCFeVCRrKgAKPwE8",
  "key20": "64rMsdviWy1GqqEHGu31feofYQd3nzdP32HPDcfmKE68yMmwKyLnj1EnKmSLMFxRLMSfmNxNTGF2uX34r3N9bjcF",
  "key21": "31XjC1hj8fbYfcQF4oTrGaYbdLMT9C4jribYjEHdqWjfgzmmqB7sCPzTkf8fBEHmkMqBipcxtESnwFUPoac3SBKv",
  "key22": "v7uGD76TmYcYzGdwzSghLXkWKkzcZQPXVHMZscS4gr2f1naikLe7SN7yJkpEXKSv17De2ihsnnNxHjbfjDbLCDR",
  "key23": "5REPX27r6JC7sPGw1kNfn12QszXUP4XvbUsP8AyLxdnhcCXpXMKtXiL1WDdXfhFh6FuT7zJL7Xtre9ygYDVAYkYV",
  "key24": "3Q6NP8J5rGXEAbtNuNax8CZ3QJr6HFx5cfSu47pFF1j7CLi5FCXcdc38WJJz5DXPSA1QcDfQ5BgGLz1wzewca1o8",
  "key25": "62e5rNeX8VpXJALtyZQJThLJM8CYLKuPETvnUhZbtm8hztsFMuHAhxKXmEUxWr7mW7cHW1qSuMQCpRkjfwMgUmLS",
  "key26": "2XH2MNMgDPh64WTENFW7e32vso4avpioK3uHdNu1dvpujzdLR2TNqKKTBQMkC4sQkZjFRmgPp6iTX3jQjXmqQELG",
  "key27": "2h12fKDfgssmtMBc5Zr19FRpnxJ3ZUM7E5xymMC6q5eeUDzMT6fcZewFAmKvCRHo1jGWAUxYxcKTjpWPGdKs3Szp",
  "key28": "4MHiLjiSxR5MW23LU3VhBGUiok6PeoCv6dgrSvc6gTuTgZntPnToj2dnNSfBzAY45ftj5n4KNoC1EZFrBswxLQdK",
  "key29": "537qenwKXgCAairPYXhULZWpWFXcmRiAHizBD4GtHcuPcmCpbZZxGsXvJJT6sv7b1SdiR7xqjbdWKVNLo6hKSLsx",
  "key30": "2HpZ17uYc47DJviC5b6ktJCb5eacc7s6uUPJPw6AEA5igNPqAf7fmG94kezK4FmCW3Fh5GWYUBm1ZCGQSd4szZ4o",
  "key31": "2vNtp3ZTN9xZFH3FhfNeaxhonVawtdTfLy9jFwCZJHhsiEBgDHqrHzrBS2MnSzjeXsWqmcWcyz67CMirE8DkYVpQ",
  "key32": "5z5g66QJRgoLexU7Pb92CdHBVBeNHgeFgEZyWxcthZWipkTPySofxXyWyHu9esqQsHceSqa2g2bzJ5vyUXsRS5AQ",
  "key33": "tv4Zh6Nbrwpb8FFh9ZrpQV6ZdYYzfaVuQqeKe4s7sLKryZvDqWSLBAAkrcy1roV437gKphNQ7JtzuEWBiecg4YP",
  "key34": "4xo94RU1GscvcQW339ZTuf3bV4EQpSVfFwqbLubiRivGDhjkLnbGyjkV5wRCY3cfHV4osiSfBpxXEScJbXdKgvv6",
  "key35": "2xsRfVfiazv8fTvp7CSkAJ1Bj1JPY6CMCm8shLBgEHHKKYsCSaFoAuTJDPPBZvV4enxqdb27nHAbMcYQ6DQEYYhx",
  "key36": "3AG31bFic3i6a3pWRYxqj8dULuk8N1ZoPuj5XoDME9vHkLHZ1CxM6HEYQoiN519CJQaehWnaqo4U4whsDmvnPB4j",
  "key37": "WwMCbRBAwEwpzs6mqo7KbX8V4wPVrQTQqodGRY5dMjtgjEwhuFehJmAiZG3fSmcVuP1ym5heHQmzoqAb6FUTqXr",
  "key38": "2WY774o3dSJtt1mu3Qiqj5uPMxbzHdKevbHXhZPXywysuMczmX8nX7AUApNDmRdhT9zXqTtgkwC759dP1hw6o9Tw",
  "key39": "39HMivALM4yrtxM4LDtwtvfrvjhU53BRSd7G9jGbrEfLGaxcRnBWaSuducM88wkLquHivEKiEqNJ76uoEMvKSA2Q",
  "key40": "Rteh8DdpR1tsmE55f2Ave2WPePv9JnppyPrNNG9jsS8a34SntDMeFCXxqXgVev65RZTxYQKi4KVvZybAK4vaUag",
  "key41": "gAXYb8Sg3S4vADAQ7ifeQH1SQ1SZHSL1fBbtD3EcqbhJjbzKhjZrgB5iLdpTFmhRCUbFkThutytEQwWkNgvqFzj",
  "key42": "4LmL9BGwdc7qKZZA5UbzRjjNXAihU6hcvFeMXvWAPX4D2VNJhei7q8h1SJrHpVfjm4vrwwU9aoNH7RkZaPDwcA5X",
  "key43": "ENhxbQrKvURjqJroYREWXawFJRBqrHJgyhchD2ToPBE1DJFEpoNaJxNBLi3KbLWMjuAeTohJian21tBxoP3aV61",
  "key44": "2CL6gE48SoqHbjZFxgmd8syJyHYBz1guMh4gPKmH6h4JHDCyqusZDhbU87c6XEScB2yC5NuZiFRVDgTygsjNWGdh",
  "key45": "52fj18bf5gShAti22JJrYH79fsbZo7W98UhHPWAqSVsU2anAPaEs7czTZhvYQ7d7ouKFuGxDVSpmJbCnnZv73dvN"
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
