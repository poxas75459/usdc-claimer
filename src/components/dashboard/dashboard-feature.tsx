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
    "43hoHe6yeaP1XYjTcoNdvL46DRSSpaW4YwdPSvX3xJY3G9igRPf1ecZ6TaAJZDzHEBvVH5CbPuBmTYK9XL3Xa6Cb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ibGjfxcBmSdn76RPPp2hfTFZgCxghBpAiXJpXEz3PYFuPs3ZNMdvdyQgjvAnKNz1Y33pg561uLyaGU7TnMa4qEJ",
  "key1": "tY7F9EbPywc1W2kmxNwkuLoRMV2MvVBHzXyeo7MPazi6NxEUysxfXDRkispt2L4fHRaaGNrE8FsPUsxz9mkXKrN",
  "key2": "55yF476E3T73DQ97As17L3qadBzZ4WhZBFaybXNrFoa1h9Qd32U5S7k7i4LKBdApAFRoQXceEaxDj3Hi6cHU9BjX",
  "key3": "3Ws85KnSuVwssyu7oMWQasNE1iYyXFdSFGQYScDK77XXGpbDFYHQPGMCzA4pDqBacZCfjxvkivTawvjTvyJ929F2",
  "key4": "5iUqDBYLah5KtyTB8HFbVGhHuPj1gtwigTBztAPivhqWc2rNkZcDWMjNZ4c5AWAdKGzNMuY2RCP6h4rkVew6m63m",
  "key5": "5bG88h3WvF352DwSvWjjb9NBBNCyMRVhX8ygDxuDkTkpqVjdvMaN75fT3rECbDUikDx3YDebUcaJaCu1p8mgB3aH",
  "key6": "PmZyQGLdBsP8bpKxH7N4hSTJBBEg4CeEEPJbPQ1LyER8gm4iwWupoNgXspSiFYPPu4TidzANFw1VrFSFUMACug1",
  "key7": "LocwyXA2erojdTbsGKRu1qBrAEKGsdL3UBrmFoD4CgL5f1ruTWDRjxmMjU9To3DVBuaseAurgAYbpgFbLBRPyj1",
  "key8": "4kBJAkctRCYbSd2J9TUTjoVn8ipdQTbceNV3BETywu2XsPZSdDsXSHek7EkQgzdjY8JYLZnB41RDUAQhvgSYExjB",
  "key9": "2y4WfppA78uwd9Xz6pjsgyQN3ebtAUR9m8YQJVQ9BfbCA7za7LdVsjDK2zw4f1CdZJsS4fLb1xFA2BAKaN6PnkmF",
  "key10": "ZjcV1hyzVEfs9jBfBDBUqc5RV3fJEkSQiCtawgyBEmPPvVsES4riQP1Nb2cCUURuuxp7o2Sa8daweooj3fftZjd",
  "key11": "5HHdnUmyKbQbx2Lg4ocD6sQ15er9W8wi4RwLLoTe4kT9eFAP77kX7mJm64ZuQ5tvN9JGK97H6oYTQt6ygZMZHi3E",
  "key12": "4W5BYKeCMrjHVjv5csWRNjkY1zBbDJgYDHXCuUKoXD5HkueEx2PRW38dbACHeXgYjhDUJjitNMDmUimy8YkywkuR",
  "key13": "4Ereq76Vweq3vju8uur3NMJQTCUvKdZznf3aB5vfXrMjYfd4fBtumLfPmxauFaYBF2tr76xHcRfqWMNiyCw2bdoJ",
  "key14": "3fwj1butntw7hFj8BXWzTUwbQwfMfe6NsorzdNHcEjiNAsCfJrT3PxwjyQDHWZZ1nKJ8mJ6hMi14LzkxCjJDkuZw",
  "key15": "2zbzoQEaYC5YAFhBssd2CxBsBddnQFaDEVPrTXc3NZhgciaccy9YJMmWQdGiAmtbtErPjwn7eKjccTCNT8KW54xC",
  "key16": "2X6zR1TYpBFZvyWHUhCqi3Dxwxwd2gPDr9PnKY2KZZQNPNX1uDGQvVGAUwwH5faejFAjrBYta5F4j4fYMyFXTHUu",
  "key17": "5U9G5bQayH7iyE7RLtMsaVp6TkktpiCLUhTgLtK8CVULNUcW2fXAVKm8itbgyYdBnX7d5MY1Q1xcVePBsfmLaCDB",
  "key18": "2Gm1WheNZE4fA8uTh18qSsA25dwTMxnD47NCoXZg29j1EZmERaxwqgDNwjzQuSusjKFazt94to6rQd1Ks7xLRCe4",
  "key19": "3CFZ6QmUVhmPg5HwSgrYriuFTZ4aTnqRx2HNsMpk6rQbtFUDLm3Q9iePhWeyRSuSf4Dqtqhm3Azh32xrrLTJ8urt",
  "key20": "B2hTmBg3gRG4a64GTaWgkg9KDjHrqmhT5EsiGdmQjStjxRNsQLV4AUAJtNkT1ZP4A63U6GLvdxb45jBgDft48ic",
  "key21": "59xWbQ8KP8dj9EeCFbsvbdmSGSdpzpFxYHHWbff2JsArTjN8nmguY2a4NANu2DYAJ4cGMdj6AfbpUq2uJf8ww5cK",
  "key22": "9FjRaTu7nZupQCy6NtqwVLW2FamuPWzKJtRn2LRsmeXGNhFwRV4zzdhaxBmdxR8sEg2K6Mj1UF9E2kjsYNpLajz",
  "key23": "4KY4fuCPkiqJsxXFBE7hfjPa5648V6QGAiDUMZTVPrFx5dk9BKc2sx9A4Nq8FPTFEFNSLVqFRX747TuAqR6uo7KB",
  "key24": "5T6H2evoT9iyjtm6s4BVxZBPehZ3XAYwsgwbU8nSpjyCF5xcoLK2Ls5s3NLs6dJ1WvfSkKxxZPT2Y16q7DcuysB7",
  "key25": "4uW9zZ8g6QwKJJX2gGpZ743EPSxjUELcyRawGGd9Pk6NUaB6go88kBMMeYXRQ8qKv24r1A1UkZGcrydcgyomMtmv",
  "key26": "4sdzFdGG6xoJhmSxYDZTyY5FFuL5akwTaP5SVx4AAMwhw3CgSkgrzjd6Kq6SXeZLCXL5ZSSLy5cKH6H4LeZ8pwkw",
  "key27": "338s3eQdnac8KgQNN8KaRETygRz5hULdEVakMtGLonTM1ysykjfk33Q2183Lqf4orBUDcWPuRNCfRcqHJYYKYVcQ",
  "key28": "4QoF4aQK5wtBMzECSKxG3PQStKUZFVSLbabgUavprhpvzERv92qgrTEmtQNioEBF9CmcWogi8vYLTm8Tzx5ZMJUL",
  "key29": "3XG1Zb3n3p8ZtEzYp8MrcELmcFs5kD5TE5yj5RtHW4ZBNCXMsMNMMoPTQqhjjUqbE8igCbyCqy8PZFw9FWSDVJH9",
  "key30": "yqDGK5dKgJeZKaBhoa4vDMWRomYtqtjKSkS3dSgs2ApMaPfhtsVM86zuH5VZYhJHfyXvanP6ZroeYFKAkF2RjZ2",
  "key31": "56wJhqGXf4HvDG9cNCsi9Pr1pPnN6oiufvBHEW4jnrTtM6vM4SWajcDF7bb6XQZgSEXSFsRs5bo7dginppqYek8w",
  "key32": "5jDKKuXtZP8Ac3c1jNUTjyxRsCjwRHA22Mhti6hp53frhXctoeMuf4mnqTSNPogwG3Vws5GH6C9ZRrzzksaSrheu",
  "key33": "4R98uA2SRSmboFbuciLyZjSLUfq44eP3By4y1Vx3tv7AD5WJe6zWcKGpFsDMo9nAjCvgYfMoCopZq4BzVAULuGqj",
  "key34": "4GAAeY7sxWEZSkmxFRiNuZqnkotuKJvkweQ5GVhdjuSqrgNgkVHWS1D4HKYfwgwqbsmLxk6RUbCjci18UoSbQ2qj",
  "key35": "nNYMdp5a7z2vLsBNeP5XnaJ8vurspp3AjJ4Su7kFGSymeJbtDwbUhj11BuBFziCiw9aXjbc6KpzWcANqVfSac4z"
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
