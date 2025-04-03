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
    "3CVE6fc9TYY9U4bptsMf3NorwVMQyc7S2VBVQ1FTrqk3wdnyYNxqAjXDRgsj9tKJktbu2wbvbmbUPu9ZrdVqo2xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SNMrC6ui7ZWERnBGm1aCyzMyaGFV6wPcnd9aX3doEoSDNzy6j3yvNeZ2M5cWQ9d5tLoF7rkExSoRvjs22sZceuJ",
  "key1": "4M1aqDQC8jQyNe5Le51gbBFSFmP36fuTb5zATq9nKD31dcijSGVKmDHB1ic8sforbTUPt5pwyjpvgsrDTd8t2SAD",
  "key2": "PtWALAxjpFiLMZwbkNZgaXPeBA8ZtSsbAhjRiB3bRaSETBikFLWBHfckccX17wz4wjZjxY3kWJiA9WXTSBKr14N",
  "key3": "FkWXoyaPa1g2vgwquKEVV7mYqTTewG4cw4PvQos2oQhA3PXML4o9TBri2qDyckZSrhbwKHTPFtbDhZw5Xt9gEgD",
  "key4": "YvparYWHs1ypAks7gUiM3yJw7gXLV25N7B5fgmThmHpDgyV1wBkpdrECQ6J79GL3zG4oALUnb4xEM5YRuiNkWNC",
  "key5": "wpLPvVGQuY4zZLpRgSYmxsBPXn8NGqupExMuAsyLkkDCfVGCpEoKkp4sy4kj3USQ29Fd6c5Do3Y8TbMGLG6Hrud",
  "key6": "ydsQfRDrVeUK13zaFTUjsSnRKT56AWvG4K84HDRd7CANu9JLVU7p8CUPan4Dwp2pXV5TBk8DPm8LtxhiPxSTDGV",
  "key7": "5U1B6ARsRdTvooB1PjxqunJnh84oDevrgYZcXLAfdXPtcAFEra78GGLkhWyz33TAvBXia3dFNgEtSBfrXden7d3W",
  "key8": "oB83eSaynAD1ZKJmjmcuiNuXWaqFRBm6WRgXRoH42kCbo5RrzmDQTQxWBgsyrVwRApMdJSQMaaq6ck6wYPcj1fj",
  "key9": "4c84dZ32NgKYaqCnuc39GMRgyXSJqrDxa8KtGY6HujRRqD7Vby9auEE5YSAK65DVQPJmUcTCz5Zzbojcv4XP8xsP",
  "key10": "41v8CZNhWBKYea3kRwX41MitoNm255hheo3BHfxv6rqRzZdXSzNsHST6Y6sgBdpLBKePrWHDKkpGcAGoNkTDFhAd",
  "key11": "51rh5TLbDncSjCkeeeJ2784X1LxVwPJkbjxm456g48nEUJ9oPJHyzex7p95QoK4zPDP4owL6DFGEFJ1bZ3eTiB1j",
  "key12": "2RAwRpCviboXVu6StcsAPQhBxqvVnmuSAcrJDBAc7sL6WU1LuybKGdSsYj5vXT9MTzMPKMmvnA4Suns2zqcWtDYu",
  "key13": "5J39vn8u6Brp8SBb9rRvNRrAbq4YSMwbiEKqE9qWCCdUbw3khjWE6SExnVZJMbSYfv7R2dWdCDvxTkCGChpnEvNS",
  "key14": "37jraCEBM2sX81qH9B1YbKGK2FkmoTCqcSLesMoT4qa1SWf4z6u6qo57beFG1fSFKfVoCALmWYru2BH9Q4ZAMUck",
  "key15": "34YrEtBn4ShyEo6LTwytUc4YpU5YGN2J6qaniHiZk3W9md9hVBv6DdPNX1UduTijSb4eMTAgYG6WimKvDPxSLWiB",
  "key16": "5yyoi43YSbM3ZFKjKRhhiwqSNSfZgFgLGQWiyAeYRk8nxdbFTwpwtKNqPiC4T447ZJDnoq2uKoqkuEgRnHZPM163",
  "key17": "3cmrB7woxug6f5DRjAPSD7g3zi32h9xQXEvwJgp77hKdxUCg1DEEtC3yYsunE8Fc4QijKPVLNx3dLrjfcFSwitr5",
  "key18": "sKhQUxrstD7Zp6Tt7tsrRrWX7pevQo93KbNtbCf4urMZKbiZqXgvnQ1mE4SJcsjGqSS6NJvoWjJGCrXQSayi1Nf",
  "key19": "3nhgYL4dAgt9kDodZm9icozXk3shP82J7XBM2Fh4Gq7NbQ2FHujfFoTdA9hTc1X9Qy4YZBJBikLHeQMHEUBBiCrf",
  "key20": "51YWK6iHVkzW8nZWGVTTrv6Z991Dz84g4b1KyLruBojow1YiP2aZsttXgjFD7PQ5jBjM94ptJHJwxGCkC8PVngRF",
  "key21": "5ttyVZ2JeexQEzfjLg47MgJMPsGUpvCrbnhqrFv1yB9XF9ioujGB9q2gakcaWEg26Rqbfmo8audA3eyd1Z8sCrFz",
  "key22": "49UmCDtobvgEdahQevujEXd19JZ2HSVfSWoATih73rj3c7qumsimvtLsE1DngdGLGQm7vBG6jsycCDzhxDrLq8Xg",
  "key23": "4fgYwzCTJJfBtL1WhqAqHDZGVYiz5wXFmrGFusDjAKhaek6nxQpkjiDmVe2y3VmvXNxS215zMgWsm8vH2Hefp975",
  "key24": "3pTUfBS8dLfTVDceYHbhdgZRpc5YkTo2VgyJ31hp9pq8XU5tr51fxBfPLXq4VPJ1MBpJRPiSzH1ptgY2VVJ6CtsS",
  "key25": "47AKa9mYkh17g1Fn6LWtHneXuUa7TcWfKqeopKPrdLSrQfjoTpQSKTfTtkovpanjEsfs7khKtXxp1svzo2zeiTBf",
  "key26": "2mQvGpBvFM6FVn3nEysvQzRQNCWVGwbgWCgZdTc1qrX4ZygXENqmFn1SKgdrL8hHZD1YSvdoSCRChadbRUs4QssK",
  "key27": "2hFPG3mGAqNaCn48fWHAPPgwRpV3GVboc82LyQybYiUL3d6VxjmQdj8Cz2HBmFzYem5Gpt6vExxvbg6bYpkeriXi",
  "key28": "2LVFLQb5L7Xa3URR2QuFk6JrrVFotBhimQY9Bc87g8m1HNmZujQBTjAZKCiKWu51Et2hu5hh7NfP2pzNBPeUJLPT",
  "key29": "5fvoXRW54qixRFDZ7Ut6RGKvoLbiTALcuNRY8xsoh6VXMgjcnrWpkmJhYyXg42t2jv7HaWfzLLu1kAjUFQsKdTuY",
  "key30": "4Z7jc9KbyZ5oKgfSVQo4jyWDe5vm7TPvxEqfmiLCub1zTvnm4psLYtEmvSByygZ8Vb4tAsSZKR3Pi32PoSPaQgg9",
  "key31": "QWPimwkoJMgKsUMWeTBR5xcu6PkzzRynG1eo4ksWhH1AwrSg2bNknd2NJfhpEy2Kkdy4uPenNVruvpNQwVAqbvs",
  "key32": "5EoJCWLtK2TXmP6t5igb6F4Lak5mkFovJmWagHRVhvpUxXXRCoqMfYP8CYn2fMR1CPnbhyfXMqrDsVnsy4g4avyw",
  "key33": "3SXDnixix9BsXzFGxaA2iZn7cJfEdDP1efrJUGbMEv8uXkk5d6zpErLZ5NmRg2pmE8ot1x6BAJZkwYjucDTwjSE2",
  "key34": "4PTKqqEfhYiLmpYzXJ86NoeHdysL3YqUQ7JN8PgSrwwVxyjqqvQ32HuVfodVzb5z3np1qQw9zEGs54so51z3jrRL",
  "key35": "46T2aftixNTvQRJ2rAcmp4RogAScsBuCT63tjXR59ghsjXC1aDcxtRy9sirsJWRkm89C82r7WaXZcu8Zz1EJskKY",
  "key36": "4PvZypYVBBEvcKCFBXEQhXoAYCENHKRmXc5JvK59tzkDbw3B3QDeHZFgW3PrteBXXRR8C3V1C5CBwjHwcjn8K1v7",
  "key37": "nxDCBr3SST2k1KCcaFHco8bdwSAguwoA9tb8r3U6QfRvX2hEDTdRd9vBBYJG6KVpuEdSUuiMFyJiu1WrtYuzChf",
  "key38": "2FuRZcZJvYrsr2Y9KNrMuKhDt3Txv8ua6HQg9CYdKqi4ZQT6QFzNjfjDqxRHmF5eMm9cQaEKKnURmSQYypurfmQX",
  "key39": "5xkVgeTkiMzDJcCj66pd5pW9Cv5AvEicSf8KdrxCh4uSzjzuapqFEkZd9ra7ESHk3AcTkC9CmUcZHWtXxsoemeAi",
  "key40": "jsuGAJRbVqKXcasBQCbcCNiHVbM1uAST77fLqP5GJ8SUnRtBers57suqsL9SwiP8YYfJVEwVHAu9oJijdS5s7c8",
  "key41": "658C1BA18MuK23KvTkLeYzDqt7TrbNJcUt2xv1ddqsARsGsxaNm4P9z9L9JmDEZaM4uKvDyuoA1Bnhbyj3iZoJu8",
  "key42": "9Mo1ywCUUNTVeXDYKuMBBJKZRQTgKMhNiiseza6wd2L4XvdzLmvoaYEDWD6ASzHQbAtqKsqVhU8vvge2cA9HM6j",
  "key43": "3HLcxvMRA1P6oC38AiG1Yy85iXsz1xB5bUqZom9h3mr1xQ4jrtbJaGEEP8kfK2AwFZLMw1gqyDNU4vYSqbfSxVZm",
  "key44": "KtPVo6dvG1o4nQhV3NAt1schj1pyFx7sdmP8eTeETiy8yexUKBKzT9D5zrsV6wDxXTutqbS1zBigs8WGeGovRRp",
  "key45": "MWuCPeAjdKS6t8a7eD9ZawLAb6pSvi4sXmjA7Eaw5uTbWnXem1NkL8YHqTfSVF3EwrCa5NaQ6RSHZwj3p11QpjK"
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
