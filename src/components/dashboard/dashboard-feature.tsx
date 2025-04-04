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
    "3iZ5gXwkMWXxWHjJ6qUvfZjruL8jwsJBhFvb1NRmHo6A7MLNmGKNPUv4GHEyypJzj4onuMTEEcMeUY5vVzakirDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bNPX3Hs6KPcF7QcKG3PkeRBDa42HVWhiJw463qKkxWZF1D8sSJoj5qkr5KLgWcNMpXAVGQV9CdWpX2j2GFGQtdG",
  "key1": "tUjTPm2BJDsysbT2CM3cRswGdMKuGhZx7oRQXGwy2uFwdU8QddnXeocpmQGpvwZpDjNhG8uBda1PNquSB5TzUta",
  "key2": "3uEtDu2c9UDr521QGx4M7Ftyb4wwoo7YjddH3ns1WAj8hwM4sgaPQYiQLNRqG1Up1GyMRR4aND4Xr4RnNRLqq4pa",
  "key3": "BiGfUirwrV5SdrxfmKnkHhArh5d4XpssjVPmZ7zbDV3ZDw3LM3xqWotQ82CeFF5omSAVKehBdREW8Ki5UFFYozh",
  "key4": "3B2i1ZRPgriiDTNgTYwhfJTikdAVADGgpEStZooWKxhtL1aXLpJxRUe8fQXfAgMUvpidV7TVbVRonPXa3o1Rn6Uf",
  "key5": "2yeWPYCJ2bXxxH1SpPPKnf1fj9JAeGEkEWog95hkpfVECicxfEtc3eTiyySx1LAYypQ82g6opBLdTwgMdwKujp2c",
  "key6": "5XeFQ5bLvTJjB1Etb4aHRCeZv7Wrv569ZRjGHRgrfE1nYefndaNUGj3uVhLrRtcoJzQqzhsLZuiGjqDNBEU5vmP8",
  "key7": "66zAvB5vwXawULyiHdketYV4Jo4uX49eKD3jqtFQLWmb3Rb4JKjJJ33optNxud1D18Vwr2N4ghRQaLGt4nCSPbUf",
  "key8": "2K1CjuCjS59WSQ8tEM9N3KgyEinnJKduMyffwufv38UXeJogvcn7R35E6BRmGXFzwhbzYSJiNLPzxXg9hoYMYdEs",
  "key9": "5eGDqMsxi7E7zVqXvVGikdENJPDaPcSmDgdqnkARbeKppnYdHDebMkhkD2hqJAQRRmicZwPo9LXV6mPUfRUjjfEn",
  "key10": "3rkgqc7wMVC3exYpDBmGm5aHnVQbXYsYhU9YLaaWKsPfosCK2XReXX2c4eNcRc9qyFmKoGmHXioh3F2CjrnRVy3D",
  "key11": "5MdP16ach2iHwoBNyTqWc21muPsaWEPxB26SdviHaysaeCXhTtZaa2yYDRuNWYaX6iumcx7vY7y1SUuf16sLh7Ag",
  "key12": "3E9WiK3fUzSMdskxJ89QpHAvoRTWSyryv2gJ6SEdhobZGWxubF5ZTeWkLioZHMNq2VkDDCenTiTbTBh6BkN8kef3",
  "key13": "46xXisJDKkXuRXkya3bdVrXETtKZU1RJCQdaiFyiaRHGVLEQpzj9njgxRuytb9pJTYas1R9UtvRwSR9ZVvhkfAEt",
  "key14": "3DYqdCSZbwN5h8eiDfqmtPTAybEGZGJuZqwv29APwpCtppAtHSgkr8Ho9opqruqBLzexCgjiQSrd21JJgv8DF76t",
  "key15": "52gyRb5uZSkgWbVTk6Ubw79UJD5g5KnLtQ4u9fmzvdGHjvS9ZRdESGWC1e2CiNwp7z71zRsrAQEDJjbPEpMkN3q1",
  "key16": "4dorv7Ayavz2PUT7M32W82kbVLeg5797qqrAMXoR951znngNDTsLna6yq6rKb59DJuarkn8KkbAQrN6p3HuwuX8A",
  "key17": "2htWidp8SaYYSDHrAe1wQGgi5Deh2c5QvawPSbopKP3FYm7ZdCiJksTGR3nzDgvaxZiWvD1CeMycVtvZVMbAUgnG",
  "key18": "4WmRBwYbPpQR8J7Vbp6xASoE9ykav5u5LbP4bWwZ4o6LMVzHaVKqmxGJHZoBPsZHgYLUzkV1uSqHGuYzxzm3ben1",
  "key19": "4ubG82ffFH7Qn16oKRropRdoAGBPNPRNYy3gtmy8ySfzAhhDctR7c5mE47xroYb6y8saKU6M7skKm3YcT9uFCHXp",
  "key20": "5DLXHN5pp7YLz1oW6QZiUdQJk6pYroRAbrE1SHohavdKLCcwSvd8Q9h2wsKi6mRchy1uvBGGThs64DYqZDmGFMfa",
  "key21": "4xqRdYMDNicwisMZb6FNFr58h795TJXyevB9zkfsz4Q6CiQcRVxiacxNT4EwwrafZ3jHYxNrUHYD9REmsTf7GKYZ",
  "key22": "4urd47DKBgzP5nVpjc15xWEdsfKzXsEtuKS14FdtwF1DqGppaf94sxYs8EzG56R8DkEFWC9uLgQQqneR7RjAygm8",
  "key23": "3uFNKh5TEg2TKQk7YPYKJ3nzP9pnE3jzgSWQnmSC5yPf9yaWwmVxf1uigopTedsSGNhC7XYQaLX1m5KMKEgkpJad",
  "key24": "5Rrr9yqR9KAFpbKuQg3XvYbhYvmdfXPhmYorWPUweqV4XZXUy77cEoL1Q2o4VSNQ2mK1MzBdbke9UDVCnEx7YNpP",
  "key25": "3wifJjExTecB5BQh3HfT1KxRR2KqnLxH4FuppoVEtuu6DPUBgW2z5VRuBjL9rGNzwCXxaxu9mrEdfYAUzdUXpr5E",
  "key26": "5PaPWWTqPrkbo8HEAWw6VTkWc7XJcnbAcuZNm9omMoPoYY4ZCSS9qFGpUBfnsH8SjYD7x4KkBp68cX4NriBZ8SG3",
  "key27": "4AEmegPfQW4YqeaKGM9NhDSVmm8nCWBfnopEdVjtro2714Dq8ApaVccPFAzUZGEomVhtTsevYt6NXHeqXw6DM3VZ",
  "key28": "2ViSGju9Bz8tz44ZpMztRUenn5oeyPPBGAcFNmBQJCrxfepQ1vppoD2HmCNYYkCC5HPjPWDWJpb9tg6FocTZyCvU",
  "key29": "55JQWvwdrBuzj3B73jiW2cJzjmGAxokYFpvrdwpz2gqn3vCb6kg1zkUVLizWiVFUixbqNz1HesYJSG5cPj7nJNcM",
  "key30": "4JR3W66EHjZcBj3v6RYgxNGDaXm24UJuGuaVcnjpgwSXgKbfSB8i6M2QgomRSv6hFG7Wp9LuYZTXhKvSf3TiWoqC",
  "key31": "63cZh2zr2ka8EqAAJkZdpUYg27C6q585MRgmKSaVNCkL2RijXYarMjM8ufSbj9JPZUwrXVPB3gmhnKNzjtE4V7vG",
  "key32": "3ZHXY9A6vLheV7uDBd15gjL5LFwogvLyKFPyVykjgraTfASfgc7dojQunNzdg5A5D3fiEixE8Ay1vBEx6mwaLhqC",
  "key33": "2Y4uCPDgQTStKnKXCa8NBsTKKuz8Px5k9eiDLJvVK53ekayF65VvLDEA6uNJ1BffLdJwDJjntGFNFPyCW1YhrC3h",
  "key34": "Lmv639PgsF9EQawzdc6V75nMSyHutQ8kmyKGMJhxobxyNEJNNXUuw2mVJdhy9Tnvxk3atWPyxrcUSZCRJfUGVrq",
  "key35": "yekeye89AQAfBEjpXofUCSj2tT3AxJXcgAixnnDWNf8N2SN7ATZYDFRmTrPVxgAaALtg2VDRBEULFCrbMWfc7nF",
  "key36": "4BgvMYqHHUiXcJgZxdwjQa3yDHJF5Nz5bUjg1zrt4zfFXbtg1Gzu1oxRhtYWe6DunMtb4e3f5Rib5ugd4cmDVRPb",
  "key37": "57RrkBPzmbfcYjJvogsS2E9RETuHRyMYpJ1tdg3GWh1mZtDJW4bpykCzHLXDn9qzx6heoppmd4aqBrRXUCJZChaB"
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
