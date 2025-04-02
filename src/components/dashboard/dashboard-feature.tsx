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
    "bWpFzmcGUFWzmk7vXceUuEA16nVTx4qwGYnMjCHnjitd4ZjVPHSrzahmhopkeLvoiMKPu5rCCJFYDV6VMMP1DrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JFdnp3MECt9G4BLWximfm4uRJ5QJLPonxNgvqum35ct76bHgQkuPB6uASfWPeVANYknXHXEmsJYRgQNerebGPPA",
  "key1": "Vm3gGNpHiKkMDHkBsGAwnQcXDKw9xP5P8amywQVnJyxZbnUYi77s4c5Z32LVj9fjFVcA2yMM1WK5n4pbtp46Lk9",
  "key2": "g6KqZMxpkh1Q8LcYUrrwjPshYpvTHQyZE4mDgZsVTLWHRNqqijxekWHfRYiDYwjPRug6rhiAMMeQuJJsRGBF3jG",
  "key3": "3JrvLeHurJyz2AtzhpkTPGZT7U7tNWdSGHK44TRUqsvukBHQytwKFGZVTikcgmBapQe1KpW9mpmb6k4KTWsDnURy",
  "key4": "5HJJr2BqK84R1VKirAxuSDB7QHr4Ey4v1bkY7cREnf4GFth6TX2KAurWG9dqtBrLqKFotvjEab7c3wM839cm6iRJ",
  "key5": "3bmu5PhCSi7Uj2B9WRpNSo1YaaSbkhwRkYjpTJ25nTv6pDGhYkGKwRbTNXCctdBMrjECmZpzW5WzSomvUNdH4eX6",
  "key6": "3kCTLMSazwjeKPoBUoxXmKBEtPpoMqRJByJXFvsXdtbKFKdrYokWQY49ZbbkdpkCMzwhAcfodrLTKVUVyv6DNFUA",
  "key7": "kx6RCV1DvVxhUGMH4qkZ7WJx8MUCerSahxN7nAjbHgxrwcZgJ5ge2pdphhCsXvGh5SkpQpQ1yRjYUhF6XJ1HzDh",
  "key8": "Lhuc9T7JMAz5qLtZWvAHahCmGtTrXhpq7HAwcadW8xkhr7mjQdsqzK5AtUkgEyHnUDxEJq9WEfvU9jRJK7DHHPw",
  "key9": "2ZcvDCikKEBgRd6vE6DPBKDuGcjy7QAhDrZmWNdv4oHYZGH3mYezzdyJErhCCi4ZmupAT8wyxZ1BwCCAqmsHHiXr",
  "key10": "519VmUCPdqzwwC4YawFfn2vUqoQse4YUXGSGyHW3jVMnGQBPfxykhKHnp9eyf8GoTMLycRvpQoUxavCf6GNshNNz",
  "key11": "3uqNprwvUdkFZMjeyzMj5VCEenPMA7KJNYxDxBMDtTLmCdS3LqrtgbJpvjX8yKjCBDic885HD61eYNWGnGBuCuXF",
  "key12": "5AQjsTpKAyKbizfSzUHbLGbNexbRfwEVUuHqM1KuRWvkQZCoY4gQSN4oVXpi5aawhrsezj9h18JR4PF2meG6J8EL",
  "key13": "5Mv4swaVmG37oMkMikf8X2eyr559BtkK55nbe97orBZm4jj1ETwGep7kobRnFaYxAgPP88p3noseeTaJdTSzDAJA",
  "key14": "mUZ8d1sJo1xH5qrnf9rY2bc8TUq466RF69KaCTcwbuozzSdgNXwWyibuUkdJpnvSh6VPNvxLikSfPks35VhUQta",
  "key15": "3b8dt6A2jQRztRcQ6RkMSn9bvAgY9pz2Yy6CfnBHGdEqkfsKGmk7vXd1cs55jkWgKqgeXjav6CmFNwhQvBrQAURM",
  "key16": "4LgUgjaRaionoZqNPXfxDHFkJvVUvApqYTwCevNhWxXf1CuR8gqQGHPx1FdpMsvRmYbmrBMq2xnrwkjvj1qWfUDy",
  "key17": "2oyVxvwWVrUuxTPbXKDAwbbKvn1koR9wrnTZVV1MDDFBEF1gr5TFcdkDGoPipcnrUoTgEVckf4WxrBuaVW7s2RCY",
  "key18": "4N1xNvToiFHxd96WrKXThNUn679JV3SFhbkcLbyF3pdfN4zxrffaTBqLQnGod3PZ2XtNqR54WRE339ers5RLe6nu",
  "key19": "435x9WKosPPprerFh2PQkicL5ukAbgZJTaUcdtz9n8aC84LjXGAAXBbW6QWnE3mTKTizz3wwYePP32iLL22qevYg",
  "key20": "4XbV6feVMqV1tmFLD3PkKeyz58hifsSEtM9Wotois8nDM4cxf6mf7RtK5v3T3JJwkvphhyEkPJmFsMRpmgqF5rVG",
  "key21": "BdNMYGevBwZP9ApmMyCoq9mQsdKpG523FscA4Yki6QX6Cen7A9aTNwKse4ighMbBbYXFgxsFYh937vNvuEi7WJr",
  "key22": "5CxTkwAUgASdwEGCYmuMLohSqxQ7Ds5ePELendBgquSPVjo9gz85giFFmYQHYdbKKhRK59XLHBgCAhsJwJEXgHUN",
  "key23": "3umq7JAaGmg9TUqr6PEaKiFJbhjWhRjBUUuL7EjGk9ZRUeoz9bf2uer75FCP61DcDjyK44WdjwTgZeNDqSqKAhq8",
  "key24": "4q3QNfoCqeZKZGt1Dt86BA5pQDbdqy7ftTqUoGLdXtd2caPmWfGFv3fn8mCDhbFQi31C2EPwFwq6Ekf9Eu5wgA5c",
  "key25": "3YhcJBdnpaRqyaeeDKhfxJsLDm6J9nXAakdpXm5BDxAiScuz9yr55rK2t6HooRAVnGR66oNQeYygehSuLDJ7piew",
  "key26": "5pmJMQgubyfDvZpjhb6EhSzPXCtRsD7tiR721DYvV23XfjxnKgYdLDJk7KUnEvJFgcHBWNe2gPyjicGzs3Wmekx3",
  "key27": "3poP6jaSc5L9gmfCbja2HoSaBWSjdzfXCBeT5LXwiDrhXbctHkxksmuK3QsXyrN4WR6oXpxdM54uQwbePEqP37tF"
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
