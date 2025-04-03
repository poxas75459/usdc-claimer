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
    "51SX3E6MYe6AWhegWkEFWgpFeq8gVd8441bTS8vUSHG7XzFaSJM9E76HiL7L1MTfKba9Uq86ezbwZY2ophYnLDDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M4CUkoVPsaPysMnwVQLY2yiXxmDsQhauowtUKcH8DYfgGbLb5odDJ6tQ1kr36MaHTY7wMdF4Ns1EWhGa2hBCh9u",
  "key1": "2aynG58ba5K69saDtK81D6YcSE3bArMXPKMGTDw7EtCe6HowXsW5HtCnQTgCYBeUzTcL5bfFv7vMmMja5bDpdtM3",
  "key2": "669onc6nJB3r88zy45GevAmpgczrw8mWhp99DvSMNEHP3mCZZoQCpRdapK6i2RC9vE4frNhqx3V4pDY5Uy8iwD4F",
  "key3": "382Z6sdN9TPWcEWB9HE8sKuMAmFd9bxAM5VTy6k4dwWBfhQQeFAMTFTKGrkLrunK6yVBZtMepPzc7sWLSNCwKVKR",
  "key4": "37JAWc7yfpDhaCkiBUtTcCZ3eyNoXdM33hVjXGgz9DwvSR9DwX948oHysrwL1khnHdRm1cbbuGuvnnU1bXnKZooG",
  "key5": "EoehvZmzjDdVKS4HmpmDMPsviAaFzPPVBgVU13uMZyTXKvWTkxPPNMtZnJdFazWauVFLW2J7QFCYdiHiZHfehBa",
  "key6": "4m68y5CkNJC3XcoLRyzEig7v6nbGyHHKjWxTauGSQ1aFxQK19g9mnASvGSfVf8oh8Z6Y8q6aNP7MkKv5MJT26zAH",
  "key7": "E5csVngPJ87MbdKVG5d4gysYbXMZEXP37U5UDTvXxsTmqkJT1pRnkDdsEu7c6chNYKscLCSgrmryJsm4BCgH3mB",
  "key8": "2orWhweoCdkYXXutuEDu3TrXjMjYJ9vnyk6W9w2T1yerXrqnQyuSazvGeWtpvqnLqdNbvQ4qj9vdJgwDAev15SkQ",
  "key9": "5wKLPyw3NAYa6AfgUUnxskMuQXAoMiaWbAc6ueGzDp3BWiAH8wqo7pCGpCq8LvdrTkRdXNLnQWwp5XTPZEXminPm",
  "key10": "5bbu6tz1a3ryZriZoMo58DAiVAefsLzgV2Q1ypvZvk8uvkT2ygnBXDNR5nUBpJyrba2SxubqPjX7GmrPGqyJqzVH",
  "key11": "57XLRfsayjuaVmFdpbeKCSLCu6MXwSR5fXnyJcYeehxrb1W4JNkufx8m6Czn2wsjmPqygvgW6BZJdy2PnBLB4hsB",
  "key12": "4yQzpRhD4iNNUazTSaXLoWXK6iqPHfeV8EnYnDHMKT4U2UFqxvtZNa2LpUnAFvJwPcK7HktZDNgDBMmgwEyX7m1c",
  "key13": "5YW4W9GQ6pvCompkQHdYhZjFJHK9LjJnD7Ene72gDWVXMPn29ia3Rna2WWguvqN5TU17fQ6JwXqqSNqMpWuVHjnT",
  "key14": "26DkhT4vxDrcsWcsMJMk3yJHs6aKvf4LmPyNShnjSyTv7vrwoZxn7kJRRJRBDSbFwExs6phfTHTHNMBUsGNsftEW",
  "key15": "5KdDswGV6hinBZcLj4H4d7jnQCDESwXRrnUcf7E5XiCbxpdi4Ai1FJArtmSXCa2TEtour169d4geDZqiTkmkFNBN",
  "key16": "uzeyGrvLoKLim3wFWhaqhNm4utRPQHEZ77JAqi7VBkWPFqFcAhJFdf1PrgWJ59NCbBwpVArkyFFrSYeRTwfJ6ES",
  "key17": "5WEYfo7jRKYRW1t6ZqAQDr64AxLVdnUMZto1ry83XxRzWB4W1S3xKegcMUzpzNn9Sr4LbmWzSc2XWArK5yBKaVGL",
  "key18": "tkWdpbFXq7nFAif4ioCcF1iyLWty4A7yHr1ZeiCjqecS5jXxdnEqoKKLgNGzjuwERpRc3xqMduNgB2Rhzrvtwmk",
  "key19": "w8isdnSy7KEFFexWywVfx1Ve4YwEBn3FRzVm7FcdW3Qzt1nM1k1K3PyjNqCTzqtiKvB7MstxbfbaFs2BshWMdUk",
  "key20": "2UqNF8MhxTzy24P5iBec2dfZr8QvjwuiXjaDAkP6Hw2iM1gPiNMC1m4nhc5aZov1BrzwHPLRpsRHPajaY6vEFDH7",
  "key21": "3BSddKtkYdnPVgbU1E5oF7dqQEFLDmzvbdo5MbGAE2ndiCvc6icdrBXau5y2xagbotYqGffMEcSgQ32gTmUFLqt8",
  "key22": "VRnxTb7MLyAYBUcb89LgePeknVEkbP27H1pJuEqKbAbfdTzJasjswnvS2QE9Z59soxwvy1sTntkp1HLbVJDbXWW",
  "key23": "5iTThXKiJqBJqV4wtdmngsfesVpcvqj8QcW6RmaKZeEx8E21pKJsQt7ZrFqnTRNWuYJYnd4exYR1hd8JEEpYCSxf",
  "key24": "WzLPiVhCrYm57JhVnPmdMy9RV2JccqoULgeBCFPyWbyZtPCzDFGcLA7EsjKvecdHLdmHdWdLNotL4BxizccNM4X",
  "key25": "2U9enhpycdy8Kx1ZEGPD34hcpjsvxXcftGwhZ1e1nHMZ5G86kgzGH3D5zVXmvdUBSXZXUnESYz58nhBohgXQt3Dw",
  "key26": "9NYpPxxWgKTcQaWm59cRL5sb2jq41LCznWzgxTjBNY7Vd9cWdpaPjbEAWGZ549GmMze5Zyk52PJCVNoanAm7RFy",
  "key27": "4Nmonq514KibBojquD5AoT67LL8UsFfuREtihuuD1yVWMyxaW4BvAJoGZBDGg5G2RtmaAk64mvvdGbdc3JkHfVv1",
  "key28": "cQ43tR1pXcxFRCEpETeyQcqA8RCxzvLoKoiib9soqchMSJdaH9W1Du5V8b174PRv3vjR9SNaJEsqNa1VzYmJELL",
  "key29": "4SKSXr9jUYEBC6GmmjLJ5gKFXUcDijwZCd2D18EB9nX2GuzWYC3KqWddeL2uKfcdwT86Ls7m7Gc8gJteyXGiK9pL",
  "key30": "4qfENZwF2Qp76iE71YYQwcLCcYHm7wMnVM7thejXFqbxvfkU1DTr1QYL6GQCW4mRZPz1mEnQfkq5bavzwuRyELL6",
  "key31": "2jQ5A9Cc8N2H4oNyYAuYBzwErp4vvb3wvPwdAvMkoq8M4jwmDtVvFTwS1jCy5Hro5MqDTupkFQrDzzMA5V1rGaDR",
  "key32": "59pcxVZ3v1WV1SRhTkPtnxAY4kg7ZACCTa6jAe64BG1FUhK16trs5zuM7V7iYCNmbNqe2HPQSxo18A3rhmbnSfoo",
  "key33": "jwAr1cYRdAZoC5N3i9LKkc1w8yKWWVtNrjRNfuzQ52ehrV4K9hVbgednCBXeo5xQhHK33qiPnJa7oY4UtB7J1Uf",
  "key34": "c5oLSNkAUCS4G3eRc67oJiDuDQQGzahmFkzJyVQzeL27Lh27owsPQXyEAcbP97d8fJ749HGMPqzvJpguD5pvJHv"
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
