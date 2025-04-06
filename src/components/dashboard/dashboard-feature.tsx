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
    "5UYUqqZR2vW3Ro3Ep4sS2A3syssPv6n2iQRnBJGWV7pKUbQbWd1xw8txDEfAJxnQhSr7xo8oJD6Q24Bruc683H5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ktci9TGnW63pEqNVhRdcPKDNSBvig3Ykiiuy3rRJkgKT3k6DepQZK3mDSQc9kSNqh5wQihae3V465E4FUX27wbX",
  "key1": "5f1H3gECLhrKAMZJAkz5Md3Tf56VB1gq5re4nrGR8uyXz5U2i2FpE7DCNt23iqi1RL1fRbvCrhE5Jfso3RhiMbTx",
  "key2": "4nQ7xuLSCUBNtdtpKrTDQtryY5pXdyYWSUxKsss6Cpuh1A3saKTGuPGJUiWtZLFy4pNgm4v5yvRJcDBRvjZiAvsb",
  "key3": "E5hNu9XU2AGvb8gDv8yR54cSK12swbxxUfFuhYcCDzgrw7H21GRTT1fu3Fibf6P8UMcsR2UXQwvP4jTBmaCPr9E",
  "key4": "4Jm2a9SzgzfegSKf5MXb7VNxVSCzn5UhkAzGQYKF9zy8Qh6xQG7Xw7yoCQ4fprYntu6onMxruj475F4a52yC9jLe",
  "key5": "5nMJL1LisDAuZAbJSaBkphC9aZhcuA7dVzRXdN1C6t45fVCS5nUZU3ipie7siZ2uLyGQUk8MGPVa6abZbU93to29",
  "key6": "2JY4EL47nXN6vJmwoPMGQm1rn8z3nAbZD2M5HmMsfGyQvuzTNsWscFq6pSgsKfKvsKo8SZKnGhRoQBmLwPVtc9Am",
  "key7": "3Wy7QDTw8joViTfZS1xNnHmQFPNRtmVNFMiBCBdcKR5RHtaqmdaJA6wqS9XB91TEsdRNcwmVr64j2fquyGkLh1Ce",
  "key8": "4SekGgVRuPSpRcYH1GTxFKL95RgoCFmReMZaXFLrKUXmsMkCjM4cTL4Jbf5omzR6ZNQWSrh8VQpSCKc3rtQ2VBZt",
  "key9": "2qDUZq2V8Uj6RGu3yQbHZewRgiiJLyc9JPTnVLL47UfrBortoxQGNKRcybhuSgs7sB7FjjCFa3CaqMfD1iz23dzD",
  "key10": "5u3i3n7QW7LGSHwp4SQ8FoyPeU6hiVBxFVrHob1Ziuh2iV97AKM9qRbeRUUFgBVFk8kkVvLM6S3DXRZw9RT5uGt9",
  "key11": "2jpFEeEy96NWbxco8eYEv8CnZC9Xri4M1r8inZqCGmjR9knKiBeU6f4g2ggL9QCW8P8hKAtgJq9N5T7jfYwwKJw3",
  "key12": "ZfjnGtqGFPENFhpDu2zwUNrqUQsbWNjHa6jX6E3mfy5KUu9HxsLdoT9yMGajXMiMceAmQi4iQyNJr9nMnFq8k8e",
  "key13": "2dSQaLapYaFtBMgLB9sqHqE7GM6XqvzZqsXF61yfME9i157QdqPSz46ZxqPVLq2KaEj7LrfrSRhY6Cyo5tkgqr6D",
  "key14": "3RoYN1m94ZDp3HDKTCiskeZo25dz7X14GBJRW3LisMKkJg6BDjNHvgHDUQZG9fSeGRZkZxwd71em7gu9WgAFDGWh",
  "key15": "54tEczL1AJCnELiLfXdr2p6A6ySTMmgYXSp55MAKJAwGSL6GCYkpad7R3EuqxYYvNRT1PqM22HhLPezNyMTjCpmr",
  "key16": "2dfsQpCbmrQDP2XuRTo3sB8MPnnfL838CjTq4QvyU6fuvoXYVfR5Y6kkYwmgmYQSXNBEX9de5Nw7awAq544Asaxe",
  "key17": "mGT4xybKcKPK7na8PiRPkiidnUGEac7vNRiJf6vzsvDrNVWzK2rpogo7ZqVocZ5V4f7heDQ5rAr2KzgqoM6jHkg",
  "key18": "4oNk9HYry2VgcKP3HDXEi8hJpbseJ1hhfut8iG6hvR8H78XbWQ7cLgEie76Ni1pfAvPqTP4HmcuHgLkRo2suuumZ",
  "key19": "5mm4ombuieVkxBVqQWBjMWgv3p3pQmvxJ1ZQhahLqYyeVbqCAxKEZp9CACYog9KnH9NjYZBjSgtg7UGdjZhgfqpF",
  "key20": "2nTMMUFJXkhRgxgQP7dTWxWKjK379D1yTbEig1GsicR82dfa34TrxXKSxwy3BYKi3UthZ2Aam6eP18AVTVAcfGSZ",
  "key21": "5eNJWjhByZHRWJepqAAzQ8wch1gz4j2qGGXhMes7rcQto86oi3DSF9oYUnDsvPbVFJip4NFXb8k2wARxnhPA4PYA",
  "key22": "4oziEbTwkTd3NhuPAmgmr4qpjb4uFim5Xk5VnsS6MaSXEiL4DkfECB756cSTAv495atvXbbYnb76ESoVbwKJCLuS",
  "key23": "3E9XCGamQSxKwx99fp5WND6a6x5ZCTDCBDsAuax2DyjV2YYVw1FJNNF32mP8PTefPysxyPESaLXok29WqbNswCPM",
  "key24": "3HEV5Tj3yzJTmc5AQx6qzDGB3AuikSyDHUy1HmQAhKsjGGytiFbN5knV18k3ZqJRqVH8fDyiBESs32VgtwAGjmrk",
  "key25": "5oBJQMpdqaX8t4t9H4Uswmdu94MBPmmopgHKbouK6k3cfC6Qeds9n7U9aX7ahXBr3wpE7Gw2r4a3V5vHUCnSkhq",
  "key26": "c3TZpRXMzRLkxBRrZz5s6g8vdt1awAyr6K2ZieV3bi63ydrCeFbhHtFzkGrXLcVLJCz8mdCdfM1ttMVtkrMqnT5",
  "key27": "2VP2NvW8sHoFTSWiEiXUjPnXxc2yLWk9pjkg8baAHFn6VjnpmJQX2tgwajkJnhbCUY83QMwzmRGM6FAz35RgddSm",
  "key28": "4ZoMDAGcvqy82NchSrXjW9jJhyE481X6SKp96BL3Wi4KzttkurXMp2wKRL9UjUunQuZ6BqtLBGDEW5fgCG4LToSU",
  "key29": "2pU5CL3AzdDk5F6Pyj3EmMGz2itnT65iy2VqCJADh6CD8rkCckZkuLmZreKFN6gaZeWhg2qXWwpnq3uR59WcB9Tg",
  "key30": "BfD8MxLE6RBa7PUvBMAmecKdSwzqsnKZRVV9Pan3Krn2ZnNmhwDkQTV3fd5oA3HCXWkoyZcPBo91GbBxj94bE2f",
  "key31": "3FAtN61ZmB9Zm1gG2sxzhaLMqgK2bQZLsG2MKbVk3af7XNX37GEnd21MabC9BD35gyN8iJdriSLd5XLHysGSAvqB",
  "key32": "5dPxPRjNv8kEq91ffGnxhAqmhVpMLBERPsVcKAdwJxcscmT773Jet6whBHrGPZ4KSfLC7kxc6L1Qjb4H3HkZtrSd",
  "key33": "2vrjpRGTLGSFfQt7UbGt6n61Ha1ZrNd8NPjPdUTiGgBPbpcJEZMpmPRftZrqHNXaRnqUddd4tnBmuxT2AqwKiwq9",
  "key34": "3gDFroq1xJFWV79iBVZNjwhcEH828JBuijs7BsahnxLECXpXBC3Q5SUrr4NfNUhfk1tsJgE9e6ri4vVoqmjpjn7F",
  "key35": "2ngSMbUzvPNq47FzJXd5azFaRypiu57hLukrvre56oMhTP2aLoZnPLRKEVdVVK2rSrmGSTnsyPN2B9WZf8qSbPxY",
  "key36": "4YzKbef1GYAXqtopmi7zJ7w9PEJ2DXFcVsHfNm7QVwjkqSyaYYbtwSy7JF4xRtaso4K5HCAMKLbJBQxyU33nrg6i",
  "key37": "5T7SnrmxLS4DUVsJEjwfHTzhmsfDzpUrN7Tn8FnHAUYedfZEyxRSovkFmhot23A6kBNWhmGV3EQ6ammS7NEAaa3W",
  "key38": "2faZGo5yoJGLsHXHUdfX8AW5ZofCcEuiW6c4yUR4zuNzpLfoCCtdWoef2RgkpssoT1x51Go2Sb3MdWidWuFC1CH5",
  "key39": "3TmG292YzwuNK3nqURoSvpMRmy7GUdy2or7vLikWocG6Ezuiwrtqxd86zPUtCjxBcKLB6qH5272acNA7vRKGM6QF",
  "key40": "4YRm6r4rTgfvHPr5ffAALMTLJHeJztf465NhKv4PKchTMwggjwvFD1QcpWGtHBrhLfbZuJBXN8ZMczctW1T61E7N",
  "key41": "3GBf1P4eGNi1YDq3hH9mE75rp98AtaZY5thqJgbS4V6svUY2FAHwcEZj2JyFso5HKTAiYnxDwmS9GDK51Fk5EcwE",
  "key42": "5u1D369kDbGZKDR2pfe3BxTDbzfy2rtntKRRdus6GbJRmeMcpT9d8WzGGrjo9x7rv3JG65sRWcYb2kFXEWsmpLmH",
  "key43": "3ax7EnpuSbs39xRPSECLEt6zNCzs23aAg5nLBuW83R6d4xTxnR8D6qX3uc58bopypCxYPPrw6hcTT9zdYLau5WMF",
  "key44": "3ocLyVPodqvHY84rjoxQpkyUDPJ8dEUKVEm1Sh3BMExDHYMPnKULXugRT3EzigrNK11qhJiaZ1vRD9a2Bt91dbRV"
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
