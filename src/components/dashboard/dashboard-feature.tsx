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
    "4CruJywvWRFQoUseXYWpPHfKzSsfbsuH78WgL6gtaTo6UZhegXDsv3keVuqqvZLZabasXFu25VziyjUDj85utDGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pc7zMw8LXALnbcyaCjsEur1eTVFR8Ficta88G82kC2ypGjfAabGTGjFdoZnXNVPxPyfjrHoDraNvLe8hJFsNCwu",
  "key1": "5ySuN4wjyoVHDAjXye9nzj5F2kEHFWMuS3brujNgSqNxiHjk1djtC6ms4okYMey6EVYBV76aUhr5ZZ4xGDBkUC85",
  "key2": "3L9nxszSwG6QXHkaofT93x47BLJ33prBZiNqD2S6bzqMY5rE6hRRbpe6ojvpo3iRWc19JQiMZsCtKaHgPK8Sgjvy",
  "key3": "4RRcK3DpHWPzcMkKQwB9oUGFLPohhUYvkZ38msHPGnCyytRVQcSpGhSHdQn1qzexSpLv2qh7mVqZnSAFFF78sx8u",
  "key4": "5ZxkNcaJ328aFZ8ePJWqS5vCThmpRKFY1iCc82RFf65QowD2HnuKKib9MJutyd5rkzvTV7sDYxSZhYGshhTDuNSb",
  "key5": "2U3AjoYcLFkibQYw5b9CPicVrpsNEZHLpn4BoQQ8zaqsAd9dV3RHh6647TxbhuUovJdyFdm5gveSTz9THshz7tk5",
  "key6": "2f9656kZ8VdYNDakcS7WcTrT7WkH5jTsyedBdGAWFp427vmb2L13D6ZgySG3JV5TDWPqt8pSNiTV8uNbMViMcbfc",
  "key7": "5nChRC17GXc5SoqA18ZjShDF6U8aSmJjvzJXLCVSibmSwpch9Feyk5vyJV1bJSt5PMDTuygH9U8E338RnKWyEqwM",
  "key8": "QtimABxgiL4tZe4cg3nyvJrHr5t23Xi9hCV8TuF4ySS8vyrQEXZGuqcg3n3z2sEyXg6VrFvZL5RoXvB5TbFrsZH",
  "key9": "3MHfJbrr3es491iM4EaoaftpZMBhXoGhzSEiSyAcGjdyFBuUx984XUUjaZw2YfMcvzKRa1x3M4qusTY4p2zN6SeT",
  "key10": "2vQgEoWbTVWUanv7fyvxV7ACGLzhbGHLThRqoDupwceKC2aHxv4SRXn3jtaMP8DjTXi1vRb3Xm2wbG5qQ16yp6gy",
  "key11": "4hhpuibKhWRqa64Gt3aQvnjmEmRGAx58SHyrPytrhzdCtoY7MyQEgm2vXRnyBdB1uAEB5WLBDT8Wnr7u9hYaGYiZ",
  "key12": "3V7bbiv8BYaj2fsn6MesBEymJSYgWUr68JpV2YGmcx1WufVKAGKVXEJodrs7dyeqfhzB7yM64MRM4ZAP9wdvCq1",
  "key13": "2jCvRamfKRUugDpWAgp6ga7ykATPmru31qwYHxuqi1cQR6pJtVjZiwJxBj4bVTFhbFRrK5gwT9uEDo4P3jLfrUUf",
  "key14": "2wk5DNz6Qa6PeBnUFkLhV9dRR8mrkWt1TmHEcoBM59t7zkwyfUUundfypAP2hQiqmJXn7LWjpYQGv6h77xJEEk59",
  "key15": "qHKo9uubWrmJcwzYTrj3ULHZPgwrBnH164GAR8RXdUx2AoWXiCHS8ZfvRPnQERqmDge6KobZo25eKAzJZ7BKiZ2",
  "key16": "2ZrwLKuFVhBo6uE1Xwm7DvXdacEjmJwcPCZwmzskhY3K87mPbQrc7anKkDZh48Fc9S6v9EFL5mXSnxtBpxmVcGHK",
  "key17": "4ggdbE9pPXm8pRvSkE9FjsozxnYuRUJkjgQhhMVGztdfQXBJ8qYyGkixS93phHB4xWqREhXAqNjgDeHKvrizwBrP",
  "key18": "4BbpQqxgNpVwx6P66r5xvkUBm2zpFjxR2W42YovWaHg2Upx56v7mDbZFj49DxxguYNh4UMBZudb4pFC61iQ1piTA",
  "key19": "4MuaqWUBCWkoD3G8BA6YvrrxJoSN3nnvyhdztXBfRuJakTQbVyBbhT6qj7yS1iTHykWnDgXBaK5n78hYZXrkgDeT",
  "key20": "B87Zq1tSgaCkQzu7aZ8NLgcwT2pxSGBSu6EUCX6LG9stsg9BU678NnXuXNiRYiDrgB4KayHer73erhBV3HLygfr",
  "key21": "3XwXY1kcqMY8kKQPvavgssHYWx9aorm7j7VLZ8xF1tFcq8ojVAK8Aj1wTB2xEu19YMVGzWiRvtbPZ8HJ6KjJ6VjB",
  "key22": "3JYa4AmyS1G9yKuwo4jzuPRU1HRo5G4jiCbYVmLyxrUY1u2FfoRPd1iogSk9tA1EHvksBD9NhB2DgWSzQkza7SUV",
  "key23": "59nSRbczqsd7dSSBCUhxcUSpR7sUUx2Vq6sxdCnEs6WLcXY4PQdpqQpEQJZ4YUAzZ1uv4zXcMFcGqvhbfwNv1wG9",
  "key24": "5igVSeS11xcqEytvW1UJX8JCWRGT2LYUoBwFCuhqiwzLP9Nptcazva5dK6J7Ee3dE9JptKdcCo8JYVA3Rz1iRmTy",
  "key25": "44y3YwcUV7kyTSm7RsnGYAi1vroFwLvwtKS6V9HMhjxRRj19dzCY793VF7tNMrBFyNEvzuudcamVmqkw2CphC9MP",
  "key26": "XwAEbpbucqRsvDoW5BzAQdcyLBH7ALHkM2JqgDxNMeZy2PiLxTuVnVDGiPjRRgFvjdqnTeXSDUGE4rS81LvV72X",
  "key27": "bwL3bss8RSzezMp63oTUEeXu9vUkB86RXAVQNVJDmDSQZiq1A9MHQinHtfpfBK7gNwdustyXpEdUJ3EMs8qArRL",
  "key28": "58PkgVrc1YQWAMS4h2ZSTdCD89ki9J9axay5M3fkx5J9oAc4jQFKjVZzNZC9MTQwk6RdM39JGVbm2kW81CLNBNe7"
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
