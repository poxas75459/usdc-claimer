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
    "2xzqZF4pqSkzDzgUGanMBFJ91PQAqAVJYw9gcYPDYzJaJo6mjGXfrEtAv7KfwtwYTF6T6UTvzBGDyvsVa7586NDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cTdSTKfxZyFghN7gyqrdbbFD1DbbkW52EbhPdiTBCqzLyrLThNKHMzpNq3uvVuwsemXSn8gudMYw8xaD6NnnGkz",
  "key1": "4TdwVn6sUNuUbVhpKNyD4fLbGDBY2naUoxthqoEt5Z5CA6JPUh8qoh9JfHT6fGCPM9XSu7DkiGsQ3VuKgn6NQSYw",
  "key2": "3HLYM8sNBcZVmJfUKRaSLFAyx6yjKcBjB9Eb5ZWW2omUcSWPe41CE3VDR8pA4ojKPSfHPYPATx8jV9kEFaDmPuow",
  "key3": "3gPfz6yoLTEKNifikjwDCyTMZiDzRtgyZa3JfwWWY6nRh8mZQWWivsETPzjEW5i4Mnznjganqi2UctADzRVWdST8",
  "key4": "hhapSzRvtMSemGaSxWp533NZ2nAztegogUBsqqjtMTaTeNozFvWvjauP12atAyJnMWtWW8mHkAnCKZp3ZRhW4Tt",
  "key5": "S8XNX9jQTxHdbrue5kpu8hTFuWav52L4ZTi1tQoHeEcqioQza794KBiTkRGiyyoPszxKZmVwiYAjdwibpWKNUJM",
  "key6": "zKxBjAU7tL6M1YDbc3WTp8Le5GVWuFCBV3damEPWaQpf2YPJn8s1duvXhv4HVYq6vAesY6vQtUMAV49WZsqitMg",
  "key7": "4VXNhEznSz2r4BWV4SRGPtiNjR83o1nK5trR1vnE4ycNT4JPEByoHfnNznbCgv7jbC7vj5dYbpyRAEeonSj8As9v",
  "key8": "xv26286Wzj4DwHzqFW9J5yEDmGhgiZYXv8KTsGubmNCr1cB7W4SZGnLHr1HBHLtUbBAcEzdrf6cHzNDcj93Bc2a",
  "key9": "3nXEwzaJ9GFtybFABns61JR9f2CThnADrX6VgPcdULq5kBEZ3DquDK2RXCd8QiJaEJFSWgSd92ebYP8FSKDeBUn6",
  "key10": "r8ya4wqazey5yx9ZNge4zGqy5DLR88ryWbmJddz99XMDSeoTy3dnBSkbqLNd4Lpn7MW1WS76e7G8QFgKNbdUQa5",
  "key11": "4h4H61DTi4K1GMAU6apC8RuzvCN9o6QqHovq2sPdAUdd5ErFYPxVoiPbLopjZEj2Tpo5Mrccc4u6RatQmrucMXQZ",
  "key12": "2vttQqK2Jkev7wssXFfCX9PjJ1i3aDW14LT54JK9fSQN7juAiYcmMoXWNX57xUy4fGXg5Z48u6cQ3XD4vfoCgQC1",
  "key13": "4HHzGnxz1TYf3Gn9nLKqVDAbeSjwP48TVzRq3J4xCGMD9Dn4mMXJgSNQ9eci9xex1y8KQQpCdp5b2wY7747RWi29",
  "key14": "3dLkuLFjHwmm8Sidx4nRmwctiWjfaBBxti7xg5GKMojN81JMNh4EXAoH5zcZm1EuFR2YBbYK95Z3kNxisdcneJhC",
  "key15": "5ERnTQxihvekPjk3KfCFsxfzaxhmeQDjFUsFPXHk2Qd3qVirfEVWhJMQKf5MZRt54BTTzd7dYGjZEuhcGSfgTHGf",
  "key16": "2DWHMTCsQv9Pg3EmDTCvo8GpTAoq2mHP5yUUsJLpBheNsLMA7BmSs17sK8qaJZgkzJAvdiVkHqMRkBQBhvWaRD1g",
  "key17": "56Em6KD6ce5H7zFxf9s53wZrVKQyjiYWMb2fZAKVZpfp3nGwtJuhaaiZsYGyqYWsxm9RpaESc8ZWNKVohfJ8f891",
  "key18": "2AGcP614B8w2fRQ5c5BvZovXJFYdNEBWgSZZobHe7djGP3pTtgU5359XzVTmDweSmKNpv7QdrKLtacbigqJto9Qn",
  "key19": "49zx7eq9xcaae9BqmqxB58YYPiXUyfqFmxSZHBos86DugVRMdyhVb827Kabut5dL1v3TBveGsLP14Qcu56dUwv8f",
  "key20": "2zZ8uTJCwBDKgdiLY8dE7gKzeejSjLGzAunKG6vY5Xbgo1SJVjt7fwCZJKfTNCjZBnDXJqcbe5rBcJGVa8TzriNh",
  "key21": "4uLhyRBriziBaeBt2Hq9tFFXQZyhDfzRvbmT676eqFr81tXTxkfLHLj3o5KTRc6TYp3CFm9WcL9K9FNPwMND6Etw",
  "key22": "67F3gHEys8GmB7VN5ZqjU75VZxxvC4e8tkLyoBXqETWLk9qYE83YkKNd7KBocTLmDmSDg1se3WaPExSC479x28qe",
  "key23": "4ugGbBK4YpdNnapbuHrQxUQjrV6UCEGJ1ckKugPGiLWFf1PosXFj2jbKZv1LT7ozDTE118M5AG1WHBd77BR6BWCN",
  "key24": "3BnVa9iW2yMp4vdryErPcB3doJeUQqZuCvvdaLaipAowGVccXz2ijhRoHNfCzzyoj4PpBkL4VjMuRu6ivKqDQ3dY",
  "key25": "2vZtQrnzqPHL8XwDYypM2wzyG4gAHsNkhbPH5GhQbBCv9xcqmBPeTGRvP1MnmWjjEdyWNWG6KB33KVu14i1cW3bf",
  "key26": "54mmhtDSDMtemn4CNVKx7eXzdGDJrBRzsSsKaP45Kf1V5bkopfmtbL3UVM2JrMjBRCi9CRHyhRCLv6LxnZs3eP6V",
  "key27": "2HPybdReWbUHKfBv7jyB9pGDV55khm92xo6RSwE2HyLxKkwuhfHX6t6XGakbUf6LCDNV5a6mscCNBapbS5r5AA89",
  "key28": "2ae2YB8TkWMCn27XbtQWwkm3HkbkE7uJapeRSoUFsBq9Xne8d4mUVM1HxdMF6YTgu28YUXPkz4QwFno88MS3iYaE",
  "key29": "2JTDn7zXeckCMyapopizizm5efipvxqumuhybWE6p6ZzB9Kt6pTQAsCY6EQskyERwZ8wjqLZTpsfYSNdHiktgws4",
  "key30": "65gATYm3Dr7ND6gFsiyrqZzzpuqrYZoo6nfXGtP29o7kg7ujzNacPW3f8v8EoPgMRgndHX1ssa7GWZa6FDxeHtq3",
  "key31": "XcyvTYCDSJvC5XCya2seVjAbjHHx4kkEVm6jtyXkDZe6N2ygVmykLXUTAzrxzs4Dv7M16XZ82VQ5yoPtL96GnTy"
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
