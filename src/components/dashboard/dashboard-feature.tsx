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
    "2FkD5EQY7Hw4fuKGf3ZuFXV2UrSDAEPXHoNbk1vqtrEo1b2PS3s5GWRFpfDtbVsoeNru6N5kcuE56e3g6kC5AKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zV1F4TtJGZhkHJK5rjj7RgqfdA29ZG4reGVmDFdnvgfinAquAAQr62QedkR4Vjo3eqUBBfb4j7p8Pxzp9Hxpg22",
  "key1": "2zY8jpZkW21Zb7yvLtGW2obo6gh6ggtskbGabsxbAqaXysCiQ4X9jWp3n5EB6YMEyWgMFuJSvSZQQYnPaAzHZuny",
  "key2": "5eTUFoYhf3Q9p6tspYPy8hFuoBPkhrnfhahhiGar5tjedRqztm4xjghtjUBgV5psaqxbShPSSzn7opuu8KUqUFNh",
  "key3": "35YrGoymmpmk8JqXqQTNrXPKbPWKRYBzfj1NTip4HrWMwf647fXeEd9ser2ThUFSz6o6q9dHgqF7ar4ANXH2dpis",
  "key4": "2c2XKqiQVcMxVXXC3t71RUBaMj9zzDao6mvVVHDvD9ygzyBPGRkuwYrgDkgKT7wYJSxhMfutW4NYJMi6iMYjmsbg",
  "key5": "uJLC8FVeSXPHF4jGSxKVSWVbUgnUiwWsoWnc3nNVxGvnaTewGxWf9KJAdbCcmWteCAM1yaLYUaZaJc8aD8syEgA",
  "key6": "2Y3EoCiHz16irBTie8JUYy41unJv3ets7tSKxHTzrpeiCrucA5Jms3AiN2cuwKfkdY2ibYGaPuWdmRMRP2kiGhx2",
  "key7": "3qfY9bnA3kB982CqohCdSemywnehGbTGwzX47HJ3TaqrpjQdeC1v2idAix2UJ1zoUb51r4FbGfYs7ScWKjn9ims6",
  "key8": "bhBWebnP7szj5y7g8tSgsaViV8U8eEV7Der4JfwrDGYVEq8X7xCxnwstnRsN78e9tGjKDpn8P7g5dvSqt9revFa",
  "key9": "xAFsCMBnJ1kq9FK6i6iki6Cmb2DGF9GhtEVgxWsf4d4HbPuVvRvzeNEnQnk66pj52vvEow5LBgVKBGCmYYSjRSL",
  "key10": "gTc7Axnd3TP4jaMMwADBLcfBNj4uXiUfYAyNKtFB3VNFUNQ99oXYcKCYw5jGFUGcNaptQRaEbQyomuedtwcGwm6",
  "key11": "5v4rzTagTZBJwUHXRuNHMN7BbWVtacV4RvPfynKTkSasYotiGQSwgi15j6CcpV3H2h5hvKXH2eDDdrUh59baKkW",
  "key12": "5ALvdK2CMvNovdVKxTRWaVvhrKZdi4fcD3xpKrTBnEvLLseHT1PbGBtsaRiTs2tm5jFkx8uoKUbaRaMtrBrGoN22",
  "key13": "3tXCZS1X9tTgPjCCHbhuzvCUHDeVpr1g1GFKJLnAMuzuwQNdYESsXZJgQxQv4mw96c2bKGQ2yigTmbsw1f56eKrq",
  "key14": "3PkfCzQMiYhRwpcXcJAVZUjGkCt9sYGD4jZ2yGDsGYdp9tT3s2EPz8kzonebLbtv39X4egntnnwMq66xCEZtq3q8",
  "key15": "2s8XpQZx4de3xxmrdgZErQxKDbxPvrC8Wt6dpPvs3UgU8uD4QkFcofW38sEmq4vHUhqX2BoxMwmV1C13KAwatFQP",
  "key16": "5Unn1ndh4DLbyHTSk21L17yvw8sirPat9exeUBA7kKA1B35AnyGDkTxtcMctKaJZvhSpEo6SX84WG7qP5fywxP5Q",
  "key17": "wuaCWiKjGoXwWHeYD8aawKceJSwrSWuKKUXWBUxptUa6grEib15nM9YE8yXy7yea9AWEQr7yj9Bb39vARvY8Mjj",
  "key18": "XpybuDGohvA2kACGWW2HGX5r9xDQ7PwSD5gxLPdZPsSNF79r8LTvcFfU2GdCWVXzaYAsFXPaiPEwKFrSGD69Afu",
  "key19": "36CGwckryrUEPmrSW72MX9yDLUQMYMKNsfQPnK6iDfv5WpoDJTfa4mLepJBW5tGLp3gkPjwd1b4MFSMa3aK1fwiA",
  "key20": "QhjDHG6q4hMQfKzfh8XnCCggMFV2NW7MySucu791GhFUUKRkuqBLxe1ja8gvjddVnNsD69FN581aZGX9oYhEpsL",
  "key21": "2MQySVbZLTQb7hceW1UYEWyEJ5cqqyqCS4uUH42dsSpYZEHNs2YXwnb2QP5LrqRwHHachf4AxHx1r2omDrAJUMZ",
  "key22": "4XTCJNBZ3qWQ5Dnqxd5Qok2wyqAv3s7Q3EiRjq7CWhgcJw6K888QRcFAvfANywYBFcEWpn8hEyCa9KHq2qaTBK1D",
  "key23": "ZWv1Hpqb33PDpsvEDdjYPAHgvbfXXePLEzCHD7Ju7y4orJ42774NYnMcoUvFzEDo4LTTxmLXYf3jgLdHRu9rgqh",
  "key24": "5cJYc15767X6a1erp3bzmoCmuptnn57XBoS3tybnK2Gn2FyHFPtVRaeN4actQdEGo9E2Hf7cjXGWENP4JJmWwrUQ",
  "key25": "5zwdyBcUaF4DmV5bwGYJKk6zRr7rn7rYZ1s425GwzGvs7PB5BScuhAsSc8y1aPbhY48iKBqeLra5VNcvBJht8TZh",
  "key26": "2UdCKifzGA8SDxBUwmCpq43Zj9rWua1VKp8MM4BZM4zMwHaXDZKgs2FEyQxQ5axxfV4sYpSWpBua2HEdVJBqg7h1",
  "key27": "2bcLangNVuMkXvXHTffUKHjA6b14Rvwig5Tx3LTCDdVBKPcwwZ4LK6ktmRsPqhiKoqpxBgTYAoQhS1oVYtX3guuQ",
  "key28": "4qEpLRozHtrLAqe9zNjhUDfjSAD5R7XMJpqUPkcmib43YuCAvQ59jZ9kUBJ8Uw6HzxBWaFkKg1cj2KFvCzW8oMaG",
  "key29": "uSrGvj81xebaghZBVwQ4jxV2ZkYSVE8fTc8v1qxmaX4yKNTTNHVkRBKGCw5KKiNwUHu7xnxtAPhfVAnLrVrsdHQ",
  "key30": "4Pj3oCXupGBoPegdkMwtkALFQCr5P1b1Ro9Zpq4XgGo3yzZaWLyBvnpneAG1naGr6gkUxBRutq5hLaAQD6vUa4P2",
  "key31": "2M6TGGEHXfiLnfnZDiXqMM3YhGmqtEgSv5vRHaJBSKusWigSvj7wVWhbRfzW1PDZ7wAjyFUbWRhu7STtZGcvYHPt",
  "key32": "3tm1UDX5aVYdoDLxu4HyTsok4iTXdAjTUR6m58HXgE3eynbujFF4n8Q4oFmbRjLwC6hvRsznPNeqiMMbQbWEzvLU",
  "key33": "3NKcCBQCVCQPLvV7inkHk5sCuKgzNRRodaDcpsfqZnFinpdtWioxudFxrav7tsR8i1RJuNSWjBY3WLLpr4VGodBi",
  "key34": "4Hvrw6LZad3mBUfS6VhVdgPRycksBXaHAwA8h9mioxniyFJL1pX1RBvwiVcPv8LtCJ7TWSfWUsgpHzKj3wNmWf1e",
  "key35": "5zjLhxQ9w2n6Hz8RVV8uiv9C1KYtYSmeQne8UdmVDPbUJNtwgU7vnXAx9dZrkc47aCBMsqBPjEWADXX3xnJE1Bnk",
  "key36": "3nXvGZNwhAcUvmLtYvxxEGE24YtHgBUvPRDEdpcqNUtYgV5CaGLkNtjHbR1ZRiSemC5UJZ6exzHSMQBdh7A1MK4o",
  "key37": "3fRB2sjci6dRAeQQvCf6LEL9FZNDnjJ9cC3Fwh2PmwChjk8sp99fbPibTDfVsXKc5b3c6jWUVWbY9SduRb9enH6g",
  "key38": "NxuBXrqmXCj7oHfJvMDW46eybtk8xaZNsSmdL3EtduMWc3FBH7YFxVr78tLMayMRrDsegL1AjdmDq9MsSxc2ZWH"
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
