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
    "4p1xUDduN47Bx84cCuE5hRySv7LBM2irbVRLnd56vfMqSRrPJDYa9oWPm9JCTqaPh8H2gBbHVrivnasoZyTEc3G3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XjQK2CqdANgXqwTmaGfyHqvJRF2VpGDGEkNBiRJtzfNYgCP473DXgiUeWvsdnshYDmphQdW4DkpGySuecK25cop",
  "key1": "4HdP96U2uhiinLkg2pgPnMnGztur8qdzMqBngm5BaUPmGANGiW86yvMGxqoEMssDMT8JVHWkRZL3HKDBeeW6bDAc",
  "key2": "JKR83T7fHk9kepoSZ8sUxTiYMJztbjAv2VjTFzoo9ceHJgSZ8fAUrzoTFybyqxtgbuSgCwvgECAREPtGVWCeRbV",
  "key3": "5XapLsoDSxRcgC4iUE2x4sxR3mzMVoxEaYHJ6unn14CpL8LVDSbBFPPrmisJYW5WCnYTv24r3RGBNhsuhFk2Ra3D",
  "key4": "ntrGWLnkKaE5BNGwVgoQkTnKSA5YpDfZpga1njNeGDWruftxsvdp6o8LRVSJMVtaUAsm183kQPZdzdtMA8SQfuJ",
  "key5": "yeevT2UweeNcWwWFTLaFB9LNYi4Uqx4dTBMcxhWeBpBumNCAFEbXhyJdbQsndp3KF6uRA7E2bUH5zyFwgzv6Rq9",
  "key6": "3ipp5Q8EUEoiRjb7bNuoF7FDAwbSnia2re4zzskZfUJCR6KcNxKmzxZogizMR2jmekWc68LMbDYcrpqsioFASH7u",
  "key7": "3o5S4okJTW25JbP99dEDNDATr5kZ2t2dsff6NyyZUeZ9RbawZA1PKzU31cMw9XBnVP9ayYxCSUMfTkLfuZGD4DNe",
  "key8": "2SU3hg6BfdXoYRsvxid6zdaUJrRRga1jUR2RhKDuKi1qJqnuVc2DfyJLhgGb9sNZHGpzP5Td3D4GitUx8SJu3JLy",
  "key9": "5xxtsd5vgC5yPHF7xwwWrmaNK2guWHAhy3toEgeZkpQY8PNjMwdZwDMmLbNovMTvjG5C4w5FAmCDf7XPGLa9VT2X",
  "key10": "oPjwgS85zLemnyxebAo7LQRcnRwwPSRGBy7AxG8dNyPX4eohxeZnd6B4L2KeW5iRyy74ufEjbBuERdmfQGVj9kA",
  "key11": "5QJh7fXEVnYU5AQsgm3iuhRHfGhdqUdG8vL72wwPxrdemebWNscYVCgkHAgdLgWe2RLSQzKhQtpiLpKH94XHZyVC",
  "key12": "Kw74xQYEiJpwaX5QRbtjVmQSD7zX35ZWGxiWz3WN9nekV2TEoZaxrnLfRxz12WYSQALrQo9YcGvr7aaEcEjPZTy",
  "key13": "5EFoKjVzEawJPujX1NQFLvRzC5F41rodVJShJawabWwhT3ChkhzZ2cRA6AzBAHwP7Pe88vhMoesTjGQuFeCxzLD5",
  "key14": "2qdeBpVbMKxGzxAxBo31ua35WqXPH5R5hjoprHjq1Cjwdow5jxWxMVpKxMUQaqv9nZJVrV6ArvGGthpEVnWYHBVs",
  "key15": "5DM6RwcEtEwPniHMCev7NVw2aogPYC78JufZDvT1bJEePzfBQRYCKMVUp9Z9Br6UoJ8BaAzhk8fd7dgxQTQQjuoi",
  "key16": "4cSZtaQEATSWUmdPs6s6jLD6HCF41DNzmVTLnFnQP6AJNCpCyQ2hKBL3FpQMvskcSGQL6Vz5GETRrXHuKHjwaNAb",
  "key17": "2n7NVb174gGaguU4P4SQJ2x9wJD6Qes5U4W7rPY4qCuKdVQJeHpt8tG3xjgbZ2GA72egJXf4CKKF3nqfchxLweyc",
  "key18": "4yUQDZD17BphfteG84s4814bZ85pyT8mqMwHBPDt1ytsmZKzywdBxf9VyoFQZy3CAMxGNaBN1vg6ihpDfQWKfB5R",
  "key19": "XjwJcspZHNZWjsBnYkPVcWFyA86ZBTnpXtyrY7A3AsNChoi3p1P7s7v4ZpnVt1BcGQyUBrBfJyrXBX2GEggx8q6",
  "key20": "2zEJdx9APz4sXrhv2hkgKiG1vrWhUNH7iWVuPjXpbPiYUtJeGNhw26KAj1LnmTJNdH7CHdwymitQtKHxePZTc9vS",
  "key21": "bcaBxt12FewPQeKoLFYF2nTCzSCvgfetC5kpMbKfuLsmeBRiGSG7rT1585DGpZdzBvhqWAKiS2DaZ787hzkCwjm",
  "key22": "64xnCAfCnSC6XpiRXLBBzPnmhp3kh1AyaYFF5aAGWYRcUDaVZKAw48BWoDjhPZkMfbiTbVcjDDDiyVkid8XK3UeV",
  "key23": "25JnuMXa7SEoiQfJyVqKHTg8b4BGZCprwt86Aam3y6JJBsC7k7cEoHCXvKvnCJUReYKsqmWniwiXS6UF6ky1chuY",
  "key24": "2nQLi6b7m8oLdG4qK4bodCwi8UgNtJ5YoVmR754BDjJijnTFnB1rC7x72QDQoaDmgw13xsGVJFCPvm8tQKVeoabi",
  "key25": "Gf3mM85mmdVvoXMMdscxe3fXZ7qmkFCZy3ftpadsfbUitXwSEpYPCmybw1NyowyfeNtEMex54exHNvfE1MWBtcW"
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
