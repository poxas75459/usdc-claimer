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
    "5NXLL5v51GXpfTnHM33A8wMQtNM1s43UHnm8imwjv8zend7T2cTD83gnz56A3VVkmcG1Yikn58tWNh9TkwghyTF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZyCoRobFzQa1rtzTJzmNBqqQaX6kX3yfEpxoogjWaSj9DL8VS6eYDf31DwU5ebfBZirVhpVKVQdrTwcijQD5sxx",
  "key1": "5M2UenCoGqUSD1fz7X3DegKP38MdxW64pRGUSu1ZiQHZ8teLNgNBWaVT56c2agh6pS8BHdvA9tgrPyxgB2NzhQfw",
  "key2": "3mjpjdEZexnuBahvtC18LcrJmMtDB8iFXbkpswruUXCprys8CkhYqz5q7AwPfkNaY1Y2V7aKuts493Bcnc86gXAU",
  "key3": "4syd62hKAz4fStsTjcU1TQvQeV5QyiYd917eJ6GL994hYqUBqaRfimzGE2hLnEYxRdr56sarcegmd6LzncHQXw1S",
  "key4": "3GscAz9aQYQF7Yf3afKKGwk4oFWwMJKzmaaBwcnmY2294djXjrWefS9oLwXP3Dz4F78gSZFgvTGU5aDUoo2EwUpw",
  "key5": "4svqVKwCPz1M5jeCQfZcuy3W37whbsXnib7Bu8nzmrxYrXecnE22hdRaq9fozr1SNFtWWAdLkDxDrficPxFbzch9",
  "key6": "57rBcZ8RC2e7sJmBAb5P77bzk1GT9K97zTagvUtkk8iUfCpieDLudmzc7Eps8WjSjhshf4Um6foMiTusdbTPFoug",
  "key7": "5KcYV2edtDYbd47d8K6VNDVNak1C97yCcWb5126Mpcx57ze1ane3jo3NDckKgu9XQCUQv2qXBTRLjJEdBwi5Ku2L",
  "key8": "5W7sjqkjexdDjVBFnPVY52MyZwtHkksN8PHQm7ukKSxGCEaQ1aGX6tNh6LhaEvVDNYuSyAxcfTVHPWcWf1ms8RbL",
  "key9": "4ukvjtamxrts86AGcoyfuTCfdndKMzRV3NLLk9ZaKy8NXiUAHnpgsG9AYxFNeYjQTmAirmYb5q2Whs24sXCT9s7a",
  "key10": "4fBZA9tHAxETgc6Tbdc3oaXpbu973Y1LD2GPGDgjhye9xJX8qyyivAWHB1N95shuJesA7HchEeaKAeULXDmZmkCj",
  "key11": "4hXHbZfaFPEuMpvvTH2sGSq5aGT4Aw1KH7qvaLSZv55rsBw2yAjZrE7vCpN6i5YqiT3NVWmVr628FdYxsYgnKWrw",
  "key12": "4T43HAeSvgrSWsn1QxbyHLP2M966FPe1o5HaCtZaViqCDVngiLb9PaNeRkoyv6NVwsHFakM8rURDEpMmZ1BLxeL1",
  "key13": "vhpLyvm4vLj9P6vG2PRaqivQFCwwYWcBSAd7fhdBwfYARYM96EfyPUiszhquDbACBJhGW1nZbUST52M1KpFPVd4",
  "key14": "49i4oLQ1in7Lsf4F5Tm43p2CYwJyNpisM1wFw32hLmwo4dAtb3WawVDS4hZNv1AdhX1UNjHxNByQKm62XU4Q4ias",
  "key15": "2CkpJTyCu8E2imkX6YC49GWBHdSa3HDQAeLuXfdyknnkxm5sa14nZ7urGQxaVvDS6Fm7c9QzQWPJeRabAmKBx9MU",
  "key16": "2S1koQ2qqVYbPH1KpKsfy3jX8PLoA4D5NY1xWyrrXepnjnPqqbEfdxSZhkuQoYJbaG5PELRxiyUtaJ5CWLojXLps",
  "key17": "2jLw3TC28uGiUcUboT6KcaKn5NBE2yPqS6TcsfWbwL81AhoovTcehD6eQZzcQvDorfMz1t4EjsLJt26LFAv5LxPX",
  "key18": "5hX9TPxpgNA1j5mgb7guq9VAvoas5UaGmWG8S39AbQoEYDAuHMqZ8A3oZpPnm3sRA3PRYJTU1w72jEPAg1YooMEd",
  "key19": "72S1vf9GdoCir2koS9k9TQePGMHs2k2HXw8JS7SXiyR2aJvb5AvvKnMF7jVwUUrgERFdmcMTFbECTzZvSHno8wm",
  "key20": "3vwRDUw7bXw6umDWAgSi634Y7hV8TaaNdPPbvvEVS9Q8K8SMHbgdYLS5KZ6TAcEYUhWW3T1nJnfMMHcKfHrv8ptg",
  "key21": "4KeJTWNhXLffTVzqfW427UDVfXmt8LYaLpyDy161eatZZpqVhgAyGuxxaXPLGpVkYBcTmw9Fyo5dDLQYxZVumZmw",
  "key22": "4CWmEC4gLVafKKip8PB2xym62fMWu5aTDcqQSjw3yznKfxW3YS8dXXGkTAtfX9bHzWvtbno9TpzAWrtNr7UdUQnF",
  "key23": "3SHccEwYEDjHD3nPa4RTv2YWHr1dabhw2thuHz1QE3qw3BZwo3bdSpP16bozuYm1NcpDdbC5VsMyts7UMk9XDueN",
  "key24": "nSmkr87yV93XhvAoqmeNwfnezhjkJHKynWZorR1XEWDArL1WPsMYkWUAB8zx25KGJEYxAaAa4b3PBm2tG7fx7ia",
  "key25": "4daWfg3xVY7ELnBpS7SR2kzzsynaHKN6QSF152E8zEdihACifaw3WovCSEb4Q7T1oLcZ5vjZMd3pRpSNnb3b7Y7W",
  "key26": "4Hs79SvMrgSNTJj5PSCQJrtbVrzSA2jJD4mAN8vserKc2BXo66SdkG5Vy9PcGR8bTbz5qbhbSmbG3ecCuxBp9d4v",
  "key27": "5qpxS6cCBTfqTfj8ZRTPbAgqnoENraidtKhPP66pd16w4aqzcZb6VnygUwTQpbbvGjzmTKWZr516FwaDHRvGnVmb",
  "key28": "371W92CnW1o7LdyWrhhQuKCcwVMML6FPAdmEYyH3iX6XyEJMd2dfn8nLDdh9hqMFzqZMGts1YEXXBCEzoBfxuppi",
  "key29": "iGJpcgRenHgoPanjjRabJfJAmECLPXSzvNhZAqwHZoDYXc7Rg19CqcJsajQZ33SQ1XyJdNxRWcYriyzZZVNjVpw",
  "key30": "4y7McDEUu46zqYVnWf7DyFEyZwHV6dgZjyp1r7ugggdnbWUBXtMMYadqSAMS1GU7XFEc429K2SFQfuGLWeY83YKY",
  "key31": "38s26iCMCNF1D4gM3o1NBTkGdFD65B3JnzW7fCg6JWs1SfRoConRdje8C3VmCqkpN2Mojq6PX49TxtzxAkAfMXCp",
  "key32": "2XZz8EeYewFg9tdwzxQCpc8duffyBo6x9wTRTvZFtNHhqjSzhtYxWDrrJTqft1CZRb2fqocNUGQU4LNmNfnn6btT",
  "key33": "121k9iRYYS9Gh6QavBEsJpJSWXcuxp5jY5xxYL1nBWwzw4rw8Rs5tLEUWcL5aZaWt4bHBVuRHHKrz5xVPohnW9tD",
  "key34": "3bgLp9itbxdKuBA6f9TNe6tPE3xWTa2axAB4fciNUSh6uKZxKjYujDUmu2JJBeZSaK3WB362YYDWPCVScvE7PXD8",
  "key35": "MA9NMUVLWysRp2XdSaYTWogibTTA7ZfusoLZRA1vV4HD3YRWiwhf4jWoSQZ9hdqbAFU9aui65mJ1JHa4DMh5Zps",
  "key36": "2U7Zhxz7rdj28gdbbKbQ94z2K3dRJVuFHD2kuW9jTjgV8whAuJrd9MxnhEDWti6dtprpp1qdZcvG3Y1KjCbPg7Zw",
  "key37": "3hM5kqGXcMNbef8khu1YJqQWUTE97P5vQG9y33hHcTtjQMYXbU3EDUq9ArmAsPMYPv4uLfoWb8bHedyCAF2Dga5N"
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
