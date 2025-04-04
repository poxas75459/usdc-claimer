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
    "39hDpfr5s7afxjt6XiLydAuiw6V6gSXvrbkjDKfR6PYuyg9WpFFWeVJgL8UdYhWUiEHZpcXsj2LyCP1dEAmYRecS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pSbfjxvDqZeEDyiFVSKvCK4mH4jTv6GgZemVUiDrDMwoQEPhH6TaWfFuj5VnmP2J9GZWUcPFwUrzyKr6UFrFt84",
  "key1": "4iQpyQCCgvyw3vMBMhB8ZZcfj7og6DFqx7RFu8yE5942vJvoG4uUKepSivtd4LZtFMxR89CCmRCyiHNDnZMwZjfZ",
  "key2": "4NwsNByLuh9UetE3dQyxEcG7hkVkHzYzFdvfRG71tsERMkaN2r9VAzSjQzquUDzp1seNqMpK22VYqnT3HMwAjSzq",
  "key3": "2LwjuB36gitbAhZYBQwsuBjhkDbKuxZJk84W9iKJLnUEzfTLWEWxxNwKCvQckTMnxWPnutEMoe7E3D84UrPXYjTx",
  "key4": "4kGYCW32gzARrcMgwodCd86fc2azjWFzsAsuEJ5zZuZnqsrRWD6VjPh4VNXs2rTw7Tg2CWSqYiSgFDDitCfsHQkV",
  "key5": "26hr2JKDSRLfkeLrfmGPvLrZrm3JdZWV1gSFapfrRaWMxwDC3FNFcLbyuemJh96XFP1GM66K1KM6rMYsoVfxsreP",
  "key6": "4XLHZozx7559zs9WKbe5xtWnj5T6fegHBW7Teu6RwokK58fH8fE22PnBENic84jZhCgKfrFezMAkyVEnfTBLmCmS",
  "key7": "42sK7PhkYLsW3syA9oiEice3erN1iuqHLNAAy4TjHhtWctjbcrNZtVKmLMSMADP5RPWjGG5BSMpHPcULg7Xxnx4X",
  "key8": "2Z2hWgNUNKN1ME1Joi7PMjWTHv3nZuVqU1EW3GhL8rjtbGS9pLXajhR5zFyiLeVmCcMAMADojY4hPnNspY85jAFs",
  "key9": "42xQ7S7SDzCg9sNc593PXBzvFqbGotf6bN143sKjG32HL1yyuwnufJRxnFbxBXF7vupFzvPUGbjPu1h1YWzoqMww",
  "key10": "3XgaNYYGyro3PJ64p3Zt1RiEPmJj97Ljp7bydTrRF9MZDYcpPeEFW7RBYzsrJvzhpitNxEo7tUBYVRRDKKDpkunk",
  "key11": "5ZiurwmtiBbpL28wRmoHyfRGa3Vda8fws3KjCX1jqqTBUoQyLR67jb1jpYMMcJzJSKc8dPHi4ECkpCr5BrRMFgG7",
  "key12": "xKdN6T9ygvgRKhy9D8pM1UtgwUPsbqSgyF9PbHRhAybbBFvTN8qs3Qtes4gxQMe1Mc9GuLWS5SJeJyCyHqounB2",
  "key13": "25gbYAdzFYwjHd3aFRyuhgJ8EdWmhnaad1Nf7P4Y5tU1Q9KCZ8LuctSsx1edNvzrLTycDMRa69YMWmTkVsSbs74x",
  "key14": "dxbHqH5HD82s7aiwv99hQQkZ17fADXTChQX7yZLvbuuB3UNmJWwzJs5LCsEiRGo26Lo9pwVS7a3agFo1YGFz3fy",
  "key15": "6FihND2wCZ7H74Kaha26nMK4giC3fAQjEDFf6bYK7VBqktN928oVgF8T2pvn7Zyxjz4WtqC6rPZ3ygkymyUUVEZ",
  "key16": "2sg8e6pQ2ofVJxu7gYmuhqVhDsJQFhv31UFmpM6z7Dt4b8fKtghXHzt6xGViuEeMyZ2MVGSR4iWUKdvSYKx7xrpD",
  "key17": "4enaHoaCVfcknA6ZTdkpfBLkSJGjfjrh1e7kyD8f91JREes7ZGkYVa7kWnToHqiZRRjucmPqWUpVqbL2F1xGTfpq",
  "key18": "5eib5vcjTxih9buhbwjxjeqwYL4uTpUZNqeFrsQXWWMVbb71YK166nWyfp4aGxMKCshvPWbBNGM3ThUbnQSnTf2U",
  "key19": "64LsQ6ETAmwcKYszF5sdDWVzfZN1FRG3cbEi93FMWDuveoaysbpLg3g9bxnU2MMTHpomQqxxzxH3ur3UNDeonPs",
  "key20": "CWZV3rsGQNEWndoQX4vR7ZGTsCZWWh6uD8Dqc8hMoz98JUJ5kxNrYn3DY1iLEnft3DBTxhgZV5j79nDHUmp3Xhr",
  "key21": "2fZf2dbraayLsn4sFhUZy5dahYt3dV2FpgR631Bqej86AQhTcaobuine4q4ENzdgwB6vjHGu1WuFjvWSLo78YtQe",
  "key22": "2o6fMTymaDdkfE5HaDosFAyfD4Z89YWVMxjcFX5o9fjLLXDamSP52xkxakR3JEkV25DSDEG9watRc2sQk7bsF2Q",
  "key23": "3u81FDFj8WHT1H2U8BDqXPyiLLPKmet3Xgb75F55Jrh6fDFYaVNXNu4SEKSFAGgD3E5KK1i9AemT2TzVpKucRfP5",
  "key24": "4CP1GhexTTzbn9tNZrpuEdFn1e4Su5m46aYk5fgwZxyECaEuQzBa6KZaN8R9zeS1eEUWvDKw51EYRT8kenTnHVbB"
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
