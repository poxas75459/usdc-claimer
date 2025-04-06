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
    "5Snm7Ldj31QKiRskYnDWD9VE1otZWUm9xLZtQqirrfzW5xpnTUbVbB1aDN9BW79HYyw12xNzdmnmEBByUTpH35vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23LCQZyStnma526FwWNKuYkKtccSoUhFZeW2XVdK4iD8M2qYYkUAFaLc5NmvHfYj9s1XncqJ9W2AkcMhbaqxZqLr",
  "key1": "5cLToDYP8HTUm41VpuPiBHUphStv6TDMqQ1evAGcsqLoovGRRks1SdVaMUBJyLxJdJqQDgCC34Qp1Gt6P3JBQDpW",
  "key2": "2e7ZDSdbrjpuiLsFUg1UmBSFCKjGyLaFuRLXRm62svzmPV7xzZGi29MfHEuchVRrJ7Um53QftEShfyxCVuxDhBL5",
  "key3": "DorXZKQyPraLG5LfqX4PxpBchvhWeKKEH6PNqENs1KvKMiBYWkrhMGtRFwC1WeEsYMCaidpwqKTvFFa93iEAk53",
  "key4": "2NM5MebDYoJcafKL2mMkzdGSE6DjBxURbNBzas3qyvTSkHAAGbEazm7ud1kDQAphYspunHkGycUXEQPAna1Giw9g",
  "key5": "4we68b59WPxPdm1h8QZmBkpcANXmfBWNa1igggW8B4jYfuUffA7oLYxddoDRdw1JyvhVE7GWVfhjSv97pt8dmQvA",
  "key6": "2Smr1sKWihc9QiUovsMJjytn5AsX11DxXDeFRDJGTzwUnbcCT1AqKxwMvmUkUv3Gbj9NoX573WsCp4q4GQrSiJcY",
  "key7": "53hcYuAfV2vR2nEP32sAYXA5XaApsybHKxkykYbBdREXJpdsMgVehNakQaYNX46kR2rCXyzaGgMsXqjJwuTXQXZN",
  "key8": "5ecbDB4RumdkurTPJdMLTbM9YFV5zomHePnwXx38bbjFDkPEkuqxJgrokf5zT2C6nRhLZJ8cKr5f6LjxkmCADvEc",
  "key9": "3PzgUrNivfBmChJcrLkom5vfR3rBzUdcVucmFCk9mdofesgMfD463enm8kgifdmGUUrgPAjfSZjNarLLHSDYrqR6",
  "key10": "4vLh8ax6aogjLmfQY8f8NJ1Vv6FcTyDWh8SWyJMMLztJM2a8XtLaac6RFL99F6JnWc1Wn17C7b3y2t5ZW6ZhZeJz",
  "key11": "3kW4J2v49pzvLihCQTvtKdgV7at9nLQHnsXrkonwjxJFfgicA5iCKhin9fg3yT56XRW1pw8xDNMAsP2rtYPb5AKh",
  "key12": "3yzC6tKx5m1z1zyqU2kXKysiTjBMS3LFidL5wMDXHLLNhUUmvKwfBeAHKSfYsbguiHhcD3Ebagp5r6uDBGAXrddc",
  "key13": "2ocYq8HReFVmUrG5NimkjZYLiFWGpWCGU3FmNykD5GgbLgGT2ERpKFoc2qEq2L7yWqE5U94FDbvoWniuML6DsPQH",
  "key14": "3xgsEd1FDCoCqGfeaayS5fVfFiPDPrDRoRSN6eMLjrEfruu6ATrxaMjkDqXnnaaNNRaM98gWKA2VRL4rUJgsnWSt",
  "key15": "4iH8pKv5xKqi9WXHjQNFLteMgfCAbD9G9u9fvTe113CuWARung6ZRuNnWiAZqG9gH4PZnScWEWLCCXwaf3Tsz8T6",
  "key16": "27CxPeYBK83gJ25AHRMN94WnYvX4CwPCPWgqqrd7xNzkn7FW5noF3rmvu71kmnBeLzv4MY26ZJLNmjmK2rjUMRCR",
  "key17": "iDBbBoADU6nXd7wewPsSct3ypEzfELQTEoTYg3mquPCoaQVXd9SGcoXkz2rFEryM3PAumEMCUutF4BNxHK984d8",
  "key18": "Qap7LeYQnPcAezJZVwYnxPPEguvsm5TQTde68D3nQVt9Tc2sdjhBmUEj38y5ZRVtvtqeXazcbb6GZgsp8rKmMJE",
  "key19": "3thFZ8MVbwZi4V3DVoSAzMKDcud7qK3t64nSZJ1c65UtdZSj7yiRGKnGJSz8oUZDxn1vJL1Nx7gdA3scHwd48Uyc",
  "key20": "4y1v8hTsGVJU14ewWCh53KHECCwZpbcgZQ48jta3HJTxUMF3GeSgbELi4gP4vHgBj18gEtGzgQxTKttP8T3RHhmx",
  "key21": "4fUosuh6W8caN2hFAppPTdeBckvVDXDrzvXxLLbU65iQRUBgmLWtTBHBiRdma1BPt1CWe8XNgBTDAA7dKbphfDJx",
  "key22": "3JMsinD69Ux7W51xPADDx5W4uMZXtSJxPdjtC5JHbsFftW7r2scXt2qziz5vKuQrbAFwbJQ1CNrzSnXpW4ExS6A8",
  "key23": "54pT1g6FS4bLYAV1wieRKoAmgTMdZTg1nnYb2Nucg5jELs4UEoiAEatEYmByYk28D3CdiJ6bst4E5T8RiApGr6Ya",
  "key24": "3g6ztYqDQjhbmgiSer3TRDD5SHr9S3sqqb53wA8NYqWnP7fY6tovMvRaLDHnhP6w5yUcoZymiGCNa8X31EGWuTan",
  "key25": "4C84QU2eEb2NkSajDDmHEtEsHfRWNrCdc8Cjuf9VEfCbadiCTTCvYvnBh3qzgPYYWevF5RjqoBKRFHVjdQUpbi2g",
  "key26": "3G64kRce9wjD1VK1aTHRCpCB3SvDmT3PHjTaV1kfaPWTnPMo5im6PhuGC85dgejyxRzKSFbV2vRupX9FyJA4xcdN",
  "key27": "P7YEbYUbWn5B5gZpNRPH8yCrgZW2K1M9KsX5S5jbN4MeYK5hSAz5mGDk5SAryXvzUsTk2Hus2BPqsTJCDVvZQWF",
  "key28": "3WcLT8Cpm5a2LWWvGQp5wzyNwBpuoDK88ogc9bLbVuj7kvJEvjTUcdtskYq4hpat9gr9eXAhv9UvNA3ZsKMVApmA",
  "key29": "4j4PhyBMVXd66vbpKoBZbLasMPbG5tgBoumztKELM4CNQaeGFqskQJ4QtRvp7K8zeVVJyJFUqJeWv44T4quozoL",
  "key30": "5TQ8qLWEGD5L1qeRDU8vturTB8oFSQN9y4uM9bmhmzmsA3wmvM6A5im6xLfakuz86mEjkPCDTowgLxKHsbZ1HXg4",
  "key31": "5SGHtoC6Yyc9bp6JFHVjdbZxhLGMtDyLMRhqtWL1oZtedPXmfuJdPcDFPTE6FDqAXVZt3ntaDnU86YZ4TCMvv8w6",
  "key32": "5QJJdYsYuDjxedn7nHC5WRpErEUogVQ26JTDCAhiyrvFWTa2j3zXFbUbXKLpaorAeSEeaJR1Xjy4hoZAU2TQcXDN",
  "key33": "5nwVeHpxZ9Wbp8DV2fGNkxEQUv3Dv5YpVmdgFt4HdGaYobDCyq4r5ebGzyoJ2kjfaPoiU7bGAfgKR32LFtSQvCrb",
  "key34": "Q7F971L9LidfWeqDGrwRpnqoFgTAm8Qgdf96RpQrasX93cXUdZ61rSNkngMQXjrNDW3iJZ6smUH2cf6ZrEVRUug",
  "key35": "ZGTPPd5xmd6v3PzepqSZdq5crVgJ1aAAHBDkpKANECFLAEsvrqmftULba4PKgrUgVxzfZGqsoH9BAWAWfG5fM7H",
  "key36": "5T7BANNx5F2PoEdiJuNhmKW3W3BJsUkMD4vxyxPov1VKYH96WHJWqh39rdw4FZFC57e763LvZbn4GeEo641eh2nR",
  "key37": "67peUq4ThsSjRVC7J9ZnRAuW2oHQMunEbUiF2eD3XpFN9tiukZ7r3eLDSpX61jCAzQkZGhEiDDjMsm3aFBC6FDWp",
  "key38": "2mJNxuQscVwYqYmQubC1kaAyorXsokkESHmySHDMo6GJ32w5v117uak4Ywt5G5VsMKwsS3pXgCgZyGzB5YvtBWRr",
  "key39": "3v2EgjfFKbGsPXddqS3JnCZCaHTyYoWPHz6J28sWZVrLBCKy8KMJvEY7aqV2rnevg7ZvSNmHJKvvix7jkqRbLaHz",
  "key40": "4HisjstbrfevjG595wEw9YVANVJtWnBnzZQYQh9T3srzundooo6ntuWhcz1LbzW48QAXeKcyYgDXQ9Y1jis1c2iu",
  "key41": "3MwdnExVcmR6vRqHaHngUjVr3Smw1vnGGW6QpT5ycinU2kNb8ju2wFKRShS3hgMBK43x6cYfTgj52Egegqq5scoA",
  "key42": "4Z1ijEuztmBVdqW4UwcvQcMrXLT2CtLfX6DERVYa5D4VsUhD8qwATBjA4TdwfMUzzxk9dBdkP8dkvwtffMTYeeUP",
  "key43": "22ZY7Teh6H3ZVZRaPe2GasJLiafdtvALxpseSU5PV3fwYe5JgMKYExDYDtE6hn5EVjrMjZiNWVuYMSUmshpsAFJX",
  "key44": "62LRtMe6sFM32mkChUnbsCcnd6bvZfqUheG7NEaFWWrTsy3kKo192e8uf31EwEKgdq44nuzRcJWZJ25uxB7tAki9",
  "key45": "2NFWp3KqZZCPaFVtALzZtaGGjZGE16ENLGKkSMy6Wo2drQdufpCgTVk8j3GUTdkYvqLEGgVRxzrRUrXtBxnagQ9C"
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
