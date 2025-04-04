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
    "X9rr51dkqQhmEm4y6fqUZ23RmofQGaLikiTqportqtpQpgcFiRyQiaXPLN21ZfapTPRARxu4jzTBg3Sh5zZcPnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29aFTHcunvzweo2BkRSbcEFhoPhZU3DdVsFsbR95HHcrxx9zFsqWX8R2DqKvHNyFcxRi2WLasmLbd8QqB4tHn9Xe",
  "key1": "58Fxnn6R8wAVSST1ykcXv5eshjRbgQPVgUZkVmB1vyCRyVTTBp95G8GYAWutWLPEj3TRH21rUGtiruunRjrXM7s7",
  "key2": "nsLTkuM4nVgtQSAMcmAgqszfxBUatFRr4f7VPjSfFuNVXvePVGi6YwzqjXM8LSv29hSv8WdmzCjVDwem7siYFSm",
  "key3": "25twrDruEm5aSL27DtmJU9nz1rZcHS5T2tcb2aRxk3fTXGHjW16SthFaAzAia5sM2pTGHYDgWLFfxabKCRMYK2Vo",
  "key4": "3GZgmdkfFuyk6drf8c8JGNYnSx9DnMT1CbAYPSE69jHjCa5zYjA1fRPBg6NtxjZi9qc3bsFvxPSgj3jjVACTCAmN",
  "key5": "3g6GrTXLVEhsygpvtiiEXiYwHZiQCL9HVWrUCThpcWw7WpfD4bP77FGdvb2AccbMmhoAuSxQ6H6BQQ6bqAjDE9a4",
  "key6": "mU3nFUtdBbnCyYwXGZTrfauGsz67kjaNwi6csRoR7j1NpnpHNQjAVo8wA5mKhp8LEFJbMZ8yshyYm3VLbkkfBNt",
  "key7": "613nUXfgopXd4GiitncXounfzKeQhPWEr1TigMFwyKogrsQD7eudGhdKLUFA2sG5Kf1Ac6dWQJGiti4vMyPfya8W",
  "key8": "2wvS2im8dkr8tCBU4GP6DE21ijr4grbzSKTL8bnPc7DnEuKEQH15YSFQqPxasfHAK9EWb5ZS387N4TUfrxg5cNyd",
  "key9": "3KYiXdizWfKwjrzssETrfquaMGTfQhDvMQdHRJh5dkrj3JsYE3dXA2C7Emx6XatjeUSzfNLrnwefQWnbFZtTaWNo",
  "key10": "4pTknEHAjitNtjiejdtbR7uktZSFW87eA51eWFsd1icW6szktm7PNeAxRPuQvdvKgW6MB22cWnpg9Vvs7MtFD28K",
  "key11": "4rtFqpoLqS8FVv9uFZSb1jfDVfVLT9QwhCZvcEd9zeFpvFaUjYVgzFiMm9MXAuG45GwKW6qpyvMpJcFteF3MZu5y",
  "key12": "5bcijP6HCzoBX3x641KsboUuGMHgcGaHKZJ9iWkgvCBgJseZY2tNQWnzg5Vzub5gpGQVzRAnyqcuLARoxaYXDfeg",
  "key13": "4RWPLFTNFXo1kmaKG8k7YtddNZqM7cYhGjy9YswYKd5HX5pebWjSswBpRhJAhAPovYQCuxLopi5hQgg4XVZwYNCe",
  "key14": "2pW3fq41FkSd47Z3RneCdKs1RhJDCYmaJDDtfV5BkoEsNRmdfDxTGQgPWJaXM3RDmU6gXPC7LeniFDa1G7PdMcZn",
  "key15": "2GNwSKgwLkd72Y7ktxfTQVCPKSfrQvjgRubAdQPX1txXWRvWp3egsmHBT2t573jJnEKyJT6DagXa3Jtz6PmW2V5a",
  "key16": "594whESTDhmZH9QRB1TgMPswXbv4hgL327w1W5m36sZ7K5dJZVyzkZNEFdieuYxmNiZCPKv3ExM16RXVdWKvdEXv",
  "key17": "57B6p4n4Hs1tLVjqbdfp8Bah9zGnPfLvXX3PP8Lhp27VyjwUq5ePSsNpWpjmHP6MWrPLeDonKqY9UJjEBb4RaG81",
  "key18": "5zW47ma7LP2RufLzUMmtizRYcW4Zk3qnfZV8bkvXsNX1PpEbvQFtXZTWiNN1DdqFz9sTZJVfULqApufmJJsxXtXe",
  "key19": "5huBM2C3Z3MZy4A4zHfYbHrZ3peWcavTPtMdzsua2KG25kCLHjAhws1VW2WjvW3vnLWzATSP4R6Y7qW3zrM6j2bw",
  "key20": "L36freHsND5ezMcMEVXBiJj6T9aYnHBXSsHoDfNsF5E9PnJWfhYSBvmtRYeP3MXapTopmcYaa1Y2CUjGhuUU1FC",
  "key21": "zFVjYz3xLG5gW4G92zjVZZqAdyP6jssAPRKuh9H4ViNsLcNrchfyfmJrmN29GbStEAokXqzYiNrCYdn8ukpgQDV",
  "key22": "4namJMYBdqKhznEdpQGyCPZtjbWvEWHAwTP4p5a5EzPu6JTr1wDkTetKnYx6vRKyCCzrRd6DM98rwcbhH53njjza",
  "key23": "mwZWg2tPfBE5XexJJpef9oZZd6ZtQz4XX7Zy79b84Dxs5XtuWkGSj7Nkm6rtQjQMhseAuu5XneoCNZaVe9hH5yj",
  "key24": "5fGSZTqAdySBN9Yaeu3wLPEDMrDVfvEon8dN2Ro8QGvGFPJYkxChEzUWvV5XGdKcYYQ55Ex1ZujjzwQrHs5XpEUP",
  "key25": "56Tcvctv7YwdcChJEeA8bxBsKnCwuWy4DRHN8HbA6NPMo6krEEwicFxX5ktK1yx9wqESnYgQp1Qz1iwCXpCeJdBC",
  "key26": "38DnPCr4wmDWMzom9C4jEX7wauZdYBiAnWCdLRSSLg9V8eEHGqVFFFzszRzfPRnZ74fHJahbDdXneftb48JoZEBq",
  "key27": "4g5JayFTPL5eS6wwT2moy8Kmk3xuymy3Tge1mbaHYRjrMY6roD6iziYjtfyHEMBWUCyT3KunW7RvH2FD1YSwvVNa",
  "key28": "3qtUrnMY1saZuo3qYhkt5EkPurrQryEoSSsdRD8qF6wtLjum5jLj9Tdcr2EGSAtbkDuy8mYvDkw1QwgCj9tka1ZM",
  "key29": "xz7xAxChk5LdMPFKTx7APpR3nYhE33vDdyBbPzbtVj3J4c35mbwRZ4GCiKaJufxLChW4sCvJWUrYqXAdL9JzKCL",
  "key30": "3baHzwS5JMqtRN8Aav6JGRuoeuukZGHPVb3cWWPNLxAq629LaXd9RRtrM8MMpJUvv2mAhATFLWGdAy455HXi9jFv",
  "key31": "4fu3WkJTJxWo1YXaHwpGWhWyhBxJezKLtSSezxYUNH4uc9aycKnV1SbdYQAk1UeJS4M97LujtTWcUftSesvxZ54H",
  "key32": "4MVM6fBEpbH2cQ9NPeb9JnN53UC2fyQRCNJD5FijXLNshMZnAneReDWiVhdo9uA7iPzro3fAoYQXNNRhxKf8VHUW",
  "key33": "3XjsJ37bPNzZkKwyTxGrafNMvwWodrckLYX5uHNaNSasNndok4q93PBK1d82LYsxd61EwD5c6MWQPuUSi6pN46sW",
  "key34": "54dGuUgpSCf11ZWVp4dgvVRQ5mJQFAwmWgdqpmLUYw5Jf4UNNwyeiXysQ7WZ3arewwtwZzLWn2icmyDGsFdy4BUt",
  "key35": "5s1fdjt2GvVnDPyPmaw9c2dLS3zjbVst4oMcxHawTHnmZjqrgSSYVjhCWyMjA6tMLFja29iPUXCtUGWBpbHTMtZ3",
  "key36": "3YAeqPd5Gukk91YfGksJxz6sJFwSw2ieSr36vQBAh1yJxTRREk8dqyLcajAyJijqV9eoZjdFKRtMxdpzoVvf148x",
  "key37": "3cauRBYGSfNFAUi7YhbVvdADbqpqvj8UswgbKb8xacYivFXVgGyQur1PyMExMWtX45M5ww8cwKQcCdPSVnAFSPbN",
  "key38": "3BG9g61UwDHqYeqd8iVr32rqt5nAxvyojPdjxLwLXgGM7wBH5d54xBKoqYpAp2ntHPdGnnKhKzEPBdfHnhi7BvnJ",
  "key39": "4gx7Z2XaJzy7umVQUYNNKUktxFLruEJYR46tiLFW3MU8B6VvKVnmsCWpnBZdfv1C1yXQxufyaJNp42qarnG6nPuT",
  "key40": "2bAyvy7U2UfsCXXPWqMxhmaVhBGAWhAt2u3bS3FiRskBCy17Zgmga2Nke7tnyRgmjcQjagKM3yeqgDbiUf9FWqY2",
  "key41": "3XjsfgTdJgJBJKgHFpYYWxgnRNwiPyfo4JBpS4Uk7eJY2FqVn61rMd6tnCwDirkj2RRpC2MryVd8cZNxW5nKt8Uw",
  "key42": "3gMGtjizdVoqt6QswohMxqCGikVPG6aQ1PC64kuj3cz14xBPGCsz4HFyt1yqbSrEUmQ5z54s3WWu5YGcbLp58uKj"
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
