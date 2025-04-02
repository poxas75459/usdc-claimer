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
    "rgkLa6Hn81DTxQdAeVWW7yEsSrYWsmkkTGnL7xQvcqKg9ifwDCGzATyJRnaKC88N2eXFk55QEoVgd84mhsCJX69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35AtDN5ur9PjPTd3wbnnkYRkjhiFyrPkWm2jciu1Ah6g1HrjLKxRwhoVBS2zqR65fiPRwSfVXqYNo3XLCte7tsQe",
  "key1": "2i8AyMm3CQaXZ7XGfTzXn4Jfg5NG7Ja3jUjN4cgKmQP1wHakXEikuG7EA9wU32jZj4dVKDjoMnmyDQTAPBJobmNQ",
  "key2": "3LwTAnmGB8c98oZjqgU7QpkqdEVmk1CWCBgJ8j9DCopttHnbyHapddq6EQ7cp2fwN6qpLd7fisdu5g4nZqswf2gw",
  "key3": "3tR5VHpp7LBiW5FwGaRAQG8cxoc3ssTF65XfcBMaknwE4gh3Ra2HUU1Fs6gEkhPzDCGffPxfkt3tbXtp7qsx9iqV",
  "key4": "4tiZy2a86esTo1KcfAH9zpwU96e26MATByK7S8EENXspbAfxG3rnVt9HXmBebmNpQcTHT1hJcjj5kFjoYtqFBaDo",
  "key5": "5ziWbLHpigxxCftkJ8KBRkTc1AuijGDfAcM9Qur8oS3fsWgt5uuQ1517tMSk5HAiS8GfrGPLktDN8AadhbKF8bau",
  "key6": "28akeKCajAyxUzjL5Nq7wieZH1t7L1HU8Q9AdtYsr8Sf8jvKpXg5rGqYitm3kerN4omJEgsVYR67aAV8MqHiRRhg",
  "key7": "3X3Vj2d8gDW9pcZcxXUyWMFF5aYcYYnZkRqQec8M5hWg4pQx92b7WT6r6bKygtqVPVEjee1zw8UfAvkCvnYSmJS3",
  "key8": "2E9BsHwTGnPxroJQ4KdSG3SWB3A1tpUQEyaMhqfDndewjbjTJZVxix2g3AMYLaRhxdmFCX2hTn4G9mBiBC2F9i7a",
  "key9": "4AVJQswZqtgsxqgGfK1LPbkRv5syvQJAiXWzeFFRHFLCAgcSiW7EmaLpfngn5WXRAZtSSy7sPQkmvgQ5stMJCfqW",
  "key10": "5cAar83LEDtZGf2ryqcbDq39yfZwCoTNCHiDa7pVNtdy2cJAGSTVfUGVFBgb2oxij4aQPWjuscZ3mVFnNs3142m5",
  "key11": "Rr855P3XTevvb5fvsaBDFUgbWPmKGbPZmgxVLNzPRaL3m8gRYjx7xM7Vv5WyWxMBsXCR7G9E9SJE6WSrBkKFhQo",
  "key12": "4TRY4wmuh8MFi24dbLj1HVgnBCMKwg8cGyx754rQ2LDdwCPgBCQpFszFpYRFGqDAQo3yzKVjH42YFJfVipLaKhFn",
  "key13": "2GyDYaKAtM9kbEARFsNxb8tPFDf4fz8E6NfgFyszkjAoP1KrgHhhaq4vBWLJKw6YYaQsUJjz6tZuvkhLmwPK7nvX",
  "key14": "2KVY3uXoUKQpGsyuNXYbV4FXuWtGqWrzw2Myvc6yubkKa1MngNtfZk3jxokKR5Bf2oSJnfF48ifRXGaMw6aC3Pd5",
  "key15": "4dRHkNGnbvLaW7k2tbkrVJbEiqCXmwJV3qWZW6GdyYtjwGhWPbmGgQNiC51UaKZqxy6X3VQtjAHC5F3RvJ2abfbK",
  "key16": "46xewx1aMgRfdYV2gJEquNffEBXWbeMsaC3kxJJrvMsefVRsX7mv4MKCY8RctTV6iMaEHvERBGj2Uq1maLq4pdBJ",
  "key17": "fHUYjyMPrQpVfaCj2H7gXtYAa6wri9wJNS2K9SGGVUYaoAzKC1egfrtxcRMm2GEM4kwcuoRfEyUkd6Lgs3h1Fnz",
  "key18": "2euWBtjQDu1xQtkGo5A2EBpeWbA3pnNJUZzfCTYQbz8HKdU1azDEaGTMWJbbuiZnJXEzNcxVXjn7jxvyoWHsXumw",
  "key19": "3gMDvCJFfx4Jm1KXiiuerjZBmmhGyt3C6r6CRBbHRuPtYPXm3EgPKU7F6q6e5gUnevtPSYhrMBEw6YEbKsnQKeDq",
  "key20": "uAVRruWRitCEdKf8bc8vFPJUHcW1MHmWHTq6ahzr5Ax4REx8N1ZQL8cCzNqpwf71fjFKrVGaZez8kdUiEC7JxF1",
  "key21": "3sSJUzvTNvapaRi7Rw2CWW76JFhrmgjFeRKqD6Qze9PJva2q8ziopa5SpPemWQNhwYjLKiQYB9kxfFWTCL1QnRy9",
  "key22": "4Q6tWfUVKGfueMcjnK8g6GuwQhtB3uFFHzkSFLfMynpXRVs9avmW8k3m2i9X7iuxCL5wfASPPKnfHPJ6uuytSwYT",
  "key23": "3yDiM269KTQZy6DkctGW7794S3ZpCzun4dxq63Kqhyn7HkGVKcJdRit8UJvXerBfWD5bGcWmNfmPep4L9hbQ8yZp",
  "key24": "4iCGhUH3paS3fiSkzMTcGd4ic4orRxn6Vwmgd7AvgBoXqM8c29LPuXjJZ3DXTJioi5XJuNQUD9NiPa3jLbMbXcpt",
  "key25": "4axU19Ky4RZd9guXCTVW84YtWFEHdN9XZhDCtoSuH7Zdh4EVZPz4GQ7pMJguyx5uXiehg6NC3jm2BvwYvZNH1dG8",
  "key26": "55mX7n3nxShxgYXcYDCuHPjxruWXFBQV7iU6zAeoSxD2dNGYF8BSnF7Z3CGsWvc6uY6dqkPy9DtNBCQgzp6Wcw1C",
  "key27": "5FqVcc1VfYHCzcSgWet5PqLLyXUtqBEYYUxig8ZLE7TKnpw746nuZBL159NM658wTYem4RwBxGm44QXmvuzeRXq5",
  "key28": "3zbfEUAeNURJE1MJkgz8xmbTu65qANdTkYmvshVoV1x5X5mdyeYJU8HFKsWKqPi7MaUEQSVhN6yqtWmK4vUqj2Gf",
  "key29": "5cZQ1YuPPHPfSzPmhJYipag2BDAFcYZQvQRVr2AG5vnwr4LftUBaWzHXRK69mGCQs3ZRJfi3QyDuzGQjKnFXkGRS",
  "key30": "3iyyKdDrf8yerMaZajf65U7bkpdSRKbpQM59KGfzAMvMUfpdm1JkeGLE4n2Zss4ELmFjpMjxLGbmRLVQRCKjLHRW",
  "key31": "3QF3udzHC9MzwXbtBEjZBycgKbBfos58T2BUpUEuHf7LUgXSiq3YgAFjgEsuYpeugYr8BXt52x11QD9PkwWRJB2e",
  "key32": "31tGMcabbYQYvuDfAwDkhU3UDbLzA28cBz2Jzs4J1i2RFD7hcNCC8CWJLYatxBtgB5VtCmaxPWV7yngDvroFxSxM",
  "key33": "4cTi7DQAkDrJtikeUSWuMcxLeiJabMFznmixzDRcjmdugXRonWNSGToeJGC1tUMoK8YdnuLftZ4UdLVxbJQkS4vU",
  "key34": "3QBCd6STaJMmoPm5puZjWnn8hfMBaDzChRj1MP8xJgAykrr4GbgWMTMdFE2JCk2yNMXGEYUMpnMFa3SnbQGRK85v",
  "key35": "eDioSTuN1tDuBewc6X1b4WQnNAzgdzRhjEB4YxB9Y99u2L1ERNUCN79fw9HztSxGFto2FencUsxnBfoFo9NxFsS",
  "key36": "2EbdDweanCPttaiz55LsHK3hgkTaCurbqjJqRDtz6BnzBp8bHhYMyLv62M1sV2yuomecYXJ9KhW2rwE8zyrQPHzo"
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
