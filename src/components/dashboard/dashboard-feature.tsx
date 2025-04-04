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
    "5KoR1mM4MLDHzN1MRtxWuEy3fJ6iucNAA3fjQSvXhW9yt99CeZ1DGwCJ9PUeTmtC5EjVMzn1HcrEegcKe4cLanRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dwyX51juwxGyLxVi5TcmQnujBjtG6epm8zbP7Hp9XDnz3xD8DTdGWGKXtUJdYigBtdNV5i1N7GuiuVyosD6S3eF",
  "key1": "5gcp8EN1QoQgc4AkYPuB1zCxBY4psdFJtdHdaLSkpwsrUFmBBEJLqKRmM5M9xRD6trDcyZA6T6BZfzz1L1DtAQE5",
  "key2": "53MQaZHh5y4khD7W35TLrR5oE2YiZnSdSFEvXh5szo8x9Re4L1KEFk4ZgAUtia8GMHWJgAZZHrqgrLRKcio1KkTM",
  "key3": "5ZAJfcJZv3C6gHW8Lg65YgXz8DQo4MYPeZXDkVZH4Y8BZu74QzQ4Uw7yCPjKagXNze3hgFGVYFQF2N9KFJD2GyqB",
  "key4": "4u4TFXjZNDC2qQKV1oG49MnfQh5Qm11rqW5sEAhbyPBSP3XHLQ5hyRxCcui8ij6uzKizYDxdmBvgJ87gdW3RVuvD",
  "key5": "55gwfneng47PBuarVDLkE6BBX7MqyavYdwXCaUiNhg55VCb13yC5vvopRVcK8ScWL4RbawYhhwFGZacFAcpcrVsq",
  "key6": "4GtUfTkXjswowvarws1FhtkYfsHkiGHj1z2YuVH1osnHh2PHQg9L8E7tsY4VRiWgPSbWcESodKidYuaDWyKU7uKr",
  "key7": "5bv3yTDp8Du3E7K61pNuovm4mKDjDMj2VC1vDVbAx8JB4e8XEPnzW2ody5xaad5oHVoTn6R3mMhW2eMhsZTiEHxa",
  "key8": "AgsBRLFZ5MkT71tizmx6U94UBRandwkEDh2Q4CPNgrBdHPc3c8NrgaKkRdWi3EygVV51RxQmFHEeR22tWuBvfCP",
  "key9": "3KjwjE91p56ZaEwj8XsuqWH7SZhwfURqmTg8U7cHChBMnFESrpeyFofKVtZnng5M6B7MvJXrDg12jAHB1MaiYdg8",
  "key10": "53DdZrxKr3GgFJKBDxovXABQ1j3yHU4ooX1Y5KF8XSxfoF6pv8Xf5nho15F2VPcvjHuKu9pw3ToEEbmGFbKARYsf",
  "key11": "4CZwQiYGHrs9xkc5DxnZpP5qBfuEySsRuy96xDUMTrsPLWLHwxHZ5VyCfCvMKWdqV9U9U3BKynD4vAqzzT2LMYA3",
  "key12": "5f4v83BhySXvNTuLbUbzucEAGeQjEXbzamdkxdC8RvAQ1ZTcsXijGjV6ozYmLgp8os5uWGeHf9NDp92iCshfqnQQ",
  "key13": "3eidC4TK1wphqybQHZKUJ6v891aq2rcJF7ckhJ1aQRbkzLhiUKX7X93vPHAKzgSLtPAVnPPoCfY1ktHUuRwjw3pt",
  "key14": "4kd15vc1kXeMZ6qwYyXHPCQAE1WTy2oBjAg9gC8N2WKmorvC7PKJKib5XkCzND5Eg4JV8w7wFuyeBFEH1SjAZE99",
  "key15": "2Kchdxxh49iyvrehV87W5CgvQ3tHJDdbSmZHMM832qvwmpf3fx7HaPe9EmeMbGhJSzzhPAk1X2hSUeevNWMa3mSH",
  "key16": "1QxXpVW9y4yVM4zR1oaFd2JXupPGEKsGrxmLogdYBPubwoRHbFLXS7M7n79bvdmD2VmVZ12R8maqGAbLyUzZE2K",
  "key17": "59xenUG5ntn1NoHWK1xszorYmpyp1oWbJW65FCjyFt1sSkAo2skcq6gXXVYJMVsonvSkNAyY8A1ZBkRCuQujNW5M",
  "key18": "4shSR8xvXGSs3oipgkSr58XGfPFQmDXmJeg7sYYdnfjTJTN3BbTdeXsJYYeKCcZ95MdrH7meBU1Gkw4DYM4hZX2f",
  "key19": "4nRtT8AS8KH3AZ1ADjMM8XZ9NNsmb1oKtc5qLVqRVPeMuApipptkJhjgUzc3so8XG5A78B73xFNVedzrokWDgnUb",
  "key20": "qNA5Nf34rrbQca3R8oQVyrMvfuXQtmxK9gDCKcQVo3CTHDjyFzqKut317TJvQLoWWmLGybPU65JYPfi65q8xknx",
  "key21": "Z8DkLUF9KbEQKbu4cCyZ58sPYCNS4h36vEqRpMTDRcETj5HGjzqz9knTWamU2LxX1zX3QsiSUhmShvL2qatakqY",
  "key22": "Koh6RwEQKC9Kddi5sFdTZaaBSGAiz8s3MZGaycxWhJN45mKqS4gK5ixuzX8j91wzDXX2gXMvEECQjM77VnDf22D",
  "key23": "5dWhKokDcfoon5npGkZivhXi4GQ6PmrzHNr9nnYHBh6bvp88D83hSJMgVbuBQ3KCWoz7XAP7yufxqMnNsRABw87f",
  "key24": "3BXkXJvhfxBvD8E53kpT5X8S1oajHuRUN8yYEtWTWtEk9pMb8uPNdREJK4y1NGweojGUA4cB5Yu7EyczmUQYBZ24",
  "key25": "2pYNEZFjim4CV4mHEx11pYnBFr5dRt6LsNCWjKkCZQKYAJiPQZYwpUYqEZfQsys1WMFjGVtovTy8HGqgqr8SxuC6",
  "key26": "5nLJdPFqfm8FhZ724ChuFLGbvg7vA3nj4DsWUAdufGcP2RLjqFJZjiJwbvZS7YnNG1AymBcjTJdJoCBUkjcHfXLc",
  "key27": "25FAv3u553LxCT43aRXCsoSTMVHV9MbCeHw1hdB22eHEwjZYsvvwrdzttangc2yKLw6n8nMAniGipcCU9Lhx3Db9",
  "key28": "4buzxQmA6LEVDVNnk5cn1zyK3e3oqa63f49XQ1z2P3grVKD27GuhTwpnv6PYAC8jgnbpAFVdfK71Bfb5ZwKT8ngc",
  "key29": "JXwGM8Vwpk7iPuSXjnELDXJhefvnzoHXVBqpMbSqaZVjzCWn82dDUquiyPbn7RM2KfMtmRN9uVnzkM68sWfSEmf"
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
