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
    "3fozcCWtEWBDLEaEaySMCkkCdd77F8y7X9jqKcuZfyDxGxL5T6bvSQ9vaGzKsyQAjmK7q8H4F8Rx7Fg9GcguFphz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21FQm4qBxdk2Bp2WwvKAySFBgTqSLUXaE27CwVj7haFzns25TGtZy5eNZBnQv4M8SEvLEX1yxyxnKHymgLJij6EK",
  "key1": "2spmv1azHn8W8qYd65yzXHY8RBHMxYe1Kus9dNtsBsD8YLXHqWKRZ7k1W4SRL6r6wH4J4deXQzFCvnTy4A2JaHAg",
  "key2": "2PPpyL8omJv7nZE5Vr6R69kAeWHLffGKXgVmYmR18TRE9nmKdkFgFX79ofsM5ptH92KV1toBYKHcfVRvWNmNqwhQ",
  "key3": "2GgjjCEB5QscMkLWD84qwPcfqmSSrtYbyZ9SZtgAkV6cGHxngttJ6988dDcNgg9ZXNVv1cQiuB6bSCCa7u1Ugx29",
  "key4": "2VvmND7Lyvmro7dLhndMwmqs872xNpcPxrgvJPGuDgiPP4D94XXM1mztP97VtZRNrQ1cfP6u95qZ2a2YVtxbxPqB",
  "key5": "3RvLeQ2Phv2Ys1kyC5FJ9r5ebfg3LK4ZHUofAx2L4YNHzr8qmJDoneReMEmQgWvVJpPf5JxdCQs2dksLdCrqhGM5",
  "key6": "3carnNqS1JyfAwTZmLBAZVdJ6xsYEZtBkrtCNXXXG1kxLV2pyUzC3mGeWnBZREfbfJtUteSHU62mQST8bkkYKV5k",
  "key7": "5s98ubSokCiptL2j77DvSm11utBycHh1N47SkrfLYk7N8L9L1yPLgLGHoFqetiyYnZ4XNhvcwfeKDb7h8x6b31Td",
  "key8": "3buUXD7HwKe9edivuT7cKvFbZCd99baUWQAgBmJ8ga7c9JzdLjaQDgGzbMPfDTCNneyqLY1aWUX6CBjdgRpbBLBf",
  "key9": "3nMwTB9QensboHAiqLDjqtgXj3zuAwZcPHFY2SLNxhraC6c1W4FY6ZAxw1SGH4LqQMhBgDB7LAcxzno6NHoH8GAf",
  "key10": "5a7x3yVDajhJ1c3zV7vSFrPomLTF1Tyeh3cSR4zB1EhpxbQRCX59FYHmwAyWugAoAZSJs7xNSB3BZNooAKw1vMsq",
  "key11": "V3hfyCch9w3RcTWJEkySStj1cVXGDMbMGNsKWMyhyDsNptkfgQoKUVp9PHZTckDCWAoXz3jhyA3V6siXyQTG2gX",
  "key12": "5M6UVkoZpK1U4X8vHtA1JREevWSKewv4xwhfLdfRt5GSqcE121ZR4mPkeX33oWNdreEghGkXXfUWFx73m8JWDmea",
  "key13": "49HUkVw5QvCBPqBZNMCheSe6VPRknFLeLog5BH8HgzWbqEoZBgrpaTjVTW1nq9utfgH4tF1U9uo9VzS4nhUnFSzd",
  "key14": "48ck3pdzUdsndRPCFC2PkWbwh9bXhi8bn1DJPn5M4KYiX6Tvc7RcEGwaNd83uNzGWyPZ8N6QZLzf2CgVZM5J4e6i",
  "key15": "5E1MT3ww1jNz86aX6aTkEwehow6GDFQUGQXkem6knftXSfeZmB2BZdYQQP85LgbNejvKmq4EZSHRxAnpbuYQtjez",
  "key16": "2Pfit5qkYrqUaQM4kkSC5wFzWpzZYtt4tLivjyJKz19Ha4C2y64TRjfB5UrZMDE9TGCisW3je7DzV7maX1X311mX",
  "key17": "5o6jFdkCdzsAgRXGChQBZMxNiLquKwg8V9oMmd962NvQrTWjVsnfhXuMLHwsc3HPsB6r5D9jsafChfcmv1ane1w8",
  "key18": "25XgZL92XTs5rbwnRZBaEojgxZAj4FpkBQh8ffXqXC9Qh9AKjUVWiTW6sct1Br48Xy2nrq68UW6Xw8UmNihbJWx1",
  "key19": "53HoyxsW8dQ1jMir2cehe7Gt8NJdnTyeC8GX3fWFVLMxNX6Vt1ZXWRVQDk78yAu6gXM1FvkekoKWQ6BpxCXbA17U",
  "key20": "2ofjDeVuVm3s4nqiRFacDGEvgntEQYifeV1zenAdwzWqacVT2v4A6VCKm18pzZKLiTn3m3HGbd2Qcbn4VNp6TeXt",
  "key21": "3uWttZkm8oTtkxk1sPEG15eDtRkBpFFPeiyttWQ2HCJpy63XPQ9bM4Bp3WBqAsyeid9HhJGjZ34aRSbk4ehWwF1h",
  "key22": "7ouqwuescMHcUvDFNJuKaSHCd5yLDFbyRtwr3cS1DcwRcSM5RYpPAvDmcmpqAXNcr52ZzEtcZJ6RM3Ea6yFvs4D",
  "key23": "M2Cy2NRRTyQiX2n7BYtpkrzw9TjJm7fNoufr8jEoWLX84ukHqPRquQA2PZTEww1WiGimUiwWceJg93V2EfmQBPQ",
  "key24": "537gLgW2chKgnorGiPmbf44vnGpjhhb93QcVv6vGo6dm3nBcHhjTEtgAowEu8MotE6JBE3DkPXiHhryff31md7Eb",
  "key25": "3r4wwRh8xNcreyyd8bbBytfeUSiv6ifkYsEuDLsybGN41bD8EDdHaRPyQxdohvSQo3qapH6xW8PgJpgm1tTJovNy",
  "key26": "k3FtzPbLwUFt8xtwMDmQesJ4oH4kUqE11oamQB24DtAAV7hsveYMyLVc6P5dXUiWrJFN75VMcGfkgCDkytMGeAj",
  "key27": "2M3Z4J1f5yL7CHXT6sv9FXnoCWUy4jcLM7CXBK2ZskhUuRyzQUpx2ByD1nDNgnGGLacYUrEbS7tByQZbFp1MpyNr",
  "key28": "21Bg9MBaDnS7GxJ324cbewAtTjeGfJnd33sM1MbSmhCzbL3AkykLyDw39r2Ptaom4Z4VF7WmgDLWDqg8jKecVmo4",
  "key29": "3NCE7jYTeQJUmiMfz14DVCYJg4Le8Z3B4XrAjVfCfqSmNvVBDXm9BBUjzKNaufnTBK3izYDXs9n94g4CorhdGwHg"
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
