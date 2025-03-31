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
    "3GYqHSPbEzDuCs6ufFTC865ddZD6W5XG4PpmcyyFain3ira7sEeXtC8e6V3xwD4WWkk43LzDNv4NnCQ83yhBLN1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "418nFuG9tJ2Au2YT2aauc8PYLN4woVd3gYqMPRVgFs4FYXjd8ApSyNrQpAwayXjxwoi3nKumerw1SbdnQioKc22e",
  "key1": "2D7hKg8SYFkx9WQ4sRjKao5xhPQpTaYhpUjrZ1pwFUP8mNHxLK5Q8T6JFLWmbHm15X7rT5VCH2YAa396wCWKtq82",
  "key2": "3wrS7QWUJuUBtFsmz7YCKqAvXL6pZGUsaFCvK2NWb2KKzV9FWMaCTWNbBtkehuUrSUuhGwYuip2JJhBgi91J7CEZ",
  "key3": "4bNCYXW38KbAJnoh7fiEm18y78cCVWoG1wUQkjZ3N9tePzFRryxN6CDou4nnsAcrzypKNgfbq11b5K8SkHT2RgG8",
  "key4": "3PrqEotg7keUmDYzi6KxaGiSEX9iH6wwC5Uc1YUX6YwqQc7bcsbVChzWWSeena4s5yH6bMvdTPyZ7vNEkVZU94Ev",
  "key5": "5ucwMt9bCuQkg88KejsNjgwtPiXGY4heNcrz6t1oMHjXoom6Q9wDSDKnSG72yWo7JPiLePKLaS12NfYf1wYcFyAr",
  "key6": "2cAYNN7jkdmapURY1AnuHHnAGPHTghFe5hhaAPqg9E1bHaJpKQYXpQvkE8JGNfowgMiX3Pdek7XhbwgvGjZpjDJu",
  "key7": "5y7q7bXYzbHQi5q1xZxmafCaq1QB9kuEJPxpnSe1adzZdsaHYMdjhqh25bZXj8CxL6hZT7yKoQaK5XaFUEh3vBTg",
  "key8": "4FWkxGqHFDvEoW2EzAM8A9d1xmeTLSFoNiVnB8dysaxpP4EDofHxv8tauekvfinMEW9m1hJnnFxkroKr6nmeYZkh",
  "key9": "4UqcEJcQwbvYSSeCWdVcnTL3X5sVWgqwY8EgxefZqEcGQbYX8xQqxNuwp99TxboiL15G4juGwY3ABHRDXD6QNjd3",
  "key10": "4RJFyG3jpseWvkejvStqnyRakVtmQ37bjAZkTnLweFiudJDyskBRGFDJuUoFg4mbxortyj4eECZ4yfMUFu1Eup2p",
  "key11": "2fRnHz77fUR2knrnwFPdXmrqv5E6o7eEZmEfb14giMAMVeUSeiY8jxnogV4ZpxP6iCXqt31TBr21CSzEx2EPwSVx",
  "key12": "3JYtjiuJrxVWuUTZ4inP3juiXSMjSLQpjuyndvLuY6fsWhVqHuEeeAZyF4xhMKCk94ovF76XvuErCTBUVXiQRSCs",
  "key13": "5PAxFs4D5siaKNNXTV7cwHG4MLfv7LvgVfcbwrYWvBcLxnpTxE5ieMkDgP7x8F6jMzxDnw9md7uNeepD1sTQtXeJ",
  "key14": "3gLskzt9ihGSqN1dfMZLgg4czzfJVyPbDBfcocVFkmDUFDy9jvuo3Ya9NcqfvNfSLf4A9tdn2TambDyHXjUTZVw3",
  "key15": "2A54wsLBg8rbmh5QGftP6kaFuXvJgXp2u5STfYPrZmxGXDpu9CRVPJBVKdvWvK99pA5xfWYJ9MZtovTjp8arHkrd",
  "key16": "2etqeU4BJ19SboYBuj2g9PduYviNnaCoEbPrKq6ffTuDRrWWgxZ9QS5bZm6XANZYhgrodmKY4xY7wpnhWz8D9npa",
  "key17": "4dest1MaWr82N8JUBLvCJxwVJ2jnL9PjMYtgiYdEBSLRuZDLBiGCENs2xT7jDCoSnJhJyotBAgd62nyN1LcBTwpf",
  "key18": "xnkALMAovWuRQrW5FvvfvREPrv1HGGTGNxJviXFWBHJ9Ea5exsh7ZgCvFgHEUSoCEHNMaaJceqGMpe6yiv2cAfE",
  "key19": "beVp3hZLigxtGrREmq66u89hacxiCkTjeiokdDu3DrfsSdukYVvuioxCqy1E3qPSvsdTEMeBYUtZktPhRfudEx3",
  "key20": "xtu4A8aKkvuEYSATUvQB76rfY3KEkoo36cXGxHBpMS8RpfjV998DyEFk8YVTFtNKzRSzvwrP8BdH9H53ZYSiXCT",
  "key21": "3hsU5Dj1aWYA1SRxUJAgyi31EKQZyfNMsVBodPKQ7jNmQ5GYgQ3yufjVNYqtgxGQaZEspJwc1FTYUvtbi6HFt2qw",
  "key22": "4rZWecvnYVuQZPUZ1guc5sgHepcBb6Vj4jZKxpvGZEfLFUX29gHY4LFWdSxLTQSm4w2NTQ6fHpMEbwPvMLRLnzS1",
  "key23": "4QdZjbZ9NsGqFz9A7DHRTy55vTKUUszKaRVH2xipmh1ubUSdsFCySHTho5S8Ky1iLNRGMH8b7MwgrEbZJk4J4uo9",
  "key24": "5NWuZkm47Q9eazJBiQA1cnypMcEsdMySf3VZtM2vbXQczMbXRdC2qgNPk6haZmhdvnFoNr3WuBxrjMsu3JdNbveG",
  "key25": "dakqf9xnsRZbRSecM6uGcyoHBj2osFm8aJmv3QFM5xVATUjJk1QAXTk6udS8scDNUFWL3v7CiaS4jV1Dncde8cW",
  "key26": "uZxPWaqPRrNwbGQp3j9hifj45TdqcDk3sx4iqcPoy7Xq6K2A8tCpGnjjb4CpaVVNGZiLmYZX4qkBivWoZQaY3vy",
  "key27": "5EWPQwSdTGPQMc4VgujnPHHysZcMLsZpXnc7aMSit2p3US3SPqfKn5Y6iejShUdY7Tb7yvDJALC2os3RiW23JCFv",
  "key28": "3JQAHa87e3DgwmR4bs7xzVB59kJHxyu911CQkGtz9EcC91wfjPX62y4X2XjziZLEU6tJuWWWR4FMac8kieiat6Zv"
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
