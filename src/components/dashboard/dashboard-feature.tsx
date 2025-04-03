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
    "AzGYV6p5K68SEVv3v9UvBNLiibX6DJPZUpSUSUvURAnBxq4JWvYpt8j9eHRXx6m1DbYEynRyKWJgF5AEkvgbrhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62uWa9182aNwQEnGT7xWT9uapMKGrbicJtnpiXkhy7FDiYbE33SXkp5Sytq43hU42sU7bc8HjUfdyzKdeoqZdukZ",
  "key1": "6dN3T6MDU9MriMJhz7F5bXf7Ytzp8WxVqvGkm3EiVg1RPtHkCeY2w5k4zXrSPfnBv4iEbjhowR7LztgsmPA88tx",
  "key2": "4Pf4YBDB623yLaqSnGLS2FST5iUQa7euofgiuHVP3gmuMz2QiCeHQBfDhBjKiwk2Q1L9P8TsGcgDTxav7faJzhrL",
  "key3": "267V9oSaP7CeaLAxWmfcoC1CMghGnrab3cUZVkrthNHH9mws5U6aKQSSXgLmuNADkbxFuVMfbnpFSJ81n8txT2vx",
  "key4": "5cfJHnP5oSr3VTnLggc1uE9ascQ9hjGtqBUxQE9MvBqntSVx8Ei2GeSSPre1R99y4DqWtaicosNrAG2mt73oAQN9",
  "key5": "51Yq5rfET9pEymVo9DiYnHJZyoT5Qh15BiJ8s68omAqRgjWW9Kt6shkGL17MJ2gaA6gxv87ZVcvr95jWygyCy2SJ",
  "key6": "4aMaNaRWA4dXMxgSfsCvLgMJHv43jRBiwG8zto3op4Hf25moeegdAoN4EoWo3s7G7XDmRiGKPGs8yt1CfsGeYjPn",
  "key7": "tB3Nb6egNrtiyRKJ6M7maZy94KfefAH7A7cBM5zTKfMHj5eey9vMghF12V4nDSGfzDbQ88DSVjD4C8yJJXbsMkj",
  "key8": "PGmwKGShR9ZNEKxcRKr8EAvJDcxCWn49J51fQ3ekfvyTaE1stJX5rJ2kkk7dsuG5HTJRR4Fa96fUYvcp76xp7aU",
  "key9": "2brxEdW3VEuJghrKBd14avG1EojQq4ezRvF27JKERDKdoga3qDeYw23A5NrEdpf6wy16ci4TGvtWosFhAESEJVV4",
  "key10": "3NaUXuhfvbbgwk8DzVJ96Ca85PWH5banVMqqgUDJJ3ySRNq1jEctNejSw9Q5QHheJnTitEuUwHAQpLVuzYctsdae",
  "key11": "4qmbLVS4ivpw57kJfCJNT582fLiQKmdiCD8T6VRi4XgKueBthLSUp2YU6MErKwWMGVZvRWggUwFMJk5V4c6HrZjy",
  "key12": "wDPEg3akyDUKPUSR9zrjMUXGWMNaYfUfsbfvnzqwQHWfjXfPAdvJJ3EjwMUFTQ1xdVJqJGJ3u21bzQykhucDyxg",
  "key13": "2BGuCkCp9agu3zEi2wG4fVq9BjqT8HzoNqDXRspH1oZdcJ911MNqeesNBzxs6sj6X3EnCawopkDfCdTxYwarm7en",
  "key14": "3vdGuUdxZFGRRzQmFc9KdFkhmcN4KCptAaaV4wAmRigHSQb9MXWqCCYPvKiYQhUbzUA1PFuTwmHmFHPRgSKtdx85",
  "key15": "5caLM7uDRLLbw69EURsqmH4gy18qk9syFVzUFhUfPZGNDErjZpnzRNne3EwGv9PXSUmYJKbXCy2ea4NMBynLUBM",
  "key16": "P9Vsf9azx7SfspbmMzksVwD5NxwCKnZFLWDQ1dc83t9kKpv7eLEz7u5kbveskanBM4RZDru4MrDTqv8pzHt6ocy",
  "key17": "4HerGZ2xizTdpg7Y2ak2azpxhtNQv6KAw91WKSDHkm4QuEdVKdS4r2Gg8jHCbPbZifqnrpHBojpg1GoVtoSnoVaD",
  "key18": "4Qa6ee2cBpGFN4oued1QJp4UsYhqqegEnQ9xkMzZ9JpUoCChFHF5gzrxPGxb6GByEMkYCQqa3R6Nab1WcYCLsXin",
  "key19": "5SJ7kmd7PwHdXv89kqQTXsG5a4sCcM4LiCJztGqDmFEZmF4nbnop3jy7ugah95KJaEbFZZ8bHqBVgrQUxqapSfDL",
  "key20": "4Y7sL1s6zSaoEHtftBfTZZf9h4Xc8AKd6LroZrMbyWhxFTCcGGVYvvub9xZMf6UXPCKki2rMfVmKvQqHDWukTgZM",
  "key21": "T5bTTPembi9TdhMY6nK76LVx3vZwsWrbTDmjhKVNVxaZGgFbHnCLYNHQpAJ6maXjFUFdfHrCfasDtTx9QWyFsdx",
  "key22": "2CPpqgdUge8RYdeFoCM1ALsT6vtcMAHT6jRinjoibwT4rmeHFmpi9vg8YpwvqcG9wKFQZBpZVsF7HgkuNeYMUCEP",
  "key23": "3hYZL95BUEB1PPd72wHEPm5nGaG1GTP5hCz77m6p4ZNAt5AhqnBN2TdJUbrzScW7L5HzTGnQfGiWFG6aEi8JWQx4",
  "key24": "4ZaJN3yzKYjEheRZY5bcFr9EuSSGjnvkVQUbyCV8xGnC28pKWHniusB9fSePiiT2AKwWHLLowrjNgpNWYBmDvEiF",
  "key25": "379XTugpu8rH6NQfT8TtkxfDwyvb7GZZMFKnqyMSWTqpTAiAXBs31nVmRW6JVbjxFoM54Xvoq3as1TiQgshDF2Zz",
  "key26": "3D9ZjX68f13Ju1wGNDk6PzUqJnEBqs3rqvzvN4EL1P4BKWGBDocjQVH1p313eDE9StM1yeqjEQX3xce25QWZMioy",
  "key27": "4AkeRXWHEFDzWUp6i2HXbwufSnzTUk7NUqGY8d3mwmDZTtoX3zoKMT7Pv8gdgdDGefbkPoJ17mCg4nWh6FahZaLp",
  "key28": "65GivvVkQdHcvbW21HxLrYU3yn4HF8hStiF6FnrSQXTdiZ1ySo8PtGyaMBRNqsi6pbxrGAaTdRTGQ8AXewtfT5BE",
  "key29": "boETW8bdg6w8ekpdm5qiLnv2UEHJwu6UK2MkEZhqFEkxanjdKNgoqRBM5b2kMXQDiajvzmyZuJEsazhBHtbYwBu"
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
