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
    "547yZziYqKKQuXr6EKvT94Rg1PWAooQwJ5HLEeTvfJTTt51vjU89zsPVWre3CPCnLaHwJbepev5WP4xgSQyTwiyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ojqPAv6kfsLhefmgrkq3i7nxZrdfW64ZpWWr44b8muL6SigujETyoLSeBZ2bXCYSEyYnjFGPzZSG7dK3ZQDaQM",
  "key1": "4CU6bkNqefmjsDcLVU9f152QcoJ8CcgeJCsKNfwKCidGJme6fmopS1AAFGZZHjJq2BucCaatWa4YtnSezwmJcVBL",
  "key2": "gneLJF5XrmcFPiXmVxn6BoQuvhu937XpHPyiACdKXNHev8vMDYnzX7vM9GkWcrioBUbxaov6K6YeAqJo8KfnFB7",
  "key3": "48f21eML2vNWMaTGUio7odzpGZ4eJPCEUgys9M92zsdczWnVsWLqYXxpp7ye8V8tRWDYhwQrhXWBAKKNVM2crXGx",
  "key4": "2PGBju9KCkMRSEgFtMkqCruGQnuugzgXavGNrH8yePJZ21qmSWJ84Sx5w5imCaxapC22d9iust9xV2kwwTpGUvuf",
  "key5": "5f1RXyeU8MMKiPpCD854WxeBzUhTaktUShphqvkM21Rw5pDd2ywLwH8sve1CcFwStbWfKZ1tXqy7DCAGeSFDFSef",
  "key6": "2isR1gvv7XUbGGqviPJ533TebPhW7cRQJqZsuZesyodXetBs6ctYkHJEJHc9mzAUnXiMYy5DnaFo7GuoQd6ivZ2H",
  "key7": "3aAnYDqE834L9Q1h7avrGi6ecqjgkYspkQKzKYCZeZFVujQFQ88cbcUitGB1h1WD4EjdEqjWt1V4ZYv9FKcjyw8Z",
  "key8": "5Z7RMAeCuiQPau8GDWkQ75SMi69XpiB6ew1tCNVedjo3WPeyXgNsutH9UQosd5GiCEWS9CheCmJB8d1QXVGkaXAp",
  "key9": "59SHUsB2wzesDnYLPoTsALet5GH1i4vUzTzEky9LPvPUgUPRDGZvuFbYmqZWvkDCtyhqvips2CxacUhQXfvDW3tD",
  "key10": "jfV7awW6qvxmSwPQ8PxWrbgdxZhF2f5L5viXvxWWRGpAzXsyfHYQHvj5T81zB7aF251xMrkibBUJ7qYAyP2uBi8",
  "key11": "3s4KErm9QAAY8WZgJ2AYQPLU14C9cRwtqq5eeGvQjP7GxUnj1DvLtEWPLMe1Wmg6Kwb5WCvdz9jdD55gNCJ9RRBS",
  "key12": "aHvwnLisnutfoPhWbeGfaihtJqGFd3TuYCJSRiWqjNs6AbjDRphYtaQ6RDetHQRnuJ1hCcQjdZse9ZnNaAV2AND",
  "key13": "5BEH1Cw8ZmTfMiZSZRxG4MJnEEZU7Xpsq3ntxXr1ETfzH5cYgLkqQdVqrCSBZEMMoB9emaMc8odjvjUBSB7z1U1F",
  "key14": "GWNGH3Q1vvL8GKqaQNj2kBz7RBtmktK2VxznR86ZuuKCxNfFsfEyGXZGib1wUaWZcStoayBoyebWrE3dK29ndDp",
  "key15": "5qQF4SacF27aXfVnRF155d4vk35YLg4AXRcPZ9g76VBT1DsTMeZZGPyjzjGrjspM1Z9s8azCXWUXX6uxRLx4vnaz",
  "key16": "4yCdwyf12cavTwsxtEuppwsDrMVbvBfRybmx9nTutM4V12VvQJiAbfjynLjVkW8VPFnXs4gNJvZXfmNdhxG4fdeK",
  "key17": "EG1WghTg252SVEP5xW7C9CtVGdgQRCjVLJTXXnSSNmf36rnFvpSqAJuJsTW68bwGot8Ymf1DZvuGbNTZZq1wENz",
  "key18": "5iGMfuTW7S5b4U4PW6TM3WPeYjKLnw4Emek3UUPRHHtT6petNBwkLzpGSsvqYPXSjS3y8k6kfyS93jsj9CWzTNHb",
  "key19": "3XFGm97BDFom1G3DTgUYPNXJ5qNQsBDXpttbuXLs4ZVcDbrjTcbjLZSKjSez1F7BPvEr9u7LnvAvNvsHkyFFwE84",
  "key20": "5872pYMU8Xw61SMUr4jP3kTy4LLLUAGpJfGAQYoTtV957gRs5tvFoL1qDMkVLKA6XB2unGz7m5nt8bRQrXyxrh2X",
  "key21": "5tacGueQrXYqyTw4ffXgbNf7jGrbF19mSFh1cm3W2L7YovjSt3pyuYj2SAJUFHewR3NejPRuovQCGDt5vdWqdrpc",
  "key22": "29yEEoYBT3n42MEMnwq1AWQSfyqvmLqombQNVtnL7FPXbuHmYXpLjT3Ug55jkyTsH1jSheAN8rk1hWcA1AvxUqkU",
  "key23": "3mCnYw1P2cvHsMUD33RBKMVTQzpWrYBfx4wKbE3BepUrAyD3iLLUXsvAosbSJtDS3VrmzkqbFUQv4sTFUHUGkFJX",
  "key24": "3qh1b2StLRfWMPrpatQ6Spr5KBW7CBhCkGoFuCL5KMLuL4GG3XXB8SoySffB8UjpgBdnYHa5tUjBzqWJ9Qivu8Tz",
  "key25": "E57DcPR7i8q3JpXk79StCcUJh3Zn2mGffjSkLqkm3wteVqpknUMc2UzcfLCiKY36b8mKeeetx6gpfpjCNiMjw3Z",
  "key26": "2CE4tynS5nYFyZXbMcaFCGNzg31JcyeFe4uMnebn4NJuKwYkhUyeq3FyxDrdPRfRhd6xPP1MTfsAjy9qaPxvGyZu",
  "key27": "4MGJ6kHCbWfovnJvRjKkMx6L6AXh8rgDgBxJW4jmhALSHdwtdmZvW4uN1Nh6QueGfGpid527Z5BXPaTRKdipagxX"
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
