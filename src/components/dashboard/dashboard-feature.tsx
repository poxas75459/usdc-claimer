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
    "2XgBRhv1Uzw121ZQhXSeUX3vooUZi2Eg1bvtyqekh1aq4yvg2eV5vjNRHgr2ucB13C3Fzx7PbBdQGMmn9iq19hHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K7hVZiCWhVhSSWtYhdKFtp5Nprd3DAWiDN2yVYVuZhAfXFT4jAMZnqbenj21pUNCwpaoHKJXJ8WBocNEgyYBEm3",
  "key1": "GDn6a5P2pAgwyRKB6HUqhGJRgoEdXigrGs2USuNZVnUm5v4wZ74mFSijZ5LyWsyyHUVqESPMcnxuA1YurmnpyEZ",
  "key2": "2F8KkGXWhoUxBd6UDuSrrTX4AzdsCSEm2f8MnXVKHrkPm2kyVVdnSYsmmovewvA55acDLQG9frAMDT3A96XKBaKq",
  "key3": "4i2JNsZbzmeKg9W5xaQvPeAkp6nu6QjpSTT1Qvane2xMR59GvGTs19vUbVpHptWDkYN2pesTr3c1Fgnpw9RrLsy6",
  "key4": "JsbQm9mMvecZtrASXWWXucu4rj7mX8yoq7EpJqJ3JpANZfM3bL2D4vpwiBgJ6KQ1UVhSgw3qfx1gamGNS5j3qAt",
  "key5": "3aHALfD61jE5WqmJUv1qoYxzhKdsgykV4SPqmMnjZ4qH7nsn7JjQNuAZ8jzPGjoy2Pew15Uhf9PJDzk8U1LQxq3E",
  "key6": "RRrK8PBUWAJ9XEZwHDtwftWLTa1Tkx78K3mxWp7ioUdQuFUjbn1kyywcwctU8EDJtvzSZM5G9JY66uz26PVcAxb",
  "key7": "65VrRhKVqjbhSWL7UknXtr3cTG3NrkuGpqxjmhwULzh3FxTi6r8HxkK7ZnQZHA8ottPEkdNNtdTdtHasYU8FEAPh",
  "key8": "3McgNJftLs2YwSHjHfcbuhwJQYNHodVLscRn657rFS4BAdjK3qasGssBkopSx5g7ybT9dxP8XY82bevEUnDFTvef",
  "key9": "4QUvMcMrWmA1QZQjwim4oTJFT3nTedsuGJePKRrv3tWgAtVjZcWsL8zybJqACND3hhfJKp2srxAvrXH48jaTMxze",
  "key10": "5XWr743WwpZRenhJZVKNs67Tm6tM5LUQ15Wadzyh5gZm7e6DqUS4cPnyt6ekrAqqW7p2RRtJjAVyvKBrmhPoLzLf",
  "key11": "4XkJJEphyUBdWVrEkc7snPYBG6BPkFJzwLkmUnKGqDV9hhyLwP3Za8gArqbd1u1av8nYuxEr4aCJbNs5QmjbwZFG",
  "key12": "5GSSNNdYHpzSk7y5tjsCh24sq9wGjCJBt6nTVboFSbawuTHmPdScBYWMYXfjat4zJbQKyHNcaT5nqegGCmsxzxJm",
  "key13": "3SSjfnjUxdFXaQzZFJLCjXQSixY2Zs6ZXnfc24PauCNwZaMGknPsxX7YLogAdaseKUk7F1Vjc2aCLouLUT1Xe58U",
  "key14": "4BD9vjajnDLcSYksL6ukWpZYeSrWGFbFf6ZuBH4a7faGiVYVRsHyf3M8Uf7mVB1CZvH4DirjDoV4rHwjq9GiqA3A",
  "key15": "eJtpCnq6pkpDUNnidXiP3uJ4xTRdUvoTo5x4upvwBwhVedQipDGus2MgBHrpFVXTJjb4rfQ66iPjDPKCFoZRDTc",
  "key16": "2DzkoJFXZYA9vHDLf9mJ6aMGRjsTEAndGvmBVgYEMFeQM3DANT5ignsAoygM67v2k8JwzwyBg8J5wTQseRg7YCgr",
  "key17": "39EWSCTJxQH7DBVudpknSQnTN3Cr5VTAPnrFaspzgVbELgxTnFZdTf6JNQ2tDc2Ddd9E8mnqpF5BtDfTKB35v1xL",
  "key18": "3ceaSpkQ3n37umL77mAb5F3boWXnyMVfPPHMUtiT8ac7ozSGupPZs7h4WY7FqkWuav2BgWhpcD8vXdBTRFFZ4ZFj",
  "key19": "5a4zk9Mxbb6cgJuLgQBHEoctyC7TndyYHSeZRqrXrogLrUt7QcaCm7KGiqdRPLPK9xbCbN4Q1EjtUEisMtpwc9oU",
  "key20": "4ARwSrb4Xs137mcZ7314B4hA1Ro23xx9VKLjYaQ6GeedpR3g4XibcHtugrv59Npk1y9NrBzFkFZPW1giyiBCeEsT",
  "key21": "3EL41hUBm3256MZPjDaYbwzjUaWFJ79i8zgwrceNbxr15BU5YUV6E4h4aTeuf3cEF3LBdHdcqrFsKX4Hfr4qgXWK",
  "key22": "4ECimEAcoohAGk9ANQX78ojsvatS8oPHtdxHnVL4nwEn3ggwHyB6dTxvpNaLMs31sKzp3eKetJPh68brnX3LNK3t",
  "key23": "3XUDS9PWZWqFS747VabirwN6hn1xG3tkch8KWRtBG5FLJuLcUVSa4RWCq5YwNVrpy5ef8hzq64pJVBWDDQbzQUNG",
  "key24": "5L1d7XAGpEkxD7zsPM8NMKhcZpv4FmKj6jqu5TR2FJEpPtF2CxchewHk4d9szZt6FeuUbK8RiSsxuhtqKYKjV6eY",
  "key25": "3URz2aQsrQ8HHaLjKt2q6MDnvsGV4kRpqHsNFCt3wFP8pwiEB1Bb3T1KjdPcLfrN4GepNnKrLzPJ6knYBqKJf1Ji",
  "key26": "4kfpJbjngJ5ubP7WmDndmYg3CQbACM2DqvARuMUsuGYK9vibpsmYUxSgpSFnM9SuHSt8KYJzrFL8iLg5s7PdpF3f",
  "key27": "4dzLF8bBgzsvq9ZrzZJWjwvvySYoGXtCbiEiTimMeuHMyVMmuK3NXXQ1R95WXVpdXv5FDxQBjL9XREqHaxN6kEX2",
  "key28": "2kRMtWfF7vUSysNHc76ie6HSZKVMJrDq6VvLQXdPdTZfAQ5b7SpVp2sYXQLEqQh3LroeA2CKL75DyAS18pyCqLnr",
  "key29": "5or3ERdrMCCcFJvxhntf3ZQwU73byzvXHkznEfYoE438dwJLDLTN1jRNYvBsKXrHymuX24ksRt2pQahr8ZoJ5A2H",
  "key30": "snqQPFWH146wP8QkV7u5Fo2B1AA1pQn8APGenA2sZxErVYnfsTYndcKBoGVK7LGsyD7kzrqLu1TQUvbgwxePA1e",
  "key31": "3ecKwAg1v6DeombV7WWHHaYYQSCSivHhHz57HEoor9xUCscZBSHG6FLtMNWGPbrn7SJDuJGWPNYa9nzYWBuqwRAk",
  "key32": "3u4vcBvSrNevShqE97kFq45JMRtLoPiYe8EKiGVjbCpLxaYmSJAhh47X68rX5kZZjb7cVkCUqL1PzVW4diV13rMn",
  "key33": "2aPbvGEBqs1L95EUtPJpYTzw2bhuPtwGy4V1CWPvHan8HxhaV8UgsFfp3QfKWTBhgpGX7YLdxYEuEuTDmEQvjGQE",
  "key34": "4Z2GsXV98ysubJAeFCDPcydjMnNza6mM5T8Tt7fsNFGbv9R4aqbxTpoz4xiasvGjVytrHqGJmAqtw1wXmBFfSr5E",
  "key35": "5rSYqLu5BsFpmpi4dCRDpLV66zyfoYM5BkUK1Get66nkirvdBE19GuUgz25a9kn1GgXC7LHAVpd4AVZr7W8QbyML",
  "key36": "nUREnnAyw3LD8x5qHBwCoojg7CEraYUfryf7LY3KEkMA4ztuDmWh6AsgrCcFXmtLNtPP7kqfhSThMmdnadouD4L",
  "key37": "3SjdrVKJrYCPbg1gGoGY7BjFj9xfAH13ZeywJkmtxXevaDs4mjic6goEwE2GuRRrMnfdrzqjZJuKsunWthZqX7si",
  "key38": "2Na52XNPkhTZ78DVqUAirMQcN2BTHUkn9q4aAqGAs8Qepam6tFhAZEuu1pqoD37ohrHZqFspqPtPY6FNS29v2Lps",
  "key39": "3VeKoJhaj99QuegtGMWpw9tpoN9Rfh9fnCXnRJ92QYAfPxxHYr3Pz2eTuhHiEdqq8jXQS9mxGPSezq43PrhJGERa",
  "key40": "5cbf1SqKUEP8gUzoT6Nke3YnccgvLiikAEUXCp5KWQaHZSJvYAfq25pn6Y2WCY84MCnt7sSRtZR31YhP1g452fhy",
  "key41": "2oSvxkmvzkYzg2xbUQooUByYNJCPw9uuC9YksHMGDkT94XG8TR1B7M2wGXX5UBcE1F1MCiaMyauc5vNX4egCWFpG",
  "key42": "67SGZ53nhEvxR6qBktZyBzEQVECNtuumNLZjt6aNS6a1sUpGBPSccWMqfZRh6gLeWoMeGhey6VJ1F1NngraN2WEg",
  "key43": "3zy9B4czhCkAPgwUDhFaewCDKLeKhhEq2yww8v7Cwa6egSbjxALoKBV8Lj7JpNonY3Ge7PBVmFF5Fx6aG8fzGpPp",
  "key44": "49Xduk2EmxD3cbqaFwGTzZynE6ibjMFd9JH47CiLAetUycjPDbgEWejW3uZ2wFJGnfegHDwDr6tw4MoBKTH5U4uZ",
  "key45": "2oLijTBMaCAbPfMr5QumWjbsRLovQVmTRpZYgNfm79VZgvJvZuC6HMawPJZirYp7MCL3SbuD4BcNKviJkQYQBXME"
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
