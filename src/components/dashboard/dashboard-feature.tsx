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
    "65GZwhrVwsWHCiNaGp7ba2fBgmGHGpU2BtwhCp9Po9DMeWbvse8jZiAXDgDz7F8VAYoQWbzdDpm36RiR7Me19V5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66t8ESjDNvaC5k5VJ1H6o6chvNY8UzAyGwaq3Ne3WkqFqa59CpgavfAM6LindjBDe71WJrbyaBhRiAPYue92Ta1F",
  "key1": "59Bhvv78JA1MN9o2aUi3anQsqNLvNh5imC5uxZbyWZK3FstoeD6ThZjZZPZtEJ6XBAApmPzaU9cXoLZB2FWSxf2f",
  "key2": "3ue9vaaiaziDS1ACfzDhGHCPnaXSo6XbJD5bceFEi8hjJawzEfaHs1s1ce5JgR8oEgHUjDv8i7CiPS9xJbfcoLnD",
  "key3": "4K6xpkPdruGiL9XzBKYr68rMnjuWyHZe7E6CMxFqSpYR6ghaW2Pc8DBHGomMFmkfDaDTjCbkWfBs4GBX6fpXVGcj",
  "key4": "4xzewmJniQ4FVxoQ8RyTLztRMimMwsgJHK6fwnNQrN8kK2YqJV9rhzRMgkVHn6k6BxASc4mNNK7AVAwMrs2z2dKZ",
  "key5": "5nPodWsznb3YfCwifkWP4hVSa3PHgRRh6mKgC4w8ivusFwrDpc5tGZdCgT8mDDKc81Zt1N4joexzkJ7UajEmWrK8",
  "key6": "3DcHWA2zVm7pq9ernrfzN4gAQcbg511fas3FtTBd5cPT3vVBmCGbdrHbdoTe3dubvLBNr7baeb9UNsWg44q6EbCt",
  "key7": "4Q4aoMHWSRwXMG356qtYPrzTy8vDuVhcaNWUuzyfZFqnmUusRgyWbSLDhvk3F7qidDFEcWwtZAA5yT6fqGTUJM4b",
  "key8": "foTebsUfCNXMwzXxjJBMXPVppkTB4ugdVYhdzDk5HSFx12rC8bCxzs3u3pHr4NruaN1GD9EMJE3SrivxBos4CRx",
  "key9": "4ixrto7fRZp7a1BEvZbJMT2ajtjX16TvUfLF6zartpLWj4P2D2dzKx9NuV91Xk5wh8usFptEgMU7YXVgzQp21aVN",
  "key10": "2P4z9oa9ue2D4ga1N4rrSPbSvQ6sN2do3jr6m7dVcBLermZB9hhraERSfPXAs2VzGsGKuGuSKJDgmZc9vnAp5PSk",
  "key11": "2ms2uGCmJ6DRMCVniUvmJ9vPq77FPjamoc9rpEDL2fJSot3TQLhttp2BotwZgZVp6g6AYP6ptQpqi1Dn87GhF4wQ",
  "key12": "g4hAeMTmpWXoFfBY8xRKCJespyKy45L2SgcTNJ7sVz8BDMvzpRt2CrfEe2MC1P6kciw1uud3s1GbXtVqCAKacKP",
  "key13": "415K8vZK7Q99tFAsDN4kYqhumgNVnaCZC4BSjgujkcnrhTsApH2U6xuzD6ZB9P3YqC2VDdP8GQpmqXT9q8uMCzVx",
  "key14": "45QPvCwj5RwUW6pJSCnzKaRqC38a9a7baYUu4x1XV36jGMkHHjY9tLG2PkFqcov9tDK4kzJgfebbsJTwZRAakpZ2",
  "key15": "CwsLeZHD7ri3B54LVysANpk6CBv4XQKBx82Yx9HsAAJZYw3yKEYrfgEoLxqVC6DUc1g1bEnUrVj55ZKYe8gAH9X",
  "key16": "48DnLWDXk2rpgKzmBjj61eo9BPSDvhCnNPg4RZrzMPz8N5c83u1zaDSvJSoTWBBCpqK9qShEsFQiRLJ3NjY3SqNH",
  "key17": "3KutjgGLED4P9yd6gZoRiEUcMP3JuLZpgKZEiaicDKp9QLmE5Eqix57PyYtq3TwUk9Sb5ArpMyw6NHNNjT5iaTEr",
  "key18": "Kxkd47YtTKazq1nu543rAGnyZRdfyVExBeYUtus7Pst6YevaKVXQ987zZbWZZz3JyYpYLR8joFXkXXUgbAGFSAd",
  "key19": "5LpcrgggtsGuKi5iab6Eu58rpXViVCzLmiVqzybQdo8XPfXmAwscgH6Jyt3ntx63KvucviAfKRmSH2QBpxyheN5q",
  "key20": "4PhG3dLR4vGRxA3gccLBkA4nPw21d1HFMzTiLwa9fVp9U5V8kF3aNz4tohusMnidpkZ7H3CRXpH8XvsmKFhGUFd",
  "key21": "5vpfqGzqLWSVMUTSJCABXssVv8gxPmRxPLBkU9xLMcwAUj9wv9We4ux8cqZJfz7JZHEoz41cBZzMtJqmT9ieHEFT",
  "key22": "3R3ZiwT6gByC5QrH6tLNpwMhbNY9UAq6mwduPM42cqCasXEXxRWdsskjpPfNMtiqPcKVYcetYkTqrsxkq35BzSUo",
  "key23": "2QcHUW1msbZ2efWpH6CVDcMdGTADbVbqSeBuSNFvZBx9CeqRd9dTjpnNw8xobbK9J5pMw4v6taMyAT25NoPKW81h",
  "key24": "62Qxi66kyUgzZAyueyygtXq7aqNPq5UKPhJPbSHodRwAThu5T5d1VieuX7Rnax2N6jkteZkdG29cUBUppoAJ475R",
  "key25": "3c44pHcPVNK77Y7CpZXPkmZcpdJ15JcztZns8E5L5trHmk7FwuYjFigTuS5rg4WJrcQbJRQGwCakbJoCk8DzBRRL",
  "key26": "3AkfhkCgTHju2LAjjuuRWv6zM5Wxhm3Ki9KiUhkGZu7ASVHknKStqwGhbqj8v6m2dPPTdPqKnZv4otiSM1hEFv2F",
  "key27": "3fkoY6PwZ66rDJ8vCBQEabqSRZTi3pXaBBgDGD9BiCmufmsZQDqhoQsVKRsnRWfZa2hMNYxrJtHkecCd59Ss7yPk",
  "key28": "3EohqDuKgT5U92Vj59tySQ9mZo3Pqs9nbGagkKxLjJiwqdLEgqDZvfXtAvKM744xevw4MhUrASGKrJiDamEoSpKk",
  "key29": "2KWAukWWmcr43EDXtGbTgyWTvciFKTb42bfRPG365ArdExkkLmyqyyhXSyeBpBTveH9GM5Y2MbjHKRaCKrFuW5Zr",
  "key30": "4XWnVEmR8bKSMSQgPNYzZQ7P8PN6dPuGqb3eqUhBRpvfGrVoZwXump1CQwFg5YvrNfxvyjuAqV72eiiHH6sVTJnH"
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
