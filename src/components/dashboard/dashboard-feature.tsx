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
    "5XoG6Lb6yEtccvGNhHB8ALb7KeVCoTrwiZxCL6HmjbavbvokB8SnULd22zSzxMNzRWrWappkcZ3Sd8trbovqEGch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jv2UCz8NikDUZ4t2g9AjfJ2GdSnBgNvhBJwtzocyuDMXpqWzcGEvDavHBaTcPiwqAJyo7s4YnkLEeySgBPkhcYv",
  "key1": "4pmg1xBLJBKrQgrrJzSE28oqBmCVWxQTp8TVL1nrE4ei2nPLGZto5gLHNks6SDWSEPNDRK2qrNsJzohW844i41Jr",
  "key2": "4goEh9YoHsHSVDyYNPotdihiR9GhQAnMZUz5TwEMhxRxooyy4Fv6qDfHtB4rjUcv9n4ztKFesB16ZAr5ZigHKGTz",
  "key3": "2Qm75JZSpjdfetoaoQVU1zLMCwiFKERKzeWTJ4XJ9MfGnB7vvfEBgYr8ni3Q6892VxvFvbDfkksyBMt3N9Dw3B2i",
  "key4": "4wkBT7HyAofvN4tBs32brukdr8ELHwzTUNkMtdnFxmkQodrCrVwXNHkCAzBYSTyFp6gPJkiKHhBci8QCCFNp7HHC",
  "key5": "3n8Bs8bTa6KMz3Mb9WBU8wshnr68RfhmWMVn9N5tobD5EqG6ZL64KkmJwMetXYhX4E4TsTdndMXdJkkjza2K84QJ",
  "key6": "5au2GZ8JGK12TWGUJubh6HhLyH63dr7CSqza6YainkoKuJWXAUNkthh8vyrUJ1vRVSxra9tPqPmuVE5eqiRR59CZ",
  "key7": "55Dpvyv3m6MPHLc4q7MQVtfGEh3rK7u2VEmbCxehp2QK8WD4mpns5Tfzc3zvhSHs8gr1S8YvWsQNZzBiiC2M875D",
  "key8": "4SrvdhLR7Ez52hSbWQagXXV9XWWPSfTGKTKJiWzmSho5bXW1Sk6ytAjDBbwh6d6Bhy3KkEJ8ufPb9KeWuxerKtFo",
  "key9": "5LV3pugVEE6yrgwwjQQrxAWNBJVdWKN1ZYACCwFSfgxB9VMKJXPCsXx2fsjMY6tnxv8SEE9WaZaMP37rcyh41j4K",
  "key10": "2tN5HTDbzaoxKa7WiKUrya8BVuHJPbtGUvkFrQW8SXv6UympRFtHHDYhPwFrK4iSeJvLyMp4K5G2raEFCNZkqyhY",
  "key11": "5kan4xWNmMmLLJ3ccajYwT21S9PAJbNLraD2prfs7HAAXX8NdGR7nxbDJtffwGyvQRCPkXwXk91X86JduXHxySy3",
  "key12": "5HJ2s2nBQBfQevBF2TnxJuZpJ1RxC5yX3VcxjzoP83ZLVQHRvz5msFkt47pCbxmnNVKaAKGU2aw73LumfQB9SLjT",
  "key13": "4u7eFk3JSaZPPaQ5RJ5Y9RbtzoCeUWVJSUzAgTqsokdaDQTy4Di1isxSGHU5ExDsGYL2GBiRzGk5dgNC2Ryhmk7A",
  "key14": "4JiUcpBpQPCG6JMeLAreHJGmewmnUqcpvXvCNDtiWyotq6ChAupPrTm7XJNsFDqMg8KEqixvXmsQ6WFz7Ka4atpm",
  "key15": "5h6Lem4W86STV1G7r6nk3eA6C381GqdBE5FmQdHGbefJvoPsQ9qUSjDSyzN3GP4dLfqPFwD7KYpv8Tb4cK7zs8K2",
  "key16": "26FwBqojrxDgXovvfnLRMMKWQX1gknrCZ54VX8PrKzmT9GivpFBunnydwttG2kmAKH6G71bCng9gpok4q3vRgJNh",
  "key17": "3dckt5xA5CrtZEUwNgab9kggMSNgX4ZmrhrkVQb9oAifyioLWP4SvT7G91Ey8RdwivJQzjSx2q8ou5yrF8zrbJtj",
  "key18": "3p7L1hCdBBhUKZHeCwWo1gQbFLGdzXX6s3PNNSDLdHVAmk9assSLqsJmM8daok5P4T1bPFYUcdzZ6c37ZFor6Ph",
  "key19": "2YC7GmVYMJNqyk1qBcnkD2MU7gWFMrzrAbZETfBkyBfFF16g3VPQLsQ3AJLaxtpzGV4omCM4ai8zR9K38MEhnrTg",
  "key20": "yKSsak3BHcCnDBLzy5tzchhWnbs2X7XFFoybWiGuu6LoqSjzLEAYGp9FTyxKSKy4MTCBWUXPys3LxVo3bzvTvSg",
  "key21": "4HZPZHK32iuxsTUb8Lag9mBscabaK8g3uKy6LZpnKgnQA6MBopeLYwookPE9aJPeQWyfTkDcuM2mKNUULE41Ngan",
  "key22": "3CDVLUatE7dBVZeVsYxLYWQCHVvZ3w1pKKFXW4dkKD22GHLDM1aJcj2fLVbb4ytgwm4Ea4AWjZb4iwKWtibsJ5kt",
  "key23": "66ZD1deHCHWnj4Df1D4FaeYz9b74wwDthwPoK8RgXVqv7UtaL3tmBqiVLtKgMRHoQQiuEQ5ZtTz2cCYk2xg1St8U",
  "key24": "3sbG2sXuKqgwDhFiqQGUF1BfHvSXN66p1Ff6kkJq5Akj4qiTqNPL9yrsaRR7JSe6285S9NEbkA5sWgnCYxpigTk",
  "key25": "KCyv4dmTjcrKuVZY5EuhNv1LPWgGMEAUUCbjCdGgyLz2efwzap3gg44CobbC85tLVTuQBiuHXn2HXLgaGff942F",
  "key26": "2tdRP7bYPyTdh2dNHBNuzgny6b37ZQM8X8VKG3yPAEC7L9WkGyRxxGMyEFuXpw664YBW466U9deEcb7prwE77nBp",
  "key27": "5V5XFA8xJh9cYKseXC6BceY4Q5FuxpAcxPSrb5xpTD8Ji66GySmJc4nt2AJyN4g9vQNDo3RxuJH3nK27uY5bmUtL",
  "key28": "4RVDSUDu2nJ5FW9YnfMo523gTgqMKdcZFN1fpHXmfJM42ftEHQ7UhJ3iVS9wyVHb1WB9EZUnAN4ssrTJQ7Hm3ZrX",
  "key29": "2y3vkbF4mkJxfkVCD2YkdSgipywfW1UxBskDaN51JrD1C3wQnKDCd8e9jvWy23x82MdPPxJzfjzgx6zV4ccYxvES",
  "key30": "2czmiLga5u7fBsPeVNVVgpd6hx7GzrME1mzqJf8va2h23iGcAYKXu1USvy3tCrYirpqsXFxXnDbZwTDDGUafsZn1",
  "key31": "oW1xoCVRUC5YveLS3y2NkB5YVTwWZMY6BXYpefuHWBh1qpbEZZtq3YPNNzFsxub4hbt2vvC7rKXwnw5MuoTvfWW",
  "key32": "4eVZeh5ansfmJRZ5d9nscW5YBsA9XA9iHCAqAazhjkKAjQDDoPLbr6pd27okGNkZ1B5nGXaoQf8LiM7tjyDuXtFw",
  "key33": "4FPLiXz3fkCB49RsYpbzFjbuoSJbKpfYdm4vpHKzMmeuZEJBiHdJuiK7wbRNyFudNi3VWb7Dzk6UAkEGTB8TLWtx"
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
