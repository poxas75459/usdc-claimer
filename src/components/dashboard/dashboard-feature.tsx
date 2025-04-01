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
    "2SeMZbBkbxx3oA9F3CUkmpsuLrtxmL6aW9KcQx3QHzYjmAjj3vuML7H7x4qw2VMWNf2FZPPG2phSBpFNeARYnWFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ekGimRK2rj6dAkiGnSsZNTmwSejSVrwpTLz2sbEj3rVmU68M4cTNgPiguuFgraQD5MPhiYLiDsQ7TFJA7JUGEWK",
  "key1": "2FTfftp9thxLsMGjU9bNiXq6taShgjcDx4xxAaJEruGCvebc4bspAuAXua2MEQ479nZu1yNUr4bPQj8pkQLo2aDV",
  "key2": "2PKbciQ2ntrELTEWaRB2yMySZd9bfSZshSoMSoc25EuuTKF1Dv81oRZgiS4LwAK9rbHcxmwhyTLq14ALQeYG5MHv",
  "key3": "5ZUmqTygNLj23aw6TMdUU4rcqJgGvESBuUk1feTSovqxUkoxBHxXCkGH6YQUmNSTTApJ345qaDsYooakcXQPNipF",
  "key4": "GNyMq1vNPDanc3oKDu7jJgTePpazTAasY1UUQZ2BoSAorDggfUQM2hcTjVv6bwxD3JvJAEDMpcJ9BgRyhShYDNy",
  "key5": "4CXxS6EYNKsT2MqV3M4rxWMdW1qoMd58JnGqFjE4FzJ4cRXkfoRr7CgejP3Fz484bVoBppQiLGBUQYpFbKJUnfTH",
  "key6": "2KdxPAR9qwEso4whMSBPezFf6KcRezJ1GB2EDTPpM98wpBTZCU6XLmhiRRMmyQanHWWg1XfoZgGvVX8QvbHYYGaS",
  "key7": "4zmTiYNbFc5HCXHepJ7Fac94sfcsG6vwkUEQLSqavQcxZXNghMYXeAaqtCZV8iFPAMAsFT8JXypvVFy1b55YVQY3",
  "key8": "3vKQedEG1aSWKQSPesTqH5qExe5DAWEMgQutMjhYcN6UZuxcwEJSQ33Y8QJ4TkGN59yW1vxyNYP4kqXbB2y7DHWj",
  "key9": "2V6xtYkSj95xWa76ybwziUN6coBCdQz5zWHM4sWohi6NScBTYPfxSGWWG2LfonGFP9wZB9AXRV63dhXtjoPYe4MF",
  "key10": "5Astse5cjo7mvUDbkjVTQ55SVZEssbpTdVXE3WaWu66nhv6h7QWBMtQUkQS78hwgAUY2v4nFZaWc28wua3LymWdH",
  "key11": "2RQUfJoMWhdwKNvJYTi4rfWwMMo9PyiHgR9XDxd3NMh4LqaU4azM1HaiDyauwW1vfdEwjdAHnB2XzxmmdTHHdr2w",
  "key12": "5DXyZLNfuGHZSFgGwygq9xkgrY3QE5RNrUi6M2amDwTNbWes5sZbdwGUuAyeianevCPDrbVnDc8ew8vfEb5AD5qy",
  "key13": "DhUJhMPRJKDMm58MxxVeirnfkVWNqpjP9bcwP4GZj7pLDwWDXXDr7XxAcnCAA64jGzcuDgoR3uXqrQKk8Mz8bRF",
  "key14": "5qfY5xoeBayqPG9F665UwFRPwZBQEy2k2ko5ybVVKd5WuFZvHU8kCMUL6krA1grUQ3DXsWu3X6mfffevmG4fCYpn",
  "key15": "2NhE1dyCVXzb28RpZVqvNTzRgBcqzVRuGRu6NkawCU1zg8RmePdagAEYC67uTfTN6Gn9MfMN53MYiqm6vrjQkeSn",
  "key16": "53AnBuSGSSZNX9vjW1Hm7hE8yir9pvj8etJM66GVvuEuuLpUWQGLEmvvrwooPdgdsSRMFKhy4Qq9qFccUd1YDosV",
  "key17": "33fRC2DqXbbzgsYUTgHFnDcF3ncFPXisvFJZTosQ2AAWbyybQSH1SpEPqM1rL6mbWEM6Sft8USwxHx5RjoBcVqum",
  "key18": "429wGVQDcFiJNroezSUPx4yRNiPa556tiU7MeY87cmAhHVXRhc63q53UnnnpF5SwFwhuZp98L8VhaDqYLKxa2CNF",
  "key19": "3F3T5f1Eggyq7YuXVCZYYchGDqpVwnnUPYSy1b8gZyKLXiABSYB4GDFm1RMr1HWj2kwh7vUFMqDifCXtexsTPCxe",
  "key20": "2naawGXJBW7jh8HDg1kwnGG1quQCykoi5Lfa2XWUXcraqYbsJ5RYdTRibC1cKeDokwgrTh55g1eqvnk4E3GVGz2S",
  "key21": "47gsDueWLbYmVseAKwNLQfMm2Cfsp5K2CeS1tfPyJAD4BKUAcwowAzjg4ysQ1iQFABmMNiEz94JFgV196ZHnAdG3",
  "key22": "4y3ENbJieK83BcHBN7MxBU3GPxLMw6g7sbRgsgX1KJetDYwQNAGMaMUyiUDNQ7iAFT9Q7noo8LTLcyb6Ctc6ZdF",
  "key23": "4kDhFkb5b7fXmBkSgRAd4QNt6w1xdD4zq2byksJqodmLbMSKy9kua13ABADdUzoccQo4Ux4s49EpFc661n3rYK9R",
  "key24": "5oZET8z72E6B6Jf78rXi793fNYwXXAePoFfSe5LLPemRgLW932sWHbKEd15kxL4AGVvpqhWfXha9itb6uXJZ1eDD",
  "key25": "2w5PzQbJquJ5iihS8UqgTNqUWfEtmbt8vwkStH5aRAcZm9GWXhiJd8zqvSFh5uUMUyAvL8CHbxC6Si5bareKSFAw",
  "key26": "4t7h71noJksprQFCbmPxsiEsDFTHRnEsriGBMUhcL6fjmjhuB9MHTYd24J5bJinksHZi4b1uDCcFmuvL2DaTCipQ",
  "key27": "5rrvCbuUQLLR4RDPJXqRw7C9MUt2gF4bjg6imyq3eKiexx3B3Hnp6UcXBXzFSka3Fj3QL5VPrjGNbRBMxcX9PUbQ",
  "key28": "SN2pLRMgWuzdt6eFbUKhua5HpaBuEDMhm7o9TEqFE4KpKCR5kieZ6nq275uiKXakupJxBUxcNyWvjVsqwjW8pkt",
  "key29": "3phKqX2aguexdp5rH2TnpQbb4P1Gpq7qr9xLVBM5Y8bb7mJ4hiscrZ6VDAbiaYARiPwMVJBicxRrBvtmCDGA1k8W",
  "key30": "4wVhbrZpmsuQAejRXRkC9Ew6jRnvumztXYcdznRtRkLdcEDaVbd6rnUpd5xr82xTosvqbv5MmoiGvboXMgYUMkDK",
  "key31": "5VfCCqgvDio7GJAxpKQo9FE1cv1AZVSXNKm1Sb2QvQWFAJT6W7K2o4T4tHF93p4bCJmHQdT8Qs9b2RDokQTV1sBE",
  "key32": "2v4b7h3mFnPHRuWGnMWrZ8C1wenquKUCeLdxb4nTNJqKinTGeseRjnzRzCDJ2ADBYD3u1SXWaeKqVeezfSUsmUY2",
  "key33": "2jCNF4TjQzd6KBYSA5jSdFVcVwRVrt5VjnuvHZYj3NNi9w3aiZ8fQ9rXCJQnEjZ3RQJqgE5Q1EBmLt33SV135xyL",
  "key34": "2wEeayEXtREeDwsQQrSoCSsGTwCtx8Jnb8FRHBbN9BZo4qGDwXWH3Fh2PaQ9aEBN8gJiDk1o2DEKjDk9q8UHWnZg",
  "key35": "N6MGA5AMiiL6BU3ybS3AzYSubSsu9dv7K1utg9tAk1Rsmt8SfYY1PpbFsZ7Ur6XvuGqf654XjZqdEoYSqjxdcJB",
  "key36": "5RNu2tcegQDrzoZMpMVgPtiGw2Z4UU64ZuXpTMzZp41xaQxuhd8znptL7F3GtG3ry6qv74USJhkN3gSterGmJRSu",
  "key37": "2JG2PXgCEe9yQvKLhawBwo57RLHRvhQAAmiHcuc6VtnEwEfodG3MqxZiHkyP6XMjLauMLwEb779puh2FJnh91hYC",
  "key38": "3X5BBEz7of2DGKWmePLuvhtApss9ECgo2G52ULMV4PHF4DrqBTtp61fzQ2BoDnXSL9HuhgZmcQRP5BuohHdhuSKq",
  "key39": "3rf5pYya7iDi22KPk29p4xSg8RRdcyBiLBGas93fS8SHu9epj9C9zU7eHVz3QabFfeuyHEhxCeBJJM5D46cpY1hy",
  "key40": "TbLGdnSRHeE3uJFUaPf2z8P5NsKnwWqY7Ae5RSpzjhS8RZvJduo5yoj1rJ55yoeQ9bb6iESHfNrnBDBNvPuxfZX",
  "key41": "33eReoFbGe9pcNf3Kuixtm3PMA6iBeM2katq78mHLhVKt2qECR1mvfzRou4h6mhMaQwYwoMdGi88u2TSi8eTc6XD",
  "key42": "3TzxxYgnwmN1YivK8MwunxYb1u5SMtHiaMtxJNwbVMP4Dhf9yi5vtFPNgD5etLVywPvGSPJFJiiARWWLouEaw1tS",
  "key43": "meArNuwR8U2baDGu2YNT769pErt3UpLEU9fhpc1FTcDkgVxTK9N9coJ7jDwRLeX68ANJcpKz9NHH4TrnzaWtevr"
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
