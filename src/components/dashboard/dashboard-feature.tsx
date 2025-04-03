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
    "5qYZ8nCatqN9YRD1Nw3FT1iALp3ktYi5upSPCviEG1iHn3aSpZtw47RdmC7nUXLhfstCdC5cBfXTNU3fEU4jUKmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "481NdHxPe2EDYobfXMYtGpkckX5fAk2kxJiTVopkhJr6qmKQvhFdJ2LJ6LssumhV21AVHZnAqjD2H9xfsjasAKRc",
  "key1": "4U9MGf4PDC9haYvygsM8c2dXhQPogwqZaC6N3hQxXDaN6gagQZEWu22G2KFHbp5VYZQ4t2dH89YvU3x5ij35Rcvd",
  "key2": "2VJm3Ka7pyPeRSemaH7gZnNMkKi2tSScXVCarnUeo34GJsc1zFuwtGF1LzQSz2A5YcfMbyc7rzEysjgJezGiayBE",
  "key3": "42hB7LNL5zXUwa4qhk5LAV6CvMy52zrtTTydNQgj6S8jYDwojkuUJhjA3VwbEPkVvSJHhCWA2kB8CGswzEdsHrQw",
  "key4": "4NPDErtAvvtsW1AFATvh2gxoP2U66oUE8C49ecNuA7d2iMzjpNkxuWsNci2DP3kahRZisCe7ECbvdvUAZyUKinaX",
  "key5": "Di54FUJFd6QPvVHpDueQZcNXSnV8R55p4HAfkF4Cg5dF3xkMqJG4EZq8N9HxMfnQ4JhahwE24odY7AjVMi91yaQ",
  "key6": "46a844c2YgmAPz957XZb1rYr5AVYNRPYBm6NDagpqwysdyLZCEYDTtETqYBpiu36qcREi3jJMidxgQKJt2ncNu4W",
  "key7": "5cKV8JE2Vr7NSVJiZzLkYekW8ms23mWHYpnRbCM1cyFDMYHYcgzEfKnNK3NrwAp8TWwLXimV2pN1Lm5u3w141XuJ",
  "key8": "4YuBdRPxZmFNfGiRMsk86uq1eAiBPy8v34J9Dmjn2EVAkoqaeEzYszsLeKvvJtAoWRDeiorBbUmGxoP9RsLsdqJJ",
  "key9": "4L7iBTztN94MCJs2yzNVGEQiu5x2usK14rNAMMmjubYMxKLWPx2HwCVLJv2aj5xXXfVZ9ESFhWwKQkDSHBs9UwS6",
  "key10": "62qq3LNczQ7V8v3VXnPWNAk6bzf1JSJdnc4pwSHba5EjN8ddU6P47jGxA2f3fy1UXaHmxSM7vdBUDtgRVdXcbRjj",
  "key11": "oU4jo9cZBesCfp4ddsXKebJ7T7Vyjd1kKxZZNhACYFNqyPTgfLaQqedfeVU7hirb9fey2nCYrm727wvU5YjGnpq",
  "key12": "4TaoNL4crYqQcWvjk9TU1uBsdeS8JqAzdVbJbHrLpEe3EYaDGT2v1z7SCtuH1haZBGDChBYVGUDa15rcxBXxqwba",
  "key13": "4QNEXiwMf2oy1wJ4WBftiKYqeXFn2iS4qYZYdejnUqVMNu25Z6hfDufTVwZn4NUeekUXBRWRRakAhHSGjnkSJ6tv",
  "key14": "2j41jLbcpMDtv2PtTWd3ijWMAxZgS2T8tsCkveXvzaTmpHVHxHgfhgA4knaF87EFJPwrpLLznm7wUX1hH8Zzg73a",
  "key15": "28xXckfrjr7goyzd3ix11FWk4ucjeAh2WKRUgCdoo75o7wm7wicwmcaSt6oqeeRHqLSLRRcvTxKrf81YypWEJu83",
  "key16": "2pLHr6ZsdGd4WekJCYB4r7wCikqUEGndJsW2rnfTGQABVsDtUHzodCAbLg27fTMFWUeuvuqwijY54C4UfxRuM6tn",
  "key17": "wiWBZn76RNN6nY7eAytynw1b5Dfr8YEVudFHFSP6V2fT39W1fBR42BU4M4nDZRsMzbkkqKnAWznWuWJ6ed9DWmc",
  "key18": "61b4yfrEbdbmDdYMqcPfoNCZHYzBT1e2YZ1wWgxJnncPku8KYzUt4CCCf3KQd4o9ibjNpSx6H7zjZv3zJZVbCEhJ",
  "key19": "5292Vi8gxRriaVdyohVad2mKmPuFLRKLDQi5BLzfxniGVo5jayFbWqpdiMNBga8hm626mFB1qq23MuRpXmaWGab",
  "key20": "3gHbk8DZWPjwhfAn1eJtiZDoiRZiLhT5SdtYn5r8LDrDQSSnxahThdZDHCwwQ68y9pD5qup5dNvNUXu89e4dXu1p",
  "key21": "4vE5wXr8ttGjUi162ksMNgjos4ZLzRNrGxGjG12PuYUhaSzYhMpBRwHZA8McAB8B8agQQfcBAKPAbCPaL3dRBfKZ",
  "key22": "5AUtDhmufwnfseA2D9D8Ygsj5Av4ZQru5A8y2SyruSjRTyUTdDtyx97pbqVis6frZMGaQdgxmen49pzpoimNEHS5",
  "key23": "3Nbxe52c4qKLLRuRHDenJ5rCHv289ZPybv9sjPRUjeQ6AMvEqaKCGb5mYSJhN6H5zEdGthrD1pD8wcJtpd3k8Uda",
  "key24": "5h3HfStrRW5oTCY6gy6DggapeKz6ywwZRpmWC3hbD99DuNBHcfAiT2jrKeQHD3tqgCgbJYvBNcAxHBFM1um4NuBd",
  "key25": "55W33AfCn8gpJA3bTsg2zXF9FUUBxqm7T7HvENDd7Wkb2vHg2kwqcuBGo3Jq8uP16o65KZD8VWHvfVSrEbb3zQYJ",
  "key26": "26KgbRTLcDUN7MoRnyi1apKwW4i4SJQ4yxyjCepgkrpA4hiNfMgZn61eCTYRxWNjWZzWZTJ1ygMsWEx3HJjhmTsa",
  "key27": "3kuu27FY6ecumyXyCtWCdkQ9nDn6PfXwpEReCNL3w6p68Ebj1HTVPfQ5WsWHJgGx4wVmzjwu5KeBo22PUygsUjJw",
  "key28": "3fAkD1snTvHq3rsrMfVtp2Gz7KT88YpYyHkLHLqxrvQPdCx5iU34NZZRcZVYzVcyAHX6WZH5VsRnPevqfNgYU3B8"
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
