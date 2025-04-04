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
    "5UgP6zt5PWWm7Co9dJL4w5Hr6UK39n1N2HNzby2bzanZdP9kkFuJzzDUotqChaUFriRRAsYsAoQT6ifvHefM3RwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fLBZgZBagZ4HqjECstWxzBVjx8eBoL2vzbQHGw4qR1MQpCaCjzu9b8skyvFBnbWryb5w3v8bH3dLGuDxJvHtdqF",
  "key1": "3NnBkWbWzjmar46ukmQLaDA8R9XCAtQb9P7FZJa9NBwdpAt25bxtHvwAe6U7779G8MZmwTtPWPGgoERPYQhEWfGC",
  "key2": "446U6nfUsKpMqEpNy56hNTQDdMirAVwyC4YfRHNiBfPUv31qanfgDd17dwyxPFTdSoRKy2c2sede9LLeDoeuDqK6",
  "key3": "2b7yPmE7M7VoytuKzh2UFsM4DfDtNPZwQxxCea445F6FKL5PmU9G5LEnQFwZVmLWXK24DdNP5ZdLDb1Tpi5eSsvn",
  "key4": "j62bR68H45zXWY3H4CXt3VLL3u28MkWmZVmtUsAd2tSjiCG4g2aGeASJph4smnste8qHJSK5fcFyvoF2Baz5rqa",
  "key5": "4QBVCzHcwK4aXyw8SrGLaC5U3vcpRKsyxcjYcShb75A9Kcwp48uuukXJ7vh7Bobd6bDRm3KZHXeDvf7NwEwqKp5b",
  "key6": "52eSFkB5tkKGhEAdGPxvvWCnzeT4eJKn5atdXMYpasvG9TKeYY727jXKMfQZTEyghWef7M9wajHgGCdrV3fZTUaT",
  "key7": "3uibcotBUvGYbMdhk1aT4kbg1EFrRUQvg6sNJngEDi7aY6CcFV3qTUHDZy2yet8rw3MuftcHatMofnyWueFbS4Bn",
  "key8": "288RHDsFzB2yoYqyXTSj6ggSwfg1qdihLdNUHAX3L2bCiAksYDVcWeYJcL1wdHAaGbL9fDCF7guwBVNSnaoZ8QYc",
  "key9": "3uzG5YfJHwuK5WgzPx8UBf255K4qbU3Ymfrf3q2DUaLJT82uYqQGJ32zgLCh2kUWyA3xGbUGFJmuNckiQny6kr1Z",
  "key10": "4mZHzPYa7FQdcZjJrFLpxv8ks1u7PEm6iSPbTa2qDQv5ifZ7bFcqyFWqgr1muUmCeLWQF9UoLgDWa711yHKbrZHh",
  "key11": "nfQ9utDVKJVNc65oBfY5toys699Lh4qWG22ci9wpLo28ZhjvC8cCNaFnXNwTXAHfgaAYXYgKWkJcjerK3cM2qr7",
  "key12": "3bAsXVRFwzwJaLHzSStPdsfJzCdJscQ5FXeuMcVQWtbMVgPZySQKWeGEaHpBePzuLjMzWocg9CoomeMzX7JFLEGM",
  "key13": "26nHiGHb4pU3xewex9hEd7jw1MrgPgGA4THb3eYm17FgTrmcfxo4zq3QV2ayaCrBGSVFUbu4GNEKefXexaTYykPL",
  "key14": "4HubmGzNiK21fobiJaPCzL6duuGQcM3gVkF5zTTfxtUQv5eJnZpJ22uyWceLNTpzMDFXuGkWrJck2FQCwdcFgR39",
  "key15": "2WF38cCF82qE1LJpeaLXNx4E9CMHWyjHDPmgv7U3mc3NP372BCufbWB3LM7kQZDPJa6JMFQopK4ZtkqmqVHw2CtM",
  "key16": "m9RAeSvc5RK57DSko9Z2sHAjgobhQtAspwZRhuuUcKXD8gkbaNuTf3AjxNk7dZhVMJdBSevZAxtNkQDZ8NgrPTe",
  "key17": "2fNnWPRAsAy8FvKbGckirYkDFRaMT7azFShDH9smPwvLaCaYjineQVPJEykBo66yGTeHk2Z72LoBfpP4mdSH8EZW",
  "key18": "2u6RzTb8prd7dbmk99yuUHDJXWJ8wJtQpPiDv3cF8o2RNxAiWmacZLLjJjuj3SoEAZeCC44rXMstDuxAj1jrKRLk",
  "key19": "54H6YRrc7t11M68QV2DZhVj73TFfiG4NNJgEVjmDdGMb849m1rApCBoGFWMSomiB6whVjPoDcm3ydGbjPvJ92yiA",
  "key20": "3YFVsjDHFqGatUHrPAmyECV5xPrx4FEzqcViiXaGhtuZa7QXf8pqs3t5kQRhDSZ415bz7JG2VBGQytVGW9RQf4wm",
  "key21": "2zFihYvmvNLvj5sLsCqH5xGmbBXUSWzSM1xTMthWDqmTqzU4o2a3kmCU7GBeVdcPsGbef7VYPqe3S9i6sEUMBwrS",
  "key22": "42shuKVCuxAyn2qrD1Wvcnt6guqb9ktPkGkEaJVSQmhWhP6eTFFgjY24FNDRKp4aurvXSkpYExPseD1yYmM5DMwr",
  "key23": "3CrKyvdmtCp6GDmWyHS72X5tAxhZE7Wwx8v8ABArBSff3XHWCxrG4eZB5wE4h3jSuZqxjqFqkPYFBSLoJEcKXy9i",
  "key24": "2gpj6DwTaryDXra9RBwxbcxavx2ZT4DREnMiXsufnSKH1HxuSzrDuzjsjRA2th4qLHq8dwTLLLw6W8fodkQmQ3V2",
  "key25": "2puLbYvAyUWzLimojfUj58jSGmwRN8CV76SfJ66XrmjaXjT66S172VYCeFMj7EmSES9D9Ljp9VVaD4wGYpD1sfxg",
  "key26": "5dLAJ7xU6ufSJEqXipuZASrUZ7ZFEWSNwte8kdPFS2xQE9dgm2TR2aFj6R4E67gTbXwQSD9UZDvdLrRWJPbr3qMj",
  "key27": "3G5kfofAUo1QECnTVDDmzBYZUgSDqtvzcBSvguXrpCf2HZi2LemGJhWSd72vUhYaUF3bJcc6C6sfCHuuSwFiXR1s",
  "key28": "45Tf67d7EDN49vr3cTnh6U1RHswqYDhz139T5V671kQNpM7GTcFnfQzohe2jktvJa4BfbqCxphctBG95MBPBgST7",
  "key29": "46cwReyJDdXcM3vJposL83CmYXpUikzHbctqn35Zr5hKAA5En96HC7wt2Thsd2rUpufTWtzoWe5Fkju8N11fkkVY",
  "key30": "5zQVA6cTB1fvXd4YKeMCGLjhfLWmL7zXfpUkpeYD18mRoAAspQF9SKBy5CvZvszBxPtfiYziznKXjftgR72aRFsX",
  "key31": "5mNFpukHvGgm2uufzERCJEbMmUBXrUPqazvGf7SbRbYQMk5R7DB2GBpGyBN2iUB2BcHfTLweCx58EqHKSajvx2zt",
  "key32": "2PRhSqoM43shpLw5DYF375v7razCAtf1xVkwSccFmzq4Tps9RiiB9SiSeD2u3NqH7R6GQACjTyVxiQy5wyeAuc92",
  "key33": "4kNhLLRd2tQxuFvLBTWQfLnBye7ruW4YX4Le7RFCn9LdStka9PFZFKkmZuEy8ZTETPRjv1RWbNvc6gqfCz4GxqzL",
  "key34": "2eE7mq95rmU76nxPipKkguw2SnU5Mb9K6K8eiP8ThEruPaNeqnDk1FjG7TntuX9ULHpmi6MpcvkR2Ci7hZNbb55s",
  "key35": "37dbUPbWyg5ni4HhAts6BwtC1z4AYyRSvpqJ86obmh5ZxgWSTZY4XKmWQsPCTMVsZ6wtwfGuzTAPsz51GRf6VN2P",
  "key36": "2zDdyUZoRtdvuzFit8pFoRUkeoa71BttZ5tmpt6s33qTcLCtxMnrtMyHRD7JMTAPKtbYn8Jv8xzurwewKrYuF1tb",
  "key37": "5ikCP7io95k5oE94bhpoken9g7Zm7z5SzZZw1QBUPzux4YL715wNMyvAZ1KXUPDh22jwD1kGfKnGvmSw3Xe6K9xN",
  "key38": "3ur5V3REupfNwVTTfWXMyfddG5ZSGXLdN51JrbjzbsxVsPHAQ3ycXsouSAao4XnCb92eWzYQD21VAmqBHGKZopYv",
  "key39": "5dY3Pc3gr4hCwfEh3X1EyzfMyKst7WeEr7exdFtvLSLHfxdnZeb2v3WKoVgEfXmjEfQnJFobjGcRjAt65v72Bka2",
  "key40": "5V6o3MFs7jTPCYXPqhzKKfrATbqd2DGiUk5cKkSg8rYb6vazAXFpwviwsNuTmoTXLqSSjRmKH5p4XzWDA54wa1DX",
  "key41": "5jWhMFupXXu669mdc9pMeTUvzNmEEPwn5C39e6vocunyicw4ChMX6n28WysC6zd7CuHxMXh8jPKuzwhC5hpSeB9n"
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
