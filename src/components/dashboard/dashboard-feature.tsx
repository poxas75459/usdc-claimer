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
    "4AGwcB5pNUiq1pKaSH8WBEmUfXw4gRXxtCNjeKMksvSoAuXV2Su7B2PzoLUKFCmF1aYjWHnh1Wx75qw7kLHyT41U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9YszrpH5dfrBKWj8ykmC1tDcBY7cotBqvy2g1bPN2CZpMN4EGHwqhDbSYS96FHfk3nLoRz3SdJNyahCFS8UL5d",
  "key1": "3QN3SEZpY7HhXq8umoKUQnH7SVFoNzzSgFz13LAnEHvMhRU4gXUnUnnt9SL4dDtycQ2e3hJmnrDK81iAFPhkEkab",
  "key2": "2aq8gWZAqYG1nmnvJceZ4xApq3EL7dWJcYzGQh6zETXn86mbBZFAmet4e2rSz2ckR5ZK5Db7r8Xpe8Mr9T1xYkZQ",
  "key3": "2S1ruEK2BKXQKjivE6AGS9oAyxY8Simyw7AUmFQsbv8mRJs7hGRohUmFoAJpZFyaTTAM7msKGxVjrx4hWSJTz9mV",
  "key4": "1buSf59U3PyVDbL6b4ZdHDr2xBLKJTM4fWCAHo1j6wew6VyLEzC8c9QdpjMzSRCT5NRD8UssMp85ESF2GKwcZa8",
  "key5": "3dW6zQ9WTve5FkaMS2axQYFhYt2v9FVENmRotLoaLQ6xW2zPYYoL1PEDgeXLb1aRCaYNKQSwCBur9afN51sHfZda",
  "key6": "LT4hZfUnQ3RPPhX1vuaHUiSRvbd4DXcK4jatPPK9st18rVCMREzFTQkJ5ygSm35H4iMxSK5JBpNiV4tuSWShE9b",
  "key7": "4ba1rp6JD4b5npnwLr1v38aW5VM7gvxNGt6cd4a6MpGUsCykTsy2iZqPnyVoGzyq4oSJTRPTZCWioZxMXabwUXbt",
  "key8": "gQFkumhqWoLe19jEJ1uxdfyCxY6QNW3Bx8X8wJFKynv7BggJd6UypSSkW24XQbqw5B3bpTJ1ZASkkgKCKdbQx7A",
  "key9": "eRDu9ZqCDcBC6GwAwxS6CZeQdfNFn9xb3VdfCjvwCCZxpmYbGY7aGKerqagDLR8GcGr2MZs3CmsjRF6gFhBWh5c",
  "key10": "57NZGTYxbwnadT8VsFZNoukqZ27PKjLE2UnaZAtNmyqFfiKjRkTUHmWPv4iTNwvPURuggtwvcko3Dr6Uah9PhCpe",
  "key11": "rrqATFtHo4W1kZsPfVqDjccBNM8ZFZ3pfXbvcg8oFKqmnMhuEDo63Ri47L7DchgGPqafqNPKZtG7XTwqBGULA8a",
  "key12": "3qVRrtjLuA54gSaWhXr6PHwMHJnsBkiCWPgnxGUXPRWMKHcQgURPscDkKytwXTM8wFnc95x1aPgeUKw3VAZ18Ffr",
  "key13": "3byYCBR3XvgrtSU4gujgK2LGkMAVnNLZNu72JNZvfXQTVYW4NWmCRE6nxARw8egA9CyG1GtsVuChV3sxLXgJCsEo",
  "key14": "5v4cZUo82c3CpLcmC4ZNwxQD2d2KCdFuzAzCYKjiL41mQrXL2FjLS82szApvcozutZR9Dz7T6FqWLFytJFGjTVxc",
  "key15": "epTeZ4EcEXaQCsYxhzGu3koqusgB4TWav25x6aSjDaoJFEnFhMJgc29CXW6gYzB7G7aBvYpHYjqXFRfRvrffFwy",
  "key16": "3gcN6XTTSAkBtPMeo8oGMbGxdwTCkfuGk5khDKRK32tvWS1czzdgk8fgDRGTi5Xm626saUkRAL68J2HHpiDnQBxY",
  "key17": "2NENp4AV871JCDef2huPkjUeRSNYJfM7oPGBJjAmCHwsghPB1acfPo9hxSSxz4wBCj84uZoGy9mBtxande9N2SMZ",
  "key18": "5EFGd1RRWw1Lt79vQxvunwazmYva25m5bAUMGxiEQaDDEX8KW5pxrtFppyhKAAVrAkForzfYRyVsALAFTVHdEdop",
  "key19": "4sUq96M4YUCCtCDBw4pWQzw8Ln2AEnoGWKECotHR8s9C3K3zUCXZFk6iJsALzKuUUx62xsZ7Ki2C3cHQTXVo7cNS",
  "key20": "FV4Chv4zpApTjUhmzzRiTSPnXXYtYHpFwADkvydyoMs93dtHUo8R5WAvfzpZuCKQA8XJQU7tGu93CZDcXAfFip1",
  "key21": "3WncX2zWuGaCToaur6Pd4Moj6FsFdpWG81JK47JscCbmeBxkRqro33UbS484DxmdBav9Wt8xXohSn7eXyxy8AZs2",
  "key22": "4yXBgk4gN7ChL5cH7cFMvbo4t8zADx84vRpK8D1utyAznQYZSRLdJb3uw6NyN1GGqNxV4iKNociQsGeaaLW9xP3h",
  "key23": "NimRyN1oSLuisnLmuqAneQW9iY7otk7xmechtRR3sdo5Bki5PLCtv8tHcErAPNyoHogC5PmYrntMbFSW6XJQkLg",
  "key24": "3VkCHk4n7RJzm9RzHAR63Rogv5XgHxCAhzpKy6Yh1bK6RZzTgW3oP6NvUP4cgh5ib8V8kgMzmqEdzrgQDE5c8HXs",
  "key25": "4JbK1BWvN5SbH17KmcCk9W9Jzo1oEsYnMWFE4rpxopEBkN4uReXm2vidpv4Xz6Vfha42fRVngFomZ5uxGkCssCR6",
  "key26": "4zyjiue9xrFTgF76DLSqmNwS9gkvwT5vXJf4qnuA9ZzViALY4De4aUJiVPEBztfXnSX3aUwN9g9aR3CuHSHjLhu9",
  "key27": "5xksb5dEJAAvnmQaS8ZXyDbPJNvUqbizLjCFu8VjXhQVhqBwKTLeJxGJDwNpQpCQesrEEpBkKhu1y6bfswuSmQaT",
  "key28": "59UMohz2BX3EZzwpL9Vf7QP2SriENWaAoAsc2TjyvCMwxokX4gN3aMcQvPMPczcmncssG9NW5Fb1wKmNJ5tq5LeP",
  "key29": "129RJGTRfXFe7ZE1ydarHogSwQDY9dg4W61UYLnCvJPrhWVFZUQqfC7XRCjm3wsoQ7zdkpcFXjNNCXANVR7TnpHB",
  "key30": "WNQgHtsrBPsz5xTX12MhqF72Ujy9KPKpeEwHkfCGYzCfQoYWJeesaKSZ5TNWppvBpYzHaB9QfQB18mmLq5kAhdn",
  "key31": "5pARYZDZRzgt7J1F9uA66WfdUAfHgAmcvjVuFfi7JUwxEtpeaeG3RxGj9JrimxeTVD3rhqvmYCNPtgcJyhkh7XKd",
  "key32": "4rXGnzAdUWcRJKdtPjXVLtwuui62BNye1xuzcVcnZtso816qvjetyugfgxgBMTuAta7Yh31cDMU8DRysevT1RiaA",
  "key33": "5soKEAUPDeu6RTo7B5N1oUpt8etCoiWUNwdLEDMwy5Uk3LHw6dWyyJMURa7yGZDyXzBoGWRwd27V6qzuLwFJCbcD",
  "key34": "2exBUCgTt1KF4mU75sNVJcawNrrqrdpnYhpwMt8Vns3urvr1ejGphCscgciLh5pByQnW8TKpvK8kL2vw1ohJCLwY"
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
