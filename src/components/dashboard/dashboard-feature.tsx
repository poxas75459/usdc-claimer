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
    "48eqSrQJKzfQmpSfdeBbuwsQHZxKgqj7zcNRzAtDV7v1Wu6AjQaENfzJqk2HadgkH7ZZCpDqR7CYJFiva6LN5yJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59mJqTCvwPzxLtQD5ujavxpairSkTrzuWNnUN9rmpSegnmrcSrHTV9Pw6J4ncNnMqVyHeeNsVH6U948LWf9USFKJ",
  "key1": "5oTpRsrnvh2QAALvE7g2iH42bqbHUXbLAhNScsUDVPAVNCfci94Czz2uyzG2Qk5sJpwayDHctv1JFYx1xRH4taU8",
  "key2": "4ReKvumMbWGbSttAmbw1i2guTBtN7qS7fv7syLkVbWAZJrNJBgUEP669QDTSTjwMDrhFMQhrqmpZyhfKjZ2nf1xr",
  "key3": "4GVKMmWgCw56duCh9sMaiVEcfj2rfFMjqjYBkxKrfdfGBHwcMwaV3znchavYZWpfZRf9ZgF6RbNf6uVvr91KfzNT",
  "key4": "3aFFieyyPR6ASYGP9JCPLtvVy7wfnkMTe3mvZEERVDRWPs99GyiVQJYdkhsgySgdtqZZJquVJaHacsnu9mif5Jtt",
  "key5": "5U4V78jgSj2UZPYj8rrJCdTRRhNZtCXqNPSDRcKJFPQx9v4jB8MqRd8Kbr7vMwmW1orFxkzvMgmsUGsZekEx5qbX",
  "key6": "5A8dhJfCRBqvHB4XizrkC5pRnR9o256FGjmsZZEzrJpTxtbxCoLh3UCsZdCkXj31hY6cPQ9TdYVrQ6t7MVGtCePY",
  "key7": "4sBGQECVipQirBtdaW8akkP7pVfDNysnC6L1N6VtWFuckXJyFcP8Dzw2WWjxwM1dkQrpNYASxE452MaY1fTExH6L",
  "key8": "2UjdML1Cmhx8fibD4M9WW4qP8m3E25poJ1as6YuNnFu16goNXTDzbuc7nK7dCLWnfFefJLE8JMzpGxP5jPQHSJJ3",
  "key9": "3axkpK3vZHVZ3LWg8c6b6pLXp8vpSwNf6SrLiVsvEuxun7fCUZaCPv6YrCPF3CrztoEhfGPmvB4LQHyV4tfekxuW",
  "key10": "4vvyb5G7ZHfEt1yUmQvfCsF8tmkiSbLnq8vFJ4iGsY3tyNEHoc3WhG55xgbPscp7pfWQrk5KPha2PnDceD9mxK2M",
  "key11": "45J9SQVHqiW4WKxk28xJ8Lfxxi6AMk6iex8kGcadrNgJW1YY95ybooiidtoaodqxagdQyUSQZbqKg5uYP71ytiL9",
  "key12": "35pUkNkdMZfW8eNGvrmbFMdvc5cpfApRnXT7YVKnMWMgvsSSZ6ZAWHTzmH3kbsZb6D1otk9jz2Sqj5PDk2G7qoFf",
  "key13": "2SkF9x28qJaK8kKupmwseghgLcvopz8VU3JVZpme6kua42UdiKdGfCuCeRVCpeKWPWWovnef22VrZVgtFTqDAWXS",
  "key14": "4wt9iAxVu22X7nopp9qBdA9uMddF8w9z3qZr7Gs9gU3YZiRkArGvidoXn5AEMWVZs1PS3LSP9ftUqHEB6pyfVNrM",
  "key15": "4Q7NCBvZiPuEv17z1Yn5hBYBZYrH8fEZVEBvYdVuY8fr6E3FBzTjY4L3LexTFqKTWGrps48biGYXkikqa8tFTWyG",
  "key16": "49gpKTCPX8wr8CUeTHzx2RUEjKw7Jt6R6YEP4rvE86LVJVTxQAyZ9CpjfrfrMt8fSd56WkFvPJ4AXwjMYZ1FNYNP",
  "key17": "39FgRCdoBvxzFuGx8vF63jBwvqEr5CzW1yqCXDJPMJVFrvrCJeoXA35ae7G9Dm2Z1d3oi33uxkMJzTAZgUyUQmi6",
  "key18": "2hBCPWeJYq6Wetz8pfq4vuYgzo73Bo1vFEUBC7ZweU2ozL4wgzCthkjLYfQ3QdMDcDgJJnZ4iCrfEAQfp9APbQMW",
  "key19": "2Hz6SLSsa5Qt9ekU9aZmcqAqX5Hi4VkZrWc6U4qDiVeP2mFRwuqoUPpQBvnd8xPw6YaL2391bCzJZiE2uV5QA9f2",
  "key20": "5TousqxkSXLxtafDcPvCyTK72ABTbY471cCBsPtWo37bzL1rgc3qNE7icx4KJXWVkwDyVvpdUW82RX6qNbrNk8TU",
  "key21": "4vwNDMErYDLfJe2WfAxH1eVn525PZLTBX82WEHZGADpgwsPUoqctkkXjJDCbMPVG5KGV9pi4ewE1wsNLGQBxohZM",
  "key22": "3MJLFsbzFQgoTndtYQ9u9DgKGq7Lq2dxZXHjxkRtwaQi68q8DXq9smQFqQM5U2MG4yseJZ8jum6bwKaFADi7UFW7",
  "key23": "31SXxVTJnZUeFaLNVTmrbimVvPuunFJS8HhLc19xEXhoTpijqQ4m1xfxkF9vMPxBjfQimVARrhy6BGmfe6y88VsV",
  "key24": "APqRfytuic8PZUGK4H2UsNdZp9cJAuEE8QRqaBeFVeAFNE91WyXkXmtWduDKEi8PUGeEDfFsoZst9jotdZS5SSB",
  "key25": "SBjHr2JrnhcMKgKA32GC8PdJtDTAdvJ5b1RsEx8ubNRpNqXQEupFyg7dnufeNLLb2aS5uEQKudFebsM8dnzF7Wa",
  "key26": "4j7kVYCpkMfJZ9ihrRpEBQJ5sX5YnTtdTB2oKLt2bbfVPCX11GFDrqeurhED9WfcQj1JoYCQ1yNdELp8woxSaHfN",
  "key27": "4ZWUrbpCtwdcz7j3EZobavsMbiKyVdxxUbSMdsmWs2HvrTSMiFBkCJQDdmnV1WMUa7xiXXrmNztRyT865PUQ4xeh",
  "key28": "jYpokwJ15bVf4sW6vLMfqhb1iQU8YhUo4f2e1Hr9BL9vpVuGdFzdVyMbpiCK8SMs8rKf8HNTQX38C9EgoAXp6hs",
  "key29": "kmNLMFA8tjmifrhUKhiyKMVTF9Ps88RcCGp2b8gWL7mT3GQKEx8pnY9pJC9ocEKcZvwRgmcztkW9uFmpxixUmzs",
  "key30": "126YYPQEthEvG2B4NdaQWcCz94WP6nQZTXgZH4xUswGA26v2VtjYFZumhSMMXXBLTSruT4KVDuhxuAM8CSAPBBY2"
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
