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
    "2LA4xF9yMsNDJ9CWxJQdr7ksPZvVYR1p8EE1m5LBrMGChHpeQPQuHVcPFCLVomPrJ3Km4uPguJXgnezufyn8MdhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35GtGE7ZE8h1k4mQnzRw1hR5o8ySQsNZd2vYL7bx3zkE9avNbp5e8V8bYwy1mMMN7gw1Q14R44kUBsdFwinRin2h",
  "key1": "24vyYUUifKjBmLJ6AgEEMwG5gLmEFh47fHk8Z1B1GAFwLaCMmKXxB88HdG8PzravcYFaxNthoUzVC3aGdsRW5oGx",
  "key2": "5pVrPtw7VYTcEJD219QbfP5x6gmt5ymudgLz9RrsvBnPEeMCseMFghvMHCXQeNUsYayvaVKFhWrdyjMkgyWa6WaL",
  "key3": "8rvFksHm8qoGp9bX8NnrXutpaKHv1b9gjP1waLgxBU1AvEzd4z56SdQ2vomtCodS9tykjAe4R92PcxpE4EKjRBF",
  "key4": "GjsQ7enCG78o3gZWvUJNFbyG2xBPHJH3SHD41Hhn6skxapeJvXKfQsB2xUxcXmLbY3nnLCeByGAPmthyx1BMDNt",
  "key5": "3YddhiUa7wf4a4Q3z8F6B989WsvAdnF8fdG7uczHqjUsbMXCJuBATrkkRCBzZQ5Y9Wx2jVuAgi4N7SCNEBnVZDYa",
  "key6": "q4gMwSxkDhWw3qyyavW4vrRQBZdpQFeyFhbo1rYrm8vmG5sHWhvG4emKc2xzZmmYK7U41L4ssLzK63nFu4jjASP",
  "key7": "3a21vywcRcPwzR3b6TafWecM7FTqtCm8BnbGSPBH7ejUN6wKmrr5UYtqoUvQdW6xR4EZxbrE4wAsc68EFUoVttqp",
  "key8": "4cn572BGaT5En5PKdP73SRQ3AM97Hi1YQdKDFZgJTa7xU8Vbyb3aRjWRS2U8icVCFN7iKFxBRsC9DWFHanPDFc93",
  "key9": "5fpihAmJ6MyzP7hyzvH7igL6DwrargCTEF9Zw8ASzdQsnWm7ANQKLuLL4zz8eAi3TD9uteFWrGmqQwCsv4tK3KWv",
  "key10": "2j2Q5p6sqALZGWyVcTrSxwuHZpACxLtzWZF1L53X1zCAFfgTmHsqUyd4p5f8rW99nueJVnetPMop2cvMv9nBpTZC",
  "key11": "qm9ZgGnwWukij7qniziidN7obqwcVCSYw4kqrpAZWEQr1Bd5fSAjTR41eGJokx2bxwSL1f76mouE23XMevKTium",
  "key12": "3i2GnJjytoVTtUCTBrKyxiX35NNCG1d99Hkgmzu2tDpyUamDxzeFdK7PqFjxbrkXpXdnF4mNNFycV2UwWrw15BbR",
  "key13": "AM4H2s7ZiEJG4RZRpCNHUdwtgrZe5Rb15JDQ8M8FjGwTbCqCQkeNdevbdBAPMxHtJ341VgLM9J2HUoswPzCDf28",
  "key14": "3HozU25A4fSCxaiiTAe1tf4PRq9AhzzEpnkXv7UN41JjVYguCjpchWC5qrPSQBvCJRRLN5Bxv5Ex8Y1HBpwoNDWQ",
  "key15": "5seWcvzf69EpEsCrayhw848q1L1krrG57qWVmjBcByHbX6SiCS4qBQZ8qCtjq2BnjYBKJWcesQiH6PCeqp9qKhmQ",
  "key16": "UH5uZTkGvaaktFeRbBQ4C8JdUzbbaYp1Fw5d49LYCFrbbTBpJmAs4vAGWVx4tbsphKkcwN69oPsc5rfDYpMF3Cn",
  "key17": "22pWSB952HBEoR4SDqhPgLhVrcBGNqxyVRCnSYcetsGmXho2enXqzebH7uYTctMiH2SyGp39RZx1nfypve7AdxpN",
  "key18": "2Z2GweVondxpBKwTPZpz3sKDRTWxfutQN6fD1RcSYZPFicWEctPsB1T6b6S442wyzj3HiTqYxEUe7VjWNqapotww",
  "key19": "y4DVGytqHATAXxwa5wG3FKfMT8X37jYjHtNAkcXops5uRTUUDZNhyCuLj6bs6TzecKbmgEhtWqqhZ8YriCci3w1",
  "key20": "5fiJZYanfbDjz1zaNg1F3Hya1YZp9Se1aNV5CwMveFTJUhLbAnLW5VUF5kB8rsc2vvnWTtA6JT4Si9vS9d3j25rj",
  "key21": "HTgo3ttRZcdaRxTVkWTVuLvVCK2PtpwRXQ2xd1sz3F3UE3gi1srU8yCnCJ3xArBoZvpkeR11B2VpacbxB6K2if4",
  "key22": "XwrZSXxuzR2LobkDQUWGEHLcSn3uzvdxeXB1j1Z6b5nA15KnvsaS3gBE7JP9iExRtTgmsNWhJSdjWx1ScRJykby",
  "key23": "3vbzNSP8hNkzgRMwPxA9YADh9rZBqwsmwfZPiA3vWrfV1H1c9fQMdRBiR9iabd9UdHVWNSVthA1DGXaUfHR5MSAq",
  "key24": "2YQfsnRTCVxdGEgncWxZa5RAG59iUX4Y4ztqvsNWzfXXqQCpQQhsafG8X99RdVskc2T8R48tCcuCyN5tPVB28aAc",
  "key25": "67QPGGJZoC32Xfs8BqhWMTSEZda6bKQuKUY1ByxDS9eckq3cNQMhmFACM4Hf5ASFUrY9QurUbCq7YBSawsHjpXh5"
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
