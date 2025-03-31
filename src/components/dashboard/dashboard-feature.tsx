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
    "24RLbdYj9QwiwUyDkuTn8ozroGjHCq8JVRFAEytdxgKf4wLMzMW8TedYTn8PyoJBysiiQArdhv2jDu4VPD9hgve2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBCeiqSVJQnsi1Av35jqDykPeK2kF8sMcB8GGofPxoZjnz9nTDoeYipgVG8yTy4jdTpwEL3eR5ugs9xp5ivz1Lx",
  "key1": "3TxQqRBBYproMavnoxFcPf8fu5KjM7kgghkWBUpsUizG9z9Bfp8S7AefBAz6ehrFRQDxYfCYedx8efpGhrYbZUps",
  "key2": "2LyepKXNaSrgsDwDE44QjBG2ipPQS4KtXXxWTKJZcNT6da3ajHPA9v3VES3bBx4PuZMS31GC1S64LTD7qySgtT2x",
  "key3": "4KamuZba6Aphdj1pQJJFF9cW54FnJzoWdbQBH71rKFBjMMJCx3MCcLqvs7ksVBHJFewgLwaeRRKNHGiXWuZzHwPm",
  "key4": "3hd8fKo2FxBYwb5XaKo46d2VUD6CJg9KHWMqwiZPMG8xrjvitS12SAbvW1pRUBJ1vRFZPQn5yRM81AmGH1ZM95XA",
  "key5": "4WMm8LjrxWbY2PtpuG2EHr45YYmA5eSpksCDSRhnHWNEHsiDEPuLUdGrFV5wwL3CWrovWNCp6iABb5jqprYjX6WQ",
  "key6": "2qJyg3tXRq2X6AxsHXcP5e6rDabVFDmw4Z7YsTZaE2EFj7FJhHZy7MGGgkoUGkhUWTofuC4tYZQjAMTDrNNUKjv6",
  "key7": "6HjV6KmHzxoeWo6cPNrEsNysn8kvFpNFco6GmCEypksETG8ohtxLyQSM1tS46kn3hRdDRVrRjuxLeaK8746h4BW",
  "key8": "5zLKjxEgr9uYefyDDZMbDTUNaUdJmJwEEVXZgX4nqhQDjp6rtZRA2t5MacXQ9ePCXusscAidAVdfDD3U5HfSBY5X",
  "key9": "3MAoPnfw9BGQLUXc4HVY3V9F42b1mF1i3sLVw6rNHoGPLduTpMNr3V7q8Dro3pevYMFuGh8dpuP7oPFBtD2w6DH1",
  "key10": "3NU2YkhTrxAJUdUYbrMsFMbwhtuoBWqbfnUknmWhuoWtMeB87WL3F4VDL66ssYtovUHnadtrRSxCr52dYzSpeG4w",
  "key11": "f94683owXE9YJRKfxpNxrADgQENWebMREyG44hJvsMFvrLgykRfGTk6fEDxscLPgwn4Gfer6qyo6WSD8TsUYk9j",
  "key12": "58dF7jFYNRt5FqmzZ6DPzjk1KKwu62a22dBpyTmqDuskPE8Arnj5Rm4zmiaoR2XxPV3x5T6dDKEna75evq6rMz3H",
  "key13": "2msZwZ1c5UdV4ikWoNFvLjX7dAC8SrKfvkMNjSjGXnKCNsaXj6kBbPNwzJXKA8JQydeBSKbDxpfEEBY94nz7D83i",
  "key14": "5oazb4QeDL8So8Q9gyMZirN3JEzCfNvAaDDeUq3XRUXmpqE2NjqMT7ZZn7agdCFMQnfsB2T7Y9dK71vCCnxMJwNd",
  "key15": "25fkgz2F7Gp1uXtZrTEKJYXSk8M8QgUy7Kom8GPtp4teDJNxzYiqzVRDoBU9GFv2hVfHVh7vTJqiTxVS3zLTju1H",
  "key16": "3j3Loqz2oASo9UNzTQ8zd18v4zVWwnrBrYNH4hNrDwFYYabxavRV1wE9d21jiFfLVMeDfrBT2fNSsjc4CQnMvRwM",
  "key17": "4BE2mhzKMbxYubTQw4Fb94PBRmcJx81X5siCiGNvNE8m6Mn76UfoxKNw1RxsFzym7sQKdcD3unLeaGXiCLXJ5CFP",
  "key18": "2NbKGFE9V3rbUCnrsvDkL8MHzXVNmz8NsY9chqQdMikuGbrkK4ArpT6w4w1ekb4KCgAxs9DrhMfii4cBm2GQgr3R",
  "key19": "4XN83ooEdCGug9dzrRcv9k6GQxibiYCrDq45cFhrpifPBTU4GaCS5BqQ7FQkpj59WBV8v2YyXtPsXeL9yT5FhMoT",
  "key20": "2JqqJkQJVmNiaoqaY6ZvtVJXGWshbgWCqAf91GqV72TdRpLJfshHHK2u8U1nrcs7cdfrdvRMFKoMRBiw8Y71JZFg",
  "key21": "439dJcrwgnTdA5TtE5hfKQetTjKea79fDZzipGWtRcCcBQfmM9vDwima599wsM13tDPZUanG1U9PYnkNMAkh7eer",
  "key22": "3daP8E7QMnom57LWtQFUBuqfkmvivYjS76Dxiio63dceVqaZmSLGfJKduR112D2VqXzVPCjrnZ7MXaPMvvYNqnTs",
  "key23": "5DGA5UTYCiAELv3yrMMbMr1zdAy4HJzUJLjebY8ntE3xvT95t6jiwXXA18YTPXrkmCxcm4EDDoNn3hE7fXqnvRg5",
  "key24": "yxbLME5JLRmiuzFEeei59oiFrUcoXmo7dT2oJJxNWdNMuhR8zJqLFpfJUfSB74Bxt4Y3JC1jNz9pHwZuRpqmjwc",
  "key25": "yG88RLxXRPAFVvXJbfL8FeJ7xhp2LMrf4dySEJuUa3tkdoDo8Rp4JMkCSVGcTxP3T5Ym7H2PuKpBZSpP59XAnak",
  "key26": "4cxfBiVeDhLRKBQYnAFnYEZgLvGGMsba3YW547ZzRCwPs95E1yZNCGG56uMcZHy5zkXooDCL3zkpwkSep8Xbb46E",
  "key27": "3zir33tNZ4L3TpVSJp96AHhHMjkqZNA4ks3XgGogVVaEpXTjn1bzvQCqfFUs56FX1jMfAtK8HVvuwZ1qWL8Mvk3f",
  "key28": "5BMdx6Fbmz8vAtfyWLofktCm6oXhkzCmcWUSjApxuLDekUW3pWJHTkSibPYoboV9CjK5zWL6UkutM7uKr5eeghsa",
  "key29": "2RxzAQaqXJRxQBynsQ54V3GLhxb8Rv3LhujQKhRPRvyYMUDw22PZTz3ADiy4gLSxNY7bqRrrzYqPyU5t3EddEfvD",
  "key30": "5oXq92rov9349ieUQ5DEP2oGceisRg264igMDhdKNgsECvEpYNYhxuwwC7fArQJVyP35FREhtg3MVQ9xcDqRrtyH",
  "key31": "HLMCm1i4NEykHRKcaYZcKgm8uXKaJKLsxbn6XMpoKCA9eLPaxWFHB8juAto2Gxcx7sv1rsVjniPYoaycP39UK8u",
  "key32": "5n4yuLfSR7psDxS38kFvzoZYsS8mrr2bhNKvMYkd4uAA2DazCzzhTQgr75zA4RfpiZJtkXYa7NBsnvGU6xs7HRBA",
  "key33": "5Ve3wHycnFoqyJG65PaCq6R36fWe23GaKQNVbKnLdPSpjwsMg7y6HxmDWPw9SmMdm9mLsTaqS93Jfkvz27wYqxN9",
  "key34": "hTibzoS2EivuCGYgxbWSR6jZexst7vhQoaoaLDG9JgNu2ZAQ7hrpmr1hveA95QzShQaCimGNxWtj1axteuHgCE4",
  "key35": "3aAbpCofVqiqHeY6ggEWACyaDsxzKVPUVPnHhg1RVPycEX6Cy2J8a6G5ni3KzaNeaJt3DAbNaJWjntxTUsWMkiXj",
  "key36": "3nBcHfzfQaD7kMujKS28mv7gUHeHvucVJQ1wqBi7XCwz55waK9DjU3QvxVNYaJCcpT1SDYTcksACXJcE9TddvsQG",
  "key37": "jP4qrJvfd4gPx2iWSTHYGBPLDrdziCNzyvFBWxt2R3NNUV7P36uvJEtjCdSYZobyoBepNrXhVdfasenDwk3vvuW",
  "key38": "ic8zo83XNUCaKCVSZ2mtrTrsHCENuQBwSxeuFJL3kRgA4xYM2Z8u8V5NKNu36o5Brn4vPEWio95FoZbFqomLfSR",
  "key39": "3vssnvftMjcmEpCzTxkJs9Qwhe51NdKZiiHcSWk32jpBMvSP1CWYhR9fYrpUsRP7hoY2JmDx44UWfSCDxbJvRYMb",
  "key40": "47QHVZ59doCmSgfTv28aLAqaxqL6NKQAPwc4JQezQTHdYejRm96AvNh71zs4tmCQfRzwfvzh9VptkvHPm8f8EKmu",
  "key41": "41RbomXo4q6DHoTauWyZeDwXu9bNxjvCR5JrjHWDbSYoCqeazgS5Uj3gcMQv1rrMwX1ZKmGU8ukn8eWn22bRxhYa",
  "key42": "4FX4TNwRZRdsVoyUZiQQTD1P9oeNQMayChsowQf7oaArKo8gY3MtrGsYeMGF4ztNkNHTuTH2KPbRvJgQbfZLAMiJ",
  "key43": "57t7wayU9TeBqPLPU2qH89KdagBgt2RvQEVHhyTF2AaaKNkPPqGHhrmoGYE4F4uszre4cqvzvnE6dQwXH68dpJBn",
  "key44": "5GQAoqB8CG8JhRc5yFV9b8jSfdXthSp2du8P4wr58FirDoca21R9YLoF6MMm48dHgUkdwpmxdxmvfKHysDUsLnEz",
  "key45": "2k9zi47NEuECoin9g6GXtiJHr5bk2gSNwW4qZaxTWGANMVXhAZ75mTfLBx81jTZGwhmQR3NrbLMLZXuSuvrcTqVo",
  "key46": "5njMKs5jZckT4gHkcUcjghfD6JP2u7VJTPb8qCg69vjFf8Pw9UqqVrgPkRv8ZEnsYHtuaLjpBWqMdpbRBtwrUGwU",
  "key47": "46RnDYYpWCKFHnPu3W3HgrYSYwRsxXyTYjLnTjeXUVnrcPK7PvSnLMJmjwL3UPSAhBuepCyWDWrr5jhpuMY7nRPW",
  "key48": "314dCAGeKJ3BWrKufyayHtFQWevGo48RSB6FhGFwq68Uj944bX6N2A3CXCYDuDSiiWj3B161AtJYQ2kBDD3qrPwc",
  "key49": "kDhVfA9dmXTir6f4pqM4z4ML9WP2boxS2pJMRLPLDnzksjEbELFCwHVuKbmYpveMZSC2qRYfx6v8pksjyBUxZBm"
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
