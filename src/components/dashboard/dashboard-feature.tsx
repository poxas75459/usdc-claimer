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
    "46nUSGd4tgmM7Sb9ucC4hpvP74k3jHfnUzmdT6n2gg8sL3FHz4YyEjExhAzJcUs6zqEDghZujWS37A5fKpXRwuf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dVEzrtyvTD2YgGWdfwj1fy1DBTiXpde4FUeThRJSouiYcAtTj9BHJK5BWEg3otgX6JSdQF5t1oau53RTzh9Gonj",
  "key1": "3suvTtCWtWGUhnaW2vCcCKn2Wkwot6rYaUEsrs2kuisezn8fWAkrWCVq5nWGmDvF4qaaSeA1rcDXwfHSeqk3kt6R",
  "key2": "4VKzKwVUbf85FzZynXAzoRHUTkaihqc7SzZ1d9AV4ivhAXViVmwRFhnCa5rZY4bf3mE8W3soMKPo6P4PU2sKnvfi",
  "key3": "4izZpr29faHqS6G9b5qPMDXsWRcTiDXB1cVHmTZRXYgCThv5D5mVbzwNVjZFyQ6xULa6cdQSPen9e59P46VT2os5",
  "key4": "2XwmDn77shYKoBFkXFTBVbs4uwHerZika34ZRja4HpZo76tTwcTMidqDZARsDKuZKChaLufv8o6bRQ9TuyRTb2sa",
  "key5": "4oe4NNeJdmLxp4Zawsn8t8cLCP8suXmyCwDQC7m8Q9bGaxQiR6SWvDTvWxoi3s781mnwgu3qCKFFu9BAbo2a68t1",
  "key6": "5s4yU1MhgwfgjTbV7zg2WUsXnMvy5EHS2fFzdz6JnsFTrxzuaKJGUxp5fWZcPwbLt7SQifxu2xsAeU127srrGyXa",
  "key7": "4jg7729frLFuc3a7GnGmW5eCTe1U55CDYzywe9eo1pvEHTzHUDYY7nvwBNudiMazha2kFb3jxBAo1hRZyt7aKYFk",
  "key8": "58kg5hZjpHHgRFVYXX22gk12uscKN7pz7BsDjQYkuWo6KCN3LdwQMaU3wLdWDAxHe1ZYXveWw8372fEyB5UWRUmA",
  "key9": "4pzg3rrYKzKhEBreRT6GdL5fFiT212h8donxC5An52r3nVvTLhT7e5Lx6q6TtEdbxnJaeX4EhSKUNvWtA4mfo6mk",
  "key10": "46yM6trpGQxCh116WeeEHx5zBbT8H1mSjdFFC87DKMUuFSarGDg3UHTtyH2mrsctjD3YUZRGduVH22QaFPAqMSMj",
  "key11": "4YgFASMXDUra4DrVLPG7i49U6rSg4h7fUepYEKWUFU8PSXfmvjsZjCf467iSRgLFhu8UGR8PHmwdiVBtZrL1vrNw",
  "key12": "4dwQqaYLx8hLzC3RjyMPvhjpWqFkywsGAKd6A72GhSDwEbKssDSsWHaPorAp4TRujuHNrB83W23duQxEH66yU4Vi",
  "key13": "448dieQmqCNEpVp66qPGu1gTHe1173JrvZePZytJQ6DcaPs5a85byq5KrZaWT5T3K7CSFJrvSZegjyVaGGuBdWzf",
  "key14": "45WQHTU4ANQVfeYkBHg5PfGSY6qpfAwThqP8xZTPZ5v8Nw323svBPau6KdA9RSGYY5nps6U6oH2S425uCZtfTeVr",
  "key15": "5S24NqRDSqNW9JqKk34yrm8mNeE9Udmqm8Jbt82uCaJVwgDnvRpieT9RiMTc1iXExnaWpkXJKVmzHSHh1SYprHxs",
  "key16": "4yK2Z96gX4QC5ACLQNFgYmshCCsvawSEMwsPCBXJsdhg4tLiyNVpuynqFU5HS1AfX8at9hkZUi9ABGzXDBNzJBmd",
  "key17": "35tkocGVXrsUSCsuVYZ6gHEE1kxJ8wBrzKXMWuLaaT74bTpDQXRr6g35tFPJ88pZ9yuKdyBrUqdPFCi5CfJHZXTq",
  "key18": "5wr5jXk7ECkSWVQF2oGbCcxX1Yh3bPHDJZCK8BooUAxgz9pHScdoRoLCmwH1BzZkUNW6kyJPnxbVKTzy3x725DBo",
  "key19": "oRKZoydHkH3zFdPPEWyDq3sb58DpPozuFsAXokFKw1LB9PTLRwHkMrbpPpqn7kBFgiS973soABDgJtDqWDCKp6Q",
  "key20": "bGVCir7RKKKkVpEnJDkokQYZDnoV7rmAL8Xmiq5QRPmgRsD47ESWdmtu4zr2JBB6FRRhFC9vSZrexpNark2adw7",
  "key21": "N6AXE7zCEyRojLpMq1gLMm7gj2GqwJfnEZeT6afn69ayQk8XcZ5dUpVMZfx7fDkTTGioffNaRnL85S5b6TpRYXV",
  "key22": "5kkkmYKz3mXioCHjy6HSeuZWdouCKjUh6ctPBeE3viParbBMMEH4KSUinUZBkvn2VeSbnnB9VD1H5i6pbCQb3okt",
  "key23": "3kh6nqgc3G7GSYnvqtDsXH7EdvcNsxR28ptcguEuhvwtbJNkbqxiyf6J7oHBbamNmY1rx51BsMUVWkGsm2aLuYbd",
  "key24": "xUa4RzEm9gm9xaWRE7d8vsNp59sZKEMHoeN8qQFDzraWrDukxdPXfNx6B8vaA64Y89Mh7P2w9KbzvvSZCoBjVxT"
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
