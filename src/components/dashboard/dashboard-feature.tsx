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
    "3fSBUBd3Ni48nuFzmh5gmWDRYqAaWX7vFYRNZnbuGU2cWkB2DsX4C5NGij8eMKyzupwH3GyZdd5rsRvRxVaELuxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36dKuXmtwPZmGcqfW8Q4SQX2Qk6GkdHpvhfw757URmawyWSiUPDV7HLzkJEgmuf9Y3yrj5c9abXhvhiUqEabpDfH",
  "key1": "4QXzfNg8p7tbdmvsojj5Kp7DiHr8eQqHxcbFpj61TtQ5CMM5sp8quTS1Q4av9tcBqCTzJAaayPyDRxofeBbzrDfP",
  "key2": "2Hpz4LHL87e46BGAyxpyWE6mKSQbf384ivLuXMh3x8fMKH6iJWEPB4skV22wTC1pPPcy4AhhzmHFz8HJvuWPKYps",
  "key3": "3bJwTYVR33E2RHFei5aSWozwdGREA8KhMW3MeTzNymeEkhffgV8XXqVa915GPZNk8dbzdBnZDNtCv3iozYmL8MEg",
  "key4": "2NYqMspLErQMxKx2qen9aovSc1VWWy7j9S6DBCgcZXjJpRpvEwXoRRqt6NEtz2c81TxgLyTiZG4zs7cso1vUZkw5",
  "key5": "KSknVT4CD29PJL4qM2ETfux9hHTDvoDTkpoadQSoGACWu9vP1z1jYAVjDsAhZfDaG2PbZUBzrkddbM6dd7v1jGa",
  "key6": "5E2E6NF188SRribv7J3rsgySWjSWcpQM8KNYT644F8eh147Uusuz8nUwhZTUTNrj6p98sr8rzyw3apV3JgRyggqL",
  "key7": "3rbWLLy1pyfokNXmtbcpoi714g9gLCZqr4W6X9NBYuGq6CDwbE2BK4ViFuA6uozvhk7nftPyLCERpaEpQAMumEBW",
  "key8": "2wKS4ZRPcPtnAksKYjcvjoG5qRxhMJy1vqnRyJPyDh31b1h6qBhq4GLpciq45sPqptGhj7ddyfsU7M434Weg2co6",
  "key9": "qGi41Lr3C65PbGvgQqZXG7bHh7Sc7STEboJTAL8CafgnJbfHHuAVZ2SurBjQcZVyZxvpVt95y9narXGjpLrWdpx",
  "key10": "52sngU51MxZd7EvHC2PrAhE2KGJkYUHQD2KDs3s582BqgFDxf1Ta3swBXjLgRzAGvaqHEnEkEstq787Uh9Uvcb55",
  "key11": "3c7oeT7zZWgdRGHBRWZdJGCqWzcXk6F3Rjnsfh9G53bxznF4WXgZyQycqKhWdT51DXH5X5RMB6RHzJCG9eKiiagu",
  "key12": "4ShbpzV4BMiQoDTRkSuEM7h3FhDDTZo8cr3R5Emja7Hq34nxjsepS7gQ5Nk7RVVmgfnTyjLPYo7HHcRVmuTweRCu",
  "key13": "5HoagwCkzm3Cfpm2oQD4RCzxNF1XyqzGGdBcQvAdQrKH4WHpbTrDmg9yarEoQ2rQfD6JGUmBhpj1vEuPTLdhTyyD",
  "key14": "3ERqaDfU2Y2imnbYZw4eUnUhWuY6oEUa7GahKREAYMgPsT6QngdAeenA4HK4S36AZpFWfiDbBv1F6SwFts3SknQP",
  "key15": "6Gu8qmDc7XBvKR2AvXo6NM2NspRwMdwDizQMSJ4kYoaJr87oMDkPQgW6kf2p6LVSAj89F1zm3syuaiLjULfthgy",
  "key16": "3492dvh1asAu11dssJc2k319oFifj4HjXC3pdmXadRC6BtMQ5txsy81tho2oRZb7FfY7YSW8KyR31X1jamPWMtH5",
  "key17": "5UiDREHUUHr2YFAQgk8WjURZxA4L8DLwh4bQ6dwnKCMhPkmLwf6wQ1Mvg2Cg6mGs8zctiyDwgvgnX3gKCwM63xDA",
  "key18": "2hqe32Pk2b5iYu4kGeq8gSuthUTgmoeBJ65fmreBB1oKghNyjD9fVZQZbzG2ByMQVS9FZQAYRYvLPsvxXzAwntJR",
  "key19": "k3BpjypN3keEBBbagdJUspXcVCzUKjRjsDHJXaV9kPZjJ5G2o41sgshE4CpX4Tgb5a2rryx4wmAiz89P1J9Bvs6",
  "key20": "2KLRGrt6MX3ewADHuNxn8RjLqHxsPaDuF6cRekroP4pK4FQ8kV2uRTd8ibxeVRUvbckGT9hpSkDhSgGS2vdzcnyV",
  "key21": "2hVLdYP13ysNtqRjMMKivUnURvmNTqv77256VW6Frxcz74daEkawCBKnrTQA9FmZjf7Ds9hGv2pfUbcgH7f9YmMj",
  "key22": "63MFGCFsHXXrieqf95tZTVGgRkzajNbxYiTHTnb4bnj3xXigeHAcPnxLP3mUxCcsGNPBQNh3nabZFpKoZtkEf5fW",
  "key23": "3QUZ8nTFsNf6Ygc2orjrVmA8EgYHPBvbidAmifZ2aoAkXHaGJ6w266NoyoBCjabF6JSnH1K4zgsEM1AMDjHGysYT",
  "key24": "3Qe1vdmeTfhQ3Jsdb8GFPzTRpjAXZ8tZ34yvgQwPaJsJWWKnzWuyj84vfnNJzmzdJCukB4wgyBVQXVJBEmmnJB15",
  "key25": "42EwewTGADpwpyS1ViztLKCk2VDq5yesGvLTgkJXyej8Vg2pY5nwoSQMCokD6tHySKY9a5wcUawVDk2tdpeAD7Xt",
  "key26": "4VZh51wNVQ489ZVcb1MyPfGi8CQBwwUNuEvnXGUmi9usimLVY198oeiD71v2Vu6MLAJS9pNtKhzWMMUqVyGiNYVj",
  "key27": "3NCqhx9oqD3ZcNTCtz4M57SnbNf6KCSTCRaZgroFVFhMNazHznuUk8jgqf7mVMLrm9iKUevV6dEZ58VJyXQCw8kb",
  "key28": "2A9ijxpaqZeBNpzX7UCNS2wQ4BWy7pruSqSHm6wbwtZbRBofmUQo8C3DxP7Zk7teCveHJRsGq4pT8DF2gcx7H2WP",
  "key29": "2evXByQLgKKjMKbwQGLjsUWgcHuLptj5vV1n4GEvJwBomCanjaHBFHFTCgTDDu63mzEZ48Nhzbiq6iqUJHrmL19Q",
  "key30": "vNqihPzbw6vRomSLvjGumbQcTBt3n78U1d2r26bv5gstnGVPZrLqGNSvStPUgKSBQEVY92ui9zipnMADfkkLA79",
  "key31": "2NKTMyMuJpGqT5SFko2ij1etqX3zD6Q2o4DEtT3j5RRC2PVyL6CBtCffrX7H5SBWk9sGMF4BmsXJhJU3QtRAZdj7",
  "key32": "3Ptf6LTGUPndQBARSrSGyDhKjN7y4URkL17gMrhcm6qYqfnX8aqEFDgj2xXoFcxKGmaymEYw2EFFM1u338cbFn3s",
  "key33": "545dcdAKN8ZCZAeaLQTgqP88f4GWXnSoFcwNTi1daxV2buJNQeWpX5ZApvT4UD7pjFuSr5DEJHLmoMEZLLCTzZKM",
  "key34": "3KQY36Ke6YKxfRyfd2W9FtQUtLnqdkxZTaN3nYAXgxfNct2U5hjUXc2c8zcGLPW7tvezqdSgWtQgZ91tgGSANDwU",
  "key35": "4vewzB5kR6xoNAyEyWxZheFpiaS7p1We946UbnujxBmtyA2wZmihcYdootCKYjfHfnRR26MZ8m2z4WyQeKbHA3jZ",
  "key36": "2q9ZWwJ56ufnC3YcqK6rYSLJrhbhCcsJxxqk3mrddbKdAEfjytpGKwJsD737ehmujTmp92B3ycTatvCQ2VjVv9m5",
  "key37": "2zEArpU8HS13pKEMwe6xc5Yu4mhHtFnQarGQ8LAGXRiRxYGKDp3cbCjx5H52APCq17u6vfsFvcv56HzKBce2qfM3",
  "key38": "4akAq3cSuMrbEt7PhDHiffKBdh8BpRemFNAGY4a3pMGCSUcJKC4MXK6c9yPwTjTdVZjjF8MZsRdW9yhoYyp7xmXe",
  "key39": "27KCzXRq8pfcNREBaJdVZ3kCuHVmhwTaK8XXbjhp1DHY7C9AgaSjw4BXzqV4qvjpuoJZemgzSMRQXgLGgKxHhKnJ",
  "key40": "2fonB9CPfNh6sicAGCcxXwxCUYLjughdtjYKC16VjaYvr9w84CtrBNjg1cuUyyzuFFhtkmXFHKtARH7eXWF175Ez",
  "key41": "3pMDa8RJrYnzcon1hatoCxjGb1MgeUGRLmniUwTccbBx8s6CucaE6gJJspRyLBGdpZeSdYo2ExkeDjuM7acSh9Hf",
  "key42": "625AzfhRWrmodL3FSmnq6kGTqKnsr146Sbd3Re43BqK9g2fqkTVdzr4fLWvX1RndPWetdftT7o2UBQgaVYMuduqo",
  "key43": "2S8FDp1boGyWt8Mqzv77vPXr7DS6qYsayA1Ry8Kyz2kEj2Fb24646dEqKX8Vnoz1KSDWCQ7C4jqBJPSXgEr7ZTUL",
  "key44": "27MbcTNqrYWVJrptVSNcmvDQN1UjThnotbmVBbHBa1ccHtQQ8ubmFsFiRjyfVt8WKqfkdvtZwtEYx63AaURtrpHe",
  "key45": "2rbA5tJzgGA2tPSeL96AGFocoDsueDS1tU2ATZzhzxxnrbKxj5FpjWkxVLG1j6MRwgGaQPq2KjKo1oxRjk9R89oA",
  "key46": "5XZRDu85HitwcYmcxk6YJgEbzzD8j4A8QZgptH325YHtxgdKWwQQoVX3d1ipdjd2PQ1gpNjjNpYtkWTVmbHCvuvT",
  "key47": "T1nrxYpSiyqC9rXewJVcWX1cEhNMwfB7DfsqepsJGFj4Ra9sTuPUQ6CuunYiSEmfjpfMJirma94eDj7CNouqhu2",
  "key48": "61D6LhbcZTcaYfDsoyB3QYomJ4HUgwKsgyFmxnNpZ2Z7nkFPGJQQ6Ut1sCNY79G3zfvREBrMuqfuhtnTWTL14oRT"
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
