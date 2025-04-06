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
    "5rWYv6BHZKxCroKvPiRyH2Z6D7QpBEiZHzLUm5eC6Zjg7n7QKbDcf3Kss957Yt56NYj4ip53gZUrDLfKsWbcrzsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UC784bBLZmVyPRJ7dRCtkXW32k2xNXm2wcaKR4PPrBrVeMhocD9UxqGVWP8XeZb7SLLMuxywCDtyRYKHndun3uv",
  "key1": "4c6dpXLtSTA23yab3ouGkGxqRTEpC7PEKH1S7ZnJwbMxnn6o1kcSsgMa1RTbxa3EuyrsWtrtonCXryTRSmTr1PCf",
  "key2": "oGmk2r24H8iJCYzgEgz7dGD5vratzV294peq8orWguwssJkRGb1cqWBazt7uYUEGpxMsS7SEtmJzDbLM7Tje7mT",
  "key3": "4MqrvKAnbPRujG3K4Q8SfreD1VqSitDccMruUFiUcLPMh7BamDpjrD6Q8kBAD56y19MdVBAt8XTgXaQ9bPuc9roZ",
  "key4": "4J7YkDxWuUE3nKe5NT2YeSmq7awhUKgMLs2zWHkAzN3KNrKKGxkrF92VK3SiqdFSX4A3FtLd9PWesjZuNEJUEnta",
  "key5": "4i9F5Tmzhf7DFD58Zpnjd1mG9rTiqukVjsFymj6FXuxmoSyGuoFV46Q37XM7QiFqBxXLEuWYMv2wkEgoRzt3XQX7",
  "key6": "4EJKrHddCdehd1Ck4uALLL8PcQzL5MGZV2sy53kMvsaVtByTVpqLkTJghACTJozF1ANHp79rp89EqzEc1YECpx7Y",
  "key7": "2767w6RsrfUZE76TFj9UYHKCvXpKySmR7HgpkJKiGzKu5e8cjQRanCJy6XC7oVsTBfcPtXciKEBP8aZN4BH9NWjj",
  "key8": "4LHubDqfB1fbA2QFDdXkgTifYJZxXZvcxN49V3q6c8qTSDAgJL7oN6GmBshk62JdzkfW4cZdKTt8hy8xG26mTfHq",
  "key9": "3gWmg7dVa3Dc74eUzbtHb3wxKb5RJiPwCfVazhBCfthoV2956fWLT4roj1z4EqHL2jRtfP1vgvRwvC8o1wHzhUNv",
  "key10": "3rZxoum17XM7haYkLZCzmapKsCdSuqUGEJ3V51F7PywMHNVcXhiZ8zcoM9VjcYLPtbuWr7gqWRENFXjVh1ZiA2ip",
  "key11": "4e1SfVrbkMGkdjwjP45FA3ncsEKnzZPhTGpQQTM66CteTYMQFktVu7Zw7zF6Kt37rtiYXt8fPqKmkvvwfb7fEVX7",
  "key12": "5pmWJzWWv98aX7cUkFFApQtBjjDErSNtzzsfXtkXZJPfUKJmj11pDZEJWSg5vS433HDViygTMQHXUteNf3XZDYFm",
  "key13": "29wGaqRX8k5XZmqhUAsMRnX7dkcnV2ojLK1srzW91FczqqyW5xhhpaErpGbMz97ZmTmTpfTjhabEvXBYEa3saSJY",
  "key14": "n28zaKuRqP9wbHDmHkR5PK1gUKb1odkskygeq9i7GcipfP8zPzUpSCqYYeDhzVbvPwkYUriG78Qa6MCSecrbxkb",
  "key15": "4VzeZoJs2iR5jmHHrRpoBeuY4Ca1VcfhC4FP8n19km72qub79YHcjPKKuyyrdG8e216gE7T78RuKN5XdFcLa9CbC",
  "key16": "4WX3XiaP8WcoMwyNumEG7LaDSh9mLzQJaQPoLbNz7YksCfvQ7wCC9STUCHihoQkbeWjYqLAaXhMkPv5WcVv8aPZG",
  "key17": "4pRtYLxiCkQaQBscdxbGQ6C8C7yV44h7yUhECf9XGSkBe9JpVEUHXrmKyeRfYH76rD9boPqkiaaSmxNRZDy5mGvJ",
  "key18": "5fvPa8iF2jb8pANeEFp7kBok8wYDahM7vgBTPh76jLdxCNbq1BkJq51cAGeYUwFANrkpaah4SJBBeYrycgNouQGP",
  "key19": "7NqunN4v4GXxRWzrsjGKj7WfDbDQahFUwWyZUvZ2N1RqY4QaqkdAdRmCs2xZAheCrXAocyJRXBhdx4Tv6TY4PQY",
  "key20": "4tAGFhqGmpnGhrJkJmikBKrihBHP1wHZctxA6ZoPUtHrG5N2asAYSPwgz6ZYMJ3feJ3bfvif6h88VpKbhw4fR2k8",
  "key21": "2x3g2ZToPDYaPsNxa3rWHgzCvvizjPijuQCFQVca9ctipvc19WXibpmJz2PzkVKShouQfYQB5uxUmspF16ni8PvY",
  "key22": "5Y2MvsjVjjqMuFPtBPSWDzP2gTpCezNKgK3Tr5PxonEQHZsCqSwBPH4Q4x6FgovDu8JCMTLiUG26v73NCHvB3eiR",
  "key23": "eyig6Qf49mgURFQ9MKWhQgKKNFDs9UiefRWo3FJMJe1eDvm3Bk6vKqkrSkuMmqKcZnvnzttjUyajftTe9w8QW8m",
  "key24": "325v6diP8QLiKTeAg9HExxpk3W59Vf515p24nKYrjrnmdzF1GJzsvCRn8D33MsdEt4QA9Y94rtDrjKZqsd4Jjyg",
  "key25": "2bMkeftRKDypsNuRP8AbTj9CdWbDKMVE6Y4iudfkwSJ9QSPG8vgJjZpGmVEzFT71TquWMLdQafQPUKrtXCbcWkLB",
  "key26": "KEH1sxqQbPADxp2QpqhK4HxpgMrSjq6iFJxZ8d45pZ123JP47LX1aszeF9pVF7cHGwnAvoPPCnkCRe5m6Nx5auF",
  "key27": "uygDs9Kmdu6TuYirmuyRCXQJPin9e7gxZkPTNuP2Q5CSLCqRnLdsNGiGvNYcBq3b95LkJK98GHXDdnAWP7RfMkp",
  "key28": "3xSyBtMoSktEHrSfagGy7JZYp5B1YJx8vFBc1zXQZ9MTAgoVyevPMoTNKowhvDy8chF2ssgjuTpnTkhkX832StAS",
  "key29": "5Wgk7HVMGemqvUeKcvB6rcebvm98qNXBHAFGKbK4eB8KyZoQpxTmRwdNVcP5DCKhYD4X3KCV6jZNzLer1k7psTsY",
  "key30": "wKpLHautaucS2y6TjLG9MYsX3rZqEjXY9vu73rJ6v9F516boYMZ7iX929Q5sqq1NE37KGCgiXJcMMPHe3V9DbLp",
  "key31": "3QoyYATh24NkH9yDz52MquwM9M5tZmNtqaBXpcJ28Aguxe2KPxyv9npsbrx4CpLNC2L96XVfEyfRF9wr9pyeQfdm",
  "key32": "5tGyCUqVinAffRktG9uD8onSKHF1W2F5zzVNWmJcim118Frx6FSEgz2JFot1ergM9hG3Dune68kuhEhzE2eNssmx",
  "key33": "3HvLvwhunZNuCwJspVgdd35dyExk9UwTW1ouVjSxL6Aw27eiT6tMWvZ346xbKscoD7Dxi5S4EqjJ8X4CecRxyetn"
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
