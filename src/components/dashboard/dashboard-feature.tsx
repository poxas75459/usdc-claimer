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
    "3NSkfGX32NDHyDJ1QJhXLdQZYaRPrAAGUpFuDNuKNnDp6SqFtygQYtEDbTtKCqbnoBp8qDtppVtDGX3cKumMooZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KdZW7eE6rre3LokBu6SyDz8ycFCM6UPHo2Bw1AyDfSnmaqtLBXPsvLwCFsin7KchKuues9JXkPa6yohBvyWiBgr",
  "key1": "2kRxNSmT8QhR7NcGnoRvyyhCVZaywEBpjDTPLvwj7yi14cnUrJG7Jn4Ro8nX3XGjbjSZLYHYMTe8gRmpvFyPWxER",
  "key2": "41ecveL6f54kLZNjfS9sSEdkVqo4mY53PcfAAT82T6vdBLri8A42GYA5cSRCbAUsiZ5KuMHFXdrukbaVP12rm6oz",
  "key3": "5e72eEGJxQypRWRTWnWgL2KbctMiu1Fp7ca2r4a2ht11HbaY4j3wEDHJPDVdE5MdUpSZGPy7R7QdAcEcmz5DunWE",
  "key4": "qCyuHqc6n4mQ9jL1uXe4ggFf7vbSiSgiZCnueeuiJpwPMuHtNTC4CvTzCtszYGV1tgyDhxCtxtA1unqFywWvzMg",
  "key5": "54GhBbN9kpXn76L6TLEFNxydW3sXBMgakyfAExS6Q8jYpicpkUARxHWaXmNpGgFY8tuagXbf5xsZfsySeC1yNEjp",
  "key6": "a8dfFoSw2uhtGbQxa5AV4SPA3k23Hoxav2imuMR4CwxxWLXPN9WghmJRmsPbgbw95oqMxBYJHAmP9oghSnuv4h9",
  "key7": "6kh6KBZH1d9fB94ve36TKD3atspGV4F8ajiWhzVzJjn6Y2W37JaPUkifDR667YmrBZD8aY8vhPWSg8PyeMgB8Ye",
  "key8": "2kdXjTytiGppmYSGkUqe3ZrMyzmpB2rgZGWqfb1a9Wx6Ye2rseyArCcThR6Yem8WmmXPFjNLvNaw2RfvMoAVqarv",
  "key9": "3st4Dja7hMoRZbhMKmrf3BDQeS1mTvLdBFbEkKSpiChZL1B2eHR9dLytCsXKKXeNeVZSUd6NgrTsN8DJ9GZA35SW",
  "key10": "3piebRuRgNtx3hqeSZh4LVVSxf8GgehHY7fboiPc3j96h6y4jPEnMPy8bcMDb1XnFTd2Vd3BGQzmaVCdjzLfDdF1",
  "key11": "2PRmABFZTQ1QGQEDjFHvcLtfuDNAkhtiahz6KcNNWjLeA3xN1gePiLtzksEggjJDtPbKQxJ1NcwPYCrW2WJHToLc",
  "key12": "SjgDTxa11HEZGgZYnqZpfd4xuw9soJKPjzRDYDzL7d8SiZYmzqzfrA18TFdkidmeyoVc6Py2ev8dxDmKaNDffws",
  "key13": "ysSJkZ8pwBr9sBPCvXPZ9PmoLnjP1FggT5Qj4Sz5YapKf2kMVAugaQSWEdoN2p8DiMyLkhQk8zQyuy7RvRKNdws",
  "key14": "5NGMAgMTmcK8AH7G2s4PzX4QNRSGtmLc2nZjSsspEDqk4P7i4K8Qgcrp9gbtrFS15Vg6nw7NyX64bi3Y5xAtuHw5",
  "key15": "f7hrEth7dQ9RygYx3qKbq5UVz7ZyNZaCknzBPotGt3CsRP5Pk3QWvQow2WwDUkgNbKSWbxMtULqweSS8BqvGhkf",
  "key16": "3SRCv2V7PwRbq74FTxMWV3PPW1EvZDoph2biF29Et8b9pZTqX5bRm5F7ifS375ghviqVhm5JjtXRxWvoiotqjaJQ",
  "key17": "2nm8dkro8YN1s1ZaG8pkVPRbvvMe4pC11arFtWs9SSQivXV92Mwee8EcT5Yr7ujvxH6KRc9ZsLbBcqv5McVjVngC",
  "key18": "Tfko7evRMhSCk3ZJE5TPTx1zkL7X7m7yh2XBnBkwivuJ9ovMynQkdrkUqgzuw8WZ5tfkgs833HsxsYxGmqV9Dd5",
  "key19": "48MSPdJHrHs2qqT4wX12Q7nYRasWBE4ToB85AnoTDJyWQ5A12HQEvJd9HDKdMEPwmgp2rbYgvfUws37YcZXYb4eV",
  "key20": "5Q2FRkd1qBjufH7vV2nQnPnzPVoc2CRvcpjLEamazk5THknmCHSkdp3nvkzRC32HiyT9hs1EYhs1a8U86RsnMNm",
  "key21": "59L1Cp6bPwHUqVC8tihagUPergjPdmdC5J3txYbn9F3yXisQVH3vKq1ESAYXWa6s5E9TVCpAt4Y1sPR89fPhAivx",
  "key22": "5hG8LR9aWnoRJMr4JTQ5xYRS2wgM9hmc5mS14iutURSr5TmrQkBEF75awc8toPSq7R5B6SkxTyawg65z8XRbstit",
  "key23": "bGLZbC2aKyxukBo4wLkoGERwLfVSftZL8J3Y1TaqTpn6QLRbvU7QKk6F6cFT6dbKS9x9jEVLxxpcYpqGfHzRD31",
  "key24": "2f2z8Ghm95WHoHizh5HzdjoRYsFxgLYQuFfb7AyAjZdC8zv63j8C8ARTa6MmKQEEmuRfsteATqhQxaiMqc3F2UCY",
  "key25": "kyMjhgmt5ciztWFStorRhWhza76zzcPVYsaKmyMP9X9bbTmT7sAtgCCAw4Bbn8Ghf5XPJ7Yhey8gAMW8CJ5TxYr",
  "key26": "3HHipo6LJ75yy9ES4NvDmxqF67J5nyGe8Jbk3k6sFS8WtPCpubARi76UNKLASZKePEzCZzdYdRQLyUNXrQH25rGF",
  "key27": "k6CzLnEdyDtn9jpjHHWa2ctfdFwME38tfQpRN1ByC5sAwKcQWwc3YsZNC1v4J2iRNiSDJGMBRzZQizrAZ1Py5CX",
  "key28": "482hAAUDKGfYdUykXfzCA2S5xGJj8KMQdweB8hBdk3h2sP36yj7oZkchedD6gt8qMU3XzvVXBdGfmpxqrqMbqa5s",
  "key29": "3L2UNZ6vcah5JZRDtvk11u2HzaVBX2MYpWXmJtJ57CzkymNtrm763wxH4sCtXUkFVSaxyoeasRRUSLLr5DPfyBBZ",
  "key30": "2btnNRa7vxveyvvMFRQmK7mmoKUtY5LwidibbbyyGARqzAUn3aYoGHjqs27gjwkx9cxChccVbBJqDg3TtzzTwfr1",
  "key31": "3KvjfGiJ5zMgSHTFpCMSoTD9uL4AUcdC5CSu5gXABjsAzp8n5Z5NWzyMhrXFUP1NkdMsEmcdbswAHkpofEhTtzQZ",
  "key32": "31M1wX2h4eNoaX6BmB5z6Y9g7r5jZEeQFedV4WiG5vBNCr6yeWRC8RS3wzfWBAMFZ856Q6a2qWraHVQ61tGaeznS",
  "key33": "WiEpLfwRQLGYiCerz5ctRZwLhkRqaLpYnM3VJf3PTefXmBPj5o4cndhuA4ypByVzztri2bnCXfukNxpcWTf2xQf",
  "key34": "4NBvrShS9xXSZdJeo4yoRVCAwyhgPAKiC9MjKJRab73vJrejVe6DDZjpqnx6NfpHJYXsX35D9viYYdCAPk459iCn",
  "key35": "5KCsvfB3n6ycj6rqDB5hrVxTZ6phDNJPvfEZsC7RUqvABeShPHZ1ot4c8LGyyi6PkeNC7ojTnY3DTae4NccxGSCB",
  "key36": "2RdZbEmR6i35fXFc5BK5hrdz6REDGhEdsdCcJctzcLfZbiFcw7M2KRdRpmkQwpkyLb6km6MgoPJSknJzJGPiJ6br",
  "key37": "2G3qxvMq6EhWLvMqk1BSmGgL8NHQgHSThKp1Kmuffq2jLsXCiaryzrHCs2dYJT6xzdRrL7ZTFAHniCTu3jWZXnWm",
  "key38": "3Ke4KtXei9yAYwRd2xePj1QtbVCkVUeLMEDV7ZxdWu6Zv26wASg1CZ8rxLyWq1TzM4Y9R2PVYp2pAzjeL8PpuS2Q",
  "key39": "4jMcnqVx7SywBrchUhP5T2ccdEp85pppLb8QuW1YTp7SfZ6yBQtpUJAYAmVNU1BYoRuiFGyNnAanrc8vjmZ5UE9a",
  "key40": "5YHLJHW6zff93mhrDDMUhBvKbkEiFcYrs8Zrod7A6T7sorSt1ZCduyKYtQqKKMKv3ZyyFYQfHe4h3y16hCGLQ6dM",
  "key41": "3wRqpz8bUXnJCMv6QH76xLjE65DgckLS5oPfWpLuyL21mcHDz7LV3LY78gYqzihg3Ep4eZVrjw3mDmyqCmc4HqK3",
  "key42": "2L9rW5tADpPwZnE5SfMLVqeLCCZBAtkpN1j9881R2NDQdkgcuBiRnDCJzTicLS557YAiDQATq1Gjarq7aDWUpy67",
  "key43": "4QLimLP6efwZ2yWh6BuT2Wrme4G4E8cWj8kHxpc8pMtm97umfQeTK3YTxuHggyBQGXTExgTErMfGtuuuh7RtefYs",
  "key44": "46Tf4f4VZHoVmfzg9NYTpp2iYLawZdo6epU3DkxG7ev5nzzhYx8C8Z3mdpj78N5DZH1UnG5J3ChRP6GrE6dc8Uic",
  "key45": "gWZVS6j4vG1h8FZiyd8qs4DNoRMcoAsYgHkUtMNjok3mnNYadKr3YjiW6fJD3rvxJpUnpa4uH7k1QrAjde5iv1f",
  "key46": "5jE5UHsPy9xLaYrw47Xp2ShU939ex7vwXbVDmRzhYG3ajeoMdkxpfkoAYFXNgLscqDGt1mnZKSB1EKQb9vPXsx6p",
  "key47": "36JiJB4TmyMHJTKk9fg4WwbhRWeaRgqsMNHcwzNDtMtcq6fJpaXRb24qahSp77bKsaVcCnaCMst9piCAFbnmmjnk",
  "key48": "2jpuw8NeTGa6yg9btGNh6oz1Z9k8PeaQczKZXZHnHVAsdgEmV59GuyLodYZfoxqytzMZkvSbV7ErB6MjF2bnshxd"
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
