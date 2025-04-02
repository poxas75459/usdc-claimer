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
    "3odtgYZJGZQfWWXDfd5eoRFoUi1mwaAcokMrEhpbU9yRroH6iuhPAxjhA13do6cTBdK9wsK1bqDPbQXg79BHCizE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvu8haNeDTm5UgFri96oteLxHDyDDqrz7ngRP1Rkqk5BmQaLxeXqvH9TeHaWYVNCz3mj4iyb2L1qz4dyeAcoZUx",
  "key1": "5V5vHV8Fz2EVRgrWbWHDsiUKisjKQDCySAie5KBFjKwso8oT5YimTBPXG83d9LyFbR5JxZUBgrRwYjbjwE3QkcU3",
  "key2": "5pCTpcSCGvLkL3C4ndjG7UytKu8qLMeEbSLvnKqxPpWhbPBWmtxvLfzzQcyEBtgNFj71k9AGgPdXbn1AtpWpptDp",
  "key3": "2xTBhsDZJn4dTBx66gnCt9RHsdiBt4jMSX7EBHNGLGqDtbb9MEw7Aj2U3FQ3TenjBrmgBLDS88mFLMQzZ66GE9bu",
  "key4": "31mYWxRffYEvQjVhw3SkTD6fDkSygH98QPjE36fQ7rQ6UL7of17mvvr7Tx7aEdHzxZv8oVqixQwWpsrRTA74NykS",
  "key5": "ePPU1uH25hhZgXDhqpD5xfxjrtC8fdyRGBP4CYi5pP6LDv7sanZdppZvM2f3kpaeqCjJQLVPir5xmHNLkXuyf47",
  "key6": "5Q9GhDHNBXd1GjCwqwMKqCTcg921pM8k3ZVMb8wuwqVEhVQrHwuQeMcnVEjok9RozEdtaFu5QE97TErHBCeAZrVN",
  "key7": "82TPHwUKHYto9YgW5BwTmd2hAsaNSJYh3iXn3JhD9Re3LvoFQT5iY1iNenq4sdEuKPPBz5Ua9XkFPmVrx9Xtj9J",
  "key8": "5z5b3WJt7HJaDu7HvqmDdZA2zHC2pRWMNVvtq2Hbrjdg1Cd1ayGdm6SiY74iuvqumSdWWRT5PKXEyji1GQiC7Pc1",
  "key9": "4K7Pr6N4w9QeDZDc6S42xgnJzkS6fZ5VyncwHd8qr2izMRWqbDKBZb3i7SACWT24JndFcGNPJ4ehSmEWbptsZybX",
  "key10": "3ZMHvw7cYMEfJ9j3FdmfMuyqqszku5s9t3kSQKUUbUrn3hqAm83X6CngeowD2BB7Ybq7GzeG3dRjX7MQAndvaLXG",
  "key11": "4i6SxPpsCaF23QCCZgbgT5adnwhZxmjLmwAUNvx8L1cTAAqLHNfB8d3gunE3ZZFX9mHLN7DTa27nzyj9qyoXsc5o",
  "key12": "5F9VG8D7414y1VKTj7xC4wf67zttJXzUmvDU51R4EpAxTuF2gxA4KhjQHyoeqsMfm2fMktTJcnBUErGZzBxfkJRn",
  "key13": "Tv4gKxHHbxe8zA4bu7K6AfwrdfyvbmAeC7sxBJGGRC9Be2hMzp2vWVaECYxtzieBwSojAKD4isRSYkT8uVKu2Wf",
  "key14": "4NNZrpd9awCS8Eq9QftVPAitGYcRYHAwXAuHaovpHUipyuLUx4QGDZqiJzLu4vQVqaa6efERvoNpH5LHTyoujKZ9",
  "key15": "3qX3d74KSmoLkComDQKen7gKyFGey28JPkrWHY4ToiXQcXtppfGgHBcDEMU2hFB7aC5TbC12ZJ6Wj5Mi5N6ST5m3",
  "key16": "5CczSSh8FDQA4VSX7oA4Tb8jtjn9xroDZTombgU113cp1JVBEPbpoVczZ3GF2MMRLN3VwWh8ojyJWkvSiYjqTyP5",
  "key17": "62EQtYKJ2rjot1FbUHWU6QZLwbmkwwq7ERZ4LfCE3zXMGU3qjSeX4FMDvLHHY6aY2VsBLgs6eKTHTk9aqeqDPS7k",
  "key18": "2GXDbnmSa4uuvZj8ZuuYsQcbDmLKNEj65kDbMT3ZifHhooYth8fuhKBKoAtwFH1UKAsfupyfwrKfxdwLoX4oJUy9",
  "key19": "2njP44rhZpVCUenFAcrtqzH9AyCjg8Z8KDbgWF6i8Z3Tth7ofNNCBJwjN4acujSz6qEB4RRceGBDAr9akd91hW5C",
  "key20": "5bGZNMq6WesNkvhbzqLoXdytGo98uC2n2f488bv3HBU1sPVfrkEb245Qr6W1zSRqNdenH5w2oWuFEb6khHeUd8kR",
  "key21": "4EHbaxJwLXuxeLdfed5DGBfXAuLA5DkxES7Dpj2M82fBsMXRyNZZVTAjC76rfMP5bx5f69kT81GKUMVpDFqtYLsZ",
  "key22": "2DiwNR2kjeQgE35bn7mrBdKUMCDfnk9uxGtA65YGzp7n16nCJ2NN2oFSksq5D1GgXSzJeKd1V5NDLNY22afEarXr",
  "key23": "63Z1pHQgWr1tk4JfFZDQEZNcqM84utMJ9aUqwN9SNvipPMrmFMoQFF7ZCtmtRSBg5fkTx5kR9iEqoFDLsnNX33yK",
  "key24": "Edct1pfJKgfNkv1wtUPgSCri3sGFNeWeY7WtYCjGxMr89BtK3ztkn79oCGTDynGDRJXbZCDu9EjzKGTHWDBvg2k",
  "key25": "5aH2jEoM3HXBEgXRoafKQJE5ADw12XmopYmtmaKXtmBVE47LEkwKSB8S82MjWxLDehh2TQc8A9FcFkckkb7GDYFu",
  "key26": "5TRF5m353SZdACPa7bu6Y9ZdXXFoK6SuDSPuJEta7W1mxXRasQ132J5Az2NVp41oBTmakhWpVbYG3BsYPYhw2A3f",
  "key27": "4fKaKqKd7gmAHz1QJoawo3WhkqNB3Ty1DAez4DkvbXnU9jXJBz1gNYmcLSEMEU7Pfe64xZyz6ZXqUJeYyn4Vvnoi",
  "key28": "4zMfvL9XebYzX5ythguxREtpUJnW9aqu5Jp8tKnKcf41RS8qGPUdRhpN1w388WUT5aZ7rC65frx7WADGmKAEoTAc",
  "key29": "2njPHXGTcMnVFaTWdGcaer3s9rYhjMwKS76pFVJukWPdmtU6kjV4NyvDSgisgAPE12X4evejgAEgYZpJkAtvHyeC",
  "key30": "GvJ61CQXmSRpjemUsz4XEWwiiuuUU38gn7mKoLbso1Hd4wD51NXQ1VTUmmmiG9SXprvsUScvRfmKep3D9meXqp8",
  "key31": "5QuT3ZSSAbPbZfseAdJXJGR3mZiT3KSu7AN87RH1tVqLXETDKKYo3HRwf1ZtGdm6zAW7k9hN7qrmAjo5XzQASCgS",
  "key32": "hk7ucGTSLzBS27L2jxY6PJtYzJKnGuLNGtQsPyjsgyMSRJK3o3kMX6prfNZa546uXH1cgtqYwkXAHptz7kUBi1q",
  "key33": "5BQ3gEjxAghffb8yjVnRLJMdRmgtYjiQcEAnHLSCU2ddvAk2z5e2JTVcBajeWm83AZTfaJr7uV5UXGrxPB2gBbU8",
  "key34": "3rmJhUow5xtaTc3vaB9BieuWat3u2AW9xzKhNKgqw3CRiSudXq8JH38EvLj4owCjivo7EABxVbhmPek7qQmzc2Xq",
  "key35": "3DGVdZ3hwwJE6AdPTeAurkk9DCvCqZaazbPkUYYVkNEcpTnZ8iifDSywHwcsPq7nG2hpxw5ENMduhtXrqUa7N6ZV",
  "key36": "2KZkqSnMquwi41LNr9YDzVnG7fV7wDBTEyuB64hjxm3QmuxJPpYVxzPdBKdMBYyCYK1Uo8SMnciyp3RX7RTqqB5b",
  "key37": "2NnDBTDP3E2vAv9tmUKJ9YAxwtLtikCoew82STxeLhVQheZK4VsCb96jC74BNYskR7yNUDxpQ58Gn6SaxDPLYEk3",
  "key38": "4GnExFRXGYQQ5QqYqo4fagZqmTPLizLmfex6u6NjcNgadYCGMcJQmdkB1YWV3nsscMM2aGC1C2TgKqNfWewiXXSN",
  "key39": "2QKzKTVrnpFfZSypJrzhU9EAooRqvY2NpReWa1C3jSxwVDQLu8YUPK6uCtmx51p4XTdUBqQxAX4jt4jyZM5jR5db",
  "key40": "31LtnsnBv2oEEn3758e3S9kPVDjzKRmzVh7A5wwQwSLX5h8BzoJoojFMWJEmcfSJvggmsLf2mzBuHFvhVB5qXNqi",
  "key41": "TPL8DgaYtdoXgir6Bj6kAdPimDrSgx9TPrbQaDKNuXzwgnsrhfxCwfzUZ59Kc3UJdnUMStFyo2fDddDFechD5sC",
  "key42": "2vjVev42mZbzJTb97bruihxVJZdbFFEGsMtNQiV5iBCvW79rkhNsaTn582XKPgS1UQx23ALqZgwgdj9e6F3ByqfW",
  "key43": "2QFuGti7gxXH6oM8f7ULLw8u6HyS7ZMgoGocj3VCfMz9nixDHg9E14Gz6iKNms83c2zCnHYTm6dFsjcrhJHiPF9D",
  "key44": "66DxfP8qC534pxTzv9CcWAo1j9SLkxiXAoKj2Q4rd4JLj8FRqhVZkjnmvzjyr7d89mHckvo6SMUbpyqETnpYrt7C",
  "key45": "44sVivUpJ3iLdQVMgb9vNAF1h5EpUHRn5hEGrU1qj7WfZE6VpjFSTjXBbAotqbjrNjUk6rxh2SpsAFG5cV1FPVqM"
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
