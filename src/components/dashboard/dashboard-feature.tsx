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
    "uTV7r5SYXPj1UBLPGhixqgQ9hody7ibtJVupWs4tc7dxrhL9G1xe9fTxmRqmjzUdKjGan63se7Kyyurq8FA2U4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7mcU37auGUe4Wf86VysZoSEHJctUZp2yTSFdyvAVa32f2WaefSpjgZC2RcmFnvpwfkeX1PWwzf3jeHNf29AC7y",
  "key1": "N2aS5FiVCumN3xdwnjMt3W6Dwfdkf1VtCCQdhLwiyR7uEETEJxDtktL33zSm4uvmqBkh4UVkcafPWdUUYJk8u2c",
  "key2": "5yjnbbXTh2m4dCfJ9Pvt79pSB9iQ4xp49zmrbRuZRhPM48JaWP9HkqMRe7nfzxSWzvHGCNko1pPmLF3nx25tqB6F",
  "key3": "3JZ599T4wE2mg5NXPvtBBsQ1jaJ8nTQzWn3j4dWy8TnmjBfij9oSJ8CD8DV1moTvBepNLx2rPPG5LtVvas1jSXCP",
  "key4": "59hun5t2EoXt8Suh1WEdehBreh8e8HyynCKLEHTaodKZengxLyHofvcopGjbG7Woohz7gzvrxjaqyf6V2ToePRhb",
  "key5": "61e4AwFMRwH3tYNn4S77H4WWYsenp3vAqTPfu3fNn7fX4RVbq3GqjNro2weak6gyZHoSree9LS7RtBSG2Xv36gaJ",
  "key6": "37CA4kWkgwkze98uuyRLEMybfLazTVfZs7KWRhrRbW6SaoBr2ftozr7sDkNE6nzaywfZu4kMTf9o5MBdwo4JCaZv",
  "key7": "3YVxWgERp83ZM67LohM84T52aaDcy5R6RKKMSdKEx4mRBcmGCcbHxGS17VoWeoJJA6kB99ZEjpbsSpN2RV6F3fyk",
  "key8": "TVkjSaGkmDg6WnHciC5NiN8mZuzqD2BimzeDeQi2akp1dWXtoqQU1amRWypxyMmhSCiioE4gReBwoVHNwwpgs6K",
  "key9": "9wTqipP76Smv5AdXFijKqaYtyYqxh7BE4WWdmFBZHTKNBgqAgo2QwmMZi9Y8GbMW9XX41m8HNgPRi9AA3A5bxNu",
  "key10": "4DQ35y2vzBGys3fAx8DmoemVqvzgzCb8mn8snNDxuBByeWq1o4bxMhSzxCGeNAWkh9Gd4cBKMnqq5su6bMjxkuVd",
  "key11": "3naZsyrkMwVf1eHzgDrzd1ph9pUa5dM3b8d1psz93jMY3BWv9WbFCrx7HCUN7FznHUwTXrmerL8qmVuWUT7ej1hr",
  "key12": "65CUhKCNb8NuBbdEmWSgWW4X3xPZc9siiD3KR87KhN6TBHJD9ZMZmYvMMVsQPPAW6E3U2TJ75sx6BmNaoZtEJVga",
  "key13": "3G9dYvpj6bz7e4bd8UDahe2CamVJX7mB1cXB8qwFrBWGN81GxRCn8PhHzmS7Ex3Mu1zwxAPeSRYxdsZTg9ZPja97",
  "key14": "3vJaEBcHSeAHm32emdESLKWdnENTD5kQDi5tM1cxHVTBUSGnjCf2DichqD5HUrJ8m9JuGAC1AU79S9mtFquGtCuF",
  "key15": "5BoMLaeA5n4iwipe9qziYNfSgjxXBZHWbJTemd4xLUZZ5aUPW6wUTL6N8A78rPB8fXaPHaqvN6XSyEYmTBWZW5GY",
  "key16": "63eY1WaknhJ8s4pMezwBgJCNG8EcsKugCLssu7hgxtLeN1Edx2fAjX7YbWz5QxaZaMkiPCsqsU7focxXJMmQtFQo",
  "key17": "5hFHCrfwxjJA2pEE9T1oU3wD7qa1BdLJ6o99LrWTvXN5igFpvE5pCHjWKwdXinEJvd7gYzyhTuGxZwhKYaDtNbdc",
  "key18": "4zyKhdxoG4r5TbnWLzpuTrKmN5EictgLonghuzd4kfuY4FV98c4SAQgJwVNa7JobsDss65Gxh3DZ8BAb4iuea7r8",
  "key19": "ZSoyU1iGva5MYwMpZoWyRFsMjSwfadmE7fQWN3zyjHpzo4gTjK7QtUmiKn3KnmZMvLRSYiJu8Rf1hqZ8dXLUehs",
  "key20": "5dQRMvHRWCx1hiVcpsANboX5NxfLbwWgicMS2ADgzFd31E489w3bWX3JbE9DK4txiWz8L7waVQLEy3WLcQhfumNC",
  "key21": "BW9BRKyuPutpxjiY27Dezp9NvLQFUsotTx4tGKyE1pYSrJmeSYpkkqongwBBSLaubtiwDEZSeRcU71Twvmmi2F9",
  "key22": "5p5TVzhHEJXWed2BM4jzcvsCxdejoLbY27SR1tTxbfhDXdF7dPT2dNP1CZa1Xwtsk13JHZZwWA7CUNv9GWRXccoy",
  "key23": "rc4pm86A2S23pHATwENsbvyNgFpF4ovHGccE5rens8cwNsgWKScHCvGnxjFoLQEkrz3dMuSA31XVNkYR1cRTL3g",
  "key24": "63WUa52iE4vBtiDK4wxLSmtSxVvgutxWtRxmVAnqKtUhnyFPR1wuN9E2BpjtfmkKvM9sG48fUsABssK7D4zEnzRP",
  "key25": "4VmuP1H1z1CHo9TDD84j8ms9NQLq8UbE8pWabKcUdQR3J4jGMeFCfpJjus858GMGzV8iGVW8nxQAaWza4m6qD28U",
  "key26": "3Sj5tD3F58w5YiAnBJ7rFmQp5oRD6tr2nhi28UgiQYLCPSjb7UQo9N7E9mdyKfkD9GbCCbR5ZoFLVRyyeWBSgYyg",
  "key27": "5mCNuHMPMLQBue4a3Fdjy6pJN9tM1r7kv62fkzt85og69PkPssynixE42DbV46wVxuGpjC1qdoqibSvQvTunkxmd",
  "key28": "3msxFpe6Xyb5ydRQQmgDNNWb2ss4gxxirDi4Gs1cNDuua4d2ZYnRqKPitppm5AjQDuFjwiu2b8gLVt8B5pM4wx2v",
  "key29": "4RUmZVsiiZFxRfVLWzv9X7Npvi8FqPtVzSjn9KuT23cMdTAywABjBdnjwqcV88yfRriwUas5je3HaDEBhc1uwxN",
  "key30": "AVUoUTrNNsW4XNfesfXKA1iCv1Xgt37t4zzHuGcghc8DtTeSpqLtvp5sQqAvufzPweoWoUvMwqTBLNfVMjnNoup",
  "key31": "mPERFV624coLsCkvdzmDHXHm8GJBP1ACnDWGtxfveGtgyajgs5HiDxBQBQRrttcrKgMwaQrCDD6dnogmBEsaLd9",
  "key32": "43vK3reoVJEhpJo257QjySTtkNtea8FTCunEb6TJhYUmEJYbhbsRfgk87fxJtWN5TSavsdXRKoDNi5P3xWw9SPoj",
  "key33": "53Q4TVwL3DbEtqw522YqouiTD2MnN1CCEJZTEXXinGmyFoMdwGodLjRU2ufH7ZhmBcbACrjKGtjKu67RCgyDF8MD",
  "key34": "4KsE7Wud4mcBV9dirQYK7Hjnbvr5XgFrN27ynR8ngkJSrLn94kgqk68bhUUSYvsUjexuBHqubMjHGWyRNA3BjGxj",
  "key35": "49LEYf548fdR1Q8X7e8cPpkSbbqQ3zFyFHvZVv6VUwKn89SREhNdVaooVmmoQHsKNBxtSaHdPga6hRm4b7BAfqmC",
  "key36": "MDvburZzTNHLyxeU5Bak3dyquNmoX8v8LytpKhfirtjiDmHbW7jhA8oQ8to8VnqL4DJzMKzh3fW8SnEjVtPDFxq",
  "key37": "62XhjLqKNst2Yei3piR7uPpHy1RnEVVZ8uPdynvSzGKH4j1Jpmyn5fkSVX5SVYpo9Mw24rLhqURHq2BH3r1FpzAE",
  "key38": "2UqXb37NyCTpXPptfTDThSegppEeHFFAM6EYKiaGJmMGKWqpSDoi9XwmcmprPXNY98kv35PQRJtV8V5Da2ghK4MB",
  "key39": "5yPZnsU3AjDrADYBaKE8i148Zrd38WW6dRc5UnyqH1aUNWxxnwJPu6RhQnizeYZtoaPjtRrZ32yduPg8L1w32FWw",
  "key40": "3Xmv7gLQwVFmofy7jCLGW39xGSs2yqSVm3xeEfXo9CCE3k2n4WospQcARhqvTqqq3qg4xD5dVRYQrY8VeSmng6r4",
  "key41": "9maHLUgtbmkL2t8eQjPAdUwhx2fRkVngggAhbPfzCyrCNvWoPSQrRHPpDfK1yx18k4VTwMjUxGQCaevUHKC1bGE",
  "key42": "5CfJLym2uUgkwVQNBo2SrqoQrg2S46p143YWX2nVEYjxsS9A5sbShgsL6SzcrV5PBQfxWUCvJmjDhYUPJ3dNMLW1",
  "key43": "3NuHY3QpJPqpAYpiN82MSaWWgwsi4wXtawp6WZ9xfRfZFjAoZTL45sfg8xJe4TAEdwXxZNvEoKPAFG1PwCFYKYyH",
  "key44": "3J7B9q9WK3MwDpa7ZXZxNS23NTLckKqWgtwTaeBbpsqh2BidVehKNzbPmAV7uKudBwmMNatdFeVh6Rnh4NvEYaBU",
  "key45": "2ZDgpqNwzCsyKrcVJ8L99c8BRqihyUA7gvmd7HQ1V9GjUZMexgDAW44FVLT1BWpchKm88TtUG4t3XRZdVhLZ4wMC",
  "key46": "4TpwCGcqeC4HtpPUNxD9npSahMTXp6umbnxVmjpvHe5VySAFhkyGefcTzinuhWd853xeqdF5XMhWbFsHegUP2eed",
  "key47": "3k4S98vfaSjjF3snPvmq3vU2YpJdDhkcHGj7LERTfZR45avW3mS2vv5gM6v5dFGPwW7GAY7xEdTfYRyFfe8o9BNq"
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
