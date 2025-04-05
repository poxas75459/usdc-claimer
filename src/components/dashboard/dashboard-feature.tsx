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
    "5ERBfi4BrNK4dqqiJgemMh8a2Taiw7KCyV5w2ZRsSG3kr7cJQChWeYXNtRcx15YjbYTgZCxbUFSSxCcZBLxhecjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7Vmd5DBYF9jBaKsogteZqX3zqTPifxn1mAHHfM61YMLKYj9YtMD2jNjkBgSbd2sgk9tQPrBVuVGPNKLz9oXFQx",
  "key1": "s8DXUojMeXtNmfhgAG2wfohehcuGi82fNnGcfK3wcHXUNNL4AbvvcUuQ2WRg15byeYpxEQ2TBFxzM8AGBXwp817",
  "key2": "cYNEKDvVPRrvvND9NQbpGryKmfq3HFzF1D6KjYQzUghfPQmraaX3M4fZvhBtmHzSXd7SkdzUYwdTkLAMaDuCkvV",
  "key3": "3jNVMcMT6EBxkch6b6eeGpqNt8rBL4j5GRnoyNC8uRseFZD9WcCHCaTbnzzrP6tah74QKQonanURCCPiFFdvGXR5",
  "key4": "4Ei6WdqwtVzwnLVuovEeqxFaj56zs9C2p9aaodXHPhaKsRwb2RLPVNMuDZ4f79QWN3SnFWbS9Zsxz6gUm9udxRee",
  "key5": "3FeZGQjCqpVX24A6esEPW7nSkKpCYx2pj5FvJBS5dyPCsnsoA5YPmbEcMVb2AVqgNGJoxZGhrRwxukv53QhjC2VG",
  "key6": "3mJXLy2KJvXJAzGe8yi2X52UHphPvJyTfoAtYhdJWXkYhatTrGziGxbhD6tox9qU6bPeQGBX9WFyxjW4ticX3NnJ",
  "key7": "5ASPocFh5PokGN6fhboxdYDiCoLG1CsqLDNeZ8VNDYna5hfVpFyFMPcvo4qrT4TiHW2SSAooZQsk8peoE2Tk6Bd2",
  "key8": "5V87QRtnVDiUnDzCURyiJdExdTRmhVF5GyVT7TUkUWwJp1adrCVp3opx9aYCby5b91UtyiWtGkbaC3Ttp2WJs15S",
  "key9": "qb4bfSknXg2j2ryJqnWN9GG47tB3AhkFXy7XgR6HrT3MAdfivdn2q1MPdteX2rrmU7UgnQQNeQhRFnWkrs9Ry7j",
  "key10": "3BAc5ECci1DkQmVPkB6QrQWfWAYcqFtKtqY7zaCg6UonMsYc4Xpu29v7B14NmweRMympp83GucWJiYnPjkzpqy2f",
  "key11": "LwmvgMqsVE8bFhimz1W3CLU4Rnz3tGGZ1w5U5SLgUwrtu1rMdDNsW7BqohCNeHmGjb4naPUX88AsN7Y5DzLhkJD",
  "key12": "2KxHMnURdmJ9YLyiLzUtcRTT8R6DamFGQv7oiVNEgYEGcXC6gmUnCUY9SUETtNGezrAm9RXj65YfEioaGcyZ77GC",
  "key13": "4ZSYpBKjb623DNX84Kr4F5qShDK8q5uPPRAvtFAbcKRSCKXW6qckFjEh4vr2zT7y9MuD8LDb6764c9JGgKAB66u5",
  "key14": "2oHJ1GaHMhSsoeqw4YA8NyfsKxKGcK9Vem2dpxuFKGkyYqzEAgn6nht3aDZRQsEk8jVThDTp3RHyGmv63idamAPX",
  "key15": "3PyZT22gr8ww6aR8mg45vKY7oaw4TC8i5B7LZhgnqnPVP11d4LHTcPUJkgy6rTyP13xszsLURJ2wuzqY1AG5rpXG",
  "key16": "2P9KEWjuLFoTLKLF169TbzA2pPDfom7WfVxA6udH2ddxJhJJoBhjnu7keWAasbzUkXVG3ykuargsg8kgiuGtveN7",
  "key17": "2KumSa17WMHC8LiwNiKBVV332k4MDVmkvWCnoS7pu6LKqojcGMR2Qr1gr2Bp3iXpmmM2qYrBNHhb1ZFdqgytcy28",
  "key18": "3UR1imEVeXcfxT2wBNhcp8DmJKeHpjQeVYXFbpAevERRtafEYef8CoBz2mQiNnoYUy6q6MP4bV5LfFWRk84mtHfs",
  "key19": "3GTymTQZoH15fsDUwrfe6R53h8bk3LNRkQjrurALNwLEX5svS7J9qDHxQcRXEgNQDjfDz8A8rMUnzcm1XcUb1X6z",
  "key20": "26P6iM9V3nruaFmsfA5UGER71gwdduq9EYT3jAeiNyyxVuekkWVNopq56wW7KXnq7tK7hcTt1oB3d21fyh5wsWrA",
  "key21": "Wck3Yo1JHmP5eTBBTn2KCYQdwELX1J94s9amCod5svSuPRWGFubwjxBeGaPBEU85NU6bYTNTgSh6CkUTbULazH2",
  "key22": "5BqTTRt7sP7jWznGRWEXRk4ooifkgD9bxaWncWm7hftpDVtgAeTMzNpDNCEY1wNpXs2xboxVo1Wi3uXAhDDA27Hg",
  "key23": "4rioh58DiroajisGUocqh4EsUDGUgtrUXhrhhwPUzk43E9sKawgwUnk57of35aq1gjnAL4tSaPMDVa9azKWacNC5",
  "key24": "5GXFd5gb3Pc9zPeXLchbTmfBnRSzivXdUHaXgzCk43Gxyy8gfzVhaLcZyFtZTFM8Zvjs4TQ2XZQjGP2mF6vAhSHE",
  "key25": "3GT3qp7gCuEkG5sDGCLbMQQLRaBAw9JKy5qSB9Lqcm9Nc4yJod6NPZUyBT4DDPKFNJeXKvB8jQ6CGbcqfitpaLXu",
  "key26": "12A8bZDJ4AVk652RAQi381JHBqMsfxPKXmxznoD7gBiumKHMh4xczqHyCA9aCkHNsKLtaZjayBpTVKX6bGFUVAMX",
  "key27": "3miH91cgnAorUb3nTCWxrSY19DPhZiWZbvaqbvFFGL8eMRPWgZtJsojSxXEVxsLcPGUaBj3c4zMZLaSXw3pSScNV",
  "key28": "5yneQvWJx7vRHFUp5cgNgpP96xfx3WBD9dBWz7HHKsNDGWcqH2GMSBAopij3rajZMKHvTPuSazyyjE5hzSYC16hw",
  "key29": "5i7XyF5G5gbyznL7V8mw5echTvfNKmDtPQfifVdsDTHrCDnRYzHgChZisks2m8z5K9CuoNL9VL6XjF98hU8Tk4Ct",
  "key30": "31D3KcKQ3yJou8gsTdPfCzRn9814a9XPQQH94cGcVuuMmFoAxVFFfD3hKRNJnvYFhjCTSBzsHrVtt4v1pS4HBhn8",
  "key31": "Vo1AJqkchPnKkgrQPjomb3CvGwQVriAgL6QKqkiwkWWe9CR8ivTgW6ZapmcKo8Sjr4Vhztxukn2CQuRnZkbYdbH",
  "key32": "3UNkxL12xYuQx4vmA5X1W1tjWQpPrtVBAgkAio8oiHJ1xdogByrKZYCzLbYhhhrZkmZRdooURWji8Hmz8jqZMhsG",
  "key33": "5PEEkM1oR3pi1RHaBM6PDqYkkRpq32m1etudMYFKyizTtyaABi3tEQv6tvYqVNcxEXyz8fjWNxAjiEmrdCULuYt3",
  "key34": "3y5cvr3rYDGMoLiZtEZpZH5wPoUYs42PArFc7iKji6NpnTqnBvteFS4ZeuexxANydjpEhSQyeL7iKuTJHA69rJp4",
  "key35": "5kj2orBhmXSm1mdy4weAqtwCnBnyBwYkTTCBSfFNr6xQn3bZk9y51F6iRgcMeFk1USmNBW91BsPwWqBYkosCBLW4",
  "key36": "5BMYE4J61GYzTjf22JRivYNn4sorLfqxuXPCJVu7nS7eqRKSoACX1XGCc5WVpAsEKgWXYMFEurf6kHnbYKBrKhgH",
  "key37": "2rD7g4Ca6wY9M8ic9nHHf4rTegRXZ9DHu2JtscLEeoZyRjfEGSgAXU52vzh2Fmko6ep2kFgXaVuLvFGupS9grf2M"
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
