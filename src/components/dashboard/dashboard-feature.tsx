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
    "5gBupY4zbUjbr14A21xqusEP5hDUT2uUmFRTJaYfGdzx1EyzF9iDDdZ7ncEuQc3LxTFhonBGzA1Sry4v8rnTcUzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "464hwkFC9YoT8n1WGPwyH7Ph6bpiH4QhRYAKtTN9RAd3Varup3SncZB3JpPR7QjNTtphfziFEGbDdxG1dbzhUKMS",
  "key1": "4SeJuv8X9hqipoj2jq3RVNL7NjwznBhgt6ebizE6wtezVVmS5YX8Tx8F6rcAJknbZ8L4DuUhSDyGrejNaxRc3ZWT",
  "key2": "jZDaYhx5t4EwDNNUTuUgninghRfAq4EEhiPDRuCp5co6PgvBEemiATRShTX46sHiniVhDyEBBA5MDdvgeJ5fdBX",
  "key3": "3bb9RredaU7Nvf2J1tS2VBCD77YLRoEPPrpF3sdwXYG11wcazt6kPTeuY2mGMeMe8uvKQd5HEiEbHSexsaXFR9nD",
  "key4": "354m8pE8iiN8qU5hucwxL91HdV3XwgzwHxigvpcA5VkrRun72Kp6Zz2hGNaS9ezqyFoyKznBpjfDKBKvX7YN5iNy",
  "key5": "4YuzFBbfwu95uaAEy69iAXKQzVBDubt24RGhHTJsnQwkwsTYfkyMUPJUxZxjF9d9vKYv7hGgHuSEkMDua7ZAFi1q",
  "key6": "4RmvB5zsgfa8cjJofzzEpS9w6gpfWzskGarWz5gsqRcVnqmxzaEwx6qBWCpaXtRqXBbRks5VDR8kBpdXNc8vnNQW",
  "key7": "2mnJfdHsFJTGt3N35CpiSa9qRSFxtPDkCmzeCEMub1dnemFYFJ6YnQ4pUKT98JVjjP4ZTS9mE3fTu9F8AzEZUZPw",
  "key8": "ayVoQH7hmsctW6ZZ3jE4LPJPNqVmWnDeCtkFEQZU6DSHydyh6ZDSMmDZwv4nP6zNNMxsyE9EQ8s8wP3gBumRZg5",
  "key9": "4chQTQ8LNFXpyCEeqbXmtVusrBFMaDUT5waFjRaTMb2nLaqTxxrM6ZTX4Kucr2m6UkQiCj5jZTjUHyxcU41N26nh",
  "key10": "3GzcMmjGAyVgqUGL4q6VUJshnQzW3tz7dfYHKqdWe1gaR96xXq3x8V2gFH81HGAyfYdn6RUSzaq2KBkY3FCLGifT",
  "key11": "4RB32GVVp1fwc5AiTgvHVseSrZks8oCNhtzAPPaFbJt19TKZCkrkQA3shj7tsxyQSM5Uo35yPSxU7wAnCmc7MAMe",
  "key12": "4QpykQSQYTadbEZaf9CRLbHEadZhxKcB4pa28AEvwFLt7S9xT6soWa16Y3Vda21BZdcUYLnBt3MvmMQWdLULkeD2",
  "key13": "2ychbMX8VShSDs96HjKLURWfQ4LDJvkRentTrJCq1Zg3drDVKDNezSYr7q8fUyN38xX9wX38Sdz8ELXuurXDCuMx",
  "key14": "2X3md5voheGKoGhsAQjzTmmEFzJbbjqc9s6Ysj3pZZeSsgQ4wSmQPxViCUraweJ2DUqsD4XssvrYDVMRrXF5wggd",
  "key15": "3NXigzyAEg3ap1ddAYveFYEu5EUbrtoE4S964Jkbqf1oVzeuiNz82BKtP621JD8jBHPJkn92fnmNCrRsVPaMyRLG",
  "key16": "2xidPU1Poc6ZSr1ahnRusMvr4gqcBvgccz7Cs2bAe2by37Jurt5Ft5knGZHHVH846RAe9CYn3Cuw8yPbD6x2F4PM",
  "key17": "5y41NYs923NPx6fAEEaY2d4Jb8CfSpVEnhCXTNZD9kxxz9Y4PxWtbFhuQbQivwTdUXe2b37Br6Mvh9CaMiptFmRw",
  "key18": "5xyKreSgp2wAPBaGSHAeGDkAV13jViTHg9zNQaW17ASujQxMy7KUADA4onGMqdKVPCX7tcagubp5W3HYLE3yafeC",
  "key19": "39hAA8TfkHSHmUqRMMR1BNAr6BhQtRTEXXQx7oRxJg8AjZ8iFvCRcfYcqsC7LYHsLfL4UrhmS3Lv8BXBz2T8pXQF",
  "key20": "5gGdBSYfN5CdJbB6m3arPoKDFh1WHaY3RPSAU4Z2sDwS9suSor42BAXm1eMD8AZVaDneBA1MH9QgKwvr56zU1FTj",
  "key21": "2pRdpqXkjc5c37Jtb7YefZqVbAEwJLTgk11RWf85kqX7g8areMs1K8Tb9H6Rc4hnicXfhLwnDvJELpGWwJmDodG3",
  "key22": "F8M5A7Ag69uciBVqaZon3fRrPo6pFWTN5t8f6cK4tqzrcweZbEfBkhMRTnUZKAu5CCyEBS6UoWP4cV8rZ8tLcms",
  "key23": "5WgxQRVALMnZb86PPwVPurAHQ5KxjiFwGvunXaMTrGQexFbAJjtVr73TwztHtRJfCkrSTeytTRBi6aLpVpqBvzK",
  "key24": "AD36dPnwkH24jLprQPehdtQzzJP4FKeqyuAbLJRUDUPhnKGCZcXQvtD3BK9U11E82Ty9z2CSYzzQwt4uucY9SR9",
  "key25": "3DwTs2PSzdk8Keijv4yddjMwmgGKNvLxSEdwgW57wCzG31dSRo65VEYoESqcPM4wQB4hWMoGPRtvQ7CdVo43kFkT",
  "key26": "3HYkdN9kMuABT5mJsSLM5wbShjRcuS6iXo1xe6HrJxpFdLbnsMx95kUz9wz4iKMQ6nqAPqGYQvCpALArxTpkYu9w",
  "key27": "4CRnRce85gWnppv7LCiMSV1HTtz7s8VykF3Pp4GLQGSNBLsUnALQAk7VCCfKqAupXErfgdXTbESUxYX54ioQSHzu",
  "key28": "3Xw2rsTLfvJBa45s2MwsmEiGU497q7FsGdeGf1eMcmQUr7o381d77z63N3TpbPYDgwQB4wQuiDbGgqyq4icwAFw1",
  "key29": "5ecNazuACTCTuioMwY8VBWPsDcJGsQG3x9DiMxVhUTpxmhirAn41RpUqdP9H1vWk7ZKSBMSKVzkzZgf9ACReobmK"
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
