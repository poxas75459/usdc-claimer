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
    "58FJZN6EB2pTggPsDvL9jffcD6EmfkKVvS2gJemdBkw8eDRSMPGdvrDhQXD2tz53jxMvqeGt7YKHGmUFrJsAC7jD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t1j63m4WpypM6jZDbCDQprvCZnT9wSnMoq52jp54JApgF8YwGMTD18iu6M99UUzLBYKkXhwxJhjNyfW3GtPE37N",
  "key1": "43fNpejChDuacrHKnK3xXtUUrJ44WXvcv2Nt4weFfAm9KLo1qsiHoXP7xm7fjThyakRRxoRrpePa1c7bCpLSGxuk",
  "key2": "59fB9WydpjHhdP6rMphJL4SSXNfTqz2K7v8zWxa3jEvjZXUuXysyC9iJrfwiKjVLxG3ZL4eSkjJ88PzbAa2ST8PU",
  "key3": "2xLodKetU2Tof64pii6mJExwNjXoRaKNqZuw9QmUQYSnbcYahdBj4ZeYSQqAtr6mrE9URYUJL2MEDqFn5NW1Txy8",
  "key4": "4WvcCZ8P5x7aPsS6ea24nZ6iz2rVKxvg81VDG9TzJjoWnfv5k5W5tA9gwxSMaiJzw5D6bzpmx3ybtvfm6K3JmBSx",
  "key5": "3y5vYBkJi1ojMApqLm1gJvsKnfTyjTnFgvBTwdybwpqoo15FkDXFKtibudQsknbJVHTTepj8d62nLx16umgcuerQ",
  "key6": "3SxMZesrRH9qQX9Zo8D6DvpEA2j5UwoTseMwUojwYdDdDdQo2bRN5pJcV1FFNCjZ6bePb1md3fVKdPnKAKidPRwU",
  "key7": "5hGPmkSND31av4ZKVsTGGP79WA46vRomqxVF6BhvQZbRdikt7fHaGnx8EgVDKvYUSYAfss6bjwpD4c5tSrdRu8Fp",
  "key8": "Q7XH8WMwZ4UJhBzQmcRnK1sSh5jdpujZ3ysXDamUQ4hB4KzvbwoxtyAD5v5ZDLgxkio8tckruaw7aLXGFNFVPDF",
  "key9": "25khGNPj5dLXaEV98YNcr9y6EJ7jqp5UNcKadSKNPN2CHuCtdAGZkWvwPXdqEyFxthWDLWLXSa6NVh2KkRHVtLgJ",
  "key10": "4wXqDycR4rweCqppkng5UbiZkWjrh75VcfdnUMNvMUUy2PBY66YRUJZ7i7n6PFikZ6j59bgsMWoBjvy1T8eXCxsy",
  "key11": "5tWXcnPf3DPc91anjWzUnoZWXD2xvbvj6ABPi8dsKyhQRPj86DSxjp3RdJUaNkR4zA3nrdiyK43p9qVmkVHhuVCm",
  "key12": "7tG8o8G7FzBEn9wFExTXfDJS7qDrVojEJdLyDeCFKj2Qa9ab79un8QvG7eNBVYKv8LN5WhUBWsZjjYqHTZpv6LZ",
  "key13": "9yAi9WZp1d1nhKbW6zti9b2bv6CXoebA475nvkPwaGQyMNwr2zCfh96SY6yaGktYrESAokJ5TRyTyER6ARLzaEb",
  "key14": "33kYf6DDW4y8KxFMD66LGteG8qFdS884LJpvnpQx9msAjzHw9oFpE9eNbymptUDrrw78AdCA8AUFv84Xz8gf3KxL",
  "key15": "4w9htXuKaqMAQWtSKWNQwSFJTXEjNMocmtYUnqNm6bpv1yZZSDz4QM8aM8qk9tFQLd4hxKy7zo4JimZ5QgXDA8ti",
  "key16": "4NZAuiKMMKhXJRUY6ZhEQpdyokywEZ5M5vV8XF8U3BVCheBn1F3h1D6ySszW28fCMzFF4bpLYmcE64nABV6vz1Gw",
  "key17": "5DGEHLs1ArTmSfnevHMjQauRtCpd17t5GMLXRg2UkxSrPXsZ8iFQyHm8auxUEKuw9GsNvWtW8CQXt6zBn4SVjZZM",
  "key18": "TQNYLSLbC41BbaAnNJx8tbgKKx488qr55iPo7DXvYfEysRzgU8JvKSchmFxS8ztxYc3qhGGyBHBSKtRLYiA1xW4",
  "key19": "uQmTDnzBRGynjxhVVzHRV9LumfQuVM6eH8gQqL5PkJUqiSWT6ZX1DSHN9hvuf8r6WBPjGU2Aa6U6Hyt6NmLYPTM",
  "key20": "2v9eMJ8DRDD7oybbZZRu2h4qbXoez1gTjGfojSBrxRQ5pKyHmA9PUE9TPrtJUF2QrurbCmtHue1ocxgx2SzjzWJP",
  "key21": "UCMh9vaZDegLy3V5K1SdBuWX4a1rNGuo2NHXCpKihUTZJKnSz6RVpqobH9z2hJaTqCPdUiQHaDvPqU2fBNcQVCY",
  "key22": "shz6GMSBsG82akeNcNo9r7v4xaGMnETcFtWFgqra84zA7W49WymSWmzZMt1ZJrBvCdV9NqNCch2DvjnM9aGERaD",
  "key23": "nuRSjanLbQxviiavfbMiGAw4txS6hHshJW5QvHPzEPQe7JtwSKo4izWuxqFGzLGzZqf2nBQjGAgkbwcWBS1yuaw",
  "key24": "2Udh4Up8hSKBxSx5yqKakDQWKQnVqTQPfSmdac2HaBbznknsGMUtqTcDGWTw6PLuQwvqSrRuSX9V7ffHN8XrSRCt",
  "key25": "34BB9YguR5S4Q6yyy3aEQimSGTQK998uDpyCERXNZhSJYixr7DMTQwYAcAv3UF66G4mwdy1EqH7xAH9gi1vohDg6",
  "key26": "41oNPd7UuAK4LFtTfWC78i48bDf9AoNrBc9c5rQeos2buyRXjqrchcHzpjJ6yiu3SgK3ErJFy4CBShoR5WayPdUj",
  "key27": "4uYdK9keKei9xuSuFq18Cdtukv9Tkm8CDpS5d97d5xjsBpFpm3AS9j8NQbdZnbJ4sHMQz344aphrfiP11uMnobn6",
  "key28": "2a8c5qyWu2BtnrBVpjfvErE9BLA2XJbEdaYNVCArbr4J9By6oxL126XUheEWZDCTdNzbEvFz1RdzhGVxfrBDxDSf",
  "key29": "zUFZbKVgqLMvZbkY9n9HwyFZcggmTpek7DG2fta3KMj81oB3ZRbPS8zNyjMWv95aSWQScENhtaV97kQNeELjoW5",
  "key30": "5Pb8x7oPKxJrXQ8SD9ggy8qG74a9pZQwCrBtSdFWuHGcbGWebTAvw4aCE9paEounXYeXVLXYyrECemsPBgHq31b9",
  "key31": "QqG7c8wtHwpDJobqztHdyvKApvursRpGfmLBAwDYD1nx5oCYCg2iF9sViyx6tY9n3chmRvjgbiqw2WypUzH3NC8",
  "key32": "5bxRMGAphgqMgzHxBSiaudTHi87c32BepUCQ4chuE7r2uMWNsJ7fGn14ztuGumGZ3GrdSYSEAHRqdLhPGrX81ZZi",
  "key33": "5kKCpkktnP47DsuBp11uSSDjKHEQjMS652uy8xfr9zfqqNjXqswnedPJBsMg52bBSmyztC6nRGtguxLvaTEYqEq",
  "key34": "i8KUfbFUdE7v4ae43mmvtBQH3ar8bWLMe6nTEetiYqdmRkDPuLHF6M31PCeHLp1kekiub2kc9ZueEEe9X6no3Nr",
  "key35": "2Hpyk4s1oBnBZA1bQ8n6XuAaQeBpa2tZjhXEn24JSyMqAgoY1zmVDPnNzSdtSCvDaVL6mKxYF6v2WhA1VVY3rppk",
  "key36": "3BzWKeSAyF3DHKvkX2xxeE2Ux1kDVegki9LVfmGTttiVyKnq9WyhArjyEiqcdQjiA8GZKtLoi6McHwaojvpf2JXa",
  "key37": "62N3UfNzKdLmvsE8PK6NZL2SoVoQEGCz6aKedokXHvNZXN2cvyVzmJsEu9WA5K5eZYkusvzErDfx2nURUbhmreZ7",
  "key38": "4yaqBLcW1DUhoQonm1RQmmH2odWcBVYmDdQUSCwjyuYiFbBBv2LJYAaMgkR52mgvG4GLWMTSPX8h2P3yuWTcduhD",
  "key39": "4MMjm3WJUjKCLcFXUaeWmxPWc1ZXnZYNNLfqYzv65H5MbEsr7y7rrqXHUpe4aakaUAMqZtqVhUh9wYN5bcGznWTh",
  "key40": "3Z8bUj8LyaDunxFk2dDjgJN3sXYbFkCS4fdLS4MvWhkbYneGqMEXWDFqvuxmdjQY53bZugcQTX4ZDkUWjfxVhCpR",
  "key41": "FD9jyLnBw7TRC8wu1wtiKGARhaLjhAbaVKocvEmTfAgT28e7gBYmus7UCLCDJr3dyKstkSeVvJdTZ8oeya5FL1k",
  "key42": "42iZPAZn2MoXkUZq7Wy6sXnW2R7SdRVyPGpPutmDZ8326FhvyMri7sxHeGCMZ4iMDXATSTmNZNJbw1bHRpNbUwZW",
  "key43": "EiqSYkEH32g5gLvKfTzJabJ1eQX5WV6ZwYbrxAeZAumVJ6LhtWVsF7eujVNgQ3AVqN39hZr4DrFUx9fnZejcRBE",
  "key44": "4ANNVsStSCq7Wh2fGB6mCHCT1E4ff4Jwh5oXP3ggTRWqLgjhruDSo2QWRtTAwtLY8fDqHwUCkQfthv4kLhumN1XW",
  "key45": "4zyFtz5uR2hvJDezKLiVUQ1KMU4D74GGu8xLsC6sYw3RmcFVjEovSkYxkLrE9am1LTjz9C4VrNcjeqhQxMSoRa8A",
  "key46": "3idt9c1dvvi1UbKRwnrWW4kpqyLBsZJJ2DSQMg2txwVHdb2oewyJkYdyBpwZWiKC2g2G4apv55aacsatyA5QEr1J",
  "key47": "5jtmaCpDTkJsSCC1LX42UE2fRPHeKAU8VreFSiT5bvTMaNrpvuZ4osQRM5zv5TKtnePThuWL4qMqmr2KTToyXzVi"
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
