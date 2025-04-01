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
    "Kp8gBownXvovBSQ91C5W8MNjyaTXq86Eq5oHs8TCtVZpkmP97BUq8o4qD4tZRzzCJqLjug381imFnJ4Yy4D4aCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pcsgVN23c35eiRQhibSzJAzvy6DSCERzPpwU9gt7u5CBeeaVtfRfY6sjkLCNMKjUrxS5oH9zxVDSFuc2143SQKM",
  "key1": "5iGkFoSM4zWNRerEzvXCvrj4ciLFPfymRJEDTtXKzc2FmhJxVpmerEgUPMK8MCA1tyMjp1qUKAK4yJyscdgV3iwj",
  "key2": "4LzFxDcEwqyTCJrzXxLs73AwL2BSkzogy24GRy9ep3xPxWdMjfdhvosAdDvrELnPRupZiaXdLR468HHuUc7HrveA",
  "key3": "51Z52hGdcawU3EosSZhkoCgWicb9Pd4Gf7iWDmTU8L6BucjvjTLtzc9dXweRrwtcQXShqFXYGbTmLWXaC4DGqotk",
  "key4": "PmUw7s3icn1mPvWgEBHeHbPJHUvmiTSSsa8CtzrcuGzkcSuY2XRYb3MvZUmN8SUvTm8c78WafyQgkYhwqMR3MbE",
  "key5": "xVnhcn1CBn3U4Qm3Lr9V2wF86dKuw86PeFJt4hFEshdVtsRUd2RQed9dG2JBcZ5RvRvXjuxLvXvFeussfaCXXck",
  "key6": "3Y3xKCFqePTyzXBV6vYS61REnUAirZPcXcHKwbuTcCrE2AXtYpw9reNRrcPmTkDRd6Hu4vE2punmdrPTsxmjwTbt",
  "key7": "t8fBKtXxuG6undr72BrbZjRnLjgnFjvxboo51ACQpmsuazAHSFzACNFahmfCJ1XKXvazX9rESygtMBTiVT1LcKg",
  "key8": "3WBWfufTmxtcrboNsWwjiecJQj86q97Az6rMsWBnd8xLqqmW4bcW1Jd2pVQ4PtktK7RZ2iW9NkKmPPMsthih7uUT",
  "key9": "2nUxkWRt5aEzJBt7Jc1zhLwAefSQa4RUALoDesyL1jhHWBpTqSWJ31AhBKgxZTBeuNT4gpgC5Ywm6F2WEqu4qhvv",
  "key10": "4K7AecReXB3vgEj8RKkKs8LiEKFT3diTM2VHiHpbzC8jA3ykKnma8pVpc3SGu1AR7MWa6CmR4ixFrjHieSYKKBb5",
  "key11": "4C5EFuAGYqPXN6HQQTWNufZUQw4vgnmHnxVYuSQ9tzm55SfRG455hSpZpvK7AnGqBoqXU2gHrNyqRuBn51Kv2X54",
  "key12": "2jLAagfJNhn3Y8pVATdELjnNEkdumirK1VwxttmDefbekERNuJm6W8uCb2T5uSBgJPDBNX3LokHhmK5YJ3eFvnC4",
  "key13": "5hxCJ3qLBNix7mBijo2LxTb3mt9YqzXsjAt6yyYwc7Mft9KL9oVyZkg1Y3TDDjA9ciow9PuHZ5hXPokkdsg973Ma",
  "key14": "3urHmeKjZ3pjTpDhR8LkahGiKof9DGzg7GTXXrCrRuv6v18Nb9Eq156T2umDJNp7uU4czinKYyhvUVUpgguApGfX",
  "key15": "47WMJXQ1KLEU6oF3K8zvuNLMucTWejAgU8GEu4jea8NBsJV4eWVMT9dipdF4MXsp1azbZeSFVWyi1woHDaKNqtNC",
  "key16": "48qDrcmNLstzePu8sEBwdw2nVuTHMJgvkcPCA9obvPJpaP4ssBrtu4AYsSRXvbfRtFDM6EDNUWuFDgcu1znV5SdW",
  "key17": "3sEfjMn5m4j1QwygGyzTBqYxjD7J87QFwxvfseXYRwPbd62CgypPna3oeuD8CrwxS5pToPEFqLG6fU8WUJ2qUhsn",
  "key18": "WHFoBiMvmDXnHmakWsMXrjcGenVes8dK2NQ6qNnTXHjk4azF9Cg5zKLUeDu2BUsXvscYBxvuVtMmoGWJb7HiNvN",
  "key19": "4XYQwr4ZcXJkaBas8WeX5Efyp6KPYPPJx9Qti9TsXCxy4FhNU3zTjbFFsBJn2fkKFaLN5o8o5NQb3wLnbxQ62ks3",
  "key20": "3kRxTmomkM2yGfL1yeduRYcBrTqMnrKCrmzzRnLBCoqR8ab5MesrwQc5oKUmJG3i3MSi4ro2QFLw6eBoG82HH5CL",
  "key21": "36VjPsRW88zUMhZzmLMdJM9jpfRz7QQso6QfsiC37AwKAC5jMhv6bZKqQfZChYi6koky3nsK8uAQyEt8NXn9Euvd",
  "key22": "2NWmg5zgmmRbrbVYpPsW8S5Zkn1uDKuQiMvq3BmnFsv7vUwHjugTqdM3ufHtdDPHHhevhsqDnHMpU8G1G4AzPnxi",
  "key23": "3c4Ci8JMWpjm48ievaomZibrWVMDStYUvd8sTLpJ19nJJrHbexM6BB9AubsA4dNj9BQSrsz1Sg23FJd6QxDM5gb7",
  "key24": "4bwBSeAnaMZQRXXknVVWgNkf93SR3d415Lq5mKDTBEu78cAEodkYqV6om259LvSnXo23mfAft6uuCMpk63o7GM27",
  "key25": "59UVr52kQZ6N7mDwzXUK5eoJU6xHmcV2Cu1x7PncN8TvTb1fVZEasa4i7oD3Y2bieR2LmmiWjK6ZyFtZjdujiVYo",
  "key26": "3QyTtUDv9HNGxZPyam43sw4Y4eFF54QjBwv6f7dwhefZwfFLK7WWDXyXGFbjPcpMgEpuD8hmf3cYreGtH4hjVPUn",
  "key27": "4YWQn6K1dnEAokc7gzBReT2u9nhvmhefJTp2bnVbeUdL3tTY6wwgb1fhm1f9YEax249kC1df2TUEWbLGWeArGJur",
  "key28": "2nA8tVTRXnqxNMmao2nL4HQh8WREBpcrA1JhuNGD8ckRQRaPGB2UFHwHVMwsZSdfN4Kp6UvmCCxiP3PKL7EpozZE",
  "key29": "6A2hL9pJGTVsnn4BWyoeqkxr3b7BkBBsVecPF2GPTXyguwsoVSEnVp7JR8yred4gTB1gh4T7iP6YdQub7K5NbRa"
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
