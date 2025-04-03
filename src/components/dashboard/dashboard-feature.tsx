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
    "3uHzretJeeZeBDzWcZqr1BBgUb1ucPRthqMbaV1vTftHgRD3zntzzbpNoNJxi396jrgnBF1Xc2V6MAn7SHdyB1jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q2aRzkoqwFzaiCcuEJxPhwVWipvFmuVjtZNsgvbvfLAK3bmi7Wqd2tkUv5gkhVRxNzWvxV3reYKiCPGahr5fBxc",
  "key1": "5Xg6fynWRVFG5NWkmLANZTkKSmtR6Y8F59GEmUF8K2GkpmgMmHW3JoKs2sqGbaF4g4youf1xAB7mBm6bBsK8ZjBe",
  "key2": "3wapQsfnYgJ52ekv5etstUKnYr3GeHDrVsT2nbRBoAvcCdAQxzvzubSREqkvMuYqyY7ZRcnL9oBqvAktx2nXpcd9",
  "key3": "3bHoNYYSmDb89pJyzh3p5KvFpnGp3p9qiHBqKsDh1hCgjGDLqoQWTQyis4qSHv9gjJvs8czSYjGSTRHTk9Bg7kwz",
  "key4": "3K1dLFxLNjn3ZPxLGQmuuYNMRDSDFdBmeZAHLAobj3icmAijAz5vKvKQpwKnXSrcBWxQehtWwPXPnDmx1wsm3UKL",
  "key5": "4NaoUe4nzBTa8F1DzCUdZgJLKgfdhVmHQ3nx3Lb143bnVGquZ5SYmE9GX9JZ3x4QzxN2DTVB8PYs1rHiJr6o11xZ",
  "key6": "Q14HXky9BgwSi4QKMgzktATLpoqh8iQ39ZsYbQ7o43JCcJ9hFcc8XXdnDBzvhQU18C9RcM96mPqgtLw4Q1rPD7p",
  "key7": "2ZVJ5QgskRqp5uZpa7HX98ZnkbX6CUFcBN5HTYDDtgkd4uNt8xZ65DdyBEaymVsb7WSjKQfbpF96sDhUvjbdpbGt",
  "key8": "4iikB34buNoY2XHYBGEB181As5vhbBgiJ7KdVqR2uwioBb6ZnaT7LC8wLgazc8pkXmvx6yGJS5q7oAb2HkzyU38j",
  "key9": "2agNLEFrTitUXCPxA2yyRj19xot3GqfDE6DHsZN4jGeX9cJBLo49NMDegC11hkCiM85LaG9kdjNinw1vNHEqYE7Z",
  "key10": "SXj6rPn6uQD8gii7w95sWt9JttuRgBo8XyrLcPbxE17kQ4wYZhfvurHQk1FMn3hbPjvPaKRXc5SiktkdDp6PMKf",
  "key11": "2dFRmQcCNmHNto1SXuNHUPHXJodnujAFdwk8CJMLCCYeWcWBxwvhwhn2nGzbPG4Dg66kpV5cw36MTmrWf6k6oW88",
  "key12": "66JqtFi9F4WpCuBikaSxj7W4sh6dShcXt8mgiZCt5FNqqj2HoQ1nufFC3oeYJBMHAvyrUA9cfPACcXz6887TpaqR",
  "key13": "3ghMVjQK4KS9CS7NT3H5ZZynJtJKSa5jksc8L5kxncfMNUsZ7DAeP8y1BfQATvbg1cj9oxxE3rjP644Chpyewhcq",
  "key14": "2PsQheMmyqsvc3bqNHW83wkANgMFAhEfZMWT5kLcFhu3KS68sMvKEQ88BzKWaNATkdte9vxGEUvPWshEP5f4dxZb",
  "key15": "3jGx3SR62qPVdKUoWa1mrm6mT361JjvKT4Vmkpgnd8VhYZ2LjcbBWSQXXND8VtENK2JaGSv8Gc6a37GYC6ArNGnE",
  "key16": "5k1LA4HcmFz5MR8Jm7n8YqZThFEnUepFLCQhrRpS59hpXBjdDkL4bSpt44etEeS4rgEVUUQZbtQFdjYo96rAJchw",
  "key17": "3To4XSsK8JBbtzgqA8PXdBhZjq3XCUYMqhHGZH8ZSyYds7sdTy3cu9tGd3XZ7tPHK7AeCweARz6enAAjiL8oq84d",
  "key18": "4xDKpULSk7f9SeKmicDC3JvW3ACEFBoUotVDnGRTZGjKPWjhvb8uE2s2qd5kAP2JohAXqtcEj7PAfNPPkmNr2Y19",
  "key19": "QhxEJuzKTfqQ55PxWe8HKS4UdHDbZHK7ueJDKqC9i8JJxfDdDwUEuThES3LdUC8TUje5u1C56ScwzkWhxTyRjMC",
  "key20": "59jTmfze7XqErxvANKeaYoZhLSAFfDe1bpWAuFhLsh4kb6ww4RdZLWkb7Xb5GZPSYqeidPQDB7HouwE48GdyLfJP",
  "key21": "4EGnVuCtCv929mCXWyyvCYMTxbrSMNxvvazcjpoF6QxhCeRCfwbnQtuE4jfgmh86K8fWQ51y8HjniUwdJjwd3N5B",
  "key22": "5mSVKKmkMxkoGX3933JGfnu17W7Y9e4nRiPbaWZSjsQJDaoTVmzB5vc4UZNuVyzeD34BPKXfkjPAMPTmUrfNQkKU",
  "key23": "2XdTMy8BeHFaFKqQskdH4jyZ8soqpzDraG3mtFY1QSJFpbeQD81CJCsz2E1YcNQGWs4GKK2EfJNxkEt87AN3ZbaA",
  "key24": "G3Yk9fAgeERATTjHTB77g59HuFuesSmZbzcNZPKBvuHYGNLAorEoBfgdmXojkEZ3FxvwNMEAR5b3R5HYUSXdihL",
  "key25": "QyjPDpa6KqGKM6E3bKGVReLSAzTHHywpga3A4Dqy4YXuJwQQWLovzzrA85CGGYmD7CVAuBPd6nT6t1bEsGkQsbZ",
  "key26": "55j3st9xwk8JPKQK2iYGvnu2dPGTGkqn4HyEjWKnbh6o6PwdN5UsKrdugV3Wabq9dxDKAefBRyXPy3exmoqr8eM6"
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
