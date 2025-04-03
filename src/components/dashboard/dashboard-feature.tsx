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
    "4rAGt1jGKDxNbp93oFMjXhfZKKDxVye1wRihRVyeNXVTEXL6K7A9Bm3rRtH9JQEWBWZmzEXWGHXF2oH9LBbzuh7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33smxR5xgSRhzayWnv9q8cQombRmWVFZAbMtA8DEWBZBqfk5SvBW8YFcM3NhG9uxhPCYsb7yUUc3p7nw6w8eLU2z",
  "key1": "23otQdMNSE15vQyfAgQwaVSK4zX1j2f2GxBZ816dmK54p95ohYFyjnueNBvM3hGKqv8EszyLMZZVj8edpLQbD44U",
  "key2": "4daqE7RFW4vMfYCvFp6n71769cEe5jMdpEXkcqb3fGUvfUbkXmaBL441unRpeCFi75q8CakvPXNsWBxzGMo8uyrY",
  "key3": "4rvEBtU78MnBnRVD1iLCa7jHK7fyrGmiQqXdi31zivrXhZhnF4yFQ9PNox9x9ckehgQoaYSk45dnZJv2pRHcdMGz",
  "key4": "3EBoVwfR6JsHV14AceyT4e11s6TLCyxeZ7ar4MRhyjkmWzvrUBwcaGqRNWPr9kdTCBL32PN9j6HrEnE2yESk49p2",
  "key5": "2J33SeMqmDS4FT1Er6Fnb4VbRnxeLtBtYvfn26XHSwyQhpDnKFGqfSwEywjScWFopKkmyrqoYZfoYq2GL5apiDCD",
  "key6": "5tQ1pfB8hg7PmSgLHfHWy6Vu7CbmmyGW7Afaijdn2aygRStvkBM8Eo4RvqJ3wkruJgUCokDZay3j6ZNnitzTvJa9",
  "key7": "5g44Y3WuxRryZkumGK2ru9KVHjMwa636QoLz3FfnJ7LgzvSkU5k8d6gEXoEZi8jFDPJg8LsczpEiFzpANsR1MKdL",
  "key8": "qMAtGe837J8XsFvjeFQXgX5FfGUaoTwcrwEp1vuqxkxAzzzJJHsPC9gjKBodsLSnCJECuNBmKCXUeKDVwRv1wNX",
  "key9": "7qasvYSqdBxJCW9nCXiG6xFEE5PaEPsx4FHM1Xx7JsrjAnwkg2VcEsDfbJuC4CjPpA6XadgEs6F3yEPrEpUZXTc",
  "key10": "3ST1PNGsCKRA4wdy7GPserXb4fP8SiQprZwkGqLYHKeWukqBuVRJCAtcryprBKetDGZWygcezk9MTzp4KEozh7gD",
  "key11": "Lbqh87qQvW4ncicfRUNVHPq9whAs1Ge2NZUNmjiRhcg6A6ouimbzzcPukF9LibB3JX29KxFoz5psbpwA81kyA1X",
  "key12": "2AWcCMWThWK8re4rDbGLA12NeUr5VRVmSN7ErYxCnPnx2ui1FvV3hMeNKELHCXNEjqS1GEUoRtZrcSV7mSZGweTY",
  "key13": "2CdWbiqo68LxFALAGrQe8DZo2DuJ84wZdY18qvmDCEUwWwxf9fiRwRiRMjBHgRLHNmAG1iggk84rKE3nepHzmTbx",
  "key14": "2ii87guvkbj3KVbQpydr4doeUbqFBAty86Qu3ZMfgCFg8tPkmpDGR5aBFeFusAfk7vUhd3gfoCfp8nxVqeAcZdVd",
  "key15": "49J1jLXfVj71H3FyLcSzjveKLBnrFmtw1cQDr46ytPpVtF1qftVMAjUsUcaR5K4pQeWj7JmqfAqb9Lgkh1pa9Yg9",
  "key16": "NUqbVK9JBNFiAd8dDkCiEgFpSF8JQbkD9tbw4L8qfRaKHDh28jFLnwHiJNwPutQrc79AvzDLuPyKQuCYGABuKoc",
  "key17": "25ws9bbF9XAQVChiDC6VqQvQNY1Etvxg3pJKs3zybn83Q5i251nZk1n9FTJqTSwSttSdjbzJ78S724vEKtUsTBei",
  "key18": "5GqjqMsXn3qyB143R5bUuWh39Crjh5ydpviWvdSuiPYyXc32TiBBZrJ532jgAKLVFzSswbpB5vQXsPgxtjeGvDQX",
  "key19": "2xMXn4q61BbTornZXs6rFvDitRZ4hCNTFsB2J1LN371hevpV53gpGfJvbdh39CEX9YK2pXHvAz4JYpXzQCimA7FV",
  "key20": "3qF63rKmumPRuj5dwcbMjxyJEYbjrkABFdCmVjYyp77TCK6S3h4hFGYr9Bx53PWvTrzsVZ68kd2U14bYBjEgrmDY",
  "key21": "3D6sqHdywMMVjx2tmeUAAUT6HGR2tHMjxxSYxhkrS9SRUVLkbrochq2WWEwfRZq7hW8mMfRbCtF2j1oBxzaL2eGA",
  "key22": "2cVws6NYePhPWY138DiNBxxRPZASiWLqPhLBEHp2LQz3fnhLTmeuveHCVWhKWNWwVS9VZa2x7WBHXZuczwkro7Rd",
  "key23": "5BaJBucfsEkZZULiyBpVNnLu6tL48D33bUT6oon3v6QTAgoBzLcJWGP5eLgaV37ik5JmYEZfv64VKmqRY5eciEo5",
  "key24": "2cDqmitti3jUHQfhiSsnm3BxmqzQLu1nsxB7eTCsLWo7o8WfW1E8pS6zPfzKAsk6qeZGYHEJNm4NZRbdhot8UE3x",
  "key25": "RzxxAcJyQEbHoqKrHo712tg5QhwHG2Z9JBNPBgacu4m4E6d5M7dTF6uTLw8C6oGdbKGBR3nUnnFj89APBxwrefd",
  "key26": "5hHXaHvSeimvWCHezjkeMWZ3qpzV2TrhnTxWY1YwUvgx1zt8LPBaLVmzfdHmtTHkzBcWK6PdeeUk1Uwuy3gtuaeY",
  "key27": "5ZqrP9CebkPoK4ujtpiyz56aEZy2YVskaE5k17RsFxxbwgGFcftvJ6dfY4igpaiFFXQHPi5zDDqgt1CjfHPYKEVA",
  "key28": "2uc2BR92UCpz2aK7nNDJ3RHESri8Kee6nGME1kFSJDaqunc3v46iHQ6fQDwQ8q6RCnouUjD8xtPLDz32z2nNJn3i",
  "key29": "kojxi5qfoFpxoLm67VSund4WKEfec1ZjyBZNw4JaN2hix8m18zyi3ZazLMpm8Rx8X4bVWfpoJxWedXDzLjDgmXv",
  "key30": "3iesVVYTafVjdsCBzKAPupaqNpVzi5VJazEKcayFjvhRDs2mg9KDabbsQLbzkqsm4wLpFNjPUAKdHwmHQMghP31N",
  "key31": "5FwVtucCukSjeCFSLt2V97EricdXHwrLCA6RrUL2bXfZCRwCHp13uVmAbB9kmParBpT7Rr2keiJwFN18L3F6jTsi",
  "key32": "4uBFA5t9mZcpv4b6LYD9wvDY8LD27XCxDMbbCgu9of7FtGkTHDb3dUT6SKGiVMAJzTBFREtvw2PWp3oP25U44YMv",
  "key33": "3fzq2cyQ5ZAFpVa9dBeZRVuJ4947yVZYUb13NcF2okCxoVNDytzhUKwFeAFaHbJZZf7pCoAKNbwFYjQv59s1B4x8",
  "key34": "e1AbehaaZg9VEXiyotAWqh7329dmdL2krCWJ44Mc9TPN26RPnaWAWNSNe16meCRaAyrf8XQtYGHJFFeVNn1c5pH",
  "key35": "4V7kVyjEmu2ZuSsWPzVcNjBVLFEHYTNaEagNaa4APX5CxBEJnfrKNgYC1NxKkaCmUNWJwpyJRXMjX3xFmY6nVQjT",
  "key36": "3hPyWJzsJo42BLQPP6W95U9JxF2tLRmFBSppYTA4WbKGMN6MX2gezKtaFHv1a5LzcbQ1R3UsbpA2kDKLbCXGoYpB",
  "key37": "2B7wXkKZ7QmwUui6JEVw4ueTXuC1QeYa4UtBp9ZzGFGXGYRyW1rMcLhoyhWQZ7FFNvsUgK2MjyfhAxHrNyM3JjW5",
  "key38": "Y8B9QJgCcnaGbojiN2shr4krZFq2MLvgfA5KE7cCb24WEoVA4pYyd6wBe71MkQrgzKGVc3Q5vmYPpEgBGU1CzFF",
  "key39": "4LYzhJnbhGdfJ8szJHZYPfW2ohJ8uqB4wH5yei9u7bKdmNPPdnNFwHbqeVYcbFtWjcUjGC7vjp9L1nYfZNnaHeN5",
  "key40": "3cRQg7DLPiQT8dLtfFEsPMjtkj7ecqiJst8Lqsiig5XkrSBzbftHbcGcy129D29uajGSUp7nQLUZhdt22T46Zrpq",
  "key41": "4gP87bJsZi8EyMiutYMLHp27Ab5Kqr6gQMV2VA3rzVYqF9oYqH1urQeQV3zoiXM8FmMs2y7AVzX5VetLS6MVYsYi",
  "key42": "4UcE5oqSLvywLfLbzRepprrmAoR7tBCVmUanz2TVcK7nSbhAfoof1jGHqryU5RAte5Z6Hj4q5WEHEzs8esY6PiV1",
  "key43": "4ZG717cjAFHND35YTnMk1971SF9r3ZrDbB4CkANNTYVNUjcd6CUyNkdaCq9kYb8sKqptZJYXQkLhURZKRSzD5T7R",
  "key44": "3Qrf9MxfyD7qnpT45LuoWA7uK1yYehNh3793kTAG4jG3NS6bpjpW29ZcdJjHSrfezXDC7jLJtPoYjvrqaThxmCpe",
  "key45": "TXjrpHZYuxXdZQbrQqoEqe556DanDDx1hmPQZf3BHETMeaxqE4GxrB8FvbQjzFgv4E2RGu6KiQJBPvGKXrW9zdX",
  "key46": "3FubszoqRvgHPJuBjQbYc2GBz1KVcS4LpcQQqDxXu4hvvYDk7FtMiMd7q97nCvkbfBhA6kZqAfqQBeQJkXEE5pCy",
  "key47": "5Jgbq3YSkeo5z7A2vttJ76njJBo25L2rqKLHGtTJGruvvCyWFQdatB5SAVDkjANFKYPLwzPdvDnV1538Uqbyfyvw",
  "key48": "3i8oGH2BhGJXDnxKHTi4KVoFCD7XzzyVoCryzyNiYTX5YR7Bar6HtaLCNPmRLwFEpMkzBXXanVWS5sawLuUWsw7Z"
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
