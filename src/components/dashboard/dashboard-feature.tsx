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
    "2enfAYhn2phasjDe5V4Emx2YSG6TCawPMjvtfoY2FtUz7RABhHfSqfrVq5MVHEXpNDTQJdVdRxDT3W2cMuDWQKhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MzyhDDbqoMLFKm1bwZbUBc5kcc2bPZy7VKqgntquL2vfTEhu9g7RDAsys2kjKfzdnNwnss6KU7kNnxNnkCzpJAT",
  "key1": "2e5pV5KkRYi3UPV7YswXjRRfJiKgzssr4VFDcw57W681P7Mxeg3griMUv5seid7u8tyQv3YYnjCjqSDnPPfJmsZz",
  "key2": "1AJLQ67wh5hgNnzyjC88tjmWhW1YwGJrrnRd5imsuXrsSjDHotyYefvYfBity8NULDZWs6hn1E84ZQweF58R3qF",
  "key3": "zhBb4Tm1YmTFSmiYTaXDVsrATZysVN4tNsXEzHzo22xdGQxXW3ZXqRQ1dLRL8vzF8qxJhGsAXYiE9HRkuEUbkW7",
  "key4": "4ojFCSxFnAuKZzZHKQfWhBEzrf7iqBj658yFbahNRmndt6NUw5ZBeABgSZgYVKMVy9bq8beiEtHT5Bv5jKzdkCK1",
  "key5": "3RH9TKHKXKBKfN5my2kniYgUrw6rs8hy9MRCZ5y1mcrYPkjXo3s8s8zkanJkU8dFjbWJH8efAS41LLq8mJ65UMAu",
  "key6": "3Qok1b7WSyMkcbrcJuds8UfvMhBxMAM1S94PtYjneQAPfFXu5su4HWWwTLs89yNUxGoqAuiJKmwDeVCccpk7bneX",
  "key7": "gUZXtBDtiBKtpo2zGDi5y71d8wTreCaqoW1NBPMk1MYxrZfbSzB4fCKASAKJsVWMjbh441cujdkNzRDyF54fjPU",
  "key8": "4wqVBGRu87GivR5YBCXV57Bj2EU7Xf4z81h5Ta8mPD1yj13HCqp1J1ZTdmuDZeAEGREqwyFMT1kiDGBdztuUR2MX",
  "key9": "4gapdVLTucpDVLmpQvVE4hpTViLq3htDhiw5PQWY8rf1Vw9hUuCsKQvR4ewLHwY2isehazV9eJtMtbSXQa8xRp67",
  "key10": "5gUeKppEdcTSBFyMGeLcXscwNrNNkmnZ86jYBmMg3rYyCGbxXtCwgFCMMLT1hg3hXN9GZUhdWfyejUpXQkURaN8h",
  "key11": "3Gu7CRPoLEGUowmCcA7ssA3TGdK6PZAPpbjhKEFsm76YtqFRKLppbqdtYszVgxSCkgFSw4wow5Tk8BE8TAobPesi",
  "key12": "5uWAx8q4v9EBBMRCZ5jUobmiDcNUrWaxtqKdGCYFjtrnKEdazyWLLDtqryv33Jnif1dnhEp8HAhWAPsk96fpn8sm",
  "key13": "6VS6xiMyb1f3tftArpvptGtzqAy4tonjaAFcnPg8dmMrPt1iQ9WTTRmqQTGDGC2BvMAgM6kzpFsq6VFTNfnCCpt",
  "key14": "4Sj5RxCTLrR5zAtNVMBAy9uebpErvMqc4H7VyBentZKUsdaD9aSqeRM5UN6sM1GPoN8GTkTapdRMvCLoSLZhniXf",
  "key15": "3zQSPa6vcDLFtm9uPsSHTXrcYFJftzKdi13FpCP3BaRFQta3AsnQrdVmbq5ahPojEsqT4ZvGniUoEo5zUqncnbiT",
  "key16": "3yCjnSPbXeMobuJEPcEh6FZLB3Kmd3LdJ2sk7JtdudLcLsNhfCA1RxBZbwwRZwAWrmu68VaeyHN8UTk7wFm5Ep16",
  "key17": "2PVskk7ENkNsckLSHpdTvL7SYmzawfmv1bZByjJxdvujUM3eBbmhsbxNAGVRpVmftd3zT6xPSY3EsJHYTUmjSoMj",
  "key18": "6177UzyhXrN7eQYiZ8r3PZUZXFY9dUn69mjpnBhX1mioiEV9ginoRQNLQFxm2XCDRQtx3wJ1MZNKRAm3RQBYX5Gy",
  "key19": "63xmwrU1nBgcfEVM47aJTDevU3KJizKRy4VD8RFzbxwopiSiLttRDrPwrZUgQeZL7ce7TbKb9q9PMpXpdWdk6oag",
  "key20": "3G3RxQcGwiDjcUcXuxC9pER2gUqCdW1a9iEMnAVvy8xPMz3oF5rpAcrteYd8bbdauZxjrQ6zCErjVx58ketKLTY",
  "key21": "3WFTFMrGooE6m528UpiBZV48UJXShvpxVgxpnUBBiLRFyuqeYfnodas9bpoRtFCgP3tZpP4kn8BkmE8zBmebPbYT",
  "key22": "4Hx2hD6nddWhFs8Th9sZ2PcTavvFsSn8Upkziv2AQ7Xth5nZotkmsHbTcwDFFT6LJqjPARtN4i8kNrvjnw3MsqB3",
  "key23": "5gSEPcfxcvfoDTFqvvXR3f4yGaf3NnU5WzNinEx2GieHzgzgUGYPVdZDpjHMQ3wDdFCZov3MhVQt8i6VykXdzErp",
  "key24": "2h8dHpxsUxbpnxReZZQa9eBrrHdzCuCiVXck8SpRAS4YYzNy1KMQa99c3WzPwuC4CzrYEuYjPTieEXX9wEsQ53vb",
  "key25": "3snVkBVnnpTEN8pSk1kMMMx9HwAJfdjJFA3w6RsU5qeLeLzoz3rSgAfbnv9CfFgCnoLgKbQaoW3gu5v8dDnxZqt",
  "key26": "5MHrNXwQDYiYgVVo1hwtVTs9ZEnfq1dA51hAVJb4gmi6CJPh45vccWT9YFjN1DwiNQ83jeiL8EHaKgqJViEg8Fy3",
  "key27": "4Pk1qYe5n68RmJETmrQwjQNiqygQ214FwU76siTAq5Dk9tME3voSJ61wAomrYSxxXmCxccPbqQNiZY7s2yyWzGoS",
  "key28": "4vsjop2Dasfx4CLmTvPdkScoqZtEsJTqbjDfYKxxPdDuTRa2VtFSgW5SfrEa9S4wmPgnye56evqinQouDQcjs3X8",
  "key29": "4msr8vt49JG51BmP8ZufPydue6Nsnm5fhy5Z7SEozYGVEeD6pHgs3NZbQgqn14zYj9d2RuFDuNYkSVfLx9sf6T1s",
  "key30": "2rkAgJUQMYJ91oLSK25bBWJqy5kftNADqLSuuAG6pP9t7hdqVWCneZdW3TFXroHdYJqyxWRyNwVHzBcVxNgmzhRb",
  "key31": "tbJij4HcAuDNhc9L4Hfm1UWWx8tFEmQE9E5pKcimNUiCB3hFeByvF4hTaCQXtxa1FHnYnRhWpUP7eYAQvt2CmwH",
  "key32": "3z4Vyf5fhFLLByfNZuyDnkkWdVuDze6mvHLS4pwnPYoQqcL2oX8YvU9pNMoRmn7yiTMRs3beGZPopHScDR3dgtzb",
  "key33": "5NXJbBKkn2uVwQ9rrVXKdn44ZVYuLd9eT53rBwrj58cG8yvLm9rPPusyx87NhQ8PGqjf3jXNJg2kyXVxQut4pRyb",
  "key34": "4B4fstTLCFqV2o8WDY6NcmCrLmz8WujoxqA7V6CYmZ9Jawg4Z3bYr4F7xuRzmpVYPvz71Pbq66eR398f2RwLD2HV",
  "key35": "5rSr2QvXKMZwGuYGE6G5N5H2Ek5hoWLCXerbGtEBFCw4cfDZDfhMFoMxHa2fEm1TYEw8BdoEAZveVBRMKdjyeH3m",
  "key36": "2TrNKW7vuXAGHaQEnobtQDxhTXdVd7etZ42r9jRvM5vK3L1GC2QLXdjE7c2QWwJjtYEhbkoX3fBRY8XVAXrQW7cU",
  "key37": "5pRmmdWv8ddAhsDMBxWGbigwwrxZEonJ1dX2uh47xLJ4PWCXnefdmRo79NNnnsi36XUxvKYvRvehvURG1ZvDYcZj",
  "key38": "2ZEA2oQsVBooAcnfc4853JgkybVNkDea49EG9hfb1pak3B4n5BXEL9octf72rvqcGMGuyrfm41kuxuF7EZPvot4C",
  "key39": "5Fqbo2FBGqLXMUBK1BH4HA3Pi9nQJgHJtaGbgDaw3fHe97ExJkwJTuLFWqmBGjvePyd9T6m1McbLTCT1FZfuww4Z",
  "key40": "25FThZQJVyi5CivNEN1aFkqrFNWkTziMQ8VHfWdyXwfYSTYoPDopvC3svnGypwA8nymEMfDNN4VkCZrhkEmEQ1Yu",
  "key41": "3oQWh2Y571BgpZr4a7hE1NYoMSJ7KmiA3G2VwmCCreiBpdXsDq8sL413GReG4e8gHt61eTPAjAU1kkX5RA9BtpJt",
  "key42": "yLJVzdiZueXgAEKTosEfhsmCh7D8BNCvz1SceQDed9uoZfDJondHEr6epUhMVXgkEqpZAAFXS871spbbeAYwurH"
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
