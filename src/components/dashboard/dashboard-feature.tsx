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
    "55P89vzYUbW1KB2eN7PERCLPmzi5cH6YoFxT5qJrWxLSrgcYVkf6pi6JzBzF3AmDERPFQWhBnny8pyVsq41WpPpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PY6aSLJobFygqFanzHHRZLjz8Mk7A9G2XvjrmwT7UgKH5iNuvK7mrhZrUec8QChtTta3LQ4m6kmQteJCrMtZ8eB",
  "key1": "441DWgTgZkCZKAW7NmEnpNQzMUwG7N1EoEiExX7VGGtytArK1mCmz47jHx9zDEFBt5W2czbmjp69hfMqBXw59aao",
  "key2": "A3zdVohemG6F7EHV14431FdqRaBk5xYKz2Rmao2tvhmNJhUf2i8LpbHCFj9y94JMVSTqRB7uwBFTPpR7JXeJ8HW",
  "key3": "4QYTMRJMSP9QfQJF4xF9xygbh1HbFKWFY4DBNhGKVuMhVYoF7J4H8gaGHtxmHYrytaA8axzzfYWc4BbrXtkY9cAX",
  "key4": "47NcHUBYiM1VTmgmF7fUvqjAWFoUvYqb55jW1C5vDUadahcDDX3M4yNrMjVxKjE8Ny8DQf5njz73V8YorCjjyxxJ",
  "key5": "2VEkxqrcDhJjs73VUWdHdNwhEVZExswCqq4jqtTxG9mKG3LtjF2u8m8tRT9TTpzCv6y3boMN1USbgQqBo4SRPNcV",
  "key6": "33qX1mQiipLdVHdNQitkEPJyfB5J8Pz2fVpvSPeDRQ3PpWCChYTwkudNxvvwzbVWcMcnd1bpPurjL6cesXPDkP1w",
  "key7": "TbCa8rZXLPGNVjwc3Cs8PtULMM34Dg91wKXQ5P7kiQU8mhWpK9qxSBxS82EDFmGjx9jqXafDzUQk9SkXbR3g7tv",
  "key8": "67dcRprdWeaDvraSKE57wFJEYbtCeY63UrvrZDx9RzNcnM9R9PmwoKfBcfftppuNQuJWvVqr8zCpnE7C5otoGf6m",
  "key9": "3C2BkzPxKL2AeiXT7LSFxYf78vxBwRh8ZSyno5LjyMG4pgQx67tpAiF8EJuAKwtMGTQL5nNW192EvcXV6jg17yDS",
  "key10": "2SutHseZdRzgxiNYThHjgyrRHohiMNZaKys6addXoDvHxTPUu4btNyxQszhF1jTn74HEUx83Ytm7P3ysNEPrdg7S",
  "key11": "3bKqzwB5GnwDiKEjSTgmxgjynz9VtPSCn7uysAn5SA1cefahqu86GmbjuFxcx3zzg7BxB5mLVHsvKWUUk25BptCT",
  "key12": "5FgVED2nLzxpCm9FZ59ogtLkWaYxDq27c87At1ZqZCVPH5hyrW2dp7A3SxjZLYAtb9CDWPVVxaPc4VrLpvspCYF7",
  "key13": "2snDeVHjJ8kaXvYAifAjH3CpnfjEMiheKtEPSMzJosKkzWRdKtQPmKPUXAMopTFRksVAhzLMaDQ4hJQujWN4ZC5t",
  "key14": "4eKMUZdCyWSuCMigYBrwZFbUovbKTHnN6Ch6tLSsfT6ffURuoRPFiN68by8NMKr6a6r4nErhxNPC7MEZrT2q8wQ3",
  "key15": "4KTyux4tLA3tmTPE9hodP2PraX77vTsFHyuZwHC1SyT6x556t4Qhw3SUMAbJpqVLausWWk6TKEEW8LZgtyPJESC9",
  "key16": "3VQqy4rhzJdfikbaT16TtPFEMK9sLdJUCGzU5JmEVd3aLZoSLD4xf1xbsjipx4P3tFLJW4dX55CRqiXUBQTHPKDo",
  "key17": "4JCaR4tG7RThJ78KD8zbg1xdmXe3RB2mCvYtXyrnCJYAYR12bKg6RTp4q9rhuKGNWztNUd7c6QBSoeB4xwrmooCW",
  "key18": "28W8d2fT7oXvnmFhsVtYLU38kJ4GBY2h6UcUBcjPUikFTG5zgkfsUUYNLWuwwNemRRGwRxkSbe9LXbGcxngctML4",
  "key19": "48jvUaLfuvZebxeM23sbaouq2W51X2eMskfoz5Qgt644c8A1FvnELRKkP2iCjBdesr1qJkNnasFDbXBUw3eHceKh",
  "key20": "4CeZ9x2RTSyc1hx66VCRq8h2Kdy2eZ2k6dofEh5kNHekewWhVP6VooY4W5Jq9TkuT5w3yxUpVHjsch23TvrFunJZ",
  "key21": "51yxN9FSkoNc5vrvDqFLkCD3iEzGJcQLynGcgDY6iE4rpYsSLE95amZSkdxTW5QPBK5Jy76G9b67SCem1L7P7D1G",
  "key22": "2CfBv1hmDHZvdp6ynEBJxRkc3aQox8Vz2HGpvC4YFiKG15PWSRUcUnAHjiwwXP6FMSenYsNfjRMnyoxmGXYqvHDg",
  "key23": "j3DZd3fe8PgGMmZ1iezUymKRPh814is7KgDFfCeVTTGd6exCnYHbhHnU5g2fyZnPaqiNbvwRjkQdNKKANBPGP1o",
  "key24": "5h7rVWStrtCvwvYzrn9oZ5tfP7RgEDZMPHU26hymRKKogD1TwSrbHEWndpMoJ8cV52fogeLQzDeQYvYtq3FH47vN"
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
