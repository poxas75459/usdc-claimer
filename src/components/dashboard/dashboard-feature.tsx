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
    "43JyKLcb2bMchT2t4SAANi92HWKmjvWW33eBvRX9bhBSXVRHvdyrHK48Vm4oPHwJ6nZJo2ELN8Nmotei86ouraTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LohbSTRxb97M3e8QQsfPn6AdDs6bhpuWRqFNu2REvDaaSM4BAA9H4vFRPjcsqtB4oEPaixVMGFjhE1zrKenBzff",
  "key1": "5ZGB6mCoA2HNAiMhX9o3dSrNM8c2R6LqcpVepo6tzBJAFvgybBECCAdQQjiNRkTFmhAMFCwQAPr3iVcRPcqJMSDQ",
  "key2": "3MM49engAZvypbkgEgd1WSW7Z691pQTaZRuW9t44m7ZfeFtDWAYajBv2qzswz67NLBgRoPNtSMASVQCCu3WhND2S",
  "key3": "4Ghjvev3HK1P2cG2972kmpwyAvSebUAuZHxKC8EcwagRNCa7da7nPSLBbBwyXiECSRzgKpZmdoUPdLiZ9PCj1bDv",
  "key4": "4FmD6fJx7W74uKqyQJxFYWDCgAcJNMMpszSBfNZuyBpPmvPkcq7GcqKKNz5XmiUxbNez2q4PN8ptvXKGJqQvNDmn",
  "key5": "2iTr59SEdXKe7th9TLoo1pwJxD5bbVndGpEzZirX9LqZLrqWSYSuPe8DRqcMJ3uSqxotqa2cJE5hGseJAYtd84tm",
  "key6": "2e4Nhow9JBrHmA8KyzLevwMGsJrvnbHYHR9hFFz8iEoErqJKRCUpWfJeF5fKkx8rHqQgnf4LKvPyZm9zspdx4LLX",
  "key7": "3VemKL5u11aKdtURGtHKLacwWX6ENWHf1XZWgNZCNrJ7pK9HktRX3LcAHypzRCCEtKsp13MU8MpJVaFJqXgrnC6Y",
  "key8": "2B1S84F1oUhuTCiJ6Z8EmyLHpWYnV1Qo2MApYr2eDxCtVg5ND9cQRK9LL5ZXUXjnrCUysFkTPJMPKUWAWz9kD5Mt",
  "key9": "3eLp6nZfMwjQ6Nw48KpBr49ZX5LyhsTn5KwE8eR2YWeZHkQNpX8vYcMveBBfRpdypFwookDqBRnseCZF9KRBgCR3",
  "key10": "2iLZ7wKcHDU9zBhe4cZk7vsda111b12BbN3aNzUMpGzEkMknDPhHV8Wd4o6DuY4coPdaa3xeQsyaRFKaW5nWEpaD",
  "key11": "3Gt41i2pFCSH8B1aE4veyxf2o8A61r2QryPhC5TKynDa1254kZi1wNMzkjio8Yyu4Tvx9LrLwG4WayFGKCGZSNwT",
  "key12": "2QAWK7EvjBimbUpuCf8qFoeKzYQuVoEkgqMd6f1iXdUniLE4dLNcHzMFf44LZLU3c9ba7p5eqPpgsNB11jBApXws",
  "key13": "53YeaxkhAKW3kXFH75KTrFdQ6cXnC6tNVgnuxCfL7oexpYksxtLVqaoq1KxpoEnfwuFYg5pJbL5zx6x5YSsY32JG",
  "key14": "ZKrLYLNbJPqvLqK9UQd6RxTjW4vcyD3EFuFBqxEzN7DiBsYN9GqqmDMucBgXYWkwKTWxbzSRMjJnwAEAGuqfgMH",
  "key15": "5CRVnGsigB5PzgLUGumMN4YfH8iGX1SYJdhGzFEYpuPi5YNLSgtWE992vtJ9gJvbSRNzAeSJXW3ytD2Ypnk6SxvY",
  "key16": "2hTPiUGmLcHQy3ke7RgzPaaArfcXJbpsj87x8va8xg8kt5SvbXjaps5ndFXXWJunyx2n9aCQfCouU7pSgNQDPk8T",
  "key17": "4r7ELrvkzg4ApZZJFAuyVbYuVZzGxvvdskMy2ZEsYaQwt9qjNQxytY1sfydSfoF2D8jE4HnSKoLA9a4bHd8K6CFm",
  "key18": "52B5NdXm75ky2E4S4MnKAn417ysRudCjfSoEYjkWKP1EPH5bw6u9MBxZWguQbSevQYET98ocdwfKjAyAXAwyQRhn",
  "key19": "58xn4W6uid5sG9yPA1dm6P9hMuEVwsvoE9qWhJJPqqzKP2JcAWeUMjtKUeEV9kyCfmDarwFvC24xyJuYQCNNmNbT",
  "key20": "38AKRj9N7TnUkferwauuvdUHYrEGEdF8m6CHBzprvwbrPiUJRd9gDERXgPgMvg9gR2xDHGZiztYJbdEqEYeSFKsg",
  "key21": "3MWe26HobxqNZHSVtUz1Xkyp23CuPGB5QPx2LYMnao5b9N94QUyDUi5VXHTJfAQX2r7AHxZh4nndYxVaaRd4w5ZX",
  "key22": "622ZR4JwkvFuxKNAU8iRT8wuvQZ9chxd7NWxgVmySRZagmv9KMHSQyBDBBbrJ5hgA9dVtK4HLyDbk3nJr4gcLhof",
  "key23": "2fXxdM8gYgZffStWfsV1LxtXZgDUx91N4HwWcberP2x6mW5ozfChmex9K4QJdaoB1pdyWTG97MyvukQ2wozyYqxX",
  "key24": "LP3axXRpYjSk33SbAJ8Uca23B35Cp8LyPuwfDnShTR5G1i4Rt7FXrpcKeCxU6PCPaZKho6JJbgBe1paRNuZK1rL",
  "key25": "39QNE5fLpaG9mL9QxVP2kkjkHSPZyRVdJwPJDbxF7sGaWEXoAMEser1jyL2RVGggvEBjVgQau95yCJbp6PJye39j",
  "key26": "49G2y37TuTjxiuPxvfHh3MoTQBNjA5nNfppiTLbFadkTyJRgLDka2CgVrsbFFK57fC2joU149txuYwuqXXbgwjNG"
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
