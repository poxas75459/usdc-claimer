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
    "4fHbb1cX8tKdZqRscr7gB4yDTCHUxptJQZERyAWB7MLpu2DFQEwGidgxD1yZQ4AQZ87zdVT8nhuxf5TCwa3vHUpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ADJ4omBXZxVdzRgr9d9bmAyxaCaKBkT7vT6NXDQifALiBwZbsCVBTb57Zzf6Uj9NHYRxTJwWuntxVERWsbTnFcP",
  "key1": "ASNY56NenEqZBKqxD26LyabX2dcwfqHi6MRmXWui2tsAWuKrubBpGatKP7X6zhjvhozMhZ5tHZuYJEJP4dr1XWH",
  "key2": "ifGxnY7kiywVuAZ3p1DdWs59QQtKLB5RJqVWqU1ogQL5ynvfULquUvJhbphX92SAynLAuUW2jD9L34W8ULFQscb",
  "key3": "51FyitarmWxijCKqyVLpCbVM55GqrKop46oTbvjWzE2zTDZouyPMPQ1pSuu2jVEYhcgiR2gEmuGCD6KzACWFBFo4",
  "key4": "4em131yuA52BAR7s7NFFTZ49U4aLHJPmuctob1quwt4PtNq6WtqhrtcNPJbJMn45R5QWAscJK5G1xWzmmieDVJAL",
  "key5": "PzxrQ6NkmvoMQgTGrc3dFqywUeriH58MLUuYZeY3kYz8o4Df7xoocAdB1YRjngcmQdftdYnuv7KN4BpqvmDWrmq",
  "key6": "3BgiLZgmc1Qvp1MJLDq38A9X5cR6w4U8AhfK4D5UU8vCf6eJoaK9ga2KFx7pnKvx2ZLsdrUEipq6m1UR3gMFx71g",
  "key7": "343EwApWoyw41i4JDGVvdUNksZLTJwypQzzwnVgZhNWq1tcUsHLhm47xNndjGq9evFMs79aTx2C2jdNeQtvCn3pb",
  "key8": "4wAWTPKjZCiDXgJzBu28TeC4syTVGtgcnd9oZ6MSQ6grFkW1H1dsL4omhcTWzGWRLdXwN2UNf1PFPaKFdpQGu8iN",
  "key9": "47ZbaV254zQn6N1dbCzGfBFmgNJCBLoFCALmUw3cqrGRrUFtoge1toM5dHYyYaE7PfmCjJBcX1kTQCeG2LBBnvwc",
  "key10": "67XhraiCbRUza6NzaxNfYGmx29FSpMeh6mRaALsmzXu2GcbKoWsZ9cUZK1Cp1BfC3syFkWWz8vK8mvxqmzrkbWPj",
  "key11": "23H9TnNzcP7VJRvArizr1AhtGPNwdWjZpmJxNUGFcGyJirXZ35n2L9pa5wDmFoFLdCCeo72t1jjWJjA2gimUujut",
  "key12": "2r7qjFWDZ6mgxezVTApYmaPVrv7ormAunsdqzGjnqf85gssYz9wgYSduBMj7oAbWdtnMKtPYentN7cAhE3i7AeNJ",
  "key13": "2ruLUZLq7DbqLMZx8aTVyL4sXNRLPQ9nvhvfYiNbG97F3QtsTAAg3yX4FMSrWpnyN7sV43yW2HRtV4H8dqknPVEQ",
  "key14": "5f3zPn9JSDhGAg1eFmEpFRUXWrUVXLpWf4Gopo8gqxacuD7fNbCEVdzYu3fC3VJtox8LBYmxvyFukRwuTXryAwdf",
  "key15": "PbcWCE3vNE3WHnV6m1RSngmiGbHgDUgaZHWs6nEFQT2sa6gVY3hwoHswX7hMpUbtFBniU3prMUtmJiDZxAaSHve",
  "key16": "4acKpka7moXbr5eK156XRgbptsDXULVh3QH1hY6YpjgCh3NyLT8qJuRmvTNEZ7wNq3RFps9n6mzKwGG2a9WR6qmS",
  "key17": "4zLfsxh8PBKrbqV8EoVubeycQRJdyToBCBxuSUamYRdR6jug2gQGXms8z51P8u776WdNo8QimbhGFDU5VLR7x1ya",
  "key18": "5gbiD1Hx1FWCMLhRtDfj6FcZCqeHkyJLmq5KxD5xNWHrHKzf39u6awZ6Qvdm8nWREMzTv8QrebeeHVXq9ojAgzNn",
  "key19": "xq6NqbvVr11Fh67PHrJYqoT69v8gNeotrp9HnDJZDveo15tvna83eq9L3nD5925W9wBAxefwdrkSiXYskeNW4rV",
  "key20": "5vAs9Sxurere2M5GMZvfUbVMD49gJNXQNkMnq9cEn9YFNpKEP84HCFftCUizcntYsFsmMWgmLBpvdaJuTAKi6yZc",
  "key21": "4zBkxhPvKw3XWswGo9eyqeSYGj6JLr54aAA5Fb6mJyntBktzaZgqwT9hUZk2ZG9gTRYNdBnSRsCoLETYUq8k55sQ",
  "key22": "4kQhLgpSztP1i7xPQxzNFtQRQ2VE1wj7HA1Edfk6Zs5ssU5AbggHWRg4bLMugy8g3rG3NM6Ag7qMpSUSBzWGEWEP",
  "key23": "2KZtR8XYFfqEaFjDvGHUVniPw8zvyQtYRh4V2CQYhfZ3RsNEngqAFiGa3gujtVg6SDeYGzQUncavpwnEoaWuXzVh",
  "key24": "4uGEXTvzkndR8C7Tcwt2KAy4dg38NYmG3CSRTPjKvkuSsYsq48UvtY4GDwcCUXbJC9n2fsTZdhjFey1WsqbDcM5n",
  "key25": "q2nHMMukUHCZsMA4aqTg7nv8GfJ8dHFYETyPq2KWWTcAvPyJKT2E5JuTEnGVTb74UFAtpsrRjnHvDxn9iBm3eS4",
  "key26": "8HEf9TSUGY94nkaDqxwkvhyCSHwcbQwCknpkgPPSjJ9NcegC9SCvwGRakkAjnwUfVb5Z5PYnvWC2EtxdBPYfRQe",
  "key27": "5WUtFES2KtTyRuoob6Tf2CMZfbUN9dG7DUftVRQavrGxnTBYEhXU9XunBRfiAEDm6SGtGwnx4Wx1DNf7tUqWmDDX",
  "key28": "3mQD6t6Je8Gfr2tMscc5DiA4FhCGK1HTBTjxALfRA1EbRdzdpzqUjwAW73ypuWLmKUdWANuNunNhidQi6773BpzG",
  "key29": "4XMRGxheY8nkYXHu9g1PsPuMPmxw9NW1s7bobdxeMfzLJr1XJdHWvfue9Zds29D6XCGrJAvqYjfUUHaczsrZNBj2",
  "key30": "2BcT3qxXoiz1ucfAxrzCSzuAy5iELtYG4zMB6J2GojV5kaDy4HgZcwuJQgEvsepTJjtsS3ChuBv4khZ7K2cCeQzt",
  "key31": "4iJ5PGK24J4dZSDuBHdWUpZNAT6ixXYVfWfr53QLmxFEuSVC2F5kSycDH5x513dzvCtBJdZuBejhZTicxjagHAfq",
  "key32": "5ENp5tGZyDZprk68vddrHBNC9z7anFPhrAanAqCACQFkrbhZqzC4AQdvTfxJeo4TyeEpin6LyWphbEaBH4fykq2M",
  "key33": "4U3Cu55t8TEWiWE2mpEbAsjgScuexXsRsDh5s4pRGVVHaJm77RuvpXf5Sb8V5qrutxqHcckoL7sAbyaNhMumidep",
  "key34": "hdJQqkEUp3tUWGn5wfhnyqa9AMdBqm4dgTxTqToJsfjegq1gqSgFcRDQRWBnq5Jgt5ckvtRQupdjV9wn6QWcsnM",
  "key35": "2hhdjWTQqan9LzS8UYWR4mTkcNG24k3uvZrhsvk4LACtbgx4PxWBoBoDnHRGJyop2GFxURM83T4fZX9MXhqbmFm1",
  "key36": "61qqk7BL9uZwRveYhnZMSiyWL32bZGai2DoTXBnnvPvcGXLdmDvfgjwmLPwsorNpdtLavR1HgArqmSCPeqPDuxB1",
  "key37": "3dTrD4FbHKC1XwFrcTum4ntyMNSfbkXXuwviZA1LKrZczPpqyQzda8zpYuPrjkxPkx8ERq34cv9Gnup5gjzChi9w",
  "key38": "5QtNUzr4sS25f2i8SdPWaxcqXFraDev6RVr7KLea4kD1bPEu7vTUer4zNyz3bFLsgr4Zx6vzDPcMSnLT6iuJusci",
  "key39": "5m14QsNG14dmmEx7uNtESKkBqF4aUFtZ2k5EPRsCxZk22XAJh68TVwRK8E8uuT95UkApCXW7hbwiyMCXBAZTnBao",
  "key40": "4X4NzsR8BFDERkTpVmtemFGMZsYR5iW4XtTwrxRtGQcAxApjazii8q3H8fm1yMTobqqbLoFHGqaa67WJYx4ApbhJ",
  "key41": "2Fw6XWK5scjVHn6o5XfaNqhKYWpHt6inrn6aC16hbC9exVnmfLge41mAZGunQiqvmgbW8QwY5HJ8MMdjFGzPaT1L",
  "key42": "4shNHk7zzh1oA1PJfkaFt1pyRGHkXGSVtsErtT6Z4Z6P6JmNz9UwfQqtGBABg2PiTFN9yfD9Uw3Nc4tyH22brBZX",
  "key43": "4zEm1xECxmApmCCYB6NM7RoKNgf6YKRCu2KHy9ub5CNb79rpx2rBVUTZKXfQJuEZUu32KWgH4hcHr2EoXWn5vvq3",
  "key44": "4EYyTtDA2SghHv95cuLkbRv5RqSo588bYqSATtiS6hvbSMi2juYKaLx3A4QsBQWm3zhWSV6iBFfJTN9Jpq977vD2",
  "key45": "3suWWHYL5v5fuKrCuPVaQFEtBki9aHeGAdfkoLzUdHT6fs9vwq4d2pD8HaYRYtcbhbzuhYRLK1zZVdguKjrwnPt6",
  "key46": "4tdmA2jzpZhSzJ4j76xhvfpmF3zLj7dmUH3v42MpoTkC86RgU4XXDBMbG5ybCyRZhZbcE6XUkx63X4dr9TsUdhyt",
  "key47": "3SZerGrkpFrN5VG3xZFp32Lcf41b1C1BDmCH6jGGVBaFuiNZjxeKXaGS2K6nntVGfkgqMRXiz7U8wT8yUM4PX9Tu",
  "key48": "4uJ8vJjduaofLcUKhP6QBY2SWKGvYPaM5LBnKu9KU4E5JWL8bxc4SEQoYt86VnqB6eabfwMaNDYEK3gkq2AaTzUB",
  "key49": "dXEX9QvNaMqecrVTNjVLkahHF547M1Bq6BbJMkpmaEpqv6yiL47ENkaYhawzGqQVJMAPfxqcGfR9fMsqsBPJAuw"
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
