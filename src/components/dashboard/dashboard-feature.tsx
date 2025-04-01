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
    "2b2fyVQwTqCW4AeCF6soWogjy9JBm3atsQF9aURtKE3WZ4gfLivbbUozXPjFKnUhS6xiQ7m6J9mgXgCYAXuysCE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FDuvxiAALEb7wmoQGD7e1SsxkBnyM1roi2zZCHPnNLMs5JrWSYnFQ7zWBPyaaWRi3vFkCBMXhWzzM9jimBHAsEi",
  "key1": "ojQvrwwWGnezdXnYYHYkfEmLgqTg3vgapQBd1NBcZVkhMzJCHsgLT2NWRf4hCDCVTJYFADyBvFdHrCqerKrBWue",
  "key2": "3bsmLq5jCNuofytHFXis71hdfHyT9iF4UpY7dfGYk92aknEYhorV3p4cB97CpHb6UPNJbAkU65HwzZzddhPVoxs6",
  "key3": "W5CtQjmubSnK3gQq3wqEvKU9ZvDQMuMcnMvoad9SCwLFrC66t6r5PDJkrGA8Fz5uz8BQkuLoXawRawATpzH5Rw7",
  "key4": "4EkZ5jeJFUpbTykvRZg9x5pFrBMeXkVj2Np8m92wjxVDaxro9vW8DcxvTgUwAA23pB7kXvgraY8NvhunsN9RdUCL",
  "key5": "Kt8B1WyTTGa57abGWDzHswDKbuJEBsyivmQTsGd65cjau2JhbUQhDe4iA6xkAeX5L24nf6DSw9UUkmBPaRiz892",
  "key6": "49HoAuEVuxZrfGYbKYhRty56mmKimvi7RjpzQoqD7icENf5fHQgSJobV82i5wxVfkjzxmoebRjBbamrrMoSwAvPb",
  "key7": "4UE6akNXQP65eDdRkjpm43g4KJk3TJf2nHtnDnPSzSuxEFhhtwmsiDT8PupbDQgUuJabvNa1zwNX9bpV3V82r6mT",
  "key8": "22UZGbziyDiaqShn89s6CZVDLncrokHhTAVz93McHNrkxfStt51mhSeMtDqNvG5DTQESLPfAyjxo1i4zj6WCEiit",
  "key9": "vYZEwD4Dfw4gaBX3usQRECsff8myLMmy6YhjRtTjvhMPHXTZad56m6JHNAu1ckHtfSdHfVu5m6Wh5yasMHFQNZB",
  "key10": "VG9rvMet4moGc3zJuiuNVQJQEtbh2C853tAUCceM5EGYnsuYLhRDx98rHNmdJebN8omXLb2wz8REGTJwss2n1Pf",
  "key11": "4kBbNFWhEVsRQvzFuu856eaUjhZRGtRwjq47WutbLzhVFXwwbifxe4Da7dcgYPdrKJvyvu8uRwPBbbGuwrQsv5GE",
  "key12": "5EsyCBFS86kbm74hn1JKnczZ4dYw62yjVvbkfbonc4XyPyqEbKfUDDBf13Twe7Y2ChEcRQkb2rWccaXjy9VhZsSE",
  "key13": "4x5fDHH6Kv2sDxxAktocMi2nZXrRGTG5XE2vkQ7JtBXAEGtBzjv5RoSotPpkJpY5L6nqz12sr1VG3Se6UC8JY4FW",
  "key14": "48dMk8MuabbKkUFuET8xSWtWspJkimsZih3RebzgW76cAfPgSKqG8j5qUbCwTjMRuJUxt6Q3vkHDEGd4CQNv9sSX",
  "key15": "37LwU16zaexKyy2EsVLx8ZVWgA2HP6uPcDve7KAvzQyN5m8UgqkoPiUb8Bs9GCkbLFkxyVGo6oxqo1gyEvB8ezoc",
  "key16": "3y2vAzsziDp2xEx4H2n7YaXcMJmn9jnfhBBmPFmYxDrcwwRDoqo6ujcbtvJt1Z5CLTpNkJ4PmhEgJDhzCBxzkFCp",
  "key17": "3LvmRRra5NbCgYyu3oE2becEEZ8KrCNkCBBNv7S4pTUeyy1H3cwyPST6RExDMc15J3uByZTWBGbaCgEungTSZ5oP",
  "key18": "62Hd19Bubhi1mBFT6kozbxzoBznUFpS5NeEh6i6X2kshWxZUnKghK6BayJ35QfMp6Ecb8DFMNveG5CswKLR6K4Tb",
  "key19": "2N6jHScCtdokEdu8VXq9t2f3Z46SkLPrqNTG8NLgmwxqjN6yHtDTSFJkmh83bw78TtCz1GVXH3qyFS91dxpYjWQh",
  "key20": "4vdm6QgXioA4Q4BX5itnzd1YPcEdgQzyt8yPBZ5VTbt5YynTbgSNjGi2VxzshhZweJ79CdAqMJ1XYUKfUfz8iBdY",
  "key21": "53YyV8fSgdu3BfPssTcDMj9WQ41V44XdNw6L1u3unupXyowBJ1JRm8J3wTAKvSk9tjuHLYUy6495xgBb7SA831TQ",
  "key22": "43WY87rN9jiPyitgZ1rtpxGtvjkwdMrJMeJfRAkqeUTsGArXkiLeASeM3xXkC5TipB681yjDWRr8arWFtpz8KaX1",
  "key23": "5BVjdwZK1BBaxZ58jh223rn7hRTeGbUSj4MnW5tuKUtRsqQRiWcDw3KMkZKc5cmv5qaQeZxBuUaFyDnyrouKyFeJ",
  "key24": "3sH2qAPzACzFt8sfhcyXiU2REoaq5A26ZqjfLPVNvCr5wYMHoxHSXUdxRoPM6oKVcYyMxym9kk6PTZW8yaoc3DwA"
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
