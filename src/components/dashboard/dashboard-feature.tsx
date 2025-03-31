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
    "63fQicpj7FBqWPwpa9uVYBgA8ErTv6kScKBRCcAxxZDEmUshqCqnhNwDTw2m8JvzyP2G22QpoUpQqyboJTHGKmCd"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3pZ8NVeGNAPrUAWGAkTozMbKS4wRo2c8vo524t9UKGCt5b2cNvQGc8wBUaWY6e97MqRC1q4CiZF4VnYznhWZKYEL",
  "decoyKey1": "4dZJjDP32BSh1McwzLWtvE2YY4kWfJxfUBYPMbET5Yuvq85XqmFdesMNJa834UpmmobFeSb5e7BVgyPT2fUD6rXJ",
  "decoyKey2": "D1wyfzW4Yu99cCmpATHEDbwdHuTkrDzrubJXUecnWFkm7xvmr5sRKiZxv4G9H1C8RyeGYkdDF5nFTt1mEiVbfj1",
  "decoyKey3": "gNR7nGqmYQJjceWoKMi4RPNH8gguSagViLvCWxeBAq9rcmQMo5fBRXvj4QJkT7UNNJgi9JM6xWMdpZexw2sJfgk",
  "decoyKey4": "21gAPjQ69W5CeASBZVMWFg3BjrxnMvYbwbuZkFCSf2MnC7t68ttvLXETcubQgsd2s3vhmYPbZQRqzYVprZCDU9cE",
  "decoyKey5": "5deiaakSMddkQacpX52uiSByCBy6qTvs2fiaRXiA673qW57TTgrvJuxdVq7KfPoyZRzfNyzj92Hicg4E55sUK9pd",
  "decoyKey6": "2PiTwqUxRGTdPkduqjXDrYgXtVL8UHqu88Pdwz2Cja8TfbT2L9LKRc2x5TYy6qHKr38AT3k7xCBwGugUtGmnEAZ2",
  "decoyKey7": "22QepSz3vqQvi853zAqjtncZRQKJGCycafaUYhWADQ4tmGY2MnyciejteFwYTXB9xViWhR2ZpZpN8Eajvd73hTEM",
  "decoyKey8": "3K1Eui7A7TFg8423br3HfGovxPzu5ohKAV4QB7yUxiVVrwcZvjDc4G4oe7DVjwzccNeBM7ntnCX18WPVdT1guZid",
  "decoyKey9": "5b88E58XtWuXnEnFbRHFmFLuyYWN9qEJdLKdwN14x7S1XyMDfDUWAKyTVVpGJF5r3bijs8YBV7GfK8uEcQ3pQoYd",
  "decoyKey10": "3T7gH8EhuEFiUaoWtmkEsirDw3YqZVRU9CwAXnuLECSavncPrJiXGwKD2eBteXTSVve1BR5tTSAAx2xr1j7CKWNE",
  "decoyKey11": "hci47hKu5VB4swE9SH66DXPvUW9MdiZ3Z3Kmt9Zn1xzPVFUDktmHmELeiuh1fvg7KxcxH4omJPyuZwAMGnV42Wt",
  "decoyKey12": "2qRFG3meYFEsiZ4hQkWf4ijzeTHXqHnk1egx6KVTd9r3e4LzXEJfn7EzgvLKw6JXPaCYXExKRvN3Do7KPbPQEYtg",
  "decoyKey13": "4autKrFmJgGCU9LVyoqgmwW9CQPLPAAADx43L3aAMJKWcnQPsYCrZNd7pyB8F2XxPmXGMxKseyUjddL9pbS86ecV",
  "decoyKey14": "3o1n1J5RBXWbgnedESUs9BAGxja7gpXrcp2QNdxhxgTnEeHupUoc1v3iuafTrykwQomLTapbmDZXrUyuLAB8TLy1",
  "decoyKey15": "4VCtcbgqFAmjk3Hf5Ryi6535mEAQsdJ2bPXH935chQwGp2W7YVtoXuZxW6649r3RPX4vbPeY7rtJNtM1V6muHDGu",
  "decoyKey16": "2rXMjYDL9j5NBLeSYMnGhS9JHt2HJZAuaHtsNHH32NFiAWPTogYaebNzyS6g2zHvmwcGLYcV86pj1egUba7hPhLT",
  "decoyKey17": "r6Y6wkAuqkN9mWQWfAmhbBdnJeX9tmndJfya5vcUGQpnTvN2ppiMzuohzartSU7AfMSMhmBXdatEYbfsXdDKqxX",
  "decoyKey18": "3fqPMZt4jG8AZXWGcBFKh2QYw4EmUYysCrLTForiNcGfJVHcQxmvnQYg78aBrZfKnLhYdUCYZMWdd3KJoXFXqLC4",
  "decoyKey19": "4rcDbD9okwj4JGPHBYhdkJbVh4mphc9nNc3hCR3UjrZ7mX7BNEYcsnkRFYGvGojsS6g3a9xCMHa1LWwh6qddaqYZ",
  "decoyKey20": "22MjjpUCLDiJ4hiLyUhPgwy4TBXLXkDNwmzzNbLYdnEdGtqBC1cVMifip9JkKJVdqJp5tX8PveQooHSKXjebiui4",
  "decoyKey21": "5TSSHBU1L7EDExYok1mPpSy1MXtK4pJNaB8ZFpksk9ndFo1h4qJgCWt8hb5WcY7gFUUKhtAhTExrwj6UWFzVK5SQ",
  "decoyKey22": "2MvGb8LAFVnQMK3U5tF2zLdhLGJBxFWWWUTU1KQ42NVso6Kfrm4vd92ucySwxL7em8aZpB5zJ2LNexe2u4m8XqJz",
  "decoyKey23": "4PGwyAFbgkyJuLmScWjQif7MeQbBLXNmr8h1R4Co2YxPbqc9cZDp9kGX5GWG4XpVNAfJTKfVJLT796Tj7DYYAjTG",
  "decoyKey24": "4RvXZuJ9WLANvzVJLZKs1oERkxnjhx1rsmqQ6AaidN3JhhxpLLggm2rxi8JFj7PdfgsDG1w9LPjUnFCGDaCfHjeP",
  "decoyKey25": "2iieVhCB9iGCtniuT6otmr8KhGTXwnQNRVNi9nz4snKs9Mk2qDUkn24gr264j2gcYQzzoVYKXqUYkKeGGcmsiZpy",
  "decoyKey26": "4a2kvYvGPBbgujbPpyc5TJjPxbfagdzD48UCRUZ4nrHH9xJNVrzYKMYBCbBeVr4PEQ2SB3nTEQDWA5UEP4gcKYte",
  "decoyKey27": "LC6uDyNgrnsEmQbxArLbXEvN8gbK2q4fzsiP7j6EPzzrK9mqCjDk4z2L4iMiSZZeCaKyW6Mq9BWP5cKDwRKdSVj",
  "decoyKey28": "5SnNmZR895ofsQ5Nd2BRzSHoXXBHheBKyzxQZzVD4yQfDoQhi9a5f5JxCV72mYaetsxKF1hHMf89gPpgN7j1rz6E",
  "decoyKey29": "2mMiFbLqiyfXwHL9YEnwed2DL3arHDu21yFQpbgx5vSVbGeR8fyWSNDyhCdfT7rE4Da129gouQ7AU6rHMwBH2Z2F",
  "decoyKey30": "v8WeYA8ZF1uwDcUCQvkaGamuQMAW9X6GVbEUUrYFcEiVvFPua6wjTpfVYvVovQ7oaRVFBnmZ7KU7UhsZqYagHss"
};
// DECOY_KEYS_END
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