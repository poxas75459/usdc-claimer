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
    "3D9Z5mGaAJiu3k6EGdUoJWXtX3zNp3e6Jqwpn2yyDQpHq42EaXCoN5hwRif5KDSAMAwK2ZDLNnV3EVG2oejhaNGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNpmDJ9bKXn7aSjkn58z7Pzmu2XFq7CAy5jFEyBEU26pEUxgStUH86veN78VpFYC8jkZ3iD8Dxbr6LePCaM7B5k",
  "key1": "nGc9Fn2iHHARiGucEqUvY96TxctbK5QFmiTU4nszvHvoMuXuksC26QQYeWD8BaJrMD1rU4YjC2wbTPRLfpV9sWz",
  "key2": "4NTshWb6fxokVf55r2Fsup9RgS1QbQP1Z9rYo4QePb1KiuS1dnQQ4dojmGy2YDTi4UJDH1kcV1xAmivKDecZ55kt",
  "key3": "3rCwvaqhqsnG5vWPheUp4YtWLy3NaL7ECniVh7GL5JNKn6HKizyuWud7wAWudyLNH4TrmmP9N12Cw2EWfo2LZFr",
  "key4": "3zBM47o6VC5qqK4VvrczdkhvU1KgChWBDYoJSK6cnK7KUHNfe9uzp53MBhdWs7FMTtCZrWy3RaQm4hXvejCB4Uq8",
  "key5": "5ezX9L7mRhFSWrakLF7iGYiMQ65ykFJDhiDa15WFQF6uCrVDMX7hquE92v228fizY7ctg39kd8xqWfkHg6deRGky",
  "key6": "gMvUyyPtocgWRnCyLFKtyptfL9dHPLQtSJZNeRDopb3rKnBEJNcVu7VSLtGUFXjs4cduksUKxfRU1HbxF4jd5QY",
  "key7": "5SYjCBeeVWnenMWV4QMREbmfPvdNwtNg7CcZMKNbKM4MNPpsuQbz9tz4Wjpp5UUKCX8HJ1m4z4amsoqrRXBpnNkC",
  "key8": "4CGwyoL9W5mRuLptSY3wggusSJ37LhUPd552gWEAEpTk71fGd4U9N96Y2cNc4NUsgkzgc62sRzjGiEiWFbw7fLC2",
  "key9": "LVw6cBan4FyB6jjqXY2odtR7rr7gWm78fjw7GWUxhLAyapnV3oCerp5nTw42sfGA5tHGiDWFJ12KzsPqGpgGHJ1",
  "key10": "o1WWfDwbLNXHB3Ujtb4Chey68XcLaXhCsD7tZ5ycRFewEnnLARjLCfcpyPB3U3zEDVUPknRSAs2ECTCLRPDqSdp",
  "key11": "QyTAHzGNEUThp1nyWcbWGFotJqsGK3u6nGe8e1ZrkT2P2dVWPFsdpjvCM88Bm3XJVd1UXHpyCjvc4hjyD8HJS89",
  "key12": "3v7qXSSNE5DeTsZmwq6KM71EFayMyaxxfhCeP9hccqixASY5LFZeRAeL3vUbkBoyiB1gnmSUHwfMbLT1pmtZRTQq",
  "key13": "3qyHf7uYr9AN4FssQMyB3mALKNHyS7TFkeJUudYNSGKHf5W47SVmeHKiUsjw6DuLZmu5CbajZ8cWw5DRuU7qUQgP",
  "key14": "Kcdu9Mj43dt4eXsZzrpGLT4KKYRCjjya6UsPzUbsHmP21628xECEPSohxbTjcJgUTDHB1bQrqW63Htg7U3NcQNn",
  "key15": "syGn8ZUkvpyKX1nfB7Wd3M53QdaLFogkGiEhhn5vXRi4oKNNNxc8jWgj6jBmhzwevm9vRT7FooVd6WvCE9jUiNc",
  "key16": "2dTAHCbookCSqpTUDoCuoo1f1Y3RBZ7a4p8Zd3nGQCm3r1EZcBYW1C4jQEtcw5RiHZmhbcMTUWgnzwnCJyx52jWh",
  "key17": "5CPP6XsNRjXsBc23rrsBDrHkFpftGigM21YjQ1CveZfMrUUqdHX3FyLe4HC116KQa1qTPX7Wd2qWDxhgkG1GhYKw",
  "key18": "2853Vd5EAQitNw4zqsbUWLEonT6thy4DxY4TMrfAJsfPcRwEkpwg6kW3XZYS81qTtkDrHBHvqFjw2BTuCztpi4cp",
  "key19": "ZMxGyhYqK7gtTvayAcy5kybz2Xgxu9ArnMWBgYg7zXFV7K8A2S8LF8WYuUJr5G2RB8SvjrXYzs9EWxiKxr6joYY",
  "key20": "373oBL3jaZ6exBAZKJEmFEcdCdjgsGiCfjf7smQfU9f2YQNYEJEuvV28tni2S9a3cMyD6bGmL68kU7Fo768m8mvS",
  "key21": "33E3np8UMvjhqR9dS5zjoTfJnUWHCRCHn6U2bzH3vXAXghnR4prUxMxjZzsuePWZbvWf8M8s3pRRmU2n4YaAiBcs",
  "key22": "2M8iXdWJuxvYsTy5hsGwvSmgZQ58zaG4d1BDbWqtyrwEitNkTFfeatzcHdhx1u5AVyNS2BLqPPzEVhgZYskmf671",
  "key23": "5x4G8GE3Xgo2gzE2PHg9QsKShLv3aUKpzegti3Ww8phPZwqcrcPPH6fpHtbYgEwaZ8mF766M3LHQiiVzdsXiRVGP",
  "key24": "34ji2CNgjrEYWFTW8oSiJ8DixhbKMJbmE8NWFRr1caPQ1RArLjyyG8ne3WvG6AqGebPcy4CMN5mYSb4Bm7TYczL3",
  "key25": "2YuyDdVmprmFPde4ZQW9AteQVtzwLS8WR1S8SgUJZFubef7EfmQEsWwaw5BUMrhp4xvhmcyMVsfVgSzSZcGM6xpg"
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
