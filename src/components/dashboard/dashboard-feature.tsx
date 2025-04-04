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
    "2p6NNQd6vsuJCP8PMv99eTLQWsqKUfAzEmfDCCYPSGZVMKo4JDuMCJKAyuBJfga3eonK5bDDUmbk8gvzs1srXJwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVKjCsGvdkmp5yVecnSK3q6DAuyPwPSuGnxSU3uhsWxpaLJhQrqtus3ozpQKu8G7s1VZSm2rCoEG6AatpQ7ygto",
  "key1": "3nR89symRGSuBgBWbADeE6QnvLDj8TMBuMhVQuvkkcqr9CDpC89PoxwJf3mz23nn3esAeWbznK9AtdE4x5AtKytu",
  "key2": "4tcic2Ba3Si85DyAjXD1VFUPa5sV5xjMQH6JxK2oExGTX4QFk3mVtVTM9gEf47xqoMax47ne1PEnJyP1ci86T2cX",
  "key3": "38wHfgitDqHp2WgsyGim8PXsYkP4qSCoxeg2BUhXkkTk7nEDJZYnbHcuj9KaayS1SzYMtCdEErJDoj7N2foPxwq4",
  "key4": "3E7Mi9Mj6dD72p67gRq5uFAHqupX7f1xU1LqjBRHh9mYvg8LQcjqbGN17fCELujoLf79r7M7R1pEkqvyazU9QFm",
  "key5": "67KtqbfwHLWKVge1EZ4LM6xE8UPntYqbTxmhhBMpGTmLUcmwGXHZd6DQdXEPbfHKw1dYT1VYscWuoPsaYPTzThgN",
  "key6": "vFTc5U259wPMszKWESnMri6xfFN4LP9RubPGnRaRBPqsKJ1EHoBJXqbMuA9qKpRqcq2oso64JRRzNMNXM1RmfvA",
  "key7": "2JVqV2pz8BEB3mDiPZtJYM5UuJaBTECuorFoZ1oyPHvFUxSyUz7VPFpfg9z5qxVBHKusYHDaYhXEd7fiqC61Z8CX",
  "key8": "5qjHN2SsPtxCQ1kWQKsui6zqgzY5qetUCfSkSeveN4AKaxU9PGyjaHmJVqR5MGnss17AkhiiLEB7a1vqR6AvcJ6M",
  "key9": "o8cAv8Wh7Gfw8gDpu9VPE9aiu5LGdNdQdxHRvXyStzFGTocds8Ec4kUWbJ7B9F6Z4zxLtguEd4XndxCYcBqyoEs",
  "key10": "3aBx7eG6W9GGbu4oe1G5q9pGZY3d6ZkY9rNmcWiZFhJGgm81j33Fc9U6v5fn5T9vndsvCU5EQf9ntjWkwZchRkLr",
  "key11": "3zL6bQsvnqehxsfHoJZDfjPZ6P6J8c8yTp3nfMuwSwbdsjxUawoPd8HRjmSiE6irAgzUhnYTBKguGwJJG2HBb88V",
  "key12": "26XFkyywTXhm55WJJfDevmGtKSTWNMz3rUz1yQTZz6MyJhQ37yuybrSeq48aargXTPRjV8XXPWxRiHHCQDAaCriD",
  "key13": "5ZuK9eprfc8i7fFhbFFYynkPaT556gnt67jzwdJ7ojQSwfm5GoywAN8Hv4WvYmpUwop1z91JbDub2rXZmM3v1YNN",
  "key14": "5gHPEka2xU81amjQMUkvAHu625tBdfxWt6oYyoqNKDps6C7icdumZBzLuwiWHcpxVTk6oUzWrkxotx8nao9LiM7g",
  "key15": "5mMM9os5QWS5dgnHpcZkYceCXPPLzH5pN2n9uZatwx5TJyNxbsojTTFddauYiCQM93CzjuQRuh89nYjELrGrQaXu",
  "key16": "FuwZCd4Sb7oVJFJSWLEwd6Nt8nZLYtuobWS12ok9mB89Y3ATFnjvA4LDfJ6kK6rwxdVutdjTcHQf5vgfSSR1ALH",
  "key17": "4byKcNW8iRPENtW3Rwx3HEbfU2EpKKqtpRfSZJgtXExfDUeKjpQ1XsujDgcfbND3hC2perG4YtGSG73FZt7L7nkL",
  "key18": "4Afo1cVJ4tUgm4eHppBXc6mCJu7UBX7mSx1Fa4tUaHykbYXBChegGW5bGFyLxsDkvmkfZK5Q2WrCSoggkAB9Ustb",
  "key19": "YYmsQbSMVA6UWL5Afjznvv1ofpmBhyxYy6MZ1PLyev9RVRYGu346fBKpYqTbkNgFPQiMhfDU2ndvHXR4dprik6b",
  "key20": "59UoMpVxTzkfrXEkdSdaEaaEsJKuELyX1StMTxPTCddnpfcVWR3eLrWnrJNTyDKM3Vr3UhSeUTq1sCmn3HSdgNFe",
  "key21": "4SV6z1jZBZKnh4qkVaSSYSkkDhjSv8MfWBuRvRiW3xkK46kWv7FuTN6vQK98J7wTqZtLnaiVB9rWh1aUYm2XiTdu",
  "key22": "66bLyJCvDQpdvejZ4iFVAFYUuLvLZruz4qmHjWRkMHTahT4xfxK6CyGYigvfisrQpkq2PaH2VfyCx1tdvDoKUY4Z",
  "key23": "5MataG9roErsmVL44QJivWCMWN94XtfKVTY6rGbY87iRT9mqMmzxjDXdqUQ67foqcbJkbv2pWznNt4Gqn2ujNcuD",
  "key24": "4acbFWj7jKifzwoZn4dKqhQ9m2s79ZobtaJWg2cBQ68DAZjBsdnGc6bcnU22Sq8qa94wMoZLg4Pg3eMLiun5ua3N",
  "key25": "ris743fdzSeQbzts454quFBptjziGJpKiCTseapeCzBEcEzh4AQP6ph5hNQEJaQLguDkHJDKmXPDLMxSFncnsAW",
  "key26": "4rKBCXzjaKSdWcMNPtFnZbW4SGquU4AYULDBDxgeKbUL5qGz7Dtk44NfCUCL8yWEztnRCz62anWw1Mas8ejFDu68",
  "key27": "45Be54B9XaR7HmJwvkzMXkcTqAR5vuP1NdVJuitEobBgX321JrEcer26DGNSMwBQhS4pnfmY6rKmq4oXMXsFXaqm",
  "key28": "5Uw8sTx8XDakBNoDj2VYJVfDiKKizXLVSQS83LRQM9FxPPULn6Nn3fhZ6FyhgNMqinaoJfkAbtjt1N6DYSmmnxZu",
  "key29": "fBnV4mXrcPFUHF1ut1mw2vtFn6cadWoL7xnWLSrp6bWh6u2PVJvtUqjWcdGsRYnSFjkmjjveKebBGhFABa68ot7",
  "key30": "BEaHvPQ8xnxr6Yhc7zdvUoXy7WdUmdJamwqWubjzKpU8ehnpYAaw7N1Hw95HixrUm6iigtJ6SYsd7p6kVC8WSSg",
  "key31": "5VyLcZLaBNLHid73VD9pwKZKX5hjnLqSai6LcizsTsJgunfyg7orba62R5UVdEikKfExCcho3xDJvHPieKr67ofd",
  "key32": "5v4srQpwRPYPTdz5DiXwLeLmAC5GMzjaMkcwBHVCvA4Rfz2NTa4ntBbsaTjrAH3Jg1CqCwxErJ4y5mJHweRSSygR",
  "key33": "4vb9dktpFAEmkShZfH5RDARXi8YBLtowvqkUtqQLFdc9oJ8e6e8Phnr5w9CaYq7GMernsduusRaMQ9M5jTtkZ3Xi",
  "key34": "58ZFD3WhaJiY2WYD9k8EoZvjBsG56K1ZzNXfSAKiEtHvYzwaJxm13yryEHYzA1PL8CtGPkxGeK1tu97hVWdwa2Fi"
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
