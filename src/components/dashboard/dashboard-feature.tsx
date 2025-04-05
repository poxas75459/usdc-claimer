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
    "5hYXcE8BrukVYkCXqyExWJfaWF8jUdGLxaHzFLNTpJSv8Nef1mWW2hzhFHmsTKCazWrVYxADELGDPkZ86oifxPfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjRm8u9DbzMGHCwv7m8k8V1nLnk2TqyaoWkNW63cVJgX7Y34iXMvVCCsuLYL4j6iryzksq2s7LN97inX86mDpyc",
  "key1": "59RLCM5y6bQ1uFqHpFkGZea3uDjjpuzWGPNWvdRCWpncg3XbTbX4N2QegSD3mrXZoCpcEksD3MK2Mrez8e1XwdmX",
  "key2": "oeKJfhTXXFgA1SY4aKAh5DquUQy3LiFsmu2MFyZ68Dyh3KSd5AGBmVECFptH92goH4DboDEsP5z6Muq8FDPSu45",
  "key3": "yo281TZeWwcJ2KUKPYJynHsiZ1tPD9w1SNpZpZEQvmNCYGTi2y8cVW416bWuc1HP8DWMvvuW3Yi2V4hihKtS4rH",
  "key4": "5mvUFH3puQHNpMuP8dsQ3Pxct8qQ5bi2DUeS6YSkWJ9FrcZUjAbiDKCKi2NjhzmK8tWAoyKrFGvyTdzezZgP1qym",
  "key5": "3iSfEFxGYEecDXni3cW7AswqkyQDKXEWXyzaoNn8wb63U8XE1kqA2XRi55ZiCF2FW2yehfHiWMPWdDE7QnJwvbPf",
  "key6": "4AZJHzHWkefAzvHJ8RduWQzYLBvz9pY6WxtfiqfC8MmDAsU8awQi78gS9TuFrG3kKppgLF9RzXVf2VRBuUbwJJp2",
  "key7": "5FYZ2TyAxtdsimuujLgGQ2u7usTLwnbGrzEJTP4L2YTZNckezW7J7h3SMTqwaRvL7QABW7npALLGELEgWppNPr2W",
  "key8": "5t215Dx1DLsRKpty9HqQmnAiW6nErMmU9UbZnqZ4r6L1f6vPvYH2EnXMRVscDNadcqM2L5FimT7XBQmZZBx3ssLW",
  "key9": "4eaRKooexRFHwEG9YfZhMz1rv97K27g3NxXpdMbeJSJ3vRbXfaQRd6LdkXuW2LgVTvV2EE2TT98MrarHduv1wdCi",
  "key10": "4tp8xoxt4wzM5vLRpLGyGgjTquiyh1CWjkNVck14eujDaNuyYfQLQSsL16hX8K92UV4Jmsgb9YgAex9Jgpx9bbgr",
  "key11": "3H33rryqXxKSgixeRDLzYKv9QHNSoBZEEfz5bRVH7KE9dXuVjZL7iXuRm4kXC3Lfr6BYhYZNnzUadQm4u7G1pmaN",
  "key12": "5gABi62KoZoycHfmQyctN4tVFXuzBawNHDfyoLg1zt7BmJdnw9jrcEuHmjdAb53gYqDzg1tbHvYwonXzW8giUWuy",
  "key13": "dacxCtMcmwcDPXB5qsUZXDauQV3VzHADgY1Mw21sNL9Qgyxb6RLRj5MQyXNJ2jkceBNSeLSqisnBF87WdXSRCqo",
  "key14": "24CffxrEuoGoYNq67dEtXmjLR8Ar9933rhAX4ddXcfee5JFunb1sfWDxgYDSjWpFQCUSLgTuoYBNfKXijRvuae86",
  "key15": "4W9zjaDEMzQzgb4cdHPkLbWQLp3cygZiUTabmJDQY37eoagb3bjyhviZ6S7UPJykeKiWxtpfHWNkhZpFp6EAwSnD",
  "key16": "4offsuHEhs8NVApWMpN71LapjoXFEtGaFqMEqosyjpUAwKm2UGVwYZ8EozUVGqgsgmowE7GqfTxgBCyq22KAZTHP",
  "key17": "5gGhhb9FpjRRHWjd6QFLeqZPi9LTF3TRwGtjeTVxmQSbcFm6sQAg97DA2DqJU7Mob7JX6RyzvoTuqeHhav412DD8",
  "key18": "4DufAhbsvSaLuiwsaxbbUmCz1oA6qY3SMmfXGuBNFtY5n5XPvMN8yLbckT7xpsHEituXmVrqjqixVtNgB7bhh9uE",
  "key19": "7YxdJ9h7AJHF3VNSufYDZQYN3jaKzHSvCgF8BRREonhXXoyh2buggJntbm1C3WddKGDTKfA6ioK1YsifW4GRWtR",
  "key20": "6wasA8rndWK2WGj2TeMZZGX5qpMJTiYoF7bzxRvvYTjsMuKWHfQbNZY8auyZXnaEQpVM1X8dF8z4n4wjE3hhfB2",
  "key21": "4u1iSkWqQHiLUdjMFdLcXqqxWxQdpL3Hsk2LzcJX6APcAUnV2CWs5Qjyyq8JGAZdSrZkSft6Hd4wkUCDEmCp7ajs",
  "key22": "eqKToBb1pv9fzYqA9LF4e5HwcHJWxCwJbeTaZkWMtu6M6LJYzY5M8xP1zr8EPTzWv2JVmpCzMaFb1vQhtYUm8xT",
  "key23": "EJyxyYuuHWjXFxWC18BvWSqedN4ATFXjuAtEMRymQRj1kSbAfQkgFKBAHhKpZjotaQGjWbiBCKZ7PEM7U6zVtcZ",
  "key24": "5U7q33oCqZaKJ7cFcxQTSrchJUDUDGtEHDxveLFBKBbewE9WhEpFVSoMGXMtRREV4fpSw5JbZVzpa19DBZ18cije",
  "key25": "GLeznqVHrK8m12sjxRMyVHtsk5mnRuZS8DnB9AVgwy7EtVSyuqbSeDAjimJsaRR994V7EL4ktRSQHVbQ9n1RmCw",
  "key26": "4sWtdrmfbpHQXvidJbTgvF54PHFNyWVogFhj7anLMeUPqWBfsExRP1yDSthHWpNpd8f5UdazMtEZWpf157kxusuL",
  "key27": "5CfA9D4QSESe6z6cc9QiSFPuqt3bLJtDbto3x3qCCM8zR141g78PhXQbPJk8E4w35QBqCU5bGv79nB26oYAENq5U"
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
