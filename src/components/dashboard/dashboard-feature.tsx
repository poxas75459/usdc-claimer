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
    "3xiCBCABRV361CxW4bY2fSbidj47yXP8TnRrFAXbEt9rxRCs7g6imRSNKZvJDAaVjxvz67Voe2bKs1NddnxKm6jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1DHymwxEJa2ryD49bhyBxojXLbBWk4duBmnkx4ReJgfEqa6gbZKA2BbuETALhmSA33EviJrKkGE38zXntsRvJ6",
  "key1": "5F48yv91vHGNEdKiyev6LPyAGk2dbBmp1ohDi3mc7NYv6C1Sup1GifdTKP591ya9kVhsciB6PHubwoW5vAbA7YHV",
  "key2": "4bpQyWCudft8B9A9Mw78H3KCWfQL9SFNbwej1NaT5WsKGrxekrG98exEJ5bA1BbzakXbGrcM4QhapYZt2iyuDB3x",
  "key3": "4cGND8f1RFSS97fPcnoCDYzZq9QupRVjnHR9ScGTveGNzrqn7f8hFyr1iRQCnNpQZ3JEVWCVCgmi5xcmzgnAZacF",
  "key4": "5zhvPY6DsjkAKvR1ptEsfKdULh4farVek4MbF3R8nsK6db2eVD9kac3YqWHSZztA6Ley6fonzEKHRz1ChZoPjoY7",
  "key5": "4QqezzcAWGueNcNo57mq6fpCf48t7kVcaWmpEKDVgG1rLfxaYDhkJNc2zGnD39TUbsyVgZ7BRu5uytZwVq5qkUks",
  "key6": "5vQDhkPc54HVKdoUrADLur52qzSVSaPnhcHHsQACemXMMYG3BXhG1AytUapCTBGnYjNxSdUeUv5tCq1FKNdyANG2",
  "key7": "4kHQFnhbSripjPCkiYpXtfvj1iNdpFaM3XVxThqmgbCtT3ZtQKZeCQfh8t7kXTJL147JKaY4a4rvsVpGCR1xDWn3",
  "key8": "qeVZ3vbs8onAsHiC8RuRvtuV4exkbDrYE8Eu96BQS4TAF5Texr3uf5WAPSsRo7gcBKzSAM58ZuARk2epzC22HXR",
  "key9": "4SWBtnvKm5Epm4mdCUoWsbc2eqdUgd7sret4wWbaXBPGN3v8SG6an8aLTga9NuHvmQrvcyDBGSSw1b3ewPecuMu6",
  "key10": "2d5Fkz9E8DE9u2tTbcFFr3TPNaTNz8QVZA7M649ViwP8aT7eiNrX7QuXymZDFa8NH3TZQyz8BtCmtFDtGZGZeZgj",
  "key11": "4uVTif1rDhZtMzzK6q22iQ64GNJfnRkGE24k7GnFxV8jBn6HxSaKdR1AGm7me4QCMy4o546WKyLPeVJ1JMAtHX2H",
  "key12": "3iSTmP9r6gV5mnRirnTaSvuQPeZTWHdPC7tVsXhbWRU4jvcPNJKU1JTGEXNgveo9R1rGA8QMWxSBRikQzRbvw6sB",
  "key13": "5y3HjuC1P88gCowzjGCDCJubx9wTpc56eiK5zCR4mYmrxpgUPXRjqBaiyc6cPFkvuAi6SVSrBT377DoW6J83W1w6",
  "key14": "myMFyj4hAEeBVgpwfpEzeRhyhW3Cid9EePjhDFFqtwqHpFXRHNyjZ26WRMsu3tsgopU2hrz8p1RXQTqkAuuNYo1",
  "key15": "3PsSZu5jN4ERiNq9iRUintU8i69ocShWp6xb9WKaFkV6wUbQMkCrBFtv7LfP2eLYyfV2Kk8BSQvVHNntAqi1RQAw",
  "key16": "e19JaWFAeNrzmZU8xhtKtVPa7nmALS1whusCEyj3keZExso27RhdchoKh5iEbREintpp3skWoxYsDeHQd4Cen7x",
  "key17": "5pzD6sDKXLZ9BfpqxqGzcjUMQxY8YzsjPFYRr3QK6doNirun8wWsms9piXnyknwrezay9bEJrXge9esMLaJhd1ML",
  "key18": "4AGYAgvRugw5ABVTz9TQcb4dRq6LTuyAtwNp3acPJKGZrvBCfoy7ASTLXNYfs4FSmBkVj6fLRLdjyp31iGSSLGUV",
  "key19": "2Ydy46ksYTYBCdz3WzJ2DKVtNwEjbDg4FQnjJnPHgSjgoKJHYKrVKqqcun7CikAnh9DPBKHTJzQA3pNTnZNVf7QG",
  "key20": "2z1dcV2XV5vZTYrjMxwBD4iG4zYpjpPwQraHQB8s6BRdkjAuGSLw61UqTpksj9fHLJC4txysDbQGU3cWD21syxC4",
  "key21": "5kCtaXDse14RgmeJhc1TvorwerL6Kmvby4RyJZB9fhPXtstezbGB6YoqmbC6c52AsSM5MbxxW4o7T5ExeWLidBHF",
  "key22": "khuxZsrJbZzu1cPSefm713yfqiNVS2WbhbomG1xvHBQbGd3wEJW7dkQgArrfmeHoHGag7Hcx35GrqBhb6DUu7HF",
  "key23": "3tB83cFanMJ67LSPHAtgQFcrzyx767rxazc5spNoUKim3yikWYNL1F1oPNgi6yjXAfRbTR6awKF5fetD2mDYWcgN",
  "key24": "28EzH95Sq4LVjgZQWa4L2n7ehTEDeZ2NUBfn3DQdTqr85tN6HhGgHd85XkWM9yUdpCrtyxEx1Urp7AfRJ3Aqgsu7",
  "key25": "5GsHEcFBVCyZQQNDNsdcAxPyT7s3AgZ7YhV2gQDKezNRHwpa3CNbZwBrwbe5T26JvfZS9KvWbNML4BMcmAwY1vxh",
  "key26": "4pSFK3GJGxyYp2riRE6PTgZ9usV9ZHPsYWxGfwFQzrdMQD2t3TTKeWe7fMEvGQKyrMwkogC9ofpVWhNqdHUMxGHG",
  "key27": "4dHoTp31JgyGT5GA9cJMqGgwH6WcM5r4k7zUMr6Uvn2iXcvnCRgr1Y8RvsSMXPCf1ZqnZr46Vz6fvZ8A4aXEftfk",
  "key28": "2s77pnWHP3DJe63PLStLUowhLf2dEroo2DxJJQzqTZ2pw9zp9oQCGUsngZyxeSKt8sYxzWsjm4nSNThHQXYitxyA",
  "key29": "ARp5fjLYgd5w2yi2GBhZQmYeSfb1a6Q29WGeFxzb3TdDYrVLqWoo8Eso8gmcD2mC6MrrERnLAbaPKknCKAsxwmz",
  "key30": "5ZxNrzXnAyLZCAkZq6Rn6o3dKNdTLQdr2EBZasPUiXAh51a9zciV2cx8dYP6eJBWNbzwVguQn1A8KJ1vDDpr7vZK",
  "key31": "3RjAKxfPuUEtxJpeDiaHr8XvCju1m1ujFscRhx3Zpd5xduyM6pRpvotmqiYAzNgT59VdNty8erCBTt6uPGKK9hZv",
  "key32": "wz1CX4Uxrb7pTcTvt96cSGNrPFGBuqdpeof7RxuvwgTV8rYUEpPYbB5bdvJJXbCh3vZfNMjth92rjyqSD2GP54Y",
  "key33": "2K1XFCwoSPxfdpuRoKZ9YXfAvKoCMTQmuMQyBf9qnbPtk3rFdyruFQBKCtcNra7jKnj2nxHNECy6wgou251211zU",
  "key34": "2zdcmYWuJBKvvFvbktXjep9DaZfEZXeyf53fTrYpRiMo27rcBuKSzv3bG3vKsXAoYJ5SvsnhbxsGbpcZji92ZvJB",
  "key35": "4qoNiyD4R73ijdiQNezZzZWFF3X6eFgRXmbfaEmrqfYiFExDx1NC1Atym6sYerwFvvB4os1F2PpU7WkdxVH1joV1",
  "key36": "4BLFwUE87kvEkaxDRAyPP5g9EtLtYhWXtWzjvVZmNv9xDEbD3JNhei89HjoVWDoJs3u7fHxkq3ECdyyhRcZpaqFX",
  "key37": "4r2uYzPCG7ESEX4RhsEg1Ck3LRzZqBJKYCrAoGK1cppkCqgZRNMJzMTDk54k4UTg6FFHQYv3Dw958TKLo6Nt2MHC",
  "key38": "5CX6pKkXrmFeWfYbUwubfHNBk7fWDWs8Z4idk8i1vovxVrRDVPcZ4eExfdnMSjvcfPmATeYxqqAZT1yDsbA7ZJdc"
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
