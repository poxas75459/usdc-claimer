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
    "36mCeE5p73zttKzjT5EmwEZjqrX34T4GVuEHtetkPgyK2SyExKoLGGg8vCqvn5eGjrtS7ouKJJL9W67fi36XzTQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PCN4BBpBQKuKRycaFdk79vYk4yQzhWtgPDRDDqtqcFUYAXGzRoijsRWeRC3QPVyWVBSxdR2Aj4epFTUAsDAGc7s",
  "key1": "2nCXrmSHXngiP1SR7zc5jWCtQjgTYJstj8K67pz46CLT4Aspp29nfxxsYVagH7LcyCXJ2Q7D4YG6LxLY24eudYRb",
  "key2": "2vZE8QKF8aakDGF5yaCcysR6VPD1WMBaPeekrLhmGjUtjwHwJpC82isypfke6DJrvyYSkTkksCjnKRXMVZTow5z",
  "key3": "1ymuSo1qQxZE4drWpNBnUTtsL7sov4MNQBYTYAQATp5Mp4B4yB8FF8eNnkcCUhTY2AEQuPuCDVvPU1XiLJVYDrE",
  "key4": "2AvKkvgV2wwBsVwtiGVnfn5Gd2HnS7g5qZ9uzUC7uxiFM5fbPKTC54q4NDsoWczKu6vgqTW4NMty8Myb6QEenw5X",
  "key5": "5nbr1aCuPFyufBPY5n3NcPfhUqEAJ9SEQzTey5z2C6Wwt3cemUT3n4oQP85nwfL1ZuJQt26BnwxG63gegv5Rku2T",
  "key6": "5BQzt3Q2tdvGptrHeCm1gtr1XkYHk8hgiNVP3BjDaEdkJEk8aJvzZyUCRcxbvTaaNbEqpGZbwvdb2JG9cW3H1g2f",
  "key7": "4FENQkK4rmQAnMMyeS2GngE8zEJXuntSn3NNA5YSkTK8ibWUg8AiLrbs5iiGdiC3dCDLFCZzWiQ55tLRivZjTvou",
  "key8": "2uiLsVsm9Mvoe9Xa6UgJiirqxMD1rykLqxPSBpUGHopAaxCM7JKE2oAyPQPZQL6jsMEVRVFefEXrqQVpTrYJfy2r",
  "key9": "4b6EGcn4PAFmHb3GTxAva4FSiJTmJqb7PNENYBahYaCcVjtFTSy5gNcuUYLLS8Hv47zX8XCqeRZ3cZ6Ywid2Jr4L",
  "key10": "5TYSR6d6H6u25BwMU5zZK6YFQqDJ6g4Cry4t2aygb3mxZvFjr4BCcpnqBQkCxzkWYrySZWxZzcQJsA4TgHg2UBm6",
  "key11": "4YsRngdJvkVTgzaVYLkAXzLwoVcXhnXnC4Z9ggqEkJ4QMVeBGzW33VRpJbwQ2pioHtTxUXJsiQs1J5yg2FKhoZgC",
  "key12": "4WuTJn3ayLmSy62yZZQocf6R5ivCd7xTiHFTySU1xzpDj1qknSboEwSoLUXDDxxqZg29QmmLFpT9FpqyyXv5BoYh",
  "key13": "22AddfP7PEmMRZXFvvVqAucWUsbitTBfZy222eNBBWxetErDUXwChATW76cSqkTzYCrYHSLTrrBLpGJws59yUcyM",
  "key14": "37AAoHaLN5KpUmuRu9R6HeQpamCkxSS9QSfvXLAP9AwzHtf4Gg3951iHnK5d6PmpgsmHAoeWLN8nWzsSb8mcLYQW",
  "key15": "4KiSnLjK4CgrJGNVrPKhD7ioTGXPUjoGmAZSe8opR6uaBYw14qLwBJcJzcYfQLY1AvzAyzc4iM13hEouBmRCcHhf",
  "key16": "3vHsYVihE1ZnVBpKDLABwxC47BragrosVLCduFitmiXTKEB7s9UChdCeujjxhe5yWLuCqfhmYNzsovRgEdUmsNkb",
  "key17": "2a68AL2jX4MHWYzptBtyV7aG8hstmYvhoLhuP1cRJ4X9mHhVDwJRxnJ2nLZMCSYnZriQFMAAohN6ydUYfGEbX4v6",
  "key18": "2dQpC2BrtrJpfDXrWKxVsReZ2ArGLYuLBtA6eYGAXkDmbtHZ22dQm2oXdSehUiwUAh3PzadwoaMzXJAviagqacyJ",
  "key19": "5Xh5LxbNUzbrYU2BYeUcz8Ca1xHX6Cod4ChrgHZvvBQBxsXSdisEfZTxgkK5fmmekXoRdAcSzvwDJN2FZEUHLb7B",
  "key20": "21XzxjUtDunUx3Y3FGz8vBRkJH81dq7Xoqpr5xmCgFqciZuFwvY3HKxAz8wUeVhfetWSh5oxghKKSZMyH6fofqCe",
  "key21": "3JZRJ4tUVtfgmKGDxLuSbeG4iQDGsQVy1FT4VruH7pCuFwVHY93oW4i8hF5h162eLyhV7mvkq83dw7nEgHBcmdhX",
  "key22": "4kQmTs25LH82L6FSsepBBHJL6PZLFg2Mg21derzZWznZQkr6io7tCQBpoBFPm1saFwUcPuNoaqhskBG9hayDS142",
  "key23": "faCAjRox2ncoDNvk7syQWwnHjhCGMXHvGpU3YmhnX4RvFpzBTpwUE8GwwrMZjp5pYFptb6512LpUw7yh8pr8HhT",
  "key24": "58ue39CagoVTaMmcdEUkiasoFVVd9dgshrCJzeYXhqwamKLSbV25dpJK3o6HkTEE6cqg7KDJiWpVBJwBqSjewMtY",
  "key25": "5tercxRoT3MziL1tstvSs9hCD1Yj9bkW2faJrRpALid8NYPWxj4ZWfLaSZdjNX58Bhz5teTUmQyNVN1pDQRZUYQU",
  "key26": "2mjFUSyHjSU9wDzMPUvvHkRpY7kkLXPFJWtF7i78gvAycjG14ME7iRzNC1tEM57HeTqRDzRYCYNnocyvqVYLpd1F",
  "key27": "4CSKpo6secCVTWqXkbFRYD6dw9BrkSF9T7zrdUtmU7S2aeY8tNaAaLwWeVyid1fFPKGC5iWUmP9jkVbiwQcQQCi9",
  "key28": "5bRYddyAX8hUaRA7Me2vAsTP5hgQTDBRqrLj84yFGtRXqyAfrtGa8qnkJ4DxRR9dcjcJNbsAzm2xRUm1c5h5SVG7",
  "key29": "2grc3iqo18BVx1d8BHUT3Mwpcwa64c1fBJE3FTFgByG5GKCkNXJiFtQtmwHYLCJwBVBGYfGjPkhi61ndQSMVtCes",
  "key30": "2kdKDCiwjgVLcxxrwBabu29x44B5Cn7mMH4q4VX9BJ25Ee9jXwxqtjVsmsRSaA5Fi75AjzsUkwkLBUcTP2VnYez6",
  "key31": "5aGoxQDWBqxkftcD7GGEjHXQ97VzgkqF5WDqQeckxdaZtVUGmSq6dRdaTASa35u8Qs1ViFpT46JZEoXSqXzGe37j",
  "key32": "53ntBh182m8thUcNUSpUJt6pThKt6rkQxbSNbNVDzdMrC8k2VAhqcuEKgPaBX1BqbZ7gnKeh8ePv7x86osXySCY"
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
