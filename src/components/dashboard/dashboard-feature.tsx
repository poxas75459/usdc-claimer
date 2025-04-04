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
    "uBq4CekPkAvNYynsbuXjNauQ5MPvzjjFtYe3vZjZ8Z8K3HS2YvVt9NixDyyhu2NJCy9pM885QvjGZfMSjm3tKvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4coAu13DmpMq6rFNjKr88oMnACQbW4ZmA61V5cAZJVP23h8FzaTTgpGwXpBY4L34rv3X35JoKSiPbSWFpaSQWAqW",
  "key1": "45d9t9QdRsc95oU6JQTUw9v9JRniJCSwbcudEHdBBZUbHGCRGdjA3e2trLJZpjnLz4oCy1LjPFLe9HqmwiScp5eJ",
  "key2": "4FM9AWdy1KCrQ3rSzRwuyqKXJHWCP1arAPsDxDBjZpJVCAHgiebSeFkwoAxb6zakXxkCr1iv4QfS4WwmK7aXdag",
  "key3": "2MfCbRWDECK2J5Ygk9ygH3BkPup258vh3eLv7E7Qd4PUFHTvEt4SGQpPTbEjHzQCRCXvU5J2dGXGSqrcyY4mfLqs",
  "key4": "87AQAsaiubDfEycRydGf2WhAcdhJ1bvXUJ6wnAoz2rAU94a1uPhQRanDA7WXhZadfG94r5pFtMeiQDPm5zUYqrM",
  "key5": "5FxWfvEXqjweNg3HyNUZZwQhDxoQJpD418Hq4K3Xy54FnoRAZNHznxAtKgHvJjto8VsTK2EDTKMLez3zXB1kSjfX",
  "key6": "3D6s97fNpYY8if4DdzkZLjygWY3LVccWfiEZzXU5sFZdWtcDJso5NfzEaAiRgtnn2qLVDrxa4QR8mUtqvtN9F52Q",
  "key7": "27csKTQ2hqdDMxFsvNRVkAggKns2sxHpAnNVuzu62UEZ3r92PT4UAA3ULobgUBEzmomWb5KY8adeqPr6x64jnon2",
  "key8": "2ptJ9oY8Mp3xDLB6GCiEn3PmNC7GkupEoVBVDeHj2odiG7c1vZksdcEXySkLaXiQ2z4VLUAHqiS7CgtvBq4wxjYd",
  "key9": "3cwrfiX2qW8xr6Cca5JiW2Uk37AjqBvwZXAqcgkF8p5Rs57igX7JaAGEVyhAoNvtf1sQNoTtHZKGikudXx1sv68d",
  "key10": "4Mrw568wfYNeRLvFjVe4cD8PjVoCHZKZMKB28Wmmxd3zGigPSNTYRaJsRXoFeouj6LyxTTQatSGA9XYQHqHftTqt",
  "key11": "26zJqrfz3mzcT1viE6d6LBqMBoB9HRyemAZvK8nrNPFAWU8anQcxTkLUteA6JX6gnpVPQonYu6S2FndzRtqaCpSf",
  "key12": "3ZGrfZ6ivfPS31AT7hLYbKFENfs7vopVrWVhCg5Mqqy9xUpUS5r8QgwBU4QpvMmDzPvEoJ8J8NqEF3ZYbJ8tqcEE",
  "key13": "2FTkZLdgESc5TJmmrx35N3nGWB2KYjNQNNw6cFy4rmSAwyNhDrtv4TWq24Qom5JzBqnPLo6r9wYHW85w1CQ8HxDW",
  "key14": "3eErN3V2sEU1xefzRvpo71o2eXyNrmtrvMxwSx3fezGTagowRxHTPDMX2XM5ovDvG3N1CJvRxP9Twfw1SZeabo9y",
  "key15": "45D9XYBY8q6QBMHciehe7YTQeiJVCUpDZnpLPmzPe4cCmT6RDHaWrrQgSD8DesuUVey9cJxy4iMDWjr8bSzMvqj6",
  "key16": "4wvD4rgkWvt5PmTysDubXEqJ1Lap2BmdMEJD62BWataLX9FjUDv1tmDqkcH8h2WR5nKyYHyqsC2vDDn1UVL7e1Dw",
  "key17": "rUgqNwAkRL7ATLBCcuPokfhm4pUfGaM75EJNE3tGZua8XgvmKfQ7zXQx5yabH7FnPMqcxEHkdCWdtWSEK8nnadm",
  "key18": "5u1q95a4sHzX5GGd6tEw6WCp3R4mAqAWtGEXRtGBtqALf1QuojabS8r1Y6Xcmhk1bsZtWUaXji957Ui9fKAbxVjc",
  "key19": "36cQCGCYvspfeBvagBVynYhzeWin8Kpti9XnKNVdjiQWRH7R3rMtC6aknaU6aGErMnNLNRZRjTFwYxZFRTvZcmC3",
  "key20": "7kdPzns4iFqCknyDhMNHKWDco21kdhGqF3edKx5B2kF63XbJSGvRJ9T4e4cu5mpfddo3gfjTaY2jjLcAwmhN1oj",
  "key21": "3dqfhN4wbSw5g3doE3w9UUCFcRQox4K7nPFoi1eXCDbcBdMAA782qd3vmMQESBPgQWDgFWMqLewpQ2Wa5HdNvMex",
  "key22": "4b9PsFFiYdKyyD8DwHun6WNaPH78ayvVmxuM1JAasvvAMcZpyYi3RynXyuPGSKc1UDcQm7A1UfwXkYo2Ssqy1bX4",
  "key23": "3RBdY52jpZpbFwoSNm88fQ8dsBLVLYapoBVLUrwdr6qpL2BKMArtXRwCZjZpYsk5UvaaFFSTxeLCLeVvEuS3McVE",
  "key24": "cguxFQBoJhzq9Y24U1YhXjnjRdUsE84Tj4PbuUu9bZDNPdCF1Z9G6HcE1ay61fWkKTmwT8B4oUH5Hjdj5FxEEM9",
  "key25": "3NWCoWzXgPmGCsQeyNQMN5uK5xQ1KtMXy4KYV5uVXuhjVyRArFksoxVr7UfJJtecFHgxYzjUZLTHH14D6H5MRD6m",
  "key26": "62ickcaUXjFgcZThX6USg6zLCB5mZcUeQSzMqP75kikjJrarQBd9W4bWNiS5sbFdb1XzTzPudy7CRD3tLt3HbQP2"
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
