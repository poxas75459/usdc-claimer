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
    "4cW83biosWDEFkhkLR8kqPEr1QCxWNkRmk52GahU7VEjHaNpeiuviqNDw4zcXJLaLQQYKgDdbUwnnwJdtDSYwMzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zLRWuhJUKXhqvHSvfP3q1FxnEyaVjfiC1FqKgSbgCYpGCtK8a79kdybyUQjUSdm6Hs44jYQCyFNwCrR77ghzNmY",
  "key1": "5P2yNT1SdVWjMzzYD43DvYFapCimYV2WvuRsxzKhVPW1wu8ocqypvM8obZuByky9PKzczorW6nqZB4CWT82gkPtY",
  "key2": "2AqtGtSzzJVyDPZ1PukesakNq33FkY3sBg9kGQXmt9uqJBJD9Gy1S2tqUbefnBGM9R4e2XaMUSXBGPMeWGvS29cD",
  "key3": "2pU1AnTFhUj37U2ddLBprfPznKaJ4uDL929MP3Fw34zCL8c1dMZRaPYRRiJSxEwvnDFw8xHCJB3G1vmPZKBrpEQU",
  "key4": "2ZQQNFFFxXWZL19Z61c8pDgpEMTY1RDTbTRJaMraVmEXrideLzrkdGr6Gic4WWkj13hkoYe6vavZACzX9DbeAmqu",
  "key5": "5tSbH9NozGExYtZyje8NDvUjPMzdSXDsZEHmo1xpSEkhqPrfmAMcPKyswwV15HtXXY1eSDFqsaRq9QU8gU5dQU33",
  "key6": "54tbAbY2J7BuMrwXHUniMS8py6bdf5HAqYGquNE1W6qc5yu6PaVpygq1sQQ7YQyLDbzA5i52s25xisaroYthZhWm",
  "key7": "5xSY5BNEfT7gjgmbGEgW8BCkeE98QhjjmfRE49WDLVPvhAYca1Zdd1cnQULxHXLzcb1u5uq4aMMsLeG8G7kwCVFc",
  "key8": "2apPbYepi2rLfsLXvqYL2zrmt9giYY8mudSonSGJRc75wLh48Kyt1M6e2xvNSxZZVPNkwEbkPar2Kow7Ftx7YAjM",
  "key9": "2LX2djsTXj1pKkmXRUp9x8sysCP3WNZjwqcuZnEPGK7oTfALrqYg5GFWTPReok2pDHeG7R8KnLXVZ7YLFZCMr16X",
  "key10": "3XwjHuxCD8PWti8phijpDogfkBK65Vk2o1MLKxvoyBLY7ruosZEDvpfkSEuNQRXFaBwWRe8LAPwky8NzfSwXNdsH",
  "key11": "5RZZWbSuA6FhseuZT9vA9zXqgsfrZcA2RdmUGEnween7JDT3rrQBwdb2aDXAgRyFkeAZgeJjxAMcv8uHWiKLjpyp",
  "key12": "5qvubx7tWd5mRWVW9LR2nvXZDg6yGiZauSCD6wGmj3hBaPM5muqHMcxZ3qv7tsySFK4XYNmxhyGynRHqwxnZQ7Cw",
  "key13": "3Czg5X9BHvUpqympmJGf48qMjMP7DF2N5ttxNynnkBLiYCGHnaQeJX241p9k1UzZCX2PLjgzU2NW3CCg8UE6j9Nf",
  "key14": "4ckZcFFFSxttgd1Q9XUHGMcEr1arMdD2RMc6XATSZqGkuySxyDrawbPn2n8Zy1Amp6LZNgrbP8qHbTKcsyLJHaCa",
  "key15": "67r3u9erEpNtqLkckBV9kZioWbU1SAxJnUS9oBcn5omeo8255iHY5aFXV7CceNYn3qZEUSugyuTPVx6pibSG1DQX",
  "key16": "2bsojQyLHgYk9CcQGZWQnUPgrvCi6E6HD7U19qXxdZjUvK77QYvutKFp6czi69VtqtJ7M7mRhuMXqsuKNwNbkfC9",
  "key17": "Dv9VQYbqGnYKrni5AYYDHEcWGD4J5dUaDsfjNVkjCfhhBomqZ69b3ncH9ZufCZ4Mkd1zc244RgwhAJV8QNRFZQr",
  "key18": "Y53RWuTMoHV6jQNH7LUgi34m8kX4h353uw9ywo9oH34wPCuAae2bStByGkKuH6pAynHfgaFqHBVdM89Fo6bCUmW",
  "key19": "4JQ9RkEv2bPE7zZUeHzWxC7bbmpqDTVKpHHnw26SzmqXK8919wyoEWVNinTcz1cu71MdZKXqhH93tLFvyE7Cue65",
  "key20": "sbF7DmswVyDiS1WxYuczQUNj53A3Ma7RpzmvXM8UpMJWc9EccbVdUCsqDzWj9X7JUZ36vAknX9XLEqwn8PtBPRi",
  "key21": "4m6q3K2KHHX39HceeyhhcweQXLoJFZXQjenSJT98Yy4i4f5jw9rqeeg5jgNJkyEKhcXC9TFfmUS8bTsf5hCBDiVR",
  "key22": "3HpEBvUaJTCt7LKbeNpvXkVUyw7ASRwdQcCGo36LWfK7qE2fcXx6QcQnqnNEL2md8QvqSEGZc6Q3yxTihQfpKxff",
  "key23": "5EBThH3dFZGfAXehqEWtHdP3oQwrq9kgKaYXSqBn1W8wNeV7JHrVTP9aS9qRw5yZ9qhQ8ybSWHsudjjYKP5mYtTX",
  "key24": "2SZGQp8m1TQ8LbQisvv94fKs72NHDuVSa2CgAFLi51xeZr4YyMVbSbEQz7K62BaZz3UDgNqGgFmaZTLALfK9SBrU",
  "key25": "4K2Y9yXiisz5g4GjUZFdjaadcWMHVzXZDYXJ4CP1hjrh56ZFKJi8SShkHtUAo5pkpryGThjyXahSH6RYkuzPdGeY",
  "key26": "3nRyp1xM7Vkrp6ATkfpkBnkn1JJzZ5ikVACL8DnjBgwb5BRLruTs8K88MKacNRAFZVAb9rRShYq8qP2CN8VgMxm4",
  "key27": "5xQmMHHgo4y9trNDgon29R9MB7cESuZ4mG223hEBLHHzUgfzVVeN3F3o89DAgdhq92j3iQjdWVN2nx3L6o39CFTD",
  "key28": "369URG5pxpDvvku5cXPWGBkkYxQySRd7cx9AH189toLzrmTHirUnjRSfxwyMgTf2er9EjhLCp2pvrSZdRTgZrTx8",
  "key29": "4Sho5MGbawKzYDMRWKQh7ujFqGKdrWuYvVvxxh31UCaFE8Ap63Y2HtvpEPPizySxSJkZJvSK1HwSieNi4cJQuQej",
  "key30": "3A78fNM5jWCNEk38gEuksSZ2ihdk2ev7UHWaHQYwbpNcAogeRykd356Z7hc1ZsJsy5T2mDXaB7g3tHHNxmBAc4oz",
  "key31": "kcyp7CAoiZwREF7M1HJndj6zow9MPFG5HUpv9ZsEyokRj9bD8rkGDqDNZhKw6Jfa1kSoDbXCz9BayW6yFGCzqBp",
  "key32": "2Wjrus4rsqm3iZFZeGdGapbYuZMKmDm5VwiDvB5QeXLQSLUK8HqEC3SM78Vg61gk3wy7L7exUd3YCosE71hfmrii",
  "key33": "2QZB3PsXbsdDYYuroFaL1JgmNqg5MiZnz1W4gPxBzKyUNwdWJK8Zwe6dAj7R9HqPehpHKqDQ3xVfY3BjeWm5ttU4",
  "key34": "21N4nJPiZdAmn1SExuT59GKjLnAxvm1uU6VAvKeF1vqYB1LBSyhst675edaDz6GkJm7m2f9Xekf6yY4Sp5eYvPnE",
  "key35": "rFopoyD1NCaSf1CvuRAwikKTJpSjn8cnSm6DnRWfTANFe5QCSma7TKm6PqAMZZh4WdyreWHJosV2czfvrtjA1Zn",
  "key36": "5GoYTR5678BULSAZwLTKMcQdszTAm4grFBdHdiVZQx4yN4dhdFKBuYwXCCBuJDJaJKdhsHmiJxUx3mBbnhQfDZRk",
  "key37": "3b5cdfBkRA523zk1p73VEYK81Q7Kd3towTV2AL5cp8SR8Qxbe4tjRmx1VmwE5dScJysR1L1S987zBgDSN31Nb6Ea",
  "key38": "3RqxdZD28LcPZS2A597jiSeUrGKomKBXJn7F2AQrqAca5tVc9D9ensDzcmFEk8nUcHRPJKTvv2HEHPQ11kQtqEci"
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
