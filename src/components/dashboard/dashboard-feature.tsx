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
    "4xJzPWkwzgbDSDYTB1siQpt2tZukw6t5d3S3YprPVVPU6GhZ3MsL5hsjKHinrnrupJDnEhB9nGx82npugz85omDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZZ8KaojAAasPV7CBGWoiAS8jgp4MkoUB3mER3dTGg8cs9UC8rHEGUcswavizGk1exMpYBCCh74WchqJBu29NJNq",
  "key1": "5HwKo7Hr5qREtn6Vg78LPcWmFSGZ5rivWBaZdhLRX7AXGyBhVAyPWeA15omZS6srcGYfgFh67NP3kuJDfjJscgP4",
  "key2": "5FNKujnoRsbgUSx6U2JwSZpNVGwBdYdZJ4Hwfkksmin1LXCZPh1ExLg26RPDBpDZqstNr2FZKp3TDqqgwqMouQGm",
  "key3": "3EUp9jnDk46WB18MhwwRouyDdh3dMEXd1SkWweU6MKZ5YJftWEDpEUZ63zgFrDk7VLYPv15XZiMA8U9g6K2ByWaT",
  "key4": "5pnXkQw2P4pFivi9vpBqenGPmGcQLyBvwWwtN6Bkb52DJ8Pz834e531aob2Ek5myQpd6goFHXXfQFiY1yFTJdx4t",
  "key5": "5fkRArZGd9FjWrPT1AR62QLBFoXzmfGQpaz9xBXH58RP8EZYBFXoXmvQDV49Mq69DRsZv41QxcbQuSeNv4piYqRC",
  "key6": "2xoWhdcWVwfvBFavHTUWxJVZeZGf13kFycv3ehrnUM16WqkQTbmoCDYj49jDdA6bY9Us8vwEeKDMqBYPZPFpiU5u",
  "key7": "2dGTCsJnY9vhGj5EL3QkQKbKL2KQY4FN9boESXev7jxbfDtVqPQugHi9hK1BKuX8jE4ZBB3Ys2uXgCDmkvwRQuRr",
  "key8": "4Tokc2NKup6LjVEZUJbiSpTP6CqJQL7uiJ8ENLo1Rb648Ha3GajNVMYyRBAjEfboyUxz9PeqjCF23QdrN7DxX3CZ",
  "key9": "4X2u12anedf92j5WoG3MvdMRohof1MTKsu7uB1VEZQqMuJXAD5nHynRZc9QZd4fRNfkV7Qu5cm4sxXCaGzXKAurY",
  "key10": "58hAryXpDMuUNjKkKS5HNFyQsr9qo9Q4S4fJv9nfZQrncbNofEFwSsqED7NHmSHEzuB6wJeBfZsaon9rzTArba9W",
  "key11": "4Ek2k2fQykn3auKJQNA8hFkdGY6Lf2RPVE2KCRUK2waQn86pmtN6Bss69QKNJhMzXMs3K7Qcgouf6NvQMg7s6Bbq",
  "key12": "3AwJJLfALEurgpwPq5uWXCtUMyLiF6qUKu6XiLpRDmrz6MaeMEfPf92S2EM2PpjeXi9XoDGjR1TDqLdKCGzA1k9c",
  "key13": "2vhibiZaunqUfL69g63KVsQ38ScBh2QU2EuEAXowvVCTy6eRRUenceYZqpdzA7xXa673VwkcYU91oQRoM658yYLp",
  "key14": "NqCsVHjFkvF459YVXth2pVWzh71GWHvZDPbqhtMdDB4NthLGQ23hShZ26WqeuDgnsJNjAKheP2463FPxUfWQdoS",
  "key15": "65dU2a3fFUSww9FzjeAENfgpQ7hR9ngJ4cWSivzMHKDLLhycmNRx964vsYygcgUT4pGG5gFGWjkfvTWnJwGsVMzM",
  "key16": "27AFNZCvkjV9gCqyuyBwTGf2dk2LQMdb72MxMSyAXGbVH3nq8JLNVunnuMiHGsEBuKtUtdYFbeGuo6PYTuyNqAzc",
  "key17": "2UZ14JnFm4tKFq2S8g1RmoDAoq2ECvyDDpscUXcyytkZoLw7VXGNYQgqCBvx2mn8uEhnRMp8eE5nYVn1P2xKDwzh",
  "key18": "5VjqYtWMPrabbAfa9o4m5d192mJyV9kB2uQdoar6GKPNm8ukvjdriErbhFw1sfEYrZSAgtT2gyaaicTbhMs1tjZG",
  "key19": "2aUnGTRPdshNFunMhC4nTS5bmpuxd1XKv8ctpMHgsA14HF7eXU3urq57g7pSaH69z6BJPtQSdopXyrRZggKhFcSg",
  "key20": "Ua1CoCYNNdbc7BUvPWDG777MtuwmtJ6VKSCjFvxSrnANJXfjbsHSfPMvjoVs3C74teF6zi1HvxxH9vgDDfyAywZ",
  "key21": "Tiejv1TGWsbHwbCUmgu52EnLyh7PMCqJ471heFxoM39vMmF1m4vshvZNMu1FmCQvbES12WGwbYgUcyz3QFbwumu",
  "key22": "cKirBgzsntt1NpVntPmhRJDeyMjrvjxWnCRCD7ZjNKBrYNdsTddAofkioLbMRsRdDTMH5P8SoNbJSxrW73qLExd",
  "key23": "4Y6uSRXHQ5ELkwwbNZm4xmRFaijYityHBkxiib6uhEPJA1jCXNw8fLGBrvKNaJzVmJfr3yibYrrPkaHsafsAyq6A",
  "key24": "5eUm8pvBxAv7JQ5fozVL88K89zQbSC9USkC6ieZrVmkf371CcvaNYP95rR22Kx65EWurppqv8NdUCoNozmLWYbie",
  "key25": "5Y41ztVmKtFdZ2JG2fr2L8vmGyhjUeJ3z6BBfN9zcGCpy8HSDorFmEMc1kozMdy1PpvJMNKvvkbnNdcfESNvx5wi",
  "key26": "2k1cXemebU7uExVSM6igzA5jGinhTR3W18xykd9Z3mnqDgirYafF2jVCeimJrAk9rqWkaqGM4ieGNUXtsZiM1Vqd",
  "key27": "HNQP96h9BAZBMJ5cNeJX9SRD5naG2ynrarZLUKoPTJPymrvq77YBaqerH6BaKuQDEbzpKULeJKjBLbH3wQGQNGL",
  "key28": "2vWQW6qNAodGdMdDQ2tLB4SWPaDw9iKxTzdrdt1qYejUPvX5NAAsGeRAfTwk7fixcTWcnDG4zPN6EctiNZVrxBHz",
  "key29": "4hYRxAnMyuZ9ezRNMstDrVX5gpDH1LocYVwcE9xV4U81JPmXoJk7Do45pJHsfXhGUJPa5JFSyyojeQ2kaPA4Gkem",
  "key30": "g6SAA3snjpqynuje1jtgZnbjVEFvD7A1785zbsZrXc2Tt5BEMiCrFbYymPqjyY8XYK3yHvd6KEKUzcfan2bBXWM",
  "key31": "24tcSkrdiEc5H9GLma3HQp8VorKfRQMAZDbwHiJqRHCTihizt9nwmLpirsKdMyRSMVABLWpBqxgfWArMnDrdBzSK",
  "key32": "bBC8Es7tKAaBMvTcMZSvMJBvXnxihCjQGfPfFbP7dVzCMojQoNGtHVABR49Y7JN9dV2gjsqVRzhNaqTV2xpKW82",
  "key33": "3ABt2pUWsqmM979Bw2nGhVyhdSkHL6QVbpgXP28ZnHPSFLLF7bLyvrvenKetNv3GwL3eaBLsu8MakdFLZ76tMs1m",
  "key34": "5ToB1bntXpkpiraEEWdvd2WuzvLN3c117v2oVpoE4KY7vQFQRabaaWWrj8duKjAhivESqRyjQVtWqEZyWC3eBqn8",
  "key35": "5hczDjzM6h6UeKWLoMztCZfmeZW4uotBZufmajyy2SNJzpwo3E8Lj5Er1TbrUEtMtUuuXMYiGFcgouvLydPRCAkQ",
  "key36": "5F2xUbHYBZsjgeauFYzk9u5hLeAYF6jSJRDqdzDCbqKRo8UQfzJcMJUjw7NXLGRxkrb5u8zMFjZUaJmrny1aJoSU",
  "key37": "Jfr3sUcLqfVdn5AbtSc7NJtT5PFyRNb575YdbHL5c6HnzkwB5CGFc3ZDq3yujmGV6Bij6yFyHF3F2xAE3cUNo7g",
  "key38": "2WgdnrQhpqSg4ZSLySwzAh4DkrA5GsgdaDgJoeLT9Dyx6ZoyYpnDvRLZMJ86FsG82yRNFJEgCiA31rQrfTePkmkD",
  "key39": "uFc9WVAboD1zKD1hfK1HEeyCLbyQUevSkHcBpCbt5g1mCD1DCrudKZitPbtXjZv9MmmWkqumkmSSqcuBbnKH82w"
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
