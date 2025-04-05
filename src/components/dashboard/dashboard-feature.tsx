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
    "qcdFjmd9LC6HHy8xfi3xqEFT3WYLFq5fbR1E6WyM1pRX6NJKV8aRTyzkfrxruge8Hk1kUHzkt9QjUrTo5oVZn4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yB6Zga35fp8KrZB21rZjap6Widi7de7K7FZVtZx5tP66Vs1XXTCudeTvT4NztYcQHTwFmt1HZneRBCEpSTXQFp1",
  "key1": "4W1LAMS5jqz47U35oqP4qCpgPrFoxE3ScsJZFeW7mtVWTSiDf9oJ6ou4JJViM5bVsjJpMrjwLmvMghSnj8rsjTSM",
  "key2": "67ZNJUoPhbbVW6G3Y9fYG34gfQUxaqLYZMu5T5UtmFFgJVBki2rGE4MXXVmJHP2GuH92vCfDKx5FGuo5bUBy1L1L",
  "key3": "tRR6NncMQbCFSzReCerXHGNJ1fwdcJZfCgX9bnkAEh6nkpHd1ckaF5PqNSwjcyH2iwGbs8k4TxG9i6dHxS5nmVY",
  "key4": "4bVGmndBEgYp5pamTdhDJRz2eAKKq68ebozHu3x9e4goyKU6fFVDP5DgwNXk4RVfosZQ3GAcBW44ErFDdMyKCuM1",
  "key5": "4tuwrr3vFbXY7w3G4wXPLZmNyVpvEHVSbHN1QtXKiRHMgtFAknreanAqJch4eKF7FjSNYNKgnWsDxVzbG1kZWQU4",
  "key6": "3cJxW9yEAA4MavtX4tz7sXUqujMUcYmDgqRxAxtQZZMWbBunM9Va5Ubzzgk12i4DUPES26D3Zzd3dYXfLfcS6AXr",
  "key7": "5cwrMhKkurQFrwYMmjddEyGtPeHfhKpQHU5ysUscXFpWVuyEjuqoWAWKaEX4sUkGSWLevXfkN3nK3tHEvcCVn9jn",
  "key8": "2dSZr13kV5m9gLcd7E6WxVM26yiwirGxf2gd4gMkjghukePEBWaDHE38fLGiyUavnu3dd5nfgAcwLE8i8ES1EtUs",
  "key9": "47tAsgDfZ54EysrSsEvxhuV65cvgrhoEJmyFoc8fwnLXvVfXDeD8cJzmovDBawzcPfeSgqkyxigLVA28q7cfVFqa",
  "key10": "GLsvbVxBDHz7C7FAdTR3zdCHBh6MaREAJmCPn2dzDwQt1wFbwX1fYTwhFiZnGGoYQDwWXfrs2hxJeBT6h19r1U4",
  "key11": "3uvFtK4hbs6wrgYAaQ4AUJjFsFbNxpcFdoeTNZCB9RGKQEUmLizxob3xbrdmyWRrw1W9NeCsdCpMcqS5JNRSuhqz",
  "key12": "4ayn4KfShrjAsCDGyQUWBJgGt1ZrnfaSEzKKgxZRAXrgypmTuk141DpqvSBCzkPHtJ4pifiGemYapVuEd1vxsH8z",
  "key13": "4pv55VP3V3zdEQLG7NoHxLGaV6fNukqG9V79PCznNNeNVbe7PMgM54eF2wEWUrXus6orHsAYUCoNz7d8o7J8cxoq",
  "key14": "3gtYYGoB7in5Vq5MCS6SGE7iCRtLuLNhv7T5k56cuSJV7s4mYEMkiB7aCkWAZH2rAihu3KnBbGPvXBz4FRfro8wZ",
  "key15": "5zte5ivA99RFGqmiq9Jrt29XjwwMmHvmjgwB8H3GRPYpy6sf5ouemoD2DQFHsJbiMwgmeyAWivrFwpowuVpiKuYh",
  "key16": "2SVVtP6bVgzqWkvtUKVy23zLBwgL9Pg3ukV2Rmoyte9iZvtzCRuWisbQZ16QV3K1CuuK9phVFpDXjE5tH8fZoTtj",
  "key17": "5ru7yhh4Zoye8L2aS6a2mxCYpe2YPHtgkUCnmnrHvy4oHuiNjju4EuVBCAVx46HhgJdDmTDAzxdDJbrtqB884rP5",
  "key18": "4RDvbsK2KkfShWGMDXKcfUqdWyHEuS9BHVupxCCrKyw7x5opVxUBMdvTEQgTKcbm4bQWdHTChkShM6aATFHafa58",
  "key19": "NdGWgHPiQVGW6WoGB5L1P1Qc4GjfibsUghEN8hHnGM6rLTmsYeZEgBwtfkr6g1Sq1ybodcKrBmjMWAGiXn8Kezm",
  "key20": "3cw62sm19tKYYk4ii2AWhVp5XnUYnhW6AKkEorNFcTBuwfU84m1uJzKFP7e4fYpoFhTwV1kiWzHy2AAxim5S4JUg",
  "key21": "5F5obkF4yQ95xseTG4ntYY9kFMa23Woa9ofbCRCUhcmaoK6rreXyGuas71zxshDQNAhZ6zxMzoB21v2oX9bTFyT",
  "key22": "R9QvvUpzfAqeJ9auDHk4BUFLS4nT6Bmpdj5DC6CT7sSPLtVNTdPPgcrANHH3Sn3wQH6AH8h5NfYMubLeD3aodV7",
  "key23": "4E7pBxGRgkbE4Xv4hU6LDA6Pec8hFBRk7ph2s5TDs2wSXiyxVqkw4UfSsJaZ7ENviG5oC5zD9EV7s96ULC8gdWqH",
  "key24": "3c26DdxU8D2NwkADaMomHuJNqprbbuDB89vT1p497UscHfTgTpbL6MvXBhFXBkUJ9FFeCuCwJXzTYfCXJ1ANPMzE",
  "key25": "5CaHCtmmz86yu9LdYSvskDjYHXoVRj7Qgxadi89yX8b7uGodmtGfL9ogksKFWegxCRiYdYZwJQwa5rp4eaEpzeDG",
  "key26": "3JhajwNbBHDMocehcTgniJkCrJn6Tuvn48wqZzAgPL8dpTECXoWqHe1LkWPABax6ErJ67H9bku66EvGdHGQqFcbU",
  "key27": "4Nh9EkSzyVX8fjSgYDLvXiK99vVrwtgZNwrNa9MRr3Toicax2JfvpUUiJf7MtyyXhCvr52mk2Apz2v7mUX1jv35q",
  "key28": "4S3sFg6s7A7nSzjesJZorzYtY6hiFg2bjXAwyxUuxSC6cYNtLAqUBF7Sp4GE1nKpvgDsiPxBSZ4oxL9YniMTZRUr",
  "key29": "2Qxc7TjpHW9eBnFnoZcpmxiBxNf2hEcC6ZKDhz9QUDhqPiStnVnJ5VChWh9ARJvbYtfcDDoswJUVZ1oQK4v1rtjj",
  "key30": "2dFQEHJeBHJt1viTou6WSxT7hyuVwHQ6Sq36N4mEw9C2vCmsnbfebH3sgiAtvMzJ8Aag7ajrW4mkmcbCQcKw1Xq8",
  "key31": "2UXDKhuCMhz4vAgMy7Lh2EbFgtBa36i39Q4U4hSqDkrcJVS8Xyk559LrGq8Q1EyZDy94tNLTwGMuYPV5qe1vx5b6",
  "key32": "3yk7vddagCQUG7cxpmdGDzZWKiapgNuDYDyJTgfV9WdBe55MB76Ho1Lt5ynZTseC9gfJdbobFznSggqgEjpNRJ4v",
  "key33": "4CXrSjfFjozrMyZCZzc8Qz9cw9sFgEcQ3rbKPYRZpTC4yE4cDrtbeM2mUzdUDXtC6hbU4C5fcsK9Bo7iXwR8ri2d",
  "key34": "3fxonEVPnchTW4FesUJAr1YPibNdxJqF3FxYsrXQbPVPm6TfUpWhXEi4dbAskmTKecYRwEnXN6H78v6BEs5gLzYS",
  "key35": "678o3izpasDMV7niF55v91HxL3ik5Bms673tDHjpNwH6nJqH5CE2NwvEEeFr2AeskSMmEyBB3DgxcpeRYtGa3eMt",
  "key36": "4YXpRHo5KvYQGiv268RAawag1j6caWmZp1bgFAGoG1AY93LbxPV2BCqxNkiG8UnGBL9nj668usTdJS2mR7VSQJeo",
  "key37": "59dqExW1ru6LjyuTYMvLa6U9vA2pCsbH271YhBQGAEgjFAyzqq8mSMG77c5siBTBBM3BW3E34LZVC2CWMz2tsQvv",
  "key38": "5ThL7u9eRwNvcD9QzcrcjujvAxaH1DCrwYBqxbq4Pv4MNmJYKQiPwft2Bv2Pmjdy7UfiXv4VQmJBdPCaCEorTRYK",
  "key39": "4LenzTUs9kBBSwzLK4jCiPjcyGSpCbnJRrn2LRbfQFmS2JHYBbXe5DAWw3DtBAfREw8nFu87CKnAmrNG8j4Uo6Em",
  "key40": "2eaTT5rFahcRTdQRMkKi7WQ8Qwfg7XUC5gG4riHcJ5fe5t83iJdQ1t6mFKwcAZsKidnpmzUZjL6NzfMaYVuKR4g4",
  "key41": "26LeZ6XCe1Jk8ySeZ4AdH8VExxPh1FnS14FZyJzmdsQfr6o7Njv66ZTj21jrkbqv31cdnVCcD5owkewkRjDU7Acr"
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
