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
    "5zh4QTJCnbNG7GBrGFzmT1tknELzau2tyVGdC9DhbkjxmQQpc78q24ffut33caiq5EMStD3SRyDZmq7hqxuZCSbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRgqJdh4VGzNCcWxBeaMTs1bdnTHbatQr99aJpgSYEahNCGakgUezh6CqZYsmcaqQwUJTuYwuLGGgrzvueqVzNH",
  "key1": "t1RtVcNxzRLhqppSdHhpNyoudsirLAbooKxuLDyJKLwRr9n8K8bvbYivTJLffheoaxWP8uXrsqKgpcuX4EJw6i8",
  "key2": "3Ry2sSpxkmkaGDER7i1PBiM7ahygDG6YihV49raYc37hQRgDh198yqXZYUNCwDHSHipuSBP4AzEtoQ9UN8KEY6fD",
  "key3": "yaRemMAWEhYicqfNmjYdX8tWjf9QhuaVTJvYd7EefSY3xVMCjV3ZNWM5PiPUWgbbQvkaxmdm8bvEcrLMaVs6Y1R",
  "key4": "4t5oY5rhnBGE6uRWf99MqpT5DppW9kzn1zwtpayVKfgL9cennHXJF2iyp3RdcLUtSBte4Vt7KQwx1jnw7WeWeLnu",
  "key5": "4sSgcTi17vSxHvAeLHMxjUp38s8pMYgXJNWGxtHwEyVhvKMWdbqujjbUp54fkTrjAtRMh9GtFjUfMFgQFe8ynE8b",
  "key6": "67bRT6122vLzs1WAXu4CyF3KhXqhrSRR8DqQ6EgUCoGtuQGDxMtnV9WGWxCWnagXMfkpHCKdoFkbWnzgB7MEZh27",
  "key7": "3LxF91qCihsbJgn7DajzXA3As7fTYasePSkS5hqzeBa2hm7Gqi3syvVRgPapEgqStZBJf5YURuUF6ovrV5fU8yqM",
  "key8": "3MsQ44ueL9gQ6qg4f5bsHGqq9ChZtFUEofyA592Rpf3ZxHoSoGb4ajPops5TVUAEJSjau9B8YheTTZSNaBzZ5yhj",
  "key9": "2ic1jqdZpQc2rZgR11bMciTteocapsiYQgAqEPdbAYUktSKdM54PhsFXiGzJbaaqfzoSUWdY6wi46HQ22JhATbQL",
  "key10": "3jSy8SqdPGZUjnU6LQ41biHWw3wsHMPEEwdAmRW68upQqcYysTRWAEHaWw4iMkiLsE62avRhgdhkuchpqwkp5jiX",
  "key11": "4yaZqUiDL5LxW1L7cStpPXZGrP9E2Wi8wMyYsL5vYCB1vcgwnqYLt1WNoX4UjgXwPr6FwGJ7LyZDRm1St1d65568",
  "key12": "1eSaYxFaAA55eohAsePyYNFmZFjjr27xamL5ouno2xm93hgvCMRay39jKE7sbyEdac9uBchrSKpfKrnCbWvsc4j",
  "key13": "33wYy3XTb7ZUBc9tLS6bFGhusRyUHPMjWiNad9Su3y5Rtiki1EmNuZm7V8zm8UD7Gh6HikuWn3RyAdFSexya6Mbr",
  "key14": "39WhMeazEnpdZ9k4nq8vZYChLgKQcu3go6xU2ZdNjsH29e7XDUe8FF6gBUtaUnAH2sE5nozFd4fKd9DtHhu5hJyp",
  "key15": "7vWJgH9tfo6GGA7TtHfpvtCDa24kAcK413aUVJyYxGyQyMYHDVLhfFXQtAu6Fh2sHouQD1ZGYWdga5CLJMSCFYS",
  "key16": "3Se2FVSoz86LGML6YzDWx1BtQzT7BrGMBU4ZxKKPFfpbz1inNDCFMDn1uK3usBtpYh3WczXcDBLspmNTUGcFVTMs",
  "key17": "4Y8ri5d5kJKbvdPeesCxyEYFuUqwF1ARiUqLJQMx1DTpcjCYXjUnv4wtxYczBU88zcxw5287eqePmvS1JcNKcynY",
  "key18": "2WgBaaQ6ABFnLG7LLNQn5QwtmGcbs3RvteZuJv4A4DyUCLCeF3HUXE7B4hQpx4q8vjAj4LUR7xFbmJ4Hsnd9YiBM",
  "key19": "5923yLz5JZVAtS1D8M9jQgnEUMzNTynzGgkBu7pF3PDJxLgH3YC5KDNYmk4gVLeVJ9SKmiX4W1inQAa8cymm9xkM",
  "key20": "xvj8ugFFewRuA1BWBEbqxeaZdMeVgq4HLrC69qvLSFviGiD2dRQWDxuKxu3xe7bpFHxZw9v88Pd3Q2a7zFNY6xe",
  "key21": "5kLjnoEmiSMnyH9rdmsN1JheJ5MgnVvKBDCtP5K5zxRhuEyAG3hgSXM3fWgBEovynerboj4vH51voKWu6JGizm34",
  "key22": "3AFfqWXKnJLmCKxPrFKoc8sS5e6DLai1tgkL3dr45rM36CRQ91BNpPswthaTjEr9BKVmoQ69TXAWtKc69xHPu6j",
  "key23": "2kNFnSuAAS6knfDTptK7ABDzLx5GryqJFkTkmKQXQ6jP9Cqq448RUAbyQBYxoDWdY54AELGJP5fqeUfNc3UdoBym",
  "key24": "4donhbAAgwWJheBVqg42bpRxcbWeEtZqSjQkb4Gmd9tbTNfuVx72GCAjG3aWuJXueukASqQGpZBXRxv9Ua3kKTvD",
  "key25": "5E3Rag73iUePTV2GBnRHaTTMKi3ZZ2hV2Dm1xFNeJk83QCEDFxyRE2Vtf7EpvgmGT4fk43awV7XpqSmeFAjAYqes",
  "key26": "sVX2dhiRnAvgPpM6Kto1e7CNsVpD5waWove4nidkpHHSJjybGC54ZPnbCkdDiFBWDwbenpbKCFL1LFvJ11o74bg",
  "key27": "4qh4VBQmfFubFatMx3PZTxmcAtUFwP3TgFiVUiR2JbebYTwJ4T7VK6a9mwAHEA8w3RgCya7ESXcFff2aeRj45jcm",
  "key28": "2J7yvKmFYG3gCkvzyaTB5HnH6K7WttD2XVFsnpWnrBBsMcefCo8yPGCWDQQMVEQXZqwZyWeX1m1pBi7YRYPm2doT"
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
