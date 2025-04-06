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
    "3iXRgMtSZAcb3sEHwvUdoWT669K77K7ejxakqwAAsbX24Ejf5LDr3MgrT8c47W3fG8U8Y88AsRDcNSnA9WamrtVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8BWa3FkK2bMnEq73hmmhcsQpwcAC5sqXREh7ytgE8WikkwPkZiZp74UfBYtjQsTnquWx1drMxhYGU45cMi6Cc3",
  "key1": "4XchRrDUrZQWAYiSE3Dbfp8ujwpLKYL4NE4kPyUwJPa761Bqwk67zRxnSjeQEWV2hZWNrMuSi6XEzD3zfGtSCCQt",
  "key2": "65Wg5qFUau1qmUxGoZn24R2KEWPascbnqBrM2qTcCZkEno3MFsWyGy9Pba8AXSYQ3PPkGK61T31vDJY2F6GEVQAK",
  "key3": "4Qq8uoqYJSnYJGkeB8qgfJRgHodL95TZhL9qzYSDtpNaFosna8zoS45aU2z2b3rvuu5Zhvy2qQ7LASmPL5b2D35k",
  "key4": "3kLLag9zuV4wcG4tar66G8qan5o9yHMw6RAtyZFHcBKdAtw5dc31FujRFVqJG9ubhLtY1tSGRHApNrfPPD18wKTF",
  "key5": "5hE2uhyx4y4Ho6yhmYLb3zrLDfR3iPaQyEDapGJwEPtCWawcTsZyJebG7WkkiWKscQ1kpb4PJtrZ97TFr1yCUYk7",
  "key6": "5Je9ZMGKDjYwfvQjpPyevLjGzamBFQjMRPFcao91YMvK8sRre3whnHyN8sniMiQNMkSZi8AEZfF8ZDcY1p7WFnCb",
  "key7": "5ABVFcUsvJP93PXbTKYWVF3DuxnMWjCH9KweVqDAygUHzy3vZtAxxHXr7MgJE8vSRpmKTUaJ2kdw9bn983sFSyVV",
  "key8": "3yoyyXQ6mZKhZ2HqYkwFwNEMfTnTD1DAwNBog2VCdxCM38AbMBWgetrjnVVGEX8wAMgkdHA87LNpu4JFJkCSw4sz",
  "key9": "4QBqQmDQrgrzLP2jc4sFz8PrhVXeJPwYkGEbvn2Qu5W1CrskMJA75TCGv1WwXTSJa7kpdQQxQejzpUs3FDZqKpa7",
  "key10": "3nAX7vYwy5FtGyWaLpPs6RNMR7LMbkS1HqWZURu9omrEKRnXjnqAC2BmXRGghVdxEx98kQeD7JwLAkZ7ZNGHwC48",
  "key11": "2ZTaGbWpBPkoBwUMCEAMhW7vLRw9Rc15APjbobGsBfkjnvR2gSoB6moQ7AmWGUYfJtjvypiTo43GNWFE97zWZV6n",
  "key12": "2RKbkCYxV7f2knr6sPs4PNxZXEAgMZi8KsHiVg7J8bcXzZgXKZVsUtbMXH2zxQEZdHNNz18f43n2SQaMBKxGHcWE",
  "key13": "3mRq4KxvNMSYp7TLqKgQD2kP61yvZvswFqXxwBgNQQ2NtYcsWWqNFCcFcWLA4hX5vhmHBzFUokRbKe4T12xpon44",
  "key14": "5Shwm3gwUtvFXo16j1FsQZLBvYykJ3z6JcrdqJygZZAjuKPgJHYMMykAAjfjf3NgnVB6xGDUSGd3CA47zd4WVdWe",
  "key15": "2wMT1eaUWUkYu2w182ntzTpsvNCh3w1GCnad4ZvjxRivg9mEw3noxPvrA32fHEjNvXgYQS9rAurH2psauTi2uBUp",
  "key16": "2sv3QiPEmYxiKJBoymuWqAMjYADf638pQe39c6rdHfzK57zDBVemxjBMEhym6LgxcBAoh9b6ApYpfvZTE88XfwAi",
  "key17": "458h6xarDV7xkh8ZUyYA4aL4mpK15EVW9PM6dSTDcdSQAdgco8J1xbDu2NfZw97gBab9NcqqiQkR8UKUkMgDhj7L",
  "key18": "33wEs3qiLCBhHFfUHfxkPfpAWbhEPzAQAEgGd4X5K33hRGW1NgRVrW9kWn26ugXCB3aumg5Ai4HatSrhA9LJ9knF",
  "key19": "51bstkoHZUPrp7X2MVt83Bf3fMPkNeCizgktq5VfQ8obnnrgys4bA5iE77BPEQ5QsCsjoUkTQk3ULxi6w8vWB96M",
  "key20": "twp536xfpnqAyVvwG1muLbkjUjDEubJQkFDLoRevDwqCCYqNHVnkjo8wkqR3R5pFMhqZQCnsFzyscCvRRcipLaE",
  "key21": "KRshqQVugoj4dPKgYBvFHxKhQccA6d8h2Mw8WsL877cmeVMtyLzSj2n8JwcSCirSzgpd7RDwy5SabxEyezd6R2o",
  "key22": "2nDJaLq1j5W3jBsYkts8wi5Y311dE78XJ96mFMFn4q1ELVQfVPfCNpLnjhCAmMVz5kj5hfs63QxzgemViAfkKEtw",
  "key23": "2DEJGx7DfLnTqTD4KtCsNusooZ7zLjwQiHoKGztrVJEcRSsDa5j3sGJQbnULe4TFcVwiwbuJfLgbkn2hnWgShjAh",
  "key24": "2d9Hw23Gpa56Kj9PW5G9URPUHVLgpECiC5CbGCM4VgEVYtVHQBbpyXg7B3Gr18JovVRVtoc2hvPAwY18p8rS8UWt",
  "key25": "2wqbo8Zx4yWTrAHHPjXA74pZEcmJPB1RKSfdnMWNJoaqDyxZVNwPWjxAC1Dd4SLwTNpkXMziL6JF1B9cvEV9Dz7L",
  "key26": "3nt1vcPcS3Q8yDKxcpvE2HbJKwpGnZGoi669aZ6iaCSNJwruYW2hzAQXiyhN49BfQ4kAYMD9pAbtcVSNSS2CHCtk",
  "key27": "2J5UdUWuZW21ZVPwY9WRv2FTzfk6SiZkVi2GhvJcvHUTPhj23YSZarKQLnMpCtHmGLXtAm9JWBuvpAi1XcjzrSyN",
  "key28": "zA8gxoEtDwGrfVWWUwMPP5N9f3K1tvngas7d82wTaa7kJtoDerQ8zUsGRad9khMUtNpLaeiKX7ePHFkJp2QGc8C",
  "key29": "2Q1xBCRH244ZF6hsUaAWSQJESjN8uy7XrM8yiZFeMaTcFA9ysqfuEfmcftDSXzW4Q1Hg4QfZyqtuNDBu98MfFgN2",
  "key30": "St6SBRHDjgHkgorCXqqMbNNZ7SmTFLhZVorAxocdShppFr5YPHrY5G8Sp7Bti1XRc4cPc6BHF1Psmup1GbKbJtJ",
  "key31": "2mATBkYkXZSDt9k98N8FG7WdkQXbsQQwNxQKLtmzWj9YzTGXovGPYvPjK7PKwsQn414BuW8KsyPTiCXiFDiCUCcn",
  "key32": "3i9gmxZ2ioFkyVzsFnRYnnhFmCrSiEDShU7MpTYuKou66Z93jaSXRnVpeBqm6XGH8VQvNcJk9mmGQ8Fp2YfosbVC",
  "key33": "49eRXHPGgqGj3ENzwXXsF6jL1PEPH1UgUej82dW47d7HML1yqjsV2aJeHqM4QHaY3ifWGCj4gpCWrKPf9cU7JF51",
  "key34": "2UVP8BbUFZmWUVNGQvuhG8q5fMUD5GkR1s9VxdYiRU8UKwL1YRDF1M57QBwpZ1jga55EHP56FR4CwXbbvv6pLhQb"
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
