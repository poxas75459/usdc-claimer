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
    "N2Jwt8ua4u3aYMdrAPWcg55gQjC6QgCtKCgpjnV23HYMLfNKb3UvFbZ2RwCfpe6DkwvfN3Hh8aovpnPEdXgnUGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHWLH4Sq4Qu7vGtNZpKqj45EYVXyfMR5fiQkUwUu8RjbgKidWEQMnhBqcgwaT9rWafim66JHRX2bF6pnwvXM7Dq",
  "key1": "57svGK1zwpBZaDPmcowgtQRoH2RGmGi6YFxjmVS26TiKxmRJaRAXZyXZEv8AYqsrRCF1grc69brEenYWVcEbHgNB",
  "key2": "4Nbdoe4byBvfTjyxKbnDjQ7ZrrUrxHy8vyCqBtgrvu8Wu76X3KiSYeNPjoGyaUDTYtjxp1HsDEafgukPHdFsiTQr",
  "key3": "34mTmYvCgdCLZYP3ZUBo6bLLGv5c3gy41xEmrrP8fJjNnptkWuiSbDYmc75PPk145ecR8XWQkdgZraaWYG9NGTu7",
  "key4": "4Gfe3pZd9XYCWY4zzPuX481uoCLg7zjDkhoM6YWnBHo5YbyPDYjk61Fss9ZZeGs99jfpmkqHVjnw5WPN9zJcmdLp",
  "key5": "4jpkiVY6hzQzyLDhtLvzkm3AZPSDJiZSX9aGDyiZ8jQHhdmsBtczMFjpZYsSh6KuGwZWT8bdQBprivHHndyeE2HQ",
  "key6": "YuxL2q9sJ3TCujEKjH9rSBKKncwVWNHxRqRiTBj5HoGxw7czG3PN4YtLx6yt5ZR1iSFXWkoUwYvLkB5sK4Zc9kE",
  "key7": "z7pox1o3BvDUpZKKBNTcmqL6ULSSDUFCMEytktGf9NWbBTmgdzZ8twu3nb5CcTcrLnztZpJQkX57GyDwaySqKAm",
  "key8": "bqckXyAkQrewKqkN8UQfjvTbqp5wzhtvMi2TqLc7mp8b6CZxyxAbwgTPQpigGsD2SakhouFXTc3tGKpXKd8dMx6",
  "key9": "2oBXx97TVVKr3Pns4z6jG9fTw3aMkYFeyWwP3uZ4wF3ar6v9gUiS91qReShtc5M4V7T5c2uaopSTZiKUiqxxNe8V",
  "key10": "4XbRqmwGTUNDwLRtnM8EiLXrYrqSWmrz8rT7zoUfuQR9p3H2TNx6JiQEfbAV4BDMbcor12TkhKyviXNK2PqNauMr",
  "key11": "2isDxQNtw7cHe83RtCGkbeeco1kZSMbYshUzCA1RLhh2ofZPB6bA21cykabwNMRXGXReFuzPWRf55LXzEjXeYbkM",
  "key12": "3h3s6KKVFX2AoxTEH5ngc7RsHnAJSFUF6bvP2cXBxZAwbNmazVKbSjTVDTmXPabKR7gZL4tcQhSg4JdMgp2sUSyY",
  "key13": "AWzpeg6Cnsm88Dyiqzd6gPzd6SDhG6BRViXDAGqd3Go7iTjfqziMtrVaKS7tGRfKZjHahtgHb5J9Nv7LaBbponZ",
  "key14": "23rzB2YD313GxPCVExcyysRfazoZmhzRrLKDMRgPudg5yH6wHSY6pSU4adbuckWCQ3sVo3waBe4A5y7B7E2jwGuU",
  "key15": "51sqNVUCEByyDaJkRk323oS4rxL4gLaED8kpGfhnvM8UKEn9SxhMZbrxk6cVU62QhgDa7Xke8RhPqDNbazdX8Xk1",
  "key16": "23wbWFYvAuRfwBtJsFuHmRjbtXsnokdADsrwVHSvNYL8Pb2Aq3kZzXdEBc5eynR2U8HmSR2VMeKWbVXxn7ch9WrA",
  "key17": "22oSRzCzs5X8YVTj6jrjijRj3Ln6Km83yh49fFxrUu6UyvruaE5ETQVRdJ4ZLe48K2hkV14LqqpXSysMuSZMacF1",
  "key18": "54wnEUFFXp41kbYho3kG2K5g7Ei95rW1HSMDn2JkgdFmuxB7sGBWorMTtw9JPFiCauoF2KsvqDdf9x2ii7nUHwGG",
  "key19": "4Yzgnf23bYsrUMCdtJngU1BsVN7fWD8gmALd5Y6DjXRZauH6mu22T5Fh5wG7inYUVdefhAmJ3ieuxJVLEouADQZa",
  "key20": "4r8SpjhKjkqfzRgcUHnidrmGRfdsGh49pHr2ovjX1DJR2Xtrsm78S1opgmJ7VDwZsNeddv4JWXpTApJEsct5xGJH",
  "key21": "55BpTrFPPXeqpMcBMXuy6CKihmsaGx1oBVA6cf8EFeFcxdpnRCXP4bQ2GSwDYUJBFtoTYaBM9gCLEH2YnSB5Ehwq",
  "key22": "5doPvMKrZWrtJgAnTetoyYMrmFcArEcEHc5ZHPXK7jCdTVKcxifWKJWKQqYjdq6E9wqE5cuowe62NfW2kvgGRWTa",
  "key23": "jKJQem6KKrVnScFnaruav59EeZusyr4GqTa4v4R4t2boQFdyYxDmoHRoR6zj7MirvmkQ9kwjMi1DUnxCXH285et",
  "key24": "W7cy4ffX4zEMwVHgtubzismDpP1hCWVD7fdRAeGG3TfVw218CArYSu8pXU8hDDKh8uARmANS2f8qUKDojKfoyfm",
  "key25": "3uTdto1bWmGBXHLThZeCcMX8Q93TPMBUd4eNAKWTXauvuPWLnymSGqeVmQkMW47bpS5Hmdnvf3YJVjKEL7qyMNog",
  "key26": "3Gepi53K6FyzKwgTTNXh2rLqSVbJn6YWgY1LFkyFg46VgyJrTemMaqdJouq18co1DB97T1MCUZXn3ZaQAn8d7kuz",
  "key27": "4NeedcAp34GfrmrMm8ZwKbPYXo4y9hSpQnxBU8EbJhYofsarriiWDXo6tNG2qxNg7b1Asj5qJE7ZVdU6HgrU9j3x",
  "key28": "3XQGfa3BRQjfoWYVSA1dMvhVxCwCw8MQXtVRWfG7K4RaWGK3fZhzwnJDbvNdB6i5A2yRowo2nd6Eg7qmR5i3z89y",
  "key29": "2kiTiqqy5NdzP2zFhFoKUSgUpgmukX63dCAtWxcXC4Wks4pnVDmZuaA2MpLpSURnQKRDvp1Xxzw969EZbGUUwtFX"
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
