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
    "zmj2TbRzmtEPJx1VrfDP2c7ngzehDogQURTAPRkFVejb232zY5NTfUyZxY4FkcN6Avefo5rSvRXFt5dbAeZuzsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmaDXyoSWAcDX2EfmkVFiN23u52skeuUUWvTmCZAXDXcLpZJC5JrfLDkS9XaVjMqHwH6J22euwRNAC7MmvWtNQn",
  "key1": "3aDwZKkx7C4BXZHkUqov8MKxBCeiPwhhrGMDAYgRomUPxbfsUYAzb6csCCyTfy724AU4BF56USABbaYeDx5pxcG3",
  "key2": "5c2HDg5kKSAVinrVP7TMTRS4QAcc3vFMtCAyG6VZEmrKWx8ETyhWC4oYsiGGuREivxuBmrphPKobv8JRkynP7JrD",
  "key3": "64JS8nk8MuHQUVdgvxQ771NPMSWtVb87TM1C6cySSgNxRvW5VBiVXBzZQiFXBfHJ5J1FZqWb9sboVEmtCUaXPCoc",
  "key4": "5cm8Q5izUi28p3mhBWz7wk3skCVSUEgjeBNF7vUvcmN4ewSaoec6eSNV6jTb7HUS3n9RktMQsAzzaDJF82RBYnfT",
  "key5": "62kGtf3v15BYbxUHkHNHs2x4tgkgHdFQiLQQ8HvV38eaFYqXW3S5BXZ92vWDBAzTCjieCXF5nWjyWHUCA1UuEjrZ",
  "key6": "DytumBWWB1imwvXUZcGERH2qXxBs28h7KjYs55SJbHas1CAsvCucfFZVkMicbgvsCuLwnEDAfGDx6RRhcz62Keb",
  "key7": "3cekmgybUh5Lwp4nDPFojZW6ehNUbTV3akQ6B4H5YDP3XfAT5YaVWfV3BZRYEyizM1MaqbinCmi4C9qCVd8GoWnj",
  "key8": "43XEEvYU1KmVPf7qvkM4qKvwb2hJGcfgmKxg5WTTSg9QCcYkkQrVQUqiMRtpYyh1xQiyLhHbcVpCSu5xz5ZAs4Ve",
  "key9": "5f64jXstfu8LgJmDEzfdaqnGztryM6CwW9zUAHFU5AqmtDSxAftwTq5BAXpLhgXmzpV6zMiQHb21PB2h3kG9EmAb",
  "key10": "5n7MUhN8B2ARxM332NSUnH4hcCZHoYq1cdvmR526gKVCEXUXRDf7kw49nUEr2W9DEJ9nxfhujFiLQf68t4Peti28",
  "key11": "5969JQbWRMy5R6etYKDYjpth3KZnPh9gyrkQwNH76w4eiedmPrQzhyivaF5E79ZvFcrs7NDL3Hjmo3NJNePiXKGL",
  "key12": "4sdWtuFLJetx1mP6ihEgr6Q1JLPPvdi95J57FMtPDCCJwSinW8xw2iwaw6p8Z2XLL5LxDgbj2HUqfMibHLCZfAmw",
  "key13": "3uCy5udKXSyR9kUyWrkiSzjBjMNdWRwb7oaH2eGiVChG3WgF5EPariTQtpJWpHTQwkLPdfECQVTpv3JJoDdyNpZt",
  "key14": "rw5Ev2kpU9xULNaUsiFfueYtBf1hG3fNvGe3U7eyUhubb2gRbaZ7UC6tKwpQNp622869APvxz4wgBpLHBtVE35k",
  "key15": "4ZVLD229Mb5q1rEGM3MT5YxsjAC7G2nbqd2cg6Sifhvyq1WcCAqsKp1xRSn4eJGDPzsBroJ7zcaiXKxoEHL9Pfhe",
  "key16": "4DXZz4MbiP2cGamBW3fp25rxuiYdtNS4FH73YefKskL9XgSSxa688minMfzy1jjHFxPQanvRfgmUWJUNP9zcPsaq",
  "key17": "2Ca7byUeEfnZqq4CN6UZMJpPqRYjob9pPTMqr7iGV6KBC2YGGMNANN77NAQZYrmkaBMERVpHyfscjZWvWgacjCBj",
  "key18": "5v8kdkEoNbASVLVecnt67Un9CyPEeWDSLoWsimXQrnaSkWs4QCRZGjK4z2zkRhLVistW5pZabhpetjco2V2cXuLX",
  "key19": "5H7g48Uo5dfa8Jz84CWkkERW4yFQshkuoHv5jED9jykajGJE87BGWnqsdWaBhL4Hs4kYQCW1fqQyd8zdZ4Z4horH",
  "key20": "3ZMRbUCCp78JfgXq34Y3VYkM42u4nTUc4oM8Dk4L53cyUPf1FVa17XsUYqmF3Pr3skPDFVU9GeWXyTowBvT619h8",
  "key21": "3B7Zwj8yBd339xvm7jV5p9B5fqrNCkUGeV4R9bMtPHaCvtMJd1BhFs5Hwd7mfsy5CrmXUJqwWBMDZqqMke2dJ9z9",
  "key22": "2Qko7h6NEPBrXx1qhb4eN8HXdyMC7G5n3kqhRqCkEFBz83XQ2KmntN2YEq2LCo6nQA6MXHaSVKBni69Xqtb3neLP",
  "key23": "2Ee3zLS9JtXoozPsBDKTncXsucjoz9j6Ki2RTTgp6JrE5UjwgdCS7Nqn4uL3wMDEYsRLA7ZpUH3cuBcdks2p5Cq",
  "key24": "58N95KC7VzN4asyrnRSXmFiFPB8DRVAt6bG6bPaZW7wPwt9MqKVhnRVmSzuJSMGuyzEno3o3F3HMfmBoReZEDLH3",
  "key25": "PGp3YWxbEvVFsBwPDiKJgv2ubQs2s1gNZxmEenVGDx8ThU6Yu7W7FHdQrCExaFBpeVzt7vWyduAbawmNdrtQxHn",
  "key26": "5Ems7SV2W4L2yX2a6ow6v3WqD8EAr35ec2jduThQQj4VUHqBrxC2Jvz8U5bGUvczDn7muK6CSF1vBEo5UfQSMUnQ",
  "key27": "5n1Ce21TbPQMdBDSR2BPn5hxqYNuZ2dGWLKhBGB4UDRBi7tnLUZhxvq15zHUsWXU7eJobRJCwixCS6YabfrJdJdt",
  "key28": "4myPzC249jUbAnF9XcXqoVTr3pNiNa3bEZiQwGK7f3h6RjvKWfc9u3LZfbqBcjNkRA23MchqXAdCeo3saJmkYsrW",
  "key29": "UDaQBhu62TaFHQWGJX1ks95qXT28j9BLKByWGYqzo6iQ4rDfGyk55MrFWcMnMdWsoDwCzzK1iXfDfc8sVB1zrws",
  "key30": "3VEHha8gifs49Bp7uGqC94CRc6ENfBMhKzTwAUEfXtJpndHAsboipCGyQvgLZpwYKamMyP6TUSNXKyTz2Jd9d5w4",
  "key31": "4VgHygoUvhyCJfrTLGVuzuuTWzxTUfi1n5EWhYVVitDaVP4vTk21Z1h8zUVs93zo4dUbvXkXPUV1KnVdnHpz74fN",
  "key32": "3ZhkV4nkE6AWrpF36CFVFE8hkK4CmK3uAquZeE6cRm9WcqmFaRsyemHXxg1EM8Zj8YBqamRgzuyusd6XwANE9Zju",
  "key33": "2eFqbRpduKEJPwRsVgq3iX8WBvwAAre5fRTrbqDAkxxSycJNqoGKsTRy3DvWHSbCg1VaWM1PZKGtSDjBkATasNQB",
  "key34": "4ptCUyi16T9oJy6dgfHnFdVsghQZgHEdAVemVPktLTSKUc6vHJWMSQvwgNz9dBJUxu57Awwx1QzCGNctkGA2PRq5",
  "key35": "Ja3proTdNyCrbgCcef4Cb2FG8iivNNM4huYavU42xZcy6zmzBW1C1rGBx7aMcaJB7VAHkURcxaHxPyf2q8H7AKi",
  "key36": "4jv59RfP2UnfdvqWfpYEZYD8yf1KxPnaMWV7r4bJiKZdKXSuQeiAhW4ahBY5mj76TGCxaoiudjNpJ9L24QWk7H17",
  "key37": "2Qy4poRGPnUCYWEoLui31gj7pNgQtA3ZLu1FApN4unm77LkS7qFDvd1ScPgLZonydEUXeooXB8VToJc1oyLmeKzp",
  "key38": "Y24JeHhm6vyJVGVwuSJgtskqBsaxURhubMgQ1A99DT5jwbQ5tGJ1rS8BvyLsJUfykgZDLTafTZUAHDxdPSA1599",
  "key39": "4JSYV8cKmV3jD9cxbjFjZVUZFJ8Pnd2EgPwN7sHeBJNPvunSaeX3PHdgtHm97UX2afFHecfftAZMko4DjykDntqY",
  "key40": "2EHwM18Z9A47b1q3TUH55zBpJgkDmCvkNwdTBnN5RyheKKWizYekgTnTQ7R8S8DdtodavicAX1EkdVQ4yPTb17i6",
  "key41": "8nzr6MFhCpsHpXPitgp6pAE53NcHh4e1of25nF14mMZX2zsv4jrZpcewJLqL3X8q2ovcX5mM8mgj8bwB2FmZD6j",
  "key42": "5GCNHpjXcDeCNbT8UoQG3TdLaPust5DyLuZH4XSDqTdGesrihVM2SQdjgz49CKqLSCZ9m1N3FZCE5dZ6UfF64gVA",
  "key43": "5LVsM4gMFRxa9UsbhtRATBcniPyMQqxCHqkLZBHsDafbtixbk5DNJqd5YWKwWrTLoGDBNqmso4F3pBF49zCPMgu7",
  "key44": "3oZUk29KR1ND8KFfAx7PQG8nHH7jno1fzBVgZ1Z363yPPZ9ZE7vHN4xW8MD8D9W7XV7oLa2T7GbKasK35eu9JjUr",
  "key45": "3X8mDYq1H2tsmcmEhi7LvnUGyJsYXAcky4ribXDBwC3zg387nXJEFPajSNS66YAJS6y4GTRBqNeGPrCVzt2amcxx",
  "key46": "2H2p6xYy52vbJ3fPZ5628gyYSyJBXEs7BdL5yiXDi5TGrqZqbh2Enuf2NQpJZ49wPcsvGZpDogGzCudSHAPh5211"
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
