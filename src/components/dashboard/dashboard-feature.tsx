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
    "4LQvhPiYjJ99YiG7McwchdRAHsxJACFm3eEQ5AM6GztXmSBaqxKcUDN8pFELxE8yrmL5Lu86iHV7KJH4cwJMKpwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38RyzacyngjnZo1YMFh8WGyNoCrdEgzwpihbWkZpC9vCeTXpjdje4WBmrc2bhCzUjHQNYvjiCd4SKpaAayHhMcv6",
  "key1": "NaJPXRZibstFPinTC3kPvuERwQEj4xEW9n7Ai46HXZZvDQEBVWSiAL5i5ME8WNXpQWjxbBiE4m9mH4XDRH294r4",
  "key2": "22d4Qe9SQWNgS1x3yLBZfsWm8RBSM8FJZR7yYZZ13E6WYv2N2fXspVkXBpUMjborTcK1gQFAWk1dzscQcKv4rA2p",
  "key3": "B2DrTMFbFB3SRi2ZXAkPysMwZBnhbh6XSwovAMNLhgn542uSRtszWKqhm7ZBUHfHTK1J8d6YcDgtR88spZc5axd",
  "key4": "49jYQapNGRGDfmsUqmCzoSZexfawTmujvXvvjUGLSvhGpFbzbagYikx2ZB5ZLeFJHp4yc2iBXSaoyNcSqyiXUrqN",
  "key5": "WpSKFScVw24ttqLPE5jCNt9fndYVZU34ZprB3BVfdiM5cDGoquTC8WA5UxnY4eh2kW4rUZjbuMVuj3YaRhjS1yd",
  "key6": "2D2yB2veCHCidup7BYn7sqjLNnfD2gTB5m52Dk8puiuexhYUZbpmK64QquUhmSgaxJQYdFyK1Awc5JYb7USaDKty",
  "key7": "3UmXHho5N26CRBg9KKaiyUuWEd18NiYAY1po2szD6QgdvQtrXqTskvFjdYBhS1LHbKFmC6xATTzPyjj9DFEtNWUG",
  "key8": "3vBd7mYxeM6dNKG45MQh3sgxayhTqg2p5CaW8M5H63spwv1qjFYU6ns5R1iVyjxnpLdR9qu38UspNGZ6zpgcXScz",
  "key9": "4G4rSSJMSZNaqwMipLQHBCJSUVQuQqjHGLvELEHGY6nw4D2gCrTTJ1mkzHPo7Woh56w4LFjyP5xW8982aKoaNkS9",
  "key10": "21BHxck562YPNKHMgDi1T5PSeENZjpbPYfgFEgNpTWvU1o22vdsWc3v42iVQFQaUTW4wjndG5fgGyoKyQZj3Rq9d",
  "key11": "58XLBANaf7hfqm7zdZneQ1oFf9M2DQs6SYvaofxTQXCueQyZbravtpqsMbMnkwYioiSAkw9zk5qXbxYeKSj117JF",
  "key12": "Vb1FrBKrLdG15DhSy6GToXD8YJcaNxNBNM8gKdgyuLYC7pf2ES7XPYZ4onLP6v8pKXPTHX2P79urhB6HBQbPFPN",
  "key13": "51pzYDwDnDT9E72812b11qTPyF3aitRF5YzoXTRV3gwdSkpqZ2gV7yiR4BZ8HLChRvpGV3uqWpSqttSEZXdg2677",
  "key14": "5AyuPsRVxTdKYo25Eb3eFN1TrDQQLG8jeDQMoYKcT7RQT5x4bHdVioL1HwjFew5xNNqXaBTJTcqiBoBk1MYBR72X",
  "key15": "HvzJagsGHGDiwvxtYHHTyR4ahk5cScEtc4xxsTbDbpU1jJojPRwVXEDzVJCRxCKzmRqsQRcAfLtMVEBGtLoMbsc",
  "key16": "uyRDxbfoUMBuoiy5QkQCAzDk5nZsAZXKRrUfPCU53PJHuQFvZZBVJGiKGEvruXbTb74VRaWXY3u79Ftbk96CJJ2",
  "key17": "3Bzufh9R6wMDAbvogMbArJTJuWD7sm5o5MjmJHyJeUhU7qqxse3GGw5TEsLGD6S7mf2a871oTgbW3dwZruFxWRXK",
  "key18": "24KZCZ3XiHz8ypYpqWGDPeeo3azzXsFCprw6fc8m7nUigKnCo6n8NqYBYhsGxaWAwaYcRK6z35h5obj4FtihaiKt",
  "key19": "4AS2bmJZb8eQ2o6SzFCDT68hYEpny39BTgDfso1v2w7REA3L8vZeua1CAL4msLLbUgeCA87MCKCKPzNVm8Xef6pi",
  "key20": "aByJe5uSg2M73Hcj7yUbQKzNPrxV2euw7gR1ZpsszGC9fVszxruG7TRQPqvUB4B4VF7JNv72tihyZWSPuVQoSXC",
  "key21": "mr1ZJxWg1DWXUTrse8pEqLiWRLM2K8Xvih3fzYUD95e6ydfGFS62ivFoW4NcWBwbsJE1uV3poZM9FMtchF9j92T",
  "key22": "4AHNzX8WjimeK8ZYvYMxYpcFAsv7vmvAhjjFn6aPCTy8T591A8n7nU4Kx86qaf7W7DU8czNyHFsRsM7cnKWukonP",
  "key23": "3yysNWUcaBvMPXgffuSSxEu34Ff1mypAQAh5nP3nLH1kYKdNpsZHZocf62BCejSSyG7tGSxypJbnGsGo1G66HP95",
  "key24": "54ctVNUfAxXXm5WBdCCZMz1yMaHwCL29k31X2KD25gcyHHTPnpcavKhYzUozV51JyUVu2ztgUGDexTAFCyHZkzH7"
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
