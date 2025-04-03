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
    "2kyh5Nw1RajxbsVozL2cRreK3mBPg2nvef1ojVzQUsbTaYCaX9GNZKTwtDBhAawvdnGR5VjxxjkjNUoGULS4AgMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cqDmPMbrdnvBATev1GgQ6TDorhFUmM6STZsb8au7bxBRoErMft9PQeZKgHwWiF7n3YfjzzugbQYL4h5ULbXUdvi",
  "key1": "5LmyadUMpY2Td7UsdVUpn1EHi7viDN2EEhSTrSg6bQpTNjfuvx7uACS1prPRU15ANqDyYpp2ssMcHKetTrSaGMpc",
  "key2": "5PLMLXCSxgm124Ygbteckm2jUHL6zyQC49qHaTzmpRzid3QKRi5wKvPEZDoUZTVnt3q1Veu8Tff9pCovSJ6CxX5U",
  "key3": "3yvnuGJgEQipi2ToUENTRk8SQzdRCjCM4N3a1gpotWCj7aJtfztGMfSfUVKQPL8kqavzWqAgUtP4eJttB9b3Kg1m",
  "key4": "4Q75FkvTcAhTz3p7xWTRf3xUfNxr7TUjvoSMLt6ZZJFdTHR8yLUn1GvhvxRSwgcvm37dGTWaMbc3HJfcgvWc5nWc",
  "key5": "631pFusNdpzNBgom2hZcn76yZJcFG168hTSBBxDnRxw84gRoUbfRHza9p5fHkCqVBaTbHRLi891xbgeR54kp9wKh",
  "key6": "3SnuQG3mdrkb3yULCHa1Ex5DvfL7UEdov5TMf1xDMRgg8C5r6MDXuWH5MboeX9pCPqRnpHuj5jveFhdDuh6gJRCq",
  "key7": "3xn9gW5L75BTZGGvDcGM73ntjZzgsBB7rQuu2iDqG4Lkz5iwdz1WaxsY42E8ewwj2d5egzqWFGqBaXTaAbBNDJM4",
  "key8": "4JjcacNRstiq76QXzLRbsx9dw7Kxejc8KtHigWSYQ3kku5zVhGeN3PsG3h6FVVos1Lzh8Xemmr3CaoBYNkt1CAvy",
  "key9": "mY4x8pZe2nwJLNgijCfh4gmWfVu9j9jeYDitGuVrFCYPNN3An5DfufcoVsrRSyZqr2sFnCYCQMMEHUL3fvams85",
  "key10": "5ceBR1cgc7dj7dJbfD5Pf6APT7pK3KfLq7MivkZUK5FDMPprA3x3tZZyCdgGMPiY79LTpGVmFiYUhzM9jQ6m188w",
  "key11": "24gjRYuV5g6gaRguzVAUK5JU5RJ5AjmTttKXKmMmoDE3tihXK4T8WgHdgVksVQpPrTdDnMo4YtV3zK2gZQzJWvSF",
  "key12": "4R7riXnESfQ78L6b2cvL5c4DvjwRTShAkfVAgKusAXjqULpFw2dWjNVN4vvJFbqXrx45zT56xdqzwAE3PTMZinUb",
  "key13": "42hEDb4gyo6LGQPxzt2csUrmc3LMfyoMmVKqPrRk4oY8Ef8jVzGig45phKWcv4zomxeQTdZXNfRay41phVWXSYYx",
  "key14": "uM4zVnGDBWPnc4CJZGyqrWzmaagmdF4sv4PzyNrEva9Md7K18EKokJ4R75GeDUxHnZJvkuDQ52vAHZQLWfehnCh",
  "key15": "2NDJnCiAf4iyeBxEfBkq3Tewx1PKhaMMwg9Ln4sN8FNxfBG9iamvHBNZ9RBrJ4RekMXBMEz3aT2Vkg6MeGGUZHpj",
  "key16": "2i2KktzEDyxXNvRoQAEZXTLjjdNM9RYAHikT5p2nLHk8ouTHtMiHCpp4sthyFmy194pkoNtrZ8kryMXf2Vb9NP2R",
  "key17": "5nqcSbPPkTgGvV6ZkoDVf7ea45HJBEV2Q73R7UzC2Y9c85qgC8GdFzKgHmHyf49e854GL9xrvKGwt1PnK2cbqJWH",
  "key18": "4eME2ihDX9Ai5pwdUEZ7Mi4d9cetvBhKZMuTg2UKBhidoP2CT9Tmeped7aL68WoP5eDVNG3rtrfUthgxg6Jq3RWM",
  "key19": "3yR4ARWLXzUdLAicF62bMXAsjfX8Zhkbnk4zjZnvpPJek2dX4vHSUGxpNaZTayahMVd9CcJPcDNERdAHQyR1ZHYh",
  "key20": "2yfSLmP9rYxmaz1ZCPGaCf3Rn52skgJnZbeyez8koH42gS9DBnCZjfAPd89t8Wxb5eBAiBTBcGmbT7upM3tCrpHC",
  "key21": "51rfB8ZPrxyZmfTuaZZXhKCXqg9p2H9EvcxPeaomJXq5dSq45vgJrSHRNNQb86rzuMnXvpi6ErvJR3LbhXf4T7uv",
  "key22": "4nJCRSp8hPDqjY3YHCCVLAz2jGQNyCpdhGfD4TzUzfwinMdEd5NcBXxBQr5rNB9hztWQMRHTsxX4unTPhstHJ6eM",
  "key23": "3uEJCg9i1mBdPff1Ku6qmodqpkXiTntHS4i4kykN7UNL832XLdtAYfybKpcfCPNnwYm4vLksKk4RHybznikm5mbE",
  "key24": "sBg1uxHRT1KArNaxpMeUv528G53sxwkLN48CMVQaDB5xvK9VsGVzGrJhWW9fS4wpaa7AFEmgr7SwUCC1z4G3AZC"
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
