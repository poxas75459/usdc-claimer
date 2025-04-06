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
    "3CRFeXFacJydcJFFXgUHC6qkBdKG8rDUPnd3oMGGgjgqBVit1c9GWnGCiBq2vCBm9SgNcmhq3cjBZML1yiPgTPU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bPU75GFNgqwB4pHwo6BqkuQ9T9tGkK1oaxVM9RBHxTZXHakSuysYUwraZWyW3uV6XW5MgYVFNHEgig7JUK89djH",
  "key1": "3XWGTotvvjuoM8uNDhoa5wSxhcYi1MknLPcmzTMy7pKxB9Zc6LnVftK7ajY7AHCDLHtZMoAvC1xMFCzekCKyYE7E",
  "key2": "2qvJwsgCrs7qrw6yGPneJ3VPpV2AjStQQrXryp637yRPvNrZhBS1L9WqmDutL85gAP9MaLvfT2u4iJ1GPYZv6dXt",
  "key3": "M4ohhWifv2g9rrsbW7ZWJAZgkMB5CqD4rxE4GgJ1UFyoYQLQfrqLD2jedwp3amv3fVgPTJvAeZjDbFFqcTnspgn",
  "key4": "3c3vKeFssmEjSRakA2cqtxTEdcW6FebyT24ThqpzM4s89LwTgaHHXRSAo1mjmxpSJMsfhDvHNKLTvHixiDbdqHw5",
  "key5": "jNw19HxZP2QTg4vv1iddQuX96cC83KeRbrMBeKubaZzw7tLR1yq8iavExWzTW8BXm9ZesDjXtM4hYG9GJwU8AuF",
  "key6": "2GYFqHByFEqxFoPa27QmgkDXwhVfwKaHJLi7Hqw3EKG7RWKRtfiDfpabuuk6VXGywdtYCEpnCc2q6euH2tMg2A6b",
  "key7": "bQ9DgeHZhKwBQwi7M5nArWsyFHSgCT2R1A94wpdxWEGeSVXbQ8GnQpv2vt4DCWoaYF4jG1EkKYQptGzHYfN1NEv",
  "key8": "5dZsxEoUfL19Znxb7gocZCMu7QH89ZNDC8ktDgU4KPWZadp6B3VSD3pQBNU5JACStRDZM3ksdDE3TdT8HqQaFxgs",
  "key9": "2TB9v7HvFMvqLKjuDNq4vGpy7PTF3DbPrX91vtTL29wH2CVVtWeAXEgsLZHBng8JtBgfAfGa9T1UiT657W54GZWR",
  "key10": "53MtNyKDhQm84kfdVQqfbkCXDApjZPpkMUxnk1nBq4fSPjAhon5ESoZsRBxwhiPpHbmbHg5Te4Z1eWYZudLs7jhG",
  "key11": "3ZHBo7dpJhw4PRPsxy6F5NHpti9yknLi8K4EWxKae9eDNjVMrUxyz9ACfmunq6VCJTQhNpj9S78NLEwF6WgwCBYW",
  "key12": "uksfKtrPK2QvJbmxEDKHCj4mWT1SLFcE7L6VW3tqtHTDEbWJ2SC4aknwyFYs5RgtdTyvV3tg73wSWpJj1HMT9V4",
  "key13": "2ietQSUUVc6czdiS6X8BtMfiBnNddELtLPUrK1QLZN4YQRqBx1nuZzxhAAhhmJWb86M5VdbBixPZE31MLc6qoCii",
  "key14": "4krawx1KrRaQWxMERba8ZAPtSZBytDZQWAU4KT6gQHvLnbG9VQuYzZeRmc9GxdrLCKqHgrC7HDuL2h5kZZVPSifo",
  "key15": "thqiKKREMUxzNVbyhwC9RUHWZoyC9Pt8aeFL23y54DDriJD1mfmFGRg2ZiDigJBMTJvCGMypQUbngxEseLeA4Jo",
  "key16": "45KQfzv4FkXL3r9i5UqCQwtrfnTA9Bg5m9MEhkeJcBBNnXkdxkdWijY3MiLYsVubHjddG2sWLMJPomxTgjACddtr",
  "key17": "5BvkRNoNnGAykAGcQ2vowfUt2pTumGipwnfRXGYgWcf1tNQS264R7pVGspzroTP1n4wcCpg8gJZ7oJM2qxsvEVhD",
  "key18": "2R4MAntQ5qv1tZ69h8FkhXGszf7MYv6xgfYyxc7hyBsdL6pmQhLR45ULFcoAwjdHnmMq3eB47erAHzSEcjFtmBY3",
  "key19": "pippv9pPk2zkc8rPKjUxdNrUV5x22f5QGYuLD4mobqrg8toGWxE3zkTAAdZZCByt7TpQk6JWUxmmuxPUv2eARth",
  "key20": "5L3sYZuGaRn3VtMqReQR3KFqoB7YmH9APCx9gtFbAuAgxo3h2ZvCJWkiDbp3SJWTi2P9X5bVDdBCXsDRwikfzv4D",
  "key21": "guEzk5j9ALJJPSuEdoXf6Q2bYT87uYToPmgXrGPnsvZpS1uc2HDi6uQaBUUQXvuN64dbJM38UXZJUDenAghRq77",
  "key22": "21khNv7G39hpB4iKcYsfyswv4JkRZfzf9iDrWMYrBR154hW2e96AoVDZxM9aAFs3dFqEGtTDRjiNoQuo7EzGoero",
  "key23": "48DJwsjAJuf8rqMb91oUbLgVdQHp3bknf8rSuuhuKNQUsfPt2B6f2A8jYfVjMtR5weUd1BffFN6MrPm85qqjDass",
  "key24": "4VmUgXqNbXnwKPHqd7Gbghmjuso8kCqxtjBqB7h62WT86yyQUaiifhWXV9ifGPwgoojXjBzFcHsdckZj37H32VoU",
  "key25": "5kwk8Jac3TNP7Phvwwb9338pFVhKFUVXb51gPi94BztuxQVfCzYYXgUj2Y9BjKHrEdU4WKQtYu2K9BBv2VCMWabt",
  "key26": "jR643zMtQkXi94BJJUyE2amsi5bcS8HvE78jc2y7jLFRi6vS8XL5RGvLESJrvprpY8mWtEU7CzjdxUK85qwXWoE",
  "key27": "vXfV1V2MN2mC2LyZqTwzJNtjbBgGya2AuKhaM6fA174RV9YBAFVivuCdfhiH1DKKBHQoMA2Q3VcFMCuRxXTVZEg",
  "key28": "2CmBzF1AbwXkBEfmrxYCip7od1VH5YxWccqXgPBXRpjE74xpxsq2nUyE7ZzkssT82ha3JVBnCSYbxxcAXsaVXeAg",
  "key29": "v1yzzhWtTBNeADmTVMxUCCak7efwizBrhLVha92rPh199fVFnvZmnqhWuykkcXf7LaVx54yY86h8LR1S5pHKtbw",
  "key30": "5MF5bm74xiTQmPpDtfWsLXJjyVaqJEW7JQN9UvcYY314VNR6dspJiiz4kyt4jvyANv5LEtTruguckUJRS5TGDtS3",
  "key31": "V93PDFW8bZA8ZTMiTePTUraGfiY5Dz9LsfGCpctNCKDatMrco61fn1abPPEqiNJ3UJpRCpZEEhCjWneYYYy95s2",
  "key32": "5UShXMXku9G6oEf2cTGt8Dyc1Z2bxwtfUAmLAzSdDWsMUNkSAVGzDtFLQHc7Lu2g3GosZMFexA6KUQBizWk532Z1",
  "key33": "2ySLjsH6ken21ptWVhtNFvqH4yY5j1iGuSnomeMnpxhz2ckWuPmDfBG4MWTfqwNFnWN2TCezk95dRoLfDfF1Ax31",
  "key34": "5mM4zEiwZibXhD11UubwVZMTqwXo5xLiLTwLSpck6vqTu6PrxD1E2Lsdrx8u7G1md1BEVa2LxLG4wA4iZCMUnRXG",
  "key35": "4tcQHFJesF7RSZXwtWbTLqDHZ6jpX3XA8DuEEiBZWmes1ED6fpZ3phueDwaiuaxhAiuCvpoxfczvCjKTknGJHMPT",
  "key36": "2d37FZFf5Xa2wxJPeHGZXKnCHyNYHBCP6Q6PTAy5sFGa8JEXCfbZWdkVazwBov2ZUQm6PokEGeb59ahipxpMh3gm"
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
