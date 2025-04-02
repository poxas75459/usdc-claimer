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
    "2ERbkknpExPfC6JjHi3kQKMVaK5V598mcrBT9cNH3DKkPcoyTfhcAdTwgJCtqsxwY68CS2g8uMbZKrfPLHp4AccF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nDRfqMnJJ6zPxDnqCXFQrsmJWDbx5GidsJShqZxeVRMFznyWYWK1dxRSnJKkRMRQ5yqw9wsTxpNAUdyhXC3Y7Aa",
  "key1": "5BUVoqa2of5yjKWbPvBfFqrhtnGSEnt4k8E6w1n529G8ErpAydt13YPHkTE2oZNjLWwCGUrMhwvZfU3CfdVBZZZr",
  "key2": "62aUnEhygtd1TR59MZw3sHR7mgAQFWnNWv19GGc59ddbEgp8ENtBoakb4UjLovQJrfEqDbZHBWKtu6XAG2hQnCVr",
  "key3": "3iDd93AYp5mwiQxRzSn8ae7E88gyni3txw8s93kNcVCG3d6SCh87JViXGAdAvfjd2kpNwEU8LbFJ7qa2AthnJRR",
  "key4": "vU4v5jQt9xhZMrpHpbD8jhPzBbr7StKZFkwdqnhHJ1EZ1rKDGWkX5YWuML4YefoQuuaeezypfysSJAKKCR9F3ac",
  "key5": "5WpSfg7GuoT87kLKLJNFJVgx38UPFChDdcYbLJaaBMWizRYDgcdChoygsHZ146zKiuouzPBEXLmThkEePYvA2XzY",
  "key6": "4hwWqQmts4dEEx1pKrjQptKHMZgtDqXdvYvhYTH1L7RkHQ1iMSiUx618J5evhLFYEuLpJoqQ7ZyTJFAhRcSbSiTt",
  "key7": "3CwGbgzaAUPHPnLMu1iA2W4eUKB2gZQSKkdTcRteT8N76srkmbrVWCMSqjKPxfJypkCHCidKemEVxbFE44q4XhAQ",
  "key8": "5f8oDYpaWTthvoHdpZKLGWDtqGC3YdUC1ZagSuj4eqLyYkNqP7EbrT95MRq2R2paXkPGCtt5Cey9kdhLF2eNqc57",
  "key9": "5Nyw5mQHtQA9WtYT46feheugWpdm9zLf9CsWVovxmyy8wqJJFAXqsEVatmUhNiVi1RqeTjqqpSmdsbb84wkapkYN",
  "key10": "2PRYztXAy8Wosw2DicZijXcp1JaqmYmGfJ39To7UTZ2BksxPkaiLvpQ89MPwUEefKvArEqumrHEW9c1L1Umr2QzX",
  "key11": "22VF3RfaczzjBDxinQSCeJcRVLdBFsuRL4V6jvysW6h1YHS12bWYV49GGEFd5REqXm1kiKRA41imcRVYihj2YTFi",
  "key12": "5YcpAJejWebgvHmBEu9RztyaSTuyFyjKue19RYGuq4yB9YiPudkNP7WbNdJ5wZ38mgYxcwkjJo2ubxHKkLyjQCea",
  "key13": "2JDighDCWL7ydjug3C8TWF1xiaJ7pZUc6Vtmob8t2Tn5kRn5ka3XEb5ZqP5S1aoP4NK5aj9ZUSGyLYS8M5KrdzS6",
  "key14": "5cESXgHSNnmGpbyEdLa5uSgHLocZ6LEAaGK7876BXTeW4RcpnYfLSBecroNLc6wnCagwYkgjRbJFLxiKh4CDR7Ab",
  "key15": "GgRsiJvbA33G3mAMn9PiH8qZstvtpjvBgkA1RYYjSYVnTde31q7gHPnZzpavvcsYw5sJG2VisBHHkhJQYmbJzk1",
  "key16": "5MJu9Uyi5cEEMmfbXbSuijzjNQdPKwJKNAitxW4f7WepsvvaymjtitggXWuS3ydxtGVbGCCRvFvK9gXgpTpsaTYE",
  "key17": "2u8vESy5c866ZbQk3me2qL6TYcHovZVCS3q5xXqm8Y7cjpKM8964CFSJJMShyrGkqaMBBvo4NwS5FmrCtCTbtJnv",
  "key18": "5mGRMy9bLEC8E6gv1aA3a2Hfgc7hJi3HJu5VnJ2DN3uwFujpe3v39UBZt97WLTBWf9HPDwR4gqsh4avGfh8G1h8c",
  "key19": "ac7QfwtraoF6hf8MDNhthPQ15sBUPHhhRjBabmUyvEBKGx4erKD8JtsnzpDHGXA9vvnFsuLWGibiWF6WvmaUSGR",
  "key20": "4LULUifk1PoNwfuxxzRnFfrSEhD7diBBJy79bwTzwuLV3hhAXAnJqGL98D8XkToJ5rNH5sQQ4PXVy99hQoe9gXNR",
  "key21": "3Lg8YSmnw85gBNZEV6B53iCpCFgj8dNf1eT2Q1k6id6BwCM4v35x9Wvwhv4peKUwbEPFCHKYvfrYmFmxHTR3yhYV",
  "key22": "32ZCJyFXnk6KqnDAnXo8WdcrpDqYP7fBTmC4oJZnrUbGKPwLhjVrwifARSUSn5sTu2cCPC74zW3oAWnezssfb4qt",
  "key23": "qrzM4TEk1BWsiuGB1VnZ2mbKmcjeBnAK7MMBEpfsBhDr1qBt1V8smMfwzXUgrr8RCKhtuyFQTxK5HVNbjtQnrV6",
  "key24": "2fcgvKBpd2n5CUM4D1CcaM5non4vobhK1X7G6Tj7izmWrbFvQGtDRsqfb7DaNVoB5WLAEyQWzKfFMvrbx4btNeE8",
  "key25": "5uiCU6VSxXvdYriHDuMnzbqB3ZagsnLKhyqvzD9C9522JmfusTn9Cc3u2ZHJtz4srYS8fTRhf6knbo3QVs19bt1"
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
