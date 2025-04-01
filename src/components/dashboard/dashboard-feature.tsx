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
    "2R7o7YxngKuBjwsF6mhNQ8PTz6mwqAkLijBFostCvSpsCADKWA6kmURpKAj65YzQKPa7T9umEP8bnWTa37LtHwu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45epZ6G8DGJM4CgGqNaV62kGzCtDYCEEpWi8yCd2ocVhgZw7tBAnBWp36iN3gkcJDaehjGAtogAA1yUza7uFWvoA",
  "key1": "5qgJYvn8gKV7mNpbmjBCcShJRKXNWDKDMwfUMsriPBDexS5Kpa8y5GhrJaVSj6LbookzggWxU2tQY94LgSXJqsmC",
  "key2": "2oKvMP8bQ7qdXhkERKEnEDz34bC1Z9fkPAntH8HLtx11wSJmSHdUjPAXbqTUfNSkC9psFgnAxU5hvZP1XMh4qE5e",
  "key3": "5TCDmaP4okJjHtPg9v15VWCBhFQqeJHP556um4HzGeKzZeswJZnQQH6W5r4DmaxG6fFTGFYibYYFvbyvzeWvp5ie",
  "key4": "3V63dTzHQcrFMYvqmfyY4Bi6YnsDt2knvw2XK87AU99VzapXkrv8QqGnq55swp9fyho78x3faqoVgxNBkJp277mS",
  "key5": "67kijM6fY2hNfYWkfruzf8ePoBV3viA5z88io3MSfxk4BdTLwceYR1bFMdNrYN1Bhh3QiGgzsrDJYJLmKHmdNPNS",
  "key6": "4jAsabDuTz8cMruBp3dqeFGymFJywgtyyns7M8dNY1WrsgMEwfySxMezFY6vHbnUG8eowJMjD2VhWqErKpE2KzrT",
  "key7": "3kHac6hxUDhCtoRChBWNUqF63cPZ95cnsmuGDeWN5rBVsW8wUAuFTmbfguVbx1cJxfpHsaggDXKAG22JxtgqokX",
  "key8": "21d2pX6N5AeSKSZNsC5oEfdSTZ4oe65s3He5abdJxUZYtus7p8sGkXM2fGEP2MqgooaHWSn4uvF34RSk8EBY7tom",
  "key9": "47rEFg3eAsD5ej5o34GUuEZLHAwYNeyaWVZtZBQXcjdar9qwNA2QznCn7Wjf8caCixF932Yb2R22hTfuChELFToH",
  "key10": "5VJrUxu7NRTyHVyh95kxMYuiYy9oUP7CU6grTu2KscY24LrJHUc3TtTc8PWre3Qvv2boPrZufEoUUM3Nohssh1xd",
  "key11": "5LdH4n391dA81KSJaoz2GS5misxsZLdrXHCVMyMxm27zDrALPZJwFPvQkyuPCDzRJ9iF5uZfPi781MKph8GdJR48",
  "key12": "5zi9MT7p1ZDp4ECfpzc5ckdX8JJwa8pbpZcRrT7634L1JwY3y7ZaRTbVG1baEjxNzTwMhdkx4w7XoNuwJxMZwX85",
  "key13": "5oBS5MbCS6aVbKhEGpRjcJPJ8C6igfFoJotrSsR4eJ7LCcezuGiMJxcktRoiUv7T37uAf6vGUinmkeKPdfFMSZt5",
  "key14": "czExTQjTZBSy9KJ43bw6es15VMghQ4e5SoDku3XkCiinb22nKFHt1t52FKGBQ9YkyeX73fxzGES1QeLvnmgYbKN",
  "key15": "2UYt5TSRFkoFqGn88n8VeDsuiJfX5PrPeSBKyryY3j9qLdYot7S3obVxXGjxC7EaivnSzTjN6HQUoJ6qxcctU45e",
  "key16": "2tUqYWbqyEdbNY1AHo6NP4x6xRpfeTBVxkBbC9siDBp7aQ38MTEZFaDGrnZckwBgdXA9SLaoUZxYCHLzxRXt7qNZ",
  "key17": "2omrU3VwGmatEzgVQzFahqT6FjaGcT9pWXyJEsusobC7y1J2SxiSu3tmoabsXuaFksue4uwF6BZoJhNPsssUH1Zy",
  "key18": "5TUQeBjmDEwGtRCAoZYAkVHfqf5dXT6XaovadjBEH6g6dMnR4Q5h7czbELRHGDY2CUCttWLz5Xijc2UA8sEQkBFf",
  "key19": "3pMozQ5ugEvYEpnaLMDhqLqQz5EV12t8npE6UB9mt7544ceaSLmePtHRCydCmVDY351QCoiEyd3ME2HWt5BpmUZL",
  "key20": "4kQHsexy2DxGHTbbxKJm61d9PH18fiDa5D1qnYJjKVBgjbQcX8fPFGewhv1ysgSjV6nQk2bJkxZmBCQui7jPoXLD",
  "key21": "4N3o5VWLrHY5ComsrvwesGRXRq3rjGJqds1nwShDqZ413nMdcpnYPPHmc1kTE4BVc89aCh4kLq2RQmqcD6UQoK2u",
  "key22": "5y26KUCsEzSj9dRQcux7DLNdTgKMRu2f68hehXLbMMrccaWF53rz2oBFhehs2bLfrUFHiYgm1deytdxqWNDAy8iF",
  "key23": "5RivXvaFJYRJJWDzGoAWsvFp2xMyy51zy65aMJAEm57oaZzWmvwQTo1m4YGiT2R8t3cHZcVMSFkJMKUXdSzAtppL",
  "key24": "3R7yE69SXY6e7XvZaMTLJosBiWNNiCzZANP3oLiFoujeLuPFR6YAxbt8s9FEpMqXQJ1tQWCXRXAu2gjNQGed8hh2",
  "key25": "4h8b737cZ5aMekQRoLJkZVhbr9oP5n22hFoRLWozuCx7n6xEqnZSBFxo5SEq2evqWvpGqSzVGETwXmt9oVucCiSy",
  "key26": "uqJsKCLmm7b8DjX28uPVpEAV6QAk3BAr64fZ1LyYHYCyEHfNLS7HYb8ToJQ24Vjned366LtSQTEa3f9LEicg9XN",
  "key27": "2LQ2N27v9wjv6qoeQN2EWgzf9zFkBq5xZWCMVD5kozsRWN1BSC4wvbpRN9gTJLN8QwrHSQJRBGDw5d4Umze752w4",
  "key28": "4cn7nJBuiqVpFE1gB47oCHaWPJWW1aseXXTgKu312qCh56WZWpxjiRHzRjcJF7Jv9JWyQZV9fwf8w7H7jE5ETos3",
  "key29": "56dbseXyKwbHy1GERFJQkPW4VdbCzziSvkpQScejaePRreEhLxAkdAP5uy8uT4B2tVMNF9vAstMdFGdPi86MFn1X",
  "key30": "42jj2CSiLtSfSiZRkYZC3u5wKgN8KgVVH9zCzE6A9XEro9rjqFdHZfg9Tg1ueP1bcFqkQrPvcvLfP45GeDq6aJ1"
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
