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
    "RAVVoTpfrbLoJCDqoYcxXyqfv2qhBmjFtw6beih7VTDwkm3USMHCQVYm9VEcTsYMFpUAb9HvWBg4mBh8ujd3Pr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XNPcyznpPzgyzjZHEzRJK5wsjQhGkRNWhzoqYT8zWfnAPfMPVK6t9ETHPsdGYHx34mLSf715BcYnZPsfUmaZZ93",
  "key1": "38KrE1PJhM77YJ2UBd4ajKtnFthcf7qcEjfbL8Wjq56p46UC8QQ2xAmr7VNwjuyAkPwqNpLn6phCr5KkApfdVDYz",
  "key2": "2RkuFbnsbMBvq67DCud8gHev1kkHTicGx6xqV9nWs7n9YxCsPFcQaEUqM3GwL64ZEerQvEaHb5JANW6oVdmjjC6J",
  "key3": "2cZ2VVuLoWA3B76Ft21f1AUCcxLkQXjXFzc4E2LoCZbiJTvhhRK73eQ1msS25i6NyhLTCuSYgV9t6saJktKUERFA",
  "key4": "2DrZ96SSTTkopk3qDhbC5vwZYWY4Vqmsy5xWjxGd5PCpQHQxS2boDM7TCAzA5H3nNomFC5jFsYdXoN74r4Peu8cr",
  "key5": "2D7eTxcG4aUChg2k1veBvnYtn2QSkhd4CJPkqP4Vvzmyjgrue6EPQ1V92bxay89upzph7kP4MS7WCBUDXK3jG3XV",
  "key6": "2P3ECd4bAkDQG9cHR6FFyAnZiLR8eHzWsibeoLxacbW3geA2svATJ8YHnUE1HT5HmyzuzuPqM3aDbLZ1bDQzhoTH",
  "key7": "2gH4LHkP9MPGjEtVG1du2wPmgtYWJRpjPduwNRr8tu8adxkkGjb4uPnnJDbo69cySK9PHvQqfu5xqoYhZ7V7VAar",
  "key8": "5PZ3gpkQ6dMzghct5uEJBQm5LPHenyJXg7huFYh5igtyXUeAvjuN6EP8GuKyCNzmSjjguMHc2Vthkj6dVHJrMTSk",
  "key9": "2ke2P2fffVyyR4KDmdTfGDezTnBTqpz3pAK6Lths5Y2TpxmnLdp5nRetsS8DRNjrd5QUq5Vgbb2WempV6tFykCpk",
  "key10": "FJCK95j1nFbDiPXMEtp822Mqz9JcQPCmyZsVGcWyAY1EkZmsWem8pcWqBjvTmJE1gJupPpEC54EF45YAbNhd7sG",
  "key11": "4nXSyJ8CkHmbTwMc2Ndj2YoNXPA9eJPn1WVehEQz7xdRn5uDCprbJNMv7CPU9p5GERCXCL56XDR1zZ7fRNnoPRbM",
  "key12": "34w89B56YdFcuPid4UropscgpB8Nn2e3KLDxA7Tb26KhsR19EnXKAVL83tTWBWMbRx8HyteM8zRvV4kiXZ1RPJwA",
  "key13": "51jbecVi2wsU8ouCY3qb2FHcxyEg84ntHs5xuGEygR1xczJ6YtsGGEq39NtcVERvhdKZQS5C2m8Z7vTDmh9tuVia",
  "key14": "3XoPqkPEJ67iRyrgcxBLH8hYx7sRvhUu5Er5TUPumGwFkukRZikg57vmAEwHoUtgpNabVftdhzKoX14MrrXu1t8e",
  "key15": "4mwV8tSyUcekrx6UiYRmY1rqzqQ5aJ7tW7WNHpKVyvq7D2jBELdd9ptWc8aXKAfHRF1dPAEYpDqAP7bLcPvKeLy5",
  "key16": "47MnUKeiwxpbGfcEsJiPf8SskLxkG6dFA4e4icaQnmoAuHwMVLf7yJimXnqM3DTk1YimKsuqHTfGtKZjRwpcw9kr",
  "key17": "5uH78CwXcwpCqeBT1p1J9WwRYdhufdgPVjHEGQx1GezK6PeGnCtCp6QUffMTvmHCp5P64T2GzSNqZz1P9CddTyW7",
  "key18": "5GQVVRhrjEFj48VY8bXLncbFeGWDaCZMmyMDX9NM9t13dhSeTbPdVkUqVRz1BoMXYdqQ6YXvigYjY8GzqtqscCsn",
  "key19": "4L8LqzU5HaziAbtwcZSQPmhUFRYj2t75efMAg5kGqoxBySudJz3gPP5pE3td6qXsoxyRYNNC3NaWmKqogtibczVp",
  "key20": "61j4gyCYRptCnBeQbYif4EEPghwTqiHUxeq19EGydLTVjD2eZeXXJYM3zY9N6s1ASYk7AhmBpSDrddNZZRZQ1uDk",
  "key21": "6VVEhBbvN9AnUaYkBNssWhE2K7HS5vbC7Y1jk2TxhPCW1kHFnwoz9eTjWh7bWF9ABRDghgHhFacs3bGem5bzi78",
  "key22": "5ZAuGLXduG59HNX8zdDbDPdd8Ymw1bCsVRTQMFa58bcWAdqvtiotH3to5HKMF6JLuxr2KGAoEaWVs1cKsujbjizE",
  "key23": "5RUZwQpB2iWxhWhSCjy9v19XjbnLowRmKTNED3DdPM7fmivKkmhkRf9eypJFU4eeX6EeYSsA7SWoPxCL6GzwTfy8",
  "key24": "62qCPeBXWi9SehffDjxs8QFcRhGc3jGhrThmFhyCxcK4azxgpaKH7xmkYiPEd6rAxepLKzdbYRP9gZ1Kmw7NQZ1s",
  "key25": "2fiT3vUgnYsauMnGh6BymM47GfMDU5KwrhQbgy9ZMQZDQFDMjTZjTKHVz1LyeQLjJqvkBb61zW3u8pfTXzy4Ks5E",
  "key26": "48aNQn84wRGAk2Z2v7u46D3nwGVPNPz2frrTMBN3F6icgRPLgtaBAfLs2XaW6xDZAV4G6QLXxisHLAMrJQXtdK2j"
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
