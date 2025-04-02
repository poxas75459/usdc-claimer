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
    "31gigAWHwdVZFm7XAVdzi3N5S4p6jWUfx3kmwaWLza4qa2x6KX2yGHBMmAnyoNikF47QdWbsu82rZy2J6fLzDVc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wUkZTU2S5NSPQoKskjxaRDMErnbNNaM3kYyeYQzWE1PiBD85qDMpZUY1WHp5ZVP8xwYCGKF727pZRmWanMs9qr2",
  "key1": "3GQ2UecqnUU9siPdR2Rwg6ARHfKgDhxdxvtvGTsWdPgKk4zm7KYvLR141gxYUKHxRNS74MRVG26CDjwLsRJkBvCu",
  "key2": "iBjWYmjS5F3SgqDfKEgYzGJF1AyVVL84bRA6nXoQsfBT17D6ysmf2jgPXEegbiMkTUCqQRbLFaUCRjW6SZJ6sF4",
  "key3": "1DtbnZqRkNcgPr6zKezoUKBwfxQF3Eu4iLeZthSbiBLgeRKxgD26kC7TRy56EByhfBHShSuiRQ1a65gnBFDu6UR",
  "key4": "37KfJUVeJkigGxfaVG6hAKW9PtnCDXwTzpi1L4sV2bWeEoVs96NjCVB7P83CpGSvw819x65ZX3pLRrGCktfVtHMV",
  "key5": "sg3hXUw5p2K8z5K5irb18dyEjPnLFYuVxqFSctFnwjwUxhgoCj96dufFbyXLCXuce2eYc7F3ZcER5qwVYV5ZJ3T",
  "key6": "2Yb26SR5icYaG7CD2gLLpMWyzntaoDPoB7twiGfK1NAhqsGcW2kEspTFTFhpHZtmAvGWmpQLYHVK6gRmhkMYVnru",
  "key7": "2F6y2BZ5KBAnzDDU6S1dHfRAfBkvCx2V9GsfJ6HTRkWYbjPUaDSsZBX37uRsnPMHBbzzdCuLzaehJxQMKeBtS9a9",
  "key8": "K8tej44avcsdCfsfbPtsFFeXdkkb8MzLEiit7Pa2PYPREn3rTjGfTZAacakyCfVsr8CnfbAAWARKFuwkug9FSrq",
  "key9": "31urFtNhFP78vBHYBGBxUC9Hnojsm4mnJRPauN7v671pEvWexvEC84iLVW9nKpWFpWeiBHLq6HSuCbkdSvW18Qfh",
  "key10": "5iJWVBRaBQgGgeZDn1jUmJJQtuKKAPcnxoK6WnbaJ8WNHZjW4v148cYrfsC9qE79rKFPFum1eJyKhvpfaUetgf4w",
  "key11": "5kxHyyzVXDKKDs2d22UoosLguh7Sf34QUnpm31BrFFnMyNXDnHxhp94osuN5cQpg89Ts14M9baiswvrzZJPCtJ4R",
  "key12": "2kGTnKZxb5vHwovxMbKAFvSC6ah8taQXDJf81TWTiowgk2ao6ZgS3s4PZftW1nB6Ur1SkGr7n5Z79CdEjuVbKj57",
  "key13": "2A66t8e9DFFhDEbdBMkNmEwRcog7zSP5vP5ux5Qqp1dRk8hXm3ZDvTiNEW9NsTJCzJvTiyodZTfv5Qqi1HWiPQ7D",
  "key14": "56aqC1Rdp1DDYZzGCQxho5toNf44MoAtg5kmiyKTsU7kBLXH6ugoDVginVE1cBvvquvjs1pPqt4goXfnSADJD1UZ",
  "key15": "3Zyn45nujs1ynreDoTfkxQvckizffPDSBDnjnzbRkbHWJf82Ph4WgtXCTuU6qP3iZVo1WDe295kL4Vf1GBo5kURF",
  "key16": "5pDKudLzEX13geRMb1wNV27jo9bUuwXMRJ9fnW8W2DGmCVon7XBrXnMGjuTpNFf4kKc35NzyXJEHPr8EmTbJLnED",
  "key17": "5t7F6gG6NPbYLuRR9HkccqrffoVRBfkEXXEN9ffunAjVtCyteNcVojcYnEokTCpLVvPiuNhx5LGVVQxeiCr84j5X",
  "key18": "j2XeEWpxUYEqxcFuJoXk3yAk1HqxLymkzGwFS8PbuSnD5bmprJVeS5Uuyi8TiXvS1bEYYC7ADCbSmiCfJDFnfJL",
  "key19": "4XaZc8Ux53NLGPhYPUS49Fr5pNZo2TMXgyAqdKKVVy44BC2V9QekrJFYEDEgUnbWLayLmFT4KPSKBmE8rp7PbCTk",
  "key20": "4JWh9jpmTZnK7TZC5yxCyhKGJP5GcdmbdnjJJEohpPUQtjtEmLzDgB1g7j7TZ5pje7AP9BGHxrbsQ72aoCb2M4TB",
  "key21": "538ecpLYkEzvFyZdfWWkxzjSHK6TGVM5wDz9Xh5Tfo7jSZVFK7eNFRRj24j9EEBRtow39XzanyPcCUU6jM6avcz9",
  "key22": "2JEt4oVDKxWj8Qk4ovd1FosPxTDkys2NVRMLuS1UywsRaHMDZBZa4jniN9rsHPwh46tKABhMyKtnckos9r5q2pwg",
  "key23": "3tenSwfgWzyfzyaGVhN7BUhyPs2AwFxTxmeuA5KWdLNfuu9eGfuFfok4q2E3ERqFeRAtXook6i6rPaiXzoAE7D9P",
  "key24": "w68ob7UqbZjn3Z8jFE1AmzzSxVNVPpcoBk7Kvu33zuYx3zMzW2ThnM9mC58RaJExZ5urDN6Yej8cn4qsL3oTjHR",
  "key25": "67nHPXbVDtD2scPjDNgYe3Bc51KUvC7RMNRBbAWLpyvTaTWmHz1az6qjBcaxePCfNpTFm41Wdkdx88GHd4i3Estb",
  "key26": "4cnYfhgAyDYwzUGCWzVaHi4qwCYV4LeModtjw62CMnfFoPN1b3oHbxuh1dAjaDVeM6uPuHxiBZri7njbeMzKweuz",
  "key27": "AVx4ortuBiai3PAWJPhoiaiRU4CM7rohyMC7wKrwR5KKHkYvcQPsMfQtzH8BZAJCRXYeHenq9QndpwR4A4xsdvx",
  "key28": "29RaDnsTrA4Pcodm5KRzrPoWaT77sBUAxVouwwVbgyQkXqjg4yuuYgEmq6qS8HwmGBmmHydEGUZQ9PdMG9MfCjwc",
  "key29": "5sZUbRj8hMb2TiLVTVmEDZ9g9x4xFMsG6ErFSMTBHPHiCgPYW3So5c4P2G2CQR9mEZE3F8hf1CVxB5z9gw9EVK84",
  "key30": "5o8hmuZ1nVjT1MAABavkcJvvovKSzSchD9d3dEKxGeKDJdDiBijZqyh1opcfzX66yW3qA7MikEaUTuf5p7ASQid5",
  "key31": "3QHPhAXpfk87XXVxswn5Wz7UYPZbso6dnYXnXhTwc1Vi6WPKXeeTPDNYn4WgXfrJog5d7UiMyzcFXzKEyXVuuDKF",
  "key32": "4HLQzcLXzYq3WpTPxvMBwbFgyNizLgUbYpNaANy7j69J4i7fUaMg5zjVY4UDrGBFTvk9F829Qa3h4qFtrVcjqpzq",
  "key33": "5XrHhUuh6a35xkEdx2EikZuqNSKD8uxvoh8STW4XaTyFYV9PKdXJEAPYGteNnbirMfrvwwEYRUhuUktB6cYZ44fb",
  "key34": "2eg5pgVinQRQ4EjvrXh54qPoJqcDLNGLH7V6kN4kdqgu4tDpvEMc2E4pjqRen8gsjyPhm4eRqUEmnzR2suzK1DcZ",
  "key35": "2UGY9yfFhTmRSYcb5zsQqcipTEkmw7oa9dCXuyqJ3XrL5evooyjmALozPdSPDoExavdFJe9eBDnEyeRYzziJCKTi"
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
