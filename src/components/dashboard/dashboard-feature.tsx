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
    "5Q77oaUuBe7gSsqeM66T3TMkRyymAxPwHSbLLo1Hd95hzo9zrsP95GZ1wUaiQHSqyHwxog9bHY28qPcsmjdjZSvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qa6m4XJGc9jLge1QBgmEbZ6ukDbrtkmvnyeYy8foEBKjKx3cjFdgZocYsMWfbvwgSU1h9Y6F3UhjpigGKSyH27A",
  "key1": "5ospCADaLyWnPsvqrKC64RT5MMuJP33LZJkhTm59okz7Sbpguvs6Ap15j6tq5V2TdHHRpWsinLoGVk534ctss5uc",
  "key2": "ZjyJLP6vVBKVCekdh4EDY7ARwmNE97N958FBzEwQQz6464x6qyE5hJvxg5ufWMiJjgQfrdeoc1SaWE1AvJJhhMb",
  "key3": "2S8mcBfX7xxv94aY5nN5aBv5LwnYPtifu2V5nHFFhpgZktQyrWG6cJDcYevCmUnd9ZX89NkJb6dUbRi4yUcg4gpZ",
  "key4": "pePkXRwABDSmVGc2rixBUS96gX7DQGrKf8UEeQNfJL69iBi4bsPWah3cTMm5sncyCzUNzYuJWoqjWo7yLXzNNY8",
  "key5": "5iXqPMepeWNePokx1zQghhxvxBfvPCunXkNMhcRYwcRRMeKAkDe4Ac3eaJMjecZ4ZZVbRoiFVnp7H5XKQdhj6mTw",
  "key6": "4FTieceHqaCNndTzKoV8mWXDwq5Xb1M1E6s9ECMNUoH17AdDuJNn7a3WoBhizBPkAQyzSQbRkfjLx21JguNARHMx",
  "key7": "5Yd11W9pDoXrwJM4kT59GncSrxAQ3ACbkgEyha1ioVNjybsPdjiTkfJfSpa4Psr7UMoqem7JEuPACqwurccEbiex",
  "key8": "2H8ePEvQQUqhw3fw3NxzPiTDchtdcfAzq64TH4R38ZavvYt6ifDmfu5Ngry1mMTj79KBEu3EJkFHZvyifo2eSUUy",
  "key9": "2Fgyc7sdkWymz97i4bRwsR5x7kiJAhnp2Cgosyz6DQ7nGvN8vkCYd14hnySkxmRrvhHGXQXU4Lp9YeVBjnd7nHTh",
  "key10": "9YaBQAaJajQdbRVPJXZAo9cKg4rqaGg4Map3gKKzSwNNru7DnZpWh3rdXDze3sTABho6co7pwubwPfqW5nKUPJ5",
  "key11": "ws2NYsRMasSpUFM9wMajKC1kGMYk4SSPPZe5JXjeK5h7CwqJ8ijZAan7NBgAqVmPjFiy1hucrP75Pfiig2mNxpq",
  "key12": "2qipDXKKb3Az71qUssJ3rvLn6pmteU7kNQraBjoLknqz6eUHJsUvdEjKgU7fSEDNV7wiy1V4Jh8biZHeC8KBRL5G",
  "key13": "qrAkf6qG9BuiAcHMSUxGFZV2aPxg1RAusn3zg6i1Ew9FGSNfBMakJike17WBTFbTRqR2N6ZFZAypsRYMR2fTtQR",
  "key14": "3uxPspz4j3GgFSVKv4jQ7YAppShFFZQHvr82ZndjP4hP3CnXrzRAWCVaekHHKQbWaeipFKJzqsmcduw7afV4eCPK",
  "key15": "2ZJSa85BVSgGQ5MAEoewshswYFEUsc99DFfAHMSM9meEVEx1UcH5eU1zJMcpCLVRvRKbmBvDbhNahGCLyvrb6mDp",
  "key16": "mBjaQnrV2mv6bkUtBgQJdYstsS4h4tKvgXXtZEG6egqHUPqbzWwcbxZizxHASJWu1ngnX1Tk9QttxCKXLzn4rFf",
  "key17": "3TnfTfNU42fMrFKnfX47xspH2Vk44rQeL3ft9gcg7BgeuZRufV1GnodVtH3saHqpK1w2dYjW6dHqXRdAF6GBtm16",
  "key18": "5RgW93rpT8zb6gyxyvUBKhcvcjGeBSB4CmHnTSJn1iWxQikXr27BSsBGwz2xPSG1Y5VYzgqTfi775qrchgfhyAJm",
  "key19": "3FJS2rfvb7TfWkH8yfH6jaVhw3aoQqRYnqDbx5xfZzRGDSyKGSWLUavSGPqyH5Vpj977qkhCmKEt4bqfvzdgHzQU",
  "key20": "MXNq6z7Dft392Ky9xESsT51NYBEUQWTCzReKB46J7cRYkLh2rbwZhJPeq91BUiM32HKMP8XHxbrHsWk5EKFuKQk",
  "key21": "5TahKJBSmbUqzWYCR4Rp55gLagcEBGhmsHj69tnA51nGdUreN9mhWv4FFereW3R8GRbVtEYwLX57k8PBpWbKP79V",
  "key22": "3hFCd2XzH4duJiALSJYNZv7eL5mhf1KCEtHRSYrzAXuTthnC16SXKBTkRqtbTcrvTXezMn7jCkAo92T511Tp5agM",
  "key23": "3bZcQi2JhxLryZmcQuiVqzGE4iwsmAtWZpyDvA8xQYrkzjchHds9EDZaKdJw3MKeaQRSnRibfnAQceuTy3xWXPWR",
  "key24": "52PKd3BDAtXhd11mEEvx1122m8CaULTiL7yHDdNHisnoebko8g2CzZ3YfZcsPoME7ANQvjHnC62cst2Kto2w3Nb1",
  "key25": "4TQD54EfhEHZFqbipSu4uBhydwiR7o9fvSu2ZdFagEnQJxHL8tm2S7DxM3h4rwKMEc2gwYtVjXvmBgvbtfVDxBri",
  "key26": "3zHxSQjHVAHM3KZBPA5UAAvKAxZAGEgd9yhD7CiiLMDtTGaTeKb2bANxs6sk3cm7CDtWUq83NcLW9XDCQG44ZDDf",
  "key27": "3VgvjETbwwvniDQZJTmzqvQwa6e4nfZmBuqbDT2pbmfYDuM1rGHxgXjgTXJLZSBAdbqNdjYX3oriM1zeKnLrM7r7",
  "key28": "3wNQuS8NxeYmjA1tWYXGvXJJx3bBp6VukkGx6BxfSvFprQzNURb9YMqgr3R6QRazpECzDbLhmz5ub7S5q8TZYqkG",
  "key29": "2P3gLZv7nbtmkR5sYjFvjkdSsJ9aic2NnBnrducisSRnqEiTNuZGRy8qW4QLgVjjp6hKHcahrvhaFmwZDzV3LKua",
  "key30": "4StEjteEcPrRdzHzrBLQdvg9QoRFBCbEfoAZDrsyH3c3kdgoZHo7STkSPRuTNWvM4MS4M19ZXkcg44NWgCqgz48c",
  "key31": "5kA6EMMhTvP52aPDe7sywCpmjQTJxTucvZb2VruvKEi7dqgCjzESVKtT7VponNEQMVhqUTa1iBwYrtuwresXLiiH",
  "key32": "5aFTo3ebxqKJ1QryBWEgHHfjyugesKhMLKYY55AzdjF4WDf2whb4KUT8yTjCqr8w4UUZ3bVqTphQFw3FRqBhAHYk",
  "key33": "5RBCoMWAo2HHS8qtHqwVEE7tNQQdBSJv59d5hMZtinnLkvVMgzERaBQ6vUWsh66RGcJJmihf8cW13XfoRknkuHFL",
  "key34": "SCQghJo1PXKPNauo3HHbbJsGKMnd11f7qUiYnYDpoXd81E1ZHgK464PXJcSNbQVYBKYxrpByBTt9f2QFHtVaPiY",
  "key35": "2S7WPEeMDtZxFfK8kZs4MvZEmhZuXm9t6s3GUbWaj2ZTccHq5vKFw7dJHeaWwisyfCbVstRx2fe8VHDyDaknEcG9",
  "key36": "oK8aVHdMpP9TxDEcJ9CHcecXYQQ9Du7nhaxYATZ87NMHX6x5zswZ6vnDUrFDJZzouGytGkztk5Pz5wBVrJuwum9",
  "key37": "2NEQkc4uYawm89Gi1b6scMZKtDny8HsrUNYftb5Tfg28UAZDKw1kBkd29pvRio2BRsC1JrCoo3wAGTimnKvZppvV",
  "key38": "5n7ucPLPyTVVxYUJFDfQWAZwa3m5mYnUu7Nu7JGVNY33axp7E1EHmskw6KtEGiDz4krcQKQ5Dr2DEnL6Yd8sUHLR",
  "key39": "5sJutpLs3JRhWa5sw7Ryijxp3uyj5tnm5fgSEekBP7tSuyCXbDqrFjULFnrmABmnZwHxtfQFhPRmwH7PbuoWYuue",
  "key40": "2KivVZKHbf5VPzK4FeovcssFdHH1YYsTDf6F7XJh8eyQz1pUxqMo8X4UHk8YtVsMJrqfQE4yjoTU7bApB1zXDcoj",
  "key41": "4ZFyRpT8uycoVP6ojZcmTagiGLbHDTuV3MvrE4ABJKiEWqoQeoqqXE2WWakXzWXBr1KdiTiw94vMP6Lindu3tTzD",
  "key42": "2ixs3xjY4NYYuW2kTTPZYANHvqzu4KWZsHNgZvMbvpS3FUF7VShjZkxmEPRLRBkc7gSnx4smvoMDSNzcX6fRBHDT",
  "key43": "3sLgTRyY2saojZ9Jqp26g4pTwFzjm2k3izMmAfncVWiA2bWmUR96BEERrgkninhebXQV7m9WxsBkjmAjBhVFyo4F",
  "key44": "2dbdmZATVpBYkgQfDJGf2RXvXZRG8HmAzYACtmHVvSJW5X7UCeJqu9zZbmfTqTTBC6GFToGtBc8mMQuoW1PdfCPh",
  "key45": "3YrgaHx49wbEVPAe7M9y4wcAvTDrG4SFqmaMaKYeLJiPsaNjSKg4S9vBPzi9jnqE75GRWdRK1Z8gvatTSyR7Cero",
  "key46": "227SVQibzX3s3QjwVn6ZKKui3Drnwijt4ox1pQjXsnKMhGXpVsuN7S4qLjf7qqRT9cM1ReyedQoh4pbYb4vXzzN3",
  "key47": "42R93MfvwWySRddsAXBaq37uxwCNHbEYQF8HBoNTpA4nScqYuxNcpYYTskkPbuscFSjzUZSsfufaCBG3hRGxgwLH",
  "key48": "aCW7rH8sC7ZvPaDim9EnaRAN3pHK2vUQ5gNZ1yUJmJ1P86Q91Miko3KkndTvYF91HWn6xvU4r79M3P8pYqLAAE6"
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
