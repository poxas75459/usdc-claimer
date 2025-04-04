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
    "47JzYckDuRm9t6kmGzsg5t7pz1o9qZYPERcYVzp4oPum23e2mW5uRBmi3SCWSAgezGmXQzWW55CSNTvaXtZZDwHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbExzRvn3QDm5Ad67DZj5K6dZ6Ss6EuYXMpqFd1143jJ7ZrGFK58SKvQQWgSeAPzQ6KNDVV7ntPVJmMDjK7DCpH",
  "key1": "4BZeya86oKJ9LifhNSoZnjcjD5R7hi7mGubfc91etYgXmyJ8HCuW3Nn3NCgMToHtkjsQoRgWR78rQvgE5GwtnNCu",
  "key2": "3xkRXdEszbdbbRZszdf627kVpxxGq7J3Ac3qRv8rj6FXVHph7MF9JmUg9N1dCJCRacixgFJki9n9P6YbXsJx8nHC",
  "key3": "s63hojvchg5jSLqw5BXbFkXJAqY9PnRcjWLEcAPNRHvcBow9cnUs71z6GNTKLjb4JpKFBRD5i9LAjb5mYMtCFP9",
  "key4": "2sQucf2X72T7DSKsARm1RMWPNSzQ2p9uYbn3k9FcCeBEFd2g3H3cD5zAUSxGP6nSf7ijeUS3n1PA8vZQwV1amb48",
  "key5": "4P5TNZ5NLHHoU4cGJDHRA7613BAUrg8Cyb9XUux4w4QnsSJTUcugrqij92r3aHKiAzzN7LXRsYfxQRtYZ8FfAagG",
  "key6": "3hn87RhdMXUzcmvX2kxiHay5u7VfzrPaG6M1b4yyuY7j5q3rEAifN9XKDuMN8LhMWnSUpLD5xogARM9aeueiPhBU",
  "key7": "jrmXWw5RjcJBfUS8SFPYt9D6nZ4aDSTXKadGuiKsE6Ezpna5571hvdN6FDvaeWxCn8s1zryrjKrNJ2YT9eXcZ2L",
  "key8": "3zwZRwfDPTgvGrJ4hs3oWE5XcYsCjL2t4A9KeXiSVCfFcKX2KBE4AFu1nZfDQzPsfUZqXCzPaSbrPCKHA2fQsVPk",
  "key9": "3KGA2FuuCUKyncX1Lxyx136hZRotFSyBHhfk6HptHjxnrqy2CmGhkDHQccGVj81GeaNoeiaWkvwhogu6stDSxp7U",
  "key10": "66P3Ltyx1rgrWLhV4g2r5ud7m7J2w45RD38feNMJyrnbcqGYGznzeu15JqwBnBKDxV1znwTHEesZziXoHNdyYZd3",
  "key11": "wKC7N7NZUCnG4ZDyEyDXn4pjuCW1NvUq8vF8E4sEZsYwnTsvFdHtBL8s2MA4L49m6Ew6NBp4cLEgCUKSqvvRGNi",
  "key12": "4V5fWge2vAESEwq1o9ahkpVeJg8RLH2WqmTuCEzdakMS1Wt1jYqgccGsPU4vJip1mvLVvxfh7G9j4QqKT2Ruc5yW",
  "key13": "rSBPziwVZ6nLH2MGZU6b9FfnQVQWS9hi1s5H3sZi8fj7ZdwRc4MXz8sowrMAzp8tHhKVJU4qQf6PAyfjKq5K6G8",
  "key14": "5VEjQQF2EekLfs7pfs4VESeYZcVVa2UKJajY8qujK44qu1DJqnKbPaYHZXDUs3iPMuxo6Ptw3hMRHbWqjnqWur59",
  "key15": "58fZAL8nX9LKkQAaBpZpcnpKfD1Vx9ch7fxFQyY1X8F1Gp1qkpHdQVG4FwQv2eAeXDuMpU7sdG3qNp6PZJFxdguX",
  "key16": "4gNAJzVYBxzLRaFXKuMfXQjGCvEN1Xq7Xkomtdi24jz9dUvqontqNVnQB3SZxj5UAFzQc8rz6W2nc4DFYFHYwgvW",
  "key17": "mLoSTVBApjg4TT1HbZxNpyzQhbD7R9kvRaoQsbET98hZs81xZEAgQAxNFDjtAiioKecMF69vEMnoDRZVX8a5QAx",
  "key18": "5QmjcekHEaPsmv6VjTuk3F1LJQriFYxzrwnNQmdQtpJS79VgoMmjHfRbT92q1BsbvaqvdgXS9a8tjppdAUtnAN2J",
  "key19": "5c6Pb6mEgjCwj1znhaBUPx9z6sBvELX1x8YtJsxYm79LP3AsBtG8NUXg6coPR23tbUYrr8Tq2CJVmCW1W5TLY6Ym",
  "key20": "3GBpT24LWwYZZ1eRvAVhtNUhizQiMg7SSf71gkzvDKSiJtPHdFW2e5rms8Cg78xGTLQzk1mQfUj8Vx2KnoVmeUM6",
  "key21": "3mZUsehaVEWLwEyV6czMbVPXDueVLxxB5BCWsVrY9v1iwvsEPa7GCMWCZSjCGdGWN6MBDZecNFeicdrD51Xj4rjT",
  "key22": "2bEo5tR8r1uPCWJQgM13iWNHi11bNfGoTPaLbJt7c7SGaqyHMPQvPKcLEaxKs5iJ6hndicR5AFMxfJNGRgtAcKva",
  "key23": "5ybkWjiWaf3uZhrbkVNv76vX3MJ6EsMz2yWEoyYmVJHiFQVi7MGdSQidwzB3yaLNV3fg7DLNiJwRBeSoh4p9AZSk",
  "key24": "CSQ2E5CXgiFVrE8GJag5XGhtQTZeNof4MnyED22D2iQoQ9gemuQG99F7Go5KuR95R4h5Gisyu6wLz3GTuJ2RKcw",
  "key25": "4ARHexdtmiN3hnCLsArJ8VxjjzR5dgx7Liy6WxRdMXaqfPV6sM2bMTLJ794iT7ufXUgotDKDgHCh8taU7P1XoHPz"
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
