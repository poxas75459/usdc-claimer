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
    "5atVC59EsVx8QJhCT5UaXPUjcrq3zm5r57zsAq3EYvieRHLpiN13WDALAdJsUHZUheusFMCCKUPxQmLABmYGZmzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBbHGQnmbfUEqEbAyYZ6bJnnHgKCZjBemNn9GynxVf3fx7CG2zV7gpfG4WetDVjPzGnJXnGkybXTJnR5LrwdBja",
  "key1": "2La3txWLCPDaH5XCypAe3Kw161kaXvNaoXdkqsLh8pgvryhD29C9Eyx7BUomXwAMrTGKCCR1qRgLnWLasEXvSJ5D",
  "key2": "4xJgYzFjR577nc6vG7djXjHQACk6jyP8ZaYAhUX1FRHubbzbhRxSrHXLkGZuaFob39mvLZbQpi5ev9EjYZXGxF6W",
  "key3": "5qwFMFdnSUmmp2n7b5qMUUEbH16BHJyKCUEDAiuBK6rDmXKmvv7kTvdv2ua7EfQfn1PLrpXm4W3kV3FBk228XKne",
  "key4": "orywwqcguBHNXvQcgHuFTpxE2q6mT6MbjFQSJCtXjwypcaAa647B5bMmDiA3xY1WvaHXByJMt6QRVHqfoKWkvgF",
  "key5": "2afCxFDxDCkp5rSA2D7Con1nGpgqqh3Btp6shHd3CeQdMVGdUzp5bfCJoVSLaLWFARd79ZGR1M8myZZqmXxuL2Jw",
  "key6": "MnTSu22HAuQ4eacmA1ABXhN198AyNHUeedwo4t1Q4n5X4qajPUyj6SKfHRGEMCMmjx4wW93DmL877YarKuffzUH",
  "key7": "33vmC6AXxqRtzWjKae6A8X9pdEFBniRGZ2LKC5x9EEFMtjrtze3KsnozFS4HTHXyjc2WVjg18iVzByspxmkoXYxH",
  "key8": "ANCUgkjH9wetKneZhLmALV8qJjdrMXW1VAr4CBYrvAYFw7Lb8KYU4xqoQgkRgzrFFjRSovSTxo8B3nma1G2Jg2F",
  "key9": "4JvFtcYgZfMo6v2tQKo9FBRLGvq2ynGMXmTRto6yW1FzJ9q1v9bTVRzzPE7kT5CG9x2vhLM1UE4uCgMiApJqZwxJ",
  "key10": "94vaa1e8FteREWC1pcNXZBsAQRxgJBhb7TUP24nWN7JGrTgiBRHmCveVhRDsCLixPTjvorqEVeBAaacv6bSdayo",
  "key11": "4heDiKoLWpxVe4BP3EVDqM3q484Mn21CFtUD2ER9jAoE6Ej2rdziPbQTKs3YYtfHMu4GnBgvDq9Zx2BMJjKSCjfb",
  "key12": "5TqZm3UoNRq6jhK3CwUzoxcrn26oV2eCTkSaeiczVF7k2adbi8LjDgKPBtvqWQzD2P1uxxR3gXfUepLg9CjjPxSc",
  "key13": "5wJ9vtoso8oxhnikotzPgzLceCqjTgcKFNFdG71nGnxRmkGPBqK7cj9ngzMCPL7QeLdCb3VSCAkgvegoizANAt6i",
  "key14": "2Sy6e8wwaCbbbA1xiNAtP88g8de8sNTsjfffuPnkfC92HhJCtC5xSVNrNWdVsFZhFsrpcXXFVMSsH63QfHJ28Ccc",
  "key15": "3PJVtk1pNxecQZmQDKcbvU8stNEBCawAVFL2b4yZy1mbhK7DKLv6Hb2jHm9gDUX1uw4jmcyxqmdH3UnbNVRvy4ai",
  "key16": "3oGnTjYeY9MaQbZcNitFT48NYLvV21SRYVBb6CGARRwWhyPVx7pEfjVFUJPyY6teQ2F54kYo4CP2jvcHaGzokA8F",
  "key17": "31Pjryif4WSjZSAS7ncEkqTVMN15iEZsuUso94U5BtEn3ht8kiTuu29bdqZkoo41jRUnJzq3dnHeME6pgmYrT1Gg",
  "key18": "2G4Nh1kS4zr6L1hKtFzzrJ2LHDhJQdYywJgpma1RQGDQK3mgEPRsXSWmi7funbCM65B2YtVqPrLBiDhfwNRWGdDu",
  "key19": "64f6M8roNVTcLSyhwLNmR8JrwHMKVHHafimpRDPjHf3vopSu2vxysdUiToMPW2P3mD5SPTSspNpz8aYgds3M62Ua",
  "key20": "niphpgLgYKMMfXmd7fMRc2Ekut4UjxcqRGmvwwUHAyNiFE5CgqKAehtmPtQmM4XkL5EGnbHprgQyfMcxYumcgdt",
  "key21": "36jPDHS9LJCdzrq289KpdTW1SephAgZWRsdCtZu1SKbo9GiVFrz5Q3KwqKdx2aaErHBBkzH39LmqqD189fbJtqDY",
  "key22": "qqJLCMkQh8HsPq2TgGUqGHFx1wSjchCCyaASiWp5KfqaHmuMZ5bbsReJRGLW4qsSZqn22n2fTifVmhjiTwFxKPk",
  "key23": "CAAjqVTAGhXdVCgmBUhRo6vvBw1sMtdAUwpWgJYnfr7cWSVsmevgkZnDzKEwAp6sN6unk8veh3hxMvbXiKzBCV3",
  "key24": "24tG3VWYW7FTTjBPddKQxnvKGknZNK1qp2kFrboKFDTKKK4Gnvz7ZrfBiVmiJ4dkbTvhfjcUt1deAuyVrxBVz66d",
  "key25": "4Dns7DWu6HY56hQAHHicR13cqnTaBXQvpQuPZxvooHkwXZLmBgepvHiH6iYX3toh6SLmra5b38fYQnTUsEMmB4y8",
  "key26": "5545tcRuXCDYHosoAnfyMb4NsLGUZWCgaGPxqENnwrRzG52zTF22G1DACxB9pNznpUzqDVePuTfDyJ3tSGLtKcp8",
  "key27": "3puc4rzZpToPhqMpkgNBqx6N3oBhH16u4d6etNLZqtyySEtzFngRq312tJGr2BHvgQei373eHXHfzKTsF6zWR8dV",
  "key28": "3yewsKUs6zSCJwcempmYsb3aYB7VHV2hyaojPfz1M2xK6P3eGFZJXBgtoixTaDtAHZMFLDTjznRxEb6KqWqz8w64",
  "key29": "mZ2d1yj6SwJ2iJpJdDhTMofXVHiPK1r8ugaa5GxnbexoXMaCa1yABmPkbaVVvT3ZNrHADSMAdLZPDtZBbV6ANR2",
  "key30": "5w3fuQ4tLT63NpYfWZm3Qfja6sJ57DZoMEDupiKSLvCb6XNPHroGVjZ4ZmS5Su3zC6xv8C9ATcpwD9qn2NpdsVm1",
  "key31": "4UMucgdzAbbWLHc29xF5vgnu8nhqtGcFLjC2w7Lpf4QoeEpNpAanEErgGAD48Wpw88VzJQz1LySY4qzD85ENHSRU",
  "key32": "3tcPuS57vujxM6K4UzuWoXycv6LUtQ3SiG5yHfosDhNeDHk2UfyFjNnef9dKF2tVXCiQyQsLd4CTbmAwUr5PKgL3",
  "key33": "2wzKUesLvKGHLnmyjWt7FZ7eHBB4UBHjs29o6NAb9qUVRanvH4Wuh4pNhV6taUk5FsaohLL3E268MBjrDWyZAi63",
  "key34": "2WwfeePzzyJfKERk5CuckY3dXLWg42bnmm4CN7Y7oZNY1nKNPMLHPiaxhUXZWSg4pxiFaLNaCvEX4S2BRo7JzQZg",
  "key35": "4MT866KvaQqfWGjrGkXgwVe8qcgVTnsw1ERrVnaE93fgeYWfxCpdw8m6scZ3q8MHMMfZxutVnNCVUUhM5GUphCfP",
  "key36": "2y7sZ3envA6EeRHow47QHxLcDJQZ9pViVb3Da9CzPNudshQ5JYPCJAXQQGrN1st6xyAnwXokYea1PunagY8B9Xra",
  "key37": "3gT27Zx9UkPFcMXTtw1J258bBbNkLL9fmW7K6p1ytXcjpQfStCc7dKYzUpcCP52r2MUXsTrU6phunr3tPKd7srnK",
  "key38": "3vQ5PXKr1jcGFamY83hM31dKQqn8vMjxkAv8WmYDw51sq1RBikFgiEfdSW8VgmvFGZX6Y4W6pWQiUm4VSGZK5Sjs",
  "key39": "3GVVScgXBFSHnpX2jEdnuo6pgWbiEZVtmifo33bmqn8ryy971F4tBGFUNAYzMHYpY3P34yRB5nUkbsLM9xXwqfdU",
  "key40": "4GBpXHV4JViWzRNZ8rjP1rnpaT955TxpCKK5aLua7eic9JkGYqUL1mPJNrxcXrN1u26Wim7xAHuwnBxrxMqZe9dG",
  "key41": "5Tbavwd4pxJ6W4hAn8SPdmL2h1bVn6wLSymphFoHwJ7mDH24DfNn1i1WFA2CWdrs713KNp6EW79vEyC4CJEjazCo"
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
