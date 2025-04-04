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
    "5iQdXQWHwJBoUS3cwR3qARFiC6KAp5FtwKmL27Qd5BD3hak2TiC2qgsoWEU2Pzo65hR8vmB4BmxXaNMoGrBvwC7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m821VRjD64mX4JuS7hFY4Bg2JrQ2C1p8f4CjMAMeX29Nv6ejeDKxULaKimMyNbhdjhdGMMPLFtAFSH6MmHhdDDm",
  "key1": "62q1C8vs2BTp5zUwUT3oV69fkAvJy31pxxRww9JM22booqijzuZXdvsrBvq8jn6zxhZNbvYrUqVCoKewTQixVoFX",
  "key2": "5C1UEBXzrxbpMTVgJmYEWhMxDfRYyxmDTzVaaR6CmgecrnaeYv9YdwskNqtnuXkGSM5kHJAKw2pGVBemQaPauMK1",
  "key3": "3sGN5Q9PT477aBVRCgK91i1sTwa5xxPnhsrgP6sJHtvbT8TJcpgJ6n5bYphGMdd4ZKQUeDRSRPW3R9pqmjD2xK5Z",
  "key4": "2owtDtv9aMq4JhTbkHa1x3McgVJ7stzgAt9VGNHKwoiSrnfGckZbj7Ai8NfbLvtpcQiGaywxLKxRCbwmEmiPVMyY",
  "key5": "3PG9SnwsoVBi5Xdx19RtZNZcP5aPTiJPBy391XuZLPzjjMJKPjrCKmYfmQJvXgDPSQY2HU6reLLbRzjYtbEqyf6B",
  "key6": "2QomPKsNBMtkfwwqYiXX8EFgGmqXok5PFBFiuQNVA2BfBkGUfUbarvfNdfqE5JVqZLKkZhiQHVtg7zMx697MEYf1",
  "key7": "2EmrF4BiedGYUTXPKqvMogrHCWahfeB2eZUfSh3KvuXKugDyUZL22AM5M7EVAw1yB2KtiZDFe7X8Fi8vKTNByn25",
  "key8": "4A2rBFKuCoqWGEcbMx1dweo4epsWhdayt42K26dfve89KX4mS1yvS2Dk7h8p5hCUiVypwcbkQo1NdMWBFnbufHh",
  "key9": "3yh6J26sw1jwHoyBEZX8QkqXBvyM2RGzr6KhKTh1zSe6d2RDNLwUCDaEaqepj36A8x7aNaDLJQcKR5qg13SxthDz",
  "key10": "2s5HkPosE7BwUnTMDuZm2GknKwiHgAbWp1aiMdTXB2PkerF7WbWeX3B74LwiDqGv9yYA4aAFr8FKBMNQnxP7tcxE",
  "key11": "3nf5SqZAUdj5etfVmsv8X7Ziy2noZsH1qhXqA1725VakeB19vH8LYv9v9xHhSK637XNM8fwAaqJhiNGMMdLFVM7Q",
  "key12": "3vS8XsisyGQkZz85o4TXs4FmAoybqLSkgZrwv4AZPo5xdFbFs63LA4YT1uGthuHX8qVAcu9wET1oG5NefdzXamwi",
  "key13": "qXLybR23xLtiWpkVcVzroNAAsdEYknWC59aC2yyRv2QUVTc6usG7HtVo5DKkYrfG6LE5LzwUq4WDjdaNCF2eN2k",
  "key14": "PWN3YtEVJeV74po5doZxW2BnAmjkVsrBLaFbSMMtjt8NEJM3ysdNEmknwc8FUHJWHBUGCukckpeDengyuhg3Hao",
  "key15": "5GVYqW5Prca8W9E6n56823FPzBnDKD896Qu9nV3rgdQ9xtWbhTne4jjaDsFkpKyNZyUfvxUtCxwgVWU8FTgodq3e",
  "key16": "2r66yi3eQ19yP8BtrjDXL6RSnZ5SyXQZhePJwYyBfoVS9qU9zWnXLETy5yjg2y3dYWbwuq5ZKwouuRRxRvs45tUL",
  "key17": "iJ37oLnLVmupAiBcxuFuTCJRQhHgzbhZ2SohDVP1RxZ5ZBxk4K7YfmNH4hUJbjpbcKFPGdRxdeqRwPhUBgoDgAd",
  "key18": "3z8Q3XrA1inE4V4QdDLHbgoTNbhP5YtSXZ5XPkaJASJLqKdVAw31mdFjDeT8zz2ENex8HnKD9JQdVtBCbX5d3wKY",
  "key19": "QvkdrixvHMapveKfmrXCWDrBxnAR38KbWQ9QYgvvahwQEgcjBYTVfc99jhpRQQeAxeEFG5gXpGqtu2sWCxh2hGo",
  "key20": "44m5h26znvrd3WCD9jBhEZhbm6VqJdPJENKfcA26z772PvswPGVCuzFHc2tfGA4E6d1643jaSyGQxysFQaJkJhXA",
  "key21": "5urnons1e6cJaUSHcbvwkGWKWr6s8m19eW76vqBr5UFhcofqfsGT8Fbc41ia4nAmZRQQfuToGCUZvnTGqFPXqcb8",
  "key22": "3sZmZeRWwoj9cpWh4djCiPAGfMTHXmr3kbpDSKnoWqtYPXRUuEb687Vc7N8gXtDzXzRcFXoEgf4eFqVma4XLMdCR",
  "key23": "2A4Jg8k2EvCTYVG9HZ7GhQqA1UTNukvBHkXe1VFjNGzfL4LxggfuaugHfgi6dHCaEYfgEPXT5mg31gMvECdLtSn5",
  "key24": "4e6tHaH8qMAJzgvCfE2R85r23cKS42ppEsSWdaiSa6vbu3MHatuRdTH793aZsNtzGoZ9fhU8ameakQofhbLj8bBT",
  "key25": "2e2fB5qGtqXGgyvbTBV2yNobuGAou5aB8MQpMCoCcn3Mf7QvC2k84GMnCnjYeX5rnEHhkbZeuCbh2uTeGx7WwDYY",
  "key26": "5EKidiVJA6SoE4cvvUNQ8rW3XGC3VfKW3KSg4YJM9tuTGh21y2Ez2MCShjHUo6CjAoLFJDt1NNoCwpDXqo49dV1a",
  "key27": "2CUKRxqwDzJZf3p2ZzRceFe37sRpz8pScUQbCA7ju6httwUKTLb7zkscXLaWxNJ4xGLTBMWcE4iCbri6XuqSP2XN",
  "key28": "KuVioMan6QrbcpTvzzX9C9n435FDmpWeVeHrFHyhQspkoMphGDX56tnFwFurSML1WfeubBA4g1ptUrasVcJRtPW",
  "key29": "2h2LXbnQ1XrU34MQ5Pc3aVcuXiRM1EkLjmmsg63SRiWMq26cSLJnXsqBa8KiwZdyWyqySyHgRAVSKVE1C27DvMBy"
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
