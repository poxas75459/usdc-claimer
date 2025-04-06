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
    "62ga1CzzsUoYg5FXTf19gbYUUD3yRGybs2BfRuETtnLYbGPoy72pgmXjb6hWAkXZA4eXDV6YHZrHeGv6DDCaA8Ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgyR9vHraPy9SkMCbX4bmosDbNibse8byAhx5FUPppFQromz697ej7281CtSEbzeqBVvMRCsZxR69TDA7sQ3vsD",
  "key1": "4wvkcswpyUBErBAaReEUT7qBwEU4V1GgwqB6FQcUd2cHp8LWFbA1PAn92axQ5gkxHDdEyBEfrJCCZkzGwGxwcTqm",
  "key2": "KheXN9t9RVU3vFaSPd1C6Z7vfkAaRD4Zmjqi7AHpJ1H6tNw63i1NRBQRrrLKSoebmaiRHpdsEZaqgPDZwrp5uwJ",
  "key3": "2HrPeVgvVSdpWfxkx1urE8FiewhW27PAzibWi2dahvXD5aizyUf4KsyvmbzkHUK2UHxTUMjKBFneJqDebRwgh7a7",
  "key4": "QLx2pEtSCChc7fgx58H1eTZ7bzJ6yyZ4aftjmi7H1uV83TupRmMoK31xpP96ewneLCxtHPeog3qhjdWzgDhpC1h",
  "key5": "499jSUBo15GFD8zny9mkcaS3qnRj8dRwVdmpHpgYLFAD78qUyB7hrvr1RSbvKkxJZQzjkC5hVHGvqvQYc5GKs5vY",
  "key6": "2C1F7q77baTDsDAaR6goZp5DatZVrkRokN7m6PidYzkZjEN8h4PAhAgzUvr8m67FJD5tDcaUZjSgqLGn43FZwub1",
  "key7": "2GcetNebDgiC4Q53Z3dCfHYoBDUWnwk2LmFiNDX52JDtkmtMYSijHoE6nTSv1DQnE3k72qgxKCTq7La2nzSKs95T",
  "key8": "cd5ET8Dg1QCc4a1X5jDw8ysE69NBQvWnJDxYodNQvCGBJBTSTn63WdvXGkFzuf5UzMAcEkZ3fLZtkdaWWeMA5so",
  "key9": "2phKs2oUNqtyo4YoZZRTmoj3WKxhA62RH7HiJTJxsSBh1gxhVsnFb1hcH995tm1PZofcK8DZrJxsHAebaMgumP2a",
  "key10": "31kvFLJjW1ajN3eCsbxpY1ZSQQSLPkPaah3j6vmzpcYqKzwuXx5EhjLzeGu6q8Us1GrDJtJo1JjvnNHdZWcTwY8c",
  "key11": "57SzJ1g4PMyxm69J76Qdj77QZCibQU2GtEmNdDN6anDjJDxtYiorWz9soPS8i5a6AykWEX8vRzXEYdeWGFzo1pQR",
  "key12": "KDdfceHAgSpQL4xiwHGbeeidRufzyzANjRyBAhgn6wn1z7Xqi7LGttxpu16zFDpi1Jt9AMnjAADkEuTYT9Wn3h2",
  "key13": "ZHMRNiM6EgziWksh91MnVYkT4VeSeuZZeeFJieQcMTZ2pPjhfBZ2CSNny8ATcUUJA4LEz7BgskJmYWffanY5FK2",
  "key14": "64tfzaUf2xZPcCGzLHCa98CDR6xsMdQSvMLPRXUYqbLGByH7cn1cygzozQCVSeYWJkxCj4vHyyC7bcT1gjVM1mnZ",
  "key15": "5H5cGg8iA9pCqWieGV5FAysDuLuFeT7BUGFbcPrEhKxf4DLkqnw3tjDKCkJ5NtsjXDCq4HN2X1D7dkiKcVwRW7az",
  "key16": "4sNtLQ1LTQeRpPi9KsDcerR3xwcEUaZg918w3eMDQ1ToJrd7AfCaVZcB1HGbxXaDB6S2Vr9njzRBapMna3kwPo2i",
  "key17": "5Fe4jeD5vUMQM3FVv9b9DSLTP3CypVkRNXjDYvgQL8QzgesB8AijZqdQZjAL5vHciTKkCGvUqknKBhGXukLVD5qF",
  "key18": "TqLNT1VCSt8tvMbwSsSPk8XCB9kqnbAvBfFXxZHr2hJuTqTbN7yBwqxP3asEmmdVaBcgHVpDHT8ueMuprLQwhjb",
  "key19": "5cuokRxAi5LTVAXzsQDM7SNf15yacYBURCaCjRpTVHe2aMiHcfXvmnbzVwEYiEPwQHBX95rqctNT8fxQQ6NfSb8U",
  "key20": "4AeTDUBxAbzCsabuL4TAKtvmARkMYAjSAwvKSpVYFiVb6jtRE8nECo8nuzPSVWRsKuaRDVwnNs3dNRU4wqDTsxL1",
  "key21": "4ZHRp2cqmSpapnEZsiMHSKZpCet78YEKm8yxYph64ZcnecmbWHnrbBQBJNKzHaAMLEPyQDuxcSV2SmtKPNnP9VLs",
  "key22": "5u9Cdicf5CzRJqk8K6EpaqFVWxyh2P85GNU8uXBDvo94GyeA28FucvURJD7ErpoB9qkyMWMw25Z2DRfRyuzMr2Vo",
  "key23": "2jKF7BBiYfm1c7sbT517kyuT32mb9XXZbZPFPzpPvtTy2d4SXPkjmPEjvorH5p5JZ9taFuTvgu5DKcvdfoSCwgEk",
  "key24": "xG4CfCUYeAkQg1rNqfjrjFmZzAPy3off6icv7QRTU81geL3nckoJnNEaEqNcZwoTQjjWoMBgtT6nwRfPSPTKqxR",
  "key25": "4bWbphhqE7tpKYgi1mjZvH9rURPt9cuLD1R6zK3cuu1C4NEsoyZXj3FPJBWCDzHzWATWjMzcorSi7eqajRQhsrvc",
  "key26": "3SiR22F2c6uRpaggircSfwuTSJ7fMurreEf1ZkbMP6VN3cha3mhkuQGtpFK1N2GeMJnpiYj4Ny5Xd5kLmZQMB72b",
  "key27": "22aMMLMER4BNacoe3TR5MUzSZ2kFWAmMRW634qci5MVjcFx12GMSPqLp1VdkgZPnLUT5YGxVEKW758cYg9JJhQ5R",
  "key28": "4bMrwMZkBefnZY19zQvtsb6xBtxroguXsUHfq7XSfSgopuL6qb6DvS5tKVZx4tsZmSqitUA1Ldmc5QrvvaUiYXm9",
  "key29": "4GpotJYw2f3d6q6X1WaMi36UVn9GvCBFoYHAPrt1AYMu4E9tyznpv6rPkhgE53FAN9RvkXi8QF7Y5LXyKjmyjxkZ",
  "key30": "5k4drbeiqnqzu2SD6pWDAj8SuQqEd4uJAcuPPpLx78ac8HW8pXTQddo8kHsMxBZsgMGuAs7zY1hvJbCM7DqE1UmV",
  "key31": "2eRS16arQimp6Cg9Xo12SaV4rMASnX6N5ZudY1sEbYvGNpkanZmGFCMU2yQXkwenkLNEkr42JokfL3UVdKk8s7YK",
  "key32": "63iQL5myrz5uWcV8SnqhHmCAKbQJkY5eS5EBoW7noPhP6i1sUBBSt1xRGVTFGvPdtjxMgAwCXAb1iCd5meSKUjaF",
  "key33": "26SpiGrNcAkpmesSYLBja5AcGmKKbEvyhyXoZGW8Ts1cWtQr4fjdXGo3LB2XaiVCxgp2B7C7jigshHdKMA1DnWes",
  "key34": "5eSPK9bT4SEvfeRK94KwwgL7gMq2Z9u19bdXqAr9LJjebM5u9w4fUzyGuqvjkRKUMZ1HGgjH6D876p1oF8nQLAkz",
  "key35": "5eRhNW7P9PBwcASX1zSYLuTBdB598oCvjEcYNLY88FtYGoxQttTJMm3ssYGtat67Z9znQ7S81DFaKJxkdRMXtEq8",
  "key36": "3YMmvVzgyKPJ5NpLxkRVDNW7PGAVzbYKExLLMCp55o2RXge7D1AVVMmoxwmBHxhCZ1ukDZtZc6tvDivarM7GEAq2",
  "key37": "4aUkAJ6wGrHw39uvtpf1r1mhZBK97PMUi3KoSApuDJXdzxhfEfjfePke918Co7sEjbNxfVnHLwaVmpr8QotDuZuN",
  "key38": "2LruvNbxCtZxF7KrEZzLNEVRRc5MgZkd8A7Nb65NconiTVkiM4yU57M79Fo15A22GCbMSAXyiSdjoeKs5uPpKWP6",
  "key39": "5oQodT6hpRZsk5WqFT1ND437BsZfHWbZ6WbndwxAHDtx6MSjbxprF94zbwEsnEGgxcxZjPoWCHjEHHJ83N31jobZ",
  "key40": "2St1qoPjAs6H5rd3DUw1AWiF7rfyufZppva3bY8sW7Ge9ZEGnguuB9BES27P4yy3iRBTWj9e1tchZKZaJEYaXe4J",
  "key41": "azKuHh2P9jXGL6bUSBopGYjHRkzNLJBESoeXJgVNvwZ5C3ggCKrisq23SEZuj9p1U5Yja5LPFa2TLJVSaRhNw7P",
  "key42": "3z1n5zj275Hrb8at5YB617tJPtWH9Y7jMctK2MSgtwq64nvfvKyukJvGsbzia2cy1usJuYQ1KCmJ3yDFr7TFaVXp",
  "key43": "43A19Q5YmyzN6sJCHZhm6AWfFnnutjtLtCNwFTqUdG3rZ8cYTxLk58YSen8HjoBGirik7sy22xAR6uBEX9jRuwSN",
  "key44": "3xtXCkG6dq8YfveQA8eu3VELxCZjuBvwqkzXXrT6hPmdLKD5qgkMg9wugtjs6RgS9g2yWqUta5i28M2z7uujdGFg",
  "key45": "3Ne6cEQM6za51QCo9g9ggiFs6saFhrz3igopJJspRuAVETiBgES4h3AVGjfSC8kxi69sPQ4ResAnhZVwMGYLnra",
  "key46": "3YxZtoy6gAqG6s5VkgwKZR6gsR3UNnw2actWjbhmLqZNYfTxpR2PZZt2eXy4gApU8kdnrDLakmR7UuMSvvomNaXM",
  "key47": "56i8eccHY9HbRo15abKL8WQLZRou5G8uL5yTdv1T16ccQSWoqBDR8f81A8xQ1mkQzzd6vPBeeHvtNUErnnKqRaCa"
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
