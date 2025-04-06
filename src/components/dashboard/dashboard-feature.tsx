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
    "3bXBccCo2C9n27bc275Cqjy3rhFNc28oCMNfdwHgxXwjdentvtf229tGASsB5AhVFxwZYJZk5QTUdbVueFVj1DSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wcLXEz68Kd99d9ZSchCwko3y6UytgekBcWzYmigf3QfdcEVze1xdLLfzSoqqRVbT63TqkFJsFFmddWYDpnsW6oM",
  "key1": "f7BxJvMXVxPjjiBf4auh2rC9xvoW4fRZRmxrvxoXh9BEoxeK9trK8dRp1cVRaNcQcBDdUroyAnvRvqGb3WH64fj",
  "key2": "2xT6UehfGWyMBd3MPyPq5V7kvNLdp1fkw6kfLnGe7ZdapYjmJyTJCmsLW5LAnqMMSEopySWUqBTCidCPiXP3dABR",
  "key3": "251gvhoH4Rt92erYkEjP1y65gYP26YMPPiDUKQC9pvfo4xdDP12bRYvHdpDXU8eE9sxWTUinUdW3nvLEEmE9CLyv",
  "key4": "8TiC8cSYe5Rdig1vqX3U13tu9xgcpwBQuJ19NeMpqo4UNv8s3hfEi19Fv7yQBcxA5qZB3e8BNMhdmT3Eu2SqHX1",
  "key5": "44WmiC2HPphtoBKQo73QB3YHzSbGU5Ggsz3oB1XMiQ1Kvh4nD9DB4hbQGZuhXn3kDxnhJ1TtwwjwD8FdZZQMVUyK",
  "key6": "RF75uSK4BJpDAhSQLnBQ4G538LCru77fNcN4kKUeowNPDbjfrno99HJXK81F8gM8dVRpTSYMPgjERUuQb48Y5MH",
  "key7": "3Xy6ptfPLRZ3ucavyvbPvq83E2monKAXRPKMuRhiw3UpFdV7CsVEnXcVxMzhFko7d3BmZpzQnRNPP7pKSwbwvWbf",
  "key8": "3JH8EsMuKUMCDYJMHs451ZdDwtakt8U79k12Pv3R2DTkn8zBrmSVWDNyc3jX6aDu73DoCsSiVmYmbzgnj2ANorfx",
  "key9": "52joeEmBVQXXomo4yo5r3ZwVQ4hMMZimMqY7rP4vBZG9AGMkEFaVGGUwHM9LfiEcJit986tg1GgfRqWnkQiJPTgL",
  "key10": "qxUo6ZDbDY6iB2S5YEHpiu1gXWJbqNHUNeBxPgGYYz9n7kdVzP3KV2GtHrttGjqhENTWkeN8ciE4Nwy55XR3CiS",
  "key11": "1zvcdgX1bcmxyC3aw4kq6jGXWcZ8Bk4L7uCTsvGHSn9BkvrbSWdw4kBtYr65Y4JnCwcXCttNGy4Cr3VjFh3NVeV",
  "key12": "3bFDFTxgwPt7hYmsesRArTczzkU5zoTUJd6L4e6GzmLZKhMBc3N6BXyYuHupGVGTxBobhLapg834UeLxCQDt5tYR",
  "key13": "4jVNPm3DCKFZ3ySbYoUn8GUWqxrCSRP48xipZBN6BSo4LqnhkXahmxuHahDWeDhTdNVdbAmNpWNT2ps8PjVsYsM",
  "key14": "3D27445pvPpZM8uZvM6thkXJRNZM7Zgf8GwxrUcfEnBWat17wTp5dm6XA21gPdZyusb1Uc1EsaYSWHgARipUNdDK",
  "key15": "KKyvyyzJLbht6h1Ky5EicbeAS1aSGWhztkN7PGR7p9WCziBdggRXWPRo8cxP5SCgUzAbG9R2q5R6wnhx9Lgad22",
  "key16": "4MMfmhDsPna3gzXTtCCrbHS3yBTjPWJSTgb32HozsJ7AgLNxunBz5aWeKoqSuuWvczUWQCfKyRwmKbBGSkTqhLSq",
  "key17": "46JSr49y3pe9o1UAqoT1zYhYmg9b2SnaF8jNiVMbyrRZ75T5m2VSE9RycA5etNEjJYtoWgiFdGHnEbB6zxAMsPb8",
  "key18": "4tHin7xbTke5bypAqP2bpLUmZjyuzx7PwVZzZjfmLb9ZjgD8LfcKvcPo8cLHCZcYmwcNqXx4KVaPLLPHJxwTRSao",
  "key19": "w8q6v4fzxFLzwGcy5ToEqugFrmPASJBRfesxQDxXvD8LM86Y6f4Uy2FGgLy3R71bQ8piKkbVuXgejJCcF63Wt6F",
  "key20": "2MJyDjxrnAFMV42vWdWrswnNbowtdtBSesHNgsEceWGfvGUZDvSSZDJPLps2MZ3PzKpM2j1KAxTcRaAEPR8BsdDD",
  "key21": "5of7GNdy5GeBnrsSnvkZusdHb49KWHYKpCSvTJKgw3wtpPdT1zP6DsXdE8RdHuJX8v4jjs71sjEkYTqVaGpo41qH",
  "key22": "3uFLGg27Xbpbd9LNZmToMY2jwaGz7WzL2FxRdKK3dgtPxhsmMmhKa7wHipMwncbCFubJCXKd7LMgruhbY5sVMkxh",
  "key23": "4RD7grDCFkx3GhhXpp3nVTHdHeyBFZvmCVhsvj4UmXfMVB6RuMsBaxBTePCt9HPHUfGfobuTXv5k9ZgQwwz9DX4g",
  "key24": "uVwcrjLeZyFWxBtXFhYV4bGvWzoL8rZyZLmHBzuhNCUCXb6Hapmr5jm1tJHLGmNbRm4poTaE9m34zYN1712QHrS",
  "key25": "B4wmoPFseQ7fF2PLwMbD3XKwxBApBG8DKPLFjvw8UDE6Q3Byjftvnqp8a2PgaZcT7wnf7i4qpj4ftEQzF9ZHz55",
  "key26": "Ak8pwTRVDBwtCwVJC4fU9XNHbN9gCzRMRXXntqKEZXT6sAYtXKyoX3brf7GBs6yRTxfMquBY2S3U6r91dozsB22",
  "key27": "3EYf3sak9EgCw7UhoYX7JZeLokrWPnLnGKUezDRBQjF4WmkWLATcgb8QxbqRG7fkoVrX7T5oQmassZWZxB2xj5uA",
  "key28": "2gWSb12pbKy8NtLUauHCbGe5peZuLX4oENvDaz9D49N8MyZCy4wvUvJirAAyigLhpMVNkvyNbT5o4PJkiN8hvgYy",
  "key29": "cGd1fRbkMaVVKiFaYi7NQGgNUN5q5DU6DHkDJNkK4Q6rQuf32HvM916xokUWZsp617z5NvG9iacfhb9sYYTWxip",
  "key30": "5YgdZnnGjGxSuJpCaNYADcosGyfVgehR4P7LSRgCr1EL1zt5nV42Lmxb3f5XXZuNbxz5S8p966fTFbirSRV7YrcL",
  "key31": "5do1v7LF5Vb764Y51kBx23zu59Xp6Jpa2T6274dkx4Ms9QexeHfuJJX6ug18TyKEYMsFar6NsN5zGD2ibLUw5GLR",
  "key32": "rDs2cwHBA2AFN3WCK2zH144VyGSj44NCPJu5A5meS9PWi8jP5Bf2KJSFrH5Dj8iL1KGxhDAPjgG3UndxTjJ5HcK",
  "key33": "8Zq7Yu8kaW41qEkzMLUA7w7B9VyK7mKiSUrzXDXKyMrAnKYdnPBqX8W7WGEFZeDEuWsPxdomfLW2dmh5QyeitGs",
  "key34": "5nHVc4Bfjg4YACDbCTTZ8b3bWriWtTzo3HkJxmtXAn5uFDHJ2oWyxpGWm34sBNDWb18ENQXTsCAHUrkCrrQ1smCK",
  "key35": "4kxZpCJKRbMabHiVHi1Lw9gJtmxvNs4GwUxTDtWaG9RYZbHy6GnVeqg1YTF5fMjFVMydJkC2U8NsovRBjYJjgFmk",
  "key36": "3qzyXptytQD76aYLTDTfd4Tn98FGqedfvj5rgTtTHBdgFagnQDibM9jsrniAQFwBSw7sLKurdt9Dszjwk6yXZrDc",
  "key37": "34kfRAmNzcN5EnFzYjPR4Bme9jhBLS4iXpPfoNqTUdyBq4sqWfU2qm6yFgzwSdGBd9wV8hdqVY7W6ENeb4iX7Kuu",
  "key38": "38AXfB3DCNYA3zsb1kZiCMPNc3KyWeSQsJQ54BgjtvYfGh1hu2U15sXXUVG79AhnRUMvGK4TuJMJsZNL6XfaNMcF",
  "key39": "3mx44YCj4sj72DsW4xt3RHbCYTbFBtD7EDSurcSVMSgkazenJNyNMyZ9aodoeri9JTa94y1yS3HAoCkavW8zap9R",
  "key40": "5LLLK8iFj4JDDJim3kxBPt3U1vwiY6p3FUvPhQAXkorSdkUT9weHNrrEnMasGacXcGsBL5yHKqc91By3CGrxZnag",
  "key41": "5PZXLfvj1eXih1KgkqkLST57nWghSC3u4yqi5cbMKeuY47Af1kezkN3dgHrcxmAtJ25BRwevai2gmJPwzUF4fVAa",
  "key42": "3TkX5xmHyKaRQ42doAPfzkgHCCqed6fNAFJwAQTU4i8YhEwQe3pChcaMfPfMaTMfZ59bq1thuqStauWKYQteXy3f",
  "key43": "5z8hzgji6bCQEEGMhcJSifgJV5eKNFhZAz1p7X2Qs1JJRXCh9Xp3GPATKS2jvTSvmB2JhCWiubzpZR2NCuMS1p9J",
  "key44": "2fisEUNoDj9Bhet1FYagYPLwtBBjJwv81YcCXsZr7ZfGnvabJaxkxbt13yUGVc33Aj8WZjnUfQdzDCEStLcBRKYu",
  "key45": "4k8om74fiRs7A2Fm6dCbya6VKQHQDcD82L493MW6zMeLyWJgPuaNUhDiuAPtYfvSyhTUAZewEVgJZyBfbznY2nXT",
  "key46": "391dHLhPV41bYyjcnPHcmu2pzXWckqmULq5KaQqcggsWw4zkUZUxQKGqsWTmX7xxwu86WjQUZktjfsD76SquRHkY",
  "key47": "2sFuzKdh8puVYBJhYvjKwQ8h5k1VT6hAAajUtAM9ShE5zHc5tUWvfNzoWshVhRWiXn1wrRy3bSst37Y4UfP39hAd"
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
