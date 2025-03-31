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
    "2zNMxwtSYtyesyBPwoMx5ohabdoMn5maKzfvkgwi8x2hG6wXB8zpN8y8rcYXN6y7nTjSpmFawrnoSqvy2oUHdyM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dPPTVBUHxajueCDcopZzeZG1dhWY9TgC81Mx4wjtijfNQhcuNKYktz4AsD6VikhSdr6RNn4VgHbxgxeNVFb1974",
  "key1": "5iRELm2YaSyUAo4A4dKirccUpEUTFcoFDF5amAuJAk4y6PN2R9tpR4QkV3oKAiNvepG2sStnraYSenDivcywgzUx",
  "key2": "67LgXcuMbMcw3XsYswtz3dcFKuouARC8XaAGQMzFxYYyd45PrsrcFfoEnJ3eSXKSyGWaneFdc6dzoorT7aMjYEaU",
  "key3": "GWDEPKTnmtedRydEWk4ZoZotNcfkSGSmbXqCyMZzsK679RZtqNWTTSbv4Ldd5vPzKvUKVDRR2ruiP7abruBvWY6",
  "key4": "5Q1XUzaKzuSHdDm142M2NYwEeJ7arrjGBjeYhFWBkT3sjWgGJCscffyjHnaofZW38fEegwwRU5eGbmSYu39gZJGw",
  "key5": "4w3qELZQH49H8ZFDwUeGkR42ua2ng285ZTpyZeX1DJKuZittqHxQAbih22PkswoUh9cRQN1geWVxTBpUsgTFY71k",
  "key6": "3YJ1FpSyWjS5y9v2wupTiHeAqX1V95Mims47tgpJPMEgD53ZtH3Tbz54b3uER6Bc2xSYaJSKEdoAmb7VLYe4BR3F",
  "key7": "4Y7yHbGykWUMhU2TpwxytwJgjD6qKo5qa44ECNMkFgR3wmdoPJgB7B1oTtQNYC7W29vNHn3NDiMamvjFPaT8tS5Z",
  "key8": "5t6iuQBith2vPfSSdtURq146abnufy9nUxkeHH1d9y7kDuWkevcwbXogvhoM8KiJxnf1pEUCnfcLxfiZaDnhFbok",
  "key9": "xBagyPB5mc3tfe9TeJBJ5qySdkcYBnF48mBzZ4rLaDhW3p6npyhytsDnzpbm4JJx1xyyy3kxS5kBTygpYmdTHnB",
  "key10": "2v29kUgxNg6oGm8kW4TcFMGH2qUQ6aJgWYvZiSwSTZggnmv3Xczsk723iwGqriSjGEzc3JRoruD2WXbrrupzZLRi",
  "key11": "3rFsVtjzYw3vJHdYTvKcEBapLnfH2U1RPgqqAxH14iVueEyxWoixqRAQz2F6XVfmgDkEESKmwxfZD6RLeQz1Upue",
  "key12": "4DH3n17bePAUGV1LUptaMupkWSD2zeYvPTDaajihuzwbBTm4ApK5DZfqGbXLAiVMDWoEmRxQmVEJ9kxY36T1eDB4",
  "key13": "4QfQUvrJyYKyNmD4U2Rw2wDxxAJ6pug9FV7NvaK7VNKkhEwWnXyJDVGayVoStkRtwVwN5f1NAQrw9cnM1MJFZoEh",
  "key14": "LKf9SQ1fn8HSdz4tnJkpqKwP15CmkArSGssLA9qmYann3jVeVCmGiZCkTWJQL18w9bWWPn1BZkyWgJQ4KU4RYzP",
  "key15": "5eoiGVWjMutmf55ogG1V36RTomuY72PEEEMrdTnFafkhVdHN7585BJ84qwv1QxjsEmpXaW1yshbuLrWtP7kjmZgs",
  "key16": "3oXcvtXYE1Yxt4bb6Vm4VNsf2S3MiHPtLTpEvBBs3trmsP99QhzD25CkPdjXoFfgXa37We9b2MfB4c5Hx82gdiMh",
  "key17": "2Gvub8D6Y52EfkLPEqTZwTFDFpy57k2r2RkovYWeEiYWkb6TEhKGEVY7MwibEacVmgYmLNv49KfAj41VmMdaxLHe",
  "key18": "4HjKJUk18SC5TP71yGT1G4e4NmTk3aCom2VafdMNwXK6xqg8B3HP1nddAfF7Frd5nRaPKvZBXmuLjK3thfUWwyPq",
  "key19": "2StRPFXoAykeu7gqyDt5aEFWfC8uhZMsCX9UXrhAiBa8VExZSwePtVan64zfm68QV6mi7VVhAukGgnxZ9V91xDZE",
  "key20": "5nJTL223xtxKk8RembGi6g8oXDvh7c6pJ31EZWidYeqd5GnxDXUoMBdsxjsv961sfdya7uHummxRee3GZ8m5LSRg",
  "key21": "4nukcEWaQNVQop1bA7jorhRnaL9ads525zSLX1QdipXysHXtCKHdywb3e3vGhCZ9qUFptctSQ7SaH76g6tuGLgok",
  "key22": "5a9YBVkmWtuCKvPNA3LLnD1XmiecFWb6MovmbYo2C4JdoPkre5iXvDJBHoix8EVUcrMw7jTvEfUev9jMaB7XwJi3",
  "key23": "4UJSr1h2ntC7grWB9cfuvXUa8wTXKj9RKYDLYHNuMwApMxV549WuAvVcCP53F1uhTUownByfUiVrTX4oVyoEora9",
  "key24": "5A4Qi5re356FRqeaK7DoGQLieU8B9UyZzGuVtg42rDc1SELk4xZ9xiud7cRPXJzXAuRyDYgfuUcogRxAfnS9Cgko",
  "key25": "2yE7Gd7e5FfkPFkGbL8Q65qNpeA9Dc4yA92c72JNB51QuLGewDN5fqovjrZV9HZz1atBgtLxsVzrB8oC9YNTJAKi",
  "key26": "2mjp6gp7Ef21pZZeghhA8HnoWK9SHvUd6gxGtnmW975yVGKhBHYAwfmk3xs3Bd99KPu8UZ9H1Fzd9YQv3NjFGvgK",
  "key27": "5Ky1DDsgcvyb22GWs8vHzdSwNtXuMmyW6rkzpsXv3a199MaG3E66KNMEHWyBt9SsSop7SM1qjVzZHDnGrjLsfkqF",
  "key28": "6B3vCbtfaTg8UGdXx8EPvLRHUgi1v52Bbrb2po9StVysRDTRG42r5sGwpv4sa7v6Ni47TVLxhHkVYPRTMfanzPW",
  "key29": "5Zd6GK4AL3VE8p2RX6Mmy46QbV9uWds7mbFt5CDjpHUoHNMwKRh7SHAJMNwV4hCj5dnspWkNNZLL2cYDmbYbr1jm",
  "key30": "3Vx2PZkzzBbajmFXKeePKryEKTxTRcDfR1VubDVeMWU5awdYhfqMVhoZWhNwU6ePsCReRCevRSZREEVbVm6GnWAX",
  "key31": "3BxHoxdJuYmVpDT39SYQZ42McgNKkHNWYakTrhyNyhqwye6sB9LdNKmx4zg14EN9nY9jMi9k9Bwgpj13JywfCtJL",
  "key32": "3aPuUVApoms618DW9B7H6WvGQMtUqbdNAPMFA5Lrz1ZN58uZut6n63h8Xwt9HGQCrWbQhSHWDKQ3Bghsnozkt22D"
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
