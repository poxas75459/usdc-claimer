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
    "nzxvDUKt3i2W6iHvKXNoetVGfPSvmcasLPt9hXuddMuMKytBK5VQuQq9kYRYPnY3RhEFUCD3QtLgNwtT2Zz5zku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ov7D2A2LhtJYLW4UX3J6VehLJJYJ2ymZPxzKrmnkUDqjnqBGKaGmj68wU13npiSDV39M8my5UR6P5TjQZJcWkWp",
  "key1": "5kxymKxbd1DbXchsERGPsv7DV7i7PHqxaoceURA1ZGCx7UVJ8hsU1S56eGbFdN78U3tY6M95c4uzeYcEw6XrAMKw",
  "key2": "4wQfRvKQaZRLSCmSCWpvmkD9pb7bRhX7egMGcbP4fJRzW6mYkWgNjxE3uQwkXcSG3pkH1b6coWZX22f6h1FqhcGq",
  "key3": "2YkAQiHwSA9WRyFc9KzCKKiFuRthMSyRDimR2EZeWS6nhB5ZiY4SZwxEjbWUr7J2M7VuDQwfCjAqi4vqfGCsfHQF",
  "key4": "2ynWkeQcPzCy1aFsZXGaSAyNtcuD8UYzMcHtsyoLbis3RVYZ1p6hTXKeCWG4946hv5zm42jvHEAxDSxv9gSfK3wP",
  "key5": "4Jx5obdpcBYNHh3sAouSVDPHcwad3kjMyeimTEgE4psUTbb8Bc8dusDa7tpt5mmdBRgpeoodFG6C7VVPk8z9rdrL",
  "key6": "4E94ePMrw6Ua5rgQYfsJySmefBLjW5QxrXTs99y5VBypB54T6cLQN512ccpmWjosXGszRcFjEnooEsEpw2AbJR7a",
  "key7": "4J2EjAyPKB5d4MtmRTzkVb8FvhKYG3VQr2faGbUpN5xvHRbmFm5FKmqo7Dj97sLy3uaR1RwJg6yfWBJPJp2UqKtC",
  "key8": "43dAqrw7bp4SYK47qC3gMRfzCChwt7awiQQ4ubqYEhSKyGdQvry8ujf9zzqL66cADE5G3XfNRQrrLAorPmw5nfQn",
  "key9": "CzEPQ8Db6wRfxMTSKwp7wtXKTTTMhdBkSLEBdNP7wVPnmdVW1nfrBZBBxsASmt8p6MSjFjAz3TDkczCge7hCcDc",
  "key10": "56H6qcwcsSecvVmgj8AY7eDHkpL1NyS3KaeuBoqyGYMQAea5711CUEjHbVht4687aFtZA7nVx3DLS8Y5EUCg6ZjB",
  "key11": "S3fis5PNkBzvMwoNiUcYuq3McLQXSU9TzCodyHKFBwjw2TY5ipEUuvBxYXuGRWnHZyHyLb7H9beLTdPAFoXyEnD",
  "key12": "Eavw6cTgpfG2m8kgLSQtDuuVrim1dRt9HPJLmaiZ7HkJC1mjiqJZPpppRzmRwLFpd2x1RAGrqxkSenbM5dLLfFp",
  "key13": "5Q2bXa7h4fnza8ALc5SQQNH9oHAa9S2XwT36ja6zkuiXUXBX32NipSz586ni3H7LyE94RNk3Q3dBiCwoTMiWfHho",
  "key14": "X6LCd3wjUiHhiyAD6UV4Cv3iP41GybD3M4m9pJ8JRmUuaedhjTS4m8J18bRcV4efPdh3DSE7nLFjnqH66r7dtjW",
  "key15": "32M8gGiCtEuYxifHDYJWpXsFXX6yWa6MexYXySAhGooVgoekNLfyLnPghZym1sqVWxevu5txhAYL6Z4KiQuuJvnu",
  "key16": "4vVuf5gGTU7i2vFj9coRzTGrTLVR7TNsgjmuuG5tt55HBsqCwpmw5DQc5TTYzpdXkQ7Gs9tQWgox9J5ZXxTUsLFE",
  "key17": "Dq4Hf9oBmb3pcYhN9vbgdHd6mBc2cep2swPN4xCPjPCXmUwTEnn3ZA9J6MkWfgEacJbz9gF2y6Q6e4gjCYxQEub",
  "key18": "5Sb6mFhj3XMZGkxp2zWEkuYco3H3uhDibtitngS7Q2iefBEVufBLxngBCvtHfZcWEZGcpZxMcsKFqQeKUhZVp3r5",
  "key19": "4hPKu359HvQLDFSk4yNaGRjcQ8rXvyV4ZVAceU6MNnxNZ2PatZUQ6h24YhU9Xa6qqvXTEJ2Hjsiyw7P5YwZH1Z6z",
  "key20": "5eFXUueyXyiHfrYZZxvzygGqfbSqMuy8Zgwj2B82pze7Z8LioABAMvbPgW5QRMkUjjZvAQyLVQ1kjMQ8RwWomxDH",
  "key21": "XiA9Cbz58kuR4PTUHwZRkHqJ9VVdwBUhwqPMaKGavqFMPnK7BoDUpJmvRLFoiHR424UgdeziPXtxFguVphPr6A6",
  "key22": "445QzNp1KpsWANvZ28RquJztsi878EyUUgFXSkkzJTdtaezx7Y4fzMRvEVm5uW3U3b4o6Zzv3zvuhCxDcVbvVVH",
  "key23": "3FxWDs86xSmFsg86QBTVYrDCrHBVSqmQ9zdxBAUUsoZ3LChufJVwsumkRpB7bFQFd4WfT7bPWK95iNYwJrW3AMK5",
  "key24": "rxB3hs2VSDwgPVAb2gYLC8e4pbRRjWmfTSRAtdRHbdNgbEozewPbmoHHz2ociDrtYURYK9xJ9ewX63uLntVvUFL",
  "key25": "5kxeRQLrBgYfAm8cWnnvzhQVnhtYbb1MB6vfgVAzok4d8AtqTBgfQfo7Rdyr7S6k8tDMsCftCJ2VBNSGxgvnHzt4",
  "key26": "4GeuouosDijKSFPYN87L1fGEcGnTBAjhurHaepgMfqtaRM1HJP9GY8QQ1KW681X4j9oz8TW8GXz1eyNVCExfnUBw",
  "key27": "5g3dapnUjLL5Hy2qEis7hGtSQMqdbTEcd52RWfW58qmKJvGD2N4PUP6Np5zDfMkTdREtcjveMfrSuLwFMXGKfZmu",
  "key28": "26RNMgBwNdEpA6FNMpGm2jm9ptEHe4pagcesTkp8jxniFo22V8yK57jh5xxDfeRoFY6zDhXdAHkVhuKsNQUBtqwX",
  "key29": "MVTHmiRapBXbobUqPiNwgb39Q7htM6hg6ogVRPTTUxkLaRJqbBd7m4mMVAmpn96MCPmiEnMnvdtr1u7tGfnkNmR",
  "key30": "zd9AUyFULgboq8T3QjiZwSrCdtCEAQewM8EVmhHK2pS6D4xuV8B91JcGaUhss2QrEk17LonF7cdVKonoXH8Uqp2",
  "key31": "38fJ62FUm64DfhtBZ29T2ZNgdBfY5ceTQAA8kTHdMWmdjHVjHFLhUfjkyVU5ft7LtdsLGTcYnc74AtpDMLNy46G8",
  "key32": "5Yg7J8UHuB5vn7RmFnFnknu5N9qRjjhMFrphxsAgAatevd5PwRSi6AJktmTJxjNfJPz4m5adwuvLTkZYxowLnLtC",
  "key33": "3g67XZ3Vse34atYqhwNmbRhgscYfkmq7AfPXxy5eaTtedPiHJXaC1UVA16VF6Kob7X29pGS1R3Aa52dfFjuhfWD9",
  "key34": "hfWHpRX7dh2KzyMo64EY9JVKGAWvmPQPC3KBRTTQ7FYgPF79ZX9vUeHmz3YT5Y4FDk4Rz88JuN8JCV2YbvZW9Rd",
  "key35": "38uAumEFFZkYDJ4VkmX6nVWAMAdPJrpJN5rnEboGrgaxGabrdBuzsVSz6xvYHyPFzdtGGuRf6w6eXy3ercJ2Y3jE",
  "key36": "3x2ESW6Rx91ipydQEWGNR1VXgQksuTwtb2VdkiwczhcGJya6u1AWbSLwwQxx8uWh5WnEhfxSYQfYJKj4LHyjE3eg",
  "key37": "2GN3awgM1gCtbijpSEevqHuma1NjMfH8z5TSRymNDoo6oyrxCtM1d3vCtTjv9QsRVMkVcQMzRE2JEBZ28hQB7AFA",
  "key38": "49eevFDVsDXqmpQWvtvHkcZ13M3ojdchXPtAiu2mLc379X2bhqTSuVmjN8yjiBUUoqn971uGRR3pT8SFMu1PBcHc",
  "key39": "4fVQnUPZosBpAkCKgV2HvDW1YYzbrUpguvqTduYeTA47HjhdHaEyja7a7EXUY1MJGUufnn3Vf8AK6pDskaB3ciWi",
  "key40": "41LV2bRKpm4r8R2R6DZJD2quhnc5CbuL6tc5wWHSiARizN6djcZqwFTduMT8GBMyVG5GDVGey5vbwS7MdVd2ct7n",
  "key41": "2vQnYGQpivkxGvzytTCj8voy6tobK28JquYPNfKhyCDTXTrSaxKH6LWdkB5XF5G9n8LMXusqxrirZNqrHspnq7QU",
  "key42": "4fL2eJfuGtFa35gGUYT5EwrabCdQwvenWWEDdmX6tmKqbCqL9LZi9gcAktr2koQf1b9yptoB58UcHZjdgtHJC92q",
  "key43": "4PEXED596w6i2NRt2hZWap7qmPdG9nqSbFxZrHCXTjxaB9CSDxmf72vQhvvRcNGWsae4cQEjdkdQFJdzcqsvcmdZ",
  "key44": "3WjCmy2ao2NgD4J9qLPBcp1NCxymzw56K841g2WM2xsr4Fqi9fGkCXa2wLcFXWvS8ZMyK5VZVu3aasGJy6LUujeT",
  "key45": "5i6NBv51wBS1bwtrHJVGjPevWhJQMKatC7XvqfpA4Jq35L3QBu8ypDaoZeGTYBUAwZ9qAzrmqip6CZr1GnXaBimJ",
  "key46": "JYmdXGJXpTQ79AGPqqAZ4sNFsFJqUxEp6pk33V1RkhjFfi47gN8pMwLAjBdxcMQETmjYFYRiFeoVfQoAvUxvhgs"
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
