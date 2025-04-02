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
    "24J3nWdGtyWjsgao2QMRjSTF4r3M28YhmVTQrnKZdbWutNN6ZKFCMNGy1gpKqcN3yRUvinZPXo78c3eh7pDKhBFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrNeHJxuKEYif9A1WFNiGDWbopiz2i3yVoP4dDYAqRJffS2HeBmt9bgEYXrLen98qKsQCeUWE2Amq3tuF8QFtjf",
  "key1": "48ZCzKPVB4qgiA43Jv6G48BXcgnzRjVCTTp1zCNksrJDsysAVUDA2RgoeGf7pbJJyXsr3jzpNhSopAFEFbNzpDht",
  "key2": "5WtBLiXevct2H79TQgw34c3AoHDk6NH9z6QC8VmFexamw1frQpC3aGUTTotW2L2V7ZhSnfENXAjtACEhRjCqSnvr",
  "key3": "5QMyzAMQs7jnpiwygLGxG7tqoP7cTnzTne2jw3GV8aiZZgAt9yANVeatRFJLqGkcFJmYGywgFNLCgX4nMdss51pj",
  "key4": "5U2XrhWGjMtBd2rzV37o8rNWJax99ngaYJMciCyg2oxhUNo4m38sda533dowqJPx6JCe77kZtqqNWY8PUpyfzhKq",
  "key5": "3XDJigBb4YzFDz9Q5WNdK1e9YHWLDp5w3f9ahMTg3j4NUbFhCG6GDuDf5GML5tnvQxU7tB9xDDec6yxxVDAtWgg6",
  "key6": "A6YB2bjUKDyUJUeJqAPWdT92dB4AoqJP6Syp9UY3XwiNqNgynps539gCC3s3JidMAgdGtkpmT5Cf6moi1T9s3ek",
  "key7": "3t7cDC4v9nUtfg6uydKHrLx95mGUUZHxmpcAQ84U5eTfMjCcSLp5PRsJdERbwVqv8jEVuyN9mrqPymrfhkpR6zfZ",
  "key8": "ELgMrXpXcXya3PiUGT2WkvmL7R8zCBifNHwunCzX494goT9Dv3Qsjjs9F2qxq347vWGkpa7dSvZZHapURHsHgHD",
  "key9": "2s9CmjhDBTU8VRwVRmRrWsfSdApDfPihPG554aPMwEgrpKSweStdzXPkX4LX9SgKBjAhT5CRMeNyKCvYCM7Dw5c7",
  "key10": "5rW9BwfD7fauBzKDBqQKnmv8Q2oBj7AiswcL8rn3mcZ8byvpwPcpSQkbeHPvzRSTrz6ZtvL1gWNKn4kS2Mh1m6S5",
  "key11": "4tHWtx6cYTJMmgZdzLxQnbovajtrxjZLv466TKTmkZznSfaFYorrF73i8VAaP8RSepb5vAHMaMFCb7zY3eWNzZGy",
  "key12": "536J2n2guGKZp2PKDNaeBd7AXAMmJ1SjWe6YYvVMUdvU96ueDswrgxqZ5d6HyWgXd3FBrPRbEGZc9mpquPkZwNsq",
  "key13": "3xbFMymU9dDYM7Q2gEgb87UKX2bMyTTjc5f9ygQAAC54RLeR3MdJs3Ltxzj42qZnW6aGQmRLo1JCUQhnof72uBf",
  "key14": "21CoRkGxviFBfxgd4ZtTgmspfXrzJXp9cMdk5PvFmMTJfEMdE7C9zKa6DVpgee5qL1JMuywjqQZuahkhwkXof1XW",
  "key15": "5ZkZkzzbnaW4sRSQ6Lxy9PPUwU8mVtEbweQsH5gMyWSrEwvNUacp6sAvNDotoiNnzaaHtjbcM6pcVczgZiptaJYo",
  "key16": "57t3Xq1AQv6Tn9funQawTnNGDs69fCx7hT19h2HCCsyBvbCH5oFvYyY1fpGZVWa1jZhkShq4sgfnhjys4gtor8Ub",
  "key17": "FVkrdhyZ4uCEQDMHVKYGqnNaQAV59b4TPZcJqaFptrECpipPTctYygvSjaQyhAQ11TT6p8SwbkmYMK2MLsPPhYk",
  "key18": "54vPWgDNKWBqkkCfR6fFgJaM5zuuSUeVoe9xfs7eNTCoH9RiAtJSHkcUs6cdxS1ofCUx4P5v55732WEsyqQrwLEJ",
  "key19": "4SW8dr9g6sjrx1VnQ4wHFb7UZvEPJfanZ1myLPmLBpSfGrcWNAU7AQLNoWqeBZdKAetaryJmVTrMsmRJmGjyW42u",
  "key20": "4N8wmWc3wPwLxLc42aX79tQn6LxTxUHdY2PWYsq1NixPWMEh4qfCBEi3etqpprQN1eHBrtcyMRYtFtDAmVDYfQqv",
  "key21": "551SNmLDqvaiFmv33ZQSUFy4Koqj7hAaoUH9Z2MhwzCeKK9awj1P3ZHCtjqCq25R8Z2uB6rm8o6TQqbKXNFDySBn",
  "key22": "2Vv8k6xiDQA8ajL88j9fyVx91fyXBdPJktzamsFPHZqmpQuvsNfcjdQrH9yx3q3QzibzgtohAk3aHywqd6DsK7i3",
  "key23": "2ngsUS6jyZxmsV5npR5VHkSdEqSPbf8S2fz92j9bDMFrLRwg3o1LDm4K1GjJomHbMPF9aV82QEFrBSBkZtz2yWE7",
  "key24": "2MNKw8qwFgexHrGiSSSUPMLCwrdg3QMA8FnUVViiRacwPGSTCzWFcgqUyYSNuNTMrxXEcFsGZaMghQy1LLYkkPak",
  "key25": "2AuSngKL3x2qqtXDH7LaP4Yn4ACubH9ezYG2jRNjr3vVi9GT7ZJ2xPpnQoN9qi99H84VvtVEaNwbknS3BPbCzmgL",
  "key26": "4RzfG4xWgKfQRwLRaewKFHCu9ofe2KqJgKLA6ts3PhmYXRXNhHnjxrmFKByUTU5aJofeJXJVogmYgzieM818XVYF",
  "key27": "5MUQuMjw5qJ1GdYEPMYb33EdLh6yyRzgwiu49LCLtqmdmD9vned2yKFzqLFiKWNNhGHZpvL4cGcJkTji8vuoVKut"
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
