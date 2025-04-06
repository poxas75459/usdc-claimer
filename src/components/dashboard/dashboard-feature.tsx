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
    "3EhHicPZKup4EPSPLx9s1HuhxrmKaFNrW5cmqoFZ9LunShoTg7BLWYSsFihTkfeQRsVsZRmJXNWa5StFVa9Vzbwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQwk8AfKNj55kmdb9nEjS9x5VM1QrpmwYrjmitUgEvCMte3He4wWJJuA7RbYEopb9eGZsKPghzAMuMBuusgo6N4",
  "key1": "2yijjb8GviZeJt8FskrvbG5dXV9K9LKVW2EpRMor7Dv6M4bTiMPGsfboJ1MEwyg7hbBixfx18iha6BS1mSwUgDUr",
  "key2": "2kwJTZUn4xkZTYFHcAV6Bfdh3AFvqVrFuqCMJDDbLAtQJ9e7n7GNG8eRhJsfE6Qev4oZgiAYb4pubgHpaZdMkwHN",
  "key3": "3fpQaqPwkW27jY16kZEiz6vwr1wpoPYqVp3KBLvzKoxFTgJtZHrvv5DThnDtjrKtz93Y46Hd27Jx3urBYroyqLfS",
  "key4": "21sjQN6wNWtTx1FQ5Vig87dbZDPETrL6K2gRME5DJDtmkEo8vm2NTpxMHYi3xPB3ubovLWXeo7RvrqqA9MbApYW7",
  "key5": "3dQEMgDypNwZP4h4KpcjiNXo1TSfZF7rHKh3CYsMGKT5ab3W85ZhPdpfxWXm2E3YsR4w3orurMJ8d1aBtZzXLwa9",
  "key6": "4CwJRL5nxcsTXCNjeJXUKuJhrYmo5fY5EfFsHrcqfZfJnBq4eBYV5mjiYUzKvAi4pYxL1pJBGebCMye4gJr2fbwY",
  "key7": "3ZXk1Kz8MWhTa1rPkeKBXzbbyFDRnDcuenqJqrzGZnKWYbMy6aiE64ii1dsaxA5z6dPoEWwfH2nLTtKEYd6FjFqg",
  "key8": "3Q6WthxPT8cczSVLHFzEwA2Cjd3QWqmGLYb1gjj5ymSR7FxeedhA7qtXsjrpPbVZrpRBzyryct4AhEcEWvuP8iiQ",
  "key9": "3eLQRyod15KDwvQUbLYcu6ALkugsKenuGK1uDRq1wJrejTsU3gts33FhjE8xGd2RB9G163S3DYPBh2sJLeSJwKsD",
  "key10": "48pc3RRxZpkcp6rzQsBQg8cw2J7t6MCd1wVdZxP7ZuAz3FG1jYsuraqSQ4FkvyJ2gkqh5N5i9m52FyPHXecN8fJt",
  "key11": "2pU4CLjJYGX3FVR1ZAaeRP3gxk5gDURqkZR8L6GLqtwsd7GbAxvQ158BXbhMeRfBSiSr1eZ8nC36N81GGNzoqTkS",
  "key12": "44CF5d3FfwhtqLdCCg8v35mN9nvqd8ZqkxVk6dqFdbbGGx8xuvabuccFh1wrkkzuc4VZuLbADTn6KZZr6o8bETtw",
  "key13": "2J2hVSMxcNKHetocxGcLGYSPuFa3mnERdGmvHGcpDwLp5U7u63FBFYLhCaLEwp4UJHJaVgSJUj9UJqAYnVCyr7J9",
  "key14": "3HCmnUKkksHw81FvQB6gDsXGfWYKFppqNvePpVdxB8Evxh2sV949CchPquBxpZwJTYD886TvbQAq5yD8xTq3HVVj",
  "key15": "3ZTSxfKVBdavDFTShpPThBhpEfzMffm3V9gxas8P3GMMwKBuW1DMZ1k6Ne81rsChaMnXpv5jPjJaTT8uguLXXoMX",
  "key16": "MnNV7AjrLeVPFJ8snoTrctAYkMy6yvqdXtTYytQZngKJArbBnd3QrAQS7Xd8iXibuumfqNvgr1MedgThkhzht8B",
  "key17": "3HPyUYpziGEwuFLvCXiBdGRq9JiwNsyVFACuuMGftaH1LCnSHSrpXz3fQm87pg8MTqhcQ5gRi2bndqg7zfpH9R3C",
  "key18": "4AXLqd5uNrtkkpQDC2jnqFdoS1eDDiMQYfHJX9wBr9o5VtxnTL9m8tZomvUxoUj5TBiCKZ7t3Vab62ZCNGp6Zfrg",
  "key19": "4H24DULQQHqJfCkVdd9cibQm4Xsqek4AXSzF5AZKAqACUGFfqA9RczkmRmAPBWM9C985PC764AzUkXXDDoHHXiSy",
  "key20": "5VRsARk2ic5kwWYn8wJqvnwHXufo2wMvHP66uUZcDjn27rSc4RzPQ1vHa4Nz17oG4z5zW4Lr4QsJJvuujBgmXS1M",
  "key21": "4SRhqD31sNE4BBjM6oc4LaQjeTkdWQ3pcj85mqBwMrv1oSjiWJA9KT15nCp73nEoQFdutnWvz8KAfRJnWLtTnAhN",
  "key22": "573ae1EcW78KeAVGE74AC6ZRRZVxDkH55Pc4GqJ9gPCKiXJWcCV99V7ZRHkPK2R4tvMq5H5JNLdz9LAmji4qV8rf",
  "key23": "46ika7qgfDfFWPDh7foz6k5EZePjXPukNWNepsYa26VgZ6sjcbCuWfRshGuQhsx1AtRKEFdeRSSH3oNRN4ViwSwQ",
  "key24": "4jTytkQ3Rz1xd5iMjUretFS5oXPzpDt4YKFikanKANTQEbjTLoGtUvRfB15UhUVhc2Y1oRsTV3UxYtZonatoihq7",
  "key25": "5KqxMpjJC6KyTcyrtAXYJmsfSe88hB2bCmoeyoHCbYDvRhgow5YbdX8XvSb6ZoYGWkCcKoPqwt89kH1nvu3Ub52N",
  "key26": "hvYucB145q4LZsQkcwZTAWpbLw647npmEdB9ajP52QHhuBSTtC2365idDSxcz7Dt9RjG663HNq1KwQhRpSmvEmo",
  "key27": "5WmHW7TbtWgjqxLK88YhkCEdLy9Cnh7ou8xYVw9NvHa9L3o1kdy9BzBAbW4kP3wrWuUQcYWJYRKJWdr4Rja8GcuE",
  "key28": "4gyqEE8E15MF9LvwVzHpnLPRnfpCpBNaM7U3A4zzHkn2QntEvySYGea4UU1Bfeam3rNeHdZgM82LuoxFtJiME9SW"
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
