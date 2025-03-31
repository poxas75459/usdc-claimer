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
    "Cnr32m6DcsVPydKJ2zHVKVWaESmGMUy1RJpFU9EH9gtsHAcsJepEDvSzhRyVTwPw211K31NqGMg6RLsWGfz8Ggo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mwjFtdDZPxKFKx3jpnjzZXNAepkn87q2F98hEa5GZkwKLNfE37rH75Ka4tyjPJr52hrq846nfe21LBvKbbHjPM",
  "key1": "4Sk3pd2hevL2JgnPX2CRTzprbF3ERkkugeS3LN4PYaH8dqCYFFh6F1HTUtdRY5QVbSdvg8CwUQhdiQazXNtKN4ke",
  "key2": "4oPM2adbkbpFKkt3toytgW3aXG96v45SgrghGbtJ9ELNZDHc8UWrf9nFEuRXBjnRBo2AeNnAdn1tmKZicW5igTWd",
  "key3": "2wwRgnuTLKaq8gsV67sAiY3Fkiuqzc9oHo73to6UL6oku9GY9bjvRodV9Pmfajxhq5WoZQzRS4cPAynDfHoRoTY8",
  "key4": "3kuJYPaBRGV5CxvBThMtTwmdgQq1jf736r4CFnr9vqk4MZNP6ttTfCWosy2XeY5PepoTRP5w1gR9phiwL1kcZse7",
  "key5": "xpdGZ6MbK3YZuor3VY7d1d5i5R6SyQA58fpc9ebaZi9z17qJnxYKSRukTPdnp3ErDUQB3oV9K28uSJE3WA7MKFG",
  "key6": "265hZV8NYk69rHuKjNzhenQsd5Z8awTcVzCAkoV6oguiAHVHiS9KQBdNTvEHba2cj4a9a1dd9wMy6fx1T8L57Kxh",
  "key7": "2WKsuCLtoAytHFj6pe6XwBsitnnJWrWrUkFGHv4PdN8sT5Bp2X7gsEYNYpNToc3pKtKDpeiACDrUnViJxumQWsZA",
  "key8": "5eRg3mUhqDTKg7ohGNmBDLq4Jjw5A9ELHpDtNbZyWoxXKujPiCwtJCw7yXQXquy5ipV2UuatB7ETvADjvyUMLrLR",
  "key9": "4AbSSoYL6uLMMaqr1yfmB4isRjhd4AE6fKtwXgkjiUSpBq5xEZtWsBkKcvEJGAS4qTZgpaDvV8hRkWfP3n7t3rke",
  "key10": "VeY96T5d69sjwPkHaXGbCCSPfAFcRj5RjAKhy9bTMkd3Kxj7tpM2w7HAGBgkKzBFKMwTexw2crPrRvU229oqWP2",
  "key11": "5LSp3JTRCwkoQWtmeFYNd8xeJAMHDXtaZGArtPCmBK6uDXsJ2vUDzCu5p9Vu25uWiWQg3LAE627CGxfrUrpvg8nK",
  "key12": "5W8EQF5rFaP6DzJ65bsjKS8vKNYDuh6zDM7BapKiSPqsE2pdG5HqLDNYo4KRj8Tu2B2xjZD4N1sVtqMmWbzR1Gn9",
  "key13": "3mBj2oScUFpAgGBysGJwD94LY2HsV8cMMYLrFy84K7nr5unD41nwA7oij8veynRK81ke536XkRpRMQt4eAZnyuFY",
  "key14": "5oukVom754w5crGjDDAJKN85QXiGDAfRXZiikpY3sVwhLHS7pbHF3NDtNyHNmxC1QXzSJ9pk37LdihcpGBGzYm2x",
  "key15": "oF8bwCaF815z19DBHkC2Am4EZSydFK6K4S9LPEVgjdBSHwgpC1899a67JPvKWyjWZhNf7sfhtvwvKKKRqCthtUq",
  "key16": "4R8sduoinb6hytPGiMoWXX7UAJmGUNMNZbZHDJTiAqBhGV478nfsa5UNceNJrg3otQEHxp1x1U8GRogLHvoyHwL8",
  "key17": "23niQNoxBbyKSxawECKxtWsy6eAcGmLM7X1poMrAb1RgjNENTahEdxvcR1DSB4RbP2Na89pK5ERbjAWCwfNr4qWf",
  "key18": "5smShdkJ2ugNTjLqp1Y6YT7xiNR33Q2L2T5E1ZsGeBXvxiP83VYkVvyRZsfopUG6CSESZGXZSjUifYSy4gdeGTjL",
  "key19": "46Jk1EUs44ii9NLFbQYMBhDBqYdv9Ts9M3raHJ2o3RZ47knMMUcfsnYwMUj3yPbceaK9vPYfCWkrt6cTEFh3DJDA",
  "key20": "2gywpyf3jJSSDyReEQoBWMopugywDj4icfGsfnG6nyuoQz8FMvBhLza37ZXrJmTsYhJzkQpVDtEvewGpuaaxxZhZ",
  "key21": "4xG5He925bFg57TuQLjDWibcJqJGqYhczRCbvChqdBkmoXVTRMtKVhKeCCWH8DpwDbXtbZnB3CLmK4yJbZ23qF51",
  "key22": "648tBy16BigF8mHTSfrzW1W8TYBmsPxgkS2ZbNXTHPaXcLcRotLH624PCmRQLHV4nSLG514ob4xRL3sTSvBUGJ1Z",
  "key23": "4dshco1cTGDwu23LF52Nrq9hYNFMeTrwwCrg4ciJwi7qiZUxcUHtP3cJ88BcnrcxWh4J7ESJd3ME13MdkqtPN1k1",
  "key24": "3JTMgvgXgQmsMuSJGNDYJwvXp5LbKHeqX12DGsKG62dYCgUZCybAfRK7P2EVSkRWFn9DRrn2grqew7mVQkmFrXdS",
  "key25": "3gepYTJ9Der6wBroYAY9Pf7USFKcqyVwpuM42z7NADiP6X6XoQxp91yPFgQ2yySZM5KuWcuMALK1sekiHmKREE21",
  "key26": "4ib9ydsLKobNUjLSXcBZmrozGeeW8aGi8uCtXx8GfQuQwdkZNADrwo7SWvh4naU4H6Mnm1rcZWRmDEEZpCs7stLa",
  "key27": "5ReG381RzSv4L1cQiViHjN3JncisMbi7bqbMm7m9bnYFZfAhtWx7XiNaaEXuKWUe6Zj9w5pvxqRqnVXN6aPPcpVr",
  "key28": "499BU4dTR8GUzRtAL7qGaGEfMgMY14eubrkiRyZo3jmjw7Ugc4D6o3gg28VZoSwNSxjucbFd4wcbCamdF7HqZM2W",
  "key29": "4LhHUFcvNPGd1Jx3Qdd4oAMFQxx6UN7SjFzp8ogcozAJs8Vb1QweDrCjkgX3QEW1kN4CkAJk9Yq3tzprSGZwM1nf",
  "key30": "BBwRtJA6K3LqKYy2DbB7ofyFq2ouyDBPTPpRB9GQJ819JJQvdvTfHbJaq2vA5HMvmRnDa4vsbuqH79i1fRDey73",
  "key31": "5whiHf2LJ76Ca85Xhb8sFVkFwVowsRPeyf8cZbhNXxt97Xc8Jq9Wxvx7rNhMoWgVhRo3DRMmGgpDXYNuMLzyD6SY",
  "key32": "3pZjoZ2M7Jdv38b6ED4cfeScizSjV7yQCNo7vNMSmheaLgt7nY2cVBKWP7MsWQ4fxX3CZReQQFsYBfZu5gjivxkp",
  "key33": "5soPH2kB3r14RcC9ThpDFaH6wWm5shKERBRGKmxRx9KiEUFzmKQJNVcKFMDS6kjA5gXgCs2xazCLGpmBsghWdjwf",
  "key34": "4qu7WCZZJruLRu8GXi25SLjbmAjQ2NYsVB1Nr1QcDyN2KySg6ZGe7yPVX7eVF9N27q5q2k9DmoAG5Tthhdf7rgyC",
  "key35": "icC1WLBP1BMvx9PQywpN1tKra4wmiZUEpxcFwiQQXCQYkw7d593pVYb5tVZbbP4xdk2Fzn7xrqC7ieuCHUiUbT3",
  "key36": "3BxvmbPXfmL3GVU6STbBWbzSASamU3ZrhntcQQjHENFnYGopJh2oHhVUJDWnTo2Apxuc8bhQYTrTiPL3gwuo2zBk",
  "key37": "72UVqzEDNY2xsLybG7ba1guTFGJAmQJs18yt1zFb3tWdbDNRymVyynRj37zoPCqqRfeVqaAgD8vFrEhTg4hRdeb",
  "key38": "366u4Wq2nhNpeEzrLpX7WJE4JCkX5yQa7WiTFrri1msPnh7nAS2mv2PnG9m2o7NwEu8Var6zH6QbHotFLio1uJSN",
  "key39": "4NH8rhWvjrZp8WTsTJohBHfTHWqMi4KHiCKk6onCrsCSE2CCxyaTpzjWU3vsGhW67Xmy9fLjoYLmNFR6iSy6cUgu",
  "key40": "gPnN3zJ6QdnMRYFFtPZHXuzyB5JvhJiSa55FZmk8B4xDcQgzhBYcY9VT54pxFqAGCWaboqRuAUxxnjqrBevPgTU",
  "key41": "4hHbS4YVi9MxJaSUBZVK2spoNU2eP8UVkK4FwM6Gj4sVkxvB7b9ofp8ssfmso4vWi8XfY8afx58fQS6ZxRnG2LM5",
  "key42": "2e1hy63F1B5HVmyDBhVh67jnWDEEHkRNxMFSxFwT6QqF8oQmevBQurFDjFDKhCrj6sS4XPyBEFpfjJ4rv5BZS3RD",
  "key43": "4iELrE2aw8EvfkEoD1R9nqCwFeM4mUiuLEALw2CFcUsFbFQ3C22s1X92VubB6HiSbD1WJecxo5AV6B3JJdQDRkF8",
  "key44": "3Q8MHFibFjF3Tw7EeKe2svo87xDj4V1WkeRZF9Gy48WcohBRFGmo8ozi6KYh5CJuJdtgHDxcDzuKDdhKLp71eBH8"
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
