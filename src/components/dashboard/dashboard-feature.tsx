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
    "3xdrw1yTjpqnsSLWz5tW5s1NwXwUtdTXUUMds8wkskGuBuD3Vq7VadeSXDoVwoSQgg39DGT1pEGkgFd8PLzok2A9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pb1sQqB65ADZPL9KBQm7i2qY183W2WM1rV6742u6UXU4T87KLejTzDBFJq9XeSiNwsiMZZTX9rBti57AMKr8fwF",
  "key1": "5Tm2x31uWrGHWQZPpbrmebPJrz9guMh8D5izsLT5NvQTNAjGyrNYovDPfNiagHu2f88ZL7wECFts9NN2PumhNU5i",
  "key2": "sdbhMw8Sax43TJaBWaWsoBC4acoGu6b9w1qzpf7u6mPx8f8hRADxfUg2vwcE41VwWWZ9qAm6eExpWJT2CyiYqCT",
  "key3": "EcjVu2VSJDBC1okFCKFFokx2iyPNGrENGX5vkXMbdKpLcGpPESfUJNFWtZdMtAPHJVHv1Wd3LmzmtYsHNGc1zBK",
  "key4": "5XVd8FEpCk5jzvJyTrL1HprgM4jZcv6ydqD5THXgkA1EnYjeuyoDU2BC4sDzB8ZSsem88NECa6SYAZVEQR12TVY3",
  "key5": "5wPnzX4K8ymLwdMWQoq7QsfzWPgqdeuKK53i9rwfQEEuVh5QLS3Mz1sYhBv4YDyosG3TWy641GDPpTP78CdXfJsB",
  "key6": "4ZhuTecdbQri9Lai1BQrFVqjRZ6T6ef29wRpinomYe4WyW9PeVPAKLthZJbfaVgTWvQUoamvmaStbxwo37ArP7jw",
  "key7": "5MYzP8NbobRtu4vCmcWCzMAEFaBzuo9DhaTJooHdNa2kG5Fo5dU4nKCE4L8Uc1ZFx4qtDpRz9mf223ZRym2ddjeb",
  "key8": "jybWyV7Fd2YwCaBoQFYRdfLyVFMan2WgH7wjhY43dAiDGvRVHee7CiRYW7Pp6zf7mwVfiwtGpBW8Y4zVdxTgPmk",
  "key9": "5G4ACkfA2ZynmJ6CEYYbbcTW9YPp4vddiT1voaJzhXWw3EpDYADne3vywNjDLbacrFZ42BcW3QSSc3NfECBUmJGP",
  "key10": "3pSp1jzZrgPx6GbsLSZYvgxWp2ze8zxv4yBL6LXBztoCWwuYLJNcgz9ttZ9dtbh5yj7t1LwfC9yaincDhbai1zac",
  "key11": "5XGJuQMnrXCp7pJWCn6HFJDnmaJ43z84yX67CQUgq6kMkM7zPNnNoxpbMhpx7uhbdzhB8DXHihF4fmhsc68fMKeF",
  "key12": "5m19ng3sBMucyx9aG97S9RPXDtXU3Y94nsoMDtvTV8RMuiMrgAA541Q4Ky3Pxjh6M9ZiNQvMtnfev1FJUKRC3Ljo",
  "key13": "5ESxqVFPcaxBdhN1mAyPmoH1U8Ju6tGATch5CgD8A9W6mee1fxwsraWFHeJVJ7C95kZWkbU7vPpFjzCzGJde6fXg",
  "key14": "32dB6s8sMet8ts6jWa4RSwLHEiQt9UFaHVaCasviTRZ73nA1oHb6xLwvTMcHTN5gBj8d9pwhFFod21xpB9TZLeyD",
  "key15": "5Sk5jeMpWWpxu8m9Jw8jNj8mo463ahRJSdgsxTvf8CyRTauyF5q7atYRmx4e9EU7NYekzh3rBQ3byfQGWMBTEfmP",
  "key16": "4G5gTMgxVWsLWQirjSaBWh5mosQEptvuKqJBP5EwCgCohCvq8hK86FMReHgRNJorULq7EUCSw8917foryznhkmaw",
  "key17": "5MDPHK3v4R1XozZvYSSN74sHHMyow7RMe2uXfMQqnKopWbmnxvpeCkgjsRRGC5q3dmub1uqGJ1VSmvM2FAeHU8a7",
  "key18": "5C9ZzrB4pa7TNSjXLTC8sV9xAsq7PJahq15kPgWvpUVZ3wHqJUNPh7XUncW36WWSUNUpMBggHCPdwKLSWSB73Z8z",
  "key19": "63DUYjdzHCUE6WbV2rGK9YNZ93YimHapL9z8Ee4eURaMrMdcCdqA8PAkaH9WjvqTZfawJBpTHPNTV92u1F5MnG7k",
  "key20": "25ibqrFHjSj3PwpWBgu1eHQf3DGzqCjFRe5EnvJveNc7ST3NPMbpqFxjhzuTUa6Cmp1gwEnDN9wRjZDBw2sUVsb6",
  "key21": "9bHbQzcinMukPrdfXzv3jjZ91XTF92rDFshPE8SR8F3Rz3oYKJ7RabsKXQmgbtJ7NST7F2HmRtzX63CDKLu2DGw",
  "key22": "2in7GDt8XMYnkfAkXP4RvmNs6Z2Sn3whkRQZ25XGCarpjEwL7nCLMhFgYZAsMBydzVCeutSQsRNudWd1Y1U2vUCA",
  "key23": "2Kv9pqG6qoreaoYTUqy9wFkrzfP4R2AjAZnzZefjFbU8eiD2ZoR9bKcAAdqjpgw8h1pzUWyWsM6GsJyppcAJdLHT",
  "key24": "4fcwYv84m9Ji4feju8tZq8UrnyUw5y1eU9pNyHowYz1Bd17yBRbP7sJHbzUDUxBop3sDSwJWgHvzQEMgVBDGQKxg",
  "key25": "2JFQhGw7amyHNpwrWwrrdUjDTTPQNf4FjUe93chEH5vZSub2ReXiGEPe45EBcMyU6uwQkSyRp1ohcQVmDzQ5yksU",
  "key26": "3cieRsPLNBHfHXmCwAPLbu6R7d2r81hjRYfMfHqu1ezYvZa4MABweC2dVeuubhzbhF4w6yHwsJCGgPQMVVBy2GsK",
  "key27": "5woAdr2j3HPVgj3WjagKw8zgcMs7GGKTMGBwyhKLtEF7BF58NqvjcM7KXhdgNrw4tZoSUx3XVb1FB1AaeW2AZ6qb",
  "key28": "42pcJNe7gsr2gqCazSBFFbbnYj6yrEapbPcKNB1fBGf4VLwSMSSz4249Cg4rzNVgLD5Zj8KBiJgvSRfSvR79ttEP",
  "key29": "5hPYbzirtoY16dyDdF2Pt9eDtpJ6rymiFidATGa4s21WjkAf2M7Dr6fvZ4CGvQUkBCJ2Dc9YpLXwx3tayEMAcb4r",
  "key30": "5EzWeRE9hMh43oEiuW8ujsZZ6LARv6eTDXvNjNYFtSaNzgoyn3CDwnfxfDv6iEyjFhKzbPR1SA8jrvbXZE7rJaAW",
  "key31": "2qjvhNByu2M7SQ3pTniVH5u8YvMampC1C34gak4A3uB12FNJXu7hjZ7PjPHrHob6mtJR5SYwtJpgdrXc9fA6JopU"
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
