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
    "4rm6BmiUgSupSuWVat6YQu9Y3qm8hj6Sxa5HSpvrs2Ht8RgcjNycyJqAkAx88RLfzQCuXFLBU52TjLDGwSeJzTex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "knSUMF521KH1MWVRjuT1aKs3BhJYzWkZmPWzKaVKUaecSyt5gTQyHsDFKP6hdc6nG6sZmZiA2ZnbGUzq5jMRx6D",
  "key1": "3D33L4ezLj96LRAs6RnWnGdwrVotdTN7SiviPkVuNL62JMP5RQ3iCB1gkorfasJ2NEKpxdNjqktt5shyHH5NYUuu",
  "key2": "P9a3hTJ4P5XsRTosfT9SuokUHz7bjrBMfFi8QMpsUZopvdzUyKYGLrn3dxX9T4eL6uXU2oWFXWPGqWfK61fNwGf",
  "key3": "472E5fKy9nTmaHcocNytjPrsja2ws8ZifA4THPNUVjhDSxeAGfrufTQMqB6w6krD2EmsfMnt63sDMD5ddiF57vk3",
  "key4": "vDi1fs1Sx5wtdzEPoyKQgfkMaz6Pgiwy61ktfvegVxfWhwMMyNRUjjFbV4iaCRqS42TQikDWYYyB8kf19ScG4Nf",
  "key5": "5Buxd9Dh1kx77rkFUKFuuoieMrWUvFBproN3Jd7V5wNjq7HmnnDcAfdKEno7zYXGepCjKRCPhyRCUyHt8ZiiPL6S",
  "key6": "5hSojGgje1UJBtmHdM1jsSpwQsyxiKVHvsU84FwKffYJCoVu5fhvixFa4hNQ9koqLCHos496YzvjR7Bt8NS6JoAr",
  "key7": "UP4v7q4SFpyKNn1WtULrvr9EC4hqf3BYEq87t5Z3VKyg3WjR4uSkTMtSK1bxqstD939dM2fgzfpseWTRFN6tme4",
  "key8": "5oVXJ59dGq963g3GV1P4cix4VHdeF2f1Tok2s7vnA8CBK33xomrq4BTyJmZv6aJkwGf33czKMedLhvQt5QtqmQVG",
  "key9": "3rhduSoskBea2yzxbjLcBfMpvHt8b9mr7MV5jkg3JMVksGG7kuX15JuPCoyMToHxutoxs9QRYFbstYZG1wHyc1V3",
  "key10": "3W6BmGQnnbWU8TzM8oZ7qwCtnPDc3ZVuh4AaM6ijCA91hFtyt13Qn7pCQj6uduh4uycB5HthAQMBgJbszM4P8kG5",
  "key11": "NQYjMjedCph74nH8npE4jXdfLLCzHVwAGDXez8NzCPCaKJfq5TxALcR4EHDQsNoy8dC9VyZEBf45Lisa6v4TPSt",
  "key12": "zwdxzw7HxXaRG7ULGZUuow4nitpPQDB1XEwXeZekkGtzDC222rQJdgnmBqgoCzPEuwJCtnFpzuzN1j876KWgcn8",
  "key13": "5cxfN676qSXvS54U9UGafzLEkdjH7VvQX9Ky1kKYw5i63b3XK8SJFQWjtTYpq9WUW5zb1Y9L2URo9xUvo6GXnKZX",
  "key14": "2o4bJPJfoZqp9wiAGhvbRbuBBN9ESkJaCmmkUp54F994tjcC2Fz1A1sERJo7hvu7jprtXAaRUP7Hq9bt1KZdyopM",
  "key15": "4Z4EauDEZqGPgpSLiTCVR3crCM4nAMaZL7PXcw5oeGRavUE71H5UCmEp78WZK3Jav5TxSof7M92vFhjv5dzKxdgC",
  "key16": "44B4gsCRnuvyTEdzL6cCc6SNB1gYANBcnAmH4TWcqHSyB4ZuENd2e2HGswfFAA7QgGwYhXrYneuzbZsQduB9NTbV",
  "key17": "23jeGh2FCpft7wi7A3N5pZAxoFMDqpePHSKaGFr6XAuMVf5LpMp2G5gJpRJJGisCuvDaLz2T11SgZjsU1GpF5jUf",
  "key18": "5oPGzTTGS2vZArS8tb5S1VW5xF3ddUrP1zh8gnj5yVvvGRLFWcZof9NuFebi5JB1gn3NGerPCgvXMTQHV5A4Ezd9",
  "key19": "4z12itFmch8nVkwtUtRK7h9rjdCbNZ281aj9bNPbMQ7HKEsvJPXpTip9VyyQ1SxLhXfBdHW6v2JwA8xBVqUjDwjW",
  "key20": "3ffJyjdhcj2Cs6HbQ7j9N1SnqtZ2C3j3pcLu5jrwnj7Ub6Ufsq78sLTmE3DbdaeFc2QjVKTx4Pp9egTHAtxmzDNq",
  "key21": "2zqWRZvNwHsoJjDcingsNsphUHfB1uqbmUwoU8U6EQ8B2Hef7h4nP26DyD4ymqfQcHEMJQyETN6sghgM6S2asTd8",
  "key22": "2a8xCmg1A9kXWpP75GJ5bT5b9dzUerZRyKLWLsXWn8d5MTxsaEuM12CC8VJ2gSnbwXEV87zudovzS7hgB78S1QD9",
  "key23": "5tVDVYY3zhSAQnQqd5FUwzioGmr1vTyBpLDUdMFcVhVmunsfTYtSD8NhoXur4nVsP3S1y7ah1Us2gyq7356zgUmQ",
  "key24": "4X3ef6eKR8D3cLh3qfDejxMS7315dAWkAv7bkS698whKfp9i9EYHgKjqm8b35AVLESXHRQZotc4x1zKvSC2sAzLo"
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
