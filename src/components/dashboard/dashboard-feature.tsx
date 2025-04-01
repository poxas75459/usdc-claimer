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
    "5pDBo4D82E8QFUxaTho3sQNDMnx5hupnDY6bpJi4ECHEbKfvgV8hXc3BDzZoFd7uzU2UPj7Sb22sRT42booiyLRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BupcP6xeFjHogvjiW9q5e1QkeoNrwxCKL2QsSx1YYUxdFCvhaf2CW2r4mNw6hay2x8Rqtd24RNpUhGU41m7rkgf",
  "key1": "4vXjyY5HQ126YKMspNvVmTUoAy9efptr6JD3baPvXncKDijPmSaYnzE16PpP5s1LocoWjKgjvW1prLc5so7h6Pc1",
  "key2": "4e5FJUKzY67WhRYMYRkmxYPR3REvq1ijasgBUYC5YWpkQRxLUFgQ2Zt6rLAnkMuSsqugqjK1VvxxdWQVa1hNfGSL",
  "key3": "2DDiuZR7C6kNbcByvDQNauFSnCBGFfxDgX9pEtm77RiPvsaZAErrG4LwmjHhARpomDoMPFLRZ8w4vkfi3v2ijD9M",
  "key4": "57fagHNJYM2o531XKh6V6gs4eRQ4Nfs8JWS51wq2H3QeUbBaUwuavxeVhuyKU8MryEbxHEFws7BR5YCY2jXQXTKq",
  "key5": "2RNNgbjy4zZKbCLBLEHGPNNeu7Ns6qQLWHnq9YpQRFYipGd2jniDLHks2fVvvD5tTsB2Tpr5wCvPojhSX4zXcqgN",
  "key6": "2SNwU5VghiVTC5VP6CqVNgReQHfv9JgJpNvuoNRnEhvNK9oUkXLMuPDpWzaw87yMPg9ba2knVtPFy3aaNbGChFuu",
  "key7": "4MkCVj4AYvWv4DnxL2Feiz6u2ZNf8ieJ2k2MFUQqLH6am81EC9qf657FFdj8gctuXG7eshdioKB3fxzuo4J9zVr5",
  "key8": "2X8d4w4vzdbx7En4nqosaxQe7GMHNBFZkmiJsCvNtXQaU32rCkUbreDWLFYVdTebdKTvLmG6GRqMH7LiqHLz4XpH",
  "key9": "5m5TWDt5gTDK5rJBF85E13nPamxEAtNKKfi7sWUYfBZaWkaRnN3KxDMif6ekGLYNiSS7QKo33RQExXC7cTCxhZz1",
  "key10": "2E2wNr2SRYyBK6fgBv1yFC5DgZ8pf9QWe52PrvDxJorixgadQ4uJK9N8j1otbSEV2UxPekc46asWDtBsmtKFcB1X",
  "key11": "5ESwh5z4VN5MLXVYHgL3m3a4jm6nkF5H4XrukwxNQwPf66x59JVAWGpxuSKBbaoNUobaaznfpuQrLHNEZErwbGUy",
  "key12": "4urSedWPQtDyeBitCi2b8sXSGq4R9dnbzDCtkWXC9wt9JkcbwLFXEPxGV8shMVbUbYS28CTJo2uz2FpXdFkn9mS6",
  "key13": "3gPqLTBwFDfuT8VhbVfj9k4jKF8WS8LwdiiZjC5pkuLSTtHREhKdtDtykYVtuPtwLb13JkjiwyZCH3P4CctLN2XE",
  "key14": "5uK4VGdwrN6twZYe54Ggcks5NShAm48ywjcZereWYR2SM3CxgCD2HWijDuC8jChpDneMf6UgCn2iiBxGkckFb1EH",
  "key15": "5GQtFqewBQpxqk1mb45MSLGnYHT8Jc7htAQ9nUTSAhqmWuDg5gWgdk4c9sBziW52Bim9fqYA4JrzRM5txtDTx4ES",
  "key16": "AQJuHBcbtSC54jHFkwATATgqqqTr3i897Kq7eGLxSF1nYLkwXKAyprMXcnC1rcqNRGzs5teapo3mnbaM8KFLeR4",
  "key17": "4CD2YpAF1SxeyeAk8rocHEi5Bn4BnqTdQMArwg43h1DsMe9b8LxC7P3gn2Z4iUHPxjsDioKkQx7Yr2XB4fn7z7Rg",
  "key18": "58iHvF8FWQzzLVPD8rT71M3izm13P3r1jwDQv1NYS5YMLbDToZriQCmuiMiPjGGKRXdis1H7weLxv542Ni4uch78",
  "key19": "672bFRPxLuEJ8USAZKzMJ8ueaZBtusrFxHHsAMNEtuF8xEZLmiTqzALPjGFUL8HmhkwTuoEtw61T1puKnj8GQtyZ",
  "key20": "3kANE4xvwzK5Mn34mTr2mneV3StzR9TEEyfmJtfxQHTCoQ3JPtpqZ7rNFTJqKq5yad72rnwm1GAVZEDL1NGqWKPS",
  "key21": "5Jpb8KYe44oJAsr3LihuYLu2LiLDfbAaiAASQx2DXodgpHCHiFifRLS8JzqEQ6Gm9HJCHq2UHZMusjdT9fnXW95u",
  "key22": "2kZ8ZS5NC6bP75ZrgahhGnHKJ5HwVDkaX5wPupjPbHRsmYYM1Vx1dzYjruZoSPJV3KpoiASFsux8Donb7Vgh4otc",
  "key23": "5Zbvef9KYv86j1wNNS2ZJBxaPhLdKp4UGReFJV7bno62TTzeqbKgnCAozN15mGoVbPBUGTG3uKrjGB4q58ffdHwP",
  "key24": "JmCfTh5cN6po8W6aFmPgHKGUvVkQvoJmb8avphFAPRL6RSTVZ9dBMPVjzGDo2667dQg6htci6HmVZA92VekVKek",
  "key25": "5hRNgLd67aQu1nXDAtrCX9Asv8GSMWeviUZSSwAMQ4wo7RZpAVqsBupFQs968wEMJFU7sj2bU4uBSiCbhzHb2Lag",
  "key26": "3aCr515EqWjw5dLVmXBtJ6UXPjtpoKfsp9XVVqV4M92ppnS1oHAviRtQK2wwePsEva9fEJXRYaLxABuYMypJeK7S",
  "key27": "4ZD6LtaN64XzcJ7kpuaALfmvDH1PC7XHskdunZzPy7yKdupeFDN9kgp6EFdEsgCR7ZfKTvKmqkc56VzoALPMLJLE",
  "key28": "2xEsfNep3PgSaDzej9gw2VQJUNXaYjLJYAj5AR6hXBf1CSqATC2HRHhLn2hiidYRm32mfecBSQV5sSUuBa7AGqqY",
  "key29": "2SZtar8FbzwEXAE3XfewZvDuq7jaUoLG8ojgqKCC8Gi6uYGqrBBiyHn8uajQDDU89ng5xgF8oeSdXEPN8eUFpSwG",
  "key30": "3odMkRuuSxECvusV1tLEKmGUWSwYBcWYHnNbBLLUwTB2QrBogtNNA5tG8uCRAHxAxrqkpzB97TLUKXW4DnTnjx6H",
  "key31": "4gX3WanHyRYpyLQgcXFLmPU5mSj8u9KC4fQEdvRxnLeCWc3fESCATSWSbfjvaT5rQdGRfXwvA34oD1DvJPQP2tgW",
  "key32": "4GJYSPKrkGHFKPsbZj3Gs9JVpPBxwCtNbt5iWkBFtMTaphXNkRjzqgUgdz4uTBHBDR9ypMYF23adxzJxLqqe7Y2N",
  "key33": "3Q7AdP9N41XHHJaTVVSydXKJXeqzf3bsXVxERTBpZJUkUNrVMKPjXEkYESFEHoLNXkdcBue8iPMGT8XXxVR6iKzS",
  "key34": "eBDSpDTJu4dKyrHG4LpkpT7YCDqb796zJpNrEgQqu3skS4MsvofKrHrCGFf4UCHDEovrY69gvPG2T6X7PXbLM3T",
  "key35": "3Ya8ggWzcLVyp9DZRUCs5Lxjz7MhEY7aLeuYC2FkRHPBmiBuqXN5nAtstA2opxNnr5BLGEwaNamn4k4ZR2DTUjG4",
  "key36": "5ATgVYqmvfWGdt61vtYq7ignWo4RbKzwuekNhi2dvx5JVKAY3Y1YC4WNJ8PBL5nXNpXj4SkDcjaJh4mywPMacJnB",
  "key37": "5PSBp5CEf18UfzWeyqkz6NNCf7VECFzfZQemRjvnngMew2AjunnLsakWP74nQyyLBpTy3harUmgF5Nskuvx6mHnz",
  "key38": "4S8zEndnPnqeQb4F5YS9CJPkgKwcpvxuGTrhSzjGCUcLnQTFLnjyYr8h1Lgi1RhzKW1q2zJKH6FQrefScqujFbLH",
  "key39": "5C4cASRsfaSqMDu7TXQjQP7co6sTKjnxpwbaJRyQDQYNfeJnsXJ7XvbXhKjtHM5doCjPxV8zgC9FrbZrr6K1iCB6"
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
