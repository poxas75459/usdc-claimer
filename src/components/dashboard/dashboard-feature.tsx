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
    "bu8RbFqVUkptMLHcXszcGeEPRggAaALU9KvGiUBNMW6pDPULmyvwHH229sV29UCnMg11ZKs7kaCGBh6XpqpMWYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61xvVgU8qrR5GFsKomQyRiijfLUTx2U8CjnFapnVY96KUpzY6aAM5Hzi8bXCWVjRk3dK51VGVSJD9F4iRdMF7uaA",
  "key1": "5CFvU8pYCLitpHXHWKvrtN7qBMYYpQHXA3KpFu98Azwfo9dZuvjq57cnUCK58Zw9thNvMer6FvQk1GwFzLRTyNMk",
  "key2": "4p43eXpvCi83MUwCm2GJFAvNyYdAyNBPDcUSsifk6jw4hc6ANvGkSkHsPwQp3jyQdqTL3E5kyFqzMaepeLPhoWr4",
  "key3": "6aKBouQvcFKCrakC7uaa2s88RRUmFT4hTebgh685pUn2xwUh2SBhUq29mUjX6whqpu1xLHG8qQNsVjidvQj7MDn",
  "key4": "3pYyPMoCVX6yCe1shs7NoVzTcLuK2KUMVgwHWCuLaBwYjdNFPWqUkrvkEeca6VRmQ88CNrTvrHjbdPf43DG1f2Uz",
  "key5": "5krzdDujoQVEcAtiocZNt7i2KENU17zTXyVdZDNPs1VfEkK4oNrVRQScEwz23PzuRbcy4oBwNVfiDa2pDhb1yvr1",
  "key6": "4nuTLGnrvdN97XfaaDFjq9jrRDigouFQCjyotz5LTesUHWxfzxYr882Cutoazo6L8yWJA6s667H2Mc4PKgYknC8x",
  "key7": "5mtLBoQTBsCy4FivGLGU4vJKsWHJ1AfK17CMHG7fckuVAaRMmKuvqQNge8oKqsjrzZcB5EvdCEamc4Ffs8mA52mU",
  "key8": "3vtiZPiovHYZAJtutY4Qq5mEF9t7YHB6ksjy5mkzj9Vx1stQjLJL8ZexZrkhH7grJPA37uzGr9ZKLt1TkrWxSKnL",
  "key9": "4qsmoUnqJhV2ntM3CBBTL6D77feKWNuW9uHEgP4gW1Azyw9hukTk7rWKqMQEDer5Jos8rmKV4vA31PrHaKprqyEg",
  "key10": "3xZ4GWQijDLwSGPXvp7n4TPxaLXjBu6Gf6muByqefgc8rkCu3yKuFi4B8vdVmmRjv6Tw975fc37r7jzL4oirBHs8",
  "key11": "5NQJzoB6apkaGU6nXPiJbywBGBxdNWk2cWW5q9NJor1ZBDM2NATNq6HbX2sKfUg2p48qCBApYi1HRETGuR1gwy7i",
  "key12": "2cCzBS4zqDWwjTS3nK32k5r7pbAPKMeMfxG4tfUfc16B8C7MN61WfeZ5dVE3iLZtBtWoF5dCJ1UHYKeGaqm7VMBk",
  "key13": "MrBAtHbiGPcnQLvyKpNVi36SfVNFo3EeGPtm92o2PZmZp5tPohYS9hpVeQb8cVXZSG6kJCnpevdjP7ngQ5f19Qr",
  "key14": "5QpWBGNfKzGzrBXjAVW3d9Wu8eMhBqxeaB8qnQ17qdL1yYsbDpRyTmwFauBRELgD481HHLr15CcpeXtL1kUZSRLz",
  "key15": "4yDwsBkgosuPq8LjhCAfpnRt3euSsLy9x8RXyVtbhuyN142HBFJ2bWfurYJovaRCFmyMiKgaW3jkXFYpQ6AumV2X",
  "key16": "5J2tvVU4s9DHyX3pDoj5yci5XLTy9uQJRYTyHMTzkpU3pFcMjY1hAwRmYt3erXcS7S8U9nNVWH8BhNGumTfMmyBr",
  "key17": "3BpmQuSuUKyenDRVSn8N5RwtEi9VpZhuaCP78odpAkH6aR42KXbyZMykLkBfkfRxzasiUNDe2vA6oay1bWL1oii9",
  "key18": "4givb9cMJsVGqYtTNoS1UnnWJk2yEJ8T8D3aiJPB9VY4gbwMJ2USrCL2g1eMfVZPhEJaz1rduh9tusQdRDiYS3vB",
  "key19": "4dhCSp3KenbTcGaC2QJajo92B872PChY9GCR3Hk2uobBQCRwYLrCyqrJhmu78vtafmt4sizPurQLZWVYzqvvXZ5V",
  "key20": "4HovTqxdNsjoaSKYibxjygr58g9ae4AyhRedpAaymS58RgYihKeTc1WbjEhE6oN6vC9jbQx8pg1KKYuHweG9J16A",
  "key21": "3TjqNte26hya53WLXuWYikvme6UCX2SGG5donjWCopsShz36BvGWDguSpxjq54acAvcQRShYEqBH17HSv93pNE6J",
  "key22": "4mDEZ3t4BoDTiqr1MMjNmpXyMa8Mes4hDfXnbTd7dkQNjpZj2LY3gyRTsUFiXCt6CPaaMgYpRNXDjYNofN6SbF9R",
  "key23": "24L5rVtMoEvCse2A89zbHTX3Yo3PofR52aVLLDHqF5QLfLPzWAizpvbasnQoV6mKvTW1JxCec2Y3Cii68vByBnyY",
  "key24": "24zu5JtZqByQAehvk9yL2Q5QBXxQbkGn3RjeQRXhR2qeiiHHea8uhtB2AhuGcyCBZk5jxM7FQj1NVcWvHh267fB5",
  "key25": "czjqjBf5Awmzq8DEdtbHgRj2du7bsaU2fwioMtQHcCqfM8yEYLuQFmVmy9EQg8rqxPWgx3D8Hpi89sHTPeRXzGe",
  "key26": "2DnSPGrSYoAuEC52w3k6BKThNf9GdbUapYfZPR3JqaZ1vezydWK74AkMg6vC2p3jd2FGZWSCwA9j5LjKaRNdvemi"
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
