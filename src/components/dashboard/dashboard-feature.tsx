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
    "4Qb3K1kMixxahxpymofQgmSSFcY24jeZpavQBcodKef7xmsUD5Ay1mKdvZxpafRspJuHHdP7byy5gWKTfV9oet7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46vBGk2dvyjrZYYrNtQgv2hBvAkYAh5fx2zdC6Nz1sWQekNQR3JwxtKa2W3tMXq7NQ4wACGTsBQbt37ogCoc7rua",
  "key1": "3Pbj4eGVqYjTXmpi5Pc5VyvnEjaH4MYnGHXRra3TdZMC7HGmidvF5wh1v4giGo7sELP9hAZhy7uoPpiN2bnbtRpS",
  "key2": "4aJn6S24utd3UFymxX2ASaE4SHehnrT5XRbdELnJqcD4PeFoJ4G5n7jKmvVwxQbiCRA7ADnrupWHRsB2TwJDnKn3",
  "key3": "3qrynwp1vohwy8eGhuZGhA1dKex8pip8HBkS9eVeXmbNGS3B7SGiX9DC7zvyZoeKLykbk4AbTxy4oVuYKLhP38e3",
  "key4": "A3yXfYQiCXYyqUPGSph6Ghtz4YwjMyxnrAcBcnY1d1bb44Pj3A2AkskdVap8dofsuMTRvq4Pjg5DYVurrC8vUrg",
  "key5": "2FMq9rbr699LDLLhV3YWnRjFbMMySbm2PJVVvrv9ofek26en1svEo7qShnM85zwnK8CKv1RbdT2UNze7HuzU9z9B",
  "key6": "4YsXjDhipJKjG8SXKtkdHvSseTaQ1xT1kVn79niopQJVWRNwFvhPGje6zrRdYBpkC8KstEr5VZe1FBi2xd3T7ZSM",
  "key7": "4DzDbKPv14a15QGJCyTssnvF4vCzGDHyqFJ1W8BkiuBievUBq79rFQcSdQ52ZoQnN6qxS7LyKqeZJiJx4Cja2Qua",
  "key8": "7WMST7xt135XvXLPprmRR9CLiAXSjUtxWjR4a8CiTSFvntzih9W1Eevx8uiQbntiG3ZhxsTDffeWsrNevA4HBVf",
  "key9": "4mUniP7xD1PvG4XoFUcW6qtbD2n4PMk1VTfj26XLVb8CKfiToVGbSF91aQFCDmWRGohLUNC3iNQnwtLjzXUSwzq2",
  "key10": "3NEnZoKuZxtx82NkSjzCVpMHqEu6huYdoAXGqmiKTcSbRvfqGSycfFDqCyRNFUQE9BTwNXcxbV6BZDRYxqJXPUnh",
  "key11": "4pFv3Pd5feKBF4X31uN2RNVxgvYDFaUZ9hN1FJ9sa9toxDGQGEtct6xqfyYxYZHGaUbxJVcqysZAcxNKLKD56JHo",
  "key12": "3fedmwx2CH8EgZsxiu4cHQKudGpRT1Ys8LMaGiAo7h6KMasuh6sGx7Qxpfr5sPHdC5ipwzehGMqXXAvfNUJwEaHE",
  "key13": "28YnxNpS8c3xcMo2Y6kFyfgbhJdeJjRNaRqUnWordhUaPZ2qV6bdmgEoFFMvmVd3g7UZSXPa19G5DyaEDQjpzFjf",
  "key14": "54LynRBpKZwxue68Wtj9bQJYpsUQePuHBshspppBxZbHPHLHXj6SXJew2zkBfNKHGhKUvye5Gvt9NmpeptUZpune",
  "key15": "zNxNmUC2tFZdSFC3yoSBqnhkammmhfGd8dX6K7xwxcPHJjUk7hZQjF4k3QRU1q8prZjyLcqH5zzMSS5kvqAbdf7",
  "key16": "3UAAGYq8NyAwFL7yv9B2i3S1XHFEt7MpJ9oMe63AN8yTvirX4U8QQ17Sc7fim33aLEpUfBGYXiygBrfxpecF2nc8",
  "key17": "5MiGp86eqjooJfjR8AEERtEdQjMp6aSRUNeRKqxVScpbdGxSNmWroGfXP9ufJFnEWs5yQ8AFyYmYswswVeDSnXoU",
  "key18": "3ih7u7eLPreCBnmCw8fuN467y23MbwkntBi6coYdm95a5bzftsrT82Dx5c5knWMoV3ewRvYV3d89aJ8VJB6a1Giv",
  "key19": "2v4pRnodECzaJ8SEaEKvAtbzDnZB7qYjJ4vStJT8kjGrv8Vy198dKiTMuT55uy9VscvbpZFP7wxZtWm3ucfdvUBt",
  "key20": "eXc2dTiPWJMWNfsFx8D2aygHr7Tg5sJcJgi3a9Ymy6PkPpnS1HjvFcDFwTAhFxeE5soqaUxJa2FC3Yj4bX12bsV",
  "key21": "2RNKGTjhVSijPsgRpej1Yrtnk8XYFbE1Q8SsYQqWqCiSX8BygehdW3Lv58hkHwxxD9DBYugfdFEgETPvWfor4ro9",
  "key22": "2GbgwJe3Fgn5Juvt5R5LuSg18m6QisJgaK7H1ee1cJzSu61sAq8D4SNVjm1ULZSicrouAoCnrTfs9emGEmVyCfKg",
  "key23": "5a172AXtVTqLPgToJ7Dfv1pH8vE8MjNsSosFwPkxHYV7JfGSiXYB7yPiwTXw2hTstNR9XRKNL91GPWCwaiFHpArZ",
  "key24": "3satmNgubB2nVRnfUUVywTQVDffWtJRJWGfTi7SCvdRT4ajjdfqvcsF9mUGPB7JtGruC6yf4xGW2Hot13FJWedxo",
  "key25": "4u9Jmm8cwC2dQCJv1kyAnesaMjgBevyjN2weDR1JpKSgnZefPxdhX1Dbd61kZqV1UecCLc7PpnHug2AJZ98XnSKT",
  "key26": "33DRYukaL7jmvGxCjT7DecgV5BC9WqCmS8K9JyifmB6Ge5j6WXrchUMTPakdsdxLddd8B4wh9PXyia6R6nR7dmTT",
  "key27": "4XB8HAtFSiiUqwkz1yuR9c22wbf2iuVUXkKvVb1T6iCwQ4hVyS816n9CGuak1bbYFsWFy8ppMh3KsuoR7vAyRknn",
  "key28": "2wkDVRXqBzVz9F3FEmjtfTtpeTh4fRT7QAcCb6Zx8ukrdrMpsAzb7DryQUA9RadfZaFZQXKtfCizXC8fGmyCudra",
  "key29": "2QmsfNKdPnt18GUG7LySWRCzFUXgGQWFDiBxwGfHifv7g2VSEQemouESBZ5FTQHF8cY9RPwES6xnmN9FUHKSQtBM",
  "key30": "w4h6J46qu8QWX5zxfJapz5Dky9M4NaiPVPc7oTa8wPx3steqMQN4VgxcZrvjXxNQYNjWiyq6itpZDVMrgT8Vugb"
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
