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
    "5iKAPWz29kioBSucV7cjyzbMEX4cNp65AFqwY7178CaSaRm2UpZYKxumYrpNB1SE538xo1u9jcZGujqpFVWgQdB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52DcS1T1LVSHAP46uXCEjbu6o38cV4t2kepPXqEo63RgCt7WkJXU1FB35AEZ7AoZ2d9pkztJh4UxbHDhFZkVSjMF",
  "key1": "3fxCeQMxm2kNonqtLhC77y5GD8nf45WLyE2X2JpZvtnxaTFEXiLNbEJ87Y3RY61AK9XNtRmz2g3c7yvdfri4cuPA",
  "key2": "4yv7XKqq4pMf3CVhavC1Ad2Ryv5hzXgiDMPk3Mn2Rp1NH2mK4hX8JaVdN6FEaAnfYNBc8MYdmAiNBoujwiuLsV6s",
  "key3": "2mS4j6fGbpkDeqHGnyqYXmZKdEssxBpgcaCecNQ7DB7LLvsqiEhKKWvmofo3JZv35SiFp59zuCNLtuSfPdTCiQKM",
  "key4": "2DTrhM9ZNUebeiHisLLnmAyrz56WmDUiZ7yxukBUQ8LACyn41mBzwJg6hV4CcCerEcCBiCdubLR7vK2pTE4wDAXZ",
  "key5": "58D5FxyjaqYj3gD8bo1NsbTx2zfu3sZ9LmGvTzZBkduqyEa69Jqz5GtobTuAmuzkKydbC7EDgm8nFgCw8kuLPrr",
  "key6": "3TsWNrDQFS9RLDc8jqfyMgPxAyHQ4fw38RLDyf8D2tNEbzFLMs4AqwmZoBxeWjXDVea1bMxewcAV22U7EEzMwmC6",
  "key7": "59nyeE7WY88MCsjVykk2nQr2rrsDEN8ke7YhZuCwksKvm6XdSwymCYvqgrR5Qpa7nA3mhc9fX1zcvDWK9AvJuSXP",
  "key8": "3ynwYjYE9WEpMPmMdyoSv5XvgmCC1z5sSXph281mPiHinaTW3dEVHpLCSAB2WkfqwhCXYyopxTGZwdnChvmKz37y",
  "key9": "3mhGsxMpPzn7nFQQyfRDgLzHD7xmz5ke5reGrxFxMdisyg62ZJf9H1NSiaZM9tsTBP5szSBZgQth7xw5oANvaE8r",
  "key10": "5dkKqopj1fQtRAmDQG9JfmVRgk4WJPuWjnT6eFH8bTLvJdYJuazh2FVin7GDG3rMz3uFMSyEK7ZRs2M8BwJNJH3",
  "key11": "488mP2RmgKLWTdiBoP1tnnrqJHu1tLj6VkhdGA4WTfjTAHfSsZL5cFhSDZ29H5p7mZuwLRyPdu8j4LwJXQAzxfew",
  "key12": "Mvu1Tzy3jV69ArFi8o1RR5UyrNqzjDsth912qpZ9aP9HFinAPXNK6V5bVAEboiUdeobQdQrCVZu6E7oLiSGGKDo",
  "key13": "5tP1Z892WTokL9moHTehAVQf6ip4tiS47F8LbwqnvEVyfRebkcKcd6F6yTNCufNEiPL7AdP4XYG7cmWqDMkmvA5K",
  "key14": "8EiQozboJzN3kUGHu6xdRso1RkJLTPDy36LPS8QSqs38MeUj8WC34WmMUGNNPVAmTqahApqRcZtGBWSDUkfP5Tj",
  "key15": "3BBh2sX313hHFcB3D8wWZvSuh95sba5BJCpHxmYSAdvLELyuWCsLrXmycYPCsqTtWqLcEwH6NHQmXwPannKivVLU",
  "key16": "63dXTRmo7XeptpL5QY5awSs5ic3gB3cewcRZJLJ7qfgrw9NaZKU1ebAugYYWSrAcr5gJDMGgXNtjHWBRSzadhGue",
  "key17": "5KYnpRWw8eNBw2Ff5fUQJmscaRjeM2HRzNEswtzZQA5RuLyNuG7e1HredwVNSE5ty68jGtnNcd59jmz8yBrPkMdY",
  "key18": "3u6KivPmvtUukHWVRpUW2TTRDbXfvJhiov35QRNyv98fbCVTocuPFYzRkP3MVA6KnsQmMq77ZiUfn34GaetPuvM5",
  "key19": "3MZXQos8arbAKY8U4FjkquUmKtB3L8pSEYWRhWcBEpQtjfFvYeKYeBYKBkLk1JMNUFubDr7FWAd4dqzPfi4QtZEq",
  "key20": "4a6Q2dTYoT1KfZ4qWV36H28C4Pce3zm89zLJP4qqUpnQVwbad2qxcznyj6JApSFBDVHgABkpkBAuB96csh62TF8F",
  "key21": "39g5a4S7g717ruM9pMr79NCFXesosahgRBAuHY4cxEiKgoLnVA37DecjbgVGKkC5zcBtcAUQeS7fAkxXMrb78adG",
  "key22": "3kDwhmewNF6iTFx8DVsPuHaywFFisBc5hRdz17t9tS6qpG4P4Wkgi61vdPEKxsW99twk1GiiUMmN29R51fHLQnXU",
  "key23": "S2CDnMf8fEzZ4R2JmHpgk2kZbzNp1Ldi4xwXe55i8CLfmR1q9S4BsvTLHGSP7mcDwSuArfJyc5HMFyEZwVPLNue",
  "key24": "NckEbbTRJvweSsU1mLzrBJ1v7tWx5ogw9GLon6rErb6h2dZJQDA8V9j1xNSPDDtYWQ2rQsJ2FonQcxbMEKGUVqV",
  "key25": "4eJGMJ1yLvRNYiXDsnUn8z6w4cxkZ9ZujDEbiTYq96bMiX9iu8WH9ZpnGXTTYfSXuv2G2ZNWbQJSipun44uctuJY",
  "key26": "4wwBdpZKu5oZqLFBokhTzUNtBsUBtuv6bVASzQuxr1akHmHHjafMG74ydZjQYPpf5aS9HPHesPQHCPSjp8bnhGA",
  "key27": "5zXnARNB4XaJSf2j4iAuBVbYV94qdxkFouJWqfsyQGWFQuJ8Bp4v7Hcn5CGw8dPaozDXVgJkMnECMHF4qnt3q1yQ"
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
