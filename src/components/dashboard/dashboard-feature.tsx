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
    "4cF4KpjuLDKLiuX5YEfGLnXBAfHNRiUubbqgufozuLrvVygVoKEvMbegoSZ6dXJ9nV11yuBDcQhWfQpkr8QvVm1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXD6EgCqVnAb8FXQMFSKtzjXPbWbKYGK1HnuCYsPzQq3zcN1yiP9FoAqnok5id2SNfva6uZgriN5nEuuDbBDAHR",
  "key1": "f7TszbgWxZHNwba84HkNKejc85r7kQoaPgnLJseS5S4kScjki7GK5mD5Tgkg4kfYsH4a33zmHMzTjv1s1RU226q",
  "key2": "349M74yDW8qRwaHD8a9CyXXAUjcnyeDvm81P94zipxRWxNjkGnt4uFJ5CL2X8xGtbDtYM2qZX3Ld8YQnx3XWN5ii",
  "key3": "2gS9nG1i9UcjmMg5SwAgUXQYjv1hJgWL414ejtZkTk9D97Y8gfCgAGXXxWeL2Mw5fEytiu9pmSo8chE8FV4VcBTs",
  "key4": "44247uAtEyQNLgN2rJYNSWJHwo9zm6d1aEQ5a7vQP76zuaVop22oaijt15NJi1y7GLnGDV3GSxecqrJJh4GBafGx",
  "key5": "5ufoiXZft6mvakNwTiYtgZeBcCgf863VxKudLHgDGj75RnU5qH9wPLAvGMaPEW6Hbw9etyy1fqCbefHa8TGjUBhx",
  "key6": "55UaJbNWazWEyXx4RCfExBtJFSB1cWsyBbZRB4w2ZV13zRavae6MKRsSTxBoeX5x8w113zMn1dUgs8DFsTYTvJpg",
  "key7": "3t75X2J89o9y9hJhPNscVG69996qLVpy2GBTLiCUVCMuTgo5qXjq5m8tzSUR3vVQDQNN5tiRusPqCEvMwiCA52dg",
  "key8": "3jzUDZhh5J9QzJvzRDNghv91Ucxq9Cgyry3cRrU4LZTsKDB51r5dzcxvAcYWi6ZpF5J2VBUCPNcPHpARHfAcKUB8",
  "key9": "2a27YRbg2Uz2HN5aq7pc2j68LvnTQ9xBMLjq3gr1NbEQkQVTyUxT6a8E3VAVxxp4Z2BbdyG9b6uoiJmYts5vkVRN",
  "key10": "37WzoJxvmZxuC5dJQyyEWrtqiTLAtub4SnuuVmqFoqXcwaQUFuZ8d29ZdXxTd8J4sghNW1srvqPPiwu13KUbW9qX",
  "key11": "4Lc7zwcYc1wWMpk7PNjEuQNiKzrk7d5X1AfxKZEUsp8NFunz5M33ZXErVDiCsmhCmWDUGDo3SL2bQWTp1UxweJzD",
  "key12": "7UkqN3GEeJ2H6r8bagMW6kcNVBE2oqRfmdFXtZ2Pp1kHdfibAjhA4AzyZeScbCVJDesNWAYkhMR8y9bFcgXJv6h",
  "key13": "VGjNac94QC98z6pMsGCgmrzjKTAQfC9iqdgq9SNr5eXY9qLnUCGRByP7T4FJibedPKtNbdWr5ViE1t2aLLDRLpi",
  "key14": "3RHRN5JLYVQgQfAKY6sNERCePphup1bbK7K5Bf75us19bytfGPbgZAoFLmnG3MtZswHT8ZfhBngm6n5E9h7bTv8h",
  "key15": "PMtDU69uyXVThEA6X8cnRfmoWWCtrDuZxiaeJKFHTkEkW5xzXN2emNdyo1XSMRsDBfdTrv3k6PeJ1V5PSzvX8WU",
  "key16": "33PYCQiFtjxHnZsW8sDe5wonrv1w9sRfsx4xtSDUneBKE2nUTvdJyFVCmGRVXLiosdPc88kbwy2uLCNUsX5Wwpqv",
  "key17": "4zAHvpgw8p6b5BUBC2NhqscU8VbxytSSUNM4rju3CNrHySPwAckcfcYqdmYy7roDExke2rfnz11ezXBQpRi7NUks",
  "key18": "3v92VuBHDSsCxbRxeBhLNoPhaXm7GYBb64aqLnTH8iSdW4oMM1HtWoSVMcW4udopyGzofZfWJPpRcjM5gpHHz7E3",
  "key19": "5mfG3QnVtFn8XoPfbEiJcvKbasR4FTEFFuxmoNWz17otzt3KfjANbD2NmAJStAtnYv3JSA9BTpxYPuYst1zJCKDv",
  "key20": "61TmAcHE75PjBFRWnuYVaQwfSegVNWh7QUsGYazZurJ3hx9YuMJszoD52ixKnwCBfyyJeMp3o18LtwhnMb87dp5a",
  "key21": "64kSBHHKyYXUJgFUqeRrXG3QW92rsp4p62Y1rpLMKTadJ5VJascivU3N1xZhoLRq2JBc2Kssev612NftJjyiHo79",
  "key22": "4ktmM7niYmGS3qgwi2Hfps6jUdNys7PcM5HVkp1VWTZZHA2j96SwvyGMHaceJWCj4TWgLL15xDFPbFANiwY39txE",
  "key23": "4UJFzqwwV4DrHVrPLfByYMUN8okFAqCAGCNSTUHtAfThBsdhC6HcNX961Xnp2ZL8wwLJcY5NpHBMy8kHAfSey63k",
  "key24": "3UDj3jBa9HrQUGn4gCvX2vzeMNcifq9Gbji82yy6pC4hZ1tJS5nHdqLyeaVhLdYSw8QCyz6dfsuUX5TVdTCsEBRY",
  "key25": "2Wy7BLvfqnVvngK3FGobhmNtxDxa3HxzBgXUcTyN8jo7YkW9CFMi6CDfzZg73hYh1M1RrrVw5ss7S8M4wftmPNDg",
  "key26": "3FVtKUHkjdWmJ2xHDbnz6iP4PTmBH7qeq9YBu8XVoaHCr6D5mP4ooU7UMtDU9UP5H5rX2JAcy2Vk3XXwKPGzNj8Y",
  "key27": "43xGXhu6U9kuLnn2YPvgMpfT4QBXz5rfaY4awRwuoagxckCHn7pqrSov8TQSPMRBHYZ46dpEX84SkdAFuzEMH85n",
  "key28": "2V49RNn5eNHihEBS7jvvJ5iWfU2ETsHidWDqY9nkrF6s4VAc8xpz4chWjAXMdrbNuw8BS7Jug1K9s5rVyQ6q9dF",
  "key29": "2UnCgZZJTcKPQpQ6yXJ4FXts3ZtxFLpErfiHBJNJvMnAHqNgKcD9XCbvyNSZpySCWWSB627f79jYbWpqnHA9Ac53",
  "key30": "3XceMJDLHk4cxK922CjBG43XpAFsPgwBxUoJuBow7yr5uNjJNubXYbRa2bH8rYLSGGCVAQJzaKWLK2jFwpzBmUWA",
  "key31": "56DtfqaLzNzxoZBg4wmUHYzcfbz8cDDm5vEvGk7EDU7W9banb9ncVpQB3fwS4bvU1EwYNpTefsLvGeHJffUfHjdx",
  "key32": "3oqqThJoTQdbjVW62XcwpMGCJWXrW5GjzbTssRq7cn3AAB6WfrdKyescdy1mhqeo2LEGRLEZRjYmAUQXPMgjHyb5",
  "key33": "315FRyWE9Zb492pHg4yuBFwjdRZDhYznhBPA6q88SynyjMhCuVop8xSrA3jSjyVHV3auvE5a1E5aH4cZPsegkPm9",
  "key34": "58HKctnN8ScCgK3K3MDrrgMBMrbF5U9jQ4FUiwzgZ76XK3ahB4qZGM5FPVeTpojrejekQvW4dzW7r9CsUN7R8bNx",
  "key35": "YBk3Ki3raqGaGcXBBcHjgoVkDckfeawKAXQdeaYBap3jSojFQ3px2P1y7uDd2KktYg9xMnaBZXV6561J2CawYTd"
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
