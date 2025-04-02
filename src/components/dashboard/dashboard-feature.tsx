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
    "2iFkxWGNwDGtyiuSh66Hh3juiYCWCMGtDCg6JwWb9Jur3yyoYWCwGK6LAqb9nDBQ2pzxwWcotS1SDjBuyHX1MJTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrBMw1bzh9D1cptPf8G4GkeFGLKw77CphXF5BJHcGbW9CPL3DHsgwhELSXbpGTMFM1H6TmHkNb9rviRCqfSGevx",
  "key1": "66HSiJgEkPLyKs2mYe6dAkkTaSUv2PmX71jDpFXRdLDJmprFiEbxbNsbqB5vtvN7uSWYR86UUZhrPnQkYY15QVnT",
  "key2": "Cpdg3QaDM4pwEaYiA6NjzSXDBSTRTgDJ4R4pKXezyPMJMFdySogfsmq5zCSwHRrMajqcZgE1guYxr6uRMNkqXz2",
  "key3": "A4n2etV2VXSULbr98XYfzkqt77PmfW8KCVg97LCnR77SkmrzEnh3QWDPkbZYqEFUHknoTn1UFVk2eZb2ei44FXV",
  "key4": "4enYq72pTCDD1KDq8Jk5RxNXZivDqw71XJNdyhNFN5awPJMdrmgsx96AddtTCcWiR2uYQjyWEdcYdorMiQvAiENi",
  "key5": "5GH6sbVUsoJZbaTPVpFgRQjqf6DuETTvDHzgWQTULv7vsdqLRkCCHxUUH9HeuAKja7EmGwb619mB1RHyGCbZTvup",
  "key6": "3ZTAxo8VzdVswx5aPN4sDjbb5yffHwAd6Qa7ZUB1goFZxzoLSetpA45JzP229Fq9S9XaUTLv1MsaBMWG93MA2j2z",
  "key7": "FjGzuqmxdMJTakMY5zjxHh8QRnUCLSVjWJpZunhvrH1txqSWCZxR1Fd6VozWbjuSH5ivFgnDYKMPW95u8BiCaTJ",
  "key8": "4jvYimhcbnvzBFzRr2PPTt3BStcTZuNWYhuh6g77ZRALLKdmNjf2HPTsDa2z2qVMjMDnY5c9w3STQ5kjGbHmbH92",
  "key9": "5EyQ6XXgCRM8Yi6utFrLhtafc1sTJeenj4i4MyV14M2WyM9785tby1paDpVnLpmEbsmWB72FqHAg1Gyu45CY1xfE",
  "key10": "4tXDbpUnBoJXPGxVC4t6zWyZsNKv1P7Xx9ECPteibydvBmAjbez4GN8M9pxyGXvW7yMDGS5pbRKXCEJhNEw4mazM",
  "key11": "2ya4o1CZTE6TjRVCgafvktKim6AAH17KZ94PCmnNse7kyuLwBzEHL5FgnjSEAf1Sx48AxsWeTiupEVTCF6N4jZN9",
  "key12": "weqCqGDyGz84f5LgT1ufDZwqayAN7AGFJYb1DyRELFELuhke7CqN8fpPkgD94hd7MnUxHpKh8osFFkuBK42iyKi",
  "key13": "4HZkKppn4SgtFfEUy7U8PttgHMz3e5LbCJaTJvB3NAjMi5pts2ZPDbQtscC1L3JvBiUvym5m55LXWy7bMEjD3p3F",
  "key14": "55gRk63ZEudEEcxCbGzAmvkAoP2XB7hxGEFD1tJrFd6GhWqiHqNLzsxkxutZTmeAep9wW4VJBSwqA9gpWAZkZaaz",
  "key15": "42PUzyn9s72R6D3c8WZsVQXh7akQUdyDuFK2UePFNGgrqpr8U6TazCb8VyyShPKUzVHx9jwq7dUGdeHyash341wR",
  "key16": "5DGJT45QxZZMfaej5sUf4F7wzKWiwZZMWSXaCHV712dKhxaVGMGVGLFYTVmLCenUAJwCDAGfqseNJAMCTVURqfNC",
  "key17": "5Z1a3MbLYsKbShzazHKjwUFxFXborRkysyPyP9QF51qjhurGGjdasjwkSMNuxBstpHftyua9KCDTXGZqrDMPtLgz",
  "key18": "LX5Bz9CYoYZuCG18LhuVoVX8XmKrkW85avfcBsQHsHV6erKXKZQy8YTvZcJ73VbCAbxfAc5bEo7RhhTz3DX7bQU",
  "key19": "tqjyFGYZny3c5zoGwHCTQSrm2rn5PraQQatHGfDj5VR4YopzX8xqnpPLSRGFheNnghvTXYCVKuQm7YnMM7jwhvk",
  "key20": "nbb2YasrhiY6mYdjCA3Y4pTEo58wdDyu7rrnwQ4TaLiCSvRywvp2Roxgy6tDNVNHWd34PoTMdaWNnpfVrECuB8L",
  "key21": "4QKgy8QXtMFtJCYxig6CoVHYGqHsA7ioT4HYmg3WTDbiVN6V2NWkHQnCEXhJ4SdkaDnJ4261W8vuZkk8hSx2GpDZ",
  "key22": "261fMhPbqt4iW6jmJqCf3qcJMgypT2XNBY1CDaw2KFPEjdJgYj2BhUroCfZMAEPSveGhXc5zgzcgoHQFDCgfYTSa",
  "key23": "5LA2j4GoYixynjKYpnpHgJaoCxpwrAzqmajaqNYx9WMYBpBmPRLAMkqnZRvvEpdLFXYSXLkL4ebVBSpMSAXXhJn1",
  "key24": "4hEtJJy3JBgpSvhDfyzKCHdNE93tvFDZqaXfviEEWe6pYQTt3EMem1Rgq2UcupypQw6i1Qq6vWJVR6DXCrWcpG6",
  "key25": "3bA9HQE5cLVVT4kxq1k4pLUZUHXZu9V3MouJEK7hu6ptoN7hRHr1i1oiBAHGh7xXXZiEjRXL1t7o32NqmDmLpG9S",
  "key26": "2GwdhGWjagi8m9JroWWxEvMxYJjiff6vrtUSDNNrbKxhhRrJ8UXpCCUkE9Minshon2F6dHJen2XjGhSBqLAMr5J5",
  "key27": "oJHPYhgnXu6Y32MjdDTNTQZmAMx5stDHCMuuvK51nY6KvetntVWhjoQUzNq7h7KHjoPhekMNejLJ9E1DDYrC9oh",
  "key28": "4MLrLLYSxSmNqhQtC8aT2VJjSXMheuJdmNjft67KYzjuDtJXoQCsgWiSfWUnEeCKN6Zw8uLgDrE4GiPiihC4QPRi",
  "key29": "3ipqkuzN7FGhjMTYX9VAUguie3CXi8Lzrq6hU75ycr1ihjxPpUhHVyZr6bdi37QaupsuJjMbP62C887mbKtgiN7V",
  "key30": "5KUG2tsPzfCZVaJypcdY1f1rAX1X5udh9Xb7MsForaVuc8Ug98oQ9rh4fCD6bux4qT6UwTrUP2C4FW7zLj9qCw1G",
  "key31": "582CkQC7FiSwFHMcKoXarqNvnDanDUanMBNMAVHGywcge1Hhe9Uhr6SXzQTzjX92h8Y5RHm2yu7LGBBroPP9FzcM",
  "key32": "4Lti2JZrC3KPoexoXfJiZNeK2ZkUxjT4sSaUeCwsjZrCoNtUG7ijWJerVig9L5CXWn9NSAvvW6uwargqNfzi6PSh",
  "key33": "AEP1e7LBfXgPScKYvVNcSobNCniWdyb3TJ8V6LUKhzg6Pux5mNTvzzha3ABCctVA6xoQo9jgVwC7x4XfSHoEXev",
  "key34": "dsBC7eftcPKKeByHr6ymKmRG4oNs5HS7okaey7Cdpt2TAFyEuSPNdmaXWWVkf8mw8QQNfQepnVyhoeN5uH2i1Qh",
  "key35": "5ZeGL4fteLjBHfUsVHtpwbfKVyvf9oQDVqVK9LPyFbSrWMfzKTxEpjnmLfBHaVR28vemH6JRHBNaVYz69Rj56JLR",
  "key36": "gz2vLUG8KSWoyCpZ4wiypXqy2koCEvPpH2SDvRwpwiaEmhwEYt7qUa4eYEodcXEowuxzEjKFew2e63SpBp4sePK"
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
