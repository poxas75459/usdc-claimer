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
    "4BP2rwWi2a9QKMe4CfWwS4RqbFCQLDVYMaHi6oPamLSRbUzyG5Drao7hbXouGUaMQgNW1rAKEDvzzJAUjjDvhK2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fkFRjk149NAqeWHq7c2LBC9rPjpCQnt5DAZrcBxxPmTdTv7j7mwX5Q8udbr1stpFkE2UkMyUp47TrvVnaQWW7G9",
  "key1": "4AU1uDcHTRMq89PTLbzoEQw5RTnBUPiSxGRWMXf1AzaLF7FL6hbfcXs8bdKjwfcuWLSyuXRyStHTzw1yzG6Ldcxj",
  "key2": "3XA5P9C85DRY6X9sAeLRqbdFxQpFC3cpSvpMgxeuhR4Dao5eSSesGvbGfWfLhyTDXZDuw1M5NC2RpPW1d1MRbJdY",
  "key3": "5eN4Bfc3sNvedBtbKVXJozc3i8sWpM7d3W6UcXeT19nMe9hZLzuX73nKzgmSV8rMknp94Pez8sMEz58dk2JeeuSD",
  "key4": "4vd6VG4gUxSyx94xrbk7gXQf5YMuVn8ZKVbxEiz7ChsQyG4nV7bjtxjRBscv1bagGYo9WxHaAT2bHZEDV3ffMXS4",
  "key5": "23uxRNZiDMUviPifR2ejU3VnPGj1fsCbvL7un4yPfW4hGsN5edMLY64JQqZYqZ9DvCnQz5iQGvmsQJBCYFEibkPK",
  "key6": "WxcPdnZ3Zrrp6S83G6M59un5qf2UDmL3CgVt9Vo9BEzrhpL83Uc6bvQN8GFSdQJ7SRiKkhnyFDCJc9zTUwLHrv8",
  "key7": "51SBEwyq2HkPvPKd4TKCUDCZkCgtk8Z1WD6oGUbpmdCEdfungndyR3wMcsWvSiXys9kE14mQKTbbALfjLZ7Yisgt",
  "key8": "32apitZNnSdStJr7rmQxxm1UW6eNXweQtJ7364jzjQSHdme75RX5ENZNQnT4T5GN44ey92xHJyjfAY77izdnuigm",
  "key9": "2zj9yYKaLroKs5m2ga1QFv2pVEbJJXbPytZEXuevh3sJRBLbCxgionDTcBm7VUXh8aQkRdqPpHKyN33nH6cpvVEX",
  "key10": "DSmqeH2PBqoEfKNuozAk8XU3nzvqjCTn4K4qazirsw9v5o8yhngc19N8p8mVXLn4KXNte5wS7b4kirSfyQTUztw",
  "key11": "64QHeF1sSYCf3gvdLoiLTb5SQ8BrDiVrJTLKHKFPe5ZCTkqQHoL4fiUvQgDLDxYEVDnm8HHNFbUYSZYvbv7ktZGN",
  "key12": "c5fSu7bviT6kJP4qKN5EKandX7fTTr6g2EMd759XN6x9d6wQaMUr3NgEoMaMXWkFyxH9t7pQiwPqc9YpjYVdeyJ",
  "key13": "3WRCspEqdsC8tQkYAdS6wmDZM3oQM7Ve3EgR13tZBi2au3ykPnRNw7YVBtekxYs7T425kyaUz9J2u6GhWZoxTHkL",
  "key14": "2gJMWNUN4zdQ97p2z3Lv5pG72szAfjdxqGuKJdC1tUpfD9heJ5rGciogjfL4fCN5e2m5NZE7WVUVunE8wMhpHsfd",
  "key15": "4BZ3up3ifY9Wm7JvKnTMU97ShCDyjGq2BGp7Riicex38TNQWcL219dHjoabFYtj8DoynUoWe6DbK3wXRvMnqkYDE",
  "key16": "2YRrQHXJJ2WDKZFsk6KEes1uLqbFXxTJw7RDd7MqZQ3DWwZk73qtgg796je7PzTdJGpTEiVZkpeTARvv34DzxuBf",
  "key17": "4puqjL7pEtyiwfc2eR5zfZjEUJPgMYTLCfr8KqWv6nAhPRBrm5jG68YzquLzt3r25yc6ffk3icxbiHq3oYbMLEC6",
  "key18": "46Q6RdZYq5uNXpT66st7A15j4MUgNjMBGgKSnpsuyjdTwvXK5ktPejzsDyXtsVcS1q4rrBv28GPLTo9VpsxrcmrK",
  "key19": "4Mb3jC4pj6ax8y8rGmzcs7KLReRybYYiEVCeSc5e9fJ9R9vYayXZ79RRabtvpKCXT1EM49sAxVxDSh6ApqQmQySa",
  "key20": "SYe6rv44kA6qZHM8B9fsH32AhkAYJkYJ2PzsxocBtgkdARzpMB4npeXGgqV25yG3KkiJHQPiTm34R2aoxM3Eitd",
  "key21": "K7a1VvP5CFoaXgVJDCj7ueqMBUnpDrj5rGqfBJxDiTX4CMze2EicH2YQ7ftW5DtjdwGLBeoTythNtmMh17fcmbQ",
  "key22": "4BoMVPwwkFj7myj5wfwYYkCXxLyobYyUX3uN1JZVp5ha7Yvc31pA88GSD1rQDyvLmCstrYc8Y6GmSEf3Edse65eV",
  "key23": "5oGg6QVD1Xr5bakqKBx31aaG1amxaRFtpJqgXYAPovAFwPNzzXnyL313X76GUYhGVRubFZk3CM3hFzq4DCHHTCxu",
  "key24": "5vFNEa1mVEz59yTUPsxokeAu5oyHc2wEH12SQmxw7js9GkkFoHFhoGkNYfiyyWzDjNvfqmR4QctignWfGj5gL4Jv",
  "key25": "q394r6cagjHin5oocfmtBZRjDK5eZ6LUjcfoRrpvpPdEqXgYtBHPLGAVNd7m1ViHuh9pVnZ4adjHouCBjEAsDjN"
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
