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
    "4JUkAG2uoMFna6Ab7gJZWsrLTTxSMuG1Zc9LCwLUQMoygwNFsQBQLVBAEPrZm3oxtFZr31Pi7gSjyEKo5jhbwDTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39QBRbVdbUL9DzjcWKRnuWT5CX41Kd9SvCT5S2XxLM1LbAGq73eKNEXHxDZ4mSNRTziuhwEtii9y8tPVRTEX9ZdW",
  "key1": "dnoNATEV3wT3VYro9djUf4vKg3ZfNg6ZfKZmHGnU91xipb29fZ9feqRLUN1n8eXCJsvpsLAUUcvyvNMMGWkufFV",
  "key2": "3kgQRUzbftEEffUFpvGLV7PqTXXirdABSxZK8Ufqsf3dVCFT3W7ni52nUEDutmuwUJDaa8x1tzRrwBJYfGbvU7m7",
  "key3": "3HTVN9FM3pnioYaqBS7Q2yyaBSYomnDBnYkMEaWq5gRMyKqn5AEVCxe1tetMNpv7XLFDrUPoicPU2BoTrcY9XVkr",
  "key4": "Z8FkqMFZ9WMQjACrH9T8tcWkDBpSb5kvc1s61ojknNn3fmZ7ns234f71DNMovVZK4SeQBrutFKXzczBzxXxQag8",
  "key5": "4khR32NTr9HY9HgRa1z5hSHswPYjxWvKTKdzBEYWW3mxsTrSFgz46Mt2npFEnCyFcY62VuUhKvZpwWMbYw64R1Wv",
  "key6": "3t3AN6xCZsyydTrYkx4fiz5NzKTQXhwrW4VoZ8vyTYBbQLwrYdmbKsnUzu3v9am4d2rEeXqbJTWw5seSd1NcWu7z",
  "key7": "3xtHnKT8gFrrvQo9jjA19m14NZNUvFagwwpxMtEX69wpBV4GMt8ip6fdTgK8ZWGtxtDHVvLjy1DpBp3Z8Xq8NUyH",
  "key8": "2eAUYduDamsYL35tTrytG2i9c5uYWXRYyeqbx1QHAoi9kvy6wgvy6XKv5PuD4Bv8Y41WYCyWwJoq2rYNa9VK44Vo",
  "key9": "5t4AFQj3pBT1wRyTQwqRNXTcZhM4vskPa1NPSxQ9QQSdP6cyHup9HAJA5fxS7oLvBD7naaRJiqHAoTay3GhV1U26",
  "key10": "JvxJK6FPy7oSMKPNJPbdcjzjjDprYXPVwF1vFcUTocymgKBaA4MMakpoUSUaB9E8xNPBBB2eKuYY7LZq6LBUBZs",
  "key11": "41GhL1PRr87qMYSiLtqZjZM41eDiSyhmQK7SmnppdjLMQL35Swm1SaYmDTFTJgNgSLXmgURnzNYUt3oh24tJb7jC",
  "key12": "3FA2TF2VxcV5T4dMoHUV71yVawiHDHkK7Rq6yjDXAR4mzNMbdb1pQHhBh6eLNyw5hypC7RVM4zRTiYS7tbcK3yqh",
  "key13": "5yBqAgZaLbAMg46CdUJcz5S9emL23QhQdAxhmNJurpQEnkVX5AvVZaPDbaXxG3Fj76egJFxpjShe5iRz5xKUHzWn",
  "key14": "5zskdzvHuW3dLcJgMC2PEpi3S6UAHYdZnuwxpeqgjFazDpeKJG8up3so36gCJpShvUtWPBK9A4srwrHaCNZomrih",
  "key15": "48fobcuBMcCxGmRUKhk39qTQeBZ4sWuzEhjTQfQCPKzC8ioXFU12XhtSfsCjVWuoucxezNhLLk2pmtgbHXPDnz1C",
  "key16": "2oauT8KRSxMhozpziRtYjPrqYorMadXCFMCaisHbAvEtWKZtR72FaARcDdikF7GEAbNtTmfmwgWW4wgVJkkP2A1L",
  "key17": "3a3aVBnCwSbpzcaFR9KbWAs6dNW9f9jMEpjzbwU22zDbu9RKiftdzPTD1eHiZNxCahMqic9qzjADrYpZH82VJ2eo",
  "key18": "3hK8t45d7oGzDbZxZ8uakXa6yAz6LXqM6Z1KcBTB3ppNdGeLhwys7UvczK2Jgis1NpzyujW5k1BVcUucmYy2xx8x",
  "key19": "2f4GRehb43wW6ps5UuCgNGEBAUxDgaRgXbfcs4vqxWhhsjSmFXstLyxXjqCAKnFDXCFd8CLDyEUBdDxt64hJVh2b",
  "key20": "5VmeFijQusnUhB7zY1WKhkfnPhNyVA7oLSZQr7KHFKPjMrEiTqDjnPaMbyecgh9KdhzRk5894dYCYiFN2MzJnBfB",
  "key21": "4mgBwdQWFrkvaapLvnwEjTX7aLWkrHMu8utyiBywR2nZWSmsZv8hmMAtrXhwx1Uy9j9atzqHYE1tLF4yDYcxBFwq",
  "key22": "3MRehRZv1mKuuoknh3EnabWFsX7RQ1bxmyxPG8C3bZUmSYwV7wuF9RbPfkJc62xthwSNSoks8vb8mbMd92rnWGFx",
  "key23": "3Y5RmnwBy1kH5H21zTmY71BmkPT8xcwh4tW5zkHy9byrodkfdT8y7xLMxoXsaxbQUBZ4yNhHkaMTUpsmkt16KQnG",
  "key24": "GY6oHNMHdEFBLsRAnhk4RLzD6s8Q6pjwyfwMJvf9dX3FSLxGQbFjLvsNNCBaSv39tGN65jv4bKtNc5s8VGNCm1s",
  "key25": "2PEZn1RNHobNso15UKrFy7vn2zZvS1qSm3N3BVKPuRm2yN5UQL2rhcdBdy5tfWtLzgXAwH9UzYqMdwDrXh21pTp9",
  "key26": "4ueRRYiRiiQ8bey2HpK3Ziype1oVPX5CgYZQzD77aon4cMS64HQJDQgbRCPup8duc1F6JzeoxxfEphoJwvcyPuws",
  "key27": "2xkYWbHY3x1D9L9KEPuDohQdwrJ7knvJeVLw667YJTvqKe61JunpzA7KVestwE3QrnjNyMApmZ2dPrywUH9bffWD",
  "key28": "5X1cxZckvoh3WgapSFHHXc59v1SmyNZfH1WJxdBMxaCG5Ptxjz9AdsM6ctbknDo3QKenv85675P5z93x4cjizr19",
  "key29": "4AhSYuzdrWmfM68GRE3tZ2c6vnAUTrAHdQ1PRPbgSPNQJP211a24hUHQYMBKgXWZM412gyJ44bZ8xeahpfJAvEvU",
  "key30": "47wvCH84qqEDzzJWk3Rv4dzpZmd9obeofz7HLY4fWpkaHJjPx1X4KRHtBFwsMNkNNqxsS2tPEnhVXc2AeRdw8aFc",
  "key31": "2KWaesdS2fqSiCt3mCpVwaDynR7M8DRS5imvJyibL1iKt5irT1zqnB8788Tq8RMmNde7dB4VksuWKi8aUBBC59SC"
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
