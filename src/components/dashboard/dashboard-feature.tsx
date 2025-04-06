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
    "3PZk4sgX4pmvkGzzvFgoGFm7Reh9HHTMPJg3i1qFWuDEGX8JQSKcxWfDnb6bJqkAn36J6NAvPiosA7YFgRh7mVYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SMTUxE5nsuXeowybyDUBkZHUfTmYxdL2gSHmHwHh113ToBrCg8Tw4Wy5UxYMbCYF8Y6F5qT7ZVZ3KwPP9sWWR98",
  "key1": "5RmsLec4VJf1j379mPtGDg4D9MynBJYS1YLm6G7PqftAQw8981iRHB8tRKGYRZFKE7WUwuUBebkbxT6YBJwg4jU7",
  "key2": "5CqA9dbkuxRamooPPH59QRR56hBV75B6Z697sCekPcoadJvX7GpVUsnYZo2dyVQQ3g3gxbWxWh4gcZJk8X6zeuwG",
  "key3": "3yrsQLZ29n95FnjuGfiddcfwSUprAB6qVTyBEgvPHe8AbgKec5QMDo2ZzWG4kzBiDs5sHZ28tX7SSNvZzmdnzGXx",
  "key4": "2AS7HKsrGAfs8EaLtjLhwsYzLiW6fjJbF9ZxwkANpkhfiozDYQ4JQU5iUQ96NugQmAm6pmcKM5jfo8uemC2SdyBg",
  "key5": "2Lkk7BW9trxvAZa3CKB46beHXdu8aqMbeSjPRvxdA6TQ3ioWUDTBenJPGoTan7S3wJhnNEhHgiL8BNhzh5XaJcgc",
  "key6": "4mX4oFKKDeX5FDs9FRrevDpLE2EsbEk9JQTJXirJkX1HCE9aQwH35y71odqsnWXESD77gUUa6rLyEoxSnMmvYcK8",
  "key7": "5xFXYiqk511TR412MDiaAmKnyMGZNcBHLFu5Xbjy6KucpfJt3Fp6FfKLWhajb59wnXx5mfcXYEP6Ctf9fZGv4NKT",
  "key8": "4KR29EoWVSBaV8rpCwWYRiJ4CCLZQGbUgbSA5LQcULSozakZNmY3RBBfVoqu5KQ9kv1gPhBMiUYK4v9Px2anFszS",
  "key9": "2B1wRHJPtZigMU4SQ8UV17txQUYZvWkCbGbTqWawUbd7Mcc3o6Ek5EEJ6qWDYMCxMCPGJeL5yEHdfFHLW513kBjR",
  "key10": "5TTmqtfRv145KzWUqQoXfoYtz7qGCj1HyKmTNkGZN1rxTW8ncdKuTX8L8keWfxv8vBdLL25tewqbHdrnmTn9dZjv",
  "key11": "2Znid7PRg4PJcyX8pPttSYYbHnkPsLh2tooUeXMdUR8o2G5igAzUREsypg5Dfo6AfL1S2XT88NTQnHcXtiat9of6",
  "key12": "3vxfsUKRNxH6cBHZ7qQi39jkrUZY39tAxtBBtZ88Y3PsoNycdcxY78Fv3889hnrziApCNfJ16YJ6JWQQHPikBG8f",
  "key13": "5spHmBHgNtGVytpmUTPaLWfQTsPHS4EiyV3HwP3cLnVSRDcN7rwjLMCw8va1897YWxqV4uEUxvCC1nFAFRAVsbQL",
  "key14": "3rZhbmr3oyLuoSQAtZcggyVg3Q34wjGcRJWjobq7cPwVtewAA6rs9x21uCSXNU728nc2pG4SwCSaRfuwHygnDZea",
  "key15": "3ThGtQzHvkTrhAwwnUXVh99Dokxhnk5mJaM1o31Rjr5yfqTRMqZiHvWJx92deGCPPwS48H2TzLyNjMpruNqYSy2Z",
  "key16": "2bRh1cWMiHNuT512bXWtHXUwVXChn3hB8Fx971erN4vkqufNocmsWGbVydS1KQPfJ3oBhR7mqjz4MW87hSfxdkJn",
  "key17": "4CER6bavEHeDqw4EJLc4NqS77pkDapcGcrZYLhP8tF6zLQAWVBrGm1zWEvYSn1YDfJhsq3rQm44yGbXQJNscipS6",
  "key18": "5PjsnVv8aJEfU1EHiFVyzN8XDMcywZ2ESqrxZX4K7w7G1RqYExGa6wAM3KArXQqqVBhLm16snRrs47JpfJgfwavT",
  "key19": "3uNQqkfxzTsvpDWCPf7A4esqoFxXxqUTyyxKrRHDjZkpoZF7wwLTdX2TPRAT2MfzqNu2ZocwdCp9sgUPUEeKu96N",
  "key20": "4qmQ47msg8GMADSsZ7nkyVxPkBH72so4U5McZC6kdV36ttBKHkewTYKMVwPSgKBtrxSizSEtr9MgJQNkgJcoPpi9",
  "key21": "5koAdT17WYXBrqi3gjaVWZUF2SvmsntEJsViuDYp35wv524dMUFxRZ6oqzVkdR9fcvc6CJwj972M94cgu7iLYV2L",
  "key22": "2sBMgJ3NQLrWBr89kuWMJMeTBPWeABGnWfQmmmU3gFhmNbYk9xzUa8dsDCGJXUvPaUnBCeCYDEeSAZWJwAf2zyME",
  "key23": "gMUNZmJLkzsB6KUd11AQ5CxrNH638AYcn7c3MLEGyxr3R6bS5mS35o2Dv4hiD7CC5bo4h2YcmMcXsBbdBWBitfm",
  "key24": "4G9ntKpcPmutTux3RXNWMdpjrs3SitEkrwBTjVLm32QmsNZ3FBnpziGHtCgAdYWGKXh7axbrrvZ7ryCLkYPTFDbX",
  "key25": "QwmSe7ScU16YuuCXLnuJxoTm4ubqsaWLrU7V8D7ycNRwDwyM3aPHCHEDWn32z8FCyvjxq7gHgbaNfwGnQeziCLi"
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
