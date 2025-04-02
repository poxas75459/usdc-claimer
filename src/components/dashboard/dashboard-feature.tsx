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
    "2WK11Y9jEtgwxKKiTjSW6PkEcRcQ5GxgrJHcmD7f9rMSWoXMiVmh5X2qoKbu86vx2R9nERkGppjWRHMKvrJa4njJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATt8sm4L8ewannToPk91rucqd3TWWsrRbcW3x6Qi7mZJLVFsQDUCigKao39cWGeiEvZecumEGa8baZUNfvT2bUF",
  "key1": "QMSxpbuGbE45PPuQGpmk7L1kYnobYzKtrvgV8NZPg34erUQvbbfRFpJXAcpJy9XRdvZi82vDbuuq3Fj9u1FqUR4",
  "key2": "5wQLWv6F5WRLPfgh4KDTLDuQhWztRdeLjQbEHyh21aFsfNXnJJQUTVkd1JvbkVU1kK33hvKfkpJvkb1ToneZszS4",
  "key3": "3eUSMhedM7Bo3HamgrwK5yriCvjNkHASq3aDihhTCTp7dJPKm9KhgXExrh5DLUpC5z3GJ2GzKy3cxwfC8ovivHQU",
  "key4": "f5dDXdibv6zmiRYpqwbHRFAWuH4ZV13LXn2b2ToXj2U8VGWSNJt4jjZ63fdQogD4sQ3wYAdqqthKzKoHBDJbuwN",
  "key5": "3nihwPE9N45KtCPhdMkCXaAHPy5BtHuwTdP9EgZy9EnKTpK4entwvBLQTwKfknS4uqMijqP3Je25U5EbgY8UXeqc",
  "key6": "28n8RQbh86vhLddGuTzP99G2GAJLsw6ediMiWP3Ebm1kGo5FCTPVDAqhCi5EL3APftGjNRgJLWUAmXvcARs8ERw7",
  "key7": "215qnd48kEsS7amvnXrvhwQ9GsdoMigbaUeFa7x7ZZCqxZ3v1y5SZB2VDABKKUGc9d3mSXUAYNh5ADJycEepWc1M",
  "key8": "9hmgbXVMQ3XfF8tcU28LejN8L7zprRLHaYLgqNp25GETJ9RK8dJ9jDuthvavKCdQBZSre4uAhkJ2WaXJHmJwGMG",
  "key9": "5rS3LXS2m1nJrFtD3NnGgCCYNAr31bG8srKL78cKuzCCfrgD6cgCkGaS2uLxBfQ2e2TvSJvnofnKJgmtFRYPh7VR",
  "key10": "5cm4T3QwJiTZtVV6vvoLfoNXeqGzY7wWMutJeGN1FGMG7MhJYhe6jqozf24aVdg6dKEFb1Xv75y6KimJZ2iVwJJ",
  "key11": "3kFCfPRWBWkSaEJs58CfJiTpb9EQYSepFesPfjy5kRqzGqCJpxPSFzgvXEW648rG6hJT4fpqbbxHZvws8JDKEhoc",
  "key12": "5Nhkuvoy6Ju7yRGS9Z4aSjWWQgDvbvCmVmNSiVaA18Nqh6VVhXComQZtwF3ocvzoBt1JEVJDmFqj8qrCqwR7jVtc",
  "key13": "4aCUYzBwdRzVKviWfLQPheRvYHszTzoVUpcrAj7C7zcU561k2ENSCbJMaSf7PobbRTibpS4m8nZhW16ydZMcBXwr",
  "key14": "3sjHr4SZzmrxoKLVjfKpzpgPeADaLTYYukHcBPvTcdfEm47tCtLyWGJ9MdgrDjNVpN27TFSQLxpmPWzrvCUfc6uR",
  "key15": "3GE5VvU2LB3rnAiz8XWcMX7qx3e32f3hA7h37AMJFtd17FnbQR4QjGem1acipLhWEX2fCkdTcBSAxLN58sdPCZG2",
  "key16": "5JhqpeWPvSijw5rYud4NAyFU5FoEuz4egSm5A34L7Byfzou5SXjdA6QjmGWR6bapXCA5ZKkwmg8dhHA4vBULsnq4",
  "key17": "5LZ6VK5XibiNoEUWoivK7Y6pYWRRzQPs2bUrSk4EtBq9eE4xUauKRnsSqDLaXpg6dFJqeUM5YCosbJ7pp8QxFMs2",
  "key18": "5z6oRNFaL9QiG9CeU3MUhUZoUcZuEnBNYtoi6SCD1jQbTJTeAb1PNmq14dtnhstyLfaAB5MA7HBhbmv4gbMyhjXE",
  "key19": "4A3hR5wBXSr1VGejXrJTcXAG4mUKVckAo3fmzuBuXmZz3pvwQuM6Qvcq3XmkkcHDtMq2uCXxmUbVtoTuJ346SqgG",
  "key20": "yixaK5qUchHfKDGyw9zX5WsmiCKZLLzCdZ7pgfgkQa9o3SvWB7Rw2YHtuiPbgEpf4wi5za7MQrdURZwtmkaP8xE",
  "key21": "5uDtiGifTH3RuZcjZydgbpP9ZEwQRh5TaGndDFcwi7L2ttHNZNXgfYXZPmGUog6vro2M4nZCfdodCGtxsw6Gtgpz",
  "key22": "NrSnokmn3RBhNEFu87mFZMdKhsv9w2JeFXYX8KHRZWbsdxyAZ34ATpVj2MAqndhJ8ZGcjtN471Bk5aR7U4gynW6",
  "key23": "31VPKWCRShSHxTjVsMta4y11PQ9vJNGLsXAHPTS2yPSfMdNdo5NXthRoSZCq4kwcqhFedCe9Tu4b2eVffXocoXq1",
  "key24": "2CBgXJdSSnMFFQGgCFM5efLzLgMVcfrY6mrDHbQK2VVFBQfJH5efiAHzZoj39GswnKHiWF6x4YifXseXFNU13bjY",
  "key25": "5XSMxmcW2BKriunVYQxaqDbtFV4zwX3muJTzksHFHuLg3q3mk8pi5GgWRb5sfko82sZgXQnceGVaPH5ijHK9CgTC",
  "key26": "35BUYB8PrtojAPUhfZGbmv3gPgx4HcfiJjhUYaXAA9xoqbWauWnksjbj4VS4uiCmBmaZQjWobvJPWXUKLdkFFiry",
  "key27": "3TkThu6QVmBCuQLFqreoRxDm6M89EfAmGW9dkSoQArTPpDN84WvsTUQTJU9FXqasgBca8kGu6Znq87ErCmdMSFDm",
  "key28": "2mWjZMT7XWGqgeMB345Tmcr9uNTK9FycjQjvbChsBJ8ttfMBA9V9z7ZodiZM9ix6MFwsbAEo5m9nfjy5R85WXiRh",
  "key29": "4hbrPuJdJhvRtjj3s7kJt8zAkSAj6TFRz8TmpvQuKxxHMFjSWFv4Rkyc7ndA6h8iKnkTNdSheWMyAhc7H3C4HbGz",
  "key30": "noyrRzbN42j9w5NAwXbVuxZvN7JSfAHpJLwGLXFRMwR4TDkmrSx9wewFXkvxrEFX69J5JMmD1651GsDypaksP5r",
  "key31": "3TxpYc1YvsnWnnb47r4puhWHNHFkCRoo3gtFw4JA3fpgSxBmFDRKsxZn4TH5EGT6LKuDYdBDGehv96UjdjK5DcwB",
  "key32": "3cLWh3nNDrLmgaM7WAR6zdccqfZYwZMTBUnyrLCaMNBdRkBQ4oKYQWhXqCUaQhrH1gLfS2FKX3Uci5BqPex85tCg",
  "key33": "2GBjYqvc2JQJdVbDD92zH15USJvYs9GocyErenEtSLRbgPNDpM83Dd1MvumW1wAdFQTSiomhXoEagN4xDb1czeTY",
  "key34": "5awTaHGyrmLhGnKePsdZXR6kKRNQxLYV16ESqUztYZrjFBMM96faWKbPZo1EaNgbpo1FXHx31vgw86GD6iUvKDJL",
  "key35": "5cghxytM4bgfMdJUfXGSdnMG5ZLDAi1y4SwDx3MpU1kZbj9DS6hosqtTjcP42UdSto1GZVnBYafmtuEeAxw2UiGH",
  "key36": "34TsRXh8bcMwKCeEqmYT6Km1sLRMNXtFYusKZhbyMXiGBYcTfV3RnTnC1hdSLM8imY4iKN2eCVdHwHyGJGMNyXxG",
  "key37": "3HfkMB6PgT47YBMwKXtKdFjkRVFbffasqjGGj8itxwbTcqEUznLjrdFa2qsBhKuwXjMVd56unmTC1itpjcV9RCad",
  "key38": "5jy981ZnUVHZAFgdif2iqNfHwfHBFt9q9pW8uk5TeNbzMFWSNGv5YAN2FYTCaJTQ5hjvLQov45aXsdrxuiU6Pc3X",
  "key39": "4iCayjscDy1z3EAarfbzRzBbPs4NYwobsa8rzBkwgzZojTQimBES1SJJwyW4wSKWUnw18eYaEdLVtKqBJpdfmqfH",
  "key40": "5opzqckGCSf2pRPD8GBiXC2joVdrcw2wDVjgQoRCRQ42aYgxG81ASeWiGT2GvbwrJyhG8NRuw9sghkDQxudoCpvK",
  "key41": "56WScBTHcfqzTCv9siEHiTro4KpwHhLL7etZbwgioTvbeuUZxeM8U6dvzJqujKtqu6kxjYDEjEWQHPgwHXJrpQoM",
  "key42": "4mVXLkfNV4gesUhMCCAdPmLD9ZBToocGyWQLQCddKYBpFAvPoN4DYGh1Tj5QXJ3j4foLLPrhzMMjauLXnrUE3eqR",
  "key43": "3XhMStQ7JoBKMDqeywavAmVaEuKakZX3VDWAYG6HEXQBU6Yfo2tisg8i5yzoXHvCVgLhvng3JJAZuGNG3Zkk7taZ",
  "key44": "y5JLQvBUU1DmnREqQVwe1qVHUwq5U3cCZmf6eN5CVnMdac1SxSLPH2or2D7cv7oZfTK2TsoRN64iKJHob1w9AXv",
  "key45": "w3bCG9wDks66Z37KCqrGqxEPUdtRWc23HgpbR2nt4aSt7CfuVjDeNeYHoWTAdsRy9atZJmVmYpjzu8qy5SzVZWc"
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
