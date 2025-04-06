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
    "4oCJ9rh1GSbwKmn8ZDbfHzsRNwBKuvNQwMimV1zz5LyTQf8rwhuMWkjmNUpUfYA76ta8GHYwwh7yvmiiuufBLjPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4du5SLfmJG11iY49knLQDYsWWWqi6xk69uRBnpBsABkcLzkXS2Fz95ofpFz4UM7unH8NtH4xc6beZt9jfG8HuqW5",
  "key1": "5PPUBYbtKg92rpodrjA5Kt8JYjRo2j2oFTgBGFGbD8WjH3i9XawVfkUADhJgXbCT3xyij2eBgHV74vKnpZJ8zSD2",
  "key2": "5VSXgJHSxJSgHT7wFgKkKHj5XnjJRBRvkoLEKTdDVFWMEsenTGVrRZCT7pVUpHKUW6REhcc86wqJHYpz8gsJYAMz",
  "key3": "JsDVwJANuvbfaCFRtjNBU3dRm92PTnMCpjLy2wXq14YtpPGwu1AeXxoF66Xm5G78j3BYpLBxLmDxjduufRCWzND",
  "key4": "Tstfn13WfvK5TzdPHzNjd3MCQrkZ3e9FGQXp6p5cvfe3PdNtzvzy864qtEhJCZgjEEPe3KzAQ2KM8U3HKfAaz2K",
  "key5": "3pyaJWL3NFXys8FipLhjS8YDuW6Up1Gx7tygZz2YoCG7se2rV2a87ZV3qHZpCP4J6kxsZgrKajx2CnP2HXgteVu7",
  "key6": "5siyQzmpVvB7bTTptdFxVtBEsWkVf6ATK4rirbinYP7DhpRZGSw5Q7pQXybfMvKxirebTHry6zwykJZpscGKe2Dw",
  "key7": "21mHxynzpJ2fokH69dyVRffF5rqbLjnKrCkcVfjgkx2DVURPrG1MSofkdyBYBAr8y3syFnV9zpKYxBH1DATYibp9",
  "key8": "2qMuHckL4JmUuBN4unSTE5MxBB9kN832dE5TtCBpkQ2RhEiBdQu6gHXFNR5cGSRgeyxTM2ntrP2h9bJJEvNsZjEv",
  "key9": "fkfFF5ircPpiC6ZtA1BtggCoaroAB7XTGJWmQBwZ4zMThSWe2qymGnv9SSSmfX6xSP2CPtqJd7CgKsqyPannLYF",
  "key10": "4AZA1F8rVvGaqkqJ7kuAyxQbW9zCJtXuJmWyrVpmwUVYHpGgeksefbwuBCRcywtDVWsV6piD55ss9V7qxW1dQm3Y",
  "key11": "yAbGxcHMVpqyVdmbCbR1FB38U6bJ1eowGsYhaBm6HM2cGNLpFTpcPdjN8LsXDWhJ6M6BLfPjkp3X5yQXUNpVizV",
  "key12": "5ocJ8iXrJdffumaRLiM6tpm6rEJB7qDsmXzPcLGajYXt15yW831rjsFLhViW1mDzUDyGCxXX6GuXMXazgURgffr3",
  "key13": "2QmEMsmN7RZekCrLbwK4VfViKdm43hVKEVTwQ24MUnPpKFdkQhPopq3GR3gTk7Z2m2a89Ue24jTwi3unXaonKzjy",
  "key14": "5omVtdNHbJfhBiwh18FoRJViPJe7hWsgWwn7Dy9H52YpeY3Sajgq3Gcborf7duDs98XiEf4TqEB35ghhKcYxji5w",
  "key15": "e1BHyWjcW7ijwzQhDUEmL4c7BCvG5nbEauvPaMJAB4HXTShKRmfqkFcJbw9QuW3sSHXXF4SG6JYyo5Cx52UcDyY",
  "key16": "5WQpKoEgztW6MqZyzasHj2NaZGCgSjJeZF4c1v4ah27QMJn4qQf2vvppwwPmsFwmDYcXzhmtq8UpN1KAbVMkme2t",
  "key17": "2uDozsojuzePwGd7cJDayz3hrDfbzreCg3zM3n8y23Txfij84mWwreoYeair9ZiSaoJpNZmHYsoMZhB7A9CioaL3",
  "key18": "2YewFDjw1HoqsAAD5h9K6pu9sSjqgS5EzERq6yYx22J1kxXZEGuSMWCbBiazSuNN3bcp26FYzjhJ8UKQjzNxY1v",
  "key19": "4HBw6H4TT83uQ9wXDxR658i7NcPLWgzuBK7AYqxYr98HtJ4waqP1y4xEgtaTMRBaq9sJsKRwf8jh7tJtYpZ3bUw6",
  "key20": "4Hif2wKnXAx3bNkuhTKtspzTCi2JkGuE9aB1v53QX2UV6HPZ2cAn81BdaoYzoVmNzvDvhzGJgkT9DPe8S53fkeUw",
  "key21": "5eMNk48JLQzYun8RivPLtABGnU6gw7QwyH5pmkH6xYJnNpVaZzXixRJXz2WyHveFfyyREm58WsA996NjXX7o7zV9",
  "key22": "AYVFBydsDwVsQG3jGBtZBxcPdPnU4KEo72VUnC5GoEG38GqBq4R8r5s1YkgHty7E9JaP8yRnTLQ1u4Y4eg8f6xr",
  "key23": "5GcdL4yfZ3NRRHvpbBSWy3HbgCQX66xo35K4UeeLFdYgRSh4abtTy5zMJZaui7thc44VcuFeSCfWVDATJmTaRVe9",
  "key24": "rDrjobKVVyz91PR1URryNzW3PqJEDxACBmigRdhScak1zZL7UoUVkSqYTtdH24MvdAq1HhaKxUXuNHPao73woj7",
  "key25": "4tb6CSezq3AVKsMKcYYbSH3VAr2vAFRy4tkwfrj7ABs4FZPXDrx399vn1vqXDwWKzb984akMp3ZN9Brbh8NsgY2",
  "key26": "2LJquqzkhgdKdyQYMAM5ZQAtw24Fek9HC6vMCxTsLWzvdgZuqLf5zzpfm4M27e3LdersRWvZarEQFbBuKRV7mL2W",
  "key27": "3NAe5na4row5q5WYvDHXUsUWheLC5ZftvWDc3oPAqmnLvfaGJDfkJXHxY7UTfFnrvbXiPnjnJG1Yd35VXZvRorwM",
  "key28": "4T6yEmYZt8JB8ULod29vqd5Y4UFAfJNa63sDLCWFntUuncd4pPB2npRT5YJGkFgkJkAG4odmkkZ3bTq2v6pHVTeD",
  "key29": "REH3u6yTo6JY6exw7xJ3R7jg61SB7K9i28QyBFGC5riRiZtkCjSAddnxhFR4WPH161JwxrK799AabojitQ8vesP",
  "key30": "5rbLPegEu8xnYhuddgDNXHcPtFP1fQRS8ik12HMFQwnwf5ft3Zw9fPBWs8r9qG8SpBESUnCYb2Z3zxuyfEcn6PE4",
  "key31": "2ZQJT1aKHV6Jk9vL8CXPrTdryhv3uBTJh7cHdjYkUiLULvcFCAf1WeqB73NEAYuxo97zVDHufgmiQsqkCjKzb4Tx",
  "key32": "2fBrPECnMzeTeoPJjcTTRZkbmpsFCTzPjHrJWB2fP2ziUSrgWYhxzvq9tDX2AJE11UKXyVzfpEfmTiVEx4jNojsA",
  "key33": "5MpNEuJzssMQP7qHov86jVsJKLFtDyQPVSKdpYcbD7Y31RJH6unKgs7T5sPYvdJo5Xu7r5rBKSgEpvMiVK6U9WuE"
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
