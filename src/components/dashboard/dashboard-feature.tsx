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
    "2ZjQZocWeid7HJw9TWt5f9FfZG5LqTVSWx9V4461pLV1CFT8KNSosezxVmVbX9MWH3464PgPVrsQahdEcpnmyXnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JPWHxAnaGDpPUtwUozfUieN2DxMXXA8SJvJrDkDybpbeE7umh5ZWRcrmK83SEbWUUZwciiaRdPdrW3pLMSjSxae",
  "key1": "zdpY6ffGYrCXFuiD5DQPXj9XUQe2sbGJfM6KXLbPSBLMHKgFApsH1o6FDkuyr8cWbWo6X77u9kZ7xvZvLs9MWtS",
  "key2": "5wNhgjGTU5zagtPUnKpEPux9p4zWLKs6tJYZMkvbXeUF14BRZMKCa8mVUMSx6rogX5KQfC1hraSRieP3izTn263C",
  "key3": "2UnqFfkw5HGkrub8yrp9GiCmXtFtYNpyRgjeprDBhpBFr7rrdVQ5TMoP8JkvkYgqa9PkGtTK6PAWDnhTk8f5a1kF",
  "key4": "27HM5eVjJq6exHatjjmzyTXd2G13QP1aCpyfZPa1CiqrWcXYEXBun7RscGoQ2CLnkDapNaXueiaT3MFGXduz2fhD",
  "key5": "y5q7mQuigF6PitzmEeXatswv4MdWxosLCProDonQcNqc67NJwXRKMxczzq6zQcNXEkbfzhbbDdkMwf1bbsr2PCG",
  "key6": "41RKRi1ZaCqefH4jwR9fbR16iKSASum2bfeowb2btCRtRT76eKYhrZxUu4239r2Wr7erMEP6gE6YYUiknjZnvJK5",
  "key7": "4TAKVuhoF5WaZrwbBCKqvt94LokGKTz7rtd1BrZrAx8JEQgLvVAiDGkfsWZX28u3DZWGjvNh6T5E6MarpNao7snX",
  "key8": "29LVJivLJLBubv2j2LzWtBdE3apDMyXJ9xvFYFFzzmkcf824Aq3LhaFcKA6V38gq5hk9h589TLWzej76ySVnfrFi",
  "key9": "2BX4euVx2G5mJ5zLYkf5ts3Krhkh15CysDrMKoZGMwNsEu4y5jWEsVSxmcsMoxsssrDpaDezVfGq6j2xrVDFrZiE",
  "key10": "4AVjF9y8jbakoS4S6K76PwpPQmDEh5LwGAnYGShYm1YAQb7aZ9AcU511YQH1Bg724584ga22QeVDTk8FGF1eMDnb",
  "key11": "61hb52enTmWPhNzXHKStSkqxgeabMfEvicNtWLFMeZaoFwQ53onxSC2YMQPSxdCMsFxULYKTj3TMgSVz5U86mnhc",
  "key12": "3pvkHYcbJaLEpzPfBSA9Gtn1vZj1Cnb578VZv1WzdDmxHjd4XavS3cwpM3QAP49D4PkXMLG2ggFgeBadEBsSf8Zu",
  "key13": "5S8Fy4viMrmJSrBhr24EbZarG1oq5sbXhEVLzwtN8VpNEFd6hYkRsUtexqAu5pNy6bREgupWDfZT3haqbrimPkpW",
  "key14": "49rNjwWJJkmbictH11noTioc5KnaHq1xhLnYB1Cs3nJXpCW6D5zFkQNatxgskbUy8jkrofvh3J7XDRv7URPbsWqF",
  "key15": "3neh4x4LvMDHmRa2y27zcBvZ5EtZowvEGeaAGNDhrqGMs3mcHUfLmCDe4YjUKSEudN8GhkSPmzUzuV9yPWZon93E",
  "key16": "56b2uacQ3TvqA9D5e4inCdtfmriqY4v7fo48WFmWqLfjgpyHsdewsY1e8szWRDvKfUf4mGukNmLQHsCwmSj7vbpc",
  "key17": "64AXg7bFHaPY3Amu9E5RW6MkY4K8uNKdY39b77a91ucyd2ggALhdiAPCcmw2jNnMSFFeL4bCkBH8FwFdi81JjVPh",
  "key18": "5QGnnoi6p1rBm1QnFcD5o2EuLsus21XtYr3zyjhbHk3jjg2yGNocKdgyzfaz7fzrjhgoTxtVM573dtwxexcoD1Go",
  "key19": "wVb3hcjf6f8s9x6Kga4QWbQRULLcioiXon8pUfuusFmpaZnMWHWNQE18QqQQ6AfJ6hSWiKPcyTeoJ9uaKBnDkwa",
  "key20": "2LhYs3NFw6w4nPUr9uNgwDbKgwpD9duNM62t5Hnx4juT4fwSCpcLemueujE3VjTmAEzxEXwo1uu2c2UYovLG274W",
  "key21": "5YKyyHbbRE3XZeEifWxnLqz6fggewGa1C3mDa3e9qb4X1iFqDiEb27R3zcFiGahDjB8zPaMNBDPXCMDXqKtM4Bgd",
  "key22": "2YH76kFkuyPFrEFQj6hWBSfvsgwjQmQxEYsX69pM9i3YBsw1sgBbrJjbaGfPYQFQe9wiWoNAKBnZj8L6dBDD2J4x",
  "key23": "55UxZhEY7J7tvXXqKRsRpbM6qKaDYacU1JCWebPhbDtjmtbRLoNybzsmkJDtruMeBLbxvAecF5XLeh9m4g2GHpt9",
  "key24": "28vWaCx9DpeSUMPwBTpvBiJZW2xtxuvjZVEC9xMXA34FF5EfSbDL5grQoKi4mugT6fH6H43bFe1rJi89Dcv1y6wz",
  "key25": "4kM2tqEfRpLeNzCEMAUnAzznp5tyY9BwewTDtREPkDtPeq9TGYv6cHRDj1bxyFdb9WPYL7TjL4qaRZgd1Ak98kSt",
  "key26": "4NHQ1NeuG9yTJs5dKpMamVxbZwaGHqLNPMpchwZRFFiidL3ZpnuK9EY4MuqQpo4r1p5wm8ainWk7xVHq57NuxcXX",
  "key27": "5W4MhksMkXVGPT5BsNx5FPe9Eahvtcgh7ACfAAExrbdMQGpNcPzhnjV4i5BP4uHPNxztkoGzUwFogVvn9dPnhvuD",
  "key28": "2EkQbmE2yccpNnY4Yswdkh2wM28r8uVuokx82iccCSD9YthrMu3DaFfK3zw6AzAiYAcDax5o33UYKkCJ6u1SPME9",
  "key29": "3FVBAX262f9wHwSfteELBN9aMc1n1ZQar81EUmvFMRVtGSWZAqiyFoqdB2HPZMkFXdMWNtpdJBfZC2EqrFPpnswm",
  "key30": "3SAp72r4B8yhwPQxgAbRP4c42YQNwCcbpqe3Kqqf5xu8x5vurK1UyGSjp8BGDQ3gGMU9VbRE8PdEnZxTJYmNkn78",
  "key31": "45WtMP5X5dQ6qcPK3KSnjh414SzdVvEA7aqtPJKMLUSWsx4RWrJPf3UZXrwPGvVmq53yjBPzk4Z3M2hg3k6SSM9L",
  "key32": "5o7oB8nkQsWFVE2ZRFTHc9rF3bXbg6QVUz7HpUCxBjGUSaUuMRsGtLDBne3uTtrnqSpmSoQKCpZDfrJg6FqzLQ7k",
  "key33": "5Hd2nr7Z6Z5gxB5ENjiu9cFD33HExJVtsVW69uouHyyXs3WmKagPcEFAest8camU2WjehjNtouaZsvLdVCmxaoBv",
  "key34": "3p4ZREuRkzY82s835BcqbgxHV1ai4WmGsGyWrLwVEAbt1FGmjguAhW9nX7ddPFuvvJdHBRZqgyzVspPnNMsJb5Xj",
  "key35": "2Ue7LGEPDrp97HDKXB4QuH1gaDxoabj3TmQtVys3JLZCZbw2vcbHuzHwLJcEovixDbmiJZkmSi6Z6GQhYPdcNnAP",
  "key36": "26nRf2uoV1tRBzDN1st3XnBp5azsaykMvdBRgFpH28QYq8pjzL5G3EQ7J4F3whztTLbxpS9prH9EMH9X4wQzfUhQ"
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
