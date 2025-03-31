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
    "5RuGrei5sPjERPmfwiDQt135u2gBfGMdYBBr4ZmffXTiDVZXrMdycAVhx2cH15dens4BiMpR5yRvhEuisPDBN8Vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RixrLsd51ZAUMS2qpnuyG2iZb7PfoB5wFijFdKKLwPBLGFdfTwfgbHsYzywgfmCXaK385ydsLdb8NXAnu5FNomr",
  "key1": "2jdAkmFqtdP4vvAzypdv1hswWcv6ijeB7sNQfz2h5kwRoAS3wfgo485oq8XPwJvvfForJp2gFR7CCwAJzooccV6M",
  "key2": "4eCKiK5LjryfHoaQGHgjd4FZmPLQaNjYrXaCWDZPUtCHy98WMbirvFsKiKxd2SJhdDnUeoGs22gtgupYqYexMPoL",
  "key3": "2yMosqSm1S6fdCDdXLhSxqyXkajtymswfT9KJr9agKir3JY1WU7Kc6Lnsc5rxqyS2Pf9C527PdE7QDZqzGvcpqVU",
  "key4": "44W5c3JvbtgsofFsecP581nNS1JzDwT6Sb5hxU6fomUwct7m5uXToq6CRPp22YjuvSpQQ1pPM7R7GMv3bNL5gzQs",
  "key5": "2hBSUX8ezFABxPwXKA3nbd2tJZszwsSZT9RGozt4ThkSkTjGQ2GCa5ua4e5c4RbZ45nMrYX9WSpuJz2nhkAperky",
  "key6": "dWwY6sLpAtq36cYUxXu4Nn6FXMkrY72bDxwLU8E6eWvy5ZiaMjUC6WoVg8ibf3L2k1UZtYLCYzFfttg7FsvPxAq",
  "key7": "4obuYDQRcGqGPDZLBozz5c4JxU7S8kentzbEF5yU1TaFn3fLJcM7vvtuFQ5LACDeDqTbxiy4DCPzNC5MoBgw9xJm",
  "key8": "3BTkTACED7ctUyy1QgyxDJ84uhUzYBsjXCQcF8387WitSkwm6yyPDHRrKDv6W7cEhbu69RmjegmfSn5dYfikSqJh",
  "key9": "2wenRmWnRmNTqgeHwS176WDuHJ4NLgBt7mvuhkTzVSJZbdCzAras1vdyxrwu9GFDingSUbMxaZkMKiG2zmdgZ2mK",
  "key10": "uyPEBs1z3HpTCCjGWj9HUjbcC9MwDwPAkeSadW9zEwTLbk9hnr981nQbP8ufL3V7AbYfKtY57iDymv7Y152M5jG",
  "key11": "MHSDoSt1h9eyvae3vkrQW1AKLySgqbPus2UN6TP7xvFgbGrhguC6gnayNvYkCygTFHwGHm4Fx8aDkBuf9vAqBPM",
  "key12": "5hwUQ4X2YuZTCcdM9s63L1669ZVgWjX18gPc6X1J1M9oSR2q238RjraDaNWqeGkfvkWXzeakovZC2XnHbEXqPbS2",
  "key13": "bGV9Gtr9167jTZ5LHHi5oDfDd9c1JKGvS45QeDX2hXJuXyY39cBuLA4Wpk95crfZpHKBrXYKNmdyjkZFqnhZ9Bv",
  "key14": "2rxHHc9UnJLVAFhUsgf2FMoVMDCzK7hwrEVNsHQbNgAfiAaxz3YsdHSXiR9VR3tjp8n6oVoNXgixdX7fvQ9Ec5Tv",
  "key15": "3zF2Vs4KSwtDp5kAiDznkEXQ5geyyg3B3C8LRHviemDwHEJWQMFEFQ6GF5jYeMr6s2dYsF2K7ieHZMri2otc1rZy",
  "key16": "5Lm8ru6cRAwHGuGLupxc8KynwstvUJVUBPuSf8uX4UU3MAmwM3syvVUqYcG6h4Hvz23MMfnj7HB75fKjA77BnZ9S",
  "key17": "eyMqAVPMa3MTRFKRiZ8Fw1M7LiVfYFNhtVVAhA9g98HQAkK8PKEftHyAwsCHVozH3xdBWNzk5Xggmd1b3F1EC9C",
  "key18": "5LmLvmYp9swswcT4Tdgs3wJnkYp6WVbhGsuYzd8X68Y2kPDmJQ7Ln7Vz25jUwiCsNGipYqnd5ArUoaMyYvzn8ok7",
  "key19": "2FUFALPEgpKr3DB2jEDZf6GpjQGZ97vJ74YrbDdbe6pVKZ7K2rhjgQgpQppuxsz6cBwkj5gwiModVDXTpCvq9ocm",
  "key20": "397famsxqsLj8gkcqnuiE73fqJRN33JEd3EvRz9S13iYTPxyBMSgLcmuomgnxGd5Lar6gD7uNa76QZHWkY3dRfij",
  "key21": "4FmFTcWpD4Hpg2KAwMNUy9Bwc89BscC87jatQ75M8otvyFU7mnfstyR9uZ6JHhQFBgm6NeGGzzEm5TMSt4j5cBdj",
  "key22": "4pJaKTbhgeWKrEVurdfVJaWY9yY2tMM4YBEyMGgVJzv54K9jqVAJNAs1Gwts5BwmcSHVCACL2Bfy7SAxvJrLyDg5",
  "key23": "3rL9MdTVJyLzVGXynN7Yfp26bKqNfxpuQSaQMH7gmdHrFKS2yEHUVK138wAPU6xTFwUEB6Uxrg1AeneAr28VS45R",
  "key24": "2uyyF7999LBeGAcsKTNJXscJfXsRZ7PJaozA1gevRgMuAKagzWCMEej9tfckT1BdLFXrJSxQf3mYWjA7kTU47Y7j",
  "key25": "4KyGWq9aLzBF7zuCtphsoNvRhoRqQRshNpHvSRzvgvtmyTv7wfk2BAGCwHE5ZyeT78RvrvN15v89VCJRov7urvap",
  "key26": "2WMqTyrShhUQv8GmADE6fow83tQj4yJZsLZgH8GZF6ZFZiCrr4znoFCnfQfLdfkxX4BMv95UyNmGLm9hm3d4TiZK",
  "key27": "3JqNrFnw6RpKc7k2bPhGejVd82AJRroARrSsJx7imT12UWrZzBgALjKMRJAJQh9Xfo9yCcRtbS4ongJTFRhkyTHe",
  "key28": "4AabzJF9wcDwaxzBVsZUcgKrdnhsrPKgUBusHMgTKJHEq7c8ErPCYTocXQhvSuPs47zRN8SQFWcTmhs2PsVGX1LH",
  "key29": "2uhy2HsLEGLyTV17MgGu3mSh1L4a4uZ8NiBFCqYhNTftaQ8nKjpNwAJD9dCuXhKni5ygREYWDSE9cuY18apdifLa",
  "key30": "53vuRuebVB5dAym49TrB6eY6oor2yrAccQzvQ6JCHQau1peVjRHTJ6H7yhGUGbi27jKbrXjMyBNARV41cWC63vmu",
  "key31": "2mNepNereLPqawBPv425JHPjmPdejDTViBuK61rk33ZZawMeBnh1HrWBv7VswCCoAKJEmuFsgW4vwbdhheF1LcNH",
  "key32": "5JicX6FoYmroFBsBubDvbgSpHoGwThTkrDCnXAdVZfbhS5nnxag6n8sLxm8KLYY3LAnaUSu8brjL2pFHzxEwZUqd",
  "key33": "4AdzQt7dENyjb1muL73mfMJaSDGRMamWJpSbLCWnGGXS6DBcmVeje6RNSUfmrqVMNfw5KjVpFyvCQVD23tpgBGyw",
  "key34": "9iLc3JrsCGaLnGVgeyVGZ533RbuwPJgCzd9GNAwPu6JMXZTjV7UsR1Dqmw78c7wmSfzLdkmZoJBGLRYAJsGtecW",
  "key35": "3Z85oYH2WdpEqBpZ318j7MK5csBnhCmpCXQVQdjdJ1CFWuCHYjBQoxgnsxnmCKoY9ZPW9WUV1wp8dzonTx9TUH9h",
  "key36": "2iMSEfnQR6RzTX73vNkNBGbNnJXXLKHwPmkHHBFn1mTQz3Gap2CBdo9rDUAe1W74a4raMTGsujAHNRYsvefKh6V5",
  "key37": "FdNX6jSrkC5vYrJFnAidfaDEEx8P4vncMDrucu2RRRRuobCof5tHibVjMYuzBjbMgiUYV4iyWegdjk96jGaB1sq"
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
