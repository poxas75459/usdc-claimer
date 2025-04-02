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
    "Wxi9yBQKowmzrFjXttQFKzjQXUvJH4ex66N8KsntLxkTgEKPy5qkTjAFhZPv6LvoJPKqKj55z1kwj9YbMWZ7aUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVFtjmKWMeD35rNjE2bRe8LRXDtgThTquXJ19eBNCB7meamTuQ8xmaAszFEbfRDh74NMezGAPZJoUAunEmqZp44",
  "key1": "4U4fJUiASU3CfgjiHgjjojpxtqZTSG5RptAXQKVMTKYbYy8SP8zKNXvYhP96eEgo3maAno3kBZkCFsTfn78Vefxf",
  "key2": "5KEA52q9uhogY4mWaKPPLGQphRHs8ogxGWynqA9fk9nYcpuk9cLF1j2ExgzvEQ7xmw49VGQSHegh7goxas7UDr3v",
  "key3": "4TBqGCknWSeCWhkeCLu1EXncFK9yhNK2gpssBwVtkkeGZGHzcK6fTjvjg69tkrEZF2mhA9XMASSTDV9d53gwLWPe",
  "key4": "Guqj5DHw8AxteHGA2T1imkD2Qoa2ro2Ki5WQxeD8gqE1Zfo7nTkMw9frjctjNE2xos4DdQig3Kq7EDRn5wgqG2z",
  "key5": "3A6hQYHvYSQcjNe5uCTpJxEdLtkMvo3QTL7iPNYJSScYnrsQ1kzL5xX3jgR3kznW5hvPoC6iKfLbRke4skz3TDLJ",
  "key6": "5CuqCnTCRnxcxH2x9pGjXtYUBdMdbASvdBRTne4wMntFrG4vmerL3axLAJL5f5YbZdSCRLw7qnTXY5Nj4B14YwGz",
  "key7": "4jp5jy41SZexSLMumWBCe6zd3ocviAjBFADfkSKT92WWFnNvErfsysRCAF2sWv1TjcTDFZhnHWz98kSURHKNK4PJ",
  "key8": "4e5zZ4NFicqTw91rAiXjbSYRyDhNMsmahzxSsizhRRsJQGKVAUXZ5gqHPBJdz4XnfGcLuyu9pYhFKnfBfYiLNVHL",
  "key9": "3WcS6dhyjnjYV5eBRRE3ZHXxNSpm3D6j9Sr7eZx4rimjvf935G1PKKLGZPDDnoh82bDv2nSg5XrSWHTxJWwnddTh",
  "key10": "3rBjyCVQt5v2ys9wzKZcYZDPByVskxA2N7vNvuvoJnqv8QCFQYAjFjneb9EAyu2vFN925bPRCi9uSFpRFdjNrdgt",
  "key11": "MjD4iyDLutMwoRLDxL2Tri47114Nu4wSLnXQqLuFQnxVZbCx892rGqqMAivo5TNgtWzqGrc9XYt3sWyrsZtycAP",
  "key12": "HVZKzphBxYsERszXC4hb1FY5Zf1D7Z6pdZgr6Ygfxa3wVm9tsLN5UXGygU4FLWp3s2K8Q9XgceToCg1WneHVupp",
  "key13": "4DpGxtTFr2tYVimSLtqzsfmwTfqvZq27LDzxJKhnH7t4MBdnVsGF53yhcq6TiEm9PuaeKCz3RgiNqVV6rufL14Y1",
  "key14": "5yekwQgxpMGZE7KC2oCmgxdenjUS41ab8pgXu3hkEnmd5GAU3KW257SmE6W1GNktQbuxCG78euPRqhBiRHmxhXvT",
  "key15": "4r6ppm8dQjwPkkcAdGPaWym6YRxHg2gX83gS9Br3zJg9RTqaig4d4JGGEc6DrqtotN5Ts13BugYFsxYsnBzVci8F",
  "key16": "4QPaidMuREHjcSWC9WhU9T9izFV1SgNKvxvVKjaRVgn3YTUXQeqdq2JaHJ3UF8wKSF2PVxqXtYSx12XfA6zRunmW",
  "key17": "q299kHsmVbrzyCsVMiTsv33Gp9TCMmDgxdNFADWXDtEf4Gd8MvpNrrfzetru1y3F5XH1ocjijdrB5WA8kJf8cc9",
  "key18": "5ecY5rSWU8yrG6xv4RCabivH1BA5wLwyF2qXzzz494i8kL5yeDTVwTqeY5qLrYvge6MgpFHg3FJp8kSvcgXDq6oH",
  "key19": "2a9gcYVUqBeTmWr4G62J7cApBiYYE7vadiCMDoxS4sG78pX2WrA91cfLGf5Li2J5t4YpXvNLvfXtJs2zas3H7bTi",
  "key20": "4kU7PYpSZVwXfNuvqBk64ELR5R8DTKUEQ4bejeVnWYufVLr42gwDeKfcXwErkHDFRh4XCZJmG8EU56iusTP2ExRX",
  "key21": "3vudR64FAjDmw9dKkNFHhL4iXiCQoFvXDER9HgW72Pjjjd5dqTrzd7UHYeDByn7bBPSjLWLnGFZP6tdXgFDqeyJ8",
  "key22": "Kpcx315v9nGHEhAjCwvmizrfY7ry15fXmGAVLJPT3GXFuNH8m7iUA5ispXHoMmPG4WWBYdWt4FubwA6uNh88qX6",
  "key23": "5QuGiW6wC6UcZADikgVvGUEPztp5ubSbMVm9WWDkz7qnJxgoNSHF1xk88hQwdoExAd3V5JhELCd6weDeB3tYANBu",
  "key24": "5bJok8PKu9DCGqsqWVPGUZT1uHnA91UyxMAfad4kzwvjcTytPSAD4N3ytz12UDkEgL64EScCVwNXJi6n5NZGosLQ",
  "key25": "4bBMdF3ksbNqek6CcQhcBN7dyAkKJJF6DR1UqU8qq1apjuesheLhnpZMKSQbb89ToSf5FkX6Aw1pq387bUrJNcqv",
  "key26": "4XykzQtsCiPLp5syLKXZCfL4b44LNHy48hrQ3rexXibBb55q7YWNLSBxniCfCyfMD6kR4LzDw3XqYxfvusEFGJEW",
  "key27": "3nW3ArckYWrLhvvEUocX4SnE5FL9PeaYinBXviTV163LFb57YuTQSon2ycWnfi4m5XTrQZdbSgG4FaTXwHkUs9Xf",
  "key28": "54Kc1u4bPUEbNBtEQWDmZQgBMuTefz1T19bpFB4hokKeqZnXakQHsjgKtDjCubsHhSU4iv2ptvs4fsaFqunFxBmY",
  "key29": "4yBFRwRmczy222G4tkJBL16g9i2AMyKQQVreoVPVj2JAfeqD9KLXZBjYxv6qLmiRxLujE6Myk1U46oZurXxKgjcW",
  "key30": "41TZwFHEUPs3G12U5hTNZQSnxJ5SXQNjVgNjQaWnrtpLM4WqPHt4r7q83HkKHJE6mR6YY5gp2G9VDstSEGZJnSNY",
  "key31": "52DYDdkApiy8yRbCwvK6HsrcuBjSCKDs13Qn9qXrz1KRUFNNngrqYju5PT1BnDf2rVWy68TErjY7Kb4eVHaok5yM",
  "key32": "2VqK9LLBMuC2aPZt4ZDoh4sVz1R6i9669vxVBBctRKaLKQfQcW8b9bVds6XhmR1spA5D3wX9iWKYcq4juQ1xQKmj",
  "key33": "5v1cvQAQ1PDwXRSyCdHPNoAPL1w8jApqL5WynQy7vyAFdeFtwmuqqruFaJpZWj7qi4csL1BnH72am65riyAa2nB5"
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
