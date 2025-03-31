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
    "24aHd9kSYowJ4URkYkUZUBioz5WXzXL7jEU3uK7TjMLHdDdayZjAmNdBZdrJR2wiXpghLLA5qsVVj4DVrRSkLMgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s5Y6F9ck89bVHA72214VZ76kVTQcp2cMUhUAGVzKcgsVgEBMGafYF697grBUw95JF5UHaZQYTkwWQj9cePPXfTZ",
  "key1": "3qL6GpwwUBKERuTwpASwDFuzGMz72Vh7yUJ2wATUhYqBZRusaecsPpbgkoVsp5dMru31EWpsmwBU564HfgjycRVm",
  "key2": "Z8ee9ZF1SVewTsPftoKjVDTX7L6JgsQ4PJbYS9Wa1Bh19EiGi2ggVWwMYxgQx6Ae6daHGwLCMgb7VYk1r8YSR1p",
  "key3": "4qEQ8MARRtj2ebgyobxbyJteFgv19mqzgCZzmFT9msAgT3GbMwM8rAF699pAq95iKs1BQNXHv1H4t1rtjMmKJHti",
  "key4": "4XC6YN4S88ufAGjBApej2uhEmReEv19JWqcVDur2S4bQWA4JsobmsPmCxnS2U5fadPbKmVrs8fLsUSCDcBLiCYaS",
  "key5": "5LAJRRVLSDccdm3zjuk9zXVpfLBXkN29S7ppZTyGx6UjMBDJg7jrw3nzD6weMpui16cJN8Rdp5MKSL6uKY8xGvGW",
  "key6": "3eCsAj4aaL7C2cxj3RoovfKQFBPcjr1gTW7WjFZtKdF4f3ZnuihHENXA9Hf1CJgBdEsuKMnhaN4mgR8ZD7aubtCW",
  "key7": "3QvJRLkQexZwAqxA2HebpMABVWAh1GNXHhbBYPcCEhoNUUJpmzKbG3mtkpiGagABpiGNJ9M93SE67paP7jTMJMtw",
  "key8": "5XqsEPE5PpYvXB7UxPWC4RQBrRg9Nmx83gLfiwMjbLof9jK7H7Poa4QKrjTWuJJMKYZ3KpLpawWPJd6RCMLqhT2i",
  "key9": "56ZJDbM43AnJP4Sb5HNB95oi94Nkiw3FHukXYmZHZXFpRU74FdHyia5NBWz9eqYUVT2nhYdSucEE7frkMxGwRsJT",
  "key10": "joPBca1GQKxBSuPxPhD4SpHaR7dm8uTRPDNYqossmLUCDiHuZvR7yf2tteT2PRdhAStmsi8YpkE37vpjETwoWMZ",
  "key11": "5jo46i5FFSkJ3a7actkPTzYUB9Y5ygsCbw4topvwUEFCyRbUscaSpZXVQM9ZiiYHLEjUuZBPsT1zuw6FDQHz6a5c",
  "key12": "5c872s9zsymrPA7S95w8KfyV2FoHbuPq8LUFqrjJwvcu6U2YfyZwFBzdeqYoiztnL8bBYjdi1NPd561ocTdhHPW2",
  "key13": "27mexvck5egviz94RR3sQVSsCDojMizsiF6tEAQkEUg2GyBqTwWG6dFids816PL18vPJrusfGWZKdWLPE9vs9iVT",
  "key14": "3e8kvnjPN777HaFBcWHrCa2X2ewXnjMeCQUQwed9FvWNbwA3nrnbsrxfoAPGmB6iPBiy6Z4EYUKRs86fQuQ86jmz",
  "key15": "KDcN5vY7rBzjxetcpfEhTPPargpVqvzWp7QG2CYQQUQDvnVrxGDBszpss9rK5U5tvZZfa5JAB2429KKJjxtosfx",
  "key16": "2jmUmBP1Fn6K3sLP98vAVabBRQfJgGgBSyVbbEqED7S9TNGtTDuxJhLJbgVAB34wH21jbmmGH9Q57tJCw8ARWyJo",
  "key17": "22etoJ9XKmGMEcsQ9sVm56CY1tLMmy2r5H2xWBfKk8ihahe8PbeQgbw1eFUpF8dUVxBbiQ9f3Qf58kdKxiMp4SSz",
  "key18": "63AA4ttS4zzj9ctCUxYWW3K4uFpUDriSnaxKuMktB1pPaVkGLY7ns1xmKm78VFJDrumUsUrjYVWMYTEkx83fhbn5",
  "key19": "3nYUr7poXQajXJkGVt2NHbHNrhDFh5nWHXYLmyRQS3acdVGMNHv3NLpdvd6aTWGQgygvSBnxfNUpABfeFik7RWRJ",
  "key20": "4AhBNLDdExPMRiQBDQZ7wt2AdoQow3ZY9G6vBBA5yjvgp6XxPftYEghXHBCce9Ssef6UxNkaBbB42QxeS6C2FcNG",
  "key21": "2xeR5Hj7QCybJvdXM4W4YbtWEmqET9tscaUy5LHUh61cgbfsc7Goe4AHPiesCG35VdWNzFNXG2fyxJTe4Ft3nXnQ",
  "key22": "TbM1P2PYzG3txtaKfUjgX6ewfRspESgN8Ro6g1wkDbMVLjMChe4bgPG6KHPu6Kv7zbtW1DtxdW9Sji8D9uVoZxH",
  "key23": "4j76tCgCCSDkeqWh6mN7vUhVwpesUaVxUmNw86XUNAdWP6TBJqenn8oHLcPdQeYB99BU4jEaujgdqDjfCBukxXhT",
  "key24": "t9EXZeR48iKdLHPaXPLYiTARStXCKKDAJqK1YNjpphBGo9bdznuDxuAgj7Mo7kf5NA1U4W66wq8X9WcFJ4QxkH8",
  "key25": "4wh2G2DdYDkJPvXgKuFGeFodqK8rGwNPExQYSn9q4fV2saPVZPTrwoc8XcwFAsBny3QgKiVMkh72nrUHEEpas1tN",
  "key26": "5qzQyjPSqeQKRzk2aFcjGRkM84oGkcSVAVR4nQLiYydE5ZkC6fCd5xD29gNKU3LDbQ3JS9Rj2KWFzQZ5RgCPpDPc",
  "key27": "5HjmjsfqMN7fRW8eBmANQemdTsQPGHk8tQMhZ5jfR682BC9KTRouP7hVDXpLVkmEP5n5nJ2FQCok6S5HP77bKsXG",
  "key28": "2PYJTeYSeAhttrqPwrCs4XfrYuGSbTYBeBca3oVC1uQuxrPtZd3m1SE9rsA7kkLTWx5XWwn7hTrAkan8o63WH3F1",
  "key29": "3eCcMoE72VGWrUdffc6YGuwA6huFe7b5v6TqaafDDrPE5wUjJa8cRKqvoR9mzvM1YZ41D9MVyatooyp3HV2DDyha"
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
