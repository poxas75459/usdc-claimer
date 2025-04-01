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
    "4wmoFAoHhb8kXmrGZuJnbvp2tMoJRwLRgp38BS7fMhAysN9sVUWJ8He9vgkNGHXeCke2QU1nK3T4SoFTgxnUTdBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rTiodJtuxc4Yh5uZbDXjcSJp6u7noYFMupWMQAyDU8Bpfmy1AbXMG5MWtbdyixzyt6SUUkmW8U5R4jR67dUTAQh",
  "key1": "3vRNDjVCy1GuruiYiDWKjwn8Lz7a4QU82zgvzF61DRZpX42WAaXUQGVY4tCGg1Uw5D8WKsW2kbece5TPycJtP6JC",
  "key2": "4VwPz8b5JBE1joU8fjegf9oLyZPeYocA8qA4yG6XjkQwCCJVpQRcEq8WLE62rYXeED4q4XZ95mFnbVQRxB4kec3n",
  "key3": "2ZGfLPmhLFcbsScRzYQR4jzruCfvy4Xe8uEJwKX7FWkf6eERPNizE2gtGQSxu76U44zKNnXDPmuCg1aXyBE4XJJB",
  "key4": "FSQzj6DG724F9txwReVwwWRD11vBXx9M7YkhWmMqMvDCfYVHctPCi8WNAK6rjmbHdmf8LCJZGWzh8m65sbQ6mJE",
  "key5": "4Tdyz8kRUThaWcuQ5vNqrBQsZgV9nihr6BLzWo39jj68yYM9BNM6Ycc3BdZdwEfzBzpWemZ4XjSvRTC3o6uofRSB",
  "key6": "5cCDY9CYTr9ceubsHY9VHtLShJRBHqLXT62DQVs7AduRMt8Za2jRY6XaRyF77tMLNPETcWkRoQ1RyWn5kWHYwZxc",
  "key7": "5oaJHC4VLRqGDPcSL7tpNnYPVEkNxePC48opp5weML3FnYFTvgSA9gqvnoTDJSNryWeNcsCEBoW1PHXBAZHehcNM",
  "key8": "4rKX1Rw4VyYZiMMT9PPstF5ym6XEsfe13yB8YcJofRAF2MqKtQJLR19yCDxK1Am7uhip5k824nmjpaNy4SgMuLsz",
  "key9": "mM5okKiGgEMEBJZ4MzftaCpGPhCR1QPJ8CcGshjjU8H9eKLNCivz2t1KX9r5m98NSYr5iCMFVYBvLntmbSmTpSA",
  "key10": "3VXK3K2sr6fQxPYebBnnLoDXTwht9Tskr7XnfvdXXgUyEvhT2Vyv4smp5Cf8ijzwkNzktSdQdZF1tv97v8PC6LJH",
  "key11": "5RXNm1zhw84kQAXeCebNUuUuDReCb6o7w9hF8sMZvimcw46YqWmpgXRgT1bRrTar5JqyVMigp16CRmFHsup9KKK1",
  "key12": "5jvkiDKybDvAzd8JcVYNCP2tcQjjv6B1KVJiWmqu4KR3kdZJ73gkNuLZvY2gELvsNAetj5YBTjyUwhFF3PHU19RF",
  "key13": "JTRMfimVJZrsPbcNhoPk73hvLennsx3PmCjxx9XReQkn48aC3XdNUUVnoTHoHDVNVBQ6RUqubVqTexCik8FCRy5",
  "key14": "2u9zgz9PLUbGy7xeWPEwKszL8Lsd6WSucN92LXrJK78QzWT1whmceNQKs3YYrVg4eZFSbWNdH3RqWLAoVPJca7eg",
  "key15": "4TMHNAwMUzjg7T6FbXm34dMT6GE2RDec6fe7ijhhoFd4CoNHP1eFwgJvZL21815YDsm1SE4ottLibbhzq7aNmTQg",
  "key16": "3hzaAs2XwcvMAtiKKCXWGAdGR6s4sLX1au76QgXrTtxUSGwMvyriAWJSbRWRMwz1GFo2nbDT6ud1Ww4mqHq8inu6",
  "key17": "iYhq7ao5EMNVvEnEaGtZ4Sjvyext1QzNTLNoaukepr6QmSEPfSjG1tu8RBECYAmiiRsDYEXK4hg8iM68wPKjDLn",
  "key18": "255uc1dYacMVVzWMtvHtrmPgUA6zxKUvYovjsyg6YWwjM8jbSGMNo3LV3gHZxede2cY9JwH9uB989VCcF7TW9atk",
  "key19": "46XkciQ9D7UPp8hVmyMXbrewEYEXSaqzAxbcm2v8kr4eqKiVNBAoCebNNmKP87ZCQL4qQgiG8nRjSbNLMSDHTZRX",
  "key20": "2fxCN5Czu1ZiRTXf7PLjCyfwFjf4abhR3kGo3Ttn7DDxhWDfk2GvWnTpG8ca5jXmbmS3eaCShvP98fw3Hnyr2oGi",
  "key21": "35zG2KjqUKAWgCtwqvELNF8hrHn5hW774gMM8iGrJ4LSqmbmGEXjhshbfpKg2pdwbKpWMSMPUU2ZMikjBeyeJatk",
  "key22": "5cNZd2gQWB3PJ5wpqiwZZXc31NqU4WPtvWMN8ZvfctzwmF2FbSr3ppb5hhpiHE8UYHctBY4VCuAYLPxZ2rR8LFH3",
  "key23": "4F1YqdPvbaUh8ZBjCqnpyrDR2gHiwoiJtFpGWgk8Ut1QTA8RFt19Va5BrPJZyPMAEWxzwYxikw2TUrsGKqqkJxLh",
  "key24": "55Y9kTf3b8YuF7VidTNfQ21bPK8ZGt93QbYZ9QUGaMSniogKPPbeshMbZGbNDhG6P176E2wYA942KLyYrap7NS1Z",
  "key25": "2XEEjC4fAUfkVypxBLLmrWEvqK1nykyQmt4iowJiWkTLsjHE6ywzYh3GVaWUFw6ofLCbd9V1bJR6Gj4nJwns8sX8",
  "key26": "2XFBY6DFXFrDuQ1AfXX13hFLFzJMQwkWrxrBVw3asVS28i5wRjNeZBQGXoYYNJNe5sAVTLgzCjHz3PJz6L4HNjcr",
  "key27": "ab6H271TvpWeVS8sDYtHdEeMTrFXvUgRUmRFRacw5ShmscCGXSB6kNKirf6nJ8nN4WYeDyBDtef5wf6Hyrwn842",
  "key28": "CiUWrwiAkFCqP4oQMjs5KG9TzEzjK8cY2MsisVqW6QeiaS8p16PDCpKj1xaTdbNncgwYjmpFSex9HRv67asq6Ee",
  "key29": "2NHgcnuNSWyys8PNpQerj3TEFGdLLnjGMKWhN4aXDjqNVJCcYrYBPWwXVZw73Eq462KyHxvJBDKHGGZRgvCaGwVy",
  "key30": "mQxVTWbxHFVuk9DdHmmo3V2rkyGDtRZqTnNfqhTPMXrLJjANvGRpJv2xGvnXsvLrLpdE6MVmxuiMo1V7saU4tjt",
  "key31": "567UoCxeWpajULKcv5z5xktob3cuTt2NB1VJmKJDdr7oGPaTTSLZgsVno7fZw5BMFEHC4vBa2WwioJiHnSa6hpcZ",
  "key32": "2TgT1xJEaA394zgcUpC8UwzM9BppCP5fRLZjQeLiR7H3yNEFrea5d1VAwTyHTZ4U2dgU9GQtykiTvNWbnLuABuDq",
  "key33": "wa2jpQ4vvx4buwac8KvAtK2hvgeydSH4cjWE6QLv7MnSChCP3bm5gj8nNEpgbbEVoyvi2nkBaBZ2CNZhBCvJqkL",
  "key34": "4MPmGAPsnkaLe7D1qhzr7NTrRhoJ14c6bVq5CXsNWQruXRyxD5japm4XKA2Wd5EFhxA1W9YMAbiWXFa5n7xHT28C",
  "key35": "3irUSCXzTC2GC35zYYwK234GLL2B7n152dg6ut9MoZFg491WjXHqT3RC2KLjLmyTBVqmbkgL5DUUJjicm3o1nJTQ"
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
