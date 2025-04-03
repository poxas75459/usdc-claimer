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
    "65NsaJrRY1BtYJKYFwXeVgi47bN2UpiaSSRLWVZqHiJWHMYvTfePuaLeN7ysoRb63MwdYcjDd5utBe1PjFJmWg3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bj3X63pyaiRC1j6mfNUkSFSv6GC1akBE2x7EBXxRqx7PjNpEHoWMYFqmAriP3ZnpY5gXZgzv5TeHBvSznGwSUww",
  "key1": "57gwb7a4G7how4RjZjUZYmPARop6NWy76MXyUUB3T8A9eaeuVpbeePW1F3u9wEWWjhRsrykSrXzMJypxQXHzrWYi",
  "key2": "2v3pD9iYD72ddSTrZugvYK5JwejAbDCRzSCC25NBm2XUM1fqT49hZigx9WvRsmue1ChbVf75yBx7ERgwQVBEFVe4",
  "key3": "3qJftTd5pvighBybUoP8h3RetgQeWdyayKRR6zCYnu2fLhocv2o669re52S8yM7Pv1DPLKqpnroCz1unEg3yMXKd",
  "key4": "XrNFjH8uytexxr9bYwaW2JPxtL5bH64DvVr2AoyGWkxeRXdKFowLEhbdorvgWynEpFpCy5gs4yiiFDC1SKNcjee",
  "key5": "36ttbzGCpg2EXEULQ6h4Nf1R4jGd7HbjwHkZGYEtkRUjfSp56ZzcDQ2tZ8nw647RevU5sDcNR2XKukc1NmaGnNzE",
  "key6": "3RrwLTzqkHDerqTDGsZrv8FGjbhcTeMXUEzqHFgdtb3Wjy76SF9sCM9iwfdkLVqonXjkdCFm5nuDoVo27JbZQA4E",
  "key7": "468yPf9zLUXa96JpLPzt7Tqx29SrMZbyBXzDtyZw7xjZzjgMeif4LFkQypoNV5stCNeHgCkgdPynUxZDf24PBECa",
  "key8": "2a5kL8s5pd5zCcKdaE7F1wtuSwUTFt3UTZYXERn25XNi65mEjJhMMMCUXJkLNwRKXLL6DGLt6pg3QT7tLWvNPt9p",
  "key9": "3qpceha67RtDNoBow634dMgyMDrVz7iXfNoeDSivnRtDJeGZnWJgDUPmMMdpXJJuwBVtdc2ZXMViUX1CNcR8bdCe",
  "key10": "5Ubc19vWKPATvnmJGvhabXyqSs94t6jCuL1hiFf2iH8P6xGYs7sFDBuA3NyF8VZFrQUjr3bTfuTFYxkBjj9wzox2",
  "key11": "5HppErP3RtvhRLaGfHE16c8wGi3GqpudAAdBEiNm5utHJdaq1r83H41D3BzN3XSS2q1w67tPPwpXuysFfW4ZQ867",
  "key12": "2QwkkRfftKoLbzVSB813iFDEXpaoB75DwYm5uoucFgShMJA4a5FZFKhTb7MEnwfGTyDd8GQkmjEgBQUiC92b8BN",
  "key13": "Bz4MCSuw14rR3aSUVdt3UARNKpaVttqeXam54XZfdy5ncpvF84oHpddhuzJWW3EgZWuWmTV5hvvDAPTwNttZZNV",
  "key14": "64umAAuZt3CCc347G9reN5iCUxvKBXqVuudythPUrqs8Fi6rojv9gXV2SYBsCtVuiP9ft2axEn1Lw1gm6jp6HWKB",
  "key15": "sJHNJLuTJzcvLYL18tSg9Vc6gGrdsFzSUzwyHQwh2c92uNCpg12BQiZnHX9RqW5m8K12NVYzVjjT3VScjgDN8pr",
  "key16": "45uaRhNeyQbhB9f1pyQqDtKKsnJk12QZBd4RsV7UpmBdoMBxKxSfqFYoCwgRQcuBdVF6Lh5fnazhtionBu9UGtZe",
  "key17": "65Et1pzwjg55f7SDH41dxG87srtAJUEqoLDLsnuHfFiFpjJ8P19yEhhyaFkxCNh4Rnfn2okTaHhkBXAL6J92UtFa",
  "key18": "DbKN7UZU8CfS2exPm6b62N1tEaTi3A7AGcjNkQsoxE66hoRiy31kXyQaAYok927acT4EPrhxQNCGncXFs6HnD8w",
  "key19": "4gqq3HMgsW6PgoNN65h95gVWSAHzzTPcHgr2gyvAw13XQeijgDtvWFhhFcZT3ye5iaaSieotiYfvmvqhxcpfdqDP",
  "key20": "3V8qq4WfysYPywtutpSX6JrCJRUqeMLrmVXHjzMMf3f2wCcnPSwezbJHGCk3uhps6c41s4yaU5HoyVPwv5CRwTDY",
  "key21": "31L7Kth9qVFzDMg9fKLp62jPRZN4GNc6Lrpu92h4622hSmf5k94uRDmQsV3Pqd2MVfP9G1Mazz9LnSSNmS7fD2qo",
  "key22": "2TCJn5qKV6WnDAgCjXvZNA3DGzNKUzPwzwMEUpGr2uq3GarhmfYTB15Hkb9nwJYfFRBSDo8avyH3iHJAJZ26goRL",
  "key23": "5qVWxHtc5fgEp3mqjBSfNCr37PokDpPZNH4z45HWmRhqAa3et9hCop4iUnTyJTZashhGwNTnvxeBpUfr7SYVLNso",
  "key24": "3XjnL3bwF1fuLhdUqq5DAvEaMyw6DX1CxhscqT9JnEPhRHAhMMnYAm3NQgiy3mbnSMeAg9CDVvC2H5dFzHnzTkrZ",
  "key25": "4ihhDiBLtTNEuzGDw2Lo3PBQWVC1LnrtpudpgqqdEd2nbrpagEgbbpN26GjDCpskoddR6UPsX4JSSNeSMe7vckP9",
  "key26": "2BjSFE6MqQvoNCGKujGfNfzNkL3s16kVLipPAKRrTViQVTkevfHax1DZSCtXtzDpTNLwPvPFEvy2HNPxzdLpJUHH",
  "key27": "5tbBE4PEbaXk6TqAxubhasJvky9p1jZWDg5gtmmj76ApKfvV9sLUMLRwwB9q9WYiMVjZgJUZWVwETjcGDCFx7Syh",
  "key28": "3AAHEDwNBac6E8kx4ufNCHrn7754kUy6WCnnjVStq68E3HfAmQ4AxLFH3rr9HWGpgAy6ynx2wmHWrTh9VJLgxvu6",
  "key29": "3B7XLvL6MbSRexKDBwBKRULjVkYAw986GjUoYXRXU6ev4n4H67kodcq7mRX3Z9vMFj4VSkRnfD2vgUkUq2zuq3xt",
  "key30": "32xezV7EvDuaufakNTjytFXrwZz2SA4TfXoyv8bBy6ac345Rfk4uWvVRSA8wGa2eabGM1MHD8NEzT5BdB9GP6k16",
  "key31": "5qrUXxWJDSrjQXwE192tjo9k86SgsXNvnU6KPTeGnqpsdvRLmaBuKrLg4R7e6LTkNMNgdj9HrzLnjudS6tNdDRHb"
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
