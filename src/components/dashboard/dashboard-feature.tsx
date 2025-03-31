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
    "2RUWGJUD4dVGUgD1ixX39qvxayATpebzvNaASqxMVW9DuMkAogdXraB76hSQZVaGBVbwCeueMpGfHCDAEjpA4bwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fxf4fvGsqbGRVAHU7TutdBYgvWejF1wPqHoxBHSFcpmAZeEZZbv44Wh42z13o24xf7RBZ8ocGFQaRDV7tBZqSqP",
  "key1": "2x9oDn7aaZfsR6LjuJHZHV5QZGVR2NhzmPyatNPqBDfvXC4f1k29hTeJobYGBnFCWXzyg55ngJ8eNVeFNWqydB6S",
  "key2": "4sexagNCCGWsn5JqkHkZFzXFqpKY3vE3PyPZtuuo9gXQcRDjw5dGMgMvVt8pywqEKqPV2DL3axqLBSPjZxyCNyMQ",
  "key3": "5BFZgwG6YAJqXNUjeyKkFmfkWjPFudmtyf4DcHzA3ynSVKmGi8kRAjnDyUfnxLggBwmbVoW7KGHUoRaxauWbkjP7",
  "key4": "4VuwHJkRqoBCHEbJPEbeEiUTr4u2vvByYw5ECeNpjrGSJ2r1LUWaS9Ewj3pM6nfuLBVrdb7GeGoQfqcFxTsTncer",
  "key5": "2SqSS7XuYFec3zpkFzVxEV6HtCiwc7RgmCTeqAQ29Lt783JKdcoPWw6F2eewRP4PHiyEBnxabYgYPHhLv4ekEU1i",
  "key6": "5Kqjc56oaFg22tnokpb6y6jtbBh3wG3BCSNLcbETL125EwpVy6L1g7FkqghgbtYBx1iyWRpuTL4yiVzvsoRETvEH",
  "key7": "3AtwMiWX45KegLDbRbV1SXCsembUJYhbuW3wi9MbjZYhRN6CMsbva4yazjNquCwBkedGeYL6qWNHwWUrcyyMy47F",
  "key8": "4wuubCUPVY7eEFQRW7ahCh5KFgsypcuVfhE59zd39g9QekmMRZfbdGtyXeCK7LZoYZ7cF2t719HWuorPXzwyR8Pv",
  "key9": "4TXHwSrV2hEs5bWNDwY64KFepcYYD8WG2UJAbYpVd1QVZhrbry1WnDFmdT8Sd1fWQPvasojbBFqiz549xgKufkxP",
  "key10": "59YoTE6QyBstLbf1ySgrv57PoUvW7Eyb9GCeFvk5hM1Kp9eqD3x3kKJTFJpdPyAKbwoGo93bH2DJpTPXraZfUhDx",
  "key11": "3KRPD6nn3R3nLBUyNpSmksdjduNXrWWQGo4S3te8yjEVjKoq6EZFC4JShLFdjNTJXibhE8JwvnMDC75Ugq632ESU",
  "key12": "5vqsXR8agdPpZN31TTdXS9WoiFXm7qdWhFHdjKByWbjyHY9SHKHEpc8mvTjQ7T1ZvwZu4WV8yqm4kKeR3cxijdLR",
  "key13": "26r2H7vSXvRSVNZ6WzJ2qufKMThtNBYyUZ6joprXBzvqJdjDKGt35GGW824L7goc7CvQ9qrDfJEy8sstkTbGjZTA",
  "key14": "Srh1MpDrvsxXQmRty4B9J47NBwmygTZYqmp4yZ9xHzS8UsBS5GWZieaEDg6Brmo9V9hGRW3KV3p9n8AmMTjz6JJ",
  "key15": "4sH5zD6NW8YxNWt1Z81iTVXJsRqw3Dw8yKrtrHdSA9bpWVPig4T8ovVPhUuJ8Gdt3otWr9cSzf3AibkdN2jKbGav",
  "key16": "2R8VoFXxEWWrTcWKLHMJe5t9z8HnRxDa1oSNf35CcY8xj4Gpti6Cp8XE9Y43DmfLr4gZAobEjomAe9EXYKNY1QSo",
  "key17": "3EZ7nbP3hPewHs6wuNqw9w2M9vYeJxuszav3okByZw4uCyjFjMoReqJWyQtdTjoMtkAceMznUN2Q7FXXBa9V1nBn",
  "key18": "4z3Z1ZendaeahJujJmdCLfJkUkhnPjYGqz4uAGUPCz2jzhxjFXEHWMb5SoNnqStqbEYQSEWfgzcqQFEno92x4m4L",
  "key19": "s5oxwhuqdruVBuPQdgkshEE5H7Zz5ppJfqD88izQ5zNFd8AWGKzrbxSJpgzAaq1e4yQJXW7K1Quyi3ZiD8B5Vzd",
  "key20": "56d8jFUhYVeaFQAHw1GRmNRHdCeZXtubbZvh5nYQ7irUAyupjejdiNwiD8v8jVfnEH1HpatL13qMaaZLHEACoUWz",
  "key21": "586dEG7sHHKTjDPrGjKpf37kYJVFwDQXFMPJ7Dh59TobNtRJ61EcZM9QUcnG4t6nSnerr5AJwEqR9n7vhHS9XLd2",
  "key22": "3trMUXdS1MGbzehZb8mVJH62TV46byn4VENUJ9rgXD2gtvVakhYZE6R89dVWWr8GbETcv1SugqZMhmiBx42JQt4N",
  "key23": "4cjvm4tdwmLS9tcCe7vEra1Wr7mxvNPwYhh2ZvfchEDpPmhm6TRg7461MRQP7sjGTPtWfSNMGMQQxDmEf1miuBGB",
  "key24": "2bdeszMGwWRL3nr87M9Z7qBonuCEAnWwgLepcQfPrLDbW2z2hmrc7jWAErbuEoK6ieirFF21eVHwcEfD5FNXxT1",
  "key25": "3veXqcFzUq5z1yWekvpUckZojsPNEPVb6DY1F8Ju4xbg6QPKSFAtSAQBnHoxrTBKYuaj7ENXiB4zf5YE888kudax",
  "key26": "4sugtzzSXgG6uCWKRyX1EK9wtgqZKav9VEPQaikjwQQNEa8TppeqEMvKCY2TX3VX9ip2JBdjs3ATnV8yQWqpsdaU",
  "key27": "4yz9eZqxJtwPhHxppd92LsTraDpVeVMTYR5zREqYn7M21StowhbEAqZyanFNB357n8ALNYAELMBHkKAHrSsVycL6",
  "key28": "3xmo6pqpyZbbK2DXdeVPQETCo1auAdUgGf49dHMTMdTHgLgzJtkdPuKEqKMJ6bNtFNXNsCTgHoEJPnprVBsSDw4P",
  "key29": "2gJSVDvrouGNUfu3WFC4JZ3AaYYaekB7eajJEqTW7iXvjFScNZeYGBAGGjxHSfS6JyBtaLfZQbfzhQkK1BNecBPn",
  "key30": "4km29DoEe7HmHEi1uK4aw7MBc1CZyD8qSYoQH7Aq4P4yvxVFU8wZWhZ7Xv35p9fpCm4Ag2M2aQJTtBDZD299V6tU",
  "key31": "5Z5GezkidG1DSRLhAX8CMB69nr2nW7CgYjXwa3rArY1Y3CuU3kQuo999k6GLtqwRs4Q289sUWBDJL9RzjHfUDU3k",
  "key32": "2J95AapsowjNQT8XpWieFGmX6AEaEwWpgLJBe8GisPQSGyV4bPztrRQT4utDZ2cPKsFJD8ae95qJNzeMN2REK8Z3",
  "key33": "3UhFnXbmfUhBQVxaUnmUsbcd4DwqWqEdSNLuZNRBWR5DHGT2DHCrtrZQBXd5AfWbTmzwBxQuiMxb217KJqquhwhe",
  "key34": "bNJ7GVYQJZcnTQGJA2cUBZHZ55ng5dZ7mWrZYo1NVMeVNMvqtBJNYaBeTYRGKBrVPqiKwoFpoUeBwQV4sJMq9TQ",
  "key35": "3zYgD2dXvqjXkWa5YdqaPBkw38hFUqar9dPFb63VBzGxiBJQuD8cdBvmBCopjKdvj7Rhrc2UGtQ2Ata54jfWRyfL",
  "key36": "3EzjeLXJJjFtFqdT5szmtJ3D3kssSjfam1Na2DxuVbD7J4jARPBnt2FjpxVco2X1hYtvVAcFhM8zRNMnswCqLTzs"
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
