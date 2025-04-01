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
    "5xFKSAuMRCx3MVceEBSrqBvvij3a6idQojbgat7esZd7kiQrXiGRDUyHs64BLJKKzC1LcAkSWhVwH9JjoYBPS9sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xhNmbFpnvc3fg49gwqpDUYjTdtqmLq87X8G61Pinjw7i8CWdQxMJ56BB69M6RcYxTwiQk2BdgYtthm24vBDo3J8",
  "key1": "i5a56VZ1uxAm9Jkr7THP6pHhGUX16KyJCpL5H57qxmYL62cXiuKaCeEYJvkeD5XiPvhSzZ3o6phEzLtWZ3efUNj",
  "key2": "AiU2TKpRed2SEo1QEDfPAqjWM2BUZnR4p52ggu2bXtLhUyLurQmo7wZnGpuEByjiLrEJUbyZeJ6zM1PUh4ThLXo",
  "key3": "5YHRDqYVAYdwy3CS7RYorBPUcA4wPgdkh7s2wjXMvM5gbxJbZrhV1yQR5UKC45P87pUs6KsKwKpbR4RtDEYAH5xB",
  "key4": "62qx3evy3ro3CX8UW8deb5DaTasrNhL26NYUd38TkATHnn6wtPf2E65pftabRgjhQ1AotxwxoABaSqYfjyygZDPw",
  "key5": "4f1TvXQvpaE1ageQxJoudxfTzNijWQJyF5kmDBtAxBuQBnfhnUMqgsHFrxSym1VUUPBCFd898b5NgxgCVoQN86UA",
  "key6": "3HEFbjv6t4ir15yKURZMpFmK29T3q2fUxgcW2picgEK8jc7YV4442HQpehg7rXDdjxPVmZ7ZV3NCTc3ZBkUQVa7H",
  "key7": "4DWgdR1M1pqAH98C2VCmPZduvTiLwuXqPEfBs5fujiAkv1apeN9WMG78Q7Zr12RSBPhMDhKEHHP3epo5jqsztfzw",
  "key8": "xVUpdHsYibCSso9Mb5b1mX5WLDJKnbderbCGPGNrzwEm7SudBUmZhaVx81kG13Z5CvXPoTGtZvuKBhcsCFA7iuC",
  "key9": "3DwK196EBFHapf62BW91VrQMnr1JJ6cpEkR6BVixQ2NNgveAZDRBeRduKHPxZLPtVrmH54mLExdhTZpXdJcfjBR9",
  "key10": "2ZPSYPvbchmHA8VzWtmGYeKrN724s6S5QqQyvVnqHQDh6mButNe3YKmP3G8CSWuok4aLdfJb7rX61uEi62vmkVrY",
  "key11": "51Cbx213JhHWtoSdgdfWFv8uaMfHiBwW2MgZERBJH9DNuj6T8vkGJtUmsremxroSJ4Hp4soCDESABGoQcgEsSeqK",
  "key12": "5zZobMPFt4UuPbAfgLqAZ6wH3W4bFFwSUpGZcVXnVyaomkWGvQwpbFGcVy8H8eQfyxMyrCvVG47Vs1sjpXdJLAfA",
  "key13": "2Dp3FPcL468UyeeRQwWm5rKB4DF4xDhSfeT4cjdnwN3VtJk4Zx2SieKkpLYAqNk9oGyVJk8gLSnfVCqeEF1fsc7g",
  "key14": "4CBpfPQweyELugLeDCt63Rtp6skwKidYVoSoqy1KNHJacH4QuDRidnFT6zwH5ocGCE2V8zHsStBSTyzEN7hPFVP3",
  "key15": "67H4ZngN3fFU1p3RivMBKrN6iM8U1PUZH7qLEB4KFYWrKgAVJkfGADHGazypD8UVzB1T9Sb9yw75CoSkV5ziZ8Ru",
  "key16": "4jaU2uVVjdJbs7Xo5fmEQdDcwju5LHvBpE6PPNmGwdRSUSBkhSgMXagZGLtAjwaqu5VYL1AvLG4cTmaYWnS4nVko",
  "key17": "1ZfFNEAGYAkKDwj8pEie1Nx7D8YRK7r6HBzJnU917pShbcjMf1qKHkrF5uz5guF8yX9guWry8kCoBm3nHegC91N",
  "key18": "4LiLbNa3sbcJjSCTRrTnCq19bpMN1uCMRKwMrzJWFVywrHbPBHCjECxrnLuyiDGkAhpP16c9arRRnZnQKecZmzKt",
  "key19": "3AQgNCEC3M5xzJy9Ez8BtxQngQGefv7uMRY1miDVDM8hJXM3EUoFboWsg5EiSKRpsrPdWhryBtS2pqnETu6Abvfw",
  "key20": "4nzPk3tPPumsh1ACVARxDsT8cZ89fvdgmSj83XecBFvqwbHqYpBsktCsL7XFJRAkXmuqf1puqHV4Z1a6c2owaU5W",
  "key21": "5jZFG1gdRa1UWmigkkm4z5agbwRmBSyEz6fr2bnY7qDVAGLA1MT6SMymWdaJJRrnaKBautJhn7pvxntuu7Y8fDsZ",
  "key22": "5bpsMGbiq7KSManz811spaBDWX7T17y5DV6B6yX9a9tKhNAJanhxJNKi7NR86bub6hJb2DtAZrpeDSTUAQbZnrja",
  "key23": "4uPv5xPDqxr9vMZzWDug8HDNHrn7ZkML83fwo4oyTk6X3M48KSQqwrdo7uffpZhij3UDsJpeGbBGGM3wdTRe3xRN",
  "key24": "4rv8MZhXju6Ebx2XXrsThJLzQfa9qEQvriyNHpUHjvaSY87ChJPueDuvD95XwXqFzM2AJoLMMy2P6V8JRauy1Hag"
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
