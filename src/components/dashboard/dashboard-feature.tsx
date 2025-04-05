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
    "39m31RDN1upCXu1Hnkh8CFqB63iQfCWrMZhVUXBPPQqKBJNKWE8UJaTM8wpekkZBXDp8JT5YXc47kdcVUZnqoeV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xW5kA1xYCEcqeQGaAAr6HLBS9zgvQY6Aof6NFedDyL8Dk3NKbnQjVWJwtySbfRxTsN6e1dWCSksehbXVRE7Fx2s",
  "key1": "5WBH2kHNJEP5GJhP4iBg6e8wgNbd7KtyYjrdkzjDvqFP4kFk894n9B6jNWmn8kRqqJYCAUWTSUjcXyu7NMBqJNJ3",
  "key2": "3EzNzJyvztavz2MAPNMgVmQhAXjkLkvdfCCGPwnryhR35QcD6bxZvxCkcM1GmRS89eAFJV5atHPwwgUyRk43eAgy",
  "key3": "3vY7gWzDTEFE7teZbT6xbYa2XFK4Pxm5kJJiZ5smVHfE6J9YXg6sHDfkJCHksMMh2XW4ZW75JVKw4nNCmUKgWTjb",
  "key4": "27EV4xYiUsy9tz1mgX8JNG3HaeJA4m4PSK9eHu74XB8pF7VwNgoRSh57UQWUzDXtEEaURPTQND4xKGQ88Am7DtwE",
  "key5": "DkJjQox5GUsNVbvmT17Ar1nyhybd9Bzd9gHrYpeUj4vLkMYF3wuYRWxDW38gJdmUEHWrY5Sx8Ps9NryBfsHyWms",
  "key6": "L871q5CobXHPVjjMUsFHFWFJ24bpQ77gf3GahkEwQFqpF2jUiP5dxkJCBYc9Hkt6RgXVAKQCjFw1M8n7F2ASd5m",
  "key7": "dyrMuQYvS99NRrprDVYM9VtR3viyzJBJo1bYMPMDBnEMLc2JASP29A7gHDLjzT6bXVX3pxwkYGUHQfECp5cEQTa",
  "key8": "55sNXgwF68FJiWf3DHyjjV837isRZJcsqUtsedBemsTUCW2mqXMvv5MrSNFiZPesRW91YPvmKQ1ZQb3vDzagki1Y",
  "key9": "5VDat89AzvjBiL6LSzTn6ag5tmDucgbEEZkqsSjsm2sFYgA75dZFTuYfRKhFY86WBGcAn3yCTBJYHKrpjSezVGXx",
  "key10": "2bc4eFmsziN9oTUp6sjti5pMTRcfMqH4zMBqHedmvws6t3cMLFkewjCjmZc9nvDm5Sz53iAk77T8va8nTbSzkdUD",
  "key11": "24HdKoZgwd3PQtp8Wu53FBE7yMoo8C9favpC4gudes7eUUMghAZRZ5kirdE55FFjRUMhauNGtQdGVnk5Jpun7rro",
  "key12": "2GGnreJtNnifr9pD788E9V2Cq28UVKkA2ygFEGVdW89MprT2TdJiQVW32dqHJiDuchT5H9J8fQmrL5MHd8ZWwvJN",
  "key13": "3BYqYw3VXDuyRf1t9jrQ5fa2k6niv1F6PRB6ivnAt9X5oiuhkLZCjLWdMTcs7naSqYp2vySQRJHqcrjFsK2khqMT",
  "key14": "rt36z4m22MaQtn8oCY8ZMYYyXjMien7khaZ4WmakMnWE1Too1xzQgv8HPtd5wTQKfnsFj4G8pUK9w8XchNE1ZYY",
  "key15": "36jkbVNxaWBDYGiq2LjJS4tvwQzesaV95RNmnTYVPdeJMD97TVPfHoz79AjyC8ncPU2ht8QKMjqdHmE61yBHMG5P",
  "key16": "3gJPrjwheH1bXtCwvLnGk5jJkSHgdgVCqUFJLzZgnpinbtkmUa3iJyPGSHWBzNAjDiqjftRaamU73pz2xHBpqtGd",
  "key17": "3VQ9t3Uua31soCh6ZGBm8phF58yWhhtvuS7Tg5krp6t27ee8ZbkeoiBg1b2peXo3sp4uN6VtgSbFzwmA9VAdt1FV",
  "key18": "4xmHRm99VamshcKtSLVRhc62pWrAeHjdXY4K4kiYKsxcqkAky3iDkfnTSHQArj8j4rVBZcwjLrGEv11Mj6D1x4Bh",
  "key19": "5nP9NiyyNFbA2R6WBFXYwi8coinQvqNvFdPZCe5UBHQczpi5ZPbT5y3u7SNMfJtxgHtG4bGYsNuHfziP8aDpa6TS",
  "key20": "w5eD6x6ReC4U1sxv8LvmwCoVUyPxj7a3Pg2p6Yifbhk1vFoMxnnptBPKrarNbpq1C5L5zkwLMkrNXQaCLnnPFP1",
  "key21": "2yd38zvnQtAvUTwhsfmdS1gTYnVfwSByj4HHba4cHBmMahtnn2FSQQSG7PLaPmydJpHQZ6P9mf4LwZqpq3Boet3q",
  "key22": "595Jeo2i54ovGJTxABLgS1AczkeYwLdn8NbjyXzbLPfj5SwAq7vFkwTbnvXeJ9EjPvVadLYBRv5dVd1wiEyVkBpK",
  "key23": "2cp9zrxyw2Kc8n4pdqfQWh354NTzqidcK6doAUKFZbJKVNN1bgcvDE6ZCmPD4cJ5jwa8uacBihz4q6C9uigyLVXS",
  "key24": "2G97yQX5Dn2uYphm4XAmrejCX21dvbwNmjWxQzbVNxNaX7ZJsTVYKTF8DXt4HDix3f96sfSq7KrkSwRf27otSmAV",
  "key25": "5n54DBkEk2AaE1p4s5eSHy226CWpfi39yauu35BKctQPwKfGdodhHgEfDiGVNESn93kVVkLaSJhohM9JU7t2qaCS",
  "key26": "4a7A4cZpvbKRXFYv8SrB51H9mimsmgM1QxEeWQETxKLHcuNxqvEDtGaZnWQGQxKmDCNxarD5hjHaeENDBvA2jzHF",
  "key27": "C9NyUxXu1cKmzhfBRUxH8Tq1tA93gtdkPVqntWTBkS5g5dFFJGdFbmbUrSRcE2dSoTsJ8JQJi45AdLQMpssw7p3",
  "key28": "24jhFXyNw2Vy845jEe3pgW4iEyDS7ooCZfjADA379pXadf1LyZUCd2YezEpPesNpyXQFRg96CGRGz7qui14skUhz",
  "key29": "44PCJZR9GEDBYWwm9jLq8igdNRAUmm96XNVUchn4Pj9LqJUC2RhkbYq9zqcDypRFnzhLeWfdVNNtRFtXct1G7p81",
  "key30": "3DBmAYmoJ6rTmePNfJcEatu1EBxXbBNWsj8vvzewtX46dNxXuHhr19oZ5aqVSXpixvewSBASxEn9jwFYPtk2XgFu",
  "key31": "5zifuqVCtapLKnosPZ3EGjQkgwZQwXUMVxxV3mCmsvAaL9CTrgV9HSq1Sn9ErbG3M1YPKgGY6Gt5yMcy6rDpyeZQ",
  "key32": "2akQv6np6nQQDLUpyf8GrSyUBM8g7BiTmZHZw2b331LreQ2Fg9up4HjktmWJua9jzPLHArd5NtF84zXLbwgx2oZ8",
  "key33": "4SdTMLEVaZsKvDrKNV3owjJiZYvnYusZnEexGb4mpowtC8e49X55fZgz19eBesLumU2vWBYvNaFwvamN6xJePaa",
  "key34": "5iRZvqNED9og2ria9xEa8fLhXqvUExjxVp7wW64QyeSG33hz4FsmuvrB1dL7AoB2UrVwXZL8SV2CJyyy13kkKVZ1",
  "key35": "5R9pzsxvsfvvKguCwTKv8CzZMTfkqvZx9936hfTiJq3WU5i85gZ4ppQaHv8dz5z9g3MFgXpvHt3a3FTuykXMpnq5",
  "key36": "2XZL5sEH6z9z3GVzB2knEuoPLMm1tfrrE7ggCJAYzbQKy3sbnayga3ouMRrXYJ9bUiywBq7sqAQGDoi53kZufRR",
  "key37": "6sMzanGYsMXGfMVyanZXhqpP9y8kiPUjuCZBwkm9yEqe1ch73LqZkza1pZdxLR52K491Xq1RgjFhGYEZ8ZW3taH",
  "key38": "2J5AcfVpiRvSwNDMkTYZzgQcn1NGzE6v9ZsoWhYaqWnUvvmPpgSqp5xRJYSVFjB6T5xK9YDhDQajgQE4pVQmjwLb",
  "key39": "UccoV54vgPWEpAtzXtakhquBr8JAWUojUjmW3d9jSmCsqs6DYY9RefsJnjiUhWAZwp2Vfm6HxvuAs8RpBMxBJzn",
  "key40": "64esor4NfQo31v1gck8qAisqq6maJBtFKNyR8pnH4BDrCS8cUJibhu8A4FDBqLDeevLsVq6hndv7NGTZp1YUGWov",
  "key41": "2XDy86k45sNMfA5pLdLpS782jAyqRHrf3VkfkNEnFANsvrRJcprVkrAbGbo4kPcWaUMkE1ByJGyUgGLa3VwJvmDw",
  "key42": "5wVez9ikAnc7sERRc5LhDNpKaRu45Sk6Rcjdqsbfe5KGKWaJkkF9aXHxnyAi3bspiTgAHbk27rwx8Av4BnQwcGuy"
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
