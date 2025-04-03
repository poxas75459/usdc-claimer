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
    "3CrHAY9NoZydfEjDS7fdLSqmbwP59nQvuQ12gXt49pJKxAEkqbw6EJicCJUPVP94PgkZafE7LigzoDfgx2bNtoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wzxgs3h5u7sSRW6Xb6jUzYfjJ5NGqmXwPM7xzZafcgZTNtCgJGuGo2MpXixWEtE64V3i8Aaown1sEEoE4yqFRMa",
  "key1": "5n4fcs6dgVjHtSwzGa92GxAGPtBFKS43xBXLc3T726S7ebVPMkcxJZkd42FRLWrvps6n4WHia1sNDGYq2726LjSC",
  "key2": "2gAo6iWN7GNpAPVTpSRQyhJw4zEmytsUaqoraChkVM5zHyfiiaAZyJrFBQ6SqRX7n8X6CYmKVeGMJFH85Lrzk8xa",
  "key3": "2pcPeLLMXxdjgbqte7FPpewRkcz7FC1WiivuVKtAfyChqeio4XF16fQK5neBFiVo2x92iPW3igBxGnQLkTnkgLvN",
  "key4": "5qaKbJpFKoo1MnmCcogiBfJ5uzvWiFqpjnPmZ5tLbFiDmZKPyajXgXtP8sA7ZEYEdBo8W3Jv9P6kjfnpoxrkae8v",
  "key5": "5F55j4XuzeNYaqo96zHDJcsFtNQdtaPYapWGf5ex8S6r39SjwJwHusDPTxERaSXgSoeAbufWbNzsjH6hTUQ3RE7X",
  "key6": "4ZY2HBGm5J6zPE38PSV9vbepxu6dP5HbGREBri8EGBMkwrNmZjd4po5KrSRjGPsovZrkj9EcV45vSftAWf3ku21u",
  "key7": "2fQNWq2ivGx3C9x3ztqKoQ3VqogPySteKmtbcKtJChu44g5xx91equh73SnjDjXPxse77nD15oHGmLzgH65jCSvx",
  "key8": "2pknwMHyCqdW4sJqxzg2EAHFn4eYPwxQj6TUTybugM5rYSRoyjFRT3AgoRoB5W3Vjx78nX9owLEmfJVis9K6bmnY",
  "key9": "3azmP8sp65DdzZioXsseBsQbaiEDhcs6XcRzh2zFRFg6java6b6o4udNdSn4j5rgQXp54M5UYrjeMdCb65aKL8Dv",
  "key10": "5RsbuAtnG3TC5KUfquN843Bh6dmzYfghK21o7FXG7QiehH5F8tBtMqwDerSVCc1TEpTgB6DuGBmjQiU8BxegA1Ms",
  "key11": "2Jafan3qHUNWDshzvGNNo4QsYu44EXX4rkd3Ptde7shBXig3UyTV3kL543jip64NryGb9sfVFkeUfA7Pwmhz7kHA",
  "key12": "5GJRHbdaQ9ddFKvJtQs1TNy4g8EtHjCLJTKbSqnEQteJ24GLQ5AuQDeLWjP8BTFeoDkjKJfgAGvHBT3JZJQneEFx",
  "key13": "QWVgV5pn3Q6MZLGHUtkveM8BetKDMpv3V1xvsQ7hf41FZraw6RyRUt6UfXnvJb7EpbvAQkKsupHD9BzC1SJsw2J",
  "key14": "DDrVn39apy2tu5mpghEDTXVSkyEj2LYkiwUZRMVGF2i6c2npZRaB751a3BL1SW3e396YF1T1uAaW1cchgxv1oBi",
  "key15": "2fun5Fe7Q64Ysa4BnHBXYB4qNGEBfEWo3pgARmMey9zonGCitLevDtpif4G6djNnXmhfo5YRs7LcqLUpHozyHbyr",
  "key16": "Xfgxbh1yVTtthN4pf57QRqV5T6xgs1xXcH5PzacWimzdjDfdA5PJsJFSiD8ryTkM9f1krrpiNC2FZpdofxxsTTY",
  "key17": "3VFX7RCTojk5hEXcN5Eou2rHYfGcahudFNG41M7eqyk8w5xwWM2nsebPoPdDbaeVuTmCyssdrUsyTachReCora4",
  "key18": "4b3tu74Px9Nw3VTvLgAp6z6syeF1ApXowovLLt6iUtDoG2CGnCBTmezTPPj3tq6MkkziRCDkUSzBysPBJyejcDdU",
  "key19": "2SzYk1SDgCetVyPxwDhPF9AEDqw69AnZ8Kp8DbAYtpKrAJ4Z2Fv5nvEE7ChZH8bxoXPaXwxcySCbygpQZCyrHpKa",
  "key20": "4G4vZ7akUeABkGBnA3s6jK5grxaRawkawjrsALGmEp1E6QUmSRyAbgjCikMPNz3ScJBNGmni4Rb3EUYEAh1MV9Bx",
  "key21": "4tnpo8sjD3rNoXufSXQgmvMUm3eUCG7irQDNobi9cGDQSYv8pVSMeM3pxpC9JLD4jvML92G3dWUz6pgR6GxQRxnw",
  "key22": "GYSiAaQbps5596fcfRHCopd9SRt5VDeCQYky7QasVsccoJoBTqRfARVVAnsgHj9Wv6VcfDNR56gfA9Pum1Z8mEU",
  "key23": "3h78uuSJbjDuSKS5KDdQkH2rd44w15in1gdxv3mePDWzs7XGY1tzPy17QsJLznBQNfcSi9syonho3dCmQPEJS9r2",
  "key24": "3XfVYEVxV8qFKhuAsm2aq2NBg1v1KyNzrMQs5G6kjU5B5jwH1wwFxbkSf3gKbbQopvVduesoypxgXknGufHXLB6H",
  "key25": "3fdZ9jLM8V4RH3B2LbDRU4q7UtUDgRYtHx5GpZsuLaBTSSQW4Ysf3iWnFvHuLVzJqiSghcgXE7sni4enKyS4ci3p",
  "key26": "Y1YFQvWtK7JsFBEXqSUCsXj7zaLXaoThkrXhRFeh54XzLrdgQHiN9t8aZuCLXREqhpnm6x7LPPkxfQic7KDdhVC",
  "key27": "2vyBZebpKPkX4vAa76WMSpXvpCnVrsLDKRUnTzowKdgBvEoB6HUL2wAhpYb8ipQvUYPKCsEiLGiD5Sn86kgBpDzq",
  "key28": "4UfYdw4qRTGcyT9C5GShSyBwDCjnodqJ1KDbYF7zYHJa8wzFki25CVRyaBBeyGcfR6QiHPMbbmP7bYgND1ifiy6A",
  "key29": "7xRHnKP1RrnxagMHXpbJUmib2QabM98TiYHgTCZbSyAYjundNhhcsdPbuX5DSkNPUuq4bpD7RyQJh2xF6b1zU1P",
  "key30": "pJa8KSQehFvrwnxJgJirhsDTWRFTFLLuLEnPQP8iAd1yj2acprvxubwWitn9HgXXa6WTCtwWuDcth9BRRd5BX3Q",
  "key31": "376MpfDvPKwahYXDUpKon5CLhx7gH96FVyamxLVDeNQBqekPUEWhUUTDaffMdNZuhpGws7uBE4H2Ccb2E3uqYHtS",
  "key32": "3GD5j26c77wMemCY9N4yrmveji8PcUsq7yxr5Qb9N7L7AfcuGL4WW9feWcdhSZrRdLxvWUSfaWmg7xu6kF6HmHpt",
  "key33": "4uY3KY3W2qePmDNdzfY6ENdhGJe4MYa1Hz9vD6hyMQWinD7sHKsAvicDQbUKDFVVdWSXBDVQFQUhy6ztJz9uLQMJ",
  "key34": "3n2CsuGj99r1DyFcmqxwHWopvT6VyMYYLPbpQKbCK7XaoVhvyYAUDPtx5zd2ZAaEB4BAXRdBnaUCx9E4VFcHZScM",
  "key35": "4Yu3xCBQdXPfSk4WNnHTxe2iXNDg6zCyGhRoVMjwi2pkzh53iLBkuz6cKPwqRNxNdRDnPucir2NVRxYoj1kemxTm",
  "key36": "SGgRYBwH5hejQLLy8jWNHmG5frwdFRM78FF17dj9gnS8Z2X5FaMpqmTRG2aRBTYjPRv8zbRXBv14EmAnV7BQ3AJ",
  "key37": "3NvTxKRJnhYHPy4H5P7L62CLg5Ln6nptpVZcRM296sQAjWvg2chrYqgiDL5nAEvSUhJjiJfUeGPZgQm292X3tDhq",
  "key38": "2UN9ynn51Tg9mTkTv8VVSAS7pyGhgRwuqJp5nhmAcY11o35ysm8n69c8K8NPE42zsY87VNmsQQsNkMxhqBrvYZdH",
  "key39": "3qSZr4W2VNBtDZuPJQGK1Vt7eXvkL9tGiC5vZwQMCYgJMJ5BEMjacxntnpVnH7ffh3esapdHrC5WrRnTZq5qYbLM",
  "key40": "3bRUMxk9gNXMsB8W3bfAP7ZywAKcVtebryxpabTSujnrkujfBijKTfGMDin5AqNa3W3ThxnDL68YWvzM7kEqtc78",
  "key41": "2kimiWb28pS3hyGHpXLmMD7ipBUCwQQpCS1jumHMtmb13sH4iTfepfJ8XSa4qAEx8XRrUqsjsHCyro4EiEJo31Bh",
  "key42": "2N34jdrZ4bJwj7cQJBvYKPBkTbvduoVLVHiYgN3XF6yaXq4zM17PYCHs9HE1w5kzqeJ2xwdA3UZLJt5RcVgDtbQx",
  "key43": "4n6BVgKYF2ys3SrruFY86BfHEgspGcpGyQEZPWX4iG4GQrtWS1eeTtmyWCuSBKmBwqsPhaNQgLWJNCy8AK29n6Fw"
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
