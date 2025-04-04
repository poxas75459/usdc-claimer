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
    "XqMALha69Jb5t5D7TjJZEzaJkMvZe5XFrGBCf2parW9cnRxjW1qCmCqbk8dEWdtxVkdLUrGYakpzsW5D2zcEKum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nBkigPhdpsDCytqQZi1r46drpmi3FPBZMmAwHdQEecESrKAxPQNM4r9mhdZms6M895VjY3HRKjTFN6UGpcJv9Qh",
  "key1": "m1WTvSA7d4PQvEKzmXY858xfxjRmHhnmnZQJ937e6BtrCibwqdyQ4CSVxwtm34SwKaAk5HJftaLa7d1HSAcZkWM",
  "key2": "5uoAh4Sv2YLydcT7ppQALYnJgd1a7dEeahgRcHmUbYDqoemKjaiue2SJmrLeiwtVc3ikqTL5BGmmS6PkCHyquyzX",
  "key3": "2gtRXXBuXkNM9VPisJdxT4YXeoH94Ggm1q1tB2R7CT29nNdqJWCUPvWtwgBJ5KfcQtqfLUezwp2nn5JfbCcvWU4W",
  "key4": "4T4ngVRYNGmkfBfSzdccV8SpHAGQmESCa7U3XJ1YebQGfYHFdR84UJYTeQC15XCcoChzNpBGJnSWTnfNsv1WWj3k",
  "key5": "QdtZCgwahffdV5YveVRnvEvCRqaNruFQarjx4P73gPCk7JM6j91JduoMkiZQQsn1Xw7iVpwU6PdDtiUbgSk1UKR",
  "key6": "6FYg427sHLFr35YggsJCp6mSZWQX7yBZAK3eXfqq4Ac7wSiVTa5GoAUxngLsX5kaX6ygqdxsxGXwTvvG8PkSU1C",
  "key7": "3WdjahEXFBDD2BUzdFZCEqtHxHuwdHUdq1mWE68jL53c4EELJk7J61LfWoYmwVHxTaHbtWEy8UhU4myhzcz6hbka",
  "key8": "4ByyKvveWb99mQCNYguaCi9qw2Y3mCJ24AWHBDKbhA5wPzmGAD7KpV9LaXEFA1eeP7GUzhJzZejCEyLxJ5yyf4Y",
  "key9": "4UPDMaE4AZQVnGoj3N6AFNPjytsu5sD59zHeMEGhBJCQEbuWF8kD3x9AKsBijWTWFo6B6GmxNfZmnFEaPG6n4uAh",
  "key10": "5R2rsMjxUQWbm2HUQt7RieCe3sQdSAXGR9FBN9NZVCmwBqE1xy2uXug3KrXpRQ1gm4h1jFxwnZRCpWrePjaGiSho",
  "key11": "554CyANHYm3YAw5tH9cDg2Y3Mew1iBcjj8fVuLfzLYvdahqT4Dh3zJ1g9E9rz2ijbPPWjTnjkFpgXV4xhW5nJWWh",
  "key12": "37Bf1fsXhQ7yBtfwFXrjbUn3eF2AsWmmFqFGrWo8pwUX4nZroTD58yJ3ggcJtRz6yz3wVokqpVzSDcXnpcuhr4uc",
  "key13": "57XuX8kMjq4ZtPDGw3z7XZUvxAsbd4khD3xXe9CRbEVYRX4w2dMbeoMsAHdMVrN4eja3rUNubMBNcPLsX697tHWU",
  "key14": "3WVkVY9AwV2vr253NRgu67mtnk79kQAEAYaXYvPKo8aZVS91G4n4ckoJxYaaSUqvGV5fS15qK5eiVH5CimJdGuM7",
  "key15": "4Bnri5kJ1yGqUkDiMeyVamNo2JNHb2FVLfyxxvJpyu2zP6ksqqHfgcXubHh28g8DZsjuriLuz6GYXYU7Q9sNqq6X",
  "key16": "5xxmwSmwBDGnTxvJ6h4R2nDLS8oA2TGN5FcjETGrHXzrAqXA5kmKyY79pEZsr5pG8Z8HyJe1m1yfdKbKGumkg1kD",
  "key17": "2w1ggQRtD4KjVeXjX2QQ9QURpJnFAjEboLP9u8g8ANbpA1yh7fZzWXqm5CTUJEJj1WHRACwMm1XQZaN8nmxLSma9",
  "key18": "3FFR4MKbGW7tgwDWX8iM3h1rGvEshToJeD26PyX8jSwghmxg6v5yr6ypyt5Bdj9xJkbucWz6f4KCeAptGt4UsVkh",
  "key19": "EcNwx2keSh4pbpNTkaNzJw4TZ8PYpH7VQvNoyA1gCAVPh8LDR8LBgFCwmfvuvRqiP1BnU98VWFdfZaWHuqvGUqi",
  "key20": "38D7TVKJuFCWn2VcM6VDPHTgY6VCMGezVp7eEhUdqk4iwEzCupj7VK3Fag3rbVwa7jcBBBAvCe58hC34JukSdnmx",
  "key21": "5oxMYX74twsrpWuk57NGJa5c23HzkET5hotokPfYd9pAiP1pDRBcPCSXbBoLUrR8PTgyJB4VuxAfXBdnvCMTVfcu",
  "key22": "2JFseKZy7CNdypcJTC2eTm6EzmcqZu4zXZaFMpy7nAcyBeb1aSNifxigudd2TUYA2bhemAfzBYLHGi4nUUsx6bPP",
  "key23": "5y4SyMxbMjbci5aZttKgoD3NSRvtRTc8tovYhyAVCG5Tj3jv5AukUgpaDjAHG17D1RbxSGmpbho45V9A7Qzs9ZGi",
  "key24": "4WZTpJf7YHkVqWE9dteULCXD9hR59rwKXfbvbQW3zUmB9S86RbEQkKC2bfnPA1cTwcK7ak41RwrM1Cbm8gArqwYg",
  "key25": "4k6XYHDYF4F4qi2p7vm7LukssYp7BHdKmLj7EByrhqcjqB9inaCkbumYTyDyNggW6rjJHbov75RqL5e2i3NiVQGU",
  "key26": "2iAFy7qJpKg5TNZH7vrkVEF7Y6Ca1iTuZwWByytXTTnUrr3Dav7YwfBsqw9K21BCzDReTxtVM1xDnuu7tMaAzV2v"
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
