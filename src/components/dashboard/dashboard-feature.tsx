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
    "38FyMP9aRhwVVboQTZ1jmZxiRm934gijymsEjNyqvBtxRTWYZySfnUCZ2m34CLACdgqspnyNUQ3DA9iT85y8JmRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bEtkD4SWj9ip6JoaPrL7Ds7KPtY8zzeRCuEMuCAvf3mUncQEbnXRdUhgbrKnSukzQU5NiqDQddfDSRZkgkYu5KX",
  "key1": "4H4seh4wcDzD6xddCpnjNBdCgRaJoWGdFGNc5dvgBHn9mLuh6RgVqpoMbLpUkTPM1Y7Mmrkdn1GyDtMy7R25Rubp",
  "key2": "tjNvyz78Rimp74vgwo19pAbzptTt2AiHYsY8aWdT8ofdgz5HFEDjqhJGhiVh2Kz2ezfZruuQxnBJfZj9anCmwXX",
  "key3": "5sFHB92MVpkYyapNpyVm1aqzVBxbLHWim66Z6t9UWRvaYtn4WmW2quMhpLBQoCZzTPBRbjBY2jhar7kSfJ1kLomq",
  "key4": "g6LkoKdn8qjTaahHES958w61W7whvibFaG5seXxrkc11DzKy925q6wzRVByRpCdfjkTUMUSzdqL6WT5eFzKGpNi",
  "key5": "4c39Wnm3x7rQDkTMgBisJGYTr6S84GnqpauKKpJzCuE9uPSg2CBVaoZL8DtPpKnRAtrn7Q1Dxz4fVEzvCC7XJtRY",
  "key6": "J8Kz2UeJNR3x6Lvo63FsKsp39pPnw6hezWBmv9RR3oyZkVti7JT7a1hJPJgvDaR4sjt2XGBAYPheGLLxgPbWCkn",
  "key7": "246xU5Wp76aAh81P5ocZp5umAG249wfu6Eo956xNYDeuszuete36Xv8yWMPXaEMDay3BuYzdjN98xZSvGZfAyhSS",
  "key8": "aeTzYrHVXrLdNT9qAFDmWmYuXdcCxy7S1zQ2eaUHzouCE4dMkv71WAArq1ZoXmN7tuwrF3eSpgQ9Bp64A3W4QRF",
  "key9": "4jacYdG6X3er6nT4Sj22tUcM6VaDzW8U1i9dLUQviVbDPzAiBYvU4dbfGm4NTXMXtshBnvTCW2BwPijSgGbyAd4u",
  "key10": "4xCgWbT8XzRxTwutnBjHu8nVPTpzJGGhyz9BbqmLsZPY3VZcSpyzq8xqofejMiLJxpQwb57L7odX3LardxD916zU",
  "key11": "3nTqZsFFdagJmCaLUg8q79f9s4mGQMxfemAuDMV8aLXcHvTWdfUm8i4bFJHXfs6SwAvdAFdpFveuzgMrTaeh8mUU",
  "key12": "fmmYQVRWYBdPqonXTdWp6Aiu7HfPCeahtppLAYS4xgrdWGyqQErtz9oySs12EQ1NgvdKxjuLVQvqGo9c2h8XnnX",
  "key13": "62wa5QryG6wkfWABMZXeeDEks4VUaCNui6zeeAiCAyFzRTFF7zqyLJNfLXKUdcF1CX4CdrahTwXAS54fCH3PMjAX",
  "key14": "3TpNKLT9UBziXcmdz2By22sddqJGw6MmG2by5kYHfexcKrmPaB7PfMJVR2q1ukJ8AxUMZuMB1YuYajPQwwwjJ5im",
  "key15": "2zfR1VwfoFYjSHYEKcBcjamgM1NbzRQcTYyyp6gxU95tda51ivzEm3WKeN4547oZHBqEYKfWZCtJBMNfMc3M35mD",
  "key16": "cJXDHEmdJ5WAWN8w1seLrqSBe9Jbi9CHMmKcTsJeZvtmmioD8SyCRwWcCifRkgAJjdj9o9tVb5mtBXSHjp8KWN3",
  "key17": "PR5BS3GpfDpgr891J7z9w4CmqV5LyGSwHcDXeWGSYXS6BY2RH5bbF1gz3rx6ZwwPvgrayiqFcowr1VostXANH75",
  "key18": "39X7VBeyh9562E4ptShuwZvPaZRqgp8KHV9v9UjyojqsxqvnB9ohE3MqTRrco1V7vL9S9gC5zNzvC2J7vZNH7A2L",
  "key19": "2RrEDG65xhpeASJXWy9Z9BPUabBsYnS8MaBqU6V1whu7tFw9cSo443WxTc4ZGKrYw8qt3ucmWbFMVw7XeJSDFTPj",
  "key20": "bcxWreJgKLFJms6JR5S8VRPzRKC4Q7gHMeDHi4zCszDA5VrXxJp8wBSC2Mp5FRKmmA919MTfj7bdPmdh83S3akM",
  "key21": "2XMG7cVu9kFNf5qJVeQmJLNNBtaWUU6aZoiC15KKpyenmuWcPPA3hiGJJA61bU6Gsyt6mSenPMqd3t3HtSfGPqtm",
  "key22": "5Zp9kANZiiuL2HiJ9AprQvKz9TeVWTtrA1kWTsy2RDaMBNkbVeLkCt6mXCWdrDL372m1QgKykQbmWGHG3zAYU1D8",
  "key23": "3SJkuDmHiBy7Frupn135wCf36L1cbwvyCthqbBRthLddVFp9QQrCxH6t36EeYeL51GRuTzYsCJHsJL9JqV9nYz1R",
  "key24": "3iwxnXXmrx7PPH1ExV3qJwotZYi9Mwuyub97jHL7AStwcrQm6n25GchxoDbC6AxFYJXfbSRuSZeY5HTq8XiU6L4d",
  "key25": "ZjWtow1oe4ARpnYoV7RC9xVgDkMmg8bbvjEu4uCmwtLVF3481ygFGsVedA9cNivHNgiRpbq9R6BwcWQggX39y9w",
  "key26": "5LVkjRFkuMnLZQfciJ9mh268TzC1VdJS2EsEgqQDPZYjr78iXvdWVNcjWuar4WJYwB2MF931Apf5w2ZteRLKyoNH",
  "key27": "55krMCdWSFgjFoKoBmAzFtxiLEQSJWAkVGwW9qMdWHvNPf9bS6qxKAVnieUM5AvfmNTzHVQBQgxGcH8EoqBREhJR",
  "key28": "3toeBhggkrcHZ8gUHo4rDYzKij4VxEekC5z6ddCTymA1wPA9DjC4W8dB2HjKPDt8tQBt7VDRZDhntZ8vTPey1qX5",
  "key29": "3FbaoDkpLZD5p2Lkvb2EPUWhE2a77gSFHrXt9yxDWtazu1RohzAYHvRomibb6jvERkJBQ6fqafQFm7jaxgoRug3n",
  "key30": "fGrLbv3jzXnc4pop1a3DSdECWjmCKzqJeKuyexNoy5ShyqvAZcE8smbb465SMkNB4jaXTCtGoUCPzdN31n5dVh5",
  "key31": "3ufnmEvpf8CCbEJurwVSXy91TiGU2qYq3WZ4ce3pavWBM8mTnDkufCK1oGEXhukTqxJotRWmWxEHoFsjFsRNHhdD",
  "key32": "3axQxquLxPK3R6ipXxP1s8Agu8kSRTX9mdDogb8aBqZQY8avdfUV7kRjWatCoNMo2VqCrPivanAofM9gBdK88ReM",
  "key33": "42oPv15LDAJeaPUhNsdWwZR5SJcGniBNa5xz8Vzos2a3vtW5y1nUvXSuipYpt6r6jrW1kjoWJ4aWSNMTHb8Q7UQY",
  "key34": "5GD9VUhPuxxxKTf78fR6DGFTzHDpshCpYMDYDyQx7SEWJYScSfMuzHpTucSDd93ja92PNHXNUvNRN3MBGHHcmWJi",
  "key35": "i6Gfd6cksHhgmnDC4HLAQ7CezseiAMaRLcfjRK4iTd7YA6G5Tfuy5V9rhe1G8v4cT311FC7eLomsGj9p4cNwrpR"
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
