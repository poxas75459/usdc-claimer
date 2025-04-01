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
    "2Jtk6yY3y8ngFfxJXvLTf1c4SWQnMWMH6ihDmWoHjXsRwgdHVTrQ3hASZy12zQc8Ybuw5hKAJGeDPCbG4a4urVyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBNVy59TLRbtSgxTLL81TegnvqWGtYTLjN3wCJ1i61Ankvtr46nXhzVF8YzQh6WWE7eZuYq3pVSTNEMWrsyNbsu",
  "key1": "4K5KRtUNounFg9iq92QEACb8zYFgQYgRmBZxfzWtYHsCVVHvkfTCGkMoSXVkErnKGj94jpdJC7neXBgbbEq9DmQA",
  "key2": "4JHLXrZYPu2UX5oP9J6B2DgkPcxBpLmiEqeHt3GcNBRcjTG5koJHzHhUtye1YEPxrhu3zWM981jqsbKCV2DodZxN",
  "key3": "4ytUB9nh1zEQLxX1TQ2KUHzDKcbNBgj2SJ4cBddXVi5amKsfTfRSdTCJxYCMsmER6yLA8J1JnSEd6yenndvE62t5",
  "key4": "37LmdqyGwNQNbQDrVpyApnQ8n8Gf5sPi1Xs9qfjnfMwvxKRQvB3KrZZsjwiro5BKnkUnre2yK1tDxzDz2MERDAgP",
  "key5": "3ZAqa9ynJ84goVFNR6x2hnYYqo6vQW2NHVgg9xw7ytVxFAUxorFMryCohzQ96gsaRHmWaRQzHDoeVNXFcyTcrQZg",
  "key6": "5bJwjVzoPNqrbwcuERbBeoTgHB5RskceQEx3JK2dteGrrQ2PsDBTUphA9Q1qifJPvgptQohzEksz432k7iZEjnE4",
  "key7": "RsfjwdR7fVUum4jf9rp5eWGa8dBFJ3qo5AFepjgthsdqL2LxWCVusUGutvQJPh3mTCeR1PmpyqdZnhWXGguGgc1",
  "key8": "5ndjoeLL8mLVLVwWnpskfrxg7ut6dfv4tC4nC6iV3HephVELNkvjop1fgHUjXC1TksievEmvo7J6ts87ySGzBpRE",
  "key9": "35MyLaTpaQRZQgMfCp2F1fosw687kszXw1UCxNZ3qSLbx8Rv3TvRxb9uNaHvMZWEBnzpgv9hBDsWdLDkt9EGgCQA",
  "key10": "3MKje5tqArjP8zQ8qsFoHnYWp5YmyX6GLUSMxGuLYLetgfVwduiu1PzPiAugzSJhB6sXeaqhbaVcf2XHuE4zEHzL",
  "key11": "2kym5GAtuQXSNCGELxM3Xqn9vLZYzRiiHprstoa6swth9J2Re7AGRfXRzyZs17p3ArfH65y1MhdwpsTG3ZHUw3nG",
  "key12": "5J746MwVzZMXNgfYqe3cD4rKVHotYeDzZV37c6swimRvxgyXDFDn7Ekp9seTAUGiiLpNQksZ1PAfQpFtUrrLx6fU",
  "key13": "pDGQqPVdy8WC8csqJBVhSBaYD5Xbi1ow18AWZLdgGqPF9bdJ5EJYyom2RWegEYLUEbC9WNPua5t2AQGrER9HR6r",
  "key14": "5pX6HmPU2S3wb5rA5kZv1EYtHUELmRGgKbriQEMkvVFxokeSBQG4u2SpQEnbqgWCqpeZvkxCgSs2Fsp9unN3dNCm",
  "key15": "58jXFEwXe49ozVhLEfCVsyyjQw9LkpvArKXGcC1hHe9TZa2jdX84dNv53sd7yrtFk4tejS5NvkQxko98DXfSMpxm",
  "key16": "3CfBg13dquWiBHYDQfeNMo6zLtQpYAhYLArL9YfSaSEmyTgeNUdEskXKbdaHj6hvSLY462G4hGVGCLcuokefYQ1H",
  "key17": "4JdYCiVVcJaDEZverWfUnnnGns1xSNMAvmMeipHgW57Ec1MyG6n9uqog9hfvwKEgEDvFNWrK9yiMQk75hma9817o",
  "key18": "fA9UefRoyTBAAu9yZ4GEd3dWsfBzmm3cCQudJiLSTimuMZcrkEePZi4TrrP6qvbMxy7iabd6qAxHuwFYsg5dASW",
  "key19": "FVCFiweLG7mphXZc7Dz4Ey7dPTkzZAj1MPL7jtn1d25GQZndvd6BDqZPfxwYG5N35tCm2WYTUyCV9vC6rDFjSMY",
  "key20": "4gy14RScJAMyCWhpTUgVnJMNTzGNdkUNzMnrFgG8JiGi5rgBrJnv7P6TLnbJjZSe3ceXqRDoypesznRY82ypyCLi",
  "key21": "4KV8cT3Uz6FHGKbYtN7Ck77E76jL9Tnz5eFXWWrr1CxY8D77YhhSScvrq4WBxTPRGSKsVsKXLBGyKxdmqkEq2wkH",
  "key22": "5uRVLEKQRthfWhnnsNXaHPK6kfFb899S627HKgp5vET3p7Y6YPdZiZwbtBiFGtM3fiCLahhVBPMmfNLM3fXhywmA",
  "key23": "3NK7ifr8vXD5xcSajtARrdaCkcxLCStQGW5qSW7NRoAThkdveLhW9FKZK2UA9boSEnrcD4icundtuJAj99Yfqzdz",
  "key24": "4Lx6HAVN5BcFMH6t5DfwUMaD7G34w1Pm2VDFvZi9sDihnZ7957Vpm3bNT5uCDyUvL6MyobdUzaoiCfPtn2yaR8r7",
  "key25": "2T3MQZpEv28NGLkMrQsHuE4KTUjhxzZ2BFh3EzfsUEts8RdkZhHBh7tQb11iALDyx9p6XR8RoiNdnhUjUAG7CbBn",
  "key26": "9Z9haSbXrCGwQDijqxz6tnEy9ceXxWuFSXiVC3La7x2Gzd7UZMt9BqcVcWQP62ytDpdWDtoZMCstX3Keg62aiWY",
  "key27": "co5PZ2it3TX1yBoccwBgB9PtfTRJyvD1uVJrZcmRVGnoKaYVSVjrxkmfHEqf76qX9KFWwFxD7jmqP9zhQRoxDmd",
  "key28": "3rxf4asEZ6MEDDZfvaz21JswxaGvGJgUePnFt1wrzLCyBMcd1221WdfGTtg9Yq3sEF7zsKK32JPDfMYK5odttTje",
  "key29": "5U9M5JazqSfczjAixdtQ4Xro4LVNpthyPdtKYo6zEA7mW2CutTmJ7iDDSof2tLspe4tM9XnugVVveciL8nXFw4BX",
  "key30": "2B5AxBYJmjWe76efnSdunaNKk2qU747Rh5ihUYjZzpiUCm6ETLxnxjyQs1EK6on23U27qDwgcfBXfgiJiAapo27T",
  "key31": "5Puwv8sNZxFGwMUM69bxhN4JcQGCJhXYareuuaQ4WpQCBDbJA1uhCvT4d8RJHMNtqBtJPwZ6herWw9273ExCcrRC",
  "key32": "44LhhBr7siqL6RHMJCSCxZjwmK2LLfKRGehCooissHcoriSYPMN1kXeooEoZ815kTf7MpHsZV4gFM9UQfZNcZvRu",
  "key33": "4KqeJf1zxDh5zEEnMAADFmLdTSvgsfXLpSXrGDmpr9tq5Px3Wq6nDvtRh13ggpBBtaszoPx5zFunL4fm9pTdZhrN",
  "key34": "2WsTVJujSyovQvKSN1kHWYJrakeV4siDq8RZaEFemnwi4VYnsiXU2zYcEmmkVL8ebUs6taU3huTwa2L7DLemfcix",
  "key35": "2J1L8UC652m2vL5UwrsEaE3wu8jSU9LdPPiCqkHJF6cg22BtcC3c5TRvxHyP6SgiVD2vsjKosxU2rwVSXNhnf4Fd",
  "key36": "2zuJMedF5hxSrkemvsqfZj9qMBcjSFSzSDfVxKfK8i8BEyNZLBdkGhQ6EfD5fWhroemAco6xnBpm6HEqs1SQDvDf",
  "key37": "3qSXVw5KyGTt29X23zxpoBy1cwm2qKYrS2w7fF7y2Wo5cSWXe7eFdtZweoJV2yiCFJ38CdqYEmCUUzDcerbJsJSk",
  "key38": "TAsgbnqJtAAjWMZMXXANU3bH9yDj9YwCKTiu6nBzfap4YPCgTN5j1msjQ5WoydWwspHNTSgDort3vszQs8Sz4D2",
  "key39": "tykZ9ZVFNnbMLgVQQ8cJ2Qxov7zDftWvKK6Ngjy9cdj6RUbEK5vmbhFmGB8VQmzHHpBqEPfvyKqc7XgFLxdq8YY",
  "key40": "i2yFnztLAezkV3zXXgftDhHGFGf8k8h57oNiQ1qwKfYtCRrojPrAPwSG4zjKFkrJ5asQcDKNmxPPXZUSG3gP84s",
  "key41": "2b77zKUjaPcTStyQfvuvvtuUGxBj6cCwsdZh2MAmeaihjbR78hrpkz8gM1f3eoaJBXp4eCxqrGzMyhTZUgR6Qz3Q",
  "key42": "a1Y9LjCgZ3EGpRbSgNShGEaD82pzctKus29V4sPrZhyVYs2ku1dEeBcKdzdic9CLAGmuB1d4Ks5nurG8Sn83P5j",
  "key43": "3KJT15e1wmhwjM7Uv6S7TN4FB2tx76yWRVPHNKQihhaSKLWD96RxL4KPoNNScznpWAHyx6MZkQ2oZfYUxRvgxuEX",
  "key44": "4xUn7He8PyFmVePk3b7jR1wexCYMziNcdAHz1MK3y8xWDvPSDBSXogwbJkGpeyyxqt4W4WMV7Uknx9LjmqY2ujon",
  "key45": "23DuWkdPjGQQZauzaYftP8tD35NLEDPixq618YyfmQ3PNUExZDdccjK8E42sLo1KYc7HMRZeM4bkXa6VmSnv7eiK",
  "key46": "fCmn6MkXjcrxDbyMHL8xFcxf8VC1oUH2BQzeHB5J8uURCyJ1mjwYFk345KXRrXNccvVQ9XoRYoDuxo1FsSb2tZC",
  "key47": "2EvR79vTLuWhZn9FJ4fNrKpckww9CNNvuu5xwQUCUD2mP4XxHD9ipFeeaQdguNNY77HpkbXmbCRHpP3KNv52hNTt",
  "key48": "28EXumpeJKcM8Pjc2kr9CnWp4vS1YDAj7xMPU5qWc3osR63V89ZPokptfU6H43BUrXHF1TN9U48wjwbJaotqoB6y",
  "key49": "4XAvh8pnBwZMSihAKBppMHCyd9wTu5nJm5rX1omyunxXwSWW1SvdUSCgSe8iVHM9a7mhnoxUvhxUz45Pnqgy4HaH"
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
