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
    "5iBehCc1EBUGYAd327u7ffbenAmQBanVnhc3YaT28j1BAUCSx2juGPC94iaaMGT44Xt1YHmDBuJQRJWtEpXAVypf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fn69Z6iWYE4NjrcFcCsshV7vjaF333Bv6uXxT5f8DWfAuNF8Y4qheknDuo16G1bhEeeDwCu1DxisEHgKv7Cmvbs",
  "key1": "5ZCAjB6f4ogTr7A7TCFj5dF8vHYk6beKDhCUPoax9DM8rBCRjAU1zoMnF3dUhzj4pbR43NCrCk46mbVizKdbWBdq",
  "key2": "49guJwtmcJAuQUPNcnsxTvKkGcKLvyMYMcPExUHJnMka3qsadCqguhw9puQEZaX2inouyVZDrrZWAAmSyi8yCykh",
  "key3": "125yxa1HnoWi6J46NnqqeuMogXV91Gdsm6j8X3mff3APnabWyRF71a3uGcqBn5GdsXhpyFYzjwt34izgDWmaSWZA",
  "key4": "DtQCnpPoRdm6KeHuTwT52YnKRabVpTEDqjrudfga8D22WJo9MJhwvHF9nwt7Mz2M35Ek9Sna1trporpM7KDXc6k",
  "key5": "5uwV62i3SGaK7MnEtX4vHLyfQqzhQNtz4RYaXx6kxPr8TQwCYeBzBywDhYzbxGJxGtM9wf5ebcqzyKyKxA4uamgZ",
  "key6": "3XioCL6ZvJNYMLVsSV2QYhyxcGqxwAbAoKfYknEENb15rCT8TPYddtULAerDfZKAE3dkBe6ofBMzopziVGaaSakS",
  "key7": "5hzv6MhTAaSJpLCX1VHQjTWBS8xZSjVcmoC9o5F32BPgUyB4vetzU51Vivx5TDtdPcjKg7QbdrSkWQuWbZhkNEXe",
  "key8": "3pVKgCx3wUqKNuvGBjboFLkeFBB6gGxMXbfeufHe4H4KLxAaFTYgzT1RT8Jbpjuvb943HFvCZhFMYXDcKsaJtxN",
  "key9": "gHiQMtVoDDGYx2yUKcTVEWkEGxULVYnDrfAHLT3vBS6NyJzRMHv1SRdE621paqXLKGTva4t3oPcmjdzNeUCC2zu",
  "key10": "4RbSALT4RD5i6DtLcF7DjKVxFkugkPX8UvgBya5gYxE2BFmbYJwuTzjmsmVpLsYbVBmG6V4mLPddDkySBrrrJ4T",
  "key11": "4BH2LovHoixE5QuGB57uXPnDFFeoUe5PegU1byr54TofzMVMnLHaUvTA7aKmDPFKmAaE5hsSoTAy6AHMm85ZZcox",
  "key12": "5LfUEWBJzFjsN5BcEFxSoapSZTwAGkCznG67GibvpaxbX5u6cXkb1MePm6XZJrMHs2o5c9EXNGv1tzTiY8xTCzse",
  "key13": "4fm6CrSkp9CbQM2dQx9SJbH89hJPFC73prUndMxEyrj3siKoiUT9b624PcEsg4YtniaG9TH4KaEUB7E2TA4DFJTj",
  "key14": "2P1vfvymHetKfcVozHchwX7n9cBoohwtHWYgCMap2ZdHsSUPg2kCVtJTz1VAcc17Dq8G9WBwMRFke6mxH8zRvbN1",
  "key15": "49isGvQYjNedjjJ8eWiJ7AU6HQaHKEzwGnoh2hztWebn22fTnH7RGgzEtXpiK8ZdFSwbiyuE8jLpkx9Ccegja2k7",
  "key16": "5P1A1UoYybRGAYjs1QSzNESR5aBt67KrThm8XhD3MKkdDUHMxuCXMXD6GdNDob1w9XEsbM5gRJvzhtUHAawbDLeX",
  "key17": "5pzdaLVKuf9uRhmCUax5gGeLUJ2crZRHMW6aeo6fRbmgTyfgVM3V6RJmNtAY3MZj21WonMPSHna2vSv5oqaTZqGq",
  "key18": "bPETHyL8JNW1spFZAbH7zP8Pvr6yVgbGYP1ZeBxqzH3cS4gCAJ73FPjjaHVFcNQEjft8AeEX1s8JpgHWHnqnTkR",
  "key19": "3Ze3XchLJ2SKG6vmDc5Di2T6629P8feXGgSAteDCprzzgdS4MevQcn6TFfVwjRJtXHHD6AoQ7ENYitSrFUUqbmgc",
  "key20": "5Eiz9zK7BC1QnAqSzoJBisq7pzj4MYh9o3BbFArSJq9mYgrNrNZM5hwfB2hK1MBfXEmqG2mwGkNFL41XXZzyhm5e",
  "key21": "4iL4vWNJkGuBxWYJSU3vpVtX3FvLzMPqA92dB4YRvVzJbeCDyJSCLZkJnacdaUD9nkNmNBHv9tnYezcVa8u2YSvE",
  "key22": "5oxSr9LyVRhS5EvdJXZVGbo5Jn7HZMjNkDpWc3EsahEpb2YLAv2Qo1o3847x1gMvF7sNcrMLh7FYaozExEHNZfHg",
  "key23": "3PK2ct7o3QfxmM9xRDntjGf4sqANbQbdYESvDY548byZPoA5jQ8yN6i2zaKH5zrAwfSvGmX9z3D6sCpLH8UYA73M",
  "key24": "2Vc7hxR16Q3vaSe7mCDuwmfFDPoREZX1U41a6PLMyyP28WcvmKFe4pKNvDiMaY4T4xXRbdrHvYGffssemX2DYhxz",
  "key25": "s2As2Juvwn1RsJRYeC74bDHCacLfJwS8MQugRrheeMMzeXqu4EjoU5cAWxcZKsQPkExhjasdAmk6Yov4YPAzTFj",
  "key26": "4bVV1nJCx9FU6XMb1kbx9pjmfAd4AWDn2oM7AT3mU1TSWqDSw8Y6Pb9HLkfFactfKCfkSpKa6dRxDfTTq5c33sNy",
  "key27": "4PVixmUy6hcPR5LNUYc92fhvo9YFDsFpNrsuPqayprWyMVEqTnbDJsnKR666jF1jcVHY8guU4nqkzQXWP7AH5MQr",
  "key28": "3ujYNTc5LGR7gxnYfFib9gyNDQ2aZuyoZL2bnrnSgDgEVw76meqXmcFQa38PfvYLgB5dJnXw4diYemtzpTVvPYfk",
  "key29": "25qxcxME2EEdnJPhJdnuSwwpzZVQrTVREkHtZVnxWnarED9NW934wzfu81GUfNkdgYFuqHCUxR5KJVHfS6kWbNR7",
  "key30": "5RaWs4bH3Lr6Yy6vANPZqinBnzDZWDjjL2dyoTWvanSyeHdtwhTd1Uw9J1PC5CL28pqrhdDwqrPGy9batTSjzEwx"
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
