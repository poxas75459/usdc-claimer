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
    "3GUX7keQyjmouki7hd3xZM8n6MqJ9tzfrhNgWmqGnnt4D5D2N2ux6wwUxnMNpaky1eyUcmYsthtL6vWBKsrLa4mU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYcqoQLzLKS7AFejh3bi6VfWDad8cq7MLDshVc1BXbV2Xy9wr6RMmdx5tPriGtgS593Hug2Y24mo5ETEdbgx2rr",
  "key1": "4XVyeu3EEccNK6HBs84YXnM2BTFoQyUp5um9Z98tUmRDD1hqUkjhdkTNP63RNWocHTHBCLQiaKog3XLknmmgsuZJ",
  "key2": "FJSHSFcHkJT4ZxY5wGgKU74PAkhokaEmipQXRQFA6VZUDtU7vM3d399WHhxvd7WukK7CkT8EEeHpeftYpJ3AdZ1",
  "key3": "4nL449syV6SVb8ycPvzWMXQzsNC7HAG3bnxLpMp6bz5P3XgVcmDyyCqqQpQfGyU2z3qFvgYafKPjV6VJKgHzzrka",
  "key4": "52XzrzcDCP6rfM75opexWYf67MTnZXp8wMyHZZqv151LGsL5Nfc8Zb943R3SfXy5swEDnWF4oHEzuJ5yuXPQT58S",
  "key5": "561Vm2jh6QbpF3fmoEaCB3uVdPjLTFe93GjqPwPFHVRLpkE2XVR4DXz9gApM5Zkvh7arBdxBGDLaBe2i9A7HpZ2i",
  "key6": "5tDxh3p6yjqogtD1eSnLtCr7jWEiqx9kRR7tXLC7jkvT1swMVpKgLiEuxWpjiFh8WMh75T929zuCSwtF7WxNrTQ5",
  "key7": "b7Xbd1GpFiGjgx3DzJrAHzZVvvrmKYz3TNxZMpwPBq4rp35r6Xj3G2Ywfpt2cfgR3N6QxAqCpMHPRHUFz9ReAie",
  "key8": "49vStyrNKimPB4jtYVeFcVgw1zmWMJjkFX8evocewSPMqeXdcUTPX8J6o8aK6yHohm3yrwsXKp9EhywEpqJ7D1Kr",
  "key9": "5iXztzyAVZdySPnjnmm5d3ZxVVKqXPLEQv5Mwu5ubhy5WnK1cYVMF4bY1txCuuT43EVc3Xzy3NP9vzZNrEYuSFxD",
  "key10": "3h1Z23kyi29d11WgxNYjChY5PPeMXnww6Jh9QmXV4NEUW7SuwKNXwxT161RemcYNHe9Wq4MuZfd5a66LwEF1BC4R",
  "key11": "5vjwACnwbU6gYaqkByChjLnLemZd8JUmd25gkbRSYqnFTq3shFk3Coc3X32yuGSKi9JUa5L2TfQBytKwhQ6yvd4q",
  "key12": "3f4Kc8HbR6Y9cWSC3x9qbP132AiVoDtK4Er8YaNLyPBZNf3TrZhh9b5kJZ8aBiPpUu9jEfidVTa91EK7gESx2Rzq",
  "key13": "4rSUSqKznSpPpMMnA1hAiH1GtKesLFYyHhbyNu7J6x3ooRZ3RM9SEy92Se5bYhxbVDFWGw2wNgTTQJyTtQJ7FSQZ",
  "key14": "3aCfurrg6JTHCEa7DbcjTs8GNgQxEY3vDMaxFk8qoKCAy4TwUwVX1SjBVQp7c2TDZVXC7a5PQMHgsy7PS5vYq2Mg",
  "key15": "36QJU3hDub9RyrbEwoZ6FeyRagQzy7Mr6Vwvji3p6vjfYCzFaC8mRSs8etmqYRKy4eBDfYGb9hSmyubkwygjScf4",
  "key16": "5nGj1dzbHqER9rvEmJuVbmqY72BiaeMLg8mvD1TmnkgZPwGiPkiBvgpsvgZitTiDZsaVViJL7fhSxzDDLJU22Kwx",
  "key17": "2sD66YHwSzgbaJAS5XtnfaXc49AXokpgCG2xfPNYY4J1Z7cQaaYhLnDy71igXC4hxxgP7oiunHHEQsr8j7wdEuxa",
  "key18": "527mfwNnesCPRtCr1HVxMcHw7zBjFs4XD9TCpDBnNPCKx2bzx5uNdJX1jicAK9176iBuq7zENQQycbX5yuFs7YCw",
  "key19": "xZFooW91o5TTVTtNwcvGSKZHjfzYkcpipk4vN4GF1x3Ut6QrAeaBnNT5edeYo6eKGseG9wA1s4qsy57PSS7xY8C",
  "key20": "swvGUL6jMiKdaAV7MScMxJdZ9Xxqe1KaKVmMk4f7K8bktt7x6S2Ty4ShDiKozB8ey5BuwKTPvrg618zyiAF8iTS",
  "key21": "4fKywh6Xpvt7jxwsH8sTTJaHWhfoWTQ5UmJqVyZV93Q7A4RzXyWpxmHgLQHFLZABduUUQMLhpf6oP9zTDF6PPWJT",
  "key22": "4TWCJjY6PvSqc8H3xK28wmYhzdgG4VwqpNVLtvjLzwqKdsZjaekYWCg2oPBtaUDfs33LnUPskdfFd26RRxj9DsLS",
  "key23": "2AxWHdusQsaBi3zZZZF5Ak29iWhYvHQNNDzwnPnpeuDYpdoDwGJVcGdXYE2LaevBWG95vEMMGn63jWujNgujtv45",
  "key24": "3yRoK5Cm3G8jY75QaZxVs5GukiFssazCg4MDvRCMtAu8Dj57d9YxafHQmhqzeAT1kYyerb6EDVRDWWfgo7vYsiHQ",
  "key25": "4h9Lbn4xVZ2ktXeLz98GgthKShjqBG4nGVaxjPryHoWQE2EwhiUiygZvz4zdLS33YebPCBZoqjZ8SKqqNKj1Hyd",
  "key26": "4oycv9QxTeGRzfnRQgyQfiHZGqekihexGy6efYkkPRpdtHxX5sC77tkgd1P4cPvazmGf53nVMSqXNuuy9ELUAxqU",
  "key27": "VCLR5hTyooCUEU8ShM3ahuSmtaNXiKxRnui7uLfhQPf7LKw7Y3ujynKD9aGgMcnzk5zRZkpec14eqvmUX7fcHU9",
  "key28": "2pKXRN8LmhPiaUMq5XXqcSVPfrU1ECXSQb15M6Dd7msbZqXHNRPMLPCGryCt5Dnx5Dbjf3DpQvgSTts1vvJ9nFVd",
  "key29": "46S7SJhT1rqA2TC6x1m3Xy69KpkFub2Fg92xX4FESR5d96TMRoYPmFoDtQxS6HjzQrXRwdpGthdU74sVQc4osxCH",
  "key30": "5L1bWJz67qFWaufkqco69QoqS9CXg7CS7uAY4FzWsf99dnbT9h8arYjtWLPi7XpVCkSFz4cYimfr4AmkQxXfvue6",
  "key31": "5K8qBaHgvSyTtBgbbd6bFTCTfyWQ11yi2Bv97EJwxyAJWpV227k9eehdZgVnkzr3MbmT4UDptHwfGuCa1Ro1QywH",
  "key32": "2cgM2397AthSRPeSMmzgJ4Zqm65MytZooCg2cei3uXwW2wZLqifoPSU6vaS6UTBgwjs7poVfRHesSWva1P7oovST"
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
