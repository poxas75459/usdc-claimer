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
    "3GRQzMrqyDWjLZxxTCAKim5jNurDoEZa4X5w5nQNEXoGDr3yeEBMHZiaRvwT7kCqzVuiYKZNuEfvMYW69KL2aMft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33DNZztKJM6xEhzxkuPgfUvTkbDcm29jsDt1497UGwLQzujmHaC3WUaezh7JcEVGgYToeKeqqrySSwtyFUMapUQq",
  "key1": "4iRJGR4fVcD4ub4LCLxxJpDa9tMujnUjytxeFjoGZohpkykvdWtKNiyVskLtm9X5EYQRu32ZqND2MGPBVLPWrnr3",
  "key2": "jpXgLps6WCn4vnhZdTRfajyRACo8T9C6ydFYcnPPQdx1yT1yYTizYuce28KNVDzJkjCoGWYGhmGgiYVMMRmiNJK",
  "key3": "VDvzvrDMtfme2hfm5GdaQbBoKESRqUiv3kuVWGHin7kxvPJALiPKGn7DqX4zCM2PuAFc3sCb3fN4PDd4rQVu9gu",
  "key4": "3jbQX9gEqbeuXCfueRWd3NS8cLoacLzkbuEEt3dTUDWp9Zq4rMH1wTDnh3M4tzpZQ3T5w8CDatK8znNGCPQDA6op",
  "key5": "5MmCHZfNaCC7fkguq9h5YGNdZ8QobYEXZ63AiVpgPufhX1U7SLmTd4gSrWtw2mop4gHTnPdUDDRjE1Z8KbRkcHPy",
  "key6": "3693vuvSw6Da7dDURcN59tdW4Wf3wMQmZa4KoeiPSMGb7bmC2rzF1ZkFhriDtzkjFN4SXRWUmMUmH7c46yVCyJ3p",
  "key7": "4MKENi9UpyQHRH6oJFsGe3EPCUKesJKADHeaSHsghP6gLWoPcuNeADHFWwZtSgzaGrPgK5C6zLRH4AR6KjQpqMcw",
  "key8": "BwJWtrLjYgk5VKuWFnWtU1i8EY4Nsfb9pjfFfNnWbAhBViTaxMo4A8VfhkBLGBrYmY59VTffs6TKUyfbyL1KLZG",
  "key9": "61KkrXDAai8RRSB6BWVfJdfqRXGRpq178fmWLdpZjvbBX9mKB7yDeayYMXwtMt1ngfKhDqecWUh4VEh5oX3BgV5Q",
  "key10": "kCuun9YkFBV9g244Xpih5HMhirW28HZkxaF24shUxo1meHeUZg9RXbcKz63KV9LAc59xLMwu8X1bx6kSeuNvNb9",
  "key11": "65Km1xJ89nxZ2G361iq95DwQ5DZCs2UitS5p28urSUamNSXV4NyypGrspsTLmpXsBRMbA4EWSgiR78uypfpYXT7P",
  "key12": "FtbA7Uh8P3SttdRVMZ1VdvTPgj4jroVKzCHt4nBrAw3TwdezzGwgn6PVmecFr4diomMvGFCvN87Yq89xRj2nUwq",
  "key13": "2S2uEKXvQarqTQGpYkfAwq2M8QAXTY149jECGVUkVev3ZJCpEBhT6bJReu9mC1z5DQ4zAUpafvH2EjxqsPcovX2V",
  "key14": "2e2S8uXjvAUVgrndtoDC68cYTwtY4LZDRzWyLpKyyPmJWb6k1mAmMqiGhLCe7A9HsoxiVJPnEBnAcLGMUgVx2xj6",
  "key15": "32VfAwwYsf2g31Z8gFJJ2K1NCy3qpkx8zUDrkMB2imQs3vx6Yvoi5FwqPoJ6MDdXixbGdZcDEYMhzSjkoGkpNbpZ",
  "key16": "5fFckwg6yxgicGt8TjJFfB97FVJSXeZc3coApRG4C2rEURkYgcbsVNBnGXCdiuo39eS2p1JDXRNGkeiMCgdYaVUY",
  "key17": "2akWoGPKyyEdiXNMfxqpTFF7GhVhnrvByenJ2iZwysFXUmMDEHxMMAp2wv2Qr77xYUZvGqXDMPjrP2YKF7TyFU8f",
  "key18": "BKdKUbjmA9788TS71YJej9aZT88WzBbA3SnTEYnioe9QYZm6BmARhLyX1jC16Ad59s35o8EhnbDwh1G1aXPb16R",
  "key19": "2JNPSAMb7XZGHdWcXmkavCw2934Wg54DscK2xh7hkGaTCk7YaoTSnfG4i4NoRdmznxjZkQ92YktrHP8L52dPR2vQ",
  "key20": "4bXF2ch63DzPtwGWaHNBg6GDKewyFMeQcAf7yXJEfTkDhnUm7vmvjYB8itjfCHHNdZcbaqsXPU3sPJUbWKMTESxu",
  "key21": "z5JxNTmwUr4KnEPkvWi8RGwJWxSiL7eE5kW3zoTzRhUCUF5XZdHACpAb4qcV4HxqwwxWGf12dymYDZcQ2Dji76G",
  "key22": "3fFcED1hajYxzrWukGD9VQcez9on6Kxf87XgpB4ZgGG6stW44q4Nt7eeZX7f1HDdRXLqUwybtJQFxe9eBfbYceEZ",
  "key23": "3pWZcFsykZ2SxUNYEDLKfq4cp99VZJkDv5KkTptzuExMbSYbJ9Nkfimj3kVXzz2p2vhxTSQ6VK6ACtfm8gyEBejJ",
  "key24": "4SNuS1DNyfQEPVvAuLL8uRo4YG8LwYbmwdcz27KEXZByENNjDRAZfzBKp1ZWzoyUEWPZH1oEg1Puss8F6owWaZ6U",
  "key25": "3zvtjufPMWXkF8LsV5NvMkLGDfvYxQinmQpgWZF8w57MqN6Kfb8jFBHjzfonS5ipQQu6iQs8Ez9iggq6crhS6Zhc",
  "key26": "45o9XaXCwWmHqkXT44NfQA5N4jZByytz3ve3FKgaWKhS2u2T9aGvELTcZKbVtfCaXdWvhGYmxTZ448VB1CdnRgik",
  "key27": "3gFagdatkpuEKLSedCDVhYjMrYFJDpChEtkyBhQzpXuSZ3jeXc1iqwHDyDg6AniSuVYTWHbXtdKqRouBBwbBP7xY",
  "key28": "5zF5DgLc7EqXechh9hs7jzbEegqiLA5bRb3wAGv8oZ9b46oDzPgMsvKPYHbbiExD7JsX1f1cFqWh3gb28U6MaLT7",
  "key29": "2WuXAeqJRtSxpPZsuMQdmDhMCfHuuvtoVYUS1jGkMWr5gjEgfGxxU7JBCFSrzB6Sx2xV2qTuxGSmRr6oAWLRo2gn",
  "key30": "21C8b5PiDYuvHyV9gdkptubhpATc21x2iCXZsEFs64RDuGgC7v8a5kZzsCeUM3AafhoKTyXRCeCPNDEV95Yk2mPB",
  "key31": "2gLhQt55EgVqSxkvB17JWeXARE15yPN36J7yhqqknqgaC3UwNhfa3dQ1rxbx6r6UYZA1c9aEi5PfNyucakyAGSFD",
  "key32": "31knm4xwATNzERHcs4U2tkxq5v9WrtAFiyTguXEeFZA2G1kYmaG8DYwPcMr5xkrKTPKorCV9GF8kKvHi7zCPuqtU",
  "key33": "2t5FEjrVDqb5qdnXePbBPzsmJWtCNP2WyggejcnSRfYmYKTLZPNkNMzDazLo4BS7Eb5SY11VhV6nZXU9L7Xudm73",
  "key34": "4gUP7LBGGR32ZGaqUJEeJGs3W6H9dDpekGLWZMuvAtLzBnXjJxzYuyRqvzYhQbQy4mPKysLYc2vfeh3fd4MkYLMn",
  "key35": "HSvEfUyFRGb1uhoE4hAKJ96uPHfUq6NqjDavjniCvTSG4xdBVaMjdE8EENb5mDr1wCEpFMDk6TrfYfbqi4hDVn6",
  "key36": "2jYAW6Zr4ViCZdVUyR35Pupj33atXgWKP5Poy947vPZg6fAqbXq52b2R1WBphUVsQS79esQY1YDYqNLsTv3AJz8V",
  "key37": "4KZNePPNhFdhwQUj6sCKWzx2Rsjx154fAgbnWjqWn9QzmhdK591HGhvoRXHpwFUJvL3zBiqgW4k3FkRwZhuGgR87",
  "key38": "3B4h2ridTpfs4njvqmHrZaMGo6BikJKsqLafvLqtpErejvbXZDN95WS5ygDtjQixaazbJu4wCXvXgywB9ioXnqDH",
  "key39": "3YmHHcFHT1yzC9x8w4cUcWMwPNq2zdn3GxSaPYw6Lkq56wCgXLRVxVMaELUhw3RzSwxxbzUW6R2mUbU5esroJQo4",
  "key40": "fZ4zcYdC8z1ePDduoReRjXDcLRB4Z7JEj37AbCJUw3SCos8UiHNtAHDo5yDUqxoYYNwK8YKuZGWqJroy8VsPhjq",
  "key41": "5QhkAY9JcXhrWvfYfwQq8RBD29zXNrP18ayCdKYfNUrc54yb9bU5Cbuws9Sf2SoJYGnpjyejre5uphpkCpCj14of",
  "key42": "5Uhw4wt1WQHUGp6YH4UfBnxmEQydNZJx5RPLZYi5dAoUggSYbt61Zh2UfrnBHv7puhxFFQy7vvnmw4R67ZzRaC91",
  "key43": "2dKAAs8SLhqH3dGJotMBuK9mKHr3kGQ467eNxSdYepHW43otTzjNyuj2PcmuwH7GqkCuyyQx5rD8CP216KPC1UQd",
  "key44": "2DNrBCYvhhSSmwAzhx12Q15uTU598vnstgkvtffnpnwVZTaRV9EeXpkGw2FxHmMdsofPHaLLhXfpDou2z9LuzSU",
  "key45": "W2XnoKc2JZZxhvoAsbht52gjMYhDCXp1gsAyZ4j1oKGFt7Y2T5GCKbbVrAZAH58pKY4Wj83so8ZanZjhgi3yY6X",
  "key46": "4FgW7h4XLn5WC6mxSNP9kJaXx2sbvPrRuFC3kbam4XsDP4wPt9LqVS8nzXSR4GpxyZNY5NaDWyMEqRR2FAhm2KN1",
  "key47": "4kEZ9Rje83u9xakWThYKnNaJf8ngimBXGCbkNFQpyFoppaTAo5BC4UKt93tox8hy9AJKkJwTfggWxZHQhDCDJn5D",
  "key48": "5erxuxnWDMpi7XUScs8pp8WjtBz7qm1rcDEBmcg76dPb3mmL3jFDY8xT8yddGwb2Tsd58XpU5tYFENBY9YyMphaz"
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
