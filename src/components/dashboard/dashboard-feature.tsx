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
    "4xZXtKPou7coTcUdRy86X4cTsH69La3m19ufZeoC9BC21W5UXGudmMEwaPKdg2HMR28EhBfcEn3goUMSTfbVUihu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vKdwbX3BihUpmS74GtAhBouGGHkdJ5zrXKa3Lju3KdqmrSxmiHmKX2c8yFPTQj1DXXdmhcKLmuxArtUfRZSUR2g",
  "key1": "2h8qw3E9R9pbZWfoEKTfEV4tzPqSTsaDB87bLj4mXG2GbrYhb8v76ud6nuoizRTcn4SnjZXPNEEiLeudZfBdHYe8",
  "key2": "4At9w8kkSyY6rhfQEqdjL4opZsKgHoH3AXNVWJnTbLMpse2UrG516wzVEecAkpbdSrB3Rim6hwRhRCmEt3h8CBWL",
  "key3": "5ZQWWBq9uTgNtmQQZZCM5Mmu3gQ8niSjF1hgV8nvUCcibMAJYpE1CVAzjBhdi1M9HBvCXAxqYamahhD8HviWr8Ud",
  "key4": "34kMZW2MhNfiXPJ5YoU4r1NAcCGUocjH2JZ72aPEyB5fVvxx4H1SdmjkvR15GbjYUhFJZ2mXtQYgTFvdJDMyAkXo",
  "key5": "k8HrXo5cZbYX5ijiQuK2LbDCNdR9JTqXPLoRKjHwVGwKBVN44toDXCWJnRAQ5sCCQcdRCTRKSS7GqCucgiS8ouy",
  "key6": "42SkUUXmLuRsSM79eS8yeBD6saWLQb3d4JQmqs6gd3HubMqbTUDtZ9YwzMycaqTWPgRW138DbFFmGeN9NKriJNj5",
  "key7": "oQaEc1esnEvV95sKgV3KufqZQVH4468dmFpR83zccAZ5gDiNbRcQzN7sfpwP4A2ACb8PcgwapXZrRaFDbZTioie",
  "key8": "4VvRsbyNN6e6VnyP1YF4u4DZDJdYNJbEkrAyJdEdoVdji1jCT2iGhq7Ho9s5dDgAwnSd5g3Qd9rAhzGHvDqAYsPd",
  "key9": "2Q7gEimZgoC1K5ThQxz8vhWqxPZyMwDb2zmVUa9DrhnAd5798zyS59w189B3RLGbMK7gVQhGtuE8Y5SnozcXQXnh",
  "key10": "3vef95gkmFC3afRTYMhFxVmhxrS1GiJdDFM4r8Vrx4VK1wmr8JzZteLHWEpCC9FMDB1D6sSEp1Gj87rz2mNdRJyq",
  "key11": "5XiH5tLShP8qByydiiPW8gNx1cASEMzfpZFSsX47XbqahiFKbp3y3oNDjMq48MD9yDhJdU599iv3YMbunxgWWDeq",
  "key12": "4bVLmFbpqQVhHgPeSZ6BL5AiEdNCYUbj8VTpVChw9Y81bsNPKTcK74ThcBoDQ8roNrVUTJ3GJxnLsfoWbcfLWQFh",
  "key13": "3mzSbWKg7mMoQdU6QvW5FzYCkaWcW35wjmVKCLdjVhVhn58WrhNfTiWk36gXhqZEf71fsHZv6Hc8XhHsb15zAyGE",
  "key14": "5ZdN3ZbANdcLvGDsqaF7MryJLbQu2497xz1FvWzmhNrVjsib6JnCdg6GExPtR9whijwKaHzSDs6AXQbJaaSDsVs8",
  "key15": "5zPpWKtTvnFApxPb6reTHEacnaRhbr8TWsEbvRudLkakRpUYMTErM9WAxm4qCeeWx1MPP37AHgnNZo8znuADBBAN",
  "key16": "4W661WRhpYDCmwcGFWeVQhqxUWPjYp5SbAxquas7MJi1nrcx8CKU97fipjKB3opaRmssNxGn5WWFNxKqHgtwiHCo",
  "key17": "2FaCixvV73DkC5yaSPEpNrTgUJSRcAJuvaGQq16uWmnYNbdtUg7Gh3gtE5U1s9Tys3CpfNHvkGbzNSo6TWcCmAGA",
  "key18": "DtsJUJGZmaMBVp13MXaQxvKnkaTai5p2Quhkwo3G13S45EM8hqMzgMMYnuv3Wf71WnmZqYuKDPYzHFtnEfCQiBa",
  "key19": "2HX2Dm2sZBUhXE3NZoDPcn4MqeCamWfiqHLJH8Bvi4rRMPDLW7gCu3onpCumENhum5DDMXkr6e7LXEFjZ2nhVD62",
  "key20": "5Nz2Fo4ZwPq1mNhQdQagFPtoMfYpccTn8HSEn2Kx53EkhfiT5ywVcoNhiNYHqcR8DjMQC6wui1viArWgEWZveVPS",
  "key21": "2RWVuhU8VPJidnUL3RGtKBmX6xNAToDzHETz6nv1rZvGKgSxNXdDWcJE7EbvujJkaVKoWzXmtXSEQ82Mg9t9cuZx",
  "key22": "2es3n2USTEWZ3waRGJdpWz2RJBeHZaBE4ohdicT5TrEeN8iZG8xqCjMnQM3VuT2K3rDzjDNYzqTrjnXqyj8QapxX",
  "key23": "2W5VhwEhaWQQgWTH4zsLKEXwW4EUZMuMUzPUS4sg8bpUBoQS2ayzQGnpkTo2GqTktULqVvviH7ZPVMXU5mjttWJS",
  "key24": "G5gWzejDQK7HZJQQT7zqiXE9uiMLwnFDkEu4LFMvSTFcotjSW4pmqtgSEULm8U7GaMCew1A9gTU6dxYzEmh7a3m",
  "key25": "286643ehmkFBQBtZCxd5fcG3EKATcqjHqXVkBwVxkPkhu4uVLL6JHpMCDR1uJkH1Hs7SNHKexX3mwrZ3ajJ1TEnv",
  "key26": "5ZRGFQWt6Zb4HYLp8PUUD7DMj1q6XzAH2ejGgKT1jYiGVqEm7B9pT5R1F8G8owCD82za8e23cTxHGzhFtDYmjGGV",
  "key27": "47zzzjXFUNByuodgsHdHsetruVSuUCkPwex2Jf7pR5CrdaGwm7mpy141KMNu1zrE6T5nRTs84CVJwkmoBrDRswi5",
  "key28": "3imrYxCtvw6qfGo2AGsFp8WU8fKqfEBxYjysn9crk3DJJkDJfRGB3nJgMkkpirgiNZX8Sst7EAg6JwPLbthkxffY",
  "key29": "5mRCm9CBijt51pTrEnx8zSnnRSvYHNW5eoigx1dMN8ES53zFBAHopeXxxcn51bFZXHaHA2QgAVyTvoZfuTmzSQ1f"
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
