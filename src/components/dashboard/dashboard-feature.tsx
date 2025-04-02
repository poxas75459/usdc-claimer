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
    "5j4gagDdL274D4F6vfYkFXXShWvVxapJTqKJHbt2gqQAyTNUnyiUskBnZR5QzjX3ZNyzAJagsfABStyoPtDSCrQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Skn1bpFLbMkqwM6RWf94PjwTuEQRg37JgknvjSqAAc8F84hEK9AHDsZrnAY527ogBrYBMMYKhnQZiSiod845vv",
  "key1": "2tySj2qTCNYjjB8mDXrGc53FBGbzzy4Uw3XXneUDHxoqYe6MVnpCyi3TVGEmKBKWNfhXC8CYdwXZw5t8ViXcxGM1",
  "key2": "4itJwzLS7f2iyx1Gp5L1DDdJUZLSFxEbCPonKHFXb2qFcfgwHikxBWjoqAFzCjqtvhoWB6MvQEeLq3KjyThDPknF",
  "key3": "3fwzmMvmJXoyBhhgW3bPvKbqobUCuahafMM8a1B3dENB3xmRqraz8WcmRGLk1SorajeWbyz2CPZLSH3MRba9ACDi",
  "key4": "4mD1NboUy1NSh1SQXfPBE18ifqpimzAwNVBSYdhPfHkgSDWnFSLpjHEh2adWotCVcyU5m87fSyK6L6ukNt2YafxQ",
  "key5": "3CrKRKXdtDqpzJjEn6JC2uFWoG3HGhQCyLaN5WPyjQMXGHiMVBaJ74z8DwKQnNwSWLit4KmMQMAqxFm6wu2gaCQb",
  "key6": "4KGDAiKskiDj5jVgiiLPPbshr44u6sGwPMryo75Ec6Nk5iLzzCsjJ9vzTXHfoc3Pq9e6uZfR28P66P8a6jwG1LiE",
  "key7": "53L2yR2CoUiwef28t4Z4vA33tbk3wgTEzUSNgDtPieWiKswTp1Krp8JQCc5zSTVcNPmomyhmY5yy3u4svCuhpw5D",
  "key8": "h42bXhcK3SxecvF9H8n4ehtxZpkF8mUutMCn32UgdWiPz3wow2EaMKuA2ZVWkZKg4i9o5TABqCJWe2qDpw3xhER",
  "key9": "XpuUSi8RgkugPyQwproqVpedWVMyepFrtWiqPZ3tS166F6VNyfhDpnuEzho7WEfkKwe5dh27rcaujdVQQUZ3XKr",
  "key10": "29uHTUGPVHSykBbC5734tBwczcArX767xeVreCadJDTN6uiNhpYELUuPZSYV7TbzULn1GegTwQKwbczaxCiFdZza",
  "key11": "t3eDd3fXFibgypKh384NgrcdBZEKpcSwf52wcUtkCM6zUX7q3MTj858Ua64ZwWgvi8vtpxqvBiWE6kCmEdnVTyc",
  "key12": "4chW4cwHvogrsU8ozHucEv6LeJrw7TMGgqWJUhLyrTBNvpavNvfikj7s7kAwv2iUXaoHhmMDcf48SCnqkA9L1tre",
  "key13": "2dLH79f1XErGutTrgWM87wkBd4pAH7JXdK8njQvyaAjL1WkRPcse5ycPpqexWNGnQVA8QQigbLJQmEXcDN32kVDH",
  "key14": "NEMm21J6NLLebxrsRjUUfUrEHSo2MFvckthHqC5tjD2jpsCekkdx1ENxVKYmBoFwvYfXsnPmB8UqyKumMhj2A9j",
  "key15": "4LMYKDeSRNDFeK1rrzyy5RNgNFNJNZ5omHprGAWVTzxcQFBUdWXBhLao2rpTwNrQpJysPf4TCA3S3WgvJXu14KkQ",
  "key16": "4iKUWZuZgbEQEAexu56fs6mozZ3sjVwnPybWxWgDnheZRYdPxq1t1cv4ip3b6CyGBbTyiQKVrtLLdonq1DHDqK6c",
  "key17": "5GnhFmwaKGTVNPr3wkK2o7peC39NiU5C4uKMa8YVfMPhfnSBDW6ScYMjWcSihqvvegyQDA16hTw4SYbmJgz3JYrH",
  "key18": "5ig95xJckC6ktvRY4PWptQTW1cJiFSYmGfkiL1VmPsbh7YrHiFqgtcibXcW38Lsw6qoURiaxm5geXaog2rjwMDFu",
  "key19": "5i3txMXRhJmFgKgiLRmvFsv1reWkkAPYq5xnJQPV1myaarbnsEQ14A2EXBMfDkuSR1YyeUQmvRPFkiMWZhu6tRnW",
  "key20": "2V3UNK83YssVBtkPcLjXtXRo63EpG5EgKPhJjePJS2UaKyAvA5AKE1uxaRttQPAF9k4mVU9RXaWwTGRphK2cZv5r",
  "key21": "ha2GfA3aoRG8qJFLxVJaPJ9BnTzzimu9Fb8rxwp49Pkv3sq9J3mcEYCssyYg5i2UgNb9wmpaggHqNPC6VcNubzq",
  "key22": "2AReNgGfVRr8Wb5oRdgCEbqZopiCw2y84QQQGtC27WBFJpqFafKHUpYdNpV2mXqxtr3Dz5BimDGppmXsFwwPBnv4",
  "key23": "4y2MvCuFA3YctGPWLJJTeovXRMbmCRoWfXCs8GpUr5ZJgWxhfDqmVRE2JJ1psYhgF2PiZQRyQQSPb6hHyxZwFQhp",
  "key24": "2P1baxmeze19ztw73D48aQkVA5LjEHEta2mVnZ88NgxYx6hVicTt6sNkrmCZNS9rip9erVsmmD2rtGYHgPQhyKZv",
  "key25": "RgG8bWdzyMKz7wK2tFqp4wLMLnNxF3x8yhdumYKn4fW4oZoXnsSMsvKAA13zBAo1tRwzbnuww7B2kqY3q52KivD",
  "key26": "2PKuH53sWdW4f26pHD5WRCSN8ppaftbKao5H6L2HhEWunNyTrWWou69WPwzVoJqcMPDWxsmqTpWuhmsD7e6X4nFu",
  "key27": "5ZPCMm6duQuS6qJwsAvqXT8pEsgrwwbGBDyZVXXWhpbPNTApBCFB6GnGqBQQDhiPMYZgWk7c65LZPfzKJnLPVE5L",
  "key28": "4ZeuwaxA4bbZmNX9PEnKUz7Qqizzd7Zm9PyyViChcwCHA3gboV95XbwRb3Hc6TiszTk1LkfspqkhpWRGJWunqrRa",
  "key29": "5CQ7NcAE3SSMmmj3T5H3dT8eYW3vgfgy6KrUNHzyKRHuD7bGKtcCDRK1dPmJiSA6KGnzZEssFd9t8v6NCcMF6ro2",
  "key30": "Anm9k3NmcDRfq7S9wCmURwoUmRVwPyoiWvpsMwi5iUbnpjhfCaWNgX9fNdvuzditD5g9nfVFJ4RE36LyavX8m7b",
  "key31": "1QaE1BMnaqirrg28TtzM7GwMckUJQ4srVN9gUx4jMtu4rKzRd96K8dMkvghLCgYhe42VLmeWnQennJpmdoU5ia",
  "key32": "zMqnsyajXkjJtU7VVgz9hLXKNGJJ94oGb94h6N63K2PnFcmQjgtP4v6asV5ZzP25beABPXkeYzd1oPTS2ZJy3Gi",
  "key33": "5RFLsvAF7CHLuRDnUDqkTwzwj7SJ3cE1hDGB7Hu5iNjUvvgtxb7MGdzTDB9x8kGtipjsfWbtLG5buyHo6y7K16LN",
  "key34": "Wis1Mjf2U9hBohEMTSKGwbuyxeT2j1ceuA1bJMrz2gDn5MnbMkZiCSjPkAasrKpMjbF5xyUmATFzgR9p8HS6ef6"
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
