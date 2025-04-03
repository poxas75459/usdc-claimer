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
    "31W5Gh7rfz6EK6zv48ivk6eaJcHfAaPxg2qeLgAUE1o2JERsgg4zFouEG7Pm1SZxYPMRMgmFQp4c9pCdmdcNswx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23mmRebpcwCDdMUwEWRZ7JLJLgpbjbKfYq8VQCCkspsYBNvtzkd7KmBG7Eagb6B2DW6aR6bVUrS5JkgsRWEg5uM1",
  "key1": "52TaewFEWRdiwGz5gePXdo1ZfuwLaLLS5Ama52ezpd2mit4LjHcWfAZQ7A1HoNHuJLypqGj2MQTNsGiGDSEgAe26",
  "key2": "67YHVKJYa4SVmESgXZerwSu9UEsha49XTkGLxYk9ie75AEQ4zTXEa5Qa2hYrRzdbXTX4BMKGdmo6FswvumJ4KfH9",
  "key3": "4z5zh9LncnG6UxRydxZZ5cjoFbcHw2qwHgYJnHgUhq4WjSwFX7FiW9oZoqu5CDRHrzeC5x2u1Fo7xkHj51CRzMr1",
  "key4": "2Cv3ZF26WZ7GVANFbRLprrKvCzATaTpWnqKXHQzJXKAi6X1xZc9tibzvSTW9NCAZvQRjfnHKFujUQsh8VTEQ9G3T",
  "key5": "zUb4VEeLJgxzzTMTi8PYtjt1JLg4m3w7o6QL8rMAwsKVV7nSpcphSGFdUFc38aL4JoVMQJnYuQ8S2A9TwvXpg1q",
  "key6": "4wgh8FMy3MSaPriq8pd7fccnKhFo4U85r6hYZ9t99owwTUQ1CjvegtVG4FpwaUQwfsBSWWVcRntfFD3mVVpEf3zu",
  "key7": "8xkps4ddedkrR58H3tJPXceBPSFHqt8ux5vqtM5tJewA3meJH9dDFnL4aj73mwwWvo1cp6uCwWskhT3MGmuHS5Y",
  "key8": "472fzTmpRFXfhTd7yMKoDkTjRQ1MqYkwatxemxo3pm6AiLSqMgMyugbCz8mzfBqKpXgyHm89VapcGzQeASzRMj71",
  "key9": "2S5g3FDcoNLyrXmpB7bu4utJmKuNSnYfGBT741z6ifQLp6Lr9WMYHZbPpCueTRK8oWExFTUXgneKkdwQJo9EuX7n",
  "key10": "5x7ENKbKV7pTz2m2d8LjnjDyWwmGr85vcVvDfUS8HfSzMtFkG2LU8PjvTx8G656w3EW4Pi87w6j757TUgNDXv3Rk",
  "key11": "243t9p445JffRnSCMB9tYopZME6AQzh6ViVnajt8tGpjQG2jbdSuiukC6MQr74dDqPyoXCjdqLnK42ucm3bjCBqa",
  "key12": "2UHg4yWxyknB7AgGbj6aCnXqCN8QuLXXgSLFfXwq2kHbD7xYjCPijpP3xAsZHQsT6S2GnB3RNUWTchhUw46f6PsS",
  "key13": "4eb8yq7tfSALB7w9zGUPi1SgnPYzNSLbMskP2aiz7yz6kjdvKnGgBeovrtUEVxKUoSUjpbvKHVBkwvFMMxiagjqS",
  "key14": "2iH5kuDPQCWE3QYoMsHmb59m8opitPNH3eSfMfsNtjx6KqeGh969Q2bm3CNhFouWrXZ1c4Jgy3HXWHZcu9SDXuRo",
  "key15": "DPwgQ9g9BHesxsLsMCiTFX76gMQhiFgu44pwB9KqfxcgRupkWg524xqXzRM9pEwZkNgN1tuZQJyibQ6WHg2ct3y",
  "key16": "4GJfLpub2q9PZ9W5aJ4vUapcCc8pi4s3wK3dwKhweaCbPhTEC8iQNPveAMW2ipAgb1pDwmQxfKbb1JsN7wcVrmaB",
  "key17": "3X16K9BqPXnAc4p92Jwn3t3xojuC49ehnkVEjojWLQinAYXFPKv51uMHTt85mEAxaq2GhHUdvLAaFueG6y9FMYqt",
  "key18": "KTPtbuNgz6SSEUS7aE3uVY8QbUHBNWio8gAyx1CSvie8fPvtULmfDBX4FnBzS827wkCmxBGV8h8Bg6Zmhahti1j",
  "key19": "27w9yVkouEWfAtAXWQT8od4EoNCJAe2K3BoZnxt7mcYvogTJ3MroZ1wJSjGFM2RKSoGBq57xUPE7dALjXpYScE9y",
  "key20": "36TDTRzN1ndomaiH6NMBVNVjmYaPadCwvSH9TsciUj149QBhjEpcVyVK7qPXZuymLDdGgdsm7m7xuTXy9WMenCFB",
  "key21": "3zYEcQayxgSiVwGN8FLoFP3BXvYBrpBBv24bteA3KHwNVtPDrM6z9gwzVz7VhMsUPMpTvEpKWhR8E2GSnG1Sxe1S",
  "key22": "523UN3Fk3KSYQvXqFSeLKj1C2uDTrD5snuFKLxxCxCNeFBKJkY15B9ntJeJAb41J8bBj57dsPfy4NLVbhHxMDyaZ",
  "key23": "3JXceMjMVchbaFoFFmb1DBRkjWEPYNCJdLctJmLr7S8XEPRu42UQ3xiBpVMN2rr6XeZPcHBQYBBm7Q35badBTTQF",
  "key24": "d5YHWYQVV2gp4wBg7qrrTSfhDWUSQsNNgD8ExiTGu7s1CgzhD4aHHmgF32Ut2jgenCDfcXgJSrmVB27bHNNNxQ5",
  "key25": "2KXEsGY6AZRweRUZ3E3gT8zUvBZoCGmPHxC6prvf3vN2yhnzZ8VAv3nfzhkpwh1LVtXbWRP186UDgxEzrCZzvir7"
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
