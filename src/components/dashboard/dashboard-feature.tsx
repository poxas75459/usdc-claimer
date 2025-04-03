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
    "3eCwEweonvbA3QagUBvXni3UPuGV3Nz2Pk9AvZK1G91tm5G4y5uQTUkHDeGpWABaTH79nj9jweGxqRDmCvJAy12c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxFoXiQgEEMupdK7ks9qbSV1wnaubjJGtRbQLiQnKmuCCSYBoq9sT6n86EW9Tb8ZYLBt5X3VEncJ3zGbqDA5nCR",
  "key1": "5SKe45EXZvUKaDgH1ryhQ2nkPzjCy23FRphoBnrRUAM2GMmgXpQBtmDzrVhv8kV3yAK7V36hpp1PN5JpXibskQr6",
  "key2": "229J6VSyWQUf7WVWSjpoU8HfxLmxCM3TSMYoa7aH59nywzwEFZbbnZ6L9U4KWyZX3Vpy2M4nX2WCX4LVUEkoxjYz",
  "key3": "3P8SdeZaf62UowcQ7vDQLkYfPLGWamEqZSy3saCUKb1pJCrjvmnf5dPRiYMxyFmBr4cWVG4Dy4sXzJsZgT4hEg5e",
  "key4": "4aLXruTjvSA5CTWvUaYHnMb8tg9xN7AQSPmqrRXTEXw4PdUscQT14oYR8kVPNiAMr4TAPh5UJgz3aTqA1N7iqxvP",
  "key5": "4c2apUaCu7BDWLNo1wcnv5mFMGCcSV6y12yGqA3QpLsvsVWpSMK3FHmYP3qPNvFFwoaMaBRDUuTcppoQjy5WnUxd",
  "key6": "JtbiRnfErHQEJkNWqtNSKVvoufifjpTCfvVpj5uJMQdu6kVBGGPVVHP2CYStF67xsgoxm3fuPHuTQyeTRpYFn5e",
  "key7": "3exfa72Kk5JPtuuWySXHcPvUtXCRSWJaCRHEgdzaWyvbitVHcomW3LE3pHqMP9oteB2yCz53iJAkUYUEy93ZAS4S",
  "key8": "5Hm2yhW4gHKRJzkwJdDozXExnaWm3WihpLsR3NqmHDQo7CriZSMVHMdGdEfP8jf1jTnKAwhW9F2nYB2CU37nGcuo",
  "key9": "hQDqv4DJCnMpJqpv8p3EFwUi8FQiBzYApoNiJDvKQuXDhxUfchaxvhKTtrMbKPSyMajZ17sg2h9eqoz5qKEtX9t",
  "key10": "3G5J1NtHLyLM3xGEo7DzKgjzTeEGgevANLpaCcBrfam1wmRCTiAiS86KUXZqRVSW34JUu5JuQWar6RsZTYhTzDQo",
  "key11": "3MKuCUtB9RGnJnA1ugcJCpth5FsbsxieRaG24A6qofyBe9S7eBtGF3Dgj8qf3E24fpoAv87BgkRPBocZjpESNddh",
  "key12": "2gMa8zi1S62g6uAyWyRBQspkah69ZUUxjECJT7m7md6yWCXUHALssuj7f7aV4wxpm5ijUKhvEuBzv36RiMFaNVpp",
  "key13": "4YxJZj5qJkQGysZmrfKbEGDzSJ7bacGeqWDnTFvGb9e4vnSxZDN73qNGWmBN6Nz1TXHCC5o4ZHk88xyre3eFouru",
  "key14": "5WtexVPUw7HEHKvkHe2ycScku8GhrzcswtEfuoSToh33SVjDnUf6C1tJJrFSeodz6e8g6vWYU4YbUaczgvmDA63k",
  "key15": "4NKM55jzLSusmAEYaFmmrv4LurfNunzMpYnv25i2ZEdYckivPxXtQVhWnFWkVPrQ9eeV7U8dGsSewzUL8KYqzzXK",
  "key16": "zhrzEma4KSCek9QmUDKTCHsDftP1oLAr1ZDMzGn5r3b5TCNwZFFf2jSh8aGRNUHQEhj2cmZ3bnoZWFYQph1QmqX",
  "key17": "L5HzKopqC347LQYm5Xa55orFfjV8DXYj9dk3LTVCcywAFXqdLyd3UsNqGhGZjSjpNaZoFZaLDxQCGiAUfN27j22",
  "key18": "3PBCY9ssCweXrULigJmRodigpktawD4q7SQ6FMQ4AYPqe5Q1QZdUMkUDybpzagnsgnoPJbm4AwdX1E2EPSL95iNu",
  "key19": "3EnBnjK9MYzSo1y2SmrV9nTcBuAAev492YKwa71Dfs1eUXAZN2A7cmnKwS3w1yp2SLMCKfPSxYHXUzuf2dpP58pL",
  "key20": "4yLxP3EN9PEBRuiCehVvBQcBE27G81bK5JcAW73vyuiGATAbYaK5ciW7DpSpQ73p1M7S9gvYJQgg3WEydKoRnHPV",
  "key21": "dcSRUW5oAtorSEFUfTaKTia2LANLyStq8cZww2ij8bX7w8gNrTeqMfurzhKbHQLSiS44tyzXAekTE8ApTWcdgvX",
  "key22": "3dKJVC5CYkXXMdC6DgzUSXAQ429SCkUjMjH9VUKnQVWYdhMu8zqXLPBvi23d92szKAiEYZqN1YzQyqQQiYJ5BdVs",
  "key23": "5DxsnaGpQKAmnrwUcFCjrtbXLijMWjuftZZt6X3Rp6vEmXg1ZHQZxcLFxdZRvggDWDd39zrZu6EkwyQLWs61PsHw",
  "key24": "2i3LuE932yminYrsqv3XoWuW3wcDMtmaL2b4Np6MPULqCcduBBgwB4zz2FkegKHuGEqHYmGH1GRmBG6WXn6Pygcj",
  "key25": "TwPVmSjwSqRmZgxxqYrHd7JVr3E4DCvX8KDu19ehzSfjLRUN29CGnXL46eMcBE6cRPwjBFqHLuQPCVdqZBkjQjz",
  "key26": "5b6qyqCpB5z3tvZd7i8XmxDVfv2YB3kmXDbi3c7ofZkmBj35wuM4cguLqHBj4KYfKovcQpzJtP6jDYo8FJmWsP9H",
  "key27": "7W5LNohhusibAXn8gcGxP8EMHwogbJgooDr6uVGcWq9UEujCtUnovMtLoopMi6fuAD3t8VJFAVx3bKLj2gQk39Q",
  "key28": "ewiBK2V71iBv8PuK3nuCRYjxiLBrdMCKi3u5SxQTnxJ7mKrrtC6VBQPse4uUAj18n2kcZQntZLMC3yuLz8YCqf5"
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
