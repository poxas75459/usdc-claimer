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
    "4CiMCeUAGzmUbJPL4tWqdZih66zRhp6GSnC7LpUtH9jm83sbTe36v135wvpNSgRGYspZNfwrdRfJLCHvGx4LgSoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nh2Hx6KdhVELCVXfE7DTPLNacApMJnKBLfhveLHpLgjVbbjuvqpqAA1VRHg5oqTW2sRYELWLY7WF4jXxpWC1UuL",
  "key1": "8GwVkG4feju6yrdAAUy3N7vZP5CGGNQxdhit6XZWV46WejmuGYoGPL8H6vrrfP8H2fYxage8JpbZFnWxp4ner1k",
  "key2": "2F56yKtB8zTDFNxGhzJmrfuCvWDuiWMUZVHS4nagwkVZbyyBiXdJew4fipcJpZhrHrrzst1DnYwpTHxiLfUg4isV",
  "key3": "3UYU4Utb3rmGeqkupToD5c58WmfPKRQKjGEFgyDtg2nVmtUFSdHKCqqCxyvHo7QPT7st7UiNn6SCrSdWB2J59DsQ",
  "key4": "GwjjvoRZvuU5iude7TTNJ6bpgM8yxMv9ka4GTrEb7FiPu3ebLwKUHqF1qB5YLEtxp4HJRcHE4hfwCS4cp61uc2c",
  "key5": "4A4LLYCHjYAGCBuRehLmCth3NUpDC8Yk7PQpyoBMDEBuJELwVt1hezBdmf4LY9XzxzearPNmFQAADjrvCQTWPaX9",
  "key6": "4jaFXvBGUntnt5kfSCZgRKvJwsAyDiGDpypQLp8yTJHyzM7WmPU4PMFuDJg1DHG2jwcA1LEVPPFyJfLwFARL7C4k",
  "key7": "WyLWs3GuxrfHcUoRhPVC8csBozhV5FA1Rhqg8KmioRWEsNKpiyEDwVnt3k5xJQqRFBcr4EFhMVU1c9xPzEeZfQD",
  "key8": "2pQY5BaDmVwCXPzDL9WmGM2QwR6V8WKaa7JGBCN7Gq4pWHEhautTkAWUKtNSpS1dhms7dNGtCBGsbf53wYtWL41i",
  "key9": "4JAJoPcGg6k9pjKKvuHUNkY9qSQGYQ7G6WwWnrhrsfnf66uusoLVsKFEqtCtjSQKRTDmJJneYLvitWtpZ4AyCcc6",
  "key10": "3kjPWY5WttmYanrY7r7x4io11WpFvqQXSMx37VU4azDnCwLmXXTZLF72Bxq1qCp9i4J6w5QrRnX2nrBQA2h3PfG5",
  "key11": "4dQuJYxHyNRMj442iL1tVbTXrBFChrnwyhCxFSk9EoDQubZcmz6wLZ6XizxdDfKG9XdcnHzchFZmxWEFTZ5H9QYL",
  "key12": "VCbHbvYrWzf8DUyh6rvZcbCfJxtP7fuWqzrN3yqwskEEyjAcGsHb9BnjBGA2T75zfQFFBTdPrNebdtXaGhmtLof",
  "key13": "3oSYQ8G4aJYeD5nbNkWU7GbwFHV5ghJKpN3XQvU1Bnf5rScY8NKBvQj2bp2RjLuy94ZDZx8C1RTrMJYGkgMXL8We",
  "key14": "3besq1YzmdqAgnMgHsasaMSPowMRn8xT3wRioNo1uzTdcRWtahyV5yH9XTRmgxcRgZQ99ESEXMz1fTcRZPG6J1EL",
  "key15": "3Rj16igKkJjoPCp6SqBPmGqg7H7ZJJUHTvPfLFQj9Ryha3NHD8GMKd7dvCsCtJs1aXToV8b5YjgJ4zRR7siHSFrN",
  "key16": "EMfv6VbaQAkLono3RyiHHEP2T189JgkaehkjTDTZeRYMUghMJYT8WphTo46FHErfc81L7veLctnN9yN7YG5FDu5",
  "key17": "67nx3bNBXcKnPqCdEB8E3fgNjHrz2zLPa1mKdGgSig7DwVgxgvjhs6gBekSj4xSjRN8mgdFwWjqb7mUAnib2Uyor",
  "key18": "5nVQtpcKWPCFXftnZW24VB7Qpkpnxs7ZZiCRms6v7xFJekCdzV4vYWSo6RRJxAjMJGy4cHVYNPaKYsjvgPjHq5ag",
  "key19": "3aSoKdMFJTmdM7SiVdZXg34Tje5asESJCy8TXcM7cPvmo2RDhosqzWyA7cLu26nvpwEHxhaTSEkzfyZTU1r76vf9",
  "key20": "4od9tefDQHodTuXWxAR7BNH5QXG4vNfCUn5bhdb4DmVWXVCdDbenk9n842AxQ5aMvwXbPAVXRbXTNoB3zmTHmYcz",
  "key21": "s8QCAHUNtTfQEW4LLKgvnvm4ujg4i8JnufBCa8Dj9dKxGS11G4Kk8L4KLMSKYkVQvDNWqdG8bdXzcnbfNr3f2hL",
  "key22": "5TUpYDoBepHZiEXnmJ59MjeX56rHeHkQB8qYJDYBRufBtYzmRyG9dC5C8xnVwmsci3Vmr4yqMs6TkzjKQmngypGs",
  "key23": "43ahRkx7r9K3FHoRP4biMZwGCbzUnRM5oud6qe1Vz1JBRmf8z6dXCdATfwx9hj2vaBy1H7PK9GAvpcW7yVMLvzFH",
  "key24": "3RxXhW9D2gXa1BSw7nDg7mRNYJnJRUD1C2CVGKBJTnroZsMbJCZLe6BrgqAn3pFtZ45991YP4peZwgeczH95HpfW",
  "key25": "48WNy9APifhZQYkfwgkqrbNqXTjMZK12zYcpCoQ7cBZXXyJB6Giz3LYtc16QDSfGLzXf3hc3DsuPA1DHMszsPZK2",
  "key26": "5pftPmsi4N9dLUdYwznVYFNFkV7byoP7STm7gvroVsNzWjYfaXFAKu8wz9mhdFQEVCGNfFdKN74EN1sQVMaBXd6d",
  "key27": "5yunFoXE7dTF6xbySY1AUzCfJYyj6Pmzp1NpT3rsqxPMCtNx8ffk9epaydCEtAdYszkxi6Dow722VoStigFFLAdb",
  "key28": "2QJyXoyvjGmkuTrFoYEV1aoMjDZPzfEmXLKmumNmzhv694tM5DAV4sw7uRXNduPi9L6owSE8nTUjMUE4PpviYVmc",
  "key29": "2Sirf3CB54GXLoyEv5uLL2vgo9Zw4hBcp88Gf3uTskSYdUB2iy2siSNQMRKUNVmo4NAPrQtQTZuZy4JVPbyGQT7X",
  "key30": "3gcVT6kHkNeSNf6gwBqomRkLiip9fLDpXid4yG4xCo63iFd9voyoxgtNCbec1DoE7XbCEVabDQTEWdGS8P3WCmoX",
  "key31": "5rhVpdvM5tbyGzDqQynRYFrA8sfhy2NuQPLS8UCYhiqii9whPD4HJNbaRJW8iqbjU4orpivZKsZRjAY4z7i7AtNj",
  "key32": "2QSfTWpAjrh5a1UXyBHN5ihn9mq8e7wmmkS4zexDByKQhH9LMbumEJHqRYNKwxkmcFz6DCWCS88WJEX2tNKDfra1",
  "key33": "4ZmWFU6tMnm6Es15UwEjyReyAN2rBkKFkSjmXGd9SpQ6My4yibcs9HnTvx7vBPPvhG9xm5v5N58AuPkmF8KtsWHt",
  "key34": "ihTxbNKyNQAkujtUxThdPZPSpuHgKs6gg8KiWnSaRXMB2Ghvzdij5UMLZisKU6fH24rNHmBNBNQViEGtQ7qZaiH",
  "key35": "tzRMpi55gmQ91WTaLBD74GtYn3VegGCHgCtBxBXRX5JxBBKLtYHMcf9fQBZmA8nRdjSsTavgH2fs9M5zMc9Skup",
  "key36": "5qGrqpfezXfnYH96JK26t7kiTwLV8aDPB3ogieovSyjsrLANQE725D5zvh6C46naT188ftNCmeFZoURTauhKcDEJ",
  "key37": "Ymys6R7U5ecpJAjF7bXSL6e7FKd7Pfw9mBmwfAfoVGPCrNxSKGG6ddfyPYNfm6e45DCG1qrhnLgwnkfBpjueTiC",
  "key38": "4rJ6eHdXJvDwFQik2xnkx6Tr9nXQtMLokVgSfKU6RN9nP5zbuosHVDun6MnU3yD7fhcxp52YFsUaFmr8hWLuEEmp"
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
