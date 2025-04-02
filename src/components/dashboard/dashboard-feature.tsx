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
    "2XFYPCzNjWUMMEHYg9i6rvVeCeWebV9ciAN6sER4JHQRimy37EtzcPb2ABXSZTrPx6QnEDfP8MUuWka32kdBg3oX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bisBG63SWAd5HTBftRT691CjSan44kaogYi2pMYGiS1o4bHREKufqoX8fDQmDBr5DhJ5v7to6NC41snnGm9QCMj",
  "key1": "5sgdPhzr5EpRyTVrBhr8X1oxFfZaAqt86CYBF5FpszULRjWenmByEd7jjSC7MEGAaxbufj8wNQvcXgRwWhaTifmC",
  "key2": "5crdPiYdFzd6MT2CTFE7RfzQwVMZvMDNJfEVXrHh2bufbxEra5f9SyE3YZhH87HKFjVbQCw2SfYkH9FXQRZuuBEH",
  "key3": "59TvU87BzaUaUHA5MBibuwApEjfTx77nPjiPbgH23TpJhiaVa8GHn67k4VPDf7tzqbqaZAHqchbar9suXicHWXEF",
  "key4": "FDJwq7yfMu9jczaM8ssGVuMoPjrtjsqEHZ9JzjKeceqwHJmco727oDESLxwYDaeK7KvBX3yC9JXUKtgdwXMsnme",
  "key5": "4ymyRAyhRPLG7ZyizbZ7W2utkrUCTubfiWAx4mwstZtNd2rRAdo8jrnjFUnppNKzFjiCJNHqbq6bpYWn5BhX57yN",
  "key6": "3FMLpnJbLoKWVu4ZikqAhAVd9WaFxPaqNRFZa2nk5YggxEz3UoSKemCnZJznFfbGZNi67LMs4n9j6usdTUFTWX7c",
  "key7": "AbW9BSptss3gpvjE5ZzDw1eqEip4Qif1mNvxhKBP5XYmgkNAj8GKXqzdRYs4RcBzWgsJG767VWuSn61z7pwNUWV",
  "key8": "5xyHuNmfVY7Zhm2oBa4Wk4WbSCjUQwskhtJiUAFgFznbV9daHtpwo6YPkA7mfftbLLXhqwdxLc3rnp2ZKhGYbrxW",
  "key9": "2L4nuffgM8sfEhmki9LcLDLADVrCmf8mzMQQSTGxuavTXqnX6sk6kMPv6ruzvmvH68MKZAVjbfwGfWGcqYdygJTj",
  "key10": "yQNESaxbTMey2u69yRtcCM8uihP53ATzijg2JFMmcRKVtQAmrNaL266a3CEgrb1cTyHQUnEQ1z6AkBNVtmiZjXE",
  "key11": "2yNRrfnkmq95Th1DqU6X5oMWNCcwiPFymA1u5MFN7jsdDJgbto3BiirFuVQdKoPrTsGBJKYuPithRZoPLEcgxqWv",
  "key12": "4iPEjD4CZNzcJ8bj2JiCTnNo6ebZtSgiJjAGUtDtofrs2fD6HVzPNKYcrgombNkJi3aB4aTTPbXmtDmSRXuGNDi7",
  "key13": "2y8ekH9CfTZq4dciGh5EBx9V1pihStZDi38UhGBPPqPsKbuCSsYQwsYZrLVdBynXV1VZ5jiBiVirhn9F9kRAmiEZ",
  "key14": "2438GffifqDf78QVAYJ5B7QyxwLxceZftnQfvTFQ2bSVH2PJHdSVYPdbo2TWwsSBM68HgapNHsAwpxj1bUi96zdn",
  "key15": "65aMFA5RVACVr7k7Wk9L6wWJsFZd8hV7mi3dLEvbmFpr9UraKcjens5vKFXnM1GHmP4KfN9zfM9YVP4zvucwKLJV",
  "key16": "2uAPaoApTooH2eCTSn2PDucyMxEsZBYZy95mZkLNECxXKSvN2k3YSECDXZ7ytirdesVf8G33GQaiS3FimW26viTa",
  "key17": "ubdEWe9cnGfTC59Fm3qCcqjE6y1qM4vgJ3wX52x9hSpNwT9XTBKf92TLRbwhdyDkrB6VjJxaKwmm1GQ1fRN1Z3J",
  "key18": "3PqnrbRLfCfWMFzR9Eoxrx2xWJVdMRCEtpqZpVA43EFRfCzqD1o2DRo1MRWLfaw54Piy8A24AC7EGJb5iTXUYUBM",
  "key19": "DPfkgu2KaqJE4dw3W85b9TdB2nNNegX35KT91KKQWdsfVTuwUAcxUVuyvYapPtheMxuDGhnoCYTxJ1rvAQNcXPQ",
  "key20": "rSucge2rqDRkRf9JZ4f4PzQYD5Uj8dtFE56nnSBtXDhQwhQSiHy4e1iKwhdCxJCoMz1K5BLEK1vGc6yQMMdJdjV",
  "key21": "3xVmJuLFHRo1JQDo6iaF1JhCG4qmqPMNQtcfCs8MUZi87UMyNDGNfJrbJhhAGLT9o1EyYnLMKAqiogJ2v12nv3JH",
  "key22": "HMn4uBvrsBYUasi77rME73znCuSww7JvEJSHLxxa1AGyBVqS9LcPdJc2W9CpLZpqngnXuGoqYiXnscieqH3PCGt",
  "key23": "2LgR8F9aRM6SUN4dKWNnSyaKkHnheTWcouLsHTP6s2vzj5VyQkyfZrnoDLPjCwwJ7Qapb2pMeCef8WLUP9FMdyCo",
  "key24": "oX3wE5a5vcDuyGaxYT8vYhUYwj5JMSuTQYj4iefXLMvfUGFd9yU9bDAKHYiD2GGoioevNTexotFyEAWRXocMTdP",
  "key25": "45RdM4QwrBb3izqAF1MmWSMeh9eWGNtAzywbKDAEgjM7yqNT7e7uwvz9oCHqqCAprpoEdVvqevMnQeknjStYFeP",
  "key26": "5sovxXaUBaeEmB5tXBAWu9sX6fAn7aQZT746zzYEcmNVmpH5p1RPw1N8q2VhaWodK6s1DqqNxqMtsDh2oUWd63ZA",
  "key27": "3XZANcSJBv79j4XyMairWfbHohtCCzSUpU59fffpv31koNKLiBgUND8DuLjvEJYipDgvSRYmCfj5aDgCayGEWYXF"
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
