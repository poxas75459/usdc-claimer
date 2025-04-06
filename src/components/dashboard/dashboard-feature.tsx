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
    "2hpWzBwkaorGWsheSJbQ6Vf1g4mjcqmpxeywZqJhiFaUcY7Lf5A24d9KszYZkQQux2MzSXzbEycZBKVeKTG2u1fN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NMGX6mt2yubYCQ1pj59UXtie3SCBVuQJDJUyJvAJshHaLhvuMokeauD6YGf1TT3yaF1zZcmwP12GPuuacwyadZn",
  "key1": "5UZZf9XGa3MqfoxQgmmgdKDo2Dt6KEdFizPYM8rpffkSNx3HiJ3F9Mah5bi9Wnj21CTnv51L3JEnkeacdTJV9h9b",
  "key2": "4gjw5PL5ouiosSbEn2NZJLj4JEHL2wUWzMairQGY9rLvh3cffUZpAXnKBiNemy6RTnhBYGEdA4BpxsLUHHNj2tFF",
  "key3": "2Z8yLA2Fp9SUE7PAbRDe9YU6y3LYd4hFnB4RcGdDK4uYQrcV66HXeRaXAWN62KYDkTkPSXqe2xbzz4cv8keA657r",
  "key4": "2AWH3KxbMyYPxJyPj81M5pJX6bGNgN9EmTKmtnhkTD877d4mckcZDsytaTLpNgNtnXLLTWivCk4WR5dLFT9Xv8K3",
  "key5": "4wjkm1Lz3bbsWfekhe3HkBsZRdehBh8MR4CG4CNLWC52aawkEUGp7jY9HZz8PySkNjmUVyiF1idV539UmLE8ZqVu",
  "key6": "5xehh4GWpRKiv9fBMB9U23pCuwL31tnzBYMAjxLVTri4aiCfE66dGqU8GTjJdHxmq3QYcLiKC4z1QCv67QKL5Zhs",
  "key7": "4LHU9fJkWEyA4XpfdZMXvDq7riAAPLv5pEnMtsd5NG32mQJDXBhuKG4ozjFBxepZRxERL8mqumnHh4iSuUk5JYzK",
  "key8": "47HGmo2JAstk14CLDTiYbyhiNCm3FNqp1JU5emWjeE8ouP7SKQ8fqDBFQHdd7PVfozq23mCtenCPXDsq8Jsfeu33",
  "key9": "4UWcyeMkxZLLQpx79h8ehyEqjec83p6GdhxHD9DuHW6BH4M8L89Xp95fcHq1e4jhafAYQ9Gak4MW6u3abiDTnvCx",
  "key10": "3vdMevZafAgYcdejZhVtagTpUVb11gLmMaJiN3Ce4jxYdpWf9JPzcPNqEb317si6dFnPg5tMRQyp1ro18qmp8qfo",
  "key11": "3jgP3JpNbBabMW1yMNx9Zp36bceUUSuucUSfUUMrrDQMLnVLyRUQe5WtuC3BgS6FCBUwdwyPPPfr1qqN3f2FTFaA",
  "key12": "3GYZUoM8fcZxTX7H2yFGajMWtDPCLSK8pMKfFbcgygRYbbmdYFWPL91w7mAhktn5jqnhGyg4WH1sxkzxGkcdd9pc",
  "key13": "2GEC9X96Jqm2k4mZtfAoq4NhcpumTu6A1G8GF7nwSNpfS1XoFz394QqU2RKqe2m1vNZp3zkjrWQeyTfmeFdtYDqN",
  "key14": "3itMofaNDVaSxdfwc6jzHkhidZiVwbPSE4Q9yugWteWCqiqzVsW5KYYWmqudGjMfSHTyEU1TyQiaBwHNcECoxraa",
  "key15": "3WvGGYET9jtD2qvALWTLkrjvnh7PZAH71f4cBaw2yizZq6reaxWBNThTL4poS5MeLzgBsBjPu5LHR4aReNXXcXSE",
  "key16": "3p5uP4Ugu8vbv7CzTe2X3SYqFBjj1mP5nuqMhnTd6pU4HvkK5UszKXCbNT2sWNwdgVPztirEtNPs53so7U3tzKKG",
  "key17": "3to5rxj8opStJF81jsV8ruzA4C6MvhbHZz6F5LQHo4AivBi2z7pNa6F8nJnh3PjSg4NPQYhL2YdVSnbAuHyTMqCh",
  "key18": "4i5G7vHjsvgZDCvpsNjGqGxmRgKbM8ypfYzN3CRv9HvdmHBH6rpZVTPMzf9qLfyXUnGMFBtVt6q8sieUcxUmexFZ",
  "key19": "3ckPaHbuRPYGRzABUtuWhEhBt9kG6d2Gv5BAqFzjtbBuYajkzyS4XeEL8BvMCGHdTHCVCUpHMRcdmJSq1FSvHe2A",
  "key20": "3uQ1ypD1JMSdxoXj24LBiZ2JRMc52ezNQQaEA6Gfmrbc4L64FXGpVGSoU1ReqKHdSQfNiyuENnNRA2xvyySVYURy",
  "key21": "5pmDqWpDqLTbqmyVjeYLHvdsbBnEm9XCNKYBo3g1F3quKUdFR1mW38WesT4keuQPYDY4bfTEiGX85K2Bd3PH5ztC",
  "key22": "55UpfTPzZM76XiG345NaEWMmCZE24p4XQAib31bpgCFTgZR87AEhBjCT146ueJaf2p18GSAy5zMM8EXiPjd3qpoU",
  "key23": "2MPxaea3QRMdFYaxNqwadPbFt82BA9JhWaQ4scMaoMnjBymdjjoppGHS97Av7SFJoDuu7kD19cbgttkt9yhZr6qd",
  "key24": "2na6RDVPRducR8WN469zG4JU3BNB5rKnPNhk9siPPKBcfNVssCSfykKJf8qVVXvMvhDmmy9JLqR5Lyzn2sGbvPho",
  "key25": "5kbg33mKhyniAHWAuBFj28ycGojL7gVTRTp4gNzHW9AtCEoCL7xp7Z4U6wvEVpp7FH6yz2bZjzkLBtMeHqFhZ2yv",
  "key26": "3Kj5XgeenLTNyuNarnEtXaEdPmdyTVJaZcVuPncFy9sKmaEKAYmhbH1z9U7RHpBAzgC1mfeE7QwMX61Aamkcd3A8",
  "key27": "HZhnhVqcWWyxAmrPnMFjcu4dWWp3rmWigJhGYRLsC59TA3MVJEi22vnZ4Qpb28RSuRnnyDWFH9benp4Zki7FwMF",
  "key28": "4EsR2dry9KcJkhsAav6KFXg9XBgQfU99oJTD9uFP22zoZoNF43NPidTYQNepUEHQnddFT3isHRsoTKk6UF7bMKT8",
  "key29": "3VjqqXMBupcxNX46MSMJ5cz5a5pZMomCGKgv2ohKDXrbEcAxinykKk6G61ujCZTFMdRzTesh3VQuhLc3QymQ5YDQ",
  "key30": "MGUkjyzWSfWgt8756iHJP7DbWiucTUyNy28tDhf2U3xGpSXjeJsnztidbLQAn3LdmLvXf3xttpuhFNjuAMpj57f",
  "key31": "4G66bS3iz7fEunb88T6S1ZMaZykjNYnCuicL82mmkDqdHZMHj8SvWqfsN6hjab3hSUbVmHYopr9WK8bfLe1mGZKm",
  "key32": "67A2kMnyzGez8w58emCkfRsqEVQfMPzuj3ipDns4rCDT8D1p7XP2Yt9dZgpb5rj7yyoFgVfMMBb8BHb5uxGuCbsW",
  "key33": "gJKJth2iJRmmPAt3NEq1wbUmLQcQ4ETM9hBZ4fSL3ibEgbyr6VjqHoGUiP1VPXePdbbtHxhYgHD7yR3aDV9bQRE",
  "key34": "5UyMrQongyxeKSw3eMLuHh36sy2eAHfCnTUVXPKyY4JbPjw2nmS23rZA2P96Cm1ZZpjiKDeEdAL45oEMZMhbZaq5",
  "key35": "9uRay1BpX266gF2CLt6UXGJxS1BCa1GCwoPMkDf4CtNCvbbf5YCNq5ovwK1WdBHWsbJ72nnmoRuZTLiMr6X76No",
  "key36": "mNEYmvaMJgHwbDx7ZdCh47qKBAYD7wegkKRcHiW8qhZHVMMPNsfjxP6hZMfFxc7oiRbs1XK3VZWFM6kLiuZMRA2",
  "key37": "5wBSdhEcbYVmi3UjRBegzruNRAdgk1WGQwzHeoTPhRj84CLXaPj81KnT2hMkf5DUEdcbMScphdRbBxGYxnULia9D",
  "key38": "414z3ejuZ95nvncaSANb6VEnNusucmBzFBHmFNxSCBb4ne1895jREaFQ1xrCCzDf4H5UNSNFbpkqSm5DaSZGGQuG",
  "key39": "adQ67xScxGinDqvhKArtJp1my8V7cd6qy3AyGeRpgumfPPDe7YP2GbVCAD6PEUoF3tyeApUcjNzJPyTL8mXjeXM",
  "key40": "3PYeuFBoxws9fwGrDWqBBMEj8yHwnwgzgWEBt2vnchGq4gbtSJPXLYaJ8xJKHpwQ6jFwX7XCyvSC53TXesESJXDd",
  "key41": "4zLsRB6QC1anNUsRbx13641egxesSRVQgtPk9ZdtEncdbfAu5u1qvALyQRiBXSYVz7jdPVHUADttXarKqnVvNR9w",
  "key42": "AwUNin72FtH9ZfVi7B1CEtXnL1bspHoQWdFN2vTDjmfYnJjckeG31qQ9pes2ev5fsDSRSAeQr34T8qR7yBtn3VN",
  "key43": "4p8bHNkxFyJ4gLWFRdkAcvERCUtCPbZL1gKeGf3MFAxbd9sYyLDMvMMg6euNDSJA4eJS79p8uQN7hoJPPyeiJPhK",
  "key44": "5ZtdzpeVtFXivS1EecGiE9gms3mMdyaN8Lsm5xJL4ijQ2b9e8wCkCrWJeD71Cfcy3MixHRd1r1CREsTuqDEq512Z",
  "key45": "4XTMeiWrFUdzBgRkjBbSbE8E9em5QGN3BzCoPnaVwiPBWHRAkT3fVhfJNwXEsv9yQaB97DJsvYCsmExw9wDj884J",
  "key46": "6Aqxpzuhv8S2cucvTarF7CuBs3yTt2wXnRVJPn547cTwHnGJrVpiSDqwtnd9BuJeHdG3WUoMTfPdSJpzt8intVX"
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
