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
    "YoK79kDY52cjvpMnxoZX3zJkweAJw3yosyJSuCtmxH9f7QWpe4Nw4d4o5USkVwnUq2fTSHdavUGEqhEZGcb5xsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SePKs5FMQE1fDU6jt6kdFWjAzfhtdeGUUoTARTVkBEbyEZGB6c7FzJuSmGCfthn4v4LD5QGTRzbyHVaiBPLbeED",
  "key1": "2LXxzfWsvsuXJ4cEgJ2PSMXdPvAmxdJTLyGikZDQRivFfEEQW1b1iHoFnn4A21NdPFKJhDkuKXtjLAmswSpUqALN",
  "key2": "7vkm3QJtcM538wNJdWsYoF9CtascCib6rwPWwMAKdC3zdLoUAAvtXBuXpSKjiYy19TWnn6CCKZG6TS3pUVA8UqG",
  "key3": "JVpVibj4ZgGx69eV7nWRyutrHJeLv9DqFLfoFWAQmQoBr6oyArafC4aeDCVWJdEgU8XLKBZUziqNjFmXdUEnhmF",
  "key4": "5cVJ5cdu5f11UjnijEFMDRkNyNgTV5esu8ehq3KqpmPqPQjDdBqBrKEQV5eXVEjKAWH3jMpvzuq5b9Hm7p6k2v6m",
  "key5": "3r4eikGJZWLY6fMGripBSdPtpQDy8mYG5vLPZ1kuPkBmpNUuGeVKyQPzNh8mTRS431aBPuRpdqcSFdePyubFgy7N",
  "key6": "4dnbijztqHT2ditqzCZzphTrH9FKSJNpgqJKQbsqEHS7fvXqztNLBbRwXoJjZ9skMzVUXAHdx2TRKQZQFRraBi19",
  "key7": "YPnQve8ppRLZkRCTtMzfB31BbBZAS6Zz6jzUWe19SWvXCHLuxzm41zRn4aTbMVGH7yp3qU65tZ2s1X2QAnVqpxR",
  "key8": "Lwi79bMw9TsgiBuc1AqztQvXuEqq73qB144XgNra7iW1BqDf7z7dBJywxCN8QPJb3ctuVLczcjT3NQSJ2jRJVS3",
  "key9": "5tNb6UwLH263zQ8FpXvFqnSinpHUa55MpYZHYsvqoM2BnMCXi8HvkMhveDU5Pf71ibiacxChBtREMK75XBrGQnbc",
  "key10": "5ZVTHQLJwoRr3GBaGgaFuSKzTseHzUnewyQUAf5zRc4Yf2toK75jRD98MM1GZNx3usH7aKw9iNeSkNk3xvnFjrDX",
  "key11": "wg5QYtDYNY8trPwqMvbRnNiSMZ5LBr51GFwkUVY75JCGKYpyEX6yXGeredeQEsCUBmVJQK5mgxfBUtKC3dvFXA5",
  "key12": "3tQFwXc2DUKqmkogJXwnpA9Qoyj15wmfjV3sjic2i3Q6AeEkfebq8DmHdZKog8a95fPDJ17qcrT6T81icLX62mpk",
  "key13": "3kWA7yUH8JGXrPins37fMVUMuuezbUDf1LvkpAiF3SawfPrzzF9KkcGQD8KChFTf21giq5PnHmEfMemyeHCHWQ1e",
  "key14": "3zL8Wn2newgjnDuBnTzfNFrfmEYKtmK9gtk94cEGe12z1vJqhCN5hgx81aAF5GsTE8ZR6T2bvpW5qVK7jLHezfiU",
  "key15": "4tJJQi8WnN9tzbtZCpNB3odw2VpXeryYoWRsLWoCQf1cdDuH49mG5Tg7bWK9d4EFqYnqx1AHgWW77CU2ZFw5h8Rq",
  "key16": "2wuuLTfE3t1R3L7TszJAyTE7ZKCHUo1Q18RkFjpGDgQW81RvVzqqayKwWdcMFdYqqve7ZS55KfGRVWAaEKuGmKHE",
  "key17": "3CUEyVtDrQCjZp3e1fxHt8cneGqGztPet1jMBkX8weAgoTgux4bVWXJBmHNKQLhhqVs163x5Ax5w9toajk3C2YEH",
  "key18": "57Wg6Lztn5n46tkKt6WqHLpjAKoUftkAPH4RcLngG6AuhLJFSRuYyz5aDhBFxokBFYsj5zVeBAhW7JSvee2iG7Ud",
  "key19": "ZAzqEyaq4bpuiPhJdTr7FycBUvdgL3vygUm9U3KbwfccFMi345fMHpSA5bHi8yQJUmrqzjHEfAf3dVV7mcmdPCN",
  "key20": "jAuemEdGSEDMYQ4dtyTH5CX95xdoJ46SgNNRYDpqmDEpGBjPM6g5FoyZF7vkiZUuf8BehndzChapeCkiyr9qPNA",
  "key21": "pP32w768tvHZy8WF7y6Tj56vKwMEhqdRQxbmUwhsPzCC2KHwwFX265Ca3AGfqfj8932dkzh2nhi6px82jxDyhgr",
  "key22": "3PNSj3sBJo5oZ2NZJKR5xG9mZBDJoBYtegWrgvy8maXnp1ecTPZiqWx4E4k69Bx7hDxqY3VVtQvzNfqmcQmSY4hY",
  "key23": "2p6vDCEvc3KuFuxHNGFpKdXrfauGLFC59csu9wspYkoeohBpyTZtWFbHs1qEwMtDQP7qL9RYuFJdCxhBM2AYCVKT",
  "key24": "4M52dmGvaQ4gQRqXJEEXkrj3b8kb1YCfzLD6zQ68VPx6JWjRuAtkF4P896kC3zTqoyhJ4EHUJtptKuzVxvVRUFXZ",
  "key25": "4PNfCgKPAbZ4hReD7L8aXWqMTr1PdYMXRUwg4fb39XGMDUpqbb1AXxQevjH4qU6nouVjvFMkuFhrKLXEAdve9kRU",
  "key26": "nYatSt4MftqFaBxuyRYfiDxC9KXV7AUXQviZhQUon6Ujkw26bQxGmVaCQJUWDMxC3RtpCzHNKJUQp3vPXXsP2AT",
  "key27": "4qm5pUSH7jDbQc6fYoT4BVkkmLMmFut68g8Z8RrJZRFajsqdkbYJwmzemESkngvyVTc8vBLG7Kq1YFYKjKg9vkeU"
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
