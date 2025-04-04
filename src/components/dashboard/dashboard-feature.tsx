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
    "3cauwedokVDFrTH9eVh2DtdL1isioCP3MaoNgfJFMADXCe6gHZAXLvW3mcSkZyfFSVvVVzqukdWUvvfi8eMBbniL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D1DddfuNPfTtHHmhrnczewy7LfT2HKjMrtrDawHvx8cn3gzum2B3SfhzrAz23mrgNPAKYYLBkhyiKYUQpPkAhTp",
  "key1": "3xTog6AiLS9nwVQHkwrD7YD3iQVB6uwmnZfa5YLvVNcbbaE62bK4qXHSsTFkaD4HSrSsgrHc3aqCj4anQfEPtdHB",
  "key2": "5sNGznz5QS9YALmFzgVGZpAWr4VDUdc2dj6nEbn2RFXvPtAff2L2YVBqQj1ttWvnBtPBm5vZ65CMjuJHBSr8Cvfi",
  "key3": "3ZsTErbS4QwZrGpwug9UiN571ubM5p7iGgsujatPiEsayPfpWABSSXdS2YmHMHhS65b3vMK3X89N3w81tbNx6Tca",
  "key4": "RxFQ4YeaSt3z5jCHJ74Jn5u2ovXR73MPaV2yLjNdBZzKG1j629PDBWbsprv7MJ9DTaRaAztBHiccoBNEojf2dRG",
  "key5": "3cmzqDWGELhmUZVhm4YdRXbPN3KvV4ZXMzf8KEVsbhMm763xdYT2XecHKxL5CMecpy8Z1SC4fY1cyE4AFi4F3cxt",
  "key6": "5JCcfbUjBnxWkGyYkT5Bru589c9bSA1KAeEfx787NL7PZHwT5WhQF4BYtKmiAQJ7xVW1FHTcpHHUVWrEu4KD2una",
  "key7": "552AmpMobWuridoy3jrbmKDBQeLtSmE277LNEEMJGP97rdJhAdKndMUasFhTzoSmxVSqNZRPTFXCb4m6aFMtG8UC",
  "key8": "3xUuRga4CUpWCW5yBd3KHCuS75RJjxXXc7gXxbW4uopD1HrQ1WGtbaCjjGNYWPBiteiPXstZfxMgMhmzvYt3KMA6",
  "key9": "4eM3pNz9sf3bwPRZoNcZfXWcNnbeznS1JD9WjyrtZkPqhU7v9wXsSCAs4QUrdpbV9hq4fdjoCg38Hppaw1Srkkno",
  "key10": "5BnSmxceBAmxc8SvK7PUSMdMnj7Nr6C4wehiqr2qa3UtYqxWiWNeG88Kn74tYDdjEqH3TVuW1c2X2Sakg6HauZQR",
  "key11": "2RkpyYboQAywTkk2xEygqqx5HeUE1L1dZtHAYASCUwAmY3trXrJUyr6EJFtRsZnBLMsADGMFdFTu46D156QnHGe2",
  "key12": "61ooawtyyzpLDEub2EbUJrnXfZGGeU6AAvycpCZeYTuWCfixVZgfsEv9PgjgjJWv1hwUDw2fYfXmzTiR837r3hRe",
  "key13": "3Fy8NZBAaihn6cJWBEgzi76gmguZ1dotWoNa4Ep99vRpeqyZVvgBEqRRWYoW9ZCD8hG5hYsPbLamMLHS3YdHZ62L",
  "key14": "4TRK3Sows6bUUMDoF8JEvBiDpwT1TieSosdSASqbU9jinuqbwescas91iNqEC11hzQPrmnF8efwBuXk7QjHiJ8B",
  "key15": "2fNogcgEM8vH9WBtgRnyZdyVDF6ge62ijaBF9ZTowdDknYENUUWVw4eVscykH6MqA3pchFbURqnPngpN4CYyk8yX",
  "key16": "35SjyEQLsQWWaATBZKastN8LF5ZZaQSvS1H38saw2nffuGb1AXgEaYELA58SVzE3vtLwp4v7KNQFtoMLWQq76WT2",
  "key17": "4StSKDuLf9hJVUTWZyEnej3V42uD86TFaRJSrrh6cLEgYGbJJDNMFYMWA1WtR8r1KTFUpMsjBSzAg6V1kN6ufG6U",
  "key18": "2htDnJyP2NtqUDiiNWsvFnnamizPXafCRAKSUEVSLg38sg7SsbVtT7UJcL5V4znejd2uWNC2FYZFjESJ2MpAW6Tt",
  "key19": "56eZFggsZr65FJVWw6zX85DS4PjEAgaWE42oWVjHFKGNvDiLbNLvP6tqDuXvYrbH8AqiCjkFYEz725yAiEdgJR6Z",
  "key20": "4bENDfFzrCxunFYKVZKUqcLFZmoMC5bbHNJF7F9boBMoaVin9tr2GvzwqdSmtzW6ChCdhFWYXELSPu6Rh3eg7zVW",
  "key21": "4zt9dy4FkSoKZ1XdCRAakNEmJHfwXNogxeBKcHfR43fbhzQxC8K6FekGfBsaxqKVkcWtoG8ak7Zn19cE1BeoVmGR",
  "key22": "3K3HZDu1bTsPCAbGnnDRP9MUzkm9FYqhkqJ4xb92R7pJbKEW4fY2gMTicJTFhWXfiEc31HEb11XWmAMBgcLgrNdi",
  "key23": "3oVG4dqR5NfS7XZgHKEUmvocd9eej6oqkhU225iVRHDEXiJtV8KEmWsvpANtq8UNVnDMjSgN4DAPNEinanvpzbff",
  "key24": "4DbtU6GTjMkLe4Hs2DVEeCLVqghmGBPrtxMRTqMizqydYJRUjLfGomMqgEzVY53Ltk6km67hd6ucFbEmBWYfjVKk",
  "key25": "Y3KhRv6MsiPsCp5rPDsTV5BWygTcBdZmHiJGS1htG7j59GRSEii9HrV5SbPidWBdPnmw4h4Cn9PRrJUNPsLYxeC",
  "key26": "2pPu8ZoKd3dotFajSUhZar91sh6dZXZi75imkmVkao8Z3cNrmC7kcSUBPiZDmhp2dpQGCe6MXkfKH6HXrEymsCes"
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
