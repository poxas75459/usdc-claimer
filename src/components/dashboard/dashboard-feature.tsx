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
    "3DypWxMiA8CVNW7zfXvZ8toybdxN9qF9ey5s6rTRc7CX1wQoiHmVBTNadnYhvWTaQvjucTJASdz8Wa9vinBLBWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UA1ncVLexfKrVCFYamvEm1CguDbLVcqXWouVdcaT1riYhCFBq3Bh9cTJmrLt59AYH7AM1gzsYfnKBWHgiMsfeJS",
  "key1": "4DHjFbYex1BPeQy2nqkEn4p7suAY7vkRaHtbYUGorHpqn1eiaQYMJv9Ecwgiha1bYrrg6Lq5qDfetwzXxUtg8H6D",
  "key2": "4ERsYHdPkyom2Msf5hpJEzzpiZEkCrZyuUeHbVdj2BQqEwMVuzaWAXvxN32AHDiyM4F4mYS3R5oFQqLHYW2vdHz9",
  "key3": "4M7Ts8cpbVSxKtSHTyhpPjk7wF4wHG9dpqKyNXbG7D9KYbfGYZh6xN3mRnoChmdCokuBnQka2h2knr2H98gxa4JG",
  "key4": "5HwPQnMSQY5KKMrbQagx93MhNdbd13nYGaXSbZ43chkqtSybLbRjAaTtXTrrPTWWZbBHv2GBjYVreqsgx3trdHHu",
  "key5": "3Vn85czCLMY5fnjYfq74UR1btA9tBuKw5TWhuXAkkJfNtYvfWJh3aTFamRXEtoDF4VahUu3oWuiEW9hwkVMKYJZg",
  "key6": "2pzd8scqtRUrhNsew6yJXXyNyh58KtobyqHe49G4vEDTcKFGgPo9D5WeB4ntdVGmSBGpzGSgXeM2EqCiHitC5irt",
  "key7": "2ipqhjPMapg8USfxSCPnPuqPX2rR4gHTXQeSn1p6t31nfSLX2oBuUSdFc3uFLUNtcC2afJHV7gNHiTQH5xbJPC56",
  "key8": "28uR6eYRvfzX1jtaFzHs4pDkPwqbQR7KhiWzodJ4jWTV9nqj7PjqCmEHJJg4frCw2P8842ARPpFkiPk1ZAtcQfcD",
  "key9": "5uGqZBUM2uUkW5hshSiYkWVxv4tHMcRP89xyB6nTGrUjPzD536xfbx7knJ7hGjZNDYnexJZhfpojfvtacXy6F3cT",
  "key10": "4aeGD1zKG56tRkGZhDeKZ6LqjckSdBedp6QJPS5wXdJEFZUjdvpUHY2G4zQGgPFHReBo7Rcvv5Cs8r4eYNxcXiDC",
  "key11": "3wt56PG6VsB5D51qoWFfjHx35iBrPJx7HGz2UaRbgG3UuoF77hWVuwA2MDsvnYmjXyetQYdGdwsBb7UbFkYvpYmb",
  "key12": "23ZPZVQa5WqHs8tLshkuUgQJFgwXdLUGNA7EGP7mq5C24s2mFnNwqtCAh3ANqPBVnDvDrXZuh8JxN8j2aU6rm4cF",
  "key13": "kvbzmLG8EcwqJvKmEkGKk4aBMasceB96TxMKYcxxyMgqLwEqD3VHHcBh8jBJ5PHNEWmQJNyMaTAR7B4iCd3Cxvb",
  "key14": "2hKAV1sySDJnSGcSm6S46wWARQ7ceEZb1YrFVWeaZxRqGHdP9Sq1jop641rA7tefHWtky3Ha5mviQRoNurTvWX9X",
  "key15": "XYVqWNoEpoa2WLT2JsFLywgg6Kjf5muxNRnCF3gT6JZaRJUnFZaonkpPpe4XvxXVLRN1KYxTRof5mJD1KKuDc7x",
  "key16": "2PVPsoEhPHmy1YLWz59WWXh7nwQzuNNyPDRvSYdkWCwzq4ea8GGEP8MEtCYRawjv4BKWTaMnniDrxPQxKBGJS2RA",
  "key17": "15LMnSP42jq3SqJBR1fsqi8DG9NF3tDBUZJ6A6h2F7njjTT8b2HktZ34M9UdvL1tCuBdbNnVN812XnDQeBmeVrZ",
  "key18": "2VJs9vg9jbZCbDbiwXeUqLBmMRWqBhpUuTd1mtHxGXc9ZCEoy92FtyVX6NoGuCULabQByATNky3miAyWcn9UDngY",
  "key19": "3nfSjYQKLLBsEiPRvnBVAzfDmUgA86oSXLne1jTRuohGEjwuficfNxHRpXjWt6sENAKK4EQrmPX6938njMV9o99w",
  "key20": "3Cnz58o6DG8DNYBBVNXiAXRwFPcGcaiVHGafS5suSRWrS7TKyyrnp2JoADZsyWeUNa7XyLJWjxfqFV69scYmSZuE",
  "key21": "g9yXroKejEcirpYDmgre7MdVAWS2seBJhjKa7rxDSBw6hzJuDbSJHrKxafCSt9Hdxydu72vsR5F2hBRpPkxRGx8",
  "key22": "491Mi2nXq9BNfqv3Xi63rBugwBNbmyWaYRbny1gsgfT3ULGaTa2hr3fvGDk7MfWo7ERPUwVUMwUG9AoGtm6frPWx",
  "key23": "4hLk4Mi8hbQ6WTzkZUcoN3GiaZUu5gmnE1pF4rDegTLbY9swDwG9VdN2a6VsY1swBNHxLDgYWNE3LpMXJUH2iXZs",
  "key24": "4Uv9uqZYnkWfTo6BfwpxwfzMYEgDeGdoEzYGNzsEJtrrAkDaVgwrLu815DNRkMuNnZaMAwVFANy2PcXTyg2UgfNv",
  "key25": "phHng1H7y1zh2DM3QdVZYo28VdJ82W9riJQhgkV2kN4bBLmaF9boQz5yZwHUSjXae3bAPau7GGQnrZNKUYAxNBy",
  "key26": "2vkdfRBsvsDYAkScwopFNkEU4fxi6LG1dLYMY3q9TZyvQQQPW11ENT53tzatKiGu1mbypmnuxxSsr7Nm8i8nktpo",
  "key27": "5NfP67PfsdJEfHbaVx5faes6Ecwqq9oKWR3LrNK2uoX43BHmPh7eE5NwmCBeUhZAG3LXSWCBqQ2kGzRPLSNiD4eU",
  "key28": "v1uByJYvh3Ee3msie8Mi99JtaCd149Aq12Z4eesuS8up1vX8f2td6YwAYRQMYJT7hMKFsmQMxomHyqbRd9HxHLG",
  "key29": "2yLABpu47F3MWCr1GL3SgKyLazTqioQnG5wT4R8ySgoYUyhfxA4NqWehVqSrVFoUPFxHPK2C9WhibTwavE4YyCu3",
  "key30": "4H5nBzbgyG3AhZmWxUdr7b8WVNqhaC2TWSD5qMwTA2M9eya1ayLDMRWjyK7zDZL3mRySP9JK61BRPcx72YUuL7Fi",
  "key31": "21hu17Rt3J4WCtvYUcqiVwvtV8WcZ7XU3Mm9L6XhUYttLY1czJv1fMoFUpUtEPSErzQwdNx5TEQn7LhKLob6scLg",
  "key32": "TyhfsfRTRP5EsDzbaxPo9wMf6nqixbsEVQYR4XXREEx6VkBDKaWN5smEDUsiVG1BDX9NCJWQ8edJacgsYvYT19M",
  "key33": "4bFDH4wMxbrmupNQVRi4G4z9SKLd3KoemW6DqLvecQwt32y21q49k6fFnNoUtwJRnTYNL9N3Y7q1HVGa8iLEvQvw",
  "key34": "4Lam6CDW9YivNvSvJ4ZSgNX1jPi2pLGRicgoE2rp3QfScJ5YrHMm5YqgU7vVCne2EHkRCk1yXBFP9fUhanm4oL1Q",
  "key35": "2yadcikk8YdsEsJ3ig53zJFZWYh8qYX1d1zme4cWjTDsedpq1K4DjhhVnVga49w22CnveETJgSC8p4prG2zYh8yC",
  "key36": "5L91Loe7dCX1G5Ytrn5dy3N4bDAxWZvoKpPuZPzcPqBj4xJw657sgyJj4GqJhUg3mQRHDNMq2UofKDz1gheJxe8B",
  "key37": "3k6ivzGAeFGpXu9hJ7HhTELURZdbRxp7WL4Co8aKVmJCNnFssJSq824KuDEqXQAD98B54NZwUJcBtPEmj1Djp9bk",
  "key38": "3A9cTaTCi1677guF43f8Nc5J5aSYxo3Uk1VXqfspM31j3efd9TTFizcLGgKnPCsXG46FZyfDu5J4p9Q8frccxZEf",
  "key39": "2NewdwgJAdadiQxm1C9jynzVjbRpyoCUWRAPiUA6snJBj4NihHkN85qoFHktmpEhFiZkcNcWSRehSiTJ2RmrEz9c",
  "key40": "55GJyaMiV2fcsxFYEZ86wRRBWHpGzEDEKt4SYophTTMpjT8xwC5kePTk3sSjNgtE3LabLKD28EKHhTy3dpX3dinh",
  "key41": "5cD2eHvxzQwwtZ3mx2A6hGuocWmjh5n1TinpAFvesgxcfbVkos9AJKBLE1QBcHx5Q3P3gqDKNQEzRGUrkk2VZkwB",
  "key42": "5ZZ57oWX1Xz7EC1nzuuVF7YPi5EqRnAHdtdt9LL7QEtXLHciAqgDNmQDbe7ivh2sWF2AscSr3WmzZi1FVbkAwxe8",
  "key43": "5VTxVEM1JrSmUFixeWmqfTPZqNGAhKEJZHYqYSu187Qq8kr66RFaSEg9YcvSEgtwcqaKje8C8VWrKxnY495g9e7z"
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
