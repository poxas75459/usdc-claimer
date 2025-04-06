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
    "2yLSa6SjcfLjRxD7Vgb7FmhZNQJaizeE1yiePyPMDDR4eZohggtLxXNhgxGkqCpLMx7PX2iF1MpvbmwsJshQm42c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VE8ZgwX1YVbDSkF8tAJ6JZRbfw3NYd4EqfGYLYjKi96pTNF6DoCos2wX5qbFrora3WE7v62qphALDytxLZYFvUu",
  "key1": "2BQbSo5Jnzy52jMhFg9hToHQcsxy6xSLAoaE3sMHuDLBv2XcimdvZqH6R2ZyUfUL5QVr4WUjUvnn7VTQ6WkGkvhy",
  "key2": "24W2BXq8Wxeh1G9N91QmMFh2RFgaABwWu6aTk4e75Ada51yM7Krubx1nN4pQYt65ox4QmagwgwT3s1QnNgpVKTxo",
  "key3": "4ULg6mE3tLii9aMFknQxwnrS45zjjPTj5E3ZRjD8Gz1w5edz7isdd33LJ86UP3RonUYY5HJv7stML2xudThahUBv",
  "key4": "3FnYDtyZaiMQ6V8dYA8mjVERxXcC3rS3GGBfK4oc6KE8RxoNqq8sTZSj2kwg2Bb7DfwtRm4fBvwszae2421dxB3V",
  "key5": "2RUVCyU1JABw2kciBKTXTJVo2per4T76uCKhneS4eV2ja6qKFY68VwQ8AYYbD35RpUhuMxYbKUkVSvSJQp9X9uzi",
  "key6": "cmaAK6n9u3Bz7qMJa7zvDNfxmjGfdW288RN6u59YX77aXwGvDhiXE32JsbJEPtHPjPu9enc1pe1kS5ziQkpZJUW",
  "key7": "sDkQZ4j88W2YtjTtRX8sxjHad8EwVZVZpKx78mdEwLHzQAzgDg8PJmKEnwq5Y2uM99JbgsjS7sCRo3Xt5meSwEh",
  "key8": "3EX8Jbc11dv1STP8vwpJEipXNDcpySw7fD66ETwSS6NwmevoRWWMvkJhvwUFnTAKuG4XrTsL6xE4EyGMdPCNPuwj",
  "key9": "5ARXWwRTMQeZfcqbWKvtQNX4v8A76CVeju4sec1fxEmRhLHHrqJpgVFwh5cHow9h8PQQn8A7pS4Hw3dU6MyiUHHp",
  "key10": "4DKNLssuknJUKA323fjPohiA6ZSxaAn1F3v92Hhmy1j6JH9JAgvputrugJPfM1Pok4gLxbbRtkxZvgBwQsHDqfFD",
  "key11": "8Awrd5PHxc6yKSu4goZuWxgL4zSGCvdoNiGyiXpo5zHAEKB6N7YADzMmeZE8cunJNXumFc35gJnBdJ7gLChE54B",
  "key12": "273ZH1PfTbs4Qy9rG3cQp6w9WHbF4QmdoyuBj1oSEeNPh6qG8JFsqLKybj6SuGqbc4SEao3tqLyVUD98XcQ5Fv5M",
  "key13": "3YQcBu4SKkEebNPxET7PPksv9CJBGx6NYq8A6jqXCWGxWytxu3uLwdEMFTt5ArUnG9Ruy6TrBj4KDCGzkChYBXDG",
  "key14": "KFruAWmuLeS37Y4E4JSzW8zMujFsJr2wFAbwMAxKsYC9NnNi3k5GctW1LsGb5b4GDNRLnYrRT6PzAsiYgor6coK",
  "key15": "48pTArNjqZaVDWi14ChCzv5Gyk6e9jwHpRFLVcWW16wMDCiohuzz9EidCHm4Mzn5UV2SCxW2tJHMniu9c8fGpeTc",
  "key16": "34xcRQYWhvWt2Wr5Mwo8xo7e89Vn7CjGaEsf58kMgC4uyzLRHxWkmBMVoyhMkEMQ7bumDquL2aBwDSudrp8GitZP",
  "key17": "3C3nq1vvKV37XH1Gspjqs6JVCYcmv8KNSAAKUFqygG7eowAtK2id4sfXnfUYWr9XxMVG74jBDKncBUwmgsdyrnP3",
  "key18": "5iqUJZJEQiN8WYjjxucfvAadg28J9jeQcSFUUV6UQ6TTVjq44kY5GBWeDQjJYzbxmPLSVJb8b1MGFv8iFDguHKoV",
  "key19": "3rhm8fntBUQGJxRsFZbmsyfJePh7SRdUWxvs8PgpFbidYX4Rb9bhvR2BRUfD3SALmCLQh85aZaTR7tWqopPVfAv8",
  "key20": "4i7qWH5q5vvUNyZ9a4vHK59wR97iu6e1e7zyVRWPWCj2BToCi5hueiCBzfAman5SYNat5rbvsFGGBQ4qsA4gVsjX",
  "key21": "uw38smBZ9U1VPhwUNk9rtwhFhDkgxRWUGzVddiWPFfAyY7LTQhMTwRdQQiC4R1CcBeq5aswsv7ccg7np9xyFg8W",
  "key22": "4x2dBGCLfVbVUN4BYcswuuiLkbshgELA9V1tevZY8BStBNguLpU6cKSf8VjU4BKJzXoh5LsfsQtMFW2wbgPfBkhs",
  "key23": "26e68CktqBkyaeSJ7Cvf5UtyrQtHyfWaQLrLCvhccdGS65s6zzPUtfjxS1qgvo8PKFCqxeA569fLmZGw3qENrmLx",
  "key24": "4ygH4aiiKAfBQ2r8RdUo9x7PbMA8SxfZAyWxvLxczKW4dcQfZ38MK78QDAztTxsD3GMC2boBD8haTLDH5NNdAFRk",
  "key25": "24MZ85MQ8kNJAvmPmBPQBMcdhtdpXL18ctXFhi1hz1ErtEMQocJcMjuvvzy6MhkM1Urw6GVT8oHjRCScFkHJnuNH",
  "key26": "LChPEj7we1oBUVewNUbpPdscr2zyHdn31WaBb2qtnCKbirSr9Auc8NFcFapzRw1p4YtE4gk1cPhVXfqkrJTJyM4",
  "key27": "4u389yJZ5gGg2Eo8rQ62wCRvS6T4pamgnxjAkH39bZYoem2mtZiLZ4UAhZyEjmsaJp79MbezTDpQZjmhYtt6pTH6",
  "key28": "3kowEWXQCx2gZDeHdYUDLuCsZ6F75aguNEFPayA5NXLQ2F1jZVzwSZSWmLw26FC2C1b8LiVGmkXdf5rbX3fXcT1F",
  "key29": "qLr3yg1eE3LRKNuxgU3ewQ4hmhBvGsbfKYX2A4dYqStjJKLxNAcKgrC1dGwVBeHgo1UgmMzw5v6iQiMpdBc1qkN",
  "key30": "2XkcWdetCdDXA3T3hLtY7wv6LaPXAJVD7158uNDAYUAB2RXGB6VvDnTVBK8LB5AERHsF4DQgPXzASUtXf8jCWcxn",
  "key31": "41Gd4cGcBi9K5oyoYeY4pvzJTfwEVsMHZDiW3Ff8rnkmkG971qfsRwUSijkuSYdWbERhpnWhUjkpwxCHTKq2eZkW",
  "key32": "3PruRV3vhuuqc7UzrRKGehpHvPJo3pEPjur2Wkd7WYUeFqjeMUSPZFiZN93zod5jpj7y53cnbekHMh83vHA4Na7C",
  "key33": "5ye1PEBPZLS4PNY2Q6niiy2bUWbsnoNa881V1PY6pYRPXR1zL4rgtuL6UW7EkaqiURLEqXnnm6D9pFSJjprGQxk6",
  "key34": "5fj15xSFUXNooZJZRh24uvxa9cbeLT98q8sdzRSvRFamKZSv1nLY28VajW6Njcm7BzzQxSZ5TJe81hRid3MQGWGN",
  "key35": "3JznmEs3ZZiPXGrLfNTFk6YJCGTWYQAy5aAqMPtowLB6Ucvw8qpQtesbedng2mCSZbQNSyAYhC8vgXUWrHfMAurF",
  "key36": "h3LmgPyij2PRQAvtf8TEaqV2EkRpgoYtmYo5ArefpVeBSfNTdkmoW35hKSUV5qAYjdwxRZQ5oYrUsKSM7LGjPXW",
  "key37": "4e4PXbq6HdqEyQyxqAEoDaUbSgZ32aPW5hidAiz6xAF1ti1r8HhyHfRyFpGnr22gUMfJ4sBhMhzvLfNN77Sh1np8",
  "key38": "4bPCpe68gCWNCN6hLUmXaz7dGm5FWU9km6UCoQHNpagk1bAaSacgQ6vw2KhJR4v1BoX5F9L5tAAAJCVniMuKk2Az",
  "key39": "5WbwqDoPvbwt8Zn2kXAC6sD5Gc7nfUKMNGnYmP5GTBDzzcZvZbp42ZztoKpNW37w2cG7VMCXazY5ANaDaqHxAEmc",
  "key40": "2YUvd92XLEdbeinttAVG7tqBriAQNLgCMV5HGodrRSNuKbbwJr6AAa2i1TuyY6S8dR3FxFUQ3nak18AzNWq5quUh",
  "key41": "2nJSiFxMnTwtxxYRVLUGEwYG1wbFb8Y61HcfLPH1S7kHS8F7Xde2MjL1faHtLxBRr3y1s71H9E3YJYTa2Y2wvRJz",
  "key42": "5ArphxAWkzGkF2wdLR9ayS6y5uAqNx9jeJTGSXH9X5XNH7YESRhXwrCuLt8iwUXtxSBVqkh5trBfDxsEyhbpTtXi",
  "key43": "2ggZqFCiY3BpEnVkZZLDorzBj5zygFsEBXzX2xBDazoJ5akaEHV4QBmgy1EDpBsn21YTDZvhBWfi1ecaw7RqHze8"
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
