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
    "3c6psizZnonGFpdGj2Dar4i3iPdyfobQK4AUiuQTg2AC1uKS31c9bgJbdBdvSSqDwNw4e9QkxkETamZ3WPqgY2jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n9HyPdza7pXjK2U4biU5U7XXcAm5MJxDWZsMXwjYNhZ6qjYoGxtYckg6B4muYFyqTP4ioM9j7QiPRPQEJBG6Z8g",
  "key1": "2sTYXeZ5pJG1TLr71AjgxdTN4MnkqgbQ8fFbbB52XbrBfPna9kdwF87TPAJB2yeVntCbBrRbg4XiVScTZynNy8bw",
  "key2": "48f21Cux4yo3puUcAXLHLnsyuSiRzotstmfxdC22gGqLfjZUq4aSc3SyH4jigGua5RmX3gsFRhUSFwZHthViNsGR",
  "key3": "3Wzcs3HcVtXTz8zkUmbWuTsGPDNE2RGPkR9gaxHjGoDEXNYLMyH8yWs6k6U5QgWEtHtPviMSMhUEimWbn693L5sL",
  "key4": "3xvuAspjDDMvWmhdk5CNpiDoavywANyxF6q2RiPkSYNMBJ4KnNLvMLGtaijG9KTP8karq891VYRz7QhGNnxxqVze",
  "key5": "4MC2gAcgedyQoYHzsVjnHxq3rZMUryRAEtDzibxVn7PMsJb2bmydvR4HQKvMESjPBu5W4ARGWV9mvog7eMasBALv",
  "key6": "5JkRpGgcRtCyNJ2sYSzn9163ctw4dmjTfUm3pYw44awd4roPYfw9YETiEuVsHvobf1BQ1R7jTJDim6cxNwkJsDiz",
  "key7": "3HNPkWYY4qahrgXYAg6M6yXjtBaWMfAqtDJMYq3HZW4GPbsp2b5F5NpD1vAro6fzkMpQ6QUve4LTN4s2ar2yKr6a",
  "key8": "44b7ieB9r6FYFDC77imb8ApCrAEJmzmBaMkxteF5rKHTUb3HwEcEzpB2qVqzPRaejAYFt6FFkNPLPGmWg27AvXiT",
  "key9": "3nFuLBtRC3E4dXCPTGvVnG7My1piBYEtevbD2uiFCti7LMuYsh2LgPGXZSLxcQgf65kZ4rqaqgQzmNNbZLLsmRus",
  "key10": "3okAhn2VWa33uFrB5m1BzYqR1JtNCDXypGopXYfn1qSjHs9jAghapHhAYmeDmzsni1DVQa1hJ847E9KToYrA2vpC",
  "key11": "RxkvxxvPSpRvFbWXdg9J48Kjub6L4aWx3gBdxri1wiPBC9aVdQ7LrUDb42BuC55PYFq15ncVzft8bQGsrJjPDDK",
  "key12": "2Mpve4iicmLUK9vy91RtwqJpa8TukWu2hnTcbLNTH54DG3Me7eLNdhQXAN7jaaVF7mnggVf8vunMg1oojNmbdpL",
  "key13": "BRTBN1bM16Js95UWsczGHGk2KniztRVZ4janS7gVBt3oFFbYYJYnFA9Yb5KRre7Qz51iK8ifH4MAhNTv6rsC93r",
  "key14": "29fvdzt5M53ULgXSmi41Q3ot5gpWbtJboPc1jJrNC58rosgrQd3zPUeS3mmfwi4tY56yHNpK35dgFT8tX7mEfXEf",
  "key15": "2nJshzjF6GsHDpHhs6ABBb4aNrGHHSNYVgTcEEqfHaabwGRAbSo4WzVLtUNms8aXUcne45vFnximzGwfyjJSi295",
  "key16": "2M64SLW3aim7tJ4pNin55MnqhQewnidkGqLC8u6fyd2jdU7oDsr5jRHYZ7BEt3DFMGUFx6kfcRL8AsZemMr6epti",
  "key17": "4xqxtVQXxEnsS8BsuhYyLJ6ou9vVGSjyASx7XVWBTFjzeenzd5HeL13QKAvSZobAyohuB7wCYePeN9WqNq6Zxdsz",
  "key18": "2YQFmi11TjxRXyz4XWEQcWDtS2BPCBNg2Wp9rjqJ7NH6rCcs5GV583hLZ8dJHLVBUtBoZeribCdDWzQTynAP43uz",
  "key19": "5Q642CnAC9aVHafsPXNVMUyFSZA2E6owYEPabSNymK3z6RdL7cQDQVbWycgCYeny2cea1xmMnnKUQnHb1QGst71m",
  "key20": "97EavAuioTXzQCJLeA66h5sHNchMmuxCP2ezJAp2dzvcbLCTJQzLQ93igFZMRg1BrBWjyGcTmW5Ub638k3E9H1W",
  "key21": "5CL3JBVDFKzVXn7swzdQ5VTe4bBimxFdXtvrehDFNRM2njKyHkeRdcjTry3z98WNfk8rJ2fq6D28JEttjysuV25w",
  "key22": "5M86VXXScpktr2D3NGsPwYCLUJCnUcShzXg9WtLPMd96nzKr8ai6uWJmsaKd63PaTaZQiq7jnLBYSeQPj5tSMTUn",
  "key23": "4VZpSMS6YHbobrAb3EjNamWHn6hXoYNy8kdvRW3pLN7wG311HijAjSHwyk34KmrWkungHTgsc55sStCYCU4CTe2E",
  "key24": "5jGnfT5rSfbTRsRnwmYPDkDmLnV4wzSqfF9oQfP95oXf8brMFEt45yDocSKVoCJ97CT7uNreNjwsKVzh3YbJQrDi",
  "key25": "5o42zXySjNhzio8Ln47yPD7hQ97NHgHxCXMp6r3qMTCnYzNXwkqw9xq6jmT6JhgzLdvsjegvGMh59dWyrRsNFQPQ",
  "key26": "5jGxVJCMHex4xF4JcxD5usp8BEv1LwUXBQsCgyUEpnAVRhBk88JdZcuXEniAhaE1RwPnceBrPUYHYWdgpdWxhNqh",
  "key27": "2dSPM8uzxuHWkQrY1zkZbzYbpQHCHrx7cc5iXkamndM4FvxWsA83z2KrGMmT1rbczkUnJ7w4JXVN2BwpyLA37R8x",
  "key28": "3xLdtAYH8PPSKKdJ57X4VzasiFxQ89apFWuyLuEdwDMf78Dfnbvpmkc6V51dKeqMFnNJsKTRQ2Eku2rWCxKgnowk",
  "key29": "21KLUUDGUSwCi5ytkmuYFaqqwJfcVKaaRYuU6r6ppJJ9djTuys4QgbywfZ3qZRbPzez7bN3x9APqV7ZNNARQQt23"
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
