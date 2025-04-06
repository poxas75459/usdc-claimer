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
    "5FsyZ8YekhPxTCSYX5buFZY6gzNB4JpLpu9BcPisu3w2T1Vtxw7ZYSyibNiEnfaP4vKKg4VcfjSep9MejGafHeq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d151UtqduwhtDVmMikAKVCKSFrjguJ2MAPdfnZCjgphVYtuwV7VKnVuaFGN1y8gcDAjZSZuNrSAqJwuQeNPxHxQ",
  "key1": "4kSHd8B19GjvijFBqtxS4rzoJRfkieDEAqgZwexZoYGBVRYNLEc8KALNtsExeywmeYdW4wzvEYwgviRLGo5bzumk",
  "key2": "5NNHfaMjKznvvvqB8ruxhxz3eadrDiahA29NZkwWDPEx6himtRnzuTr6nY7RoakGfToppmpWVwYGjwUVL3v1kXw1",
  "key3": "5FxstaJmkLN2moARELaUToFxEC4ARwZLxwgaxE1ojZDL9UBuoxSLP2tFcvBg2HfvWg4AV9gCkDotmccaw5qTqKh6",
  "key4": "47uPYNk2AuuZUoKaBRZFuDTbf4surK12vbTkruwQiKnQeEi1fTcFSRyfcJYDuoBCPsMLLyVA34fGs29oJEjyDC8y",
  "key5": "4wYb8JfXynbcQLmeQKCspkhNJije3LGTSfWdzACHXGAA9hZrxtVjWoSZAn7xw7VCCg2Luz5t1Xoags2t1hHpaArR",
  "key6": "5sbEMFXwcTASAHAUgWsdFnGhq4Tuqnpo92hGawPFKyFbx3amoUkCRYwQxy9StcsKKRDoCbhfADHreFSrVwT9Jz4m",
  "key7": "2r9jTfw2mmqc3feprDu3KvecJcJfgJTvUvfgkg6sgjMyyFQ1XgucWH1pC1kit4AAdo986rrnrW3nraLLjQYYoRxw",
  "key8": "sLdBD7f5SuNpHLp2Y5FZL6n3a6NWBWR6mEQkdS1mCYGhaS68qDwD22KhreDTsS7SThYBHCTbAbhp5PDj5hSCnaS",
  "key9": "Ts9ZZXWvFgUXiQ5BQUTQTmsj6V1b12hayGJwQD12VHMtfi6Gm5Bzb7F4w3ZkLcfDkkt8MrnCmi36rw8YVmVNpKf",
  "key10": "3sFjvna6mj9QaTpPJ9CYgwCg9JjmyvrHqfr1tkmTHP9u2gtQ5ceHpkSJyaUH2SQ4ZqoX7keq6hWJN16gwYraAzD7",
  "key11": "bcQ68TTHE1HypDYPVNGmVbcTYg2KJwsWTtpaACNuda77FfX7QLFDr2d6rZLGUWDqBt3uN6uGuSc2XuJu7bTgevr",
  "key12": "494JbojhTz94YUxhAaQewfnHsX6HQuui6YgisgJoDZnixTwwzz1SJzeRiJTKRCh1sHzmp5TdCcecifY66YjLfnP7",
  "key13": "3TUK5p31GWHjPUd4sgmRv52TXKbxRreyo7rjdHhZSAdYWgCrp5Crg8yodhLhdD5SekRpANkcuvXA917hv7SqgFTY",
  "key14": "3h6p57hAqVT9dQHT9Ezs2En6m7TxYLWiuRB2grSBKZyS1drQ1wuhr3FxybWZKuFJ9QcJRLUAqGMTEKi49nMTfLCZ",
  "key15": "3NijRTYp5Cat4kWSJoDUa9JvSXJSWXahVZVQA27LeiL7XqWWbHJ8TQFhESnhUBwsAPCbykhHQASFC2prYPJtfckH",
  "key16": "5w2mWgP299nxRmrWZEg66y6HdGwZAdxgJo74fzBTAzP5EBx3uVDXzPDGTS4kZT4CuGR6t19uzRdtGiDWCgCLrmWG",
  "key17": "tm3bszgyvrqEXoUnyieJX8XdViFhZsuVVQTmLRdRC1bEaAbdKKGirpZrw3QkWMSYDgoxZwHb6i47ADgPTLK847M",
  "key18": "3q1u6CaxnyYxmCaZVezD6yXRoU6kh5YT778cS5vbFdTZQfgpsHPcMsjgK9KQsJM83Em3sirh13vvSVLtoTgEWmjx",
  "key19": "3mMpoRmMefvHwfy2cdGbGvscYyxkjCiz5MHV8iAaZgED9meQXFkjPMxYnJgtXipGe7Nh7x9yjt1LqXUn8nuejVNE",
  "key20": "yHmnSGRgb9XjkGmNATaNaP68rfLgckeJZyn6mvq8AvdSjsK4wLUPt6pkubacdqEXcMajTTnHqZmYY9wW8oWfKwD",
  "key21": "hzpAVmb4KVmfYgS5rTjEfh6bdkLdhNGWoVZF8MdGsDHSTruivwbbkbWviRAE8pyhgdiKeBif6uqFBMAizoNRpuh",
  "key22": "2Zk1WTVfCBg5ShUkrz4CFyM5WN1Lb45D98PfEPv3S1mKVhGwv96QPVaMNU9qu2RfRw8KTWM6M3Qc4sAd1zKwrJFc",
  "key23": "2spAzfiJKu8fwZVho2q8MSrLs3vgHMRoskg39SdBs4JCKvgnx7XyZEmqB8sN63QSBCFindyYpsKhzN1873FvpdZk",
  "key24": "4EJHxpoyuH7DJDvohBmmFuTdPft48gMUTshtw3VGUmyvwDkW21Yu2VfDz1DTabvgSQMWSwtbMheeBzCzUmAaDPeN",
  "key25": "5cMCZgkMtZ5dM7aS1HaFRg4xVd1E7aH2C1UrGgjtGEe54Etiw9kPDmLLGqvLjqd5bLNfmWqGaffW6ymBUfLGit1",
  "key26": "Dhr1LAerjnrJ96PkDYzNK37aEj4BKr4kNgKb3DKG1Z1bfyyCxpasLoZbVcCC5xquYwbkrQDUN735VgdzmHmnF4M",
  "key27": "2krpiqmnCaxSbnFkQ7BGf6G8v1Pb4dKXdnKES9fnz4L4ahL4UtVuH7JKCTkvYhPNce32xtZKMC6hwSU2oyASy6rR"
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
