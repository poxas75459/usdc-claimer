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
    "2zJ1sRN6rAqumnQGrZxeLD1ys5vbeqqQNwH3Ek59jUQtMP3wA6YzdhQbwfHCcZbaae2vNnmBed7sBpgaoysXo21L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PKTpCAg5R2MjgyfcUC6euCUUA6r5GrXurCs4VbCDx8oEpbJ4F5sputJv5puZvtA8DBP1z7hsRrv2TVp4otQihyE",
  "key1": "2oEK1pR9tgkGsH1dTTNfR6n8hZ2JSmn1UX5aNBVw6yNzxicyb8LidLFuv8Ur8x7asjJwL5tRBxsw41w2s4PVVsNS",
  "key2": "4BgwStD4CrfaKACMAKnSi3C8EBveHbQ63nwY8K2rKoecj1GFU5KSkqqpeWGvmxQ7ohD5mrpBx6jSnjKhA1UZSv3o",
  "key3": "3bRwX5DjSpokgpcSXALNAYYL4VdwMXN7cREzUFvNzjkfSb2oRQHnG2XfEKc8rFjGDvjj2YjDenMN31UF2TYoAAq6",
  "key4": "5UxBmX4EXCNPGiVbm2wsFJdXtCvsDEXnY5q4McNyYdetrvUMDDgboB8CPjiSfaAkfXankAbM8kT68knbB9LoNKLx",
  "key5": "5pjSDF5NBEVyQ7s43Qv455rNXVmg6yKY4ALyns7CB9bdNrizEXQiyxaW4XegR3Ymrh9JTMqXKcPFEKD7ZrnSr73A",
  "key6": "2jj8mufarGvLVASXJH6b658Pmpo8NZsdM49VQqGRMSATRHXg9M47z4kpCNZkpGALiX4jFy46W9RrDxXfoJvmP9Zt",
  "key7": "2RNcq7JppTdzDvi3V8XV4xBMsGNSdgdDzeVs4Ux8UtnDwgW8JCMqiGKRpsQsbBu1XSQxwvYtasR9qSSbLjdAtCfv",
  "key8": "4rFmo4xcmHNc7c22eFwLBNQyQx7XBc7vLZ9sGuxtQRn29p8jda4x8YG4qZZXgTfDdLkrrzBoUbjcYTybM7uEB2kF",
  "key9": "2ff7wgVhumRrX7HHCFeVjkqqSLfoVta1hx8zqbgf54pSM4Y3YPHmiNWKN2r6M73dEqkTTXuGuiXmixY9Bpc6gPj9",
  "key10": "28pAx47j1iZQaFRCEDvNS95mHwwSRuX7HrP2uLUXqCbqxs3YBRPKQWYbLVidwRG8KvbekngS8xdxoCiaVqvUuyMV",
  "key11": "4BmuUboNBXbNpVcQXChxrSemgQRRTK14L4fEt95HKyVCLUiBercE6ZamTkqWXmMhSHGj2PZD88uAWL5RGNLc74Lu",
  "key12": "2Ehia8rBUivJRWbsu6DFgAeFvqZ615gSg85sXiTqFiiUdEPvPaPUREha7dKWiWjGXFGGDav9S2PzDwP1Ercyx97C",
  "key13": "5yosffcuLfM3TwrAXwLbtgQvEcSMBTSxVvHbEef1Ks4KjiTmz9xAbbimTB3eMXT2oFFKJxFZr6fGHF8Q6dW4Mk4L",
  "key14": "9rWksh1EXFPm57aW6JcZn1SmNT3ZJcfxqp4ELWBiewL1HEQFBS9cLgMRmN1wDoxVkRnRBPMZ2pTkbKbE4CmWjix",
  "key15": "4i8jWyVPSNaChXbDfc8C9sqYwFGJZiouTZHfnpjMxdmCJr6GMjFBGUoqkoCqXeQTgR77AvMfpUsSxixd3rixZwmH",
  "key16": "3bgUiKwsTZ6cqgt27GNGcNEBkhhCTtqy99NbiR81AMwek4STWvsyUtXvaVPjEJnJ7QpME9xAjDBWUPHS9jJzaT3U",
  "key17": "4QxW1yPD9QZfLkWscLxUp766fyC97uTghQRM4pieRFbUd5Fm9myv7S8ySLZNWzPAsU5rbgobVPtgaVQb2aPSUST6",
  "key18": "2NuiiDLPXJeqbZv9dBQLCQBghHHEfJYL5xvsyKi71tD7tjkuVXPrbsjuy6QXnDEZVsNXfxJbGwpnbDB64wHfqaE3",
  "key19": "4Zek6GxgKfpreD3Yoy9F6wbELSYjDLHJ6hFFmzYFR2xy4f1o28srVmaeaAFRPeNyuB9L65enJK9dtfRGg9wHULAd",
  "key20": "jU2Hf9dq6KBQrRopvQb6DvCyuXDwYJgt4aFd1coWRMGdLZfJ3XKqDWkcRQshpZGshVZmUs62yD2L5eA1KfE52qU",
  "key21": "4pSgNpJxZhneQv2trvPAkUNBKTMJ7sG5u2NcA2SwPTB16YpzMH2t5NLaG6s9v97eVm7nZz4wrpb5eqNKkPRxfWeJ",
  "key22": "5P3SWfoamBHJt9kLvzpvrkVkPS955Wsgv8tD6WXJ4vxw6ypu7tMrRy6xQcHxeQXfJNxciBEXFdQGyG2s7BJ9fAqE",
  "key23": "3EbvDgR32MvyZdzVG53zA5AtCSYHoFzqxPYKhANPPChfQ4WS8Sfgp5YxovgQ8U6rDpmeHftyWTpjXkiL8UhDw3KC",
  "key24": "3UxMXMX89WpyVNmDNdwTaazfa71H45Mr95ZSbAKPAJbtPvJX6rK7evDZyf83WRzw5cLT5FZAW3ZvKnUeq4A1fXrc",
  "key25": "23gs9E4rD42zzxhTt7EEH2L7SYTrW6xrHoYQHHiQRUi3zxPtWGYj6m3rYYbASNce2ktev1Qk1Q1F65Ubc5XfycDW",
  "key26": "Erj4s6mo9q593LMe5R4iSPr3A55HCRJEM6CxM58WU54EetiQdFfGbD9KqhuQdjA8GwyBaBAuWctLniXKkppADDX",
  "key27": "3S61iAfxiyHraTxUK7E6peZKaov2ZAzs8Ca7z9LVJmyAvJaEfui3c3ZWydohTBWeNh7hERqg546uvUqt7QPYjKBA",
  "key28": "yiuypr1dwoNtkTN9FK6StSe4YurW2KMb1rvkfSsEBk4euTQSm4rbZ7gJAJ9t7BVJe2JBWKp6Lt1m2UMkH8EKcr2",
  "key29": "5wmcYYyKvfDXvzsmJugRm2d3tP62zbD8rEZpjtT7xkHzJHFe6U4C7ziuivTZsXzd5RGHiS3dN51bUKU55acKcYHK",
  "key30": "3HxVQQRYKXGcnzw2PkJvz13nD1PbJm7v3w1VAEtTq4ftQpNmUs5PnJEWhY2Kar3Yk5LwWZMff31yRKfhJTpiq4Yp",
  "key31": "3bKKtzWTcMbKjTpPDRhrQiJLYB5Pbez9P1K4jtM5xtgzwf2HAYRtboxh3VUoNpsjzJ5z97qq4k1wjdBuKTW8ui6N",
  "key32": "31GSrZ6zwVAUfXe3xf2T9gRsjjzaot7NZPwnmZsvCHYFCKpyGQomTyoW447AY8cj7SuK6yTqPZx7QVomzRxtQv28",
  "key33": "4VpyJ8rhQBfx4nrV5akoDVy7QDFFr6o9EJVgLqFzgf9kx62HoF3TgpAKdZd9V5PJZhc7TSKbGNRk9aHrQ1MZC3cB",
  "key34": "2jDQnXemGja6hcbaoc8Aji6owaqGK2YZ1gEhvWUrxTMH78ZMMErErMNqKjH51eQyPJVpBVdrdphfXWjGegAVKCjx",
  "key35": "1ex6EW47hB96zNkC86gcVKcGgfspUeovjhpe6dEc3zAws11vmaEtD5n4ejHY9ntfM82gTerFK2yaPvDpgRJSv9E"
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
