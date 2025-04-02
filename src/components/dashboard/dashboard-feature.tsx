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
    "5VQaJbPQt9wQgnWcv3XfJgJ6XJ4iPjxE49aVzzXLoza22NSnyqQsiRW8C7HSbJHiKsvsdLxBAvbjLAoVbFxD6c2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Prc7VwopcC6oUS6qzAMMm3WABFop8ENLpErrYWo5cWRNAKG8bsWnEK5MXdxQqTb8CN37UrpfcGjNn5SA7rJ53Z",
  "key1": "dA3CZh5JymhPnMbUfVPzovfGFKBGmYfPRPZbDd8uwbqBMkr7sJSprrJj2tt9WDZwnY7RiFM56LdnRaTzc29h92u",
  "key2": "2atmGzTSRLjZQaNNvc5RG6NV8dvEBgZR9vTnw175nkvtAoacpCyRCqkJPKTULVpjgsRzMEQrVJFmGfPQT7XX1NJz",
  "key3": "5bx7gE9cJumdZmsgZW7QhWVxtrFsUTgBj1jB8DZV332gaTA4t4iZWVn2no6uFFifL84FmdZs68yyvmVAZqTnceK",
  "key4": "4NSbc3UHEuYvAtje8Ms5zKaiHVVumxvmfwYWjh7ws5PpPpqcPupsrJoKtRTS9gQ1fgPFzTHMwJT1gUXmzPR91R7E",
  "key5": "2NMitM7fDihsS8rnp25GYXY4iQHsnaXQseM8qpKD1yg72MuKtsWgPF1GfTHUmKfb6Mm5iwQ5bTHdW8Nyzym2hhAn",
  "key6": "2rVpokebJLwVjFDcLwoiAT3UQagJ1MgABThtPxwSSfwkpRSx6KyeiiP1c9FJyM6SMiG7cv8gQTMMyPotLLchJDxQ",
  "key7": "4Ym2tq8XafEENPz7pu6WbwGRY9gsdSDVgFjGrST6Ro6yZasCoK4vCJTpBgiteDWNZ4FQ7B7HuanuLXBDdamkWEso",
  "key8": "5qzdiNrmf47nkkDMEaLhVbaKAMa8KVcP32m7krdDCpiJX7Lh8hdikDsUm7JD44ks98GGMVe9hbsDmKcjbSQr7bad",
  "key9": "2TfP4fBaePWyTHW3D8EBFkMtuqfZrf9fZFvtoq1BQqJfBpTfCSaP4cTXuxTNHSsN7EQ1mAJTB3Q18h45bSgFLYu3",
  "key10": "4ZH82mxaRGPFPLhCL9ExxPVUscYWN6w2qzmkNr56vEb35pwgKQWsTpe3u5BdhPQ8AM211HtfyCCmVaWT2RAinnXx",
  "key11": "4kFCjYbps5gNUDDfXn28nq3LCkdsZVjYsYJMxw59HitwuuoNMzNWt8Abk4v1ZD7Q5Y1YdsFNGGUMistifSmwN4V2",
  "key12": "3eSAd2cfAdoRP64FcJRphaVmdrjcW8AkdwBzUV7kohmzs6zJyUyEDUqnzTG7UZTdrEcSzPg6JzHPpz5GCaA7tiWg",
  "key13": "5oGU2vh9EUyF8TAWCwLovDGY2SAwKZhqboyLdSmt8oPYaeztgBtkYCebQNWtxEqVahRjsKxxBdswrJ8jUTaKynV8",
  "key14": "5ngVEcAJf12JKvipt2yRgxnTsuaxccZJ5nowZZVmx1N91uAKj8kGoaQpKdEtY9UPhvZQWCMsPpaNTmq4zukuPN4L",
  "key15": "4duJ9ZVRUzeZDreK8hexoVKZrtnYc8RMZAkEQBYiHoN4bWdbLELTbG3gra1b9L4z9VqBK4Wh2LowVENM2GDEqoHn",
  "key16": "58UfUrN5Wt85JPYxua15yKTXjosH9h2uxuAYpqvrtEcxAaKKJmNsGsoDhy77u6D6tCzFkbYoXXjR3kzeQgWU8ubc",
  "key17": "4kUeZZ8mrHj935AHPNCD6CWFrM9gSgPC7AgZNp5vyWgKKDE7Nk4DvU3QxkdmyGdE7zDMHFFqPPaY6zR2Gnz9JSYZ",
  "key18": "62XoNcKWLyUv66ee5WCj9NWb4gPckDuJD1nhYgKbC8J3iGmZPC5i9QUutjMkU8arWdExzV8pq8syK376Qq5bZdCv",
  "key19": "3smkK4wiMmVaF9LqDQULv1zoVM8GZ6QDRCMRVqVLx6x59Ak8Q72CPU68bfcti8S1F3Gbth9yT6f1NFmN13qzRsRv",
  "key20": "rW2K3n6BMnS5L9EyYxmyfcd9RpveGnGLUL4gHYY75Fc1DkL6xKPNPfv1j9iWxMsAxtBkSC8gLRxXr6ZucpYfAmt",
  "key21": "2BMp9YBaChKHaGQX881QWLenZU8qpA9TzuPYLe5FzGewn5x7fuM2pZtdLyv3W6aMEpVzs67BzX1jZa8XeQGensyD",
  "key22": "3HRQZ17wNBGLvrjUkzYyor5bjSuwaJ2qSiFgy79QMkpFN7uUxmCZYZZjzRgoCfpEZV23MfwwWgsjKdb1uKooUvXo",
  "key23": "5MXY5BRatdHAuC8jkTCWZr6tXyUFf37oKNjKrXSTomhq54ManBvRgd6ZQfSAq4vfzexuSZ7ij6ec8cFw3FkcDm1o",
  "key24": "LZsrP61dY39eY2mk7FKX17QUiKPxadTnYmHXsxqf8UD3ucNuTUsN5CwzsrvLkd5hJDjxJgLLECCgVdrZSFyouBL",
  "key25": "3SsVhrAkLZJNV9xhUbfLeFPMJUVRRYsrsqcADJTWzaiAmF6TCrcHCXbZAEfMrYwJz1vmohrqq38QVmHphKytjbzC",
  "key26": "9YiEkgSv6JC8pG5w2BijscfFhEPN86pBQP27NR7ayy1wJXW3mAEZJKSjoDW9TioK8RBcKxFhTnd4dCqCwJ22wDc",
  "key27": "3cFm3xRFSm913pNaJtUs99o5w2dJYKSskfLdtdnfJAFv6PaSVJkS5tfxVJ4qhMArjM51a3jZYx6WjjRK1wzVMcZf",
  "key28": "S22LY9v5zoFvRWgNerbkAycUkSBVGihJPvrqVCQwksBGYsaE2TjfL6gHK615dXQLuC1tF8XwidhQF73uUhVxKUj"
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
