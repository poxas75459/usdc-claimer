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
    "4dM7HDBBhcFv5D9iDFBqjHzyLbHpLVPvsX8WCqpr2L1WPHhKRWQNXSEyketAhfNmvQWvA6oKsH9C7KaS984LoC1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E6YqTJec98xFND4PjttYUoFrmN4qRGYHQtgnTwKhstUUeQQfh4KbaeEp2RBkFzGjfWtPksjyAqcJ37tqAAPLNA8",
  "key1": "ebDcT12kyE94F7aF1GyHCf9YBqXmsGDPXnGwhNvN7ngQ7k1B8Y7quo8kbk7o3yomVQMkg5VuN1uZQtJJJNJZYnT",
  "key2": "5we4WU8xodGTdUHJUnUzwvXkEvwKp3i5P2F1869YyBaUw833tmJ6Vdtdr9YCJ3ZxzsQzERWnoDoHb9zCrYqroP9i",
  "key3": "3jrVGyaEB2QKZZ7kFqeMcodiiaoZPwWqJXpAZ78hDeF3bUD2w2MvEWXtNqgNbcPakc4xcVvptaRjVkLA4GmPEMXM",
  "key4": "X8YeznGV9F3PMiNTDwsixz7zKrJuZ9MzE4MBSCbw7NaGqBSVaUyDVEL7JYCAtLNfzb5dtRkkAsWhRvp27Bjhb51",
  "key5": "3a8AEWQw8BRYaxjEMhSyd6Lx1f1ZE7SttZNmYiyooTYdDMU16cysEzK4MnoRc1sqjSLMN6L3JdGT1fzRXCJ7tq5x",
  "key6": "ShmYRnZ8EWbXw2tEHuj3QasMrsfVKFVyT9qu5bojmJLxQ88oFBCqEf4iwhh9dTW8smWZYTUrxEU3MhqtCNfmx2W",
  "key7": "3zA3gSKM8gjmZKFwM4zB4efcWJeDArJ6kF6cmPD8urGxb2uh7mFf5L7pNcC8S2kNhGVdoram4KaN6nLSmYakDbtp",
  "key8": "2xMaSkA2k6e8R18X3QN6Xcof8H1tEF1vWsjVvrYHampTmgDyiKvp1DgQiwBwD2FvXLcyQkEASPGn8hW3o6gbScPW",
  "key9": "4Y9G8ijtQ38DJk6YV1tR2o4tmiYPG9HN7nD1c8h474KiHiJF2nbzwJ73vnkrU9yuFd84uAWFw4gKT831ujGrxYxJ",
  "key10": "vovPks5bBhW57aSiB7hrXC9CoGsoqrCbDXnVL1prDugmbFTxKQ1EK4mwZi1vvM9RAuE5DxJQ8fJZqij7853abCw",
  "key11": "2xjrie7f8DU3SBAyRKV3LVorez8oUa25cJ2gGjm2UAZYKYRkQPfbdRXZ4ct4tUJi1FiAG3QDfyXeepRHFozY9nj1",
  "key12": "3uzqTQ3tjYCiM9STWeUhcZfcV7vs8hPFFjXFBMZp2eKa3dPSkdsBGxz8oFiZ3muG4UJNBywFCTJNiv1yc9uJy9x2",
  "key13": "224xJ6F5nopPpu4Koz5rvHUeZ9iE5ivgRoNp4ZxDDihmDyXQabUuJSD4QadNPnY16LbRcrSxJaEzeSatoo5aXF9N",
  "key14": "56DuDpXbnGpkWmqadMh5LbPFZ23KFn8FDhzBacCSMMqoA22xmis36Jr6LGtTAqtG2K3AZsHgT6J6G4CnW7iSKQ6z",
  "key15": "4j32FYSDjGzyFaexWBZNABxuP3yB3rV2UgWnef5CGr9ypSD9cmNYKHmPabhbNonmB99eSdkPx4L8n7o9t8qrJxeN",
  "key16": "56Cjvf513UhE2EL2AQhpg2rGr2X4R5nYeysZd4S91ce4EEzQB6fiyniZgea4g3UrfoQr8DfU9XYJhhQ3RdiWpsUb",
  "key17": "SnXGgcKNZgTXUg96J22sux7vBPczv1jeZSeXihMYhgxDhU6cZp4JEDW2u7iHp1KWVjQ5HXfT32ZpcijBrq5T5Nu",
  "key18": "3cyjRFRK7nFpBgg2FnBRQ44oRedTRqhdwCLeKt33oN281Wh9nrzf4j3CotMt4xzboiboJ3wM61NSfbBRfVPpARCM",
  "key19": "FUeSXQVoZohnTrpV8cuSGuUmUndWRZP94zRwiU5bpBwciMp51iV9Rb24YW3DwiayZEJaBumTtsCVjmtDBuJF8tn",
  "key20": "4ZVFHiFZXSgmtHEp7pjBYdDxnAMuMyeS5R3FoHBJ36gFDuCPTvdeGYjALPPjFtKU5wE6mTo5L7ZSFBgosBwzZz39",
  "key21": "pjxhEFkHJu8EzcrVbE4D7BYkudcnYQaCCVPp1GgnyAoZFKMWutV3NubZBZL7WdrvFwSqeu4FmYuXTfVahZBLswJ",
  "key22": "4HupRoKoZkqbDEH758ff5Kd6XjYSbLibds36MfVmhtsuW5TrSTddvT2eEPs9VeivTo8GufYv4x8rEyqNLxmjdrFD",
  "key23": "23SwpHhKXCwy6iX83mgjuRfNESCxqDQRSFiRVaumH7oBuaWz978uHAHwPjwqeBkPmLU5qyVHPFpJj9z1i1G7aBGq",
  "key24": "795m6RjfnAfFN5fdYau3Waw9cm8pBNuGq7iZYz8R6PnBSjdbduBr419rGB6cF2cjVGMY5GLfe4TB8ejdy2Z9hg9",
  "key25": "3KbXEFKxj5sRjmkmR24wGZgNH2CC91yJwAc7T1SLJ3xwpzrqswyEnTpyBPScnUYFuT5p3QTtHEC8nDrN3a2sKNPh",
  "key26": "5ZVorbWfhGaThK7i28TE1MkDB7crw5KKH2YFeWQ6A9YDySFm8Rd64Cj8Sa6ko1seKfW5PqWESSn4dV2Jzbz3sy5x",
  "key27": "K92ev1at8ToyzVW7WsHbuC6voNvymCCGuXrk3NGoSQHvsLvxtXV86pdqX45QjaJypbVT28T6kbY2FBV4XyNe8FZ",
  "key28": "4y1BokEghLRcePFa3bPc4SgakEjRV5UKNPxhWQjrY9CiuGDRMQ5H39eHuNEYs42LqRWaMSFv7nraPDgZAFR2bxKj",
  "key29": "2Rke1FgGPoZ6wvcCcbnsWn5Z8Xm3yY4oZG4nQSEX9BwUXMUcCk6VgaVK4LMG9DKgTGb8p9HPUSFLgYUxR8FJTSdg",
  "key30": "2TSfYrTE2Xc7ZuW7dHvb5cYziqba7cqUJvxFKzEXrJ1aCUeCF6KunogWu1vA8iunNjK2VY3aBk91GyWsTCdpv6Pp",
  "key31": "2m2d3hs5xZmTa4qsCtFfke19Dvg7otene8a39tTg6oixbfHo2AFag1fei97jLLU8za7kW5h1eycwKB5MuxrmVCHx",
  "key32": "4fRgZbSeEZjttQjEx3T5Tw1eHG65ftW7qWKdv9ZQufLTgiL2n8pyHQRQpDNj2V3j4pwMPG6JDd4TGkA5pqvHjNPF",
  "key33": "24ZAWycJxGq9oo6o1UpPwiFDJBsq5emEAm6614gLQ2NCo3LdmtAkneVAFkanvgvVzeaz3qv7JDCHNy9v8tM8dXFv",
  "key34": "5jvi6AAVpBr2uTFTZ8YayMXuVa1S9NjzV7Pw9GVLQmPZoRvJgdgA9AtcbHmwxLc4mVxyRgu3TeU28ffCtaxtUB9r",
  "key35": "3MfQpvHVyi6A9vP8dxSNEs1dbrp2qYrzXWHLWmQgZJZgB2BHM2mPnt5ZMsDdM7DuJEdPwjCEe46xyKYXGZWDN4iZ",
  "key36": "297ogz8S39c6U5SofEGFhCTScYn5hqJE6ZWB7dDk2QSSuSYJgG1zSmkLgwSQqd2DFnFwsm7dsicvaWcXAwjswaLx",
  "key37": "9htxPMD91peA3XQAsuXHDc2mqpcLfDmbxq7Y5kXvwU4sm5jdUTxTtDA4gRnwoD5FP3PzU8g9SrS5DkzMU2i8G9L",
  "key38": "3c7vqDzQ1uVH38ceVddNRfkn9vZRDASGemLgmLdQpaF6tc7WzKjJMuj1RLrEp9KtLg7uvEUX2YeGDitXLhXKyJTU",
  "key39": "xskQaqP8pFv4VGqWs1LaGTn9PiMwi762FjcErezArnsdym5NNTBawL7zNN2Stwc95ok4k4qZk6nRyGzzuMrxffo",
  "key40": "3tJcodukB28Mg3jtWKbog2Grk2r7uwU6DrYjZ7LfhrPE8Ak2C3eoeufE1zZA5QNXnWMHNUsc5cEf9MiJUgTHfgHd",
  "key41": "5wANJ7BBoKkAz4nN6ZUBaYAspunN3CfgF6k7HzsDLDrWu5o8Mrq6k92QdRuaE7SBMCUiyoM6LDxC4YRzrgJ83zER",
  "key42": "2xTzKhqTz2QCPreBNHHqf2KuUMNBeDWtkNan77F6ekf4erMrWrazy1QGK57ZSM4gaZozWN7qfkpXFqETYmzQxTH4",
  "key43": "42hVzm2ewLBPcmfmk58nQc6YfWXRWCzPmJM4n3h6x9SkzgqX7Mkct8upHXaMP9TJS1eNZ8CotsT373yjFUP6Hhe4",
  "key44": "5ndzo5EAyi7N4B7vmF18T5CnvDENmdFGnJq73N1menCraTFRSySw7YVWgFt2hhuF2i861bZQ8GKrZ23HQ3VFrk3U",
  "key45": "ioSYm1HJGpFzUgMnhTT4SqcfmmYV2UMX6A2wfFamhupctqzcN1Dj8PjmckRcVV9DfpxuPTsJQup4JxSCoE1BJmi",
  "key46": "3p9T4hTsKz8ZhyoBrhLSULw737ujrZErm5cS3zikAwTNDcimDLxG5HaC92rovfkTUXXknod2NohFs2hTHwP2BFRr",
  "key47": "2pbW8GP8mZkPeRBs5hKnk3WbofHqsvugs3UrBv7hKunU5zV7ropA67h1isZiu2Wsd1QsaqsSvs75DxtFDqFSKwdT"
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
