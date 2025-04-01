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
    "5dk1kZ8BeSRiy78qWLVidL6oTULAF37mvFoThpbsU2Csv7LB5vgjNDko5FxYEEnSkbpqgg3QvkpAzfgMCmw68CdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4phGZaTaB8r12XYo8omfhb4ZSfEcgJkKiSCd1h11qRYgvwrHXP59FYoddtTmwy4GHY26jJZshc55J8UXXTHQ9Vni",
  "key1": "VoLiLa2Rkckg9kXLwNe36ZecShkcaFYJjoR9hTYP96NawW6VFJJksfyKAYZ49AUK34FkzzYSF1ykGySPQAA3DhQ",
  "key2": "psk8iaU3ZV4hcUWZ44LSUSMwTB7iNa6fg5fXAVCUdhUcCAvdoLFhU6oZmhWeTTBbzFaM55zX7tmjG9ffNn68JLs",
  "key3": "3HhBsqi7U4HbepCoaQXj9JCkSKxQe7CiqP6tVgmGApQvJMEjELfDDVVeXL4rGgWJDEyq3ufiW26vu7sUjaLY3Rcn",
  "key4": "4Vn4Ti3DitZinFU5kmMAWmFb1uQGfB4koLWMBC3Vzvxcjud5j9NzYtWAzm4wxRkoFHyjJ3t8j8DFDq75yRrHY6ui",
  "key5": "5YauRPhYYt6QosMBA3RPVzYKnsozVfpA3uVYcLjMGnAZaHs7Pyzjuk3ppznF57shFj7BdgwejMvRaMNt4muEoGXc",
  "key6": "5Y27viHu3J2U6ERi1bPmZwxzPqfoVX27qtew8TppEp4dvgwLxe8by2rUc93nYKzWBpbnC7FEHFqGyLbi8Ftbcrkd",
  "key7": "YkonULcXcYtPcotRi2ad1mbz9dZWTCGD8tsuDao1Ncgk6fkiSoy6MKZcFBx1tZEbcJ1GiSEzYCCxfQowbUTZnyo",
  "key8": "2KFMbUbkWbvnpcK5ZMgQmzxks4YwD5wc8NNp7QaZz8UPCPecd2FDH9G2gqPqwaKK4gxsWYkGUFAGwkrQTjP6pjev",
  "key9": "5gNRDdwvD2c7pbthC8fp52NQwZAy95LncECm2PLuq7WSazxTxZWU6d8sfd5J5j3jMQmBH2oxST8LfiGJwu3BwRgh",
  "key10": "5Xtih6H2aeB5P4w7TZr949ikdkuNBHKu17bz3H3pweBXvpkc4Rugaa1FmyHGKJg4RJLhdbLDTHLmTQHPBDGeL5uW",
  "key11": "LGdfuhYwMXHgBDWs15DdPJEdcCfmHAafaAgTiQF1rVjdeood9RKuB66mXcRNv3Cg3VQsTAHTKvyFrXm2PHHTdPT",
  "key12": "5xpzh95BJx3uTsUeTeaw7xNfp7eceo4S71FpDHgKq4AZPi7vzi16Sf5SHEEWUWiBZgYLLwuzxtLmfpwxrCYYohMP",
  "key13": "nuz8MsA2cPhJxRd1bXwWM13oRwTF6XTB23aGXsch15Zo2ctHPM5R7FJk6Yj8sFMDS1tPyCY35HT3F6NmLdZjW7o",
  "key14": "5daGjjUAKbciHrRnhq1iCXLzDqwv4PkkdC2QT2DdAz5kK5CgA2oxZitDDjPJ8Ux7gpBVcVdWqzwxHRgkuVivKtVh",
  "key15": "2d4A8ToNKrtxYfWZQAdSzSbUQgxNuFQWaFwGQampie4Ew6FP4Mwkd6eSU63GieKtNAAUHsMAsruevWHjKmJjFVRu",
  "key16": "2PpaAzuT2VsJTDNVQAgxX3hBauLasWV2RfkWTWM5FQdWKU4k38PeE2ukv3TPSZV8gYibD4hud9h7RuJ9dtiRp3fP",
  "key17": "2Aigeqti1Xh7HzP7RRTQTEj82qzirG5Mu7ojmG4fcaDhZoq7zqEx5gjkTKvDbPQfyQdKKZ3zEzL82uVkwEFXaXjZ",
  "key18": "53cm6C997pacZJnza7EHxQjxz1Y3EJaWqB7e5L2RkfkeqizbBv35CrUUexJHa7nAuznmogrqazDvjVTUqwbN6uZ",
  "key19": "XDdZWsYErW5MR8i5LpUbetr9nFA3XDDqY1QkSvgUgy5JVRY3ksuGx7eVw8tRnKB1J4hyMSSKXqd4wrp24fSPMFC",
  "key20": "UoU6XTujUEqHKsnGLCb14fgFRvfADoU1urBbUJH7oeo1WrBNx1e9S5Vfq4fyD9QNybt5wNBzNMB5bxBTUpAKMER",
  "key21": "2VS2xbC7X9ohwb2oK3dcQxQF1KfqE7yGFxRhPKqNqoG48NwGaLhe77ggzUKBDQAwuwnKhBGutB7fVzPNAB968i7m",
  "key22": "2tFQqFoduoZAgN63B7rpfJVPwXFMM4C95Tr6RnJEkEsMfUHUygSFH32UP5xjwn35zGRjAAsMwWo5xqMpCLyoBeoy",
  "key23": "2m9W1YyAxySfR7CLDGwH72EiTMjmrmjVzZKd31C5ubsvTwW4MVpsDEzLjecp8vfHN4bpJ1gBHn78NcRty3fKoDcV",
  "key24": "SBJGYL4b6Mf1yxbgnKH7Y4RC8mkE4Ek27czyKDDvRTdaP633848uRrGU8nyoTWEmeLUNrmQzTQA5QKp1pTS6EkT",
  "key25": "4vZyW8c6vaPBdEi7PU1EgkrACjuavtoTwP9qFLbJHUTBMi6SfkSekmpVVHJFYrynZLbvJ84nTTWa9eGUXvcuSCuN",
  "key26": "3Z4baK2iJE2P7MJQHf28PvcunUGaE5jqjxsWfPg5mRWQrtYryTr6zNSo8FDxf2FjSmNS8X2HYxQQkJdfM1wYqY9G",
  "key27": "3mYwEtmht4u159fbphbcSBRTWT4b1PQjZvMuE5WWSbbrYF9U7ujW3upN4suZGLgW5KvURWLdRApt2bcswcZGqepv",
  "key28": "5RpWhFhe1YviGNfTuz2CEo1iUHY3NBcEF6aCGDQsQKVUQ2cAQ4vCRVSQUqaZP8XAGLTif2spT2oANWTvL9iTDRWk",
  "key29": "5xppB3jYEg7iLyJC1YU1MZV1DJiQFvKWYfWr8sDtxxmDutkpTgXVGHj79ZwY6jjspdMVHqdZdhbgQAHzhPFRUvYy",
  "key30": "eiDMZBxEjmyn3RGny6nXcmEw6zTZVHov3CCd7pCGhhUi1K5uaTsieG21Ei9dzkuWbZMy5e9cHhmkQZ91nFBEu8L",
  "key31": "3QmunmRpP7bjWjXnEk2p8afU6XM5TmBiZyUNQNuGZGeawsTcWVrYkHhWja2BFamxiGXen2zmFRnUwJ2iDpzp1srD",
  "key32": "3Afqi9YFrtdy8X5Ex9NpzDEgpENVP2kavyDLDN6b1PjSLGYRrKaNGpkfRx5HDRMsvbo2Sa1mpfgqU8v27gVkPSyC",
  "key33": "3TxnVRRhJMEoBPCTQ5WLGQqrLf2s94z5rhaMJYabf4R3ACuswo9XuWSLXZhnLrnzqCRUrgDJ5b5djeRKEksfSgtz",
  "key34": "As6wtMeeyza4RZ2R4ECTnwbm1hFnfStGTunMqwwa2bioFxcDJSbachsaESpUegHR676x3qjXQKEotSxHG8Rx4fV",
  "key35": "3dfT4u4M4pHgMb3xaCUJmM4P7hoXL3vhBxorW3iV26guw86bDpNZsh6agT9tpEU6QcfZJM68QEPHPX9grpEzi4nQ",
  "key36": "4Ys1ykKLLiYpeE2ChrGaWaemeyKxV1yYsAgKMEdZLFee4HN2NRASJi3mfo4mtrKP83dnRjfZuq6EDSsLRj7jTowb",
  "key37": "ngnENNq5f31YFtGAzcQstP5tPZGMoUE1DCLqyd3NAvrjFbpqaLzWHSYZBFV88mmst8hj93xszogDUxouYf8GwUg",
  "key38": "4U32dhCCQxBNQYKrj8nVSDFmy6YFVVB6yqPwus8GPPNEbiTc2uHJaorpu2vDD1jLnxjBpiXLg9gTve5A3WvYEAce",
  "key39": "WBMfnuw6Ty72Vy8mQ4WM1qJKdXeUryLyFC18bv2QdN5kPLK6Czjh1TE1sJWmmYijDQZLCD51qCSigZ3qkURk3K1"
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
