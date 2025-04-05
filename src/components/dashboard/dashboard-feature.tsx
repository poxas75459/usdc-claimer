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
    "XE36W6V7PjkGzTVKSXcJAxw5PQ6C1H7tmshesGDzGJqhktZZ8g48p7ZuBoNUvZgdGk8x4FtutH3NmVVhtFMRPNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pPXxz9RP1XpdzbcBAnCCxur4sybbdSLNSYiA7T4Cz6tBbFcREouj1bgtYAPD8vjA1oWcU9sGnVQAt2HtA4HesBc",
  "key1": "2dW1XUeo77yHQshQRNx6c1Gs2d3qiBq3TtVX5yLFYVN2bfdk6Z6ffzNynhNuoo2QdzM1jT2ow97qAwEczeY8R5tH",
  "key2": "qXc1nuv9chAyKBAqTK6m4oxF4oSqe2okcPwMwnAny6jJMVA2TsRC88knCkdVfjBxJFB5ZJjfha9Zd7jHDMgRrA8",
  "key3": "674peYXCuejpFYrbWGX1DRecZ8cd2GFBh5PF8XGe7LFzcBCeEb85uYQZsySWA2QbmMpCjJmmRqqKUgXKjHJ7qgc2",
  "key4": "4QohHufUrdbJyZjAseerfooaQjMojH95Yxe7JEefwyWNLtaYEuK31UMnQKmW8yKbR8L6DBN28jWyF8GNzY7Q3m6r",
  "key5": "2ckZf2vrSbm5CvgYKfoKu4zxfRwZXX4DUbNjws6JM1W35kDHdJufgGb8hcEKHeVQXqhwsQZWifmutLyJcSj3QHSC",
  "key6": "KZqDY3tyHP2ijHQJvbdsXdPfp61Gemdc2xbwaiTgT83WMW8DLusfwcaA7wv4BtLjUaPGvNQbeinqW74716uFpgv",
  "key7": "mL215HBmTtdpTzxgT9Uiohkv1qGzuT7meCD2a46DSWr9htPEmfRdEtUxRuZXSYsfwRWCBbnKw7tL3CWqkeamLEt",
  "key8": "4ziszhEuCneUV7hipTW38EMwVe8MrHpLXmTa8vVGeEJxsqwXf1mTAuyRA9k5uuEukpqujuETF1uU2inozSBFxn7a",
  "key9": "2zL4Dj1C1c8DR6Ljx3RgTvi2oGbBqPEJaLxb7WQBLDCdpq8qNQKiE5msJdqHiHXELRXKwZFfA3EaYDSGctAdN3Km",
  "key10": "1jhNjNM1DtyR3VaXa5jtp554i47eiADj4hBUh7LThuJV1ivu2H9m5PsHdA6UTcQarY97AnBq9BaG3X9DDhczCGz",
  "key11": "4Seuz1MoxZb5HTsRcdHn9aAfE5Eq1k9AjXTgKy4rUhLi4kVvNx298RVy5DNsv8WbB6QZnZYgwTTP5NzQWVX36UMQ",
  "key12": "4HpBQwwTRGdBcYZaDBRrmGy4hRM6zCJMHGW8B6SVPb5h21AECFbGxbKhXhCDbSMHBnBMFq5JC6KC9WLWWFLJRZqR",
  "key13": "4Dnvam5YpiEbYN5s6uXLJyaMJVP5BEguHseZT1ENYKRMsVKzcbB2szxoMkL2ULw9YxYWLrBFmMns46xR8VbNYbLg",
  "key14": "3P6QGtpusDTaKjpB7XeV5xAd2ZivVMpPbkFXYaoyW5sa1fauCpjGsyAyBQwWNYWWVxTdyiaPBuw5gHfrdn9mTzGf",
  "key15": "2Dt9T8ZeiTBMoNAxK8Zqc3VdVsxMgxzKYj8h4Ra31NbaRwPcPSrWmuZVwjm6sp6Uqx6rBchW1wSsyev7W1PN2W3h",
  "key16": "k3XrLzNFHixv8Cgfu4XK64LaC265U6VnZqbVsUknkShBzjnwhp7L318bQZ7XXtLPkgKth699sAyqJxSVjdkmxWu",
  "key17": "2DyGj4G8q971yE7RT9QX3c4HVFjdsRN9LnAiZkBsSDrpq8YyZnXs3hX7ptmsZcGB6Rh7mWDT6W5bNxuV7mXsDKed",
  "key18": "5cYBjz7CyQWm8Gqpz4S6kt5SMnox8SAe621LeQauWAFyhCP5Cum5Ad8qbyVAw7S1RZkww35sMJLSc62XrPoLxL37",
  "key19": "4zsaRzGjmoFtowUvothtG7NhTzRyhPaicxdiv4kgA9d8YmmnQ1o14gXCmYeojwc9FE2F6EMsxRtmUKEAdFtMQWFK",
  "key20": "2c6TsRBRoMULmtMzc8JBvfJQJ1pQuQ4yMUTB3T3STeCjZWVCSq1eWTA3y78kuaZeGstYVApkfyfsx6EbREjdZQXm",
  "key21": "vahb5gh3b411XDjWFuqRstwLLp4dv8JkdkQbBHZFj6wtw27xJz74Mf3wpE2AUQyffJEQ16MW2kYCjDQPjn9WEX4",
  "key22": "56NpFDBw1a7PH5EbCpk9Set8bgGJs39iZoeXYZbAfx7tUE4dWGNzQDHtkzaWPXXgbhGt3AHNWDBEwVZJRKcM4BGc",
  "key23": "38mgqrRTqhkY2ZJ9XQd8T7s94tFzFpVUn9zibti2D2fGcmko3MocxKtaLi9joy3dCt88TbETFEJGGTdP6rphLZa4",
  "key24": "4xvo4ZoT28VJnmhFiStWK7FgwiuKqw4yePtJy4TCnzKb6pPse28rAc6epkpzGHfCVwstLmmX9YPYMg5eVeugZgmD",
  "key25": "3ghJytkyM1XKnERrNuj8mFDFVNh3JXwQTgA6vdV2z9yqN89y9J4SzbnBZKBwiLpZdNvopH1AfW7HvgXSsPJt43Cb",
  "key26": "4VhvzBZAXrXoZj2LVDXH16qCcHN62esgRU6xkXLyhcgsv6NesfBZMxQ2rG72xD2u3WkupwNfwUZYkUzubi5D64HE",
  "key27": "5P37A5L3VNEoYD4xownhpU8YxkgkNF5vefKabS38JYw9gKp1xDCF6jMntEeZe1L96MtGWQnW5bT6giCVZ1EhjDfY",
  "key28": "5HABviCj8rHwZxNBXKr8ARaMMCLiQtkzifDXpREESfVTCujjahLuycfBYis131BFUo43bEon9CSEEMgrprs6znRi",
  "key29": "5tapLJdqRbx9zUQgC7FLtYtxoUmxxb9p3EJMcVv3CXtyZg9LnWejt1XbiZoL8RX913rETtyWE1YfWhNyPhmUx8m1",
  "key30": "2pA5sEeJaSGA5hkLE2P6zvZUBNpBfLPdGCcCQcftsFWDAqAKkocxdFLXyLR9ZovBTN2VrSnbRAjm44Jg6fJHqJSA",
  "key31": "2YPnQpLjjy9at8y5RmSwkrEzjd2eMJzSLGaSAcH9RJrC71N5JneMuFbhm3LdbaFNYsFk2F5vU4ECFsKnZU6ShpLj",
  "key32": "46GyDojLZXMzHyVMn1RBfiCCXa46dvHjaZhxr1g2nbZGQ5rjEisbW82pqFYC7LF9JZZ5kHEJQ7yspfmyYvRTGJ8",
  "key33": "35jvobLvDjftjgc9FKUWJ5qz6qKBJ1askofgweecjQUGtBXVRHg9N49G6BGbJLSZqf5aWSSeFUTUDu7S91mgHXa5",
  "key34": "5x4KjFQh9W6cH2ufWhT1xWyKKPgtccq3FWtctcLtauGLiYhTVAP2gDJoxkroE1HjCjG8fbceyHjhjAY1GLcGz4jd",
  "key35": "55CJBYdoZKMj6rGroW5MswKjDXhKLQbH2KgBw9eSJbxCy7sz5R2kdAvY2bFq61hvo6zT9cMjzZA3tqWVkN5Hzed8",
  "key36": "jRv3DMHuv2d3cWnCuKDgzoyrUontM58X9FFrUw5iusPXBAaCf1ndGUhieSTLehqP6TcdMu59zjWzzm3fkRiS8vu"
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
