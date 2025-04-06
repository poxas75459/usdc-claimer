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
    "3f4JwZUmq2E35NGzC9RXtQb4DwMFHn3mtDL7aRTeNvC2isWo2vax566NJE5BZ55W1nqiDsfdhhqCkmJbEddKCMfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hee82kzdUKTXePt8tnncskDY4gKf2kKRWEfxAetHqinpfQbLSRp5wKvFghBTpAGUL28p3CLki9k3rC6ZSuQfJi",
  "key1": "a6a6JYhe4Y56MYJhaSN1N9SkHZzNrD5cSo7i83yCRNWXPRiDo6eNE4uLUvSVfXiXmvx8uhUZ2nHJqESHKxLDABM",
  "key2": "3M4XFHsTK7H7RnqsWLVTtnoGA92g138Mpt52QZP5QU2tYLr6JGnmiC3RU5HZWGZdHBSu37wtUA77DXYL6KbkAAwd",
  "key3": "4nUa5v5NdmWNxzXCXH75CXsJEnMdQqmPJBjn5GPf15AQCRvk6TGbdaKBXh2RfBtMnybXsJHhuNHm94mXhArG6G4j",
  "key4": "4fsiqMzexLiUAW6PFNWZE7M3nbrv7ZgAMYU3A4E9ZeWZmAZxhps44KRbpRYCqbvhyuQXTPtbGHsZVDyqFryHfmpq",
  "key5": "2GKWo4hPLRVao4xGqrDqQRiRdns9JvHMzYAJZTax9QNmddNNCR23Mqqmb649vy2mQLDfECDy9vRxwSoEp1PfFscY",
  "key6": "48eV1TwCiUVDC5QGv3SjcP2P51beDZVcutLZM39KkjDDSpkiDCsvX28W7Nm4DnSHETbdGfmCVYFkwQNhri8sSRvq",
  "key7": "5Rk3grFoBhyJurT3eSRS6r44rMrcUqKP4CtL9Jh7B8P9n8FUgasgakRZ7smJGZHUrkwMhuCd3duWUXzXcDc62Ygq",
  "key8": "5zWfcyMroAxzygyYa5JofAsByp4qRuwJF9b1vjeGG7XE2hEV4qmUPdXuzYbyB1rQmvbWLYCrmgJaSDxrbj9WzgpM",
  "key9": "5pPXPya4HnJD4hd2sbzk8xvB65F2gwWZiR64JpgKtcnsz9FopPAYziSYVNQAKmZBr3L52JhHH4Hg3W7hLWQ5gS4A",
  "key10": "47zGXVepXUNc7FMGiA6aRHuA3JNC4YnXjbEY2PdsRC93oPocQ3N7VvWvaus91quUq5H6BNnSvJHv9kfn8iFsZGza",
  "key11": "2Pb1ULnnfgzWPJbyzs18Aucxs75H3a18HDHi7qfFpxW1iw9GMAXjmtSXRLSJzWG6oWV136oF9L75HWGDtYDLEWS6",
  "key12": "67b6PLW3MeeGXg6yhXMAEE7Jw9hm7v7QZ8Uo5TsCKyAsCydLMZdQXvPWpu7HbDWjGMM8Lie5Y7kACZYyMnnBzYeo",
  "key13": "5M1qbUnCvtWrXqLXeo3UR5upMczvnYq7eeyvLrfdWVvgWVGp5NQGfjhants6wmzRe9g1DKpKEYiyYjUqG3G8bYk2",
  "key14": "3qhgkj17VDtnqwhyid67cNRXTV9RQHjCs1LJqPdLtzPASPH64RaQ1S93sETWkrGfzuoZQhsUkeNDXS9oUxuPER6w",
  "key15": "2bctn3YEdbvVHdHi38Cg47Rh1xZE54pnDQpdSUbS6FHRt6qzdDvGEdkJA4VBwsKRPvCBNYEiHSUTVv2ZpJacmPnt",
  "key16": "3Ld71n6m9YjZScnR2fjo7FjarRn5bijScdBMxPjhxmN3s4a5cSPf1LzCV16EiypAKubNcUHoQc1yVkncN8JKWgRX",
  "key17": "32CfVFfeNM4Kbi5Lj4vzmjLHfJrYk7iZjKh93DB97wD5tDsJaZgothxT7cB6YH344QDahRVmsAyGTFBEXk9897EP",
  "key18": "4pHWNf8gbrFHr6z2ER3ePk9VpPWPMVKDa4CYEMzDyanfVgt8cDmgmUFUe1jX9eap5XZeSHZwnvLeNQHT3EdvTNQe",
  "key19": "3tWfrt2hy6Rf6X2Bmi8DYzyBJNqcqJdHRRavQhoRoTeohKvqZ7p9sgT6QuaP9PYk46VWYHVvy9K394BuNhEuAd7D",
  "key20": "3Y8EbzxtiXjy9r8NaJFSNTh2kZpMFZvi3TFe3hBNkQMSJRVKyRtu5yA5A5ozybZ3QwPeGiYXbukN6tfT5Kdy72Ke",
  "key21": "23eshQ9yWgLECmxtnVDNoR4xCPTBEpA8pbnqpsG5uh9hrsUYzHnMi7LKg1zG6DpTij2kh1hJQQCYCF4f6eNtLbfY",
  "key22": "257G8BMdD3fZLsaEZB715zU1HiprnHoo2xpUtoeAR1hcmVFadPefK7NHXKeMPgDSEDvA4gqCNy2XC5SXjy6UNJdh",
  "key23": "2bAitR6W1La6DWvdZqJ3hmNpRMWG8D2zyusQDCszJ77UwuTbN8kfuTEU1TvrTLqx8kqPWY19hT6dPQ3KWgJbu6Xf",
  "key24": "v8jLKQXonaLZ2KiU5b4wzdtheTmM7eeZm5ncWszi9N8FKSbovNc174ipmdrEfhv3tGtgQEoFPQFRX46ULroTmFA",
  "key25": "2Vyg9GWFznmgh2c5wX19qprNV1mjmuMkLPu4c2T9e7HSvETXhn3aVB8AyufaCoKkkKdFoxtz9cwNbXW17jrYixep",
  "key26": "3Xn1Mi7z9FyPKRwu9xuiFRUXUQXmT9XKKizeoyvRumYmtT38wihyj6eDevyPXmXPYi1tKgjsux8SzWsqCExe6Akh",
  "key27": "3KH5ZXC73RYKfnTASJvgeDb2MmnUrzeR1DMFhodscs8G4WEYknUF3htVbwGaJaubkXDq3FoXgcd75fWxRJzN2kS2",
  "key28": "4CHGsCE5gPWmV14dPCQGor1Vw1RF9CpNvMccbX2groiADacD85D6ykKc79gr5hRe2FvZvKn5CxTJeFj9c6DyYkRE",
  "key29": "3LER8zREMS75FYAPFFFAAgbM6MRrqXHjEdnE5XV2aiANANekBv5DXBYxWkYCiLxnDPPqrgK4j2REDtkiR3hLBWZf",
  "key30": "Rb2DU8vdSkaBRrFtv334QL3eBdWUkdZiuCLdZPiBsX6r7W78UA3Kf7HP6JD3k3aP4bwc4vjKDennnD283vnZZNU",
  "key31": "rWHto6c3PYfKSb3fii3S3X3QmnEzAAvQneqqwuQuSveKXGcdhja3bQuu43LwgWgLzhuxve8DnwkshAsQAP3r5Lu",
  "key32": "RNcEFwJz7JLV8p6bZR8NEz9qTU96xBvVFa4hGmkwGxsB232eaxrdvRWQFA7rL2khEq8pHcK6w4VZWa4FxhJyFe8",
  "key33": "37pLZte3BfFQVFNTJ8msmbsLyggh6gis3WcXv1725SX3aioKwQGF9LNxxnfc1K2WdBqnnYAaSKp2xKyCHVhrDtxY",
  "key34": "3gjxP8XTC43SptKuDp81hQzKeFus1EZ7KqYpfSrwJhT1qJtDdUFBYSCZy7hSwCdWJkrXNuhXb3es9hrm8LU8vzrT",
  "key35": "29dL5e5kJtiYNwmntbgMUNDzGJmEjhtr6poB3sLHK6xFRa2jaqMN21MWMSz4jkuSMYfDHyF5w5yohKXZeB4kCJej",
  "key36": "2iv838xod1xJTHiZ58sSwfgYNkE9SCNefBNn8qbzKWewrquMyxCvWh1xJyVTpoc8ScwsnkwC3NqDTLDBiLZMRuQc"
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
