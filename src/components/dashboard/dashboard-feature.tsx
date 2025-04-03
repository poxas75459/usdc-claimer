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
    "5i1y1A7oYkLcxXLvXMQQ73AyziVYr2F7yipCApoa9MaLqpt9dHzicAv6DX4CZGcoQxCSMczXuLAd3AtqmMCxX1WQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53XRPAQVDHn2gWDmWn8ExKRrnVMbM1R2zAb8EszFta3vDPT4J8sU4nor386wBWCrHiUvd5GM9RD8A6AVCjozKHJK",
  "key1": "3jHY2tLR55y16YemurLgpoojaiYUbCMHS6UVEZwizZ3vWWXRBbweJcozPvZX2gUehTpxRvgKz8B5t2Co36FBpFcn",
  "key2": "4cZMtyEKzcL2ZmPEVvxCtHZk17622Ah3jZHKXJLU9VN8nmJiGNoxZJzXUkXPcoHsoZNHyaBjUgKRad6Usvp6KHfb",
  "key3": "4nx6TGbeK22AqpiyXn15ntAvzF75oxt6FckRU17rC1rS2UsxanTTZpqE2d72L5Yt6D3VjTUF4rkgWK7yndnT865H",
  "key4": "3itWBMdNMBVhCVJrD2Taj7chUfTrHc4mV3ywCnn86MTsSJyf8fQ3FxKJDyi2WyXDarwEk7kfHboKK4RjXEHe6V5Z",
  "key5": "2naUcwU87XiM65dx1Vc3WTkXqHJJAv881n3bqWqSk4Kg8FUM9XpCnMEbts8oajF6n3V51cdXnNG7oryv325g1Cur",
  "key6": "231ErSGhC9gcBjV5m8TJdBd2XSEXYxEmSUAouSg6nrX8RmBknzw4S9dUYM9k3PwG8MAEW9ghRwva3cHv1EuFtNWb",
  "key7": "5trLiCE7TvyhMLrjfdbvVRaLEsqYihDzhsnh25P3iKMVfjhgMvX1rEmwQHpYUZmJnA34VcbhJWsjyfywzog8spPy",
  "key8": "SfPsaSVhjHhTaWERPknH2iPZQhPFWg5iQndwpSTHMMq25ZgzvttFYaiLkQMgUx9eMW4benFsEfmkcUWHcNsMA9s",
  "key9": "4EAsDZXxAa1P5a4miChQ1aZTTGaxMJH7efeE5LHuW3eiS5GShK3h3oY6NuwRsLbtBtejwjjBXqk4op123tsEqnN4",
  "key10": "2bfhRyYdJz3ihiLgtWMts6TCEdeDtSJRLvx9PxefsYVeMWC3BLqpZ4dZR7UM4DZ5CLthkMPuJGGssYSFtrReBqbG",
  "key11": "2udY58QFQxDR7Kpw94tAddv7bv6HeAFufLHQctz5YbRRgQVS46uqa9kuYB8vqYEocyBfuyUoiuBC8mqc2yjqfgMV",
  "key12": "5ZA7ro53qFNAMEQMy3UtUBgrAEcGLa35EE72Y8XKVT7XvCycNVrkpNJosxacjioUfgLKLskvwCsVGbxqhj3LQtnS",
  "key13": "5f8GeZSdSs4Q2DbW9rtd2VygjBMSLwpXmUE6vmBU7NrqvfV92sjmLbf2MGCfNGn4T3Knx6GFqs5Fnn2tEhGNDWG5",
  "key14": "6491WVJEVsiP7RHwESM2Ur7t5LgW8zaWcvqFbXWFwLTMzo5ZFHVPz26NAx7hsxCyzTyz31sgGpoD797VM9EUmCJ2",
  "key15": "5XgdnFpiwXHNiDQjSuttZpUViVArPAcTc8CsX3RHLJbx8348eJPT6UaJ3Zq5LkmXJG9k7ANN5qNzC5zBFCdVCbjp",
  "key16": "63qVD9QR6H4m6dX6WHmfrnnMvRdgvbaskRM5AvLge45cmifRDD1DqGpf8XpWfG586nyT3RdsLg7N8Nk6TD9x7Hj6",
  "key17": "5pjmMiqF2H1eUJKeZFDz1rtYsJqqHbpUexB8u9xtVz5tDAznK7p1Tm6k24KZXmUqQwPwnjvRCpXFtsSKmBrC4CZs",
  "key18": "4p7YQTyWC6R9WfbiU4uzW1uJ792pR6q1SE8GjRrD4of3FVckeirg8ocgkt7bRUH4BVhNYNSx16YWxibAwX1Q2BGA",
  "key19": "4iWrjWGoi2UWGBWxgENGkYL65dmHdXoMCjTFmajoNk5iydScb9szUWJNvcANJgYAaiGpVPFXgdWvv46BBpK4v6g4",
  "key20": "3W1ZXpmKLtLJKYftpzeRbEVNoDnD7VRXBWiL9sqYLi7dp73FGrK7dpYB2tMpK75EM6ydwpSxykFLFA3xnmkofTog",
  "key21": "4W967xAVbKcBmZ4gfmSu3ZjQLkbWcc48si6VugNotifnodeCgkUKtZ9BhUNAENoVSVR8BfzgU9dTw9EfLiD75yQ3",
  "key22": "2NsGG686Qjgx8UNG4qQJDVuiZo1mn4WGgHZQ4QtqUwGP2mpVdoLsp3yRDsKR8Pk8BrW5xxRYTmeUNZrLduWgKDKz",
  "key23": "5hMprCxEowFBp4PZWBNiSr1QeW4g81dpQjBzghRqwcJEfD7LJb13zRreSCGE24UhuzwWpAqoQMECEmqe7JW7FUZB",
  "key24": "5VSs38SaEMzukNhyz98YcoF48TuiyuriUVgYYAABBhZSknd7fLLKN3Pae2V7qL3NCB7obiLbLpSVvScBGhRrqAua",
  "key25": "4H8tfJK3zNXPouCWzBQhuNur5UXj11NH47S7Abp3gxFzAxVPXiW6ysD9jCmTNFSHGNaxo4iUM85rTv8yV682Tbiv",
  "key26": "4FwP7w2nkNjnyGfcUqqfCnJn9dUmT2zC4Rup8uX7G5EwggURJJqYUYRYxZzYqkwzXnA2XoGSXu3i7uf8pKAscfMz",
  "key27": "5SrbbRhh3nLy7yfg6j2zZxN5jArqq8i5JUam8pDHzWYeSkS3gwvNEQGE2513nHh3rXV6DEdiKvv1STu8gPQWoyhB",
  "key28": "X6NU5RGoZP6Sf1USkiBSg1kPK47jNXP5BMbD9tvnTK8LgBbYDKuMMHiLpraZaCyPjT4o2iL4ADtfaBiWxEhQmb6",
  "key29": "2ANZkEkpi2NxRb9D5jujawFgkuGACp5VTiPTB7DseSwNhETLPKZBBUmoGHykJcW3GQMoFBYfW6rsUaUvCiKzTy4W",
  "key30": "HaKvikmGVsbwLgugdiT5sb6djgMEV7RxJuBaCyDdhw4ghQxmiRgMyH3AJrVSg6D7qTVEHp5cXZKwFdUsvhEBr2G",
  "key31": "8ui5vhzasFsPiWKmCoCYQUmphQTNNdNGcKvVZjdTJ4ThhhiDmTjofctK6C2Ppync51QUvoz4gcZTtCxqDrKNV4p",
  "key32": "38a1KpumYTGk41b6rMzAAbECkPVtPryHZEjpy2PT2MLv1i54ewbnoF6osAwCqZh3Cy46Q3iQmep4rP54k3Cf7BFQ",
  "key33": "2WBaUFbvSkPaWU3F8DxxH4xPHdzKhZZuSnAznTo1qTXwGKmD6zrVf4FQbRDUL1WeDGmAHiA1x4B8Kk5Q9dz9WbVb",
  "key34": "eJZPXAAR7PkTQXvdePgzt1q1BRN5KSAch7Mqwhcx59C4AT7nxV5FW77eJWEojWkPgc3L4DhWgmhiLAEzTMvjZhZ",
  "key35": "3UCdnBTrig1VMtYcACMVeXpk7Y4BGXfbXKnQcDE96ej4MiGEXsj1XFMAyt3n8GhE2j7MjWjY2jQoY7pcWYWXnsYg",
  "key36": "4SwsgsPLSXDDgxeZST6p19aH1c43HJxM8u4J9yWuZV9G8ZKEQ2nYHLahVL5mMYxKAS7y5MugPMGHNw8yHaJR1DNB",
  "key37": "4ciD27gpsoqNnnskBNdXABNJ44nWV4FT3JWD7j9YiWLbpbp7arXysGZwGTFUQUyse7m6eUAok84iK9CzmXuCARhp",
  "key38": "2z9tjnTVTXfL28Xmx32AJw22bmizWfYut9T111mxtbCNkSV3vWzu67EiCy6FABBYYoaxwL9YY3tvRvHeWEveBFwp",
  "key39": "5tM5wU2gEQTx2Ttt1qyuSpkbix72MbtK6wTnujHw8eWt6LKAqkiq8R8ntV5Gx8b7WD7qzefCx7dBeuJdYVfi6ASA",
  "key40": "288buBYhQHkjf9SMLFqSUBg1jrjLx6GVQQJD95fJDe756J4ZugQwnDwwgLAZpWU4WwnGA3bXsatTWFgmFfcKCk8b",
  "key41": "35dYKB92UgKyZjasU7R4taYQLbK4maChcN7UhCronddn2o3foWRsMXs562WrYvosXrmyS9GRBHdmqp6T9wLZtBfJ",
  "key42": "xtviQ4dzj9SjQdzARcAJSYe3ELr8VF3rFKWCJjtzp4uTmGWAxVQn4RHMgPNsZWfEPgZ7BHZsVqSWgeHfnowPWW6",
  "key43": "3mTbQZHcpHbRux8PjQVje9DviXWTsAfUrQmyARLDL3xtrSz3gdHXE4SjcVabuF482KKkkQ2hPkFGhRj5bXWQ7QHj",
  "key44": "618kNzSQa2g89ATJwmd2i6svGde9J2xPDm84essvxugujsu4J2g4CjJ1wNSNSwnoKQEyTPgk86rSg84tTq66iPpf",
  "key45": "3CqPw8MqFDwb3ssUJLa316qf3SmxNZGWADgz6VK6uZ1P6oZNAiDFrAB2zQoZFkhGckyNshLgu1c23TepxkNQPZBr",
  "key46": "4Xb8424wXnJthD9SPYKTGZS68nbn3REaZHPrqhxtDf1KMyMR288wo2hwGfn6ph35fVpEwrJAWRbmNakvkw9CBQxX"
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
