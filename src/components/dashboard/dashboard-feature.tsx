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
    "5rYEZ56zXwvSAUqB89h7GqNQzViMK8EkDZjSm7tUzLzmaZkmLL8NSmvEUmVuufbpPG4pSjwrQUppM9CARoysyCct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nUPejEsHJuwURvcLcKdudwRjoorUTdb6ZADughZPKrS2v9Yzoy9nvJn8HRfa3uEvVkpBTUHybwzQ8s8QtXm8QeH",
  "key1": "5bYMuM9WRuZQH8kfGFfUBE9yuqdktSa2SdVuitzunCyEALGNki5LUkkGKMBoijFbp9gHzmGDyaoBMN2Ydcrpazry",
  "key2": "aUP2v7KjF8FDwwxQrmMavzxTpXg2xc4WB541qdXTUJhUMPdgtLUpkpataU8GnqViX6Ae1qefXKjMswh6HNwtxf3",
  "key3": "5X5Lk8FSHEejsQjXoauV8D7eQq8LWnevTWWyKB9VZTTwBVW5hhWgz8xz8Px7UhawwPaHt8CzKUbZaYLWyruL1Qkf",
  "key4": "4SzFKMaPsMf2iPhqJcqqzzmYQ364r2JrLBXPKRxxw8az2wMcCGpsZENvUNVPQwzsSdrVXpoyiT997tLd9pmDTKV7",
  "key5": "YzGPiptxpR491aPrEVsuhY3Pzryd2e2AhPPnviXeHMMj9eK7KnifRQUbZ1cg6Bsgs5ubS5u6nDGVjphknKiTRaV",
  "key6": "49Q7yCM8sBgczyw9fAfxpgdVX8CnWgeMGeW6cyUe1sDSTDfkezyAcRgMQYDV4XrFmFUYUAXbRpfrRVYRTKgtP9B6",
  "key7": "4WZXcs2L66Q4eESmqDuYMUqwgMXmBQyheMRBEUSKE4yvidgeHD9Tp9GUhxLDW2197nrztqyth5MgwecFV92bDWvV",
  "key8": "RwrXSrUGaJSmdWARN6s8TLv78mKYSghW5zgk7pwjeZX6fZ62UFdxLjPyM4u2mwb9433Wq4ULNzFQMT3bXh3ZiRt",
  "key9": "3sKPYcU5st5WaLh62qunHbqUTjnpzKVEcapiRRff6FQPrzQVJNVePjVaumkZ9YiL6R2cMXDJptvqsyQPKGWDZjqa",
  "key10": "wJqUaniGQp89Rai983fpQBuBbMDUifewFGZKK4ywZtK3MnsdLpxKToLMCAMvTGaf6amPEZHoTFRVD69bYWcrrcd",
  "key11": "5EYJvs2XDE8kfTJoUQkKjGNqEMLSCJm988hZwc8xxvGBG3vNtLnBBEWLDBt48kqbRLBNvLKtaQ6eU6YPzXUCdGhj",
  "key12": "2aHv2cgGxTzYpus8kx1LXPwXbirzQ7CyCnJ1kP66fD4jdfiWbcuTRdqimpmUjGxpwXnkq2SjBjqz9H5jyTNpkjfk",
  "key13": "2a8HooXdZKUCois28baomEs4q4ovr8D9eLqy78syb8ikT9uDmxqAmmk4mj4djk8ggZqo3mJ6XTXrqAvkMYYKng9M",
  "key14": "9hvus93UpzUW4VB97wUBe4qqAqgxMBndy9UXMiXnkKCQcAiX8WFV7twaf47oGKgiFTUdSbFDAT4yUSHwdnjhEwF",
  "key15": "MpGh9jqP1xtMchFbcgaf55jJ1VPqetsN4nyfg7Xsyd88p3XqFJYGJwsKhGLh4ejQ7n3e77ucXbpPs5PuGPM62Fn",
  "key16": "3nrQYTaJdpukoWALH26RCmZqtC12LDnD3Y9D4AoyewkR4KrS5ZrzadCTr8SjjQ7UMNMJNH8wXgxjTWEC2efZ4VTJ",
  "key17": "2UkLFJkv9m3m6ZzazjKCAQRZdhxKsY6Q9YHKnKvdBEMxk5sEVUhTX7Q2BV9HZN4gs9ZN4skisP7DoKgh5kQX1t5u",
  "key18": "2UZff8WrQMHyJXdkoVDx6k94hcEQj2v6KuwqViC3SFsYUdWjhDXQMJgKJU2DY57vrzJTiASo9jSbaYX7p5Jm9kaA",
  "key19": "TQp3mj9BaHFNP3dxp9PyJeWVFEA8nnNQUrnmF9Ps5rSPHCdKvux5S7cq3wxMGJKKhp5qncsTqQxCR7sDzUksFoJ",
  "key20": "266i6rETPQKHCKBcNx9852dW7Jrejhf52a1uxohUKEmy1zYaQ6TTvo8p6AxCC8AnrqsMPnMhnAuDKLiXQbfmqtaD",
  "key21": "3Ahgds65CdPgsPKiWvpQMJfzQNk3fVvWzXSrZdcHmnpmWQn88UmwhsSJWB7iNCEJ8z26aRYW1N4PhVdZu5pfqueW",
  "key22": "5AkpmNsGEMzHzC8Q4fLUhVLZVnsvdaxp1UkMr7KHfdM3vrKrEgqGvX5MLH57MS7XwUHUcjXBf2wsB3jo2tKbKFQr",
  "key23": "2GD51REhbknWQVHe1xcs6fRZi89kxou27dro8Jau8bYuUJhZnTuTKALjt5yuXPxBSWACocRiVXTzo3RNFnPVtPXj",
  "key24": "9rv8jDinra3MjmyR67suZ1G8VGMcgES6dnvMpggtLwAdhYkz3gzvTZ2yQuzueZcYBT33SYjyRzbu7pCP8G2DAmK",
  "key25": "5YkypATZTqwuk1cmUCezPPGGwivGj1wkYUDjVNo5WcUpVnK329igRP3bLsmvDS6B3Npd7mSBZo1RAKX8Z3Pi91BL",
  "key26": "4pY8egZ7ZTMKpbcHLPmMDxrAkNpS3ScyEWyEAhSSbhXDzcFzDbNL9mmAWSHXYYhtzudHbXk5QxdmFFRSUTkMUprS"
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
