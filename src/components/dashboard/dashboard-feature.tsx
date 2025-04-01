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
    "JdJoGnCagesNPPFgXMKQwsDgAXe84eTS87PDUsQE8kdTQRZ8NNg4yQdPzrWGwdnmMmp5LevjgisKbWsE2JNZj8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dr7sQcqQVg2DUkrUKYK44huidPCTKJRZqQMxQnWh7DaWWkiqFVcUZ25iYSBbcaiGgBUud7gPmkHV1gBdegJBEgZ",
  "key1": "3b8cTGJ8YmNBkL9L12eqxfhXyxay7f4uwbjc1c2qLz2SKTtgxhsXfDMukFp5j2XXp4zS3nbongE9XrwvybJsu3L5",
  "key2": "33E6igxHBX4hFdfFh7o14d1zymuqzTGFZKaaDxbu1qYEcRLA65riFZa3Gasg5ZhiHjvQbcUwEZnAgWfKwB3ugaDV",
  "key3": "4MiWpWWBVgniviwnB9zo8PybA6rUhEBuimWGpKiBt4yLVcu4KDAFGKBxkapiXgm4238zzPXAfpTJW7Nh1PFrTRb",
  "key4": "4tSUZsKD4QUnFFonSmUGRdsQqer7dTt4pC9YS7rymiEqzr6zxr17jnk5FFFWYsLyvPQdwDwEdoeGnRnq61SNqhN1",
  "key5": "HFPX1d93wstUuFDLhmQAoCuUub5v4PzikMSPc9nnSrovXs7TyanPscCidfkvDM9SGyB612AkWoodf2k5Ybxg3mQ",
  "key6": "3tneWnqKqcyRCXR4KQEac15WdNcWSKFyxR3emfJKtGR2JVpSv1MSNNsWaLQX1hUEztVu8ZVGuqFDiJMKqLP141jy",
  "key7": "5G7A6hLgyWVXeXdZm7tLcUF2VKwY5JLkUY5XKtY7RYW27a8XVLnXGCjM1PG8rDJMBCQjqY1HczvqPfBCHHMvrc2x",
  "key8": "AgP7Q39DoN19TdtzQ9pyoYVG197wgSFLKmDTJqcHCjpBSE4ftdAGTPcqGevGBGQNx9KrKJhkrmU1pnkGcymQ7pw",
  "key9": "DnAnRNH95namcKerbdX4zPnHX7amkMgGLEGZPjmVKG741hMLp2SdqNWk9n5Z2ESVvQKnCqgWUY7epJ1BcJ2EMf4",
  "key10": "hKzGndXzMKjhx6i6gyUUrwVahfbnxrj9LHYuyfSLZCgZ1kkAqT2L4wWmhHR6T1FwMUodjBv9efFCpCCt4Lnipst",
  "key11": "5dNYpimQFtrJ7PFEo5TSUNp9rnuWqGCT3VhNcedpakSvaFzUV2VCKJ3BHeD2HLmXQCZtWxAyuD5rN7rqhUViX2wy",
  "key12": "4Z1bxrQC2rieCtyWj2r99vQmEpPAvgQcBp2jJVGfN35B2pmrkNFBZHDqjRXZnz5XtuMYFfmdKSNfZiJcNDdRTm89",
  "key13": "5snjKVEDF6YqpuinYHCZwZM3A1n4p1VX4xrrx5c75xMkraGjUM7cyhELoJmfpcdZFJ3NXD6HZsW7N6B1cxefBtqY",
  "key14": "4YHH9YzkvAe1yXrjm8CqdEFSjnubYN3qVv7id8d6W6j94FWfubotb1zmQZzDUBzUzjey5CyQPG2uyaXi3ZTBgzmU",
  "key15": "5BnU5k9oD3SgQtSL5zWBirvL6FxNGfk8n848JJuADrskNGtwXhWdqKnNvfVbg6qSWxM14L79TxhR8B18Kagc7Foj",
  "key16": "3xQs1gGY9ZihCtDvoSSECzmVcaD84gSocpwMvhEosiBiz8qV5iSjkEY17GVB9rcF4vthDR3EiQjEYRTW44BXhrZq",
  "key17": "283qGD5rBoDDwYUR3xP1v3na6Uq7Zc7PZsjZ52cfNaz7D7LiqBiSmaj49RwvGyqc5CwhyDzwrRPYwysxYVmVPsPD",
  "key18": "5qJtjs2mb4SCC3vGc6kQi5sziiUDoGDDvS5bqS2eWL2TRgoK1vD1f1necsdjJ3oeXecPLMchUV3CeXPxLcYLCdza",
  "key19": "PWCCpLhVewve9X3LTtY1JNeAmGLazwBXCMbCFaPaNEgcAvmvkFZpSsaEAXthq3XiPDBZq2h37A4VmcHBfN3LhTb",
  "key20": "9QrdEhg7Gt5vfb3fGZWSexzc22Q8B6vHbK3xBJtdMwN37qZygaLF5mjkLWL9CQHVMKr4pidg3tNVfToidzSMQeJ",
  "key21": "58W3QRXWZw3emfCXJWRoWKjmaJ6hxTxDiKXTrVNKdy9tfWgv4MnnSzCKm3zrpRi3ZvCD7FcNAaafrCebqLkkzGvB",
  "key22": "3j5qP4PFwrybKWDDbEcZxrjH3Re66dgSArQy1xkh3ASjbWZPmRgjmftrpTK4xtRxS8ET2vSWpTLUuv3KAutofABL",
  "key23": "3Ezt4ccPSVdVGAyJX84G77iVdxKvS2rp9KaVhXeoyh9MtiZ7vYana4gecHBdpkVc8mSAcWpHFNmWsUAqHAGpim1Z",
  "key24": "5M1iFmvZpbR8Mg3MdfvgHV19cbkXN3c1YS7a54B1jpLkdaqYsQVzuoF1Hti95od3uhSC3AX6srqp2mEH9gxrVfoy",
  "key25": "4aACAzNw1jMLszttWos88coVkDSVJ5vHpabK487GmZ3GpNvbVmVy2PPntiSdYG8GekGRDSwfKAEM3UqMkg6NNjbG",
  "key26": "4j1MpNUf198PxfoEtXBgan7mjnF3JHGYFybqQcCcNK4x4PcgsamthKL6MJirJAYyf8YEPDwDVMg6v5XfGpW7sDQS",
  "key27": "5Ut5WEbLbeAfbyNkM6AtUurTYqVJUrNeKgFndDgThnAzCThNXq6TRbGzDsNmFMHowfH6ptKjG1uLYPboCVf5kTrx",
  "key28": "27thFqHLPdpBuBDDdKDsX3MuSYfWzUPRkFawUM93ShQRb1D4WwMVHe2sugp7gdNkqBUGEgiFmpMwwrYudaefR7HL",
  "key29": "5yK9UitNg2xZ7SrH7T1qsURQfSyeu9qDDHPPfgCucZP2Gcxe3hfgvj3RRxwcQSdB3USDjTeJCu83atDTx2mX9z79",
  "key30": "HAamfDWpgX9VmwmgiqQB5hBdYX3yu1LJGt22pKfiXseKrskcULU1vRwj8wNoPEYzdjLRkc71NF9zDF7vjtJezd3",
  "key31": "3Q9De3mQKqsABQN1FyWr3LjkFeJc1eksEKtDyXG6uNZu4vA2pFSa9tvag5yUC1Y8T7GWBHdyv9XVFG9QQMsbnAsw",
  "key32": "3P9Sj6zRjGrGjCd6LbyPKWiKCS7PopAm6rzD8zHATASdNRdZMLW82aHyq8ZYiwYka3fFsXBWSjyjNbG5GYZYcAjj",
  "key33": "47RgsuoVhsM6rk9uFTAcFYzDWoGanYux7qY8kw32Fjir6ceiEfUbsabvXy8sBEACs2cn3TvwN2o5WveYbY42Hk6x",
  "key34": "5mKU5Edwud3rZx2scaba4Gu6bFmnE81u4fU3uniaSVRqn1Y3vmiBDFkdARSVHbSu67LFSa1EVV9VWs12QDEevbXi",
  "key35": "2knsPsRHg13kovvHKn5NgrhuKhK4hNi8fUXW9GtDbFBuv4fwVkrHLXnswo2KcDeW3rzcQeJ53iXb4YhtPfEj6USr",
  "key36": "2qSPbtLCGYrE1kvm85Xr5LPZ5Y3dNfgxfUJFUs9TXfb6qucVZdqp4PN2WBezWaQ7sHo9f6gnAY5eWBhyCPQbvZ1J",
  "key37": "4hkzpWNkfH5NNnGvKX7dhcpU7PzJBhtG5AfvQuCpUcHrBxUyWjbX88oHwmYRd4LfgiabHHbFS5HZGWxNW7r8CBC",
  "key38": "9J9NNQSw2wpjGgELyvix6jqhES5QCP2xpjHXiNQ1H7AgXiuQUKWpmsR2741M1JkecdhzCJyzssWR8X83sHKQonZ",
  "key39": "9iaCWPHTSBUm81mn8bjQAJjVCx38ygR1SHUobQPcu619e6EAZ51swsPbdKDVhCUF4aH9KPSAiChyhYBf3K31F4v",
  "key40": "43wPPvBHQDhyTEq3WJqTeUF9Y6VmoXa9NCdSkCs53h4LzXY3jvmN17AoW5zj32T1hG95k84zvivuFz3ZujduNRQw",
  "key41": "3hrGMfXtFZ4oJHwGbmpWzdmfUaLpFn5LwXveDr8rXRu8rdGWDhAc7MM8VdsFutA7M1wPpAz94fD939KyHXjE2h36",
  "key42": "3wkXo6yDBZGbop9hf4htTrZ5ov5wobJ8xg2RcuhjDKYmjKjTtqyvc6tCe5GFDc9ro58cTddWxu6qmDknFEYArFCn",
  "key43": "34xyWizhMBNre2yf7k71gTAAMxKB71Xnm6BRwmWFuGa2KGcb4uhXmh3qQyx6eArt5X4fPyVKNpm3QqauQPkoHK1g"
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
