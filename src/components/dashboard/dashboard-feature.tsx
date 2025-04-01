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
    "4ah9HLb1QY1owmRK8HZBrU1KhM3mz6H9aVyZ3D4ikt69Fq3jiUfkp7f3Unv3HN16J1CRxrhhXDRzB44hsxN7J16P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6345t7Ai2Nathu6PP6tBfrLrh7BmpBAiyVwfVx67jaF1eebuW553BiAGao6Xmt1mupGKZry7UD2xBanUdcjC145J",
  "key1": "4hzPHVtZCtox1zbCLRpcgDmsRyGmAziEXUFhcLasL7RCRU7ucvG2bvHSoEDc9dydRHJdyEKfPXGGVAuBBo6F5vQc",
  "key2": "5eab113baYxggsCoALPrLV1JwVfhEGysqRFeRMjLxxhLvsFC4ozrcERW7b1gy5RK3ypRih9P66YJN11QLu44LhGu",
  "key3": "2nbF4AoitXQGNrxYVqMQgKJKtG78z2ott9t9tvdnvxt53ACiQA4SJWAdruRvJWcFk2PNsgJaSR6cuFgWTGLc6kto",
  "key4": "3BNd3cqjpDabEBXkTwbJuLhi7iUTswrqx1CAqAKSku3uQZo1KGH9DNPHgUwZqxquq6tcJGTJQ8hEouXtyzNyaSMP",
  "key5": "5pqSa8uf4ZAizFEQhfKsfuy5HwBeVxy6HWc5GNJEEFU5mWCPZjKvJUPhYZGJrtWTi2FgtDbsEnuYKDHVWF4HeweL",
  "key6": "fA7CS6dSwdZqWquuHPm57Pd2ACYqVLpHHJ5mFiKHU4keqQRPz4JX8EwEHxm2KvUygy8RDm17rX15tT2XvYJUWRm",
  "key7": "3tKC1TRzVf2qhyhpmTY66mcEFnkQaP5MzEX56frwT5iMaq8oCdySWUwADqNHby57dRjdjWhQbM2zv9TcYeabVXKv",
  "key8": "4e5H4r7PzmwQoC3axHgmJyiod9ZC6ZPSzxm9XeKMjQNUZz9bavcuvyY5bX6ff3gzYTXaRJD4bi64W3YipkW8zUBs",
  "key9": "4sqwVVVhuiCLQVSACiNuzosMgfb9D7tvMgAyBojLmvKHETyLncpxr7fCz3Dsy1iChb9YCdLHxszDuNtnvbqTXpRn",
  "key10": "3Jrc5sByovnH1qnGyiYDL4C44qZ2KoDg5NiKYy1mLtupNGbBPxsWHYt9NoFMT9ghMmQPto2tVFEYjrdSDGYXtWG3",
  "key11": "5jTSBRhm2ixdpeKEwqhEtJYnQv93TCHgBbz2fR65mpyfGf6EGfbc1ZqdbdsAMtxyrn58k5KTMdqZz5nT2gvLf8v",
  "key12": "4zwhhfNBRvAmE1oxxbYtkjmV3k3VpcTm4U6tKz6jhokT1SbgaxzagHm1jputUuTpXqqFwgh3EThEvVFtpwpt3r1P",
  "key13": "3S5K8AMTfJkqGgp4t2SRtWEEbv4vQUD41wnFnsy6oSv9xQNhAmAcVE4fqN9dpyLm2jG5Y6yE194s1xGFVJe3THan",
  "key14": "5BJycFH9yDFfFikfcPGU9aAmrGmimCm2woWVbZNun2Re73RLC8RiyiSWvKs8RCxwp8t53s7CHcHBKXqRiNXktAWo",
  "key15": "3ai9bPmnfiAuYUsjRUJ9JYjbpdaknwkg3EZ8azwyfk1KbTaqqDHBaXqRAydLS4XcEj8RCmpo33eEnRotAu9JS7tp",
  "key16": "3rEn2GRY8gw5qCeaPUKCx3oESswihx3gLWh9HYNtDAQMGexZq1bjH5uZojWM31vc9ogn653kcX7MsEYWqWWKW29d",
  "key17": "28inHmTBqehmAvULiuq5Wb4Rc8jpkHmgNXDvR6pfHgtGcEcb88sQQckq1aJTaNEp4sJK2jCri4LHmBNfaynBDypi",
  "key18": "3mFU7PJiF4tCQdtNvEtYcf4WyfVPZq2Yjd3xsVMUGA4qQ97Tp8qu8tUapnDbkJ9TMCkUWjG3jBRZjEwLF1ajDhv3",
  "key19": "2JLPDTvXrtRnY1jwGy1a94LL3UFg7nS6uUDb81B3T8zHpSqakq59A3cu4tjPxTJTBLTxz9fVKePuaQzdPwewexaJ",
  "key20": "5LCXXXRkxGUmU8iVKiThk8VCgrvUZGrdJPhn6T9GhRovnVwFqeqKrDyEAZt673N5ZqC3VS4zXG2r7VAGNTofMeHE",
  "key21": "3j6SEj35tZzUQtmkogw4NAsWznagCgM6X5Vt5T8J7icwNqz4u4ZViA8aCH4m1hBodsG6zDoL7fbqMWJW49xjSKWX",
  "key22": "McFwA1oLdbrkzHhiNANYeTJsRv2uj9PpHsHGrKAKjpHpyXT1J26F24Rd1knBrV46bkArqsBecxpUewECRvMbfjn",
  "key23": "4iFPQdBFYQq7fcadRzfmJCpNuWwSFEw8gDT63yvKUeTLS3ax2XYuAHHoVcMyaXxTihkSjH1TvEWc1A8U6f1A48j6",
  "key24": "4dPTZAJe6nnH5UrdfBUaqBeH7VuKZaRmSkdXbMF4sTWEhLJb8fwfnhmo4dHo3F1rKaqrtSj6HyoDLenDHnS3PGSR",
  "key25": "VJ8GfumDbTdX2FMiqs5wrMFk3urWhtCfyuPWBJACr8fMTqiuYTPMfZkpVtiy9cgHGi6CdDdVcqUsWSS4zHaASBt",
  "key26": "5WR7WLSFoajUkGKtYWDE3v8DpszruqswPPQMsJkBgfKFe8UD3bqyD7RczxHNV9VXg9wyM5wFTM2D7zYyALwmruVp",
  "key27": "PQRWrYzzg4oSpi2J9WMoYjyFW3m53WskNCUYGthCuBXoU84yfpg1iXVEBsEyYbgc56LfDu4thT1ei7Vx2nwZEzA",
  "key28": "4dHdv8gLzgn2m9jQkGo4N6tNHuMQrfTScFMxnNqg9wnUoDJUSVv4HFK2NkYy8RjKRbNRQ8JcYCdC9NhYdp1J1cf1"
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
