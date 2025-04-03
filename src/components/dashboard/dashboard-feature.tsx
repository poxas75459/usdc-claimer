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
    "3o8wcKhfixX8VW4zMX49wRZAKHeagJFCSGnm9pPPVHfdu9HBwKKjDboKJHJtPLvddvf4gZbPSKGT8i3pQHCx9742"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbPyv8Ca4WpR4RrQgsKqrvRovbeQNtM7p6sw3mpkPdbypy5v3mdc2t8S35RELCAZGqL4RSpEpNTU36863nWjFfP",
  "key1": "3y9NwF7dd2zm7mnHLAhChYa7Sa5nDxd62F19SUBUM4VYL5q6zVU26uPViJAxtZPYPpgx2QUCuJKWsFZJp6dskAhi",
  "key2": "2CKT1c5aTE61mqFzDfQmhFxjvhAbpQkkiNtHXwAzm7kT8J4Kw7E3SqntquuVTi1UM8otEoQvjkg4m2ypq6JeFNtF",
  "key3": "4RMSMHpdBYyyKMpsH7FBUuefGSBL1deH3G65XyupZheb1EWfZQGc2pb7Aesv4n8BXUgvvdbfkQ2E6BYHCrkDEdrM",
  "key4": "2htipVt87p8bKBakFM3YU2ycebyWde6s8DUyXkRd6svfcnNYRRpFyzdHAoRNCcLnwi6niuR5bBsfpo8LhNthZiHo",
  "key5": "4si9yrxxDrxCx251h39V5tJCrrehwG6FmLbdYhakTiENC8SKDwY6UhvtfSAntJqiBWWnW9NE8qo51EnUFBNsstEv",
  "key6": "4dYRKmN17rPkmbNJPKLzQjZPTod36eeyFuehu4PtQw4yQoJ8PvvnGGr32jGcRcoG4LaTdfwxmS4CVwmuRASQFqgS",
  "key7": "2bPeikAsPLpZ6eam6qZd79rw5mDeWM5DgwsmKTz22BPMGxCvWWxsyL6adfc2EWj1A4NAgjrhN6EwzQXT8wzdSJMs",
  "key8": "3s6Lay4TYCragpbB1FjeD2Po5k9y3MYMf6Kf9yirkGCgKXhLRGaxkpz6C9YYLWRhhEewtE5F97DDadXeupKeM7ny",
  "key9": "32p4YDraiyyvtQ6FKXE5agE6YcVnLkAfbL1MA2ma758zMQ4FRtei6ZCvJe9MSMMcYLz3QjvWuRXfyRMFNbAL9DCL",
  "key10": "3fMsk5CRxHGQuVhmGuYaUNBUzhh81urnNts7okf1q38K61dwkrEhgZG9P2MHtBJv5tSutbVFEq6KoofBY9i6K5Ji",
  "key11": "3nEttVqmHPb3rBPpsvM1iVhWt6d21jNcZaCGzgEfPDa4KjNUBeaLMQvp7VLKNmWdnxjJ8kLX2sPAq1SBwRaHYuc5",
  "key12": "3QxP3SPkGDaZmxDtFLUUGvNQS4b7veWdQD6962S9aZpW89J8AAvtg46ng6AtYb7UUFwFZptqYLfrpm4RKp4H8VuQ",
  "key13": "4exCj2bC4Bth17fpjXCEVnaKrkmqvdLawnNTfgyiq4PELoduiTLHQGBJWe5Rf7TGYKSo6QR6rztdg73gf5h4E486",
  "key14": "pJu7er23PWdDgBfab5i84LqHPDs4SVSAbc3Kr2izz2yXjqjnfpYTsnof3hHiXNwVRbyRKdByRRU2WVWs4F4pNUc",
  "key15": "5ft8vodeXjm8G99ND5rti6ywM7pifhSfnUwYDawukd73hVrsrn13HogLViQXu54w3xeh8NEXvFhciAH26hBLNBLW",
  "key16": "54Rc2thfLxFXeWzDc2QN55RWN3BS1yyJMdn31ditzEonLhzLFdgR5tNTj8KJKXRvqN14tTZd1SeZDSDy3ANnniuo",
  "key17": "39K8gpRj8MYvsdm2i2pjtBLiSi69PZoCGyPeR5zYwdXNR6vBYsqQ9on6nSxnkGeRTKUKvpL5G1UW2BWe1K5CVsXu",
  "key18": "5fhuMVxxBGBzt2gBWdM6QCYtot84Ga33Cc3y1FGizsvjt2US6zeHkB8AVwFdvR3oqKZ1RGGpubfi9rzvRGrh1UsP",
  "key19": "3rgnzEBKVE3TvqsbPNtkiMGZTRB5sFNYBkvRKU4H7fc2DW8rCojk4mehJ5Ke9Y75n8ejvmypHUoddiTTeDd1uCSb",
  "key20": "SXuTr3UGrk1XVcLwPye9Z7haS6zJsQ73ZJXoft4mrZFNECTE52RkCS4DFjiqbAYxcsxJpFMt5yXbHCS3tEjS4La",
  "key21": "4GEFHhPDd5S45G8BFj7T1vDwhZjXHFXW5zeVGGqCSE8ZQRmytQbRase6HSdY4aLnxVzGLXiEFjqBk4rb8K6GtFdV",
  "key22": "4wEMFk4E5UMYLnRxXaQDSjgyH9XPUDMUhDWMXuX8xKMoRxq7BbJCKwjAcaq2mfJ8PfKBcbQUFV3rLPCjXRjkRTQL",
  "key23": "3g2ayfC1tHoLx5D9oLDhkH2iBRjtwFYAHih8rmyxjBBHg4raQ6LNMuhdy2V8eCegq2q5ggYSWkPD6WthHJBJpiTh",
  "key24": "3rs5JXA4uEcFXocJuB5QiHJjGZ9Hf2U69YD7iPKLKtYkfUbURGtYHB1gNAGmQ3h5ZWhEz96dXyqCmMt2Hhb7amLy",
  "key25": "5rZC4U65xavEZ4GKX4GtPtrFNuxZnZ6AtHec154JbarsuoikY6C4HyGGRD4Jm9RpEgLQYDj1cNMVVfBiLZhacZK4",
  "key26": "5sdYpEPu833UFJLSLa857cyDXPSUqDLKjqFE2M1xZp6WgEtMT9HYcDZoyFMQiQPqfMapJ3jSAZx8j7BmQ6ZtG1uS",
  "key27": "3K3smqKFyVAraCgoSV9vy6P3eq3KGqYz8BDD9ymWrdGFWLjWVJc13w5v9WHEfh9notMvx7Lg1bkPSoeAap9Wn4An",
  "key28": "3bf86rmQawL6CPKq8DMEhDZgrMZhgLgq9ki5ijNMUf7z5BgH6KXHuPnwxa73o7cx3F6hGwN4noTUVMusW3Hr2pot",
  "key29": "54cqmGvn84ph8KbdccfgSZMxeNReQY7Y2dSmT9RfqnXbeJs2hCXsH1TqFRjicf3dsw2dEqC5zVXUWf3yQdUbHsgL",
  "key30": "48545t2zkmEY3jSszCV64rJC2V62cUaFipd3JmpPxr4BdevL2Xg2EHGvYDwoiPiw3uobVwpVVsRrqTXFjTp25Xma",
  "key31": "3HzE6cBodYxBQJWNajoqMZUdEUKrJUd6DdVA6uLgyq4Ft1NAiaLSFKy4CTNGepxVuBMhBhES8QcoFQVVDiHdWNrZ",
  "key32": "ZDYZgsGEP4K24ZfY79io73gN6C7g6FLksx4CWfNkzoxGHGsJxujiJfBZp3HULj3Bdid8VgRaCULrdq7vKgxrBdd",
  "key33": "5z5j2xHJLGi6Hzv5WS65L9Re6SAXBzKLwUQ4Z9ixXPDuwe97cGKhw3c1S5iAEXDHckwozshkp5N1h866xFyZ2ypD",
  "key34": "2oxQpQz5udoNdPcCv3bDp5mLMnviWTWS8RbAQjpAqadJHtNH2cEGDpZnaEPFZF5znvD4RccY85CKUxxadzNeLXHB",
  "key35": "2sDmafHmaYbSuuLaeFagMJugSHqR1r184QhjWLbdPURK91BQJV11cbZFbm3zEp98HzrnACBtDUmbT8ceDMnAi4fD",
  "key36": "4ihiZf8URL3FeD3mWjuyJmdpnbexxsz2QPGEHmQ7HvULmANXq1PskvxaVaSDV1aqVQPC324ekbsSZFFPXvwW5YvD",
  "key37": "5VKE2927ChRkeNUzSVCqq637YkPYN4MpAxbWgDXKr1avr4GiQhfTvEASi4tSuoNyN6pcbUNfNE9eXzP9TQTWM2jh",
  "key38": "3EsA68SREzBMF71htLpJ7FwX1wDtA4oGsaKcYrGmBnp8hXwjNSLPZDb4Lg7otdNa6xMmYmjMsUnKmPt2dWpMpnMM",
  "key39": "4NXECgxJ38TcPDecs2ZatmRuyyY99kRCCAYz91gwgzGXXZiceqTVin28nr8FVsKXU3Fv663WSm6bzVc63mmgL7rb"
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
