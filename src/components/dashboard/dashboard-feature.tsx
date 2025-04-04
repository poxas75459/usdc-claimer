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
    "5TW8JZaNy7CvG5GTugwmz1CYozQJCwJ9LwZDwouYTdBn1T7pun6zDUhwp68L23GXg6ZcWTiaP6GDUFbqQ5frkDfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "byVSJgQPhuxFLSxKEiz5TCSBayFL8gtWJ63CCdi1rExETXT9zTM9UzMBomAZuzDfg4ZnsahAxRkTfVVmuwszKxx",
  "key1": "4F2Ue2a4CtNc6L8uTA8VAWo3zzhnMcvzje7EFepUUtKw74gFg95SFYz87wZ13uyZ11ydRpR8K1KuS5a5umHuE6o1",
  "key2": "2NKTLMS7kku89uZwEUcxqNr4ekhw7qhHmvRmKWmo1apWexVnEZoVNNRWQP1L4yXYXRU5d7cjr1VXMuBC7GNK1qFv",
  "key3": "2QnjCEyRjDyJP7vhLg4KvCpKoBTMtaXAc7xd9oS1MiPB4e9jtdUG2VACnbRm4yhm55CYsDp9QmqX4ZdXc3BXdyud",
  "key4": "3BL43nGqPUSpzx5FShY43A58T7SZ2bnZMA2pEcRGc8bWjNXKvzNvMpYTEaFapK7FaGd7zFVVuPQq39qBDMqowFyH",
  "key5": "5rT2Up8H78xdjfEhUxnoAcXZEZWL4ZN6GW9GwxrK9HoDvboiDKn7JRZwAJCKJVatm7tPEjFkavfviJag2n9zYNRf",
  "key6": "3uMHNJhg7tS43uX3iwsw3ygcc8qqqtF8YYxFSPeZcbZeGkcZ7DdrXrSZfDqaHtKi1hfpNzkTHjFZ1CmGWcEJzvSU",
  "key7": "5RH2rWmhpKS8s7YKPXKyijrBnttb97AW9fN82aeThzVJQzxCVkepcA2EgXXiErptgfb4uNyYA6cEo2QTJ7CRUAEg",
  "key8": "rqemVVXRCpKH56UnTBCc6fMg6mN5c79ztj3tYGK3yWMCi8uNLEuDs7nxXcWYfw69peD7fGtv3YSuDg5uvEH8fe4",
  "key9": "4pGrSFMxyAKZx7qxHS3mmcAw7ivLL2sszmFfgriUwKLrFSV4xjdvFAdbD9qS3wMHyTyKYjYjZMP3QoMWjvkwbAE2",
  "key10": "3vmfrsQRk8EkY63w5L9sn921shPYm5xXKiQB2wfiALcGUWYPJ2wWs3JKcFhGECMEh39gy3QHafaR7Vc3BAyaz974",
  "key11": "zeyFCKhKcQrVfyB7wYQRcU3z91HuQmGJRwhWrqH6mwRfo9QkMZzHL6XrHyiCrr8uUdkvoNLStjAFp9jhMXmCdZr",
  "key12": "5qMCghY4qELQbgVctdYHA86FSxMs9tsfpCaseRJWEzzQzj22vbXTHohPw1CSEr65PqPwmJ5PGpE2Ss7EfeoZNifq",
  "key13": "5LjieL8snx9vwr3iewhq1s8fyiBE8kkkENccGZ5z15uqHdax3qgTp2CmoGxsqmUWpGxmGU6CVUhfKqGPQULNfjSV",
  "key14": "2ALunHDmFqrBu3fPMLa7vHny19p8GUFVMS4Gwsw4pDENqixHhbajrLXhucvNCMbEEZunadnYCUGA2SD3SEPGhpSb",
  "key15": "UdMu9femugEPzDQfdnMkY7n9sQ98T1wozLuJH7zp1RJBhHgiqxEgHFMGcXird4SPjFhkiaygz69MgKHw3eFEY77",
  "key16": "5TnGHaDJFTkhauoR2AgkB8cJ9fPwrcytFPNxeEh9VaXETFe5xVwz4Dqgw5zyVzcJrWEGU6hBsT6fp7bgeL6PPE4B",
  "key17": "2Zv1rU35pFt5KB3oSqhX95JCDUv7hwnbs4aD2oTusmiM1PZnmeuPvp1G9zYeyUyaPSruj6Mnr921NKxSyifXfEuN",
  "key18": "22RNBTy6MfzQarG4DZHysMQSYBdXmb7PoWUBKd8z5Y6vKx93d9KJoXSeE4UGVRQUb7opQwWyabqj2ZSEiF2mYYJu",
  "key19": "hwTLpmT2r1t9eg3YHLtnkTMQwSoXPf1jN2PYYFEEbepW4Pqv4im1ykcmvu7UHaerzSvipXFXzMtCBrPTvZcdHY8",
  "key20": "2YtNvSyrEwm5ruso7euK2q9WXsDHk4jkxCe6Wm8TBvowAVUbhRdvurg4wXNHQNTwwgUEpUXXKXePCKMaVfGhuNnN",
  "key21": "qJHLVNuTYrTtkcHMbjS897QWqcTaj1H9jc7TqR8t86odkBRCMyFXqQQQAvFcr3iqyxnMj29hvjtTycAuCpcPVD9",
  "key22": "5vK2WVnvn5VRRo92FMAhWYK9QMEQWHXeZPL5Uw4Fp5nofaFySYnGtDkKBbGx7Uifn8rLgJmXKWcnxSE4q2gDpi9B",
  "key23": "3VenVeGjWVuoVZvCCUZ2GWrXcy5uEBd1MGcWAa9hrjSEvriZEKWLboSyF4GMztxisswb2aVPJbCnLbUisjHG2rTv",
  "key24": "RS7LU5NVMKyNrPXw2yiKdpTCfb87dmBEEKt9jxQ6TRMLj43CNgAEM8E5jhfgEKQGCtwge23ig2yHSBgumMMmBdy",
  "key25": "3G9aAjKKmTiKWjwAAxKcqZLhSgzWKYXWoDF1KGyw9Ya2sUipsQ2aovyR7YbnFE19rAnvViAKPL2RJQqWxnYDbnRf",
  "key26": "3FfVoFjGPbLXSkybaWQHSAJgVqzeXus8XFtghPBy48fJ7SMTi7pUQj1MJyoi1a518WQn4S27oE5i966mmc54ktJ4",
  "key27": "2RvWHrkxiAF7Hzh2HNhpSUJVG8vkQKT99qoEpx4QKiHsM3Ww3cwzDpDkqjGTnp4Q8fVK54TMWsMJfM3xPafE2RZU"
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
