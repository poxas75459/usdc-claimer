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
    "58hjEnfRR63RpPRRhznQukFn9fQRHXviB9dcUGA4Pw2NgR5d24npzaP8KYuBgmvaRR2JK5Z8mFmBu3HM45iNDznb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z6tqV9je46Jh4vxrejqt1HvJFkCqY5iE8PJsEoWEzWHNXgJVbCm3buUm762FQiSeuVaaDKKKRk8rxecZBtTDVqZ",
  "key1": "37peR12vNcagpT9UwidrjB8YfJbdg7vwziEudLZPEybcUdqzzNJkDN1zmAC1SEPN97tRkWXRAZZsHc2eDTLJegjN",
  "key2": "3MhCmnN3wqha8Kc2RUxt6awoWXtgrnMg8VqYcRUt6HWjMQvDE3FVz9Hn2DBtzXpwcxgiB2s3sAWA7ruMZj6JruW3",
  "key3": "3f9PhepWzSPWMEWLLpRXzznxRQNbrPN4WM6498iwkiMdn1UVU7hg49ybi9khRV3HGoR6oiZp73M1LJYNpyoCQXk4",
  "key4": "3LMUZeauhekiW5VrpvNieHtxMRcJwvLU8W59ym7MsJbdu8rFaj6Aa54vn9TrhwsoJhH1CikNq5cVJ6Js1zXp2zkM",
  "key5": "XVfTJH3b7RGwFzg9QLU44zsD29SP3L26u5254j3xMk47H42UYjK3Yj2HkxLkKULd7w6MH1gz42mLFLVeBbPb5E6",
  "key6": "2ySFm4e2VVvLyeovN99kff16HfaP4ZDzezBDkNQkhJxYAWSgQoS4Y5h2skAR1w7a1nQkVvVGJgVxhLBaXDYUPHYZ",
  "key7": "UqFsUtCSTPoN3yocPi8aJwCd38iA74L4NUgTMCsUig2cgGdkFRNFXJwF5HMkNT7fgjM9mDzJzKUMDkf3vsdEvBZ",
  "key8": "4kz6otmZszqjVpQcsQMhzhuKYsgH8BicgBRn7FVAuR1eT2DraZgB2RahFyPoS9rWE1Kf6BPsTkrAM3SZdTmHjRfJ",
  "key9": "49VLknCRGc8fDfaTtTwaPhA5KfbVrFvLzxYpDfjPWsF7ps76Ls17aHpizN5sjkRqtBmL5quy9afZc4cJRm1NLZY8",
  "key10": "5Araf58aqNKcPKau84Jzw3MFmBEx9FpRfR9K88gJR9aWg9v1DBxy32oon8aTmdk9rFd6M2ZTpos7PGnuoecTKUpo",
  "key11": "2rLoVdcZLQejcnJuudhPwn8SHn5nLgXffUz63vWFypP9SLQsGkN5VAyFhgMrDBLt1tdmEBYUo8dMTfzc3oMnjPni",
  "key12": "4zEuKtYhVnfABKjJeNEopYu3dsNzqaQH5ueVSM2nqiMnx4tkmp7agzbgxnTyMY1sPiiYRSZh7wbkRNKkLMvCrYxR",
  "key13": "3Z1WVfG6HVLK4trX7mSmBGb7nCEs5RGmYFoDXgguXkGFQVVDbXLyeLW3v5MLXknpCn3WHJEAEJXMeZEFwdHvVgB9",
  "key14": "34ADDZqs7u2ovXkmRpE3FxmkqG37EN3a1E2jWxu99NJCRCw1d5eoDqnUatPspFBLAgxECZWBhnosV7ews34bnkp4",
  "key15": "5DWnsYB9ArPL9JfnjNFC66sgs4VG4C3bWEu2MuD5kVFaB2WdGuwyzqMJNSqyQTF9tF6ajST54Cevjz8WQNV78ZU2",
  "key16": "4KFP1HDDB23VVSHqcpHm5sRpqMC8CKWXVxftvBkNrsXgf4hhh1RVgh2uAVriv1ETMaoYuBPfybrZpZGwd75q6uPs",
  "key17": "rz83Ss6MA62csYEa5ro8bFVMYKqzNh5gCRLhTWSMPupyPve9NjETNDXenb2uwtzPFKdfsQJJd9hwmssHrBVbd7Z",
  "key18": "4tVrQcnHUELPcjv7NQsw6tWXurCLxHD165pZFQKySM8UJMSpYM5k3RgM4H2YULvjUq8NcRH1ip8BENNAqF99TUCp",
  "key19": "4r34stX3j6uF6zYAaouQ9kYegLFnrYDQcszd4JZMTYxR3HwT4VV4xPVt8mrQRQ4DmauXobTmnbRtFHgqq9gBPpgf",
  "key20": "2LKk9siNU2UwyTHU5TMudtvVNjzvgVR46jg81uSqYZSQprGLhYvzZwnebwM2AyrP9ndAPhdjitYbZNwi1XnB1zeh",
  "key21": "4Dqt5bzYZjzYzW8jrUXFYA1XbafFebz76zaCKEEyJ1KvxP8y7hwYQUNu5LT2CBNJSAm3tUQYTEisgz4tRxicY8qz",
  "key22": "46bhsXfRaM8XK8p8fJS4Mk1tcSyv9NoXxshXJ21165CaM6puBRmV124BBkqQukVuysbihw5c4NRvnyUUMRHPAJnS",
  "key23": "4pgdEedyhxMB2LfCW4MoJbQN9CPHvqjiktcxAkYfVqYtHPq1tnTLiA1gG2mcJ9zt3ZxSM3Dthrybw2L1iDDji17p",
  "key24": "3kGgZf2djAvkff1aRS5odH6mkDa7FHfVACJ7EJMivWEweeuTe2z89VHN6Ymn7bF3mVZG5npkWWq6FsMef7KXkQVb",
  "key25": "3bbL71LqJBKoG8UFQEBzCPgKiMDwA4Te4P5j4AgLseTNuPxTyuN5whkQBsRc2g47iMCmXGYzgWxiUzPqwx7SJtQc"
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
