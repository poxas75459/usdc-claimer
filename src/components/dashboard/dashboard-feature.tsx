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
    "5DgW4f7HMBzPgPviyYoAFjqPYEGoz6LSqDBzTPbNBRaawATBQ1AWcfA8utKfKJ3qD6Uj3CHMCMwAD96raberkBzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTUNt9kLEgg8utSKRt6ToMbMtus6iMu6XGn81hGtcrs2fY53Uzb2GPR5S69dyALMnwu6DDqXSqSmDABwxVomA6p",
  "key1": "2FTaPhftcdJ6jkJVWo2FJ4Zg1wkesHHjTgNZSJdVb9VHrv7NvmMhyVNbyf866BmwsxbXxyfKuYQthF6X3WEP1wrD",
  "key2": "4Q4EfFf8919G46HH5pnvcmu38AD571bAsTyeXFGEC9q1BP2gxKD9GfWGfgNjTUyravgUHLtvuBcjMUV2egMjFEsJ",
  "key3": "3724PcEyqqnkDJrr8ru9pPVndM7G1jd6BFsqHMxZAiW2aSyViM1bdmSEW3zx2C1h1s3PbVuYo9eCbfPqTndBUQYi",
  "key4": "5nBauwiJj5ML9LGLeCaXEz5zTwBu75jTAtZ8ZnW4SyQM9NWzjMx92fMnx74i3TuP1aAfKEiNSWSXYaWRKPLP5nqh",
  "key5": "1FLKmaHcCyCVfYNWjfYc8jgAN32QvfnbL7Zvcm6DGCSuBSWLwfRPSyHo7UtimpTKfo8G81F6Ni7p2mgfSaSo6Y9",
  "key6": "3BmRX1DJUkWdYpyh9yaFN1u73zNGQbWet3VPBy5xM6f6kCN6R12xgdjBBGt3Rv5LX8s2rZhcp6vWHaiEzJATtkTY",
  "key7": "SrbM6xcTULvH98btHbzweBeX8EWo6m53eyEyxgVVCPVNJgZJVuUjZozmsjb31ZWfENC5K7KkQX8sUv2ggiETYZq",
  "key8": "3X7LvAcsqpE3bvsbVnmbczhpmvx5UiDZEGaxygwnebi5u4bdUEUXzXCttjSLu1aoZm3tH7UDSoJv1e4N2Lqsmies",
  "key9": "JwKCA2yY45YUoV36Lyem8RJbkxpfhuwBfFtsBsV6UtEnF5j2gTfbueh2i4W4ZXnsS5PsWAstRpDb1p2SQzYR3jK",
  "key10": "3DvABSusMbuUeQ72jz94dDv3voAXDNPfvVKRjJJiBzpGLVxSLqAu3TZkXz1nREqjVqRz8rPXNJkc2vzsoSzXUSso",
  "key11": "WE3Ykzxh7YcPhUAdC5zUGQBZijN9hF8tsRYr9ETkJpnQE2uA9K4pbrDMPxxX1iJW3dxQ8DoX3TM7rSFFSFcco3s",
  "key12": "5qKu8p2QJGgiRjSKzdZcZZFLXopf5bkXUDkEkuDPv3Fdgc7XNsgeWYniEGQjMdQJgDRjk2Fz43XA9jvEYAAMrwzx",
  "key13": "5AdApUXjM6J1E1VPia15TTqD52BHz2AJYebkP8M7ue356VFsdSt3ysbJumNqpUHDsbBBo4UbUwhPYBPsdAfbbNxv",
  "key14": "32xmGnmejv8q74kKCN2CspKjg2TgBrLzWQUGSeci2YVMnS4P5pu8KpmG9bdbCasia7fcYdLRGUFKKUSjbVzMQbRn",
  "key15": "4JFJJmmrfGRpTBpU8PkNb75UyprPU2PfycGzH82F9uq5Mz4Rj6WV16mYiDNYqTh8HrH26mzSMviMWHRWmvnZwg8F",
  "key16": "3mqgvRFNaWFSDHCF3qmHAreUYRuEKUmAHH4BsbhZYpwAxkuKtY1jeVx9WQb76SBYmdPLxWyZVYXK4JNbPQEQsinL",
  "key17": "4S1oYjz4RBnDHXyvqHD3KBXVHpGUEMSE4zGKm9CSpKmVGCfVYK8cNNhxiyKrfB6LwGtWPsmWJQWLZ3pMWewoUVzz",
  "key18": "3yVcCxB9ZpoPmczVHA3c22xv4JzrAVXvcwNkajtNkviUzDtvWHtshpiGZCgeWBJ6rzELX4rUxkCyziAtLN8d9iAN",
  "key19": "3RqJSb4Fiwfn9fmJ7s51ocsdNNr2bKSNKmXULemocpUMnV9xvTyAQhM77GZdCYtJ3VvWoaM18pNLq69FcqgSfNCg",
  "key20": "SnXoGJFuYirTaY2j1vCfKxSouA7hFce18sHf1LStAS6xQyPu7ahmEFrx6BQiuBJWmKAgsFeby2AQr322YPhujEF",
  "key21": "5xfgg9E7waQHFGnTUh2jJtR6MKihLvaHx3S5sPay6mr38QyhNSLwJQcvbcxFoeMiBpDRxPbAKT1AoMQPGDbNeyNW",
  "key22": "4AwxH4NVCAr6XXLZsRvZHKrFAeoquuFnRVQSbbJ3noqgxfAqa3ebAKRnRvmNLvwtTz1edNt1jv6oZjdPtPDZcvdY",
  "key23": "5yPWAtX32nhBLXbXJrqccSiPFqnB6JgWZoLXnxf5ouTeyonBMc4GJGtJ4Nc4PAjYuctN7iPeEEwYBBDoPVauRTHU",
  "key24": "39o4dPucQncPaKMCjZA2kyyJqGd7vuxPxRG1oJVr3qkvZjqB5mhGvtmZyEXQfP7cZcjqf6jqgw8dgwwVZrEdGjHV",
  "key25": "3Mcw1mZ297ctsrAs4a5CraDqKwoxGom2hNbihTJBom2KPtmU5HQzcDzzHw6fSvtp7Ruo4m1qabTJi96nhHuS4sFZ",
  "key26": "4UhoTDfoimVfyGtxdiwJkDmqtFyjDRUekzxGK1AQgeNQDG9Eky32Y66YYhNUNgBJAcmBRoLKWEhUYrxAzUq3vpaq",
  "key27": "AsoFo83G3fccNgCknS8FToFKKrxeKYmerMM9PUaPwnaZ6URbXvveuBXgc39Ln1aAZEosZpJvQQA4T2QeV8VZmo2",
  "key28": "2MwCw4PcikxXacwqvfJ5nQ3mwkpnHGroscaYKhDBwrW4p2sUKWADjgnySUHwfbhSRfVAynMs3Nh9FzW5XNykSSy3",
  "key29": "5NWu9Zngo8Bpkrr6HCXEsusQrp9NfT7KvsG5bkuHSon9go5CKyRVUm2zvqpZouxbAQGM4WozbKMShKfDfC21PDUb",
  "key30": "V3AakFLU1mSiBsedzzWtpfZhZJafmsuHgbi1b7pQ4LURYvLHqzeeYsWsPAz1rnwrB8nXaSsDn2XmPWrohbs1NJi"
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
