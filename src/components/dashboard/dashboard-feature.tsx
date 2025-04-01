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
    "5Qt2kHp68f5wbeSTf1hqywnVWxQCxLeajCyDwBCKd3mpp868DQ8UnevY1MQhssV6FVGeBneBKEByrJDx61vRyj1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vRVEZejfwMVmBPNqgEE2LUAxXGjzhHtJqFx3ApnS7iXTnrKjG9hVbmAgHasiAZ8WbGVRVcvW89zm6MQQTR51nji",
  "key1": "58dJXZtZ5C7PLJftMCncPU58RjYfvZWVuS1LEp8U9pWLM7HnWeNeyCjYSZminR9drBHzxQTnhJdwfxAvNUNay418",
  "key2": "3zDQRSdUXitaipVstZgGJtFPzCJ5RuhAvvaBwSmCGCtCzmPQa6tnH5rqPdbEsBv7xyKQfFSvnJmAuDBHWrw16hL9",
  "key3": "3rYpVAf9VUEA6KgoxgKNCALEvnnGsrAR5hpWSfARrZH75CcMb8S576yXtGSV1C6Nwyy1cmYjdVKYwjBm51F2xBFR",
  "key4": "5kY7jEMSQuQCFSrzHZ6uAYgDxHdxdwGfTY551i2kfywPSMGYAVbJbGrwt2UDGYoXXmuM1C6RZv6hyzMhvDinzUXV",
  "key5": "3BRJzLhu1Y3A9oziswsbAfF3U3W2L3AZ8BkPaH21w8fXb3T5USK26yiHknZ4DDLVTsmyYdFEZFYpBwhNZBXj85Ng",
  "key6": "26dAAygz2m6rvtfozU46HkmrtYHuYjDZi4abbyMb7KixcCRh14npQEbtiZ5xgaanPubz9MH9YcZdzaU2wrut4UTR",
  "key7": "4APfU5u7jFdmUrhtXjwfydEaWEMj7LbPfVAKYbbkEne4iXttLou8e41NDsNLdt3Eua37BoBniUDacihb9kBkN4Wt",
  "key8": "8wm1CBkwjGppzAy2YuHYRDBQKk3767mUBrdRPQfPoFB8ZDm2SXGry55dtNJevPpQhz66svTXxcez1qWDXCVFxPu",
  "key9": "5dQzAJWSngKVSRjM6cHV7FEtMFmZtvyAgCcmxXxg8VWDBiDfnvCeEFkecFyyLBD3A1RmWCDC8NVuMDvXnbu5T9Q5",
  "key10": "3DmjqVNnz6h4EfaLrMPgSo88mKCSYGJ9YpR5nAQKwqFDHWKh2zSdsmXNip2hjpB3jghoFM67oi2YuYbYwVwJJvUP",
  "key11": "3udCT9hnHznYy52fXpZya7xjrBUSKtsciKiXuQ6LbFWvzLiruY83CsfhtQTsDRLuF1LXGza4vLK82JoCPPCNtRQ5",
  "key12": "5jVVK3BBFBzSzwZnxjHi5PXNyGUyEgYgbzaTLSEv6SWEWuQ2t4ozp2tTorWDkvbrJNWSg13ZqJ6b361Rmnez3sy3",
  "key13": "4q2kL4MAzay7BoddYVHSXCaWcGhBqmS8Tk3Hgu2t6K3isiidHoed9MXRFXYagzdtHMBH8f6m6eo3wFEFrj5duxg7",
  "key14": "EEaRMUDt4QEieXYAmoL5pt426kKLURdceNGND3ufhk9YBAnE4KqCMfD48TBXVJTqCxaxVdMCCf9wgh9n2AEB1V9",
  "key15": "4ybbXmv9Ap7LMRnFcTEfPkTECP8oGDdwzTNEdYfBsJDb1rhEQrEY8w1ZwYW7bcbGLg2kxmx4jesU2y2b4peyg8Tv",
  "key16": "3SSiX2HoSPsmMW7Z7qboaoAG8YWXmPahh8ZFmfZyK6iD4JbSMcGCFtSTX1UcQe6u1hPrCRCjHFWfGpVXYnZ2ueJz",
  "key17": "2nLvhyNyWVUATezecaozsnGMQXRmcfSzmAuSfVXonGuMckzyJ2pvenie3d6BeHtYFMWiz4DsGLKVFSwa1vrQaQa3",
  "key18": "3mCGrwzWodD3MsZJjB8qTS4f648BKqo7GVc54PEky7tmq8wvNcDXbtRyFUHo8MpUcBvb2tVMpj7wRdvuHNkvnCQg",
  "key19": "5jtpVou4DgbhavvreSVxrEKYbHPB2pXdo73PGpkMypNoXWxdx92aQSngUfqA33s7BYWZnPfwz41cPh1mysYvPUgw",
  "key20": "W2WpMXBUL8641jfyA4hCkR3PcSqUP4hceEuQZuFQ4emBaAchd51Pk6enLYZp77D4jdgApPS1jLEc9oAg7PQNBis",
  "key21": "2f3BLFLTfj1SKs97GZRJuS3X1sB673ZoML4FrmctLM4WSKGZBb9wkE46M4ikNvm1qN3jPrg6nNnC4ot5JSfhVu3W",
  "key22": "t7NipMgqnYooxMTonv131G24G4n2257LFRwQPXbueDM5w4k7jAWkusvbicgkachZ2ouSMoKJkVbzVLfW6jQN6aD",
  "key23": "2GaKMYskBvLKhsDbSsiEqU9Qn1H5JHbvWPuDyFez4hjTiRrtrfQEq1fcAoZcKm5i6V9FuWyAkaBivkMAteq1hR14",
  "key24": "4Gz5CBr9yQdpd5or1igkZkZb8ax75V4UuBMNao1pKLxYY1WsapzuvWzcb8axrE8segTdzL4CMTACJDFFxFDTNzrx",
  "key25": "db9oVN5UPPoYh1crnYFDkV8JvZ3iPNpsokk3hSRg9aJfuAejsEyNsbsZCtXibVxpPYr2HQw6E1cxZd8d1d37sWZ",
  "key26": "67hCvncbJz1vSiBJwg6oKytoYFAyXK4c6ppd9DYpGLrxjPkYeN667mvodXPmaeb1hhQ6uYKuey3nU7Eu4j3iRRxw",
  "key27": "2nBt6RSne2k4nufPTSdQJV5FovbHhDLsghjKkwZZ3bNkgcSrnkjFQJhTkrnQZu513iFJtr7iNYSzGWf49iZZJPNd",
  "key28": "3v63jFJyBaNu8NbCZ7iQqUPmeHPqUuSUbxNFEQ6KKt6GY3MAFgTyAnTRVQBmoTmuEfcEgJxgYfLxZPMUouxEW1uP",
  "key29": "54Exv5EZNVC7Lf6h4gWYewnE17cNAVc8fq7GwsvxnbVugyKZqtyWAUhWgj8m94BCmgzKBNxV5J9oywp1yU4MFQHn",
  "key30": "3SCyYiwYaqNKaJMW8AyHjaWEsqTWMqvVdwcMddpJwaNSQrFfDnHUKYnHQfA71MdvhjQMe8By5hDCncGd2NCMdbhY",
  "key31": "2Q9LWivE51RVNmQPe8ruh8JCCGrAAMzuKXYfwkk7Ch2Q6q6PaiMrV7iUDUj8Hg3NmfF853WN1i3WZsY4GeYK5ogA",
  "key32": "56nszA1M58stEhmoDPvhkH1Cw6JhaffwutnjdscRwR7rHJkvswkPNi1zz9t8DFAMsu1uiZyzoptZ7iTxbbs7aVVE",
  "key33": "AMfidC7g93jbHEWuKuDk1w69u7anRZXknWumRq8NF9PQM48L3yeCSU94BV4GpyXVt5UFn6yPhnofiXkcYZkU3N5",
  "key34": "aHUpMzEX7JerHoMkcwMnbg9hzygUEqZ9SRptXjuGf85GMxjhrhPyJJxybGVvqYxTUqDL6yXdTM4b2Ttr9vjdVor",
  "key35": "3CG3a2wGjqda2Fhxp6Kk11WTGwr5Y3eGtCqVjdpyzmunotMLTyPczC2kuaRnUgJcVfwyuNo1jRH43bHWtxKuc3WQ"
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
