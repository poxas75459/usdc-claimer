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
    "3Triw1CwKG1JgTTpNmVsYYGsZUWMu7iGKWuZviSxpUVH647sVFNmKey4fov8PTqDGppQQoVq8iDsuBeajncDomhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355SxSqhNabfBEz7ni5jRSaRTzxC9CaaG4oAQpneNWTf6rFKwodVKQLuVegjAo39K2Re4BTJC1jjLrKFwnXtWFGs",
  "key1": "5p4DbSnKezLbMg9jPTFuBFs1if6A3dfuYpHpo5GxBPHhbasQihZ6zyds3EWnnhWbA3ZDE8Q14UT7jqSwF12rHG3H",
  "key2": "3U3EY5k9fUkTGgbFBJErxW2mGaYam5jvSsqfRpzdAzGyq3zztqSQttnVq3hvkugYV9Dffg6YXvxMcUdWduKwQR47",
  "key3": "3YdzjSw2TAYeSdEZM3Fk76aFPzJ7C4txoMwkSj2yL4z2WhnkYVkr1LbAqBoX7b12q7Zj9Ee338CbsZUJnPey8fBy",
  "key4": "5XUjK2kD8ke8rmYC558MujJibXjJMEg6ZXK31KUxLAbuvWXEDpFdax7ycTojXkrQ1H6x9sZhoUFCSqiiZdJYb48B",
  "key5": "3s4UoDgK4DCry2yqBYe4zPdCqKFJhv7aPpBe1wzEGMKiUxpwuodiRTm2dtgG7rNYrBKSbUxBfvhzhSw1JWAVmxB5",
  "key6": "4vzdwQUfxvPT96y8csqtd4U4P8rALxUtnX623HieQirthc7eYmr7CTU18TrzaHW66iCmr33BwBubU3L37jdMta4f",
  "key7": "3ijYzqRbu57JQor2ueRdeTa5J46gkcopc9X9TaF9XDDiUG7a32oPenqB9NMMk4Scw2QG2ttyAMxYNSjGphFs5wxo",
  "key8": "3qcuBsDkfLp4v1r562YKSR84G4XHoqc6n61NMkGdxeMqBgTmHBA4Jij5YhkpjWqACYzrXf153HzTV2gkT7xc89Jt",
  "key9": "4fZgTjyiVNQAnqwVD82NEQjUvDUwv4Xdb4ZgDMBbc5vKnmwLSCjz3941BevgtxnDjXndAL7VvEvVT5yGTXkNnPxH",
  "key10": "gzCgAFhSm3SpAfzpSpStQJqdz2TfyHPwPovUV6yQmiMRMsMX8MZNUdNer2B25ncHSnYURn92bJ1Han2rVsqKpXT",
  "key11": "2YajP9srnzn2Em2p9DiEqpCiuANKJ1T4cuLgyvsp9runBKwmNC6PGiKGcNskLdf9JWuf8ddyAFPsbkmgJcsyGQ78",
  "key12": "RQ8g6WuZJukET2VYgAF76oNWfGw35kUqk2fbEFPPTe1vhMcfUnQZhW3SsckRfCYTP8ENVShtrxzCHQwhcRHZoSW",
  "key13": "5hMaN5WvkfV5Sb6ivE4ExMctZ7Yz2SLVQaN4qpyPsY1TXrrJgpm9yf7URDBgwrVJAyw6osEiVwAR7DKhUquegv8g",
  "key14": "3aKtDoz9ThzAivCE5wh45DH4mondPHt6E71QMumkfpBuK9VvMUyqggYqA7riUGcNXTZF1w265JjXJRjsdaJ4a2X6",
  "key15": "5nSi3DXpXBJN69W5NTwyPv613M4Aycq7JAktxoKxSALdTHmZFj4y63mFhYEWpwaDRr5K57cAPYZLm2zvwXcMMiqG",
  "key16": "34fbq7quWrA1uqpvEGumoGTbymg1MNB2CY5Ntqcz2ANqcPxcAfH6ZZ7Gxjhw3dzQYADT5V8eoizRh6HJhK38ND4x",
  "key17": "67k2hAcbpFRNraGGN3fWid7ZxP7M5iSbMEYajUKGtznezwaYdBkaX3fw42mavmyKUHY87MWjaW34m9Kc189c3fie",
  "key18": "3Bm6TiBLL8Xpf29HRt9UU2xgje6YwAEbtEfseZJWjiKQ5h35Konbs1aPtBikUKjTFGSPSkioauHVUWK44SyC3wm",
  "key19": "5p3EhmqraRRNgdYJpuoyKtbHkaZyLTAiK5HpDEd2LsQow6LhkrjFG9GcCgBnjkpJbD5Fh5wCoZrNZRvGNhkjVM4o",
  "key20": "4VFEEvXDq3yLLiXAdn5zcgtPkieKxQpWbC7yACkmD2DehyEmnqSvYHGp9fxEfvk8u651YH9UpQBoce7x9SUr2CUx",
  "key21": "4jNfe4jeZzDTTf4MyhEHYeqUPPq2pcDgejDUkammfcR2VuUznccknSziLdXmzu9iQRfQP4pk4Z8s6m9sFfxMSUYN",
  "key22": "3Fo6UZnLPxLZPtdLQProo86JJ9MApjtUv6rtXFvNm3XJbyMeqv3PKEDjFm2rnKae45SuzSdL7H9WJRPh9phJUQZx",
  "key23": "1HTb9RuGAQqc5KkgnGve26nbvGWXKGBXHPvvHyvQ2KM4M9TpMePtHj5ythXUPqwaCNWQciRKs8hXX286mjsuQBT",
  "key24": "4tRifFfWAvH8af2LWGcwDW7uTfPv7Tj443v8WJGY8htYBiTd832KR753JwcCrmtHS4nGwUiUQuCrssiWRAehgpU8",
  "key25": "39wkaQG3EAZ14S89c7UxWacrvoagk1GMb8R1z8gBrLfxSQGkiUanqR2in7HXnzs6qmKjfXpmwrsFKpMuVAs6gNxW",
  "key26": "toRVMc3Ep5jSwnV8Ypes7CF4Ap22eFtsKTzzXLX5m9mQiP3KD2X9cmLhob2HXmdEmPYaZTYcmQaNc2uhDAH3XD4",
  "key27": "52xUhHa1hKyyi39W71Bx48wHpyetthvXcQJVV7DM3CLA1sqEuwbyadwjg1mnHNL9qj8BKERbwALNr1WS7C9HoDnP",
  "key28": "3fkoeQjsnPBFv7V3y4pLB6hPhEisLGoHgeniMRHgG2dZeucqQVzFCpYpE6FVgKke1e6HMgAvGz1r1qyNhRqytsDg",
  "key29": "3TnLxRrzpPUX7wgVC8G7LcuMiYQQuSpj4Gr6ZtCKYouX25GfQqGxUViod4BAAEXRZrZbTJTWJwgv72NA2zzGW5aH",
  "key30": "4W3s4LAbfWTW8ooxRwgJEb9cVQmLGak51nHTEdgHHQLRrzALsc7kNqiZYR2HNZ8i2Z8RaQp9W2eWrTQBwoJn8CRA",
  "key31": "66SNLvxQdL9qaC4NFrJJghG4o3ZF14wn9Koh1eMKKNKQd3aAjS8TNnipj4G7DdAgG35EcEeNNEkb73kCx1B1g1Vy",
  "key32": "44RvMFzK28wZGXBfANYkKurC4tMoiwDeGB8cgjNv7FoLhvy56cPc736N1zX4MSZZm2Mbe3SWT55aAm4SMzCq2aLc"
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
