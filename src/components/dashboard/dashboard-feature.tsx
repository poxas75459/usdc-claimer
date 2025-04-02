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
    "5jKVLdp6QHrGLJ27VmFqGLbC6BLP2BAmBPBjkrrbdSqVqwHnRwWSsh96SJJq9Ltmc5iUDuembQcqc367vR3zQikC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fuZ3oyLwZNh2PnD1dbEPe4yuu2B8UPu7qJ2CFKfcNnZJmynTQAu6gXLWN38DZ4modXvnfgo1X3kSNEWBnseDSxD",
  "key1": "4Sjxysgo5bLdjh8fA5fijKf3PTKrKe7gwoLxfPkpbKQNc1anQ6mjizdcSgknx4VwfrmhqbmDw9CDGsMtVXZRM2hv",
  "key2": "4eUrKEUr7WwbJx7AnPEhgu8dHQUWahiAGVPbUUWTpw4nsqzCRxEbLNJU4qqRYSs3DU4frpK3ejAbfT3PZyEqAmme",
  "key3": "2xgSaKCWxaLsnoPCoPuB1kHmUT7UmkKmxqD1yEv8rFYkDkXWcmVf2SGZW5tufFst5EySEi5dV2rQFgkvMZ66i2uQ",
  "key4": "4VcXWgjUPkL9w7v3aSJk7XqvnP8fiAN1FDJwsaK6TQUSVyQshcLbt63Uo47i5XMmGYwxCd6sNAirjgHP3HrvpBan",
  "key5": "3x1uTaL5XkP3tayF7Qfk25Tz3wvnQtw9G42C7ruuSoMgKru8VK1LeFPj4kiqnjGdk3ytVLYjk6BGjrwJzc5nzxZ9",
  "key6": "ydGE77iEywGnJcMSd9Gnim8uY7LELsgZkfd3KLuC5GBZ6AUbxaATnmcPRy8wZ9sYxzubb3aXbgbLMMZXSm4kdgL",
  "key7": "2RWVeL8m337SAwcYZ3RKch7kojcwejjvkGag1DU7JgWdeXNZt1QGbSg8HmN5oHFhQde2PWQguZSgHGn9LJZBJNBD",
  "key8": "27cb143HUTmyUPgxzUc5tnV8upXzEp1WMjHBztGJHTrV2cvQZ3YFyhaukSongMrsyrRUk4DXHf3XvaVGtekWw6y6",
  "key9": "A3dk7YbBu8EAWevf2PtgmSnBByLUovRaykBGXeYB6F5ubjWqLmsrn8aFTHR6CNSUi9v17DzuDPtFR6Zo1W7n8nG",
  "key10": "4ZGLnJkKZ83FZihYCUP6dUUPS6imr9fA7UGapPE9GbxukzSHzjARXt8A7oeoePUjpLeVqsDWsyRExPHZmEP33soD",
  "key11": "4E6nFFNv6K9Yh5dmJLv1ao4nKB12XsjXiz3tj2jMWadosS8Zrpg2iFHoVooSneSJAn8YXE5tb9cJDXiJ24yF1DQX",
  "key12": "4ewNXxfy8U8n9phGEtU96K9VdCbcVQyxFvNcPq3bpX2tkD9uVRS8QX5aL7RKSABcSWfJU7gJsDQfHHdxKAbfVnJ8",
  "key13": "5BQAV8mwEYBvnjd16cQ3f6dUBrZtJpuChK1nd1yDSMJCESzDMDfnCWA1KRtGP416wCha2gHhPjjbAoeYtASqiZhe",
  "key14": "3rCUXqp11YPg9ncebkqjN3V2iKHaaKmmYjFLdvAHJAQrLTvbRnF8TuPUW9p3rWNphvFAATLZMJoEA8hxcAUgjFWg",
  "key15": "2i4WLNwKVCeY31bNCfY1sanPqNUkZBZPMzXfPPow6GHmZTEoewFCs6TanXD4TcZWSRiGzRCoXNxvirVrYAQvyqiG",
  "key16": "3RmKr4eTvAxRDk2pP1MX8HAB27b48oUBtsky9giSukntFpFmi7doQ9nGGymKe5iAhUQrPbHFh1q92JYx9RtU41Ux",
  "key17": "3R5vEz3iGfMQQ4F6t7Uozmx2GBPBdsVHVeZxzCoGGUjCB8Aa9xjvthPDHRHcH65MYNHAzWBWgDMiyhfS8j7KyHDz",
  "key18": "2Cd2pviqK5SydXCvWP8NQ54uiPAL3z8LNz7AwaxGLzbQS8YKXowJB1bF2D88G5Yo99kAxhw5ig1u2wM1CvNdLXyY",
  "key19": "5yNuPKpbiVpaVhD8MmgeNVqvjneKeBic2DWjfyJ9YedRS1cEedSVBsfsBnrP4LNGdcGeoF5r5M63R2wL4i1uuGDr",
  "key20": "dyKK6QKK3wtGqmuWdGSGNnr5TYRJNs12oeSEQM99ggGuoYs2did4j1Q5noEQRNw1EXkexFkxX9zcEcGvHt8Tbxd",
  "key21": "4Ykqo6eXt2ciz2aKdbD5uRZCREc1f5cLrZvS5wQdYgZPzVmtL2wNeRJ7ZYZCKjedUc25gpwqeDeBPEat1nHLNKtL",
  "key22": "2nTwcjeVbqzGY2sMJG35x8rJRr7PcLHbwYi7ZwVazZ9n6CTZRd3uGH3zASFz8JbCv585iEnjXTLjadt1Yv2n6HUB",
  "key23": "3XdQy3RHhBcMNQ2KEApEgG43j25waZTdA8YGkv1yf5aHM5w9cRB8EBvgj2dQokULULHTtjUCPcdERpjaxBi9NkHF",
  "key24": "DPUeeKy5tm359pqvPCuiycJe2gmgnHKcoanhZearUduPU75Nzm8vzj2ZKxxqx441XkaVQgkPURmCZoR16RUuZes",
  "key25": "2TP9spiQvdUNPV82M56oLyCHbP8v99PTivmafuDK7rWunq6QckqYhHVcUpwfPUUQov4EBWM3vg2n7yvqjZPoBxWk",
  "key26": "64pPvYfuPVb7gDWZxRJZ5sdTkNMUWTCRi6rf3SqZXQ4rMmuyWHoaivFd2Nwhvf33fZz1yiZsM4VUHvizyCXwQzZx"
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
