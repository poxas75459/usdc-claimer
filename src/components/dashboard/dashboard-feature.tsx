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
    "4n9rcnBdZDjn1it6eJvZbbPUSStNNFf95cXzfPVcyTRZw8QsW6UxNaTZW9yTUccJ36oAfUbEuTDiSZG2yiukagws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QSMCLKFRSQbGpBaAvej5yWTrFNYzNLggc31n4WxNBaRJ5qNK9Wu3mwy9ciSBskJm7UcvFfWFF1haWK8s2pCYX1Z",
  "key1": "3E8n1sYjWNeTJdpxBbD8XExMMqcyD9BTatxP4hG2QBoWdbXQERXsfPCgwQqGhaoadgrzV4kxLrNJNRtRKVHFnX53",
  "key2": "5Uchxj5AmmzXS2mVbUePzSxyEKnSyzvxXqevGDsjMg2gr9JiiTSZpMw7722LzUiP1PpcdHxPnEZjCwGpxpQX4tfZ",
  "key3": "39u5xTDfeQypSU6p8GcFpmPawqTGUBjLbUuiL9PartnVJn8rXn419e8LN6WD2vHpBH73Kvrf2K5ydev7WZSfDe7Q",
  "key4": "5miLhs7e8aJS2Gk69AsoJ9prNUW7tYnjZDikm6fAuGfvr1hSZte4gqEHStLtxRD5Eor6EHWVfLVyjwUvjpETCPoa",
  "key5": "5ujWaEBNhd2mJf1WPSGJWZaDFKPDz75F1qJUjpAqfJnsYo8BbP1gN1ccLE4EGfRaDRAwbLc97Y5j7bjpn22cmo8L",
  "key6": "5n2eY59qxcctbwm8QmNKAZepUD93B2miu77sdk2BDMYjnVnxFWgVsfxkjDoVx7TD48r5wnsR3k7kfKsteSvSgHWc",
  "key7": "3baHkbR27iYKJsd5erG8bSGYaNBsuoNDLQtYW7ZGTXsm7e7FxwPWZgPmmHKgu55FHsEfGJPr2bVjjVJT6ZWxK2pY",
  "key8": "4JxsAcvG9UKGopn4w5ot3DhZkd2RqUg6JP5xmaWFx9mMaMg35JPGbs39bVYSB8cgeAPHVqvK6q7euXmWE18UVbPK",
  "key9": "5Ge6V4diFxvfUU2xs8ZW7HWdnCb6w6JXJPgfxL7htjxuboVzBTCTTJjSKzwWhdoZbeyh3cGTQHM8eYyrxZMhqbsi",
  "key10": "s3CYR1Y6w6bBxwUwNw2ykak7q2Th1ptBYZXMfqBp8NzT6Bf57S1XzoV6f7TqX5SawJUQ7XNSFtz9r9qtm43gwRy",
  "key11": "ojorqvMkBjjuqHe2J9bssNkEGNmT8bMVZ2D4ZDMLnku96tGQyV2xZHWHFchWSHGfDYoeuNqqxkkFjSezR3q9J7Q",
  "key12": "4qH9GxcG1jEyquTo4Qh6zRRhcGYg53bSbpqDH39cBKScCAHqGtNyRzsj1KCrrThHV1qMc9UYLxmHzJhzWvWXRw3f",
  "key13": "4iqbHi8EpwgMVeXC6nwxRQBUxYSW6BZZ4fXGYPYEmsFyFLaNRmTCJf6KM49xS7G9pkzFrjFr3desiLoEpiB8EaUb",
  "key14": "3RodwhHz2KTcSdUWsuFi8zvdKGmJEM81qwGjTKsfZAyGMivGgjmXv3fPykWNngXo8deY28oyhnd4Wb2B2y6bbDXV",
  "key15": "3x8nUm1CqnLizviNWtLSDJJ7R2DJS8wD1jjK3PtoYZrDg2to2933vVWA62EJ2BhgGBxKbqMp99je7h1JRVstRxZG",
  "key16": "4nbcMKihSG8W1HCQHSj1wJrJAkh8eDGeSErMXQkcmzaj7JUpPeCw5iagnSUsqTZEfsusqRxRrXDFfUBzdQM5n6eN",
  "key17": "4SktWc3xqcYQvV7VbpXMF54PtUu8eMyCM6XwB4mWhuBnbSAnUA6zcyaWTdXgER3ozcuqSHWbuDsiLree5hqzC44E",
  "key18": "JeJoxVFEuZ6pQposnRf4xVu5HQkKaZ2tTM91kQ5cFKwZp76sMUJag6aCaCCpaY6RaeN1dmWgGTSY7h7r7JGwkBM",
  "key19": "N5qH4NeHGPEHt8kyao3Jb7rVYGJdzLFwm5T7gp2kYybemcyKWcvwmyM1Ruq8xmGJgpLJgCTRKeDhKqL1JoVJ8nX",
  "key20": "3d9Th3zEoCWVbS1rKqJ3CyNsiBfiVzffjDrURC1CfXy3hDk7fii1Mk1ECeh7KANdJbnveMJ9Z9KcAjRzK8Cy2DKb",
  "key21": "2oNDG8asBEgKdDVmZuWqAN6cBPAcqWzKewvR2YNd8Q6yC73pzczN59QMo2ELDhSWoMcMb22FFddSANjvQZXXd7VC",
  "key22": "3sPDbZnducbXxMNMufKirPnPSTTH3umD9Xtu5ZuVDpKmAEz78Z1R4qDQ3sQz6xpajmQfwCfpouKsUURtjtCuKXa7",
  "key23": "25vXugii9EfzXSq15rj3Jhm43BMjS1xadzQVhZiih1qzaaV2QKjVyaitNitGtKiHSYY6eiVEUdVcvf5kX3yTkQaF",
  "key24": "2M1FGKtKEwT6RkD7eXs3wUtK7ui8iAksNvmtcbidVxN1V1TTAsndZ2VDn7nf9s8CDdSfe7uYDGWoZAMBcKeSYvZz",
  "key25": "3vbHhr3HhoHQQoFcMvDHaWh92BoWV7jZSESkrCJgduyRW3dJvRZxwcVacybdU7xwC7HUhdtRhezAFm1MqxWPbZ2L",
  "key26": "5fw6nAZkcYCRcare2zjNtZ5Fiox16XeN3VzMM1swo89gmEbgD3ewKKQUg1EMHHqjnkFbt4z86NT7G1p4RKjeRZ6A",
  "key27": "5Xz2PxVE6Fh3TmiKCedMbosyLhzMvzSxoe9PDViM7WQkNEmzrRGYgbykWbtdmSepJps9cNZ3ZVboa6zKLhmgm8N1",
  "key28": "2sCivWgTGwuCwgYmHCrGHnLLs5shcdPAtLgVTBRxAHSW6nqrnCEvvfT4kYNneWNVRaBAmfj9v9je6n63mvkb84f4",
  "key29": "37xSQb15fmQxZ1919UC4cHYrgNo5FexjFUuwy6A9PE43nbxkhvqgAg5DpeLej5vMDcwberS3HU4XLhzHpsnEqdTv",
  "key30": "3FiVZqCbzE1YvruQrLLu5vUFv3hVXWVqXYusCehunQzvAK9XcRTQHsDe4JZskeNG7rB8jiZRGEtbg1FrZ4R3JTNr",
  "key31": "44rJekscTwSxSCmKUp3D2nYfykdvi8n9G5EnRSdebbh7D1F34tRVmhdZR3MxqgZuR7BX841WqRrNtN8duKdDUPFB",
  "key32": "4xyLUBZtc7bpR9ENX5e5Rkc6xrFGXRzNn8ivA6JRvnTgVxKbqLteEubgoRnRHSnHfdpureA9Ls4rYB3Rb3bMUN5E",
  "key33": "3GNHqEEXNaJdeYq3XGMeoqKJSyZHF1xricztWm7AmW9419RMcLrtgLVrvyN81QH4x4fQhbzTvDBt6ZPF4GeWm7E7",
  "key34": "4G2soVohEEKncimYqLaVQ8HneApxctct4m3cPAYm1JkuTvV1gAqbgN5BQiCPW6AZ41LEuhUZULkkPk9GWt1VNxEt",
  "key35": "4LARJ5a8HKs3TmVyT9RqfqQbs7rLg1VJLtMbofzYr3CenDcxnYyaWeQNhFvg84m8sux4hDmU5JYiLqVCsd2qbxCf",
  "key36": "4opYao1TQpieDbfzgEbC4VTRW7gWJxfnGwr6f6Eqn3U5Lni2ZvtJR75BVyVNCLvR6bEC8xmtqmBPF3aQWqwbcBUG",
  "key37": "jbNGmfJrE42MX1tozFLRp3QdUQiD7WWueqU9mZeNrdRhfUyZL1y3eh2cvWhesCBQuA9hG4fW3wvJagpxBRdZNpJ",
  "key38": "3JiWzQdRQ6zcaAMrMwSZqkxQ7CoLVVUcQHbcPQpcxRcZWu9L91PfqEdBsgwhBAgLWCno2YNd7oXRmXeKxL6axk86",
  "key39": "GPyC5w4qDp2aEiM4g6Ctt2zQrBSN7maosLKfdqv4FKvppZwuajFeNp8uoz98DqxQAL4PniKqeHJwQ5sTzR5tpkU",
  "key40": "3TMBLW86iMCHBiuvdq3pvTzozEifvczoMhP77Du4VYaofv9NjfYT6Wyx5XdjnqkwwBfCc9dqQqvGUHEuRVymCztg",
  "key41": "4kEPxvu13rA6jSw12cfnceLwPK2XEpxAc4VvStQRZqzZCJPu2c5wGXp4J7uSbfsJAprRbm791Je5dHp1HWwvMM5c",
  "key42": "4FGibmCFQBnywe5JC1SRfMpzvg3ni6Ad7YJNJTyHXet6UM2rxVETKZrv9xybAXdkmoyZobgU9Kd9uCemvfTXCmGm",
  "key43": "5AeZgLKbBAcSog9NKJyeewn61kAg5LUHZaagfXySKDzDaDtPf1TzstNCcR1vshBHzX8CuoLKh9AbHRk4wSVrzxhp",
  "key44": "3ctjJ9SaxfVTsNV2v1NnVtAa8u6EiVXtME7Lp5Gj2h3TbLm6aspqqNhYmdNJQM7CfZjTBB6f88pP7w5xW2WJjTTT",
  "key45": "2GgD9XfPuHM8VThaJhZ7KEcX3vSUCtLscQFEJPPKtbeW7Ex4JPyMkNmdXqzw8pq3uTiNgBsaA2cgzC6zfxdhx4Gk"
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
