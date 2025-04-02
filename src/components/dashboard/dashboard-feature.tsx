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
    "2REd2HTpiihYs7W9LqDhjcGH5gn1M1cHKwPStUtuuFZzFSDSNZcc7jeCoiycFKMwnyr5pGo4H6AD1ewSjmJDnPC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5iQoCyR9D8iw3SPb3Boj3XLghwL6MA5G94zpkU9ZbgiKKHr5zDzFTH5jpwPJ3KPf99nC9ijaFnhV5JBfj49Hx8",
  "key1": "28Wgy488B3sETLpQdGAXVRYeCg6WbsXmiqoaqZ4CB2ko29UcRCntuSGQN668oBfihzs2oMozFoSceYocFBKkX524",
  "key2": "2J1cW4PiLkRKaLhTLhdfd7PAq5YjJeGHeBYbsZVDMZhd4t6TaXCjozLEMzfEjqNauaRrjsTzzjuRPFcd7ZqqTyeW",
  "key3": "2u7WHagmVJwbET2B2bxymjG5dL6HT7KHD6BgoDsvieqgPS3NyDuBkH2v9LmVpmf48yTt9TbmmY36D68FQDc29Ldn",
  "key4": "2P2mdpAC8VqktUWQQGBgpv5dR5rbRwnKKkWWEE4KJrQqMJXVXTuyyraBpEEt7t4pCYCVWMBy4TwtmaUiYppC2Yqd",
  "key5": "4pdDBVRqRyVeUuXSnVr7RPM63cRhkP34z5u9JfFiq9WoS1Pz2GoBSaKSG36p4HAVXBu1UcZ2mrEmRAwDLV4t9Fav",
  "key6": "5ia6WFAYtPUSrCyfWmaaBXVNyWQbCkviUXrhzRwgaHyqH26Vs8s6oPEV1hzSeg2ubhCWEXxX7iDfcywdZ9in8kti",
  "key7": "mWdjWcC7TGsGYySiTcZyuCUBgLm8W5aEDzaotCvGmXn9ehv9U7nQdhq5o1CQtwscoUgdbnR87fNkwigjH8jYmKB",
  "key8": "pTHDmXU5ux8HDX5yaMA2CvdcmJ2iVUgWPzhATNWEPZP88dcy26M8UvEgqD7mFZx8zEdRfgcgykhnFoFv9igLBMP",
  "key9": "3i4vk1pKzuhv3BJY3yVyS7D6BYj3swv7tSobiksJUAnqxc24bvjGAuDvdGBjTgGKWcqH6jRbgKVhtHxkcp3tJnhw",
  "key10": "52EHVw8gKs3DLzNzHAg6NdfdNp2wCc91vXLRtyJCeP2h7CMqWEQiyb7eFJc5JAFv7vavWbpyoib9vW86tSeefLsY",
  "key11": "2H26rvSwtsVpGgpmEQBGEic4V7c9yJ2N8gXt2cSkP3U4edX8kDFNDfvyuCTCHuX7u2G3h6ufRRHHbCja8wefWmEj",
  "key12": "5g7UdEjh7ursVTL1iH1pUFN9uNtU2ee1WKm8sMchuZ7nv61U32QtLC6CqNtwPtFQMwXpWsqFWFQPk35fKCNRSPJ5",
  "key13": "3JnkWsPD87vFgTwy6fjMD6t65z4aNnPNmsUCsorZ6B7qmHMSEvrCopxaJXo6UJEndmStXs9tZVRsTYazogJaKp3",
  "key14": "5WtciPNgzx7VKvwWukCcLegC8n8aDGKFaFBMsfJnVB9zyw7eiK8ngw1279fVPPwYhYp4zeTi27bt5QLC7y4VYBtG",
  "key15": "3f9KsJV3LtgqgtSZoVgtPn27j6Ev8BVyrhwFwK2PTVunLShM5pguHdETj18mbV7ojwzVH7oc5xm42GthdRQBHaSV",
  "key16": "54D21fBu8SL6fExteAiyqYLw4iGpoF3wpmJofDZ5Y56bXrHjiy2MRro7w4eWmsweZX3RY2AycNsKKtBkbGeoqyma",
  "key17": "3LdMueQ2hMDqheX6Myz3i791qsokrvjDQeBrC6Pfik6nhT9uoknVQTqu3r2JUpEmyESmLDNcSJ93e5CrTZLCXmz6",
  "key18": "eLKkLnPYAHYhmZHDFsRHszYqThwaMk9c5dXiq3kafdoFHm4Qwg1c26YMnbKLffjpovjVe9ryWReSW1pJXGYfRrW",
  "key19": "NnVYoyWiRz1P4fbvJWJTvJpjbdh3VFVfAbbr88NJtjUGEesRuevH5birCQufMCJJ4HzdikLyCn7kLJmQR1VXv6g",
  "key20": "1RXHsCGdmaqxqGRnTrYeieLFngVZ2KSgckfLRomEQi96L5y2BAj32XNorVii9ShXngiPAmH68yXYNUwWsQJ6W4t",
  "key21": "2gP6QoWGnYsQ91mRyjL5CyXJJmSuNbpCVJKzkD6bh55eMWXzQnxRsGhKDNsRbc3xNjadNxVQ88yACpreAGbj11mq",
  "key22": "2jTiQf8nGVB5z1TL7nR6Ushx94tHtHp3nELxGnSLxVofw31PDYGuF7KChjkjSekycBiHuS4Qh1eqbAh2pyqZEKAy",
  "key23": "PcKE2scsMaAZuWvKi33f3DtvFgP4h6WyveWCMLZAE5nREorTFF8WrDnRBRX7Nzfp66KxugQThZPw7YRWdsviNfC",
  "key24": "K5cxLN2ykqxbHjTxc1gBoCnyDM7B2HH3VJKZ1GQorjMPcMGiTWDSxMErDJFX2tnwpHLsBn9fpbRwNJKTnYn7YCJ",
  "key25": "2y9hd8fEA5fmmftrBjU6o4rFd1TW8uJHqryBLzJp5NQaYNoxtvrCgbQn7rRTUhwqk3UiwdN3QJKEWZpkNB2a3Ptk",
  "key26": "5TNyDydeASTs2MK4P1qLdrjLLcDoYyoeJ2abpFducUNh1FNQ7dwnuNYg8q3Eq73dx3gMAyhoJFzWtSHSezNWfZiv",
  "key27": "62RmRM5xCdeks7VRgNCx6PkHLcJ7GmDqZrbYctxQBZtPAWvQ6Ev8YNMkUqdQC4586QeEdDvZeVZPsqudZ9ext2d5",
  "key28": "jYTKXmvbframhBsJtsQ46q32FmZWXMhEpWyWStnk37RLioUAeUaxa6Ukvvne87ToApiC8SCe6ejnFdJM6ciXU79",
  "key29": "5Xxa1NyZhBX8YHtKig4ye15ttuksTqGzdGbYyuE3wqyARJtu6YyvoapnHwHmE9rychChkrY1nfs4enPoJojvwNGU",
  "key30": "3qvXnGqfY8B7QJ5UyQkDAw3DCwqfzPN8qcPKDPFnG2pofVuHDwoFv27JygC1dcvA8mAHQXgvE7JXh9LBix2r1D4N",
  "key31": "3v9Jv8w1qfKp5wU8EvD2vo9CeMCuofXwtUNifLpQDfVgaWa9w8nYBfEPyWLLmomSF4jZyGAAkErEcdkXb7WKVSoX",
  "key32": "27BAdFo11pD4FswUACnqMSsnka75TbkZZiLd5KTXwcLtw1GPYWoMWWkomND2u1nX2UZVuN5kxL9GuKhbQgzhU5ms",
  "key33": "4MbQFsRpUyy4LtDoe1zRHWDN7XNdf9459Vn8kcjCYCwxDFf8CSNkMHW5xVoxgVgoTAdzqjmeu1wakkHUozJyME2S",
  "key34": "3ZenBZntcLw5XH4ixAjQNYP3aUWr8q4g89EKZQ2Pnoxvs3zksyfi1z8F3Zz1PVrmiNQNn967w7hGLYZjmYd3XvuS",
  "key35": "31Rkfa3kSu4JgvydabEx1tjUXkJgNxUHJJBU2PBJNB2CVTRma1sDRc6qhydyyamUKd8uDK5fka2Lq6pcM2ryTBoa",
  "key36": "T4Ldvcc7Re8wSsTBURxwF2hxdHFWcuzgsfZrvJkXqjrmGeqWtCdP6gmKGKsTKwZ5fXVyY5CHRBG3BjzbE1f7Tik"
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
