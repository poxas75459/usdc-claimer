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
    "2HdacJQ9ui3Gx4p2WTjh4d2AMZe6bEH8JDKojnkL6Z3wijPN8Gm1jS4Fy6tvA8GkCZMd99NhVcRCGj9XdKrLRX8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z61jxKFw64kLgmu6eDHLk72yiDT7YhUXwKpy1Gb4Ywpr4bfxegC49uTvPDEc2iCZjeBUd1NFANpFjVnCvRtueRr",
  "key1": "129YVGmynp3gn4pgB6AFCJ815ZzXGTM367irMX7vB4hLS31u5FPSWpusv4oAt2E4pKVxH7V9nJyf5cmfqfAMfEdQ",
  "key2": "3KRZXkmk199pofCmwYD2VvbLE3vAAeUziLCmq7nR7cu44bcCLrjgMqtz8ADYPcQ689UcVp5eYXB4MUX1nozSa9P5",
  "key3": "4L4SpYzw6TRfpuHSbFtZBgLKvvHVSBztGCYQiGpBaPqKjgMe2X8wM3YmgRb29GdKMcUcbAJJszfr2NvtGNDSwBaf",
  "key4": "4gFRhA5feWDHf6jAiDyikS4MkMfAWcNWVbGEatn8cXBpvdhwmHsQsQTW17ywg8JBVc29JT8PPSa4yv3DJ9gJEofH",
  "key5": "gMjGdYhYmshpx7RkMbC3BHQbSoHd2SXcvcT3m9YoZTcJn1B41R596YBuCoUsdFFZgDjgJanD2gJTezt51XHKCB8",
  "key6": "24JknSqUDG3nVuuDmzmizFGGicuh6BZSjgYqcmwzDmu7BzpopKM1RSesuKiZP89jwLN3Qmg7jZPo3bFNVthQxBaW",
  "key7": "f3QRMofcKDHEVSPHzFhEdbADj2wCxsksnPreizujNQHMaW9YGzux4oX5NKTcqc8b3mbQy6Hqzct3mJ26vmgJ6J1",
  "key8": "4stcipNM3XpQt5TeJSW9GkehQWU8R7aTu2mM7PXsSsjVRtR7LHA5b1nTpyZVbGSdoJeqnXRDuUWWBcz4UcFxrMfm",
  "key9": "o7uqENRFjh9f6Q5J3VSpM2ABdTQ7TGMj93bLLEVeJzpkhkMUpTKm2XMtC2Y2hzPdrdtn3eeaHAZNzL1NtZ4JhGZ",
  "key10": "3LeeyS6193z5Eh5fDcxoWZMNkmftN8W3ubycqu1V25Fb2KmkFaNVyx7nXT1LH9LU6Wm9LCwXd3gAMgnWqzWAWeBH",
  "key11": "55ZLQTLdLS5DfZwYgFdADLNFcAxpeFdcPmS95fvczq3JGwKvTDTk5T9cQz6uWRMNGsstBzLvzynPi1WMxBjn5zFU",
  "key12": "3zENdri3XUc13B8JVfeJQtvE96PHGt17Y7GW6Gkhq3uJ6jpuDRAMuLaVjF6SJ1wZAWnSncTCfQs7iNm1uAxMBqdP",
  "key13": "5bj5qrqn8dFSgJXezjqDPbKVLHbHook4M864WRh3MXujLBJ9ia3H48rSFaz4ZQDVzYyVi6Ba95C92ib1SttzGcC5",
  "key14": "4SBbhVmWHkiQKPn4cdk1BGrceJLPHZJr1f7UTBCKUAH74aY5j5M4Wiz9ZYkCMED5hbDoXN2dcrUmR59SgohuSEu3",
  "key15": "SUMPbaak5Z3xkvYzeayppPsM1cWe77vn1HM9MXXj1prz1pqu4kBD43BgADVpJ1fH6uhAPfLcvBDkETiepnH3kro",
  "key16": "4KV7JEBjX2xQRtyvnnpQ1t8rzzzyngRrmbuKc2XAM5CU9KRaJdB4Dc8oHGnRGE2qnnz5YN8UttWw8732PSV8EDAB",
  "key17": "3esxX5gvcgtYQ6MkJHHarBXoqpzLH4R5rxY8LETYVVW5T9th63Pb1p7E7Gr4rTxJUo5xwBtNat5D2knU31Da4xHY",
  "key18": "4EF3MuuyrqmKTZwL3wcYP1U6xGKyGmfJh3yiFUWva6x17p7gqoGowqjXSM9kRwQDWiKqaEk11K2pG9ckPHZmdxkd",
  "key19": "2uhAiMRxbSwN4gGn3eH7y6AKSGwh5WC5h4bkTXF48iAZCkhygths9qqS81AcdFWL7Ak7apx6WHuMCnvLZhadiYcv",
  "key20": "3mxuhe7P2JgLxd9WeknxiCdWBRNAmZ9e5JPCJMXyHi4ysXdsK5NKgqVTwKHdABvaFu8Bh4N6hFPnMRa3Y1rypivD",
  "key21": "4AM4X7h6WxiUBG5bUtapLzmAVw3jpP79CRUhihozLQf96ioe7Ha16cPtM2xd2RE4k4cQbkVMpyXLvez1b328DNUJ",
  "key22": "2BYzvnocHxP8trbhzLZR6h9gyae2sw8B4RnFSaTwEDfqBqrUY5rAcjHGA1rFn7PHudfyXs4T7amUsADm4vhwVeAJ",
  "key23": "736AC3jaB2TKnTKkEQzqw8FRKTv6pkcZbsko7kQDCERnTQJBw9BdDxxaYMFcfnRBs7VBnrrj8kxoSm7LYKw7MmR",
  "key24": "M3KYYPJ4kcrJqrBfytndoiC8diaV2wgf5F8GxY9SYBBPrzBpMmzvvPyBz2PV58EqYZJSvNC5usaY2xwpbbQe7iE",
  "key25": "4EMpEyriAVG5vhXPvseZX83u8mgidyToykcLAo7Y6zZNtyxDXCmKhqGeRznRoMqrNN4DX5ppJKRxWchJ1GD8JkcR",
  "key26": "3kMJVU5JzKo8gjxRMJLA8Mxp8QzQYAnpDkPdDvBhLE1jfhpqckVwueHSwdWjjW1i29ZxX9BW9Y93ZzSYfEqtZL9a"
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
