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
    "3Vv9ifHJd1e8Ct9WWWxR5WpSCuYCdzDvj3x4VaJtRBeaNVw9hARyf68Eyfbq9W37G23YVLBAStMAPDxtqLZeg2yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obUM7Nk8ggTaz6uF4J5XCys87oMtqyBPqa8btDPU6vFCcipWoW7gC52APP4xsKfmzLNme3rS3ua8VbEE7hHTgtP",
  "key1": "iVAdMJiWk5dhB49A8iuHWDjXeXkZ2eNpB2AE4aiyYuMH45Gc7y5Z8RNW8bNBsQ47FsKX3i9x17JgVCaiFSgQxNC",
  "key2": "5H3oSH541WUJ78wGWwvvNtth9qLYUSQp6gvCm4hV2KznjpjwsmumdY1HgLQUXTsdMYaoYBNhBtTPYFRUMTW2eLYr",
  "key3": "3QS7janxzXYyfAHUnSrEMJWEctDy2ZYVckvYocEXphbL3rmKUci7i2c6HPMcLipPiJyPxjqRWsBxWSLFfpSk1PEP",
  "key4": "411NYRV3PoxeppnnsemC1AQX1cecrd4n7FudnGWF9kSTbsVvACMM83mUp1yv8WsqetyBRpUgpFneCmr26THZmkAv",
  "key5": "2AEFmJrrFcUM4f3tpkwdVuKy6NsDrQgMakspp8fGBfYU3uLYxgm46tuQdd69w2F43vYAriJa2oemQrLiYp6TdEaN",
  "key6": "2LfAjJAYd7YYnisVsFSqweTSJCmyGh2HC8dLS8WcNgmQMep5PZa3fpGCSCEi2FDa6quG7HejHbAU4tpaCrCbYdA4",
  "key7": "5i8zxNGyQQmdubsig4JwEbMQvUhGGzqzGWmyuw1Z1Pj2hQhfNXcqw5uJP1o3pNFaVmCCCd8TNs61bWazdLyGqxnn",
  "key8": "4yBydVDeHtwAuTf5hf35pn9mXhCwrYBcDroXJhPp2CYL2R2eiokZfzey9fpGTPynq4unt7YDrCjruyFak4FZAdjW",
  "key9": "8D2kzZhUs7S7GBotA45oyV2UYwRriJE9sB5rxm7gkW1n97GXzrR5AAuL499fxUfAKffR3VMLEG6nCx1wtdFedCu",
  "key10": "3rvJFQiRYCxfJhvYTmBFKdmEcqHhw1QoZr2feGsWzvcwckxHoLvUQfiaN6j4epjD5ABUpx8vm7FmpKpAmMAs3VRH",
  "key11": "3eb3iNiTLWTwgd62HmeFX1gW3YZGueTpneU1FkEsyWWBs4oZVdVyUHNrTSicU1h6sTPpqcEwu8s4sEZhDuC95VBV",
  "key12": "5CpA9dAHDutsuTKF5xdH8X3LAR9PXVbvsTR9Pbx4Z5mFEanm2SWU7wtspX61xZFZjycvV8rTfoCqUf74FJsobuad",
  "key13": "47DZVhfCf8e242A22r4AFDUmhpXi4BF3bAFonFqJqLmE3QR2QiYRZNzLNB2XkFYsJkcgozMzxraY5UPLcAeQniNr",
  "key14": "3Ybv6676vkv9zHwCzH7VaiT9nF3dW8qgvQo7cz8FCDTUkKX9SsYL8hmBAwerP6QH8dtrHhwtyeSEw85nhMxfmFgb",
  "key15": "2SdeNijxAecHuPbY5FnyEmhLcMe2MuV1Bvzgc7Vdpkc7hWmP5mv6PrY7dKSNCrD1WALMxHZxCUfgqUCgsctDQZTR",
  "key16": "3WfqMnoQhVuuoSt3i3Q5M4ZjT7tkPrdXYYPNYosUNs3zQv5fRhM58rVZVRaC2H7n87kfkR9U3fxedtMeFuMfRFN3",
  "key17": "5MhzQbEv5CAWDvJHw9exd9uYDxtbh39VA5eKAzDTdVM4tv49sxviqNY7xhniUPKtijrAhpH7w5d3F2z2rx28SoEp",
  "key18": "5RedBhg4qpMzA2uBB48mwCsKYdHAdqjwgqdY8GtkUkyGxkx8ZGmd9eMiYPijKYiLVV2WCJnkfxafxYg8zsGrimeg",
  "key19": "2vbAxYdbg1bsTq8kmBur4LpXC8fHsCUbw4furAt8L9txDwmxcHeCytZoaG65E2RYT7XoJTB4QeAjPKCS5D63CjCC",
  "key20": "52h9utymysLVXJ6dWtFVcJz4TnPFLeSgxu3vEJnUfhyLHNJfMRxfesw9SgSeHyeobtsuadTV5gSb292TgZP3LoNm",
  "key21": "3b6UG5y6RCV7EgogZAMnmAvaNbb3qVgDd1UVgao87h4K3AtRkzyJQMNF87vdyR6inNeuRsdU63mCEZ7Xkzo2eu3j",
  "key22": "3oisCV2fY8v6qSToWWtyCtK4U8GssrDYRSQKqFB5YS7Vh8jhAtEuwPhTnPX6hdZU5aHL95T4wsyDT4UbyytWDCZK",
  "key23": "45Y5LBJR7tFCpDc9pjmgyLYaXZJAQrQRCFuRiy6Dg1mEEiSDKkkTMCtZGbpXec4CYXG6hCJ1Nkvmxf2pZaDgPd4n",
  "key24": "2SAADCkZMh4agL5dBpMUV9JkfBb3UjQiHbZz2nf8KetPB4AuepSJhxCjessokxJW6hR14HhKLCbn6cjyToFcZRHH",
  "key25": "dcVn6gJ9XUyG7zdaAPWM2hUdEQ7Us3qU8G9RU984TFtMub58idxA3Zt1BvaxawwGvLwyZRhZ8unKrfhLcHW8nJ5",
  "key26": "5o4YLnpGQBaJptWePgFxiNz2rmuRQLtGnoLZMi14YHS31W7iDZ2KaWUiYSLb7NL6HupU2JA3KZwpbMEHboSzfp4i",
  "key27": "4mquEXbxSBtSwG7zHWyaUKHLojbFjPnUn2vYNcXFx8LZNjaQcPZuazxYaRTpvnSUfhMUXtMDgNPZGwsnfvpcRKmF",
  "key28": "5sicSN53dwYuZa9eyt3FgCKdfcQYTBJwRTcShUs2dEHzYcf4ZoRQpKweEZ5XcbUHJSr3WHbYg1RTbjQVNHsn9gHW",
  "key29": "4DMfXQwFGHdBJpMyXuGStYzKR6ENbtQX9cUoN4v3Sm9dFuTLrbbPdKG26LgAp3Tw7XVHKcnFScRQkNe77Jvy2KdS",
  "key30": "hdgTVXDy2jAvizaWbZWzE4rTaaXS8i4AkFAA4NeABGmZh6YfjKa3A1FV58FBLEp63rEjvLbbQS7sW4YfQTQgKsr"
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
