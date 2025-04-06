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
    "3UGMBmwx8VGhzFeL4CaVa5SwHrudUYpPKcvMva2NkByh8nAQk8iFJPgEJa1HRCLBZJCwDnqspnWXwouESCtpNYiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VucwcJ8htZt1uWE9g9u9DAQzbAphzTt625sVijUorFxpzqq3iFTq2NVApoVctzK5s9GUyMGkJr76kRXmXNQSUbH",
  "key1": "5xkdqF5axeVU2bUcbzCVYyWqL6EshMTmekPPzZHjccVik91hdk54L9gwTmbphGuFPnRW8uCQWwH5B2E5dpREpDKb",
  "key2": "4SyR6fDUk3HS4jCcidSzAdExrcshJ3ZDnjQBNTxMSNFKdzPRfa7VnLm8dqjG7GFxqezXiZjHu7dQUoRCmZFdJvyv",
  "key3": "nurHDKxrShbM3kDZ5AgLXMCTfsvfMfQqiywYNpNgbDu6iyLCMMGBWWMsiyBU58dAG6cDgy3DChBMJuDpR2MJBtL",
  "key4": "3WcfWXaWL9MDsSk5tLXtAri1c539uZffDQH2kQSAvPiaQam9Ai3S7c6AnYYVdU3cEwuVqgSFf9Y3udYnMw4vkAuz",
  "key5": "sT1ievFEbzHVVCucfKQ2ufNdk7P4fn2EfxiJdgZfpFKX9uc2qKwQU61B4Ym4YK8LnpCVoM5BJq4JTKr1g3vYfyh",
  "key6": "2P3AwQZFNSbTavXisJrN641QnA7UVxbSkamoez7NGeGMx5yFGqFw9mPBBinC71k3EiXqjdtMU63dr2P3zqVxJDUg",
  "key7": "2YvcoGkxYToVCJiaxNjjZbh3GR6TWKb2wyk4jSxw1haQJZn1YhtZ1mrRrzBumV3mmNo3T12uhRPsYfEtQLEFq1zj",
  "key8": "59f5kzSJt2von7PgDsiz92mhHaNSvAPTUjDpLFHCKv4WDRzMrFXyyQRTbkcxaK9AdNevPm5NvnpCqqDkPQhvJWK8",
  "key9": "3d6q5YqMiijKoHrkXqG5kHyVdcUivnkhythQbteq7CDpLA47DdV3HPS69SrgTm54oHQiV4L9Df8cVNBr52UAZfra",
  "key10": "4SjHCFMspjPSY9MT6XgRRjd8uHtMqyeRVVDd9trJCyh9bfvmqUKPiCN9NmguQgaRiBBhMNes5kRqnEeFDN9d6Uq8",
  "key11": "7Bdt4LvBJoEqBMx5JArPXMNt6AGZeZHeWphv6pEPV5cBjDgFQGXAwzagV5rA8BReLdRzAj1u4V5Lt7vYdHtBqjc",
  "key12": "5ij7tjNQ39Le6iEz8UfP8cRk9AUSJ7g6HeCUTiRMMoHJ27q1r6LVZq1vw4z9sLVkBE5ya7vsCR1Qhz6WoGjxLQkX",
  "key13": "2Z3GyjsUwK1Ehj1EpGhej7J3xu9Wze1QzSKGACEPEVKBDfCh7pLn2TGaz59YkqQzqMDe22jv5tZrAkYMaDvniyr3",
  "key14": "2t16P47Vgv848SE6siquUkRMG7DEHunjMxVq2Z7pF6bTwTX2U4oFZZgEcW8vLCpxbZC8EtcbX77gRN7ovuJ1TXec",
  "key15": "2tbrC8sNfcuzV1Ws2QBecGDouF5GsGZ9b36Etu3L8SzyQEKvV2WyuManTvtRCyLJH7o83TT8cmfR2smqxxdSm4re",
  "key16": "5gsnMrXV1ts74ueEqqsJX8nAMMZ362UpEM3P3ZEq9gFagNjB5EiXtMRfnR5JaDbjpp35FDMMTj9AuWoaZ76VmJfc",
  "key17": "4fY6gsrDjVmSArmbsNFf7uWBsjdvVC7p21ngugjLYZGGmCD2JLNGpEAE9NyaRRgto5BXFqd2w5nAnitEJqJszUmD",
  "key18": "CYBDCASXBZJ3KA9tBs1P9CqBNiznZVfQPRjaU81QDRVyTFbbsUamDEHP9maebbBKS69mGuQAn7XynNFwwo3UPGD",
  "key19": "jquYj9M4pZ4MqGeBqaX8D7pDbmLc4WXeSDsevQ6ST5GXYVFn4UBBPwpDncsKaViGFEW8cm3LJmAdD1Z3c35DzcC",
  "key20": "RAAeJSWqFR5EEMpS4GyENLAfr7LTCW8XqcpUcV8t5qtVuFzVgx5JruU4jzKHRRR7A5x2qtQQNofaXVjBmDkebrC",
  "key21": "4are8jyBMFv5FTCVgd3FBhvhDpr1NUWpr44M5gyQbq8rTZs3WeogVGtRowWStFHemFsvt9jDQjuhTswzHJqDnEzU",
  "key22": "4pQWNbnMEFANwExnHAdeNxoa7UNHK3JaezcHmC1t4GFs9R1fCVG3AKzkWZDzbXkypDS4VbFVegvbZCzQ7SwY2my4",
  "key23": "5LbhkGDJ5mg2QDxAH1a8a7g1EHN2ARvsfWkCtYJ8aVhDdEzD6yBucQxbakpk5JFW2t8p9bUM35BHT2xxf8y8DmYJ",
  "key24": "23YS62mR6W6Md3S7qwpmjzsnTqxUGbxLaqxCyHbFRd7k1sUhEFLuJbad9ZLrUnWhtcEPh5mZjUvWYGaZVUQtGzE2",
  "key25": "2cVAsCT52ecRhaZmraueouh6Jm17A4DECj6NG91bf9zcJwNJ4TfQFyibB9fRfnL4AvtFQwHfk8xwQeUt1SWkcFKb",
  "key26": "o2cBXTc2D6xbKyS3CVs8Tcp2bsjCRCik6yv6cXTag8KCGARMxspJiz9qi5DPhh9pGovEFp5HrKm9xPpJmn8Yk9x",
  "key27": "4DQRbtmBj2sbvfsAQdF11bDxT5qptogv7HkTt8J1gibc1TDHHwvEcLhhh4VpgAA9zjSAntRc1mtH48uAdYX8HGn9"
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
