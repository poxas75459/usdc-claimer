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
    "PBV24gpvipVMtf3XUrZvQCurv1MFfDq5tVQsH9emXEnWxdgeQZD7Tx7zTMgyV2j1HGb39g1BAqqz7MsLAfZJgAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64MSjW1m7yBB96AiofGbikvsYPa1LRonQ1enphp9jQacB8fAzAgd1pS1JctvuBBtFqdgN4bEFUwJVt9nSHa97THT",
  "key1": "5UKGpeBmyDAQcKXwEnJPjNvGEcwFAASNpuDSb9X8zqvoK8rxV6iUdh1hUrkSdhDQqpB9ZRLshpsRjM1XizZ7WuC6",
  "key2": "2mFfXmeYuPtRq2WwisV5wbXUDwgZfmHD5npzConz9ok4c5PHgkveMNbteywQigZv2NxGqJdT7EwcskCDc4q6v1gh",
  "key3": "2hYzgnQFwJuobMxubQncenHVv78ZbcjN4AFznWceNezVAGQjiqXDKbvxbZ3EBqbgHsvBtJaiijUKpE58HjQDLVGs",
  "key4": "znxmGEw1gsGC19dSnFzhzT548FtK5vcVpbD9SDgv83MewFRdscGAMfLhbqetykyLj6q9DeDNF1275VCTVouTn8w",
  "key5": "5Z26ri37pzC1vsfabWfdZVTPvirY1HTbrJNKBMhmnx1tBDL29Wt1Grw3ndWbD24zUjcL6GUbDJ1krsJiyoocpvtY",
  "key6": "3yApFZuTRsefg1XhsTcK2NuXoL1GQjKMsfKrmoT7mYzjKWgsGzcBHeULv1iWfNNX1Ch7Gxav5QyvttaEW1SF7mj7",
  "key7": "51tPFtfVK77V8svYhJPGkGSsBJEqE2bAEPkLtcyBve7HZPYSxRz5NETXDMXZQwRim6BEPfYtRCuQnaf9bg1YcNZ6",
  "key8": "2Y39QX5CKa47jTSZt3VLX6BAuRUYbLZ9GfQqUbKcfAHWjAbkrmrNrbccL2xaS68uFpCsoM8UcaeuD2jymGDimKsv",
  "key9": "4RMcM7ApypvAH7T2apvS3DDSGdhFkzLUJj8t6YqTxRzANWn3p4PyAoCegJEkKbFugMnr5S4BpRV8JWgsrBaixPrH",
  "key10": "1BVY6WtyAtWDmgVe9z5di8Ai9PDUkoBXR7D7UsooD8MidQ4uptAagaV4rptZmn1kZ2a3nvxq4qAzimL2sH41Ls8",
  "key11": "5XsPY9zc9KYBq9gUSav4ZizmbLDE5MS7MNQyu8WHxAGDMxcHzmpvKV468PTThckuPqLU78oCJe3WBHBKuzxvjbBf",
  "key12": "2L3rCCjMytmqYYxwePBR6jCQkG69qF7YtXeu3yAJNGKVVL9fJ1wcMLSGr2A3nyRStewfxLft7iAZXBzpGE33bMZo",
  "key13": "64oKvUxQZ8FS4zqV1yAJgfS3BXdGBdvro17M8JATEW2679mLgzFCcE5cDRoFD5erLa2JBzfS718purr9TDgfuPni",
  "key14": "48SSer7CdLoPxKrEWzpzFSuWNtjnVkoXgdmdyJFyyAt8xVroFdyQ3L65XbdQUAEJUpV76z6QnZu5LrmP3jbKiDL7",
  "key15": "4Xi3v59xeG8n6UsjzTMq9PLNeP4tJecXBVLKcM58rmjZsECfLXoM9gCrvZTfJE1saWdnnKbzPVLPtf8rdKhe3W8r",
  "key16": "2teKQwxgcqC97oDv3gKvLsyqYduTuVSdT9SBoXJdinV6pAvufNNiuiG7rC6ymtAKTv8pPX9UCMiFW1jxJgCFVRTR",
  "key17": "LSA7GrzgYHjK2AwHpeAMv2bMXGj8L1wpsttugRR2tk8wQA9JfEjPZ3zi2AjkL8qFDms3gKwVBX3yxMZiFv7Fmzk",
  "key18": "4wLafRoP7JYjNpdLEZQvqVhceVrHFfWBvppayyMSbtiUwmkanQVLTLpFvw4jDcMxaLxuKWffgWqm7QSe7B1kWrk7",
  "key19": "2sHTbWmP1hrbmQwiw1mwXKVtZd64xhps98cyZibC5bvB83QNTghxFuXrJ3dEzKYQVuw6LXwNqinAbJBvVQdnoQij",
  "key20": "kWjn3o5hZ72KkZNT1kZWodzCPnvPPuV3iLJ63DmHXfZGVyqULJbXmDhEtwzeguDjKsXznDAdkLP3c5N3ggsNHuj",
  "key21": "4ZmoYot4djiZ16BPr5KtoaKjgFwEwJE71MPUuo8B9kPKy7xj6JFFtGkokHVCrNpu35FuR2k5z7VL4CxajVEaoEBA",
  "key22": "2pfJg2K6Au291iCYzFgMQa1YTL7jvCMnM3fDmarpaX99Xm48DxcvaYxxkkk1dsDF8ftEhu6k5sY4MrxoM918yost",
  "key23": "3EJ3XcS3HAUTryoF52Afvb8ndR41RTqTjPKhV4coN12DKCYhiTM3YxMJXBDLnAvnGutbijWQBBzaLpqgTH4PW6xD",
  "key24": "2gPQUWJgRXXJSHdaywMGumCdZbiFUNnvNJiT5Kh1UG75QH9eQjK4Z2Twp3aXw4gQrjBy4go7Ge3VcG3wVmvQYCtr",
  "key25": "kRN6WHcQZ9jBxuAW5aoxTMjyPWAvaoJpy1M5xQXiZMGSKoA8Cygiiy7Sdg85NNpJEt4WS53s5ebqVjDf23ikKTD",
  "key26": "3K9u91GDHumRMVMQCeeLhcKvnWfuHXM4rngvwSoT2KPJUXpgMGe3JPyP8h45kasnDCMStnsV5FPtKaChon4veBkC",
  "key27": "63uPUeva3nUsZvzJbYP6AHAeR6J8VFcfUargpKmWH2QGCUV9cWSgLQYeQHruxZyfHiyhZh63A7bfYD3jzJv7BLrW",
  "key28": "ANiwEDAoTWaCty4bto9zFVKKPYs6NuPQRUjj56MfbvCFNcyiJqRHevZNiZtNu4Nm4PxR11W4LgFtHoB2AkvuiKH"
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
