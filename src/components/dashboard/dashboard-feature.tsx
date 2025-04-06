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
    "64P2Wn9dBQyadfX9F9fasNEtWDGz8Qdoar1Q5MZE3e1RHZKnmgu47DjuktqEsoBcNRCkk8aNTmmPW2B8NWKEgpz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EvA3VRXucSd2ctMdKfxWsq1F7UZbjtrD9NUFU61TohdRFMgabP5GHFrux1X9U51GL5KHYHShqpZcFXUkKxGW6hi",
  "key1": "4pDX2BtULDniD2amMxWTvnhpqLZemDnYmVtFaaWBXDrB5QFX7uJo5QFfXgWKPd9RECog3YAtz5atsSMNH7pjGJfM",
  "key2": "5WrWpbrxsQJM3psNk5R6BjxQUpx2nTytG7Btm4SeFWQx6fC7MsoPjm7sLaqJvy7Fk11x8cGdR2LHNi1ALaBHv7R8",
  "key3": "VS1pjQnfbCt8C5vdKnf9fHrK5ghX7cie8m3C9uW2Zs24rdvhp4og3SERvepU8sken2QLU4KEWLRs9DDdA7oTaRR",
  "key4": "5q7UwZ2nxZ62CYmUyMMja1voc5MHng9bjwdeV75a8o2cK2R7dZ9EUqti4Ui5iA5juP4QXGid7Tu2NadncPzBQVQg",
  "key5": "23GNVCh4VfV4hFzEzF5mTCtMpYqYu8rm1DqafJrLYErZ9JHrXFeqpJypEcjZzovrFrgkkVB7EGzryvEDLrTPTYgo",
  "key6": "3Jz6iEVq7zi8JecA7xtXGQe3xBfXPohy35VD5ND7khYVewgWYEgS8gU8ssk2QtG9fTttjnaXDQBhY29qSXFQLJ7k",
  "key7": "4DCJX6jghuFsUa6XNmxjtr6pcyE3HnkQY37fx9cy7oB346bzqSsgHWpgAsVEMmXqkE3dysbQqBLgYhkvtDjeitUX",
  "key8": "5YtTHHh7dfrV3Y4Ej8ZipkfXQS8avTexs5HMtEW92JJx8Vtz2wYAHo1dnigKYA68UpzEnBiJxdBLMnkg35mTaB7M",
  "key9": "3bmXqPhPCedy9BCgUQLeFtrGEvPxqPBQgJzCaXLH9MGV6nHL8ffqdZoXNnYWAHQDxVYKWJZPbw8TdY7xz42UGMuL",
  "key10": "2Yn8fo2ySZ7sxhmmzw1bEbTtVv2GCTpYH63Avjy9EhfYDxjxzw776hRQ6PjSvFxYFoR367e8VbwHKCP36V8JJit",
  "key11": "3anfHtQAn25hhVEdUwo6MZFR99e2Y921jX58sotLdzqzSs1yShuPuBrktqiSoZyZRN39zxn4gJnPVHZyMBBGCMuV",
  "key12": "2Xv4YJVzXzr7ydtgMs8wDBeW6czXKoskhHbGF3m1r1sZPdLq78yatMDtPXfeLC364VuSYGtN2rkCFH5DZyV39ZTU",
  "key13": "5kvXR3gRcJqtCHTPPh5YfraEZfskvZdXanbvU6JFa8TFHNvw7s8Rz4c3DcY2q4afG5Jwums6VgRt3uM6V3QntacM",
  "key14": "4sSttDn94cxDyHc5sbB5nTtTzvR7PbJ3sEmfY8s7cP8G1D3rVSvzSoyEyzs9TJwuphUHaVkQAJDLM5unCPgTFxG2",
  "key15": "MZSkhrW7AQUwxvR9AYy8VkNCrZNEHqYBtwQQdjha8V1eLh3a53bgrsNpKefUhmTzJdtme7Bgwpw4cF1YQaUkEeL",
  "key16": "36kdPMUXXtN5xLps1bkS671JT5ywxFGGUdtDMCHSMCkEJXgxKgJvZPxYpgkzrRxSKH7rT7AjR4Djqg83vg9ykCFC",
  "key17": "4KQUScFdh5ZVTQp3h38fMmVVTvrMxCj2gAJY2Rcnu7uNBAaSKN9hPpQszuaXg9Cvd3tj2MgzHHnDg6DScAxuqpTQ",
  "key18": "528YxbET7cwoNsCoCNDK3ZUKGqYm1qGidVmsQSXrd5GkSwHUmhDei8xQbt7iDRuuKDfLDJz5yH3ibbwePKxiErGq",
  "key19": "nVet8tdBMr8zwy27zwPQsSwfDSZtTzh5hW9njx5TrseFys1A6qvY6wRpNq1ZFn5g4fJZxJDt9MLsXDAeNSiqPNN",
  "key20": "DPDpWdy9dbDYQxDChA1D1epy8HoRjTKCP4hNsLi5xm8PHY96MDxDR1vtSYYtodH1EtfEUUaMQwonoskkQYeoP5t",
  "key21": "4vWow6xBNcemJLLc1JNQKXD1Y8NqgYuaGyWAUFaPDKJ5wojHAjAEXNCMR7LAf2vtpb7v1Y4JuXEkYHagCVcF7kGN",
  "key22": "5QXcxhtyAhiL5eLj4hqUrjdVMGJ8SM9HSWT5FxzYyAYjZHxswncEgzbsz4ymJ1r1sJQAJTVBTWnjePqKruioMxgD",
  "key23": "3avXPuvh8TjprfUKfJksDw5zKkPbbNzYbwMoDW6PwqT69wFrEBXppy6h88PcAhc7dizBdNvjEBgGQgpHSZ3Q7ru",
  "key24": "37Y5MPgHHPGDy8rfzCPxbaA5K9TPpEkfng4yCaQdHfZDYMiAocAsgwRLE2anNf3YaCbRMGWRr4Fx1CdDeJ7t6JzQ",
  "key25": "2Qohq1wED9TnguGLyUgPms314WDTVSe8JbmYLPN1XeuJPqYM5E7QRzvbAf1CvRgqmLQv9kCkp9zs6mL8MYn2yPBb",
  "key26": "3RuLU9yaiwMsifSzdxrwM3KvZixM8Ft1LGaRi66bwg34qCpFfsGsTsUE83q7xbtiDseq5PDF5DsBSLW4UG2hL6Lj",
  "key27": "4FJcmVss5yjQo6sixmXgaXLoAcrT34H3QvhwzasNL9oUUJE6FRkJrxcoBttEXBwigX4LHJjVFfZ2ppU6SYhMN9kg"
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
