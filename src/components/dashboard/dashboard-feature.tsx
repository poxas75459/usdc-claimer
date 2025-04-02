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
    "5vQCR1xuHmuhE67kxMky14s49m7WZJu5UNSM2Gi471axTTaPJqzuuyNC8LuKnHyZCKk4Wk1JYEvNZSyvxSrp9oWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49NoRgTkcFwWozRS4aNoNpT24Azq5Qc2rTuU4PhzyaKkk2X4ck4vLu1KLEi6dwoZzW5ytqdPHMhpekSqz4rXoWWr",
  "key1": "3VhtBVzhM8hjng9rST9XvQsUZ8bC7bmRbqmR3AYcqZYkP32tNn1PgjbkR68YaZv3dAAgk3yroNHb6hrqseUYSF5L",
  "key2": "49e88TBKBb6u6PXVBnxgfQabnmJYfd33Ym7vVWA28xcM8K3BmGBKL3ruc8vLUaHwxCzwAvereuppeWn2SapE832u",
  "key3": "2KBbyX9FCFjR1hJMqvTExH3h2fgXCnBq1xNLBswsgiEtHVpxx1RX9pPT4wjgHNouHYbUv4ro8miNHbQPMum2x9qk",
  "key4": "ei2Cbi85yf57MzXCYCimwQNnN14QNGFJ1EbFZir5oDMJciF2zJVWsV2uHM9AeToU9nnE2j2VKHd7pvJRsjUP6RS",
  "key5": "63qx2d4TqvKrZsvWWZWrtPTTDS1tEsQ33vFmjD72Je3fUTLPTUPcetbUAudWx9Mog8yjTcSZ5ggqPS2dtKtnB3VW",
  "key6": "2iYHY5zVk6RxEMkpaJaGhsXnR3ZHHpNPYBLHtQaHa7zQARjSYDG47T2PYyrv8gHgUc6oAb6ZRyk6LYpygg2Bc72K",
  "key7": "2ge4PxWHJicVzEEaNrbcRuxBtyCXURfcZs4yGTuj5HCcEvPdQR7A96hbaCoJAoEB47TfubeVWtAh9CXkZE166kGt",
  "key8": "2wsP7Gnh29uVSCZvLNduchmyAzUvaXkjKVu2zgYWo5vEdcvwK4USKQLkf56Gc5T35nMSYWh44aAMPm5TRsP8C4YC",
  "key9": "26p9pUNYh6ew65hXxvUQdcWUDKkmJbcjQPG9YHdFkbcMYKExWvhZaATZa7yAyhr1jW3nvk2LJxSkwNoNbswominW",
  "key10": "4u7ZV4Wp4nGvJNkUPy4dNhXmco3QV6GLr1YKLzEAXPsAnBdNyKJLnnS32uvUaHUV5hqQPsjDfU8K1fkkDJiHLtcc",
  "key11": "8fxqwrFprummjCKpqYaRJGTwvttC5bZJ7zDYTvG2S2r9qC7PfcBEB6nbhkrTww78ZFhcZurEbbjWaK1NwZdX25v",
  "key12": "2yUeMiafVSLjhw2ptuWvd9ZGvSW5K4hQLpvn3PQn8Q1i9nHdYAzwTS23dEZz5suvizy3p5freNa4kFEppBS8wpav",
  "key13": "3vgSNr2a23WZHoQdcbaQfqwH7LghqubHJ2HuKFJeVC12fnPopN6BkujcbGpKBKBf8Sfr4xpPGuoTXpZKsem1wstr",
  "key14": "5yVbLQyvARo2Yhw8AwhLn9Lo2KtdpeCAq9CJLWTtRCwTNqpcLnYM6wpMMN4vx1D4wWZbL4RNP3kWKBkyy4hUcYFJ",
  "key15": "6BbWShpw5GaxTPwMq8mdxQxaBMzDTgJnhp5iAfp7QL9w8unf9kSsdcpzdi84ZX3496qnF1f3PupvLuqKeFPmXVB",
  "key16": "q9aXGjJazjt3SwspeokjahJYXSqbvLw7f5KJPjS6MKK5rsxiQbdzkikgGKCHveFdAHzkfCp99fCbVXrC6SHXnAZ",
  "key17": "2qWRHpbRePdwHBg4NjFiqaFEMgyrmjE46sj64P5U4YB4BP7snRYCg13gN7rAhJRDsSrSn7xb9GJ1hnbTQXxtCKJU",
  "key18": "4usn2TCDB1h4sfeNpfbvpyS4vdYAsykdjC2VU9bgc3rgJhQFNKr5VVWroY4DCBK6ZNsvsW18GdgfgoVGN1LeJHdd",
  "key19": "4S8ZbKN11kfz4SvLqgNBVVRaJLHcifdue6iHRcnPazyni6LYpU7RDQRLnvWHBCqZiu5ix5y7c2ThB9eDMEdXB7Ek",
  "key20": "3XAdLhTadibP2gNZAjXQYNUo88YJGjcmWPajfvHwxfQUxp6YyjNG5ecT81tgH4u7s8ooRdGavf3j83Xgi5aJxG86",
  "key21": "3fM7hAFFTaQw3G2jFyc9aPvb5kjan2cGVjZUAVrJGtDLtQnNucrB4CFkME9fp1hiAJSidbqJEJDymnzsJoF2XyNd",
  "key22": "4vpsFzxxbmfh6DB2uu2J4P92NmGw38CYDEVEsJzC26rtFJgBUYbqHnEBb6QY7LCzwoTXZfZdTozEHtYDyQSxswqv",
  "key23": "Av5hotPgrz3BSrstrCrXSpsaDGpDzsad3aYzCv8m2u34CM93WzycHpvnfpB71peG9WVprxdyQugDbcpSrNHB84z",
  "key24": "43Qqsdua18VLAeyFba143ZJnRqHnVVuMrjixtuUe6gJ6f7PYYSDAuEG1PkZUTjKBaxKTh9VpqLmn1T91eArmRQ94",
  "key25": "57jHcW33tbzAcohwvqPkUj5Ec3WtSRG2ovNuHt93wYGmrv4VGMoqdRA5H829zKd59DXgmircm4vPTP1sifNahUtb",
  "key26": "5EJSzp2TxP9k5ou7WdLVizaM625UqYJrb7MDzfaa1SiEX9HQwyQnk4kN7V61AEm11oQgegDjPyZ5hJA9KaaGin2b",
  "key27": "5E3zDKLcamLDXhBWnT6wh2sC5p13eJVMuDMN6wEqAAiu4bXYg6pWQyRt4pYoP99egLExrcvoAiaArceT5SvFFwAR",
  "key28": "5S7uKitgcgFGQBMTPDR3E4UTib7z9DHtuCXYnd6PmMNbDGbmHwzPs1MEzMWaxhUdhy9FpZS3cuXgYZJNMsETaKmt",
  "key29": "5HkKLFmAp2w5Xn2aXqrRc7eEXB9KgNCaucf6BRMx89KuFeBpJgQHEsvaAzAHeoXLwvQfpQWu2gsM4ArKVN7Tg555",
  "key30": "3xJ5sqjwmrGdkbsQX4cpHXyDSm8fN111xQtwHQfQ7mKRXkoU8UC1E5LKd5Hp3bmvbRf4JoNLhFF8T62SwAt9MaYL",
  "key31": "2N9NjpPdKTnHq9Z2Q7S9GiH7iGT4jJZ8SzQ9Ss8vyLNWU8smuFncgBs8jCmmMJuD59WLBGrfivtmCeLqLw8w9mHF"
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
