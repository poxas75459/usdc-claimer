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
    "8rD5XKtvYxeAQfbuWpeDMZAStZrEQNPw7yQCgX7gE1k25na1RqKQBFz8u2pV713dnj8hReEBgTAxGqtdowkaurg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XAFRHQvCnwqGqZ2UYAkwWsfL8BLQ9CqxhMbHEkmoBamw3c189dziuAhZHmKdbtLRFgKyhWUDemVphqGyztYjNuH",
  "key1": "51NhkYM2QqQxoEFjpQsbAgPR5XfGgaY7zpTyk51229RCYJAaCmZPpzvbsLTymJcRRVdRUMWUFffBwoM7hD7UuFfh",
  "key2": "2qFxm9FXZa5DNG24NtTaYYMoy62gURPqqGDj5F2puG6E7q41WUHGdhLejhNEDHv5LKUN2bKpbQ9gNXazLFLM9HVi",
  "key3": "3wThFtH6ec8jNc3RRbBo3bBom7uYRMBbmVxKi8gC6UkJhA3ct89NQYLDtaeoK3Ld5VSHfAogJhkE8M6eaZrSwTvK",
  "key4": "461DboeRHLHs5yUnC9DPc6tBAgiJRQQRuJbPNc4jujpe6K8dTbhKsiuFYC9EtB5C6soHqpNdSxobkKdpawjDywzL",
  "key5": "2ig3NrqPZGX4boJBFXZHJzYW3GtgaEXpMCYaryA9N3tpJWgQf5poo7wGi8tcVSSfWv5Dmqddg4ZsEPa7N9gHqLJk",
  "key6": "63qBJWA54FUMPGEjo4EhcgkvEyAk66SkqSK9juPipG9Xfjv1dmqx26yGGsoeRV29vdkA8jLZ485QVg1aPnwTYD2d",
  "key7": "2VNmu8dB7LkaiGKnZTjZHj9DMDpwSBjaFXqD4ody2idB2dPh4xc51zU52zHRM1VzUoCYFAy6KyHDrMLnLsrhHrRu",
  "key8": "5L6Tjq2S1PadTAZWpjivWKVcGEdWEASnimGiiXq7dXjDGyUNSeBYaSHuXuiR7j2nWayi99KkYT7HrJrjPJeQRAWY",
  "key9": "2JwksYfCxZrXY7iwgRLCR81VJxV3sff7CEobAnJZReeX6ksq8yNhg6e5K4FTT5WZzsojTE1T95sXTqeUCQpcy8YB",
  "key10": "bVgTCP1MPpj9hxdeV6iopUvyC9fExcBGS6yvX3N2dwiSVfhvhH68ubkbBpgs5J8gLNPG9Bwm8Y3BNjCpwCArfWo",
  "key11": "58USnevTUc3exhLXWs3yXm181eCXQnL3Rf3ZTcfbYYykpMZUjvUWyctLJgubTLzzdugx79Rk1i2dTii67xCAs77Z",
  "key12": "5uUV7i74VnBk4HdDu3GejcQew4XVHyGomunRgT5jEsPYn9HgbMAjHuSvmPHyfMj4jF3bgLAq9txdW5658BqnGtj9",
  "key13": "5QiN5hbDjQexhVGoFsW4hZvosEUpXz8qq7VBfUNzG9fqrx7nthahKAGB4sh6AGudAYSTCVq39TUBJBtZgunk5Xmj",
  "key14": "4GAtaQCra9VkysbN4qiGqszXkBkLCGJsLjWNPBocTVhrSnqZunJdg2BdDudFyyf2f1DLGuqp3zjCttpf4SCwFcuB",
  "key15": "3G9mVewE3FyD4MkUBPsKbschZqBeyhFWR3UM9NFMavTseBXpGevfRNv3SNSPNWdbmkUqxGL5bkt4LVdJENycM8eM",
  "key16": "ERLV8P6UxGgNYefLPoz74rw2T6qnnxyY68moKc1eerZWdX3kneVNryzSbPZLzJmQdo2MMgHcWUqvkC5jhskKnL7",
  "key17": "4MbwDHYq3RM5s7v7rYQdG9uPS9wDcHnKPyGcK1EP8imYVd9UZGxmQAnDxjSvFHuZQoX2csmFztuFL2Zd5L9KGhw",
  "key18": "YgJeZJ2Gp62EkUx2CgJee4wvzoPRwHk5C7cQCXqEU1KXRjRP61MCztx5QmyAwFqcKxAC2HmWz8ZWQkUUCPcXN6t",
  "key19": "4NSfuJYikQ8NPizz81JszK3c4HV38AXNKcHDhZvcVE4woJitr6brcfD1zEn6hvijniuKqASQee15Aerrp2TUbXgd",
  "key20": "2aRXpm7KYQtzBLZWDef2CQT2QrzMuAKJ4uTjSvGfgsLjbCLAmUQLHrekSA6Xt7v61JvBA7vPMY8yKBfJVRnTVRY9",
  "key21": "v5xoNfDf95xss5RAdNst5pM7uu4GG2RuAkQiGcyU5Tz845bvTNok7byXyVBixZvWzGQGkBqNCAGoCvb8H8osQLe",
  "key22": "57dRbc6GHB2SrxW9jfWjkym1GYj2ayndFZmydyoLy6P92AzrDxJtJojkbDErqaKsZrwc681AiFVDA1fLJdtpLebU",
  "key23": "2dW69XnLJCKtn33B6i2BFSMqchKLywdSLmxUeN1b3BjHrBRf2NtURqkdjhdXH9xXTA82BJtHW6dgYbYG9J49gb4D",
  "key24": "2uhbnYLQjpxAmwNrZWLPjHeGfDpK3nvpkrQKMKcJkeEYYqxxD415mczMWjWMHGSY9EDUKVzo1H1MdidD1RUj2gqe",
  "key25": "PS9tKB4u2cZCvi2YsmSxfsSA3kLW1vBX5Bffo5nHWscvtgZhz6gamVYTx7m1MBqLuEMHvmioKHHFUfhuEBVm4TA",
  "key26": "4V7MhFmBiRhe5CwN2WxRzA1ToLUeKJjXMLqg8e1XWkZi4dPFoaq1ZGsyMt7W5ommQehPrkKPnmd5mr2idC5jx5V6",
  "key27": "5tVU5G7NYmoFsH3oPVQ5tWQgF7jfXphJwtmC2RfDA5raxX9ZbsgVkL2WoeqBqUgtd3isLaH5jFSAhLr5eLctmHs7",
  "key28": "3z59tfxW2YZCtzUBESEfwkbKidVPF7JrppHpQ9Ry2JYzEasoYMYYVUHmDq7a6VFV8mJz7hP9DTZtHZQ5TXL4wMLS",
  "key29": "3dCqZUXCk5QkZ7u3bH8pDeGXKEVumWzP9Dmn74jtGHM7LVbVtqns3qjDagdLXprhdJHdrNLggVjSTubJc9CwHM7f",
  "key30": "5aPetPGSUF9XbeYXFnLuxpW6VR4tug9bXDB41hSeezFJqhBDQ9iDViEbmT9Zn8Ai5EASU5EB6rxPydrg3zaxdG5a",
  "key31": "51Gk4fK2dDiMxpf9GM3D4NzSamQ1bnFNhyim7jNX1RW347xWRHHAsScs2pgEYPP8bSFkDNjR57voHr9S1gGsnhh2",
  "key32": "3aqMXDSdzUBheKjyoKFkhYngu91rffTV8Chkmw7rMmQP1TAAp4kyEfp2Fza7LUeH5YgLxzwSPTNZmLi1kQUx1D1R",
  "key33": "jBQtAeuAvSjpjezKTDNz8mxNUnTBMuehD85SzcESpkRjc8k6pLNdv4Vg5RowGuGR8Me3ur8FptQLuaTc1o6EAmm",
  "key34": "3x3qMVwMrgA5neXXfRkAuzBzXsBv7R8ABkLtHEf2A8R1LYuyTpxUibecEUPKUdJogXzBALCMc2tdbJMmiY5FdNCD"
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
