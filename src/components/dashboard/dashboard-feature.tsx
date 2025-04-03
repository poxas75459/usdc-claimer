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
    "5UMWhRTf1cb2w7BteD1mB4yNFu6UTvz2h1L5nzV9Kz5pL6N4wHkZNKoLMAEejx1ZnrpNctUoBKKAZUpfmLiMib9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U1Cdgh8vW5tWBgiPHqyfmfym9m3LDzx9565NTSUB5twjjHFvjJz82sL6D9822VsfQdYhgZoKT29TWkZUPwkogdZ",
  "key1": "Uf1tCLJX1rR7dUo7hAn1pUHszHbRgLyqQ2LLmXcTnBZJzhYThAcdUEL43U4MwdmyYkvMNQWdgGYf2ZP1VD5j3dU",
  "key2": "3jnKagHWNwgTFuxwgbexKUaP4LuEHdEzvcKHzTSCQmYNQDfMac6NUS7Sb966FAVBSNA1QXri51D33Kzi5UMRiYqk",
  "key3": "2unEvEdoR2LZXrF7Sx1GJqbTqTCYWmKh5puXaq37dcd5WYZJygbb4jyJ7wJrqBdHy3qxXoFC6Qdh7njXGuty4mrh",
  "key4": "4xov7ewjCjdNuDKdYxsDZk9CcAKVGKe5rwBEFgrDebwk7GfZd7bUfcxPs7bUqVMpi95vohCCb65gR6WMdKyYmKPL",
  "key5": "55U7wVqGs31JKEGbrrj1vjKNq6jndG9z6b5A6weN6Pjzz2wx7zDQsmekpaWCPHf2hFienZAoCTN1SkiyF3YEy5wD",
  "key6": "4EgVgUiKJihnGv6NkrVn5xXePtxxAeFAj4Sufix4RLhq124CEQexfnCxfiZzEo3T2FpoTomATyB9CLKZ7g7sLdtk",
  "key7": "3nokUh3t6YHbSvEFjL6TxhCqnr9JuQEeiuKe2djfQB3aGyqWT4wB2Nn3Yhrn9Tw7emdipqbjDeHCxDg2kLNiqhxW",
  "key8": "5jeR8XT3sbF6J1DwLdqYqjGAs8id35WgB513GZSkA1XnEHpjWPnQRyxziYqkkP3eNSXjiZ2wVCPr1BguMUhUVViv",
  "key9": "6FVPMfjeHXd7Ybt1g3LEoNhuQ535gd4tv7FhcJT7jnNJMnP1Jkbqo4J2DrKXZZ8dcdDr7ocjCK9DBiqfei7BQtm",
  "key10": "mFkPNTpePRoar2kLEnWyUYCgL2J1AjD1WxtBAwnTDLBLwU5SepLqTAc6Zd1guycrdDjzZta9wQWAbayCbHTg6oE",
  "key11": "qQuL3afPeqQ2cjihH3gu9tjmnHogfYg5jmtQRF66soZMctqh2xGNgdkZCZbYifn36GhxmEawe485QQFzQwXxvVP",
  "key12": "36axPodKBpB5zub7uH52FCfzQkcQiTrd3wnjP34V7mNZiVh1VNvN8Lc8AK91GxvvdM9pQKgk1FSbtBLocpwtQ7KY",
  "key13": "2bQbZZtyn99jknBfX7ba4kC36Ntv3TwqZ4RdfrR7cz13PAqAzGq2JSKXRY1fp9wyxApZgbkypxCQjMJshKVdg8We",
  "key14": "4AR8yYEUjCTe6Jfcv5i6KXwCFkzBNdq4zi1379fShagWYwTqG3bYKiy3eiRDX2t55oDefKxJJY8bavHy9sJkUqDY",
  "key15": "2uNsqEaWBe6xADsEqEGr13LwkDcJ5on7rSFKvjwYjmcfaAq7WJ3MnpShoqGswBhMyguMjRm2y5bJDyQLDhHef4AQ",
  "key16": "4PybR7EYH9fCPpNcUuaAPgjNzmoabwkrxvySng52rFvEDUk7akMsrXQF2RhLyKqPBxAEi8aiKFBNNYkgjDwSms1h",
  "key17": "4JBkzpCWyoRpHtXLGkncwLp3FVsEPHqd4akVL2GGkVqiqU8P7XJTTTYE2tRn6K4bPnGZUaspRESMBwdYGmtVPczx",
  "key18": "2BY8YPefnzL8kuLjZWuXhyCLneU3vpXooZM2ei3gptjZf7TnejvF3X3an7BhimwB3BJHHvjkQcWfpy343ykhsB8f",
  "key19": "4GQAgwCX6Vm4E9DWQJPTBcpqPHh5SMFeRMb9qLoPz3JQxBkApf6xDJboVxgP19i9ZErqfxWpKGNH3zSfSki8thrd",
  "key20": "3mhY4FJZR8wYHzZhRdQg26Ph6NterJYuUT1DW6t97g3TPPsGb3ZCAo6uD7CJNYXBaCvP9EMSraUb8a95SdrszG8r",
  "key21": "42uEDNzxh6TY92YzyodNwk2ah3TfpSYw8wYkSNNZg4S5U2dnVsfqPq9kuZeQiR9YrxRvKWSdYjCmGytVtAiZqM6p",
  "key22": "5fHv3cZwx4sevodJwF49shvKgfyy77HJjBVKvKLpUJrX94ETDcPn67PCGDv58iZqnaE7cBERK5fYW3dCDQp3Cjvf",
  "key23": "3kAUdGT3ud73hGQhtEUx9THuTVWDMSLkon5fdAKHGcP3Zo1NQuhwK1NFiPTw293vDqT3QSMizkjPqW3tPN3pwowh",
  "key24": "5JBrYJ9R4vieHTo6dEXz7PY4rdPR6K6d8sGpBbxWW1bq6ZGPTkYrWVC2NyGfUDxoJJ5ez9dg9Rmt73HX71SMqi7f",
  "key25": "2umwU4ogwBevB5J7Gyk37qiuh1L5tq6UjBRxs2TzR2DLZdiMBN77Jkj74B2X4AkQ7Zx57TXMxSHFFr3xmYS9KZfB",
  "key26": "3WiVAGyGexCAXPXoZP5QXpoSfJHVXmndTGVMbNvV2oGBFigme8UHFsCmtjNFsK3C9EyWgENaiLdr75nAxj2ajKVD",
  "key27": "4YHjDJjeR6KgqmuewSYD6BSSaXGVVqLuS4mdAyxBhTEVjm9fk5ghG6b1PQeXDdYENTob61ifHNDYrCLN79w8LfmN",
  "key28": "MZ19LqsJTZ91C2FWEDV42Kudrn18MEM14HPP9quJEw1ak8QMGnSfRZw7jvNexGobm1dLr6X5w1VcHm9mKEFJhpc",
  "key29": "4CW9KAyKjTd6y2aNLsP6BVCdLc1m8quherdCJ7qqVLicY5EniggMDfUqdzMR2ew4R6XJjKBp7KcF7VLcP2FXHgoo",
  "key30": "2JGG1GWi1FhqZoMJY1Dbr8drvZLoUqao31cDWivu8bqABXdjHgf2wucLzKsTeLZiN2EX8tWvMKAjdhURFwaa8v1x",
  "key31": "36CyrLDnNwUSAbe5VZkCFFc8Z2ZE8oW6ZTyZ5LNVuYj9B9oU1aHgLBnu6F9an2hKk3um5NQEn2JgbG4UTAKYFZQm",
  "key32": "2rTwe57KSmLhcz5EFbVKn1etj8FnRybRn4vG44nm99xLJQgwnk2xfYFDmdd5GYVcTf6qQwjQT7jiaXxPySUwAGck",
  "key33": "3MqsWCNwYGWaLdGZRTV4yvZvdiuN1a7XXhFwA3bSu3LdwkgQsPp9BW6f9pJsZDUfFkeEBxeEhDUNpakcwJ4iaYdq",
  "key34": "4atYVw3t4957ejBdjvZckjtxawzYvP8TPcuh4k5WJRorCsdjFeYMo2SbAB67EpekRMGL5KykjA1J3wUyx6HSyxe1"
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
