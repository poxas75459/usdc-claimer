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
    "4sj88VKu31vsHReb1iTMrPBq7jFrM1uke83iTrQvPtboqvS4GCvCjYceBo3byvZb85PvEXYQ3iywfvn1gaAqwXBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5raNcNDKyAe9UyVMXU8rh5FCJnDqTj9YkoswKq63j6kJdC48emjZXNqpY1aq7r9WgzhxtsWNHL23SWfdv2x5NP7x",
  "key1": "cDrUFqphAbiYMXaQhWZsLSdPbEFYwvpRwPGkqLXG6UUD1nBYYUVC6Vda66FXekhsSzeXPmzaxKDdZzfy4jN85ed",
  "key2": "3NvmvYcL735RCXdREquL5CxiUshm5P8wNGa9mSk8eqF1hH7WxZfN67JDTzJaJSssYzSKKwVKmEVieCSe3cKMjDp7",
  "key3": "45KLpW8TzFo3hFZDTJDurxysLABkZx8mbJ8CP41CCM2rJNnCEMCkXvqxFTw5MXGgH7nybYwpAAeDvombsTsbUNUw",
  "key4": "291Hrpu1twV7LoytVxjoxKLcKB9vieBAJyQdV8YVUXHybFnQSLKPBpQutgwF6gapwbUXsTRTbzY25jxmu4GXFUAm",
  "key5": "2hHKHMKQhJG2pPJcjC6u7xU2QxfrJ2UneTP6PSjcCAWVqp7C7uopZFEx59HjCymcxbZhXrauw3AYRqHLR3qERsaD",
  "key6": "3bFEqdtP1z3rxdpfqByA97taTZQh8mMESSM7ma3LgZkf5E36L8GRMABeUv41ZhCq9jF1UrGqL46GpXGAvpcEVukQ",
  "key7": "5LFhyu2ohxWxiR7GuZhAhjHCeWsJPtkRNBtuFcP7kv1DDR4XGTmm6Spbe4pihfrUXgkrBu12iEXwMRHv4crWGSPG",
  "key8": "3LttaQzvB5mrzvPNnRMRzHQjEQ3c7YcTu1yyPjQjcoRyo3qTT1Qi5wuW3UZibQmM9oLkQCU3TQgcxQVwfVtS9HgL",
  "key9": "21pzZsmMKQsDQbF7CnxC1bRSMw9SNTFfcdys9G5NJHqzbkxbjBGoYXizhfYvE7ECT7ddb2khRhCCiiGLawxcbbVr",
  "key10": "4NtwsZJdMWtFzQYptyTNTLGtzKafjN1bYm6js5shuBZcbpXJUTTnGuNZ9DGVEN4JykAgVdXZpw6wc7VDt562HLpA",
  "key11": "4esVVY83c3C4DSErqZzaoGrqsk3fpWzYNKirR85eBcqaymvzKd5R8gR4HXeuUEPKRkdDJENigHBkjF5HToP4c8aZ",
  "key12": "JB2axLPs4K4o3Vvw9Jj9XC1sYUpvrDvY8QEwwmRd7mLS2qJbsLUi9tty6WpKrzc5gZXb1StPG8XCaXCeBhwz1Zs",
  "key13": "3MuWtpw7PTy1emp3auZ9DmuDobr97oaryfDfAVzU1ATSUWtQi5efoCkb2YWhr3TkDc1nU8t5fhLtdB3NFG3xi41y",
  "key14": "4UBpjGKpMhPDRLUdTWf37k95FmsXJooyrZE66EPkWaMQ4XFox8gCuYC7KvYyYfgtuoqsh29Kn95SB1vH2E9m8Fa6",
  "key15": "NXVgbbW2ihXQvn6eHiKbcLv7PfHyDzVZ4wwb2TqEkmhXXGM7CPkfaaej1cxYat3qanciCyYm17JGhWJxfcJ5PVg",
  "key16": "2vgmp1JtexgYsDDNzZaSR7CTD7p6zSpi16N5qBxZxaeDYSK7mYUi7oyzyKF7bGgjo1DEyCUKZ9f35NhxV4hBodwm",
  "key17": "332jr3t4maDvvJa3ove4TGnmadKFhFVeVSYfAS153jG6QdPRnW8A4zxRrzBxxidET989t8W2TqtMWiTazqH4yjv2",
  "key18": "35suSjR2qfTenk3yTy97zGqn9TJBkSamexb4esZ9HYSNFpQS9GHWvihNuiTEDiTfVcWq11vWWzxNyu4FN91rZts3",
  "key19": "3pWHyYKzHrfT5LbUkeifeGQx9yxTZ2k8oivKnC9ShLqVG36XitXfyW2kGR5rYjX4FE5dY8yYBeU1uVkW1pc9L1vu",
  "key20": "2xJNuEduNrzdX6wcvv1xq11vBS7P8MYbeeqX8g9SDF1VHRxyykrexXrUSBvyh6HeD6oP5rg8uvMBx1whJnscEWSd",
  "key21": "4yYh3uHTQEWEGoutB1iUKqYXG5Kg136aHqDBVJG3YZUqGAiCKMXq5AFLK2Zui38KfKXos3JzhPZJmNnBcXgeeTko",
  "key22": "5tdH1FNyvKYhrDTQbzzAAmuw6njzXq1KWx9m4HsGYb1hygV9zWVFuuufV4tGvW4tHviYvnN5MArVYkZfnVZRaEgh",
  "key23": "4yvfY9sZ9DB333dVGDibRtvTGVMGw6XE1KTCSorctVKUjsNDAZNPcD9PF4tXW7iq9v4jtzYmjhnLFMBaAAsMivGk",
  "key24": "aZ45sHk1Vp2CQ18ikxfz2JdVhRU9SvX9FhPMBxzxAAtLDHTewbuGNtmmmnQw2Lue7ZW1Hihhvcp4Aa8Ge3sRQSY",
  "key25": "3TXUQAo4BWKrySi5cNgSZrEpkAiDQbhfs8CroCwHQNcvDfdsG22BnaqTZUwVUfJLaWhs7Ltir1JdUWkdaV73Dpnf",
  "key26": "5Cqek65BHzgCQmaX6pQNXdzDfr7d5zUiUgNbVWMby5qjSMMkeeSMtWthKrJJcaNeCbVrFAwN8t9hH3s8tac8kCfp",
  "key27": "5qirvpLL1om4LDg4LmE1jTf926VCrHf3ypkLxu9ajSuUV1H74HgkrzruLz13pV6EPKqxA3M9L7jxxKPDzcDpb9x4",
  "key28": "5MgmYu7K7spedh3WaWCoBNCcSHdQ391gQwGjrCqAYBL4CHZxgrtCN8DeHYrCYtdKFfikDmqHGHYTGwWPNXztDdro",
  "key29": "mAg5azn67WHLCjpm1ZPqsurSU1WDJSCiYUi7XEH8moNNmnLr3EfWyqe1iT1k2WLwuxxuKhVKoaxcNnHzbNWDHpu",
  "key30": "4cyoYbaFxo1xewM1kS6RU3FsEK9c91XBGasfrFqVV4NDme3LLMJPyueMwm6ktPnQMK2STNMQ2M3SE8wHF3hRj4TL",
  "key31": "3boAzhzf72dHbd189vw48wToyaqrUue7iZ4dKa6c8nyW1Lzrxi4QGKWPh52tz9VT7jvi81xUCSNn2pcweh4982w1",
  "key32": "bcfcVsTfYEtMpzkqtVYYup6a2weqarb1jPSxqzRYHqQddSKnRZkgzUUS2TN4wFCbQALR3tGBQqebQZm9cxUu3EN",
  "key33": "TefwG8WWGDceWMM9bS7zwJfDEbT9Zroj3jPGDpQmrNjHrhGDrFDSJRsfTDjmByC7PYQ3VbTKotiiotqhNdzZGom",
  "key34": "2deU7xTxUmTCsr8UkD9zzPCYCqAPMG9VX9W9H2eA1Mb2PZZCutRQLDvqKgg5ASQ5HE1aafubhoKd2ziksLinezrk",
  "key35": "4ikZ3pz1mWfs2SNY9urTFj3Dpn3BE1dYA48PtnvbvExMRfML4kE3LcdQcyQrHE9TKL7cXHLpNvBrreDmzXsfUmMH",
  "key36": "2jMcHhbNsKNgaE4Um5N3kF1MaTNWxdwsBgS7dDqptP2eWK2utRDeMfMhkTZtRr8u1cWhQFYBUbrAc9Roqxx42zfc",
  "key37": "3dn93s9rajciWfUKSte5QtjH95Wuk9KN22g9NY5RcG9guynJKSnvBa1xJQXQGT9SufoVf1YMTfrWjRXZYq6PKMGZ",
  "key38": "3Ce5GCAuHNqhrFNf9tomRK6v3Hd5XGwtAoGxaCxhyBkaeCtWM7xBVLvbavJNy7tCcKVAgTPc4NerZQkPddFfSBm3",
  "key39": "49PD9RtzickrRzdvbZcngN4h9V6A6yP3MUD8rSaRBJEa9iFzkjzTroajh5gWH1oV1isHa8bzDWa8xA9RwRs459wj",
  "key40": "3NEEt8EwtFwsEJYj1XE4zXVSeZpMJ8vhyZ9iHoNs6DeozyHFNnuAkqhkCS69byqQgKwqjBiZ9oHPJVKBetMuSsoY",
  "key41": "3qzxt6mFzeq7RukvGRhRVUENcgtZgU3GWP5N3nay18BE1aJLnzDekCxPh7dZoJqe76aNcaYwdxBbY4azYtbgcCQ8",
  "key42": "5wh25uDCouCKe77CTuHxcjZrpDdXeL2xkrXTB2KAZzH5aRFntPtxUUGS3CFBwUUz4sp6rHM9e6V9yzqhiVBXVyhM",
  "key43": "2DXCY3AyebPs6QqMTA2cQrecb9sFmmncxmpJBFN6L5KwaaNdNYgQx53B7vp89JwAbYnnHSBMPU31rVhWLKAaGtjW"
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
