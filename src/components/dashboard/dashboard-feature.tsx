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
    "5NqxKWcU9fFGC5YZVPmxPjzsHGDJMQtCBWpESoXcyp8JsapfVFjwgt8J1Xm7g5XwZ9bNE6sisxotRMWH5E6MadAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MwWWhAwDdc2kRW2hagSo33wGsaA6Jk99z4kYNLo14KnuXT5DTE7mQHxb1Rzw1f9hpXwVnCsVeGeinprcNpLHP5n",
  "key1": "4N8rui1xrrPY2fHzVLhb7V4H1BSYkVD9DVNCYsk6FW4qXL1DjqRN6osGciDCv7tsB2cK39VX1W2gAsLujSfPsaSD",
  "key2": "3x36EMhcX7TCjrZbYQQLiqojEsC58gYAFKbidnuMAmedsR8MCHy4zQ8Ph4sFAmdtQ93djnB5xsHjoJd5NwAa6CTD",
  "key3": "4o48rXgZFK2j3evcKN5fknrsSemiBus8g5c1f8YA5M2sGsyoRasqHvF2zhfdxx38JZTzMwjBVrG1dRMiErM6CRP4",
  "key4": "3WNyGrh77WPF5qFouAcDStCuU4dwzE1Kx8khpPLocTw5LXE5EBgczSdXckKPiFWcE59TKu4qcHNJGehKFDBUXNuE",
  "key5": "2Za5J2a9GmDngEuFBRiGNBYD81TXwjNQsjtDqQcLEYecYpfYn4R4k1uZ5KzuYUHQ8f9zR2yBLPovLqAsGteGYnwd",
  "key6": "wwHkpTY8o4vQn7keCA9MrCnB2pzeSDhbRTBkPJq3iy9tZWaGVbxizomazSmVGpghPhLg4FjcpttqZeeTzgtpcsb",
  "key7": "5obwVaH7NNwPHw8dKqMnKwVarwuPFcayTj88mbMK6mepvD6syHSg7gWninjfjEMJVLSwyVHiUqszW5875BiX6UmG",
  "key8": "2p9w9ozBjLc8ouyJUX9c6x2vKbUqea8F9yXMDr7bmXYxrs5t71EBaW3YSiT6fF22AcXHk3sZjAdPanc81spmBn8P",
  "key9": "5Pro8jBMPBQxgoY5SGYt7X7nciQZoEpbXZn6Wvhb43TkMbnCQ4EbLJy5ckCjhhEE4ZYEA6zV9pHwAS9AF9p5c3yP",
  "key10": "dpKXRij6AzDAMeY82shzYMgWx13oGvp2bwyypVoBcfPRdWBTKTDU8iqcAEunzonPsgjkafMDhMpaxRF73NGSZ4i",
  "key11": "49wf2rHBCDYmyU1PRaKEXp1x4mcBcV4JABYMGwvga15eKB8Fg2ysKHBjqTZszvLsqcpDkEX4YuFF3HsFc5YjLGQ5",
  "key12": "2gi5wxx6HqMiK9B2odSsAxBpBGAw8cPAeMAuS8G21xYND8VkzCofRzp4BDTG42GGHEih2pFKRE3RNTmNzLERtNBN",
  "key13": "wGHEBGi1CKthtwhaF249na8JHxd3XCP2SU4j1YawWmRmA5cY7ss8J84wirrvXwkoybNJSPowmrtxBmEDAy7wyXV",
  "key14": "5QpaVtGSqe4CZLuxSdX5dFD93HjhgNqccbyE3dGqyCGpVrBNUPAfZwyJZD8yCMCHXdo5enxrKQ4phbt2bDY49ciU",
  "key15": "3DfxCfxXCsXtkBtGi6XqPu2csPUT56qvtAcT2X3veWDYRunxzoWZZG8nhY7XEFcktTeprpxuLXDznf4odx1DkBoL",
  "key16": "3CRLXzpbgrsi54QGgC9m67qES1TVMdEa3KF6DW9YPBzBChzQGxUoSHwBoLVFjYHjtkLB5pqMbKMFe9QykEPJP3Sj",
  "key17": "3494NkPRTmETjbsJVJqJujzd7ADFw7PkK725xbwXr5GhHhrNHGD72Y7sP9tXg84udWNAJX8KiGhxwgnzrJf7KSKC",
  "key18": "3dozTnAp5M8HKQCzagKMXmCnVYteGnVGzUTvYZir2YtpDyfJUKGtXGXtRQonHWvMT4HM8mHzDCM3jJx8BBGisjtx",
  "key19": "374yaW3zN4vDQF85FAdHsk6BuA8uau2Ts7bidG9J9xaUx7dcf4oeCdQwHmCCDvEDirPbbBGRLy336pS16zLTzaBA",
  "key20": "mMfeqZCExBJQioGMM8XHd98BXE8xKc1YNvcT8in3rY3iwsWAchVkPhtm1nKxDXKvrZprjQyga4PR51R7oFgM41A",
  "key21": "4V4MCVMFyj1BcXgC18EziworVjCmjEQLusbVDZCPwu3rysfRNtj8po72qw4YFygGUUhWwuhwqHSkMEXNjRShvmRF",
  "key22": "5eMnL2vezkXfFev4ivdraTV1zcyieozZ2PUpeqwMC1ULWcc6SvzhaqmDd4neDxxQKYrWzSNkXDAgUhDZCFQZWT1y",
  "key23": "4N5z97YdAKhqzChfZCvBcrC3GpyvaHioFXobgrDmarKuqd5z45KEFmsiUUNr5AskM6SLzxfLPsBtSsT4LZHaKPcb",
  "key24": "2uQ5UdjkchydJHdsC7y8YqLf6m8v9NxQqtpyEsPN5WoiE9xCeTpQzTyufvzvCcf1gda5v8mP6731hD3hM67mpL8m"
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
