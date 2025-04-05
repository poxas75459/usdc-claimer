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
    "41B3esTG3AAx4cFX8gS9kU5UABdL4Exh1m4NAmR5TZysVUnmn4YneXX9K9oNYVpddj3t2gjyZVw5Y2NcbMRRfGnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KqGjkvhxr3dNrUrFgCDD6sQJ9pq3ADbXsANoTq5JvySX2jviwaRZPtJbAoQiDzo8TRtGbecrNBs7vhrGeZmdxaV",
  "key1": "2xF4ucPeUnmCikBX8V2XfPEG2C8N9nzyQGknNHZKKsL549zJUWSEEuBEwfF2vt349ReVtypMG1tKFX5Lb2iDJ6rZ",
  "key2": "364YuWQJkTWAZGF8M6HjKV8k9jc9hRcHWhMnsUJH6eyLVVMjGdTnjLPRmEkoZBEDNYJc92ZSJCVCS1oh5DaZhDKw",
  "key3": "2QyWSBoxoJnomW5nwB4xyZbuLP9C8323Rua8YLzL53A9G9YJAKUFqkuxvnWYv8prHcPg7oTitRxko7GK6xq854Yw",
  "key4": "2m2zxMDQLK16nk3mybvfdKptCZpEZ1KNbQ5ccza2WhegZd5h3EGYQx55xXvCxqH9HBgbZNpqFxctKGz3LfTmUx4F",
  "key5": "3DqnuBbT5hWhFB3pU7Q5RZy5nXRuBVx1Bb3m3w4asJbgUdy1FyWK9DQTj1g14m7zr6dKTMHgjUUH6nDWe6FgDKFG",
  "key6": "5rPJpuYVVEau7164DEkBS6zGUzw2KHtYqVJ9ooLgxpvqJ1FpPti6q3i8EUXWVMffqPwE1JqaDKxM2BDkeL2dkMBS",
  "key7": "5AW73SDKkyCwfFSb2PGDDH6yPQvw6CgyvpkgxjifGZRPiNGscVrW96o2S6ssVsSsvCYQ6ehJePLREbHCeocKy3jq",
  "key8": "44aFqSXim42aAZxCxdtg66r6RmrhxZt5zCsh75bnQuesyYDNEiNrBxZ6hT23esixyV3Cj81HddhxVnJ7zv6LRDFv",
  "key9": "4cATLDmvoxvRKoDwk4nh6xLpSvzuyGJwZVQyCJcadpEnVGAVXnrovQVdUpfsMEEwMj9Vz5cXMrJLn8QFSTq6U1VV",
  "key10": "e51uzLHB8GTJe2iLTXPNsL2Vjz77K28GheHgTTTD83Jx7RqfjMSYZViuZKBCENRVRDir9eAnpsZQ2HiwvA2thpy",
  "key11": "wSFBDkrCy3tzNk8tW6KujXKjK186bFnRi7GKpDY2AQfTCVpHLHYHisZD5bP7Kb6XaRuyoE8xGBshYiktFavGiNo",
  "key12": "56NWS8oyfR2DYUJLoxF431uhi5hEC6eB6cATpzT4iWHpiiyWfud9pXKHKZScXMMYw2e2vRyPMnfh6pq6CRCwso9W",
  "key13": "2qeNLkFb1o5BDTDQcWE1r4iGVWKohde4yHxDRX4Wr4ig6Zfa7mTQ1APKnnV4B4u4MGhskbe8Yjx2tsHiV9oWJf3p",
  "key14": "3f6rNKxh3zBmecxFXBLXmPwVzsWWcDiPT1sqXE6zmM1anzfhBMHVikYABiQvF3J52WDa669XnT2zoV7FuSr8sndE",
  "key15": "1kCmhuJ6DnNDR1PKmcjTGPRithaGx89WcP3PFwQv6NRcyTLbhURvEfVYvT2kzFfNEesy8jhgkH3k4E1M1RESMGF",
  "key16": "29g544C4fC2HuE8iVFz31CeRJ3ViYgpjDqoyGKugTLrgye7ksgKZeMPdjJMX3riE5gtkb9PGf5rowhbf7ELry8S7",
  "key17": "5BxD3KzWuQMR9omejGikvY8bHZXTCoZqGhKzxetMetsShNfdQgJwSSyvPK9JsfE35i29TrDWGgQAQ2LW3zzxF7P1",
  "key18": "34VcBaYYBRrrCXocsR5UsisbSX6MTu2GSsyjuBYzsg2fNV2Psk3z87ZnhBw7i7Wm6UxQ8TPsaak4u3estB4Y8a66",
  "key19": "4gZ5KGX2jcpd97SDUTwv5pk6K7bZkd6gSiZNoBexosfHvvtWfv4kkEyvhtiv4DPXaKTpFgv48N4soYeV5WtGkgMo",
  "key20": "MKnVrmVAznnBkiwHfCQyZfoZ8235zLaPyNSCW9NsQbeGn6P2oahueiUk3Zs6pP2c9Lc7qsta1XJUEYEwazxjpC5",
  "key21": "44pgCnnfkLo293f5WaJn976r5EhEUcbQv3LH8CxVbwpWRJCSRQvTfxUZUU62XPTKR4ojG6u1UYkDk9EEHTSkzv1E",
  "key22": "5CTE6bExp5PpMP3TGzgovX24DpYY6NyrFEimXPgVLhbhzTfy8iqdj9F25JCWB8co59eS6aJzbCq3k6f86RE8x1F4",
  "key23": "3SLgkuyFpBfMZQvXDoDC7ww6EtrATMQZxrX9iAwQ3e51MdwkXRoneBskHTZsZnvriyY19e3bkK6eePEwMmxtkeCq",
  "key24": "3utgcGah78QZeCC44LspvzAtLxifbzsgC7c8xT7s5o28dL8kttBsonYQGk3CkA9rcEPYmu88UUNqPpADEhQAHZLv",
  "key25": "SPz8nu8kwBA1WtYVAHx9DqcXRsSCPMzL7FvstG5XRAM2dCoya6uDndcoCVDufjcvS2pSrb3vfJeCBU4m67L1kJu",
  "key26": "4gXco7Na1zn4BwSAnJw2iiSRc1c51Hx8Ne8qLubPrcBzPAJZ9hoFGvV3npDR5uPMnR8fcuUMyy76Ao4N5vPGY8NX",
  "key27": "2TxbjqG8v2kVrHSebHTNWscxk7GjLwQiLvbAwGL3DS3MRwvC3DeKRp2uDQCh6D695ocz1kR4z9NbE51KtaKauZD8",
  "key28": "3R2A91oU5vSEsQYxnDYiVn8nsFUCxhM8rJkxT4NyKgNZiNJsakcDtvJyfCV2A4btC2Xb6Kxp19bDFBYxumBuP5k9",
  "key29": "3o4mwjSXuvHpvhf5fjNMJcJWVHK1UhsmByK7ByWcqLU6cUmi1fCpdMEgVCCpe32yPQ6MVQ7yLRk9XUFFgDuXoVef",
  "key30": "4mUdosvKfp94reZgvSEeBePWh5u2VvPsdC6Rn5LV8BtQP1if9kJDxgLqQuY21Vqa81SvtS78RejqjHsTF1FxebSy"
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
