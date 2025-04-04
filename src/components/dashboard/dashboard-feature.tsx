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
    "pknjTp4aKoCxWDATZQYgsvkMWuU3d4T8X12m8xXxa3oH9crxgpPfXK1T6YfUmGUs1JzwaRBJvq5TGaSgP8KMZAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5syWRVLGguNyZoYAPnkfEsxouqVxTs2D3Xurdjyo5aLeF2KYDo1ywWBzFwGZHHDj6tod2ZZ3THeHesaQktMKgSvf",
  "key1": "4Dmd6kiMDuKSH6vVWMHcFV4WykHBYW3Gg5Atz2Fgi43QVG3dhtfs5aQqodgpwvvXJLMupUKYbWiBoXPt5g7ugEJk",
  "key2": "2Xrca3nesBkUaXV5QU89CW1UqMYaM9CXR8WUZkcETWTxcDSc7nowyfci652fH3FpoBqGDuPYXEbCLwBiQNfZdoPU",
  "key3": "5i78Un1saBaBmt2AhsGAFwqwGvz9CrEjGEHqnJGrMegrLXPsnj86smwtJ9P5YNxR4HmRM1dXdJgU59PtCWpT7iVn",
  "key4": "4yF7aGhm31KWT3GiSV6DQQYVa7EdjtidEPM8vj3QWNoQWK5N13vVyUWD5FQ3Zr3STkr5cbmFqpVW2W8ot91xCyFh",
  "key5": "4tviMTfdKcJsNe4H8AoGR1SMFVwqM2W98CQDm3p3WrwqnM7DR4oPtDoNKGFqR7tN62SsnZxCBbGQLcW7mTjacKM3",
  "key6": "cnr2aKkgyudCBqnUDqtwD7dd8YLYNUrJ69Jq9NG6C2QTHk6AVh2NqbHFA4nNxHPm9ybumTCL6mmz2refq76LvP9",
  "key7": "394DDksJr3DQedh2DncpD4uZLSbDhaGGbpxHu2W4yUJcNzP4CczUviacsBCtmrSM9bygZB6hpjjoYGhFFrzLKovd",
  "key8": "5Bq6XJ3kmRR5on6Xrtqjp9H5JzH3QiqPvwYiTH88tRyfEsmNrm218TxFuDEZyG8Qxn6rHaMuMWb1Z3r1QDFy7M1f",
  "key9": "2QDG8TTap8tqCDEUC4ZvC7fYMsZVnQFGYbqvVCubfSyA7BZ4DAJq6svwrUjtxVCCyZBYyhnWHFSRR2HkqANJ4qyk",
  "key10": "4r1RVzQuyEzkN1RFX7ueWZrcNgsD4Asna85NHTjHZHZo33j9UdiKpvzKFxdXbc9n7uDGdf4r7LKGQodUp7AWNCue",
  "key11": "3H9prm5yJ6rzeVXU2qDw5xwoCn1nQwNCXaGtYjBAgaFjthQMnQGg5J6HMunpaxnXmL93M5bjkqArtP9k6H18dyk7",
  "key12": "26r82dse95xmJFWTsN9QikuEur52yFxVuYA7sq2Egt3UutiHYcosmfyeXHjrtT7sQKE98XnLpa6o4Jzw5GMipimt",
  "key13": "4nkfYbHqJqMx9fesebGp1Abmsg6R4jZzDPR69pkatJRAPUQdoQWxwJa3FEfaF1kgRp3ZtQZQbNqBZLwBaxKyU7S4",
  "key14": "2ccd8MsQ5NGMrj3YeoSb8ryC97gBnDwa7FjyXrjEX9Qpri51rWqmARyiW2pcKGZEPsu4CVq79qdkeQ5S5wubKEGF",
  "key15": "5rrKNtszM496qiUffCH1rYyDqHN9nyTVuUUmVzE3H4pSMtNe6Hu444ug1wsNnhC4mgQES7YvFKqW2VorEiHkSatU",
  "key16": "51VXBMut9wCJvNVkU5efNT4K6XT6g7bLVvahXzzPxg21NkEAp6sH5TxS3syaBhr9VA9dS27LGXcwexzJNut826pZ",
  "key17": "31bZPEqnqamwpNK7gGwAUcwE9a7ngwN5t34QuwoQvPRczRKjLtPcdiwxnjsYPHJ17VDVWKwdKYP1nRKCrL46GTNK",
  "key18": "3LcLhJx4kx3ak35iCvNoCzhwGwBQy26qqrNsZiq2F2AKJnk4LEn4kCamA5wex1nPZAvs1i6PM96BaTgkeZMtW2Vx",
  "key19": "2LAxL9xYGXsFf1ZCehBMKcKWS2HynBd7KVKZHGGMYvrJTpVe9yUwy5pQZYJC7C91BAGmXcDoucjrfX4U4qb9KD17",
  "key20": "3c9tERnYnc3wSGmdVCnQ14hVF1qErnpJNNa5H39c5ggszwWgyLbu6JTmznGLSZ2nC1uJZvhN7FFFjKiwQAhL3JcG",
  "key21": "5nzMBDpABnhxAYWceoZm3W8KSGi4UrdYVsUnaTMcuctZJdspXdb39xiCsPQ6UXbR8HS9QwTGby3J9MBjsxB6P6ao",
  "key22": "36g4kCQmVv495g4CnLNpPd3HBaj9vNykJpk2L2roKd79NjaiLzCppE9mXxqNSrwTQW5G7812hkY8HQ9EHu6ndigR",
  "key23": "3ppbbS78xJZsNgptKXe5egAjEbwbXxXTHos93iUpaT3CqjmeGvDqYmjHZp4M6urtXoZaS2cxUNLia4SZJuzEytPW",
  "key24": "4Tao6kw5k5WX8g6Q84MpWBvy7ASVGzhxSXDdPkANG1uFJYQ1Bkf62cHGV8rSoUS67EzxQwGcb6AL4yHFRScU4JWe",
  "key25": "5r1Kf61RKqbVCTkVxH7GdTg6WCi6o1VTYEdBDNM1yqHdf6o7gSU2sEDYsL3yChvBrqJnq1UtQbu5ETHTLBHZ3GhS",
  "key26": "3ePjjtnJBWo2VFMu8WkUs4PoWKkCFvGGgNmhu3p4GqLmk6Sbybq3ED6jHxEfLB4U9Bnkrzv3E65WELLvVPcxEnPt",
  "key27": "2yJrDW59NcGjLFgbmj2H6rSV8deWuHwALjLzZW5s6n9PDGF5fryCebdVEJQgP826VrsoiryeC7xVp1pTe8AFuWTM"
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
