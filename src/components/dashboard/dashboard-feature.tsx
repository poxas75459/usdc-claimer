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
    "4YwoTM2hkba8XhA61ftKi3DXGwGp4Wo5VKovqLmixqy61mR5mDjYNLn4jKPvngh36ByH3R45SwE4cCpeqAtmu1JJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KTHmafksnR1gpRQPu1woktuRb1knezk5DcAwtiFyuvXv1dWQSJZNgJcVKWiH27abRc32S3zDDKpf6MLujQ3xuso",
  "key1": "2DTjLVC4Rxz63e9dHnZ15Rp4gDXBpRW4qLMSzGrM9xkPwcFatQJ8wr4UW932AWhe17bLjrZSSbj5iL7dGy5eviHa",
  "key2": "XR625voSm1aDGi9QQoqQ86o764b7DGMoqSAT9vj78ej8j1ir8Zq8BVLh6Zpir3PGjk1AVAtnsiudk4XGH2Yq7h5",
  "key3": "3ZadJhKpmysYZjMKDftauR4QULXifkL73bbzecwTYRiTdknr5PGcZuSU4rX3yATar4KQLha4qTmTgMSGXNtk2dGS",
  "key4": "3ALRVUAxPt76m7s5nqo7mc3wWTUrA8Lr2S1skNKQinQezaKnhq3Q65EbAXoYM2Fx3fXQsyxNzCtJF9LEu3Dx4UMR",
  "key5": "2z9fYmMKJhChi4K8nQUBZioNrohXMhnfiLnNx7Xn4shWXFLeDdpxtSLBCF7rFufYtzHoq9QvbmFGch2Z6MSMQacz",
  "key6": "9HSGaRhdrEJo2U1KYYLvURYubR5g1Xnvq9n8t4S3ErZh7JfETPnj9c3jMGeiBXtmJkpVfsqsrWeFQRqX5KFBDwe",
  "key7": "5Nfmd6t7Bc2uNgsXRajFqUQYBa3zav8wh2UeBrSARisaU9pQo3ugq9hfFBoaXzwubk7LCUYSswzD9xWNxGmcDSgr",
  "key8": "5Pn9DStSdMRtB9W8oBCYJV1BKwoiiSJtPQhvq129SJ6vFdLBF5HkS12RMDf6jVUmq9gnnfbNjpW8cDrCC3fk2YCr",
  "key9": "4ULFmEwX5Lk4iaF8mCLWGLhKtMTFTReU3bizMNBL6BKxKSp9c6PrwXi89kXuVj95uPypLcJ8RAfc7rzWXfqc9kaH",
  "key10": "4wyRSYmvU8J51D1JW5XXzXfDdYCLtNBsPfePFkCTKupQFDmpXeoJugghx7NCWisHL9iNvfPeoLRCovGFPeuzVaBq",
  "key11": "5WWuksbNwmv2wuXoY5mVaD1YyVWZpdxZ2JrqP1LcNQethaZUEb5A8KaqD5ju5RhuPVcUQs55MJNzFdRqJ63aY5oA",
  "key12": "3Qb6NtCSMmif6YDUVCGTR9or1psPBvBNQh2HbHHLAFDfZHqVkC9NADteip86VGELatQadtwFZWRF1ti4PJdZqELE",
  "key13": "2AVPeNuUK7RpA7Rbe8G2sUUmVy3zA7mD4DAXs2qVD2AUbqXeiniwshCZZkoDnW48WLaSeZiRBfv6P7gvWUmKkzkW",
  "key14": "48aLrpFwWfsuh8JHgpJ7WjXoyTjAtX5bk5Y2QtWk7S9qEhu4gtnhqNdiyeu5eXP1cQjgZuBErDBJaLXmk5kgYg8",
  "key15": "4DMYfQG98vY5qdzLGDCHNEKoTUDmeKRmNiz7wmPJ5Fu8CT2TA179Uqrzho1VqAavsmBmTGiM1TF9u69PMjgVN3WS",
  "key16": "3B49x2LGGz8cBoohVkFY5WsPAUzXhfMEATFxH9tdcTvK721MspPhKrkN2k5eQ67LcLSkk97kNEGiEEAEAexQgzPF",
  "key17": "5ucFxSetw8a77LDSgbCFyVFn4swnrT3nzDo9hpz4YjLs5ZjkCgb7m5Zm8eL33g9rRUJhoNnCNSQXUuRmnqc8v31c",
  "key18": "4CE9J2LX4C8qr3CYCziedF2UWar1yWGMLjGVgAEUfrkRAubuc2AYfyNbwpQpRgFqHZo5uAzoDqxVfwo3DhEvu8qT",
  "key19": "2vd8vKfABToXmzdYonCtRYey3P9HbMkKnQqsM5Beg2miXXPQDqSHZ9o2EyiaCoGivM5ZuYkJKvvtKWt2yKBTt2rr",
  "key20": "2xCBptfkdQVXV7jcaPeyBaBo1jFYjBQCyz2EF7jZwwyFQ4ApHRWwrHT1HXBurbmn5PUfv3vMQo72mSY28Ai2j1Yk",
  "key21": "2JqywiPhpK7ok9EEML9n2q3U8TCKMPHuGaikJv2s9F1vn68RVVdM8UQo63Lm7pmDzyDyWkyCAXe4eQVQkpcEKaZd",
  "key22": "3rG6WX5uPwoiDii6221RuXKTjQSPc7Ckvv9YUk7xbRgi7T7sqUnQquZifj3ygwSrECUx8x5PbfCZZecbRmJ9JmY7",
  "key23": "4kWiGRX71h2HRxhCCaw4Voir8Ggd3tUKG6djR1kgNj5BUWfBy9MHxhKqV6eFpyjw4ur42FDnCRSaMwnrNj4ngCKk",
  "key24": "4gYqT8bghAJSFyKmiLQ1PKN28JYCpHoKFq1zg3nz44Whkj6qVkXk9H5mhx9xggEP3UZ6SEpwYJh1FPnxS5uKcUe",
  "key25": "5LcitAtxqstk3P1e7LgMaeVNHcV6Dh4YDPUCgj5KArru8eMhteZZiNXMT3dqLTf4GMB2twsRxYPJekpC5SiVE94i",
  "key26": "Y5QViAXGhotB3HuxAg7L7ycNaDFupsvoiuNhFbJZHiXMTksMhqbuGSP3EdWdyPwdx7sAf1nhKWnL3YExJSYr5Qz",
  "key27": "5CiHQqyo2zUp1QCXrGRV3heBsxdr6vf5BhtgifsbLqcd9CmZCmoS3JKViiimUXJzpWtv4mFqfxyWGvyAJ4W1nmny",
  "key28": "3KoJEnCH1nbrGVxxbFBpStp7VoypV3VZx2qxMiNppEWTajRson7Mg8NfPijdE8VwkgeyGLupcYtbRhB8o6SuiJ75",
  "key29": "3zkRY4QcaJK8r2yLqNqSVWYxNoiCZSibeVdnXoqVuHprbz8dvQU7Fb2Xvbbykux8cRSrGoAByCd5Aty2BL7Tu3jU",
  "key30": "5LrSr9NEhWeYzkANajq78caor6jdNyPvN53oEtQLd1g7vPbvu1FhV3u7RLduSPK1wvXJp5ivwEnvKEmfcBbiVwJP",
  "key31": "4oEpNxUD7DSQsfQmQ8QcfYjcw5rKnVGf4uqqeU1VWNUq8UU9AQMY3ze2kwzWjXkShobF9z2A2QyZvWVLF8KkenPm",
  "key32": "57zZDB2uMAk1B2ZouQXzZGiQjqhpNNhBccRDRXFJXDryUvzZUvJgamKk26T2xpngmPe6dHrYGXfKFEA2cDSETHxB",
  "key33": "342cJXNH8MYgnhVGLTaRnuAAyzjPoCTufJP8KjpxAdnpK6sE31W7A1tf8TRLaEDjEHDD1gGFy6y9fqJe1Cy6TsWR",
  "key34": "3aAd2iDmsS9WimCfDk9McrwuJow534jV4kATvmh8kRb9HJCNpoKRCzz1V1coaEmupQQhkxMp7SCSwk7kSFSm4E7o",
  "key35": "23gFPkkmeWTLeNzMgumnfnmXABd71UhGgVkgJdsN63xFHXCnHvvKDRCrfda42k3AsuK47zxpq88GyMR8TyA4n4Tp",
  "key36": "5tWy77vhtXcWWMHnQPb1BBDQUkP7pkf2toDWLiD4SXT34CK7zQUFYRRbe7cQhVmLT66HgQQAtQA5zktNm1XGQqgq"
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
