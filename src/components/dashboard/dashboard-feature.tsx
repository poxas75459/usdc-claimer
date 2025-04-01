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
    "57YP1V3X2VahGJpPd8eEqg2zFeML7aXq9uN1QjSZL31dJ9tytbLCCdMxX2KBea1NyANYSFWJyxmjkLk4vHBZ4tcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QbZHdz8fbWX3wQ64bXgKgESnu1k5te6Ranaseg4aRL6vHaDQES2XSwddZbyY1ibPmnYm2GogRzPS4awKEiz6Csr",
  "key1": "58B1hSgMGR3xEfMxnLsPyPfTveeLGC8hJeur88U4Nz7e9P3hFND2AU2GB37TUSB932gks16qbD1tq3QbjfPH4kiz",
  "key2": "2Mgptykkj3LrCtsdKP2GsP5gMtAQHvjreAZdSsAJV9VX6A5PHWHhfjfSYxcDT8aJB8fK349P8ZaKtwtjb2pZsDzb",
  "key3": "2dx3PvRPAxVJeYf7mkTzwDMZZr8oaLY6beCRpSB5ZY3QehPMhcmmvLUbV62VgsS1rKXxe1aC4g1KJa4oXsrWFALC",
  "key4": "3iV5ivU8uP3k1qEeUYfPTJzyedZ3rdm2CjfFydKZRusirSyv2bBhdP6RX4jFiYEyEagmytjTQgva7Jrvy1jkUhVL",
  "key5": "2bGkzRvu9NAKXoJ4hrgTTzz8Qr7X4JmpCVcGzPsYHCiBftmRpRHUuxc2QvAB4jx466kSEfWUQc9XsPooH6cDx8kj",
  "key6": "2vGWUAnFuJh2EyLqhFdxVksdgqXnhhtcA1NBtFYekVrQ8QB7sjyY2codEbyBdmELhTxaC7RW9s8tPpf8JuHHWgah",
  "key7": "3HGWAFR8u9Z9ymwPbZvd3e67RCoSc5i3rEPHw8eAhaBYiNnYn9raL4LEzvuYF4wtZ8k97UcqHXYpRTzpBPi5po4h",
  "key8": "fS6gW8BPeGG4PttGAjuRnbhZPtCAesAnvp6RjjYeSZyBXxAtdnXCuEGKoi3uhyNTK5mxKaSvy7vmWjWn9BEm4XY",
  "key9": "2n38BW7bB26Dbr6EWdcPGFpbnfsuB5qKUatwEQqiDUtv6Pk9y7YgmVKG1hM1UT6FzwwZdiePcnGucBHYSNAUYzdX",
  "key10": "3PC2dr2uXWPRbNd4rmtPEie1Z5kUsC6w8hVjycNeqqSbLWiJyc7V5U7zvsTE8BJzrSSwjiEt99B8DwXzXYdvCnDT",
  "key11": "pnDTAmeT7ETdaoJzWRraT3558rCBYd2QJx9EPXMVXzfCw59FV8Uigk9XKgHJ5nowse19V9msfQAPxUxNWuhFB8A",
  "key12": "623MWEMDeZNi9Je7HqKLoVpA4AFT499eyJhKyds1VQHK9yoL9UCRpi992KSJX7vDNpsjs3RVRTQ9cQmob5zWifMq",
  "key13": "5gPRF7Ea9hHFP5WaypXigdtDXu9BL8aRdAxxZx2gkoefHLnZMAuE7FUvFN1WMhojruLiZ5L5KwBNUUe5vi2MGvFP",
  "key14": "8swCZpEgtAnu1bQ1pSfifSBkZ8wT4bNjeJZBMZuEsU8xPVJEUCoarAXxuepuiH5gf81tofW2B3SkSxEcLcB9Mtu",
  "key15": "584kPJR2FdpVEEArAtLAf5qdgpLiCS1tGqGzgpydxs1K34U76HtatSsmqXtx6hTZeENQJhDndgBaUjJa3w7JeYqi",
  "key16": "272oFruFsVQXBDRpgaQMNRMa2cQp6vsGesZ4atV9SsCmNyJub9V2BTPLgiRdscRt6MbSGCuJyvswDec8LPuR8f7f",
  "key17": "5ojftqka51USepw2dW8YFMrckcZQZn1JvkSfzTZW3v9KXAr6Q8f4WwkKjx2zgCDKQTR4aw4orCCAQTkCYvF1THas",
  "key18": "5D1DJazTkQ6CeCay79iZdoNnkEAsrnmkixnW2mryL6KyPF5ZxGRVY3svnviwSsdrEzJJaLePAmtVEFywDGH9mKWv",
  "key19": "64xqFLNfueDR8GUFufyJ5KiUWDxuoCgGa8r4uqpFTkLYWEFcPWWB6NpG8dJwDVdDjgd2zn16ZkV6amzK3Uz1oB9F",
  "key20": "2t2CDJKZ4yBTj6hjQxvdE4fKQ1jgYuc2AYa2J6H87TnkAhjKP9RUy8DtSsAerQGNMcekBRQeMsDunmCGNgUtv1a1",
  "key21": "xAfekEUxnUWYqHADSAvS1VNVg75n5N4mPxxtQTxG3RTL35DiVEn2zcrtByFsTxV5ZcD2CHH2aTNwBVTVVDNRViz",
  "key22": "4dGMWHdK5BY1htvFsuxxPM6aJEX7F6J5FmPke31JU6ukYHsgAxMPYXwvV4c5aiTWYeQFMdmPPKSdidvvXa5yFz81",
  "key23": "5cXpkX6kCtSyQCZJRm5ZtZLxCBbF5kgw1r61V3zPquczr9QkLC9LjyS7DFkye7N5a4aGbiFaoiZC2iqPoBya447S",
  "key24": "3EoTyH5TWjHCtpQJQSCEYoYDXWdwWpSed2oYfi9U1t5q3hEUf8ufQyTpcXqGvaJWsueCVvH6QXvCqXJgPTDt8KRJ",
  "key25": "3yrQ616exrgpdK1fkK9mUiuswBmUztxyptD2gzADGgt9keZkArZDkKRe1wqdwL48XvaceuqVWDYDEoVJxrSFnTs3",
  "key26": "4xkPc9oZcHrHXF2tWLXvwaGRFF8RVJhoJfy3wnxd1L5DkNmQSs2S2ojZQWrRxz5xc56rh1RR8wXnWJupooE2FtHn",
  "key27": "2P8A1LSgtw8Mx1X1K6z6qnYJinHbwuMB8UKs78BV6xwPmSeLVHUKGRXGa7e59sr5xBaziGrmsf2UsVHRxgAmYAzY",
  "key28": "3iSrBcZQFDuRziwj9wKYRLMFi9XAiFfiS715FCtiH96Bkkzps3tLALEfFwQDSiRKP96EzTq2eUvjSzcCjrZa9L2g",
  "key29": "22qMKCD9q1skPLxhMaAmpoKjZpZGG2otBXKVNwbjKWGJEz59e4pEgpKL8g87ZhseTefHwR2tsB1cJrbXVKZV75Th",
  "key30": "54ZV2CyRRnHuc1R995eyJCq9zkWFwKNzh2xGCsKrNwELyzs6cB5HEd44A8VNVfBwsyYii4TEzGR5SmFVj8N9fh8y",
  "key31": "3KikBW8WqhWpFzm7vPTmZaNYrwQnwGvgWVX1Ya2ZvntXkTquVuKXpzpJXCRyvzbBmeTzJdP4XDGD7GrUnGv5kL4B",
  "key32": "bagCWkfZJeZs836DQ7iEHvBBGLcdPBzdSGsKuhfqj6Ttv95cSwth5yCAyYPxnfnfcEV5JQTcqPwg2eA87q2wbQy",
  "key33": "55Z6RfPGUxMaEamtdfTvkvNgcsrr6aT83rKUCLa1BFd8kqHRGVaroVFMEYM5Pq5QxupxFgaNpcAHyKWKz6GZaRV7",
  "key34": "Ltqyd11jqpjNLsibmYyBigimp9SLGMAxExMy7ZbDHewDtxramroTRPQkpRzcctnjng9bUVq3BcT5pQgKC8d4168",
  "key35": "3uH9fnLghNBL2k9seSZVoEkURd7nofqN5ZLxvJ1Aqfy3fqk9AFFQrbeP4Un3bFffa4fH1gLL6zC3XfhzWxb7j3ya",
  "key36": "5i4BP5wtmYAnYxatjGuDD5x8kUDtgQrQSb2rbtQq9se1us2mTbhzoSZeSy3MJXAJ8PQqqiBjiLQxsarFU3ZhgYrw",
  "key37": "4kPmrFg4qeDascCeu13xfCT8ML4xju3MbfzHaReM1gHWjW65PtYQfRjLEShPzVyq11NYJMMVW2B5VBjNwuSWus3D",
  "key38": "3Z7QinqzgsvC7SbjApDGhU12VEQN1m6BPJd5qWTJEeadHfN2Qbzpqgd4J97DxUeJMrC4ydTZuDPjLwQLuEJM4nSw",
  "key39": "55jZr3xDBH3TfxasnVB9XGAnpS5HU3D7gjECcGFLb7EZePEzPC7uYYPpb5UC9WBzPcjKRVRvrFiNxZwQFmAyrpFw",
  "key40": "5R6nFCJWvr5acrXsexDeAmnThdJyqRhVgWD2m4vXwPz99DB9zXmfCsXehBdpkNb55CBrfRYHDDEL5MusXJw27XYT",
  "key41": "2B25LRMyBsXyE126g64gQ4qpsDYq2ok7Qd6TSkAP7HmBsB6aBLhdM7smMRf56ebacJsWCFbR78ggMgv18koVCsgT"
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
