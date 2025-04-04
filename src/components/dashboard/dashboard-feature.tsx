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
    "65LPd9Jver3Ujg5sCqt2taCcRdBSNVmdwxKzkCwTCmTc5xUKBb9JqqniGW8uCiUmdbccDDo9nfHLD63cudpmfkA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDs11jpBq87oyejYvoZyrqGTjWNUT8pxznEgmjyP2tByPymAyUk2e4rompwpgNXGWpXbvoXPZ7WQsecZ1EZH4h3",
  "key1": "b45m7nJnqTUeCG8k1qznRMQvyg4PCbZMk79HcvgMB5owEVVTzW6StuiyafyjupUMd1e8K6PVzWq38XVVMwvhmaf",
  "key2": "2epsu1Xoib6JsqC1q6izzyNAkgof47FE1k57akN6HSWNCMknDXUetESmkssrfwiwJWRrecowbFZKLgYUFS4JN4An",
  "key3": "3Y5hao958j8VvwKXCayjsQp87aQKh3eiKyitE6fY9dBTXHUCqFSP7QwRHndEMGozvAhZ9QU3rMtM1GXXuSJ5pkgS",
  "key4": "5A61WQx4sEJbf7xVd7f2Ripx29wiyUEi8daYzfE5XijTSY4p38fUr9WBCyqicXAgazFqFdw5BbptdJUXfSP4cNQD",
  "key5": "5u3YgB1Z1rrScCiv2LB8WcrQeDM8uDA2mRySFGDjscqZpJr4JTHs2ZWxdfJWfsJkevrjdBipawkfQSpYGTgvZ4EL",
  "key6": "5Mp7z3GYRke6hvz9mBwMsj39zPLh4yKPGYg4MMeUcSjpxmzRvubTogYsh37Bj7Dg5eENNFJaqtoGhJEpYXhXtUdt",
  "key7": "5BRZK97TuKoojzT59urNTQ5SKwv5pC36hwmGwxyQPCn64ZAGL2b9fWnYZwWKg36nrLgT9Qo9sm3vVYdrNLCZX61y",
  "key8": "4SpwXnnpjKq2eFsf9eM4urdTKMKhBFviVW7cosY5Xx1mmBn3FXcpo3yJ3BhGZifye1L5nDRYXknjDf7s6mNjkT2Y",
  "key9": "3BPg4DjPWpw4GbsPPPige9HNTEGPGtbpiAhdv128TgNBjLrCqQ53nupS3KrpugbrKjvqDNXjYxGqmWR1kmPpYEm1",
  "key10": "4Xpwm94aBc9B3zTnUtdwGfMfqGAqRNy9kQxgEfTqoNPYvHBnNNKeERuPPxQ2tNQz6pfDhHX1ESVxVh3v6ot9LjRX",
  "key11": "2fTm6XtZCaGrBXpk8fokXYxfaL5ubLKSsNrvias6rf44fs7voihKdgmoUq37magBMUcU92pt5t5BNwrq3a3HV2pL",
  "key12": "eez7wECsqZDBDs7aZnrSr9hmgWuvTuQ5xtQvy8bHoPsyf939EUkNS8C8nPft1maZHYAsU5b6harqEYFU68Akwn3",
  "key13": "KfhS73A2VbwXEWPaMVf3w1UgSRyfxiNumEZrff6WDoYhj8qBcyMiwsZniB2NsHFpnZvmqPxrr641Qskoj5Nmi6p",
  "key14": "W89GdbtrGQyebnzsEyrhemwEjs4cV4pSNJgR8D3HFqfgnkhR3q9MA56AyaQuqTjYkg4poj5XNstCYFsMLyL9bkQ",
  "key15": "46X41n1MdD1b3M9cDWb8iTfpvRxKR6FkbqgaTuNJBRdmgoSPtgmA5gmBNyJwZwPbTHXf744NdzQURxVEzHWaLf41",
  "key16": "4NAWQMeCEdcBDT3mjCimnmsoNxcuTGs5SobAC1ba8RseHxHCMScWdXNCidGFbiTLsSR4QErqPBjy9m1Nm6fDugTQ",
  "key17": "5yAb73TNjy77J4TwCQCx3nA67VqkSNyb1J5Z5tzcVXsKjXTVWp7xL8LhtDjbV7xVZL3Nu5KEaXEfjN9vYJ9hvicv",
  "key18": "2vdTJv7zZXh1MDh1VuSgoEdvdVrcDSyt9Xu2sA57SKyU3FvNHks7Jrv5gM6bNPKCqwWzaj6kVknZzwR1qc6ju2jJ",
  "key19": "4s4E82mToZNcMFYYp9aEtjMsU5aYqKk3ZmXQU9ZXo3avgCgUXASqV3nAYLTMdBtcy5teYQuEwpB7c3nVptJnj9fa",
  "key20": "5Zacg5gJWYT7Pruc61dnz2pRJDfJauTNdqcg9fxuRpmnJuezUWApUvSHzTaeLGEvnhs4tGPVoHfHY9QXUp4t27Sx",
  "key21": "4VAwCcq5ZE8RkTJmYwgWtMnxo67V9aYghssJCnnUNsbYhuzdzz6tZ3SJN6bKuqxSY95j8ghTv3edTnrfwSGd4Eue",
  "key22": "3wVKASq2vG1SHT2MRhPS7UjHw8vVVZ9n4tgPY5yVvWj1mUYnvkYQw4oVMMxRLdkgvftjuxJaqDyqiE33t5Zm6dmP",
  "key23": "4JWhpci11UsGSeVJM6u496FmJm2j5B1VGeG6UZziSw9ZbL8H7poyqGTREhCXX3MPeL9NxSemXgV6BMzjmDqvb8qA",
  "key24": "e7AX739pLYmfy7B5anXjJyYQKeEwYRgzsmFU2YxzfWTrDWtAoJ5NXNqAc2ztoX7fbfVMPJfe4ej3DJDTS8DMvW5",
  "key25": "593n2fa1veSQ49thwKAQWCFUNZ9ekZECtdyBpf2v4jzavb3fwbs1PAdKzZoB7UF13iuc31KNcWTZZLnLF7bcjsue",
  "key26": "64nLZUikHs8v99WFHerWi22Ek2zsmRwraq3SpTFKs3JCU5xU2x1cTay4vcPEaMUUuqa2MQ6VqVx5PLSJrhNp45VT",
  "key27": "tcct7xW8i1w9ieCtGFTrM44oQMpYDiDW2YPvxpatiZRngiWodqun2Ef5xcKJrAGt964XacQDdCvxtWqSJnQtAme",
  "key28": "5kaFnFgo4oWaDYfmHjmEgNM9CKGydPM6rfw4hBGTQnYXNnm7CpqJdoKBkkJwWvBhScFYxGTnR2HbN34Ub9mcd7mf",
  "key29": "3ufZtZH2f7KH2hePcSEzTkBi7LC1d6obZ1RaddPuDsCKjmAN23sQ6qe8NWTZqAJVkeKMiw2DBBdkwhCenruPc5RE",
  "key30": "z5DX88kQZtmurgjQCStyATL5wowwqfKsQajxf1Aqv8bX5BeohH4xUudimigC8fQVvTrxyNNNAafW9fQBZ8faGA3",
  "key31": "2WKKd1kHFdXDTpFKfvTxiG49k19k9A3xfM6cMUSmEpL5PYpR6Rh4XgwEn6y8MCvuWcWpVvcWufuudyusVhZERFne",
  "key32": "odhbMoqqYqTxaovhStvQ1d4VT4Rsh7WEBBzj4uQnK3WbbAqTVsM7py4zsW2nwHjh8XPyZajvN8uKMvdEXu1KWmN",
  "key33": "5ypHzBE99QvLxyTXXu5u5gEwqeHLaHoaHt4azP11rfnEKAxAbLe8BSxrZTrgFxR6CB66j6b9b3NAc2DgqXez8f7R",
  "key34": "24zZK8KEmtg44XcpqdVU6CNrSAoKEA2RRV8YyBgBC2mpv31PoaY4m8SndeCT4M1QDA3RRXLzRPgXLevzm86yUMSP",
  "key35": "28pZBF3R9MB1PdHxTG46xST2uSHPgDwM792b7WSswjiygxfqXvoM9jnfc9kSkTiZETtwU5Tq9VkB8tXSwvwkDLkJ",
  "key36": "5TMwGFF7TKsiiH9uRLisXndbZVq4Uott8ujV4CSkiq5A8JUnfPsc6z8wdZhPbBSSyPZqxCP71XtoqectEa6zezdg",
  "key37": "5teUVMmZyjRWcAXUt7SnRgBSxVTjLQ7EyGHgk8V1aDWooBcM8KjeoKi3rP5SwstMqVMEDYNNa3t4RiLZVRt6MhjL"
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
