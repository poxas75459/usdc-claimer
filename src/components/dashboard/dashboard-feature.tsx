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
    "5StaE7iyrxJRs7cvH5fJkyAV9r1S2rtB24oKpCKEsSV8y4ALcwfjmMPiKzbyKCtKrVKTZ6HcVy3yZDFhdbd25PFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JmQqRkekdRrxTeWEabyiu5q8XiaT8qKfN98V32BDFJMi4eVU5CijDm1nSMbv6dhQzeZwWChRbwsj2F8oRrEeMgk",
  "key1": "CWQjQFoxQ5hxidd75gh2R5Pfdd8uNnKxw6t4tpT8n9xnGV6SsM543DAsLE8jMSwBcCGidyUY5bjaJM4S3rgKvn6",
  "key2": "j4yLWwvH6LZf2XKYvjkty3D9QkvV3iga1AhKNMnoRTMUvVoFE2sk15hM3vLYxtFA8pKoNK8tNiTP4JYpRhmLnUS",
  "key3": "1FAgiWD53RxfzC8UUkzvqPdbDM2CBJBPhFLi8fdMvjcXSorb31HFoewhrrqBDzXSLFghyd3HsM9VC4PekBhDti8",
  "key4": "2csrQbGyG2AqHDZwuJ7tsQuJ5EgD73VgHBSiGcm35VqFDn9T2SYDABPC4bxfAo4yxfvX1DKjiZ3zfqvE84HU6Gmx",
  "key5": "49PsfimUGFQWjcnpVWfyXXoysNo2aRQLKmZR4PfEus3CS8hzbNymRn8bhgjKTNpGiu7XU9YC6WUCyHrFUWfqksf7",
  "key6": "25E6rghChFPfAusVxnvZg5V3rZP4CiUUTNKcdGB3FwCiMsEMbD3uyap4Xrd8oqBop7a95q5Qo6THJ4Jw76aebcSV",
  "key7": "5998aruSQaGe8P8BPqANPkLz9R91R3cTvGyUgtDTCrLUdsUXw3VywkpoAEpFroEKMzWEqf8aFyCfQjcRXTfkUd5p",
  "key8": "51h2cJfJnZaUk2KsUupsB4QZPsYyFWYJsHaE3C42RDTH6SZvyVox9vpj5Sunc6zVnLK9Pd5GBLLFBox3VDYMEV8D",
  "key9": "3qbJ7S6dxUN8YWSqcrCHQJjBb8L3fxNBhhhbMrporbc5aUMLx7LnThHmkBR1hTaQ8eic3tKcVjy3C1gwKKy9cvYE",
  "key10": "4KAetQDQXxUoKenLBWUi3eL4fGWd7349AeZ2JnDY72oF8ao3aDH8KE8T7LMU6D3eFfjhCys3PEU4GU8WCwumA5d3",
  "key11": "5UKKr3GvYVBzuUVd1tjq3XFQtLCeWCJY8hsoTcG2J53FpZ7Bbpzs7QJGuTCk1a8v5cfvENYFNypwf7kHvg5cTE11",
  "key12": "UZiXsWPKfNMdn846vnk58N6TJ66VxUSCuryUHJKcDv8uFmEzz555pqpL6PR3f7iqwgwzfRvPYodU7V3LVZp2ZyT",
  "key13": "34QPrP1rZyrTWzhocmo543cSgx2XSwY4GchHUApQ1NEabVXFTFmnYiZWaY51GjWHaTtM7fp5zDyKq77fsipgUEgs",
  "key14": "3BSQwL7t2pn96MqauKEnjaT27dU4ZDx9ow7HikUoVXUvpDfKasJNmEMKJMog3iCtG6FkRMrVXhfvW5X5rumMfuaF",
  "key15": "W453d9V6hy62jjXfnmAEAjAX9VA5gsRyD5zrjX35msb2JXGp8VYaqZr7AAQadVNHrr3JkC7T5Kt6w6EN6kzZU9E",
  "key16": "5bXT8pxmsVmTedPrjSYveSoVuv47Kwaqt7183B8tzR8yHnmoiUYopMTozqsR581XdQydeMFgtNpr4g6ykcsCvM5p",
  "key17": "3985ddE8GjapENahxSpUJupNQ3Qg296dhid8sG6BSgxVxX9dQRwb9ETRtxUXyioPQndShjddindPcXnVp6heVRD1",
  "key18": "3r6zsjTNnXNujGk128kAHSrg1JguE78dsGvbtRTvPAiX6ovgFSAweW5u5h5wHdoTJ4TpUpzLiCPuiVFhjXBPwvSb",
  "key19": "2hP7SC4N5UZz6rpdS7fTkdDhFJR1hCo27HJt4wdJi1HDi3meiDnuUnwUtJVvq57BZLDrVxRkz5hegSfm3qs8zHJC",
  "key20": "5W8DKkgkVygHWiPswqKvG51jKcYcAt7s4THKZ6SegVkQEJ7dUPEh7e8Y3YabnJhDKL4ky8ehuURGXUBuWVs9EV5d",
  "key21": "1AWzabw8dEnnAiq6Gk5MHr8J5CDAkcMqQUPmtRc8QhQ3UKzooXpg5p3zswJz7gdBaL48W3VvE9vFFVRPqKMqNhL",
  "key22": "4FTxUCQhQZsF8Pm7isa2dKiat3qsBFaegXMgKatYasKezhi1j1UkoV7593DMb374bpC76AojhU3NxJCxj53yvzqL",
  "key23": "wh2tSahXLfwB3M9TzjcTbnJFRceCTpQNovs8nr6rs4M4naepvmiBtMJSqbFoVu8SP2VAYPGoXSB4M6mZTR2a33U",
  "key24": "3dFR2CXBRR3ZkXhrDHZtaLDKgBszbWJYmwXVAjj1TrSYgxmaB15tB8GnjhgKQFBzjDwFabzrcrV1mZAZKWYFh63J"
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
