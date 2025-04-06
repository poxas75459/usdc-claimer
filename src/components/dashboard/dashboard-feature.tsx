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
    "3945swiGga3ke3V5eEJKTaszxUPipna3y9Gbc6ybVQ8NF3JB5phJJFYgEQepYY8FdA9a9gXBty4PvAdkNgXPBh2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hVYCuR6Z6H1gEfpMrjfRdPNNR4N9YYaM59FmHpc1VQQFACf5L2ZhhDHCF7JmH4MQDzocsQxxjGSabDc5YeuGXHo",
  "key1": "2dQiLx9QQdpHQYbvg26UjHiJSGhZc5d4Take78uJZgwNhDoYEBa2StVDRGnhqCyiygWw2BjaxFr5cCm4omB9pBRd",
  "key2": "4w1P1fgVP3DL4t34oeCoSwmngXjAtuGyCPcWft2wkq3C6VNXidAnSY44FqtvGZ34FTUdjYGZtfHGvTzQN8ZjhUrA",
  "key3": "4TyTYBq5ZiYFiRQfiPyav3xPte2FTJiumfgzzVhUjMvd96MgtQqJS5esYwoYaM5WQfGxjfej27TwATyneKEKYqDT",
  "key4": "5woeUVZX1royqMXPnSEr9xe1ft2k44ZQaQHfs4ogp9m429UeHLLApQtGDdH6xhp1E1uqdQRyHn5b8SwtvfNgkiXu",
  "key5": "4BPe1SRiZFERtkxL7Nm1V4EPx4gZiNktygs4hbooJuEqbaJdeiCJPeXfn7r69Ps65viNVUsq1owMVEUHeF92Rsi4",
  "key6": "2cgwaxugBpkCLmEeG3kyK2ktoMnWPg1nCovjLBawJtsMCFEdYy56V3F478C1KKxyrpbf4hek7yqFq7NPSubM2pTu",
  "key7": "5Y4d25MfNpARDjd5rwJ6ArJTN9WhQxFRx3FfMGucsNvEi4AtagprTfa7gkqsbzjLeHPu8BahctvuZJ22PBXKkBeU",
  "key8": "2Lf8UJYvTrHb5beyGUBmQnSmfvLWHF1X89pJBRuTy3zYsnLF43X6EdSD9Mpu1x6Gu37Tvm45MQeqhdxPVFC25o4y",
  "key9": "5HMWeDWHy9ywdH1gAeJu1d8mwWCjiHiQQbUorS2CVX2Fmd9uLWW1QRQetoueiFyxnzAPX5ScGTGW9cBELa4X2dxL",
  "key10": "69mogozo474ummmudbYFew5QTjUbkcVcMwuSwV8PxoGU1skJqj5JpS75bB1Xvqy7DfZTFo6zFkCo1hytwbDhLCs",
  "key11": "42CFz4HxR8cE247fdZEFPA4Biym5DnKPSqyChFwXsBLhoJq3V9MkbakHtKYbpRcTkaMWK7apJvCz8MFJqAqaHhpz",
  "key12": "r2zUwQ56ioguriz17MMsQKfzHNvySaNt5bwJxy9xPNzLHqUEwyAe6QMRmGZdk8b5ffHMpCCZ3b7zhh4mzfjgKZ7",
  "key13": "35eJKHawecb2LCbGHo1HYQJ6DErvMw613bBmGQmzoxe7ruZxzB1r9ribmvzZejvxq7dre6nvUsQjgxVox4MX2U5c",
  "key14": "2W7bC8Wc8tZvW3xMYtBg5fUz71yu5pJ5iJqaeRmHPoKuV7VY1rHvkeAqTFn47enACouysEMy3w4TDsFxvWjGsnAu",
  "key15": "5BB4nkfjwzbUZMRNJaVMpBb8mGArHaWU29FAxqysayZd2iej9iBrNUd8T22UpGeHffYvcY8FS7emfQoCN3djWY1P",
  "key16": "48A7y4x21ChyGDcZG3px55bG2mZWDPbR4p7VgZfp2LdKzJ9s8DS9MGvfV2Y5CqvFRrnguDtMLuL8Si4rBgsupPvR",
  "key17": "4u5quGgsWoiwpwQL7sGqfMoxipoAw9bWDUapbcjrbR2fA7gFtemWqMTPJpT9FYueA6cBtwzYRWzNYyoy4PVfMmCr",
  "key18": "4axBSHHr94MYZKSp12xtCvquWR5tmoCXKWmbCe6Qp4MzZG3nVMMbtsm2pZgzqGeyEysgYqs9k7VkbP4oRG45Air8",
  "key19": "4WZjE8vvKirTJodYA5yuDMVonkMFyGTC6vQYLVHQLLRbGtj7Vwa3QEXS7H5HYoXZehWPt86fNhinAuLJVsvCjrCk",
  "key20": "KHeogFVHwLfkWdFuoNrQbpgTP1qJyVPcQHZnjQeMMJuVWZ6oDTxvCb62781Kg6D3umxpkjXMzoU9jFXmgmz1q5T",
  "key21": "5SRWGnN9htSBAgJHFDVBhosaQoY713LGU3r4hKhCtpo5L5VzPD2FoBzVxcU54Pmf4stdrsdxcRvzMbdmYbgdAsxn",
  "key22": "29orFzNcftdTBggazZYokWGTMQjnM9cqAHGmpzN6Yj9Ug99C9nd6tUi9kY6fQ4NYXqeuGv7dj5WsfUbrZv11UK1r",
  "key23": "2pqsazTLGz9HdtFCgMypyymu9q4h6oLydzYkqepzasJQ9vgmCkgEjfrQ3F9erXgiNbNtB9gaSQLdH8xFicDuM2Vw",
  "key24": "6exXVShMFRdnW4pDJ9E1n99S6va3gBghzZsanUmFVpvMzhWcmDGwUtVYPK7uuxvgSJWBZSrNrW5LMUnwBdxFWsV",
  "key25": "3ciFu9hPnAm88RZw5UXkfmHXRdbCKCiYLAYj86VXTubavrzFTstPdK4mbG7xU4cGZVVbXodpHegHan1HvYrx8wMd",
  "key26": "G6YP4Fo7KpkiySvbvdWvXavdvw7uPTHiziRXujzTsTEDgNMMeRnLsNW7KyhHC382Dxe2XiN6ndbKfHjjWkzQ5oR",
  "key27": "66x7LF96G9pqf2wKeshV2JY3HB1o8f9J8dPJNFw5dyFyfVh2doUsms34RyEe96gtsXsMafrFhDBoCVr4UnLNUwh",
  "key28": "b7LeYqwESPAMbZjq5RtsLAzKMogsE97FjR3iXaZNP5h2gV8JjiX4MhjzLV9FHpHV7fwZFEJcfyDVQtheV3hegns",
  "key29": "2hMfMMWNMg8cD2bCHgPRY3bN8KsJSn1YHqaNtxhUdS5qBfDhkAYM7o56YF1myysAsbgW2vgerpT9179jKqbNzP4K",
  "key30": "47oBuuBa6PceNtWhTTALQHfJiJmSKGF8EU9xTdgLfLsQZZvND23og5mSVRGnGYSGmECDPtnVC8VjhJ9c4dZpNTHh",
  "key31": "27JfceViKNBktm6m2CZE7bMP1dJYg8KmofrbcYGGZfTcnArmXaDJKHN2LwHRSwNXk2rd6aenm1EFKedi1AYsTCje",
  "key32": "55yAbBynX1wkGzjbhx3vjf6YSc3zZvUvHe7A3XZkieAtM32tVQ8dDKHgVC4G8axbEbcYJyUbRQ64FXPYBBbvCCMJ",
  "key33": "34FWTX13hbnpyi1CJcRnu2fLPT6b2aEwReMJ7DXQ5DEXJn4tCHcRxkpJGynF6Grht5CMpkwVdXkTR64MeHpRSHrM",
  "key34": "59JSKRCYqTQeAjY3mQKTY7q4VDrcBgcSivwSrLzh6WMgS6bv6EZhenVi7gPaq5F4Bnef8JGv6UrBUnsFM1mxiyZ2",
  "key35": "5y2sDdSNnhgqeL9oH8BDJuvTj9ptV3JmAr1WwcrE129z6o5u2PsVAtSsfk4r8QKWuSYs78hq1jY4X5ugPXxXUP2z",
  "key36": "3E6DSL4zzpLVVTgxmx6N3ZQSkvHsgc9fiChKXwvo9BYDqrwoLrFZoz8GWUZwQGSMAD1GK33VtznD1RmtkSK2EU5o",
  "key37": "3UAJ7N9vHdCS232K7s1oDVU4vu8NQHQ2mDDRgEy3YL2NX7Uf2nyxx6pGbJ2Y5PTeD5EjbTpmxb17zBZwp3icNnXc",
  "key38": "4uZCidghKU94shZfaY77UBUf1h4DH6ZJG912bsoNXNjRED2ye1c4LcbmNFaTuintdKrYxApgZvUdoFovmL5bJYy3"
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
