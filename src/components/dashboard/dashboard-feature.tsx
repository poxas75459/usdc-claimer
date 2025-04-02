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
    "2KsqnnA3svpPs1qxKGJgf85F3LHczjSnTAAwBV1F1e7Fur6H9R7UuZ1AshK6Kmjoo5LUGhZ2j9bwptSKCboNHW5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TGWvsKxcg72SzBNBSB4i3adJ2MLyTJAm8bijt92CRFWUrkbkBLQKLsBjFDjBggkZCptrKptoAagCsKfFL1842Fs",
  "key1": "A9xMjZe9ompsJP1YLWr1Mh6EgKxALPAYqbgqWEQYKmNcWejp2PiHcos5cy3Pynrq8iUGbSAbQHS2jdtM8Rbyqj6",
  "key2": "44gVLdr4FZC8GWbW1fgqb4W8heZebFmBzg42LrvyceuQ4Jwrao2fNRCMxyreyHo151sEi9tqxpJf5bSezfiiWZFf",
  "key3": "4WPSXREXjoSbVw8vcn2Y86Wa2zsfEnRJLQmQHm8w4YZ7Rw9gmrCeQfP6ddEHzeTch7L9WZGgemHU2uYuyEgNAot4",
  "key4": "3XRms3S861MphXgy3Mn4agEcSYh1AMrBN2mNc43ta5KG7cNFT9szrqbSCcFno1mXGYujk6kLuks5e1hxur9zbkLx",
  "key5": "5EU79axfAt35eamkRXZUXNvUgLh2WpnWeJNgqMdLy4DZ4v2ivNN77kCWUgk9kF19r1BzkFD9tdDuV1JGFBFfe5kL",
  "key6": "5SRc25trREUqR5ubnH6bAFSGw3hncygUSUMDbfukqF6f7o4dmERhoA2CrerVPHVf5MFFSd45w1mZukBmSmkVfQbm",
  "key7": "Tvwk8c2t1Ki9YGjaYzS1EmVZqD7UV5iWu6BzE5v5w5m9ZWxccemdXS1fdH3J43Yyy2q4r48NPT7DToW9VzSN3DB",
  "key8": "5vyMWfBRGgNQSwqCiQrugZaW3F1FKyt5gd5zbgb6mjH5XNsBwx93VxQo8Thg138Ed8RonpVHA7gcQvsRsqQf5LJb",
  "key9": "fJUaAkmqJDLYHv9y7tnGwGvY46rnGjCFY3sHrCNaiKTrZNkWZCruU2jrBwqC3Hy4V3znAUEtnhn4644XA7z5A5X",
  "key10": "4ZeP91Xv7UyDMgZJMT5wMnouj4mDA1LBd5EwWct97uaR6JrEgZnf1SRJqu3ia6KJ9Xf4FrBFQQEnkuXPc5qafauK",
  "key11": "KhQVHESkMmivjVoTvwfomSbyK4F5Enbz3K78pZ83N5e3mVoLFPVw3EodzL6J6dbTYLpLKP1wcJ3VXsJUVW8BVrn",
  "key12": "2Qh4EH27dtkeUQxJfzpj5AXkX8dmUtyEH2To6TGCwtgfDwtnawiJ7Sp2Zs1SH94GBx1vFFS4yCSrqX1btbZ5nysm",
  "key13": "5K8KNroawRjKyKkRAxf943gZAdHPvmkYSaJqEQgT7TaipS6FCqcyyvE6mP797amhtgzBfGgG5WCwRmXV9agxqdA",
  "key14": "4hrX6MuPLdtGDsonb62y2AS4WTWxGNUQNxMAYBqSngUYdZHfptmRKyfqsy19hF3gk9wJMFyEnsGFMqZjHdXEa8bs",
  "key15": "32uNL7vp5DGWE4L5gkVNxERQ5S2YE5sSQsTE72T4KcpTkqbXchx28dmZw7FKbS1Qoc6X2yVkYnAxyPsXGBXjqm7y",
  "key16": "66pNqg2LXqFR3ts4A7QzN4iECWwWjnDfVipv9612JLuUh8wsapsKRm6okA5KrM4owmW13eXi5vaRgTeB8UeeSF8h",
  "key17": "57bC5eTNwbq5BAzs2dhJw2oF1chU9QYy8TasRCo8tjHVJvWu7vYSBjrd2ePttHPBqit2fVLfe3ATL2snYZcPVm1D",
  "key18": "3HSGtKKXm7nqbamDVeKt2h9W9zSyTAvdH5DgQLG89EK357qFoDQgbreELXn6gYzNgBF3gcVZDHfKbrinAKNyhLEq",
  "key19": "45kHWauX3A5NyzqWwuieR45qwvFLqmdbJEC5Kb35N45XpdCjGTkU4EpDSwbSq1gdwtN49bMmsc2Hzdk2jLCPvRwF",
  "key20": "5bqDSRXQFnXp5WX6hz5rCEei3LnboYFGn12Nue1raVNYfUsSQKZPiaTZrWuZ6Y5EjRZkXWUBcndGkjwt4QfYH5Kz",
  "key21": "PYt73vgt23xeREJNZge7f68566UUXBbG1UU7DmnyVou7EHks3pFh2sqULzrRNCTXAPAWUvYSfViJwVbdmS2CR39",
  "key22": "4VMoDu8VJcTaF2SAmtqKYW3bxm9a88BoTW594jWeJEFjSmZFUX6TsY7gTEphpbxGbSa4v2setEknikCbZuuXPu1e",
  "key23": "5y9jJktKfWqFLLBQJ1mEPSSfUmfFHTUJ4MSKdQmNvT71CsTUwx6DT5kVnqUxgtALuyb8MM95hUyKYBgnE1tzE9jz",
  "key24": "p6robJEms8DNzdt1cbwCjWJitEL6toeMEHZBZZF8yZM6BUDF6VHVLijsRLT8DfNgrUZFLokjGzd8VxufnGojyUr",
  "key25": "3QeasHCLPxoz1NbWDbpu3PsSSgGeVXHQFqEk7NnGkGGTHuQcUam7tx4ajnUPM2dVZL5ZkiCy8RmntaHHAXMRmCNd",
  "key26": "4UE2rCPcTBhZudkZCUHRwSJvUWoxg2zsvYGtGTXhb9yrmLWn4MvNFG9q9JWaxHqfXRhVqmXEYFSKaK4af5NNDME",
  "key27": "gV2U29h37BjjonGfZd3t5tHKhJ7su5QJNCQowfqe25NBT3aqtw1dWV7hRhR7QH96XD7TLJHkjPBGiNC2btGqEdg",
  "key28": "DMomzm1cN6LUbcEoV8sewj8J2ZparAQL1LzUGknvtYvhjbPZyv5AWhemXjo9EYWkZTa2SUwKBnTR8PLf2SfV1cy",
  "key29": "3XCSRLjrNCNT59E5vGJAExjvY2F7ht6TCTerw8TXgjE1WeiuYDUXTFKVKJvqENMLaD3ksCrhbDRGgYyTSuW61BfN",
  "key30": "2jw7mZ2tej3ZCuf7WnL9wxmUBmjqnFXkJfZMQTGP4R1EXnpbKxFRWQkoUY5JPZjFamCAkGVMvKV3p4Y6ddv1WXnG",
  "key31": "2wcKqu64XQLsudztwGjkzS2XCmkyXQVdoaJJkxY1RoZRY68kFDU7dS2ptdGWyeCtKHvJt2443TJXn3iE77HTLrJ5",
  "key32": "3xm3puv4LRwozRHZoZVeG2pNDV2ExEjHM68HHMUCMJCXPz2jxj4e59ctPKegcDx11kVQZCnPHCXHVHX6Xz2XFpPe",
  "key33": "3s4B9K3tTprwNVhvmZiCu2QjHJiFUKLKrP2EWMGSsRcnLjQXq1ChE1Aud9oii8kkftZG4YquBnTRnqyDiP8LUKF4",
  "key34": "59xJzYaBDeuXdbmWWSqMyVhgSVBBoyutPA8rFkgaxUY3Yfio6KLJM6XNUxxmVy2tUZjp4ZGykn9yKPUQpknxHVcH",
  "key35": "5PPRc8zr5ghvtN9oRzB4Z6sLKTqMSBRDK4NgaNdXQRhBFpiwvNwo9RcZyFqi2NJNYKtMcGPrWRdBaoMZ8ZpdQwJq",
  "key36": "64ERNJD9rnyCxZyTjaxuETj3YtsE4ukrDXKVmoJu58NQacBTKpSQTfeY92fyJeU7K1CtfGVBDyxWQKHYUGAFGoH6",
  "key37": "4JHRpVZBducDLyCJVrxjcXn8euJPAfnhVHmGJ6wwfodqWjQTDWW2fQ7inEKWeBX5fQkXwfcdayTgT2h8Z4bxWwE2",
  "key38": "KS97jED4HqYiur4X9dwKMoKjBRZNtfSrhMNwoFttrhT6G21Lntjp1rGBiTbwqFWVAnytQtLZ3n52RtmbiWVhvnF",
  "key39": "5kFdAeVX2m1Sfpr1GKvDiiruWvAh1aMdBuTeG19rh38Na5eZNMgNEjoigQ2JuY5HtijJPLQBniZZkmp3SA7uSrHd",
  "key40": "apv82D2J3RRs79V6togbnUdxfP527KaJCNa7BLzGjDsvcVtAXMUf2rfe9UWWK9SbYH8ndc84eZt5EZn5RyFwwqg",
  "key41": "4Y3H1T2FvNxp2tjpkf6vxbd5epFZ2ETGVtXxguhA5TEJZETEh6K2buSQMGdJr1MEU3M87rNaVvMnMh4xvhW5rwH",
  "key42": "5QRFundLNFDftTRwjEAa4jHWGoRcR9u1wKTArMHuZbZUAsBw7A9RyE2KUDiLGqDHmVHiTHCKEFjV4PfC3HRQVa3f",
  "key43": "3bQTS59FDemz3T1ZpfhEdPAbEgeACgYckAuw2D57zGYk1tbma7MW3chmroNE9aox8EJFwD5vtB516N5SY79kQdvn",
  "key44": "rJy6fGsTEBXPTaFGfR8z45UmisYk63BdxJ3v6SHCGRp88saqHzSw4eoKE5oMeEYvJgVcthMMp3jNdpdQAG3EidY",
  "key45": "4CYDf4VQFhEPXtg7sMuM1oUZ27ivUod5G8jCwKa8mux9B4FexqMm4GgfmteSERhRtg3LJ3rUvB5vt9sNyAjzHiRz"
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
