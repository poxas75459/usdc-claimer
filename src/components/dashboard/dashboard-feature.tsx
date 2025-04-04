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
    "4Paa3bXKB93iUfxcYA2e35menmCou3gE46aU7JyiQuEpP7mB4rnT8QMteenkJBbf29V6XoUWcBnNimgwLWP3o81a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBrtaDyfbV8tx2WHg9pEQuVG2dzLvWNyWRquSMjAwPu2KgGRjn6nitRPffBh5PLswde5oQj149vKP2DJwqvivgf",
  "key1": "3acF1vX65BMckhTJ2sGVAwgFuM4aoV9KiFkrffBWDbeFeTT98RSJzj8fhNWNWMM81dCFRZbgL7GZKbqhpDn8ZeZ4",
  "key2": "27jEBM4jRuUtWt2XSo49ENGYkyPFyzPqqyZwqVpF7WG3NLVnT9xcRbnYt1n3xrs8ptfcaekiRwiXA5fc7T98Wicj",
  "key3": "2ihRvj3qmbv5LzFnuEPejpUh7suoHGP6VdMCTTRH57d7gBiceRwwPvWZw3n2mGJ5x7rnXQrJR7YqAPjxhrfAthdg",
  "key4": "511A6dEntgSuvwvbsEgfkH9ZF7Y86hQB6tJ5WKCXEJ5AiVNGFrdWR79jnYi5N1FhvNxHVqz5QnPPwxMhCd9LSDk6",
  "key5": "5uqHwviBySTUFzw7pGyNig96SS5ysRdUhapsGexegfSyC3ibc5sbynMAGxGZCMFRQ7pdwosA3r91YWezmEuqZ9Fd",
  "key6": "62rGBwFjgLQyWo9zqvdaRSWUqv8XvAe7nkDWaiuNgKNQfmeSCu9bfoWgptpr6u8ZGut192StzRLzACuzHTeEGmgZ",
  "key7": "5CYVKHUNPipqqpRkVCbSNe9QHrqeVmLqrUoJwaWfKHN7nXBW9ShY9YhoyLFdcGw11UoxrFHLKv4hypHyEtc4mVyd",
  "key8": "4g91V1mUouQ75epD1wmmLzjHMx9AucNfyb1oxGbYepQVgKGukM8AfA7VSERxKyHjUP4rCHQSHNSpy23W5tav6xCA",
  "key9": "SdWTmd1cQqmpF28etyFyBG3N93Bn9PXrbCQUnpbDjbUanTcyFSnsieo85oEeMSCiGNpUmqTxC5NpMdzUBsKhAXZ",
  "key10": "3s2o6JR5F4K5GLJ4nKVSZRSVwToGaPspi7zj3eRwQ7ons4aSdGh2Dvvjjwn6Gc7vs4eRrH9uhVAWTirg6LGagHyp",
  "key11": "3ewEP7pZR5cvDnHPgwHRfjoNAj9ZWAKYBmTERSMDf32rL4RJCbPLcqqKdnjvu2fex8BNps2dbP3QaBjDndePH8Ba",
  "key12": "5YhV3asL9LMcneGFHS8d8ypiy3if1aDQE6UCvqutWwZsbeMkwmMS4rL2YrEsnme95rqiah2ZevbMJib9GCwyvqQd",
  "key13": "5QYB6qPfdDJz5wzF5bkEFpxSEFkReCUZNxbrjU5jM5ABKz5FysMBHEjU9vxVYHGrhXoan5r8NbKzPGwZqK987mf",
  "key14": "3R1HvdrHsLDQKXgGYJJFguxYZ74XGChwyFizx3vRExmjaGoS1evZzDjMuuVPk4gERv5QXMvN4sxKEvuA2G9tBEzu",
  "key15": "4wfVVUfqV53BFr2pk7AbWJBqrupE814wMsW79H9wardFVxsfRADfziTBA3dFDrVutP1KhFJDVECGpk2kYRC3qbhU",
  "key16": "21JCi7zzoqRk4aNfKzrkj5eFFuYWH2CYAnzeAG8uNpxUHTz41hikHN6Hpxzi5SvNE4koX2ktQTfFQFCppjAwVLCL",
  "key17": "2mu5GS14PjBEEMzUh91ets3rX6Kv3Un8ZUMduvn6b3nZuWbCUh3XPPNYtEn7ysyBt9ug4x3yHoNccu1e6WDDjDR2",
  "key18": "5cBDziwokTHduDCrRnPWP5Pg58LHT1TZwCZ2eZWifB8gYY9KCmadDy8tw9WQPt5EUyu3e3QLtxFLBDwuhkN72LL1",
  "key19": "2RjPGNyyU7zpw5hVtkTnhfHatsuvtdazvU3hKmdgQgFaxGzy36C3cDkdqi3o15tjHm7NguSYdPQJ674FS9Jjb6cA",
  "key20": "3LpQjT2k7ynZZ8syEZ5JsehLFA4TBtRtsfma5RLFpEr8h6WMp4o7rFH9JmetRQQgkjMJscptD3hQe7TBTzmCKqj1",
  "key21": "5UxLPSozLwNWU5res1CDtn1J5WjWxuC9m67VGRPucdiYG5UCxXxPreZsCmjkDNTU2pNJoQUhKXNVQb81UWU9d24a",
  "key22": "4cKLzFwY1sSDFfgf5Ms49ZVvGVeAPqLHSfu5b7PiF6rvqsoc4tRADv4ziLdYwKLvZzch8Ggpyzzc8rNAvt2fHdFR",
  "key23": "4tvk44PHpMGdTzDJKZQSgTJA1znSqw1Eorx8ypfSjoa65dzhC3yLDF3wghstA8mibHLbWSd2LJrA3x47m9cace7B",
  "key24": "5XqezFe5Ke6LUx5r9okenk18JJWh1mpqAVySSMuMYYWx3Dnbz2RDA5kwAaZsnAJ1wu9AG8L1QVxE7m9aYMzSt23e",
  "key25": "4LjXKwwPA3yPVCXSo2c9fHHpVu6vD58bo5FUK8NnTzeP1wpcFDNYve86V65yg8F9jr2ZbDTPkTR7AFxZVMyn6WYX",
  "key26": "3EcUjxX883udUg24J7fpJZC1cM3vAi9q4PFNxyNfeRPyStvwykSTAtfqmCxdMqVqVSdRKfE1Lm4Erz5kbKZsbGcM"
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
