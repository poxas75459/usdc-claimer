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
    "3GEtFi8kDCavdRfVbQTvXf59BdnYS2NY1NZ4sNMjshbwdBb2Vg7ouG9FL8LEaK6vi4tLR9oFL9cn6grRfB2ABFgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SkzV8QWCnBRscwAupqpStxtgMcVDT4vZtzt76AZeoDPRambkzPtFD8PNx9mxaaP6cDAmndhJoVDnsu3srWoKEgT",
  "key1": "4wBqY8YwHX4SapjW9Ff56nGMHAXdsSR7JHgeWssxxsu3CU2qELZXwK7NJmizoNdpFgCy5dxzyJQu1PMY1j3up2YX",
  "key2": "ErSAowgUsyngpRY2A4oAtTuxBmX7xLREnbb8wX77nqgracDGSLpJoj4Q4TLEPE7ziTG2QvCLZLEYGcRmVw3u7nT",
  "key3": "5nUuzYy6DtzqSPHXQ1Zkh9hfsqmxeML9PzcYKySvVbHrcxaeouZALBZ6jSnFJwtPCEZKRSWpuVXHdP4CXd25Wcw8",
  "key4": "gNdTS5s84E4yJcAGwjsN9mVgXuUcfLzeu2qRnZcBocmy1zedRYA3kHLAD4R8hCd3gLmncSLP11ZnXLDt67ytpG7",
  "key5": "5fSQLrUJDDoW7gfmZsU5VWk1hweeytwmLBeHYEmwz2F2R1rhK1STPF9yoidTTqTpVKSZ11pzjeMFEvm8R3f9iJke",
  "key6": "3obgc1cbjfY2jAY8fRQAwuw9wWJbMbmQxvzCLq6ZXTvNrXnW8Kxq2iBQGiBF7AmQauHs78xp2LTsTjR3vnGEVfMr",
  "key7": "4kXyoiVN3Vmi1PxVMw9EwyGrsUy2p9gnBMo7xiSxf8cRHwLth46KL42W5G41Go5YjZCXEPE2cbMBZtgeHU723ED2",
  "key8": "4UuGayrYgnESHK7hyFWFx3QFvYpsRch7GYB64gbjeW6EJYL5jJAuGD7ATdRV4AW4GFFHPfhyL4VVJapSFs5ANYzi",
  "key9": "5pHxoNz3U9HxbqhTBk5MKc7ZFVtjT2V7bGaFLdUjXWvzX5aZFn1c1ioXbR1rdsRfT4sQENqNoHfMbaqJj8jggktY",
  "key10": "3HvK3yaFM2t64DzKh3rYwCUsYbLQgEnaUidrKqmVGSy5GTxjGuFJZzzSUqx8g1iMXL4GKMX7BUrbezbmCUPDPzat",
  "key11": "o2GzaNKbaBRk4S9yhUs2Ze2onXmqom5SzvuXCdD1dnqoZwCgHMqv97vQn3ke19mL6mnQ1TKgmY6Rj6gVPzmBM2E",
  "key12": "5Gt3q5nzaoEgBYDCn7HiZnBkp9j4PF6tfTx7GrZmE1nXWUrbMZeDh2MXNwuaVvejgYoVxz8KN274g6nHp3DEkRfE",
  "key13": "23vgZ2LAQ46LgnWYdqfreVxe1LknprktLxJdfyiTNPyfnvViT2fowozd3i766LZWYD36CbG5nZCkS2wmnygXsVYK",
  "key14": "2L9sgWAHBuvToTDTpDSH1hiy1HWKVfbSGZZDE9cKnqJV3XoWV8QAsfyVY32J9P3gUWxCEaK4ANpUoYu2SJnRPQWw",
  "key15": "4x9RSxC2MkfW3TwwJpGZGfkFgdTepABSsx8y16uqECicS5hRDSXrHcWGrnp6X2n14LijWsaHfBzru5Z8bPHTa5qZ",
  "key16": "3p2wtwyYBgwJSJi5SfUcgygHavcZFgCukStcsp8FuBpV26Tes98FpJyCuG9BTm7joqQ6orKRbLe1QyxXwcSe2VxT",
  "key17": "2BmJgH1aTwjywmp2WsAjhRwgbEXKCnGkZPtaDv9aFSUnfECGgaWZnq9kafzt2VeE1o8Pg4GJjBqyUBSNxSBXH3PS",
  "key18": "26fGTNEwzurAVyLfE4Fftbff4XKwGqUNrYrZcmwjCV2cjFchFeptE6rid6Ewc9vrrT5zfgoK4sb68i4jvehMXiWR",
  "key19": "2uufiD86AX2KaNw5DoFnDeUeGGdeLPTCEHyzA39U1Ji3b1fRFfKPoQuPbEUFhoR3y6LhxQFxrEhQxTUjRRQDETcK",
  "key20": "54BvTCBpDyQRHWZvMJB7Gb9rZWMdFPrMm88ypWeoX25WV16wSKMEEttDFT8X2Afuh9mhFdr7xt2umfvivqq2nddS",
  "key21": "3vx8ZndtiuFifZWnBrwp6yUCnNWFN4fWRHhauqVd96obRmBmLHtLP5dvsJtz2F1gHmhC4bjLbwGc1zh1bmUR2Kt2",
  "key22": "3HzkfD812EvTsFeru7aPit7bi5qc4aoK4fJcbokxg8B7Vw54b7Y87NN5duV6CoJ8MN7tZfSW5kaASPbp7mi7JTLF",
  "key23": "vobyxd2zyMyZt7S6WZBYcLAF1YZanydk5H3qkK4E9EUyYKvP825gg8ZgU8P4CD6tUyBAooaBAxQWeCrd3pNXFhc",
  "key24": "4jCvAtPZBiUP6fFLNVWEeceGXENVgHE8cyEjLvGPg7yrM3k75vm8pd3VedNko8mxXjvGsw4GRpiTYSLx6y6FbCNZ",
  "key25": "4j348A4fiTCnGj4VYXima3AEmi3s4n2538dRvB3MW7kyT243PkQo2so2UV7JxkNcNbwNBkFhp7UNAQt3QBehV4Wd",
  "key26": "z7YFGqZrqfUaWKjjgKU3onaScajjy9gGTUHFGaCuNg5pyXb56PsCWUPgwDBXT9oSJxjtBjv7WgP8vWxVNHJFtVu",
  "key27": "B3hLf47z58smfgCwaUpZj8By7NEoG6hFWXbVRxst4Yfqm5GbW2oaGZ8Chnne5JgF42eejNLf6tzD6LL6bH4foqM",
  "key28": "3JCRkp1nkxPMwr38CypCXUy828SeSQCg7kk1kd6ZggtqtTbpYQhZpbrXXAdH5hnB7gH4d1v6VSKAqY5t2HPLBBrH",
  "key29": "2pVkjg8ckyXugHDFMDPAgowiZZ85UbpCvAg5wRAC3Zv4MDoSLtPLyu9imeurmuiiguYeT6BzcNynDpqoo31HtGMe",
  "key30": "5z3ByxwkXzacyFEc9vKrRMNDtUFqNhY9MNEimxukEgC4djRZyfxAXTW5weWrUMbGzzyU2EU3ytsgosBHfeG5Mgza",
  "key31": "5cYUWia8dLhpmYvrUdyWFxjY5SdAGdbnf7SBRF4sgN1qv83ujFSpR1iEDXAax6hq2cSVM4EFfDHiZrxHNqTcCY5k",
  "key32": "2Uiwo1ZFawqjeSkdibsCnbgz5jprFVSrMGM83RLMrNEqaTecPhUqzErXJc3SJfrLyJnR7mfh78WvqxFkmzd8gVv8",
  "key33": "58jUZxj7MHUj99hfsQQAqGCPC6szC3CS8NRH8iBf49Syx5Nt6Ufjx2HZTboRKaTdziQLMZjvvMK2mTvRZKpxDmoc"
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
