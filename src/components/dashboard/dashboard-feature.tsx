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
    "34XnJoJGi1XztLsJGpq16FhgPxcAMGy3ogWmmzr7119xFK71QPnLVdNqrxKCVmuAy7XngsE8jG9M7qgqMEZmWTCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqKdQAHSomCBGePyRNpE1pZFn1si1FUA6ZyhsirF5EeRSS6qKFzaXFmXgtcoUuxixZt79oF8ymABDC5DjnaDsLv",
  "key1": "5csyeFba5BAvHYbaxSdRGzpjmhBeBowac4fR1tNXhc5F7aw3j1B2kkD1Y5zzeH2fTUYLnX7F32Roo6kXsG31sFbE",
  "key2": "ooTqbwST426yaCcBgFovhuZt89E7YNUH4rUkscHcvKaVpX9ydcZ2gmmp4pTtey5bQyeRhE2FQKmtHXjYdgDMvgf",
  "key3": "3VHPVcdQ1zGCa4s5oaxvhh4kEzBBredfhzZHDx9EZUi5AX3suU39SmoQZ7QkdCpHhf5cdqN7BszWszKJYxzCzBGR",
  "key4": "4BhdLRG82dtZw18WtXefbw3AFTdFvV3ft1HznxV79Vu78PvyKyNVfn1pVtbY2UX2ob5vcnhtBMRKpijquzFugh4W",
  "key5": "5QZB3Qc5o9u1sdaCsiPsbZkBdmTK82Q5hK96Uu1wpArAkiKbz9p9Fe7MQuUoDoYySkLRgG3J6u2cqRpPxRQetLf4",
  "key6": "45gQKyttw4UvjFYgAGT3JEhX3ZctpqnqqivTnT4wwJ1YjmEkX9WqHtrVKtHz38VxWwCN1GZhH45ErAJjFnfgHzZe",
  "key7": "5nr3HuhLadRj2irJQeRtPaw4f55Y9kT6zyZuhkXLcGjPpddEPFRmF9V2ffwB24vyHfJoupsTrNEQLDjDcRbhtk4j",
  "key8": "cogGqrvGq1RV7fpPZDaCkt2VStzs4obKsNKZTZMSohQLguh7ymncuARnVbN832SbM77cLgSzEXzQFoWaGT1FBKD",
  "key9": "638a8dCQ7yWoDqMLQ65Fxd7CgK3iqMQ9PHQmnwDZ2MxT1t3iGVzL8RnzVUAi6pVsGVYyWDQ9wu9Hm5NABGnJM8SY",
  "key10": "2PWfucXQF7wPKTMyLcj6HLBP6oMBMZqktDYXPyArWCysWd4Et2UtFcyeryii6UL2ZguEAXbSAnfvvcpf5y3jV5gJ",
  "key11": "2AaZfE2ceX3kpRjzvsPbVp4gJUin3deV3a5PPq1NYvHHEb1sgpxzHBNoGxSDLdBm51EYGRtL3Rtv8s1N9mbbyEQ2",
  "key12": "4kiuCPJMZEDEiqH58JEpGpQVxy7hzeNBmfFht8gnsRzRyuwHYU3597Fd6QXmdpyqv9pzmZYuAhCYRqCFvQ9f6M4T",
  "key13": "UdZApJ9NgbHq1fhySLMAJ1pWgYZrBnSgpD94uJ7Cvc2yzpG4FLCBghjwSbpYFW1Juj3SsGytYEZirkuuBBUQtb5",
  "key14": "4naeKVRsqLjqEAhpwqPPWPNy5AA2VT6ZFKz146ZAJYNHXZfmQ6Rob8K9bQD2hqzV44Cs3xokWj39TYyU4YRpURW7",
  "key15": "5hEW8RfzMxr4QPzwDgu7Q7J6d4YSpfHc6BzfjPNcEAZvBHuyJ86TtCnSh4uUUh2LAAMFHDRKiXRB1SkQP7ngeLLt",
  "key16": "3uWGKptaeZyTmgKwVfHxyyshN8FjbjzEcpVjDiQCEJAw1hDnXEkcp3bmHEgyUp4mCyszMXqWwq2uVLSBwB85dgb5",
  "key17": "5uKS3XdzMpMmBrYDwVuCAa2N6SydV9h4uhMwyC4gZnxydezHbPzMpZn64zACEXU8tkj5ps53ivvKR94pYqco9oCr",
  "key18": "2YuDx8aQziQ5vD4zgdPZPDqAZe4mH74NxYfDBsKTws3i1rcqKZxtvcYfXPcdrgjg1wGfptZdcazcdgMevvZkSAYD",
  "key19": "45UEPsvFQYWvpVftLpJA8bEczbt432kRLxXE43PsyZMP6JDQPeuxari14Mp84eeWbjuKGR74YKzgikczpzcmVUe8",
  "key20": "25sCbb1URJhd6Phwk9YVPfNqVVB5MH24KNENDrHFUgc7Lu3m5UCdhFkkKdpyZQUpERY9FY1u2tdL1j3N6YkEBR8z",
  "key21": "29Fzx4MpnU68GPZnv1uTkehPm8r7Et9pwKukewuDzP3NhmC7obeJ8fsMNtUk36g2A8fNX3spKV7vv3FVN6LoM19q",
  "key22": "2G8Y9G1U2GKjcV85efH4k5dU8cjPct6LhVCzwxoKxnWtCvE8gbEiqEXJHPCDdUVXz864qdtM4AjH4VhZFAUmWCFD",
  "key23": "MpQ4hYrH2oFBkggoT91n5dNRhSGyUFyAXN8wsvkU9KYnfZUqQuj5joiakUn5nhEsMr1AqBdDuEP5aqcWJykxEWi",
  "key24": "kCm9cUT96KaMHMSyQJQ5cK6X6kN1rkoHiGmiFpyNFAhHc4YE8XuAdg211aM9V9kWzMDYdcH1iHAkePuXzsrTB48",
  "key25": "5CyJcGuLdxTu9FVAwxCt7L4SYVXQ5yyBVLZPo3h7Zw4xRmbrbfgaXxBCB9ywuiQvNPgR3ce7QzMk58SpiXShhHLy",
  "key26": "3yadfQBf9RQcDpUDxLAmUdhnMZC2RiM8zFWNZPr9DnnnWDDzXkdz6bhmE6hEtjmR572PahvS7q45ckVwg1U5Zuqi",
  "key27": "4pFHZEQsBEDpSNdBe2t2w4XK5HxYkwSk5X1qJU7yoWhzKqoeGedAdkDSuC6Ba65mMPfwcnK33GiwmSN7xEwDEZfs",
  "key28": "4hswcNyWAZGXqeHPiAbREYuWTVB4BWCWezT5eY4uErT374CcqGiHdgEQnUcFkT4RH3faf3KDTXBazNoxcmyYiHHi",
  "key29": "3xNzuaKsiDB9FXdRiw2gSjR7MdqJ3tWpkwNSgYJU7Nu9KjRefrr3LgzgaJPYkTXEYhDWngBpoyoTBHhPLxA6pCgv",
  "key30": "8913DQoweL6XUysBshhyyjRfgMtcXYwNHNzmgq6wRajGmkWEajSCkCPyQx1BQPAFt27h9DTCpoZCjgU2B9orokh",
  "key31": "4Arh6J8dkvcrWPzmoxo46ArDPWLeazsmcfZWKZxxuo3s62QUX8E3457ChMAK2GyVhkeG8EJwZ9iCT8bCWPcHesAK",
  "key32": "iucp3ofEXq7751WLM2TBoHFaczbAYSjqvLz2RRxBwy3EZfSBgkAvjZGCBnVu7tzXcU3eXpvS7oNDuCfzN4XbKGp"
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
