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
    "4ZKmNQ7fNgGwAif3FrqWTdjhxdqinoJL2CmqmA4au35frkNhtZCm3LQT5as78uCNrFEk48HrLvxENftZBrvyPbqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKG8JQY8P5oZDwheXuKqeJHRKCTBpWwoKXCqYDZ3guSxpSceGCJWKtNKicgv91xwB71KnxTzGjhTWCSWPXmagxv",
  "key1": "2ijgUbmpMPvQwy4VDV2gm78H4aXbsw5cVPWkUL6MS5ZorzXWzf4dM7amaGWFVqz23LoH35J8mFsTqaCzcB4kY2GM",
  "key2": "5CSsjvQ9vP9bN7RjFc7EwYUW9eKivr8YukTgoZce71PZYiaSTSMBTntXXk54mzGG2Ry9NF9ANhJ5yvshM4WADXUh",
  "key3": "2Lj34gYx69uCBy7UPGYsf2SBK5yxzCLYyZEtP4tQi3b9PqM1sK1cwkLNqHcztCAYy5x8BqeFyrjcMdQ2Z1eLBq5f",
  "key4": "4yem93QvFNT3UXsTS2oiHvf8ESUCxHh4bwQb7jXxaLEJZ3gRhvEzBWxfNYWN1MdvTSZjKtmYDau4TQQR3JphaEXr",
  "key5": "2TNhq7UqCyqJM3R87gmy4t1angdD4BUkr2dTijiLHHryA1BMnEbsbK35mj592keEog7oBpZnWT4Qfn81CQ52EntD",
  "key6": "3keecnR9En9BAFAHHSiuEJPrGA65V3Aj9Fp2Mhfff2gE8wana9Mf14hKvtykMTGkgDd4619w4Wm9btVuvmVexgRF",
  "key7": "32evSXqRGVE54ZtjGpddyEUgASm4ijbiU8NTL5rMrQ91ETzrPchYRQSuJ5jfwuGVSRN4TfeKgsi5sbDToE5WtbLc",
  "key8": "39JehM4vm26yxZBU8uVhxNk8hvK7QyskGoBcJ8Pdpdjxxky5gfJaoPdHiz2VPDfU69f83UTkaQCUuSmw1E5ERSJ2",
  "key9": "52kLcGkmgBZdJKECnMjoqVFGWebzNMQmc5fCc8SrJPr4hbAgDgkQzYtuBiMPoRQyZuKN4vb4gnoEf9hbmbmuSqfs",
  "key10": "raxLQPHxyVZevqhChCHsTjeSaxrP88rvD6pYdCGVB3HgBhHUqdrJZmJWCjhsSZChqebszimMtiyuaenSWzqbKa1",
  "key11": "2WMiUZ7G5f6wh8wPv2PkiH73qmkjq4ZiefcjboYxC42oyger1EAoLedEkWKet9d4L14NUfjxMq48KJNe3DVptnXw",
  "key12": "4gV2w1Y1X3EQLqSj9Yg2EDbL2adpqFbRfTDvbGnTks5DPARR9HMuKVYekhUqSLczPN2AcmzhVmcvdf6EJByFWHjp",
  "key13": "5E4CWH3dKHGB8kbeHgcdaJa4GRg9sTm95jf6GKcAU1XyeT8cPep5kwXViS7xnhkavCnkhWz4hdh8RrP5RgTVb2D3",
  "key14": "23drgCNo88BaCsKWWiwDUabc6npjRYdcgTN8sGehR3N4kQGLMPBEM5QVXE53cHPmpPh6CB9p9wYNw6L5GwepD58Z",
  "key15": "tjhV1udojqSswdAfYFigGKv1K1mN8LDz56ySqqK46Dx9KL3KYnFYQ4QmA7Upn3LBZbdvUeZgUAC8HjQGpAwVg95",
  "key16": "4b6xgMRkdPxTW4k18nxyGvgzQBbDPQ8NJPAvtekb9QTSLLU4dJJxVACeELztuEKB2RVpfh61GNG3kXPhTajx8in3",
  "key17": "5SbTxGk9Gvk6nqDY1sAgAvmHf2xoWPUF8uuo3q2LRbmT71Fu9ySetjhNxAcwCPc8rR7GfeYpMqjanDQzD5vWrG3F",
  "key18": "3TFSKHD3o7nUvTQMyK27QFkspgBef9G9K4kpaQTabuZNHzSwbnBet2EHxAKgAXXsFqrrEmGJMYqrf4qQGjsxgGuv",
  "key19": "5zvvwXtHBm1MwLrvJFYgUuKcrZtYEegy4PdTr8FH2TRvcmdSHSLoLBeA7dwC8dCJXBRaB6Zr1E1yPSPVE5PmcDvq",
  "key20": "5PfaKYeJL6L89CUx7fQwBD3d4XW7FAMWVkd61Xc3mw96SDGuGQhtV5e5bHeqoJCTW41bcgZGqsAbsJw7j4k8bMc5",
  "key21": "3NwVSDBMNGfdTsDKqkF4UGLYiRL29fjmBEthtPVZCS3dPEcwTwk7MmgNwjJv17VFefvhXBrCNTLHwEBcJGGLrbnB",
  "key22": "4adCotTqH89gCa6nTp3k2Xm6ptPCBdnoH8JFTTfjjoU1bR53ynYJxB2Dw8m5duemYfTTMTY8crfxhjmsu5sGz6no",
  "key23": "2VS97H4tyBTUAmgKrdtzzgt2moyKmf7hPD5RE1UvdpkmvbuRuNq2oFWtFgLckdEQSkHNB8hN7fnHs2bFwdy4Kp8W",
  "key24": "2JS3Cewt1qXKt1rXPZ21nckeVXSNTTGEMLYbCuZYcFUi8REFVvj6bWKCsY4L5a3e4Qs18cRffDqaba5qyiKw1eYY",
  "key25": "2WCE394DV2tgnJYBwkb8DbuD413o8sSJweDhj1KzZYN4FueP4zBo914d27M3DtgpVw5YVMxxS2AxS7VdBX2gwh4y",
  "key26": "59fy6F8UANPNUBXLx2FzSoZETs29PbyRvVw4dt78DTMQYcpsZdSLfZxQMTrxjcVhCf7cUYAc8mfQgtqXa4tvZ9F2",
  "key27": "2AqFTBmiZF5fjCJth8k2AQ5s7khgdDGdzPsQy4RszjdBzUFdvYeKrLLw5e2Af7Rktth3ctrobJwkrpjmqoYsvqeB",
  "key28": "3BiTNGgUnrq6t1HkgE5WaeQZgbXJZCnG4y2LvoDADoJpMXthw5xin1j7iRCbLBwSsW3BS7M2CKYxFxHtWeqsT3TW",
  "key29": "2P1VjzejQJdAemzhe9AXj9TKphu24VKeJ6qfoaSTn5jtcmb4rDE1xzM3KVQhEUptqgVWvyCNJMEejsciMKWQXth4",
  "key30": "4XHoZw484BjZ4y4QmjgT8sDgy6yidmzSSpV7q2Tqg6QnMrTKV4qh9VrB14uViL7jDzNDEtWF8aXLb11WnPPwPWXb",
  "key31": "45UxF4GGGm1JNzK7QbK4vKpcTCk9Y5KrXHvPTfG3W7NRtLFrteuGBsnPu5djo1wcxu8x1ND7t31tzq3JSEsGAmkN",
  "key32": "YqzjgfTpriAwyE7uTJg84U9NQ92sXonV3pasFZKrVECUK3pC1DQr9vJ6wfKhpLcrzyxhsXn3YLfeyyq9CG4mJkQ",
  "key33": "q9uJBwdWrPa73SvbXKe96nv8ec17vMRJ1wGKEFdSrwUBB1Fmv57Y9kkYpMDAr9Nz7RCoovQFjf2eQPruhTyjmJh",
  "key34": "5S8U3sk6TtTaM1unZvXCcG91daMTX3LpQKRJBbeHmUGKQDSbvTyXxyr687gMm1MKzhXNiRoL26Pto3qC5Y7cttSQ",
  "key35": "5JJrP6FVC6svRWHGxMN5SM9sR6mDvhEaYxQApi5LHs3dEfJFqTauwFSeGg8WHtmqbTN7QbFDGrJWw91Xx6hGNU11",
  "key36": "281BH14mkRRik4qcjoSWAKw9sgU89RhcAQ749z16FDQwCyr6EyA3WMNF7Xmgc1q8vyXWkTfRAM2v6F4hTaocHrhc",
  "key37": "2KS5GvZUs3j6ZKKNNfDE3y3WcUPaGrFJu73ee5WxjkvwMtSAPHbmge2Raqn8px7ThZMFndjTMbzgLmtTg55sZ9A1",
  "key38": "6tfhwdSP8n1zcCc6GyoPZzWpdz7azSLz9HKNQdPYyTSFVGcjVMue1EywtJZ2bh8NacRtEePvGjrtuKWMdzVoMZ5",
  "key39": "4CkvN7pbDtvryWUHctxrYUcpiaDx3HUUNkmqG9gNECWG5yrAE9nT1WzRRJGFnhVPJ1HzyRJYGGzcMnMNEYxgxWNm",
  "key40": "5GaLKBa9rtDAC5ze9jWSZZFf9wUqMtG98EVbkWyyTJTT8JnRvwHKbzQevF7KWcayqg6U3SA5wwr7o4nHcd4Mhvhe",
  "key41": "2ChgtCjuRpPBTTRq7pEwth2wHFWPE4yWQ2TKaLzFYCwujRnyPswwSm3m5Ffu6xMFSeE65xj1w7qKeq2NRWznemiz"
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
