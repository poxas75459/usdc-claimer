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
    "2wzYJijgNTntXtuCqpd1JduWN9VvZcVyxZZKPR8VTbjviBdr8tj1WYgAKE3SEZsq7JeutRkS2NvrSqRQ7cNDbu2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xtmdfGoCch4K46rikT2ZKPMQrW7AAF5SYVmzb7uHc6ZLYwASmD8qY4oWFuHJZgYqEEP4rK2YEWMPsWoiau2VT8t",
  "key1": "8kGtm7QETKNmKjcCf1fnKf6XovHYTG1US12zgeFrmdG25tQPCDwTvdZnCDSyKrrnfpfMVVhjPGJmR8mW3ZLSF2n",
  "key2": "2CdYKyDhV1EqgAK8MbW8C3rjLd7pBjrPVYnLNgZbVUC5SpaSHJupYGQrtRt8YN2bCokTegDETjHpAoaXj4vtA2UC",
  "key3": "2qhPeG7WFcfGPU8qX7ZYc5VmrR9zM8ZaExGqj7rbzE7HXSjhs6FjNArxTGKBpGNV3GwjxXwdLuVWWHdHBJRLzGAj",
  "key4": "3esxqWnoinrbc27ZSBSRCJQHKtXhsvdznms6x53J4T6xbgsET217kVxd1ZXPvMhqBJjkxzUH35xsaBL7kx7ADFUQ",
  "key5": "3NpWokGJAxJZYUWAKhDXnz6JXRppiCSjtTrVrXJME7LB2VHvn1oMKz1QEbq8Z75tH6WK8WyK2aczxQqn2jTo3KSe",
  "key6": "31Hev59cpwSFd1vxNyBn9JTWRQ6YaDbu8EjKrdmCS4mQTnpLdzfJpwD7fzksmKVPr8GKuUt7h5D39qsUKwpUWhmt",
  "key7": "MbNdDkBLCdSrgnSjbc5G13hzAFocduxdC7vQMmXiWYWmu2pGFTVn1P8e7gyUxionbvBdpvwTGN2D971eGy8uzFh",
  "key8": "zFcPgHUGLXtuXniW7rdFChp2CajaEWp3NDCVE41JdJWpUjTc9Nk9LiMdAaECt9msX2GtZyH12EAYAqLHf6jd5dy",
  "key9": "MjJgaxerF7acfchsJzps6f9R8FvKskNd5zTeF9sXoF9i6y4Tmkv5YEPrDJKuS8Ks4q1mp4mF5UF8zgC8hdoLA3x",
  "key10": "5EdsStVzbuAnF1FV3vsKvYT47JDp7tvc95R4NsJxkNBrnwSoVG4PxgU8VTkiBphmFnAVTyBs7cqfzKPqVrn4EnVi",
  "key11": "5RU5qoAbtHYBieCtbtc4TbCwnTzZA4ib6AEfHYwgK2BADyJANjCNkJWVvKUiaca52FT4DHoRifq8HCeR7KpgqKqd",
  "key12": "2RYeQj3ZTDWkqaavT9TjW69j9TMToFFhnwn2scK2k3Hffs3TbiygYkgBDLXtQC4Ch9pSwQ6vccPRQs1UZbPPpAoU",
  "key13": "3oueAckcz1NfoCcgQBBANAwUsxrd4a5QdbAKskcWRSrR2Ma5T4fSReyVJJ1s3jWAobCrcWrUtUyQg2ucg3LRMfG6",
  "key14": "4fCtTJ9LqxVkY2Vc9FB5Ug8a86182YA3zkCF4cAbrbK2YFhoHcQesBiRkryBoMPgRtD4ChUcH8DjYAtzPUGygnrp",
  "key15": "4a9x7Hq1QWAUh4C6FfB4uEmnHLvA6XNGcPV7psWpARJr2xYW8SFXAJb8RsajFU1GGvUCwxrGa5t4TpaYXi7rYo8D",
  "key16": "2iz67BR6yLmUQCfdvP2WsgDysWZFsHUC3xkznFjZenussYRde3zyttiZyTrhjhas5bLRMNTNbCYzj49CydeyVs11",
  "key17": "5f5YA1Nq9AVhDC8FJek7Ptxx9TqWVr7L3qvb1wn84FPtone2NMP4MU1HDwfV9oj4jPLdKYdxLeNzuvGVd2gmTqMJ",
  "key18": "22zDpiqBeqZ57Xwj5JJvQjBXJruSnaboLxWyM4HwazavLbxf78xRYFmTiV615vr7ac7PMPa6UaktQSBEvRM8jcMu",
  "key19": "p8N2E7oWWSZ8gjZtzDR34AGHLcinkJQUuVSC9UMHishnxPXJa1qCGaaY1nXC5HtgGdQWJXsa9SQT8kgD52G9UqV",
  "key20": "5y7PGuV3MGL9Ux5jRpNUgj5UMpMGV8YZUU4YfXMZGP515W9WkyHvKt1g2QdQqtL7mRrpvbdAMUkdDCxxKRJeo667",
  "key21": "3RmaZkaLfZzaCzNHSKErC5WfC3nZeYUWNABEETDiP7GCHbqFPrDG5MjagfpRaMBYADfCu25kFB1jhJrPnT7naFUd",
  "key22": "2afuyguLR8rTuGjkvWm2PjbRMMtKzf3BXgJEZyT2wMtwV5vwNKsZgdh4J3Rz5h357MKRaFCq1gMuFdc9qdyZ9C5K",
  "key23": "5u7CESzSVygsEFW7t7PeMsnhmep8c2V6jretBno5aS95ngBPeen8tgxXcfKSj5eB2XrPGEA5XVagk5J2XXaAaWr3",
  "key24": "3hBXxoc414GegsDox5xd11Qw6y4j7nw6PtSzJ4wMqzKLTQmhA5TqBgBZzzWhcC4WCFmPukqm5s8ZnAf562cESJDd",
  "key25": "on6QhDTABFs85bRzRgchkKdPTme9ZZHg2tMWbMKzgPf7DSashnkGyq9VG9NG6wyFuPe4r57FA8B2YsLg8Hiu7yr",
  "key26": "N5yyV3jjfP5bBBKofSgwrQiTbErCM2QiMT1PWWmGp1zPsb2KX37Yd3i3KvKXAPu9tXUPTcjkYiN4385RnUyXVGw",
  "key27": "3C4Fmq2tqgKZ4XNtWXBWCMrgia92h6C1GQTZCx5vF7Nvtr47AjDkBQ3fci3j9esxR61vRLg1dgGTVX5aZs728bNf"
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
