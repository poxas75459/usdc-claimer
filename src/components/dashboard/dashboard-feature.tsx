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
    "3qzytrm9VqaMQYoHQdzSAHLwK1Lz6zWyec5EChz5Bf9GJt9zJPb24qdYvWAynooWA7ThgNSQFga6CUr49r9kYnKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K2UTk1ijQ5aEzVxidcJg7PirZBerRtCAuDDmfrjYuBQiMs6KZ43XwDaVG8TmxkraGBnkkuW4ipSV3ot9jZ4uhzu",
  "key1": "3YLaLAXeNu1j6dPsifKrhGcXTvs7MiKtCs4hseKoT1r98LonK2gEX9JeXdaz8ddGk1HagrT1LNCKFzRodDxKbChw",
  "key2": "2bpystC2Tbau8uEksp1jixeFjRBphzcTroGSEoff2GS6V57Ewwzr11TzuFNJUa43E3ouibuBtEN577mwq72kHSi",
  "key3": "hqZjSQt8hwTYvbDmkieCjMT4Rosmr2pBxDk16eW57tQkx9zf6ByRRx89MaeCwgjvUyj3gSQuxqoPA19aQyMdqYb",
  "key4": "2DasxandfYUnHHRW9ZqidW4mbV1zPh84Fsvm2vtyeBU8x7TSc4gx5xfoP2afxHNeHrQRShhzoUyFKi4qp2syxCvK",
  "key5": "5N5jtBZ4VHtDNN31RkGYVGssHpJNv7W1MPvPcSQWCUwJ6n5PaDcABemFESjUUnyZqsJu4kvHqwGWMrVHo9T9FAU3",
  "key6": "3FexY9YMor8UJmJ3vTNCK8TbJgWFit7BgCf1sJfmfQxXuj5W8BQTXma6wLjsBDxgWEy95qbeRc3Vp8Hi2HKE6KkE",
  "key7": "61MhFwim53TRBcBTgFMuYYhJLSAQX67gFWXxztBfRHk95vtTeHKRb7zbHcJi7fM9D9Q5UR4ZcT3TaqLPZmDCnBa2",
  "key8": "2xMe4u8ThKemu2sbkeAXBSGeq9m6ALMw4sgCzff7eB1QwuqqsoVzzDKnN8DCm8h2JhiqG8UrBd1phZZvmz1d53Cn",
  "key9": "3XktReFLR9SaGMjFC7gspb5GMZjon969DFPjBKfdxTUaeQ66kQqgA36xoHdC1x48uTgWrG8MquxbzHmhiRkDrzR2",
  "key10": "2qxZ48Wnyu1Rn3vmsMKgpjgk2yAJL9SLy3Yryivgo9v9ivfU4Eu5KGzFuipUm7RzPzp1J8EjYtGtyZjo5PKRyqMH",
  "key11": "2qYqAsRb7vgJY5FVNQkfeZ9z5NKuK378bXpQeNRG2zSbkJQCXGLfXtc17ChqdU4npezi5iEV4BZ5942kQWoWo8Xk",
  "key12": "2zww1iraZuZ2hLUHvEUk1boCeGGgXxngE1MyxTv89zA5W3YxdZ4EUJipdV2yn45bQQE4keAepPiaQ4yAy4cpNxhs",
  "key13": "58eGWoNQzyMZVXTuzbT2gxjv1YxKv3Y739bdukV1xsDLTMXfEQbepHAYFNuZZhGkB8DN9teRHhptFe8xzjxUrKyC",
  "key14": "3fPvNvU6z1gsUFGqXefHPstJPdfue3AmejoX5dgdYNyhanBavCQnZEhby1cZ9CVG93Gkn2GgjBSa4RQ1e29YEsE8",
  "key15": "4TGE8wSrJ912kEgERJWG1RgG8ZZibFxpoxdxZbBcUqHmNYfcVNUG2yaPxEccbA8LmgjCo4yQq7WRR3rkEdwTY4ZL",
  "key16": "3xMdiWqipRfqf3fJMDDACHBiFesbK7mkY3BuJAtTcuHb7AE3Z6b2N79bAswCrhwaJjErbXPNB7eovvD1iKq61ieK",
  "key17": "5X4GjYMMkK3FGD7FJhzrhYGBN761M99z8bhZHE8HdMChZXgT6EQN8BN6Sj69AxTqsBBiuXazbddx8wKtJgQMMCvJ",
  "key18": "5iqzuBNQQA6MHMrevJSJSVzgpunK2UduTsL1KJHnyWY5sEiey1j2qYTD2jDoRXHx7rmvQBbTuZf1uyf7q2C6Lj4g",
  "key19": "5RpmySh4vFZCHyYcmXnuFARZNjBqCX9E6HwnXFEjC7EMV1SqRXegt5vS9a1ccYrP1nqz4e3JdNRScEYakYuYyqcL",
  "key20": "yQWSsUsuGX27EsseEYsY97ButTr1aYZ1KaHLC9oEsUkzkjXb6i6ywBhpcCDgmg5n1akNstskJ3ETdvFEk1SkUuV",
  "key21": "3r97KTenBtcuBhj14tdEgiUEFaVLVQ2JzakbFS6J13a9f5Bm1p1oB2PNCTUTDFbfdt1BFpXcvsmAW6yxKvzvBkvB",
  "key22": "2sY5R4VRdmXRcFBy3AVUSJ5vZNbSRKbd4dC5YQ47yRoi3uFBHVkkXujeGLNcxoGBJh2JRTX57aodXCmv71nNtGbP",
  "key23": "3RSJWciZhygTdC94Q8DGEjcw3NaSrd9UwTXLfSmAV6NSvtayGY89qtZsX2NpAJ9oPN9vkLCMQQ8HywP9hBRPA4Ge",
  "key24": "UmKw4CRJCGxkGNXUzYMQsuQQHCoFEUHTAFav3uH1ey44pJXxcsdgQUBaLz65FSRmZJjSDPZKwoCDCiCAyEHs8Bn",
  "key25": "2qSyRz7iFdqcnvm6GHZauQzzpmxEQsHNFX7vhuc22XGZCLcAVZp13ccYBXDTuSQvpZ8PH7VaWB18zAn8WEW38dRv",
  "key26": "ZTbRcfMBCbB58Wdb4834yUwRq3FRGXGGATbBbAZjxaYEB2yiYFZffhokD76L6nhmwUMbemBfqzzZsisrp3R8s4E",
  "key27": "4URu9ctAzmvdq3iSXzQs36qhA4gH7kkK1yNKER1vwPcRzmeG79FaG9tEZutz9Fm5Pgb8Heq7JdnpMuMUeSUK7KQe",
  "key28": "3MGPCGURpVqdtNiLVXTntqniMEckXvC1AzkNBUt5zszECQbVu1YUCFjTQ6GVgcs5ghLXscW1P2mtGJVHbPK5LZgA"
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
