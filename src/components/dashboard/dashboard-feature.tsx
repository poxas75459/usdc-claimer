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
    "3Hoi8VnnhvEpoNDRvDXYJLf2wk919LBo4hVTLjaGBsK2BTps31b3Aks3ReZhZKsyRFxQe57zG2nv5iLkhX2dgb6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fe56YuVcEFeeMSSBYGjyPpN8rEV57w2GPRhpaS2M1MCerWFTFcrsyCXg5hV6gfGwbsAs9UsCf41E95cXTU6BU3G",
  "key1": "4LtyoNza8ec1AAKGujxu6fDV3nPHxf3gaANcbwn542BgNJQuyWF9YXRaF2goTCQEaPcC91Dm81Az54TfYnEenUik",
  "key2": "2VKnBhvSq53pDTXs6gShASN8HRQE2pjid7WyvMMKnEzv26wXsFsqhex7raRs5sqs58eoJppxFeMZ1XLz15vmojk7",
  "key3": "ZSVPdR6wRJYKp5Zefsaa4k1dkAYZTWLfGxUupNBzr6yXzHmDq4699QegoMwWUK52G7FKFqMCfrRJmesM3NNpUpy",
  "key4": "oywRc3zyfDav7XZsgxcganACPERdKB1D16ZqxJoT6ybQvkmnhPY8oEaw4iPv3GtRbrKGTkjAF8QgMkHunBX7Gxe",
  "key5": "37upMUyEoUGeiWnxt9czmrS5EVDnmNtzRsBkvn9f9CE9va6XtT8pbcCuhrEx5Wt4SMEnduHB2tZPLxfCz4SV3H9p",
  "key6": "5DVcuFpreYVqPiFNAxHhwB5mDT1Z9zdnXezUAhkpQFog7sAkUFUr22CS16LeH6E9yKSzQ131SdvfoLH5wQRd28q1",
  "key7": "62S7iPiatGAeeqAA7wghNNjXh6BzBZR7hWub2W8g7sqZALvc16vBUYtXG2LYf6g3D22QBQpPapyYqmpJLCNRJShH",
  "key8": "2PARBv1XRQq7mTiUYynv59NRjnHKzH698M3sdcQfQKZibx6gbCNZ8EW4fdSyw9RyRXjuVfA8eKFbPvncPrpWAGrB",
  "key9": "51Ku1u1hRHk4ynC5nLcNUyRVQkz8axVd3tBYw1y6iFdMDPAWYvTYpKdukta6w1KFjZzrVo5b2XBKzb1Dx5gLUPuK",
  "key10": "5mU3Y4nZ3KNrcAt8tvZgEWGzbdwHF9CjWvngLCNqAFcFaHYFj43DDHNM9TL7EtVmhRNUCjB6646tShmQ1kzBF9xz",
  "key11": "4PiBqR1Uwx7hKj7LbSf6UfHHzST2XVJ2uMobz6mWFBxnBVSSpoFzYhJmRUmQT9PoTgCEP6v9c8rtza9GLCvcUa5q",
  "key12": "iX1byKH2S3D9XF6e3VRkhyXxQnc5rHuSU2TUKtH1ZftwY2MCeGpbfPppV1tdTxkn16GG3CnRXu2eTxVbmy68sMT",
  "key13": "5jrydE2cmMKe5XSWzDNZVwi2yopLs5h7iJf5oDukD1m7AwPtY1ktv8jJN8xu5pmJVpViXU3bPrrXCYT2GcQPBmAS",
  "key14": "u6HNsBKSz4uBoFNZjbPW9XrnNtdnrN73i57Af8TrmZKRb8zxsZgD6PMJFERThnxm7cSPoa8PSHpeJhSEfksePf1",
  "key15": "21wuLbiAuFDZv5PRz1LkBzB65rq29ZnGxvH1htWuu8CwS2h3rdV2Tq9bsjxfJSd71gauP6QKXZJtbxWcKrxpXWM3",
  "key16": "2BF5X1rg6FoHfqy27rwAxdN14r2z2pvCKLy3uQxBgy9P6uA5gxBNtrS1rVhxsfQzQXgU5av4RoNvQtv2C1j3nrX1",
  "key17": "4aG3p3Vz2Lv2uigaQ5ACzy5sgYNSx711rsv6sBohi46AQwrvePsxT7EkpJuLqgm6JHEe4XXKJwUkVp461zpTWrv9",
  "key18": "5ez52pmViHvnWcA9xfTKKNbwbN3XAjkAzXPF9NFtfbFSmNHLf5mAEnNEnsmRSdsE9nKqMXg9DhvJrEmyuv3fx9jJ",
  "key19": "5HfgHEVMs2AoHVac1iQ4gbR7KcK3HE45HS8ZqnuEUGzG7cvM7wnF5obA3GBccNrz8xqTbPBoKWpxUD3BeLAkamG9",
  "key20": "3UGjzxMetHGsX6Vn2b2EGep9eeFkTRQNL9X74N3s3Cz2wGFdE1P2A9ZvmyTbKyJJamYfpwRhns71dxCwd2qLh5qP",
  "key21": "2josCa8mCJSefJQbmiMi1rthQJ7dDEgZpmpDsnPXHHzdqFWES2ydfan5VX3T8AEgu2owpyEdq2Uae26qRuez7wap",
  "key22": "3QG6d3tWrdR6BSvidY8hRebm1mqBkfrjLuHVFLb39TZKuR8E5H1u4DEunNpVvjjw85DXGb6m67jDZqNxvf9XwaXr",
  "key23": "2TBXXkiEqNb4zM1Gs788U5TXp7dAwdcHtnr1bcyfG1JTqHwoMQCoH1LjR4Uuvdax4MzU1hBqaMpeqgKXS7eoqBYp",
  "key24": "VKfuG2MSgovaXVJYMVsjHnAXq2N2isy7KG4NMXrWqg2zG9avDVGLW8WUfSe2cgW7mvkPQjwZwnhweyCVSd8zpRm",
  "key25": "2fK4Kj4JQRnRZQT8Nr1okzc1knzXKM1YqfB472LEoJcWHvx7MWamfxoK46uSgfi8xRoJP7kgAdaRtrRnVtr9oDdW",
  "key26": "33uqhP9gv2H6jbwU5DqAsTWEYYkbcXHrteLJ3bVGqq71ZTZaKCtZeBxx1CCRFGixaQpjo7hC9U8Z7bxJ7Y4abcQf"
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
