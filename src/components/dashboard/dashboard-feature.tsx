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
    "3y6bnBZEmeujniY2xJGmDqvXbxMi11pPqKfa8LuJfJvtoGMDRtvCRmaFj4ZX4ePsCVApsmo46Z3kPGRDFE5gKUZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3nSU2wjAvoJ2x3QVuF5HxUR35Q7aakCwCeXv2MRhqRZgXXPEoG2xtSpNoxBGVomNJCfGvTzhjGWuPs3s8exvW1",
  "key1": "5M5s5o1yM5NfHRQhRrM2fPi4oZ2KeQ5zVmBtWLPJarj8PV5CbG9kPo3NSsztvH9qoN6roBi1QzAjT7LJ9725fYRv",
  "key2": "4DQEwR8AmpEEPosUnFJJm729aJH5EZa2RTgrJtZZcGpiLGD2RgRWF6UjnEWqVdFQrUqiWGnen3prv9jeauK2qQtr",
  "key3": "4jaQ8VXxeGvazvUFGYweJrnujSnVC4iMEGU8bHSQpATEzZ38gwfcn8sUDmHpLi3AFFQNa898KHAca3soty68Dj7o",
  "key4": "5QiGa9pZAyowUww2hywkd3vC7GaHEEff9x6kojt3dqeffi8KWhiGwC9ex9rYA1eApbQCTthDkGpnnbttX6wEyBHP",
  "key5": "2m4aAyQFEbY5oycMJ2DqsWSMd1vo3dRPaxLq6dZfRpfh12R3d89be27Q4QkA7jdgG5D5bpnm99d7VyXDQgrYGX6Z",
  "key6": "5C1NcnuAkSmtw4ssLmrn8MLKmZp4iLybbFo55cA8F93sXAvPJwc553Ct2rR212QgjnhR66k52Dt1NwuoWPXUHLSa",
  "key7": "2ZAJkjbGoe7UJJvQrM8RRbQc7irgDVb1DsHvxhSQ8YXarP85U7WwDJj8hxcdkQYEwQjJxG15KYY3Fg4W14XpRyqU",
  "key8": "3687AHBdgXHDFgLHA8HYvcYgQdBGL1ZY5FQjEFQTyoaCfQvaFjCvnN5G8TLG3VJp9ZSWC6X1SJchskFgsf79qNdT",
  "key9": "51ja3cq2eHEw1YAMpvTHnpaGVYSN3MuZ7zu56YBFk3qxa5KKcJnQSUizoy94M3doDAqdaCZV6fMfktBupWLEsu1v",
  "key10": "9NEDQAL9Ly9Nj4YY7txh4GHdvnHhPBfLHPbHApW7R57pSwkUnzaT5MBi9dSdx1TBd8fyKmMty3VDHqMhzn2fsth",
  "key11": "2DVMwLtBwnPpnrQStTCUnf1myLgDB343X2ug4XDjDokRiVBogzmhFbBMQKdAgq1rot2n4DBrTWmJGz4h9boduYHj",
  "key12": "nhcAqxjUpBQ5waavdvaQjHZeZAj7AFZ4UmWSXDVuPn5Y9cgX6EQm5BYTPKPSc1Nkpv7e4hrCajFde8tV6MFPVhb",
  "key13": "kCUViYadhyxin8rb9pDsctDmTmZiqz5pmxb1QdLUuSxAzw6NZu2Eocez5oShVi6yvYkqFpKDJVY7AbcYSz1XqWw",
  "key14": "3yaCuMFWZYFkRcjtx5F7rFoMjdKVQj4q2iEu1Hk8ra3AwU1zSt5835uesBpdjBMwSpjMGvBiY6QNgjwW7xopxCW6",
  "key15": "4TVXN5pLuchd7ukLkv7UxF2fTSfXJrhR3L4GukwiGHLz35T7SrdS5yLyybtyiSvpLRt4xiVqXpSTeqzdamYpFbBa",
  "key16": "4B3eKK9QT51gWEQrRFRPVr6s2PStZzvoDdqo3ZeYeugqsA1gGDXEYTKZTKKyknbosKut9aoupuVGkNvXc9EMMeH3",
  "key17": "5D7A3okWwYv9CF287Pt9YmAKG28py8NPQtPA6AabHugg5aTJtaDttHTDLzkiRov2eiA5ks61neBCebfG1DG34yVL",
  "key18": "5AU7dkSkANZ1g4ELjsGxo6HhFKn6thDAS3GoRM43uJSUB1952W3N1fXNdvSsDb5CCpB9Nnnk7Hc36bhH1RBzY96b",
  "key19": "3mPYbststve6x4GwiiJsNmNr7YmNEkK6TGTyxPC1KSC7eMDFUX5WzT7bRVcJfbFbaRiZmVVzyGsq1wVsie5MZz3W",
  "key20": "57wke4zvstrPW7qLzTx8v2nmcCmkehNJViG31kPjUbeerrEc5Cs1ZKs7HxjJmWDp3oksfRFZdrJUD2up2GByx4ZY",
  "key21": "5p2AEfGoTekGJH2xpTUEisW1ZnNzXJWQoAAdqPVPTrLJLPbM1W4aAuiQcXMWJSfGkcFzgEwTWyvm9jLmRBZFMH5Z",
  "key22": "4BpkDsnxa1vJ2rmm9GY1FGifTf3C1oucNDnxH6zE6pgwkpVnBtLAPhfEZhjyLMGhqswUTByvSijQX7P2yw9SVRJU",
  "key23": "3P676poMoMBNndbV7coCrYwB3uSYinc7NwPHSJYQXE32qauacAg188Leobu7S9wTBmnHzsbYPmYjoYMRvwKgJv5a",
  "key24": "25fVtGCMhveo52QkCnMSTTbN7j78v2tmE7cwaVW2B6Uys7YVafBGsHzAwnHvMo347JXD5bz94yFN4apkJh989PHd",
  "key25": "58vNasyp44Mn8RmVcZcAJFfm2ymvBaLwGW5YzwvhCBS7YXC6nAHXQEtYwd9HYkxMQUFf1rnrvXpaVGkR1AaQC7rw",
  "key26": "4dPJ7vJV5uGLK7S5jhHjCaMZFfaTbE1cXvBo1JfBV7pQgaSG2aZFpRqbEGMBmJjKiM9GVJS3Ynf5zEngXVA3suey",
  "key27": "22WkYh5nhtjQFhBwVM8EycVAX2ZMUd1dxGNXwZwncZqeihRy4VF73rdpVxE99u1B2oDjXsV7H4iusdyZAPbioBDD",
  "key28": "3SxocfHduDkCzpSRQcuJS6ERybr7NVVdzBoRosQ5YW7nsKvhE55o7pXqwEext7miGperVamkh1FxSWTrRhp4myy4"
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
