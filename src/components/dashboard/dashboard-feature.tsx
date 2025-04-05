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
    "43ChRTge8WQJdMRyHByYsXA7opvoCAs3eV4U8B6jrKw39N7E1LhaDXccjRRwyhXw1EsGhpS22UKdympzukjzKxWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WVC9ejLcN7sqApAkFF2H5RPE2ipbLJFL7Wtobi23UmsHRcZuZMe752ZDoenFjWJSPWpTce92bq51KycJaiewkZh",
  "key1": "hWbbdDoKsMnjDMee7hmWo9gkLcpBpTg4nn4NtVgwSMSeyzYLFsJAjwekUjWJFkMhxuQSWRWaudCDUX8CwGSVy37",
  "key2": "244hiK5PAxAxhS3kSwrGFSu6YEyAfuwN2u8iKw3iFrDbmv7sDMtyje7i2uxHehAfxsxQ9GLUjojpYFyjHNvp2Bg1",
  "key3": "ev6eTSWR5VskWP1aQpdjNNe37yZBDYsqTrpb18yiAEeWDUtX25uepBNUkmhQBJfDkGSSM8iytay88ncf6JP1DFN",
  "key4": "rhimv8faEyT6bnD7fia2rdJV7sPZ829fjZ1Am6VYVPuevhqQiVgjo6mtTvUPqQNtexrC5oaPZMaFKoKmKgqSFmZ",
  "key5": "3G6RDV6bbUn2Ayk1bDbD4m8iy6vLeQjxGiafUpagKQeyfvTuArEdY3V9faZggNW7binJ1ashMUgYRK4ZzerU8iiB",
  "key6": "55nVUUpB7Kc1UcSrQddZ4RH3xGjDoDaimNYFxX5FjzwS4xFfr176FBP2euuysQ3UvA3q6bzfcxphEn7QbT2xNGm6",
  "key7": "5aEqbU8kdzbp2UkVZMLZwujCkCi2LJ866AHQjaNyKWKqGARYzaD7Y7xuaF68H96s6YSm1VSM92Bdsc2cZsf3nHPQ",
  "key8": "2TFM33SSb1Z3QoQCTXaFtk5DTrhprMEhxqiQLvcaXZzM3Av2Q7NBLiQNRAckZNSoMbcXZf1Yv8bxdkFibnTZFk7r",
  "key9": "25h8SCPRBvDQ9teymrFsf1LLeUu68reFCmgDWz254GE7qEoTVismGVmjXGoU5WP1Gf92n8yd32qn3yhHnVV5tS6i",
  "key10": "3TJPzmMmYLJtWYgmVAjxZBv6dV6NxbJECuSUV4JAWYRp1eyjRFWYdYSboWdxof7U3MJrWpQjKV2jn2g5jBm2ix2T",
  "key11": "39maZ6jA5ZMrfWXj1oktymCgeXBvG9UAdiucUoAQkanmWpakieCXG88iJUZb1FgQLoqXkQH2rtUQ8tpamniotRvc",
  "key12": "CjdxdCZHg1gjLS1JUbdgMW444nWmh3H9gy8H9ZHVdjDWncpayj91pCWb169DSVE3ZHk9dA8V3W8j4eSmsokzbDc",
  "key13": "2dX17iPiLA5sCAAmPF43qEPHt3mmivJY6DM5epGYcfGqp32dTV5Q1RBRZXxT2WXjBwoZ9EXoMaSvusjj1D9mKcqs",
  "key14": "2AQaRFWWuqNoKSkm6yTJBft6jtxmhRSmGwzUMcEbvNiEstjLFS2iXZeozRMVqVeDuLS3apiTbhofkFseQxskqzxi",
  "key15": "3W6gGmFzBAJ6T5i8MGhtwS7fyyUTY8HSVoXPtMwhkHcZteBwQFsNXAt5iBJmw9EJasSKzt6Muy5snHzJaCbbLiDs",
  "key16": "4F2gXduobuWrq54xJqBmqjjoZBtuNZRvuyKkC4UKvWc5LcQ5na3z2bM73SiVkSAfYZhBnfZbEn6sfJ1kA1UfCNfW",
  "key17": "HNFwAJxn8eNm4qpfc6SLABwnffnTeQskmyrtuHZr2NfjBr2yaoZ4Dap4nFNkXWy2zHfwS6Fwoi2YS84yvAbeXLz",
  "key18": "6XbG12bmJLi95Drain8SNzvVZZzQRFbyiM3686LQwv44S27fiyketT5au1e9MT9XSoUdfawfDkyvQo85T3cgBzh",
  "key19": "5it6wNfQJE84FtUs7zConz4WECpmzLC9WCMvHt4k36EC3HHeL5Q598uWStzqt8qPwPefdMPkDNFHhACSQFtHGjqS",
  "key20": "5WnnonRxkaW42UPuz89zG1MzYaquanpRRwbyHvrRnrtryVZFHsLgd35PsFnaMjp2heAzbEdpvGC5Qu4mGskSTB8Q",
  "key21": "3oHcLAmRCoarxRX2dDj24eRuUPQ6aUgSEA3Y59rPqxX4p57UrvGhjs2dFcrfSwHjzJtztiWNuVbuimzqeRahERJM",
  "key22": "5R4y5KmhYRkmu6uz3E96jhTnwrU7xRPvUEtavqKBQktb9tPn6iku7CTW78KKy3SgrruRwXDY55U3PCyXcNXFX8ar",
  "key23": "4yw5yGrrvhHY1QxLDv2nXagopfoD4mefMVvrqNGaTZosMKh46siZBpbJJ9Q5Q9b5K2yvCfSK5cMZScc7g7Bfxtk3",
  "key24": "4dXdWN1rMgyazF6H288bc885jrvXJwk1z5y7eJHuU4Ppajba9LRmZXC9nS4RUNHUMWRkyumUPrVYrdVD1TtQTp3j",
  "key25": "3CWeZWNHWJM7tAJp1sH6LP8ukhGp5eftXDCUdNy56CiF8mawCr1v4eDeaHGodxfyu3vhcY6Mgvc3AuVkiWY1wDgT",
  "key26": "5pGkfJc5KyfjRrySNNiHwifCjyNzZMwoweAcT521g4ge1S8GteQmSAwhW2xYXpsykWK3XvdYDR6iGFRP3dq8ccJP",
  "key27": "4bQkhoybUTiyM6ntLhV8TUutDVr6Ntcf5YEqiiFrtjLvBXNf6oJLmKiQoVW64Epott4YFZvUuscTx4cvb5eLKii5"
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
