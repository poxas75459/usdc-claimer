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
    "y8BwnpEWL54T6XRBqL1LNwd7KYbK7hDZ9V6nt1iERj2KyN4iHudcP17PXz4VQYcA4ij3hDyMnLsTQtfqn8ukc8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNKnsaMjkneLEwunfb7AThx9ZNtUNU2z2sH3MA3apEpAFGAEjdZdb8PQ91TuBJxHgi7q4KpoR4DUytCYg24YwQL",
  "key1": "27GGTSiFdpupymt3oQCXP3H57ASe3UyyNuLbwLHYWLQ1XTTF6qj5QQYmGV3RvTWE1fBCiv2RCYxFBrXb1ESiqcoT",
  "key2": "2C9MD3qGNQ1DAY6gZjpZPmxfV1gc5SHHNfyxP7BDowbvid6rVP1fh6buviXPdZZAeGDJMhShjt1JEQHWPtYrdPqb",
  "key3": "53E4aGZMCm5hBH8eteNa7LBaYsFvwX8Wx78QE4DCoStwJAEYENeFJLyofqV1d3Q73KyiwmNT25YetV1Jq7AWYXGM",
  "key4": "2Wt9PRqeSekrUpFhmRegYiKU3B1HsXicKeLLpvPZMS5GZYMXWN9iubd9siFwn7JqL5ZeJExLQwebKDLvk3jLic5y",
  "key5": "Uxb6MiYMpWHLndmYQRr2RoLrRiEeaYdPhrgbpw924CQ7kZskQ6gHeZFWBiPwjVPLBdgVMGgPPDtwsfh8KMHP3Nw",
  "key6": "2h5NQRVqtrv57zd5skZAPmoBqUaUnSJPc6LxEDyEPyf22rkW2bFN3A1kC6pi4egJs7AfRnmxFrngK7MtaYLM2hwr",
  "key7": "3cz6aQSZkagkTQ5q1Z8CHjMtphEJDDMy4Chgi5AhfWt3zJoj7y4aFGxvrGNBRjZurNtPeVxNQYgx8i3YjhrHU3ry",
  "key8": "64BcTNsmTimmG7b55qKxxnAA7iZFSHPAdzjVQUGjBiceG743Tgu3bWfdqkT27RktqRNdXSiwi4ENNtiTpWBj9yCS",
  "key9": "4bVyiv2uSzjx5P6A3ZwKDzYj1QRppyT85Mp3dLEuftu9J8boK4pn2wic5HHrxr9zfKNccdYdxHZ79zuoHPo8d6dE",
  "key10": "4upHPkpfihpGcHr3g9dshKzhqF99AfJAGeaw1JoJzubKdxgBJTcpqjvDyyEDEtLwzbe3jPTSp7cuLREV5PEpXGed",
  "key11": "4dngGVUzu4KeJiDamaXqQDSd9BG9rhvyF9eefsjLTdYwgpTEz7SpNABFzrATipXBGTX25ZpN4eoeWMkMsmjC54MD",
  "key12": "4quDJDeMSpwdamksSq5GcN2xWF1ADau2pKRCCfPxovbyffVULBEc6imi5FqCytJ9kQ8U3EQ839zozcSso7DCbSdc",
  "key13": "3pKGFsjW7aXu2NuaBDgy3dfHt1RFBqrpP9nYiuKkBpSZRpo6VurimgUumnErxoea9nfWp33EhDzrBTwsnW1tiE3t",
  "key14": "3VgRipPGLpQ46aw7NKbF1Ng5oDUz6uoYni9ujr3vK8USo3rhMUTh8DVNv6115rUoU8RviyufT8R2eiyv2BT7Dqpw",
  "key15": "4D7dmMyQtEsSAXbytFCtqWaMW8cqrzvQEoEQJiFazEBtKmkU6hXCu4HCo7yfzsUKcaFXgqJCHYSynLoC735wa731",
  "key16": "YZdMNpK3gskkyAzcW7wN9vzgEJcvQgpS9L8k5WTP4jj59yHhjZdZuk8dQJ3xuZ23TeEefGM3yDZoD8p6oxd7iDT",
  "key17": "32jmUow9SbBJiqvybns2AFYhGmrRAYq1pvF35ofXzjLZQypLCmQFGX4MSwqWyZiiR1oTQuo7URXKKrYdjAuReJk3",
  "key18": "39PU5sUrDmiyAXWiuWxdd1de2W1cPTpXbzGG92HcCXMycXveyRUeiE8CApMQun3swY3viZShQi7emvGgbHBHf9oL",
  "key19": "tfcZV6ReiCrjwSK3iS6VQMGpb6VpRQEkErUDokdnveeo8HAoWiyvX6ypEpPGVWMxarcZZuxtsHp4ukbrFApvjgz",
  "key20": "2aYVeQibgjf3ji9MFZGjQ3LzVDVE4c5Q5vpGsHrFkeJpW3E8yYM92dReoY4Yigdo6Sygrej4as9EfWmnY97GmJvG",
  "key21": "p2wpQcqgayMCxjHMkuym7JLjNSFDoVmmQcEjZBof2G2Z8h68JgTnGd52NAMteoJYp9hPGEqVqWvtcuDhBi9JKrf",
  "key22": "5mHmU1E1SV9HGm3w8GijvoWXYEYgMvYShXyRKDjW8T2ehyoUPTBzXZmvxP7gcQwWAEsck8xe7bhJvwhPQyJ4XEUh",
  "key23": "4nfc2Qq4UZQhUf94Hp9tP6g4utPirHXWgmz158HiZejc7qqTTii1BL3NGrrnVBwtbkcCNKFazemgmneTq45CSzdQ",
  "key24": "EKhep4FgfenfmtAMhHyjiGvcxBVtendJ5ENhsnF39bbmaAhC5j2yCUq3KPQmQxnbNJAscLmiVgCYWQqYUoT6NUh",
  "key25": "5FVSTpupVPjqAL7cfFp9mXmUYcq1KHNLEyon51SxmQs8aj3r6XjM7YYUUDCCw3gvDTfqLZRCYjf6c8dKWgVJb3k7",
  "key26": "a5bvXKrSRt7Q4JFfoTzMRLeykyU8RRa2focHvTQjR6w1RGVVZSXJCVQwueegkPHqHkYcSREUtRForR1cQrmVLcB",
  "key27": "4q36FzqYtbGkWefp7HPHsNKqVfwMCE95itEzBaU89d3WLb3wVaAdME563cbneTQYjUmYahWjgXtvbr1APrt3m2Ny",
  "key28": "2C2gTqZ9gurEGXbZLoe1zx4tzAPctgV2HyMPLsKCtDpNCooBmpPiYGt5C5K6gaXFeuNsb2KpQsX8SoVPECKHS1p4",
  "key29": "FGWjfqB1LnyS69BNhSgE35Cf8Kqg75f5EJGss2bk7opRYu2BaXDC1EFSpGXUZB1pVKzUWa7Mhpnct7d9dHkpkQN",
  "key30": "2LXag7vF4tpS5qfoWphC6EyUZYb3W88TiXnRQGA2yNdyzjwW8H8YcboHANqujur8emehWXKzHh8udmMKUwxsJSU6",
  "key31": "3vrXy2rPDwJ5L7YLBsoriDPojs6bTkRKMAftjGxA51P2sWNoTTfgdiZySgwHZothnh7ZuJ6uePPSUC1KNR5fMesW",
  "key32": "3ny6V9dzhf2b5bvKTtxwHJDggSVmGDLcbCNmsj5qB9vyU3NuTKxgH996YbnpVNdRUYaZ53KDNb8e2fjhfMLhSEui",
  "key33": "51GdRj6hyGkibnoS1XF46bm847PXy1zyJQBBMhwAd27GKDm76pcS31F6e5bQieh2YbbwD4SxvTQxdU8jdgo4Mqto",
  "key34": "UWVb8xVmrpcp1D2Kvv6Aec9betXcuXcVS8J2XV6WLUdmqjRwoWNX9KJ4vBT5rgX8psXEg2t3ZdTe1V86H6V1FeL",
  "key35": "v9GoP2587zTUTQ7Qs95AfjckS3ZJynYbsaARmcxvS2EPrnQua4T79Kuv5MCpw1CnpvK1pqyZnyZPmxtU7AxpNnH",
  "key36": "uFQF3DYbgsCF5mZwRDAfG6aTMMttcousqeY9NCPjPmqL4TSLNhZFwu8rFnrbTAbtL1YfSCjqgHfbgyfnE3GhQcv",
  "key37": "5X9A4ast9wqFtq4rFa5KqVuLeRHSYAmqFvmRhwVMXmG3aE2n6DVioucQouDXhJ9NGxqW49ToS4ejXBWXBxseHgKS",
  "key38": "3QDc7Wp2eKEbF2edPK5JYb38HGzCvyQdfcghCe2Sq8armUJPqs7KkSzuRMo6F2VzBussN7W19AQD9osFNfySDxqU",
  "key39": "2LkUPKKZsF9zHTdSzr4ewoq4FVJS58j6gK53rwjeEmu4qSLurLPTiXRzFWfweWpkfP8tewggG3zT4h5NZSCSZsvL",
  "key40": "4oRDjmPXd9HxfYWzF1BDTpM6Wzo9L9ZBLB1Ljfjk2hV93Pt7UmXFqU4zkvQhE3zwywvsSupabcJtC2aQfTNaN6mp",
  "key41": "3q5Xa1g9kWbUfnsF9gn421M4hSV2PZichYhNWjQhpmePhhg626Ko9Y4XHs77FpqrpAMnwb5tUj69j1HGtqL2HXgm",
  "key42": "5aWCkCUaxTDUxUVvQNLuLndmg3zBT6hgzsQrDJND5xKzd64fLvvzaBuYkwNVxDf9oqqkAWYxRNFXB6u7GYgY1gPZ",
  "key43": "GSzfBetSYKC89vst7F4WNs5Gzy6Xhvd34EkUADCKkvyw7wCyTnLwisZuCR5b8rh88hT6ic4v2Up6bYEhWAQu51Y"
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
