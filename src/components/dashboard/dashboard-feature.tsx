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
    "mwo4skb4QZuRuK1nC8MxqannSkCEWXDvsHTMe6PcJGvKBit5cCNgCzqeFfYcqaXNSG3b6KTfAxNMoR8nxZ6kmEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZbZjceJR61uL3KGhDkRNiUhFiq1p3EBrJFfZK55AdC8d2FNhXaN5uZKVQRS1zDjg9F1Y7inTw3DyhehPYjNNy6",
  "key1": "5nDx6iRZ6tGrEVLx8qBdwZfbpwBNJUP5gn3c6zDUwY9nnqE6NoHthcw3F6vvKeDFVE12Q1BcTYr364uJKZCJPVFf",
  "key2": "2edJh93dYPYudv5uvReEHp2AM83XMCcbHgDSEp2GGYYXiQ9xSKTtTwqmUKYm1UVwE4hDmCFF1LEoTfaAnmj9uQK7",
  "key3": "57mCkFkHYD58LzLAyFMZcEAqx8xScvqVVLmabYtxYnhbGJEzQyEHzWWeGq9nEkqRMCkZc4CUH3MkPqBbaPMMyvfy",
  "key4": "2t7Wxdg7TG2TBk4TjhN7o83DwBa9KbPuqLfWEuVY5zvuvyiTvaXJKsdtpzkZC5QAhU4TbEWw7dNySpVPT2yKVcbo",
  "key5": "oajMSzPCrDWwMBDV4Max5Q2AXYk3DxhDP4eMnj3Eog8gAvPU1veoHAhXweRfBjwycicDUK92DgEq7H8fMRFoz8t",
  "key6": "5a4RPfWvtBaPM4x1UyPuUfJsuCXS3La28Z6AHcVQgYgThyD2A7GPvTsLDY5xYZ1iEdmdQ97QMDBc2zxF5QQM9NTt",
  "key7": "4edvQTZvM9SC5Q2ds83VfwFnG4vAMYdfoqQQsGyGc4ZhFmvtvs1jikcKnzWjnUVdpx7PSUDDLEiUSzhma7wJ4ZK6",
  "key8": "3yEkYC8cLyEMvTDyDybhRhuXXQw7hKhzb5VBZPFj1BHyEf6hktVNxPa3HEfCuRXtbSQsdBm9MdcmwC33EW9Rezmn",
  "key9": "VvJ1b1BWNjwVdXEMEG5Mm11nLzdXQ38WyEu9SsPsk2wR3vYFtJ2kLkB4LiYNgoyeSh9TG6ZWvhX4yHUBkEWcuKV",
  "key10": "3ud5eu4vx2fh7ZKjRRnNvYXVNs3Khs1xdC9MsQUdgW4itfEjCUnHqLpTssvyw8FLvuHEXE6SbLNDp9nRvnUfKByr",
  "key11": "4Lh3xAXKJmeH9xSAoBrYVmgtFytRUJnE873szys81a29TAPuh7TbVmPUXVAa9zamwbwoty1iF9QoU4qc9kGd9p34",
  "key12": "49sLPAZWDHA49fVmNS3uf3SuFiQZ67VkJvAsa2kJ8h7TXCap8n4n1yh1BaUc7LDbYHYRHbjNsh4iHLbK2ciJeDzw",
  "key13": "5Cs7GZ1SYPF4voQ5YBFSwf9rbyJNY3V8jeod2nGGKFzJmz6YtJSJ1odY69ijfbJJabsrdZyD17nfrhUsn7Cx8EmM",
  "key14": "2vRbypYcUQbzTwPJiQQboqnaP1oNriTt15NJLo8cHtWp3SXBShbaEyhFKWbquqfrJ1gafN6GKJSGVACDuY1VykmC",
  "key15": "4Yg5Vm2L8VcDpa7VK1W9kcs9YgYNXVcfvdVT4DC73SYF7HP6mPsGCXh9dBYciMxMoL3GpEPCZEWDPjjREBEcGJfu",
  "key16": "5cDcTfFh7mu7eaXAKYYBEHv7fhNcvqosCiY9Xw2dcQ5kMqbFaBEbPEFBjro4RdtkRikk8VCnjYpLSuSfhRUDXLtT",
  "key17": "65U8goheRshcyNSut5qit3fDYhnnSnowZVyTqXa8xVaJp5FB9aGVGmKHBzncRMGWUxh4zM9kiy6Qwbudx2ePNdyQ",
  "key18": "4bhCvaQv2bm4kNNXsPJyBAhoWFcFdysJ5VcVKQD8q11EZHkaqccscFRJgce5SNxvr4ScnJWvzFeBmcVjUxqpsfcV",
  "key19": "3mh6uipqnsfNA5Go2Gzua6bgfGRz97Sz73L6oTrwvKT5DMxBad7eH7Xp6sHqvnsyhFGzbzfjGdeeBgzkm7AAxXW4",
  "key20": "66pvoiH7Mo86xMHJnTvCtY8Lnc3ZAArfEt8Y1dAJFxgVM5fsDaov8svZDSQFdvcfJrUZpY8wF4UhKpXJQh255Ccj",
  "key21": "9hHdNow3qUiDUXYuwd8TgD4FPQCSh7usH33w3Yaezkms1aPXhMSnq2XmGbxJGiLN6GomgasKPCc4qnumRiyXQ82",
  "key22": "3QVhrCc91FhAErEsrqUnLDazaf51yj9NwZNdGEcu53myWREGo6kSKm2VAvFiihRBzqDRQopvs4y9nne9qE7EtgB5",
  "key23": "3X4jxbPVXbBduwFEwqTYV72Zqkk6vUQ2cyeNqZbjuDoYy9A6SPuGMrDucj2xNJJy9ju9ZkvkKnDkahtvZQm2brTf",
  "key24": "5nc6bNvWsJuuA38o6To6hxMBpbkVyQpaXnF8gbHPdMTCsXTuJ3rbCHzzGCfymZXKD3fsiHD2B7M3wFdtCiJxyW8b",
  "key25": "3EAWCSKfmEXjZaZgzJNRAZRooQU2R8dsmUbZ8kgHb26wr61KNF58z7FdtMbaJAe9o29LzgcGi6GmrXzTySRDGyQa",
  "key26": "4HU8d5RoKaGPntcwRjZQdCfzWHc4k4RKnaXv2s8g8GEBYvVtQKt7ovE3oXVVJ1c4KaDFVSKahGZpEdPHXTmjprkg",
  "key27": "3G72dnBr3tb4aguVHAmh31oCbGccCnywPqHGKpCG7NYUFXGABTvFwTin3emaA4GMvtbVoVFcQrnE7MXCUKeUj8T2",
  "key28": "g9GVEJixVEZY7XWD8pZ1VcAmtXTNzFo3RVEXjnSJEdfnzQPAzEvRm9sZ2fAyPBesGGi5uF2gUdFkiMrnDqaMRBo",
  "key29": "5D1jBDqzMhHBqYZj4hkaaJVAUaE9WYMG7qU9e5Ny9aarU19JZ2f9Ak9yGstyEhfZx3nqMh35QdFPVAEHPbJdEcSe",
  "key30": "2QLxQnu7BP9XmwKuPXuSQT7t4GoEMqZDRGy9XiZXcmFSC7hcJ3fSNZxkH9GSMjd6Mk94xWGPCKtEvuXAiXNFztsA",
  "key31": "26XF6K9ozEnL2E7FUKW9mLjsHcxhaKsWtPN64hvfktmo2eLQGQRestb1RSzziPJ46v5ocjpHbPq4jg1oCqbNn7cm",
  "key32": "2bwMCQBaGkoZB1fCWJ451gmT8ZF89WcUuPrHhQjmXoZjvfueGUG5nT1JEVm49ScfwbGvoosfhThAsk6xNsbTjJCp"
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
