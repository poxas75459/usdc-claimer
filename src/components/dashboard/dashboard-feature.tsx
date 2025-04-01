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
    "529HLn1zKk2UhwMW59xV5xkmHSttdtkLg2vo7RtBSgoJehFCAH6yFU5iQWocYhzeid4BJujgGXvM1sqBb2k62G5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NncYL9jDNnj8ewRtEsxAcNtTAdWHKgC5hE7dUtMjAPSDS3nsGqLfbAyJKGKPvH8AdwgAuVCQNmTBwRLUUeAxqfy",
  "key1": "5qrKwAvm3zN3qeLTzkoaKvi1saCf8kxyhCPUGim8QDdMDTsB58xAM23MkeL6GMXPFNwSdkXc2ng7M1TC5rfP6aXx",
  "key2": "5WbZVBCLxWTAzYxucwQA2uQR7XABUjniH2Yr7RvJvXDSqHxd1vhx4afLSeDxSP6kiHzpRjJgPNi73pnTfxdL8PU6",
  "key3": "2ChvXWNPZAiWffxUtp3XF5AZWkaDyZgqQAbyJB6k7RYzmuULyABz16QQR2PwMx4MyJ6rjz1KEyisQAGoTfKSiCA4",
  "key4": "4GBfZDK1mUboDh9MxNQCJbvfjwqosAJoCQkA9BNx1ZkhkSpVr2sTjTGzCDni9K6pnRXaAXSnVoosRqQVGTBL8vwd",
  "key5": "Sf55odvyvLZBeSjj5MRguriQAdD7M7ggPe9Ri2qKT8L1tqYuMitbxuZU83rDEfLH16jSwr7QcfG1ZJVgWRzVRqy",
  "key6": "5GLNG5bVKdeeLinpFFwiWAVeC2tQdkVRQqLk9nVgvED7SGNioNSgQ3Lu5T4bAi3bX49nixzJfRu7JUSYUxjRdJdL",
  "key7": "2DXvGpcuvqatod5SfV6p3cq6EbtcwVgc9ryt1SaMbC9oH3ZL7uTpny5AcepyAeFkySMR7btvq2H2QfwP8sbj5bUQ",
  "key8": "62rnukXkZzp4NVXLjygirLyRArTpowpYTZEH8CCWKNxDjyceHVGVRRe3bmaqr58VJwRUWspUZ6g3Xf1TqSjPgEZy",
  "key9": "4RS8asqrTk6EiCS5QA21NfA57fvd38gAoyyaeS87Ub94VbGnTkSBP2WJTdwyerGeT1niTaLwkqEQFQCtFZeiNZe2",
  "key10": "2x96ARs1vxtvtLK94W4fX3qxwXHdH4c7UZPGtNjDBw51CuYtGvUC1sZdJ7VywSkWTzNBiKvC28tKkE6Unsn7Zyrp",
  "key11": "4SEiWDxfaVKdyCXkfYvU3GG6XLQq5EwdiZuDMg3VpEMuV7rwpyFH73nA4fEjy2bYTAP6oAPi8A1Q6rDxmJ3Gr5jU",
  "key12": "3NubVpRAQ9rxUDcT7LXTAA54m6jN7ZfHakiW9RiEUGz1ZE4Yvc41dDGzitjuZQcVSqLTaq4ZpJwssNZnaVaVk4BD",
  "key13": "47PwTcL6kkzua5uUESoGa1qofRKqj6jxaPBqj1SiQHf3FskCwSQfv9U578GfCmXyxoaYG1c5SXCxosViZoFWixQF",
  "key14": "SxtBqPDyr8cHLeshE1izcYhYWPw8oKHWs3cx4rPUtrSVEdkNQH4NP5F3JuAAQfMM1UbtvxqHSKPk3bXznuMp5Bq",
  "key15": "4aCTVAEJfbH3pyUXncF9uX6vmi568WmTPzBKE4TrKELeAsyACA3qQ6fGFBCP1E42gQfZmvUoyj7g2be33xPUesw5",
  "key16": "fTAoH6UXemfMfMphS5BAFA8dn5r7dFoZNhCoJtcL9TEKV9o7Kot9DuZFKoXeMw21JSgAeSWkZLwgg3RFiH2muET",
  "key17": "2XBYo62jhb8uY1U3mxX6YJqQhwRt34VKTzJ3RDvfNArArz1FF3yjnfnadjs7BmAFCDUmBQptwyGxjDqWdNSEsjJa",
  "key18": "4EpMWPtA6CR9tCGHzjHKrUMFFVs6YCA6idDMzLiGfFe9KpHGEinUdaxSpBTeWD8K8bJnphXGkNR3ZhyWFBSdBf7g",
  "key19": "3BTzg6gkGoyc5RAo8DudWByZ7QmDmf4Zg7P19ds4V3FTWe79ezQGDT4LjoLqQ6424kyps2GpYNgo8BxAm3WUt3DQ",
  "key20": "5sfE4a8NayomkaVfk8F8HxFxGScEN53CBd7CBAwgubhfE9Kp9gQeXtYyzyBJFKVU92bPtAdUCSdo7bEM3F9wgv4E",
  "key21": "2Az4XidnDn49Cxa7KT8sEYbiJr4CiXBwsrYouJwrjRaLcgtSiV8bMDYtdve1zCQNAonc9t2uzeRZXB2R8TXSU4e4",
  "key22": "4BCbeC8k1YPd3oCgrFU72uNg3knGzw7ZU336hdLFBYn5MHRssdb4NMCNSkxNz5fDsmDucrQ4TEd5yEUZVaczAJHs",
  "key23": "2FUwL65gfZ7inWqeF7WuBsZtcFs1zyVUguU4ZYcgECKCLtPnT6VKAfX3qha1QHsFRaPeb4D7WebpSWVntAfEeqZb",
  "key24": "5j2umjCrZiJm1jwAGoL1B3xZfHqiYCbHz6xDXZr5Gmv16u6J4wPjze7exU6Vyr2Ub2a637EcDjWtSHiShhQKtTqa",
  "key25": "4jdYdZ6mqZhf6n9jJ7v3nHHuSYQ6XmfsTHbKsXrAMjLsZf9xmVNLqqPtHAoRfEUzZfvxmkpvuo3VhG4KtP5CYJyo",
  "key26": "2yLSJq87CZykc9nFu3BLJ4jrrhF1kdxkKpBcxiWawDbfk4267xQrbHDXsSpK85Qeop795jmW9FD2xTT2rqqkFrp1",
  "key27": "YBt5HXATuQqABZDYssEYA4gB2Md44MqynaeiN88siodDsWQrKXBSrSxzTE6pA7S7jKZcMxF8NYBe5Hw9zp7qWH2",
  "key28": "5Ak4VKTVAMB83DauJGGDUTVc3evBPaFLkJxYidYtcXVsasqqYuo9QZRGU3Lj3tPjJ8hvn45NH5DVxfJW6DxgszXC",
  "key29": "5vXFJFFbE9y6qYRDAmwkoSdKaENYJ8QRUaAmeqjZS9yXkz7VGj12aDBH8zKd1sPHfve4pHvdv5JAfgedDRmNokwi"
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
