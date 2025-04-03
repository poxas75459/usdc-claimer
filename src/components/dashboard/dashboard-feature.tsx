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
    "42nXLMGGm5vTVU8UNTmyLEcj1AH3quCNraXBPjnuRpaW7wMi9BMrg8sny3yUq8Ye8zP9ZJxpMG2howZJ8sHJfNiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wnXmHme39N9oPBFdVpmpTmNhT8p9Kc6umVavYB8YoqQiTquZBht9GEFidj6CrhGbjwMyvqKYn4eYJBJ8toFEvxV",
  "key1": "5GcX43HvNbrEGMRXoQZxFMqSUsRZQJEm4MwQ66jzre9FyD4ts4nKLmEJXj2NPr3D7Yheao8uCGWUsscXwwCxnXHi",
  "key2": "4qVGJUXFG95iU5ZoQV5WE93yQshrPJiAnraFFSgLCxfP6fH3pHW2Rmb6qVrxsGxz3zMamgKkajUfEUpwSD5DShRp",
  "key3": "rZZi7ERpU14eTsxgoNbpeaMMu1EsoUsiF53rZpwpm615zYDQ5AGo7u4Baxt9tHChGqAYhnBvCuAn3tUwHvGMeXe",
  "key4": "2uDd8NmzCup8tPSxoo5pS3xdc5TS6oynMgNH2DJVcnLFrtKipdaX8jcury8AkupdDKiawPb2EQtwXWFnhSZoMUTK",
  "key5": "2AYPEVJW69N4SNe1y7tp7aWuXeiAk7Vzts8YFLZoYoDWVjRnLYXEooDKw38NYKCQQuMms5pKLSmHE3hZ8gzvBPwj",
  "key6": "26oAwwRGW9eVT72WBrVkLiPFczwNz9oVpsG2cw3iijq1NRm3DnLfHTcXxKKdPBiwz8FcnGzBauewqZwW8BaitLzG",
  "key7": "4Rctyszb3gEN1oa7YVSpCCQhGEgsuBrhu3H2kDfdW8gnR3ebGAs2i6fso4TnhcgfqCqhsiVh2w92fouybP8cuayn",
  "key8": "3sxjsEQwtXRpath4QCRkqbFRDwf5bEunC5g3F9EbE5tfiGvJ1rSLcd9hzEED4oNVysr6TEGFoWkEpW8KUKgPRPGd",
  "key9": "62ZNML6uMNxQf3HQZeNKAwbu64g2Nem8188hmSPMkbH4c17p8oAVAbVQMKcsaC5kJtiWQarMd74RfcM7CiKGzjRB",
  "key10": "5wwEG2QTTttZmGn5ZmjivxwfL2WJ8dxYD6CH9x5tYAgg4NoDAdgjCTgYYthrv4cCEsnQaCEKb4h3cFrxPUuxRk84",
  "key11": "3BfSucdqod8m6jzMxa3Eh2p1kZWineKVVZ1B3mXbdbFfPR941u8NP44Sw3A92MCLqFMqkWy16cCpeKdHB6pNYA6n",
  "key12": "5gDEHFL81W4fmbU4zxLwsE5LRH9fGLCpm9iN5Vou6wV9dbjVVfzdBaq481wAMB6HcaCUjyQdrGU22Kxfmnt545XT",
  "key13": "2zgD7t6N1aGPVnFcFNhr18iwXxGHXsFozoBQZht1Jj9Ey4zx483PE13BCBKMqr2f7tjGJqT72T6tfiD5v4hEbDS7",
  "key14": "4VuJrXJy8h6ERZxsGQi4G7abfWGn414DVD2XGqhR1WSrbiZkPLeqpkxPCk79BiZUCozBQQvh3spaCg71AwHLMZcZ",
  "key15": "5NYPjFbhrsZXrzGnKBEg2BT3yHwQSwmdxvnHYiMyr3Yyy7V5S9WZ25TdaBauVjANqxXGRvhpP64virs95RR252Ez",
  "key16": "4VfRoE5SozRUbaUHW3FBZ4PkjdSv7uyQgEBa5HTW3Qv1LrjetKkB6HcxDRiYp45M2zQFWoAH4HCDkM1je1jESyWt",
  "key17": "5eADJwEvXoiVo3yVdFa8yR5snmizwRMevtb8xEj69uzFCyjeimJwxjKPtYKzucLgFoKeHhvEvzS6t1m5XGkxnB97",
  "key18": "5TQuxYitoBa6GxRuei4DTPoowjqKWW8qxs4gQ6bwHEWy3zjc7JLT6e7RNA4w7vTDK5T1aZ8tP4emrjMeckDEcqv",
  "key19": "35yaGB462f44pX1irgkEaipjdPvXf7UMi9mv5cHf7wbSSPSCehS1sgd5PAy755wDgzBp2LUJ9e6pFyhZCg3Ep1Wb",
  "key20": "4FU1bFxUnw3Y6W8Afg5stY7L9af3SdvhCptSR8JXocX4TTYoKfN6XFv5egoTQ8Ud1ZBULX4k7pMHbBZufAR9YfRW",
  "key21": "6513spczf4f191uEi2hGww698b4MgJe4wWCeHvNyCdbutJxsSLUxEqgpA3NP84nSCw1FQpMqLQeFTpjCW9LLuhf",
  "key22": "4t6igAxTR39WXre5x5j4nEC4ZzoqYm8xipyFU7USR5MxzFrd6gEtvEtdqhfyBEkm144ch4ByJXwBkswQnoUAgdpv",
  "key23": "23MLFkLZvy89PhWeCNsngy9Uk3Av2BcBkXQFsTmXD3CFAKEk5zxRycGrgZXRSbK7pb2qRHgHRMe5L2o6szVCTbvr",
  "key24": "3Azs3S1NkR5ZLXb5kZKE3Y3NFXYRm815DquDCJVd4S5ydSoGiVMMBSp2a1heK6GqNEM2dccu2kooVHGuKoXyyCLo",
  "key25": "2C8wU5vDQGGx2rv8x7rkb6aafxv688o7tqhMNUnS1GDwbT88KPnjbmz9i7FXMn4rHn1P6x48X9DuHp5b1NZxNFwq",
  "key26": "LN2kP3HNGwNBhkxsYxLBKkdqHPcF6BvUNi4T5nm7bGm79ZEbiqrfHyFVhVKNyUho3JnnmezR8mJe7zFfQRke7dv"
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
