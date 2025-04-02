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
    "3uSQEAijWvXmm8PFbXfGuSUS4CSoGjA7GjJmQqU7L3CYvFpdYgAEqr1m63hzfbdNd3mcRyzrCbaWMuPax9GWkRuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBGZfxnCP1PCS95p9YZqjPU2JW2vvaNqHVjnfkMHRF57KKkVTCpW5UJqCQEdC4dpLgE2UwaSwi9ggp9XDu95GWh",
  "key1": "3hUPWaqW3a8PxS4PbLY7JWHCqb3athSq9NXzQup5QmJ5yGhWNKrCw8bqVesboQQiVZPQGoJuy6EZBfpJkPzgK8uT",
  "key2": "5sPsyCG1wRq1hLhU4LW9AcQNzW5rytSX4HVwtxgj8rmB3xBo4TiknV9kWPaKSsfWFnA3XS77VyWpA1YKR8SvnaeB",
  "key3": "4qnnsixXQMCY8UHWtBmJFJ73nKTBsyvGhnsabmHUB92CRSTsEvddGXZLM1ET2wTSjvabL6qXWMj6sTNiW41KPKiH",
  "key4": "3iYVakhG6wt5bEDCXxD8EDwyKFoqfYpZpDstUgWA15mbA6fVCaPnP2RYns8t4hnAZ4PGQ6mVnBy3WTaNyxEoGX1d",
  "key5": "tpUF3LmUzUtNonkiTsdTjsWRUmSmSFBjSdnpbVZ6Y2EKG2pX4VyBTfj1khZ5nCNcDJp76EHCfw8M67rARfK1dCq",
  "key6": "2t1AFtb7EJmzFkRSdqXxs9t5zEsuvshGddZtyEeZ96korw2EW67NqJVr9KMEqjweZa5qVL33CEBvz4fAp6SAmyq2",
  "key7": "nr4MYDtnTXJQLswA371wTG97QYbczx8uYaUamgt2ojyE2Cd7CyKpKvqPA1dajGFdWXgMW3nWW4ELiCa7YrNuQt3",
  "key8": "51sraWBEVotFHFQtjzgHyzhid1BsWHHEb3AcTTqqWWmkMNT9iGQmBKzmLS2by7himF458PP3CHA2q1TaiNpRkZuS",
  "key9": "V14GLd9gYE9uQAfqyypj5pcY8EKLVrxJnpncuMKFgjzpVKZD1rq8B2bBgJWgbr5BcqHpyEKG94LLkWe68TgFAUF",
  "key10": "2oyEP28Hf5MgRvztWnkJDDkF8pMzkrqiACyWJRegvadExjDuBMptHPQP6NhdgSEyQuyhQkPZxgA4ZdoXvXXzgsB3",
  "key11": "5je4jDqs76Z7VmKHqbsJNCtTMzCAxbkN3e9uMvTKg2EsSQbTcxqD8nv9VBpQUM7RhFwXopoG96ekjvXdpgqLf1Li",
  "key12": "Ctnkx4yCk2XDZDPryJyW9kfdLXYniFVZgUk7TvmSoKaV1c9KBhczabxXcCTvkQyQ7jJTsUH7yJg9xkETDcwD3Gh",
  "key13": "5xq94F2cawmsPtNX6LQnhVZSvxuCKPKkJ8QJJr9q6d1aHy4z2i539fTwGZb51BKDkTqqwY3eJVbko8nibS356wBC",
  "key14": "fQHKjv4cfDeWjKBaiPKdiUZghZh1S8TWCfx8nrTVgGWjM2PxKXDpsNbziBmdvUU4UEtkLeB9Qfd4bS1NqQTJthg",
  "key15": "Lnn1ScRsyTjMZJsei6ybJiBJ34XfCvESiu8tbdRjJx1ppERu9nBuGma8FGk4aaj9myawKWU2LRAX5CTZcPyD6go",
  "key16": "3eakV2wYEpdG8HQ9PHj25m2wRNJzAtPxwMMWBGo1KywAVttAyEEYe6QWGzk6gEUSFkabND7NgsQrAFpaem32tAya",
  "key17": "5sxFv15KwF95YzqJLWif66DHom32EpsicErHAP3q65GXKeEQNhba4DTYfEhhAgaWBWGUCk5jbVS59U4mtjMjWtgV",
  "key18": "4kejSW1VjZM9mucmZrY2BBCAmmwM5GtFvcRRY1uwqVV6MZ34rKor6vf5gJyrVF6h4KvpuMEQAZCR5MsHiWRbY6EY",
  "key19": "4mSbkxjLX9witkGQ8md5pvrBbBzuThX8ryEYZXoMmoC19YjDZ2d1ftX6JvCQctUvHux7BARvSh8iKpWHuVFXqt9L",
  "key20": "36wbBbq3LPB1sp5PNYS2LrcdgyxapMnFQtTie7NRYMfjUsha8fHPfpFXZ3NURg75cpnyTSBdfREvKpBFb1aQvuhf",
  "key21": "4mrrn6owMVffHKgKhehjRaJ5hPBbE5f7HZPMJXSgpKX1xpjtWExM5eSjWtezoFq5z4XpBPP3CCkWp56y6PX5Es3n",
  "key22": "2gokpbCo6jw6MQcmphjp5YowbgVzzoTXzb7d8btB5CUcDaoY7kW4WxrpJ2T3nEo389Mh49o3gh7bwjE5mxGF1xQr",
  "key23": "9n7PZeu9NMM5bakoKMGjT2hCiceedz7Xe6sXGHSq1jqjaDSQ2uLQYERf33AxuQjcP9X9HgP8wntRXGUuTZkm4eR",
  "key24": "2hvmcxBcDpGehQFqFN2jXKKs5ym1ph9JCVtSCZ5HFJoJBfrwvCRC8ara3Pmy3FLvzHLWry8n8wjcFnbKfzQF1Fkq",
  "key25": "5iNyY3bKQMaZXsAtyuogdxKocuACFuegTn16ed9xXi3kdWm9QX2PszBT57wbmTRhGPU9jMty81wPQZ55JvefiA6D",
  "key26": "4NzpnJcteX7xxbgz7XDK98jvYjSY9uk7udNLdRhse3rBgQbvEn66GaF7SwrJ8XcbQ9zoihKJuQJ231P8f5GzJdX6",
  "key27": "5McozUrHPCsJWHX2t5UyR9MzWt3XD7jCU9XuN5JiAksJRBgqWW3noLxE3r3dZjyUya7RFRd3ech8got9gHgaYvsA",
  "key28": "jkvwT6aEBfPf5x6NEPan8Je57epaSc8qxouEz5rSpZddrQJAdD1bv8EiVe3kHuc1zHe94RokQKuS6Ck3cei9cmr",
  "key29": "48rDcdHaL23kAaXLM9diPUoG4QNPgdNYbFfB2RWyqyZWzZJMch8KWSNwGp6S16DyR223rB15PKygysVL36irzig3",
  "key30": "zXkgd4hTpa7xCczLSVHJNHPUos9uo6D89UkXKvKSPxdDgweurw1GXFeZws9bwpbD2JAUF6uUeF3mrDy8bhGZbrY",
  "key31": "36yp5gRn9U5HcuWH6Qht4mfURqy6WYwpsQyr3roviFAAg4Ta2J9euGDa4kXNrzFMfhXjF7U5vnVBaRMDR5KFtqib",
  "key32": "3MQmPDoWf4UczSVXdxxPgSZruXdhWFMfTh66SZTdW67tTRUVbgjFTMUhacQ45731McGRcT2DwQc6zbG988mPNcuN",
  "key33": "2YDQvr6k9cVeEyKU2SYsRUsQou6yevEBhYa4wQNYSDrR6DoniHQQnuRxtVjeJtYijAbKGdypEy48Fy98cSYBKX1p",
  "key34": "32gKp3bZGAqNS52QHWcijyvSiF5muDA7nxjmAWyvamyaud2GoL38HdYe2o1jUtspHPf2r7hiwQGEGdmMDyytAJbr",
  "key35": "2W3GR4oyPwb4okef8LpPZAE1JDtoHoY7NdP9Jq6Woj6N54dMJkz8H1UifDFQN7j8KTGkq3AhCtXczanCsSSwbb5e",
  "key36": "Daoe4nFPAKdfia9uPwGWHcVv2zvhpFaLyL4WDQ9wvciqmNUWfGe2kvE7dqWUXqUksti1X7YzDA1fygHnKQ4v24x",
  "key37": "5qZoWr5jxh72AVBqJJ3TVupQpHf5Nox1ME5uCecUnZVT6CaY9QaJF6Wm2CgLqFsHFUUgJMdrxDEYadq1U4YVPCL9",
  "key38": "5tvFNFhiTo5ayPFguuNhBQfoqTUSrpAQjzcbQzVU4c9Cyi67B3241UitJmVZAz7qbPZZRJtWudnszndsNWHuUXH3",
  "key39": "3DNSMVihJdTWDSV1uKDBuEHM8ao7GZHGbnire6PPRWmDkj6Se2geRGvqrnovfjDXjvSWjwgwnWWc66aEZEnETAeJ",
  "key40": "2ekxg4TgyWnWLbYe69ESjAdUR7KCmGvegzCRxM86AZ8gVbA2pWtmKSEEJvnasVgEkfNri5AGPaRJxx21nLrzxNgL",
  "key41": "3pvrQP8qpiVGxm6aEz7eHwy7oikiVDa9dfZAid9t1qqDF8zitPWWVQGnFkSu6XdPbPA6joCGpcET4ohyC1u4MpxQ",
  "key42": "3nyFyoGdTQ1K8dfNkNLndoZnK3vnAqBQSfkXKoyk9REmBCS9NhDqNMVW34xSxHsFBnH2tDAzBQDdKtfzwjWRCNEJ"
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
