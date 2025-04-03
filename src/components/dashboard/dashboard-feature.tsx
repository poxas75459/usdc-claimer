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
    "4KSbEzHkhCneZUNs6XsBWF46dqrLDgp9fguCDvk9v4SjPcp8GLHRGkSxEABEasguyK3x3skas55wEDi84KrM7jZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47odTYsSdJaM3z53Qy65F3qmo2ki2fDy1VGLdFN8wiQmiLB87GaaKYFaK8pTqKBmo1u2TjE5yfVqFo5PabBpctcT",
  "key1": "2aWvairnr5jW3TDZtKFH4HboGCXBtWvReXtFtbhV58wtBPabXtqGGXeRuoxeyqKeEMS1WjiToMmpGZXyU8iiTcc7",
  "key2": "5uEdNDXDo9WYrc4nGPT99dLkVJmjwjXh5bbNgQTnu8rsVERT53ExbneEjdZLjPK8fcpfE1qopYZC6HetTacbLcaB",
  "key3": "2rJ86YUucmiKqPFFYxwHpasMVdyhvNi6YGptNzmTRF5x7FFRyA5AYnfEyjedHLVxU5Fw4soY6auEPbp6SEYGE8Zb",
  "key4": "2D3ptudUMxpTx3e6tthq5m3RLpZ5Y5EZBzLsD8bDEdVCh2vwqYoSgpjesHHnBrVQntaoY4HKjzxQpdCPTAFcouv9",
  "key5": "2yj3WuGanqvnfy5ncG7ZoMQgxLf1FXH9AceUuDRJTEPjz4drKA8hyfZ1jkbwd8rftvXsTeoo766pLKmnpqikZFbw",
  "key6": "5EY6CB54VEoVN1fydfwFdvagCmWDsHjvwiLZ4PqHFuoBGK8Gac1U82bW4HyDDds5z9zMPjPzPhFP9ZT3GmkNFRPe",
  "key7": "5njSfA8b1PRvGZgTgFDh2Je9CZG5oEUqGiGSENQXMfC1UMVqtPQRGfBmEAwGc92SNpyYDzK9BXM2W3mQp4VjbYQ8",
  "key8": "5MgcxKFgQeiDE9Am7hx27ybtzMMw5rvs8WvA2HgZ8RNftuatSSK2bFG8vTSxYZsfTqwk1CazQPauVjD98XJHMvEr",
  "key9": "3SvaNU3n1Ps4cCo5EesGrmbex5SxczjfgnYBCoBbyCmSH61Q3XJdMbxAZy9y5Y6JPKVp4Q6QrHauJ6nhpjtZ56bE",
  "key10": "3WcLDzMFhjL1UgToGv5mhCCcC39FrkFiivmTfQPkz7epXDoxJs2wBCYFrJHNxMaH68nvv9RvqqJXbA9aehZapAo2",
  "key11": "3RsUg8axhhWvNxezSysHaQgQJEe2zcXeHB791Nt56jttv5q82y5dcEtQrhPMTsC5Xh4HhH17TSPZPksizQCHbGcB",
  "key12": "3VaCpXYqVtLjjYst43KEViLTFNqjJzRSGqd7fSptEyMEptYuVT4m4RHiSjsFTogig9vv1EATHMLM2rnx1rrHxSXn",
  "key13": "363i8CsBmFJRseLTLHBTcJ1c346x8wzBNLowZH59s61wH2h32e5GJSiDY6W2TVRkETbuZQjjfmU3j5RKEnadiszw",
  "key14": "2BNZEtDbQV1r1QekUixKTzRFmdYTFLP5ko63ntG9NX5cqGyVxP9GeNX4Q4xPFXP72BPkvQ37tGJzfaNCYAhstx1n",
  "key15": "5T7srEAEQwd3VKj4PzwXnEmWUXpFYCeopMmg8HD5HhWd8nFbB7bpdu7yASvM53yMTXnZwjTGYRyrZjk3uHV6zuSM",
  "key16": "5zctiR3CAZpiYyQzuTKitFmAQMiUrLdbQGptKPh9YYzK4W6LkRqWeh5eSwmRPBoT7JBK1hAbcGceeBrBv7qCLNrV",
  "key17": "394CxLJWh5mQnMVjiDUHzJ5DaridQcup9nix9CWBg5cbswCePRoxv3AuBGRLfmzkq6Qga77XiTzRtSJoUBFqoSMr",
  "key18": "5KFXTdEMC7a1Q14rbD75X5LSK6BbDcFgaQ8xytFidyEFLJh71LfncfPdm2DJcQDYqtN4w9y4Aio6LRj2Lap6iSQu",
  "key19": "3scxXQQoGmcsQY4enX84wn7k7xyVG9BJGYFe3nToziycreX52RGDT2jHM6SRunu8X2rAf6mpBfnaTS3h7BF61U89",
  "key20": "3NCY7dksuvyo3ixr8UwuDNxFUE7XffzwiA78MMwwaVj79WmNXcRkpf28J2NqfGbLsndBFnauRZwZq9iJ19e9AmMw",
  "key21": "5sL1BmfdwAPSzLzJxQ8nkP3kXyMAE6HRDSy5zMnjCzDe6FFFApwQ1qxd5jc6wdhJefEKqrh3HWNUVbyZbqSWqL8o",
  "key22": "GnTXH8QEj6CgbXxhvU5SKSQb3kGR6jzmXqfc9eFMC8EKtQmsRBa2iYiNPoPkGCaKzHVpD6TFdcjYE8VkbuGXcSb",
  "key23": "35T5kGrfXJ9VonyME57wv5XhvxPFhrpx5QxeqK2bbRLFHd2zKX4qAwqFCtS6ET3HzsS5qj7pYiz4Tbh8SyuFHgHd",
  "key24": "5tRQWPNyFgtXUSyFSWcGFvV8gTyazCeGbXumYpfy5Gh3MRXVHJZuQ9dCLNAUjm1kNUJnyhH8aAno2RnXZFe2ybNo",
  "key25": "5ow2LZfCMh5nfmuiX9s6rniCPrsAajEuMMpCeU3s2bG9UmiE43RxuHY6Gy8sKynoq64YGMzzRuCNyTszRbHjqTXo",
  "key26": "4i8gKaZb44WUScUiTkHU36aWWvKabBrEZA4q3GkcrqRz4X6hvj9yFkLKcer2reQvWFAa7eVxEiYjvVxgHWtoCGuq",
  "key27": "47e1DfY9KHbRM7efeqwUftoH3oRYpizQAmTgYF2oJeURe7Tey3Qvufw298FvU4v4MEW2DC8m7roMgPs3Cdsdagju",
  "key28": "2ENugbaubA4wsyU5LWfYw8v8LSeDRi6tqygcEshci39JcbeMvmkzv4G7HTJCrc6C66VC6mWP1wsQ3raTVDPQEHNw",
  "key29": "3HDkJYgG47kmvzpoVBiWqjenw4igxZbbk68gMgGMj57wX3wZZkmHr8oj98WDcMgw8tsrrH8C4sniZt1ayDcEgSbg",
  "key30": "4AdRsBzxYEKCh4ZRKVg2cfk7ZgH6HoQdAzbZryJQXJ6FMbiuhY6bkfmMM9ZBSb5iHtjABwSRbqPP1Szjb2KsJUsr",
  "key31": "3LpF7uFQV4qKuAPjhm1mDP8UsU2WHa8jtxVjBxQdeoffhUKAcJysoR7RVNtiQ89H7i2AHPP7UoV1Eev6gRwTvpxS",
  "key32": "3uYGGm3cuyBTzndtG6XzSFukKZu9LKzGE1AunqGSwjPr3iEts3xjnDNz5qBQJaDd8ofmnzcao9qcc4is71FAifuZ",
  "key33": "5M6FbyJhUHrsHhNsRirMEFoC7BFAzUS21ZtNyFcD67VzQWfbFYE9LSGyBQpbijtLFEVdPGfLNAaAPgFQbd7NvsH5",
  "key34": "26ssxLZn1RfeuNCudVLZoPBaKqeNsY7rZrgYLU4agvsKAUbJkNZCtzL8T5rqEC6XNMEQ9PtLgKTSd5hQBiAzZZ6E"
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
