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
    "4gNASq33SvLUDCyNe5iggWzvVbYvx8V2Fo55oKyKmFaktjAvbd3KHeTpcWRx6u2zXXmpb7AhFzwzfWHstiFP13zX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j8JVveVyp56m5gCzguxoh8LTxUJFoxsj2B5FGmPzmkQFHFocvdzQKi7VfLiqdxGU72ZPqYqjEdJ6moPxceEnrDy",
  "key1": "2zBpNx2Xg7pR3dUArGGMoYqUBwX6cKoH6vfWWikvGzs39gHHQ6XCajXGL535nq9Q6sCz6QhHeqzT7t8ytAdyEF2u",
  "key2": "2fBy8ZGuYdSjXVHSQZqB1ZxGbnKLrVDEdAgP2hLvD4KUYRhLK6XA3Q1Bc1vZjqPwNMatoaC2ts6JGWzGe31Uxtxg",
  "key3": "49VTzLuuru7JaDeNsQ9M39onrRrUabqaWjkBHNSztkrDbStkUyjfjxzV2znDtHEXjLcrrASTvw6tR5B7wfKrDWwN",
  "key4": "4d3kgVjWinsxbTRtstpwf2vfPoqiRxR6sDHBXEJRK8HUpkULArmFrvFSpxMtKx4RjVEv9pfQ7E54q32ix72s5HEw",
  "key5": "3pzbbcF9XntbKxmh79ff76xG6Himsv4wMfWANtNWeT5LvJWGVvGAqzLYC1jcTu5QYHfyFAeDESzbX4c8k1iKp7F2",
  "key6": "4E3wzzhKn4NyexeszBVPBqvaEmKyU6m9YTiQJ3A3ZKp3vqrLpMVr7mBWyqTwcpBeSp6eWGeGP4pZLgihBzbEoG6d",
  "key7": "BqJAW8Bn5W5va6vj77V7sEuj2Ta7zhmf7owPWe7ZKJX4pHsMZmm1wg3RYQXWY1z1qANDVQ3yANL9WWJKjjV4ewt",
  "key8": "2CjqkTs7VfuhEdWu5wYtngQ4J5E7gZpmTkr14sbH8yeZXw9bRvBq8Ecgz9KmUH9q96GMXbGCytRnyPH8BpW3JEEj",
  "key9": "529aRFZQAcbPPFNmXrjf8Catb6LZLtjv8cGkTpSavYnvGkyVUSxwwG8EQk1q43inHWSv7KmSJuNfZxmECB5rnwCA",
  "key10": "29vYc6i9TzY1XrHkEcks8snqpp3UxtyPXV71SSiow6qUhudtkY35gc1xCBD6QyJn1ZXNEwDVaeCtQzkWfwWsAcaS",
  "key11": "5Aksrkqcp3FDfwmJ6qVYXqz6711YA41B8MLMdSSkegqV4QCLX7aSTXnnqbk2gTbyFUGFkqeHyLv2vD7JxdJRAeyD",
  "key12": "4WGsZ9YeCi9JrUComfCtT5SBnUNNbFPoF86DoFGgr243XAVXRhrPttJRfAPW3YWUudk9aerQEY2Kvd7qpnqKukS6",
  "key13": "3ggB9fEJUuEqrrBEvgQeNwSktDxMynTZPjs4htXkzGYqNAHSMAx3iNP83oEqYsfQwVaF2DUUyZUgCH2RRSaWccTJ",
  "key14": "414bGVx22qYyadKHcs9duuwerQAHr5thvGFji9SQhxj6FFBTxjXyMgbTCje8WYSWWVqCvquWzBL91xzWHTxFQf9P",
  "key15": "4oZdRo1vW3FgfHPh2cVbD7RdjQf6KYGBPJuL9XN9vxBUPQsYesgnWpmCu7dxEjLSjfeXNbGyQBUkodxxYY2NQJ6P",
  "key16": "49FJdpCB3ZZtGfjZX9zpzxGk7AxCT6U7We7Vkm8z4gPCQKD95vRkZfxkZhaAmqk8hg9CTnvLyV8zeJL5C8x4NRU9",
  "key17": "4GFhDePCQNK2DBcdCoQ7MdMtBtCcLcJsdr598AWWxbZj6YXZcdJitMfyDqWHSQvNd7rbDzBhJwWeMZpB5i9hQV3Z",
  "key18": "66eBUvr6uE4tv4asx81aZxZFKEDf4oHEUAmp5wNdQu8C4psQaBe5DAuatjgxVuo1LsHNnU9hDkmYdVMvo5uoJpQn",
  "key19": "4JMtwbWjqqsKLuNDDE4QeiJLWMuM1F51YbmvDsYLCZ6iKafSdNNbWZK8jMCZbZfhFvDqzPUGbrqzVZyqb6YobM3q",
  "key20": "3jSPJ8fJvkmmfCcdiX5VDB4DeTP4mXhkwke6XuwDKMoPgLUdUCrkvESNKTPoy65hiu9TfJLye8uMLbnRiR1wxtTo",
  "key21": "sZD8T2FTYFqN5JLHaDZNWx9Lx6cM4zksKMGcLkq1ZPFPfUhHXHSAQgs4qcb3AKvciE4bUrHLoDpLpQsxY6yzjwH",
  "key22": "4BtS2427u34tpg1xrSZj3eHQa7BXQ3AVepQoWuJbEmPA4TZUi8xiSypFmWDqS6CGXJh9mszRM8Lnri4hzVFpcTPa",
  "key23": "5N8BiXtRuQMg2HZAoqLr3tCozLdKwXH8KtChaLZf1dfQoUpBKAAyEKKKQgya8m5u2EzPnh5Ztcn1Fp5amUKzbMNZ",
  "key24": "5ivxyu2NpkFgxXTrpfJikzjsCLLJfSSQmzJErzj6Xfmzj5AiC8qeocdspZMhtXWAxx3XX3ABrEJHN2jn6mB3gJWV",
  "key25": "4qVvaYWu5H6RfVNvx5WEFFW29Z8CrMmHn9Upo5C2Vzw5m2skViBS7XZoit62whdhkcicSkSKv9WmCLB2SabqjUQR",
  "key26": "25edoUr1iQrGKAT3Bi5WEi1QMNxiFJgPoUxQTRqYEDPiSrG8GdnubXdwmSVk9cQR5aKtDMtdKz8NSxcAzUDe1E5s",
  "key27": "4dTR6c63GXDZjmXKuQdUdJHQxWekbBdMDsxap957D7N9vSReLoci3w2C1gECrbEq4mRkzJEVpzPoXD2BvtG2ERQG",
  "key28": "3CRHSV24QzRNfVPVFwQAxstBhMjxKvpe8dcm3n1PsURNHE4QG6uaZ2gLfznYjhvTnz8sTuVAbmyB3Ydrr8YdpwTD",
  "key29": "2gZ8oxqrCynrVxgwwRVHZrPw6u934ckdkrvcfLvvgv9G32FomVgycuaoNLJKjsD2CkVeDfUWdb7n2z1gX9X2RSZv",
  "key30": "3BzhYGKXkZg7iYQ9tcSuxnbTLtVtEJqML7phPQAoXmxJnYSmZJKjAHpxweutJ8eHegt7ftN2PxndjGoT8285PcVw",
  "key31": "21D7b1yui4vqciSohNmfES36MTUPJ4JDEZSahxZ2iiU94RjgjB13xorRGSfM8BGAHcGs68Nhbh7UY4NfuPCdE2f2",
  "key32": "3mS1srUrMddU7TejKoXBAiryD4tHcsc5cfia2HGfeVssGLycofeQsZK6PVJjJiafpvR7wfzWv7q25ja3S6dLKvR5",
  "key33": "tbdeHxdDjJwnnbwJrgqBtXmy5NLFqnNMfyTVwq5GxqYb6jwhWfNhvU3mQVrb9xrLJRPKBhJWc4DK7k9eUG5WrAJ",
  "key34": "4rrWnypuK7ccBwjeRn3JoaEgPvZLwF9siavd4q48vNXZgQh6pTYMkZa7fJDrBdDjfmmkSKkDBRSd1jVbBdJAbDnm",
  "key35": "XGQqZsSJXf26wjtKNgjDPBRLnWhhbGsQDYTEL263iXB86KXyyDnB4kC1ZNkH6NnjKVdcNnPYSqa3CQXu9DDyuQX",
  "key36": "3pHyygcdPfBkwUF8t6R9uBmL1hf97SP14ZB1oNnBHQHd18WLkSDKhydmnRba5pGvvZ8oUAfLjond18UkYdAcrjsd",
  "key37": "4GHQhf9C7okc5VmvHCkhRcmcad54fZieyK35srWt9NXgaduG4hdREnDgxEhNC3o5Ucn4hqdRysZyr2YsUjHYBqfW",
  "key38": "3yxcwAyrYwYURq4JUEefWPWaA3CFedk6pAbrtQcnsUYgaoFGn354pJeugbLTYLNAjLbyU54dfmd3i4ocukrxdrN2",
  "key39": "5Gc3oFfAEeH8TPpzXyMZqr2qn8a1J6xZ5UHADQ6qGi4iQBv9WnVwAgUEATRAwsrSYKcNbm41E7u9rtaJTr49f4pK",
  "key40": "bs7mm1UzAvnscNk4AqqywfLdgbqpE3aHrEsNmRYtqGrATmiw1nLsKVFSmYtUYHiiD61Sa1ymp8YzbfuNnMhYBFt",
  "key41": "tSiaD3BwSFU8313zRw2wydMguQMPNDDjki35UUnHrxJ3ZLDXtzMgfA2hrjMiD5tozM3dqJoxFRZmDAoqK5a8eFb",
  "key42": "yp6yenscQbmD9LfYjRs3tUzz2dt6ssqtJYazzUXoohLqXWCDcuc2r3rtLg3zAFDKHShNkUgYU2zSi4hFpHWSEmR",
  "key43": "58W3Mfm4EMKZdBrLG7VnMvmQhhQNTnekLNyXrTEfp8sfD4T7q1ycJy5VCpJUhwCDGju74sCHnJoteTLNVWLRirfg",
  "key44": "2ry1PZBv4c2cBxa2FZniKzdn4AkW3YySJcGnpXP1RGRrdyrAHxtbepN2iYvQz21AjN6pWT26rNtPLbsP1uC1zPAc",
  "key45": "3Cz6HTmFR5sQysRwJWBNXzK2betPWWbxzy9RxYJopUj58G8L3s8KyfQArL7yDgQpqjQPNaS7QN5Ed3vHXst5nsuu",
  "key46": "261N7qyEaEg75SDktwRDFjSFnmpKaQzLVaLHMdnkb1z37qcH2PsU8xyG3hyHa6bDwkVoitYgxEyUksGDhoJXRLa7",
  "key47": "FL4cAUkgB95TQT8WtuCesUZdtqrQg4zheSdRVd1PPpRWCC974VUnyiJvbQ8wE56AgJYX8CUNDsd1Gqotq5m2YNp",
  "key48": "yW6DgtaxhqkH82BFujEJKkiSjXmDiR1hY6gGZFEFM81p44uwZe6dYVQ22TAjGVdJwbKbmYcEUMViNZRYVxMD8TL"
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
