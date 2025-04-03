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
    "5PC9CxJtvcVnPuT8esGSyt8pSXY7dKHeGmWuS47WX2sfQ3U6W5cpamMCdBzHohmMcTZDiFDvV61PTUozszz8jwpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lv8noGHkTHU3vZNL2LZX7jPfEs97y2niuEuyhJMuCfWHLr4vPD6PpDmmdStmtiAeFh19jTSqPRWRzqpemYeFXK1",
  "key1": "4cVfbHHiosGKEGeQaziEZSgp1qnx4ek3k5gV3Q72HD3gMHFMiPEKReTD43349oiL4EgEma69ZEsScgsAuawTDx6f",
  "key2": "3c18d1KrhGHo2MWMsCtpnTnZfo2JTe3c9PSEPoBnoJiccmqvoqU5T5kSru8cAD7fpRJamCCA94mV5YQ9ADJVsJQ6",
  "key3": "2Sa1Tkd6uWpuXtYBABrHHFDFWNPsd7kp8wGD4YbmFNu5JuN1cwL6M4bETkFBUVM1h9ac8bTTwA16JUUKee9HgQGu",
  "key4": "nkf2SNJjrLMe4sj586oHSGDfswgnZsQcDuXvz62GvAZdNrDk7VKfHo2MEEAuCcFuWXjWcgoGDJWUG6zjzvzyUqh",
  "key5": "5farNoHGJBAgXGKGwMFgxhmTphQpACQHs7z9PFXihR4JUF11drPPnBsnRJmkUaysfhDygmsqwdR7nDSmNR8AhXZG",
  "key6": "2p88tuyCcBiyEnAwBMc5KGcKkmK1u1UMyqQCJ6i9iZiYzrhoB152x2NKwNTQ9g99rVaTv4UnHuPX6s3wavte9X73",
  "key7": "mBHyxg2eGuCiPpu1RcF4a99rm9wx82hf2zULLDqMFQGQNtfXJFHPp5J9vuXpepwBeJk6JfbsPDAiBBw8SxqZLJ1",
  "key8": "2w7ynVLcdtqQokMejwXD53aEGHi4gzL4PVmwvrfTsLYM7gB7gMy3rsQzVRf7d9zc24GY5Y5eJbJ2FzD1VQwgbvoa",
  "key9": "59e3PtEFpA3ftDZJvt6SQqMiqvPQamqfYcppPUYNu7THmBCTL3JnRrxdmqhN6cXDqRfyQ6VXyfzfFeZe7BLzmQby",
  "key10": "33KxtxyFWS4Nw3i28uLdkquFZZieoURYpEXRVnXctM9EdArjcwAjFxGpcjz9Tf6AxhW6v1cZYPVuyWhEaZFBVpsD",
  "key11": "356zKdpwgZPWvisqZubwtvDm45HbyCWBUBjJNTSCqSKFYPsJv7hUU3bL6xhxQ8Bd1BPkLLssZB8vZ1yevWrwSGoT",
  "key12": "5D7agW8PLbaGM8xZB8fWa6MuD3SMLEN1QfxC7GMdCHJCt3NfQXywU3iMZ5QMbbWeec3a32KWv8wmBUy8Tx4pvkpd",
  "key13": "3pgeMCJeMfxne2Qno3Ut2Pi8bVnth5NxhSe5vz9ZUbmP3F5ePofo6D64t4cRQzL9de82rJSj2FR9pg6qkMFPWef8",
  "key14": "BaT4eV2SoXqEHNmi8UeeGghyJKTPz9vrppndjybEL4pd2j7spyqjRd5VBmEwdEyNp5fiPQEJD2VPSkM2AViE9mM",
  "key15": "2cS2mSsomWa4wuND3ANecHaPAhoQEGdoqYEzDk9CXse9hz1mkniR7EvMJ36mP8EEaiZcK7JdJ4cznbtZTSQiqCC7",
  "key16": "4EkSsuRij3cz9NP8nZQ5CxJdkxJ7wwwFLnvXvvYTyGDqQZVc4w5ZXdkghbtxfg73SRofMKrK1sZGA4vsRQqFQb27",
  "key17": "56kMAWRS7DcvKDw4putUyBRZggqGYWcFtMoogXrTcaoDDzusEhBTtn9Ke8VJA11mf6qZnSvFrjtoJ2j63uAprPKN",
  "key18": "yw2vARuwhoxjQxXq9yX2BSc8ut6RkKUnyAuWL4bFGAJPYacs1oe5axzrndNpyV6V4hTxw71RHNq3gfAvcErQpWZ",
  "key19": "4LWgmgs9GkeNCh3R8aaR6SW8r5C6jQKAQnv2SG3hCzCqdHvbCyq8q5C8kQeKUgqtGCu46e1r8M6QSoPZRaD43UXZ",
  "key20": "bCAPbTtjddEnuxxEJP1d1pP7b3Qcmu7GhPwssYEzysm3EBkxru9kkewNTnHHZSGrv2h6VhY1CvD3E52SXkpQk2A",
  "key21": "RjRirgkkgCW6uSy6faxVgabTctcrjGAwUvrj4HcyS9cmq4rQzMX7hAs2sgZG1Q1FPZgeUXFy1t13rT2cF16DCnb",
  "key22": "3ncvZLnfJeMxuJupF9Csi1exNC3Qs25tC3addJYFco8696GqtMmNAk78zrBPbkzVEGcTncBdgKyQJhNk1LFoEvyL",
  "key23": "5ZiAhUhc3R1qgAcYjsRA6y1MhEkGw3gNLu6uNjYZuMCZyXQN7aM8fTi9SeZDzvbhb5bBWvaxDDDrGjGLKvVGezFS",
  "key24": "5U3UYggeKRY5ayzyY1jX7FGB3oj1jeadsHGFphvno5SA55VuB8KbeFubHjJG59QuVTeZYwMTBmNRRHzJjCjo7G4v",
  "key25": "3ALYnYwDz9r1He7d4CwKUfLFRH2mLKyErCyzx9ZhFkaEoGvHw8gCJtG2JY1HwegNb2qGZwJLqf3gemUEJf1Dia7y",
  "key26": "49yfEL2vJ2RP7PXwBFVgiYS2bYeY13GCEgh6MJJ53tiw97pbY2PKrnrZHQSHkHncZb6WPfY9jrGRP4vx2Qg8dLVB",
  "key27": "2cESQjbpKwpeqwSA5cnuYgH2NKCz39JpPpNojk2DpHoZtct9THQ6LUwFucs375jVgS1mgbRDgL2Qvamg81vmMcA9",
  "key28": "2dPkuDvKxriidZG2BpSSFHJvSuDWhxb5vV19MJ2eLizKPXxm5CYS6cRiusm6P7dgtWgJeVkU5k5jbu8gHR2ikoPb",
  "key29": "4oL5LMFNpsU5SyGGiSTuBNkdoZqv8BQfyEMMz5zTNhNuYunUzxMy2NEg4JKGvUJPj7thfuaEH1qggyqPfqT4sh9b",
  "key30": "2ntf1VSd4EZjbthwE5uNQAEJ3NWt1cRX7dhETA6bLHnEhQUYRXUQiZu3zfHUfPrQgdPvKRRinLj8krYVDhvbkCyq",
  "key31": "mU5uiuZC2KytEW6x4DbNbZoaadgFWtoLF3WMPz8AHAELH9rSkj3Uw7LjFv3E4GyZvcbWvXMDEkcHmpgGBoDiwx3",
  "key32": "49yVkmSEdkh3Zw63hC2WC7Vug9wTtMtdVJazRE2MpEMhHjzd66LfrHT2HHnkuV5ntcLuYBp7NzHJH2PmBJy6EdmJ"
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
