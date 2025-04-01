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
    "3EdrfrCwv34Cue1xPX17VUVQVjXxjTcsss5Jq4LgFsAqcUFz7cAmp7RVwUcAC3xgAPjcdzbBdNLaYTGLSgTNrKf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36AkM5V6pQE4QRUK2qGDpSwFeTafe77VpnTfa7MGQFQq41jHfCVWvL5nXf288mVZz3R4H9mjeKE5bt6XnUBHe14o",
  "key1": "z6gmemz9tHAnZtjmN5TgDy2k5oV7t5roPrP3JX4uh79NXwYrzFVW2FJoToVYKTvud8CRr7eZRGcVBzPZT2Gpet1",
  "key2": "5hPFago2fX2uFZj2FQAhAoqXuCgLSb79Nf5rCqrMcNr7qE4eBqKor9hKS4BshET49k7Eq4gLfg9qy5BXqAePrHU8",
  "key3": "4HcL16DSAR7Z6ZsUeGv4uaUzm91jhcL4dfe9tvmuaMiWS1LLF8WFDC3dPiDa8ZL3y2gXXsY4LoVACEZRZ3dkyym2",
  "key4": "2LCD59rnhCM8zdHfJGTMMyCMNT3vhjPBxXTMMx7WDNcMhZK5c7gqRzwKfBpgkqVbJjndAy45E8wCvBpPuy1vqcdT",
  "key5": "AXBbNBJMLwzhA8PDU6rntU4Kie72c3JijWxLLw8JB2WZh5hv5Qaeef8JWrZ8tQajo12uuca3vNMKrT6snqBJo2S",
  "key6": "Hqk3C1UCXmLMhqVJjyQiiisTBhgENEqTaPyaFBM5cZvzGSBQBqr2qXYQZdVKizqiAup8vsqmRh9reUaSrDLoyGM",
  "key7": "4XR47GtxkssCaPAgtxtKRLd2hW3zGKGYseZWeSnPqUiWzCq2FuMwpNZKvoPthJSvbVR1nVsJJCUXnQPxQHw1VzQf",
  "key8": "5644ppb16aNesigvtvkLUQFRxnh9yVLNWJawdaHe1iJodWBF1CCJewF9nm3S5KP1ZWPK1YSB92JFZ4mebctxR2BE",
  "key9": "3woxgG7ZNySTMFpjeENdHnweg8cEThrzoTQZcbvodC17Z6mCoX1gThA5C4mzwUG8bENiPL8C7R9FjJbA2Cvdp9sz",
  "key10": "5woBfHzqZQSb9ELosZoFye8dDdrqFUuJGSwyEAerCjdPRNfC9Da6aX3fD7Gc3BKJ93zVtCzxsWnZZ8aDxxPb2Bpu",
  "key11": "2gKDNpqtW3324aNYPqLNvwtrRbdYDccxQirL3GpPPvwgUrz2fidU4daUbzfDfKCTv5mDjmt6NupdSnPuWV1NqxSA",
  "key12": "2CmMtpUEx4jdNoD3brqPFGLHHxjKoxyumM7eGARCZFUPN8abjNBukTUXtgx3sZuwV5RwrczUUYAn98HTJRg7gNkD",
  "key13": "46V2rxdC4JA2GwU7PmoNJDuxzuoVchrr1HJKJ1ZUJKe2MN94zjBK6tnyv4MLjw3jJw1gtpKEj3EHkgrGiHeF1oAe",
  "key14": "2vvHVqh656c8GGmrJDUAmp5mixepnfBeDmLoESd3LeAo7kLnf86R8t8SDdiMt9dGQps499Mnc9KcfhsW6Ugb5Gh5",
  "key15": "5F94xxzaWUvFVGnaYLHvQ435omyFt4vbxLeyqPgvX72nVxnFKfvjvnxRC9avKzU5TFMpYgfE8wQ19ztni1KUSx1Q",
  "key16": "3KW3m6Pcj2TNJPgVC6caKVPkkfgEsbyQ7KByWPVzpKmjs8iMDHp4uSNEttHxwjat2Bvwozqxo6bWj1hi6ZX9sMvQ",
  "key17": "gbYXDmcBeTwuV7GrriVFFTSbrUv3oCStQyxkaVC9EwFJBPZbSKdHm53gUe6upS7YqbP9aKT4KPwB8aiZG9kReQQ",
  "key18": "44XMiqcfHBmN6MF7UbAfAndhfaPGtn93kaWMjGEgZrkkxJS6xcmQDGjtomcsGz6fYsXzirukyzyQxWUGwDn3YCqa",
  "key19": "5AMG5ec4M6k3bzjH3ykduLax6nwvUAymzHgm1ngY6JfTQpTjyrNR2Jzq5ShF1kezgdoqsg9VgaVV4cCEo9gN3yGC",
  "key20": "2PfQH5GuMNkFXudNHe3kjr71ERjtpHViF78fADfU7q8KmzEV3w8Y1Ri3FJs6k3qjvCPTiYLLdc21Bd2E9SaKUuKZ",
  "key21": "42uRmedUrUYUebGFfWB7A3nKvZupqJsjuAdsj5UCu9tocbfAQYDYuh6rcUPVAxQbcq6rq3VK1PJDx31x4xBx6RWz",
  "key22": "22KN99cF71jcuZiA5Lt7pKdwaX3AkAffYXvkewbYpCi4QvJb4HaxdpPqUWeiEReEhxfqKGDznV3vtTuWQbKteYqK",
  "key23": "TKDQNrdnHt4nwEUJCR5TfwQmMcPXwMzmirVaUAB7mD6r71wPnXHcQFHSDeMR6bAndY56gbS4bHh49C5hsSaAezr",
  "key24": "5QvEbMSH1JGcpzv5YSv9G6otfocVtGYTMnpVS5i26nYM9y8amXBoQ7yDorV9NZYtb9s9i97N1QYfJL5Qyy6asyKC",
  "key25": "3rdMj6QarTk7KS4XEtsfzKFjvpuvyovP1q94nZC1bSNtNyKURH2EbDESuLVeExEuC2cksrCsHkyWXmTirHPv3sdF",
  "key26": "5hFixBDKYA6ug2Cxwx21DMqvgWkPHAovyFeTYmT6TzJVUd1Q7wPKZT2nH6tE4nUVFgjj1ByQaCsKqrVhmz383yP8",
  "key27": "3KtqiJ51z7CYjyTVZYycWc1oiqugQkN8qrf8kQH7AfQSoPv4PLpfji56SVcQHf8h3JK4oDnGMhdbgYsCk5D4ehgf",
  "key28": "2d8sWWuPxQSVpBDHwWZBsxNtJybY5FtgC1kAPGxrHGATwJVkWBiRyf1kMybxBfgm2CgcRSsQpDY1Jj77cVccAUu7",
  "key29": "3xxe4dZqy3ukZabtYALa9h8Na5j9fvXfGwr1px7F7mr2B8cz7BYqTFgTDoaUQpLubJafa36H9aLNBDL5vuMcRrLo",
  "key30": "3iZX1P8XuqWAtCZ8qpq3Kkdz4ADKB3t32UTSi5gZYokAPpVnSe7pwRT6cSVP5HccEpiFvgeFS1gPANtmFhofbX8m",
  "key31": "3QZbRNR5WKT1CT1FByFZVGhFAGdZrCZQtJ2ojT7Yzuu2vGButBw5gW1XfsVLrfpT4vTGqG3SjVvniW7UFoF7AAwY",
  "key32": "5LeCRgezouavRrRoZo4mWUcahUao3rinUH6pmrcyoaWr68hMMb1JW2xT47hjdCxns5JwkqyoSSiCT7MuDjAqcAVp",
  "key33": "5WRN4xxo3yDoXAaXu72xQvDxdqsHyWDyYifbcSvkDhDkK9fFjNUmMDacc3MKYLLtC7J6wyVtfUASCJnVYSX2Hedf",
  "key34": "4A7hpwuAUEEGeNTzJXvDQi4eYTQoQW5GYLB4T62eAUhrYmXexQC7p9KWF7Dmq8NbxjgLQBrRgtZ6mimTnu9b6nP6",
  "key35": "5ua2wb123DmarzbCjDt2zjsW5XdoDA7YYqNt3utR73rMGSARsHcVzqjQA3NeH7usEyDu4XZK63oYY84YoxBkHc7J",
  "key36": "3vAxWy2demMDJYBdkmRWQ8G7Nb5sKa2cSg55P4WuLkBH3mbo98vqcCWfzEQTeRChDQxEES6ydQ3zSGtusvg2JM2J",
  "key37": "puFVQvQoWLG8AqjzZN41vqX8bLfkpsgNGmES2Wh3szjREcXGgHn37NMawACcSdKngoUB87krynBNfz6m3SLn354",
  "key38": "5urHFncSEku2k8Md382G1XtDP4SWbyt4SEVxDQQqrcbRwZBk5R9Mb5CUH73SCQb4QMpH4QBgEHH5S6f7RE2mbxMZ",
  "key39": "4XcXxL7hRV6kHd1KF4hTRg2aUUARhyPGu6CnDhYrtrw9KRvc2Jz3U7LagRw1K4241yszD7FqwUZRWmMsewVeuG4Z",
  "key40": "3gn7Xti8cQ32svu4tUEVb9uwP6jcmC3dxTNo3v9iGGcTNRiZDRS91JUyN38gmH7KBzNcRXVRaVdABufkKbuQp2yE",
  "key41": "RizJKUZ1vdfDvJzggpLfKAi59mECoLYw7i6NH8jqgoVK7Wvox9pwJFn855YCwq1a4SAaRJMf5UqqPW5uCXog41m",
  "key42": "5Ts4rWarWtucHSXd768vEgdHL5mxV9NqQNZ6EWpKyPL3cvunywEkGDc1H2umK1deARstA2ya4XBA75v3Rfn59gW5",
  "key43": "4YCCQ7HDukUSPM3pVzp46F57EoEDH3LDqj6RybkSAhwg6JAZi787MxaWLXAt9kEJXCUyTmnLPm5eRepspdoXzwFG",
  "key44": "5X3jZVwb9seLA9AtJqk1RannXuHiBACYJnFrE1sJWjQvGkB449f4yvy2Mobd6iS5DfX5chdgeNnmWdekmB8gkBNd",
  "key45": "5ysK4mo3Cdvkwcy1yG775MKHCghWjHM5GU71gb7QVcbSssAZnirvvd75x6Kt75aZvEPzsTixTk21zoRq1Y1UdQQT",
  "key46": "2PuFbFcQaCyLxLp52qeSPKX6vxBu8by4GaA1LEFCRduUqajPx2Vzd9TQn2YdVV4sz4BYDE3kSnXncXcMrxYGmboD",
  "key47": "31rd6pxeiUdiv7D5jLR64zTcALWET4trBn7gUuVMinXYPpF7EpNbsUEa9b3qoF17HakaSZLgTjHnNRb6nxfcTdAD",
  "key48": "4At1cGCyxrydzEHQhVELHgA5ZACPZderRVqdKSShaaYcm8LY4m1QxSZYywmUptBAp2CLiCMccquNTYqqUw4N6vbs",
  "key49": "zbmDYUbxdqhKELgSTxRS8UPtdtHrABRVkebMLRYWGKdbKNTEgfBCJHTzYrTKRxYT71ATNGzJGzNBbEUV3XC3dd6"
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
