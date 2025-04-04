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
    "YFEXinQspWv1Gu6PjU4Q2621Muc3XyFvgqyU1xiq9qymXFXeLvH3afJwkFXjwvmq1DkTALhphc1LsEDD3V6yT7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gKWbdsHENeJ3aEsZ4uvGi7rqaMuiWSF4Nw3JP9KhWYJwduT32HFvor4JvpbQ81JgsS77DB89fB2T55qEUoNiZoR",
  "key1": "2JyEp1XJQg26UUiyN6nmH8d1UWVM1FtxN77HYQnAebwunnyTQq9vtYDsek4CxcyptBRwT9uben1xa4WEwHgMeTV8",
  "key2": "AQCxcAUWFakMsiLnidax337HGxy11jSdiQCnWQGr1a3i6GyY3p4tYiWu5huNxJf5s6jV2N1JiQRh4uLk3vXZdaR",
  "key3": "5ksoEiKmyNfxqrQmDeNgKVwnzPMi1voQau32ZafqzBA6JRvTdiECEzeKPHVyYpoaTmZvKiGkcnPQhNfxb2noJU1Q",
  "key4": "4wwEG8svmDazvd1bzC8eF1B77DWT3cS31pNiRqjtbnAbV5oTmLtKKCLfKGtCWCXJUJHvHBCYkci3QVR9fbe6WxT6",
  "key5": "37vsYiaCKEVg8RGwARZxvjzEnh67oSdo897dwdPkdmgG7dDjuDyDN6GzNjQ1AnMQjxKj1DJjLCdinJmPekmixCJP",
  "key6": "jYHFWTHkG5vXbeFNmHeeNuQZiL43pnhRng39d5s99zJNbHQQWp4zv91DsYSRUQW9EY3tbcVkgXNFcHQuY9bm6mB",
  "key7": "2jCdCEFLKo83doHXSwQFwfcHx7xN3hXLYA6eLwHkxogXLfa2aAWFzELDBJBYxwKbZ9DDiwEKSnEZmJYw1DmjqbxZ",
  "key8": "4Ep7nQXwXg6FJ3BWuhwAXVLx42ks1QVq3DqV8ujr887nHxxpkd7fkf5DUaR1BfkvxdnmczcnGVh7CFVqb32Cd52t",
  "key9": "4aSE9qCGyUetQS9A26sdg3mQGQ8PiXZ7zy4hcGqkCj5h1jxxYDrvz8Y3fcBi228MJWMuJoP6sFGM6iLrriqLqsEt",
  "key10": "35RHhc41fnmTkpTvpHrCujwJQCP4yQbqWd21gngWo8DXnq24hoVV4jwjfSfJ5xP8jiTDC3PTdKjMaNnkAu1ZkovW",
  "key11": "zMozcPcv7Zd5UHsE97NL2dot1HmoiLZMYEWX5T1giT171qRuRzFzFWoTkS1b18dJVpjXbP4NBTAkFxRS2V2Mp9f",
  "key12": "2nAg7znACpH1QXdxpSBNgMtTmp8kS2w2DbJsvhtFJcGwr91u3xUdqcw9ffWpeC9Rrr2StgQGZy33KnSLrE33CDPA",
  "key13": "5s1XKGqkb5C6nCcSjR2PXJaud81P2JF3q9vJaBBpy9YftjmUUFt5y9A9dMGhdZRcrjPWoC4Kp528JJQrAgjrMwUk",
  "key14": "5hekSioiRockGQUaS1RMrL6GGSuf73tsXLZbC6RfGhM6nUSyeEsHMZdniQVxJmscXhaeuaQNm9RTDbREyCwgi64X",
  "key15": "CAyQHAyr3Hnbj4zKd4ZrA48Gb1NBgEaUCoKD6P7A1ZpK5h9knWXRMDFmUHvvDxhvWjH81okeB6qZud24CtoXej6",
  "key16": "51XQ96ic6yvhqB11McTn8a4ppu32DZJwDuNQpK3EQa9AbtkVbc3RjoW51wkExWxUMtEgZH6hHSX1QSnboZsP6Uu",
  "key17": "5WKTkzU2iivBfhKvpxquopQfw9uYiZud9PuPrcqP8kMMJHdaAgNHKTrtLpJd5jNj2FPKJdpBR8VETCSWr9E7T1xt",
  "key18": "2zdeMve3ALZ3VUGZyDUppcaE71Npc4WdVKRrVdCS9eyfxrMkDQD2d7L7FvRf5eVqtDKKEQURdndNK83uZ8388JJ",
  "key19": "3aQ79BZopJnz7RgSRn6b4EYAtHayvjWx9BmJAEGRsUVfbDtyoBf7CboSJZUVqh6U2GMEVXNgdz8DjFpRHCGjt8bZ",
  "key20": "4cd14mgvhsadzJFRHWnco4v8vVZJgWCQATQaSDCHLXv7PDHnAegd2uzRe9AZb2AYLEGDygRP3H3tPf2XsfHqu5fX",
  "key21": "2iELrHT83rgZBHAxrn5X2f56tzmijC5mWjckwSexVLmU37q3dMPS1nBYRKyLs4WVhgfPFGVzrJktRU6EENf55SrB",
  "key22": "5tMCbTmxsBiJdB7ww5KAZRnKxb1zxSzEqmyCEVwWSgWYjwbuoPFRwtbDbZuKeajqqsXVvkSysYRptjXm7ann422x",
  "key23": "WGtCjXJ512aVSHM7sgttAtE2SLT6JLWdmdwM1gTcPs4dGajFp6rKPYuZ1Vgdp2oZoQKFvqkTpKmghJucQPcpXdV",
  "key24": "5q2LYDdTDAXEvyS7zpLWWjPUqCF8tffb8c5ExZHAUYcp6vUzLSQtMJpAPPiP1ZwyofN6G7rQSHMb1p3fmnLqWqin",
  "key25": "344hUVhRXedPE83DSwp8txtJLuupVMmdwZrtf8VwTebdmsXHNiYoCRaWxnVgHWYTuEGaycAHN4PZjN6ZDgWg4AGK",
  "key26": "2jfuuED9eYc3RjNa3D8Tax6kW7xp3qQUPJ9pmeJVS7MMYmcihK4LJiCzEK2Ebn1Hg2hHqM6PTkqn8Rth8cyx8VKi",
  "key27": "5ibiBEZaUmWzU1LH2WtHcheDF26JNWH3Za92GbrWRvPRdimy5Yo2nn2DqCwksEcMzzKXwJU93UmtA69yLCDqYqWF",
  "key28": "3paquGNSuvtK3nXR2s6yMfawehA6TaWGKD9MRK1YjJNcef24PbZUQdn9RP4vquunqSQoUqtVV91t72Rdq5BsyPzC"
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
