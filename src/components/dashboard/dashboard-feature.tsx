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
    "4r5Ra8SrXPG7ZXGCrxuUiF7cJe3aV3YyB7vMcxqW9KmwSQ7uCvQMrAMNhacEwZtEbSY9KYypoW1JgP14XogRce86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PgbEcesFWZikSuzhjvf5fLNYuBWSZAGSTmkrfksr3mJ1D9GQQ4KSSghi6kE2X3nMi3ShFKagwvuaecsxMzr6KCK",
  "key1": "3vmDtYTJVPSiQEJcWJ3S7sn4Cng6QjjCqXsy2vfsExzHpdBQsWKNeLHj4kvJGUbY8AF5SaCPrQqDT9TJgvkaAcCh",
  "key2": "5xzeXZ9ZGvyob2PZjwjyUztk5f2u7dyqgLur23uzz2gGaX9KjFumsCh3NxSJ92j3raudSVG9THCoiHB2dHnZFHik",
  "key3": "7ZhvJSbNhH5pegNzi8xbPaCbEi2Gs4RLRA3pxUo1YvpjLvDFfQegpLzGNEJCtATjnvXGgJwf5m6GbdF4em2AptP",
  "key4": "2uTybgRzntkEXRdcWiG1mgdVmj4M4cwnDuehVdwaJwVxMVmUHFsW6D2NpUEkini6FmoZMiBjjXUv7g82rMm5ngvG",
  "key5": "4HSuyuRanvHCghe77fM8fJBewCQi7gfRnXAPFMW8YTbmWuA6L6qm5UJhAhdpHET9vuBpXJBXYYyd8q1MVEyPrXEq",
  "key6": "351o1SA2aum4xtN6biJka2crGGnnACAx4yoi4cR3xQ9meE58d2eF1p1p7HbHBm1JcuRsfPWrGvRGHuqQErbNVPwE",
  "key7": "35PbTt1Gwi6AzhmxQVpb8UGJN8LBePqHQGdvAVgQ48qv4AM4KxH6u3b1iaRgXQ77PXhkaWyeB4NK9fgDJNucd3mZ",
  "key8": "5XfeFeazbqsW5LfbJKZ8Pnp3Vvf163FR59GBfQ2j2ckZomihvgWbaxzfsCpLGzez3eukqpnBSfmJvNAhGdKXh7Vj",
  "key9": "3qjcbrpKAF6ZsbhP8NB3K5X552zkohP6wWvRzauuVXXDJdGn8bSrRoVDFWJ6Z6yDcGfhXqmu9SAoAxC7T2Y2fCuX",
  "key10": "4i76m61uwvdPg595Hhci91CpDDzhEtT6TP5y9FqaoWfgfvKGvLyhsA9GJNVfZydvcVwiyn65eryruAjHNLPXfgVo",
  "key11": "2nnUU3HnYviMQkF7t35iyUyqAZS2koyiLkpusd77NfDrQ8tBzxtTUvyVHosP6A4fXv1gdCQhLzrrGfdxksSNRW6R",
  "key12": "2J1nVGXQcAoV3XyLAu7JdP47ayFGrx2o2oe5ugQUWCbjetFqgDt4v6zu7rxFub8nRW64WV7A8Kcxat45CmsvneZE",
  "key13": "2R6TzrQTM9iyB3HBWTfGUdcu5LVhbbvBcY5UgVFqaUo8VEHFQFjLt96mKMWZetTHz7XRjarN2KrG8GtpJtsi4zjJ",
  "key14": "4cSfauPAZiJy5MCGLfhRkjWdPcs51oujjDh87uYY2GGFiZpg7qmRLcwfb7WMieaY5DHU7PhV6K6oDdk7kidYS3uj",
  "key15": "51fejkZAsMTytVepbDz661gvv42aXvdw6Bw3m5AY67V96ewFGptqBjw5gGBLZZ2wf3p96iJ6kBM6yF9UQGRWV2nk",
  "key16": "4MU1e39tpEX6KoFXcDiFw4ydB9NbLFL7bxLB7UpqMSbZrpwkyxoaPRHTK7YsrzmvjaUQ7upnxwEc6wiw3SG6UC3m",
  "key17": "SArmUjJLGeKBbHWwp8DasiQwN8VGhCYXdFGEXcQpWCCUnaFjpLLAF5ge533JVrEzMadT4ke3RN21X4V9WTZ2UPd",
  "key18": "8xCaNWMgTV9ojJruKNYtQ8gmQuHtiW7KNqYzEhfv3Fp2cSTFJuSKTJiBdLTrgeYznpt8U4CnfikvKh3Sf2AVAre",
  "key19": "NCPuFLocKvZW2Zndjopa5M3AVUSKDbCDcUX4wMHNNouoLSeVLiz2ChUM12umfPuypyVPErgfxaxMxnZXQgwAzyq",
  "key20": "5ZP9UimDD4BcgEcFriY7naU6hcUKAbp5GUJhcAbtMmUkcy7hRazhogPijyK8voAqdULbGiNdCpRYN1Zk2sR2D9Ec",
  "key21": "2yWpA1z4vN2QbavPxkE3FKLgZNPhyHrdHpCbUDpQdr1BN5AaRZchy2DW75VvkQfCbpRb8JDn3yiJ9NMSY8u2q5zA",
  "key22": "2dS1dcUdnqKzccE3vfDxoLegBvK8DSNBp7rnEbneJPLUec4TjFw9KiYheiTH2UE5PM8BHsUgh85MHW9oa7wQSSBP",
  "key23": "5unzEb2ouW8PNU5mtHeKCV37rJdUWfLGT37uoAKakanFVnK7DSs6a6YoG7ReqmrrG94q8ycggVp3ypbBP5XZKync",
  "key24": "2wDgpVQsa4FrhHJiizZcmu6cwpsLLPASHt5LxxyNkptuHpPfCsyvzgwMrTiWe2hJPXGLnVgy7X8riAKCkNUvQKQX",
  "key25": "5fRg1tfH3E5roPLz2mGS8AK4soN16JGBjTGL3o3iA2vyP21wynZ6X6mBbeoBEGvzU2AazWd9VseoGXFrgR9K9KQC",
  "key26": "2R3sNaYqeFFBt7hkN48DY9qDrTDdyhgosCbfcSc2ssNYAPQxquaUNYng1wuXQALZkYbkGeRnChCvsxop7Kt4VpiM",
  "key27": "4VQsAhHEBx8KYkfujZ9MoDj6JDZ6soaRDgK8UKk1wQMdmdeeGd8nqQxFBqo8CttpxWzNQQZZVddM5JN5C4nudda4",
  "key28": "48bocdW6YJfRZD3WAxnRVNiFPrqqwMdFq4NL8UWzJaQR8Fjggpyp3B9f4W7Hbo7jZyaSbAGBKEtdcNiKrfDqGGJv",
  "key29": "3L9nUpRRjVZn37v7pqvnSg6rEymLDtwzas1XR5GJTAo6N31GqRUFNZHZeBLmubqSukv2t644Soz5jdqjNkjPcScD",
  "key30": "5sYfdgTBc1epAWbMTC3cPHB7MPMS1fskWvxBukmWHsZRNysPrPWNWbazvTk2M3N3H2EzLdad9rbzjJr5esqEE9nM",
  "key31": "3msHUSiRvo4hJSLQC5VppixpESYs2MiMhio1Z6Wp6oEkqJZiVMvf6tJhVdzefP3qjaLhUQprSWDVK5iE7bswwj5d",
  "key32": "5ANzBbaYzYpGUNJSkJU5Hq9tWwEWnGJSRg9rgXiykWoniVkRZ4N3paFzqREyCSJyiraMEL1axmn1RCEBRcRokUWV",
  "key33": "j2XcTwmahfChsACzbPzow3YsUWkDMdrgxuQSLPSCe1HHcUMsLhhHSy6ctkPtvxgFHk2aFHfBqV4DdZLsbMo8q7d"
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
