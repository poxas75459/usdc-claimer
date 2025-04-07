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
    "56upMbYRXXs53aGwdu1mu9utPKjWkfnZUu4b52VWaUbyZPyYjwWZozxHz2zs39DG2zQ3RuoccMRp6jrspaHWMb1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uv73jdanB1FYBUSjDWANRpe8rGn6rnfFkpu4SJ3ztiJRjNqm6nXw5FnVDyc754s9JjTSWCos5URZNPoCxGMxuNW",
  "key1": "35suQXiVaWFSZdfuL82USrdh3xEtG6Dae1V6etWN7kUoqdvorBkiKRfYQjYt1EwVsL8pHsKnrkSAjNydCQs2XXnA",
  "key2": "3ewmutVcQLZHFEKUyoLPtBCdXfMHjxpzswme9Km5vSSQof26WcTAemqvCpQS5MAV6J8NXGze7s6Nh3jNyjmEkFwc",
  "key3": "3zq8yWZYYRBLHRFuF6zyuUDM5mZfkwVN77CTD28Kr5BA663zabUj3uLN9XYQ3Voaz9tYegBGo6evFsBvqeXVj8mM",
  "key4": "4Qer4J1sgnZdya1spdWogv5T1CZX1csBH52M3KAt8iGVusy4UH3YBtPcGaWmnnH9WDN8GuoefoEmMoPEnNDufghp",
  "key5": "5qEXhcH3vQyM3suykywUYZa2zaD16qw1sQEjNPc379FYEn2KSYgMNrN6MV7pG4oRQXZ5i9xQDEWMSLW8qD36yDrx",
  "key6": "381riLzFCJLDuofyZoCyPuaWfyZbVqHCrpxp2WB3MXsTKjPzfBY9CdPn9LZuaMrfrizWDbtWSXqNiwPkFsspeRmD",
  "key7": "rABwATbwZzPMQSEZMb9TrB7a3RmEyjTLfjZYLKRqwU2VCe7C6yunXC6wb1sUKAJqa94kdar517uPXhn99FUvjE8",
  "key8": "yKRxQvevCinckv3LnzeGM8hd5rscrzNuDEuwKDQcYQrpXo1Z5fKgGAmBeg9rR9uMr2wFQeBQmE3rJu1FDrzstfh",
  "key9": "pNhmB4scynzrVbs95oxff911T8NQ2bVT1qDiTc2eW4ow2XfUYWvhWE2ZPbnFmtYGYkAQLaYRCMNcdHS3JiWAvQr",
  "key10": "3RXdTf6MVoyV2WsKTL8Wt7Xp3XWDwVK6XY1qcjcYSZzL5HhvYywYo4xoXLGYGG9j21ZXmYufBppdhSY2TKLiiw1Q",
  "key11": "4pJzAmWLmhbnsMPTcpztwmQjp22vAJHsRAw1T1hmDmtE2VmHtQYV7qiGPEdamZkNSe542nV7AcrogsDhWgjLqYVB",
  "key12": "3Nu9SM6EQ5SU1AKWnqo6DRv1QiWHDA116QDthp1NTp8iJuhtyeZAdkQ3BgsTzbscqBCouQeTcLg5ygowzfXcJ8Kr",
  "key13": "32dUFYBzsYaG1qcaQ6pWRNkNF6nPJw47cN4uVmNNfTehLH7h8APsHSffG7ZjzLrwKvA95j5fkrSqceTjZ49Hw6z9",
  "key14": "38TzzeYXsgK3Z8RzhAxFPQuCe7NDd7CekRby1RKHuEwc8eLSmbqcnGeZePhLaYZnMbeGxJiAGQAjhySoUV71H9sF",
  "key15": "5SeAbUvdJGihikvR3Afj956YMap99MFKTqe8aUyobRjYq1be6Qzgn3gnxbFs5kAiUGutKQYL6aJy2wSLxJaTVpu3",
  "key16": "26iTdiLDtgFto8K4FjfCQQBvvSY7rff7WEg657fX4Aggh3prTstihg3CtPTS5gYVWXjDSnqnyute35NV25MTwCoH",
  "key17": "2vHv6FD828dUQyx5fJXfxa19Brwyp1kuuAgrEDpdz5sm2aj6Sp9xBzYUvRauEU8JCrGtj8aZu736ZZb8QhPWoXFp",
  "key18": "37Dx3P5r2s5FGmqL4ZtbCbWN7j5vJ3oJrLAkYi2fUgLcib8NGDSHqQToLsWHtUGXhJjwbhV2j8rtkxgUsXyvwrnj",
  "key19": "2tGJy4vqGrdZmtghsLbJXjogMScpZQKGQj9RGqYLND2bXrgb9pawFZfRoNUejMG3h9eLKy65nvJp9KmfvUxhYemP",
  "key20": "2ui7xjcaWXJMLaV7GmajSF7CgsrEoUQrpbcNScVRiFERiJQz6HpJELf2hANJasgFtbRDtk6NFsnE7QYbAocgK9Rw",
  "key21": "3NyQBQs8HenhaTC2g8P6CBB2C1tLcsoXhyKTKdLueXFDGVEpNJ3psai2RMA1WQGH25ZjDhpAG3ZqnQi36o2Z4pfr",
  "key22": "5qWnTk26M5Kcj6f8TfTGTfWacGwhAAtfwGTxz6m4JSw1AL1GR3gPbb36MJqpGWATUczhwq7TcmhHwV8kPrq1KuQb",
  "key23": "pDNC8Hx6ocTHb1xbZaiZMMFRsj5e3Ss8S34jwSUiCdGJo2oDT5NUbq8tGWUWE9rabpR87n7r4Cbs9jztv4SiCvN",
  "key24": "3FXyhrxq8qmXgEH9dksJzoJo2y89mUUtA7BBZfSBgMqHZdJrPqFppoLjYkjXMQEFkvmexMaDPWemMKjdQmiE2ApA",
  "key25": "3VPGeYfrf5BDYv1mrdHJbPg5GH9SNohqHT4eNg5XwsQr57ApcSD4Vxe4m1qswsTA1B4mwXJvNngeamk5qrPzMQst",
  "key26": "4JHsfPZyXM4EGyJ5TKsMNUZnLwMfVUzoeZaaVcEjN84dosUSybu6tM4a4GF7ZKQGyxGmEfGcik76MYQRGHF7n2Ww",
  "key27": "2qQRuaudYE3teEqjoXbnY2iCamAtHw2zs4vQnvp3nYJqPYzKAGMb7oSQcAjGKyguELyxgXEzFDB9BL9hiv8b2s3L",
  "key28": "42UAZ1QJ2dmMUesB1qRAuc3rykWCA7dDrBsgbRYw9qCixCS3WfQAoRwW5Frd86DNjQpo1L39ZHmbMuUcHKR8u8SM",
  "key29": "ymvhCEvFahCZvAPHr2uNkBSQ3Emc4CaZwoK3NBKaCz68vJ5c1rtWdr8DHT3ZGc5CUXYQUm21N8TcJTxcqVzQf1B",
  "key30": "4vn6u1BP3fmNe2dxjkgo3gosM2FjitTqs7giU4mS18du1VvYWxi5MEFvXDiSRtHstnnW1mmtPnXBYjg89moFaEu7",
  "key31": "5AhDiE7D5e77NUpqYWK2XcoRXgtDUCcYf3m9M82t9yLH7vWvKWFbWD1fqQxW3dLiTUE8DijD8TmMoZng2J3uEvpB",
  "key32": "4NBKhQUuRRruA6E7958QBoYFGi6JURL7tKBeRtDdcw21qDz3SBhzMHrBwebbqBaTveby2dHCr7DpTuGegPqvgLvD",
  "key33": "2LkqVfsjb55tGA1viTTBjqyNcvo4314cj78gkXegUWb9bJkizx1arTQ83ErUjgXqzf7m7vNEp8diCDYvyJ13HfFQ",
  "key34": "VXZHQuohRrmUfDFDQoCVcKz7q1TNb7kN6UhMoCTJ7k1r1C3NXaHSxT4Mk7XNab6We75giCzzKKGQLnozSKak3LZ",
  "key35": "3fVUtXHGLk2PoXVWXDt6giACkXNDADTAoGfGutEBiBVzoYm2EViS5UmygzhVWYhbrCQVYH7jGPsMQ5tB4FEss9Bh",
  "key36": "4yPhV279juwSt7nsoVBkHJGHrnC8pt2Z1jUwfRhSAdGDzcmUdRDNGiifzDx5tdb2Nt37rEkh5nYF6N6qaXsY25wk",
  "key37": "46iweM4oJYYWgSvCpnL2VGzNVWEQDx6XbpuJH9Y37yjhaqWVfgHe1SCFFQAU2sEiL5QgjQRD3BsoBzcCiPybwpyW",
  "key38": "5KiSLqPBuwYnBAorAswzgB4L22kXpyUXJaeXdCieaRaMeR3pdVtUwdJ9vcuR4SX5fkTAm3NVq3mt7yh5Kqe7kQt2",
  "key39": "5twCJraz8VvHeiKFp8pEZrrbaKZdekjjoAu1DVTC7GhbdVt6myPunQmLrbUCXeHr9edFRX2dSmRyUXjUQXtXiqYV",
  "key40": "2rzaAURpsVBgcWU7oDdwM1tZ8YVManeoGMbk8Db2zfFgb67Qv6zJioVzSVHknYVMay8syPdpXQxrpz67nSzkCUWA",
  "key41": "AWRBzRozcQNYXHayGVYAtgTQXFrspd2APVGFofHHEyHmZ48QYv4FDP4kt6TNxMVE18NifsqnUtMDQ3SKt8QYkEv"
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
