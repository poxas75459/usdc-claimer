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
    "2BhJBkWJrATQxc3zVxaqSURXmHbn1gRspjUyqUEiTeMK4EWeUTsUiXzkAdBt2ZXD1LNc87kyfTqrGZkgbGERHXCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7LJABReXD1cbLMa1X4HW9VJpdNpfyNStKJW91BrYYXvzWEQSubbQZpdK7jPx6VtjkDbct1UyygU4enfpLJkeA3p",
  "key1": "3LPJSJ6itMnsr9Fy4Sfgwd727eKZLVu1H1PeEogGUx9r2ShxUxkCGPW2aCB4KfVw6pY1fTRLe5KAmCc16dfgFRPK",
  "key2": "4SRs1tJtoSwfeMfSdnVZQSeUVFQAYzUwEzY62Qdvcj2qsA9Re8f7gHH4Np2vkT1zud99UqgiWWrY1HQBzGG8ktaj",
  "key3": "4sJNC82rn8oqPVWLNxwWhZ4osu8aQZuYs4U1BMeoegY9jkbaj5N328FAu9fmCZqxEEm6twPTLBkNMSvrVQTSwYDm",
  "key4": "4VMGqDuZwp948Pj2Hy5JcPXiEhcFhmRwpnsNnEeCsRCBPJ3mPyebh7ors1SHbv2tB49Sa8PVUbyRfMSEEQs4TgqP",
  "key5": "S1URTh6w5gqBM8a7pv2FzfBuNwMNsukyZ5m19hq4orcGACx6ztimE9iERsLbHm7EhgZiVtVzYoAntBdRWiFeoBW",
  "key6": "1dZd2rj2MEtBAWcFwFGbNTrQzav4FrNSrULr48vXc8gJH1y5yXwrj82AZub2o5vNSaSgaGHzhpmSNPYggbytf9g",
  "key7": "3JjxsmHbLLAeuYk6J1JpiQFgusdkKzGuq8FTMc2bxU2UpPdTATyN3TBHKxJz6UCqQmHpYP3i5aZWVPkizEubnhHw",
  "key8": "koeKcpD4Xra6hUW7Gi9WsNnKRPcFZroxk3cF8kfZUTmnyApFpAsb2ynTbH7SLNcoFWbn4co3Ej4wS8c6MitHico",
  "key9": "4MvSAUmyp1LQ6nFiLnrP3bHMaUua1DEZLvnRHrmzb3tRoCy1Kqsp4iZSLxxoj9ffkRHZDT3pdHFUAkzZBQhsBABM",
  "key10": "5QDjfgCQEJzQhJSYKP5CaH5ZiSLgwiFTXJfP4FPtWjZtkXKyMsRbUsBtfkoKFgsfi7Jtmyob5avaWmhXGu594DE7",
  "key11": "ZWVEdRfGSgYRh6cEFcBz5kq9MfMiPNvWo9ZFr76vHRxpQAu4eZwWtknaBswTbyNv345bV3Qo74k1T7fhYqC66Go",
  "key12": "4q1RgoM9Jzs6aXHr5b2JbmLWU6LxBJDxUpKAmNQgaSfUKBxgEqyZ35CLyyiUCsPGKzmxPXT6Cjq4RLyTmqW2DYQJ",
  "key13": "3pTbMZNmEXFwu2C9s3Ag3s4CwaBxZ5a9ZA9M4pEi5y8AWXwWvcbsnhptM15wRe85GGWFeJAevoiP983hKBYm9bvM",
  "key14": "4vrYbWecxobvcgCCnj92PHBv82ZvL6RVAirWiZxU9GmAAcBmsuGzSYfBCnUsS3UyQTWAi9VRFAttYad5FQi78Txc",
  "key15": "2oe5G6agbEp1PsSUh5Hied89nZoKrNSvJET4N27obi9GfcdsG3vBj13eEXiA3BzdTrdKkeh6P5hQnV8QnKxaHRY8",
  "key16": "MEii4BQGUYYHaTrZspteq36CQzcB1ZwAr92Ee6MeSqNiadDKQo8hGrpA6sbcBeVPt698Jgu6ZKmCHQjuL8c5FjL",
  "key17": "5F4ymXN2VfGTKBv4dH69gaCYNo3BRktvfK72fYb7wxJGmtskFynDow338szQcar1oScwSS4bv7XTwXb7R4JBaePB",
  "key18": "3L9CnwT1aa2TMPqZnTehCCyR3cy2RRKWjUYcbYLfxgUmjnDWs7nXGN4e5Lt1Y66Eo3wXdFnhfWR8jq7uzA3tnPx5",
  "key19": "2XtLdzF12cf4qxggXRUEi6siKs7bcwev1RunMMfq4ryN9x3a3dj79Xp3hFhMQmeCyPjWfcvnjQrBLWjDTrqUpK2Y",
  "key20": "346CXkZvDNbp9ZNyQfbM9N1Ni5eXx2M5BiQqKdfjJeTVoUvaU9UpaHuB58ofAANMW8YkcD93oJoPLXcr7M37fesZ",
  "key21": "2tNTe7XNjtDEdvfosAofPn1JMY2SCmmiE1NmcbGgf6LYXkCaDYjK58ZRY7SDiubTY1WZraQPB7YCgBstLB8w7xLR",
  "key22": "36TFYRFc6fqFnbJuEoTih5GbC5ZLYZhnoGij59kUhssKmiUAtFpfbTzeYRRpJASFDLqgEW6amFPCDsEWzm5bNxS6",
  "key23": "63B6YbbkA1KCfhdj2AsN56XVCTcBBBt7UphErXGYoqj4UtLo9dLC4PQKZmfNwpYXBgJjp5jhUgqaiPayKXtGRTuM",
  "key24": "9w5s97meY2Pq1sbmn8wYhAiMMcJvuwEdsWwmTTzW2dTDCmYtJyjqQJgBoTaAKsVNXsKEdSypLzMymHrrUd4Zxs1",
  "key25": "3EGMqH2jBvUrGEbDUugLMJMj4UzjagQh2NytypR56vkqnKroqmCWfHJHShbg27SHVpsC6Mhd4T1BnoBeVjah7Jb6",
  "key26": "3YsJX2j3St9tgmv7fM1CKbeupKwUG56ebxdHppGkEM8AoprdH4aBNKX5a1b48ty7xnuqTANfrTQWawP7fpA6gHv7",
  "key27": "2dz22kRxwvFuU8QZXZxXJNTSiDeS9GQcRgVz68Q5xxW5otLB2KaoADTaXPvmSZeaVKa2LMnPgKrscPny1PRhP5ne",
  "key28": "57uDNDHwCsXdCpZc1posAAv5FHh1DJyEa9fzpemxpRY25D6aEjDaCSAqHEv827fGjBpdTV5zebvMr3y2LLsERyyM",
  "key29": "3nhCFkNcLCuaBBRgTN6GfhBjeR9mUpvTgEDmpDSqmRVoUz6HUerkVj4GKQ7BH2PugkAf6bLLBG8KMvFXwTY942Ty",
  "key30": "3hXXsRRMNKc11ByiaExCdru3QDxcM84EpL8am5PAHAjUQLKFVgMEFU2WSm62yzArUZvBKP1DWoiP1j2PyaWMpVvu",
  "key31": "24iatQpzjEWL936F7Z3CUGbZzXDjvg4mqM8Qnxycfv1S4GQQnv8uJNVDpSsuc1GzaakTDcZxwDoMRMiT4GEVFDGy"
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
