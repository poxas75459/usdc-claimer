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
    "24cVC5NWbJyymKKUKZptLHV89huwSFXz8Vo9SNrstAzJJznASJSKecgTnNP24KnZ5JKVpF2p1XWUjCSZ2vEEQZFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HhPrV9xBmw37tPG2K6P2bFuWhofsgGfcH3K4sUHcgn9xzRHc8RLxtF8GffFqJKEfztGxwP9B2zA9Vz3vo76ddMs",
  "key1": "3ZxiEdmDFjyKsh7WRL6XM7ZFBiQzpx2raYdMWxeCAsPzKG1ZjGQuvwyYiu7zyAkUgua3Cqzf9WK1N4zCdH7Ws5Vs",
  "key2": "4zjVt8PyCxvhTomqdTiQYGuKm9SGqerkpKe1Zzuj9SHxgJr3HSMfy4LWoXGn8mQixEU3zF6RUqdFzi3vKvcvjBwj",
  "key3": "3omR8uuLTA5wnndAFt6xsHW9LSfXsxYKrC7AJnCMTXh8xbL8aTrPRF71prZLGdjYWc2iv3biUWu9EhHSZFeTiC9u",
  "key4": "21YbfzumECidAqjgaD6nJoSzjW3JRTDRSF1Gt99YHm95Rrgyyau6qRkjAKexhyhQTWo33Nu8sHLjzjNbskfH1dhY",
  "key5": "5J6oBQcswR1BKME3S5PKUiCARkUVpQdw2mdkWx7Db9wms1ocSbfQmUxgVcips8cJMZbfm7uungWyM7pmFEkooNkg",
  "key6": "JuRg4Qc1WisR1iwe8wCWdgLJX7kYUWJrQUUaL5jyBU55An3qFmJDkW2zuc8d29zynWKStxL7wZ5xGHPnpdBvBqm",
  "key7": "5YfwFvmQysWTpAQVE149XoCzprCHEmJKQo5wzoFo8zwuBDbfvkGdKQiArXNRkfQMdc1mSzyX8dF9ysnJRcuxHJcS",
  "key8": "2BZ88M2xUTKmkzPK21nCqW71ci6A9vUwgdzectqx4U5ZfpNkbWMrhBbQqZuwND6j9zaHP2Bg1iryixBn1AcGur4t",
  "key9": "5toPhtuv7hCGEoJKSyXbRazYwhNkVJyTAsN6eKSM4srYYx6RKQXzAyJDXE2jVw8RwMku5tYC7RfWpFPtLFzZgsqr",
  "key10": "5M8Kpyo3YFyAQpNswKapAxWFcNzdwXxEgvp3qgphGAHxaChxbnhmNZXENgXoZRaJqvVo7NHeFqzBTRqRPQKzeXbq",
  "key11": "SnwDqkuzYDL9hsPyzBve28V9gbArmzLGepvaHiQ7UEV8pHE33YMtDCMR6XpYKRhxypGkWXNCdJU1Ro1hiafQBWP",
  "key12": "355tP5ht8idpqZkamFPbAkBCTvJ3o1zcs9okkMzQh7wyerpUeGbdTR6zuJYFLigcdWNR3AUuwrxRPgEKbxShGfEs",
  "key13": "3Wo9BRyEHzKYDGSeySQkXnYCZFHmwMQCCYE8pgmoXTSTkhvv5c9bymh48rB7jb123QYFYwaxSGE8fVaJdCMgCdb2",
  "key14": "zeJvFSDKa5oKP32S5NG2fnsEMohL5CYVVDYi2QptEaonzUpDZjDLTguuGhzv4DRCME4UsJMLD5zsfopo8MBdiD8",
  "key15": "3CZx6VYQCn4oaQh3sCjxBBTLgjFkg7F8doudXnNBXc2DmZEkkooaVvDJCHkCp9stfU2jUrPvC8Ly7iRjy6FcfuDb",
  "key16": "5NBvuUVJTyVzy6MAEhfgotAfjteTZ7YWx4YfVRioe56A2riNmc6Wdmx72v4JR1YCYECzQEm9Nd7pZ4uthDNqjfBU",
  "key17": "YBhHGTvfW6cUbcMGgc4fafGB9SBRv9xYrwhBauC44ZnrGXmZ6iNM8UuJaSKWXrYUrHeKrZZBksFfMjEk2x7d9As",
  "key18": "27vRLaaE5TKDw9t7JTzidSFZ9xEscYUVjtzyHY9Y41MZqZJxenLF8XYQ75uBTYXjo5i2UDK7Hs2XfXehb8A7TDSR",
  "key19": "47hm2iB7jXw9iQUnFLzeC5PHwyMBU3YJV9Kto7QSWBtsxssy4B9DE1WH1mQyASVLRbpXXDhWefthMhgeHAz6F4gf",
  "key20": "2EtJrb5AMgXHfeEBgNvi43Gc6eJ6jjasufLWGwK7e1cEEPH3zLfhewgbnUdftqJPSCgw2Fg3P1mRxBJC4ygRJHBJ",
  "key21": "vHVbcgWywKcuxcifoqbYWA4ogA6fv2uUzijoj7gGw9uu6rJu5tMgKkDBKbgS7zwmbSzjnVR694gBy9QyWbPWynJ",
  "key22": "32ukMorQdDUvYpGsD4qppchZ6F4mKB7JBh7QTfMoPupgGGGYjfWnmJb3Z3U2Z3YEZ5kuARwDG5Rq31rMTB91SxWr",
  "key23": "3bapDf1KhdrTQwx7qtnJUoNH8s6wqnXnCtnbyKHq6x3RCDmSDawA7MHEsDRPrqNRqnGCrbj7P2NLMjSP9Uc3xx4a",
  "key24": "3Az1RciNhmumjRoFWAj4Rm1HZVoumS4zoS1PV4b9KrYisbe1NfFdmh8eR6hjZEeP9b9vjCpGV1CkRAqMc3urBEZ9",
  "key25": "3DTiYDqKhuAb2M9G17QK1Y4YjRAy2jRpdojMnkCpwQCpbP4iyHdxnF13q95cYfoDzvpSnR67opKa1rxHG1fehC3A",
  "key26": "5UxqxWiguA1haZjrskyAUpZerxfukRAg1j4wtgWNYcQWXB2dixoghrBg4SD7LjUx3vHqogJ2kkVHymHkeoWNEZmE",
  "key27": "4P7s7o2A3sFSrzwmbW8bmabTCpKAxZh1sA74EY3ApbREDrJqCsPBxSS7qdbVNbQR2w44QB1jgmEHiAoaLBmtfAjH",
  "key28": "3o1cSh59kWscPEbEkKEbYaRzGuJXW7kkDt6ncpe7q4sCcNcsgRFa5sRKrS8EHfVmJbe1UjxHVZENjnEGPzbShyUp",
  "key29": "5hBRC2Yi8sX91RAPVQMnWv9qHV5N89VXSfgiHPYcxv2ChbU2pbHYiFwiZWDV4wSYeD8XSdftHBzC33eVirF1mksE",
  "key30": "5XWrt9WbmGVZHHFEU1BrQnJ8Ze4VesH5s5XBvJx5mfu2JzWA6mYdebrtquHbALR6vfxwd4Y5SefZehrVioh2rXDZ",
  "key31": "44nTy7kvHGeziUpbiPKbbmoqviJ288fpp2868QivJRYHv2D11apmUwA2fkhpTR1Gp2U23X1Xm1bDFvYdMRJbg9M",
  "key32": "5jyxNVM3aLXD9KEmEi4cYPZgMZEb7JPzCLw7haL7ySx7a2UCxPgmRck4nfeuSgbMFfRSQhg7KmFGX32gjZJ3FR7i",
  "key33": "7X6PTuduGkipmJwEyzA4enhhMcVvR6TtMnczCyyrhYCPcwDXRRHd4YGLyBxm7sQTcMm2Nnk5jLiDMMHxfy7d8VX",
  "key34": "37jS5pFmtuFXPBDHTQhn7Bhy6uivtjthLBBhUBvigFTyEFahSP7fRLnFPWx3NytVx5z1f67mcXMhcxcLvbvDuYvw"
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
