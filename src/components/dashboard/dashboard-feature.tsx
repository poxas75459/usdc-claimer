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
    "4vV6tF7YTUBzLjLGggtZf9rmVTnw4p3WYZunNXMYS9QTdAv62yFRuTrpfsca6Z1xhtAAKVeem2nU9UD2vzD2wzpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pCA6ha4LBw1wmX2GGXRBvKmhidfegUbrJo1bE4ti2BBex1kAnEmBWdJ334prC7tysCszUwCAz9pd7fqj65NBhgM",
  "key1": "4p26zNhwoqkrfh6p1f6MtmYAfxpt5cJsDqjf2msu7t1WevScEiaCo5iePCJKLZDCu9gnDhrgLs7w9JxEeZLN8K8x",
  "key2": "3S8K4uE1RqWUK1pUZvekyKHfXg9e1WpkxLhSGB8bd2oQUFNxPEk6Tz1xfFRdfK24abK4ESDdwMswmjJsSScNWHpy",
  "key3": "5hKP187NMnxL3gPe2yQZY6zDcRz3sHhabSHCAv99XcBKuL5rzZKtRmNWi1VMpE9TJVeBMiwyP77chnyiBJC3GQGU",
  "key4": "L4SFB4HBR1kj7pSQWbjezrpnQ3mtXYavTjCKMSHozjRB19p6BQxisyFRRAvrE5cZdTePFeP8tCF2W4npdMm4rL2",
  "key5": "2Y5NTkKxsCCT5EiS4qDcDJ1EETn4f2q6ZNCpY7Ja21qwBPuMTUxhj8hGWcbqTUhzrjJKeQh617LpbQrDnez4ka5y",
  "key6": "3dgEERtLyrqt3xmGeThxScgofUQzzVdsxrwHjv8Lt3Kfy4rjgf2mnYhhUVvVTyNePvfoPb5jv2FQAdkQ2Fs4Dt39",
  "key7": "3QcmgpmBJauaCd4qY6wGksJahqEnPNeuNRWuNg1kgZinCSmP1Z2Nf9BbFhoiAaENhmbeq7KWBe3Jath5HvaKH5rx",
  "key8": "4UXTYJVjKxGs7BaPkUWBGvy14tM7PeZS9PPsZFw54AvqEdqxLmoX54soaLyvMqnNvkkCsBhzToq2jgWuPohs58DD",
  "key9": "4AgcBefE7phvVWQHXmPE26DLgefwDkQyseq7e4ygqF99dEwFgFLNGkz4XV3DxXQxpBmQKPdGDXo4WKKg3xbuBxPV",
  "key10": "3PoWzVBt8nB8bt1oanH6oorPPndQksgSUok1MY15rYzzGtmpJ2E5oWL697KUjGxdb1uKYGVDLfsj3RybM4oLjN1r",
  "key11": "3YZbSjjt2yo6Zv3bmb2pSroXjX5KZszjqtkwDVo7B8KyCPGR1Q7HdGPhsmV87Ct64LjrcP5BPLRMfRuL7KPYsv44",
  "key12": "2WvsbRP8YNLR43br3FRGHKdHGUpuPeUPjAuDuqvDUYoqix8dxmX64eH84paAN9eTLcYpwaDWGNRuE92c1QiGAtPY",
  "key13": "3mmhM4KZLkwK6Kx48zyCpNHqyAE71vwfazDwyZve1GnDzCKCZjLJkjdKBhMDL14RtEpSWFLYFhvL5GuD3H9YCU9K",
  "key14": "2FyhAiE1ir2TME912mqJW9Uvutkxa5rwAXUBcBLYA2YRLBP3tCmAWcYmNwPTCnHW4nVAGJwhYBERC4fytqFEecNm",
  "key15": "2TEHzMiYTvSjwduXzrgTBvPrrugqeAvoKoXQZtNjVUUqKaHzP3sJHrVhGU8n1HWKkKbjH46fLsyTaMBkGW5FXrT",
  "key16": "24HgLdoRwc6J6u46zTgn1TUGHKHjnxQWJJvHauGX5uB5WhxTrHhFAQuWJw823ckWVmMpVcWmATkzsg2usB1C3xJ4",
  "key17": "3hmCN44FMWYc1TbxAnj3F4pM6evvdHJ9jZxmiJ1sKHzJWonaS7hDgoQ6qV9iWf61x5VveP6kVVJoues9S6s2LXtb",
  "key18": "3ojDpPQ9MyXUTuhBeNmJukGXMPH3KpYuHc7Jrkgz3sEJXaAUmChwqr7PnaqZnBCdgWT5G48QDSrosxhqSUJpAc9T",
  "key19": "ZS3VGHDDTfUq43mQqJ3HytEf1ATYTkQoLrpQKPkxPTcmZmodhjY499vEGBRDQqivGZUZXfKMjGs15VoViRqvdVX",
  "key20": "4JnajmqLrMTZeoTJ1LJB6fEBPkz2SNhx96pMzZnHwqi7mbTAKXJL8tNoWNCRPZGtNyyca96Z9AUMiPr9jZ5jgJys",
  "key21": "38hvv4X74czoHhjG8WAnxfrSs59tGcdaiCa9PqZmGx8gHWx3eg3tUvMTJkpQktNGkrf83snhcwQkPQUPNjtVyLwy",
  "key22": "MGoDwoYGm2pcNKg6mysZ46Xf3weAndb1BMshkoEVDbGvA1VSwhYRtrZxou8Xh53BWcb9ruQ5LA9uE8Aev1DE6XB",
  "key23": "3H3qTyfx1RwnzyHRLUN5adbeYn1VZZobdTDuzb7GwwUmMYsSaxJaB5XvNeQMSZ4NcJpaTnxybJeBe26MKtp6GyGT",
  "key24": "63gfhczkw4YPqrFMofACPsuikadGzsXYNtX9CSZR31oJTi9LhyLu52ad7mhF6SKnG27tBF1sV9GFNtEL6V2UJgH8",
  "key25": "4r8QypoyNo7HBdXYCVz9iY9CaAx8c9GcCXbVBZPHFuaLRVEKLKdmb373GeKATxLovNQMCGBhr5Md5EEuAtmN6Qhn",
  "key26": "27uCD4NaWM86wvCWNtBYzZtYbNLTFtrMNLs33qSPMPX5rhiwExv6W5KUsCggwxrJMwQg2kiWQZEu86jJE3jU3NbA",
  "key27": "7wscZpk9rCxj97jKnVU6MLRjph5Abyq2U14zUKQQBpu6DdfftLUwEvetz2MHY1Y6x7Xy2FLqgxebyUfDmyg5ND2",
  "key28": "iogCcBTpCKE3aNhvnm6oLump1Mkp4v3bFywT3nUjuqb8CQ2kCxMRskBELELNw8JChs6J1LKDSrmQAhaPJaZ5agH",
  "key29": "EhmaAjKHimMGDt9YrDySKsWJV5FbXgC8EwrrDSYWBiQ1ahy3szm6uYs7dcqxws6V7eyVtERfLA4auzBiA2eZQyu",
  "key30": "uhtSvpCEWvwTgycYG3WSbu3Za7nVvM8ysqdrnyds4coYB2gmnrjozpUQ85qXY3gEVGixDsi9qU4yTV9tn4TDvJ6",
  "key31": "e3ZLv2xd2nbSpUhaskJUx2vE8qxsKmqo6B7pZnbq2gYivZTvQ1XGXWHtKrapeYxzt6zjTntUMYYxDNfZ6kvhxHi",
  "key32": "3NvpWQqpg3oXWwPJrZfAuZDrYamvdWAATTmmhWNRs3tYmD94gRKdQngHkLPWi3hyKzENo8xtbaMJKVx5X7rHmf3R",
  "key33": "2goG1ERu4Bbb3RieLMjGMTCJsgxgpCwYQFXhraPiqWZ7Bo2VjqHwMo7wCwcDerNwmLahvjkFd6QXv2JGqi5VFz7U",
  "key34": "2hskZZQBKxSHWAGaGNFqYkw8feKqyJjcx92AJdhaxrAe8UFnnPFt5tMhtwHQbKE1iiJepEPy8uZDKdGubpF45Ddg",
  "key35": "2Sr977JMsontcSeKLWj3fSZZtw4ZWtYfYkbaUK9LjcpyNJxpRC2ZT6x8NTjWerwDJbfYa6gPT2QKm1xDDTHG4i8m",
  "key36": "egJb8LHJ7Vf1ZnXt14rtFaRQx6XfxH2uc4iw9hKBLT8HyJiKdYaLYSVktd5atmMvR9dGWpDmiBwc37w8LcsvHPX"
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
