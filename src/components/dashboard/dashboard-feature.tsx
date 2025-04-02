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
    "Vt96irJVjEknxrxvLFqHZNEca4Qff1VoY4ASFbQuAHJtkZog5ToReG1Y3FxAsFPL6Lp6eq5vcLact6jWaz9Qs1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bi5YzduSBBqnhsiQR6imYE4f4DRamKSgJ9UEQuYW9MwpcDmjemYNVmPdd1e9eVitTCTvCMP7FFnRZUVxCYf3ksh",
  "key1": "4JR56m7vNYfsbso3SaHtVoMxmi18RLS6PMrMKvEScYP5bBMdgEEexB4nDQVRUf6moWXyGkx9KV5AmW5ZaAv9RHUF",
  "key2": "4MocfSbmHLZtiFXSFyMgcNbsswLXX9GijkNtfE498j9eEZSsajj2rFyc7ojCfFjjjUEANeCky7SFZjEdiLSE5mQ",
  "key3": "GVYkZVmHK2TiXepPonc23pR55W86ZjvstKXQrceQZRkmC9F69oyCMxhohYf1XNXF29CAs9w5GBgPf5sHAfKAQUm",
  "key4": "1hjfUpELxvoja3brUGPvFTC17QW9S9jqLEmvzwTTh5xioHNov65etHkkeFurMiTSMLB1juTwmxaZDEMq1tVbZSM",
  "key5": "58JJc2zcFkJf2vmMtxBf6MCsZT4hM6HwtLPo96G5tmsQEDjmnQ2up4QvGm24s2WyDm5WiB46q15ZyRzad4RyvrEt",
  "key6": "2zdEjD2ZyKPmnWU6eBsfkETjrvZjKoytgYqATH5CrsnbDjrG5NGb4KEDFvCtzfxSnr9WH8ZJddRjNmx2C1EX1TcU",
  "key7": "62hkqmAwL6JUGEJuXihjiDuKMgp2hABi6aVBtFQ5iYmEt6W8h9SfErpn1oY959eRqtyVm2yg889JopVgpCfqaBFG",
  "key8": "Taf1UdAJKcf4T8p3yQg1BxMrPSGcGiuDxP1GPBovoBGGptpWUouCwkgQV7Co43eoRwWqHBwAToG5T17RPfuMt87",
  "key9": "1kzyza4g8cPG2SNWVocLsFMCqD196mqHgoJMKQhZa7DT8xj7ntBJJKp6EJaJ4bJjauMtguTDyiHd9hT92ALv9tK",
  "key10": "3uXoo3fGBBTL2E3iqszchhJrtnEZjJF7ZYUrHGvCcAmK933yGfqdM7aPZxAk9yncQNVosczYYKgHuYvZhVMDx8L3",
  "key11": "2SvnoaEskLtHRW419hy7TTwoAnPzjeNjKHZsH1HeuyjodA9KozEgZ6jejz2QK4Hpwjg4deKWYcjDqtNL21bCwTA5",
  "key12": "G9oq5zafrTEahXTuD2GuR615jbAKSD7Mi4cfYg14c5Cx542R3PjX3JXBb97nNpUoDJA5mLkxQFQp6UffBmc6tC4",
  "key13": "5XNKHZLkCv6Ct4bucA9gUVEVGQJNxCs3bRARcwgAimZQvhQVLASSLNdpYoCmt6dqEFbsV71nMJQMUnw7NRjFXxD2",
  "key14": "293frHa2zJddtAVm48vFdfHQaH34PwQAMkbmpdUCthe2JLDf54LcSquQkDz72vWbaGTMb3Kf1PrqETwQvBd5yQrB",
  "key15": "2MY4daZE44GRVYKvf3ngbdVtyWhhVMmhbXNN7bZfLexxtGjQPgPpZkJmpfxBWhrFwTdMFf7JnZGKincvrmYBP518",
  "key16": "2vDtcWDJKNBbJpRDtCvLqravAQxMFmQMuvp3sfKf4WbSmcGdgF98vuTD5GpFiLnJRpjtEFmEmq1dXm8gZQyqLDRL",
  "key17": "NRucCj6jJpnPX95KzA4LUnHZjZi5Q7UdshoGZ5fTwTz1jvNLmArHp9giCbeq7DjoPDm8pjeDWTKuZTDg4VpZqEX",
  "key18": "4r3yvW7JYdt7NMXrZr65PfQZcvPo2RxVq5QtiF282XaM3XSwFjt9A54Uu9Q3BiUzh4rHw1FeP7G1wB1HgDuCHFsE",
  "key19": "2YskKf65MBmaR89VpUWGQoqn88kU6E7tio6YmWAEmCCFDEQSiSGfjhQgZCtZgsUmdgvKDP8iFhKQCR6BqJHqmNBY",
  "key20": "4JP3RSME96sJQpKb1KfoSt2frrVgpNgRgVaoXYB91fdB45atPzu29SQRmXdfLYBtoxbwseXvBtHkRNVMpvcwg5nh",
  "key21": "uvyEPg3X7Rw51G95Fi7eDJDKd81fc3xcXqM44JZY9e7Pof21foNysGPcLgRrXqw9Ce4uckAC6awVsJmZFd8u3Y3",
  "key22": "5s6xKXeSCPWbLadNkTSjjA89NEuHmytyW8M8i6oXhmhcmFHzxWKnQ1s69iBbHgUmajn7UtrVs944YeNPB3efUN77",
  "key23": "5HHLqNJmb7xs1Ww56cRw4nwz8DvuJhbEWT72cgPQ2oZPUvh6fETDYKzex41LFufvSzuS8YBpBtyjvy5D8AuSZnE4",
  "key24": "25WSL1d6sYD6gBLHhuZksx5tJuh5bQrjSABijjkRQaPBAXkFDQUB3uCxwXkGVKveD9X3KnzuBvTMxNKPpP5SwJ2Z",
  "key25": "4sEeF68mRQJj4CpDk5jn5renGSfMHfnj7hzta5HBbLuEqPqh8cjp1G28HhiVit8wTXJY8zgoQ4sd2stDxNzWcKgT"
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
