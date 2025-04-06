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
    "5cXBfm7EovdaXR615ZgNJdbKTU1tgksyRMGfG7rYEZSt1CdkbfAuckdEDaBWgH5CauHovdrEk4ip8fET5cHpmyyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XG3S4qtdykZ5o6yzZYNaa15vQnK99HWw5J8T4SodqgaDKyobipUAGFYP9akUydUPjZTY1RkvrKcPhKFXpEzmSHZ",
  "key1": "6RtKpFouP2cYsuJV85kjTb21BbEGWZFxhMopfUNCMxRVKRnoARg4ngNKQAjioze9fbatLic854YYhdLqwfn1pF1",
  "key2": "2YeRUm71tmsG2MCxopJqcx6wSWwaYMhxJuoPyKg5otj4FvTdfLeoT39afALdPR7FTQ8o9wzbVmvVqYemyJBAiLNA",
  "key3": "2mpdgv4eqiZ5SbdRoQcLqrHQwmcGvbKPFghSrJ8syaQR977ihTDdpjfhkibnnJvwB8qK2Npu29vDGw5kMJSb6XW1",
  "key4": "3s4xYXncTfcFEipLp3XrRYC6RVBFBiLqjh5S5UnfeGMS9xqtikH4BpxAasbafAaBEuSumQnrLa1LnmE5qF5SDJix",
  "key5": "5nev7zCpogXiSFYxD7nzEmZnqkXDaL6Ah9k8KYYhntYdsz6TX1bK8tAXwmz6tqdHbc78Wf5rNnnKhcDMmZ7vqJQh",
  "key6": "3vrMRz7RdMaQH38FGnRodwz5N6RsGA2XUCMfAbgGjTWXzcsRiMv2RsrRiw59qzXHzFQvFF6KSnm4KqddRETvueQi",
  "key7": "4Jr7smC5fTW2ZyWZBTGSu38LcnCEnHos9a1GPY2jPNCScdW6tgdAvai39JpJPx7msLABkHvmdnZCKkB7msYywJSs",
  "key8": "4KpHmXyRgNboZQogpiGXq1aHoE7jzLhdzf1LGWqCEyvGDaKqgDgraJqqXtz42mmJU3bYmoLY7GY3akPy6P2rnxEU",
  "key9": "4bGoWuYgYBjbv922tsSYXegDxV6XKte3e78RVafDX9kuuY7JBraAcDEXBCMn55RTuNfWpk9zv44QW1ZY6w8yS6Wb",
  "key10": "2EQPV6dS5WgY5GbRJjRT9Z7sbDCwCzX3NFRZBowBMaaJe6wk3SfLC4cCmESqgFAtzJYUAEDiKeAhzKBG2AaBqMLi",
  "key11": "4x4pBy3fJVgaZbdasHYaZnc4qUbax5ZKh673xjSRsywVsv1cqRjiVNgrc191XboSVpAkp9UqPaxnc6uETwWFbrm3",
  "key12": "29XsuU2ETJkDKsmReDCKh7B1EEUWBtsPDbtt7YagffZPhpG977tbs7d3grNj1oovGv3nbhNmRSo7w6RaJHj2C8GG",
  "key13": "5GsgqaDZD913EA2ioU6CQXntTPgv42LvfrQFFEzr6ZJUZTsceZ8eWgxwsPsbycnUZRcPSKiHPvftyXw8izUm8iVt",
  "key14": "286n6idK8Ve2xi8mo4jVi5yivWhMgB43c2AysXPA9MDUAsSCyA5knd5VFzUG1JztY3jqwgAcxisbN18Sox5yx6Tc",
  "key15": "2jK2PEPLu9DS1eeAeupSQoa62mB2LRpECLTtm7npKHF51soHpFhZMZN44EPoBSV91EUpBGpzwNqDQCe9XJZX4Gh7",
  "key16": "2Y8EaLCVLKmG9Bq5R82pRT9DiDyAiSgAx4NTjFb5L5DdrXfjPoCuadW7RPXaSgijKEryKq9VpDBGziuVSS9UrNhD",
  "key17": "2wAesC6ggYGiRWTg5hnzNHQoyBbCtLW6VYmFNDGhpgbRKnBBmFDZrJtWWaiakk7yiq1KaXXkF7echpLNbiL83SPs",
  "key18": "54NFPS66579UzatWfvEgL3FdXJLyEPMAVW52ywMDxeLzVCHUSCc1QeT83ZP8sThH5DfZd89w2zd2rZBr1AQhTq4V",
  "key19": "2HqSxnzkHhVoCLKbYxXYzwDQ7JUV1279qCi1czSDmSDzH5riQRjsU8BX4G4aW76E4KV5YH8FLPfj4rZvvabsSsbj",
  "key20": "52AB1LY1HQ6AzdBHL7f7aXTGvjeKuZrjpD2spxnKK94PwBGbuk8hdbBBJb5ktSyV1HdVHjXw9FgG7L7SA7GfDMMq",
  "key21": "4tUoGUqhxz4UMeUp6GtPG5vgyCCQFSszPYZpeGtXVG6JDpmr7tm4aY8eEaJtefJiyu6LJoHDmxRNxsSq2M6hjhiE",
  "key22": "2qByQorKCYsZiyzX9LTtNXhDUzySnX3Ao667ZQKxiwojWrNqfE6ofGsESpFvpEGBJQPkGQMzDmtiSXz5JexEuzuT",
  "key23": "3hKks3F1irQYz1ruwbuZi7QUMmjiLDYycNVJuYREgCmbiTLJnkcypqGbUVqZ8nQPqZN64VAD75U1e3rYs9A6BKMQ",
  "key24": "2R9EGKn37zwWAKKaBVmXo25B3Qs1TkhSMYGJGiHJ1HpmMH7GXf3rkE2RtutjrpJy98ANfidRpC7uKNYyL6wnQmX5",
  "key25": "2c37cnLJc5HbVATFY5AQp1VCsspAcJS2eLZxJCUDvk6BLDkV9AXT9pMtfnbkDrkPSPHkfpd4ka3yqykTbq6PLuPr",
  "key26": "3ZXfBiJbYvkL4mTCdVbXHvw3NAmvxPQvrFUQgoTLNiGbKPMA4GCzQ5RFKSY5QAe6b3nfpiXZpEbVTHCLA895rRQL",
  "key27": "3SHCHRxbMyxH83NuSJF4s2cen7Gqd3STTWKFsZhJ1tk9kGNzehCXGpxsRKqGY2gwHuuLQoHxJQJ1iURLRmbuBXne",
  "key28": "2syFHcz4MYWkCxV1dusrwx43vhWkbiRe3YhJra2DyVY3zMaSh2a31nTKjSHgt73BZ2qhBBMLbUgaq4EcdZ5QJCsK",
  "key29": "msWnKN3Aqsq4NGcGhztR3Dk4yDYLwJocYM5mWwLng1SzAySbXk28ugpzdkZZCMHyppNXqggZMasTM6j61q37rtm"
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
