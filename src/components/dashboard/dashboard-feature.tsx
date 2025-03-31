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
    "3xqDXC3qizBRDKP7kkr29q7BdvpeUYTTDVPzNyMr9d7kKUVHhevaezHA7V6jStt9NpB1STZa54FRYMPWnSX6uw7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rLD1pjgyarJ5HVRpQyRxLEVVtbZS92AkzLmDxKxYxTJUn2nxP9x6xdcmjG4Gm8FaZaZVQj4igVs7wGXPrXnN3Yc",
  "key1": "3GPfeX1E4fVxZRuLpfmm14u4t5jUR5yCeiiDcGHBprbmAxSg4s53PhQKH8YprteRPeFDJc9t7S1GSE4WRR5tEXde",
  "key2": "xdDAvo94iT2nxY8eUS74dZWCf25A3qJCPG9VmJ5aPXpQ9PQT2ea8zyozdc37KFMRvBSeAmtzDdp3Pn9LtKiyJUx",
  "key3": "5SWqa6QbjVz3YUsvBgqpnvDQ8TFLtWBN3HytV7hYXb4NHQFbzfLPfaq3GUsrx3HnkX6cDtfB9M2HQ3KXjxSpEz4h",
  "key4": "2mKjn1XaMLguHaQoEwTtTMWGHwEqsZTnkJuVGsmAJU1p5Qzux7VcaMPZxhLHqiSK2MpWdX2Y8BBk1FkSY5aTegar",
  "key5": "3DaYAVSYqahcYZjsxhwR72tsMnvumr4x5nvsr3dU4ou65kq9SD1v4y9mK5EXv5FHxzjry38GLtqcbyte9eyMfWWN",
  "key6": "5NCvBU1uJ8RpHBhqWQvTaX7Y6UpUc6qdPv91GSuEfbTHEhhm4s3mHeiegS2Q4EnFU32RcXLxonriwJo6LQvjLXDM",
  "key7": "WdgHaquiD4dUSYndFK9e4HxqFwYou2X1ff571z9xcH5PA2AYvf6XRVixstcYHwVamCaFRWsNzzZVfXUWNVact1v",
  "key8": "4xQexFgfVheba5yQ7wQSDBoKuT2YSw6iztUuoVuwKUR9imEavq5idXx6EuA86jK9cgYN8gocgpeBZPb8YMLd17r3",
  "key9": "4j4cCYtMzL4MK4s4S2eiH6Wr2ZHXf4h67rGzZnwYFNjzTtfqDDbeN2sybtSEwq2cyaKX7iKEqqbHyx64WjBN3gRN",
  "key10": "2bDRYVMK4TAQ6Qi186DMiV1zLYAKdJdYV2QxZ5n7p4jqQFcPVQNMJgaWfEk7a8rgEWUYaHkr2zoHQMtK1mue8toQ",
  "key11": "2QoNcNQwfQazVMPKpSC6TKSDduTaKKD9iphPbaTu6A4bmL5ERw2zyAG5oi9CuihXQp6o4T1zkHRaRXpK7ndz8fvM",
  "key12": "3hvFfzQfGFNNU5JUeZgCPMR1fQGfWSZurNm3MNoBq8m8tUiZydpekYx6pJnc9GNdyhg2oAiHFVWwmjitNC1zkyiT",
  "key13": "eEtkp3Rb8uyreGKsPswc8DinqwoaCw5gDaxshG8xUvWS8gJfe6PqZ56n7nD5i1ijU9bsR98XQH7zNjTQFX7pyLJ",
  "key14": "2KDtvm8YT7Hezt6ASyW1pRVHizFW4tWyPAeVFxbP523Kh2m48stxsBNaE7pCgb2aw9ex5QhQ3YXe98gpV8zj5aZN",
  "key15": "2YUSuYBLskhb6VeKxmFxdhSvhF7r2MPwKNLAAQYPQrDb3BEA38DJQFFKd8p9QVD6C5oHa9yRGNFyrG995Dwbh9q5",
  "key16": "4pRSu918nZ1pbUpvjFfFy2Qfw1dRNu75XBhRQL8Piw1ZFrJCgKCwuTVArMJxgkKgMB6hg53xhKRPZTJdjXHMBYAh",
  "key17": "39dpe2ax6fKz9EPWqnJ2psuu8GGzwWFudJmCtDbaqcp6J91tdwafS1nTBhZJThyaXdR9MDt9rMBcujFdMYuLT2cs",
  "key18": "3UvCuF3Yf6BU9rq3UG2XHJyYsi39tTX7nCRANPfBSvYLqDjBMMrM6PswnASC7iwMMbrqX6X3HTpa1WTwhDJBtWvA",
  "key19": "48p7YJmMwCfuwShhBatTRSi3tiaAKB5FUhdEtSJsYtrwfCojjjF2ERFh3rEu5LaayVwnLr469Uph8hZ9VUujRZjv",
  "key20": "kkQwt3CBvDtmS9Q4L6xGzfAAJYjXLGeADjoisZ25tSJdNoQU2Wb6rqPbSvBiWCWQkF6ErjoETQWkUyTbdidDZj2",
  "key21": "5bJBC3dQ1meaiHsJMHGtVwSshUSXbDWVjx4ZNCy41qfXxSwb2Vbw6DMQEgAbrmAEM1k7WMQkWBnfjydQ68qJKdrp",
  "key22": "2xW8gVpcMPFgjC7K97sgfg7ePDW7rWK8XHUyHWfS9LHkodERzecSQHgrFkCvL3QZWhsxzajrqagbbqNbDZqisGDT",
  "key23": "3E1uJNN7UmLrEDiVzeHxu51zLYJazfvCLUaLVbpCHKjuEFnVmmk1x5YV9q5hCQNdo3aMkqq1pQZ8WzQT2p6R9xK5",
  "key24": "31LvuLQjPpHrMqt73jBsD9pfb5ExkNhkpmJsPUFDPobXyZToRCLDxkvsw2Ejo9MMkfJGLJfKVntMnzfY1vKBFoec",
  "key25": "7WtXTFafDeHcETh7b6dAruPrEej1Qj2s6HySCSxgRfBH4esxGdsJLZtsNbdMUX3DDBS65EMT2HozMGU3ocCjsdM",
  "key26": "C8S5aGmwRvovCCLh1K7qaTWXhhkZ6XTe8g2jsQrUGTB9UESib2MazB9nDaYtuPDFobY1P8znQwKQrJMQV1iS6aQ",
  "key27": "42AfSaPGG83iTBKTCtpKbs5bCKEw9LVjsMYyvV11U5RKWMjFBkA1aatNGnJKWzgNSia3v9hVDYTpdfEnB8FKUvo6",
  "key28": "5SiGFZPGbDTckSL63eys5np7wVtCVdCKeKumddgKLB9DbeLRZ1ofun9TRkQ1pGx5eAfaF66cnm9JYoVWQ2MWygB6",
  "key29": "VQYqv3TR3EJkUMQV6qtVpBuaWv2bvDtHxgv4nTkBxJgCGDPRToHZzS3x66PmcHGV8SrD8NhA2nW97jCge6jbqL9",
  "key30": "3eMkxrztrnih57rXpmtYmathNAQbEFk5mTKyCcM86mYgJnz6ntdYxNcHW5EodE6M27ZBtLBLsNdM85F8c8a7Mfu5",
  "key31": "3WCN7i6KXDvNN8SFQbXBkb5AGAXvMDBLCD3PnfMxbeFL9gsLAfHTYRz35c2brWN9HYCm3m2mnU6Fh8ePnwpxLiFp",
  "key32": "2SugVJ3sF7YpbY87gJoSzPAALaVYkhU6jkrjnGPZfxHYZb4oCQNygbERKtTcp3dfVUCcVnj6NJLGWE4E7Fdpqm45",
  "key33": "62GoymfHXojk1uGY9iKuciLaaoNxuBhtucAf9qyxmVnAoqY9kiPjbSrrjGuHsS8fae2ehea6wjRhE5BQ6YeLZiHA",
  "key34": "46HSx78s15fhFXu7pUahpDYjZYuPMPeS53UoTG14YFRVMRjjWSywUakQNJDWAZjNzFiRh2mPYubkcPwAzrVoBhAM",
  "key35": "DUdPPE4YcGDPQ7Tz6m8KP9EmygpKe67K1Yd3SdsJE16Pt3x12S6cLk2JEcp2ADwUKJiRVv2fNgaEiCLK1bQBfLt",
  "key36": "61HFJFK8pwWRiTpVmCmRJfPTe4xwke6JCvTh9c2gGVWeX1n6vFysdbbKANwY5XqbvaGaeRjj9EXDssPgVJXWATPT",
  "key37": "4FN4fzrDYzKnpXJDH2wAU99huyu9X9srGPF1QEKTLGe6wDePZ6J9gKnTygvhXjJSJugMgS6HdgkTM5rZsvs2AC1t",
  "key38": "ymfDLKFDz8AVbmZSyGJC7HGs21iS3G4b4J3ykxpLg8MLfgNwYp71pURuPhJGJB8wuDoPHukPvyMPU5oHC8jVQBu",
  "key39": "5nWz5cWxqHsFhfbhEvTB7XoAGx8Y6Q12kzjeiAqRD3NsSds1RceHv5p7SupeM54vdGcWm13rcWPPV9e5WLKJWf6y",
  "key40": "35AS89e4kJwEBVxJsDnHF1fV5iFwsBAE1nPRpt4GsCPope541XimPG1KCSTUmEgjcv12GDC5rzoxSm8hgjfTLxHq",
  "key41": "2J6xTiXZeg7JnsMe7uudQan26cx7a4xS9BJpQP8UoNtP1PFv15AEWaPgKsVYhhja9Q167kfS8vjqZ2qN8Rxk9gJn",
  "key42": "2f8wqvXbKqEJ3CJhPX3A6MQwy2GwA8XPgqhYWRE3mZEc7dxymBW2MKqoBKbhXQoiZBb2JjZUQUkDfdxXrc5GmHzP",
  "key43": "89Q8HtWKNfxjpGe3gGfVhqwfJ3uTrgst3iSZUfqQvgu9j3doMbhAgKw6YFXkxiNNNjZfptm7Uf4sV3Mrj4ABQpi",
  "key44": "2DuUHs7o2s5UgDgn5qSH2mykGTd94fZkDfg79tEfTSRDSe4uHEwpxBERD4A23muZywPQ128rseShfyhrRrd96NDi"
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
