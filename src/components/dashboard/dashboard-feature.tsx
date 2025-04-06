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
    "2pMvpRpL2N4NBC2dLxN784Pg6H1dBQPqjfVVcfuXxTrKnAGFsh9QKhZXfZXmgRYmE3eeB7ZM9hWuK6tq9jzpvKTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZK4DGJ2wC7Ayo1ZgJEGeX5pmAwZuuRGoJYCNZQpiaXvm4tLhVzsU6yrmXDtfNkEWuiuTiLk8Wjdv1aSs33655Ao",
  "key1": "46FaETZRgaKWn6hD48E1f6fBj7QcpcfS81rf2H83fxySMSJ1yBKMhUfH5icQ2fLR1jXD6WhRZFi32jy886uh1CtC",
  "key2": "3c4X3beZFoKpNw2rocKwmtEH3JLDxU2PQYHhm8GcNfPWQVCnkC7kn8GPUvsfjHygUuaXjVVv7297DqWZ236k52c7",
  "key3": "2h1YPmTYvXsygHK6ASv3uRQY2ZGfbbKFimuRYGdMLBsmjBEh22ArsD1zBPovhp5e3jzTCpKzg4JKjGfDfrCn8BQT",
  "key4": "2FytfE7mnucQzrKZrT6a794EUTpMcJhMy3iT7rYuFs4aQpihDEAcogQE4LgpWtz79VW5W7sZu9uqEZpzcs1WWkPG",
  "key5": "2HNcAUwDxob5HaEpRYkR8VhawSHTmHHQWfh7BdiiXZSmBXgUkqA24Fzf5vCGMBwN47jZosfSaFeF7XCiMbBQENH7",
  "key6": "5LRWfrXeHT7TrtjPD9NsFBnFnrMyiFPerm4jFeYQrx1Rvu6h3F5kgLPZpgCGemYczzMQ9U7XtbyjszF9JGX6qkmu",
  "key7": "5xbWjkmLv4Bfo5o55BoaZCNtaANmQcXgRrmWh6Hxu2xpfdH1kotfqy2Jkk8sZrA7aEVzptxeQ1efsLhnPQbF3pX6",
  "key8": "3e68KpDHZqBXTov6Xtf7tDpSfXWWVacx8GijuwCx2KYLezGqf9T3hoX7M9qp3Zks8xuJcnyj2L92tTBBE29KsZ4g",
  "key9": "3igTVKUCdXgDoxnYiV8UVc7RKzrQZaCXxQjajdofgx7jqgdM5PN26eNX2stzLShGCw1wTvbDDWCw4kDTa5UsL6d1",
  "key10": "3FCPpiZkXqg621EhvnpQnRyfKu7GFQCJfSXUV8bDctFaSpfvHBfg96VVaVeFFNE6axhR3oy3sekoWkMmrrfW4dkC",
  "key11": "4rwPx7TsX4TcoRtXhzNruRiHnrMGU7rawF4UxRSupykUBp91oCQJhBavWZP38VCTeqF5eSSLBCj74hSkkfm7hEKF",
  "key12": "2i7MKMkeh2r1kioXovSGn9TbpUwXNwPwVE7keUBTgNGoN3Md7NhnCER3TfrxbWQoQ3s2LRG7Ps59tCEJSbSx34zJ",
  "key13": "5L8K8XB8hQb1C8gsHnUEMVz8cauWaigUCAdWc9HugxBn3L3dd21FPnP89d1Bct2aKwFpw84x6imXH1Rnpc7MJSaa",
  "key14": "4zUZDPKRfsMPK6LQixwtSSJ9NdW6HDeMquEWvDPWnmfRsuDrnZnu35CrMrNZzErJCDUrdqBgtTFAux37HqqFCjLK",
  "key15": "2HvULJP7u8MUGcJuGE6wKtAhhE8PZuByQNWXCuAi6JeCmCxjJ169GtasQf43LRyWuZWtqhUxujE7giQwAT8hpkDp",
  "key16": "2kqB9Z7e4srWFvxuQ32WMYhiuqLyUc7vbq7nTzwWr9Jt3oVehkrEY4q4uksxn8dG1V2uutkQPajw5K2px56SAGPN",
  "key17": "uH5t5sUwj7MXpip1xaDsmK5UGTURdAGF7KWmrgJmR8FUPp3JTKYgWGu8mGihd88AxQb6rPmNxvvMMRFHSoEdoG8",
  "key18": "2WRYDkNpnTcyUYdTc8qJHnSLE1cra1kcoX23LnAYLDXGydMJHPxemJeUnWaP3m1sakFRcmgdJaouTLNeo8bbYcud",
  "key19": "34XoKHYZ3Eby4QxsmVKbUtxTzz1sE6hbahissBpodAry79d4PL7xPrX3yTDZ7EovYmQYUqaQz2Zb6VKUWFN9dQww",
  "key20": "2biSZXuk29xDBkBYSimobyiT3AsLYsybujdDwqWoneLjmQ4Vgkym3W3bWxbchERxPNE2mTPra3fKXxDrSRuEvRXn",
  "key21": "2iENGUjUnn2dcMNXU5vzWKiCmwbK7d4LFdoXJGjFjZ9UfHE62ogfHFjmhxqwCnApeDKbqJd7sDenrC1BSJ38hGvy",
  "key22": "KFssi2NLWzCA6kHB3sQBEhHcoGBY5vyBNtfoCS6Wjzku3GbgGFqBXMKdYw5mqLMk99Yo3ZZYSrPfLBGMV8s9vxh",
  "key23": "21GweTo7DdKu4hbGMcXeTws2CvYB9JZBrYDNaJTAXztsaA7DxWdhvacfPbf7T7TchNskGdneiFs8w11RrBZCUTno",
  "key24": "5KDaToS8U8e9exkS3YQKZia2GWx7nX2o4sUitE7wu6CNuF5Xupz9voDQ6JtWAnENtzxFkSp3aafHMzQ4YHcMFcDc",
  "key25": "4Tvz3Awt2uCXCe6r5LdXBmDMu1K5rPZkXn7VtqnGzHRuDhkWTDCJ3eyfeENY3cVELcoAvABAA9URbkzxhT1Q1TwD",
  "key26": "FZ2reby1ykTz3e5aNFrBwcYgrnb9GkUcQYTgfWmkmB6RGVGJZV6FbbYM89RUU6fmYxd46NYwNoDBdKG48KcfT19",
  "key27": "5d8G55koHQseqqiK7tJR3dvs9LkULsnG33er7tb7m92UJFK6d3Dw4sGPiaLZChcBqt4c81YorVZ4nkTt7aiK561x",
  "key28": "4g2E8vwc1j7AdXexPbE7StveNGrC6uruKhScXRWyCNaB125od6P6ErrQTLofoQMBC38bjRRi4sKK8Ah6UCSkky9Q",
  "key29": "3jNB215Uym75Cujie59BT1V3y8JvxkwGBGVoDMHQy2trtLeANzeEA7kDjJojFYpr61p8gSNWUkBAwjyhGQtf9qTJ",
  "key30": "59XMyrzV4toF817znuWae3U4LXFNJMXSjXEQcvGrqYnpAdgm5TLYvpzgmTfdnn9yB4DkvDgMSeH7LkfmLvXXxUsg",
  "key31": "3E8y9TdpuHZgjsSNeUXAWpmfQpD3ce3MqgL4so9pKLxpJ51UGs8fiid97K9EhRTEzrZUZHCAsKWAAdWu8uZnmkLb",
  "key32": "3MS56SYnUaWBA2G6PHygBYmdNdBdQDiSSCYGhXeSVktGFPFXaX8UEcci1Ui5t9uNh1UWC1Zpjp3UR6b1JNpRpxVm",
  "key33": "nPviSMASahxDsokd8uexjmsC2J326iES5D3UePC8m7oaBvFP5624Ua64NPJ3nxE7kB4N5GwUKtTUgszp9NwqfJD",
  "key34": "66ohkUmRftkJ3Ev3kv3B2i3zdpqGo3u5zHj38LaZRrsauaHKM6KpoHCD7eCeoZRbJbpcGBTwAZeioBEg8z8Ah9T1",
  "key35": "4dhNdbmRdtVXDY38549j3CyCuuCAQWpJsWX5N5W3FFkjb6mG98xBjyUHLFBZShGWAxctSRRKoi8GomQHXT2XDXqp",
  "key36": "Rj7dFLWWSUycFfaVvHeXH7DJrjcpRYoRHiBEDwdnkzSQ1xLpw3jqGNDWdbPDhkrX7PhMMysiK2NYNndf4bsZGBZ",
  "key37": "2VZdRZbjxxWRF8voPKPHKfSJn8cj6Rdtc9Vwz5C3CNTPnrRWsRABzojUTSoDqdWcyfKFHnsynkS1hnGtbCvjrVf9",
  "key38": "tzW6r4ofMuRYv9uL6LDTESihxs2cknmjenjFsCDfyGwnQQaZr76SBqDgsU12SbyKfVjYEMaT1hD1yH6vuX1JjaN",
  "key39": "2uWgHT8uwtGXcJ4CKnrBC1yLALxVb6i4tdU4NQi7dUchMKFJoNhNeEgnKHzNPpj1ekYmv38mf5X62upyv6Eb2jsn",
  "key40": "5pLhH1i6s2bzxnQjy8voc8thnRR2zokEMN73yzEeFJgkABqDnWyXpumhs8WPeskds7ukSLMLoxt9JeGJhg7er1pf"
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
