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
    "5Nrpp7RNVWEQf4gh8u4NNhbpZCehx27MtonFwtP8FiqaW25suk3zsFjGdDTiNPeakjiNyx2zcVWFM1BBndiNPQFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VjHYwfj2tvNi8UASayjUEmPos5GT4rzfJeUsg75VW7uaCguvBUwBDGkmLDafXibbgnawf8FSWvcAHj6dswC9fbJ",
  "key1": "3g3wxpLxgKC77xNX12PgvhYd7ttsaLbdauKDS6ydDzTq8hofLSzmHANDhf5SuG9fXb6YeVpPhoN6iUbaqxq6y97Y",
  "key2": "WyaJP7BQ3fQtrRKeR9he3VduhWKrSJ1MmEbBoYehBBqhrqmR5rGSHkzvcQ8o6VpqPr5BBM7bjGn2EX3n9tCjGQS",
  "key3": "3msxyz7goZFZKMzTTiLKsaRcp5MeXdmYqWQEUSVVuqyRxVVvFRcYS3bGdSGkCy1v7qGCqvo9nF5LoDpwzug6S1Wr",
  "key4": "bgX2duuk6Bii5Q1a8zY51N5EFwGyAAxmcmZgyWwGtun2YK1gbzDS69xLEq1a5Jz7Ujo7sgCY3KXriHTR5DVVVN6",
  "key5": "5TM1TfKQ5Jo2YWyKmS7dPerH6zUVngBnfdweMwHvMs3fJBa9nfMuSu8U6n7hPnvkmqmMGY3ckHwNg4nj4JsoJaqR",
  "key6": "4wm7cHjjA9yEB6NPPDc5Tgr7oX2ZtL2cJsXXGxWn3CHf3Va4RAMTp4cgVdQqxVyBHY9ZwCUM1WJaCSZeyivjKvSV",
  "key7": "w1TGMdbkPLhJ7tcehN7wMMkbzg4qa9sDeZGRmNnu3pm6RvNdyQgQ62f27exLCVHGctetbbEqK5RMkPVpRdGiHWx",
  "key8": "5qskRyyRhjnpX5oGn8rA6ZX3viUNpBesw6D7VRFVpkRBPvKYZaAHMMcRrGedJzWv1XWc8NZgzTutqtP5adndZDHS",
  "key9": "2Ai52ikHs9VKNVDGrLJnwdaw5po19h7HNfdQXisVDLntWQAvbbT2s2a9B4PNpataXz3PVA7vy9SRtsS6saybKfYc",
  "key10": "3cycNynhRmxmkoVnTbeeHhNDqqbHaManCRecF5dvx5F2Ce39cyWcE4biKEUX9tQoqDYuPRx9KCmQUrsMNVS8VZ19",
  "key11": "4Cz4neUPE135kjmv3BA24iRwLuChRFkEGGr2kK372hTX5dMqXPH7rt4mvrm9ntKGsci1XrxuXwdiqDodKKYq19Sj",
  "key12": "5s3qGXte97ysy8Xj6AuZJj5rsLKbVGPSf51h9ts9jGN6Z2EGk1iHPQqNdrmGBzihgkZQB15PiHMqBHpTimCPryNK",
  "key13": "5MMpY8XQPfrnvXbHgRZrWzQ2ZsMnWCUPGkuvoDPLg7Nm1thZrBBzkjHUmNzXpCkMffbL4PVYJQBBJtS57ctFiaR",
  "key14": "5361MevLU5WFUwjyf24fKMPiz6vXxWMtVHiNV2V9NPo1oRzbPBL7XqFPSQ2P28rZPSYXtJcZYQ53MD7UdMzMiH2a",
  "key15": "2ax2d8iUcbEwZ8txQzDKxNLw48FC1RwhUiDTcvSXJAdVU3mkMXbeyfiyyPjfnHSZ3K4vPVgJr1q2xqV598ia6vUo",
  "key16": "4FEoWYepPyNKLF3Vbf8ZY96TMfHhZ4ZpRoJSuFLFkjbeDyUwd3pdaGunXwkvcdPHmQZg9BoL66pTGDZ5NZ2ezNtD",
  "key17": "3TgMpKqxZ4zYLD9PzwMBcgZwNqu7UsjLnTqL9xnoae9TK7mSZAd3WQseLhrPqbqwz7sKssqbxsfSW3N78gCtjio9",
  "key18": "4cfk9MEU126382EmTc4SZhseXkBe1mgGERTPSiBCzQEqrCzoQszWvbEoU8AnQTdJkUFHodNu1cYUY6duYQp9Dg2r",
  "key19": "thQ2E5DbdUarHjjVg3eVEZf3zvHJv2tYxwismLv7nxHTmXfVWPA1dxiR7vV5234i9aYZo7XJzzeJbcqgn73tdwb",
  "key20": "4VVid7jxa44dDeCreEwrbbNr8w1a5P8bon4LuVhPPyz8XrbcxBCMQG7UqFBVf5jkiSahESLPdruCVk4x5tpSPa4s",
  "key21": "2Sj8G5dQyMecFLHU4PLeZUbJ4nzjTP3JmLymQCbdFHU4GDVUsWALrwwGPzdDp3hRBrT2uncLzEreXaTnBR2UP5H5",
  "key22": "29sX32QEExiaUUmxxz2x9p8fmUxSGFuzJA8gAL3SVWZ4YRbjwT58P16TDDTvKAsbz4i8VddgXSLJJZ3AafAC6m4A",
  "key23": "1WwUuFs5xZeUspaBedJkqytU5W4Tf6HZSRSSLzPejBLEMaveMUFror9Ez6z4CZSrZb2EPQRX9XFUyRiWS3kdXCE",
  "key24": "xFVDbyUAJ5QniqDnti2xgQmXdjYnebNEh2R1v9dH1Fxhohy6HfDHiLKh7Wd6WTxpMfnze1fbZiPkTfAHbn78h5q"
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
