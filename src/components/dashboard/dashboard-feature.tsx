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
    "3mQsNHAHS3B3Dy3RcPvT5DhfA6WesB8dAdiFbYah7Wy9dX16y9tvE4ySFPARHApMDLiShMEUqkAjzANJKhFCyKRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Djk6M42r7SH6a3eaAD3FWTKEXQxbHCBKb41jihWYtbKNc247tcWyCmP9ALnkJPLL3CibnTNgKqY7DsZroNydsP",
  "key1": "4fBavv7HM6JT22ohTLjYxsaHQSDMTKRKGJDP61pdUEwGep3mMBxQmk2yx5fHr9eT6kSg61e36p78QxxPcsghHJKL",
  "key2": "39NvjJaDVXqdQ62zyy2ErukJcGHbJmEskH8vvgXrwBRc4y3CAzfeYohoZNurz9zeRwxm7SzLuSQuzDPehX7KxjYM",
  "key3": "2KiqsgP4xq27q3R8y2e2XNjy4it585suuaZDAWd7jM4NWS6AP1J2bgNtEAbRHPyNZjUb9k9AhuBg6CVKaiztZfV7",
  "key4": "zdXRCnwFfWW4GkicyQRcgT6avoGwA8LE8H8yaHrUYdTuo1hoXCSKWSWeF3dvFmAgW5H1AbAt3cLSPzpUYxe2XLW",
  "key5": "2Fv1i8K2oQ6wTspNLJVScAF1WH22s8R2twx7VQsqhg2Qs3pQRLr3k3XD8NRbeHvbfTP7vdbBF1mf9N4XmWGqLUh3",
  "key6": "Saz4oH2XRQMpuRM7S2keAibmgHBL2DsoU3oR3HgHG9RVxDDsA3uiPfEk7uGG3Qw2syvjKjZWHDz4s2QkKtrrhpf",
  "key7": "44ycv2Q5mQX9cWkqENjRf5wQ7bavVexnH9NoffH9jfHz1AszxLtzWAipmWowSDuS2XdbtEHCQJfttUDzLMdDM7ip",
  "key8": "2fNxRfyGv1XnhKUNMYBqwGD5wmehPVdCqMkkAP5Ycqid8mw3d285roifAt9nF7549i2ULfbqqasJEtQGhJWXNhkn",
  "key9": "4i2uAtWaWbgGpCXFZitraRrgnxfpLSvVfXRTPWai8Bp7uwcDtQgjhGQMP4HRLR3XRJgXVRRGbh6aJA8j717qrH8h",
  "key10": "9CzxxCCv2LMy5T1eGEHSPwmWrbZLDn8BBKnGQ5epakVtu8m4EeB5JRKzbtaMoBsQ7QEubJ74zxS9ofEkXZ5BJ5C",
  "key11": "yz6nx9i1CQgc6JVLXqyJv3HcNaGVqRhH2Zfvj1zsK35Syt5FDKCwCZJW3pMWtjZHDCwgeL2dJajqePUcCmNyrhk",
  "key12": "4HghyVwTp8HUnNda7MfSJLSSYYcMBDdemrZcXg2dkifDmL8AAGNK996uXg8KXiJ12phWL5MoVpKQbNebCHQKzJz3",
  "key13": "4mQMp324f2AiwDVjFU93RQPUasCM64tZpWhh7TsA3GRmE8PYqdfmpygKUZQw7Y9MwAqUM7VEcgPzE5gFeCGrhbKW",
  "key14": "3dHttSdiJgnDMC2z2TWQYVQogaTra6t2VjFtcdk64p58xchunE886BrgCu78GMvMaT2HVmXHEDuL2u6HAyN1V3ZA",
  "key15": "2ZAnc5PNFLg2DG7n6aStxLvD1skpnizkZ7C5G5beGJRoeWd68BwzExZHLPPQ2V6129KMNVMFgKNtxG8zLKcHM3KS",
  "key16": "5TMgWmMd6q35PDDHvdw5tNsDsoLtj4GUZ3s6AB9kHzZBzzqVSM2LTaXKenCr5DiEkpcefdhkqTALd7mVpRdo9uzV",
  "key17": "2kaaCdNt5GChijfrKTbFEjRMUoShZ2yCd6yVr3mKCyUqfVKEZd6YA1Y2VNMutY2tFucmJ3rtUMYKsdZf4ncJep4S",
  "key18": "2HJZaUmrQXiCFhFB64sQPLDfR5hXvQ4z8EEvBr53LR3reA3axAUnv9PfhRAgqkT31RZjaTCkxTeZDvgp1feGQqGe",
  "key19": "KFvyvc3hFV5hxHbmh9LcnJSzRcoipaEWUZBc53egT9Y8zHcq6EDJcWNqgNn8bvuTLh8UAwS2m4VZSwyKSKTJmzJ",
  "key20": "5Wppb1rBg1k633Se8m3bYFQq7a6ECGoF31bq2KZnFpD6AdwagNN2RfqhMHJ69LDq786qFHdaFbTb22GF2umQNty5",
  "key21": "2wE9izzZUV2gX38fNGruae5qXARNcLsP2wmH1iKrXXSTutLJHth4fEF38t3fT98Z8YBJE5oJh7XcZP7QEmEvkFYM",
  "key22": "5UAr3CRL9hKMMERgDiHavnjqFkXFMeqnnFygAg6cAuAkSb2GP6XBWzbX1QUioDVMHHdX7ch8Je57zLCNo2un2u7Y",
  "key23": "5H4B1a6downVrhrXN8dGtxjuM3Xpb7Vz3EcS1DwQwWdpnhp1uX6u1AYPKhT729C52QjWsETWgmVMZZ8dzo72ET72",
  "key24": "5VxoRPiXDyh6PyukYHJb9CpbCcQq79znj2RQN9si22k2Ntc6CCwMc2taSjg5ghJfCJLH7pvhMkWhmNAzMFSwGFtU",
  "key25": "3pEtAX4EvCaNo1gfbFjwNpbSuqQMWxxXrCgzPqjdbdvwZh74nFp4N26gbWP5KvcwDCojQYB23iZ8X2qGH9kCDxqh",
  "key26": "2TuC6jTTsNDYkC4HiH3V4PfZH8SP4XE7YYxyfwABa8nVqT4pmmmaZVKeUrB8trrbumi1G4PrhcEfjrqRRumDaXc6",
  "key27": "2PyZu3kk7NyqNa2Ck19axPXEe5QNAHUaEPzY5eAFvCrBCZq8pp683zn2LA7gvdcmmDsapnqEcHtiVJpyUiwWwHjP",
  "key28": "3cBLhUTLAXM4YjpX346kYgJ25cjoVcC1HzQWpTpXgU1hrpJxqAEvJTadQjrbFYCHsFyraLyVvF5Dqqjsx6YJp11v",
  "key29": "4re8ba6kJaRqFtXNEFtRuUbQXDgTDMF99YCjfzPbh9EkAtkhZ886yYeN4gVNakGQhxCx4bhLobTeA82FDpL6sHq5",
  "key30": "2zUSWdKADYdDznyir83MfZEZVzNruLyq9cbSFgHf7Vj8p7mg9YffF1fumsY7JhpAeWBJob3ZLhyLYehKUBKDRMaM",
  "key31": "T6wAW6NuxheMLVRCXj3rKXfGVHBL3QdFzGKJF4hbu8jANnTsyTLaKRmoftruvAoeaoQZzer78xx53qpvSZJ9NDe",
  "key32": "3vrFPGycuuebfmkR7Rhum7KzAH2SSuBtfie6UZJsy4AybXhuphdffycdkunDxapdyLcdXa2L7FJZWMYbnnVC5rbX",
  "key33": "3wwK6rwTFT7Nk5gPJVisxG7kKoffBqq6SBrwL5ULE9GqqubK6wq4LB4Nyu33x76ifsqQJtqKJKGtCDN2CL6UZmMo",
  "key34": "54omJieeuE3ycDLoGw8d3xDxNLSarw5hYRTpMTmiakYerJTnBCjxQq8kFeKZXRejjmdqm585b9Dst3t1xe2mFggK",
  "key35": "3dE4rsF1jSBiWS8aDZwoUXR4JF7iw958L8m4CtbA2FpQTuuHzcN2gSx6agnsKRibZAUaa7mwREWmaGda5j6UKfCM",
  "key36": "4SRN4PSDQVeVEbuqnC3CURz66WWN7JrP5oCgP7be2cNn4FwvwhoerWNkZZLVmHR7MWrawKbaK1RJ6LxhvgipJzmQ",
  "key37": "35qoWeWqn4pBbQbonTT3m4fPrCviqB5hEfxZMt7C5mccU3fBXWa2WoJ9s2QyMuxuBwdvQfWu2ah827shBksw6x2t"
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
