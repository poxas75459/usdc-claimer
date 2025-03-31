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
    "5QmA793nJ9ucsWwLHNTdJ31YU2yTWjWrguJiNvUexceXVr8iXBwRMxhNCFBq7tqVDxXWAXsF2UvN9HRpwpxJ4kNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q43jiuRZnCyirXLqD4PG6HgckTHmSbBSAVL1wwps4DnXdCKSZEGHf4f8rXtmGpznYpdWCQ3ZSFfdeym9eWz2oVD",
  "key1": "2zgkrjURkY6z8TYeE99rw6oPKsdhuSe4uEigZrXM2h8Je8AZ7hFoY5gF8LfG3qpGTsix74oSXkEnCRjZZ78aaPM3",
  "key2": "3kNh1BE8pg5yHsrZZW9ZcLo79yGHSXbJ5HarNkqiGNQZhdQGA4kYexSayxYkmPnuN1XWvHXbuu815bi8Eet9j88k",
  "key3": "2JVknofTzJUmQKKJpPXxn1vWdYbU6X4ZdmTQJxCK28YRYAPSJGk62kuKqWxGgE9qveYPoqCZeH5hdSXfmaJowa3U",
  "key4": "5Naf8oMa5aCySpZ1K2cFKPsJDFBfA4xHZHLnH1i1XVdFLYQeBGggy979SkzQhkMRuQEGdzuLc4yBxBagqWHmKGEj",
  "key5": "5CiCRNgETsb7dtYZ3dDS1DDsp1bWrDj1sgoeHLkCncL4GZnTPCZszvGGDHGk8NMNXAGPMoBZghyUQ4GnujqDtTEi",
  "key6": "D5iESu2tTFv5CPvrpxJvw3EVb1gcnhGrZ1syek2YFVPzybewFTDXkqsMEzrrjvBL3yfv63Kf8wBAiLBtE6trdkH",
  "key7": "ACWujibLF9K9JZojTt8jZEj5vUkBkhs6N6rY3X5Y2pG3KyiGddFhXSUT3SUdHe6zN7o5nX3cJo4HkVKDye1Ca9f",
  "key8": "4sZUVySbQrJfEzvZJgWgeNMYPn7L8VPnpQKNs3NTzuiXwCrYQ5EKR8aLqfP3MywcEuE5JdQ2ACPg5J9iuYAJ4eZu",
  "key9": "3qbS8hiXMpjjrHEs8ozcMi48MpT9Yav5FT8uhTaWYLTY6gRBe5vyUsPzmKJ9AZiW4VkAgqLNpfhijd6agYYNx1po",
  "key10": "4iqYr9WSC8LBv2JfknMN77psD5TXWeev5KFvUF5hsbbgcU3Smg4NE5wspxK5R3qorverX45epwx7okeUYqSe2fWW",
  "key11": "3hDZyL3guKi4NSjS8eSCD5Mhhp8tCP3nTyC2QeWYohAZ12yd6nPwQ9rYuHdRxvLqB26AbjgieTkbFRi2PccMkBiW",
  "key12": "XTpkm1owJvEBLuHnYV8af6SiiLiEuJymsbiLSAfg2z2WgGKEjQxBRHNYxZidd6tgcWxV5enN6xffje1H4ccaDQp",
  "key13": "4gFURBeHo7JeUnjskg1Eu6mLcNwkV3JwXHj42mL7wtdpTcVS2RGnKdGuwK5KFZtYYeErBxUUgGc7R1GrCDGX7vGe",
  "key14": "496JNHnRDTWwjgaWohdZoiXxiJS1upTxHNurryTxBpPLDgmQhQZS1PnvUuyPj3hC3xZ43d5xfKU77nUbLetvuFru",
  "key15": "JYCDfKAAFWTd8beYPZVELSJA8yztNxPBTedCmCFVRnuB32xVo5xa3pEBdFfvesMZhPK6CAbT7GQzonyvfGcEh1r",
  "key16": "3G6emU73P8CiyKaD1Urv2iWVDqs4Zx8qoLsUcmMRaPMretuhbp112amF4kiRSnsWMF8vkdsKDPM63BN18g5Njvi9",
  "key17": "4toMewQePayjpwQ91JfoyHNAST2Fx67WUcjJzjAhsXXAvjaWFNCuCTc62YyiuDZ1HJ1PcXg1eqGqPrCp9ddRxfkh",
  "key18": "3GyER3ExkajekFrVRWETJBH1KHNiyveCdYHxHSaP19sXcsfy3V88hQgthEuBkJYkUDYES1WpePrPYSYEkY8FEXxi",
  "key19": "5PKp6KEdjPexNjSRSzSqdofZcU6U81Gbvyo3qZ7YrFuByJU7KT8bZwq5VnCdNJ9GwS23VQU57joBFNAHG55GMgts",
  "key20": "3THeummHYyCYypp72sCa5BhbEHw6VFsFvApTd7jgc6HncgdA4a2cQvLWu64JwGWz25uKF7KzABafdqdnuNugjaSn",
  "key21": "2iAGKXCjXVry57e3UMccga1gYvoGtvgDW3V4uthFtPcAWtbZYxkpC8GEf2fWe2wMfHoNubBkRpg9PfEmqQkuB2Qu",
  "key22": "NtVVizQVT1NGh89rzefqrtsUFXZZHEqKutb97HAt7Pa5JXPv34d1bccc6Lkt5t5ALFV2T4D2L9bgZjr8iM4eTxA",
  "key23": "5m8f2mLdraxtoMy3yfB1EphqGLvHmF189ts5REPcGJVV21Vrj1UbCiF3phfqoRXn8idp1YTcGyw6GgNkc6Ve6HPj",
  "key24": "5J477NWzjmjbqYyUN6e4uNFxyVBQ3iJqBd4FSgv1kPfMugKEY1VrBUtkbS46Hb7sUt5mbQNMv8wPMotij8dkwpA9",
  "key25": "5V5fNuMuyW52Meyu78j5Reou2gyVBcAGUm5pkSkBZQzwNfBgPmpJThvX8Yt5nRGgs5VeLgaFKGGkfEGR9o4Wd6oK",
  "key26": "46jGxSjomQPwh76k3YqmWdmxk1LnsS3CCinM2hTcDZDEa94RNtT6DrqrL4LPsiphE49qUmbBx1DjAzkaxL3rQzDe",
  "key27": "6175UxjGwAWixnu2crL2ti46SiiRG4yFcKrnFmi2LJPwuiik762AL3vnMsQPQtnvKkhYyUd6JRSYYpkPys1xsNDE",
  "key28": "3aPQZRp7sytFENQ4ovb4mEPYDbAsFraYJiHPhGinNhSxgRfCkavBHqpF8bYJfhaegm9am38ctaLzXCTV9hyxcjJ3"
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
