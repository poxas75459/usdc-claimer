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
    "5oit1xhbzrBPNbyWmJvvnMpdCTQCvU5StevKkhWRZ7rftj3YtYRJEfjdCpRDavX8Qhr3yeuKHaftPAncabJ6EKQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VMwdakUtDffjC2vja6qoQGxanY4x6wYLRtBNu5A4SrvomqStLf6AxWxSDjmNctLie6cwmu3oQMQMobHnmph1QfV",
  "key1": "5VAjdT3dXBJ5s5bi2iZrDH5rJwVRJ6asXwd2SCrzXiFyaMWJoRuWmj9UhYoyub6GThVKX94SVaHRs7d3DM4z4pxZ",
  "key2": "5153iBbGUsWZiUQWZauWtthBTBgwSMamreTroaT42V55f88tA5y9aGVPUoaCMBpUQB8hJ9GVNBbJndsJ6NrFeUJE",
  "key3": "57gvpbRcA3npGEJ244zw4YNSARcSzpzAg5i5yyhwT8ayzUBKDzZaT6yqoUdqrv2dfo4F4hSZjZYjTNdVYiATPpbs",
  "key4": "5NE8wQAXirtguwcb1NhenzGHHqCgWhdUGW1Vjm2m3gdjzxKJFJua8QdVybdhF4SZWdn9rZv5W4ReMTF1xx1biR7b",
  "key5": "3qMom5TJW89bjsG5QFqJoqMpANgbvbvtRq1EGQHgvgQNqvPA5XuhZuz7hG9imARkhZBnAbUbQhfx4CyL7ARinZBY",
  "key6": "2KxaVRnqChbmsoTfucXSPqeMxLQyow7cesDw36GCuKnLy1tgemYGRbRm3vUJmNJ8H39KSJrQQMFGShXujBrRtpwj",
  "key7": "2HnXfcxf3jvy5vF8y839Uvaa2aaQpwzqQQGPQvHfAFq11jGaLwChFKbg9UQioZgTo2vUssNMSVEJbmYGPWSjnafG",
  "key8": "4UuCnVvymzTZCPMwPJw3KadrPxEdZHnZuTdLhzqtHd4Dc4C4JGEA4n9NQaynAr8zXbUv3RBgPcmoy4NgJoGzZt2N",
  "key9": "3yZGquMLQZmy6FS4MmiU8B7EcwWByThL9yZNwtAQvsVF7Gv1xa1NCC1HDgKvfyLTCnm8MnfRxom34HHyymZpm85m",
  "key10": "4wb5SYY9Sfiszsudk4RHXsfbyXjMka63GCf889qTEuZVvC6rpD2uurrrFRaLwik1GFgWCdUadv96Ei5zZutokkL9",
  "key11": "53zXnYhdjW5MDAwMoQCr2qaPKg5VE4p1GV7ACoxF9LzhRXD9r4n5V98MgXHM54ShsVHvXCxiPCBhZtcDN9FfQgko",
  "key12": "2Vm1MwCjKVheraW4vRCvCwHW68xsJidjkFKH3jcpJHwAt77guULp8iwQBAS7Wz1unu8xbQjZBXJx8usBfF7n2VeK",
  "key13": "3JWwuCYyXgB9zapUbLHPhQgZBoU1eE19yTSwBNrLNR6nhV9HRtDKQCQx1DQvNKkkUytcBuLG4V9b6RbcGhsAwnNy",
  "key14": "ouNxEWDfRSmV5Jru9Fki38UKVZmT6PwVASvPdSbiBQXnc4NMKhm1dPmBGECdSY6xcySMJ5gDhfApDZF9PoXLdNg",
  "key15": "2ifSi5MYYHzLC6oENy31dNmWFgvJAb9q2zfdQNV56CH5BBNakMhJ3Km44hgN6PGcw68kyPHYrerqPYNWMFYR8pzP",
  "key16": "4Euc49gFWfRFvy9ESCvwTrCBc9JHWTLXoC6tfwyRbA3MUKB3euDhfFZDnBAjCZ1FPgX7etETHtZZ4STcaRXySZZZ",
  "key17": "JDkwZ1mmjdw3G4TiGY4WWjMLAfeBmSJGFSqUqTuGvvehAAZ3VTZxULG5ey6VsET4LAyj2qfrJXRYnZRFHmu6HGn",
  "key18": "3jffFh4XRHtpcELh98UDiZJTXFyMeq2yVFdRY3scmmiDKTTTGZ1Lb1M3M2cHrMBSEh6P8EsYk7zezjDPP9rYnxru",
  "key19": "P8CSskgGDsRVn9PokM5jWHgenHJDXZHNQtHEbU9kMMSz67PbUtrtsLw6quyYy2pivb2K1wRmKZ1DkrzCET1EbMA",
  "key20": "3mTv2TT6ctLoYb1rGojx6bCZ8Z18xUfJQ9wNNqoyMhFzLHLzfhUyQFPHczGWzc4f2kx1mPYMDwbGBCmy9fdt6Z9T",
  "key21": "2MijrHQDZf3QkLr8RirPKdxjqjMFg5FDgFJB3VQ1MuVC5x9mnA4V2Jjq1qbputvzmzXbYEp1kjyvrc7rUQtb9VBX",
  "key22": "3FzmQK9WRKhu1DqHBtw45hpKChNL7Z4mDNYJDtw9puQUdUZd75WBWspTdWhnLXxbfVCQK1WU3yNd2iqnnSpgKoq2",
  "key23": "2YFeTUQx6VUWTvB4unK5MTK93HaQmhHC692hifytHzq78Ka4jg9sY1rMpx9iJz73usRkkMnzV6Na3yM2k6veWNFi",
  "key24": "2t3uKKTz8bH8zMntUtBJqNW67hv2bvmKaDSj585TWcPfAAkm5tTnQabZcTR8hjfZvjRuzVUbFhR6Akp2B5dwWJR1",
  "key25": "i4HeaFPKTs6fhuwznEZiwQcuavZesXd1UmyKWoidpXxUA1FhoSCNy7s3xTPCqsJ8CpGQdbGoAPnsqsNDWJX8mWz",
  "key26": "QwjAbKtd7z3G5PJPXknd6aYZpAdVRcoooUmjZm3aNNQHfWdKDo1Hhdj66EGNeu83siTDrxAF4CGzqvdjPcWoKhd",
  "key27": "3wcwfp1j1GjtCqsFLwPPFzGQjQx92cj9qmeyZZD47Pym4NAoDoW3GGi5dZbUfTAiYswhBYu2j4qeoxPFrGaozDid",
  "key28": "2JkMjxjUpBFgHMT32k9AgqiYWKyEuQqD58oNi5fkS6s2bgUka4gUk7eagMNC6xPNjtHEAQUQnQGQ68SRu9JKT1qG",
  "key29": "48RmwRYtRynmg4yXSFM7M2QyD94oC6QXovrvsZ39jB3F8nGkoPobG4XvD6cJuxmzGnqGNqHZW28qw4dEy3xcvkde",
  "key30": "4zpcq4gwomSuKJDtt9AGYiWPFgNdrMiuZq4ckXQgb2VBaF5S4TZa5KPadTyHL8hYXA9v4Ph17n94dKYuh7LsQwhN"
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
