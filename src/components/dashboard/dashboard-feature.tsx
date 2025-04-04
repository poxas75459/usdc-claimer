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
    "5tE2uUenBGSaiSgLjMmZ9Q6YWWzmvSYCVoL9yRjYB6uHqnBJ9zyHQsmUVHyarx2CftH2HHdBrbRhdKe9Uzd51C4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9sfzRkHxwpWTv33V1mBy4ENrekhhWuntAcbUHYdFSFvpmWhHGdqpMfCxPTAZCssahEUstMAPGWVhk2D2bPaHYMh",
  "key1": "56wtbE9dVWE3vfbTapHGC6FUL4zb5FMboDYSHqDYXoRMrZb96qCJvD9LRw66BAwDYGh913pkUSaNEvKdwuwGpptF",
  "key2": "TwQxWHvj9NBbL1funKjQ4dcJpE8MZ34VpvXN6zVK5z7vsto9UXGBjHUxqcqukA4igELvws6FviC1Gx6GiJV8CQF",
  "key3": "xikzMhAVncu7vDxPwAMLWtqNxS2ZFrmCcTWJJrVBsmDLDAxN54iVWGARdj7R2JPCBBp7JXTjzdGaMyVCvL5rfaY",
  "key4": "595fdvTxPm9pngsEyMu9LneikkGoYZY2867rMWjQWW8GaJQev694c6U3WXAZJs3BUAx9mdne1Sa2C15xBmiNdiLe",
  "key5": "xmYpdPUvtUVxiagjeiJnPY4mvRYo5SEzBgQxw2hVLGhNECCYGVdqeGoBXwgRhKsqXSiZpuSGAvN21atsArnWpCQ",
  "key6": "3cSkYsQbMwghd8uUdXTqftWbnB2yPTVY8P16CvZmAEqA5ixXxbFY71q1fUoHMNtZP4NL9LMN44qofBmGD4Y1Ehq4",
  "key7": "5QFi7kgoitmVDwxmommHmjn68MrCbpnboXeiu8Ygku9uiv7YVVSFYud5nw9QucMrXQbTBX2kvB3dwJp5r5Ymu2w8",
  "key8": "zirxekRs66LC7hj3SxirXUAs7mqrtqZyAPakpB5BaJmdUviB3wMDwBVzfBkCKcazevUrDc9NwQCbvdLTC5SopP7",
  "key9": "36b4M8vMtWDPBQd1tWk7wuKbmzNqpAhXTqN6ebLwULC3vbHKjGhoBLRtWF3avXKoC9C33nCQ64hUX4Sz28Q5ibR5",
  "key10": "PwTThWECzsY9YRwhrT7xYq78Cxf1hqMn9LT6oTctiPav3UzQX4fZkTdL57zVUza3yBPp7DmtRiGGzUfrAKMGQmw",
  "key11": "3RQTqVXVbjvgfPUpzTRb3bw9zDZnRkCLxECuwpQfSnq1z6FG4YHudoiCAE2odxmnB17d7ZkL4QUZyNHWbKbcU85d",
  "key12": "tbsXtyHv3VyqvRJCawKJnLfyXgMaW3Kqt9vpTk3sHeQ1GkEvQwniDjbPKFMYMVGDrUmf5VNckNY9x91fKv8XpYd",
  "key13": "36Ff1TSYnAeUEkg3VmVHTf2m8dDs5kwwG8SPtmES86B9Sh5wywWMsHNsiVDH6nEpPnPE4xVcGQ7m1VfmhFQoU88D",
  "key14": "VNcz1LCYPGT67DJNZm1FwY2FHG6XhTHUjVciMRAWchs1hUN8AJmPM6Jg5zPzt6nGJvzQNVdW4SzaXWaG7NzP8Sf",
  "key15": "3T1iZZ6JJjKjKi7aUpDTMXgLVZErVfp87NNLEej5zAknA3ECUmcDiGqVhnaBEKKnAKd34cLVE1gqtiddQM1daava",
  "key16": "4ceTtC4ExBukBPGD7WyyYSuX6wFc4nz1ogmZbxGmJ1rqtnV88ctvADQgPBpatA9FtQiLNa5DL27k2uwRZyhwE2kW",
  "key17": "5tzhn6D96nzReD4yMcDzvMLGUhotZamUgJ5UF7u5rHaYCEbeWJwHrqRh9Ymso9NQHnCQLuP17mFWNwjSfWowJUez",
  "key18": "3FrUZt5ntkBJuGuKeqb557aj72bDZ3awvGnFLgw6qnbrMi6379DuhZPPMeBx7s3zHhbjRLsycKQPk7Zo4hCeDMP2",
  "key19": "4ewDnYbShGLk15eqxHShzoxJuvswUN378QPqJxYgt8rvqBjocYkzR1Yks47iebuSNPNCt5CWLTHeFv35mPwM4hLw",
  "key20": "28MPFy1UjD8ZHiyUUHXSpUfvbzHtUNPrphTaeCtN1BxKUsTY8vWab9u5i6Wq9dxSyQNpXvXdcGLEPETnv1pCWDtG",
  "key21": "4YTy7pCx9UFoWM4EjFL4SdqhHTg1XMAofdxyuVgbpHRr2MY7xHEnvo8EKXTtEm9QH3bCpPoZKNWqWG1wE313836p",
  "key22": "2vGGuWqbq11F1AU8owahbnz2QQJ6mjejdPCwRKyr5oT3kbK8GKh4xQnVfHgjev5BgAoWBLwCsW13G44iPMfFk48j",
  "key23": "3MC3GN8SkK3sU8FCCWw2cjAwkLkVszqscbPCNkFQHbvgJnzZLxd3aVHC98BbC5Jr2m579DJtGZJvU1PSnu6ieTtw",
  "key24": "5wcXCFPSGPoiPTDf16yF1HTumWokFVU2Zg8Zt6PmZoXjiJStgM59SG92TLts7R8cLG4ahT8dP3B28qxhY9tkk9ob",
  "key25": "2im4rYCeuVRWQJSDQw8q1fSBLDCSEUpUNoLc3LSGtjSzGbNrXqQMgVaXm3BCiw1prJiWoK6mmeYBzdxPWqtVSsua",
  "key26": "2fZWQf4BxuUr6ZNuHmSAF4U2vrHpNgrmAk4pXzSdWnUpZPa61VsKhVFoV3h18iNZx6PEeBAgVBNzvekySMMNN9KQ",
  "key27": "54YyvSXvJmUFZjX8NBErUjijbbjkkSCCnu2xTyETvJK4BbUfK2vuVLjSL1KzqRfV9aGaTfqmvpHQBCsZJdT1xb9C",
  "key28": "MBRCvCVyhf7Z9Cc1VLQiS5bPBGTYhQ2i2i1cMotroTJacpB4Jo4Z5mNRYq2XJ38T15ZME414Xq82pPkL77rv6jH",
  "key29": "2AByzjegrHh91YhPicDHYu45C4T4asqzZJ6kZLiU1aywbCENz52TtWSNP3H4fLqmJjBHT3yA34cYyaW6ZyySL7se",
  "key30": "4cYuX7jd1Tx3uRnj8k2TFhUx3AoDWzq2G6AMAyuHJEeDN5BSxtEs73Kf7dD5HrkpfwqzVcR6mLm4Gv6LH55Fty3D",
  "key31": "7voYcSw3ntEbj8nhygVJeFtm6ptsZvUG4SUKiJcYLcGXgoug6wvc5YAZwK3c4fkXgwx1CSW31sQtCAGyQAfn5QV",
  "key32": "62my8JhcPtmpGsmvwbuiMw1EZwhXirH1LTUBKHUDgAJAe1mPzsJcjMsrVQrwz3w7rfRxjUNzDByFuHPsV9KgPmX",
  "key33": "De6iZzyzxKGzj53n6XB7q5RXGZYCcxDh8852gQrrDvQZSdQkxEFFmw6yyJKAePMsUU1ATGQFncSePfQnmuR9v6M",
  "key34": "2pqJzreMTYKRnTL5sqjzMyhHWdNcqVTsj2aSb59LakXmR6K4yvVsSqWMSDgDHc2BXqDcnNnyxp6YWHvEBU9ZteTw"
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
