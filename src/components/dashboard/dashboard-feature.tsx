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
    "n6zcV76RSMS3uCxmAihDN17zaooMYncZtoGhdaTn2iKCzzxnAZ1WXXQfJ4hBoFP6nbxhnXDQANZcAng2CxFocBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YyaTbuHhDCvK19wKAT334GtZfNvuSJLcwkvPJJQ7ndePf9DiBigUDP8wK3Amiqbb58mijKB8XfBk81SVKyiGGNy",
  "key1": "sfmHiTBYZDkR2qbTR69BfgSEtGkjyy7ZRE8HuTp7C1HZ2qC1GzsebKqp4Gxgv1H5h3Fe9AvFgaEnx7ep1kbYTkn",
  "key2": "2jUUQ922pPp6bYrqmExFzU4KSKTBXCecLkNerq8MvSKDNPVg1J2F4zf527YvSgCCpyVwF56QugQtwcwzm6moUh22",
  "key3": "2xq1WVdok9MnhH8DtP3Bu3vjRBdBA1TaUFk91rR2eyNR2DFB8J4MiF972uEKruFo9wp4m7e8B5XhTw2vWfcoLZQr",
  "key4": "XjVh5PavmeFLSB2Q9eor6ndiDDMNDeYCRfFsZftHGg2YFeqqLMYVhS4TWYbCEjmimLjHtrrgM2YTDKQKSxu3VVx",
  "key5": "65dSbHUkDBR9CrZJdKGFfJWKaA4wMH1enDzkun7wacv3abp7BCp85JVXhxGXARqGtYjXq8ULHifpMYxocCpMDghM",
  "key6": "4FSg8tGxtKViVHAszQP3ijZMFoEb7zrgxa396DoxyuMBQi2oC1xG14gfKMEjkNMqunEfZwMm8HVeJFaxicu89Wyo",
  "key7": "5BvtZy5rNCmE7sBcF9d7xn34xdHXm58rZ713UzSUim4zfHWpkJXvnN8pC2UMaSi3nsxZ7Ymn99L73n3PojgSLSfU",
  "key8": "42mSVirQLpiQphvtGicTM9EYM8T6ZKRGWngTY8xKcrfNpNCx68iyfYTjn1fK6PVkyhZMsRHQsbkKCCpAFRHooX67",
  "key9": "3x8WE7HnKw8ozgrV5fQLctEMx75SKkoMsgs7SbmbLks1ABWg1of8G8fgjW3DieRueb6METgskkNzh3639xjWyE5e",
  "key10": "2hCTWMKLcZ6g81AmGt56k4LELbhmhciThTFaeN3ZTQ7vt81rghUSPFrkCc4MWVLheCkPA8jJcowTnxi84BWCTTji",
  "key11": "273u5jGNq4EjaZuHEHmxEUV6qKio8XP8hc4ymfKmzfm24TR6no3mkxXhYx4bTLsfh3eCTkGoLzzVcaunyrAuVFGJ",
  "key12": "7WroaBPZHstjwPagRSRdxeh7rLg7Q88D54LcyHSXWYBbkUHZfMJ6GqKdnykFTWWQGe9ZawA8GTQU5iHPuJNEHny",
  "key13": "2XMTgNm7XDwmCYgcj4npbzDRd4nh6eY9fc1m17xznNZoJPngaG1BEx3PbTwgBhqLeXEdH3TRZvS6XwisBWJjDYai",
  "key14": "4qKa9obV9sEExzqF8pZog5Z7oo7GsAEjZU7mWP5vX8KUGY1dwNz82Pe4R5G57vuVsdmqewWzco8paWMr73siCfnq",
  "key15": "QwMY4YagDcSTQDSdL1XuLVWiz8R7osUNqSAhfu68xooeitE4sHdJTGNY9mttLaPoe9XZjyAzpSXhSgibzhKoDgs",
  "key16": "2XvSFqJPBMBg1knx8DcRX494zWFGHf5NL3wKRSvNj62L8S2EYxNbYmvzKywdm8bBPFJiroaVYB5BzL9W6guTNvhx",
  "key17": "21EF9unUsoKrb8J1FsFnVqx4bYy3ssoXvDaWPZDERdGFe1k2TMLLEo7kRUQyXrNKaaN2LxcQoMLNw2VSGYg34KXf",
  "key18": "5dTRZep6oag5kDTqDwF1anTo9kF7i2EanuMuMaPPsVCu4VeGrcGQf1gXgGXLtFKpGbtCsbmoc2DTn5pC8YFLwQyp",
  "key19": "59ZM89RtMNT2HeWG5XSuRN8yCBp3YPDFDsdkU8QzTdfAdUadpLvwYKD9dCW9KXrzuvTYTTfaFhd6mxJzxySfsHzR",
  "key20": "31UUsrDj6pmbi6gpJNjL2BJpVBnRgPiozmpWfv8NsG3NNL9XcXfBSdr4sV7BEp8fc2m1vxaVAB477EATHC4cxaMY",
  "key21": "3KeFn9icyVozZuvWMjfTiNXCCmdTb5XFiQ7yH6Fd31RpkPSHaxZfL3ge2yNyyGUGfTBQz3vkGhSNXb6PGw2xiqdf",
  "key22": "34yQAb1nUCpU2XwoiuNRihpc4rY5TPNoQFNU5hEZytTWXdBhtvvPbFc5cAcdkavfo5oL5RjaRaFothmDamf37jWq",
  "key23": "56mZv3BCVEt3KRzjVyMernPL34tp7GVSrwXQMjxHBELMJHUQrNPBJ38CZS17izqD6cG7Ub1ge1gPTo5pQqHgqFQz",
  "key24": "31Xnwy2uJCQzPxJiuzcGKgFoesmQwhif52CDwan77ySAAdVLyFAJPQubwHtn3TBykEzcFf1qN3mYev8a866a7hFV",
  "key25": "316F48hWjK6xHr6Td8x7bMwSuBjVaamg7T95Zg15fuje32DniHUD25MDawcWxM9Z9a3hn4QLMY2uTbWo1uCs7QyQ"
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
