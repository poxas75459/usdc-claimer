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
    "46UMVFrpkQnnr9m3jUWAdDPgnxm4S6VRSm4U61WSEp3epEimbipZaWRXmxn5ixhEDMgnxF16sqUZBy4sNZyPqNat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGYfYi8UHvLHkW8m92tcfXTtx3Pz9keL8rfARt3GD6TMcLP2JSZ4hSow3yfjyeLXzrqz3LUMgn7i14PVfdwyzuJ",
  "key1": "3i4HVixkaefgwCijdDp4tBh1rEuA7XYBcmn52yhqaYzVB7RWLeyonJbPCzJZ8dTXq8vrEZXxWo3XVagmcvgwbwNW",
  "key2": "RdjHv1Wy4pkjmUrpfQno7z3C1Ktt8WEF2XNXxuBYhzGApKxdo3tMoBgM8NXxCne8LpNBMx67upP85nMmEbGTt9j",
  "key3": "2mdD5Ax659nvBTnhMkqvYUt5Wax5Re2X4pGCK4JzcAj8VzogrVHpd1k1CTnLRXnVrmThMjpbcCgAySE4Q982WxMD",
  "key4": "3hjn5yxGmBVh7RZvwxhdSbLQH4M2WJxoFhi1J5iZWCokJhYoZ2Ltq4HZPCV8J68m7pu3Tu1jJdukukDfnF6Spd9i",
  "key5": "3MYTtcVmoSb2A7BtHWEREFjFj2o47js2pi9QD9SvTE6DsouVrAd9CnVTWYhmJ962Cuf2hgDsrWymttV4FkjEyZsA",
  "key6": "57WQm27evv1asMx8yRsysfAE8CtK7EHK9E84jpiXmxmEZsFSUyTZBeTupNQjHtDHUAjVt4zMV3cULYy3Hw8CcUdw",
  "key7": "4EC5fUkNG7qtyh8GeCxwAc3k4A3oy1UHudPpNknUE1i456FmQzJWk66A6dzXAXxc1tsir8AFcvmLSNt7a5xiKTX3",
  "key8": "2WWqbdic1Snnxc1EQsvgJfRjL5T5t9Ltym4dAzPHadQmNYhmAyobS57UnezftB6UGNnH5ConEGmwXbUSvRuAnHob",
  "key9": "nViLTwBCYes8os8E3ekyoCCEpc1qSQnuhfDPaEh2Aq6KpvjNhTBeycKdgJQ8kKDHo7mGPtH8tv3vninHQaNp2Ei",
  "key10": "TPFX7sqnrfM6d3cRLrvjSrtKNdLpxXBhoMwT5Jfcc8YhdbrKMZVfmFdsgyxqCT1q4sJrBm8Z4uTiWnTgGFJ59ns",
  "key11": "543P8LNMZn1dK5AotFTKNk24tHX5oVkvyRL8czxypncVoe6mCoR2cLSxKzJagiGadiVFXtesh3a1SN91SFKjNaA7",
  "key12": "5fsgzNmcRfsXxx2j5Yz8LNzi3qxmEjVQKEyn1G2qkGXCeiwSSgb7Cv2QPx2RQmnTEHRPesVMh7C5T4qiaPxtak7V",
  "key13": "3wAaiTbCDA6xDDb8pN2yDNsA1GcQ9VMnrxFM2z2yTuRzziUGQwrDo1DyEehDFvaoxzAjYUgE29diNL9LY8EF8Zb5",
  "key14": "2MTUqTmtMW4nEjo8DxS15cwsfAAdHuah5hzkAd1webpxXhUvif6h6gCsqSZDKrBRKvGHAbDfq28mpuUX4Y5bnLju",
  "key15": "2Uewf2UQy9iHPRZnRpaPo8nogNHju2tA1aXSDihQLPLNTxL5Foavu5udWmoVnwkyUZiJTwbLc6EoHxDXAeZoZCKw",
  "key16": "23xJwvpSmbELrcM4GMb2maXLmhkgH9odKk7rBnyy4DteK6ufEuYbyK8sftaeye2WbRi1yu3aggvi158kh7HpT3Ta",
  "key17": "3xopR9w776kscz2R3gGiQxYinwhPvK4qWnGzFSZg2iFEor3YCphErL3wazdC1E4Ti1K4B8duPyfwDzH8J6bnMZvi",
  "key18": "2UfwYiVfCHHQD3e2UunopE65oZKEbm6k7fsajnfPWZVnDGvv8Lv7KnA1BpDDer1H6nvLoZwVzsh24uu6bp1f48yb",
  "key19": "3qFsQz53Y3aVMSdPUZC569rE8P4CKx2nydzu1NuAFJ938cvWFbkdfNERZhkXVqwX49FVgoBfvz4z1N79N6Y9mxqi",
  "key20": "PL5JHhCt8D76oD1RvpHP2g5TpXJ2zd21v1rGtN2CpvEVbwP1kAijh5SHMDfZGkwdVXsRLCTbVpcdik6FmVbzN1D",
  "key21": "4cuJA8vZTuW9ozaKzh2E3gJeXbiUGHDUdLE4DrPR2j7KuUok1MpvGZmehyWTEKJYMsFKoErhvtxdD8FgGjs1q7zk",
  "key22": "2wL9FgCkbvswdT9iTNi5JoMkq3k8jd11BuPhXkxW38Wo78265MoNSfzWyGDf9Eduk69RtVBNCuV6hCsMGoQE5QcA",
  "key23": "3AgoZkdQv2K4PBg4XiXDS8cFQqxTFWeUSrF8npgAwo2g5oqgkd7RMQtK441wDSewyPmkuN3tgWwzcbAprgdMS7A8",
  "key24": "3V1XzQLzRYXzGKyZxj6XA5JzMXiDNKdirmrj6bpVSC7ZWGAypfN1JorP9mpXNaufE46c35TtJ8Be7U9kp54Z8gDU",
  "key25": "3aji7dv6pPThbjHxMyPM6aYvp5WB2brdHaA4WCcQYg5aPQtjWpZDrTvFKxQfz6dBFK6WMK1WZ3mNf3Zo4FrJn6D7",
  "key26": "nqhH6HHDA4PkNWdY3yFncMdMW66VZVMi4EvrczjDjSgyeFXPY2HuzbvxCx88jcXQP18fASDjbW8GCWC9W8xTApw"
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
