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
    "4mBSsLTVt1VXQ7yUTmRcCaRo5fMDkYdSDPuqkpn3FfhRJimyYcQWpYs15vBjm5NGEHp4pRUku74yUoKCYQ19b9Ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RMjij7o2BLKJosh1y7Se872w1d2vxq7ud72xVTWsKo4mro8BbmgRbk9VuVUN1FNTE44EyqwrMgzhag8HCp2UzR1",
  "key1": "59XiuNCVTs7KQc2qs7LK6Dw5XejVD8saawxsTEkc669irHFYAX1vu89Zk2AfEtK5SLCii3pysNoMBTWwcrFjHoCL",
  "key2": "3VJQatQBq7EiuijXrsvFqXfu9T2fcXZDaxiLKiLx3X4oCcsBe431Q4JnEHPT1QBFMXaNcvuG5LCt8Yqvb5km1AuR",
  "key3": "WDPnsNe7ors64GDGd7uvb9basjEv92hX5DsxwRNDE8spvCYk9Esc6SkXjYuSL2LWbekBCpQEFS4MsZdESN94Sds",
  "key4": "5qyvgqrZ1sZ6jgjb2J7mBC9DKnXvPwKUJHYxXe9xkDRmwdLY8HfpxUGG6kqXuAs3fzgMSp7KBZz1wvJh8ZcogjZw",
  "key5": "4XzyPpKr8VdEQTDpaxeCh1GcyCEocMhzuN1tDNPmoumMWUbERUn949J1nAfxPdfpU3oEMggtEUxGCoUcjLTP1Z82",
  "key6": "4dg27ykJwJVf7knEHgDkkCfUqkW7Feb2SSpBtMtQHcvEvFwe62AvstSm4G16PAyy4SZFnPrbV8EVAyUvKmKcHHLN",
  "key7": "66FsB8jRaawNXUdrENmUR6KTjCzn7heXtPsryntfBLJnLiCegYi9oX2daY8xWMqXoxi3rLqu5L3aYTGz4eBHU7eS",
  "key8": "5Fd1fKbo1QN74mYAVcZRxdXRJWjvRM5Lvg9myMnPmNskHUsiwudYmJzDWtDshZRkC6GExwQRLxaeVKqaBxfUPxde",
  "key9": "5Q4UQ16N9XSonSDAyWQM6M1Nv1mSAP6BnNYcX861VZ5Su2ciR6mqZHRkn2SXMLp2jyhcf6QSpE76RHGMSFkcdzdi",
  "key10": "5xqEfBs36miW6qf1nYJwVFezVjjVp37oHseCC1hBxLUcjkRH36M6UtWc7smFuNuktyFpNtJabM6GJfZV5Lsngmms",
  "key11": "3bN2REffXro2HrNPDS9zQqRxubsGgHfTCbvDaX1evf3n6NCdhTkzy8JnBN6hajFqxmFi79YmVUQXKEdL8588438Z",
  "key12": "2eTTauMUtH5zsGDLgCu7m5GyJEY36kNsZP7Z58WFNGNfRH4hdEpFHzic9PckRAznpetqdrDW5D2BFQ553ymAFWEJ",
  "key13": "LDJz4t5n5vEkqdgpGfKoiw3rdvFepV1wLrDqpk5dx86ZwLPwjAinVbtFU5ZiRs3PhMjMFe5HDro6MLkXQjPPXco",
  "key14": "58vSoumu4Ymo7co8ZT9DP5G54sRyeftdNJrY9vo33UwLbo3eQLugq15XSRBced2kvGURgX1jBD6fHydkotSeBKtd",
  "key15": "4xx9mn6CzvCpWf3ekrCgRYKrX6GU5sYE3TFdTFrFAj8QEBWNEqoPfgUncvaAeGs5CkbAyb9Zj7LyRV7zycfHcUfH",
  "key16": "2mtbeArw23DvKurcHjaxoNWy5kWzsYd9iaKco1kcFkrV9XQXh3iUR53Fhno5h3ak12yb7DPXZ4FWu6CiD3zy1Eng",
  "key17": "2Xc2Xdo5nuDsFPfVdsm4kBJjDym4SYxPahZUaqfx2dvLCeX81mwGBisUjeG5Lz7pngUHAnLuwCL8bupF27m7tn6q",
  "key18": "rR4LsKgt11tj7Dj4V5BrpG4yfJTBhT6LrUx8zqQ5BkhYBFTkRW5hUXSvGzjnT99qM75i23VdowmorsmAoqkXZCZ",
  "key19": "4tQtyhmaQELrd6UxKKfZJjAwfAF8miiM26BaXasfxTqfqRCCs7yyd4eXEb6B6iFTvdthC2yKqspk46iqGJes7VbY",
  "key20": "3GS9iDhcnyGVwDk6FQ3mnNaHuGCz7Jf1s9F1DQ5Ad8rnejKbXhdmeyvXLrtiTGVp5YbSexbzj1J8ba7G2JXRpqP3",
  "key21": "57zwZV7AhhXiPCsfxYAJQtCzgPNcmgFzQvy5UV8631MCKmCqJiTTbbSimfztKRistL8wLdcB3ZQXxF1kBbDu7oua",
  "key22": "4XyWyMEkarYdwFXpmxHgXFTi8WLc8FkZKKFbCkC6SRkA1RFzj8hM2eMvaPj1DLSQN6mAcf1uUXYBnsMHUUNrXqz9",
  "key23": "3KEvcnEHwP16sWt7t6TmDP1sthHcBcTjBEwHdSPXJu9nhBg1VnaKyvcBnnBgzGu5VcwRTtwYGBmNVLnCUdU1hnNP",
  "key24": "4QKr2T7VuA6dad8sEKSKVW2tfZoJfKLWGhFJLnPVgLf4vZobMRwCa2skEBUzLVa1Qq1bP5CzexV1bKSrvz7sCy9s",
  "key25": "2P1jexTsN1sSSijUqoWxZqPHBJpihKG8QDrDohj6cCFtRmY45qKZVsC4TRwf7bvsQn8ahqF6xTUohyvjJcgBBTxe"
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
