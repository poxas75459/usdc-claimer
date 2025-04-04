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
    "5vABBk6iGDmUnrBi3sdS4CdEu1t4oEo5TGDAQaViV96MLo7esPS4QGR5T9HcVDQx1DTHaVcupV3dWf95yvhtCS3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NNShPfe83AExPJbkjboSvPf9HeuZ1TwVcn3mpWm5v8mkLm4643eP6hDuqEsdAVAy46sstjYKaqdXcokxkuwLhRH",
  "key1": "4SL9NNGmuBe4b9Lffb98MB631XNFSbQigmLxWeLpXEG4TpgCycBPd6vxQ5iD3rrN8YmU8Q8GSymtjzRoHsWPrt2H",
  "key2": "3na1iCwVo4fD327H8j2otMNqAeZHv5zSLnR2WZ73ee66bEJci9eS12P1QvPPw6kZ6qjJ7c52nYxP1Yr2BLdMqcab",
  "key3": "4zWVAAiCePf62PqGg9NeNSP5vpNVcmWYjRf1R6FwV7Gdka6iZ4yXSReMnqZj69DHtVDPECmF8PcKi7cPXap7kznw",
  "key4": "GgD13W9XeiATS3SJUBnGxAsQf3LC6VnYX5K1MJM5n8Tdf29M3g8YUvvFH4hEBksc4UaBUXaTwjSTjxL2JmWhJVA",
  "key5": "229hVqBsD8VX2cSkwh7ym9qCgzrmBCzmFQ3CR98szSSCWJ58Eoc8P2XatLmbhYVK15yZBb7wuFScs6d3Jujr8fDC",
  "key6": "2XVcovHYFVWE7dzqM6yCAFss8Xzx43e9MuzvcwfwS33GBc27ztnEunekPyV9nNRaPCGQ7UbFYE2fdz9pnNwuxLBc",
  "key7": "3Z3WTUAJB248FtL98zCLhKdT6vuwNGhZPTJusU1EhBTtQiAEmyAuMj29XFd71fqBvgcNznYu86uJzoBhJChqYpi9",
  "key8": "3aUPq7VZXQs9LF656F8kejZMgan4QYrtvCo7nFuyG2u8x1Ns7aV4VbTGicJDqpqaFxpNremunCo6mMTHCPNVsm2s",
  "key9": "HjR7qYaxSmmzuuiVy2TAi9aZtABhcQnqYoMroSFHmtxPxmpeNno4etE2LSMSr6vHUgd8vyYsziLUn64ujteLqnm",
  "key10": "4JsaQeqmBaPfd2dNMWWDQP5DMpwP2ZtVPtNxQokLoBiFw98PaLWV6xra3q4bZb4TMLXpQafzwrem4VM5Ln1rdErn",
  "key11": "U3xW25X7oMJ5sKEUvshotm47UfUAPrkke7STBaTtrqUfXg6qAsEsKkwskWbKcaLwa12auPVN1spicoKCLb7FT6i",
  "key12": "dKM3ZNXc9aqDWC4cY9RULG6mSs1Jpa6NdGKfr6xkNRFoqECosQp71YKKAgTR3BkZ1ZoP8dEYwFzVAAGe3Jo6YNr",
  "key13": "2k3jGixJCfbniucg3MqdGyQbCfvkszBqn6Jtue98EgWznrpg2vXLE3mQpiP2hDRqFsfMa5HaJb61t4Vn6kF3CG9N",
  "key14": "CnZ89M11SJou56myuTURvsJJ2K7dceBXppdXxZTWRytCwmLfzMFqJ8vji2gnisQFvgTRjHrF4BGZKUfbcuQPxxq",
  "key15": "37rWreNB64i8FuSCazh4WrmPw4dcgS537HR96WisXhJ6BiEjdjsRqM6wdfsALSQFjCmdzRKFXJvrxi6VJstGEF2s",
  "key16": "4DBzTQaExvjHBtE2boBFJB9Ygidh4uJCdcLb9LqWi1JnspPnii3uMweuqsi1STbZhYimpbbidpW1jF3M8dTFbipy",
  "key17": "3NSJ8mXq8vVkR8oqfCMs6DSq7hc1cbK2Xq4VBse4mPwQqk12PS5ignkjJqRc5rvRQi5FS5UT3nBaLPZcSd4ztMFh",
  "key18": "3NE9bSrthw3TnSDoHF9iNJsBmaJc7q3Usf3hNd8CgAujeUidBF7sdEgdKMYzYbSbeG4SHDdngzS7bsuQvSszzvkX",
  "key19": "5SWgE1m3LX74nxsBPxp98tWAeRxFGuM4TBZ6gzZe5mTMoBaauMkBEndv4t6x9kPqkyRZEXADhofbG2PDHKd1Ee69",
  "key20": "3JpvvbnzQEBmpGBfC7LoGhSjVLarRKN6A9XKVMevh5jo2qg21fjggxHsjZwEgToPubjGis13LCvCZbUPu9jPihR6",
  "key21": "Ukm7Y5KD5z2iKKx2Ya5zHxWpfKbrE56HC4F8owcD61KXyPPMaDnvWV7TNtKh3NKrEMNRQWqwPTJQC6VqpqRWp9n",
  "key22": "2cvPwvx4C2zcFHyh9PvkXpGALVaS6ypBpex3DrVgKJL92HMZhVkW9tkmzZ93x9FepVjNUkm6tCrNmQzzvQLCFvh1",
  "key23": "3DRcSSotExZKFHh5EVEDE99tMAcNpRfGnTjDgw3WtwxhoZvhXjYFcrbuMfsF9jGLH1kxocBNSGMsLSngCEG99CL9",
  "key24": "3WhYCidhGyavcwpzkypcigpR5fHY1EVgodxDmBBX4xydA6SY74jrRLS1RrDhN2VSGaqwJvSz3sNyiShRBMAP9hpy",
  "key25": "2NkR8DsjicX5TRhwEL7vwDmG3mcrLRsU5o3Em3s57hTPXPqiBVsrgxipg3W9euLu7YZR6qi2nppLDfMbFb27TP7h",
  "key26": "56u6ZEd17Lv9XMU1JHWaPiXR44HKZMahsi4kQyuJpC5yvwSX8yxhKxg7Av5tYBU9i4ffsRzPtndiA3wNtyBKS4yV",
  "key27": "5pPohUFSqaGgvEyWBgkBdGScJLx6V8N1AZqbvLtdMgYst3pqRiY6fdo2EGfw2646iedHvWMHhGJBs77kZe9mmfoe",
  "key28": "2GPxfXKRncP7dMzPz16BuqZ1Dm9NDNiVAoTXzY3rYMwf1yjGa7pZjAGdGGQaXRjvTCL8GXjqwD5D5BXx6iLfYSr6",
  "key29": "5czCC4B5ssp3xNr5nS4p3HJ82r5T22bqmnuiq1G9xGaVAYmDPvVPvpeuQMp2fB6PJoM3BAFatBuKNoNMGzfH3ZYN",
  "key30": "2q4eP5muuF1gUkZkKsYJBqfLCrYQcdKu3stUeWmLDPX78xL5H1R1ED7m4wBE98ieso5Ea6KDULyhvrCyJhk88pTh",
  "key31": "nRPMKaVbcj9q5Q29XcDgr4Nf2ZGYeeWXKH2ATFG6ywLRBXxD7BL31mxTDkcPp4xQcDkuVNX6MDFtW6a1fntEcEF",
  "key32": "3K2A39ZYQnPsjadjp3EFyeXD29AQkBuxXvjUo8WdaLmzMD78kjHuqPahFWmkZZoiPyztk9vE3aCsXfApzfJdpk4C",
  "key33": "3EqRK4xcbGVShFwGDDeT91EpVzYj8kmLvUhgRB8fcn1W9JswAHBsVr6UY5JjY9A7aL5FadQb8VHrF72bPY8TDew6",
  "key34": "UYktTeK6eygfY3TuyLfXcrUZrrpE76mKDP1o5TTVrK9srCpqNHqmqKmNaTqnZYwuf2Gi7CL9N8gU6pyKXhYDDWD",
  "key35": "2jM4RXcRdFdWrkzaHMwjavj5vq4K4d1TNgCEdxjKM7Xf63Cn4nwBGGRTfXtBMK3nreRtfc9ChCb4LefzoxzHqNNz",
  "key36": "PiNYJ2mTgAoZtV8U9VuPZtq4huFcBqhoZZQ4eMLgVUy58QwWLg3n58GTrTboXTpCWXmkzoR4BY8Ufho3FTCXKPC",
  "key37": "3XReqzBqawoipEFBw8i7hSQradSbkiw1JYUzEMBrbP6PiofXFxQUYZ8cwQbR7uu2RGYqeRC8VxHLHzzG8yxovFvb",
  "key38": "2ew6etWqzYfUNn7nNhC5w7eKiTfHCXAx7Q73mq6e5uB7swvcJgo4261XQTt6CmJRY3HDfDNv2gmo5tNsCXFMXxjX",
  "key39": "2YXbnsPhGYr4yKFhvRHV2JMvBTPcUeojbw43XKxyRCePmndN4EwJrCJ9oGRRRjBZHWFGzSYJjCkj7cVcUA32zfi6",
  "key40": "4WbnDY6iuTMmYNE8osdKamAR5eoiwL9ntmdgMkAD5bBQhodKceJ25NnGgpnBnVZWvD8RDDUuWZJCAy55W4QqyiJ9",
  "key41": "59weuTmq3eUjW2VUtetxhHDd1jmdzQZt8YbHWYbU9SahzK4BDmZ2PczfXUrCjNkeidGoBV9ZCS5qXLTfg6M5opN5",
  "key42": "3WdGYfHwSfqFaCrzZufF7dZF6n6qQvpRxhTEqp3nBtGdH37YDBmzBzr7x4pmHqXQsBVhXFHiJ8f6pyKdT9R9Kpza"
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
