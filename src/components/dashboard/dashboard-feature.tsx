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
    "4FP2wFEy9s3x3NMbuu4nQATvLU8podQCUvDWCnBzJSpRScXvC3K6oqcD29QosKNCWSvHZywq2wPYsXdj2Xz7xxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aSb2iXiVJfARkQyhFGYBUEuCrxWUAHcahULzxQvoppV5uWo7nxQ7cpAiAxQ85YwW97Uqe4ZukbgG8KpPz9BcajN",
  "key1": "5wKKAvsDY41drQVtMzkuV6pqxmVFGkMqwhtexr3mSwZ9epn4dseH4pwXq45CaT1z71Ptj4hZuZZekRgnG1Zsz7oC",
  "key2": "4Zp5VZZwEgwBFf2oijuWJGUNRaWy8mjx5DUsrtzvGwjUG9ryYFjMN2c5noHXLAw4p2KyVPDBWZu7uRapEGJk6AHy",
  "key3": "2FqWgx1i43u4BwkYm7GshxE7NSy96qntJSi6EBFSfhJsMcvbrY5TpfkmKNTkZTd5NGLfKw9LVyHwKcJBbFaBe6y",
  "key4": "38GUHwB3ByCXLc58avo4QQfBydvVSiHUwbxmHc7fcFkKsaaqiPhaTMGz8LvGZ35EBLfmtxuyeTYzXyss2xxU1aHE",
  "key5": "5meFRcQRv4PkPi5zPDTrJbvaJ69PvuEe69Mt6y9fqmknwikcjGpLgGRSwPCQtijPjQDzFUzy8JCzP8xpXUqNdrnC",
  "key6": "49vMMF63BCDmkv1mneYAsJnBdw4uBMGBu2RRXSLP917mqnZpoAdFFQVRbrcZWLiTawDzUPyvCCFfpD5iBcJXwJsV",
  "key7": "61JDxeRP6YQPkbBV7QTj9Ujnv7sya1CqB1Ui1xpCGdd9Abe7BqRsm5s2ThUxzFJbVCi2mq2vo1QynrpzLW1VYdME",
  "key8": "5ZNerWevHYGrHUnUjDxKLSD118RckQdmmUjwrmsJG9r4xEcdCfBRwUKi5LFXJy2SjkjS8kWHsKsyJyiesCcGNhzj",
  "key9": "3g49MDNGqUJRbJ6n5qH33Q58G4TYCS54X8PHQVFqpmHGFQkwMo24PkJq8k7FZByHxsb2sw3x6itrB9vc7S8UNrax",
  "key10": "5deE7PTwqqz2EL79tcsKPgutR1xzxthayC1ssyVzB8fEEwsTJu87H6majx4cn6CGoTQgbtp74EjEGDpvm3aVAHDP",
  "key11": "2R3mNzxGw7QgBr4iASjAhUxuxif935teFAbRVZvofDReHEnMPsHjgMd1CbdnHnWrChCv43fF12GsuekEjvjQdYPB",
  "key12": "5WFHGeXVVmqF4VHWohvrXsUvJJa9V1ahspneYUQ54WhMMXXGhEBYQ7JJv3A6QG9vubGg7nA5CrVKjokyG62WZBPs",
  "key13": "2Bi7kwRYDKMXtuGz3NwfmWsxQUTEFQSVJacPTerh8wwLaPyKcQKTbCXGMscc17Auwy3zRLz3fouk5AAPikdWovSE",
  "key14": "5f88gNztR55Aq7i3VF9Jv6TnJFnweyyoZRhFffpseYRvUNprKbV2tnpjSCX4XXE8JJ3L5EyL19PF2j33dcKMht1D",
  "key15": "4Mupftt716ZM5vCqzY3pXcvay9zCb9Q38bc9ENKu8Hd8UMrBUdAapesxQbegtrPzwhCyP3diiXduK86jZ9gwp8uV",
  "key16": "4xFHUkfirbJStZiJ3r6xiXGLcdKY7sjfSMrNu8oKA15V4Rn8j5vsZu761XEnMa8xcDnWrA1T5HGQRab5gkx72nzE",
  "key17": "4HH2hXj76ywW5nj2qs44QGSeFgvsicSf9pa8WJmgYCdQ4JRa2KJZwCVVr2z4bLVX6hZPNdev5KF5qBHZqcXArct3",
  "key18": "JqDufphaVbcQiRTV5ukkKy8VYD8wJxNQzfrzhjiaCR7HSterMAnGk2uTcsVBF721se3TFW1C2MfYTbKqMLGYCx4",
  "key19": "5KRwBC8UphCqycejq2iMw1PbWGYFZsJoXyQeB4jXwDJPUM3KUX7UDsxCKNVk5BpD7B7i5NFAw98ySkBoAhW7CS3o",
  "key20": "4pBkDBgmF2Qu1wCn2x26U4Fh5LMc5n71BbN8nDc2wDBtPSYk5gD42u87mNZut4LBnUiC1aEsVyprGeCs1NM1vf5R",
  "key21": "4tzu9PzH1ZQHLA7QNB42vNGz9hZ2JjkysGwYWc9owVjoGarYQ9hjYeTLY6kjBpRjYXsdafZNQtzm3kgAUyW54gep",
  "key22": "4SfQzwPHemnNuqWJ4AbxPupZE14fKBWxyZ1dC8LTkqhQYZLRppZEHtyVsY4Qbt8wSeRrFk1dQw2y4etu7a3tCt5Z",
  "key23": "2Svzu65r62yYbR9RgVjcFmgX5vsLn9qM4CXp2nFywCa2KyBLb8kE27KHXFxcbKdCJhTWJvq2mgj3UQXM8am8vQJW",
  "key24": "3J2tGXJ3RFbPayXWbwPsQBb58EXSasAhXVA2ZVK76QLeU4Fwws3WewoXRiQxUSXE7Cvk6MzjmvPH5ePxoyxAKr37",
  "key25": "4rKRGfFT4aZSBK9T7c4mVfkwykeR8eEEKweHTmiUBsJeXUKsSkuJmeSLKEFh99kwK3YkUqPek5YKavDmHwHr7DtT",
  "key26": "4URDX1JNSNsiZqAuKTPp9fanJNKKy2qcLHKepC3Qf5cW4E1NXFvaG5x2fBKFTdjC4cz1zz3K4Yk8WpdgNCCVc6fF",
  "key27": "2yCvUHiR8u8mQocqVUUBKTmePsRPSAd3QtEW6ULT6coUE4iGqPuqKanrtVUdSsU6JUt6iyR2E1YykqWa9sh9AxcL",
  "key28": "SMn5LsJpeWHZxUqdvqLpR6fvbnBDw5hTRnQeVqHAu8LzRLEmy1Xxyf2UEtrwx2uv4gHYZDE8m3H61SoYrCZpYd6"
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
