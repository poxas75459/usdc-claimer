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
    "2CCttbMeMPSxgh9vsdNvTVEf9tpDVebeob4QKvyPdbWe6Z98BebBbfFcJmtGvDZaZqtqHa6g3N7ohAfNTgCJ4Qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAPyRAMddTg21YENevtAGWsUybJwwiMCUKaHxCLeJmyWkao466smKsCuAnQ2K4QohoFBva13U1PamBR8tPJJNN2",
  "key1": "5W8jGpu3J2ABAGSvW7mxosysrsE2ustaDCKs9ShMjyTXxSf9c2vd4qoho4CWa7rRQixvXQG2HgxvnGoY3oUrTqL4",
  "key2": "5MMS9ve7eM7yswSWpqF2aqRuzBttvXL3zeaivqFPZyHMPyenDKsHyN2Wcff2KMNVBBeZgphPa1pQtw4oWcTko4zb",
  "key3": "2jhAqRDnc6HazMHAGRQ95kKz4sdLV2iqZecu1wat1bWWaPs37BatSfwQ1pvjq6obxYQgKy2scoPZSwhEWXkcqK1M",
  "key4": "2zNZsy1tUsr5rA2mbuNhmcNxZo3VKc7cs5BZLzDsjkShqyjDpgDFf3dXwkwuRdjGDDp3eSCJE7mCpX4LbxHrzmFU",
  "key5": "55FctSn8ZVtAggMr4wJNY2cvM1zrDhpM7sF7UmgM7ytyhrXjLDgUvmrV8bm6K5d2qkTowNSgLkcFXgnCnTgx1caA",
  "key6": "2QSqeTJgbNSuL56b2M3iwcPWNJUScEzGVvCTVfJCsb9iHrTtjUpzjawXmJkzfy5ZTLGBto8k8kM5BMPwWunNt5Df",
  "key7": "29K17vZKop7ZUr2cduGyJ6ub3kzLZWfRAuC4UKEMa7ALB8DGNwYNGDi7sLw9zPBtKtJjtKKChcwdeLYNuST5xcza",
  "key8": "HvoFJWa7V4SacejsMH1qUekyW1G73rrWKi74YTBHXA55MzhMx1pCETnbNnZRVqGNXc8qJwgUnBfsfc45Too8Zwk",
  "key9": "2wMrg2CC3Tth1WrkyBjbfCdt7LBZ4F4uKUPCLrBZ1DgbvjRnyRvTvFR93h7eRQK22K7oCmzXz1EBJuKECuFtxuwk",
  "key10": "53uiCbPvN96r9oTSsAYGHy5Boiifak9iXuAgZgtdDHhgqbYiG6RGJqg8y4MBjEsz82AH3MatoB6xpjU9NzdDgVo5",
  "key11": "3QEqwJR95RGUB1CtgSSGJ7pDVNmPenrv6osPZX4TtvLyyzLoNP3CSaZfXkcQz16LjYe5xhio5nsbxh2MnVw1Uukk",
  "key12": "286XccX29GKTJBi8oKL9JRCy7Bsz6tsvJX3YLwScDuHvow4wCbKLewJfeJeE11eLbsjaa7kHonPEW8ggzWAkMJAg",
  "key13": "48bbBqiAwMAAZeXe3yhzHW5o1pRd6wfE1tfHHjKwTMxBKQjA2PgWP5BYrE6FiWnpB6WEJ4xm7VDPFfBuZFt4t1Fj",
  "key14": "3DSiqXqrUL3SQqvsZdWYxdnaoncPmgMiBQaHW61jputAYCEddzwpG2KWLNJ2i5984zAVtwqQBwqhitgsZmiSDwBn",
  "key15": "jZ3PQDKpFata9snYeWBgq2TC4ZSDd5b25VSuPK9kWvSTjvfvSNJWprSVVpory4RE1SiNH6UvxCrMerAYftDoByE",
  "key16": "wKb7LKPCPkucqxRr6e7QuN9QVGBDiAK4hjeVcYFdQrTC8mNv1kAzEBZVVmzVdus2n2ouA4K24186yDPUpjWn2KH",
  "key17": "4YpvCFaZT4sqzP5hpn6m76i4dihETVRfSdedrubgVFHUTGFdvFxdxTToaKgViQxA6cVdXTwBq4NftMpd1mAojCaN",
  "key18": "3BcHotLZi4csFKgRobFazjfnxssoBYQUYs1219WHDEHqpiewRmdJbG1wNHH7acN3DwX1XWacRAsbYr791cKyDrJC",
  "key19": "5pAGwNoENF2ius2xLp9yobTKAdupBakMTW4ypJm9dCkQdTH8E5z5f4JRs3PQ3XhYboM2dXT7WdaemHt4ESv8kuAJ",
  "key20": "9qe6XsuqsiEvWdHf5zDXCTJnvvEJRtjHQHYtF7C7Aq1PtzxaeaKdaXf3rAKLTpyvcHTZDAXXvM6Y7etHqhmqpEF",
  "key21": "5SSiMzKARf7M1i3GL6DFhfXr7mhuspRqvonQCqRErTH1KVBMVzTrYtUA2FqAC61M2PyeST4m6amNT1iHTWLwiAH2",
  "key22": "2TheGR11ms8C54DEBa89j6jdmy2PaWTPgZfUWE9uqrGGng6ana5nwpfxKpwmBLwjbwbfN3yex6AnXiqknUFHW3TL",
  "key23": "3kNHjnVhr89dDRQTBojPvPBX1iUeAcaMjqgQwMAYWZuCSBHHHivzYYQwUjHgYnAMbiMDoa1rMWeGYwjVgikyWx6X",
  "key24": "vaMY9gVnvK4WFmEcWY5RqoqvKcsBuWNbXKLdWvepupT3RCV1Bf9kbkca73j1p5ouajgzDU4LNK3u3rLB5vj4vt8",
  "key25": "4eQUhvHGBXzEaVF3NsJjH846yzsXyHNmBzdXzRdmwJ73gs6hYkkG1ZNj4fDxEass5ZPSyBXLtnnk3VnrEWwSZPV7",
  "key26": "4W85JRmHr9QK5VgQGLXJiEXgVo7DBNr79J9UDA62nX4978TXBLpEaY69Vq5hrhvwY8TE1qyDbYycvRtz7i67YkRH",
  "key27": "5B28ZSDbezxW23j9bWUhouxEK8Bf1AqarTTjZepzRswcsvkz1Nx1pYJHHNTTYoqS8vHw7NP5AZnXpaZ4SEccA35q",
  "key28": "5MW6kFJnPoy8M6qb6nwNmdTmYy4PhWKoFRisBXWobPTP69vGeyyRZhrN8cyms3eMaDATgqeuJdSRVpnvFcm5xXFx",
  "key29": "2FLuZk9SJoULYs661eQhSS39EGSAVrpXQELWB6beL3mXnpxLk53kTefvuxyvhfvafnkgjmeKi9CM7Ztdb3SLb7eb"
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
