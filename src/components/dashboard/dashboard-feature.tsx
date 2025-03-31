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
    "2VNvJFaPXTEm6pFuUFZJ5rN33cbKLGzapg2cQKijMpY13UckHYWZWRAdhxsrtQ53BmbfeWkpVTLCBFnAntsVH2Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyr466Ldk5tB29xsmpfZcLNG8g3nYmf4B3ih6qj2B9tTruJTnnSV8CwiPD4b4LCGG2WrXYPvpZadPqY9CqdVykV",
  "key1": "U8PSk5KkjSYx1mz4DSqukrQQDYq5o3GwAYTgZvUiG4RpypArMRJbRfB6EyEXkAyLdLkuJTfv3wS4waFRZ2zvqfj",
  "key2": "5WkKhZTKn58Eq3J7PVCdEgFHqu1BrihHWVmuYFo5waPFZ9SjUm2ZxV1ZWmvA2b61mhsepeCpLhGmvGKCegDLyRom",
  "key3": "4Xm9XFNrguzsb7pFf11oXetokP5xnnJHrrQ5xNq9mPFrzLCagoKnZRa6ZpTrEk549DsNg6zzfvGUWLpUgUV4CC5R",
  "key4": "5jwB8WR9g7EJ7XqAiAWzijaT3iSeeDesSN6GGEq5oZDDV9QNvhyoRG8PCsBsmTJgYXJ7y6u7oRxBjnzAaneoPv4t",
  "key5": "43nNkGfRkmyzjSsKxSLEG9CUrTMnN6y6D3cY29pL2qqYLHKCkKuyzAWHYDyT2UxkjfFPcHKFCk2wTRXsaGTzuEAZ",
  "key6": "3652xu9G8MPPNEg5nGAyURCPTzJ1c8RQZJnjEstLEknh1u7376DrQJc5H95FiJM9CkrchmFqKQ1PLaw27Nje5zqw",
  "key7": "nEX1aePGpkTWZPcgryiHMW1wmKW4tRQasWdeBt71Cm52T4r1c94qhoKnZWCGbvqpYYbdUySaMA1xpvQb9vi73p5",
  "key8": "4qfsnRaR1yN1HP3XGdsWDJ6StMbor3FKUmSnfwVt7rQ7rWDVCYiGsC4Px3MT3R69YYvEq7dbdeqrFf3dbt7byj1v",
  "key9": "65N3WBChAyPyBTs5vFvT42swBM75evpggDLsh7zttLLHeTKdQbF3U7YMrgofMyJu8wHpCV1ae2kTKUrATz58tZne",
  "key10": "5aTk5pBLj7cdkJJS5Dvga47pdsuJxitTR9mxfFyZXa1e4jcCqikZC3m2Z5L7Mssxi2hEoTPKgEziULB8ASbokVPn",
  "key11": "2EGfB3J87YmYrFjdGCJEueU15Tc2Tk7UWeaN15gwEZckgah4gSCTJPSygKtnEPK2M8aeYkFTr1aveq5coZkm1apw",
  "key12": "2yhqHTUKYaX8DtVBruNrfaNuHPAGMNgKuvr2csA5tpqBhBJZYbvKZiGDaNGHMEnyAkQFofBvAwDLmb8NA9jDcxx5",
  "key13": "dZG2iVQKatay3aBVvuxJ2svQxi2LjB8fgByF6tUus6uHUDWPDAvwsZpLTTECUvWAHNiPFAcqPV4Tw4hMFcd73t9",
  "key14": "33Kbd6Xcf53yTfcUY9EXtUqAybVMhaNN7tEeA6yLi8AxDr7nfq8QtM8aZryFF5azctyBy1HzzKasqe9qtBPwW4tq",
  "key15": "4i9bonqGYFu225nxTFeDbJBycKnDLP5Tci8D53fKjEeQ34RFWEfFfu2PREqtSdeBBpjt5nn5ykeDqMrsNJNTchfv",
  "key16": "K3miCj3NP8KmFrAyeXczgm7e5E2EJT3gezWa5Y2MP2iGA2YZ7YWh7FQsyDiJ6Yn1RvEXTXAgLMzPpkc568Bw49D",
  "key17": "4Zduo2tXKVmF1wCCUpNmoM3xKE6weJw1F1btvP67fgDUSTbDdupNi6w8fhH5aXaSu5YCzRLmdERhn1knxEz3XWpY",
  "key18": "5CRFSfMXx9A54L49wYb9J6uUo4K6FeTUDe2t5xH7SFC1k5J2HA6Qudo7yu6EpHNsNA26nYmCHtPqUxWMBTcgXSa",
  "key19": "2GcLpn1w9yTjd4bpXcJCXtqTRBm6rXtdoBG44nEZXwFrXM3CSZxcRY5yiL9Cthatm3TnxMT3pHi6bf7xVQm9dKqH",
  "key20": "2w7hbbYfjUFp6p7vhCtQ5hZa1fg1KUWTMySJ5WwfpbqYKihGegnvTQGrtqBeNgkBqF8m7198oFToenqMDRdBxcnh",
  "key21": "2PnfVRdsGRcrdTSLCSaSb8FG4NxXn2Yx6hyGnoxCvZRyvEk14ZvVbK74f1s9YNDmTkgiWtxcqMHLMcNJkzyUc2dN",
  "key22": "6Y6atZ7CWB7LmHXo2wLPMDTuTeE3r52S3JgfV9vvoX9dYSEkJ6rbhLcpdocTypojrBJRjLaZi1uEWrv15yGNayg",
  "key23": "33427pz1if9dv8QFZQjdKSZbncCUSB5oUxmaHzKuVXGB3TJqZfSAJwEkehvAp6vmDSuyv81FQqhy8iwTp6HbEoKm",
  "key24": "39hrisHvVXx1MVgrMRyoDQMtCDCKN5w5qso4HUwJeLmTjH2NgERUFcFBmQHEt4qv184U6V5Mqx1QchzC5Xr5g2f6",
  "key25": "4ik22vbuxTP5W2VmpPpacwwebXrgTdhcBVn9nBm2bk79rJGmAWQNFPPaMNAryEtthHCKjdjRWZoE8PgVsqMKjDjy",
  "key26": "tnwt7BkxhHFyHkg7Gf2tfYEpqEfcbDuaSmAdrvGHcUR5L9ANtaZoQCQwPabCJHGp8uyTfhJCqHMjXqUPNpnyvY2",
  "key27": "2R1YiLEZ4dHvaicUHeALtPXDhgH3vs5Z6HoFSxTB9VhAuy8BNAcasdteuufJVxEb7tZ6jKRRNoQySpZkVZ1fTGUb",
  "key28": "3eoL4KUaxrphysDQR39NjsYdZBaU9z4G1FhQRKwMR91a59Z3xxNhgtGbJr2qQYocynVSBheY9rMouSxz9oRXoCPc",
  "key29": "4sS6Wqd63wyN56biqptCdvP5dd8WzUNae1mVk3YC5LJWGxp4Pfd5e4KyJxwwVUtZ9xBckGFHk2tArjEKeohMLRFi",
  "key30": "42J7w55TYXC5bVtWDiKaiNEjPsT5WVxcTFv8UVV5pQ9LsHBzCFdxMMbRy3A8Y7mj68bAxNGtaEsrSdBxX4ysc8zd",
  "key31": "5yUX6yDwmWY9eTj6vd1Fk8HcPQzrqAzmXhfo9i8qZTT5SFbEVWi25D4grAMo7CKqX8GotRisdpKaNYzYqVsDv4A5",
  "key32": "5rc6DVHNHWQzbh3KY6FwECxdGYc8qJV4Egy42fYG68LBjw19VzAJVsAsVaRYRSe3c2BrE3KsYwfb4hvocr6P6Q7k",
  "key33": "4quAuDbBJfQaxRLq98ARi6w3hrSyZiu8tuRSbVy8aPChDHnVjzTVGjT8oNgz9PEF9usffDYDjFMGytPB19j7NBwD",
  "key34": "4j7cygo4Ta16ZjxBrVTT5HxNuupzRi4SxMUXMZN3Wumr51tWHxzPp3hdqYL7P72zUwkGeYS6QdDcZ8vY8FT9vTTS",
  "key35": "2MK3ZTHvAWAGGRixkHjgVDGkkuxxA7WAc2SksoXKiHXoXvZAXzBq5VoQUtvVr8GoTi7z6NundpyX7vJmfFUqUBAs",
  "key36": "2L3hatqMCEBoNEpiXirRPCsd6yKoSbBztrhjvHb5UVy6wkqsVrGZomfChkzoQme7nWcdr4AWo7smWdcn9TKhs9nH",
  "key37": "v2BE3Vm82STAEVJreWezyakNc4bZfudLdCPoMNADiW2R7Q1FPNxSpcEN8MSbnkaaEv4jbJrXZpYsDifJ41rSCzc",
  "key38": "4ewmxDuUDEupAviSGC2Gu5QzLivgiuMcEY42rdv9L37GLYQs3QSDUwuveLuACejRZMp4C1Rf4qSFntLjjo4TndBX",
  "key39": "5V1YpC5HQ6pkCrUBY4bkGnatipGsAjgggcJNx1fiu6nRVSduieoKkFQsLMorDXWvY6g9aAb9JaranXUoTLcdnz7a",
  "key40": "5XbHvNzxvVvpBU8mPbv4K3yR3xuPDULmN5qhD5BPzAFZQ16ZQqkK3or4By9M7rWrNrpFaBdqgkfw2Gq6MwYDs63w",
  "key41": "5ASPZ44ZdtNWWJAzbpmxQavxuRpqEXxNzPH7f29windQU6mue3qbkfXn6eDnKm5oHxxV4Z9D6CbiE6nUvsoQ1Mo2",
  "key42": "4ENRmbcqimLwM3ek24wNgvXuACnFmTLRauZdqDLTKEGgSkm3AqEE1MMvimtGaqfvk3jprjVwo4HkHSbqR1wAbmCY",
  "key43": "F9xLk9Tzw4rjQLJMeFsWhBp2q72Rz2DiVW2ae6HooymzzuiVV2ianfDnYJwbCxHZpN82artav9SGb5q2uNJfBDr",
  "key44": "5V3PuFcJbRTJjzGQkAn1rGrx4C8NSaAz8Y2PJmTYRFJuuBFvNX6gsfugvk3kVQjVyPHUdrNadF8sQjLk8sdBcys1",
  "key45": "42p3qtooCdmbhK26qUFaUn4nrY5JQJiQCiQsNNpffN47FQUfb5oLsbRAyxbRXtN2ZQ4hJHpG6RmjLdj6kc8jZoN8",
  "key46": "4obVorMeGjShimtqS1XLqX3uRFQL4FRThbCoNGv1TYFRv1T9gvsGL5w5LtWfNy9mBZKk5iKixtP9tgLjwGMJ9Jz8"
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
