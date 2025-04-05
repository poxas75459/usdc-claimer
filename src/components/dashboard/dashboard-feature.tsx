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
    "31Sqvf8XC3k2CxsnF9HkEP8LZnUbr9n2ctbkCe1unT4YCbG5XVwHd2B3YEFzUw9KuUrVzd7pDrEqeVFxGQU5pSok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EVjLkxhqCtTw7cFMwPJdh6NecCv6eLgwcdTCYijJLzrCVPNPGGQEuiFzr3HTqLPP3d5NiXujZLmAmYe748EXCJt",
  "key1": "4R9TbJ5aTqtRTQzEhcGnKg5Rx5kNbZP5QjSJ43X3Fng2M55hk7DMVFEnDdudMSnW3nk2ZNqfSExoNG7ztxcT3HkV",
  "key2": "3fZqNuk5orgcWUN2wjboe8cnB3FrkxYLyitbGSvXu11yRxgyJ32SVJjCFTeHcdF7wMnkW5yM6mVMuSEmER1BT6u8",
  "key3": "3WRY36oPt2jC5dnRYLrbSkhGEQziNDxAA6bp1oVy2umy8obiJWFKV2VdLM7VADmTdQnRnVw3qF4Nf66FVWiSdbx9",
  "key4": "3QRbRiRoNfX2iR7zHHyzowfpddwLFK3SLVAev8qHwVPTG7mjuBoNVwibSZES3fAjf82jskm3UZsWK1U5fxYsgMYF",
  "key5": "5MKfAd1E8ZnvA26mqtdC2o3zXwvaNZfMtVGRsT49CwxgjuCeFSjaQQYTtoyWFcwVDp87HFm56Lsf31jRLEVfnW9E",
  "key6": "2agr4fXaYcj4DYMn1EuWNaJAJz3n8QsUZHx3hPJMkHs1qitsef2EsHPSHrXhuXLkQsDj7cQqSvht2KhVUPhM7Qmh",
  "key7": "4dXM1bAm8wArgUiDZQQeKuA3qVBAPLE1tZnwP9D2t4XYMTJVzx5Y2pg3fZYccwf5GHdPBwmcYDdbTkhffhauB8mD",
  "key8": "cyj71QGDFy2Q8ras47PqWNDekRt5xUVr3EsMwuyDMiwB9o9tyV4v1TebmPZ6BEnYVR2umapgXAufPjUto7tq81k",
  "key9": "31EH4MiSVZLnZ4ZLnR2yAptx76QUDzzNPbS22okYcQWzsq1wzkKJcjj5zzRuvxiyeDx6rpCoEihFtcgN4TxQwSpw",
  "key10": "2k7nqPQyy2v6eBhVGq7vu5vjv9aEBa73HqXDHDSAgdwneamfRZV1YX7DJgVrR8pudybsAkeVdACLSZA5GvEQqC8Q",
  "key11": "2aMwopJqB8p1QzNECBbn4t8HFQYQ4ietraBRGpe58qF9KGNXKkDWH9bNsrH5C1tzJSgPeGpqci32N7PttDG2mueM",
  "key12": "5R4dGchpxUaHVi8mrXST5BsJSEGEf5B4TGcAvMjSUx3FKz7QfWNeKnN2hJRBxextPX7eAH44frzA3W3rcd9kQ6iR",
  "key13": "3mRbCT22iFkPmMeuHprFEZsTUutt5M3Cs5mCdjs2kgcCyBAXnMcFXePkJ6C3RHg7k9PWw2HbToFc8rcpgAHTB2s",
  "key14": "2t5QgkSFSXD4SAftk4DwFYiH6MFaCUqaU8tqF7YVsmLeEUUdvfPGNrVE2zyWtsjrk8BNRFBLnBp3qssSD2wpdF6X",
  "key15": "25PxbQhcBviL8C9L4MRArBhPCz2J7ybpaJWZFvKf2ABH8PZMA4dtEoDctAsHtVrpoQe6W5B4f4i94UzDcKEaCieh",
  "key16": "2gZLDtkSc2GYJVGVMiFoah2Z6jMiYMNyFX63BdkD1hWXGEoB6jnBdKo2RqaXrzntfx5hJ8C4Z8JGkUTuiLKcUdsT",
  "key17": "3frA2KEWoSvETromzcEFHMMTLje86SS6wWgyFCybkmf137vy6FmtukhohHnSCsunngEhLijrb3mupE3xiaZbwz4T",
  "key18": "215gixWnhpNN5Lom3kVCivPSYSEYZrUVMgnzp2YUpdioF8UPn4wXTKfmbgQ28SG5EHHSTixbaGh336we3asuisvF",
  "key19": "46Lv1mREZM3kGPLDx6r5tSxes84MuRfN4xc2WsYXqszfb4QgrwYeoELvW9UJs5p2T9Y5j2nqHVBCx2XoWrm1PuaW",
  "key20": "2EXM73gzC1mMUUbqiUVoEESh7PSmnAYr45VSRAgVEMuRbCGR3EYx2jTBb1pCirZ4gMvSzeKkCuVosPeYyWMeqfFi",
  "key21": "4UVJtDqPLTbDTpVbmPfGmYRJuePGsbW1PdkDiwtw9kCTyLcoJ3NfeB9ZB7DzrYoFCG6s3WGNQ8cffME3YZT8JfXV",
  "key22": "rpyqGYfzEyjvUf6VopnhHvHvj9WufjC12GwSFcFJk5faPEmVGRQn2LnXRWGvgnpr2mLBxCKnMCzddXUSDEc91ic",
  "key23": "21ad72prVz5Mcs5CGxAdDHtYbuqsNuVmGB8Bgd3VJKRYZyK2R9zrXZgmVoDFP9sgEsDgxorD3MdNwei2TDWQ1i9y",
  "key24": "49mrhrworb8vgSWv5HqJGB2eZerHBJJDtfPSUdvYbsJwXNTBtPYVaubtqc5eyV743i11zDjN8s6G6eiCZYkGEjaX",
  "key25": "AzEvXhD9s897fBoofs4vtWYxnBpgBMNkRLWJ4gKa7UCjH2Gv4e65Cg9bLf7oNnHMEybYXXr2pR5gv2mpMXFLCtm"
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
