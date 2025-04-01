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
    "4gM2FhEc1vSkxv31Ucp5GctCPMKqjfJNmdLYXTVHqzCKTasEWPWVYTyVYKsdsEpj9SCKSUB6hhpU8exsrVtRxqct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yA1fXXrCNPpEfyubDgCHa1yYX5acEHDz9d3eoF7Z88Ct5GuGtZbxKevxPmMZSbnDnXKiVjhwrcBnFmyFHonaKBo",
  "key1": "65d3SbWDakEtpRceS3ZNsjvChHduNFkbiHzUKoCuYjetaHHWVXArgEnq1A1xorDWiohBCiPfGNGeLDuVS4PEbqPb",
  "key2": "RsSEzwbbAQ3KxRcHDzsnpHNK6AETH5WCe6Bj3QeLws1otW8Ce41Du7y6yYMmzEssM8evTXNSfoizDQAkvHhpAH5",
  "key3": "4eAT72uKDAiuuWAa6usV9FcobgupZckHh4WWPTjmMnZ6S584GG9asQG9UKbanywH1SnmwcYUjM94unZkAaVAArPL",
  "key4": "4UB1PC6hnJ6Mih3jTTTf8nDz1Fg9B4nqiikAb5GNYvexV6vRRej7gDothuFbEkH7TX7uXJNjUxgDCJX1eBuT62XT",
  "key5": "2ekferUo5Hkv5gs9oP4y1i5PLLBxPya7X2DJ1oGVhXBeCJ3d9CKE62ufYUMMFNnuFjUHihotR5mC5rhhefaJf6Xd",
  "key6": "5ZMtNgJyjGiiQRU4XXd127LyiqRWVeReu7525LroEty7cP48xihek2RghUZ11GYKUWV8eYrmNEmqUjW4knd3FbHy",
  "key7": "2Tth6Ewty6vMxuAM68KxbcPWg7S3Sbf7D2Dd8hSxwmcwVxs4cXD5CrcSg4RNyvhPtyJLZrgQTuKxBDgJpmLnYck6",
  "key8": "3FgqNEmwq3kxeUtN8WJqv5P1jMN4FqhM8qNg6vNgorMEY8gTLrLQ4GMCUxMMaA3ftcgHPTM5NX9e5RuQ5YqnLSB1",
  "key9": "5s8FXYZHDeWbPgThjQY7EGmQaKumj1EkzCtKA8efXh4ExwAR5qaMwZBDTgTXkQvANg6Y9rPWj3xTP6Qx8XDwYNoC",
  "key10": "3HuBJTTjABrWEuTxa2sE8Wwt62o5JW7oAya3zDDUmSJdpimuS6Lz3oiJY2rmd7AumVjnw1hDxVePtkvmY3coBRcz",
  "key11": "2HjtMfzYk99DZ6VMFCKZS3b8PvPhsqScQjyLKT7ThFCE1GP3bi5fKHkVH5cDN1zzvLQ8eGc8bpXHp6XnANpqJ8V5",
  "key12": "qNfC75bRYpkzZHTyiyhDovLZ3wgp1m19gxsaLRcRALYknoD7TNeoUSCNg8M4apGpbh9T5n4BHEDoomHm9LFJx6H",
  "key13": "2kgSWaiQH2FUyBasMcc47F2QpvAphuWCcmHc8P7W7ksgHHb68Zf3Hi3Lnpb4wfsEBvx2gnR5GgQzdgpJQ3Xf74dN",
  "key14": "eLMvTTz8Bwv9sSaZUcd3Ens6PyqPmqsJq2oyBSL5kF9JQsBsSSgyRiYcduJfwvSdELSLxnzAcQwWGxhKgNKWYZy",
  "key15": "4RjHDfe6k7dEf93WLjvUZsU8o6u4kvueSb4aD14znGMjCmFb9rRuEQysGJzxpEYfHt8rRccbt3npy2azgNK8Ptxi",
  "key16": "3DXVimnkqWfBVqaembV7J95jJT23Yrtmm6YjT6UW1sQQXU2GQHurLKe5yreRc1wUYsHY5LZ8nfSU9hdKb7JThYQH",
  "key17": "5eeCvFXNFzhc1p89KhnKT32bx1bntTdouB9aYV2vdiy1iWG5uLiiPS7HyWgF22yy9zKwKb8b1hSxpStA8UXNKQRw",
  "key18": "3mfvwCBx4bNB41NCB71voRyYDPccttyJUJqt34fZ8c6uVXLNaodg21esVfwtNwruS9wqSQnX5Raoqiu8K8EaDGBY",
  "key19": "2DtoZ7ni53jYXf8riJeAb9msXGqnxSTv31rtHSJeUAQ9oo7wkSLeMFdgvmhAAz9NbE2yje1C5kqTTUUgPV3hg5SE",
  "key20": "5EnEH7sxhfTe3R75FkDDyMbqkUj4hLXkgcAimcyVhPFsVtLVJbjRbJ76ZMQ7nVatMfczbqF5Hn3xjBDaauwQTgVr",
  "key21": "SH3jaKZqq9LuzVs1mE5G8qaM25se5pwzyhbK5pwSPHXJ9tH2CzpXLL67Q2UBPmPWmfVrgYhYWLTQVgFVmqcYChZ",
  "key22": "3d2zysUicagtEiUGtpXqfuMfvCfBgA3grVhk7uEZ7p5f8WA9fPMpQZJ9RoNj8CYMREgy6VtmTgvgNGGVYNt6zqQX",
  "key23": "5VgUQqTAnrDqGa7DR2fk2TReb8Cj4o1hY6wN5RgjsysmTnAMvYkWQVc2wRp8avJ26Vc4t5iFXem4e26ehosbzZdQ",
  "key24": "15FAufPkEVM6LgsnFc2z2MuHPjdvAaLCTYTuxnf96S2w13mMZJicrr4dWggWzsj1sTS1ziKYgtypN3vjBBK4QsU",
  "key25": "3jrswmdYQcCuK2UMJPgYcXr4AJdQSm6xXqyttvwSqGduHfV2sxG6Vio6cP97aN2sBSUMVhQo4miA7U293aEYG57N",
  "key26": "4qX95VZjKMy2Cnw2sx6vHj2P1rjSKaNfPrpn5i7mcPhHK24sGAamqnSbEGkdwUgk81ujXDBTwAAAnwyAZiKyK381",
  "key27": "5mL5n4GsJnBqLFFJmiU9dd6MAzgfUP9qiRxabwVSNs6kjjuXmy5m44CgvzPgg5sBiM3TMSKTHTedHHtxCAuLzBD5",
  "key28": "4DiZhkqtuEzLFWh8hQkJqJCmKQqUqhKSpzZeft4TkzQ2Uw6okbeHEf1STqQjuskZujWnF5gH5Z5kQqfCuZjEDxxa",
  "key29": "4yuiKjtqqJQnH4eCz7U9kKy1Nfh3Qo3oEHUsh2iB9jDtbcppnSruX3zKikFBrexpRbixw1s6urAn2Bh2PN96qsF5",
  "key30": "43eGQ4RGJq6ZwPdTy6Bm6ikyYfKJnTd99w48cSkEePVhqMaJT9xt78sbQGPKFPQKbGPbEGTNReVk3bFPa3vrtxY",
  "key31": "56rrvzeUNdgRMUrUTQHEik1tW4apJGRGemKMjK62rZGHCjsTxzL1bWtKTny311DfKsLLGod3CRURNZS5P7drrhk5",
  "key32": "4GeB64Uh8hQM55mTSnZBaFJwYNsFCAsZ38UCTnmobq1JMciZXH55g8ErBMNfUxSBVarq9AGwKMKTVmWpV3bTudcX",
  "key33": "3zVao7iKE4BTneoBZP1bLBnyC9YkeM2YmksKBQG23CA8i6Fk7F1JnYBuvkob4mBbyAGazW5GqWzXQL2jtje1Vbhg",
  "key34": "ynxv2qHqw4C2KSsgK4GBw3ohY6aumjHs9x5fAWyDWPuWm4JxVgn3Lj4bxjHGrcZpJBxFCxgadQLTjADHAkfXiGG",
  "key35": "2VDgUGHYRbxMKphm7FLqTsvTXUL7VLYXgw5UZ9tGMPJUu6pgKsmdmKqAVkpFhBvHXnpnB7C2UXAxC4sAt7rX313L",
  "key36": "5EiDLxwgBUwezBXwjBzVRWCXver8qjCoGn8b1ZbRcr3sg26Nu4BXUL1MpyoEyHbLkSt4jytPZgC1UFYAfYEZgNwZ",
  "key37": "2iQDFGVSv5ndSsou8JDnzpimDde9SsBUt2vDKxTzBUF4ALZpEGUH2SHSckjavUhiq3KPon1D82Pyv6B1kgaLX6se",
  "key38": "3jejCkbbk3CmDnMLpBCfxuRFWNNTBuPBGBVgHAyNSxzCUDPeS3mLJRJ6MDdj5MXCsFemhbKNtd17gNtf8RBYZfX",
  "key39": "4LbMLpWcJfSEfz2UD8EZV4y82QZoVEDfS9T8fq8Gfodmze2Lo6VNUAALSXP8UhYFVvPxSyf2kjeCupnxBXBz1cR6",
  "key40": "2xNnuA9tQQf32MW1RwE7s3P9G35t8NJAuBcSSm3dnjMVKkjMvYR9dsDHT5vby4eoGQymcrEmhHYQU1GeHWj6EfAK",
  "key41": "4h2LH6u95fL8FW7wgHqxL26agb3ZovYVjw2TCks81TH3bh9A5BDvcA43cddpwVtC9tddz8dckg6xBMabBSrivh9C",
  "key42": "YuRYyXRAQzD8v4ZtScFK7EGnUif5M8sZ2oduHWn8JPeFSu8Cj3ikXoGHdzfAiuB93DTuRVAcNCqgnGRQjosfSpR",
  "key43": "2nSRDdrNtnENR1tNMAF7bG1RvcfSehTuHpLghJfojRUVCbb5uXfkTJbLGEmwchWvZ3aKBRXwjJdyrXHiPkoFcTjH",
  "key44": "3PG3oCqh5fTtY4C2QanRbwvKMQKSHdJchSsdXVzDc1zYfrSz2KBXETXTvkbU6PPYtfX93D782sAKQ8KMPKkvukj1",
  "key45": "4Yk79yR5D6KqJ9DX6puMqPP2brs1XTrovftEKVMBJCa1DzZ5KEJbrPmRBegN6tt4ynvMsSPrHTonWSC1hEzMQKWD",
  "key46": "3pmg4o1uLbE9md1ZpCg85NMqWvzxPJn7xvhohrrU1dxMxNA5nhk5THoRVRAMaLpgV6Dgj6SYoT8Zvn69itn8k2xz"
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
