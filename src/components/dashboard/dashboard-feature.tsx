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
    "2DxLL8BtWJ5uSq2FE9iaEaXYCnTP2FSVkoZM75z5P8F6RWBGV1rWeJM1P2ZHvWUCBQHbyz9K2bPe1bzPzfPY3P9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KxwKw8LPVsh7TDP1wZnqR2f4hHF5i7H3Qx78QLNZpc8rALfPmJbVfF7TELMbXebKBXPiy2nD2YZNGkm3YAGD79t",
  "key1": "34jvWkdCwMEdPHzxbmYnn9XKMjzqYm1awXsuV11mgtLMLBRDQxsQ1nzHA1xbcVQDFJM5w2EUmtNjRapkUS9bnJP2",
  "key2": "jiuLDk71RDEdVAZeiLwyJJF3gJGbWQao6WEykXibLuKJ3mvZpdwJRJdwmevsoZP5NRe9dJsgxFJm5ShtxE6Lf2H",
  "key3": "2BzuhBFfPQDp7teP3cTEiidZFmo8bqqmp1MF8d1fyscEUfRCz7vRKs6TErZ2kzEWDfqUmviEj4cntQTegv6wBZc4",
  "key4": "49A7jV1hD4hWvu1hYJ6seJRpyWin8MXqDASgRQNRx59XQ8QYEenhCTJtvn7JWpKDAFAbCcYgudNToKruSAGMV748",
  "key5": "2NLwrEtWW1nL3SxVnswPg3UxYAnk1m6K6PmAfCNMGavktmGQG9uA1rUXoZ6CXo1AYptn7v2286ZoZ29hQyvcrUrX",
  "key6": "3WijWXvrsZGSUPqMMw5UZM4tLwvwnMAmQ8dWf9uKFs5cA6YSGd2wqcFkznvEk4Q1nsqB4xLWcgLkJSNpT8WCjJSe",
  "key7": "34Peb5G6oDZfjRDsko1Z4wYqdfaHfBJYKWo1dXAeHX4m9oZWzZzt98KK61933hufbyWi7Uo44bY8SqUHivTGTexk",
  "key8": "2iSdzSsc2ehtSJAxMAbWjAnijJtgAsbtf5w5PwKt8syQASSLy6jX5ATkMcws55tvhnKNmg7UPURT9LvQVGvKJARi",
  "key9": "5kx7xWLZxxhcnDk2XrM1K3k3Lu4JKvyZkwmmZKJHJfTfczW3N4cZtU19mszPpCmaps4jJiNqyNntrksS9K51p3RM",
  "key10": "5NWodwA3kwzL9hLtVc4oF9guVgi3wvdS1yG5emXD9w5TB6mp1qJ4nbPuda1kVuh8ePT1FN6H83n48cbYoBVJqQcc",
  "key11": "54dzGxYBTFqYetHZnX6WDwyVrP2m2y35UYXyGqKfKcqC7f6jjuSC8ZrFNpmPpMnKZUA8fc65pzXUxQwPPQjjfpB8",
  "key12": "CZLaL6xMYy7JDKQA3t9qatjhHbuFKwsaPmnp2z8EwpfxvVo29TokRxrNYyajrQ6nHvQxJPTNgjgDVW3moyNYLyd",
  "key13": "aWnkD2DYBoig6EJh1u3A3kacXmG9vHWBrFTP6vGqZmd6ZZ7WEgJKJsxHicQjr7rXv8dDRzfj8cm9DS9Mxa9fJ4r",
  "key14": "23Hv952m8mrRWJhXL3Ymtwr1R7P2mQtXbYUnG5UsVrk8RJ4evWN3UbaLHZMjE4BrTbGsa3kRYtEqZJso6tiaFgT4",
  "key15": "25gYmh4UZuYYAXotE9cRUNr8h6cu9K7acxmSKoHKSN83qC4MMc1kETi7KEKMQCWfxJ9Vzbj2ZC6Zr8xjj5NkSNCD",
  "key16": "669sUB1AYDGykDvFwpAxYVgjs9rXEAgTjVnd5udanDJQaUY8KNYQkzgEiUNpMa9eeHQmrooWZrKc15DXViCuEfiX",
  "key17": "4VLAip5KaU53Hcc4ndxicCmoSwW6zPjvsuFwkNDYtTG6SrYkM645N7v7UEHB7jyX11ZtdrGRQq1vxkyUp6BcWU4F",
  "key18": "4YA4zDhaZa7Jpyhta9Jh3cdqYkv16KjdDtL393i6BKNgAgLuwaoxR8Hp34bBpzhUYfAdhuojEo3hfPMN8Zd9MtWz",
  "key19": "3MgGG1974PchJDSX11jntHRCxeRaVxYVnsUEAU6sTgYnMUBh1hb5cQeikHvuE4oRURecuth1K2c58Gb6QdvvKMW2",
  "key20": "3RXQ5kyRtSzskpRb3bsw9qaXJFL6V46ExTFf3f8iDK5J7vJryvnx5wTzSJephvAvJBMPF1takgiegwVsLtLEfNob",
  "key21": "3vDZoSuny4SCYpSGaraM5PsnN3kgZt2AS4eqdeSBrSm93dge9QdGc4mKxSAYMYnoCqFNsU3d9yViAcYEh1sFqVb3",
  "key22": "k8H5mZcPLdzvyAFSvZEDcEnC2uktQQ7vSs9aQHChNKkXYRs5Viu7u8faWwbdE6qrajuDnKpfA1tRWzTmBiUn6Te",
  "key23": "5XSZjbybMzuXN2JuHLLuvRaGB4dpRypu3D7nbFPSd1F8XQy8yBZpJdE6L7VbhgQW9EtWShDgWaAaQMjHwkvmME9r",
  "key24": "4wgEpjTUQSDmoSiR6CyaagCnkH5pCXJSRgQ6YkPEJTKbaQFb1oAzoeSiVZUgJ4Lojk25vfEPji1n41bCrGkjb2m2",
  "key25": "5iHti74VpjfXhFiUPfFFKKX8diz9go1RgQcjtPKCiQhRMJmGjLadAgDun8Z7YA144yemwRzgRzCmwnFtzwjK2Dfj",
  "key26": "AmbKw87cQVRPekhGfWkfC4e3Yaf8TgE638LyGFNgvya1B7tdLQvLavpeHzrcDNjkD9UqZw6qvFehQbfa22GMfVW",
  "key27": "5TR9Xc6CtEa7r6UJ4nseL8aiCEv655EepDtxmQL9V83T66KLKx1TzFRtrFF6QLCwdixNQ4vxiVtiCB7dGPEtyzjf",
  "key28": "UFp7zbj6ohBTAE3z8dW2UcPrvFDw7Nc1kPD9xHQiAQrZNdVkk3XqMZdSE3ejPJ95d1GNhtJgmGBgtmqQZdXNAmA",
  "key29": "2X6txUcoLnpLr3Yeoeo9msTzBV5BwYX1VJZ3UaqocqhKwUPMzZYsss7GRgQgvFqEWLVwaioEwory92ByRy44QD1d",
  "key30": "3EH4FzN2V6HozRJMT6oMvZqG2vCh38BaUsPcf9CYBGv4uE7r2vM67TGcmPXxJp5PKg8XnYkNYnSueNLBs4Ajd42s"
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
