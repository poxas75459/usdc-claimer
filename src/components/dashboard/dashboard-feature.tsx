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
    "unYZ9ZencCjNfWGmqojQnH1NNKUd84sK3Pc2YGSzfrHN84V79jiKP1tL235G77tv3qireYRGUapnax9GY9eR71V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Vw5s5pxBHhVoW6M1QWnTqNo6f4WnwAWkdHdFXQSpdmnkWyifk5ADGvpkabEhd9nMjxTgzjxyP1iJKxatXShFyF",
  "key1": "4tMcYSqu3jyTfWFAJppuKnSNptwYn1suDzNEMAXbKNsA6XkXyRKFmV8AkuuzcDEnvRyZHxnKScGN1PNFkg2rCYgT",
  "key2": "3YjukqYiFojsrQX36Yt6rn9pqNUUExJSSuP76BxtD6UvHt21wBjL4Wq58r28KEHanf4b9RVnQQarjiJAT2mR6da4",
  "key3": "22jvzoQQSv161juuwiUGerDRPB4TFgx2t4bA7qLWzvvuNsKe79yutAC16eSUNg4yj86GfCFHDuNHPutLzV5Nfz5d",
  "key4": "377VMRUs6yrGBifqcxZkirm7EYHUQNHCV5VMEaoAhnvM4aA2FqU6HDEaCTxqsJEFiWpyccGRkwZNdnMNjbbzszAD",
  "key5": "3k6Xmjs3R8kSRVHDENWwetiQm3PeqKooYXfXwipwgjTp1WxgFkuETwHRV2t5MGSfzVbz5An8jQiTnLVXRoy3hZsZ",
  "key6": "2NFEn4eui7JsLhW3FsQE4nn9WTCU2qDr4uNTidpf5kNFxbs9CzXrCrsNxTairq3zjTcRLh68UiEvZBREGUdsbgzE",
  "key7": "2Rhm1aih4xt2Mg4WzLDEcwV8UoH8cuLKJrESWnZcYwrgSiwutwYAjFyjG5jrsVJgHom284dUuEqe2UKJze7brnxd",
  "key8": "4ci4X92ej1ZJGs6bv358wbCWeutay7cVCmybb25yasqP5EPsEFwsi4UZF1GfueM48KJSadEQYC8um3Kw5rdLvPVM",
  "key9": "2pnpqppxV7BdwYACrWgB3QYWM3xmDh1dRdxJMpNdnDnbMegumrpHqC9PFHg3dR1i3V7k1fzL9DJ5NALPagvK2tXT",
  "key10": "WANuosTN5Ax953LvaEZ6RurZosanFPZioqPfoY5dYUrDQCU5VvxKhnAv6txv1tEThXwwjF7RCra1vZH1s2qMwAo",
  "key11": "2fSf8AZ7bsSHPHhAX6K9xka7eZVcjCQvX1i2Qsg9nuDJdKfjPaGBb8cBfqcSPkj4UZeLCxgCzKEMrwa6AFLUYKbK",
  "key12": "5V7iuQ4EPoo7VWv3oRZrpX2PFNKb55jXqmMSpB5feqU6du2jTZAooNcZRWhuzEd4qDdHehirxkMWC7GP9mBoxXdd",
  "key13": "Vp18Q4eDTAtzTotyn3gmLxukWkRZZLNpBJkFbxgnPntmJpSBLHDjSu4WguP4uEasoggUht3WKgDjfzvHe3M9EB6",
  "key14": "4qkr26ywNFGCcVxiNLvr1wNGjxLn3GvgE6UVL6KP8iSb8zsjYEDSwMA7R8AkVX1MwtTQ6cFx7jaF8bFMovTMWKMb",
  "key15": "3YrifCfEthJC6mVHTYQ4WazkdsiwVpCcn8ZSwo7WTJkNkk4sx7XaibUF83LMdTNi1szm2ZakRFyqtsqo55y9t6tW",
  "key16": "4o8gFx91MEwKAp7iM7aAszsrnidduqNADq1AdwY8SmUSHF3RxDbquqxjJwXopZyefocjvqm489gvGaXF29anwjjp",
  "key17": "g1vjv5P9yJxHKbuwWnzdy2NgTNWoAMCkyVQx3WbZp7SNYENGYsb2ZEcnUzm29vjJUS3vz97XRSC51UgXHBTX98V",
  "key18": "44txcXH5RwPAQiPtvmmy75RBYnyFr1N7BSkgUbhjHMJTiWmkwfuTgEA9VT2GDuHeitK6MufNbWrJYRA7pUZzPhHS",
  "key19": "4UJ1LriPSo9EnyvntJ9BeqGQ4KHdrvXHhYARq8WofZjrgPVyFZWgmW72aAmiygQ3yWvBzzKm7HfMkZ3hwFTWjx6F",
  "key20": "2kdkZV6dcu6Pi99jpEvb942s58jLrXjh7Azx6hGSCfDvM2GQh54EduLup7LzACcWPVzuJtHeeZBxYK96oHapLcg",
  "key21": "57Vog4nK9F4Q29hjTfD2yztorJ7Mdd5bEXUqfLZ8Ujrc9xvAz2zeKPtdy9PXPPaYQrfGpH7Xj4JC3YTbZufRw4vS",
  "key22": "3Noavq53deHmPxxpRUvEp4DBnHvjJozdaFaMCGNz4o6ZEsXXin5xKbJSGuVQVk3ygafkgcJ5FJz8jFxvs7LEwA1B",
  "key23": "Njppg5AZevHoa3kakwgFq7DAVDK6zLQ1drV3XgdCfJbYjA9axgy5ocVZJuyZTo5eviteufBkS6pPkUbt3naQSJA",
  "key24": "569NAJXaShyrNYGTgRm4hdrqyRzrvXXqZJ3RDA4F1WXgRGtpwbreJg2q78F6MszQZW6tVhd5i7v8JfNgqFXHpCFr",
  "key25": "3Cy9pEA1bNN8tyB5RrS8bAFAgNgiE9QdagtaTW3q1QRKsQnuCa1uardJ79ZhL5MFZp6aK9QnB8MaWt6seFfV4pk4",
  "key26": "5F8euyypqwzALQdVUo3pkJuuUwGGTSf8Vzj2GSs17bBVSqG3kcUZUvm49YVeYJmvDtbGo6eCGmyqgDAwrx84G4qn"
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
