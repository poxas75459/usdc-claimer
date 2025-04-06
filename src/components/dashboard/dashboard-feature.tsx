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
    "43d2VKLFPkQ6yT2dQoxY6ERWqaxBsfakCC2F1zJBrwXuBxrVVMqq9VD5RAkYNJx9Ktqz82rHzjuqwR6JX9J4mtTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zFoyrzGA1mUHFys8ycpgDsfu8hHREm6xuFnGRTCqjEXoLRNUVTeUrpHtVhctK1XsPqKQJ5TB6rqbpqYteoANirB",
  "key1": "qCRRVF8BFY73DuEXsSy9QpYsxqWk3e5LhyWq7pDgniuaz3F7vAQ72otD2c5w5d6n74JE8x6rVnWNMnhQYGt4LFq",
  "key2": "5V5S2aaAWiCvVk35LAZz63CT5vavDFQL3R2RUiWH7Pj7b1xruS8w3wiSzNUWCwRNjQEjhWD4yfxUxZEcRRA94Nkw",
  "key3": "MWdU5ADuHMgy294L4DeRd3JCo3EQQnQU5dwsWmGWcjcV5FcG53y8SHZZabFxYBMvRdMb4LQVsdKir1zYYx7r2hK",
  "key4": "2Jf54aYBpUNFo5R6o7E9n1U8Erare6n8gzrKF4evmwfvn4jm1Lr8ayZcV3hen9zeaXd3gCN1LM8QUq4zHQDQDLjw",
  "key5": "4twBVq7PSV47BHdMnsRUTwtuxzo6tUo349TWTVvt2NxafKHh5fmbDHKbbZ64JuacdtKjEteHU4pURXSaLbaKmSKk",
  "key6": "5EF4abVPWjXd5BQJpNAasegkSFqi7MsMtaMDyZtTr7uP8gmxFQasgS5dZsa7ruh1wvZomrHPGNLG7Dmtr1DxruF2",
  "key7": "5CbeMDuUBvfi2767zRecd1CvK17fhKGGW9hUCK1q4ofnQYohYCPmWcEh79WvKDwM64WkXjz4Zihpg62XqTeiRNBm",
  "key8": "b4B98jpfx8Fc2EkxktnfVRQSGhP7SNqhwbzPQDQHyNwbyLnq9GwKBL4htcVq8Y4EZA4q9GA8TcyDcMsRRdY1436",
  "key9": "47HZkhkqFoCRWqHE4DQ4qauipN2p3Xe7asjaEFkv3n2hLBsxHjFpTC8hM7bHZxZHwsskMQqoksYgRxnC5giYF5on",
  "key10": "4VDdtxHmGPvEMgawQ79rXVxfia34toxV6UHcvTDXvKFKYZEmmFAL2wzoo53gL7cJ7eUDGeHW7o9PAPtYKWA4voy9",
  "key11": "2yA5hZGjXhFKsDNbkSsns647vRGAkQipiaqjCcwf1faXaz3dpXgf8p1vcdDZ2As6tvCaATLGTFtFm4PN26k2izvj",
  "key12": "2RyCKf37vrixTUD9ZX7rseo3ibaJFAfzV7LDvAhU2stdmBqcH7XwApJyRuuVXooUJ43NVNJZW1Fi8meWSupfRT3w",
  "key13": "36pxp9TsDT18ypLcJugGsbCbwz8dFUgPdYbqVEYg2AP7jGCVKBwtmfmrxsnuJbXWD6V9g9SP89xm2UzE93vafrHd",
  "key14": "hBPi4g4bYfTKKSTkkP6hHNwtx4pQRZ3NvCH2XJgrBzC6cHySFY5uSrYst3Nprt8FQPLwVDqPk92or75tzavMap4",
  "key15": "32baFXcAdd49yBsdiZLusu7sBGrb8SS1Cfs7u5NhvcEXNzVxP4VBBhK1t4qcWi3TJtbukRNbGpXBYNMBAags9xqF",
  "key16": "34uqWFVrcFGox3xxVkzXLFBcVtyFDgQnZEtt35ApZjFUCRHGmqpfgXGd8Gj2TRaJFR2Df74SJiKgnVburTo2pTMN",
  "key17": "3Zfy3sa2NiRYLscwwCKTLdRXCJxPNwtdL67mX5g2ABpyTTtUNV1versHXQfQo3nEETZbkcsTSFrhinMx8AwQW1FC",
  "key18": "54PCz4Uf3Hq2FBiPcypEmZWvfoBwnQeqUcMfUXgzXCsxCDMbx3ingi81Q5oPmfStoKM5jjq8aHFWqXBMoU4jpo1C",
  "key19": "5k5WSMrvuQyCBhNQiWayAVyDhrn92oNwqMUt4cvP2PXpfGLWbRyrQ3xxF1HU7g2HWfCJE6nNUSudzkFR1Hvzzui2",
  "key20": "2EJXnZJm99LvoURajZ8ZBpd3a1Nh7ZamkMHJb5WJ8Cqz2fEU5CGgvKjxLRSBMBoTuKhBDEou4NExJe5hC1XLW1Q5",
  "key21": "2uzU7UBpGjrvbwRFA2iUJjZz4bKWJJkDNVyWmfcJXspCX94tXqADEcpxKspLmSY3QfiQNdz9PoJZMb5EhYLBQHUf",
  "key22": "5evCNVV9Ki4syPN29J1gZSwCCV3rca6nCFkfK848YQRVSrvaTEMcPSr6tno7aEUFFVVSZ2m6r5a5LMMdtjMkszBu",
  "key23": "3A8gCCmqVPQJjxki2PzeHxet2iQfQ4vcvp9dxYwJTmCRFK7HLYrqKATtLyDrUAu9eX4f1WJ5kgmcVtsTeC9r16wW",
  "key24": "2j62nz9EMfFfaDUREH34Ho92d67EUoqwnUZuAEQqkbzadoYF8ofeWXesQoCDrzrW9FoVGeW9thstRb11M73JMuXb",
  "key25": "5RbTPuf986xr342MnWkGmMXfaqJyRR3KkWbzskkdDHjBtzRqmaVE3v2QyWBkvCkpM2kEoHjARC1R2KSRs4i51opi",
  "key26": "2BY7iBbWBXtT9rw8MZ5wYYEXVSupYnbWFsYjZKkhyj5TA7BEekZcZuR2G4qxEv69NMN6QBwbb7JQPDy2d5KundT5",
  "key27": "5EeZjEanxMXqoJodidXyByNfQbxywYqwwhN4oFcWsEd2iwhrGjpTpGj4ySPWSAM7Se2zFDHFKDVYXmuoWfENCYi4",
  "key28": "4htqu6zdn4Ebv68xCCcHmBpvBnxGCrKc8Qha9EDCAzUfrLhhpnGivr4YzxduSD5nU1MF7jLtcF4p23th4gkmCSCu",
  "key29": "3HvVQ3cERheyFriNA79UkGJ69KxPJwz3uzLxsieru4Ui6henzq6VmqqcZLrLFetCwHdaHkjUyFMQ2xhJiZhXHrts",
  "key30": "3pgYzXkPWCT3kjGhXUuXLgjxWWNDgkDzua2eZSEuGG2EMvPk2dPhMLHFf7vbaWyntA8qqkSe3cSS9hBMqY714vFf",
  "key31": "dpRRfC8QrTs2BomkaomV5KzuQTnKvxvRr7E1LAiq13a5omkm8rf3pxDffhFvqD9mzy7NgR8iw92WhHttnUBcXgP",
  "key32": "62d2j9zMvJMe4aWVC5E6PMGu3TT3SoE4RqF54GSupcQZQsge7ndNxBbbRj9KDFgtxzGXS6XcVBGz2rt1kHA7Kzi5"
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
