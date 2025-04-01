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
    "3FaqBro4rpwtCDGaEhUasGUEr6HzdPVzQDzzQQ19DNPegJRjFVB53oUMyKYhzhys6hVvoGMr7En3KZJ48Ee41faK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFCMtTXZ45Yq2fp1WiP8qLQS5M2ggMZ1gpr27sgQVrC2kpGcousCionVXMXXnkxe5VxrVLr2XrAm3C8YcqPrSr1",
  "key1": "2opm5hX4HT2nF4MjALNVLkoR7TrKmN24rasCMHtBMAoVgMMpf2JsxcSv49HjAJ7KJTb4SB36LporptU1wv3tJqk4",
  "key2": "aRbEZVGrxM1mSASFopExuBBQC3YvzpfZayJCMNKMgZ1BMT8iwJiTsVWMAkParrc8TE2XgJ61GtMNTDEZpaqfG4j",
  "key3": "3zEAcocbJAYimWrjv4UeUgNevwb3T5q97DA6RyT1WbEJjM9aD9v69tyqPBDXnrPHqEtGUwrVuQvrWpPFDjqZAP1B",
  "key4": "4BJnJzkeybRTcx4Pndd7XJCUoQS7sDQ6n6ZBAPJvBCP7SNS8zpuh1KP3UHd6wKnapt4Hm4MUJDkK8K2urW5cfznJ",
  "key5": "2oAz1ZzHLhn4MmYdh9TEjNtcx1n8r3PLLXEpWfnx9nEhgXTqWnwZQCQBpsA9uMHMET1jh23PS7dzo8abYkL4Uvf8",
  "key6": "5oBtFzmC6MxiKNYZi9nNHaATPrh6xnJzZWfjMyDUjaVesA2HGcHFHtUBgCsFN1y2Xvo2w41EpW7oQNPJSDxrRwU6",
  "key7": "2mLjJDPms4uCY5823PoZKUV6ub4RkApi3iK4Z6JWDsdciF8CfDXsue9ugWFdtqFVszc7G8wK7Swi3Hp1EHhJeqnw",
  "key8": "gxGeVQxuAfru8Qf8hkG4DuqgEtUDboM8B2m44ht28eSCFnQH14ZQNBWPtvDf8j9sapa3jpEMVdsKTuKTbskqR7J",
  "key9": "5UW9NysYjpdaX8EKCrqcPH8eBSaKEK5tDP84cV5dK2ALQxreTuTpbDnhuzEkKRKaviA4taHeuPKMWCRaXaYxMhKq",
  "key10": "2AxqCgi27C6jT3LD244R9RCWA5GXzMJ8yKkoAZuTNF7yRg425hY2d9mAZu7sjM1pwhSGRTJLdQLETmSCeavhbDef",
  "key11": "5b6pYToqrY3nfM4st4zFriQUQTQWBL6kkxutCCEHU1eEJd541u1kXJAuFo8qGrAmQ9yfyWBCKAVFuvPhHt2pBjkT",
  "key12": "NN9YwUZ7ZdKQL1xkYhkhePR3GkVAMjnCJ2FaKuqLDFNbUeMueVWTvaTEWwmPmduageDJ4gm9EqU2ane7kxqNSaX",
  "key13": "2sUAXUH4uorMTbqBJS1aLe7XqcmwEoZmFH27LEi1Duj298JWAeChwiQ3biayaebXnqx5MvwfUnWNS36kRTS2kX1R",
  "key14": "4vZzmKajbvVbgzJBRgwKhzzKoxibowyS9ewn8FYKgmQZPqggMg2BN7hRXckQz4127yYPDojWJy3EatYPderE6Pnn",
  "key15": "kx9X75SxWMQnynMvZFAtPGuoyJrKVgEGnMmn81doHosCC4b1NbSjsf4QbkPoaazcizoYg9kPE4C525L3FxHnrSG",
  "key16": "3yvnfN4rZJMYxHDaTMrmD6vSZNabbrxxUSeEiXMNXtVKpcqFW6Dmo54bikPCUzijd4iCNg5jXYDdHGhfcX2L3Mzf",
  "key17": "5VfJZSBjFdXSvgyUHoqsYRFoSa4gduNgc6uZxhnpj6N6GkbZHzpWJLaf3MabA4rgSPaEnufKJYznydiHRRSMADsJ",
  "key18": "5fx8Tqw97qdqUZUYLFXj43y8Ba1AiwKHftMfQQhFUEKd6KcXbyxgLKpmjV6SRisEgKnR8R3g9cHKx4K4iAjgNaXY",
  "key19": "5K3tdCZ7ZMGzeLcLhFS9qd4T6wNCQhnyTiE2vTFvNYny5zBUqos42xdq4rxN91ViJY6cwvzCY4CqKGSXVsk3RS4A",
  "key20": "3D1NQHmufbrjuorH4992S8yfqZtr8BtutEFM94ssD8JeoAEvq6RTYGhekH1ACkDMroRJV3buLeNSWxjew86FAoEF",
  "key21": "5pu2Xhp2ToUUf45huKqWSgawjFkDjDJadzfiHEiP4BQeebVKBWBbq4agtyEvJxsoHq2WhPTxjBpyAUAwe1A4BHKJ",
  "key22": "65HDP66iAJztA1HaaNQLju7sLxvnsvTgSNSQB6R2wkWdLb22airRNyn94saNF92RFpJ2VG9s3XGzCuLKsx6Kxscn",
  "key23": "3RA6Z4Q8GHocFHEyCZepZaYbod5jqr2p4DhqS8X9ocRpNN2qzyRAbdyxb6tTTgCDk3DVz11kiW5X7jU5bg2gEnBh",
  "key24": "3iVRjya4dbb1ykm2ZcDGos5Q3Sh7WmNwjeUsQ3oFsabEK9PM8YyYzYwTHooRtimfFA7QCxz4Skr9BM2Wm7nsyreF",
  "key25": "4c1p6xxiEpvngwAhitskC1K2LymvEqT74zsoMUSVmo3DxWPvPjtuCjEwQ2TLQ6Tvt7i7weg55Vi7NmiMSH8NiVuM",
  "key26": "62ZveFcsLGa5CLfpZJP9MK9kgL1rHQj7hEt2zwpBsqRtAyDNhrS8sD5xoQPADkJGsmEyHc2ZzXYMAoQFgLxPd1nj",
  "key27": "5sxFpncqCCQs3TUiLSkJ8fEN34eRkLPJ4W2jtwviQEW89u3arAXpFXUmoBpY7JnMW9CfFipzywxK3QmDijyJqKGj",
  "key28": "9pMvx1TgtMm2zJhnXTCfP7DBuG9xymaV7MfExpBoE68a9qaasUwnxpJFDFiXDMs4vMsE1ahMkmQnSsym3SFwWFM",
  "key29": "4kAH5t2rMXj6RznPn6n5z8xaHeASEg2cSG82Z3cV977GheRVq33bimfPKt4U2rCkmAv2iErt76N8E7uarEoreoAP",
  "key30": "5nPXvWi2NsqxiAK2tNXpZbTC9tt9su6rqvsZZfSWie7R5muGjfwZBmAn5TYY8QS1chJfbBmpMzFirvuUvcBq9SHH",
  "key31": "2SC9ytiQ3UXGrsmu4s9CwMcLhc4fTRHSmqAgJFx11CfTEyHB7RceiRUuiB4RzkVcqNM2yGAnZvF5YtyTu9qxmBcX",
  "key32": "2MgJkWf3iSccyv5yt8kZTxMYZbBKtuNmW6hmcTjVn5s7vokqu2ZzMYXLipw7JJaF8oobKKLPTWpL2z5qeBi64G3e"
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
