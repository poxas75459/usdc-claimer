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
    "32NkuRcdQ3pb2R52WZ4bYLyAWL6zo67W8PKCZXBezJN2phA23M9AP1cyjujM1bpR1pFA9ZYhxmytWhJ6bPZAgb6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msV9Z83QnNVuGNRh1SsUhsDR5ZLjv9NDVgBJeqBSSpVNZJkrGLeUY9NAea6oEkaFyaw6uakTWocDjsa2MtYPAks",
  "key1": "2K61TQ2r5xoPc6vTKaDeXMoHXBBuFih4ET5FWtMURSEgArvNAiDcma3Wb8aSSsC3Xp4eRxHHK2xEjAcxx7nJ6J3a",
  "key2": "4XrCJ5VyetamdYj3HGLCUuEahZDb8AX4WC8Y7nKsRNNym8Wjy7wKvJJNTAJkkyctMrFm3TPSgGqWApL1Q3e5GFVg",
  "key3": "3xpgiD7tzUUAdRbJVJ2g5FNUQXSJs8YLVynMAh49PcoDeYxTA3JGhcf8pzkqsdXB2dHGBYstfoZ71B5bTgAkyg92",
  "key4": "VkueUVhL1xpRkDrLNp6BGXzhR689v8TCBsp3CVBjwbPiP2FGFEqEwnbHSTKahxMwxyuK4LoJKK8L4xPX9xfLq15",
  "key5": "4VqFyVgBG6PGKHoaQVUnAJn4MYpNphDf8jqff3i4MTmu3S5A29hLzhNJGs4kwFNuMfRt4aWQErxqTCqZYxgn1oL",
  "key6": "2Rn5RdgXyTNGjCZDtKjCMhxjMik1m5PvVmv6stQVrYQZPcpiBtqTz5rDcvw9VfYx3acGhyjZqajmrHpWvXghDQAB",
  "key7": "482K7PAmR3vzofTVo8GEqriDAiuJMDSmhmN61wg72DiopNmX9DffX3mS4Syp6LC27xiLy1mVVDEWiRQAZjnWyXT7",
  "key8": "3ykrbVUvFyuGdTzNVfa13HAEqcKkBBVLjDqR5FeDobVCVm9y7HdQAx1L7ApycyaByUQGiYkLZbv91m68ECNPoiDL",
  "key9": "5V2odVsYgLKduCZ3keTSPFFt2EUXwfm2gF93o6UoCTHZMHbDmkQUgneq8UKCNdJ2zt4JQS8y3d9XdEGrLMFMZCb7",
  "key10": "21TH9gMyH22Lm4MNgmXFkjoXPQJ7zcn2ah7YsT1qrN49w1UASLeMazLUKzoqUYmVkwaxK5r79B1YjjubyxsKbgR6",
  "key11": "4u7cMdxa8MJxv5ZNsh5dxcSBr7g9CicZ8H969Nt8c6rBsEmqmBvaCaedNeyEBfTshjoLJmHxxDMvdovLX1oC2qwq",
  "key12": "4Y6u9B7oyfr5QisGumhxG5vetjYpcUQKCxapowQzHyH5Yubymm493Z7pc4DnukoeBByDXgXLd5PU95ikbM3DTcnd",
  "key13": "4UpWPoDQ7XjB9qyq7CNma6qDUDtfNZRmNZ7LbrYJ7ZcPMKQ3CvjE2T3Ro7qYQRWv5aPtwSndMh3YQrpVrbf7xFam",
  "key14": "5bwNhuaGgHaLoSvQCeHU96SozrDh95QakkZbUdX2zUq5xuXhSrJ3Cxqa8Dun64cAzmDg12eMKbfyg9pvFSGcqLBK",
  "key15": "2Pat9bA1brzc9r3jD2g16Ya9B7rAmXY6e46edihYhRVitABLxqmL5E1AHxyRm421qU6qK1uR5ezaVSrcqb5VYFHV",
  "key16": "4sGMo3ks4JpWtKbzSF6geps8DbqKLoYXcsPchuHdJdtSTMuackRz47rZsSKdrfW7zEsrdG83MT1Z9fzPWxQZajjP",
  "key17": "4ezfu82EL8yZi2SVaLSg9X5MxeHuFJjgcdj2QfSc7etvujBiBXQ2xiJpQ22wJpwzMy1dp8LnA2QGpCkvZbtJ8Re7",
  "key18": "3hwfgUnhMYb1U9xCbn3Z1cSWhh3EpshnrViRUJitzhqsQsTAEA9N9HSt8ex77MC9oBt7HvRmgNatJpZvactJYCPQ",
  "key19": "E3VMKbw99PaxHZBYT6cHqKwWqmScfjMcbgx2jod7vCPHCJWz16zHuqvKMPGsm2jdZhG2wJuYEk3pWARAv4fYHvo",
  "key20": "4DvBtFMQdXvgCk8DV9co6QKHUKMHfgCwVtorz3XnNFdwdtjVxKNArzyLSEZppAuNjhDpsufEWHLLdZieKfW9ftkB",
  "key21": "5q813aRng8a7vutsr2nJaN5VBr81PYijWWL6yfFoF6bzYY58jB37Dsbta7R8pAGkycaFA8uARmyRahCezv56AUJ2",
  "key22": "5K9YDTASv2bXDCHQuwoMuJur73grPc57osBkPYo8LXZg6LN7JSE4QcRMgfXcpgyf5p1wfPpziCNZsAscbvEHXyYc",
  "key23": "NtT4AtTZwriaUpGUaqzfJ26xwhfNMTYECTokKJ5tFYx1gSub3qSEYB9PbHB6tyMMyH4LtS9wGX91YDWTqkFD9fY",
  "key24": "22NMwYwxRu5L3yrKMkvuvK4Qo9WqB9zkQFwWmfbTgKzTvrKqxEodi7S3Qmg1eGpfcAAFRqqs3i3513kbgNUG6Xc9",
  "key25": "4QDFPQbUZKAyo98EBUsmb2v7fSSUWaVrw3hW8WkYsDF8Q1fNonmrsgV4aeQcdhN6RkpsNuBVicV2PSQtXfLNozui",
  "key26": "4X4MjXhBCquNEixSdCZtTnhMDiuGJsVt9mXfRci7SFnmfqpNXED7bhq7J3VrNRXDfyNSX8z5begULkEbozEkWhcM",
  "key27": "3ZKasiUi3gEwzVLTGTjSzPeKGMXdFvqERB9EGmkWqiTg9xQUFh4zjz2d7WT8Yuvid6RHLafUhZorqpYcnNy9yH2g"
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
