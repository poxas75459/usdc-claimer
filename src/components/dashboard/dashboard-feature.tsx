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
    "66XpnSuGdeX7rDKoYQ9JKtghFGBGjHJ465hVUsNmovDbR9Z3rrz54HswmZFDwxRuTHecQ9Yfp9ghPKqkHd7pRn4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEF4pW2g3C2N8WL9K4Hia1JeKnbTwhpvPW8HMNAyc6itJU3DQXq5g67M1t72TEqtxFbsk7tZ6ViuLuMfMjogtvR",
  "key1": "5x4nhKXfxCESpzbSPfDMPRatXWEYheYnuupkSeHtyRZq9mceaBqgwcsevXhJWqT1SYPjJdNT7fdjcoD9kJEX3V4M",
  "key2": "3ZeLzNn1gJC2qpZC8H8VmaMGH67GVbAUEcb6yciLKggQwa6EeWiAHXRCUA3D1CUSYPHpdtsw2xRFcFeypy5a2Uvu",
  "key3": "KZ9P4WoVQuyz4pnZL6pcsYn3dv64f7xFLqYPXJ7vAdopvWukinCLRmfjQ2a1agfh66Gi6rA3tKiUNaLmo7YLsvd",
  "key4": "5rL5R6mjKv41zrecQSYaURVHBfyCUagTS7m7Sh5VYCVRgL96ULmG7FqYTNvDnPypKQ7eExSmHDpCnfRNRxxWPK2P",
  "key5": "3DXn97ZNSN19vXmN1VegvCJ21QhHiSCia35yZwrfs5EtzCQvbZ1CV3wuWkWiYV3sfT1sgvU76h2nnpJSyHRAtpi8",
  "key6": "rTz5JXEw8ys5BiXHBhFKfTHLEDJsmdYSN4GxYz1v8jrrNb1MWXB3sT1p6HvhhyXJx25rHYz8v2pYt69ikXygFRV",
  "key7": "3t525MNP23ZH7QhwxaCfmfYm826SpN7durWVD8AmQJR9GB3EtaBTpgFBG6CktVZcyRwHZhGZNTn4A7YKuWVGaPBR",
  "key8": "4wQkaqncGC5NBT8gTM3qUGZLJoaSc7XDpGWbWfMFT14duwgkZqzTqU6TrQsDThXTo9EU8AfyTDbsnUVzsZgzKofk",
  "key9": "4zkMPvmHYsNpzTj8KirSD19GrV4qADTD76J5HeWvjNQhz7gtC8k4RcF7asMxq21Uoj8xfiA36H1QvB5vSAabXb3z",
  "key10": "46nYjZ6PYuXDrRUKiRk5hHpjhBTwbJwwYXvTgNLjATpbcpePeXXZZm7nfo83QWJ9MezNxx8gdNSNS6JZRN1zrJkA",
  "key11": "2aUTyD1ohipK2PKAj65X1nP3a6REqBk5NKTsxCeNzxkMRkAEczZ9vXWCC81TJ34ap5iPEp9wBbc7ktb8SHDFwCh2",
  "key12": "2GX2kKdPjpns2X27TB4bMSH92sQHEQHmk3cPE94iwNfY12w45rTbnzB6a5JNNRsj9VykodwdC3SccTU87TH5gmDB",
  "key13": "49yZbwjT8VcfV14ZLnV77yv2a7zNTMsMYsi72Y34N96tVnUiUTg2bMLbF7hUHRxcerisEWhzFv6FvyHSqKPWuxzq",
  "key14": "4P5916ZzFyBgQL8ySA3MyTe9AHkR9XDPEGDULbGy9QZxXre6egYm3GtKCX8XdMeHvJ5Y51dnC46HTcKgUgpCXxk1",
  "key15": "Mg8huXUmQum9BYevWdi3B8x9ApoBQac2pTwQdKXUDKUPj986ziHXTj5XZrHRxhBXQPqMHxwjasUga8baWFJJuZa",
  "key16": "3Q1Pvz4d7rjeh8QwYBPdwwDxR6aHSpAT31EUevjZknVvsxaHnEEJHQH9FFGkderVYMN7NNLjTVzcYmQNSRMJj2Sx",
  "key17": "38eNqgX1p6VPVg9pvDhvNQ1mpQmCht7J5YqmMaJBweeeotE5tEBzTw8VQUmevPpfdUY2CiN7j449oFR9LnbB9xjR",
  "key18": "5e6ZoMVs4wpJnsAk69fvtEEjrVYYSmR7Q4hZWonTZDYX2HgpxQhup8jv7n5KTuKuVZG8frXvpuQrUWYiJNT284KK",
  "key19": "5F3hDtejvUh7py6TH4g9mD4WE7z5cDYPCX3JDioVshZ92ULMtQnNvsMP3Zg5c55cFp7m2ETcMGVmTvKpxyFT6xLH",
  "key20": "J9SZD9xFdoKnrQ4kz2wDnkuxXM5UryUgPSsRSPBCu8Tw2YJTLw16nih7ZVaMKaYijLJKQRkyeULFefX9ET8QjHN",
  "key21": "4BaK3DRQxUowTYis1uTz3s5THtxXNBiRpEfh7irHQXyzE3Un1JG77wa6EAEBgrUkw3dshPYsgtaMmK6ngnWCmiuP",
  "key22": "3nRXLxq58KSLjvtriKUAucy92wHFVmZS31iMuvviHNmRtX6kLqrPneG99pBtRNf2Fc1NQKFqbTZsSJHv3byJG38z",
  "key23": "59EMzaikJanCh87X1TArncGGoXV3NFrSSj7mmPVMNSbzjB3JJ1XjbVYDgwiUoayjoN8Rn7RroYWzz78UpaR4CT8X",
  "key24": "5Y3cYan9qpXHLHVuXCUvWZ8t6mQkQLcbeDAThLKCxwM31DxsSqR8njTjyMc155mtiTmEF8c53mWiWz9kCn57yN3T",
  "key25": "5WzY2Q1iHjUku88XJsoW3XhpXxui2g67uKWgkPukAZSVEQMwRtzEebcqNEUVmNDDasK9q5NTKRQJekPQUsJcbeR",
  "key26": "MAitNmXWvsV3MK4jJiL54XQEYqWJxfCWeNBu21FpUnE2iozdk3T8KyoPSYNgTy82NGR2Jcd8nhkUAEZyt9R4g2u",
  "key27": "935MBJ6fpzap5DhXUgq3uTSfe5SDH7tjwHuFzfqh8z5hJ7Paxt2g6YMhdVfZVkS6D5Ef1ZvGpjLV7SFuCMfYWSL",
  "key28": "4mpX9Qr4u7xwoJQaPDABaxprdJ4Bi5Fvc9nRBJ2FuNJ3Sc6FbGBiazFJKiGsJAmVHQnRUZ5SGaXkbmYkj6NoKt5C",
  "key29": "2jY2pbGjiKZN4Q8eegzdVPALPPR6JMtgi8nWHvN2N5AH8Lo8L3v7y2KPTzpW1F9pKZ3h8wmB4ALuj5b4cYa6ey7v",
  "key30": "3QmSGy5qEfpgnRzrFf3hSjRPyWs4bDPApQsFJGj2tKYVEEyqy8ALN4Q71JzfcuZgADozBuK7xqRLFNX55f2TAJhj",
  "key31": "3tgB6REcr6AYz3kCawGUBQhA62u4otytqBJJRrhtbpFNrjuN3T45byS12KrgxfftzH5CVWJceVbt2uiYRWG8cf5o"
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
