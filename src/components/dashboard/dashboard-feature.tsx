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
    "p5zkgn8KRMwdQChoG1wf6oS5teffzY3Stvc1BFxhgK7BJutM8cYpMkFgyYGwohESF4239gVmS4BqGm5zFSRCYVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E2Fwg5V2FaGQH82WEvg7WuYRLm2bpt4n2y4zDc5EuAzytxkkkJQ4uwR7rEYgNLtpatEbVPL7fptATUCBTYid6Bh",
  "key1": "2d4KL2RaZS2MyrZkrz5wr6PGguzXTqmhYrSa2jBau5t4QBS3uNn1Uufe1fT1YZmHGQmWRtfFJ9HZ6PGdEBwBGap4",
  "key2": "3cV8DSW3NGVbtXzhKUYkMjYiuwzCaJJZ1bfBuUBNLAxjQUa9G4pTUx9jX57wFt7zoggVqwnAhRWXRqavrRov6wJX",
  "key3": "338aGJQ9dzytUZGsYncueivfgbR5MYiLByqE6x1qCGPwdRCab8FMoVscueWDaDSFE948r19iAQwWciLndiTTTZWs",
  "key4": "5WXyyUwwQgmuXstVUDUgv7UpiHy7pFiXhoHq7S291tNiZ18YRpwZ8Pw3rrVAEC5VL4idGr5G3c5QWxAm8M9JSNhM",
  "key5": "GgxsrraF2jDx6SwxN7iqKhX7Ybbwky8ggi9NcWFDT9mJbS8eHobAHu92jc5odJbjzdzSN6Sa61CB1MoRHDkM39X",
  "key6": "29T95AYmvJSJfkQJmbNcviZNTJLouYQnyRaMsnyjCmqYQEC3FUPkyxu9T8tpiYxmDQoxWdhmHnnmmGagnHk3rZ7X",
  "key7": "3Yde11gDfAd8B3sQuDLCq31mpW3EXw36AXF4QvakiZhNkXoMnWZ3hmS38WKsaYkEVkNF3qqR2m9nyrqTPohfqwmc",
  "key8": "5L2sbYFwJXXzEW5FKjWg1QfTDBRPvXyqJg1HKG2K5fT1nrrFmuE9gheAsGtgFBt59m4DppVTwBgXyzQdgfU4V379",
  "key9": "2Kzh6zzdgTaMwufL2WPrDZC3bE7v4tbazyntuxHqz962ereaKi8p8giQFoScokMLmAztM5m74xSwu5hyaHd8zha2",
  "key10": "2u6HwvpxQ8Es4zowiAAk5bF2bCT1wnybMrfC4NrMmgLJmAKUWWMZSXoFUFE52Gm3biZsHNDm3Gu8vu2tiT3i72DA",
  "key11": "4bs93UvayREDnTebDYcitPNdVSjJNgrdTdTydNP7w3X1EMq1pa4twnrxp1PNHyjYaoNoZH1a6dvdAp8k9pcwYKhp",
  "key12": "Gy6DyUh55GUerzH4P7rsbfA5QRz2VL2RBZeRfbHs9pyxmcdGKG3bFJPAda6JP3QFcGxYXxJjE56Z2KHed53W3Bq",
  "key13": "2kPji8DXupadhFYNdhSMEKbUSTrgL8sdMX52WYUYLbN7LzC5pKifDtiWSAbkNp7RCfesBk15VwBcd4QFC73aFaEb",
  "key14": "2BEqSh9GNSR9rhr7WBgy3QuZ4SPFEZvu2Qj1tvK6fjEhs8QugrgDQMzQHba1Hi7XPZnxGj3yVBMB5uNTLpa9tyLW",
  "key15": "4i3ecAcsgnX9u5xUCTJYxkm4pZSohZkqrss5grbbfevzwV75YQ5sWheS7FUiUFsGQEqoYGAWexfs3tkApzbPxmmi",
  "key16": "3sZAF2XT4X2ppZTr3VbX77HRdLy1dV1iZQidGCHZZq2qfkJYX7PsK6aFHHAfC4T7Pu6ES4AAYsnbepKYVSQL4ozL",
  "key17": "5dsdjD1K5SxEXSQKf1jf8DcJ85acBYDiWnNAzNNoA6541iAHdrTAe1GGPFh6Fd8VBiFYb7eX7a7hS4w6iRYTKpi5",
  "key18": "2wZZnT6wnJ3hfXHzsS1MrN45HAdEs9dpPCcETKprrgUEdyqSH348M424efM4CikbJSWGMKK2KCCNvwy8CexKJdk7",
  "key19": "HUg4BpP41hG6YHawjph11Jt3gHexCaxJVVE2dBcPTJ4iWrf58EkfXr4GiqFBCnMMNqnE2KnXJmhrhkxnVZtKiUD",
  "key20": "4NvNWyjBnu4M7bLcsHRBp9Ya1PeVdty1RQCf3oxsrKwiJYcKJW9twKPc8MqtgLnR5mfB3fthmgwsf57g34Exu3Pf",
  "key21": "2QFEpULrRoebwvjzuiJtnpRGLxzLF4QwDuz5WoGsBybUqHVwTMsWoVUnEo67JakJLCJEy6DJwoQiixwrLr4oCZif",
  "key22": "5vXWWb6wx6pjbKcoVLR5rnL8KpMDPtXHiavL6jBtGjEbTZNJ3kBB9QcN4nNaSU9yzLxabVHfZLo3dx9u6a23yArK",
  "key23": "5HED8fnF3arx4uJ6RJ3WP6hiFe6kBv4QQG7frwS4hAV5AYVx5iGSekkqVxtTq6arXCgifc88Q1LJQmuseLxBfFH5",
  "key24": "4DA4g58HeRsderUehdmBNid8tSahE9cbsPautbwynnXFxKU9dauzWfhTeBhnnJufpVwYtdZFHQDC3p4JkAyKcGw5",
  "key25": "3NtazZujMtmK6HVKBpQ4U4BEsJtqYM6HxEPeM39XNAYAMJNxgL21Aj5eMpiLbnWN8M6h6eDwZsd4dxAa8NCD7NaC",
  "key26": "A4bhiApKh6ryTYAorHZWuJdnu7MHcTExRymTXpBspNvciWHT3mFP83HMHMKaqXtNZeEa1t5VV7YdpkSKKVoU5Mx",
  "key27": "2ShFuUJEjiPnu3YeBRKy6CHrjnKgiBcUmwN764mSDS3j8sxQBiVfmNDoXxgLFCRvBsukq4V3yW7fesfFCTACyrmM",
  "key28": "rSrEWKfQxHDUFM9VEQXasNM2iWdvBkQ9W1dBFkUk4o95xnyU5gTKfmJ5qRgfdEv7kXWjj7SkxEbkp43v4D2sjfr",
  "key29": "28PVwxosSiSJsgAPHKsqq69BQddGBsqLzepsaGttWcMkmTtY1DNfCLx5YW5orCV3xCVGzzshsP9moJRw6RB3TMhU"
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
