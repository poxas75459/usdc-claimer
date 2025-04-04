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
    "N3vdfMzwszEbBCE48gDo8j9KwaMMHHXsSbY4eavR7vqigiLv8i42UaqmEawrscP7M1wmE3VQhaYSjZpUi4k2Aoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M6rukXttbX7CeKRkg9JriL6nzcLQTzzieWjqejx2nQbrSAJSKAvAibHTzpG86TV5ggWohD9PBM7gNitmHByiDjj",
  "key1": "jq4s1qAbHEA3Nw7Nj8BHEj6Fs1i7YPiJruNzqYTaKWsUPi34noyddfyJAEakQuZA1Boyei3jkYAHy256K725m11",
  "key2": "2aNZWVN6FMQCq3L3LWju2tnJLf3yZVqpibEQM44HUyw5xu6DTU5Jt8MbzJGnk4FPfJ7KkGVTCSUTFZuc4ktEbyAK",
  "key3": "4mZP8Ycv9eeMgc1VRPX9nENWSr6eFnRTAWuk5kKtjuRxTzDgb3WGFMGKVg7xVeCfi1HAho3er6FGAEjZXR1hs33x",
  "key4": "4ZBo65sfDkTgwhGzBJHQsdpA9BEB5DHUdq4x72RRAL6dJ51t16Y2MBxvxrGwKcNkTBFDF3aJPfeWztTdMBmiqZ28",
  "key5": "2AaMM9yh9P59GBbqyVZKFewjR958aeJ5jnZAkW5SusJomiwWcwUV8Z2vwmJjoypDRPSVxKwBSCuCBXu1EC58sn6N",
  "key6": "3jcj8XV94RreQggfVwvZBWVQwRYCYAVvxjjxChZ5Z8xF3jXSQFfmGVPE2cNCCJZ9vhNuk4R9QhkvxLJUdvMPvBpU",
  "key7": "5o1irsktgmk5pcddZxq56X8gQ6nyr9tWpXhrNPZQUGTWb5fMqtk2wKTYf3VxTsiQL3incPU7UjMYtZrdc2DL2DqU",
  "key8": "5V1WdEk5zPNKpa9FEqwrvUFg42K5cAJF3gcsyNBykGV77KodUcuc2soWZ2yAYM4ezS2pBGt6Uu6XHHtWnLy8ARxH",
  "key9": "54LhPevUcvbaNc2wMa6XdWxTBvKW4oLtz1byYDv3u3oQa4X3TgHqKE8nQNKyZniwD4HNerjc1bCk1iNUKkWed1bn",
  "key10": "SgL1e2MmLAQA521JE4HncMaSB6CabghMMz7zLG6UmKrrsFfQ3tVNxvEJhnwH2uhLef15dgUTH1UyEdjy9etY9vN",
  "key11": "CzDTrF1WBHxPAxFqTPQh3G3KVXLJEsdLqc1pScgupXeqkivx28S1dDmn1DYWuWbBY2C5EFadHpUTgxsieYTjy35",
  "key12": "2Z6Lx8A6dzMs8FNcRjTmmXXRuLXm8bXqqdMoi1SW6eAKBEX3GjAhgUdacn4g6VFPK7DHHjRzDEhJUrBEUadTHkRy",
  "key13": "3dVE2iDyxhVwA1FdaESwAmq8GZRfSMg1QPmvLeg1rNyKvoVdTRSzgJtjqA5SqCvF3e885sjr3WW1RrVoM3e7ZK9S",
  "key14": "2FQRmqxuFGC5D55qjqzqUVKCTC7qbpVuK1fwMm4D5T5D8PCKf8fwmzLDtXUpAQpGBNGV1CAM5wQDA3Sknjc7rm57",
  "key15": "465kvmRBJcZUXbD35vCTzGsdpwrBxUDj6PcKz4P1Np4zL9fn6qhgcyzVBazqC8SozssstbtGkCB3xEKWoW17eBWV",
  "key16": "3kw3B7R4gVuL5nSnLaufW8TBbCm2MexrVnSjK1vK9vw3tjXVfYPVyazvLT9X9U5C2co68WbipNvZDddUJRnDtEDc",
  "key17": "5UXP7uTse7p8CbgZB1gvWh11qfsUxzsMBhojVLkXm3jmWu7CsuDpq8euQjy2v82uq39VB96U21aMZSCgoJCxixcj",
  "key18": "52BvrXFmtx4DtFqrjYestKKDdCrbBFwoNZjPd8tWJz666jwGGtMviqkyJKzT1o53UwRnJ1m31LGPbWhfpup4R9cF",
  "key19": "DPsfwS8ANJZ9qKRMEnnAzZ8JCufRPDoWQWqnt9pMkYQ3kPZNB3maXeQTFpXvDFdiTcCBHkzFXEa1Gr4MtUhB4yg",
  "key20": "2VNHmzH3n85gHodVyYzXEiVjFt6a5KBCiSX9GojEYEVkxCNaHYmEXzGoFmG27hWBSnKSTjUTbfkZ7khm4zFsGXdc",
  "key21": "5MB8WnLgRGYDrGz8TbRDi7scZ4KdTm7sbmUbR7xvYhez36QXz5o63aigtATELANAM4CpbNHCSmuRPyLzno9ETj3T",
  "key22": "UhiHNQ2sx3FgMrf928ybFDDUvZpCgvc9KZ8vvsziyMA8rtri8AiPixhkmyKo1jomfGGyCFy9BzzGXc6kegmQrie",
  "key23": "2f3Kxrt2GHG34niPdnTnaUQNQvmtmXv29QK1zYFWiEM6bTP7ozezHfrScgaEMqtEqtCGt34mcSZLC1df2DcTMu2S",
  "key24": "5yoBSu5z6EDhucMzRhTFBoWtCYw1VZ5PSaAoDfuZXtqcwLByo94UoPNSpkYj17GAnFwD67QH7EEc7NwH5gVBo91N",
  "key25": "3wH4MShBF7JSgSRUU9ZTk3tYEbUQcXwWzEwdD1MBasi6DF8veEn2mneDMprcFoPi1kn5GYTakU3JcGs8sbmhJr7m",
  "key26": "426UgJYFQctpDMSA4waKRsUdXaVmwMBebUYDydjiDDKoPxSFYjsFT9JnZUy4gXXiXFGNEY1AQrsB4qE7sDTGBi81",
  "key27": "4VRrACkemS9bKptp4dE5Y4RW8cr75AxjFpteEQgu8wf7hvC6Fe8YtBsAD6rq4szZgjoSkjiYTuKSqSZG9JWVspk4",
  "key28": "3HeTgQooViVG5R2YjSxNP9bYAaT87TPxwQbJbSbNsPh2y4soTUfDYK25WC8iDtEDiQXdSgw9yPkYn8y9usAmPTBQ",
  "key29": "5iLyMeeCr8NEfmh2MkiRgJgQNqEJdcfHkvFTkaFbqnQ4E3c7B535hvhhJakgTFjp2GgcCbToDeX9GH2JCXdME51P",
  "key30": "oMEhL28kSHX8cn9Kz5rCscHVGjinRcQYFs2vGNq1uPhovRFVGfeawyheSAd6R9ykJLDULd312rsVBP8ddc1mY2h",
  "key31": "5NU9smnXGCPTQB4Dtzo8m2rMdeToz9B6SUxx6LPyZaNTtBFQmfKsuDbx6ZkoY5unHp1JChuCfZJAZHtdMj5Ar2Zs",
  "key32": "4hxnFz6uRnyUgtLviUGAY9VCQS8wWgSRfkHtrcnxeuAbDoNLa1VqWCd6sffxRo2LedMeHqk7P2rNP94LUa5EZkWu",
  "key33": "2b2REtFTwmnAEfCMK7oC2XccrVcRf4CbF6BVrjffir7aoUcckiwTYo1EQbECgWCMsiZUsZxGVokjUQs2v4RrLxrD",
  "key34": "3AE1YPZchzb2qugvVesaCnriTdVEChMFKcNcozSMGxp6geiEc3nMcaAGucRDR1tpebqhcA9nWg2zfDzPFi3mmdyw",
  "key35": "2a4NCwBNiwG5bPdVmCR8Qaikbb3Kufo9FjJk4P4pPU22wQA81fxTWrmVPfvoPQGPHeqyGvadjNo757KSx9cWZP25"
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
