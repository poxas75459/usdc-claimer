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
    "gCPPS2s9u17AaYPoC7Sz89c1FpbStjSSdhStsQasuQivni5bwXTALYUpc2dHcDburqJVVqujYzmFpX4rFyR9GXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdMETvZrFFxgrXn9F7uw7AgYj6zeJG2UcaJgwmvPhgKKVzeo33sx638vumxuCATi47w2CpZFtwiCcGdmhjmphAD",
  "key1": "29Fnfsu6NegFXBNYpWsPrbEuGpsjfTB9PoHcKN3DEEboaAWVfKdHRmndAMXiEpuBVZuz2b1eyDdQJprzfGG74Mky",
  "key2": "25FAgXNx2pWCaBZdARTBZqTFQUUfxVh3h4VeTLBUNWTNEYYQyHdrpbTNZmeveFSybN6FLLEzMqb6AHkzGSH51aAm",
  "key3": "5zC95JVe9jXTbQBKMZCR9ZUyWSWyzzKouFF2vHaVdwpSTuupKX1U9kQ7L7anXgRyyC5mhaisEVBXB3J8h1bZA5aJ",
  "key4": "4UKiBwSBXnYWQDyHx8Ja5NztRQ3jgMUo5fr4u8sSrFW35mQ41J8BG1H5m5hTSmWcTBfPnh5FUyKZUJME86mxG7se",
  "key5": "txyaqQ1bk2qg1KQJzXm8hTaqpurwpRip8fypYQ36FFZY3oanRQQHoNYQcfjxZ5da8U9Bag2XvBC51rCt1RVtD3v",
  "key6": "8WektzuyWdp6szFiHG6YusGyoWhpirMzGwaPMvWPGeUPaGKtcikL75QZcFUMj4hne6wAqRd3ZiasTNw8ta99V8C",
  "key7": "3jbGwYZaUjGeHTEGEGNt3DTRYALox4Jj7jmFEYLuojU1qXEUpaYFM1c1qTTdbPo6ht9RRR4AWxJrX2WeGAmFAPgB",
  "key8": "rRK57TVpdUwdQsZPdroqRbvVy2giZQciDtWPYShY6JrkN4USF2LFq7e3czbcnhzve2y7WJ1Goy6mwiUzSi8jEpq",
  "key9": "35wqsurUPTtvebu2Yvz5EnyPL3WcCWtzy8fALAvZHv5hDdQD6hMSTZ574QFPjA2zFsYSS3MSU2PnR11ZzzEyPgWo",
  "key10": "4CQfi5r4SP4ZJjtWxvAoAQgBHLimnKRH1w19cwfG3FPEoRbx6K58bkwwoZgwm8rqaHwNhfAyEXpwLDqKhVpTTe3K",
  "key11": "2gmJ6uFjCEdUU26csEvcqr1SjXzRZGmMpjzjhnBBhMtphFRUVomt7vpMW8N5nByUoMidAxqxiTRdz2z8exaSQemD",
  "key12": "3Lwq74ZwqrpXR1YxYQL4UGrpExTNUeU3hpL4foCXxVjGF8LQW2oHPtvtWWvEzMLpTGzH8gSCzj3BYWJHWkBi34on",
  "key13": "3sHT7HTa79mrLRnTp9AeNVxLdg3GViRAscboJAmamVkpWrzbqhyzvzVvUXT2ym2fosTsTGbQhxFZuiJ5vKhfoSXR",
  "key14": "3ggBmxR7dviK4QZ6wbPRWt4LFugey2vhzRGCdYNVQhaxoBpzc7RmfL3r9LceunEgBcDnyjUtz4avSWxs57oB4B1g",
  "key15": "vkpQhkNSwU2AUEfqyRh5hmBSnU1hk14M9udRxrMYF6a89etHEoB9MAYSUV38rnFcdynP3eRGKn1QDom9wtufL7J",
  "key16": "U5ptmNRxw4USBmuzSYroky85B1H19Y6FYT5xXE4whaap64mthpvtqK3NMSjKYgE4dZieX6bsn1zNhrh27yLnAW7",
  "key17": "ZNtw5qaVBtMAuVLBvbgaJTeCT1AJT1i23mx6XZtpn1PuySf9q8n9x4JG7eydeoZBixqKTjvS5DRW1XjqnA2PBcu",
  "key18": "44td7ZTKbRXhAH8jygS9rGf8yLcJFAdHZWuFP4aXR9owdoPWs5kGQErY1Hc1xzpLtegxLgyAckKgov6PduHmp7hC",
  "key19": "25AqmcnRiejS3Gj4yB3YmqVVSJ2EGu9iiZZgZR5wDZ4kmePUvigyNeXhGu7T6U2zzCrTRTGW1UEAHyzfF1eQ5HmM",
  "key20": "2ZGvY5Rja6f2r1La7gEtHscV83FU8n8q3X6joqsxcnVe4UPhpgz6n2idYEzYKug8dChU2NCJAnmFocREss4YbaFU",
  "key21": "EgYWqesJPPM7EzS3oqU4yS24GK5TrtbD2YwfP21mgXAgeL9EhXg2NqHG9kWgi1cxLJLQMve1bJaH1N8TU61iYgH",
  "key22": "5eL6BzPfpTdAZVBPmmRRdDMDnY7Btxn6k52kzVh1icQ9rgHSU8QxNmisJmNusgFY6RZ9hBJk45sbNPn5eH5doiCW",
  "key23": "28kRMgAGWEPbRUo8yhXWcatBTqnF7CT4e1fWR6RU2cwrrm3TpjHTk6NXbJTLzSKTVFPTKkusYgRDckW7zBGuf6gn",
  "key24": "5muzB8KUXitAEWsarDamCP5ouQbka6wqM5SjmsGWi7oPh1ZXUdT59AyBpizZxPWFQouHCLKqBsERmzQfZt4UkA3J",
  "key25": "LDbQCqmzgkDM9ongnH2CCK7yy4Muy4wdW8Ah7FnkVtXLrSeKAv4voMmb2ZEK9bohfhpfq2BuMbnp4uQiAfmAcQc",
  "key26": "2Xi9wvU9T5FVZNGyhiWPdbxW3KMGDvRumwBjeNksH3ZDyxZHuh4T8t8SWWhDBnAey43AVMpu1sYjKCpBtTX3X7i7",
  "key27": "x8opEabLRpPf9vEvEQ7CTa8HmRpLN3855RUYmPaEq81C3xd2TdqudEusoRz5qSsumtNPbtF3AZ1VpeYv5oTt41G"
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
