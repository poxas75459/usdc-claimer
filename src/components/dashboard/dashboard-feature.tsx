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
    "oKT8U5Cfv15pPJtZo14X4G1r4dchBT2w9iJRJMc6M3yG2Azqy8FTggPaZd5S694NAdEg3bABc7eK1MSEU9ARYfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E6H6L27gkGBsKipBCZPkZcaJKsGXH8wseBt8BC5y91QpucFZhyn5Lb7LnaPRKG5v6s59HQMZdFbBjCZEMBtDQtU",
  "key1": "2kjDEEtrKEUdpUn2Qkoe5HisJnigd5tASfybhrGR7WmpUZtWhCto7Qprg8wCnZiFGMDo2jGeAA5ihKv9eXc6UXcz",
  "key2": "63Zc7S76A5bNczzHRQH1VcH2HyyNpS8wewyvvDSfJoVWY6KSLQXku3nhwX3y7Ae7QDebVYcn4CH8UqsYd9kooVtr",
  "key3": "yzmTMKRwfCGFLMKbL2FhB8tKSHi4ueftNVpT7kVWH9TuvtrEwvTSTaVm5pabgTtL42i65PGZQDncYNuFBfnbB52",
  "key4": "271P7Fihe5QzVEiHjo7BJCWjZTPHXfgC851zRhMSQfWDUt9Y56JF7drFNZBKH3LkoJbPD1yXSqNknCMsavJFDfFd",
  "key5": "5Tg2DGGzT3EhjPgCCWcmM5dE5RKgnbCG3PsHpCqufB7bB4BDWp7ZEfanXb9pFNcNs4fL55F1h2aF2xznUAmt2rXb",
  "key6": "2XikBEo4eVrbGtthzbChxJpR9h3dnQxai18ZGnjyirbXPXKz9z2xLvNrG7RCnogZR53G2Ec2wCgLxUNnwkBkQrRD",
  "key7": "we5GGJ7MN4tyS6LNbRSPHF4k7KQh9gJ7oEd7GEN6dDQKAH1GFVsuYRUqSFeqqchL9Bt2WasW7LNFaTPS5rq6vh8",
  "key8": "x3g189bpHWbbVztqR81GzUCkeChvCoUEF6vVQaz47EL5m4LBkJC3jx25uT64UGZi47RDUWEsbHtUFAUHtZqXxqg",
  "key9": "8trKcWgfcdTon8fatdYRDjERwJM7u4YWaAB7xGuArXMAGUk79mwxVcY3WNeM5XAkqcBy1nnmVgpvRYy4TNYp2K7",
  "key10": "5SZbKsNtPSZzyqjrVMuBwN3cnrAbgFdS1ETh7tb3cTJ2nembsFcMHSzwT9euaBJLexnNELRbAnBpyeoLoyYaVAsR",
  "key11": "5ZomAZsT8xNR23m1gDgtiPezYBnPS5hPoKNjDPRZTAkrRUiceP7hMqk2jcgwJbzv7HE9TDfLVQMs3t4Da3Sm9w42",
  "key12": "2ebi1Cpw2eKgphJqg5gEnffUNafRVpLPUv4VchPAtAs6Lom1oBLcwBXWwdcDSUawCxGKayihS2fVrQ81HMKREsBT",
  "key13": "3SM77vfM8b4WRsC89PutbCSQ3WWURN3DMsXDWg5FsdwT2w3eJf9hTtxWzYVGHzmHjhd7KLbApThpi8DAWTEAWPBx",
  "key14": "4eaErb6SZ2CS4HV81gEE3iXUv2WngSh3cYPTmssHmD5JJQc4Y8BFY4kza4ypziRFe3sM5CC73MGhgtxbkGx2KRFk",
  "key15": "2jMbNzTS9CPSCQcM2G9P5zrGWbL4VoFiQudqSb45yLoWP5W6P1rVVPYMLsFcVehpk2hd6R9iWwz8pMQRkv96L1Ke",
  "key16": "2SYBbmLQ1WCgxV3JAGaq8B2bLPmmUtXEPW8SFbLuvdHq9MiZQAccfHPtKyZ8ByWF8nChgdpJhp2aF5Qy2iueRm87",
  "key17": "2SFZFLdvX9HMaFi3j6tCVPpfHwvGcJatzUDkeg9JAAVjWnJQWDuie1gbap7wp9vsMJurRL21xYJknFE9wq7jTvmp",
  "key18": "4aM75FAvMH3dBFrYszJvjxxyUryDArAQt1hok5LJ8vwbCzuUpn1DyF1tUw8P2udWQBNPUttFGfADTodpGWwBVLJD",
  "key19": "5HnJmrG6zVG8maAGJhN5hbV2u32BYepatV5uGjgEZ4NYzYmQ2gzX6HwhSVZ681E4FZrtDSG8bLS6BZLE1aAW3mn9",
  "key20": "4cXvYPxrGQTj2AZHygubLTDxoN29tNEKaj8Nm3ReRjQk8iNXe37dseCF2BWbXnVec3YxvbnCPLrpob1uyXjAeMmd",
  "key21": "31sq8CsxNgf98cMXqjYeELYzHKintXJwAtyavNJ4gvrawBBfSDPsZEDcjWRYzqyYx7Hk11qR5TZqXCQuYe8F5yp4",
  "key22": "66B67bQ5vzi3QgNY7i2wFQyCmqfKb2GSWxaZWuDhQ5fEi5g3FypGs44TWwFs53RtfUxE6rWmWSoqrCL9sM775G47",
  "key23": "2ChuuWszuzdd95E4Xxm9oNsgArpfrax1nYg4Wtnhx6q43K9T5hjpra8i8ux3X9Z7fu54k4P99JY34gNbV14Hyvh2",
  "key24": "6MrhsG9Fym1f3ni5LvSYnVv5swoXzpazVFPDrN72tQSqP1KhnN5GFCc9bBvtq5DCfETgeQKc7QL29TbZejx2cc9",
  "key25": "5861CirkZuxmCTG2ST2Q8J7hzRv5ucDksifyFfQv8qW724K8V912pYkyiCNHvu3KehpXCkXMuHsTJg1ZPfoL5QAD",
  "key26": "2bAraBk1XH2BgeAstxzfyUvXxfaifKyiXszWdCK62aM5US9u8MHdktWCyiQgNxrToaYQAcUYcqQw23ibgb4nYXW2",
  "key27": "5byQi5WsvghDS3YRxxffZsAi7VmLUYexYDFd8pp1nuQCFgsSxj9XSnh8wYpoJZzNZNJU1sdQvhbGbA1G13Jmm79S",
  "key28": "5ruba8RpYZ1vt9KGwdqFqmmJ6CZ3EWZvqtQGSUpCNXqGMFvzfUNFMLsGWDaBkskpWKCr6AhKnXxN2GB6tEiFHqtn",
  "key29": "LaBCzDQcD5JNdqYvKPaYfehTGxZExBnqVsLvaCR35BCBPfKWLK6SFrazH4nropY1ksvRtpnERK7Hguv36xrhMqU",
  "key30": "5k71MpdPacFFPbfSbYUZf2HHhhE9wNR25a9PTeyFouA4dSwFpa3oZHyHBP6XkK59B49RVHU7Jv5srGjqThRsMUrs",
  "key31": "hL6tWiz3VwRQQhPi4o3GDbmY4cqMaWUJhJ5c8FbvixVGk6EEG7DnCaRuJSiVrZvQYFcGaFijJBerUPujLQkpES6",
  "key32": "4Y8aSeVgyXNP6WRMJUdJKyYnAcGVECyrpyBwiNbwpeXQZ63qU39zMnsexQXQ8YtWZDskiq5WWZD4Fbsv35nASDzD",
  "key33": "3MuUa89TK3GitzoSovQtKn2zTRH6KGQXmWbvpcMeAmRfDkBLtKhC8Wn52uxE78HEvbZFp9Mxud21SZ2A7C6VWXJE",
  "key34": "4Ch1x8n2EMcGfBRA8neoT1cfGCB1C9pWhgm5VkQnLHKy7JjW2fSSmrmJgibzSxD5ybxfDnjNfMtnZ7EkhfdPxJxf",
  "key35": "2XTJMWVi18Fsgn6sh1QPmtbjtE7Ge5kuMh8ijZPtw3Vciq6AyRaALRUvofAMBcbkT56eYBshb765VYkKXk8dxyZH",
  "key36": "Gbjoc8GuSsp3wsHx6VNbVbD5FdPsHYNHorKErax9sTMCMncv2w4ebdFtx7wyZ3vWAuwJRCEfiq5MDr1qVa2jBPK",
  "key37": "3APvw28jqDbyzbU9vNKQPvmqztNmnWJNwqgCe5B1s6EbRH4Ra3Tn8hjbhQy3pP6HKXtnGaKnkGkQBJGY71MtM4Rr",
  "key38": "4ZzkREjaYaKsY3eQf8q9UeNnH4tGEfJUi4yDsq9dS5d8rzwk8K8CPG8ev5wo5AebVwFMn2PWgtUwGrc3PfxEv6DV",
  "key39": "4zrErSNR3EooaD5qaQ2A5G6htETcSgrmJZVs69Ui5B11t8KPVLix2jhf75BFDtW3s74BF9YnnhqW8md4VNa4djfz",
  "key40": "ntqgRf9psZXdABKXWeaDsymhAVg6sLrFGf5fbhK8v67wmwpp4iHmzxGEhLFGE4LF6cthdFrP1GD6NWvcvkntcCW",
  "key41": "5727YGPyze52Ck232YKWtM9bFr6qewb86uf8VWLc1VhLZzhSPGxQ9NrXMtd8EFs7oRxP3pBgnwyjuZEZafZq3rZm",
  "key42": "5trU6ZRDHx3pAx9853vhSJ9vERmYuiJ8YsZDvntmhQDd74rSL9QgjgkfBYHhWvBkVUZg5gGpxHuPpyYxCzq8C8qc",
  "key43": "e9QrvLACwxzX6u2YQabnxNrzK36k2ABbdQMBS6agDob4LDuf7pEu47tshqZ5TCKKRsUa6RMjByR23nJPxJST6JZ",
  "key44": "2DHiEuYnQdiiLVwfYLnjDh2w1tJGMo78swaYSowE6kJoMbcyjUnBVGStfQM7dR2jScnSTf5mRdE6Rxf4LZ25W8VP",
  "key45": "4cwyahUxwNr8xqx9TRL2jguinT5cikeDeg9a1qLhPY4quRGi5LBWC3TF462aarN2w9M3NceqZBLdwRpTcVQD61tG",
  "key46": "4hy2YhBvpwM4JifH8X87254fGGLeWosjGxyBh1EYAM42s7CmQijuMeGiP4bvnpN2ryJLyNJcDvE9jHiSWnH45naX",
  "key47": "3zo5d3TPReoDVpA3zGCnvsPvkY9zCMaRmPe6Qq7unWNKtXx7bZckkdUdM9wQnXvNX5qneWRsBpgWgNE6j1UUHysk",
  "key48": "4EKjNs6LJwhLiuA8iwcMusZe2Ko6uhYkcGzAeVYbhWEbGFpYpsFpxYGycHKah5kKvfCUWyr2bzGq7G1L3MNVCVsC",
  "key49": "KWkTr3jce5qLuu92uSRc6r7TF8PAY7VHsD4txqmkEmT9nwSC881DX3gni41xdohaTU9NFdxWxcM1UYvPFE981cy"
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
