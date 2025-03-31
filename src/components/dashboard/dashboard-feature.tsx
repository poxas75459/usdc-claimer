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
    "6L3uvirH9sCNxaZrLBSDRgyv7Cxr1mah83DBzWPgmYSiWwfRaYQD5buRY4W62vjQiAv1715a6RqbevoRaG3RWRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZH5UzTWYcnN94NAHbeyB1jGoxPwXETjRNV9cNpcMnduF51utkiwpryWerhpDv4LVuEC4Ai2UckLjWwBEVDQSE6u",
  "key1": "3epLqWYsmK2UGjasREmx6BjPXsYFYp5tyNmYaZpYWXxWqj9RqUws359mHXG8pdLf2TsT6FRPzJ793dt4idGAgdWu",
  "key2": "5EeKm9ivg8MKD84W7TPePTcpgdmqsBEveqDtDpbfjkPHUzFhQkhWoR5pd82aZ1gar5wRjXvMUe3cDpZVNjMEAc9y",
  "key3": "232QjopxFk6xM1pLKLPS7DyZ4puadbRSyFBu7NxYNLvb83e5i9uRzQEqVUnujLkrWKPbtFg6jSm3ip1Nq5Jm3SVT",
  "key4": "35neDPasE1TFgccQCiXQrQQbwFgLW4cAs6Vpy2BbjvH5rmSfK95bYAMwUknpRCaLaCtV3ByMYdt3EJJ3MwkNR2aE",
  "key5": "5wbz6DWzGy5PTCJVv3QHwK6v57nBMGbzCf7hGXrxDPEY41y4UpTEcdehEDLTDYfvQ8FL4FpqkxBw6j4Fhc1i6Ggg",
  "key6": "3zdXZLSBxYkp7DfVJe79tas5yEKesZ4iiUagTBpo75LxeXJU1QnWVypk4FfPL8b5vRLzVfqZR4W4gcFXC5XBDzuu",
  "key7": "PtyrXsoSbnXsveRoR3LTH6YFqkHtE3s7zkU9Jpt9LRvgX3YezyR9qsAbUYpPGECv6jp4jemeRVVBeydMraCR2f2",
  "key8": "5XN6xBWkCxbuAACYdHPyFtP86mriX62HMy7QQ5gxn9hdgXzdc8T4XkyHt39u7ddtUYs1w3ciagDQTfo2EQvZ6RNe",
  "key9": "2YFFoHKXiWEK1c3tVm92A1CU3BCG4nZdMV6jBTyQyogrSubCZdgu9CPZLndHU5SaUbgpQDNDmqqXEpkjJAxcSnv3",
  "key10": "byU1ffkfJRAMqq2yxV1h1xFeBozshVmsvK9aUaYXE41gwuj5QNcxYKhNcxhh6QjS9ZhyJouwWkaMZL7EZBbAziq",
  "key11": "5F1epoWQ36LNFEACWosXqqhASZ5jFVwK4DistBs34mStFwt9TgH3KFngrXHL1ABzJCtnhjqyVxkayteMHHghECXj",
  "key12": "4rc7hBKQBcfe7JZyvDXPWZPXDRMupDthoZD3ate9WqUAfk6xGsye7g58pbuw1gyYxW6m3RxnDpta8BpXmuWbwNwz",
  "key13": "5P5TxrgSdwVgeAa6ThZkaaA5VQtTQiVMgbT2nCJBCHrKQwx4VNRVapaK8zertHxApBeJXMccM1Nz1h1yRoJTtVpr",
  "key14": "5P5QnS2XyFjWx1CY685g7DQt7rPVzU9htZMpx9hJ93GQXu1RJa7PFDqQE9w7Ed7W52DD94J9hQSzCD1fdwrTfdtz",
  "key15": "3a5ZydRBNBEkwXh8HpXM8zrNoAB5WN3WghyjuWNobrqvVJDzfbNBjzEfFgabuHAJCcusj2MANKwGzHMoTPxEHxcw",
  "key16": "3xJ7LznJ5FHd4X81rec9ZhxsTADSjg6Cnnbj68mVmQmm5jYtuAGpNGy3R51wYirj6s2biYyHwWy8cVRXt8sbMjTk",
  "key17": "3pwREF26guNgtUVeb1hysn2umXFrnBPnNkY23WkJMRfabpr5nJhAmt7h16G1SWhvmDRdvzTHnLH4XAvPxagZbD5g",
  "key18": "41aK86YKm8hCERaDr46qUkxhAd4j666wZkk6fYakDtNEr6gFajpeHHouWnM7RXV6oQnr5j1GG413umx6njx1dabL",
  "key19": "4cf2Axaw6cbGg4FUKJ6R9GkXLGsCaiWV1jD1eCYFiRoCeDEkJywNT7gSGs5VCmkMtc2SzwqYyxSRvUsvtNdGDL76",
  "key20": "4TUXxBreQxczERFpYYJScqG35QqWCpciTJq9Xdy6mdiexhVmqE3fKxD4c8gmbtVxGd3tqV8CaGWpHVihRinXWeAD",
  "key21": "5a3trhYeKJHnoipRD2RBDcGbJjWx2kez2GXkA37QZK8zaBJap5EbYnBra9hr6D8BbqxcKAdECj6smshdqGz1LqHY",
  "key22": "4tQj5uxWaU9mYu5yF43UFnoCxmFz9AZN2eredmMdeCTYz3poVZA2pnTKhH1XGPhjaWMRdbLFoRirxjPhPntKVSU4",
  "key23": "R8oCBaBsXrG2fWs2GtVLftGiE8o2NWAS4w6nUaMRbjnrbc41HYKrczPns8UyLm5oZM8hAZ6noZvhTdiNgvtG17G",
  "key24": "4rC7kQAtGH511GsihVTihkiPQ6KkKoK5hYAf3RrZ6UB4rnRxnwchbDkgs94hETvdFZeUQFi32EB2a3zkZDM3aa4G",
  "key25": "63byzCy4S1HyxXYmKuioGZ2Xt3EL4YRFEUB9tLeLWKBQCQdw38YpxxtWZEhPKxvYfMuwDWZ5WeWd3pUKYHC9dW9j",
  "key26": "Bd5tr45vKQ16ua12t6mx4QJ9hFRZKCzC6xbdXUhXFDkv6Hn46BnFZK7sutucBvr4rmK79CCZS4bTm82T8e5mPwG",
  "key27": "2NhUZRimJ4XpK2ghC3Ce2a2BHwDupo2qx5VX2u2f9DiMRdYHeoPrLZD9QXsm3MP1YDWkvWrynKpP34jKTkLPpgZs",
  "key28": "46EHPQ7rBgeMZJ1vEE65FGwFNpwzqrghjrAdEhe7yvFAKEhDfYWz4uwX61q3euRjmYK6BXx9T3374pj9UZDzw4XM",
  "key29": "L4Rb9gA65zKL8K7SpZtz2eS4K1jmBtnxiYnPKxufeVohcy754XNhbPM5eFHh3WuAMM8vWAJDnG18dNqht3BbCJ5",
  "key30": "584xttM1zZuYS2offdVUxWnHLiv8taj4iLSc13mpQWZNhuPWSYrUdjjyiSxQ39zEVERRFhosF33tq88cyPDdjsMr",
  "key31": "547ZcbMX6jSPjq1ZogMUGxAcZeHHAzGhSM8PvnXnVvz36MKKewvVe4RktWFGumsv2vSCHC5E4XrhkibRLR2xCb5K",
  "key32": "3fuWQRMub7wtWweFQnfj1iU3A7tmWu8ABovq1euFQnNPbyxPWKzhp9Re8mJCFsfuDqywPaGUeASix9vLeJraf8iz"
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
