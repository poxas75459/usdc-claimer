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
    "5X4LVnFfUgFx69RK1AzWZf2m7eDNoWSyXBp8TViNTXV868eGFYJHwBFbfDfVd1PTAV5YfFmeEykXYRgcs2QjtzVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bggHNNY9iEryYtbbJ6tDY312gbF8EsRFKgB5sTKBmWq5zixHuAHMSRXMQ6ctNR1YYnnPnJ6T3hVMJHrSLVrVPpQ",
  "key1": "4kBdzj4SaxtpyUXKvxPVWLfpECz3wx6FggH5oKhSNn68CFjDnGuLwFFDGAGHzWkaAoiRqaURTgRB833cYydNpyho",
  "key2": "4yZDpbQKnjpHpZgAEDJzvMGW2PHkjFEdRSGyF2pvRuQJNPJrNjKJd3A2rWDiZU41WxsTZQDvozNrzGtEQN4WXnQP",
  "key3": "4oByrhmKwECEcxvtVJikRMxpjoB3yiAwSUT3xYBEScZGRqBQaPaASTRRGy1WsqEXgke5zMguLtpKVLptKXHicsCF",
  "key4": "QUBZPBViPaG4Q2nioPViBDHvkfsHLG7KHP3gtp2mHhS1NDKcTFE95YScQSxe2hqf52kRC1ZKvZ1xNBEmBqH2su8",
  "key5": "5VxnLHNNCbgdR6fj6hMKaB8RfrbxAr8f8hN2VqtoKisYrrtjMMhYNKKcQHaf5qybjUgc2JNjhuMYLEvAwmt6LMqM",
  "key6": "3mK4RaTBDzT1Ne5toJiP6bmTHqkD9xVXq4mtN7MCQyjptuT4oWDapZ3BoYzApR12K7KY7rUeqMex1VQK2Jb5W8st",
  "key7": "3b3ytCgvkUKx4h49RSHWLvfKS9v9vWvPTPeFGWgKededwxwsyVVTAsgDButdkcy7suBiXGvh8xhXRRF3sixVrSMU",
  "key8": "3o7tNobWmigTbrRPESXrT2yG361c6WPxy1NJP8BwZAykR4ksK1L2maawhop9S1R1gL8HpTXjgWodj8rZHopvLX7q",
  "key9": "4GFwDD7BP5pCzg7DLKUj88qrVEf5FbJvHVNPucQidTJgpy3kf7BBtAeW2ouPVy2YFxvSQxeRBMxynXAQPSmJUM1e",
  "key10": "4kdtXHhWgYZwx5ygfYV99UWZB7kxRRXssAjzcnKnxXrrwgJBUKtKK7ZTBNgZntmtLGvCqN2PeeoiWDZkx7Z6nyjF",
  "key11": "bPQSA8r7WChCdDmGbeHvYxZJhKehPD9vHNnHY7sZjGgbN7XZkTTybaykhjgGbHnoxnGaXtjV8hUConPQ4HYVjsK",
  "key12": "r85hfKrGWiV61kcQNCftxGf4aJyNToErCbsWG3QV1PiZ2uByzmXhhdaUNoZhrvPEUtWYiv68Wv66k1y8aVMGzcG",
  "key13": "3C4HaEZoBCZwLzvpWZiec44GRkwoedC5X2bPLTaxWD8DaRHcSm6fbYMcHDFvc3u9WsejbPNGDmK5i7Lica1h25tm",
  "key14": "3HYkYPzhM7WVVSxgWHwqUg969GqWjiTAAiEYpLhVjC6omGaULtGuAYD12zZ8ucgwyH2YVutnB6eHbhGq11kgaqox",
  "key15": "4JbP57Puoj7cYNG4hyCBCJBhtLoyuVcg8jqUPQUjAFz5kPnbmZRLhojdWt3FEL4wNycfMEsfApHbo8xy53hZ3BCd",
  "key16": "6Rs2ocnDS3D7qn8Pf4FpE8VGKAWgNqx1JvX3RUG6udCsGG5wW2kvnUZf4QfdjSH6q2sgKnVQ6UuzVUfwECRVETR",
  "key17": "25d4hUkC8Ktjtjn9c3LeKrC9qkpNDgy1ZweGGUrF1f386MatHMGta3yxWSKxaZEtzq4twAAyRZZTmv3agtew7Nob",
  "key18": "5sTgpKLPSymGu7RwzkRQp7NVCEgy3Ukjkv9icUKawZ8eJiPcHEWoHggn2QMUCMmP1oxkWrdaKuudEtaETqYGc3Ct",
  "key19": "4WghQ3Fon8xSFG1BY2TsQNKNTJq9aiMbGuXiGD1R8ECeFYmBESPNi9CzaDHJZc9fUBKMbVmWHDjbNLTnZmzpWYSe",
  "key20": "pVNvhTNvkuYYxX85C14htApnRCsXJhBkmgN3tN9fxkAooqeyVHh5BnpCti5XUfqzgeCFPKTQqmKy5joiJnhqbQX",
  "key21": "4z6tsEEkWDpMhyW2eqsdnMdshKEa8i7dQKLknZhjsJ1117rfBLiVERrskLkjBT6PVpf5tbCAM8jB3Sm2BuYgV1YB",
  "key22": "4A8BmjgQ2MJYkt9yEgLRpQta4UQgxWVLqZ7tsM6tPkgajER9CSRUgBNSKDjw8keWi9wD2kEbrwB1BWx868v7VNpJ",
  "key23": "3ASD5iSNFd5xAaSBFA3r9VQf4vr5mi97A7P2ax9kj3yxigzCM76xKRvYWbq5E3WjNe5RriuhL9kVSVAz9gVy72pS",
  "key24": "439y3mMeJ8k5HVZrvYsJDufj9dMRMoDmUTpyLHHzqm9uHZA3j1xX5LtaiiitAHmD3g1uRbAtZMUec5GsejLP8u7A",
  "key25": "3bcvMCDS74Mkw2wMfCtzx2x824YHjD5dvMs7jvqLidw3EFpm5q1b9ErWmtqANT7nGuss4JqjPnTX1Sj1eSWggtDF",
  "key26": "26QcrNAffgyH87tuoW9emgkNzqtmVtTtUoc9qCfgc8BAezkQR2pZHKdkYYwqZtxAjgbMKnQevYFWrAcs97q9Wc2W",
  "key27": "43cEzqsQBAUGirRo91z49RRr9pWppALT8aK15Nz9suaAwEcMktnm3gMRUP38xwjc2DJjZndiAxBRvYkeyouN4Uc5",
  "key28": "nKExpoSc7xz8Xgm1wQKpLJnbnFx1wwiFWTrCu4qqDQPvwKavwvFHfeHLdiQDRWvj9UdBTk2mUqYsgemqWpVKTDv"
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
