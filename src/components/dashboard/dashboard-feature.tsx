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
    "K66AqLnRH7shQkwWXkKyEp93WPd9zC975ZQhBTZiZAWWKciZduYYpQT5Tn1SRyCspSh8FCsMAxFYG5YnxBZVRe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K24wDvwdqxtBLefpkTert2AuHJoVPSjSNEoMT6UQYG5iyPEgukBCkRbpiGgAvWeL9NvsrJz8n5srXF3TnRuZ91i",
  "key1": "Fqm19pa5R2sTTYfvVkULjR544EEZZ6jKSsSU3pBCPvPKahRvaiaaJYK6WUaj7GqEziAyeUuPKeL9aTuLt5sNQxA",
  "key2": "3qw3C8XwGHfSgh1PwBd6EDLkZmt3Ng2hyofsreUotpMXKYHJQ1nWHwDcwCM9D4tFZ6sJgHFL5atGMMoVghNaaKaz",
  "key3": "3GWedujSrvzdAEg17hCzik5CVrx9sDJzqJ9B3auxPXjYhsRmoE1DDRoFxMTBPs8gNAmKDSnq7XSAbFEx4YMvaf9T",
  "key4": "3vLXZn13UE5gAKcGodGfwW5YsBf6wdKt2SeEPfKfFQnMFUJUu79uURBw1wwAk9iwxDZmi7GFvf61dJArickVLXqe",
  "key5": "BzarJFUMDVCfNqWAdJC2cCh9r7o3gLFnqaf6Hiwq8gFF76aqSsEXjTX3efDvZdqAS9XxiJgJtMWLQfzRVuB5pqa",
  "key6": "2tM6ws7MEjxzxeZW7xbjNpABWAWWbrYYEjBg6H6x45niNFj9iXjY9gK7mAQvtKFh96MeXxa42jNizrbBoCSE5MZX",
  "key7": "3JLLqiXMzQVvwvtmLcerbEo49bAg3q2rmrZYqzygarvGe23TU4j3YstXvEN9WutNNkoGNPzP1SP4biZ9koWt173A",
  "key8": "5iGT9KPW8YbNVuu4kgDbVx9p6ySHFzFbMBX2kHKboFEnMhozTJFLjHAo3Cak3cAYt6aEfTZWfGNymbmBwqmjkQ1s",
  "key9": "2zqCDC8bsvgRDz4kpG7PhyVkgLiD2f4QQ3KupmNnM4V5FWKA2ZvcRbCJUSfP5DHgRK1SEfoRiNfN1jCxkcZWFVK1",
  "key10": "2qenXUD1xi8eSzCG14YxHsZkaD8QRZwsFaWZEJEMMxfV4EhdT5d5qNzoNGqePXAxnpARSjwPooPRenBoBAdBe7pL",
  "key11": "PdxfK9BSPFM7Ge9AuJ5fjdBanpnG5xuD38uw3Uf612wgmmd456vwKFeT2n2HkLZkiCkyz3nPo7HvpRDsS5oVzFS",
  "key12": "2zk7wVfkFqSYuuKmocAh9QjXMtLnjbqjZPWfaLhnVyc7VARzAnsgmkYTjs7agKkMHvB5draGwd7tGtUDjgVGsuvy",
  "key13": "4yuVYEpKh5pFbuJZnrkpnPNS6qepBMZCjAiqoyg35ZwQyCJ5U4bNkuU8EcWVwjLGyDjC6grSPUnaMbYZELkUiep9",
  "key14": "5bHv4926nAT5pDSbUj5JmmCzth37Gmu3MWD9xv1cuHU7YsMeTHQz51QsqfU4fsevS7FBhiCcXU25paCUWySmiWrP",
  "key15": "659NB4jEZqQ1cxErDN7yhjMgFqJ9iqFNFXxg2LAsTDbotNCYTNnNAVA3XBDAapGGNg7bGufXZGshv6tQR5fYR1rV",
  "key16": "fajBy2epVMhXBvEssKcqf6xcMcnvdjAgFTNvz9DMG6kdazrXoHYy1idhpH8V6Z2tMD3tK1M9FcxEQhuYx4xVMvp",
  "key17": "2ujZ6q42yYRzChsxqT5hN3d3FA6ssA3P8dV4rRuiQcvGLz5wBypKdoTXLo5UTYm48z5K6LZXMMAv7jZhE5UDnDWL",
  "key18": "34pMVKVLbt8bx4sht6enBY8y7ZLdtsFxRd7jUkPBA5JXgAf3KPtnw7xTdMeG7Nj8W7rftTytjHN4dNirPFJEEByz",
  "key19": "BCLdjovxkwpipm2VrKxkXQSQ12kUPipjnTNqRVvyo67eFamLaRNih6TWkHDBevBb9nDoueMF1EZUQAWHxmp43TJ",
  "key20": "4xMEyWWCXdoCXpQrqxMJP6rbVET1GFMwCRdSseyUPqUwBWRwZ4EaywFdEzCMxT6NA6Qpk8DgoNJQJjRXeEqpZTHY",
  "key21": "2eSZbFJUMNfvp6noDSsGVocpGDgT92em9uDLHyXCwz74gcmCxfpRAqu1t7Ac42yEoySzaYg7x2GsvcYmhrHokVPq",
  "key22": "5mhc9Ed7HvQd7dJ4bkhx7KBxLZuN3wNnDyUTsA21SFJDhPc5rWDV3DAebsjLC6STTRQPEVRSU1X6n1tL9dFbFcuK",
  "key23": "2sHyaDrL9B6z1gR9E3SCU2bcwL62SDftR6qwFrwZArYY7UMwYyxEyuANgvccZjw5zWjaKN57iSy7KbPk7bJ7Hk6K",
  "key24": "2zrzBZfiVFxtQ6mAEDv5Z5xUxz1BtKEcF4ABBTQXL1cjVzWTVPCtDZZuGrbPZWDVkQub9izxvzytaNBRJqDy7Vak",
  "key25": "3YuRi8oWzJcozn12QJAEmG1Bz7fQJhFhvRfJ3QFyHB7Gt6SfEkp9qBPNaj4zKKb4aLgsybsxCFeDc1DviX57oZhF",
  "key26": "3osVHqhWibcz9jzKtVN7X4WLJ6SwHTp7Qn9K6g2LHxiQrUsVD83qHuLhh3UtmiXjiktvLvimo8nx6j2nfpQo9HCM",
  "key27": "3Jg5eFSm3FFMfN56gzUTXfre4hLv5DeSqAWMymMriog4R8Ri2z6CAonpzfesZpAD6zNvPBuzEA2w9USwbpXpHU1a",
  "key28": "568eya1zNUtPPLf9ZWroyxUFNVrLX39jrEVxU4uwjA5BtgqHBtxWjtv2EASiyxTxgyQ8H5qjebrfdNfZN4HepN6T",
  "key29": "2WsjVnZUX2itE4ufNR9gRpANCZD6KpRmxUbYqZUNTmtsCtCcdpjT3BTJUXZbyeXaNuoWJMiKw2njzyWCUoV6gzN1",
  "key30": "2qwsF8rMTEAXZ9QPfhDB6n6qUFRbdBxoV3du3EmgSJD8DxFLk5EMqFQDok8KqEmxcqKCGsK4NaEvZLGysZ4r8Xxy",
  "key31": "3tmWs2Wx4ek8qmQqQfPKNaDk9WEEwYnVNRZAuQoNWMtPcRLgvJKFZyYm4xYFtWJCMLVeBzHB7XqQdGXLE4fY6SA7",
  "key32": "mBiXm86476i8eF32NsoVW5GbrpfWStNPBfRHKWGpJtChuAGJSLY8TctA88HRGkKKpq2zorPehbWy3bhFsNqUAGh",
  "key33": "xuZg7FEb2WauqQXp3vB5ke4xCEBUfjQnwmQU42jwTdyWM7vTNgDtYLrtFspN9qoFk2vFdc52435nbgUx9pSgqUv",
  "key34": "437Q97tPLCUhuKTDKpSipAPAD3f4fQ7QqPdwwUh7Bvf8dnGEEe9nFuAcJqVXHcAvNwDbJadYXfC1hDhRqJDQ9rdZ",
  "key35": "4HT6pCzE5WBrLs3XYHGSNY1Ftk96xuSUdVcVQ7cq1GnLML4DiAHWbrxnKyhWSj4mPkXbGqcvorVtm4c14M4KSjz",
  "key36": "3tcfGBGPCFx5fgEnjhZkKEsX2Cegzb1f3XXN5rFLNmEqcoazdtUCPDJpkRvqnqPo6c3ZMqL1oN1R6cdM4sKvtz4A",
  "key37": "3Uz4s6n6Zsd5Q4eTJGSbCkBNyitf6kcCyyHWtU2Pk8Rr2piLrkHGijhbECYEWpqnbbyPuGtVjBNYSqq3JdmREzew",
  "key38": "4Yd1MWZ6nfSx5i1f5624NyMAKdNhygYX81yV7CoDFpxDxbLKcJruRLJXZ7SUi8Zy2ConukXtJUdgVh1UjGiAQMy6",
  "key39": "4GC92ufH27nrLE64i5zAYFfKbwxX6qBjEBSi51QeHWZ4X63wdok8PTXPmrnXonnBUZWz66N8YNEJmJ8zLmgPBs8Q",
  "key40": "3mNpiJiBHfToyPBbttgyuC9Rg8nvgYCncKqzuTiU7f1bp6ST1UCZhVowxtMZfHVuBcy3WJearXh37qjWcJU9ro9K",
  "key41": "239kkcScuwwfUo4AnxD6mZb3sGZ4ZnCHQ3hPwcNZZwFQobzBMcbhZRx6vYAyDZfkmj9HXzVKEs666XJFE53dwRep",
  "key42": "4dfC6ot1FYN7dCXpHunNHj9giqGNeQfrmKkx9FbBpK6id5YvWWsz7FnWn6pXncTiwVNcWh3qFkrdTDS5eagqqDXH",
  "key43": "581DLzBf9xvjBUuj43khdoiGXHeKAXhiLWGv8A5USR9Z8CqeHzUy6iNd3xQbfT5R4rdNAnw3u2jBggQhcENPJCUS",
  "key44": "66k9J29XVAzaMLQep8uMjxDuo12zTkaWRJxHwQBEWArBeKdNnkYgPWRGrpFU54gLzaLELyFHzyC5VP8cDaA5eqVW",
  "key45": "4Pvb9VgKWU8P9maCsdpEoVWD6UXXmTduzy8dy8ymsF4VTc2oCwDGDQbef4odQwjTbWrq2XbPJKFWkWyLX2bM2fn5"
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
