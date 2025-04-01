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
    "3A67c7Wn3uyCy3nSeSnf6NsUx6RP7RbadtqF5MrbRWTrJwWoDq3d9nkGDGamTLb4BvrkGoktCKgWykMDkJrtHD3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UngZDMGEC5Fa3QBvMfvQBCzs71rv2589jEYriy9o1MLJfTmde9v6NWaTks2k7Cf3PJqJSs8oddZostzkMuAexuZ",
  "key1": "4t186HV5TSY3gUDWr1i3xrkzvKdG22PhocTJKrvpszXwJvjR7anh9ZdiT6PhvwWjhexfW3k8GzTb9mCjxcFjaMbK",
  "key2": "2WEPRkBCszuoYTHKncrAFQ7TVR6BjPBfSwbX3m6kzQTZrPjjqpcbbpi6PcrpZ1dDcwiKzGGND2tarF3TUEikiDMo",
  "key3": "we2PPC5i3SYBLi77UnbbzaHZknFQWjmZ8VTZTtmHKqCNP3cXQHYiv3ggzETe1wuY9e9toPpBaWtdAD2D4YRP7BR",
  "key4": "3C1jeZWAcQw75ZJ34tq6VBjQREiPPx3Pn6u4YZdYtGtB11fKxfiJhXVc39cc51RL4HusV2QwjffhMZxbtpUA5ttQ",
  "key5": "2ugdEwY21uFhwhyECg4GkPgUBVqj76mjJQKzMVKXskPvLBxVh8UZuXUFcM7ST82NMcKthym3bK5bQTeoD2qyjaW2",
  "key6": "2JRWhwiA4XWSBFxV6MT5SUVLLctu22bQuuEX9fhUNUhED9apMEXwhH5TRU7R1jHmCjPkmGZZs1xzWfssaewg3aUm",
  "key7": "spXUz6t5sab6T1yZAZqChrz6ygwpmY1z2dCBrQaooFcD1NNrzSbGj5CzQ3UicDKUfqLwuiT8ub7Q2XVVkNS3Chg",
  "key8": "2yB8nJ2cgYzzqjZdWTsGSKhQSXKySawz3VQympwje3C7f7rBHDq4RgCCdPbWfysTzpEShvDrTtNMczZt2E1z3LDb",
  "key9": "3VS1g5o5UCK38h3RHyUpPnGPseX9DHvgrwwT6iTx9qa9MsHoFqfHQVHCCS1A3utk67Uq6izVJSh2aq1Ks7fcNgGy",
  "key10": "2GEgXw55hPDrZr452gdctJQXYLoJhKb9QmGVcnKDxZ1ratakSyDdyjKsGD2Vc36Ci57iJwj2pKhJQw4tdNxSfaSh",
  "key11": "5XgU3HfLqJiBxcvJyDqdDJEVGczrThypRZQXG7BYFgYGvvQfJxocjTYYpv1LcqcHjkixNjhxq1BMsyh4ATXcQ3zr",
  "key12": "2bnsCb9XV36Yxd6q13TZiwEpLbjugh1bnuhLHMwx5CqHbXkgSfnF3qJq9wKYuF12UXxtVf9ZcHdbuMUb73YUgeWi",
  "key13": "2w2z6wu5QKD4S7Wn7Q2CeYX3LNjNWsYjAVm57z8eWFHfqby9Akx7SFpaSDV2oK77kERFckFQsqXk4oJKtQBn8u2p",
  "key14": "2mY4rnnyXcXhj9noua3KqzbP8VJcVUREVZnV44sucHWRSkadPrqr2VEVTLFJU3U3gPNs1WYWi2qKKeNrtRRv8xTP",
  "key15": "3yauMdcBfeymWzoNbtzWKXPGJge9RBjhivATsxfYquCBKsxoWkJQ6biU3sGXHxk8odcGsgVddgb7zD5GTQfzAbZH",
  "key16": "2gkVzSe1nBkiun5WHyqvwR4cFtPePEsKtAcs5Q1cxg5HC8Y66P5ab6MQntwNcfSXGCE8qcUswwS36XHcCmHfVPj5",
  "key17": "125GmwVxyYnSRsJvSBUsDP9x1MpXWyRCVZJn3KNiRaSZWWHYUvdxMXoWsWrm8yFzrCGGknfxLSB4podNnqUJSjy5",
  "key18": "drrZ7vTxtEKP7EDaRVHreQDJxiLkASCMeJunooMvt1rfCRyB8jDKCke1LDyjwH6tRbGAhTaYfqGeaiZK2wsQrzq",
  "key19": "3YrXJeGRDBayHtDvGe58tW4fUtoDiFKzrz2xbXWu1JnfbNHGKS3TrsPp7zeEZACvnTPTYhatHhnSeLYZ8vpXHRuE",
  "key20": "5y2yUkrfcVvZJLTzwx6EJ5ANzCk5DmyCmFedzdsa3poRaCTS1LqwMHNrUKNUMqQ5LmacXEo6p3LaMeKZMfd5MYUM",
  "key21": "3KWa9LhPqDjjk3gNZgPkkd8JgW5znWyD45HT64Da6wjiHrwBdLmrC8Qu2kBgpNGqtpMYS8SyQE1ppriZUipKjmbL",
  "key22": "52hXUoYBM3AuKviGFY5GmMygdjK9waLCChtKuyuBkU6zioyzT4EJSU745WXBJfpjfdiQZcmFTRewPLLq1JvNVD73",
  "key23": "4UWyQdChj5QiW6qy3fvR4q513uHmdgk6ZJDiK2eYJLkaSuEi6yeq4ViW5on5vbpfc4EM8kXwFZd9wfzNk2fBPtgc",
  "key24": "3fKryPsZz2k3ugLkEwZQA8dss89YDLHEW1pUqs1s9vwWYxRoiFVz6n8Ft36ihoLjSheoPdsgTLxtZLxEJoHnvWZP",
  "key25": "2PjdeQyuiEMXFsvomBM59DSSKaiugBoVN5jrafaccE9a7PceBk2noEKQYwp7Qf74YdhPEfoo8Y8FkEZkd64Ngj95",
  "key26": "ZXHeQ7y7t67k4eoDdTBCsbDgEDHEqvmbVVV8EGApfn5weXNxvYhMexYH63xDyX78NMVtvYXEiVShfvL2uyDccz5",
  "key27": "5rCZVvq93yh5mFQTEHC7wTb5HStskcM67n6RBRRpNgk9yWUxdivojrTBv8kJFxg3a2igcf6yEnZBAC2P4fsDQuys",
  "key28": "47VtS8nj79ESmDpMH71KEqSMXUayqHjPptYAPM44P9i2GWjizdUBE7wJHAqr7rf3Lh8amD5TTWRhUPzP2DKyjLtc",
  "key29": "5eQwf8PhJzjZacf87AgjCBPBj1uqrCBfEdhpATqamrXiv3UMp3MRm1rWWdLhvVXbX33cd6pXjGMuo8Gw9aHBwCnF",
  "key30": "KS6bKfoa1rEdAYooTCLxSNbKGefjweuqhCAtbnbbP6iL7oK8amJdVuUAwHTNjspbHGwHKRF1QUztnt7K5Xy4KpM",
  "key31": "5rpPSw8JZSrrKjs3jxj6RHRZGK7eBuZnRjzNsEAwhC5Sedh1tS54Bk8Q1M57FETAb6Q7RMYn65T5QSEWrsRq19Pm",
  "key32": "3waX1G12qoCzoJ6ZJfYcdijAAWcbhiNoRA34zJYpUkPztQ5pH8v2JZMd5LYBi2kAdQCT6uA6vtUtytLCezX9dHoo",
  "key33": "3czuaQzZnmFNuZgTn14NQGRVJ3Bzqvq6n3ozc86QZvHbStbdrspD8S2Jv6Us1nkUCEZ3ph2H4voHCxWovtRVy3TX",
  "key34": "3trZB2jqcYdzFXuaE6z3bQLrY2NaRj2tBffLJYtEDeGedA6n7eH4ppAj8Nt551rkaTNd6eKRtz6AFCWG4Hpwpr3S",
  "key35": "4BdEsHXuYwnY7Nfko5ARoH7pFW75LJkSEAjfFXaWvCoXA4zjXtH4yyCZ3chRY13xESqk2SzfyRWaWyuDc4NnkACk",
  "key36": "2AMAfXqWbEEZqmnbQAqxmJKfZEs397xucVaW5zVTG3M2orXzEqTBXh65XPHSNfzn7bapzF6S4qQ1k8hZtn3KxfjA",
  "key37": "4gpdBK56misJePb1Uyko3y1hphAd2GSxY1bkm2RQHPgmxd7aZpGnJbK6CTKAMtefXk3MTnd9quryweuR2k9Nt32X",
  "key38": "5kHHCgnNM3ngkS3GNyuxBhFoHHBpt5dwczdG7qFeFEoyHMgzSRdryGnKZQ7pbg4gohweCr3PkgVuyr83PPm4Lt3w",
  "key39": "3aj9aku5LBnei3bfaa4j3aDFHq4bb1VYNSRBpDkKVqqa8yFopBXWPffXWNgY1FLxQDrwC5EaT3wJ5CDcFkajCALN",
  "key40": "5BocR4SbSkcR2fMNJE9PZY6LF87BMkcUQMCSiCxXz4EGsSmyqzdkJPz4PAUk1JgSc7DoK3MSL96m3JN4V1S84fqH",
  "key41": "5GMEUa8scQu9NrKatCFrg9qb26Ue4yZGgx8UghHdKesF7DDHJpj6FeG9QgYtsJERnk3hAraNCn6AHVZ2TkhhJGst",
  "key42": "5NrxrRqSW8RqtFXwgkpmD9JPELsXoAcDi8VnSe9JvDav6fSdwk4xLqpxMR1Eq6D8FHmXFXxnUd1UzF1DZSDNB3nb",
  "key43": "3qJ8pw53Fcc7nXM69N5xJgpfTdNE16KdPWF5279vaVeFH18xUfg9dvLaUK4PfAT8ToqqYeQXxaU2JeWHvfGd5zHs"
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
