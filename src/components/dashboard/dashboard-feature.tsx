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
    "3oLA1jpatoykbjkVTKjWvFyyYLiCvxHCFyHZ5o5cByTvzzFniQd9bEPi7zmeeiH7MiPewamUvtQxNPPTtkeP9sYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q5f1NSxKchgmnKtDqmvXQM7MVaLhqdtFSLQG38NeNDrHFxZXZwKheLmUvA2ZGL6WUdsXaYMLHPnFg6TmCUdRFFQ",
  "key1": "4xYH98sk8MCWxE1SdARV6FAFKajLAqp5VAq3KLqTBG8xKkhmwvXYpbMiRfZs4S91S3YFUokZNNWdStEVFvCrkZrg",
  "key2": "5dqSDPDdNYY9voaCjAkLWvuMKo5HhNsivSGYcpgcYiPnuwSkyxre1pZgewbdRSpqMx7CwrC8xqyx2XGTPUf8StZw",
  "key3": "5FfKhRsLpx4c45vRy9edisdv1iFbaQTEad4iTvg1DsujvRodS4yMDv2cQonoxnyNuPufZShCY9Y9J9AREEa9qe45",
  "key4": "4RzfHYrzCDnj31EDbShPUJ4VhRPvVmHe6gMZKdh61MnGNjnmhgdcs2pHCn6yaeMwBgXUBWhG42Bxf4Q5vSDwnvyK",
  "key5": "XdZqrcZMZX24edKXVDK1UdyZ49uZt8bSKnjTWD81fDNLUDc1BT44DSJjA9jMcepsVZf82qeU7abCN5f8YYUty1k",
  "key6": "nTKG9jBRz8xSdszciSH2ViS6rk1vMYQwhWiZoGbfde4Jv2SNDpbg7tbdqXoBtMeSjGcawq9tuNVNUJ7SxcBii3F",
  "key7": "2j49rQUwzwt2PoLZqTvBfqxxaN1QGXJmfvRukJ87JboqqfHtXEnBa8Zwbdcrh3kzUWa9AdKsRDv69UUFtgAKqjSF",
  "key8": "2Yb7XHeGCKZginQ9foXRPF3i8MHKiz1qNtZT3fWN22uobEzXQHHA9CgPtVszjryV4KjA8a7rLBH6hv94W4Joxfjm",
  "key9": "2KAvqRoFrxYXnkBJDpUymhxqWaSjnJJ74rzGr8JxiQP2RzQ1m12wqGfeEKMPs5gfANwGB5i4SPM9ZP8KThLwdWfd",
  "key10": "4kEC2fBaVTJ8mPviPjRBuJ5QegT14Ct4Nusq3AxT5e6Qk6AoM6VAh1SGSCYX9cYpCJ4bqRcn3KP3Qq5T36uCVrkA",
  "key11": "55wbtj8JTYFv6TuzYYvm9ExwQBhfns3SaRymhh46kBZG9FKrzqRMmqG9TX7hFFBcHafxEtFxnfRL5YREDhy1ZSXm",
  "key12": "4o46LKbbrR1PeF8sm8RMbG36kXiSuAm5HFDjSadTRK5KHsbbpTA6tqTwmdktM2AMp6YQnwpsjf2vQU1Gx9RyTj86",
  "key13": "2iKgxsRqC2CQ9HPdEXBHqDY8vUXdEhkeEUYNx7QFXmeRq2rQbcJjbvvokZEvzszp7PhVBRBZTCbpvafuVHYwg2Sr",
  "key14": "2puDB2MMTFgoDWYDeFQYDSuM8SYvDZuc5F4ZVGmn8QMJu5QRmY5cmKVGgZHPV4b3D5oo2M29Kop9Qsx6K8d1yfbN",
  "key15": "2vwC4cKknF5ASi93WkhDrDMNaAyN12KgXtKfYRvRLEG4LHuo8QpzmtGVC52MxebnufJgTYnXFW7apr7C4C9ekNXe",
  "key16": "2548gEmU9VfaouFE5XZy58PdAtCjUAzfmTEbGuwbWErG6EpFpExNpQRXc6GxmCWchYPcxLp4vtgbrubj7qk9meC8",
  "key17": "2HgZvPLsXBHMbZm4ZPD9fYDNy6YChAY2PskXkswrKghXyogqzs4yDkun63SJc9Pxt4UMt5pPkJ7LCS4fH1VYF9BM",
  "key18": "5TyddEwGt4YVmiV5qSkVhggQbjc9DeqgJwn473L6WU3pNiY8bBdEsHGHZb3zMYQxtA1Zby4SExCGWjZ9LvroKU2J",
  "key19": "3d1XxuWxez73i3Gju83NLhyuHkY9ejnv6eey33uHjdeULSEYtjbXzetfdWyPxzZEvHQCWvzBjYvMyTFEA3DGx8TH",
  "key20": "41WZQDRm24BDQN7WF1tSV9MHhXcqGF4a5hwg5XvwQtD5DSuCdTDES2c6My3CobW2XZKxzHi5eshZ32neEYcw8URf",
  "key21": "4vhAyyp5tPpsEPwMjKvKjGXvFXtdjutvLmsAFjKSUZXgcNBD8yX587xzwN29WQyvVaifecGH5ZNR7GRri7uPbCSp",
  "key22": "5m6Mr3P1FW74bxc6kBMFBxNc4f57FY3ZQgpsVg9ytAXYjCDywgPtnBHjccbqbPCWF2EAzNFWtrFuaABZMFyc4NK8",
  "key23": "3PY7EyqC55QQ6w4fSNjEuEuRCF8D54sbwvq2w8aBRX67vYodv4kTJZGwu9xvT7XD9WGY1CQvst6S9iQnvFqEpA8U",
  "key24": "2G4jxdLT8EbYcNXivi7FbnAcDWmBzYr7wZCEF6njn2fxqj4uoeNdNVtPSiNaKYnhURcLdMV2QDxzrutd4UV76WYE",
  "key25": "5BZ9f4xjcXXAVX7PDPe5fr5LgS229ehuQpgwYFFXxctU1LkhhczRSkjXNcupnhrwjhdWgnPuaby4Zx3NDuzUxR2W",
  "key26": "5Trq2VRFqdSYugTSzaR3QPaXPWs51qaQLfifm4AxS5JB4H3EP5apnrsdiFuJfLwjvnvX1HafkpNYr6MsyjVjtuFN"
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
