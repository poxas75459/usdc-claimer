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
    "3SCUaZue6B43cDSGYK34Yg4PXGXwcr2w6cqkEf7uFYp3NQwfUUL7WrDLyRwEYUSXCiAj1TvWS8J47LXHyodz9wGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mPTeNyxZsoVepQLoghbgyLJjrTCfJedDP8grg22F47sz2gfaVTBKzrFEs6qsKCYZR6ojwzjFuUH6fyiy9n7Pt1b",
  "key1": "4pwQXd25p36g5FoFX1FCTLkGpFRfTNFXW9bLwvTtyWaeKHPPssqGkmev54HwL9YLLJKwCwft5xFhZP6cnum1YUTT",
  "key2": "4Vs4MQJjmu7WCW2Y3jGhGGW9bXkFiHbfy58LsWdkx4WuoWYNd3pbRBsz8oFXcJJxnWvm7QXWCsMgjXx8ZhppN2LS",
  "key3": "2uDXdvb1w8a1zughCTzNBvSikQFZkEADATyQyDnYpLa2qnckfrD2nhfPmps4nfmG3t2yydPVFjHPDHDVWsYm15yR",
  "key4": "7BG1GEBn8oBggia85GgaJdVGqFT8JC3nS8qiq7iRCkjr99QB51B44EDdWWHxSB2Y4tB7ccmFy4JxovYfq6a5jjh",
  "key5": "5xV5cvQbBxqWsa1WVRA7oygrpwwy11ogsiaqcf8NwY5yrFRPxEN1ayaJnAs2qPYeikS476YumvvCYGXdrLewKGMQ",
  "key6": "y7RVVktz2PUzrG7Z8fixSMytBeofyLs55bMG2eTJ6x6SgqyePK3EfhnmGc1r8AQ5SukLjFnFfCTcuMPyKcXWAQK",
  "key7": "3wxL1x21W7Uv9X2d81Vrq5q8TdXSXC3ktGdiSNWNyzCJK7M4mHTzRysn6zRG2J85eZipUz6pmrL6fTxZ7b8uqpS9",
  "key8": "4pwrkdMojLFH3zNssbmU95izSTrSS3LMCkgm8Yjb1XgMqAJfaFAF3uXq7PrHMLvkcQcznS9zqrfH9dD4CcTDLcmZ",
  "key9": "2i2Tg1sG4HtkffgUKWLgQWc1jd6U12rFUcj2qfbaxbKQkC3k8xKtTF4eoGyHKFZukRpoVyMF6HQwJqdizqkekXQz",
  "key10": "4t4WJVJn4v9BRLn59v3NPVo8MCQ23EncAD5rSKZFeLqcW4K36wEnGpwucGyh95uVakB51ggfC3AN7k88wNfwtNJ3",
  "key11": "4TH1CZgCg1nEqnNMZHEuDfuPFMgKxDsT7hogKGYvGvQBL6pXaVF1Uo7dF97wzefHXFoLthf1VetW8EqwxciXsFxo",
  "key12": "5Tg2ae5WfGKjYPuNah6MvnmTPbAGpHz6tQat4ekdk1LxtBVQKRcMReMTXAmKF4AAQiSMxkhwrX6RLeVfNHfSn7yo",
  "key13": "arVqBPDrMjBz6NmfGpXxpVLB8YreGrvmcXKR3oSydeGtpRZXfqPQFj163ff5QCauVkocWWK1geq5EcPjMemHMbV",
  "key14": "qEvoRxBPvZuWVKit9h4vxsmvY8cgRPs8cepFZKVMqUvSgqE8XxyoHQizLFMqRkWmtEPCUNVf1noFMBtbvrDaLNu",
  "key15": "3qmLi2gXRzfVr4bDgdVtoybzN9xeinFFznTzq7q5bDJYKyZdAmyVsVqgCxGzhNsoej7bRdXbiM4mpp9grHzWNHN6",
  "key16": "3vNtiBfs4WsxzmZDtzTcnRuBhPXvi7eGRkEQcVHduHdMbnRRLVcTQFhHF3ApypUgu3XZFiGm4Rgx8Y5ghN8oaDDH",
  "key17": "4ZDTMu6AYZasxZbF4VrVU6F79DCWZUdgdDATosnVtbqTfQxppy9gcL3msiae376BeSm5aGjZfUuCWwa5adbdb4d2",
  "key18": "2mcvuatwLZcandoiJdLumtjW9dcjahB9CZF4JrTcoNXCUJZawAMeBDkoJ45N6xqNDMJYxwzyMJteXxyVUHArGEfC",
  "key19": "3g3t67sRjrzEdP2uimEK94LRLRE7tLALAwVSF5SYbfqsvhNFDcEGa48Ftjpr7iFDGSfYVnEjWGcbpxjdc6RerdAB",
  "key20": "59wkuG3enaJwMFijpdwRNBfXctF6U6qZfRxTagDnJgSu6dXewAyesMimugoYc6ouyMvcyrHqas4THAnHV6jbjyC6",
  "key21": "4ezbgRfmV9qAsMjTupD3jTfBApai5K9RW84v8G3Yzfn8tMH972Den2DKTsk9o3wLfX8hsTvppXUh7kXWK7BgdeH1",
  "key22": "V9et92MCmtuPuw1K3dyVFFh5xo8tTk8Ab6F2F6vF1ywb5VuP9A5moZxvrMm1JvKcmKvHkgjs6PEr2xY72AhJ3cB",
  "key23": "46go2fgUj9nWeP56uiEYY967k9NFmFaWPDTBaYuTeuxVbuDnd64d3QnqUG8AGKekYPbzjsYNHsn41UaFyQXAPQtt",
  "key24": "EaTouLJKMZJyCTYw9bNqAnc2EZswoAwmSj8M7MPSyqkm7o43SVWVmkiqZN8ndkLY5pPgpSVAzqF4kQVzysnpqZc",
  "key25": "2WcKX66fwb1DyQifpVCDepgjKDN6NPb5sdU7Go7LKGekSoULxCPDr35fHNY887u9VosdDskEar9FPNJhxsLazkCq",
  "key26": "4o7PDp5KtZz1ceU1i5qNx3XDP3Gk9BYWnqyoEtytbDEMUZsyNeauJeJvqGvFrxLsteLWR15agpXfbiunNZwyrdYh",
  "key27": "xo5sGL5GeDturckBc2CfD6Vdg3XrHtfFUhYtj4SiZLK3LmzqMBGYwW47Vfn71Boo21C8yjpWiYqHCPVLiUYpV7m",
  "key28": "53bMpBX4ydULNs8ztZsD7sGBmwy64vz7DFStYE7XxQc2pv8rmNynkxtfqFdomce7DkJ27ShHGbhNkNTBTFzDBk3K",
  "key29": "2UJLc4GzD2TiU8KevbdCH3rknxNcGZkp8FxDsjp9TjJJZcgNkBZSXFrB6FLQgYk6NT22JcMgdUveKhoc7GdpZTHL",
  "key30": "4Qh4bwiomwEeAhR731ET4RgUxY5xMmepMombRhptgZpfDdvBdeAxL5xyBCSV5gjegyAZ6n67to7n8pj8j6Uvk7yA",
  "key31": "5YXJH3ZiEpKVU1dqAQVfVCqvXGhgDwucbY1r54rmjZ86V192gn1GZXteZy7TLYi8cJ9CXSRhAQJEzfHYidrj8cVy",
  "key32": "Pxd7R1jvctgB53RVNDk96hdYfRzV2BXUkQHpE3qkY9Sdr8qvFihkZoy9gssXofbqdRLTkFvS8nv7nhHG9Ku8gE7",
  "key33": "5VtDxqupnpxGYqrdsnDjxGAC17JnLemr2ATJCpoiLG1vVELa6vryKwypCa9KW5oVbcVm3JkgQZEtwzktTbVdApao",
  "key34": "mmUemTwqNtJUWtPuTHVydDnL2KNsoqjNnUYUAZaZVPcJmQbR7BRjSNoGACzQeydbJzW5ppWuv5DbzGNazqatAj1",
  "key35": "2NUYmcnxL6ZAbdRwqjt3PTEfFH1U6LE53owwbEDaj89eR9T1gJza7aJo521bAZJw1KDDsGKn3YstHPdwrX3FsDBn",
  "key36": "4ESSEQYz3PgCNFpqQzxNLJnG6q7TVLwn6iY7VCMENMVzGoBJdN8rpARmW62k26xe6eYogAunLhQAMrZ4mSn4thAQ",
  "key37": "5FDpUaea97yxBHGJqzBrjh3gTDPHq7yNM49RtoQQQEAaAGk2LUjfd1E1uLfVf65yAwxmjQydqzoFNFUEs6Lc84Ye",
  "key38": "64SmZgYHHFeHe7bFonFAsMsmfpK4J6fzsh7EcykpV7tzF3ArEAqBHqtsdgoiH7FqPKgqj5Jv5Wvaj7jXZxhmuDDE",
  "key39": "5ZPHACh1nWNQpz4SKoocJgJmvVNzASeZEjv3zvpHybUqRU5Rv8TwpMRT9cr1146GxhmF1m9Z3T5Hu6ytMiMqf4qe",
  "key40": "m9RyZaiK22tQuapxmnpWaRjaVw6ADQLG47J88cNRDR5m3Af3Zgejj8n4deVCNxf9fcBpMqwFCwnnd3374zp995t",
  "key41": "5QTyPQM2LrG73RdwJQKfuwjuXuNH3LfWvVD1PbHXkYFT463k74zQgBk25BuHq83csHs8EdCWrWNtAv3uqyc2akc2",
  "key42": "PaLXFtMPhCzDu55DoJXAMjfTBvqPfYAxPfxaKY1b2q9n2oCMj2xjPFidkcvHiyCKFX3nfKPeXf3jrgpyLMxqZjA"
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
