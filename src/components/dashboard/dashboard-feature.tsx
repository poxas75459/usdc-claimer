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
    "5LCzdSoBwhcAbLZuoYH7hRnEDLs3SBLPTx1sBYQBmojRMw5ptkJVQHbBEQswQcXKTJfsgbvVkWZsQAGk2vBx8HaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LbTXybBZ4REFJguYAggXgu92woTGSNdu3H8vkxykigKKzNRJ57CWpsQYAzRM2p3q2jYYasGNVA57ztSSSkCPWEg",
  "key1": "2KobNWof6TZbfV24XsHujHo4G9H1foyR4BLo5bxKvVujxc7QpQf8h59q4RKrjgMhermB7KNYJuZ6ogWv8oH32DvZ",
  "key2": "38g9vrySCP1Gtx5SSrxh54UqWDuYELXb4MRKJFNW2Xi6dVfyQGGnQ6hUNRFjP3rpavtRUz5DSaVYWsbNdLnSY982",
  "key3": "2tEeK9LduNGGK12qhGYzpycphoWmqv1PAnHosHLKoJqtsLhvP2j6m1xhgsVStrvgXCsh94ohcBxtAmwvNiU4HbVZ",
  "key4": "5GJJfDV72zUz8P123L1DAMosYHDNHaBULe3cSydB3Gxm6ejm1HVCW3ygH8D2z9yj15AWJmuibT59i1dcQfNNRDK5",
  "key5": "2bNuq1azwTAAAPzBAqyEizUDggWvJwtVcVE1kteSv7ea9h4RyXQhtiQdmARYPw98pFovNWPoThRrW2geH4SJMnHg",
  "key6": "WN5yYzjr4y2sgSY5XGxw7ow2E2hwfBM2GiWXNGbEwTCbXF4jq7f4ezY65LFYbbkkSYNsjMW5sGaVyW8nuoT9onV",
  "key7": "5qwhbuT21CMAvqzGgxLkECk7dQbcxp6Kv54zMwF1wyVsuh1Wt3FUeCif9AZZnB3Ch7Hv9WxUtDvF9e6jZg9t7usS",
  "key8": "2anw6yhNmrF3vvmzZqBVUtgewnZyyAJeRosADtXLgcGdtL3u2XqWo8NVesqPAX6C1MLyRjfiYDiMfHU43Mhy3bof",
  "key9": "5j8EHrPt34d6ba49Fv6SxpH78XQaNak3svnaLvpjvbhCTHWSN9spt58GMmAm4Rety7ZHAX8Qjro2vnH33JehSjgZ",
  "key10": "rfRs2KqrHjzXyEVJBDS24qEk8Ti3fxMYPo8YLP3kWZNoVf3eWSauXqWqPW5h2WjGsVPVHJ9KFXaiMuhUtsMXeR1",
  "key11": "PCZWMxppq5qAhzaXxoN8xWQBHs3uJs5meWXCqxbd82Luf7GMnTUPqxNgh2XrYMSKeorCN8rwCnAdR4tR3doNwGq",
  "key12": "2YFjJE3ZAbvYi2SvaHojWXCACG8os8VrwndgX6sxz6XTpZ9Z5UFKtAcxMgX7qbUyonNXdN6w6Xdbsq2nAv5SqkUT",
  "key13": "XY8n3esN9JJeAVuFCkTPCR8K6VKa2XweWCFQtKuF4nZhKS1tnUxqQvE29zPEkttr1iPE25JdiBXkNR5te9wYio6",
  "key14": "eZwxCUS6yDncukGfPDonxXyBkEEZSPDGnHWDh6bM5o5HSz4DuVcpDpbZBdD5H3jbBTkTDpnPWPvbjtU1jrqGtEM",
  "key15": "3PNGc2Dc1QgqNecPo72EKR1t9SN2kQZA9or5Qmt4EA8ceBSU8GeSdmpRBhWiMDBVRiwobjgxmHPgofMC4EAmjs7F",
  "key16": "3graC82JzzKoBPdZgUkEzdmv2H6CkngRzA9PYBdAB2t4vBuHtTZmL91iJUFi2PdzPeS82geouQvFrToxYJMK3tMi",
  "key17": "5QkUWGjpmDDfpzj99KSjiaSzeiuGsNbxP4eMXmnNz3g9nsuCDt9eMXGHEwuhs6Y1xLNkF2WijeavEgR86BYQQGXZ",
  "key18": "5kghHXYsGJg7LssSdNG5JaAkt4X7oeW8msHq63LkagsmM1ng34G11qQoEAViCY8coc38dAT121Knm9xevHVfjgJg",
  "key19": "4gzawWLzQF18fKhWi86pNX5gUQuenVyMFdSZEr9WB8v5hG4gzgedhscJLmh8J77F8ejhqunj9RUvH86rgYSeZhNk",
  "key20": "5pv3DxGi5YSkmQjDJHc6o3VUtQzxGdwYr8fRyT4s747T4iV3Nief3wBpCA1XfPMBmQwGmDqmbePRAYVnmsyGrCoY",
  "key21": "25MvFMryAxk9SEKqMqQS6u6E4Kba8nVo47dA6MizcmzEK67ondqPma75P8Ytwypox5u7z3FkUgJBRD7qwquqWmM3",
  "key22": "2vzoZ3S4dLFoBjGRkzConCU5PKARSXn99KTvCbt2QcBQkfaffNZCxo7SKZraQ54Z7H4wKe7p4ACNCR3mKLpMHMDQ",
  "key23": "75yV8Y2UzazQVnUrJ5AFvxUGpGKLDENEpDBibTLRU6TYsuKKnaTPRv6xdsiA52Rh9YbSkxb6RE1joTT6QB2P7Sc",
  "key24": "2GnW9NFar18pnauAqgEG1fsPoiGFcpjwNrb5brJinV6nWWrZvmJTuq3SzFGtfstNrHZSTmRu35vSXUU6rv6MJzH",
  "key25": "5cQfwzmzPeqMqyN2nRXPQiMxS3nEJjiAL7s94gMyrRx2v4m6y4iEXNMXraqsuVaHMLAGUdVwhoxsDj2WUH3XsJZP",
  "key26": "3F5eKs62PsfoUjEoYkbYCSkPsi7Zk9VN33G5ejFwPRpakv2cBVVnMNcWp9LRHQah8YdzYWLxhQtSwVbKCUScHYse",
  "key27": "3FdNTDZTqyLHJ9qf9YAUAuBmRVHrEydLjj4UeRw8SfKHXHo4HFnrftQ16z1THhw1oWMpoN7fPM5GPMKanAj9JyMW"
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
