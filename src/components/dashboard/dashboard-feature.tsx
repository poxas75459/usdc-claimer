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
    "4JGyPPAqX5HKfFySoE9ub4ihSpBL3S2cwcJrtaoFFMiQp4ruATxMk2LHMUc3bMHJ1sugkuLpeZEjPohija1NJvQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s3gzx1FnJ66vLdCVGtJ4fPLagnm2nevoAs4Fv1gFKacaFMFB2FgohdFjbyn2UWtUppyefqCY1KeCpUriG1cmwim",
  "key1": "8pfy6fSkNx9CSZdEBSn6BPu9rVN4uXMNV8o3inAFC9gsKQieMDm7BUPKPfnS1hum38tc59918Y4S4R6RQqp7BXc",
  "key2": "5rKhrbushAxLGoDwTqfsE4WMDQF3KpE7KPpBidU9kqBDwWvUitJ9JWhZbnTZWX9ZrDWWMtoJv5rFU8khEBmQuvnC",
  "key3": "5bsYADpbihgjPRmcnAgodKM2GYjz23TiewbaMgwbMgSfGH93ShDmLgknuMjQrWdiXMeXrQuQrPVUvEvosyp7DSdD",
  "key4": "GM4SVHVTXZKNY6962on6USuc5StnhgbvaMK7baaeUahkZehVcHYm5p2pDHnEaxvPmZPgKtUqNT4iDbYihWpgvn5",
  "key5": "5ya1dnm93J8WjbhL1gznZPfFpKuNErkEXRpGWg9TabjyLcwj88AdNjuDWTR5fzqGezJZP5YDTHZDXVT6pj6c7CGe",
  "key6": "2y9i3SQRwXQhXZXXvfMv9NBS5LLzHWLTn8FyHoodkmTmS3mh14uQbYc6BXkwVsib3JKfqz8jppuGCE5t64paDW9q",
  "key7": "iv2gpvjQEUdsrHvsM1r2mGmEv7dodoxvFpW8Y8EvahunbJtXUrbbh3or486cJthRayxK71f8JSnSrzuvKttd8Rn",
  "key8": "2Qyi37mUiSoHqwJKuThfzxiWM7GnkV3x7uZfxfykkd4fdEMgUVhgpvmHaDGG26SK9ZdiQVDw8EzN1eqHENUj6thN",
  "key9": "3vDpkTeTn1ktdmebgi8TQLJR42kD39eVbn1vsNRkBMZ4RSHGduWJJWMnPjZnfNyMn1eEQJjXRP9mX7GU8tZo3S3z",
  "key10": "idtSe1d7n77ofP6ktEwPKL1MxVXzxrXtXXEDZAvKt6B4EbrtWcjoHeqzr4ZcoLxzHx4SxmNUiNY4qy4XGUaPeMz",
  "key11": "5RZ7we994iNq7crwfj4r1vucxMzkmk5Mdgyx36Nkjc5dyurascsuq4wNNthFMNtuPtNkiS79EVV4SSSarVw28GoX",
  "key12": "586f2vtPYvGaTZYvHdLoFdpQ4n5iC2krfJmEfGPwLAvB5wLKEDiTGz6DDiEwyqfGkGzthiSwJC42dsAZhgq4tXha",
  "key13": "2DAr2qDAQGr1iJudsFmkEggvxzTzcGnsaotzc3KhdxYzTEWjbHbFJ7FnnvzGd4VVzRrF2Bv2PV41mawhdZ9iY5Dg",
  "key14": "2Zj4MxCZDGkybVQRUj6aoYpyVkMwYvH8Ezc7DRT9BctMX7KKgB7DCHx6qvPtvVC7kRB42adY9CSV4ZKbLhCUK9Hp",
  "key15": "Zez66f29Gp47JMmvEeg4HBVx2u3wiuvKEW7G39AtbV9DbpMdZjyWhofx1kHDqBsCNk2VwhioZu13t4pPYSC2gmY",
  "key16": "321D1nodSuPj3vsyWUeRaRDPYxQA72JFswXgmEQz8noh8FhynoXbmnRz18C65svAzKiNcqkLitMkwDPogN2mipkt",
  "key17": "ngjeiRt1mN86CBYezJuf6mt5E1jRy7NfgsCd9df1KpjmSdrRDL6afZNvi36uyJknqGi6EBhwRprbFaMe6y48dcT",
  "key18": "4eXxH6apqr3stH1HKKxuNefrW8WaAJAWXvnU4TsAxz2orknyRbpo2QHegXNCbEyF2qjDPzEU6siCX3BQJLJYvess",
  "key19": "5oBhVvJXxFzCt1nVxJXSNpDPbAQamrP3eEFF4TstTABsnd9kB5bGuZFDWA5eYXhpr28h9AGTnfr73geQtqrWBLmU",
  "key20": "44k78on8pqvAfyC4J31D3RnsKyh9ckPDA1gdBDNZ6yz8Y5QQHMWd55xaaqV8Si34o9jjTDd8oh8TxaQYtP2MD9ui",
  "key21": "37iLzh4eypzemoaR2iEvzjonBC3XYBpPyVHA4qcFHj3TMJAuUR2zdLMn8prJ2v6ND4bT3rycEM543H8kPApSd2yn",
  "key22": "MLkmFFqGZL6Q8X38N9t3WbPEiSpT7YHzwCbRFAEs9BfDiFfKpdAPyRtMjpTnSgdGURJeL8medTEvUhn7kJNsoL7",
  "key23": "4za6SohJvULaz1GSYx8cZgyZLofWJzJxywYKKqovWg497NFdMtY24c2W6LYo7mmAqeLTUEmDcfJVmZsb6pg3iCuM",
  "key24": "34WPFE5YSvJ9w8rBM8PZmRpev4s9msY5f8Bjj5PrpCuPAFdetosCJvxqb9UutRdCedyHPpSpWgiV7wqPWahE25nS",
  "key25": "5wquZBZGC37YFzLvDp3tiH3a8tuk7LBqSJCjJJN56MwPQKKrWzYbDuNzEnyUV9wVYeHgHCWuwcDEpcPmYVyfbSo4",
  "key26": "3KaJajmmxCSe96gaYN7FBJUp5frZKHSVaTuUQ82ikGgvjKA7bdujYKz37H8umygzw91TBZwcBomSYtp2tGbRU4ij",
  "key27": "5FEt7bFtx1kSYhtuQRiV5euEXqs7hC781X98bXDRDybJ3fgUYNmbGBQyggX85dt1BkfRjugJR7J6UATNkYH9Ex4N",
  "key28": "3a4ZDdmb42RQjdYJTTnaw8wZv177W5tBSrSMdkqBpT7Ae2MZ2myiwjw4L9XEsrno9cn7Dp5D8Bc4jhadNebuFv2",
  "key29": "5PSGkWKX2aPorrdkFuRPsAmrFmLPZr7JWe9yF8u6mmxmc4DEyRCDoXsZ47Rva55mneKzpuj8GVWkqceioQW4Hm3p",
  "key30": "5eN4vWJPAUbBrFTBSsJ45p2nhXLMKLpCCFKV5oGWBXpXrGNuC9uCi87AQLpZnpE7qCj8P5yL1fkk5s41e9XVBmQ6",
  "key31": "3ntMFSYZ85yQJCAQBoYqQj8PQfuSUwhBePHQVn7eW5v4uAhNXiUNYihZT9gNkQJ8zgW9LXLE97KwYxGjQEob4Z7p",
  "key32": "5c8zBayNQsZ4ofR1J2P1XnniLssqWciyrMSCdG6oZxSFBZ8oZu2jfu4Ap52Z1SLrSrUCFFpuPmcuHjUnfP6tGKEK",
  "key33": "5nC4fnK8ewMaWGz2RrWQnhNtXFHZvrE7ornradEL11XRzfGbzhn8ouLXUuKyCe9dRTTeTkiBx6ugUjYaGk5VRb7L",
  "key34": "jdogEV6fNq33U6gKSxQQdku6TzNi1Lj6CxTpgp16FQVMWajNBqnUNzFH3tszoyNr6MM5fdofU6bYxQDyiymKPuQ",
  "key35": "4V9NvCQh4xHUJwjkRsK1XuP8SRDVpk5pfSRgQKuSNWUKcqHz35igiDfrTuF98Cws82uuMv8APbMNmntSp8wmGCnp",
  "key36": "5zGyXh8W22uE7YCxxkzb5ckDBjZ9JehBdMDgxLQgSoGr1jpy4V7rt48Kg9vU5wGf2iYFNFC4DnG4WUQtbgSLZU29",
  "key37": "3j9PZSvoyaevDBLMwEERS7ceqw4d1oMsfQmzPezpeWf2xGMQB8cLdkB94mWPLUAJbmQhADVomxKhbSyMpnLuhUBt",
  "key38": "2Q8AXCTBqAPKDqZyWnt4Tyfz7nzcTh5tsPpViEoyrXoo8Q6FjyeEotVvGxAyEsDodXMHiStVzhTUv9SCB5QGnnXP",
  "key39": "3ztbpFNumHnYX8tj1h3EZkkEVu9mbzHTCpiVFWHvkKnWbV19tsQJYJtRT3jq12543TBMP2Hcu876XcUpHV9mThg9",
  "key40": "3UhudfZaBYHWdYPxEhXSfpK1rBkwt4SHJKWTM8Bc8872uqmi3Vm1RXJG4t9EbHfYmv1M4JYsJi7d4xFrH9nXkJ4N",
  "key41": "2L2feDyMyyX3qb4MtkX5PS6E7nK471VbEVdH5Bm2ehnD7Lf3rMhT7agSUE9E7acRNuvKUepbh64tjKHxbBfSph2L",
  "key42": "2m9AfVMTB15HroeCeqVSw5vYUA7mRuUszdWrSJeKAV9mrmQGMcdwW6wD5rkXq3MZUoo1QyC2Yq2UDEQGTdgzYyAa",
  "key43": "5y6Rn4C4pEdsiLdtKdmuPi7WGsuWvgqVdFvpEi5DVBNo2pDSFdBdiHEP5cwrpVotHBweGk1g54Rd5aih997N6mFA",
  "key44": "4wWLegX1XXeex23dU5NGp3VLMyjSogc9jmtXqgu7gFib5h8cmT3Nt7zZfbsqVmvvbhWFYfJnWXtCKuzeSTGAy6Nu",
  "key45": "61oJ53SzECbMhUKYmtfvYyL62ZqfhiELuBBvSNUtBy5DXTvUo16E6GG5GpzbQ6vs8RB5kux9mLztw9t46dNpj9ed"
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
