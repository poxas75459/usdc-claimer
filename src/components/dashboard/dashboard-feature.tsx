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
    "2rf9kuCMKnbEGe1FYDAf1rJ6vzVGUgqdnr3dStUMR3HxAraUDY4D2sGyMVbJ35DZnPRY8zDP1dTYNsE96nLXXpC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TaX43f7BFGp1CXR3a7HGEmnK25fn54p8VMfjhpYsvmwEo1doFWgFCm7FCYfFr1NggTMhC7Av3XSkyUKBkLM4y5h",
  "key1": "3R9daHc8kRoyyR1R4wKyHaWfHM9d8ghsfXtyp9kQPzJEckWpyYsQf3Vo5hgjdfX5r4amsJYWN3RttaFo2kfojqco",
  "key2": "SuhYZx7JYeLfxihaNw9Ff5S4EWQRJ4XYhnf1R4aQT16ehh34ep6HmzSFWSMuM3GeiirtwFs7SCykB2PCC5zVtop",
  "key3": "HxjzYV2vomKmZkhUnhbzWAR1fB5knLYUyYQAVrPK24MgnZfWDwyY2jftpgsVEcBJq4iAEk4VmLtVmxWeWVWLdPM",
  "key4": "4PoWTdnEPAguYpreZ2dF1G7V3vv6YJPSY628aafRD7RHVDBazCY7Cco3zygBV6wvje9LTdgHabC86DYZCyxG824y",
  "key5": "2yCYQ8w1FLm1V8KPeUCsffvAsLVpN5JG63EuD57wiVmxKjNRakK9SgtXFSRUY93N6VCqUzdnK2armWtK6LrGx7wL",
  "key6": "2os3Niwe7E9FGWJA6oq8c2GcLQbiBmHhxnVzAww8xgtEWBS5S5iaHqyVnnURpaUCPGzzwcdxNGFXFXdkgPna18rS",
  "key7": "4CHuZLKe2dEcgRdi7YjA1HGnFBUeiJbvNMyu4wh4PdF6Vmh62hg1LpQ2NtA7PcqNJcvbuvbJHeY8ESy5xj9sn8xv",
  "key8": "4ugrRgNGuW82gk5pXkyenVYxxKrEQCgc5aaHYoDTTJY2ZtYHFiCb5f6vxBvgkPwxm7vJwYEs6c1Gpm4BBALvSZ35",
  "key9": "4McmnrHqwrgY2VkkNiQG8tEWrNKqhzPhVUH3HMvzZYNs4kqGDiE7sCpSCSe32n311Rc1AcA4FASVC7wK4rjwhyqF",
  "key10": "dGzdpyqoBdU6y6MPUBARwUh82J5kEExUHpXGgGJL6ajmkXQsXRZTwqSGusCg5goxb8EZAnJt9ysRqHihNEeCcD2",
  "key11": "39niTLv2Y2ssFXijhXEhzy3Gr6vrfJRnnVK45kLjHKA8cBbUSuo4aLTWeQa9Gvz5dVHrGsR3v3pjrnjL4GrHrjxT",
  "key12": "4MfKcwBYcQSNsLfTP7harY7Qm6JHPbWfCnY9nqqidtwmXiXoS423RuGWNUiupJCGBumu2MjDRku6kQafLuENPqA6",
  "key13": "2qYwwj8VXxdBMkGC4QLKoXeDeRWmejh5b7WXSa8T82fnMc3CrbAy2noYHy1Pfi77YNC3BWFGzk5kbiTSBbpJXNsK",
  "key14": "219fWVLtyhEDuuCF9Wim38SN6st9M8bThiJKmJ1p7eSmydq7UXwMgxF7Ho82xCiZUUnFoggTLrS2AukNMmiBKrwy",
  "key15": "64M8x5o7Zxpz5SpBBF9ur3jKaJvXtXMAxxXjaZSFzoxkLovgQ5GQPQd64hgjBmBfLyovX1P1H32Jey8nkXusAs9",
  "key16": "4o1qQXHzvUrs3bcUeeMRMcwSHakqWg8isceK9cxifXScDzcjFtb535J29YihiUJ7kw1tn5Qg1wzksJYDGY82vbnr",
  "key17": "TM29nFFnkMZTwtr8P4r1KYqQwSSw2iJ9B7hZLScRpA9vN52pvkq2EeryNX8DRF5E15FQ3vBZcaAiMBNCY9zxqdB",
  "key18": "4RDXYZj5AUkBVYU9epnuR7B671gjDW8jhKo6A1Tocichf4AzDVAxSLRWurwTLQMbDLDANw8f952STpn1rWBoR85t",
  "key19": "4SCJfAYZeg1gwq9ygR9KrWVkztKweFkZnaXcGkSbaeuCJPPuHn3J4uUXh2Q6X8BCGcQLFiZRA8yvSwjtukLkLeuH",
  "key20": "4PPWqjAyc3gP8u1Bsfjbvf2Z32uEKLzFjAsVh72joaP6iEPp8rHC4ymAWyqD4VoTbUTfmFzx4ZdLhjJHpN7v9g7B",
  "key21": "2LhT3jf3TPh5y7JCnqt8VKpBTVzp9LJjYwnXcmpBR3r9czB1EAszVSh1aC2Y8fdJEgE5LmjkQUBQR3u2AsRV96ae",
  "key22": "aVzzHvansHkb6s7xgo2YzjWMy7j4mhmMq2suvqEQQzHpBa7HghxjwHvpU6V7t9MFhe48xscptEUQZsWaJQmBFBP",
  "key23": "5Yod96YJo7QVN6ag3sVJKtaZ4UMyfsEsUFnGr4GtLBF3HeVzGGTNhEQtpofLKwbHavpF4ubjKZ8RbwnafSNYWdPc",
  "key24": "5tVGdZGPhMeYHWW89G14o891Kec96ktrDjJa6sLgSP9nuvmeaNwTpquKmbFQDV4w7cxKdGMvCw4HUafxPCcpkjJQ",
  "key25": "3GuTEBUJXMWekkYCQQbSmjq6iSEeMnZoy4SVhHYdHrYNoxYYLv3t1j2tBjyWNyKAMxiKYJChVxegS4VgCdbEYv3G",
  "key26": "4H1E73rtDYRgnStvUGH4EEfSsNtQKnXUBfhbSB4Cz4GgTbY3hDMQAQgV3x4Lq41sv9jYWgVdQvZANKHz25RfHVow",
  "key27": "2KrY8ySGwXXSXFcTY4G7BkYDYt7gP7mdLtuGk83R1dymDatgBYyoehsWSAQXH3HvPbvrMfoZXeLbiMDVnDj7NqHu",
  "key28": "5pF8SbEbATToeoAvA9jzvNmZgrE4fPMS41TFw5L9nVe6fJDcGCKeUPgpKC4AtvYfj8onzRjMmTFxse2zCeHQmoip",
  "key29": "47SdjX6ez5NwnmMRakRzCobeL4osTGVJndUk2cf3ox1fzPuD6PKowBDzBCHNYavHndjUAbCSmKpMKMzyur4jSrQ8",
  "key30": "4iZWc8TsLyy1JvUPv73yGTpujtpo1TRccCTtsYXThVdALvogLo1g985ZxzrQG5kXwktJcagZK1r37dYHWBakYkqg",
  "key31": "sT65w3ejLbCQU93mYLtR7ugi3Ev6RCEHKDo6jgXjRjcTraQz3X43qQnVQtusXm4SEojW2qMuhTuHffyw7RLefoH",
  "key32": "Lzjyj6wqaFiNx77MiUK1bZt47yfkL9NaMzKDocf8zGxKbetMbQDCAsRvceXTixYAQrvLJsGWBVHjy8fLZi8R8XR",
  "key33": "oypeTCByYSPSPdJPpYb1gpZeHuyXKZQn1LKekL7MKwFXA8huHXhAYkVWWxMN8gkfWD7jzWHSj68Bqp3qKppvCyQ",
  "key34": "4dgpPjUNdg1wMyCdvsX94VkkobPkRh5X5eofkfTGTDLWdj6whHt3ZBbonSvbFGazWGCXKniqA15ojrU1yyY3wkA8",
  "key35": "4UJoYPrgprDsg2A1ZChy1tfYiqwHCGpSYMS84M83UnTCm53qECyc6LD5ry2LDANs1kjDKDDKCdBBsUsCErTGJ8jX",
  "key36": "qWpEujFiejXLUThpZgsC3G8RUvsuB532GTavShdg6i18nLrSiHkAeTmsmpbFG9BAZ7sTYFmKo1utchK3YoHfKbK",
  "key37": "3oSSQFaVJPNz1J8frZEUuKoCFExshXioMbNeKjUHoFWtuduXjfbFU3JE14UyUUXjB71zbPrffTvXGVVFinRsrCcz"
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
