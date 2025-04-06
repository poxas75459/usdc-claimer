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
    "3FFmXFac5DME2jHP3WSCd3dyfeQfStdJaWtNfh6ZpswXgzjnDPZMHdqznYYNwiTuP4KGsyMwiKapQkDXC53c41kJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Np5ADRcAiMmD2ynS57eeNjeRFtSs6SEFo6QqsdPFdJnb12TuHTXM3rShoPCVsbWNviTEBsyom2BwXMtF2A1Hqf6",
  "key1": "2f3nqWtxfEeWkCiVQ4eJJFA67MmVme6nN2kvWXuhq436dDpVregFXLj2mYA3gXCpufPtSYVXHpgKnnGukPah3wT1",
  "key2": "5nt6YQtGUgWu1bBU2yDVeF9STV2sTqWQvvcDJcpmM9znqgakvDaJVx6xyYrVo3UgSMmgrCwKfMnNKuY7eL8UsfCk",
  "key3": "31FzALN3CgRvSi8Yzu2Yyjw3yLmnqDTK58fZW1LzYeutWaeifraDNCxWkZ7PLwtNYpn9j8ssY9xgH2ChxaQfrL39",
  "key4": "56nPCrx1ojn8S3PWpDv37KMMK6rRtrAirT9gL2UFEc17F9G5vWtGcMMwqLjtyxc7EfyyZkXhgsWiiZuZ574dSZBw",
  "key5": "uPjDdawsSqpokMDVNXW3JqbhFnipjkBo5facFh4HKsqeAoWVvzcnDWAofvLcUSvuCPLrnS9fsCjzTLKiEgv189A",
  "key6": "49WF3GkktTPW6q7uvL1jcFEoDYL5H3PWxXpBA5Sd9yKxhrTCgjQHF7shZb8mcqZRfuF59FGyecYevGFj7jg43SkH",
  "key7": "chKr4PXoyyWhDUCmaiit9dV1is89LdP4DjQQzJg1eAoAdeFCSXk4V3jKymFbHetzDUKg7F6VC9h7x3K9ebQr5pb",
  "key8": "5HUqrWcNfWAyPo96gxvGfXexsEEW3vWhcHsK43MbpZSmuieAFjfhqEaTQxDytmK3jmmkDAZcqbHkR9mUFE44cy2o",
  "key9": "5ei3s7XZJtb1u3MLbCa38RCqdJ9T8bbuXRaVw2ghJGosaoAq4gXGm8cRDmxYp8sxh6irwCXjrUFLspvyahEYsh2D",
  "key10": "5LKruGPfVWmbE9xpW1B4GbscxyrrJXBzq133XU1bXGuF3e3ZZiuWymcADEmN7xTomrTGytwUDDZC4KGFH9bsVois",
  "key11": "4d6DtVwNZHRge9mG2rjQMgaw25P8NRosL3U2dUHyRfizANN9JRRpznksmPchHhq7hLJQ3AEnah5sjfLovyDPdtKo",
  "key12": "64oGWYTuxttgjbZgiMAWJfrCwtzbwdP3UyEvAPDBdAGeNjeSLrBDSKwJPdPL6sUuFFSZfb7kJ2DnvK2BLzsgiipk",
  "key13": "4FCzqD812f9kQVpiNgFHmrK5xMzNTw6JvEHmCEtw3Wv35aJcKFZAtdR3No8BTxeduMK3yF1UHkkXMLNHdQn3ZAWF",
  "key14": "jXzd7hRUM8vozzcp6yz8ra8rzRamCc5ag2bfFTaEgwtWRVXZsEwfw2urZcJDXTrfPzrQZa7VnNpYapSHuq7LLnx",
  "key15": "mwTSoLzXS6ZbV5wJoBsy7PtxFXEA89fjpvtsheVYw1x1BVZaDt3Z6VGkWxA6MLQKVAnquZvQJFkQHeNB1Qghayn",
  "key16": "RBGU7yWYdwTgmFo4kbEUEtcfdTfihHESAaFeWHtprJP4yEEjRU3nCaw2e5ad5uxnJpqKoH1m6nBjiGjrZA9CHuP",
  "key17": "21QAAXrabfBTQKb695g5NsKPkAak1wNpw8f9zkzZexx3MAKE13mKUTJAizGeBVid6aJuae1GJmdu2Vkd6osQcuSA",
  "key18": "6455WC8F3UxJkKQeswbyFYKujm28CqiVJ4fC1TbbHMV43yaSSzJ4wDGTyueXX2apQxGyJ7G7pai7dgvaCibguzK1",
  "key19": "3CYj7BuqyrwdFJcmTx1Zv3jHDAsxhWRq9hTNzMw8heKJUCjpgVSuiPmyFseerCvQkBHhVxcEXYoE3fC5DtzBWY3F",
  "key20": "yPZkeyvDwyDnVTfxpn34DZ4mW8sG75pYnHg6BAx73qGQd3qW7NQaDC7AGfU8GLPtFYBwacFjexCtSXhoMcSSVRw",
  "key21": "448jzP8j96SyaaszQD5Uhm4rfEDgXEnXhAY1QrR6iPuKr1HRsv8quHBaC8rjvRt9SS9Z4JoeG3U9ZZ7ur61v9fnN",
  "key22": "4r3A6AvxzjMLkLwj3hiLt8CYp7jtpgEzmpXAVU1VL9fEc2u8ykNNvZQJ4RDJbdmce1ooyPpGvMAEWx2aJYJmmpV7",
  "key23": "25niox5G7cvj4CLretwRwURstZasRThurK2GEmi9fjrML6hdJKyf5yCc8Ggk31AFdTXSXKxjXvqpbUwd5B8JAKV3",
  "key24": "3bzovYMWVFT8oxeCufCsFH9iJfHrrowzEgv28Xe5qh8yn46pRMu6a9xgfbP5seWN4QxDCKKGeM7VP4C8vBMKp1kM",
  "key25": "2vky5fxDdW6s6kKe6rBwzrh2zqyjVbF1mzo66tzirbRix4PGp41XcTxhfwwpvwjCkiyKXyiLNJ9XAQHRyk8WrYM5",
  "key26": "37irSvNztZX9yceiDj7PeaswCvXYQJvgiuMxiwaHsdp55pwLuvSV3nyWx4rYL8yaR8NQit3yTmw4Qn25ZBNMiH9o",
  "key27": "5mWiASMF8n1UuS8p5mwg7ujbF8gCBntCNvuzERwgBg7HY7dvjvdDQ3uNbuDDLpoXTTsQB5StrQvdt4gA6VKJTNTZ",
  "key28": "5r7MdUDepfpv5CrtdvMrGxCp4fkV9FLs42SbfGdt3pE2Gh62r1wgmu9GKpouVU2kjY5pGDN4k2BsZCkmUnZcbeZL"
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
