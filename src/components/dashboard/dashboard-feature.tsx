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
    "3to9GwfFMGKCnzAwBAibwq15ga28bazgj4KqjCxZuQm1yFGPJtciMF3GJXgitajRBuHVfxGC8TEmkJLUGbrGzsor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nftmxraJsJivWCLVc2bhXm7r9VEzmHGRxmj8rmNTRXyLbwtMEwQ7MeZfWnVYxNn8XVQHEgqeVqN1iUy4vR1RtS1",
  "key1": "4b4S29pFA6LaqyTDo8F9vbaCwc66YKRH4aPD1AGQftNakBk6sDvwpubUU9QsyyCe7dfB9DXRPURv2DtXZrDJnkUP",
  "key2": "5p3s86RpYf3QfrsKfqWv4XvJTY46DFy2cSQure4VmuBDNBP4tp2b2m9AegS7fBtDDNNwSXC88G4niGg3EuUyDbrm",
  "key3": "2CbVM6TUoMxKy6sm6xHqK5NY6en4oJpD6fdQn5MysVzLxPcGdM689VBnaUY1EMEXSEU1YKSA6S3By3uqTXom89ZX",
  "key4": "vKpq6zh3EzRviBMdcn8Psse3aNJLGuiC8Y1RWLWoZHTznKvC3t4he2a1ydiN3S7BzJbcCzDr4QXxNkveSFn9A1e",
  "key5": "3vgbEDi9jw3f4UyFSZ4U75Tp3CawEPPfCV7F1jc1yEnjtfAPq37TrwGodQdrznb5RcKNuH6ZiVkGDyJnDXNV5fdS",
  "key6": "5mpE39jyqJsbgECXi7cootghmMRoQCNMLGNrJE2oZysgKVcuBPphqE8ea47W73QJhvizV5Acwiu7C1HYWNs5yC6z",
  "key7": "4TXPjed5tnzCK16riQUc3gMe55sURBH5x9oXs94Lnvn93LrXy9TiHMrkgjCptBaiSquo6FofcX7gujCAne8hHRcX",
  "key8": "4WKyb24fJtyyq54JRaW9gEd6HTLmVTxmkzVyfEv8xRpfosgKDqSSuFQfmCuYiXvAoRSqSdfdQr9dbtX2iYowkaUT",
  "key9": "3ejGBPDSsXnBZtytBfW9T7zm6qdP8WUvuHX3duDWjVDQHtquCggtFUvu8vSaBB8NRJmGtcfqjJXVZ1dpiEdipTZc",
  "key10": "3MQcowMdRtMswr35S323S8tdqju3n7mYnGqJSobhDTp2uSQx8SfgaKppGEWRQNmfaiAHAKGeBs73EX6hLUct9Bf8",
  "key11": "3wqJuNhG9fciVH1FhnTvUeyC5f2PugxVsBZ6m81D7dns7GAsnQSEcCc8TyrrfmmwzVz7s7qySVVpTgL1kbR8JFw9",
  "key12": "FK4HTbbmFAz6jTrHVBf1t7aCuoBeRgr3Ca5J76To2JhodwUDv8g3Ge7oBfK18sAiSLbZtia6iKm5zqLcoNVwjgK",
  "key13": "3KPR69zbpnHexrDHwP8uQLLeXhJrvyX7A97iKo2xiVL7BMhGwNRuP4dDkQFRf1hCQRfotfL5t2p9bWxQobBJtRmn",
  "key14": "3uYNXVptkmpyWRrQG7VvQ5221LU4TKAjvyzvJ8NiC5UJakoMcEAnXnuEffNxEXonGaVVVmkZDaBaGzzcxqEyqEV8",
  "key15": "5gDzGERR4gtLgzHZDFv7jakP2B2NZEDkcehbDRzTg4RqHXrgeWaJGpURQ7me2AWXtcF6EDPRQQ7FyhLJivZ3pFFf",
  "key16": "3baRjr1RE6GwegBHH9UaEVG87tjLyfAZtmd67Zf2BsuUACNJy2efVvCwpGi1LcggcHzqt1uBayL94n9F2618rw8g",
  "key17": "3DFYxB4qV4DMRBbEws4xD5miBBjZmCDRfJRjgKM7zXZrFbkSLYGoQW2eJwmQwtM3SKso8ZZBbinNTKweZuWpzJzW",
  "key18": "3W316SZT2767TJCpmDHnvJEu6H3zW6NkTTzAkZGVYHpE5pcL2GNFv3sQj3WrrkJPa4xwT5nixAWjyxw11wuEktyg",
  "key19": "5Aq2hm11atcyAkXDhak121ptTizsLQ6E2cfXhNEpZG45fBTyTavSDxeDPF6MBJ1KcGdj4dgUjagYSrY6k7WFN1oh",
  "key20": "3mq2Tzm1hTzMxK4x8A1EW7H1TB9mYfdamBbZLcVzyFiX19DXf9PLMNUxaH47hpXM2S1WJizh3RXEXWgAbV4hc7AC",
  "key21": "2E49Vt1k12BfUbvgt3ExKrcXi7eSBLzP4T7ZFCL88jQe31pVWCqa8ftxfx8pctR7HL7p2wV5dpHptLzhWcj3yBQv",
  "key22": "5aLCHCmNmJY5eTyd9w378Qutk2g66PDHhjouHwaLj4N36Uxd9ARXr67L36FLcGcoTBP1WrmZFW9kLgxK32a6rm9p",
  "key23": "5JgLfo88dVHzyjgzxnufskavJu5jyTLU9D7YzppAn5tfiSNpb6H9GZHFUJJpGjjKSpjisA2JUdAfZh8Rh51Hnht1",
  "key24": "4bKL7z7CeMHM7na9gVRbdN3392SqwRLMQ44UZYDvXHB3zfLL4V8aEtTU2qZ6fvGhbTkrFmy7RneY4hmgmLASSNnh",
  "key25": "ASxLmri4J9re82zqGN9gcgYrHFSg8pJnH8FfUjKiaJNbMe4UBiJJepYtgTawkEYUamVfkP9YiMuPpfetKhRufFK",
  "key26": "4ZdTjReRgnqkKFaReZtMCAjPqe6RhhzV5jLyrXKd8YpD1M1QmJHrmNqWDzmkM6bmSzTrwEn4ucCJcK5ZigtLy2rP",
  "key27": "5Z6kpgpXyNsfTAPDF1oiZhKkaWNmusyVxQwWT1zCaZi1x3ZS7bDNxWECe4tnTDG2MLR2ih2JQCiRrjHmy7cj1Adn",
  "key28": "5hapx2JXKo5bt29YHonpFFQBKGAivQHTTgrQyRXmdMP3T55DUKyMwSe3iiLpQwQB9uJ7NrRFiwGgud7XjkEUqmXe",
  "key29": "4bwyHhwjZ41vAML2qePyVNZAXSTvEcXRgwrL51afauFBmzXTnRBr46BK4XW9BLyDEVijeGW4csGWMCyoFPiDXuT",
  "key30": "2CXZGAjBhQJvPGYSncTBWBv8UuW3V8EthXCKKb4J2s6gi5XnsL7yrH7w9LdY2iGM23QbKws79YJBkXdeyTmSbE9x",
  "key31": "CfDGMYY9FiRkXFEZDBqsJvzXZEhkoNwNjEabgewWJ1wF5TrNYky9GvVK8F6prAeCYqhxMhLHAcw1g9PBpgabxWy",
  "key32": "5z2owwuHsBsNCei58ABejfkysFR7LHBT87U4S32gB8qWkgudmkHQt2wFcrfQKk7mbqT3B6c9qUHzEnhkfzWpEtvy",
  "key33": "iPeW7trQecyhStdZDStZNFVqquocHirutkdmTGND1erk72P5Q9pzjcXfyWVfU6YAzaYSDnaVTfh9kNg5LkNA8Bo",
  "key34": "3CYRjamGGsvaBzSbL1TNDEeitJLjyvhHKfP8m3szRERjLkUdPsmeAosAbpEu3zmkAEcef5vX3MRwhEhdBTmYMWZt",
  "key35": "4pje5j37wZmohNJiJz1boNmqz49vYaRrD6wXsKLwLLz822mFknEsibfsSXTQHFcigPgaSYYu5rjkydj3iX3Bntj",
  "key36": "2AoCoc2Ruv1JickzkamVMrQU9TGFLVY9DiHKDNJfsZZXVA6KYdbpgZeT7otJgBtk5bFRRaXzNEZmWjtxBoVWL5tZ",
  "key37": "3bgsc3J7hEamdppnnjVBMftZubRNXPaNbP94EVgzFBoBv83F6yQvcaNz2UZ5WJW5fy1JY8gbev6TgXq9WkQRW1bR",
  "key38": "65DDd7LKk3DiEQnW3skuQQY6xNyVL39P8n4i3koRhwJN3LaoLw5XjpKSi525rSxxyGsTHTKNL8zw5U61E9n2RCke",
  "key39": "4qCHSZomjfsdAEnhTeVBbchXGWjYL4vJCi9v8u76vL5Zpk6P3Tm2FmJX9qjqJqY2Qj1bXLJiH7bTiJfMMiTPCc3L",
  "key40": "49Nan645FpfhmYzVDRzCHNmceDMEA85qyNjqagYGrANbuyrMMfks5HUgwjeFFN86zEyEsGE2gAW1Xnp51mkiXuR5",
  "key41": "5nhkKntMYJeuggC3yZhoCJQqrB1T8eLf9PJnWRJ4P9FXiTw9fQc9HN5XeyLaLfVjR2jR3FvpX1aeCBjwyKK7xxqa"
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
