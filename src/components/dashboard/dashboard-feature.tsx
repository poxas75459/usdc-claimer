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
    "3kefqHa7AZeeyktdqDrrW5P5mopoaDXnHCB9879YaSkxgTY36HWPX95UHgyvAxxchSa5UBzpuzcMtDcmt1mEunmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Kv4h51JXFuq2qYuFhDazeYzrDmVSKuEcCyPzJbPe1FKxesJ5JZXfqff8q6A1oUzVbWgoE26snhfjiq7J9nGgxr",
  "key1": "3z36GyHKRPc1kgv6tZwuk9wfYjyM8PsjF8dUf4WASu93m8yV6DxVSfwJTUDQvRjqfWBx6XTakWHb9wQ3c2zarskq",
  "key2": "m3Dsc8NnRgmr8zwijs9r2ftkRPNRNQC45jxVtLJ6T6AbG81fJHNMU3Wy58KngvhTEiTecAFsaUPFBRRgsXMEi3j",
  "key3": "5qfb7qEAVeV5AZNKd4CVAWw8gypdxd7tweyd61aQE7YDBWpd56RbHLLuYFtgNjqse8zw3tLpUe1bTW3vjUtKuB8F",
  "key4": "2sHSM8CrDcazo9yXd6dfUASfubTEF2qrPryQTPVnKXdKi3mr3RAF3XvdFm3Ux24Mhg51Tz4xrQmMEPKHEUECzfzT",
  "key5": "2ZuQohc1CyiLbxoTZUa6nCdNeNqMfDWHnaS4WFjnakv4WWUEtecaSfBLsLCu5YGYbirwsvGGBVs3EMqcDMvPtJAs",
  "key6": "3HDJwdDwQCrFuRSjnjUDUEpMSCSfz1wysudnP2cBAoeohw8i5HYtN3NrSWbRHuFDFcpz6oKk5NBLb1QvXGHGeY3b",
  "key7": "53kfHEB9r3rgzfmPiaAfp2EomrUGWBqXPQXCTnFxwaF78AjpF5nTitprxZN1WwEvE5ZveRryB6GtSxp4vkLt9o1X",
  "key8": "5Wz513UFtzrT7F2v2MCMKscAgRnZFmmhrorPA4y4VA29qyekJXSonSYsNDe1A4r7CpCcAzRJpF1PXt9WQHiETgbG",
  "key9": "4dcx8Adj4KeVSRUCtdX6u4Se38TnzvBqnEVcybidQXAAJU7bmZt7XtjPAcY2398NJNBw69TbfnxhmZAsy7FXVzD4",
  "key10": "4eia7VaiTKe3urLsGByw6BM8nLRvYNnHpnBGqqV75hNSsh68xK4XWPDosmUP7VEifC7JbBcrwiErh7DSinF1Th4R",
  "key11": "2cYncVbEb1VmR3NVTmuewYFGrw1jYyh6g7Hy5KY8e1YW4fkzVTdcBa7RH9gMgCMG1JWxvPmyA9fCEVQ6rqRW3GEw",
  "key12": "pErHae95TcPu6o9g1tzA9ghUumkT7xYhqmaSd7B6adPYmX2PcUXB1i7MhPJgTQ2BV65gEnR3dLYnossRh62dFtk",
  "key13": "BdqiVk7Fa3sPNMvyenxSkonbb6S9yuRQXwyivKEZG3Y2MxH2J3zauyYmygNairX3wNB8Q2i342pWah4bXseHsr8",
  "key14": "4AjDr2j8sCxZHABCMN5EiNa5RSmFVHSV8J77sHqShv4FkKKZtNk8xHRWgCzCN9zj3nekuczBNcud21o9GeLUbgZh",
  "key15": "2NXPWid69Bc573qs6UPtBDDNWeoiJMuJAGYcs7rHehtetMcyPUYGgqZmNhVQfGTPPumrQUqcN568h6kNULDz5zKG",
  "key16": "2Y1KUzhhH9UexPSyGyWqM99qoG1uSyf5Hqj29DfuXw93TBkSdb49QSZgxnM6kxHVThMhV6WsEbEf7516c9L66bRM",
  "key17": "42jk7Jr4VAfSMUdnEvkqPPvKi33GUpKEXc6EQV7JCqHmmuEMcNPR6pzaP3kSjcojXYz1TvUwy2fDW8yrTmjH3nSk",
  "key18": "24n3sNAzMpn6chCX9rsFXgjb8n3JiNvqh4FcdNrcjRnHkHcd7ojXDfdnxZ4FC1K4AM6xiHybSU3BmBnmUyqycjsi",
  "key19": "4zqHxsXXacVojCiH8tcZw2VXz8mjQJ1Wg6eAaE2UAQLKvAQZJQ2Esq45Ste4X2ohnHHswohjcJjmvMaxTFPwxyG6",
  "key20": "2VsqDQiwfBQTE8B8tzfqyWRhyVhzddvMugEXWojL5z4ipbfeDVUv8J9x5S2VhHLhW4ZLStZBnbKMmoTkAEknhcjq",
  "key21": "3czWyXi5qKMnMZY2pT2BKx56yZHxgn3tb3hJi5heHSX9Gw9LqtKDgcMBcjKawv3uZ9yattuFU4BMNYQ9tp32w4e8",
  "key22": "3GSBATsJmSYdgntYTgsYrQZc8bKEiiqPHYQ6zFJPTCmBXy5AVKzvYd7ik5hazfyRDnSthmi4ToZbnycgMbGCdqxw",
  "key23": "36rsCQUm9E848AgcNDGqZmw5p3jgjRpxuYbWujRqstaQTCffpE67hk9xT9B4urBh3e9ERde9UGmaJxRZoh5tdWT5",
  "key24": "2VRBc3ZCFCE253xy8woykBpXv2dedoFrfU62KmdpRzGM5LkXR6LmL99MHXLcmP9CHvaWmiXtmg9HzECsndDvMZTH",
  "key25": "3s3W4fTCZngRUsZueBMxuGBDFAQ4XjUzNLzfyebQXQcqkx3uz34hbmFs2vnx1wYFzeNnYAUzNJ3oSWSR39KETD4T",
  "key26": "54N1GYeN7ypMPkMbBL8AwxciJxA59cKpsL9mirYeGc6r1QC9Cvcf85xLcv1boEWjqFFvkLtA2gkB4xxL36keE2sg",
  "key27": "4c64ZmV4WhtJeRi47M7w1zmcYMF7ZXd1jxFNaXYXkXYVeveBvw4Rg9vnggCF26Ezx6RW4cCBcBLsuzCK16HJr61s",
  "key28": "2ZTe5W3HXDKyRpsfpnHgADQBPefFWPUNi5d7njU2uP2eohGFPeEqPo86Tn5cehRMahPZpAmgV79QpjjJUroMVRuk",
  "key29": "574LSHUXUGVrwZVaFRBrMoG8pmH5eQcD8gBWbxcRfuWMazyrJFyhkdhNPDdrgzepTHy7UT3prrLefQdyfAW4WuT1",
  "key30": "4jPUJjjCneinzLmTVmGFXrgWD7wn2geh8EGHVvTkhFDDeGrFXuEUSSaMAUGpzPfvaWfiv86525ojA29U6s4RWvN6",
  "key31": "3n1mBmsFd6pHvhShoKbM3axBd57A5pLuBg8biUQbbDnw4CNPrnq2kQKMwojwdSpsw2B9a3WLPaaiGYmwG25ZcMyL",
  "key32": "2DeDiHZ186BZiqgBYwjgdvZmGHsR6JWgauBYXnsfa5PD8bM1s5hPNZD282xd7t4KXh3qbt8DYDpxU4AvqxN6Hi9q",
  "key33": "53LJXbwJczxi4d76zKHTRJiu2ZKGCDjK2xUxyyHhfs4gedK4DdxuH5j3u6kDwCsNjAdCMJyG7tZoY4hNi78fhc45",
  "key34": "2RPLvLTq9eNL5f9ZDjYAHaYyMZA64C9HWN5gZ2QgSi5ZhYqoF7fAjk9PZ6KXjfCcoTTwmm3GdSfGGWSWCGXF9bX4",
  "key35": "MTECwYra91sbSr94XAmCAhbbMqHNrfpqhLCogxvSixaRJrYaXDdiry4QSTNKtdG4rfB7qjRnCDctdgAEUob4XGu",
  "key36": "29ZUVvrpeFtq7TpHCy5SbkAjov7NnQeeyDecFmt8War4Rgn3eLiC6QVm5hvk65xASH94ocdfjPBSAQDrux96RJTm",
  "key37": "48zhFEpk95Ao4EPQvKGhkTy6fKwZ6yofEe8SA7TWEncDRsAJzqyabwvPUnrnAS4gg8LbYt3eJQn6uYDnZdrsvXGT"
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
