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
    "JkA7BaHeg7oLgqBSLudp2BHrKeG4A86gv7fYXQiu4Q4WD4yE9dHeYpnjP9vr9iVdbGyWnnmS19wbSW89AN2X5d6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5uDwxNnyTSc3iq3BYkCxpFFEgybwEpuxskHwh4mcNmRvcbnxvwAdwsFnjDFwvcs7tJJCovdfNZt9gTWopGoSza",
  "key1": "5JdSgtKtYRUjcbBVDevxbESuZTHb5mzago1uXwiHi8u34npwEx7Bg86NTKU4H3EqQjU6cx9imhbdGPrUqHs9uZH5",
  "key2": "4X8K4acC8oDVe1s4Rt8BPA9z1QqVL2oyEMeU9SsouaKuKmP6UMjmcrhzvKYarZ78GYM9ius9XAmLGBk1tz3AMkCT",
  "key3": "27eGjBi1vT6srYsvWrm7na2TvNbfjysmtzdX1787agcPpcGVDrJkD1Nj4qTc3wEbiheBNiy5sMh4BinKTojuoSZJ",
  "key4": "RsyJzyr4ov5zym9wnPuHP9AAydxb1TuZVNz2Ly9ai6NdYdimxGF5YF6HY7UV7MngF6EbPScDV1SPL7rdHDgh5mT",
  "key5": "2ijow5EzP7czJbbMZ3s7DDjWsDR4HvtFEEuWeeBxCDoSsJrQZ34VmJbHVnAAoij5c8uNvYqJDEjtMbvHfngPfbZK",
  "key6": "3PazyhRT3WUwBtMP5RbHLbcnN69wpXAj93jNyXGLdPECTYjxxXjYyFkJjtiLguCncdYLACkhNBcvZTWr6dof3Xep",
  "key7": "cjeWvS4r356JNDcAFNnurGaNA5Uw8umK8kk5fzHtRLC2J7wqWzJKC21Dk6AJ1xKi3afKh9J6A9jijv6tEh127Ct",
  "key8": "4qg9HqTHX7HaVqBSzXC3iNM2MhsyPTVThm9vhtBKJsws8F3J7vjPKTYYYxwYEuBmL9GokuWGfXuQ5cMudK436USX",
  "key9": "5hvnCTpoZhCSvWpeRoMcbENnkiXQfuWwsjJhBKaVu7Xy3CH94wsRU3UNrPZKchj7z2JbJuXTm1WfSMiJf1w8KT1Z",
  "key10": "2MsKZfsxr8oxrARV3QGfGTf4QTgHxuC5Do6UqdzvwB4BmpaRG2tdeHkk7uUKgPtgUVMGScXncTgBJ4wYk4cFvrtb",
  "key11": "4uT5GiQbTv3c2ufmQBsGsNDKc3PkQ6Lz3u65ZFGqKoJM3N8tzjWk4BmCuhh7VR2CwuvhP2UDHgcH1of8WASyEzPV",
  "key12": "5myCgUzSvSpKjSvnXCdKrpePCpDftr9wvL374dCQqBLfFLP5p2nRXtH5gJpLspjQeG295g1kbjvRL3feQqyEpEf1",
  "key13": "2HcZNyi24suFSRpq3g9fRQkt4YMTmgejNVzomQbrwRtmDesQ1uMESGFHxEDfYhVPm5sMAua9no9mxvtUSdBphjBF",
  "key14": "5oDuGFFbohdh14Syz5kRHSd2udmgre5RV6cn2sY2DCXEHRw3thx3dfscjne6178ajWtP2uLEzQXEVWLATkCiKYi6",
  "key15": "hzhGGTL8wjNLQFz8HrAaG5B15JiiY1RxhZ6osYu7rxwzU7TjK3VLgp21DRV6WtiXvLH5RQgGhmozE2JANXfKj4q",
  "key16": "47LPEv29frvSLDTe2scNFtm9Kag9oUnkVaq9VSQDcMg8mfUKMm46RjjPhNUukg1T1mhoWpfLPBeC4jv3VGjD8gyK",
  "key17": "ArUDKLVoku97PMQk5fdJbeCZKZqWJDUL4nXj6THrfxt88p86GgrFw2o5cnGMwSKds6pYSuibpqBixcDr4Hi4uhe",
  "key18": "VCYwB2mVXit4DxyJUCTRSv7MJGAH9EhjvKXPuMJi9weoQMQDvg6j3n9GwwRe6oQtvkuZrpg9RZaTxDsCCre5coJ",
  "key19": "aqDYRKkHxExMAzqmNjErw7Emc11ALFr3GPneYyfJx293KsRZMjufnkm2gyFt4u8QTuFSD38PH9ziWCGZ357YZEW",
  "key20": "64BLvN9Lfa5cPVvdEPiwLe1vSdSH9MbY9G3d4JYjAo4ba87iraVLiRUBxpM6XcgtW27aB8Jos1MNQqTMmBsG4TFb",
  "key21": "5rpcgKT5ovmDXHEh84jQpNH3k5F659e2G2Payh63QubxjcwdM5mRXFChirc5y25WGNbfsthCrzQT4iT7a1Ssj8vR",
  "key22": "3wYHjft6XD3aU5rG4YSEgLBZA5pkMzThepTnTLNWiEUNcgdWBJcyFD8H9HEoAD9b6x3qVrDeoSMFZEsdN9ZuWNwu",
  "key23": "2EaqQyP1XbgFRz7ALAzrJgMSSygy9kjNpKvd73gvVgv97LPc9RuwmP7MdDxW1gaQeWcExK7B2ciobmpWefLMpBqK",
  "key24": "28eWvbmigViA37Wf45HbamGfx37QtJE5hLSSTVXHinkhNL6fX7m9uDStMxVzDqkPuPL1SmWpFdiC6wW4Por6kL1p",
  "key25": "4ebGnD9cRB9uF5v3GdYDUiDxGbs2n31YSQjbNYcoy77fXLb2SuPEcxAaFSbWs3KersY2hjXZmUL4CF7uva3E9hFX",
  "key26": "57KfWN6zbhsW2fVdGZxmbuyXbEoz7v6cynJpCrCr9SzKvLVYAWMmqaB7EpX4xSdGvBmbE961NETcFZRgPdzcXzic",
  "key27": "66HEVcFrnvCnCdrNH51KxiUfAhMdUrjgMxzJtMrpGXHqHpGqhM7FRBWEYYhK85fK6JKPNAZJBFteXtmY4mGfBkqu",
  "key28": "35x5kLWZmSgzvgU6uew523MWKjN2cF5fC6dFDe2UFebEPorP8LLGJLKLrg5EMefgdT9YaHYmQCKiY7pk2X45EPD5",
  "key29": "2hWFaN8jJY4yE3QyXztQSnEHvatFK1ud6MwrKZUHDLq4VvAgXoopKz16KfZ2FojPNcAsY4RHaVoF1E9tkFP8b4L9",
  "key30": "44vK4mNM5UvWTqf9FEbUhmVKvGNg9LD4JyrRPBo6ZnHwKjNuHKnz7dNYPnUUr4cisHkcdELaepRA55iKCggvt9DS",
  "key31": "5RGb78MBVyEcwMirH2bp5d7z692Wi5QobcNLHhVouWNtpcvERAkB6pydnXnzYXnQWAtbrvWsEzrtb3tDfr8pRL1s",
  "key32": "A6Vn4vTHjU9TAmFjmnhN3Tea62WB3Z3UsuK6ZpjUiLK14fwfNi42gEaGyt4dELnM7tnDWvpM85pp6tn8aFnN1d6",
  "key33": "4SAKquW6BuYQ32nSFRBADyaocE61ihfgxsmk6y4ny7EmpRZKeS469ufu1NBb7QPke2bBidxoxkwdTqiH6qLHe9SX",
  "key34": "5wHEnRT9BWGXSf1FJcgtD2UGSTQt2S6BJNwBZKekG4JHJTsgNhZH9VGLPBkU7DnV23fNi5DXWgLGpAJJB3MGCdU8",
  "key35": "5JvGq92dB5YVewWKEqpZktu1c5uKqHtUsVZNFLHKu175wiKcTnsiVBBEXszZqXHUir4PNPEj8VcCcPAYvpNJGRd3",
  "key36": "5WZ99f1rCEpgjUW4nc4uzUqnwt4G9YUVcqUuM7djeFWwZPi6R1XFix1bvwakBaK8q7DGpZZDpn3i4dptYzTXFJ1t",
  "key37": "3Z8KfHAQcfJQbox6htECx5Yzcqf3Mgyq2n1YKYZr33J3yFhKy5Lsu7QZphVFB6HvrkkaWQq78hNWCZHH9tVaeXk8",
  "key38": "5N4PXo9so1izL9Akp8J6rLUBimq2wVBxaGrcsa2rp3J4zTZoFjaaxCHViNpVU2TTfyS7WsHDBbZ2hKkDpHmJ6HAL",
  "key39": "5YFdG9zDq67Ny4eAbqY8MMFFakMa5ryZPkuH9Hgou9KbnmxLJCDDSBRu41ox92gH19g915xjeH6pz3EizjcCsjH5",
  "key40": "3wJmf2Xr5XCKST96UXsm6D3vw3Z8iPb3RqrS2B8uZ6wkG3vvL3KvR9KRKYEA2nzhF1KEi3rJtQv8ygjFDvtw7FAU",
  "key41": "5oqbYrrCwe3vva9eu5hRMXSwd28dxy9sUS6RsdJm5RiJk8DCnrRJMn3ijpQP8kUWiE6U5qWKzbXrEnNnR5VQxE2a",
  "key42": "3DrnxWx1Tx45KwSuGaz4ZiCgnP8AkneNpmVk4K3ADeTvXiuURBVUmH4ZN54AbxzcE3xqkCdapZJMoUX5f2vfYuyk",
  "key43": "5StnPRDHtnTcA7gojGj6g5712Wn9PmZ7Fz8eSgg8o1ryFVvkxsHLXC7orEFSdumWAUW7nKHFFsK2NoA7frRrAZZM",
  "key44": "5MVqYSMe9b5PAeqVfsXGfybRsE3SRp2ki6x4bASRHAtosYiqijVnPTSL6uJzaQT5g3EDqwK17CKYek6UFmQpVD7o",
  "key45": "59FD4PSmeiKj9KDG9A7eqyD8qZgRDzpjMUmNAv5bBoJ6QuHE9RUDHmuVeKm4Mj57Wg1haQwCACQXPuGx4gzET1Up",
  "key46": "24ibUM9ukUHRXNp9vHnTfYwF1QsXF2quYagV4Y4CbJVw5FdnLx8ubPRtDarqsnfxDV1aNW6gNLMLXSkmEzSrCiQp",
  "key47": "2c6uWJDwjKxtADhxxdGPqMc1CecKoPTApeLzhcikccYx18QQGTqVNAeQ5ESBB3homoif56NvNwptNYrMKuyvtPXH",
  "key48": "3HFmNFH2oYDJ8Uj1oebBBrC3N7SG8eyQAS8ztDeQSb7DXbf1i7fwsy8AxCmMHS8kj8nVcUpySfTMagGfbH9VY25Y",
  "key49": "5a4WFGqEKHqnf3cB1nzsFDqVn7WUV2Ps452qpYS2GsuPmmNpo4Wj3mumNGtNH8q1U7dr4irLW2FhsJ6hLDoQe97s"
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
