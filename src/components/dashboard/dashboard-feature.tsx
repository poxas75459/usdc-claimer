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
    "5WJVhweYeWwotR45U2mayGe7UYKYK3DnttDU751p5vEwmBqr2JrYhcg3dJWfrun3uT62HiDJSDezF2x4W7SwrJZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ouVRTRw7mai7qBomQ854LRi9eKK7jHocoauqW2zm7f4xNhBJ3ExqJaqujgE7sgFSPWisAzutwHAh2SDKAytpk9w",
  "key1": "5XChqfnbHwbK7Q4v5fAyGBYqjLJyzE8iw51Da8sDFs58uQdR1g7XhqKtAwF2eaG2fp8wnWSKh2gD9w9HPVQPmZdS",
  "key2": "67MdeQUNM3gfCqqLRaoHqJoo1Emn2fJKQkMyFftVDVYkJP1TtoGy7PFFzVHYYYke31GXuNERKbf9qRMeBFtvcyaN",
  "key3": "2z2YttdCdLpK7zb8AzFdbQpjZva7af3X3FYDrN4GkkW8oT2i25AT3r31aWeyvLerrX4ZuVyWC644gVCzBbuCw9vx",
  "key4": "iKgD5Ny5ANxWCTbfhEZw5ZRm6DSCTPUZTpRX5VjUZZNwCn9JVjok4yudvFySymBbR3XkEmYgX1RvMu48TnH5LVu",
  "key5": "4ZUBNtcANcrUeCVjSxvsW9ZKNxtR46aBx3LVTKhnZkW6M4ZgpvULnU3r3XqaCrjj5jioJbmsd237n7xXHMf5cMRV",
  "key6": "3sgVdp6BbPv6xbu2W3QaPuRETpfRJTY8eVMG9zhg5WBPiGyjsHyN7fMwfnNH5bqEGFb5tzcCSpcDZ8hEuHJ1YeR9",
  "key7": "5hjJYR81QzYPsuCHih3hSDM6LtGdGCURvAowiAx4RSvQpzj7Mo5hwsvoTKSkNQ6apsGMTQ58hoopNfGEkd1zgi2g",
  "key8": "5T4yridDvYs1S7MrvJTnVsw9EqUjE3Ax9B3ohWprncUp94qCrS5ixwHXUUKGjdD1nNMYxA7NpGKYecJuo3E35WYv",
  "key9": "5VJVLq2jJEaRj9XtcCG8QtwSDEK3KpvQ5Q7UuWYv7Z8ndv25958UrjdtmmKnpdhX4CxA56tTgfEpL62cNwj2dBCT",
  "key10": "2ttW79YE6JuJncZFD2tHpW8PA6DXf2gseQ3cDxtp17krrLNC8c7vQz5Cdaqu2nsE8FK6F5sh7q39vP3gxo9oLRGM",
  "key11": "66U6B32LgNXn5f54tbmjbGMFzTSUXBYFfLrQ5gzKcKfJ2Xm3WSNc9G5k7XqnUrH7YxFxwkkP7Muxf9RLF4KsGkrJ",
  "key12": "q1pko1ZfaT4np1a1fuvjNAXfEVWcpRNQeoHXbiBbn8sHhtEXwkcs1vLK79pJ3S9m9mKY8HgMWLWkLoJnLsNmirq",
  "key13": "5rnpQauz4WCbMyBmTLuwvLiy1zenD77JYa6rfKYdsaErHFRWYKnGNSs4325SXrw378JDxYz8SLnXymHgfsQU2wrU",
  "key14": "5uMvEhM5yP1Q5BC2TAFrog7tdRvFMfj1M32H19mu7KxvkrS2WbfZYa4nMtpFaxBLyaeML5gATuMWBbyWZp5wbsKo",
  "key15": "43cMK2FvFgLtNRw6P7NwunGxJcTzvkk3mAcaDGTe1Xci956No2prNX7RJAHoUQnCQC2iKDa7Rd4WeLJUG8axRia6",
  "key16": "38sYFcqq4EkPN6wNVh94gnUy61XEb86UPFVgdprxpcbk5F6v7HkCkPpLS4M7k16T4zHwZYJkKAdhaVp257gDSkUp",
  "key17": "jnfXWu3SMWyFUDzpqXmxMXAZp1pnbQq6B6uy8c96VSq73TPYNmKSdsCaTZmiJftnCxmDrsNqcCrqbhDVATD6TQe",
  "key18": "5gaJ8bheSV9JMbrzf2TM2UpY4BQb1QTHheKjCi6pUMEQxbhbsYKhfdhYPeiAeEVcRLJRkQnu99Fr5xmQtMu1RiGo",
  "key19": "443raax24eoYXrWBbrBUxvgxRDVsQmrFWGJ4gX6KKZANy3ct3rmmvVsRNCviaSWRGyBbNS4XHuMcfCq3uNQPLSed",
  "key20": "2VoUKt2UkStFD9LiMs6hcYcFY5V5QFxLkZE5aAjDALUD3PBufehbbujT9VSnHWjb3pCUiepKchEzhtPw3hiEArJg",
  "key21": "3yAoodvKyHvJxeFAz3JV7jmdVuSGAocFFJsStsN3jskUE2r6TigU6P8uRB3tsSStv99dNr1e3Dru1Ghz3E2P2msb",
  "key22": "2ZDPCKrk6m3YTyRyY5YPqwxP6KAR72T8Zr9VmX2y7GBUqTZC7PYBarWsGZ2vxeE5HULd4EBQruDxR5sS31yFuwU4",
  "key23": "4zYWMXZ7u3nJ8DewwfeUo91CNPV2dHH3rQNa7Ny1ui6Kg7gZGUXnahDck4ughyArBeEgbbJ8gq1KPoDHTf3VNxBE",
  "key24": "1WaYgmSgL4u4K78muzGAT4bBXBTqec2M9eScZuLpaHAzvQGAYXd3g2189vMbsQF92kDWUJkwgBmzxT7uZECibgM",
  "key25": "2EzjUtK4oaFqiUArWzt6Q93NektnKLPCuUtVXg3eWcbECrCiusNm9B9KRub9SGUSX3LnFKCWpfbxavhqiTHeESsN",
  "key26": "4FmBEtpzoGGhZCrJe8CURjhyook18PTyZU2R25rvpST9TsFtEhSkUBDxBsJEsxAfVMr7YFMiefWJU879JezheE8P",
  "key27": "2hTWUBETyUtD5TdTLt5btVLwXGiPRsWBNYtEcfMxYD4c1jMgDG1qnr57qrMeT6snNnMyQYhKHBk5DRxu3pYMf1ZS",
  "key28": "5nZ98xSxaXyzTHAZCLLfsSebqsyvw8RJ9Ksi96S4E2nK2wxZ8GMPZc8MQr5SuhtMVnQZJPCTHosHMKJnAb79UaJU",
  "key29": "afQGosNjNRTAkoGYNXxQwKY38bz2146HzyqhnwsAr21MTDntU61LNjjuJL7XYyQcAKEaJAcEzK8AQrLPq41Huge",
  "key30": "2nGopLDg5HtUoCgHJD5ye7RrhsaCV5D4juahoMajGaDJYjNamS6h6jyp8xp58fnnfTkuquavqNiwQV639hWczEHk"
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
