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
    "4DxJcmwChEs6cE9yFY87q52J4ug47CCYvvxt85wyqSdMerAJUZ6vfdKCDJUAqe62xWEg1rRqdZMcMr8KPjhHsi4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBngyDxNaP6pkD5F392uwFhsCnZjKPxxtJBat6XxPoTvxuzgmpPgHTMuLinUa1kz7Q9tTci1kpvUv3WKhB5Ypnt",
  "key1": "29FLptARyRv6PpUL6E7ppWWvENZLyvcbLK76rLBfWBZ6wmA6MSbRxfWLqSSjzbokTENwiyXLS6rC9dy6Mm2Wfsnu",
  "key2": "2swK4FYv3qjth2BpriokRiaMJHuvXfc5S8C7ZvW1vWbrN3hKsksYuGDmJeKrLomEpoEcXYQhPxLhgFc5YkGZprY1",
  "key3": "2qbvUDHLv5EG8MeaTt4SpPBHAXLx1YNt4bsEXLCt2baFCcc4xb7o4tKvL8LrbAkQR2GRucVfjwoBSgD1rnFnEaiY",
  "key4": "552aCX6VCysyqyjn5cQGDBetq3U6x3gvqJyNVfaHBrL3UJgA2NnGzm1GBJmfodDH3UPqwcgZgVQ48XW25pjuSdTm",
  "key5": "4nrzRLeCcdePPiXm7wYXfVFTGd23ieyWy32L3oEAMFPaffQGyAqDsetDXBphswBdXmHpH6MK8Fw3dEfpWA7Hk8vS",
  "key6": "4f4NnSfy7dMPFxYXzMi3cCbQosyLuK5ciWCZmrDY8At82DGocBH99ee8zzn4JVeHaW5AGUSzVf2jWgqkWHdHJfrx",
  "key7": "5yTkBLrU32HHrW5Kkaw63AuXaHNoiUYXFc3hxJvCsZjaJyemMEArtTpyYhGW6i6DJCLf3bpexDVJE8brX8Y2gjdS",
  "key8": "DZHn8tXhbDBca7py5U6ZsBQuzfSSi2quk1dvunb7tjfNDdfFJUwRn8NR5e5Dkrf2Le525DYpdwGSk8zWn8ypduh",
  "key9": "BZt2RDpU2ZDAXXZDwKsqVoMp4eKsGtfAAocHMZNxWN4Zp2XmVCBmf9UVtMbigYMKPriEKTvMT7Vmqk6iodydbjH",
  "key10": "mieStyPzdhmRDdYLtefaxRKeaZJyGA5d1MR913HWVRpJcSK2WXCVmP3f6UZaRcG9jHNpVL9Z2x2ujcCGQiEeGfk",
  "key11": "37Gjpcvz7QqKj8e5Yo4xyjZLLNVmiZV256hAP39FbeNY4HAGDQubKbybBqPK7riwQ6H7DUkNESSMru3HJjGxeN4N",
  "key12": "224x5xkrUERM6bFcjBYoMoeaCfW1jeuS9znVPvbjsd5g5ousqiUW5EpRy3zxAeTF2UvajycgtkYq5zvYeZKYYZkr",
  "key13": "SX2obS16FZxaeCvtxs9rsTLu8PYLe8wUdocQFfwzWMVgB9uu2fQnkf44EGGjFZSTaSTGzTQsLX7URPWQ3g8Zvu4",
  "key14": "3aFf4i5P9yZtgKj9erBw6CraonHvQVCGQ7ru2Dm5LaY3tVuUj4LubbEhAosRRH1EawgWAvnAQ1i9kqvqWWpUF85L",
  "key15": "BzTs4RkSQgaQ4GRf24W8f9ZSx3kJmFBxN5tfAqm4PDd3YXwY27SdM1qo5sqkqx87j3jJCgvyBs7bnn2LKtic7Qw",
  "key16": "21Ecv4RE8k1XqwjNTRThtTyJyMU3NxUqra3LPwR27xyr5eY6FJuRYaWahDxvFiNN7D2UuJyMaRog88VGB3pSNKw1",
  "key17": "3i33tAbHxyHF12D8zGvGwgZieFQaS6182hHtPBRccjg6Tu7uPqsYwTQvdZUqqMWqKzdDH3H4aVHNmzPPaCRVAorS",
  "key18": "z2bXFYawiyYCiJSrRovZn91ZSBaKrgaoVyoaN98XVCKoekhCVkmknm6gFHJuc5C3doMbNh5L4JerY6h2y96Xohy",
  "key19": "DL5RdD1CjTSN1koVVAEVPQ8i92umUQf1Rv2ZknnuTAuPfyh4TQv1SGLSj3ajWFZqGd5MysfWZ957zzkyYiuPNst",
  "key20": "4jzRfsdPrvNKfG5uknecCvkNzmeH7p34sPy5ZRcBYNNhRZVynH8FSxQmnPWEKup5mTgcszKAGvCudg9hDReZM9hY",
  "key21": "2qZXzZBjHy2ri1mArLMdp22mFwCKy5sPCvDcQRCxifQ2G1JuFzcxoAdxRkmnHSuChSBS7aLAzNPerQqoF8c6C4MP",
  "key22": "4cWjoiMHw7ryUabFNezi5FB2Y5opZVjchcXquLs123gtuTU1eemEZJymYELW75Um8EnefzVjVXWXkZLu9rXrPrbv",
  "key23": "YmLUU5APgwcg9D7H1TMHASFcFwhN84dfYrjyD5SgpihzgkuvfrhPjGhhsw7rN18FcCoMTYDVt5CAVCTy2kmdC2k",
  "key24": "4185CwkL9Sefgw8cUAEtay5RjFvtidp6fyvERAnQsUdSYbMVoTLzcRCk3J12Ju2v75riQ93t2N9XM5xnJQ3Qthp4",
  "key25": "2B8Q6kiZQSao6vWLpcbNRdqYGAVz5SX1Yx6kpbGq1LocdUcv7FF4P5Gi1rsxHVE7WPJqN8WQc8U7xWHNT42XM8cj",
  "key26": "gheVLs9WL26BZA8E26E1eZ2WeJftxkNDQWifLoVarjWepzp6TR4ChSjid29pLn4gj9xYQeZP3iT7d5LxeQtXvmn",
  "key27": "2DDTNqBhz6bm8Cm1btGBMXqYr8mjLWc1diXv6EaMVTQqj4giSpHKVhEU67JzRMvp3Et1vCciPQwsnJfhVCntxi9P",
  "key28": "5eZpR9Nr9KxAumwnhXpz48qfSCBwFrC9hUSDvx51736XUUrmE7FSwFyifz9PEu3beqbvzfgxEs2m9i4KVb1CoEM6",
  "key29": "3pfLuVExEpFFyy62kMKMwSAG7TEd7Si8RzNSUbmBd6eiD1dVPqbkv1bQdrwdcg27cNZZBcYeZWaNeAWx52rvXaDU",
  "key30": "b1DRmQF4tm9gW6bNSNacR9ajNXqhCAXzarDCt55qyuT2Wb5UmL2YSuNyPKex8cWPgDkqPzRfiq5XKHYcKDdub3R",
  "key31": "5c4q96LKZGycnGAr4mjVee1pdJPXv9Jgw29cqzVVwTKH2CfAT2pnGCWMawPY56jSS9VLfZ6ucHgyfAkXKvF2hJKN",
  "key32": "5v9YLPJsswmdicNx4JdHMvFEBYckRwug1kvvaens4BsfyFUctwEGmFDZtP3ztzGyV8hjudJnvVsqRV71YQVW2EBP",
  "key33": "5Fas21CLTnLmJUaaNvZW2ox1ts9aMpvobpgVymmGPZcYUm3KQQr9PNpjKpEuqZ2KiEFJdJH1YQxL4XguU8Nx8tdg",
  "key34": "mzhiaBWyuigJ5efEABNaLxbwxwhgrBB8bZRs17Nr7aifL5iY7s3bxp15jNNSav7fXBm7bjmcd6Tc4i72S5f8z4Y",
  "key35": "2UXd3g9u5HJHW7QLaAJLBZFDgzkFWVgFwGegwPf917pkZwMRKPxqBmKDFiXFNpiM3dArY53VkZNRQUW2TUuvNSVn",
  "key36": "5K2fS9ETk2roURuXHFVKdTnbQc6rYtMp3umoAzPcF2jd9QqAqjMDeCAoVftD4kmn7dURYvLrQVqGugHNCtruDZQr",
  "key37": "4CLmzf5EjstGkEJDunRFXDhrsKMknWQjdek7mgqEDTCX3QQNjafu7osyEuzF9CDpYB5mkRCmY3eSc6akBVSMuULB",
  "key38": "5bPoQu2JLtqsBhui6dwtjGesGkhftVaJjJizVgfXwB5baUB4YdgzXJSpad9gHgQ82rdSKgS4k5BL6JVZsk8xpKDX",
  "key39": "B4VTJy95jEMv2YCMtt1FNciAy5qtJqkr2bDwgERwfDzqYwKHyE2mSfmMJjE8JbAmLvLT4UTru4bfDAt5TfQJ5Qc",
  "key40": "2odVL3ZWotbWBQJaZFxEpggpK2BGcLuKV99Qv318vnYkyehcvjsFEcS4QVFykHiT2ijWCuJpYqGL52ij6bsNCF6D",
  "key41": "5YFVDVvP6QzECJx35XxGuE9JWgcet2m5mDNPMeCueqrM2eLB6gt1xrsVYtdWCYyYZREroqSSm7T2DpEyCqoUJJdg",
  "key42": "FH1BSNMTm8YD1tKrdn5TA3J3m44HTPSwBW6k29hMTXzhBkerFTqVVWVRceVYqSPwH3BAGRSpie7o5bVmTCeQ9jB",
  "key43": "3AQuzoE4ftxpJUP5amj3V3YE48qjvEumhgUUbhXGjL2KD2xFaUuaARSeMwQ7GsnHk8zGYdGct9wHpzwmBtGFW2TT",
  "key44": "SmqSiT3Rk5czBE15utvvmcxeAvZMCJhffzPVmABkPYuuU5wBwJJkoNuPkzz48chHaePE6AJfhZ9x7ZiW6L5fVmp",
  "key45": "4i1ZwK5QuJtff3uEbwg4qCevjrqsEw77VAYKCifkkxdjAkCZ9xfbLumS5M9gAE6xCqWCbLDGgzHeTAeWwwB4VBV9",
  "key46": "fyxkWrgEU3X2KbpcsZxy2TVVvsfqDL2WNLiuo9WgfPusiG7yQt9HHhiAatmJCpUJijxJPo1rcbCWuySYtT2cg4o",
  "key47": "5uDorCCZsyjToJHZmVhJf9en8Sau2YYUh7yheTnWpEVPWu2UDnE5WbfUYo64s5Gb6eWzo6i2Y5qtRUFTzjSRYndR",
  "key48": "5dQYMAXCTTpt5KhYNL4gSeqj23fuQMHHB4i3Jr7xDLFhHMqrX6jtFKa5sZZ86ih4QmDHiqCNxpGP5oonqNSMLZXS",
  "key49": "2HLmsLp39RNGaiUMgbUX2E6f9CjS1UCvyBbFoVdgrauGst9EHcFrBTcsjSJx6DLwx5ErESLHdXP9u1Q81JxMR5oZ"
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
