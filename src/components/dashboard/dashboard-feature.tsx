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
    "2oXh9KVqgWLofH5uhATpa5RLcXpSKh6LdF2jna7CXDUeZaGLpQyvJ1t8JSomLtC12M1GtrYJGjbAciBW8ZHR77yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gzKpR3RN17FuJLRgjxDuvHvQtwgXhW1YpgnKC1DnjKbi7pXTU1p7BT5maw1rsu8ZHobRGYZxBQ3ZUQDiKCMEEi5",
  "key1": "4XXmLYSw8yzdWv8U5pbS876BVV9xQHKtRmzgMaTVFs5Nc1kjX3jxk98XTud3G7fKZvBoFsW5fwm7y4cC3ssGtiww",
  "key2": "3fuKgvkDSgAExRsNs9TcViiBo53Wy3u25XDbUuRqV2XCic3KZw2yzaDKLWtQJ87CqU4jkvHkmGA1Z7feGAhX5nDN",
  "key3": "3v9EKkFF2PsttLFAMR6NdhLr7QcQHgxpWxGfXWB3oaqczCQTLsVnpWBrhsT9GLzGqUP2EGpr2yXWLevk267beckq",
  "key4": "2mNL4CGTc7dsaq9M87TCXghcP6pi66Avqbj3nmntt4nCVtTeTpCYQwNRx4x5S1LQ9ZbbcXMDD9FGasBmAQT4het1",
  "key5": "3r3AiDpbBJzPGAbVngtHK1VMbG8J9EzUfCdNNZBC5QmuLCWVEgRXvssXtcy19nVNzFSYUoXN5e3C83FtTg61kbe8",
  "key6": "3z2G6XssrLocjLHRqYqZT6acJ9dtgnFJaLD6trLnkUJBZxPYdpWvNinWUTRWeDSxBBur8PhtHKFqMY1cgGyUtavX",
  "key7": "2E4fBnonotyL5SERzskNZvK6U1Tob5NRjarG1zFku7imUU1X7P3W4oUsHr5q6CobZNzFuQ4qoFMRRAs2ZkRCBE6s",
  "key8": "3UBB6uKDUw541oxQvHVLdCoYvDEsCXEJZoq32z6wHMeSmVgQTkTKEqx5XSNFNyAXXzRCB3V5xBLHDLNoxycLqigf",
  "key9": "2M1YtTh6hiXn6LxjA2tH1dPFLum3wjqLM6EmVGW5W5aX4RtoJfRFjkpFJLBqm5XHYo25zLLpnCbAXhuq2CvCgVBd",
  "key10": "GbGBSQ8m2NFZk22Hb1cjeHZRtygej4mdswmDrh4pww6oSwZJsXrwAxDxrN3QcopyxiertU9GbVk6mwgia6z5hsn",
  "key11": "4GsGVinpXZs8jSTmB93FCDRpEN8JhnvCxLadUgd6Hq2MkTnxkH5mTUf4CFbNVoQ55mSSBVr2AjtGnnaWkYwPn58T",
  "key12": "3yaiDiw9zAHHLvMSMCybSt5FZihxNnvsQ85dAJfJBmyMiZi6m8CimDDMFfhXbEr6aVQa9euVThx6jBzaSujkuzyh",
  "key13": "67KJ78nqJuExvTNGYTxXMWQck8BYQ147AbrMKRnjcHW8eaciUVL3xeg2BgULSs2sKVguC2kSMTURHHJYpqNtJU39",
  "key14": "4PB1der2p6AAm99UWxRJEaNDTvGQ6jVWPt2BKaRQ99LcaYjegpSovBZz4juLF5M7sRtmGY7d8dKVEm1AHWMjY2Ra",
  "key15": "5DZXctJyxxhwfEnLmQ2S6Z34sXmsWBn5NgEjNB6uiSM3uz97X75RibBgt3XknRMtADvZYHbyJMzMHhBejgyC9SQa",
  "key16": "5WUDPKwvnW6awncnsVVjwHUo5tus1p86PpCV3K1hC6bbPzgGK4itCB11g4aGKeRYYohXwVsgx4GEU5sYRAGaoiDV",
  "key17": "3nSq4ZzrN9RaVEb5u2fPe5LsMyNWUSbDd8Z1LKkJsiWVuHRqYGhaWsqrcMTYQv64X1yTjVDC9QhWu3ePZMN6Ra9P",
  "key18": "2qbrgAtwU8Y28YjrnrGbQ8sF5fSNrPDzykmsic9QY8CaeDFNBLZbCGvvX4se9prCowU9xKPZ15j5Paic3dyBcRfg",
  "key19": "4wwbKZGYyucUidMhUpqVUzbi9xdV8PGbgSAuyowksQv9bwxUqsTKDfEi4BTbJcddb4idtbvk4JAxRe2Q185WEwrz",
  "key20": "2p5qDhMguVF3KEtkzaK9yuGQCF67t9Dn3HZDaovsg7zLdtqBuTJu3AZt1Dh6SFihVafLURnvzPdW2ViELhUvPEBu",
  "key21": "aocGWakXnFYVhouaBt5xKLDzACJuwnZEs5yS9Jc4muS1KQH7L9hqmeM7uFtywnQ8d6khu8CjKnsZiN8hTtzy14N",
  "key22": "5jhr62ojGV8k2zQa2Zsu51ZqxDQQho1eM3XhghCcDknxQijehVkSSZ38JhCMJzXy2TKDkNVG7nhgRmDHAAhXhSPN",
  "key23": "5oYD7BKF46eUQNxWoCaFT2Jbb1NuHFDKXZ26xhDagftxnvTt7sp2QU6zroQj5GqHZFzFxVS1k6xdvoZwxnBrVPqw",
  "key24": "UysczDeeJhGjrKuLSc5YexaugcvRmoUtMdjWpWw4smvesvFD9izR4F1oRg2Leocxs8vJ66xPHBtxCSPwruCVsBk",
  "key25": "5DbGPPhdT7QDCWD2MWPHaAtvbThRVdprHg3EmjMs3F7SsW3GnvP3HdYEpphCPkkMQuyk4idPcdoxJ96TNcxRQ59b",
  "key26": "64aF12Q6TuYbjEUzc6Gyrvbb74DPdXrKnA8Fu2hzM4btxGtjEdb4JBAof4kZQ9jHYy3TTCpx3DJJf2LbngX3AVN3",
  "key27": "3TgAG6XSS84ELpu2a3CGbtrfrzEhSjtdRGraqk62x5tGWjyWPSf1ikJHZ2FsNMsiw6SoxsrAKcw7Vvzvd4S3o7d4",
  "key28": "46YrVHVcQpGRxwdaLsUPLcAXxqhk5qq5YrKPzgMWGJH8ubd5rsJJqNE2eT3wgqjC5KXmmk2E5u3PUwZRZs96NEsk",
  "key29": "5EAkeBgYsYifDfAETsL1PYNG3qnYreJ4HBjbbM7kkTatjV5SDcrm5uAHWMqicNcsX5fSSmL1MZ7C9NNLhswQhKUL",
  "key30": "mxmQHHgGDierEwCvHyacDNqH1YyJU7xdHiinMAnneKbJGMEvQkvc5d3ywVDRpgaYg82tDmPu8Yoag5FRBj6zsqc",
  "key31": "2tii8yg2q2vkKKET1WysApgywrqC1N2XKSbZEfqJpRoTJBStX9wnkdpe2rXovTo7fgqAxZQLM2GBMHuq8xJbMpCX",
  "key32": "5XcWJWtZiNFws3NL87auiyucYBnkgmFEfZFqTfcLHgobFZKe8sHXvfav1hSpkccWhpQQZTunb2L5qDpgmgwx9WQK",
  "key33": "533c1kVpkhkCwh4BahbD9BP3GKJvZBBLnLaeHfb5B9Ng54GbEqduaBMV1Y8cCRExJjR8Vhd9hPV7EDwe8zQHWQwM",
  "key34": "4xWbEBSuSBXGNX4ktXt73Z5W1yM7YsxcAK1HS65AuSZVGsPkoEeNptytqJFK3GUYBWSb6r5YtcetoaWj8tK3RWiy",
  "key35": "4SoDekYVRUNQA9H6Nyv4CYGaWrR67uSuR4kTVQrGZDqcoYSC5TtcS9Zw8Ma8xUS9hw6hKqN6N5ux99UFEyLq3M1f",
  "key36": "5sVdjacxezXQYgYN3xHVHA8vZeS23SEgf84DVGWfYegEdjLgHS194cjEjK7EW5yXGHD1BsE1RjT2wXSDNoTRuvk",
  "key37": "3fBPEfAqkmjuZLzfkDDHkexfvApbLLS35EG2X1dxMPQBXEq7KnyJLCZJN7yPZXVKgpNGbEFaYaoBNYX7QiZfKePG",
  "key38": "4Rmp61SGytSQQX5o3SwWxbcfKherGxBa3UrzTC7dGSxxkwejjrq5sGmoqRmrJKoBqNo6QNDeNyT2mYLA4Jvt5g6v",
  "key39": "2fQv7TZhxx2yAZNZwKeN1xZ9euoChSLRdfgS3p8LwwYPtTs9uex9HoQijjQrtt6XkNXdevijPgyh91R4vwMaFg7D",
  "key40": "2Fw9bZHgBd369XibmHX8YMGJbRy5j8zeGvvhTuryGS1BGjXoU6a54GbAtR14DYNMyYDBVr2vVMsg7k6WM9YXzvKU",
  "key41": "5qhtVDwuig57S28NNJx3c9Vxcwhf7DF1FKobRCiMvo2dcitJzG4i9oNpa71MczdHxpHktBGcdg94Gsh49tL2wfUv",
  "key42": "28jbJ17VnKEwzmv6rSoDFVEbcRZpiFrkzYfnyPJJnpeVz5BccjZgqa6fZe6gVAgcPxvv5wHPcoXS6zSRNL9teYku",
  "key43": "3jbteyyP2L64F7N9ceEyVfQ7Q9rYcEHKdFRncv37d5RZ1qRM5YqvsUmrW7qWcPKUorzNXj5GGtBPAPbe6xMk7DBp",
  "key44": "5xa5nXudvGNm3KM1nAsczwKGxEEbyt265FeU1YhPAwMVAUM55hMxvPE2ikWYuQKbmbiYDcmmUnBM8PWy9wRUHdhW",
  "key45": "ARKKZWh5qdSzAvND1FczcmhrRxNpUtN4oMGCd3hHSLxTjYHPcgeEZBBwq2vhYLv2VWp8t3UbB8bfVVJU23L3uFP",
  "key46": "WqkjcWUxDYLRrg8iiTvbLYL5zCU1MDJKzcp9iekcBWR2myMMYTUZx9Ks1tiAaiLvYhtGTNy73ob9W1c79GTTfXC",
  "key47": "5cSKuoUdPykV828hWa1avCmVKzfF2FBacAvryHzfFoR17NVL35Dm2EV4m6QUzFxnobW2LjwYuvMXsJyU1sPhccpW",
  "key48": "2f5C7QABjRM8hVku65dj52N2Rppz6JqkHaXHjYp5qdbopMSAMo6AUMDS8wxSi6JEgAiPZx5Gc7YMutniAuAdVroT"
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
