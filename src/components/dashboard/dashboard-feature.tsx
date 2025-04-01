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
    "EpetaCWYQdLv5MrBiMu7ypNVKb45ZvZ5qDtdgxQBi64o95u4eS9QMWfTK9vRTdmJgqxLWirZCCv2UNzeuBAo3ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o7vTRNh987bE5R5AwRuKT39gcBoETmWgwfNRBeaJUD7unL8yacZBQ4bgnkjsHjN8858STJfkay3Q6398AdkRTWK",
  "key1": "uC5Kxnds4wu2dp99Br6asJVxRvqCcbuCakukA2iPH9FcbegJ9FePUzRqUsuoUFbnHSaB1kSKpfUNoHfnZjMEeHj",
  "key2": "mWZFgCmQ7DAg1vqFeTBxV5dBPfFjabJaRDZq3jnykTVKZvNp9kFjkVG4rrX1nYephPnPvH56PN4B7PjhGpHMckL",
  "key3": "5yxCp5eRjyjptHbcA4yB3AH8NBX5iofMvv7bFiK6Kkp4fE1qT2FPbLej3ERneSuoDdwNivV3NTEiMU97zcTojP3d",
  "key4": "3rpNA8DdDN6sM7XdYTGPAJsQAsaG7QLtaQCVULTnezwyoTmB47tatcxXCgyjprJLD5Qct8pKT4DKgGf1XFZdWsZV",
  "key5": "TjcRP8rGYuUMGMxEWsNguj2ZAJnLGuxRmrfEc7shm96t1p4vFizKDyX2acz48gwN8QjdmQaY5mBw54szKxE7qUa",
  "key6": "66zGFWfkTRPwpbBD3ExjTsno6zzXiahB1eUiXj3Qhq6YW3XEP2ywFKTPDoBjEMqmPxvghnckX1bq66gssQn8CEMX",
  "key7": "5HhwA2vXUi2QP5u3k5UbVKSmgqNW4v6ND8cco18xdhWapexccUjoqT8ckxt89XFbc3TsHRsQ81VoCFtQ9HHQCBGR",
  "key8": "59vNb23L8ewLbARR2AcNPN5cS2HmjyaZTy55si7tzYWohdGAi5dB8Ka5MGkeS1JCQS1LxUXndcjnDHzz4Gfg5fNW",
  "key9": "34vnYpfSqJNS124kbpzcyo6GxuCqoyMKLqsLvEYSHfT7Nz7keWQ9BEsvEkVo3iMtHRNXNAP9n21spiQRMSv5C3bC",
  "key10": "61u6yxXR4uEDeVm7fuE4QgXu6LVYbKjovr2CsLz3tKNVJJ49aGVeL1XJWrKFFAS63sga7weKs2saWD4qLwkxFXoj",
  "key11": "mR8EGWVgqFSAChyKH8RG96ahU4tPSZsqBMjJDq7NobiwFBsPXzLHKBz8mov34dCWPPQw4o4GN4FcCKdttyND5hi",
  "key12": "3Xk6nS71W3oeVpx8jGaNMRGWA1ut6M8X6M6ZSa5M6jAVB1GDejQ3JAwUNiPw58qS5jgvxFGfdn61dWayAWaFXYS",
  "key13": "5DjQxTzsekVibqWmycbt9LweQuTzrH8YRjJT7f6y48DmdtVXKEfKWhpViKcjvatVe4KpStRDTeA1UeXuiXnLM5og",
  "key14": "3yWjnrs7Fq6YUewDwNycHuaqzVg2DSxe1jLDzcxuHMN7ZjNK5i2DcEtqwCN9t6KzXrKwsQq4seVFQxPKjUcpzFmj",
  "key15": "2Y4J1PGQ3obcE2eDdAUYVbw9UKp7QbFvuJrhUbGQ9gTV2uUYdzuSu6s7f2vPFLZAj8uEfn5enubH52mXiJ2iu5Hm",
  "key16": "5jfwL9GoMQxZo5KdybguDUrstwkefS7M3sVekbJRQbBswoaUor3APpWNx3fzoyk46k7dP3q3DhqKgz4hz5biyhDa",
  "key17": "2xYF3GUftxcTDd5XXgw9xAPc4VRJ4Yot9sibsQXbJhWvf8MLrKi1QVhtJ11RtNWyC7bAKXdN8ziJVPbFSYMSBRK3",
  "key18": "5PJquDkNHExJZYUnLFSR8hfoBFGwz2PjqE2yLiynRf7SEGYWMeVEivetEFFHNywm99Wt3Gk4TTuLFq8iXshVJfkY",
  "key19": "23NvobHR8J9D43N2DDzYG2FpCr7sNCzZ3VNAbj5endGAz9zgsMuKeLu37LuSsjwsg2LmfmiAm7QXb31Udro7speH",
  "key20": "5sHqC74Asfyw2WVhCtZdUqf2ojtokL51BgHCaPHnPiPH97gjumBPxhqoykYYHEBNoK6Cj6MjNMjkP7jsGAt1gLzw",
  "key21": "4FqAZ77qgXP5YQAoTwXsVHUzQQZyiHqs1TYzkyLHUAL5g9qp7ynFCDKpH7egZTwfuQGsFnWhMmmsAjZjJ8SqEH6j",
  "key22": "5VDB3vE1PEpDZpG8gizUH2HZ4gsaN6MRxFHvgy6kACT5G5knc2sMu2fwabq91goWY25e79vP2LPmP4DxcELwqo3r",
  "key23": "4pLFEyf63ucCjzQhjQrWVuRKmXghZfavc6wzUwDXa6EmD1Pd3pZCAXNsjKhXgz9UyRnzHiAUxTJpyDotofEB1cfS",
  "key24": "2V2xxVdgKbQoZWPMwjJTAZqk8maggcT4LZHYdRhnQdsv49PimoMELy1brmnCQMqcHs6aohZARqH3ytXHXqz53GDM"
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
