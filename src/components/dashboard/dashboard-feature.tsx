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
    "56pG7YCqeBussayhL2uZLs4nLcqA3RkdrZ1fB5UufwWoKsFbDUZHqhbeM5v7s8kbEuMqQMgANy4p6VV2emGah3ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ieZCsexMQvjyiun473iaWo2Boym2Cu2qG4xhM4ZesLMmwi2YiHQSUaBt787tEbtLHcy2RPpap93B2y4TnFqdX4Z",
  "key1": "288f4xxthP986SNP3WqjcaSwwmc5FNTbSg8UVqhJpLPc6fD1r6GbPcbtKb8FPMpRKGTB9bToEfPBd4T3JRgwncxZ",
  "key2": "35j99yBwFHBeu3vWV1R42dVY6NiSa28Xc7SyAD4pLLAh6vBBhvgK2vZTE8eDb692ibFnUhztN1iPRonS3QFYF4Zj",
  "key3": "66XUwR9Gy9HSfg6RT3tFoRNc8h4eeUnjpT8gY4AboBoVgfaqVS6A3BJUUgs7sUojzz4QxUhCLLCW1nucLoZNsaXP",
  "key4": "EXwa3wsSnRvpH5ewg6mqCtc6U7RU7ra3oUpUmZNcZDWaMAGXZ26hx6yQeMgmK5KFrRnpKhiiFUa9tc6bNwGk1vB",
  "key5": "59hwaMZvaxnaLjqjMsQNWEVsGL2NLLDXEdeWvbVMGGPHrz73RG4yp3PGELwTkmZU2DnEQ2TiAzwZq2vog7Yx1d51",
  "key6": "5GZ3EGydDb6UQRpHkFGUMGhhNogWRwtcdmnTiBKGWQvoG24pAZkLYyzVc5xA8f76K9tv4ePhh96ah9Dd5Y9Su3zm",
  "key7": "nhHPXh4QYYAisTMNGWt1ehowXYyHgQCQEdHV5WTACLootC7VRma3PWoDKUuCrncvxCmyts7ZJkPXb7q2fUk3FSb",
  "key8": "V4cuag9U2jEiiXuieMA19HkY1EGojpbDHvNXdEHJ1ni3DA8bAtB28j2yuxKvYtvCTXPcwmT1NSb1ta5crQ1vMan",
  "key9": "pq6L34CjP3fbKiiS867iL8GeHRnq9WzJjPC8eqtnbs6J2CGicSts71hWVDxQjrr9BbCWovZ96tpvYKhuu5BAisU",
  "key10": "4DU5MwgSpVG8MTHPRJ3pZDa5rzH6bSXSazm4RQQR5QgEgKM4KZddVkabjMLstVPEv7Qfwd2XeGwtgW218GFaU3rQ",
  "key11": "5t8pT1GRCEkAry8dWGunhdp6pEinx61PeMQYgmSjFDeRGimapVmhg2owyjuK4rQSgQCt7u9oyqdg6UobnjM3Z1eZ",
  "key12": "A7jxnyWskXRdEyUa3bmKMncNDbk6qm2me79wksgr6GR87N18zE9614Q3wvnhuogJTcGuYNsNcuQxTSaKNno6No5",
  "key13": "2bTrRG2xaxnAzQCpsHX2xtsnxHsHaJG8sMwmbGhENMQEMkr1QeRSo42fbCZ4m43XggGGywtY3McgwFnuNvyigGeH",
  "key14": "295GVJtkyFqQYkq2qAhwHrcCZGnEPemzj3yUFJtTMVCWkbWHB1eB6feDt8vNCqDNXJPmWhc676bLvGjhiN5NZRhr",
  "key15": "37jA9iVPLhWvnRrw17cGDacRjDyRpAYZZ5B3pDLjg7M1BA3Q21B4UQfU1vCrzNEi7ECow7o68YMMVYQpSpkdc2Y4",
  "key16": "3F63wVoAJjBSeRowbaipU7mHG2S9Wkh9zJ8cF7gBvf8Z1KAWnHpgmWGdyBqeKGHbwgF6F5sFeyQpMCgBhVXwkodc",
  "key17": "4tiAP1kDWYgD173QxoqsGSqT8ji6EuTz7hiZWAaAyyivvG22GsEVjuaAbqJpmdnPSZ5RoZBURQGupTmkqy5HSDe",
  "key18": "3w946zzhA7Pz2zaeU2E6tUmnA2Adc5riJVoY3GfWnRKGtgXJMyBMyutxahS2hz25xtzVhFHkPf6Jr7QevX4C5oNa",
  "key19": "4pjEnwGqvPqPyLKhcAjW7SdLHrNBiX9SHEdhY66ptyt1XoG8BXZaa7ewsC3JUWFJG1D1NTY5YYEMVfxgcE9EGqpa",
  "key20": "5u2iFe5FEUEEATUPofFBmEBX8tzpPy8qVqwJ8iMcYJRs9Qt3jsxiCbK55n1ZDxvPyeXKUb5uW1RKEt7L2ZFAkrKm",
  "key21": "4X5HzJkqrPJPv7nGxzvNKgEcVdSprnaUL683vHPJmnxtDd5aFwwYKTpbyBB5H4s8tpGvwxupyeW6TdRcXDwLYeLh",
  "key22": "4vnMG99MAxVHuLyo428ftaFfW8Nb621BbDehvYMbciphWDrvUafP9HZGdyH5znSTRwmRFNB6XGzTb78MrvbNanVe",
  "key23": "4miBZYsgsaRWBq2YvR5zE7E9P4kh1rRJcUSH99o3zJBWNqoUPtYNG2h4ZB2L6SpYr4dmiJGxj9VgEn7gqWJSbRqn",
  "key24": "5NkYs9UPJuBUKXusfND3mxrCZG7hQsNmRwoNdrdDNc1mup8ckCd84TdeCV4wAr8BykFpRbHonzTBwUhQ9n7eTG2i",
  "key25": "4bhicwVLZ7h25MB3GTPpBJvYnm6GFPm4ENR6rb5rE6niHSSacT4YTqjEYX45bXK5jkGtSQsdDG1EpnFyn9qZzMrN",
  "key26": "59J6WMfg9b2qhUVc7t8Vyx7ggDjKvoJEtCEfvXbic6swN43KheETCcgXj2dgjNFSQMx585xUvfWzjGDC6RQxSctb",
  "key27": "5fj2mv8iiFQC9FpUg4NodYtBqoyb3oHHHkmFYQMPsxbkdPUyN3QXTRhjr3dtKfbLchknpggYdHLERnA4RqhPFjAF",
  "key28": "5tREGqLYNpHreZjRrjw44n99eeAxvyMvtwy6ow3PKZE4W9Lw5LmjwAbRSqmTJXtjiBRi9UDf7WpK2Mx953v8QfoS",
  "key29": "2rfqi2hJLJLVX3CEDddJf7xnb4MVgPKgUN7tB8qiK3fizL2kTcmJaAs4mediH4TxZjmNjWeYMV4BvdAsVGoBPqPN",
  "key30": "2L51LVLNovjcMU5Pzz1UATy6dnbgfm2JWnEUnH6jXwCjZxwYeXKVSt7E8YnxURFDoP3LjUgPpsZoamtWvfayc9rZ",
  "key31": "n2Kq75dbcXLr7yEmVq1SwTsHQ3Uk22EWCSxRSGrNmVGVEYDAhvj7eiiXjzxwRzLoS5KGYogcdutxY7uG51YYAaB",
  "key32": "8UEBf3n6LyUMNvHPu8MEtV3fRn3mU4gjH71UnQoZG6yGa93SR3UXw9abVchqLtbkTX9dzEgQkCCuFqCLTkjvM2g",
  "key33": "GjUzh6C8NdUDydbMQ6LafAeVYHZDfusNXBBJ9vbTxKTfgjzPLiihSFQpX9XWjyH59axQt8cHxtgLRBXVtfEkYYt",
  "key34": "yPx1otKTFDEJJLgV1R4Gv5ugb86w8584qVf91EPGKjG67JqYJLgR1bozrHUdhyk7cNGkt11HUzzbZsLxy2Hv1WX",
  "key35": "mcEfM813tVhLBVUamcwQ1pBiQyAuBcgPDfZjq2TD5xb66CuCyT8UW1gKS2WPS4fhxYT7kjfwAHPA7Ciq7ZYcdYw",
  "key36": "25WVXDjbnsPgsga5y8awDQTzQw7Z6sWvXPcPZWm3Ht6NoHQt2qiVzsUpvs27KRCMCsA624xDzhD4DejH16rrxmEA",
  "key37": "5a4rNZLpXLF4VXgK6VrDQfDMeKqQXKAFfkLn4uym9GMPeHPuFwb6XnP1868LdHvEQjzY7oqPi9aA1mrYNBr72VqA",
  "key38": "3sc8HhxHvg2i2s6gGEVPafFfyLWVqLmrCCvUwHYdjy3VD57H2u6MWngvVpjEMKqe4wn831HZWDbK2F5VsvWiMHfi",
  "key39": "5a6uWnszcv9qLwhfpqYvK52A5pCLVASWBUhJ2qmcUQZayczSprqj4aXKUR4EtA3qMH2eVXsmFhPdRbJtdwWWRtjD",
  "key40": "43GQWhnqzwQsyiZv7FxyJt93TUvS5jRAY3dPzjJZnUKEgLvUsGmnKAocKbw6a6LXyMK7hH6jJwgQbjgN9RibEDjY",
  "key41": "4yMPFSWMJxEfr18vZfZyX3wdcUiZwa9kFjdYh7t7WxW1U6qdgBc9kbJLdkEAyHyn9o2drgqK3zWT9WeymyHpA7kn"
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
