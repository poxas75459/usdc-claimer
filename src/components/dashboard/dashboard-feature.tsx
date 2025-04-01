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
    "3hZY5H7ravVQfg5fBrP84UmSm4j23LbbB6gYYvSg6LT3yim3XemTcvLh1h48uJqSZmxTGw8HVWVKSNNVk3uo6bgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PP5Tom3SWUnuEWdC4hZbBAQR8g6G16WqYc8tqUUBdDZr6ThmTPMKmDwfoYShisCrYN6tyVF5JzkffcvbXLwif9R",
  "key1": "3FUMJWoT3iHw969AJc52D7LSnupk3XMTVC5s16TPxPpj4dJtA48TYW2EDVbK4YGSHPPZP2AGQAUJb6A1Sj3ovCe",
  "key2": "3PNN5nsAy2dChNUfParu14g9ZpSqkQHF7TYNGk1TJT4ByqUJntHinAS4SsvmWHvc8rNifDp9cfyDc7twZd59Acsx",
  "key3": "2MwrKAVUtW4keMXPLSPHK3EEEKRGrWePj3tJ6HtZJzbiSq3xoqvBKgeA79e2eCuX8GsM684Jw1bSjM1iFYQHrFsC",
  "key4": "3iDGmsdQ9t3iNu6ZEGN5W2VFkfQ78XUUUebdJ8vsusiEErhFhdKRJBApHu7qZ16Et5TYiirhawaD9mHH4tRnkSUm",
  "key5": "5cstsnEXkW6BvMjukBmZtZJuTTUmxkQwCR2Rutmk8gqW8janqzrV5H8F4oqFNYnXWSk1Ueod5AsAvVEgPxVDsu7U",
  "key6": "4U3nF4HwCWaAbXxxS6zWbC6MmoDbY33iVVbym5G1LUWJznrB1M9DxTPRAngGP5Wq2fD516a1EYPeGxSyLKWbeomQ",
  "key7": "3DreDp5oPFAFS9SdzuAJSgHgomA4VRueWQ9NhamA2jmc2k1M7f1CmwooYiUVJYuGzMAyx9MfKf9TrxTpf5RaHmqd",
  "key8": "5zxC3WFAd2GBr3K3KrqzctLrHEQeZYftGvQ3JF9r8guwJw1HvdRj5pz7Yqi6f4XM2jivchE4LYegCdEx8TrJYkxV",
  "key9": "346gRsrU4XrHU4mWfrPpiPgUiFCSGu3ibPsriYcVkkJkiPmCZ8E2LEQ5zBh36o2ZJinYeBnNGQmHD6PkSY7kjUfw",
  "key10": "BcWDyWrzbVK9qc22EPShk86r7ENZWqQ7XMwfn279mXr7gGVepqZ5LJ4b7wbqbn1bUwRGSU3rxGzeStygb754X8m",
  "key11": "r66Jg7cd3fsQnyc3Ap8eoiQ11efXgYPddXpap9iNYTR1rnsMAHcEX8uKdvKcRDELQhLH52EvGaDzUbvtpVhC3bp",
  "key12": "24UU6LnxDhf7kxNfs87a32axmxsMNEesdtFsN2pk3BxqSnU8DxYQUafNFGpUcVpGf29EGsVG4tsYiWRrWFs6B5bQ",
  "key13": "5HQHJgfAnPgGZD41XFNHPJ8xdw78KxsGwN6W99idTP1Z6fUsjn77NhJFkSHsofGSrAY9VwVgZsyvne6vPp8e618M",
  "key14": "5XRkJwyVFHDzhAzc4c7mDib4rTCf7a5KUYpfXZW3xixFfDKjFCsbkcv3xxcTNut4DDgpH6SeJZXauUVsAUvBbfrc",
  "key15": "4HxSCWKj79utR6xtRCGfav5uSuXb8TXEYsWsr5SGf4SzNCWndHfjZjxh4HKto2U3duXYD5zHwg9sWsafo2Yh5DEc",
  "key16": "moQynbAcr58QhXFi7EqfCDidCg7X5WYVRtb3NGDfGoQn3fQY7SrWGUfmS2RC1Q8HWyXh9gGsLcwrwqvWn9ykj5T",
  "key17": "4MKcb5xTLJrrr9H4aJwA86v7UJGjDHJ74Dose4RK8XitBEUS2C2ejM7Ce6agJEKMLsUmgCByz6mF3MUBs4vwhkfc",
  "key18": "5AL1ETVwJrCxPinScifr8W5U5Pkp7H6p528QmPAZE8CAVwWcHbcGeQ6t4BwK1uqqDsKk3r8YSQ2kyHdCxMzQxyAZ",
  "key19": "47jU96SEkkc3e8Rr7HhS6KAV99K3oPUrAhwTjdun4VeYsQ7UN2CFs4GBXBLzVqQVGX89X9WWb7HuV3zdZJvZxWXx",
  "key20": "2JfEbuD2KMbZw1fJps6SPQvBRFK7HZ9Q54HuymZxTVL5Zqm64nUCMDTRwUVxyfRXzBCTAztPbCLqyBzoPQNgwL3X",
  "key21": "4nSHDx96eTws2NjHTRRvc3DbqLvFZUnzwAids7PsyTJbx16FdFFiYWWpeD3mR7GMmfuv3jYwHihoA7BaCEvh6k1r",
  "key22": "wyvDkACAYvHhPdScQiy5XiPmyRKPQT1WWwyD5CPqcRgaGAsLV4efsXcPEiPEXvJbXmfmLRAg1GzAZaRTigUzH2n",
  "key23": "29rVcNCnUpxx2PYcTZQPqb6ENvugyGm9i7f4KghTLhBbjVwLqcRF6NinpLSZLFY5LosbBiXK1iXepkjsMQo7GQTn",
  "key24": "Mbydk3Yj8zY4uYtAzAKuDh75QFFMqgP8FNLG9A8p7dnSzRspTh5E7kAiWqDc7eck9UY1yaxwksHhfecYEtw13By",
  "key25": "55aD8zAZ9neUXCxMzk3jovcbRzEEe36xd122aco4YJWPEM9dqra54Xvnv33bwnU8vp3x5rwnoRWf49PnBTZPTG9m",
  "key26": "4rEpt4ZRH3GEJxrnsL7AbJ6dqe3XFZycjATqKAJARhaWtHTsGWurL9bYtmQd3x9Q6o4hE8vUtLeEB2s6fQ8MomE5"
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
