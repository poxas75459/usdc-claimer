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
    "51EdHnDQL3DbetaVLswNXJs2qgmRtrUjVNAWopMDRoHN6Qs9BTLHHtUqRd1u5v6zcRjTFiZDBzLtk33JypDL8AAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fpdf56ywmfTZUCB2vTubEjaS64yT3uQzeNixZ3uSiiE4kG7eweW9TGFweYyQArDzNwqQAUUbJ3pfqj5sCcG33JN",
  "key1": "5Hr39mU3AgUwpXYgXXhymfm4S2HYUMwAyeZpYJQFwTgHecHFYJu5adZeJpZzqpsK4pEq8yGBRgCSK8hUYZm6uWBr",
  "key2": "4MPBD3PoFxRD1TqcDXLnnAsP38E4TdyxJnPcYjmrAh368bLx9s8x1176PeZdZ9CnzxzdjiPdtbeCvbT3S2tfEM9S",
  "key3": "m5Mcn3hwLEv7NdQrYNbcU2E8UPoakSSMwLJ3Ldz26QZ3zQEnS6xwB5bmSuPHcYuY7KTifdxZyUsnhuwta9yduVX",
  "key4": "USKjXGobn87PuXu4XsAV9gA1FiwC4FKNQwacbYML1jxq2LNUrDTrmEFKNzuXPyLMEsB5xNqxxdDdwekNiRTjrL9",
  "key5": "mZW4oAkuBvcGeRngdAJ37yCRKgMxSzxckzCTfa5Ae8hh2axjPzcA6wS683U8D9z1NcNyrhGR4VGaAdHeBX88Z6R",
  "key6": "FudTRpSDmNaTC36vcH2vaZ55wrg6CFxuLTe5nnHkvDu5cWYYSq6iLEBNYcwbEDmnFuHsFi4wtYagoadkCdJxutE",
  "key7": "omivkgBoLFiCa3Nj4RyrxJM4LxDps9aKobV427B1tVB1EoAiTzFy4UqJjpfNgX3FiFA2QoZU5762wuVoqdUupQy",
  "key8": "4mtqugbftXWotfkyV6pRpnLeH93mYENf82TUo5KjYFHS1d5pAgSRQLFakS4fPvmXuEyVMoueYj3rYNsNmo2e8HPy",
  "key9": "3o994LJ4wXMVDK8CCawsDjy9ahazjSUxda9Q7w2v8gfeSdo4K1M2XXUqHDG1kFyo8vQtef8xUjnUbyT3EKz5LDD2",
  "key10": "3yD7ppWYXadccnPwwu7jyFePFgz4xB1YnENBNaFVJJXvj8nrtvvUhR6Kxf1W5PPSrFimkHvDayTdESCBwpzJ3pZY",
  "key11": "2zj3cTErCWcDwcpeziBzvhccBH73GVUHZw5LKGkV4tzg1aDbz3BCecmFyEDAy673AY3EzbapegkGLcYXej3JxmhU",
  "key12": "x4XQEA4wuFR1mCTx8rkgkApGEyjJUQvXZt51N5ffZMagEDR7x823iEBXFAgzkyhnRnonqP7edLQNhVCKBH3vPNT",
  "key13": "2tNes7ktWodpqnCaqj2xGuHW51rdGwHnRSuofLM9RwKCkdDPaWwABTF7xCnfxNt8118yMkNTNtFUnTaW8nmptqwu",
  "key14": "46KKBdSmHnf75KejgDNw8aiLVkJ2mPDrnHDmsszjnD2THZ2pckVLZN96gLpCJv1EWeuq4phxEyJZqBDPcRYsQ9ZM",
  "key15": "2VryViBPHQhmFZDR1DBDs4dX1TEr2eXhWt2nEH1WP1KMnfDC16koQxpFUBn7VP5VkQPPQNp7AHqwi1TC53ic9xLa",
  "key16": "4ZUYiazmG1SHJUu8drQ1LNCVboGidFGsxr6wFeBxRvhhAvaGKadpJ7qBxqwpeiHAWvjEa9vPRYkmhdc34h4AQKEE",
  "key17": "4WiRmxxi5weKMeS2VSRUorE9jP1HQNwhodVnRm63Z6xmS2S1FK4SveDBNJxiGgizjkZLYk98VMBo8SGuZ7FUDcHF",
  "key18": "pseAhDcBmmU4JixZaycxBJ6RvY6kcCwoWwmfPwS5G25qsccxYiXaFtVAatNRV23MCxpdGrXDUR1JCC1LuQEaSdZ",
  "key19": "4zzK8RU5vQx4PAMBJj2UXd6PHCZEpCWB5wbjBDsZejEKXLAnKvubNDZDoLUTeokbMjJ8D5B5Gf235HjQQnknXzPE",
  "key20": "36qGcvTJrXu3XC2dym5oYCJjfqTgtpwuTkrzt64aUqGdDaN3nBL5DmaTRW1r6r7iRaZpTTw4GJoyYi6AwxguvLnw",
  "key21": "62znBTb7FynhAJRgz7SmK5C9Q6HcPuQPP4iUQcv89tyhJkVq5pvHA5mFN5EzUNXmSBoCN7M3MJ3kVaUX5dqmiKxv",
  "key22": "38UQ5xgrF4c8aC5ceU9g7mP8UzDTc3MxSZ2uWiHK9Gcx6b6mzxB5iWRzwS3izu88gsKTPEt7LU8DS2AE8Mp5vroc",
  "key23": "3F8pUvNvTWrfaicpAEg5k9u3RbW9GKG5JVcQjCrQQPZGDN5U8wgmHiaSjZFytxLPyH1sCoZ7yvmKYNxzZAYFeckg",
  "key24": "5gv3T1AFkGH6ZvDFQhnajoTYwQEcy97iTVxkWwRYKsEP6fULYo6GNvtYeE3GpQ38MA2dw2L3sGDqLmQ1J8xqs4NT"
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
