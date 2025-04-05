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
    "gvvUnkxzXcbRtyZ5KHRpyPGPtaoAVmzHu7w2D9gbMdRLucRSf2FCj5d4nYrQ4aKVtHUgJwCNcFNxsh9wddcq58F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpHCA6jVMGtfovPztgKXoadV6su42UNmSApGdHtJTSkZ8usrQtG3qyqfraN9MSAFPk8wyzodReQqGjfbsauyixk",
  "key1": "4jwZ7QsT7BhhNYtrwUH5searEgeUXpXk6MKfMoKTu7KpCQyEHumnB33xqUSHKBMTTRx5Emn32oHpsjDoM4RFg2Yk",
  "key2": "5KSLiEQMDk7MgMgdQSLFwQYYzgHFF47BzuZ7tuZREbrk4XRZJW39TwXGvcDerwHyEy94NBCTHDvgJGxJwZ7yRNnF",
  "key3": "2MWMxGjWPYRjMWVjZjGSuBKPwcwMKzpoTtqke2ostSEPCLKJDi6Aux7gYt6YZWRpLqgaitTKxoXpmJwovwirwXAs",
  "key4": "4vAMFN4kYHdiK65vniZdqtUaBkUxT7x7m37C4JUKQ6cngLCJHFix6ceyybbv54JvZP8FPEZQ148kVYVnCBg6shXn",
  "key5": "5NNU5ZHPvjvrGP9RigK98WsdQEjxVDiX2tTVP5qonjHEJ3Vcqh51W19KNv5rQuaUX1BnKEK68kdvbjavKiY2h3q5",
  "key6": "Msqb7YvrNGBmR5MapyJCRdRGeEm8QFaL4gYHQ7AGDx8YaXpTTDjGNp2ZDD6eXdQAwvmUjbQ9VbEYPH3Ard8dYj3",
  "key7": "29YTHBhUnVSfQwbbq3j4XSwkroCcy2BBCH12sDgMMv1BeVXUSdvaL2AVEFuFGMimKRgFgAjip6TaqvQw2yMY2Ybh",
  "key8": "5jN9nS4yfDerFTctzWU5G6Jehajk9CTK9vPVfKAQE9X5W1bm8UKxvBp7a35C97FmZaBcQRRfdYxTGawkTj6U8KQq",
  "key9": "2jDWGRiN8xbXxiJc25BDmYySM2Xtfv4heHJ1C9zeB2nQFJx1GbtW5eXpHa4pqhCpeHmQgVHhKrFDjFjejS9QSS2D",
  "key10": "3KAZYeSfNxk4vNqc9C21kNS6mvHK23KF5sCev1j3p4qhFbjqDUq1jazKGidoFnJTY9rNwat4hWJMzbrWg5bkd1PV",
  "key11": "5HshhHLf3CPP49YYxaMzGe4AUNUDUUoFCPFvE6u5T8wrwEukEE3jgpCU4uygsCVhXtK2kRzYfL8LAYJBiKgD5RoB",
  "key12": "4ThJzxrQ9tY4T2c6xbCrDbZL6gzxWQxNW72nSjjeVuma9Uf47L7EXWpoXQJhSo8KxmMc9j7Aq4pvE1az58ezvok6",
  "key13": "5uH5Nxr9o4EnucsPwTGTm8BgqYzahVXVGqoPGH7C1rNvsknbZrBvvsqxd8J12UPvBWAqnKZPMxCMe3QfAsRHEC3T",
  "key14": "3UKjhUvrWZTpKGCD3Ls1rtzrZiv5zo5MmRNE71kpSeFjFJUiuVj2QrpcnGKTcoXeDfLv2TEsAyft4Bu936r6Bv8",
  "key15": "3h8uiACujveAh4ipd4QQsu9csALsAEQHoiEz6PkoJWoAwz3FsJQqrzARbTM2e5dVZuQTzR2CYEZnB7dKT56L1Ebt",
  "key16": "523Phid6rhomZT5FULT5jZafXmnzh2PZoG9R34pUQvrkwwDwkc5qCoRC8pKtrUUfJULRjqLSkJi3cXuBxb3QKRhL",
  "key17": "4SvVZwhWzzkPsWX7NMUdr6FkcT16twSNzqwVsNtEwKfZPi3Pp7NaSxvpRppBfGL9L8Nkh4cfDGDDKAUmNf5avPQJ",
  "key18": "E6X2wbNtUwpeBj4Mgu536yKtPL8Y68H5EAYJLaHAAjyJZPKNLinRJn5C2Ha5t4Vh4i6ThV2WhJu7kStZuLUWv9K",
  "key19": "4dbmwYtWxwZoY4UMeNLrkhodwguqgLZobNb5UQ4iLpSDA4ftGWHgNdFzAtAbQFdMv7S85eYFZThm6waiuLffcBHh",
  "key20": "y3xJj8tGCHz81F51vFScDRNnQMe7TRfXnjqNSHmEbbW4GV8w51kz2Du8W2JQJQFuHpsdn52VDxBtS9ZHjjugbHQ",
  "key21": "62uw4yetf3k1KvHWZvDpuTTbNECSwHNLw3vsnABBj1hKJscJqwWqwkFvfXTKsQCmp6DdmFRoBBYEsLa5VzbGndxm",
  "key22": "39xAoCVgHHDsJFPwT2Zd7XnktcQAsrYvHJN8ucFUzknXu1cqXoeSx5fMmwmd3nzjczHdWYE2jD6ydeJnVqLJyxqX",
  "key23": "Fn8brYy2U1PYe582bHzwimzW1nqU6FtmfagrtFabmACfTjiXQyRQU4MfYC451t4X3KZdeKgYJEz18gzbLBTyeD2",
  "key24": "2Sg7g52yRHQRvgosyGxeQibc1a6PHQd2YvtNy4ZM5tcBVHhajsz5tCNrjvGrzg7Me2bdR4rqzZ5kQn3Pr6r3ddkE",
  "key25": "2jBAALosPpsvTzqGjDGAoVjHLhNC6RRDbgNmhgzhxr2qzWjqcF9xyT8NRgWF92wKhD1jaoxXEFx5Y7LHcBnQNMGz"
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
