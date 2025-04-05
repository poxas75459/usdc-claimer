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
    "2hQnBaRYVE2aKfkBKTbqBJKrhPdcDM3wtRDLmm62RCmMTerKKFakARXW8QxuDEiM3Ugip5r8BQFvXw5TqriRpdzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mtdfTmjWHySbpPdswNrTjG1rk3BTyoVMFfX2TeibeHpFTS3scSPs7ASsMiVD1VYVXDo9Mntv3fALtHX8DZhKgfw",
  "key1": "411zVBemJ9Dfuuep5WJVBu9ChGGbBPr8QK8CHsm2xsBefKE7KKAfbtTht9hCrTjKdeLWarc2UgZj6izgXvV2M6MM",
  "key2": "jqjoU6rGLowz2YEtXiKPAAKeiSf4mHZwc9BAvtQbK5KVwTneWTGLPzAYFjy7TirmjJa5yooRgjwGZeEtCX6AS9g",
  "key3": "5iWcerQMj5XLzq1CWLQDNQSu7hFfYtB8DToTr4jGmUSt7ZuPzeiGpcqXj9UmYii39GEjsodjLD8PvuNfp6TbTAXb",
  "key4": "AdKtWYastjiDpvHdisPPt5fEpZ5bF7HVnn4pGtVPzfkN147rwtXwKkRRiBqFqfLxEmcKDq7EsQkXHd5S6Fz8hgv",
  "key5": "4RoWTREW6BKnWxdkRhYdp6TWwNFRogTZ4kniZu64SZdj41j71tX2HwdcqWhBCHgHDun2MxrfgXULP9LPjFHAZMwY",
  "key6": "NYEKqC8NjWjLfgR7L6bbdu7zUDuDEZyfm9fnZimCV2kn7Bp8hbAbjwEeoUrFKCN4Uf3fCYZZTdnLJrhqX6vnR7s",
  "key7": "rn9vornPmskbVqE5fTS6eQdGZkYjoMAVx7SM5zeE1WbkLLK9iUzD4gJPXe7dBfLSjQNACDoTstwukQq4HvES29B",
  "key8": "5HuznGLQLBM3Jh2TdRF7cyWFwsQ1NhGE2mHQtMDnYWPd1JLrgC9ZTeVacgFFRSx1KLqLpqNkwYCuaDvpGfA7gXTE",
  "key9": "5XNQrVBNqn2ZXYMM8whZ2tYXh8CSaK6WsiCa2E5uwjcH9C3tAmRefTrSQr3xjBNVNNkK9KQcBbRhqN1Cc8eAj7EV",
  "key10": "2fhCDCWGUmFE8deBmnVvNPobnA9miU7mwZaJZ7a7bVvLsoYrdBUWokzs35Tcr4iGZkjsgcVErKyKascu1WEM79LB",
  "key11": "4WdNgKqkJiDAgNeHvkpwjULMgCSUtDfVDTvBFToQTV3xqSVx5LrB77cCMMb4RjFr8yeTEfZJ1fWpS7Q35Wc79iKY",
  "key12": "5KVKdEoANNk1S6aieb6jzVYAcBdxQvkvk8g4kZxZNiNKxuaebHZAm5ANFGEiyKB1nLLc8q8dUgPHdiYUSvqFXadN",
  "key13": "z2B8EmLAPXQWt23xDHEbVJYjnrf7G9eCVyAqkxBbvYTUJRRm5eyw1Cv1WWZ6AiKVLE6BStdMTZ517a835eCLo3Z",
  "key14": "4r1bHf8ykMzLTohXe7mo32YEXtGq7cwraQUoTStAcXVD2Fe6MWP4CSR7mv1rkAM5DHQzmAoypfSrg4zfDQKGDsu2",
  "key15": "4nYdEQYXbfgj5pEqSEiShKDRZ16RwqmJGLdULAzUQV1vWFwBD2wdz34kWBqPAKHhbhqHjHgyzkH9W3KnCod6z84Z",
  "key16": "3gHgTs77eeUnw7WGs7Cjiaqx4P5Xpqhvv61pamYavvwk1Ry4fadUTJBdLnSCwSUjMi1M5fQRgm88bVmxYtYrQTaz",
  "key17": "4RdZCMFCewwd2PBfvjS5FaG4z3mr3B3jyCRmyLh2Gt6u6hLj5ovzaZPF411awRXdxV2tSiFjmECPtLwGFZt9AwSP",
  "key18": "3v7VaBTqhAiKLb282grwaipFkE7PGjX8HJQsf5R8HQ6HtoHbcSZXdKxyDLfehaYDS9JpuX65Nfe7QqSBxEQhQ5p8",
  "key19": "5bKeRRoGgDCHSp8tU3ZGr5jZk73f81dd3q3MdBnM1gQTTwat9aWSjuHt78GWG6483FgmaV1XABsapgKqqr7UQHej",
  "key20": "zQCwxmFHYtVFsmJPiVyThvyPoSf9eTosM7DF7EKnWRPfy8QGkLKTX8LhzkfRe8tpW7J6swpibrosc4kiZiJYFFJ",
  "key21": "44s3YB4urdYLC6WkLvq33XZ8edaJXR61o21bp7dBDS4XKeJJTGCsTxpLAkkMsk4VGyoGGohmSFaYYsnSAUUPRbZT",
  "key22": "4m698PCctVhmJKhfvgpDmuDTsL9ssAJ9J5JXvicb6GNAQFJ2cey4mqy7pL5NDkq7hqnhnhrTC5JE9tyYuJahx1Qu",
  "key23": "5Vt5AsS4W7s2rjtnjijvjgMzEnTDqaevXCJDiExr8wcK7WfYcade4ktejNcVEnmwL4qZMGKTtFUGqWrpBxDoBFTA",
  "key24": "3jTXJhgDs5L4nL5VyvnWFA9yahMuomcC7NYsbQavSj8scJL4sxxEpxwt1K3qHtS2jWvGvCfHFivHQpi3RM6KxvLG",
  "key25": "62o5hfTm3DZPQsBUD57RDEqKWVgmcDZAtB48b9MyGM9dqo6mp7P1FGqMabnaqDgWiHMkEGsY1eKqdtFC7Pq7t5as",
  "key26": "3T4hEfP7voqhqbMWGgWRprzvT4rZV1hJrtByspD3HZpsmTvYoeUsCKoNSchH7gPyLwFqCfULfZgL7FGNYDuD8kdT",
  "key27": "4NJMriddjC5LTMa9Xc98cGyj3C3VKMKQ7z4XSHaTV2g4f3BXbnuo7Sm9E4zvSUcpk8612mWBvoqXHKJY2on4HsjL",
  "key28": "4a4DyS4tMRWNfaupjMnjPmVKxkWSjwpjdners9o374PymGZz1184BPfUXQXkLyUnCxrGara3XLJf4v4aFpxZjyCy",
  "key29": "27YyqELGTjSkMYgaHYHTyWxJjbWsJgeSoN6FiuCj4XQdrqvdB4QqzPNAVx2U5e2dJSYWModtHvZ9kGJ5RducYpBm",
  "key30": "45QJQwGnNUFjdxfA6fTGLEx89DM4vT3SPK9qY8pSFgzD1BAvCwjQcw1bGbpFrbzKxWbESbzu8VBEDoi8rA53ZFZq",
  "key31": "64u51ZKHQQJjJazNt72RQZoGHumyyuDz2H1RNHyQ9Y8sxk1fLAXmYhkToz7LVJj4TAEPwPJ7stcm4nYERSWK17Uw",
  "key32": "2U4E3pCYWg7ZPTeZ4KBWQnvtDXDVj787fzPUWgsf7gLRA1WrKjT5ex4NnQogBZQ4JAWKT1JFjmrCYp4GG1pkZ4qU",
  "key33": "63cPGYFzqPhGpzTJNjTGK2CGbuWQHPXivTdMEfkVd643qXpfHrGJLgVkAK76SihJetTnMMfEPUT5QTo3xKFyZUBQ",
  "key34": "2Vx954QzWWaMqfp3KTwLhCbgS5VD65n1NZAzUTTDkknZHGhBMNbMffydxfJaf2iVFdDG5B7XD28AdmhbUgvWjJmT",
  "key35": "4fnFPdpukGgmEnetywoZ1JZjQ4fNj2Tm5TGgjtNB71uPQc2rncFLMVuyxsyFCGrxgkVfwBygDSGJu1uYgomApTP7",
  "key36": "2vShQeZHh18zmU58SN6GasoLZFJhx2Fqk3Y6tpXCMMo5fJoVbrKjmNJLUpUYWj6fgZFKs6pzPycmGpbm22C8y856",
  "key37": "2vFdxxh8drqZUwGj1j8rXUzb7TmHn9XMxZVj8B64aff379H8Crqj7m3ocfAyh8jUxoH3Kdrpq3yQFj1FzEF4AwhV",
  "key38": "5ucvtwzBGzrmMBw9Pu2oHhSyPTfuMZ7BHH5rStnegMrCBRsG6Lm55cXVpj2SeWMzibevkCaXLwRZWXUsaWxvTL4C",
  "key39": "3wcMdL7BnLvD1fDaqpryjy8Q7vutJseoWknmX783WJzdnyujWgwoME5rfsio1EJyZhkCDVYoqaFAqETjFniZPsrP",
  "key40": "t1QFSQqD1vgPw8unuoThi3xWEd5xtbDrwJnQJx8emH3N9j6WY8TaGTosRadoiKdMNUsgN8PPC56tJRd5cxtBWko"
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
