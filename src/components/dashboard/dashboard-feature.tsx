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
    "2MviGqJVFubdejJdMq8pth7vcRRRcQqAhjXy3jmji9HwNjVjwX9CMLqEdpc2mQaN48rhrD1NgYvUjC9VHbjzagZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FiKBeWAyxsWAQ5qH3kFm1geuMMVJwBs2H2i2bAoRX4jTEp2oN8rx3nMK3UPmDSPPJQ4dfn3SBYASenQbr8UqRBS",
  "key1": "yh8tRSEo9SCAViRxFYTcJ3TkUTrHgnPYKjSPt1ctn6sVTDzaVBGZog47NoGxcAR8edL3jy4PYzi3wwyt87TV1qE",
  "key2": "5aLurBYtBnJ8F1n2EWw26xFteLFVTQHYKFoSsJNtMWcTTg47AkmTn5JfR9T8aaviw7Bg41djKfN9uV6mEH5JuA66",
  "key3": "63fL6VPiJTb5wrz7zT1hMPQVKLRqmcQZo81c11ZRkUnLEUC2EHTmpjqVERvihnqMBasm9bKUdFjps3Evagx7q4fw",
  "key4": "5Y2NU7oVGkKVbM3hDjxGEBfJVJCFyVkZAB5akwJd7RTBXtsHuXQ85YNST6uJ9nyhgje1sVWn7ciaWs18xDykeBez",
  "key5": "2yMRSDZKKnvaQjkGVndq1gR2PYPa7nSxPXHjcgiygvjXzNKBVBpBprACDZXqK6zDygWrGdForwZmGqbsGPFAJqTi",
  "key6": "3xafLj9gqEhsnRWbR7fZcjMtavgvPMuLNVE789dr7B8Z3DLUABh6hcCvZLYAK3tKccMJwWZQx1iryqm8U87jb5ZR",
  "key7": "KCqCE3QBaM7FvLhU41zqxSmrj29KWRSiTiMrus9ZTY7DWz1sNRYucWwPsqv9Lzyo8LjmXnngmLDSL4GPFWfFf5P",
  "key8": "rRxemdn3eXKRMu2v6xWmYB9a8xpUaUCs8NhriUvRv78sgq8FpwHYvtVajVXBaoRT2CVmbJ2mqnmjzhwVipwo4dj",
  "key9": "2pkvdhHATPdnyWMKMbTqTCGSmybSTPQirCRphEbKbSNFpjodjx9EBKD3FKtTY9xJHmgTFveoJqMpzUqr8Y7axnGx",
  "key10": "3tQaF8xgCydpizW2VrwN2CFFV8AXurtG7Pndwtvsv62ub2zUkkkFnrzaKw9MtMxUL22AM6csopFcsA6e9nChfQAH",
  "key11": "38bKybQiaefhCtYoiMVU2HkZNd2Hsrn5HGxcxUvHJjrf6Xeewpa21WfnZt5BKV6hnA6CVSPJ8vJo18pbGRwBLytB",
  "key12": "36j3rd4W9PDtAzgw6t7KyvUJKQhe9NaX9ibEhYTGmad46yrMdpTvNJQg9vSZKBffxeC9TpnwHsVvRG6nwt3ex81W",
  "key13": "2DVpR9JABkTZ8j4FdUf1sCyRobGrJpuKKvEFpQSJ1tcytAVdaUF2bbdku8DkisjgsMm3sFebWBCBzyvszoABPitv",
  "key14": "3kXkHME2wZccw9funNbNhWQMriuDHTw5zg8sZP2yd1gyW7NBoXmbqgk1ytpmzHsHSTuwJ4L2rNck9mxNKochd3LF",
  "key15": "2eqndrGfMmxbTDq11Jt9ihK1UeNuQYnxkhqtmzCtN7H98ka1f2MB5efGjfn442LvNLFg7BhZQXbUX4mWtmtLfUp3",
  "key16": "3LWVCNdtpiw8snTmxBVMMzg9mBodKpkdnkjamXPopxZoT93PREXaYKKegYD2swAHayH49fW4rbQzWtxC2XFX5Kcn",
  "key17": "4HrExd7ejGzfskvxYKgdnS6WsMoRkMDMS1zeus3qGDxJxK7c26dWXfuapPDrEF96aFHbPjct9x745iMu3CTmdqWc",
  "key18": "4hMxTMUTqc8QQNmukT5msJKKP6ST52BXvjfQpcpGjHrecsazb2D5PVvQXqsVbbuKm1eNZ3AfFf4en9x2NHwAcmmV",
  "key19": "2sXSGFH5XyUzVvb4LRi1nXonaSkQnjiZ9cqPAzrbp2MxBVCuzKxxoPzh5nD7JDjqCSzAz9WPGCH6YRuyHz6bAHfr",
  "key20": "5Jr3iBaZLoBFKgSBz5YBhPYdE5KpsT8kUipoUxjeJeuVmwMP78CqKvTNBrq2VG45LjRDZ926N4jKKcj9fLLo5H2i",
  "key21": "67qyqovRy3gvv9x8hAaEkmGYsFwbcJaEDdZW8e8p6binfVABr36vXgrdQzoHmVz7o1x6kAQ9BGY34DBPhjJqUvaF",
  "key22": "3c9W7VR2LPntmD3MxLNNxQVBNsZsKBfPVFZEKFHw35ZQvW3DHa6THcRmwfFtHk3Xy781Vp4yNpW3tkn1wA8n4GwG",
  "key23": "4na6mhViygkeoKfbatvGwGqHQq7emUCN7CvicoeV2tcm6Nc6DiKodapcvLd4C7reUTPgNwJ8CQgQLjNoqh8E9JaA",
  "key24": "4HEF7hdeARmoLeeuTsKRWbr9nN32juBHcFW2zCbRVWRJfGgeUwUsKLnDC2MiV8PGZ8rRSMy5TgSkZAdaLXXbYy1m",
  "key25": "5ypBkm7dqT4tpCVEfqJciWB6rTozYzZ3JdnjvULoJV8qZzZzL5e2YJEHsffG4qcvjqCtfL7tpykNFG73Dn1UTsZD",
  "key26": "2b36jWyJs2cX4f8UTVyuVoYmnf77Raqtjgtazw3EZPS1D5MfGuKJYkkjpmDwx7pnMFAKnYshFpJThVubsV4xeFu",
  "key27": "53dEyDVj9e3dQq1GQvoVeAksK1z4cPwp8JyPgBsCWrzQqntCTJFsYBBezufxN3aR9qsU51UcuUzJqr2tEtVHt6Rv",
  "key28": "qp5AFFAn4i7QnjFssrJd85RqoY4v3cofDJCmhXCGm7m4rZ4KXS5D4viGByWLaDUJbs2bwxWbH7myHX6oXPFNEEK",
  "key29": "4bYapVyfMJu3dFXLA7Mec9Q74VgeZFzqJjXNcmBYxz3oZydhvR7jDPmL3gxgbynRfGWUU8WeEvCZga47MCCFYvAb",
  "key30": "3UvAq2E3pYRBhkMmQ5NLJjQkkDoSYyFi7MVEZZt9BThvCxyB4fuhTeyxkZM61j1q9NNVxBkrhgUTF2GfeJEixop4",
  "key31": "4RffK6t7XaJuFSWaC3P32uqABRcZzjfjgcTiBpCzbBD64t8wJN5zvmMnYFSeBxwFkiMkPjnYPNnGAMwguyuwkHKA",
  "key32": "4emhN3r5dVdA3qh419ch2quqAsuRyXkrzwPf48daqMrkGnmMqAwVu9VZPBtXqHcC1Gz2xUHE6h4VvivqB5ZVawPk",
  "key33": "49pCYcZTF8bYmvroz245XtSV1Vheh2eR93TMkfi3dJPMjiMVfPHysyxrziJBLHALiHosCzPDArbLrhCA6Xiacs6p",
  "key34": "5rx86scPE38LP2EVKvRhrNfhroZ52GSJev1eVYLxuVJ3tifFb49jGnDqKLqxeJdeR6kuLULL9xds3aREVkvWgcNe",
  "key35": "3uMhJYp5keeuUdA6vqd3LUQX1183z9QxCgHfAXafnjvZ8qqqDYNsziVv3AVRk8DC5WYohPGpUCAfnqn8TAXdWvhx",
  "key36": "5ifBRs8PcdRirzVXUt1TBFzn9g7A4rRauT2iEqSYtKyXrHeMV3QaNgL5KbfmtYoPrrjcuqXVY46m9m6ELQenJrXC",
  "key37": "5a5bTVoyoKDighJFJWJwB6wuCnLLPgm9JJLhJoXArkygwUqHWrXUMf2TuxiQNzqP2tsaSuSCnmnXGwf6CUrzKx2T",
  "key38": "3WwJfdKaP6sSdeYkGTgSHGu9BG7dgdY8nCKTvaVjmBW3VcesQUeDUTrFQfb9peJ8vtQyJGNtj6AEbPLRMZVfEbVt",
  "key39": "UXk7LychJJtzmADowockrgLFNFWFTpbuYBt8tJeXnDfaFfasUCGqpDTYzDagMACe6AVDnKgr3hQGTuLd2wu9t6N",
  "key40": "ywNyJUoe7JkU3bkNWZSiPKnBcd3cqD73J6TchqJKVbjVsFJpM7HBDPbEx5v2XHY49pXVWpqaFvbdLbTchrti1Kh",
  "key41": "32DiN17hrHKX8uxwjQcHtTqGtyevHhYFhPUZwD5UT9kZkWu3zpMnjwjiNrZ1xby5K531VSxxTEg4hmEN2DB4Sfgn",
  "key42": "5iBicoBt1Dreefh2drzfsZ8miYa5MM8hLDEWkmhkyGixA7HFncAsaAKhf3ksecXjfvWM7YTicReBjKaw5ifnmeWg",
  "key43": "5pWKJEhk7rEMH4ycAPjCLwrLteHMXTNJLVE4bAPTtBFM5BnGdHCnJ3An6D1r4rkDmdNPzmdEUUriZrrnuao9Vzi9",
  "key44": "3rjGzytBXvSwn627LA9kb1sgD7xJm8DrZNJqanu4hJ4gtdmM9agP4zYoxrNhCiveWFw5KjtqsDLDpcWirDVhAqWR"
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
