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
    "3LHhkf6t4XMb6NaKaK8sdNAbZDadEZEMVrAeMGQmnCeVCaZxuRRrvnwTP8Wi61T6oym9fiWAS11NQujNniAMt4bU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fnRqkfgf3rk549J7uq5fHhXuC7GbRs5jnxvaR7nS97AvtxWPKF1NXLascovwiCaW7zK3JpPweECihR7ijof4vmi",
  "key1": "2J62Rni7QvrxJshkzjp8PJjVYVAwDXDTgqys5bv5QQbbc938dcyF5cYGyVEQfLHqJTqHpANweNRT5fURSLzwA8SR",
  "key2": "3oGUziDFrRd45FV1SmB9qKyp4dp543t9S7mtq9FFEwr5UkpVBaKJDXVgBTUWHqwnST8q2Y8JJnrg1kLgG8Xw8jCB",
  "key3": "2mxK8QZcMCWS9JXyU1kvDeRKvzDBep8NNtBFgFZcer4ENeU8ypxkyZ4Sx3Fzsxnf7jLeGbeY14DFPW5trHb5GAaX",
  "key4": "5EhRSEcGFjUecWt8ZeCAPZrRTgZhCbQm24HB8UfbXU9t4kS6A47f8mKGDt1QvVgJytRENLy6RPG3QugssNCb4Ktv",
  "key5": "4h3Wd7MtcCEYcpYbhEvCLcaDHGh8Bk1BTjK1ADvvzwdAjyFqf82Ar8UNoUf3erDWwEZDZbWKP2CeyBJAXq7RasQq",
  "key6": "DU8FpEZ1utmURwiJjcCm5DpCzKu3cxYKfeLx2eTgYMdrhPSK7T89KPNvk21SGE3NP4JDbKHUA7NYbjtMLEPweAf",
  "key7": "g4JnACZmd44gk6TJd3yPeVRcoN53oUsdCuW7uNzFdjvsqcAb88KxeN6Tepkb2faJDPwUruAyi1eXJbnFemcLSEe",
  "key8": "NTjyVK1jiHA1u5QwPJocqpjCiRhjUWJenzKBqFTSnr2TgUqRpZMNDxS9Zs8CiCdcxC2DDQGd636c7dE7EqDtER1",
  "key9": "2oH5jPMabACr9uFwbbGjDKrU8EcV1uKpLayxREu5mz34rdKTPt7CwZgqJW9vfqudZDwGZ2bUoaZCMeTTQ6Stvvzd",
  "key10": "383vq8UGP2rmr4tiyBEmzAvznE9N2nbbuyLDtuXkGTfdWHmpuiJ4WonLEqi57Dbhru5RxfNZwjDF7uVL9v3VbXUU",
  "key11": "Qa5c3XfkZ4DnQK2SYUDyiiV6F8gCKYK68jgdy7fcBud2SK6DVVUpGrRyHUSMQVHa6gUH632r3tgwtkcsWoWMo1Y",
  "key12": "4vPsUT5AeBazK2vG7K2kBX7EHrQiHAj5fWvauEicC2BRpEWx5P6pmtgdstAsFo98q6tcHQnaYSrwnhuJGcqZtJTh",
  "key13": "3Bk9GEG84qHqit625RrktcefnVWu6cdfTwieQMU5Na6hyZ1R3pbjk8WXn3LCdJEVVk14dU6YT8cigSegtzoHt7Sw",
  "key14": "XLx5ecUp2FE3myx85rzUPMfvhhroLAdA3w6vDChGS7qtFgTHC13updekAjXzj4CbFEP9g9aJTXq82R2ThdsUU1F",
  "key15": "5ifniQtF8ieJa3mDypkdrnG1vGRSaR8bKKWbNNChJkepTVefEr8CYBt9pZs9AX1EyaBtLGebswvGG895u1KkNdBU",
  "key16": "QwD2747cYGvtj3VAeBbDVeVsy6WJnTkUFzG33qyhVQFzBytvfxLuakUksH3QKtX6Fz4CCZdm7uQLQUhVa8XFvei",
  "key17": "38C2ew8bxbqVrhA6WZPaPhDYi4VCnbBwAd6rWSo85LQrM8zcq9pXV8RxcvmLEe8cEDBpZgNCABf4Xpf5EDHU67ke",
  "key18": "xrxs7k2895BQBHLpzA1YpvKEuiaim58v5ac1jp8Yq7J4PVRk76cuDtsc1axjSJEZ2ARVh5mn2S84S5GQskwZ4mg",
  "key19": "57kFXtr4RKY3re8FsCdiWmKobPoAfpaXe34TGZahLC8W3hTLhu8y34EdrKMHmDreedsUZuYmSoie2EgyU7QUW8Qq",
  "key20": "2LrGNAMYvtTSxGQHCL9CefVVkxhSFgCqogakPTiDzMfB2cioHgctJFGwn8caihDEGmoVd6Pw4Qg4SGowaSYH2JBX",
  "key21": "2j5gn5ktQVKKfyP75Zzp3FuQg4SHn2caqJkn5LqYFtNqUmKq9zxtvWp57eJw1j1BicQqLrfJ23cMm7LWErhH9ni4",
  "key22": "2ePbxYxcJfkLyaLdwwNFQsYvkE9S8he7NU4oxxCno66a9J4UDzUYcCRNURau2H3FSdaHbD1cNK55c5Zed5AhgugA",
  "key23": "5FyFmXnPz9QEN4CyssY7gEzTxzE3o55Nz8SSTsNtD6X8jjiAV4PPk2Zf6SUvjcWkDqyWm4n2wHvbByyRvou1s5GH",
  "key24": "k7SrY7EuMpoN6fXYjUJDunkdtGjUS2MQgDYNsVBa9T136K1Q6wCqPnFVUcDUwcgEzJZ5zbkAjtrdLHDNnXo5Hgo",
  "key25": "c7mPfHEkeArifeHP5MaESWXWsEJ6BF86qQkAms3W9Af4oKMdZQEqgUfHAK9ce7yjnSpEXH84sDRaQ3a5gV9H8Qo"
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
