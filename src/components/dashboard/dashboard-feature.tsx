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
    "5XmPHJYarQN2ye6EUocDbU9kAJAceDYpgbK7V3f9Pk5JD8VZ2Zf1cFsGq5tehir2MnseSXQCJubWYTh2r2VTPK5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ULZ7FFu7KYfTth2U232oXrHkkfQR7sMuboENsu6X8n8SnG2rJxFZNq8NquxN6EP22v3TPYjm89ENvPBUWU26vRF",
  "key1": "3qbABiN2eUW4Qyjovhug47a34zGmiFKJcNSbPpkyX9wPdQVVTpd2rRc1PxKkFQycZjWGtYSS4QwpcfacCTnmjxsd",
  "key2": "2Y7aCzdqRsVWChx7f6FobGpztfFoVXeEhDqQbFchPhQnmoAp34vsRNZxFHMMahyPRZbQFMG3MpvDankWcMxQurw6",
  "key3": "2mqJemeTS5R6aDPqvVi5WcBZ347evTTt6pfGsZoDSQgH1tnXPQC4y8UykmoMw7ncHDAXmwccozZEwDxxrYs3eSMV",
  "key4": "4NEiUcRK3vPENUrVdgxa2RFDd9RjvfZP9vStqMzyAh54wXfZM26dEogBtkxw6EUJSDQufatyPsSFVyjAsXamhtJ4",
  "key5": "2taoEsfszkF4tdL2m89AWMBSxzUSko5dLjafFhuoZT8eiE55Vgi8LU8q6dadPPHsvi5KDRvrzd2Wrp6QqXeVQstN",
  "key6": "5Cvb89LkwG6JRb6thwtM1YouFZkYXqkgWRD64EYqHh8xDh5BztVKGeZYkgdb7ovWZG7XWvE4wYzoULGRcTyUmdzH",
  "key7": "5t1DJg2PRPGL2PrQKtftqHQccDjkeR3WecyHTLsEjaxNgGLX5J7Nd9HjiqBTyfQNVpsAr4VaKL7CwkwSb4MiswtD",
  "key8": "5TTnKn9Pu1efpaRHiSWAGMCfuBrKoVbRH1YnEt1fY8xaT12zQqeZAD1rhhv6JvYSL1p5RQCttW3iJuU8N3jefKL6",
  "key9": "5LzHHHENEFxDbECJM39QtKJHuZGNvmZZhxVjzjmMN2JNHeHy8wk33T5JB69xBwxc9dc5NuoorJy8dHC1yyYYPfJp",
  "key10": "4Y8YpBL6mPUq6pRTV5D5bc6wC4dPd76Qo6Te5D5EzAEZwbsAX5E3vdTY2AJdtS62B1T7HTDNrdyGopi244xENRcA",
  "key11": "2a4wrN7SajM3E87RHbZUda4A5Vpt5BXZJXWnhN8zQVUPYeFUmiBhkHchbjtpTKgFiEq3SDm6atPnPEyShQdgZA3N",
  "key12": "3wNCg8AESf1SWL4WhTiafaRYHh7LA6GyAxeAhFZiyG1X27xGcaMJPbAjMELTqWhPmdT3CN3JaxSdtu5M3YggzNz4",
  "key13": "2nABeEpb8Kc89cYo5vgDkTt4sSh61mKd8Rva9VwVPM6tfKa2LyPrwPav8XUbVATV7iShUeDViHTGyabBZHDqEkBQ",
  "key14": "4DG6ZmzYBu8eMeg58cfmJ9vkfwiBmnMqi784vdrMVBmbZDYgcpYvFNn77SF8i79MWRSDreh9qWDXVVmQHZ7HzrpV",
  "key15": "4BXcqGS7GyzmN4WqhAkp1dhwruM7EYijt8FZg9nM7caweevQVstbYoEgbWKbukHQTzfzpVihjSnaM75B9PvD2DFZ",
  "key16": "5rL8JMoRRcvpYTRWqfjMwAJ6WYHqkLyPJ8QHq8SaXS4aWeBk7jLt3BEhdccqe7ghKiv69CJ36CLUTV4Qu15P8kc6",
  "key17": "3pnxumwiDwUqLf3PiuDUwpkF7WG9UKy6iCLeyRHP76jTbG1UM5a3aRQbVmeqEsQssqsKDkRgQQVtmFDsLSysCweB",
  "key18": "2gSSUSMzDQftemVWmpvPYu7LEeLeFFdnsYoStiYPLRjRSsXH3Tcp6A8Uz5qVz8hcbGhE3jbYU5JHXFWG4BqUudaP",
  "key19": "4oWtYcj1nRByMteiJiCNM8K8ED1xy6a4wNfRYjYKeuPmUxDUqExhZ3pnozgtWbHXSVwkg6yYi5drBmLT43bBRSeb",
  "key20": "2Rq4txu2CSW759uE8z6hQXRdqsyH6ftipvg8ZeGWqeWPntFMhMPX893N2PzMxJAr9zgihNJroHFh8peY8NLJskSt",
  "key21": "3kadpkARoPdTNcd33xrT6ZmXvoRCV3Dv933w2Z2rK4BEicbhqGxn7atpMMhMhds6mZxzcupLaTLZ3Sj85G64biiu",
  "key22": "5DbAoMonSzAFfqEki6qL53Ya7YbD8m5pQ19GvUzPRFSuo2fAVoJMkxiNBa6QHFHKkM6jQ6bZ1qjcfw5MStaCurLX",
  "key23": "4mWigAVVPJ3pw1L8XFDTXWB3z3MoERzDFL2zaDX7vukPmzG5vfAhRvH1Td2mcBJzjMp4rA5kZrPA7WEr2cRMKUK4",
  "key24": "3L8ZyA9xBMCBP4mabzWhDp1mHg1m8N7XW9p9MGPNRjejCyrzSPom9H378x47MNgsG4iZ4xjxqmwfrDrFdChYwZKT",
  "key25": "Tr17uUrGhGMMJMtdFLF9XMvgwyx5HLWxysxreMYCS6LpKpbAk56hz1GDLbEjdgW6gRZGuGQGpykx4VAWfYFc73w",
  "key26": "3FJjeshDizeaxBkKGM7VucgLF8ubRN5aJvXrGqS8TJhVLehJTdhg4ma8ZS8wFmSexUgFiXNhsmJ41QSVakrrb4Nj",
  "key27": "4xLvmBYbsYbSpz7LAXReEodrAs1UyoNJCqJsxKkL3VtwHiSxsDS9UG6mgLcWKgF1MSJSjeyRGo6iWnYvvMgUnuCT",
  "key28": "2XGL7H8xw2Sfiy4CbxNqRVQSeXu4pQxBNNFNNrnSP2ntGYkU1ZzYqXuphkGczQtwJoo4bZvHdCxWvX9jwBgPYid6",
  "key29": "2a8vSeohDngktD9gYLrxTTxdEn2WWTfKxxxMPn6DGP2XCLZ3bZDzp53FGVo5GV5N99TBLYKCEzhKZv82sGpkr8bZ",
  "key30": "5ttZzAd4YV9WzTGCrenjXrgGFKUTh8MyKXt4prCrvX2yF8jkC32mmLo3ZkcY6bSSL3fn4yGWTuJ6drg2nczL8PTw",
  "key31": "MvzmwkPZ3TVj7fD1zxamSYqFLz4AQBeWRG5WxxjKmc6XoWBouHnirtAhTHB2CHEtkXuNLkmsHE5WzZ4hrxJ1fS6",
  "key32": "4voWWzmcw56b8upK6cMnyJhnTN3YpLzL4B4FG6LhoEqPFan4ej9Mq5HcBsiqK7YJzbmR6JE2wv8oh2hT3iDSwSz5",
  "key33": "3tNujQk4P9p4bcWYWPzBffRrkY6bFcUy5MikKLm2k4NcUxHzKBsRuGQu5ciF9ottY8ifuFDCympvAPsNGQB9QRBf",
  "key34": "3NBRdX4Y1DCn9ijZJm3XbEkcxBGrwLW6stsktR6gSKFAdjVu4HjUZyKohnGHhgidMiWpmL4ECckkAT1gd7zkgftR"
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
