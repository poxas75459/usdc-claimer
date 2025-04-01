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
    "4cLcdaPPdJBZvs4n7Qzht2eZwCgPnttwm7Hog3P7RiXo4rEpQYx5huC6a6aHKLB1oAcY2tShEjFjDw99Rxm1bhJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x52J3kWW885cZDvVTNNeFoT2hCGfKyUU6ijNWSGWaPNeVY81EN2rK1m7mmtRjBawb4k4gMryTRhxzP9xy9bsh13",
  "key1": "iDvai9jXgwrBewQZKF6LQFb4EtNHxPj9NrQJRWxhZZg2K9bqBWTQYPHz9g5Xd7juw5BdzVzcEewjeEPpMCx5ooU",
  "key2": "mk7L1n4gZeEaVPb7FGN29QeCpmB4Amcf7ENH4xXEWTXByH7G6hiy9UmpfYoGhW6LC3zkFzd97S45NdPLkr3fMLW",
  "key3": "U8XziLH48coDf72277dHYNmyxesSfA23RLPYsCRByWXsjeCwfHdAaoUbGEsJNDQmVYVbRVutcJUe8wb87iMJrE9",
  "key4": "5qcMEqqA1KQHi3eB9yVdGyUQPuLA5554ERMNrpWi2jGDEHySodAkHiH9Mcx8fquEDNsoE25W6ihvVP8Jvows5EVt",
  "key5": "cQ6zLmuK36RAKi4VkdP3akbnzpaWWjAoUWgtHgJHeWbNEPuEE6akdb3Apw93nDgi2uYp3ifKa8PGnczqno6LfCs",
  "key6": "3weMEezNumBLFdxWVrQw7jsw1n5Ax354rLkXJmrQaAcsiqFTzDMmTVLn2cqudHe13dojPFrgLjoHKGmdBKs6ps5v",
  "key7": "UC7mjFU6AUfDtgvbQ4m4zsenKauijnXTfFGic5Mj1cVzMXWXNLdo4Q1mh7jMgcqbjSuh9PGh8zcGSZzuXbupHew",
  "key8": "kF8BMzjgesGkNaY3jWBRCqU7NKZjUJGe2Xt9bGnEjFvfoxDULGSYfxY3uf1VqNF92DWtGwEcaNvstqvE5khJUHa",
  "key9": "2LdxoxcvKJpAzBPVjKt1wZFxSDEiahvTLceQAwQCWS7KfHd6AG4mi6aFF1GRLg5zLpxtHT9jycU4ZoL71AKS92dD",
  "key10": "2xWVaJyTxLv85GUjr2ewAcy8NfxyD7WCGVDzFoH7Qyzx4JndbnPGiSNR2bMj7PMvaNXAwoWNxUyNBmNC1X4TTyft",
  "key11": "5PmGNnsD6ewZRx6thVmEoGu7qgiTjr1Fe9LiMzvkQ6aqxUYdgy91FHkNJaCzBwWpUMz7V2V4rgCkRLubr7EZPojt",
  "key12": "4YEfqjGY1dUnmSoTrUSzkRb9KTwnKnsc4MoPgn15iQpwe7JuZ4K1J7EAWf7gEpYoRgpsBrv5V5Q2vrrLDfefDypU",
  "key13": "2WMDqssKbTzRZz6yN1MQKqMDPE6pnHhGmHNtPM9TefUxEwe8X6Kqk9rpCsAyNw7EarAoqR8FKjzSd6utCDWoe5vm",
  "key14": "V2fUPrt1uBdxpbMNVyRTi4oUV4fWKRQTqqkeftwjN6P1WZqR4gunxm3isRdJDgxf5TBz6uQ6ih2Ugn6ybiGMvYa",
  "key15": "5hZcNPeMmX69aj43tKZq61bRZb1E65TMPgHUpZbybbw1T99ri9wvDJtPUCKX1zNFSky3Q2y9fcEJrETuczCQ6yH1",
  "key16": "2GwndBEnDLjVRvoAm3SEmqkmAACxaJbE9LueS5hSA4MBuQ4tsj3wW86V6epvqHc1WXLipea7n4jW2BaNWuKxKkif",
  "key17": "2XBwVoFW87RoquBu6MBWPvMQgQYS2Endf2nX6uReyH82Yu2NTc6TeZaaQycG1tNmQ7v2PbBjqrqYp35PJy2Be3wF",
  "key18": "4kEx9FEzZfVmZ2tGP7TzYdMLQkoL1v1tnqsqhMMMmT6CNvsLQN8EP6qr4Rv1Xi5KYMqwPsvb4hFhVSDM3nbLyHwR",
  "key19": "4RcFYzSZXfGGLESEYR5J6BDhre6gLBS76PbbokBBUCg9fvAq1girpJqcLvo3jpKgGDgM2zUimEFUFVLQ3wJ3AtmB",
  "key20": "3JKnDDivWKrzJaAwHGGWzYhov9wUAZXBfBZGqDKsFEWFrWtR7jsPFbGF5BFqZAT3utVCnC4AfPGVA24dGWCyJDu2",
  "key21": "3RSF9PT9q1vpBJZSw9zAVkn7WjrqbSSVGstYabTH9PkwaT2bYHEoDQmTpe4hZu5BvN3iZEcdiocW2eWRk2MS8wWk",
  "key22": "3R7rtqGVW43dRw4KPcwVLfwiPWpqzPcYpwpPiEQe3dv5mQCpLTd9n6PKRRwGtgrpebRL2ibpyjPZ8wQwvWU2NRSR",
  "key23": "MxYsNNWY6Wr9WtKSCrz4fEDnDsKdr7deLGk1DP3dGdQX3wnkp5moP2QHJaFGAkMVhgHkWdfXo4PZiXmF3ihBkmo",
  "key24": "judYWRuX67AD9KrPG2umEnYBP42nVhqPjqEH5Zb24QBXwfoSxLJKpbcBzQAoMuKJzhJyGksUWDamVemvjrZP5kv",
  "key25": "yaWHVLkSC7tXPnjcGscLDMkE5mVvWQDAWmE5E9U7ZgNVEjocRe6UXffJoWRfgyKUuhy575yAzoX4kLcEhrJ16zL",
  "key26": "h4xuxJMeuUg7r8T1p7D5vWWPj7SXpE979gd1MfE17ijWpFouoT266Fh5BqLnSLCuahPeQvMvzL9geBbfPm87SKV",
  "key27": "63rVtbLxFr9jNUWhRFhNSuYBvPERPUWSV2inkQw8KsuZba4EPRHnqPdStTFSEwV28mJm9cFMft1CTqFQaH95EUaz",
  "key28": "559DzCfiACS4VJRrJJdr5kYyJbsPT3viGy7qahHmT34Qf1WFcpAjfrQ6FeJz6Tht1ovjrFKQVSaYFhHHMBk4kha2",
  "key29": "2MUFabizaCKTqwXh9EwrxmBVytWqbb3rYfxgqp9ePfh4LP6qYy8yT7o9sLWtaYBMVhH389rFypZa8WawrQ9X5kcH",
  "key30": "23E5ucu4QdGWxJmBtRWAVHVYa9cHB6CVryKkDSGj6KrzsiemXzLqdNaYP9gRKi2LSdpZRKBXJtB8Do2jNnUaoqEC",
  "key31": "5wC9ULN72sDjD4fWFEBeeXRYL7asWZUTnk2aC7CrzGkVyDo6TiDKFEQQKR3WUUrNrxkYru3J326R3pUG3btHc5j9",
  "key32": "63AvbzwHCTM3W2PM4VeA6MiqoUYj7Xfxa5wUsQJMyoyXtVCzZF3ozNsUkkgzauhZTCEkiEwpGiA5AxgNTUcGGaTg",
  "key33": "2bcuw8PD9DWgmEyo1psKaNi6VCxBPn7PTDFtuz8g61AcRbAZq35g3FZfbp32aCrkFAcSWNrD8LBfThibT76UTTNo",
  "key34": "4QeKx6NWR9TBF1ypgu22Lr9QRLjfqDapcbJxLVEvUpJLzf8zZxDru2CsUhwunf223mYCXZYhgZZc3szCREmuYhQg",
  "key35": "258WEnP6cb3juMyR3zik5ASDXTd6qTEm5ecTVWskf6pJhoK8JE2WV1r4Bnu68chfci6x6HTGK3t5LkYD9Jyg9KCN"
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
