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
    "4AGV6nF1PkfKQfzZPRvdmUTK3Z1prmux4URdvCDUNihSZCPggvBRr3jqoVmRJXbJmSvSfwxs7BuVctVNDG6Q87KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLyZiqEzQLavTmMoXEh6rwDbjSQSRNMKKVRoMNqSzEPEEZL9N2JGsSjCKoEuuyvpA2HUUkUaTzUCuPuCWQEVgCk",
  "key1": "2mEicjwSDz8bECTbaXePAJCLvMuJXXSkapVTLefLw31AmnEynS8b9uxR7ETLw2M9MoRhtWypoSTixEQkMdAcS5QN",
  "key2": "4ZuMKy9GTDDn2YucfsRAeg2KAQSC4kjMJpHhguTCcXs73dHC7mHkBVAG18fwHRos3wX9sSYWgDCF8qXwdy1jwza7",
  "key3": "n9nM3kciuzNdZH6UEoCE8Y3qQaipdNkGCU4JVdCmTeSkRTxbcfaDoo3g9PcTYQxBPkKjqq5sa25ShozvokGiT1T",
  "key4": "41VLdFE5fJwHMRZzZvrGtj7BfjbRex6BDSZtidEm5XETxtJknX7sxnkCWVgZG34hBvQjeRqbKT6tSo4Gh8Qcx87J",
  "key5": "4hxdphTDJNHpDht2ueGVWB2R9YomRiSmyz6Co4Q18RUcx7fZEwqiDCfu93dCTFVhig9rppkZGdA98vMALeXma6bD",
  "key6": "3hVzmRJqTRnfjNKd1gqWNKGmM5XUED1G2vvBC8p4Jszeh3Mt6tLEvMzmAfvjqYT93Q3vJ9msAbQAFtfNra6qFmjG",
  "key7": "4aYuRQu6dSs2XAQFxYtFMWb4g3ZhXK7wG5qbD94FrUNGD5K29MwPzRZ5eRd5bomGmDeN7PJF3fZDhkCHS74Qr33K",
  "key8": "2c9H6uF1X63TffG1QgNEYre7zZL4pGHeAWQEFxUmtskykwr49xSYPu9PsVS6gj9kn43Upi3cQGQM4yuydoDTuw1G",
  "key9": "5yNc2zRDmMRHkL66JQmoy2RyDhUtqXvPQHRYaHaL7qnmEDzyAfagWAjRdtU8VtpDCvt21YPa7EgGs8W21VxRUQJ2",
  "key10": "5ahLVdq8uu5Ev5BuqBH2jDv5N7PYkzu5SZPx2EirGdFi9CzjYHKZMKw4D88AKpDGjM4LpuoYMiPxcHWXGnTUUq85",
  "key11": "sqTdyuRXrdYVo253EuqNKKtPKyCvPRGJzsHDdViECmLx5X2J4wVXYRyhEoe7uf1AyjjvkZKzQThaBePHBkJzWYw",
  "key12": "r1vLe4cYCuBniu5qF7voC5J9Y4GnikndZDYA8RvechNjKfXy5fNXE5QhwCFgQoneJ6ciH2iQN5M9TPZTqFyzCqT",
  "key13": "5DdkS5s6DEF9RiswXskonctBWc1RCsEuwbYP1yEqVrUZSRqgfxtRukQWLwFBRPTADApG15fzzhUYmdNFK1kvvRV8",
  "key14": "45EjEz2eeT8pxbM1rxBABNacioJGWtXmfnp3RFL2neJR6pHNBBkUBc2jzqCojb1pEo2rMKUmJzp5tGQui2hNKoFg",
  "key15": "rsxJFkXs8HjfFMSq2AKaxtfcRwMTYpmfCBiQ46pZvpC6wQrBVZXiFvoYQEhhaoxFMLmLQETEhD5vRh3jaByK91E",
  "key16": "36ivRwDDyPTuJSznTtghy9QRNecBeRqdTyWNqh11bpT6aqFMbHuJFHotXJj8D2uscAiUKhZ9jYvE9n3wP8cMLAcg",
  "key17": "3jXLnxcHsJXtYZKxWeahnJby8q9CjpCfyVMFT7c4nH2CKfwhvJddU1cAcJGyUFfYY9z8MgzhTfyCKeRfeogQcE8d",
  "key18": "2BT5cUF9wUqm9vEofzsUQ7iwJ55CTCTpMou7zWYHzjVNKUtDBQGEmQHz5QTZ1poRZS9QJTnC2FCYg7aySWZTPPgA",
  "key19": "5BafWm4x6badkXPbP3Pz1QRdQroT8z9UNzTWByVFUzCqFhU8jeDrZSiJQSWXR1pV19dHCgR4F3gVLDcgUK1iNJHf",
  "key20": "2WxNiW4zmqbhkAYjGXshQyo3xCtmYhXBbgmWKnLWS9jgFwQA4BE1ij5yLgLaCTxUcFQUZ1nscGRWvfegy8MKPvZY",
  "key21": "5AhMXeyGZLcraqDJtK4mDHSUFWmr15ZokMKxPXsNhdAEVy6ZEgFW6hDYfVFSeBHvoxq9mjtCufXYsikCRaXj1L4L",
  "key22": "fE8oGvZA7BxiUZauYTnC6khDC6qMYZKe2QCayta5D9SEz8LQncU12Tk1egi1SZ28ekmqaEQrAVSG3SBsAr72yDM",
  "key23": "2jPdrGwCcdjsHTrbUVPU8wWdG6Yj7gSrpQ7KX26rSfbBZryjb3CMwnDBJsqdVEA4heECg2SfMMtg3xK9XP6nA22q",
  "key24": "2EYfJWGnpoGoWc4iuTKXmNHWUGMdxHwxuKM2q4PLKfSit3NDhPJEv6a3SkUKGBit39antConpWHmgv4afMvZHd4a",
  "key25": "2Pu44xAGae33NsN3B3aRyexPnvnhPyZKPc6EA2n2LNE1vYB2YNX9GVEBMozSXNN7GTtqXou4DkozoJKfNoq6d1KJ",
  "key26": "ytcogFrTvLfu77T5Phwe4Q1PCoUPsZtoiQAZoPMPW8WKVqQUgWhFChA5S1eK6MB19h7GbjNucg2RKVTgbVZU5wV",
  "key27": "4iKfuQXnCyozx6spHnbCFewDz5GEgB3RSUEmtswRr6kygeXLcJMQJWr3Z3avpCHhfLEXokdn6bh7jzegk3R69FLx",
  "key28": "2emeN1uPVVQioGPUtXMvczUJxsTysS27FXBq8irDXDz1cMpMyLESS2Do1xKysk9jKLdUoWqYPXqpL7SdmGkGFhzU",
  "key29": "33HWcaKjyJgtQPV8TcSugQmRafDwrCQuRBNe4kWEH7wXwVRAyS3whivEn78UcSVpdQSHjWiqGocJvjgZ6cMKQ6q7",
  "key30": "422wRsXVYJ2gNL7RAFE7zy3rKfgVFBreY13THFbsyV9yWfQQmraKddTecy11ct9dH73TggiGnMcJzvTuLoC1CKFM",
  "key31": "5JpjAgqeDp63xsFBKeg3pPv3uBvY4h2DAaGHWp1iesoMCJY5xCZoBYzH9Rb4pfEu8PFNUFRdC2Do2Ruoh81T4YN",
  "key32": "5KDK64TEMrog1U9cNDhnfJZRFvMeuU2sQHSr3Upr7hmWGFCmtzCsrKTF6nx8va1pyni1fmZxqKChfcpernkX4qc8",
  "key33": "4vWuW26pikt2szhGrpbW1fUQC3sfx9YpVxMfoqUK8ftod6FK8rAefZohCkXtJwBpLPsEoxThdkBUQJKkfQV8GQgd",
  "key34": "jFbNA3cDPj8bkSE3BwVTUfvoTZbuwWVbKJinrWdwzMAee9jnmf3UVafV9JEBedQWxkuLBpfUnuW3XEYSMcJ7eWM",
  "key35": "4psM3Hi4H2NQaJ8PyWbk8iNWJcaEn12pbGPidDFgwpB3abkDN6bHz9N1zzYTehaS2w5525Yyaj7o4ZoaEpXv5epS",
  "key36": "5AZZjGqLb4X9knYjDfRqki2nLCXvgUzE1BLSN4iE1GbzDhetHj2Ly9kYddnspDCKLwvgxGG4wkNn5M6ehmAD3sG3",
  "key37": "2MmW2pWArw7ziSKc4qh8X3uAyMZU91PXQyASB79LQhVGoCDDmXN22PHKqun8n8p3ufvhXxBTADBS9vdmz9sxP2Jb",
  "key38": "3Vtsjjv3wsFi9kpzM8WhHLvpAxXtfrgNxWKx1xE2ifXv1S5jqQTQJLLgucTsioBGJt7JyAxLZtruaVY69A6PDTW2",
  "key39": "egpnrd6Dz3Lx1whMTkT6DLAPssN8vhcH57PmNSJwFYqhBGoV6Br24Nuh7tVhiSpk2sv47YHfd8VN6Hh9oR2f6Wa",
  "key40": "2zJBiHwaw1NQLpS1vifokyYXjfpNC5FwT9Pi9QviHQvjZJ8SH5Z83brQcaEhvDCqhyvriRwik4UnrLnGS9icHhAn"
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
