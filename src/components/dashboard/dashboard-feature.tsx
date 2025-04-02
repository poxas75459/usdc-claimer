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
    "AxhtZpzSEfoYnagHTg27T9FQev9jh8qst8Eenic7CcTgWSgs1cB3wZnjYPcYGrQyhm1FaX6iFa4TSyVaXFYwxh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrd9UHrhtEgXWqiE9iNVgTWSPu3KZ1CeZn5Xr7swwByACxfQhcvHnfKBq8zjty5MFGvtpfy8dDevYwh3yMGKcZv",
  "key1": "4u7W2rtSaH3tegqLJXnA78xdtFD5FGT43C9KJvFsX4MAdJSyhPHqc61DfFUoYpZq1RHr93gBxvmNxirs6M63Yrnr",
  "key2": "3QtpNtq6UYM6PmtZb7ypejWzNXhnfFNLdGpyqhaVWvFgvdXJTLoCKDMuv68nrQ9TUQoVq2TLfLE86FMQNzA3syGs",
  "key3": "5uiYfK9a821K4DSEPZhcyUrZGcXFrLfk1evbdExBnpCKiUqg6rqMkZ5UAGV79yNiy8a57AJPBTskAHmnLrGVeBkE",
  "key4": "2MnPNnPmDNit3gSndD48LTmaPgfYTCc9HAcdaGYBCZs5DBDnWi8mQpZEJbzSzPKRhpCPocAAFcuQxrbwWePg3r5j",
  "key5": "5WrEUewojj8hamnJxpUGH5rMkfAYF87r7u11D9ZAfEBjMuRWHR9AtP3jvoy3QRfGgdn5q3LZXEaNeHXdcHdDqFm1",
  "key6": "5xxEz7gR3SXRJBYCE7EK4QeYStVSdkfMACDGKQvyY8YYphLK4wYCRsR4Us7YUW21rxfeEZehPBCTyJrpYtuiVzYQ",
  "key7": "3EHwU4sYvBGmRLmUEAC7bn4MwKvGtzPTfQRM556n9YySzp2Qkj57yqLbR3g1Qd67guAbFiXjrNCCuDpK2Be5Mti7",
  "key8": "45mtwTwX5EWRhgwjrpb4Fmf3tYdCrozPZxZm4ftKAxpoYZ2SCfSgjuFZVDtzQfYkyyjzKSHiq7ot2wFDHe5v6apK",
  "key9": "2qRLVYsD7cm1YJmvN45UhZTNrbeThm61NABiPfX4Nxqd6rZd2gQmrXAdx5J3FVSEujjyVFfPApNPWMerrB5y3HPE",
  "key10": "5ZXWdUybDPsZ3qZdo2SwkVtgezrqR4UhNeuNXKbvRmvB5uQySyFLsJRyFGGfKUk4vThYWsC2EyTKZbcMoEstRbcf",
  "key11": "xj2mynqNxw2o5cGgYbYwkBWbY6uBFRW4bxdbDQvnhoxwBXViErZPB9EaspuWjJajStBAbhdNYnPTa3tHAhJyBPG",
  "key12": "62FxyoPPr9piHFfrgCRgtcah1nV24iVrp9KnPjjUWbPyAZVZaZRFMorfuXe6ApTr7TcgHLHnsUUspoqiW2JJCwrz",
  "key13": "Q5Ge1hJhuyGEhh7ErkLLrX52qS3eiYgZ7FyprxByg4XNY645zyLLtu3nLsWG4smSj5meHchxufNd7dZXP2wi3hK",
  "key14": "5oKBpZxiZGJPS2aXrunyJ49j9BreMXaqEpt5HnfxnhAfkLGDMeYdEEkwXJeFGEezBLD4cVwry9oKGgu2y438sTvK",
  "key15": "4dj8hbrtAjZJiGSTHtaYo82xzTy1rhqxMXHEsGjWTmPQsVYDGN4wwLAgBr4Y2SvPaXp4mRToDWBiQGKTKbdMP6YU",
  "key16": "31yH43pf8vtqoHeKhq2DLyQf66veTTHDF1SefnnMGrCeYa6ZCaR8NKHfyLFdnxtsMLopM8fcT4nTT8htZnUH1NB4",
  "key17": "2uLq7dhW2bSxhzdqRFk1vtjQurWiwvAp67rrgNEoF1X1ATUfjCBV8ttTjbqygaxwQc28uzTuDYECrT2572SwkVXb",
  "key18": "2pdgjvs2P9CqdgK156WinkGeG45ksNJq6Gi33Dtdgun1sEFBe9Y6yaLVsUUA1qk2yD7gb3FQuRaXZ4iHZXYx3U9N",
  "key19": "2FNFkgGAFSDjetZmgrA9MrCQcCwE4ggMe8m81C9WBgQtwuuMTTVe3yu5HTid2A34DCJ6zM6EHAVkcxSaLArgqAVy",
  "key20": "65GaZgDySAkAoMtnnX14GubrsQfruUU9536NzZjpW9vFeU1uGZxZRzU2sTJEteW4EnmscqboEY71pgNXGnziirYb",
  "key21": "3oWgcAJfPSwSNdwy29U4X5YFj5SGKsA8TJGDC2NVNGyMmDhBUMGRV1i186ViRuyf3nimkDLHTXTz4Gkx3QCqNmf2",
  "key22": "2rNDqkSCsYDyDPJDwpBfPstit1fx2MXUoPYgaxtoDozZZ5f55LcidjE1L3LdDLpBFJvTcsmAs57DiSUdtWkdW1Ec",
  "key23": "3zauvBBGaywSn9645uyikrGbBkyJnARGqktNCsLsSXAasuaiHXp2svgnc9hv4yEvxKe3VdTcTM3XCBJVXmGnCkE7",
  "key24": "2zmV8RQuHbe8beqGnUYbjL2muSRUXUBbFtwz2JxtkLVWXeE54hpVzgDNoGJh61xDxdcUs3rN9wCZTYGfQShJVhFs",
  "key25": "iVXCQuvNJD5zdQoRd2zZceE7MK2mDNMQq4UDKydQ57XVfK4DX5WA6vW3HnJJUXnXHwVK95D2ePVqj1aVwrEHJvX",
  "key26": "RdNN3P5QJaiq3VL6ov8Q14Ls7qkRxa75j7hmsr7VyNPYem4dmPifcriEzRKpYS9TZvfJgNytAZHAzrrdCb9cuVB",
  "key27": "4Y57bqf4fb2zupPi7qbqH4BLRisvPYygiwJexjfopGpooY4mCo7gRiX5Nwxhf3sukeyJgm87Ehn6GbsedUmm6XMD",
  "key28": "tdo71BZvFfXKe8xmurh44btK4WYDutUnC92BgdoKGoqChgoL4nMr13VQGu6HBDbBtD4p8MQ6sNFQDhx6t4XBELs",
  "key29": "2Sf8ovzFjamFWbgwqnxFagbxbNjkLJAt3g1eQBvjMPLryrbzXbiweV4kakeqUh9oRSwNfpoRgkTP8Y1P2oqpNaJV",
  "key30": "3TypFb49XrW7NYwougXTUDJRi8JYxwNkUpM3Edf71rcMX333YWbFK3GMNYKhay2R1GBubMstAeLrQAyT4x4WvGp8",
  "key31": "1m99eUYromXWP19Fsf8YLA4v8snBsSYJYLMirZCuT3kqVQd6PP5TVqqUqS4zSv8YGKianGScG2ikezZfjM5z5rX"
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
