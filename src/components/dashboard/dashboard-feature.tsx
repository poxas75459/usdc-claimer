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
    "3yL7yG1GfAtCSEhrgqYhSH6g614wGJ8oGgQFZ126YumrQPD5bAwjrWCebiZ7PQispkRNXRyGe6ZCx5pGzsRJTTAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLJRoFP122QaUVtVyeEbdaefXYQonQgXmhMbJE7DfFcmqDAJ76bCYZYyNcX63Wkp5DpgdHsdo9jvNLSmdU8p92V",
  "key1": "K2464toY48t5ykVzacNBUFqMMhghk3wPS7bQx4J4i25BDpiE42Zbn4AXB1aGhbPXH7pbuDM8uHanQzE7N7W3py4",
  "key2": "5u2uYwtoMGMvRrXz9QJYwjY85HA8jqtw19WtgNSYqYS8RNerdZUcDngCDhprqk7jTENQa2LwWUjfHhsdtuEyPEMT",
  "key3": "nvyWbWgs7t1qsiprNJQc2vuVMeaUg2SQrXDthRYzDqzNWML4fzgMsxipVU5EwdrCjdXNAoFaGZyesmjygQY2hs7",
  "key4": "429Yk22aMASt51w3h8LTL3Ym22UVjtkYii252YoDBi4oXpUa8ttPXZzfQE6XtFz6rc9Xm72d85rKArGe2uYVWHPz",
  "key5": "5Ch4r5k4sZxX6e2TTo8LQ8648fZhtGJqSPoTMF8hjkQ5ovnctT1imCyp2AowkeWUhHkupgwzyavtvSd29t5qFqff",
  "key6": "hmG3nULY4xWb1ynyMWF4wiUqP4mNpPxGAap9FtEAA3dT7ebdUBkYTseV6fPjm2tR8Dxdhf433atnaW7SoU2XJUA",
  "key7": "2tXS6Mmy1nQVTKMw9UkBW9qZxBMaKrkYSV1Lz2KFpbuvY9nc4nmPw2dCEWWuaeXH4RysDWH5VhRjYhmvAfgN4sRH",
  "key8": "5QYw1N93TKbX9UBpxYm6Knr86PpN528q3wnyKFnMFYwF974G8nZpuCz2JWKMfikKUWJhjSKjk9UfCd3RZ3fHzHdK",
  "key9": "gpRBUT5JA5xbzTeT6NefpE7wwaGj9PANwEvT1pczDayr5v5pVtUJpZU4QiKz4v6q5bMM7ZJrbzMEb8XEVDPXQ47",
  "key10": "4ivqexmh3wRmmh2aVQ9Vs8LMbecJkXK9YQhHr6YGZM3uQwW9gshJQPcSaQW919fdWG6ynv9mBAm2DzJ1ZeodVPeU",
  "key11": "5Zoy8FubrMf8GmgrVEiDanhC6ZH4zkr3rAdFifRVPwdvAmm8bpbAMdrkkY12qB1jPHVp8Y61x1c4Etoq6cxjhEKd",
  "key12": "2SXqcPvX5CJuY1KVeSDkVax2Hsw93y9NRmXpbCCCWyrkK6jR63CLuiRsZfWk5KJGcLo6BDeMixmt1MeAKJSsKcEy",
  "key13": "39hdhAFbxdhrp9TSJvtVbs7mjVFVRBA4XXYUcwS68KTe4bbHyFGsETNRX9zE8eXsz17tKHxrAXi8paQMX2frCSHm",
  "key14": "RRcb48GLmYDXagXcnnPwwgxsYesy1wHQYU8FW4ujeRgCqbJPd1CXz1gaZZdgpejdhcr7hH5AogPG56y5VFtLkh3",
  "key15": "4TS9PJGKuBdVzyZDBitQ2notzVkZAaesNb3SWCh4xGNdh3fZd31AigovNVaTPvjDeisv7iSNHttDPDT6y4KCvAMt",
  "key16": "63phcPdoNXWujAXXP7tasTXoa37nWdVtaNaR5CCq2sagQRM92uEjLajhnpPxpcGYrW6wik2xQYGA8BHhTFaoBJCj",
  "key17": "2U83ECzmKiwVBeZDQTV7H9HTyeyZtJfTDTyLnGxgncn2VSMAkMf29FaWgPhuDk4PWfKHvXktmTFTqgWkitCFbnRB",
  "key18": "3GhJ2iVTsxEPK9S4JrymfWmqa6MA9QUHFbqRR5qJ6Kgq5RmLypY46m6Byih4UajCzMgxhJF6aVx4UYxjjTMGhDB4",
  "key19": "kdKeWkr8kLrYw2YK21Mii47aqC1XirfAMXARV1KkkMbBBBHJ9wgDSmg8cLhybW78h4449gp1kmDccrpDjEpbmFW",
  "key20": "2F7yMjJmzkmgQdzboWzVdDgTw2LWnApyKaXY5UprLDeSoZhd6rXWBvtkqLBu8yAj93pZupqQrWw1FqyAgofRJvLk",
  "key21": "5gC7FCq6AmJNvqi6zd9BA7rKMhEKbWqR3M3NFPyrvr2zwKrjEgHSqCuaGQqHwf27UJ5yzDHSocRELi6f4Rb7H6P",
  "key22": "4mJvVJWUxk5rBCJ4GUvEh4HWWwzHk3ph6WnHRj3HyXjtCF42dy4PtCJ8qqqQLBTxQrrxdP6757R3x6abqvksC1jp",
  "key23": "2cqXKSu4m8BJ88fVs4XtQuTGZJCEQMkvUjtCPWimp3j7zzKVMgcSWWMWDQHrzRje2PVshhhrBsb8i3ZnRLYNchkZ",
  "key24": "4oAcohoNW6AJzGpCWS2RDYWfFGt7nesnnHdvAhxCSbF7Lx4qgkKNVTGFF7vaGhSzkmdenx1YH4bHSNDHcsLB8icp",
  "key25": "4Nysgfy7CB4YgUxGsL4z7o7yisu2guwucoAsEW4UcS5E3rd9bsnrU7K5yCQvwnJsUZ72bbhX725NsmeGcLChj9Q6",
  "key26": "tep7ChEQPMJB7xXonQFjQpXiwqWuF5KMzTp5n4CEAcWFzbxweR9hs3zn9DzTwojrGiJQDER6svYfq5ePYjhkFNy"
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
