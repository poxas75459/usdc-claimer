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
    "5WNsHaABGiJGmWSvjagc7fqfanGRFM5K7TjaWWSofXZ5iLGNGGWVwAr16idS6heD8iwzaBYV53srtRcHDfw5yjfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zfA5LgugsqukUL57rh2nJzpVXA3eDnBFvDfFKwwQh64QyUL91pufkTsPBPPwULbC9w5CTr3RD1vPXLsyHPBrZyJ",
  "key1": "4QD1K3ghD4hKe6TVecuXs2cswQkpcE5bSHu9JQmwvHJ4S2r1PBaMvjHMWqpw9fqicraHZpRXh7gwuhRVo1eTjPsP",
  "key2": "3iTb3bz1a7iNRDiQyXJDnvCRg8QbSD92JEPYJ5JpqcxwGkC97JGJywjpzsAVQpSWfHs11tzHxSzcfRxH48TUh8HM",
  "key3": "5wR5XGPTBi69BW1RBbksTWZsjuN8mQQRjwG4g5mYrTzEe2xbkAJDn4WAMHU3pPRCg3e6x985y29ekgHmCMoSiSRb",
  "key4": "TCwNQ2EoScbqb585VckMC5sd8qb6bHJ2iVmoCcbZCRqGGA2Kx62m7atJiW7fngAbnTfZECNgoSrsBUqNiGYzCEh",
  "key5": "3wAj4Y73esLUVFwGj4dRSsHXbKktNHWvsPM4bT1CaKKb8YuBFEx1Kb5QABPwx9JouGenLZHGuwx8B7E4n7dvRkEE",
  "key6": "211X3LkvJdjvxgtBhbQZNSpckBPEFhdynbpg55vNQEWwykDySrp9BymLpVE5kkjndiRhN2YQbbMSFhdp1YjCrB54",
  "key7": "4435UE8GWJtaoWcGhRcFhmsCmM7zwPJDagd4AXEPDBPtuaBfEHqnbsCXpdrUVU2P37iJpBniLSNAFyedJfbEF1W1",
  "key8": "2oGV2Q7GpBjM7hF8QrLei8VMbmMfaqkiYCiv1rTEdy5vh7L2RazZL4r6tmfp1ZJn9DFiGF19k547RGZNNWyfaXbj",
  "key9": "4HZh8AGPZLoNHfjJrGMxZfAGM7Ezi1CRFjhZSrfkr7fBKEivg8Jwbjze4Bm91E7tCurCmAvX5YPp9sM6jGn7592A",
  "key10": "5afghJ96PVZrd3PxXyi8sS42hkBZgVLa1qx1iaEbXTMH4skHUdbkTDpMEZwCZQXknxJxyi16dMDUC9q8mETZSyux",
  "key11": "4G1vBBQmMCgvzH27ac73c5qRfS8BpbpCmmtzd4WjKDYi3TWNG6G1J1NNus5fJs5ZfFFihcBr1WfUroDVE6MQYyXF",
  "key12": "4cFb5PJ7dR1fu5xYBRWR6yReaLbiHsuzLiSZJ19tnGvKXS199qjUMyynNEMFQ27gusqUBADyhCzHkmtdtAGKTs1z",
  "key13": "65VPUtqE6ZESyxhaGvjeBs21saMSdCx8eFEwe97RbPgxazUkfkVES1oiVjaQtNhFjSNFJ3beQ7ycg3HRMojvRRLW",
  "key14": "5iucuQNphnBkHxRhS7CA4PrQKz1QaXEtVskF6H9vjJrzccnv7sTyRHtg5Ez3JJfEFfnmEMEgfcXho2ZVhB8KHEcd",
  "key15": "2fRfJK9fmgnKFGTJcp9RbYegPcTnp4vmuCPZaywkH3R8gSp7Es3qVmcSAgLSzaJXcHcnadgRn2HEpy4CATVn74iL",
  "key16": "5u1t9CJPVLqeNjvcaLac3FAXYbkjkE4QhdWgwHV1P7vPDkFbkXfDnE99PghfewFHgidbUp7j16BfDVJwszAaUGj",
  "key17": "eDmZGQwTpk9g8xdHrVc6XwBXSUFAuocDQJ6fv4fc3RKepzQ6RxD6kJMzf4Z562zPePAM7GDEYExr527bm64pDmx",
  "key18": "4UWB3zm1NMRbMSAShV8aqZiwyaxJAfjFVY7taTfmJsdnHbiGyL6HRLxdW4GHREwedp6heQqophDLu7WsgeyviFXS",
  "key19": "j8dNXHXDnz5Ymu4vzo94SvZgfMXBnKMDhiRvCqfEd55UVWwxEzBisLavS7GBDBjUN25yimzsjqRZh2L8R2KAJCm",
  "key20": "URZpoojmWut3RmkzHzdC1dJCcGQWHn4aGVuzeg6ig6NZfY9qAXN2QNHUFUCnpXLf1cj5afmr7iSzkVamD8BkDRH",
  "key21": "2XeKXJnFqvdP5JwkozC2xNf2qxutkouo2JxB71FhcqCiiHMPhVXdqM8kRX7sk72gg8JGGoRY5Sreto77BmXvKZ6V",
  "key22": "5pDZ7vRXfGs78b9DEwnCEHf8FJC3uBjWaCPGbykXHVDZyUjfx3zmKnAM45FncRzAqUmzpdsWBMvz23fbQ9bZyyFA",
  "key23": "5v9BYsmXKhoSHhEPUqbgcgETHAnji6jb8nxAAgffsJGAMRA3cLUHkxEWk8qhknv1EU84pKhvZpjmpdytxA7JrpVf",
  "key24": "46u8Fqv6615eqK6u8B1S1cQSY1515kkGSbYpfyCvYjxZnAZAk3sjFfn8bc9eCa2bbUgP4mjBsuVpvY5gCigLh9SY",
  "key25": "2KvS2E4rHeuX55Gb6MX5Fh2yNVj9DgnEx228WV3gTXNbwo8nCTe3TgazDmCC9mCiEREyoqQjch72RjABdRskgybr",
  "key26": "2BJWuK3GitZLS1knHP9Gr4p7EprrqTq1PCegaN9bTjtBv5jFjdkZUfRoUEAnehQgbP2X26xbUX9HYt8bbhyYcPGb",
  "key27": "241dSwpaSugJGnUGbiNC4urrnxnLf68Aki6JJ7P3QQoCpeBX2k4cXfv846cNbjzmB5am6mzZUcdC4cCKME6TPDCZ",
  "key28": "4Hx6KVfq6fM5qFynkr55CTcMgBxuF5rqJfLHe2X6mqcJtaqKeAkVam6bCKeRyohJtpFvWmzSbjpjzMGoWZ8bAraA",
  "key29": "4ghtRsjkfmd9VDJHSVQdv25jK4gcvVRvKAJVSVkVLYv7KnpwR3MXrX9t2HhYjduDGc13T6QBeDUWxDFudbiVkLPD",
  "key30": "3WUC1wPuEt2FPVvtMraLbttHKaGrLDVqLhV2kJFcuDzAQoLCqanMfZxsrHxixUNJrjLa8bqtC8msZmMTehWi9vJj",
  "key31": "2o5mNCLmBw5sWwXcxC5MWtUBG7dMRBjJTNcv6k1BJkfjSyZA64xntdxuoX7afPrjjWzbFdBdoCJJQ42CY6ZzQ39",
  "key32": "EJiVQjTs8YB3rfb6FYsk5PUbp6D445nm33AjnNH9YR1g1UYwufLbo8GewoQWJcoH5idXwjYRRjbEomRdUzEJrAZ",
  "key33": "jHo3r9D9mUxgB6HHu5LUiu9UkbaxUQBLN7srEQtcnAwDFrSeVoJwM4qf5a6hmgsoX2r3SLe2nymcqVTvmHRa1UG",
  "key34": "vWZS1YmRSX2PcEyY3sWv3RnQWGEGy13TrWgy251PybkLMzvPeF68eEbMcRPLUQjMk14AFMQ6fQYDMcMEdFEgZT2",
  "key35": "2fboXrPHMguk3powMvwSVfXmy6dF4xTiFLJZdmnZz3V7oPoieCKwnzbPmUtPPYSEh1AFYnzJp1G3wvLtMqk42j5f",
  "key36": "4yKgropDHTEJQAssXLzq2Vy1Y6qk1yL9YxY23XFDfHXTBEmKaEQAVjueHECkX6TNrdmM9iFFEKfPkTxspsbZzKE9",
  "key37": "52GJEmRMqDcxxiQKkvaMnPDsBXxFk4hjjShNMm75dVxo8PTfH2dkTgJZr9m4c4FA9MSinXRg7gCSZoiJgw2swyH6",
  "key38": "3Dajv1kdf7eZ9NAFJ87uNnzeNCt9eRLiXrGBnTwhPnA7ajwHpz39rqxMWHgmqujQD9LbYy7fLLNX5tzzfff9kDuP"
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
