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
    "28LVYFRVrNM9gtU4vrCzYC2t8eVNDxVr8VXZ1FBqXEjBqebzuzTin63fk9PSATVJLW1hzqQtrd1S9AVmymNYeNgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JR8ehv8V84hkELedFTNjJBujFmQ3HCB2ZfgU7y32kCiybqwQQuoo1EJoDRdGAqPZzk6Mo43p8NmaZy8wT9H9EoZ",
  "key1": "4NufSYxESzDUtUnqrFRDXWCFhAgvgHPnNMPaSyr28zZ2x7ov6mA9UwRhuyprLdFqts3hpVnsNEyE7RXJ4mbPbfyc",
  "key2": "4ZZGqgesdEtH5fDnRo5v6Ac9BgkQsmifdDPzQ23b6pws7cnzamruzE4HzDngq2FAZtG9Jy5kzZDkWGc3khbnTSxR",
  "key3": "3QhDrsf83WNWafLddwALuhFb9ePqyYHqQaDruFH4CDfMe7ppJLZrcyemanPRYvUTegSfvSGe8zcptmiHCgbtVjtZ",
  "key4": "2K7VSkcGbxmHCoRSdRbH8cYiegrvrrQvuK7jg8jZmbaB4shq35ZmKufr478eJcEAKPN5csKxmTkSHS1rn4Np9orv",
  "key5": "3Rfr8RKFnPriLqRcJa69G9fo4jXdn1jta5HExxGQd52yCLuecNTNhD7ByQxVZpvr7gqNi8tu2RCsibPGbUKPcCaH",
  "key6": "4kF2n5dS1a7ePB3coKu6c1v8gTDWE84seJtT215n6NwiZdq64uc4sAPwsuMisrBGTmuQkMnDX91EqyjK1go7SYwd",
  "key7": "41N2un2q4wQzL6mZSG6srDfJ3WqoULSK9efHWc32GPEAq2C9tigVFNovSMJJMdREcpUtAQyhyrzoknUMhvToFhR7",
  "key8": "3k6ayTcmoL5LTH4uF3PR3p46p57SdgYGakiiETABQpERHPEKa8ZHTq8yfZi6SWZxjYPnULQ84xtCmz6XZnWsvEaJ",
  "key9": "2Mcp6vE93NGAuzh549DgcjNVzFA7u51Jw9w8D4Ci7vVqYM1muiDZnb6KxFe7ZJuahcykEoX65HFKd9xGYtVrrKvN",
  "key10": "npYiMwkz49SH71e7YCNVNpNV8aU4HjJreVxpA1EYkKfJFMtjAfVC7X7wyuFihpXtei79cs3Fm5DTyxhewz31GhE",
  "key11": "4f534KdU6qo8Udy3d2jV7HYRwXtf9XM7STx9Bgx4TyBsJWSFtRbHCJ6SVHsLxvNywG4y64rijHgpsC6QuvUNtbQM",
  "key12": "37srmW7nXz5VyibdjvhAFsrzcKcEsR5AqfDpqM9jf3xEN5eVBq8eu24XjfzAg5k9Yh4oGEr5KNh4kQmseBCfUzvr",
  "key13": "4kjxYkWfpfyDZLM3piTmdUpgo4mN4SRcK6A1uyuNRKGRUz3tybxpuo3YXmgWTmehBamoSH8pA261yjA9MDwFCVPn",
  "key14": "2HY3ZmaV6HZLMcN7gevgDwhC96pKtZ2nMbmCj5xRpvBtU3VPe7Npy39p2nzcsdxvpPCpdP2nHkJs5TwTGWjznXzN",
  "key15": "5PnDFhEoG2pC86TTyBsfTBmmTPzsSRhKzpaJVh37EXFG11tsd75sqg28SW6Z1zheZB9McfAnP1WA2mfLT3wYyi94",
  "key16": "4EmAHfFe3WGLpiqrSuRca7AXoVj6aG78LAZFRGmbRfU6Xe4Fz2YTwGAo8KszkLJiUwdv6ZrtSD5LG2jwEHXet4r",
  "key17": "4gaUDBp2cW1W6tLFnvVyykEANEkzARADYfBaighedADcCHncUgWJHc81X3FZAAEDkyTKEDzAxyrzsc94MUpX7asm",
  "key18": "4EBpjK9vUPWU3bpdsv2Fg3ykfYUfmB8EQ67Qj1FuUiYk3pxW3NKTtgdXHrTfkKmSmajkmrppb7JNusYteV5divA6",
  "key19": "3vxcC2AvTWJFrnz6sntRMGZa79vMPJUts3haGTYGWgXg1qi7Ge7ZwCQcDvhg6QEWnjcXum5LwjFRoiteC8w6oD6R",
  "key20": "34KT1cUzd5J1YgnTkrywVNGenLTHm5BrM3FfC7S45ckR3vi6KztjuJ94YKZkRvsq9tUx1wdBbbku114nUxHXHgQz",
  "key21": "2UkQm5PKtCJRavXfzy2WFtb3VJ1G7T9vK8asimvmPjb4joGAG4xmBjwa24W74sc241BZW9mqo3uZvzQcn8JSkC53",
  "key22": "322BmWk3zeWEhdrn4PJxPBeDGmBqVEC9NUkMUbMTs3jBS1USfTQ4zMi5zLduPQQJc2mCbErYbiDCqddkrNVq9Fax",
  "key23": "3hb9VEDaaqtyBU77w1QyUWbCkhibgBDMAeKYAm8Fzj2iVqwLG2GV5sV2H3V9WVDQ9GMCvaj5mne5okg1x6CL6FxK",
  "key24": "4vQmL9ojjqd9zrg2sSQZPLyTN28Ekt96JoxTJy32DkyT2yxurD1MRsbxGbibAjMbDGPqPoChiwERjhWT7HVheTyF"
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
