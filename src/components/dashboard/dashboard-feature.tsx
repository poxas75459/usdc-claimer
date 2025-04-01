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
    "C7GMcHBvQhfrhD1TmVkqwYPohtMJYJM4xNs9dCMzG6ywLj5R5ooZFzVc9m8oq1eCT6coQYubyLnunN4EeFvuEHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZrUV4gLLEFriN2vo9Y1LgNnDFDJoxsyqwLMB5fQdLxGwZ5iYKD2bdxosqsSkadmZ6m5RukCFoPppdUkdkgZmiZC",
  "key1": "37kwKs6EdAw9PSs2YPS1bxC6FKXgbawySVPThA61DnWFPyJArttbBpRj3ibcoHvv35jT1rHnPDUycREwnUZa1Anh",
  "key2": "Nd7R9HoJ2dYwVrGKYsvxaXbBaAEVPGPFLcmxeDtRUQuobXYymgpNhDa9Mt1visbvQCu1z6cJ7RTQ25xcvfs3ToG",
  "key3": "5j5W4Fnd5JWwtx7KCYtwYaY4n3ABqZY8Ev2hs2b7hvsffD1KaAeP9swLDkM6eqxHaRE59QZGFa7dNSoUD3dkQgpi",
  "key4": "39vC9X5hzaoyB26TCfSvGqvdY59nKYvbiMD5BpRS83XZMgsH7ovSgZnibVk2mhTgLZHrot3e94aR1LesdZWqcv5h",
  "key5": "TDdGBCd562jcMVEtBFmCnD2dWDSmXCjNQmgNa7pYqRsZ7GqMYmUrMpMBFuc2mmzEaxzWtGwRxsyuFKXL5gVrgcL",
  "key6": "Fh7Up7wzJ2CAWoE8ZjkjQxvfdYHyvPM7ejLenjUZmdjKeF9CQWfcTofjjxdT1tcbXNTvMkcdC7cVKWaeWTh4JTF",
  "key7": "2ZVCD6yeyaH9u6Xr7zkWjA9KGDVitYqT1gFyjbQHr5HSxgPSRCgCckXtG3nbtYxpSWqMbHzhSV7dUMXtcn7a4wE1",
  "key8": "4tWHEjsFCaYSMQsPkumtxPcCHpJE28nGVubgDkfG5Dn71ujD8xJQyY1gmpxM1zq1q24ikcC3uP65Y6QdaaT7GWpf",
  "key9": "3CgLdNBxPgHD5KLyEyAMkUmdfmjfz95NMyiD9n8kLfeYGQxJsFAR9R7NvPZvEV6Xetp1TpQouCyXPm3z5dtSGP7x",
  "key10": "4yPsxBx8QBWrf8x2QC4r1PFev4c2kWKdLjXNjDqNRc9cLD3kEi6oBzwyZbPvKjzeoX9M48GkGYqTXhcp3DoADmdJ",
  "key11": "5JuyuKKwP11o5hjHRnZ91EzsSpMN4EVtrnWaQvPYBc42WWe1qdQkEhzpHP655T5zJor4QbMBiLfY7QtKexwhs33Q",
  "key12": "2ruxF5qzTZexX6faoE2dPC7MhJKY9ikXjZ1yTi8HN8WrqtRS6VVpYDu7DYVMz7cBbAhNc8abGKw7GS2qefUBxduo",
  "key13": "56tEvPJkhQKUu7tXp887N4HLqSqh6SPNrNecCFMpQx8kioizumR4B7mucN4M1v1SvTW7V3EQiZsjMwQ9U2G3FBLh",
  "key14": "3Q1PvmwB1iYpyshG9A9JoW1ZwetBaUoFQKSeWCBy35AVCwYXSLwT7wEXZLcxZtrduoGvgQyWgBCTD46opJbWQ8AP",
  "key15": "5YtULPRAw1LxR8kWWEZjLsz3YWgQG2y3pafeabPi5WMRjv38dTU1KcoXjJio6yTbY9qxaXdpg547PgQ7kgujz9KJ",
  "key16": "39Gy6d2JZTU1ggCTEDYQxbJY77Axv6uaFQ1frJtWg7sR3prMW6DUx6V1xTFrY8eSeG49B34Hwv7V1mv4K3E3aoct",
  "key17": "3mqQixcwTYXT1VJwEsUEj6rD8kq4wvPqWftejatph3uxraEstt8X6jbXiV8QprBAxRBZaVf9LS8cpLuR8WEied1f",
  "key18": "3GWFcZPLkDxp27h6BuTYhakKcXUBd45TTrSCJnXkwL2Xnf9NbXRPYfXP174a8eRNYeaApxDxzAkeRNKSnSnhQMLr",
  "key19": "2RpNTUw6c72iHpbEwQomddEnckbaVs13RYiVuhtWGR2GpaWBq1biSLaG7h2ChbMgRnT81qVbwz3fcLf6qZvYjGeS",
  "key20": "23ub8YHZoE6fk9FyNqpkafpA8cRW94TPcSqFAp4VH1FxZ7sndmeKw4VrCq2CNDGF9VTwLDjTE1xMMSVeGnL4P1cm",
  "key21": "5EJCdUwXtfdPSMEWWPeSLvzn6gkAPvtTbTgrKtyYXqugTnjd3K244mnp4vXVADjXR2nCcKZhtE7DNUZyVgnaCVT",
  "key22": "3aQ7p9CLMgt8CB8N4gtmzrVPgVnuapuR2TVvbPW2bFvpj33bdx5qy8Vt3YdbHB79oWah1vrXQa1xKPqRgnSQXFY2",
  "key23": "2h9exBc9LwKKmMoLeCPQ8qdmksVmF7gXHyqYfaKujS2auXwDWzxWqHPiiv8QUysEfhVLjwS17UJknE5s8vtqt2jL",
  "key24": "3cUeeH5Vhq3wHqv3iucD7pTEZqN9Hb4r1JoXCTvTsGQ5UFPo8kwd3auKENGNzdrznnpAH7eexL8uMTGuRAZdoRiu",
  "key25": "2ZJ6THd4verJQzBDsYsxeJCW9oUj6YD5ah8XkJFXG4aXeFHQLuDzyjEBKNzUTcijCfhocNCUy4qeKy2rhXz9jKe1",
  "key26": "2T8ASQUqqvf9uY6UFJhguUWHD256vEsbkVZVyicyVBQJb1L4441gXhYesYhH9aj1VpvvxaSgpKmvNDufBgL1b9EJ",
  "key27": "5gadJBHFC2tycxZRoLiy58AvynSEUUkARWxZyCZzisyfUhzoRHw3LMqq4ivqSjkUd3FksoXz4L3RXAhrqF2Umz1b",
  "key28": "3EfcyxvBmwXGHU5varfUkwagYCTBQ98GVGZV6BLmEMzaAX9qNejzTfzE8n5hxeHN1TGXMUe19gQFbWfvWXiEyqjU",
  "key29": "47DjVfYMBuVzVE5Yxe7QBK1BYjioQPvNGRn3yFSa64mJ8eCW7vxZBbzLEFRVTUsJbqczWQgMi4EyXFBFDUTUrHvn",
  "key30": "4nAeex7qMR9JYyRnoSuPr9CHmQAKWvnyjoappytXXn4gP7FAoRSy7BrfVtnem7aQ9oEk9XvyGhn6hZJnvs7oWq59",
  "key31": "2DmdYV7PYjJCbRq3G34vqkp53eyUy7jAJCBJkBHfmAJ43sEbfEefmhGDqgf2yp9TSE5vuGpfRPT5h2GZiCAfAnwQ",
  "key32": "4bJT5xdzwuLaKCe9D5FRyijY4ACdh71Ez4kJycRuYFFihUiNcsfb98NLVViLfzgfic9ryhjf7bW7HKiL8C63psVt",
  "key33": "3vyV8kCmQyjf24HR8wJgUL1ngHpM98yfvYKr1FUBhDc3oy6BbgQRBeDuCydL17NQsNTxbgSwdui1LgJLuPowQP9y",
  "key34": "2pcbd5frxzRH2EUB1APH5gRdKBEHN1MKSYBJEsdxDcWMxUnSb1cEehudoej8pzp6UrWK3WxRx29uVAqtswYYNUBJ",
  "key35": "5L7Xg2ckmTijwK7SgpY8nrnJ5HpKSVHQf6Ste4YPsj9AFK2GSQW6sAB2uUVjtunV1h4vFRY14jYGWxi4NkmfbSDG",
  "key36": "4vouhF5QJjQTRrMituxrcKfCgnXiiVXaTQJBsHs7z9jPGpHh7FZq4w8j4x9uq5Wt2CQwVsQtNudzs8YUun4xV4EQ",
  "key37": "51dqSGaXCgYB9U3z4yeL932768fiW88nQu4eE2bp2bszUhdr8dgJp87jZaHpfibD9EeLU7SZPAhKkGAEioGM7g6s",
  "key38": "3ssstdmfC5HJxhjF5aqESBku31pQ9QBx4MLuYsVgke3DxywUXyUG8qfrYTRJ6PCJ2d2Yqj6GqZHax3FQYS2efCBB",
  "key39": "UeaJagtHXTVDMaoMnUgLZZWpSxnUNFvaG2XNmdAqJqpA3at1vptHLDZqemFKGN5Jk4PoWSHe9DZjAkvnEpLcfbV",
  "key40": "3R6GMMMMJLuT5b535ovkJptoicgScsK5r1sLfTYZQM4isnQUUryVpGy3YzCaEjb8nkQ3KjJATTtqhLz963PP9xdA",
  "key41": "t3ZZ3Mz5FTmrAtBfUyLQ7jVcCz5iYeDGUhYWrjQgpQvWpurE2FDfNU6D2hp1ybyjiYwxVwhfNcgfm7zMmuAyEWy"
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
