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
    "uNaJj938z62ntQstN268nha9cgdMHLCnVBZwZX8LzVEvVv695ZedoeK42qWMwcHyPk6S5d7NzoKhsAHcMTqumum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgLNM4MEXdCXpGto2qPTAqpZ5x5na4ukpbT7ewRykyPCrV5YJM1RHrpimBvS1nvJqAxa6JFFyRrPMvdZzvhK6mZ",
  "key1": "4yu1fmyTJo7HrQtsufeEXnNk7S4YGe4sr31mKd276kZ89Taty2d419Uw7ocZKi6KXr64zCgSDDqQXDHzPFjx3Swb",
  "key2": "3ZmiKcAnKAfsmoR3dR3V9ThdvXsPctKoLjnz8JxhyhhiR2tL1DFvw9QDti4bsFjUpiWQeVKFHmRCffexfuEN8toZ",
  "key3": "yEEfurJrPPWJuJcjxkVjFuNd8NcmJ2DuPXazz3qd7Ntbj2fWhKpmTKmfE5cuUUjNmy4PrG2rhskRbDdjkvtQ6DK",
  "key4": "5ZKezyrXA5PhQrsqz3i3aui2PRtA237e5wcEpStA4ABn1wgjs8UDGbbQMUtsVGb5rTWp2eno6xYLRVtjtsUPXUP6",
  "key5": "3qFC7jEa2CJaCzLjbZgVSe1tdSsMPMWH6FVAirLFauYbp2t8D7xjrGmfkGzqkBzs3Wfc1reRT6FM3mQeGWSA1UWY",
  "key6": "3aqUmgsz82c8mZcbdPB5s1CoXhvmkBLpdGQgALDn6XKcvXZv9NoJ4aAs84WZFxQLLs3UM4TuB3XAaBikPpiwgoZi",
  "key7": "4uw37q546TyjecpcveZ5Jah8NcH1royX2zGqyStDCv9vYbPzr4wkDFALYMsBVmzNhxuta6ervCb1y7sY5PxWH8ET",
  "key8": "5siLQhRbhVwzmGA7tVBcycHAeETCg8VZF8RqnCqbFWCeCbbT3wd9WNrtbYXrGkBt127kL2CeDNwyta2c2Mtajm9o",
  "key9": "3VAm2vV4H67iiTS98x54urWbynaKxsCZrEYUuQkFirFuZLpnmS739EKW6KDJYGSiBEiiQHu2d4AZQxz47r1NKJyD",
  "key10": "3khGqFr1kSEC4jW3D5mS3UGkMNpEFXh1QbJPYGL9P5HVwRFL2gdfWysS8fb29hNYeRqZtuq9K5eKNNcgNKiD2FMy",
  "key11": "4T8E9zimC5nM1VBGaUUmsMhsQHzkq253RCg1qeWRXrNJmh7FEAzMgwusnBZ4P9fLSQEbFc6LasSQjKfpK6ixGe7z",
  "key12": "2dTedX7x161tk7XHo82hCsHL3hMHP8EZk1P6EGxkEpt8ftayACCp8LSdDay8JdmGSeAxpD93v1phmGLSQZQZkqwy",
  "key13": "3h8qVpo38FYVc7787VJZDBiTj2LvS1aBeLg5UzH3yjyrPdvwwTMPwfgm6EgN2ATGi6N5KuYHoysTjXcgTE2yozfR",
  "key14": "WwfYqRC9yBRQiAn3s8Z4T1ZiM4crnwizwaMDDj4pMsJADMi2MdBF6rtjgcrFp1GQAGfuC9Umn7TQzzEz91yuNpp",
  "key15": "3dxhCk8ChPPNxSUUiNjpbm6WtmqAZknUKTm9jrtMXU6xN13XRjShrZ4PTxp4ECSX5mCU3a4o6Gbfa9Y2fipMqoGa",
  "key16": "2Wu6DirdxhAWJ7f9gkXYW7mu7fNQocAn8AZ5HqmcASXNCL2GTi8qzewjYg4UpUbnLLWmchxE76zrHrJGBUoLCWQ2",
  "key17": "5QSYbPjTiyL4SvhyMq8cH1ufaTH8ReBNLwZjq3zPx38zubVLLa4Yc5XZSfwW9DtDCVcAEjdnAAyrHEMX5sfeFJEY",
  "key18": "MiS8F46oCok3yQjALCaXgkoiThRP4NJBHJfeyFDSxTGFsiCU57T2HeHe5wCEz22gjaCCAR4uVRzuBZhHUdFPVtj",
  "key19": "41XoFcJte5siG8dBs42rqkbcrkG1mE63DShMEj7nvraZjn8oEDtzMGo3sHGAvKesDUyBsHo8yyhX8FtK8B1Z315D",
  "key20": "4g3TEAuEzVK1pvbbKbKpQp37GAFXboduZA4irrog4GEEZrt7YpVmCobuKL5H8w2618pv1oHxjYvWSmtH3xHvQgiD",
  "key21": "tzJw8vA37bvAhn6pbNj98YVkQiAf2pYmP11CJ39LUTUe8fixbq8hw6FaEbTioLsLnMAPiEg6vRjLE9WfAPsp3JE",
  "key22": "52YKbchpMfa2izMCZnY4GhNXiuKixfGzAeysXfXug4WbsXM7JJcKdv4TLbGSCBnxhHhWYSbc3JV2dr8eByk53yb2",
  "key23": "51baEt8uL1samxaLo5rQE22Ez77dBsZgvrTKNNjS4u4DURFkverS5UNJfa6fupeBpfQ8JDmxk1tcdo36NqmnMvx3",
  "key24": "4aPnCF7ixyVX8SMPSTCXzjxwXn1TbGZC52jtdu8vqi39evVNyxrnLGqgjHvGjyibmQXE1mEPqXSockRRP12JeEBj"
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
