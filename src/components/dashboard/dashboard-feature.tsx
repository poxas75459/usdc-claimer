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
    "2gYqAZ1d3ienzfAwBTg83zUuzpVF7r9EPV22wi3E2qvwqNiEfoXPD5DJGAqnAg3JotH9u1bo3ZtzN5xfZBV74Ay2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rfa9Ga2k7B2WEiv9HgxRY11S7sg9bQKLQnwZroVpv1MYyx1R8jwr7CEdtufJjNQESUyTJbregVoqfVQgtTjLkfn",
  "key1": "3mZyqqkpD8ZxTegJKvF91rrAaXMdYZ85H2hvBqdkfU17zcUpr74k9VkmyExVNq6XBKJ4aC2bgps3nBA7cYcTQzpS",
  "key2": "54mscPAYpbAJeQcGEWpJUBupFcCWPBx5BLXwrA6niN5rAux8A5qqKQjTkycJ8d5G5TiQN6BGC4W9EnTtH577QrNf",
  "key3": "4nNU4dewaMC8NooEiiVB42qmHpQa7XSuixSHPNT7SJ48vEpcaUxKazGxH6VWS1iqCWWiZnxpp5rXyThe8BMj2kNg",
  "key4": "4XVhZTEyH7GGWzAcuxPQB8Q9QYKNABmr6BJqtFtqXaaQopKmS5W4vBvodVaCvwo4NfZvUSdcfW4WCbyE422mBMvp",
  "key5": "4B552LoGvJicJy2fCaqo4wa6TLxW2MfvpJtNN7fqLUyZZyjCSSxBiivKytJfh6A7SWv1cJWw4ZQZLQBGGPLjjPLF",
  "key6": "2V5Z1F8XSWvBdvcNgxm9yjE35phDMx9MEmn751y5TVAwS3GuCiHsERjqhxv5okwhcAfgax4oaG61orAgzb8BdaMJ",
  "key7": "5MP2VwqEqXKDh9c1nK6muD6AFmY1CuDVFh8a5ZTa3LVdcT9XJFbgi5KF9hbwSWvmUKfKpnorVQqWVtpchXjSmzyb",
  "key8": "E4JCD8KUBPytuE7to4bDUqhoWg1MdHX5EExbacyHPeuqDsh3MoHiDv6kdqZCZLBMNEukx3XRVrjH81nFBW83MqA",
  "key9": "2ksuab6EJzW6yYaFypLrcmGdLdzxi54MEgCNjZu3fo6DZomcvFpF9rELtoD6Vv9NUy17ZeuZSpA2RqR1vwxMHksm",
  "key10": "3XnRdEdECTBkPu4pQ85kaNyT8Y7wbLotZ1kLx7HDQJPeBzZfwCe6SGSc2jmKThYrfMT2Qp5SJGq4WwnrDggq7J5U",
  "key11": "3zLXCD5pmqNza8BG2mGe2xkjz5RkmGaMpSaYTygAexjNDfL8pdWka94pojz4ZCcD3rKwcTD4i4L4oYzTGGRmaaqr",
  "key12": "ec2qpV1j5A7khi9cG5vBhpksgAV7UZrEZa9rifKDdkPdegU4Sb4hRo8AiDyeENJzT8B4v6vHyfAG9wgSeEZxfEX",
  "key13": "5YCm3KW16Vq3rrNxsE1sF3TqsLMLJXPtHGoUf4VLcgS8kyUY8AtE3Z4ivSe4uubzwErgU75LaocGvaUjqwESBXiH",
  "key14": "2myAkj4jZkVrtjWJytZQdy65bRyiBvKgiBb2MtxYnCKnA74fCkEG8qshSLBx56xUG9N77id6h5PfY42LmTvyE9gG",
  "key15": "314zBcSpy5hqkUhhWEVjfCM11TJELSBjFqwNfjfDHnrQM75X3zdsRYMzSYwTiRZm1ohw9F9wq4Uabf67iWEcyViP",
  "key16": "3CicvXtfboTEfpLfJFoWj3m9rkp7NnZHAKWg7kVNwCnBTDYYgKA6dv8cus3t8xSZ7ChF3xzQqzXsfG1WiTZhYwcW",
  "key17": "P1kLUa563aK1cdHGKEqeTqGoU2Fyu5XVuY1srK4dF1G8YKxNoTWNXjaBVBBAi3eNb3LUbCdhiiepBK4xMnUthHZ",
  "key18": "52Te7HGDigTH8QZLJiJ3dhLUh9gaNaqF7W8owx3DBBeBop9Kk4WDnpyJmKXVKHPUjSs1XkqCokQio9DMc7hhpS56",
  "key19": "5TV9WSdRyyoTpNWAQfmVuzjjirLQkUMyX81ayq6Q4ETzRCpKD7vR9jyDNveQm94QtP48xcrQjkD4M2f2yY1mt9UZ",
  "key20": "673SMDj2KRTdD43vsMFSH8XiQiXpBNSSFgKaykWM1KuawsiM9Ch7bztPYvDMNXy4oungwXzTX8dtHRpy2vLP7Jer",
  "key21": "2Mt7KQhLGE89a5qwWVVFbxZ42RGK7N1cHNSRmFCMUSWxqXAagHr1kjEDwBaTp3qCfgmHrVkXJw4NWATN3iJnNgZY",
  "key22": "4LZxDEFSmtWay2hb6nKAXs4o787xdj6PSVoFiPU4xYEjykoh7kQ6EKzCWopDwR7nLmoo8nUKbW4ur2sE5o97jXGD",
  "key23": "9g4xPoyh7Bun5JLoHV32LygnYC6esVcy9kvCdFRgB9ECB1TpsidLpQLUBeMBT9t5ShbuMRs1f8tzm283EZnDAbo",
  "key24": "2feLVocVgThrPuavdEE2nAa5au9gZ3jT47R6v3TzFb3TZjfFHJgBKoVVD26RzWBzuuja7iWNo4cMtjnDFzyboWv5",
  "key25": "5gh2m3tpYnuuGXsnDR2RFtPkpoLmFAPosgJyB7EkwfPYHu2BF8sx5Y4Nn5d8kqWJJ3o3pKjDpActdxjGeZZ8pqeZ",
  "key26": "uiiNcUyMmWwnzACE9QPeq1UvmVwbMqFMALNaToBzMD8jXPp1LbifJHeZdT6SgSgc86Ch9xZJkUUGtP7NZsG8nNo"
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
