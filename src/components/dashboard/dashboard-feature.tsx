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
    "2zurR6XjVq2uqSjtdUVsYG7ZAj8BbrftQ2RazVUJUSaFBczQpDRER5SMWUjjtgQtFVAg1cMhr4u4QuQzmqXymwmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iN3FzHGyDBCwKYViryLEz5YgtqQBz5CZbKzbDKqrug3fxmod7VaYshdNAchzEbENQqXVMRHvTNwHDW8rSFuEqwv",
  "key1": "a4ZNihHXY6jdjwifU6HwwyR5n4uCL51JhknKPDryvMDUsEcfpvB2HL8w5abuMSTxMXPYt8LWhcjCbTWF7vH3uC6",
  "key2": "2BFDdP1C1BdiwHjkXJBY2FtURW1nTjL6YcaQbgAC3doBex3Ec5smpc8Qfp2NDhXhPoyrwBYiHqxErC982T6DTRSJ",
  "key3": "29tuCBZHSbqZZubtJtGkGvgYtxn59AFi3YqEu7MzaxG8fGyCMw1oKn4HLvPkkyhYRWHFmtZGd6HVvyYmvRFyNBNo",
  "key4": "24F2JbN4J5PH1FDHkRa7KMmrPChrVkcaksVi6DkGEfHtC5LrVbF6euMrfux6P3efYeHPRvw7qo6UD8nndkriT4x2",
  "key5": "4ohCqcKB6jKkCrGP6WWpLNPdt1XxsNzUa7vaUAfDH4DNq8hg5a3dmxwBTFsyqqoTegJc2J14w5EDRLUcwGvHrC2b",
  "key6": "2zWSY9eK9VzysqHkEUHfFwACi6AiZMTsKWHRztkQXSmhucoEVaNnz4uSVESXd61ufCzXPMkPRAxL6sstUsX3U1MW",
  "key7": "3NcNMzC6yrMwwZhFemJ688EVTEfU6k8AqemSnEbVJ2wTGGGEv9CJyMcze4rAcfJod5BKsRvvT58WrU7jtXmkqLMb",
  "key8": "LMZPZKp2TYrSXCLFA5rpusL3hzTctFeZtUj4S9NGdF42e1FSiL1NTQgjKee524Xg2QR8AWEX7R473G32DLVCUE2",
  "key9": "rFBwKUimCYnqSpEr8hWZ4hve4FmZX3vR1MEQf3BPX5rDen2t7LWn3bdpvje4JpJKEpg878N6vAAHkpsSmYBf2bN",
  "key10": "2yAt9RxhgqrVsigFTNbpUrWdxHXs1SrB6f56gWcaYwRnThq8Wu9JVzGEwXN4FmoRaSSxvpdYA8TY39tAcoiAvCyT",
  "key11": "4f3rSqTDmZRXLpFUMAWJU59CaSyuLkTnYQoa9hQPk22CQwDTJW78bccBcuVRgbtzG8wico4KYVy6d8XKVPp31Xhn",
  "key12": "4x5ZS5vP5fUbN4zSMbosx4zVvBRYhUv9wWRkL1NeNK8kVU6hryNrxYGQuaUSNe9sEZnpcZXPPw3yfNvyv9KrhPP",
  "key13": "gPq27Yy96JbtRSnToWwXqRV4kiqDEo4Lsn2TxGC3Q1g8KqDo9qCyVLGDSSY9vGRjtzRDTU1hTpiHupdDuRiYBHY",
  "key14": "3WM9nDThjrMWjAYk1QxW4AeWp8rMDyNRXgLwVqxZvubfARwpdEW4sH6bniLTCv9FoWLVFVKdF7wng7qjs1CY9uHk",
  "key15": "4QKv4FEFuFkyKoUk6evPhcDmHSmbVidpQAxeCFt8z5C7CS8heqbCo3nvyZP9zSvvihbHTQz2fpjnK9uyFvVQUjXa",
  "key16": "4QnWtjyTrDDatTG11y3eQKcsRk4a1UQoWMf8rm7Xiokd1MDG1CYYujfBBFEru8CcJ5688qSzDv6vtVzVwBYSawZu",
  "key17": "2mELhZYgFghvyiTLcnJLAGtwhXY667kBmQffhSWLyGuFKtuZkAyc18BeLGP3w6E5tAF2qMD6moUAmfT8Lx651qPs",
  "key18": "3f5rsiznBKqRmSZKP7W3bMtU4vsVN7eAUeiHoGMQNmf1qpYCKzUbeRtS6UzhoZwC5FkYEUkMqjFtgvJ1mKYLsamc",
  "key19": "de67abX3MZ4qZYTpy8ap5E7pKMZoKV4hSdiCAb8DpvaPJZaKx2h3wZv9mEn1Q8D6e6ho6hqyzsDZrybUF1t2inR",
  "key20": "fuhvV3C1vcemMFXwxX9CxKEn7gRX6EwcZR5t8mUGUeUSJXhGKurXNBe36q2Z3vXjzGQbVGkm9YA3tsZ1Q4KMnGi",
  "key21": "4ayyxEHh4xVigZirNBo8UmmZGDZNwL1TV35HL6tvJr7Txks4z88NeYae7RetLQ1PMTeiTkv4tAYzuoZGTPeQsjcb",
  "key22": "wVB5hPsvTusp6Z5gGQriSkGEiCJZW3aypXjntiVg3doCkjiafqdFj1R1atmXJdj4pe8uxuhJXyw4AaYWFxGNuKB",
  "key23": "2rGQKCLoPzDZsSLqkTRXgchbHZaJF7QVx1jedtvUNHgjPyGjcLuPm68ZETZESpEfgsYPVypqkTfL3NYF6wPQq1e7",
  "key24": "VznmEWRBxUdGTF9YutojkgbwAHNpwRR3dF9zspeJVH8Y5zgPVcJusruUNEAsSvpBmfg3H6DKhTgzKucCdFZ6VHf",
  "key25": "5hocW5ZwVfVe24o4ZRY9FoNkBn97bnwwtdRTw9VHau7Zbr1j8yqqkdxF641Kt2H5Uj7Cgyf1PqNUzMHVkvRFNqQv",
  "key26": "2oz2SLV3hDiDAh4mnhb4CEQ7UYcmJszF227MZFy1kvNXcNRX8ro3VThPRZ3nKoSaDehwoC2z8VQjxdaZGRDdJ6sU",
  "key27": "2oafNjZfkJgYCa9tiPWp168sAgqgP4RDYQULLCJ76gWek2jsQX9ib6AVwgoi5FbtkQykKcnPqQNLSU6rWAdLDY65",
  "key28": "5Umv4gqvHETNRuEvbtds35GXiky5f7vrZJfkgri33Geia5yW8CxvY6xTNE2iPXMekKUq3tkUCwm5JLaXTDaG8smJ"
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
