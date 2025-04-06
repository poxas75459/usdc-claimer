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
    "JKDo7iL9MTsD1f8o7GdTRrAyPBhPwgx9CoRj8gqdCok7p5udmuYwnsTvdvykbrsetptRJC9tnQbdSsn51FnXwPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKjECMCyrPAi87dsZWhyQzpyEjLa4U2LPXR3XZPxHinpxX2FWrYV3s9RCGHzPiAvbWVTaLD4w9gwRiXAu59LcjV",
  "key1": "5BvTBxP4BxwesnpTnJQXGee8BFAWk5Hf69LFTC6ieYwPQ39smZC1SASvK3d62sJW5wrUneLqfQC2PaxQ1i2DUDt2",
  "key2": "2AtTYmt1rmMShfUnSfAYn9yMKcbkqLw2TSHNrRNfJtaX2zYE4V3Nu423rgUsY2Kix3YrXzFPKiMrcr2R6qEXSw83",
  "key3": "282DZZbmBrvj4Lzu5VsVkXBtZteGWaWJ8GohtYoLLAXy8BJFetkHVgY812afPPxu8NM17G6siBsZsvvaSYrEY98x",
  "key4": "4vrf7edDEj17GZFFWR8VxMK3hAhx7D7Kb54F8BZ12EdC8GenjNQCtpgaJb6LeCAN79q24hjyBC57X7ppb4L77q9c",
  "key5": "Wu5amgdfTvKVSf3YY2oZBoGmGx5LFupuh1Ef5EUMWmVBBYaNguaujp6jRwurXV3rJauUnBRcpuUsPS8rs4vRM41",
  "key6": "ZXCcaBhBYzEaEF7HBkBc9vNv4DUsYGih7nv68CQ3i9Xd6nXVLXrQK4KzfgXZtb3za4QNSmWJSHvRCGQbVnyvXBK",
  "key7": "5bMWE4E1ys39DUAaeUpnjyCGVm1erw8VsCdzVo3wF9oGagLWeoVVHy8ppu46szPZt1j3rU2ZToWQFK22YRBhcqSG",
  "key8": "4j6UojFwZrgJTGmhbjjaB7QtVfXBKc1GGWpnyEduXLchBwcLP5oT3toSmf2sq8eFDzthMPmqbeykyPsrGVAsS7JA",
  "key9": "hS155NDQVzyfWMY6bU1mX6iBftDFhWr9JXgucrJRM5GW56ReA1Li7KNhSw9oS4LMJWeHzpx9V9dE9Hqi1MTXbVB",
  "key10": "54CuVs1UV5uWpt6LWmxsWFFemM93EUsd65RebijDVmriwDaripZ9terqzppg52nQyKTkbRmWDwmZNqeQDv2z8pkj",
  "key11": "55ag6A6GfaM9pphie9k2ViPpGNGfu1i1rmnTX52RBKWG5V7pLGDdZoY7QDLVHVF1Zu5Uyagk99UjUFMypHGcDgyM",
  "key12": "2rzAk4AHT6FBTwX4qt5L9S64jLYQkAVLchh5z6hmDxpBTjwmmFmYE2LDdyTKAtVLgr7nXXBoVUUXpaBtfNxp3n6U",
  "key13": "Kid82udpL9wG2aaP8D1VYwUQL8AJfriyYygcBS65T3TNriHNeLP8VkM9JEjFefKaRbpmbmBQdZnu2fHSSj6CE5e",
  "key14": "4RzsDG1WdBVDzHmC5S4S7ABYbMGrXBSthsUyhVRXhr4zV9NpoDNoMNgducDVUwv7wn2HpqDbbdmkN3vxpXJSQLxh",
  "key15": "64VXCD3VrzYw9GTWt3YzKEc2nokvFERyf4T6EXUUZbhRy2EWKBSgdke3FL2EK91eN6YbJm24HjBJizy11mwuytVe",
  "key16": "4mrwYGqByfmkvHpshSJXmiBfsd2hYLhyPKQ3bh4cw34pifXwUvVXsqjeny4VKxemVASRuBqaePgdpfKVjC9jW1mP",
  "key17": "4NbPUKHgH6Epit5Q5et5pvf1UcNSDLCaA8TsmbJUboSzbZqKs9Eq5qCdisMdtWPeDq7ddFfcJhfKd5V3CUXkPHKZ",
  "key18": "5LF8NRcNhNDW9DP6Fhhsgcm3FMHmnGUvZQa4cPWyTsEy5hwwQLtTTiBKhou6wQZNBoEMj4SFv5x9pjRzKf5sW9Je",
  "key19": "4BMFESAUaJQgiDSMUu2utgEyWMNmsHUXzptZN9TE8Tqp792vhsuxPm631c2N9eZzx24mNDArVoTL2TT2A8E8pERr",
  "key20": "5f8bqFjKtWbEgWqgepzt36CgCFsd78xcpN696R6QFgveYb69Ny2rnc9CkSzzguH2ysqGKyDhGa3cZ151U4BxnDcX",
  "key21": "FDeABzxk85Kxf6WUbjdkCsmTZYtrXiQkTptofmKTsUiLpuF8SiYEruwgJwzMjbwUKuoSvVVLUQ7JaJFiHdGRxTC",
  "key22": "5DuNsX1sW5D21b74NEvmiXYgksjGmJ4evi4jmuLsVZmUtLPwigKz5Xxvrw2oJiXkrVpkxktC8wSugKEEA5UmzFsF",
  "key23": "mYrLB1o5tGp3CPCY6Pu6QVdhmDwwE2qg1qzXp4qtPyzUxXjdsutZU5rgDE8G3jqtGZ82wyrh2SR1neY4LiqaWbu",
  "key24": "5cB82wG6aV8hCaA3EoPUdnDvt8wZ7sTJSGk5nxroyswpZPh6g8ziFsfXBRG6qeT8B4YVoZLz5R2rMik4Qw72GWFy",
  "key25": "4BHHfNU8xJgF3NrfVV8hzPWV8FYFR8guhPbJdeBYsC6Z5myGPPBiWrZ5MKvkEPMTEKGutxvshdePRvTcLtttv7QH",
  "key26": "VWLPmZDNGWtoJ9sWwYJFM17zJf3chvNuJpPLFDw7Q4eKDoxKVFmYSA1MqNwsVbkqdu8iSGtRTLBz5nKsAtyUEtQ",
  "key27": "31nc4xbkjTFLxwkd5YHcarzkMLaQUgabMAfGe7t54FLzpopCPtcQE5TCLAkkYsJ5byXjed6F8Apw7npDtdmkwDCQ",
  "key28": "323oKS3LZe7W5CMptEeyUwMXJL2Ep1WzjsFrpyUf4Ubhui6o3VLSidiR6YrHoZf1f2cTemg9d3u4YzXU7VB3Zjt4",
  "key29": "22pjeaLackBn7fEuAdALu3muXNmvU2FHh1E7gYoeLrZjgpUFLHPuiXZFaALfSx68UZETe4U1vkG5fnxsAFqYRxno",
  "key30": "3jH7co3eQa6y4dZtxP1gCMajCwGBCwTifqqHNUa19xENoEH8c9DNYgvrjiBW3Jr57gFSDeprQsYpcUpPghuxsLTw",
  "key31": "4u5RmLmMQfwR9MbcFFBhqozoVbAMwGyRH1HxufxkCfFDT73Zi1rVpfXmANFQu6dBYYMiwoDtQ2S5oH6bhBfscKe9",
  "key32": "tqbW12PW6VqTufUrZDRpoy5hmYpFokWWzvWp9oRga93cEvSYkX6VAUiBGVF184jw4Vtb1zHdCtd5hwWYiEKB3rx",
  "key33": "3v58ksp28Yc5oGByyCN6FBr2mYakNAwPX7gkyvUUNpFtcwwZG8S6Hn2LPeWfuGq28Uqkb2r8mNiskmVMrKN2of9n",
  "key34": "3rHrg3gD2RZSni2JcphCtdxfeaFzHPknrpwmszEe89TVVQtAL7qdVbTF2UQ5ZZon7cdNoh3YvToLQtyba236TpUy",
  "key35": "2BcTXWQEe4qXe22BmnXGncTrz1f7PNobUPanRBicHHUTq25JXH69U27Xi5eUQhugdGAj3UqVDEpYLY5rgJk236Bd",
  "key36": "4PGHGGjGzPfm7yvbAEr47ULKZYnyoZjq4LuLV1BaRfJkPuUP3qYVkY5PDLMktUZbiWmyEP37Y5TrF4CrDrEyGvaU",
  "key37": "nqvnV7CEavDpn5ycEMPszzFRf7s1dRA4DM1Vxj7ovT7xTM84g4Z7eu5CiFt5VTMVc7vM4Kyw87CGBgFzi6yHs5B",
  "key38": "2d3GGRrsqp7byUgEr5VqTbWNqQezGwV4XcSJ57dmtSKGoUFBEvCJAfBQH4DQP2DE3Zkh6gKQFE2XDS6XaSijJntz"
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
