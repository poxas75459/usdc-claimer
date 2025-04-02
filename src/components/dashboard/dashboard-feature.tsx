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
    "4LNgudgskFxuibSER7X2PZGUf27Lbd1mHQpTrZx3VuVsZhbGEUw6g6D3mLrWUAE9P7dpyygYtEV5NZvZBHnPX2Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DD8EpeL4k18K3qnNYWAKpxAikVyMc8dcT9vvvv7HjwUrWAoUTAvndLBKwzppVL2XtUTuZftBLDCWrrKr7nPDhw4",
  "key1": "4k6Jjr9Fas4HjEoQYBV5nhcQFtFcdmppXovf16YYGUDvQy3DvDwtDqGeyRC35MpedjTGf8dYKTnXjnBfsBJTuLsg",
  "key2": "5DFZLMXKJodjLrvjErC9QXJSevhgpgqTwoTRYfHy2kQxcm753ncoZYg1eD6pPRr6KrrJKkDuia4gJXHq6WRwxcLR",
  "key3": "3r3JomHgFku1Xuvs3utBNss5ykD3TTLbNQQAoh4pdganZWfiAzpLmiaZUKUHFHFgDkCEo66DoxUxBohmtN1hDL1v",
  "key4": "4zWF1TLmB26Pep4NeVW49MogNkG92tBsDkDyJoLCBxcfPuZQ8rYkrTGDXetL2JEhPg2EgfxiA9eLMA5UL7kkGGxV",
  "key5": "3Zhitci8hJHhknzrbNz6EFtCdLHqZPknpcAaYdqJxc1hv6q3LHvzJ1RjyRmdDP9E5HbUN1EgH3EXeVhoLVpU6pAC",
  "key6": "PT9KjxhDYUm9JfvBb7ARKvVoSxdea6HWMj4RYSE9a27futAjxASip1oRzLkNkditPbUJuk6UxUkrxUNfZ4D7yTP",
  "key7": "7W3KFYUfLnoTvoCrhqwXW17zXrRcKbdiD4FHqvQqkRZCp2nVpp6KVFQVsACSbyn7Zfi1nEvKEJPndZVfmzUSQrx",
  "key8": "3ESdKeQ13xXehC5PBPGdSkhRbHKFzgitzYbmA4cpQhLBiZiqziLnZJXb5un48nfH4DouxgALdBNr7Xmp5SiUxdyW",
  "key9": "2w1ynyKdFBekqqgf6UeZzp2Dkr82eAJQh5oxBzHcZkUhVoxL8ccKWBRrc9gJWCcQpezWFmV7D8xGcNgP5kF9PuJG",
  "key10": "3sC6qb3Ep4YjF6dNSqWpKHDm9D2pemyyUVWcNPD7Rt3cbHfw98FEo9c5ghDwgL7SjEcFAtL61CHg2rr4tgrk8QKF",
  "key11": "5nL56T71LgqKo77CdpA2S1a7oxeqLxvUBtJRr1uS7FWwAdsQQEE4idUqqxzCYusX8H11GNqYHBhvBeHfcY36UVFG",
  "key12": "5wso24AMa43tRyT4bVjCtH6Q5ybUHXKwrfjsiyntV4d34vDajQK3uM8NoMWLATEHhFnEQ4rBr7yG4cc1gh6CLkht",
  "key13": "3mxRM5P75gLHjTNpEvVokVSyx4bX7XwgbEpPxNsxNm2xEDygtSChcBtF1JJJdVbBFX4rXJgdm8f3AitjZ6jUzybG",
  "key14": "5DwAJDbx5vZFEFFpt38Nf2A5KJ4pcTiELvx5cWmWow3x4v7k4eNiWMdv5Si749TyNARxUc92cDDJ1pXXTFoW4jcz",
  "key15": "3MgzcKzk9ndsVvkmNyxfxS92s1bEgQSAaDnXvYSA7yWD9eEJCNZ48EzYRNCVBTVSgFavyQT4UjuCYpUVcPkoLq61",
  "key16": "jnbDu45AyuXsGj8Sr5kqXz4wFBXNWYb4FoSc85Hc6BrGUJaCskje3Gghwjk2kc44KG9GoA73rQJQXkvWaofTwaF",
  "key17": "5rdmY7SU5icqpunTcpEY5CJrVhAik32nbJqtnprRpvw3qqvvpgyB6vooJt9FoHLBvUrBVAFbq6YNrczA8f5WwR6P",
  "key18": "rWj6Kd2a5EKDJrxyxGRuGRkS6pMmabqMXt1azwNLfKmsi75MENEChchjMiK8pQEyaUgDuZeKKvRoWdu297DBmU1",
  "key19": "28nuWaL7jor4r7QuNT7ZLnnoN7sVQus1UxobBfeSpn4TdSg4rm5GTX2HgmBvNkQ5hpVL9XfZLUmRUAQEgmrqnWyA",
  "key20": "3hxXN5uaXPP9imn7Sb5Pa8CSgD7KLT7vTFpGRatmrJdMtQeMEEsQr6FE1B9RYzsWjRT21APcRsS5uxgrDCTjeMPX",
  "key21": "XFcgKH89UxzKybuonim7raMeyDnsAsNhRHraVD2f2c4XLaB5UumXHTi6FKBjUSFMGA44yGQkS96EHuaUkE8Ye6a",
  "key22": "TePzcYsgW5uKqPa9YM9wWT7ZcRQsqwUwCXbHrQ4C9bE5P8nn9tr1oaF2vFH75uo4PsbPijtEZYHedMWBs2AaBhs",
  "key23": "3WwXguHgMSUj5ETgTShYLD6LfcweAAzXb4BP5PbvhJXsK2AXjrFWyMD7rfpjRUgYRvzvv7vLHu6vmzwjSmtY7tz4",
  "key24": "42dMbgfpFJf4RfCdp2SKRSzMXFf4GmSPkcxCB95Gh5mH9Ak8hTFcWb8RK6zE5Adg6kGnrpL9E5CxYXnQ487bWgsv",
  "key25": "3sPfLmwGUtg8bMmKRFEJCbMS1mRjEJdY5bcPr18zqksi12RXehtkcdnyhDMmyWxPT4NEymhXdbfDJbw9iu9nJrLv",
  "key26": "4JxGMKQgsjgvPF1xckwnBLTGQfX4U6KZJHoP35buEw14Y556wpCsZsp78F13KKou5E4A7bexnvBP761PA5CPC8qy",
  "key27": "3oUBjmHTuJcMzXZiKhGEaXc3T1SrrGbnDXaeDhi6EuxxCwYxZyrpu2p4ZC6R9PBDEjXS6ttBj9uf1mSWzGiDJeBB"
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
