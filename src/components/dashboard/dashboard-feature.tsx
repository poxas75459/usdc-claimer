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
    "5fR1WbqcvjWQ3rtiGueTFV143XbMLtL8fpqN1pTUT6Be3dcZ1bYhonQ2A7pexvjeqK5ESvo841cAGYqGq5H7WUkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcSs3QikQ6EiFBhycm7Lsm3UsY4vuqnAQ6DozbmxGXW3DRZxgtQyFp4dHq4WDAAMqhskbNJErrKiwDFkzGSYMGt",
  "key1": "tgfFwskLL1e7Xe7Rqs3DsVyEkz1hoS2EpydLbvCFVovsSPTrVnkVuZiHNwQ6w6SUJFHtvxoqNrP8vkQKM9rEy6H",
  "key2": "2dkUpk4T9kEJJTRHAUvsVCh5drgb4jJ15nhhMMrb8AxAt7MMT1iMFCu5z3RuMXJYzqxgXpBU1i8HwHqz8DhxPeJH",
  "key3": "crDMFPqs1JGX7hcgSZkpMrcQxyhtcRRep9N1U6r9TiQDMKNDiPUWsExUHWEErwYfGXYTLaimYR9Hn1Ts333uzzz",
  "key4": "3iegMGS3qoRRVp2BP9wky6p7U7sKfe2Sq81x8CcVyU6VNXQdW6Fd4qVbVtDpDrgEn9JMKBPXxmRZSSYAiYgdcExY",
  "key5": "2xTPzZbfuZZKH6TqhZaNKAWv8msDi1WEHJRimuk4SpKyo4FLa8SGiq7oRML8M3FVVsjQ8Gggu88oHTjtArBiH4n8",
  "key6": "2T24c1YNwrahPCUR6oAWkLCEAuQmow8kaCCs16txLw3aGqyTZHVdG7KxTMvpiCiNrj5n3QEWM7HGeRrDzBzVDyMe",
  "key7": "5s5E9rpY6xhtZN7qg9eoMxYEfzT8FYySmMg7FjxcFYJrhWDFf5hNUVZVra6YGyEDW5pKkNG4ggmkKU4EY4a3gN7s",
  "key8": "3XufBmkCoLBHhhqfufFyNzzupSGrX3CVZqJ7xsYTDcZaBMCyG5BMzwcbH9TJSq1crFaYC8uVVdH2vfJkfwVB959x",
  "key9": "3bPR6sCNWWuBsmqg2uoTrHNtwYE7DK3psBgTMfzheyDrdGrhRJCdWrB3xAbFqCtU2Dkf8Jep8gTmJzUEcA3uFJZo",
  "key10": "wXeaQgbCeKmRpjkxmS3j7HByfcHJUchzHPkk5SvtiupZqn2xjtoxgwaj5MHfFDrwvvLt7esS4WiSgpPUBbr8Bu7",
  "key11": "2mcfEjTCRAfFz3ooNGji7Z4nm2epDZxxLdv1Xdkkcx1G4Ko7jDTLxTEKDNu96fpU8YoLb6WDgFABkVEsxTpAnBMy",
  "key12": "4B3NRjKRwzxUcTBLZUKjQ4496T3Cy4SbA7LPWbSLY9UJsGTnppbWKKtwuBZPZmuLWhptDTeCeqbBo9VQn4RVanCS",
  "key13": "53qroiKMH1YceGaBe6hYurAmc91KEiBx5rMHVeEWUzpZcpYpwaWXPXPTY3Gijy9u4NohoApqwXavpcRt9WUcyUxU",
  "key14": "2mpSVufqr9fM5LJ2LKDE2VxjyEtMnnmrHo4uBkVbZB85gutpyz2BuoQJRDsj9GvV6yh66jRfzCCiCHjJgnzdzQYG",
  "key15": "49ojXsgxHL5GFas99Cu7cB9SoSjN67HpSizxcyJu4NLCYxgdVjbC9gz8FXvLUwFrTuYdo5hnMRXNTCoqjM1pHbpN",
  "key16": "4gSk9Q8i6RgwAvRHYitfxvBmbJYnYTQNMaTgNWYL9wtnqPEpGWDqAksUveWUp5qD6R69PJbXf5WoyczCD8W7AkSE",
  "key17": "49kDY9kzjWVJcosHwaHR7RnsapifoDzYtGbgXyL6zB3Zp923berPrhWCasMzVv9UgPdxRydcEVQNiEZZyMPqXcXy",
  "key18": "5sSVtF59XehPUXZWJYczcFxKajM2VFt8WBvZjTCr4PHu4fkd49uHFdAH3KVNmyEpEGpnyPSkrE8Q8JntpeSKthtm",
  "key19": "4ddKdX9RhC6TABoH6iGydp11nxrHCKnWxF6wshfzjR23ZbNXCNC9VsMhQU9dQFwewaBFdd75rvoBjMdCqgKp5VUm",
  "key20": "3AG5jnPz53RDPE2thNtxWFhHDNphU6dcWsaiPXrEUovxMQtdxqaNLRq7xt1DsYyTgCxPzCbjcz6mTrhCMysxRYqP",
  "key21": "3T3yudn2N2wD1KUV5sarnwLe9Lf9GRRPrPyZXSMqUSWYdb4vktREce5wf1UnF4S6aCwGqj2GJmUJycERgJQvUTJu",
  "key22": "5suRDm1L2r7Ght6VwLwQfXuSdFjmzCQGpkW4iSjmRQEZuLHxjBaNHaNYYxHv5hp9RpV6rYbZWwWgP86uZ7jWwnkM",
  "key23": "34C9WTT5Sv2FkJTvJp8FhpPhymEraqrVHVAiAief2wncDRsnBpMAHtRDUqWWVtwZ8XDaiq8GP3DmPcZ4xqosXHhH",
  "key24": "4zbxzxKxEAPdSQWF5RW5eAikvJ8XRancyySkjiSzMs71CZoT2rvwzqeSv3VqWhmyLF2vxTqdQXxh5K9XMcGhsfv8",
  "key25": "7Qj8ZScVMEpfFrQ6C4nRCX3XW6apMpyEj1PmdqCn9E6TEiUZZx4mxNxKYdJXWYotQWX7D4zbn3ipnhiL9FTh24P",
  "key26": "2x6GWKRc29nSqAxz5vrXY9oKikeWaQgzPD2L5bVfYxXa7LgxVng4ZWdQ5CTWdbkvx3LG8Z9Nb17mVkb2HQen1jCN",
  "key27": "3iwJyB1s8FdTRbcRs89dBJjoCwRjRY6bCQ3WRiH8FcMiePPVgf6rxa7XtyBWyu5d5sDVmorSLk8qs8UphdAb8dq7",
  "key28": "mJRbCF5eALzBzXBEBvnBYrVTER2TB3jPtwFCUjktPFayyyVP4R8GATMuoJ1C7fwhpWRn8Vw3yjhVevi6d9GTRXx"
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
