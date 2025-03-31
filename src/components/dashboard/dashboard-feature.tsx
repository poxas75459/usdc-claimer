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
    "4ZKD4KXA6ydZ1zsF3z4KfYMujhHArV9wUXMYxpeJofg3QRaJjJ41Mc6XELodXsanogyzGVrsGH9KeRVbJ6BxPu2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDEYwP74pZ84wGZnuNHzFcwwjd8WY5BYRnShJ8sKg81JDzEmyngnr6HR6jKzqeo5bz24wtZZMETUGvfSaw9seTG",
  "key1": "sgTH2PetL47umPqFPLGcQaTAgsYK9YT5cE4ExB6QmG3bngJwDr4kMEuEjQt4rERuNTtL1fXTwZXuHsWSZg4ntdN",
  "key2": "51P4qLkqT4cMwnYGvW9TFj96cSTbGq6v6nAkR13UXqZzWEwfxzewrr5KWs3bV6C61Lqg1FUt4fBMgGbqPN8G7jCz",
  "key3": "4yMgBgvan2Wrbi9Duumej2A85tX7LjamYsc4D3GQUKF3Kkib2yXd1GL9u2au7g7wwBce8kQ7s8fFyC29L4xeki1z",
  "key4": "3Tc6mVrcSpcSbTvK7XaqsWaYgnHcasR4rpWEw572GxAJLyqCXvW9yGcnL3Wu2Ez8jVrtJ94XTybqG3jmExj3ponY",
  "key5": "3EWPDrvBRqHCXZMMTEbZwxTsjaEvP6qk6oBAd9aYs9gwPjYYCnbzqtdYkd2SdHGfLXHpzV25j63NGWu2RyBhXybz",
  "key6": "oQ9MYJ1UHrfQbEzZtwexw7UW9T2bG78FSJcXo8KTX4rn3kEmv2ntVMy23d6vYmkp6LF7ZcQsMnnXWTYkgKgfrPr",
  "key7": "3h856YP4wbB6gjTyLDbg7gFxGTvbhvCRvqEmo26JkorxtfsfuZhypnyxj3xVjETXWVxQTE6KgJeR4mj7v937MY9D",
  "key8": "4f2Bk2RPSpKJT1LGK9UKaeaFsR4J6nnYk4ekWbj32HSifR7UuPQ6HADWwY7tK1cm9mwdFYqh78TYmV2mnTtRHKuS",
  "key9": "2NJ9CdACFSLgYUi3GX9z5ympzobqrzv163wqoh8g5kkUUW9dmwYDw9wnk4g2UjDsyYJy8Dny6sozm6snQ5v8t7oe",
  "key10": "3h6KwMigfs4Povho6jfxssa5UM12DZaCQyA5C1cJx57Yfab2s7rEo2AGC4XsME2D9JWBqxNaKweMtrnijWeLhi4w",
  "key11": "2r6pHBWw4Wtg4Hpt3MVFTJcyVF2awhgDAVGFPnDFSqo894CNaZj9H6cQtuFcNEWGymEM4sDzUWTpb2MfNCYhknLd",
  "key12": "2F1Mavw9qCCjFksausQjv18jB9gYGaYtB99peezdGYgu9VKTsBMFDjKSaeYnZqcJtftfupW6NDiv6Bas5fJfRAyC",
  "key13": "4daWY1bmMRRTBv2oBg5WtoG7RTAios19jJytxQApXhL6eXdrpoDo98YJY8kAG4X6AbHsvChFQ2tD8iJ8PLD67L6F",
  "key14": "458SMyN9tAvpFY8uZyGQoU21mjSoJwaVVpEgE1jGLRFtkBBdWHnrkqpGka7nXPpAed6nMmFvSCHmP9z1B76ZXE5F",
  "key15": "LZX8gPSPjuuAornoYQGVZVyd9fmamMm1pWoFqDCvCZxkMG5C1CDQV9CNaUPEFDuJtbibMKo3Cf8MbuAP7WEq5X1",
  "key16": "vQomvBQUAG5mEzpXURkUXN6zq3F5G9uASZxxrAYZDVRckFAEsR84z8Rgrvtzun8GPwwereYEXBrmHjVs79pP68D",
  "key17": "3WThJGx3UQj3eSRzawAaGRL19pjN2TQpqX1jBh94hGJ1xdiJLKRo6VME5WSAXGzoy7sq5CrvjYLUHyxQbJ55ct16",
  "key18": "aie5ABHDePovjcVfGAEMrpCWr2cHt32vLW1AiuHBk34H14ZQBVSoEC3voggB44HreVP49y6EXRRBoqeoRohkf3r",
  "key19": "36B7bA8BCGN2QdYfVaJNNbVhJRhkQ8GXh3UTrGKfkRzF2qjBr2WnsW7CSni1DjKHTDbk3VM3esh8J5TzRfdkJAqq",
  "key20": "5VAkMhQbJNLLjPHJmBWZowH6tQtfPDcAD8Qxd6kvNiPQMFWw9aprKGPvoPEKz3WtbketTRC8uyRFMLGHy6WERko3",
  "key21": "2VCjcjaWS6wLyX2HnguPE6b4CfyHcSRF5oLi7oobvyDafXSCX56PnLGLnCPgFAe6aR9GP4DEPwgsQfhjjitZ8vNb",
  "key22": "2oUqbRYTUSd2BLZRAs9P41mxtg2EJq4wFoVbwbsycVLTkTDGJx6RztYr3UHFJMqiNVb6BHM8Pm8BqENLctDxvjU7",
  "key23": "3JWKoYFQvwBCdcNDbbx1GEM3verKPGxFmukTSPQ4Ewac7okUnxDc75YrQfnJMeByyJHWBn4wNrCZuX2Qp9r7MtME",
  "key24": "5XyaBMm9LR2zZcgzFUW2GBYwAbQPyMSLrVxeyzoTzX2y74wqS3eHMZ8haGjpZbcp5mj3bXU3ye4Ff5NrRbEovPzF",
  "key25": "5ZUHN9YdLXJyhbNEpXxBGHqSuuDbsxc1PHfYrze7BWRqu6xPAngRq92WCGUrqwyQbtFAhrddoLpu3u6Dw6Kqjcyi",
  "key26": "3Zuaptgkw3b7KWDhQ512GiBvHWvVhX6eibnQBAnKAMfFagvtRFE4k1Ybk7gVWcmuWazRtkRdmej9C5auTSpTpHBU",
  "key27": "3NutMdAffN2biKRpc1CePJrUSx1SPxh5VS1VBweFnQFRTKNQzJGnUHgUYZRuvQ1Sp1LdNz4wdRxvn9t1HCA6TnD"
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
