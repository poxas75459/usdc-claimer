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
    "5GZdpHzH2q7rDDgTbre3PVGmAjE3DBVaQqHh9UKjNLgeyniwE5eyDhfSEqg5HwByToKpfKKM587aAJnTd5aqH2ex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25yjzuXoLyiepybd2P7tXExHQwc8nG45bQVqCAK8x3wHSJpvCVTGEeEJDpwrEwktbGkj4abvqtG4ebGHFL479gn1",
  "key1": "3iiRjJCwLsZw5w8V5N5gLE7Z4zML4TFap2HyPiozHnaA4XPPzSU3VTfo1TceCxkXaYMo3bgp8VG8N6Je4wLoN9RF",
  "key2": "5JQofrHYEKqqE9wtS8X4jKkcUhhifXFz5ZZbXtg7Cf8AhDf14TbdwtoetVRWEXUMBuhCNKcn4v5APSeZoeVBoQM3",
  "key3": "26gqtdvm2511MhNDDDTutNnS4Q1UEEGLGDh7dkm23uCh2PCE3yyGxWsqu58nuJWVGq7NvX2wsKQpXqRXdAQo6wvR",
  "key4": "3Spt2awRG9eTzMTRkzyAcMyNzPJgw5beixcdT9FmZfyoC5fw6wmLXD8HdpZt7JsPxmftiW9nwNWvavFE4yG9WZGp",
  "key5": "vLjFutfhRztPJ98WJkcoPf5Xfu6JP7bawpbvWJJoNs2N312J9WM7pNCjQftvxkwqyPELu1D2jkhg2ohrRESCFAf",
  "key6": "4XaMyyMo7yJk81sQE1PoUKMssdPH17RZ4ur9dMmSMVh6X67dSVeXmx4XXps3MhesF8FzVm3pUL3jTMCnwYeiLscB",
  "key7": "55svZQuV5XVkFQJkc1LTuB4M9ERoZ26p9gZNEe4smwc4UTotrqt1ANfWXTfVDsLQXqrrxFF5RkPScZDvCNrE3eEk",
  "key8": "2YpsQsHgmP2ECSToVgz1kX3C1XVP23temevDBzzLx39yCfBiw4iSY9Cv7TeqrFLECnNXmHwqoRdaxxSferkX3k2L",
  "key9": "2ptZvSU3HgVhR5anaBLeVveFyBomYmS7GpBAguLuhRooNJJHx843mLhz9yjjkrdQEeJWRXdzUC386XMt9aEmu7TD",
  "key10": "u72WRgQe8pfQVfZw4tpDtWVGqPGViKwoTdfpCbUKPbUkfrQPPvrapLuvJo1FsifRyT1Fsq4oPaPfaC2vKkDye3Z",
  "key11": "5vwUdvLewd76MmTP32nmoxPyqjpTa8Jpba5M3GFyFJbM3vx7R5Jsz2MY2mbtLHyiL6sfCaFjDi5AXxDYUmcYYfhK",
  "key12": "66UnNWgwWrmKJtpUvPbfF2Eopw9GqZpPGhACPXEPkyFd2GvfUoRH7stuGc41n4NmLDSSxdcSmv2YNAr4mutzSrPJ",
  "key13": "3L7MB2YULEAyGy8pAwNY9QqF1zkqtCAFhaKNm3qkZaBFnqqqeqGPhZF3v71Hqu1VMv3mwZ9DF4cu4b9S1LAP7VAD",
  "key14": "PxrYdwhvn8UyvyLzQhYZRkxQryt7avne68P6Gjr7iYVCZkCKoR181t4joLfiJBBT9xLCMea4NGtMkvydvPviP6A",
  "key15": "4Rt6W8Y747dkuZfp9cihZAGNEJgAuvbdAoPpQ5MJ8RyksahB1qonUJ7mFEiHqv3b5ciuXKExwq9aDmNWTGzNYTCb",
  "key16": "3aTb69XbyzCLvVAo3MPG5Aw5gUUCdmwmEz5uFB69ZRRnjZ1hgz6Rcn2vAKbvMBsTqvc4BptYphT3JLkhBEzm11Qv",
  "key17": "5J74ZMnsy7xtxWYryxsqWYSuzAznVUNsAQhjNeNKAviSYs2dzqgBPoJXrtzfNEspc8dqoSkeWhCa2KhzEMfHN4tc",
  "key18": "5dgSCgp1hwhQ6UDS12YTYoaCS7GmmTUNzyAMNqCnUvLY6Qm6xoW8XK9R57urmv6pEmWNvG1sVqR546Ap5PHj57rr",
  "key19": "fjDrLv5MJxAPt9s2p9m16M4f988FHw69L2WTGK6fvn633uW6Rzsd1ysdvfjRqcZukBrjEiCrVnPZEDmZ78W5pQu",
  "key20": "65THbujQ91Awn5kLNHpf7fuKWWjAEt2vSvXSsMFZ9fq7dEWJJZYpvX8M7E55GMBjchfEBpc4tzYJHjJk34HGPKry",
  "key21": "3sTY9DfjxiXKnJWpew1eT3p7idiRQY87LrjMVrG4fDUUgMj1vETu8bbCRxLg8H7ZYtvaxwmdgqbo6EkkpGxtb5hU",
  "key22": "4cEF6UnM2ucpvef4M2XQVnHFRho9Av8VCjFWMW4rz1r5Mnsm3u1ffoDuVsRRcik8x1zGR4fdFN31agu6FcbbuEGi",
  "key23": "5sp65Mb1GFjYMcvLibxQjComtnEYGDAkwXtS41qzzgDuNmwCfb31QeyhR7QXYWQTSKHonuGcKiJtTtiJYbdzYofz",
  "key24": "5QQ4osPPnzYQpCn2BJMrBA6pfRPn5TJrJC3Ty1KtsD1b5V8CVwmJmnPDb8fDQhmHv7Shrtn7xaDRhfBA6N6PeuMd",
  "key25": "62DuNks7EPBYhFfa2Jeejfo2cC9tHFiyLVGivnvf7W6UvKBR4k82sXTzZY4vUxayf5dnJmqcpdqGqvfheqDjAA6K",
  "key26": "3FJQ8akDGsxok5qgK6AUaH1HJYcGPPkyhrZ1gjj6J3SBhJePMVi9XjkFWZF6FeauzGHFLYDQZxANCdgMNq6iVDZy",
  "key27": "289zGwsBmyuXMHaWzzurJaAiq8ibhKMG3iCT7esdLY9GyZ8fpaqnrmfAKsvsFDCSZZnkbTnyAnX6amJ7WnwQnrgY"
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
