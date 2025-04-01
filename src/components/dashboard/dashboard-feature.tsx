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
    "51JgTrMJmwQeCttZ4iybDtsxpfrkJ1e8dsTk4D2xVjNhqFFgmNBkxqqTpLKUKBQdH3dgaAbTYdd13kKWTBCHGksb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dpd1Znm6djNixXD7mTU65iiG2KZMn5eupScyc16j6h8ZrJSdtpEy7yNfBKhLEgA1dZGDgbxYzWQyuBvES74qxQX",
  "key1": "5nsEjjknY8LR2kKq4TCHfVy2hgW2v9AHemRLL2jGPYqbFaWBxAGdr3rivhnu8DJituESXkDoLsdatRSn6jwNMcJA",
  "key2": "KjbsSYJE6sQW36HD2G4m7ZogwJ3jxzEHE8F56Sy8aJUhpY2ZteL27atfQLFxCsXupBYi3sShDGMwLRhwcANnwif",
  "key3": "3zYY14vGL6izSGYMw4iM7hHxWs6iFafuFNc9aMm69nREaZJzBzAR5v1pxCYjhNC8iU2JWNnjfomYT6FN4oUpzadA",
  "key4": "2AdDPazFSFoQM96WaH84mCt37P8G6nWQEjC48zgPfeCFgJgDqo5msDErpphgqRkoNTKbmGw9coepUPe4zCqKq2Hp",
  "key5": "3eZzircbxLwzkez915SgHvKrgyDBA2dFTdQWZnNAX91jHb8EyruHWXVu47wvtmCuptt5Ca5CzEQdewR7FFYGMzFX",
  "key6": "3Mrv3SzPD2VyWzqT7E6y2WEBL4znCeQceNnVxdGqhJyjkZhsmUL5FPZDAdYAstp8JmzbU5hNCevohBxGNbjod3C8",
  "key7": "3NmZE1L9uUKC3WtTojyf7ysakx7CsNPHTTktAwmQawEkcHAGYNkmGeKCBzoZgnHBZ9SddufzDxNcfQPWgip3nxvx",
  "key8": "2Zb8TJ7X6AQHAUaiEhzuhW9QwZCno52Unome8sV8AH8DbZUjS7VifF2Tr2WzJQrgzoXeyXKfn2XhhznV6AGVaPCd",
  "key9": "sh7iQiwE6uYWsuKrp7oPSBvZ54uEkjMgMUkds9zdVajTQJiDTWtptcfMew3tykfM18wRTjB5tM1bJvzwdHyT3ML",
  "key10": "4xcoh6c1iqkobhACC5G6cBPAhqrXnp5F1GmypKgZ6a69CqyW4PeBxrcPEdC4mQNe6WdZndQMhhPsvM3UBhNpTaZZ",
  "key11": "55Q4SgRwnm3nmp1nN26VPDFYeimGnZ3BSJnRT4Vb2EVGuiWBYGgpm4urRcvRVxCoJ3kztXDEg6m51rrDhu4B9uoo",
  "key12": "4PrH9oQmRxMU4NstraqyzKFkxVXwkY4MYRKiZSomNM8gCTCK8RPZfzHZtqqssamGxb5qcN2PjVG82ZoWUS4JM2M7",
  "key13": "G1JbyofvTj2PPs8KtiKYrs7HY1GTFCgTCbr48mRZboiCY8Rv2caHBXhcHybiYDZv47G1mkVyysEhZVYG7PaoRxi",
  "key14": "4KS6pEFpHGGXhbwMx6mWWcuUh4W7B2hKHsY81GFMp2KWvdg3Ske217ibj2vc6MNR2gKdrgGUdcdMjTpaiKVTySJ4",
  "key15": "2xKpayhZ3hRj526yWux3vXX35SFYtEwRsH5js1oT8tvERcEniebXd6qQF3HT7E6fDHR9nqmCmjDMwR3WBYeCe5Lx",
  "key16": "4kUEedWiCjQrpPPZiKJfb9DPxeLUDiVZmQhRiRmnypVT1CdR9jKtNigwNLhSSUAR2pZtJxHJjt1ch6SieehcUU6p",
  "key17": "5RrSvWuuwWwfc4VPqBTQxNsR146uwT8ZN355kZGtY4aZL3FdSMC6oyApez695TfjeBfvdhsBmfMBLSfktKasbvLT",
  "key18": "67MpNGkS8z4eiR6NAPT8rEKFyu4kupwVEk5DeSthMrU47LVaqpgkLuDrRJJLJvcGva89jnFHxu4fb35eNkCdEkHL",
  "key19": "XjpADXfbxtwwo3Luoae62QLrnpUyktLDiTeqeNsEeUcBfdFGjR5pXRKJhRx4rLYa2aCj8yGfRLSJ1S4BKb1dmEz",
  "key20": "1vt4Z3ncptaewQzzXXUNK1btwbo3sTrGLoanEvXsYEBT1r537iXUcZzm648St3casVPZowqmr2MfdGWxe8CcAkT",
  "key21": "2pZwAdby5pABSu8r46xtg2dMMSs6kZ12hM5r7tHj5Euy2WbLKFTRekvNQVQ7NBCWvEiMAF5SapFi2kn2gxDebuRh",
  "key22": "3tADKJV6HGZatCEvN4FJRvn2cu57Damqq4F6V4ndfR5jw6nLW1VDAj7tEUPtwhp1ADBuiQRNU2KgNq6DGz9bn4pg",
  "key23": "4x1ModuyaN3B43Sj6iZjHGGtdbo8wRbGtEMcsLcnJJcc29jdPWqkuyKcNZAper9kdm9Ls6dc5XjBiTfC9UsfY6d3",
  "key24": "nXMbraqdEKSBh8niw3kkWkaSKarfseEJ6pcHUnbUJzCSrDD6LT6PVFQnAad62hYLLbc7atch9EhZT5B7MWVGTyw",
  "key25": "23U8LCdpd7R1Vhohj249byVWLARjFaqU7gqghPkYduk35MrTBGPiWAEDHGdEbd1PEbZTVtbimjYEq17R5ebfsaPR",
  "key26": "3GVC7Vi1SDysTaiPDkjDz4n3JKD278qLGv5nWeWridsTorqFnXiP1QD7dyPw9ukZoJb4wwFrp5RTHksmC7dBSPUV",
  "key27": "23TEKotrhYas9YPmYJak5HFRDNNwpqUSjLuBZmUBg785vP8hw6v1vW35DuFbKoJWUXUBx2fZYZGo5vcwsr9XQACg",
  "key28": "4xygf9TjZBoJmar4bHjyaTz8c9umatfTKzJskx6FrfA5Vd4UNzQChNbYUBZnDJ99GA66teuy7py84yURi2h12ftW",
  "key29": "5iTBYiLEyXexD5obnNCtui6WWbX235Y9bU8dV8GmURUv15fH238S84RaUgt49PfQBRS4k8YPfSHUA8SJ1VWHi6Gc",
  "key30": "by22rPwqC4QHFGf8wEAxjqTGowGaEHAZdag1T12dsPSrkmWci2USzzkzft9wBuRHYK5qdibZjQBjSWnZYrLnejx",
  "key31": "2VNumtKrE8Up4JApCfBGUtS3bPpADrgeKx92ZrsfpE6C94qrgRX4UMFhwuGqG8vGF1URt6673h1ctTEK1SEESFj7",
  "key32": "44m5vgjGCsMAVnvRzmtMRBANbQZRG3E2wwhgiZAiM1jSJWwZFjC7ttaCsdBsetchCZ6ps15e9CF7hueCJupCa19U",
  "key33": "38zyWshzJhPNRnNYY3Asfsph41XVdC6WwzYGCzfhtVCTk9nNjRFB5zKHESH8anEYwX7cgANmCEEmfkDx7hoJUg4n",
  "key34": "4CqR9RjJQtdyBneGGHGCJqprLrHKFgVqgFbYbdnTeYE1eHuCSbMdF35Dk9cMnpVWWxSD3veFZeYQbjmDiELriCBX",
  "key35": "Dkb7byn3XGoj2LVTTtzBGQxMmGTUTB5Xfn7JaDJFCgxoLz3MAvuF9WibMGiVM6bw5LNch6QciDcEivtj6e4ZvmE",
  "key36": "55JXvfKMYUHEtXKXWBLafHs9EUoJcfTrW8Y4Crvt7eoXLKe8seiG3LYtDz6agtmu1cLxZjM1hUhpeoAnKot7gyQz",
  "key37": "47yGnivb1qbvmYHXZCgw4UqgnwpTYDoiMyVjnoXF2gheeCUnd1ftTMyyx2iV13XYpCxLUJ8D4fBb16SFRh4AieFZ",
  "key38": "3uHFzBwwuX2xz3dwCDxhNJG9JHD7wQv7x8YrpqTSA83HFjrB7TMNsWyvQ2K8sgY9MmAja78Ab26DwguYxfW52mLR",
  "key39": "35LLhbeqqxJnJjoTSpKLniDX7YU1XczWee1BZsbeZzWAUodc8b9YLm1mgLbW17j1xcx6whe27wnJ2GsTbsqgvbZ",
  "key40": "66b53zuUTwhDCLx7x6JgipkGT9D7EzpcS4GkPVxbLDcVP577tS4AEfZKBmdLjvXDNreoJDUC6UM6x25J4Ly1qKSC",
  "key41": "LZJGffKAocboWzy75ji6VfcEZR52F8oM5jbcHkrTtX9U8FtqmQL9hq6NQnkqQohrdgoKmBvGwwqME4Z2w6DuZR7",
  "key42": "5QFNEVS3MUQdSeBV3PH54ipBdQhUjca1Ut86wnVzdDQd7wM4Aeq6Z45K4uDhbMic3zapkuXRxn8Yj2UJDajiPCFi"
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
