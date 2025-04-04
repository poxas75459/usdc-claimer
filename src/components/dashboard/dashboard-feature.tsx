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
    "5KBX376sSGPu1ysyvvSipNfwPJRzT3ueoCrrLabZGaiY1pjefqgv6sJ3dR6tQpyx3vH5rbpfY65kXiNTgYbgiXFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gq5LpZnMtcz4cXxWG11X9NtAVdWUwYHW9v2tT5KAFdqK5ZrGMydCAVx8Vw2LyeNvf6UXs6Pis585rjKVMyv7SHa",
  "key1": "5CY5RMGDSLXCKmR69QAd2mQnr8QpzEAazcKJPduAMVvBEsu8Npq1jXrszMpdG3WRGhfKmMKvsENGwBqpHcmaHBVr",
  "key2": "3ssYYm6Sv5X4QBChsveLJBtKRYhSwbtRDjkdRiC52jFN41MicigKHcEC4yujB6BXNEMhf4Zc57nTL9SFcNhooobT",
  "key3": "xoE8XhWLqFnUZ8hz6CgjMbfmytrhy2PXb3dwiJy9Yu6PdpdompodWxMs7h3LaaBRfKkivfCHUyGftYGpUhjv1jW",
  "key4": "3vABPw1KyKTPTqYZwSHDWiYCCpf3RqqiBXe3KiSVKCVjPzGr8BNrDuM4WRf9XVKSqv8KCyTGHHb7wwUJr6vnjubJ",
  "key5": "5f68rXoviQSmX5NMPkhqeS4vkhKEiEPjL7rou4eBMN6TuEAz6jqYz6mq5koEZR9QhhFq7BfyNF7XfUR3rG4JuR4M",
  "key6": "41YTdpk36HuEQxooT3aVS41ghMCJpStrduRM4AqW6xgW4Zt38oW5diwczK18GnajKaFCzHBRo9KsniMnK4yDhQEM",
  "key7": "2Pap89qaSA5VbRdUmHeoeZzrswMi1Hdz6pPdWqW4iwPzEPSCrjk4qtyEaDpS4wEYk5fNJWr56Frfj97cm5vkwhaR",
  "key8": "4XHtcdKCtNA8rYJqhVPKdAESkZGsbtrjHEmhfFAQgbpsStcMZ8PEnKhQHCAbWeMiaVhWsLYz5JshA7H74piJ2cYd",
  "key9": "5rujt84gvEpdXQRLuo9siL1WYX3tz86Gxj18ziPAnvTjXB8E7uPjqUBhLUCyz8GhKYoW6xwPE3xxjidGM36MMmqg",
  "key10": "3qHzbzXsNNPGg3ZQmDyzVMroe8pABZuYpfcg8s9dddJuXtEdbivMujzrW4dXGxzoEvXxfF61ndxFUUsF3cf74yuQ",
  "key11": "DNZTGW8yXqRV7ARinqBsfrDizFLE6YNk8ns4S4eTp6GXbqDJ7qT6VmQXFGaPLtpwP9DCDWcTFJePHsCLYeAFHcW",
  "key12": "3JwrBeku6toJy6fFkQTxWrTFWWHyqBJARTihTQGZtSHiEAuL6rcs7MoLwd2GE128kdy4apFgFPqrnvabbck1ypsb",
  "key13": "2EdFVERQuo4kTB3wkqtw97TPTjisMs6omUzHD8qcUP1W3Ctco1zTZzx6KTUTvH5hrUKHMBgyHBFutJbTcDhKSCsz",
  "key14": "47DXqJuUTwRxVkvPJRZ3wTZ9UexXCVmfJaJ28uq1HNQgGhRpqxpFeYbmntJE8Czj5ZEkhktnswrYRSKE7eVxDnd8",
  "key15": "2Mws3aKnfzjx3yNASoZLSd67AFF36RL9r9PFJYVtgaFCoqLcrwsvV5a5Qs3kCv3kc97SZgKYGc6C7F9ojhSQbjaW",
  "key16": "5DLHPyL8qaF9JwvJKPsHXi5isWCHYacDwwPDHruceWXi7YsaxwftVvwkRK4RAoqZ8CJHMqZxVyW852qmKZM9x5Z4",
  "key17": "3SnNbEXKMMHrbDAVa7XoQpsbKrgXTLTQuGDNpyU9uADM25Fz3svXNXe58vDtLUYeTK5T1fxbW4R7oW7PrkPp4oqn",
  "key18": "4xuEahcVNPGwEFiiRjt7F49PCY1wnyGqahxDWFDQ14oLWGj4um9fEEuePhNKZSufvvN38P9cZ4km5gSKr7RQokip",
  "key19": "29cCgDkJhVaKyFf5gN7Z9vRFD7DAMFejsNvY3wGKPdtDAgvtpejGQZ7TSBorVHmqdYQDL4DugtFhpeVk2KXmjA6m",
  "key20": "4JViut9m2v6iavQid2ZMBrrkpmFbWUpN1dLcm3HV1yGCkZ9WK47R8fNXLqWuwkMvQVUtaNtz3TfzPRUnucmAXwUp",
  "key21": "2PUN1miRH55du4yqAJpZatbH6PPu9kLFDuYGsW333SnZUvetPujg1jzgoTL7K9GGcbaRL98aVowWsMc7LTLJma2D",
  "key22": "4WxW8qVZ5n2NvZFnJk7Tg1GrnXE58QFSnHZgELBVndeb2jzDLntXDWWguFRoJFaaaFkLYcMbtFgAxUdG1nU3h2BU",
  "key23": "3MdiuGBBKxH2QuDZFAGd49fVrPH2yxRzb9SpiuQ9kNgGkVneGkhQJjDXdESvDwv6E836GFrZeMMjC5NCQCEnWVDx",
  "key24": "5DRNu5VmCS8n4K9PRubKZ7QWPjLeUnXhmMabLHF7nbXA58RVhtt2jHiThA4Rzq1net8u5i5DXTMqBD2ePBCnYhNa"
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
