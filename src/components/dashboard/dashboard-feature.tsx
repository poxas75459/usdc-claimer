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
    "2kKcR745TT5btZ1pkzSRU2bes6Hsb6RVsMK7YsziSWjz5y1r8RtszGaFyB5gEH3atpRAdZSRRSb6QY5SEeTumX9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRA78Mmy3MiibyYJ6Db2DVdeTTuHT2w13YGkzhWRhwAT8B5Ufij98apznxBkNLkvacpL18T2fFAJxpoBLUgFhF",
  "key1": "3AnnqAu9hNFvXMK68dQHcG69g1tsRcRBkNgBr4FBFYowkVBdKUymho5zdNcrqa5dRPhpfLix96ubf81qyVFB5TFa",
  "key2": "F8DjLUhixf39XdaB47wjZ4gB9TL8hCLRRMshXrqLGwHTCShNBtLJz3zXjkoz1AhqGjzQwDdhLcz4f7m5dAwsbLc",
  "key3": "5pyJzpS4UeXKyfqj4P6cvnAzff84AovTjkcwUWoBJDdsxD3qo6p2FHybnbe5Mbw2bXKBHBfDgCtLXpns2niYXkvj",
  "key4": "38eumZENJxjjYioWXnkPPJ1cy2j3GRQnuzhRKWzSacJpcJwkAB83JLbNrV82SGByJnEqpxrgxiVAee2vy7F8tiE2",
  "key5": "5NodLxcKvKdygxst9L2sABPk27dRS1o15rqHpVpDrrGVuKdQfDH9wo6fiWL2NyyHBGE6PNw9nSHygqBHVCTVqamR",
  "key6": "2ELD1zkiNpnr68LUuQuabsDHBiLzWw4EMtp7HYsCPqrRi63s7jpDATmRjUyC1BxQR9yBiQoQcNH8cHAykQw1TFri",
  "key7": "S8wZpTVoWmPaD7tZHNa1WVs4cmLGWd3XHBFsNE6F1vFgEqsAWPHzRU191nkxG2GDwxQ33egBsBu34PgVg2SkrAK",
  "key8": "2tKhniVrQ3GyuCKcqPoTwT4op2TEhJ59uj8fEnMqr5f7483ja1Jq2udy2kUnK4XFhrE6kjKFcF8pjS92WmpEJhJL",
  "key9": "ay5BeaZHWcQux1bQvWJF9WpHZ2QrGkufTD8s6wADy7tWRQNZec1DZvqmGRDLervu4PvnAhai3XA99ezAFSfUEFN",
  "key10": "2egXpTVHXkbRyQQEA7FJUsmKaHaAyjNd7R3T65uQhxPjvj1kK2XALP92R3MwJvEy7eH44UAzvgVCmsZzJ6muHz44",
  "key11": "3nh6LqRma1JmH4FGPeJdQBKn1n61XBB4MCF7k1jLPgDkppd5AMwZjnjYJxFQyoQojyCh2cybmdBXsNteo9JAF8s",
  "key12": "2PJZ5oSr5eRgFaAZDRyNcQb86cFuSHuVsCkpDnd85XpYK6Ra2WRPjM7BQSPvZbgTPYTxNAJ3r7DBRAXGxWwastRz",
  "key13": "3bWRKnsPhKvVN4UnS5QJ8jBagR1rFNpKWT1AnH2ZPqPerwubSaSzVZiii4bhxBHfCjiRTZRbpouy2ffuAGEz6pTG",
  "key14": "522UamQfeSNnEgD8wH2yHwcP5HY5AmdMQm94azRKp8o5FPZGxR2r9UXiFRq8XxSqoXMQxyUVFV8nZLLso2X8vAfG",
  "key15": "5nWfKXjKbqcBTYuqP4WGHhdMPa8Q26u7mSbzyLQ935V96JvzpKi5VquY9mmyCJxwG24Z7hGd3k6FbDo82PAprfNs",
  "key16": "59yiYx1U8xqh26cAU7SP8dYRibyV3u3Pc3SxtCf1VhPcN4ezbxNfozJWA97QALBbaZtoCNFAasogYXMSCw3Um25T",
  "key17": "4PfiTyVo3zXKLWSieZFDje6UBytG22XvJjEcbPt1kT7Hbtvynd4zZ24zbVxM5HTKLLpvQx4SKnBD8k6pS4rqbUWN",
  "key18": "64EjA8SMpTSqsg8qAgiobPGAhvktowAtXBzPqUedbmKbTm874H9PBFPC9Ct7hUVNVseXCz5WMQqLZwRV45QBQKtm",
  "key19": "2EAmf6jzZWAADfgHFzp2rov4VusDx8szLXLvErwC2iW3jYjFH169S6RMPqW4kGvw8Ki5hwFo1pyAsBqLjhpkE5HB",
  "key20": "2bQbGocmTn2mYPnYDBSWiW1QPK6ZYwCxkZcUaapqqjNfhDc8UBxYnkWtpATKbQoVBsnLf2ePyMUdDbsnNhrhd1L8",
  "key21": "UqRw4N8YpAehz4XuRjmo26MsfgdsVDkPrGF53E5ASDUTw6DzUJSKeMdqrs5zQa29L8ahN1HKXD4jUfg23KDTb1R",
  "key22": "4UKfu9exvemBJzkNGq5gq6KAF6viqe1YzaSkmVt6ZcAiSDWSA3V5x6PCxq6Qc8jforpDayHGomyGgQUF162Zzg6r",
  "key23": "3K465pa4cxfMUsWqoismH5Jrfcsak7Q5vknoQ5bZXLt7YcigzuAU2pQLEZBfCp2Qy2L3gRout7Mso3UQs2tAC2XK",
  "key24": "3DSuerC9DFQdhbcXf8nFUHq23iWFTTBfxvNgt8SuPY3LAcLtwD32oaNXs83VQL2FjSxti4EzZqZNMn53qBGzfJKt",
  "key25": "NJ7TLzqJ2JZ1fWQ2bTc4zQ2Hm6cNMKaKurp2iRYBetPC5fNyjRuCDRnE45ffjJNksb6syxr24RFCTzExwEp87m3",
  "key26": "3f4kavTSxDiwfifdFHAebozBnvc5RqWZDeGpQPF2SkkLYNhnHmM2fw5aHZKucAaUqE7vz5W8RRsJiaxJSFFedCKG",
  "key27": "3JSjbPN3JpDrVjPFv1NBQrQ8cyStT8QKqTWjBJBsQ8CmJAqsDth8n9QR4FcXqJ9FcXRt7LRWfjwgfeKrtrjpCARE",
  "key28": "YCdLnRQ5e9Eqq8hkTM3o8z7oGDWsiEKhbjPfw4FiZVdJYzHzZ51diNNjgG3Hv66qaAGdpdfKUdd4qgJUwF2w3Y6",
  "key29": "5EV5GbdrJuPgRgwmu12KLFkHDjyY9cCQzYqtukyBZbkPV1TERL69kmbWXgtbsocqasDNdWfUrMY272cu9X4UNETe",
  "key30": "3Vn9DHajA6YUdoX69pEV59rnL89togs8f62ACH2JdnRYf9DoQym8Un79SPaMGZK3QhpJvfjX3WgCo1WnF4QysvGr",
  "key31": "2TfKZHiHS3rm28HQCFLSw5sZwi4vL5FsnL2iH4zYgSp2sqtKghKhPk5PzmamwNLYhpRXH1NzWsh8wWaNE5sV7YhA",
  "key32": "5y2eMYYNYD4ovk1M5jr8vxf4cy9fFd15cHMPQEC4vcgCdNeoLkAJQJa637RYCDmRRvAE14qzrF5g3oYG2X2DtVy2",
  "key33": "5goL7Nk8GHXSdVucZ1qWFMwmtB8jHN6LfB9pMy7hPJBJZSdRX4fhcr72h3iMMCRGUzvhA3dTnyccuyrDr7pw6BrY",
  "key34": "5N8GQuHyJjGjwU7kNLsFyJk5yte3Mg5PAmY9CyBZyVemSRMoAV5xESzG2NQoFMfpXBadV6kZjVsdLjrAuquaeABa",
  "key35": "5zsenffYkcLghXMa2rd2AR5kLhiuKBr3HkVDKLLppoLQhe3YrtwM5bBGrLi6sxquVpS8LjpUx2iH9ustiDYNJrM4"
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
