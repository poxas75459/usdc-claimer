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
    "dWzyAWgA6EJj7mLP1cbmemEdeUtTEim5hgFia59NxRvJT9tG7KKBit6WBrCSoBw1EeZTZvLVPASXqPjyuAcS2m9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2igCjH15mAmjbmyCZpP4CQch1NsdYjXnYqFAuXNHpA84muEQYEJ6EF5jaqNMomSqyKbs5vKJtr3K9horLawkap78",
  "key1": "36pMaufA6TEA2gqPcJ4PZLhWfdidrzg3rf95mMHrwQzDDK4qiFYDeYirJ7kLfyzQzEbF84AtSjtrFFWEGq1dM12S",
  "key2": "28ShyKpNfWF95z18We5PA15b59C9gTn1SnhVDSquVD8VwcJNvxCWKTQy3U5DbQeoyfGcf3KPqyki43kaUhwwESVE",
  "key3": "46Snv6EHmb7pb8jGiCEu1wr6Eq4VFnu1pb24U6rzMSsKvQmLox44zijk89q2eWapTDTNtS9xiGpUem31aZoT6vDd",
  "key4": "2Vgei5GtjcW793nyNRAF4pGSNPnB8tWs3PRTBLVEv9PNTgBDQG27Rx1kRkoGTKPbSdCjTkqdmzzhxRDnfujAsXQC",
  "key5": "3NVyDNRAFCpXyfFgEWnVp9G2unDCu1w9V8Wd8v3cwo2T7oDMeUJJe1eswYByRfWXd3tEFDy3zhafYZkuq64hzGny",
  "key6": "23mbf38BHJP5s5t9XvS2edqTz39JwxmKZZz9U5JJcmmV4st6iuxZJwsqRSK7Q7s6f2sNwuQFshKz5p2EZccApxf8",
  "key7": "2czjhTmBJcLawRGYnM662xQLLXFgDp324BaJrGVzPUQTk5ULNtja7pfWfrSSvfoaMTpvynVW9S4msakv4bB5E4r7",
  "key8": "3aEvrJS3eJCmw2eFKfm97HF27KdXL47SNJYSHiDWudcMKM42b6QtthD8FcwSnXfLoBMaJfy8s8WsQkBjKWdoeWm9",
  "key9": "v2JTLRX73D8ixgzNpBAinHuVauxGnvGqMmrx496WL2dHHifXCCvuRPvuCAxEeaDpNmskaPfzRnEPLxT9AqHswPT",
  "key10": "5nKwNFKLpkQw5RzmtAvB8qzPG8q6P1G9K6xQnGEF1fD8uGybTzQuH9TeoynsbbuKKNgCpY1Qfn1oYF9vtcd8GrtL",
  "key11": "572HJT7mY3qprpCXCS84XvEDMjtYDbdT9P94xF69kbEc1UYffdnFaXL8TQBRyX9mp9iPTAyx9vvTznuGgTQjDAGk",
  "key12": "2QokyNsMEauEggSxhDUR1HdRSRenjmzrsKxzVvgjEP6TmyKMsvrTWoiuotDGXMzQ6suu5VaEKCzQq116zapsLDb7",
  "key13": "SULhMPdDQPc7j8MQELrE4xpX2NurNAL4Kum8e9bVZctZmfSquTPsGAP7Q3WGq7vg5ocUuvzSp4rxM241c2C5WUm",
  "key14": "63GUKmuiZrfKeFVoHAToiWCkHKvQAYvHn3pTENkCV7TNWJWZySMpxc1EBv7AmYKRhNqvAhCNSHtMVwyzTc1yBoQz",
  "key15": "4yN1pJV8q5aaL2z3jS39hVEh3XrBKE5gw5SmUn1HsTTsURQTnuziV7nkTRKJDjDFQxT5tHCrZpH1LXrHHgv2ar98",
  "key16": "3ZNu9xkA6we2YeHYW9jE6wxS35NyND5zXeyzNuViRySnyvARJ8CoeDZ7tbFWvUUVAZNRcfiX36TVDuXiyZMAZqCQ",
  "key17": "64PKQA321EjZyADkV4cUJZgLyPpWLvsMRgfeGXY5bp9EpwMtrkQsmwZcgNoi5SX134rHzNtUyXJBbshriBhR42or",
  "key18": "57i8j7EfeQjpf36Y5kGKcmuYEZB2kVuwvWQH6GL3ytDRWWeYnBWDJTQ1D9PhqrSCuHwviMVsVyR6rSfs8nVaUQML",
  "key19": "5cHjzUJ8hSD3pCt8gr4wRRWBgfJ8Fn1t1ghc2miqx3Tw4vXFcCEAeZowYfDZtFJFK9mmAKnaVqkaMi2RrWXmbp2N",
  "key20": "5vhW8bFb6ogPp6psfKZq7Z3hyRifeTeMtASvsrpQSz3JdtHZgbR4UVJ3vBoT7QaDqwUA6m7Jh3H93rUFNhzrWfaV",
  "key21": "4HFB7qQj9iVFx6K4Rkfn9oLBNhgBV6Vei5znEC9sbKkEL5SCy2bHHPwzmQsiqGFpdcezYfSmnae5qY1CMiNgJgYk",
  "key22": "e4fFwWAa8isJ7TF1ZPYGu6fZ6u1GXqwEr6Zomas3bw5sBTfCtz7yXmctzqoG2TvdyjWnQXUSCWb4Mu7d3xz9VZe",
  "key23": "4kD3nDLgjWAxSmZcnVF76taNAFRhYFGMN5EQ3EDExFwonnTMRtBAHB8GqBtu2xYeBSAWM6GgpT32MKxUcpmSTHPE",
  "key24": "5DjpK8bxzyFCREi9bDraAKYDWJcXDoVWAE9aVApeJykBdqhv7Cy6Jpe3WtBo5VBVyp33kgeh1TxrsrzQmcJjUbug",
  "key25": "3jamTDZWANEcqyUbZizV33pc71oSEBaRDtTsTd8L4HAaPDvGPpYk7b2PgZc3PGDw55KZa1yXGqQQRjNVnUF2AJCP",
  "key26": "2YApQSvULc721mYsyEMK7Bykd3tLHdcjuoiBg5b8aoyR1XWVCPswncopii1dxCWiTWQMVKXGwUDErfWP64Xawucb",
  "key27": "5gjhmkpFvTpbqB4jcDnevd2kEg1D1Dz32f8MBK7ox7k1xZ9M2ZdEtWQFsVfqw8am3jB26vy5RKT5DfJrPp1CF9zA",
  "key28": "2mpqMA4XzriMSUmohh2bU7VgdVryWjDftUt5LaEjiDLSA1efoj5A2kmnmv2jzqU12ePsRD8QJFWZ888wjLNdXyEP",
  "key29": "2n1xiiNULQ8WgvX6EwmSxGVMJ8Uai8UEvW5danjcmhB3axXP2JSr1ngcLNP1tdJTMetvUheANXED3TRUrnjWKPhj",
  "key30": "3djBY89jt3MM7SETDbRpKmBXxeDqzK6sf7wQWDEt9kWHGM1qsBpY1D1FpVeGPH1AZ7wSZeXwwMYxQ2McxTfBKJdW",
  "key31": "2fxAmMw6JQ953K6mNcP617hexqYUL2ujR8Cjs6C3UXBDNJhJiMqcnZfrzpqqpyGyu2PoU252HYvFecabP1m3PnXF",
  "key32": "hngvVUmz11UNUJQ3gqmfWmDNYcKPE2qG3hofwve99bZ2TBtgdhmLn5f92bWQWex5Sgc2wtN7WJriT3QryNj6wuL",
  "key33": "5szPaPWgkLWfoehGrZxeGfnZnVC1wvu7BSNyLA5P9WwJbT7kX5uKZUz8fc6BsEDNCTnpchvnmDH99XWeCUhPR2W",
  "key34": "42VSH6Dy4anwHUVgUA3wtzimBNNvxB4WMrnbeyeqpWsy4GytVV9qQkBAdjiTgfcMTXUBj7EvkHrmsyuheP76SwK5",
  "key35": "4U7b5ZbFsATtooN8Bwm71qSHAakDYW4gQzrPsHknpZVDRwpKTAKT38bpXPZzwMkCuMuUAV3tk1E6wzcXrYmPFFJT",
  "key36": "cavnmLkeYstqRTu2N4QBpxR6DAaUrxydyrC7Ar8gLsNnPiQaJXtGJCrtYSXVyehH8yrNZXgGSBHSUuWga2oKxUR",
  "key37": "4i2MvaqGebqjcnRvn1ZtA6TsnnpSnnqrmBzfyPGcHHbyb6FpvhuBshzcpeiSRAkB4rcUx3ypLiMnzDQHmRzJteKa",
  "key38": "3R5521Tuvm8RqvRZRGKnzN3gacSVToeZjKNMw5W38ojxYj7QzKKJENJSbEvWWfVNA8SLjSA2mrkS1c8aXqY3tq6s"
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
