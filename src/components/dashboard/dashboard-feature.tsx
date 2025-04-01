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
    "2UL3QS2WY3UKGfhSczoLvLggQkquDRXCrsBFoBoW7oivrjh4H6UpLDcxKqyH4jMzx5ByHwkD4wo5N8HimNk6oAdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRANFWYpDGzee4BL81R7MHu693X65sYahgqeYpRgtQrUfHNhPHurYVf5SyKozQBSyZv6bL1W4qW5RfA9aDxipZe",
  "key1": "5nhx2VduXs2wG6R52Gb1y2UXRX3Gxg9H8HqBMWTUBkii8JpVgL5NfLn4dwKWTibWbPf9vmMYuZqsjM2tLmcwzSFS",
  "key2": "2S1tyrSvBHvsrNMmy1BcBK89YC2cVdq9YHJw2PaEsvteWDpwh6QB3x1hxHdXtzQjsRfUsSX5sCbvxMx2hkvNT76Y",
  "key3": "4A6T2QYBgDkH8rwovduFcgBD6n4vL91rb7be7W5TL24rWyvjyxWQRW3Ba11ALWKbtH9u19zmaPZPRQ75U8PnCQiv",
  "key4": "KyF1QFEMuoV5bKGQcKCz56c5kehY7P1Ma6p6WvwhvYj226pcYwbCvudze19AJhU8kj6eH4bMfQZ4cLtPH62zWPs",
  "key5": "4deumBZVjvZe42pkBWfcUwZCwzkxZveFwEeswPb1F51pKBREaHAjGi99mrVKDEYCNXVU5Zia524neAytterb2wFP",
  "key6": "P6E97RZ2pufLuTE466zZexqn1jDzvepbr6ZXAjK3xqwfSSig7LAk31smvac12qqFGwsd5XJeKb5ypyy222QAf1D",
  "key7": "2MmURamq88wS4iHoYZDwesRwubcCPnXg6Ht7hLuvrdNGZ2tFN5ZQLtuJdCbkf5syCCkMMM3qgHQ7iNNaaia2X3KZ",
  "key8": "4QHb4NZ42NaMAivUEE71LyBytMch52PRdaDwAVVJWgebxoLkf6vGSVsrpNL5kbRtFe1ZxrCmALT6DR3Lyo3ifmvy",
  "key9": "3JGPkLeRZKE2QycCL6U44bsRaDih97kJVNKJYoNdkPUuugWuHVf6qMF29FkExViT4QCQyV8RQ5wuo3BseDRYaqVq",
  "key10": "2LpvV7oWNF5kJ9fSSYQzd9U7Li6fFCMvFaszsyRf4brzeN6rvsfDeNaFmrLC7BffEcYfY6wdgBN2WMRyvpEC9Eb3",
  "key11": "5SzzySTZXKmugY4QXncBkpqhKE8FzwHUDFYaqUL42pyVDGN4CrADS2Ew8SFSKsKZ9rG2mE2ZdCYXs2QBBZUJXdbc",
  "key12": "4tFDiVVRUr5zxLwK8PiZn5Mp7QvHmgAXv6MPc6MT9LUEKobUfHFvWaGHUTQUw131XZhT1gmR6jNKMza1QyCwjwe5",
  "key13": "4FJ6LjGHbamdaNhRuGiuQ8ZBuaJqgqUDd3KFdLR9MA1r2UthZZb24Sj6Mcr65SPDpX43uR5jrNSeAg1nNghrJaae",
  "key14": "2jetNJALXbvmx9x75YJtM1P4MVwr1LsCa6kE7ZBS3vjU2XKWRuk9xWGwax44EqUbuu1uahsDgWv7PioiGncguyhQ",
  "key15": "5HrSLkR8GVH7m1e2Sp6kpU7yiiRQN2HJ4zrk9tnkWLewVz78ykeMGEWDAYfJhhSZ1QQkatdpRuwZ3q7qUakWYoxm",
  "key16": "2uRC3LUTDJfUfU6ocbSN3G9ZNCmNi9A1HxSuAU36viFUSrTcaPnjmJKpkDjafdtF6GxxxVmdsip8hvxRm558XWsZ",
  "key17": "2DBSqAwTJLueo4UVZWyiPcU8rhQj4hs2zyQsiA1Dzw7FX5ZrdsFTpVhfAfJTQiymH7Z58mVaNAAYUkC35ecLEWWS",
  "key18": "5oLhFAR1ULavNMmDFqZf2d9WZuZ3C9eo5ZbZK6dCv1Fdbd8o1A7EkCigu4oMFQkPL7gawFMAttaHBC1au5wsQJ8v",
  "key19": "5i5funrvkxUNGimy3Z1bLGGYGkfw1BuRTDyGBZwvR9NfZ1EeZJL7zpvvnMHiaLomkpTVdi5ConvAqkhDWTdEZSYm",
  "key20": "33PsEigKEaeRskHGNAUw52eFSXtQKtDDyDMRiTd3GvgPHmB5zGL3E7Mc6YRvaxy1QeAGaKa4TrLkZHmV8E3em6Jy",
  "key21": "62purKxCmsUTnSThqZbPB4MXs4WFe1anWyjnjaeyBMzQu8YQx9Pk8nraJKiPL5NHHLB62fPpeKxeMfY2miXhxaUS",
  "key22": "54FZebu62ipK3fPBNb5oBZqhF7TtHtWZCCpBPfS3noh6fmnmQkdFrhDjiiCzjyhDJ8JMFVwfJGR5AtS8kK3UZGxw",
  "key23": "61TH8HYkX1wSuWVwRPWPRcdvz87MQE7XUYcUK5rPcmv8y7AitP9KEoe2bzEVwFCQwS1Mc387MMv6tE8ifjtuKGBP",
  "key24": "vG8Wj9VjifwgFjg6wX8SNssTpfdqmf1kD9e9xa8uo1M8EayrJ9cs2DMTg7aiaFCWEYYoybtwa8J9rqrq3DJmWJy"
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
