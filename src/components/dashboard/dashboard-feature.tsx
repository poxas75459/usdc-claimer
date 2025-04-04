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
    "4TSAVW6d8YEuVrWheRSM45rHjRAWfdefbk9Z8ompdf4KqgekVTpzEGa6vtRjdyKzY2ee1abmLGAn4ihD7SxZ4jdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YkpTYghNjuKvLpgMFHoumaQiY5LY8rEmVWRX2Xgg8XRkVY5m9BCyjdMrrwMxaVXrBWsE37zwkGaE9NBu1YxhynL",
  "key1": "4FvCozsNLa1KxzFPNKx62QDN5VEEn2zVdEq9rmHZdtByDzpeKP5czhPvnN6ajzXaZ6SzECAYBF1KRiRMRC96CtPK",
  "key2": "4YKRoPWtPV13NQjWxMDYFqmzGFZZUQ4EFw27ziKGojw38gHjk7cQi6iSUxkXFbysqRcia95cEkZaxJs2CM3FWeme",
  "key3": "3JuTQFjbNwJPqyZb3oyRUxRU9AipWgFXLcSL87uiYCBjiwe6QXZeQrhYTvYWLoHeJwXJU3JFCP53a3QU31DJxV8D",
  "key4": "4sAi2BthVpJyjzuGnHTAs9sDSjeMxD257ntvhXBotdqt6c8GQyHjyYJnKiPjD7vqD61fNEfzTFqenqtRJU4gezR3",
  "key5": "3kRMe6pVpHaHQsn1LdRp6Kj9yvfz39Tc2WDWQvZrDkkk6w4wMZgX11LDbJbCwdstVXZPyrxzEDT8UQqfpZkrANbx",
  "key6": "2stg64jdgQqQX1QGD3R22RXLXCugNx8zi6TqoFfTiLxWKicjSirffj214QwYWaHdp1XmUamWYDe9eQdFCAw4sRkm",
  "key7": "2kKMhtQu3EnMKqRGVuBqfGpmTAgPFcTJLXAtX2S9fGRUJSAaZFeFULkF7hwiYe8vAs6r7YRk2Aucf8cNxMPn6WTe",
  "key8": "qaHo17yzXXbP6eGW63Gfe24fKvvugn7tzK7rLgfMV55iATMbFJLQsHMEwHePBgJZyS8oK1kcMBYoYJgNi2Jnutg",
  "key9": "xCy77uVnSqHRpKev7sJPwtMSBuBBBAfsMCtRtZMvpiyegBX7HK9iYfS6vs8UxEJTKA9JV5LsWfTWtMYyxvipmzg",
  "key10": "3B3L36K8r4VQJLFfDXUPdxRVJiib1j3Ji18J9muaTAYG5cm8aPggSYQmJzMjS32BtAemmWZ9vYd7FxfWfw8NUVXe",
  "key11": "44SzVhLsdjMse8d6GDkT1At1Wxm2cdPhif32rTj4FYycsJeHM5q9ahLsGbHBaSeMR4VxFxjk3AceXt7C49VsmCZx",
  "key12": "4pzqmExt3jvwTpM7zeYq5PTK1G6WdoWXCTG8PWq6LJHdUFWa4mvnUkm1u8TuU6weEpnKCPY1z1VPTHMpDAEwhowF",
  "key13": "3A5o8Hc2FQtGGqw2BMKqzL4R6W47ZhQA7hXFusrdZoEExnLQUqXkVBDewK12mK39n8WcegSP8farFFbVre5sMiwE",
  "key14": "4YouHXPFT6oPPGWG2s6M64ncCToDom55mH6NNUn7ens1wr8mYG1AxaSNYSLgj2QJpfcQJqAv1wyBzrsNZ1uUpsxE",
  "key15": "1wSZVTW7zN6418T3e4QxrBKkusxzgiWLDdLaTVcCjt51M3j7uh3tPqGB9sXzqiShsxN4y4fFtYj1gUzXf7yHDbT",
  "key16": "4fWUPRA7Yc6PixjTQWDmgcSaCvgAu1CC1WxJugYps2FQLPCpTJFK8MUXZsaGQghmibvJwgxokthe5AW8rVes1ssQ",
  "key17": "5jgHBPS9LHS19cqLni1SML3pVL8wSvBe8zmC1uBrgJJXCe7LquBmTaqphKLUL41qsj5wH2cK1Nyfiou61TkJVnQ",
  "key18": "5qJXhrWEZZ2seFw3mq9joUtQAAunqYpzut4edxMekiL4K696ModvRerroVN9cBdEmTMvHDQDz6NaAz6owBZYtH92",
  "key19": "3mDg1PsmY3kKF6863NrcGb9WfmGqQdwfRZiESw2MajaeDZqxfAi4RHHn7dJPoum2ohkLXqDAuqUiT7kZiA68pk4H",
  "key20": "2qQeCdyUMgZw4YfB91PPB44eXLeHu4VUhjdZLBuyiZHDw7tJeCgeB2sXkWTDAmApdqSNc3atYK2KJidUbZEXLMHo",
  "key21": "21ETHJM4JhAnmqTq83bKaNZuosdo3pHWRWRfydHqSTThUEiJy1WrEQDt2J6XxcV7LiytMshaNj5kpSM7trdGbDMT",
  "key22": "5zYdZGMdoZdcfGgHQCvRWYmxXTWNT8d2Sxq1uSeaWYMnSfjpkvVaoSdseGueLUuP4QgBGaUqUkmNu8oKoqo5pei3",
  "key23": "2UeMSFAa36owFMf4ozsWpGvsesnRp7iaPm6hmXTji3UxxCLS7BVAsifEtCuQ5rUh1veiAKNpSpxjx6Cw6uPFQX9S",
  "key24": "yjVoJdCK9ArdehQhHm67mtNcKdZVVjn4eKsGrUqEhist3CDuiPmx7H7GsCMcF2QypSAb8wzECQJkxTx5kLwZSjV",
  "key25": "5g1hWQmVdGLgGfyofgn4Kd9f7vz7TADhCxEKbGLue6cqqEkBAGda9y5VeqqZoXNjK2JzhrYc8rPADUDwj4KKnu5M",
  "key26": "2J6cjNJZGYAA7em5DqfwUtgHuqb6MZadDvANLrRN9syNz4gFdEipSwqs7wwgN3cRrkHdFivaXfnG6nKXpKsH5CfH",
  "key27": "4pD3WzgYqz4PoEaZFr2f3CXCQ5SBZW4wrhfaHWsgzAdTPqY9M5w1TSP2y1HpQfLR4WhGiZ3vHu6hdDKi345oEHey",
  "key28": "5ZoXfHaz9sJq9x7j7uKt3xkV2TbAdJh829GdQwFuBUJGPuijzb15JarvSVXE2urFgg9bRKZ9mhVbJPezKqbANj3H",
  "key29": "4yR1NuVwMq1xVp6x2MV9C4AxEm8T5YKFiBV2SQSQF2gM34vF2AJLfJrt74GkuZVZqwXDaZGav1EovrJbcfyXLmYQ",
  "key30": "62FqNNDUVPiarP6xwiru8jdYfNP1XG4S5AVPJtegR5wMveUGgbgrZ3GYDRAAtV1ntQ5ueYvuu2q2aM511anzvp2v",
  "key31": "7QxuRSqe9NSQWE32AtEmMFWFMVbWyG6gqQuT9AZHnUFmNX1rCpA99iXH3fVmy97z6TxbGzAexxrb2LsQ8yauE8R",
  "key32": "2sof2PzdjxUoodZQp4UphrrF1vFLgvUd94ThMfZSZVSyADGFHnyvSKrYWtz9zyz79rqAhd5uo42i44rFp6fY1KVW"
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
