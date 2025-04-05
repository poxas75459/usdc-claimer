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
    "3CnPK5PEPnViVY8YRwfHLGePXZzqThVaStgJPQ37CoKNa2XxWzTJtmGEJmTDrcyhF5esR9EXu2bY7qJZsDPPR1Nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sL2awE644fByyqiLx7Who3raSs7Mibhxz1zvRGVj4ozsyK53zxjWLcCHkirRioEsM5tgC65TzKN6L2b2UXVCDUL",
  "key1": "3pJ62m8UThriaPpQrujEMfEZVTPYpW17grCqynwurb6zUkztt3Q9hWeZiUQ7W1WuaLvyz4AuWnAm6niysAkHgVt2",
  "key2": "3NBrGcwQehRZmKTuLSUWs1KJbLTYcmLY7v1CmKuJZgYfNwrDqT3i862FXZR1WNFi6bS4qFx5P2gb1pxKKJMJ1ATS",
  "key3": "4NnJMLpruzgujJymLMwvzV5G6BSa39tGv6xoVi5EmvJg4xgdkfb9PgQ666YseMKkmAqqarY2CBtqgoHETDqYnjjx",
  "key4": "5wf74zzjkHTchc1BTqAbZgaW7yqX445jebiciNxYShzw4hvQACSaYRi9Gchy6dqyrfTicVtGvVJDUKmZb34UAZbs",
  "key5": "3zVVyowivbBTKmGckNZ3UizP1175mcfJ3zzPMiLV3CrddUXLADoGi17HuWNMZaH4qJARM8G6bLc64rHUMDmNztxT",
  "key6": "64g7rVFQo7AD21hnoCgjvsVUZjddQKnNtrhaCME6bUZ5B35yCVmoHY2obiJnaks8i8A6D6uN83ZyA94MNGjwPqv3",
  "key7": "5bDpzKj9nMhHbyVQyqryeWgndH6zeJaLN3Hg2LfVMshS2k2dDKfT4yKv1AasZqpS6qXTd1xX69hy38Mb1Rph3hcH",
  "key8": "3ipPa2dYNke4jXBMYpH2sGFoT7QZkL94PxBvuk86K22wWWmeDtko98JKnezMTJWvi2g55WbAssLEGvyQN2veM7sg",
  "key9": "2haLhgymdQtMGg6daQtjfwg4jX7tPf2W6DjkVWqEgQBzJh2B5ApBv9hn7cF39PAszXnycY4EfKpmWoDMrJB6T9cT",
  "key10": "DM37V6sRwWCm2E1g4uVSrYPQF8LRqkmzECBuwqczZqDcBL32ihLtH1QQZ4dxbgAYoNEn6LyyYtWxpELWXCmunoD",
  "key11": "48uZdb3orgLadPptLuUBCFmTgK3ueeZNiqJ6ELZG3w78UNDuWDvfVcD1Go9CD5ch5pGm3oGACBpo8UHSJTsFCEsJ",
  "key12": "2eVHMtCCWUWr9aCS7QMy9xJHrAHCZT3bdK8Ntic3v2y4MKDJUtHaMvm8vcDKWu4GW2qb6DTYnNj5o34PRea5uj15",
  "key13": "S8mwniNNzzyGHsjVAop4DPxxicziW5hhPPdhqBRmb36e8HpX5D3xvDSCa1i9vgb2AyRkX2i5sQXwrFunm2UszBH",
  "key14": "4SX78MqjRGNk5ii35pmnEvtr9RsmtjT6SvjB9utrH8Qr43FSnjhPtq7mF46mMH7vyTgV1Wm5YBD9qXwskmSmBYgR",
  "key15": "5vq7F4sTrWNYuKJJLVtE1LpeY2yFSoJ6sPMULYNnN1EKCY521YZmAQRVQRMVCgSeCvG3xtCXuxtgvGzv4rmzKHnP",
  "key16": "2LJbmupUUFNmnQweotVWh1DEEL7bxvT8dagncgExtaQWSzgXEuF1pgReTZ4ygNMJfQC8fK26A4haUS7i1taU4KsC",
  "key17": "64UtAMrbMnJhFi2r5pW84yRkuB2jjY879Zr4G89sb2zyeaRhBvYa6hQBBXqbkt4cqd6FePoXgaomhkn5Gh9SCK3V",
  "key18": "jDwtFsmGhq4XCQfHeBdRAhUVtnMj2jzLCivZCcJgCZYY7GaWxap3BcNmeChpPeN93VJSqJWQsrigT6NF56YtBuk",
  "key19": "4mjuXqGxuLg4WDbm7gEJdAwsn6dufpxY6k5qjHdA93pmPFCgFcf6agweiqVZSDC29oM7Vnjh6AAZyLKRCzxtRSay",
  "key20": "2AYGMnRViS69NAcypYevGmeH43nzUBvRpyxoLRStkgPyBuyWrKDCKtfBPLx1e3buKW1FhQeZNZ9jopRqCPnyfTkW",
  "key21": "1s8jqFSTWWHT3V5YuVky516WKjfP1xzsrQ5drXB8bXw629cHtbrzKQmifPzG6KG3bfmqvVsfNrta8VVb2P8uESJ",
  "key22": "3Se8nGzAua3BCVhmanPfT24KjX4pRZWEinaUJeeroYJS6XWFpArhE8TXQtX5D4HhyQ5vd23Ns6mAHpZJHSnZ37gf",
  "key23": "vpHWyJo5m6U1XxAusVfbdokEtx7opafoZtReexLYrx69vNwoxFm5osey6kTwoux3983rmsnj6N6bomZauZjyRUN",
  "key24": "bgjVze5ykZ2SGQN5ULhHjbVU6TGKzgp7HFoiBoHutVaS9VJFrhbncEHPwKKVZATBiDEee5f9wvQyJpJmyRvHERc"
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
