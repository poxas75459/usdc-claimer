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
    "4QuJsDQzGTn58fKZTumcwgeZHcSdej7rrkEg2AwaZnfueQooL9nLomDN1cH66KXWjbJgUjHouKZnokMUGjra2RwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JYAC3C8jUZh6Y2RF4BSsD9rd2ZbaaUh1Fxeog387cRw9jE2dd9ZmSQKA5ZMMU7hBf4MpEHsGxkjp8Z8mYSVcKCv",
  "key1": "4LYZ9oxW7pzL6S27S3AWxcpiG7rSy1aNmZsTVVDYKZeBzDyme5mrrtgKeHTN36wnwwrxLckTf9BqmPKZ88fv2orU",
  "key2": "DjPtkpc9yhgoiFWabZRZgL7CEU8TPng78egq18FEqMdLWpYrX1v5WuVvkcL1nfcrXiSVfZ8Q7RXyF9ohsCdJwHN",
  "key3": "bsjx2jc7T2WWUwsmLNJkFtZh82WrLafoTRM8y2TN4WSzCESHyYoiAmyAY71yE8r7AMneefudX8MfSYmhwc72QZe",
  "key4": "2gRKei6hTTehT5VKDzAXMKZr8KdXXxJPXCHqfXnR85jdZGyWzUB2MYphR4qdR6Bcv2uBNJKXrdichSA2uaoLfLSo",
  "key5": "3wgCrGQdMCcPwcDD6UXWgUE4LUSp9qufGzuFcYHnc13z7wPh4R5UbvYgWtaHjYpSiLskDpKdQ7PJFyKzyALVcWdU",
  "key6": "35d2gkfheifBpJ7ii4yJymS68uyNM59jZPKtfEeb3HKHzgq96nLmJnMKb1NjpiSssJL3qmJPvwv6BdTEbPcKthcg",
  "key7": "3PLkYqWU8hLKtY979UQsfFkosXRiMjkBE9xXd9haTujhBA5KrUCb3ShfLMV2GEcgovYYLhRrEjpXPjnhdRBQF93d",
  "key8": "51YznGK4AV7A1CqNfDKoFmeCpdnfn6MV5FXjgAspweZp4aNWjPdSHo7G68heSAruwoMnqZBZggKhZCyNVtDGS2pn",
  "key9": "4AHqjt8vYH2iknohC97HDPetSjBWn1MEtyW19JdN62jNX3FhjgWuAoC727qov2JQgEqovtw9NoYZbswmJC9vm7oZ",
  "key10": "3dxf1nFaSdEjTssUoNHP1o9FeThKHSZh15zFJdcVEd2X54XJV3n8Jhp7Kbx4UPHMsXfJwz1VbFqEeFSxwVnSs8N1",
  "key11": "3strRKCaXCeoZ5hZi1VctzBXHoLhJ6wboXA9X4Xj3Z9B1kQi25ZsAYiYHy2vuYTdQgDhNi64RAjCoz6wuBYbY1U1",
  "key12": "5mnznrwpuCiYwxB8kbD68Vj1M1QmcJn5j4jCjARAEePkKrCD9iMVPmcw7uqdEfbGQNUgb9GkjmD65uod6sMmgP66",
  "key13": "vP6AKWbPWY5CeKtXBypWyE1jn39saSQwMEbD6T2M41Tiav8o95QhPfyS31bv8TMbRaCw7fGWP2u5RdrgX86JJGA",
  "key14": "4sUeoTC13xSa8JT9TNTCvX4oxc5yYA63ww5zVLCPas11LGRHwzusGi7rpcS4M5dZBfzeuX61kWRwCcqWTmHhncVk",
  "key15": "X2k36AnAYeLyEK6ir5R521byMV8QUEQGizqzYMYnfJ2BXDDX9s3dzWijg3jx51FHSunrUc3sFyFjgX5rE5DzJtZ",
  "key16": "4Xf1T6stBZngeyi9YqfGTAsWcEMjywsuzeXmdrwY1CGqDAQPWkBy1CFWnQ2FvyuQvpGoiCbWwmifFKupPfE4nhPY",
  "key17": "kyhzT6NYb5YTBT4s5SHTVE6HiMVVoLfssq7R8uwFQ8v8z6o1R2NfzbQnSJQ1go813P4osmp7vPLYpvtgaEvKdSk",
  "key18": "bRWQTsNF3c7S4TfwQWQe7hk67xsymtSwTmchVsX57KEkn5YPDZVEgTeVwGnPMYQ13JBmrysUji2pVtuWTeihMHF",
  "key19": "2MLkvQ6jtCKZdfQ2cGJmqcSjRgGtX3K5tLvXcdwpuhhcEwWVhvHt3GVYdHXReb8hBKNttoZaFrUjH4sAM3MPkz5x",
  "key20": "2LgZp5w1kYjhZeSXWEts8GNUXqHKpUwvzGQokEgdorMLu4MxU1CQaD1zMvCoyyg1HVAerkkTRPbuQqawVqMTJvVP",
  "key21": "4T7QSiNuuCrorMZXd8Erx3KtsY7TcnJAvB1LsStc76Z78Zo3uZJzVoHakc8YCUAs9W5ECSwguC2ptXUhtXEb9E3U",
  "key22": "4PrQBRJgjaHtfYuEkvMSS7TmJQqj4FmWwbd6mqJgWuHxeV39mXo3qJLPDXFRNGC9XngYAyFfYJ1eJwWWN38PaqX5",
  "key23": "3Ssj63Z4U6FspjQhCteFh7ARm7NStCF8j2Xxt73Ret1738DhV5U1L9FnTFd6ZuBAWsEvSXg1J6WknKwkWbc5V3af",
  "key24": "2RCQjy4A2aHHuwCFBhH6CC1733EqDFzgys2TNuRpCLw4PM3M2QhBLJyyCX7qCYxUbHrayFLA14LT7gofFncryFRr",
  "key25": "2Ruih5QurS9B2AHGfeDsyK98oehDh72kr6t2gfv5ehdgoTS324w8PHavJsVjEQEcwSsiYT6WerBma7xcoxWudro4",
  "key26": "4Bt64jw9sp8ESDy2QsC2VrTk9aa6Cf6SWKE1ZhmhR5ibxk7Y6rcKniBJ1pBTkskwt8Gj9Ksd1y8BRUn9VMdjv6sQ"
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
