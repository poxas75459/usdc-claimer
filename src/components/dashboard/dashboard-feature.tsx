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
    "5mLCXa7hmD7Qofwaprhn4sdMfxUwfiiS8gTwvG6rGXCJvM953Qhy7w4jEaGp55RxtTh9dH2TszJuZJocLbcmnq1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qtbMPbyydjRYWWUKp5pmBcM8QBcmTvYP9aK5mpQDTTrdyyRD6g19dGsuCgns1Czz7gitLqC4yqduyWk6QWE5eud",
  "key1": "5CPF3wAzo8dPew1MVa6t5573M7KQJwLv1Uw5e184wq22iNA5wd2hqJ2ebBka1xjC5e4g9eUdbDaTKnfVAcxmyRbE",
  "key2": "36pHzALQrjVKmq6vMm3nEKPAzsfvCVeCFSUoWQfTkhPaV1pzMbyV4ptdJm777t21ST1d5XF5VYnsWh1vz5iuTCvg",
  "key3": "2Qo2ag7n3nu9K5uyaLtpVScZqVMRCyaC2Z99zBQHUAohPurXkrRUCJR1ELd7QcKGQ1j2nTQCdiLHz6EgmLuieLg",
  "key4": "5E3ngUDKFey85NstpD1X5y9Xn6QNojBHUvtcXYQkVFsYd5FXZZ7mUNcBp4BPwtQ2Z5dQyVbSaAaGQMGTnPQegAJ2",
  "key5": "F6UWKsUYzQnRMqXugYSde1bdjPwqnXRmGNyRk6DhNayjn4yjkAUCpAAWBEQ47PNEXq6tZDZV95svKshaLvmdkTz",
  "key6": "41TyhoWtdF4CWYmRnqHjvRkwPDNxUDM9ELJYcKknHw8CgEqai7WYChMoiyRjrE2WsJJJCxWjApNv9uAZK9h7eEem",
  "key7": "6fF7sYaPfGFfotNFXpjY3cvJm7gTE5VgyPctEjfv1gTuotkxcPZkCTawdmfCGonWzzbsV921DxYj2qvF2WsP55K",
  "key8": "2rhpAKRNN8PdbASpirnHiWJKVudUgekHXm2N3hKPDvh1QJPoue9zKRR2S7w665YnV5qL5AHWXwRQGK5ixQ9C4vpJ",
  "key9": "3vhZczv7SaHtrA4gTEpwDSoE7pWf9sKpUKr7HPCRZxRW3U3e9ZAbePgLXToBgkKaMyb6Z6n3QhJGpAUUjh2vyMct",
  "key10": "3ukApby6i2y8pymQSi4SzSNk6i1eYcnMciZkdvk14rKVZqopAPzoxGKKBKtwU5CiXHnK3pBQnL16tcbGYetg9oBF",
  "key11": "3wGxYF5H4LAhv7GWCjK8tfXnRWJN4wT7qCrZNWPKiHstR3gdbL46w3ibFwp1QHTwJTLKVrctc2eHxt6yHhPVVxR9",
  "key12": "4tNZY9DThBJ1DXgswmaKvMezsFmV2XhMLNik5EJP1fbYe7UFB8HVxmvUXxtyvCeGXr3RDPY8tXJ1PrUtsbEgWceK",
  "key13": "2YCW1Qnn91gqVLWSaEVDZ9eps9M28JLPPAWMj2RzkCvs4dnyQ6635ozy6JSSWbA6ZoXpyHdwEsp1jFTAcxFELC3T",
  "key14": "UsCFTV3F6e1wuNcr7WrGQH5qb6mPaEtfhmANneLjTNpcx51rG26Uw7w47iCDJC79YJrjCqEjbaeKn3ua3166kQ7",
  "key15": "AVMyjGoQYTJrcKqQdRHYk8UbbTvQ1wcSC71rstbcnspgDAKmNW7XmfCGeSpcAE1LQGC4ztChEEUqRYhrAhGdrDx",
  "key16": "2Jq7CX5gs2WkVKzPYcY8iL7XZHrHMiZxTVxUGCzHp59FSKYKAfKKSgDbJDz6SXTpXUJqdXYn1qYLVTzYWSiUx627",
  "key17": "3kbspoXKPR9fY3KhnmFUNy78LDXazUU5RCfobEqM9anAbYbe6GWeLGsSqwGvsMEp3A58HYmKaF8VfdmZGFm5Up7y",
  "key18": "219xe1jWL7jYbhcfHsFG2ZXWAdWwpwry59CaqCgyXxRR97ugPBLP2omMmpu3S5zvWVQ758y3N8GGruXBBWax7LAF",
  "key19": "4rXMv4dVkSQ3WmZHiUxbwWPNKCJNpbRJW5TFCrjBsjikt5PYk4kSw2CdhncanxmVi4fTk9dqWAvaz8BrsGbFF8iA",
  "key20": "4Z5DC1vyUKSetDGcNLA3HAkYhCQsskWuAtchJxEDV4fuJ4tBFU4xwV83Awkh4xMsD7kKsJp5BmZTUF3eKS2jprJn",
  "key21": "3dzvJDBLsXKNdxM9jsNzmzTuwmD5XnhpK6ER8Y5BhUYSoe7a2kJTaxao1Lz2hLKE5CGHNVaF2agKabZVUwFXFmSi",
  "key22": "65vtfHbkZG8G2vPLmcmYb4wZZFCzSw48qbAyaHcHF8zcRGFcdzd473iLgMXPpBPeQc3xizwKhEexpUybuEmytr6c",
  "key23": "2R679QfxvZjuGeTRtp72ve8iQ31Y4LbMk46NgC9wMQ4GzpQFWWuLeLYKTZw95gbvUhJzG9nuUy4MttN4aoQRANRi",
  "key24": "5yFm8e1bwzGkd5uWpAhURwUJVqWe1BgzwX7Xte2tY9dGsrzsd5Q7sNLsAH7FSMqDWtsu19xD22HChMHCSXa5yJgK",
  "key25": "577JYdsQHAekYNm3g8eBj38UL43tEmfKk5nrmMm3V5KyDFxND2mG5LkNdL4t1ytPW46WsvoD1SbVCFJdvCBj1kY",
  "key26": "2TZeTt433mwo1iwaRWvptbFtpcA88ZKSHBBWVkn6EZpDf5gfkTjKskZajYNqgFkm5zBwT2YEzoEwKHAB6G3QCZvR",
  "key27": "2mK3aKRWC34R13jEFD3ncytAu9stqbLfLvrYepui5BgqGa9MTMJv3Xu2ASAroWgpc7VHjo9eULqJCaXnaCqimXtj",
  "key28": "2twtzMYZsGkBDPJCE9XfzxjaR1jLA8doriwPWZsZpeKSy2J4wJcPFtgZCyS6goxy1gvc3b5gge5cZ9p5AzNcELEF",
  "key29": "4LJLXVgwogwCA1NHb8QB9CxWW9pxZqMw8KjYL3uDdjXaNgBJAxwe98vjqXVGkwDQnQyJokeAtfmqRn8zV3t54Wtv",
  "key30": "3dyNW6CPL2fCkabuk5CTJ1hwTukURoq31ve22MNzY3rqyyfUDk9y1gZkh4MGBzACBijM9yYkUvaqmUzzkp5VCo5C",
  "key31": "2QHZH8yeUsu879hDbFcPkqn6x32bjGxevM253sgZNQKn887GM1hWb8vFbJmZsYBqhUZG9GCrC3dH8kvopw94JTG",
  "key32": "5jJ8McrtqvYgPPfhH8bULoRioaQc84gvVGFFi6eoHQREhTMpSuuzmHzYBjGoMvyR5uU2qjFA5XrmYoAjtsdqWVon",
  "key33": "5b95ueiEoayobUjZa26EvNQmcSoL6aPKKW41VxmQBiGR54hjebG2Jjf5rFDxc6d13VcdiLLG4HSwNvQyDf5A7JHP",
  "key34": "5Si855y89PpWkcnPWodrqLCK3mLDEJa1PhYrtgvxmFnBkbhwGgpaSdkLB7UhrNmXbDn9PgTH1bhf2EKJWKJwHPbe",
  "key35": "5ZLX3eCksL5aTVoWCMmtGmi6GykSEiCuxWt2Sig4A4waxsFfNKqy7ywRz9AxJhn8xoB3RbTb1yPdnqjBtk3MebMe",
  "key36": "5BbKd9A4k8NLSbE1GgcLj2yENsbsiPZ7AAYjLaonkyoStKsyvRRiMupfPJNzNJyLq6imTUB74oPX8nW9V7qZo91C",
  "key37": "4QJAU75HDz2BCdutARv653vtHF6cFJViaGXQLFaQe8DNJjQGaUpLbNa932CwJdBEE8eNBgUgtkAMkQ2B1wrLnQgg",
  "key38": "58mRfVz9g4XhFWA7qWTFaptALEAwQnG5i2LgMHda8HwmHwDxFU22GNHNxgtEcmSy8g7HCXcTw1yE5m2eKtqDp3hx",
  "key39": "5K9kT3Qkp2qFuAbZ5gCqRAG8MW14JBUFSmBQgTJy3KikGV1uBboLSydV6tLmWb3QyMGUR1pQBF6hqfYvmBnyCLsj",
  "key40": "ZFidmgBzVakLtJipqtNEkxBJsPPy6kPmYWofFSpreei4dwGBNoG5ncLe2kzQfBciwGnVX8vUYN1f1GwJ6QVkANs"
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
