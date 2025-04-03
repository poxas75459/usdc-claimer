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
    "5ReBNYg2MRCv6mxd39KBD7e2Vnhsput6Sanpha4wB9AK5iMJRQXoFmfPrZShNkGUyQFn1VC6mNQ85a8Wx3PriQFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54p7TetbdwgqiitSWY6hGj9sjBuocXtLWsCoT8XhVYkmFNxkFBuDjzYYcnRre5vMrfPfxj5RwdFbiU2h6MhGNqmZ",
  "key1": "5oATaWwAm1zT6LxM5TBRk1Xr62Ym1x1HZkKdWUFLarV1i6YYgjb8MEHPWNYqsmAK7B7aUAukDKabdrz472hY2yfD",
  "key2": "2DzRf3gnnNhZaYHJVLR3mKaNcQWkkREc3YadiG8iWA6hipvshCuzwg3eERGHrtky8mpC66qcSXYf6pMi2WXvrYaL",
  "key3": "2TEvVisJZbGstdjhY1CN8GBpmmeTpiU2rp4sDCNMyCoVDE5nXi5FfjBevbXC6Eyt5oV7XaU6JQBUQwXQLcQDkJ1D",
  "key4": "47VknMbdLKiSC7C7akHPmX8c2MXCzNsS43geD6o5C8K1yPHooGXwqMrwHu8s2R7pibLcuP1NRBRVWMHidfa7xNrd",
  "key5": "35iVBGaA4J4ad64VTDUh8SeGKVGB3NHEZzyyMb6XkLvW65em1yfshqcAwZWtgs2n2mgmy6hJZR4HY7ztiozWEwUt",
  "key6": "2P8yuHsLuPCL35tvBPJZEDz3fE7NxhkHRyUMPZxS6fTTM2ytAdYSzv8NmBTQKikCg263uC7UNWA6Q81qUsKkQwqq",
  "key7": "4h5uRj8UUC5bBsAc7byD2ZSYGzmJqg7TvuLtwQfSn6wYd645GJebsvPGrbXP1n6i25iBCdyw5L4LrAK2W6Vokdqd",
  "key8": "4KFxs4s9NhFD8KjGWJymNdGcuJc24vN1aXEP7j6wonkvGz6bbaLWboUkwnLppoCLb8t3MMSpJUF9idnB97ExkFK4",
  "key9": "5w8gEUxpQyrXqAKU8Wq1K3zUbA9RgcwkagQrFYXSd8hc1KjuKA5uNzp62XLkhQRkr6wSv44URkGx8o5psmgF8hfN",
  "key10": "5VaBizpS7GEN3V5Np48dukYs1QXUPr3KcjvB6jzUEZJVzNcL6PNaHUmHT7r7kDNq5GZ67TmPzXVV3nPpopV3WtdQ",
  "key11": "4iWBE7wkkLrz6w3Fy5R2C8dMeKygpo9yeMSL8VmL7kWMgCMqYe84z7TgzvgJpj6MPFyBNR3qBtwr69dDryzTdE3B",
  "key12": "5UyV8VQDLqmWthxXpQDxe6geeFQ6NnWfjMty7jHUcQPAQTbjm4Bz9HjQQiSwXammhydUtzfryeQxDQ2iQndq8YaA",
  "key13": "23jfcu8qvFU8eusFgGtYTmuZt4n96UEjnhMLAgUjdUD3U7yqGL89dHeQBwcc6prbWPQBLvAXtA4Thgxnq2VxFASC",
  "key14": "8JqYPX9c3RJXnfmYjV7pLLqC6nrngX36DgqPeqdEd6bgQnMETvAYBhLFGB6Jr5XoC8g8RSzPauroRHAXoiJWq9x",
  "key15": "21eJxhnPmjjGvxasH5CRRhsL9mkpWrT8gpXaQXvGbokRSBZLiscCRQWxsW77eQaBC8nWow4dvJVyyPDMkcKQNJnj",
  "key16": "25WTtaqyvr6NszibECWVDKRPEE8VmYNxec5uy6gjdceRMoXq5ZeeZ2rGJ5dgXhSQsS9iYqGpDZt3sZzaJzpFLfqy",
  "key17": "37yA8Neyx7frXo7C6hkUnoUMDYdjJB89Y2YnMxjug9qC5RhP69xAnmPf2fXeHTiQ5hyCzdXYsSFXZG267iEho1zM",
  "key18": "62KEMKUqGipHrBhU66VJtXZfvA3dkcwsXuXELZo5rRic5S71KxgVi75rEppRJMVewFcc9CX4iHKFKV8FoBk6cKCA",
  "key19": "bHurS1cKQLktcMA4gBTBww4nnGFwJi4ryJc4x7y1sTYeaRE5skZJzx4H9JGGdoq51qBCK5QHNHzHtQPqWncVPSu",
  "key20": "2oRTu5uG62XCvXUWA4ysqFG3wYLduZeqUATs1JcEceNefjs9EhA3PVjy69dPv9Fe1hDeuwyv99NuxWQnALa4aLiB",
  "key21": "3pCtwftNX7ePQTjoDk5U5RjBRBuq35twQv2Nc4q6WSnzdujv19UjieH5atfcsdnhFnw14xQXBrvkLsqPUobBYX2c",
  "key22": "3fYRmwHLTzwFicms2kvtKJ3RMHnwWBjNNDXUG4G3BmmJLKBkEZB3oLkG1aJKgzfPudooe7eCpzFCA46AkqFuYX3e",
  "key23": "8A4BakxNms9qhJmx7SBmVBwbJ4aCmykLhMgrqwHdKuZZyscW3yhFpccCJiRAZdXPmu5fqUCT1Ncm1n4ueJU5EkQ",
  "key24": "2ujKuYCEDfWCesbs4eQUsJBcxRgFyACmUom1QmeBBL88a9fUbT4suQcadXxRcXKFV5uSRGvKpHLXGP7Fw2HdYADB",
  "key25": "58HSGsYg2qvee7c6ZJNVpHgF89DJUckaSj1UmQJoLwUakCNtMAH86Bs45ywiADwBaMe8gADe438CcXTHuCh6JpPy",
  "key26": "3sA3r655N7SJFYwmy4ehThtGLJgCqBGLRo8jzeqkJBJhevUN3XchLjcCnYasPGwKCXUGdBMqp2QdRMekDrZQvUmf",
  "key27": "4i2KVdAJnjAYQg7xSz7NMfg3aRGMJj3KL1HybLHV55EADubsHnC3W13a4dsEWdr8MmdZJz5xCm8K2byxyc8qVCLH",
  "key28": "kXagtoKXkUunhmWYdNNZuPHTEfUUxg45cHo9W2TJz5gRW81CRLdDWYnboKtTFnKMHwnrFtPkFgDYVfZtngMUr8z",
  "key29": "5hFhdTAj5BWzjF1aKuYW7FxtWMVHXhbb8Yp41WjFNftzUb1fAEvsEdZsSBGB9ueBBS8G1SwTcoycUZTHVrPJVmwE",
  "key30": "5jdpCKoZGwcEW5z8YusQ7Dm2Bk4pemFGc8JzvNKduGy1a82UU3eTEyTuTKYDt7vFr1TNUuwxC9dfxJHMTvHKHaSy",
  "key31": "2y8cNtdS8TF6VWfbS4rsyZuVe1nEoMED5sUY8EooraJVB16LY6wA9fi5obc47Q2r1UJZtxasNhVZfWaUeVMHAN2i",
  "key32": "5NTbHVMdseM2wZaCocLn2RTHca2CidvWvmjM4wUnxBVB5AeYzsTx4zVDjqEmP471WGEuYv12TaWRodUfr3CBpbz3",
  "key33": "4UHrnSC95Q8b5jaLZtD4BYwp3G3NJ3PVJTj6Bev4JtsD4W3532yWzoQkuCZD1L6CJtzKk5RGH4BdqLcV7d4msocL"
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
