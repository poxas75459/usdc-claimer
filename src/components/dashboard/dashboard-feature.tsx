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
    "4qFCarjnaDEgmXkCzUrx4H1Qf2gY4wDafRL3S2moUir9B8NdbgXKtxRWzBwUKPFpnhpvqvAyZrhtfUQqNFZ5jAHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247M6QgbcEfuDa8zcDwzG7A2CTAg99VPBHXjnYQJE8tPsvUDBMCCqdQ3hVVwsu6kNy9jKhcnSsJT4FQNDiHc7rUC",
  "key1": "5uBgqc3DEESqKLndRmUhDQbzvtneCeY87Pd8Xm3cqSDE3m3KEc8nJ8wjZFSFK37mR1UbTPMoXRZubPPytFyf5NQF",
  "key2": "aWip6vk4uWPRJC8RBnqtkkFJfxPpwfwc1QohkyxMcBfh6dtXP1h3amDuLWx9hhkf8N9JsgddXEGzBqdT9tqDB85",
  "key3": "2w5o2RQvqfgP8VdJhYPuG34McAci1aMYSWsMtxQdUJffX2p9oo8ZUBSMshumRr4gbBNXDzATsjzbPUBbeTJVccoi",
  "key4": "647bWXrj3bHKXpaHNrVE1U1fFXFUxz2ehQFbfR8NDpVUzgDvymCKmbL4y5PcHE6DB6cUiswJtxtbrAimVSJp3gNS",
  "key5": "LEhN8CBdwd6CYthoR5q8EpmnCRKKqmyNYHVnqsVLSiBhmzpaWHxz6k5Q1ik7jRjeq9dU4WTBbHnpGpBJBkbHWHt",
  "key6": "4GagHwg4EAC9cniJcYB3BLuvZyCH6sHeNXQ9g3PUcBVXxTDsaMmb6W2hiHLphEXH5zFnhtAQEuNtnbvNz9goKXFB",
  "key7": "2Cjq5cWXPe3XSNULHRD6cRxqT6Hti7ufAy8rJWnRU7da1Z1WaiiwL9S3yZPH9Y5egyiHxj2wBNbDJne9JBHzf9Dq",
  "key8": "4zW9D2NHBiv1C8AMTBxfqqz6TJWgarzM2h1wRo84S8A4kRBng8ryEAr4JcvVYpGG2AzCupeLaHgQgyoPRVoi75ub",
  "key9": "2GLgFjqbRB4GUPLe3YP7hjoAVRRo9qCPeZBJU65AcThh8h35dJEetma9V8ZQU7nch5wQ4Ydct3QtDoxGzx2fEaXV",
  "key10": "5TCPwGq2UKB5GayGp5Q4YE9zkCKgbPtNqN5GJwprfdVu8XGp1fUcqBczvSP9fKHnukywFLhij7HsQMgFCjVuQnXm",
  "key11": "255rUgP2GiN3W8WENedAEwvecZVXsjm967dMSCernjDiH5XVirNcH8fHF5p8CP2Jw2rTkzptE7W2yZX4rpmGBxNM",
  "key12": "5hMkqEUBoZ7JuyE8wD1sp5BUpTNtJKkqsv2DfPA9T1ucP5ZXSFiciUmgyQv2X8qvU8bMKkJcUhKFhdmzaaWUfQPr",
  "key13": "3ZSZr6ZwAP5VMWLC5498Mcuf7h1PAcewmzMJPBJVzkcNaSbGdXY97PZShds8LG1jj4pVh4sg9wxDsjq6SjcAqQcS",
  "key14": "3oyTHcFVqWr5dgHjfgb4ZGJkTRUMT6yHCFrzM14zqFSWdxPrUaAgMSfxateHjJAC3XzpRiNRogz67riMSsLEKhoo",
  "key15": "2uUFaVDAG1Yq6bgUeMyERbyDQLq5tZ4vFMW5QVTBiPfHEt55mTofio4GhNBVdVfy6sworh3a9Jb6oPAWBnAUFCCN",
  "key16": "Rp2B2maKZyhnM46KevkqeQnTXHTtHygzQoxaNNFRcsUdErjc7DZiAYdyVGb6MrxT4KcBdbLbRq67JXLFsAtCTYi",
  "key17": "4pzMijNVvpGqUgJ1q3muFDdrbgMC62CqVgA4P5cunyGCrNzNndqtSvGhPAx3R6J1RCNqJjUkcLtjN9nLefvfmc1o",
  "key18": "5H4iqvfeUqe2swjjG6iybVRxtAnb4umo41tkYLhiFc5zReVon7NBUNZ2NYrdNwpeRjNgnrJwgw2gmzSeGew3W47K",
  "key19": "2mjhat61hFnUyBwGL5D5ya2SsNdSKoAD1S1HDDMv1m83jBQPSp7gjHNHYpRxKXNKDozU5QdMdev1oZwACBGUuQZg",
  "key20": "4JnEN8bJrMHD8wFkog4ujW1NdarwNG2FXtACZ8cC76gBM3UW5CtPh4gJtiF4f5ErfDTnSHD2HzBCkFK316wCWDiW",
  "key21": "3Wx1C2e3JBZfSXTZE7oWA8gFQMycnbHLnLX5wBpU5qRmoVUwKggzLejoc6sq4Lr9uGK5MHqQGihLTngR3gbbxhE2",
  "key22": "2DZps1f89RecuQy7yEqEDvx6dmEKbFdkUxUmgFnMpFw5mL2bw51ancYFYmFg7xrxsSBg3BmXRiEou3VCCdEicwew",
  "key23": "2xKfJNHrCpuAr2wDquGneeAk4qMH8bhuATNGDGnkowPR5ux3EZNZ8rDbz7UHarw4phUoWv2pEqdmMmvEHF55vsF5",
  "key24": "4113XDzUMARdjDRGET4cfLBWrMeZSEZjdWVrSEiXeZ6mv5VR9PPiRje1YA1oFAAYZqra88Uwv2YQ8sUeE6qhNx8U",
  "key25": "3S5q44uB3yxf62CXJooJc69z9BqSLJihmJHa8EHh1QxYDepH76bo95WHtz5y7ofNrdY2gFWZjbdQWfZ6e4ivnvwC",
  "key26": "4h3qHhcsCx9S1qvuXTqzKmwdMtywvoniX2Vkn2pqQuMx76JMyc3gzJsVZBoHgru37pQJHZYG2eCX2hPszAKkwtm2",
  "key27": "3AWydh7ikrubvsYLEAZVhnmRkr5oMb9tERX1puurCDyrFSMgKoAKk9vvA22BSicvd4bjytxsSFikt6DjX9J7Zvor",
  "key28": "jGAET3yVSF5KiZHwqidpqSpULYRxSMhKjdGptseKQqocWgMLAeec9FHSRrp5peXLSareqUu8RTVErt7GEjfyzLZ",
  "key29": "2Ew7UqnxZdNMdeEwoCnFbeoyKeZd5W1oBe5z3Hn34EwFpbLQupPYrPvVUSbLX445HEo4RVtZfEUma5yAqZaSpGiD",
  "key30": "3UH7cV362gEQT1kaCF7cLGa5UpLHjwDwz4uG9DwKbL8sW3dccdZuJC3NWzzaZ6KAD4yrEqQjBw4B2PJXHGh7WwdZ",
  "key31": "3iWtHe4KakxLWRaJ8cGaCwwY76ubC3fWD7vRrPpQYxzLhhn5jTUqDBhVPMSnTSimQ5DPqrWN2sHAsepSMtQDgTWR",
  "key32": "65j5V7NhSGKnBmjFwUVcvBSTtVEW5JRC7tp3xerTnJEyhNh8NWCHpqdoyoFTswNQEqobd46s2JnY5xNCkGfTtHZc",
  "key33": "5mtYVQeCkeYHM3963KjYtr4c4G9ViZPitHRQpmaJthS9spi5nT4PehfNydD6d1pTCU9asHdbV82mxBdH5eAsNbPq",
  "key34": "3SDWC6nLTBmvt5BatrC6C7JBvPJHS1rYXiRQrarBAkVnNXgBo8qyMKiUwGV8kN2ZEGrEvd8HaKdWsU617EYy89ko",
  "key35": "61oicUwVy1jqDpaEkZA3rRevWBWxaKCAKDeYVgYZm3AVsrBeygcgdhKURepYpC4KJ8qHWRN2cebzDKUVBoQYqANo",
  "key36": "4Jev9vrmEKXtMxLiCq5DViLbcwkce4m2HBFZdjat64Lf2H2tXWkrwSrZuY9rhDLuvcy5Bcxj6EMmmGh7FbAfYuqb",
  "key37": "3mfE9kYHoU1mp7G9UA2v2Up5nB5sF7FeMk2wjsMC1MDv7i6jcmn7wofzwSs6xGToVH3qRfUsDQsnA8v1RRoLqAHr",
  "key38": "2yxD5yYgX4tZ6LpCHwGAh9tsYT1GFGBJLcvnEbKsKWTNVHhc3j8EFtidqW3mPvVKZxGjXVsktugYNPTc9NVJ8d4Y",
  "key39": "44F1kRr18Egdd8Zn13XVXUszPmfx1xTLoputBtVPsbdHmAxPHV6442dwmXjVFfhbok85HmPnpYXrEsNKdvh4apH5",
  "key40": "5jRXCSwdo3L8ZazJRDX8nNawJrH4u9FX8ruyBr78jiKB9rX6KHJw1ALKsZBiLMLg6QhbGMUvVw4nRvTdhsLxYQhM",
  "key41": "4hk7wBTi4Cb4QCYK2Urh3bCHCrK7LTjkJYWA37JNuug59moTpiNkicMWpqS1BgQAZMpLeGCLCy8HR2JzhL8WtEgW",
  "key42": "2oBz8eQbo8tMgSgf2v8hPFMkvGMHjiYzaWCdeGZXKi3pafqr8iLcKfGegxXLouUiCvgdmuAAXRdEy6zGDZYAZuTZ",
  "key43": "3DSYxg69FVybARmM7q8wJxDKWmbLR8RDNr1FX5CHpiqjMrmsyfZTY3Nyvm52UL6MuxFU8mUxRLT63JEVjZ5HGwH7",
  "key44": "4JzmS4mbRLH2bHy1VUdZQsyTpB47xKv9RVAmwsXnvsgRGDCgdFWEwXX1trcMTanQ25wRtxf586aU4bdCpcaEDhdE",
  "key45": "3ent1ewUa9YfRzieXxRyCyc7wtcSPXq54NFv2j7D5fv6zVr78mNGS9hvtuAJinazHcrgU19u9fEcEWXczDbkbmzs",
  "key46": "3fzACCBZs5sYqRfLPptu9hvu5L51B7JNtMhfXx95FQ8NCHsUq2oKaBmn7FcGYkJxNerDAndCKi1LiYwnPfQfogqk",
  "key47": "2hg75tSjzABVXrG4oY4RQcV67qnEyfoRPyYhGuxGk7eS9eK5oV8u8C1TTqSH83rxPPKEqdM69PZQhGbEQH1xDsRZ"
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
