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
    "4B1tHfsXd3JxXk4Xrb71LMzmsgmVBSQ43TjwnV1x83V6nuK5qBxWv5bYMUGyY6fFNhLbXCRvZPKqPYGkoaUpf7s4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHg8PkhwDsK71MZJ3HH694Kbie2UXng8MBFjCMz76wVHQwSoffWbkCPiB7hG7MTaHpnoFuudYRWoKR1vGPBc5Jg",
  "key1": "5TPsyjdvxuA3uD3GUG7U4HLat32QJP9h5xRz6jvH3NDfA9iUT1ssz7SF7qP28p4hfG1CTuHyc23yH2ZcVGkjKL44",
  "key2": "3fiVvQiP3h3a53hJgPZs2dmjPNpFcp24H8k9z5kQQiTHfucGyiLxSQhteGnXFNEggshCdK2Ms9Wq4m1D8PTNhiv1",
  "key3": "34wkP1sNo74Lt1VB9CrL9oAbtNui75PoSUaAXQRWvBpzyzEDqSHPrHBg1pagqjh2qgSpAJJJmQ8ZQyuQQ6gBaBJL",
  "key4": "25jiH7k5DDS1FhnEftuAVCndkVM2PHzqkxcn78XDdmthJUwLJjodUDAVaM71h9rqZMt4tb231krF438t8HzHEUk2",
  "key5": "3cKb2cQYhyWjUdnJqntqVkZ58yy7Z2m69zJ4tJLDVc1vqKoxopDzGc682DAjUysZyMjXmNAYbwEo41TYQ2eFoSva",
  "key6": "4UxG8bhpYpdcf9FNF4iuHDV1W8z3kyhXcYQRCmFPxUGme2i7YTkQLuvaXwR9WMbToka4sWxcvskam3pahQXBH8j9",
  "key7": "FwPF38kLj1A91eZMgRWSgmsXA5uk9YhQ4J62oaCmWXQAeFqKKNonspayn8r1LXFrGnEWy7imQgLnJfubbGP5VdZ",
  "key8": "2PQdRTDC6M5hEbiK51uCioptDwogtPmwj1MBgAk7pdrLcFZHZjqEv8bMxSFGSYew1doJCzjt6xBLkNaHuysBTgej",
  "key9": "5rPFP283fSPukL7MDPutZSBjNNvZT1Jrt7wTYbWj6ZWG67f5vw1dCUwYsLYNvBoeQZzz7XUYgU5vVCC7Hwj7mnxP",
  "key10": "5jV2ZsnRNtkjbCcTGgD59xNsuFAL73DeYxKTREZUHpoXrzuNd6YEE6ZnjFNU6X8v1GzkB9GTeqmP5TUiCom2gNGn",
  "key11": "4uecdnevspwG4kqZwLNu1DwuUzM9YC1ec1qjjGn2kQHVD7zbio4EdcNhewioyeeA4YsarGtkuCRX67HsdbUgWnum",
  "key12": "3vQb1ppt1PfWKj3RcbVNpUVtMEwdxus8eKCjD4fDHEKVoHSSczXTxcdoJGC6VWfMuFk7Z2A2fA1AkZHzgKiJMscr",
  "key13": "55gykW1Zr87uxgWHH652EYmYnTsXVvjQsrtqUtop9dZWjaF7c6H3PrXuQH9jJtMBmMmM6VHa6kHMgMCGepVEmxpY",
  "key14": "4xhwboHcvtggCs5zJzVsL7LeSck9DGysvuzdTCfGD14vqV26q7y4Y9d5qM4obVSAmAHybYUNwXxfdR9njUAqDAE2",
  "key15": "2MWhtU8VckrHKzfKGhG2S6GYFQbgx1DqZL8r4L9u29UZHfaVynNyUA5Xkf7CXj7L3FJPpDxEyeFMxpxXU5n7AZrY",
  "key16": "52oW3V156gKCb3n2ryPbbgsdPPgydQfbgteb4ZhueAEKjFxBueSoHJNVZ5HNfTw6CoBiToSP6DfERzoJjcpQFYsd",
  "key17": "5cY8SV22pSNyLftbhsrf8v9XVT5LtiQkR7NMEcsfUMfJDMTpcEvcv8u4kdvUQj5mxbRPjXn2hBZGhm2W9zpJWSNb",
  "key18": "2xCb8vvq3Yx2pn3D4v4JLKJNpdmKMqxUm34NaafCurPcqxqCDdDHSYVyWiNJ6BDV5t68ySPGVXSoJNM67LUCcvrx",
  "key19": "24fm3r2H3GjpXHnauBRysEbpFt4C9B6pBErDSzUaLFj1ioZjZs4PQnHd5agMueGBvmYmcsmaRfPEh1GuPnKG4DP1",
  "key20": "4djutR7B2uzjVnfgXyjrDqEs1AidZ8HKYFZLWMg39TKcuqHVmB9bNJwWMQCkbbWbzbeKkCpkwsxNs3eTZE4YGxqt",
  "key21": "3hxXbWfjweagKuciQjJWBN9ZZerCzfEy1vvcLEuwHNw6HPUJfHSgrWTMaCTDnq7cK39gsqs6RfSDMsottPAyLf8i",
  "key22": "4JNaWAsitb7suHcqVoNUB2ept51WTPqQ93A4URML7RofTiE8EXN61TuCaSQHUnT6WqHf5GJtrzpcrYy2Cv9e4WRD",
  "key23": "2ubFvcJPyt2wrkfJLsPBTTy3NvMaooYx9EaWhCqa14vdGR3BHXUB37Bn6YsMu3H1MbfqSYnqEwtNAUsh3V6wBN5Z",
  "key24": "4W3CoZBs1apcXBpriSWSawivJUaQ1jVuTPw8dQ3ks2NuaAjNnPqNsMf6EaAJUV7jZByssMh7raLh86xEmR5ffUbp",
  "key25": "A5GtJWZqcV5juhP86YQ3YKV2grUCGwiUSMacJimMwtiy31m9DyQYnpa8TNTU9X6Q3UedYpe2X1HaPAKyFBtfcjJ",
  "key26": "3WuL43xwH1EppHDBvkMVtUNgeAMoAM5pE4i7Gfzg3xZsYotK4gshi6ZJy9AjzSZBmYMS36SDiscPfBaR5m6Xwfqc"
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
