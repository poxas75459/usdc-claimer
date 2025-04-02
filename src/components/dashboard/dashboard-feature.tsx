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
    "V9UYHKDH4XJSJME5Bga5s3WNfS9ovoyG6EjRqn6JKAs5XHvuUY59evaSc2k4d8fZAdzaztZzX8RbH5mmxZ56zLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z8VWkTAcda5PSh86tmZ4P9aHc31was5zo6Z4KveeiGxqbGD82npv4X9UbhRvjGuo4R4SWgAZLTomzTVVth3Zbdf",
  "key1": "5aakKgYWA3zy4yYUGWb4kp81kQPfQce1G4ZG3yZetLgc3YX69nVdfmSAnQ5s79uYa7d4fFDCLWX5guvkkwU5o93S",
  "key2": "2EEZkhtrCzjZKNtoyz6eer9QynypPVwwNiiaa82jpBvz62oRwLauEe4fDVMQeexAH1FCosFWCuadp4an2TZ1Fr5y",
  "key3": "3wn5QnuPFLB1R9paxdcvkG1eEe9uWScBF2UTGcoAYcDuv1xJ2EmZhEnuKxc7eSkJPcnzHtSCEoZAX9DTHiLBYBLR",
  "key4": "5z8q7xtae7MZe2josafwC3vuwk1n2tbHYoUgxuYPpJrZ7r4EnvW4iBCszhs3ZikGU89hKdx2JadiRzVTbACFALVX",
  "key5": "3nw2AsAQuMPwA621oiCn7uLFt28VfxDHirGeet4iFSzit59JtbXRPLcdRM34nYLsoZkVZPt4UXBq2sbEb3rM4y9d",
  "key6": "29NuaT5Mr6ViA3pUAK2ETW78qEEBjmHTzUQCFVe3SyMHVYEuEkECDcsWSHTHjRJCZRwuZyjK4CJkWLHQrzWkV2rL",
  "key7": "62QmCEbXSLpsVGrBLJZjNynhpNc7PaY47ruXzKKcTJgodktxdPZUyjGLGX63GMK4zQuc3r35seDrz3eGNxtxzJxd",
  "key8": "2RHY9SgyrnBSwuoPwyd3vYPwzDKP67H2HQcUbESXivMokSKBPLdunVY4GpQgc6o9TJX7kSu3vnn6ChzAq3C3qFhr",
  "key9": "5EFccBodxJtd3XB6HS1gcGYUhDoigtCiAJLnjccP8rRKL5shgaZVvHe6gmcesjC8AoJmDD8QG3beymiV7XbtEXiF",
  "key10": "46PYy6FnJNiYKLNacppTXULM5fHpkd4BGNe6qUUqSrAentCfQoGCaHRjDCkKPo544wtudbYq8A1odwRxsWmWbUnU",
  "key11": "54NagPXP5JQ8fruVW2a76M7XtvxM3L4uuh7Q4ZxRPBFXm5B745PtdoxHECbsQ4kTSj73jVz9Ywpdawx9TCC6x2B5",
  "key12": "3yieAKMRtgp9iSwdoVNLgg34nN68FQ94qSLEjgv9FLgtqUQWqRJBpU4SCopgq9Ztx4eYv1uwFH5eGU8XAq1JVnED",
  "key13": "tVxRDncV58mFpqozKSaKoXhUziJQZwBEw5jisFqAf7pmpZzBNMzjpjapmpwjKApG9PxvtHF6ZsusKqSyzGeakmQ",
  "key14": "aNbWUtg2fFoSo2sPuRR6b2vGaGvUZEWYdNhj2Vth8pDMLvgApHNLJFqNueiLUNpzN1xQKskrUqgrGvuhVojgery",
  "key15": "47FXwDCAvngSRQmMwAy2qDW2XxNkiDLxwZDQqjCseKgg4SyAQpCVRRUtjt9DqhvGeAurNdJE8nhmw3Dst7EKG4VU",
  "key16": "4zm8Z43XRCyXYxY2hbc1r8q6DBxcWbrTz8MtcigxNCUtGvXZeYrRGDMEGrnt8YtrZZAFozpkRSyYK3qzmQsTW8PK",
  "key17": "3XVo4dQstU5tA8qNpoXDFuW7fM9ib72ezApMMbWrP4YpPy258WQuCYNGjmk16zUAzpmuwckYALNrFbp4MtBUzQi8",
  "key18": "sDiP5tND6YW59zdHZb1WxrqduWTLzLUoYtqYd5dytYBeKwPy8A1LkABEdADRnYEvhnPjZyPh41PLjgv9rvincxt",
  "key19": "4aj6hG3X18QV4qBgAPJ6re6Ny6Pafrr6qs7LcpSh1wY2Qz1AqNjKvtMoSUGiws8D35R3ZF9enZ1cRRjUWhYt1EhP",
  "key20": "2eej39WeNHTmYKLcRaUT3ZnuFE7ZE4VSFY4NtD91zuxDzf5jRoZufbpv3SCk7e5gdjVgVtg8NEogiXiwT7rzMF3u",
  "key21": "3wjCWUmBEzXEWWYiLufxAo3skGsdA6RYUGMEDYNSSSyAJxWFhBotcpbrpfJJb4vh4iQnDZQv9juqTV8nsocpstNq",
  "key22": "5kzy498TyusgeQZxL3WsWDSTydUrVXivJQi2jfzxGnaoaq11M8gALGwa94PE9L25H1pQ9UMEefmwj5a4HCRBX5s3",
  "key23": "4SG1Qm71JxH42LaruUttcHcLPMmqgewCLu4DkenQH1b2g8qCb3AjDohqL7nogJoT7VcYuK76sGjbxB99z5HweBni",
  "key24": "3aBsCrY2CRFUzBSohzJ8VyJSqYGCBc5cpgiCxGTqzfaQ9SzNuYqNt7SJE23m54xg3Sdi9PdjeGUNtaDGj3eXehec",
  "key25": "VvxyYKe3zfBNfoBAk98KYVtaQw1REDvboGy9fCdSSSjomJEF6UqeivrBofrxx6kgdJnUoq2wXHxGvQcBfrut5yD",
  "key26": "LmT4cgP3YGDLC5PjpTUKRRPWEL4gqzT69gL85v1ykNieGqhUfWxkEi1up53ZLN2wQBg7FzDj9gFFVMN5BNBVyAk",
  "key27": "5x9pt61pdnQoERkiV2hR3WrzWYTd7nazRp6NbZMBT6Tfc9mKEz3yqYBoKg7ojSSERT6Q1B6Pd1pNq5NVaQGqG99j"
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
