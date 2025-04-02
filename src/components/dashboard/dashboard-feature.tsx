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
    "3613ke7iXP8D81X5TgW17166gQL2uWZJxF5nmYNwnF6oKK4GMoGpqEUCAxd38Jzg5yhooNrwLMCTpqJ3PXFKEGTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjDbYotqJtdzheG5bQLM3XZr8fo6RuQmko5QTES4eSgHRRaH3URoHhMzWHbQfyQfUpsE58pToyDYDFJkRFJtrdS",
  "key1": "3XDGPzCJ4BNCozRWDjVJM3HH6VSedQEEr2jHpGQwRXnGm2FqZzMan6LJ4nZ14upfKUWPUp5vrYxQDfXgDYrL4G1H",
  "key2": "2Y9WNaMWaGsGTCgQD16tvs8bsw4dWTgzdXuJJc16DyjzvSXut4a4ewgRhTB4g41sGtrsC31EGdF2234nZiMfpeQq",
  "key3": "4o1Z4tvSCLuNM6UKudH1hLZZSfj7UvWS3PuRye9rLGjWR1KdEpiFoLsrarpUFz8Bhkj9VR6DYUp9wdUY92Xbyjgk",
  "key4": "3XFeaYu1s942ea3nsnecbyCTgHHERtcemeKuAor78ejhVk75KGgCG6JxKcJtRy57meFTg23hQUxZHgBeD8uFaNwS",
  "key5": "AKCiyHJWnogqew2xWHGDJPUJhAMdA4CNXd1Roiq7ncMhy4ghtcuwBuu3U6m7416Ni6TagsE42jvdxWQAWahFvPo",
  "key6": "5NbBYq7sNKRqYpg5Ednp6RWzexZs259xkbmxhuknPb5JoufH9ogAARvK6yqbZnU77xYdYjJ2o173PseTpfRBSQWV",
  "key7": "4pStdkqeYoGCNE4qdTdRZnhiMSqHK3vaVgwaUCr2ckS46YnBAakitge99GEu9BHNr9yPKds92j3PXnr19SobdpfN",
  "key8": "23tG5QGV7wM4VPXEN4FL4PkecWhd3Q4MvCiwnnuhgf4f3BL5V1vbFbLsbShy1xMpydBVa7ZnAdKvHssAXRhRvVaN",
  "key9": "2hdupeHQ8ye6gPPxNFnM7W36BZvhokro9wtfusimNVgTEuTMWzqHKGt3Rd6F3TwG4wL7ZQfNeob7EToMDdk2AdkD",
  "key10": "466uWBHP173UCGQS6PJt2dpyV3ownQa62gf8igCoWHdr4AtjWgWzwZBScT6e3ceuAaG9XKWAuR1izsLJ7BF9tN1u",
  "key11": "4eymRBd1Xfdg4DsXGio5VGwohydMJidKUpkfqdfnSBv4U62PUZuy6BuUL4gj8c9ujVdh34fr69hQ3gERo52QPfue",
  "key12": "4KYbxHUwSsqnxUL4ByfDkafLtAxiNZ9g4yqyLMbbVeUkRQZG61aFruEY1NKkZnXiQER1C8vdetYMVBpqfS3a6DH9",
  "key13": "2usg2mJvwDfS21UDgzbh3pyvfd8i1GzPaVdmLdot1qcFy1wLAoeSpgsp7SoCTuh32h2ND95BtMb5VKUZ9D3gko7u",
  "key14": "QHwayXFyotTaDA1PtHup9Hr1DJTLzR3RDEimbgEM95menrjKSFezTKaPmmwtdUfKJdSby9MGC4N4HUs3VMEoYeP",
  "key15": "2NWhFStNPZQELnqLZcbzVkRyXHbDp4nYu2aX83bEJuhCZFbJRL2qtCtacCdT4UW4F8UAz416Mk4qUrzS3Pxnxfd4",
  "key16": "3v5BpGNgF9QgwMfSSc5Y9vxfxQN8TUWKsYVB7nktsKj9ajpUbM6QBLKaxbECerzv7Z6W1BP7gXWFZpZgtb7fq6rH",
  "key17": "43Acc5JaJucZjWB43ijTEwNVwvgbDw5KrH6Pvysa22eksgQXof9XNqtw8Srgo6wArB2BNNT52dQn336gVJkFDyMT",
  "key18": "2s81FQE292JMdRRm87K5aB2k2WdXSmEDKVvB5AeYPqfeJSvBCp8GbbY7KreLSK38qgt1edD57Hqgc94BDuHPWikJ",
  "key19": "4e61VAsCqr6LbA9rGDocv68NeZnF4ef5Caho47ce4Vt8NSVnuN6UdYHLrkf8qdCvqHV8DaGKRYfe4hXSThURdh9F",
  "key20": "45Lyk3ehBwfgoZkzM9qToJcgaZyBy48EVPScMMDStHAnLVj9PZuz1GyTmSVoiKAZdyGYL6SjcmLoYPPqcZhcNSw4",
  "key21": "5XG4EroreRREAiK4bTDBw35KoHy8MnPuCypnj9nesJAjdMr3tgv6czMtJ5KBfLDFxXFkQHNZojfeXdddWieVLsbu",
  "key22": "5ant8UrT8U5obZSn1fCZYDLkoEVM4P7228RPgxZCHJKkfz6aZsYVctkrFTzNBtpBDfuuJcuaopYuH919ANYyTZTQ",
  "key23": "HTBsNSvtU2pyMSnzoR8GZDcm4ZztMKmLHHS1oyCZmKPR7wXt47FBffaM13XP3766VM9UvGrMyxhNDwKHnETvyGK",
  "key24": "5w1UwFWvZtcnR42xMNb84iN4SH2CynYX4svS2fWCNmQbtZmZv2AFr2HnkYiyCf2D6zm9ysr72ffRxdNaHpUsXqLM",
  "key25": "38sTqzqkhYaw9ei76w4T4wkUTFaNDyPAJwjQecLQWYgMjAFNyXAPbHJo5C91ChL62QRxrEvUmCqUHmCYJevj3gNx",
  "key26": "2dzDPTgWZFXTvMyvB73JNTFf38gmoFdeHvuwQsttfEKCsepoYsLVPzQiCxyE9vYMpd15XnMeQZ3tBLTabbYxCEe1",
  "key27": "vtL5jihudeWvNqtdQ5474AAGUWbrLQ4PR4ETTUnLwP1bRkmzAVyxp8RhBcBPdPXpBcjTGgNVPpqXsn5iEPuJ59N",
  "key28": "2rhSX5Y38cj337VX5L4hW7YtyHqecbrdypGaYh82CtkFXohpsqqj1cz3KG69VDFc4A82qBKiHrez3F3ETxQpuUgX",
  "key29": "34kXb9vwo15pNWoxSstnFWD39G1vCNxVkRjU3KSumViQLiWnPL8xAhE1bnShtNZ8DtJXVEvBvYvMs1VLVJAEWoV6",
  "key30": "5hTvPotUXkxp3HxThR9qZD5Gam3ViqL1wqTpGMYk5V6VRbsg1S1z15Tom3jbeLpiTP6puRC6CDv73D4P3sm1JzeU",
  "key31": "67a8zxjuZeYfZWmpw3YiPATGRiZsxNuZrCcY86u3fM9nNWzhQjXDPneDb545qUGS3n9VL3mqPNjsubeZdbKnRRHv",
  "key32": "5uVVavR22zuXdhMqppgphntgpUqy7jRtQzVJUiyudGCbSjgetz6VqNuVKAAJFAkf7xAU5c3NSqreXJydHRf2Z2PZ",
  "key33": "5domLyKt1DC7dstBe9KNDPwcCNkgTaDaw9mTuterWoJFHttsVwrsjpgznrF4J3pmpBQvNjRHLsp3DFfNt3fDSQ4V",
  "key34": "4Rn3PSxfQGMv3qJxRMFyipjB6R5o5dztnhKTr4ZvQztS81cQbQ37gqGoun94UL7uCTybRZWNF21j5EPynYGneM74",
  "key35": "3gMYhGgoPHg8szzB4n7qf4mGNq6gTgK3J2eqctiNmoCvuEAxobx44NgYF2qj2PasVRbTmoDaSoMgxpwqZdXVAuKd",
  "key36": "5eRR6BG1T7nbXBjjpHid32HQgEmZ4oRiNV5SsMMrKv1tWQYNuWh6QKkvDEJs9Jy7e9kkSpEAhrvwcStkPQWTLhxP",
  "key37": "CqF1EgvLtbnVdwAA76A99SFkY9yDo1NC8AWB2WcEbeKvQwApkuNXz389iHvuFs6cm3pX7ojKqjHoqQuRetmd9gX"
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
