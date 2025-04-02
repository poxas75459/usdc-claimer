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
    "XQ4Ho8eCXrr5EUNCaJ8ysBbX9ACLtPHJYw6HSQJ1LaoKdxxgghjx3kEH2BJnPJQobyU9k2QVbPzgyVCeMftMbAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJ3RUkfpqN16sZgS127QY3wRdAwGkxqxbZoAxaubXa2nigdFdhYnDhWxZU1CyUHPs4iMzRbTqBtKkB7WcSopoHg",
  "key1": "2qjpgkoxME3jyq8pgkFw6PQ6s8SEsfayGDeANirsmuyBvzvc7VCYkdzJXafkj5oqARqYyr25CYLJagrbydKy5vc5",
  "key2": "3VyV56sKRoWVhF6YxAAPVTDj2FBMNx2dgqwW22skNavh9WmvsouUhFYv7hjUeyeCHjVJgSyQXYLuywHSHhyivpm3",
  "key3": "5koqAGv8AXodJC5wWoHdjFvB26N2fmpPT6cxv7FFimLCAmqKxuioes1UZFPeyZaD7BqJY1e9hhGzyCTitN87DBNp",
  "key4": "NyVm5LF99fynaViv8ANKj1GzCYRHoT2srVKckrXgRNUhGkTsKBQozqom3qrNQRjGLiMvNnWK7UeUnYoEd6Ap7bQ",
  "key5": "5uwEsUXDSvjomFVm6W64LFhwRvvSyVcZxHAP2JYTTzNS684q9uiXv7BpaXghK5ZySdPedd6BPP22ySxhmhzNboRR",
  "key6": "3iS8sQmj92sVwSiLX9A3i7YSmzG6cNHNcW8EKN1yUuvAyzCLCeYBqAPAoRtooxnuTSohCTZ2zChXMTRtHWrx79VV",
  "key7": "vvwaUYVUvWPZorChEt9heyEYTnuXXuBMkorgtG5GfAL9VBSPfkXZyGZ9xfLSGE3YUnw5sydLXqaKd54M1HbcSsp",
  "key8": "2Eozf1NADXbDND48GYxRatPtedwsLGcodQ9U1X3DxUuEkrN122gUKZje8uMUkCVCRZteRXF9skeBAUzzjuofGQ75",
  "key9": "65zbs1iQWYvM28CWivDNTp2WVzaNE5nvz3eSh7bJYGS98C8ad4YBi11KzPP2o9rYNwzXJ1DtPs7WAk1LRZmaHUku",
  "key10": "3avC845Rb8PuNnkjXZ1HKP1A6uQaC6wNTLUaCtbu9mKKq7nHdvNW4bkqdg2u1aT878HSAnvULdWZ9TASvRV1BVXC",
  "key11": "2GoTY3vdCpv26kNSDwJYwUcCVSicdnMzz8V5upPtFE1ksk8ooTcGSPEkeKE8JJmZn8tZmesFvT9PgYDwgFBhQ3M1",
  "key12": "3GG2nzNkxMrr76JhSwwBMiY6n8rPhif2ycSpiWVanftYE349vFk2KJKrZG45uuz72acoz2QrRjEs5QR4SPuwYfxb",
  "key13": "DoHeie1wkuPyNWwxnzPUewrsqiPcqtxPdE79S12fetVmTKWqpRgrAtM2V1k5dFRW8APge2LzrWfeNabixQVjKug",
  "key14": "8U9Y2dE8AepKdcyhQaeLDoVXjJR6gYpXmWtzuVWbWcKfH2KybqKrifk4xdnwxBdXE1KkiUL6h7MReGRjASM9rb2",
  "key15": "5WG5K3CvTY6gfCYNH3pNwfJxnStCHHGQWz8V9eaqhru7oG7rbC3LYPwT562TnVwkWEsoFS5j9LwzeW2P2WAE6vd8",
  "key16": "2HGCB4byc2iJUfv5jJFmPSgXS8zNzaExRejNwBfyur9e9WPBbZ2gM1inayVoS5e2BMBnjtdyic8PpG7LHz1fZpkq",
  "key17": "m8NPvZdxxFo1kZFhQ1D1bdFpiHjX3BXoWuoN95TBpip4irbja4cLbUjWarNjpTbokgUA8BCDVnBfqCF79V5axmb",
  "key18": "4qpCQZAzpg4uD2HzqbMhfmHb3qJHxZG9m34w8N26odeirKTR8AYnZSm6MbnukDvJYxaZgfiSTvCys4P2dha1G54K",
  "key19": "4oXpcw8wyZ9546D4JLNUQNjnQnzmyZFv5Nh1cmHGmuroeT8T6hKPz95oHcJph4yxeesV7iARCEhyWQ1ASvpcdRzQ",
  "key20": "5EnmBbqV2pPc3UsestnuuGGYaBecy4sgGHzFCKfZbuJC72ushaNyWywyvH4gNycDDQ9ZcxMUR2yzppzYRqz8x6w5",
  "key21": "swVV3MoNaNfgiiYPr1mnZoZjaDQNDnR1tyzesst2cmAao6qpJkbMoqM1xT9FzHZWuKyRsjifsG7sWJMkcnNfPfV",
  "key22": "66nSVA2iikSnFrPv2DS3xeanZkENQmW3KLFvEBjVu2kuuQMNnzVejzvMfnwH8iLeyY5YJhpBH2pxQ8XsBSkNDYrY",
  "key23": "5cytmJYc74ZG85pKCFFXmhLTbTqLJAREGYSjBjA2Nfw1o48P6HcP2a8aup2au5HRazXTm7kitXNNbrXE1nDsKJsT",
  "key24": "6sQgmjVVR2G6xGXJpkj51Zjy8u9rEdB7t1Q5GVEN6YmXkN3YtwSBKYRM7N8xqdz1wU8UYP5EFU2AVunFjM3GfcP",
  "key25": "3EzPCyQQ4nFQwBX3kjXqucEUoVWHH99VsqgVXTLy83WSBk9wRnTEhCAq5fZxckb7mpDyDeaxuUcttXTKoKVYvrb8",
  "key26": "ST8WxZ2rZRuvMcSjQkga88jEFyhqFGAnGyF1nS4i3Kf6m7krf9TYrRKfPbL9UajG3aFaKHnKz1ZTrtp8vPwzvNr"
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
