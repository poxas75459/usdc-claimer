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
    "2TCBAMctT4c9UVokyh28sNFxQG9LraFREAVf8muVCjY4ZYSSSiKh34mpXwFdgbArSTpqMv5mpCwLZa2xGj46frB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28U4fAeoR9zgRf7GWnpNSa1wziXxosihxzwV9NAmx7PAGsQbcLTeJLYQV4u53zSa8F2w43SPQ9mdNfEMjKsGeyWo",
  "key1": "5KNue4J5Fo1wUZ1AFLB9B9RkD9UDRhUu9VEyJwr2ujrDQWpXDqWbwWQ5jcCeHASLAuoE9AjLDHzEGWPSAw6nzP2X",
  "key2": "s5yp8d6WsQMxK2tjPWQdXZYnKnJdKc3JxsYnQEo9cxjw35wxiZbCznMSE9U1zwemSTiz4AXZBvuctqZUBA1baED",
  "key3": "5soJc5MJG4tqwD8MQAJ53jLhnDNDncEvmHrF4aBUf6Ry7dmaQdiz37ENSM4hG5T2bhH6zUppkSXFKHnjGNLdvYp5",
  "key4": "Y8FYD4CcMYPJTTM5tVJXwrfF9xSa8V1USzR8K5MsKCt5oAcqjDcJxaGisWbATLqESFZvoV4jYEZx3irWQuFJbVr",
  "key5": "5fwn7B79u8ZPzB1QPwx5ZKt38uf2qJn9XGXM8ejVhxbXahkQ3bYnEo9X4qWvaL3wjFWFDyBDBxkhhztLYcamASaJ",
  "key6": "5LyisrovC79pmGWFsFuSwkw7XCrm4tn2AucXZWJbNYZMNXxMRVfd3N1QtmTAn9oeiMzYCi6KPGgQFGNisT8rYH71",
  "key7": "51LUrcJDgm7tgx6Muw8FugocFVDrje98n369bdiFiR4kdq7mjqvrf8U4sHS42ractemXeyaKYjumxttbhTsL5dUS",
  "key8": "xKCdAksgq6P48nhro4khe3bH1ebNr5QxN4uN53pRBfXk2vExhXMciFYHxS1RZ4Rj3wVNTocFA5DAGUE4KQFFQgw",
  "key9": "55f8GzoNYu5YQv4RdvFJMFJ69H2veDuryYRxnMrHfsDucBsZSRk6FwDUwoJkZ5cGPYxmUC1HsPhMa3K3wGYUZsTq",
  "key10": "5SeMh66sfwCx4jp1w4Sfv2xPuVmsXRJBCGd52BF52qrXYHmnE58KS3gRH5MJs9AQrqjMW27vw2mfaCbAkuxqvgV2",
  "key11": "47DUEhNCZUrBe9UjZyyA96QwtxyVsivtymLgTV43HZ3RJpZSwCxPMYgTx42q7TUoE5rU3s2sV1jygzEtwet3K8Dk",
  "key12": "5J7pLb1qmD9oJayFRT62CnpWW4hWCvxGGUS1V5rAph3KLGkpFDKPcDrrX85Y79BPFoakQrC3phAUekzbbieF1uDG",
  "key13": "44wo2jPRCEss2kGmJrgk2DhVuEzEt8VRjKBv5upMAJDyGETyHWKSyJ6NmgVhaA1Jsk8FLbk4VfJDsx9qDK5D1YxA",
  "key14": "mj87vbcqz88BKWhB6dghwZfFcpKFuupPU1w3rL2FuHvSEBBazFF4GJPGRTuyqmzfCrGFtHQgHCStU49p12TZLKu",
  "key15": "4GUgDivdkZxmkHEB4caEDxTJ9Fed8SpzWH65ipFmKenZPq154UxWH4E2nt8nfrkg4eiLoS5Wj3qxtW6ck4prBWQj",
  "key16": "3JXH16fbaqUsAJBHfCJe4MoN4cHtik4DjgAyHP3XHrQutanD3kbjdDyRwQWcgmz5ve8eT6QMbpYrdtfRDZcTUbKc",
  "key17": "vgfrtjCKGqedShS3ZjBYxie27HheCxdbAE7FyUFBMpHcHjoCTbi2AGr1Adau4APoeHXKTNzM7b8Zib442FTPdFu",
  "key18": "5ide82L48JK5PrPmkGqayaFMtccydiUjXmoTgeQ8jVfpyCMCszRAQ5Z6QDaVpicB8fc37pRVk8FMrZHqfF4M9bw",
  "key19": "2nVTdjUQuZJssYpGJUD3bYTrSBkQVrbwFMpX2U4TqmfjCTEcLqJtMmqqmdjG5vSfxFNXi9qzFH3RC3hDezkaR6Ry",
  "key20": "MiEdxeqM4AzoCX4xKptqhqCzJ88h6VgK6HLiErTDuLBtDovU182oQVSdHFgCa2kVXfoENoMBqBT9cjetvKXQnXi",
  "key21": "3KZfcTb9h416vDyPBuPskJK8VFToV7eZ8S9vTQpbBF1yY5FpBVznZDYZQmqsSyR8NeVa77sUBAX9KrFc4tm9vQhp",
  "key22": "2LE9AEBTb6ndMmCrsQKqNHa3yijo3JbE3KbQij6hA5H3oJP2daFWravjnBAixmXR9gcNJsAumbvimU9hS4s7mUHg",
  "key23": "4mpNv6XvvssE3Q8CqPQhwqTqjbg5jViF2CvAWVSzPpX5pKNvdBTMskHtHFou97yzf9hPGvzqqsG3NBupehpKFsSu",
  "key24": "3uusMn2HKQ1p42gCQAn9kfTZfGXAaPTbNkarfHYmUtPfUpb369pgwcp5XqBP8oEL1s42d6qqzc8V1V7PMjPbBotf",
  "key25": "32nqeEVDyw7pShgaV7G4Cxx6npnTVByNGD9cir3h5gZmBb9nsTRkQEX5V5CNm1AmyS59qMmUcK8LeJRrVpwwY6cj",
  "key26": "28kdugmmebwQq1DADN9pmrteVLGhbHFfa3oiFKnkjatFqboZ3ck6nydqmYa91cHLQMx4kAsEJogZ3RBEwnzChLgc",
  "key27": "2VtG4eLtaAAzzVMSWpqBuzvTWiL4uKBfdzZvuC3Xe2ocmdYGPJrDP6AdTJQyH4j71szieKDUJYi35mbkrpb2Jrp7",
  "key28": "3DSaBnQGSYNpTxeJiyF2W5dFr65DHGxWGVM5NnS8zT8N1QpaBwcQD8xfS1Hs9Hc8pbkRhTgdTXnQ26edDiJYSxaQ",
  "key29": "RYBKwBJtwNXGXm6GZDLvqQbuo4ez5ANVw1CFUzLXDqL2xmAuBZDbyiQXesrXw5EHsU9iFQVcrc2NXN8WRSRpBpf",
  "key30": "51NoQbwNmHieEQgdHSmX9pURRxcxKh1YD5NVa5YTaXCJ9so8cSSusHBfKr5Z2Ez5cekmwEEXkHShPt8T84Vi4oyP"
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
