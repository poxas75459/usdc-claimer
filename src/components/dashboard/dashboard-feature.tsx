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
    "SpzbnH6pBZdTSQBnGAzpcyppvdbzbnHXA9h8S3GcsnnCwaRdQ3ABgmETvSMoRTQgmuTrcKKpzHcqJp6zq2LzRVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zrw4s1ThwJRZmuo2SbSGYWVo9MaspweKqUojWQWDDsRHBSYmPaUuoheus71UQPFCr2q2yjtwuEe7Zc6ZT4ehKR4",
  "key1": "4n536KgqHJvCfxDqsuwCdqu1E3V7BqK4vsupSTmHs17MTXfYFPinYUYydNUHoWj2536bk4aBi61pLHH1jbXXeiDB",
  "key2": "4UDpPdC8Hi4i6Q1LeGe7QKxcaqcN5U44JhVDyhGgiYYFQT31DnbaXxwk8kLzwcEpmCnqy6WwsPhs5RAJw9Luoexo",
  "key3": "4xLznTtuogZeDiW5ATCaZvC22d1PrvxFZJd43C78w3Bb4KmJH5BHqoY7K7mP1mNGVkhQTdNSgWWoHsHXg4MkJWgZ",
  "key4": "5DYvmhFpz37WvQjT3dAbKpmu5uBQm8pvHsnyVd3DFt6xB9SCWj5JwirVJWLoUHjV5FuEQmpUvHHGrdCL6CQZUHZs",
  "key5": "5Wz1gNASFPM8QQkwR8tWA5vvSCNVrhsoSpJNCyCXuQffDTtriuxAcmdCxQbawG3PEnsSoT1Ctu99S39iGW1neN7g",
  "key6": "WgZjqY4wAM6NKt7pGiEaWXzS7G2Z7azMQRunpwJcuMu1iHPum1tCvUtQMwn1qTYZU8t88hxTv3rSqa7jLKFF3S8",
  "key7": "5eqMAphUDomyKXYbPY4VLr1sCwNvc4jk8mN4AovAYzNPRKHNjEFAxAzJNHNnx1eRumf6dxz9moVs4tmfTJZifwi6",
  "key8": "t3shxNsUE1AYAP6co27Jmrt6PWtVTnd2rfy1QS7Bj65AXGCWqC45sw8oyWqa14DtJo5ysZP7afNU1rWpdDK6Srj",
  "key9": "5rvXL8e2d49UsTRpsbkkFgq7sZ1RseSfitzPfUsttXrBU4gCdTrB8KwogJ6ZpXGi7MgduJEbFspW3Psk8NC3EbjZ",
  "key10": "4UQvWKx5QnTRqbh1UZKTeiLChNLKjNiz54QcQX2pEYwyTKXgsrdvrgEY26VZDsykHzx5ScsMRSZH2FNyD9TCpW4p",
  "key11": "4Lq4Xf68sX8dV6o6RWJ1pMUjnQBw1xUxkgC2tyHagWC4pT4e1GZVYW4KLyLQ1jxYP98WNb7qfz4YZZPYQTWLdU3X",
  "key12": "xsHaim7R1coejWKrPSErQnxp5dYtY3dM4t16YU7iMRLTETwBD6i9UbBjHFwBrymu72EMBKwCmR8F3emYaWyaiiw",
  "key13": "3rCQBXRWbFwX2BPHyD2knj7ByG3MdkFbE5QpuxEUzEufES7XCwnnhqJMothprpr3h6K5sU2RqA16cCqq8fjxE7Ny",
  "key14": "65Np7wne7w2CrgUxYmmcdnzWWgjy2kB9XmEL8519Gn5DKziYXeSmbEnZv2EFATVbkdnEkmxD9KPMdAoLYS9e7Qrh",
  "key15": "PPrAoPrY4BpnjNnucXT1mswbxrN2aanNVtRxz9pFmgYjb6PzEA3RDnag2Zim1ncpXUZGKbQNmFMX51D17REXLDZ",
  "key16": "2QGRnAbGXFj3m8cZUBTSZNiQm8v1wYyEVUsGn6sd4A4oTJ47AA7HmGPiPBvBWEjMoGiVC7to9DTK1b5o6jqPCGwB",
  "key17": "3NW3S3KeJ2HairfzEcufHAw77e7tDW6hZQPyGipmYBSKdCvRqMoSHzRtWmQB5LzszUhxSA6Jq8fLqiJNYd5D9HP3",
  "key18": "3sdjnS5teH6LSgjp4bnMRskN58QFD9rM5Yj69Bkyn7D4YhHdPWaTNYX5bXhUSBbhSPPMnAwQRm8QxJsNNaqVFi1d",
  "key19": "5eUkekQwxwVjrmcXPqZvPsHEcUGsbytZ2eKjWn7dbVg6GUFWSbBunV1Lt5JMwjwDMxX6NL1ki7W2yLmrUP5WVHkX",
  "key20": "LjZeBPeYyvQTreyNpRbHyT85EKbwC83HGBTPGU93f5H9VAfntWxoUFVgZhM4ceuaxTVtG8fovyoKT2U92Lh9HdN",
  "key21": "28MTjVgwSuiAEMRR5saUTjxMbKrGekEpLS2unAJ9641wzGBvTyACoapkcoY1S1b4jQiKjdZ7rbsPztnm4u7Kw7Pe",
  "key22": "3UngrrjGLY7z1HD9dbdZC7ow69W8WhnB2omJwo3FoE7LoKze5M5kQRuJXozNpsRnUp3ykQNqqsk6rvy7HxwfgDao",
  "key23": "9VW5ZvbWGCtvjGTfb9MW42KDfVZ2YqEUgFJ9erSFSYcLVzcaNTwWQYg4RSRBF5CQ2FpksXqg5hnPrHiCP5i5CPP",
  "key24": "49vxmZN7rafiPKhongcXtJrEoGB1AYriCQMU6oBBnuwZFyW4cQtgeoBxVoUxmnAgcvpBKfGWSGpWYqHWFF3Ju43Y",
  "key25": "51Y9dCTodZT9WShbEWAxtdpZDr7rEMMvY5Jmi2L27TNtAKVVePGfDsEibnmXPqy5Cy3jAN7EEA4PHivLM1AGoyn2",
  "key26": "57eNTNdeGyRRSWtrcHHCxifEhCDCd9kACBa2ambDeN4sVcHAcWVXc85ujfEG3LpvwD7ds9PgKSKd7U2X7YDyJAMt",
  "key27": "5NeWMteKSXt8p9zJ6M5KXrtjZtjuhw3YhLD2pszAZK29Mf4FC2SEqcjeYJq3yFTctQ4qmb5CFnv11v3gHnfJxMfB",
  "key28": "2mpga3gy93RwQFHcXysARTzDSGyvdiCNbEkdjXcJsNhbRiv2wPrYgDx6CUcEvRuYxvGQgv3ZvpJ6zNwforEGGguz",
  "key29": "3owh2Z7dueknznsov1yQJJGMECmEzA499kKVp8p1XLzwiCNV2FRYbXqDYNa7pHb1nJUuqUgu1YHLn6ZfPAoHHYxB",
  "key30": "3caiZcuGQv7QfeVtfKLX5MicyoygznLHcSJN6poruF4hRw83baNoj2a1Hcf4Kr8tvdifNDiCE8UuvTXDnEWHALF3",
  "key31": "2N2tjHBN4eAdiM8j5CR9tnvAw2MxAkkD3RweHfHG5gu62v14vuRNVCyV6q3SkvP8TC364SWf3Hn2unfH4tEkrJvE",
  "key32": "5cebLbWUNqYcJezmR3JpYmvrzYEo5ZNywmoSxBiu7Z9wySDxfzx5RDpBcXezkG1ZBrTLa5aTAkPJPGDUB2E8fpwi",
  "key33": "2HTxnWCAe2R8ksnybjfifRziqyRDomT3GwERiecHrES4x5RLnFqBX3DyrTAhWYMUnQogLhWxcHR8rJBe7rafmjh2",
  "key34": "2k358coXNR5gr75KrUi9v55QC996JPW5o8dVS2tU1yt53jTrPbBccfKHmvi9H2R3wK322aJbUAw8AuEGBSFgrzGJ",
  "key35": "3f1TEveY4VZvQs6MoQAkEsAuBfGSZnJPupNqexQK9URNN2YT27J98wxy2hu2w8FCC5RzVWpopsDbpgjiwCEGYxd3",
  "key36": "2aPHH8QVRMZ9F669xPEz5s7ziT9isyyWya9TnbKfTC8M5RUnwtUyHry6TBVRcR7rworjRt9dXs3nzBDYeUMDn9Gi",
  "key37": "2BPi3UeKbyBe8pbkx7iHNbPDYgbJZfBFqUcr5bWxs1DezLh8khrzAgAVajJtPSAUJFsCcZbMSsMhUr7iQrFsU2T1",
  "key38": "5JKeT1xR35HKTHyE9QKCeqNEDpxKdbrKTYt9F2zzH4dbD2HMyMZbc3xrVzH1FJKLRB99gYRwawzewmWoxujrvBZ9",
  "key39": "Hs8RqnoZBevog8kr3vqu7C7dEx9RrQzgCn1jJY3j2RaUJNyujz2uXwEKaU5BuHsutD69y2hdYbXtuBY9Lva6oHN",
  "key40": "3HAvEQLezvHgHmgTAFANBPy1DLyy6zK479pkJTz6BodgbTKQx8Vt36jvJQrHXVeQCwcqohAE5kZSZqVKEsDZzBAz",
  "key41": "3N2GARq27vBwkgPw1ZfzTM55Uj611Y5B8DkPQgUwjLsrgPGcFJD21JY1C8n8dzpcYEb3vigK3qQLDtky3dGLuUmZ",
  "key42": "4SBb4Fh3vW1SbTLua4STVvqEnfWAHbmrZ1z5CEr1sQubgcnVKT4bsrrrZefnR6DvuT969fEosgYoSBcWfe1mJ77P",
  "key43": "2a74jzowisGA5HoCqkDwfPg9ZnQU4nyggfRd5ki5woMcVgCKeJtsy2Vg7UsPS9hqJnEEjiLdjoT4E1mSnVypKRzp"
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
