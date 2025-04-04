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
    "62Z7CT9XSaw9TrAQqtD7XXG3KYGAqN8h62gcdvwattYkYER3VmdZqGo9ct9Vsyj9UMHrBdHefGwMHQ3ojrBVfZw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51VGv3gQ73uyt1XqZUyxESXa9ja4xY5Sn4AVs8ZuFMa78QJfLEHJ3od8Sm5gztYWDWUL2M4qzNBaugkMZLCEDyt5",
  "key1": "57fPZ62uZCuhdp7tbEhd52Ldh6LPHfBNQizDFbju9xpvUTiA3dtMsXAh9D6AHvmuADsUFPmzyR6Q1X6wT2L2XTyS",
  "key2": "hCp7FjxUBAEoreJLXErE4VoJfoK5GXXFF4aXrzocHYJ4GNmZnBhFG68CigrGCcyTiuuwvUowGM1DBqiNE8argJF",
  "key3": "4LTTpX2dzdoX2CMPh5ARhNd8A4owQTHHcMtYhAqN5AB22cBFidctUEKvKw9GiTsEEMY9wwEwV8ku4hzZLd88j3BV",
  "key4": "3uxBjo48YoztFJNWWhtjxMkEhphC4tvPUWPZfy4oc1d4EU87gTEbQV8cm7kqVDha7wBBJnzeEykkJ9J5KUkipYdZ",
  "key5": "2dsLqhQaHFXU9i4VtZmWQLdW4G28KmJP4WAaqhb11u2khJGAH4HSE84gpebv4M2GCp4iAo7iKbH56qC4EkupEQXG",
  "key6": "4oKYmgiQrN1U8Nnnyx2T7KDusdf37wB1UoQgV9Yg3jYZ7xBJ5G4ST6RjrtuLq11kHpY2uvD8aG71fFGA7tFcnXAt",
  "key7": "41awvVKULgQRPN8iSpmmTvdzj8HZukRvAqnZhqTXyxioWYWDNMNGrkQTDSonpS7Aq5Kqj9TmgPwJ1sTzyXCT1HBn",
  "key8": "5TWNEh9jsfkx3EArbU4TxmLzKe1JcSdxpzcQuHRi7SDzqAqvpGwpLBaeTpB3GqEZgCnGpozCa7NmgSvCyessYkVi",
  "key9": "2JqYHXqbJ2uJjGXK8ER6iosKjgwU129WnKryxvg7f5bab4RiqUW3ZhDoiSU9c49QLXNz7u2Ez3GECy9uoc9oN9Wa",
  "key10": "5PidQHzbD46G8X2YLMaywqT5DhsaPth2m4gLKuLqx5AEevyVgM8vsA1cmC7AnabwpB2kz4UEJLUFgFRysY1vuLSt",
  "key11": "4zM6bwu18dJfRF9xsaRtNMQaUds7esPqwKEpBk7dAPAHf7NcUcAYxyy3aRug9uFjRNfGqUXJCctRUXqbHFfZ5awR",
  "key12": "4WSV39m855UnZF5quq23bXnDeFMP89A5NpCzwLaYHF9nvErseFnNDEyBw5adruY2AFG8WhQAu44wCYvZwXA4eoWp",
  "key13": "4Z7u3FtDMNp9w8WsknRKkCcwuk6xXLfbsNbANhY9hi2nTXj4CvSop7kvztpjKE23CMe3yvQBjHcRUiSV1mMepJxM",
  "key14": "4Vg58hjUZtSgtKcYw4yHxpHfh3WnFiKSGPdLSedrjfJNVrNKcgAdfH1qJfRvfJfkroAtdY66snpdL2TcA3yJEnfF",
  "key15": "2KvBfRXEtJmYFtCc8mdqLWDKXztYzsiFeYW1SFiPHWbdwHnfSBvkocknLSjQTTbYb9YxT1Vbx8jqrPoMrqScYy44",
  "key16": "5Dj4GejyQD8RGJgDcnNddtrPqYJYZRVzdm5Pc7eiGxwskyCmuWu3iVbB5EmhApqbv6r7HCBB5YGrTGAQ8V8wEpfC",
  "key17": "4mpLAARcBi6EBxnWQB1D2nwMFAxXQmZSZ3YWo8s7iCWc3PVqFkVHYnADWGRTZkDnTzcFuHU8PWZdxLd518WDdY3d",
  "key18": "3UoinZ5KYMCjZ88cPae2efFtvFbFvRM2Yf5BZkZRPVG7FAnXG1rknxhBkthN1DdQQmF54KJnwpoezWJiXjWXD7A6",
  "key19": "NQdX9bnv3D2sfdNTMoogNworKTymgx23ZjckWuAWy2wN4yzQYW5N1dsqcmmZGwAURw7Bnj4bh3ySExRBFmcHu6L",
  "key20": "KkoPrRUmxzanFbrRchbex27T5kP2KgpUzFMVS4gbwtmj9nwoehnUKzHHLgCVhFV7TKE6M5V9cCJxmoFutd43LeW",
  "key21": "Hv21djdMsrm1GC3naDLAjArMYm4PSQLRe9hmMgcWCmdgivfUn3qFZffma9P9toumyksHPbnhjJW6NjtVXANSBBK",
  "key22": "5CNSnoHy2Bqe7p9iY2iLL33pGXX7fdBvrR1e5HLnznN9VCJGFPf2izxpnrjN67ksjVzMXdbHDd6AuuwD4etkFt84",
  "key23": "45uSC85pMNETyfboxDixe9NKxz8B5DJAHtUQxJgYEFbACmTKts9VP82k2hiUfRQj41ZhgRV3JUQsdaBBZundMmnw",
  "key24": "5HshwNCgKsCSNKdpomgSjF2EHPvypS8meQJT1u8cXjMGwJbaCrfTtgsgzcvDPXL2MKer2CvCjc59f5FacSonb8y9",
  "key25": "5ftYyBWLXnJpbFiH3RhqaTyPCg584jRzrGUEnZDJcMUJdVmYV1QUwE8npMEC28brX6c2r7gZrobNwnkHyNM98arK",
  "key26": "DC1YTGN3FPYhNg2L7VRtkKaskeG4RYJViDChvMfh1aCWG4TX6xEZ5ej9cRT5p562hovXkmieD2sNe7YKdipBh9S",
  "key27": "5SgwYGFFMdgpr5c7cwarqkbjABcmHTGPQgQdkHwJKvYhFekNCMAs8M4drvynsi7zhgauUSnPZT73x7TDQBcTN2hv",
  "key28": "4cRreVCzuV4bUYbfyfTsdZq5y3Kk3hfTS7yJiCe2pndTHPukt96AE3FQagVYNHw6SqYDGJZxJNBf7okGuJwhFTti",
  "key29": "3BkA1woFfyKosDomtQCGyixtRp6A7LBzT3Rh8Q81fX4fFg8AkR16WBv2FPDtu8dB8e56QRWr17qpasvx1XWZQPga",
  "key30": "364njaTjZYruJuxm7sV28B3nrT8P83tnpT8GfniJpmN5a3Bxp4FHwLkFVqFAjJW7vqs48fvFkQ5fv2LLApjcV51v",
  "key31": "xZ7bPRDwLqai2Pm7PqHncEnXw6QMPXyXj6yRHi8fUshufi4RFk59PHjZrvuMZDmsTkMy5MxKcTPVtjAgvYhueYP"
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
