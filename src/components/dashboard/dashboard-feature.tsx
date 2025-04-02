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
    "38Adxi82BsNYqDsiFA1NHBCyipPxmJ2wBXZUFY1wmtsNca2HwW28hahzUVuHkHLmW6xLzfkWZ7gkboKbxCy4uzbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQfSD5qQgg3zUpMSkjAJm4S7zZNu7t9aKRHM1hYuwbUEwBX5MMrmpoNypUGtrdWWn6YCkSvTS2Kv3fwvrSLb5kL",
  "key1": "5LAWGnb5acFQkaGmyaFKyguV5MLSEaKJVDUNN7DoTN98Xeg8uELyfHCeDPBVt3EMo1cZMovdQxxseHzvp2bSXYFh",
  "key2": "3xvfWsdczGGd5cFKc7cv6GqgDP5jeqtmc1niRB2sGSoE86AmZ6H4BH6fogju2P5urhv9ucPD1qpjqXiN35WjcXKS",
  "key3": "66C6EcpjLuT2Hg3z2eiEsiRSBF8Z52ZMwCqyaiHACU5YKfgv9nUCLaDfoHDPCk2FgWWP8xnfKayoJwCjq1kEUfun",
  "key4": "5yeEnNRqzv1D8qHfF3hnDsGYdKkMtjt4L5HGVrHXnnYi4Ayu4jqdGgPrJJ6Q36ZzBiE4an3kEkG538MFJWtZpCX8",
  "key5": "3154c1xcPbBmEXEGqaEdqsVk1pwANgMrMHArCyqTpq5mAGwAoA5cKFsjYq2mE5eb3tmVRqFWHWWfQLDzphbbBntE",
  "key6": "5v7vrRSzgcALzBv4Lc4TNkUSrZruooezR7yJU8ZaNLcsvNZ8DFwsMXwGbUNBjCgE4qjR7N8bggDvCwow25F4srN",
  "key7": "2wbAHZ29Lp1aPRkaSrPvhYNiR1XWp4YcTt3AEBRmurx2RPksmpytUF1EabjZzuoPoXkcuJ5V7aDoXHvrTycugDXK",
  "key8": "5MqNcKZbm92WmbCwChLKnLD9C36XRd9NSM4u8DXfRvJesKz16xork1eu9aN3NA1wxfEHX6ZcYsUf4WoQhhcJ2gDp",
  "key9": "2bPMkq7yxrtQ18u2Pt1kYgvSLtRbgW5ksGxf7CaMYKb7WQS6XFe7Tg7afmXSusELgGXG7i7P6yT3DP2rLEZBTSx4",
  "key10": "51YMv9GA6DtbgKZACnzFpEaxzDRjhw6d3JABkSQmkwSbPC9egQrjiW2FhpCF26WDTcUpvv61ubeB1CEovP7PpghR",
  "key11": "2URrSPKf66SzpAoYJHej8nU9jrwRz1ERYsWCRiAp7P3RhF61BktNfy3gBSaYXg9NsGPyCL2xFRWuGgkBUZbEbzET",
  "key12": "xiYQscA7xwUV2iQsznBfaBHK7iNy4TcPmfgd9LePj9nn6SjjhfpHVaSyM83gKa1E4zo3KzYnyPB7zmfoFJqBLKg",
  "key13": "2r18Pd7cGcZy9Zjf6vpcWGMY97Lg9QUcc625sUeFhz64PyKTXyXhxgpDgy44BSQwofidQxs1yosombBk3wBcf3Pj",
  "key14": "47igAgTV4WuwmnwPxGzSg4V6mMWTmhfxxkKAamkP2PpfrpsdjczGYsuPKEV2beinv8sUUjwgWshYvJvneXAKPXRP",
  "key15": "39vTQdp4yKDpkMF9xtq2EdgNbsPE194ZMjPwg83Qbv87GzWrtaQXn8g8rW55XTmxhy1az9LQ6VyYMstde1LvdkEK",
  "key16": "5BMF4qbnDS9trRvWKFXncjGdNGLbs2V2R4P6e1PWHE7Puf58t5Gpd1Q6srn4CHZ65LZGHtG4oUMCAxEfkXZMohqu",
  "key17": "44UGakBG51M52Fohfk93AGPAGDvd3CRUD58xBpnb5USiNaafAyufpxhscDk1jdW26YQcQ9G7HNebjFqdKKYvp51u",
  "key18": "2nRfCAYcap768fw6HrUxHcUKrx1gYTB9CGUifqqUycg8bNkCWfiAULtiCBmwm9xcTDYxK4bkgmDQKjo6nGswQtk2",
  "key19": "4in4GKootaWYVmDGUZa8Kmpmdh15KuifcxBGbAd6ZDo8SV4jvsXPKJeaWUcE8rNbQBYRFFMWLejVffwMMxLQiHyN",
  "key20": "tVzuXnVSahQzRToF2T916k8JAdTbUo8V8b57yJEThpyEJ5GmwLcG9FGSN3VbTiiQZMtbbBMtr8r1cUc966qgAkC",
  "key21": "3xnr7EM1M492uHj1AZuLtULv8FxowDCSQdoN6gfcwYXjgkr1ZVuWRFwbCmzNte6BsQrnLwA7yGda7b5wo99KLhZR",
  "key22": "4X2WSQr2sWvzmesYdsZ1djptYwVZYCDFQFoNqRTJEkh761gzGynxFE4abXu9zEPAFX6UKoPkF7waLphi197RhMis",
  "key23": "3zFApau2RLJfeb5Z1YQcodDsAYNnUEiNfFwgNWuh8QXHgSUCKHWPWaj2cTgBSTtJ54EgsiRHyNfZ8u2F7bwU1Lyw",
  "key24": "3uhxcBnXzwJKea6TqKAUyXXus1KPBsUA3LY2M3gRFxq6t17nieQT3ty2MgnXxtmzAsAn961fHqquGN9cVFxfQziG",
  "key25": "5g6Z95XPcSLwSnnTB1UoUX9B9u9c3kGrT7ShWDfzd6YFig9jFWTmp6dP3CLJS97mAukbdtWjnzAzRPLjLVgCbJzh",
  "key26": "YjBwns1VevCntivgHeRQWSfV8gbKHLF6oDeicfXZQ3E2JbNmKpNJhVT8fjMSTunSASLJ5v4poctngaR5PcLmxmg"
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
