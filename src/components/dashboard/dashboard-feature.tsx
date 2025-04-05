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
    "38WzNiKdaVFbBTXHPHbx8eRr4hRddKDQ2vPU2PZYM2rdqWaSkPFHeqJjvv11wr51Y5CTj4JVbtKG5xHH6rPwhSp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcK6bwzEBQvR3a8cYHYQAHqKJq5Gy1HhFjvfwnvp6JhrPvx7hDJEkMWmFHC8nqpMjgH2LtKJUYojg1x3f2A4RAj",
  "key1": "5FMAozCryHhwt1akciZKyoW1SeV4RAMLZSu5G6UYVmnSiumcWcEG1GhXTonZQhnPsXLNzhCRLubcKpAerCBvXRZg",
  "key2": "45zQ6jCa79j9UYyLVVxeTPCxp53Zx1ggHSh7a9HP6gympiEv533QuN8h5WX5zVwcKJUe8q788J96fg625QbQZ8uu",
  "key3": "4wDwqY9htHjpnrEMUoWGFKVpX4M9ufwATmD8WzukhE97qYyjwSmQ7pJZSaUR6bXkLB2c3QeMM3AD3dBNF8JHHKhG",
  "key4": "2eH4qhTaPTUy2TB5xJniQqQqb8Abxu375C6BwUWV6vByHDfHNbWSN7Wkj8XQf9quBfpeKN7WZYNDeQK9foq6GJab",
  "key5": "y2xAv1uvQTqNTDBcm8C2HZbPLdKjZ31BeqYPYjwzUeDuVbJ2zQ55FrWWqVzbv9DXrW68Z4ZukAr15bPo1ZpqZj3",
  "key6": "5rmcPxb1dsZiG9QG6WreHzGp87rXfwiA5anNXni6FAcN7DGzXNcXBT3PQN4bzwj2ZFueppNycjtNcmsV6T5vg5c",
  "key7": "3Ep2oU8Rk64dzsWMeg7oCawzS6zfoDTPRwSg4Y9AM76WLhTRoTGmAAp9rFqmefYqwp5NrNFKb4AqxcLudUzudW5d",
  "key8": "5Z6z5cZCqsHckbLkybry6Dh4zjHSnxH5PXxcodDE7gvp8KcXAXTi8dDUcvP7SU5C83djcRHxU8ZxZzaLrLDBpXXe",
  "key9": "3m8WpPHHcyMPAvW1VZ9TnuDA5g3N6KeN9pKBKqDk4xMqHEU4cJbbWaEPyaxk7nuaxNGTqH3H19kpjwjCxW99Lvij",
  "key10": "5L7CgZjMiB3yepfzsXkFN37swYvfJCqz5rzDVDkA3hk4Y65yoc41rn2b34DFPdQanYvPtEVvookGXCVYgARaBf8P",
  "key11": "3apAMPgQrzhGd77hpCLFUEzxRhhjqJRAuW5EppZ2wkJeEGQFDZq7Rrk4HaxUz2ECPTu7YLFzibj5n6V6XwvHoGfa",
  "key12": "LdL3ps65BAG6NRGW488XAsHLg2LZWK4TF97PAQ5jLugaqtYUJDCchTPxUBW4qPvEHYHwTVUCqaSE2SgkdWJWbiT",
  "key13": "3DD6C9RMkEkRjGNRyQT4AwQtcx6Q2kWMNsR9PCT7vpTnK3A4UmFfseCxak2XKFoqjCiWEEARYeq3vqYSUnwTEsAA",
  "key14": "57bXpNrThn2TXPHePjj1sUyDJ72EBKLkf2ZPgfF4qcuVEpNdTi9K3bnpKEdHapH1h9QLYrF6sg8ewfmo6H1ngHrZ",
  "key15": "2TdDmFZUXEDwMnNM5TD58A2D6KagzgiZJ6Bh3wU46rFRVMsJJKz5Ypq5uE9hUQWkaA331Ptwepg1rQgqU8HaVm3m",
  "key16": "4CFQM5AvtPXTbbHD8RfbDg18kgd9aD69yE7YXHgvdFMAauzxGuj43ZgJMEuxEJ1xbSs4AynkjuSMgwfSoKNXB7dN",
  "key17": "41jwvaoHsqasRpcVqvfyJQeRWN3MxahVpbWLubNKxbTf5ySVpzSX4v6bGBZ7WDdXEbWUKnMbBFrQFG5jUCACAsz5",
  "key18": "2ddHAwANZMHqPT1MjomDE6MjBFAM2XdGbcqJspHPp3AEeknXk9h7PaVrxfSXRRkFbcAY5RM1QZaZraSRrff2cxug",
  "key19": "5FLDe55mieUCdMh2W7AXRrSc2GQv5WTZ9FPbUoWtyzBTB4bFMCFZXhWwDQAp7uBgV1knbzD87D5jYZrVcjs6e73n",
  "key20": "2wmhEEwkK1UxdwD6ATU2SnAtbLWRCtVujf2wkAXdU2wHr2RGax385VwCHeyFR1AJgigpRFa8wg8hTL3DDnXmkFSV",
  "key21": "5qdRut6oXYLRZEJrAGbbZUYXZRVnngYnaEQ3mmLYhnDLSA84YB7dRXajajJ6WUi6R6nZn61TgfZ2UWQWjHm5P97V",
  "key22": "2n2qHytVqeQu3GbpwuwbMWdhFAsk3XncWZTo5WzfwbXbHtjFWw9VA9QZ65mitsnD8kT6Utn7Mh6GGm3a4YPrtJ9L",
  "key23": "sNaTpMV4Hr7vWp4LXfKwvaoSnpwxnaowbBi65kMRQtQ2ZZbZTAz9Gir8BXrACRWBu3nKrQ7nejRFaYvZMRAmDBC",
  "key24": "5a6pm2ovmXCZEvianAKDPVHZ2H8gZwf6dr5DS2hRAoWojceLEi48ts8q4Jd9fDwwV4fKeJ7AEJS1KCJCiondwKNi",
  "key25": "24HNVd5Brc1brj2wuDTaocUWwUKRiHAU7aVUmD3mXegVy97ePNXVfhRujNPgkpfDPF6A33RfN8cvYqbsPmRjpoPB",
  "key26": "45ipSBTmx5CZHwEgTREWvyorajFtMiWdv4dn4XEN3kyy1b5mTKcxYQ3LfEm4hUgsUYQ1gf2kggZe5dx9bhq9TzA1"
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
