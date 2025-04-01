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
    "cHAKGNxaDSsG9J7qSTJZkXQjXYrEUUjVPJwipyjmUdRshSktzk9yQhPbe8CLRVHMRuTr1phVxauBTFBAvT6Q9aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDp6ZR5zcU9qW1YFMYcLggRAFpcevPd8S27z7dJ1A9D6rWk31ZkfsxD8zxoNo2MZ7X1DwAnMtWkutHHrT4BxMdM",
  "key1": "33FSLFiBeYX2CepF4neAM4yDQyabRLR5MGk8y5Ny5dwSs6vp3iJvhMEwQcRWPv8FFqac5UrLmEBcsrT5zGSqvVSz",
  "key2": "WP7V82JQDEKFxVeFdHE15URjcaqRWkwYU4DCiKn319UBVowtxxSKrBDQ99K4ktcVUAEmWZPLbzjQufzfvG9PWBY",
  "key3": "3bPvFHoyLyzjnJsdgfkH1LVmm42ibS6AbwtRoZXFkq52P2bSqcrDQuermPjeDsZ7HHMs2qaN7hpCEX2EekiKz5sv",
  "key4": "5gAHhHxSoLwy5VHm8cjf4KSMXEPASo2JmzTXWsDmbhHojMFzX5ha2LhBGKWWryxjQ3Li1uXKMtaCjnRLVDuMwAMC",
  "key5": "3ZRovwVWSD6S2vuVgioQyHe9Z8UbxnAnvCL81WTcJi1tWbjotiQCrAgEhFTDGRJyJKuEw8JNVtgzhajrvatGbDq9",
  "key6": "3dyiESTdJbDjxtGtVpLqsJ4C2VbxczZLSwiBetmJVqpkAbyqv8m5FSWgu9FBhUfmuxvaPj3TvGh5dFCFY5KAH4jR",
  "key7": "T92g5JE8LM85XWMq9CnZ3KxkVkmPYSKqntcR9KRyUaqyFo7SCv6hRCGwkzGipppV9hCRywrvcEiBexw7NnispnF",
  "key8": "5PZYPwV4tEdWwFutZNsxE4zpmKNtBrN8sV4xnzrcaxWhPxNsi1xUiXMVfKuD7NPXVFZ611FHNdgQfsxtUzKQKqGs",
  "key9": "qn9tkGGVjrJFLhR7frkh7HVKKfz8zQvXUoRi3Gmb1uy8BFummFZD8btPuq6Xr9qfyo7if7u1FwU1TSHTooL22xB",
  "key10": "3j8MVTM4HvJgKS3oLUnkJ78LnJkC1mtDqCXhobanLQ9FQtvc5Vg5cQ1AhXQd3CBvhVr7kyVrmZ1BsGBgwSpjEPKR",
  "key11": "3dBHosAxXgVDdx1YxVPi6qJq7stCd2mBMDxxsogzZo1XXVgC3Ef1VkCNRHsXigahfp7WzWoido9J2kpx7ikPWNz1",
  "key12": "xgpnajePTEeE3YE1qRz6tF61jPfD7kMemsJdeDzfFA9QoKxu2FhHjFsZ9R1pKpZT6Apnjk49b7JzBimLNpHPmgt",
  "key13": "3QxQdLMVidgCDVHkXDC4NJDBNDPZPMMvKXfmMy1GXW8FJUQCXSzjztw8BaTs9kySQtT7UBtTzs7PVuRqbV8Cpgph",
  "key14": "36BudwkywSwJJz6A2mUmffAB44VcQRi156asqarsDRAEkHpWhnvNV3usFVXejiiCPLGZii1tXv4SMQeixZ6nfE6m",
  "key15": "oTS4utL1rk8r64kqivqfwxdAj4bnNpBLQAziKqT2dLsV8W2m2RKpiW7uuDK1vGhD76vBpbsGExWeMnGAR2EAVm6",
  "key16": "4fvhxcBoJNJzjfSWpDJo2SvLAXZrBkdrpqCT6hke7Pha4XiLggaZAx6titwzuRWwtthr6pAXjxHcyLfpjrrcpbbF",
  "key17": "4jCR95vS7FNVzzcvc1TpjiKqXp1zdBeX438f18R3ukT2gxxM5Qd8mTbpr5dAXCTnhLfVY59W58Lv79pbmZ6zmxGV",
  "key18": "LuNWL2CzTmodECJRufckwSZRWmxDcQF7PsWSaadSePzmAzrRe1Y93qoKcabfP6Wi3ux9TusDc2xdHY7ETmcdN8K",
  "key19": "5LqPpZBpk9FpDrN1q1E9pucHetYyHrcSDJxvkMT1abBfy3oEHvA7216KXgwz4dMXHBUdoRiSynMo5cMtP6hZbBw7",
  "key20": "5uK4ePL3BRWdcznJ9wXXJKotkuX8Hq1m3rycmT21wiJ8oiQCeG1WKwXSrXWZe6WjZ7mXzPbim2vXpzx2Zs7XBSF9",
  "key21": "3R9nrQ3dchvMdoMVsg2XyFGbJrUK69qB5nJbm5Axk6BfTEFTfyi9wqPqjT6sPhWrVXEkspr6S3CSwrmjGnbQpcX2",
  "key22": "2G13G3DYm5VnAjDdFqfoZNczVc9DgVbdAECvetoj39LDGmm2NpmESEUAN6FD8nWnQd5pm4e3UwbsAW7BsT4irP4j",
  "key23": "3xfrrgmi5HNJLLVkF9r1E9uEp4prA3Rj8jnJT1qumU83gErfwHaKbUwKZy9oyHg2XUnAmF68Dchm5gQcPvwuJGMf",
  "key24": "52MhJ1ACNHoa3yii8F5VdeK1Xrfa1iPhd9pnQHFR6nxuZFzSpB24LmzyqM1f1gb3CbT37cA6qDRtUavdeyqLcYT8",
  "key25": "8ceG9NYc4ehmervtNd3mLRDntaAFxNjrf7SxMydGhDVCY5dFzxxYcwsYWsqwpwWtSotLG8pvNH4dhSg4KhUNbyt",
  "key26": "2SeQpL5Nz9GR4VEaZcXtXgS93s2wGdzSHyKKCmC899AQLZTQGPBAGg7pH9e2ui2PHxtdZ61SB8zwVURCFGwSX46N",
  "key27": "2xw5YQWRLcNS1WrjnKztc6PdwTt299m47ojtRxLHRtGDWfFpeG8WMvthisbd7xFoLfMsBnnsxE98mQLtp4dqCYcf",
  "key28": "4rP6cHpsWJ5ZbNje1Z9oWvNAhUJaFEbrABdinma2t61MBJEQCjmQLYQwdT8YJWmh7zKp1pyLnKGMBmAJEtaRfbBb",
  "key29": "59zUkmHcZomycndCU1HN6uf3fkkBrV9a6N4qnpBZ8MMvnXp4vAopuDTW35Mz6zADSB3FdgJC79yF9xfDKvMaiKHP"
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
