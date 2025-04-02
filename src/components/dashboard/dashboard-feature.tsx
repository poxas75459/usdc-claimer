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
    "5q8EoN1496C9AdcAuXuk4H17LzaEm4SDTnGEDbncmMRwkS7a3goLAyWztXedKPdTL7gC7ucYpJWyo6nRMe4JDNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "252D3WHWKPxusURxLwUaizTXztif2cnLjrPkAFvr7XVHCZ9h31LZt1FpzJG5ZqqMuuMRveScbdMQh5YVuB3xTnFC",
  "key1": "5dac1pPW1BNCkQEgDAHtY4d4nT7EdknUDNfQ9HreVKgr9GnDAiSB9FhFoXWSs67EY7UfQztKt2J48WXYjSyvK4co",
  "key2": "2nxfdDY8KxoYeFCd2PqBst8oDuKCBik64xASxgcwGUU8su6Yd3cqsTni1svKJwxWfn9yMkYzJ2KJhHpLKbVjsxEz",
  "key3": "57e1DWy2nWyTWsJpUfX7QGPMgk4SxU8R5q4Lzu8rnho1FajrfH38U7FWNZWo1DwLqSzZePi9QkQNZ6x1DSsLspd6",
  "key4": "356ZCo3jrJ8D4fjiA2sXNDWyNEWyMBMwjXenXEGoH8LAtKP62EQymVrMWfvozcwLFm3d1YMmutWraLefFH8C1LTS",
  "key5": "DSE1zgRyzkpHKJeaookdcYxXZXwU7FvDREPL2ur3ThooMdCCPTpveTES5rEq3auCoHBgnR1EGzjpAbBVfXV1zWn",
  "key6": "DcRgJ2zKDoD68cUoZmp1jvPJsHwgR1as3hYf5dEUbrEXMpideFfEbtomjCrd1DXSmcnvSmACM3VfhPPnG26JdPA",
  "key7": "4Z8kmH1qktPigQWFuwCyKYxUfcjfnSyJy21zfw3b874H91Ykx1iLKRPMX4zP6Y7snH15jKbRcu1p3Xn3D3fnUUA8",
  "key8": "5rVRCvMBPr1vBQma23bZoF1c1t46ZCM7QN4BaisME3QKqk5DAB62Ye5pPbxdyMQaUqJxEZb5CBLiKrxrq4FLABPQ",
  "key9": "8d9m9tMdphQFSBAfv6yfLM6nqXmLuCFYAEtZjAQxngQW9m7eA8AKyc337pmmWtextTcYxZ1mwMvJNKXeNwHGJs4",
  "key10": "2WagfE3LXiamzPGT4Utq6SEVciKJq4NJCoRBYdgwSwAtTKKnn2ur9EQs3xoiVaStM1Hxo1NJKMx7despQvcAvy42",
  "key11": "nLucyVDE541UQ7gNhhvL4QTeJ78BqJN1dLw3X5TfptogJJi7v85iakFmwM1z3RXqYni1fNZsT3ZgG8qYbmaFS9B",
  "key12": "3MgkMdBB5UZjCuU7KMjT8heLh7JvMi7kEac3Nhkua6AhCPU94PPmneu8fkHRbcJKK3xn6TK9c1FT3QpT8udTUGHa",
  "key13": "4Wc4sLMzogdd34zsvRKenXEoXuFDh7vPbn8wjUokXxxgQHNLHi1WMxJ3Pb3y8CxUfonPrtU1QR8Wv9myAd2mBCv2",
  "key14": "3fdZdKfirPYHxD7KbiRfh8SwASUvqfVaf9VvHgcaCUdAhNkYY9hn8TqWb7itcbcXejzdBUWu6oBEzqaCuFu31Ssz",
  "key15": "4p96tMhWRoKQgqfjKHaZoJ93GxrfLsZ9uy7KbTe9YArXcATaLrYuV6S4BmCQgjNtte1sAXLWek38ReM7RNfcnCLb",
  "key16": "5PvxFizQ4c8EXXfcfbsKWTLfaTK1a6fqevS1vDi13QxVTspxgVHPr6th27moNxoLEUVFSBk28LnakdqAUsyEh7CR",
  "key17": "4Nn39DbEix2rMWpKxYvCrDinFA4CJHmj6opAMMc6gCevQtWYu665fpGGcSaDiyoJfAt46nkJKqoUabr4tgCSq9s2",
  "key18": "52ndnUfxXBuaK7FNQpVnnnYcCP7jHUsd6436EV2Z3pWEwSVxPH9Xkq5e8NdhV8Gm4ZGgWZDcMdsZenBVT1FnntM6",
  "key19": "5LJoEgRBFFYr2t216rUfNbsT1UUGwCPg26pWKv8foGvCuZNuXHAZWFWHt32z6zy2BvbEjbZaLkMGCd7YVFZJddgi",
  "key20": "3zC94bBs39G8rXhxgLemYYjictLJ4uHNquBkmvHVuoFY3QtqKdbYd2dJzBzeqKTNqyKwL8KkVpDHLPa6ZMHSDzNd",
  "key21": "5bRB44m6uEQGbgSriPX9UYjcYEaH34Jj1e396BKHSkkbhHexhQ79gLMJ1CzBfdvbWWRcJtoJ7BqA6VymGBzkHoTW",
  "key22": "43JegsHWF2pTT79LRqSBBZfMMpQVXLDruUMQG6JJJAc9HWCrfUkXrruz3pxbwLDN54PhVK7Jz89HTcyRUBb5ahum",
  "key23": "3dK1XbJEJJdZmCipnh6QAh25DgCWQv9kQFoGfdKUPHVv7KH8659uKqhUtnDMjnRDfqfAaoc2fV79bK2Z5iuCcVDe",
  "key24": "3rqx1hHje1xXYoRSmLmaHnLp8tEiB97LTApLCB3CwUh1ju5YxivNEB4G2GCRp5M7EuNbtjpeda1eVqGPL3ZbB5xA",
  "key25": "5GKoSYDHFeUPBsTzBRGWD9GtX51AFdfDoTgbGEbzse62XcKZvZx3dweNahggD7UyQnvw7mhfngscraKn7rvtwXBh",
  "key26": "3GtXAsj6Y4DoBrczJeiTiWq6TeTZdjfRPWYYsKkFHEXvnowPx5GadhPyC7HYn35eJHLszm1VBrmMJTmLxUbJEaNR",
  "key27": "TiEbeLf1HTC4Dt8HdTaQTWkLgTGTw1gctY59XiHJp21u7nnfXaDEYBCS9ALwPHCZPceAXLPmKCbcQTZkeE4KBWJ",
  "key28": "wvMorykNsRmi6MhMWufasP18YpbcQ9AdtzG9TE2bPGh6T4rhZ82WuhvSAhTNotk6a5bhEWUzhrKV9HmMaMbGbMJ",
  "key29": "3bX9XB4Ls4uF9mDPZbd43nZEhH5dPfsgWYTALyaXa1thiVb47nRTKRQ3w7ZtiAixvV2dEne4nnEG46yR3AdPHRFc",
  "key30": "23763fHBd6BqjS4cqnp1r5ngrPEER6sV77GyJ9dKuC2bCX977hnLbMJR4s6BbnJoys9QqmutU4z7iniM6DFG1gLC",
  "key31": "3Skn6zzUnRfWbVL8MG8jGVnrFftJGJmbuYS9Ap2u8DtxvLhy1G4yFk2vHL9unsbeK9889vaPxYsDREUSEXtzcr41",
  "key32": "5yr3Qa4yDmocGowrsHHrXNNVKUpfiptW7QvPiSWNDs2wJ9iZJa6oTSm2zC9X6yc7EEhabpdU1Gu8TD72A71etkoL",
  "key33": "23TZEPBZPSvf5RSDr2NWhygGqjQWBM4SDWGTqwW4fhvm8H8NSMVBArwne31QT7kV38h9BZ8JBpUrPSFRNML6sCEs",
  "key34": "2k128ebzwjznaKBWd9CVZp3vod4AgtdJnhwfC9xRfmJmK2HEBGioSFnLo2q8bP3fXcw3jv5ZvAncAGaP4qmMTmVc",
  "key35": "3xM6WXLLre8WVijvEqaHVwiobNALSkWszCmm7trT4LgFgNJ8NqFVFZMnSSfV9oEtprtTc7WN1hCV1WjUX7BbC49U",
  "key36": "3fZWMub5oJc5vt9Hs1yxbcoCvoJ7j25M76qz7UNeyQDpySFAHe9tSgkned41rqy6FXnzkm6sp5ZDzaYk2TyWXeQ2",
  "key37": "61Q1gTuQnZRoGHWfakHJ9w22aSsTTYRN9ptxPPA8QCJTd7duPoabQC2NWFVzQ2efYiXfQcZSDB9yLRoiKVcYcxfT",
  "key38": "Dij2E7iztz4tBaWqomT9ZstgVwLMn9xK5PwgGnWDJrWfmpc6BWdLEMU9u1JNceswWPvgEpPdgkURkFKZnQ4PQtE",
  "key39": "31FqBQBEApFVnjZQ5k84YeTJvV3A228q31oZ2o8rPVYSzWwseUfgosN1aihfw9zTHtad1cF4Q2uyTaf1M2f9bsej"
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
