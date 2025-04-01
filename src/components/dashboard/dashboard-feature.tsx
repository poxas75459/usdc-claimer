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
    "5MTJnmzXcLh8LBgcRLahAn2JqvnieEfsLat4yLz3xEeYuQwLMDNnXdwAAfaoQskJuTMbuemFCxJofEGwwgeSDAuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VDoPZk8UBzCd5jCpoERPMqD9kGrirgq8CE4dhDnXUZYxXs918JhWF5a9wwqisPfRVv9Y1WMPaExhEUCRzJ2dRu6",
  "key1": "5n9KL6QMTVxZuzUPu1YACnPDwX952xGszEPv8CbeFdpPsdVoXSeRW6FiivHAZALNY2dKzpP4tsYeEkZ8fNZmfaSN",
  "key2": "25jtb9piwCT7GDaRRZC1BRJrrGan15EVRxH7X5cbyEgDWEUhmRkQJPynGY6YgRMdpYGjNTDU63ugA7vhZCRJn8em",
  "key3": "4NQcHbK1fBzNnFUxL2Pps3vkti8m92DEYX1K8gGWqS3hKvcGWD19eBU6dVDMSsTUdejwCFQeaEKZbyUMd5aFwn2T",
  "key4": "5xsAa9a97fb4AGKCgF59qzJBDsBJn7jAYheznJPFFUs1rnbAWfMdcX8dn5W6928cQkX9Qwu28MHb4eP2SvFksfn2",
  "key5": "31KWqgLaRMptuREq9Rmvc51oWUXaSMTg3B2jXaYpfwg9YqwtnANm2hvMnhyBseLr9Um22uLk3XKijKYoGic1bR6t",
  "key6": "43vk4rLVPYLRqTPrMjAPCMMLCApMGg8rjjPsVRhdvTRK6qnAdn3GLtwWh8eBvexR5YA6KQ5N4Ta6XZSGK1n641br",
  "key7": "2C4NgUFswNhidVywJb6vztdouXZZw5eSvskvi288cfbsjDS6E5Gh7w89SZK8jynym3zr5DRBQUzJ3abN6CvkUx3U",
  "key8": "4Tu27G68qptoUSvbs8xHEYwoC8H255p6bNZFrddySBiZp4CFgC9xmfYKoX28AFSGXGSmPpRKZZFqTmhxZte6yvtp",
  "key9": "4heMbzicdqYVnpW9yAU8N3eEUyrZLdneBFwk4CHCHnQuVFjJke9JAPYBxprK5ENnFmuv3pTstGmcsPpEzprmvmzf",
  "key10": "596WNLZ59jBjf9SK1bQ88u89LbdNnoi69zefDXcXviHVUt4QtMYprwh7MUn9ZyvrVcDX7HXxt9NwexmvVRhNcHk4",
  "key11": "26enHmeWPkKcurpiMQ3aU4KChk1j53xJnUEAovyvxnq4SDDMGtzEwBmVZqtJZWMfFuLusAsv9QgvE7Uqk7oj5SAu",
  "key12": "5AuGzAGXvXzJBHf6sBNECDVtkWpeV44mSrZqo6QR8v1DTCmudi1Sg49zYgAZFzyNrZ2j22oph3rWk93gebRawzdn",
  "key13": "4s3hneVbHWBLsa7VWyGxNhLyZeupHvgEzukDPvGWGv6HKs4oYiaw5M9nAP4qLzqAM5P1sEmSxdUG51QTu9UkqCVd",
  "key14": "2YmMh1wCRbifj2Lt56WAu8jyJNXpQQwpvreLX22tEEiXDrhGhmR1o2x49yWHJkgM7bF5iZRdghqmjnyiv3WHKJvD",
  "key15": "5MT2GAhZSViqVVD8dEkHReBAsz4DjgoyPXSLBaRyGHkAKMpqtbvuPxhPsiuBHTE82sagbFvqxYjrVPAHG7EpVmYD",
  "key16": "5rYDyx4QRK6SDsxroeyUe3kgxNnKBdUdcfUm7rFPZLc7GtVg4ujUL1st8eRyjXKLj67dxPQEwJA2VWmZiUGDkhdj",
  "key17": "55pGEdhB9GRe2XXbBVJT67XkwGqZVrx1RZcVcmDSYKDcXQwtY574t7ur3FwDnY3jTNDbvD8tsqJxg27Lyng5BFwj",
  "key18": "34SZgbnxwku7idbBQ9KJaoF3JDJ17s45ah8T2mB5dVysMN4rHzzXTHEyGTCmQDcP6Fwg9trnzCMsHCYTxSqxAsK5",
  "key19": "2L75Bktyygdvfsrhyv62rYv8s43wtj7tLBPJGKVUM9k1WGweEpWnRQDYPn74uGuPTdbGnDAwe7rtaAcrzaQjoaNg",
  "key20": "3TsTngfEiGQdw5cBHUVKELr6FGG9e7syayKcEuLwfM9osLwTbV55hhBa8NR6DawCXQcxd3AX2zEnXHfnRZdmj8NW",
  "key21": "4RPLEHhHDxxydsGwKwgrNVE89kpJuPUp5QRv9Da6mf4p5Ui7Jnki5Hpdzi3NRLc27hrHbv7U6MgzPhkUSseh3efd",
  "key22": "2qVbMxp5Ee8YU8wpPjuw3DDK1XHnzRgh1EZVE8AjRoogNQQFMgmiz3oUaGTcNAkjPzc1sX2jooeU1yzzLjK2QRxz",
  "key23": "226HYCHk1wQb8fp6npwDGqJJXPeCUiZTgKQzHGdDzD6BvLX8PbF9PqZNrnXR6Mh9Q9ci9FgmFGzguL12oDY9rtPY",
  "key24": "4nirnVnabgLhhG3vgt66Ktt2KechdYbiPsfBog9XFZa9M2gJMoJSq7vqy1W4ZoT6BwSEMxRQ8nDKKRqZR3T7XmGV",
  "key25": "2NrPz3ZW1DLaJhPgMUfbUiHtVQNjSEm33AavNrQghnuXneDMae3BG2zZbdhFR5VVqjLh2raUDJh2BdHaRED84EsC",
  "key26": "2s7MsiRsrY3iYWmGhSLtkLGo6uuBG1xPJUnVN4BJjMWtgLhVeSehPthnsN6sLEkTe1udYB8YRKnbT2D2KECaniu5",
  "key27": "4RWLtkpmnNxezeJevUW86w8fppWuAfH6fMfjktqu1EgPkQDFGu7jciugE6UbJ63BBca5YEG14XB2fcnddVtge7Dm"
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
