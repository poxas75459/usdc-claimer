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
    "628KWdjvXcugfDtHLr3r8Vk8kL3HnXcBW6RSyhagQrdLNt5Tks8dHUs5tSYswsH7Vs1ujbtLUJ9EE3foKAmnMKp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VC4NGurBVPDXwEXqN35X4kh6U3w3a5sartzbsZ6EUuqZHApz6XA39gGxzk9cwLbpChiSMPMa6RijmbE67LAM9Qq",
  "key1": "4Y8JLRzWDTU54153ctqsg3kFDUzUg1yyujgLNuNxWo7C9zdhj6NAWwiChhBg9zNRawwYxvNHGiJhGj2YrtDVSp9Z",
  "key2": "5prP7Cj1BCvxjpKAuKzdRTRvpV891LVhvTBy1LL1SsSa5fHnzC4hnYnAX4BrqfyX2bTkociU8FGNEMXHdU3SvMxE",
  "key3": "2q7RxRcQUMyDKX7jH78o95KLKAd2FUxb4BNgLyGpZpgYpUot9g8UtEXGYeHjDPZ88LHSUDRKWM1qJRVbc97Fz6Ka",
  "key4": "619G2RgK7DXwWDVFKgvwo4Ny3visno5UL4vQAve1NiPbx9LTmoCGFq4mMknQU7NJbq51768KD2rE12cseLYqb96i",
  "key5": "4LCDAe4NPP7t7Tk9bbKrfj5QVUSPwJXFnAfNFN7tccaFuJSRMTeMdqKT52moa7NdLiG2izFzrjnnY2P9JPhLX12D",
  "key6": "DPHZynrQtwEaqwsWaDyDdDhGT6S2QPbZGE6zKJBEKo85gQgAj4SeZbrT4pAbP12mNDYEzJ7XgDag289QDZg3EDr",
  "key7": "5eaK6MpLeWnKfbzhZsznL8Prshxk6TDjq2uyCjG6Gb574vDGZYQaeRnDSHSPjQjk3wssT3hV8SKhxjtHAEyZ8QrF",
  "key8": "763qzK2yVeE5316nUJLfHBfBdyTUgN4xdvo465sRwRefEtCntbxEEQcgCVr9qwkU1WF9U5XCLeb2tW6RskA6doz",
  "key9": "4Y9XSc8HkqMiCi1P6TEN3bBBfia3zw95CNwEMUC7k2BkdeVr6rbw7U7AA38h6WyrdLSGrfJ4YAS9Q1EpSLUk45Xu",
  "key10": "4wbhA8ByMPif8VEASaaAnCytkvzMhbUpArA7kdtwbv9gTTiuzDcCXM17ysoGKs48vXRZKqMvjgXWDRNhq775rzcH",
  "key11": "3nqdFfiGoDmtjZoggTdb5dttGjifZHfSMDxH2njrEDXJuL4Y7SqGUkJdNtxURq8WRWYyRUHzJub7hnfcUMFKBrWM",
  "key12": "5QFKxz9QdwgnkHnb8uXHHQ7DztDU41FxBVrdcW2zGwkUJBESeMpP28mgEz23KgK1iJ8YndYS9TxXa1gKagLXac3w",
  "key13": "6vNhyKhpS56yh3LYRDzrsfUnsYVsPUmU3YbFRveGbBdA79LpcZHV5Bf6K2GFoFsgqRR2uiMFfBjcdeLyEKzFPKJ",
  "key14": "5xmeTNVHoyuC72CVGBQZAxPuPyS1hmLBXniG5dYi9dddCAGf8wusHaB5QDBy2gHtfFX9DXswhQZzrBM9UdX3AhN7",
  "key15": "1XvZPT7ebHQ13rCxjcEivB62G6tyekp8XUqs5MhXttYunFxrJQ5zQf7bo4LYXiuskTGb4RMmpV2RV2Va8JRTajV",
  "key16": "5nKsUadzdEfdxmQdsoK1xFrS1Qe17vosB25ak4Gmw8tARAYTZTg2TET9jMYrgKA4HddaJDZAeCHEVL2o69PyAkHk",
  "key17": "4JMMeBvJLvtyh2csAQKREUaf1caJYQ9wWSqT8qNjad7PZpLyRqZcomUKsQyYufTPyjMJWoQxVLCwANTdUjpULi9u",
  "key18": "4D97BapXWSnNpRMRtgLsjdZeqp4zUR2FSU8KGLXRDHrzvAs5sMacS4JPF4aCwYsX29HCz93E8uRbMAHbWpBjTCwo",
  "key19": "3vTRY5xUUitYxwPH3x8VCAZHpbAYdV7jqtfgBtkEyzMx3xS7gCezgJqj239XguyiichQda4Ppkj2LxGA4WXNwbf",
  "key20": "23Tuhne3pioUAt5jk12kYtw6F67jtP9fyrmERgMUeq7HiL6nZD32e6KbNHCKtmSiPpFV1WXjynNW2jUSpe4BDwjD",
  "key21": "5JqPXLQ2g45Cn57ebiJnrjzZTnMS7QHvNd1uZXvoBqF16jBNbQo3XuXc1gg2DNLVUhRt9nw6pEQ1TceTfJBqFdfX",
  "key22": "3vXLopmToRPaZVcyRWr8VCPFhmPXu8axezQe7oz8eUsbNfqBGfDbzYx1FCKTpLT8pDCSa24CEcB48rUcqE972hYx",
  "key23": "2YbZM4cjtVTqpLR3AueoGQbMoVf16CRSUBvtkZUcYBi1kpos5Z93qa6Gkmskiruu62VMLfoxbpMwUrJRpbaAwNDR",
  "key24": "HxeJ76QE3D5eFdHgH7stvh44ZUV9PXTzEeUJm3EeotUPgZnSse4iY2NxCNAajmFXPLYKwsiCWhEBVxfMTqwuNss"
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
