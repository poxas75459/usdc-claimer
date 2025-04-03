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
    "28tWrMAa86Q9D85ZKMXvz8Ki8eZQ5QKs7QsNxPxmCNtvkUFHe9fcnwYfxSshcGR8W1BFUGPdnicdwnMX6fYM15Ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LeqtDY4HxRzGtpMLEE2tdXZtf8yxrQmyvxBBjen1akVKfScnmd4BE1gkV9TpSe9s2dZeTeBeV16wXoCvUHPxiGp",
  "key1": "2rhAa2Pf9fv3rP4nvd8bsev9pKKBt3E7yE1T36Bf5eGQRXhTe7NRtSwzk2dE9PuK4Ds1uFwS2ueHVS66JERo4BoH",
  "key2": "3FzVjqAZGMEb5AqdX2HWujioRrf3xBioXREqXQYkRmPvgpJdrBd44n9wFZkLP7gHmFXM4g1bvjQJZP3rupBxVaof",
  "key3": "5sjFFYiRaYAoJgdkid2F4fVZ4EJCpx18LMP9RsquYR4gnnRjtn7i6wXZ9anhoHhDUL5LVAUxWG8o7R2UV3vzvLZz",
  "key4": "459y2kC7FjSoVmxpv2n6szaZrLho1qmux6odTZRdQs5mivbsmVjdLZBuYCia5DZGE4jurvmSWzF8LSNxECiUBp1W",
  "key5": "3Kpf61zK5C1KUksADyBjTXrbVo4qgzY8Jjoa79GFS7USJYVmKPRYyymXFpPRfye2UXHsWwDLqaSDLmyXwEidBWjE",
  "key6": "4FmL7nHbY8hhfRpSrv8TUwKWcHifLK7aAizQDFsoLQnNAtpjxpGC1XbkubKJ2huVX6KjgRNx43fKAE6cTY5ULopc",
  "key7": "2AJnwLHyakHzcdhBLPG5Ev5qb4dJtus2uiwNiHLUDhSEt55yP1gCFa7NAxH7nkiQKo1r9t44rtAvGErVKfAHrDno",
  "key8": "5DsHeQujbToXipUzPEL61DiLprATxow8rQrrfFPcLWZnN4mQVLx1uuQ4t2haMJMnBcETQzJ95qd1YjbvnPMQh9oC",
  "key9": "4yRQdUYQyyNpveB8PMdnbHYBPXj4bd5YwzHamFVmU1MJz639mXgudsg12ESFkrmkuZicsDTLaZUd3xEKnBymaHEm",
  "key10": "2cuBrq31u7xCXdTJqt2FmhWmR5eg9FP2avyGU4LDpzCNUR4syZdnrmsc9dmoxjv2pXgK8EDNafQXKGesxUhNajD3",
  "key11": "5kbys1ZkxFw489XYZ8fSeodZ9GuLC3Vdd1VvHUM6nGXKf1Ju5KHFERPaQykkqHfoU9CXDTprstGTCGfMbzi6Ck9w",
  "key12": "4sc7LrznscopPPeDzpyLAxEKW4M76muDgRYd1t8Tekhpyp21RySwW3k2KecJ11y8RnvqmbeZyeeebYoMEhSyWuuH",
  "key13": "3bHXLRFQu4y8a3MJquvdV4MZVHZrjEUq9oFAZinyZSko5EAk3zs9HHLAY5xNiuKmWUkHKnbWYuUkDwgiTG31NH41",
  "key14": "5jJz5MJzDnB9qZEAZXk3R6Yu3xfBEkVhkoKHosv6Kh4JCKSe1s92Tbde3mnvDDjeKfpy7bbu1d4n4NJysYimVw6M",
  "key15": "4nJxN9DkCmAqd8qnsomW3Mojr34dxYyEugEHzhU1kQN4EWaHrwkz8TBhww2motV7ZrvN2EUo7kjtZwR6EmuEHenH",
  "key16": "3EEtr7ka5pJbX6Rby9Jcnh5ZgoV3Q5BKp89Z1rAv9pKx7jtiz66hGK4tByBd1GWX1uSaCLiZL5Vsf3KomvRiKQQU",
  "key17": "36LMzcG15uKWvYtUDgJP87LMda6jtgxnhHTTinrDk4nh1cjmBVzNPc8d3HqtAabo5CfSFK3m6n5heuxg1KKGecx4",
  "key18": "5ocdV8xmo6i4ucRmNGaexcXgbczow1BqruWsk8iETTLkph65ebJyRaeWRjirAYjd49FW6G8ovNR5YRyhZ3RoB7Sc",
  "key19": "5QyAdG19e799k7tsyQkECgrKsyieCqoaGpNog6gHcjSFTAdhasncKWV8QXYeNYT26Ckc4eXnLkvg5kUzPRKM8Ruh",
  "key20": "2ckdZ3kh3vPM6e3eddLjGCdbZa8G4sdbdudm6XjJNtfv77W1E4257WMTSZq7sgN9y4qiVNBZqeh2pBj8nkgX9zpQ",
  "key21": "ndbth2BMyBWBoVphQHTFS2NGevhPpuhdsKCxHhQjJ6EPCp4PqiZFMH1QzmKfZmKtSSYXYTBDpyj6ugZ4Hrp6RdG",
  "key22": "m5RiEprKVTpnUX711fdTo7RinJmhQaNUPe63jv4wXCAktWbMEkKg6e34SFVpPSb29GpQBerDcFpDwZ5DwrKrunU",
  "key23": "64iP2LpHqpRrpm3weNSn9qgdsPbBwnww9g8D3sAAwBYSFdyXrV3F41moEuzfY2KUS9Qz5Knn833Z8hA1xum9zSyt",
  "key24": "51NLLWBDLDg9zP6kyg9ASBGuoFmbhaP8H4aj2zFXBJPjVM5FU2cduPEjN7woVxnLF9TPLf5rFi7S2DPRQzWUPuAY",
  "key25": "dSBVJD4WmkFQf9JTvVAdEkBMh7vvvavKyDBgt8jQJPCs945hUNnYBgHEDEbF4nojsUZToSBBj5Ng2HPLFTYcMC3",
  "key26": "4uL499K6vFQs11xqzJG5y9T7zrUyBjuTsFkVSsZLnD2XJBNkQZvNMg6fQY7KXFeZ4pLLmeLJ8x4b3B2VoUdjgKzj",
  "key27": "2rjiwFh4M92eDPUN9Pv4ws6v46vmYFc73dk53AmtBtdV5reTHrszV6yvQXcFmrHgv4PnQzk8A1KkomYnNof5gRWP"
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
