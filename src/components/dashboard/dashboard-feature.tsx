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
    "4tEiRXtM9qqMUzvbhRmG6bGG39Z8AjfhM9eCMZr1Evr5d54R8Xb91VJzs22YH6ACBdcbv9CHdvLBFRVtgmcS6cPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S7jwdLuakN9KKmhLtLZACHMuoiYFzJgs9CrgJynvXBGkfQ2DtQMYg19A23kZ5Zwdss1f3UupNMUrRqZcnP9AmSV",
  "key1": "Voqrzm5ExyyN4Hp4uMBgDwEegPLAs8UwiEgvhAnJEhpmVgn3aKN8rNHJksrCDcehZEXkeNBio4nh8mJKSt7RBis",
  "key2": "3DnkzmWM3N2bbecJwwubb19NP2dXumZwQ7pnboVsgwnzJwAmXx2uipV4QTMZQPARTatDNtUKkKTFHAxyD1QL8342",
  "key3": "QB7eZRaW8eH4H4DxUDu3G7ae9xgjxwoQYt5E9a3FyHd2PVwq1KTurQBrK232iEmEjWdaEsJy79rbm2nNxBEVWxo",
  "key4": "42tVPqtvfeTLzc67gMkDYq2nh49YA4ybcd6hyCsVnua2aNFKp7o4ZuRQ3uE7LkftdYGh7GUcLWtUwgU4QXzs5KjG",
  "key5": "5w59Wg8z9EQgTSP4t8de9cTHFbEVcckoow2KRiqcDrCeB3vTSro6Rsc3tJWUCJnPTbGrGrqZWG6Y1QSiUvQE3J4X",
  "key6": "2gQvBiE64az48noR6mGWSAyjQdANRFn5ywa1c8gQPV6PFSfr61suBdG3M9gbT9zSNBx1VWB3669j1uxAeJhhpkgH",
  "key7": "YKQ6KG79CzdMGPgVkd3JhUbrYhaC7MB8uco6UPkAjVV8VrdX5f5NZc8SWDCpu6SAdxJkeYjroodPz4Rgp8ZsuRt",
  "key8": "8pfY72zrcgr2wuvi56VXshurexyuFYQtrFwuSAZ1XPv3dEWLHMrKRtfjtCQztSCvVXeDMYRhrY2VhJGoFRFuiqj",
  "key9": "j44zXNEcEZxVAeR5oFmiaxFXNdQZNeEsymvrxn6w3VtVphy9HHqc7ehg3vcZ9RkftZDhW471rq7LBmmgd4gcnmr",
  "key10": "5BKy7FAxiApBpp39SceYxmLPptxmSoXb3TuaRtpW1pQ7RTonzJTgHBNAuUZhEqcSoJZVqQQ5AAcn8sHt13QQwSVp",
  "key11": "5i3FaovkkpWKv3EzV5QMwFxTKCXP7txyoiCGwqMqkF6gc6mvh2xnj3E2ytAMS3s6mAAuoDPWYseRSMaVViopwcMS",
  "key12": "3rX8uhhzePz8MQJECwu1JMXGwxu5A2Usy8869DYgEGt6FSCCYztTJ8PJKcQYcsrhJoM5bUMoZZV2ArdAjWShVRZm",
  "key13": "3ybMebuN5SMbLq5aw2TPivgEM7L9gpgUEJuwNqCyTNcbHTmKtxp9jxATSTkrkRqcLS3K5kjZLe1iBhJrQzKBTVKv",
  "key14": "4Zf18dDSZyZivsD7mJashr1ZjC7aNSM1za4QEvAJuT7WT78Fdq4EPWPPu8FVC6LtzW5q4QJPi6XNytukXzXcYjeB",
  "key15": "YN5M4woJxHMtkuyc5ALeHzZVVNzNN8n2XJ5NAvjoPxg23Xsfp6PAGW818hzWpfUUzdtUMMV1tFMQi7WMzPQ5RJa",
  "key16": "57idPwtsyb9SwC48ur2AQATjqsrhBRwyLMhECxfx4vpBHmrhQyTqtdHD7CVWFGj9bMwWeBwKt24o9CvrA78gdCrP",
  "key17": "3dLaNty2wCCd5zyQKW1thn8jQtjQzBp6KFsyQrp46wZyGA23K4tU24u4jDqJVfqcXA37Yy1Jocq9UJNLomUxH2cL",
  "key18": "4dYhxwfMFhNV35K9w1ABZAg94KyDnLXzZx98w1ZdXwxPS2Rtf4ouVQMxsqYW7AqExw7LjhXU7GHkpz8A5aaYZPru",
  "key19": "5T2qciVWu6gLbngboF74Y8QFCUQuVfJjevCyo33BPb9wFHPrvQ66RjBT1dRAkHuXTjZKXdh97dKheyhaanay75jM",
  "key20": "42kSuigUCapcJuxRxuTUwpiFxaw4HDZ3wcEZwVGKpWEca6v9pB7Nkpjop3HiUmeKjjXcNaqhX1A8CFXYS5V7LWqF",
  "key21": "4RHk8srhtSAHCiiAUTAumYEFao85AZGipfcR5WcEZPmPWPBKhhokDKpreQyNaeg78RVpU5RUp7kGttpGTzp2ruEU",
  "key22": "24ysL39hjPjJxBFFBeWprQG6Xsuzm1ErvbBDApQJHmCqYD7iepJGU6V7ZqebB1ocT9ubseD6Mfuq4uES2Pntuhfr",
  "key23": "5Q16nd5nnmucoAWQaqp95scnpHvXuRBXBMbgUZZPi78bkTkeKYKCqPjeUugN1kDkNbTkqTff4Fvc89bx1QpyuesZ",
  "key24": "51NFwzmvhgjczKMjZoAxVdMrNNgrmTs7T8Zdb7SZfnH3MYmfveKhBoTEDxVBSgBmiJ6yhKAYV8cYgFkN7YHQUSJ1",
  "key25": "2UW6C7qu1ANjhnbYAsZ3BzE4iKe29mQKn14SWBeieCKk7d5X5azc42s7vfReHDLrF2V9sRQ42hNUY3GvHdZJ3U9W",
  "key26": "2xzn3Fi5CEVX9s4Stu6cM1RnUcJs88feC6ByGdbuDkciBPeHoUXM1wNLseWUxebgAfZnxthGATZkUVuzFhWwdmSf",
  "key27": "4YcPYncQpaYKPsvsb4Wn6BvF4q3wimtgcFCMCrzw23fwtLKUQ9M6Mvq61RuW6wFwhopXf9BsJEQ8JbGQif6Y7Vsi",
  "key28": "5XeVsHpJNir4NkPu63jdE6dcTdnyuA2BTnza8Lou32cbuv3VYDdnZ2FcMPiRiAcDhAqEKn3K824s8PMV7UgWjCd",
  "key29": "21NTAkToACNJXckzQbNeWdQCvozzJdLBMqGWYZPbBLCEsGM3EmXTd8cGAUP2FWqgMmhVmESx6hgpV2zMcTffRcMY",
  "key30": "2WzLy8pThp6rVFwB5pnnhTcWkNHyinD6xBnhCT6KuCGNhVtLWcJxzJogxGUjs93Y3wZx8n1xoDUEDdQD6FkCBArd",
  "key31": "38QsVLfMgbnyQoaR1JUKwoG5rbogmMR8NLezFxVA9BgZAteYxwjP8A3kMQKsymoVPBxNCCMVScqaNB6UjVjTu7wg",
  "key32": "5xikyw5rkXRVqgXeR95Ts37dsPvJ7AXWN4aic1HyZpEvQ2g9JE8GvFNb7mPk8f3WDMm2gFeLc7LnWBVxNaqtkmJw",
  "key33": "4Au66FPCaduCp4K8Aqf7tZX6BdeX1cM6uW72BpLU4duzhSEPdWidKDBDzbJqLH2Yb22PeGGxD8W4qjt1PPcfMNVg"
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
