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
    "tD5b3jmGuyWyZkcH9f4mvf5qfRnSvnHwY76XhRyzW2MaQVqTDmkvgvtPoGYn2ZrtHamF13NLVbB8xnhExPv46CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56unWqLfdmmwW8TyanojD1VoDCJ1YheaEbEvua9chhCi45v8HSeZm8avVgkA7ZEoVCrEXmgPnvDXu8kbCnUWSTdF",
  "key1": "2wQLjLxiBaDsKgGLK37korr8jo84UAetwWtoQ7XNXP4WZ5q9sFoHfovdUkDpgVhixX2Xct1PGq3pY2cs1dbJKLv1",
  "key2": "5cdLS9LdGpVbsVGC4UTxpwvmCVbSj4TosyVCn8aMPH81V6Cb2od1E2gYT5ZkHJcsawtk6T7xAUBWrLheqs1yuw4v",
  "key3": "rswYKSRk1PSrLvLiA9upZCZHPLeSJenyxLcnaAXVBPVgmC7FQVZWedCrFr4GYsJd1LR7WaZxmuFq31H4CYfvaEQ",
  "key4": "28ERwMLhskNBTJFfv5yefbSrXP7arhy3uzCzp1A2wVzQzDXneqL8EnRDCJ2Dmu71kw7gGtFpHiRFkPj1qTgjvd1P",
  "key5": "3eqdcHF14QE2mDZGPv4Dkr4V78qRfhei5xPvkW1ZfbDVmHjpNWJzXUVtd3ysyyfksoe947KdW3Ec1zvhQTWYyWQ1",
  "key6": "4TW1ZLanqgjBvWy34gqZRjGPSJ7EiBadfVmBR8S9aHwsBireAsd4TXLjZCTvN5K476ZWUSZfjd32ydwgiF4Wvz6n",
  "key7": "4FqDgtsNxzQbyW94yanU1RDV3766Xc65XxXtpHWmSwQPt7nq7BbNrEJoZUe4dP1YTG9hp1B2Ctd8DxD9UaxwgEPk",
  "key8": "595AymqnR1GzsUsqLaEfrU4RG2av2A6KhRa34W3xDiPDix3ZvGBW1zsSwrnyiawjeQy7XauBT9hyW6xpq1yVn1hB",
  "key9": "Nrfpx6XKp84WuFmST4BsXMRSeYzTRufRcNG1b7zAeEDijRAeW6WqVVWqzftkY8bdzHmtXwmtXYX771QG7Ay9yDx",
  "key10": "4DezVfZUg4tsZCiXqerVjk7JEdb8oUdzs2paP3UbngcBo3ErnwypEWHNpTduLRCzfm2agde9weMTRqg2PpuzABCc",
  "key11": "5Fy6jJ9zz5rtHjcVs4q6YfYgimJpXUGzr9hX1SRagkkr8pfy6teDzLnKhBFsKPLKzNDThv7Yiv49HZW3qHhXGKrs",
  "key12": "534ZdCDDAf8eGXZ8MEHRccpQd9daGPB9mnCu1KTiJ61agdo49M4scWb2bf1GpNgyMeuC5SdY1Cguq2YBzHu6YxvF",
  "key13": "4ne9ZsUidAsrvr5oQRV8TUM2Bcm3mjDhp6npjLPWJD2ds8EEPvZdjFLKnmssV6bgWTkC2wcvoBVGpcU9Jhtx188M",
  "key14": "35LJyhxXYE6m8vyXVtyPKurnf1yBcss3DEG6HRL1rSHMDvyx16i5q1ME8TuvZPFdj8QpHgaZW8gxwerwhogEsnke",
  "key15": "5fqUrcS894JpJNBR4WyMyipNQy2c4sVG9c1C9XFqsLzL3Rcp5jBKadfs2kzLN8Y4wQ6MqKDBKy41BsjMJV9apgvA",
  "key16": "3ZV3Pi4GQSSDFWSZVxQYJGrL1MSHmxvZdjNqSqizYwpZ8HD932AHCmMRxAADdmvtmyqk72o3yfHqezh85LDJzfKY",
  "key17": "3PhPMb8M8LcyaMaHCMoXtjgnsZgMsiWNr7MsHgMDnoos3i5oWohdBvjnGTrkqMKKBgQyDY8cYqDDAUAbzWphXoCW",
  "key18": "WZBc8fwDLF3FHZ38LmiXN6mbLzemiAVosesVhPJceJ8zUyfuLnvpHZvqQ2p2RwhXaX2zHCwebcL5rDWD3Q5TEkU",
  "key19": "64pdCeakgTm38qDzZMUGehi2YEG1hUsa3MF8JTWAaJDFBs6MGu2MFmnC3rwx3ckCXwc5V7of3Jhs1uWQNovqc7Gu",
  "key20": "Rhkagra93HMBcM9JXpFTxSLFKjQ9mVf6Ce1NR7LxwZGAfPxEU4FFXJygHKT4yosbNYFPA2H4fLoCVo1HJJcT7Xd",
  "key21": "btDrZgsZa9QmHKb9S3z1dfbVSkmFD6tYhup2gn57DQvCf1mepdkNCQwUAJgmmWHJ68Tnr3jYSq6yyqgoPh9Lb5A",
  "key22": "xxawPhQma2RsG67Vacqzv7jkxAkLQW7G692G6BQLx98z3Fe9agxrPE2LQZfUFB2wwfCXU5LbVkK2VXcKEpPWtvm",
  "key23": "4vxEtqEWTJ3asX9RKGB6TAAWh7y578t4iaHQL3xcJeM2WoeurJkvW2C5pmrw4d3X71P54Q2Whi6aqLuvMqAqMukH",
  "key24": "25hoPpgwXy2WzYQmDM4EgKkRLtY9vaX1tu5zfH61qo2Dn4jyXj2ZtzZm1nbp6KUNkkoMPQ3RD5etvmsTxarvDzJT",
  "key25": "2pzF7N1pzHrvU3xNhQY3WgshcooQUAyGKc6qms6CWpZEuM5Fi4pcqtDgjA4U5ZfmXgNpTYJykRcLKHkbeR5Sj7Qa",
  "key26": "583giYZUdJTWQ4zjX1rgE489CuCrW6LVzXo1vp3qRYWokBBuaL8fBJ7ti7aHBqqA3oZRDvr84i86nYqhFm4Fsoex",
  "key27": "36cHz4qsrk5u1EB6RnWLMBoP4QtiJMpTqoXfgFJx6QKgDjc99sXjfoSPmTzMcrMPkryM8VzdZo7r6bkRkWopekVq",
  "key28": "49QTCGrEKZWYNDW1TFGxNCDFywRawT1sqTzxdR5Bh8zZzEAmwmtbv4pvqPHyE9EX45F8uTd6nR9B2B9t8PhAjuYW",
  "key29": "3Trijrbqqm5K6XuWmcD7kML2HDZkpe4nX8DC1fwqCU7Xv4zdGQqd76EKuoDYjuRkqanJcTWdp6onika1iFi6WTS3",
  "key30": "4aVop2V4gUuXtU3erBri7ZSoWHTAjj9CjDupDEDMZ615DLTjraaJ8sHdeiuZQSXhSVZ1B7CsovZrEv7DmUfSzHQ3",
  "key31": "3CFgUosZhPLpmMStni4DqX2tENQLiDiVrJE94rAif2cLbvtm1hC3NUT9dWNjXQogJPBSi6jJ4tHk1Gn2JdJNuDCC",
  "key32": "3eiVnoHSBJQHa546eVLB8WqVCmSYPxaaEdn8atCHwuW1U18sErbD8wGLTpQXgmypcE6zXtTr24rHDw9sEfsjNkrL"
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
