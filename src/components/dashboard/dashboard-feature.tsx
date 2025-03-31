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
    "5vMzmzDTgPW18MsmFbANxDUrihSx9TpVYeBMYvFQWq3CUjt68t9npS3qUjGCsEd9ix42dNZ9bG1giyvCHaEc4syq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wyemFokc9kHwedKdT8zonnTAkv6oJUzgrRC5o2MbHqkBTF1i97tdAxMSTsLuuygHgGdYW1nccm293NChfrSnLFy",
  "key1": "4xfk6BY4Q6t9HBDujzXNxFRzRGGGcVc7djKPf1WEutc1mt8WnTh7UXk1DWaoU767Sx8vpxKFRXkVW8kS9oFaNsJr",
  "key2": "34vVdCsUmNQehFNKRBXLdL1UbwtGTJkKuMpQhJD12E7gj15hWt6hdJBpQKw47CVqhsRYmt4BSQykY1p2DfaWZLci",
  "key3": "urFkFU2ixQMM6eDVobgPYzjx4VfeaGQUjjD4GGeeAjse3NiCB4gYWHiQFdCC2TbbSfumZJXgnrm99MTNfEPUg86",
  "key4": "4Dh51Yqtyud7Z8wn6jz6zFF5tTcXekMfW4uQhEZ1Nc7uPwZwkYSix6mmQRW9fnwR2ayKFFzwno85NLrCxx873Foc",
  "key5": "44r9PUpyfLfwjGVidXMZDmBuPdnnCmss64SYQ4BNRFof113zi21swnvthE8SsSZGk5isoKxBYeYWpN54mhKDUEUH",
  "key6": "5jmdNtngHPEFMjhVzAdiVfvvLgoHRTkpZq6hTkS3Ya3et7v2B7HJmaKzEyypXjHaNQ7FzU1WBmx8zyEUBF896sRD",
  "key7": "2XnFPS5zAeYJMq1sDyY5kBGoFunVVEoWBBGRj824j2c4fgVKrkfokt451GT8EmyJXiFU1w73C4ArYb6kXJgPno4u",
  "key8": "3JAq5chkLJDMHFT4EHZrq21YiowebV7VcGuoCsXhDrT9NAA1hbpRTuRnYpZ64CqgRRF9Fv4Yrky4C6HBfgBYNXHJ",
  "key9": "61bmATKcifU6zzxYjk99KfQ9hutN976FYMNvoHsCMucCH2v9984KKEAuf1MUbTBNRsTLzj1nvX2mzTu35tEyHt8R",
  "key10": "4s4AnA1Xz38h1zhxb9MQGgSLWCzkVtSSmHnnfrbpJeVtQuem1gpBxV9N39yB6XR1ZHveTVkPZoNXn1xXoD8wLHxu",
  "key11": "5AaDnHqgFCypJwfVFMiMkDhszqZjdqiUMgqdBgC3nnoDJAqUXsncbtBWGG2Cs5KoZTMgiERSdttMv7bU1jG8UW1Y",
  "key12": "4ELK8NV2NERjQC9TyzyvxpURt5AM7wtSjQ5CU9Fq7bjp1jKPvD8g7jT347KJMAcc38zjgQPgFBaETvPZiKKfHJrE",
  "key13": "29NMMJtCATs8cDj3xYayT5D1igDunQZF2axX8UyJr9tNNZHnjY64WLWF1fv26SNLvECwhAL7DobEWTrsgqZdm5ZJ",
  "key14": "HkGfBgBwvP6iFKSjxvoJbMpfUukoPtbHpc4gEJjmAoAZhVzbVQ714hUYcfCDFqjFDScGmSCbnPE5fdCbVb7Mz15",
  "key15": "4yYBfRNVhJZ3rRmsn3dTqdHhu2Yhgm1Nyu32qkkBTQxvHTythpd4NQN1mJXbvMSj9R1d5xWuGgMEj1xzP9ZntcJ6",
  "key16": "38C4ripFXw17Jp3xNGX17dC3oqBiiawNSDEHSPGmTzLEyAtNHH4MegG2EeTyVhZNvESzd7e8Uf3LsvnfRmW21jdh",
  "key17": "2mXayZHULW82nTzrKGWpMmhaRvNoCPtpx7oGqCaHV7JqA2ab71YoiCfdjqGD6bJ5TStaGcxy2gYLrQUzVRpNGZGq",
  "key18": "4FFCD8B8TJXe1Hfn6vPHABjADuceHPMzW7BNe9dY8iNAtDy4cTT7gH4is5o9su8V8JPc4fdm1gVfYhCDakEuy2Qe",
  "key19": "33AE5de1D3Xa6PRGbRRDUAHjm4wXWUgAxTaKcveamtZN7EMTPiH6ULAJXDcSHXCAHmWTjn72DQvenH7dqzxrHGtB",
  "key20": "5Go89tBCisU9VuSyxdMxA1V5ZuXYxUB4CYGcUynxUbCRE5m6oLsRk4PHmJrkxKfoi8HmivzHHqLnNftw2rYi3nQx",
  "key21": "2dNku73YysP4HT87pkTAuWJq9gC9DFK7RTVhY641EbE3Vt5R7yYCJizwmQsX5ypogffUbQh3E3SS2epuGYGVrWou",
  "key22": "5RyhLLfw6mSpTu8mkSJCSKm7GsCi3aQ9LXXikur51xaABCav6egDRcf9yUSDCKq5VpHzWePogStWnJk24qt39kCv",
  "key23": "4J1w9vWfYB1Z7fJ7PnwzCYmLafPX8CBdaHZW2wuLNLKiyPqNDybAAZcMTduFLbTy8Brqj6GYPkADxPhHKoaWzoMY",
  "key24": "3wUhCw7TWQrqAGdmV7qJVrZUDYPweDRcJiYVMCETrWYc8dmxqB35FoKtwjcY93Y3oxmGnkeQMvZsCsUeqWJBuUnp",
  "key25": "58Zyxk4iV6BbERc6kkRtBzaPErDoE8QZrKcc6xmcm9iRmiD7X7gRh1VFbbQPsCUqQrf6kQiq8U4ytp27ceuEYnBt",
  "key26": "244d9HgLwGimXDYwArUMYPWFePiyzSKx7CN3FsP7KrZBcRYyBqMGCpELdFPhQrWYqNPqRPkGPpJqg5riRf4aLcnJ",
  "key27": "4TmnzBFyVkt1a56x2qE5uvk4f1gRMED1HwpF12f3yxrcAM44wiW4YajSLi69wTze4GswD3Lo9t3tUAoB4nPGEFNA",
  "key28": "3eFtTEBD2fnErdkGNGPN7nmXVUBqSuGDcWkuj51wWX2ZBw1TNu2b1F7AJFmQRnqFsxbLxQyiCGWMyzahG7AM4ZgZ",
  "key29": "5P8vhjSwz6q7PDtJhRq4VWZahjFpXGs6TgTYKSMBMBQbAPYiDGizrWn8hA5k7b9sVZA5rc1eq28cLHz2q2HKduWz",
  "key30": "ccK7j41cUAe7wW9AEBVgpf2PH152So5QMSBRbikMiDiS3MivPbaSQgAZVWQBCH8nn2hnVNaqfvRSHFtPQhYEyKT",
  "key31": "2hwcWa1iGaxNaxW6yrDcWb7t4rUTMUQAPXrfq3GiqxDTDNm1G9Bn5HyPoF4RSsgKtbvkp9FgQS1QiCeKo3m76dEY",
  "key32": "5r25DEQEETBeremx937FcvqjfLtNa7LcE7nUArZULn1oFL8HganXmCUHLXeTVPKBYAF8ZzAag1BQoaYBR1Mef8Zt",
  "key33": "5QrBjRnG6ckgzybXCi97jANnhZeEBWeRUmYUg46kSkp69H6U3jaYAKRbNUNks6u9hf5LsGF3vBB73tBvrDPzMrry"
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
