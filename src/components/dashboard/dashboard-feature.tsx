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
    "2HBuJeoUQhn3PhuDkqwSPAmVuqaQcxrBg95YfwK3UhqHZv2K58ofJmFzYQdWdS8pjzzwfkdhNYiP7ByVv4UYFt5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3geehRAFPJ9fC9mpYB5QvpXYkoQiMrGdv2mVNzmKtfoqfjvLkL3DAqqt1nLPkLcHVSshJyrMzAFmuNCtPjRQdVke",
  "key1": "5pmiZJH4BcbxQnNVvC7MnJM9BfCjqBD6aydPef3KA798FJM2cSX2aiVJeRhuwx19AyJDEY6qpRPJBM3V7r5YLZSx",
  "key2": "yGvmm5xYvSGeBjnpbzttPpX9FjJAZsCSnLCWKtPuH2rDpCyCNXP16HWVEyVJZGNquRQYZVYmPv12NL5KXzxW9Cc",
  "key3": "63SmpiQnKAznef52Kg3sAwUSf1NL7eR862s4BvPjjYfhkVz9KHNGRwCjcm6eQirUqvPrRuh6JEf6TPDRsbiPZm5g",
  "key4": "4yj1n9SBCZj7izEtgufJvLw49Fvo8N1SzKzMpqZiJEXpGf3JkMgFWQ2hPRsdusJoHUvVwEU9DSHrXJqZKuXVqGaJ",
  "key5": "38Sr3mNnMTDHVGPWrBiELG4SFFZNN1m2buSJJGucv64jK3dTjLKG2n9yp9nvdkkpnNqt5fNCzzEeXb3ydbA85bTJ",
  "key6": "3qiBCRq4nupGQss6h5AixrneQewBNbHy927xweai6CXtEnAtpDfUNNLtJavLWXrLyJHXPdQhSBhy3gUvw2steesp",
  "key7": "JuxQ1NipPEKheWMDmo8yEMbeLa953fRdiAczm5AFWvVtU4zJk14q6wNia5sFKTm9o47RMk6RbahGrwi5McgcPAG",
  "key8": "2fEyYuP6rKMGrCnb4E1TVP9MqDqv9P79VqtqwCwPKQ5AX3aKsMUVN9bVKR2YQQevSoYmWS9oaQ1PVZ4CvwzyijJR",
  "key9": "2PxxPMJggV2kJvTSgww7CadW1kRfs3x5Dms6UMhNUxEHwUGiKfLrwA99fpDkPfWjffvfKidRv44ne94b54ZKyiA7",
  "key10": "3fGw65Zjv13QEszzyxnznbRuWVS9pDaj91dAoWjoK5LUw41bsdtqEiDqcCGDJVqSR7d6iUChNBp93xMEHc4uQgFG",
  "key11": "Eza2agCpdZDjTHjSyub21cFuPSN45wAdoFuwo1KYwHqayMawf11A2LNRkK1e5aEWALoyf54LE1BhK4wCdujUrQo",
  "key12": "3hiuXSmXFee9Sx6RXVs5FY6pWFTqT4vkXSd7XGReianHuAnyBi9o1LjXDqMMvtursBNiLpNBpX2qyMbESFAMJLar",
  "key13": "4j85HunHWHXCVwHBKqjCWtECc3YrEeAnmWLJoca2EQYUfkiyzNwj7WyDsMwsX17zGyMjiy3tudnyt2TX6sP2bBGi",
  "key14": "3dEoRUXqjR3gkHV4j3LQ4ThUnPoCWRhG77YjycYDEwnHizhgnVuYiZoTEVaEQj6EdbW659sYwHsn8cjsUNxzT4rV",
  "key15": "43rQusoYeZshA7PSH2yd4dnqQXjEhZE338dkQ7p2aRuqnXkj5XLTr1TWAhVnjKmRAXojG9nddzq2AoJgb2hQ5o6Z",
  "key16": "5Zn9oAY1hTHYdhPtym5BweDfmoY2Ryv36sTCTR9Yv2dDop6x3ZdJU9jSL4Ja6CZFy2hdLA3wCDdktJnFgBbwFm7w",
  "key17": "55aqiLmst7MjgUVv8QisW7RG1AqKzKqdkjwDEEMxnzkn7NmYMpFxLfu8woKLGycXY6yezvbZFHW1GZT5KY1GgyEA",
  "key18": "3eg5GBMKMDAW16DC5HZHFxae7Z4go8iLfyVazrRdSRFGr7yvRHeMBT122jbxNvqn5NjAYUkZXpEVe49jpoQSVhwz",
  "key19": "37XPicMZhvZXu184aqCPfMRY1D4EvoCACxkjGn7ArSrwuebBL1dgyyqeHnE9NNkSpBxuZKcmrJLMY6Aqc97U9XJJ",
  "key20": "4vndfp7ETwFEyTi42a3D1ncFYiQPzVYiqNaCMM4SqCi9vuqQ6zwpo7KDYXuydmXQxmTjF8KWhXt1EE7Vqy1e9FzJ",
  "key21": "isEdAxKktvdfP8bjFJBvU8yZxeZHoyZFqf5EfkSiSYhs6bYsV3EmuRqdaVYKHb4E1bHddXuiUQi7mgbd3rDAgUh",
  "key22": "QbhHCxsD8r1a9e513WJkDnkMkS6Ww1eP87XbSKHL5NHwfkocHZWn7pDPHdXFFGHZ5wGWyYmQVAzLRbcPVP5pHq4",
  "key23": "2FRU1kEn4Ck6kBcE5gAEwhWajbaotCRc8V2MhdogV9v1GYewDwxFgAkgMFbhPdqFbhegR7726QuXUGCftsf473vS",
  "key24": "3QFB4u9SPLFnPmfeSXF2ei7tQRFotiRFFJKBpxuzZY8LcVArDLwz4sT3PXGhVsbqkVZaRiQDKBUfAWLi45WE8h7L",
  "key25": "34x8eTP7b6swoka2EzrATgfqEbCxMaksvSFZG5fVm83scyK7BPybDMe1LaZgoTsN5CgLxaS8BD1pv5vWVon3tie9",
  "key26": "4W6W4ExjLTQw2hWFB5pQEkaUrJPRM1xJqaSFv3CLkeQFJnUBWorjEv5Ac7xdhw9p8VYbnmzxDzqxYnzm15WaekZr",
  "key27": "4V8sUrHatDKY25Vdm7WxgAdcs5FxTL3YAtn4Sy5HZxQcM6C27mkvfRdvZDTzbVpseJeDmddm42CghtjN7isMXFue",
  "key28": "w7iTKbKfvoBzQk66cHdj2GS1vaQq8qoMUStELq5GviKyptDUCvs2F3Ki8PVguvMHbD9m4vc2YKRvUj522bYdbWu",
  "key29": "39cqbtBVJgXBFPezuZkfVDZJdCJH4Vw2dWtdgzmKFnZSVekTQx7BVi4ShDx9X3VXhxuuau7SWMMAETEMmdz1Tmsd",
  "key30": "88J99MPj9MHZH8i9ujvewLMQJcpVYzdwf6i99EXgiXBog3jZeD7utD2imtgzwnjVMy3C6WZ5VU3RSk4rH1uHJCe",
  "key31": "2sghXTmhshki8jxtBLrNc2ke9mP4rtr34wFToLFqs3PrdvWhRxsWVUa7yAcWba6y54ZMGGZYeGDWWQ4FSes5A7hx",
  "key32": "4cZsPNbZ66Hr45dhaa8rsNzVeu1dFypF7LBwRDLxLekG2iPJYrwq9t4HEt5wcqLpuPuRMxdxocfPFU2yGRzqaUPc",
  "key33": "4roNWhDnEtkDrfG8n1U1eFEZ2noHk2kedJPEC5KsY44shrgBc5wYLb3QDtUzpNrnnY1WZ5TSzyhqvJd96Kw4mMLu",
  "key34": "YBV1wFLwyFsuyz7LubDev3Gjn4VuVTCjRdBCRFEcCx2r6DW1oUVQT8p3CyJ7Ts71kyQZXeBrSGVGFRUjABqroRS",
  "key35": "rUppJaSxKYK3jHdvHPsgN8eH6wR4HGNj25s66f8Bp6bTzpdaX3kqaUfk7SJKy81JgBF3Jyj4UP4TZaCYqHqV1Yx",
  "key36": "9tmAXWMs39d33pE7mNRy7JkE4UaB5uWyQf65nvMdrLU2iNjLY4aPQy2he1sJQsXJcqcB7QJkRsHpKzxyYTNCf26",
  "key37": "2XLBgTsnCA2NJicRJFv3Sv2amaXmU6bDs97KqEDUbv31NeCgKKMD5qGKMEGdWB4tWQc6Q62dS7wDJwRbNPcYLLCd",
  "key38": "2FCVPEGfgDgf4Q4EzmE5d14BL5sh5Ej5deXFunUT7ykSFhesdS5TzFFoTAVpzSi53XvSVQfJ3sHSjnDiKeKK8Hrp",
  "key39": "3hrR71dTFNpi3i41MZCtKx7Xa3Gtac6mMPTLckHjpXwTfdfMAV6hoD2xAzHBEKhyx4r31HpHfrpVWhy1wAo6UXoj",
  "key40": "4Y8AU4QfitArrCb13pe4h2ACys4U3ixhm9EXEuaaLTXXoMhzYXd59iqZ2MhgyvXj2J8XLRyGC9xZnkQT93vx47Px",
  "key41": "5ihCUw9n1Y2Nvw9aDro6YEGtLnZbpyaYCy1k467rWhQRJ62zuWnzYVq6YdE3fqSiAX8X9NF3UDEF5nuSeekmbAX6",
  "key42": "24Y3Lp69KDJKxYH9txuZoEW6N4iqDqoK3273YAAs9KeamzeZ3yx9rLf51gzjrMEyWc5igbruPvy6TNbcP5a4HgKq",
  "key43": "2aAAMbFYoTpJssWanXw33Qvipd3T1vfTD2k9vYQW8XPGfa8TxRo84LcdDC48stcztDdpWs66TUbwWzpSVtJrawo9",
  "key44": "3dYX8jyzpHVMfxrkVVrpLb77eNJqxAbc5MCXudPA2FD4mWvEDLHiwZJAkzsA29WZBm1H2rJ3M3mDeesP9DtLewK6",
  "key45": "22LXKcqD1DgVQrm4UZz5orDLTTXbkPNc552ar64mF9GhcrcFDE4QJkkDdNtToLUWUY9QYTZesRP3dmVarJQUYB3g",
  "key46": "wiVkeqiy8J8aUejH8skELuiAMLi5kwaigTYcnSK5A9SVAgEGydkvPJG1FEdasy9rT4jdSDKkEHYJis5udeoLxY1",
  "key47": "5Jt5HDeQ1LuPjgLBazvt4wZ9jbXH9pJsQAZ72Fkq9NjEPAXnvzivoGHhKFTPtqA6n9e23zzPoKfWiVu5uYuwVNGK",
  "key48": "4vKk8oYEyFWAG8DgG3T7EYwv4UfjYpd4j9Bz9ATnmtb8zqXnEGvPLvdwcNwDKJXff11jYnLnugzsFJ87V1AiW2Qx",
  "key49": "4eFXueeZXnhpC7nSxaKYfWgwBWEVrJYGPTMN4e5W53ptjMroRTQSjAv5QHmw3QvPCXuK9FSBA9w6xb3v5bz7DMeG"
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
