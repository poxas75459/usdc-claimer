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
    "2KHZxuVA2e5MuwYczywswrSmbXpkFoJkUotLcHYN7A61oAzsYDdxREcZg18tzd3nYoYjcwArg8EvVdfeFKnFjHDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZbMWXuBMLsopdk4Kggc7kdihUaY1WzjN2YCTQ4uLJbYuC832vkKQJ1zudSFujqbZwYmxjpTv6Bg6qcFBZz3p9wH",
  "key1": "3dzmcvXGM3JqLhZ7iTMiexAtF6YhjRzRdcQmeiGQccd3LcbPfxNzRiMRG6dgYhW7jkacyEaUiJBh21i9r9izV1ji",
  "key2": "2bEi3ucdLqJaZNVvQ82yLueWBsw87bpMjBwQM76m6QCGxhrsD1M3YGSGadtA1x2tW1JVSy9NuLgbSYsJWdatVLaH",
  "key3": "2hCfV7R2SNicTyrX8D6GcPZxrqH7kJp4M5VPqDdSyz3PBB9y7coVo9KXUKTrYtDv7vWaDs2C1pMk6iLeedp3ETTB",
  "key4": "55SkDCgChsTq8mkSvWpDoKKXxdgz44mPvNbsTUBsWRAGaZcXgE2HT2hipKrUcFDSpo4dFP77YF7n8SHzZh9uU8aK",
  "key5": "5jvvsVoB3AhvM6ghJrRRfUWrhXe2i6r8S6J9jy2EJsHRjdSr75Y74rFpsN9FWmPzcJp3DXTNESrsq2t4ZGBVSWss",
  "key6": "43k6xuL8W6ziz3hzid92dKPUrHzJdLAD2ozJcBbzT321RFToHmhnBpQmntA4XikvBpdxoFk7QTAqt4LixLXigimp",
  "key7": "5zneJyi8tUVdVw2FRrCthc3PH4N58AuEEZUYCGBHNuWWeDxTdF8HRMq4nWsZCLAhNWFAs7mjWoewD3kGP2UYrpvf",
  "key8": "5QPzqCb6isvZSzedxan53MsKpDvs5pEKtmnrHwt4CovLPbzAyHagZ6xdNYrG4cA4H7JSakWshRPZXmX1eXFH6ado",
  "key9": "3VSL9CcTN568eqaCHS2apErpKq2FacfJHGdU6DFUinp8LqfkW5yYHKFMnAqzeircbgFn9oxnia54Ego45MJv8QeC",
  "key10": "4Ksbmtxhrtob3aVxi2vDYAvoH4Y6FXz8UrT3DrZSNcP4GAZRnyGWaKZbB31imyxutamwD1YK9Fg43wtCt4RtAWxV",
  "key11": "3Lxig5GUgT6JJTtuKACajEZkSuAjwzFWHCLBjANtwuAs91VPX3B1Vrv38Dj9FSf79vU6Su9GMxPR6FsBYiRUizC8",
  "key12": "2Lq4NdjfySamQn7LAKbGd6gE4KbTTuaqHEvAvfywGUnq7BZ3MvJtuK7Lg4RgLjvAhrP7bziYaoojhrpRwGyU1GGX",
  "key13": "62oaYX9WHP4RTK56T5ghRBtsF1PQ9QKUXbCuPGAWq7CFedsif4cZMrSegtAph4iNK8p4dJqAhGwDQVp5noMr9WGG",
  "key14": "4XC8PPtmv6m1Hrckg1TvM6pAqMjarjHHsy5GnPg4G9ecFtE8pmPojvEBDxHfa3a5e4sS2jpWsfx7PJbJSzjAQr2G",
  "key15": "4QNxrwgpcm5hAe6im7mvXyCXbBQga2tVP3oxv6jgRrEPQAwRkXfnu4pHnQ9Y46jXiJxdKepwg2X91VYP9Y9tiY69",
  "key16": "2yiLxXjdRT4cAz5i3Dds6gHgdQjVxXD46zo65pbANxFvZKN9i7UtFvM5yMSP8hc3uxrrVuHwXEGMkFoYfMGs1iK",
  "key17": "34wMgnFnCLJ1yAZqS8daQqQs5WeD2fV4tQKdGweQ3MYiRK38AJkbnHZdPUYFSiaPX2d5t1UQTyDzQ7qdPoKRRpA6",
  "key18": "4N2Y3F23qYuX7VYxMWjJhxky9pc9UBs1jPcwGSt2417DH6rYHBEbbf4wQgiztB4Epr82bKX9hVJPi8EjG9saUxqu",
  "key19": "a6C9ywFfMqiZgCPuLbeqz3VFSbZsw55BLJFxyQiFox6FTTAJzosQ22hs4SUpAdofKPLdBQQHocjXthWVikPUzGc",
  "key20": "39NkQ4CX6BFctbEvhm4s6i6wiXadjQNifLASQEWUyofz7Qj3TfLYxcegx1t5HPSX9FrD6SjtbjqMcAU3jZh5aP9Q",
  "key21": "2Hhz258efJggWoe2zsoQhGQZTae9TXr1U6bpxMtMZNAjjZwbtM4dPk87mEu6tqYcHowCBTugR13g7xJAAEU8jH5S",
  "key22": "3Ni89RLHpN7zYTSeRqjogRLEce232g32F2dsZAGaVgAQxX2Kh7L5c9UtDpeNwVctZutJVmsLMZKA7NeNa5Zpco3f",
  "key23": "4aEXyjGTKaaXwhEL4Lq14WD9LpXAiDc5j2ix5kEQpWB17BLp9akvmnHxXtq8P55ENr6eUQiAUBXZKVXnaxhLnRsW",
  "key24": "5pe5qVFN8nxL5dqSne8bJbBMwvw9eWPiq6JJq7rY8hkwfFX1o7hBUZezZo5jof6zuHahKQbBJ64f9bFwCzqB2yRp",
  "key25": "2gZrVxAzUrwBx2Awkrx59snqVTYEkDSbrtW29fTKrkfksFACg1sV7qdxJZwX7KjCkQ9v7mtRNeyK4nactp4WeD9j"
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
