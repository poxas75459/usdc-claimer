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
    "mw5sP6e2H59BCVDqa8zHCQZu92BFkyDzmU5vpgteF8td9fxVdWNFujt6Uye45ddXkbvGHr4F2TBaGrxG8YYjx4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DgNVbm9gDtrATaQPUtGigQXPgMS2Gikw2EAaNPiyqnXwMW2YgF4rC8YyYULLd6Nu6ihiEEAGytABWMrqpN1k8Ej",
  "key1": "5Vge71dPD2fKe4GjbS2fnpGyeYcJd2UYhqJHwbRcgjDN3oy3bpvRdsHpfQuwezzjvQqmtExN42Z9VkFpdcz5dAZK",
  "key2": "2NHxUCu6yhq3kv9HLdvJ3tum9zzVLiZKd87zpqFMHF8xbL61x5mSVgCYU17kyXqTWoHh91r6LmzGoAMU3dYimbBS",
  "key3": "2u3NMVwkMSs44UF8B1dPAgpZ3eMB3EhFgf1sicE8iVQbjzeJcyFC2DoGLZtarzgR87UWnjT61DJ74goMk1ntJuJs",
  "key4": "5r7wtrvkVCMYmzcUs4PEGx5AGG365LhDc4h9i15GkzM8AQ3JPHCE1q5V2a7D5gQmU2phyErzM83RE7kVymm1aZ9u",
  "key5": "2FgU88yinAio8FNL3yahVVytB4YitMeUcr1sj2K3wRFWtYJ1dZ8s6aKoRovDePEkAinykhkPDqDGB8VRGinnN3Zr",
  "key6": "4FWMRVFiRmSqX7kZ1kjg7fN14baZkigLEiKLSJ5qPGvDJ5DgkFvPibGMo2txReoPqwJLHdTMc2QUkeP9gwxc57Eb",
  "key7": "64sPTC1XHK8CGfacmRP4onhs2URrjhffEAoPdJYjDyHfNpWPWWN8bNwfzgrcNQZrgBG9iXYpu6LhRjAL57wNgMD8",
  "key8": "2WfnSbwqjYV9zXeJE14kYUbhpG87HT8uAPxE4wNCJKrhk48NK2e3nXszNdQa7FbtWoCLAVWXC9cdB95cP5hfGBXf",
  "key9": "5wnxL5484S5AP9HvT6X2UwJ8anD35i3K1VpGVGfWhedjJLn8TWurDrmpA4BeHr4FEf4NNDNFjBPsH6J3chrpRW5c",
  "key10": "pR78twCbcqHpcrSkt1uV4WK3tScjhdGYVWo5Q9UkQz9FAmr25ehP4VpSQiqQ48eg4QWFrN4FDk25JQ5fawCrnyN",
  "key11": "4AWABfjyGrZrFmfeP7C9FQnqH31BAm9uCTZZ8xiKEUjvWLaD1rB6zfuGx7578utYJwo1f9DjztBX5SZXCKWEwga5",
  "key12": "Ep3ZhkmYC9hKVDeuHDPX9K3mcJmRFy1uUjWDHMPii2AtfRMJzkXgEoEufNVL9eVB2PazEPps3pguqw2Q3eMtzVi",
  "key13": "2X9Z3a8k6V2HM8yb389XtTrshyFEfQF55d5BiYdgJG4GmZX4iFDHMFUsWFNkyZgtNMJ8DkHGScYS684DwXvaysJB",
  "key14": "dMVDXLAaAZS3irhiiDTCfNWUi7tn1gjCNP1YZoFbMmc3PcFk4mJRtG4HqQiM4f69JNiGKZGybnvnAJZCmAzyKCn",
  "key15": "3dYRWeSdXEKxenZEQroZxbz8xxcbYNgN8Tp5fcX8jnERqFfMxw7bLuuYey5MmcRqMeMbvi9XhhHxhMZ9apeXpFa1",
  "key16": "3fjVbiADTjRKAU4MswxZqXV27pM5QUhMANdR6uYno9izXQaApCnznG9h2tBfFGNfBsUd27yiseXsmtXiqFuxFa1g",
  "key17": "4yjYSENjqBNSfX4wem45yvgU51daJus9CwKoRsNCHasdedX2hNWNzdurs4WPsjKZdhxZ8kDfiggYhsMsdxX1GuBm",
  "key18": "4eBBQab7TwBg1gxLVuJfHRGyoPm7LzkD9P3N1nFyCNSF6aYesaQGGJreSi8zLb8sXB5KbfbaExazqGatA1ApAq4A",
  "key19": "N7fdDjz8aFnuV3KsjP37y8p32w5tifcLnKEsZKCq9aBx3Vaw9DFRDVd8kPkH8g3phu95P4YS9rJKy2wU7XX7XX5",
  "key20": "5eLwmNfraLDgxkKhprzmtDw36mH8agQvXAtRx9C3TKpnkYN5xBGPYkYkuJY72VF4rfZJnq9vHBhP9uCHrvt9dApz",
  "key21": "22PUfJnWJ6Wzts1TvhgUueidECr9s2gnyJS8ggR76V6P4CCJDB6NqydXpu89FmCwbePPNS3KgAaxipqw31e593Sf",
  "key22": "5HyvCmGPbPSuh1h2n8NJUjGCbnUAHSfFZVoXh5gKYhTvs8V8xwnfD9Lez4LnJa9rrReNxaZK5krMjdAdmt1Lad4Q",
  "key23": "Aranwk8ikpxzLojSUCTJACuNYeUUB7uDUyQnDSmscHsFKtGvPbZv7NRtKo9PXXt5wm6rTWU7r3GjfaRyVehcMXg",
  "key24": "26GsyYz6CeNVVxAPvPvwgcqULQL7vwHnaCmgoq1VsaCohMthXp1GwHgToQkb7KRmLCtH8QKXDHVTQf1hVgVUW255",
  "key25": "3XQDgjMNyZ7rpeWAf9f6sdLvPR3mUjAxkAJ5tYDepUWg46kEn2FakiYik7RZCgKBN7A9f9ow2gCzAHN5c7PaYrUy",
  "key26": "56G9Rk6s8XZzaXvSSVQ4ibarBNo48VJVtJtXAHLCJWMJK2FYKtVRJB858JTZmpCnaZKB7Vf5cLvfA8qy3iLULnfJ",
  "key27": "3by2UwRCGpgRyECqcRLRQeLdDnQKMqoLA3JBzVBpUwtBKbr2Wbjtk2gMZFvUSWgaBhoHcWTavzj8Zv7QBP521Hkx",
  "key28": "3ej8DKAAViFMQHnsAEk5UmmWw4nXPWop6YJD53Fx2pu93KJBvus1M2h2YVLKEkfxgzevKv2uSneRfjqmsPpDQzbN",
  "key29": "3ng1WmfULRwkyaoqUPFcU27D7mrNNofzMxoXfQ7MLkRQTyf2K1u77nvfXrq9FToaGRgAeywDtyeqqBCZ4wiF273q",
  "key30": "5w5kUVNUG14deRcomX2CSbbStcUwqddbxboeKLWiZsVFFYMQcJedfQsYHsnDkhFT6Z2JPAnZKiSPL15xA1sHp6TM",
  "key31": "b8x6nEN5EWCGFkW3CFvUYLvaNFNXYc7n4edo8wBC7FjWtmj685RyZFpJDr2oWDDaWKgSWtKvZyNrrC56XLLoLXk",
  "key32": "22ZXwGojMpgEchUb5DvrSwudrG4PzrwX3dsoahieEWAuvsLX2vGyqFLJSFRufvwfmbHtV1A8fHoVfNrYVSDvFopC",
  "key33": "Br5HTfWLBviGHr8oKFFnZ4A8CB3PNHD3EHspfooSSC7dJbxrGugSDZpjx2vohQPvfwAjobnM9S5YLwDSsgKJmbw",
  "key34": "3LUTB9GzTgkzEapx4AUQfwy2ooDLc6GuvKLGSYKRkGHHX7mpnHfhq2KzD4nk8sF8J7o7c7W3zoDEuVCnehU7RMGW",
  "key35": "67bobFFMyeYAzemRYhT8y9YWx9SkEMiZAE9gscCYzgAvCZ64pP6F2v5SESL2KSd9yAFCvZXyfYYCa3rxyVqT1jTj",
  "key36": "5iN3Q1Xm6zuPb5UJhqBaynrKmEvmsPHGk3VbAsAQ7myBPaztHuDMTYCmd5b1DgfvDiHEuHesU2w1mmbs8GFRByiB",
  "key37": "2vUv7HED9844af9F91tn4SsMizpSwfNkkhBVrGToZgNja3f9XgoR5AvJ6Xzv5VE4teXVTaaxdaxAo2UF4BRuwusR",
  "key38": "JUf9hBGPQmUzMcK4og2MRkg5shpWr2F7k24tWB6yt8dQJ52vRDxXfsQHAL5HRTP2yJN1Kq5yg9bHjb9eyqxG6zX",
  "key39": "2PVTJU4MfDBhMGYqQkgt8A1boNDaV2doKr3BKYmSa1QwbxexT9GQFJjpWuuwgqbpRVTPk3shMX4vv9F7mQCShpki",
  "key40": "97PC9UsP5y6YXeq2hfmp7Nfvgt12f99oMj3eh8Mn7PTJAbmscnAR61SR876sjrQthVVporS8pGbtbZ1GUra4SMF",
  "key41": "5yAiEY9NUCiTSrfFDobymrq3e4Gk9yHnhnZXTwVnnzGLoqrJcq6aMYLcuBrSavrErwYNpp3KzvMg4AsrTDHLphMh",
  "key42": "2TjAPFksiyukizkCgDget9fbGMrUcxy3Uc9YHKG8eEgapZ8TJ9UgvKKXnVfG6d7H6orRr3DHL3UpLPNH1bhm8Dx5",
  "key43": "3jZzSVvkNbnqSEddu1hdCvpyfwRWN9Yd3tVSGmrH5FLV9oQw3d5PEUCTyp9HdGcwP3Q2rFn92ThWJQ3RT6ujgxra",
  "key44": "3cYA1w1VvhGVsMmx1hSjTp7vxSRhTRLfxJtMWMQe3AE3QqSrN2nebKNpcQFPcrf1aZiiZB4G23kKD1FZMY9iXZKb",
  "key45": "44pbTL4HM846B3NNgGH1kbe4Tx43RwKvDzNHiYTuQstYX2JZNhRkg76qDhJFpsPxwS1iTCqxBybjUM683JjDPnyE",
  "key46": "NWygxVJfWjPu2YQ72362LUKKJXQnrpvHXyXdUEGC7JJYYJp2s6matHGxsceboBu8zcNgStNNB5EoWe8Mr5PkhMP"
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
