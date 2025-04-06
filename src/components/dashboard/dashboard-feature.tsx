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
    "4cEwNcM34xu7r8FjrgMcVjdwJmyX8JQSmYvfbzS2gKA6xUQ34ZTUmXSe3ZmQGpxRsTqnxBtGRW9JGgfFRLT5BJNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uDZ8Jd2qoGKNFUTHKWx2omj3qRu6AmLPpBP8EtgEdMxmx6Ga6PBxtnNSce2SC1FQb3SpLwwtaePzDGRWUEoKUAM",
  "key1": "5GfKVr9sLRC4d8uSsCLANvkBar9tKE18iW78BxzPZePXnHRjyMXa9uMDUErsTp2TqnDd8Anj7d9Tb8u2D1XsbpF3",
  "key2": "mivMfCucBRDjUkgJWofznBntRKxTis5RatQ1vFa2anFpEVUXcmfkmmb3an4yDdXoxuRWxtyCC4HvvE8Cg152HRM",
  "key3": "3dkyRQhci3H7PJX5yjgzGZe37f5QSpBuqPCfwM3fwFtzRVofeizDCbqz9D8hJYtSviv8oMNyWjputykDGKxxNt4q",
  "key4": "5TmQouPww3cVK95n2DA7giF6Pv1uC3cMkxURAqSSRuwAx8Q4ShkuQZuKSQ9LX7omNhHPoCyQdJy1PkfXAAYHttxi",
  "key5": "BizK8s7QuvEUBmPVMzWvRBerB3bNwFevAanD5y7QX3rs8TGRnS7PF33pVwNrP6GAXxRJnGWHLSmYtN3ectAWBDM",
  "key6": "4eWLBpCT6BWWCvELHSuGPqXJSmu7vqJbhghsFwLEmEHz898bywGWp4MEh68cEiy9zSng5rraMHy2fLdHKEnzqiHS",
  "key7": "3bEfxQr4UEMAFmSjoNhN6daF5ubdEMvLDsDJdjLRqFNg7ecXbNJg4SvbPQCkrgy6TQx76GgUagbDftifPBr1iqzP",
  "key8": "21bU5184xNbKY6dWu2C3MRAL6ogrvjd8eCQfDD1ifsKD83pt8sZjjbe2ESWZYXfGpbF8bVuX4vPiWAV1RwJMZnjX",
  "key9": "2KhYurgoB76Hferc5DwifRW7Mt3u8n8wTKzfYQbHDVNVBe9pPXBGhsKKer8RJQJM5LadDcUosCoZeifJxVLJRPkW",
  "key10": "62GrmQCxRJAcmhT83mQeGTVn9aoiJirtaz8VVHeLRBe8ZvhWGi3oJSySPLhXgTdsH7gcxGEWDmmjjKLLDdsgbvv",
  "key11": "4kxYhMchxdeFfpnfQx15WUfrksqNeocNt5gTb16YcDL5fZ2TNJvhWVBqCNavzL2ZgxtjJZ9xZXvHzdf1XTuzGtiu",
  "key12": "3S1fj4n4hLNWya4Zaemv3n7PphrPa8qZXiYt2FQj8gP6ZVNB7o5YacV3QspLdNAKNGzrvcNpyKV79ZcgYdsXida9",
  "key13": "28SaD7uwPKgzo6GFPy7umvnj6F1VAXhRSNrqWynfguCAHw3XiDLVCVdZKdbwkX1BXuxe8euqCP7tEBfBds6tfhEf",
  "key14": "4dAkYEWMhPxHEPdsHAA1y7FuvbjEkJ1JSHnXP7mv2ji5RS8Xd5TfgaotKtT9aLFFBW88URriJ3v1JpxHPDa8vxVE",
  "key15": "biw2N3z42Ek3KFVWoPCtLqC6yBxpxX7cmCx4fwTidDRPgxGa6NNb9EZimhRQEAtJd2gFyNhrANvx2Jdf8SZQpBo",
  "key16": "5QZH2u3NTNGDM8UQsU3fBmarQ7EW76TKBjQsC8D7UkDmGSyLWhm35oBTCQuVWdiZ3pNhKK9yBuEijPBL6bdwFwis",
  "key17": "4weVwwJUXCmNpFUbMiFzRbsNPPDX1yF7ePyMUBUzmmbpTExMKArpEEG4wJB1F1Ku3LhAQKACy8e5fkSiSt9Dhg3n",
  "key18": "3xtYCVrowAdW7scFE2c1sSgekQ59NRw4jGPHq9exQSShCrrZQUPYQsnefD2pqqFTpRNXjfjb8V8zJahDHe558gCk",
  "key19": "4w5coW3GMgDvag7JeUndKm1MfgcjqJwKJ4dWAgNGLzNdrURNQGCsJtDczHfdbnJFe5rN2wfNZGWFBTAnQQjJpfam",
  "key20": "2od8Go3EsxKWf6zjBaJ32jsik9PhS5Y51rhSLJrtvNJRrjcL2Kq5WMv3vXqscsMd5w3hRo5XUV7JgwoKpYD12X5Y",
  "key21": "4NcXxUtAZJ26vzTaRsirSSdHumdR6q7AYfo4fNNsDAm6y8Na4X52Ys3qip9MUs8iq5zpDFtuEszsDNo6tUTUm2nB",
  "key22": "3gguCUUV3WtfT62CTonTJU1MxVoGHBRQnupTfo4yAfKgxSxHVZSJH693qK1ynGJrLg4XsPoyfPjExgLDKMALuBoV",
  "key23": "73hVkGwoWWaSTFirnvocN88gfnoaCxe6uUYqxtb5xDvQJtxwBmszgV8UBYAZQSSoGsgjiapaKBZrvXjvGErwRKt",
  "key24": "5ZjtAE3YA7GEKu523HPqt4Xvc9q1sCcVZiFKC8VbwamoVfH13cuPYT2WuH5s48n42kVvCgBA1ThwMgWpLrYYP7FL",
  "key25": "2ULuoQBDa7KwTVow2SZgK7fyXgwgeq4TDM1Qsz2Td3vHFkGUsXKaxRAdaoRtHiETmkiNKibThT3NGtNmwh6EJntQ",
  "key26": "4ePoxGQnx2FrbThbJp3TnDQXzP6qrUrWPSuH9DnY3qj4CvkVzK55xhz5P3BXvztTeyRuhf9jsbbvFKNHYQQ9cRP3",
  "key27": "4GnkqWiGxv4H1dgL6QMsczxhsjfTBzhdEoGbBsJnPF7B5eAsnX3KWnGJCKBzmJp9bzmxSDqS62MmiD4kynZTomB3",
  "key28": "4DpUvUtGJm17E7TwmFYQaLuzNMCQJDXPnhGE4mT4KcvUzPg15Kf3fe7mdDZsqARZ9droThJmjYcwz3TxcXwsvCzN",
  "key29": "5rR4so6NgXTL3Ateva8Pk7v11QxuC6bfWp448gCmG6A1nrtNL5gHSzFDu2z5Y5En1uQH8nyy9yMaTMFgsb8LuNqy",
  "key30": "1mDdfNKogFK51SyZ1hR37cTHUtyMGsRqGwiCEdgUbVgGJWjDXHb686C8qwEcJ5cZnoPT8UdZMpaHWpvRs6Y1YQu",
  "key31": "2tehXWd7ByszwTurUk4ewWqMKfC7PuQvm9fRu8eDKEa4XLK6QYSHGYBe5J6ysF2hNM7SYiHC3Wnd2vZrFq1YeezE",
  "key32": "59eK69pne2FizsfMxJb6NkhLWzhGCZWVWXVRCt4wWfEYPzxxBAoeZKFonyNuccx7zPTXayWH6WF7jf2JJok2sEsT",
  "key33": "3qSm3R58KBEJQjtfTh8avZi2Eq6rLycQBUk1faeP7eXVDZxMjxEbHv812j8EhoGseUQCWom6zDq9ETsDQ9hNHbqV",
  "key34": "3niPkWcEjFJ36NtQTFY71HHe3bmc4bxcg9KBFP7sNjPbqT66zNpE6rAbnDurAUVZzqscrxu8xzCLpbG59q1bZ4iC"
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
