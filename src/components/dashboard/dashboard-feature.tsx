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
    "64p8TXwf8UFPu9t4PBPNghdFeLtxjn6Jruc3zaVsKrkg6fbjbPN9CTcvo4mk4JqrtQZpS1KvH2QySMucqxLi4Hbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jzvfiKmnmLujpw6U4hMgQefxCQ4pkwHvRJR7v1f19Kv9UFcSnEBR6yhqyBCcMe41j57rWtdmViSdDMGX4y5Uobh",
  "key1": "4TcjoH5ZWvdSggUhjmC3HvkLs68GaENuLTZAiGb9DKUTt8BnxAZbNDG4CcnSpEfmkazjBUYArtVnZE2w4uzjinzb",
  "key2": "4EA8s6kb3JWUvRRsojTxfhFDSAqXHagZuJTTjFQyKuUusXWt5vqBAT6vURmrJXYDAhSRwaA1MeCgse1kRvzYW3kb",
  "key3": "38yzM7E4FAdPTBYZYqQ56ZYR1mjEXfR8z4dC9CuHxA4osNti7gRAr5zgkuovWL81ooTtsR5mKuDcLKW4fYGSvrST",
  "key4": "2nUQiY8efxyZP3UFGspEs3Cm9VoE1Wg2iU9fL67ZyZyJrbFNw6ZAv3TPGc65ZAHqpXruAeiQCqKeE7WVZV4gvHiU",
  "key5": "39Wm59yk2tyXxyo13vv3b1kiLEhsWnQ4243UouktFvdf8uiJL9eXAjhMAupChMPdW3nshEEWwFzCxX89PjgtMvS7",
  "key6": "hoasTg7J372pySA3iGuUZpgYSUgaDxfnuUcF7VuRskFRZ2ikgsTwedMnU7hSHsdnE3j3bbvTF9xRJoj96pPrUTB",
  "key7": "5ZXREW17s5SSMn6UKpf1jegm8KMusZWfYnSLtii9d4Q7zVbtn42TXSZieHYwHTCqNctiaXdfo5xna3ptny5LwRuS",
  "key8": "57HMo5bNYV3nHhvfxyi52qBCKeHrwJ1bkpqizCN3qrAr4YQXXmrr6nAZ4B56KSVAgy35dDif7wk3cti4iBSQVanC",
  "key9": "4pEcKnS5iX3QNyfnNdPqrCYDfnbUEcNCRwn2UBHuN3KsNABMwpfN9QfuZhS7sCMwY9pNXGM1EbZS7XGQ8yhJNpoR",
  "key10": "4BvWTnCMtxPBpiB1aQJBBJUVMZK2g4jBfkFmteWjnZDJ2RP6hMELs3dy3F8VeLBQSjnjxZcRaYCXKevXW42zcAXv",
  "key11": "4waJFav3Q6R5akszwDp9HXkir2CjmmX3bjdPmCQ4SKwednbzCGuh7pb9ZsYiyeaAWhQ2FBgHQyidXNBtKtQHfVmq",
  "key12": "4NEUhnujGEVEHEy8ocLbJF2xJVzecEENg8WeaCYNWLoEyvXKYEhVhNprBX8euyMkUgY1eyXv5gFfAnwFmxMpJMUm",
  "key13": "5N7qyoZkezHudF2KVF8JY4XDRQBQyVraY5rKcp9nNstNv4VvTZbeKPLDk9zm3ZWQDPahgDyjXDBDytrgW8PntAxx",
  "key14": "44553EHhtHiihrxpKRy2eizEquZXXwnRrD3CmQ33XXbRdzEjAXn3C1mW5y6rv5dkBqeFHuUmMr4tC4SV4DHYpn5F",
  "key15": "3fGHLySpZz1ByLqkY6R1xxavqQWMPvq3xTbQV3AHxVeUDk3DSagoVd3VyveRQuJ7972TqzT6HDHQktYdcizuhSZH",
  "key16": "3Wt2S7NLhcN1i8ZTbYVkokQaUDTicKzvDBa2PsTp9MtHBb1sgoPbNxNFTUSpHKTHSa75Tf7Vd8Gffs2z58mUko7c",
  "key17": "erTtwT7qXvfABpdkMV7UmFnQaCzyD3Xqqh1a96Fxjwk8bA3kEnEfP1cKTvy21GQp7vSsSFUrc5Y5rdBh9QjA5QK",
  "key18": "ePY9pAQymso3rymHBc4KxEJQwc8DaVExWkaacUptbn2GuAU1TcBBsyXwPnuUthikU5KBQhtQj87w9UXoVoRwyR4",
  "key19": "jb16VftHzqWT3DeXnTV59CPeKd82b9K82jsrHhYfHD2KbL3nn2FhtEACZ823ycroDJ7m5QqBQXpd4V8zTJupfBD",
  "key20": "4rSSVSqbqiTBbxcCjZdpk8LCLEgBwBAsbM28JvDSWXDtZzaBf83FX5MvJKPjmTnbDDJsZ5KdorRffphLf2i5KdK7",
  "key21": "4AWXqsG1GeoLtXqczC8XMK7BSNzGvaoTHqhTp93dMwWkCxHy4mPk6CWREBvMxq3ZyaYJgxEM2fqgWNhvfNdexnMk",
  "key22": "7ENaYJ1BfpQPz2BoNCrotcJm6uW1AGxzQfe7Tq2wjj2sL9ZSqrCSAebp7p17wh1VZ6kTcua39yGnSf6h7UF1rou",
  "key23": "72W8gCMJ1LZYXTVzQLVQ5dBFmhjUZowXiVzcs5VZnYop3aV3bQDtqeft4B3gqwd2gVTat4NgdPmMek2RVYrvkJJ",
  "key24": "3VZJpw6f7jqwkKmdDwFqpeWAHgSLQ4ybRv6xz4qrMZg2pEGBjLymXjzBYHXfVrmU7qSamK45kVHxQoDHFkY9UHn5",
  "key25": "4FhZ5S7Z4JU9i2iCHocm9je9QgQKtxadzDTXFDE6995ZUjrvoKHLUC836BpuXBiyM9g4wyhLk1EVPT2W7KZAZxjF",
  "key26": "KKRYyFSuTD9JBk3F4B2ypJCADRRndimXxMn4tjZPXQwJBcpEcKUnAhaT6W1JRcgm7XAx92nng9cPsAi5JBQxLE6",
  "key27": "5NxdjkKNRnM1Bv2euLA4YQthKog86XJsR1YeP2QJuzDvYgGSssDGojv8HDWgkyu29SNrPjE9Gt51JMiSjfUgQWHd",
  "key28": "248m1BUP7iwwm2LwsSB9FJGiLLVDo1CM1rmqoTwPeCsgDseewzLDSphKndDHsZWVNJFTMnjYtXV5hZsqPouewJhh",
  "key29": "4hR8NB8c9n3i5r3ZVmj9ik93WycTnnY91mAVM1vHxTBYK4sNJNyYKJD8MYsez24iiTqQd5m1ojqbynRwCkdipQBy",
  "key30": "2BfmQQGCMbfa1mfEtAmjeuYkyW5YhESideJi2UD6Kf1JAirvUhbHrf7Aq79qCvbcwESqEymtEsc6CKXPqshB5Vkx",
  "key31": "5MWrnqtAkJPzA3esoFUPGJHRqjSWNsYVacYa6QsEuRCno33hnZmoXcbUvynbrbPoSSjbRDN8jTT4SkKHvy651Lft",
  "key32": "4zAN9KTPwsTURWeHiqUHauZg9wbEYAn4Me3a6NeuMeJp7erDYhj7QMm8rBWu88Qte5npmZS1A1XrH5xPPQKcDdac",
  "key33": "9yxP8TBN4HRJDV3M58R5Vesn2ebm7mvVjKLQAjb39AiTasCSjbMzPwXiWVtJJ2hcbvNTB4foVypJTGD1kjijocs",
  "key34": "rA4Yx1uLp9gCax4gwa7xEzPR65VPhj53JwCqUbSrNg6ZPorLWmM2MjzYCiCVb2PYnGF82w2hGds4V2XHdepjaje",
  "key35": "2VHZgmxCEJN5oU9LfT56BAFQM53KbLk4LHgYi8ZueHTM4GkBW3X6QnHZWp4tiYXg56Z5VZoJcNGsM4ju5irHxR19",
  "key36": "646rquqjHB9rmuBVVYXF7Umdxd8zMm7SyXXEt5bb5a1qobnEbeZ7fqL1AP2woAq82BtUhJLkJzDQ4yfPECscA4A4",
  "key37": "WPzmcHaXWmEYsuPA2ENhVNkoekWd7iUnj1jvXK5dzhdfNsXgJKixcTiaR9LYC1Jw9Ak9q9tPDRz9pEyxUG8kdQf",
  "key38": "4FKCqSCsmW7Z5pArfWMFMKbx4HgTZc7U3G6PZHPj6mqeBE58W2BD9LVUSTCVRgpKDaJ2zgzZj5vUSV24SorEezUe",
  "key39": "QyPbrVRiYa3hwcFWUnzLoRPHY5tUH6bu3Fw2kbL6B57FM3zL54H2fapFYboQR5VyE9AAHnEdXBHbYZYqRXgNwfY",
  "key40": "2i561KaHnWH14uo7TFcNgNy3nVH2phKMsicXbnv1rBr4MATgiXwWhnmNSxQ8EqeR6CpM4M9qoM4SvHFUXNLVWvaG",
  "key41": "5uxYo1KhMU3TnhKPNbgy1kcrFopp5S3JBC42zBWXvexc2E8PM1JUaaoiTHWjBG8PcVngTGRv1fsEPuDqD57jZvFV",
  "key42": "4uTZwNsfTKqH8c6us5gB7tTEPxvBfvQf2T4A74kvSkn7WC8b4hHtSqUq6RFr3SjzPNTGtUMDBMvA2WeZogrmTU4L",
  "key43": "3qepgQfPHVtui1WFcvMto3FCVGg57idkuz4FzzvAFaxxDSEmkZJvVjPLTXQYbbxEzmCqfoWTCNBkgjFW8JREEz1v",
  "key44": "2hkofU74KoqUUkogbtK7omemviuxHomq5uMwCNF7ii1NheJV4mG5ekE6aAsCvqDGUEnostKTFs5H9ttQR4e9EWPN",
  "key45": "3NeZ64CfxG9KzgiwonSdEaLh2tGUTs9XrAVGLbnxEs8cUwNYQn8akZkNZZvjbN1eu8io6tQXoMSpMnGaSbJ4KRMn"
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
