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
    "3BYX41jJVP5HvnFar6SpkuKTyromiFxMJCaGHLBQ4jwXT6Uzm97mycLSQcwfFdFuw6ozGnkZLXdAqjTNFxU6HvXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mbTLYhSRSSEFCjV8gF34U6dracXe4ipRwjiB7H3E2UGD93ySPQchnsDAtxAt2iBVbxaRkXYSfoEAh16oYQNJu15",
  "key1": "4fLWVHtbBGPv482ziFtxXwRiLGeqZQRXkyDt1XuYMP63FxTwV23v9VzGnPez4Y3JxLUx6bWKtTGVvHvweYtzMz15",
  "key2": "2PyXRLba2dTd7ycX7Q1pB8JFBDxtTev5o76hDhrEyKkrA8ukPvTwL4JDvoKKVgCWuWpxB9wRfZbZ38KLZ2uQ4a4k",
  "key3": "4zAyHSWSS5JLdqsk8bwsRmvcNaewaA2aALg1EhHVpN21rAVncHF2jDQKcfVA13sMTgXv8KgdjAeGExHXndjoNXGR",
  "key4": "ck2WoSL4EQHqAbtk7JDTRDe5sbagDyegXMzQ86xUep3GdLFYWwUBGV5h987U5Zv1nLb9GqoHaraxgPUH37EEG7u",
  "key5": "3EUr8HWSQQxCo7SGFMeUGreaGVTup8gdMZ3xgHKUAJhdSbDmd9N7zvmPVpMuPP2iecbpjVCoYRAPUpCDut23CTbL",
  "key6": "5xVNUgjLooCBgJqGzj8Xb4WXCQ3oSCzdXgDuqoxefo8pSg6j7sQPYHJjF4pHAzqJ5u9nL2bwk31oU3viyBQNm95L",
  "key7": "4d6XH1rtU8JMFXaFvZBVu77ZCxvZ8CwdxR3QHirwiWUx5LERSpRiaG7jDVrD3fui43wB1AGFyFDwwJi9AqSyQcA2",
  "key8": "2fmrYKrjYEELGZ6DHXtwxJka46q7BRcYit6um9tvt93A2W8qVPuLHgGQwJdh4dc86PX5Sk9DGSXyp2faZZXC2Dkw",
  "key9": "4h2r5DUsGnGDyovzEVRYXB78dL7YLuEabdWQtknsEY4tiZLcXFtjdhxsCMBe53oRNMvc5YbaBU6hbFFhXxvAQSZ6",
  "key10": "3qNJbk93WzmG7j5GuwWuw64jpk7kHMZTJeZNh5nJWKHu2LgRbu76mr2J2TPCT2pQUzdHmmoYJQmrbcwYtHTweeo6",
  "key11": "1uUj6Jxf4cMd99S2dqvmoYgAzFcjKCfPshwkUPK6EsNzHaiyrR1adJuH4yNv3Kcx1ijc1qReythTrQ3hbXcU9ZE",
  "key12": "38aKgPrXuxjBhhXSdN8kVESQ2ANrZvwhk7yryEfPh6Tu6quCU9u5qZfHVfAXCdUZDn3nf3wVUmXKcdmhsUyy6x46",
  "key13": "2i1yY1rZuJdSauWgGG5jYVYvfb43MGVuLXkRHDz4mbEpD2nekLJ2SYy7vrNRyb5MSYkreTHrXNVc5mUv61epJ8Hd",
  "key14": "5ohMaUaFWzcCQUxZhhVZFgnNzKBu4iMceJCyhdH2f94GGhWrEEPR8cm9SckBctDdSa3y2mmkG8QNAtiojV8Smh1p",
  "key15": "QgMLdVA9BGqKAsGGceCrLFTLL29pCH9KJtE4SN12gtMsjf1g3d6A77G2F58PdD6whZZJ9HgYonuMAAf8aSftT5i",
  "key16": "3uc2s6DGBfeD9UaAXZ31GK5rjSnYoFzbdx19JCMjdUrKKSLwaJdRAogtGEL2vd6fEQcEaZTsg9UticcXkq5LEDfq",
  "key17": "3arq9yVQBHc1FqrEdPpDfdQn3LyAEnbrd5FXPW9ZFZqDUaZ9kZdZ1ThSfrszpeJfRmqAg9NvEftd7GedudKPSWgm",
  "key18": "5AkSiZWmKxA2vj5XLXSpB4VimsSjq8pimacfV3cLi735cHLwvJhVkdgRxwUrEW9UmVtoD5KWwdFVJin5navv6HYA",
  "key19": "341r2KogruisbQmd1N4SuqMDXdJJK1X9H2xJqukpV7izM5tLaXjjCKbytNcPQMkP22cZpxHheBY8e49oakDqdCeg",
  "key20": "38Drx5wCe5LQPr6RUqRK2bMf41e8iwHqGFNa51pTaQjzPc4j7yJBwxc6hG8P92f1CZzbzvARvdXfFcUg6hwyEyuD",
  "key21": "XfF9jkya1PLPoNPeCEGU2WaoKHmkRfdk1kSXGXS9CDc3PFkR3W1abnghgbW88nA7H5Es9G53W1xWzh3HQoEJ9M4",
  "key22": "2rF9N8Zp4DfAwnnPg4MEg1E2LmNN9KmC9VfbcRYCK9iR2G9Au2MCrhZyYHMfoi6LAxxuFN9jEeQNLQYBP1qDT5sp",
  "key23": "4ggvtRas59Zfrrh7UvjYr4YHZQ268Ehjm5F7TnGNeWR8AT23vVRNMNpu7J1PZdArqs6CTxeghLJBy3tpuKHrYHdk",
  "key24": "5XEpn3D5jtSzGkDVGkwnkMfR2LHHDFYJpbVEPFHcDbLZvEC45PAFmrUFG9YCSLWhNWex8rvBFTTWLi93B7H6td8g",
  "key25": "4eGHBHBu4Ub1fG1TauRduzmH9JxQw53eaZc3j3GXRTFzfhu3YytuR8q7cMyofiJz54SVfwy2RzQWSLSra1Rowivv",
  "key26": "3EpJWt2ikuLfw85DGvzhVxKw1nyjEZzGdSwVwoKwYyocyo6VHtwGn7rGY5ewQRHZmGtP7TiKaQLEkwmQZ9VvTvXf",
  "key27": "4TsYbkH1KEJrU8yozum5MruZjDzbPQKijZAs7mU51qUcauhXPzTXohGuXPZuhQgkLKEnrxkoPRHqUnHN7HCgNEMf",
  "key28": "5wnoBER2P7ncZB1tN7aXwLQRz9XGE5SHXTd1N2ya2xowh8kJcAYbRYdKhAfaEg5MiskavAHksPNRu1dXG1rhmRS7",
  "key29": "4QVTs4X6DiqxbPAfe4SfqZwaeVKnKDE8aG24TKXJGvmHmnQ6RNTopWekukjcJw7k9HxYAL8zWPajaUDSJLcrQckz",
  "key30": "4eUzUfkzP2eoCu9EHoYgn32KyWafiyESMtBCgn3jco77Vg5kf4hKyWsn192jxd9vrG7vobF1jnSS2Yq5FNkhuVHu",
  "key31": "46FMkZvvzeG5kjKQsSa5thhxrFx8KGK14rJTWwUJbC7MVHoBcAHiRGsoLGJc1UVTsuNJbUHPYr4gxUBv1eWmSitA",
  "key32": "Rkbkm1ACG3wyrWpBQNwytuKDLVDV9hYZtG97epPWvYXe2CpCHaAERNqjgHVEqf6Hjwj2rT7uLPzBVDzUH1fZ4rP",
  "key33": "4aqvw4eRetADdDxaSq4GPBnAXixXCKa3CDwDXQ7AE6dAceXNUWfumXnJXx7yBmYwXPmCtVgH3SEkuA6voRqLpvrP",
  "key34": "4MqR5mWnuBzJsk1egaQcdGQ3aaopDSSdQCookKMA5Kjdjg3Y3MSCjLvRe43f7HCPUdjbMLjoMCqdcuzcuEcqFTLB"
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
