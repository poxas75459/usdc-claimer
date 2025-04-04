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
    "2uKDmZE5iA6FbrAq1X7v2pPH2WGhaZKDqjeNouodUYgBGCnb7qYpC35ihE6fCUTTBFZbNGKzZDwZALt6HSZoZpjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32f7JfikAgfrHubo99sddsYDXVUmvu7nWYiC1MKo9jQE4Hd3au9TsqWXepTmjSHiC6HuDLSpKKP3Rv3Q1WyLonCy",
  "key1": "4bzzncyEdEFzTy3A3ir5uzJ65TS2vMQVjT4cbpvW1XonnnBTbE4q4goe9s9soav93umU7JRWVjp2T7PYAq3gbccB",
  "key2": "5DKnmxi8JfxQuEyZ5CuwF5WesVFKHk5rovXwBfXmiF63MKPEoXD4fEqYLEPH867ZEQbWf3TYPduLcWucku3mLmkS",
  "key3": "4G45FfC71qm7Qe36LCVhZuCrqzTPqJz2n2sipcCPB5sBT79RzNXMAJ8ybiheTHUr7WwkL4EiVPQuRSPAnwox75VB",
  "key4": "5QFR84o1eyF99KD8XQpmXzAz6fgdkwhGGNcmsAGFjZHC4tUt1FkCNvNzyZ1Ag5EHjXoFU1viPEjGMLPEB668Grg2",
  "key5": "5SHo8fL8kxb9xdvhJKZwWpAjmQX1vmgZ1r9vyLVuCNpVJiCqb5QGw46JY8PYauYu7axDT37h1MC2mjDKrX6JZYaj",
  "key6": "51egdorWCd3ayx7n4WA8eHdmjYuC22pXohmQtfKigc5TgtHkVLgLihL534iRt5XjrMbQn4cVBnZXSzAAE9GYgmut",
  "key7": "26UGEBrs3TChvXmZXwJ37Vdbe2vVeW6ujbXoEoVRSfB7TBFNML6Zi8kGnm5kAsS858XkaTf7xaVL5hBFmYdThHyf",
  "key8": "5z5NGz5QzDUNWUjZNr82AXrfaVfzqVqcKGA7SE6JPUxvgWHjwMujwdvNnJqhuTB8jrbLuHDySoLuY89gyQrpeUzC",
  "key9": "5rDPHfgjNPNvyH4vrr7dZXaP1bDeFCF7dQtQDPC4CVnQXAEXtYpg3pqbVa1WZZHAVX8FV8UocrGzCGjEG6fcU7Pb",
  "key10": "4w3dRVDMQ5CGmZGRqe1aruxiPZL5ksyMs6dCFb5i1GpgpAScSQwy3DkPDV4CscxcTfDqUmkAyX22zsrabcYgDuhp",
  "key11": "2vHALuT5NBDdbNj3vpLKFJh59nHpEj3DDDYe8oPbPeT7s8UzmbfdHF8dk4o3HhRcjn7SAyePRHVY5PRb9RAaFhSn",
  "key12": "2XnhncLSPbobpgKZTu1eGupnbNP923kpmGQzofCNEh9mZTN3DC5vAyv6zfVFPW8PJpagvpF7K7pgXfNMbhGBNVfD",
  "key13": "3QtR4U8CYBD3HLDU2JsdX5i9xitwHte5g9sS1vibNaRrHZbENJeAq3Bb22y6NHzCMnoZQeUVU4YaHzvRW6AmXzrq",
  "key14": "2n1n4PwCqs8aEZ115NUrut1tyAfiQ2PRr857K73nL4ZDUSY7RdrPDxhcevXyrBV3eZLM71MrywVs8cRGEuLfNJuS",
  "key15": "3mfdDYkzvsAm9XkoPGcGYrZccBXoJgWfMgiGRtkmeXycYg21N9wnQPLw9tN7wdg96W4LwHYWZans4noDKebHi6zp",
  "key16": "2p13xkeSNoK2m4nXbsMLoAKziq3iEhfNx5VyfuTfEa3bMe71mMumKjQZwpuqRdQWWFemsYCdv5tfCgt1moeKWLC5",
  "key17": "3FQUtoEe3BtmSKgqv6UnkyVHVPDeRYCP4UqfwWDyAE3ZyAHkZR8TVQKzLX3LsFpBvd2zY1aE56LkGdCqX9HfjLSM",
  "key18": "3GZeeaT4oJNfn3DCAT2JrDPiwyYsiZzy1pAPXcJa3w2RKvtzngt1HtGHVifvM3itvZeNKZwYrGurd51prVN6WgeW",
  "key19": "568LjKhUE5csm1haFFHSEUvTLtksPSwrk57hwoJ5a8P1d82RCDJ2TCpWFkzg9tiiZMrykb4hE5v8UwEyzUPhhxZ",
  "key20": "GPmNuqy15bbGP3Shru3XyaCDHQH9kXoUSc2A46pj3JcRpeYRkYvf5s1Q3fPmXDxn8FMC4Ze4XAMkFQgQwbMv6Sn",
  "key21": "31Yy7xcWJVMyhTqxJ4r637t4hvA2wvEeZxN32vQRaXErx7RJL93bQZtpHboaNeCiFabzBWniqFNxC1664WMEcJ41",
  "key22": "55bZvkHm1Vkxx2YHmHEad5P8Mr2Qim49tz6aB9hRpH5XpaEGFTTgMGJqFso9GSSuQJitu8sjTnr27akiTqhaXX3q",
  "key23": "zrM96ZHsFtW7LSbB6aBbK6SsRcDcBpLUXU8GT7wtVErxYqADT7YpVePeJoPuEHMmuNZyroAvwiETrsLJbKCXZuf",
  "key24": "4DGNHUrLciTtuaDLBHysyRYZpwrt94JVERhd7t18XQbeSTDC4JzoexFUAAPLy883tVP7rA55FqQRzx2xHpThtwLi",
  "key25": "4uHvR3wuELU6uZuYpvHrCn444oU9XWCU6dxfZijb1dN8VwL3zt8M37Qyg2pvHk3mUq7ntriUPTRWMbsWA92ZTWCi",
  "key26": "o5yocyH7Mutk1yxBLguQqqWHfqJqFyHfRaGoxXcUeytLKinxsUbj2J9yZmcFKJpBdeMk9nuiMuCMqRc8iS6pHmg"
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
