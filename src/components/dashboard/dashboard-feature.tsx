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
    "3bfzHWPFtnsrmjL3tJqZRq62bruvL7p63ahdei5YMKMtovUd54gyPpaLcdpePebRFjexAvAGw3GsewJSf5ETZXFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45H6abzaRPfvVGu7ocdkGsiqp4Htz5r5MeKhELms2zJLooMoYFMP22iJ3p3bQLMoFvfLwA745Y82HiJZArWCanQZ",
  "key1": "65HjetZ7T5mQDMMe5bgYwGSfWKzL3GkD4zumZEMJsMxD4z4X89hngaPkjAe16XTHXjGSC66Qs7dBKt396CsexHZm",
  "key2": "31SxT22xrCWfKE9a71DUdqXftamPuLcqPYBshN5AWc6UU9uH8VA7yoMh2TXYcA9aBKEp4Y4gp9pgyadPcG8oR2CP",
  "key3": "3uWiM8NVbsJJTzr1riwftVPGx3rQFnRGsyUud5QrQzcfqqU6pnbMbuBMksdcgJqTcfgxj6KCgBGyYxFBqF2W39Xp",
  "key4": "3gTXogUcRKEA2d5MyJzrm1N36G6RGbxyafWiJujfxFPbyoRrSxB7rjHzpYPgKaKivUXt98U7eaAMEWqNPbsfRTWN",
  "key5": "293v8rL3B2GwCrWyivDtEgeaoaY7eoZ5JuP4K1NtxkyoB8LWqUY8y6x1FLv5gCz2TNUFezemw7vdJin3avxAmmwq",
  "key6": "2QiLcWK8VzF46bnpXaAzaExuH7nnHP7EweHy5byxyorMqh2YsuxUUbmZaHjDeJcgeJFhMNBhaTXbtCR23Gr1ayfb",
  "key7": "24nBEVpqpN9LQZVFKm3g4VvNSf3MB5wiY2ptUTBsqmDmhyt7H3Su5Ud5CTkZVkNDrb5QNtykvDxMEn2j3qycoGZS",
  "key8": "Y95cu6oA91UiHVHzTRdUxfLWj7htcxunefgM9Cbe3DdWYogJ5mddrRM178QfCeNEXWmZSJHF2zHbvwxghh2HJiL",
  "key9": "3o5cdEzqcqjg7nmPPiDPGaUe2njjpvs6bPyaBXCAGdEjkWPvjvvjoRy23agWRRJpiKoFVArJyU1kpwSVUPdA3ibY",
  "key10": "5UoUwG9LQBX6gFHtK6ZYg3Ez57ZB9uDn7yGJ9N3fvy864xhEL3Nfh2XrjthgeSznAtuR95U55oKBkLz1mkVGQwV6",
  "key11": "5wEu15AEQaNyADCf2CtuCUMVD8fsw1ETD9oV6CAuDWXbPRvAAWH4fJSdrrzzJtQxxa61bbAGVoiTN1jaJhQNs75K",
  "key12": "3Ewa2WhPeSAYZEe5J4X6xkXETXXAbGpydsupXHc57vYXdMhcJ5A7AUCAFBGKozoeNNQ8KAqdQ8gthi4NiprQGNqZ",
  "key13": "jHFtvS2t6KuS8Sg2za1dH69zcge2eJoBeck71GimT9TQccDeokV7Cr8bgAWd6LJ1gy8WdS9xRGcrKFB4B6WSUbP",
  "key14": "5txqGf6HKk42EFkQMmFhnLePTZx1BRomqyhKA6xLBeZ8FEwDuvfYZhWnszUhfhVPfhqHhtw3q4vmjYoUnswA5uat",
  "key15": "3uzfXBVn96M2KXFVxM5Pa1PhsWsV8ZTHHHZQxxfifDKbtQ63An29Hk2uJJjtgp2aFzGwd4JsYqVacLs8QThbJWvt",
  "key16": "YM6X7WWLkki5pffJMjjNHFyAbjHid8yyvT8VwnnpFLwYbNWXTJzY29mF4SbrgR2RYi3TyaMrsD1rN7ccU1HTt7z",
  "key17": "26TZaxn5222GopamDx9dtQDUFRPCnVhwXDPwBtK8KXML3GMJmpQDQ4ycXAjK2SYwrxG1dWZTV9KSnT3DDhZuaeiH",
  "key18": "uVC2bof5ZQquFZwDKSRgDsrHwhJkv71xmFPAXhbwqEHPeZnyt6qVDbXv5K8a18nkNKvc99RuQGE2J2cZcwsSwMM",
  "key19": "2rsH947kyGNPX44ioNQKznf2sueHKfQNSTKgwDDw3q1FSDJWT1bptwsL6C1aAkXwyggMaG6aykpFDkbHKHWGAxVd",
  "key20": "43VVdWHTkPFnFq4eKtoECA4SuocdvbQaVuRLNgUmtWUnFyCjhPCmTFJ9Yxf28JdDQqKzhokZJKMMNuM75eAFHFuM",
  "key21": "2TuyruJMGJ6zJurGnfbYsVca32YK5LAG8oTyenph2Hwj9VYQ9eU2QwRhfSSWJuVXPy3s4rJ9ZYcAdHtqxDLKzes5",
  "key22": "2XJGrU3gJJRkBsvdzSxMkAz31buCoLc7bD1YkSjzV174hPZfteUXQg2H5meRiqyc75Va8TRbWHRU1hABXEE35HLs",
  "key23": "YRp5a6r7b3qC5v9aM4K55tfBBJG5aCXFRstcWxYAEibqXzHdcx43X6jNygvZVeRTLpkAnyoTA426UGe6VBtwXKo",
  "key24": "2BdFrotQWbmPqLsFBKdG6fvoAoUw1tr1RhDwkp6dvWhV5VWujcXnuq6cDkRVfjf7WggFySxjqDVv83XQ1ojCM54L",
  "key25": "4bNX3rWqrzUNbtZpV3AM8vAQgY41m4uAvW4mpf6cKu7pdCAP52rUn4XaWxbSU73VGktUWPdjhoCFFzRGc6TDo7XA",
  "key26": "28w44m5Y56xmXBaeYu4CVkB4WY4fXtoZSBAnt33fN7FFnLZNkuyZuQyTpThTyhC6piY14hFe1qiVGSk4hjHGNmgb",
  "key27": "4Lycb8btAVhw38ASJxKSuayFeCNUNmjxhdBNTkbNh2BAUakKuKFE6BLbGNCwqgqmxCHZ2LiRBbaxXictms8TdiDW",
  "key28": "3oHA321H1AJebgn62y9CqaH8bcrUKG7C5cCAgsjWCRxDr2if5pKkRBJVJxAvqeNXDs8715Yj6FQw4sZYNftAKQ24",
  "key29": "5cMhZvZu6tBkteegv7MLEpsEZuVNELNWbJ6ak3SdWdrnbTTTWYR5ANTw4ga8QC8n7HiGi6wXKUkddfDgcEpQaeo3",
  "key30": "3pyiw12pKgBVWeC4ArTU7P7ZTqvheQmiZBAPkWA98rWxE5zAsG33xvC5Nsm2Kdn4tFaPjDUnvBRbNs34BWg5KY1D"
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
