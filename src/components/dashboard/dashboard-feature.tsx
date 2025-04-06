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
    "4Mz7FkuqzoZJ9fSnnZYfBw6BxhCGxn35ymKaPv4b7YYz2Upn53WhJbxidEt7o6mHj7QxKkVQonyk8zYGskXyiaYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xp3wobp5YjgbGU8CFUtRrp81HNivJ6AhcaQ8TW6swTrCtstiWJ5njUgphEiVhafYSzS85bL1b1yVYhmuLLgAXSd",
  "key1": "5TUMUDtkWNu9JKgFGBG2kv3Z22PENf9tnnvqZ4j8kspxk75aQpePRAoSsHZtWVQGgyEUaDE8r52Gt7EGmf1dK24g",
  "key2": "kjDmSS1RfxQwVS6phx5cDu1RZsNkN1SME42uYeweowYDNVDBhjZbL71hDD6keWhjq6GEadDf2yska55dkt59pRs",
  "key3": "2zpPMmURvr3QDc5LG3mpmUrvv4eFVBS6aL1zMV5Qg4mncapNP4ZigVZLgqbqxhUns3NdKCjF7wSZrhvPdfyQpazp",
  "key4": "4hcfKnRH7zThBP8ZPVeLpKxAXZ1Ng3WZK47Ytn5ixQuhyzxzLZRw9dNYLYCqK1nWSRooXm9Pjai2aTrdecZzjKWE",
  "key5": "3d5eZRgbxDs8UpgSdvXuaq6tuVf47yTnmtQv1o1N6wGFy7huHgZ41fsmpTBLya6Pe96Q94BNELWMJ74ZsUVoffWd",
  "key6": "2UKsts5Koj1bjU3eM4Jy6oKyW1r8mR6gDuJqzD6gg9bZWH5ujmSysXYxrkRauXnJfpuq5wPGrNJ5w3LSsMwwJAJT",
  "key7": "49GYMvNDdLC6tPKeT3XLC9DJrRvv9xp8CTqJ43ABgDA3iYMH5HpkgmkSJ9iTGJU5X8vhHyxKe22U6WcjNBkm59t4",
  "key8": "44nmnkLE4Mq1HH5vxgaBiASHDNEByeHQsM3WFNjyaoAzRgSMKcmbWadYUKqSVgmdoEKqLPhSF6TniQb78Kv2REtx",
  "key9": "5abjhLVf6XmUe9Md9MZez5PxLeAqShcAuGmGbfr3cke8cwkdC5S9jUnmDw416eobZuBQsJbCxeqkeEhPpe747EpK",
  "key10": "34mpsXEU1enw2ekPBcpqtW4RSTXd7bgXqUuz8AuLGmgXML4RoL5HzX4LkEUdzGWo89LNFVDbQ8yeFxzGjtGnQWrj",
  "key11": "3K2eyvqonKLP6gXoWsZSTSGN6miccA6a2GnwBh4uYVSeLkYg7CbjwXo72paQHjohA7Mmi5KUJStHVrDtdbRcTLYh",
  "key12": "51XUGwi2eNB5hNxLng5nBnhna94i1aQousQdqyAqNAMMustUS6fPjHvTYuj8TRAo7uPoG7JdMTbZQhwvjhARf9TZ",
  "key13": "4n6JpZ9KBLkunNSX34byuePN8JTFqhrHCBWafZUeb3CCZiC2Am22CLgL3vgi1jnq4EoeoQiTiJ4vB2iay8tiWBDv",
  "key14": "5Xprfyqx3UvNa6A6SM6dcYkkSKErCppNwAWs4HYEFniqpMhqiQXK3vDWdqCyCa8mYEFqkd3gTVmD6vasHCUX74VC",
  "key15": "4SA9WGWqNXh9EQ5nkJeKAWgJbmkVxTxxsEJCPnnrG2DBK3F4ho2VUStNLqQXbaDsqLY3LRtvyvoW11iuigpmqaUh",
  "key16": "5thmsCM3ApieQqcmSvVJhGmNMasiK9adGfqDPDsAJWei3bBGR39LNgw5ZxKhkUPuz9CvkEbxpqRbA9W6KugVWggb",
  "key17": "3YbtdcSRFBXspP8ktkJsr6xpVHeVSnhGDaQwuyFZsnmcJVxKurWvYhjXYjMr9KRgYsTdJYNoBiGx3iKoE9p8GkpH",
  "key18": "3mnEFaybtGvFDdi1QFjYEVZPMa45W9ZeLqAZvukRHNT2KxwU7f2hYD9tvpcKeYJw283mhZAbmHo7KeU5DTBskU2G",
  "key19": "3HBSEksxgoovDePkV8GMmuQd2jzBcUFLVu4cisYeN3GK4RXe9SBEiGLt6teHJMhzPvUoQX6PMXY4K4MDsC3vLggF",
  "key20": "2Em9a8unmb9e2m8dE5WsMAGPBteLHT4dpnWzdXZKPPR7UbP8JLSVvKc32k6qa2m8sKYyED37EYU9S17UddLV5fGA",
  "key21": "2QGXkWXi7XuwzxZUiXa1ggrDVfnJSkv2RQDGEw4tksnNh4fopaW6KW2cB57tzabPmpHueswqYDcMcnmN9fJouum",
  "key22": "3VzipmZ8ga2nJaVQRrVtcrmi6DnM9e3M91GSqrnKKKXqmvsKvw6yDBYAmUgu1z8tqftDbbXJj61vshotwpdw9znH",
  "key23": "4CxPB44humUHhipQ7DDxKiiNLY35dxPuW1PUyAhBiiubFTnMuma6zYmxsoXybMgjedti8BJWvd9DqwuVjmn7HdPT",
  "key24": "4mu9G2Hye5gtHcBubfNhw4oqV9cSsx7DZKZBWEsQHmtPF3bVDCkozBwYCFYzpqYCrpDt1x9YB3om2RNSRN1HaHgv",
  "key25": "2LmwikXjv7p7ukxHjbV9yyS5Juj6LnwyLpkCBDJmqqG7BGhUS7dSDzxmgqZmQHiji3sSppxAyiCjUsuxD1jHwbob",
  "key26": "3j4QY7BAKnkdA3DYbG1WGBooNzur2uWuzuY1mXEykdgNsQrDHEaczB5HimVn75hy4owLpKLMhAS2ZgDEu98keL9F",
  "key27": "5hRZiNj1AFzVRtaZZJ12X9JGne6Trt8c1D2LJAJACMNpbNs6o8213cEDnUNZ1P4DgXa5Pde4uE8p6DECTzMBmLGz",
  "key28": "5oCuVa4LQSNSjhyMuQ3F9gJCtr6NiNeqWVQtQ1umMPp233tqLmHuJ7fPjh52uVTREAmLSEg9juV5dzKsKD995k9d",
  "key29": "hpUs2pZhqxB26cFdLNNR9iFpugk6U2RphDyTK565wbi6C1WqrWSacK7x6Qz6VYPUVQdG66cEazzVyNo32d5Przp",
  "key30": "3FU8mJXUa1YnLjaLL9gAoCcVXeA6Yx4CkXEttwshosYBfNgxUiKcc6J9etNMvkTKq9sk7EM1SYwBxpKMPvZ32geZ",
  "key31": "3dgDQQZQEAcQWAozYYn6rCjH23hC43WuHMHugGFNRfUVoLmKxkxgdbaLQS9u1po1LUKqRaiizxm7vGjg2noCQ1mX",
  "key32": "2ZeFk81kisSMahnQqUbAUUHZShF697oSVngULoT4MRY5wLxbACbrWgpP9xfLT1o4o2ZqAH4NuxD2fZ1D8M7ym9Y1",
  "key33": "DP7y8JVdqr35Gcc3NVaCepipKTpEt9zQ8X9PXnNGkNGkN4s3o28rnUjZ8PhWNjFYmg8gD2w3bdCif6SkoUdHeSY",
  "key34": "2pumB6ztszSc4Rv5187KoyNgHzRcLnkwDC2p5kgCngaim24SwjqQ8XuH3kCArwfk6GNsEeGzRVxRzA18BnbZWP7L",
  "key35": "2Z1wzMNmnExtXtdY8qZZBQBrf8ao7oFJUfExjtWPqdvTZ7tzLqgSKQy2BHYUPKep1NbWWyL6hcSqH91dtsFeapGv",
  "key36": "4YYfUkjgK75Qr55XtMKWXjj95sSJM6iq89j6VJ5scuueoWuVbbLG5rvDuHMofen2uYjRW54o956F5PWfuPBHtGQe"
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
