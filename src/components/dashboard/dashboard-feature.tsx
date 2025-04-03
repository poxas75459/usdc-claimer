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
    "339NCSeVxX7nyXEn12kWtEVBU6MiJNAeeJxjvSTwohpcBwF7xtPW1WGJo6LSAK2SZT1YKyXZq62VepfjyLmz5o2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qi2T6T9e53CDhYdG29MMUSFGmE8j9ExuubfB2uMfmU98sN5qCAYKiCLQggmXUheRLbUDetvRc97hBbdN1sYGxeR",
  "key1": "wyNmj591HoPvj6LxfvhTzg7Xb5chxwxzgSeDv3A33oG7KLaUb9gTnJqLNPqrD7LupaesgTEjj3FuGvtwZ4HMCTQ",
  "key2": "3hvfsLhNMYfAs8LBu4WrpRKud7iKwYQDqRZCVT5U9eMX9VYK2DUpq8QDr95d5QuzqCvgiZGFcoqmYHLSaDJ6jPdr",
  "key3": "3Da7Ffch3DxWgUCxj1h9YBoGerexY2wkNVaKnnPDdLE6LUNJkL3rU4B294yZYbtw7JdCj1BDRGoEqeDwGEu71C5o",
  "key4": "4iLtPKk8xYK5sGW52umCQ7NwAY7mjKidQdBGk5j1658LLP4zDddW2UcZ8TNg24Drrcibq3YvNtY1VvmX7dNSZyKL",
  "key5": "KoaUFtqMZ5ZgoscTBSJ5FJ9NwGq55frEG2Pg1BoZNxpch6ASVfHp4fx4M8MKrUCvHxgGZ5a6pF7ufHrmRzLar4Z",
  "key6": "2QcdJnJqYiDW89ErDmk27K4EfUgm3xSfwZ32FUG1JUPgTqiHg6cahRGw2w9aLf96kgiR1AWdsN1g5n3JoKNhNKrx",
  "key7": "4YFYgubmYMH3bneLB3hf29ny4eUFh8PDrq437MeHQw3mcBa11XSQCTo99XEZmknDajd3CXKxhsQsfsFXHTmXtrmQ",
  "key8": "337bLY2Dm4LkevagarrdKBc4RiUgd92eMx1HjmN7dKNP592A8pbMKAdUYAbNjuRuhq8UWPkLYYjGAvfPNH7Yzy5j",
  "key9": "4VzVn6bT8RMbkMYoauSx4XzoNEhUt8qJTsgR6PpPXJzRN89QavmXwZYrPkWNcgjpphyivZ5ALgcYSCKDjju7C1Wo",
  "key10": "44UXP3ZdLPPVkwCvhbDiGZ1XqHVeB8qPQbngAKcEBBjc4zxM5y89pdkNrYGeNF8dNUCxWSB5YjtFMWrzpboBV9GU",
  "key11": "4QPujj8uyhAM5CKTqdxef7ASz6GbfCFVmPYcf2iohFjx3jCQVgEGiuJMuq7qgWwMdwpDg9CTukdbRvDUQwemMCEs",
  "key12": "ED9dgJYzoiE9JPmUVrdkPX1My7NMiBH2Txi1HkDs8LRRZn6t6Rn3hWYbyGDnewUDGfxKSgSRMk9ruZV7txSGAow",
  "key13": "643Hi8kL4fJM2gbTJh49NDeJAi2wQy56MdT6hVavTG3zZPs9crd4gHrq4ornKCgVWP24MQvEsqMuvio3gXX6DzSP",
  "key14": "F2LGZnDwze13R4U1fASJu2V3gBfViJ4r9QWVLMW7U8XxsevrhYnxviC8KQHvWMrBT7uY6cQ5cuJLunXL2KRszUt",
  "key15": "3AZ1pXxrfx96R76a6fDHXvmWdtdCw7StWyd24kdUXsEeGTcDb3DYAymsnnGLuniMxHPQ13XfqsciJxTHNgNave49",
  "key16": "2RAQu8G9sB8DPGewBFRJhnaGYWLK4M7SGkBWn1fJbsoRDKsm6wana1yVkJ6sz7j2SN4zMbHDrxzMWWKPyzgcugWG",
  "key17": "49XndgDNP9jJZKVrFVHZEKzgiSjeKDvcQrE62LVbvT2XpmaPHgECGry2KQdA3DY7hkSP9ZMwbJWxeKEzQyrMxGfW",
  "key18": "3oPCGff4zqvNNr8xDxytXeSVDdGBid3MfN2zDxuV9MUUnkvxgZVvLQCa1MCYK3atw4oRUbUmCGovAdEoCZfFeu5F",
  "key19": "4TChv5YKH5rkkTqNUCzoL3a9cNYMw1VgRPY3zK8iNPf4Bd2dvXnjVx1HUjwZR7jAWA4zG2aQxiDHKwcUt2iUUF1x",
  "key20": "3hr6kqvELyFyXbgQ74X5bM88SFNYAG8HcTXPzr61Bc87uD1UT72wssEHhSrcEkbNxdTeSvFVEUS4WLa7DmRzAqFH",
  "key21": "zC6LgZZx7spAC9cVnihvcbrV1LY7bGn29pXG3Y7b49oK7jBy9R1cWqz9sDKzJSjPZoUdebM5GkNanGBC3EUPHVB",
  "key22": "4ttTwfRqKnffDiescRZcMV6YTxX8PPbqniwnemHUcwkHvXXyfnnMtwQPPykq3NfWhREAKkGUeArJRAUx1UgBF4TU",
  "key23": "63TVT4viUx6aGwgnTxe4ShrQT33AiazBRYwMbByoPRJVVEXLpesVPqyBAGAWBvGHKQu5CSfBS2YxtFXebhjEDpw8",
  "key24": "a4tZasVQUFYmmyveVCBwVJtMGSwYxjumgzCGJgdQTSjda2Wb8cP5tJ1ThGtaQLTm151sxg2Gib5uVSNjZxwaTeq"
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
