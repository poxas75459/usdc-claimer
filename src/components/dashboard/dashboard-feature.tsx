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
    "3Zed2z6AKP1icY81WimMuxkUVaKXa2UTRfp37ggnxRfXQLLXT27wCCqtu2E4jVhFPErertW5ZJ4K155WyvpMbhT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hpE7iZ8aFELG8RqMay3tpoVY6SKFTgvPEXjrq4XJT8NgsWzUHZoReCfynHgUiyXZGWXyDApS7x5dkDLCNA9eTXP",
  "key1": "2aDucXNHqeBUAAKpGVkT8aFDckrtLTrnwEMthTawUCVE4u5fAUimfSgecn6kRQYocvHE3KxjPHtmbqWdwJqdJ7Bn",
  "key2": "58m6WmcwJ1eccySCCUkXdEDd4CyAP1UWXao6jDDYcjyLvmttoXahpwjADFZ9tBSe5D25TjrXZnEeB36LV1Xcn4Q7",
  "key3": "5pFkfy9j4MGuejtMdCKmVGuzCHP17At9KzZE5TpiEon7GasrAKh48gdEbgCsN23D6nECEYCK3k8K761XjadgTfBY",
  "key4": "572JosyMWCQogQiQgXYGjHXqVEmqHTgEmgNBkX4Am39Y2M5Cw9QK2oG3GtvxkoUMM4Ch8pvzorMNjCkQeLBZUA1q",
  "key5": "25EnEZYcZYrCrCF6y45jPJC29rsq2ErgLYyREB67VoiZ9zvtumyETBSC7BDpVwt6G4cjmEYUhk1GcH28nntjyUDC",
  "key6": "3rXgDnvUmxrxjTK7UKgaJ6eXX1tdgithFNVpucSqGL2vD9ojZHYrFTmMVw2S3tPuVPs6zcGQiR8MfnmHXxERFUfd",
  "key7": "NK1g8qA7F5Fizy6NJxSFkZ8SmdizUJhwRtcVwh1rALyy84hgfgj7eizkD94Z4VXJChD3ArXbHLizYmWFuMzBhvy",
  "key8": "4nxsccVy4KWDAjDAd47wg3QsPMicxD7LwKqzm5S5jaU15i3cyiaij7JzgNUr1SYcWMeUzocjBgYTgbnZenkbBx9e",
  "key9": "4cWK9iJ9m7vT7wi8wVATozdqSZAjkbhP1FTUJ2BnZ5HdhTQyPk9ZzGcfGVQvGkiKS6PBmAryRP9jvAvQdBk4Njvi",
  "key10": "21gstSB8gPg66rkTWgR8jcbBPrdn9yhHo6qE9hQZi1s5DWhikL1UXqn4mUkQU91S8bRCaTPjwM1qDng6Vnr7aToq",
  "key11": "2N8d7KPX8bCjaa5fCjSJRLGNsP1QEiUbSPZxD6Bwh3Sj6PnUTAgMRDjQK2KXPNy385dvR5cTJFmfzf7Byq9Ryitg",
  "key12": "42jF1uPKGCFZLkyo82js4txKzehpdGk1kSKpmBzvjC2r1ux3t9vh6zWbT8LZxD1eCPAQjvYsfXyefgHSWdLyvV6t",
  "key13": "3RyGxrfQCN1FzDG3TjH1TvwjvSiGEngU5CeyKdU9aF78vYVCpRZT3MUiGV9eZy12tN5AQuU4UpoEq31vtWatPtMK",
  "key14": "4fSEkpkamVMcMgjN7HJiyF7mNgKhDfMB1PzndFXpNgRjU9Sua8LxQyCJj1QM5GDTHvobWkHogJjydZuxewKS1n1A",
  "key15": "2MKeHkwonXTUyJweHgjiBqYTouy3Z9pdQiex3Ji9nECdJeAjtXcdCZXUGBJnXZrKiaBznxA2df9WRvA4o6WqTijq",
  "key16": "35zJFHLstkS2RiPxLaB4J9a1kkshLHt78JBgUk7nCKtWvPsuxMqrwAjGDMNzJdbfKRm5Tb1quZ7Z5EYSwJj7EZYb",
  "key17": "33nDRg9ybTXfLoWoxABgezr5aGWRQyAgwZwZT52qwCFAKy5zStRkaBrBbY8xEVAXHPm8DNpbsQxUPSP4DZf4AZCS",
  "key18": "pBqGkQCNjEn9rzkGP1JTWtED8m76uibpE8J82f6HHQq1KMrLNGPFzU67Ex2oQCADcppGYzSv5AT8qjgh1seNaia",
  "key19": "2jyDw1K5BKXjwfNP21qAmGjFdhquZAwL9fcTybnUo3Pk98d7axs2n7qrMVjsVzkJDMABa27rCPRdrefJ7S4PdRhx",
  "key20": "2V22aUyhB2ya9kaNNXoSShSf67M2LRDdzETHjHDqkTztFuRoebFFXhTX1SRe63i4zwHaaB9P8nc9A9sW8gMRiH1E",
  "key21": "4YgZ2FHDZc9gAEXQWZNjFYH7kAgLWib3VLW15qa49Gk56FF1V6yeNyMcfzheXddCuscCSAzpo2em9Lk2Zp4BLBvU",
  "key22": "4UVjW1Y85iHLH4Sv5cDRtN6UAbLxZ9hcgoYRR2tkxMkiZ2WYp2dNhjpfaEzrbzCXFhf3Lo4rPwb9A37wAHaxmrHM",
  "key23": "28KLNJc39XF4DRFiTNyAaW24b9MzpJ6hynsP8uTd2vh7d3Z6v4QhdkMoXM7dwx6Zm59fbFqwRdC19gKF8wjEHbHb",
  "key24": "2dNDPbH9zm28xdiSfVqwA5JqNjLnY6oKCUbQmdT8YAoRcgDbzejfNB5u8MyygggKsfqh6xPmcuuRxsX7e2Ri3PP7",
  "key25": "2ta1nyKuhmeeZk6PJvV9GBx17GCJRPGCiUt8HTnZkKmqKeTBb4oRz4qhVdP2Yhj8AxV9ucsRiDcp2ouwCgZBEWP3",
  "key26": "2P7NH7LaHGE4kTqvhToiJ7VXoGC4VvzhsX6KZ22RuuLkf9fUSNUAcT2KL9TtisNE1xyNPB5vZ1GvntL7PdC5xzse",
  "key27": "AP9k4ivBp4Ri3BAsiC4zcfCx1dPJNGwfGkya7TSJ2FQfyQCjqZT9S5mkwiD79XMcysPUMitnvg6vHLUoygi3ArF"
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
