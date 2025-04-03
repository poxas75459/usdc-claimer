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
    "3fQ2bL4QWSF7zZi3Hb3ewSpi7Xvzv877v9j3oLGmJUeV1H5foagF5Jgdn3pFYYZ786q9kaJg2EFK6HZ9JpEi9urm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48zvkPMzXdeztqfSR73hpiYgEZWY7F3RSZZqH6K8ENoQpNUGoK739k5VSacTaSX6EencddBeyTpR7cnTXqo5Z5pi",
  "key1": "LR7kTSRJaXoihb9wfXz6bKtjRXk9cuQDTeVWvGqGKPi1DVXcdhB3FUpBfYP1ZZsUFaRZKpnvVvLnhC4vnK9SdBk",
  "key2": "56b8yhxx3yYs1p1bqtjY7TMkFyi9nRRbCdYKto8MqL7HoZFAmZGPv1iVhuqiCEZ2uyvBWM4VqQE1S5b8HdSMQcPL",
  "key3": "3FeERXjGAUyGVAHsrErsPYZbmPUUvQU4ZCxhF6PNxRYJL8JLw2UVscggpGiGm2Pe8w8wUE9nL2gpR2LSE1ypPRRX",
  "key4": "3H3HDpduueXpwmECRaLHdxSJbDdt9P9pprVVs7BB6EwXNuusCV4rMSawbVzZB1b9aiCLCMAZ2u1dXTdSQSQfbtBn",
  "key5": "3eDwnxcC2BvHvKqSjfSi21vFJE8XpiNxG3bpWhu2EzueUxhJvxtmenkdv4hdtuuGkKRX2gnUfJbkovhffcc3oUFv",
  "key6": "5LnuWGg6nde3n7sn5GEKCn7t7aTX6B6wjW7Grea8SBMNiB7anpTt3oJ3b13BhkwzCTzfbbhfiHcqbGTiuy7DLCTe",
  "key7": "5Mw5bfqSU1tQVjQJqV8nLqUzNFdsuRzsMzx1H76eEwLBZUb5psJ6uHHt7UJYvKFSXCswKozVjgfsYkaxG6zWTb5h",
  "key8": "4vB16ZoQpgS6NYEKiGaVw3SPAKoXgPoNAzNWBZuw5B8VnTQRNprqXEHgvVPVz8G6ymSi6eTzNhM9SYAUhwUFPWQk",
  "key9": "3kirmujaPoV5xRaecosokb4L6FehVx5kSzay6fVhfksaec2B54LaZW3vvCw9QjcVMSwubrbUMqXyCqM7r7CpQM4L",
  "key10": "5SBPfHpwh3RUKbxUNfyf8DGDdwgQa3Z6yaBqZ67VcFquQBYE1N3hJvVBWBd2jKjZMjLXos8b8CyWKSHLTkNsHDbd",
  "key11": "3rfXdPfw7LrJt5DMUz5HecfNSQ6f9V2Wrb1ZNrCpVJ2YK5x9WmQMcxhihpDW87nFDKx5jXNR8V1dgEMJoUq2yakF",
  "key12": "khFe3tMFDyw9LvyFgC4WsB9VpktGXc8tdRTCrLna4QcXnQKaEfAA3CBwdrYoL2rPSKe4aD2cvivTnRpfmvJEs9A",
  "key13": "5AErtdg26cb7NiiZVhnyrQkEPGwBTaEd5WZ3MHpnS1rsQiPapifiTVT8iE8Vu2v62ytaCjQ2R9iaxGAtbABjrhKG",
  "key14": "2Xg6XzUEePKEj2HCoRdNfN28zCJzGsX7SpoW7DmDebgA1H5eQo2dEF3QKafLwpvxi1sXg99He4zjEU4Ro5PJdjUr",
  "key15": "4wx6xqLePZuGNrhR2HsG1HZfRnZwdwwtjYNLJVfYbRxU2CZDEDhWztTnFdHYcirfeYViyCUsDKyXNF3vSV5RFtmq",
  "key16": "37QZoBwg4cdE99ohyHPEZ4YzAiqDfBGvZqTLxH4EwYrzXJ1FTtnsCgK2UR6CWixzeD7MZcRdP1VhfcsEHMDHdjPe",
  "key17": "DDce5gK3nbHzQqZS7AW14GxjXH63nprbr6FDZCD5LiJ9JS52jpzTHep9cg6gPoBYG8wSKbXxA7KVCPKX22ZZghd",
  "key18": "df77H6akoywp3SMEygvyyEee8GeG8wjYecd1yKQFEe7huMwiqPGBpXVphRRAMzrv3kgmPWmVo1F762HTmXs2Hj9",
  "key19": "3aVTJcvFQ49GHNH8ptPaDx7duJMyCY9kdzAFxA7PaQ9GDFxDjWSioghVNmfqmRKaVQzLmtzgJc3knJhY7qz6xvoy",
  "key20": "3Gn3YkPQSju6kHvFnfvG1c1iW1YdKVBtAaA3qWfmpCM59gDLEPKFuHgqcmHZM4ozSToaJft7MmRbbKB8SLuhwB1y",
  "key21": "5wmfvzTZg2U2MDK8Ni4EpRnivVngj7DaiAUcYy6nvvyJHWcUz4HknQrPC4vm1w78exnNE4BBQL1bA6msDZofWAvJ",
  "key22": "4dBA83cJoTa1inDFn8RLBZmsUNKQF5aGuRcJo3xzKiSah89HfbChPLsfox9UyaSSQwHydqQpmAaMuKM3N5emJkd6",
  "key23": "ZoZ7vrCXyrtRMMr8i2XcVwkbWYhbLwRcU9UReDyRnqpYDYuqYm1gUgTssUC6fFhDi9uvwp6LL9DKptX6YuaK7yG",
  "key24": "3yEXTSErghWXqgbMaFms7vqpDJcvCrL7gPhmNArECXWoDjUDT6YC7VU3QtxCh8UjfsvX57reu3gj8uacwkHz7VMg",
  "key25": "4AkjSPsxzgJE39w6iQ5Zggomz3xb9GY5oiQURNvrfjmURjVJgMFXhmhUr3kdoYUC4zKQGonhyVZWqSaPZcFd91x7",
  "key26": "5AXqmPzu2s1cG94HVvXD916crYAGiMxrN51NySPmyMSuHyGXw7Ew4PFAt7udwAHKDJjuzkhN1RfBLPSWsCmshE4p",
  "key27": "3vVgKzMgYTmR76iwZEBgCsXqMBjYoK3hiMv1o2qPHTQr6a9mLrARN8i4xUwm7LnoeCf2EaJtAEdZvLDJbsx6veeP",
  "key28": "2YtZivD624nfcyYD9CeJcBFyZL7xxaqXaWuVRrBKTLbV2uBDoWYiJtAKnV3wbHAqfV1F8kcJQ9j9vSU5qTw2pmtw",
  "key29": "2q1kHee6mTq5KbH2KygQHFDWCcWJxQdoAGyRS6b3c2WzXeZZyyU9TbH1sFmkergFJiv8X9d3ZjK2bYz2bCPp5hjN",
  "key30": "4fYACmfvfBRkDEGwFWxpCDKCfvWHh2uLKJThMN9xonD6RyKkDBPnQevSYC6CjhuCbjDtWounPECfiYmspN6b13w8",
  "key31": "5fe66MwL5cwf1XpwMBEwXyKTXQbHSzcgYrDKSM5J5zDAH3X9dvsxWyW9FQAcEcVTqyHvGjqigbBz5zMX2sn2Rq1Q",
  "key32": "sLFDcKRz1QUsfVDUYNV2m1RrtcKX26CwGRXLMu4EQYENuobzSDi34Yy5hL1Pq3qQZM9CTMPogWLapjAVDgwED1A",
  "key33": "29xQEY1Y7cw1fzwhUXa4fzYbzyzncgBSuT1APFkFpwxhYuyeBkmL89LJM1Cjt9hDgwvDJYEwYuHu8toDVq1Vo834",
  "key34": "7wYof2oxreFbaQibkQJPgfBEPN9CnJZZsTPnrKupCP9o46aF4hHoH33Qc13yqV8iFRzYzzamf9YaTRgcVc4pPL9",
  "key35": "dUUPHt5nhwVeyyWfRHktPzHb8mfL2bSyeA91aLy1CiCzyUbiWP4Mx9BjfVo21ZLPvKAhHYdrqDBfcfW6Lb5WW1S",
  "key36": "36xA7NK43mCtycAi66fUrWb9onwihCNBkeEWyvk4XyCYG3o4bwPNkfU9CBTMwiR3KdAcXP81t5YGXpSLAugygdjH",
  "key37": "2SiScYzmop8oFQpFjPnNB7wzzJPJ7maSJY47ReJPt5cGK12MuLLn1JMViwHL6ZhJvM9pDFMJvEFi1SWpDJ2MMwf3",
  "key38": "3iwPyaHyP3CPaayafkQSrURugMMDaiAaLV4tU8ag5AdGUrgGuGuuck1qc7zN4KR1j3ZRkoJbaQC2EE6RKpbdycER",
  "key39": "3Ey5CvBQacJy9bUNhjHuZe7kWtSGJgxmEzXUfJfyZQdiYDQJrspNURo7woUnFq5PnRzktu9w5vZS1Lnrk9eZUwwC",
  "key40": "4pkFajX6Uf1BrdzqG12BQ1pDRRkEpsvK8ggkNkfMce234Vpuo6TYWQUumUB8iHjDGXXurQq3XaFs4WfzWrC9gWfp"
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
