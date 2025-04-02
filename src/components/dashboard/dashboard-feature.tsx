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
    "3ttZjvscAYjzN9xEudoMMTnsSdEFizBgjt8vpMhx8fzuxGCHKbWYyQx74ZBejR7jVVjdwuvvsqP4deefL7aC34Vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RMwGwnEHWa49Y6X1vD5KEYZhs8nY9J3PTiAb9pP1m9iHjTr5FswEgBY5NDWqgENqgTmykbbduhXZyAi5rfLhdfE",
  "key1": "4ysoQ4sE2ZSgrG2Rz1PJNNPvkXi985TNw5A6S9ACLktk6gwP8cPUDzT6heVW2qPdD2VXAfEaPDXuN5PdJnW4E2o6",
  "key2": "4hmFQVWdiLU1H9TMHoA7ywYGGrS4SSL8AKTrGZ6PzwfU3h1Q23rHMUCUvC6DokuNb7pre5Tu4kFdbAJ6hiJKaqD7",
  "key3": "HW1Ayu3EPcSJu3kPDbDKRtruFh6nza8mKFRN1Bj3crR1pDkq3QPV7v7GXb2L659JQnMKmgEUWFAwNq1saUYLeeh",
  "key4": "4pKdjECDUuNsFLjEtss43KANSxFaRKB1iyQsyktXphYPCje13UfVChjy1mCSeJZ7cFbVkj6X3UWB5UPWqP4EG2Ci",
  "key5": "2soCjV2owthqUuV6Dth8ZdUdFTjPWja5mE9p1e4F6euVa7moA5XwcEbJ8nZBe7bjRWF2PncrrwvJTW3xfmvvY1ho",
  "key6": "J5ntrXyThk9zi6c6j9DxCZLLVpJq5GNgxBeQ59Qs9rzmnpLGXc6JUYCpi96PBgJ6fjwmRSnmbCRUFk9oPH8Bpk3",
  "key7": "21KZebhuNtzrQgUEYrbNDxUa9X27QHXQuEkZnchbbS4ktXSrT6Vx7VMokSSWWyr5dgqFCtpGjsNSyZDzQthYoo6F",
  "key8": "3AdmS16omBZWnwP7xcTzP7Gvm53V97QgFQKdXxU7bT9x8dPVzRe2cVtADHTvfAVE7tr3ySz4UiCpDU7MpLkorcSq",
  "key9": "5ZY12yDHQskCiCguLApg89QWsQdZTbK8rATmXKivvxbTqKCXSXANBLE6oM9X9PJYBFmyZ3mtpdAqPvQx18G3r8AN",
  "key10": "qeNNoaQqhaBMoa4kY8AmytTFqxDBhcqiyPp8rzZ6xGwnfTWYBiABmBEiZyKWjhmUeBZsRHUyEg58XA9GM1kTsRv",
  "key11": "36GkFKS68UFUawiE1dhWAPo3xEVdB6WefPy3S9zEpQXtt49YHnnG2uR3btxhdHfG7qNU86DfLS1Jg7RCr8Em1n6q",
  "key12": "5EirUQ185zsWFZcC6We1ePX6QjV4b25v8PCFSJQE779cLi6DwAu4U2wZbbz61xMo9r7TLFCb7zY7czmM9z1Wpikq",
  "key13": "3K5bLv3gCJcmEjw3zbJueHyhjUZpfn5jFH4ExEbgJbPjzuKbPEMnF7sQDJjWM9XCtertbyv5Z9FmjkG3zh8Ksq9v",
  "key14": "2p9hwetTB9NZ3Z45CmxEqSMTbBJhzNpSCD4qAcKw5Hrx3oqnF3ko2XHLHeRTXQrmJJzxKyq5Lavj19jxJdDUxz6f",
  "key15": "4QAaz9VfcMwxyspZtWuiMXsijH4pamvUE3oqpRiyvnoigQPhiNcNwrhdQGQzNDFpsTMTmwENZyHeAyK8dHsSUCGS",
  "key16": "4HiECmfSidBramKtbowup27A1rNJRJuQ5bUSiLeDBc9bYH65YUQV9w5ppSYCiPUKVrSrtFJTANaMowZ7YvPPoUhR",
  "key17": "49SQfGYZsdcnf9ySMAwDBUwewRrykmxhXuY2mnpyEQFZJpQrPp7uababLQhb7T2PwadY2qZ1LHe2iLEzATxrynnp",
  "key18": "4fnRwjnVg9TtNj3TstvJmJvT8v3SP4W74Yqd7PuPGUuw3pzc16eUeAyF9P869PbE1cSX2LxTVLjzSRXzz6RGavfa",
  "key19": "4qjtbUrpiBwonpNBjiMU9MT7gcFcdPCXi5cV9dMGb1qUfpzyMetwLXzaJgWohkCTdvwDmg7oRza4vwDAPWNuB2Vw",
  "key20": "38S7NYVNPfLnWVuVpebiDGYvZYenF8yj4s9CgHkepDct6LsxU1kevVTNAEMfS9dhXA92J1A3LggVdxutgW1nLK9F",
  "key21": "51BY7fmqRyBhaw3t11wVHW6e96BK8UAJ8R9aQaAGpA2K12s74BdbmTntozS5x8rfBi8HFQZoshAYdikGasEeRmNT",
  "key22": "6GvQLCCjzpHp5tZxUvbpw6oDssbupRgpvXNN3b5UmRwPMHcmLD7DvZfMJ8Qry5b4dP6k2NGFSEPLpM7Z2pkrkKM",
  "key23": "3M8mpWNvu4PHoLxYSkKEJ6qzhtJkZCTpE2XF1SpKvg9n7t1mQ2Rauj8s26WHCjkpR54eZbcPSCQEkrUut6UvxEDW",
  "key24": "2CRqrad2JUFGSNfZH4gr4F4Yfi8xb6CAPh5dukN4Pv38b9XF49W4RxFqiANXw6jAwe15W5YqgzMcMufyKbH2yYMG",
  "key25": "JuzeFZD1sq6c9FLCh1ZUvf9qSimCUmdXMFmgR6Vih7PaV2LRUpkuVN9K478XxBeEfs6U6Yw9uC7X73VgeCWikyX",
  "key26": "4TyePZhmGfLQGYhUiPgFFvUesGGTS5LkWRoa6p4N4NeEmz6mtPpPVVdALcKWUrEuWohwg7ZgR6UeZzWncyahAriz",
  "key27": "4uXEYZbhpTrzDkCQtMHurA6gjDFQfdZc7JzZj17SYwZKiYCnCZAddnVzhWmJzfLYAAD6eozFwcKNbEC9NwaKMV4P",
  "key28": "58UkdJ4sEWQ64abmcLyonvyrBewoGZukuFhTF2J1qpJgz16gYeuouoXTQGjfSw44AG3aghrijyxt5FE4NYq1Bd4T"
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
