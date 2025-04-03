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
    "RL9w5W9N8BFJrmV2nF1rfia5T3a6rhV2dPf53mG5S45cPfKnDL8Xq2RBRX9AoywWx3VfjHPKvAGd3AMUCmCFq5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bFsnY9LqmbJEgrcPnccghFxTRh4hsSdFVU9GPewd8HDfo1QEamg15wAtgFmkMnacLYh4N4UYaUskfaJ5ESeV64L",
  "key1": "5T55TTjz6K5G1TGq5Ec1WW3Ezcj9s2rrThuNNuQ6pbo4ek717P6BGUBrpB1Zze6egYjzwBon5RTBbrfdc69rZEt1",
  "key2": "5cUq7XosxU5rHfeUaroSeDurbEwusMT2poicLXFN5yiGVV9DHiWCUApjrPEV7scBXUDHU1YH5kaCkpngHaosVjbt",
  "key3": "4crsUivNj68aSeNewZAmGTHsbwUrfw2VFtJ23u58AHphK44o5swCayxQcmWRfy2xXK7bJLRM2p8mu7f7QftEofQb",
  "key4": "2r2XCsyXgZhXF1E4H92ehKG2wB2jfevuxq3bcv2YrqAtYw1x4UZfFPVjXCJb3jKTtmwnfTg8aw9YSgripQHUbkng",
  "key5": "47ZPSPK3pZZtfnKeGugSSVz6w5CjPkr4v8o1SdFyX9cB2rtniddBAuMhStYyGo6jfShD6VXKnnjk6refXVSG34th",
  "key6": "33vxZ2wv3kditera9Nw6yErhWorgwY5nEThvUeU63JHAewaPNw1SLTSmwM64jpzCGy7EToAUXyixEzuVCHHToRnU",
  "key7": "3kYLd8BC23uayAqsQ7MHKhKpLHbkbVTaoM7hhFT8jpmjSfk2D7yvmHc8x9dXT1f9CiJWx6gdKWGcwmDirV1qNBj9",
  "key8": "5RjDznwkKS8gXbjKDLtGWYZzxu3rm6rky8Vwo5uhtDUeHFwK4sYwKka7rLdk79grsS4kNMbe6zmceQ64awLpw2nx",
  "key9": "kvUS23AvpfFZEcx7BSieNtyrEL3nYaWoP1xeef72weQbS1Kd6mKnPL2HALrxurSHS3VbvoXarN4A8bHZURPnw8f",
  "key10": "4MerUxvkhQyNuVoNs3hoiWsQqC1PNWCSNu95HGzxZxwWSDoraKERZD6Gmu7ygzJneH1nTP63Xn1b16kKBZwjbBoq",
  "key11": "5NhdWzaZPLD8qiR82awsrUNjcmPoy7v7dcsUSTT6AhnowgcPwomywYwWjYA8FCwzpVLoqVTdMpqH54TtUwtcotYZ",
  "key12": "4yutM2ACTivJUZmSDzNBP4xEZGf4uZWgCECzFM176ewDAixPHwquDquzxnssKjFChR2qZC2U4v7JZ7AV8i9w2NRw",
  "key13": "623MyibfAa5zXUuNtzMkCj9uGfJy77bMcW8j47yAgnYpDnGBqaBzdDa5fE7sQegrcNVnrsd7Dwtunk1phaup654G",
  "key14": "2zGFZNpurxmvMtuNHn37JueANNZk2KjK6Cikz5kAeotZT6W3g6R1gczbvjLUqJNPyAqw7JLvpeVFv6TsQz35kdiT",
  "key15": "3qyy5YfLWynYqgvr57hUA3x1yAXyZB9x1Dp6gSSz4sZ6GdxVa5GpZLoM3eiCLk2UTGqgS6w1LseYcHyVpjmxeBFB",
  "key16": "duoKdreKuTHvFLwjJmYefQU3CMEnHcAdzaAskCRY9ebQ2xXWBanxCfWqEgK8uoZyKqWQu7wEEyqAoH4TBSnLWBU",
  "key17": "2sb837LF8ePKs7S3W3tTAFZwgCvXUKMDYgH4EcEtBCu3G37vh9g2AmXRNXhJYT1LduvCCFzZJsQwwL8qNvarUoYp",
  "key18": "2QkPBZM724nwr7bdEEFEkhnuxamKF5Wj8gprVRnbusSJhyZT7QFSKPspXwKrbCEWCxNeGHo6z1JHrPQEct1BPj69",
  "key19": "3LJ7Kzu2UkcReaMBdAj6eccg54PJrjJLWTMriRGb3nfjXTQCvJUra2S5yH7FjiihfJT6qw8cF9TuHjgpRRqht6Qy",
  "key20": "28aCYoSd24vBgUpKqYpzddHzPDd3e6GfNqyrqhVaHAUufEAri1kYPJNZQGtyNf6A8dUieWKhMfH1i6SWWN6JYkpC",
  "key21": "3AH3JRMn5Vr8bxjKSMa6bdCRAZFCQU2JX5ChtWdwEAdQLZXx2NcX1nqXhHeDthrEURPjZiSuDCX7r4kQkoxhFDSU",
  "key22": "5S4ciGEidK2cWtJUp6ER7Wxm1e3M46RSqperhXUthcRcccwcrjVP7491wB1Z2rsEWx5HuEf98HCXWRGXdunqV5jZ",
  "key23": "5m8uj8hYHrS5XksN57pLU9JUEGpeaUzPUmfz6p7ZSZx6EzVHzsr8bmxk36y7iJdwAdhmP89ks7hjpzV2uEYtrFKp",
  "key24": "rRVCXYiMaL1kBkNotj87wXESKaXT4pmyGQG7tmvnUotds7tf3W9751j7NgydtXqPkZxUkzHphPg92D8w4fbpuvY",
  "key25": "2hsV35ffmQ9jewvp8ZNA7m1SnFVfZPmxemFdM1NgeQcX83mcB5aGyCRP3xWLiXprNCto1E5XqGJxAjmtsa1CxGcB",
  "key26": "6fe5anHKtW8ASbVF8ofAnar1s38Yjg6cV9nfijJvpNsqNcCe7dG1KCZEyoG7EWpTdCPNiTsJGrY4UTvWHdQwQeN",
  "key27": "4RCM3U3GGP2bXosSjqdBcu2VK7DShesZQNyU9jpTfBJoPKmeiEtgJuQXpVE98qggzKv8EgmCFowCwgWp4nVCoo4F",
  "key28": "2cBgYY4Jr6Wp49HPBjXd9v7Fmn3BaQjQCBwQRKPaDwdHUKGe4eLndQ9h5pxo4LfEcEH5uTJmZh6tJjRfpt6dQtcF"
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
