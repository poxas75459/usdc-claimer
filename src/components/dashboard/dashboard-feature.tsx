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
    "4MuYQysvy9k73c4LTyMjrbYgyMeZs9E3gXmdimhzkUoKLQYDYZRMuCmVGvVkv951iKCRSHyLBrmbhhFNq4uALL4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Mq9r1RFrco2taLYStrHTJbP6jM7GK7J7493XS82fw5yB1ojsoCgeNU7TexqeHqeWT4CAWPxsWZYbcPFndXjM6t",
  "key1": "25ygSA3UDopBMEt3ef49VHRaLn6JAZUE1SCKYFRLczJuzDqh4gQaCTAGmxzZb3EACKGf1bTzG3oo2Zn9KbmVajVQ",
  "key2": "2tQvgXQsgrq4oWoMUTNKDLhhfasacCiZVGJtoz93MbtGQkNxL5kzHnpxh9HXhC8iDxoJ7ep4fazvNbzQxyvnCuMw",
  "key3": "4q63Q9txUCtddY5CMG27EBDn2Yw9NeubzyLeX28g9cn5pP8t479ePYW54tSYKbRYe2BtvibQnrxhNZFfrFSvEYyz",
  "key4": "G13WvjrivJ2ARrg4DqmyiswtCX6FiJriNLmrmvFSvEaamiZVwA1wpQUzHLm8LMxkSusyDeVoFqjJwwDRTAB6FvE",
  "key5": "2swTWbbXANBXW99SZd6U5bVuE8aBkbvApPMHcGymM7oj2UMJos6LngWTrrG5DbRvbxjVpPWjEa16yAFAuuFLTF5x",
  "key6": "xUUk34gpUzxWV9qzQobR7PJKPkMZFa5GuSaWs3H6C2wPi8PVV8rSvSgdM749hJE2igGvVpMUgoztHq4ARDs66VS",
  "key7": "5MQYZMrkif2jquWutZP1VVWndeCokMWi5TmT3GHStF6VubzENvbWNrC8LxSL9wnn7oK7wFQf6v24ZRCk2S5XHPw5",
  "key8": "3qLdETmvHYo2dBBeVzwMq2GJoRm1hLd3GvDf27LacCq4ktwmxxjGLvS5zUtmRhxCYT9nrPqc73Rqnp6o3z6YNW6c",
  "key9": "2Wrvf88t9SKUt2jdiNf8YMEox6iE1HzLBMFerJW46YYQyGVJC9PtsAV3GPC37vZDQhG5o5vzG9tffP3aoQ5gXfce",
  "key10": "mqSRM22tvqRrnhWS6EQKSrRmiA8ssWdTynnJ7P8pNbZGZEV9FH2CFoRTFH1i7iVrvgSSCB2g4yr4XzCgsfJo44V",
  "key11": "5WSPUD94MZq5hXNWTLkhi4C3RNTXAK8j2ceRQ1UptzqwQKRnFa3QF5nJ1caVheUSa31nxXfZ9sdsK4Bw5PFoQvJm",
  "key12": "5vPsxf61S9SDhhCWEuQhdKuVVB12bpnfeUGQLJAEnwR94U2VXCDokApbxeXy2dn1eQuomcekfyp6SktW7jeYnELK",
  "key13": "2gcPNUPv4m8DjfXyGQMAyRYdocbLn4Hn1yjD85DkjWBr7XPohikkH8DbJinmX65WBNrXXY2gFvKmk8KuAU1ppZGg",
  "key14": "592e7PLAYMLPcL9WKdCETGe2uhqLoNyuEZeCCoBiYcetemm1o42mrWDuP9MS8Y5tHoH9KsrRu8VtcnYmnNud2ZWQ",
  "key15": "3gmh2TYnb6D614LXVscWS94t4e2G6rMRxmZ5VN7XaAeD6eWi2avjC8YLiAPcWQE1b9GWK8bFGkE6JtpVWLUKKb6y",
  "key16": "2GzePB9X6BY8oJnH829tJJ98WW5G6TvZkfzivt48jgW2SMyQEVTrejXYftuf9UVPj3qqQDSo2jFSDyKHBprxaXoe",
  "key17": "329ijbP4gYJQ4vVgfQRjiQoeHFdKyw6BVP5rEqENCSnSt6DpNr4Q41yhmMMA4JkoTaaqwUcUPAJJzvTHHE2JQqzt",
  "key18": "4BJCcqvWPsNbx59rxi9xDY9h3Rna4pwpG59fq7ixxSVbRRp3dUvouCihqovNijfkiGnkiRNKyRMUJ7Nohx3q3MRU",
  "key19": "3SDRWANwnsVMe6fi2pBJedJP8ZbH8rVWJvChzXk7kANXAPVCeu4oKN4bydJyYaWTWhstwVmnNo9Ei9BL4DCFVkUZ",
  "key20": "4jLKYjcR45HpirfqgsYDBggrybDkfrx5BLGQRxstU8YbxY4CwQy97ohhGcb1LaCT4MXoGtegQ5GuhDuBbmUbr5Vg",
  "key21": "FCtKmSMHG2SPzPpmbDRn7zjYn7Vky3dqLMyLKaPBbt7JQAd7HYVMWvc4UMbXMHrLEZr3u3g6LbuXYLFVoJxjZAb",
  "key22": "9pDuSYDijkBNmoAj6rym81MQV1XUj38NNmP5HNZguEaBczvcpcGjMQ4CK9kakYY7Y5HS1CmVaTaRBvhkZQnkyTf",
  "key23": "3MW9SQJvMivLszYWYKav7K3PoLbkZFd8U9etnkepsD98WTSA6LoKKtkTLsubRHf1iJHKot41tbeq4UNhZzmXGRRx",
  "key24": "4jRVKpnzJUPj7noHovCAGMuGDuFNqBa4Xngy2ENVJp5nh5QLUdvBhLnfPU1i9HhofWLMsaW6NFeemBmca7qvpKH4",
  "key25": "3VyyN18JMoKpHpGvsvYKfdpNuqXqAgJyKu2S2wF1TkWEM1Mx23zWGDNCWVhYTiTuoYBFwnFmUbxZwEP14YyP6v4L",
  "key26": "2jTNr8BQ8AqePgiwwLVJXmM5RzYrSrdUv6uKDDmDpB86cxqmdZTwysifJ74dt3eSkhNEodVHVAa2eenetzniXaiJ",
  "key27": "4Vew6QKrxVA8XuSMYmVS6ro2SEcVV5UEQwrDueX2EGuFEXYszpUC4k7SBMTBmk5U5MQrgtSWQFU7hMqSwcbY8U6m",
  "key28": "VZ8aAxRRa4Dm9R9dMYcSSsXTUHaiDJRwCLorca8qMbKDNdYAXMVHLBhjz2K7K3khPfyWfAhv8nFPbjWNuC9taDX",
  "key29": "279oDeycFTBawyBBKFFE9mT49QWjjSkwCRCPBEJZzv1ATUnoXVscLcrjyFBBHLQmyrj6rJFv9gy5r81UuMWFUdht",
  "key30": "397UKqTJ4DFXuS3sPQ4Tt8cMXQesnqb87F8bgLWwxmLWagy77iXvguq3GXJmFwamPjbCPxfpHfWd4YeDy3sBd32H"
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
