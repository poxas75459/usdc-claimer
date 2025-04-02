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
    "3WHKirWjfzdXxq2FpEPjMy1hacgHxa9Pa7juLygazxGQbW1yeHru7VKVyBMKY6Mo86G4ve1cCmbsEsmMNxBbwgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzZrtyjGVmjw8tM1LNMLqrWNA7Wq3C5VnDLdzNRwGEY6bc6URhKRHY8FfoVkcKBGRhNGnoZ2MaBjy1Vx8LgVCKB",
  "key1": "3UeozNK5cnYnpqd62XjpYuG7RDKWbtHVEf1o8YkZ7YhBYRowj76gs6fk1NTGYxYoXPckrAdKcmGijHMnVzj9jdAa",
  "key2": "2ZmjAw9ryRxsFnB8VQMY6NdsR4eXQwjZMZsRAazCeM6PGrwLc2H9BdRGTNY9RAhMmB9Vj8oNYK9e4zptLLzxE32",
  "key3": "2rs8X6JqueH8hknrw4K657Ncq2gvrkUAGWbWxwthdSHg4ReG8vE7iJRHKpf2zEYRt1cbjAbFicvj3WUxw92cSRpp",
  "key4": "43UEqpDPrYWAqzL69CZFWs8gMmNdp6HX6NCeK93DEHqAEAPnsMVavgFJWFZXRdoG5DfGhsEPJjB9GddA3PJTKLg7",
  "key5": "5FbuwsDf65zvAUqpzdoLusoKvwqkeEEnbwbtL5ocWU9q5KesM1CVQwLdK7Le5UjikzuQWW71uoaTiRLyAYMxz1k2",
  "key6": "5PayhdkTdjn2edJZUJursiGv75Z3yLHPm2hGgctqaLECCeeCb3jwShfGhqTohXA1Wv5kquvRDc6mBDi5y3qReZSH",
  "key7": "nBUbS2vEqtX1GZAH7MKJc8uPvTNzuUS8W4qfaMpWUqhy2fH4oNpof1fMfzuF8Rx5HiAvoHHg6WRD5gMCKKfVXyb",
  "key8": "5Pe2JLeWvJyNApNvjWU8dV9RjzBf5V32ChERKBrFjTuQcrdBJMGCantbVhHuQYicNUMJfrt26FVEPSbTPLyxFRB8",
  "key9": "5S1xzhDkL5bkG6XQRdfGSyeKQmyp7KcZ5fMuCww6HFswqNd15x23gk3Jrp7CztbiGjgTCanM6tkbpw18ixGaq9XS",
  "key10": "2TVuUwx9qj9VTUqaC9SKJxDaQpJK6VD2PhynirJ4jHHgkkFowsCzZUMmQPABE7RgbhRFYU1mgNRB3exmfQtRZijo",
  "key11": "5S89t5i3vtY3pjWkybNZgKsEJXZPRPGatmTxKEd4h4oPxvJRKaTd4SNU23jyM9y548vgcFBb2ftPJ7QEp6E4LY5Q",
  "key12": "3Mskno52eisgfWQTgvKyzF9dbjpvzpEYj4SP58YPupweNa5WcEX6kzz8BDTEqYqJgdRdtoFhtGC5C5UsYa1HCS34",
  "key13": "3A1b6pnd2idt4ysM5htgMFFUwiqoiSxfn1Ga1PDPm5dUJs9ssB55japqDy7FKyKWaTxWUnf4MJuJtzGBiRoi2fyW",
  "key14": "5iWcKYLTZNVJdiqSaUimu1qCV2Pa2Lr6SuZU1Uohs41ascm48NBdHH7kdkMSxTvPgZHQNPf7FNYJytM1idRNg9aw",
  "key15": "rbPPGHdV4Jeo8cbN2tmo144KBV5a2cqdMqSyRC1uRQ8Pd8mQVqwDtptMEGMcjsv4JHo4GtUYrN8MufhxeFzvuHs",
  "key16": "kiTMq1WjgjuLeDxUE8pfd2HtBvkVeKSxMYCjLvUCrU7LhthL4sc35tSCAvgcbpr2CTW3HiabXE7fEN9TbjvVG96",
  "key17": "4JQi85UqN3K4sViqvMeZRRZSrmmDKtGkqFM6VXeQTUPwgDvcFix3d1AJ5aLtnC5Ra2Ept9Yzia32i5RdPWuSxVgY",
  "key18": "4tR1PTu5wAgjJcsGakK2bMBSGkrhiuHqNQ3jw56KeaZiVHygP63ze3Po9i8jjC3uZAUvCccYj6kWwDKex6AUcj5X",
  "key19": "62EyJrKHaH5RDC5Xsqr1H4cWzefXXKVnYJYxDnteezzTWsGE5wwNiU8QTZn5WbqyKWh9XMx5TChEGDWzq2Vg3o7J",
  "key20": "53FgJ4Jcp6FTV96ZRRskCMAN5LtyJueQnSSh8YQ9Tc3tS9mtGbUZpDFk7qXMQn4xu3BKQD8dmvbes7CDaewGJu2U",
  "key21": "2fQtNPgNnzsJhhagzA6H3cy8qyU9rAPfepuQhpsMUaDtACj5uv1GEgEKMvqGknrgoCBF5HkAzXspVRuQRYV9pjKv",
  "key22": "2RTJfy25KCPhTxKeFMC5PwTbv1HfzbsF5KmTGxpmPjqmzWURGE3PYj7STkL9yKgTuaKAAXVF8JGRsHvZhLMaFeWx",
  "key23": "R4ghGHcXjApfoD3NABNBY7KDxgsA3LK621KWFp4SM1zEHQ6mmrRfSVwgkDZSfC8hsFqTgErH1CbuHKbKZk5nCAr",
  "key24": "3Q8NeHTRr4uLR7XthH3Tgay2zig7VDtwLfdLWdG5Y8jZpnLcWRjSpimPqYV9VmGwYi5kRdcRZ6AkWxvm3Tjypnce",
  "key25": "2s4aic23frLnBfw8w1vcPD5QMepJgXXEzZwoXGLitYZs6Nyb6f4q8gDnCc99ZrioTRpzFkxbYU2rnuPK4exEp7kQ",
  "key26": "f5Ge7pYUD2MxqDLSXPQuRE1j2Re6k2y12NXUsWopRwixsmCHdMpm8om9R88zzzEbrUou1zQ2M5SYixY9YxMqVC1",
  "key27": "3eLEpWLUaCcSE5ksie7WY1ad3UZ7uAFKSRbVZW4i8gPBD6DQqaNN5kkfh8Fti5H7yh7pxZ8SyKThuh91vWrmy4MQ",
  "key28": "4cBjkLryquWe3cnKv2ghyThqxBQg4FuUpWeFYiwe5tWQ3NkcdTGVxwdqGdkRcTC7Rk42Mnjk4cqaGghbCPm9HM4P",
  "key29": "e5AmRFrGapyutMXGeYi7P4yhiUPtZUeS7wCHyhUVAz1xbmH6YFXvLNGYx8WACkmFJSEVFFGwG325cjzCWnMcyBQ",
  "key30": "5rQJpDFDZ5fXaUWnwfojNg3Z3JCvBqL8Fm7gADYGFYojKuUp3vyioSvbkufixqpePTse4RcYNvk8yQydZrMFZmZ3"
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
