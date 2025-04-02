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
    "MMvsW784n5mNERdV9aQKUpmqsTGwjShRQvpuZGfYbD5Fe91TPJWWw2CFWnByaZETaTFj2xpcTCpGjHVbStByV4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qmRBRz6zbnrYfqS9429LQQXi3nL7A57t4pT128TYaA6cHYJhj7CwhR6Kmp84SvAwRsABf9PLrhGmjSJ9L1bWYzA",
  "key1": "XKH4LAjLrgqGtXzrb1R2mHLEYNV3VPHEHmTfLsRNhg5xqnsYXufQcQi5Dtkv3DwPSAD5efhTFVEon7cwredJYm6",
  "key2": "3GQBbFcHHGd1RrNSxoHecQfBZPCbvzE9z3xCFuG2JH6bNQgakgZkL7AZPiC1XQ7TGTZq4igRst9oCVd5uzF8JKSC",
  "key3": "5UyjYVrQDQJDEt6NgHs3Enk2NyLbMUGPVnrPDUcSyFUzZHZshCzohKMA8tGts5wuRET27k1iViyS5qR924KHyeTr",
  "key4": "5KBF6VL3dwGBhZ4m4JRxS1S7JNwVyW5wgCxcvNtuqovjoC2TddWWwtHSpWMu6LEy27NuPG3WA5BAmg5Vz31Z1HZi",
  "key5": "4jdgxieoX8ALNcNujpojVKUM4x82ZSK387dVzkDQw8f2QqCZJurrWwady68erAo75uar6VozvGdx8egPxqWFeDC8",
  "key6": "4At5kKUd6WKRJuh9STEba6muLybsN9uFpQaqwRebZQH8fVWpsUFjAsYj6a56CMJERLLGvDLzvJNxokpx3BzchDBe",
  "key7": "4D5TdWqTzivNcZ78eMMgKZdsZXygD8GTTc7kLrU7rLwXMuqmWeBeSw5TdfvDYCim9BxttfcTsMy3ALjCZLKuReE5",
  "key8": "5Z2i7ASTzVBKFxU7pErCnTEuTkBkA6HDSpvegi8jL2TDFJJz4eDXSMdC47X5YeH8RMPmGrbi7jVhJQx6TRFfVsSy",
  "key9": "4V9svP8VTE3rDyLQCBXDJxwo3dmCGjXpMwKpg2vLXewUXwyT4ncz9e31j8uQraoQpem9Vrsm76nDWJL6gfFLrRVH",
  "key10": "EMrpwyS9bjQSv2zLJyKqeget1rnBPS3sFT6TCUDr5UkemFVB8qDTZvRvubWPYaSNV5gJ2tuLKraXWXe5ULbdAMY",
  "key11": "129qbsa9zEQBhu7DMd3gqpkHMVR77US1NRhguvFxRuZnLiHtw1JJhPi3ddPuRmM1AHmHYg8ihokE81DLCtq7XAzW",
  "key12": "2j3XWhGTZwsj1BhC16SNLnQMJ5JDfLo7LvuTSrWDxUnL7aV6DZAr6RkxMiSgw9hEsyzMF9t8ET49YAKs47P21EFm",
  "key13": "4jNtnChHK1FvGheyC8gt1gFZST1AdVFkn7cZ2UA63tVtog9i2PQqCzgcUrrCa1FUHQeGC4wawqAhk53vhQRaKaRX",
  "key14": "57bcjvwpmHqqTC9RbHsYVAVk5dmMGvtoXdFB87LpuPmjGjVMxJcu5pvsnUvE2fSEDK3dFrvm3FefmNFmsBtRvYFy",
  "key15": "3EHH5GT6YgZHfhqFymJeoU4NUz6FwDQKqfM1T69HaWTPMSe6hWcMzqVR4UAEB1tna4Fa4UYfg61KgW9dQSKzNepZ",
  "key16": "tEAdi8jZzU239H6rjCgrz9oicsc4Zqsqp1J9pvnrs2azbkiX1xYiazBctPErzZGJvn368QKYqMKa8dYhM3MZaV5",
  "key17": "erSg1f3ipbtAMKr4s4R2oLkz642w1Ua7osXq4NdHbBZ4s5NM7uWCDKcsWYQY8XA4oTXXRKSkM5dnEYgTQ71nR19",
  "key18": "4yAM3XCnTr4GjYdEbPu6uT5upjptizfeXLsNmgwLByHzfmJGasAv3j5t9oY2AVBAKYz3WEehvQNX36dBmZmWfrQh",
  "key19": "2MBqR6eAhvCacy5dBTngS8tG6ZbksQoMXh16Z95FTE24RWS5S7z8fitymCR3qERjn9MmQoYF86g6cWefiLHPUudy",
  "key20": "4EesKbNJ5LscuVtGX1UFfSDzvshxWRLvXLW46qk6hhYjRNSNRPGexPxN3ptBEVqReXnx92zBTvF5SFHjbK1KWBQF",
  "key21": "3Ecw7r6kWb8eFE5yWgHY9d8TCBXuTQcHbXmeco7gBQLzh3V3nNrWunj5YWFZTCLppqvQok5vvY7RVWdGsGfiizx2",
  "key22": "2AsW92zcfN8ZcZxNFPdBbGRohzJLXEZSqmQv7ULx3BB2FMLiJ1QyyZxHTTh1LcjA5xzGrHk2B48Q5cNQ3sDjCTmH",
  "key23": "3BxKh1CS8BkLe8rUbhfes1VVsneoJvKVgTeyEhEVDAk4GpkAfC9vhDovxLgDu6ipgdjyre9ZcTPzcuCMqwoQpshA",
  "key24": "GkBebw2qUADK4M6Ya7ZBSrvtp3YVeuzVKtfuNNWs6V2B7TrK3mevrYaMzwYCCJnoz7GwVyg8BZPaiZhMdRNiv98",
  "key25": "3gKL3xK6SJSgZVeJ1wNT8HsxskDMvphMDqMDAWLPKHU8Aj2Xc3yR2SzVovUMUMCywzwq7ZNoJxCaQtketbzcjt4r",
  "key26": "5jkKuSBT65AdCPshuZknRH8Jd7XHFLXXe2cbp8LVG531NGZPSo8a9ewWmAtKYFXeSrx7P3naFum1JstGkqSR22ss",
  "key27": "5zkAkGgtekXDbmkqPmDcyxn5t6QeQq1De6S8kqstT47K7FnwxSkxm9GuDRUfYbUoiYX87mCNvBAryY1xMeWD2UTW",
  "key28": "5773F2MGFHD5htj6ucwdkJCabmPSJLsZWAg5gWbKBxAADa1NK1WeH2p7HyugrAkUSJwsLvDXazwZiLy3YwJHqzdZ",
  "key29": "5BYTqrnmEPQddnj3VRi9F2HMbVsiq4STmpg4BVKk8SuSwu4Gob3Ma6kyzLryg768pT18EpxgqE9xr6LLXonMRjZR",
  "key30": "3EeVBPbs1vogT4HUBpKpbviuBVAKfuNMqRcLn5GyCu2xdF8pyr6venWxD5ecyMPVJ6Ws8y4Wm3s6iXcwDEtHgPqn",
  "key31": "2ZnH2Ph8dYHaKpfrALtcBQ4zv5KuiFgJh3xhubnvspPJXp6RuLrq9Xh6LohEzPMPLWbH7A1aWEWUuDvd2Nkftypz"
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
