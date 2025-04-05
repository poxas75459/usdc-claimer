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
    "5v5J2WRvSTLHyPkC9gCNyqokWf6TDSQoNrEESwWw2MFWBey53ScyAcafBe5nmWyH1q5pvgdo9krEkoB5pFpCseZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hEZgidL5orVkhvpiQcy25puZ4xDskWGiukRaT6ZxBVUGtR7gR4h6are9iumFWN54bdFkssaybc1G6NRjYQLyM7z",
  "key1": "4cjtuncxSDzBaN8cFDKNEKjFmEfLYQzjxK435WzpGDa6vL6HZV24JcyhWiBBdfbgkMd3fV5ot8G5MPqrEZoTLnEQ",
  "key2": "5HXXdnuN6icrnbd6DGoSnJ8cAUtb3yMBbjufmDy8S9iH8sR5qTFQqPR87SBBspX6o5AvaxG8fcDqb2ovrPB4atzr",
  "key3": "2HaEFLu1qbdKt1Sqv3ipypimY6JGybbFQBHSKwFCp4QpNmziaDZ2oneGY99XznT99PN1eTV7x1DPRNdBzmeKBfqq",
  "key4": "3s9qrvoBx3ND1yi21CE6AF4dFkS1gcYBQWxxhMZc77dmXDoy2H5vwteg5h7pGVJjpq1E3nQMFKrkYWo7fScbrZtK",
  "key5": "2pPZ3QZhoianjfDEaWXKKck6cZXRNJAnpju8yyM8qPKMGo3JMAhP9sZmLxg1fCwU2ZDPHmMoBX6KeqMkWaknzx5T",
  "key6": "53tbB6gz6zDpDp8fZgfsJ4ntL9eRxeNKEMM7b589MyUNh7zLYesyuERv1LxuHs75bL7aSeBnnyk5USoR3EyiezJr",
  "key7": "2FCwNpheTQpz643R9Kpv3837J6HQj2Jr7L6KfGb4V5EGb6HRta7nK6VupnxkyNX7DanGj6PtNtEbXCzcxtGbnZN9",
  "key8": "Fbgiq5r7cgf893ZsQkDnsv3KQVmySXhFjUAWeRMe35woaVLxQeNGmqD9KdiGT7R7V3wCK2pENG38WfrqhYBjBCc",
  "key9": "2XCuHXhc1k9NMPGssd8ecMxzbRYTxUsecnvGKVVbdYhUw3WUwUBby6ZeRkWZpPJTpde2CeUfw47w2Tmwszv67JdA",
  "key10": "YczgWBn2APaF7EuQxHUCERuw7zNzfHFiL3ecPoEvfz1zq3TJWFuwoeJFuZtKQcVNXpwYsda9n48XwbnVszt4uLv",
  "key11": "2DeRQYRwCSnkfJw4qHHdXMWtVv5LrJ195dJGBqsMrZ7K8Kdi7FyvMEHgnhCD5aD3KcEKVA8U1xJN1BAAWVNMhrat",
  "key12": "3Cp76LMHNmVeZaoP7B3EdVVPwXhJDruqZaTk1xjeGevEfqQa8K6BNscRxYcqJTW3YFgmeguCL2ZDzoeH2buraLkv",
  "key13": "3MsS8pDiJDfhc1wSE6XEhVj1w2agZib5say7v1oA85qj1xC7wr1rDBCTZXfcyQZ1PFASFRKTK62j28cFUbXBsNsW",
  "key14": "QsPNWsYNkHKu567zF4zkwVDLvJ5BHkuL5t2WoFz4A5BiSTTxQztf2JupHRR3DaW2PGPutDNmTgemxEVNbcXgqeW",
  "key15": "3z12UrgraLGpPotQpLuSTWRmbrcxt7o6eaoT9iXeJqgJ15ks8bPvLe75JKQqNQgUDim8oCPYXgLme3TuKZiJXkgS",
  "key16": "5CQy9GU5D23SXnEyHtXg8mwRCysxFXbtsGyAQQ5wxpoXWx6qhmvuB7sbP45CDmQq5Gd7a4PVspn39dGsgTCFLZ3C",
  "key17": "3FEwgN7uGLVMv7w9dbs2f6xMd51U5JUmswypWmzxFUdKbctn2Zcg6AmRHEabSH3srQXKRdN38jqtuzJKRi7k2rEN",
  "key18": "5LqoiACAX4TNsYqRhE8qRFpMzhYfGH3vhqxRZPWUuVUjLFWyYHuHwokKd1UMhp1nVcsE81k6q932gSrgpmLWNKg7",
  "key19": "3vaUot1bRa2oWUyQs9xHRQBWefy7Y6vDiEmuu8RFAccNuEbCLaC6EkDsJyLf9QJEEvFQUxLPZ9nXaZF3fguNUSXo",
  "key20": "439Czb7YcE51Y4UKiTssVUf5rt9Y4ymsxgWPDVDeReHgRV1FuZLbsF31vuZB3M4zwzcPaQ281FLq2aVtMkrFG4i5",
  "key21": "VUHus3C7qDzZyn9K6kBxNa5J5Nx1TcSVpyQgJAfmzFL6azgN3xx4BD2uAYyerUb38DTyweRSWnFTes3RMFgBX3U",
  "key22": "C4GaJzaTi5KGSDrWRQeuaMPuw6EKk5Ae9dZqrv3moRYwCC75jtD9CtE6jLG3eCtuWEjcoZYfS1g45acSyUgawzE",
  "key23": "4ayZeeE8zwQTVyUpY4tb9kGwYNEhAG1m64fw3jyUymVeDbBhtJnE4XciCtvHpbyi52iS86RucxjL4BvBMd13xgNG",
  "key24": "KX5UVc2gFtsZMNvsVMfk6UrRYNNHg3dE6PKi7abPaNGtXoU4m23ANugadwwFsZa7QYxaDs8bHYkp3D9hDTz4Jiy",
  "key25": "51Fg4pHTztcMYvPxiPfbNjmaZCjy5BRYT56FvfcxcyCbAaYmizMNSQmPKGafTnb2gqbUwicMgp6P1XaQtS3wqd89",
  "key26": "5UutFSCDV9EXUGhTna97EcaH7es7CkGfSunsdCzVzE6K67tCNVtYAhnoEmCXKwLB9ePit7DnDkSDsQt6udMe8mBX",
  "key27": "5LWsCVGZ4JxJEYxECFhdCsSz4xHFtK7KN8KwHrBP9N2LAhSpXyEZMSapAHqrhMddbiTkmZjKXkgzwRMK9R3SGVgv",
  "key28": "E7LxYsj4SvLE5qu9HWMaJctjzJYnyttrv2y98iGfwWNYjKBEvxFbMWjv7F7HjP9kSiQBKDQysqzsUVP53y8s874",
  "key29": "451S4mpVRKcKN66NcyzC1PRd7fhqy4sxrD2VTVW1RMegCFRQUTW3Lg3JRH8n6vaAxsyDPNnkwDZurWxNNxcfpf1g",
  "key30": "2dUnS5dPAXeAMkfvbvpDbCnGqHtCUas6F8jcUXPb1DcCyTfXsd75cAAUpZdvMc5mMchQLScp3sEGMkCyvvd7rmcN",
  "key31": "981EVvL7DFpfHJbLXsurefefX5m6enSDJx7qWHsLfambBM7wAPkLGYvDrbr5nXQVfqTWd7tGzsHT8TKQQu6QSgC",
  "key32": "2dqKorUomEoXy8tfvax4XqyxwraHS4uCkQD59EYAS5DYDtDx4Cag3VwRT3pRv4Ddgr8Cf5yAbn13hjZRE1RARpP3",
  "key33": "3DCouVkLo1yrfE3rd7QRDGNTDexLJv3kjtmXQmajiqWHsEpa4TtTsX2VdXbAbTZ4Wb74Gv2yEHgvF517Q7Maaz66",
  "key34": "z2hP39KQ9imEGNW5EjqRMFVW2aCyoCHvzPk929XgxkHU8NrEMQvj16uz2iRszUuQvsf74UKbeu8eDU2EvGGwgWG",
  "key35": "31gYfCgi8sZRGN65fYEQFajGuWKLzMnin7uAhfLaPB5kWatLpshUnyzJosBLBxZqLeqgVeYqjvPrcmzo2E1FmQfp",
  "key36": "4rXmV1E1fFgaQrFJis5eWUt1k6EHy9o56o1b1S15P8ReSZQsPix3S8ZK34cxiBMR8XSrVX1x4sFKU8D2b3CtFdoG",
  "key37": "3GSQyyAVM5WsgJdceP8vP7qPYfqCLbHfMurTjBoRS158MMxnnCwKtp1M7GpjxCgGugThyZHdreF7h3JGcNuo5SKn",
  "key38": "kkBj31J7pptCzzSLxvDehfCsKZLjgUaLRuEq9npQUSoJvbVkPjCTaBvCRxLdvNgQLCvm7HEKoSny5kT9MNo2cWk",
  "key39": "Yo9FtuW1SJmWHqrMzg7LAqFoM9AdBs6w4F41qRMiPUA3MrB7ZqHd3qjPg5piA7sPPSqthNv5xJPHQzaQVhPBNyu"
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
