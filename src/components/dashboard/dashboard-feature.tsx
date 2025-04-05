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
    "34HWaD9hoXdQgnoaXCZ5wQ6WGS4PNVzKrJ9MTC5iNxT8viUrMJtd52WNFQNqYL4mVmrdEydxaXn2BQZCv6hzcMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45GM9X7KQisK39oyJ2X19fEvq2CdNvhnNganpWHGgwe6H45TZetjcNW1wAAvQcFLU1fADd76q1UcdTpYvZv24Nwr",
  "key1": "3Eb3HuVJaWDZLxAKXiFaRQnQmM5DVr3bUBBuDs5kDQneLGETkkPejgK8KaCu9GLPS1Y2xaESX1PeJnaUYoHjkC3Q",
  "key2": "3ZYY86gMYY4nHTLf4TD9KECU5im6oXTtah2YoKNfVNt1WVn6mwfERkkDQHi4Vu82W5YS7Kcf8PEbgy62PieDW57X",
  "key3": "4azr61WsktCWJa7pFDguLJRKR4X49SVayRn2cY8KLeMg2tam8Hgzzwo2atJtdr7PM5DmyVS7hJXs4VdCeKJExM7A",
  "key4": "3onjWK1k7RJ5WkYWJj96PWhkPJjKdvqje7A5pPinijfuCWRAWQ8nV14oRZ3NbnjSXHxk8ycmh3chGTsgGJp1GgKx",
  "key5": "3NikgQGYNPEc7bSkXawStx5AQ5nFvSrdDWMPmFQqPNQRAWKw2jngCsbp8CgXTvRvfGqcGKMMeXqjvYEHfw3VLGpL",
  "key6": "4Pww4tyDejcj7wbUMyvF3qsb9aTwThmHjZ4cpYCLTYyguEFGXWDfuGLuBoaGmW11gy4s5dUtUcAgnws2ojp2cxv",
  "key7": "3hcQEAuaWZjNzHL7LvGp55cnydqdvjRsetr1ELkNrbEtgNwJoTXPxBtULjv5Xavsp2F4WS8B2XeAcBiPvf4LAxRE",
  "key8": "5awX6m7LQo9fYnDFE1T5H27QKejFqn18GjmnmXfa5Vrejh3M8uGRY7KwXDpaQUp4GyV8VcofjgT1XTdNrb3cKsqD",
  "key9": "2S8Qg9rdxUVcas4iwt4tRJNhU33VHES9T2ojwMMLdPeYzgSmUnkRqiLseUxoRrvQWWNhwBH2DGDTWXNHcCBuWHiE",
  "key10": "5BtWeZiVJ32QhiCThyE4JXFffGvCc7UyMpsG4umG1FgkmxQnHywCGiGyD51r2TjN1Ro4kyCViPBKsKi7BWQCDQ5E",
  "key11": "323V68wjMaL4NUHZHEFzKTVBVpb63cBWK1GovrNLux3mhJhV5SSRTa29hWSGW9Q3Su1Hoc3ZuZwM68VgZjnhMwmh",
  "key12": "5kkBR6Dta3v9GxBqoFns1yd4TkDDXAbMNk6R3i7PAMjZEsWqT9D3zSjTEWgiDE2s2GBb5Jp9J3SWDw4Po2rouhNG",
  "key13": "4AkdDL8WywYqbATGtJ5jHRHbvvLXT3Uj6aSwN12frgnhLaSafnJipjpWR1XUFmudgRNggjcQZoySnRUEhcgBpuyr",
  "key14": "5ouqUG8qnXqXRyRX8CpjephHtfvtb6x7XNC9juz8sCrCh1aAxaXBYsN3jLFSX8n8qhJooiqfH89Z2mnabYLxq58U",
  "key15": "45YDyJGrpTZipV7LizcU8ww1ZDqwxFe9wuU6G26przBrWT2fS7MmvE9erMWie5Dp72JL1qf6MjSydhAZeM4ULP9r",
  "key16": "2Bxns7u8ZuYzV14cDfjU2Q8y1sZsNpeJAYJhVxoHAeWViF5rvrkGkZ671ukd7mXvW2U8bcvg7NFn1CjC38kRGmXK",
  "key17": "53zxASWhRA6n2L7TR4kNH2NughjXEyCpig8VXQA5zit3uS82MomYcJsrtnhKGouBGZSAyBaLJaNUFsEcpfLbajgC",
  "key18": "28rM72BXw68eQzHobjGQA56WUgDYMdod3Qhj6K7vW3ftKgrEFx28wUADfbUESFVZP1rNG8vHZjawZbiG7K1DDJNE",
  "key19": "Cbkv2NgFcMGZ3KkAKuXhE6KNiK58bf8ebHfQpn7HqkZ7SEgNmhEqPzByQcLKZAJh5p6UYFuFbtXAiYCco3wdTQK",
  "key20": "4cBn3rKdkGgdrmk5yD2XhTX7gBAch7ahiioxaK8g691Nz9hgCQm8gZE7CSFvHwzJhwNXocQnGF2EjKpaDvwkTZFf",
  "key21": "3MAGERhmREKr3Fm3RD4zT5XZquUjUwAJYZG3WNzJhFdSLJCeJ4nEFuiApWZQdrgpLjQbzJL1eWZCp4CjCrrSyYSK",
  "key22": "88xkZ78cuD2HsM7545JS6h3ajcx87uTf1fVUanWvh5MSVc7QFwdrSbpHpigM7YgKXhH8JYy3AMTtsxwxNVzAubf",
  "key23": "5kU6iiwLuhPxeYcGt1gwavfoocLNsbanTAcWca3KcSdUFNSpUiWM8E4YjY9sTaTMXswEcS83SvuFCVyj1vWzSsZa",
  "key24": "3nvnPZySD6AmTXHtB4t387rgr4j41gYyUhwZozXTxSfktURFYRn6oQes7xmznFVq3oE227umKyNAHJdgEBSLPipp",
  "key25": "GB8eAD6DBwsyfSEasV4XM7dwvyPCdUkAe5FVNFugcbzKquzXTSDE7W7oeQXqbwctGrNmBC3yPBK5zxvPB7VvZxN",
  "key26": "4HtNwEMTiR1btcY3L7AwDTq6aFepfyz4jAxxQdemgRgHsjCwa4rgJ7FRu1D1C4TgPbK3C6kEZjw1d7keu6Sgb3gJ",
  "key27": "Hx3TyAWExeeLmE9NpqM1Mzq16MzCyp6cbcLdRvLXyFwfB2tpKttzrdzZmWwKFYciGyCzN2UT1WTxTuc4hsLzN4X"
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
