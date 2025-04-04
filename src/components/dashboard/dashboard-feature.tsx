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
    "5phDG8cHDpA3hJ5oSmzB9RXWuD8mz9cB8iiBNPXwb77ZqvNDp45uw2y7WNmazrFqe7GgHZz3KVY9uNAdjFm56TpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXLDBhdXFyxYYjjYGtYVLnkij9jy44ohB4gXMQi6AidgmgZWYGPPawW3EE4VeXABjVxDhKQwjm6KUcQ9vfH2GAs",
  "key1": "4N7BUJuwcGKEPeBwaN86DDShZGV8BMaitc9691qq7BHiimZyXRr76kzpmV4RmTAe6ETDHk3uaze3ev2pxxncPWrk",
  "key2": "53J3fhVdLcYVuULSkGGoz6sPVjzZrr87dAgaKCxJWkkf23nVrJCoWSY1PsoizxL6ZVQFHPbKjXighPKkBS8i53NZ",
  "key3": "3XULkBzjEvNwqj5sNEXj9hywc5u89VaCRqKV7KdCpxMwCu1gzBbhjB7tc9NuzFgvrT829WctFDV32beUwHcJGKVb",
  "key4": "2XtNauqyzVc24ammM9wkGWaW8FGRnMcdHvCPDh46CiAdmzzr2R21mrh5BsG2npNoMBEZUMH65Ud92StVQSSqR9eo",
  "key5": "3uodQ8c3XsvGRTdss8zKqjbhQpRcg3Lc1yr1TzeLihHYfJKAUCPcUNGfEw2W4buwretrBLkPgLYcViHfCB3XBpnP",
  "key6": "4C9RJHg6pLL7oo61wFb9DCzrACMgPua5cgAESCt8rr32ivSFRv1968UXhpgm1rkuHh2WYvULzucvdGvhX3WzY1PN",
  "key7": "3JgFuyjSb4idsAENbDToyWdWyLAyZEdXrPSN8YHu8AvbmN9vWteEB2to3iRt8wPDAZoXCycC3YYBGmRGrH1iXDPa",
  "key8": "v3tTQfJHDuzeKfJCPncU75PR3T6jf4fTfr4KEEoR5TwYrhbJuDuVMY1jkMRgUsETvoV7rwXTQ3zRQf48jEE2jnG",
  "key9": "2N1UnRi3Y6j32FkH5Ns3UpFWVCFBrSNXAd1XJoYRn6cmn7e4Fwhn9ei7H1wKrKNT1iXY4JLXzV9xMGWNMP1V1sBf",
  "key10": "3daxBZLYYo7MdtRiCnaFco45hnvBfwaULszKiN8e5Sax8cWWK5JUi9vR7ooAfyzK9iCuduzXgonD3DhH3kuA4hfM",
  "key11": "2KewXbvuidZgcV4Agsq8FZ4RYdW8dS1GESpckraDJgUcgiZEbdNagcUwDLo4wo2kbD8wtQ66tjBkkW6VKktRUjVg",
  "key12": "fMh2Q8UY1CgoNpQdezU27AcN2yh6UbqZka2gZ6LWXKYrHDzLxE2UKtKaAFbNoeKtyQxhVxcwA5azLmJBfhmMqNb",
  "key13": "5vYotGuZvadn3B6jUvKnXXvGoU8MsiPbsNB4F5BSCoWC4TjzRyZYaCH2JDKmG1LT4iMxiYfxA8bsWM3m28q2MEut",
  "key14": "CNHFonyFa3jhZpu8VCryR3ZdLMJuE4nPM7aXYeCKjDWKPfpCtWnvpG7s6JzM973VN2SyjfMJ9EThczFh7NHPiBV",
  "key15": "381HJaM17jq3xheSrw211RVkpdK1arq17znndad8fju1XNARDXczscFkoq1iRvmmzSBPvHZAuhsprkrH4kUeewvk",
  "key16": "4q33oMzEqr2mPBtQHZVfzsdHY3tb5c5FARcVYnWapD7g4D1RtPjdSD7Gxwr84hmw7mqhnuThtyPmBq6gbLeHu6hc",
  "key17": "3vjdeYxD9fQB75kHPv2NyG4Rs6q2wWUyt5JbZdVMkK9c8s2jLErdheJAaAKnKsgso2KbexWKTNDqPdPGTZjbseYC",
  "key18": "5WAAhK32x4STKypX7SGahGNySfmuCxWqja6xv774Cx66JZqQ2y4VxzoK3VMPAFnCfgX4QgWhLAnJmP71h2kHCtQs",
  "key19": "4Wq1AwzXTGa9sNGaFY7dTX5bGCwWqJ76r4yUSbcPRuFz7NmLcHcTJebMFvYUR92KS2LAJLBdCGcb43qviW3mW9Bb",
  "key20": "59yYCDDQUVSGUCUi2aV55Z9AcQ67UusvrY4XGLDobvDkaMkbV7AjL54wyDX5p6ijFggdbj9YwzDBwnTb2PCGvv4a",
  "key21": "EtjmpVzDNBL3fMAuz42V7HaH7Z1C7Dxn3zWC9NCEwdGeBosa5aVwpV9EpsGNpyj4NM8rgvg9wnPyEnN7i4SPAL6",
  "key22": "2dbupHxpjGN1wHnWJv6Uhc2HNmV7GcsFtzgm2YXoH4gsq4M7ZunurbR6rMbUpibgtZEtnLY59H4yfxefEMtBCR76",
  "key23": "pu8aTftYRiVisYVgTGoCZVJg3vYaqWmQLnuFZrmiqfcHYMR9iCEEGh1duUoiTqkCxxVJNrBVDJcT1xyKba27PDm",
  "key24": "26us3N66R7FQbhDoCzBYhrhnZqFziVodZzwGp5Cq5sRdC59TEUJTbh5ZFvZBwBP1PXNwKYVKi1Zfg6CfQwCaFoS3",
  "key25": "Pbxo2sCii8SDJ7T86Spjnb7ebqcBEqhzpmB9VonCiaUdzMBQaGei4Gu8VUoq75xtussSJzDuvxDppvnqazLtNNK",
  "key26": "2BGqD7VjkoL9Jf9S22vnJ1EAn5f6AeUHkeCP8ZANzKQP3q5hcFAa1WEf2CGr7jcssZq7uj6mWeSuSbfxsnh85bLX",
  "key27": "3UbBFYNoqp3MGMcGcRrQ7efkgxnMtYkJkuGqQyTn5H5r8Z4mxNzGbMyW9GLQzF3F1jBf6E7LzHjJZhU5dQdywUKE"
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
