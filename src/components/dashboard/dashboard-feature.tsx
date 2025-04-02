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
    "Z7ybnoSiHTmLnR6J4AUQ6yqDHRGbY6cm6Pgvxw9j2tC2SGga8YTHcqLwd1rhfkX9rRcaYiW5NxLCWB2JuMJWzgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoY6uStidikHaH71XKPAE8AkYUhvKAnAWMz2wpPHBEp8FGTMss3ePQFUBTnB2zPeA8tEen5D1isWTyFwSqXNcG1",
  "key1": "uhT5LB6dfGjaBghH13QZYbTcrJBGERTRi77YjqJ5mCbmwrvcFvX4VKYW6CT3HvQ7qKm7YMaqHtrCBTK7geJodBe",
  "key2": "U2r1L466bpvWgVm1jrBu1bEJa3TgxMdrQGNKdkRKCA6SowwztYH5LthD5ujrWkTQ16nqLWnoPkRfpZFUaVyxf2v",
  "key3": "22x37YDGxp8kXWzKvzDpAhwMHZjWhXHuVThMDSs4jftaPSCGLa3o5fxdhqDpArzn9Xi3GEY7nqYnDGhv5YhLBaCc",
  "key4": "5SFEd2GxMQoDCQEbS5QT4Kp51YunNYmwHEZJY8V9XJ9khrEgj35xJ4wYjBDS3vVq8ZRBNErUkRfgNrt4mCBPsarV",
  "key5": "581idigohBZz3Mpm1css9k4xYu15QWHREjHJqhLob5rSwvbAiak9gATd7vxC3GEAVTmRMBMQtffbuB9RofX4czqB",
  "key6": "51D3TNJKdmQsFA5B6JfkWUp9gX5d36wETV3mrag6JMFwaCG1J1LLWegqQaAK81xiFVTHc9QNWb2BXkpPdo56dgvt",
  "key7": "3hJ8pSeDc11jhDDWoiqZosk1RiPG6doThwndf8TmvEvfrAUamH9ntB5WGo2B4jTArNDiGtZSDy99jfPNz98cPPvK",
  "key8": "4yAEZ7XRiMXhYtuJQ6jmuBxQy843XiYoHzwuxxMWdnWYHsooSTk8qB2wnJWSPSNZNdfNMcLs2FvGxsUB3z92WsJ9",
  "key9": "4ckcd8g9JY3WJXHUJsN9fJx7aVE7eCSruA9aJkYsvT2mq4puxvnshHRZfMiVNqgWKNuxia673edAtLEYwCqk6jdN",
  "key10": "3xQ8Wfgt8Rp6XdUrLKqR8TcnNkgeJFbeEa6rEUw44DrAwkMkyUr2RUAkamzH9qsK8nCfFdg5hSYKRWSqn6ywZxmK",
  "key11": "2MbkCPT7LrhrrzznNA5XWBisLeVS77BjCSagVPE5CGxFWTAyGaZaya5ZnsEyMdfSgKSdtN1AMSB8s2kxizWMWMDr",
  "key12": "2vqXszELC1y9WhiVg1fVqBVAsRabaayaGsM8RnYT5i66MYr2TFM2hU7FDTtGE2cf4Sfgqyif4vh7VSec6jwMP4aX",
  "key13": "3w9rwkKep4XbdrRbTjPpTVDDzbqDR5ynk8X5DTS3jbNgck3qkEAkM52tu8Xd1d661xqXNtjxjQYqrW9ViDmjWcYp",
  "key14": "5Bu6ddhpecgrZWsiYpfBa2CmgXKiJdiYgdGuRkuWFXZ21Vqq8LZ58eNs61z642ZcQiFUSh28iaKeSWE2TmZhNWyp",
  "key15": "615kLo8qhVsoQ6dnigqSKemNznNjaeBr2Thv1r4TpcuVP5UGhwZERzHnB4ReHAmweAqcqNqBvUEpRDaUZQaV23CN",
  "key16": "2DxhD8AyYu7F9FZ8gZ1WHGWFj26jkXayWK9MY6H3XbPHfnZ2ZfBBSoqA8NKoD8w1s4BEf9JZBuW5ytnyismQQNoh",
  "key17": "3KsSeHDErpHn3QXuPiyoeuF1eHGwmfmxLDC3iwgcjctweHJGNoEhg9n9fwA62UAHkfJjDK2XWBocgkbwZiqSvNT9",
  "key18": "vZYhkwmjNi1hxnSeFjDqcFvZHfFuaUgedrY1Y3pqv441mnBkCF4LeD1j7idAnyXmb9QuzEEiDBrmUNtKYm4Toey",
  "key19": "125WgFQKPxFFKWD9SkdzWLP3M4RbkEWnyrdt6kSfdbLK6wbfBDXGHhUL2rd7Sng1cWCE5bGJQ3jsMEjG72bApJ3d",
  "key20": "5bu5iE2YJeF7CZPiojrCGbqqbwyFwm5oTNJjBt7ietPLKaaxwp7SVJvwhVGpCyg1eKchK5imft237v7yDBbamUS9",
  "key21": "kXeNAud5ujPG1gqF5duEMeLb5RYuXcyM5pJuM7Hh52rEWKvNVK6w2woCSF4TUDG37Wid3RVzSux68AYuvZwrABW",
  "key22": "4YMt3E8xhjTgo2cZn3Qnu5nP8NjqENVWcNZeVNmFny7gpBz1soitPWSaSPNvyjxYztyz9FNu3qeQxVyQYT46hLYB",
  "key23": "3v6WPk5YHuuPaUbrjZLQQjnPdKcNWBCSo8qW8x923k8dcZ2yUB5tpV5VhGTzYSoeGPCVrYPMdEQDNYAimurPB9xx",
  "key24": "4WeN5jDgsMNbrYcPgoncbvRApzEe9vQ3z7mZYeBYgUqEaxZ1GQFogmwteDh1CU63AbJsj4g7C8ncLtngJiGbBvrQ",
  "key25": "3TVeGqd7o8MgakV3vUdr42H5dhJXm3KCWJkVD4ctSqCZVZvY3w53KCnYUxTsskYT5QxsN8kkUVfogKkqsopKDPQ2",
  "key26": "WGotepCGW2NQmEuoB7SZ8kgtESxjSLhvmHFydBH9HPQYmN3UAX2uA2cCmokgVtc923b7Y7A9xBYUwrBzw2VhS7f",
  "key27": "HtKHuZcmHXY1hDV9cchQxGrcgcgjPPNoyzD17sEH9oFTUEgZfWuozaGLfgkcWQM2amqdMV1fGTYCx8SNbv24BTE",
  "key28": "3GTggY9QwpibG8kX7KYu4QC3spco45L3MWQB9Fjb69Pgh53WqfjqacCgJP1iPqdGo1CFQtkaNB9R56EeZa1njt2G",
  "key29": "6BBLtwj9AsNwq9M4adAKdzrT2TNyrpWxvfPvhGgL9mXLkS2Zmh4j622bLWXdMKJ2mZx25vzSRTrtTtnuG2nZhQT",
  "key30": "3MqCY1ufSGYCVXX3cXMxoYwCEW5iXPCAyvgTc7d9CFiyM8YNx7ofRdwiGuSKZm9oRNKiyw99zePgzf2jgZ6xR4yF",
  "key31": "5zBEa87xHKpTuVM3fesQjxbjiAwmLepr5GqSC4qQvMzw9rkNfzRPhjxerTYG1nGnJsHnhAVSijK9FktT1eysMKfV",
  "key32": "5ZUakzG4gQC6DMUFxQGhr14eFAnUr7U2Pq1iqBtULWfog6P2z74vwLQ9TE3Ltwtf9J31dGXeBSsV2hHqMAacT4hq",
  "key33": "5VHriDqbgNcT827tdYujHX5B5zGCmr4LtY8PuQcoAJ6GAFB2DgSFJW4oCrqmHDpkbf6sA9YZYkfQp6AArLSiqAGP",
  "key34": "33CgBNNZetDhhVVqSazAu9YaDfQLQe7VVeeJcxTDpghPLfQK1Gzpz1oDvRVSCcNjsbmWeCNGfQje3uh9S28zN7kW",
  "key35": "5R3hTQ7EKmsetKxvfeo6RLjzQNHh5GCPWt8HTpYrJVUkfYTFD6dY4rovVEdt5pD2zBSonKYpJLf7ExmDJf8VaeXX",
  "key36": "66nFhf9Rrrx5SGnHvdEMApUT8rYnXswHrmUZxps3jE3ga6g8vBtBg73yHwTCZ7RZbXQTqEQAoUMxpjogUBBofHsx",
  "key37": "5ndw2yXWfpCA9HyA3st4c9FsBtXMt8dao4HNfXGMR9vuyA2tkSCBEfbKGTxggNKZgmake1WCqDVtAXCzo9Jvn5xp",
  "key38": "29vpTLSd8V5GCrbkvo2PPs1Uxkt8WtETiqNaaFspFzje6xvwh2kzfqwHD4mcv1nYoKpT1VdY6mAE1ioeAsNATo6R",
  "key39": "7EHB1VqogwDE3jPAkQTy1N8H3ujCr7v2oDeMhpPdN8nXzdgeTTkpm6poUbo9FpM5N6HzfCb2X66Jf4FJCBH3YqN",
  "key40": "kRKoKgA93SJVZG4m2vUNJimSNgk224m69jLFnryxSxXQXu898hzrv5Nuq7e5Uhmo3ScgWRRgVzLGWmzPPCu6Aq1",
  "key41": "iz9TK4P32GNvp1qdi6LCREbKMpH21mc3RBmSM6UVpvXXDpGRKbqThJGe4jgRVJC9fc39zBJztPJwUQWu85mVe69",
  "key42": "4bufN5Kfk5ZAvxCddoNpXVesWhvxS5xjihwoDSN7S6gY4VaPJf65XZzD7hX5fXv544r1Y72d4H4KojU1PbRhc8UA",
  "key43": "5GDfygR6GvgnpXzBDjgnwTaBT4H6iFKWpfB891ETuBk7J59T6HwhdDy5VJ5zHG4qmFPrxEbcm9KBFgSby9Sdsupj",
  "key44": "5xddLHCViRvqmydfEKMxytxQmq4Zd3pVW4zjT8B9acMBQa2exCBaf884GwTKJQoJuip3818B5KeAtnPHcqSUBroV",
  "key45": "2YzFbbCssM5RvBbVGqnRGm2597NJfKnP3oC6gL3nJ4uAddr3ZuN8B4PgekKg8rJNYgMNT7vAA9LnJsYvTHtCbA74",
  "key46": "56hk1x2cmW6wiYcR3A7fYaV7SUjxoyCgEEwGyaeJcKZYpqkmPo7AmZszf1jemrsAhDnz3vTb2pvk92f7SrPapxXB",
  "key47": "2Fi5HU7c8UYjncfJjb3izBgSvhFoate1oDks4xEStKUru8HuEcBWLiQhPaoZrYECyRfyJXB84BoUSx5F2QLE3LV2",
  "key48": "36chffYfQyd8tnLz3DtCMAtQyymzmjUSCS7f3B9BfCWGCY5w5324GyExaJNi2F7RHtK7VjNHTkukg5GXHsXMyaak",
  "key49": "55hj9guY2v75UkYuDiE8eXA1NMkfk5Ndk78kxpphJKsChr7UZDDe72na9N43qEpceHBQ6wyyssFznBousBs5B8Z7"
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
