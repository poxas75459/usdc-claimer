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
    "TuDfs6EqJZzRUqF11bDUwat9rYUFMgMQRCszDbsp2fXZLteQKoL2dURSieEqarVtLTeB8rixYqprqJbDBCzae3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9aFvNofE5tqTS3n2aPaSTwBDMVLSR3Stbd5Y4dikrSiagrUtvv48RfNmVaJsSfG7yWEqfvn3omYT94x93dpJNC",
  "key1": "4dKG3RpFqwxSmqEBmarQVo2fqgjY8Srisi2n66fjZXnSvMUxzqCj1MDdPCk7Rb6QDk5M6gzg4JPvgh9pH8H5xUUC",
  "key2": "2DBCMxX6FjdmzRCPtSXFDDcs4RbQPSWureNq41fJiiDEf3XifSQ2w4WD6moQGibhnri8vqooBYQMnRgGm1LCDbZz",
  "key3": "2RUTx3cQH5d62r2srwCRsQyoEPHU92g2HprZuZZPterUzD1R8VxzyLiDhEqgNZVK9BPQW1mH7F31pDZQGqhTWg9w",
  "key4": "3Mcor8LuiLMFVtYXe34oC3jNM5BrsouykGfzvBpTpF5GdtxSBfJJ7VJ9T8onWrofh3SXr3ktc8saLJgAoKLjCKeU",
  "key5": "47v17SMYctL6CB7p3VnVWMXnjqcUxvWEfKbv9UrzrEvejhr2fLGY3JueGJfS98b4tSHXNzfgn4P9yMaQ4Mdj11qP",
  "key6": "5VFYthiM2vftT4mvT4LSsKDdEqYm4VhYLK2FFwos1Ew6eVC16vKMoYFVhFjKAHwYPg7ppEdEQ9JtphutPD3hU7cg",
  "key7": "2ZAAYHnTKpNrUCFDwpPaDiC4pBFji5Q5dVP3KfCDHjQGaw9rxfyvXHexWJrvHBP67XgJoTowjmd5kdUvLNiKTBnW",
  "key8": "4SpEfsWVta8oTGe4PmT52u1STaCbZYUHj6tEkgkRzgw2VHdWxLErTPswteRuEqNAhHjm5CEWoCsENkGszTi1fe5J",
  "key9": "5vmpDnKVBnN7zdbd5vK77QGmV5gnbAMBvZFUHKNvqK57cwpVVfgfbZPGuqPicxgj946MhDSYPnhULZwckcUXbnj8",
  "key10": "2T9xMXeXRsg3rqS33t9u3fxJ9UgR3kgXpFpRUswoa5tgqP6u3bNd4a9zs581bGQQYQRhbfR8G3HhEA7AKoYjKw5b",
  "key11": "5Gq6FFoSR6aGUQadRA7oXRS9HfsjKEsEk7dhc5BWuQFYJgGf5fpuz9akfCvMSsbq6azFZRpBXTQsP2tJuE48raWa",
  "key12": "5RCq5DrNEEtEDYGwdjpSo8xUaguNvFVDJHG3hWdPfCHNALN3eMf1bXYm1moU5xuuq2cPsMK9pU8w24aGAmgLrgqW",
  "key13": "3zcrYridTtdKvSgGMPugi3Ar2bfdZCGxd395K1zxbKsBcBE8UPYd1PW9ocS9twdAZE27SNuXwZpJqYUDYtNXUcVi",
  "key14": "2Fo25Ld496muzpDE3FmkUZ2msLztdgxrtZfoYAvSezgVqvC5iquwBPVrhvooZNHJFi78abaTwDF5ny7GD8dMCer6",
  "key15": "4NJkHXea4bTtE1qpjDNgPXhkG6YwmE9peRWo2Wyq3A48ACvVSsUBL5rLarZ1bCwt7RZMpzEYSpenrZzG6mPARMNx",
  "key16": "5o8z89PxZCuBF6tLMD1B75t5jEVhoLPsLFnXrXhnixom35GGw5moK83jb1Xp3FNjfEBVUVm7eoCJ9we5b36fwJWg",
  "key17": "4yQtYteLRnMCnPogidj6WocxTo8Qxav9jQ2dKreHk2GMPvaj3ci3E25aBcwgKgSZer6yzjJBkskJX5VEJDgHRgTM",
  "key18": "sRV7W5Kscp4CuWyFnJgdmtiTheDktWHD4aPMJh2Wi4M6eB6Mmxki8LycQyqwNhsWG2L8L9ByWQCQ1tVfmRSsvph",
  "key19": "4GPvV9qVD6T4c4NBi2BKhqfNDANXfcrV5FczWUjxnf8ew69L2kWwJzDJrKtCNtJRkBLj8WmkYGVbE5HGF6jZ4e7g",
  "key20": "HaCm4zuB6RnBrFArk6mgN5tpc5UZYis7W2Y2ohwAny44eGLRJcEkTR3tVvQwU9f2BNp37DUBF84557cdeHbEQGK",
  "key21": "2dEknMf3CVk3cH4DXHyxw1PdKmRs1P9jWnhgVr7UEPpFQKfsYtyCMFkSyHkez4C65QtSHVZtTZXrEqaJwLdgBMUh",
  "key22": "24rP28eMa4vZMrKuiCUKdx2MZ53Fng2BnnxCQ6aWUdCLjUVQfqM7bxYrznBq1rNMU7dKH54tWchCJ8TEz4Zni2gd",
  "key23": "3WyskfW6tj4v9j7XR9dprQhGNDmZahp9Gn3TowsbUP6nzZFpdvbv3C6oL1PkmdM4cF36H5MCwgAje2xNS9c7hNgY",
  "key24": "o3pyfVciMmV7xfNPdgZbwJkSWVaC97ULL47biFQysUH9e8YDJofQAtdxeezaGrVxcwvxdaoB9fwBnYe6y9HohuX",
  "key25": "5wPckdxA8N4NhEDZc4itKt6Bvj4vk9bQQEMYXHWVHMu22uqAPcwTtfj2aEtYCLPfXaJCmydvKvvcXwUUtCCeYVn7",
  "key26": "2xg5YuLUyHhA4kXZQjDx4HctK1KGuE1JTsUXx16qcGupaKM4v8mpEpyqNHqT2o7H9tY2KjyCwZyMHqqTU6eAx8t9",
  "key27": "4aKRuzS6XCfYMBCWCnAKudHMBskKxAhnd82mti1fS62Ye6cXknQh8Ahh2VPynrVyFAE6VVn4nfC4inb7bYEJUoHW",
  "key28": "3QjFcYUMFbryTmkPUebLCQNVBBnKDS3QSUq1vf7e4MiyGxTTiFu7ratUP36nBCNbKHDqCQmxJrVtNmA7D9rp3bxW",
  "key29": "3GksARuC92dbawYasGLEyMSZ1YjmJiuXZFQPvcitq6w85BxQg19erEqTBdqJwnSZ2h3cqEBujnDH5eKAz8fpDr9a",
  "key30": "2nEhCAyMpiZrE1BWPx6paanEK6rb5bsXLYvATVNB4BGmDfjwBC2pEobKS6tatRBiuT8wdsB8Sg5DNJCuTPwijhCw"
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
