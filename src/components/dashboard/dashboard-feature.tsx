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
    "5RSwd95cqrNgPt9Ejngj74ES5dAVAYafRNrgZbcVzgGtM859zke8fRgsFcAG8725sP7pH454YbJa78f2Lw5cCE9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m3EdgkNtaZ5ZS98h3bb3jbcq3wPU5QwxsSyYmdNVJDnVNp3uMKkaaKh9TGFx9As7PBZzvw66gvTX1ZnXuhN3KYm",
  "key1": "638psvsRxXSkZB2fr8Kjp8VgJhBBcEVNq2Lr3EMzA8zMdzu3bV9eybkwDeJ6SPfiFP8mBZgFU4ngKd7xXDKGTmBa",
  "key2": "4QYRHGHQfg1wyWACLGub5WRfTGzZXLnyyfyDiWV2dsRHrKrDidm4Ch8g4DYPQ41MAxK3C8hCAgqJkW5xH8yGHbP4",
  "key3": "3Ms2TzZaqdbBnJ87wAQn6u2bjXcdsEuFhVpPWEJb3bdg5HVrz2kxpcurtJJKdWQT5tKVGn6RaK4km2hjixgLWjSa",
  "key4": "4u5u7mHNXqXe3vnH7SqKN65uBK4VgMNgz6yuiUQiaf1xrTW9j781AvK2XHa3QpshJy9bU1HgnFfzUwsQ1SNFmnok",
  "key5": "9rcbygestddZzPfeTZCRjYNmMMd5yUVHgCDLMthxpjUnuWW3aLTw4yMB3A1okXELVeUYim7VSvPwhR4iAcQCM6c",
  "key6": "5Xgs74DCZXkxswye2dA69Wod1ox2VpmvHdjscfsGYt62w5UGhQXTwr7mJUG2CqNipdeh2vqwru52oWunTzVDJFQJ",
  "key7": "Sa42sL4xZGVspB6QwNsdjMXmqxPyk5GraUwjB41Gcz2s8cV3obAXRLK8FRxhGrUHWUZYb6GAbPPV2ZBGMmeVqgy",
  "key8": "37ccih1MoYQUMBZdowaUAPPmb1CvGHCSKPBzy7DK2SV9btQRA1eEed5wiitdqDHMSK2gkdfqX8d5jH4fzjXVRCih",
  "key9": "5QTFkmpgnZcRnGhL5Yp3ZcZ5rziHTKmi9bCyxgp2uE5fbnJp1KLVG6snuzzL6FeEwk8jZt8vyaY7gSgGzNffmv6g",
  "key10": "3SMT6eHeUNsPSDfxv8YyHtNibB4YQqjQauECaK53kNPDZoPutFmJpCT6DhWMEUgHxCqxDTCCY7xHtQkAAi8FKZnv",
  "key11": "3BFF43vRwZW53AnaDvh2EuhhBuB4GLgt5Urn5s2E7EL8JBLxsBjN7mbDFej9Lp7YnKziTa4G25zefGXicVhvGUJ9",
  "key12": "4zL3sGxvVzjqhJWZRfePkpin9AYAZJGBNP5fPUNHqNUE4qojjP3Qq4D9pjEhVm5FhnmCphxwTYPjFJa6A9vLr6T2",
  "key13": "55e1kXYjK34E9o97mjDCqideXVssTSJj6K7iFjsLzDSoXk7wS9f12fNHhbi1jHqMUQAzg3Q3Q4Xj1H6aBKtmk7fu",
  "key14": "5HHRKBQdcnoPPksHGJ9bkKansxdzu3WWzj3Uy7gkaFHCQvJcvMreiTJQBoSpGWkUdFk79KC9zmTeEyD5uGnuXiAa",
  "key15": "66Nsj9HdHRfU8sHUeQxm3MGhGMs4BiNtiRRcgYxbMPSSuzf8fFXaXVkhcTrBw5oSWnR4CgbQm6bTSs7S8u9qjUTg",
  "key16": "4A6wD2EumpjXeNH9q6C5nN9CFERSgteidLH3MTG3479WfWxgat4L2hrJFC35kopwjSHp8wDFjcXkNNS1sMBQ7by",
  "key17": "2xKfdTevzdg74QQ3zQP34YWY7Hqcojyaagg3TwCQNT2SzNS4pAwHwHMsboQ9EvRnyHXzwZ43oYTT51zoWK76ihx8",
  "key18": "gTpCNkhKAybe1cU8G4FYHEDAqvkSfXfLA6tAsoRA7J4wuGb75KAbpyJLDxV5bbznzx86KMFA4Wdr7RF22oz1vhW",
  "key19": "2evSEaRRtn6csPs6x5NwWBRsh3BGrw1VJkZCB3T2oRjtD2KQJ3nyACtPjDvAQPr3bFk3RZkph5RAQyF1n9KadxX7",
  "key20": "459R8vUw5grC9CHo5f2Fcxe1SCdRpn69aqLGhRTYmLpBRFMxSsrmmsE9kcDBFX8RtqnPSxKHq6zaStHB9fLV8jMN",
  "key21": "5nBpPS3LsV34QkRuMwJPqu89D9HHiEsRzKwqyto4L1QdTCJ52mEb1rpFDX5WYUWQqkBJcAP3twz5UqWKQLyS9U4r",
  "key22": "4BbXPd37rvjrXcsb1pyU7xx9hEeGtkeyMdgKWMeUt7qAZryXncWdZCUGMdfXCM5guEcFdU5QLapSGCCu3iYTupdU",
  "key23": "4dZaH6Qsyru6tMeT5b3TrSNZhi5LRVN2MSk56jx3B86GDy4fQ9yaRZJBrDiKZEr99qzuBwYfnvHB2rALpcqgYcgr",
  "key24": "56poKJC9o6hao3VmZjYwtQowZSLoxxY3oMdVDdn1iaAfysscfRHrdia6uyJuxU9e8P8wrpeBnGJLYeCtyqW8aRxa",
  "key25": "5u9MqHPLeWLUwjmDhM8XGYKFVo1j36uKutY5ATBy4MJ1AFbbxUViHxAjtjZVSFVpJhrTYqhQAFzKfw8B5audgQji",
  "key26": "5E3KJnb4WqLJnzEHtskWUnBSnhB3spZaknWwWWrohsi1irDCgtcZ1HLqQ4ybVfvJwqWr1AmFu8PK9TnpMEShCvVV",
  "key27": "4E39Yb5dN5mKKTjY5MPVqfeYUCY6Sq356nz6rJ9EEDjEJnuU4h1EDbLgBgVoss1C7nJ9D5mXLEfD2HtVW5aiW9MJ",
  "key28": "2CjgkpXCxc5BfJsBRdbBziReuGe97Wt3kafKCxRtfmZc1vupvcHR6Syf9EQebEVCc2G4HyVricHjtdeW5JCqxcKB",
  "key29": "XsLBZk7vD8pNAvX9oPTjgDA4R2GTmEPszHTMuSKR7Z1Tbe1iBBNRpH8V7w9iuZap3UqRhvDwBAWUaJccVTi5sWd",
  "key30": "3wKDYoKmidRLGThacy2F295VtfEVic2HvzrqaHY42ua7GJ3XUxxcZFWN99nVdvoNTtJEp3dVgosYr54ZGFo57Eb5",
  "key31": "ffGSYFu6etfe4G4yAj63YdEfFrRLKp4HthEXmAAJhszzXdQSs6NwTpp5TG22aHH6RY4zayY6cDyduSDfDMouvCX",
  "key32": "57Ja3jyYpf2SfP744T1tYrykB3ajKuP5UdhBAEZt5ePi5weL1VLpsy27QjJbGS4C9VsyhoecB4CMz3YxCCSJJ5fp"
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
