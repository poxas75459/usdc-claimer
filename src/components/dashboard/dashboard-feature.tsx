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
    "4WRQ8HCkKRfhvxZHheaev3KVmc3Fbr2A4fFukfUpE6zDx3sJR8orLKhPmxn6xkTppcZZ5YPem6cJ5M3ywRLY3EB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qWEYwj2ACx5bj3pTLq5kw94JCDXMMx8atA9anBP2p2tpHheTPkRDSE5Ji8h9vYgRMKYn5WSQP3wrk8zv9s18H85",
  "key1": "49SMRFENPHfAAA1gZbttqfbm5qTb5oPGooT9gV2VqbrBfQCfKJtPU1u6DzYGgnCJwjpckxcqj9c1V4k4XCdupu3H",
  "key2": "4sMsAAZRJwFrsatEfWsaM6zXH8ECTKZwUxZozQFNYHwy157qi8vAMjTTGezc2hG587GFWgaTGdzj9KHbzbFoKjh8",
  "key3": "4RArJm9RH52DJL4wNtgFPxLzwah5gFZyJDg6YT68j84y2BPBgKXC1sk6tBAJMA9J1ZVkx6h2AMEmtoF7DDF1aYvk",
  "key4": "NCSqhJcknM4YMCieNmD6ynosxPxJ7KhNbtR9tmUp72MVzxWnudN5s1zyfaxut3BPrJNqHSS5s8vVMqt6qng1kSJ",
  "key5": "4vrJKyNGS1samKAwHLwctwpp6xaxBzQkcaLr2htYpiUaLiihZ65a9hgmzVH4T6bYRZnPTP3ywAe1nqM8n5p7f3Nz",
  "key6": "5FCHZXj9cBzfriYF6UTfAohoxzwBCMNbWBLSCwNUvbTYQd79iZhd5Yr4wgtgChduQ6wGJt6RN5Qy2R18ZGwrEwgo",
  "key7": "4QuJz6fsWVm7HywQKNjUEjAXHgU6pmfzbU4g6XFUnjenRKTbGJ9bNxjDxphMBJq41fPVhB97gcRDgqmUnNDWKMje",
  "key8": "3hL9x5TqngzwYsoD4NyngCc39MFM3hkSBEFntht7CEYb999WRhEgtua2VG4daeneANhKJZoQPDonSqg9KGNFBVfV",
  "key9": "2wXZW2JbJKpzPPecAn5sYBwcJDhCMHwjEyET3XorbCHrWHN2szTDsJRMMBQKxoazCEwu87ZFKwoeP4wygmbUvtYA",
  "key10": "4TaxBQSK2BkhyLJmXfuUTtYsShe1QovRNT4iWW2zqxtFSsVgmPD9p8JX2shR9xEMbWSWNsfrnyWHFHLvvj2g4Y5t",
  "key11": "5qWpfL4wTEj3EuGefftDpDoyKxjSKgZTV9VMKPMPp5GYzoKN8e4sCDGV3igXeKuTm91ne7KW5r9NVYBqybXbYXsF",
  "key12": "Q8TMCYWwJuZR15B8qT8rXwGfz8r33jY8yrtu4L1MDCcwCaEseuwSeCGnHomeHoYZCyCHerZUornXZRF7i2Gd161",
  "key13": "Z13SYgvizj2D2nf6xJwjPYDwTPr7EM5HqrRL2orpcVehL9Xjf4wTwsFPJqZhzHD1ZN6iUrJyrzFyL4AwxrcT7rd",
  "key14": "4MXkxbnMpHYAsu2PouzK45x7LwvnKs31WiwkW8umQRSoRGWfpDRYYJhNuXCKcMbMSLtJxSpQLwuQK714ck8g8uun",
  "key15": "CARqnGiWZ1XnnG7e8tpBusymWQCbqPd9K7BGnMsqJWfH3AmpjBLSrM1vJL2SCPs54dHfAzsyrRrVkYQfXhyeXjm",
  "key16": "4JL2MmkydL3q2tQ2macMcVATszVvWF5pCbSVeq15MN7V8kdHxPphE31R5AhM3N5DadsaT4iEwTbj79455sBsbGZM",
  "key17": "5jG7xe3dGq8VFcpNgHxD77UxevSwocwrUfEFou1WAs1puTMsjhuSEbC8avLN5ChCgPvuoNv9RQzukZrmrX2xP6Xz",
  "key18": "2N7MbKU4SSzLdrubu3WH82y7yKBg6gHUABvGuqzTuCEXQVa3TC6m93inRz2D1Y3Lswz6S22AiPRcEEBi63yCmzaB",
  "key19": "3DMxQ7n7vor4HaobDf6sh13HJH2G8t9Ym6c18webr4xQrycMqG7mjKXdfJk9C9NFLK8rnpjkPeQQEgHaLSpQeAqL",
  "key20": "3aatCJx46AacgdE4THGqYzRMLCV3E9qgScALscATZUSsYMDSePdK7Wyc1JStmHCJkJznzFcL75sNDvHsJUQVNkSn",
  "key21": "3paGG9yvTPTTXZCKifu8n1hhniB9J51wTRTEFDttNMcnaJjCdrDk5zPvKB71NijHTUHCej8w9HwgRXTCz1QmAGUr",
  "key22": "5RFfYwoxgdeUi5WnVDJJboWBCsSU4no3CAu1poKbdnGJEQQ3WLS9iE9mf1371TyyDL8cXNi9kLuopTKfQTvYcQY2",
  "key23": "3G9Nc5deqsZ9kFzq5cgem9pBbJGXAEG3AzF7pwEDvqsfa76NSMwisKdVQvKhWw675nCWrjHY1uwjEtz1QdGhq46K",
  "key24": "5wc2s9KXUdwhWkwJ3WYYW2ubR39nUgsouwzzxttnu6rRfakPmVjEDENPnBR5haK7Gp2iJo9nW3eekh8Rn3hRXEiL",
  "key25": "JDpHsroQxbtgpaEsVn68xKqdoF9VG2KoAWFm6krRM7qxHceMEjB8hYsx5UNtkFKwqc3EL6haMALxrjM2gFQo2i8"
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
