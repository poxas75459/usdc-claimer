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
    "Y3Av2qZaMGPRhEFtrocnSPEQnQVcwZfkRz21ni6PFUeVWV7nct8nfeQKEquTNuwuS4BxiGUwZDLxsEs81VhQKjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZQPrbiBwQvsxXkfqRLfBJ4A5SmVBGzJ9oRAMKbeXerHPuMXzsDCquLzSyxUPuhWanywNZXsDhZqTQHkFGutgCL",
  "key1": "3Q7FBGixaazbbb9pFfXRkcM8RvtxB354vzLkjhTApauVLyPM29q8zDizWP8R7BNivvurxYDQ4SZkSNWPGqFKeyE4",
  "key2": "5Y7uoMPxTp6Mg4AFhUpojhsBJnKWQqZKD6hqUdctD3tyT4vwM1CZxxYhNr7aZM9PbPZA6AMHfhBb3noLrSUXyjby",
  "key3": "3BP7zwAx8jELrJfsfXJd7QktUakYAjbFP5mjEjwibXqedWJBk15vq4cxvpKh5JTB9cKznrnNTQhEMWPVLYWtNySv",
  "key4": "2LsFpGPtRdLGXHhvsayZF1jtG27KXodDwomkdMn91oqBdsM9Um874MxsEsqQundwccHyQ4BNGrBt5xDYfnuKZxFR",
  "key5": "8QcCeRbNdPqHnxoC6JqgETQbgFfiNoCnf3HVfzzWPqcfMXf7vUPuxAUykA95j5xvGiZWXVSPN8SL4C3qX99zeBy",
  "key6": "4M4pEeZwYNDoJfgu4HYarS62yPRZnW6KzvvSBmcQWy2vuMUcvqe1hYHDUpxp5TiRTHPe2XvkUuu5jCEdhdoMM79F",
  "key7": "5FG7iX2yvRxfedqCtnAs3o4BN47CdwnkXJLLaNbK9qck2E6vJBpt7531eaRMrxPCwQLMzd3u4ztwYg3r1hUc4NQr",
  "key8": "2LLTwR7BnqhMWBWnQBLj9NX7H28BeLWuauDiLqxvMxABbNA25CjtVCa9yBi6stWDjvKetEr6JLUWAWjvDDmSZ45k",
  "key9": "5uLVxaBpcuiRYFpErzpgZctGBnLPNWrv4uQU1n6pyJvrnA8rsnwwCJRB9KYgsXUAjUxo9D1WKoRW9vieJxgoZm7j",
  "key10": "2PYv8B5SeSSdDZA4EsmQat3SfRs8Z4uustR79eGck42u8b35u1EUyryhpYNiadqtLjoe2zPQsdqzTTkefeZxujhg",
  "key11": "2xTURwc5AmjrMVUUXMcB3SvWEyu2Z6NnVSoUrZWpCZhT5ZyLV2Sxwjm4B8mBZh388dZfbewe8M5XCSHW91raT2hc",
  "key12": "4agoF3HNtUbq5LwYaq6viKSvG6XaYGrWFn8fZKHi33v7ujAjaN6otyCuaHH3vyF8pCkEfJviQx2XTV72XhNkLVZC",
  "key13": "3dLa1cL1hv1FJWeFzNSbqxP3iTAjgQV2JCyGGa6ppevfgRnSXu76ckqdhJMcvdgoV4UVToTJ4pxYhAYFsZvdHCLh",
  "key14": "rjApbPGHvQmAzhjX4iAQmNqGzD6yGj94NUw1eAVtSk83tbAnzpmFjSkC6gMX24Ju5qp4iT416JVJzViZc6f6Zk3",
  "key15": "jchhKjRC3paxhdWcM3QWefXyUofdSVGcLkMumYy1dSBHmmKufi4iqjdyVo7Nd1aLkkuG8No6N3JVKrWab7F6jbQ",
  "key16": "2v3xYCFQ7wGiTktHYF3YfDBi6XLSaDij6j4X9V3phvggbXVaeqVckwGFLXUc65Nixjzba4fooue6CCvLsYsbVugx",
  "key17": "Y9fbeHvs8vMqjDWUy9yCcxDe8R9kVuVZT6neLzN3DqdRhz8GHCyTbAM8E2XhVzec1u9DbF98LZS7ctCXyCraQoz",
  "key18": "cDLuHFcNkvFACYrfnj9DUtHfPSXuTXsbwrhnqP1QHbS4rgHgFgLBADVdSvGoM55G3LH5Bb3TNYtwEzonJs4y9Hf",
  "key19": "4L15Z3P57ziX1qncgygNMmM69LthwhQomRbKEYbKYpnp9V95v6bmy3i9oVBeVCQL2X8T1RcKNQFhYVGCXN4cTo1m",
  "key20": "3GFZxFtfKtZEWeLzN7dRJdm7u1yrwGoL64eUpgTekHGyyFGndKGePxCfQiSW8axZkYXHoTUXVieDj9u2y6sQ9v9f",
  "key21": "3M5uS5cr89YxVVyg72vBtgrV7vw3bUKwATnZ23Agckn8oPJRbQswai5i6jAmy4HvnLme1i8p5AJkmTiY5D6K2ZhL",
  "key22": "3TkeE25d4iU3GwAnfaNjd8dQbodFqHgWkCysBaGssxqbA9mmsWEyxY68RtZuHbueR2ZkVToTsio7kLcdUJLgPXYJ",
  "key23": "61QrVbsiG1rXGY5zZLPaoyRwjEMcvaowK1yu2PPnzeGRkoo9GwqckBVTDhWWVBHb9dWWvsSk4qkiDejiVtwgQoBS",
  "key24": "4SzmQEP2zYwwXUHKdRPTJVG1g4MAGzzD9X18yAqXov28roydst3jLfBbR5ZhPmQ8fwGXwJMRHfhwbiT32VE3ucy1",
  "key25": "B7EafPnMdc22Vm9AoqwX4Y23DV7XfRH67Bg6KAmB6GNVmML2cFwhaWpFmNgwD4sffBuKBiYyNKzY4VtgkbJXbSu",
  "key26": "4DT2bmWhMhKgNjyQtcx9BsrTs7MLfnoifV2HnW7qzGCoRYAVVYhG2oBGXcjpfS5kAM8TzL19RFhb2EAMX2Wnm5X",
  "key27": "2qtgXv15sM4Mnp2ocCESSALW86PmE8tFCdWNtvm9qoS5wiEY7dUw1K3cT9i6cDPLheUb5kQPjYwwKyotHZawcNXE",
  "key28": "48brsqpiaY7tRpVEnUUWYLKVviUwERMFTm5JMtp3dmBEL13SVotuZHVF1rmAgM8gWbxbzhHxeMsnM5KSAUQXsYze",
  "key29": "5dXvDAGpHPmmBwkbs4krcLrFSDPdHCX1KJRBpVA4Gtcw517FR7ehcdRns3gigoVQYavXb46kJeTxe2zj2ryeR3fq",
  "key30": "3Cket3EHVwq5QEiRQeZsW8tih9xrkqBQsZ57vGrxwJjSigaNezajKpz3fwQgrJQoWQ5289jTBScQNnuYvzTzHmHV",
  "key31": "2idPZ5qSUn3NR7R19QwK9XwQggaSRzhjqnk4vDGrpD7JhB7FHxsypn22jvCYQewcRQjrXjUZaVBpXg4jfNMFwVbR",
  "key32": "4mzcm9aB6fucQGDrHjukGTnfiLWydxmKhvqBAdADe5bufTeaHTbxPTc6c8HeJMwgexUMXX6PtJGLDc84SWUdt9ww",
  "key33": "tUhqccyTC6EzCEvmBqA6KTcVBy1Dw9ehoEpJ7T8bybXQoRitaL3Mw5h8GhKAXBzfmzPNdNwEKT2QDAdPzaxrtGs",
  "key34": "2CBUe4DPJ7Jeyzpq8sVfJ7kaorMuNjjyMLShyKdKDhsbDc38HpWKJG4M8LuUMS8Fp7XU59xrKNHQujjx6YcZAnWw",
  "key35": "3ivY6DX9vPC8roAkRdqCLrzgV8rDNJj3gvADNzPqtWUgaqTn71Uh2WnmUMbpHJDoeeyRBtyjx5G25iSUWWz7KFoh",
  "key36": "2G4hMxUY6sq9R2qDk8pDRjWKURQHJBgGzZP344TnC8XqjjHHGoNiVRtGVsV1vgF3YM9bRDNQFC69wxJiQv7vVHnh",
  "key37": "4xLxxmV9esGyqQvBD1suDWVGCx3k53SyRtb1euAGBTXHDDz8feWQoHbfcCnGwhB2EArFooWKUpJLRvwNFBy7Bj4H",
  "key38": "4M7udVA9myW2TsbZ4rwwcDBrFRdLDSNAHYr9fkPsnZDbDQUtGuCL9AwpvDaKbo2g3cvc9wnL4xG9KxJALw2ynL3N",
  "key39": "2pGH99iPpPi7MQY61LLfTH4amq4PtFEXLETayfNZi4wXdwm9s7v2bQc6CnDPmiNDHVQzwht9s119Q4kDEZqyNi1p",
  "key40": "4tzWe9A3g6h1c2hqVNvV7vnWcDwq2iAqZjcMUT8J8oHK9811kFvBMNPuAvgStRLXp5RjK9Vz7Yu9oWncVqdNarrJ",
  "key41": "5MC3DGSVcUUesfAeUsL3eoXoD56gVqs9aepzFXSpFjNAkd5t15qfcKwWhBVyWMa6Nim1Ww7PXpMAqEfWYtZDX3FA",
  "key42": "zW6SZ2PRSFHQuRh5NLrM3n1qkgfKbYfRntQ7XRgE2EsYKmpMvQeVutrYzRtGSpPJQnbGrDJEyJqM7DsbToFA1ZW",
  "key43": "4hVpX8hZ2NTAFX5EZXnUFQhXnWZQuLvMzaNDbRyvQjnzYwvL7ffCPtWSSTZGDSE27wzmcw5MirJf2GARxo5QyUNS",
  "key44": "4r1ocRGZBwhxF59mtYk4SF5seBrpjHgaZQmDNEjxeG57NzMsrZuBmt4wEPnQN3HXaSGPdyE33s8dQJHsssWExzxd",
  "key45": "4dDN8JisLpe5uVJ5suqvY1Hkw9DKXwqVvdJXDu2jrBivzevNuc3LxCHxuKrJgBdSQJLh7RvaR7sgWsKVWkD22ofN",
  "key46": "ybxBrpkev4mcZwozGXgVJ7Ur18chtd4Ajr7p4r4x1Sm1ZLU1Fs5diXiLp9Sen4nxFuHoAD1zYuMBP1T9m4bYvvj"
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
