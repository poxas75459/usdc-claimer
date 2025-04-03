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
    "WwjxAbfCaT43Npgp61DfntwCBagFgrYpXj23CHQ2tDBBhgE8nVoBCVMCDWzwnfsxJnW3Jx8GcXuAdUL2Phpua3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gfqWcbctY7Fx2JB4yoTbUhgxFBBFRt3xsiuCtsDah4czCfMJBV7jmt5Bi9e4potZoGSYsgGhudMHCf5tk6N6xd4",
  "key1": "3HPsbrG3HpSzqkZWg32JPkaN7Uo9Nxuqhq8WQM7GECYJMS9up5yXHZWNGrPEkChLjmne8hJ6TM8FVZxy1gvrqjdx",
  "key2": "5ti5d7CwqHeiZBvwgGbPdsbDEtXrnf1nhChfvEPcEJmvAvgxVkhUgtnUvHJYifQYi7sG2LPVCquuJUZuwqNWc2Lp",
  "key3": "ZMThDvHMWjFBwj527B8nBbb5mHqCJRtvVH8e3PoE1JhodafaM4YHybiVQ2NaWmMB6Qmfvf8h3vQ9ooWgLrnQ5yY",
  "key4": "2Kpr5nYuhvSYAFPiiidVBhZQnu6U2vvUQBvBPjj2DsY9Rj8UZbUt6hJrUXFJyKPrLZpyHHTn7dq5UBRPyXHonaoZ",
  "key5": "vu5qsiSB5DDZGv5YcY8w1b9n4v8Vkc6d6Z8mMuqdbvpdDY5MCj933kBGTwnerojihChCZcvXkXjGYJ5zj1BqsYC",
  "key6": "5dvPvLyBgfDF1iYP9CepNCgmQLjoh2Cb11zjjSqKMbz13y9NATCA6LdUWSxxbhgZSgpN1g7qp42Fccx6VRyaHe1X",
  "key7": "4EgL4oeZwC57itJ9n4MVYZkCKZKLLipWGy5i3LSiAWxAc2DRdLSnAPGabfcypU3LnHvGtVwi8B6Ky2sdkUGkZUxB",
  "key8": "2JwzRhwpHCFFLpeAsdofcTpoktX8pyH6QZNzaWq7KzwtuDUWT6EoQnGdhAW2GbkaiJQJNKVE89qAudpaayz1sbns",
  "key9": "38SQ56vk5h77QpzQ2oTcMVFfn4bWmh18kEEYFDoLuKnNUsB9X7foPM7tcXn1p63Z3QkL1A7BajRbo6iMx8rYiQR2",
  "key10": "3dLKwuJahSMVtJd9GqykZJRmJxh5pUrvjm72ipwWCbo3vrVbq9cqgPJq78S3wGckaeeGSTfiUYZ47AFP26anst8W",
  "key11": "4adUdya5qaa62WEgCj7cx7jFfBCWfRpFTR2TdtDxgLBQdAawUcmXy291qRYLaxKoU3fiSMK9MYEuZn9i2tD3Xse",
  "key12": "62brkqSgS4SWq8MeD3po8pfPMwaXy8EFMiBmCaKBMVo6iXVJLyqcT454VHHZ3FhigthdhC7913hbJANk7FixyYn9",
  "key13": "3mywZQEdQx5Zrd5Kz1eTtC1PdAkCnyA2qXiR17fyAv87q9ZnPf3KJgqspVQ53aYZCyezVbxiDJXCQQ91i9gSQBJC",
  "key14": "2oQqscVvhPBEfvGxDpn2H98qtV5wE58hBoDmNgWmWafDf9hQsPA9QEcmPhhhp6MuRzxkWKGMPzH1GCkenqyrWTgm",
  "key15": "2qXqeFX2pYWJjXNheRw54afL5M889KLsE7DufmvGx2YpULtY9ZyfyvG8LSEQoZ24ufupRUNM1ASKXgbR8r6vLRq1",
  "key16": "5iQv1PtqKHMSLBNs8enT8i5KMbkbm36UqNM6KRAdW5mWzWXQBCiN6nTupLU5CkNJiKg8srvvvRyEKf1ZQozrdGam",
  "key17": "3upDw777Sr8tmfGGtTdd1NSenVMu8N2TGhUYb9vGVbz5KwVUraxUGFKqJgzLZTz6HRyt3LoC9hZmPRyQopjHRi81",
  "key18": "4qkpjtvCh3vDjS4GBRjjAqEL8qDQoynUPu2eU9EBE7QRyTCahXgZAJZttvVyAew8xS2HAV1zYkrD3vtYWfDQKfhA",
  "key19": "3VfusmwgCYYHLBtSaft23x6EhsRm5kaNK14BaQ2DXskrJ4VRsT4ucQ8MrBUwz3a5mkj1shHbnfkxZqnhHRR3gqUS",
  "key20": "2NNqk8Srmni9oCkJK2Ay6XttCq3QeKTLxawwuNm4GmGm5WbdMuoUT4pBvfgYXnivneuKUpLLT9LbKyo2opBUaBDh",
  "key21": "3J2EiCnNdRAkeDUrwFW1UGh1YmoCQ2d9kVxq2N79CgP3ckFFezDAGa8MqYt5dUnuhXXkMq6oUExvUacV5SNLTqbU",
  "key22": "kVbkQMrPkGfjGgycZDHRCpbR1LNQgwDp7ztvGUcDk1AZvTzyeKVADwao5DTFuaebwYugdRcppEksDA5ZXBJCNSk",
  "key23": "2oXDrLuKKJKXqcNg6bEn9BSPvBnfFpq7FxEVXfGBfSfnxcFgZh3AeMyUdCbeXP9dn3nQrPTs8FnhJ8HArh7oAsDY",
  "key24": "fbxCL1DCR9MxNxMzrZGBvPKKAkWzYHzCnQZ4X1eodTfTeQnr3cKsvM87ibYoYT9AKxM5szayMzQPvjVSGtCqYZ2",
  "key25": "DkvQR57bwQARf5RSCDY9TTUUuFeX7uQTCo91cn8v4P9zj4tQpyN9hkisaAofQJ5m7NnvdGs3m4WB58ZKi1huUmg",
  "key26": "jLEDHjRGiPYkbVJWsw2mEMZXiSZ4DUdnb21Hs2pyAiQjrwRQnJTbgr5BmFT4boDFAP6xi2adgo2tSnLHsS7zFc2",
  "key27": "JJpjqNjK74UMmNb6R5v8sTrrAwnSz8bzj9fxzG4KrRTjH1Za7De9MwBp6jTLUe4iBPuVT9aHNNkRFDs8A613mhh",
  "key28": "2Y4Fp4kK9tUigGqFkRGKNG4tBQ8juvSB1LNQZy6wq3okwTGip4QsUuU2FBuLTTUdPovUxddYkR2hVny4kdZxkuhF",
  "key29": "5KxopGbVcso4n7TZCg1x68eaSubB1oDzPRR9jhsHXj12Uhf3LEnokzAf8j3ZuKbL9ZyFQGw9r9MRcNUHNkR2JLmF",
  "key30": "2mr5ufHR6s9UqoCwQTiy7jbsB6Vz7TPi4GEhMzLXppLzaHRNDaQDCM8PqCqZSemdz9rUUig1kXG997aoi4Hj3kbe",
  "key31": "3GFqBMRoHYQ3gUEbBdjvbGwpx6JJTvLkqumjEPqh1JP5gyegoRCfkmVMATqmMbUHZ5LL24xFzDFmP93AoxbdBgER",
  "key32": "4vjRDkGgYvZdMxiRhbF6pTRS56ETNGSy5yQtqHKWyog9h5VG57hAkLvXW4uKntGUuFXHyTFeYmiGL6zPLA7zArNM",
  "key33": "38CEsirBZnKTkJPjMooPq8eiapTufRozrcmuVJJJvrxJ2D6JWAPnPjEQ4B9tKWZbm5GwcHbq8gGznrp2DpdbTSj8",
  "key34": "5pTTznxgyqCgrtpCg1MNtoZcLgfJupUoDAfAKvujdrvstkw6EaNdXktXXpNJst7dGbH2jQKDsdd4isTiska64BDq",
  "key35": "5sNenCfxjKRzj9QEQ3ZeT1bNYpwKNnUw3NHi9BgnsvdDunxbjNchtzLvLokEVHYQAZPc1pNnU44FhUcZdNZfLfR7",
  "key36": "2ABhA9UgF6vZ5dBeAWFQvJ2HBjsJw2B41bsUag6k4xXKEKqoHFaNLY41BQMHpJAGpiXQF5ztrkJDhgFQaBgscwaw",
  "key37": "54QVkiqJ6PuVV668RxQJjsskDWe4HB9cBWR94hNap23JxgnYyARHiQGNFp8itE3EwtChQme8rcjVMQYP9tNYD4FG",
  "key38": "BMe96i6EDKt9DtQjcPVcgGEY9SEktWGmVGaUWPkZasc94JnjKiKfy9J2jnwLWrbohBMMAixK8QweNMKHEM31t7i",
  "key39": "5ayChpA5bambuLWCQCfBoi6ruqZkxg6Lxo4sQDJ2cPiMoA9uSy7FDUrMTgTsdPYAjQgpknHj3YL9NMdu518Q77np",
  "key40": "5ypahkhQ7vLbWUz1iuYwGHe8je2dxUY9UdhzJNfqFTEttLkW2N3AYjj4sQU9BLQfT4ZjRZsAFUEHq3DpyD8R1Pcp",
  "key41": "4JKCqWLapd8X8X5dY57MqvwJyU4LbCwM4gFHNyCntRJerWHfmmPASqKE6P1oWXNypuoFWANNtSj8Nb98XSgMhZVr",
  "key42": "37Tvicthqbe952QmvNYwWABxsDLMZafPwKij3KTJ5j16wWmfHPDWELhC5ZG8wqNF28RVGe8ZnEk4HHqe9rLHxtRH"
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
