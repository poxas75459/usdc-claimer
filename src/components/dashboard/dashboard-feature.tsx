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
    "13C3MNYAHDtKoKpJ6tC1fThg9rkXFG3ZpJvCmHjqNSdkNnwCFtah1uUgyMQQPJb6xmEwrquoULsYabzRyRRueKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29wk5WzudSifz7XmXE9FWNxqAMWkn9xXoaTxaxC8bPBcYJeLYWtB8oAhcmPvhXnohLDWDLwuTD6Bsuz1mkMWqL31",
  "key1": "23yqprmd3bUXEc6Z1ZdMn5ua6sLje373y6WJCXtwtZbWMMdBfMGu2yDQoeuFsRGFEhNw79CnDPiHbEPHZmHnrTrm",
  "key2": "4REyMwrGzEE1YYCe5sGv2T5WYrNhMqftTnAgTMH5kc9FRyhf42TpxoGvKWZ9ExWQxjetLKVseQxLnaQhfDK2xUA8",
  "key3": "2VzCuVFT2aNQ4FaAftf4wD77bTyzoZs99SyU1CSfVKVyJugYttMjaKvC5Ub2sbDnyuaWo2ahMcvtN65S2fwLoeyw",
  "key4": "3KrS5eAXBP6cKJmRokaHobHX6MJ3oFau2F4HuZX15DRkB1GW7cspNf32osK3eFqUNXoyGSnM1vwgtceRjGF5uL5p",
  "key5": "2dQTr1no6GgNfXxcBpedd9oW2Cckez3sbRoQmwdnDoMdJF72sFmK7WBUao9g7wFomkgqvi4wmTRBXJDxAoUq9xwn",
  "key6": "46aPQZxhcgoM9PTrUFNx3stAVtvqk9Vnjq51rFaHg9x8SLWkE5mBtXPRSKTc4gh9HwJ3z2C4tTwKhPbQGxpYgRpE",
  "key7": "3DvWvKyk6hqA58JMEj4NB9Kj3eDJ8BFBu7Pmoq7ABEbRWmwcGKsrg6pQymZFdCJgbkHYZD1woQGaRkpTqeLapoTA",
  "key8": "Yj3co6XgCBTLjzEhWULgDWNXFiHS2iTnWJRBCEB8tzYs9DxdZhNzXPcfCBY6ELc2771Tfp4eeZv5uBW3t5rBxep",
  "key9": "5dw6xXusp5wPchnD1JsQhUnVbQakJswuCBnmQR4AoxSTLDvJqTN8Bdz5qjEiMEmYzyMSj9SNUTibr2hj5QycgFWG",
  "key10": "3ZAipJgnoXMa2UgyAgyfrZzJayWg1xJA2FmtRvg3JqKM42SUFa2USzSQBXk4aURCgrYfYcyxpe8hgyrYCBH2rDoa",
  "key11": "3DUErKBbjFoDKc7v9PTyQXKMLb6tJ3TTzkRfFYt2F4sCFQpMT8vXfX33kKkLu6DRTK9jWiy4GYaAoW6KR5EmRgMk",
  "key12": "2a4cta1vL5YPFTuQfMi3wXMiMWchwHkGhCmb4Mb6pmR3jc6amigtJTGqfPgK1gr131gg24wDdAi8jiuaVkN2Nc2o",
  "key13": "5ZFnm69wGcuSrdEKDr9Ti4KXq83MzvZ67C6PNNf2zcCAuGNRA2RW2d8y1Dm5KgRaa34ASgUMwBGRCjgUMtstKq12",
  "key14": "5oBPdbQFL9Dz3yZ4KvzspiyrFrs5EmcLGfmLUf1mQQQ3RdAWiaQoW3fMYnFQ16DKTJnQohTPMm6F9d9Po2vkJ5gN",
  "key15": "51ZTjCAQG1tAii5WHSz8x61jGgARsZ8YZnueMfhQ7BoPC5HC7W3FKniNe67azS1zQWagsU72LfT6vG552qytYY3Q",
  "key16": "3FLS8i4KQ7NhGHqivFGS2HfrqXvwbL9zTyAV6qPeQnKWaWN2tQSvKCs8kmMJxazqnQKYnKD36793wqT63BjzwKQc",
  "key17": "2J2NagbCqUVWsbgZTtRBZBrbWnZonK1yRrVJybtEvSSWdSHeSYY8XhQ3gUBDigRkt9ZWyzjWxcDghbmgjpCGCSjZ",
  "key18": "2kfLno3RDtwM6ULfwbV91S4zzHew8haSCHeWZCJLVv7WU8WJgopM3tFbXF7eMU9F4EEQb33nJ9B3699guXdZ41zH",
  "key19": "3h3219RCwW2WHKSPRt1tVtMLyAPCJZxXqtjg6qHA5eREXgVL5JvscFVsg4T6iBygc28FVLKbMphrAbyKDRPmu8f6",
  "key20": "2ERRX73ZGL2CZ57KsZt2Dboqg1sgSUYwd4sjaz1W8GNeS8AZNZSbLyuAAvYpTUMLV26bX2tqBVwCzLw2DTkZXETQ",
  "key21": "63n7cFjW52qvW4PbVgV2g87Vrwu59Aumw6iF3rhi13ZccL5FnxRZj1ChcqHQ865fXKE6mQD25SVrfrE37sM41jG2",
  "key22": "58pAWcryo4onCgXbNGZADy2Gv1LgedE4yUBZHXvuAmgZD1FRGM7KiRq7hkHu5zPPv55cN3yFhw3CNaRss9JEpJxD",
  "key23": "5xTYqeHTDpM1bPdUTuMapoEwvhnQBYM5XU17qVpCuADTS9swE2EZU87PcrY9QaPurCWVBPd4jsaWpTeRocUt8Vuq",
  "key24": "2Pte7uop19oqBh93KR3h7M8nQVnWNDebdVY2BG6auq5dn52syuZ4GqyATN3tBnZKQNRhaGnDszZ83szxhmWsDSXL",
  "key25": "2tMpdSBfvA3fWwJL4L3iWDw6NmAV2CQhXH47opxwe4LTY8bFrHXnGyybuXpJUYsyEm6qgY66QoVhJri4gL1VuJF7",
  "key26": "3hwVwNpj9jUSc5FW1nFeY136sEh5mucGBtDS319cpFXYCYy57nGJG8LiNwF95G9mBJpCSSgkJR7M4nrgmkLwXiwE",
  "key27": "2YCffFtybcmtwrQvzMHdzsTncA4WDbLimGbZ83bGzSNfMKQwnZzFESY3qQStzvDvdzyCXWzEkhiMSeziLrLAXnu7"
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
