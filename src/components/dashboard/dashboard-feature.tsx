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
    "5G69HTsiDJA8ntDmEqXLHzEubPkgGy9vHBGcaX3vM1kXQ7MJbA1ydPCcyMdGz3sZaxCUmB3MAsJv5EVuvpspjkLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ikRZuz66HR64sU4cpKZDvSEehLZUP4aRqp7xE5SDLUaKujkQy2WjuZ3ovUwgXGaQKrZzzt7jjRXvu2zPFHSEcXJ",
  "key1": "52iptYFRhwDXGYFkZdZuKAzwk3LuW3Mgc64zDpFHFMSw4vWD2G8UJdyfsUDTpk1CWs1KZQFjy524bc4uRffdmxNN",
  "key2": "3aY3v275bhj2ezA1G8Mup8uThhh4gArfzmJYCkNJT9cuznGGmPgPPS2336AWCZpposvaN8HdgrTFMoY197i4CXQX",
  "key3": "64cKwnBunM2Aur8XXECDDvrY4G9JLTseWLrt312hfQ9ZrREZmnaFn9N4ZUYMAugyFatqPorMpjmUshDdB7WUpiUa",
  "key4": "4gyAzJPwMCn9LJ75hJ25ZWjuM3A1zuZ9iLVdNKSKZUkuPeQCBMEnuD9heE6t1y3BUNmhKMHYZ9JfzhvWchH5Qc8i",
  "key5": "Lkg7YHgmMmVSGcJGppG3HANPAmNUx5BQaJFB3aSmjpTMXruSMXTVBbpbSzXKjCXomD9baLThjjaX4fJw28tcp3Y",
  "key6": "6UJeRoTo4ACW6XnQzewhUsDYd1FtCyyRN6zUSC3isDL8QD7Mt3XMDmdxLmrN5u74Cb1jhuCEFvFLety4RTodaez",
  "key7": "2hh9Xt9cA8NQfStfitSQXk7GTVP321z8kBBhvGYiPP8pNJ5XYdapksAsdBgRTAhowE7R6eT5pFoasMTdK3U5aB5t",
  "key8": "5ytyb8iqcH3PRiH3tdGkhCztLkjpfP6soWEUpFCVxBwuKAvBkwKm5kQC7MkL6pvhNagNinwH5gQaSJodcajUFLLC",
  "key9": "3sap6yKjZf1aQ3HypNi1LnzAUhDz2yxseyFnobdEK6GfGovftMPYqnGqsfWHgFXVEEp7jeTiVYN6KBS1xZib292t",
  "key10": "5u76PJdrumuoM5WQ9uTVZ8TauXcSCCRa7kkMi2YVjGDpvYYzMece1EUw7Yp3q45dgZNRkyNryWK2hz1rhBVtHDze",
  "key11": "33iTjiQ2ef8Zy697QkbjaMDuNWhUQ1Ry3NHyqDt5KwuzyfWgbsbwgpJAtZH5sebm7cs9rujKaEYz3hT4NeiMfkHA",
  "key12": "4yPHTahcUr76FkPGRpG8ZGAsVCHjg1UiRNVaS2YFQjA55yFXtHnw668CgP5QhjgcQahqaqRdSxtaRTQ41qETSdcS",
  "key13": "4dRiJco5cTPKDfmcZk4DZJr9BFVFzFuK3XSfoZNBauGfJKGuQ1MxHV4EwEexVB4pxz3xGTzAp3QfwabfVGDJBR5e",
  "key14": "3wSQnoiiSSPg3wxYzyJzXw8QgGbEEDmhEGzqrFcwSA3PZFGKg3B9Vk1TaE5GMsGbB1oFR3msCcSRXb4zHf6axj9",
  "key15": "2Mj2yLadR8VtDTHubX3365dA7vhqiiaBAK2uefwPyqFHupaaAikHnUGzk4rNN1FLtJapTmiZtKgQDwZDn6YrDNjZ",
  "key16": "4HPv1BC6TP7CrT3KvGuFuxogPGM2fc2MUXpxoqgf4nF9ZTAv6WN6Wz4BveW6RoDauwy3Wzfv9W6Li8ZYgkbsBaeK",
  "key17": "2vV8cHrZna1QJvDmRU7e1eBX5ExGaCdabnfbibe6QmGN4ahZyBAR6JnmsBGcUBNfiPTuWvqh7k33poMQTYknZqVv",
  "key18": "56Ps7b5ASerSaeAjy3WsMtvHswWLuLCbwBebA4feHzXTyfRGeXYhdnVWwqyTWe2fZnTmeAjRQqwhdUZpGeNc6FGp",
  "key19": "4aeYLEiKyVFXEK6bkehaiyQpYhyHDBpeNFxhYZzRnrWLPF6ahCs9iMEiKaFvogXHZMUPP5XETbLbPAHAjKu8VD5u",
  "key20": "5exqfxHx267uxrZkPuW3LfrrkaDL7Y899X7TetfDqb76kaEtGeJJzfuosg7NMuxgV7gtqGcqvquReFpA8EWPK6KS",
  "key21": "5SGQxSrk3KiJdpwWA44ZKtD6yuvHTjX1QDdvfJBGMtjccpyKLcq9cmkiGv3KfYahDYpfdJtiu35wUQaqCtdpdtAj",
  "key22": "2RenN8R9LUwc5RufcEqAQWv32tS11R1T19CXdPSX5DoXE73k6PFW73nScjbRdASpBouBemqie2Wg7Nm6Rqwe3ZjM",
  "key23": "4uG24yeeEziH3q8BazwArfzsm7kTRysnYgdd5A3ghPrCaxpFbyJKF7QbXPC2RBUrtarPMJuTurH35PsF5NUwkt3Y",
  "key24": "38oCMVydLJb52aZgoH3Fy73pDxFC3iSfYGeQE7Ss8Ltq4RjEPXWjMF2cEq4NjNXtkYud8eADqzxY3ULEV7rSbod9",
  "key25": "45QcaoJAog7h6nEjzqFSq4TDgQWWVhdDoBigwGGJQuWyUdGToX4XoV55RDGk7HdHMzZwD83ppE9VKaPaMNarCf64",
  "key26": "28y5px3ujcEFPWmd75vhCTFnvGguDBffzSkkLF2dUMD7XDSn49n4aTzPTnwCBLd8sBoBLpW8D8WE546z1L2rJN4w",
  "key27": "2PbPiwtFGDHMrF7XFYhFdQktV9BWiGqKpsnaNdX6cd6Amw3qvkjaJjWV9c5nJWfK295N7u2FCxTDd7w9Td4uN4Md",
  "key28": "2fP9TR2aa1hW16xdr97tkbg3Dzsoh8VBBArt3UFGgdZ8KzVVwiE67PtQxffRPZ2yt7KonjhdHk7afemni2BbsAff"
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
