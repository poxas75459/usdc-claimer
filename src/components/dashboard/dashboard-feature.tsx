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
    "TquqYc7fcS7vihPLcLJir9q1Gz9SiScA51W5wdkAcFJ9w286YSWRdxrFAmL5SmggSgTHBqGACTRZtcnuKddQHTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ha4odYi1eCjP4x2PQCJhmrv8cHbTGiQDGB5THm6CnyaeJBXHnzDPQdop388EMEuCUmGWwfdhBUKFyrajTn63Tiz",
  "key1": "63b6bCWPsTtDw4nZb9UpL66yw48BpRFWAXgMJdEFZF1KziRUk7PVUuU3mc3Rm2HCMVEkmSZtWH1JbACgDzTCEm9X",
  "key2": "5VPiS9pwoJKYrpfLsxbdXV3PhrvM4mATYesNkJssbw6ardKCS4suyKNCP9uFTzfckjA694spxnqSYjxqEE1DyLvg",
  "key3": "5Cj7eN1bhNPVEF3xuqGUmuyh5kWw324fZmS2m5gLYAK6pnF2d5e5mnbbw5wCyyC1BtMGEyoqsEbL3tbFbRLwqTC4",
  "key4": "25aPFwrpWmAAz2QgWjd3GReNeidM854N4twzTakufpE4G66dB6QjYcYheRSKQzuovBMZcteq8XHiybi88ZSdE7Ac",
  "key5": "2SUBN3tGSWRJAQ9tqYjaSNvKScRSmMr1Y7z6eyz3ygp1nnWtvCNZ1sfb8mmqQkS9Brmao8caQXijXkXhgtp5JHss",
  "key6": "2ne8RBBmtWaDQXDQ7owyPAxuDUgscaNdySwWjoUkvMLPnjpfq2Hsdwhh3CpsNtDcs4BxpZQYfbpdmsYSbqmf2WDW",
  "key7": "5Uq73yPLWYFdabRGVQYd487MiNDCX1V1cy2gLiDYjiqN5J6HXxoiniJTGxL1719MfeqYzzqX3B54gZhKKnetBNJj",
  "key8": "483JAxV1VaCYc6mMsT5CvVDoCCHaXXtNUZYfDpp1kQ38FTRoqokzUPykj28TMjiYmWF3gD1XacqBKCJ7LHtkUJ4Q",
  "key9": "9Fx2oqJdvhPGYtqHFz1knpPy96Lh61JdSBaGGxXsmSnEDDqzNveAKxBuL92CHfjWe1xTEAa6ZNe4DZzfpyGi9dw",
  "key10": "3YaetZcGxoqCuXrDrXWFNoTGViBX8usJe8tYGRqdEartDKzQ2Nx2iApfNdoJXWxgAQESrGNEXyVWEgrxoEPWifvH",
  "key11": "3NbThaHbge2wRtTRqmkhAw8TD9sddZQXqqzHXKTfGXWPo225UJbSWEeWb95MWiXngsEkaquXfSP9Qch4P4ovMrbs",
  "key12": "3LjD27h29ScV6Be7vtfCJpfHsEHFsbVTkEVDDfq6hNW63kQQVK6QJMphKpGJPPQpCW3VsLruDxkjaCQg2Sy3FwFo",
  "key13": "4jtL76dDfUgLKB5CvKCdLotSzBCM1pq9NPrJcrMCFYFmzW62nHnZoWsc2NonWMDmwXG6HeNh2PvJDMDyZZY3x9tK",
  "key14": "2s8bvua5SLEcbHiVK3J3sCMSQ7fusHrZnLkBkFyFWHtZ2ZbtYdrtWRGAUgBdjPZ9gzjRym8FkBBS8W79u4dCVFBg",
  "key15": "4dXyfL4LWEG2nQ4WX6qLM4jCWoFyeVqsuZ3gggY4vcQMHvUDyPsyuyMWF6exA4qNWSS4TttjKfR8uoymaMs7Nhcy",
  "key16": "55Y7qcxxYkBEJSVaczXTRPo4aa3dPoC8LjpHhM1qjvqpDx6e97Jm6ayebycYSbL7ap1zETLxuJMQWdF3AUDTsD1G",
  "key17": "4DhunnvDWsaTz3yU7DdgW3AgwB13GLSexgMqyoDWXCFacJSzhQDMXzNZMzryUSDnHukXr5Z8VYK8oNXLdk2JN5YQ",
  "key18": "2DqGbT1n8LpG4kSHfhTnRmiNscWuUgqbvANy76AtGkj44EEeK3D85r1GSPRRfWmcBHwyf2KdtR8NsDYRMsoCFtaj",
  "key19": "2NvePfFEHpVVbXMZz8aRhBXf651N7AP3oJpBuEzSpHPX5GbsxmzcwYkqN8FuZNfymCFe7HGXTrPLah2FAnoDZoFq",
  "key20": "4FzQkDN1X8tNai1zensW8MjfsyNH5qEzuT8JyM95nGDj4UoJ4vL5zF2nhe1ZWVrG8bEfk49pBnpfi24hBgTt7iTt",
  "key21": "ybsSJaGoL5wrtGxgepVkJbgXhdtBpdL2yAgX5yEf9M4e4NCCpHKDPEBfz5RXTo2KZZMGtgWyRPcB7qY7tBSh673",
  "key22": "2DrhV5XoXA2fpbafw5BjdWgi2GjZXvmnYf25ePG2GVdLdc3e27UU1Mab4i99DESXpfc3vuayqzPezUYmp5nw2sga",
  "key23": "22obGTA7Puv8dCvrvJ47yqgWy1BWmtXgm3hgYXmfjhJMEiuwSWwbajyVHbNP1j8Q39jyQScWQC36ddAeVxhFqprN",
  "key24": "62pk7BvSyjeXH6GsribB4XZTpC4jgugjwcWeXGaG2C1Dvh5fCinKomBqJN9G2cpSHotgcL8hHqBsgDhN7zDs5u51",
  "key25": "v4M2Bsy3CASFmgkvdUtCRgBM8mXiPZeeA5wXUaa1M5Foom356xyZxFKduLWeoz8ttXUKr5NCnZ8NHUJgjngxdLB",
  "key26": "2ueLGWMHGxw2XgtYYJTgCXhFqmzNUhsAaH1SCAWgz6vxdqqodQvoDUKcZBMpjp1dqvjmAnBnbgozWqKDVNqMmrHP",
  "key27": "5HsqyZyzaa3wQ2MCjremH3Gm3R1k9xod8HP5G2fs43bRnHGe61543VrrbgRkNq9Q6fpPjsHYqA3wcK2z9bdfs8xj",
  "key28": "4NyvqFPoi9mSqj6jLYTHkWoAKecGMPFRV32KmJoGztzaTnFEXLz38GHPRTcyAUNARWyAe5kafinVaJdTSxvxbAnm",
  "key29": "4XzBzrtpW9Lpm5CEu23EADjNZ4r2bAUGjtE8E46Nsjv87xmxzT1R4BweCCGezK9WeXnxZuVYqhmbWEZuWe7zbSZC",
  "key30": "3xEDrgrfmugfBZ5uja83acLdAuZTobzFNAe9ehYcmDH7tqqJvjMPa9WFQPdwZX23e22bz5gq3bqEvFXoNSfJfUQe",
  "key31": "67GfVis7mYqfc6GXCiQzTwUgGN5oqgQWW5Gy34B6NjAcYC3XJdRHRtJ5bmdx1vwe6Ej5XtA4rQHmUPWWotBKxJRA",
  "key32": "64TBuHyzDvXLTc89ufSSKFStjwbmSctPQAkSTwjZbcGnCexLsTTJTWNVVHkbpJJz3ycGozFu8CMu4YG6euskVDBo",
  "key33": "5ar8uxnQaa3o9erMYFFk6ohVY3coyPBuzWKk1fFMVFk5oTPRwzSU57p8diS2SXi6MRwfRhhUVtaZmgZJtzUPnEC9",
  "key34": "2iHViikXCksWYzxvRvYN56kC9KQbkf5G9Cr2HueEbu1PVe8Cah8Kz5a6oBLX3JCZdkhspBtw5hFXg711dJYTZeAf",
  "key35": "4H9zVh178wkhWdBGSNLwFSVeNLBAnQVqpZjbPqCTmuYk53egkadsJxqttUH2RoP8Hw8pkwFTzaGWtbB9Gs9WEyxb",
  "key36": "44BuzKRhxDn9yNjMjhq8LJfwQWfCHoaF5ha6qq7GrNc9xNKrbCPwerzqb3wP5u719oVP1DZGTy8ZowUZcmrDkYS1",
  "key37": "3ZaiCH6chFayxJeWfTp1eoGKPZK2hxFnV2r6kwXtbxAdsLgFCt1NTdUHp6Vgzdt57fbtbEr3uSvUpR34szemtA3R",
  "key38": "qkPZFVJFyrU9VMnAfzkL5nGFAtFaD4YdLUp2YMB7EwmeXLMyFiEWdq7G1T4ZDpPsP77ZtvGs9vHYQy91rwZZgqB",
  "key39": "ucFVtwvNRikW9uPJLgpoUf2uJiQTYSyTujRbRXYfmaiHLsR7gF3cDa9ysXj7UJuJThgezrzKADjDFRDRFXBcPau",
  "key40": "a6X6qASKBNf7pGZiT78bE6uou26hBcNWvKsbbocnzfR3LcoyAk5EWk2149dWL86vTcfPECfiEkt2vCMqgGSwJU1",
  "key41": "57Qe3Zdy8NFf58oeWPT9xsi6wasqSsWEqXi7yAMFSLMb3s3VyK2QeMETo3UY2SmfPiL6PjaqTJp1BugMRMUFyn1w",
  "key42": "5Xv19fr3NLKJrdb6LpiLMp8CacAtc2CsbKdcFDU5udHWGfvdzNKGyJi8nfZ6UcjSGUBhtcawWf432cZtkWMEdXDK"
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
