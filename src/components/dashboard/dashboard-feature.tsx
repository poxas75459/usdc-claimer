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
    "62sZF2tWXFAeyX9vJzSwR4fdDHsCDbPELTm8rDPkF6DLBEmKcMUn7EQr6m8Qb7dJMnMPXNXWsyFo13qbABjVkzVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49x247LMfAco8WJz37sZeHG249sYD76kkiMxbFnaVMnJDcT9yEeoCBm1syR2XnvaanHGZ9yyn2NQfYK3Qc8zrjzc",
  "key1": "44dwHJ5apo388BteBgQ1oDmjjcLVUxyghi2EyFezy5GuR7T8La7WXthvmo51RKNetE5fZRFdSj5RMdShREGrTUdN",
  "key2": "WHrSCXJxBmSKXFxMmi3AYn3YWKnaYtLMC3vSX3BdktpeEeiuMLMR13xLbE7v3dCqt9dCwSzVtAnb9rh5ewuLRsq",
  "key3": "2vc2XAaJJLaikEMNzyQ6m8CgE4cpPZkSX95E2ZxRV3B1abjLKeQg5Ty9us5Xm5BpXfe7zAhQv72XkpqcLjSfLuH9",
  "key4": "4aZ4vtUJNLtPNoErLV4QHYnKqCBmNsYeuFp7PxFhhpXMRZ8q1VxG8qGTY7vbJxmj8rbkLXx4gaG27zFfLntRQdga",
  "key5": "5esrTVe7Nt8hikMbXxjfTu5HqZSnyH8LhuuuSWgviW1QgLfY7BoZeKE91Vy96sWEzEb6XgthPnc2vF3xLosV8DfJ",
  "key6": "4KVFved4xuc4v9CCghfR8w2mzGGvt2AnucZMvwn2DCEfdPgHtVPvEnSoEiXk7MPi9ivPKWZt8UUNBgtvCaXCvNW1",
  "key7": "3cUGJWJDw22WgHQoAkZuQHiCvV1vTr2bhjuJkq96x599nJpL7y2EogACvvgDGq28pEVEHw2NVoR68d6Tb1peHfBJ",
  "key8": "2JPuesSAjnMDiHf6bx7iW3nn684bjZ4n73eAahXuoN77t7FsVsKZQxtLGqENiio3g9wq9UYAp1kqziNS3t8MiKdw",
  "key9": "61vKjKaMs1XJ3HePEebmKpjVgzvpXJmdJWxvq95C85zHKqUf8AqhFMRbcBiWTecjWaZBMXZvjiiFoDNmMrfsxSwq",
  "key10": "2yUqRK3HWs4mjfGvCJnWR7UEhH11RoCfe5NpJdLpN8tJeK3jZkhdVTDoxj5iEM4zUhvrWiQPMQVb1Gm4DPykjXhi",
  "key11": "GyojDqk5hyPKmnyKX1XrkkcJ81LJfrGYJo3XcShTtvhdo8ZmcgfH2RuxGjAPY8bAsSgtbh7sTJ83khLeFL9cSYG",
  "key12": "ZtR4FTWLogzvZLVR9zYKoFu1sPKPyng4H6jn3rJaJGx35WHBTzFvXT6pee6e8erCxvBkfgJiHYwLoEYxFtifWkx",
  "key13": "2Gcsozp9tXf7PxZg5GjDA1hxaUSvTbhvkGgroMdAvpUm13SFZ7xDNFBNpGFo9XTHnPKXMXLMNwcXMX3azB5yoFqa",
  "key14": "4idSHtqMGoJydYE93AEJxbyGLRWoTpEPVFWaV8CNjUt9HvEAtGZx2Pz7hra6BGhC7umaHuqK423s1aBXoVyeUJbx",
  "key15": "3skeJsmKFqvoXfruB9vrRKYuwtvUzSt2fbTJxiPpzza2dSYaQdvWXQCpSUrCS28sEAtP9YrzqgphDUAhaFsJ4HY5",
  "key16": "39gahecZmBi19t39dAmLjiwpEVpKpsjuSXbrQj9GMkUra4yqT2Lqxg1yPV3dZ9NF4PE94optMY8XJdwhGE7JNSSC",
  "key17": "5ssSxVBNTbK6MdNAQyT4T34HAKfaeiBxqQ8wP6mScwcYSU9sjWbmgbJP8MDtAgJd7Mr9HFqFCKmfiFGLrJNAYh1M",
  "key18": "26NamyRZYSQq8EttX3X37gwbVZ9eng4dJW2zXsZkoUHv84wNWyFW3FF2HcsZqomrdiQqRpYqUT24Tf214wsehE7U",
  "key19": "GLuRecPeW5XcEeJ2GmTCNYXgi3rVVzY9gvRi9m6ejAgFYcZir4BbznKdiLx4Y1anfMumH2h5LMiJqeVXRAHNqdX",
  "key20": "5NfpVdSYog4ySUYXn6ZDZxQKYVERnEXTJEouCiEGH4ZUQktChzAXQqGzrMA7rXBnY7btN4cr5B2zZBVxm3WJvxE2",
  "key21": "T8katGsQ3qhLxyGpmkrSHanofDGDytWCeFH98W1vY1rET5nhkFcpCFt62tx85bGL3fJef7rJGyDinbUazf38XLo",
  "key22": "3fmGmTfQhvdJS21pH6Ffu8SnPqsN8RaxjMcwycMuU5tk8T7hyBDhwPkWTTFUNdvcnsEJMewL7UmEBJis1Mewy9XQ",
  "key23": "3v7WzzHTmmjfMVa7UZwyy5FaQUy8R5pwhsfg6XDmXgp9Wwe2jJSRnLCarGZxp421qrHxB3WJstJBzusVaBQTNy1L",
  "key24": "3DCFNVszBTgCueT15dMkhD2QwevmEJqYRtHmR7yF7a176mCJxikUT9eVKjf9UUFxoG7E2aTT9WLBPoVDZSvr2wRF",
  "key25": "5dXcudPziopabg7BqP8sNgkLGRdLcj7v7PZcou4UJEDcbuwvePCz85VR63QZ64AGryoRWgMRHV9415d6uZjtNycd",
  "key26": "4usyFTSqRf554KQYkd8Tiox5EQ2jxuLBWzhBw71nE18yk7G5mFwF2CW18iSQgFEz35EmXqiq3EkjoqczQR94AvnH",
  "key27": "4ENJE2n6qd4FBPaYueannnN3oaCD2AeAeUfgTH8DE1aDLffXXsFiEGiLMgDUht7ZGsQb6yPvKirrbfWTvoHAxDpe",
  "key28": "3uQuRvTuJk5GWLuE6j8gsYn21fXCgJ9WLoi228SxFY8keRShF6oYdzEFNDNHQ12VWuXt96nZcmzxg6ho9ds52vWo",
  "key29": "NAi2A9ajodbJkb3kapzZKtE755VtqtAMTqfAFudeCEjayC7LGaVa29DS4jxu6Hj29tDm8xnW6RcLmB1Pabv9tPe",
  "key30": "2vRmP5wSv156bHQKcKH3S1A2eqMzB81HJ9R9ksCxvCmxEHP4Zn9fN6ixee9LKJ2YCj9ZEqRCZ6u7TTrgi8pR1ksq",
  "key31": "oGmaMmXTdD1HWDzxwtVyDiyM1cJPtJ5vH7aGqs3xe2s9J9tw7pL5fvVka6CyvKndb7QceWq5VhDDbfAejtWXgYJ",
  "key32": "aBio241jKnKQQwD1KLMZZLbrteiT4mmoLdKKS9tSui2agfeBpYGftKiHBHiViTsmwGSuRBL3WG5u3ewciT3RuBy",
  "key33": "5x9KbWtwB7yNLED1e5g6FXokWRhQhGz4qaLjQi8FEhhcGe8JdvEVA87rWy2qfHVTwFaVqgdgZfdHNMjxdZYfskhT",
  "key34": "2XcT8QhUEtCUmM48KqCc8fSZ2heiBc5gTov2HFhqVsnkZ4B4zXVzwVUgRrdip7qh7EAMwMCt6aSVwBdQmdyoU5yy",
  "key35": "59otcHsvQ7ztYsoBfhUMLiksNvavX3aByR6h1PTKcX6RrW92xkC7TjjyFZG5KYB27Pof6YWuqUxvoEVFg4Xi63Up",
  "key36": "3xYPj2UXwLE8AQpSBQS369qvWctqcFF7bRH2XuRYamAHrRntZkLw8Gq21qyBzHgWb6ocqgLCXAHepnWby2nRCQVb",
  "key37": "xVddc85wwka9Ma5kFW9oF4WYaZApf9rm698ndr3tBRw15YpCzM9TDJbdrpFY1ekEMfbrBkobPTWQmcihjRiyMyw",
  "key38": "2TBj3f5x7va7mAUQmS6xHnXY7V8ivgeHCaTjR7rFNwgEmngJrZuq3TwdmAUAC5YiwjigYty1Puafyc8s2Nw7PTsm",
  "key39": "615hutWFYHVQt2vqsGbKp9RXP1FeB9yNcbSYNGYnS6mNWvGS75yCK9ZHG5qg8RLXXwEXzAYcDCDFsEb7SsemWLZq"
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
