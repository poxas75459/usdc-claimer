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
    "4TMBoSb12D4U8uTzRMovHE7MoMiCQbseh8Kpkt9Cug5ZYdNz7HoFTrpvbJMkRaSZ8pTDc6FpJjrAXqFbtt4Vih5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rj9Q7N7rnfoZhx1Vy1cvoH6SEkbqcFGdpDi3S25CSjd68PTr8Sh6CvGFnGHGWPZ6C5cd7QCvWjBPp7cFzhvfGbk",
  "key1": "2ESmKRMdaGmUdvC3cNG1HqY2hMesYsXvwqoDEpS4788ZdVYZMNcnadvfijHTDwUkskrnusJe4wu8TFUzCfbSUZup",
  "key2": "5BkmZwLCKV33uJVHrSzNGETB89SdLZzfcSzsaV4iNup7oExmF6U2C54JJxHNxD8UiZce3ECrcCKsmFBiRGzeAS2q",
  "key3": "5oELniw8Dg7CkZZxDcn1w6eDeAuHnnciPshrH3wozqww34wtFj4CjyaoyKuqDVCLXHQ9AiRfmwcnZDrRqftwUrDo",
  "key4": "qx8gaEuRKD72z8oj5e6iPUEPLVHdeVLrCfHDktzqqaDDaSiy7gNBvpFAdy7suJPKYy6ypZUvE4p5LyNeC33kg2m",
  "key5": "27QQGKmYZNgU1WVb8exrYGuBZ6FmCZvCLRqaqkPwbtiSADeHJmFwVLNtftJSRXJpQApDt14gg26u5HajygGbp71C",
  "key6": "2GTftsroKchujku127hEP5UwJzo4pfxjhWFxRz2Am5VtaUoW9dFAfvzbLMNmAJ8dqZcHNXZYnuF4R2T9qJKLMBwy",
  "key7": "2JiGJhVifxGssPoMeFHcDBV63HBiNqYB74wVmjbDpJsUUJMddXHMzMCdaCfoWHrdWhLAmXbdn2yFeqpNXa7LdwVd",
  "key8": "3RL31AsJB2WspP4ayJQo4hqNKiiz3qWBhxKn6xGB17RbKYrSR6vMYgp6AsN8QtH35m1cVrAUfvnKYzwXdQ7rF4yB",
  "key9": "4biMufKm63r3zX1sLTUuPuikwVUr5p7wWZbFTdT69txg4HpDPNbYFvthAUN7nTJ1pQ6DTDNyybDEy3LtSnSQs7Dj",
  "key10": "3tWKZzVKiKFhaubXMDi3eE2sU5cV9KSyjSR8jQ5GbFfx4nBYGyBxERays8DBDBuEXBdM7HVwkeDJAQXhfDxVVhrs",
  "key11": "hWq3fx8DvPt75HxKP7BjSaVuLvHbXZGMqreLogDGnThXmAFh1dwwJVL6KNhM9D7tKxsbXoWevJK6xUr5wAKxhx4",
  "key12": "WaVEFQNPgrXxDJUEwoNDyTqriRyVVQ9Wj5pAa5FfFRqK69u9oedW9e6GhQS5NocfzywfSz6XtLAdrLY2NBZHt5C",
  "key13": "5ZwwUfRUYHJyszMwuAJ5xJhqHHhXXqz93j2tKTaCKjteodz2ifCMgzfQ7wVxfobX7jiYNmJqTUuutZzeJSYJcrgZ",
  "key14": "46KSkqXEJyu9w4N13hjS1udfqQXE1C5NibjAjCSPZJZaH2D7CJo4y44tAQjoxGnSMKgb2dy7vyVN498EsN8Q2GrW",
  "key15": "5mX718TjwZUAdXkmePUfJgSPSBoqDTvUnXEMsuPG8cxZgsaQHr3G46zbDYHdFMLDHHBbLzmmeoRkWykeug4Vpo83",
  "key16": "32rU7DaWNdmRnrA6bPyjJpFXwFMEupvQcdzPTHbAnM9qJ1mogXJLbhynxz63Nb3uvGypQAbPk5oJHFVDdEheMsCz",
  "key17": "vyD4X3BFYVqzfamXjGJhPjZqta1sggvnTu7D1BAf7gVFfzW1rNdsUjKJ7WXdyV1U1n77jUni6JD1ZsWaftq3BGt",
  "key18": "2U1QHEECewM4SpcgGqW9jXjB2kHYX7qK6EaNLyJ1t1hUwdfWjnABvxvcRHCQtPGjFSn56MmD4tWkx28d9uDDsRJm",
  "key19": "38a5Fy9TNdepCrgh1PhnUG38DBeXYP1mq8eMsffzqUBrrms46AR7UkWv4jAgfVvmJvmPMgHhJmh4q7EuySybCthk",
  "key20": "x2cBbkCaJC1g5AZqpLUsKHkK9iuBcnq5x3LjoDamqHLFL9w8g5s5rhFy5hYHt9MxoHr9pAZAUmRRAM9b3cWLcdp",
  "key21": "35zR3UQ2wBa8G5xXoqi19ExFw84hNaRxCeQ8ch6y5AKWUfjpGHhFsa6bfXve7NMzaTZGsjFiH1GJBSggLtmJUSy3",
  "key22": "65VdQkmw9PhR2g8bTJNV2Ep8j1JAeSr6DwwPvfEguv2rM51R3V82zTWHXhXyKz2S8EirhJz7McHhSTQjJuTmoqWC",
  "key23": "5BC8ds3qCKkeqmd9BFMm6ReMcWsMURb5VbvHqLaBrK67TwXq13RQLDyqYCRKBhYbxoZePeiTsEgX8zopyiiK6d9S",
  "key24": "5stuE6GsioeCqiwCN12fg5buJgkuccYrcrDTANti7BDceWNF4QMiBV37z897bvQPxS3QrCTcjbHBzzx3wWDTYaEk",
  "key25": "xyBkcxe1TGd7e1FXTEv1GbNdz54YJdSAz1LHhxSzwxo7rSB61kjBLNzsoym1voQRfbtDDiCfonWN448ZfxnQdrz",
  "key26": "4VNuNiWe6qMhjwUnZ9CAVR7uzX24FNcXndZTqjSfnLwXeqQQ1AxL8nKCc4v8h5WhthFtxXsRVF2KM47jqvWgFEBS"
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
