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
    "34FtorkXheTRXNw4txUMjYffUqnboS4VACUHurrc5EFtSbmnmKwBUYFHFT6sRh7kMPgZ7gWjgxfm6ap41hDZGZp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mMYbu8ueX8yHnDpkErhe5PGp1Drfm5U79ag2W9mVJVwLnksT1kGNEUDsTbk8wThU389j7YgXb2sM5Qw9N5pQ8bc",
  "key1": "3aFdWvFd89FWzQdkTkidDY9QHJeF672PwDkGZV26Hds6MMAw1v3LrzbsuzERdUpaVRSzJFVfCrGwnmr2TEjcTDrd",
  "key2": "7PQnpNQim71kPN1T7CgQEfd8Ph39GnPzYjkqULXHTemzZT2ZkhkRqWCYpSt68mPhXAJAfZNPA8cJBJyKFqXePDZ",
  "key3": "3bDZRvA1ySe1J7jj313SYxHifDUxEkQtxLBGxmf5hz5sbApQr1hKtqDamBFwfBDBKCfntvD764iDkt59QgEQ21QS",
  "key4": "3GJyJic7M5Z5Z4oxjfSE38xiamRxdFUWgMg3MsGiWetZcdEa5NDgcM75YeNGVnmUa5b1tYFZxCPPnEtCGQHxvFzL",
  "key5": "4g5VoYY5KyeNxjcNUv51kfcwhS3CT2mUw1GexWBzS5V6RYVyGzzcK1Mpw1TGBxukUMeLxcHYVmp8koXTr2nU2nAT",
  "key6": "5BE2uNbUQxXmRbS3RsiWyB3MhUjF8edoSyhNV6sHVZ62yQHofaVjZk9HFbLm4jcRWnQJh2SHQNSMyGr5wDswRHo5",
  "key7": "3b9oYFabzfqerrzUehYR2GbkWZy4zdXDt8nbLKpLkwy7NWYWx1qG32qRYziyNWZMiGEAQmNqvSPQjHPdR3fvUTXx",
  "key8": "226UcndXWCmhXv6UpmHWFnqeMLis2PGYGrf9Ys1j2J9QGE8tYQ9WkXdHZwAfM1FGCYqmiaM24a3RCjVGduVsgiHj",
  "key9": "5jsVMB2efPDce2LcJYeoJxomzXGAGBp4qWCKbqt6tgyNf5bxMKj7D71fxsCtSuNG5awuYkpHDC9kwGhimEBE28ZB",
  "key10": "38C7Y9hsFhNFAvtiqotC6xf7yfG6BBTLMoZ47iWSMKNtQDnKBdw5MVuR2ZBZxQgJLS4NDTuRSbiNYGWmLRYzEn8g",
  "key11": "4zkevnWK2ApCvJAYhYnKsaNPu7v6h1ynip7yFKpCcT1CsSrKb7fDNT7E8caJP8S81iv9MTXXaKLD8DyNt59E4CgY",
  "key12": "2m1zJnxve1kYAwbVBkMAhq4C2uQFscFY6JSkJ3sMQuQ4QDTjQTWVM916jkc8TiwUh5rdef1WRhD9564MshFTfwN8",
  "key13": "2PDP2pjvzovUGFBgQXNFjLVrBVgFskT9Whhq5qDQgMEP9sHxFiQhJvJwp3d9DMnmpe1bt9kqQcKfcb5zT7giysyF",
  "key14": "4UAYTEohwTMMDTVKZhfdtvuxXPyonS6NAMtYq1egar14b2oEKEkB1yVXcBKtfzk6idrx3ZTAbZmUWwVPaBwFrMCF",
  "key15": "2YumukH1unDX2r8ekjXUHGzncDE1NveZaPd1vaUsWjm1GV4qcTb5UpS8napnnbNifxk8BapknN9dcyYjQbm56CV5",
  "key16": "9L3yDSFS49PNE31X8FkwwiQYFu7QVbwKdbUWmVP4FGGdDNTfu4YwWtcQPFp29rt5ipBfJBySMMb2pwxy23gZj8C",
  "key17": "4U3SoahhmRubzvJa83pgny45MfRPGtCpCbBY8Es8zJVXpz9yTzBppX54KxdyrEuxCi8e9a7339v9of7YuH6pfSUM",
  "key18": "3jEdgaoQ3h6KuKoT1qzoDGaKH8HQraGRQoZzqAqU9VTTAcGpAPCiSig8xn8sgwUBAfs6kuVu8xRvqFzXbCjxXMHA",
  "key19": "C2szGHnVTYVLSvAuhByyndG3dtnbbXddCfxE5vEhD8z569ayk7T86rtKkEoU3eRB2Fb6GSPzChKzW9ou9RFaDEk",
  "key20": "5za5kNaX4qHJp5VhjpSXAtTnJfDv8p3SpkrdEpp88s7Hv6tzQJEBa1zfUdkdtjDpBXBa3sfBZHKdadLefUPmRs7p",
  "key21": "VtqgEDnBfYtGV3YxFqVsGant3GWJkKG7TLgpjdtJhWheXTRgekKUCCUPdb7FthWF1x5f2JehrMwTonXH16jJEBC",
  "key22": "3G2r4UzP7refVaEjFvqqkvUFNzPE7KM6ANLMpCDF2tCrd7o2BNwxsN7P7LzV5EQDscjh9WYb8WziWCAaZSqbXx3x",
  "key23": "5ggDUUmMS3G3geTT5Gr2hEmfqPr6KdMRtRMkx6CAxeGYDJsqmYqSA1hKXi76zRADcqb94acibZFPForzdQrYg5kc",
  "key24": "5G5NVxZHN1hgyXDNnqwJMuL2nW6kuPo4canKNLhfP8kbYq15EUwoq4NZRpGyA1giDtaG7K8fgd22wsDMPBkvxWTf"
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
