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
    "2WyVt72WEoKbPypqni86oAu9CEeFPXLKjVk1pwPXsPttY6RLEHngjoqdCTmAeQDGaRyXHaX8RMwuuNvkTgo7Trgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwamFxfD6oaY2YgDe2tuksKGFNDnKCNPJhAvhAhzBS3AfnXeS2FRJyJQ3ENcPV7GvAJfs1opNetsmygUzTZtdQD",
  "key1": "3ty7QnQgpJaj9MGCXcHj6QH8K1ZF99UX7P3dAxZaZQKQnUjvLUw8yYkuBmZ9yFSYiAqUoZArCgpj5LgQ88wwVXKP",
  "key2": "3XkN4y7N2ZGhMjSLHYxnCBAiFMjPUhmgZNgfpbmu2xgojhA4AcLyVTt6NFigpPyirvYkdgVb5DMDqt6CArWcFEXN",
  "key3": "4VNEGAQdu8L5ZexdSdHLQrt9C9QPhYaRgwn4g1iefwjXfR84Y1ghxjKzffgLmyJzjjpDMAEK2Ng8fZ9HpzXZHY5y",
  "key4": "5YcCEYAZKADUBKsh659ieaEeB9b24vevHsyRPUu69R7uLEt8x5JP5sNDhgvPKQtL9SDLcTExJb4MKrqzFaqe6v7a",
  "key5": "28aiJjwZ8ZhmWanG2GhrHktcfw6XRDTRSrQ5hvVfPwBj7ygAxZeDvSSR7XrHmFy8EWes4TLqsy9EDQbJNjzuREXQ",
  "key6": "2EEZKaDKduXpfrawBs3ypXbwp187gnav1z2vgqGwgYLcYuWv1GqXPFcg8CtkWy4fcwqBDedzLTRBxrAXP9erpdjQ",
  "key7": "2r8igQu9cxR4PcLjecdCmMJDnTQGy8aXxeP5uJMYCkyXVCv1TuJnC9kX4kdW1crEhXD1hSSZZF6VTBHYnnCYRvyW",
  "key8": "4SgBcBSfZNgYwL6yi18BGhkWNWmgKe84kTWwtuYVTZEyc7YcBYdECWSRBss2DGo8rW9H81jdXjiTLJF524WWy3LF",
  "key9": "5WpAbCX9WaHBx8n2fmqcj9GfpvwDBKxbvaXwRxvyDLrwsCTefsV4FV1GfEWoatYJkzkQBPrYo1FSFQ7xRNhSabp5",
  "key10": "5fQ1fnNUzKhuoNUCJecQKbDTK3xfThRqwv2zwur2Thvtxe85R9MBLBw1wNsWmdvqKBtEcEXZErzGSFeMjSVtaVb7",
  "key11": "42jBDmJh7MyWayDdpbv5gV8vgnbyLx1KL6CaEHjfDpn9vSmFztdP4FFZd2SLMnMjcdMDNbyooXxuj1KmqgXoPrBc",
  "key12": "4a1mHjeynuBT7yCEDw6FgUeReGowUNpyByZszncK9SNdYVMyCaVYuraVkyRcEk8pBzS618t5PZrvg4JAPxkfNufG",
  "key13": "38uzobA5DpBtvNPdq1igcnCKaw6PgCkBokLmWbNbzT1qBMjDsmXid1g2wnDK7ZYyCzBpoowzNc8xVvyHm1daLdD2",
  "key14": "43VuroQkPdWrMA5d8rSbR9hqPCKDbHsvDorXCsFrxWMDTVEEGDg3GT68qwUtYDk9yfTLygzMo89jVURkLSTeR23a",
  "key15": "fc8N2QKz7qBAzejw75EVkYSF37KAX8RFShyeqEiypmEQ4E7z3yHxMNaLsVdVsM3EtRxnPWJsWoAgZwdiRKmpWRy",
  "key16": "3sZY3PAEJpEd6huxQ4eCBL7eFM1yu2ZxzeX7NoZQkwCp441Xn7oAd8TJr5wDJyouzaScpo7dhidL6LDjXch2bVwy",
  "key17": "4FR57PAoMWK9w7J1sqmuYVcwUFoV3ygbEGwmVC1TfcjhWEPLTUkoDUKSyPAJun7DM1tqKq6GWhxFrAFFBEH8TxuP",
  "key18": "646GVZD5N69M9cmVXswoYdaStZwnBomSQ5Q3ztRL1hZBXnvSwnGeuhoy8Pjb1hUcdppGu7P6U6eHP5gMaFx8iYvw",
  "key19": "Quf7LUWUAueMQYZPPD1x1718JpthdghvhR69ehWMS4x6EnjGMEtugXyN7fBLLiowwQCxUJ2Vtq2QPqJTwcmSMWQ",
  "key20": "5iYBbbo8ppHMeNAAnq7F5pSkuxxf2YaAnSjDAKkqxSbbhdYjBKg16VmZ4ZweZui6jKEUFPFgHwz1R96n4JKzcrU3",
  "key21": "yDCVeKP57jx2m6z5xok9krSv7vuq52jv5yAvbRXPxiddxQEcVjSvpYdrKqZ3R8JRzyJuzSWibTWTf6f8FrNhHkt",
  "key22": "ocfwZWyoaoi4b7U3xFZHc12yhymX2yNDxTAnWEM1aUHEdSdfq7K4hacfQMTEgp4dCkG23UoMkf8DnQFxCqwQosn",
  "key23": "4Ghvwek4m5UuvmetE1r4pcD6U86aheDq3VHn1tPxU23Mrnbvx3dQPjaTNTnNq6ZT3er2zYFRsitoPEW4GsdMdY42",
  "key24": "3fJArYFniSqFboR7sQyT43p2yj9UKXfkTpFW8NsTk4S9Uu6Ze5sMAeHXS6Y9nxHpRoHB26FaG43r1deToeS5E2gT",
  "key25": "q2brcbFPUgomyzwhtDwmpFRW1DuuaXsgNAYgGpti8bpSwGoWKuMaJXhb9a1UrvWmqohPUvtwifgCZFZcEKzmJaq",
  "key26": "4AkuNXH9uDAgbJrfJSmZkKHXjvCwaYNKmd58284Hq7WgrEeWc7nUNWnyk7A2VGQ6Cc26CpF88MyHtMZMCFW3fzte",
  "key27": "Lpba5oQKxhPJ68yMy2czvR4k3x2CCmHRgJTnHae37JgwfspzzRq6aC2RpMQapgdMnGo1wnmshtrtyTGSw6ongAS",
  "key28": "iTTC1gYwk6ZjEtNMd7aB4QyAkw1q3FfRxPsbusPhemt4zccDDZpJwM8FcuyQf4iTBCiqe2RXRuRiijC5DdBPdAR",
  "key29": "2W64dYjbsnHndYNcQtzxxXNdvbKRZvhaxjbrDCW4zLwUku3o7tVHu7r8FXmKRoGMC4R1oGJeNu2MJ49FucrgmCDH",
  "key30": "5nXB41Vf7pmuNRRjc9S1JNXKeuFaERLUCfU1DVpiAnUtFzqgaoYnw8Uyu3i5TsEX1qpbpNQisR9qZumnjVqGncdX",
  "key31": "5gJ4ZcMuHfxRaK3yHE3yqRnBdFecUVseN1eYUTjB3RFR375HiLrMHRmKRDB863bYG4Tc11nr8nVo4SyBGySuGA7V",
  "key32": "tpu6EsxmMNHo6ixjXTrnf2ZHAAbgtAbuMAERDp1e7QgbuaChz1YJuaDauTTgLB2jYozqfsNNKcweJJxu31X3SXW",
  "key33": "MABFnWzvTbxZ1fv6fE5zqXhHiQv8Qeysjkh2GhubW44HPQSX2P1yjELUnZY1xn6csNLD13kRd7ZakiAwaME1aP6",
  "key34": "4sjmneDFbG3X21UXCqoy9mn2RhwEtEnVUZvwxpGFzDXRgCWESNuTaxuNRkJxdbb4F7jgJzV53zzmfjHYqdY3yrhf",
  "key35": "3B8SPCRnN3KpRWbVawTvucHW8YHRzbq75P82co3xeW4aSeLx4uztyWCnTj2yYF8vE6u55MWotVhFp1pm2YBLLtcr",
  "key36": "45imswtGvK4N4YeRvCw1WBVRaZE3T6t7pkthLKCiaswzAyALY3PQe6dhTPQtjUZSv8uj3ACK19XPcbgvRrT2Kd2F",
  "key37": "5KQgkykG9UPv7U5zFjUCfWPyDxDKen73W3WANi9uX9UvHSLcy19kkg6MCbphAVpT1uPs13BgProUwruiL9hHNt5W",
  "key38": "5a84Gkef1LoYVX5kEAiDhJgEn9Se3pJc5vpM5dV2SgqPJirBzVSdY3Qh3Qoyjb4GcfwQMMFqEEY1YZ3voYYrYsKm",
  "key39": "43jtJJvtPRGc5wfVmjoLvDyeJ4e5izULkeYi8gB6yvzAzHzrGT8HKzN3hwUpz1iKQERm4TPGBrjGvT8G6LZY6roo",
  "key40": "2pSzHKvGWx4HzAyGBwqtVZoHANeD2BiRM9vEekq9PcJrF58kSKki9VSoS6UuaFPqq57VkBwtEVG8NzvKFT9A579U",
  "key41": "2yqgTciPGRYzTtwxQxzpk61tvAt89kefYfgnUSjVKtm5bLaMFwJEFRreW4CDURA9Xr1PUD9AhnoKpNjkuzCaQBFa"
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
