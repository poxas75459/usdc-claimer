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
    "48WZ7cjjaoKvVgzyh2dMhR2GH1vutNQE7jh2d61X1DqX3W8N5cvFHreujEvBKtPBBx5h9z4NEK4h7priRDgq3ny5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BYe48WSPrGueeGaudWFzzVJtFDCvrsxi4R4GZdVL62mc4Rz6L7Vzha7Cdt6FWdRfbaLs356xwHkqB7dnQgSn2JF",
  "key1": "ixi1vGvptjAcNXUdhuxfThgNrFCDE3hVrkypM4WmHL1FgPvDKSkdueaQXNNQCHvx8WWDkSDmRSMUcSRASfC7tkb",
  "key2": "4L1i5ngQ5cTTpJZwRVkJw7chvpvbvY4ZQ2S7W7AWcRtYmjt44TmqfVdg7kvUiKKLbVn42W7CLzpgefyJphKreLJH",
  "key3": "4uC7FcMSEdkfNRyNGFa4p4QFR17TY1GjJkb4GCYaHMeTsYvHS26zgbQ9KpT4N37wyAeo5XdYkAXXiz4m6xPE7b2Q",
  "key4": "4fBrkaGe8RkxEQer5TdVQSrVibSvHdvcbvDvZ3vn6HorT8oSHSYrCP1pJNVLbM86c77wv33rGsfgnKYiZw4hpyAk",
  "key5": "551mZ1rSC9x2kCSr3K5jTG4JYvXmHZtjcF1wggHi4Lvu4bAVvAVP5WkqMZpr98xUBQZNnw5qKCC1hVycRmwVncoL",
  "key6": "3jLzcLxRLfW7TxF8WZMfwEAeRGNL7Ut2V2p2GPG1qGBrZAVnW9o24YaNxvf42iYsWt4z2hayVPBPjneWQ9quH6iG",
  "key7": "5K94csGJPJMpSrcyZpYR4VgSwkBinQLq2QzWD5JkJfhxiw55VGdc2ff1eAiCZVLe8GaAae2phPiUWMeU1LcaYDH4",
  "key8": "59aTkE37ruYHDDw6T4nvzZwsGAjFv2DQb8jd7aLz3r6jftJ1GWnYaZLBA25KdhiN6qiMYVD7C31CrMjGdN7Ukey7",
  "key9": "2DtgC4nC7t6WX64QKrcpXbeqQBVKKbLaLemNRmjW9XxjkVFN8AveR49AgmZuss2DQvrn4N66JCyFPzjpSSLE7L2w",
  "key10": "2fQe1Z6FTHvWsy3CEvwUo4bGj5dMXHGovneV8pMMKfMikRBSRERS7vLkQuvKKLLQCafecegir8QsCeXm38TyaWfh",
  "key11": "4HFSgNqA2xorU5xP4Eun1onTKiR2csUc77oo4K9XaZvcyx4G89SL1jNZqSEK2eNES5RJrHJK2kCieZGGxi4ZbKTA",
  "key12": "3WjMudurVDiTAFunZqsLHQBEKaJoUgCimNsMJqbo4EiDPPhYB8upSRVhp9qJzRkd9owZo9PGKr1Eq5VU1RQ6L6Dk",
  "key13": "2dfustV1CPh5owyaioyqe5R63oz5rLHFvHqWrU3d6dk82PmRRye8kCwTvo3Ep43MLQnmo2WArm5DUePbWTZ9TsoJ",
  "key14": "488R3zGufWAUacGgpzGoNxizfVgjVRs87WDNsejjLq2YBJ2sq31GQEyGMxVnPCqMJj6f4LsAJ9Ek8apLY8TTjMVC",
  "key15": "2WMHVAYaGQLZtEh88hRPEw2UCdJgoFChCmaZRF9HYe3hUiQd442avPEzfjbzNFwteqnTt1ppMWoYPPvNtR79Ay5r",
  "key16": "5jH48kte16HWDqu3HPT5jy63RFuGCoi7WUe33VGmiVrE2DfZUVwUB1Bmn4PgF3b1fNVEF2qQWuhZTq4RAJKmEDeh",
  "key17": "2dkeBFKA3H7jTM4VZbaLMdg3NrTLJDcHxZwVVJxyw5aFsNepYDkhB3uxquAfjEsEoRfpuLKvrZ6rTofMQM1MBWPw",
  "key18": "4DrWK5bKEHdy7miV8TSy7LzGT9max5JnWkYtnKEHRuxPtNeqe4ZF86E8YafpBT2zwgm2rZJyjPNgupXqXmf4P3g4",
  "key19": "YrvDP9BqjS4oh2uwDvchKDXJ6kz9dRWFKsBzDXNy2zemJTMkhiWhaRBybTyPutdExwNomuh9yH4u51PuXo9ApNV",
  "key20": "5KfN1i8imoUeTQW4onYkoz9toeYSKGnCr6wsji9dkmNxefo57rYWR7b7r7gnd1YFgbPmfhPvXEKjUTirJQKAVxnh",
  "key21": "33tLWgpZKJ6FcatxsoQNEij3yCRRYJpUtfvzUMkV56aCjDzSUXsM5zeSMEvB9RjZ3jAnuqoWWHSTzmrW86jzP7vA",
  "key22": "3zXkmiy52oMNeRnxU1jyUE6rNFFN4jhmrGS7XHjMJNa4PDpzxSTc9TBLdSWqt2ZwY7NjEvZh2SQkiMhqMgjJRKBr",
  "key23": "5rf2N7Yu2Po8RQr9oi5SkZRjjjds4eKvrybsA9vpcy1AiQMo58jgSreVV59xqT5dvux7ySAvQBQJur1TP9iiZvLG",
  "key24": "5oDYEtUpHXPmRBbWDAE3cHYgHqUucFFLemMAHYQZ2oe4kyXcTgGXccVju8GoYhLSWcEFxNgAQQG47wxkvsLYohBC",
  "key25": "BhwTFZc34hNWnAkA6hpu5NqCwMGM8JTvT4ymbdvudgSa8BUAYP1djQEgke1GSsjy7BT79zXMZfnHZsSvDvV48Yx",
  "key26": "2Pky2pFdCM8CwJQfS3EHbPS496VVSR2dNgCjq2sykmWuTc2BNdeLFzjSQsEshkNnRMB61gD4wjeBE4gLJazntDzi",
  "key27": "464End1yiyHDGhM2rkW7Kma4NbSbgwxEyLXyeiNDC5Q2w4QXHHezSwgadejaNPNVcdnUcokAKRaMq3MoPCLDK3tq",
  "key28": "4JeZ8Esow9bKfZDMsyXhw61waE1ug3GVxYrCQtYE74zxm23z4rk3GpKUWejFpvGFBVDNXKypAPLRW5N3Gr1yDcZY"
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
