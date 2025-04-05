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
    "GfzVA5QpfRjEGomPnjx8CY5Dg3Ez5wnQ6t4NXsV2e66YcXPrqYcNtzYvaQ5Sjecoj52TADoYJN61Kaup3gCmir7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FVgLNhhrwC1vP6rvngRe6P2RLnDUXwZAwdKAd7iTUkeErMVTDP4ZQ6wxd7uqW2Qvwv5vXJs3V7Zk9aAguNZhQ7i",
  "key1": "44jyJ7bgieBZC3gZGBzQSf42s7rVe9KGR3rFm781HCaWQZHsJnSdPxtzNojg4td2RcQDcMY7jtWsB2fqnwqo1Jnh",
  "key2": "3KGRpcK8w3V3UJDS82wSxgGAE5Huq3fgz2qNoropcSqwyv3rbPoWdeAyKa61GfLEAgXVThuWwdAi9c8MDK1nc8fA",
  "key3": "5Zt5cjm555Hhs27jyvbz1cyFZDDL5syL8ZfnNKYMQjderZpdegXGQjC8iDrwD3KCHiscR1sn73vr7K8gPWmy8Toc",
  "key4": "4vqGCEzat74qAkDureFrDSzj8hjbMaZrv7oYKwz6eKZfGaozhmdMMZ3pdceZQ6Wwn7uf4tXfWc5TK67ffm1cRqRM",
  "key5": "2hWYAL1Ub3wNFGmakffaHSXTZsiiFrJb7eD2uvVaWdEVrXcKLAHP1X3gQw6KVJyZsqxHxptpxxp9XsV2ttLKPj7v",
  "key6": "5bYKHBpAgHdMJrjfeS33NsbRHigYMQaA8io9eFn1sXbZkqjnnQh8d9G925eQyB7tXho3vjTCUS3AfGGJinRF9pDH",
  "key7": "4tX1wHgt1hn8FhGQ98aw6m8SpoWrnyD8qs2eX63ErT9ZLHyKjxiKqXZEQdm6SHX1HY7bFyBm1aAszgDXgwcDVBpe",
  "key8": "511Hrp9xNQrbzAPpmD9GK8grNSE3iQimAbjvdNybhfJYCouddnDDR2x27TpxF3EiUdZhPnWTW6x94rmjnJMaUtyy",
  "key9": "3wfJ34SUa7vFpmUNeHUfZDNyVpgtm5zVeW9m5KjBvSGZLYYydzEe6tforLfn1HWS33inch5A1WYy3FofVt3Uvagj",
  "key10": "8N2jQMmf4kihBLJNSMkjHser2xBWEckk6vEy724sVdAcPeDut2kfiV69UAjyLqPcSB6ej1nfoMT7zJEFK2H3taX",
  "key11": "C8zkzXq6NzKney6CN81uih8rRDoTukd9aj2wMKtaw2FokAkyKiWDo7xZc3wLvkpGF4gJuZx1haciH3UrseDNUdB",
  "key12": "7UhJqchGd5WXKT4dT3wpA8ivsmH7Cbz2EPTS3siK1LUZiGaMZXSdFTdmkZbDFwk8NC6rME9LamRA1UGFH3n7aRC",
  "key13": "29t3QkucujhvX2aMp5kWQSYsC64zBJdduTWfYGpKukTggzBv8CdVAqhpzZtM6HPH8skLVLd41vG7U6L8k6TftxQm",
  "key14": "2VF1nbZxTsPBKYeL1RhscmRkJDMeud12UJ9mxaHGNzHDsB7saPArhCNEPkr7GVU8N2u9s9dBj27RGmh8YBLtUeP4",
  "key15": "35K89NumDVyB5VygxdE2zy7QdTRj2im6dDPt2UeramgjZdijDJijYBZWoFkbWGHLk9LEyDFpRRd89nsyh7psTcQN",
  "key16": "2K3AXWnoGuekRS9TK9oxuDcYwLpkKirdGusKkD2Qe42EW5Mkq9pANUNBT1M8PqNqSFZ58cGGw6i58MxcVtYFCYHB",
  "key17": "M2BpQedwsbp26dLxqnoguPbA7fNAaJhSxjsAzzQeKXdMXN8XEG4wdbkp4mGoacbHKBAHzz8QtX937WCygdjHEtE",
  "key18": "ubyjrG5eRS57r6evPXSswGGcCnwaivPVaGumj2TANmMteVrj2U5gt9QZNo95bpfvXzr8xvJ2MtjxwNzgkpoXXYJ",
  "key19": "2YWNPoqdh2rWwXtPXkNF1pMLqjjN4HChVnoA4onKSxBgCYnYqPpXj22xgXNQcqu1We7peHqRB6mjC7i1R66ghCV",
  "key20": "bGnfiRVSuQ9xf36wzFCVFpQWkVtA5TxVM2ALwrwcBVuuiJvhjZeG5A2PvhxxjBDYLqmk4zmBhHWQadmvQ7AiDRt",
  "key21": "4kfwGcPntEYtSyC5QpfEargVsW8dJhNYfpdcYTN9oFZNTzjMJDGiT8izgXNdQip6MnJuzz7zRmQcAbqqcUyFzMCd",
  "key22": "2wrSedo356jfxQNQJa7a3np8JHoxqPqgQ68wJKqF8pLzPWJJAfrhS5TBqryJZH81WvyKKk9ZspKsMegrR9BqQm48",
  "key23": "yEz7zghMvJJFsip6hDhtnSUAEE4BKqaGFqgDZar44TMtVyBKEmz6KLU8Uy5n6vjVr6A3VuWQ71YkMmD5KPU4yon",
  "key24": "3GVcbzzcm1PRSCHeuu6kQgaX7FswtQpn1EFaadYW2v8Hfeq2U48EKxjYapHZwAdYxnWUMnduTYR6DorUCcRCxHsa",
  "key25": "3yrQaMMDWRvYJWXzprCDx3ppWx8iqop88DihwieZ4E823CzEJCJjMuph4JKp5yxguYK8ffe5Eorv2DrjW74NM6XE",
  "key26": "5dnZJyqCjMHDD5d5ns9WrUQDBehGhnw3t3HxPhDG7FzUGkZyfYRpsLuQMMjN7MicYokY55oNTGRsemopQFbR8sEV",
  "key27": "zWJp4JWghxJrUrQNKWT1Ko993bbNpse8Xmgmq8rus8dXS5yZHcN6VXixiVCk5yXL9aFjMaJTEGrZgYqH9s8c3eq",
  "key28": "2vgbECJGDxgXjpvYP1XDdTPgF2nTiAMK1MsQjsK3G7iUaXMzQr7Kjs2Wm6LhyWm42B1RZeVVrqCt5VukaRwWjoua",
  "key29": "4nnn1hW6CWRZuDfeAsudMGnRPt7TjVnrUab5FkjL3PnnJ2yUnpHE1yVgvx2cR4MQZ8Bfmo5RS8VPqMHCriXzfcjp",
  "key30": "5CRvWznvuihgZc7uMBrmiinAwv5yZA5q2s345xzE8p5zBRY7GbC4tPeFbnm5upMwVsG2RpAgdX8ciem7a4fVCJT1",
  "key31": "pHtX72gp48uJiNuKZXNgXmUVQhRVtTnarH1YyXTm1XiTG5rHjCBoaRudJw7NnoPy5W4xTNBVfCK21RmkjJNK9MA",
  "key32": "8pYtbwGsVF78sjMB4GguuaacBp7bACWmAVaQGCyTip7rov6irYar7etPjTv6Q56Gu7vvFb3TQhejN5BV33DsQcA",
  "key33": "63VJ9ZZptkCFGsMiJjLuheZxugzrZS31XEZWTye2axyrPQaPG3HU8eJsVt3k6UAW4NFej7UQBGVehfS1DruiLn2y",
  "key34": "379S9siNCAyioPPHFfdb3jbfgZ2PCc2mDZb5gWSitEuZjvt29fj2vqx9mqogo2JdP3HBrvE2BWpZ5QSvEqdm951W",
  "key35": "2KVRFdBStto7hR4tdDGMbXUdhA8jPcA3oipmbDHifQ728k2JALjTPefiiTFBLz5MfhMebZF9QvDhPhZbqx3omakL",
  "key36": "5oTRqJQZp4RxBx5igFrWLiNmRedXWasGhCYv9qicQZA36PV4ZFjtuSanNzD4Xk74RJNYgTyBZzgPve3vxjFecG1U",
  "key37": "33YyAMezHZSw1wP2ZLM79X1KK5AtnDpMXms6d48YAgiGMutCuc7eTrqiHRVkZmy2pZb4sXNbtopWSFZxL9MvmeXo",
  "key38": "3SEqBQtr52yoR85q3eo3Gb43FQ8KEkWNVNfFZW3peyFWtsxKCUn8nEH5MigRg24MsKViZxAsRzyJuLo9Lr9UtUPJ",
  "key39": "4ZNMvEBm1E3xrnmsKcJoUzJMNPZwSxNvM6FQvTHf2NsqF1AUGggXQ4kJMSLXEYyf7nJLkcnmiRu3D6sxWqGdQnwu",
  "key40": "4cbdzFZULuYwf85Lwwwrp6DWVnB71b6aoq3ptoBzc3yhfRdW7TCanoU2wZKnDJeT7qsc1YH3kJEpzsJYHYP3AFzx",
  "key41": "4p4xRtEcZ5mC3heE5v4qGSqpdYczyH8vxSSE6ihzqiWhCrECdLRTwpM9xmcSpJP1W3wa7pCQQJT2e1oSpcywJEsd"
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
