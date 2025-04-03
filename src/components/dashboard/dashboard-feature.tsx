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
    "3a2cWW4k79h1jSYCpfVHeYB4krRSfX3HJAM4ZCARNkH16xiWswrKA4dmUjMbPSPsZo1TeNQVdsnV5oK67uem9rL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dz5hXg4GNCZ5CBgCQq23Y8YDbRF1d9DFcZex7sawY4mPKzgjhQwGavxUJJsBLmAfBPPEZaS8VWp4hkxvnb5yQna",
  "key1": "2WcWMduvAQYkvrP5M7mJD1NgEHR9vNM1F5a62NJmbdAs8w4DiguiiZCiJwkJPK1hvWtszDntUrAMBVijEZmnz7Ap",
  "key2": "66mokBr4fGNXZft6gZZQmZBeYQxr1rJpogCNuYpN6w7oq5P9NqSSsXKnGunnqDxAunqczXCymDeqcpXGthvfUXYN",
  "key3": "BLDA26eh3XvBSa7q75HjZmXTsYT89rH8kDeJtmR1sg1Ggvbu9RsHjxSY2pE6ZEF16XNyt8FGG9He3cJERe1Pkbh",
  "key4": "5agG77HLcwEMMWQ3MpwAGea6aC44Vm7QvMxsYWyFHTU5HpwL54DCJqXdosFM4xcyreydNXQ5mHBu5PYyaStdYfyx",
  "key5": "2MT6XqrYwfjvhCvKzN8nVFLy7AcMdVRegrzzhq7n4y4zrLeQfse9t5Cit7B6JENTwXm8hDcaqSC58H7d7x2hYGWV",
  "key6": "Sk9H5oZzF1ZVJHz9EYL2Dvzde2xiZpe38bzb9fj9sGobYya2iysNTYK174Z6hyZpZYMoCM2aLuBZHTSwHNjqJ5B",
  "key7": "1WS5NKq8Mfukn45nGJW6A2iBcC4SBHRupNKAa56o8echwKQy8YjR2nCViC31fA3uER6cSV6P9icdaY9MRppcB14",
  "key8": "52vU53MAJ51F38Fznn6tgFdP1g4BEgZ5uRenrFH6YBy5Y4fDYup8N6VMSvfcc4gYjdZ1s8e29MqFLmCPWzhhaAhX",
  "key9": "5F1C4rynieQ76MxP8S2NWAwFzs9m9mr7cLEintFX2fV1V8vZmBUsC2SmGgiKvMD6yYCHjzJ9qpnjhk8j4cXuXciZ",
  "key10": "5SSHBN7qfwjNn628kvzNYq4uAMF2umCfnHGRyCZdjd3ASghVSejrfoN6ByttqcvpohXdQTMkxFQLQ8sk5Lch3gSR",
  "key11": "4vGBk4fYmoALxGonmEbSSvz6QLpCACqEXvpGhRwxaoMnebmoY84eZW7pUiZU4b7AyxvPTrcVEo23fPGfymY1njdP",
  "key12": "2qZQarz75kdYi4ta5qetWjvWUdFPrcB4aAHt7VD76UFuMgHm67XwC72pYCVngVdgtZQ34G6QWg98HLLa2Ur4x2bi",
  "key13": "2qQevzsocu9FQuhnLNSbdrj7pA9wsv9Cu6UrhvqUEAzAwz4Rhxus8dsqD5v6rwdnnkNaHzdskPMdRYiVsuztfHou",
  "key14": "2DUHVAufkVFsHFRHvCuZ62W4XgBCA9GnKxX6JixuektWZAY4jLnisCGghGGMj6ht6hyjJtsmmoChuwnGKZFSfQUe",
  "key15": "3oSmcF4c6gMXn9NerLTtkXr4DUgqZ5xrpLV2v1JbPD3y6DUEidt3MHHtc2Vzk4g5Ychmmk69KX2BvntugsESpKR4",
  "key16": "2CrfW3JorTyC25FwKr4XYJhgKjrzyX5niiDyjteSpkYydnLFus2goVfmMbLQ4yDofSPLHuChZP7HprtSmcahbcT7",
  "key17": "3ZKDxU7HJrjKGtqWh3mGWMCstx1K1e4P3RWPrKXRp37JRpJKZb9KBHYYwHf6tMcwmWo44LSqGiSnqD461ePqciDk",
  "key18": "3NzNFy97MUPd2i3XKy7fpjbTufANDd9i6r4LsMGvkAMkXKxUEmnGK5yaniozzj5vxFV8fpuR5cDNLxWDTdDk44W2",
  "key19": "Ve9jmThVMvxSRGDNuMbNkCniWFyS8Yk3FwkE5CAq5oXzrW45Qso598crTLM8FtmJN9Q1RrKyk1NggahkDiwn5G3",
  "key20": "2LpC3hLJjADSgB7v9vga12nxZ89xz3UiqcMbRwix25wAzex6AoHEhyb8itrQiF4Cx1ReNSPEkdq9LaPwe2aS3ngy",
  "key21": "2y8hbymREm6GQSH54QRufWywxHnJxvLXE6Uz8j5PFoeonkVsGJXx368W8rsY4BFrsbrrbbw35SkUtz2cwzXKQazm",
  "key22": "4FZWHe8HbQVZw4WBSDMpAQH6HvonBRFgLC9i1CuZxBuqRUiyghwm9tRdS2LbNspJvcgd8gs6vArujUx3fqdvwebY",
  "key23": "2B5uHAn5SreZPxP9ZBUujEc6H3zPiwPPSDhswZP4qSBLPskaSdWUeDBZMLWwdm31tCT1iTESWBqBZKMjMNfBU5sP",
  "key24": "3EHcpnhQ5X9dcVZNUZfoVKSi6JbEsBP5kVMAGjZyBfH5ap7aVxxDUmh3XTL2eMP8Q6y8N2xqoUbv1mDN7XSs1WGD",
  "key25": "5rdcCA3yJwFqbcaF2oupHSs3ZLRJdT81UxBG6zDykNAm4hQKQpnbjZg62wf4y5PSmd7asmHEBaUx5fbA4JFg9FCa",
  "key26": "44eaaGmSFAKBAVFCyK18jhWCvQpwsmPDdRV7LAh6r2cxerBUHrsLkD8iFBMQ6jjz2mjkCLgvzJ7WAR5kWU6tXL9u",
  "key27": "4xxZHLUEKtDnSVrH5LApkXK4vUd9G9DF2z1Pg1FzJt7NN8HfxxBzQK6TwaLQhWxn2eXVdfU2MP4vnpFxAL6veLVp",
  "key28": "5YXC1DD6rAa5e8QsAxL19624gjuy2LuutpkpogeDqJdRgKxckvBUxYUsd28g5cbXAxUiP9hxmD3UcXJAMJTLbfWS",
  "key29": "49Q5fS8w57YeSvamTni1YBzdLPmQDhJYGNghYSeiVPaHnqrjRAirwAwEuYqHFKjYnN7HkUFmCEJ1nK6Wbn3FUeMP",
  "key30": "EupZAMcdmmmok5tU5ucgfXgWwBqot6HxrZMRfdZ3qg5pzbqrJ42UyE7KNh7GPKNa2A4jmUzVbzzC8fG3y2qDXts",
  "key31": "5Ek3EFLj8Po3mQMMgZuAWgxNxZ9FVDFecdTWopLF76zLNRaPLJdVvtVgY62hBG5dsFNdyZyG3QpKNfYdMWtbobHL"
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
