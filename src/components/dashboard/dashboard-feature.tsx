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
    "42TRXc7VKnVDRmArXdgchpMwYJTS61yUjCXjEN3uYrJWkPmbVUPxNT9rZiiaGtN67mmuGv67CaW8qreyg5T76WG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cdBekAdMsUcofoA7BsxcgzrvSK5LRpmnZ4DD3Vp7fNN9awrHeHKdmuhraQzCSonWtm93tdxKxzfhVVfhmgZKfXQ",
  "key1": "3gavRWtwdmtfAJeVj5WYQtiBt5Udhh399xtLhrpqen3PwAtGFXmn1mE7jwDGBXttJ3p6vifUZn7UxsdqdQQWjUFB",
  "key2": "4692uob6V6t7NXhRiujzyuZL5sZnwPBLfzRENdJmUKvYZ3cQK6L5wKVvHFp1KuhjGAFA2fYUeSWLeAJq8xDM3yn8",
  "key3": "3PSeKncnQvdBya6aV6idzynroJ5moPtQJmxr6hzn4yacjEATKq5rEU7yU6dgerJwZ2Wgmyj4tLG37TLwQnq4Z8Ap",
  "key4": "2nFahK6RgNdjrJEiv5W3LrPJnFmck1NdgJ7ywiVZKuvz7AHvTBFJxuDjHo9iMRJyZiGHfjkACvvqMsWSybpzUgux",
  "key5": "2nmuTnJLi3dj5oePcKzJgMmhLjBXXKZgkc1AcFDkTgmgsQdndN2VYopetVN5pdkCJXuYLyPGnUsLPH7Msyg8Ltro",
  "key6": "2brdrwqZywAwL68EhxzXNhPtRPcSvTQJuTqGfcterFkv1fwQw4u4DYih2QxaxqZpvpCEanb2ZqSmtrtMsXVvAejm",
  "key7": "MFCGgHdtJBKoCxYZwEHNoqB5j8sK9jiTTvVpDxwEhB7LtcD3MbTvtdiawCGDX7hsXRbCaFa1AVHKCyyY1vsq6iN",
  "key8": "4FEPoPhrHb2aRstcxwFj5X1z87e6Pk8J2vs2t3YeyYqDwrxLhS7qT62trAPY76J2Xtn6Q8JNX5HsgvDyagWNSb5y",
  "key9": "3kCFrkKjtkDzCMTx76LywSUekiHwkHM7nPF8bYVDkyp8qEbMKggXkAXfH4xsiZCzKgojXXnkv8cJAVjF2SpMbn5e",
  "key10": "4NhbZm9B3BBJ8eDCgUuRYPh9Dn9s77BJnNRqKXBzvijzo9LSrDGGn9Gb2k8Y7bmJh8CVpGb2f6iJKyhS5kxbWrWd",
  "key11": "n5KkKEtGbLEpGkocanDZaWGu5rbtGHFpD4Qi6SA9Zwo34SmEt4fAYPBjdZzbZ8PfrJEqC8xRcrMysjw4MYDwTv1",
  "key12": "j2agEgpY6oSsHg1x9J6tUrA4tjg62tixFanjzxZQrGTdQPxCfBTroyHagQpkTHwRCq9MmPH2dFTPitZJSJ9PqnF",
  "key13": "4MTuuyMBEKmtxeBz8JotnE78bHAGSWRLduAu9GpBD95Vw4iAc63vk8d4LEmGCmz9Ky7xH9nj4hz87iMic1qczMrv",
  "key14": "5mfQCj5QVHvpoEaoJW4F6SpBhvMAPAmRjXxFQFkFqos2XtMi8PdRLTfrgheQzo5Drj6ygpsSA9jTUTugFyMXdcFH",
  "key15": "49zfxdeCkETgkDiwbYMsv3SGRdkjmowhduyqu2qp5MoiRyhcF9v7jrGuECAk3EqEC8HefZPARJN5QhQoEZDVRcrT",
  "key16": "5wCqZqRH2jWFUyJ7544ZCW4csRhRbbFHf5t1NWE9iq3NcdFJFhZ1UyEf2cmbhT9yR8UtbrcJRZ1G5Feiuk8Deodi",
  "key17": "4kAVPihxYkUediDTjjr7mbvv5yCAvpwGNHoyizec21ppS9owcf6V6rtWUwWQ1KUmUUUxT4p38euLLZguoihx1hJ7",
  "key18": "bFQ7v8KNqDo3K7eArZvoaCdwHb4Gq8EFkJkRA3S7bzL9XwFwwLfH7z6Q73nH6bsHmFQqFzPpeHidDrU4yqAzfze",
  "key19": "4Lsdwtk76mpGwP6Pv9egAcRygKYRtEEYXbwMqW1fSnbhDU9K5ZMnL24UbesQAVYJ1icJ4KcW3oMaSWWNDiBhPPPC",
  "key20": "2yhs1HTgqvxyosq3fii3rpsFgwoexkTnWMKxGR8dG1nWcaefxckSCikC1CJ9wRvXPnEu99LsxAspQYgc1mG5Ha3H",
  "key21": "KkRyB1ridbH7NSKdPDTJYZzGsbvfvHVeG1gjEs1ey3w2vnhTQdAu9CgGBAopzbEaL9BVEqd8RhLq186T2E9XPbN",
  "key22": "XQbVB4yyycbMKnGQGdX9oJa5J6mpnFsAJh2j5khxMfRv2irZHKEPNsPaMfcDYXoHeVseX5myBPxkWUzuBEFGUny",
  "key23": "2eBXAsVbGLRrWAg6qJGco7gg3hHt8wVQ9jMyRCiEADUwoP1aGD9ZRaWChf9JwQKTwEJnXJ8FKfdhvXcTmJQFvS2V",
  "key24": "4xAUVxgc15jsjqUS2PbudRF5iD7qKW63DHNG9im7Wv84DurtM1XGw11mXLXr3krrJeHAsgCm8fksW8ybyk7pZ5Wp",
  "key25": "3vak3GARJsmLzD3r6Pz8fJtBLnM5zG4hNJ8PBaa8FynjW6wq1DShkxEjxW9qfwVSydf8cmqUdLcY9WAeYwWP5wqo",
  "key26": "4JA5C15b9PPesLobRSzJwaZzSEDMwm5Yk3iELt4jwqjEUxmsXyRBtLxrU6V8MPScEv9ForcHTJpXHkcyj9vhqcLV",
  "key27": "3phVgxzgy4BPg9CoEX93suEKoJf2zkAob7p5oZrKamiddAncUC41oUT79DUUz3naviSWdtsWAcUMKzzJmHoQ2ZJG",
  "key28": "2yS5Cjh5iVqh6s4VeVo8ynpJ5bQbx17sEJT1nnG2TJ52L5SEFdsHQHTSN91brK2rsdChUsbUyynrd8yZ4dEsoYxv",
  "key29": "4uJPsQ6mudWmKm8ncmHbi19guyBB1gMppeRNeTFVGWV3PRfa8GEXjXuzCaXq134bK9vbpttGojGM2ndZZGYXaxKw",
  "key30": "2o9PkprkehsXUmuV8rHbMcbdJ3ZjKuo1DYGNUE5GbEcNWLNqMMZ5pXSz3CrqSgkXHQ2pfJ3RmP1h3zPJj3nizGd8"
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
