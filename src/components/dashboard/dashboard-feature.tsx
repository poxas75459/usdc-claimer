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
    "hqi3ETSgdrRpL7gGyvNDTb5rSx1pTihQzHgbdg2mu6WMeCDLvocLZbKQqpsP32kKGDbmeqtAK3jsBVDieq4mkZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R7FaHoyUJZXXMc1vxyLoAEXa2qzZYDaimwYF4vxMiJdvJXXuTnnw1BrRkhNdVzmnaoPoYTGehDoQDHdFfyV5wuv",
  "key1": "2a3KYNzFtrCf369z59NBc6T6EQwvmZshrnF7pC8rdxDnv4kfGEHZWMGQZrb3AQaZrMuDQXM8B386oLVrsFT6pk19",
  "key2": "2NmMHJ2Wbfq8qqSrx1qc652jet9m4epyPxBMYP9yPRekWXd5tHfveuEQrL3qn1uphkcCRRmueWe7uMoV3tvGDKTU",
  "key3": "4URxaLCpkUTPcLgoBRSCy2RwNDLndKQh4Kj6kE2cCgXzKaqmKmkUMHtu79e78rvfh6iD6fAXZNKaN3yBQjpmk2V7",
  "key4": "3o35wUqefz8TZ9YZTYfstq7iRARZY6oyRn8ZtwC3nGkNodUW58qJRbpMj61v52D22xXiethczQP9HdgBZKqT1He1",
  "key5": "42NWC3XWtesmRZ8pq6mc3rZQRquMMuKTLRbKQCDRuUR7gQcnQtQheuNLs6ipbYt9BPfJRuAnxgJREGkR4x6JK16t",
  "key6": "4shYvCHEGuVTEwXcVJeaSmHy1oTAcGGg3Z7a9csQoyctap2DLZtN56W8myHQKJKwT3yqMx1HZX6VwaYab53gWXvs",
  "key7": "4ovGrDsPViiGPcwfXGHb2irpk3fuJwcih2gTbLEcbTHn2ChCozDQvawcan5MsLGTk1wH5UXtsSiWqqFtvWmAWn7b",
  "key8": "5w5JuLUyhopvwJqqXeDU2t1Ta4NAzhaCu3gKPsRz2QxLUoWzzHTE2iaj5nsWcMS6EGXbmosAsAjatZvi8wL4M4f2",
  "key9": "3nxpWbDKrnq94ruBrcKnhMxBL1t6BsUUpWgAXzvmNrfrkzrNwPqQeVex2MNcVhNSnRjE2FmadUWJEwVT3D2kK1DE",
  "key10": "2ftZNpHU8EmmZenEoW5UxQ9kS9AExCbtPzQd8B7R7KvcoBEGYqGJi3EjhaCPyTYxXQN2W2pWtCVaf8P3sDtCWE88",
  "key11": "36y5umxyEDKkxN9VrzvDXPn2z2gpwLrkXpyTm1KwJVBuYAvYP3VCiFvcKyeWre8xSjTg9LFeyhbfvhqTNEX14YSR",
  "key12": "5F5RE5n9yXXuf5Gg96GaFMoRR9pzGqC2zy63jK5LJ2hUksybuFYiYE7Xeka43VBNTHsFVzdqPCPS2hBpUZKcLkDK",
  "key13": "8bqN63zFbLmrmcPwgPDV3ELdko39hd3iMhnwYr27yzZJeqTTnUHNJBqjyWdviDuscMEsY4ESbQGDGy33sY7B3u9",
  "key14": "2kQC2WtbePnJree5mgCXLYDZsscuvy4MKaDcA6uErKgU4nkJBHDPubhYFju3N4icEqEZrtMZALfSanBXeJuuzvQD",
  "key15": "2s6GAtrwqjdTvnGXEuJ5J6YpguoCCyxpWNjtzrF1gvKAw1tGe7Mhd2Wnmbnjg5mfVQcHZE9dFFfLq4CwaAnkJoKZ",
  "key16": "Ai5P41hJucMD395QLwaFEHURS2YMSMrvvYyHW8NHaShj1HgDB5hAqYuCRCJ1K8XYn3RfUQi41j7uBVLRPK6zmqP",
  "key17": "3wFxBWLFN7exvPCdTMmv5PL8mkxLaLc5YujWRBZPH5ULveakDCvdiTkQtqVGYFUsmWmK27LT1524rJvfsX5QaCKo",
  "key18": "4nXyZK87rjfi482kiFdLUicVPBS91UU3CnQaYoxHeJyhh6KuPFB9Gu82WanQ7Yv3WemsA1PveE6BBRGJwFDyYsCv",
  "key19": "4n6mqiGfJAHLZ4E3vJDXJg5unEM2Ttow4FaciKSuwm5377TYrb8uyAcBnygWQWwygcmiVLRw3au8uM3wjBdda3Td",
  "key20": "5dPnfKPh3DUaJ5n4ex1spzUwGiLtXmE2KgPBGmS1xxwHRGfpdnC7wkqVe5YcMqS9fh3wHyocrn37hLAjC5xbgQoo",
  "key21": "4p1WSEVWR7ifWfuEGbS88ssErvRH8aFDGhL5WxwQ9J4m87P6RgAr1ZnUKds7H7aWKFxBVB2MBCErF6ceNEwGqPFT",
  "key22": "5u7vpvPESqBsPubaVTewKnoqNehtz8NQsK2dqgAg2CtHcGipJqcR7mDYGJVP4EkP4VRAeKnr4S1B4qx8LzoCQg54",
  "key23": "3SYtc4h57t61WbowopqyEEmhFmwHA7rJbRQDeHFex8pQue7Rs9ce9qZcfkJ3qY8uYXVTkNcy9AUys9P4RrRzx3Fz",
  "key24": "dvqx3fJW2PUBrHqr5gtzojsn5EfVKWrzeCRQpYB5mqbmR539y8fcqiZPpwcrLMU3dLoMfEdCsUqBb9Vsz44bFQa",
  "key25": "5kwd77Fam1Gkim12GMCkvkruasM931Eay7EpB7k1z4WZwWRmBQKM8dNeXfNdXWKbthoWALekZmwe81wqaiF1Bzyk",
  "key26": "61PsSeZCSBTaa4UaRVrxZMmztFWjswGG341cVh57T3Q2FaVBZVLsRdREQ42RPbfgwGnScB7S1KQQMLvGaSXSK1QS",
  "key27": "26KSGCmihuzdhhd8AThcJjWtequvM89qgFG7v9zL5jFe7HEQsCXB3e8rioKhArR3BY2gPKqvN94YirLG9xv6R2mW",
  "key28": "49ecRvWHiqk22b5dZaoERz12ACDgBSXZhDN7j2cYPHyHr9thB6rLgGUiTB2jZrJNaxWA2d3DW2xpQLuwdadaYzb6",
  "key29": "wSK1bBey9L8SYJ5kXdCB964fB7hQJPCQvRU3JcKAGfm7s3Eudr7rJg4vcNussZp2zCdd1hCBa5cR9iMzXDEsyVZ",
  "key30": "2Cy9LxckTGE1mCkDKKLYjFzsKrWZW1hRFd831bBhKQ7ALeixtAkLmsC5s4da4YQfsVpeLm5kBeSBuYxkykUfEYr2",
  "key31": "edFaXyEVqFWXKYghGDdPMxyUktUF18wGqCvDjxNb3Y4xz2NBXvRvCierdq1VJi9fNYocVgiTAE7E4Ai2eWwiB9g",
  "key32": "5fxNPiFG6vj4W7ruSQBmbu4g2Xo5djdU47GL2cg1WE2VCoPJB3uFEZztVAKPKivhGXaEmaLPBqxCJn1SdCQm2Hg7",
  "key33": "4CWrv3WXowAd2CSchpqHDioZMKP4jAsKj3CwXUSzCuwfWmeGef2EUcBrDQaWZPbPrAhk8CUgsCT3MgT4GZJ5vRYk",
  "key34": "3kGYv4sXReNMJXdCj5zoTLRpFbBvPBdtfQ8NsAFr8E42txpPq6D62dMBHVCgqPrFBskJuRwJhkmetNYnkLnJq3sc"
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
