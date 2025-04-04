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
    "9YR9Htj2GHTpJHhVJeeCBzZtFSbdWGbrzL6EuhcURzEC2egmbGL2se4Jw9ct2of891z3YfHgkP6N1AoFrSHEocS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPnoUr9JZTogvrzJNq9i7z4nXi5uyrHf73UVzRsQ16vXMgSRkgkLtUVTZpTnE2p8Vw9GHdZrW6aimDAkHtHLNkQ",
  "key1": "4URCa6q2MGHMhRKCrX1AsV58CZgsvJtdUcCeeb77zSNpQ2LmaUK2JzW7trZG9BCPwbVDbYhzbrT2cXMTfot6faQs",
  "key2": "5RqaLVuuGSZqh2jhgp26eR8Y6ZqphTWnVEEmKwG5ygZytz1vLj97VatjppTfWh6115AyGmirXdMVKA65g2bkcwzZ",
  "key3": "5Z1ymwKj1QEhyB6q7xKMZ9hCEHvA4G9Ht3YkZf4EcaMvFu5xrXKgypjiyUUJW4TAehEcMrnn3pWFtX2bTKYRB338",
  "key4": "5YStqUP3jWSNfgQQpdby3ktE7DxdZZAGK5hdDEUfSXVZN8Jz6NCBsZVUZM2PCf9EiHeZV1D5VTfAoYwb7uxrkvxQ",
  "key5": "5qMdjQZFDtLVEZQfy64MDnq34h7kWtzsL7hMRPLjN5tZXXFiGPMVoDzKewqqxswsmDpShyRuQ3SfKcQxTET7FouJ",
  "key6": "3CDygyJFT6JvjSHSAj3Sw8T2bzMdhYpWH3oqSrEbvTa5QYkwF7XXbunvgRksNfi8Vpjr8i28Pov7trXuySvPTyNz",
  "key7": "4ytH8UVBy1MQvGxEqMJCpnRW7uDyPSpQf3uizTrc7sXX1TXJsWzaLkBKKLDZ776dPRyvftHHLfLUrinY1s5E6j6P",
  "key8": "pm3MiGsNJiWrNx86jVse16tcaK3hfuqHfBVrtJYjZ3K4hgjMWi7zLcZWk5nnCVd5ndpXqQtb7pTLSeMwwaCHkNt",
  "key9": "2m93xA77vWjPSESEcmsPUbVaYu7UsUhnpaG19U9Nr42pyPXgVAsZiWsLJMFK6CobgaT2bW7n9yfmfw1fGyY9AfyU",
  "key10": "4Qg4epGfWZUB8PZgwpgtMHozAiVDBHGYt8SipxDAPZDavABjc931JmU8NUvCXycHS3cFpecapmqAyubsxtDvk2Pn",
  "key11": "2NFfKX3gZwE6yJ9D86udqbuBwFasX9dRTjrMgPQGR6F3rEDA8eqWiet3ykUZzxPwPAwD4ptR9Sf4udo4w5jYwy7y",
  "key12": "hpNEaPGQc6mL43kfhDEJshqeSzEU7kTTFv1dh6XWYisnW5DbEpWvRWdwbRQWkQBvDeiysDxjqnv1hQNX9Ki9QmF",
  "key13": "3ZHKMgkT9pyvaBDXbBe25Goehkpqi4yZ1Tx6tCw9NDysumbb6msoK79tDCLAxZiwsBZBmWtxvH72w2SyZNpduSp8",
  "key14": "32pxffkQDU6ej8jRgMZrthMKkK5PTvVv1Um3Ljbkkng9Yz8YVhqxpQTr2s9B7wLfajN5f4L3DoHSFiU71jPehXZ7",
  "key15": "4WyXk1uDXfQ9QNGabB51SPGuYbTKCS8sRvN26yM43C8dkMmJWFBp79UVG3GzcV1f4X5JK1dbwPDtorTNRdDDCbfv",
  "key16": "cidkNm9HPK1GhkYdNqR1MzU1jHQhgo7m95qRao5hiFRrSexacQMSrWRJgFAxQJfLRpyYRcA4VChKpd2FMw1iZZ7",
  "key17": "5aaoAK3GN4ctYCmZJi1h2PbiY8b9LVnqFwxBEZXDEtFk4tUBWdGcrhWzbtWiqqi5CgeR2CNEZB5Fzu3rFztMu4SD",
  "key18": "3vG6rTV2AWJLUKCQm4qEY7gokVi38WPxfQVHWNs1tKArgRJCnNCRcdXeJkzD4kPpBVm6vyML7XRz45vJi8yBN7oa",
  "key19": "5oh8G5W9Y2dtsfWxSWSAxPgUxV4cAeRZqWa5QDPcgtL5mt57f8w8xaa8aVFzs5cwn1VJz7YxN4Fj6j6UUQkDbL2j",
  "key20": "3wHAuh6gv7o5noJxLJDof1mTr8Mdho7Wqy3uV3JPDfFsPmPcjHKqZoqTBo1hH1dqCipparswpEt388MnrPUtkdPg",
  "key21": "55dwBGQ5hF5aWvfVL4kbHMwWDxXKPRyhFgz33gnSFJxmBecWCwmcsTUeaAvQVxxadxw77zAMMoDi1j8Bmp6R6UzJ",
  "key22": "QNVNKvXuZxuHNvyhp5hnvYDsP8B5f4Zb2PYyQDy4pu1uhgesWitrzWfRjHCLhhRhftKNthkvJ7SBTFfvF2vbdqL",
  "key23": "3zJaEDRM9WMXQDT9fffL4aRmGKU1KESF72ALc9oKprujsx8rC8a8LRzZEqm6YiRrgKQW4cHVdhDG4GxMLMFMMw87",
  "key24": "5pp9U4ALfagXnCAP3WgbnSn8agyGJL68nmAMPeogJDkWJ8AkCaExsXPazvw5M4jEUCqf3Gw728AubZVeXkCpqYx7",
  "key25": "2dP3qcumK9pwzATfghhtzUbMgDLpHxsLWRpWwU4yj6RSWf1KFUG6M6FbfJcMBLnU72MXJ4DLfjUs1mtyCBdYDQjx",
  "key26": "3nVwyaMk2RMDPgekyJx4PbN5AX8pgvjH9RuBbzaydMSipfLQDWpi2H5KjPRZMt1ftTDv68eCU2L4hBmAHpVugRbQ",
  "key27": "4bFDnMPJuoatzMN8M4D2wwSFnJkZQGqC9nHiHxNBT2t53THZRxBnNzc7agCf2y3rG6jPFCLwXxkGP3kTo7hHpbb1",
  "key28": "412SfH5mNLSH6nZCodPfEhiJv8vYmfbTr4zoybKL6xF6fQkvv35TEe6JwpaH24gnL6uTnjwxPBszoH2cChhWWTnZ",
  "key29": "5eLFdsH9jXAr6c6w4Nxn1oBd7eXz3rfeqcVQ7ZhFPx27pCuYjdoA41hzDxD1Y9mhbbrsKX2pzXtnwHQ7ZHLwwmNZ",
  "key30": "5asHoCEmAzLXhz8LuyghzkC1mJYxL64Di4ns4ctAVZb8v1XoR93yWL5dKUp6pQtXLD9fKHA8heizpqi27De89ibH",
  "key31": "255gqks1aB3dcSzHnrjECXYw5Xi7uMFtf3rugGoLAjzS6yo34esxEah1J34qLmzLCMPoALSn3jktypZAUiWXUJiv",
  "key32": "5Ye47yDfwZiQtK45WXrTn9hs3mvaLsgiFSjqAq9HudpUy7g4WTSzxLPr1LKZjdMyHYxreiY7RfwrTnYHumCsUYwN",
  "key33": "jhw2yEkwXgstv5vkHzmyo5KKAkKaY8MuRfdqdyeug4vMCZtYCnt9J4DuLMFeqRryeptLbDUij1kUweHdDvVtuoG",
  "key34": "5kryxdyGipHkrG3zX6VXjFJ8AHqTa4Cb8M8cutLdHVnU1KuopyNSFj5LJ5YjZb66owhiMpVbFHvKJKS8ivqJafYT",
  "key35": "4reHaqtUXsm4RJ2kJr5upcJqtdqBweVHShnt6YPNjRcC2gRkcjtBZuB96cVgZQEVG4HaL5ZBoVWrF3CxP1YRGX9g",
  "key36": "5a4zX79xEXCrypw78euLqQ1eqdbF38Eswn1m9PBanAVnW1f72jyH3WJgtEVJ9pwPAPJmNEts5ksjCC49TFtx8bSG",
  "key37": "5H1j49VyheCTnrcVPaQEkGGZRFhoS4huH89J2MAdZrB8xzarPJ2HMVxqqBZZdpwfPL1BDYaQJHUmeU4PCofYFkgr",
  "key38": "2DCdpA3g76sc3NUrj6NiFhF76B6v2v2TJGFdQqGDQWiftRXkWELrG1ygD3qiJkF72Tkj7nKdJhiBKhf1PsabV1CA",
  "key39": "9QsLJBXzudMeq9c3rBRiwvveysa2kbJ4QmD3SQV7YAy8g6rNDmacbEBd5M87j6yNvc8ZvuStHiTCGw1F5ZnbFCK",
  "key40": "aJYNgszTpVKp3Ya2wy4FWgZDYTNskpomZJhVpVMnPWWkT1EgtadMdGBFie7zdDAcH5yMirgARJtLF7b5QhUeazz",
  "key41": "5MWS7VzHK22eMVWjCFyAaFp7MhHD3pjrRhdcRVxCqd5k8d9VcavuH8XbpRwHQ9S2MkA1sh1ttfaZKs7WgrcjK3JD",
  "key42": "55SUTtpckspaWcpbP21aY22GinwqyydHDpoeEszQUpPSaphsEpitQwYkiDW21YqmtB36XSQ3Gvood2jrQxxYRaQ1",
  "key43": "5TBPpLLVvCQBsFrp71faKxDQJLfnNNM73QUJBgviJ34mrEW1PfZ8aEWEZxE7uNuog4994vJushNr8ATpzyerapLb",
  "key44": "tWXke872Qup8Nb1jR4AQ4hP86roCVjv2ozE3yNMqLTWga2Bxa7ugqdBxFkienHDor7dLyC4yQZEgP8XVoDbAjcY"
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
