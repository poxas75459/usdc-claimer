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
    "38KD5a5ujH9GJhYCPJ1Po7bRnPWHvKgeZCrGDNGxTxWxvQgY3XzpmjXouKaJxs7ZzKaxNZEFgL8nksMT163BkkKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S6yzKL5YKyaKwgWkQSa7ufcaCXzgMNkJz8UvBqVS9TNWWjSHggs1HqAqE4rqKD66Wy7YTutJQP8xjLo1ryBCRNc",
  "key1": "626qVtha7F1iBz6NL9Wwgq6stUP97kn4xmWS97aWfTGBbGSR9d5d3pQEajKxkxAf8sTzhygMLCgfKPapWcGSi9Qj",
  "key2": "5ktYG5YJc9eMKK6EHp22yak7AvDc9fawp11mTps2A6y8v7xVvgRwtCBLErWAbaKqGPhMxgvwbZpKr7wfsMtYghgs",
  "key3": "47KVfFkYq4kvkBUbFWoZVeNKRWnBHXjwm4r7KrxA8FFSiqNXMvhsmbun9PjQQctYL3fXAciKSLDbRVyGAawr1EKf",
  "key4": "2jgXnemrase3YJDMeeFjwYokSMT9Xs1DTh6TBFgbXuYW3QNWrnQkAxkhRMGMyUuHCb211osczoXtT3g8oejypQWz",
  "key5": "5Um8rmR4kWhCqoLuAsezVcgamNf8Sr6s8ZxJuKyB6VSdzuwBgA4VhSKWCLJp5n9GAV7UysF8YVENZTwQEQtxE2VS",
  "key6": "4SdQCgp4acTcxn9RBmvk3trUTnjywgx9FAeMnrAX61iV3iqw5kkDSveTAdJtuV9mQ4dUBpMmXMS9mjXk9Pi7MBbw",
  "key7": "bRJGfX4zaneb9i2R9pGBm4AuMbpZoLagjLGJAS7rvYK8mueNjaqcUtdFMh36ApDwGF9tKeP5N4Fg1k84WsupktF",
  "key8": "66ijPoq83NjqQfV3UKUXQ4Hy43UjwfcABB5Dhv8SvPaTcaqezrak6j8KpTXzCYac3MhENvnburFQmyA5SJX7Z6zR",
  "key9": "5b2nAYQx5yxB9HAwoZrwQRdcbkb6s6d7WasbZE4rBBJbzQD6LffKsSseMiyqqQSrdnyJ6jWZeyUYPkmBgFZV8GAj",
  "key10": "5dhnxV13VFNMyggrSr8GQPME8Pkgx8Vc9pHrxhURoxQi5TTqipFnEkVEVLUB5pFHnsSfeFBcReq6onTKfSNU4kby",
  "key11": "2o6ntxveY7vCAe4KEgjV9duuuQdu1fmvupT7zrQxhGvGzP9uyjdvRCCdpm2ji5Kjyxpi96Yz8VdSu6p1uGNK96eD",
  "key12": "M3CFBTM2bm7xBvwp3iRi61tKUzVKknjSVXBiZPQHq9AJYw6Pb3AbKpoQA5KRshHammPUJkpi1ZktvywCGwKwqqG",
  "key13": "4o3gPvWu8VhYSga4RzWtCvTu8Rsi5BLk9VHenNLcCGFw4f7Stp9m1kzZmpSVdteg1pNuGRfTSWUQeYmnCTGcdVZh",
  "key14": "4fNon6UVoAd3gvkpwc3gHawGPPrmFr7SmYHs2Pt8ahpZdvUyMuYdyUWDMAHzYVX74FjFortBp1pcnBgFypT3Ceha",
  "key15": "5h92s8TRDwSwHc7z9MCySB3PpULdA4hMbPiQzY6e36uMABRhR7H6UX1LaE7wuD3pKZKckgSH6vAHkCqakMsXTbLY",
  "key16": "3WcysXwAdJLhSp3GwFyH7F26qayN8zEv9mogd7k1tTEQTLfASqvfh1A83aMFTb22MTCAUNFebkCiwGEpLXU48RHt",
  "key17": "4xX51vDrfoUpwuQ2rWTrQZvSGQKNjFogcT1U2iZffCpwhxSQFRPCGeDrbeQDhwDoPRQDpMRPuXrv2PGq12ZcN6E7",
  "key18": "7k6pV7RWpRAwNbyhYD711QHL3vcodmjs43FdrX2CpxbMEGV4HJsymyUG7vGt6gk9sg8tLWvDQNFyUHb2S2qw1px",
  "key19": "3C5ymXiDt4c4q5FJ6b9dyFeB5PvFc57gYQdKxBmxyEVDiP25vYvV1Pciv48fYma7PfQ1t2po76AtzHWPTb9C946p",
  "key20": "4g5rQA7t9DV9CdWJuNtFxg6TVp28tqvRSwmbd3GTcfKSEq5UcNwQRANREVKpe1hSLJsNA2XQ8ZPNXu5JWzRq3YW4",
  "key21": "asRBXU836G73Tx6ofdJB6F2UMRrrMhW1ALsgvj1YQkHXC69SUdChW46aKummCagoMmXAnCYdKSjtSSEWcf4ubjv",
  "key22": "4C62fDHQi9bAK7ibd6n5Wrhq3hq8hx1oV76o4tHgPFdokg9hYv8BaGcGNQwjiwy6XG9NvH4J6si7tUXdWBZGEhxt",
  "key23": "5YwxwXFydYBsUBXfZoUji9PXRozLS6PQ9RcDenCMAg8T3QPc6DogxJZJVaMPqDUzagVKarAUu3MoxUEqMj6Gq7R7",
  "key24": "3yn6eiVLsaqe8CuhESJgrMs9iGNdb2w3YrTQieksvXufXM3K3dFSoHP7mWiPmegTvXMf2LwMa8JZujRAN256ZadT",
  "key25": "4rab8JGZMPCKB3aZgSaX1CkxSf2Vok74S5wL8KZHVSKJHNyLVo68dLKwKBfwpvQcHqy5wXa3M89H5MQcTNbqLLiY",
  "key26": "3bDL25CTE7Nx79eUGhh7c1ha72wTiPDwwchrdwBcwNLbAo4YWV4sNAUhXUS1SL4uNoE3Yw9e7z2ZYqgEX7P8kkWF"
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
