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
    "5N4sNjYais2SvJm7qCF4tYEpBRdLPGeq1dPguzHZph1K97X9iuunzFzU55EYVmLwWmjtc9DLTNLpSGGM2Zf6CEU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dirNJtTY5RHDapVQvantiHND293LjHCgnGEXGzc5ZcnV5KeGip9Gu54L3QdBsowwTyDZnghwp9CYcGYjDxnyaG9",
  "key1": "3atmDhkFWyGVSBZ6MNAzH3RH82zVkS7fFQeZwXd88RhkiNfJD3rjipEkQqDojKuHZE672LWnWeaMmPqc6hyGVswm",
  "key2": "33B6PQKvbdrRMZYss3nVA27HvkjS1aTbnxpRxU3KC7QFaxW37PvU9o4zuUrQfEGRyFvVz5beTgBqUvFyBFQbkRnh",
  "key3": "4x61ceuZrfc4vuH4iZerCNmruVHYtSuJpV8N7YWfUsuG5cC3CkiGbT7wR1danrnNCz2TH4f3nEUtcC3kE83kNtpY",
  "key4": "4gJmkVGT8vVX4wQEjL3FUMkRKW6qA4S1fdDEUXFYCmSzy5TzmdnVkYXK9Y1Wwebqub8Qw8KBtpjgk99DZdULRt5C",
  "key5": "4NdoyYLRrrx3jCkhygbdyG7KVyjS4EvfstWF5SxgoV9R2hXM5xbYs3ukLehDpQKjTgBuai2E6YC7DnGfVf9mHYcJ",
  "key6": "21pBvX1uik67JP5SzjzQ4uNENdevUAhCzp4jMtQZMoEuNWuhR1kiqrYkGLsBuEzV798TNyfUaLU2tp8c92zAjewu",
  "key7": "2V6mev9TijX9mws62NG3nsBK3cHB8Tbwn8dRrAVZUVh6vPJgfb95oNgudv9hhj8er8aojYkVPYDv3ka9pghWGjkb",
  "key8": "3VN9Vs7L8zGbRxJTYP12BLjc1Avnw67n4rFad9CEugYxM7ayup4oi9PwG3Z7dmoqs4gdRjfRE1zpaGuG6DitVNZs",
  "key9": "4oh2qYC7X5FovaQdCUaUqyLP9VescA6ap8AW6n67rUzFCxGaRfRLpdQXg6NrwVBA5WDifZsFAVyJ37m8cPhmjTPT",
  "key10": "fzHWj8PmsFpF2iBHDRgGaBVWrUmGs3rCSTJHqbc2NFm1MsH4pJG47iekujNM156FAXDJmbD7mdPFjduWW2HxGwQ",
  "key11": "3VdvVvS6LRkeZuCToFnAmFWtXTyqVtbiz5H5UefmGxKHEsYvivCNHPEJ5r2BgSvdd4cq6unCKEi36tzzGbCGQQh9",
  "key12": "J36KZwiSVair3jCCV33To5Vq9JLeWoGxYej1WwRefWojVaVEWS4nHYxh5csRGK6dTBnoCXVa52ynqCBN7B8NNYj",
  "key13": "3ScPHDtUKztGDroh5QmJdxP3DipBPXQcJagPv295fUEEfn9NhaKFkWaRS8KPksXoHkoW4XVkVxWi3b6aCnZHhEPV",
  "key14": "YugFLW3otsHsYF7MDfWAnrEVsQkDRwdARVZmB2QTwKxmy88GiECA59wio9VGuLWkZKYr3hYsAsAuy88CQKiFQvx",
  "key15": "3DcBHqXiTXyVEkMZY75Rjw8u9uhhv6RMHZvDpEM6E7GcTn7PiEV2f3w2yyYmcxQrs4L7dPh4LJRv1cKojhQkst4p",
  "key16": "3vHsTgpMUhJuf8dB9VzjZi2KPSTosv3qxbAE247z1DFeaXuaZ7ioykyrGLp21XHibv3FnoVd212qK5xTi7NLEepW",
  "key17": "5ScqEjv5QMitNXC3MnLto5sR8jCiyAxfqbnEtHfQyhkzmfUg1tRBytSVF452EgSiwrbAd4LQUR3rKwq3V2UnVw6q",
  "key18": "2nTKbzqtSfAcsmGEXpPT4mNxA5CrKMKTVc424WTPGqnSSc8goB39r5ad7X3Pd1D3UyVh3nx4AHbrhspexSMCKS3U",
  "key19": "56WoqV1NTyBvrx2h1gYD9xG4sJLjw17nu7UTLfV6GpadqV3aytc1Nw8pEQwrWwYKSz5kwwq5thuRxXaSyf56WXRJ",
  "key20": "5Vbb77HCeyQvsCz2h17b5XJXQELydjLuV6VsLVyFXZh1XjXV5YU1d6W9eDTMFGhGGHyP1PPboiNbsmDsgNAWzFRA",
  "key21": "4KNKLeN6TPbvRRb8LZbjB15xc4zsGryAwuoKowmjZsX2TJB3T97JKjgdbj5FMzZWSdzxc44pz4yuvbNGxz36pgLr",
  "key22": "2HdgALtPo97RnGfvABMmALkr1mPBfPDykhRvHj6KBwKagn4vqH9aywVrBMKW1LwzXUpJcSFGRfUnEmFENapXRXyS",
  "key23": "461sFqd5X1Z2ohNLZYQXmvdBZtqkCGCWgFs6tcikV7HvEdLi3LqdYR1J1CWyMkv9tQZmD9bHowaFcc5bK3vXgQ6i",
  "key24": "3dQc1s4FKhinjR8pECNKCMZ4pfxPs4usXfm3hhowFMWUA1eNnoaMDp9bpbcCiRU4AhB63PiMG5wntHxo8mCVJiMq",
  "key25": "34cCZPar7jLnshk7g9dCYzwcyVp8Ahh8zyEgSFS6ozYcnXcqnLwPp9Ds9kyF4fXd9y1taawsvPY9nGHKQE9Zq2Xk",
  "key26": "3cxdYcmEL8zUb4DeES8LtzJytQvux1EDt34RVWWnJfMkMzVG88L64nXcXBXo1EUCLJTogh9bHrcouYNBmqumqZak",
  "key27": "RHd6ViveLDniNFdTvgjH1eGp5ziVn66dfRcKNUbAqTivfi13bWva321gPZFgTASdmR5u9MgwoDMMGZG6s6pyhw7",
  "key28": "57zhjzzo8Vrst62S36Sw7P6P8H1GDjTjVairw6NpVwNinGF3AfsbMpHjsMiEoFBAijEY1vtcLwGYCdWB5PMGNUkE",
  "key29": "2KbhekkvucLiTdHTTF6mWNQvo8jK1kzQL5EaskPYuL52L9u7kAzwqJQftkXC6erV1wWaFkWgDrQErkRgALwyw34H",
  "key30": "3Y3hXU2wm73kkYXToWVutxgZ6qhk5yve8xDmg3KbyHKwz1N4fNG9QTT7T2s2N2sqyFBaW9JwurWDkzADWfjCJFdA",
  "key31": "36uM3Y75we414bpcTgnYAfCArc7UAEkuGFGuaGAdvLG5aF9v4atLiBwBjcniCDQai4pNCJ4sLsD5bffHjyKB2sCt",
  "key32": "2qtJcXz7eGrLFF5zsx7wCLL4K5qtKpwU2zw7jF4k3AxA2ge6z3w3WaPNe7Rs2SFUCPj8ppFFoy3HbKE3kABwp8En",
  "key33": "2nLYBtqHTnjfwHAT91SS6Zk5S3FXfXvx6jPTv3th5sV6hP11EpUFMwP7VQgz2v39mXvFA7NBPdrDxoceU7yxeVAx",
  "key34": "2TdHiSUdLSXFNnG14BdWCHiPUTLcXsJ8q2zGSHEsYk3UbvKLCqPHGFoAWyzChcorecHCPMXFoAjxPpoRBbWdbd4B",
  "key35": "2otavLBPNzr5tXh8dZvNCKLKG9ytNmjKTK1tS6obHtNKB2pDLpX3RQJtEt7VaiETHFjt3jj1kXM5Xzy4nuBJR9a3",
  "key36": "3tuNR6Q741WzHZXDs1w6ebVKfwy8HqXMxwGfvHZd91bBr6rPvqNRXbBd4FZz3N1MiW6vVkV6wyqVqj2r8K7dLdWU",
  "key37": "j6Nv1mKjeTce34R4H6EqgSrWpEzPNZ7q18rSxqaxPSRJEjyCgnJJRW6K7ZMvnAg2pwrjraZVMjnDWagkvvfPZqn",
  "key38": "4NRYohZ31LGCR47ErnLxg7V2tuN84ou6JRFg6edwk4gwmwCeGBnxSgszarY6PVAeXdoLCVfBHRHrHpEk524u7MLt",
  "key39": "dKP8J7m16yMD22xtZHbcC8i9Ht3AGBPn4VenudU6r9nLw6j6ih6QdiqybAzf53H7WoF6od18qmJa9cr5MLHXUv7",
  "key40": "32GaAqm2wu2WkfxFLFvNsQK9QKb8Ujvjr5Gq3HokmSe2SzoKiX5X4qnoBYvrcvwBLZ4tpuVCFPVr3U5nEihRzcg7",
  "key41": "d7PJSrJ9hmqvpDX6hUEv2U7XwjbvtJfj8Kja6Yp1jzgP644LS7peManBXjsFRgXe1B8mKR3vc7HXdVvMgxCCLxx",
  "key42": "wPY7iQLU7zPYyEceqRhr8qYRCmdw9HfmasqRmdGmfBs77AXDFHo19acN16NB52Gdw3t6LBHPb4eFKh7kfiQWUCX"
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
