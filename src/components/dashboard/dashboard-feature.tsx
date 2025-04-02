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
    "25ASBakwEcfJdrYUJCu9kZejeLLpEWAzFAjQg1Kt1ztD7Wg2hThGdksNcJfv82nbWKRAu2Whdkj27BL2eU8YAsve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CGHCzNUJefakcXPgpLMwGDpybJADVTJQjSScAF3UX4JkyDKUiSMrb7oDxJQB8JoTDcAZhufazGJwJsN3t8Uzogn",
  "key1": "4U79UJGwz28msccukewCRL5S6FFjRMmuCDMXFuGEUAnRBiEbGo3zDxpzPfbM5o3TtJfmEX7qUxAZUzfFYBmWzMzH",
  "key2": "5QuTbKAHh5LdFqrm6D8V2FVMwdbAELupQeH7oEUfmKF4v8hTMv3Gnk1n51PzKphmGfDuH7w6XdxYZk7s5AXa2aHw",
  "key3": "GXfKYD9jpmTCbT6ZA29bFx9j7CsWJojHtoAcMawGVfjoXhaj5DFATaXrqm7RNjTEBpR35ADySVTkeLxWzD1qPzY",
  "key4": "4TC3CGiuLDLPjFyU4BBantKGwnAikBGxspzNeVWFfjgFK6poHhCP89LPLdeve1x18DoytZiheMX6Y3yHijY12yRR",
  "key5": "42b2LBGrTZBB3cfsfvq3FcriE8tuHGkPTRuYzXZYTLjMic45j3XsGfKbWkrvNUjM9MN4Bmj36ew97JXQifQMiPmT",
  "key6": "4a4P4iWfZsix1eSy6UBopBnWULzXFQrY2oxscmNbTYEGNQ8XWZKntL5vHFrpg3ntR3zg9nzYqW67sTB4f74EnWCt",
  "key7": "43iK7MNxXCecTzUPwuLrRsev4VRq7zYXpEjKBqXEwvSgi8WHG5xDqPjUJBiB2EJs4XniLtpJyMN3dXgk5ycgUefv",
  "key8": "2wTk5yr5behoxrctzawGCLr2UD2p9WFQvU1m8odAy5uhH8hwM9QwKt6ranY6L9gDzfkkCkWZKGGfHcmgEDE9BiaN",
  "key9": "3hbz6HxpevKrh8FSrXtkjd8wFGS59knCii1QiubnmqsXLMdTuctNcbivbYrqBccu51Ujxpe2eWQCNWmBZQFvCgjb",
  "key10": "318Vd72ZPSPtP4AHBsmV8gEn5ppHMvu87mm5cHYR8WjDJ8mJpkPXReShnXHwTWB4M4xtPNnB3zWat9eqXBEUXK3M",
  "key11": "4oY2hNBJjVtqX8TFvn8SHs944QDnMGByLjYrThgzGa3AzN1MdneQn8jXMEoM2KuXT7dBdodUG5tpEyCi6czYkaZg",
  "key12": "4HP28f4Zt6DbSUjFtbivUD3aDmtJ2aEgcHq7Mido6WNUFWV62KtjKy57Ld6zU4yuF8DbNSem73qruMUtXvKwkD4N",
  "key13": "5jjwMyErUQHQntexMoW11T9t62c3zC7RQUgLpNbusKFDUXq2RG8aRFfonmUzXuWrA342RT69fhsYC95An23xLKTh",
  "key14": "33mC7Mf15Qz6KBEHHPFApQy2XVof3L8XsiSJv3J8HWETDu1VpvKLuNqPeKZdznfQXycFoNP5t6DbRW8a9jZSdLvM",
  "key15": "WXcKLcLdSLYhJHGbGz7jLFsPqptnmi2tfzMStvvkXW8rKVmaTqwtASskedJyJcMfbTkHffTQSt8CwS93nZTi386",
  "key16": "4cSvRaxeDcDXNydhDrDLqePK5H7rn8zG7dc6vU9aQxvdKHvZqETiqFPhBKwqXDG8FBTZR2PwSdmpggjUs6LJJsye",
  "key17": "2e7Rebpj7nw3CW3WtMwjqWGYYShbtfCfbU9s5AtVJkpbWNnXWMeRGMFahDTctQfrHnCRe9Nivrq1q6trPfuYda7h",
  "key18": "2TivRPdW98CC1Tzmd4bx1UfpNCc3Nsdf5jrbexQHRgRDh3tfxD2Lck8kwf3VgJ9T4UKRbcKs7jSm6NkAuMVSkL2q",
  "key19": "64oCUtFNzvYq3umf8mjjBpYxJyf5tAfBuorPbCNbU39eCrgSLxP152tCnjRgwy8QvJyJKm2MxDPkwFNKzdWWq3RQ",
  "key20": "mZinBaJhrTb4kUdPpB9S5sP7YSn3ZTupXDxjJQa4ybd9zJDedW6dG7ntrmnH9hpPa61VwGm8B7Z18yLa3ZYUTVt",
  "key21": "2fkagnhcqcN85UvpgR1Svr9Jvm5BRZ3V4iWY3mQ1XDDnBPvj3HucapUzSDzN5teJo4WWwaJpvsyJSGh6YfcLvjez",
  "key22": "21kCHv39NToM4EEA2rDY975T6Cp3qVfAEz4Q2AqS4zcvdx9Ng8Fkzj8s8nK2ejjdoAAq773A2trTJtjTBnCCbu1U",
  "key23": "2nCp4dUC5pqhcgwpx2zrSBLT4cQ8qrSEob2ekK64NV69BUJ76BgEFD2zDtKF12NFE3ur36hDT6JnGpgx3PGyn289",
  "key24": "4kTcPot9xw8bGFQrurF4AYQ53tCxjpp4KMS7EYNdjWxHJiWcUuECEQfG8fDs5PBgCALQYE8fvGRF6dy4Es64xFKy",
  "key25": "5NK6ghkoTLnvGG5ZMS9tfHYMT5YmsmUCQHkWLE1iTK7dBXzL8ymsWDJ4umA3fYEQjvMbycPUFga9EeQyYFgaSz8R",
  "key26": "5hZRWERzKNPub1HvxMPNvYgbKgbM1nX3TnRqPdjcjVmVpspizsaEJFvSNrDL1pcAFNZXcr3nFSHCfF9dx16UWqFG",
  "key27": "DfBePFvhkdpZFSeFfcy8ujh4c7DiGMtcsKPJHBh9UgHBXVDPwFX1HFcciC96EcUUgeJcb7ij7QcqYkyWdqXzAQP",
  "key28": "3FMDtNhuwxtcFize5DQbkJkpXoNVSDMUzeomtKz2v6KZRNpVr9ArqK4dKJfvwMyhod8Huu1RPU4Sksai6jMghC4v",
  "key29": "5gqqDsgFTRpVFDyHALhBT1M33NeX4GGdB7TTAWzFzL2EkF5ZxctN9NzGG3Mxe2nTC4sqVkBCKWae8pX8fDrHnPi",
  "key30": "2a6CynwpZTCjXf32Bry1CkukQYwnkppz7nxzaDa2iBvEFUc9DnvaVVn3yTmxPmSi63VAfzGTTXvEJToeYWmxvRXX",
  "key31": "5LEbNWx2FXwefnLrWUP9dxVWZ9w91nsXgG4EaBrviKw8pMK11tm8DjVDTmgaWJ4xcTRRTnwEWEj8jamVAX3wtr1R",
  "key32": "3Y7oZnHGbeDoV2YJd9PiHUPdNLL7xUC3PLrLe5xP1brvy5JRqSJRi7aQzctjg7zt5QM44Y6Mut1bZDDk5MPr7T1r",
  "key33": "Sbp89qFvtcwXKLA7FC6hzVBKKLUTT5EqziPJVGEtyu3L4aiHaSaUVujhwdjPtWzDF34vQvbLFpAbVQa69h1nUBW",
  "key34": "3ncdjZ5YrzTTwiD6bo1G44WorrQhKk3pemwxeEf6btKBbawjoMxwxhUoJHkumf3i2wVCZXQnSFWFr8XQY6qJWrNQ",
  "key35": "gx6WT7wpgqhTo2kaZ8SRLJn9eobQyXrvwrLJcKv48Ef4Zi4h9e1TE7BsNZj8X9XEwGbxFz3YbqZ1tvET5XtRgYi",
  "key36": "5JQr4Y7zz1mLDWLsQPxRRvHLpjsNWbRXecNjouLbwQUdiRgWdh8FT94Hnknzs2KKV5ULE3rHQUnHakZdGkLWq7Y9"
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
