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
    "4dyY6LDXZaYowcv61zTKRtHQdwcnYQmtdoRxoTCZLPBHd8uERxv51kMRXZXHbt5Y4ActUs7TkvLkdwDY1WED4aWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dp7RtFVGi6aeHDqjYyb3dEU6wRzGUhqG79Qzzj5rLfiUm4yQ9ajwDmKNk1JXAorcqcu6apR2hdi3mMYL4C1auxx",
  "key1": "5TG87TsvxnPmnsV8jPHjE51c2tArJJ6H1yr4WrrG4jwVASenMeu9Jar1TaXTLPNUv7nKAkvF6UEFwe555rtpZzto",
  "key2": "5XAtLViQPXmyWn6cYMATqthAiFGqJdepGFRbprEpT1FVxesMNKz9tyHRFgHE5YbQLFwrf4qCsjp73Tp8VBUBtvnW",
  "key3": "2w5HoHfJaTRB6LccaBSmc51zXDB4f5dQAarocxDLwDg5nYf5b3zsE1E4Gask725AStu7kBpNiBYCR2GQCQU9tmNP",
  "key4": "54K4kuh5me9Kia69HtKgy3aMpFCT6LS2vXaGGxnnWitLiJxXX8YuCPihios6JiuyAdY6ah5ntjBHXkXS7st21V6A",
  "key5": "35X2nfM22ksxmW9e7RaiaTXRakxSDTdV8LLx3cLv8jESihyS8Y5NTFPw9KkkmCLAYPaGXJmeQrR3xcJPWbNRZoqk",
  "key6": "4CrL5eHyeT1iCGdPK8fmDh7S4UVxjK74T2dkdguhwCoVNWbkhBXaWSzhc5KmpghXxV6PyRuqyy2mxJXK48v7hKMe",
  "key7": "2BEBGsCtsS9MBPsFMyxdbj7KiizM5wkpRVzQGLF9gzMo1HqZfH8ewhiCNh5w48QS3sESkEHxxvhqPuZbvhGCdQFX",
  "key8": "38PfmP6y4w1hjxJp6raVQvR7egVe77aC1b49vK5p24YSPv3Tid2rjFTwwu5dN226xjEzSavFapUnfdqmG6nCAmft",
  "key9": "649JdPzZER7YtmqKG6YC8YLqPmQh37AnH7F4UgBvLttotbvULSdr8X9CZZXFvPoob9VfMEJ7mpznTRGnwzKxGzKM",
  "key10": "NVizfLH2upkpv4YFgcM8sMTaZ1bnDEXxBw2tVLSAx8jmcUa4QWTAji5rVHqsBSiPsQcQohHfWXg9EqtKqSgzCD1",
  "key11": "2ncFFEfStB6bSgqWEcXmHFyyzmmrfsSwWGbuWCxcDc1NLTPamDo2Wbt52Z1HhZpSq167tiVW9YheTGmckvQcSXsf",
  "key12": "2B56vZ2wuQiv8ZYAuUZtQXoqiPSASfhoRFLMjUYkondpTcy2FQQ7ysYPVw41kPxGLpRNDBmdLwGS7AfdwdeT2CNq",
  "key13": "4JrgnSrLa1dgFtatLbwBwjo7WcYSnHgAjPfRoTZ94dYYV2ugoutC98PrFyWiVapA4V4mBzSsU3uhV3TzTt8am7LM",
  "key14": "4y7wcVMbFzDvFhzxoJ7uMdpKR7HjqHRo6wpTXWbg5saBRjDVT7Xb9sh9Vy9DV7gFagT8MohJuwkh7reushJ9sh16",
  "key15": "41gRQHMLNvVsg8gpd6eEoZARgYxG4ptUrM4AT1siJ3yFv82jrvAt67X6y7JWxKeAbFy95PL5ax6Ps48yVrHinX9N",
  "key16": "KoTQ5QibbC4ioKWsp3K1ThVg2WiWUJcD7Z7N1eUuH7PPavacJxtegukrjtZmoL44jCT65SxjZWVdDXCGni6DBgM",
  "key17": "4QvLSSCUz5mFNdR2EGb6FfLme6DyhHLfPt6SZKgmVBTNQZgeRh7z9giyyYP2MewknbFXtyVeY25W3MiywzBHpgAJ",
  "key18": "5AXTMsmnzDsPwesMxp8FANrGuBNVx878znmBZ8ee9sTBs8EjNgB2XevE1w1fuZZfhyR1x7EJdvsBt9MfLjkgiVgz",
  "key19": "3m1rGBMpi9kS9c4i13YmnsmWN2erxJor1tPFwr4gSyU3VFbYEzoKBF7zqgMmeK7iaYBaNQM1eqTDiT7fPAtNC9X7",
  "key20": "5X9shuE6BC4giwCvE6vmLxgoZwxpT9L5EWeQmHu8z49LiWZ79ay8apUNfSNb6rbk57ZAxVxuQu7oYM52xkWZbDWh",
  "key21": "47t6YCmywPoUcLZyRgTYokCMW8xx9yEjPQokkwjTxzX1XKFiAHMpvfD3yq7DED8pJVmXDnQDLFvjzSmHtNsnNnoH",
  "key22": "2gNYpLnPSUdE1c7mB3FrVcxxD9LcLtQR3TzrzJdUSFLhkX6guyzNxJ7JPLonxT7T78dwgeRRx567byf7pJG3dyt4",
  "key23": "M4bLriH6Eup8UmAy6McgMyWigC11doJ7isuzpU4vPEafUiS8S4GMRBHBonRbwwgSNM8oHNuNisNerbcW1GbfUxC",
  "key24": "7vNg4Y8uHMuGbAzJyyVCYpnVaScZpvXVi5G6VqBDqBFg9KHsuKdCAQf1rEwUW9HUXmVn93BBAzp1ptSQ2d5rK8p",
  "key25": "3vvs5td5Ts1brHbPCr8eKEqAdPqRtvHnjxA9Q6nbHigvunp9r733cpwprokwkWxjeCsaBKYAWytK6DKVaZknwVqG",
  "key26": "zqE2ddQgdaV1ej4JmstaisLDEkNXGT772SDTSMLfzVBPXS6rdkSdunZbYUFvLN3igiqFJEQZGLZmchTor47zdu9",
  "key27": "cau2Ej2wS69F7csDr45E19ss5NjhJQddZX8jdejzyPBtxhXrCXMFbhfWpSqv6G9wX8ZxnetFKKFkbfuqXjZN4Jo",
  "key28": "4stxZ7kJenFoxJgMQ3oM8YBTZgJHB2JMJcd6SLxbRvGmZouyf5eyQWMAtR8Y9BpVuvEhfqiqcxMb9RckdHwgzHEc",
  "key29": "4ZHtjwUGiQA2nMwCyTryxECkyNGRayA5dsAWaG7D9o3TrtccRqcbfm2iZ2TDNTJC7Jux97fjMHjnrft2YVG8kZ3G",
  "key30": "4qtS78fTZ8n8ysDDiNudf8bzqoCTpHrBrBMmuyATLydxgTB6jMuhpBg8eZuXR7G92K4J8ZabdWruyQjxLXSaSmoQ",
  "key31": "5DAcHZDssjcrq7SJQQgzfBNJxpGuRc7AHndWkaVcK3zjEvHMG1aD2Gv9nARRxurkgr94RznSoZZQAWLXBz5nbEor",
  "key32": "Jdssvm3JtRNXpjvaBL4wdnuqSWBzLUgvUVM5DeAUFHXmUyHEk3Dgf7oSvdba7dqCWCp5LiHGW4KaVLbfAZoS2tK",
  "key33": "3qHKYMSHKw6S3QzCezpg2bLN9rEq18jbSYY1roHuNQ7oT9Fg541i1jrn2fkxQoWzAvS6imyg4sEBqeBTUXL2TZwL",
  "key34": "4rQQHbLBTfBTuBaX9qGExdjXTTVAptPor1MrQM7ztwroouzMxFuw4iCQZUyu9EnzUDR2GuVgSSMu6Eeq1JJBCCP3",
  "key35": "5dmuKjW695zErDUxtVy6fHfAifJMUsT4uFkWHoQSzrkX5PiSHPYCyFuBHUediQnRcmoJoBZcr22pzC2xeBycFJ4e",
  "key36": "4Sm5KzFpzHUBFsVZ3uhQVu88oGLV8vuuPEuNeYazqcvcVMarDU7WuSsTSpiDqKMHjHsfV9nR9uMqwuLNSYAuKWSy",
  "key37": "2k8cibPhEqE7BPKvp8rWzHP9Ri8GFPxStn5poSZFJ52arPSkvThGoCK7suMeVwE7y5F2SCnztHHZ7DAoQ5eE7ghq"
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
