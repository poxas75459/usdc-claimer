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
    "4Q3HLHZ7bjVs3foN4igKBBtQjk25HBVHAru9tb6XKbLy51WGWGd8RGYfUQrf7JAu8VV6hHyrmzTH2sfd9EahZFSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xzuVMMVZnXE33qZHZndg24oaL2BonguUDzihiasToUyAjLEic2KPbiygB313EXgKGkuvf9EdeZPrBrv2YUbmxty",
  "key1": "4TNLaMJSkeqsGqJwsnB9gXDwAGcugicQs1fhTmTcndhafRRXRfHBSmPboCfbHhr5DBDcYd8jsPpm4RJCmR8Vjvrp",
  "key2": "2djTChkMTQv8PTzZ4eiXkKDTRxUHPb1jUX2YbpyAfPzLzJg7zPVZu9nyndsLJsJK1kw7AHCrbgZcspESke5d9o7T",
  "key3": "4ZxcFESizKJ9eXN4LfitBhmBhAtgcRgcWBfKVLha1YBqtNFCFmrAQPAVJjxUkYB7ZWJ1ocYE1DtVAJZnL6BeVynX",
  "key4": "2BW5w8yQkYjnWpv1fBhdxgRgicyZyGoKQBi2oWB23HWDAYT13bUT37q62u64TZAMarTYtUEGhR1pmpDEj9n6Zyq9",
  "key5": "3XffYPFULqCYVMfbrPyQyrcaCqwqtqMQ57bu1enrE8YD67shm4ARmFDQeGt8aG2QtNx7Q7tZyAn4oEQHbk63C3hK",
  "key6": "2GdYAKHoiHUgoG9fVfEFfQKixr8bWS3JZhXVKTvXXZEHnfS1EWaWjdD3qeMwWUad7mwrBeGcUKtC9gS5MJJ1dxsh",
  "key7": "2gpsFGe8oncwmkaFEbqnAvXdKWe7J8R6mwnHkZPZrcwGGEdd1H6paTftg7fygXy8smFFiGxJMe5PbLhnMF6VaNhf",
  "key8": "2imCra88NJC7HhzDycQopHD5YLicDiJLnLhWzdpQMSteA2W3dQKSHMpY1CBN12UZN9zyTfA8LszoMR3Kp6qad4v9",
  "key9": "5nRBcgP1jXPSgPAcbcioKCAfNBkg87fuSftNRq1E5BUmPWJGV2RDQgcwKVEH7RpNYdS1vJCqEQxLAAcJfVVQHFTd",
  "key10": "21HW2RhpVRWgQ9uDvfZs59itHaY4Wk6voU6ZUxxDEC6Kme1joYrC48RTDHWc1fZThDr9nqM4Au1gQUgZ4Stsx8Xt",
  "key11": "UiHRj11Mw8M1Bh2dRRG71ZvPMgHqScESd1qnvwUt6aVwmVkBZfynGddoz7apQjxrhX4xuVZJDGQkrV9uKDQ1q1U",
  "key12": "Ux7rTPaGfncizR9Za8mgXVsFAyJ7uzc71sWqGEaa5BvmtKEx9VLybxALfD93FZZcHGjnm7WnhPTbBisikSUiEYn",
  "key13": "5Uus5oKeBiDSdPddXwaJ1VQow7n6NKt3EZt3WqyZSs4cdaUkAbJazPHhrQrajJHvMtJkwScHQwox95zEV5Jps9JN",
  "key14": "3RMDvR3D3dnR5kemmxx1iUkB66dwUkEhm1qYMc2pfXfbSjXeTf3d3ZPshe3Qf9LGXP4UgpJj25S1jnhFsvhf7Fpw",
  "key15": "25anHz11PdhXszmDnMTfca4GRLitUmJZoot6V2wdDFz7C7Kxv6oQMndJ4JzGgyJn4qd9yNFwtp4TaQzGwt5K1szP",
  "key16": "5ofmD1B5XuPjB4S6HEWk3uMPQFFbZyGRkFGWv1D2tRt9cMTVeZDu632ZdPX4k7mK6ch1SypZv9ATDvzdBf7hmXVi",
  "key17": "4ZX4MhdcBUHrhv4zF6aZjMqhUJvkMbrsHxL3tQE8czbSYA5NPWPMcJPkFBBWgYX4fMqmkXzMLU5kznX8ReQaJ3xm",
  "key18": "yMowzYyjK2Mzvfpkg5nNZnCKyhFT4tbtXfHwNp8Ur84NRZDq4RmwwpYScVvQJzgUvPZgGErrYAzPqVU5P89bTZb",
  "key19": "2jnet3TdUdFhXrBGFBc7SW1rNHjZP9bmij2t4NbiMDY93Yu9vz4euqXDe8RTyatHt6LY3kLC33xH6Dmyo346ppgY",
  "key20": "2J7AdGJpASBT2TKMF82HzBjVc8u8PNZ5rfSHXF2syPv3vCWqWxnfsgmp8ShV3MpzZVq3QbL1QiC5pVkzPTCzEKxk",
  "key21": "5rYri8oBTQNpgwvyrKr9uMbCnqyRC1No6nT62Bx2tg7atnNBtcvZnCjrFdJTDd8kopd2YQPbvLeqaxWhnsf9fUHt",
  "key22": "2eL84MT8nRyHGjwrzXGhwQpFsaLc28uYo9i46X1meXv2b4X2fQPX9MCLwqEemK9bqGSU4w1GbTtfYdyhg54dHSEE",
  "key23": "24oo7dbKtoCKzDSrTSH9sEbakmmwpz6AnBGvjwPiik2UPSU1rTQgzx3RV6qiAjXL7Qwhjhiw71ScTtTtPorPvnNh",
  "key24": "4wy5N8g6F4Zm5NMyG5mxUoP9TSZdVLQb1SNV9URoND5K8vbmjgtvZFnEKmTkJNWrBBCyWBYncU9noxyjHkEyuHF1",
  "key25": "4WLogRQywHkAGf4kdaGgry6wyMvM4sTGYSYWa4Gi51dtKPRa6rG47XJ8Han81YtHCarVJUYj9RNUSgh1iTmTnUws",
  "key26": "4h8tSraxwqhG4LEHySVXs4kTWcRPWV8RUmeQwXMCPnTzRPMw1RtGojmRouDvZHanKu7GwhnuEaKrSjisXpVnCo1p",
  "key27": "2R5BQK2tRN1fq7RPiL9TcuT6BRYMiNui8omRAvEfGpY8BZ6D9Cx9G7aGNpmCLNkpDcMKzWinqBto7LaLXBcgHq7B",
  "key28": "3Zzzmh3zUj6fxErUAJe6AtBTMk2RHVXm69iVSyu45zFNKp81ghbZeJbMLtmRmUk3NmMSepjUY9ASiojKHiZ7xcUz",
  "key29": "5yvZZErnm8RBuDZYMHVogBomoGgJmRxRhhNxh7xViFzXGJVc7Zg8nfw7KC4L5iCB7LXG7E1dXwk28MRXP3jQM8vC",
  "key30": "4ovSbuzdkXkmAVaG5d47B5m8XdxSqVUBxTqkRtuVjKod4RSMboQULBVuB3aDsiKnv1yivHwYJB2aqDHm8xrg1f66",
  "key31": "er1evkYqYZNtQgjofs3xxyBY5mYkzUQ7Ch6uLKnNcusNRTxrthPX9FiVs4gyndc4B3qP1p2jcfh6Rt8LJcPo5ct",
  "key32": "4bAuGVZbojdDMohD4PWMBZj1ZtMk8nJrF5bdVN46MXuodh4BDiVZ4AMY2uUGdf3RfBCasa17ix4TNYZB7xtQgE9f",
  "key33": "36QzGTUT5rbdQ318Zwzff5t7vZjfxjB2k3CdpY99L7N4usbxFG79XwpDNHrQx8xW1o9KvrUQWgPLk3iFSA6VpHAF",
  "key34": "4wyTtrVGPfna4JHtamaaTFBynKSUXifHuxV46fFTXPVxnve6ofFcrmtTzm47kj3fPbVhBE5SjQtQdLQs4y1wYQpM",
  "key35": "c5i6Tn6m1hkM3e7vvNMh7VvjVxHfKnj14VtM2gapYgvP5P2TG7Ru8NmTQoNeMH6KgVkMh6aLUjSFUyfwubHGheK",
  "key36": "5SzMUmBHaPmcLGxFXc6tHjXzSpwLNWnu4nb1i14ijv5QvSK75Lnusf5uWq2KtyEGeAgtQw79mtv1PG2pmB6SyP39",
  "key37": "4pcMgLCv1dHTGv5KE7oWAZ2QVKJMATiqK5nEmkG8UACyhzwzbv8HFJPrXhinRm2E5xsbBech5KTURsNRWhnNeofm",
  "key38": "FfRTBFNj8sitCyibUueLHS3BRZMAyez8oLfKifdELvK5GYGvKVpAooFio3zqdF79f8ALzLYTYNzEPdBjL7T9q4b",
  "key39": "27Acnywr9kdiBt6EgsRHomaVhi8dV99AviKto2FXGk2tobstRwVgH4bP2KpG16GtzTcQt3LZ8XfMTv6eZQEiKAmE",
  "key40": "apcQv7YA5M7PGFV4mncnQ5zT44zaJQJfcsHtavMi7M6iqShc9YtXdjioADzekV1iAnbdL88eCiJAbiTWu4cgwra",
  "key41": "5mZASukcHzazcjMhHTbBnRZWFBkK8TtXRmpisPAYbfACPAb2mBVgHDmLeiCocADTvu2EKSSy1mS2sLmGtvGhvHe9",
  "key42": "46d4CxpmvoPUbqkdf6dezMKrkM6kaWm7bLMTAUiDzXFDXdvarLZLB8v13E2tjMW123iguSSuwrF9c9t3SFg8dQfX",
  "key43": "3ttocYUizoeysQu2Je8cWgnvww212BDn6EQ6PMYX27sEqC8xoggN3TDtuLEbxJT5KKhPo5qLebQVBZExWPpLBmMi",
  "key44": "2hdW65fg6TiFbUttWAbzCZwhS7fXnvYNky2R4VssY97mjkecP2xpN4qfkMVQqprK62fFD17DUdqJekbQaBwbZVDa"
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
