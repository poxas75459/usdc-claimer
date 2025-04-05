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
    "4aSJrrYKRKoSoe6y3gZFjFdAv1x1rjzxa4fpk2MJ6e4YBAHsmnsaaMiYwWjx3TVWCDkXKAafjaG7Up1oC7posYeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PTmEtjHd2ZhsaNzExLdTzwKXhsBR8pXbUBFQ2m4cz5uKQD5gruWZSmqvKTFwsthrvLs4vNrfEgGhaQJhKq739Lu",
  "key1": "3tmz1kRKaTnfYFb7JNTUA6vxHQgeQ3safTwT38iLS3bbLjgdT1Ubi5XxcKDKVzft6ABZis7Gqu5JFxqbea5ibsSz",
  "key2": "56SfJNvMgd4zXPH5KZC3XszYQ4A7SUwenwGUy3GatbgDGJfgSgNwh1sfNwP9W3zfYqm6qqBmY68R3p9DQYUvT41K",
  "key3": "5BRMpEvv4CY7HSTJHu1uM1z4gnv9RdKsvaVquEsqvt2i2c7PvDEt3Amswq89m3yvJ9rw9sCsh8a1PDgLZcqk9vBk",
  "key4": "43cLVbBmJYKe9DSSv6yXabDKiwbKkkNVxgUxsqGJznAvVy81Ja9YNDGLCzNTPt8sKzRw5ExynepLsczjp1L9EBWE",
  "key5": "2Bb1rxMWV8dAGCbqsVPTN1hmP19xbt6gJCxY7afhFWPwcX7n3xrCZj41j3tccjX1y6iRpgyaBgKiSWypLkZY6Zsj",
  "key6": "4T1YmipbPtvYwUZz83PBM49Xyn3VoVPHJvsrWvWfH22uMobKt7nv51hwUh26bBNnxKDAXeZJrrEYc4bpt2DfhMD1",
  "key7": "4RrSFt96AYdumuDRpq2Xi4iuKVmjFxPbHySTRSmwhY5dh6yVA4p9L66qCjpsKASrgS1PSjyQMez9bFqNgakJazWS",
  "key8": "65stnv4vnm2xSBeZmzgP6EjrGDUfnJjvTWTXNtXWLcAwY4FrWcAmorPiYnKRfsWhtgjoeakoGhcm4aoJXCp6L1zU",
  "key9": "2ZN3t4zWCEdaLqutbbAaZdXRdDi3Biigynx2xBeVrKV458sVs92XchLdTsdcSg4SNRrcEx4aZpV9o2YirCzajSwA",
  "key10": "2av45oT1NN5hNMo1hMGkzFELrVfZ88eE3T2foDoibhFJCmEYDANxXPQSLo5d6WsU4pYmbT3gZ5RuWSiGefVBZ6sH",
  "key11": "2jATaopWgnNrhPyzVkj124EmjHTFPApmPH3QrXiu6tkf7y9UKC8KAcmXiBjQXeEAJuj9PcHtUKXipwqTCLac4Juu",
  "key12": "v689geJuNtS99oCfRacRCUT6dAdqow79poCb6Cwb7wQJLDZdNsPo3F312BuNWegzJzGQX19QUSHnsyBQbDVNbVC",
  "key13": "osHtj7yjqXAQcAvuSdfrGwbED5DoH3aurAzwm851SnbvWGvhci3dGortbYDXwAiXwykWnSu1pE88N3B9mMXsXXj",
  "key14": "3E77Ln3bTLHGVCe4B7hZRbJeHr41DvAr3k87UeqJ8S76eGzqCG5hpptYAPUL988XcZwYvjvVJpbGNP1HWmPUkjUL",
  "key15": "3Vq2tges9hjkpKNZQrWCoNziQUdCMbdhoV7zmSsZgzbJtdnac7YjPE2sRmtawkq2maWJ9CcsZKJAfPu83k85yaFF",
  "key16": "3Gc7xadzjgWmk1dotvPykwpDh8gZBBTnCZvWRcD2FNyEc4h13aagXtUUvXs7tjj1Lwj1MGytciSptky1PmHfzKPe",
  "key17": "3ZbiTfhoSjHBL5v9QEEPHvX6KNwLv74UDakqXCzwHQnJSJTPqvUH5hvgX1ThGvDZENwUbxRcoBApNLPUcE2jV3Yv",
  "key18": "2x8sT4ZHvMQtDhGYq2rEj258fPC1nx2dpzrNguFv8hfntwnpnJM25XNHArfKTnZh9kxwY7sjLidXFfFgyQHAhcQw",
  "key19": "4CyhHxrYdDw8VjtjpeJq79fodeBy7B1w7RpeQiU6tEjTXsFn3XfkuPhrTBYTT3JEZq2YudUKRhUauQwf4UHKUDdX",
  "key20": "5md9fHFeZ5EQSc1eZ2xsrr1pwZn6jdgwb4fxnxYamsi7mLtUbHZWaVj68sj6xS9RLFs682Ta8erhAGoZjr3mwxaX",
  "key21": "5yrrnCoqzpUYJnFPruZjWaAwo7Xbbv2ZH4xXEmSgopLP3H8pvGP1JQpYLKmjbvgxknP8zEHbfQswYAHKaJEgrBCQ",
  "key22": "uwfr2PixyXuDSxhiTH4VLQcVahPEPuyBJmxNLjRakzV5CARpbSyyE3KN6ynNhzd4xSbpZdqBNoEDXMb8fa5kqzf",
  "key23": "4sW7PT5EGohCZ4nky7gSx3T7L3CXzdXZJK6w4RLFppb5KqAY1eqhfTDfxBAZkCNJxRq2H2BNF5XrwCAeGyTeQMyc",
  "key24": "2KejDzT5WBEgmR8GtrhfjUzvmJoGGkRxQZdYt7RmBTphazm1WPu89viCa7SWmGCrJesxCJimtHH9gd2EEL8TtvKX",
  "key25": "2zbPGViK3heaGX2j7XMnFvXTXxv5j8TyaEJjxBoLRsX1t7JnjYd7o87bp2nWgjwa6gTb1XSAN97zkdH74iw5Un7z",
  "key26": "5K2xDHXBCZ8hzuHYBK7PsXndBV8f2TBiq2s2h9ZffnVC9x6W77CZqGCv5fioKrnpg5JSL2cPekM1EJtbMVRrsP6w",
  "key27": "2MDR7JhfwX23NnwYUqAWZKkybUZsPHrBikKQuJPs3g5KC3TBoCQgLeYye7faASWrjUUBke5CRaM9d4tGc8AXsWY3"
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
