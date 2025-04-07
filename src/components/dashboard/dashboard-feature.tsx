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
    "4LU4EmYfFrP3ChJcjk6Qpty74ZPRi9gaZjJp91QWqReNLGDLa5UEQEEGNXK7XjKUsCHPFySQWjj4sgevwkd9dVkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cbwcE922zXEe2HryZMytXRmahWkwVivL1dgS2Aug8EkNkmS3uCVrUtrbBkRw4nQVJrzZEygqG9zFN2x66JmPeHb",
  "key1": "3fS2w7Cjs6zcvanuuDfhtVXYdKUxaZmGDqiwNrcbhKSRmcaCrQzPQAEiPj4KUXCmdBvXx7ztWEsxNdwEN3oGRJcR",
  "key2": "5iHxDsFh5372NDHS3U29U3GdnT14otBniYbXn1A6TpoNzcBfMT5tQQ7foiBMXCWU8EkoC434gQ7g7hGp5a1vPPAr",
  "key3": "5epakx4b5Zpno4SPFD2BfvDp1vQnBojuFpfYaq3CiPZXbEWoQZwEufirnfwGGAAhZh2bKo4tVHZ2GTrGFSk5KbuR",
  "key4": "vNbsPHGdCFKShDFvSCBCh6UjMopXY9ip64N4FeVdoehihmNWc6d55FNSRgGNF5hdVh6Ehej6mRdkNQ11hxTUop6",
  "key5": "3mD1QUWapPweBS3ZY38Va4vmifMKm3HjJC4FCHGbT8a48kM1tLUpPmLf1fC2GSgKjeyxxFNm4Pe3B2XSNBfWXQKa",
  "key6": "5eH816x1qsoFKoA3PP9FvE5SzQYaNaV2Z9TeAzXvYZ8JfwoZJg3mTWC6PYat2pGkJ4GNPaVMYHW5H5ZEvTDHmnQe",
  "key7": "4w5NRP1GL9bpWUYB7JZEuiw7DZ8EbgEg8ufwMbk9vVxUZ2LTrDnf77LfoKCtjmR1auqByTywuE4q1rhyhM2Cz6az",
  "key8": "3vE2ZkWdQmfwH2FyTkCF9e2XrzdT8cSSdZ3QH2yRAjNyyhApEE59z3oS2kmaNKFsUqi6ihZgAUwAorBoRyju8ggr",
  "key9": "2SiR3xPRQ6kPckaxmvSnNRWQuWFvZz3yTQu3RLxXVpo1uP9aDEVLjxBJ9Qm8yxmycSUBxDP7FDDxQVrme7eAA5BE",
  "key10": "2mxK78zRMeaXc9L8JSSXkwN6UocCYTt4F35u3EqABAQdYCoweSQX99X8DapGUu1Ad2Xhus4dbtG2jwazBgiytHRT",
  "key11": "5GEcDCvsCvt8Kacv8MCL9iwMkz5Q8SJY3m65go8FM4NnLXxcigZ81XdJ4QcmghpB1TNLD6VuPtHguDvG2AomjMti",
  "key12": "4P3H2j79z4qwmTDxcvyr6h5vwYz5axmyGYpBX7tqJWsK5nCMcozjSrJ9VQSJJcPT6sKRbY5dLfHKL8VgQqhoVmia",
  "key13": "3nBFrNtnkqG5ip2XTrqrJpm8CuNc8cu8C2kCRzwSACcMuDUAXmkce2nxPbMRMfmiuGr7JFqU3EJF5YrXUJTvyU5",
  "key14": "3NPvhPrpg4N6mch1iLibsZdNggaEGaMDK7nLoPP6zko1hmjZZ1UA5sK2diju8VDJhwhSdGbSeRnUkRisce8AFipT",
  "key15": "2hPdQaKV2S8WU4aPuj2seBfCwwU1uU8crTrtd5Kazb2kNT1X1rXfH5hwxrJbeFVyoPsMQxXNiVyUb7MCYnCRozAe",
  "key16": "4V1DTuQFVGhbc2rJKEKkMYLVtFb91MGHVausMXY3wxfNtCvbbW4GWJZ1K5pMnm4BQ4mPucomHsH9Z6khLEnqxa47",
  "key17": "2LYRqqAo9PAh3cq3xjigmzoFKteiFk6SD5kFmNscZeeDNkZ47XcKqeJd5LMhBRUHJPX7iT27vqRU5fobi83LviL2",
  "key18": "2nTtQajHRpfAe38TnzuxAqKRQs33o8gRHBxrvVC4hWvZmD6huQhGJqp66MLpwgdvjk2A3BPYQdFAhCxFKvcVPevP",
  "key19": "38SxLpuZw81ffiSt2Lv4oNU3tBUNGhxiUM1XX2RvYNqtXwLxSXCB1WKVmBaeCTV4P6tzuRwAfqwYBcxjra7RS714",
  "key20": "3TuUawd3BzxfKdvhHRdKRFmecYUQXqRupmvXJtvj3ogXuEwCn7c2rGuVc3otgCFJ5m4ZX5kgb5GxpwTro7qeu6Vp",
  "key21": "34L7xnu1GbrYvJ4dwTx6CkMvJi8BTaFkQMj4BYfxUzvNwmkf9XSBuTiAhYuCpFVYMDYd3Jg3oDRRBwkSwUf1qmZT",
  "key22": "dJkw1hhUZB5gBr8zMAD3q1cUN6Ktkj64ooPpadoSF9mJPV6ArkJ8xiu8VTGCKqTG9ChPiGJbFYhSRikQsWfH2HU",
  "key23": "57ecPnXCC9JTZu5XJThEtYtswpuVF3Gj9UFvtoGKfyeffcW2FBpB8X9MPGZydEyyTjcFNnbmX4u5PHT1xY1oJaCf",
  "key24": "4iwM49kTGzySy6ccUnttLTXiNvVrbN4uGU9qagjW3W3RNyuvQ8MCLs9YfRCqd9KUL2MY2NjitSPag3UnfSBxkH1S",
  "key25": "2tqf9emceyQJ5o3ZDky2VqDdWeeL45unqxdCgQVtA193FGoWdM7VcZeuCgP7SbjDN2DHrTMhutDZduAZYJepcDd6",
  "key26": "3JajhKNjpPqxnABmegDph3zMy2jyC6c2376XxkTfW1nLC564mbSddbatTLEwGuuWYT9Xk8doQ1b8SmDr76noAovL",
  "key27": "3YaXFTNbo3d4SEZXHtc4zwLSFnrA3AD9aTLGFZvsaAE4KvL8kk6S9VPkTCVaMicDmzjwVTszvtoPBYuSBC8XwCcq",
  "key28": "2n4hQxRby1XQMNFUE5uoGP2VB46kh6A6ZTu8vjopQT7yCATRFw27XhWZzdmst522wToeHYYvvS8x3XKH37nTgbfg",
  "key29": "GM5eToXA19hBJhRjWE3dT2LXTwK8FxoDrvtyNLURr3WYkqY7XNAdR7U8xUvoJSAiYd8nJ8vbwgV8icAG1LSrhUP",
  "key30": "DcUy8j9tUofYvcmbAPUkMsoCx7PuBpsJSdwhSksbWBd7CkjNPFbVVVvZWjwbHpSeHWCGqJu788C2C83i76ghWSj",
  "key31": "2sHx3MjnhT1FiviRyphQR7kKNdrJxHAd8uLrBGkxicgGkZn2kNCdLa918dUqFauPLk25qo2cRU7CABFdjp4aLdw1",
  "key32": "4SgiNj29SRUrmNjUkkWUNLptAYBwBa33iHN2XGkqZHTiWbWfYrNuKo528ZaVMWzEN9ZnRRs7cnkgZeLJswqSsB77",
  "key33": "472NsXqZASc5gaDbLF9biipEbvrEMTxuMEzqLcyWSedyr2QTA7NJ6vwVH8zPaoXLEvJa8mASrhkiznuYzf9MTWqS"
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
