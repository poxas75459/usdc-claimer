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
    "4M5DKRDAkXUthfKCyqjESnWhezhWBPR3YBNDLh2kbX9Q9rLmfKVC7YmteGEbrSucekGek514s4BfWSsfYJMUyuUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PynVi7n8FPZLwC5mDchSdqi5Rg9ThPv16amhdQ1M1exQw7vWhdv2fXLFMDwfPT7XgwqQfKA4q8udJhXRQumZLHa",
  "key1": "5RJf1Dt33UvX5LpAZwhKqbUww4ZfLCiJmTW1vUPjNCV2GkBo4MWTxnJNHMrtPzhvXKRD1kKygnS8KVK6rDh5k2To",
  "key2": "3ZFJF7N5yqSGz9P3kGsuXRSACyiLY25ovEWxKweyyGEJhvQotFezGjZkMgUgYwPNgxsGtSo8zfhYrBfFEBAGwfHf",
  "key3": "Uy94Lb85LLPTy55C7BxLsQHbvNwGcrBW5rKNszCEqs46FXgjJnyBWDzQBeeidpENrSDFXEbeftaqxEciATBnjhj",
  "key4": "3azJwyHkiaecdXGoiG7GjEeKH9CUDiNq4KXh1bzhryLSY8qNG5tBvZ1sekm46rneL4xbHo1Ncqf5oFxbQ1TGisWC",
  "key5": "3N8C1JD3zhgjaPhBUgdiQPfqBhVgRpUBSXpqjPgYuRN2t3MryE3PrAXMt7sD9vxFquQchvnHMA2ctBMuHB11QobK",
  "key6": "4CfidRNjqdwAtaiBQiTyE6amaG2YxPwJ7si9SqPeCnySaL8qind7bh5Sz18uaC6DKwhfRk9rpnGciLuc44gtmnZd",
  "key7": "3ZV1SVkqSgLoSFxdZcoeTFAr8e93BJywFzt9vUyPg9KmtRcJ8m3hBdvZ63AnYwugvfvFA7iC5w8BLSBkxwRgst3y",
  "key8": "byZsegRUqo5PYnhDFJTPoorSMzDsLkuB5XKQWXGMrXiU7XfcHZy5wLRjVXayBLmoyn5CfXMoPJhGqHH4guk58aP",
  "key9": "Uy6aTYt6qupzP8wYdWWUxB2aNCgkChuLW7mmjp5Fr9a1JZXff1Y7Jk6uBebcTRZRNe6n2UgVf8h94y82UkX1Qsu",
  "key10": "AdzDsmTVqvDDwezEEC7zjcwEXdcnnf5PKtazZsdDcEBRCGeuxGsX9HSCFdERusPKQJqnNaYYo4UXrRvpX8GMQAj",
  "key11": "2xmmGLNN4zRkrZm72J9eEZaa1cN7BrgAc14JrCEhLYGpz1w5DjgW2KxcHZyhzTtx9nK3HJ3vcjzKPQ3TQvPK86ZH",
  "key12": "4M3yuuaHDCEFSch98TJWy7auvjWJLV1FjvVtTEkGE9FBxJjYismrj3iMA45tSeyoLh14KGgUXdNYB3pzSirvK78H",
  "key13": "5iaU9pUc5gSJf1S6B24Xjt2rGL8ZwgZjY6uAzakQzxGD5x1kYGovtTTozzFydbe2TAm5aHpVXhKc25HdB8fwA1HH",
  "key14": "22SrewWLHGV4sa9jCq3fhbkeUBBb6jDj6HUqeBLKVt3NpbATZomrRfD2ZRA9KyU5kMszGEdRNwEedx8B5CiypZnq",
  "key15": "2RHWY48pZjAUVhUZPRPsuW2yzfEkwBfm49Nn8JnZ4MWBFTLS7oBQgdyKPKsP1tcCAXNiFPMPihQgsCJ5tnE2J8v9",
  "key16": "2oRLufCKWGUVnDVWgo77RrgTZUjRtcBXH2ktXUBP2BGJE37AniGx2wBZFMMskdj6aB1pqPE1d2SuN4oQnowvK2mf",
  "key17": "ynTgwkmYZ6LofMgP8GhYLJ2eBXoYexJRUSX4hW73GMfyroDqN1TNymMWCAtYSkcfmZ5p3sAJ1XisEpGDRG6oVPt",
  "key18": "HZwnzndPADzrLCpYnPefgKrMbBp8CizmgH1eFZrxQuNobHd7HBBZqu7y4Xc5RndUtxHj3xdQxbShW4ELqNpBihx",
  "key19": "5KBDhhFjdpKb5htnhixZhxfBT6FCBs9H2eRKr9gm92gpmMRMfQStqrZQbqpPJTYzDmWu6Fk7DmFHgckVMuwoCGVt",
  "key20": "2jeHohnwiyVfQhC3afLPxqwLQBZ5g5VgGvzoPHeW4EW8beGV9JYTcyhxn8r62RVrXoa3GrpNMey5381WVMoPns5w",
  "key21": "1xK2JoDNgs1MJEtwsh9Drt1TDbb35pCREKh2W8QzEH5oJG1S72tSDVSD9A1fR2M96wuzb38AHNxSHg8iPqv1FuR",
  "key22": "3P6ArtT6H4MRDesf2ihLQP94DiBXqdUx173YGQBRpaDKmJnbdayT7XqrBQ6jKYrFov2qCHqAZbPmdMPpLLENyN2A",
  "key23": "2tigwKGtaNaMzkz12VmaHaebjHd8een2cuLpZtTpSgZg1eXQDFeGt43uWGiWFM3hXANNB3xoK1MzqPzLBkCso8nQ",
  "key24": "3oCfUCbTJSFUseM7P64jNWY3txwAMrznDHEbsBGjwBtNe8iD7jLDeS1JU1ecsGT5tauQTwkgQXoDNq7mYfBpTH2D",
  "key25": "4F7WDE6jXTVK2QUE3LQQuydzMBv5W5VVdH6yn6sqp1Dc4AThuGT41p2TK5udfgEXNxWGyCfSwMeuHvXf1r5C6UoP",
  "key26": "32nWafvoC5cQQtU3yP1yNVi4DwsbTADDdZcR7ttGdxz27WYJPB12pPkpYBSZCkuyy81e8WHor5a2UGZA2faPW9zA",
  "key27": "5UG95Xev2WVEmAF7KGahNK2hzuSWN1RxoDXFDt2DgFnDCsVSE7gReQaXrQFmbzrk6p5F5wiLBHJMoMhfyTergybq",
  "key28": "4pWZwpWmdmyZuQRr5yUL5ezTs7CDH8A4PCJKFHM4HpEugoCPMZqwYqgVeGtrx5RMqAqFPUmjNNdvHn7MtgpgFJdi",
  "key29": "59rsgjqnmP542mNXWXRofeKxDswioaCFRy5ePskqNKRY2zJkHe9UJrUGVYwjAS2mk9NYu5HTRogB5WLdiqpLzj27",
  "key30": "4hcA7EaheUcgYLEknSPTZPF5mAvXVEbr6bWCdyUWRz8ViHPCXF2AXiEG774BnkuC5W6kxvvYF5UpXWRhMxE8Qfss",
  "key31": "3CGtvUkjzrqcYGiVf22sgH8F2ti3h5HGxXsQGsd6kzmHxUKRiSiTMT8cKXvsY1Q2hsTkXLvegwSzkfMeVAJuqyaD",
  "key32": "2qBZeo6aseonMf4VQq7bwmDbqJENPaREqDcEi9kgyX3qfaUB3aZT9jeE6W5e3Acb2yeRuLGrPxPnTdKfxcQGxaMj",
  "key33": "5JcyuatmSc2sys4Kh6sRp9MfvdFuxGJTYytSsF6fKiV4fwSJCgETauvpxfyJwUPQRvbXdRP8E5S9UDbvqXhL7aEg",
  "key34": "Dhi1R2VYpKXJk5DFvup3CcpaLMWVDv8suKb6vq9uuVCneSarfQtzmBVvNztqrbxB3SVJ3qHqhRxRsbAWfhCJjnA",
  "key35": "4uK8bUoEwZaMdfySohaD2wF3DaNoXZK96YV3HownUhAC7F6Z6WvWSCgTcCbL77HkJ13f8nYjt2UujLPMkXhTQCAp",
  "key36": "2iago5caJcjLGNQEPBD1DyFQPxBhFLCW7kpt8nXf4XSgT5TcXHTgzmfRbFqh2rKt6KypnjxRa4hCh6ymug654ALH",
  "key37": "5kpAn2SE242WZSMKDhnHMx8Nha2UvpWjntsRBaaL7HLVjqWpMdS7VQvmgvpHCtc157ZHSzvK1vrtFuj57Rs8isWr",
  "key38": "47yMN2KoKYxy21j5iGUQYsPuUBBgCR25cbkgEDoG1mLyCr7iUdZ6rjD4mavs7BXEJDtZW5BfMVh3CVgx1nAWUaxh",
  "key39": "3CeUvixuJ6CXa2AdE6EfY43ugp3b9aWkirJ8RyxQ8tgwdj3cLiYjZSwcHYYRPMAqfeZhnBtinNohQjN5qGoCWXNH",
  "key40": "2BbZL771M8FrYiDcCA7Jzz9zUmawJ4sSrZjRxG4NKR34Bt8QSYejcRDQxE1BWcczkBvssGCSVEfyUR1XYFSQUCd4",
  "key41": "DVi2ETkRRLXK3xTysCrbvG56C3FWJUPyB3XBe2N94CVsYQAbpwEXC4cuq48WK5XxSetbqbWtJyHo7BufVY5jNBX",
  "key42": "4heLfTVFMDvvTYoA4BPk9mzSEGnqUzinqQUSppaWir8rQd77aXx3g3A18MxVAcg1A31Gn9gfeizxgq6C2mzgSdyD",
  "key43": "4MZzDVhMCiSYtWkRpCbx9azXLBh8iwfoenjm56tAfPUc4xZpczQT3TXDEb6qE1TxtHkApwtGRpwQbbkaG6WATiF5",
  "key44": "4qCzQDespGV9JNfwbooBTh8EMwJ9JmcMUFdWHx9Vz3Q4WbPg7iJ6fceMxQvbVPvj7jyH32cbh7pcrjqHRVYmHBj"
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
