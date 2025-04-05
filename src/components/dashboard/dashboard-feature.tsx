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
    "5RDQrGpTxWpVRVVzwvXCreZ2r4Wtx6o3M888qznNgCsnjHEUzm8FMSvyHKgyxw1kA3T3rYnyMhhrqgUnoqA3voDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtsmEA2kT2cB7rovFT5PGA1scJc7T2Qp4Zhc15kbaAv8fgA5qiBLgCcwjehWPn2z8fnoHK3fHtEA8kzQEAxN1s",
  "key1": "43MszbPjcWTZWhuRtDDbp9L2bEeiQPP7NisPYQkj6zmZdoF3ju3XsymBE2Nm57of5qRCpTbsN3r9KbM9JRU7FGDt",
  "key2": "WLd2xSTN76Esde1Du5gEvtaFbXtCs8gEVMW6rRtm5KWhKihxizGP1nfoMAwwouQggf5UfMLYDiT7YWx3yfGWkKh",
  "key3": "G3wY1DXG2THNLd4LSVHdRQP6K33VKh89M7eQHgFQLNCUqfYxaxBtBXBdxxs5suJAPCABfTEy6xJt1wPsnjC4reK",
  "key4": "3CWeAccNYA16G5VkPHe361zCHJyudNY5Gvq98AinN5NEME1she1vW4mKTQcV5SUK7TgsdCYnhuSCcdgR6o5sby7t",
  "key5": "roFrXC6ZeNZKKhDGrTruNJSysaZ7USedQCcGFu1V7bWVkHV7LgPVFa6V6WMMJapwViU4kanhmxLsfDJoJGeB5AX",
  "key6": "2RHmyAYXRzBiHivf4WNhce1aNqtkDZtvPzmQJZro4EfbQVzqEHF759vPiP7ngZaSKf98ak4DEuQmWYWW2SU3s8X9",
  "key7": "5Bge5Don9YBp8QMQziUs2a4E7w3LB4XtqkQsCdP4dy7GC669pmP9SrKhdfB72e5d8BW48fMdqXWYgXPgLjyhT74m",
  "key8": "21Jb3yUFNYobfCtDTsHdZEJZkCoM5ET6EF6faBTpaRB9EawHLwBnfCanW4b55rJ4Uwj6dzu5HXjmmKSU8awa5ssv",
  "key9": "5xhp1nopUAByJ5RRLP9kADURzeVFQUYMFYmVfGvQHTqx5vr6pTUXSvhUpkVfjbXAUN865CXmqN5fd31earsMLxSH",
  "key10": "5PoPXZjzG9G4umsXgmmeAD7Pqk1zKYHva8DbXnMcwLuKiDjozDq7etwQAgVRDVzrKRJAWzCudDCmommUNF8XL4bD",
  "key11": "3nnX8pYV1dsEgz4Y9YHYEhZpJRMiDi741sv8n4b1BYqgFLkumAq6FS5MxUWkYs9Y5ptCheCNXrSHwfpQ8yzfEcy7",
  "key12": "4GjzCWFDYXSaKUDH3BmSJUQkex2RJTmGmcvZXgmD9ZthmEvJ8fZbtXtBqWSJcHS2SWFCQz8mZ4CqGZPFwpzCXPSU",
  "key13": "4Ufbik6XuZJhQ4gaXAMD2uXxNps6MKGEXCm5vyiZeAvj5XozBdXrvpRhWt8sDyNFjg4tggWqV51J4XWm3egef1wH",
  "key14": "3LG2By9BHctnRmXwETqEANhdtFXVBuprTgqdY7RNzdeLWzjqePAWAC9gShBSS2VTqiRbpQcntQci9x2FiGhVxZnz",
  "key15": "GFLRqN5Km1zurApu5mDJrHuhSaXezaHZimAb1xqBh5SYh6TKfsGQcdww3n9tuVECJB6VK7AGZSxHrBuZn62th8m",
  "key16": "32fVwmqoNtPGwhCT3wLgfeYi6n8R3ntNe22YyyFNeUJJ6XeP5DKUYeuWtH2dPmVGEBw4TAkmSwRn17pouK9PNWTY",
  "key17": "5TPU6rEZPXs3uQxdRHJV63cRu8X3CcMuxGSDH1Hv3niDcDJvpTRinPHZmuV9PJiuZmff57RZ5pgPxKTyzjtGZxLH",
  "key18": "5QFWvYJtWQJ3RAcfPdcShXVtvQw2q2pG8pzHGPPxLRajpAoqGiii7kT83R553P616x21bs2uL6r2uqQcoVA9XNhJ",
  "key19": "61ispXnJchyS2F4Ho6Fm5jXLPvxy3LyXsySVhmcteLhkdcBofTFwzS7TRtRwz3tZAVNrG4wRXMXQuwzszpeP7DiR",
  "key20": "2N2pV6j3RcouLHvpxCSUWh9susSLUc84UJrE9YoKSBcyDzBemh5N4S1PL3dcHqQRBq6p93ycHLHwFZsLJ2MvNkaa",
  "key21": "4MRVXC1Ucf9UiAYLRH4pUuXFsjYikL5G5d9maLmDvsz7buywBPu9ZXMLGA6kVVgW569dM3WguAqYhPSuD9H5WeSX",
  "key22": "2CDhmHEJFp7d1Nh4GoJ3SYrvBAypvttEkAqJ74KN7ADaKBq21ALfgpXdGmYMAffAMaWePUwCTyEKLSHbwF7qbbdd",
  "key23": "54EP4fUvvgbsH9XcGFC1Uxg1kU4hezpmHsfa3wZQRcPbq5FXsy5ZkuSvj1gRgCE3BsrDD1tFqFdojH1w8ag1f5JN",
  "key24": "254dCf292yESGwGyZBFa9K15LjBJXKiVmP9oqxLVbpkjhMDoDiHfMJuNic26hNPiScX8PvHynJnTAhgjBsHULgtM",
  "key25": "5KwyDt8qnb9KkJYc5sAKFEGs5dhWj1qzvgwPgUeQxipbHR4PZp3GnEXK1uGkvXwcGBA6vhprY3YTnGCcKfRZwErm",
  "key26": "2TtTX76vzChUF7eHecZce2qXBqVTKzrsPFPUJUHEJM4H5RQA6ZT73i9pxmnBZfPMweJaZPEg58ZCezz8SrmwuXT9",
  "key27": "DkrUJsda8SZEyuj6d6mNDCBmDxmyoHP7NqzF9QTqu49zmSFSBVKzWcLy6d7yLxYfgLxhbvJ3zrRhTzihVDvbykk",
  "key28": "xHQWsayJqquruFL4ih1bdpxd8ZZ1iVoz37rKNJCFJMkpbfwohZ5S9EQcFmBu1SqkKquEALBcTFvCRLCNGTsk8ip",
  "key29": "2GvgZ2EWb8RzXn2ntWD5iBxuwAE3zbp5RrysCgwmNVGchRvYGnxfJK96yVaDbg13E6DF9uZFTzzRsJZcjtFFtjWH",
  "key30": "2agjhMQyeFPtUJaNyZCpsFkk2FXX7Lj6QkMJuWYZze6bgNJYdMZ71WpMiYVbnFLXtYsAs1vj1uCq8hjwAaTDa5kc",
  "key31": "65ZWwdqoFq3a3ZeVMZx3vqyFQzUuz7rCCmhZi4juGvBdg3sGsXnc4fQPCyoT1RrUZBDoTJV33RZGW6rghkmejGt",
  "key32": "5sGnCrsiHNH1r2JvWFutULFNYdwmYZnHb5Y1TK61RmCHqfw8q7PeK1ELig1tDSDDBrvTXUq39gADF53U6VVGd7a5",
  "key33": "48LCxi4v2zSeceWxW21qFvzHFRoSqrsqEbzm23mAs754vwuRCZ2pzaVoEsUqizr48RGx3fNczJoZM5BTzzhb3LEK",
  "key34": "48UooeDM19jjVVJvUsm7VMeKmjX2ds9bnCY1jnhcxmqddp1NSoQvQ7KhXwht4ezp94YtQwcij4fmerkqbT8gt8Dt"
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
