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
    "hvJzR4xngBtfQ1TnvgWEF1g1jEDfvFNHZ3GiBbBd1XUGfaYahDQBcUnULvwkNu8pGoNxkWsrhqpv4gWL29MbSQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvZEqptgASDG2wvFFXDnxeMKCM7h7ivmq51kzBfHKkU5E7utCyDeD8VRCLSWwxNh17xxV9Cznig8295YzCBevph",
  "key1": "RDCgzuKKcy1Q2GZpKiw6UWn2JMvYdzwjvzKuhPesqqP2fKuJPzuTz2g9kjDHahTa3G9Y7PxDcuxmdtcVQZSJHhn",
  "key2": "64NMxhYLYj6PxtS4D2ykUXPVd4daBEtMNt23Sdkj6zhtyD6xt8FLdDrzkcfqhgCKGxn5rtFK7aC5s69Hpibztsmy",
  "key3": "5EveuevhCcgQuJunHVxUfcp9MTGJHffq7C2QLXFo1AQKAWri7eRNbRKJ9YALNp6oP9eJjG6R8ggHH33Ex225E9MM",
  "key4": "3eK5ZmhuJiv58hCBZAfynK1rRYMnLoTGTqMwJYjg6jxjk7NCRBb96s23inRsUTkuA7EuJhpysHCvUtCfxWrmbbDj",
  "key5": "3iLz2N953tMuqkwfCgFYWc8JL9Va5TxsdYaK5UicKCrvm8HktnjxCMRH8NXJ7eUFCBmsBpKLiLTyYb2hjXBykyY9",
  "key6": "4pZtNA9j5gGor8K3w7hQtauRZhm1S8heZQHp2xzuWZv8WvXydJ9q7aJDtgwsqzcsL9L8jGuJsmgSAZcjfhrcBDzp",
  "key7": "4wHRVyPNHaDSdHf6K7j6GwhnE3CPPbkAzLez4EWRhgRiQjpXRPqY3x7qkUY9R1XLcLuLSvc89YmoqqjELjCnUdy",
  "key8": "5SZwCdkChuWPjhoiq6tRhfya65hVdCbvSxYLy7BksLhqH4RcSFVf3dQ5xRSwT2jsCkhoqgvnYdsFoQqziQUUMdvt",
  "key9": "3wWM8sTa8ZjNqFwtcWoBWgAuzhQrsR2WFX3ox7ADZwkqPVbqj4cwzSgmrjtzdVh4uTRJndpfNLmWxVoqwTN7Vz5Q",
  "key10": "kSRQe5fUTTj9V3QwvzQqLL3DT45CudxvyacbRkq6553iGXUHLUyYkA5K11uSJoCuNscMcLyhvkafKLeSpS4h31X",
  "key11": "5Xbfjb3VNoURJtK8iykGBAeDsa6KzWWZeytLhQ8M75pxXqv9DV3pdu556TaoMRbkjXuz8Yuby2i56ypKs4YjJmA8",
  "key12": "4SxBxw4uN4MxRTVoHjEekMDKNsaDgnFnv51t2fa1exkuf6Mp4AV9rKpbZdCtscsZFvbMLWZf1JDeEKJXGyostNBG",
  "key13": "5HRrMwqE3SgbtUyVvJp8cMwFvHyaj6HtkNLotUApLcCVcsBYuW25g8oaT9kgL8BMWnrMpW3eYbEX2zJgyeekWca",
  "key14": "3tVB4fowdJSnS2wAcZrXDY93JzyDZzaXcmjyLJ7fqbxQSEEvqpDTUtsC1V8tZCgUEweMB3UjT1UTWbid6s1Uk9j7",
  "key15": "42UrDkAteWuJ8oMZriPPeX5b4r4kgGypy7BYjeD9jveQ5Eqw9sKNvCF9qEPwJgmNzec9hZ7EjuSEa3LwrW6mAoTK",
  "key16": "4p4zCk1NgCW87WX58abMzweZaUrJXT3SSnvMoyUGRQaxLjfQDFdXn3fdmzSLdNuJbjPRL1oT2zP8BX5NZnkQ5Tqs",
  "key17": "5K7s37r9SfGf3Ktw9yp1XBq659uHBWYhTn4zLh7KQtDeVzTXKgJxa34rg9CCphZqRhEd9pwPt99BeC3D3FcRim1z",
  "key18": "2yCCLZWpRWv8v6zwfTYFqWtLzRYkU1tgMKgDUAp2vKrC9fYnPpsJzDycU5GYEMf4fBZqCVi9aoh36JwhFPqRCmfi",
  "key19": "4jXiNcEPEoqWSMpsB5cZKBn68wTQL8ETQgM1636AorwVcVHLFsDkgwrAPGUAgh579fFdGYqVSSwWdWp8CRWf6V7B",
  "key20": "5UFfWaPdN6YgRPsCY3aSU6TxahdixNtL135WuU3W61TheFpo8bVjMzRBUZKSJNNFK3UPzzGF32iZi6UpJ9DP6VAz",
  "key21": "51VaK1YgmJsz8GsURk4fAoNmr3gGSYNt2MaHV7CQJWxRA2PoBC4aMMz5HQZtV71RKt8uDtM8Ju7ynDk3MKvVdqmR",
  "key22": "5TRCBbwqkjuSsoNDTZx3PawFJNzEdNBLXKxcmKKg7JsLioQxNzPMYMjNBBS7Uw1pswgigcyRc8ALhwfUnr6gr4rR",
  "key23": "3t1EkCNW1gvUvU9xvQoNfcR9hiDmQrTtNXFDWJSo38zyYkdx21pcA5xwsJarWQwYV2e9Cie3WDhQoZQegAad3hTs",
  "key24": "5EHmPWgo6fgGAVQzHj9QZcnhemjyLidQR3NEhfBuHrazPuaYYhCFZZhRs3ZA5MNBxBLLqnczeASydy6BAksywgWX",
  "key25": "56RysJkMX8dTS8XhqGUmS8x43WdU534EtQsSHHMHTab1CDb4aUGyJJnncwHavP311fwrSPrRVr6xXXvoE88sCn7Q",
  "key26": "5LPCVauxP3zjWwsMHtsAky1yazevrF51W3WrwGRb3eE3ZC6BHc9Mtujsq33VEKdHzeB5D2LJDnfgJigRFMQSkc3H",
  "key27": "66W1SZWaj1iPrAAxWxz1Dd6GoZoF1BVyKKcKEXpFum8d1xABisRnhNxArsPysePeFbuSkEe81dBj8bj5ebbgaUrM",
  "key28": "4Ha4rnTkbAuchm2hNtPHSiiayQXTq1KzErdVKiC3uGEoS66zRtRuGWQLkAyDWgRVuCAoyKxacgV7vcoi8fpm8qps",
  "key29": "4658aXyiNY2mtBRp9yNJdBajkHnroP6P15cJUXK7TkUr99x1Ryp5xYCjv7oaMDDBhCn5hE56rXAm19S63E5XJMb9",
  "key30": "3fgJToKQZfVVMAZMmSz3HAN5tSgNWmBan1nFKaWvcqeDJktoGjWBK6VnSR5JtgpeRVX9Da4epPKzWo6vSzauB3zU",
  "key31": "4UjDPZ38PhgyVxiVthp27c87MGmC2F64tgSEKK1D5D5z1FX6MFCWmSJXcF83T3EAdhsvFAvD7se9vPz2rtxyyunV",
  "key32": "QkssiNW1xeGGL7hcWMTVSU8RNCjrn95oD55CSxcoSMTte8fVmQZHQwG4C7vjZBJUi39YKyJEVCgg8SCH17SpYcu",
  "key33": "3ML2qb18p82YqvybaynAi58G8ch9MJz1s6S674ZLZwoHg8wYB1uvFFF5CTzS7r8UqWQy3UjQJNZexfczbrEhjTKt",
  "key34": "2WpXYi3vxHEvYrR3s9saVpitd27LmKyAqeWnxk5WSP5hNXn2NPxe8oLAKS7GKhvg1ynQ4ktFnRkfgxWZYFFgD1gv",
  "key35": "5Yve8QwpnRkYtpEMivpL6891GP5oRgZgsDxdB6rgvWghkLThaAUMvd1gdDcE2idHkJp6BWy7327BfmNspcxLcuYr",
  "key36": "41BzsCQwN2YnjobR5xTtbfrxKR8io6RztfynZnge2QjXNZ8ahxDNhhS7oBZFRKn2xN3sFdbKm3oUX7Xqsa18uLM7",
  "key37": "54EUwjws3s3BhzcMbubbkukavoTwooUh2zyzzKXVzxvwT9rvKdNzVR8L38vVNpuP8z6xDVEqUe2nrGKTSCY6zzWt",
  "key38": "3cFb7RS9SfNr1vRtHQpbn6paBfEd5Q7NH8PyvGYPdNSNAX7g8MjA3TeAF9kz9uu1PeCytdxUTiFUt9ftpEaZqWdK",
  "key39": "2yiZBBUVku4P7Vv84okkaRsRjQSnNrSo7jTtjy8BQoaQ3HnAgY1h9gv6Eqf1mwj4o727SXNkaJGNs1Y1FGWuD8e3",
  "key40": "5PHFpEZu1VQJqgiEeKwSMYkSx6tCg8KoFzgmEr7CfiKotLtmpSytUjhUnScQxzym1hf5b9Z9xTV7Z743MMsNMfqu"
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
