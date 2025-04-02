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
    "bh8b6sdhVfH6HkMLMXLHxdxtjGcmQKFsLY1cqtNbWFm2YxcCgcHZxkcQzhj1vPXwkcyJfWTCQNHMkX5BuT1DoC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TBfSEuzsA45piaJnG3WwPJ2AzenSyCWc1C2TmB97gY4uet8sAuGigaKsA3jpAgchePAg6rg6eYQMq8RursaWB6z",
  "key1": "PHbj1ACyP4BdYKxdCffSMu2Cg6YEL3wvCJSu28fwuGxQxVPtr7zUawgqteaq9A6dn6KL8rWXn31vPXkWHGMHf6L",
  "key2": "EMAZ9SA94PbknACMX1QGLkysVufdGfghc2vyWNkgYRT2frEQoawD8rRH6nBUquLtU8nbrBV9iY4Na2HDEp4bDsg",
  "key3": "3JKwVW9vRpKWqB2T858UTQQdhSaYRLkVC7dhNzqmmqKPnMNsVSdYQw1Z3NW2AAkcCS3Yy6ZpvzSU7tjwbSfzBx4N",
  "key4": "3SvPGfpSJashz1qAcepcvDby3hnTePWzh5vuPwxLxM7rSaFbYe2DaEXVqPTRRVwMPLaRxcCRv3P4wGAF4cVDK24U",
  "key5": "VFVJ5o9rSX7D4AH8V8wSwvK7AbkyqXNdL9gwk2tVfvsycHV4Ax1C8zgnh4msxrDg1UwBHcdKVyhYkK2ovrHqHw1",
  "key6": "5k7CQib23yFfbUr2AWRL5yqo8CFfhW5sHgoMW1c7bhdLoEvS31UYdpExRqZgA1AoRAiH36KXE5K5qvetSZWX3dg3",
  "key7": "2hXSqtCZ2jcomiffmkKZmE1FxFo5nigas5CbroUZbG1QPixr7MAdwnqwHimFRzSLds2dDMYFnQMTa4fYCGSozzxM",
  "key8": "5tc2WGPNU8bwUQkkDxJDRcY2tPBqBjNRZhhVgWLqKCiujiN2L8mcsAvPk2u9ESwxAAxprgMoL1FmVL2aHXH6TpdG",
  "key9": "DgkSPKkD55Vo1GrauKagkkPhrx3DgWRKMCDj1GbopMejaoyjuC3tR1TBgUwoUMJmk1wPMeeGD4q4GEDBcnMqWxo",
  "key10": "3hsBNx3W4GnLxJAk5KKM17fTumjm6WFPkDmV1AKHihJp5BB3pszh1sggteb3JHj1BXxBmK8fbSDXz7YWkNoNegPk",
  "key11": "3MPPamj8YPu45FAnGCDJHJUEzKxzy7qup9swoXtjVyvMuErQzogSVWoWTRiMkTMKQuhRXSjrRzbdxF3ocsXdi2JU",
  "key12": "4c7cKZ3cUhfWaGQtmchJm6DxE3KvwatqiB6EoCTmkUmvybvN85pV8PVVK3cW7kBCzmdU4wboa2ueiCCtmGy4LJsX",
  "key13": "pFxhoZfESmLVJXZRqk4BJCf9WAUP8AwtBFr9dxjv3kNmfjyTZaj5KDXt35uaPgKm2KkCEcwPvSDKb1At98pgWYm",
  "key14": "62HrCQG3Rv1WNSm2xsVmkW7UegLjdTpd188E224Xef93aJ93ssLfkp7YSVv9UfekCxgfXo4AnJubMFewEhKScxkR",
  "key15": "4q64hzpi5vAjuvJ6nggTYtGzFs5TpXjzr6if93LZu8SMdGek7a26QYahfiypDD8wTLs8Ny5YuN9BKXVp8EoR3aaw",
  "key16": "5BDu6XNcvsjATNgFaqceX6oMo45VE8ZYceKVgpsKGyVSWwGvxVCA6gvau259b9bgx2UhSxu1sYAGz5Zp3w8rmzSd",
  "key17": "4mWb8KqDVAAVJT4TTJipaFkuFX296hu62rPoRJq3xaUavKJ2DcQ9WZBB5Xfv7RndQweqVqqCUMKZEKWz6XRJqKAF",
  "key18": "3oBXXxXCXDfkjvDkmYWnni9qokSTcux5V8ueX1CdUbTM5b4WEF8xoc3AT9T7Uh5wYBiEfDoCd3Fop63aQLu2yJxJ",
  "key19": "4niiHgaiwKJ3N16aVdzyKJ6NKpwQuXwsyWSwSr9P25etwGniDiTpmfsaV8RnTmgWedBWRtZoURSsaXzARr57NHsE",
  "key20": "v3vTmSAf7tTt5Jac3Lu19CXxWJPCd4hhJGdyNa98wrKgLxaVSNLNuW8SxCKco3GrST7PMPFLahnCf41XtNxbgJe",
  "key21": "5bRaJShQ3qqNLMCVixQJfhkWty4wdCvoQ4JUjbjg2Rc59EVckZcqAj81qywY31PGeicHZr8AcJhrFGUdHdMckmuK",
  "key22": "5Jz6mNZVdKqm89ND9UPwWq8qnPQ9hKKfAitTRGZpZzznujUu63znciqYqrQcMp5B6iqMrN8v1dHmgsfTLUZfAk6B",
  "key23": "3tzTjRG5nJAvGBNea5Guv8LecmxDsyQGFEoC4MJRLwyW1sQ9KAKdcVrzAiGoGcFKYQJte6gKnPArPRKtCbsE7rNi",
  "key24": "vmFac63hZU7NwANivN4wz5zhBH46YDTr8YLx2Lw1NnFxhjtnu26pGipHL7H1YjTFAjsCrC5fC3K8qrqE89ppAiV",
  "key25": "2hR7iJ4ocaL5EdfdUzFNqAXyLQNYFh8XCM3HBxBBf2wYLt7uwBDXWuu9gGBEgZcjDN6SjfNMW5Q9xbZz5Bvnb7aU",
  "key26": "5WGZjrDxkmShRAaV3ccgkZTdxvLARV9UtoLXqKZHKwGn2q3EkcjGQoiNUjsTnez5BkG8Tz3D26YqEgAUSaV9B65J",
  "key27": "3KC1idiaxrGjeoVU52ZgFW1kJWxKPNZqtpRFn7UKkMRHwCjJsNdWsDF6SXiRZpWMMBtxxm1ocJxrefeChhixtff2",
  "key28": "43S4M8UxreGmfp5tY9FMV9hCWHdNuYFQeS7tAZWrVGWqvC7W3EYoaeNYxPBmpxYqKocncrHZ13DfcJgxkaPBiAQ",
  "key29": "58gGtdRnL2QJyf7yFFoTCEnoivgbcY4Mye41PNK8MNN7z8jCL36b9V3mVCQvhYLQqpxXiAYe8GRMZ5C95ExUHTFe",
  "key30": "62DUZ6G4waTKJvxeeHTsoG7iY2YP7FPg1BeYCtVhhEeqD4V5ooR3Z6GTUWCp5Sa8988igfcQABqqytCoahdbrtzH",
  "key31": "HWC3q3FdQpadTyUfzjC2AwBD1TjCmQummN32teHX4EuRE53VB5ARdAZqbgPyRvXCGnnFB3PVPKQyASh9Rv8p6Gy",
  "key32": "4zp52gwYxoEjSYZqSgadLmmBhvqmb2RJE6ctD84mVm9jGUuUAoE1Zk56pgixu4XBryRW4FaLRKbdWmfCUcLhn2rv",
  "key33": "2KidxuLtbjCzbsdAznnAMJimPHbyRmqXtAdzoqZ97w5hs34HBcUxEVPUXQnZ3G182wiTaGAWA1jdSoRgEX2zDpAM",
  "key34": "3haEsDj8j2Z8HAwva1iceA8ABzVkKD4haeiGtctezrfKxU9t6LTFxTBqHxPj9Ttz41wiGvFxZA1rovqqPA8Za52t"
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
