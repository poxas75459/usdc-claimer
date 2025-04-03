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
    "5LJMVdCxhMNbNAEe19BniZUMP6U1DrEB3HPfruNKWLXBvfZ9FDa1aeeiCCD62dSwFuxQzpEiMBvazUEMkG6a7f7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPkMctFJWrm3j9xcknQ3AypTpVPE2U4cEircaYJ9yyok38ZmQwq5djWEokDypZdgu7GuC9mDm7nU1SJEAaHhaY2",
  "key1": "5uczqkiapLoj3XeUQ1s4Cme7526fg85FvG9dTDuFjKC1ZkP8MaP76djj9qRYQiy1o3zLFJUVrjbun5xRt2txCPjY",
  "key2": "4MgAXpxUFjRzmmaSPs5yMEKYp26TNppw9CCV58SUQEGrMy7KYoGS8uJKtzKFSa7VowNVDyfHQ6zVo4ub6DsJeYwj",
  "key3": "qihkosGg2LBxR28ThBbGTcJHFJXePXWZmufZuYj2kU7enBhHdiQu7gE8aFEA3u5yi9kricwfyP9nGjSnFp6zxZt",
  "key4": "5LCD4s6LxL8YZY2FRWtTCaBgUAAWzafAb9RyvYQUniusYehwQAiy6Rmz7DHy4vW2cwAmn96sVX2X2YzjExzMVqKn",
  "key5": "4v9G8z8QGFT3C9KFxqDt5W38KoiCwfXoUQPPYJF8sQoNi1KFif7VokeA8t9dBCDgN6RKh5qN4bDKbpePaXtxH39r",
  "key6": "5iRk2VwnWG5o5acdbfGeT3j8pRd1oWnn2jij7bbXczpm9EGxZtgs5Bvz5aqyvAwiSe8QQSCHzB1YCNEPW2cKv6Ri",
  "key7": "97eAJDh1yAD8C6yvPwYo2ma3W5dHTEW6ZS4LGtUz9MFnyoEJ248bZFFq1kgqxmyQZ7bcU85mepdywbGLtGWXs81",
  "key8": "5o8J124nZwURsemmjiSs5buQ64iTCsYC7kmnQxBmVhE1mPjSQSeZjq1W8Vum4gQakZj6nH1t7sWxvMUHjk5K1EJJ",
  "key9": "5AiabdGUWTnaTozvksjFgtSMrZEsjo8bTtUodNGEXhWfTS769h1ckC8Shrr7mxFXCFnAhCg6KdMmYSnraxXTSd7N",
  "key10": "391NK8NWdNUs5qg9mvAsraEjezY7zbQzYFMTUnJmaLMF7AcqXTseU53YhctFStYnmJsNiZgvNZXswCt6Hp8ffTgK",
  "key11": "nKuRmCStkPTGeFFuCcT66Cj6x9BHhbVWKBzg9UakMuCHVu28d3gjA2G2EneTSfxvTMu6eN8eQ2ZUtLLggs7pjzw",
  "key12": "3xKZvfAMMyqsLsxjhoxCmbTscy8tXr3Y4UJSMXQirEArzpqQ7YqHuuLffuxwGNQsYQsyQP5ookskZMwQV4HWNXTh",
  "key13": "3AAcNwnKmAYSQ6hTr3Qc35MebwS2iL7pCdZPf2mr6Z3CmnA1ZxMfoENMhoWTbWVV6Xuw1fRANq5DZ6rCzrp9LPTx",
  "key14": "3dE9PHSHFJFwyAw2vsv78xrE3bTbbRMTgU1FirPF5EpTCowzUafJcJYmfzDbABNFtcaze8yR77ZS3E3CJZTDbPJy",
  "key15": "2N6QxvLNTEybQVHksTKVYvMb2mNBoonJpJ8Yk2hFtHY4YMBUKEcp4W5zkJWtPQaJGHd2HqacxquruE7NyMsmSgKL",
  "key16": "2ywdzs1eMu1b4MV42geDpfQoDgK2MnC9pVvVjKUn8XP4YoYwTGg3imFux3sT2GgBjEFztYqvPYfPxhdpvx2pA7ue",
  "key17": "4LzuFWpTEoYeioqb3M8bbYehc2kdriYN4CxJY5ESueq8zzwQwTE3mLxjFpYVQHKwR2exk9P1Tkoa8WCdEAr4C29g",
  "key18": "G2iLs2zdmPrfJA6Ec7FcNf87rwVPkyeTWXzWNJq2eBAsqZM7RhZsYiQnJXpg4rhThvB3vXcvEBycmyjBJVLuJK4",
  "key19": "igVTKYAaktp7tdZN5WfZDH8Hk4Wwaafarx6JDKyubVrduJGvhGjefJeRJsJTH8aYgi7GQRXwizDKvW2XrukrTE9",
  "key20": "5M7BDYDj1AuJLMP5ueVjBghZ91XWrkwm5EsppEY8dzkjF33D3KnKBFn4k9SvMpcNBTEbZWiECQmwSwbjopwKC5Fw",
  "key21": "mmzoRwBKaNTX2XmTgmz1XZW8Dc7MJ2cicqyioP8sq8WQrsFqvvVf9QLQKxpmDNiuxSWDQBz9g2QxPHQLaX8jhkH",
  "key22": "3H6RfdfwEgr84vHurStgknKhDX5MVPaqRMuWyFsdQ2LpucyqRjU5b7braQUferaS1VLJfExcUKaVZvDcHXnxwED9",
  "key23": "3d3mmArmtRRyz7RDDffzSruAca38t3jFR6nZ6UVq6t9M2DFzpQHLh1Z7eiRagZx3MXvqKhoUmCmbqUCE5nS7mB3J",
  "key24": "3fKNZWf6P2J2K5zaVuQHtVPj9f7WdueYHBkU6Uo8q5hpffFeyhuQUXZdkQmpgw7u1X2DKpEQYETu5ZZtBjGbiamc",
  "key25": "3ZaVQ8p9yT1Gp7geuJqBaJ3fM8VPUDvpAY6ubV23jCvdxtnVsdTGRiufGoQKePwMMA7h17V4sfpsn5us1UD4d38e",
  "key26": "3qCfDSh8pTMPQUnAJt1SoDjf3frbqnYeDh1Vct3VHGaYFqifECXoMfzdys1cvJZsBKw9UJzXfYrosAqiJaRmTgK5",
  "key27": "22iwm7UfFTZVTj2XYKBSHPrviMaJBsY9SZaqjMkeeHZtfu6A8EY8mqk6aC4akZJWSTc2Pd1pcmkpGkTVAfec6NYh",
  "key28": "4WDyveGYnb7F7NEAFKvYwEk5LACq96MCJjGP3ugjDoCJD5eR5TQRPVfmkQEhx8RC6L29GyRqBE5UvpzUeEA14WdF",
  "key29": "2eQ235DA79SR1cMU2H4fSfDx8ds58zM42e3NmgoDoGc7r3kDrR9KwfcCk8kz2yEE51DaBn315iBNsShTnAiWWjxx",
  "key30": "5MPsybXMkmKAjK7P18dL2RSjMZcsMaxPyGEjcBZt6xj1emJuvcDrBNf6Ncgawwq7aS6cCfkHDzjH6equZhvjrRtg",
  "key31": "4v8t1mMYvDZtzNQAzJJgMZvhZpt88XteVL557Equ4JDNuPoKqrpruaZU4mfArKuJKQY4fYzsUdx9HSHiSnqkp8hc",
  "key32": "5eYdH6SACRNNsCvr5tdHx3vfPp5bGZTh71cF1FiUnXCafDc7r95Y6bu1yFsRQfMfA2XyfN8F34eJk6MnVoxgoRHe",
  "key33": "4b46FSAX4KZmEEU91VcGz1zHxFrxuYmhXNh3D5g9SoLsTjCowZdMhywreT16kSgBwSRzxJrGcKNbU5aJEHgaKqLD",
  "key34": "2KzsxCdmBvkGKBaFTW5137tJquEeuMb7oVM8QifHDZKw9g4xV4ypjE1mxktEMcrRGWSZxjxzXSvNcQmaDcoP8NZe",
  "key35": "5jJbWRubZPuNaGcZgg9zC5EfNg4enXMk1Y6FNBoieABvWpMWBAHvcsnwnKSYyQpe9W3u6Kbo3YNdW2m9uvn6sYp8",
  "key36": "66iPb4qvzzEZKrW6V2QWuM5Y5wyxAU3YZmfhAFVtwANPiLiApXCSqvTSVnSoKvvii954pnBh3PaHdenat7TcRh6r",
  "key37": "2EojA1MbFbVDuuBX1NCeaAF2giGgtS6noeFQiZFHUMLepUobUXZnMBPAg2wZKwjkV7nyXDRzaiKy7CDUQP2UDra2",
  "key38": "5RsRZHbcHZNMQbMMg11hvjz4dmH6VrPipN2R5EHWpnXtxqAddHr6s4QMwQY25uZt6zJ2NYegGBziSRxkxgCua7sP",
  "key39": "4sZXDRE7tBgyHS4G7sT7KDphjLWVjDg34h4gNKYheYMfYsoyocizJBY3bStN9RkgAuxvewgjJnzSPev6HmrqKR2s",
  "key40": "pFGKbVxXxHgY8D5Ps6ENVTX283aedPs2kqQCT5J4N2qdoSevAdeKpcmYjcJ6ZoHV9VPkXKt8xwMDEHMqYFNVD9F",
  "key41": "2JZveD9zVr5Eq2h8pRaKi1bQp6fkgSLHFbGgthB5VEi4j6mxJQVU9LAZJsGrZ222faqTPauxsmUUu5tHHTthPo3i",
  "key42": "54uXJoRTNee56j2EkdQaYiFxsGjUZc5oJ4qVCWaNhfgG3rXEcfgSLGdZvervjn3Bm1ZPGkRG6A8M2LR8v3vhW5Ur"
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
