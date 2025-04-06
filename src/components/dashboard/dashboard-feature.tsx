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
    "4rKUWvC49tnfwpJevzdBVWW9i63h4nkKHgCHL2MVNraGHALexko67yMA3vPh5GbFCf9WsQJAEMLiDKxQoKS17pkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RLQsW6WEfdU9qtpxSdojkahgYg3UJcJGeXnrT3W86YA3NZeesYdFzeVC811WELrapgety1Xpz7xFPdd4EkTpe3g",
  "key1": "3qzrgMnbrXffJseKqRrTpzF9kJ5hgFSV5bVXoHpeSwMSRjq3LXDa8wW7ztpVYvJMTwDnnboeVKQfacupeWxRgKW2",
  "key2": "3v33TtV3gvyzCWo512XyRcgnYnQG3KDrFcDcSUg2aTRKTACGW8w7XQYPvVYk1ySb5Q4hed2i8mrmCX1vMH5t74Ry",
  "key3": "5ZUUS6WNido2ygGuCPCKmHutoVmkYQ7zs9iQrV9JuAgoNnXDJCNBY4dAmU5Zapx5th8JKsZQuogfMcfyUqXvHThc",
  "key4": "2LmZAgx3kxnGogivRewcXGgMyK27JvuY2f7HUdac6NMt2XAZ4qicMooBNTBRSkmC21kziHfMbsAqYvJQDp9NhkK4",
  "key5": "2iVTrQBm9sgmA5ceGJUDWuN1i5LGXjcqNssRFhR4S8m57zEU1vJJ3Y3uhtxstjuywozeRveJsYZcCaZv93DRPFWn",
  "key6": "ikeHW1UR7NDSoE5QXJR9QJfWuWzxB1GbHyjDd7ERnfnHtnJbBwzs4pkbUS7fWUTXW8F5VWaE5WDWJNWrbwpkcLr",
  "key7": "fNdbKfGW1bjgJDZB2FXbbhaCBXmY2sakLXPT18JfFgDGaj8ymP6CWaY1vSw5MMbXugDHQpMcmN3crWPLHL6Yrmi",
  "key8": "2aTi3QU74Fstt4ATUshJUTeXny7TG5EnxFSyDyUwtN3VFv5VPctwC29DYeB8tb3gWW6B1i98VUdsQrnvmJmAQQCz",
  "key9": "33YVi7oqdqE9R9hJRMDzXPck2QCx3yQhS2aJ9rifeoXq2et5wrJn5uFPmuVTWLBHHJ9pfxX8frphFpqi3jhmbAyW",
  "key10": "3KwJSyZmjeokUrpJicEZUZgzBMiPjedNWKdLzamdwJVujjmG3afQR9hAZdY1BzU5V5eDEunhTpGrwJgD5CHKifmC",
  "key11": "4baSYKUH1pHXsYfqRbNPmZffDcSqTX5wKRNDEKwByVjBCHhyQBveLuv8JYHJZgZvvp2ZmT2ADoQ1iWVNgXvAsA2t",
  "key12": "4CdnhBGKdZLDNEHKiryez6J33CAywumBtkyjr2FLEDtrHg8A1BAPYenfegHnDXpzPJYUtfoWT5ZwprvBdBDKXw2p",
  "key13": "tfwPhEUXg7vNtABPaLMpGjBKRFzBY9GkN9f6PMDxFZurWZVYS9Cy4PLTnnL1GJKHTcHL3ZAJ7LHbh1EoA2YjoW3",
  "key14": "NtbgCHdCJczVBcYG4HmKR9d3n7Qs2uk64dE1dhpDgymDS86MZU77Qx7Q7YJia4nXQgFN957ya7EfiDJiP5dPR82",
  "key15": "wfruLxoKsqm9XRhWH3Yzf5Sg9R7GGQRmxnLGddBvvtGHu72LneGFhLjBYebTZ9L6ZVTDiEkGSdYbNTtokKXdDNi",
  "key16": "2yPSQ3rZPEs8QtthPAGdBbgcZ9rwpNr1kGEsMvGyb4sdxfEaMS64cuJUQ5fyMthTYRmynrZFmbcXhoVq8UFM8WoM",
  "key17": "3PimQdE3A1XwmY4byPEumnGi3T1C8Uh1BnJ1ztoCE42mEF7as8gbH8RXTwaG8KyaZyvWBuAcoKjBGtZDqbKF2zKz",
  "key18": "3AgGn3yxmZYDiUDNN5mqpQ4RdsBfhPmQYahFSP95tAG1KyPmnDV8ZjezXaRe9ba3MG5xcZt6UDoSvgBb5kKJqWnf",
  "key19": "4pHjCmGZUg4v5vZtg1LWvv1UZtS8sjdpenaYWkePWFwEcyUKG5P73KUCHFGmPEsankY78zo3zTdqtC8yzqGsbtK7",
  "key20": "5tmR7bjUtmWrP4EpaKv6UHvBRn7PUq9apBP55eKSvCn4KPqnUSu2CuA4Zy4BSER1T5eGmgVafEm5wunhyhrkWM5h",
  "key21": "5CvRFEQ7E9RR7MrVNfZKWEXP8ehkhJjKjaedzszNN965cUWvmBiw5MAosAatTxJA1ZNEHXEBU1sDZrNBeBwBLufw",
  "key22": "KaTLR6JxiGP2EWgkamAFJFNBigBGUkCoA2zrV7H3Do8m8bBZyHNLjytiijAvaTF4QsHvhFQtmWs7kanDt22fYbS",
  "key23": "4ARjB2xec8f8DSBBsG8D8UgwGYyJtyR87dTWL92V4Nxxc4W5E3Y3YaXCsAFkcLF9BL96cmUEGVMhggwGJiDorD1r",
  "key24": "BS74bsgnV5aVpjYUhMo45Mo6MegDsxK4SrN18igp7U7vA6dhpzL1YiA3zNX88fVSjyN6iorntqU2jPCa5zFuf9k",
  "key25": "2SaY35DRc6BnurGQ5jsogovrRwCgdsS4VtXBeCmQuxNazNgRBS3hXrGq7SnLLETnuA2cUc26DXrmopJJW2HX9g2W",
  "key26": "3UFwE3kjzzGQXELMvxjF7N8T99VesSDroBpwm2qzAT6LgzayCWx117gEejyyLVe4QSVsxr1HFiosaZ8RPAxuC9u2",
  "key27": "2tVk4tAvUN8qqrzNPSAV1mcpyaCrhArXdG15hJkeSuF8hPdRGQprKz5cUArmTm1URgxcF1azru5sgFGXHkbcpwNL",
  "key28": "54ETpQ9htQyveTQPPcugya4XVgUamQfjWJn6YpQxCjGMkZCHcr2NiBrHouAdqs1tg7jSsJVhwkVff3W8N1wHoDVa"
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
