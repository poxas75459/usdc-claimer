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
    "4iFDt99unwztDRkykQssDfSqLW3oFHr4pS193xJD5CZxw2YzWKhf9bvegpeDyYvL7EZAio2965Nf5CvFSiXRrHNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDThSkkXJubsLrQGgjYufdCQ9WKdDWADd7GbCBakjRzm6FvSku3C6FFncxbGg4JAuwPbe1MFY8HSJCsg8ABKABJ",
  "key1": "5RdH2D4uhUpiUi3i3U9CkwPhBRD3hpgEPZLCnjGrkX78fLhFrMJnu7rQs3h5jGqA1GGbFpvJCRhJ2J4r8yZEnvXC",
  "key2": "2CHGLUfGctjPemBqPGasJtUFnNFtFUW3s916R4wdFWjSprqeni57Q37qVpLc8MKKHg4NCCA5GoC1HMikKj6M8P4a",
  "key3": "4m2PkSzonUqe2HdMQjv8Qo9ed58rwKgGNgyRr4tiNP8hAABd5FamfcpZUQtx2wdr8g6qAiJGoQ7E1SCVTedaEY1i",
  "key4": "5eLbbL1oy6VscCr76MVLCAEGPu7MR51ZSw1zuvcVLkXZKbLUutygvLKb6Mw7yG7AackpPvhYEPYo478U1QStyk2r",
  "key5": "276u2jt2NsEYZX11mw95QXb3ER5mBw6pMSQA5UEj25vCvyLFnJnCY9C74yhHrQcXxBevmStEAx2cSBKfqYpGQf6V",
  "key6": "2ffaoazN6ddwiG15DBL4uD2kNqvMrfWFrHhXdRK5fLPkt29QF9rYRxCuoK4cGs6ULF5mfSjtdd3oEMS2LVfCvQgt",
  "key7": "3ANtiHyRtrigSbePdp5DxxBNkkM99tSpz9rmciP63CLzxMpWftAg2WpCELF4Hf7DrV85wF8dNBk5NJjrxDoEFDDg",
  "key8": "4SboL5gmhyWi9idFzU9ZRESg1gESZ1fpG4YqrrWFCLTbzimaZ1v4Jqu3Las8PGZQZSvu8jbef4AJKzBBBSEAYsHK",
  "key9": "2vWEg6u9ifU343SFeiy2aBDziA2bakQ3mf6WLn5Hq6BL4LaYeQETpgG6Nst7JG5C4oQYfwoenQapPtUaVUrUWJGV",
  "key10": "5spBzu1sknqi9RLcFVBo4gKazgc1kpyd3UB3fQ96afpmFUTDGR7HKCKrzdwRvgQyZtZizcCoJoo6dkZxGWBvebwZ",
  "key11": "VM5B2A2kiZAiwaxo7MLExq6iMkB9acfwHnuWnG9RHZivP9M17u8rvGisePbQsUzQtDvhuGaB474zeKiwvmdDUAG",
  "key12": "3kJC1yTQqb7Xz1bBT8qBdKEGDJDBeQDbsDnb8Akbr5axuKLxMN3KN89cdeq6bWd4hJ8qAehGMbE5o6xHHz6aTt1g",
  "key13": "44EPr8o3Dr9Sy11DQJYmLGY5EmhrnLZtsybrk42TEMLYBppSVCd5M985T7J3VzcXGkLNf5rjWdq3XzGZP5pmGgRK",
  "key14": "o8G4ZPXTTYYY5ZPrAJhAAthBAHPpXVTyYCPCiMrKzZxQyJ6g3jzkFysY2KffkiJN8oygyqnsjjH6EVxehrtWMiM",
  "key15": "3Vv3H1McETxiyzEvxeqzt9QJVLDCDzC92r9veQ4BAQNPMUJvYAef1SjnJ2U9mgCvUDSuNdhELhVi6ZZT2sT16xEP",
  "key16": "SeynKyJshyGoN8E4FnTVSMUBt3GVTSbwHqEGPV3FkPpDuv3N4wpU6KkJsUoRXjoYJYFBLGNVr8v5TiTq8PfKqWt",
  "key17": "5CE8usq3t1Q9QLaS41YPEJWZdfJdjc3e96fBVMcrPdVHkug1nYR2Qp89cnqNjmC1pvh8YBfmSWaGGZ9MqAo8DPAA",
  "key18": "31mgCdutF2nf8mdxByg1sZSXe6nxAvtyH7xjwBUeTfsFyoxVVjU99SAiVTQKcA3ZRp3bqumUBKAhDAsVb6QXbLSy",
  "key19": "3JKZR2AZyq3zHazFZuCTWt5WqA7UHDege2Q9sApG6GgfNNJwN1vsUn37EbXSyaR8XhwnCthGRA3421sfjUvtkgDF",
  "key20": "2Z5GBii5HhcX8AVa16es1KiFvYPcRW2BwhyiBY8m5zsa2wTDSRWMwwhiHHLTkdAHE2G1wxgsW4X77huSZjSF6URD",
  "key21": "3tPbk4YPmv4GmUE1FvEW4M1rpXPfmPV9ZhGpe6JnkH6kJzAcAPygquC25yFJCZT6TbJNmR514sgs5Nr4Toqy2EDa",
  "key22": "oZH7t5WJyeyJV8DfoDmHMXoj6JYcFWpd9rXsn4cSCP4pX1iwUE3dkdT1TK2tYauEifVyTyp8jD5mnWopjqLCYEc",
  "key23": "5toadKcxhSHrTwDjstFAhLo5Ug9NNbHWECnH73tJDegMc7DURBGmZYfR696VazBDqTHEz2ENu9NmgWtvMzTUiSjP",
  "key24": "2SAHmgbhy6XSVg6jWtTXC9jUiXuLDFiNpa5ZsWn3p46EdcmaehgC1kX9nHabarhN4psKiB5Q28qZBRvRQDhALBdM",
  "key25": "erKp7z9EMgi79ZkFC6pveGrYfx9pLDbk6uuuqxPvAktMJAyVHTi88NFunNwM6xXDksoMa7eTxWVQsMwCu456raq",
  "key26": "57UGPySrr5vWiecTjA2xNUoM3D9u2hmPyxHKy2bnUirpPA7rxd8qKCGNCXoVdC48XJAvUjGzjerppRkCbRdy2Evs",
  "key27": "2SrWGmuaspCx7UdZ8PuokFBCBiG9gDirVreLT1DuxvEpyfh8MWPPG7NEucmip5nt1g6UBzoUj6Wd6Rh5CWPGjWeP",
  "key28": "27e52j9hjBXircPzGNbuRNS5tJJvAxY55WQ9ncXYDWiaBe2hyn3s5qwSF5NJpai6EVyVCjwuiTxWWfkYwUotbtrr"
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
