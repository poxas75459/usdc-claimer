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
    "2SPyztJpg1NkdPkmcCksRrqepuM6pfjDWBJi62w6v9Jzk92YkWK9UXqnrhJUK2bqdTnX2Xwqtf4LmQLmfrHYaKEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iRqin1MAFgSkk22YuEmND6txRutxzSmCTs9tXzeuHsc6rMLVgkKYWoRbzrgpmb5mjpDQaxRW9zD9gRjDjFc8ZGB",
  "key1": "4zUZM6pXbbwN86d4GeM2j6nSJJ3s6aTn2SRg1jgU316wtw5cavxBcmjjeLfQN8Ciz5yjAXAnzLBJQMsf4hAoHYm8",
  "key2": "2qEbYrvesivYsKDhztPMwgBvtP3HLaobG73yeMLjLcDMVP67kRaU1upepAcdWivdrnbDGL2Q8NiBUELhatKNhRrH",
  "key3": "58rfy8GuSY3RNFGmUp5ZxAScWwfsDGDAg2uX94srW2WvBL5vCWFhRFw6RXfoqMioRNYjjVYc7whdZzCEhY8AQRk3",
  "key4": "4UnLG2prKErXmCQ5dBb3KuUHDZuny9HKtvUqPU4JnKWse5FJMHJgitBtkgjpU2GDZY2uxiVy1Hmc7J8ZjRs5jdoU",
  "key5": "2GNCJGhrk381DkWaki3AAExdeYX7FM2AUQ2Skhe7u8Uuroyesr4i94bZJvkLRWSg9BTiW43R2nwSvnQgEi6Bxxrd",
  "key6": "3jxJd9tdHBvqkhpWtEGwPMBK9kmYqZY6Xj5JHmt62z9sWnfdMBbpWTtLqwrTmEdnaxYgaNC9YoSz16i6Pmpcw3tx",
  "key7": "3EsTK5it6id5FBiFqmBKFnJGs76rDsFjQweNFHaztiQtNpT4GDb9cE3EYPGZadcHesjvAfS9bCg5k1iRSz4AHXXM",
  "key8": "42m7fW25mKwnYjMmXXBB7kbBVQMtzepAr3CSFFR7VfqrxX9uqakxwQ4YcP1X2PBWH4qH5onazrunAiAS3nkBvRub",
  "key9": "3FNMcDK6Wuu8GozuyR4PnAhzfijtnzk47mLDb5Ki85jrPvdMo7Um35A8A5og6isFtqLPEK2vj89cvvs7td3rGmZC",
  "key10": "4hxm1F26ztzmxdYpNUJoojRG2t4fMTDuC7dkSyRgFmLGERBDNFErzzo2qPoMLcGurkLjbZR5BiyPf1NtQs3aHced",
  "key11": "3oExZra5Gd9MtVa1Sahj4g3xLaWTfiEK87UDLbQKj3zv9qMyetZKHoyzA3wb3N9BZNM4LAKXxTR2Lxda6HdvmfaU",
  "key12": "xbbr3byobEpdEyRsL28tnPFXXdjx5SiDpMfYWUmHyEwRAxsiuAmoEzoU1TRT5ufJNfG1BWGhm6nKfgcWKxmK5M3",
  "key13": "2hKZvpvscWPXAKfQ6fWWqVSzFBWxGuHjcGKwGi6TKe9ZTDVRjSQhoQtjSUijpKk5wakwbkSZScefwECnEMUkPFRk",
  "key14": "5svtnzYwwwrJU6C6n5XpFKNMVwpNjju6pGMBAcdVYnAkpKFoHvJxHqtMJRJs1D2UM6x3KfFvAj7o7cmYJStYh4tF",
  "key15": "wiPGraLFRWyyZz77zYjcQbhSM32nE4nnJ25kQ5yp2E1RpWkzRp4vkbuQy38hjjGo5RohZZax5MHbZ4rYhfR3x5m",
  "key16": "4kmSggvX7uvxN2WHgjqdKUj6VgunTeGyzAyUBofC6jNntJA2A3DWxNKiFtS1Dj91mcw9AeTmCYCsAq2kCKor3J6a",
  "key17": "451vkdSfxRuogGVvHAG4LPdRXCSj1ToVoBf3bfUAKfzDsZTnxGsvSXDzJagesKAw7cXTpH6WnT2PfniwpjdZkGd8",
  "key18": "526N3MYQWziQdGXjPvEmRCTYAVhVufdiyehbURqTdpsKUmtBTLF7tfwc7iAyfWKdgRod3yRP6TGck9rZJ9cHatwe",
  "key19": "2LdCWKnG62PiJWSwiEEfLxX4gA3xUDSTPzQ7Ejf31XRau8HZPhQNio79Kg1ZKin6Rjs7RhRNmnCbBcNjz46XvJdX",
  "key20": "4EzStSragGUDodGKy2fSJMJtvAFGpu46ripX7YgZydZtRE6sLkLhiGTrSNgj4vuF9MG8GCPzbe1Ljux3ATL4ZMh2",
  "key21": "5t62QtbvSdx1iNLH4vMrbAB8GfAW3wdzgxYNS2dHnogf3HAmkwn2stcELCXSti8oEprtK6xqxQg61FcsV5hgVK8f",
  "key22": "4FBhYE544S6nm1EMjdh5mKrd42NURTSe7HG7W2gWNaYL2zLNfMbdT7e4kdSRMJ4BgM3XVQHXR3hpv5VofbMnL4xP",
  "key23": "nty93dN2qF9RSJEfq5XZuTQatruzL394sYVDScYKSYhB744KFPh3DDgyuArJC3RY92YAqEXV6DNwCzbpk6Nc5LD",
  "key24": "5S4vcwpUJTLRxKQ9bmkNaGV3N4hX8SVq4tm2BrB4mn5kS5JJeuZ1ehUuJzWNE3xDyg2bynpgAGXaNrbCM8XebFsz",
  "key25": "KPJBUxE6bGBStCo9tfpTNr5TLKrr3ghka8vNAfWy4cbud3pyyZeY5toQc31M8fyKiv2Aq6F7PCQ8SKfMzV5azAk",
  "key26": "4FWWbFqioinAPSrJ2bkN6qXUMevAW5z3kuCRLrjqZvmqQZTqnyAaxHmPxkny2iY5FKicKA2ejFVmwdW8qoNJCzRg",
  "key27": "5wSzAiuX6vDqvy76JpFt1JGuHBSi3AWgrSGMyW2BJ2Toyo6eenxCdjKyD6Ekz4R1m5LTKSZ9k3QU1AqmJ1491cPq",
  "key28": "bxyNqi9vqdyEji394f52BVkvesbGySpuwZNebaWYkTh9ZU1gk5p83TvFE1ou96TrBGFn7VonvQjaPhivwM7nCVC",
  "key29": "sTTXnDaraPHqHwiir2xJJvo3R1hzJiTJ4ZmLG127NfKFsRiiambuS7Tv9nzVhqwXd31ACQYk6zweqj513hJAsR6",
  "key30": "3iSxZD7RzrscqnNMpebQfmkqofvYu1NXFCYtXkHTHMMZvGSquU9xBCZQBNJ37KGpd5XzP8X5oSEAwk2yDhmjDbDE",
  "key31": "4vtnufKYPinmd7SQ1e2aCGUZYwoxPXCj4C34TXNdbMGrTiGw2dqAFS9NxT4gcHpo3FmxqjPeX3iWnHVbaTNRyaJE",
  "key32": "2Pv5SyE3B9V2UESAxGevikMdfBTRBj86PVJoEmmtUSAqqwJ7trPty6J5fcvVgWJEXUBHU3DT9dRTaPLrkQBqdjcg",
  "key33": "B4QsMUwapA8dR2goeFJLGG2nSDjEsap1RkwG9nBCf4Ao8wdpexgrvfbZ5GbtDqooFwFT25kDMRTjbzs1G4TX9Vd",
  "key34": "2Xmkfo4tPwhyKnyTdP2wwbpGhUAp4uh5kv5VVxzC8yhVcdEVUbhurNNLwyJLavc73JV3QBYLHahqnW7Bwocj6CGk",
  "key35": "4qM5pxz737o1EaDpSVLSwJSGwxEo8aWTMrsCdjmfnR8EghT5g6USviyj5hQfmSWW7CQw92BqxY7KJsDEe8igMW2n",
  "key36": "5vR1TT4EAYnLRUrxEGWemoYwrViJKMTRKTt612LmMCfSqzusj9jFThaqmYh4ZZ4SK5XQmYYtXpPFqA4kJky6Lunx",
  "key37": "4Dgw1T6NxETPZUUWogksk4Aqn1ReApnWuCd8Q8SPBMTKDKoxhzQ3HzTiyfQqAGRiXEP37MeRDhNGpNRPyJ6GA1Hp",
  "key38": "3F9cW8Y1FfhiifdHuuoURLd5PSsXy8oMyLE7aFLcG33kLZHzj4xXCbxpsM5B2CmSznE8EmfBgeEAawQkvpasdmb9",
  "key39": "3AW5BzvzGWr692A2fcaBZa5t4mKtmqzfBHHir96bTrc2rUEJhrTp7gqmtJ543uTurkoZACLW4FYk8zjf9rvzG7xV",
  "key40": "5KRfgPcx2jgQiZkXawWihBUUJfZdz9FBoho6uC9RYAJi4ibMhC58rHZM8TeqAPcY3cSNRjWkbUJr1hsFhZpwVkCP"
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
