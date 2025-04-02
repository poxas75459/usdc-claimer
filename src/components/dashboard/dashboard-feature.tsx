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
    "bLeQs44nZzUirDoMawBDbtuHKdxG12ToMyKPFpwERmWK71XhCaZVDTuMMgh5mqqayfPojweKD2Su7hHgQCaexVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dh8iZA5fDSHM5GXiffDCovdngivaPZ7YTLGjrjL7cE6uvhpj2zpucwoxGQXXcMV3t8anS5JoKwjZGVebtocLUTW",
  "key1": "4HLyhLXn3bCa2ry2NU6hRoTQAGtbdPtBWxt3Vf42c5aMtktuEwTFCwdojdVBPBmhq9w97a5Zz6JZqD1jSExwCsq3",
  "key2": "Pnx46GQ8Bqe6CGE7sRWPcMTjpDD3kC1vnhJzygR6KcnHrgSsJyCe8MbxWBoq9ZWYskNsj9CJvNZPLBPjhHCjKYD",
  "key3": "5gGLFPeTtPs5veRZx769naZokuQj7UmCurLoDXe6zmsT79Ly9vth716xKajHR6Hc26nsnp9Wq9mjG134M3KeajB2",
  "key4": "5q3zHLjv5M38d1bpBurGFjk3kB8pYAGnxZjXNJA2tJVxTAQAfCjRJMz4p2yoS73mpvy5qev652DnhV4aTNnocfyo",
  "key5": "5SimPfgKmM4wmKQ6sHVRTjiovg1oNBe1wzZFuspk4ETdQgChNwTweQ5PVNdizAMwqsHh2dz64DjoR8SeypYEUNeF",
  "key6": "wEKgkSJNUq849VpTpS7M8WNQM2KfTYne8UGA3eZdHNo3UJmhYS8fuLXUPhzCkwTGfYDXaXe82ybtatfGGJDKBip",
  "key7": "5veiu1HXBqpCFo3Dzr648feMYWVSCBxvJZEzPh8GfXjyhbaEP3bLTPT6GuvzguwTXs2NpJRBfji55tGyxuQYTbqa",
  "key8": "3SjwUAUZnfMeeNAAymvj6kv8rsmDXURKtdErpspDn85LcdfZjQAhN8DLzGWuqha9hDkbAFviRRa1xf9CMNDNiXnW",
  "key9": "3QLnGJQ7SjtPZ3wPpW6CV4iu3fL1RUjvcYHhJ7JdpUnK1qDGL1ofwJuU6ppQbm6js1ud542T8fjeb96BkQQf8y2j",
  "key10": "47GorwTXPLR1nXzmV79nx9veKR2WFhPaxi3zZvLGuWFQk9wGHxkUZb1wCqA22k8sEis7euCf15dNH6SzxPG7PCAG",
  "key11": "5sEBdyDQCszbF1kLc5iDTMsM6RXDiMEL8RedvdEwGw98veudwYkNszkJBKi13Yu3iR7gvGz1SsoqtP4JsnJpNiGH",
  "key12": "5qaKzaQbYttzqJwDWp7TgG9kzCd6QKZRdzsLUhMmdq8Gufo9dvnJ7hmsn7MQxrCQYKABpZBFJzLXt6CSQdh4PyBi",
  "key13": "2cYWCKDCyUtqczNH8EEgbbYrYKtgs9xYSD15zjTLvEfAhLxKMVw38XpUFon9jyiu1VA9qstz1U7Rd1T7LXHHsSYa",
  "key14": "Uo7ZkvW4ZshsQFTaAd4tFscorYxT6rmrSQABwmd6St7eEVYrEoj4h5v7jeTprT15tKjLFT729abSoVRPBTMGg6r",
  "key15": "4xaSqj9CJUw3Q3VjuUDtb6JVGGjR2SLAE7hZbs5zFfrXSQ6nZB1AFQdU8M33VjrEK6Ay4YQvJzY8j7QNmP56sB8K",
  "key16": "5VmrBu3CVjAm17GYwvwmhWrBCLXZM3AxS3pHGVthAAK5EyPSGMunEaWr2EFKMySc1s1wezEopuXogE7uueG9QZdc",
  "key17": "3KnLATSWU5xYAtCQL44hRhk7inYYE3pzeGmod2o4bBTddP3vQmXizi3TS7iGwzB4zb8EYFwfMWGj3J6gVJbc11M4",
  "key18": "FKRwZQpn4WL5knAi2YvinGzQqqk6Y2kGqxQRFtnTg6MWK5H5vUQXd7o3JG82FqUgRHQCv18rkvFABRRyEPpCpwy",
  "key19": "xZcBApH2MU4FsHyKERJLaCTYkGWuvGStHRfxhLqdjkqMZgm2zqC582QFDPhLiEreDaCwvPCfZrTBL2UgnhfFFEa",
  "key20": "48dKDW8gXP1xLR82wdrZLwF1UwFdVVpZYcbx2YRgHQ6xd9HjeAYJRW8FjFbivjPw2yiGGMuypxuLPtGq7GnzjGBL",
  "key21": "3Zq6nrHf72aR5mKNVKdEBtzSJVtFeaHsMuaiFd4skUz6rDfpgaFv7FnsYXQXdt3MFnfKe8PDP7L5WcLxU217Fkje",
  "key22": "5wz3Xq9J3Nf1QY5xU1Tc7i5TBEQB112jMdpBBuj3rGDsMzDhorPg54t57EPyzzcDSWNGgu5drwDX5tH42BWPziJA",
  "key23": "MYW35EpHq9QSVb2B1PKR7Q75M3NEbaGBGWiU8XtSTqwWiYVJfKdKQ3bub26ZSyK8xQ5hnhdvVK2stJTubrqaRuP",
  "key24": "5dAdFFeu9sE57A6fHG1CTxEK2fFn7qKkf2HksAnvsge1jCq9V182SZ3KHTprHUGYsswMu5iCAgVJhmCfznNGQEFn",
  "key25": "4n9fQ5fzmU6p3TRRq2yq1stfSD8a7KDSUsvWd6FpG4tHJYjV14niTov5AerSsyWU3HC2nuvQqPrZSdbkAZUp2CHi",
  "key26": "RSkTpY3EPwkcBbdbiYQVqqkQqoH62XftL4SuvKZaAcFquemNDNGr24r53YfBGNWw1YXrHbCDrun5mWKfq4eAq2Q",
  "key27": "AoVrKTdmVZCMAPSL5KmAvDJUhSmpoSJSM6HfF62XDoh1jkLo1pBX3pti5LP8eqaAtg2VoVuZkZKtwcDWw7AEtoq",
  "key28": "2fbjQE2pkYFiAwSBFHHdwqsizApR4skL9P6qxz57wo7wJQAaudNr9hyGJieL6MwCiq7dBBx9DdAk7dUaJXkDjUdJ",
  "key29": "2EHXHRvd6xXSHPG6pFYfPsbt3Nkm1LppBp2E1zbCqac9aUz7qPYv4EXcZw81zpFujdqM6xRBBihjH1RSG5GysWEo",
  "key30": "57JA6V5LUPVNyKsmxoVTDZvCSKTkVBqnc36fofqsWpKvRTknsAsXZpKdds5J5UmvorU7s9uMcRhPgvtZqeRbrZms"
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
