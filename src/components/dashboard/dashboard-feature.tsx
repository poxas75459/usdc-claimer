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
    "5kbwzuMsJxySyhcqWi3VcuyCjDoccHfWgt9WvTYW47QBsb3PPvdbKBibdV2We7F2vhSaCFhcNrL8TgYMYhD3Hrtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNVBre8n5aqGyjXuRrJTMB1asFxYtadkLBncpfTbBLkeCGRWDKAcjEwkbVPnFfQLYaDFRHCMxPyJAdnERijxxa6",
  "key1": "q4jmNNVUg8Tp2UircLwiH5kq8hjF4jV8JGqYAvgmWTYMR1z3nE1otn1HPk8MtTfothryVBeU7h7Si6KhPiW2wjz",
  "key2": "2dd5NUEjV7qEYCyf1cJDXULip8N48YzKZb7jD2dR6RDXmoHiGqwpfBH31k4sG6Sm6Pwts43vmcv5xWtcLdAxvyQ7",
  "key3": "NZxs8PgVLVc5tn6zSRP2hQGHydqq1vvDWwMr6SBifmsKRd1vByHmoeRrgLBciLPGjTZAVfWecigcroBS8yUpCGj",
  "key4": "5zrTiA56gMJt6ZHsYFh4fL628XzauyjgjdFQxP6JecJeXNG3MSabFPWEKC8SyPkQvWDLFkJJk5y6dsfoLbYvrvha",
  "key5": "2ZVEECQDkYJgvFJGrAf8mZP8G5aehpJDRbVuhSbGV48Lx2CwGB35kFhhj9Tfiuj4DMVTHjfQ56dTZ8NXX6J9QE2c",
  "key6": "499Ln2m5fNUJes6v6LXfuAWkn88Din1jqkzNR6bS8wBJrF8uEzuMv8xWhwh4okCr7QbL4vyyqMnE7g9amn9Kvge1",
  "key7": "3vmL7hT1ss6APc8um4ERux8qhzBoMDrgSHoFviWN67qNpTVM2v7i41iknDECNTF4XrzgsHLaU5iXH1m1etJHxUUs",
  "key8": "4uJRAPC2kQkP16UGJ4syYrdibv1xS73ECYBbzKqKKwL6a6ig4nNweyjaX5LAFe39LSwUSgVgJv1nueYK4b5TXK1o",
  "key9": "2MsfWZmgr2dCgAXpLPfWiDTswADNZLoZXmqPFWNi6ybQHKNGx1KRi5UrUMnwEBoyMqzpGqohsgMcAjMZ5zAxt1iC",
  "key10": "5eQSHwVdAhjGNkFNatHBsXoWmSs8tDvEgdMk5YJb6anoEBUwBy3CrRs7KNrxxPuRsLezLcwNJNcEsJzipEr5vNou",
  "key11": "3WVfHiJQVhAWXjuLpuifZFopthxFppqbQe155QPkguVwBHw8765axwo4QYxDVxMHbJ1en478REQSJHxjQnhjZh49",
  "key12": "6KXrL5eiaSgnmbDQugtCzKSaRKGWvF1GM2RLNKf2YvQ5JzdEJpH7LZ566e3UbsisbUWKDoGDGXb3qFwfMU2ekp8",
  "key13": "4rRoZRnkNmyRWLe9mFaJTH5z6XRZGc8a5tfahR6w2hCMwaxd9P7GHc3fcvRPqkwVzTAfZ9iTtvAxeHVxmfesxYVF",
  "key14": "48xmxGFDvs966vZBpw223sXFSUKjC5RfNt4UY3yrSF8adYX8uVdozQTv66sXTbgEisFAadcMVfL8c1tMYESV9uJv",
  "key15": "29ikf4ybu7ZAQQEPokH8VPW9DYcyEuPYxPYHC2uuHDJ9WsZuNyvW3PPgykG6miS4nuSanweEtU6UjjraMvu6ZHEe",
  "key16": "3QEkcvQ7ddGbcMkwKVYBHffGSdJQ7HHCUaGqQV3mCroPg14K9pt4BpEPzMnc6z7qyN59QPbpcmP4mAzaC8Svd8ty",
  "key17": "62pNgEGjp3b1MmnZCzAQa45JXBRnP11UViZqNaqiirMFdSos9MJh6Nuap6K51gUT3pNqCuhXjDZFgTvb5ingygTZ",
  "key18": "5k43Q3BemLuwCvtG9eNNXcdoDkEKEYxFHxc171NWF4PYGA395axc6i9BCRs5bUJcCjN4b5qgguvVBdQvfjPVkv29",
  "key19": "67k1hub8HChJZwHu17fKhqXYncA9mFhzfBco6Bwui5KAReAAQgV8SxUSjbyRLvHqeidZQWattj6n3ZWkJ8ccxcfn",
  "key20": "4YfyBnYpgVTp3boZVPKWZbu2QvEuijyTmbmov1cdPU8cJDSBnnjEUc9rLAfpzV6xk9QN66Ts5mZWjGz4DJiigVvH",
  "key21": "2hBNYTHPZgaBQEzPhCbD6qB3RWnhusbFQWhQSeq2EmckJZCSBB1ZrWbiPU8YcNEffSfQdRdLXNSFLY7kCv8cnw9y",
  "key22": "4BLVxx9wkQwCf5bCfm8LfGuvHJbx5STpYwPnBamDnuvW8QKmm7MFcMJkdpQSxNB4vRyw9XbxEqYA6qL6L71uTgpd",
  "key23": "5cYnKq3UDZPjFNiEcqANVB29jh8QbG3ZKSFeGpsuTDeuJJFfaXyq5GFmg9W2caaRKvsVaKNQUXTjBnp3FLNEVaPj",
  "key24": "4sYERQmvcdJdVQVqJKhLS5TcJVY4sbyxe3fMCPLY5xhMsbfnQZ9Dd8Jn4quw5Q4c9T1Ahaf4qfctmCujmGVhBn4e"
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
