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
    "2xk8x1sdpsKU7Tsav8i5QrDrotusTPFnkBNT3KczkdgS6xG6kZXtmodQrtz5TRoH9g7vJZrMNqPEMtoL7WQgon6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvJ8QZhgAirrqP2v8n3U5cNsqfTKeReUYbJCQjR5fjSncvk5TKYJ8rHRtqabg6vH1HuFLcjueoXdqdjztnCXWMh",
  "key1": "5tNiHeJZAH1EZx42QZ44JTfSrPR14xhpT7teUiHAQp1VL99urn21oU3aet27Ey1xJR9hm3fNsmNANWtij8QNVFA6",
  "key2": "Wobc8jUbuXU3XVwNekCAyL3K8yzJVW7Vou5j3Gg2zn7UaKppWAFNHM6UH6PqV6SarryNw7xedugjUP1e6oFFtAf",
  "key3": "3QmP1QttvspkGubLmP9FgiYH7zDoi1a2bnvEjicXMjVpBdWTA77xG9yY1CfoQRmwSszJQCqNps9L2GwaFMXe2BQj",
  "key4": "5jEGA9kY5JXNHm4d1QkZqfFRwhcP56DaS2Mdy6n35vTEtWNirVGTHYAfJincytqJQkbUWuR4pvx1WrXZubvt8FK4",
  "key5": "TzoXaawhvjPgrKCBskCVX5xNVoDQB8ANMSJMznr1R7xyL6TPURmc8LXJacUjztX3h4GEDjo5BBFT34xaEVCK4G5",
  "key6": "DZSkTdw7Yr6uQC7UprHJUhjbQVV6G8b7uvuKLKLuCScpBy9zEobiQHCmjhnmbJ48cVBfq6LpzQ6EhbNchNCgh1N",
  "key7": "31ayikpzpgw5dRJUynCMMuebZFj768TBAKsXq6482wDGhjo6ztpa6gt2gVS5Med842qhypUaUZwVHsdXsrQGJRor",
  "key8": "3oPfMyiSjeF2FDY2XyNBjZhU9bSUx6FxEwY2xFS73JxviesDhttLkeVp3B5UEaEaAvr9baDztPHQ5XfreZnFhKsh",
  "key9": "56B3QTby4j5y6FjCeFdjcpnc974fTHet5ehrbtiCYZSyLp5p1bFrfHGKr8DLywz8PS943efkL8JiALwm4if5mPRY",
  "key10": "MGBe33vomkU3kayS42nKWcQxkqMWZoheWr9JA1ELX777QZABLES2MT521P6RxBS1HjWEiXnHtc3NFvazHgfjNKH",
  "key11": "54XGNdwLKbbScEmddTpB58yC9f8Fd5marZTuu8WeFxx7sp1pAzgAgnzdjXBy1i4ghvteS6w3ME434btYYy2HpAWm",
  "key12": "57Co117M66gZrJNeE2Cgu1nf4TDLkB9MJpbkELGpgRYZp5Ee3RTaWADnPu7DTNYsRgDiFoYJvS3oMhSEgTodE1Bf",
  "key13": "2adM1XErzgaJQwbUBrNJj3o8NHQSfHW6GYynvZkejeiHDnZjh4RVVPucs34EeVSXQdwLdq21CGARcUo4zxrDpmot",
  "key14": "55yEbcRf4Vd6b7BbgJct8KGF55QDPX9LMzUCiWfoaBWBff5Yc9TtMvLRDpyhiQj7zb9Ewh5fAUZb9HQXrHqoyo8e",
  "key15": "643v3W1z79XVNXegQWarKydmcQhZjkYQ649xAACxVsWKDitZqTKw2NbycVR6ojrtN8XFQFdWWQEEKgg2A33zcCMx",
  "key16": "25Kj2Km6prGAk66YVM8oUgrcukKEyB6iCKo4sYVtwyyq2z71vFVqRvb8UvFpDk9PpQ9JQXJ6AQ61wv5pL9WWPPQm",
  "key17": "3n3TrLGMzeC9H6aiS9QZM5XcqK4GdRRJcw4EuEmUeMqWsowwg9mX7UJ5428nwMPSeeGjMna31f4hMmq7xnz89o8H",
  "key18": "2vQLmJ7cY83bzf3sFioQLTeC7y4qn2fRYWXVP72Mu93Ud9WHxyLjnhM5eNDBhcaeJQVsCZJM1gHNYqRBaBTbVSSQ",
  "key19": "2e4FKTHU5C4DJJWZWttgZJkkVXhKLdN8ioRycnd1coPcqQGzDpiy7aYBDFpmh6nrFpRo8qpVWnG71xGiJCTYCzcN",
  "key20": "4897v3LJjFCiQZBZR3ZxP7g6SonVaUEf3Ky8W9Mmns368eVkqnx1F3mLxtkPYR4xkBWFSR4H8X11ptQDUijUmgEF",
  "key21": "2gyynZoSFfCq4x8F24SVk5uXEXnkP3Gd6pUjx2AjUFCH6B4ZJKierEtwLf3FGPDXRMv2LgL7kPVB7SMwsBNjik26",
  "key22": "67VcKaS9wx8wkt39RuMpnhDtUcgy4DeJ1vC7ps443yUuyBZbnahwfvvChZXWPgWnG5pdSwwt4JAryWF5aNcTqf6c",
  "key23": "hUYrsvn1G3pPno6pJ42ZzsVRSb4oLStdKG5ymruS3uxiMnvHhEuQE8CK2ixvJdDcPbrdXKke4MCXoFeAwfGiidf",
  "key24": "4cEnsGwGLBQg88ABJhraBiV7Sp7NqYrBSdZHwTDBD9PFF9WQKzviCTtn7VhXWRR7qZPYAWsJKKkccxagi7pD1q8b",
  "key25": "2eYgHEJQabquR7RDf9HTYkcwRu9AaDZ6118WXRY6crFMoCEVmPjKMLBqyX778WfD9ssbsJ2Q6Em6hnWcUTJqqUx4",
  "key26": "4Tv6nZDtGsY3aDuTrHGZMyWtdYHSPdgBBwbsaT8W7rgSw5pDn8wM8NCmo8gq8VFyGgaqSWD2dNUc7AV89NkYHwo3",
  "key27": "3EqvSLsj4HYAuUUKsE8wWhYp9q7pSAZFjygM3TGUqShzHpHT13LdHYpf7jAFyJvH9RVnuBQAsE1MZFSf4WhTFahF",
  "key28": "7VsVfkXs5CiqhuzedoLmxhMoHd7zuL9H4M38tDJi3bYc9UiAGq6j5qSkZUWDmVqTtv45FALofosJ5ETnMjb9hUN",
  "key29": "5AohbYBSLku9bPnmphqXhWeng9udxPkY85f9sd17bR1tLsymjkEabVepU6zbVvHzkpxvw1upkQFui8ZDibjTvk67",
  "key30": "ZrTgkk3QhiUoMHF1FhNZUUkQcR5y4FLMus3je2TN2Q7Mz2HBq4cmwhxMVMLtgeDeAsGKcKQdYCwGT7exWY39mgH",
  "key31": "2jvsu61LnzmYCzzrDUpcN57VJLgXuUHPBMLjkzGE6o7HZ4UhYC4C7e8cSVNBgSY63UuykaT4NBTtrTJKQpaQdsdo",
  "key32": "UxeB4iKTswgz3ViF8yNG8dWasC6fYUXJrAr9FBK4oAdzRueco8iXDviesviiAaGsS84eHZKdvyogf7dQh9p34hY",
  "key33": "5BmCY1184ps71CaFsiucAQbkLtyhUx169Vv6aWmxzXZLrvpQi3sxq952sAYZZRZoo4oajyNVcxCsFK1N61t8fqmY",
  "key34": "2mAy2k92tHAfX1ex7NjjsbY336XhAfATQpadRKHp8xXcLmUX5zsbpg69Gr1ifvy6TTutmJU6j7aueKk1fi8CrNUY",
  "key35": "HeV423tVzRCBUhGtanEC1GNnH7wUSjjiFe3AGmmPQ1VBpuDvXXFXuzUVsknehpgX7CnVM2RvyjkaK3gGK7uWpDg",
  "key36": "2hCa2h7T9ai5t6PUKb43FHt149gpHz9R84ZZVWtbrYnsghxdkrhm5PTComSsgAzbGHe4GL1shJdV6awRQxXaEvFP",
  "key37": "5QAN69gJNFeMbBQZ5VJCxFjHJvyezdMrkeECDpcFTLPdKBmGrVtVAV6nUgrgnKVgrnuVTDr4CzFeK4XCvk9a4KPL",
  "key38": "59t7sUJ3khoypyL39dWQf24hdc5rHrbYef51Aganqy2wxSL5Ly8spoXwXQKVoS5iBdtBVkE2ao877tRpvCrf6SpA",
  "key39": "4UWKM2aZ5m26v7kxRgARrnxePksh4XRVdH9fVKxka7NbY4dVcEfJA1WEMgVftTrULXTQwC2g2F3cSgTt893xmBsV",
  "key40": "57wUXHAcZe1EWw3qjgM78AmVFzzeY6Lq1rsfsPfTai6cS6uryEPMceU8VUCyBgtyh19tHnJyrVT9iYXCxKvBBUJn",
  "key41": "3mevt3uSoz5UPuM2GKeDVj1XSvpnFJx3oEDEw1pn6P5qr6MY9UEb9apCBksUsuQH2jTerbqvy5ffHR1vGZrGMoEy",
  "key42": "26s9PvREXtxjnXRZ1t8atkGgesK5FcqHS3Mais94vkimNnXS4dLiNsuDhgcCJ2wfEiCk5u6Jyc84G9CoZsLUFjfn"
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
