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
    "58L7ZGReSkzcKWtrzsje8CTgMPk5amHmNvy8JLmMW7eJ8THFQ5okpL7CraPcm98pQL7RvNRzRYFaVmnU28b62gbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqohzGm1Q9X4U2fjAuBZyewtHodgHwuxC6GmQzApJgy18SxWN3PbjrH3xeRTBZzqW7vUJtBFPJZeJiUHvjFcrrn",
  "key1": "3VzSE9LcojEc6RnD34xjRYxEQ8aRAhfLDTwV2e2kvvbmbvvrXTnNyfmkgSUkPznEkdbPiaWtEhGALE5uN1ddeMzb",
  "key2": "EMZwe7rXvC5Toy9WtrWgPyYvH8ngrQoMCAuJwYsJH6ZDD6VCvd7q5EdCE8MxqHbfvBbDzHEEiWR1fJNJenbqugP",
  "key3": "3ZM3mGLsWHpSWVrmBNFGJQDNsWSQRs6oyFXeFPwTCdV7241xkbRvRq1pGXtKgyGwv6GqAoCX7zgUcKZjiU4LEknj",
  "key4": "3R3HjjCp3RMJktDXeFhPFQdUMCm5zSUW6w6VevVG3mfZePo3xvRtM77otfeUM1fXVrDKgkpXmhxczfaavZxov22p",
  "key5": "2mQhyaqbXsq7e4NpH1dvAvcDvwDTVcDHzCqNAXQvKF8U3bAZNZnqSSRciS4TKjjRscP15XFtEoo4uwqF1UxQujFf",
  "key6": "3JgjuHUxte9DAKSdVabKJEkp2CGmgaji96hz8LgfR9Wf2NMB769kUjbaxf1Wx2vccH5B5dDcVJN2ga88jrh4vaqj",
  "key7": "4wYFdqrK3SqQZoycx7roGMaiSbGDo2YTMn5JN6hJtWsiHdyoo3UtKoSCB9Sbr4k5VRkyD7qsEz9RcNmKU3M1728G",
  "key8": "5mBpq49r2Meks9wQ32JWFYs6Eska6yHs5UeCgyzZh1sKBko3xnRiAzbbSYEQczz2Tag3NWnLSgoe27ruv9273XYw",
  "key9": "2CmrbHRG9HkBLsZQGzh88YGptSkCnB5ReqMFExkRz7d9cPbkaN3aPp3iWRStuUPMsTnpThgem1t9WprCWNvSbgQH",
  "key10": "3Dy8hiDRFVvWQ8rS9fxXUGcNxnupgrLEjvqXMAJzoHi2cE1rqdYwNFQFXQH8BWTaHPEacL1edwYZAY3qwj8Rj5m4",
  "key11": "4y7ytLJr8Wgj4ARbmY1mZDmuxbA6Gg9fuynxXYydVJQ1vhhcRNREhu8UqjFVerqEVeJXAWUiWaL1hgazZKMpfTPb",
  "key12": "5FKyaVHDpPPZF94wGhtPLcJ1h1J3xHGysXFRXkpBVmGbRXrsmc8WCGabEQHTcUuek4gQgtrBgFd9hiLMBXdtjgUj",
  "key13": "4VRRHfbCNjrrzV4hx1T69ojRywWkCKzNm2tpC2XUbHTuTfRRTpuBK7WK29ZQyTepQWTTMzXLtRxhYnd4Y4i8nCsX",
  "key14": "55AouwB3fRj7vSnYUrUNVMhCoPZ7by1AXPQVvDyu94YrZkBQnB3b44y89rueSje5FaQepq6Kku94SNRGLbxq4qkX",
  "key15": "3eWj9AAsVGwWd7SFXoaPX71NJc9pEEvJgj2FePvZTcAzxjqmMV23HBopBNdCsxCNNmwaH9h8w6L6rwHLsGvEHkW1",
  "key16": "2xThFyUa1HWhwANaj9XHpzhmdbVeZ3y4Yk5jDXFmWrQuk7htSL6bMHUhb87MhARTfQ2PisuSPzFFvLrE9HjVe1Dn",
  "key17": "zE77EyFnU4gDCAkA59oG7PewCSni9pgZp8BnLFsA3ShAgM1PbRLyvioFaTtoxedEdzerHVXicT9D77FwLqsKv1b",
  "key18": "5WSdqdZyUCyth5rCeJ7btb2S4SEtMXKvbVEvBSFt1xD1525YxpXUVBru67sojxho5srZQX3YHrHQtWUFLoY2ZF4v",
  "key19": "42BFJRPEZNLZNR11vvVYXo4DXgWKqE55r5YP7kGPF5UBwiNRzAfxv8FKNZbsymc9YonnREi897gc9VrwY6LvutMc",
  "key20": "2nyJhteAk2qz8U2TZXsVuifYQGXaMKpP5aNXLEXVfzrZGsfJ9UQiLqUfcpN8sdtPqrq45LY8nGapzdEY8PEYkWPn",
  "key21": "59euTpbpPudZmSHWouc7NwPujDKkyWtECfkwpJ28kn66oaCAjewTS3SZkxfYVhnA1miswVKqwQeQsVPZVr8Lig7z",
  "key22": "2zrx4THpcpyQZJn7L2kW8Nep4hdnYKL4DJ5KiuQeZfGw84zC1yHfddAdGxsxZNyErstHVGHSeXwJJKKHJ94SEn7B",
  "key23": "XHCvDsLHdyMXcW9F3cUCjMWYtbL4LUEuETf4qi6YJ8CFpBZvNVDdDuHAxaCcgeEPRtG3X7hQrGXF89xHE9wGE7B",
  "key24": "26J9tfZKWucFshp5AeUes1Z8BKa5tG78UhCGw3g1tk8i1mcUbzFKV7SPzzS7W71iK6TA4kF8DAY37wWtmwmMnUzn",
  "key25": "3vinWQMNuw9iJKsKFZ8G68B8KnG7oUWzEW6AVGad8Dea1A5fc17ASVyM7MLGhEdKbympaaV6m9QfSseHFj3vRG1X",
  "key26": "41JJ5pSPh7kTkdp3cw1LKJF8Ewtih64633MYqd1EyMpLJ135exe1Ffy3G55Gogstn4TX9oQw4mH8mWuA7o4rjYkK",
  "key27": "2RwVcUn5ZhqC7iNkexpEXikf7RWThSKqBWJuLT6JjU5imVt9yT2p3YGRKbUvqAJdekyguAut1oHZiuPwdN3izQZa"
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
