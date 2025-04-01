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
    "23VwpNmnbtNjEd1XNUeGDsQh1PZ3VmN7pfo8bJiZPCwbJo3irKKf1vy8JuKsTzEUANFw5uVtZGMzzxfKmNiHjk14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ju7NgkAQQC2k4QjYNC69HqnggSBHGa8XsfxxcYiCKgAvfuYrbr3pDYURQKsQDLoA6TJdiih54R8YBCZ14JkZcKN",
  "key1": "61vZACNRaXfzSgfNaRy2WrmQV7ZkhK91Q6hHgG8w7vUTZrF6B1JUKUXsx844VUgycGUidRjFv619W6MUtJwJ8YVf",
  "key2": "4dUYkac2XgH9FbKCMMjVQhjNBnbUF5oSe6vGAJ9VP14cixdu7xrqXPH1hwavEdi9DXNTFwtARLyK2V9yLuecnxpg",
  "key3": "2Ndxu9hgKYhJNZEWsY96CsWabYk3S6qiRdnwSaVJQS75PES8rNZWtoe7cVSpU4EVJW42kUrUVnvpb3HiTBsnkkUZ",
  "key4": "35De1hHVekhMR2GEqzkqrVAriZkHczhNwHAZ2XX9wguW2TEKQQsGBwt4a1qusf47qRzPbmenBmzw6XS5DHMDVVzs",
  "key5": "52Au26AuWNsdpwtsXNjSjbX9CVJgm2CCsKsJkMGEhLAhxgADGSziA58gDkkamkQf7kc1Wam7z2WQsRs5AGmC31YM",
  "key6": "LAbAoV2po3xECbhBjJ2wdAvnv15dsL6eLHDAcb1SgvZpWPFCu8SG8piEx9hzN4QDYW8NcUBbjmsMszQBq9dR1mx",
  "key7": "4Y7zbBWmiWULhvuyxZtZLneo5r8peqSCqzPT2Fapin3YqKz1iiN8NVFLhrSrhfDJNWKrjLfu9E54tmVka4hNfVwQ",
  "key8": "JT2fUrwzRxBR9G6Cij5TNDfjiFZeoaQUPbD1Ywr7Mopq3ALe2Qxj8JFWGjaSvnYXG8QN6oWiGRtEXyQCuU2PV5B",
  "key9": "4bhFEjUHstWwaKQ9n9ZxczvUKMwrnMAy3tCu84CL8rVHc8M3QTkAmGZJaN9LtSCZpPhS3jZXD1yMUUAswfLjnprt",
  "key10": "5nMHAUX68kDGMosvmKhh6yg4rrpFTPHcTxNPqm3TX2f4Sc8sab2417iBxxt7KBdFKpi9GEDVbjZb2fsfGFsyqLuG",
  "key11": "2KLkq6oPv7gWZ9u6ydN1c9YTU2q2XPWzMJ8aSHgvdUrrNuk9KU3kmbKKKaSjAXyH21NRBU9swUryTsGGAnCz9QoV",
  "key12": "3NfwNE9M3Wi1oeH4Yj2QsXeoV46hXScfULPaC7vRW9ne3UDTRLrg8sKPRoFjBj1JB2RJZh9unhWMeuPk6AiNfcB4",
  "key13": "4ZatttMKSeeW13WXV11k6zJcL15ZoAYqi9khnMRaBmJ3bHsCtrShjc5UMSyjoq35KzMcTgxybM6fbhJAqcAfKEiW",
  "key14": "3X7PeEscTD9XZoqdgi87bzumxsKdPVEqaj1B2QHQDcMgGKnwjjsN3aFfRd9vMpusdbZ8SrajE6XXtfoFmurQDLZy",
  "key15": "qLx8qnQ8Y1ovWYuWXs5LJDci3YpPiJZnjbpxubW3J2Eqkdfm5HQwyXjT6Lp5ChMMWWFPH9JA1r3zWWuSQ2R6bvR",
  "key16": "4JaDRZeqoUpFwN4muzNZi2yK6hhzjS2DXtHdBaokXXU8zeNmMZKZfjvvFQb2zEETu18ahaEvaS1aB5AFgzexz1K6",
  "key17": "5VAD5q97RB1MmgW4oMZVr8UWDvcjHx4ajKw3v4WaYNKnkXP7r4LwPdgQLS8fD21ZwQoo1s1Lse2xKRvFwsWtNEh7",
  "key18": "jmRcPTDaf2pMUn3Xvca9EN4iZ6anH7fmdoazSPJC3cET8VvtPpyMmVCcmoYPV6c3QTQivQr2FhYGoB48wTsgo4q",
  "key19": "4mFtfX6iSY1jH5zhUpaa3NsDSWzZVwgs87Vm41bhK4xT7SEpxXEyvfbFmLFwVz5UeBYaUfh6m3MiH4Upx6Q93Fq4",
  "key20": "3JegH6cS1mRNGXFauTueH9nmfCwL1aagHHYcbHbbLxeyCnTXcXJA2pVRuv9dUb5jgGJ17j8aLjUpD1GcvNcXUCWz",
  "key21": "kRNEyiT1Kay6mRnhZkPaEtisXrG32fPm4toGJWyZj9YjZkDaJDNEvk9iQ3TvNFSX9upwJgjRvspS5zFmzcifyNT",
  "key22": "5Gv1UPdoXCgxngStc5TZ3zzMJcgzsTkg52uo7E44Hhb6RDoYfJePfhiNfkSecVddLgAhA74BaL7foAiCSVhuzfVB",
  "key23": "ZWVpC5ypL7AbMZeAnen8iRUvGZq5fCwU2QwjY61tKMNtf8FhCkUBnXMTyGqKLbAnEGVay6BCoL2PZ9rL3k5m6yk",
  "key24": "5qkaX5XXCNt3oRW1xkgNEvPxahSZoWoDZ8r7KrAbZ3GW6Qc7KrJ3WcHYa65dR4HaPdCkQMrNSgS1AGys2F66EPvM",
  "key25": "y1iueXeBXKUNy33zFEtfhkWPwMY7EPPcsngK5gHdWryh5nruL5nbPC1QGKunCWpcpP6dMFBBrXPhfSeHeofpz75",
  "key26": "33Xm53RjkdPa9JrKB3otcDTYccxKhQQ8WbV8nEt83ACG4jbJ5NTkcyekGT7VpXFBbrearKeWHgSxgawGaaR1kAfp",
  "key27": "3f33z82ZZjAGJQWim2NihE8M8M7PRSTLMcG5rhNuhc5Gs85AcBLQkMNnG6YsYyy3tDrDEyWgkDXwxfkFUuHrZprJ",
  "key28": "W7ajrHRjnDUPv7VwLyTe27ENF45g6DBLdHx5bRpTN5osSfZEgLjgNyWtUXqrkNwFFzkYUXDAwLCUqQEu41uJp6E",
  "key29": "2i4havP6aPrTWWNnTd5aXx6zz33txUdg7AbWcYsgjoCPtoFkUEBkPdgpS2jiBx3c7zeQ5sszaZJiXgdsUub3DhWQ",
  "key30": "4dH3BgzaY677JczgFkpikxdQYMzLsQZgjTxN93EqQVmR28WqMFqanQk6Cjcbii3fYVcwpJV9AS94JsKCCaCMAD6t",
  "key31": "2ddoriYUJdyht2pBCpMK4tZBgsxXU1M58U2Nb8fuetYHwmUNbjymRgC9RmNP4gyefHpV3rfQ2koyeVEuzmBosu6H",
  "key32": "4kUEvfB9zTkvg7DMpAXZcLc9H5EbwDNehr6e8DiqMt5zeibhgbZcDo2E2ogzvAE8eo8r2gw3cKvYx7iyPUSj541y",
  "key33": "52xRtpKrChfmNDhYgdhQBwiXXb29kSFJEDfgYuo7WafCJdMDzYX9Dh6y96qJeibhr8qsmuE386JX8a6jLXe4px1j",
  "key34": "5nGRREWy6jwWPNdyiUseCbP88SW3deQvRMwVLJL3vv3voVQdvpkBRjceghSHA2etcZYFps9MacgFSbkXBxVNFbEP",
  "key35": "4yE5q962SNu9uDruzdomAUfEG4rbxaKmP1SwcJW68PUb4oRN73zbgaXCmPCB2kDWsY1APKjGZbjsqDZ8RSCfPdGS",
  "key36": "4Xmmov3bD7JcVmEZgnr7c1yihTpNqfLUFCijDQqUcQroALDqpk5SQf18KHke77gb3cHBuWbBhBMYrpFSkLEpuZe9",
  "key37": "2hwon1gUBvhBwGiJGeawMuSVyeWzratovoKahywJoChxUPSuvDuYZDTEYmN3JAYgSJHDVcQiyA2Wjvpe3GzmdynU",
  "key38": "3hWi2oHYgD3MzLXRy8TSd7bENpMwV16Wx118WHyePa1dk12GL8QBeoj49Hws6q3NiAvQCYAmgJCp3RymXn7gdj9A",
  "key39": "3rtChqQRntp3gboUTfjrUMinc2XfT4DvUViv9wa3ZHWQiSwiVEPX9cCYizcDUwJqAypU3w9C2vqGx5ey7dtc3NTH",
  "key40": "3pzEG1JdzVmejs7a4ZXLpZyqLuS74xuS81y6kUh7QDbLAPWyuTPWqxRepK8FZ1Z2y6PyebiL7njRqjjrHrcsyLJT"
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
