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
    "Nka3EyJQiPJyTYHZg3dQubfsXoutCUhQmRAucRUSpYD9oHBYx1Lre5xbcVKG4U9JFNjtcFCUDekD5fJrWiCjmAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQryDevqgn6S9nt1jPZGS2vBDyNMhYWfBdjSGKgN17phcs8bvmGChxnz2MFV7RS3XXDypKn4cipJgZSZWaE6WAo",
  "key1": "e8BHneVwJFR8duZ97QzMArGJSS1uJ7uigedu6sbzYN7rMwkML2crX3Zgj8umaRp1ZaAPe5eKHAzSSof11SdBcoV",
  "key2": "4DohVgmTkz7iyyB2j9cRGPa1e8bC7YPXvuHpt7DfWpraAyz6UZ1kwJEoYjGY5vtLPR1wAm162pjc6s1LF5GJjKkP",
  "key3": "3xt3jv2QZ7nWGMfj7pmEXpbiApTEmHzt1d9zmP1WfZB5d9Ns6mdcnGyGWAAdic4ZjDKeUT2fGpZn8YYiSzpe3Sh5",
  "key4": "4me4qiF1VvMCQgowUdxhWm2xj5HQZGLbVy1sfqGuBJ6BXS6bBqNTHqRo6zxPi6cyP5y3MortyCotJb7M2mcZCxwo",
  "key5": "3qWo6ncjeySufb2AgWvHKvhRY7zbVN1omUCPaqToZQyeroFaxFBgp2yA9aRS3ojCPkm49Qd8msxMwhudR1Zgitpt",
  "key6": "4RAT9UHVZE4vJnTDngFqqNtkP1zXta3KuoV7p6eXc8niifbMqaGHJycbVCKfVK54YYkGjCdTMPH4LJLNp2kb9RUw",
  "key7": "4NiYF7AssNomU3uixXa54gGY8C6diySrj9YpA8cc6C66zUJqsR1qTBxdvnQrgx85MRwbPnSPeijmqFc5DdSmCFuE",
  "key8": "faAt5ZoGUMN36i4wNg4L4HJGcXYhHY4jaaAnNsFF4scbr1VWbgtcNtEkxBSUMW7YcoG7gL2SAwteLyvb14zPCbS",
  "key9": "4xfwxtSXBjwhDrQpaUDz7WiVB4sKptiYG4az42NgyNiJPKzZTpiYm7oCw8ar2fHeJNGp1NAoVMzFz5qNsnaC8HM",
  "key10": "3xXHj4VbGbf6qHKDcLHRd6ByJAz9FMoBgMwNG1E6r7s2fLWtruHq4zMpbNDrk6k3PBBJvLQHc4i1GUhW36sqmFaf",
  "key11": "4fkRRjzunjzZ59Z7TLjFeCQeHasBbwpQnuSpUo9pjbH4L57GrD7zMJ4v9mgurPH2QVU9v2S3owr81kHP3Yf1RRYv",
  "key12": "4k2hiuMz8fb7PvricSEutH58BRv5TwA8GWKux2eQhzpDkYmp5GWuFzt22YSHLXHJEEg8mqnhHsh9KhfTCx6Cmdtj",
  "key13": "2S5FG5af3BTg3b4Xnr3DfjtKe3dpKcvKAk1BUiQqRpf71PgGV5FYsowaNregF53EwGc7qgNuSRDavFFX7tuRTRCm",
  "key14": "385nUaAunFUbWBA73nx9ycPJra4PpXABf7Ngm7pdTQPBd5ZBFa2g973WJJnXkUrGqZoGFhwdra5WxbcvStn8REvZ",
  "key15": "2BZjr4sFFkZUhmZR5nwNEdz5uQpc2wfxV9N9iCD8NHMbKfQ43cv5hrsw2yfLMXMwB4pCZXQwpTfbKFLyyaC43D3c",
  "key16": "3sWorj3noJRgy35z4jsigdta3L1KbEwHSBW1Jjyrnwj9mViEq4nNz7ZkYxnQRyXph8HS6ViGUfv4inKJZdSrWDV1",
  "key17": "M2ZC6tEpySfgFTENiAXJ92GeAhQw4HkgLbrg7a2msYN91QTW5dsPDNity5XZzpKRtXjADZMqS331EWiuvYNhY9K",
  "key18": "A669zj62TsBkZA4ao4ZbKUNQSoBf9kejou8xGgwaWYNZ8Mh88VZDMbFxpCopUarfQGD9BRddidd27gMrG2YnjaW",
  "key19": "4gHSFmQSGVW7HhGAK1bsCcBzoRbajLn5jntHiX7rGqJDf4aXMARrhh8qvLCqjKnAAuPVsNqRUe22zNNB82RdU6MQ",
  "key20": "3a2avYGawegrs46gbx11oascKxTo2tGcSZi6TcSEGr8hKmu9TF1BJLrpzmiT6Ywminvq6XEPSJqR2qKgbGvM6SGk",
  "key21": "2s7czgRbVXvYJFzYLtbhQjz7QuMRZgQbJD3ncP3cfMyYaqXbtE9TJkNaV2R6eDUgQ2BWDH7ciGkGchyECqFwXvkK",
  "key22": "3cJSLpxbG5DPeFLBsqkuyV5mshbX71LxbWCiFhaa6rT3Cb3j89WQvYrMa4ksH4xTewazW1BKpnShUuHx1FtSLYnQ",
  "key23": "5K33cFGKZN677SVt3PSbt6hSAYT7gKSxbe5YaYoTqEi3kAGZobpjZLTxa5rMNe8aT4QLRjN6UHUim9f6VMWzoD4a",
  "key24": "QbVhUeKVpvw8TpTmHdD592Ee4uHobMPuXjrvrmo26WGEPUR8JtF7sF4ZaQjNBD2RNgzk5DXukd1j8AXZ6qkJcBC",
  "key25": "66LaArL75Ehmi6fnR6TRZHmuQu2u2C54EHQEshgJ4HdprrrhHtwo4uFrmD6UGaN8yqvnoz8Qw1U1qjTcx5hy14o3",
  "key26": "3YcRDMCF3CuUcPxqYX5xkHNtts6kTHz7RGrC3z5d3nEcV6tEq9L2XZQKGQy35QMkCqk3Drg3tYcjxviaRfMeXDWx",
  "key27": "3qqgZEx9aQm1VeuQ25ScZKktxBPA7LqGEkZjVokVvQfJYhNYqcNa1hvkPbSY71BBundfogZozPtBZeH6TCjBDbts",
  "key28": "3vycvSpiFhxkBfnpv7XyvgDGTs6Gtr3AwzjXqD5rahEJzxVmGm4dvwgY9trxk689ARxuVsDQ1mLFcdK8w9qZJHri",
  "key29": "4bQbfA9MtXPU3XSPPuEHMqmACQAG4nFmv7zHzV3Fnm7yXynd38WDkiCgdb18eEERdUfKZbYHnt7TfFgBvhrVnvp2",
  "key30": "8SXyA7Z7d3o1AUAXDv9rpzC7Xg5uxvywFyy5RJir4ZGhYxVoPfZr6HUEHPqvqy3UNCyyCgsT8YySviCMUt8khrD",
  "key31": "dZ8NshFvhTpFpNK4F7MUxSSaGFTRHZriY1NsQEpy9LsZp2h8T3kJyoqejZrkQBv5KtykS2zEKmK9E5d2U4jAA3K",
  "key32": "3c3n4qpBL1ApvUZp9VvBHKWHrAhPz6Jtm9qjhom1Pgz1GCpXaMVGgFeRgmpDhd1SgnKcaj7HMHyhcCGezGwcR13T",
  "key33": "4d7ihf9pwDw1G4BntNVmnY8uPoG5eN8bpUGbCBV3DHZbySbBsdxvtrCgXWUEw6MMiQLPXafbJkcMwa266A3AUm4z",
  "key34": "vfqLmHYvfrUZiP8Bar8bf1sCipUXeQADqUfgDQunbtvtfesGmYhczUpb8tTUTs5uVNjsfWvrVWKFCMfdcLDTgi5",
  "key35": "3SSG8gu9X3BWS9HfuB6DS32mF5Cwie85MjPScAwL8XytkYfLdcj9ZRhunHwVkBLx9FHgVPuXCuN7D3sKsu1LFkFY",
  "key36": "3gongKjcACLi9NQnf95hozZfxPhRJ7NvHZepnLvGJWUEgSyxoStFrGoyp1vSVSAtVuSPqu79GPG4oFJznKXC6UPb",
  "key37": "5pQZafNV9YYrsNtcYQ3gLVW3DnnibRfGBkNAEh7U5VKCvjJJakWo89iHojgvtYhhmeiryKitF9FWGzcqzdpfwigQ",
  "key38": "5m5sMr4ouxVbFneoVEEz47CVngCs6rGdRgVY7MtwhqbjAGsV4mBSVUddUKLoZKK93t6jbnBSE76BEdCheLJw9rCy",
  "key39": "5y6qWtRkmp8KvXVnFYz557wmvuYn11nXewbhYbzyTnHwnLbm52sgpj5qJGn2mxjZvb1FVWcpUoA5D6yhzaQKWy6m",
  "key40": "5CNLftSALyzoWPb5gRrbBkNxhD4MDREpKsDMc2JzRcp7kmAyN2ipqrkv9GoKdSGNJFU8uazvyhMvsiXwJeJEG8YN",
  "key41": "5wyGvGUPkGjdJ1pz6Kv55JHibWTUM7U5dkcPjwq5qa8dXbofHdUDLEtCVFGWuqFxrsXZ8d6ez7L8cqMpoUorb6Zg",
  "key42": "5mJWQgMtXLtf7C47rNiy9kD6Yd4MqA5wQLXVW9hfMjDHs4YMTWrrdiVEWmZhpmwMqGDtcMnoKSdwa3gxy4Xf5bN8",
  "key43": "24ygmLdeLiGTK7FNs2qVP6aqe6DPtV9UqqkCBGDooDeQunj5LWE7S6pgCM9konH51ryhb54q69wD5orALMdDHsMQ",
  "key44": "4NzEfWQoXe8EwdxgDGQt9Pf1QnmBgVXhTfRUxQQBpjC4CyUsBELWJaWPrZ9jEhc7SN4wDDaRihzG6ZTTLEMN9wV6",
  "key45": "dF6CLU8zjFjqWv4ZnMkLePLUtiCr4Ucqj4UeG2YMLwEiLNs62ijU5gCbDwPA2TNhKG4gwdRBVMXJNYQ3sqcsHQG",
  "key46": "4KT9DE3JKetcNc2uUdAdPL9CaSNaneDRMZBmBH36CXsjTGCbkCDdMJngxwS4nzuwBS2itnHAKAqTBc3pMNZTV29S",
  "key47": "4ZMCiq4DAqfCvk7oV2mKi8g68gUG5Fk5o6qsUUdrzfGWHgXXCaqPpgpnUB2zfwTjLnrPugTP2SWEqfM2NTyArWfK",
  "key48": "34J9UiAp4GWJV6hr6UfvZsJhCVavadQgVc7HGQ3jrQrq2gHxrjH9hR4Lfgqi1jgQ1y98tBZ6aRzYqBWPoTzdKaEe",
  "key49": "KEujZ7jevomVwb85jXnTG8QF7ncP9R4QbE64xvej5rN3KBNwTSd6bWyYmA6srR8pjwFUHHx23GBXHQefpWp8KHS"
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
