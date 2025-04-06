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
    "42MksddtHqjKEHvCdkm66A5c7xmc9EeJ9eobbiGjEK2BGTXnACXW5LwqVxPq1JrNNKZfdRCnSFL22LvEPeSLW4X9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wL4cdj3LgQHj4pmBUC4nbFgH5pvgsZkDDb9UAnVX7i1qoyedQCokLBf2zun91GBw14tVk61FvNcL9EVgGjNa3se",
  "key1": "31AqSP62MrsWJ7Cag615zNDT9T4Z56c7PHmEUCfYRKB2Paj1tTqbMEbPnVXbkhKhYfJvhsu7gumEJYspz9FHzZJ1",
  "key2": "x28ucHJYaremMToDhje5WwYQ8XBEzauqko3bzeXFgWQYakdBghToVkN1rpUCRoESiNjPYbVanBybG5s35d3nq9d",
  "key3": "2CBLhpyX95k6P2nmdR5GegJNjxNuVYXBPyxtGfhsDwgg16cyeYVGATzDXKP7toC7fvcK6YihcCyYUGjkJcwEwjP8",
  "key4": "5eN6wZkkdPDHNoFFGHeyAN4LTKxkhgCMZ3JjwtLssRqk6LwUJ6ZGP8meBMLocC8Yo9oUgGemQxtTzvYc2M2LaAAP",
  "key5": "5AoBwif3m8fLefxQVsnPvnPoi6twxadiMwEt39n7Ukb8pbxhx4YzctC6gDzg6BEbFyR5nNhXzGTzhuw3ZKeYhh8n",
  "key6": "3SPCqgmfZcUyXxZzwNFgspfcLtVZJVebyLwFR1kCPWQn6qjW9E8iWhtf3hBBbDss75LVAxe7o4sdh254ksctcfdn",
  "key7": "2AymgsPNopadJqHZTetGrCMgRhLPVcJBXTX6ENkFmwdKjJsBTZGGnKSC4J2zvFn7XBrEpAzQBXoCUQ3gHuWUF4N",
  "key8": "4W49tZWt4VGTqdrGTnHpeFuAfKvuzutpmHKVAYTRc4UX93EqiwUpL3hoLPT2RLFWox7MvpNX578NWtRndA1A8H3c",
  "key9": "PALT2donsDmwHZduiiLTWckty2FeBg75Th4nzvzaKAim78RQ988ZGp6fDXSxRxWsTrFxqrmc1hGUaW15Rwrzzb2",
  "key10": "4RPd8VWajrpvv5gKetWgzC3aePQEzXn9Cjh3tBaMuxcViaoXRYfNJx4xuwJo5FQXKbW4h8yuui3KaERPKQt5f1Tb",
  "key11": "3M2WC2qxoNZi9dzShmSMjUGxQgf3cHVLYhYbbYnab58ZmQkvGQf6TNKAe8iarkjcZ7vNVgt6Ta7odi4ZTB8GivwQ",
  "key12": "2LVJv9sgkLy5bdjNzrwPHSxoGWV3TbjaKrzgGM3W9gcWWGzPZytNAT2siV4edE5Xakmw4yiMVoQibDw1KfNjBBBX",
  "key13": "yuSEoiCSf4uYoamXzVQj9G9Mf9B7u6Tnm8WYkGtvRED26ps2URoecyPU6y58GSwTB7ENs2canNJK2zvnaHorerx",
  "key14": "5c4YvKDzUEaH9zVa5BsaNLQrCTcs3prYfgfY9qqsNQ1vCBJWdjouU8RaEsc9C7E6htoXceMFpkGcrfzqpJ8eR4XU",
  "key15": "31j7gQ4KSYYXEzjP7o2bHhX1EkUcnHBbjGhndVjcmBrq8LnsU7S9mFnFLA4e6KyCqQ9wuAGkTbMJbpWvhUGy7F1P",
  "key16": "54F6WLZHYcYXJLCMpqZ8JUCrzrviGU6P8E5kCh9dQv92tdwYTjt3DfpjgUN8HfJwcTuEJcN6d9maVM82CJn5krek",
  "key17": "3J2i223piJnUC1kDKGtVk6XKGkPp3sV71VRQNCKqHCHFs3qzVHs1mvHHdaVAmkZaPokUE2kcef8y6LAJAaCcioHj",
  "key18": "3CCg1zXA9RSg8Aah9EVxGxPFAD6mpFPQDzG6qUrLjFvmZUgdpJtnbcTmhNbJcZSkqZ8Kch5FDMssPBqbZmdRqGUA",
  "key19": "5gu2NbLGJvV4126EEgk46rvU88Pk3vdqq9gCoHLhM87jZJUfdi4DSnkkwwUNwQ78rz1nGYYNfgGQb8PfMxc5i1Hk",
  "key20": "KLXWErMS3gVRjsaGfsx4tsACLcdr6G6nu9rppiGU6v747EiMzkUqEHBik5G27QtwB6qnmKjMK769MFAFBxc1yXn",
  "key21": "v1Jvr5MX4f4MLtHje5J5XMj63Xr1igwwsJmktDBXqVDnM5Dk2NuqriHYJenXZRLPet7H8eKkNh4j2HyXttDyc65",
  "key22": "5z56N9uCjZnBHMg866igp3qJpDnHrat2YhSNG9rDDYwpcGjswc4cgPYxHE9x2rquDAmcuZnWvZp2HYcbLEcmGfTU",
  "key23": "QRzCBY43r4XveNDnwowsiBFegLeBABw8idURkAS4JaxxhXRrreDKfEjDDzDszsQR9fa5sNafQtezgcru7CoAk3e",
  "key24": "2K6SgHMmbU6nyngFNxQTZAvZV6EX5J2UXJFan4VHFwNPztCJWBTkqFrohSK8w5jbQNDR1JZE9TMbcFYPRxXAsamV",
  "key25": "3YeMog3YJHtuusAwJdynKYxrGxyqH9vue14trrn82RBZUAaKzhJ7TP2rY2inkSounp63HCkVDtCtV77ptU4cNUMv",
  "key26": "jZPS2Lg6oGR6BN9g865s1rUB18aaQBqEqgPyce3oBJ1MLeH6JN1ghGR4iP37U5eueWSAVTc9nmr3zKZrZCDEiSD",
  "key27": "286YuX6dim2wmRe6cSxgCfkC1mHMPS6mnQzomvis5eYEVs1c1LvcyZ5dCUUGR8VA9LChhAM3Ucx4ivVeXky9q3zC",
  "key28": "Z8RuyJpQ5okgPoGUa5EuAavkFVpVRqnQ1YaFUer1GdotcntKWr2sAXgNL97bmLpM1rt8ciaSvQykfsmF2tfEpdF",
  "key29": "7n5nb1h3pgHJR8zMt1SCsJQdxPfDHaormjmMNQgN3uTvUUvvEmDntDwAVEuANuAc16kuenCfUjsjmjY2hsZQhTG",
  "key30": "5EAC77JgdYYGYMVQg3xAphXK4NpFoF9kj6ubpBZuLMU2thnEkC7k8fkfBJw4JfhuCeUdu9rZubs8cmtUpMSfezDV",
  "key31": "3nqHNGWaCuG3u6FLwGgBGfEJCN2PDJqD5QAusSr2hg2LkSL8w3BGHupScQ1kgN6dWm1xi47VmqayP4Vjq4uLRJUX",
  "key32": "2WZjC4j193cgV4ZZHNmheHXxXYbDQKPTPop73cZbxGTH9TBqeJHUi2bH1Q1aAmFphUB3dbqMcAB4gzXys4V5drsL",
  "key33": "2ccWYetYG7N63WYA5WqRkoG4DhfH9LV9kb65GiD6Xz9MLPSWki7X76YR1YwjZv3wJ5imKJt1XSByNZvELkrWrPxr",
  "key34": "4kUYN3sdZSKHmRYBZZNeqqU7dMRFW9stp7CDqwmfYaJBcridcEWnicBm23BofFAkVUKYvy1ScMHyiYGnApDxtnL8",
  "key35": "5UMxujNubZDK3tHjpu6QmAqLre34ruBrXiEwqGfFqUujHDPf9wFdNutJy5beCnRYeqVNkhFfWXvK1tnFct3hiUCu",
  "key36": "NkQ8oAGQWpcSoqySNhWrio9A2TFKPcm3Ej4S8RhruAH9nHyRxADkofjUk8vaT3pLG7FkxLoSHu9My37VQF8qtNt",
  "key37": "EREGggn4iUZ6uZPWArzVphfSFbkC1zo4PfQqMU4ipQ2agWJiFPSMwBxPkg5YXmLCmaSKcysHdKDHSdBfjcvqhKk",
  "key38": "JiUpED6gpR9NNdKyfdDquLYwx2zsNAEdWehmZ4gMJoL6dt2JgguqZtQxn1FYmAD18bTA8a36dn6DChjXdw5RkK4",
  "key39": "5JD8fMrZ5bCvAsXk7wsmojuU1HFg39vL1fJfbuHiBnUy2utd2RqiPJDbmHoUABXdVaGejyPLZdjLup3BTqJvDFaj",
  "key40": "36EcqfC3zK6ADsTpQoxq7LRneTnvm4Xx5dZdTx6f6FyrG92qHEwvtDu3oEdfUbsKFTjKNUDmA8ByqvcQ1Rsoq3FW",
  "key41": "4s5yEGth6S7vGZNJ5Uxd6FtBfEaM7CtbgemKZRPN2MkWzkZLziUCdPm4Y8PzopTKmc887zkKGij5r3HVnwuhEWuw",
  "key42": "2gNAC5Stw7wF2z6ayWa6PNYhRQrKGHGJ5dYjnpEVGeezGFLh6QXpdQwvNSUcvWJMYahHQEgDMiAL7u9BqikbEjQo",
  "key43": "387rs3Yv5DAwi2CEycUV2ef2ZbefB2e7KjGruJbBgoVgxMWmFHbPiWJk7aQzmfEP47F3r1yPNCk2Rp2E4tSULJxs",
  "key44": "3YLZhF5whdmKqrBcMxhbNYBiDa85CWNqFE5TNwY2tyqZJkZVV9NFZ8c1Km3LCJv8ML5azhNXq2JURqSbCk1HSUgR",
  "key45": "7MYWPj8MTvB4jaA9Ytb4v3rqkQ27j7XGs26z3o4XgmCCQjLEDfVrn49HHZcU1VpaZ6CJBJ8BuMgJXpLTob49bVA",
  "key46": "b4ifrJT9ENs6Ln3WVE5b28obK2htAw3uCkWMHP4yQ6f4M3YZ4WSpQJmTRLN7t6eq9MHmpHhu8pSVHZPfsEvEfdo"
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
