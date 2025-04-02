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
    "TDh6YxnCorN1gyQSQzjL2yaMY5yQ3HfGePn4bBa59SZqr1d6Vtxu1E49tUudaLnhcGEr5hvhPaKnfghYQv8eenA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57YuQat6vnk9GjxNU1CiUQsNpSaC6AqAASLX8AyDwdH7zkEXXKff3JMoPYygALhDQe7iDFZi67sKA7XAmxETwjgJ",
  "key1": "tAFUaxFKRYj57R7X3eqvuR1P3rMymbBrBSPVqdnWGBSM54BCoF2Q2e31FZrVUWWmESwmJHoGrRVmciWa5XWYUsS",
  "key2": "tNsr1CrWHCuw2ZMnMJsQRJddo8u3SFUQGQaGzWX8jh3Z6GZtKUyoTpdV553zFhxvUxrNNBE3A1oxvb18p5d6vbU",
  "key3": "5R2o4MAND2R3HCeKK8G764o6D91Enoi1ev7oLgZ88tZvEt1gVFudPSSkDrHHL2Uyn8JcgxGmVVZtr68xH7bW7JXE",
  "key4": "5tvMcLBWehHGbiyc5VcTswTwvsS9B7zLG95c83F49znhwMgE6yUSLZK2h2qvyUC4FQH3vfnJXKEXdxJUgP7Wt1gC",
  "key5": "txCPnrWhknQKyAhHr3KjVsmvb2CkQDRooDGEfJxnycjVqm2US6aUG1pAWAmiumSZu9Zq22cVbGQiAHH93yQEkvG",
  "key6": "52e8ZEnSQ5Vb54kj78xZUK6EYd5esTj468R6fMivnyDArRMPYtW2AqHFCLfRV2apFWdLkiQumoP38YczXm4vNFtS",
  "key7": "2tw8bvswEAoPuLGKkYrLVPs476QwNRAHnZp6nscSAh7UP1jqeUAkJzE1vez9jEBbkdwunmtLdDsJzKJtqC4eQVRp",
  "key8": "32ZBQaG9WqmpBqWFNAt4AUXj4WJ6hkQ1vFFNtNiVWcEx7mieAtuZ3yJF1cDP8ufUscVMVbn18F6pSnQ69TCRDcF2",
  "key9": "5AmBUJ3s9dPYdQTqT82qkk964sZN5EKDFcYCNoYAwoWqjfC1f289jqUbN3K1HN1SX4apfLHUzNG13C6zgA1uu4qE",
  "key10": "gmSdm9WevB5nM6dvPH9AMumkrvocAMv53CU87FiQn7mAHvASCP8t9fevoKTuDuokiv4FKTaKRWrvidAa2GXDRAY",
  "key11": "5KKGh3fos5r47PCDxUTr4JRarkMebguS2Gg5GFbAgTu81qVtWoNELvDjdPBBGsJLWMkDmsykc58mGdDEn8NyC3Zy",
  "key12": "5UgL9pHikXRQhHAA7QYf6dLTEPHT3hsvqfC7ibR837fX2gLj16VhNSpcbLdTQZC5tSvowTtZgfhbksf9w38pDN6Q",
  "key13": "3jYMcDxFFzjrbCmwHiWiQ4DEx4HrUaULEfsx4EXEHGzuYDyYV33zQp1P6wT5HmJE4fsNPdbi47tfekzLqKHEwVZk",
  "key14": "23Vkt71uu39BDMongtxfpHj1ZDPAtEAqmMjPc8Aet3rZ78uYJbvecqDA79KKhov5wfBoFjcSvUEWuoHVsw3k1fbr",
  "key15": "5QhyjsQP12hdQtcZZZo4CvMZw5hxTjFMh4JsrA8JDQ6NofECkKgG8T2JvkYFqbCcxAmNW8m7dEFeTzSiFGPJoG6e",
  "key16": "2E3VgbSPh6V6QmNqWs4koQiX2n3HhwYA3x4Z7HPXB8Wh6KGev7eDyDnbrXcNCeJbs5ndtQn4FcBBvJDsfcR63bX9",
  "key17": "4vNA88YhHVGuXWjcxwVn6nXo4j8HboPFeyLtdfWiKfnTuV2h7JzsQRuvQVjESDvKE7ucQJitV3EzonfopWUPsr4M",
  "key18": "x8kvE9LjvLYpJxU42MhSiuwyyMAyZySSsmkLRuDUYGj5SmjUzSMgszZNwu4FQbk8aspgqmfMEw1oCd3DamDY8or",
  "key19": "3TeW7oe7dfCC2CdmiNvBNYCJc1NDcUtdjPamXDtK3EJ7YL6q3EuavrSUzSo29R2viBkHNDeu1oCB3n9ppFTczyNv",
  "key20": "38Zvi4e3zGxJtQQcyrgp1KxTsqj65YN9FaZsZYyuPQZ7spvhjq199QyugQznFgXeKavet3zDywAPdm4kxd1d3Uto",
  "key21": "mqRHE7GoF8ria18xp99osw2LMYyZ2jvY96t6i7LP4rx3RaZG8XdM7nCjYBrZdKosKPoKnsjoDWEANBVdQAsbTAo",
  "key22": "4DFzJc3aruRgEYXjqKGj2fS2rjMH5RQ62KRiGrWbqakmqHEyqoh8Q8yAmyLqmZPHQ5aaSqEYrChMpq3mQPDTg5AA",
  "key23": "2GjSM4Nkxpze9SWDWN8HGCYyZ7rxneKCbqCzWK5ZBmeezXW5d8aD4DHQA7iMFVzL756JQoqm6NESLU7n1qAkkG9a",
  "key24": "2h3nVaEQV5SWzEuoKwjQvRFmvGzkWDb9BPF6TNgFqiwNFcJibzhAmh52z4VdcEqoMLXguyuZNh14Pkz5eiuVGKjq",
  "key25": "3fGrZTHjuiobmPEVSRTmRmHG6gZJH7hWdEzrMvUBqyY3c6bVHmfdoPUXWw3iALTDfuBQM46khzwF6ruWGePsNv9e",
  "key26": "2PWCYLzdwi2Ai6HKsZrzX3Ahk8HAXJrWZQ3juTec6CPF7518h9T8xf9scWtU2UjR4QHnW8qJ44saE474ALPgTych",
  "key27": "4cG8s6Vtpiso2wQ8Qqi9i58T3AbhMSpjWTJis2T9tMqTyEFdmjf5pMwgJmJquWHgTrEieebvoDFNurFzj2KiJ2Ad",
  "key28": "3SW19ZBGTnihsUHbeWLVkhVxgf4tTNJbCxcTBGR6zukNVKJgzsU5FAx7jNZCJwDLxLrAEu82k4LHAp2FShBwaDV1",
  "key29": "2eUZ65FD7FiSF4xkEka5qKDk4nAyBwPjSr43GYWXRNPTdQMVVCJEPceQzLVucwizLTA4zy6CjA5cNGSDGvsvLGs1",
  "key30": "53e85Vtzjh25KMxkp4d684aQtc3PMb8jgqELWYu2utp3G3TbC4VSA8Dee9YDnKCkdYeHyHkiJpRsUuMxM2PhK1nT",
  "key31": "63omccoY4psJU4oBH9vQrEd8v9Jizf2GEAJzU3WBxBhSrB6ehzXnaqaRBUvZUsP6bArMpWsZ1nWG7wTQpTvEYdup",
  "key32": "2NKkdLegFtEzBuuTLKdZdYedDD7a2ip9jrXqwhcAGbmyLB72XHajANm1zdPcgi9qBpNo1CPJYP38LcNm2s1fCttH",
  "key33": "5YrsLufnXLfyNwm6cGsfdLr5ZvTS9RAnoeH17bncpXAVopTkKc7DR8DDXxmeL3x7NNZnsovAx3xn7LT1uBKvrMaC",
  "key34": "2SYS9RcSePZHEotWQUsnwAM3ZytoBLPwr3MHULXbKsMtynawd7QD8qA21TsaxjKWN58hQ9e8nxHPEMAosqhs8stB",
  "key35": "6HaKZmxNMrzCzLMLEQAVzq9hteexyJwtPWaBjez26F377D2XCw7keczqaxdGo6ysnj7oDWdE8UGRzhShMGPGmWB",
  "key36": "5KFYYpk1QzCvSUZVjgmqqbenHqY2p5bcnXmpSn1SnxfVGKz4Yux3ZWfZCpCRJMGu2WtAZEU8ARGKfJJn8b8kRamo"
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
