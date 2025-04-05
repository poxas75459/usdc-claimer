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
    "2MDT7NWuxjZqV3bZxoT5s2rTUREM9L7afeBPVEzTr4Wx48KwWpvyKfRqaTHpAvdFEp6pw4cxNmMcGF2SrC4D2ZkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YcTYWsTcZQRSev1RdxuENavsaB6kg4HrdntB825wzY59Yqk7iEPe1MP3WbMXfdNGBbsQXsv4QPdanZGTgVzcnan",
  "key1": "5SF3HacaEBv5xA5BaeHfrhbWxtSupH1353Mbi3qmN1EmvAn71RzvwycTaAFBiDqWv7snDYCUGBp5nL71kTSu4LPe",
  "key2": "4uWwEd1h6WD1ToKFfYx2whhzyXt7CuSozmrXFPJiQB5BerfcE5QxjJC1UBbggSBxakNoaM53Za6Y4hJXxbn9ywYA",
  "key3": "FTquXPdZdkX8GAmsFjEEm8nLvCWiKZB1VhUv2cKQAjru4VsAxkMJDGsFG8BkAhHMf6f66fzR4eDtmWbJJ17FjL2",
  "key4": "3fuvy7YG1KNaVdcM8eK8KqgjkgC4dGw2Yq8JQ6ZckF6obbYJ6rd3TxLFBwZNj8PS8HPa2fLiRn1q5aPdgKLAWm6t",
  "key5": "5He33qQhRuAEz3YTKgsUMmG9Xkvyqx6LgULWG49urVP3pAugUvUfoyWbTZDNDwvNXQEhULPAFATQ4aCfXig2Jent",
  "key6": "4Jx8DaGKgrY2YzTW5B455RVvH8CH12hZSJhVKVSVEEYmRKJw3FGfccpq9P5stvZ3AZ4rujkoFLv8RXquySjLN5Wp",
  "key7": "3zg4nYSAUQsLZC57hJTSyWfVqG6aB6wfws4J1oHfuXi3eerJj5VdSdnQAEoE8dSEeEoLHtMPpqRNDjdZd1EyDro1",
  "key8": "SQCDZA8kgYWuUnqWSQvAeppiRo8coGG6kmqSuUy1cTseQRbpSVeQZ1ELJA1JTM3UQymESKWC7bNtwKwgF2ppAkV",
  "key9": "4Sfq5e6qkQ5fxrSA9LccbMC41LauRKEZjDgnd9F7WpChheXxkGyVT83ctxdXPqv3rZEonxCfKzct9jFfoWPTMUmk",
  "key10": "44didHd4KFkr3FBAz6R44N6v6hDebK4eQm928zusBekZf8hythyqDmT7dDaHaDrqxUy6GvKuPcYWa5bx45MV5mmM",
  "key11": "xRQ3eFAKNEaMNHKsM6fA879dctKBd8ctLkZX36PSLb19yMderKaW2PX5kxV6StCswj7hqNrzVeeseTTCGhjm3xF",
  "key12": "2vM1nSfDg9vRoim4EECYvkEo68wQiaXi5hSeMPceg1c7hMKWVAU8dTUmgy8GoeYMpniN64a1yjHkSuvepwQxcQk5",
  "key13": "xSUtd99JsYaFTmNRzpMnCfZtFwQzdwxVgPbuEKpsEHRagFK12fzER6t73UyateNLnYAimHfUvuyPENEgiXgXtAn",
  "key14": "4hPVD5ey5rfaMn2NvJf7Lq5XcqAzkb5ibapCR7HpjnQNzhdjN51Bw2wUaqh3B6yuJXustc3XaXeedi51qwSmsvFN",
  "key15": "64K3FALM9K8Gzr44wJEDTYMHpujX4Tfz3Hny68keJomarSurmFEh2rpRSB4MzpYsixeDon3RbHUwYzxkS18GDnHt",
  "key16": "5TMWKpaSusp4uvzKJpCiT8HuszCVAgNQedv7xdsvqwxKPTNUVqDXREbdhuUok74FbvVwvURXVVK9uhT6bcx94XCH",
  "key17": "5reBieCu154uQkzkTUp7b7svXPcCxzfeyhYrz6qJdQizahaMrZWckp4QvDQj8H8bPhDexCn5iX3yttmsPecLQF5c",
  "key18": "5qVDz3dwRXNTFKoiGRjAg6EKkA8EnZU3iQoiH6fm2FkJCs6y9xBxqxuPRHe8UVAYtCZRb5UV2ZwpRsdBABTReweT",
  "key19": "3rEH6W5PCNejTysqKX7wxe46bGGE1wS4jt8eaVou7yJMkkuVhv27khvrQKSe666eJjxQX7qJhssfNDLLJgVhG8dr",
  "key20": "2mM1a2BC8QvLyALCubz7XJ5sxqqmNPNthiA5EtWxtFdjRLJG7DgnWTjRN2sG7HnUWFuWBQDxQZ5wpDbKSzbvzmYP",
  "key21": "2NzALdD7pdWYH2ZFFCujebTUfivgCocYEb2zJPSyciCvkN2AFnqGqwS25ijNugspP7z8MQDceEHQ4gLdyWsjt958",
  "key22": "5EH9ETb1kEHfCpKB86dEENUKvsG17Pu1bwhpsdQsCjGLNkDY3QDPevjLLQJPoNXtxJXn7Jejk5vEZC3Kdkh2MdVP",
  "key23": "51oR13waobKnVGmd5czj64KkmTuHhNCnzZJm3E6oAb8k4vCkhwJgSrrpNiuzdhsfwaise4XXmAncHfaMqjVnMhJ1",
  "key24": "4WDL4wBa6tAsfa4WSyghsR8wjuy4REydfmnokBc7ZqUUzab9byfe7y5FMdGU5FV9sKBSRBbSQ37nuKisNUYNCvWq",
  "key25": "5LinKM3KqCufJedG2xCjRU7saKPSxgCb1Zz8MzeL9W45sYiCr8xe3dxHLqWXkfu3F176LF5x8VRsjbrB7poE5kCA",
  "key26": "2mtXkSkzjnNCyX2MN3h8MAn5wiGK8RtZWQukGHpoZCVp5Q6XvCWidubqUQQyz7qTsrxjriNKmoPepaJJDHZvyFEP",
  "key27": "2te244TwZEqtZgLb3QJ6ShDpVZYjKHrHuYhkUnrHUDH1zz3AaG7hxiEKZ9G8AwBqtXUt5JrtMbtXQr6TFSfPdCV7",
  "key28": "KGbVNww6iHrqUMwEG3whkhcNhKqF7qb5Wb8zoZqCM5TnQdCY2H6bxiHtNJ2isKBMFdRhmBHBnwtwFuHyzJCFQq3",
  "key29": "5oxaurLHbHhCzUeVUzggse4m3vJXjdzHVjniWkaWTn44znmK13zCUuUpRvAc3huWCo28aRgsT9vVVTC2Hyr5AtHq",
  "key30": "2SBXWmjTzzCk6vXvS8W93Wy6W1xgP851933ydNtDSFyGmk1JHTo3HTFYbQtjNKKdBW9Nk3Xe9xuJN6Nw1WXg22VN",
  "key31": "2ohsjFEwkmPaUQP2FuS33GDrGBnqBaKmSQRKgswQE3MdW1YWnDcBWRN4hVf9g3YrqdGuPVvW3ATncMegigqzxP3G"
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
