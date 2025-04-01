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
    "3JiZYThcAv6qUTJwKWyr9LK559WEnqqfGfmfpQuyJGAnkauRgMhi9LjUxLhKv8cEgNznc4wKMr3HFqQ4dHEpfMa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z6XMtdcQBUNntUYrP8x3EEsnfbCgsX1FuijVLJHjygqcF597UcoMuWy1nJSfXM7rL7XjcBp3irr9MU8JQuFFao1",
  "key1": "5phzNj5uET3YQTyjogBLFzZpGLAh21gmZ7hgE9LAeq7oWYeJsEYU5remAGYTJWMgfiXgiFnFZP9wPBB8boygXsV",
  "key2": "3mvytSf5iHQ1QdYDYpqvyRsE23MUaUuF2cuJxLEskFnVWnMcRSULQgKqQzUeJDXuhJE6FC8prCRGkyT8dko7BfHf",
  "key3": "QNZgTEhpb6hrCoSJ69K9qDTiHjpuaVQtF9jJazyB12tSc84xVnmsHVyUEkitxqeeuyiUh6uhQW8vKqzpatDxiGa",
  "key4": "4Qr1Mg6H9pyKr8HQ2gHnZq78vARAfeZqCCLqmPHNhppVKerAvjTVzypxcYt46m8zD8MHtcf4nSzoRDh9Mg44juF3",
  "key5": "2tAix7KQcbBKn1WfWXee217UmkgQHwweash1t6HYxtvHbhcjn5THKURztSjh9mS9JGCbUsKBNppSp9mLaic9XEUV",
  "key6": "maQCvRkm9ZF5ZuLMobWceK9d67cbXesTgZpeA2aS8W5y8Fk9iMcJ18DUcZmUjdbbA4cnsxFUPTa1nhKsBRe7GC1",
  "key7": "67npXxHjFjWHFKbKuBic2EQccSwJ6UDpM2Hq5kSiDbC1PnbkqfNeAReXLXr2cpbMLPP81GU2YZino7dpkqSps7qs",
  "key8": "2GqryBWuX9B1PryAVhK7npLKca8jhX4uckkd8q42fb6cQ8wkvsvnMkseekMQWdr7e59mTxHqmrhwJcLU9gpeCo1x",
  "key9": "62NRY8nYAfdqSAikWBSAQzBEukgqSnXQbJKv2ydG5wCQ8oEVMiDhnFKySh2HUWBaKQoeeeDkZms7pkXYAtw1TvXk",
  "key10": "2F3ywo92qHFFoPNMbM39DnZxMQg4AA7efeBg2bmHv2GN3DGkT3dFYxRwFMEcTxYEvgwE75V2SKFPTrr8HoeotgXn",
  "key11": "5fbxJuvdPPmJkupZCyZ9k7LFZp7XhXWH3K7bsuJvsGsbziYCghUSAccdHEgJibrv3JPLvcmw7mLGYcRqTAoHe1h9",
  "key12": "4wCUmxZRNQ712jigPHJYSMNgCuSAWupYrG5yNAMChdEN6hNuPUED9rZuCVHJh8C4YdoWikRcF36a1F5ajRmavyp4",
  "key13": "3BoLqtQet1kMtUj4Q7rYQ4agtRpwQ7vmZr2FNqjMMnAp4E7xP6Sj58Gfbgu4cHj9QZUR7dPUe1qxvhx5SUKAV4TG",
  "key14": "4X7is1A753JnwDui6tSwniu1E6ZFcrXNyhthUazLFcsusW3Qssam3TKH2EnPSfxvdBUxfdq588AD35mNnhMDir4X",
  "key15": "3kuhWukeRphxphbSrvk1cov56YyTjRcW7M4j6njsm6nMyMd6uPe1UJEQoA9UtRGsYBdsffVt4EWfDbQ6jsqAuV6P",
  "key16": "2Wf9azxEsEm6ZeTerYdb4Y6C329LBj6ADkrUUSSR5Ba6nNvjkANdVuZu8vGdfW6VdSEan29VPrnb5QEdGSLRkizm",
  "key17": "43vPfEYb2XuG7FCS64nf7tvhAHTGmxdpFK9rXVkxrXUkPPidMJZkADHCCsuYv7GJ5xozvnh5N2MMVCExrVP8LRoX",
  "key18": "3fAc9fpA6WTKuXzr3MHPsTX4NzE8HWUh7EYTEnrVSsDyawwAyk8QFCbW56vRCjGSiVwvfaKZygP1prYdxcKaGhHF",
  "key19": "BnSZ2Z4SLUju7ryzBCXkpfEJRyttLA7Buk2V5iqVCt7fUTm6ShwGJp8AMojiSjKfdZP1j5FGuZhTDTMovGd6bNj",
  "key20": "DwmCXaQwcaMdcj1mJAhr3zKDYBrVP7i6m6BWhEVJTc5gbLtT34FnZJqRiDSMPfHg45Srf65TEAYy3zJvYhE3vLK",
  "key21": "4uh4iVBCstQzG5GKYpK1xMY4FZsMkNySyvVYpjRyLq1smQ4kK4rscvvqVcCbP2Wiy4sNtSkjpoNoy9BPsbAmzKZX",
  "key22": "5upRLsFJcaeX34Ph1eimJtJtjxrv6L41REu4AjJfPaZJDGaVz9it9XrxG3Gs8x5YX3jNdLYsh373L5UTr7Y1cSay",
  "key23": "611jfU5Uisq8fCsddFGMWRVF4vs1ZC6JJiPACyKZsyavwQgJJ22rjHwuKcWLCncajVbK9MFdTspTrWvuhon1aixW",
  "key24": "2oCwqvFDopqxmS77KAyNiSiAeyhaYzJZ7pY1To9uiM8PPAqgMEgmoPjM3AZZQ5ssTb1ckcYHErYzWah5fpHaw6Nu",
  "key25": "4eGBy6x3uQA9fQc11BLyTfcfYfAkAxnoDJ88xbhopSvwvfrQqWsTs8FGYHCJkug6b3sD7v5gXgXnVyouh5axhBaT",
  "key26": "3748B4vGAuZwLnS8s1Kqf7jJB9FzDZPRtuyX94q9wzEfNjuSFPaLoauDxm35AcjF68e5dKy6peMswSysDig5Xg2x",
  "key27": "cseG96ce1oqWSkSt1xydvZyxKtF79pLEx34YtG26i7KweynNAEfEQb7VZDn2LGJ6nv9NxwPcbkQaqzPZ3DiL2Hk",
  "key28": "4GBFy1vPapUw6gi8HAEZaKJvqKzqnhJ8y9YfV5zK1CBA9rK9Lx9PwSdpukw8UeUuATYJRpsZuY7zPkQm5FCUvfGn",
  "key29": "2X4CKrSdEkhUJb5SjGvSa1yXVhFQN3Trsq7iKahfDbSBKrkmdshac5H8QqLQYUuxz4E5mjnR4HM7siUKq7J1QVun",
  "key30": "3MTiV4Ec3xTPz1kxkfUZjETmHSHAc84hRg9cRZMXAN4MsELfpzqqAskCoBsEGShGv1B7rmkYsPhdfL3sfu81FnaK"
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
