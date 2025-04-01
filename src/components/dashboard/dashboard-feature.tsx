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
    "5LhC2TSCVTDMpP3N6P2cgmn2KHNYjqejYqwUt6gVnesB3kSgMGQSYCBoddfbCzsffQJQ6bPRXaVBjwUb9jNPeF7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmMSo8bsKzbqRJNCapNGUe96QsWPFa25rFqwAcgx6gVwvBwbaV6AgkYREJAf78nmxsVF3kVQmGHcqaCuNeXKe3R",
  "key1": "2HYTaECLzSToFWTZ2KUJUts5VnsVmD6sTCYevjNEw6VP89mLakiHgZcbJhY5eotaGVvo4F86phmNaqeT29jJCre7",
  "key2": "4KvT5pvNJhWTNQgKivJXWjK7xoTqHw86rMJyZadygW8An1Rahd4vREPZde17jiyQkApQ8r3GTNt7srGwqXh73kUT",
  "key3": "48TyWDusms3GMWcEkdv4MKRSMz6a1qZTM4uXtqgz7JxCmzRayDQNUn6iBHtPjRvFGUpywADPjVqFfmWRRr4pb1Gi",
  "key4": "GdrC3aCGaEXedDodQx5QUuHA81cPkFT7cQysfczVh6112CcHsWsNG253DHPocFkuHmSFizNmmDY18t82v18ygUj",
  "key5": "2JbHkPJBwkeMcW5EcuSthQG5TQLhaACXBtKzpPyDXnmcBwLMPhCBHa5K9vRaEvyKvnbxAU7BADCAv2srWRfmMrk7",
  "key6": "2S7QkH27pEmseFqV8rR1SWkizN9DavVWH4mEx7RVAYkeGT83Vp8XduQYCNYhRAL7tjo3uVVojNAwL6ij9xG3XKse",
  "key7": "5szQTcMHyWR9JSYqAGXFA9a6V9KBDRx1a5sVUkoCzeGoKwiy96it3bJmptDHPjBFTyfYJMSVU5MaguaNRZSsrda5",
  "key8": "AM8z5k9QHCQS1wvFa6mUvZG8btjMfM3CGUDKQhCDxgjXh9FCG4UuTyHevjLiAbCy9WQx2C299yaZoaAtj9wM6qd",
  "key9": "35TNncRNuk8TMdQ8LgorxA9E9hjzLDNCotdTm5jRT7MLqbnLG2jEy7u6PJ2jt4NjZUo5oDfLrB9Dso45nEUXu5TB",
  "key10": "4PEVi7aVDfpXNNEWkXkZ2R1nv8LjTpnV2Cd7ns4rzGuCqWdLQoaKvDNA22YFisLHi6HyCjecLr4wH8vKbJZF7XNf",
  "key11": "2eoxLFC7mCaHjzFF3UkdZQzFK5F8tzcDR6tj5Zn2MLx64Adw2A7wznH445eAdupoQrsxe1CyBj9Tc4mG2zQubhu9",
  "key12": "zvo8sNTpbyuHSsTBnznsLej2gKfXAfvMq9HfcSpkyVJtFhHXC8kvV9KN6METXAvVHrBtYez2UFXXGajiJ77N4YZ",
  "key13": "2N6HtmiaP9WNpBPAY2YcG78DXxeofzYhGsGaSypHCZBL9bgaxdUgMxUaXLZJ3XMXS1Z9JqGNLNbRKWng32ssrGge",
  "key14": "5TC8BXJwYaum5yG3KfAGP2dp6jZKZNf1u9ih5miexPKs8Vx61y2uxbWUmLcM4iz5t5VSqJxbeVRsYbULREfqvWMb",
  "key15": "59Jb5utVM5okNSNNLyXjHHdMqVGfEWX7rUJtnuFziR8o8XFpoht6zyXKXhqF1n9wX2MDhJWw6rf2HL6CetJcLeuV",
  "key16": "2AW2F1nbA7yHtsgT14CPKnDngtKJTtmdNh5Cqkiaz2kRWihC3eNVAJ9NGzTjuCnSsCTpAzsMTwKqyRiGNo5XEbTq",
  "key17": "49Zmo3ZbnKAGzZV1PXtuNYGxuqN4sGihT97SqXP36VzLbniwo9dcsXU4cCgo3NhSqsAiS3VKsaYpC12GiTKPz6hy",
  "key18": "4KxkCr94b3wHjxBm7VbZ8nNDVyPCFiJDtiL2ZrqyGstbciyAnUYbQBuL3JWW9PEcJRRRbTEv6QsbJh8eHpCqdvTi",
  "key19": "5VYcqRRA7Sq97cvRgd54fSknAdWaZrM8jCntVGM2orgCwopbF3fDtWVT2r9mkDZJbWSzXcW1Kw1PkBb5GrL2WvN1",
  "key20": "5v16Bu5uLeK87AxeNZZK53kZ1otR8ZoWMJaQuNpurkXURW1j1YMdNLWYueKZ9Nt8WTknkpC6g2iSJK5knQyx5UKf",
  "key21": "46YvgFFFQKiKwggwzNgCuqs1ULQ5AgoYQShKuPC3epiiPC8azZT6ZGDg6QTMpZv8TkfQms8ZZxJG2ku7rSt1egpg",
  "key22": "2f74MHUhDby3hehDybGhRZNgFVXmz82HZwRKVBWkm1wuS9fTEUusdJeVRbsNfAWMwiGi1LsF2ixUmk9ojajgm7wZ",
  "key23": "4oBC72xdQL6Ce2G1iTjAVDCLjNYKQpK54SqK1VtMv7vX9tSZpRQmLPnGLdVedM5dYMhF8Q1FARfRBPcPuHJSjpDh",
  "key24": "4U3GytjZi45GXEv3ohQ4nSFxNhExjQbTVutLr9zcpTG9XF2qeFZaVovBVpAWJBUo2L4WbmmNzrAjHWxHtBw5JKCo",
  "key25": "3HSZvERHJNE93n1DsZCDQkh5bwjGoZVovViGwxJ1W4FA3vhdPULferPUVPxW6BNjjr3PqMcxEjvXuM4DCyYqEWxX",
  "key26": "4w5zg3X2LZvFFVShaGsujVHnk85BcVVJ1miu8bqzJGeKRe3BaoeP9Ab4fwu2H77pnAJavVLfvaFF8TibEQnRfyXf",
  "key27": "3ndxSBtCJdYjXK9sVgskrtcdNLd3WnmGt8qpZzHngtMQK1NNMeoucPJdGsopmdkRcQVe5PDkGppngxBZNAV2kLAu",
  "key28": "64aUSyWPiYTm5fqd4AHbcjNUcq8z7epXjtbfaZKMSYKV2aUhdRYkfz427PcJqqEKU2LTK1uvv56M9hp7wsxowxYC",
  "key29": "5JDt71x5xqMXERQ8Nfec1ohs73xZyyWQUUdbB8vrs8NMyNSE2BNhTHyH9M47BfmT3dNjWeJNT2XwVinvUXATodZA"
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
