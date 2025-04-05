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
    "2VP8hWey9cR2JxK2VnMwc5qzHMVMNfPpYCQEXVagJsBu5e9kxTjUVxJ3G3me36a6KSMfzYeypGfnGb6ZZSNEnjQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XiaaFroFSrfyUZCLaUFVhKuKWPzfCURJWrXf7vjZC72JzWT9b93MvTv3ZBeFXtU4rjpEbiLigKgrb9T46vTmKXy",
  "key1": "4RRaChna9dZLEcuE1LmaaLhVH4fWc4DMt7ePMUvnryr364JSyqHCcFFsT38wrPpT7xjQpcWHhnzRbCrTJJJjU7Ky",
  "key2": "56wdn58REsKEfASLqFfHGRiAimxV7tE5h82ukGR3ZUGEYpSmKdbW1tEQvBoZNzwraUqrCHuBzKSeVUzJQF2ea6jE",
  "key3": "32bMwcBged76JHYa3oB3p2ZRxvr4X8ragTvNWBTGsAqWZ2RWQmCJPvqRG1cyoXvLPUzmCv1YHThQRJJwK8noPNXo",
  "key4": "2m9mQq563td4vDB6rM1N8JPqtKZ8gGohhVjTBD44TRMKzNtotq7K477PpDE8cF5LGCebJoy3Pbvu33YomYn1mPdZ",
  "key5": "679DHcyy65dTbpXzDoS98ajV6yuy8j6mzz6tthhxAk5wcimYJF3ytPUMFZ8khnsL53UcC2LWGrNp2EHWpruVF152",
  "key6": "xUX1DYp7GJPvJv2NZjML316m9RwNi8meBfjNS6Ej7p8Us5H1Tw3guJZSgm573HHKXRUQqEhZGYsQtVav7zvZCCD",
  "key7": "5L8cEgWFSXU7D8BBnVrs5i9k8YXT4KUsHbwBe2DH7y6mqDJ7qrsFdji4pAGENGMGDuZhqG5HKwXJpHVungsP5fpw",
  "key8": "5z62dJLxbV6jBJbKmhkZK2fymyk3Uecj17AS8hpuNe8BoAuV3TVJdiV4mJLw7koFZmZKjaigEvDormR1YRnGsqHY",
  "key9": "2Lukntngu9e8t7TADFc6LKSG8rfFJLzhXjULFMnLqhv7D7VRnWUMdk9PMfFBcj7ntDd5getg6PXS8ndne7grLwMU",
  "key10": "2ZrHZP6H91NYHAfenNoNP84nKKZPvdGUL5MRMAdMPzUywdLPuJKiHtjbdkLK9vS3aBydP4bEBWZg9FscNrp7WhyW",
  "key11": "615wdPeSkkyXjfeayGJQpmHnftkDficP4UoGyR2TF6JYuxZtH9SJjLPcZcsPanRnZt1Goq7e3ZXaqjeGzYSWrsig",
  "key12": "QdKccBexFeNs2f3tX8MfqWuRqfXgPZHZ7eP7gxarLzcYXgaRuCc4SkriB3W7BMp7EENtwSXjBd69p5nFSA2q7sK",
  "key13": "dwF8A3yHhkvJxPCX79xbRA5TTAcupUeLkvPdHVqqzAnt6fBXEQjutsfBkZSsKgMTFoQEUNqZbTYKJBLeELAyQQD",
  "key14": "2ts7SYXwim5zqwK5DEaxYENngK9THwsD3B7ceP9L3joDsuef8E32XvB1edH9R9NQpZU7KDYtXzBBUpkXrahStFVJ",
  "key15": "34FUEZeTVAWPMG85prC65w8KZuMxXnwwc4d5JuCemEip9N93WZKqWeJpBwWmmZEgCLRCkQ7zDMWcUHzA6CdpQXH7",
  "key16": "5zeUALxwiwL5Z7hwK9QDBj9ycvBnEbmbmyt2zbc2wujCTAdXG5vityDTHZrMcLxunvujJ1HcE2AaYjtvAuAeM1fY",
  "key17": "53SrrJKnVN18eZhEzbNJpwFj1TpFWjbPYBUkmksY4EcPxCW35w2R9qtsZ83MgVCG9jJS42WKGCJgL1m6RaUCmvcm",
  "key18": "QiZMb3ZcUETVyssyQCHkZFJaQSo3VgqRe1FqLptto7aMp8QvcNo1Z9saZEu7PjwLcvfG7ET9YMWX5SLU5RcMSWN",
  "key19": "3HnzT4SzJDLnZGj5XWBaJhHHEw1h3ZZEycrZfmEFbD19eo9uLNg4fx4dm2MaZfX9EGSXDDR2PyqvkTKMqZjCdY85",
  "key20": "rnJVqNBk2jBLSsto3f8JZcJwrS4knyj6dgZSF7PsupPDWCYy7Cd5tUpRWJcvPKsioSiC8VVFnkDm3v9tqjmaDfw",
  "key21": "4rR5D53QPW9q5LehvJ5axdCuoB4T5HVxV8xy9rvp2YZeK3mhEUD37o8aGnrZj4j9v5jEqz3vricAj5ZTJuYncpN",
  "key22": "4ZYJgN1LTgDUkL7u7iXhcurCqqXhTV8GX92M8he7yLiNAEbFokvQB9pEuJRSY3WiBLCeqTm5W6YF1YMTuPpsCzRd",
  "key23": "25Rdqxa3t6w89ZdHJSw4M7y5fXhVuiKRH8unma5HwBnBKpRattdUnkzGmtn8aLNxsWxfJ3cd7UsmB84MXdJaLaM6",
  "key24": "Y9RLty3tCimExWPp5QoR45tjTLjaEWy8hsg1uXpgVwmSZd1gP6rHVSxGwBmwdNEHjUH9MZ7NptPDzwXUvkdvgSY",
  "key25": "4wuj6vXpD3vmfWhioaQLXvYUiMTdJ7xQhSEXTibxUyQv8k47Ejctv22NFHeXE3BRTuKQKAjDkBcMrY4rYG2G6vMy",
  "key26": "x6BavzinNHrtefR3ChKhgUTRyq7JHUn45yrJ58hbHi87KzWFVJdCpPzxdfgMShQFhhf9C2FwTTismH7SEb2D7hs",
  "key27": "4ATSp3fUdvebsfgVfefxZtFMNRmZmSYyAFHvJxEEM4Mgs3nMhWgm1ypaiqERNmVwYCG62w2HQp8QZ96bV7AE4oBe",
  "key28": "4RR5hmcMpgvkixCqsRzjN1mkofCNL4LkcimH5Ry2EPC1RR3Z1ASPaZwCPnM1TpUnNYr9VQySEPmwtuCDHiQFsn67",
  "key29": "5jvUjpTtp44Q7auhiygFrdpkSn9pgGLbD4tfxJNFajUZbVXKszdA9FyziQJT49xdh6zNY8RoB9pPa3RuDb5m4Htq",
  "key30": "3RyhwzGVG1WTdoqAAG1y2UQ9znp5U8QsUiParKe63kbfScJ3f2mHZYjfV5W4L6RvYYhuf3NwGthzY4cLyuVuVw4f"
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
