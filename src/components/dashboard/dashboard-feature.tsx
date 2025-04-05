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
    "5doAyWtfJFk8fVA7GS9uToPkMKphTEjWbZ5cybezRdMwSoSgf3JtSnQhHPyZa4vVfddFMLbWqJJnrjJTusBomdvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SbVVKyDxsYs8MhmZ382qshHEFAo84UzkFzpoF6ctYi5B2bukWnzwW1XFRSp9haS5B9aaLsQkhh2bDb2Mn32e9NZ",
  "key1": "3nLzouc7a4ZDoVL2ZXosWYxr6qEggFMPTogTJagcEdAArXMrp11DDYbt9H4fRdpbwFpuk6bUFuN5RNKugNgja8qb",
  "key2": "Stbhs9LspUT5enLYgNm66DmMVR5ZnbkKqUrqrNdExjetWcoaXHKzZGNkXfWxBp9h7arWmyYxcYqLCJc2CA4kGpy",
  "key3": "4aD5v6EGPucK7pwghDaTt3MEFbkcuydastMxdF8sMsqKe88AsK3gKt4bedtgtXLrvq3thP6fTjQ3hnrT451tjwcR",
  "key4": "2tVnhAzqeBkJoDF4RZXeDiYXoZuULpEpq4wnWo3DsxkWFRkUbF2israJi3ur4BUPxTNU7epMC9Aaurfwk9ypqcWd",
  "key5": "2sg6jrbo2BMXqoN9fSLPJRmcaVYbcY6wYvCnXMWVL8tXgHMiTZbwh5Lk2ir9FibWw6WnJYRqfVAaGuy89NTLDVaH",
  "key6": "3bBE5JU7AS3Nc35q6tYPVTgxyxQvdhK6Z3LFkmi3EZCNvmwZcuTapqVuYkq2shVE495hLxvz5nhASMrtNz5Kpg8t",
  "key7": "grBbu1GEwD7FWjbDsxSXfaNDer5naXMz5Tay2hggiWqxsUMH1XJbaPtLDCUvdFSou4M1iPZJ5cVF9bJCdkRTyVQ",
  "key8": "ViHpLGMe9LUo9yxxNFdnJWB4Gc7VhKqS8wut33UQFozy1ZQEppYuhpmncbbJZiV1jGVuhUUaFtD7KGDEQSEPkrs",
  "key9": "HSoApDmqQBM2yjsVz9ajnfYMoQ1Bokt8KwF7vtCJZT4DZcwXQEL4xZTiEfVGd7fenQEBiaPBBx9YM62kf3eKBtC",
  "key10": "fdtyWx9xTf5yW5MKZ1ptfnm6NqcigQXETnVu6zChMBQy5KoGwvLRej6jXnzrbk9Wh33qnNiyYM5S1UtdLCe2JtU",
  "key11": "4yefyC2aHjqRpKH7bTh4EgbbjTQzwhBerVu3TyR5pzPwN1ut1aNYDKcRJMLKNeLcwp7o7yDzgU4xWbHToABjQ1Z2",
  "key12": "f8BHbuAyUmFG6ddwFAzfjm6XuZzM2g9hpziMpUhCjCffs72xip1vTrK2Y57MmhpaYajrQtWeBDGhwrWVVvGeyRY",
  "key13": "26hVZuidk75JsNQDVvtdCAMzGm5Po1TyJaNenP1iXEpNRCKV5LhL2hN6kbceousm4J6HUt2PKeUECRXGUHzR3aj5",
  "key14": "2xngUfKms8Fa8xJLzKgR9sjnBME8TnrhsuqK2gi88qJAUYLnjFuUHccGVN1vSTzegvBjmBLv4dUHdMB5d64zPaPt",
  "key15": "kqNG6wDryAk1YHK5Dd466n7TXpNdn5BvRmwjkBs9KK5EPCBAgzT5CxadbmAcEr8hUSPC3JxBiED7dt2moZubaW9",
  "key16": "2AaFDDcaJi3jbVADmKiguduzTCi3i1axEyKGhUeWaddH777wC9nLrF5H2UDRGsa6aP3p73GdkhAopip8LDNS7Ety",
  "key17": "GK6rFU8pBN6LN1rFAh5hxAwizAypEQoAs21LTTmhtLvBaxTSdqFqGE3MQdsnyqA2PSRsFegQ6639P7eJAtq3c1K",
  "key18": "2E4QV2PuZQzv7nuVKSuJ994S6aBKAK9JARxHCKcZ9WJnPioFkhKpFQ5piwmkUPKJJUXtrJdy6ADXwxW6ixQ4FA2u",
  "key19": "P76WGvdYZAp3HFsYoMt9ds8a2v5z471rc4zExjcpmdD827E9otGkUgsK9DtvqLuAAuNP9A22JfvAxLxth5UR8X4",
  "key20": "2booJih3Ze8pXS7oQwNP8X9yYkMPuRn718kBcQrassDcUydGRpQvzqCfVGBvLmhHPK6gVECQEQzJhyjRJZrAsA8z",
  "key21": "5A5T2Mg4x5UhXc2JkBc1AGjhxA2gjzbR2ZmqhACm9WH1PLsT2VLjHPsUm5rhpTovvX6d129f7PvZKsp4PmNpHKE5",
  "key22": "3DiEwxigHX4Qdir8hcHkr4MsUuRKYgrw7KHhyzRanXnMheWJBc1gaMbarm8cEyc3Gjr7SHGsouuCkygDVxGD8NsA",
  "key23": "5wtGawzdrGpK7GC5ZWGafybxKK26j4reBY8bPHHjwDPDf9i4KSD3hABufXWQBCwpAhGDMNxHPYu7oWZHER8mRW1m",
  "key24": "35fcC7pCuYDFgeoCRQXB4WubwE1ZABMxcHr9b9Yk7cGjBy3i3ELUGNhgvMgcpYFo6S3RWoo4qCifZNMQ7p4ZrNQW",
  "key25": "2SA34njz3PMYutdwpVKDXqT563rL9YRLNeubmq7avLHyXz3TktybvRMpb833rqavUzswxhvJkNm1qtpnrBZy7TPW",
  "key26": "BfDumqcTh7HYne18eiLYNRtvL6udnmwGToMvd5wk7AbDKg7jPSTeY4sJSaZWU8ULqyd4FZE3BBjV8CDE95jnmh2",
  "key27": "hQMhbLYyKFYnKMN2GpShUkoMSv6cDKtUcq3k6PnzEzykdwnFGNytuj4PkZiU1q1hwTTjeD3uFPMAPEwyKTxrvdN",
  "key28": "4Kaw7TtMx5iqhcxMj2bcDLFGk7mJ6MuWezuvH4rt8vHDyBVdBtJzbA7wRbSULjpWogm9WC8DrXEomoBAYBLZn7e3",
  "key29": "3MQFjQMCyLxEq9GxmXDMHB2x9qCeuFLMcANapaDcTJ4qPqf4Fn7f1tatkV87pKgaLQ7Wcjnq2FuB41KTCR3Jggfb",
  "key30": "2yhuAXFRwaaGAinUa2JHS9TbBSbu9UMaJ5ViEDUNn2XGKTt9hKxq5KprD9JgNT86BDkWbSZL8G82xwvPXcqbviSN",
  "key31": "yL1cQCMs6THAc72bjHM1Xhhnj9RqYfgnPe2HZJUoQ2ag3sy1mtZSxZVEoPQiNxT2ohe8MRkkKdmb7p9ivxn2ZHQ",
  "key32": "3DcfywmUQjUEgUTEYgag2kCd3gb1WY1e8co5g8a2DiKUbQwHgX4QbP7SzeVh6GigdvPDQkrMBXEZSddP2KmthqXS",
  "key33": "4UJxoZsFmKw76BzY41qvkfrrFyJndZwbYyUet732JxwYL6s5JYmnLgkU6LmjBeuepDzQGMc8CxXYz6wddWPkzBJG",
  "key34": "xrLGgLCrrniqNcDvLZNWCncuKGHp9tqAqxCSTnhoDHxgSE66oJtGxiW2JbFz7FaH3sK1xBsfiTbCiTFuqtEaLNs",
  "key35": "5UKuspHLpWkUZbYRdVXUQMyyjQeKrjnPReNngsQutTbyCZDHALVNSTJm3aH7rqLYADJFoRdJP9CrD8nma7Jp3McS",
  "key36": "5evc3qpFT6DHgKvXa7FbeA4Lsq9KMM8gQShsgwnZH4L22qHe85byASLMAe1jdG8vQDZ3Kmo1Kihf1VhpKoFnoYby",
  "key37": "3Jq76S9CXiPmL2UgVd8V9kgeBb4Uo62any27qUGpfyBdZ5uw7eDbaqLDF2Mitvgt8wkCovdiS1Ey2MTpjmwogUhW",
  "key38": "3qht8L9BFJh3yTczEv4Vtxe7VHLMsN9pYeE3evt4WoyUMg7Y4hWPTz2gwaLzWwSadqmzx3phk24qdxwCc5uPbwNQ",
  "key39": "KCiEXAerAXnjSqKRLPud9uBTf9TXFgfEFyajJ4s3RFsBPUfo7UEDmZYtn9uSvqFURcwyWegm9CyhwW25DjFWHVj",
  "key40": "53zGUrXnBFWLWvL5mgySAYJN9AGuTdwVNYqBksna8GmLXQLh5x5SGqshNZWW7KgZW83xUNmacGEyVTRMzGcWcRbe",
  "key41": "V7XXC8npHbJV755WiLiZgwLeNt9Rf1FrEpp3ZccDReoQLB4TyodsmBvd9YEyoChrTYVdiAAuQMeeEWNw582QFEW",
  "key42": "3bG54fRkMNNzsiqZB6zDf41EPTtuLdhmHHzwUvhedeqzJ8dUeYrKKPDrvGiLJkzKMGjQAobotMgwXd4nRjndDszj"
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
