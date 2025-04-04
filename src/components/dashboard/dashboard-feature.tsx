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
    "4PDSxaghG7HQhtJPT8mb5jfxQck8J2UwzEKxnDRTTqsUcmD5o6nFLKNgKrz7p6N1CZUrTfPpdAg9KVzWdAf4V6DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LetaHaVvzUv7cw4SVPRBKuUiV4dV9VM7PZfbK7C1b5ZFuAJmoPpJB7iAA6sAZFY1EyvabDAe2JTuZwck9iAZFM2",
  "key1": "4qJSB7ABz65xsQLXp8JqVD6pB7j2qVFPpQvDwkTGwF8LWFvVqRJr2pv9J2HykwTw8e5FXf2KMuLjm5qq5vF6x3mV",
  "key2": "2W3bGizfm14JLTGQqDpkeEsDGYusLY7UcA5aVwsFb5Tzfx7SBwx3fbR8o6wEYqpguzJxgaVGUWLxtMe6itc4h2Bp",
  "key3": "b2VsvhW2wvs5HpaLZjoaSCtuWYn7HoyZn3DRs2GawVoJFr5zVn7eNr9STyYztz4VFXQ1pciAWqHQVEpTGmpCeS1",
  "key4": "5WxpQYZEJpoVJn2zjPSB195FgZpT1y6NNDrnZBEkHZWVmUnkiUSWN5LQ6juj5Drr9MnfBMcMbhytegPUmAt8f4Db",
  "key5": "2Jgq7bPhZp7JAUm2jKVyaitTngboLTk83FAdM7gtCcK6yC5npgWBkEqZpSRePxKi6xrXXFurcpH8Lqd3bAkDEaPN",
  "key6": "4hYZVgt5R9m43fzHHrKmYqor8ydThyF2HhPBPsmvu3fmguGUVv64JGnsnLibQJY2CHXHUkH346puKrMSZ3eesSv6",
  "key7": "2R5dc6mDg9S785kiddaRrqFFLFru28szzukvGUSDj7mnbs7QnNsPqsr6CUXmWBFPJ12xGJe1vLsZH5a9jZ5fasA2",
  "key8": "cX8qjVfnQPnSZx5K3NoFG6kBT9QnP86HVeKCHDbFbDSMNkTNpuy5tjFe3ps4MupV9XsX8UDQdhfYAt57Cw8qspM",
  "key9": "5Cc3FzK3rEaXmM819WoYsriKv9668mpN1UHQ5RwN56pbEtYW2yQA524ERA2kUf2A3oYeb462Gb6867fLv8hchsgq",
  "key10": "3EUxkVoZ1QScYZtShbg4rKYrmg18CAkm6xGLy6m233ep71Re2Qo5ac17uqzyxS3dRp48V3aQygHqMcJKwjGMAgXQ",
  "key11": "5xGRLbZQGeHd2u3P1XgaVKxE9w8YopVv5WnQGZif16Bpzvk4ZBRVFiWTPQCR5Fz51wX9baWSTBdmjEqRjBSQ8XC6",
  "key12": "67ckoHj5PvXGJCmWHjUR79YFmBETioU7Jy8qJKkkdX8QdVgC7fFQxiAMhPqCGLXMTrwf8Zn6V9DmAgd32Sva78eL",
  "key13": "uN7QmcLeSF5RgHWNHTLSdCGQuTCRrxi47qwsZs3c3xfF7bk8GHyA1preE8S53xSM3w9dJ6Fq1MskNqmcMXiN7qM",
  "key14": "JQyE8QfTCpd3pVbzbjANjW9BdpHyCVJxYT6pU2oXjGh6PSqMbaewkvQUmDeXgYUaLS1YoEjtwZXCEjRqWgYFtrw",
  "key15": "SAFYK9cKWWuhv6NzYrN88sXnrUSKHvkkQLd2jnsGxDcKc5J4PKTQudR6ZWeL856tCd2eFT3ZCL6UdtJdxHURbCk",
  "key16": "64YnSk7Wc2ZLsc3RFZQTJ82z3sa54wzCMdAsAmeF5JQBsf1HMj2tY9m53xbfZWRY8ZTqACLHmJVaqM23Hvxwigp",
  "key17": "2C9YwZ5igt4jJjSURJWJn78NsqURTbvhZmm3ighq5zRW1gJm2bovVZDVb6tJabv4JwhB2474RJ8odYpBU1Hud8VA",
  "key18": "3AMTrgu4zNXa2Vk2Zev5dNBy7GmETWVmNMJonRqfE1btyZDL5HKLuQk227MGqNCavUMsCZsvFqiEBvnzUD9mepCG",
  "key19": "65g58ncUTd5z7XcoFaKHjEVgfsXdG7oDxgNHuQyRVyeYEYGBaRqhcKpWvt8p2XePUEHZVfBNsxY86NSUvabNdxtG",
  "key20": "5P89ADGe6QFwSMhVacbQFdqrDq4wv144EAkdG1cFVnoYmpArniFTn1gNLmup7jETK8WNLdDw1cu8MQa5qhtr8CCj",
  "key21": "35fCk2rVV5UxdaFRJXZEXZWPgJUE5vdD5fiM9ckDZiyNnH66feXEu2wSRXhHJzm4eezyqHEXgccuffKDLTmrppLg",
  "key22": "4uD7WP4uc7FFpeNfkEhqnnDwjVodFyZifiNvEffro6wPsTCTfBw2B1jQbiCRQZY9NTu8YgnJq2bY9KsUyws3513w",
  "key23": "ez5uUrk1o2rHnggdrf3FQwqqDzHRx4aZTZztAGZU2ariy39heKng25bHzZs6m5RLVLWxVfbrjhrekm8vdSSK8iN",
  "key24": "3TwhUmg8vyCfXcgSZY25re7zNQJaD7gCzpTkgSFSqZsfU9SPhk7EUwMqzxSPfmAU3Avh5RidsEWeDPGR67BN57ho",
  "key25": "uEWEq7cmSqMpkxrd6thMhFAD1VdoyPVzK99qYmieacn4Z3Aexj7Gb6ZqEr1GvqVf1MMs1nrkCAms7jLJMrUaFXe"
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
