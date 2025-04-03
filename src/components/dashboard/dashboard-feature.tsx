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
    "sVVgMKb6Sfoo3p8PbDzvB1v8mL2R4TotGYpKtPKYGyUQHzkZ8uaGsSHufHSxJWYSmQ5A6YXPh6Wt46DeF6ftdoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PYywhvi2G5PYFkAmtH2Db6UjtbAZdzHTUJfScCXREevx296AU9JvFA59dgRHSbXfzLZDzd5cZNBtKaexateWWLQ",
  "key1": "3rZECMJnJ6SRzfkgveWa5dyqE7j9FeUvjvTi55SQtZJXSu27Y1gVaXy8XKuiTZ6psNL93Gw3gYeFukWsF52T5Kv9",
  "key2": "3QCUWpG6twn5SunvAjA2tcNzKgpQP9DTAP3nrh3ESrU2g2TVj8wQNVZ4AgTrQnxLXV6C85NjZCBqu1vJLKkyoAW3",
  "key3": "31nAkm5A7hkPKq7YUBMKRDZJDzHeLfNbVnzb3P6zcQVYjF8o9w6eYefuyfDfstLEenYVHxWS81svGiN4bKrDKtbS",
  "key4": "3ZKLMzMozmBsT9mGXRDK1rdZmXPFA1mLswhJxTMCb5WuhD7nyZw8Bvmqg2vicxEbQjaHHwjQ4XdvQQ4pBiVrHUy",
  "key5": "2GCxXQ8RFhc4KWNGD4Vw1WJSL1L2ST2jjpc1VH8qCTi4kX7Zz4K6ygEL1kSd663WoPD9p3G439tr6Z9We4FG5TFV",
  "key6": "42EDuXPWnDddAj7hKfMk59dT3NKVYozyDVtDLkefjHT1gcSQzdtK9ymuyyaBVhz1ivZSrRjh5bfGGdx6pwUQoczu",
  "key7": "5tHVZfymspvDfkXaRMBKJcXPiWBFTbicEvhbF4SeDez2rcLrPyCpKJeXya4TkvFhJkyNWafSihDVaKPKAUL9y2xE",
  "key8": "3xy3gVwyF2ThdHzyg4f5ovLe9C79UjwrZdFDEKi22QmwkpX8KeqwwaKM6MMcwxGudtegR5mLobe5iGurZsKNv979",
  "key9": "44LuTNmuUcVuTvodBvt1NoVxg6BrgSZ3aqZ6ysvZctGfax6AvH2C4ptdikFCBBWjZRMphBnun6b1rfTyJf6C6Ypx",
  "key10": "CvMnVgJkwSTmcCqQRrmsYHsbrsUQtnZrZYDcVH6t7xNrap72prP2T4nv2zx2xd1EHvid3fi4Wa8jsw7gxVKFgWz",
  "key11": "stMRMtbGXoFT62mXdJrNDgzZs1BpmK4AB1sqFxur8wV4JhUmJcQwKr39XcvRuiAhTAxjiUSjk1tS9zwsFkAvNW7",
  "key12": "jfjXbjP5msNcJwZurugHF1KK8uDMX4hKYpKJitEZEvdQirmLcdmmJ3dUtk1zSFLhpZJcfgz1zwHhFtjPVhTSRDX",
  "key13": "8VZ1dLTQPvTc7j26h2qkNi6p4gcBwaEhzGrddBNZ8BwxUhtBWKNPXXbVx14adJuV6pFrVgab2TAY7GtEkpHphc9",
  "key14": "5TS12qcfVyN2uoSaAWAC7dQ2MCHRyYTa8BocwdnHDjMb52uxAaxqSNcTHVRHm7o8uJg49TXBun6YjuCwvTc4AwPD",
  "key15": "4BNAnezEmtcNrQkb4nfn8Asu3ad5gaobS5w4BzAjTjXGYduBHZXbjoR1BbcuqXkVT4JmDG1avqUprRsnjtRmeZG5",
  "key16": "2BZmtiyp2WbNvkWFNWmUg5dxUDdqmPnsm3jG27zSbywBBEHrD8B6jvpmgbj6CfyXtcUGgrnGQPneBLhgFP7g5BVR",
  "key17": "pV5TLHjnitzAw8aGVnP8V8ipWPS6xg6pjtcysJiQVu6jebUhBf6L8ho9MAMf3Agx7ERwsNQoTP649q8u56B4uwD",
  "key18": "5PSpdH8Jyq1jee2uAo6rtc2kpE58i4sNyfMYyeLAPtCsWS698euAVJ29rXNf5eDQ4X1DmwDzwh46SoBDejfoNw6F",
  "key19": "5UQB1oPhBco3UNmdbRhaBajhSa7JT6NMkdyLuCNqCLG8YL5e3Sf1BLLxg88XWQoirm5nXWSv1Zaz5euQdTjNNF4F",
  "key20": "4i7ZcjNAtpgg21seNkTfeJYDtaoPtT1TV9GgYXJT1sZ6ZnhHhhbn2zzDMJXqMZRJ5eK3t5akmfVuV14g887FMhhi",
  "key21": "5hnfdiQADDcQQB9LJ37h8bgGxyYMPB3tK9y1UiyE9ENGYzCsmwGeSk46xvmLvsJKSiXWV36PyJw95LC6ewfcmdF4",
  "key22": "DfcEdsP2jQmjVzXtCE5izaNSTnCds4CoPmoeBebZ2SZ1byJT8rL3TBqvc2PkuW3k4HtL223Xax9NpynzPuyyacd",
  "key23": "5Gije6tLhrwkzabAPizFaTpGoQA9FdXtMekDA9uoc8B6BS9J1fnmSJa9LzJh66HSqC4zNrn2Do4aeSEAAfS5MTpq",
  "key24": "53pBjHuXCM9vUpF3jguLv6hEWeSKNJgeFDSxenCbQXZsR5LgAjLSSRLzgYGStyswGGqdRNiWdUxUzvciZmrGwNS7",
  "key25": "3B4N47bJq1YxFpGAkencZ7naKpAasEzRvCRjSfZNzdxFWMo3yF24cgTbebhiTMzncZuBdVmthQ8SMW49FMmusCC7",
  "key26": "4frCjmUTwNrgwpjFy4dtBE8o8YHZoEzt9fw79iHuufQiPpHkPCkC5G3wSAKzxLiahJa7bN7die53Jr8a8ycgNNEM",
  "key27": "iyfRRFqc6sr4wiCGsrEfHNCvQDeKGBZf7PDRhoAwpRhMW2UzTieSBxz6gDfbCunijQFK8Txccc8rN5HCrysbtGL",
  "key28": "631yYS7vuD9ovpJ7mLXxf4u5ZYvFUdugS5Ra6W9U9cE3mHK4WPJ4MMFrMukBsyUtCdaaJovbJm8tSpsq5gmBubda",
  "key29": "5qBZpEfzK6SydeQK79u8ADeRLDuBzw98C7SgTkSE2faq4ZQi4xAS61LotFGmNyV3Mc4s9JWgCLEvsTTmWdrZ25EF",
  "key30": "5SL7hXVXnbJms7tTENTDLoVbHoQEc3zBAZxYCGmQr62daN9Ybuf5KMqbD9p2NF6T9QdtsVoTdnubSRRrrtAGAbpU",
  "key31": "2V4xRXB1xugVd3MQD2BkuF7yeNjU99zfcoMU6KBsqNLovFWRdpPwenKjz3qr6PXr23aAHa3inUR7YXn4KgqfPx8G",
  "key32": "5J9K62DUpCU8ZAksEpVAH9tZ19dojZonjAPhxDXRayi4qqQzospAvj2UsLffjmr6SZU2GUmVSZ8Q2VsZUAyACVaX",
  "key33": "5He4y5cqtYJJgtSXRqHvSM7gnbBaPV6JbXLewAPx4zDaipVmhZrDnnfZY9q4uf8iKDiRNhL6o1mtVtYEjtpyEzbV",
  "key34": "4mmeobbXWi96V2bmxa65mpi4GckVJNzRmyAUahuAKD7QnuESV93jdVju5mUxkTzv3ETxZ2TxEK5LQVtv2qA77C7y",
  "key35": "3DJB99Sjw5hNPrjs2B6DQPGxpch6n4AEFNXadKrxGJT4aVEDNqSL9SQPB1iYCncJNXhJcsHzVJZdwAMkZHGdqVn9",
  "key36": "63S8ngdwyWWuTfgLyZeiLsenbjbTSZnGCEiHSb4LY1j87qQ5nJo9sTdMeh25bvkH4NmiB11disBSAWbADtsoU71r",
  "key37": "3kVEpwHF22t4YvrAUm8GCqpVdHcd5yyyDWhWAJ4guyirGYWFE54fM1vNdckmUgb1jfh9XCU8sk3LNSUyA8v9J8CR",
  "key38": "33yUfkheKQ7tELrSSeozoxCZZ37fxk2XpPUWqWdY3YF4HbXNgbxS8SqnAeiNC1QoueTKLeK4NFNYdH6ySxtzKjgj",
  "key39": "BWDzcqnLUYiZ6DMJ4VVZ7H5QVHZNyCraof6pvwsVRndyGKR7QpQNebcMZ2xw9rLAnx8CFdhgnfnELe1YHpvwBq1",
  "key40": "2QgyFrzWAwmb14fz1vou3nyShYCNFMevP9EwzbyRtvJGSnCMpgeKBWyacLACVMpTZZFWvJzT4fV6N6TnqwbzkUTN",
  "key41": "2ZuHbtA22kg9S8STjMtFcrWA2X2dNzmL2NJqQEivX8ENWRPighHkJQBbKNneiKzyhZ6bnxh9hHZaquMdLavw1vNH",
  "key42": "4HgVL45rY68QQHoA33AHBkMSZsQc4VLJcPobziR1Pe4RVUZZuG6TDRpbQatrk6DnCDD3SLC1b92kEgPZL5eP18ME"
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
