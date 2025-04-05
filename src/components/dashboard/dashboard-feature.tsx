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
    "4UCWCrmuHLJuZx7P8BCe1am324QXDbeJRP4csctscV6jQLMcjWp9Cveb1XEL87E2CzgqaS1LyT4nznGuhcAjETLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "377x2iSbWQ6pFmHCUkxPFhLekR1chEXdhybFYH1gmsDmMNw3zHZBoNWRyQP2XrzU1smg85bY246AqNrr4u7Y9TNA",
  "key1": "2jTogstkkS6uMvouZKUJuHZUwtccUhBsoKoiLR5GjhRMjyTAC7FvqHKwHGyJYvoXU5btGEzvbShvLc4hqLdmEc1o",
  "key2": "2bgLy9eKftsHktPBWMXgBiN3oZwbPZgdDdwRBF5ArwUNwAknjJWehLEBmSHhqXJZdp9sNYSA6VHBTPnW64SqaHw9",
  "key3": "36w6GsB5ALegfEm6yjTTdybfmKAM9JtMfQfiBErg5EQvnk7XrLv45r4oT7my7fa87h1eVGwaEFHXryYnq1FDzMT8",
  "key4": "29AFj7tmReqsF5RVey1JKQm77Y8u3AmnAPGu4CXK4hvoUB4Eztb1Z3Z5U1GuofRxwHwNbmJRoZheEdNiYu6is1Mu",
  "key5": "m2PM5hTupMX2geQamf1o7kEUV5Mp9sR8yJHpP4um1e6XeQwG9RVEuPx6NYkuu7Lyg1o3BiNN9bAnLQupTKmEPS4",
  "key6": "4RGVFwXbTo1wc6iYgeCriVwMfvgv7dW5QR6RnDkeR7fJbJNa81NnuuMVqFAgX3CMfr2iQSn154JCa4vsXqtvapvW",
  "key7": "8G2qrv9BpnBnoHH954VbebZwThACT5osnZD51w6aDphwqp1FmyjYYPPAysDUEhPQsjpRXH4sxqBC24UotBMXrph",
  "key8": "3BFnJPjK3PZtKp6Zzn551zv2V8KWJQoszFE3rjXbQv78J87QvJ6ayVjoQZc6MrU6tVKhdPvuUG9x7nXjAWtdoBAR",
  "key9": "5dLVsjzRPJjCGRhhtmYEJzRU3hKNCFU6KrVdwRgEKYoW8ReTVX4zyeza76uhq8bpyio2cx2xJSiWDVW1WBAmpKxF",
  "key10": "2FSMZXfUmvjWGCEqQbBkSfAFs9bPqwb5T8UBYSdZuMC4Lx15vuFWAhJG1sV6QhGG741Jd7i7yEr9Jga9U9S6WDws",
  "key11": "5oj3jwPMNBkrd3dJjEYazUBwvovkawFrnN8PXZ4QyHnyU5DyKpK6WtPmaVmG9Fdo2hby5oV6m7HP5Xt3cvfdo9hQ",
  "key12": "63xj2ZGBo72PoabZwpKffFGq2YpA4yCaUs16Y22MmYspkHxE8p9AFkHoZcDPVPp45zW3SuBk5Tm1e1jrJfRi8Nt3",
  "key13": "4eVAqZqTXXesjNtjs3gjeoMSkHE3KLVdR4v7HxVV7edbPMBHmkANrYPrUtjoE2Hei9Ffi5XJNyMuWDPTFnn6PjT5",
  "key14": "Nx2Sa4wGEBZbxCiVTN6a1udiXtXksTAiHXgYNpr8Gb4TVeWQhyYVm92acWqo1dupXt8Nh8K5ZhjXYETwnyQofK7",
  "key15": "4kqh65NkjfTPeUGV4bd2KfhTxbN1h7Ey3qznJV4p7vGBu3gdyGBVch2DjZWpFn7FACy79AJ4xPuezZmWp63j3Uz5",
  "key16": "421a3jbvvQJLgTyu6ojb8sMtYTcmnxpe5ZK1edCVuaxHF8oCL5kMCEVixkQpRaYoEPKuNLTcd1Ezc4xuqVA6u1Mj",
  "key17": "uXTTraaxpqvgfwx8Gpx7ShWK7cJEciUfnYjLj5hTNTNprR2SUHaHz5UMqw6HifYS3ZHwraHXzCqrxQvmshLajqR",
  "key18": "5TWG5HoNGfMeFra1HFjM1vi6aTGSaxSyxfy9daweBoHVxh7D7wmcM2ptmcecaZWnYm39SYZVJiSYjMfX26KPc9Hb",
  "key19": "XM9wMoUKbfUo51ww3XkJ5zaoMXa6AWUBNzuKXfCGh8qLnd5UD3FXrGY2BNipQCj8ipj55QCP8PDFoupgJSTyqKt",
  "key20": "3YKYKBDR6AvXY47NugpD7XzbyU2Zc6t3U9Dd6kJSXrcADc4r7mQ3rJySsXvWh39M1yUYeDwWVR1epRmok57XhrKW",
  "key21": "3MYCa1YyrUNF2W1VMWkcFQsy9UNQwvmHfTTumNwr5zFa9PsGRbivEV7Ch1rXuRPpgZEPkYz6XnKRCTz4bN2hanNL",
  "key22": "4zb1pPby8eyprm4mexSJVCMTdw7VeTsEcZtU1pTSKVMYgYyxFP1BTKpraaCsLeoF47ivJvay1Q5WamqwW7Rqj2BR",
  "key23": "4JA1aid93uyerV4SYYMyJUFrpzeyqKtixRBf5oDBDrTz53pcHxkzHoHZCeiE5t4CohUM6g4o2o8piqkp1SxRW1R",
  "key24": "3F3X2eJnL6HQJK2XBnkJm5cavKZTooCPr83d6vqgBiwRGT4Breu9uc9wKzU2DumKoQ2kBJLgTsbxrQEZWmpaUiKg",
  "key25": "3VSZyUHWqf4crPW98tFErDXaSkAxhnkz6w1hHaCZSgCsx6SkC8tyCwnZNzQpPJ21hB4QLFnjo7aU3Lr62JwKsoA8",
  "key26": "2yJBpuEYku8NNjYqsruPyHFCybxoGcCDBQixKnLtSL51j6mneDL9mz7PrG9XroTpLHZ3yC22eAEHqsSvEo6HbDG7",
  "key27": "DQJRYVwMPHAyXvb4uuLkgqyDUpgip48suKziqNgZN5xgKrqdpW2ybSxCE6guUNQDk9cFtjFd97EJyQk9Sq2pQjb",
  "key28": "5VWUac5ZLB6MXmJwxYoKKhkw7dZxfruPkoGCpbgHUagnofQdtkzLbihTsS4sSN5dApgVkm4oAzKxMKM24AuLNRZM",
  "key29": "yEwd7MRgEuUxgBzPpkvigN5JAsqvGuQ5Uyk2SLZA9tn3HdCYczUtRvMYkka2RQ9qUaCbFyUoSbp9UTdJHMHBJgR",
  "key30": "6vMCwGLZaQtVXNs79Xx5XYeDsbYSAi4zqA7FvgibU4JvovC9u7nWunfmK6NF6h2BLtaNa6LXgUyHrrh6yDGg1Xs",
  "key31": "4c3C5DhKQm6DCzRaYPuAnAcCLeoPzj8dkkwexu9oFjMFXoejEoBt4vGac7d7Xdp1NjySoQxxf2kLfi7MJ9iTeipz"
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
