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
    "3BsQ31vEC8rL4tVVKNKJmWMag6yH4oNTZuPsHgLE19bTGby1UzX313bnR2fstTjhF5vcDoAuiSDXP8CD6ssXixrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YW261ZniANeQj93wYZrLer7Jd1FywpaccmyXyXhpSJst2puqU6PQNPBUkXYojsyLNdSnzF8gz6Lm2GZGwcXSgES",
  "key1": "J9GzduqdtnsxbG51qHdxWQd3Wrca481QitJNePqhhARhPvT2Km51FNd7eqybxriy6N1yLzZx2TPesgiyxzcA66E",
  "key2": "4xD62QWxwWiPeEiDH2GBTjReemkEX1cgCmqJqcxiTgrE7754Pz2qNVQz3wqCnoMEBZRGY9sTd5aY5jYixDoFwNs6",
  "key3": "5NBRY4dEHy8NzskZKuogAvtgZWB9v4nekcuuBpJPH9yCMXbi7gjCCAp4oTZX4HHkRwb9vzsCpS8YXcjaBBu7VWT2",
  "key4": "3c8LqAETmX3DFFrvbA2dU81bESVME7A8QTU4cgjhBzThGR3wzr7mW85MC6jzjnKqx2fFPNpCkCmjG1DBqAe2vixW",
  "key5": "3fwpnxynxNioXSyBL8zwqbjSt2Txue38VEAvp3uuJoTLfHv6LUuQoDig94n5dzoEju8ptcnhkX96zJrQFuj6ugPt",
  "key6": "2NFn1m9dpEF4ahvqCwHjatpnL9NwGeRxRFtBS9HxJu5LNDXMZhRJoZvzGWUGakuaGivgeV8LMS57vkhDLFHSWSBT",
  "key7": "28rS9HdNvX4iaBygrFRfzaZJ41GGmQJasdSBM3KPi5xJKesXfYeF2cLNowjx9TYQxhDVjJg9U6h3PUnKgwRfdL13",
  "key8": "5nM2rZz4MqEkvi8kcFPifjCK9h4sRPP55bSugWsMDS3qAZUocvumEvHAKD1qSwacwXVYkgyakg9cjuZ9X42bhzRs",
  "key9": "63x1Uc13VQitirq4XnWivDAxRc7oL1R4Pr4cxvw5vAEkeEj2v5eCxe71CFzhBTHxuJAMuCjRGGjY9UBAa5iurZor",
  "key10": "4hc59dNoypc9VvqUSFJr67dTYdNBBtrENcANG3xJFtMXNco8J17HbQ4adZBGWVtmXFSYuTJsJum6pr6fTEtCrEVQ",
  "key11": "3sDY6peUr81QL8jPoD8ory86cno4QHLFukrk1zRt3cXw2XFdfGWXrArPkjh2439FzHRkgMUA8RhHmbvbGiXSscA5",
  "key12": "3F7fzRcfsfFdVNZ5HrxZuRuhyZz2PBUvCPFYcdG8dxCjSC1Ekzf6reNsRRiXaTpjPhkuPpNms8YWXs19xE7kM3AH",
  "key13": "2n7yvKEoJUaZtgJfi7aur2NaqbNkJWmLh5VdAukjvzNd1AA9rohi6BsBYBwmA9ZrAkJpgep3vCPz2EBh15jKZkTQ",
  "key14": "5HshTpMugiBHQwvnzupDSEaHDXXYDczStGMAv4FvWe4GQSMX9muWDqqigw84VpnqsypNHb6CJtST5aCDQUtz7qzR",
  "key15": "4Za3tyUGES2agu4Web25UDbiVVAs3t9cdtgiYrs9dQafHBGjCjEVWCL6f4iPJLTHpJkaycnd6DdUdYd8tVNZi44t",
  "key16": "3LdkJNU6dpTikSxqJ8kkcjYykncHvxUeER15rsf8uDqTUyXyGsvbM5vf4Jh3vDi9PrU8N5jNYkbpXYgwfRt84Fg2",
  "key17": "4GRqwVD7AyqcTHuCoxq1mxq8TU8TTQwwPfmcwWuojGz8SehdSkgakz4YGGDBjA4v6GVqmMsFHBMWFqyK3Vh26hhi",
  "key18": "2e3t5Xmij3q3U1Z6Hzz3qZsuDghdFRNtJ7ACzz91m5CRP3YDZJEHAuRSuRAssFiWiU7wZHELCfUBEh6cuxRreVFD",
  "key19": "HdSpt4YgVp7Aaf7rMyab2QH8qss3X1XxL2mEjngabvt4qaDNyBSx7vQoESQ25zacQHGsR6gK7xkUJyvmHgwektD",
  "key20": "rG6xy8sbRQZ3FvSSgfpZDqZ7FgvMXJzsPPRwFLYwKRJYSaN8Jh5RrmpwR3Qbq6QuFj2Fv9Jh2v8EbFopRHE1UKa",
  "key21": "KthrgxKWKg7dbymc2qZz7LqJ8W7xg4G4KVuJ7s923QCLTDDQ3sCURQaHpMpgrbuBLP67NvPmjmX4QLAwkyaqvsX",
  "key22": "No5gQjwj4ncFEvG5mZWZXA3UEPMsReTL1LE8kZWjKHmbU1Wn7AnpmJ8fhomhLHaWM3tkC6VVv56ZfqMMyxY89ec",
  "key23": "239S53sADnVweQseTa5E8tGjT66MHRjb1hfCQwq8DFyjCLUTJeNUiNkHUJ9Bcic9yDLQopn1B8XRmdG8Ym5dN5so",
  "key24": "4gYUTfkKZgUXVyj4BmGwjx9QcPaeCgwbD3S9C5J24qUbezdRkXPvFNoXzcYNFyANarbKyqa3Ytyi8GBLcN2ijSqL",
  "key25": "54wYp4oiJYLQ5tnbxHq7CJdbjpjsuzzSZqregCRpGJ5Y3U1FstNPErZTULsj5rvqu6TeLYUMNAX7e9wvGkQusEjB",
  "key26": "3N5ZMtPW2XvFc1whYykE5RjhYuABdgnnhyZggRew9aT578PhJbsiCPjq6MnPywJhGCokcG2J88292LbTvqXvs9oX",
  "key27": "4GmFpmxbAGopGT1AnfDFjx96Yfdh8dBXzxGUWRxrfTBMWx8mCgCsgqsS57JrU2cqNFNBu4HFojKa3XZgzXUqmZuy",
  "key28": "4xdqiyQgkkLP9h6Re8Y8LBb7Te4TedewcoqRRsthyTmrUo1kmwsYeHeECS55FPedFMZv43M17UDhayug2dNchsMv",
  "key29": "d31tjKFP8M2dkxjNjLdRQQPxukV5bcbx1EJ4jYgnMRHWmv3YhRAR6o9yV1bGK4PVPudabwSVHUWGyw1ofKUTER4",
  "key30": "xLwnHNGUqEP2jfDgq1RgFKcNxDA2SfZexjSM8ghDvuAHSbdeFeCQVw8Dt668cBS4aLxA6tYEfyBJ1tZWEVKXfbv",
  "key31": "2UJxa9iTy3krsHMHiELomgx71iwc8WbRSQvTRyWj9dj5zbPUteutjoiCivjko6bJqd5gq7Gfx2rE3vNLSQFtTQVg"
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
