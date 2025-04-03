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
    "3ADaAtUBTGYeXiGMmbQMiPoqMVh3zR6BkrwWzERr5DJZ3mKnXGAmeL9cSgm31khRrVQdHfXrzhsSWtPEFzZsYB1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A7pUiqXPEaTDiLkWmqhMCps3cJdNT5MdQZxNEfL3sKSGoKjbWCydrLQ6xH9CR7kVuESARHRgPxwr9D8tKgAUy5b",
  "key1": "vQk7XBA3Pym2qAxaLqzGzV5S7NfsnEoCRzB637iCXuvEiWp5ZKtBXNE2shjgu17aFuGYkVdJAhsJLBjxjxSVhyM",
  "key2": "9Qu3jd6JkX3zT6vone9dbRga1MtdkDJfma9hVaXGsQYwTTxs4oQGeYqmQCysJVJwDZ3n2geXTGNAU2yvZNq1ddY",
  "key3": "64SLfi9txmGYz2ULr7qS9aaze54KNxnv8KupjRyHXA1sdSj6aMXGfmu1v27HcNMB4wim5FYMYcZPs7b2uRdeUySF",
  "key4": "4N5URL6FheMDNL3qpVmTqPJ4Vo4o7KMzCwshEyMdMPNmv3yK8asGgiQB64rPr5tqgL5Ass5bDZiEnK4WdpUq1a6B",
  "key5": "4pTADXMTfqAutcQaJ1MSBQmBrGB8YU1ZfkGonqeWm2YqJ4j1oXyqQwozJunmjzd29HhQqwp1N267jXu6YfTtwmWY",
  "key6": "26HkPsjKBD9ekVddzc3CFwULxewVpmyyQ2HgLFpWhvvxdGmgw1GYNf9E4oiHnfbe4BvdepzuRXvMDo2DygWsSUeQ",
  "key7": "3PpVTGZrWghcdx9t32YDFQ531hSJHt6dKV99YaJ3oUq1GNz7BM7Y2sxqzWYdS73R4D9t3j8FNs57eYLKqkGrTN21",
  "key8": "4xdhVzCRftaQ3VLqhXhWsDePgTsXhbegGcRkht5prSn6J2dvK47eJAoQk1cZxVPEq59nQzF63EJypSDG9npUzH2c",
  "key9": "45kNYXS3ueHUSKSH828Nu2dALcN5HN2M2GBJgXxmQNnNJVz9wxwXEmDJvgqF2f3ZGU6bzwdujDatFe3r7cv4ij4W",
  "key10": "3iQfzA7Rj4RcDwcF8u3aEEmEPf8xfm4LboVpbCJD9sQDLqL4KR8FDWTbPt1mw9PYiZe7ymyCjRjje69GCi2WQEx1",
  "key11": "iaa8b6kfUDFzi1FkPhddYg58uX9o8ACFypqt62nyaMxhiNTA8ymVfQGdnhwSh8T9CepRzcQa2Nb4NPLgbh3JxF5",
  "key12": "4VG1R1YAF3koczGx9y2LZcTB8U5cXRt3FszNcQFWbSGxwd4bkpJaVMFm7XHL6GSrmnvZh3hYHAKsy9zP1kXcJZSa",
  "key13": "3RChJ8rvkxiQMHWMehYPYepQebnHzVLYdtrjd9jymJJVZJc9Zv6jE2EPjcEjk5WZBUR9uxEUZNm7renoevUxeMoi",
  "key14": "2RfwwD6ZcvTNyuJJ6pBPvxGaVTx1pSCSkkqwEsPzHyCxHyvKudyoGQMXWZZhYiuw3zfsSzHjzekd3stxdVxjozYP",
  "key15": "DVRzv8e1A4u8TPoL8qrUtWcbzYjX9xqVP4ABMu38URDC3pBQjkXHWPA4J7oUwLpLttJVmkLmZGGcumCjNey6C6r",
  "key16": "2S53G4p8Xu1zvGVzpbiN3AUkspMHq27AC1RmMXVW4hS2uehkK8fY8Neku7U5AEQu8ff6utMqNsPYr3ukeXsRrzbk",
  "key17": "67nNesiNpMkvFqEhW9wbz5tErQN9gsFBUzZFExzKa5bX8zh93uBpX5Ngv4wgsXYMtQ617zeMdTjo8LJKFK5wWbAG",
  "key18": "3q8wa8ox2sSwk5sZMwfQdixPwDdPYTjoKPzByHAjAWMJNCmQjK8SeTrriK1MJdfS7cnmgdcCHHdaudHMpYvikieY",
  "key19": "V7UTMYhC9287FNH8z6TpVTFNEh8i8Gy4tecFkWcCDfE2BFcfKDcFkM29TdUqC6wjUDdZycXC3E6ZiazFnmw28Ln",
  "key20": "44boqbWwcyE5VmEs6QNz119d3DuFc9JbED568bgRN7L2YGTvqxiCX9ms6DHQjXjxnpnkUuTXgn6iy4qEVvwxwS79",
  "key21": "pmcE76vzU5GMTiiHVkEv4UtP2A4K5BYyJj38ejwqRj4jXmeBsaLWXpj45BzV16v6BARopquYNmFMmbMeFJF5EgT",
  "key22": "4q5qGhsbpZbkv8Rm7iMvvfH8TE8H1XTkDjoQpsXchhMCvXjsYZKrrS1r46oVpmA5h9jq2cYQLs173s7hrGQqBtRf",
  "key23": "4EkmW6Pf3RsbbXJZjTde7eHZJN155kmHuduKg4rHGvqWt69Hozxiy5QA9wkXXivXDnmf72pG9m7s7YTjFMWgjKa7",
  "key24": "2c4iGERBMtCYr2XXcrMwHMFV3QuPSExMSuzfVp5BZEWko7otEMSTahZkHywDyN7gFckWzgux9ARaSExPQDAVLib5",
  "key25": "53PSZUvg69xm3S6hMiWh1R9gbGPpaZKHJzXrCBExzSrNsU4aYpKWqwsFhLyj8QB4JShAkgPctVRuqwrMbN3DWZTF",
  "key26": "4nkU6o8AD9EGoqFBubGvK4X9Et5A4YoyVSKwZnScjZ8AcTbXFkYNqLaJKhw4arPwWFizjc1oTSaBT2HgVxoEQ5rX",
  "key27": "4vovsXREuxoFzNoqBS18FdJjeZ9F4UnAzZMfSYWjdCQSj5pL2HWXEi4JUyS55dznaGcF4UZDgsHHXzSPv89Viq3v",
  "key28": "4qD8MX7d5TdQHThs5AAztt8kH38KGWHH3Sv6VY9YVucqacqoAGYwkiZecfAiAdegRKFsN29VSZtnUK6psfvbQzec",
  "key29": "2asjr6CLt7bfFjxBx7trZ6mjdCRAKaoQZieKbrnto4YnpDdoywn7sSSserTmpUKbakfx2umVCiTm4r4P1cPdKxg1",
  "key30": "2K7epx8AqiynPuQ4BTioMRsbJVg9rjxfiucuAdDB7GPAYLbHkesRm69Y5Hf7gKpZYf8NcFXprR2NgdpwYSey5uAJ",
  "key31": "4XRWHAHxRTRNBJjRVfXshREt7UNR1NP5X51Z7dbXtavXFDtr1XBsxd2ngYXNa49HM3c2NRhFDAcNzHFdXgcZYoBH",
  "key32": "41m9c3C78Ua4uxvNKavfiAny8ZgSF3VSAJQ6Mm66g8iVX5SZvqDVNrFJ3yLJ6ucJiheLa3N5tisxJcfdVVg8ViCJ",
  "key33": "4LKoSU1VHRJc2XvyQeUzsu5ysDMBVDkhVpSqHyvDW9Wv5EeZieCWxCM6hz5cUyWGjT2pTMzJTiSQbVcxVu9ovft3",
  "key34": "5pW3DbJSMx2nwGcwxyyohEsqfargPSzAZodSVE74tD7jbDLgtWBt5jRNyGQo3DvBnJhidfQaSocTC42ehLSNCk5x",
  "key35": "5yaPyPeCtxxpEwYnPNokM1D1wNNx6yezBXVM3wrTgj9xTzSCFdvpBibc8n9TzTdEUHeNEir3CFqpSJSP9n89n2fQ",
  "key36": "4hZ1eg3UAka6RTBJX3XZh9EuZaYksmuzJS9DSopu7D1SwHuHH6E2T8qe3zR73PeqpHZaPXHrVsvkyQNPMEJEamkd",
  "key37": "jT2r6hLohTp2jaDMWGL1pgrafiP64CAGRH1CGJuoHooVgzhnviEhwer7sqWVLbr6tt4DbSawXqPunxLzmdHq22S",
  "key38": "65tQ5fCpVvNkurtQznWrrva1QdSgVox8hXwWgX6TpfzE3ReHPzJLCrLYB4WnKyyxNvJAQUWBSGVUjDWaHP9C8f1e",
  "key39": "3ptyQtkTWfdUoYEPDX9XjKSD4o976CEeykoqgafTUxu7mUiWngCEAJRfqRnkEeTmpycE1k5HUsjTy1es1F85Vx3F",
  "key40": "8c52DHba4rD5u24FXzp4E4G2Jy8E1gSrqSLFFkxSt93hmu34sVjMLT2sTi1CbuTEWyJLZvu4jWJwhEMnikvTnWa",
  "key41": "3ncffgUamfb53YJ2nYn2GV1kM4rsJpAhkEpGERsHFj89Gsjdxm6tFTxCHS5oFAMEaasePiwbyTFL977q18PZ69xJ",
  "key42": "35Csom1Sf5Bh8v9syLndNqfXiWodRtQWYRiUH1tJ2YbZQdrgJQ9AzBWYG1a79MPpxQebS2pZRA6ajCw7VzYtaxyK",
  "key43": "2mDHH2WCrW91zCwSYHLd9t2QSgPpcfV6RnVwJVpKbYgM4evHD4c5R7LS4PfkX8udpVKm66oz9y8nEeQTiVVj4Wb3"
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
