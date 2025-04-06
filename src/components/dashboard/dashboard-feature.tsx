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
    "4Z42u8pNC2j3oq1uQfHXog2cJ4AiShP8ryL4EiKFh9ATPHSeGWsRZXjXM64EScGXUTyUsrEjb6y69PoW2oW4x1BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQG9yMnG4TxATCw3WVWzviguUw5KpRgrjEWcBv8W5SYdYkLsVFVv6hwJVfM9B1GDLPbbWgaqW6Hjwn7pikaqscx",
  "key1": "5jAJJNiNTXFFjStTXGDd4fxQgeaNd5TLHVQRHnGLBzATjKy34RQDWGEgNLyAoKr51sUf7i3f2pq5evuU79ZpRqHs",
  "key2": "3nT5sR1gtgZpkQvc5oFKF6oAk55N85TkXygZ5FeuyWTfrgN8Gn3pvE7teMPD8Xdo4qQ25nf5NuSHtW71EMoM4ngf",
  "key3": "wMcrpXwxKr4bD4SK6J6MsTgaMyagECGQCGKtgqAVtMLMR7x4DsqTWcsBZpsBbedGdbjnNvtQwRSi7zB2Catt1Rj",
  "key4": "eQZBrP2AkJPzgECV9xsyKCnBqLwRQN6sZ4TPXBsb72eTpGRa9MvMGDaZBFXgmGfhbYSEP9m2CdLmUi6JFsMiDUP",
  "key5": "4HPN91H5YKkQ8N4gazmPBAeJ2KaNdaA1Nk7NmZmdVnBpg2ZiKsiF2ptDSiScmatDc7SdfvFSonVW7PU5zep4aGef",
  "key6": "2BNWeucdKZDesuc5PEzQhc8LX7eF3PPeTTVG2yNzzKfpaJ5rvVpeGbQ5eJD9qq1A5MZXVmVgqwF3xVZyXZfUpYRb",
  "key7": "cZNKUJEArs3BrBu33pQzfxDvsizKshsfhFYC8vBkjppsFdq3izPzAiiGcLmZFh5WnbirWQscmriDiTdQPv3NFwh",
  "key8": "2v2kykHjyfUDa88JfaMF2tHW3uwT4ie5LaRSdq8eK8HhoySfXtixicYcHkkt64p3atoymsUUv3hS2BMtP7HH6Xjm",
  "key9": "2PqTjaRDGDdi9XHr9ZJMRqCGwaosTSqXaBZtBJntnTdX1fMW9kVHx8vU1JHrnBjephzdTj4go7MaEKrCC1VnFR1x",
  "key10": "2MHqcmMQvZoWnt94emgEJyKVwWbUvWwUjsRCtBBWyxhR9mtmrmH1RWxJ9znXez2J6mUPsiGGH3Jiuyywz66W2oEN",
  "key11": "3ArpMnamZNgYhsuPZKwXMpDqc2UR1GJt98wrTywDZdSrpgTafhYuxuSpuhTfBGtM3BtNeLcj5o7oaPftWRe9w97",
  "key12": "5vfiJLhZS4ea7NiSfgwakLzfmaAUXjoKdXDmwKqDeYTqUQCnbse2aYzPFi7rGghyK3tasx4aSdg5aro82s6LSnN",
  "key13": "dKenNP9CNQkNvKQJMLRameyS36DmPFpn6wVXcXTBfg8nkeDLYD3LghajcA3FdQApNTHjJW9WdfrgDZW9DhWfrkz",
  "key14": "CGree8QyNV4abLJ9pDqBCzcpDGk35Fpjh2KHtSUrTNoWFyMEVkjtNqMmg2rDWQsPFsd49kn4FHLoDbRo9TwiF15",
  "key15": "4kE8nxmEj9jXP6crAiL6v5AW54yuiMvPV1gxoSDUHiHzBntaFwTy3VqjeqtK4UQswM5NGU8jjgRgktJcWQ1G79Jr",
  "key16": "351ig6mftBzL9pQJ81hD4QkapiRi2ts5CTbkbctGzJe51TWe6eU9BxnmhcfGDtesMEb1rpcyNqdywR43FGafjJme",
  "key17": "42XBWbnfdjTfS5xiZUWZqyKACMMWxDtxuXhS4qTuPmpP5zuJUfdP3qaj9fzJbe1hNWKUmcn1DcTAofvLHKkcA2mU",
  "key18": "4UK37HwT1NxYpkQqmirDwQ2mJLz8xfHDjhowULwSMoeENKUS1zwMU6k2wjPauGStDugbbggEh8zSZngezWMYRgUF",
  "key19": "4rSf9YCfiNW6jzzhoueLrAaPYqxoXyJuv4ubfKa2iGVXF94Du91VPNvDZaNMtbemvxmx2c2nxUyMHxjwkG2k5WPG",
  "key20": "SyXrQNAtVvQLKhop8DsJdBAmR324uvBsi3xaLGHgpE6aP6uGupF7PMVg2dB4wGVk1KcqNQksQzquTmQLMnab3wc",
  "key21": "EiGb9SJPPge4PFoA75NNweUGMsGnEHZDTGGMJDCSGgyjfWFWo4RT4CeabN7H2wnHPLDUWKN1XbMZUHnfnwKJ4R5",
  "key22": "2wpX15PUrvDPd9wbWHyVnstwhVDZNMFK9d6S7yoXAMfh9pX8jXKBELkpPgZ6inHwrEdAN8EU5MPAoy5FZbxAJDPQ",
  "key23": "5bSCCr3769RGzihfHin7S8F874UQvJE7VUdhNs1WSPPgHUFxcvVjR14dF64n5RjCserASin1FQaj6APvvGLevHBi",
  "key24": "3YZeQ9H9vb2ZvRG3oVi5yJPwaZts6LTQXQoA2zGuwQ8TmhEjL4UhreaqzeWLXS8YpSswPSHMrGQndoudGSDt5WD1",
  "key25": "3E2463rcMKd6mxHV6LFPtNV8AqBx3XnPgXA6Y4izBxh2ktadZZr4bgcnDtPBLBYGyMUwxeZZqEi53wTfoUTsm58L",
  "key26": "67CLjstnoB4S45hzGh22nAVzho6j2mYndR2enP3b3VgjWcRLAzQpyj1ggrHGoazawoF5d9n9RogpSMTvagAgyBh5",
  "key27": "67kGUBu5N6qayPsAc5bHFKcs86u24S5ZYqurQ8Ev7iGC6zLowqXRgq3oE4sz3eMztnBc7yW5DMehwH9JLz69XfxF",
  "key28": "5PK85VTsYW2BJfjstKnFaD2QeBLcmX7tRqxQ4GmeV6aU5y3BuyBAk9jPhtw37XaJJCd1nWJLQ9WLkmc7SoQS3au4",
  "key29": "2xUtMXsGBDuroE8SSkrNHmrAix5tBGwsimfbHPwaeXrnREyugbdt1XLz4zew5YRkM89AMbCEYjnHUii6BAtdLo4f"
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
