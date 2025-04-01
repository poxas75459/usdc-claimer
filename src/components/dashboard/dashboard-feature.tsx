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
    "PAoVa11Y7u2P5sErd7HB4jwK7pJ6frxvmd9oDBwYqUcQ8MhnrRXe4kKhREgqo49PwMQvok24iderWqRQuAFSRj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hxLmeAuaQCWDMVebr1AJ1mnKQKRKfbLbWEzgiMkKDwry5Wo4PXx93qJ4CnH2cHAFmdxAjpjPRNgCmBjAy2tJYog",
  "key1": "2cAXPqkGDXhv9aDkk1kThBcRNWzDsCZQiaDbVzC7xzQjiCN7yxnh4LeuLXtUhKsaVQDub6u5DHYvFknWtAtdyWwG",
  "key2": "2tEtiJwVQMM24eCkKFpFmZhvo2Kb1qd2fa2ZqvgQEe7kjDHH1QtxyzS6fo4xKnceQcjPSv2X6cuVQ7oTbn4p7sme",
  "key3": "JjmaY7PE1YVVHFPBL9UVEJHouqfffYkdMFCzHkXBJGvKtcPnDzDM9MVGwccm47pWnjqyx3MLfNCyPibnBnPCQnh",
  "key4": "8gwS4kK2JxkEourvo5z1PNgyGWCSSTZ98CrV7jG1TqaFCSe87ZLAkTHYabdePQho1wSD5o6Dty51dk3pGXA2CFJ",
  "key5": "27t1hctjvcj43miYnNTxtYvwVrpLC7VJDWqLjwkJks4VC9dzZZ1Fwy4T1gqW8g4GWQzbwuSbEEffXcQCQyKfYJUX",
  "key6": "2n58weM4bjRXRhCr9VQk7um56gGfKehbP6U7h9UAeEP1zLrbYUKA9KESQnDfPD8vMmyPzBtSXmLeRmT33Qg7QUq4",
  "key7": "3JvREY7HcYkaBhJ7AJ6YYa58FFvxp7qWrGx2uZjYqGVAPquM7388tVimLrA7VjLKp4jgrPD7DM7uSL3NZ5414MoT",
  "key8": "4pTffYvny8DucceJbb3kbsHmeEcRt7tYAQFexnfbTHUfv1aiXTfHHu9dPAcokgRh2o4Ygb81HXCm2J56bdJ8j5rv",
  "key9": "5WhuMBwbqSQFAbFcLtJF9Rws7J5XczfFe5qwsFN7epLwEReZWj8ENzu9NbVMHcVNw9GEw3pEtKnCSpT12ceyno2p",
  "key10": "4Pzk9rrkkpiqEHDECaTudSm4NmVVvTfJ7dJnSMuPUtf5E2HgzZXDc1vMZKSVRmE9Vib76D28yPFDQbCeKQRgz4hc",
  "key11": "1u6Pg2PQ8qkb8Z4EbEycWwa279cY5oQRkqDtatQkMYJemsNP5GmdoFDzkwLy144vAmdmUBeQmt7MXP8nQpcgpcP",
  "key12": "ubN3jLRD9HmVaw85ucvAWbyxjFbwz98NBBeAFreRhuzSB2ahzn3aRDM7xyp4ae1birTJZa5VYXHBz9KWGi5B3gG",
  "key13": "52SyLPnkqVDCqRGTLXB2bJkAmaqJw4uoCd8PjJYNe7iQh9wFkHBSqh6ZACzPUiP17KDZyt1JGb7kSWmrr9gpeAjN",
  "key14": "2vgrg1Kx8XFvFMh9GQSHJpoayXY2TQ3xKx5A4ChhH5je6zoz99XdeQ5Tei8NzYs3VQfa9jdFQQJLVK62iQE1eNCm",
  "key15": "2mntUGLycV8jRPGeqYiZ3c5Wsx8LmCBfdCfLFENKokSkiWQfRY8hwwVthoDcpU45DSBe2HejNFMmvXLobTo2kSzS",
  "key16": "5GKynknKPiw9BgYPPxWNsuBf4gwHvud5zDY8uA77FGLaVmixbCFHyx3WmiUW5SKkrRsyWzugcctNhmFbK1rXoumH",
  "key17": "4fypT7PR39kB8NajUVd8DaMD9BaVrtVPAn7R1sKrm8byxp64j8Vut71w7Z1A1yVL2zaHWD265GUZufeHvCipsKkt",
  "key18": "65zbht9qERc5JqNDvGNZyJmT44YYvoYGvC3qFx7dfMbJBc357BUEnvvR6HeaddZs3ee6B9BSNLsDZ1uiptLCmczR",
  "key19": "44zGFJPHMqKE4jnNB7ihxNTjRWaaoCPu36bxBTuVX6ifTof7Tt53fNL2Qzpu3S8X2WiW279D58e4i11ZFRttEgt3",
  "key20": "55WTermAPXLpRNp2ByGhAD1Yppq2zyDbr4hfta2sdVu8pr6FuW8DWYkoHTsZfnUTwvgBrueKvM7SaKbx4A3W1AuY",
  "key21": "2YQu9pjakBFvQAGwJbucVvjXbz9nisjeuaaZJ8Xxtn9tSm8XXo7FnWtDrVRGUffzLBDZwH5gZa4wQH4L2ERbrFaP",
  "key22": "Ny9zoTXGF8xUWv7D4gcr1E14aeXchTqwaQbTNRSudLnnfkgFdX42HtpqgtxMjN3VQtDvexGiXzg9Zg5KbjNR8g5",
  "key23": "4HB77aqMyj8YEm9Yun3R49L12MRCPDCdiS1QjQzmwbKXCfQwuQVJb6q7DtzaMmvBdkyxBVfrZGYeDokozuRSVLT9",
  "key24": "58YVwuq9RqGT9ePtPn5hZy3mqsF3qg4F9xrczqarx9BUTnkdAj5bp86NF5gDHaQn7pBRihMNMmbvcNwaguesF14b",
  "key25": "5DmtUGzwZe9sUaexnySMZJF2HpiT9hBbUoAAYHPdHRTtt5X8ymC58dB8cgpPmzR7wJAuBa91dyf5wBhp4csaZQFm",
  "key26": "3KpvnzPevJMPUwPx9h9Bz1WCNkanFJ21762xERTSQFy4QZcsBAMo6jo7whvM8ErLZA4JSikcdK7qhYbCEh5eA9DV",
  "key27": "5q5g2xpnCej9zuURVgvGXTNp6jaX68TjkUAubrXH46zGcZKU5H25UukLzF8774TVZo4A3Ee2ya2TjVHRsaM98S2f",
  "key28": "3Z3YuwZ2mt6NCLKNa6brTAgGQ9DyimjwyomATADJR11HrQo4szttwYyjSbP3sz8jHBqCSCRunsFXfvMtwSy6tRfu",
  "key29": "4fFnhv8ic3jF61VdrEUAyYf2m4obj1DMSHd7qrMb2Ge55F5M54VV2P3fbe4my1om1kMSFsUKoE89hWAnCHbvctWo",
  "key30": "3HgqYxqz9A4Vm4zN99k5cENrhqG5GiFxeELiuJadn8i91FLFjqDDZi9mKje8spC4E6Ez5V2z7PDnpY8fy3bXjpCt",
  "key31": "7TjYhev13CiztTBdhFqY1iXbe2S1srHU4h3v2SXGj1VcYdGgbj27iaMmzdHuDx68vyncFrWWbGy71RDKUNvnuRA",
  "key32": "FERN9Hm3PcrqbqZGdZxGThWvSCs74FLaxYSJsQESnUpaN9Kz3TBy3FGDr4hjn1Ek8uyfAMXcdREZWuPA1HNDvEq",
  "key33": "66y6Uz6BCFbVAHkMJfyKWNhXjmHphiBDQpKnyN2TpPETjyGwgVxyVKNxhPmWYA5LZj2e6w3YT7EQ1mLSoaGi4QrY",
  "key34": "3PXKewaZVb1WFN5eNUQBQ66WVh6P2NYG9CgP5JvnGgZmeSKhfvBSRSCQGCNxbWonZua6WwTQ6METoBkFb339Wrz4",
  "key35": "5PxCHnjEzkucepZWpc7ter5tVkKSrywCxJgCtqWooSx2mh1CnhjRwuThJTmmy29xBUP1Rw8tGYwCbeT5hGWLhbxf"
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
