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
    "5AWmBhDtjsQfGwi7GgRJqn9sBAvMY7ovheBhcoQ1LC5EQAR9rrz5XEWk8U4tz1wWoGi42oihNm9ZoSVeNJYwfqHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zt6fSi8kLed62po8noAk6C4XL8sgfe58V8pSwAH7Wh3fKH5MJbd9o39DSE6MdS8k3D7Ma93m9cqwdE2WrApX454",
  "key1": "4r4xWKYfwJVyVqkWUmwqk5HZQacuouHa2b7YvS9MREhG6sz9nhjfxoGAofgYNnMBHAoWCgkQT9JDeUveqf9YWLY2",
  "key2": "8ANW1CxqF9V835QtNQ1v65GNQMfCY159c6nPmXvE6WoLa61ynQACVy2Gj8QdTNLAAQW1h494hbW9RR7ZErGbsdK",
  "key3": "nG9nyZ7uVfiFA4HFkoVtvuqFS6N8tB6SjU3uCpzmLdXi8AdHWw2K6sA2CGhVBcPoDMH3nRDFVHWN2y8wXE8bwL7",
  "key4": "2qe3EnxDVqRYjj14yKsLy7V8Fc3QfDDabqjoqqS9484N39fGDMF8S5ZCdGdGcUTRLcMWa96RAVAaYZ7rBzMcj43p",
  "key5": "3vkqBiJYpR3k7eJ2d1B4Dn8RzyMACLEwMFCiYa6ZLTxovxR31rknZFqEef4zDX8CUdCroZLSiCxabBGLhPdX3PRX",
  "key6": "55euYFhzVMFc5zwXP9a5ZKBPatRUYdGmPdoQJnCnzk1ZjKGbDTjfQsheoqGjSgPy14RbfxZhR5K25snYc6sU6eHK",
  "key7": "4wmfvLwQiSrv7Njd4g32cRwVE4CA6gHCZvjMponVrVCNtHFu48xyTPmNwH5tgyuNx3sGcBXT9ZfbYBF7gj6kp31j",
  "key8": "2XhJwuigx9fSegfzeeH8tdfRhtPRvcJVgt6bXSh1GSFzgdmanaCr7sAEJTxG5unbtpnoeUq9VHAqyTnyJtjDGDM2",
  "key9": "49ThJEWtVFj1b53oUnZx5BBPNVm6kymdFmfdDTDkXsC8wAeNxFoMvHxviynypKWTmLba3cooWTS7BeSPZsobHRpG",
  "key10": "3ruRjSmUeYTdBFzi4Fce72465hn39FnkVaPkjYRyQV6CEn7Rea4RAmnWdyt2rrZGtJ5KpL4EYFb7RZXG35VdgFKH",
  "key11": "5Wg7LYjsq1CD6KXx1hwiLZTUZWbXeLPhSeQF9VPKgcTyNn6o3BkCceFzp3KDZLrtjvjRoaQNaYWzu7sQyWZErcGj",
  "key12": "voxivvv3EMskjoRLQ6wQryZwPUTk1rub36bF8dyo5WFy9EJkE8oG6TGvcfqvJtv9tiFFs5yCPKHn1HCmDusKCCW",
  "key13": "3CKAv36F2cn49YL7Uhj5w3pJG5K4v6nTjCPtqdRTcugYjq9TBfGmzHFMz5bcdre7H2J2dMx7BzjDUED4GVv6UzhC",
  "key14": "VypV837UZDZ8ZhiSR5iwL9UyGptXAhYJn5UE3PF34iTLMeM63dU26CJZaTZmuEK8aDzdw6jmbURPGCM3rCRRY7g",
  "key15": "5h1FxjhYna2oa122334UD87XuE73xTsJU4MLS2Bi8n3dzbA9fkR7iEze9beTmfWjU9XPC4dQLtgdSd6DQhR1oof1",
  "key16": "2dbuVz2hoRNgRTw77xJU6kjWYaetm2AsMmNniz42bQhbWtUbqcqTrnF89bDiJtDwsSgx8ktm7jfxkhriY9gwFhTA",
  "key17": "qiBfTjDHG46GJzxpxfQnsEDy6pkQhrewycM992wGkf14R3RAthvVadcXKmXVVKjmsWp2jTWqRS7p64L1x75tsNA",
  "key18": "2kBLTSxB1r72R9GuGc8h7PJHirApo9LDkyjhij4aFnze4o5nGG79HBgsNMvgwHoEwwPVPw5BjaoNVHk4xjHWeK1g",
  "key19": "2GiGXgd3BPn5J5JY2Mc4oW9Q6LzHMKRfBBb37T2k9R3i9KHRFbhnfmdY3sGhY1rEjhTSfmVqFbyZoMWkcPC9kj6J",
  "key20": "2pkNkcKC6LpeTP9XKEzthVUcpSPDFDo7ixHxQp9a9h3NcHm9yBraXATJx7EyKHoZhSK27nrUfNVmWaHQFrgT32Db",
  "key21": "2VmF7qW4bCgqgvFEc6jmCD9EngZAv1xnfoFwMp3BNE4nQxS8f9GxtUVPkKRrDor6WqbbYyMiHk71tdfYDcJYUy3d",
  "key22": "645t4cZbnH7rySUEoPFWk2LfKUaMUeVmyDTskmUP8Ms8FktSNZjqLo6KCspRiHjrYJ7rv56QMmtL6dRXoA4k2Daq",
  "key23": "2WU3pVaS2p3xdaQ6nfYL2a4nugoD97hBrUfwes4XTT477rMh8xno1LQzBz9sNxy4EHJRZeqyqXvYBnj5X12ipjrH",
  "key24": "2DrWtkudw4pBzLpiGDWN72m61HWEVzxggzKqQLp6fAkLcs3W283giBy5TLTMGZDGFvZeTGBivU5w75ytAe4HiuPj"
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
