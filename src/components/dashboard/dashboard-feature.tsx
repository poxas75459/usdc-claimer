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
    "5aPNXN1V89EJYWM2pz86s4J23fk1Mk48Vq4MUci6HWyeL2aWHJWsBDPd3JjtZe3dGkDePEaDg1L2EWemU99yQj3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DrsfXBRvzquzsdUDwcVHht7rTLZkF7zQXoEYr91SMEMov6cymTvn6BqHPSno5gGzVJeywD3rpJrPX2sLq9e1QYg",
  "key1": "vvSgjLau645G8dRDxuZozPU79eh58wTkeqjrFTKv4S8559He2ZaP4xyrvprwLh4RxVh6s3v7BK3KFCp4xSgQwc7",
  "key2": "4TkYdHuRDRfWsnkC5WJQLW4zJzCqUwCz7JwRj7PT4vxRvdGVCUcFTPvT9rtZ9fv55gbuRcu8aRbujBYiSTyhsVcY",
  "key3": "3udo4cQq6sD6riKce478rbgfpjHwC2xZjwK4uqdZ27fVtfFNutmhhZXMGLFHJC9AP2AsBe6uEiebwmdJ5u51hygU",
  "key4": "5RPzvNYY54K9LHWogdJHWHpPNh8US5kLXJSTD1SR1gX59tUMJHGyGULboE8uqx7marRAVJPr9RTLvTJtsfuLNkSb",
  "key5": "Zsmyk5Kx3kvqb7kE2RmNGn7Cd9rzYFF57YhvqYtspAkRdULUitaGsttWopquA17NMBCZmtvMmUR6rDz5xRx55rT",
  "key6": "4vsMSzkjLLwXWHydxrv24grK3TbeBuDL7xtYUgmye9Exo3hMNwrB7Tiz5BfbNidM69KckSGKbVFKu9QPT4LPX4Ua",
  "key7": "5QX9LvB7jMTjr4prDC4HYcJqY7zT59HsEsSCyhTbhCBuX5kjUDuUfmoXmTmgNQzxCCqgb5fXaYaoKgWCTFvYdx7k",
  "key8": "2Cve9kXxG9yWk68NLp8NvQnQ29AYJUteEsv7oxiT6sgTK5c7FC8Nqp7VMGs7Hsd9dPRMrATFV8ad596hHWvAcS6a",
  "key9": "5LkSVMPgyTrYxp7mroWrGCT2n18sUpHrC6rxiJQXnnqg94KxC3zT7mUQMJbZ5XpfqKgdRg44rv6KZ3rAbLVUpqwQ",
  "key10": "4cER46AB8DZPMefhsiwh8fkbxHkPaY7CEQBhL2PSYsuKk8Cb3tz9R2ot6YHarBdXUxRbhtAzkXXTunWmnVzq5pav",
  "key11": "ZYE9kiEjWrbNW6gkBfqDidMXYz86To5Zp8dwVQJuUNVT8kMBRpdaYLZQdP2SNNFrsVoRGAKy9JkreAdKktPAg4q",
  "key12": "4Ahu1vegyMFZiykk6HofPccQDdyWfFHyTaDCYDJtrPpiA9qF6mWESoHdDffrZNytNwfcsgg5tsdPyFoKMJYtCwuU",
  "key13": "4SCycb3AogGBjJ7L6XREi5HGeyDjYktNeazuSBTvGLHQv3hphAFAprEQuqFJWMJSMyWP6rmVLkUZ2pphxz76yCyE",
  "key14": "5tQuegLYtwXDAuUyuGdMvpMfJ2Gaq8SybVQPcxqZKXKAYK3QHVCUYnsYbgHYHbuKxB3WuKrXxUQufGv5REZNpng6",
  "key15": "2iNXCeUramDR4L6Fop5v6ikwRUDopiTRzxigu33a46UWkfzz5cDCLb8TxeWkGtBMNsoQ4BY96iwkmyYbyTB7kgXN",
  "key16": "XMHJF4EGiKhYuyTeCErwmkx2V5VorEwYcDgq4yRakYMw1BeJwyCYc5GcJ4yyyyEHzFKbvsLmLU3XD99gH1zR1cY",
  "key17": "5V4SPjmwPcKAAxboQXx55dL1JfXv1BL2pEkkVHSeRGkbqYCtXE2QkKiiJffGojyJSdshiNPu4dbSgrcRZdQsWPZ5",
  "key18": "3JEXxqHryKwBbP6n5oWmzN3Cz1v7PdYBkapFYxZ35nmYt34vves9mhJsd69nqVdQHtBfhL9azvC8PZW6wsSykZrW",
  "key19": "52xT2qj3QbkShxzGdM9NbGciTH5Gfye4fhLP3TLyyT4UgbW7xUQDQt9R4w4aDfBQXJF6eGofo8trVXXkhamroSMy",
  "key20": "2Sy6UJ7XVPiayMResAskb1ADByNXRRPEvERfXGBFz8PUpBsN4EKzyzdyqAfihxf3UYjMc2njZ2t1f3AQ1aLMvYKG",
  "key21": "54ocgPSY6P3qUXVaEZ7gf6zNyNXHUbWTH37ecPw7KJhfKhwf9VxuEWvkX5D5pGcGbC1cMmSA1bF7gahSVnEyXsUp",
  "key22": "3xU2Ec3Fd2eJqGxerbAeaUE8wkUp3Zef2pWYfWVT4vTmHH3o35vKC1yEMCvJkszfA6qxMTyggcojQq3w7XMRJ3F8",
  "key23": "4vdBUV5q7vTuHLtihdEo43txnWTvjmgWxkSK4PNUWfUkgP4vX4xGettXrRo8yR3MXPbJb3cA3YQr1cmdK21Tc35h",
  "key24": "KKbsNKzzsJdwQbCBpCk2886PWEKf2W3tpE7JXr4duwAutMMV9HQHbv7Z5xyjFwzBp1xbzbPh7zSoChXsHKdnavs",
  "key25": "5jxxtaUhobCu14frEKKtYe9Mtgr5YLceGqJRTj5Jzk5qrxnq6FC1gPq5y8YcF7HrcvcUViXgahETfmLHtMCQfD6R",
  "key26": "obDVkndPB3X7wuC5xVfwh4nokGasSdXiNtJPckgcWjYFBDzt7mNux7oL1QsSkDRFu9FLNZzybiNabnP3jxd8kyg",
  "key27": "o53nKp2joqkXXLEr1xtC3yAGf9qtN81VFDLY3LgMY3esYetpaEoxZGJjQjdAKbeViZ5VcZcvj8PFn1skLnJwjUN",
  "key28": "3Fhki719MMQUCP5rGrM3MiVr4yLWsHmDiURV1GMZgU7B6Gf7uNWUbw8McSeFbCKiv1DnmkwGLyd7L7gQfvX2EhY9",
  "key29": "rQHduchU9CdQ1y42BtUB4V4uVpziKxDEr2kgxTKXrXZjhmUPqRqHcfNiQ2zfGfcCJTAGz2GcuM4ni2edhVcAGaE",
  "key30": "2Dbnr2cV4Eh9oY8nV8CUbmk3FvX6pk9h7tpiRRmhDfVa7xrhGebUSgBXP7Jm61H5d9Zr91AQ5Y7CCrqdMTRLQUCC",
  "key31": "3ZSJhMRCvi6E56DZuSbZrN3tXAyzwUrYG5nKuxmpgB74rGb5LPgnxcbwGbXZwM69FeogsC2541TCEDdxX31S4jQg"
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
