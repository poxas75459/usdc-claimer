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
    "5LYR1YZ1SHzVeAJH6U4bPExm1tW542RR4xynGdFpJcDfQQoLB9PsFf1jBdTrZiE4d3Hxg9dhuKk2FZKXLputiFLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJZnwXyYTCEQWNPSkgAcjEj14dRBgivXA7q6PvEXE63emofKyASoHL5DnHTzUqJjgfcr9wxchTGjFrzWDHYV5G6",
  "key1": "3ZkcZtAwHktrAPzjwjHSfWo3JCCe8zYf35cTshBkssQuWYRcrbaWDrFn3iddAzPFauxjvQLSuKYK5oM98BhZDVEf",
  "key2": "3VdYucJptvXcvyXnN2XLj8cwfiERS6cb898MePLRB67822f5BWstdnEjD7r8ZzGgM598D3zjccNCpjDXJiAR5Wx7",
  "key3": "2QG1EwsBKozpy2pun84X3n1CvaWR17EDPcWouoXE4wutXkXJqP11nDWdBt88hWQWrF1jRvGnK9J2yxk9xxvgK8xB",
  "key4": "71Huf4ffJB74sW9SSXw5yt3imJvdF15n9GRn9PpHWQTbdkiYCDfhwzvGfoTfSZXxNDnFwqCfYxHGg9VC6ryYtwp",
  "key5": "5MD1UFMRDPJrmfd9U2KUQs9o2XsBCLqnzva3KszX5KYUZcCQi9yUSiLdhM8d1ikq6hKfbR9axyGbQEMqtrmhY9rg",
  "key6": "3i1TYbpPNULgTdGRFAoWpzRNPyQ5g3j8ohnN3CmLWgsZNg3JwtFceKSyJLvPiGMSaMk2p4psR5ZSbZhvsdrvSAHN",
  "key7": "52xS7Uh8CctVMm8A5bycKLiTDVbGYaDnNu1F7vR2SW5kjFRhCH1y7UVibCRMCfvBZfUz6fZYeMToutSGoSWkpLvG",
  "key8": "5V6rEfQjXpyXmTCekqVaPPGk452dJKZkrkRjvkPyyNU2WwbvrFwM2hLTkXftEyoiC9HSXD27qCcXbgvoeWvm7FR5",
  "key9": "zRMdPW7n6nvaPkbpUvkVhHfv54MmrB9kMBvCEUYW2YxcKwNLJYV2vNUF9oKWHJBD5y2jS3mHgSYrNjEYCpUEQfJ",
  "key10": "5waNkJiPM4Ydp3erWeSrrZ4nGmfecKWdYMjrbVnMLjuLdGLzgVdD2qeytLvw8Wf6W4n3G5FrCvX3UyB58fP5zg7a",
  "key11": "5j9UXX287dBN2oA2xchniRxZhpdZe9sFruLfHV5YdD2MYpZqR6AhJwuVkn2LAQg8kGtHHhj51cdbG7s24eJcX2yL",
  "key12": "51TMxjzV929vCd8nxUsM41uoLy2orSuZTzA2UobUsZs8MjEAeysczMmkPqT57xeEnx3wrc2Cpb6Jyms6AXZMbd99",
  "key13": "32zvDuPgcCukvAZtJMTYnR9xC8uAFHH1bphDxRASb3WusMahsShDGX6GTPRXnDdMo17N2J5Ln3i7zpzhXr5mJKbh",
  "key14": "23mKgFDSpYR6C2tMieTYJV4hhsKu5RNtvpr52v5xxHyDxuebxyKRnvFE2HXRJeZSdzc1TJYyC7Qj1Fm1qSE91WCG",
  "key15": "5HKbiBLhKGdfDtm5wuFiFqRBbc1LV2bwPD4DLJ7RCSJpv7VPx7NrWfXvhFbfjTzhQXWmb4URHUUPmrJQi34XuCZv",
  "key16": "2CoZuGEE6qBAvfamDySw41TSqCYXjfgsUUjqWjb71XYeY2HjDdpp9XbjDKvCYkuZYPPx1aoKFiWn9V3b1sAkSh4f",
  "key17": "4qhxwbPcx6TvGArDrq3AQied9xs3E8jZ24M3wHnhnC9PYQ6fWFc1bouWethVBw1uTva6t2RSatFvgvoK8uF3LF4",
  "key18": "3XcBuXhpqudwws5CnWDEycTF5dtmNUZEBMQ6GGdkFEsnwV5RTWiz3WKJb7hxHoHgAQFe5XdJ4CkptCFQunKb579G",
  "key19": "3KtXfbkxQSZdXNusxEiRecezecoV25fiwpS9YtsZqwtPWYVGsJCqWZ9rQXXURmauykBuNzyQkobS8F2DZemRZD1J",
  "key20": "i3iNjVJNUk6St8NTs1Dwb2Pe5bp5wSYagBLuSFq82rwFrM7mZVc2SuKkdTSoBEEABBR32AN2tkxW5iqen5j4L6h",
  "key21": "2iimm68YsfwhNiwCE6aH7nVvEZvek62H18mAc4pXhjSLfDUoQiLVgMmS3Fo1m2S1cJJWtxVhUiwgpJe73gZVhUed",
  "key22": "5BKb4BxuXPKNiTWsUSnPr8S18SXJRFznKNt59wGcxrDRSi1bKbs4NiL46GGBJfrpjfdWBVNcfBF83aifQMsEKMbn",
  "key23": "4VFQC7kJ1R1Q8dMLExCPTya1qxVuE6588JJ6VrdDAiG8SQU2L2EaTRfjEhnnGdW8prQ7jXJfGfPZ6toJCEDrgMHL",
  "key24": "2WNem1HoQvL5EtZEsUgHG1g2SGVY67i56S86mVh1LrmMACYC4AHCMfWPPsLb5jGcBB3yRDRaQtATPSHg6YWVsQUH",
  "key25": "4onrUD9DHJUQMLbCBZV8aUKdC6bmzYVRGVS24azt78pmRKYr3jRmoWN2cnKXiVtctKCJMVTYYv7xMmTYpjAqct1e",
  "key26": "5M849q6XGDNKUS6MFRkmhKgYDZyK6fpiz9fJ1WEo8QTjozAaWUKURkJWcFTEuSbGYQCVXnsX9mrGSCpLorh7XvaC",
  "key27": "2kkpCf83QSBmMSfkzozs43pC6X5wKrz26tDQmTKCiX3HkitaotKafATDCghigjXLZPLYUEj2uSEtKzXamswajgkv",
  "key28": "FfEkT3sk8ZDNcxojpzLw5Tk1QC68UXfakcpE6FHuC1QHsJd7Sf6v5Cp1GTDzDuLbdUYjV3uFB8HQqmgsjSYQf4M",
  "key29": "3H2mdE9hAMDNr8uAP7MaibweXpsuT9BRjTrVnWdbCLN1kBYRYX2oP5rq6MW8kJj5TKWPYpquPEzhANaKhifA5gfM",
  "key30": "fbPnRxYTaesAtqTEJWymAbR3yvjpPTjPcmZbiTextHg2HBNh4naWf48m8QnjeER8QCn2JHYkc6Gpu9UHBhhd4LH",
  "key31": "3fHUdxqasTTYtiQpdosLmUPezbRbLr6N3HHiqthxzfDsPeH1pWjyxjwpFSX8RcSytBgJFydRJPEo6TWp2GsfB7Ho",
  "key32": "2WNcZgFMf7rEVVKFupfA5cM6iaTaGT3awNqMBZcJaeJVoZkstQX2h9yk1NCFtA7HkXjdq9JBTURPxq8EdbMv3va1",
  "key33": "2N2c6ubYREKPznhoUrRu29HLsfAhvT1p93WZtrMk7ZxiPCwTUZWXwF7nFts976BNTvL8hpRdY2GcTDdCMoogRCte",
  "key34": "5j52NibKsDnckHXVZ6RWtZcFvNLGj3vBN2xL5fGeQYgiA5wEwAJRo1SirboiU1brQjfbczqSwrd4BXEnzZaLPPQ1",
  "key35": "5d3F6vmghRLWztxCd8nwFR4N8FvnKnhwqW1FWtS9oHjhyPELEktq8aXcTFyrwv53zjVUSQ5SWVKAmsnkQk4zbHkB",
  "key36": "5q8CqpT1yJsDn1gqC2rjMP9MAopGo5bsz7a3PDydjJYokmMiizyc76RQSkRDxvvUXRqmevAU8BnRoseZxWqEQwke"
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
