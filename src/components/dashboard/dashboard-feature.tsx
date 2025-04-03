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
    "3WZTtUsnYxcdpsBDEdHtnFnYkLBYBfHgjzxGb7YfS44S6z4XrZEn7PVib8ALLKaN1Ne5cx9UUWYy5W7uQ5HjZSt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JzDr3kwBufE71GqXMgaGe2NqfJ6pP5djGQFGiXWLQkRcAoZyX8twDzppvAgQxGn6V9qcmUZ2whbLrwk2n9D2N3s",
  "key1": "3opUagPyV7WFTek8YLxy7nZyQH7Ccaby9LXB2a2mz4pAkqJhpDfVWdyCmz1WrNEZqQetqnmTKoJdfJ2tupKiL1We",
  "key2": "3JT5znmqqkSSo7uQ4e86BUaG4izszXCdk5imHzVdwceK16BtV8TK8i6hnRVDHCznR3Sm2CSXAA7nz5ck11u5h7Ar",
  "key3": "4mNgkkbuKTRE4eRTkUcn7tw2V3gSKL2kKBBRMDsKJ2KNA2K3zGRXaoq37pXibyvfrroBWvVBSrD4GnmFzXiN1Yd8",
  "key4": "6311MqBziF9DNwC5y9kasLirb2bLLMoMWRHwtkUGVtZsAssfF1HKtzeqfnTkcwcrCfTvga9S4Q4hU1JKan8Kq8Tn",
  "key5": "xHdzGaAJcsDyVUDD1d3csi1cdrvQL62FaU2ufMt1xGmk6izUn9AyzWMC1FmnVyaa3kV7BmBUvtSG3uzxDCWZPDd",
  "key6": "5L82EmEJkeq8cQ4P4EYoGRHyrppe7gu6z6pASGDnuh8AmctdPqjLa4pe56t5K9zgn3UJmMh5Hp4uprzaCBsGuRJY",
  "key7": "3LYY3JLDbqnbcuuGE6zUw5KvH3mxJ8mbUCK61ptzCnGCHeQeApYThcih6zMUq9XxdoQGptP2QDaQx2YtGvx5ST9i",
  "key8": "2TEsfA66d4obNhw8ipqMGKjFbJVoi7ptMgZ7XrSti7Qx4uNFxNqixMAWopL5kX7geCGHUFumBTFSDf1UM1iH5hqe",
  "key9": "2JoHLaeEfLCGwnUFpxeAxFBFypKeDpvbdfGXBTPeoPrmp6iEQFchgdUZg1Wz8ZKPbZ4tWrN7d62NJHt4kLWTmFBD",
  "key10": "5acmUNq4iwsHibSuV5owU3Mseij99fgCPinAwUkDALs3bAayaJeb7B3tx5m6z7vnZ87EVg7zkZ5v8JVgpFAeTqGK",
  "key11": "4p8cDSEbasH8nvCJwFJ537GThZHKfVNmWFdpKSVg1YY5duteVfjd1NnhcfNh6ftEsxgWSNT3KrXFSxV9CjHfVspF",
  "key12": "17rCT43ySxsRArzYPm7SaHfb88cCLEuScaFmaYHRKFaMJbvkas6DsUWkhgQMC8odvH9BhkR1pBAhWEcwssTCw1o",
  "key13": "4K8mLfuNU6LyxsnU6zypEpWDhLRPNC72YXxo5pUKMpr3T884uDjhGjpcAayc1LwsfLxu2RkauTj26Zu8WHTD96m3",
  "key14": "4gSsm7zj2u48heSTWLrhXLvv1deEFTn7gFYSWpQu6FsEKgkJUpvqPXUUkcGJY3m2NEQsZb2NhniQxu6B6qbqxAt3",
  "key15": "Lg1NUKdbjTGFDtNyKU9gnuyU6Uf1QCXA7QfjT53CHpA6ZAndeXT2ZbDT6ckc3bKNr27vzrREXPS6yMEiEtroC5E",
  "key16": "54R7hSjLFBd11faNsDbeU48Jbm6zC282rh9Qzcc2oSn8HBP4yt6B8uxUWCm8zHzDnTJA8vssg7MUaRPDngTfYLeu",
  "key17": "2GsMG9jmgpck6Vy3AtSeJKRXxxnnh3H4Bu4HXHXDwf312NfyDiyxAdPVEZAqcZHChbRQUi5UYYp4gHBiZfQgZBku",
  "key18": "PUxieEURHAzYdRq19wJsFkLEjQpd1nhYY5bcFz1mUTfe79FUWucUZsF3xyLp75KpSqNVgJrcZN5HFNsdBL7pwPG",
  "key19": "4wA3K498ijXPPWuusU7mRGWZ2RZAYYY3gGqP1F5JBc6NEeDb8GJYzDYKBmHbES1RmpwCchfEpeWhfFG7S8dkA8jH",
  "key20": "2koeHwGt7npNSSwkk6Yfq3WHJWWzJDur1Xa4ooE4vPoUkeBJaoQFYmwQh8ExDBFwybepGqLh99Liij2WiJJsQ36J",
  "key21": "398PqSEKiqqSwjjXdxmsWchD3Tq4ggu5RMqu9Xe5qUojMwXEUcXudkKPhUxr8hBbQBwpfpDYjtaC1eUzDTTJYstR",
  "key22": "2DrxAvrWkXbFn647Poy6t3T4iGscgrMxgRsZTNKn1h4vYZSDqpvi8irnn4dQUtMypEMg8eVWrW9EB8631NTDztmJ",
  "key23": "5yS2pkW7gscdWV1itTYbggRWRYnffjxN7G2kXEcbLwrM4FvnVYcTgLbj9qvXSXP6ie8DCSyhvgWHGmZXuqL7AkJT",
  "key24": "39MAzbLUiYx37TGmtspu5QChR5GKgnf3en56ji4S9x7TovvAHH2REcCgprgpiG74eP2yZuPC6DFTBspCo9j7pzuY",
  "key25": "58wRW9f34fczTHTrspGfyAyXJWpSvM8fJhMvfgPwtrMUTGzdKBnPZmbSp7RbdLwKAKeiWQ3yN1gfWiLVYLdka6Vp",
  "key26": "4CLoDLbPpix95dmzUTtwwaxKmgXKiZbBYnabmoQh5J2ngm1X1gpX2Ug9B8y9Az5N88z9aa6jeMMsZ8v41YxM8Etr",
  "key27": "2A5L7FnhuxD3TAFYrAph4mddU7S5hB782x1ZcSvEFk7j5UkwSqHUBZccTMGWvGAsiodeSCFHNuA3Gd3MDppxiY6g",
  "key28": "3vHXPfHsuALG6y4QujAkjR1WRYdEoWWjrQ2qUb76mKDEhALuGg8wSP4inWscxosrCKvLxGdu5NDQqNm5SxHivTB1",
  "key29": "2xYbugu71bYYLBPA6Qo7a4Tj6W2SE2YH2pf68uv73putC6EKu37f2cYZrVnTnu62oSbyhshSfZrHPbA4FkGPG6sa",
  "key30": "3G6tytqCVeEmjETEfVGAZtkpnYAqVNU4sFjLAnzSijpRywLycX68W1sokSopt6R4MHDSX3zxSnkqNzyz5S8GdfMS",
  "key31": "5bqxFPdcLRyzTA4H6ZqxyZu8XSDBJD7rkjuhYRoBRDJjH3CjCF8VAFdrW2XSgQ4BG1omVM5X3MvAmAoEqrgj7uAy",
  "key32": "5fEbNz6DFNybVdADLCQtYWXMQHNcLAc9N59zJkM87ENDbxsV6b7Yh3rUK5kfWCBBWcnNmgoiHc46auwm4n1dnSFv",
  "key33": "59mb95bxDGNrqhF8dTRWioRdXJViYDG5NECi5j9kiHXnRjn9HDNa4hSTp7Y6oNC38yvpE1VxxpD7JhvNDmpZjvtM",
  "key34": "5CPoYuizEYZRFp9mpswSfhWt4FM3fVCC6feYBWzAGoTJmqixAT5E7ZWsSHVthMPxCQRSGYjFgBq8ohVDf5Vc9XDR",
  "key35": "3H2F4B9wTFQVZpQwpJVQv8PT7rwWpaAAZE4WmMUTBDwxJDGU4rTxAo1d1Ye1BqpgqedqSGt6f39KuFWLmSaiKvtN",
  "key36": "2FbJ4KNvexn6NmRfAB5KmhwE6ie8FiMLesHctQnwEht713tS74FpgFGrMfZEjCreee3sCyL9nQ1deCkSAL8nNcN9",
  "key37": "4gXDjBCREmu7tpNWGQJB93WCDzxDUxzEbtxh4PQ57tVJnq7Hn6MNYQhGASywbBJ9oJULD2sSYskckJzPeCY4xwSX",
  "key38": "5ZhWkJ9vRhsG4WqYVh4CY4jDPV7CxY4kRDT8wBkjVBaDdH8TL9DP2zK8KkBsUcvihpTfk8wu52ZC3HVmEATNko2q"
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
