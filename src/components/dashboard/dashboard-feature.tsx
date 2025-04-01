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
    "3jK1gC9QD9Q9v8W1R3mynwHg8NShrFpQszk95Z6PhsAijbeW7B87iW1fgYL48UZVSCDeyUfvU3GmMhwz9fSofN8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyoaaPcLaEknXZA91LN17FhJEnoZBvRdqhLPzrUb7SysGAqSiAqh1LfhwaPEZRPhADL2Lus8NTXP98evCQ8EgZ8",
  "key1": "BH5BMvWN7Mywyiyw9k1cKU5bfiWShwPdK6KEnjMB39PzTscuJWYH8QqaFurC25Uo1zAT7ydR4tmyPBvNAXMgbzZ",
  "key2": "5zBex9vEtGPY3ASc2VEQDsWPnCKPpTRUmCJGfHWA2gfSBfrvsUbFa4gEmPPnCdsQnVobH6uCceajUkS6siv8iXq2",
  "key3": "3XFVF3wgDRjSGH7Bvo5Tgpnwqmz8mc8swMApNEob5redhPgQ3jbYVB4FadJuasQ5Sg9U7WTHKS74fmSF9SQqR44r",
  "key4": "4YnCQCvSaf6CajjuSyHx5mbCqaVgwM29jK44VD3diVYVJGvqVL74Uki5bH8zr3pEkJM8FsPy3nHGWZz272mFgwZh",
  "key5": "42A96bSFZ2qvhcaEYRep83gCEUWqDDr7GZuQFX3koeBR6zaTbxWDTEHZnAX7VUCeNVchxyoBNdmHKH5FmikcwV3D",
  "key6": "4H9B8ADQLiLRwUtpnkynBfXr9p2suTLxBQhi7zpEbCMwhghzfSm4rR5Q9gnmJCCNrw16K6ZbebCTbu9vjg87mZoS",
  "key7": "4JxWvTE9jptuKiBv5848MfLKorN5C3XMR6DN2gU7gUuFTJzpnLt2Bno87zUg95EFsVBS1KdDGyrRrWrYKM339pMs",
  "key8": "csxcPbGRzteuBq8jLWeuziJ771V1brsMZokvSZ8T3v9Tb6STmbirzjV9PQTy3rK57oJzkHp2Ee8DPGRdNJaN8xb",
  "key9": "5oCeM7r9Yk9mZSXpCeShwNFFN24DJ3pbnLxNwdYAEXt7F7vUQbY7CY7Zynnakj2cvEkAYsyNgPSr5yRKrn8g9JAr",
  "key10": "2XCrpcsbEbn1byFqQM1YZyYVmpESvqXkeKaPaggRXpNqJScJTMsud1osBs4bBNUC2H4zPST1tMVKgK9NVB62VkCE",
  "key11": "2gLD3KH5AfS3NTqMpeSsfBuh9DSZ8x7JZWRbUXsrraU3nstk73ZvWosaCFrMkgsSHGpn7pmMRXEv5VhccsQStTs4",
  "key12": "6DbtL6kk1KBUDqpXNoyckp29SLTJEj61L8YJJ935Cs2SBPCSVRRUUNCPppNNXMRsYrtNTxXU4RTWqvpeNkbt9jU",
  "key13": "tb8dVNQeTYR6jwVfvz7j9SpKGGupBjmTg3ZPCtJP3pwqjcZweFbLUG14TFiMS75PVmUwzhb1ZgusRmoYsnNRcFd",
  "key14": "4NvzTSryrq1sT9oB2J6sZFomPFCPDUehFUJyXmectuFuW6qPLDZYpZwJ8ys4FhVmdc4PpatvFPpfauenNaq9Q3tm",
  "key15": "2s8LGAx5CxwTKRWqRyu1SNmMHc3DuRGiKepDLc5Z8L5F5UQtTSLbrPzGCoRS6RHwazQRJY45epp63rvXLHfQ6czS",
  "key16": "3Yy2nLyfFQ2V3CouLNuUXRZDrN6ZT6fpizUK9MjDz6m29Sq5713Woof9tcHMumg3qxPcKWLsLXo4P8pvMSDoqfY9",
  "key17": "HpN3goRs97PPhQtJW2kifLkrRxtEFk8xfiaCUfxyoGi1PZUDtzSPDRFV3phEDM2vA1qSun5YvamDe3jxMaM59ad",
  "key18": "4gELswRdRJsFuGzdHMLFStPr5A4DM8c1qmzyoHRAaSXFsCKA5Vf9cYYHxRDHwe7LjBquto2JKcY8qM6JdoYpDKQ9",
  "key19": "2r8qLJ69cN3orwn5xzXUNbZHoPxZ4R1SaeiZ3BtJAt7wVRkYTAmcQ7134Soza3tz4vTYDEqeiH8qmoEzXqJnL9QR",
  "key20": "4AbGAJEHycUQNHG7CJCQEPyCr294rRXiLMn4MmvQ3rFmeWxvP8Ghp3ba4tCzyPAcQEYz9Y3jEJ4JFp1oUjFCRXjq",
  "key21": "41L4989h5fVKMt5KpRbRgvsvKKxpy6RcnwGtjad2788EFEeLTcehD6hjL6jQjwzpHJM7F3vP7xZdVsnxJuuxs8yS",
  "key22": "55B7yVvZhw9bjBLJJmbhJWX6ZrELG4tXXP9SzJiWZCY1XZirezaDzRX78xPU38rRh4VKYKqMAbHw3GzF6Vf8CzHw",
  "key23": "4eS8X6XZpesmF7SbxsAi2sGABpCG2zNQ4rvrknbUSQ9MfQ8WXMyPSH1MWXgJVG3s28qjcFTpacxRWP18PtFaCW7v",
  "key24": "v6WPu9vuc3YcHYTwEKqBbXvTpawSscj7QhxgMB3QJBnUYT9iLLP2sapCJnhv1Z7H85L7aApaFacpJakVhnMQTte",
  "key25": "4Qom8LWK5R6zcEZSLEu1fAmBFr2KuJ62NvoZ5a2C1AWvmL2RPiQfbUfDxyRiM1dC7FsA9NvacrTKUKtZCx7NCoo7",
  "key26": "iqnrUqSGZgKyT3iuDHCnz7m1P4NwxsCq8iVLD52HSVAdtTosZxJT1Pz4ryaH7ni1ZEgxsV9hBwVWNV4yCc5HAZL",
  "key27": "459xQvYojrhVvgwNGdJt154SMove2LmpUK6AJA5fWHcTTqsbWAV2ugpXmwjpQWdixsUurG8FxZXnJJYPa7GwVqoe",
  "key28": "sMMqMtdw3GyCypo2CSoEJ7Dwq8ADuQdcQfzLrU5aapCVXGsUPmcVd565hXfJtweVXSWg3c3Zo6pYN4uooHHYP5W",
  "key29": "3RgbUnjUNBfLxB7J4qxXyky8u6oq3vXbm53fVabADBDecrZH7ckQWJkwMKo4GJnCsdAzMWxgW1hAUzr1xzDUTeEV"
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
