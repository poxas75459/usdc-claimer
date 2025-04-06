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
    "2btAGsXbH5M9KYbRB3QXZeNb9SNHhtrQwNToKHKtDBJvhVh6T4W8KvqKtX6i9UYtrq2LGZmxN8vWHnJ2pXBcFrFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZ7DebRs1u5dCGmzEePTBwhowyGnMaX4KwiXEfQ9EY3QNahX3a4upyBZf8ZmqQbATvoGgydYoLkLEg7719vxGLd",
  "key1": "2nEmaEesdYjcGcAGaDDdDs7WvZmsxDvNsUpyek8ECZwd6jHPWvCDCU9DYgBrY3DBPHHHMYP4pCaggDJeW3s9Bdbz",
  "key2": "2dxiYHyRBVhUThTKzy7FkhfmUbBN59GSf3FmwoVaKtYBmXUknWwGBT8Dmj7GfqxrY7ApFsXQ7qFZYLN3uJSZFX9U",
  "key3": "VqXxpqu2cWNi7ZHyMENGCMq96RR1zphu8ts6dEWyAfwdtnBcXXCff5WWSU3gM7TRn1Z24yTSkpDzo69MZcfBGaB",
  "key4": "5aXhCTGfKJRcAGX2wNEjHoCBQViGvs9vVWxU2DHhgkHzN9bEK2HSDvLwtmEEeVXhTyB1vUiBYPAH8wnmvi3z6jgP",
  "key5": "5BNNdzX8d1GbdTvnj6PTtfaatuZvuMWHCCfe8C99Yn2QgF7ye3px4UAkPL73SdE5mT5MgDrgaiwqxwhNTxTUY1op",
  "key6": "3RaosxvbXKEwnBXsMRjjbgQkR6ZGHzBR8tD5kHXERznJHgUKQbhMMwMTLv1wqePo5nHwVys3jAcLkpdYsC6dfv5Z",
  "key7": "5j91SvcqFeFDwHCATtwbNtdnU1P5f2ddB91J4H55pdZLeeatP6iNT8ugqrFngU6kH7x7SzXXD6D9C93Mo8TiWfEg",
  "key8": "44wAsbJUyq1aM9rkhZp2XbmZ6gYT5UK9bNbZoKumxMSrHt2Tabs6NuLzXDpsXC9cUHYPmAj8FEVPd3T5fTkPfDxx",
  "key9": "2emLH3zkC43LC1WK96Lcj54GQzMt58asRFAWmkpFB21ujpQwXUBfqeWTLzZ8ZHedbxzBFmWgQ1p5EXbcqZzECr8z",
  "key10": "5HGvehWXUdtJvw6dRy9dm1vEYibS6mn4wVxvJpktedC6GKoqNtSq1x8eLsDhPCgWmajiR3GMbf6MjfbD1guhgrZL",
  "key11": "5CMBEr4cPp7HeHKD9JhJ3CQrDi4283gRfHEDET2RWm4Fg8bZB6ZSbF9EcTvC9BUpNCwsJfQY4CCsFAGZbNZg74Eq",
  "key12": "4bZKp3BpF5s36LV9sus5rdUzP7Fpxd1JBmgntBdpB5cChqtmKRiRFjiLHXUmiPwunkkGaJhbSx3Pk8HT4qxR8SA4",
  "key13": "3R6FvU95QitEzNGNKt27agSM3LApyiUdnMGD3vzz4sogg9B1jgcW8dJknQRzqWxJfS1cCxtN3ytxiv4DUz3dfwVc",
  "key14": "62UTU4jYvj21KDSNyC3xHSYvBzHi1ig657kNgr5HTvm9rMGJP8hLjpA1CDv9vA3fsDaPgMawzNzzLH5wGfxWc6Jk",
  "key15": "4fKagjqtTR6xFDv4hNxzVwe3GTzrpRuSzhVZs37v9xKYJeXnuQvT6GGrVhy2Tad2D3kz8hwpnpycAux4hzPebFSp",
  "key16": "BaXeJnks2azyNdjrK2uLWsD842HTWHgAM4To2voT6eCBRsczkyJ2R1ad2rPsRfzUUmqNejJw55GpzsjggJPEZL5",
  "key17": "3jQJ48GPv5ti6vBxCzJ6DyhDgJQK2EgPwGN1eWgFBCcThQN8U55Ve5Wv1oo9DwTmGQLBPfFUTzwZkAF3EkcUin7G",
  "key18": "2zD9352oCkzfGiHsouuGyKj3Eg1iWGZDVw5SkP9Ms9MuhwCoryLRVD9NBM676t6inudDNPWrhX1LUKNxdkFiWzZF",
  "key19": "qs8DCW7BFrgBbvqkH8pk8b5gAeaQQp78Yuye5T2onUNVVUf5KuZ1D2eDkyTNGwkEaM73eu9cEnTZbh43y2tHYJe",
  "key20": "4Q3iFuPzUMzEKSEXLc4G7kauRR3rKf2gtfvZfgTtfBAvwA1qwbyKaGTdN4kHPBmGYXWCuusF1m2bVapbtZfPehrq",
  "key21": "5CThpr2oe511ytpTJx6qQE5NxTPM3VttUH6HU4JC2ee9UdJUpvGq7jgHRqHYggNK7XDCfqRBvkW6dYf66dFLiZsB",
  "key22": "1233NVdwwn3m3nTt3vGqFLpo7mAmMvx5Yaqjpa2RRXy8TchLedTAinAtG73aSGXPkUR734VR4RrNaJSLbhC9B57G",
  "key23": "2pzU1fceVB53tGdk3UH164XrzR7n8WsQ99HAbNaXebeiQXSSkgmKkvDz8paPTdmWuxuEo11kDJmEaGjectNrMArV",
  "key24": "eSTY6htzhwBWzPVoET838M4z5naTCkFnhVbEoesw8zZyN9uKj86dzFR6Zg4fbK2rWNKpCcUnkSfgmTG7wbFLg3q",
  "key25": "4VdtZhjCzDWbQfW4PNgJWsbbJEebEBJNu5xj7nFF1eejPAs4uPZQtkmh5Fxbb2qeNK9t2uwEWCjbkzDraQm51Caf",
  "key26": "2Ajngwj3Bev1qHkCwoirmmLp64j62dPKbA4L9H4vJDxfoZu1vFrL5HSHRkJJ3ZoqgE6C1etDfwUKFYbebw9jiZ11",
  "key27": "5ismV2SgyHzN7AHwu2h5brAoEK9GeG18AaQMqJ1onsfHsvVUBTi9ByGMQcRh11sTxJnHDtpqqeH6RyvwKzwkt7m7",
  "key28": "4r1PNNbCcsXF4qpPT1RZpV2iiiSRadhf4jjjEbAWXihF4GXjKEpcz9No2UsTRPF47QtBs7WSsUnyES9GVLGU66kH",
  "key29": "5YobPqyC8MAvDpEW2zhZjbqKikP8SCduvxz7Z2MV1usnFZdZCpBDZM5kZACCkDjuF7xZUXoUUHTguva4Ex6bkBCx",
  "key30": "riCsx9nFnphyF6u45wJ2VQrxfqhEpeNHEMmfnSd15n98UZZnsepNhvWm1KdFtSCokZxVCPTAZu6JBGHVBGWLrVZ",
  "key31": "5VQp3GKY3QoC4dVDU2qPKZuA3pkoyFaVupPHsR7gzY5rC4yHjQMRPgDQLA45zNQ3AYowFqXkBZcmkXyq3Syf8MUn",
  "key32": "3S6SSwdZA6NJ5BsBrMpmRSoSUqY2V4dg239g7EesSsmcgsNkeJkx5Ahu3sJhKPxhPHHtuErnJijjwJDogVHEFzrs",
  "key33": "5k1tPJGQDJrLxMco26Sy1kZArbeNrHQ3K4L1y3jB1WwwTesAJNis5JVHHsnM1ycMjWfdHqZh19dZ2KGTE5f1YrRq",
  "key34": "bpxtcMa51aTnRsBP2aVPyWd6j6PDbMFarsDAQCqiZrRxpW2UFRXyZ1naiXtiVjpWcVBoSLi1zrkS9Y7gi6AqARU",
  "key35": "2G9N6Ysa1B84xAu1oG6nhr9iyrhEgsTHKVxB5FtVLoNfNvNUp5WtA3THVmRDSGDEPj4sDMddXgwma3cmd4LaQdkW",
  "key36": "5g5rGqwpsM79dvZtARsws5DWXTizN1XWF2fyDpfm4K5RS3ojat2CZ4iRFgun1ge9WTk5W1Jwxh2sbVRtoz2jSgUR",
  "key37": "2FNy85HgovDHQLDaffaY56C7wyASjz4Qmhi26nMEq5LZPv4ovw6ZoUXCEX8ZBDs2kpLhANYzmKPLhW6UiT6LVeq1",
  "key38": "4jxcu7qszJEpwS4bqpr38V4PQt1nmtw74sA2uL68g5RXCzq2xuKTxhoHC8Rxrm49XwHn5Qbh1Xv25TRAvQW9RtWT",
  "key39": "24x9xhzkBZzG8aZYt7cfANSc227fkRV7m1GX6nFqzhDyi4C76XQgLobeJRJTuywiKyZ7gk2k6CmnNZnT2WvhWmpT",
  "key40": "5Zr8igcotEDEDAgjoaSxbn1nM8ktr3aoH44UqKSghmrVDRDpBLKcTH1Aw148GfkxvwrSh3L1RPVeQgTFpPdRjt99",
  "key41": "m5HsHcDJZeAE5LbMGNPezVqVJVGnwwrjVaEdNuqQqchioagXkfX9eE2G8TB1jGCNisKKP46kL1unGc7hGv3xD8W",
  "key42": "5xuy7q4DdNWT5JxBo8JwsBvtN4PQt7A5RUjNAVz8ZpNb4zjnwZ6k1VJe8BNZBUmq18TdzLqFNGC7v2A78qvKch5k",
  "key43": "4Ah8s1mYPC6nr15DtHDtE4FhRkx3u43PejaikCPB7qamfA8XqNTuMM6q2YxiWbXfiw1FbohonZt9gYrGXjaETFpj",
  "key44": "2hnDkPogTTQSTnsVXzjsBu652pBnNzVqNc9FrUhoNHPGZJEmcah7nkKZUvWbWaJMgc2zf6WfhWhx2X5caNHQ93Ks",
  "key45": "2YqQY4eu1YyuBbm7tgpmPuvyXXVjeT29uX6UxETR9AWA1hBAzfmDP1MvqVjqfH7mfn2UMzDEpJXGyemRViDhQymF"
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
