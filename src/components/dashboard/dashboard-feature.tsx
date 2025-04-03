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
    "45TW889q3eLo7N75YGu5fezhCAKuHuQedHjF6y9hi4arSCGRiUCYPaBnwaPCX2KUUbYPZUSmVSRfRPj4DtqHR6QD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YduK8yq1hydRhMBP9CcwZUJK3hPtNwQ8UJvLQafXG82Q85RdnZoXmcvXoV7rQ77gpR4wzmnW3wDjEqyEEdHFnKu",
  "key1": "3CDEk77Tzmr9mMCfTiZShLjHoKshUPAa97heKE5SF5ACAWKboJ1JS8ynB6WfE9mbVTno2Tg3cHVFMwgCbEY1xyo9",
  "key2": "5veZsf3YKwadeQFVRHftELg1a72Y291zuMKDmRgdu7EC4JrgfWCoqxippkThHCcx7JXJCQMXBkWRqWMUSUzeGgcK",
  "key3": "3wpyTM6djkiYUPfWcqC9vzDmjeU562QkiHqZGDw3YMTZWwaBh7Jssxd3PAoaugMUxC313khCmdgvyiWHhtDgh4CE",
  "key4": "5AHS9Tkrc6Dr1UXFDx9oaCH6qzJC6boF2Q3o4AKMFfUKyAwHsPsmEeKuzaWgasqx7errHQ4o53dDCZqw2YB2RmXF",
  "key5": "3wBuGky66L4LW8pXXjaSJfMzCcHhxhv5oD5ZCM1ZND3pofB3RxTfcbqYjj2BL9popMGv8HmxEUY46fPy5AG4fKp2",
  "key6": "3VV9naPQLTBWYPQck6LLcw1vuhyB224daGiuUcdog5dyvKcZ5nfhB8TkYMVrMje4e5DHVN8QpeNkN8KvkCnmWY6n",
  "key7": "5gk6WbqMhs7tMqDmWxdN48i54ZtbijcEwro5g2G1r2bCucgz6uy2ErijK5GouiEC7CstG5e9tZmLfayGHQkmjgLU",
  "key8": "fx81YyH5iJaxjpffb8k9rmnGXwqbFHZETPRegov7aW4c4J6kin8wTXugoPdKPMBGnoPgQ7jQj88xJTU8JVrH26u",
  "key9": "2soJbsCDbhoaixczj6NCvjTYZNWhnQJ8MeNgAwNECpkaShQg27BthdkvyM46yyWGSFvoZ8Xny5pGkZx6TpHTEybc",
  "key10": "swwSuGxrEfW5p8VPDaGHUmQm6ERB6NKisUQcgDWJK7PotmwXyksRbsSCrYNQ8WakATvW71fZnVrLLyCDiVsrv7Y",
  "key11": "3TpGtEtXFRuskbTE9buvcscKQNEBiA7g8kqfDBRY4yqwMk9hobwCyX7EzAF4TKDchowbb1pXhbMMtVRDRwFmZEqs",
  "key12": "Az6RjDvzuRor4KvMCdX5gLvoi6Stp3JnyDRmQJA6FknxffMiLbYH5XhrEePN8Aw5e1CVBTr12M2iBhEZPheq4QF",
  "key13": "4Hz2NWzZFnc2ebuZzaHW7DvdimCnHNhB9jNQJpPv7LKJdmwgRwFnNTNnUmRVHuzT32Z5y4bgcVUXojCirAtmvmDM",
  "key14": "4fsCLyVHgK427zs4q25gtPEHn4cN5iejXxDPQVcNAr4eR72DCokNuLM76Ly1ApwN3i5yDVmNWhydWS98vfmJzg8b",
  "key15": "3bTRLzkvmww3yDcDtUVNrX7cLRX17mhG6mq4dL6CM8k5iYAhkVvZCazDqcJfruKJE7VvsH9PH9sNkDTs3k1rSAMC",
  "key16": "3BJvneRaigGXAdUvSHmRECXFBTDrxqiSv678EushaetmtR1C6EgHGwEVwPftZcdrwrfynoMmKa7j83ipxktMYUto",
  "key17": "2EvmyPBnn29jByM1R8N3no1xSMhpdsEtA15wEzCR1B9QKbGdsm3kA4TcPpjHPisWBfeNJX2J2oCx8vLJSfve3dDj",
  "key18": "4KDWQa3QffDHT5e6ekWYfwAPV24tHmcE2VKVP26RU4Dajc4rAhGKhRCUG1VKQ8DKr37fG8TdmSxTeir33idT4nwR",
  "key19": "4KtVATPzeFS9w6ZyjnVXUtRfH72MUPuENm1qE24z2NjUZKqoKpNNwimKDxR432v3tJuVZdEkpFnRZ65BssdFRiYz",
  "key20": "26CDKxH8kgQgy4KFAfkxv8kv96HZusBBs4uPpNqFYwrXz3aSA1XALYgWpq66MF6GWdWm7JsyFUs68SS1EH3dpFGi",
  "key21": "3WVwX5bSKwZ35ttXpUm2WqzUnFFvaofP5W4E9d46QnZfkCRH9sXAfj8yiFWSDCmQN2FqLUspGvmyebqvzDJffxJK",
  "key22": "2URRhKe4UVLcNDbuDhHRZGJ3jKfpHSPwi5r8fdHkHTTkgPdD5p33Zd4AfPLkDU7tQRjv5B87NBN73R7fbi7PQkvd",
  "key23": "4TafroN82SL6ZUsXCUDSZLNhj8N1SyxVhN6yw2riqJ9SR9UoBk4k2vMGPRhfwzoWrS7RNUffKvzYHWmZTo9C19qx",
  "key24": "4GJYr5uq2BCSe9axN6fApsCJttjUQ3RstULDrp6iWf92r4d3iLjvYL7NvXt686nsg3FoP75o8NKkLoSypPctBroy",
  "key25": "363C9GfE4nh5p99g4xnJTr4mmyN3akRpPcNRvQrvSEoM2hAafDkbcCZaHmwHXUcuJVk5xeCyLFRGbEW4VJ1WsaJH",
  "key26": "4sptGpH7eCUofxZDTrMP4JvDhtxk3cSKeTQ8YCyBhDCSPe5nkYZqkkx5xzPRkR4xYWxetLouBbt1QgvaR6iUJfYS"
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
