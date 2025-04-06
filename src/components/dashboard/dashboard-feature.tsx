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
    "2Hx5WrmukboN2iwABp6QjEcVZNvrGh278vvyDqApKRaYay75fNxyzh4MTofTmbkCL7ywBu4BHjWjfDdK6pyeXjWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3jJAZu8VpzBr2Tq1qaYxBSC6BhzmV5KU6ezEq2b5D2aq1S4M1SCGLa5BTYM7D7HjSk5GUfX2Y9d1rq9jM1e6e7",
  "key1": "23ifFTaiMMn7G6TTgdYvXPHGUyQrbb1uAjJ5h5tus1uLJn9U5wF7rmis2YcxNCRF1q4WMFEesKDQN1kykh6qSXJw",
  "key2": "58otrmrNSjqLL2eoDgT6eZv2rCEsJfU1Lo83fhb1bTU2wzUu3yfh2sRYiV5JehjksEcpHFjHxEQ1kmoNgxef7MNu",
  "key3": "4BryV2kf8tdTAHoPCnjce1HQvFavoXABAQ4fwaf2R1i45ukxM7XoZunpKeP4nJBeDNp5nw7nQiaV7bNrnTHLjBr",
  "key4": "KBkHAAPtcHdidpvj8Etq7SaeMdJCi7upZA1LpHfPhfosSkxUUBdUwEGee9hqXQtHnKLFhLhphjtg4MGKm7ookEn",
  "key5": "uNLSNoLJa2DT2opW3RLEiBfm1ZvdC4pHLxyXwekr13AkJNgtuB8w4FZRooyGiwgw2mDZm5bpHnzXH8KqZZXNVy2",
  "key6": "wyuoX1Q5TgaDohcqczU2yD4iQxzB7P7Ux9QyHtnVGVRrk7q4ic9czdLgTcebMdvNsy9BWLaZy7n3yQ6aoTsgKgv",
  "key7": "5x2Ch28ohVrVvyqPifgtorHgyevbtcsZYAr8HomVchJMYgvf6FajCJoB2Yi5G8QaDoc6cpR4PeHQVTysJWDgPKzj",
  "key8": "TmYi9dT1ZrNPJwjU9eet9Q7qvsuYbTF9wnoD8ABKV8bGDYFzfu6xdMF6H7w43MEZxVv1jvAADETFsk2pDZmnCt2",
  "key9": "4nVPBFcDVeW7PpMrqxPKxA7nfgC1U4CP7AAbV5aVGvnLd4Kr1gcFfFABo2mVtVDVC3QbFnWzH7y4LDVa6USedPih",
  "key10": "3zSuXJvskprW2djSmx8HWpUsoLWrNvCyVELEuV1Q5Y5ZshtbwGuePPP3uxCJkDkJqYWe4RURcbB8fcn4qAXqkp7Q",
  "key11": "3h5CAC9QmuQGN9MMY96CyfMXRSRvWgqScJoQhKdWowZGa84jgemSTigEGHw2KkjRbejTE4R9ehZmUXB9BK2G8CYo",
  "key12": "44onM6e43iQwD5uNR4P9Q1n3WK23Dmtv5siWDw3ccP4isgc1nuxySxR21DxWvzxPXVEdipkUFmLeg8ifpvyqZrKQ",
  "key13": "34TaqL9fgZYFZJjpaEzFLbgyQoW2HQBVWWiYSL3yNLRmz9ECBtfhHhx1La4bGDTSquXDQtGTJKBKP913DcQFWRPE",
  "key14": "bijHbyUzQ6yLhxg29QcPwqHSEcHMAuEenWZHs74QK91uapMj9XjjZuk2hY6Q44je7SZ1YNG1hFKQ8F9xPKkDisA",
  "key15": "4eQVubZahxkkWHcgJLpndSGBHVjtJykQR56QAJLRojz76Sh6BLN3yy6VkiFyB47MXVwdEH4edx31T7qe32rw69KX",
  "key16": "46yhnLxqcxtWuCYME8btoGxRE7moNX94HZGSQBgNYdMxWw14y832gZUUCJMy7pp841HqPK8zn8b4kCpkrftbbQMy",
  "key17": "4WRenDhSq9Ko8TwqCir7NQ2cUU9XXpcUrWzZkDLMvUiQCfZLzjsqRb96RMrz6mMiFsW5BkmWbPcYnC5vDbqBjZew",
  "key18": "3G8epPfpTx7DcGgyAsKWfRYDUMYomfXJ3bn1FXRQaMjkRPaBGQxiKFpcnGc9U6AKPBfrecogxVCQWLeKDHfikKf5",
  "key19": "3RVKxiSiQg5MPMMBXLWHKvqXzU7Fuy3rwaYw3SeK1zE7CVsXnrNubx2zj7Zj363LEREWz7yD5rtA9g1aESRJEBCs",
  "key20": "4zzSEUAVMjTFkwhakzvk2PrZNmUhe7ADz2tsoFzRiEewsVANYKDSgyT2hsdyFhUG3Mvp6f29xpjPzUJAtHYMhKZJ",
  "key21": "vaPX6i3oP1QsVoaJDFcKajrdbUcASfPFeAyJpm5mrLK6njAQAeQqayLat3ahedLdPWuYALQM5raBxGMrHCzJzfh",
  "key22": "4UvvpAS4GbxHCvdka8SAyGVBK7CXTRbrodSVupt5soEUgSv4L3BtcdzKtjEPzwwzHoGLfxdVnTPZt2aGDnDU2xqX",
  "key23": "vJmBc832i1x2BAWDVzSZztZNUpJx65oWSLqBZXd6HT74QW6WgMoFJg2FPtex1Yyw9wUePGFN8hurrozPdwBsUNe",
  "key24": "3NsNPLisggHJ8SwJ8nGQqvTrgyG4FMe1G5DGx6axwMw4kRhKjosfe6JgQkhFK3npeFVS3XJZKrRbbGnwzfHByLMZ",
  "key25": "42XjFrAgPeUU3zTBXBa9ppWgrQ6q3Ma2ydFwjLgqKyVgAqSBtKohp3942iZZRFVGoEXKtjAv8eTZareyb6a2HrLm",
  "key26": "41vNEFSXJSXxgipEwQz6GEsXtBuyFAukX9xSkUbS64mrUXdyEJPPAmE9KxQBSQ33zXNJ7cQHQvrDARiFeSRQgorn",
  "key27": "4GrUrx6VfXW4pCvcJMWeNkKxECfwWwf3oCjv6UeAmC2LqbKaXw19nJv6HdX9o8fxVR2UJ4emxy35xQ6zAwScLSBB",
  "key28": "42853mzmHwbCAH7JnaytCwR7uEkMmhProbF7vx9ViAMfkoWWEsugd878TWV2eU6F2oUswmMyqMUnGmddLreg7cgN",
  "key29": "nA3v7H7cBVX3kdx6RtmXvH1n8FXNHA8ywapacQBjWaELYHB9WpgXLwfwWP5prCTnC3jDudWV4crpcDsQW45icSA",
  "key30": "4bKLRAfZfjGuCp7F3x6LyR6g6Ah8TMQp9QGF1mmR2TSNE4mc8rzYJG6FAVAHMnXRTeF2B3MphSBg9i9qEp3o8d2w",
  "key31": "3pZA2mq4mXE6Z3HKCjd5qma4dnKFJX57zy72bCepBkM3kLA5avpWeuVxdvn7PtsGBhvGM1dStrjiD9CKBrRNHpdX",
  "key32": "2gpWHujsanu1Usza38VpfGXLCGyTp7G3VEgwsxFVcuF6XXGdheBVGFJmHSSjtGHkP6VM4HbEa6QqsRNTtu1T9iE9"
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
