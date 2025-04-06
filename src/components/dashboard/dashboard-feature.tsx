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
    "4jcfYXu4awE36K3xjDKzQmaMyC1J74XDyCPWuahZ9km6WvgiLqhK1Vg3HsM7BDrAWtB7yGwA14GxwqKaYog4eGuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u3CWYdhansjoz2yBwKefq285xgTTipK4Sdohi4AC1C1SziQ6A9yY4hRdEBYFDDMy44fCBkVVmfqtCT7dRhqQRyd",
  "key1": "3aCUK4Vm1bCwyHn7sSmqWptcpHXZi27wxZUkvnW8RANR659NVbY4qENhWjpEAbvbQ9wjpdaAAZEPvsqS7S7ynzuB",
  "key2": "Yvxj6k7tCHvBtAv8MBPkUNg5Rj8RvX4HpNnWVYMGMvupCCKatHF6JJdhNjE4g45Lh8JB869jXHtFBv7K272EnFG",
  "key3": "61HY4H1e9US9ioKJdExJ6QbFBWM3Ujp6VvRohQ9MSv488RHUZ34syERVS7DURxfUBNcSD12jLRSFHv316BoPdCao",
  "key4": "4Ty7d8SyQzYyTpXBLgXczs5jkfuEaw4pBDN9gHAZbDdWwZzCEdMQTz23vePSdtYEegWh9TPHJwFuEs1pikPeXKCz",
  "key5": "2ExPY8nEEuqwWnSVSCf31k8ZE1jvMWnsgySZw2ngeXTP88qq2qoD5fCr69y1UVCYnV7WiRKFTWLstm7aBswXAJCm",
  "key6": "3PrTNETxPhETvfGDm52KJUZqZvgLkupR4SYra3GnXNFAdNCAFmpAJUGKy6Fr5PYZLHuscsRycJZmUs1Fuc1EBEpZ",
  "key7": "2tzQ5aB9Xri9WEGZQTkdmBLPgSc7xAVYfHrHh9SGae8CU2W3QgSkdL35DF3deoLUrTSeo768A2xcn8vtL3a63Mi9",
  "key8": "5EXX8n92UjPGJykn3aEcZpGUGWLDwCWGhu2tCnzPBgpiRgjg7atqoBktTGJjqqPDZarZ7GYfQACpWVc9XQbt5mTu",
  "key9": "2uFkCPf8hM36WXALaSGxLtLGSymHiqG1AqnDSiGH84FkTuHULoU2uk9gSYvSCS2WR9ThakX4kDaJfsJ3G4fW78da",
  "key10": "464optKxFqsbwszw12pJxSsWAp1SoggkCbN3VG2c7uxt4MXRN9FuCCWxWa4HmjTRd3a5mVZq5P3mGWGt6oysPae9",
  "key11": "5W4bn6Te84X2sQDeXvrgCpxozyKdjkmPWng8kJCT8JqAFbiLUaMGc9bfU7uxTTvNbGHKwDrj4d2ZMg3QF6QfyQna",
  "key12": "2E7h5Di3rUNKjv5coygVBmxUNejuzeGy6tQKbnib3QmAV2Vh4Aiiv1oKJFCrw3SQ7zsqVRZZCpJLLPSLUhjMKfLv",
  "key13": "ciVoR6MMdyLdLK8bLpcNqsFJRweWUkBxMMVMvAh27MapjrFDSw2waWhpDDRbbTRFRZ32LqFX2rCrrKf8GT3sEMf",
  "key14": "3AmtG1oxLhniBCPKUXtacBUEuq9Qn5vMi5i1a5YnkmiM5C44bmyMrpQ23yv2q1GZ1DnmUeeWaoqb2NhLtCcWBhnV",
  "key15": "3pNePa7YiWcnbSHAEegBFp8pyCjZdi7wTvr617Auks6cYJL9QAS8pJKX8FrbFggD3WP5bgXKUXseMbiNw9gPU1g5",
  "key16": "45rLwGa9SsQSADogssXE5uUUdPPcsE39RUrajuqYhud1tyUbQUFRqxvyjuRSY6NgcnZvFRXcDgjZfZUzcUq3HNMR",
  "key17": "4MokiQuvTxNuWQyeSZgABzyJ26h5WZvvPLUH6CdWru5Ag9Vy4gGXtm1zSm61uvudKV8FXdbferG6Xzgk3C4HX15r",
  "key18": "2LSe51ehUvTu3ytiNWaPzNAx5tpzmgqgpXFAVXRmtZvzs1Ls5CKR181DKTpJ5MHCK99Nr6pwqQ7xihZjqPsj3Bj7",
  "key19": "59W3quLZaEjWKAuafbnWSKp6vkDrEEwMj7SDPaEq6xdZNJyrCjZd4xdW1kkbdwAs15S5jXLiGs8YEmE1AdKYvPgm",
  "key20": "3FZn5BpXRddAPP3vkLMH25ya8YQN3XhWnT3tSw6D1FsMg3gyEubhi2k5veFQWQQcSEL1nnqKXAMGjtYdmfouASuG",
  "key21": "4AMYJZjYfBqst5nUrupK6JrsSTfwvTSgrACMYWBYUYLDwsDgCGUXghmxE9iSmJ4UoibYfdUaKmMWuQeDBYfZufGo",
  "key22": "3Bq4yAGCwHejj3gnRJK161eBvyqkTXfXqorNsDFCFyqQQVMw9M3Jcf6MFb81e46c48FtT1rbqMH63p1DHo6Gk427",
  "key23": "26y3JdAGni2XbWxvavZwSAi8XrzGHkn97FHdqobwnV5ajK11seD1CvGSJ1uA4kzuiWcA8g4We9n6JfZx5TNMvtZg",
  "key24": "2BMKDWNJzcdKjGYicbMNGNabV8MegYrBP8XbhbKgwt2e4c1AraCKece6dAJvktHkiAoVCP2X34JKf8RGdghiGPqz",
  "key25": "4CFwEB1n3yxoeWQf1Y7Ci3rsjHMLXg4RaCsiTiqiMdPfwnxmE55eexJKpWmrWnxbxDBihiyJVygttbSsdmuN8fDw",
  "key26": "3NgyfymRurrrtD2wNhZaZAEjZtCHQwCfXvjMmdvP4g1LWS6tgnmhB3dkatV52cspiEgmH5FC3FxwS5CFeSBjjKke",
  "key27": "4pwvzyiTL1KhpficmCkTVcdtemyUrAiDbcL8s9ruQkULGSV35XgKtN6UCbvHrkumvXHMWnz4VKh4sEyyg4VrwAbe",
  "key28": "5MfKakqXcpVpWndWgZsGVvHaNsbm1bAeFz3LaLdunBCK9cSEvxKp6w29ARs3uUWXRhk5HzGhCU6ZPaYt8ijQMrHK",
  "key29": "4UmY3NXwTpM1urSA2wZ2uqFi151Zq79KRp78htFdVvuPZifcykJin3ssHXgzJHExbUQwfujeH2ZMAguUE75AabNF"
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
