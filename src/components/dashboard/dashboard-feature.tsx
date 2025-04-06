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
    "5uoY2jvkRhsQDZMrXGE4gvoWyfDuxsaUYRbjAxHzTExJwEQ2d21Fw2NmifV6BCzfUAfdKjMJZ8WG4SBguxxqDMiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35UbAnhb1xYeFG5dtma4EWXqoEfCKPCBGKjmcDx1yVRA3cQFZLedB3o77g75X5yepiTWutkEF3AXVtn1sWbeFJBB",
  "key1": "W7EtCdQukRxj9BvpEkA6fwpd8A5CWmvbH4kCDWDnNKRNZEkYSEMT5P1yp7tjmJYs3BuC41gtFNLBcRH8uQrgwNY",
  "key2": "2t6ScbUs3scJFWZkCH6tkbE23qmF9iva3Z181dkFb7PtWtvAuvs1opdYXzdqdXLPbjCuzQrn2itD5Sh7DZLC6jSX",
  "key3": "64kgoWenqeEoYrbQWZsJH653tZcJ7NXGqLeJ6oW5JxmLpmgNLKDW7jEXfnMeV3XLwvBrQSbueaDVffz4UmPh934o",
  "key4": "4AWZhFnw6KuhoL6ksiJAxmPHyhsLKEVHe4yT7gt1EKXgWUkLdrHfZemk2aJjgGekxBKvnqEMLXFyRAWaBb5Vhpqp",
  "key5": "4MsoKKP9SKqVms3rKctfxS4Qy4L6yzV3iwXmP3v9WyM1JR6QjyTffGTmDjodhKirUV1Hzjz4dPMP13cstxzogQFx",
  "key6": "3d87wGB1ZrEnyPDthY6viL2SWtZ4urUuEszymeSf6ZgMfaxQFPvFkJePndo1RxUcpGcRUCH8Jit6XPj2Acis7fBQ",
  "key7": "4UN2oNKSwXWxT6gsSFzJRj7vfWFuRhxxj8caVToajc4YWCEPefKyedFpC5Cewty2z3vnpqnQRR6HzegzN7oiKJSi",
  "key8": "RzpZDQHwDqSfPRrWH1kycsTJo3PkSFhkgvVStsArPjuAHwz4SpqHyfxQVH4dPX24LrkcFuarjhf7BN9VKMquQsZ",
  "key9": "2UqLRY1BMUnutPMHQsSzVgoazY5gwo7cX7mzLN6s2ca54ZqmhqhbkRjLZKKDq1uaboqBkVmFYC4TibCeGGXKdGBG",
  "key10": "5sHgqaNj9M2vA5Xw3yJg541yGHzo8BHuTQiQ1xgCtdYu4222gp7p3QP2U4iJFQkiCgstxNnHMYyqFSiPsgTAe7ie",
  "key11": "29iouLaJNJJLkXDsJem5gwBvy5oqD8EnAgHw9ycVEsiwC4vwia5S62aTLQB4D64teF43C3FYriNj8rSoR63PN2jW",
  "key12": "2GXcMPMYY1wF8RPqw6XTBDR73TukfWga7wWxy7CvZX3S74PGuENDnJr6N6E81788XqPS19bXgYoLrwRifLsEgUfa",
  "key13": "31Xw4wTHvoP19qbUHCe6FkMBkhboeHhD7AvjEvXiX41N7oHsfRLVxH6rHeWpvCLh8HhDrxgxKgH6xoChdTNegAvA",
  "key14": "4tgy4PCFsc8CktftJFQyn5PaQz2mTMfBYyoYNGgsdYkMoJT97em9hMuzPBx3tGyAhwjkgtPfmx61LqqTAZx9NXEH",
  "key15": "H6eEctsAoixJEDzFgRMxncs2Hp1gVzW8WwTjwHy4QvG8XKXcVgmQ1ZiEX4SdBi39JRDxSZoSjyKRZWUr1z3eZB5",
  "key16": "3cT9wu5L261abt12SWzyzrdMgGoMiWhnTthBqB3etZFotVMP2woCCXrrgaTZU1gdfQSmW2a6Hcvhy3oe5yFNUYH8",
  "key17": "XY6UjYSBMFkeJWnzsFJvTzfrXznv9yYyMrFGHAK6jmjXVWqVnQU5p2YyoE2BJ98KspYoaeeUZXBfy1e6TYZ22mK",
  "key18": "4N73tftHg1FW9PQmBKCnLn5YSn3w3ArMNbsvRyjHf7mjxKZ2msapytJJacdUgBpgaHbDyBiL3cCgnrMkffCjvEVH",
  "key19": "rKF2ZTiabo8PM1U7yCC85isjrssRDYzoNCEZHeSPicVf9PLDW86rLGcpyQijQDMkZQbDFbyyM5JJQtvCXfDuJvZ",
  "key20": "45ZHEKwg6gm1Zb9jSXrs54KJ8EgrfYheRQH98NrUrpzJxypxF6gZpCiqxDx88YwfGnzxU1gjMX5V1iEwmdwwdLcB",
  "key21": "5EVZmwziC4S9vV72gGS4FXNqEaFZAm8fmrgU32yUt6DjMzrdShkgNRsZFARnf5nh1yD9kbQG7q5QqkpgpASZkBWN",
  "key22": "5EY39G45YUsMGSUjMhy2eyY3FaC4ent911pGASNbXwgUmAmA3SDKYKJQsXPrKHeAms98gRnsWRGtGMH59icn3cRe",
  "key23": "2YmyugyVDhxMBdhcKsxBpCAA1XKYQ1Gok5dpw9vie1nNfwzHbL8eRGWkMsRoPY1h8zBAbfk4b6T346s8J9SzFCB1",
  "key24": "3aKckvVFXvUt6mJXDin1ywiFXAtGaZ5ZNHc24mHresPLACyQvzRXPNtkDafFqdi1r68cQmozqCsaQaze9fd3isnd",
  "key25": "3cKwiqzgwthy5tc1e3fEtnt4naXiiGKQfhSzCNTUAbNHatX9njxhFiHGQyPNTyGyJvbGPuuNyLGcRi1zFUUZW92v",
  "key26": "nT3vtNK81YB9juyaFqrW6sfh1XChByfZ4uhRXUWorvMp22xF6YUD8Za3kUjD7mWMTFiBZVNeoVHgXGrjit2Tbi6",
  "key27": "8P6wNT6AtgxD7VNUhnQCeukabuMe3MUECKjJzaEszMc7MYxxGSbDKWx96weP2zuS1fpQLUrcLMgysSuvp9ekKEJ",
  "key28": "2KXMnVdsncUAjszxMbmJZhmPpCs58a8Jf4crrgMJEuafM326yocEHVDwniCCWfWkQi43H5YknnEwCmpsVV297CPo",
  "key29": "3UEFFDM429Uz8eSeiyWikxjj5m141Wuzrqdw3Hn4yxdxdWzJZPKxHJLxCsXcRsZDUmu8RNtK975RRW2y5Q1niPpK",
  "key30": "4CE1rgebyChATTg4pDPsDdHmLCF6Q6TPXDy398s5D6GW3TAmn5WCT2D4h7NiFLTJ4C3XBqJqmspBAqde6y4s17pa",
  "key31": "4t32TCy69wqerexf2DGBq7ymiRjvDk6TvZci23Ym83bKzMDpkqKXUe7RAKG5nkVnkrXzfJLo7nfg6QN8txwwoj5g",
  "key32": "57m5RUBzsvrVUz9SqniN2bhMiJp6YoYZoeXkoaVfKTerEyin68bnGqxGms8AqwVxVCNRgEgUi2Ax5hJ2FBZ7jiZu",
  "key33": "dmEbjgaGGqTSpXZbou9dUxByDP7VkhzG2YzRHQ8GbSAa3PLRDSqWUar77EuzbVooE5DU8Yeiwh8t3ct5i5QSZA4",
  "key34": "4YS6vBKt1NSop2eCaXMwnfmWcnmEvRnnwJMFAZTUmXxFouXeS5CsQPw3pMsmphpdEYEBXEvgxyrRgptijLLPUkj4",
  "key35": "3YYVEimLUxmYPrJXqvTs3Eo6Fj9bDKY9otDxNCAGEfpHQ7NFFiuPfMZHcRALnk3br6J73Lw3Ebw1HuAVacRnKW1q",
  "key36": "zR1g9vGM6NCiTZuwnJCUSFzW2jT5iTWhEfjsJgpSpr6v14Xy6C36eRg8VDGAwMCEAy4LSvAk8vhrERgTQakov1a",
  "key37": "37VcHRFdFXxb65NHaFjVp7vESmGWYFjck6azZasFBw2EEZwJfVDsJRRXHpZCoo45ThwY7Kj14GgrZgq51cgdrMP6",
  "key38": "4oGK5xD2xTbBX19w3gPGgrbzakQwjg2asoiRDPT91xaDrPTjABo2VjvZi7WFWFFayXRHP94Qr1Q38xzJ3v7ypyiH"
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
