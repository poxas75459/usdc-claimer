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
    "4ugtSpQjJF73opvMd42HuHejqwQz5mRVtAPrj5sTcpeNVLSzHM4LDhDKA5DNtyPZAnAxUE97YDEkejgiw9iocLSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g2YyTR5iE4Fk9mkox48daTy8VDcU7e8JkUtAUtoaeeDrCviBzbZELJFV6gDjjG7TPcztDAgALYeked8nxMTCQXJ",
  "key1": "2FvnSkCwW7DwxQQyuyrdxb2kPHErrVptJA63GLZrXbMkhK9TAvvMDPW3tXwc2NiDwQSFZGUHVjZwhoedbRXXMSLv",
  "key2": "2RjAzQVTMMPZjjcY5xgAsadVRFmn4BKCtZbatG3DRyKPxWQWDwn9qSReBGRjRQXQ2MPBciqUFvNXPgsb2Kf1eYvv",
  "key3": "TcSpY1tLArz4zYFkHKTfNC1K3G4SKzWBgGvYNSEyqeBHo198FS3RCEXBqncBmw42yH8uauAZBtftZTCStsjwwch",
  "key4": "3WHJu8fjPkzyw7hWshpxwwqgdcoGnHbHWgWX47pzxjicRRmQNquCW742giEmU8VoY7Q6fZEwCEHgKQVFWE3AY9ex",
  "key5": "AJhC6VWXQ6EUyJuDMqBFoDBJVm36Lu1Niyi3FUCZ26ZvFY27FmpmJ4J4A2SfUN1dFU6djmKcJ5zVAtzVoGkMPh6",
  "key6": "5eoaRLWNj35TwtWEPoFiHVdN1wPL2pkSxhWhwjrW1VYPXraFXBfuy231okiU9aN5gZAfzHvuA2wyhu6QBVfTjJLw",
  "key7": "5SNNPYzW96ukDFfGViJkw5JKLdp53C7nETU8ovf1AT3zicsihHgKaiQ2fCoh1NUpiTNB2cEyYjiyq6AsVJfixv11",
  "key8": "38aGaZ4gKqGFGG3tJQrrRHnxu4bGvMFCVRdN88pXFW8nZ1fqs47nryrtgi3rbCVJhQmjry1ahnasAoK78ajQMFyC",
  "key9": "2mczMAWmH5e28XEVdpYrjLBJGu63wNaJqyScxUcMCDTe7Z4Rci9FcgmVrU9Nr4R6bkDZsPMw3MYWu9fe1vP9thMQ",
  "key10": "23edJJFoBHYiDXqRVRNEQtbobPhwbvuCkPjFJCGWpgbpHPyLMQJanizw4jyXbM4t3PacjMdcHSzGs6XZJKkLzQxg",
  "key11": "2fDrc84gHXcsMoNQLiKi3jYRiL9Lw6KgDNbcxBRDd3uiuoqStvUU7Ta6zSSXivKaw4SPJfgr16CX5nAySyFuSysi",
  "key12": "3RwPCm34tjee2uuAtYojgvVWPfSLLuChSATnzn1L82D1vdsDLPM54REaip8iQZ18wL6kmtwnEfzzdj1baN615JXp",
  "key13": "5MDC44kaCsDeK4jRcfLgKja8M8rCkNF6EJhvxRvYZPHVDtxAXcNNWKL2iuFZTAvxkdto3bgriHj3DibisCNaEN8i",
  "key14": "3G19bkcGtFftpdxS8QA6si4wsuHqsBwdasaYK6Fr9V5137EwuxtYULKHFfxaJizvvpRdA6VwypcX4DYpoLjNfxHE",
  "key15": "2Twfi6pzEnJxEqiP8vuXbhtTJjw3Q55kyZtMPYQ3f62xTbyYjH81v2NBAU243342JXCEnjxC63sF6WpWBTSAR1Uu",
  "key16": "GWw6JhS2e2XzX3qpmEi42W24Nbb9inYxYs5rxuk7mgo1zpdZ34LSJZSGGATisAfoDFHckTUBwmY9DsjGaQf4aXh",
  "key17": "MyjMyWLTwXvoPu7z81kHDdq6ciDX4fxEAiUesobrqyUCdZ2Vuj7JNtCqL929xe8LTGwsyn5TC5GPpFimdb35qQ1",
  "key18": "2ipwNeJyR12NHkcTTBVLZhVpptsLKbEBjqgpyWNwC6foCAVg7x7YzgCxB479nvC3YWdWfMr6YFew2HsqVJt8pUoA",
  "key19": "oLBnsUC1Nn3cXpvfait3BLVGZCCoTjPxAfPC5K1D9FJcq9DVy4dMQN8AW23z9bWzsCmW2Pj7d6p4zaKGh8xCY6V",
  "key20": "46xLUyMgDJFW5bkCsQGjhGZWjorWzkkNfed55z6NvDKHQ8ks5gDoZ9MXLn8c6ZGufd4C8biQtEsBPe7huZF3w6dw",
  "key21": "wpyLiWXgo2RPdibQM8Gqd8ZcAYrdZBNVJ1t12YHQmR7mDxg6YVi2vd8a3Fps5Hdmz1oapv1nfvmFSauTBzJyq3o",
  "key22": "3sM1Hxv72Yd6zr9gTvY7XXewueKucArWhqGV6pazanyLVanr8ApqrfUYDcwajWZogKzcawdasr6XibyitmgkgHqR",
  "key23": "5YZeUfvhCVSEGVua7ab9oFWaFUZGhtrKe97wpxrpvPr9usZB5s9D7EbejkK3EVynH1FSrRCqXayLivcHD5nBsYNS",
  "key24": "5sUWARoTfppcrgU3RtC2hSS9fDUWEeDFTqUjRVy5gLoxq1SoyJE7yDNUToK9Yhpr2saA72edV5JyHCt4yJryi46A",
  "key25": "2kL4Z8MVYHpWWV6Zb5ynV9yQff65MwMR15EGiioKjnBmDgmc8qa1bbJRnWq4avZv4Qw2EDPGUPrQW8VEjVeUY2x8",
  "key26": "2ehDNAWzLMZYztPXYA36QTrX7T1KjrGNsozKBWkjrVTX4dBTgHHExmi41Ws3oAJ7X9iKz9fG3rUsRGMRDtaDGqeF",
  "key27": "3nvBdGNs6GhzSbPJi6wrX4yTs4c3681KZcfZ7Z74AKBQMpoVR7WjHqQ1cnxvqtzSfvBEamnyVNFrSy2PSgXfLvFm",
  "key28": "3ix9BKPkcYhxvEh5G6oL2bmfwPG7Zni8RxrN5efqQgRaVbxMfUszkEsSTwZBF4NvaayMzNdWKo8x4gwExb6iZYBK",
  "key29": "663nswznLigayrDXh6upfPMq7p1hKTWSh5434ENtuZnJx27XwyEmSYniZdPKCjYcR3FaLBRE8WJ66XFGvLwwHpMD",
  "key30": "5FJTWQCBZ62ke1JEUQuZ8XWwTLdEUdM1oBp8AmSkJo5uycvnMnb2CB36RpNEwozUuzKNXCmrVZAxm1BMnRCVYb7L",
  "key31": "3ieP85Ew4Jbn6uo46zchfmqwURZ8Xt1vTjNA3w19ff8EQjM8VMfHLb7XY6WrXABTKDT9EjhedmhfHuyVfuMcNkb5",
  "key32": "55YyAjxr3WMiBHGcwWGyBKVKtUs43UUsug5hiWrgGUj51jgq8yTPheLJeRMumMcbLCnjwcY1kCofVpWyrCSuMMT1",
  "key33": "2q91A3deC5xvWo2sVLcpkqNT4RzXZJDySey9R3JFT6TNv1eyMZF3h67pLNEbVyP7ps1du64QyDPkHZqdcTP5H8ip",
  "key34": "4aQfQdx59b7C6YCixEsCXjJR7RjSCZY6G3re6bRu15GSZmNp8zffh6XAoede2ui673qWq5bUQ5m21885nAGqAxY4",
  "key35": "3UPCJYYvimGsYeQEKmgn5PRq5cYJQiNHfkWy8o9ocqsXBiqC8NDc7xj2Jzjq2w9SF8c4Jos6bd8ArE2dTnmPkzWF",
  "key36": "22aC98uvqTnrVPoqDdPv2Kz3x3Z3QKDJHmRe9bAASxTcYUan6NE5Jb1ZLyqYm3gD2oDWuLMfm1dXpsTwCGBERgHY",
  "key37": "5YhvS9gc1FwwDmSHifsGWRNxWewXySXHFwNimUdar8FhR2RgwkXFsPo6rTiz8drwpaJxy32kZeSgsnYCJKTQ2eYU",
  "key38": "2pXb17Xoqtvmh77REBSvsnkQdKpU7LhqXeSnh7dTdtF5gVY2cDzakLQXcj2x7ZSUk1s4HgsmESBWustx46vihGsk",
  "key39": "jveZqc6cWF9MUjHxYR6DNwaKQ54bbP7FSFqykz2kJn74q3uQxe4UuFPaGUVsy6sxGHk5MkxrSwpz4YEzDqcLuJ1",
  "key40": "56Co7VFTrMiWBoyM7D1rk6qL14hs7oEgW6DbTjusw5s47JhayoxaoRwfa13JsGpQwJ2hkubBHGqoHrxGzLQWeFt7",
  "key41": "5JFuRg6zcHcp5fp88fGWGX3g1hMQfjEk9S8k54WUFKQJKxzwX6Gbipqu4H9s9btAUW93v1gVdqBL5qaYX2psjtxm",
  "key42": "2Gfd9pmNYC7UmbtjoBqxgAdHAwHPRMWyTkn1JvmTUXRNybwizzAQzyEHTeiRrRcRHAYSWMiu6PJXyxR4nUcMJnnW",
  "key43": "5H1rcmZCnqA6gHSjZXK6dp44PtsVPEuGeDtDmckUGFrfhHEWu39jkeUZffsekJ37y7tuWGPjRbi8kyykmDNc7FFZ",
  "key44": "Wak68vtRiuSGYavEjCFqhAfAovZFcmUSicq8Zbbr8agyZxsCwA91Ro56zPGct5BbmJTXJKiEFvqEnTzNo5j67Nx",
  "key45": "5wsAKSa3m1Rc1TyZXSSFX5A6zXeq22XTrPEHYoRxY5xJRaMTo2NKPwn9Mgf8j6xBq6d9Uveviqu4RRsjUKbGZdx2"
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
