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
    "4af1iP4iEep7G55YWZaEmefP4ESemPpPGWW9C5SjsztVy7QApioAWNztYTpH6htUUQgygqGpnFLxP4xrfeH1VhXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gq7qphJcKNMbyFC7ehKqwzLPHphVRYM9UTnLrQytdK6YTCTESMQA9H8DDBhq6VtUz29yWCkJJdc1dF2Qt3fj3Ea",
  "key1": "2opApW7wJuSKdRJ8AZFnnTpZzwnkjQPQSHP38HCT4dGXwFxBLAHGMzGtwXfDJTWWFXMBhbkh3nmBQmzKBruvnEDf",
  "key2": "5ghDNpjQsGU9VU9ht6vDvEnQ5vTry9jtRnBCkUWPrfmyT3W9JXETkK6gzTJVu7QTcbtbY4tmCva5BuCpwfSpfCfb",
  "key3": "FeqFp7F4rue7ujJSBf2zPqFMyUrbgxcGy4pp6qWZeDmFsN4t4S3FP8xmfkixbs78Cr2AADfpxp9ioXMLCcx4dnw",
  "key4": "4dMZbuq27ThXBo3xXzsgZ7qs1dCkSAvMne2cU6YSRYTzdWwYzNgGT4ZfHmXMg45A8NqhSnYJXVHhbMmAr4Ejobc6",
  "key5": "2hFZsFKotgCCoxotzhhphMx5rZ9evYKVDoeLe5Bd8QgDWpRFhoiHZrST9PbLLgXTJnJcWKZB5g793vGRpv3MHoFo",
  "key6": "3DpdnjkuhP8CBb45BZR3jcTPwV81PyKTqfyhRBAo6icoWWFwykYHRfnfsTueEEAG5D7UrdqCt1YSr5xyfzmTgpMK",
  "key7": "4MftJsEsCBeEfxVrHmvqGDe2gAtzpXeWLXR6RnDb1gY2JFjrMcJUnnAa7sfcWK5vspxdy9C8vrJnEvSaXQBbx523",
  "key8": "61dhRinMGxRFg3dPae9jtTwxNXxG89WCpCkay3Kq8FceDCYiuJDZWpKxrGsAfGp2wZgw1ovcFR8Md68bt5uw159Q",
  "key9": "3vPBaCpJs4qbSAzxw78Pq9jF8iGBg6FiddVuYSpSRSNLHck8R9kWKQ9GhrDZoYNJxwbLhWvcZjfeWhF5ZwrUxjrE",
  "key10": "56wLLDV6oUvU3nEXEdz1x9MYCuokEy94SKjpKnxu4rHQGShpUARwDn218N7E5bhVdvHGuFwmbdVu81DxL6yus9M",
  "key11": "5gqxE3Fu8oc5xMcrrFYi1v93Asp4HD3pdBCmXmfHmQiEEKF3xSFYo3ZzF3AUhKeaKFuj2Tv8B3HniVUSP5hvxjqi",
  "key12": "4G99Y4cXf8Lbc55LLtikh6qWUDaJ8ABnRVV5z68mEPEzGmzxB9m9QRgzU7CeqT45dhMEUR4ze3otCCsXPezkie5h",
  "key13": "zksGF4bSsRDg4c36PUT67konGrPrXUsasMWQmZcvbfnc9jQNtBna7hjNrVy14g6PokHcmgxJHgSrtX7J5jniGmX",
  "key14": "64jsHH9wBKRfiyGnLGS2V4njbitCPf32GB776JGxv2zQXwvcs6KG3FdMuSp4W49JBeAA9yr2CGHdCn3RHJzbK22f",
  "key15": "4LR3fg61VtgD37FmqRDNT1XrN9bfTgrGL119Bg5nxKk6sYJ5MbbFmKxo4rxL8LyprPcRVFJeuLiBDcm11j81oUoe",
  "key16": "4LJ4tKGmZxZfKB844KNFa1FKVSwJuFEwMSF6LfYeS36ZbPuysgqqPsPDJwsuNBjbrHdQoG4YEs6yhRS7ZVKesECW",
  "key17": "4Zy1p2ZeMFHrAuuFMPvsDRTxMPEZsxgPDgJMeSArfnoUiUynXYynHXU2shoxmkAjFRGbqy7dDGhXv8vy7h2tq6pD",
  "key18": "T7kQHj6wP3ZfDJDPmcHS9VghQ6rG5QiFDcFkwuoDZMvo2wnAJx3aEHGD951D9Sp7VTCWCcYPtzbDyezfVBQUB3J",
  "key19": "4gnWqFCoKWLH2GQ37zbnabXMG9TAA1YBFkSfT4eQn98oBdvVLb4HHB27kZYa3AJqYshzWwf8P1wrTFUFrbzE3Chy",
  "key20": "8r8eWibVdkJv9q5k7hvUEoyPUuopvJ2geoHHvV1R4RSqCSioBowcWkNU2c3i1h2H4UkxkPhTeAv8YN2h3yFAnYq",
  "key21": "koEY23CwCm7hjhjrYfQaLyX6UN2FuaiX1NdEPD5bwsTexyyKymuRsX7WpkjGMNxse6QnUB9jfh36BxCcjgNEiGV",
  "key22": "5sj4kEtC9dpMkwHbcemeN6QxxjBPThUyoAer1bueHz2YqF4wPZ3uhNLBiM5MJeQC91KvE5qaQnhi4sckbSuCDoH",
  "key23": "5oPy57FhuWS6hCrpiQa2JHhdFcB9TXvbCfR35pZsDxkqGGk1zLdKo5nmtKFUJx9onwjtf8sGbUp2kpc2owrs5eLa",
  "key24": "66LNsS1vXmA4Qqkw5CM1TRnnFoFbjsZH4CU6JvBAhAmmJKy6GBZF6MMcZp6DahCzWC2Srwx7atADWZjLHEZ2sLfr",
  "key25": "o1ZVC317vj59WEv4iUs7ES7LWS3GcWisom445UaxqXauJfxyguM8X54xr2XonKjeLhvRYFYUCbJddz32qZhovyt",
  "key26": "5c3KbJCVNNcTyZp3FuRyVdAvYadhXkXn2Kk6FJncoJDnPh8iEgoRtCqBT1YRrxN3ecxxBS8KjnVUwsA46yx83g9Y",
  "key27": "5yFDhMkMxF5zftdAUdjWMMGtHddfsRrpAhhoYh7hhxqvAsUubCCA67uJTa4Pt6YsWB9gseUxdyoAmsWcpkCccCmZ",
  "key28": "2R3bfdtXcsibPhyoCPNxQdxPQVMofAEKoCJW5uhgjprWoFHBNuCK2FJo2FERST2NdBwRXuqx4bGJk3FiCSKXZBB7",
  "key29": "4vV64jevyGpYVdKoHPh5kzEZPYFWURRxZUscURjE5T1nnecq7ELaYvJfuqoPocxNuhYgEWG8wVQbZ9CK4NZxK1sx",
  "key30": "2bZ924FmPYjeSVH5TUNsU2uxDCXTduiT25kgZMdyaqaE9wFzKCRxAX6ZJMfsX2MzJmH4U8txZV5CeXxuCaNEMnb3",
  "key31": "24vsurCVeBZGBtXeUoh526eQzSkz8dn4T8EFdWLJjF8LzmTF8PNUYmjccVcoJ3iyV9Us4keN85xZ3aU31SBqEwhJ",
  "key32": "fteJYSVpvK2HkoPKSQqRn9T3D18R3ArZW77R8pRvJFUjVijhPDi52DgZdEbA9ecGALpYiToEQMKkYm6n6exn5v3",
  "key33": "4bDs5keFUimosmoxuJPc6sEqFwSPvPBgpz1ZMhyAzKLifVKZtTqo6bKPShqxSie8PKjJwQCfJkXy9CvFP56zYn9F",
  "key34": "5RMhxn7azqWyzj4XpSDRZJubpX6Wa32CurEjgkJeuR8duXdEQnv4sEhEgfHeDS5hYQr3xpQdnbUAQRfPrpsYs6E",
  "key35": "32ymSZStyjJAyGjCkXPfQxBu4FM5zj3sx1jUAjjVYyV6UN7jKTzZ2DuwUoCcerqcJktVb2pSPaea6dWVF7bcs2Xu",
  "key36": "2dfTKe6EfoADiXjifgTGVRaNtMJ8Kpsu1zhphbtjBKCFs4Ect1QNshykHtEUrkHedqCvSSqAdvB1ckC5tc2cUuML",
  "key37": "4xJBGLk5LLaw4Xvg3bjywY4QcmzNJCh2Dm2igjoB3SR3WQYTwDaMAK9T3utFkMtAaESqf1bRdd2bg5AyjUi7M1UR",
  "key38": "3bkmXf5cESjkKM4FdGW75PPAhM8SX5UZ9iCpg1mHW4PvRTviAjyT4ufY3c4UiJgDEdqMxDhq1QmLzF2UoT1VUtnW"
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
