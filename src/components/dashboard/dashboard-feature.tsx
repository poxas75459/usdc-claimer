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
    "5DmorG58Zsy5WNdsbzkkcFCC7YGYTAabCe2nDT4j9TzRLnjmFy2duFH5xehnbGhBVvimk71aDTcpLmifnig9eczE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtAWyvdxp9HfE9RTzn5ZTuGzQ1PvdmF7KU9oR5shFjDVSWWiqjTzDidkBMKhmhFQt7a1fJvXhbtwj1dpLDBkYyY",
  "key1": "3UBwyZcAk1WpgiGk8vapwFzaX2eiEvE5d7rFze6sAMmrM4q8LVStNsQ56mcv9Dt3dwCi4tZu1z22BunGJEdWVp2c",
  "key2": "pk8rXAVLwE2CPWvUKUGGtvezgn7T4ggYJwDe8HDHnKfGT1qd7CsfAuDQ3YpmF5tkDYCDYxXJ2qD2a8fyeQPwk6V",
  "key3": "35MoKUyd4ZDBWhLCi81tbss4pC2aB3x9KfVxigz8YMyFaX5AmzSqM2HQEhzZKFL72eDDZEoeiyKPjRCSBdVYn8QZ",
  "key4": "46JNZ958FC8oznZqP6y1TKeMaYi1tzsPQctLHAuAnuQmsQQoY1tF4pADUy4nALJb7kNKrUdeG98M9EL9LeAoWAzV",
  "key5": "5TKM3cajTgx6RdxpGqCguMMGA1ZVdBgH7vFfQkEywNoKzUR6rTcFaNtcZRE9o3cJDDNwaoCCBFWguuDhn8D9VAEX",
  "key6": "3ZaC798xFDB5DEaN77rJpV3udmHk4GyfyX2dHv66yL6P6jpuksYvfYoH1eG6SJgKq9Veg64nxqMJ4q4BSCepa88N",
  "key7": "4UrrdUc7qDdGUmkGBbWcvPzKTyQ9GngzPWHNU6pw8sW6LdEq1xJeBE3PPKDJPRu112qB3LwnT2w5tNLBZdvbnzua",
  "key8": "Pa7xKje2qevXbGmB5R3Vit5PqBkuWCJuDQPJy9H5ZYXUuN2qBoEz9p7G7jxBgMZzMNVKcKtFzsyM5RpMWnKQ5xi",
  "key9": "4wzHH5dMabzicHYzgLaDRDyzQKP2ERVEPsEY3Za4a4XZsCcTz47tKZV77QTBEHkqRxErYgBMsEr6Rtgmt8smn8Mg",
  "key10": "5qu7PGXhTHWTVPwZqcKC3RD4TYzcEEpbyGsiA8tRiFkHwT93hQawrBTBwLS9X55PbJ5rUYHcgNzqn6MDWyz8TV6B",
  "key11": "5UmasWxHmXtzgX7CGiUeNmZ6NgaYBxo9TNGMrNQ9chkU7NbYKR1X4GJbDtyMmXccLXdoDdPbcbs68mLX1JnBz1Do",
  "key12": "5Y58Q3zrtem8wWYSeg4rTpN7GZr8ioUnaVjXaHUZHwDhDoYWyQyrESsR3VJCR4bj9pu33ZqwUinpx9xrGBeqxDKG",
  "key13": "3BLAkodNBugPJuQLdztVLdWYPCGBkPQLGtYq88h1nxSEeZszCxxzHniSCYiruV193WBuMnNPHmUBd69P5DctgRZK",
  "key14": "2jwSewZz7xP2DsNLf14yr9mEbbYVGc8GphtqNyeThAhURwVtcmqNpFLWhdQBAFwL6tfzhC5RsMit14Yhk48qTT1j",
  "key15": "YfGbs9GQezLtbEUdAS8gyTCLsCZc3gqmtwnW1zzqw3Bd2e1rBd1c7cdTThrgwW5fpmevCvM2pV48amUDZgrCqmc",
  "key16": "3qddnQwzJKydheqEaYYnWTAYF3SAMKf8HpZc7Rg1eSPXG36ZPYFcyXD7PC7aobpmZPARCwzAVUDrehNbwprYcy91",
  "key17": "2quBi8yQrA9a4t4vA7ATS9DBKXaWxfKM2XD56ykgtFofPJJknSbitqYqszbPicrnQyHxG73V7waLniXGpTqH2GHp",
  "key18": "1EHPTddhKn1vg5A9TQB9B7bpaAc3ZPo5AeE22UEL8W55JeZaexSYmF6cah6qY8LvBVjpUEiJv1Y25fMpaPLvDiD",
  "key19": "5nSeQcdcpEir6owoCPpjgRMLaybBMHPungemYHfUbbHhE8SwMT1sSXrnQMeMwtgy2A6PcSBWKAyNwxEr1v1rQYgS",
  "key20": "ULC65giPyVYidFNfaiQ1QEUXMan5NeYdycnBuGg1B2b18uaaAyW6ghHrnD6Uy87cmjKR9JnqEDcTcZxaFrGPjLd",
  "key21": "5pBfhcNYzTUdk7go2oxgahgwLj2tRNXBbUWWHwVivWia9szk4Cm5dgcQUYAJbskAYjeHKVg3VmaDm5o9imyrj9Mz",
  "key22": "2YumEfKpHLegrP4j74hTQtZJxPtCnYmtWzPSSiHgvvMzczDssJ1B39V8HYW7HrD1m1NF7mhiJU84ay77oUwdBWKu",
  "key23": "4jziHBF2iYEP3A8v581ju96pFb8CdXTE45XzgbPkThg7zMEjQxsQriPaPKLeb97ikiWCMv35HwEVgBFmvo2QWny7",
  "key24": "2Y22r9qdVnvYnC6wAKhJE1Z1MpUrH5Rxf2KZKuVqGNZ23qi925Z4tBp8sZBD4tTZyrqCBzMBLSbnNoys1YrtfMRC",
  "key25": "3tJztf6pGs5YP3Gfpjz93seSxJAVNpVSUK7cLUHhEZiuvH87Z9rbh9HGkWNVpfhDqNEegrfMMxsxmfX8HkjS6tj2",
  "key26": "3vYcAUJJAV5EStfw92hwSR1W2HdQKzckCdD34MJMnwU9PVEapv6xSKu8bY4X1yrDPHUiWETM5JtprYok9so8bZ61",
  "key27": "3deXKSUe8WEFvVdNitJexEcQWVJ4SADhUYEgsRrv9698yN6pk6gWWnnPuQJr8vRja8b2YBBLu2gpcUpfSbhVwKKa",
  "key28": "5TLWMXPbEVX2hGdNwptNngkmL41yECRh47mVRRXu1sYHzwrSGWUH1PaQwnzzzAYmEeDsBWuPTD8GE9J5F1FDkArT",
  "key29": "581nwQpytNZS4V4NkhZF2eSfzSWUesr4SMGcYHezPzoJPDNJ9nJhFniaJEHAJjg6Q9ibTDstsUzqqFy8mMZqBEs9",
  "key30": "2fbN5ePqFMtEYCjCJUWKimaNeAX6MxzmAo5NZE1885AdmN4pes41ZN6KWVHin71LVSBJRtS4t1ybMpdm5cVZnKvr"
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
