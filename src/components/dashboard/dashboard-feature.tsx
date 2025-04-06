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
    "4DwrwZAATn9p5z8TqjzZP7eXBGynLtSjrM49YQcMzdSGynZdmfKWFpjv9Hv9Qm9GrY1uEqJi9NUgWXeyvdtxwhhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gfbzchqh5XYNipQzwAx8fBjDco3u4hMviDuvc6bR3mQ62qFJzeHewD6iqofLpWCs2xkzP7i7QaWkfvwuGR5p3w2",
  "key1": "2fvBARgxMkNaRv6gXyDeyf7qMXTS6eUHYpUNsTMm3RUcpgYzo57qABjAGaVNAujjdo69gSgLqEGnk7ZF9MTBQWmg",
  "key2": "5YN87VB8aBE2gXR6tFS5FgrzGeyA1GL1BdZ4J8Q3x7RPwtMPkqgDZUrkNnyAAFhwEQFkjFwPdzdrcYKFyTzaBd8J",
  "key3": "4Mht2c2hjGmTUyNQ8D58a4Waf4HhbyrXRp58NKaHWcznjbVSGUkrmmVLGe4pQJS4ciibHaH7JZ1GN4i2ZjCoRNbQ",
  "key4": "4KmzQqM5wX7Y7p6b6CcnuBti2rSW8p5dgCTBYcgV1aTX1fwYQzB7vfNEnwmwxYDzUCgE86J8Nx9zYJHCJJt1ijMR",
  "key5": "2Qjs2BRiTxvQM3rLEvVBxc292SPFZZd2cxtWiQr9AG9Vc3bHudDqd724Kq7iaXVGZPcb1qACxdKrVpKXoLyKH8Ci",
  "key6": "3ucL96g7pCpATsMabzyNyDxDw8Dh4FrpD3vEfoFoswf6KxgWxGDNwNz1kEXgCmGXK9NGPVzx3yeMphziB8SrRbYJ",
  "key7": "2qjih513VkM1QkKx9j9dARYMAD2S6A5rDoZm8fwGWgDCQKAEszLGBnRT3cxSkVaRypG9x8oSnwm8tAhNTdqdH3wM",
  "key8": "4bXLamjocMN1kNhGaFjmqj6zuVZQgPW4hQvh1KbAwsLQCDutuy5rWzqSNqDA2s7LimCrPW2jAHfgvRHMyrJVDmUP",
  "key9": "5u8koEi2a1fSRuvGoBNn37UPNgPYgvmxKorPmzwt2kjKRaQ4kHdyWsip7KuMyCsb5GLNUYosdQ9qjEw4r83s7W4C",
  "key10": "2dVJoT4oiqRg84Zm21Md9XnxRhYNT5kbpJvng8JDxTAUnZYT1YT3vKacmaZM8AVZ7aRaRMLM5Yma9eLGFtrZGm77",
  "key11": "uYxXA6DLZXfvCWPXBjyRGTXcsccBojfT5UT2n25ecpJfFr22auciMChv6eBK3g7MojkZbULkGWdug3e5VL3NfAG",
  "key12": "3yatLEYsqqspoAu96bmrKtcT5po4CoUcyWSwaaWREdtMEcxZcWP4FwRZ1fq8nZ3yCeftKzwA38UDQbsCMvnT2EQ",
  "key13": "5EoB1v5kKp4HApM8zzc64NTqPK492pu5p38GCRQPJk4i53udsRvo7U9cwih5qcsrtYfkGCZ1GiXX8yBNxrFMCq83",
  "key14": "4N87NLeoCHe3adZH8ANNEMfn4PfDPoDGqYJEdcNRgZM1V24PzUUYUijQBLszYai1YbdhBBfEzwy9QyEZ3dC9PJTR",
  "key15": "5Ys9ccH7ErW9FHt74zfi6ZG9xyc9gVFaSRJzSTM1EpoAwKAtLQ6n7FFm81B1WuuzEfy1kQbXqqk7qgUhpzR3PBDN",
  "key16": "4iTHUZsCdRJK3sa9xzWCotZVVe6VY5nbQ8sjAZTTg6fBvffhS3hm9hqKmPc9KLdvEHUcKAPh4AbGbQAPSJ3RZ13J",
  "key17": "4RszfeiV4rvwKE159g8MSFGWc9vKSNykkXnr1Khk1WAdauJDwFELESUbccdPzSdXn9fW9EQaWmBTLQmbAWrK9udT",
  "key18": "oBqRiqLVDqsiLf8iJtHm46v6dXwULGBVxL9oZLep9K2qT2wZuiLP4pDwyyzNvbdhBRr4PU2xU3AU5aFHsoJEG4k",
  "key19": "3LDjQ2LsLapXLry6446XGZk2vZbug28q6jGDnHV7Vqx3QzoQt59ZVXa6SVMUh8ED4c8NFgavuVkR7c9esqHMB1aB",
  "key20": "xa621qBgoScd7KkdDQ9iRhuZ1PFDqZrBTzftdS73Y2A7gpewJhGKJwqEhrJrJ6DudKncmXuevG3Zr4CvNfv633B",
  "key21": "4byxgLnHWuCeoF9DKz6qKQRHwF9cpWKpSDYwUHkT173Q1ETHcG3dxCXPwfiBG67Ztos12yxZF9JpCfhL2vCkqAch",
  "key22": "5dm417z4tAMZi8wbuy3mUCnyVpsaBrETL34pwFN9MGofD8Mu1RTgQ6NunuLSTuxXbeuMbeEqCctGX2x8nj8ifvMH",
  "key23": "3tiXwcCUGFDR2FAezKe24TGXUG9YTgnNr1dQ8arNskPcaLmGieXodnCgtRPWouRRPRYRVg9iz7iSqD3jD3XF7pP4",
  "key24": "53RAsLNENGLxEE3tPNkjKjE8Zf1CvAJBijefx9cWFNUQdqh2wUahndv9YthnWqNnXjwErdjUcu7JAmwhLamDB9VA",
  "key25": "53CQhJQGQTTJnubAF9oxPrV23kYiuybbkC1hxTrK3r1rvgXD6Hv5hz8qdpg1XFtvW9nwmrMNwUyPu2w8AQfsyYsa",
  "key26": "UQF5U9t1coKRVCbKjSUvgrGwvMUsNjxDQCEXuqLniJUJ5XHF7dZtswX8v5wMSg1CzNUr2Rx2cUQxjj1TPgyjHiE",
  "key27": "2Z1k8p4Y1DM2ZhsEA3aAbmE8yeE8PpZ9nbuV1fPrbSJvqLKnXrV8rGh3ayGVhtaEf3DcSiaCpaHwssGrQmy3Wycd",
  "key28": "2U8RQowdxyMgb6w8ec44gj5Vy7T6E5okfJuHJmzfwHsDzbbUv58URwxXYBVu8iPTkja4rYE2jQ1Nr61EpiVCKNNN",
  "key29": "vEV49mT5WaYrP2qaquaoQVAZx5AofdLrDc2cLTKPanvsKANftoUdgP3QsormLH4r39a645iJTRVzWYdxZWbnWsY",
  "key30": "4fmGQ8E8qq1fJxbFzdxCECK49nnsg8SxGST1VR16bogMSWq9j37oN9zPjhq4oiZu42EoqhY4MH5V9kSeTMzsFpPP",
  "key31": "X3x3HYTZ4caDDF2NSfcGURgBKqP5D6yCNMeYcZ6h4TtA82cTZkjwanCCh26SU3P8dqWv3zoXHTzJecseaEBP25T",
  "key32": "CnDgVWRcMHv7zyjRnu8E256JNi29d1oRR5QuyBcan79BJo184v4HBLZaEabrrsq3Q5nyML9JZrhqhmzm2nXH77d",
  "key33": "3YnkiGUedKVLbA4xi3wBfmXrd1KsJ39ryK8YXrCaA2tHBRc3L8gPPKjVJTmWjTf2Mo5ypNqkmZ1rHmcf5uL3FRQY",
  "key34": "3QGyNCXukTfHoG4xEicg93xDACq354Q9KDWkzTkH55oD6ro6d2i35DNiJAHGfCDeJqS5UwYZpcTZ6r1CMV6UBtYJ",
  "key35": "2PAqf5W3B5MHYfjFCZ3uhbExtbS5KdPGZLkcXfcCWcJUEs99MgPB4fr9qMu1qcVofHKFsMzXLE67DXGnuTpR67EQ"
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
