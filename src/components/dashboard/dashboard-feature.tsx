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
    "QHbmqGxuGN4qqK2d35nDCDr3FMxLeEpaKGwTZGivvajqn1oaLXTpSMDscQPai4BrRKDsPq1Qv6qEK8A1Q3nk4tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "522Quhi9i7XeuYHBgZN82FgNnMZwjcY3BHrpHFQyRUpLkdyGZHtmQgrTcoyCifRg2s1hdXSX2q5sazur7b6X6siF",
  "key1": "64nsZ4FLeppXr11syCwrJXywxbZHsMX3atCgvievNkw6KCiJsGu7BG5TVRopXmLhXQMHeqFFmQ44Wz9v5RyTkFrB",
  "key2": "cx5EpqmvBLziYj3phHywVoUF276uYkbTK1qbpHrLrpZ6mTGXoBZ58uausSWXL2SMyqoBtDCoHC2SkG5XZ9nf4MY",
  "key3": "4RC1PKNbsfvepQieJGJ6duKPBHKExHzzMuxwSHGtcR5zBZ1bhue8fBTmQjqeYvAmCxegKGmGo9RFnKKeQHXzP8Yj",
  "key4": "dovJXQG1CtvghFvSukchSRZNtbLujaxTAXs6NVL3TcvWxRpfNyhHJjGa6wU73srhv2LuFWGRTyJZuUJeDqQeBzT",
  "key5": "5cae8eqGrQ2LV25D36gdBRzBdTviY6jGkSEjnve6uBzArbwH6vX1CQFqnArJrmYpHvdYEMfiD9GRwqfq6LnSqygV",
  "key6": "4EDA2AdL9iTLiy14uPDXtWJUWpEiwNcgXhpCzDtTUHici55KcgJbDDPzwC7Fhz666xn727zX1htL2keLvALqDDXH",
  "key7": "49y7RdKApzbZN7WHYpEoZvBt4NLaVy6btxv45d2ULDzgm54LvsCWaURFYihbUiB1ksLMemAzy1DZeRPHvHQaCaRL",
  "key8": "YEhi1nJDdVAeeMMt3WCrmNwpBzZD8LtKamc3cfFEi5UiBXuf8M8ZaGvbCuKGKP9GrstPM9QRvnDbucjc661SJyJ",
  "key9": "41UcjLjerkGhoUqDM7ZGENmKX6PqWzBgLcTVy2xeLVnxLPrFFwHY74AQRsoLzmcmrz6WeE1aPAcBwRieHys4VwzV",
  "key10": "5egxYJvPt471qfsidALvi8aJBv5NQLTMGX5kVsKMKgquRaFzeYtfouMxk4CAGk3MS1tBJeJWMjU6ESvDBJxWCGhp",
  "key11": "26j2zsYFiZThfn2tQdrwte2ZaMs9B7CdTtcmNv8MwXv4vs7bgFdGuVjqStDkMrbQLpBtpknNoo91uuUGcqC5SXUP",
  "key12": "4iEAq7JNSYghCEmznXHsMueAGpNeFb3Fxymb4DDHwQKZa5VeTvurYfVnbKjafEuc2BC3G9oB75vFzCwxXDDyhtcT",
  "key13": "4txb5jAt59nP4xiQsTzegiquRXzekDLnRFUQvGhiHq5pYdyhv5UWSCCRSZHaeUB1msdc3H7dULn345i5oWSJUyaV",
  "key14": "2bc2EWdkX9woHJSLLfwBoNv1LXN6dZQyu8V45LSk2nLiRv3UHGAaLXYJWHjANxmvLGMDiLSzDCvcs5dLTVHdU3E3",
  "key15": "3PjXNYtHBW83wyxTUJmgWFaD61u1VLbVp36KR28GviqFaU1wcT1GPGWQjFQ5gP1FugAmREvZkYpcdquAaDj7X1x4",
  "key16": "FyWhMJeUgdsMZyxk2CeBMXU52quHYvhv9Xjfk9SZ9LG89TDGtC1RhifHxxtK3cxDTPFh5ZE4FrZW1em87CjQSyv",
  "key17": "ea22vcjdRMgcy3r8rEJPYoaAJR4a7kM6X51fpWUhYf8hBr3aRFYMFqHMHPaRZqWXgDnYeKML1of4vzbBPqHnfQQ",
  "key18": "BvaBgjjFVh2QK8qEHMbBQLDNFmbLDreucofaFPwsJjgd7Dxjfmja7o3vAVuVveffqo6MSYqnUPu9VQ11Q22uGUT",
  "key19": "2sribYSEsf6ehLvZztT5dy8MVcEr1bAVYe76hWAAx1ouXM1JkeppAbUJTine1FZA9T7A58LY6d4ZirpoznifSqiG",
  "key20": "wrkavVxFjJrW28pPxvMTe8ZJeBwG2jgG7jv3TuZHA9SprzmxY71CmQhRoH5SJrEXR9kT8TPSXoh1ChTaSpVx5yB",
  "key21": "5pMo1raLk3v93GEApxwDRKQocz5z2wVF55Z7AnzMYSWQs73q1FfzN8MigcT5X4g9RBvcqWMbU1nLNJ6caeDdvKiC",
  "key22": "2dxXqkkpaRhK8waG5yea5Z1y5g8Po5Gpufc6vP4zda9rsKDGk3pBbgHwfG1tbWfVGNJ9RN7y2CU4b7kzP6DTm3tM",
  "key23": "4j6EbDQ7GQjMPKKssvYwc97j113NJrc2k86yARb5sqFFyEp6J98PMCQ4whp54ip5wZNC7Fr9mq8hJWVBJg373gxb",
  "key24": "4TGAvGX6oUBoSz4TMQpay6YGsj4PSwVq4FFCbzrzPhJR7hsrQeYMV3nMr5oWb3e9HruJjoexWPdSqYMcdHt7xASo",
  "key25": "21kWd4Eyg9GJEXt6fRWh2YTnwBdgr7sXG55crPn7RRHFt4GpBZJxZhTFavsyyxUCg5PAXMMDa5VHQNQTGrxeheKg",
  "key26": "66eU3PBAhHcZE3WAXp8TDyB8GwoRuEZsAk3bhwSybDqikZBJ6rpxVFMLi986ys9oyAujdjRgfhdnBU4P9gmbXPYC"
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
