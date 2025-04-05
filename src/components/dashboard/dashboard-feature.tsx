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
    "52zALV5vSuyB5PJa4y2xFSXFH7oF757sychfFbdTtGPJJiaiZUNTCenQcjE1SQKgLxfZYmC7abw1w2UM6bnzAkzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MM7dM7RJYxuer8DXzEmjjCsN2qqrd4ET8yz8rnNaktqKCyaMumRJDC8fULX43T4qxJY8aHWKyWNEQqXNfHZW4gm",
  "key1": "28hLg5EAgZNR2vThEnrjh5iv2DPWM3vy6HCXvrEEJXUyE7uMiAkqQ1vEo4J63hHBPoMK9ty6xnBi7AudmEjmFH81",
  "key2": "5TTWa2eDvqCFokeJA8WajHq1G9JZPJCuGNs78Jhr6UqATQ6z7a1Mah8ZAy9X5uzxXwEToDfq8uLLqDpz97PBTPVo",
  "key3": "5MLgtqhdmMfCS8hLZ88SnF9TWcMKUB8qnF3jSD2MLQrQJip3MrKPKSEijQxw6hCKGUxDQQWckJ1AJhqQLvJ7eGBb",
  "key4": "Ywxv8KfRZGnVRCKLVjezWXhnaDYQunNgM2rmBDkdktDmFddEffroDQxEn7P2Ka3J9Np64WU7AE8nTu9WM9eiQwc",
  "key5": "5H6mZT3WCnFb8vZuuTXYUKpCvT3NLmDWMF9F7XrNbk9DVWDTvHGB73TABRAT4HeP1mS6yAboQGWkDKvTdBKZXPfz",
  "key6": "2FUga824Cj3CoCNo21Jo2mG5JeUytnksjXHWMHdqY6fpU84FY6STEQMMXiMmmf1pwgvHJGxZJVKeVSqtrmCxgwJH",
  "key7": "4b4UeqdKhQx2D7yomcVUh1SD1jdwiRoPkkjUDRB7nZuYGbCRrLf7VAzTaEsHbfgejZPmyg6WWb81oc71ZeTmNnTS",
  "key8": "588icW5fmENTRkoAvCNNtgbjbm3RR3zn9dnVeHmGiJRB2tbAXTcXetA3L2XoAth7DnLtgzu5pps7MeTELAW6nQYX",
  "key9": "48emknoqNAF5owgxFkPkefpUnFdEFJ6QaaEPbX1AvvqvYpmB9NUYK93T6u1KFRGdG251g7yirUHUHXfsYPEt5WoM",
  "key10": "3DWmyCHhFeQkpSNC9XRbJLYCZa1VVb2r6zxx9UtPHh3RLHTskVDQ6p4FSP3pmk4P6g7kH3a4dhY4hUGjDjyrPhTp",
  "key11": "2p8H891tyz9CHRyLPX3bGfe3hfFNmfiFMnEbf5CSZUySXZHVwf5Dg5TRJNCzQdXPTMrtUTnqpViQSHR66bBjfbVj",
  "key12": "d8cS2zX8Vqf1SNnH3Hfp7uSNqt2MUbFZ8YR8i5y8Rye9mrt9jAEdZqG6FejaRF8FDmWEQAG187tmmvJaZf3oUbq",
  "key13": "4DvomCPEAXmoRvAxMM811vBJ8dubAy9sJ2eA6WBiZw7YaRC7aNi6ZmAeuNYHPWpejVMUxhR881eorNtMujpdJQnW",
  "key14": "mvSbufA6GGwy76EtSQ8T1yvxhomc594yGddCbQGwETz6SN4yZQqJak7wJASVcCqbTgmCQtJHb4iybcwN4fE9P7o",
  "key15": "3gvmFwnaFRRnaG5ShNkDWE5cx5GPLQfYScSoVCfeB4rR6WCEs5SRAj8R1HRQQJNQ3XppnbSMDAybKGhnEdyxinpo",
  "key16": "2qoPxL8rDeqekkQagcnejNWHhzHUQpW22MvxUQBEeG7PobZApRNgKJjuxpboUKw7Sofv4Co9oPhYXKX6xWS8hNdo",
  "key17": "5zKiNbEPHkBHBqUTWm8rQJ95GznPCGJtGcTL4PtoNpMbYCUsqUM4QwCHVuetANRa2d34yU9yPozDJGmdy1NeLGX2",
  "key18": "5SA5e7P3KmivUQqvvZMuGLL5vBeMD31QijnV3ZXfb3WhdcKhGpy2twWgAJuAjWGGh6vYWcG2xZn4QSzLLy48tmzD",
  "key19": "4cRheedHswAzVC3maDJErL3DC7xkTJMFXSQ5DXaPQLUQxtBzemgX4Z5SbYjM4NqRW5k1pvGxJW2PDToyEdJkvFop",
  "key20": "435jqM2MXfiF36ZWPhPZTq2V3Z7EwKGFLJubA4EDZ26h6H8Aa6tox3G16XJhi4Rqb8hRuLqidMZGg55ugA3qQ2Wf",
  "key21": "611SCqog8mDDqTQQR8kDaog6gEJ4Ubzu3CrwwjUbdvxrg3KNhKL86Bh7q454wJ5JTTBNjpvtp2WJYfptCQfYq5bx",
  "key22": "3b6De9bjSYnc4XtiUHy61rfr2YCz9SQ9yJBL5U8r3vEs7RdKGpUP36qP2R1gXQFFNXQ56yTcZWfpdNPMD3BeE71i",
  "key23": "4LNb7pBM2M4xaYmL2d79bdpBiigrXB47myG7MNzZopJCaTU14WXL8Y32WxUtCc3hF4Sjy8FiNnLATgNiMqji2efp",
  "key24": "4ivhVC9Y7JvK4PxNVQRcmjW7tzo1WaYnSiLWSU6s6weH5KvBntdVJTNhdvzTM19fGS3SfTpxudrrKpZcS6W3JbRn",
  "key25": "2jHMfpLASfeHsrixf59Nbd88VkUVSrsFtKcSJuTfNdKLqTWhKF9xFQaeUnmYfkHSpxiStiLh2xrFfxEHCZqEMxa4",
  "key26": "3dhqp9QN4J4YgBHrw7SKosBs6AGH891h3bePs5zrkBcwdpuKr2DiVC1RN3PDrnkZxZxGLcaRpUgZkngReERdbYKR",
  "key27": "hxYnnEFCRTgZcZKQoqSMpntAT5ZcVvKg5EfJbWC2X5iN5GSfUkxbCsieseSabBU8X8T6Fw2iJ7VbNzcFz3aDzp3"
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
