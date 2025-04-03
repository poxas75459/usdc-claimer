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
    "4pBtMLzCF792eEJWzX1VXZhP6R3UgKxrNAv2yXzPSn1kF7oWRQrxfHYnFXSAgmzEqtTm2HqQmToapJojYnCY3dSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eysc5rLmQBiX27YX86jpBcQnQ6u5gki9akkLiNGYPvZ5gcov19x69aVNVfYePNgdCxXd7KGoKgSkM5bYEaoAjyk",
  "key1": "2Um81PfAt5Ac3YMuUVgyca44u8PU64kMykNeugRTx4ptx6A8joY5Br2nv2CK1ASxgo8nFbLrcsEc8jqmBRe3Wz3L",
  "key2": "4eBWJZgQ8QG5GSGdtxQ6EDwGNnoDALPGK7RHp5mte7BA8cti95B8YnhJfUoGSD5P3C8StH5sX2DXDYpqUsjpREso",
  "key3": "5LM7geSVGxDPE2MteReXp5aBpbNDBqjkBHhunkDybhDHE1EyjapxL7Gvaev4PLauUkkY5uLQ3KoTgnV9yFtayE6N",
  "key4": "39p7bRbNw7s73P1PMkZyRhEtzQsbCzTyEUfGVR1ABCqu4UwtXaPMDBYVhE91hmCLp65yrrUUx9SWx6NnWZYkKHvN",
  "key5": "4uqrDfXoEayDQT3LzV36zRdXr6jWafAuctd2X9Na41TDtcG9kc9Ryyzpg5cRFyS15Rs27bqAZ1373Ln1rgXvDrJC",
  "key6": "36sKuTHN5qL8C733rxsqJRQBpyJxiWy6jWWqPsdFk2L8EvM6iN9uv7iPYtosA4nPstKFTBdvJxwhETHzJhmBpATQ",
  "key7": "5934iA6NARj1Wanei1qMyWBGzyKFFawCK414o2CvdX9VLdskwsRgn6NXAL4ryEhQ7pXGCHqcJRz8rzHk6jWk1DkE",
  "key8": "2PKzp2rfCxfZaug2gXLtpFjsHZbZh5ayMzf713rMmvKHJQK4dM3GVxR2GauaH5mPXntC4UGpfBYz3wpC6GM6bWy1",
  "key9": "UQQKz4FE9x2xt1ZStbVoP7iS945VsEqVwneMBy3hc2Md6eMxq2bhPRZASVjk2NDcr1WfKp3CsRr9YhTuMAC7HmT",
  "key10": "rwZqZXcKeMpvgLRFnj9Kj5fWUmDmcKinUyB2awUHfVRjgGKrG5mVyRduxvCExT6tURENyw64uXTvqWjtbh9LqPu",
  "key11": "4qnxgLrAM54ehuzacdsiezXm8zUfopKm1nQJgnF4NkKgW39FEP9SBdYLnGQwnm2Uhi1ZNfiQHXhXAkYbkjYcToyQ",
  "key12": "q8mB4rcj8Q6UFWV9mWc75nmSF1ZkcQsYpRcGbmJh6T2hgqVEFuJdQf73fAAQ5bTmfiVC9bDyAhQND7JQgvUvLxi",
  "key13": "2sZfwbQNQowTrb3DzMxFTTKq1L4NG4Pkxt41vMisunB43xhxU8JD21gtPzG2Tgzu98aQ7MjUSwU7eQMtBU5XAeWF",
  "key14": "2AeREA5ATq27KgfqE3Ktq8dxdfhVkDFeUcp6RUR2fND1m1CDTZbbssF8NNQkHXaCqxDUpkEjJ74CrpE4xmySoYkU",
  "key15": "5AjSz5FkuYoEP3fzdioXGqJnuGxZiK7pYnUY5hFmF9KSeSBkHFui9skKhFQuqEAea3ThQAv1tEd6jpyySs3Ad5nC",
  "key16": "5ioid7odX1WAnekYfKnNYHPGBXSDtoAkkgTeHRe3Ew7RoGJjQotC7wBk2ZUWdEQ94pkWdoT1sHwB2BW5sJKG2Lm1",
  "key17": "2PyYpAfvAUBT6ChTijGvwgiZ9jaD3qLJD4t8sP39aTBEQPAM5ELWR8YdZdyWSoDFMGtp27TKpzdVNeHoMUB4UAfV",
  "key18": "5jZzDwb52YQ23QW8jgC9h48KBhVEft2bhs1y73PR9nyHKyLtLYm8yQdqRyDVQEm4wiW1u4HDDdPsweku7hUeJsBn",
  "key19": "4obYYjZpj4LifJhsDXpAHi1YhUA5yAnA38BYkBHhcz1jguHea2uKyb5SRvkCEnUE9htD4aApUL2Accqqc23xSSs4",
  "key20": "2XfoNmTAqyuxCwYgbMgi6Df9v6uYLDAUg56rzyFBYsNT8vY5GBZLJqVriLnQj36nF5Z8F2VXt1vNBqTYhhKFiTqV",
  "key21": "4Bkz4sPeVa6wA1XrSYngoqDXkV2tFygbUHTQpyAxGtpnpVsYjNJti6woxuT1PFoCYTJjgacQRd13rdBkfu1cgLMa",
  "key22": "3NtTmsxsU39MNXFhz2JqVJRMLBkBMksPMw43B1ZPpittzVS5rih3akSsB1P5P7etyVRYuj4bKfjQWeuZopb59pMQ",
  "key23": "53oSdjbycrDdXjoLrJTeocv7kkcnyqp2Kcb6udSfosGw9cwm6ip2uUqVXTckfjX3euyxnSp1aGhfFnnGma4CeZGx",
  "key24": "5XS792rPYxbYokreSihnab7S3AkHhJNe1aisX85T2pHSFfXjVHLfUDUt9Pes7Rz6jyahqRoxNWKYnQQincfwYaDv",
  "key25": "2abAXcFM2r2eYB1nn1kCR8yAAfpuf4RPoZprJzAtho2CXy8SSc4ZtgPGvPcA8krrbWTDzcVeU6Nt3k55emLCR78Q",
  "key26": "3NYGBdELT3GE5ts4psRKoyrgt5qy78vjtGqzDomXwqmuz7mpd4mUamT8uWnWgLRMpKwDN64ZPwSDjJHKK2QQNxxH",
  "key27": "5VQBhgHptMKFZW1APD5GDQYYiFe8RkPdB3ZYZw9sfejzxcQNNtJNxvZkGNb7qiW1HnwePKToeDfX9TeQv5oYishY",
  "key28": "VdmDr5wDCMKtHSfvBK9CNviaDEvu43xZkHp1kYWLrYCnQucAbjpmpUxmP4rPkqRgrcxjsV94moHGSdps1nJ26rv",
  "key29": "5CtUQHm8ZKCYnxiLXP9kCckuRkZxJSHSBp4KvWCS2JkyAHV2bjB9NYefQpcJi3ZrkwboBe776oUK7LrhCGjjvNTB",
  "key30": "nXfNUVXRN3EVkVeW1btPPDjTiq46F8BV77DgMoTo5QH8csWAHjHgEvAa5K7Eqa61g7EMUHFGLoTLTtdLiyDJb51",
  "key31": "4TXQYtA8LftRY9c2637mUovKTm6dxaF8Y6xqr46tzuNGxvafc6xEDUeG5ihyzd27Yw9Ph2RtPihaY2csxJ5NaiP1",
  "key32": "3nEzT4qVArssDVAeqG1S8Kt7KuEMvvHPpKT3CJSw5caG95Fp1pMM5PXdDoqf4ZrTR5KwHw4wRmhqGAutSAPqA2wz",
  "key33": "34Q7TcoobJH2w8BEDSPa1wQzkbVaAjHLmLDB2HGj8BRJAbjzg6ioAQnrSBkkoeA6gvMZNbzoeD7rLp84Nugv6PY",
  "key34": "2CCh4bh8K2MFoZunSpJLZHHVxn3yTZ5gXohDyLEop9mdafjxtipDbDdW4XX9sEqbc4B1GLkhfCdYxCnVnxdw3hBj",
  "key35": "5YfPVGyWfV2wHio2SveCMABGcy71Xp4qpaiDYR3zvb6ixmRYrNzcSR4f8JzGJq3an3WgQd772sd8duqqrfEpZVJS",
  "key36": "3qB9uRfNJGhNo3r6qhugnb97z8H6hTQdio3oydLctAjEYxonzzDLNBuUuZvjnWrkuT2p8mEG1ZoeXpB7Vn9BwzKy",
  "key37": "35iE2nKhmCZcyoKA9oKK9uSQ1ddRdmS7eykQDttYiqxcsdi1tanngysfmpVuxwnVGW1KyfcsDzrQQtumLdjyQQwG"
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
