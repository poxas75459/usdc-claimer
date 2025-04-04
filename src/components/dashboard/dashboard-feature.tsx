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
    "5DexZ5aPSVrZoBXaPAt8Xg3nfWmsai282kDV6MBZhnPZDmyuxwSc9426tiraE6fe5oThYcyg93ncAzrpwMyLJ8Vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eH9VWo5RBxi9jXL54zjcvC5kAdxc5fdKAYmqgTwDmoCfUbovBvpqHGdMYwJi7o4Xf32cNfieFa2mmBBEKx2vTvy",
  "key1": "5PXC89W5gm9JePKxmmMFPiSDVkX376GE4Dzrg1hKxv9EnN5msULFogGbES8LAGaFuKrJR5qYoiX2B3TDccJXXA6o",
  "key2": "4AnyZeLGZAfhxqPhD149WT9pnJ6jDj4EkH95iixw6jUzrpbZwGWUY4Cht91PDdQsMrNJXaPgVRLB7Z9Xv9PuLuxM",
  "key3": "4MGh2YmGLL43jRcvQUYYWR3PR4Z8ERXka4CBJ4ecogPsz6buPubaRrixxXHjgXGYgnQ9LzcuRNPxh6c5ftYGsa82",
  "key4": "5AsW18jvpWoyFMfdyHcqopoMxK67QyBMPGY6HKrrFYkbmsbrBEs4FdxsCu1u22gomcus9sNi8aaroxAEkhxWsMzz",
  "key5": "3RMhju39jko657Tae7jy4U8s36EcrGPQ2V6Kfrr2YepPF1mVpaxehPUrQxCyQAwQFJ3qh6zJyqZitUkmXRsZgtpw",
  "key6": "5YDjXakKmpcF23hsTKQ96csDciSPYAXVtp7TRKaYoj6oXu2oMh3zgxXHQhbkzExusWr13m1Mj8PcMJCnKvwd6qcq",
  "key7": "5i6opNrAXLFaZTu4w2UMx5PzpHrUNN8CykFYhtf2focvQCQFcjHi3XGbugQjDV9ZVdzBDCe8Zjo4YbFqp2AqLQTw",
  "key8": "58H8uRBYtY4jywJUfy2Ky1Fhes7hDJpZc8nKUcm46SschYRbjqvjXNpjY4n4jGe3v6MCg9NV6MwG6ovaDThQ7tFs",
  "key9": "4NJXazRUVr9iCMV5ooZsU6HU3Ru1m3gyHVUMX2TEbAL5AjHCXqr8WJPBpTeKBfxgjxQAYzJo8reG1SYJit3ZQd5K",
  "key10": "FZDzAhoFdPCgUubug4TmanGNtYsZZt1FBZD3MYXHLqiDyeRLc7YnyHt17zHqfaJo6ARNbLPT6ThkP5iENCqQXZD",
  "key11": "52U5R4u79oF661titSiKC8W8SczUUEtX771hg4xuoxMoAvsp8sb853dVV7YXMZvegqV7wnUkwjqoxLKvnQ7JCv7K",
  "key12": "672GMxfvq3FjRwiX7iWFrrAdz7UotEoiwjJgJyuEc1xPS8BiD1NGptnNNcGP8Dpw7z8cu5XYz5JD5PBrExohPpqi",
  "key13": "4aHKrGSZcUNABw2jsmaUt4Msw8CeqpbTt2Fy75KzvGdmEwx1KgP4xEUJNzyQTVMXchr997ZK4AGeBaT4wK7sV77",
  "key14": "3wa7fSgP65ajoPt2hfsg43WYH6jBqdvQ9e6AveP639fjzSUy1igTNLoPfvMam4toyE2bh3dgKX7qMZRnwMK3F2XA",
  "key15": "5zFYqkUuhr9hjwbxq4w6Lm5fcNoZF9ufMgBMu9WxyiDrGufCWoHB95wWbjuszystria6UfyQ8fRdiW3U5uEi4xAG",
  "key16": "2Lxe472CWeGM4UWn6ZZHxGp6rMJndDukYRu359EgsKAt3Ym8XkTiWireAv6biEhix91q7yRVWPMQLL5DoNoX2gPc",
  "key17": "5M2j4hmFLCVCYRdQx9ZhrfDLmzoScgiBZnYZPfwUST531obSG5CvBq2rkQrdtWW8x2SFr6UZqyHVCVcKaaeV6uhF",
  "key18": "4uAwdBQ6ya8LuCvtnr3LPsJVvtUXQVS1BJs4MgAinhBPtumMFi2ZQvEx2Gmi7bvoeq3DomxFFc2cbShKYeQf5bXV",
  "key19": "5DxfkoLS7g8S12nzKtntaTQ2AC55RQT59i2hHW1feCKQJDDbrpC9MFpMzbVaS8UhkWPwSJmLotHU1ZLgHEiuRSv3",
  "key20": "3WvJk3stdnaECwrXR8Ae6xByv3CTHS4htoVsHusLiPkdRCZLSjLFwsgtNPNzNScD7Yb6wjiBSAtTsQ1XSGgx1gc3",
  "key21": "4Vk2eWtT8iFA6WsNFFsgLsebVG6rQygKJ5MzhkjpbaGj28A2rVUV8BbujjK8FkfF2LVNyw6XVAcEuJKTU2qA5fVp",
  "key22": "6YU5chPfyfL17hpXddetMTZSYcHfV6ytgPeNdd8MuSYavLVSNrHsaesmhL7d8EAD1FRh6ezBYL3T4T9KVGF8xvz",
  "key23": "67YtYLrxbyfHUJ9sk6uHh2DkcRateKBbvkFaY7zZAV4zsAoBY9xGRiPB2YDuthxKEP5aMVoQPGmUiL9GquWRsZjc",
  "key24": "4pd4P4gwW4jW7DmE5r1yXWeepAim6Qkd9oJqX3owHUmSNstkNaoovJBGKRN9kuQAf8hcugLmnP8sbcKX2UjDD6x5",
  "key25": "394NtGZa33STgy418EEQcpbkbu5e8XP3Yma7YR8GP5Ga8AFsw9nD6wpas7W1kDMyaTY7UESKp2ZrdEvzu6bGgVeU",
  "key26": "5bexSMPYKtQxqmjGVKSsMchUK7zvnVZgzEgLrPfMV5TAwZ6cb3NeC8JeRtyG4WCHzXsvandHtdXGHL2VNFQ7aWyR",
  "key27": "3PRrYUdU8xFXf4FiBkNjaTdLoVBYQRy9wa8N7ChnNcF1pWJ2QyJzr7yhnxMvWi7kaJEtMfLCKKQ72nzUwjnDA8Y4",
  "key28": "4rypiUBMMRdk5v1Mu91TmaAaWVjLf4CaDSwrpk6A6gQt2nTCok3r9dw33BLj5psGVj2oAL3McCxhUXeP2FmWkupr",
  "key29": "2pKNeDZErg6r5wbAygkkoH4HVX4ZKpFT5Nuv5WaaQUqCGztGvCxzSdE1x2P5UffyB6BWtkHbyTorHq1xLd6gfeCf",
  "key30": "2KpiZqDHbunbvSSp6g2sgXkqdbVHP1bmVVEcZfPyv62wksNrccZiPcM6Sd2yXPwSJSKCp9wf7h53PwLEgG75Nz22",
  "key31": "2KdzxoC45EwUUEZh9FVht5ugmS7Q911gDX1V8RZrrPZMwA57uTXXfCU7ooWe3neVSNBtc8hykqdMyvq5ZwYw8zM7",
  "key32": "3JyLFpEKR8VarMzTNQRckrGdp85oRNnRAdsYW2g8i16YxxacTuFiEXQ3pF3Mtvj7CJrcdipMhu5hd1iofunheZs3",
  "key33": "2vyLh7JnpmzzZUdrjwyPXn8XEtui1FpsDeqiSTQY32RxahPTDpDqSndfU2RxpbDRUGMGAss65e5yv8T7xqCcpc6s",
  "key34": "2rPxQLMgYEWAGbdtAacWdcYcZywUPQQGkv7HmA328huwYByzMnGcRaRbZHP5Zv1k3wygZsw61FYzejrRneZXsxXg",
  "key35": "ZTRtkhdWoPbs39bCP2emc9gamG7ta459bVaANGQxtKaBfWZuyX1VjjTjvJgWCxBWs2ZTgeTqhLAzGMaxRWkxn6p",
  "key36": "a67WuasLT83Xxapq25hFQ1ckrAMhPKFG7aXGjq7Xab3gVnVVq4sV4PfgCG6pnXsE9JMo2Z46oAwh9bteUhU3HQh"
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
