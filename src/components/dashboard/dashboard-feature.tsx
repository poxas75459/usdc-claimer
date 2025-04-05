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
    "MopxXux8wkGBzq6cmkN4YBMKFAzXgz5F6d13KQCaFCKq1wuTjEiS44shA8kvtjgiD2HCNxwJ1wHsFJKw8xVnp5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24V3dWjn5ZFyQa1VnazkoNG3rhXX9rmkaqBCv6HLKtdujFAKuvPnu4feeqcrDXwnAxLPXsHJeFWRTnA4oXQFEx4V",
  "key1": "46DcvvJFX2uKHCeFjG3TFHMApPNH871VYUoNWJGPXLFfMAeB6xes1SUMBxJn1Pwc2MwEVAuQGuHYH5VKnUUpdSq7",
  "key2": "4MDVF1mCsVT84An5Yfiw4axvJuVFtkLaFQ1BnRqV1dNNspdMrW7NU1tumWAzRLqC6AXyXS2JyWcEP9hzDum8iNSq",
  "key3": "4GNNFJdiHqFMMZr4z2D3nuH9zpgohjHjeLmRayVKqnYZoXuw62yJXFrHVPxg6Fe5CFHhV4pBNSir7ezi7btorKPn",
  "key4": "4KRWTpr5Q5pCQzhbD2G3QUft9f4SHKC8QGG4rtsTqTXpV5MJ6gzqiHkWw1981ERkY8FGMHsrerTonC5rUkEDNh6z",
  "key5": "2K2oAM1PLgrpK7QoK3KHRE1sK6f411Hhm9j9EzvYcz7yih5kkC22Yy1668Jp1HY44j1JNmHJ2QsGfp5bebBZuR78",
  "key6": "2H9Dbp7UgFXvt2QVXuzNnrhnLH4iRz74kBdCK9PMQGtkg9BvAE22apMfoBwo2UUeN7Pyti2YQWLkrGr5N9PdW5RK",
  "key7": "NUBSNkJW3sjKjAgroN8V9SyENUWKzHr8WPAkz8wxb4V4VNV2wbdKkheJUUzYnVtVrFXMaBWc8PqMbMTVKJGJVS3",
  "key8": "3aXVDPCLmZsTHZFfnwS6RWUnQR4Tb8rCox53URSErRaMhKx2KAwYKkwckezCmxR2aRDBjjfUh1SGhuZC2gtm3xyj",
  "key9": "3t6DgG2Zq6nLguNxZBYiva4hPkchJHdtwUoaTArnQoJ2sr2UoYGPTg4DXEB4k4WpRB3AhUtjsNATn31jZtYkqaCf",
  "key10": "5fnH2dJA81G6ctiMLGDzqQ5ktEuEqmM937c8oU9Q9dfagmSeJxuvtkZzAsHhZ8QunaqFTJJxmTYobhQWxjm56BuL",
  "key11": "XRRdd2816qwkHxD1fyZLwpgCFomN66DjHomr1WWGq2wPcQVK7gWivHK5m4VfiUDaa6Hg1BDgi5a9T3BDERiXHEg",
  "key12": "4GzHbuPsAdyda7HV9SP54YSE1wTUVcVyKRnK9EpVt5c21QL5a8CxBZr3z6pZbX7x56m4qRVk4pk5CnHsohn2A5b2",
  "key13": "2unz6jahej4yaduQkpwHXSukyoCxrnHhQG7k9SUXf3rsiz9wN79V52nW2cJnEqMR1HiJWAAfv2QCmAEaTQra11cd",
  "key14": "4ytbRUXzF52nmJrY2gK7yZgjwZtfd1QroBStPUoAf3U7JjuREW3f185yUqymqNwuzo2wfrvMjhoMUBJWEGiVjKPn",
  "key15": "67ovEt3GgamwPFPwS3kurgV1zibAfDzsVj5AYLvZYxff4DCbjFFvFHSWas1xQKDxvNDnuQUNje5DdLuWgMNbHCp7",
  "key16": "4ZMGAMRoUe7TeqqZBMobwSLiTSp6gRZ8rnYGu637ufvS6GKpAYDV3nqdvBDsoFwfUMR8p1NrSf7upZgx6tNH6NQy",
  "key17": "5D2xhcBLuXhpJJiXVMFHxTVSpyttzCVnJaNL7r89dHDhq2MkyPunWpzWXVJnLVyWwpxqHBrVJQeW9U2JRuM6tBa3",
  "key18": "4ZzXS2W5NXeBWUnutmSq6DgpWrQeANHyg8TNMWQQ4U7JgTcmkqLPRhg8b2GL1PcjwZafntu8CpwDHkDWhbcGN6fh",
  "key19": "5Fhq19qQZ4UXobuJZite4svmzCheSUnEgNfJLrjaJUFC5ngsmDpgnLcV9iwEWdtxtUtv4j3S1bEkDPefcBvSMdHD",
  "key20": "3EmVjYEKWRhGjdoCkxhcXNznUEC2faq4evYak8kFxe33ADuPbPrx31wBp1MXh25V4VwzxRdPMCBnsJ4CJ5R59dzh",
  "key21": "2bYskVnhQs43ebV2aaeWod4e4hWcdTV2De63xsp1ZXdwq3w2ucE64aukrGZoNTJEhgHPKaw4KnwUpqLWE6hetapN",
  "key22": "2fcgKLv1v7pYJBCpVuRh32amBpgUJj1ojGnQ453HUsCbSB5UWVmS8TXDhwWJ4ZCKUQ8xHCXD2zoD7w8zeXxiAbza",
  "key23": "2oJNMSMHoXh63tdmrqWTEzxUcSdqGXZZRuKPnHmJC3PcSAumSi1kBYshEbMKQm8pBYEguf5puZUzfsAFQbnQa8vi",
  "key24": "5syd4JGTW59rrJd2wX4WHg4hKGgCvaghk9xgtmgSisjD1uh3oKxBBeQSvr5FBNynfUor32wTtLbFbP83n9ZtWd7b",
  "key25": "dS4ZYgnuShy59a48ZAKAtQ68hKmCCkrTi3H6614TzVnWXRdVeVJTSA41tKwcrVHZCikB4mAqJ8ocQA1HMVBYiJt",
  "key26": "5tyeKxCw7deryGhHkZfeEpfRLFjiLNr9BPQTATWLod3sVmYEcJEMYkhk48c4y9NQCX3JvcNtDu63DmYdXUV37PmC",
  "key27": "QNKaDrg5EPiMg8Fuuwj2hNaY7dCadEfPBtybj6SYnJL1eJZ7pz4qgkZSGoiJe3X5A1FbCjk9dfAQf7X4nSwCtww",
  "key28": "2EmMoD2cC1jPbesGeZyWAyv9vLQEg1T6tcXrCWTSBdomQfaJGqd1uMcQxX68owNR44vq2w5rossRLZJTUZfLAMmA",
  "key29": "fGRaUoVuHoBR6SpYX4JuaLEtXL7aDeUMGZyiVfooBWVi6gm2Hic4UNYhUtUQFN5uvBk38Tqhf9LLjsLAGG5isDr",
  "key30": "329AyhjCECsBWAkq6hsXHLaZ4ZmNwwCY1wUjFH7y6HtjeqAcgqB7gMwMmjkwWE75UqJ3hk3xPMPN87CQJX8scy2e",
  "key31": "2pGEmRkUnJz6dziFA95kmKd1Yh9Y5pXNHd5aiD9TMHxEUXHqX5XkvLeQxijwUWjLR4oGUa3PKq1vk4o2muA2ikjn",
  "key32": "2H8Nv9XCrJV9E7Fb1gsAVSgEY4hcLnJUdhCaK629AkXpqwrX5VqvGxqHRuDs8zLnPZnydHH7Fhig7hjmjPGZVY4Y"
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
