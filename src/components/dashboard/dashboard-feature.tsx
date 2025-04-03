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
    "51y7RHzyBaVxoJy6G4DkrXZGSPc73go2L2raAsKB8k3MnQ49bixEpyfSwVZ7oyTLvoFxWgYkH44bAP3LHLmjnL4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F1PifCvpwasKP1ze8AGPMuvLVWv8tmHAsWiQa8JJjGeUyQ8z2MHhy4HVWyNS9ArjFgf9rKMEcPSkKZLdF4s5z7W",
  "key1": "4nPKHxdUEKw5FhJLuiuu3uL5Wm6ocArNwDcmagVQTJBUUEvyf6YHBjt76AbCvEzyz3GAqpz8E13PYWLAKZpMHqBY",
  "key2": "8gCsPJfvf41fH1XSHGKmWATA8UvDJh7eJmbzfK6TSNSdmPBXewaFkwxTKsER4R8zsUSaTo1o8WYZ1HmWeTujX9Z",
  "key3": "WAaua9skX2qer4Tx4v8uWRWJ7jCzUtbnrgXVwpMRmaffavvMgqQGBCAiPQX8LDquKMBEB96RZXeoacSsmN9nUH4",
  "key4": "5ZTu3NjjsfKU7NRDSoR6mYfWqMX71iggVbv4xd6enEfYAqdz4VMnP5rqU4ijvaj4uVFdwLyhDsSiQxWex77e6P3B",
  "key5": "2puuATsw9etfaLWgkdLpEjerj6dhfccEwzJuW2ZPniMGatC48qoR3wnBmGo1541fPMQFPKztJisTuFycvYQkP2NY",
  "key6": "5VcXyEFuTPLBppSEJe3k8rvNBu16TEpJ8dexzfhZYCr6KLQ9wstuuqPCKjLuAwTAt3MExoDBazHriBUujzvHfD2w",
  "key7": "28W3o1bBAuJEtmHVkU66Da285sfb6PtsLrnGDo1H88exiXT5AEVhPusx9rXr9BdvdAJqsECsXfHkqwt2fsFVpH41",
  "key8": "4yVySiuNsHcM5PyjhVjGeFyLcVEieD3x2VsWaqCKV9g7S2aNvLTYEdRj83FFa8QY95SR6GiV9papk5GnXDGTXy5s",
  "key9": "2MMJkozGHgCrZ429BCAFM6AFdvBmko9WtrVeUXzTPeWJXAjDtf1rfY1jsREuH2ZEs7rRsTkqupmFxE1dh8MJGsyy",
  "key10": "X4xM9599QfVJupYzf5DG56R573mwjzo6qhSfcC46aqak9N2Lg6xefkgLEdJvrtUvcrtuKKxvNRbw65f1kCMeaHj",
  "key11": "4cbNqCoQ4gW4HPfEwUHdYc2JXNKTApm5d59cviw2AM2yvZXy1HAmNQGwjmHuxnm4shG63QnYaaAUN8q3thsEesH6",
  "key12": "aKHTf5vCARU6gKnoiq3pzFobWSyZzgPwThUK98sDe9NDzUW1ZJ2Q6HSKPzmNVEKMLn4w6tfWnLQ3TKKmbP8vNTW",
  "key13": "YfwbkhTUVmJ6WKGNyfEpoNghMNiSHNFK2RG6GpYJ9qu7v8T3KG5RQggPX8aC3k1YbtNgKBJActbwyTJpzBnMqTu",
  "key14": "kV5ApEfdH5a2roxKbU5T2QkvpP8B6QTeohhw7N5j3WkikCQZKDCDvrrpv5ECJ4No9uNuZuLRaHn3MCGPBpePurH",
  "key15": "5Fbs1BBDGWy6b4ZvxrD8Y2KCxLWGnSq35PZcNHNGgd3mUqNxD3yRuvX1NEs67Ls2eWZHYnkHEhUqpADTwHxxQU79",
  "key16": "4U5jzguvewLV5GUtFAV6NYNymHKkyHZww9U3pp3EjdMwz5E8tcP6pQ6gj349joHqyG6HMVbQjhuZZa1zyy8EEtxv",
  "key17": "H82M668u1csnhUHb5AwLVEKV8G5XU2uSHEUBAjh3Ynf2jWuEVcjw8pPXQhiUKpUFDVBAzkmz31s54MwkGgrdot6",
  "key18": "2gL5SmfJZ56uogyvVveCx7J9vN6bTR6iFHCPnnR79AEjTeRa9VYnwZAcvfmB96s1YjoNW8h3a2XNGC6muxVf2jFc",
  "key19": "3eCQJLb2gU2TEMemhZ88VyL18f9L15LoDWnVBLmka2NJWkjZ9hsWFskJovFpjSGHAAzAAWk8eCNtwv3BhQJZXxXc",
  "key20": "4ZQjLgfmuFefsY8YjYCYn22GtMvyA2U51V37fzf2R7ZZrT4y2HA97mYPrzo4ofs3NN819mmruXeMqrZhxpEE8bA7",
  "key21": "5qDYLDjhV14pHdXe9aK2tFxw1rCdRYNzFN6aU6SbssrZwsU1YXWf2ESPRNNormmkteDXgEq1TAQZYbNYaR63BmMd",
  "key22": "4nKqrGnuEmThywP3Li2tuypjJ54cKVtoKG82BXCdGPMK4Mm5GvPsSKg5VNZc4NrspyujyBZAtXJCKq1276W288Rf",
  "key23": "4yEepV1jGhoR1a4rrmtx967BDi1y6Lp3zmVhs4PHacYJ22xMPhscjj8snSLoqwad2uBwTeh8XG3nb9zqUcsC6b4",
  "key24": "2Axxjk4nAfxXddpKP6q4chCKERL983rx9eoUH7ztx5GQoDY5J5DxoNuEjdyQp2whoH5PnzxiHJCPrkSqZTyitWHk",
  "key25": "3zQifjAXbB3p56T2SffGmU2NpZe9KMHoEhZMLw2X4Qaqd7JS6EBCkDyzCvW8oVBSF8sjyFUZkZmJJi5oqPZCcdYo",
  "key26": "2urgCoBUsyA7j6MJ25LfKu5Vx8UfB5rVpnKZFzd5chxjqtzpWc4FEBeyibU8D8e5KaNURETak1LRvpa2LSNFYuU1",
  "key27": "2gk1f7qj1LHMVZ5ScMRNrS7eG5sQXf94egePU1LmKfRbeSnV8C4Uf36pvDopvEA4wn5uBrKSgFJW3oikzJjZbwqw",
  "key28": "5vrVV5qckgPT5XLYrmxsPuzBDh1NGfom4ZwAoqB7KSTopAmLeWegfn4RURcL7VEfDcxXguYxVHuf6E4Nyq5Qj7Jj"
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
