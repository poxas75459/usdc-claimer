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
    "26mKCVirQwrDGUf6jNAJ8kXHFL6QYJoBjZgfjrrqRaCN3r88CARgZvqmAfHiGJPgGTN2Lkdx1MHzrGep6a6UiKXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G4BkyeuaZTHmxewDhd3beQ6xdt42mHyh997hmQHnqVCHchWt4hmEbPPE1cNNhPbgVM1oZgRob7strjNuLi1eJpR",
  "key1": "4TYPLSVqq25T8v6rrJAGXqtSTJccuzHUxoihN69ysabkNBhndHhh6qac1tHkntJ8qbh89XkdRnrnBWZ6SE4jUsg",
  "key2": "ZvJn6kvx3woos9qemR3u5hG34bgD4kuTefmjaNTbozm3F3q2ffZDDEQUYyQzABXAwnGvKsnizuHcU5uprhL4CFm",
  "key3": "2FFvyAzHo25n9hpm9mM9vYBF1WDzn5FftZzBEiff2pz4SvBT69BQ4kXcej14ABcDc7EuU9MiCJEGBx1Gvmkk46Ys",
  "key4": "4n7VaZSG9vXoeczMdjaLVcJd17ccmc2SSVPTmFN7tys7eAxDAYhoE2h88G3htv2ZLu3x7LktiuYi4bCSNLSqmKfU",
  "key5": "47YGfSHifsjHtufDSnzqk1cqwTowG7KJ2THu8RRFxnxoMNmQf47u9SgZ95BGvF854p6D5HELypmD4KdxHBnVyjT3",
  "key6": "3gUxi7BxmoSbe4MWSuET61rv5UmGSGGugK5KgPc2iXFAXqeeX22nbA4w9WdyhMpP1fTSeir89md1xaVSAy5wghA9",
  "key7": "3Te7Gr4Bx2YJXxkF3MRC7hJuVckoNPQVVngkpNVtASfZffEYZAXDUTbZuJdyCnfcstUnnPPKBA689zSUHKf1FCHF",
  "key8": "4FeDbyof8ZEbFcSWJA63RpgXMfF5hj2X4CKjFYBvGLKTDHP1zS3uU7txZUcNickynzJmcpA2ZyasAECzQCkwnppB",
  "key9": "3EHEY112MiH1hcz8LT2X4s91bVxxZc5u8zHoCZnwCgrWL6bFnCH7F6sSNoCCJccgymv3AXymdiCrcJiQVSG6qvvv",
  "key10": "4TLu2DhHzTjSapA2D5XjRfPf33JkaFNU9C5BvdWqBL3fQP5hh1DdspNvnqEqYufb2mvDRP8UUcYMbTqZyJ8iFYWA",
  "key11": "45FFXvQbLRvP3tjh4vxBfpKdDmgKPjx6Kze1MMT7pegw17dV95fSGzyeFgGoNX7njwCTk78FkypnYrpAfz7bBDE6",
  "key12": "tNJMAQwLG3T8pEg1ExJsWGigvHZe6kdM4VmA4sjuBibghdmwH7fBpxV9cQ5SjGFhLnhtDA2fSQhtZ84vdMPio6J",
  "key13": "3Qi93jTFRUZTXmGP1DoBEuoqnrgrpGsscCiSRYezuESuVQJq6XTvaHs1wHo7eCg6jpNxX1GQP4TeD9gskyp5qCeT",
  "key14": "gmw7M7TxL83Pg98YhtRvnh77ZqVyDtc2AFUaJfXBhxkN2SbHgmFh6j7oYLkjj8Yf7bLYrWFqtgKNt29JurgzhuM",
  "key15": "3WT3X54acGYCSrhsQpLfre3pjkU5Rod59Uso1wfDHQz4RbEPk1fRx2v9rq3zLJ1kjqRCU2eB5BpQ9vGCYbNcLaX1",
  "key16": "4tqXDiok8rJrvfbJy1nYhtWdfNWNAfh8qjQweBqAkzKZ6ZAmoffdzHSnybaqVMfDR97qV6FxaKW3koQues5i1PJ2",
  "key17": "3AeXh9Dqkz8JZt8Qh3xdGwVnXNjZ91FqtdB2sSgVs37mqe5S15bVzeqSTpzZ3AvYNwwkPkmQhsSsuFmQQK5JwTn6",
  "key18": "59t41zSz2CgyvvXQia5gLVBLJ1bNnwCwjsaMQx1FaL5jdaGtkCDcD3oPf775ueZKBLDvU35ef1KcpRgrKUD43z3n",
  "key19": "3pLbnBZhtQ7oNTkoq9C61P4inakhAfGNDCskYLYxczdZecXHrHsDC4RFgmXe7X6FWwvE3dZ699yEGq52LQuDnWGA",
  "key20": "4eoSP7gSyZpEfyUiigAxyYzX6wCdC7oBqdF1LxdduwKBnZsq1gSifvMsyHBbQZ2NT9wayBpkGXCf753xox4V9ZrM",
  "key21": "PxgSwDCE1cYLs4LTsYzfLbZKqqLMiTHFx3GVqjuQaXBgZCaaKkb1c456gMaV2giL1bzyQMFTkiVmKdvkWuf6xF5",
  "key22": "2uqBGS5RLiwiNMGNoxkuYAr6CTUoHh6Jy9WtfU4efbKaXe77Vy5FsNRkX7wgE3eoon5ofXDJteURvFMbxEhmJXEX",
  "key23": "2912fyJjHPUzCxgP5Yyoq7z4ee6S4P9cWqVUcw1zJjZWVbVsHLkZ5f8Nyc9TZWMqE2nD8xrXUU5KvcVa5LdHQeP6",
  "key24": "GbrhWLkLw2L6Vu1FzEpMRmQw8yR7ioXYEj48nCFsGn36bBxWurU8bpyNyUL63YaDP5bvMkXvhka6opAy6df6z55",
  "key25": "bNewBFNJKM2BHuDeeW7YxbSnet24kTqDoNVoVTPW17CFzY93qbDsLfvHBcpQfnnbsW7JVA2468e1EFz7PQZREw4",
  "key26": "3w5gE6CLtoTW773zRyCw6NGdQtGBT93PnHXQge2eCApysi8AWUu3mikMYJ1gaAuyUqEg4Eat5aHNGrJrzg5nP1Ea",
  "key27": "2nYbZdvzBSpMbi1S91NzTKACgT1jkp12JB4fHWrtJwhQZ4Hf1FiUtDgUgywCPFrNdX4QPReuNRLcgqCdXGSmv3yq",
  "key28": "44y589SeuHUTD6i4bqiAReVNjzi3WjdjsyngmzmKqfdhh2GMoFpsKoNsYdQjv4o3Kbkf3ggNrH2cxbkXNxYe7YbR",
  "key29": "3dM5VMDN6R1XXEbET1cY7uN8ZFpSRgENPXMoDJjjbwBgMoxQdm5zSmen9JHJZMzhBGsoHsusPWRKmoe5rEQ139X9",
  "key30": "2KTDuPH3Marm9uqcPKzR3RuDNbJ2F1d5Nd4YjcDBj2MnugftbpFaLZ3JdfabvrxeAiey8S6cn1debPjTLkPmnVrc"
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
