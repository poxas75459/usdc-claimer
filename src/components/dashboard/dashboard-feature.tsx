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
    "2QzBCjhAR2CBLTM7bQmxsm24RNThjpbuXhVfLkgtwWszZDcokNUGoodjW65kyfhtyqTMJJivPYG9jrsPJnbYTi7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33pzz6bTpWZbtPWGVP5Kctg1aJHPnTGWPvt5tswcEZ6GLPaJQQ3grff1UHTAv9Hs3rCmrNVNjJSuRD6VWLh6wKJe",
  "key1": "3PCkk6fQGybweugVtmfr6GTXimsCUdXhCygkrJFGpn5rK8D73g34pwQEtKkhxTkaHUerMDY48pcqCg4bVAhdmYQz",
  "key2": "5GGQCA7isrck8ptQrcpFTov6kaJf9kiY1ojw6tgEB9fvyRGAXW74uxeCRwp98BdCdHoW54SorTeZ2R6ZsrBKTYmz",
  "key3": "47UdKnqwCxY456wWxd4xfoxp2uG7RDo9ijLyuczFmX97xDtvw7edW7fvSbATm5vSHHX4NswbUpTd953tXDx4vC8y",
  "key4": "3kz7JNXWSCEZovjtLKRg7ceL9j1UFsR8ohfPo2db7nz8phKqXUiv22f7AJTpQ4Fe3msyRHMcvBY9CJ64z3nT6nXp",
  "key5": "5MBJTZUvpvUmjdUHUDR5EKDLYbnPiJ9uiSDGGPHASADfCoVoCgE37QDNXaLzW4JgHU2pE5zpGBHTpZavgSHmZ27F",
  "key6": "8UAetJ2kUcfpUuQ2dJLBAfANdvCVSdXBpaQKLhDTyDWYToC36HNDVnn5s2TmnKqRxT3CjJaSXRo61hPaTwW8YQJ",
  "key7": "3B1emg4Zp7vvEX45FPgA1AHEFRY77XR8jKuoeVNYdU2H35SQwn9uYePqrNdNa7ntw8saWdryn9dQxFF7WCMGBq8Z",
  "key8": "3P7iSAbNjurn935sMESTUmS2K1unAwWvQhupnEgHxyfVoCpqjVNDwVqYGNsjsqdDiUYky6LJXQCmZ6eU7Gxheznu",
  "key9": "66nTh66tXqYRhMK2Y4Ya4VjaaZwNdWq9tXceKAExN9pUVDdPRk8MMRZpW8nEFG1tVM38EbLXUesWhWWp1rvniJTt",
  "key10": "4SCedDuKUbUNFNmoWK961nCcU2woFi2ZKswUHsNTUtW2mnBwLDC8Y5bp1Noh2KUaBXEHHrmDMuoAoyCf8Lo4msHW",
  "key11": "2t14ny57YBjLRx9KbrKtyV9xa9PvAbrqBoKXYdpwFfkovT12xhgKLgzcdRsFbH2dH4GrBC2JzRJcuEnKeZ7YbMar",
  "key12": "3xuweKxcSxJ83XAXmkm5h5ehVKQSQLZNGxob7WStzD5k3xVYdnSaoBDXLhAoKCqVs5PekQbAimNa1qmBdneEuuzZ",
  "key13": "4xDhVKExrwUqf5hZeeqssYrEqkrvpjwFDyRx8a5mhag2hj84yrSi4W2n1eN5Mj9njyRc77NaVTqvv6qkz8UPh8pi",
  "key14": "4eGRA72rTFmSgNo8iUQgocYdQvNEfjp3ChMCNsmcKNCmQLoeU7Wz3vPCk3B1Y2TyhFDKmd4dd2DxS9pNSA3Fj89T",
  "key15": "JZdzDh8dLhhtVPeomhqrKZjAkompCFDeC75t38qhSXNLKvZFhaAejoZpzJ9kvzounfZARZoaMaAJ2mY6hz7tFXN",
  "key16": "F5vYabKRYvviorBf3Ar8VcSPhwWUWNyT6eVfyPZP13SUSVPKreXVwfszCGAbrJo4qb21poBNTZa2WiBt1QUa4Hq",
  "key17": "wWh8wS1mqUVo4i6VQpciCdwqJdm7CCcXYte8xD41Gt5qaMZSJfamWhM3FgtxZ5R4E5nWdUH7VrUcjia2iBKV5Pq",
  "key18": "46HMiiryjGeshWwepB2ZjTwVDzBd7wEVEECTnWfKe7mayP39c6CQZyXnMrRibJMu5qXz7RKKFEaTGhTdZw3EpQj8",
  "key19": "3FcsCHejVYRsWkSPHerRGbokHRSadXkoRtjNbaLiArUtGBhdVoTHLpNtM7MjKfqh6DEHGmvZa2WkLTRw7sRdcanR",
  "key20": "5VCzqRvA3VLCkVD1Tns4DzSdfWLXdywnVusEaCv8WZbYUrgtqmcCa41iWh7mN7u4ejHyvwR3ixuSjA8Knwv3HRra",
  "key21": "pWDGrFoD3woNymeJm9ppK1XkvPSMhX3ZdHut2mBmb9FSAthNGoAAXppZ8tHWd7HaX2ivE4N1rhB14MQhusRg5P7",
  "key22": "2jZNFFAo3TtxUjmpX1bB8EQzfzpHfhRhk1LZXNLTzJUnYJvt3zYLbVMhrWkFZAH7SuyzjczWEJzHzKBKoLGAvA1e",
  "key23": "wytzVoGKS3v2MQteBTfMVPWUoJhdA3s1ap9zeDWrFr289gHhbxc6oYDb6SzGgRi4YcFXpqLj1dPvGyDrukC1E98",
  "key24": "3hZ6yem3LrSsxsyUtjuymgiNmWr1ZmLYrDXkhWfsmTMUyoryGzSU3daJgCuJuXkTsxMB7hWssYn9Qe2bvDL2dLrd",
  "key25": "QPRt1jBaeUPuGpfC9jggJwHmKJ1KAbBzG7YaHq8qtSsXxjVULQp74HqELhxQLLnF9r3tWnFjArD2odEuqqnxpEu"
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
