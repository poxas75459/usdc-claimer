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
    "2KrSbSbGvxx8A5pQWz7CQBHCce5gaDNjyr5bJKH5W3WM3169pK2PmbG9guhtE2jwxnvqokYznFso5kyAhmfTXhuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34aRa7t1B8XBCuvH8iHFpPB4VNs2n8KZB2E4Je62hNWKXWovWxPRa4xdyj6HXdQiPAuMT1k6Bo6kzMLk8Nv3Advr",
  "key1": "RPw6PHKa5LbLUz25DvqGqZH5tH1h8V9LMPKbheWpQcAeWpqSUrYJnSFhg9kbQvEqMm1JVKQPZrwniEPkMJVwz6S",
  "key2": "AStaWLjeeVNvkhvVd3FRMcL69UCvJz4ZKD41BAZwxgVNpnC1XBYaMyhb1eysvnYbHqAiMmnNY4wFcZwXc3AKsSu",
  "key3": "Fc2o7ZbUUgWWZqg4Yn1DHV68skSyogqDfJ2UbfYMt6DkbkyRhahPEcGmDiWfZAfbztmbnfck2K6Px6CZWSMvJ9R",
  "key4": "4UtgtgR2taUGKYLjhBQAbZ1xso47ipKDLv4TGWuu6Rr53riuxoSyyn87p2dofcNSFoM33a36xtqGQegHq9ERLxLv",
  "key5": "2d5ocx4V6grxShsiaRPvGuzDPk9CbGFRgJmaLRiC1K7vZ9EuiDxjyweQ2EjHvZ5qKFTjRuk7ENdF293DDqyw9NR8",
  "key6": "5YbCPGyscEmSYmxApvwnYC1uMFrRQK9rVhzxHEtK3AMutiuM9N672AcnDyW7jqaLSfq9rj6i4vdfY93h62sCrw4q",
  "key7": "4DTwhCuxHnEUgK2p4QQDz2v3UrAvbsM3Kgxy14q6WTiPCGd54FQVu5n9nXNkDeD6rKPJWZcYAAohCJgYo4ftVHCj",
  "key8": "3SbBUkskVvkmCTpfTj5f6sdYbu88HEnJcHNDiciie38Ae1Sw6WCc7qgAKGAfbBRYGYK3kRn69Ky56PP1CYD4tASB",
  "key9": "bAFEPkTZyUJWgFEwDVyH5obrn4E8ckkyehRc3XxfppKYrsBbovJMWi25o4MAK15j4ZWiDau8PcdwM5CM2o6k5Uz",
  "key10": "3aJEmzrMbp6BHz8wiHPepLmH7iAPKwWEsCZbEt4tNho9sc7wKefFa8TY42YUyv1jTed1UjrRACuRSmVKsTRaGWps",
  "key11": "5tnfYXrmiMiwDWcVWejdBuZpLRU9fy2b9H1E9JVXKsb8YV2fsRhZAghC4YVu9ncdFAuPna667Dvy2QAfpFz1xKD5",
  "key12": "4ao5tjfHA3VqQwBygfmdiBACgtNWCFhsMMrpd684RQAmAKFGpg27rjqcTo9inKWNaQNaJAFKUSexywwTKNq2Tj9u",
  "key13": "27GXDeavv5TDAjD3EhRtH4eMFy1NRo5dTg5zmC9d8RDBJhKLzYZRBQmFsdvEiUFpbN2YjdkTJysZioDpjHMUDzxN",
  "key14": "378awYeby7q3pJi6kZVPaeH4biDaSWCVGyn4HNHA6jG8EpX7qASakJt2nd8FNtnJmS6HdToahHtPhKPPAaFiGas2",
  "key15": "38m5sq6gDcg6ogGrZoUmCMgpdZnavoqdNtZRyhSueg9MLrEcevPHpzBrhiSYvZonuo6HgG4WSau5pFYVYhyafFDX",
  "key16": "eaPPwW8SwqibZhDNWXi3HsigEjDrboew4hLQqWHg2DgnAy8S6HupU9z4CasjDgwvZjuMHmA2ckAkr4vYjVvpbxR",
  "key17": "2WDpAHefaRyudhTSTDK7sGfPsKm3w8LiYKkCjP6E7zG8bsdUqWYWVz9uwHgMjW79D4zmQWrcdqGzFiqtRHWDGEKJ",
  "key18": "4shCPJZ9Mxe8F9YLzrvHxuXzEpgw56R2L6H8K8cBvcJEBDcKqFoWXcddw7SN2ajHigKdBegTX6TemMqPYdhrqZte",
  "key19": "4oxeMKiyEuTa8byG79fCsuf4ENt6cvoVb6CsFPUB8AJGSgJvKPgjKuV6eioNm3CceDDxtx4wXQAZQ6qRLK6BytdM",
  "key20": "559TYvqoMcd6tqECPk8abg9Pt4Yz7VRiZqUN4Csxrm5spQ2ahNkEmdpWLsfBt41cMucQd9rdz6vkrtoJ1NBiTFPJ",
  "key21": "2LDtLmkCBg7FK3mrPWj7VuPHvbwEHugXghgaiJwV4s2aTk6WmoCfZzhsr2eKXGuPEb7UNJgAKyvva6U4qE3j3iw6",
  "key22": "3owUnBnG1nSJyyuC1tkAiyEmB5Es7s9P81HjysA81RmPSDuNYe5KV4fFEqT4q7cuTpULVPVt7snJEu8nNdqfasbm",
  "key23": "52i6qA7YMdpwL6pqgEwZXxQMAigeW7DSCbYQT9AA4ykyEua2Z8AEFqKFZGCuSLxbp3CstjX2iTmDWN9YiMphRz1U",
  "key24": "5n9ADCFFU3aAXdVrzTd94PYtdMakMi8RdbRizXM4Ht8bNmYDcNg4JvjB1WdsVyesUEz8KJdd7EWejkFho9ahN9Yp",
  "key25": "NaN67VNdwUaUJr43M2uJbbW8zMt8AqqpemRhapfh8qZnhjbzrbP7BAnz3mqC1BMyVHwceNfL3dmd4vt8QdeTAhy",
  "key26": "49FeHEchNZBvaSSsgbFHb2gJ2fr7gkZx5mVhKaxkyi1Z62Audd2vXtZza9BZeZA7131WPxDPwP46jndnh11fcQb7",
  "key27": "Cg49Qc8nzmDyvdEMS2bZncCtusgtyLGgHqcVguz4s77NrmM3WYgHMTwNhxSHcccWAXP7Vj7APsDkQNTko3yYbqb",
  "key28": "2hVEHG8bxo8NPV1vE2vnW7d35etb4vrU4Q5k9iiCyYJuTk57GZpXbf1ea33Jjy4Mwzf9eG2KZf945Xz3reruXtZ"
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
