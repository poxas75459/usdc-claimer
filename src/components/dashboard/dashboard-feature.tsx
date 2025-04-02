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
    "3MGNdR5TAvCcjSccQUU3TkaJudCqsviyca1GGbCvCe94cdzJjnZFKYzDpFsZATQg3EUBxXX5dpGJ6mNCwH1bZQtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F595wcrdXKhWTgD15XuJ3WRBbE4bwEoJiVdYMm7xjCJQryoTU8zVoUgmApWtSWzreRxNvW1njy2FygydcTSXRJX",
  "key1": "27Q4fzjgNftqyxq5ujNR4CwnRXzfrVFbBvSQeGDSSfh3VgWHkW9RcA7Jwd3y9yM7LH7G2JtDPwtLaKt7uWnnbjCW",
  "key2": "nA8rcE6kMzBSy9rUTH35E4adb52eCZQ5Zw2H5AmuY53wv5xkpLZAoHw8zmBq8th8ec88vUAtsXPg9XXNR3puBKT",
  "key3": "3SQ2PuU3p3KKLCqQDb2uGUGXnKLoPWYTBvtwRySck83LCb9fy64MX2gkLhzLH7WeoynfasBynT42Kd6wxEU9qYva",
  "key4": "5r3xS6PZzyUnF1HHWM6RqQXvjBJd9ZVjutknASuvmCk62uZtzVYqrReN29kpzLivHyc8jdU3TRuy1GbyqWuFoBMT",
  "key5": "5DYdzkPCfjG8yxxBvUWEexZcmZFfAT54ubnWZBTn9eJdPRftAHmMRpjMxVkzCv2KuxB2MUpqhEqgQtEGTu9b5mx3",
  "key6": "5junkVtb4p3g67Lx8Hkz3RKDX6Yz9e7EbEZ2yMPi1hY7wr7NEw4vz7AhDaeQS8aNWyfAeyGwRjQdvBScMhaZ86Ns",
  "key7": "5pYTN4YVA4VwL9HYYFqi6Fdd7DN9pBXKFtzU8P2ebAN5BsHxVnDU9QZUPNEpkM2PHsK6v6XNtK1RwEq1emPCFz4b",
  "key8": "4CU11gwU8ZoR8k5tE3qgFugVnCDNcWCD3cjNbYQ8mytbjAx1s1PMHNFb4UnoTLkWxtxubHmQXPVfHjXRivBRUgTK",
  "key9": "EYoRwUAodPNqQUPGaAUVB56FQfcN5skkyQCmxcoGfexjDPpeefg3vn5kPnNmrbVASaEXfgLn4mU3w687Xf5dEeJ",
  "key10": "58DtYtzeNgZ5ixbns2C4CcEPNbyHSUgUUfDSGMPRx7eH4iJ3cExy2wyXzR6H7ndPeusXiR87NU9AFuAah4yBFNDb",
  "key11": "hX2ek2kJvAcLtpLVqo7AsLseq2EdgnL2ZTW1ExwX9NvLfuNyJ63HcQEpZ3U9Ro2BGcLUHZKd61DBG6e9zCmAJeV",
  "key12": "4Qf4hayDY1kva5NP5DjmkNpm1nNCriiWEWasnNc4EJFQUkmqvHu5CPsSmAwcbioY68dGvMyKoYimtFABJWHSo27E",
  "key13": "58ucQg9Uk9iNqnfpMG1oM4uS5irQ6AXt2pzRaWToTeV3xV94BdBFvxTbmRoScpBwxShM66dnTH1QykX5AtXLB66Z",
  "key14": "5NWbPmdgWqLPyJo8Miq1McNuFYHbzU7D1SoBA99XkK7mQgcfyMqHuFhTs5sDUNAj729g55gbxHS77fqD2qd2huEk",
  "key15": "RMMRbrAfkXvESDQaeFE9hEJjJpPiwgLuPQFr7vKbnn5nWMGsh3LBzuJKcw6Y8igB6DivgCMXexXFfzT475mTM7V",
  "key16": "4RUKHNetx5h1FzBQeuSKRLtk18J4hWrjeZmoTb9eCgnWbKhvtBeter4WBQAf2ahBbDAp1RQ4pu3AA6yoomzejiJW",
  "key17": "5QvgSuHGuMaFWR3ADNU4GuGdT6dV6xvr58GYbuPxMT86HaBUuGstU4C5W5MipepAmThiCkNWVYo4eiiLeZuNhi3N",
  "key18": "UagsNKTYunFrhvzAd9it5m5SWBSjK7Zd6XXMYyoE2MKhQbMqJt6EEfkkPxZ6co9TpFc4zKTWd1ThsMpi1gGTcR5",
  "key19": "2wVjehrnuZc1i6P9xB736uTPE9xmxRkiBEYAfagnp5rZAwZZrRj3zFh6b9XHqMV8SAhzQNPYsR9JJUEXMWpNV5c9",
  "key20": "2GM8zNBpu8x2ePT3mb8nW7bPRod9kXbrnG5agKs5U679E7h9ehieLW9vmutVLqALzN4urCeAWi6M4Tibbq12xf2z",
  "key21": "56GeL2rXr3qNPe1XeefWqGsgQmQDvt3HyLERbRbnqaeEGkJt3RFBtXBrhpibW188JzWFDYJT8PVf1x2u7Q1MSykY",
  "key22": "72yg5to3TiMPkomvQy7vxbYH5kVCAuEUUsNn52J4y3x5RpkoQH3whyuB9tDVh13vgqSFhyrftP17VZkM6TBR3Go",
  "key23": "3KCK1yFhmui6KCEcFUAhEMzJ2hPzuxBBn6YVuVzbL4bM7M5BdjvHbALmxyTbY2jXJVNJHB3ASJ7DdfTP24Hcpnh5",
  "key24": "FjZDHAf9xWqDir2VS2TL8piJUP82WwWAgUkrqsPCD6RiHT1bZbMsqAfjmNP8cs3vNnT6EB8bJHAJbhFD9Ybw8Pp",
  "key25": "27eqBvrayaGxNQAaPSCUh375dWT7q461eG3QxRQB4RmbMYnCN4Ay4CYvUM7RQBSrfedYjEEtVXNxCAafvjFNDTU3",
  "key26": "3JMfoahqoWtUj1juX4nLekpDke4NA4oSb63cTb85Vx4MJaQTLvfsUiSASQvnSdUaFb9Ygj1cq7VhA8yMkNu3wa8A",
  "key27": "2ncVXmABRzpckeJttmJH8VSi71d6XrCwz2a1UY3cNdn6pfCD6RSqmLfN1NmgWFEcGLNEH5veRTKE674YGHtSqQdr",
  "key28": "45tPFe4KV9c2daCHhAhAfeRxWxjNDAXXR1yWyMhjx1GhPAKKDhxa42dpDbcutAPWHn9fAXQ4gXWww8PkVSVNihQk",
  "key29": "5Jz2ZcYhC3NtR22imHB6naihZnfbSap5jMY79uf3Kiq1GWKD99yLR29WLm24vyVcuXYFCD751jpsSUDgdGtZgMY4",
  "key30": "3AFJoc2hDKzBxEpD32G5cXjJJYcjQukXuFX6xyQfAbR3LoEzNzVUKZersrEza5u1VaHG6K7mTwEHCVK1uWdCEcCv",
  "key31": "3f24amWcgwU2dmsFRKeQHPGPYTxXdbyXH7TBSxAgF8ZcNmC1fQncitaex5EN3R6Ngq2PuakNfkgNWoWPdmR4HSKC",
  "key32": "2iuFQ3qXfBLTFUwQdt7dVoLRw1zQ3mbkE5RXnAvvhToWBiLbDMmNUBPD4UfShhMzovY7werWqLvBcBygM4RPFgcF",
  "key33": "2EAsfCfguDv4YXewu8caaQ58Q6mUmc657A7NUePTwC1uKubsZtBwGGyUAY13jPQSYrcYrkQgWpf39Pb9m6mQnuDa",
  "key34": "3NqxnH6cPnyadjzTC69ctyPxKM2dR7EjJwJftvfGwkpe4341s9MDH7PJn7vr5TZ6vpHaf2F9W1LFQ9ye55WoxbCW",
  "key35": "23ywepL9mFB8DSxixyXgHnKP4XDqRiida8qN9pUVsTLjGhV2ZNcFvq1qD9ohmVSzChY9KBcSrGFgucdWqa4f6Dq1",
  "key36": "58XFyBJNKs4t8aZybG2thLndGkpBSWn4z3LRbvYjfWpnaV6kX2WqgzyFNcqFfynagfcrQJNjgLfGr8Mi1DKQ948z",
  "key37": "2qFLcsBT75aMXeX9eKByCV4r5CCvQ9kQBVsuetky6zHB9FgTjHZa28xjNY4PweTSyeevNTPPMRSjwSPi5MnQM6vd",
  "key38": "3QL27mPxE3oQAvp6XoBPo36oouDcbeQwjSuHVNPxsYXherPPcscLKpAf3rzcv5NRJ2do52Pja3ZAnY5vEa9jrAgy",
  "key39": "2AwgfrcJrjGfJuiW3XBhMuCTfJgrW7hHpJAWbm7wmdcJL9mATWHsPcDJ1qG49J9NoKa7yuEqrktQvFLwFvAoU51h",
  "key40": "3PvxnQwcasor3mC9bWSxTjLwESDq8xat59954djvKqRuzbptH5ND2bBDgJt9u7QqbziHk4LwBmXoP1Rvi2wcJv1i"
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
