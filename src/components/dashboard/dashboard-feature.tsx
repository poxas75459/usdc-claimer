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
    "5satKAzNSyn5pNptfDUtkKeuyNeQjmCVy6WF5GRwtkvZ4SYUg3x4LdsRUVhUiadj6jfZQw3H1wPH8zqC6h9ZzA8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YAVzDBk7wJzjMUruuHpfADPLpEgkLMjJBWHRqsKbveYEqvYeKyiKv6zvcSV2QB5JFbNhpFeBArASRWgw79vsCj9",
  "key1": "4sZr9XMmAtG4BrcDtrXqrVYS85RfXCk3EugPiDTY2pgccQz4d6ghQmEhQxbDRhmnFqykFNfk9FSnz8fzJzBgaNKo",
  "key2": "SBCnCHwkRvvNzzsmC5vjvCB7PpKA8PcrJ6DCWQbexMXpdDpiHDZsR1rg3vPaWQ5prbqoHoMBcXbvgMF5AvkUrZD",
  "key3": "36V2MfixXAGeTLbS288nCsCFXnukYaYr8EbtuaMoBdFdKm6gcrVibL36xpCbkNnnFJZtvqv13psEGr3QPReqbdnX",
  "key4": "3LqpU8EAG6UT9dXgef6M5A5gh64wYdU1SWo9kjkH9wfmh3HUZpgFgCmBs46pvUnSuZmEc1faEQ2bLBzwt8SKHaBA",
  "key5": "2ZS1GWMYyyEDTB7qBmHL3h9CwSjQJVF6DiAqA2KZkLLbncHD9mjqgP2VD587PKFQM4QotmQDRoUhbtEeemqjmk6S",
  "key6": "4PyQzKQNA9gFDs9YHjissvEjoq1iU7njSVhkbTfBtEGVRpd1g1SW4S2t9KdwxXrJdFHuEFwLGLVtfJ2YQk7gPevF",
  "key7": "3hoYB5Qst4TDBqoFE8HuCmjDHohWMobr9DpMZp7KzNyMghNsNN241j9NSZvZPgn3YozP1gxjnbpti6NS1dNsWJnX",
  "key8": "4tJmMKiqpY4BCouD2PiMMaCW1QYeHuBwGzUz9qnrP1CD9fGmzJRS6SUfmfLFetmjfYVAkrXpD2DYjZNjLbJzWQvE",
  "key9": "1KVzZmy1XwdMWud4DyRiMyQ1tBvdGiTeaFvRNviNA5rkxczvgUGTvs2o7TsJvSGbuWDN89DePmSSE3qL1xVHMUF",
  "key10": "58BAsS41KstLptU6m6h7oEN7YLa4ioC4qvFvMT52jX2Uj9a28uiAansBywHdHNcTrCQu7REuEECmkcLEvctm3AiZ",
  "key11": "3kEE3izuXUfL8m9aqJmEUWGzPN7iG6Qm85YzH1kdP3auLNSANn2tBdxVAEv1UKUwBE5uc6ReYkVKnAxcccg5RBxE",
  "key12": "2CVWcgio53aJiVke8nCVdhHMeFkn2GAzU3ojXuxGNdEBJFXcGMj2YWbwf49Q58KmT3LBe2Y531kFK7qf5tchbUCC",
  "key13": "3wKoG8g6F6wyq4wGJyF1aycQPL9N56gqyRkgiC18jd7TC9AQWRpyp11tdznSQAQu5RJqdWvuJjTV7Woh8jhg4zoB",
  "key14": "4qBDYfuNtWpWQBSKwKa8fjRdkDprhv8KYrXc7bVTJNJ2jRJnnhXGQFKxonMUo1RTvFkgiNsYErLSyePN8ERSfMuT",
  "key15": "4fm7BHVusDunGcekpS3DxBNJC24iURZeN1c4AQ58FG3SBZdJtob7LcubJ75FccVbv7Gfhzt89oNo3Ze1c55iCqSK",
  "key16": "4uQDNPhRk8NUpqoYRyBKRQUUo8FxsjVsX2VzGpX35C9pEtN1SATJktbBkBJhSGf2NSBXyPaQkxJ2HfqAD5K5A3m",
  "key17": "Ay9pMuRMAGF1bzk2GzsmNoiRRpvVyMc1ezUpqFVXP69pjerZDtmSGh48BtkCQraf9zAQvuNjzdf3eDzsjL14sxd",
  "key18": "4RkUh9qbuyoPVdXWUTxwoH3hdd8kxYUibsUvGyX5tX52zAZ4KiZqv4VGrnU2mPCi99GTP7P8ToGq6NEcmG2eGARM",
  "key19": "3MgLexi8ZqFafp89KU7obT5uBMKjti2gUQhKMtNz51MiqW71szCjHsY3smKZfs54XzdriiAcXzBWbbZ1zB8rxYQR",
  "key20": "D9HyDR8WJJzC2J2DcGBQwNNnVnrsEzE6Cs3ZtGJuK3Hq3KMe9aWc9pQicQrNumBfACDYL6FrzcxDAeuFzwGLSp7",
  "key21": "4EJRDJL7L9NhcdTFLVwZyC1s5Jsb1FDbB1x9CAkWqzEoiwRGATJQjkQMa8WbRL1LTMUvxAKVNuSgzwJuU5KaZF7T",
  "key22": "4PKLNAc4JGnFEd6YPNhQbDQkDzHduaT7onz46Hjvt9BN4quEpKMDX5tvmzYyz9So2dRCJqxpZNTvwukaovvgK2fF",
  "key23": "3cxQb85iAWZhKenG1poabjd7MufomyPmeA6NnoHwiw7mXyERmsvkpTC9qFN4KWM7mVU3ezPHgGeVr7C8PDo2RPBL",
  "key24": "5KX3oyFq5cQ5bzWj9omt3jDmECcgbhf3p8g6Sp4bvDHRdoy2goRAhVoCe6QMJXPJWdNvbeXENGGexR7cYmaLipu7",
  "key25": "5m3nPN8HLNh6Yum9bRtPDq5inFTeLieGWuv7WDLGcnvXz36RhYoMxqQmZz6xprJnnzRyaWqciWMz63AtgvpTTyB1",
  "key26": "5Wkjny1aFrMBF7C6yigtTgofD2yVeUHnUBNFTmSzqTt3JuWKbQ1mGjFyFuGLNQg5vZAbqLbnSAC6RpJMNySrNdM3",
  "key27": "2apwqxv8qHNPr1AZsqRxpGriXuA2YFswPNPVejVjFbKGsjhzt6hDeN23z4G3xGxh2RBJPSRXM2vdd4S2o3ZVG6Vh",
  "key28": "3bTYu5Edkdj5GdRddx3uhQKRkZJVuY5gDH99wCWNuvJWatYnWpk6kqse5ySydhUkW4ghyFre7fWRGLmCzfMcwZEe",
  "key29": "5ckAEEPGtZo2J9EHBaSdXwhb3uqhU27VXSuqfrTncbLTfzmF1e7NKxmeEHSB2zkwMwenLB9chhz6ixkC6oqozszA",
  "key30": "M3wCCDDzn9Rkq3Hc6ZZA9JLqJk2ugExPytc5Bk6ejbqugrXwbGzMnLaorBouwvAkctDRUwPQe9izGsfHwqBRdfV",
  "key31": "2cMWLSFo3x2F8EwZC83epQEKYH3MU1eEGJQFqA4xZMjjwoaCfyNsBqYC8u9huCmM9yU9GZPYoJy4dWk9Kfbrukgn",
  "key32": "x3JVrPMWsaS3vXm4We4ZKLM8oYhPnCnYbrp2e7MRmNN8SGEo1ZXuS82Gr1b3TjCfNerxpaencGpyPFT9YuSsZex"
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
