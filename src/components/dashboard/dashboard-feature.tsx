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
    "4GWsjwHQT89b6JXiXrSbnkgnvMJ2ctFCzw2xg3wyuNgMgQ8nEYWo6UFMoYrDhDShxRZuSNHhUAhBCTZtY8Nv6xqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NuafNvwn4pykUndLosr8Qyvm6KYJ4XXgs8ByaNAhq7aSoCFft4cbiXw86WMH8Epi2C7zyATdx97eJEqv16efFWH",
  "key1": "4kwvrDEg9ppY1U3jcVxuKSwjxALp1z47WLFu4mef8p9CzEAdfN17BqoWweHDFe8gVBhm1moKJqHz2bCMD9BV4o5P",
  "key2": "35RMXsQJctjv8e8Gi2R4mFEVsNhdLbKEiJLX5MDDYek6N38MihoPMzufUQLPqaEpgtd6SsEzccQWBJZunTp2HcAU",
  "key3": "4dCZ9XiAfVxYycuZp6Cy9v2VpmayyqYLcpyijryv8b5CrucQqSVmQFL9ZpAUmn5Z7Zr2sEfsaTCLAyrN5nRgFkwj",
  "key4": "63ZVnKmQykzZb2aLiaWzsWh1n2m4suyYhyu7UV4ifq1yGuJ3Gekah8PSQw3orvrNZzc4TrGZo7EMsc6BzaneACJY",
  "key5": "4uhpNRmAxxbuXThzK8HsqSVpC5grDAkNuvaVqKb8JNMAZKqgVdEdTwqRa6Q6aSZFTn69suLNaYKNKKCHfnvEKnnU",
  "key6": "NHNL2PaLquzNK58kQAfc4WqSPHdDKYqgASS77eBFTVqaADcUemgwwFh3xEemVTUMsiffvorAkVyn47BaPKFMUd7",
  "key7": "5brngDLDwZ2cPwqw7vnTVdBQhE9sEVkJqUVRavqNWxWMMdBxSw5HfwoU1fZ5buXEg379dsNDqv1yXwTbKAwjf7M3",
  "key8": "41HAbdJM3E9aJoYXdQGq4gTduwkRFuXjLMx4orGNZzuRiXf44geKHX3aZk66o1YuKXypwZ6dikCiBvPaEqf79ezv",
  "key9": "5TvzH99sLdG1tWrMDaHcczorz3BGFkZCc98D1i5e4NtcWiqnvrh7nofMH5TChVULtWvKAn6CSuDaMWtuTF1LTzxZ",
  "key10": "25L53HXvWmkFGAVs5Ra6cPeHfkhdQUSreLy31YUUJwyV2knbuuerNWxUada1UjG1Gs8aVwoZ1PVRtFZBiyqCqggo",
  "key11": "2fMQ7dTRmoGzyXaFZoybKwKY6i7fLkU1C7gTXwQYM38vnp9BjEibrtACXCnZGcAp5wMfgNjE8XJ4NLBikRvWSnJu",
  "key12": "4ZLLicsuJdX52jgPScyMxV7gkchJquUAyvPK8si8xRMQZK6AsHSjVRpc4Gdn9Lu134CKB3eeYaTDJQJQfnZ7nV9Z",
  "key13": "3DkzvfLSnFiqkiTrW89HX57CSUXPUAt8w5rFtpAELZ3RNrcmPYbLtG1K6rNEj1RFMf8dkpWaMvRRdGcAemmX3f3D",
  "key14": "4fJLb9EQMGKA9SctgMTLzDuNNGKyPSha68UKJwXqBdUPWg9TDNDQNJQGZrmsZVTVmuXABtMr4XrcEijJdoNqLvB9",
  "key15": "4YHahxf4rw8w3hBKAXAwEzdnZoNvAhNNgGxdzmbY5EUiuizxrTSyWg952Ucpkuvig15o7qPwqG7uGdXa9DasqpWj",
  "key16": "uFqNNzSLbfMc71SR6gwncPuUF9seQSJz7neoadzRUmiNuaTDXduECM23MZ7QMb5P89z5ako75X5ZDLD7KS1Jf3a",
  "key17": "5QaFaTGuuzG4UXoK5DszWSHFTFUsMcehV7rtfcy8sXN2ptSPWr97YmHftAfdog5m8GnJbRg5E6RrGwMC52BygyMG",
  "key18": "5HkRDfuaSHLKemHd9yDDZMuX9Vf2qcPqKcMNX958YYaJCh2QKy58gCdu8MtciWG9a2kjxQ2n6xUjvLEgArAEVRh9",
  "key19": "67EFwt1CLUjS85UyfvJWrcbvXUNu8zGts4BDzrmFVb7AXFYSNKS2Z9ebmGoqiiF47TVctuN7FBUK2vACSGPNuty4",
  "key20": "2suRueBBwWcp6r8TBj1aecQUkURDuHcVYA6hJNmHh3T6eiLuRriVDGNQj3P58Ef3YpnPg4eQWwG7WtceQsCBLGSf",
  "key21": "4gHpD16upanYc3Yf3pbqmR3ZCjNGW1zdLhHEC7vTDeGNv4hS38nnfR3Te2AxL1Fh2JDkfQ6juxU6Vm3DPk3HZCxV",
  "key22": "sgN6kNfhXDM51BnJb4kWjZYPf1wZ3uXN87uvD3nZKzKLwwhRecA1vgEmqUeTkcGFRi2xT7ACXqioBGuG3dezj7s",
  "key23": "43t3PLdCTZY6H7iv31iLU6Eyp2XTuR3NtToddTrZoYQa3RZpoYh6VnhS1sWTfqkoohpfUSbhpzocz91DGhV8Sn53",
  "key24": "UXzRo7rUYnWcBWVejW2UquZknGEo2E3iocVhqDv8179ZJ8UV8NoWcxjc1mh5qaJtQ8L6AuKM4pptpCgCTVkSaXS",
  "key25": "41X9KzepMr8wZcRwQCVsn8LYTKcykC6AnkfjXhG3YN9Ya6Nszum1mjWjXRYK7eDMGdRB9B3zx3mEdcyX9oxT7a21",
  "key26": "4Ap2m4T19XKznHq2S2w3RzVryioQf9xU7fzcZJF6zYTseGWRRUGvStLWyJXNXeHYmYxrCS2zMf5AxCiRUx3aQdY7",
  "key27": "2aVw7UMw7CnGjv3Bd6NGhxhJucEHk8Vup42Nwo8tANNv6vF3akEbQJahuu52o34n1Uk5z2wyZKCwda29Y1ZtvTvP",
  "key28": "4vWKqUwDPHYUqRgnZ4CoCFjgpVwFUAEQwkJX2k7KE4YKyjRCaNqDVBBJPRiiyUSv9JtptmaKY1AS6oh78Kb3GMmG",
  "key29": "5FmQ89Ur5TLhJbafatfeisTAmzdhX6su99CkvxPHmqAKmYbpzJ5zNCbT7Wa3JdGcK3AH9nmQheWxbNnWN8N2jcW2",
  "key30": "WEdz8EjENpN4wwfcv94oQTTRZj7wyiw2BR97LnPn7xrSFi3MdqJh98RrwrcZ1xbDaWWiU9dZgWjDJwvbckXyv79",
  "key31": "3onQAjBewMF9DfPwTNoJtNuE5J3T4vRicqZ9JHQoWJWe5LhNTtzY1LcQb26zUZYPZWuAZKEPSVgCTsfLcjAbFDRt",
  "key32": "3V8hKcchh63wb7BGSSBrHBVcUdKhsB5kRzofEXnnJ3DB4w9kLZVeUr67vvVdbteN1Yohs9UwG7cJMbZuDmZiSSbj",
  "key33": "j69SEiAcUdkxfHATSUWxijzaTqaVz46sd1i2DcgjteUdr9uyGwEjxri9kQNjxEXB6AkNCM4H3HsA7pjQambGpvA",
  "key34": "2vKtzGCQQRkznLYohsweA5kiNL5aAfWo8LTUXdDR2v1Cn1YRCuixaATBBE11whLySFXW13NVrHaKiRsPMebU5fyF",
  "key35": "3yVYSL1dAQc2MhpHkBr2jstgg8GMKF7uEQS2UaGiYtxjJ7G44mPgD2V3gCAPXcsrccuwhg1uJAsPPt7J7fVLse14",
  "key36": "598bFS3sW34XDWyG4k9aViWECjYTJAmV7T5J6rHWdXadnT6PVrZjMip4D9pUQAmNZHHp37ZGPbKZ2213Mia3ZUZx",
  "key37": "pv2GEDrYNdbzo22xt4jPdtwBT1czj6NaGugtqhBbtMkzYws8Btm12XYMFasZ8caNryeWx9iMN7h29grRN7kARwC",
  "key38": "3TrmP8XXxGqpMEHMxemNeTDGvMgeqDGnshw3BwuLJui7as3DEEnEhjTsQ9rX1FVTaSvbYyGs6Fcb3rumQxcbhGUL",
  "key39": "PErHzF4J41Jequ9CecVun93fvsVp61LLunPatjRsmgRZWvZ8P9bB48KEpEvRYGQYUUks2J7PkYVGijqcgawfC4v",
  "key40": "3mFzHt3xz7jUfGANuRFmWAXQEaY7KZf7aKtVezFkgo9SfcdaH9fqY3JKm3uvgMV2kBnSsE3S9ZLXcemg1apy8pww",
  "key41": "2ohKbNVK3jaAidm9mkLnqtAkieFGHq2oMo5YKkHxhSkzAYJ5hkrgenNn4idezXogZG7ZN6teYgB9u8VMYaS8Ajmx",
  "key42": "yF1oRfoyn9L8FcULx6PUwThSeHwkqraVFjp9n7GroYstxw2owNf6QGGWy5R4VkHbQowRDH3P3ruexGXX8abBp6Z",
  "key43": "2wEmNYHeFcF4if7Ltqy6uT8MkFfbWY3trVGodFMG7bYYoi5AW317yCZfmz68MJLGhydTxgFE225y1XrjmgeWu5aE",
  "key44": "4kSoS1eTHaaWpeTfn3LLR5EDPcWgUejtzTeZwJFz34y5eVZWTzLNQAcs7NVfhC9eQ1SCrV63jRGqLs2CK1tcQrXm",
  "key45": "4ybLkMT7z3uoY29JJEx8GL3tZKax91GY2B9mAGuuwL9E5SxAHkGPCvfyxp7FejTPxMn9PwADYJPE1Rf2cxZr9HkV",
  "key46": "2CarQjJy1D5kwVv5JHWhiRwVDCYGG47HG2UYXY5sMTdgaAuwTFJvSCZpNACiKqVboroP1pTkYzqVJ9LvFi39bNiY"
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
