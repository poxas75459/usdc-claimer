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
    "oUYcdRPukUo5TWQCvdXBD7RJmpyJ5kQQXoUujZKLm5LopqhkCf1jbkJ8SXZedW7r4H6CynJ5Swh5WR3GnxwFK7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5BacfgQb1dvzMeAh2Jy3JTF1aRRsVvhyaJzEjiY9xH3GHieje2uZXZWsFqTteDmmZeBuZfPePrBQTyvYbfqbdu",
  "key1": "325nhNBqXoG8r6q1foFRtrYkxdCYKMxCvqPGkZvcnQRZrkk7My3e2uwPcrMHeZKnTQqJxH14MvqByZ5aqVS4DUjv",
  "key2": "ZaaxmNah7jTxGy7iMRejG1rQj7BdCF8jU5tBNCrfg7fUg5PrS8hU872iqrdHXvgzovjdTXPiKkJFC8VA686gAuF",
  "key3": "2Jqs6u5RGArgqWaxTySZfKH7Yf3C4mba1jfCvybMsyZZcjoMXA3BU9qANc7aRT9vtK2bvTiSdZ6py9YUDNeEsFhA",
  "key4": "2SGhZiyiuWUxbssaq5c8MgeVDzPfEJ892DKGX7cpsRSKAHAC49xtPNVN6sWqKFuU6TPmQWJt7oQMTyuf81m266Qw",
  "key5": "4XpyXX527zPtNyQZLchb98DF2UrJBRYPthw7o8kdrtQPG2J3uxu7QaEnEAmGv1woGE1ukarsk5WwNoQEQSWTuX7g",
  "key6": "36T8kNqKnQiAU1qrdaEB2Rmc2TYEgSp6Z5zYv6jF2k9JhYjuWhMDSmvE2GCz8GH4LRd2cyuthk6fdmjkzEcPuRtA",
  "key7": "5FhajwXXxbrDEG3dv3S3hGDDFguqeKksFgZv7pPS4PVNwT8i6jdyUnN8Wsv2fVxVLsjveuwAbxDPQAbonUgATbn5",
  "key8": "2aBTHa2MdYVKf7aFiZSbAEJzMSTjFCnzVX6T4uzs1TCsPDRSmGdiptoM4uhy2xRMi1dK22oHVqf1hgeXU5gWGVq5",
  "key9": "4Tf9JbuvqXQ78zQyKrNCcj5D8cDYvjKDowTFoBEyRVjq4YrJbn4RXYFteqHPzmCP3eWnnd7LYEaTHUF8ieJBsRbH",
  "key10": "3fR6XvpPhzh2v4Mv4K2vodyzHuYcZRDM1dr3Py3F2q3MMFemFfbNhkFoJskHvDoRZ96cffQWgU7cCXDch8FWsyWa",
  "key11": "2CdkEoQmXN2vjmJZhKHc2REckijRmuqfPckAGngYpVPBeFHimuaDb1Fo6EDKe5KBHdxHC16FXwfrW2vd9mkb5z7f",
  "key12": "2BZi4sutGHsgm4Am5XfNEqwqCXtsZuzbK1UU9Zi13WPjR6oc3aidmwJ8wMLC1W3ajiWTA58Jy6VHutLx2uvJbdQy",
  "key13": "46YRdhhdSkvXeRQUKHkQ22AgkYsipRiXJThPHpXGzCLR2Towj8fVW4h8TKR1rNr24FHwD2J1kDNJ75ZPBDDJWs2G",
  "key14": "5dpPV8rXqdKa25Dzgnhv4XcKZeeUjcrYJVfjjNSAxGuerimhh4UwoAHkuA2arCMyzBTfXqjrQZRXpFrcbLFmpSj7",
  "key15": "5z45Za7qZBednzpQagj8snLs7VuRDpLuViRVuzW9MT6Y7W58ScFyg57oQgnVkMg5gHhgvCTUtAZhLpNt7MtYAt3A",
  "key16": "5WzN86sT38xYYAWTXEt2Vxtz4BADKK6zYRWjAGDLMX2qjm5Te73bDHvGQ57zjJAk11tZjWC1eXA5Jjf9Xw1Zanr4",
  "key17": "56UZUS2uLYHR1KxfrREKwfpJkZwdt7Z5XpCsH7RpKrdKeN9vjEUtzhJQppJ5TzQQ4QCNmrsJqd42YR1kW7q55xFj",
  "key18": "5zGCSYXWW73CjCQNPLA4RdXR1oajh2G5fm2RuqXMjk8h7B5MizCqrkxukCqaH97geDHrEXgYbeK2Z23iGSonMXrs",
  "key19": "5EUmBMmnpTtpEhMiiE6uAjhn9ACeQKcjxAdfYoSzd3a1wRJUtL4MgdjLK5jdhaQNDa9pTKkdFRRhy2bNhBninrMA",
  "key20": "2Aceqbj8DbSr1GiG4SoiWQG7hHZUsTL5betWWSvTDnTJjc3YVgWH1EBTD5Ph3SJfcMyiHWcAF947aPi6T8JuXQNF",
  "key21": "4sgHtDGxpZgcjUALSVoZsR2gzP2a2dF8oFbJyLaXw4rZ4NamKBRAS7ZCn39XiVg8sU8wQgDFnYLiVP4Nh94gg9vi",
  "key22": "3oMpoyc1hCmjuWNzMX6SHTsQKH9RaVS4ucRDNF391LuHSa5odSkWn4eCRegNoQiTWp9z4T98hAeCbPKGwCeCv8nX",
  "key23": "33oD3jd8cz5UMXQkmUvW5PPStoKRePfFQW4buWmEtzycbiyXvehN8PpUbL9dgfd8p27bBCG5ADYRjscFB433NEfc",
  "key24": "51oPaeQ8zrDe7kns3fw6hP8RcGD5FfPZvncbawwyiLDnURywryVySJTz9J5KFMaZKxQrzwP9UYkWC7oyNAF12xp3",
  "key25": "QuQqqMZAq1N8KKqMN6D3EFVg1UnhuFxuBkzt3JXzGVzJxQdvs3Awy8AjJi6UZgpmydj3whHEXTQSs2rdC8yDd1Z",
  "key26": "5WLrQRa1btYehD8PkwgqE3FBog9UL3PfaGzR7uFYfVyRmB1AUcCPYWAtWFYCMVTBYqkk5ei3dz8MjZ9in3pmiW57",
  "key27": "2nak6usCx7JQtbaoEnQmJpXVAzDzZWhD8RT71a9d6JVai5Q5GpmoxDUzn7DjJPr63TroiqVza8BK6exPvtXSUyh3",
  "key28": "5WH5J71nUJwRpLc92qRLhUrp2BRfEwNLLbdxBNNcQ8w6LUqQti2QCiUZAbbbLoToCR1EfPhExLXbYoasqy7gYgPr"
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
