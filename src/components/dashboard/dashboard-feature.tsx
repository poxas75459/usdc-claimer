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
    "2xvVn9fb7LfA57ynn61wtPgf1qqX36zEutewu9yEJBTb6RezriLn3F25fHxr7hVhuq1pFDhUkycn4vQVDhTV6stn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5svHxgkx72Yi3H2uhR395z5sVmcFSRSWSFT9uDa2KsV7Zqe2GTHT7AfPVuGWYgfa9PGh5AWt95kdkh3b3dCF7tbW",
  "key1": "4fuSDPK2h2uT8QrWhbLcW57FmUV1i2MfVohwGVvXRVeMQx9RYr5mwnZ55U4wXyxVQBVQ5zeXVzXNRu46c3fTwimh",
  "key2": "3RNQ9tMZD24HYwo5xvxRUMjuuGQdFLujnmpjJkamsJgoXUkMiYFHXed28JirKLjmS6BrNiunk56vkgKUvu9aNenR",
  "key3": "5pSz8H6B47DxrygUfd1jhtYgrq7WK1rP9CBoi9WznnJBXzGnbXkGsGV2NeYEs64JfJhv3hL4N2TEAMjZijZwevET",
  "key4": "38zGoiQLbbedth6ST44bJ72xvzoYLoZNGavJWGRJnPfEpi6UHm2isYsciLx9ebgQyAKgE114sqM18MMHNcR4JDMG",
  "key5": "4CwZzYwo9bXYyKrV3PKTciAKexLiHwxGywMWvXVRzsfquyrvs7gGBYApxyLzLfUetM3xYx62FbikzXEWtz3TXV29",
  "key6": "2V5NvGqivhPHSybWoBWRC2SZUuEwWkjGMNxdFYJm8uUZHQ8LgxHEnu5DgeXDJr5TqveuYk9JprMjn7yU35avk3gS",
  "key7": "5eQ1k2wAvRPW1khkccKPPDW92VxX9wtLG3s9pcrTxbi3FMS8XsTNvjNDngGbTHu4bA1YEret6hFqskCMp3txwQV4",
  "key8": "3sasbo6sYrbqofiAFEBoSBJRcRs1RQPsvcTFPTDvfDk3AkvTgcMsBy9GDK8HMdJUsprBesNTY2xfy5YLzsZm2Nju",
  "key9": "5aCyrYaQiMKYTqDxLzpZeGtUdUeQJVdumsRQYdhH6suCXh3aTpynRCn3Zvzz5M8wa9LrAaEc8H94bzjUafXmxMyo",
  "key10": "3KBp9SkeioCvpxYwjGMF2Z3zud3c98qXiCe5oHaaLu9SDv7PG1Bj7ZCBCT91prshpy7THiTv7A2QjNn6zzmVB6AD",
  "key11": "bNa9CLEBLjZmwCAVsh68S53bEr1XKs2DvkygfxuQowCZTxeYf7nvb877yqaPNPdfq8QoyGD1cZgHakn2GMynUcb",
  "key12": "4Mgh3zHZi68F9dP7QJncrJif9rYMjNLwEubfAa3Ei11BpsLwYQXdp3iXxJf1jkVPERp5bot5dkHoBVGwZ3HDNUVW",
  "key13": "2baGYnD7GMDgHnKRrdwgB83fXeuxxao6PZT8ewSYHRPNSrAv4WSpZDmSQxiWnEZ2NWzfik3QpvDfyjDDJo2x7SkK",
  "key14": "382GhNHDgqK2sUYa96N2hGF2qtS9bZfuhyJpgFEFudt3am9Nx9T6t2oehvi6C8hF5urq58hu6E6wwkZuXJmTQS8y",
  "key15": "3jgxwGMiVZkrRmTLpxcg1VehKJ3uFzmmhxKKeFURyB67SF315E4hVBQSkvSNWSTgq9KfYkka1sxSfd88jqkgj6Ni",
  "key16": "4Wg6GHdDjHApyWazff4GJebn6x2cUX5dKjzZKW7jdQ9LLMdCeJESbC83aJXqRGpxxPK6oEVCyQA83tnMEiKdrmov",
  "key17": "3RYtU5YYKrxkkv9YwHMzCZAe2hrJk7888SNanKCdrLqe4KEJhDbwdwoHjUN5vLB3CjWusmsSADwqqJxFDAwcjBrF",
  "key18": "51uBSAFxv3DX1gVFLdxKZiuB2tMjMsQ918BK25kcL3mhEQG9Fc9SP8LAvbsLy4xUkq889NmLWwGseii33azbnK2L",
  "key19": "22TU5i8QpXmkog46SWevDJywVEoCfQH2Uu7H8t6MZgJ41yqwycpedSvQExSwcCofVdjZMRuitTvp4iH96rftyDiP",
  "key20": "21px2djRm1vGf6u6nEsF5mtPe9AhoPg96T5JTKA9bmNSmrRNETqizLgz5nwYDAPGTMgN1GuD7fMbkodkrw5LYNtF",
  "key21": "4ADqhsX57EU7D8JjruxpLxzenXtrJtj5MXiHw47Ue8n8zATMqsBNMYRpFT8zZMMCZ8UoPvsxoKBA4qVK7wg8k4SS",
  "key22": "37MW2FBQs5YoSTK1x1HzvwP9KFRN2sWGuJd5LD1cMaSFfkDDm6qTcsPqZ6xLABhKPRT459Q17jpFTbxuG7zgMqkZ",
  "key23": "5YWiyLDRoD3Q4mfPvpPJrBhALHNWErmcFiB3eVcD78wU2L3bBBKsMx3wuhmAN4vJEYuKPdZbdRB7paxq52QgESXz",
  "key24": "3pE4fftK1sPxxvtqbMas2NTLKmr9TEE4fcsiZH7Uxpig2uthBeQHxpU6vB4KaEeMDirdLPzRXqejHvq7xGzqVi2S",
  "key25": "5EjGqWYiicXjDrdsmVbSham2imXAC9cYhjL1G6USsp26FC1s2GhsFHfG17zhbLPPXi38Z2vnZ4RCo4q1Z7LoZUbU",
  "key26": "5bsRxqSwmkHz5bJACH2Sp4w1wbdBjK8CCHgejPB9EkrH11RVdnGxeonaZSHYEoMfg2wVVtAxeby62a3SJ3RVK7Ft",
  "key27": "2Ai4vrLW3oWxb1sjzvTME84Ji4BwPFJn5epjwLrvwSSah7advBTbqVHfKmhMw9W7pX68LhLwkvXeAiCxVH1whP9u",
  "key28": "4pv11yRezANMHUCdniR3ny5QRdC7LtiLP1Mu1xUwJY6ZPBSzTxvihr9QEWYjqYVvKi78i3wWp8e7dupX9SaxYd6e",
  "key29": "2Fr5YaQk5EhYw4Zy3wKsxyV5DW6Y24bJ9UVtQ8jQLnuS6JDcSBPRw3Lv2izDt8JAbLAWiRFtnFfxsQrLJszdhb1R",
  "key30": "3YK9gfJbQu7GMi4VNjhuenLguBbhaY28SYFhPcLRh8Z5TEv8Q3yPKkmumZfnNErM2Eh76zj8vCzABGbPTCKNS2vd",
  "key31": "2gTbo8bHk7GogszGT3CT4gzujedUrRBnvQwyNpNMzoBoC5zLLeh5qjHqWB2nVs46K7UijujuhY74R1BfYxRP1joC",
  "key32": "55RHvwz8K97xDCV3VFLmaj5aqMbzZNuuKCmW6cJVdwcutDctLGcnBzHReedPkmvZotvDH7aV9RRVMseWLy4KyHfb",
  "key33": "43yfyrxRU7DZVYLUtMpJsZRT8ZEGR2Q6CfhncK3ocTbjWjTK6yYBX8iykWEVDajRQX6in4tJkyaaLkKmbrCH3FUg",
  "key34": "4DnUvx1g8t3PdmfGtUz5QgaHzvotsLkctFY62RYudhYvMmusQ5kVVJ6v26QiuX7L6TPVUgahKfRadrSvSmYzpJ53",
  "key35": "4eJAaZaaGM2sQeLRnUjmduC4kyhQXmB3cfTwHwCQjar4vXJYdSgfjQWwxzKegBnPidEqcKRU1MW1HZswJAS23EAX",
  "key36": "46S7jqX99wM8vrBTmHQUYRWacxiTF2kGxHNsPVqSYPXqxYVKFnfpBaYFeJggGBKp7wutiZXaG8qNcJKwocqiggLi",
  "key37": "3s1Znqi3vJ9o8J9qh5jVq5CtrG26kVAtJXXoq7r71BCfX2cYUgG9m6aHSSPAE4P8fPDwLVWEeeEHaNUJryeiwN1q"
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
