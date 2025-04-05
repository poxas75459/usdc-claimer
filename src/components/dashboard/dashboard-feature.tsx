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
    "4fKbMYGhAn1nRJPmMWK9y11S2UsFiCaK6msHCcviaZtRNoCcYwXdLfNdpDTAVEfZujEpJeaKN5MpxjU6DGafsCLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HCKjCF5ie2xoEsEcvFqw8KxECefCpmvqgTn2pWk2PhUmk3nQDTcVbYTh5wmpJ7kuVPjeXSAjQ2NNm2NrufJAxQP",
  "key1": "3DY6k1ZZwAe21zWYyViRcxJBy5rH3cF1yFzyERnnbvEWNiufvttoy2gs1jhbVsRbXxC1vPsrjEZvVk8jJNsRwnTd",
  "key2": "44kGrLUY1fvU131NT97zd8saAUYwQiyAELAUS79wGuffaX7b1adM8tks3JAPQuBwrp6XTmJxmdbSUniUZT9RiQzR",
  "key3": "Qc7uXum5YnpPxH1pUJWqYB4N2eAthmEjZNzmmU5uaYGDGWdXRn6NG6RoWN8QuvdurHTy2iFhVbHc6Y1dNabA7Zq",
  "key4": "4a2jQd4NtBUmFXTWPKytWzXKqBXyJHZ8UdHG7yZ9GcVfaxnYyRSqB59SkYtZxosztTztnhDSm1MJftvDH59X3ckY",
  "key5": "zgHGbHdhcD11A6ns7EGc4JJsVmPsvYobK6se1c9C7UZonBu4cfPfVgPD3RNhicr2jtU2b8S7uUD1r4gwJogWFhz",
  "key6": "rmmhNJJ289tTYFs6YYLKWZ2wnsyVyCnvH9EKZgA486Hmxokng4S6Dr1pkN2YX7jem8A7GTEJPj8CetLrhJDzEe7",
  "key7": "3Y7B8YMexbB8gdJk2CnMjib9uvWsYcUmxmYdQvF43S5bkKaDqDbuRy2gp8CdVFdsmFvXxAyVCf9sYK7UybLGfnQw",
  "key8": "27RAYB35WxhAwwYqFwoVGKrgTGwED3nXbwYfpb6sEuyUgSeVsLZCg5EBn4DZi5zs7SWLMbk9Swr7LtCPv5NPs2BA",
  "key9": "3x6EFLDVAaogskC3mkZfdUv4eCQZqBi5Cc2xLNGWJf5ES95VQBzjNJHjkxaZNfJmbZQKVijrkgnjLx2NdDRG2s6j",
  "key10": "2NmzdDEJ9XNS2ozxWRxtT6jj8BVyeozUGSvzQdKmxrKUnqAfWRVeDFC7jTBx11n7uATjsXC7pzGoDykzVCKAfWmg",
  "key11": "2yfZ1Z6i122iRuGByj23yQx2wM2GXuS7nMt98JhdtYDjhd7BafqvbLq176r1HTwJtmxT4D3j9aN9GRmfZ8aHhuXG",
  "key12": "3HWLVa7itKWM8FzaS8AS4x7guQyNCa8ca52oAGeJ8B4JNNKywvvBeozV89PGCyPtL31EhVtpPpkJjt6teppQSNJc",
  "key13": "3X3UxCANDmDo28XBsu6sCi8KWWX8Qx8oKzBB764T3Y9cqLWFf6qyHCbosAe3ayiNHykxSoFkW8ZsCgGnvmmxiAdZ",
  "key14": "3P6A7A91yuHX8NwriyArtBN9MydHgBzoWvdMMJ6Fze9vypcn67fzfcbvsddiqFWjygcGFdNpsKVfeJeGzpoAycas",
  "key15": "3hCRJSZfcgfNRY3FengkS9mMhuWrrUPjC2e6qp9AoSnkHu8diSmZo3UdvFmX8DyocVBqHUASAR1FQ9u9CJdXZ2K3",
  "key16": "2gDzrEoM2gvgbTFCeBkLz7NmJZkTrorAUKQVAm7Lpn9JVct7W8UoQY8ZcqW2V5Gg8vY992gKCoymcdWUjoaVQssW",
  "key17": "2MGziDVm8FsDYU3do3hZa7rJzhuV91BpowpwC7jFJ11FCLZFyLJEs8FEhjcyQ9VmNyazrcgKegqeqr5ewEUPHphG",
  "key18": "41F1SVsNoBTCmA186f3Senq7Tk6cbLW7hBqKej9gUMF4R7R2TtC8FCFBmBCWYfYyK1Nd3uSB12dpmcHvknru32SM",
  "key19": "469WjFZy25Jf9GxW6cjQVd4YZAqEybXQ6SiyXNWev5DeLNqa4PGKcorfN5ww1Lsesb7Dbwbg2mAMYKsqFB5cRrv4",
  "key20": "2RwoHk4MZQsiqf3HUQHx2pu285n2urs1noA6RKNE8PHkCV7zEGVHorqXiv7NXKmgcJc4dSqveV8TNYfM8ecU7siX",
  "key21": "4p8CDa6TYhBnQ1EXtQCe5Jhi4p2QQ8vjpQRKHhvKkW61pwcDyMd6HTJgmQS7sdrvQDnCb2dE9JmtwzAzcAH9N7Ad",
  "key22": "3P1Dq9EWwwhFAPEmayKcAjtQBNBDKnv1SguewQhCG5PKDREi4YTC7n67L7CMz7wcYQpEn5dq6cmPEju1s4aJgnfo",
  "key23": "3KKY2YejwXMMdb6VeqrFWAaMmJT3wzKZtDpPjqmmPQTrzZupSsshyiGatyZGjFqpzkJSxuzDyy8Tkez4wzahi9Ph",
  "key24": "SpyRdcyhJxrSFNAwnQrrtF6ymyHqpxqnY7Fi1rXmBxgC2BkTk8zGJEDrU5vwkCr2E91hhZw2eaDAjDNk5rpGnTQ",
  "key25": "4zPubUhDCWah4ksPTvVrbttkropqhT6GAKzKkNPZ9KeEf4PWjZnuLV89Dftk6b8YnqGaeDmWbN1vwkwEJ3B3r71v",
  "key26": "3Gu4n7pZvviMcLvZ6MHiH7qqL9Kk8qT2ESzuLQN1bPdFAjQEZqik2JhQ8haVetjge7M81YzJLpiq1teWKXzJzsZ1",
  "key27": "LLyDEJupGjAnyqMXGS7tbQNWbh6o7gpuoU8FuRE5zTgV2NfeQfeGZYK9TdFc6AGMfXxHMuRSZVSSEaxUhacVnQw",
  "key28": "3e57Rd9epaHioy96G58cW6M4zGjLBqHCdqEkXWr3hJyhgrxTtA36CvPMg7ftYS3kzKEgQzbMqgXk2m1fkcGbQMyT",
  "key29": "6XEir4gHbnMEGg6bPZ54dsJPsf2fnHD4FjWVDJmGNAUYsxcfjr2YtaPW6L2ioYrUfgprXxTAKPMpiSLFqfELzk9",
  "key30": "Kxi2tDLycy3SFj7Bg3u8o2zxiQwaeUB3C5oBbR88vbt7XyqDWLa7rgW4tbUcREyW1rAhmvbkqtVt9DRRTXYJUPx",
  "key31": "Q9SU4SvcH2zo2sM8Kfgfj4MWtcfSvGuDTdhDP5CBvQ5dwzKVvbgxeyCdNr9pvxe3T8tKj4Cg52s9UzZaV9ybqSc",
  "key32": "5pf9jjjSwTKMUyqUHsWjrLEWJi5x866j7EaqaZx9SRrNRdhn5tzW7ZUqCFa2QCFNQnwwsEVgQqC4oceVRReiLW9P",
  "key33": "2B8ayCi3xo5K7f37yK1LZ6GF98Eg9cDvQpCKCVidDQ8Z9exs6BQYxC1KmwrYyyHeaa7g5ZbTx33axGyqz26j8ae1",
  "key34": "2EPqEstKxP2UHmNB5YR9bdiZupRy7b4h2aTGsVNoKbU13Uy33Pmc357eZofcN1weTqAXMprfBe58wy51ptM3EPKq",
  "key35": "VLXj3gCnzW61bWCqNLLCrosfuArRwgjN1KVNUH27dovjBMtjU4aPJwmRzmN8NekrehYfVzESPU32736m4YScxcc",
  "key36": "5mXLaDZprxHrpitjAJS3tpJEKt68MBU6mriV2ugf4m8GkXjNwcd9X3rMxSPTqpSaijdwdQcobhpgLsTC4pqtQTz6",
  "key37": "5ZgRwyDRtnNUkRyjxc8P8S9hqL6ncLKsJL47MeUwWX796Azaov5rzCyPcCNG2UxqHUw6Q8W2CoUbyyZmxogL5JxM",
  "key38": "2BWj1kLhxzPY54hkXvq25Sqr6nHDzZU1Tbmutmg1nU5RsyRnwbcD2WzLXMKE58qH85dzNdf7pbPfrjwQmymuJrs8",
  "key39": "4utLxborcNVviiajDvJask4nTGhBVp2XWSBBPEFdDFa8BTG5aTsv9xWTUpWNPhFScAkEFrfN6QueLaTYiN67wTiS",
  "key40": "5DJRm86BcVbZRjJvoyV18RqZK5REwK4973dYj6jxPnJADzBiTvahiMe4Cd1iu5QqLxAXTyUZyXmqrBsqvVyKSkBN",
  "key41": "4iTCMgShNmkkRwEPeAmc9SDMNRoWNF369Hj4WL2QB2e3QNXReR7Yv882eWyJwrJAmA3uPGJeZmoxizjvpPcaaA7u"
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
