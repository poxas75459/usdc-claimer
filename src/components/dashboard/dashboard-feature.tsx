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
    "e3FZB6y7kb9uTxpLioQbY5PEQrjkJKGprmjCABdT7wi8VP4ouUqSd5B8d1TP8mMpSAJQMs61kjXmBQC6rRqVSmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wS6hVrd3YMZRwwGbAEKUm8T6ujesivYXRCZxwocwh96i19qQ954BkmAeJcRdHM8KbozZqpKb4M3UqguUsk7Ba2j",
  "key1": "3ZYfbFaFq9U9ugU3xGZNXtPg2qKQQKBH4UYt76CjK93bRK5QhJkWi8dgtCaizfP3Kt1cRqFCasSpovF8JqCqUtaH",
  "key2": "3rav48jLpQFonqj7LsTEMD2n4NMLCfmdUeHbFAgKzwbgqSatcZHXg8LNBqwsTeffQBZdBYuMZ35oZ21677Y1wqg8",
  "key3": "3iYCeyziAgFS7f82tnqMAGYGLX8xYd7qbWaWTAtbHdfPJC1ta8Cp6B7cJxP4XB5d48FjURKYZEJhNFi65UsSn8rk",
  "key4": "5qRTTkMPzcMFjfqSqHDi61s9BaKyE6Uan6xAGqkiHLdkDRE6M2wgmEHtTys4ZcU15pdVNbLri8MdtZCzoEyzPyV1",
  "key5": "4YhpFERMjjFKRBVGpKAkSYsyZ7Yg18qN7LMjtjcPKPCGmVysQgU44rceA6zvEiEECz52SjtZpoYQyr5b2DUrh8Kb",
  "key6": "tnypr7KDgyvDrAj4G55DXW8R3snb3ych2z4ZRjXn4edWfHxPxF3psHUqdW5W9tsuaZovAbxsGv7aHd5ntPcN11G",
  "key7": "fy1uMZwJte1itb8fzGZ5KqgQ17fxADKo1s4HR2Fpd6qdSB7WQny6Gj6pKckqMoTdzS81jSksE89EioEFJ8WDfGu",
  "key8": "42w8M2XcHV91qUkGNpMQzMnge9fAhUAn5PbrK4ZLukjUFTmXkTvxrfkbJPWrFRD4JUXM3tcWFfZkHfrp4Hp5Zwnc",
  "key9": "4QUwWoQh9qgDzZgBPLrTZAhqK9S5cHtveayiQpTC217heoDk3EQkbQfeWdrrm5JzUSNMTGBRhZRUBszE52Z61dFG",
  "key10": "2PCRCsiCMkQN6orznXENXpQbSWrsSwb2bZ6XQoijMXZ5nEYCzBEL4KVh1RgQYu7eaZFvZrQySBKXrzQ4zcyx4xmQ",
  "key11": "5Hn1eZ9bDvLk3tkfiZAUKyQiQX4rLeeZERg3WTbJZRWhHHMd23wepaKFaHtMeeLRctq1VsAVdv33nQERVQUiobQt",
  "key12": "24YXkGdxdCZegeByphr9KjuWQitRNd6uvxEYko7KAAbu9WtWSRBefWLrfER1c5MbSvU1jutDpx6ZHg14uAdgnzm7",
  "key13": "5FUVGudEVWzfQw7VvGnjZW3688finKU4QKEmJKdpbRAoPTSymGqRJaKW93TxCEM9fV8dUkpWi8pXd9PSBgJSSgZ8",
  "key14": "2LNRbTXJXcCih6hsp7SCkPkVryB739VYifRtDF65GfzwQSEKUThQXZVqNTzHNAsBEQYwrH7BKh39yzQvHTqvoPL4",
  "key15": "5T92VVf3mes56H3wzCpN7WtkLpxwdtcdLhkCSSoHegDXoeRGMpWJbZ72eHF7UGMv56VygdswXSefZm6cq2ZQspnz",
  "key16": "2RyrUJ7kS1QWxUuWfjZgiEFagjKjFjCYACnRbP2VbYyUFEqXbiWFqLftS77mWacUpskbRjSLHd9BUVpyQG1yB8yB",
  "key17": "cGJUqxDrP3hYpj1KJ8ER34C3RAbXC3fKGgbAEZL85Ns5fgEPCB5dSup9ZG87GL3UzEjMQWA6xJhtNGfj8mfdCw8",
  "key18": "3RCGJd5PVAKLkFM1uuVBT4yALed9bd7Uu7TLD3GWgCvw9xBjF5iCmQwuk2rv1Gj1B7sWWFp5Mh8Wjwe4kbUStSUA",
  "key19": "5meXuJi2WGWckP2rA89zSt3tpA85uDDRZuCkm6kAuJ4bUh7vhSAvjPkGvjAUMJsE5Kr3dUvGghVhHy3ZZwXpYRLp",
  "key20": "5gbyYTi8K2T5qDaukENgNkyPGiDAXDXRW9AG9BaFhqS4sK5rmGRRgV6b8uWzVPHPKfvEezsfY1gyBP55ZzmFxRv",
  "key21": "sqWgN3NhRpDrCUbAAUTw2bH3coANL5N8JFusjqiGitDfJYM2HR9zScqAKw72YcDdz1B5i9PETNYrCLvkt5skDDc",
  "key22": "3VZc9KaGBfkkxA8sXvnqnbk2sKfCPgGzmLBG1TJbbWiuTKCn9e2Wh459eDmRA677TdbjVo6kd9P4ut9A7pwoEFRP",
  "key23": "3xgdyvymY4toXDkAb5rgtYmZewKJ419w8R4m2t85BqDCNLmQT9pGPdSqikm5sxBmVDBbmnx3FTqBLcTGytMe7xvG",
  "key24": "4ME9KksqukuDNvn5sQQGRffw3MaD6CdNC7ERahwbGv39AhEsmdPFw2KLhfXKK3AtDC9XanNQZ1e1wFqnnzLHR8xm",
  "key25": "d6ro5R5UVTdNtUK13qRpqZMcf49VTGEEzDi4WSVNPqqcTwdyc4CPZqdZnqJChXzrjyCqqmMjCCW2yJMwHUhe35o",
  "key26": "3M16eu4bPqkFvyjSTgsV89cVMKdfpKzoV5WZhd33fJUWAc15EywHKmkpWMmHfBa7bv4ZUMLgskk76xdMp8f1sbss",
  "key27": "62PJZK8uoBUFvnSaa9XKvjc29UjovHbtbpHich9EnsbYmiWYAjmBVFxFL6buz1mUnv7Z96WpYAY5oGTNyPAKidfn",
  "key28": "DEk4LL7njPLEFANfkrDHFnNTtZ4uALy6p3bN4266hwoMhmCKJx2559VxNAD1AL6jhe4SLTahDzNM6hHkTTbpeRn",
  "key29": "62PhfjupGVPDFQvqpq7RGvyT9YGt1CqodUxkReaADJwvEkCLLRUJHG69jBXPubMHLr5a43u3i1hxbxW6KR8iNCB8",
  "key30": "Mmbtt4ootZkCuS1b6uyaKyapJc5Uq6eAgG4s4fCNj83iSF7YNFJPn4KGBJkJ7NLqRLirKiX8qNDH9UR9nRLrcAS",
  "key31": "5R4wn5c3PLFUsCGbpiziJTLZgUyLsPTDgjMZy9ub3mfN1hBrmzBTe3FEVVFwTxQni9mj5TJgLe3mAqSJzX3NcfhL",
  "key32": "5YckPvfQAhM4fRq67khLKUouqZon8cs6VikDWY4E3EA9eXg2Wck4HE75bM4ft8JhVuNLkWHvHQqd1uxVk8ZoR7Vv"
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
