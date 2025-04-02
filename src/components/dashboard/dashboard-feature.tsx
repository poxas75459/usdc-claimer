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
    "44wyU3p1svmAyZ3qCBe6Qv8j2xnVuevXaE7kzWd4cgLhk5ZjmfGsjUbsjAVyptQUYkpX83SwGGsdwxnSKFvH2bVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Ck1zRD36cHccwHnDLLSPJjzbASwCgVyDyGgVWwVfVg6VHxoPcyVQobw8r8AY8qDhpDxLwdeTD7X2Yo2YMtD3sk",
  "key1": "4w9MPb6RTMN6VzfqKh7RqkFQKoVuggbY9wt1TysDQgV7uGhEL7L62r4h4JGCYDTskVCnwsAN3yye5DGRvBBUPJmd",
  "key2": "6Er4bZEq5VwCESQvcduvv2JjQiuSWDUEZoZdeQof8Y7P2nQaUytycmeZYPVMsBoQY3gQSeCPBi7P9vGSUk6Czcf",
  "key3": "tvZGgnZqYB1CSXoqWhzi8mcpHvppsjLtPYocJ8Xy1Wvfm5CDMe3ni9yeyvZ53QvogGSg3n2xQR7QNEhaMGf1S73",
  "key4": "55SF3eL5XxVnWBJVjP17yA2wDR8nAXkFeUADQkEYt1uKT2hdE7X6GtA7EeRR9AW8NouJKBL5SoMxa4Ci9XEETG8J",
  "key5": "29RjP7mKDSxTZg2Z8m8Du1HWNMc14U5AaXD7zwvVKcG2Kt533gGYsgSt7Qo5p8NAYnS82DGtytDvdKhS6YmyrZzD",
  "key6": "5BcFeY1RGW5WXfEbTMrcfGZw4gmWRcnkYvMvpvzu1xZ1WTXnH1mCigfXWfbYZXdvNQMcd8V6tubMTKCMHoJBFX2E",
  "key7": "2K3cdyYMV5kn2DSfCAobZv4rPdLsCiTpkbPhPcR2afpPaM44HQpKNBdY9pKg48sQPsrJdRBURaTpQZdyUWs4e7xN",
  "key8": "2LTmR5WTt5myfU5genxsijt8XhZGKXBzK3T39mFysKzF7r2ddnaN5Jh8ZwjBD7vyJ67v5S4UsRhheL2QVrm1xxbS",
  "key9": "bAyeUhz2KAHh4n2HmSfncbsXAZ623qvgRNCXxRCooLkULDajj2DR6o6PMoqWEMf9cxAQLNf85kzAVEc8xP4QgSK",
  "key10": "3SHyLgp5PLuBBHKm12bfvsiMrLJvwCRf47Gc5tmYDzZkqw7wNYMGzN2zc4pcQm7cs3SBadG5QfkiP8Qmyx5CWPN5",
  "key11": "2QX1FnwWRzuxVkA8qpkpnrjCpRXHQCtpTt1JXHkg5Rs47FTfbz9t7Muh5Mzs6xocDDoqyK4Jnxd39JCxbCxccBdm",
  "key12": "49T8Tiquu25qxhfqE83qVaMBu2PNLRzVvXPkpEnVN5YrV2Ccwtw68FpiQrpXco4owNZsQwSFdeQ1MxxASuG35NTy",
  "key13": "4GRNKorJEQJKZP1NmtbE3r5M5PZ2RBtqoJP3vsyosDXSaanX3swUBRqVpMqQKM4eDAaLuqcfhj2QyDhUqQjSv995",
  "key14": "94W4hS2qWfYqBfQkQkeApUQvTZ4oemKS9DhdxsRK4tyXcVYg6G82BxMZWYqB6jz8w2wL7YLVB2xFWMf1FDFrvqg",
  "key15": "3VyGVsKjoRiMXqKSFNKn5UeHzgez7iWZDjZvsgYGWiEGDmPcWtF8B7sRn4TtTEK7J4qtwTt1pPf4xAqKBe56rVwo",
  "key16": "4n2vTFZrFDXtDiQ65TKzgVdjSdMczsr6YG41Tmpbp7Y4YzYuZ81s4XXw1Sf86ipVC2BA5yPVq8LZQoSL2VR18ZMC",
  "key17": "3ey5RTnNMt4zAjYB2Rv1Q9e6NwjykA4AH3c9DcJ9phLnn8biaxeLZg11GrzLDaGwpSTRBdSRisu2WUkFUnw8kG3X",
  "key18": "4GRcnAYEgnsrsqUZco3dE9Yi1FAYru5aouKPkzAaRJgw79C7aJaZAoQbHFUS7cLvzKjExW5izqVFgjgYMN8Vv2xe",
  "key19": "3TXJ1wxSFqqj8caq7tuqWV3VjJ6Kv4pLS6fwcPmT4ThnGf6AWvDtjCjQLNosCp1dmcXiUaJb86Q7dsVKcyCb1rYa",
  "key20": "3xuVmSvVhHQCbRqL6EYsEMDEG1h1fgVVnBtB8SnaCmfFziL4odCNsw4EHufxT32ma8LyYGR1AFjDLofXt26vsUAV",
  "key21": "3Jh5kqLF5kq4ZkvBVacRP4rxCby6pF8FakvQVgRyWvBz6NyGWbaJ6asiXRdYxbpKL193XSxwqN3XBbKfH5VBTZdj",
  "key22": "5fHQ9jVtq91vLCxJe6bQqvVDfneHrsxEoU9tD3a1gzT2vBatTq4vx1CYpSs7RpXm9VKjU8VFrKzYDmg9dhFSixff",
  "key23": "5XhG5hR8Ci5VNM8RqRmDmzLB8S9Z6DssNUX4iDJ1Vb4WfJc4aYoUE7jN5t9KPG1jqtwbGw8NtMfefuo6esKqkshX",
  "key24": "4LzzbGsKyt8CdMJvnJKcEv77UN5yY7fWKgk5EvqQA8wkatwK21CFaPGW6oAvy7nkPCbG4U8zHd75MbFphBA9Qfik",
  "key25": "3wFZ3FiPcdzckvhqF9gNHtB4crnKLszzyByqZTLJ9Ea6oXS5V181gZxfwgTSjerVopu5Mst2n5c4aKSbYGMCrXdx",
  "key26": "8f1qxri4oLSRCRMQTkJ3PfmEdjPR2LQm1eNHuprwq6ynKu8nQ2aVU2jxCs4LM2NZqsZU9FvC46ioRAHd7UqZpGd",
  "key27": "2By5jkmCxSmhf7of8NNdg5J7Z6eA2fNZHrqtD5Mf1jBRSR2q9nVSggS5sAFJiR6gb59dN7zhnNVaJL4k34Z5Lwyo",
  "key28": "66ZWzMfmtDPh2nmBaovr4SYyST1afYHpYp82fJEYhCcJqdiY7kRevfmhrJXR5YxeuQscA8QQiESN8m4fasSKJeuh",
  "key29": "5a9zHn3Q3evmX5CBNhjhe5w87VL6FtHN8UsReNjg1bJsnTRFMi6vMH86KNA6GF2iVPpKWPGsAWq8zfsiYmj2kprc",
  "key30": "22MZMxf9cAu7vQoa2iuthyKLpSKxVSpRo95NhYhprzBPsvtkasMGYVUWCNCwCVzMyBQgmV1bFQJJYQbjteD6zWY6",
  "key31": "XScj9SAcNbPkmWaExEayDihT8Ayhe7Hf4W2zfoUrpGH6RBfTzSq15jxYqE4txFLKwCykCcoPGdGNxvfdbLGc9Zu",
  "key32": "P24YPJ6uebynECE7ek7i6C3QrNSbMEE79tA9RSDcHwD4iRUDBbjFVTpB1RcQy879pXFZ5LPnvFDzqedmaP1FwEz",
  "key33": "4eBGCEcWTzM9pkTnCMKCTAr4ow8Byr5ZqoVFjo1uaSW3igcKaeGbyZrARGP1dPczKj6qhU8MZZj3jKjp5zYyGvPs",
  "key34": "49Yyp8FJSsaAALd4dGPWDGWSo93CSxYw57Z3Rc1G44K3NK3vgfnMD3QQP4UEywmSm8zHQ98Zq53Qqd48dTVYXPCt",
  "key35": "2k5GXRGHnffhhWth3pATmShqbvTzWRVXSrreKrAXkFWwa95F4jvFoi3k5feqD9VbYm6AeBFykdqwXFwnFP8vFrX2",
  "key36": "2zuGwJaWHntxQLFPKSnSWtuXARrAeLT4Y6mhw6dgoJH5tcGzj3sK2trTihtBNxVSXaNkWH1Hg5centrkqLZFZueJ"
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
