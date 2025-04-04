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
    "CHQhYFsThfUcaMCxN4dwq8bh7DtDxC1ukkURRBdt7FjG4BkJmwZTQx1SkPAJLmkBRZGBbz9UHp2X2AZXeGjWxET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RtVYQ3USvWHPBFUVrcgi69Wb3HsW4pyeWEpUk65YKmFc519DKfXWXJo2Jky88qqduWqyA5dwxYcYzjkKkSFjm5V",
  "key1": "4wMAJirdryfTorKWy7kABT3PYS1dEgT1TYfhgfjc3thxZkPHczAoMnDq5i7YSoBH4yLfqENPkL9ANZk6ufNTsX9o",
  "key2": "2WNGYM4cod8q3QzGda5avSmiZYSVaKspSyd4c9qXU5oq43tdrLagXzF27USUfC7L7cAuQGah15qQY8Aq7qkgnPPK",
  "key3": "kk433V968mzYeCtsgDsJMsCWH9dBXiDmBNMUseUX3BzYboXJaA2AjygEHcfhV1XXw1j1D2iAh3AvnEiTpcsR2hL",
  "key4": "3ryeuPgE8KZUQadbyYQfu2T5wGiLAXwytWJ29BthMNoWZyjJtFSinrBmeZdp5RjVJHheuUTqScKe4zp5sBXaJxs2",
  "key5": "5RNjm1pu8ir5woQNs4en5ThWuQAdxyj8ZBRxtF6xWhd2qGnYSFfZcmmujHqPRvFeTgmeQnojZccpYAE7oacFySWJ",
  "key6": "4QzzAC2w2hMkFeFEtwy7C3xjP1v9kwDwQwH3brGQWPMjyD7Z6ww3LKPgdWauvazMhQMZ5whVzxzi1xhg2VhX2PdA",
  "key7": "5evTwBeVtsGdq2WvJQcb1nunBNNyRpsUs237TNoPwA9wN7HV2vFF69SanfmGqdVX3oMAjKhEmHtKNXMc5dEcu31a",
  "key8": "3avgErefnCXSwdyvpyeJJoxqPkKZHnnyM4oAd3XLnskMyrAHj6GDw1SvDLHQ79vVj52XjugpUiaVCmbQJAtDeWWM",
  "key9": "3x6zjmSzR9SNDL4shFf1AFWU1T2jDcb6xD748qEHCGSZ9R4P1xPeB4Pr1FZWjAMEccJEn5pXqJ9jYG3QbsrZzDJg",
  "key10": "4Z5gNc3AfjC5GfTNvVsgt3M3UXFPhCWgfdafZqkCtzPXNUToHgjfuwuuH19muaf6rmba8Kiq5oFYGYrjj41VqVUK",
  "key11": "WFZbmJDyAV3k6vpKAktsJnjSKjC3iMDrHeBhvzTGWV8eCGxeNLR8KDDhbq2GwdMdZhtPpyGrt4G1dFSsPSfLTx9",
  "key12": "2DMs9q2nMsu2czuu9gBkUmhDDtgamWNekdsQb3SWcTj1icSEK6GJg7kWaoGqCjx2enuvyDsPnjZrHkMADDxj2AiS",
  "key13": "ANbGCzbLJKEJj8Xsd6KyqZgvCaRVUwv8JbiQkv7YUvdDqf645o4ctAp8jk9jJy8a1ptspcXbinfrWQRuoYAmZj5",
  "key14": "29uTwnMsxnXe5jcJrLMpoQ3DwJuC5qox5FPrbJy8NRixpGESRk58VNn15WiWVpdPubSFAZbh4rotgZuQuHZEcyZW",
  "key15": "4Pm17nS5yNyEyDyvwaeL5Jn9SKeEWNHbWRVLSuZG8V4A6xjzx3cMicSLtEQ6Gnt5FpEqFMwz8VtFDnNXek5ztg4p",
  "key16": "4bwV8bvPvczuSzCiXYkrZP7Cpk3F7MhJKc845gc5tRxyuZHbKemMZawKQnpfnxXFypUaKzU6XyaNctwQSx462y2f",
  "key17": "4sESDjofMRDzyhG8dm8k3RxxQgt6QP1BeuQ6DJVm1oC7n1aTiZdmkyqZEuX4237aL2US5Xa3BdGpnrtWMLVvbNSj",
  "key18": "3AgcAdtvwiKTD82otKhHjq4F6JqwjSdHQ3eXacis6afPLUT9MdbWYc1Evk6fQP6RvfLw6MAzSv2n1N7mgjDLW7ki",
  "key19": "321XLyd8BSt9BYt44W31NBRpscdJjH164guWN51tzmCTwbyht4WQnvDeKcYSP9hJYxbnho4CgTZVNe9sfkqTAm7w",
  "key20": "SFEcfQqr23L1MJgxRCUXNr9VnRTLe82zKt8vYyyY7VX649SBWHR3HGFkczY8gb34EK2EdzSbEBh5AWsHF6YULBU",
  "key21": "64Bskr914yYeitKKL46WfAQWWNoKcA4JFpGT43nnswYVU7Hc6kPoggS7AWdJTZrcaafcfyxAG21yEY8ZfFdECXnw",
  "key22": "4oaNJXHjbCetqofghnE21XBtuidUV8XCtS9QZksjY9xs2GudQMrV8YMt8NFM4K27PrwkH86SjvtBAiQ7FAhuC962",
  "key23": "3iQETVbf8DNDSh8xzwbT2De9Q2KcYR8P2KDe2DX3cZT6X6dxEagKkn4btRgyZATjFAhwYtrLqaeTSd967AyVfXk1",
  "key24": "5N52vUqA3f6DxQ7rHAny7VqKa2YwXZizrccrRi2sfkg85rWWwUw8iSosDndRXmpwqKgDgGUcxVNxhGv16hwGjJeR",
  "key25": "54f1WTjevv5AAjRd7y3joQFSKC9cbcxA3tmqaN4DDB9XijniqeBJ2vQT9r3uysceTznwFnudUMgmCYi4ki2GSKCL",
  "key26": "4ZFzRsJyhriDizp5s8CZ5KFhxJcw32BJoMTZD5znjjfV8utGuSyeLL8g8PHnVAERESBrCHzrFD27mtxErdpr8fiV",
  "key27": "5Rbnw1EnitRAGsziiPzSQbCTLBFuywEGUvaG3WmWKG2BxMbKtMq9Mz4yG9H3ipTb92dfyHzJtFRGzyPeabNEMpHP",
  "key28": "375q1kjnkmWsNU1jhZytBREo7QpYq38Z9TXwyttadUttmi4j9tFSSMAEhyEDjGRqBaeeBiohEUKBiTKp5wJsdjeL",
  "key29": "3b94QsyEgC57Grwki999xCaSrT4jaVTUuWcPghoePt1oZrFQJADDucYfLYQGizMCv4ttfAUF1BwnGMmXkvQ2cJg7",
  "key30": "3j7ok25pB2oJr5CycCuVaCGAMDzurdksrdkcpGhhh5vRN7pYdHC3hasHV1bLAC6sU9PZ7pgub5rgvFvnRWDA2UCi",
  "key31": "2vBer6xTsPNcDMZ8XZUwiG7WEa3Yp7RJeHvNVCzc5W78juEzXZjgw9oZEnTgs1Rq62Hu2NdNFEccaQ9eGqnbcNTz",
  "key32": "3yon5W42k2ka6wDBWUGpSRoqDCk3J1E8fg5w9k3x94NVun3DLSJmtNjqiHBRS6eKAQK5j9MkSC4phnfZH28GfgHr",
  "key33": "4qCQyBE68i81nh87QRwonqy49H2YPeAnR1HDQrbkaW6MBA48qW6Dby19nasjJvUePTrZZeQMV6cyFMvPEwa2a2b5",
  "key34": "3AJPJZTjxoCqLRyQ8XDdMewNiTc6FarE58RbwazYV8dVYBkUVMHqhT9psXz7N4abCcn7j93s4D1voubfq3EKG5TX",
  "key35": "3EdxgyoejrVgDUTrVbDpzQzCjcKreLiScZLNMixN5DrcKmd59GyuVTANfuApLtfKKsgYQwsCHBPRi2E6Q7pzuJ9m",
  "key36": "2tagFs5XzqygrcxBMV2Wo1q41AuQV7EfHRivGiTNRMLhhCroSfYuts6w13ZCyn5K472aAowqbvWK8F5z8ni1XegQ"
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
