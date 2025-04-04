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
    "4xDoUimm4aTfY5znHi6UsdqGemkyyzXjZ2KTLXxtjPxJkAzXtzrDSqAPVHiZbVpJcERcUdku6JAzdqHBeD2L4p4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebAaypCX2ATcihRLaufAX5f7L8EL84tMMYexZhnj8Ufz3h6tTLBd9JPxjbAzTqKyYDBVN1fBBVFB1NjfUvkPmTp",
  "key1": "5yCrn9XZVJEHacXUozrMP3T59kvYYtSv4K6vhX6VbdQ2a69jWcaRcqDfCXCEcAzm6aTATuuwZfVeHBAyTh9Ca8rj",
  "key2": "3NmuJZtkJGrAxEafY5PM8dTu5WKnimPdicJ57aVLroxUAYZWuLAkKCoM9qYouomLHUyg1asCWvwJkrCPpJbUWW7y",
  "key3": "4RSjgMgBaTBCtrdTijnP7FvuYh8rrhevRXWnJgQEa1e8p3CrkseFyQyQJjNjVAaYgMWUDuKAouXMimJTb9kdE65P",
  "key4": "5XGTbvxByv2orU99jCtRT996Dg6R6fwVgv2n8nfn6mwwKFXY2WKUMgrPPvxP2MAMGbbMuA8FyfT5KoZWygAKDR3c",
  "key5": "R3sj39GDMKfLtVyioeRc4EeFWXSgfgNKVVheRwuK4wtoiQSyxTWF2EtsqAobYzQWGAsWaKY6ysVW73Yp1scXEWY",
  "key6": "RzyrLVHmb67rpE7EGCiyrfdYmeDWQ2HPVpSv7LQFs9uZM4nccZUQXySmeDVa69LKgqkb673GcZ2pMxJmQZbdnok",
  "key7": "416Grg2UGkDDFfLLysaa8KFSXHPZYwvTuL8CBw7j2KQe9Wa5oePf78yEuz1cyhLn2cduKySkJx9vXVKwCGsSPZfd",
  "key8": "ZQSfom7ZLzeiSfcrZXUX6tdnnTAzgH2j3qbnQcNCTdqgyvHuREDyLoqPf5zy7r4xxqDYQkiXhYD3ZaD9hU4MX7z",
  "key9": "2fNp3QX8cep3jDXanuCCxo4JAHbWaerFCbe9MkhxHV2qso6GqWUFcvmxbz1nZYRFMU7qouyzJjFfi3USP4tNNjRn",
  "key10": "4FiMjbDUd1n7SFAWpAtzeAVBKXzH6qpy2Mz2UTk9QmKUR4SYJMEVQpCQ2ZjNWZFZbM1mFRifD4Xmn655X82CyrH8",
  "key11": "66tgCMpgM9V1FWuM1AAgyrjBouvto99hLnTqtvENE5bQdZw3Spz1TaDBC4Tug2R4YydEJ5TQjamP1gC1Vvw4krFL",
  "key12": "5edKqCCqzubcMaRofzNF7fRx2tyAxrV28h4jLhxTUMhRQ2vPRVN5dKauAmXBhTq69f1qjiG6h1Z6xvZ8Bn968Bvc",
  "key13": "5TWjtz7peMid4ThATHQE14dk3ByxvTxekvNJ5LjtS1xajPNuAfkADNNFnw9NxEyRegkWVmyAyuRDkBhRQ5k4VkHU",
  "key14": "25ZZfQmUSjFysNNDMrziMPSsijpeFnRHEAEsJWEsjbNEGuazAVqBtVnzCzhHcfdJKq5t7PqGg6RBCmquJRibjqkD",
  "key15": "3Mvz3xuZAJZNSiAz6KJh9CFXB3bdC7ubjdG2yT3HSekP8vi26JhPNeG85txfrVLP6ZYVJtbCB7Y1zG9nK5woNNuJ",
  "key16": "2UumNiFcWDMWa75etHep8tcZukkTEpf2tdJPhg3Ta8eznJWUdAKJSWau9RTBmm8o7yPuZDpe1ZSi5mx7JwvcpGUE",
  "key17": "37ePKrYc5F1C6RcAKLkYZX44NCDMoFbFMpMeSSaQB1Ws79t5NaVi2D4NNrkx63mfoATFiujWeT4TPKScDdL1z5hL",
  "key18": "2MeDugz1SW1dLg4Wvvt57hfvfCDwc2R5qwZmZirwrY1nKA6fYpEUyYZdby6uqVEjGk9VHc7jtzwMjUpm2F1Xm1FD",
  "key19": "51F848fsyJZGB3vNgFKfRoWa5ZqpmFQMLxBL4JchWegbkqthS5WmSf34UNt4dQbupPnswCm2ZiBySdYjQaNQ2t3d",
  "key20": "2uNJEsXDHJSTYwTEv91K7R1FmmNfw9PZo3CxvSSnu3VCbNa3mNSzQ9QdKc1ngRpS9HMo9GuKtJm8xVSB5RQvhNka",
  "key21": "R2dvC54chsrqm1Qx8wxXT8jQwF5qzrV79Xd6NR41oxdyGzY7QSnENvnP7dF1s5NpJZ1UEpfAxJZRvW2BzKQ9ZXQ",
  "key22": "2ztnkCGvQhNwVZHKg33aGWiVMoPF7JkReh3tbjBGQq33gYummFQsh4DyEVUEBUhouaVSQ7shbsgaJLXgj8Fz7TTq",
  "key23": "2UcRsV2r1jQoAQng9hPBV56uYe9PKWeNFB3fEc9Ef2gUeG5JM7Ya6JVPHzEs11pGCE72vRjHgGsByC4LsmzYaLvV",
  "key24": "Qp1YBmC4rsVpuxSKhZa2K6Lhc8h77pQf3XpvcQLJqrQWMAdbgRjbpHvQ2LSNavUL3Eq4uqHeaKw8ns9iqMo5f9E",
  "key25": "4GHKpccyxtAxGn9PqKNjeHTdBdHrzHgiC7H6Nd1DKBaHDSry5PnAeTu9GRwFUW6Fy45oP49tGvP65ontqL13ex7K",
  "key26": "qxFENeBZ2npmpMibaT2beGkn2hpzhsJC5hoejmhRVjyLdY8zMWiBr7JnCQVMvr1bzfJodWTyJf3ypRUedLWtK8q",
  "key27": "5L2MGQGhDc3ni7k5rjjsHuJucWnKrK5tVQ4nHRV9afgMTfdecanj5DgJsLJZJLqauCnX4Wwb8AocRJ4jNdSVADkB",
  "key28": "mzzSGY15EhZSCVvYX3KspDo5FGsSk8dJiWp8sGPrUG87GRjYDoRNDogG3Ccuc6D5XjcS771yQndw6ExmXz5pEGg",
  "key29": "42VxfM7UshSxokdmJiSsohUqJX9duCJrroHy6qcCC2hAf5c8KfyNgtF1M93v44fxKZAwLbCPQFecsSYNTryEsAFf",
  "key30": "5oRmx1uM17jvCGMWQyMydxixtJ3QCPCkspq4zJZbUZwoRy5UWjVJbNz9EP74YT2HmjrM1AatsozwHLY2BcusfheC",
  "key31": "2AWNAXgUYuGAPBnFmuG4VF4dKQq4QtACkGuwa7G3vgeDBcQ8BurZXMCx2huSDgaStEbkuhAP3T9bFLkJYhDWJ8Nv",
  "key32": "5beJGzujDyGWFDsUuErv1oPqc94ESpk8dAEetUvw8sp8PwiHH15DKY42EpFB2eVPLiAkQ5pAk5gZoEAd23N7RFJr",
  "key33": "2mdVvNdCiGVznUeaHLi2YRUreG1jbMPrXGTbYXDtgQYntQCromjbf5aoQpNQeyFZyjbgsxmefBPySQmGCXxNHjGw",
  "key34": "2BJcccmb6Hp7XMArgdQEuhPn7m73dj9giXqjQ922sWjVs56xVSG7Ku9NzisaJVa8jPXeKg3mXDAS295NMB9gYFT5",
  "key35": "2zvt2GPF45qBiCpHk3N39tbXD8Kwhxaa9sRBvWNiDLfeZ6f4FPVhJCowh5KDf9otV9T5y7uZJP2dvtaL5zDP1HUW",
  "key36": "2JsgqCqpEZy3x93GDDM7Eda1unGAA8QKruJj9r5xr3sbXXnzJd8PtTpnLyBt96e8wJwM1P1r5BTZSp4jfJPPvgon",
  "key37": "5wuGiEHHkdr61wo9bajiVjoA4MyGNjguSGB8aUW36H6et3b73J3p78uB8Q4As5KMpPrsoXfPBGRbRFwckkJ6j6zG",
  "key38": "5bywiV8wMk3iFsKEuny79zwA8ejwsiw8BTPxUndr7EkKwaq8osSiPH8F5cpDXcXqX5a5LcgPocHhdpSP2zMs9vHT",
  "key39": "gmgWiPDmXoBiAckAuM5vjGNhJDDK8M9HsEZx4Kn3C723SMfYZp5WV9JSBDDgy41uKYzJhQ3ocotJU2P9brcMGjv",
  "key40": "4iJbJ5T5pzZsptKW2eE3UScK7qpuZVf4Ci75KkHmwQkUY2qkCuN78LyuV3v1J3nGjefkXgdk5xFGaGHeQVULj93A",
  "key41": "x9DxfKiNfHo9ZjBcNmp6xtvozbQzo4u5T4Co5HLcucxahZ867XbZeBkbfHcq1QhCtPhCdtb9hk1UPbqSVeResjE",
  "key42": "4tXGg2vYyhtH7F3Dh5PXbG7x9Tga5y4MiaNzoUTZf2XH2BkKtmcCsgZjgZSDVoek7TBjVjoi3Xujx5WChV3Q6Uex",
  "key43": "4HoJW8cYGnwCWc6LqtotQbh3ctJ799RusDFEDeBE7LW1EgmZsiPuxB4AjLQxLUPyY3F2M43VM57wjqxisbdSJrLi",
  "key44": "5B5jRNnjsgWeXHPs8TjiQ3HpN1V8hhwxTkjdkn81XZaTteod1EgAeRyQaRAPvuMB1KaCSTM7E8LaFtP1thqbJZqb",
  "key45": "2fbCqSpm6BwPtVCiThDrAkgUyiaPAnzH2Ep69uQFnSt5xbQ7zFU2f2iVTeQhfwQVz5uZEusMTy6RiiLorhBE2bTU",
  "key46": "3iUntRKMG117cUuV95uA4wt8jsagXKctvmgWUv1PreRQxqTw5YLp77eVs35KRPJfV8EiE85LndkhpLe1AmCUiJA4"
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
