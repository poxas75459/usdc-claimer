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
    "3mxCPoc7mBNv1d91nqzs98ZGnk6Z1UHzXEsHoq3Ac6mPWm8VKBtVWCnG3XMQNLh5fq4XU1p78E54rcY6oBHAwF8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bRENfuzV5ifasCWkPmYvqf6JXVwAA6CwpGLN9wHbLUupzP9aF5bBZ6rxvUVwccsofF76kkn8Yr9F4CGUPz6CYVe",
  "key1": "5xrF5j1WmEVxf575gM5P4opQHPksK3FWiuUP1DLosYt5c9i1GPfLjyGDQFhwK3xUo3nHntvAH1jsRH6yHWaXU5eL",
  "key2": "2MbKeMgxw6JWxcdU7NFDx4mTc89wMXR54qp5D3xAtCkfJ2Rp6FPtru7ojDLGd5xaZsEqjQqKMWCD3fGuY93B1mzP",
  "key3": "3eeB3pefVxH5bYqGqcgXyNnZeQyaX28cjBvPVqmWHQ2vw6NB2UWNPpwJqWECp6sCdiF1rasszS33vE51MGL1Wwyw",
  "key4": "31NhJrc6uB1tYWxvdgZFzSry8AdMXaJMvat7yJ2RSAkfcHXVMsTShWzDqBkguYhXLeZF3C7trsZyDhxWGaK9PaER",
  "key5": "3x8Nwr9KTDbFQiuQKrZnLVc4KjpzBWiyuz7YCagX1XMmoKrBNdS3mxuLmYhBmtCat2t4jE7jEqbE43Xwks8DtbPi",
  "key6": "xYP9NDHt86uJ62fQvwUm2fokR7wr7wHac3wympH5K7EE8sRnimJJ1sFepVb9uYarwbkczV4sKFJvgmiPQB4UKom",
  "key7": "4w9mYQxZjPgspXDKt3a5BUM6ZGF3XrS89biMhQN2Vgp3XbP8Pb83pAhCLjRHxh5uWgTxiJNJEFhF6wy3a6vyeb6d",
  "key8": "32YiDbU5VEAeM9NUCc2zi3VKa1FDFnafWVjQcfHdaZyMsJv7hbhrHJ3wj3Zm6HcxG3FiKNaQqYjRbmA52oUKMAwb",
  "key9": "2f3GTEw8EexucGcK1WPvDo4CZgBNnnYS6Z45pUpjciA2BtLP3p5oMcgAgp3Hks98i57nRyb5qsz4LZhSz5vpNpjy",
  "key10": "51ogyCEA1PnobHK5FSqryCPBXozV12cSj3ULN9ouTB4owKTqNH1YsjG2xttNcmErFjbtnx4tvmKJQLBUPv5Gj7Ba",
  "key11": "3DGuHKs23frACHqiJfy7G9xPezCt2zqkLF5w8PoUmqNNBAY7VZ87u6uKUPNG9ARkWDAe4cvWrLi1BQPfGnsHeDhS",
  "key12": "24PyUuyxAgaAK77esE1yK1S65ktDfC8jh4AufZ5E2X6KD7rF9wvoabHxTrNmKrijy9ZeZgpAEFV3t65b96DxJb4J",
  "key13": "5HoEUmXyCWUYYBnVMRV3HhKXa96cSJi3KbqNtY5x8bJicZdyCCMc3bCHFABsAQzM49TumHspVxBnMEWGoN2i9GsT",
  "key14": "C5dcrpByT3MfrRhngi5vM917Jhyjug5GJNJBw9c3i4fmR8AfRAk63XZdtBtpXaRceGJHi3q3gm5y5gDbQ28BAcP",
  "key15": "BMCCNTzDk7nhkysWHpa2m6rqvwwD5HgDhFEB2EUpFrcGTeixwJ2VDapnHboZW6epV7FmwzAtxhXBBzyriD2KG5B",
  "key16": "UhAXQfS675wyW5kDTfvcAdaePjQhLi82ybQpGxf6wfU1W28PmCZyLZTcg3jvKt3Uk3cksGYx1WSv1gL1rcYQmUK",
  "key17": "2D3yZqavdLKYYMtS1zqkAickseY1TgqnTJd32tLT1Hvrv2EqKtEvmzzL8Vy59itvCBR2dRrmpk5HqW8UQewmUAbx",
  "key18": "2LVXQXBGA7AN8TWjpsaGCwG8zeNqmqk8dxZBvgevtmsFEsB6QeDjytiyVt5FKSW8hMg7FzYfDakrdfN7DqrCDZDk",
  "key19": "5W3osU3enViNuzqfMwzPMYXPktcEJgDXbz2uTRQQVjCER8rPzrmB8nUg63PoC8U8Lmg6cFg5VzxSUfpnaKpwxbbA",
  "key20": "5hswJ5j1hmv3fNsAV3uNxWXVBvw97Us6FKypTEyvzSWx5ksdzDD34EofsrhsGV1mtyePs6VZrN7QeMSJLRCcB9P4",
  "key21": "46uCLtKiTe9WyNgG7PeHbG9Td4shSiJZzQzDhkgYMEXxVw3uLkcYbqi7E7kwfg7KmELoPx8RuAL32P3EahuGxbyz",
  "key22": "4qeTMyxq61yCvg5R6AakrgPoox8DSaCcCtDGLWWF32bgjCk5tbDU9w6j9oWGsZnq5S66okR2ncePbMtSe9cuy6mo",
  "key23": "YvB8sFFxVPDpMhzTUoBiqqnKyxUda74PfgcgSvnCsj9gE2UdmcCsE4PRF23JzPo6VVifiQrgkZpvCCpKZhNrgrs",
  "key24": "3okwsRWdg1jaxrEFGccCj5cicTo8jmPMwRL3n1Cc6scpbKL2tXLcSoW1hPmv6MqQLF22pr71e1AzjUC5Ag9LhHzR",
  "key25": "41wHdmoigEKQZdcREUBS3cEqVF9hLf98aaSHWBYAgZpEgdmSUugEimay3XmMRJxXZ9pGkzV4jqYyrF6FY6XuesGu",
  "key26": "2Hk58kCkN58ySF5YFsM3yuHcoy3ai2HYs2CKuZcxvvSduWsZiUQjKT6uDXMiPBJxQ3pWEhjwvsqx15D75mLXhbTF",
  "key27": "3BRZhLbRXyyJrMGqYRk1xN8appLmLUstBys2DDJKdz2P6hTGPkNvyk7g9CBEeW4pL4UJSE2EmdTVhFaUTcyXUDC",
  "key28": "XdhM2BwQUeY5mfr3J2ZPGrF7jTAEz3jCxCE5kdvnHHtYCX1BJ7jjxJLVsWkFat2Vfb69osyRdWm5M4qqGxoH1Qm"
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
