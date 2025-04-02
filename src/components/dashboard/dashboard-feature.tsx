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
    "2hBW3RLqJewdz1WmmfvMTQBxUa889pRo1Qm6WzELkpg2qEwCEmifK2nxEcpUYyc7rjUFzW8jGQycnAeni1WheBxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63oSrqeF1TUg1nPXv6dsU1yeLGy2vVGWrsB9XrLdFLY9nrfPyNe7aVLoZSoGk24Nrg8SptykH1aDtnHxmFfVtz8g",
  "key1": "3cNm8d2brLvMQP9hC4YCJSQUo9zY2V3Ci5tVhsF2J6k48pktcH8ap1MEE6B2oqSbWeaNrixjZ8bhoBb2ArTxRkK9",
  "key2": "2uabKFYowFTeA6JpWtfhQthoeAX7buyrsHNDK1u2FRyAb5JnnAygKVx7RrpUSEHSUZH5q33gnhcCc8BkwhEupu97",
  "key3": "WLk22DpacPPnfpEAXRKgEtciiMoBhmUb3mt7xyP6UtR3uGxzhSDZ4ZYfb7VcMwuskTdKdw4aHe777iQwsgW9hmw",
  "key4": "4iDAQMTCR6zH7pAv9b5LkJF7k4qeDtYq9ERs32HqyoM4oTkDzmJraFgTMMNbpbJdy5GU6d1w2pPn383djCHUyuDb",
  "key5": "5RdV1Pte2o1BqPdZcd8cXSCCHxAwrLAni4fV1Gsp4AfGiHwi3pmNwgRaow2yFfDCKywb4UR5EY1D59hdboxoUDEu",
  "key6": "WzY1GPcS93a8NnJygauwZjW1ufUwSB8GkzSCCeNrgr19Rodyz7qdoJ6ZyNS6YYGH1o6Ck1LofmzFEzF5NgVf76n",
  "key7": "31yz32Fu7fqoQmnNJWdpAzhQVNg73JseuVQabrcRWgJAhHsBYgCKYiAPAgi3eb8Ga37QRJkx4vaMYNr6CbmZcusJ",
  "key8": "Pz93m4c6nzQc2CHvqxJ4RauNr7NDhcLggnjMYA7QBkbb4tsc1aJYhE7ay3Qr3UuVEMZvEUz68zPT3fnwczzwRfE",
  "key9": "54m9GED8WaajDFWAjAWUiFV4518fm8BkuVVRastht8p24wL3Towf6wXvqWAASdxoxyEV7Y2CrmM6Zc5ZVMEEZzrG",
  "key10": "2Bzc84JqA6heXTmynkCHbPJuxPa9d5tKrpkAc3Vw6LSD3zQDDUPvQagdrCKMbMfsAiGGYep9BZ1nv2YAnsxKJSiq",
  "key11": "4VSxD2FNEPHks8DL4bPApG29Nzo8eVPoQfrRdBLYbEg7Ds9v6zgmdgmmWkzDVPM7CZuBvaP3Fg7anEDmBmXbnWgz",
  "key12": "42tfXyWy19qe8Rre4Jq6yAF7Tifsg9c2ASdDjz9kbbXFdFTocTVfdnMDnWqngstsTEXGLqD8mcsQyD72ogfpjeyi",
  "key13": "2TWp62URHMs9k8aiPUJAXWk9iDpAho8Q8SJzoe8YWop5qWvLn9vdVGcmDdqpNcUnJr91Uxa9cSozZXZj7pfYFxFD",
  "key14": "21ewnFwqEMUxQqMb7XTWhJfjrmdJVd5rBoTU3PghCrZooNyNJk8AwMN5N9AA2R8MEVnboVjrqPQk7hjGqtShArhX",
  "key15": "5jJCMADvdS7TyMWcXdABYrHdrENbvPfgWMBiDgWTQjRmAi17pyXuY7kD4aKJNpnR3pH79zz3XCfSgLfKHqEpDQwn",
  "key16": "2NBi3cJFZx18uTUzWePZDfk46eyXWWg4Y8F7TQxGkgKD425SDPy6nUmXUdseNzBwwp8jyjp5sJD7nNJTVp6s4Msr",
  "key17": "65eLHbDSgiinBVgcGXMbKxomP6xMq54uAWvxP6SEVpz4VWobiAkHuXHD4d5zzD7DZMtBJFgd6uxFwTnVeQxyfT9v",
  "key18": "5xt1Txbfx8xRsXYtsnboPCFdY5vRh4nyFpYyvYpP2hXo8dAK26C495FvF13YSzjKSd4nxAccXPkN4hPDVvuLD4Fh",
  "key19": "5F7ZUGsfHRd7eYw8J42JpHiupUXLyYPxHMobFQmM3EzDcgbD6LcAsAW7a3L6SrBwyasXFdDNPETdzHEztCZtLzv7",
  "key20": "5n4mW58AusoPMu4Cpbwg8a8tiX6zWaxE4jsxauBYAWMwV8cU6LS2msKm2DxgC5eSagn1TcLZdGpSwWn57PwBa6j3",
  "key21": "49uMZFHggfMuCEcQQ8qjPr34Zh7hore1Q68v2WM2oLSwBiLm7YKsmPhmxm24j1jg9WspdqsBHKx3frc651HyMjDp",
  "key22": "XsY32tBb5J4Xd3J5QS66Ktt3zqczPwMsGKJGAVwMr9tgL7xt4ugDCzAYbrBpVQqc6JPVByqhcBLoViH1Agomrs9",
  "key23": "4Z9zZ1xk4ocLjLCTuakYPqCBszrfnsKV5d3FcTpeZm2TE2qNaNMXLNdNmxHurpCDd8ndaMfGznfDxpnvf2Jt4Xkb",
  "key24": "51gz7zCG7BMbTYjU7K7fDhHMjdH7pa1VMGjYCKBC6hTWR2X4btaNoKeTKsZHdePaKuRQuaxBWZNTC9kQpZ2LKTqe",
  "key25": "33QXMp94Y3cAWjkj5kRBe59q23JeD6AybHmm13QV56ChzHynddsdE7gbVxmJHP3PNu5CU8VbnmFLvNJDWSrEnvxF",
  "key26": "Q8Ga45FkTfauKpTXcd85W7pQAfRxYNBoEjxCbH6yNzm9jPwGxKxgb68xnPmPCEZ58HJ52MKQbMxYmRuMLqDtNJk",
  "key27": "4HBwo1fQMq3WXLE7yofUUNJKY1fGvcuQ82QY7prv2korW4znxQSTirXb2mWN3KibL4sFmrhCq4atDvY4EsxBWVK1",
  "key28": "47c4x1rb5tBKpVtPDgxT7RadTegoxgoLUjXH3sfDdu933HkgHihTKYQAi136FsT1hVLDvdVGHJUdc8TNNeBtVa1u",
  "key29": "4o3bSWfHUyfuwMuFMsujCanUfrbiAHkMQAYAJq4f3M46VhWZ3BrD8qv96nLSr2swrDdZgRUr2Rxpf4TzKXT7ZZpV",
  "key30": "4i9wu3GtZCxvfeucwcVTskxHJBXqBQFNrPVvDm7xsXayqdNTwU3A7rqNSgqRhD2nAmJj1SqQC7R72DjiRnYqDNci",
  "key31": "Wkr4sBot996onx2Ecnx4AqxJ7DTcfLKyr55UKJLt1RqNrF4F2nmsSeJ5E7a8asBMi7Qa4eRCxtBGC2bihaHUzLD",
  "key32": "2jSBE3zRyr2ZY5tQ1uFPiEi2wwEL9obohnH5ixi7CTph5o5x2P1ECiFw7Qba5UDBkhUBuF11C8zcH8SVRunrHQKF",
  "key33": "42zFJPkgSRLggY4HdRgeccGgFxc8oWK4dHGH2dyoqQHMtZ35nhVYdnWTuQohezZvBxYgWDGxBBu9d39ipW1TqqET",
  "key34": "5cwQKnKwhKQHKsTsrZNzVH7ZTLMsfhGkcZcF4MAQn653QTcwd9edwbfk1Jd5DQe9wV3CDJpP3qk6pysGEYAN9SAP",
  "key35": "bqTVBYdGzU6sqNAykWK2j7gMa2eVKFLJgM2o1cVSpTRmTH94rrRAHMgMSHvLsVCcjCFehKLouxHUZv8ZfdNuftK",
  "key36": "5jTzNVhn99tTxF7joP1cbmsA36qr7xg4xqLewo7hwSSJWZn6k6x2EtjgzDkgdVThNx6f6Zy9N3NU1NpGypiv9RkP",
  "key37": "2FJ5PXsC456C2pW4sMvebcZ83H7DqAjwEXeyewL6APLY45vS69upe9C29Gq6McDGMgX1TvPdwPhvUPgfziSMu5rf",
  "key38": "5cyEj21sS4JKJAEhG4sHknYJLTmDtUH62kDNMdZ2YY7gR7D1RwszuU5sowMsP2hPSiQWuf9Zbpv2Hdot6Hn1EcdX",
  "key39": "wb5twN7WLTPqsrmm1eSuTsbSHda5W5Hex54fjg5tvFx1kpnph6HezsVEb6xZStdtWx2iTnorQqWTUyyYsmaos27",
  "key40": "4LpJFUHPJnqpDxuaXg6oTMep7PR3xLrcWUb2Q2Czi8TiZ1LWDij1xc3quyk8MSAB4BwQaX3niqz2o2mP99YS6DEC",
  "key41": "rSfh8fFeyfcUBRWrHDTti4FmoNJPJ7xCXR7FXw9pTp3hRmcj4NMBJhEiZAQxgYqCaTWZzszkoTEMJSH3tncMGs5",
  "key42": "3So68aPTDyXpBLxFNxJDcnwYsm4ZPHpXvUg7bpDhhreUu5ztGFRksFhPFXXCjprFcVmNr9mJvYNTq8uMiP2JHqYZ"
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
