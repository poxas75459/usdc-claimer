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
    "3K72m7jgYphrGcFBxYqDhVRt7uo7FqB6tkDmrMywfUdMSCPu4XaYgAn5fvFnwQJJEzvKSUbBVX4yXGwteTyhTa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kj5H3GpcmNh1J9ZBdSKie4VwUznVre9eW7B2Fy4uzhApqbGg5T3FCjTSWf2Z34W6wvQqujooMWCgmNtNP7HctBE",
  "key1": "1FjRQs3YWiR5aHgQxynaUYKts3iuewktnXY2Um3rotb5tw4oCQJk9B8XCa6cZFmuDvNTiVWXshqHb7tyB3g7ueT",
  "key2": "5LyCpNJM7giiErNqqEsrHeJ1jz2knzt7BFiiN8gnWHXuHUzotoMekXTY5SiFuscNtzJfnPPRyjwrfxKocGyRt6kT",
  "key3": "2oARntZnDtwgBPWadsEAyqmE3Mj8Pg43zb7pMNxpU1XHY1nuQTxUnQ3DYhYxetNS8QwZ5hRM6Wwo6kUvRwgYWACR",
  "key4": "3wEjXBjhJXdvmDh1PaGLuiQhhFkuww4HHfmv5tRP2cTeHYzgf1f4qtUYJhfq5QetbvqY5PALzY3fqGj4e3Vfim9a",
  "key5": "3xoK1ydopxNoztUgfpvwHchMiTgprXG4LqK87X87o1tMLbXdne7suePrVD6NRXKNCFGoRAtCgbKW5pog5tXDukuu",
  "key6": "5B9x52dGEPfDUcdtCpbPkmpZtT5itpdD8qMjtDTZmxmLcXys6eRrPX5C5E4gHZ1Rby2wKwoM1B1YsTy5xddW39GA",
  "key7": "4BHYQQVFDXZjmGvphYuATx9cYNXLntYZq6nwH4fYhUS1i6oJfPSVsQp7YrawbS91GKyD1VhJywgEQUtpqTemNrYX",
  "key8": "4JHTH8FFhFXY8oVQFPksXbdneq8VZBfpaUpArD4cSv4CNjsn8btFNoZPAjL6QGEhDm9NKEtfJRDFTZMMuSYiHYfk",
  "key9": "5kqqGeZV3rdSGRq37vp8iKqCZtwwHv1htUKRPitVyP4Yz5GQjX3w12TPFNae6uXimNwLKBu4JnNShfstTZSwh1cF",
  "key10": "2NyPVG2KR98hpgAUbkCvZGTBemyrMRass2hG8itmVkUQzESvQ7ZbaSCxVDGwbuXxPqBZAS3U4k3YKxDTMn3evvBy",
  "key11": "33dxR3joy4a8q6VgN3uWawznevaMiZJgcfwn8bs7a8dd1Q97BqfeCBtp1LQhMyRMdWVmavrMF2Cv28XFd2shZZFy",
  "key12": "X6ffz77dp4Q4LkCW7apZw1FA3DxbRdwieEo9pVzNtb2TUTKE7TtBaJQypnoTVQgvV69JffTJi3268TAXiUuaXyE",
  "key13": "3yDBfJ4hrwEsFyxXyJdeWpPfDmhu8usNpYbkGbCyc1fj6sFARYQJm8qSf55eH5CGrhYd7sqadmyozv7zKAKJdBPE",
  "key14": "44Uss2wswSZp6k5Z3vU5VMPqgTUdScXDJjeQWuFHfgzbX1t6pqAmyWCAVenVysvteVDsdrPVDdVPBk1dRzaYMfPF",
  "key15": "32ySRvLgnXRy8zkEVt5xvpuLPhXe2qguAL3hhaDibtoBrsYFHbXTJhdsZdbazqBXMhzJkTX2ihAerDtb6yTQDEMZ",
  "key16": "5mJ7JrrShkFdAAy2UpRchbL2kWdGSoPsKHswLdRMgejFYRTQgXfkXqDGk3jpEvHTpGECFYUegQLKiamDCNE4pj2G",
  "key17": "3ATd4ycUFr9WrdPgZzLCzD9cACDD2mp8yfCQYYSvRB3YYKP2JqAJFoPpc8z2aBPLqAWiJ8RvJqzBreR8TEANQgLS",
  "key18": "b2m9XaQUMGqUbmQs72RHK1kZqc5YVCnnCCUSEfZAmWdwcoTSgnwZM1gJgVWb75kuChwhwzqeewrFEzsAASNof3L",
  "key19": "4veYWofDodBAqGmg7itRekGrEx1VWhouMsNXTZYaXSaa4pHWQ3aVGzA5KVSanZ3GF1wtw49Eekr6jVUFa1oCLbar",
  "key20": "5aesS5MN5Ds1WNfm3R42uT51RWUVH7mYP14iNZu1aqSQEqBZdgcCHZHWC8HjG8WD9UUpP3ibu1Ba1EtYFD8sunvy",
  "key21": "51XTUeGHLNvYrjZpsPSpAvktfgTRNxKkae2jTAKWa81fRo2ymxvvWXKS58BP2U61WtGXCrDH4n9q6riiNv1Tbn6z",
  "key22": "4NAaEvAurbcaEzQYNQGkbWxfP6ZauC14rFrUagqpnNVVEZFCAQd7ySdwfadUscepQQ31x1qbtDoPhu9AA3Ym16VN",
  "key23": "5bJuZDsBv3h291Khg9RcXQX7tKMcS7NFPoAR6qrX5VZfF73xcUj1zn2PKZrwkqcTa89smkLxbYzeodY1jiNxsYHb",
  "key24": "32uiqspHQk3aXSQ9F47ujLXqG8s3g96uPaU1jsjha8B5gbEWkf3LhU5bevYdrL2UvkAtPsGGqPLUTtE1xUqmndGy",
  "key25": "3GbPPX48Xt3EWMgo3xz4wNm7Rx8tpGjfE5AfS7Yjtf4K1UPpJsAdovggz2par3s6PyMpBqTQGs3UFzDTV5Le7CoQ",
  "key26": "4728ZL7W5ge68cZFnjPVBhdgtqunJnPAT61zSxkmnJEpMjqfywAqRgQgWRA1STU78eJ3UQ1yGHum9hztxRSX7iC4",
  "key27": "3p8QrQ5rmQfskronAVikfSUBZynA44LYaYbwhEsS5qSL8V6fzmtMLfQwELzh2j8wgPxFNrXcD1Gjbxf99MHKcwD"
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
