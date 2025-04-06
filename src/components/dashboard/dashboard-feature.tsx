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
    "24a4BnymX8rt1y5bvWghj5C6HePNj5niQuiYKyqoEQfr9BToJFc5byZEuisjtWJsrYqDaMd6ybLkjPvTj2VVBLh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pSbi5T9xcT38WXj88Vm1bqmC23QQ4dZpGDzXZaAysqpXCqv978z39tEugQuNmUVPgcihKH8diuuUnWycC89VPTG",
  "key1": "5EGKfLELe7xxAkX3Acwh4WZVvxV54TXUXX8eaBJfs2Z7yrj6Gj26ACAWD74A6J1uujtgZNvoBHMUt5FQDVmtg88U",
  "key2": "3xLKPswqSKsekbfm8ec6AKbY93E1Cri8cpuZ5omJbeXdovh6QzzRkCCCx7gmkvRrUW3FwdkqSWg6dXoDXb73HBq2",
  "key3": "3GkEzF2HEDYY4iPGT4g1nXicJF7KTQBvmS9MZXwo1PvYvWCii6zwohfxW9RrKRNdJvLqunWmPPVbJM48KnUVRxGm",
  "key4": "4sR7H4QDfP6YwRjLyWDhMdCzk5YBR5UE4FF1QMFvDtxa21XtXfyEUSsS93wxJ2W9FPLUP9CDu6PYXXEbLLVXRiyb",
  "key5": "21JXsxgSwGotQFTJEQ2BN2u9SUCyFbL4wyTQzxtKf8e12SyGrLGvrVys9jyrVJnGhaREgSFumjLEQ4JZzwtesuKV",
  "key6": "3tfNjyzzLamAbR5Q2FHKykBgeKxky7ggWX51YEQgHwWAJaoSyVpdytSCcEKgvMef9ckv1UPvLSqh5Hi8Ri3C22DG",
  "key7": "496CTV6nLF1k2ooA6pu3asn38UGsUvuf1fa7h3WrDpMJbuwZAm9Xx6zYSoxWTmv8nut6srux267JM6vn2Nf6qYcA",
  "key8": "3z3PP7FZHFkHaADLeKKARmCrQ6KbNXZx7TZmt4uT9b9dMP4iQChvMJLfrEd9L35by5HWmN1EG39a3ydAfybDDSfJ",
  "key9": "382ihTk7tRUHcBHdDMoFsbKc9qgm2fqiGqtpoetTNHizn5hTTgquwZchMwZthposWyDryNMTgHAEFKaYrgL4UnGe",
  "key10": "3Lz43i5LFdsWc7iMjwXEojjDNJbDp4iGG4YSPHuCKZZZcPG7vYnv5PUGFDyV81h5TSvmqtsxHD3qEnQrsfVi5BWu",
  "key11": "4o5AteNZaiSmBbu9puNPETDVEaRwVWfC2yitizX8wTZHVev1iUoAxeEZFcMckmYQTcS15FNVrXkEZv1PrvjTLeUa",
  "key12": "3sS89REuuKenGqaAkDw5oKgjCkTMNo9pbgEBRYFEpufAitsPwWhpU5GHFkoU81b991zpMX61Xd5XhMcJfdYB7TTH",
  "key13": "XWKvc75sij84msn3bLWnpdHPB5qVFgmXnBbX6CniNzJY2yayLN1RZUiX8J2GFohDEh87zkwdxCKTW1vdkCwjxBG",
  "key14": "3taeU5wqrmuba8AuCzwJ1SN2Cq3euT4DXWA9VSPJAyyuWNzXg2GCqL6kBFjcvf5VACUTK1jrewm45q2aemomGdSC",
  "key15": "2kVKzDyBThMn75e9gATvjifRb7LW6KtZdXeGahpuXgVkrCucbU6ZHKceJXtYe5VDEE5u56YKq2ZeXpewxAkfNBaC",
  "key16": "5hMDzq8QxLubg9TtiWhvh8CJ4YazukQJwyNHzbiDrg6zsnU59QAA2RF6ve9pwUqPLfLTnwuBrWEW7KbaapXJZzBD",
  "key17": "4MXZ9f4YQTNvPdeorysMdKx4R7MMkNQeuht8vcAYHMF9RMSAmj6qitizcgfeWAcxjNimWpwd8pzEAkHTFyAMhUxx",
  "key18": "24qVpFcjBX1MZECHXS7NMJjSqGkuXSrseqXcuwuGzCZ849HMHejp82VT6vYhxRLB5FtJNwoMysiZHwk1XsK3MBfE",
  "key19": "3HRFmrLnwyqqPEXUYcbjus5Z3UpP5uPUEFUXGpDGZTG1vojPEy5dAmAAN9aAtqqiPCGR33qRkrE1LUXduyF74W4X",
  "key20": "5RuFQJ1VS2J9RLot4BqNMn5KTnCLpvqTYsXPpbqf6aZmdMUCtD1VHJgkejNtQgwLxDpHKujHcuCfiSPKpUDi36gj",
  "key21": "5kwCUZqTK41B5Sb2U46bt59FVDksNN4m38Mm6r1PpS1pchMzKXL7fZa79uPTDR1igDruiMqUajiR1VFEDxmQRSpb",
  "key22": "3uXquZ6eFNG1oHgAGqXfsdJz5sqUS7UkhhoWSbiSn42Y1aTq5iCoRmzCQSd1tyXnMDApZbZggG9quZgyjmSipBts",
  "key23": "5FQZ8DRRLCASxsHEacS5D3Ee1218iDCGNnNgVnSGVbgWE5hGY3TT72KEARB2erpN6YRVwstVLWn8gTuVcEZTuGYP",
  "key24": "2AjTQHekQQDsw9DkVxGoE7gAtWbEcrRTod8edUHeWh2StUUYZPy1waAcx56G3nS34RES9NZJYTRkYQBdJEK1CuSW",
  "key25": "MvhpKGhSbEHU8s3f1HYv1nRAHZeJZ4H7ruFjUcBHFhCpyAy1fK5XKHTUEs8YVPp58b2NbmxmftJb9BYcFDZMv4W",
  "key26": "2Tz7hGJU3VGYhj66hwniXpghLqbzwAbrz5x62hfqV9n7xRhzfGdf9m8oCv6brvzShB7RfMwt23nvpg81grooreu7",
  "key27": "4V7T3PHeg12XAh9qVKKa3rn2gd754kTKbZ6nNMRhJ7qyxar4H5oxiPXySTf6GMgDSAhnqWQHRdWpiFsJtxxpBQh2",
  "key28": "3hH6mRRXtEcScExnHk9Y6Ef5ymWhTVg84vv7j4HfeutxKGPJqGjMzLnboZej55YPinFPmxNPbbS3ATuFHupv6XZk",
  "key29": "5QFMGqRFAuBcTYmjJF71eKcQF3ftXDUvpA88xDay2w57N5c8JMmZJ6LnKfCm9BrYjh1U7MtbkVKKevX1P6LshkMq",
  "key30": "5Ak7hw2VQf9FMnQSwwV5NHp7uqX6cs9RxQADZQcobvPQcYuRNXyvX3Gkm4LfpGBLXZEpR7V9LCKDMQJo7GReA2f8",
  "key31": "KZbV2tYKzE2t4uVmXjw81cY6vaBnrpzKA9vEQTkYhKW9cJLB3ajJL62ZCsqEFpHNDnKayJyt2LVmSQKH67uovDD",
  "key32": "5RhcfhUrG1ABEnkapqx4msbwCyDpovWmGhS8VTaAuHoJErFBYqDHGfSZY7sqy8cLYQ6R6tQeFDo1TwHG2noN1U6u",
  "key33": "4cQ4m2sCwccsDm38dAoPxqWn7y2CZPYd7kbRU4dFMfmrdoQLaWAxXiZ4d5N7hMuNvvcqBTxHHaFsvP5fAbup5zv4"
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
