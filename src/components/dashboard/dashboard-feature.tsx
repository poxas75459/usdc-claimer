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
    "2SNzE9nvYZdqjqV93XZwGPECwfHCC7wesjyRadeVDzYUphJuuzZyxLVrxxpLVBg5JSf39sDZFnck6qcjCX5NfcjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rmRHhDNbKPBS4uqz2mCCJZe6yr2eTFRZ6HvCMp5bi7uhAMAaeEaiqgTJaMXusEJPiuM8kgK8W4NAWDYKoUX2DvF",
  "key1": "4KmQprcq9FqRzNKcYdSrszPCgpokwsVcQ6B85vhXYD1ZyTTYH623gBZaciaKEMR81iEiyouiZawFMy9Sn8u9etA4",
  "key2": "3ysfGov2HFA3VcQCeqMzGnYtSUyQe8PR3JT8Uic5PBwdMJwAdmECm6Zhu3MgS1WPA5xvVSTi1AQqMb8AVWyXYLiL",
  "key3": "3zsJujvxdicvRzybPACfJz9NHWQYvAJMFaiLD5W43GTZhs7XGqfM2mDawkfuPqpChGNP3kKd5nQ9rXMJ5dm1yanS",
  "key4": "5FWYB6adjHzn5n48hbGc7bF56T36wHjyB1Q5qY5MedzGKxMQAGUV9gQWTeMf18syG55XrXvJF2FfAT4z6cMjEA8e",
  "key5": "343k7LU35wUha3CgsE4nbAprgDHoJbfqgYRQvRFhW3ajSry76aKoWtefHDPc6x6K33sCvVhxUoFVE4S6GFAU9fMA",
  "key6": "5oKwcfokuvnkeZNkk6aGPGyQkHiLZ4GxpRpBnPSsC8jnVdwsQoYnvFTSyVXns2brsSoxCNW6xuDMYagcazTFTLxo",
  "key7": "2jgdDq2nsMjLFRuBgqcAxP2QWGNHcCFimJgj7DMv3Gs8W7onhzKraGM3CyNW3XHzAtkKhWnCPzeFkmKGLNtkNuob",
  "key8": "SzMJFjEXav16W87MrbmocmmZvYzoKmfuHCNdjpFZPbVpL9Hhu8pL7Vs4FpJGq2ZMrL6K8kMLZ83vuVo18aALD6r",
  "key9": "4QRBfFATG69szbtJSorYK3mSykxNzyLX9KC9maEPDv32esTLwhk9deeJDUDSM2bXG5oykK8g8rCU5jZcLBueeZax",
  "key10": "3dnnT1qD93HpCW6aDhguBWCCCQWEZvN235eRX6ghFjaLZiVhyJLnMiLr3wiikQTVRD7X28P3sG8ui2HrTg5nrkRB",
  "key11": "5Z4BTYiEXNmkmMJUAziZCRDPEdqaJVBMASAnoXZwNchozTSf8yTK9pew6UVQadJ1Q74BobRsixGXuTfApTV7hwF8",
  "key12": "4vEMW2oNP2KHxgRgMfmvK5NXbuJZ1Pfrfstt2HW87hi1L1SrFPt12EceGFUxTcBp3wuaeMv3hy41gkjtR26EDBJV",
  "key13": "3vUmdqrUVRx6ZJ8PuPozfWgVhhmYEPQLzgTzQLqFBx9TEbsXcrA8Nng3UxxkD9GSRKwjRdTNAr9sQTz8mo3mG9Js",
  "key14": "4oZ7wF7MVMYahqArS93SLUU6t3PmkrCdo994RhvhvhQ4aaDM1gPNcERNqwU6B5yxG7WJv9oMhGE4DkVq6sV4o2nN",
  "key15": "52LV36KZNCtXHUmXWs7resdSowB8SUT6RqSfUjTNKMBorUDJcfySPHqbdfGnE54dw3Gi7haTFaiKwUd9j2LqKLP1",
  "key16": "65kAujtyjP7DFpEdTqHjthSPrvzcAvyobsPZfgVS9aCWKKnEfCtCpYdokH2UGsh2fKagAzMeGk9XZgg84oUwk9E7",
  "key17": "494DMvEeGCYg1FfStQEjw44cUjGiFnX9umkZPMpNdFuc815Pc8PHN9EKFQ19nPxe5ayuawJH1WgjJ3FfcdtfCJf7",
  "key18": "5vu2dXHTFuhsJsSrkzbNBWUS2stj9zcTr8XBkKnnXawdfi1z7bpNZ5sLsnoTPDXAWYqoris4d5FTHaeDUVGsf9ow",
  "key19": "58R9n7BXeuR3oQxAWGN6UFxEJSGHA4PVEpt92cSP82xfY66hiDnVnbkn3Jo9pocdK68ifgwM9A7CnAxENVPXtNhA",
  "key20": "34sNYfMU1fuoyayQsjoZnczRbpG3y572tA4GArRTbUd9wmZ55XV3JqRDqoeDZ18kvqawPPgAyWwYBVokVwDbjtxz",
  "key21": "5WBWY3RMTtZrxp8oUe64s9R9SpwWv7NHkutAbYqqQ1C6VKwqYKwUSi4zzkwJXEeAp4UCTwYkhiqFpds1RigbKRUL",
  "key22": "2x9UZjk7sd1SLvXCS3CoqUHxhnds6zRSsf2D8DFMa9Cb1rQnP7KhWK6URbHoCYJaA5BWhgGwJaKWSFJ167VoHD4G",
  "key23": "5xWcMLueGf2nAPS7HjeJ8FdyNaohHkLM9w58jfr1Lj8DooZLfdszreCDUmTueytEpXrKtgSZ2AcCSTQJraqA8XoS",
  "key24": "589GWjPKKmYNSmLY9iBPku2SH8orkNtej5cCMde7fYnmhnrDUKixYHhKcXR8fg9aFv7Qw1byvHBGyLXqh8x6nWq2",
  "key25": "5zyGnH6dXaDkBWRSQG6PMLcwycPbJVhWokCCcBKt343NX53F4GnwbMTjoJm5uqopyjJQBvXTX3Pxf7Yx4Ndvtmj1",
  "key26": "3TKv7emuucx3ojtm5rYqkuACpaqUSJU5fgau9mfdjdgcHzWFZce42HKQ9hHmo7vfuyMFgJKPEgm1HdorUSsUCXNi",
  "key27": "3RiGNRQfcAQDEzruYnWEgUxjXiTS1bRi1xpXscm4cFwfGDm6eveW9fML6BpmPYhWjniffiSiDRH655D6Xc23DcUe",
  "key28": "5q2hvo96HkdppAkN7oFPMstqZUPXP4F6isb7EwGiMGxnHN5hALSFBesvQYzRpPchjdwFa52CoH8CPwhapxMma69F",
  "key29": "3Edg2Xb9VgHWVL2aHfQcrLocR7MipCYnUQk5Mwn8VfRKLtdhoiwTqA8jHW768UAEP1JYYU5NkzRJpwczTHFzaNK6",
  "key30": "24h94aqXkKozozN6kbisY4PRESGY1sdBm2DV4L1u5RV7QdSp2RqoDQv8gmyv9RJf9VAet8R3S2RQfuwQoE7S5Lg5",
  "key31": "469NLimWiffPaskFvyVZEfJVaXoMm3eGggg9EziQVXjHmy1rwo9kSbpXaTHnJkEWPvABuubZNTs1hB7QkYrwi4tS",
  "key32": "2FKHzEqCoepcsgodfHSiFfVx3HyEja4NibchDMiHY4ZyarWuKqSSoC4KAScRR4oAr5XhZFjvtVBMBmojGvb5jJ16"
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
