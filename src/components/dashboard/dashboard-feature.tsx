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
    "utjfV5bGkL3ywYtCX1jiEsThJe8w5c3bZzj1fnHrTZuTvAKboLMATA4w8KQtB4KXr8HiayiRZAzQNJohLL3Mp4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMqg8esghGAZnWQiNqALDbWNWJimjat5RbTXDa3cizbRdG47Vofd5o9j4ukfBTk2W2sp73W9VEgkTRD6ntYCpUy",
  "key1": "2fEf27EPYwX2fJh7bZtjUYBb1mUQsotbQuU2iqLtnHUiod73CULtLD4TbL9U27iPQ7w3onCWMVAFcXVpnwLqN61Y",
  "key2": "5hKPm7T5xJHRZ7m2RTXC7FDe3SEMcZMX5RCPT5EAp9T2o22RBNVnc4YrrnAy1k7HhsYXY2v3fgSvovNu9mpP5iDt",
  "key3": "2jQc4iDTmJ1H1NaNYAmyeP9cdvm42HmP3FJL5GJwmfAbpqjP8iar6j4A2tNW3qPQrXr1aaDA69wgZdUQn86GANwQ",
  "key4": "66siCs9XE9rFpwgkxFpF3TtsJ7F1LfnTYLtEBhwa3zuTf4nGznUVbr5EWdUHwJ59BuQyLBJ3CbFSrMUyzEs2vEjC",
  "key5": "4nLDH8dp9m9bP9scta37piCnaRgzYmt5n7bULCmJ2ZVMkmmon7Rx8DkeD2XtLpzoQCLyovMGduNWcu5uYt5RHs6S",
  "key6": "4vaSjt8JAhccfDUb6vtX15MUG2xJcikqJHhsf77FoLuYrAiwG2DiMM4vCbNHKLKzjYrxpUvTcs8WCRiLy27VJ14j",
  "key7": "4wBMdeps91unVY2z34AUmC29k9zPbAmknoB3P5ncPqnBM1fcNxb2SjqzWh6MPKj5nmWtDQbWPRKTfB843EmMtsK1",
  "key8": "5qag1GiPcXM39Aq4jA6v1vXAWgU9z8ArU2811LKmG5rnR9t3vLKYY5NQkSiToxuXSj8GMbfLA6Dg4CJa4K1xFSy7",
  "key9": "5xNSzszZDVe9QeqmkKCmfH1nzYbUn6eqXjfsWaPyXR6nSQ3681JBjq1wwT4HpkihviDJsAwoEjNjppKcgxLap8Mt",
  "key10": "28Waf531hjYba6HNyTsK34UeBjtJxfC5dqerq7MZqLtyuBg9oe4YTbpfrViCmsQahpXfKroVzAJTaAgRmHr4oGR4",
  "key11": "2WaJCjGrheR8ARzHb8acj2N2pdtTPQEeToAa9VMWvB6wvGy1C6jw51CDMstHYMKRXR7PcC8Hv7ci7MdJfEUfTMo8",
  "key12": "5M8UTQWLEVkcqSS2GhNEagB4ic2jZVSCxyhAENJsS4RabH74XjujpsB2PBxSXhMcD5DsSHCDqb8BqHBdFhWEFTCZ",
  "key13": "5h4iksp2b4gMk37coNeaZy3LYVQoaqyGfQPK31o22yDBMGF3N9MDAfdkuSmospxiQLLJrhuBtbd1NUr4Xux65WSP",
  "key14": "5osNdRiQ9eeNGg39Q18iMtod3Rzgm4MYM4on7J5tbV4sdswNKMo3ihibMZvwvdU84jnzoMqp1m9qzQM4vYP2vidx",
  "key15": "2jgXhe2HPpZki8mtz24R8zSJPB3hWvZB4eAvc7Negryt6sL4jxuDvUwUppV13X5rxco2zvkGMA8Ha13a3B3Jb32i",
  "key16": "5hJ5Ktkbh2oApizHXERZ6dtxM7Qs7VDJbcgNV7ziva9G69sm7LysEZDGKCgssNCc8MWyLybPiAjXsLkBgz1ZC6pM",
  "key17": "5uYdzpC8cethnqAzFspq9gV6upy2115B3j91BHujHTHDPSVajZgvJVG96ysTjpHcbhtg2RUaQGR8aA9Y9TeGHW64",
  "key18": "41N571mocQqdCo6emQ7X5i5qmQ4145MtSjgk5xP1MphhJBc8WMnBKt2aP8F7iANYM4e3MmBvohZHvuFngrrsjxA7",
  "key19": "4AqxPvVfcNmZ2MkDj1ZDiFoJmP5m1uuuQDy1pS5Q8Q6VuLvpHJ4HEHT3i3LLbfGuEv3x2zgaVCL1hew4wn6oFEcz",
  "key20": "2R7FcPMh99hLDMAdec35FgvfP1Ntz1tJHNc5vaToUzvNMjxbZGpYR1DtGfeKqAu7VH4fo8QKju5jfVUT8rUg7WtP",
  "key21": "q58NNeXoBWfYYMWFwArf3NrhZev5yixWc4nkHuF9nS1S4vByuWVCz3RekTkSAub3B2gaZkdAJwFpvke1h3YCd2E",
  "key22": "631mJ2ZKp2B8W2TfWKB1Rs16B7M1xDS8gfPy2hGp2tKmeYxWRZmDr4rcDKhFNQFfgZgkDsDvdua5dqk8uCEAcPbk",
  "key23": "54LBeTPH9ReRUvGGdweDH3bX2gNGiUz5X51GQg2297zrmPZoA5DrxvBLTaBF4nAvfxZ3ALaiXLYX7bBEwV27xC5u",
  "key24": "59eX6k3E9i1mHb5dWW6hZyAxc2doQViFbfka7duYPpKPxjcP5ZBtHXEacoBeDvDNo4HepMGuQRTxfTmS8WSZMQKY",
  "key25": "2ctM4QSiFnCc7nhuH4oZUfrMzx9Df5Ci9gzxmYBAFhmW8GL7VLAosjA2XJFcZYdpYQaWf2A82EzvyuKJmtBGGs64",
  "key26": "ss8fYwZzdfPZuz1m2ELefoSSFTrLNNpCD42fbJx9SWpNDEmXNRC3oarhkHHk5hMZpjfCFq9pmwBG2BhmHBUBBjJ",
  "key27": "4mZW6ANvev467MyLnJZFyYQ8SwW5jLTSQwjAKZjGVBz2rKJvHk9QTEgdd3kkg5P5wp5e644UKQt4sYD3vwDQpfni",
  "key28": "MP2qXCEDH1rqzABvrwkKJsWzMYmgkaMxTcMjkMZtfpHcbCpR5aFaMBnvhhSWZED3pEosR6PLDoyamEMompYxzAh",
  "key29": "4sNogbWe9DUcyRuN1DHEjkMngRLzkti6TZWmfL7zpnx78GfWuMzAr6RsbDqh6hQxgHrFeu8PyCg9MzBGHa2b6DQj",
  "key30": "nXrZb6yq5AYtkSvBEJMjMyKBfrLmKJ6Hetfhdi3nhzA1SvJhMLvtX8Tuks18VovE877dHdEQjX5mPMCzEdDwy1B",
  "key31": "2BzYmk5A8vsEQqjMyRByGtGL9uT3W4UDapg6WT5uUEvxFC4ck4WwvDi7VSr9z76ZgEAZS9UGawu7QVVGhvJvNpUs",
  "key32": "jjhmYU5eDWKKUACsQ66d6XyGRbC5wP3DpbeeXjMmuY8YhVkrECWBkvuYE3Z3X4JYJzkPkwuJNqRc29uoHvGUiab",
  "key33": "3GG85LX6Vwcm67nmW5wT6CCiU4zY54saYpuD1wbvDyZbFDC7TsM4i9mXFJmPZg4BWVLEsnARbpaJVRcobhphTeTC",
  "key34": "1gUP6UaL4g75wkmC8qyjiaaRCBru3g6WSytbSCxipka6hV6oWAc3XSGuJ2Z4tQfAfewTurXYfE77L5pDXxDAa4r",
  "key35": "cSNFx6KdhAqyz8X3ZUy8hSW8wLGnyj19k1EqjwRHXCVA5fjj1Nndh7HMe9DvVv6bgBTvgGgic6jLNUdPQNJRX9m",
  "key36": "4tGfS84nRK27nF5K7DWLh4zVpbk4t7qwrBaFTBtKPCYAx3YN3KC2NqZN7E6jPNeonijwVYr4PQNWESdUTB3pXz3Q",
  "key37": "5pPKAydMvny4d9zPfanMTRK6WxVRifoHMGu3JARRaGJ98TubknRyCQQX8bNqdcZNAXrfY5JQYAsBcwepuEbJhjBD",
  "key38": "4iqQXc1feWV46RoHL2F8XNAQnDJ1xxsvmJnRdvREapWX544uG8KFcLNY7TY8nQuRjKyhYph6N6RH6wzp9QdBeyPs",
  "key39": "tPjRRpVqynDpPvYEPZjZWURRCqKZBn2BD8CdX9iyFB2vmxjK2cQksbRkjU4JRxNd4Cw6BmFtxZzojDPxwAfEGmy",
  "key40": "3SLEi8cn5iH4PTfgJc8QjDspMGLTVfNA18MLXNnBkG6e3GjPBK7p8t3vekYLjX23Bo52GQNbqGmFApcQijVctYCC",
  "key41": "4GWr6m8UGuwqAfxWRbHj5x5ir3Z7tXCRtjbqF47me873QcU2n1T5XWK4MNnTyq1xdfXhqFE63YXHMgpMNxrYbJ1D",
  "key42": "3azDswCTZuyHrn5aYcNgBPVyUhr2sSXCVWpLpDdkp1jTmAfcJ6PkN6rwYCr1KdBLWVvzAmakbsSCMzqeGsXmKgQ1",
  "key43": "2cxJqsTdkv98LX8DAYY9ZqbakeQMSCDPA2maHWL45y2UWpqWqFrafDYkFFKKGUifMnqGn3ZrafhaphtyaZeJZYji",
  "key44": "3sZJ4iUU91iNbH1MVFsynPf3gABKoKr7zAvTZy1aA7vvWFPuRbU9Z3X9pwLcZVmULDm91BUP2WGcxrBsAHm7jppV",
  "key45": "3FJ8RoZB42V1j3pYBT94YQAGsddFXMsgd9WJLt9o5zJKJAkYWEoSFb1vyV1Ldgcdwyf5brVRtvzVCQq2iHoGvQTj",
  "key46": "35shSVPv3vvEzfufNrcUT5XeiKm1baBFW4oHAQH8wWSkJ5jUsFNJJfyoLh2eX2T678wQMjf2ZjWuo5WSzktcNVG5",
  "key47": "45FqcQTgespuP1FdAnL3d9u9hkHSfjSfee9FMhgjQptCB82mMgmiDHeFTb4DJuLU5ae32bZPeWSyYqWFcemqm3bM",
  "key48": "PPJ8aCTV26PjyiYUiTwGJuPxvj1exijrs83BhufEpcSiWfFxsfp7nqnMPYbZoFPCEmu2272rKYkpNXu3sMzedb1"
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
