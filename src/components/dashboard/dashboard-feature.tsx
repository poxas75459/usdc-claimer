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
    "GSZVY7R7oY7yW79LgB6xRmQtudzrmbHX42G4JHy5M8326bTZ2fMXJbXRav5SRA9vQiJ1KCZSPxBK3VjwuTUoPap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mj3sX182YGxHXUT5YPT4ht7eGNByDhr7ZuCitdPzV9iXebPsU2wV5BEHPxBM9raXCddk8xPhj7C9JzRweH16mKT",
  "key1": "4ayNeprWAocz38wqEmrMCRsgxxcQ3KdMfVnMYMR3ndjfxY1Dy45eJrgFoGdvru5SAprgs9cdzPgFFnqmD6AwxEEv",
  "key2": "UiQMB2C2fEmyeFCHGtDmsxJHyJUEswPnGvo1qoVzKueh6HTe58ELbrrfBE9MJYbiJQofxa8Ed1nkdwL81iFnDbE",
  "key3": "4RdRBzjL8r2hB1uHXNVzvKKN8oC4fCfoe2hsiRD4n46ipL4uRGNq4GXQ1mU1gTxxEEBdM8NLyUkmeRHcFDgXSZEm",
  "key4": "211LezkEuKzKaLpG4CqbYc7puSiJaQL6kzh4a3tHP5YXnWVmEniP4gkt2SJRDCLskUGq2Xt5fCKrvfQDRfU32Jpw",
  "key5": "2c67xBdiX33BZs8VHipWDdQxkkZhR8U7MXnVzKeH7qnrK2c4dN6xhMAGAMua1nfMVTNtmePo1CFLrKEKunzTXftS",
  "key6": "5XwGb2quxFa8zFbAXyuWd1rMxKW4F3RSRJRAuitEAfG24KXUZzm751oLCQ1Dc8j7zpwewJHR18czNuK2jxpGgyV6",
  "key7": "5tZ9cukuExhEWSCXVFFyJZeT24RRq9D5CpYLMncU7M7JyJhVekNBT4YH6NnLaYbdy31eboa2mvRC2kGLAMT7sxUu",
  "key8": "oFPZvxy1ipSLG9rTbqc9NKsRXcMUQPiruhGUF8AHLSAmCBiTFMameZYewsmP6eaCkN7Bbp5v5kFWEoLUFPvwgTK",
  "key9": "56DQDACLGKepsnEXLK5sB88kjYFL1CvSubKNKhTTwUZe35D9cPjVqtfgZ8UbnkF5Uic7qkH5N88F2GJYcGyfJmG7",
  "key10": "EixzffLZp2nEh9AcEU7o7DXFthcL6N7nDwTGGVFaNsphNRna8U88bDrinoKvp4d2MK9JDbLKHCd4ai33Fme5uwL",
  "key11": "2TRTbnF3Aare6ufCywaCXcB2qw495dveR2Ls3XSG65xL6myokaMs6UmuSfEi2jX194qQD4wHASAjpSdSZiPvifJ4",
  "key12": "4Hf69wXEfzS2WB2M85P61EdsJbR2MVt6p8Pitoo6gBfdNrmuTQw5WRobW4jhbysnWZzZRKEVBetL8FNaTLedvcWH",
  "key13": "3kKfomKQ66QDUXrjy8pASvvBQSJfZUW3bP4vRYY8HAMknTy24BpDAdUgwbCk47LwrnRMhWv2Yjofo7Mq68SXq1t5",
  "key14": "62XQZc1YgcfgVJpnNtkuTeYnvrJPsCAaWftDN9y1weLsGsi5exLfAJJctDJ6nYs5k5tBmpzcMNTnSGbRmV7SDXqS",
  "key15": "26LX7PeP3f9K2YPSnqC6gSCxtofATrXSwWeicth8cyLmN69rf1fELxALuWtgjcTHXvxgiw7dkERmdsnRnbaEM4Jc",
  "key16": "qG7cGJCCXUvZNDc5dVbDAxrkZunpWor4EoncRrT8a7whDQAB7Pc5Pm1WYcfQEsbgUbrWFmo2f87mmFVmcnTNyCJ",
  "key17": "4EZ9G7k1HnoG43SCoDkefPzkqdWkXysb6S9pxyoeWgc9dt6coGPxF2RcDXaJWfDtLC8pXHe6apJDLGziDBJKzPrh",
  "key18": "3BfrxcFnY9pRY7qcANAJLnKjzGXynZ8kZnDgTNcZRfqKQKmXenp69u3tip1TWq7JGFkYaToVmGYpCvbEVftyCve9",
  "key19": "3aVVnh1tAw9db7dn6ZTfXJuaoDLHxW6ocd9nVVKn1N3Xg2x86u7VRD6GCCoP5og2EYfZSPKcsSdWAFHyBFLxbsWp",
  "key20": "35UX4yWj6m2PzXSA28c6bHkuLj2c5BvxyRJMzVXZf4FKYwqwUpWLudre96sntgJfCRwoWV9rJhNAGd8uvDEYuEeA",
  "key21": "22pEiCxu8o6evmux1G3UaK1WdLRumRBCCBD28VyvPBnbZyEUhoLoVMWs6Gnf2b9QisLDvXVeJaMZ8yNwkGx7BSc3",
  "key22": "uPMcfXHtvsfGCytsa3UkyQMLoiMfWDCLxR6Hzkbtw9eGkcUCXz7BcPTDLW2ymyC31JVQkXRDoyXBqCatG5uPhBC",
  "key23": "5nDCZRv8N7AXEZCyUDyh2D8Ct8KzdeTbHXrLzHDzcgh6xsAF8shgy2x7mDBAdGHVjZ5MK2CJ2VWiwi7GQcs6nuFz",
  "key24": "3NAMmuZQ8oBR7w8Q5YYhMLSHgv91DvwjRyBoRnJXyx1i9fmiK9TgbqaLTopi1JsHrs7dde26i5MQB5177yKqaSkU",
  "key25": "DJoNyjqJgvf3T52BgbqvjhkPuCcrSnLSeUg7Y5wuRoTpc596L6jKrZFoZhBN1sK5TbeVYaXxgVR3Sq4GEVuPzUP",
  "key26": "3XhM8pNFgSjnWMX3vgYKvQihbMvVv1tGPwczz5EnAfK3i7cvWMH7a8VYu7cimXq9fK8MnaGgNQEDhQckGP41YBAj",
  "key27": "3P6qu2eF5diGNrxFw7C2YgH4UeUTme2rKQRrL6hFrY8honGMSufQAAdHGNqrzSx4y3JciYxS321GgcM6ivGskMxf",
  "key28": "5DzjHP5Ao1vajAfMjYQDzfgo2Rs9Do6acGnLR511G4XjimZtKoio52XVrtdNY5jkYJktkNpq7kiwDtA2uFsttmio",
  "key29": "4MxDY2qViwucNapuJu7eaKrN6571KBR2ZTXLaJ51ynXQqreCbjEeRkhX8xyNfqshAG9jKCbAMEoA2cQ2TasdMFdD",
  "key30": "5o2PYVhsBUviF8BDqvA8fcAdDxqxmpvQTud3fkEkjjCcbnRSabNMDNeRiGTq8UfieXbj4xzAdyeZRhJiYCYHngrk",
  "key31": "5Tve52xtp5aTi4PmKjjqzU7LqXB989RUXgTEWtCyz1dGofxrVoBGmEW44TsVVTLcNb7u1d1T8rLzKatGkuxRDJhh",
  "key32": "5q74SXeZVnWQHbo1tfrVXtRkFpcmJhKg2yjsZvNQRP77LDWtivCTqwW6T37hqkWVJSWiFwXqaVyEFHCeEgLgL1wM",
  "key33": "4j9GvJ2S9HuuifPiU4KB5rqs3bcWR4ijPYzSC3wBLq7DiYEziGnHeMPhqFCLjqiDAUMybGn2USzGb67b4MoHGpUy",
  "key34": "39HbBrnu3M1s8xJmm72y1oBx9oubdgsVCUqcTb26fK9YqtL1KN6PuT545wTMsga3Xhs7goAXFMJxntmnXGkTE6Po",
  "key35": "5QY4PunZWm9rAvraoxCz5bsk8GgD2pUUUjFfNewiHX7e9BN7Bz1NZhmQBVYa3iBnoM2QpYJ2aHgfKHuQj66iFS4u",
  "key36": "5mBNbbwqg4SdmAfzxQUDup5Wg72PwaMg8RMM6sni26S5jmPRN36vj7L52cr1t2RRCxtZj9rymrNkTLZ4tCKbY86m",
  "key37": "5Bv1J7uaCfUuhL1fryKscSj6KBnfZ3XSqVG1yi4BHNu6VwmZ7agTdpef9N6172FyPynLX7LmB353DdeZqT8ecQtM",
  "key38": "745NyLxjsrZapBunFK4brWRzufr3vWws7XqpFy2uRAxHaNmWXMCXVFUyyKSqzDruK9DeFeFQX6KJctREcVz1YFT",
  "key39": "4pi7xicELQJe3JHsxrrs6ZYkj2YVYX3a5fvnwrcusCa1ofJFv5sRDGWLdVxi1CQYmWecABVF2AmcyCEGhygbEmyz",
  "key40": "2XRSrbw9JHGJUXK1awjgf9WdFwwwwwq7xXr3vKY9iL7Xnn5gvCtFoj3wMJgJ6DqNnrZ4F6aFgoEW2uL2wpkiLfZm",
  "key41": "5TiMWrmG28CLuMUgcaC4FdgC6WWqScy9ZjTixbErnjYjkCEFnRs3A6NM6K9o9xrQxE6Gzsc6aKNjfaBZna1APRmv",
  "key42": "3xMBZE8hwR2gaxyKVqmmwJM2GwjmUVTKKVaVf9rDrJDYpUwg4gnRTDbyZFw6vDnat4qtWsprJtkgWjhoAwv2KKaz",
  "key43": "3dK6thkJD9GFcAF7nxwTZbSsLpvPHMvZ588S8kSgZdNAY4hzT9txwcD5YTxYZFX6qtPbXKi8kDxkLHkbDe4MPRgZ",
  "key44": "S4BJmBWfApyM1dkXazzaZ3e9yu5usmf3ftnJPeu9Fu1XRmHKW9jPhQEHg94Mbgjs3Q3c2uVjVm73MeXFZUD1GER",
  "key45": "44jBBLUcgQktvg32vSNevsgSsBTZPKUfmntCf59FfoyZb3csV94b3o1WpCAw8ndVxqNBqJUxS21G1obaHuuSGLAM",
  "key46": "441URnhXXBQ5UU4JS8EK98qNAo4DJfua9VMCZWhjFNRdeudpTrAh3u4YjrnRWVxFvXmPJXy1YukTEN19j9wLGCAb",
  "key47": "2SReKaVhKBrz3jzs9nvmRh22ZF7EvqZucvgPUpf3oCX8e3CxPQpdAbVLsNM9dMRbrAaeKWshFxiKYT6E9XhAQi66"
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
