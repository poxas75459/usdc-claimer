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
    "ZUyjmr95ZQZ5ppv4augP5MHsFjxv4RtmJo6ff9owy5Xw2XiBKYix45wcXGmLRYySQwXYx1W5cgtQRQUKc2GEY2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWVxsNp6zZEhoDMuRWneLc9H1MkwxvYzEoNucS36bwPYGriuYcxtTMGrFXHBXCubbZiKLqroTRPhSnr2DwWvKvc",
  "key1": "3E1AwRfLZPRBb8rovAXdA6GPLNdvXNVPwE5j6A4wF6NaKTTLDLqmuiRWAt1GVX2CecSwKqKUBLCsPxfaxu1dFtD2",
  "key2": "2FF7Wqbfvxtkoctw8J1Tn1uCuQyYJ8tHp4Zn3zewqE5gMD397uCr7Pxm97kzohdEpQ9M8wQcpLCUZVBJr9eUQfXJ",
  "key3": "3S72sKtoPJG1fJAFKgH5WQ4nkZo7ygkC4vxH1VS8DrPzgJT1RkTL6AQ82pUoFN9dUXQj45yYM6SiWCqJ7qhPYcyE",
  "key4": "PW9eVEPRBGZtfnLcw99cNjkhVpR6X2rdhJieo5dcQBRnk81ebibQUPCDw1qo1Yj24FiVTKkr4aJgiXLCNFZXrcS",
  "key5": "4r5jhcpEzyEHHGc2sWJPV1ZLVgaLyGXf67qi4MbQMWDir3huxY2Bnpu2dqH9FUoTxbhF6NdgeT7WQUYXE9nnRkyy",
  "key6": "5j7pJXyP7HBLhStm5am1CZ8z7ZbfbgmExkHFrHSoPe6Qf7P3wvG9uSXbUqwcJ83xGWYY311nutk5deDjq2X5cSiE",
  "key7": "4fx4B751QVg333KPxpcbk7ZWkiYUxBBf1ohQhc4vS8Tsg7MscRyrGxpM8fykbEwx78Vwix6dDTNyggVY3kbP3Nyj",
  "key8": "5S23BXmQ7Jxgh3ZUgSFWUyiy7W4uwK61nMzrX7kwUb9Tj8BNXaof8eYYFWQSsDULhsKZediKt3jgXtBzdKdzswGS",
  "key9": "FpXWmiradp8jsqicLchVbkaz9nicWZR2SENYmvn7vCRd6BrRYX2F2GGAxqF9D6e83DKvEqd4RYqE2uJ799L2rWu",
  "key10": "655VZtLjrnaX7WbSXiSuitZn7RHJVBoqHREidHAvQvgyE5MHaVmivBt8E6PbMfoJyyS4Gsw1Ht3GEymT3Kesyqq2",
  "key11": "2Zh3VGFRdqWBKseRpb9iXL8sYgdwJJwBNTteBXhN6ovsR8ejqoPKxfqtVvPC3T1rfiFDo2TyTE1fSXjVFBGDqv16",
  "key12": "cqKyyTkLfzm9yNDR8twH2nkwSfciUSp3BWPoSNNuiLkpjmCpxWmaMEQvpBXf2LJED5mBqCUdHu2NX9GR5zxqyyL",
  "key13": "2kt7ptuBRJDtTyHBm4TyC7CmpF29pm6mrWDtCEoYWk1urqMc8ta3S84L7EnZKdbGcjLvycHbCKjCwQP6fqcwXwQT",
  "key14": "2QVsD47dmcWeVejQQf3Z8i5T5YEryPjqEtADewRyNbpbFqBwuBYCRXKMjLHEGmzMBrcA2LW4o7X47tsrLCCyqNTf",
  "key15": "5CGd815ct31Bxxdar91VZ56MowpsBvybeFrYu7nQbz3eT4fBoMipizibJah5VMK4u5vMoHjvrS4x3FPYPfGNHYFW",
  "key16": "4pTjLz2k8RDkpUGfpbe8KkTwcKnQCYFCowWR2MFBrSnBMEoADpNVfLZ7KV9zLewhC7Fm4DqKLcxW8uLuRbYtjbzi",
  "key17": "5fvPfuRw6t7cU3nF6bczhP8VRZX8p4C62R7PnXefq8Gphqf5xiyqABUHX3wbsXjXggd1FcatWe7uPcQxSgczXEFM",
  "key18": "yEpaxMWkgmRQMoQ6LnSDVcsWY24QHpDCaBuZAw1LPRrHrRYWqvcAD4Mi4RBAYZdC1yf8kJjKCoHviUY5ejCnJHz",
  "key19": "3LxUgdxqfiYoRq2ewMmiPj1KujK9fQnGaUizeMwDwcXaNkPWkGoSqLc2ZswmDzzWpTuDseCKJ83dGgn3KkJ2aKL7",
  "key20": "4CPeg7PZX6ZUw9WPmFycZd3jUM6XwEcZWhRjjKbEqoEzwJKYrZyofV1GEVFZyWF4dJf1vt4Z7aQE8YRnkVw1zhQh",
  "key21": "39fRKuepbTPzyUD4AfRCtHz9f7cfJoxZWPLBhvDyPLgmmXjc2LYmQkmx2Js1uk2ttC6Doa1bdY2K5rZSq6epgFPs",
  "key22": "5x52ZfyhNmZRSHPWw2PeFDUuzsvtUbJxXbmFeVLDtVdUVxbguQtMcE6woWPDw1jYwVwMqvtTTnjLqbrGaPAzQN5a",
  "key23": "61aNWxvpcjtb8XyrCex3LHzs2JQvceg4HpoevMtbTx1uNTKNrYE9N7MczX32oz7anAUYeZpRv7LDfLmJwoSRwAPH",
  "key24": "3fxcNnFt4L4RrNc86W8e1JyBgefeU3cULVq8CKe3oQ8qNs55fKXU9Snu1p7tYGyuLkqzcr85ABt8NfyeLLVUNULF",
  "key25": "4ivJX6NZ4Ywy1DyGGv6xmmrN3RpAv5PqzJFrGtTx9HDYGoSTjwSqxqeiu3izUuLDf5UfcTocWYzGZs559HLnQNth",
  "key26": "4UNDpBpe69zGc7Mu5xxYynScTvtPg49xotR1FA4sp14htxbk784eFrcC7n4WNKY31sEeqhBT53Zoaku7rfZRuYYE",
  "key27": "nfKEkQb9ZW6yJNjQpmUu4XMShbMcqMu8EjtQYsF1qbC57rp8L5p1Q5sa9JpfEHNGd8GNWjocUKEKLiYioSkUkf2",
  "key28": "SvNCc9a2mQgh6oQqqDw25d7r3sjDCaGXTWRXCX9cLfNoLtEVPo2QA1kW39oARFNY23QuaZU1hZx8uTKogt6F9qf",
  "key29": "2TaXQ3P9e1HHLxrLwh8QxbayKs261GXP9CehcnLJNiKwKAcKgzs7v8Y5Px3Qn79rmrpKrvS4oSnMzy9C7xH3n4q9",
  "key30": "4qjmPznUv9wM2uNch64Zr9unoSga4k7u3f2nGMrLnzUTHwuDjKyUr5foad24CGyfb7Ry1UvPg7zFxkzEvcAgpKXw",
  "key31": "4VT6h78QNrbLDbnc4wW8ahXC7LmHqGv9KTpdRuWFhrvCM17FvGwMBN257voxZuQkV1X1hGVvBKP1MvV7g1kr2F4a"
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
