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
    "uSiMdPBZseQfEEt4VC78Jvukqen5UqaXE3jWBhV2DxDkmiTr1aD9G1docNWbkCgCzZHacgTJNACkSUXMj4aK8di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bHA4hDF19inWDVGxGriyLRFGPuf6m2DZjjcsbAHFNdmfDL95yPq4BT6iPwgNewneFKwUosUyrwC1Qj5734oxrmZ",
  "key1": "3xoYMfDWuaeaqXB7d1LkVRjDJNwdh3DCdNka88RmtU1aEjEmEUDuXTv5tDjbNx1PJZ9QGCyuH1kgvV8o9EXDXZbM",
  "key2": "4JzVv1BamC14MUPzpSvkzD4BEQqEXyeZ15B92HrNCMAo4ukMRSPi3DCEDiwizwVQQJnPmpvyevU5sFSGJZ4B5PPZ",
  "key3": "2QqHf1ML8JSFTZLLwd5Tb9eBbZ2NQQxAqjLpzUpogLY4eMSkp8sXNx4xXjAxRHCRQwx5b3QCbmaNL6zwLewugkws",
  "key4": "4pLfDiUYergidBby3KfHUMmTKcT74PvAHryNpBx7RPSaksdKxRHbe51evHyoLftLKrExSAYgpCzXoXJeUPWm6m4q",
  "key5": "5fBD6g9vMstqG9Sz6c7giTMBE7wgyhA3bB5awTq1XUc7fwXccqMeiacXeF3bjNP5U9G9F9jTXkBJb2KxtPK8cA5f",
  "key6": "22zzaw3kACQDxeTFzpMPSQgt1dgAzk11dAiwU1c5G3XdiDTYaKkqcGrZ5eAtxPrrQCqJN6NM8BuJTMsy76Gvs7Ls",
  "key7": "5EvFy8EM9sYLGufsCdHLo59FNieEkBL5BrM6Shq7gunX8jauNUbwjDsjUDU5cNKEpZmpcmzAzRDyYuvnLeMiVJoG",
  "key8": "2yQaF25peTJrziuJjW9QEsKSKCid74cwgF9zwYVNjcQDPAwKie9btV1qJLDggYRk2HW5qZw4Y82XFckgs8XWsToy",
  "key9": "2AAxAVr2xrSRXHoeGzfdxwADnJr6Yr3uGy4cxTkPaP8oXhqUQwLit3QWeU5aZ96MAi4ShpcG9jwn823TV4K3TXn5",
  "key10": "2cp8Wwq7Jq9Z65EatJ9kH2QVFk6vhYZWhZF3F2VKUPEvFLpVQEumPFTtQ7a8WKULdSc7qK1nM7b64Rgu7nG5SQxR",
  "key11": "5uJDqh7eiYeLBaxZquw7PgjEP9R1z1yaUkug1ZWAnt71fT6mXGhoDFRR5NipnregsQx8z4YajNNCFDqZi5WLrvZG",
  "key12": "4rMgPf2RHCPhGhLZcwiDSmcJ3cYdp7896scChsHqim9bXqjohfitrA1E3PP4ALVuQPNxY56HxeYbKYYZKnUBMfy5",
  "key13": "QLwaLcTHW5YQUcVs5zYZnihDj1pYfuHACe8Yhto5cn1BWqTL5ijG8j7EjikbFuxQxPeFJw7YKiHbvySVWzLBQen",
  "key14": "4ixNm872kgeDAn9WnDYRXmxHvBDoKAoyh8NNZ8fAB6f4aSXpK5dnGh2iNLjT6oYQcmK1nmouMi2JwWQybycrX9mT",
  "key15": "xitxGn3DDepZpiy8Rh2pEEz7rwSnicWe5TGiSyZa2Q2298VjvCXMUnuTBuUXkU2MqLQH4iY3mV3gYcJUAacafKp",
  "key16": "5jPwMRyAfsNFMspbDNznZuGDDcD3jiCDqMyKxsCxS4H8mzYue714AHdz2WV3ftwwkZvT8b1BXC9oPh25jaj2Jwss",
  "key17": "4CPQeoFB719zrhAFDtuseqaTQNT9ki4uzz3AW52FiKP8fyaJicABZke8YFwfoJ3BoskWZRiKGgkpReEAALh4ttFn",
  "key18": "HX7MZDPrNoyV5jTfDigN5PveULhqGN9U3Cggeiu2MV1TFTJTLC9FpeVt9i77i6ybCEu6HqctwB1SMimUKUwjwHs",
  "key19": "31qaZyYhETnCAiTvwiCcFfDpnmr326JuRCEPF3xjQ8duXEMcvhpURBhVpZGaG99ge3W8RTxNYLLCccU229tkaVSi",
  "key20": "2ZZSTfP6onuLxFkFtwSxQG57J6Kcrd5bn51oWmoShJYwVW5KDqd5oeyk4oc86oAqKWemBQRSAZVCM3zqhEAspW4E",
  "key21": "4QiuuPRdsKJUCFPQWacfXfEdpbJhuwkKL1mDAVSVLEyusQkRyK3J4aU4Ck2nfXBDU7546XToqDxSa7yPpFA4qmWB",
  "key22": "b9aNY1kXCKbrii8dzqTnTUAyWQUSyT4ouisAyA99f4oDuxWWDFkZXeEVxivP8X7FXnE1pHaCB7j7R65xiggCPu7",
  "key23": "2wMa1yHqnZy1sw2sSjYbLf9y4TsqDN5TAh4fqvQpNiNUTMLAnSsqMaRKTa8Q8VB2QPLzYPeouaVeoYbFccZHvdaj",
  "key24": "63gvUJAVxDcqAcEzBS5XbZGSPgGwpxfT1KArNRTvMddRDEa1yYw121s24W88TdfXU4a7XBuyfqCDincteSZLb6FN",
  "key25": "2UGa8yLCydyjhNTxcu7zcWMqheC23acRye7MWEPT62ybWhKF65bZ6DexSFWcKJDAVzmxDJ9wKqocSZ2hgqvhgGfv",
  "key26": "4BpvPhX8xxMBQDN3UuEYHWhZ7WRCH2D31josUVDu4nTZ9D4Vftt1Rosk7JBfGZSHaSDX7Szw1ajTaajJ6q76myCg",
  "key27": "5ry1dTPXCLkGt6c1PF2XQ666L4mRUddzAwvBe8zmRUHyBGwbWHYN17pmBaLQEduDZJz1CjRSbys8jSnMfL4BXNLj",
  "key28": "aBioD6jj6onhAqU2Bj65T1d9e7qVYUFxyWeJd6XvqqRC3wQoPH4SCWvFdgmyq8qy1DR2he4NammfeuHRwP4aowZ",
  "key29": "5YDTx12kXcacPVG2C4aAzNfnnRGLhiDLCHn2Qtauh26pT5XdMLpUVvvDDAgT5vJTYArB4yRajX49va8hX6EsYnPS",
  "key30": "14w2AVjzxTs4xdMvdzNB7ScAdCEBYVdAx3hzZnp9bBro7PpRgLG8MwEM4Xcwcjetxpr6hviSvuPwCgmxVEJXWFb",
  "key31": "3MfGNq2jqe2g7RSBYzKH9avXC5hatyF27za1UqGEKTjZpPHumN81RZWmXJsfcLqsSJGCAzEVAz7hAxmENz2616dx",
  "key32": "5ssf7svaehhpz4DFztmSEH3a9E1eEgurL1zYcL3oH8LB6PxZyc5y5GFEWwjRsi4VsPMPs2XGboRYVhsDduSnPTpD",
  "key33": "63wSJU8VM1vsKK3HSEPBdHjo78CKd7c2H4H1wy9PtNVbx8TMLhyNnd5Hbv5XjGtiL7JcDrxYyx15fh85CKBJqz93",
  "key34": "4Hs3g91XTD6iH54ptYjgnVGCvjpGLkJyT1ApmupySYxvN93eaVnmBZdN5r7z1x3mXDiozGkWLXA2hcMcQcYHxQ6a",
  "key35": "3GeCWPrzC8D1w2fuiruYv5c2T8MXBHUpx3ug6k6sxiMM4ytU2dJFLohPzLQbjoDzEzVunNZ11ZvVjJCh5XsP1gsy",
  "key36": "XXLmpWdQcFVvk7EQWaL2obdPyn2mR6KRHo82t12DzgJkack1q2AbJ32mP22wGMWf4Jqc435EGBiFV7nHycyrNxK",
  "key37": "5WeNq7PLkJn4j1eXCVyxdNQBymLY9VSvX4SGgf7LkWZye6BGHx7gq1WVJ8K474c8NVi6bi3sRsbstt7MuFPvEzvT",
  "key38": "4omyodxDjLiuDQD1a7XzqB8MnAQF3fQeGrmEDMCTXGEiizKBiYJ2pEhQ5rGtbeMXcW56CDqmT9A1vTBjw35pUd6",
  "key39": "2C5r896tQBSoMYCZdjtMGa6agdas7w3YhT9SGFXfPKg3W8XE7fEApibizWjqX2BkcBM9A3LorNzLGYANgnS1dKym",
  "key40": "561fRE79CeJurVmtPAV9SKGFenCbDCG9h7fzF7wr5rtnZgNfyWMaJNHpe6VBSCJAQcoXVDfkKzTuCwk7ngykmiVP",
  "key41": "3GJk7xfLGsNZrT1rqzBDr5exHLbfv9mQRE5WQZPTkgqk4Me5swkVBeJ8NXK83irxyZkiLyaNf6mi5ejQiBheVbGZ",
  "key42": "5kn2NWPpe5xyqJHqKgkDwjiuYvKarR92MPXz1KfzfWNVstAACZDFLtzSBTZ7PyiHgP6Crz67JaPxWH7FFx1dYKh6",
  "key43": "vPPwhdvR7QwipJb4E6h8VMBjterRjXSeWwzdWrEnHBmHBej1Nk2yLQFYuYkbG8gB3ao4mJMQctbsce1t2Q7EQ6o",
  "key44": "32yeYraEDXi9iAhSVmm3gtzukTQeBFHDpBmXYmaRwiZtEVHzgvNL9Pm1iab9oLr9Dk2sgmqnJcW7EbKdkYNBdqJ8",
  "key45": "5GRLbb5oZ4ajza6oDhnUQcERv7UdxRSxfzsYe1sCqFLFb74JS9gjVFNMkX4F4L3xDj3UHmvUaMNnG6GUFDUNCFft",
  "key46": "MEz4DPtfGQMe3rkvLTdo75Wuuz4RAeujcSvMHhM5R5FBFSNGtbZdfCsJ5k24XiT1Xsk9rEEZH89jYVAbpEvpnvX"
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
