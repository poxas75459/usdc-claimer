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
    "4Hm3GQ9e7hwyH4StcYQ53P5Fu6CKQvMdJKcKhtHPzBUfFacDkWYJe9K84nc6n3JJ8eTAwRyanzbXo1RnCGo5Pou1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqNF25eg51B13S7N6ZP483qRx2CoTHBk8rG3ouLEkd1cHoKv7HWzBDW3KUBbzhWHDMr1TzYpkYycF96Tb8idcxg",
  "key1": "4AhuAJER697BSWCUKsf24FuokUKBDeiGRAKaSjasaMmcPyfCzn4Jdb261r6UvZ7s7NAHVeGHTb9sNhXM1mNDjswf",
  "key2": "2d4ugNhQ37rXhTFKNRyKc3JV6rLy6kh1s4JEZyYK4b4wSuwTSGrKzMYpg9y88RRSEAZeUuVtL3kxhvCm3LF7hSC",
  "key3": "2WaWhkzN77w6JyHeY3kwc9zH5Tr4bQGiqtq3HdziWZKBsCgUyezaVuQvdNSbjYfqMRckrkhhQw24BWiFYNE448V5",
  "key4": "Kr2HxwqNdJsecjqPAF9TJXR98vUmr4wH7WqR7YreRQeoJLZGB5MzHgUVGFcwH2FuggQS9x79WLcCMsQBf75XnFU",
  "key5": "5GBjSyo7W43PW9UdqTthnu55PWNC2pL11XLvFUak1nK4SkadwPpcpfUvBti4oBYEkrawaeivEkySUZfsm2fF7aCb",
  "key6": "2ikuyTHshTrJM4971DjdTzLHdh25SQVpXi25KsamZrz7y4EHqrf9KL9kBqbTwrF3nuMC1EPSXQQJzipzh5aEYjtM",
  "key7": "pdVz1Zim7NHB9T4E8hvwSMwocnyMyG4egquekc5BfYZfGtYTYkNSe3yVV7HWWc4hSNYd25UVxqF8hmC5fwdvrMW",
  "key8": "5Has31magdnY9brpgxUHHksRfyxckfgJhW4jndzg1E6tVFJtz1pUfcsHrXtTwGbNdikw5KYJ6G1sZWZipdoPBsk6",
  "key9": "5TQ2Jz4u95xjPvL4dRo3ZsGo5qp2sR9pDkQ3aWHeyFtaPVuFbCvddxv3jrAj9m1JPHEhqMoaFE2oDcQRdSxvX8zw",
  "key10": "mRRmVx2TCuFbg5fsvmSigvcyXGGYgPfe7h5BArCbyBQEDcp3VgwkbW1MXpmfeHtb4Drr5379TEPYkLoNCQAR5Tv",
  "key11": "29JW81VzUr2D6i6uuk4MX6kQVaegWvDfVDAazqjSBXvQ1ocVn9tYZ1zVM8pUrxifNgSPHkFU6kcVh7icqkxcKyix",
  "key12": "2HaU5tTREbLRDvModag6oBqCfZidNdrrKxf3SNYQQKJNsV87etWnAFyTzXvM6dUPYk8C8XxE7HsNzzMzMZwrRhYp",
  "key13": "2d6PLNrQqxRrpoio3PDqf5rPJpmwVYxgerSYN92JB1J8NuiwxEPbmHFfECbJ1rhfZp8Jninj6GXVy18ZdTAm46nc",
  "key14": "625oFoQPb6Pi2semKJPG3fQVgSzSE2WSVdWJNt7PMB8fLkyLvbUq6zmvurLeQG7QUt7eLpRWJhXyo4yR59KsfN2F",
  "key15": "4aTFahPSo5R9fmCUTrriDt2A6DM96jYAKcZWuXryiszFFw2tfwKFPPVUkhZot3J8X27ppJMxmS4fsQfDq9Cu9MUy",
  "key16": "67mMBMcffjyzTvVv8SoYNfs8gGGqfLhsgnPApkWTEVAAymu3K22PnGGTezbwerDTgqxwDaYJfctCYLnoVda7rEAN",
  "key17": "2G1wKJT1BtibAboJmGM8rJczFpQHeHdSohjPdzBh2VXPZpSqj8Ju31kkoR2bMZ9ksjSXbYyFopTPczGL8xg41wC6",
  "key18": "31CzhV1tYXkCiPWoHyPJ55PGfZUhiYdVzzERLYcqQw5yVGYNxoukbGfcgSH36mXJSrcjebzfC2y7rZuNLXSLRktk",
  "key19": "3TGvg31jSzQwdnKTppunFahPKaghARCvJqE12FqPvqbcAskbVCin8dsMrfCdDkyXJfDrHi3DmXrHHMRfLiK3e3YC",
  "key20": "3Mn4CnidRoQv3UuPfjbsvMk6jkgUwb5Hn8tXhehBbSTH3co3wDnhKC1WEWahRn1G8gEUBAe2k6T3u8BpbZeh6j2M",
  "key21": "5CsX5DLZgPcRkUiK9VhBUTQ3CsxtRqPEQophaooBk9YjAwVnzLcwULDZqq1J3cmvKPJ7FNcNo62vBknBabXfTvad",
  "key22": "2wDCWfd3weg5ANH7DGtj3c34e9suJ7yq45QPuYvNaxhby2jHFTnbpdKwhAPdWH4SouxGRJkyWH1DGNqV2MxbGQiV",
  "key23": "3qqv4rnhsV4X54iZsGBbmb6oEN3nn4S7onwy6FdVjAFp2QKeLjiMqjrP8bsYsa1YQcemRsAFpobgN3L3YwCqQxQk",
  "key24": "4udDeq4H6q92hCwWrk87oYnRGvS6j8fvdKnZ9UKuq9jbx8wkDQKyyURq6Yd74iadL2co2zJF9nZs848ZCuZFNsdi",
  "key25": "fyBZWDPubW5kgWo8PWMrb1eXBEE6a1ZjwaZ32yusfThjwqLoqJtiaBNhoQER8VcwMRRyRm3bT7PWGy4UsQoQ9Qw",
  "key26": "3YPvYt6MSn8WB8mGyN35aCwEX54pXwWSFDhNnLc5Y4XQjbHAAYPD5UZHK8NzVnBruAhjW8WeswCe8nGuCw5LZLXW",
  "key27": "2AUzVi8T8mCBWYhncc8QgZnyfQUGdxsXSAkmF4ngM83Aew9Jd8UBfLp4XfJp9mVQK7n5MgjiEZGULaDUiVyrKDtv",
  "key28": "21B9xo27c3u3dPSSzVcRFfjcfB6BkJBCQoVfjuJXrsemEE5sZdepNaiXd7zkhBALVYGJD4NZDbriiyjtBYCRpLur",
  "key29": "3Tvc66MpQUgGJnjnJhaFu79VS47CHN1H9Zwm5JsSZRUdmcUsu7g9hq6U35cQ9XSuM3YdAfvD4mHt8cFUnSkgPpnS",
  "key30": "XzuvQir3E4wJh5j99ej6iwoKKPKWzfvisT7SL7fpscWcxPtqMQXL4hkB2vRkJxgat2hRs93TqhFTjnBsySeWzUq",
  "key31": "5Abcwyp81DYR555HERCsjtZa1mdDvNdgHZnWWex42t9pupawkzv1CRruAkWtW5jJEX1rqwBRzH1zLpvZHNcnXRjr",
  "key32": "2DmwSp4yQiCcuXLCMxGPL3pArFvUNx7byuziJdENKstPoDzSLzJxotDyQCdt136ghrjaHnXgonzQfBNWoiSBh2yX",
  "key33": "2aG5GHfBTdogTzgcNTxjxRNhMBXsvne7j6Hs2SijgiNFgLh3xLkYJzSknEptW8ux3BgQHfDJ5sbUtbh1B7HPbavt",
  "key34": "2VVKnJ3cMoMWHVSRxCRwDWsMBhJ8oMNpxFrsSAPECwqXFyBBdJBLBJKRVSqh1nWosgDd7NWfqgpgvhw9QYarNoEg",
  "key35": "5hnikoFWSbmQAvqDWy8JB8G77LRzuxQLCYGoJcaGFnCBPFmB7hWRngsfw1u6fxRjEw3AVCZKfXvUQKpo34MvA6B2",
  "key36": "3R7XaTZXkcHbmTAUXu585txm4NYQguZaHRKFXr45yD1WPhcQLN3uQAw2hiHsxmo6f4LjPcdhrj8oFocZfg9NsSbm",
  "key37": "2LstWNoRXDUb6Qm9wZbTKFG3mFfSojZivoAbipVAdsbChVy3eJToPbXF8AyQE3dvExq8QviXMdNqd6ctbqMopJno",
  "key38": "3gy74n7yFnUPeXEuZDe4TCyRyje3FfFVZCiEyKw7kfirqPYWfvV3PVXQjRZCXYkYqGHFRUmyHzniTASoPH2x2SjF",
  "key39": "5GWuHmy3zmZ4BmWhuMGCNf4US7He5WNtLeqs75Yp6Ekyqav5ayrU7DYXQvZtR4saDZiwTrUNgaC7p7GSCVcVjYcQ",
  "key40": "4L72Ft34bJQ86t7SKp4KsFUSACg9bDHzhBJi8S96ewdCRwAycekkCZYZyWbwAFK8EQGejsg88QkbadYRJ67FSj7W",
  "key41": "5bLq1kpE8wgD2Smf5YiKHb8mN3ZzRJnz1cc49BoZoHbiGnkM8Pv2cSnAG64r5dGCbC9haWWCXSeanPn5uLkoPbFx",
  "key42": "2Fj4X4KxNPagK8xicfykbcLekdKsevZGuDPNWYBvimYyMmtBXRkFojgaZzK284gx8C48JHcWFdQfNV5fXcHX7cnf",
  "key43": "4Gz8HVyy9DMbizbWtVbNVLi1a74urDKUxXCrAntcyfGhmpMucRGn8MUq5EPSR4cFxjkTvkcGwHBuiCrMofSCzLiR",
  "key44": "2TuGC5tz1MpJnpwBVLiSNCxyfk1w6unL1SJSdaLuTyD9Mu97pepEdKw75FaUZag1wnSuUKxAoe2UZiTmWJiAHneq",
  "key45": "2VTAg77gHdz8WaZPjgoGB1dKkKhzG6BWeA8HXonn9vq6HJoip7FrndwEgMz9mtMLDCsWprrQRY4fxegTYHvqnDXW",
  "key46": "4Pk8X8TXS8k6PAuqQuAnhU2pMQzfASKn12Nth5a2d7oi1rEEawX9LYNPZVVVSYPgLVQS94uukRAfXhGfKj2vuadj",
  "key47": "zsPj7h25TmMzmj4cZz59orjEwYxu1XoucbK5xwo2qqTBAjTia5LhrRjmBRfKBuh59xSXDzi1PXr7u1KuX9AbWzV"
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
