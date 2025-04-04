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
    "3sGMLRMRyWDfcCtV5xq9UUngWghRCTtFvZy9Mgcj3PvEjbuZuNjHbH475j63cmxV1uVx7nGCqUd3P7PbgV2LSsr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxpNv5hvmN4Zn6CtewMzJCVHyLi5SLsBy8FyBJHWAVXHUKvQVQZiEoNkr3xzrec3PLev7JD1pCE6pSHqPkZWMga",
  "key1": "4sHWjEvMrWjcT4EjuY3kVr8M8ja929z2q3VjoqdgSPGPrwFgbeAmDKN1EcjTNbSXDWzVRgc3Uq4oXPfsFkigzcTR",
  "key2": "5MumXDDGqCnUE3aYA61K1xiotacU82frFEeqwSb1r2YykBhjrm6xY7CPTpv4MDqh9YdqoUw6kSEdAWERv4SoLp1n",
  "key3": "5vKd3ehdgzAhV22p2W3YbJMDzcBfLZURrayVv3frRdYTkd9ULvJr4hGd6tfLbBQdAcjUrYzwhA9dVr21nL8HNVqb",
  "key4": "3NBSfN3NDp8ifn5P6oxM1bcVm682xUgS4B4t3oAozVwXzKGXRPPh5g8J1x8jTDnHdB2u9Efxcx3Gzago7q9xWD9W",
  "key5": "uzMKE8FhRxmuGdUiYvkKFWZ5L235LeLERuSvXep1ZRbUcKVwcE2VPjKZfDixXY77rUxL2yX8i2LTBNmAjcpDCHm",
  "key6": "NZvJjKVcaPG9kkQgPhpuFu6JpAXNY7rP8E3MVJQTsRfQTiibMLuhWjztz2F39RF54qzNbJtPiQZSQEvyMqzLBty",
  "key7": "5mqJwBPdD3kjhKSrvywgyWs74fJDS99pp4ctU43xqSkHp2LicMZ1k77a8kmKXRgdqLeKXjA7L7gzmz8ACfs8hQax",
  "key8": "vZXZMVPhn7qLxUTAN535zs769sZ8fk1KrJWPPHSiLBnBmPZkvLXhGXDG1cNLudU5mZdcTQWkGaemA1XAWAgcY99",
  "key9": "3LkLXLT68y5hd5Dn1up73RLvVGBtiZG5EVd1WJBGJPt1hzLcyFNHGc2UjkK7TZNrpXv6FWQe8gcs8ViRFVQ3maic",
  "key10": "RpafBhoDuLLjuJdZa7vnjpV1wfjuysT4fAcUgnD5jXoWrs4KRY4ZoxxPtWkfowrDT5b5Gi26HJKnw5T3pzPw1zH",
  "key11": "3DYXSLUmgR1HHLG52UMFdZKRy3dcqNnJPYv1fWskEPqwNYYsooYMamtkdeiLqpeCPpzjwCYTiSmPsUWsUAuEao91",
  "key12": "QKAEVnjH3S1BQNivXQbrbTKUb5EJzJKVuu7CdvPToBwvbMf7H5CNxBjJopLxRjCtJkheuBvvC733e5hCZ1MwhRX",
  "key13": "Mtg7ghLCEXqtv385Z7k3srq8me2qNcy5PkBsjXuoeuEV5gXwJsv6pwzgUkPFfb9Gb2JxuTHwFDAYjtjhNGLymn1",
  "key14": "RgpHLzDRqMNKXmgkqSnCyPFCxyZsng6i4enNUTEZtYYjsFmEsNDBHShKRTmr9FneUrx8dZvoygpLm4TMKNCT6X8",
  "key15": "2f7iTJK7wqybF75dY4HQ8ADj9smakDpZ5H7PucnEY2ZJ9hiW2Mz3RWap7vuwL5aUTVhvniZXFJWpb1Rvy1LYk7qe",
  "key16": "5LCpdVAZ52b2k6c1JJpyEM7J1rBt34Czs3rdkJmAuG2aGduyDfPZjaL2dAwfsZHEQn3vt1CjK264AWkbhwdAmGi",
  "key17": "3wzNo795DYGcAA4vHUaxKenCvBzNkJ4gxKhp4QNBAdrbYe1qaBvYyhdyjPcZrFFTYGH2UxKANxKDcyB2BPn4VEbj",
  "key18": "4xHz1e2nyi2dHoChM3P32pGYmYmGhcMXyW71gSWhN4X7ZSSJJtaSdJdXDrGny6pz9gs28jqoxLxYksgkbLiKAwwx",
  "key19": "tGSttkqT6FqhvFbCxzZ9LZzjJNHp2WLaHzMpwwATXFbRcieW54dcnRzbgLGjGUUUC3XWof4H45mibG2ZuvGgsNn",
  "key20": "3CV4Q4oFRkPWrjKkqmQkH9uHteczdqDXYuBpkXp3264DSpTkPQUU9faBAR8tThzKrjJBWFWGE6UHQRybRnzJkwhn",
  "key21": "E7x6tvfxiHBtTVbjgadNsNr9kCixVzDkEWqE1pRY6Fdu3QyuNpovcRoYYBTcceij5pUudVuznzcbYoNCU7uKnke",
  "key22": "JGatXdes5EWgbdvsRFuEFUhwMH7eGn9qRxNbC8jSYSybAHYSd7NweYfKrNyqEtFhSVEtXr69NLVcTwSLNAzULgk",
  "key23": "42Hrqo26ssjcLfyNxL6UJ4VVYWkL19dEE5zi83j4UP4T3ZdQbJCMpwTzMKPnAwjz4YnffMVDfBcTWRrEVFHvY9aj",
  "key24": "etXeh5kPKHdsrgPf5iaLowKKFW6SfD3udcUcHCuMfE39ktJ4NdAc5GJMBFGJKLtQNrCTH6Mbup8eabaua9R45bL",
  "key25": "5fS4B5qiqdrWuD6rVvrRmcn36yZAR72GP4x7thFtvrd5CSTA8AeXK4tSniHsz7mP3DrJjUW3uivrazEHKcWBtAky",
  "key26": "a2ZSbrYgxR3v75fsKhXJrV8ybedwmv2jdoDX77huHnciHbqt6ypU6rvQkhi6zKwgsDFYF6qhFiPRs4MzNKpxZQk",
  "key27": "39G4EHJy5gwVgUzD5mgjgD4G53iue7o21DVuwc39ARNDwmbVfhi6VtKqhjp61TYm7ZweLT136JRkAq9Lt1hgshZu",
  "key28": "2RvmWnJggw8ZbCVcykfCJsbe1UWgjzybApXffzVvLbspBAxnpRPJMsAKyedP7jWuDGfuS1XxWXVDvxfzHDbWvBqj",
  "key29": "CxBFeUT3d6KStMHDRbzT91oei79TtANR3nyresxqCzrnDgjaipzerf5TpTwz3LR63etRhkVKS2ZXgwXjJTrSSHz",
  "key30": "212dBsabpys8rtaVvYYyWZY3xUmaJMGAe41pfDQEJNFvUFstutYewWVcuaxHoLxKrZWpgT49re7BXc9EhcX4UYtD",
  "key31": "pBvGcXhcfumKjL2wzZZ2uSTrDjLyfRFCnyqg792KTTfvLZxy6XVCAMp8S6vURSevYEyQCnTtXHzQJaACjKyzWy8",
  "key32": "5iXZeP8iE8CFeSV2VtDwDb3zFegRUJ1o2otHycqmJXNjz27oCyeetMKQZhvZFX2r2NERSSAsnSkBNDXDsZoRC5Cw",
  "key33": "2p4b9Fj33FKNct4T4FH4iWtEmDqEThBF3otVwxLrizLRFtp8Qoca7t5gG2LXwCCJqHUGQ9dbH3Fdfuqzb7b4Se5C",
  "key34": "5BL9siwpvQB2T1Dc2N5atrRbVSfLxHXymG6ypdrhjUUmpdHyCcbei8hJsyxXGZrTuMY6qFjB6TiVFa2tN1UtUhBb",
  "key35": "4xzYQDAeQ3TzRAM4hdjM5Dn2STge4f3yJreHqF15FEnB2Mo3L9da31wcvGCgG6B8RmCpuvmtdYtBJZPQ96tCxvYt",
  "key36": "5uyKjLTe7DrVv4jRkBGTp1w8LZGD2xoBaczq8PcpmgixeyEjjWcZNvpjHdatt5QV4LxTaoCfp5Tg159FbuubMVas",
  "key37": "5aNNUfbyf13AVqHLKecoDCwPEEtXmSqpTvPAbxPUSxdAN5ydEjGTV8LH9TPi4t3UWkXddGxWMyyYP4RBUoFtkV9x",
  "key38": "43BeNUPffmHHUrzxM1GP2VF7XXyUkgtz27kjofWfSDxyURFBwmZrLRax7CGKLKRZG35BQ1Th7CAds68Pvz4aEBoG"
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
