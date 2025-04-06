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
    "2dXCzu2xvvx3fxEKUCCa4JTRenuJDL7DyRLpxxKULRPZXTh7pVsTQU6w8wauzrdSL4fMkG3r3De1qwPwFKoTXtUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qgfUjRS5MGARg9fKkGDrmUCzkV2j86izSuMHdxRjd3V7WS6VvEByAAxgdtH2fBnPiqstxDwVMwRiRvgs82gRBHi",
  "key1": "2QSRzPsRvY6PXo3G3b3rL7XiYMYbmSaSeFmNN654gBqZ6NRtuM8NbBCVbtyUdzjhbb3kNP1BMWgX5jcwLrKcyyTH",
  "key2": "4Ho6MFQ3k7P46dMF8EcxF8Jk1GxanCaFXiTnj9xaNtiDKMJptQCcGAhqmKDmThzfGKjFAu6b6s8aBXv6oGiUwW3j",
  "key3": "2BZce59NHBmmMkiAz2tgMKjtJzzLbZZoPTMjoiW2auX5sLLzpKMnfUaDdgNgLA9SM9NuAt96gRuy31VbSDLEkCJg",
  "key4": "3qu7D5GY5qKQKj4xGERFv91VkY42C5kiAHFCv37RKMPAaHL5VWbZ9BZZgQgKjaZCvXUqVstz4pxMkzWCYdtZBXK2",
  "key5": "2D4mZTMaujViXV4sLdL6KF4g2s63mgUf8oFCUHM7UTUM8WAimpC3XXi7pmki77rrXWGXx4gMbKRZ5zrhRgCxj4Sj",
  "key6": "38SnHs5DYesVvcsM2EYGxoCKQPnuc45tpG4dPotuThSL3CiCseMGUgvT26njmYpuCoL6EbYeUXUexyqjv6pWQ6Qs",
  "key7": "56zortW5RdD7JikQZs7fYtUgEdKp2dJWhtFcEJ4SrX38Eu9NevHqzi4NbutKhtB4kW9VWT4hMRTqvEJBEPXqKauC",
  "key8": "hS6ygD9xTHzYty3F7W3i5Gv1qCUYdBpNxoM4JJeydidHuUGas26LVMzoQLtWxJLDeSb7HDimAGXm7vL3WcZRnRT",
  "key9": "4ndCJpiEz8LoogN5AvgEPNkuTUGSicDq71aJmCEdaixhnwB3nsp8vV2GSWucgtrP7bDYEHLgsD3tip3LddirK6cR",
  "key10": "3jKD89oDQtYmLTMfzrBeJ3bgSWbttLqftjEJJdmJeMTt2uEnVAeqrRmsQSe8fpbYJRVgbywxqMZ6sADnijPXR73v",
  "key11": "62qcxa4icVC63eGW3XNEV5tjszHCgwRdNncecoCRnvMdFawwFbM2TtYBE17HG2P17xsUfGMR33YZv7oovaskXRJE",
  "key12": "2HVZZc3wJFUbKKaftRmQbgbxEc2xxzMDfkxQkP7LTZiFzLvTubMMVZP8j464WXDifNEL4QsXuBRpFwDBknHiCxXQ",
  "key13": "2bCe9pLT4qBKuKAc5vVAoVSp8FcxoQT9cvSmx2kcKYKsQUJW5868gWTZggpnBXhBYK9GWmeAn3ktQzHvkWdFzQDa",
  "key14": "3HxeQLHCVwJ3ttMjsmwfA3gJQrTcUKWoqsaaRVGq2EmV6VA5iCbj25gyQumWozM7ZtvGP99Ha7sJmcdJLoGf7SX4",
  "key15": "3VGvh4oXrHRLdQHDNr59xJUvJfdMsrAgRaa5pE4CR1K4oQCXTmB4c9yQKtpwkpd5APsCYhoJqPEdiPf3JNjTxm7v",
  "key16": "guoJoBruLTfpGgw3TnJ3CwziDJEDYY3K6bNGA1CLu9hvtry7h5iEnurAy4yYzdpb1p8JVtLrBnjwM3kzCw6EiGG",
  "key17": "3W22bGiBAT2e55exsH74RjN48wK5yJ25dLboFPvTP6UitJk3L7FdoMcDF43XsUsFeejHsEdfekjnuJv1WDqaWkWf",
  "key18": "2hyoqYqt4Tu9JhAN35Qhq54De3BdCu1ux7cwqQgR8EmxJJspH3ZMqw2PrEj5VYvWNunvAF7gHyLZAZs6aLM72jtu",
  "key19": "2Ee547r74GSTT4XhbA4DLRnzpGe2qk1ZbziZeTfwsB4pUWt9cCpchGS68WmvdvarvdNUiuUZoZCPrW7qYP4PvaMR",
  "key20": "4rXzFej6fy1RnxWfhTezRgD4rv3QAMfqR3RJhBGkhAEWk8CVDpt2P1upfF7VH5p3S7BeisLPbnGEzjaHU3jgp4tK",
  "key21": "2vD6GaTMH13mCgYCwNfpLRg9jDiDdFTWtYJdtbmMPDU3Dm21Zr39bnxmokAoAx4mXV9TvhBK3pp5V126kqQNpYqj",
  "key22": "43rC8Zgh6sehPLU15GecqUx4qK9q5mYvpxAqz4DyPqbB5AqbTU9oVaf7raVRFjQFRYgku7qj4RKTrCK26T1H5yQy",
  "key23": "2xmjDLCAsZY7pJ3G86SZCD1Kh5KZAyGtWq7BFdni1u8W74GssA4bkPT7fj6ZJnbptdyC5jKFaFCNwvw12PGHEqDk",
  "key24": "5CbLPQXjLNyBhXFHCsDfY2w1j3k6k2WMGA7Dt16pfcLMv8ZpgBzcaWzdZDoZ1sG9J6PTuDyYk5bPQ17HrmABZmaf"
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
