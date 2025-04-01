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
    "2w82jrz9UJT4PnYYnvYpUBoBJNt4k9BEgGFM2ZfHNEamYDAF2gFfoQKxhnA3r67s9W9DamCC7bvGg6KFsgEgDsU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y5JVEs1u4Q7BpKJdZDpR96S7CcdrB29tA4vE9edmTwweBroDvTsgth7vNHdkpxA659Tn24F6Zvw3swWhBtvEZWa",
  "key1": "2yMYAmyF2dBM21ADVDacTqp2sUtNJv5wSP4qyLFR1N6n1DGz8t4jAfJ4qZsZXQXaRgv1FdNT316u5riRR4X1kdEY",
  "key2": "45BzgPocnfDsND4zGnSCCh6txGtbYbJSTMnf6tJJa4pJ4U6atgVSqbqemdw3eeZCVpbtnRxJyFKa1JMtCVfjpBFS",
  "key3": "MpAgWV8t3TiNde5Ux6yYdBae6TnbE1uF3sY9PkcrSRwqFKGs4aVkpTkxp7najUs6MJWdLHocjYMmofRygyxVUrf",
  "key4": "kngxTmeeFZ5Lfe7qCtdm1mYidYNWQdnbLymMW1WGsncYPwx67H4rpGBiTEyTWXMzYjADpc9K1Pm5M96tApzPkJT",
  "key5": "4FzcyV2ciynWp5BrsxPMyazF3bguDVZkFBJ4zykVM9TAk6pZwDbmbRrsbnysZWCNyG6Mjy6KN52du4AVxZdg2WmM",
  "key6": "4mKHeYpaH7C9TaJjRMsWCLa1koqbVCEGLH1nvdv4kv7iRW7eNWAYDmt4bctXP76xyQni4qcD83BawgQjFhJ23S12",
  "key7": "3d4z7c9jj7BNMZ4Yh3JaDL8cmbHi8B2QWqJQLqBtL5CXHkXm6ZVSVWut5iqszzkRF5F8pQnjsLqy3qXVi3RgqdWc",
  "key8": "4NCxWnVJbULCzo61taqQWjPTL6MCtNzV5z4RpwxjyR37zCVP72MDXS2K42Qriwmt1fJEkBEFTjjuZT3YPcpuT67i",
  "key9": "3a1ZnSGEDjCmH9an24gnz8w2Z9Ws5L6TN7rzjjtu3ookG1c39SHDRxY3fBRbv61bGhKwpzLkgRVQ1r64Ni2cV5wd",
  "key10": "KAbzDzhhpBTXTwe7V5qkSL2xfqoSebXKN7MWqkreNaR73nghXYe2sJiZ1QWfUkouoBij9xRiwzMKrEwNEuj9vtw",
  "key11": "3tL74aJ6NjLByTW7UvAbX193K56qo4cqkbQbTjmnFNsv6kfQP5LRNBFoPDH7XZNUD8Dp7m3VS1Gz611PCpHyjujU",
  "key12": "27jmkXPPrGJXkKbFYiMHpW72ZDU2RzNCfkgfzjFUEoran8dy3F1Zjk5pAKnJ9B78Jx3GwNjuwuyus1nBBFVBHhxq",
  "key13": "5jfqBkoHuYiBDt7USiavKdroDFfC8wWgZDmAkAmZcmrfH6afcemninqqeAkdaN5wsLoiHwER4CY9XU7zDg1xy4fb",
  "key14": "5GYd7VjvfPKNrLgxYTL4tMmz7BjnFkbWhkk3HhfFTJHHhhniWcNTo2gpLKWaT3T3SFZ58zaeEXn8nGTx9ycaknAi",
  "key15": "2T2NC9x78JyASrcwZBZSmhVVtVKoscGJbTAgfhB3a5wh3mQUzCQa94wTzkczXrFGTi1CF1F2jo19hSBCbYZqa1w",
  "key16": "5mrRhs9kW6F5eGr1JrY7vhVjqgWB1Kx6P6ESaTLHkymkZV5K2hb2mmEWFqd6dRRL8zwotHesv6XdJZtbdsE8LMag",
  "key17": "5A5Kf1W18ri6gMF7sALi1Doq4WdfpUWj2v8tsWmUXeCTsNPj5aybx4qUS9KqKoZKSA2LkyAvMBcy6zQbv92b2YjR",
  "key18": "FYbjGcw3DoBFtUxemMKswiaN8Ly3QTXnfKT6diwVST2MPQFoVxHhscjwkKmG7Spdfz6AJeC6xXVRxZin3SCDXmX",
  "key19": "2RwNH3BXPTriQuYsjJxRT3CtUd1rURywVwnjxmYGurvqPegYzZvqieQrna48iSDZyv9RqmAkKyksQDZJ8vVQD5CN",
  "key20": "38WkH7xY3V4jLumdKApCCCUsqQCFgtYtCC8SzuR1eDEG16MgV3A9bWeqYvHGTap4g6TdcGWkWsUYgwNZYVWR1ed1",
  "key21": "a9ia8Juju1AQkVsCX1icaYi5ZgGzHV4CgLApjLforsqDcjg1K3j3NvHTfkpGwyiT94nWcuBvaAGsaLNMYyZdVpg",
  "key22": "2WkGNhc1yruCwaDwQxv8teojCDYyeoNUBf8eUAkoHxqFGttrpUMPRC9fykY4eTD6RNCLuynwATzzmKWd6xCBrrip",
  "key23": "eDaemnBoqf3FRPqt7eCsLyETMuNVveL3hyigwNhUYB88uNMic3wBWWoKMr68n3S9PunP3hit7k22mtExXAeRLtD",
  "key24": "4PjxE65tGp1VH4832sEXxkbjYjgMav36Vi2RHF4sjcoghAsmNcZqD89NmXFwV1yatBoDjy83hErwfyWrc6SjtSrm",
  "key25": "u3eTLZsfrZvps97b8zxhcm4tSuqudCiiwbLnKJBmBUQyeAWi5UhHP5qc4LdgKfVwCo9DPamaFALe6uAC3UnDTNW",
  "key26": "E7wjgGqE9P3iJvv2MzHxRDgv9camFamPYr43LWFDoN8KmHXk4BT21ve9AxUdhYu5dNG2PKGACeA43Y6mDyzYg3f",
  "key27": "2V5KFs91hK1xZLmcNvCwAMZDir5mhGfP8zhVaSRZPWSmpqZviCuKbzppQsBRKV5DZD3WAFeUoHAKLuiAeVQYdRTk",
  "key28": "4uEjwtcSBxEbP6vc9KSJ5Lg4vni7ADC2cpRa1DEFrry6zUohJ2bgvn46qBaJysJQVir1b7SkEn6j9vSLUJHj3ALq",
  "key29": "4s8oymQs19VJNLU3zhqM8F9zBnr1jcGy38KfyoMmcT3ktWgYRRVnWAiPsU3B6XT9LvafyeSvW9rr6ynHWMTfPEDY",
  "key30": "5Af29L7nhZo2VchUjvaN2yatVAkKbTRdUqoJn35ub2X7PcwEjgiTskeHFAactgyZYbukLCi792jCv6CHW7D4DwgZ"
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
