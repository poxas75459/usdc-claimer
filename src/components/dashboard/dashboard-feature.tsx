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
    "4zGbCfbbYN6ieKAGeBAAF9fP1J6BJF5Evq2CbBvzub3e8DLj6ff7HqzfPFTBDsuu5C1innShwk6q6Amgqmj5rfCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m78rTe4EDVTYa161JNexcVa6UstF6i8B2otmXmDVCgyGLvWyDKAk9Gwu5AKHoRt5bR1YsT4HxF3imNkQ2htSTAn",
  "key1": "4isoWZHhRURtxwa1NKdriVG1twBiMKqKY59LsT4EKCB8qiraVFBzUsWoagMN8zPmQDaFg8JiXBii1aMXQvSosks6",
  "key2": "4GeLFg3sikhruiyEjq9WDQryWQUGVybThPy93crJd5aTvdtH62SZPcispV5vVvChfJHvnNcAReuSfAa9VLewZtfU",
  "key3": "dtL26gi67MdEXtZFASwwU6jMLWeuFQL5diqn15ZqqvBDbMMXcboPv3ZN93sxpj4JTbSeY4XL66LbNJ2RYLYQ3QM",
  "key4": "3hAwb4ar9wqZMaCyQkpi5gF1G2aK7rEi22MoouEdgJyB3deMgs2xmXV6LRV1GMfCSbBUXFLZPstzry1WHrEC6Y4H",
  "key5": "4qgHqDrG7yafeyAM9ZpkRwhvrdJwjX3CkGwjFFy3yRbz88xto5qNV7jtsDH16j83CZdXUBD8avPiLUtGxTr37zJT",
  "key6": "2Gecu1jxgzjhRaQL6GB2oRCCHCuXMxSiyunPbUo2NGKPxASeF5BDZZtuEd7rwcp4VK2AwJ26PHfajVzb27CUCKNH",
  "key7": "27d2YjGAqr2ZsKz4dShq77P1fmUCF43c5A31E7EsBH8hxPMrkEBCF6V87VwdC2kp6xnXrUexBXhiZ61g4DrthzfT",
  "key8": "WUCkxqGu6x5SDubbdxyb1qqF8EEjPwDqZGiwwNfFp2R56tH6TfJgguEV1ta5UDeZWgnpnVqdgZysNXc7Sd5NkqD",
  "key9": "4uTP2pKgDvovJFPNwHeaiB74RhKCNhxFiT6DXS9ML5bMTw5DaryRPMZgtMAD6avnDX58Nj1ykQ3eyutUBVyxkNzc",
  "key10": "3yEJknu9NFDeQpbZpGF9axFH6XJwSsbCws54b3FNEko466jB3tXGvYvGbXCcPBnYNPYg3hq9MS9s2jnd2YyMaPZE",
  "key11": "hkdRec5njkakXuoTaGSMYV5fiFEdhfH2rpDgULE2Qkzm5JcxfUgfiPG7A5rAUQXBsZfSdjA9ktVidADtSaWwwab",
  "key12": "3PK7oQ2hxc15KckMkhksYovcikdJD3BRbMmxKB5no1t9ALf6ZiSiAA9Yj9v9zCag966W5KjSKGZ5RFjZEg7x2wP4",
  "key13": "4iRRBJybbcHEma7wMBKXb9kk7xAGcQGEwkTSbx8pS1wcq8bppJLnN1MRkKzo6Tp3L73o69bz9xKpdyU4sVd9DNiU",
  "key14": "5grT6eBozZLX6eRH9QKV7GsY8KcW5bkk6VJSxXGzDeGEKL6fYdpRUB7j8PGq347TYfoYwenAepTKX7cY84ANLwm3",
  "key15": "3wJtkJhR5FBg2wAxnk9QCndFkbCCHyhPgRNsT9m7jFLR9q2gSLg9ywmt2dgxcgHG3KoU6hiouFyRLx2dYepMJgz8",
  "key16": "ptGgkSajfDZNa2oJWnyuM149mToN2w3YDYiZLuiAs7oGDvPRLvmXHCwtN1hE16upiXwVjn19EmCC7FEUi2LBhiy",
  "key17": "3pn89w4eH3A7uu3muRg2udyf76HoLBijy7THpnyTsPt4cVEWoNKYaEqvfLonsSehY8mKEVRxEugEVDkCoQiE8P5u",
  "key18": "5SA3YmDgPaEnPTotEGjkYsrTKkQrTXrUZh1LKqkLJiWABJcQqhrPJ2WhcNG4z2QAeWH2QgVyJpGWwJNarHY5MGuv",
  "key19": "83E3CHYJpTaDohwmFZPfTKjVC4G2q9jVVbXisfVMufL5wDQCwppUqd9B2isqatLUC2JWrnsUWsfThyDeVyZR7z9",
  "key20": "5mRoWoCY8um9XY6aEUmerrTByd1yfTS27i9oCatE9Uik5BknP4atmgi95VPrs6bRCCKJTVJgt3AeFgh2JjPGRTkL",
  "key21": "2H83HcPGSmTr6xip9gjaD4Ws43PAJuxUKMGeui82TrXnQg3H13fhNYn2qPB2kRUpZVrGEDRtPcEKuiScJFW4rGMU",
  "key22": "4g26QenLxFm8z1HQzhgJiED3oKbRcF94uG4sEwFbe1z6himAcuajf6ssrBKemXXH9zgkJWDnwAsiunA6d3poyhqL",
  "key23": "3vb5Xafyb52yMiUur3Qfw4MYCwm741vnAZHjd9vukd7ATEARJRFDdau39JZ8hdDussgenXDPbjwdHTtma5yXiDFp",
  "key24": "5h5nN7W8nkKAYVCyaVfENVYczYzoyR5GqYxVDTY5Edp4rzBUA7q3c74mriAoGXkvec4rSgAxCbtSwqfVpgTSAfRm",
  "key25": "2hZv7sFnGtBZv6QUhr9KTtkLop1LHv9av8Qt3T7jkUKzg5HwxdkXjJztepRGK6Phgefx3YHsqh9UmMMN7b9v6AoN",
  "key26": "2nq1EuoB1aS4UUAhWrpS5a96qAgAMhAKyhsjYu1uPfbWaJ8bVYCtysTqhXh2bTr8w7WnbdrrD5CLj93MeBND9ScT"
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
