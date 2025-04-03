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
    "4FUeWdmPZ5kCYHeysf2ewrSyRM2yuavdQUKP1LcatiQ8sRCMDPm8Z22viTGeHFTRbLXvZ42cQwbPMxjcw5XhjFow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BRLwMMhoKZ6D82BkzZCF4gZbNMbXT7kJZCfXBdvvpinvHiZi8pxq4Tar9JBhGJ14qUouWavZGrQaswTTxkMQen4",
  "key1": "cyUurrFfLUVecHojaoU3ioab2L7vP2tUtCgSyVcdPPKx5JFsi3NdmKUqjmfLCc3SagkPJWTV7QPfT1HfxkMWoMA",
  "key2": "2jBdW15CX3dUM5GPo1Wmb2d4YH85T7MLo5cbsYszNDaZWis8JANzDybXnafiJi9EnHne5t6vum8AbUkcheLqzfTP",
  "key3": "uKqMWVgdSKMrzYqoFFzqWoxNHKnMhEMzmbefs5PX1ynm8j5EWVxvH33yV4nij39GGKPekVXxENSG1viecm5wb6Q",
  "key4": "43HKGXKryxc5xXbzeH5t8mNXmY5YRhXQczeabC8U6EGcPCkoFJh1mdSkfnnEgUjWV8MUZkmTquveCcTeC7Uae6DD",
  "key5": "5yrbT89F9iWyuYpD99qJv81Ry3SsYCtDUcDuV2XqMc4EtS2MWTm6pWK8ei3J4ftYMJCWj4CceUSNDYK5ndU7AYJS",
  "key6": "3MLEyexfAx7gge5HixiUje3Vv14dR3SkFmCc85nTtMQ7HgnULRWBGaYVJA5Kkji6HMgnZ4ZjwY2pxGviidCRKZqt",
  "key7": "592spgnRSXBp5AKPGkwvshcWDbftomYFjZSUoj8q9jtcJk31h7usFuGZSX9dhRGh6msHTCkv388go8c2AUUkEZxG",
  "key8": "2i9q93cqpKLjbcGJ4p3LSwR4RfHjsUqiRyCNgexQ1DekgUYVs9X3YMhziSMbkZieuWGiq58Js1gW8c12YWJZq9Lf",
  "key9": "DtWuzFDY1y6zmpogT3XvR4MUsbQsAfPuGqvKFt7r1ULy388JziRJ8So7K7B4uCZfrm46owRFn5hM4zeMhbpHfx8",
  "key10": "3x81xTLHDzWdc8nJCw1JCQrgasb7ZURnfdWm4Tyex1yzwMnCwQDLMgfvA1WwwFs1GakX9nCbqQ46aSCahhsD1WrY",
  "key11": "3vhH68ZbSPesM56whcsrD8ceeV8ew2F4NZnaEyKQmVoXwAWDsNNmTV2Z6kzGbBNm5ErruhUk3hhdzTTzV6bcJURy",
  "key12": "2oEneEQboz4PojJRh82phWcL14ncfv1WDJuhhbwoQZyGVW2F51RyqqG2Y9QXKmTCb1n2G44wb4PNtqeK6vCNYkJ6",
  "key13": "4tZXpa2Sy2Pce655cpqpVHuJMsGReyiwBZLNoBszkCzKehLD4pb4Vjpf8RaG2H3HpZLep2m7sXDuBoCRsSfFmfYW",
  "key14": "hP9CaHtFGcKo9TRrCrydxgByLtphqTuhQUNPuHUU53quAzpz7fMTLhmsyxPL2yFPFMF4P6SYWE2GLg36zYCF7pi",
  "key15": "2MiNgr9Ssp7KbigytAmQVySdYeFP3ChNGsQ9Mzm6Vk7tY8V3j4WRfFmVwjyYARaWY352w7mU3Gwj2FWuJNHMM4Q6",
  "key16": "4fKLsQCbsLaYm24Qj8H6kyfJGcm6z1EcZUn18qU5sFmyNG87m7mB96avYJUX6cqXWEXJPr9SNgGXQDP7X7dpKsVe",
  "key17": "2G8DNT2nuAnMT8yjTwpYK32RpFbggFPJZ2k3Vr2okMC5VZgqZ6JQPSJAqwhqfHg7i9nfaDFmGJtk79JVPR49YE2c",
  "key18": "4kSba3VxCdaiRppDBKYPZx7ke9gnov5jCoKXz7DEJBLZYkQLEbu4AJ9p85NEYtDGW14VPYzT74Y8LvffycJASc9H",
  "key19": "4oUViGRbo2Noc8Nv3PaSGcEK8KGQwF23JCnHjhMkkvL42qhNaivanTxkoPdUm4U1TmA3VACLu7zNu4yQgTtJiYHX",
  "key20": "31YJg1ahNigg9sc1brxgqnfoQtgav1uhzT3u1ESknSmyVigX4oUD97GYsVYrY6CaxKa1uNYvdzdzFKS9uhDJenUa",
  "key21": "5n1qx2pgxMSaTwqMSydAFp8fSTeEDDDcPK9TyMDZkzMf4NNtQ43vzGPbzeNE2xaZSwEmpcU1Qsm2bhyyyqWqpneu",
  "key22": "5WeWyKH72PhUZmjco3J4Nva4MKZkXw3VnT8KyRTyJzHg6L1fh8LtgXjtsv7tDAS9Ugz5rxTE4Kii8tvvJfcFDDBw",
  "key23": "54FztoHQHA533FJywoEqedkML5gKYFFxrW97sEujDMr85TrGy4yWRsU1PVQ1u77aDCjxLSDxL6J9TAGD2zX8ccVv",
  "key24": "3P23ooqftmovfrBX939zLgdfowPiCxv2XE8ZqNnpK7vpNpe5Ye1XjXHszJvw5HjGs5QJ6MckGaMhhj31PM48zmDu",
  "key25": "2U4yvPp7Aq115td84njtUFjQ83ezvJc9btGWcWnouezThkRje7Q3s5JhfUkGdnQrWMSFz6i32DSHWHfwjhzDa4xm",
  "key26": "NBsodbEMZVjbPfLo3f9T1DHcH6YzHu26VUNe39NkWHTMH7LTd8fuznWYgVjCdAFS7J8gCKEt6KeZQDkMFecV2Yh",
  "key27": "4xgFoFvvjDGFES9jHon7fioMexTe2jku3hPzWJtmib1fMNmNcf2apnCpWcKNdWGmDWFftP1ffFdDp2XqBdxNm4Pf",
  "key28": "2mE3duB3VMXthpmU7yqJsqCZDhVjaD44S7RgeWvSgUzXTfyYovbvsZBUVFeFR3RkDFYQCfDr7gYEF1VHJaFTHu4C",
  "key29": "4r216RD3Nt4XPEJuPt6vMjHf4Adf6cjp1iG2q7G85PUzZMyycaw9ikBij63shCHC7wSnuGWV35diT7bPXF8cNJHo",
  "key30": "2EkummUjGrRcaGCKaFc4K5poR9DNRetnpKsiNwCL3fFLFYkXUnYWMjVcjduhfjTJUujbHWcP5N4prhqpYsfaAPGM",
  "key31": "34pnKCgwxLQPvSnTrPqTHZYQYePvqmPzqQWUGywzEv5JyGa467gY2KyvvvGWhC8Zt9z9n769aWyVKRGfYKJrFtci",
  "key32": "5sJVncnEhfwuDYiqp2rphpn1wBpWtLCabWCZzEcJTuEZ7BvkCh9oFtUACE1oa9EjBqUQi4XwfP4Zds5iarQutenW",
  "key33": "3nXsXmn2xUAbvvC3h8KkrDpoyhiiQdcGg6g6qyrQQ7s5cTgMhART4xY8qv4LXnSZi265Sp2gUWsXJwzwQVcai8tG",
  "key34": "5FCy5XbGsY2unjtSLSqyFoAgvpVQo3HRRCiwTvojBNx1oKYCX1bZzzApG4D3LdXpxqhgZHbY2DavrL4tJBiAqXzQ",
  "key35": "5wdbkxEP83x8QHtEASRCKG5S7Nrg92NVoQbkmWGJyMBy8jw3vP1V3FQEat1bumqbFHDJ5tMBSx7dbjy6V55KQemp",
  "key36": "2xn787AXdhE7yESWGDN7oqQDrGXQ59vWdaDHzY5n5SACcn79MudCzdyoU8F8T45RpcGPdrwqQvdVUuJ5mB5rdHmb",
  "key37": "3WE6jNQ9gT5aGjD4X8hRLvrkMjYU1766RmRBrMWmiquKBG5gmVStX1MA6wrDL136ZcXhwKN3kT1wmaRzNR4oNWGf",
  "key38": "4U368iuLVtDyu6uyLf6igBBK6p2B5D2bdYigJEqoeXqFsaYB2h1MqtCrDESKNvMQ7n3aw6i2fCPS2o2LHtJbN3fU",
  "key39": "2iXuCmvBuq3fuWueDoXnjH81VyXsFd2AHdi7uS85kDdPy9ZFGHnKUocXMLg2i6mvvwWKoYzHJovgM79PgmAnog4u",
  "key40": "3jRiKAxfgygNAnNSQDfrxKsVDXzp1nyZSoyyAHSURqQQ2CZsVhbNmuXNKEyA8H5h7kUgQepjEM3nm5FFfGjvbchY",
  "key41": "3No3Cy3dVtWyCEQAKu9yphgzTtBAN2ncN77sNnYtwX9i7NbMSsJUeWgbdjx3VCWEFCfkJSzvPJQACWoTEwWm3S7J",
  "key42": "2rninrVhsANj25fW2BxmwRuFYiudhXdY7fev5zPXMbcxNXq6Ah6qgPsU9jgZESoLgmzxuPQhdZy6TSXcimACA3dA",
  "key43": "3DJFv94vSgdPT3fFUmVCf2P9Jaw1WSC6WdyKQTgJY8FW8LUqGpnKPt2ePrTp978JuRS5NpXpNCPQmtWP3caZwK3U",
  "key44": "4h312R9RGiLuxomRu3f9ANFDR3PZGAdENSX3ZXXzaP6c3PrgXczi1PnVHT9dBmAoxav9CX3Le9R8ousKxiwXT7W8",
  "key45": "3bRJ7Ej3KLFtCyTqBit7CJ8QghzG4JHvFJAhNLDSy8vcYH2w4VGQu7GMyRTuxShAxpyzw4XF3qY2EreHvvv77spn",
  "key46": "S1nwC8GVYaxyTdG9Bxj3Rb9f9SEC3Nxz9Cq8WK5QfHMFYPukVCzrShaMh4rXmn3VJBrwYyAt9ecFMTUDikYKR5k",
  "key47": "3JB9ax1ApSUhKJWjyH1ftjJPoeeqRV6jeZ3Lb1GoKc1TTqrbatYTSJeCSpwi53RUmYDFeNrTZcbmLmgnDfeG8AXg",
  "key48": "z4eLQUVyLo8XsfZ68km5No82iJqqbjf3JapeoGAUiTWc8ZTz3xo4rTtb4p1ePKun2Z9k9XZC5VXzWfVby4b4LBA"
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
