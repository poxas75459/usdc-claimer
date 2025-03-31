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
    "m2jwzh3ZpyY5nhBbme9aeQK3jqaZJVe9fNEgFE6jWDXDXhn4JhAzvzet2UV4owT9fQ5J2Z3ov4JmF1H2wxZWe3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTs61f7vdirbqQF9v7KfaHnPW6w26T5iJrriu2Rxupr9FAs8C645RpNozjrmTHSUmXZYvTqYn35HeoyhMtxWZQ9",
  "key1": "3xeb9HoEchrGuejSbQECow96hNqyoH6x2XbdCUFEo7zrfAZA1FNq6hJamvP214cSguuWp1ytUDwibw3oq1PWZ5i4",
  "key2": "3T1Rf9XcAJ5W2FZFtkpXipYshwbX5GbUUQwqU2yaZghND8ZHZi5cyE8HnWKJgpRicqZHLYMtXRpDPnth3zVQUqYb",
  "key3": "2CZVS5vK9fKsk996VcvBAKVT5PuVP41D1dcp4T6B7DrGq3xr6kzdfVLDVuWW9eAEkD3mCxYV6cgwAFL842ygq3HT",
  "key4": "5dNDHqQrstq8aVDhi5fwqE9gKgNxzt6EQuMMdxe9N8hqauY7isfCUuory9XYGWhYZak2KENaeB7ah2j6PH7236PT",
  "key5": "3xopAwe7VCKKqeiUyabEuHhPYYENKxrgrJDv1Fx3p3zjdS7XtVC1A5ykp4kXogw1Kyo3aPPdDmEKdGs1gr1He5uz",
  "key6": "3rH5pNMypDW5tr5iKbDqHd5LcwV2kBu4gfxPVphcpoTGcGQ17wEZeyZpja6YeKS27esLigDXkhPpAtPMQHVW1nb4",
  "key7": "4vkVmbzGqvCmQkBFhqP7QzdUyLs4eXHnaktVLDQdbhgcEmM7fGbPCA4yYMcpZwNbnzBn9tmGmuT2sFzA3yC3eDHG",
  "key8": "5ni5L35mupdz4XcAc2iQEv39YBPr3Ac8h44DeEHSjeVU9mGyhy71LGxANLEUoZ25eZ6KXNVtiGPSKuQRCZq1Civr",
  "key9": "2ser9nbnmxYkf4Fdkch64Wod7LMdXq6K19rSPYtqxx29u1DFpUDPebVn2gDxEUYzGQ3qefrSFpdwGgkmNwjiwMQG",
  "key10": "4baFoGHyH4wLFiaSVAu6J7a41ypQiE6Ynu3WEt8ZpjQ1iq9X6awd61hc2Co5Ss6pDVgohd2kuCfJ52xY6phi7E5i",
  "key11": "3n481Bvy8ivinJA58rER2QDYrDH478kpkyMJYgK9H7syAhNKhmKsBgNEKX5y7xcUz29r6yhuw2tbgM1cXmhbtsHG",
  "key12": "j4cWCsJuXBFZLgLqvuuuQWLC9bQE4Ht3GAUx4KrKvTVkFTwpUcvxgi2Xeu41rPwt98v4rnsxuXARBxWMzaSwedi",
  "key13": "4WjFepx5k8in5o5a8evwFrtxmfN9TS5GemUDhVSh39A95ecPSVL1DbpK3wWTvDi4KZbtErKkE2e46rt629QT9NyP",
  "key14": "54zPRoiygYBxTQwAmUEJaXuKpHDuBVFgBaf2tzuz1JnzDypRvHGUehLjc6dAKGBwD25EQL66YNY2MyHFZJpnWLLS",
  "key15": "4s3MVQoRRAuvkMgG8ja9dR9kTB1EBpFVdoPi5L3nMpoCyMUBYHkfj5krQ8zX7bnvNYcawTwFyM3YfVu4sFkvJ2h",
  "key16": "5Ybg1RAbyDMvBwwPDUY9rpQjcP3XTr9P6wuVJsachtmoYSB6AXBcikCNWsRMadYZ4hUrFKC4eyk8tZ3ZHLRrpEAC",
  "key17": "5ytfC72RtzLKsJXyBEhr9DuXTfNwjuTqMEySKRBdad2dVJ7gdijR9zSTNtZnrycQrW3E16kXuDqw4AAZgbEiHG5H",
  "key18": "2X6t76VpS56c75Ly3Tc5VH3X7LXootXZGVfutLXKHVbnrEpMjZZPviyfJGh8A61SFoB3onm2p28Q2BdHMVb3kURy",
  "key19": "mvy1XTEDSiNC6AReamLt2C4ovtFopbzwYHjs8XmH64CpF8phfctocpzcSoRPwDJ3ZTHvAzxB9TWZyGq3sjnbR2u",
  "key20": "m1WGBjioV2H5xtSmTSfbKoQvfDYBx4TBc8wNHPhmky96E7Rtq1mPvsmAuzK9qYqLqyo128fFuRx7PSXPLJUyoc4",
  "key21": "2kJ7KBrokbcNbr8vewGNzoV9za21EnaxGDTWEBePYwWtN3kyMXzFno6biAGpt4drzN1K5MC4YtEX5X7qHHu24frA",
  "key22": "ojpTCjBqeYhRGEPNUTgSR7aJhemxfoLtHMsjAogi1u7eR6AB4Hy1EWSiFKJvdDGW8MEng9s1yqQjHjTvJhuwE6U",
  "key23": "5q7Uj1dZmeYoPG3khUnSp4HS96TKwTz9ar7XVNwUYQ3esvTsAKHBk4phgYrxD2jNWudp5zDskh46cRV5mCa8mpuq",
  "key24": "3C4q8DqFNbGLJvViWquFTVu9aLre5uuqbeb7QqxvJYnJicngJYPTGEV2RFUEyS4g9ZJ2Gaci3VWkoQ5WXZvw9NRb",
  "key25": "4m3pJto3vWhDppAyYfTX5Kss1bBQs5wx1x1SRbP7Q9ugVb46Boz4qdBDJjPvHTrj8z4pK8YyzLSrG8AQBcq3yjyg",
  "key26": "2Zfft3eETjQuaTSa5PF7DdNTWjvYtZNmgwpTFiE2QNQ6rqookAjhymNan6pPP5caBphiRZzhJ18XihcCA6BoKk36",
  "key27": "4EmZBvU5Uv7u9Aj9jHmYoSarST7jouHaaGCFzJPmx5PgTYjPYTsWoB9BSfX4NZMgg9sE17cMgS6xRakwiGProXz",
  "key28": "3J9id485heDKAYsUyT1Y2nZPVbzQgBWjKrJyTXDSsL2H7oRsd4XF288NCTwwBj7QxSR91khM62JyKRBkxu42y3xp",
  "key29": "4nzYf57q3FFAVGprgjLs1djFar7s8xs1XhkF6vRHhuR7gNa32PpaWmzHC5BAXiV8CAHLEuXQjpeTDMax6kUZR2zV",
  "key30": "3mLZZhcpkNUdAzFviscVnJdEnXKvQvnPkit2cv7cfynAfjhK3qsmruEe7iNLCxd8CudsVm74xudJoochu5n6TYtM",
  "key31": "5N4QD2h6KxkyCVfHbJef2b3NUpTuCWGsuCw2EMzJcHNZJ7YCXcYdVdxU1oicedKHQc2QKu42KcBoa2xZKevUNAVN",
  "key32": "3TfYMAqL2deMKWvuRpVYuBqkWwdcfgTZBZ21PRVi3ewoEDEnEuTWzBUaPGhoCm5e1Z8qqjYpk5KDXwnR7DGSm2bs",
  "key33": "25MJqZQQy4HHznBh41EKno6KKNZexqNbfyuMsJBKQM1T2McGdvQseo12nugcjZzNL2ydUYW59T3HHPziX2bJEytG",
  "key34": "2nXQXEwdcSKR8EZMUmaGoxJhEqSWLpnvgepbtFWg7VH2TUwkz59cn5hBgwRsAzBddCCZDp44Qon2LFfE3SBJTRPf",
  "key35": "xmdf2bSeGGBoz9LJC67kFhJWXUxJeSPrYg1edcsyqarFe5Dj1VrkmDnYBE42mrRpW4CLZSHXgEA8Bj9WqENQY1p",
  "key36": "rFRVFiykXZadiVBCXkAth3sAnRWQjrAEtkLJyv47VLf2EbFHjXXuToMhLRVy1RCWaAnHEQaMwGgHq5SxfAiqfmU",
  "key37": "5Xn699eDXfyxa7B2CcjoALs1oLdLeHgfq1EGBeykZ7r2UoJe2x45M3JMCJ4Ys8Jd92kBWc5wwMf9R89psM1WBQbG",
  "key38": "5VXCvR4djMyRDMCfxTriduTBryusKQPQt5G4xvzMYyTxKoG4EE819kGxaD8sCK9og58sDWrRoYb1xt1eoYR7WMWG",
  "key39": "4QGZAygUTqgYmwcxjY5GZukfTpevVXuTRygBKx2wRxxfAeTVB2YHNKetA331SJmkfYSYPEpHAchbwjEW83sH9Bti",
  "key40": "4zEJtirBzvGG8Uzb1AxPntbW9sUX6wXkzCaEC1vuG8GDVExK95aAX9Kt1L73jEpPtPCP2KqWx5FRpGXVe55A6KDm"
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
