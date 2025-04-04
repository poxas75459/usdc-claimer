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
    "5dFQwrwbaDTbrjquZHwzvkgg2TH7JHRbbn1fYsby31HNwAvRJuvikNXnoQSxX5k6yJmKAyCMXCcDqubRNNYRZm9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCpqGDVPU2VyFsohWVbtjs2JAu8Ss743NKMzxLLPTt77JpkLekQxUnwRHR1cUXbbaqwGTTxemNdQndXBzTkzmpE",
  "key1": "4GBfgAidwosYgQA2dm1vuA1LuXpNfkEJCMebzaXK9whc7zyUEQGppvsSVBxGQPiG6YUz3W3NxWajKRi4jf2DsQTr",
  "key2": "4VLgYrryo14i4vpb1PcgC7qsztdsrc62S1Hr4LUfZ8u7G6DhyneZFJXJWhPD83Z7Feer6k8qUH1bFuiigpELG3kW",
  "key3": "5HkWjDV7pqDLwGhQ5XdLFXwe7XGC6R4WXpz8AP4jzFtQKS24gQw5KrAeUEU2UmrhFj2VPTJS44L5ZM95r28n1CTS",
  "key4": "3ig2xRrqM7SBhQhuG9XRXjAH81gSzaYspvc865p1PNPEnMhUybzTkTiZ85y6XtzhLEFzzTrwVxTnF8GefeaqttT1",
  "key5": "ECPUxGuxMvLNMZdUS6SQ8bRf5f8qRAPEbtGvG7acjxVWM8GTzxrDRuAY4kuTsvECZXfbf47SUAtSCPefo8revY7",
  "key6": "5kwR3Grbtjp1qB8Lz1YWzuqKJ8gNLCr3PnSWBGCJNf5nKLBwEPbHxRo6HSTyavfGyQBcvKdopx8si6ZXzyZQ2zvi",
  "key7": "488FDry1TXAUMAPuCD5zFN9YfgDFKN3PfRW3qppnjVcdNumXoAYYUy2VxGpwNUnJhR8cKeWzFxKG8vcHmiP9ZUNG",
  "key8": "5qNbrQMq7cvFV49yhV1pd4XAqbeeAkH8ctmk6DUtghxWMVdaKZSYVjysUHtNTykbGchVWf5CAAWqMM91z2739BEh",
  "key9": "33Q3ethpAjnzb4EUtDmav7iWbiFELN3BocyV6hA9j9CbMmSHmLd5ZSjJEBsQn7C8R64tNxVBmHT9F9WMK6othVtA",
  "key10": "3rsZydLNSZ9hoPm4UNkeTWt4qGqmnkyg6SX8vcWWwfJFfM4BXC2R1KXtvtrtiYkbcpqaZph2QRH8EY3qE2KynWkK",
  "key11": "54sX1tWGzrrrFoTDZV3PD4hRgqihingeBQWMUtjtpu3YLeUtRmRkyxEYN5Rx4PRZGXveX79E97xr1U3mQmQH6vyH",
  "key12": "31PfnCSs5s6PNu5hyppHxnVUdCLudrpnqqud9WuiupgNf4G5gF2uvDeRxeg3hAMpMgWkwg9gMAN7SwcvCQLScVR5",
  "key13": "Z9xecCgtVVDm37GBGW2qtB5DYyJSvRprdeH4rVnjZKWzvjLHKWXzimLqFkH8ZMmWG3NkZbHREJ1LGvQNcpigxPw",
  "key14": "4ouKvw2QyA1joSHfoszyAFCm58R6zVCrT94kDSQMUijwTvt1nj2rKpCVoXgfdtZKTADM7AjxdWKngs1rX5YRgT6x",
  "key15": "2PQGco7yZ72DrCDHcXwLQFgNJGLTwV2suCvAjWNbKNLZGa2csgm35sLDACpCDmaszBqPceiNPSaXg5cfKX77kQUj",
  "key16": "5PChE92J8jATjBCJdGfdZdqUNuk5466jif5DBf2AVrajXCEQDRpexPet88utfK2a2udgTka58sLFgPyv7yURSyR3",
  "key17": "2y63BQSqEUD7idt6EQjcvamDhKsH3QioFuxLUBVCKFDKMjXsXRViXHFsREy2NDkodngQqLJhW9AALbTqDvYyo4bL",
  "key18": "28MZMPFMNhUcv4mTNYbWJb81dH1jk5MGP6G2mRMUFkvvsdd82hizoR1wMYe5aXc7YXGpADt8LHsbLUXykzTJxkVW",
  "key19": "2N8zXAmPg2AsuAYXeAV5koVbEL88S8ti6axsJzsRyzXQeCMtcEitXhbhezWbgqyRMfdqyCCtmnQWFWvo21mQXux3",
  "key20": "3aVrduXZGfhB7aZgSm1Yqt9U8VHjHcXMha2iyiUPmSgdNteVrv6KW1B1joqV69LKWA4n6ifsZoZ5e52StSfEi4ZU",
  "key21": "NejyAK2BjWd5XhxKAHx1wRypExgutRMG9FJv8N2ofZhG3mpTTbXwHmPrDRprVEQD3yzmEaE79TTiACg1f13Z6bo",
  "key22": "3gbSXkLroqXiCctdzk6NbczdNCDCgfzi3d5w56pHgVTKLFM2dinGGQdhrN6wG48XHmfRsg9x1QvH56Yp7ixDX9Yp",
  "key23": "4xni25GqdXCivHoPxQ9bFsAVWYp3qupc5zUus5KSDpCZQSKK1P251hAxAGe135MFesQbrQK6z51ewutgtar82U1A",
  "key24": "52JrkvLDzTH9hoprCeZGS7zvSEZXDkfntC1ALpWbRDtRHDbtN5pmVGW2V2MaKR43ggGuPM2uSbRWWZKsF38MVqT5",
  "key25": "583jFXk5ZcSc1AaYvAGe7GKuWwAnUnRrMoH5YNSskcYEfWLfywNJgSmyCHh7FsbZVtQzWqifa2AwzwZJVqw8cCT6",
  "key26": "9m4h83yz9WubPNvUx5R4HGTni7eY21SBoGwfUu8qJa736N5zXk8bwEFGhRRNJxo1sYGg2p8Mfsz5rbunfN2iRjD",
  "key27": "38aiAJ5VRQikeKHWJt9EJNxf5gTUebjYbZT288NVmHLX5sjDAEAnZftRkN2kebThbaPotzjEGESpphUXzHesZp8s",
  "key28": "5n44pCgUWFkkxjARY3vi6kCjQANF5PaWPtMv9YeoqkvdWVAq3CKG3JJPVWFvpXRgvp1zUy58P4a4GHqd9iFQcNHi",
  "key29": "5M6yB34itvGj3kpQynivnhxKtpsiUJeDRHLzvhKcp9zJL9ioQy1Ar9vunPXwhnn8qvYM9sJGrAYp1T1xQHz6Nobp"
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
