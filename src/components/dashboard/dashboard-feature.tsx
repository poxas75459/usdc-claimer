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
    "4xwmJL3MxkMaEJqQjiqM7EbYqrTDFzi5PvxjqEfnu1afX3AGzANTcs2CgPLVqa1bsLyRXA9GnB4SaorwxZg22qmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sZ4wbsKTCTPnKrov1BgosxdXpfYXSLBW7yphvZULr6aTLaF7GivtbRNgkXY3ERapBsMcVGwBq68SytDunStMDCG",
  "key1": "4bWnf4tRecNss7ojY8njPPx6NoW24sbWAoDRPkiMog2ugoyt8ghHRz5xHq7geyeacQkeUreqqF4rsaQLRUJAZ1dx",
  "key2": "WqujBqPLBvc8sXfKM8FJWQpryVUobjPHNrLXftY8yWzokHPUZsoAHGMNEBKwRgjNresAZjXj2banf5Xp1twv5iN",
  "key3": "MNaCwDCKz9Uu9jqtJTzTyb9UquAEhoHN4EFFMwSn4j2qzBULGrY1HpYYtpNUzVVbFHynpmdUSv9uy8d2wZFvH9z",
  "key4": "65RJ7Y3yTjxJi8tKhHitJrhhDp6xYySaB3rbnRYc6yyw7ZR1mHqB71HRHhjfgvzJEJwMzgjBFyWryc8CK7coY19c",
  "key5": "41xqhL4kjMyXot2BmUXV6EEUGyDwWBSdG8porqJNdtquChM5eEfaozMPdvxk5uWifC5PLjNqVZ7CrC131z7zTN5X",
  "key6": "24H6JNfnTNPwWTmdecwYQf55t5osDG9dkABfPd5UuMxXZEYUV23Ex8k4KGDnJCn7CJHkMe4d37SzxoejMirDv6VW",
  "key7": "5Kp2x96t9MwPHEgPtYqnB7VR3517qgcaXXgSGFdNKsu8sVPt22A1Bd3wcwuPQNSvrT4AvMARA5RRW2yHDjzjvMV2",
  "key8": "4B5QX36tyYdU1PwhuJoWgwMhpK3hSaV4fqtKHsQPQK8XRAKHwuMGy6HXUf5mrJunQRbb6f34fhhZPhvPN7DzfnNw",
  "key9": "25rt5q4phesins17NotXqa1nQozaCV4oZP41hKgTLjwS5PmGJ1PQziS6En2jcqBaDqWsrEkngU8SexQp4wqwYGEe",
  "key10": "5B9ezKoeJ7CgqXuRRknsZMQ8Y5tY7yjJD67hLSTYeXDBicP63Gxxkzzn79NfDzKy5d4o3h68uEZxup7WTboiMKvL",
  "key11": "5CmvgSg8FegsiztVjVXLsxXFQofBKwUoLUAunPfRthGWa56CC9D8L2NuVBFvDALzgkY1MftBNRHGyGcPKjiPSUDv",
  "key12": "5rZxMz6RZMX7Qf13RvW8GibsJzppuveXp8cT4jTdGadG4jXtthcjnWsMqWtgAJe7fgpFeNLam4MiS3zTuKt6aGNq",
  "key13": "3vgmrATEP6ou4ubC52qFD1affemHvEy9xmQ88hZGG31N2a589T4gvRjAkFBZL3Sm9c6WqxWiYf22rXcTsoftUSSH",
  "key14": "5wFxjz7Jfso3HUKiyzUotRiypi5J4gtv3QbSC4cS3kgXzVhnavBAobxjPJzrmEe5ynJEZzejL9eA1SXvhmu6DXFM",
  "key15": "3bgny56NMco9BYRzWGYWqRKoRGy3eFTY5jQ5N2pwuVTKgLoiRNKzzbrPNtG5M74uucQCx8Yy87peXGMtA8D33e9v",
  "key16": "3G8uPM1nzadYUmQUs1Sd472hAugHhD1W1hZhyWm4Th29ggHi8c7EjKR28UU8WjZ7dogAqjjQcjM1hegv6NqoFvTs",
  "key17": "3Ew3QfMycN7soimVwuBRzw7Uc2yvVsgY9YHzxe2vfsTcSuRekkiqMLaZFnrZYJZmNa9Fnvvi2DeFua4W1PTbKkJL",
  "key18": "2a7fj8namXMH28e5JeEbKo5n8iStVaAdKSGzAWVUFGpNu4FEnNzvitz52UHukJ5ZiQwZZnL3dnSJFyzch73JnjY4",
  "key19": "5W8wok6amDPX3zJcZj6TeQzZrAS1FtjDa2ngGsEp3VBSnxLVanpGCDcn4oiGF24AcKxEH3PHMsrK1iie6MKeMdzG",
  "key20": "5JvB3PZGfQ3kLNLcwEdtvrhrVvuMNG3nCextSMbquPVfcKpwwTAPZZ8WGRXyLd9nvmJvs1MYWgVK1g4mtboRrmnf",
  "key21": "DwjXZkLKd8uSChY1BQLCKNuHjb2LhduEnaTNhFXsQFUWjd3f7dvnJ7ko83BsPaTM7jLnzt51DWiBJjcySA6r2fR",
  "key22": "2DpCffksnE2MyEFmroXQYpMccpJWwr7VzGba4mGputj6kBLdSufg23wFvnsh8i3xiDeeQcc5oXDpt1VeeriwFYWe",
  "key23": "2nT6EboeQBd3UAfnvHpBnzLRDdCr8FCwbbbiHdUbwWKK9TeyRxbSSLUHMz2UAh2nNx7AMzmxBS6ZCeJHECsaciQU",
  "key24": "51LZjRKNyexiYQYcyiFVqvZmm3orQiKiNvyCBV3TU5pnAAjCwhu144zkMXLBDttMCwQeM29cZPPjjnv4fzhki5wt",
  "key25": "37AeqmijpViACdFqQsot7MekCBXVpQrwFVKGsr38DHFBoXJVDGUB19AiFePToxfU8ZYHTQkqX3bkDsQiJHe3Gm9W"
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
