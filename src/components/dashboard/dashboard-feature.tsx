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
    "31xsSXkjYD71gHccPRNTFS19ETzMLxzbzH6MRmL6cwvTGzCpKwhaH196uP5DFRyRokoeyXTpEiU7ie1TCrb4yqmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y6NK83tPzjs1byaGEENguPLLzTM6rQeN84zVyZhHkmnaetEi9XdZbnsRM4e4V328Gh5izwBMvAst49WBTqJbppf",
  "key1": "UGsJCZtU5kFZsb8vfwpztFPgb9Rnm12mYpjJ7Sb7iedYASYKARCpF3WCFDVbZ8SdTZQKG6CQXzerANeEAvy9qk1",
  "key2": "53xMyV6A1vFQAJgVmnNScP467SXjUsQdw2GKJL4NXgCWyayU9dYbY2mCo15S3RTCMCT4NdHp8GPaXtMPRAfHrNRg",
  "key3": "y4RMdoNBnMMZTn4Rvu8aGPvtSkTRL4MM4UWAqsFoXPswhqGsK4pWJPzLz5jmfhqdz74UrnpbWsuNaXud125uuar",
  "key4": "3cVwJHtnuKsznZQCWx1PnrUpcPJRVZ8c5xUAynWUMSJUKoap9sX2XQ78RGJszL8ZZU1fEXdyPRqHhMH2ms2RFe3G",
  "key5": "ZMDmkyLkFvLugBtcXaEswKNi1RAR2zTUtCwirT5gACAYCYWEo1do92FXpot7kRoWeAPXdNUK4JQEGsWbxQmc5jK",
  "key6": "4mWoyir1mHYB9j6ZecYmnxHuohnYvbFcXGUoUbuvDCj1HZUPMJ3GJfMAR7rucDuPNz6KAWRBDhzLUsvaZcyRouLu",
  "key7": "3U9QeYafaqnrUiU1WPWeis9tQKZ6HESGRekvuHdcNnSC3FcZssmqsmx5cZvEwD3vrKBFpG4Me1nrXu38V6uj9ASd",
  "key8": "2jQs3qEJA8kGpobGLDPHzhY3bUvpXzE61Qg5nEdKTj2ZP7GzsEEg14pm3RNtqxbomzfrSkmWtxxF3D5BEoCQzYxj",
  "key9": "2B81x1cg1X2HqHLbeqnJAFR2r33kL2qv7nrejaZix5J3GTmXCFvUpBXjcoXDywCA3unifWhowLTjtciyVxzaZ1g3",
  "key10": "3mBS7ZPvZZ18KZdbbneT1QZzHsSvjJ7cu9Dgaqq5fdbnmS7Lz1kDQgn1fZVXFcpxZHG24fPWxCMJ1nGdeziVK4rZ",
  "key11": "3FWpEp7wcWiHyPJ83XBtvHQSnCjEyDZ1EK5UrKhBoYRrBcWeU6xjygfvC8oHnMzm4iwXXisUhKoAot2PbKyED4wU",
  "key12": "5YFYUMaC5udLHaif73YdLNwGmVEuJRJX5qvSuxStQueFQTpT6ayzdzk8zqogJ4qULZQiLQ3JZeB8m7ZHUKXJC2h1",
  "key13": "2MJ23R4zfJw8vo2s7oCXEWMqfUhsdoJDX9dTu9zLok2iRFBzjLesPWwzk5Reb9Kgac7NvLqPh1qxPN2UDmMF47ZC",
  "key14": "b9RZ9NGMyRUNM5qp5jrEgAUWhcsnJpgR7n3e5gHaD9dHfWxp459tAv9t1zRLgQKAGtnrXqgMNsKnBf2DhRmTTMk",
  "key15": "3QD6xcisbSPEGTAVA3mygaBHuPAdXZ4ynDFYYt3aFQhRNjP12bM1pF8nA7isvvn5o89baUu8JouuMxHMXhXuu4rr",
  "key16": "Za4t1KJvUHYFqUrv39tsBAiTQifopigpC4JLaieTHP6nYD6EvLRqRDozBVb9q2PRwNimbZR399mEKjPXrgpVKyC",
  "key17": "59rD4zT6RVimtqRTQ7dt4paBHHXRL4T9azfEy2VzvwuscV9H5ZD8QEAKF9USt7BgUAcnHSYNHDaZmX2US4VQSDaG",
  "key18": "J2bzJDKaC27zBY9cvZHrin5WRekJm2XEKPfKfhVt9tJeBy6UhoSeUvsK6x9L4p4pt9uB1QKsUVvM1FfC3mE5SC4",
  "key19": "28uFHWDhQQUdTG17yKRbFy8kyfjrkmq6eZE8uyRGowTT74ETBtHnEduBM3XG59jKz4Cf4ywoKDbbzZKf2M1mcmt4",
  "key20": "4ygcBDK97GWhvfHjJYG7N8VLJzoyvQiKBKUeyTiDLkSNdW73m5hriyxtvT21wYvpbubGM8LFFhf6Mu55xs94t1hy",
  "key21": "27m8EK4pMA5u56bQoUM3f83vD9PjCyHvk3XautrQjc7k84ZFCBENuKDjSqqZ9D8kU17pQUmy3PQsjbBzm9woejbV",
  "key22": "33mvPDidhsffAgRL3csEF5SXEf8caepwNzh7EFxkU96SsmeETTxLkAsCn7cL5AphcVFpdMZxfBjktQSRjXXDwr1N",
  "key23": "3Z7AZWVm5mHVgBZVnNLtS5bAcNt9gHpAn1eMx7omMFheqAovJ9dpLgcfsdfe2i3bo7D3h5CxoH2FLGFfXZQtEvwV",
  "key24": "3Www9XvBShezNoJi7bYvbQMR6bef6dgYKks3Boq8945KfbWR19wqzUKjrHVz7fRPZNBWnVBShCRH626YEtqTaWpt"
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
