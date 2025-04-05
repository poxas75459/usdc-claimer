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
    "5WLBjW7k9Qqid8Wvj5DYHhsSDUsP2DZVJoaAJpLFu45QoBWu999xitoJ8NF5ULL7xfYtqS7pLsCx5qYKWuePbrRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pAV4Fkvs6PxiiwJoabwNaJdutbUNvE8hmDKpyge4R3Yo2LZUtVXSameK43zUEUbcuunP6C6cPkbVubtDbndkK4P",
  "key1": "2CMwmryA5yE8At2Pq9GwuPZyC8WFp9X98pTdF5wGr4maN4zSExbTz2ShsMbUzkVEQP5efwRSyC3JEojcdkaqKxc7",
  "key2": "3gSMV2zesCmUrY1KmhNphLMioPpPVSiW17jgF9GaXTcTbUmCJiL3215rJHGNvmwEZWCRGZe5ioQDtvoxk64fiMs4",
  "key3": "3PofDSGQTWMscYVCqpPoZFc7mkhMYH8idNXHQ9XgUvQEGJh6cTsVTUpkVDo7GpqqyDMyRoqz7s5HLiwvkuthhn3J",
  "key4": "3tE7B12cnzA242ERwpAQ56ui7DijDXwheC3HqjZndGzHDT1f8wrvo4TxuYBHyF4r2bWtgDZ6fWbUKkLPukREsBTX",
  "key5": "2H4WbaGZbexKE2jjpjuqAU4RWRTqowMs8NQ8XXk6TjDH3xyg7PwShMD8CQFJ9PkvHFgZUPfs55EdvJZHBsZwVkwo",
  "key6": "5YifdD5WJJBNxzCVjSQpZAECobtd6mr7A5ymBhCkhkF2iq3aPujy1Lv6gyFRYDSg4j3xDXub3qY2CczKFceKoLtF",
  "key7": "KhJJXdb8sUCJnST8WHZy9wg2Y9Vfi2jyEA4iRZ5JBH9zbXnA4q4mGEJ1D5TuJzkjEoQLV75hDgTh9GqwEvve2dM",
  "key8": "8ooSgSeneuPDpBDFUgBGb1XMg5Q9ndKPmFcsLTHvdT8YC3RPWC3BoK97caPzrcFSuULYJjwYX3xgA9tnbVH1wRj",
  "key9": "46MFZ9xwPTyNXTdcZTcbLMbjhmZ8gxpFHw4twTFVuR5DpBPE8CrB4xUPrxXMjm4mBE4ZwJXiBZVzpUBtcDdXFyxF",
  "key10": "4LsShPdsWVmx5dHXMWgk3acNycgEqgW29ZYoG3Kq7UvCrEuZKjW98ic6pZZJFudMx4hwRLPSwXqcag19CPgnfvko",
  "key11": "qDUVWNAGQKEz6JDGXrZpz73tEe8uCuxAq5QxEVbJJgmU3kCPHbTf3riKWvvf7fM4VqnFd5YcsRCpoebU7SkM7BT",
  "key12": "Jtop5z9dFx4LTAtvXMLBfsTQJaN3nJFVvB2MpWF2WtkjaHUP8mrPShzg8zJyxW7HchWsEyFuN4Kkrdd3HhHSWYo",
  "key13": "5fU1fSAGcNkR1fG7ehoeHoSWV1pCLp6gmW5zjtw95vtV5bCgmVcLqDvE8JroWfNDpyjCBTf4nwKMfrZwDsTcTMUa",
  "key14": "3U3rzgZPQbUnUWmzMf53jTHL1cvu15VE1swQhiiAQS4Cemw8TYHq86y3GPi8u4ub4R6i4xoiqFue4XPUdbXRkccK",
  "key15": "5uGH3gtVDqYKjK3feircTGQrtFsDsksUtn39UU43NCQiGRiX8yvUgdtZCeQmcVfz6zs5iozcNgDXXEMiz6L36aLn",
  "key16": "5dirPkLXf3wTSg3Ygay5vfEwMwytpWBT8xZPZJuwVzgawVoKKohv1KFRuZ18u8y9sjVDJ3BeJWVPA5y3rGtEqGds",
  "key17": "552WD9yFTZbG8ZFxjfAcfRriEu4WUatCzDakNV7YB5ig1t9uxX3dVZ8VBZv3g2999LNNnyTZV4JNoEAVFgtHNd9a",
  "key18": "5XBro84FWvPHub7HgqdYtaYpSrPUgfNcYp834NVdo8r2YA7tZoVTp6kmi3JdEewJUcLcftwJorKsWEv9k1ur4M7R",
  "key19": "24XD1pbfqzgAqcJF7Y2fhi5QX5ycVWFhgm8RSrw5TTLWtDCcjE488ZFBLGaUsaeox5EAeHUs2sw3QM6jfSuXdtXn",
  "key20": "24jxPfzUAuaYN9nhoHXSthp11FpDAsfGwC1DN7TGrnR6AZ6hy9pXSjvpepTayCxubwFmdgGVRpqrfebi1U9LVbNx",
  "key21": "2NgvQJs6XmGZ1LDYoRgTTC8d2PWdVi5Cg25uDXkLqSCtGzJwKXeRGJ2rawN2X8uwF8NN6A34NrK7Uw65PRdGrz8C",
  "key22": "249omcvHoToqHe5X9tzZS8wqjqM4uQzmdk8N2uHg9hJQz64mhcCkd9397CLaTQ5crHqwvFZLjzNLQCiWYqSGH8eU",
  "key23": "2i9EL3aXvGXK9e4yFAZgWcDNNwKxZMJLUuAqTucANLXKakGPeKa7YX7yy4qabFhwnzChM26AL8Gyi1tyCHbd1YsN",
  "key24": "63hdCf5LPBYJCh38ddAucLrtaNQEQ7VjdiyLagN5eqM41hXY6u7hYwgVX9GRjWGGBKvys9r5nHhJHkjZ6GvhbWAa",
  "key25": "2F3UDTEBmCwWdfFwBzitk8R2Vq2QeHdMDk9DzXn94zuyvrRZ8io2zvoGno5H9i3VNLf5se261SkBzqc4q6dX8YR3",
  "key26": "2FVVQFt6bH4C5oSPKW4BjuKpJ1FcNABmRTaMbenCMc7nLUvFtb5rf62D5H1dNyNwQLrBwkYnL1vkKenMpRp7HcCW",
  "key27": "5bbzo8zknhs5UkAisBwsW4SFfXHMq9MtWZWRvHSoJtNYN7YTHGhDoLdoxAMac55nmd7iYMFrTQQUNn2o8RWHsDPh",
  "key28": "rWBoyFAvCCwxrUiyhTaxrn5J3Lh19Pa4VrwLVdVtSfF523K8dYyLo9SHW7gQtDL7kxYgpgkDgkeP2VBnGGX3Sxd",
  "key29": "5e3zmXRSGCqELYPQnG7gcfLFcSVQxnLv9GcVRd9w4FvRXeHi3ZQqNsaYDzifd57WyNuAGSYKXrio3aTfeif7Br9G",
  "key30": "5H35B1s4fw11UApg8JgVFJBsassWFsdtwe1CawTkoTucqADrLDJR6nTSZZJQxLSByDaKM5xTd9cg3tnJxYGpDpxn",
  "key31": "5niDXxRW2uVKdJYQYMjD5dncvrMA681ezGL1Crve2Rk5BspfA91b4RuhJM4eKAE76HNTCmUHQ9qxef1abiJfqxmj",
  "key32": "arXkk9sdDctrF9kCq5DDGsEi2CZa2bE8vy8eR6oeH9SNU8qaAG7wdeKDm2jcsCPaUjosiC6KZY5yTtua7E16fQ7",
  "key33": "5bdtbU5Sad7ci4cJvzmWfyDLnh8ngzscLgANvW1LqDDGcfsrVBii99aoEwULNGCZ2SgFGfJcCTym2kHCvkc4Ng5N"
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
