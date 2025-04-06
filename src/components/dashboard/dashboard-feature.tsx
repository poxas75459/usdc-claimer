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
    "48Xu6pjwJamR82fPMZn6DAy95fQwpfxVsFoCoLUDv7MYqm9TMzJZNrTC2HWiVP5AyTFKDwuqYMXsv6kjVCFCJDvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DnL22XdnkwHVTGy9aqrFeCjo82EPLB5AGeNVrqj1Agmva2BWpZxABnooEhrGb2xNCUgEpGLjVfcpiZCnLtnPmro",
  "key1": "3xib87Nqf2uh8oQYkME9i7DgCqvtUV9KgYKHZgk9zDWhz312aoFjHNVyPR1H8gjWGBqiz91CiQWmTaNEua6ffxk8",
  "key2": "2Bu2LxX2nyUfCYREzGrSFhGfFz5wGR1rW7tojRE8qbF32CzmeykD1cVYDVMCntxmGH1Fk21Tk2U23BEi5gYjqnqr",
  "key3": "4RCREVTqeGbvXZTiZJuYjESdp7HtqdeLKDe7mpjwf1r27ZxiBf5wy2KkShimHtGGYSXA8igNvtYSCtbzLrH7JeEs",
  "key4": "qCrfszeCHTxsi3LBPYZ1ptmsNKTrvfwSnhCsVp98L76anVGDyYkxnUsiuy2WCjYEqc9kqZfALumAU7sonu1ken7",
  "key5": "56hw5rPHy7nERbrkZwUCQ5u3kX28vqoGbvY9Zq2QG6gpkzSKuh1BZ3d8rGCwzYa5W5BpPmaiKtBPEufyzKSRhoxp",
  "key6": "kDsL8o831QaXDDvsn22nHqahph9EUw37k8D2aDwNJqsNEhsQuGZZE2VuxXutHhR1bbHjV24Z4mkr4imGiFKF7SM",
  "key7": "5U1H3N3uMCirjEn6DtoMC5LBAKGVZpit5G8U9VHZQKQYPxGBDDVFo4eoCFRtTSoFqF5CGcvJzHXpF7GvL3BQCovm",
  "key8": "3zxe9TFxZGMD7KZ5iwMPV8F94yXNhwVEsRB8AK4uMc3EZiP73UgkjUab7Fxww6xvaN4oYha1DuuNkEpdt7vWaKcK",
  "key9": "61KxNAKdF6Bj2f7fqPhFAimDhF7jQrgzUb56R8d852rFSGKkMHMvWDQSHi3W7Ban46Yd1Em1biCiNoFaa3td9CTL",
  "key10": "3gbo14P65eGC5tWmiZ2iqXwoRW7kPRmAw2wX7Eg6eV7CDgJjoD1WYRHa9ddLsfPyADARtS4W8HL9JY2g9f71yew3",
  "key11": "5drkpytUBCSBzNnjPR4iqeHDMMnmfxPkdcmRw2RPf9wsoNzFqxHmafShYgA3yxLnNtvtrZwSZusM6ReeW8D6imM",
  "key12": "uae8YZcL3XyMVgTDuhJhXcKkfxyWkcmGsFdxsxuyozrBvZxD8eirHVfZzWjx666fkEgeke3z8C8fHw4mjb7cvXb",
  "key13": "5JGk7LCSNxBa4DXnsbne38avWcnoSjVsTkbeqDNHARBcnq8ED8w4oAMKoPpqjxaWFMdwNXk1iX4mtCTnPMryEc44",
  "key14": "49w5kbo5oo4eqfKmATSoL4guNHZMTUvRLEDM7GqAxfqpX8mHueS7DCZfSeDyukMzXKea1CKqLhFfUZhmsp48yk5i",
  "key15": "MrwJxSkT7YY8cMV8bwa5xuta78C1tqpKMHnBQDK1NDNU2xRb3ej1XxvmpNep5h3Y3anDhjQ4HhZKnAKAik6QVzg",
  "key16": "5dwEqSKRQZWLGYQCQQ5xhs92oYYx1VLuHrmdL2yHoK3166NE7NXE4niZt2SyEKtqdso4jMphmUte6GW9kdvfobuh",
  "key17": "4Th5so829BDUaU3JX5XPoEoosGSuCAxpnawLE9N9XBJfvvoitcKkwLPo3hmQjpiJCyFudJNxcAo3LKuReFKEEfKd",
  "key18": "ihBKHWkzv5DfZ9aAVTBHgpQbTJV9Pjsfzjg9mWNCR58iJLTNvN56dQhx6C9VNSrd2LRvcFVLoeMCn2dM2SrCtx5",
  "key19": "61ijc5SFsLPzMXptoGEWBGKmJyYPSJJKrt2CNgP96nLCQnCjGhPtLFbaAiN2xyfDHUTpJabuktMTCWoxG6W6P6tu",
  "key20": "3J7D7WWXsCEi8Dzasu9uywbzxn9hxpr6617z3xoocrDj9uGRfgvw3H1FpuT2S29JR8c4SudRUd8BTugTzJVvKdYi",
  "key21": "2NDKGCYaWzcfSCCXBo6XeSHQH6M3mXh8MQNFQtBt5dtPWYfdLnLH5ij5sfQQxCqWc59179Ufu3pFfrfohmrJKZ9n",
  "key22": "3SanPMCo2F3ZnvaNei94uVZa9uVmtygxy1YM9QF3UmfB281odkvGWxpk3ngK2RpSq7EbjA8PkqF3T5ACW8GqqWNs",
  "key23": "67PbUCuF5AQZzQvjSFfXi75oKc6DCb6NkzMo29ZXdLhwuC3NixuQRNEneSE8n5iWCqfwbbYxvePfQsmidLLWkbbg",
  "key24": "S8aADHF2huPsnLL32VjKcmGjYMCdYzs8pEzUG8ubNrKFJm7nQjTNKwfbUYUnug41dkXHQYHzjXo7ssF2dN3M7ee",
  "key25": "3eesfCNt6YC7UR3RjwSb6ABdRXsyy4vCnCEnzs7MUQSr4zEsrR4f7i4TSSsk3pJ9XfU1PjA2FxvYgJQaTGrEGuvj",
  "key26": "5CTW1TL7SSTLkUikZ5pZu1QpqagyuMb5yUQyM9TniSNbcRDEWG52VrFUD1oUGe6Qn7fPuhtCJdLVwNPWCotziN5t"
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
