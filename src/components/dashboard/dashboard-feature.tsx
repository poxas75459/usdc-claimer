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
    "3KD7uzJ5pbPdZ2vGRfpL3ZtapwfVSPcSEko97MBUJg3dvB3j9Chj3LTmv9HBnmzfBMx9mL1CZwFhEecmSaAgZZ7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59L6wN7DtM9NgnmHErHu3wppVHSVGzaaZyJMFwunzQ99zoVPzEPbAridLQamPawczNBb684khHE7m1J5YQ97rv76",
  "key1": "5NmEZqcrkUmfV5Yi5VzvZLHNfVhcyxi4KzyyYJfnzmv2SwW129DVrZ6XdT2iMy6rGnExJC4XUxeUcXvGXz4xGfYX",
  "key2": "3kcCdPjqfbBTdhpB8tLdhXXp1DSuLwFd3NUs4k9JGeD7C53mqM953Lj9qd4FeCWb197pNduBbv2wcBh62AzcVe7a",
  "key3": "4Zfm4iqZyJT1SnSrXN9eEhpbDF1sdfNaZkGb4WffCnrpfv2PwvV6rpoorumxTHENa2kLXxfN569exe4u9WTQwB5N",
  "key4": "442taRj2gfXeSMtfm6M1i2YX7RL8gXvY4CyXMo5GP2a4QCmCmRsLKPY26VKusaX3hLCmdJMrzmPSLoqFWBQZTGNe",
  "key5": "4CsGP4aDJ8BzhL6H6aeKiSKBeSdV3eMdHPdeouAdvSuL5BmApwaz4iYxL9gSBz4h74SnqG7q2L5hbZgWnRAg4eWw",
  "key6": "3QJKqxnWmLrTU6kZS1tVqg6W3uWZvgvrDLsBcBaQX2UubvAWidyFJprVSy1Du2obA57eUCzE7T1cp2ieyt5SypbX",
  "key7": "5QZYpshhAaFNRvHCJFYA1Vffxk6j4Pw4QWXQDhcaq5ZEgLukaVabhdbTDvj7g4s2weDCqV4PfEGQzytoLH7VCWjN",
  "key8": "2tHMsoodk6MfGpyVovzB2VL4SLS8qta5ZUwdthjRF6RxuVZ8FhGL44pJ59nDSVaov9hebAiuJSjaRaKFPaS1z9XP",
  "key9": "25FTFoA8swZNWfWsUcQhtWkqwYdMdngFTdmFBNim7mJs8x2ZQVLcHUL2Dz4ukWXxzSDbYi2TzFBm1CESbo9S3nNC",
  "key10": "3J9E2t5gkn62BnHzMQfVJJJnvnbSaTAEvp6X8jpkF8Pb5JbmTMDiPLfT9WsaYYWGmuZtqw3itKe7xopjUyMbwfYp",
  "key11": "2HuErRCsGnTFqJiDWfGdFEKRBx9tVNh2Js63bopvnd5BSwJwi82cdkKqUhhTYkruCETJrar2oXP8b7xSZrvJQ9cY",
  "key12": "4yccbdUa1224wusZPGGbekBL32imT9Px3GBHJNrwN9e9LxRj6iehS82MEXRj8VfeWQ8skwTkGWLLrW81dDciPSWf",
  "key13": "59aUzda3XXKJMpDWR12LowVJWZdCvwQ1n4t5RvVhnqk6shfL3CsBiVPWviCcqjMbB8gmTTPUtfa1bWhHWQn6Lqhy",
  "key14": "49UoaXtgjPNyobKqfCnrFYYbjz4mENm1jEkzeZP7xi6KA7m7w14gQCoV2uYGDLkcLwfGTwF4SLsT9cDqDpYNFg9E",
  "key15": "82fG32Xp1UuYt1tpSZfGrXR4s3s6PTZsSyjKJfnXxTkmSuB7rT1kFUWkEp4LFpctSPMk1nDCGZviDQu7zj5yr8Q",
  "key16": "pdS2sA6edoVXvG3hTZnSVtmFf3gmrR8WQDgoJWbVAsT2gw51a7hHJf2pfQa64Ck5MvRQzf7AiQV8eiTmxdYxDhh",
  "key17": "46hzLxwue5TFfXdptjpenxURhN2gPt9bC9H4Qv46H2Ch4w9UaapbzahoKquA4xGXgKQEpyLR7jx7uKNYAHYZ3Wbv",
  "key18": "4LdA3QuZzo9v2M1xX8HHbftxz3PdTrkFFtaTBnBv7cHwtyPKQYVWnvqMdQgi9vPmJuXydTVdjn25JuEPErtVZ2az",
  "key19": "2zuHt2bSfFnWSChTvK8hqXR7unteQLX7TSFEM6tT2W7wvhwA9ajp73Wh5twjX3hoVVPjhVi5kxvprhVNzA5eseCr",
  "key20": "3kvwhMtGTFW9KPfmk9txB95WuQSLnqtynKUKasTX1T8Qxk2LtZM8EEy8VhWpsELQjKuz6wxCK3rcnMDiRbaerF9w",
  "key21": "Tb24yTS8341WpmJ9vuXv8SkjGaEHmvF8qJ8VrN3xeknU3B78aTLyh9Rz875DBBSks61wxya9xDxeGajiXhgfQA3",
  "key22": "4dyHQGXUorzUUto8BiBs6c5M2DJm8dbnHm4b6s7odXugNpUw4xqZbt3atKKrXFendksbCLai7qAe4Hnz2zWLABzH",
  "key23": "5VZKCs2MvRTXvTvpKP5QaoDHgXfFzp2G4M7BdgESgVCWzn8Gd66FaxtDLqp9Lm84d6SQeQ84cVnNgZQh9zS23FGa",
  "key24": "2K2GXfjaom9k79ypY8zPYR4c1cyuJ3y9gke8rxF2BUeP3nkP53htftHha8c6HfvS3Pog6mWj19y2wq7Ybgoe45SZ",
  "key25": "3QmJiuwkageweYxWkm7AqRTMC4KsVKcQqggPCwTyFH2QrdRfgWha4ECmSe6RELwFpSpNkizDqNG7H7NwqCHygCkf",
  "key26": "JDyLBQrija4Re9GihGpSEkwemSwh3MinWqiwTcXxooefFsqZxQTeSmBhn6GrbqG9ig9kDbmSPpXrtzGKpkgGp6o",
  "key27": "631iBqmBhgbiNMyNW7yQNqkyW6L1BrV5mHURw9aK39ThTU5gzvLHNcWd12NvYt2JumTNnRGnVtsKw6dAXKfhCCzi",
  "key28": "EwcZ3WWDMLtD2uhYx2NVWneMk9wxYtNCkyqEFmmjmdLtdwCB7mgtdDse3oX38jVP7NXdNXRpPyFRkhrwAYNx65r",
  "key29": "3rc3B2cDtRSKAvZatmDkXFypBGkjvqKJGTdxHxpe6wijvaVFZNeSmzXyAZcGBXCaKhTTRrv8b1nDWbmdKspjaUr8",
  "key30": "33hoHHHffftu48eQv4KVz8eqzBzJXHQmjLcAJgVLi4k3ZUS5pdUS4xFH7RMh3GfxohGorLnUkwewkR8NmwUvRVMF",
  "key31": "5hA9tro2shGhLTZAdv4mPCVxo5XRYUetDwMGaAb9wTWastett7iACSK1Dm5CDnN8YPJuHtjrwR5Me4GGK28Qt2VN",
  "key32": "3hc5uixKGsqxppQJM2YXSvYdvnz61DCpPBkPCz2d3DrgkdBuN17XiJGvcyeiGzKfwEMw5EmvxrJD9GGT6CjrT2Rk",
  "key33": "2k1trmWeWKZvmiFVpPjLtNdQwiDD5VskSac6WSo9XH97kKQMJqD8m1U184LjVUAMv4morCZnvW7JY2ghjcPJg9Xw"
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
