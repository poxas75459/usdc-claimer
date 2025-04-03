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
    "uFyLPUsrNPMHu8LHRg5iPevvoVYkHqzhLsKffL6wBhQ844zdVUMBs3MuTAfZsZwdKdiqRMoZ4rLQ2QCqvMtLBPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N9o82RiXsKgQjz8op11W4k25HvwrfEH1YVWpaXnEAgGcfjP6gnN7uHZdKt3ysbP8ZwfYa1ACmWy5kNzZ1y7SVZD",
  "key1": "4zErSaXfpqVcAmpiXJv7K1DnBxYsspb7dgARwovKccT8fuC5mLUSozfrLhPJRmB4QsSBUETdb8vSGo1qYfV76yuT",
  "key2": "2w5LKT8c1uLpYorj5uh7RkVm6GwPFFjqsedxFz4GAf69PrsJVSK5txUsuQKec6L6vhSABJveek5Qx9qdGuGLE3Ze",
  "key3": "ethQWhB1JfMGpgwEW7iKjNAjcpDrpHS4Y99sDCNKrJ34ryG35bsJQz97GNoNTGqTWa4iKK1V82rvtWGKT2UgN4t",
  "key4": "riGy4JUWLAULu7AniUEmusZjcn6mVEpZX6ZepyPjUDcMkQozcQAPk4QzXjhUZ9stY56pvvsRv9Yp7n8DDwH5yNs",
  "key5": "5dRRfTAFTzEqYNDAMKJ1EyhUv9uWMWQAys5e8ei4tJBNUvHfPwB8p5Tuk19ZoiozfiZ3Uka9T524aBBtrJ69RBUw",
  "key6": "oYdDmAGRosa7YBwYjeDsRZaMEejBBF6TDja7EojYMWCc7EtE3kgd1sprLJEbu2wLoTTowY6YYMYJwCUyE6krN11",
  "key7": "4jiMXMDZDjb9atq6C8zTxfWMaSnNpGe8c9GFACtqsVi8aZUnjF5FFJkzUFXHcZPKhQQonsBP84jsB8A4ZpNKhhgL",
  "key8": "2M4HoX2dXaQuJ6tzSrb1UMhtVSXQKHgn781Xw4suDMPVgMPjDyFMPdQYYfq7nUDd6N4c19kc4J2vSG8sLY2yCXtf",
  "key9": "5Gnjzth6XsEzK7niGdNE7KdTaNY9fpNqhHPk2tnsPwGnQXEqrRZSsXFHRLZW4Mi4DeZGwvwto5r94C24szYEbELj",
  "key10": "4VnWWDCNj1iAC1UNzCh2w3xpZMojgWjXBDytgawmfdPUngxcY8Ph1ubKmib4pXxn4r3Z3y9oFmfYeRFfeAwvPHv4",
  "key11": "5M3wtukY3ooNEtrHjskAeWEZutRayWRyoEY7F69Lzdtx4Ftgv9zNxS7N9fWenWe9VNRbTHBuUehy5pkmMHm32jY1",
  "key12": "DaM9swmLikBMSNUsZRyknWuJHorTPTsiosdYCX6PDWq4XryQugn1SVCzVTjPXomYXAt6u1AHQM1eGcT4Ebg3Lov",
  "key13": "4ExhV1iDJc9UaacnN7grjPJjPkUG3arzkayeEA4B3rydygFcWx2xUvqqR5ArF7N1jZWaUKDNMe6qy2Wu6NrrVDgz",
  "key14": "2hi7u8pQuERMRLwiZp5bRu2mDF2tVKxtwBHhrny6nJ546HsTnvwgH47sAfjnWy2JXKEKJ4Hf8cG7nRALa7qjEpMn",
  "key15": "EAvWPdhJKCErurZvCmnPB34cSLnjkmivgVPUoGwUSZfLrm78gZwt4JyDfb3yexoQm82ja6UTvPVrTPpPa4TRBJ7",
  "key16": "3y1fWHTazAKsNLEDN3g8qHW1w7phFLgmVgcGVNg8Tbv8WSR6tDHydpa9BMMnxXLZtCgp2oMVYhZfgrCfqABs5Kd7",
  "key17": "5hmHEKSkNfqha8bZkiZ55ppUB8nmRdM1qEMsy26rTK8dg12ePqcruDdy3UhDNdUxLCnsz1Hc2DifRGvKU1XJRcLu",
  "key18": "QZ8QKZm72nJCMS3EuLQT97AbDGTC1WZ84WoF5y4aMypCysM5AFcsDqzAhaUJaRcSBPMpkCoZmoKRZxRC9Cw7Wwv",
  "key19": "5NGyc9A9Zbd7Zr3BMwYsFtCvVRe451191LicPVqNo3JkNnGC1GEriuG5J5pFggzhyrcRQtazzGk5JZW95HxpdkKZ",
  "key20": "3Twcc1rde2QWxmW6HbZuNGpxxC5kxb7AdhTGKXr5GuQDmaTaTYugwHaU5hwabmpkP8fcdbqCaZ1Fw6jr8TUBfG1m",
  "key21": "43jZUYs1cH9nqH7LnTNtVQRmUmJeJPYtBSZUm3tSA2hCNqERPmYsQf5bF9Z3m1R8HdJZ7dL7yMwpikHFEUUBcgWZ",
  "key22": "zeVcqTLaPKEgwa2Cp2rBpotMiveSULHMQqNfoGHL2Xbpn1LYacqeFwddtkokn13RevkAfKMBQX652ZibDPK85mp",
  "key23": "4nwCVWFDEZEgPUdCg6mLFce2KEMyBdPRgaJrXrwEjmxw3DatoT4K8eMHVPMLVMLbKo5MYmJYAfyii9soYUtDbDHv",
  "key24": "2wA3DooGSzrHYy8pBAnPefcA9iPEt7z8FHtQCggeRo7QPjVC5cdGH31AGhE2a2HhuTY7oapFbhQywbwDtWwWyA7"
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
