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
    "CKdH5XaH2GKmnFLyXCg6x4bAocyp36AEZs82UqurcUsapaL8GGV1Z9yf2WdkdPDRRk27eizSCoTK8ZQiLBnczZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qSPLfXnXdp4GqxBPmbzZ5hRxM8zoVFhivuLijooiYm2dj5QHuST85G2B7VBW5fbKs5FZV9tNfR2fqS6oZqogigB",
  "key1": "2wNX7oWJyuCfrvBwibeUtQqb4ACar6rApRJitAbCURPHc9fhaoQmt2gpHuRpj1nmapKeJYKpp9pZcWuguh7DBN3i",
  "key2": "22Y2sRdW7SZqF8nXGYwt3rRLLPR2ud1J3VAxNWNKz5r89551cYjdh2jGydP7CMzBvyebX1YHz7eJmM3SSTu3hSrm",
  "key3": "3JQCVKwqP1XXmJQaoke77p3utZtFvchBiyXyxbSQhzoaT897GRY4dTmVbXHsJfFXWKgVUvBDmbPk1STuSv87yv8Y",
  "key4": "4WeQ6bQD2rHJao51cmEPtFbqUgrSQ8AfBDDfKSC5dSgDb7EnrZGyEEiQziqaNhBywqqdumMzU5bmrRA1GoEKAaNu",
  "key5": "2nLqhFXBoajZDivvNUBom67sabEwMJYjVtJ6KeiPRxMk6dmH45NaSzSMcTedwAjwxXLR4o2zxFDiwCrZzmnv4HjR",
  "key6": "4fdpAvcUvn4cb9p1z4sCJJYnmJNypo6NqKqo6iYZrHHCefDJN1eQPNExVE991XZDZ6iHSdCnbfPdG34LsaJ2o4BL",
  "key7": "2xr8xSGs8A67EZBtTM5FDiBpodVhMfjbin6NwycpNXucQc45zwqrCXLPEcgpf47mHM9Rjx4BR5isqU8EPLqRyvjW",
  "key8": "4oDR2Lz1HrBHorLy8quS5LxMuTEAM7a5qwQvxRXbqLJkUFWFSQyGBuZptdo6JGtZvwzyCj36Hmv3M9msdt5aAEY9",
  "key9": "4SHmXuegRf1rCKaGVWtfme1bQDCiUj7VMGagyXqLVFKXmjXkDsAGnwr2CZGNzT9zFJQipcjRjx79cGdkzmePWZwH",
  "key10": "52H4AN9UJpvnhWJhmjHBwAo6QNvyxVNuqdgyZ4FiaN7dntZiNNZZTJKbsPrQziKd4osuXvTJskyFCxP5iGPFTwXy",
  "key11": "4YpcwJ7WqWfYCSw4VkyHV86iRhtYbcnJ492yNSEvR75M5VGuhktMSAwMLQWczWZp8mKPjHZJ9B5xNpthgokFQwmD",
  "key12": "3yVKRnACzQtTFtHvYYcPgJx55V6Z3QUTrAYaqcSsQtBzs44qbtdSfq8co3FWCE6h2S2e5B6tkxKuM5qaF2zcvRtp",
  "key13": "3DTzFRaZehgjvnq5k1nB6CznB3BQTuJ2oVSVTVshMCywi3kNXW54v46MSDV7du9GbTady82RSx878eLF5NH2PbRA",
  "key14": "4gkiudWCnTVgMhyUL21nXoLiXvuCoMZ5MubVY6z1RvNzeHj2MZWCQE14ADfqgZ765CpX3KkWWGQzyyhARRA2SqZT",
  "key15": "9KTJvj2mCaCX4C3NCTmDio3z641QwrqJ32khMj6qUNDH7AuevxiNzYAW4i5iK7JCrTUwWxV8CdEA2uPifr5UrAb",
  "key16": "3ZXuVh8oGJcps3tj8PCMJMVZAH8gd4Zb2Vwix5qmkX7SPB16wdGXFsX4AG3jUqV34S91m86HsSome66Lhj59KUg4",
  "key17": "2K3Ri6nBG8e6MmYTfVMnpRiADXfwouttew8Pc8ycpHjCwshgFfvWkdUr5pukfVi1ybSSGyFgmdZY8Qj37QKQMuux",
  "key18": "5BXfMA7yKZoTKPe5CJgthDHhSqkRQTmGAncrLyCEQ5V6P3ETvHPJBj7fPo7WxmbaJRtTqcKs2WwuLSQGEEsBCZKM",
  "key19": "4cnJGR1k3xhtFZkTNezauRcHgV86HQfk1FdrzM1bMURrLtEhssqFEr8y1mMZZpSPVZ7GCRFBECkz46rML1AMxfGw",
  "key20": "3CU4XDZp8BmqR81hwAc2YAe48fuqGBurFDCM8vS6XZEG3THmcdzTMFusJdw7AP9CxNvTeK2VLQ6B7DVwWEvXGaGp",
  "key21": "Y2FGaXcfFQfaE5VwHjHJjQR3eEuvCU71fbJQhb1xniqBZGEAakZ3i2xa8xxcbvESDRhAaCVVqp58mByabEARaut",
  "key22": "p6PjcChVe762jqiGxmQcBMvroeJccgfNNNRqJQg6pwmo5hAghiTEy3gPWgRCrfCocEiYANsCoNkgn46BS9GPiFD",
  "key23": "32WnVzN9qrEniCSJisgcXcE5gh7WGqj3S5bjrC1Y9gTUbSTKqrTSbKksPcHs1zLqqvyLtLUMyks37auE1v6P96bA",
  "key24": "65GbFy8z8m9GKPbt8GdVwcryckbYMjpP4aJV2CH52ydvCFgD7LeVmy6QxVBDxtYDm9gxRf7ETY3fjjUtNBKK7SZH",
  "key25": "ZsXS4zaryYKDw6XWMXNkw14xj6DUhpw656rc3o3fovZYbnaWhM4FZTfj4BWdzg9HL8eWs79RtR7pUBA3QSNaPcs",
  "key26": "5bUv2DH2vr54C99KNvCuoH3ALde41HQri9X5Sy4S6Cxme9BQhE4ruEC1ncHS3DrTs9NTJiveP76AoZDz8H2k2DMf"
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
