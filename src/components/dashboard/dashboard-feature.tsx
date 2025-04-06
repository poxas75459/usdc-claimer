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
    "65zpkcKLL1bj7Cv2DcoWk92m5K9uQtKK69GGisEBSLfR2h9CKDCxAYadJDGAtijjJG1qbpDKD95svLekBXX6phMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PHt8erhvMDMHE1fx7D43avKGbS11n8ebP5s21bk8sVfokYdkdWYipBEtEc3JAgUcVVmRMTMPisQwiAU926x8XQt",
  "key1": "2zAxMWvo4QnzjhiR9HSmBNUdUpeaESUqCPVac3Emvx5Zi1SBfnKdJktecTUf33za4JdGMtE2M7EmPXQrUhSfTsx8",
  "key2": "4PcScJKt86zSbjgdLSYv8NMcrS8RYpzTT86FxTFiE12vebHB7nTjgqq2apnmZ2tzitQGvfMuFegzv5rvEf9Q1FDY",
  "key3": "2YnoF9nbgSMQsSFrMzKpxAm8z5gKevV1oah4YL4LMgzCtdDwtkzu9XGrNCrDnJFQw3Y7Sz7ckvcfpRW8dpdDt6Lp",
  "key4": "3aQREBLc4acemJcu1ZP1im1rTZmRr9sKG4mijCFRmJskZEAJhEjewUVH4LrTwzLKtJJCPiHMkm2SJbS7Zf9dAhXP",
  "key5": "4Ubkon2fWXF9VBdb5v6sY3fcL26uRxobZygVtJ6UaG9F2bVDCsDzomQ7TXb4FXsqSFz3UR8tQVrLBFTnRygyys1A",
  "key6": "461CT7dxxwoJeJUFN4nkAizqqkudZsZeJAUG2GGsKoyjGvtjK3jnUgu9ciyfhqBsFjUCL9ZARWjxBszi4aTmw8vq",
  "key7": "dXnxnt6EWWQesoAD9ij2ShMgAixetvB9xGMyRxnrsjZdV83GwrkDGe1Hcsxbsw71dzbxxC3TKN4BRZQwtQg7Uug",
  "key8": "5qrzmcKQu9UQhsYQbvAboDTQtkUdL6hGwKurWSqX5saEiGnYwtr9pt7nh1pMDAmuwjJ8vsQjuRSsgGwyAboSALZ5",
  "key9": "p7pNSyUQPhK23UTS77DDBSBHq2acWocCxCqWGD4Nt2Tzni9PuCMG1VuQZgrALquJncbgQ27D71q8oxjwpjT3N43",
  "key10": "rSRCkAWEs2Rdj1h5Mce5xSVRpqw9vtAmAPudDwgtfCYVoJmNUgMwA9dcgD5Zk6qANFJMhMpjWbyu3wcAZsJP7yu",
  "key11": "5rkaiZRFok3vbhMVSuEB4Kuwsy9rnvaEYvSJYt66xEJCdcrzio5Lj9ScHXvxRq3jKPUSK4KRgMt8a3exXwjdQhGH",
  "key12": "44HXujg7pc4z5viRLfiEzxkpCBRpB9hcBhfZTJBm4K5WtkxmtDQKjNaBUJ8EaUdJSxNfAm15H586jsazEnYYxyi7",
  "key13": "4n9S7ijwDkKDFaq76cF4qN9q9NAZmj6Rq31QnDqnizGfeoBtc24R1ubsrNpzdbakx7VFKcPwrPTkSoUormC3Qjy",
  "key14": "3WjGcG1XAc3aFUwJBG11ouWuyMkXcVvWEYNF82oqvFZPG1qzZpdcKgJRRcr5rHAZyrGSYbQcu1dGnbBUrTrsggaY",
  "key15": "34aE6LHf323hUxPGaZVDW8UndBg87HH4h5UsuWvUqa9cnRd2fS2cJ5VUUg85nf1Xb9szfAfFdmiFnqLhGLr2YepX",
  "key16": "5SXzo3zSpCpkHN9yEqN5ziDq1iKcP2gtB83WZaq2f436Pxa3KCTCCyDj8thNk42p3G2QiSfavJrKrk3PHGscKRBS",
  "key17": "2p5i6uSYuRwCntBFPrkti4LDNwws1zftTDdST9yXwk2vcHGDEto1f2kwV4Yvn1b9f1nnbx1oegmo1wXEr4giHcbD",
  "key18": "4uMxQ1spsD9QqhmW9CYkaWbqup1YhEjovoBDXkTNW5vBaGMEC1nGTKCdvQWLfGzGQDJTEjKMahPMk2k66GNA4vRz",
  "key19": "5HKbVybicZk8vp4fWMucZCgrvH3EvcFPsrHJhKXKMW9wgPvNqqAH8JDy4LzJymXhdTkK5REvL2CNVL9VhaAEHeNK",
  "key20": "66PwG1MeXHahzCvQBgar9BK6AjtQV4JmvNQojgSNBgDP2QAg6MJ155NW6dQtVopGf98MjAc2juqskpH7fD8zcCfa",
  "key21": "4j7BGC8kNAm4YgziUEE11g2V7bVE4e4ujpvyDM1md45HsA9DXPq5kB3p6Js2z1LJqmrTHWyg6Z9Upow1jkg1yNzR",
  "key22": "2kyG7UtsRxyJ61M8u6VJhavFZAaAV8LQbvotHri3uK1r14pYTh2ZvFZW1yvXn5jSWn8m4rwjvtC9ZiPA8va3QcoQ",
  "key23": "qRaAeVNDSqJkkQWQowSQqonBo4XjzWVzhxMhmHBHionW7juwPsqozy19Xi5CGsnmCMfnu57cxWgktBwZ1FcjuFP",
  "key24": "39o9coUwcD7CpJSSYYnFLXErBnynNHsVVqiZrYhACzKr8ddVmy94ipdcX5cpH73FSQzpCT5G1YHNfV4LV1LjjmwA",
  "key25": "ZXDKer1dPfyhwJ1X5k12m5YyPdQfSXpBnFjNHQCNfk6rchXPNMYCygGtBT71DPMdTLXLoseQhagvioWLNAMH2d5",
  "key26": "ZK9mnT3TgaRysKeUpEEnD8kQEtoeBpdvkrapNmpV32DprhYq5MK6AK3eA96ARcc6XRAK1WnCssKhyoMZFZYeRLd",
  "key27": "4QJ9opqfeUJ9AqSy33LuKf52GRnfavnrp4DEUJFNknMYw17DEqkSE5Anvn2LtUVHPke4qK9ETjGJkvnruKetmrNc",
  "key28": "HH9Ytng3U7vXUfAvQwdVtnmxF3K1JqHtsiWr3Xig771a4mqCkpKrtPFie9UdAgvJA2bd7MjrH36LCcPSUTe37do",
  "key29": "3VdeP4XPNFpUeP2ku8ytPdi93JgUWaK1SCA18qh7x9bsd2MFsu1fJMbfZnTYoTryr7ugQj9npn3gF9gQQ7UTxMNc",
  "key30": "2hSRRtmVmJQ5iLs4sx2VsR5Ak9z1rJpLJ4UiDWfea67yyfHcXjAvQYwkpLzbGCJkBd8xCotZfjWzqJC7Ds7Cidpo",
  "key31": "5FzXESVxLSxbUc9TFDnzFSZajQLg7CkAgUNS8M6CH6xfoftMf4SjsPvGnJZEMTgjHv5uNkWjdLU4Up1Anb8PkCop",
  "key32": "3oX3Cq88ZMSt5ghVbV1zRvqdKc9QqWBCU1uqJ35TxUeR96ugWouPqkbMHKkA4S1jBppo8dVQ166XgiYMAJ2KXhoq",
  "key33": "27ybzdN5pGSKQCsGP885cRELpEHJXvr2jDPxS2qKzFzFxqsXXu3Ryhfw1KZNHVUHUSVufYtSm5Zt6QmCgHkzQCxa",
  "key34": "633uta58YuksvnXuWgv6qNCb9bTEeSEFp7AVxDzAJLGU6HtWRkVMN26Agzr7uNABfA25yXQn612q4Vymbo9nBbwC",
  "key35": "3YaUGTaKQbcaL6knctQYJTTKNSHrWB1zBNZ8fBE6oKbGYhwH1L1cB9sumwLDwD5cPqYCJR5ds5PLWrjw6NKdYncT",
  "key36": "5hyJtCa3CTFhzNhtRtVstQGfYeaiU4tfWMPKvANe1T8HMzciCMXGCGw9sTq9ukHC9bTsLdWm8eg5jb3YmKUFiMTJ",
  "key37": "5ZSyXCwRHyy2ccRWuRFuuMw7tZGBzqEFo9MtoEYCAZXgRCb8fsYyeNjXZuZkugtYXs92KA38bncDksXgErzy3uKv",
  "key38": "53kp9ruuH4iPP9qXE2TfxaixKw7nyFpvfyhZC4SgvjfRr9kuQTGZqJdWGizk3Sh2BJCrqT1JTuEDuhursRToHhFP",
  "key39": "3sky5pDGUYiBtsx3QyaVVgVNeDet6UwfBNrJ7Kjd6KXGnzMNRzarisgVwa7yuq7evePAZtaTQqdyreBPue56Y94x",
  "key40": "5LN861zfSG2dueEu3KcaEFFE7CFSSd9uMMhjiFVw2XP3991eytGCFSdb9oDdFmzZYW1STBwAkwLZDpNmsVziNF99",
  "key41": "4W6H45vxp41wCZfS3ryhEYJscBK9E9Q6Bu1eHjHqr1EPJhCKJkcdNCuPXprrkfdwpftUjq1n8n1iUFwofQVhiuT2",
  "key42": "4ZGQwEyEnMcYyxet8HVec1Kq913quQ45hXERWSUjGYASM4wcLiiPH8MYTG5rUeWjKdfYHWixLUh16CNFGZ3ZsDEs",
  "key43": "53LjxjqGVJK3spT51uBFzuBb7ViwY74kVkdVfURRuKRra5D6g7YXBXB1Q24xFFrnjW2hqY5B77w3TrJTL3ZzJLF",
  "key44": "4sxu6mqwMbnUdnqXP4HfS4ojRtV7dYhTSTfqKxrmUunX7hotTBvXBDwRA3D7w2mJoXEPY9gNjrsT578PDPnGHowK",
  "key45": "2PSbhNGLWGRtbEHAM2hbEru96Q3Z6MLyzVMJLcEp1R4arHpUf89UrdJaaN5AQpewZhFyzCg72jCq8ureVjUHaDdP",
  "key46": "VZroaKcaJrtETefB9ypUGGTp6uY7ujb95qvrapupZKRgNYddUHbpfHWfzYmof9627Q5yTjkLgztiePAGo8UxFYW",
  "key47": "2QegzVvTmm8AyYcigNJVFmVRoNPCg8VPm16uU6cqTS4dP61Dv6jWEXzi1WBZdoGxJGSfTUx24fUvn6TbDVMXkJBB",
  "key48": "2oR8Df9EiHcvn7GmnC7AacmWDETRTCzY6KiqjXZ2h4fzpXiX4aPRiMxnMjwhd6s6YyiCrMmhRsb3vVuANs9C6nZm",
  "key49": "5j3ngtu1UWHQL6EshAAPGq1Ydz2zaRg9cgKg6wWmcXLfvKr3LHjmSRJuYsxzNjpUizWNojbbMwJ2DKYk9AcTwhqE"
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
