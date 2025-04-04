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
    "5zyxhsgVi1ZjwTUHJ8JjoXNjNcJyfRrV7z5BVNLZbF4bGXeEm5LQ1ry4Yw5qc3SmUfsfZeMdYzpyX3GcYQhrDdGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ek7dUQTyD8wD2KPW6W9UgSgm5gFiajEvEuvgNA5B31AsKSUryi323yJ6pn4E6mDGWsifpFNvisWwdaUMEURXu2E",
  "key1": "4qZqv2fA1VDLzeJj5GKAV5avMHBw5pwhoiJzC1QmJ9Gr5by5Nj1YBiLbpmVrrgqzUY1CEPMn5uQjx7s5ayVTCzrK",
  "key2": "oEMSL35ix5eeKSabvn1j9RunQTkLCb4kDdqm5XmaupzqJLMz1FdQc9Nm9nokQPxL5ViKyboin4UPsqG6WQwUfVn",
  "key3": "445YdavygPyoHqow6M1oGx1zWUdJAKzrCkJRtRuEVcbuyzVt2Mb6RWExqMBcgJBDcUKUXUN3MJ3VAxu5YT9fCs8w",
  "key4": "5Mp4HqR9h6gYs2TW1qrfY4uZERctdnNcKjiV6uMFgjHG2YQ5EqtiaoHZQmz8La9nui9sSYuTKX1ELc4izmfxy8sc",
  "key5": "4ZNPQdLghonYQ4SKQAGZy7U98YC9hrBaykY2ifoNKbSNoofxm5ubmNYDRVyKjhETNDQMk3DwC1JvT2LR4Wvph1J8",
  "key6": "34doEVG9kfi9GHrbxN8a2hpf2YTeTeh9R5azqLJh3hCaj5m6XjBDyZ1VCum9Scv75JZrkYhZQ8VVRQ4Xj2Bu137B",
  "key7": "38Nfse1TqqhfTNxUbFg1vAugtbTGYKAcWgiMU4oDkzjjnAHx7JvnNNL3DBtdLJXvwxgkfuhRmAijRPjh1iqLpXP9",
  "key8": "3u8iGDgWnCUdcrr5tNzfZtnquZDmthNbT7iFdFvU5V2dSh7cDne2by2CGeGfdKtAqgT3K2xepbHgifbG1kiRDNSC",
  "key9": "54S1s9iSJUBzfYoEgonLFV1CurnDWoi1MEpDYmGyKsrg28tFYyCrBNkq9h6TXbXHBZEVjVmrE4HHhvZTVVFNZPqA",
  "key10": "2pAPLi7FXc9fCbitPWqW9kMqaVyThESVFaQnPoQRoPmwZzHDgVXnQx6wu2Mzp2hCNZUixRx2HWpzkS2swPyxqnMM",
  "key11": "3NjNimHAPjX4DL4tonJ3cj1WeRPsAqza1aYaiUFPYufvB7qbVrtd49FZhZgvJqWqpaEtUgabjUxCUQDJ7dMGurUn",
  "key12": "R8wGcpXDEJonr6TPReW3mmkziqprZDEFp6ULufhYr8dTNS2vA5fa52hmUtznqQvyn3rdqbweP5uy9bRrnrGA9ru",
  "key13": "5vvo3SqMiLariVHsBNjkDPvdPShC6oRs2Dt5Wxjn1ZpaENAgMCMJLEQ2hewS821utJ6y65bBAf6mr1YZ3LhuzRqd",
  "key14": "5qtVmyU31kswF8gdndQCsmZs8DJKuh1JbDBoicG2QnarHCkpdoSEyx7nhoxfm2RXAAT3ZZmQRTKJfsGb2nhMKdX6",
  "key15": "5EAA44iF3gTMnFSHGwuNUZqbsuQftQqHaiAXbRPeGmzTLdTPk43NBgyNK7ttPo8TPgZ1SE8L5BUndyFk3kWfDfs1",
  "key16": "2pDUg1sAMMPA9A1JPLgEshvBkRk5dXvuWqjUmr33m5TFpaR2wGe4f8XcZVQmL8HPYq6L7A3U2MmwBiScSU1AZF7c",
  "key17": "26zzZVeTXoY7qbRLuUCk9oc3Xo3wv36W6pDwUk6YNrfpvL43fd588yKAvxG8pqJaJEcg51u87qAnbNFciDCm39s1",
  "key18": "eNiX3AUUm6cLVk5UKizZSEHBvgnb7t1BtiA2opKWFs7TyBMCSNfMwHTFYJW7Eu1pyc3VaymWg5RAKHbBdFGYwAu",
  "key19": "5ZSjRvpWiEzZNxymwXfiESdHKW9XQeAgU3Vh9G6uLoRBPfjDmYAo83FKx3eMNuoaJTVip4FUjNxCADruwEAkURJ4",
  "key20": "36TA86PzPLnSr66wG7Dx5Upg22wwxNGyRwBnfJtwZKKGmKRYj6NGNUbks1Lpyaepv62KfGkerSPvHqueruktbenq",
  "key21": "toPsHnYD7hwzD3EM1iYMPWhFZFsWNdWNWBsF8SgktcSGS4p2nEb9GxULXVG8nrBAofiP37XyG3ahU3KnW1riEpG",
  "key22": "2aAB5cWF342DLnazwmJcDBnqJMCLcC3WYKxQzauhYMdvM2ghbgHmsZv8xWRMXUAVCvfVybTjA1zhJgT37wd4xzYM",
  "key23": "5uSgX3bfwB2MfU1bJoQE5sa8KvkRpjG1j6RJC1aTV47oVNBD87ZP4nEeXRDyTzSkp4VzaVQz4v1crgiZvSzHtZq3",
  "key24": "UXvy4fkwGZXsKJE3NQkbzcuGGcUyv3TxFyWcZBFQdhe6CtUYeTKo33aNHaTLEx1uLF4xpHan639oYW19Nc5aZo8",
  "key25": "26cFXnFonkPQ6ynpFhFCabSzBDHx4Umk3H7aKUL3LTwqfeQrdeyZfjFWeBZbnxmbFEER3Kmhvbh39RbfMKBgsXhQ",
  "key26": "hEK8oD8HdVBRXJtpc6E5ShRBKGEuzd8p8yG2onM6KXLvDeqwRUwT5fSGaTWvZbwRM49pbAD5GxWUX1JMKjdrCAH",
  "key27": "JAJJuVPzJLDcXgVERQkZ9fLLVcpV7Pu1bpsK9hzXc9nTJc1amcuzu3n6Usf9x3p8h9a6Z1P9pz8BLHLhSXtuMX7",
  "key28": "2zVEiW8PjBvzdcmcMjFWSj49fMg1NrS4Zxw44zDh4kau2p625T2YYDycFdqvAFKBtuakJX9bz8wwBvkZXqqGV8Bq",
  "key29": "5wfxud63aibvjFz1T79pe79q35Qs3pHWZZWTddL37o76MicaFdT3cLUUBYSaLbSiP1ULd5gzUogqBDdtrmUfcssK",
  "key30": "5e5RN2VjENiuCbv2Ncv7vpMHEBf8x2bYKh2pw9N2yxbRppCRpbfNJ4Ttn6pPDYgBTv97RdYJWFmys8iHUXGzbeNG",
  "key31": "45uT8CAgHj8uxJkef5sAXAJVGSdHeXZqyXVfKm3s3NNZtELNzfT6HPJxs5crjLU4yhXQ4BZZqf3uCZtX5MspsaaU",
  "key32": "4bujrfGY4qcn8HEJj2bp968oCWFkh1FERBaR4gaNxnD8sxes6Sxmh9rttdm4tEFgMF2xzDoPRr8QgrPwGzxjycYr",
  "key33": "53PYnqnjByWgCyNyPLPXuW1dvQiNHP8Y3uhy3mjLj6HJFFD3MiXRexGfRtvnBJoeCzi4LrGTkSRWu79nH53oXPpG",
  "key34": "3DE7SURm4k5k1oEnRm6FMupEB8HqRvWy7BNiRmGuFHS6zLGe3QzHKsGNEyZETwEM7r256ggcwsTKjd5j3GqMk2JQ",
  "key35": "2owEJk59Ches7N3cJ8JATGG24GtLsrz2YsmhcPjnNQqdRXdMMyp2D84fh92TRKmK8X7XjF3U9nWvepKjpZCHm8iV",
  "key36": "Cpoqpvn8w6TY4kFRtUoaLy4BMxRyAzUA2UV9ZUXNm3rkySRkmTRZbVj3r3gdwgArvkiPmNrDcvMrc4sD7qvopZL",
  "key37": "44xDLdHtiqy7SdbitkN1tcPxKnVJPJBHMFVwAtbna1HyxfTr3VHGm2rWEbED3gR8UVyo6Tt2bGkR52NNJgnrSRrU",
  "key38": "rVLWosuusTMWrKw2GGNYAYT2q67gyLwwY4EUJqhttNgS6TwYrWPECEhcFrZMpAMak6g7wUiLv8zXZcwx5eJtdqt",
  "key39": "3bZWhS97RSaXyhQWVuTMM5oRKazmSuZisWAr5MwUomNNw8ybBmtVZaNKJK787u7TRMcy5FV5tWRdhdY5njkza4mS",
  "key40": "5xk2688tj3Z3Jn7BHNvHre8op6XQm8vAxW51mnQ4LEAQpLyXF4e7PgQrW9hejB4nybMtLYvvg8tu7wowhMAhoZ4J"
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
