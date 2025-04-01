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
    "3omtx2GJmwTYSUmDp7cT8cuCe2Kr1gmAKktL1eqLfG1TUARZP6zdpLkAzvZQAYPnvvggwEXUUQYhWV3Lpu7AZZs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VBerkFWK3dpqTkCb9EFhsCoQsh8ZhHTzxx6aXxTQEqkbGAzRxTAonqaTbiJVSp9zSBjTJGt2oVSJKchPwBHBigR",
  "key1": "JyzvksfzXSaFdThECN52Pvorv9vBhEh8Z5AMgFmz8LsC3uf1iatLRrAwiPHKvcx2CA3vg1aU5S5RNjYjyW4bWRd",
  "key2": "5TeEYyAdy1mPreMSpjLvbmtvzo6LjkhM1NNF7SvATUAWwAA9LgZs8m1AuAm2kVMXPMTxza4AwYLw5uLJf6dT2NXD",
  "key3": "5zQab2EbwsYrtTxUNgF9tS4yLnuJ2ud3N4xA7KjND9x3teTr9BAVEKWBmSJb3cvCPiY4cEToS6YJXTCYpuKDBFq2",
  "key4": "rC8gr3X9C1xFhfMx1rnJ6eFcNBUQr3pqZ8hxWgzcpNqoEgJG9zzFLe16Tv5qBHm5aoapW8Pg9WbDc9kM3aCeM1a",
  "key5": "4EKdTJvkULuLUmKsTfBnoakcxGh87qpEnmrdawG9XavtGyv1xzcvBtekKB2SQrpDR8pnGXhqG6mmZQQyU2yzigiZ",
  "key6": "5Zx1hAagw4LWKfKHYZuUDQDoojAfcewWh3qKk8M8rpXUzJKuisc5gJrDUJaAuQbH3aPbErT4Bp37YYLHLkhJyzeF",
  "key7": "4iwNzPJw7WggqwfFp5pfbKU2pKhiTAsssdCakyD6ZymrYDEtnAQdBMFyMzEApJQWtD6JVf5thUwaNbKJDayGqBAH",
  "key8": "5ksMXKLoZnJyQWC48nhDDd7QtDNR7vJhm2LZEkS8EaniRoWLh62TZsF4HLknLRChDDxWqjo3QyMdJ7w3NiUcFwG3",
  "key9": "3yURyjxkiua8MEPuwgp19odvuxDYoMFv7fqcvFtUah3aZ47jTNG24jTk5ysQGCC1gAgBm8yL16Q7xRf1w7YfvLVX",
  "key10": "3MSnuxgvGj58B9jbSNw9aUgZDsFY9dKp4h9yxSurF4ZGtpTKPxkwc6unH1gNhk6oQPJPEWHJ2kS2bHaJCFicvLAg",
  "key11": "2a7xyB5p1xNCDp5xfccyY4KFbEbKgAd3b91pmGVNSbcdRG4iVHPGidj5FDsfhGqVsokFmnZdDoGBAHTF1q6RWyNS",
  "key12": "V6L3dkPGGmjANGsqV6TtrW6RG61E5gXhGs691JuX6Do8pUNdMa3kv7oWnejQtQ4BwipQm6BU5R8Cka2AhL6ti2k",
  "key13": "5rhVXaeivVULDVgi5tqsxF9Hby3RQiZPsRJUEbKaeW44QZoMm2nAhiFjbEr9X54vChQngFKJ3MNguwKYzwMZz8v6",
  "key14": "3jphNpQUEufcoNmkNiXVcau8ySxYErMWycVkwsF1AmT3kushqda2tfQU6hKzobHRzr3NMdGAhC3rWPjeMSTCk8nJ",
  "key15": "nDkdv4WiPiv47n2916YQnBJ325Hk5CFaSATcneu7JdbzbDApJrYEPC6K7F5ttM7jgQd5nFYZMsjmQaX9BByJZAo",
  "key16": "4Uy71YHcm9JDK3XxoRWmninwmxFf2CAqVm2Naexu8FvpNYWf6zr7BJZgxgGqdcibviYYqbPGcYByCAuyjxCGJH6x",
  "key17": "3tnFZE16BKBNRS38TC2b1Jo8ts4aLgvP98kbhgqAyHpozhCsTjkeewtW6MPr9at2YTRJ5juYshMuR8xKi3bTZMt2",
  "key18": "2gvr2oRgxVggqowfffZyTHndQGXVzVFmiQeznQdXVRcTmwkReouUVjnBAmhDRdh34v6vxuAx8ubB5PTu2g1rwWE8",
  "key19": "41aWsgQ3hvdSBza6zxFzFBZz8y1FHKMfVkAMHGvE8Tgr1gAWtvmgaAbr4tyKSBP9WnhjBQgA1NoW3qmro77YkZcW",
  "key20": "3r2zB5d96LZXL8GadcqC6u1nAvFph1RaP3wMj8uXqcqoBXJPwAxK2CJ56o34m4rxcFySn1t4wh2JNnzUrCd2NWLZ",
  "key21": "3RhWSMM6piZQf31ZBCM5Gn5yPrZiVbUE1JeirzSmptA6ns7icNwV7NtqCYSohjjbMkddT6gcdT8vy5o6yYpN3zra",
  "key22": "3hKDJg4aQpgaMTucNx8LTJLY4g4r8xztQpS6A7FqDV6gSes3z7ih2VdtDvn1soXdTpmBRdPfenLDJK1d7PiSotf7",
  "key23": "51J7EBtpX9kRbNVvqhzsZ4WfKuke81CQq7TPhAyU3qqDNpoPKvnpGphuZpzgmhtX7rgHbfVzKysyoAaFEao5PBn6",
  "key24": "4TZ689P6ydtWtuL7P2N1Ci9aTVTAUutZTtRG1tRqD4sJzfxiogxvt5Q4daToGw7RBtuKAsKV7iRLf5m4GMys1f2v",
  "key25": "5tpBThFTHuyGFwv78zXv5DFdh2S4J3AyFKSD1g9wSugviAnzoAq5ibqXPtoTPhg6yGgeB7wR3hEKWV8PtSMeZ4z9",
  "key26": "2XJRHH2bj6YZJKcRZBwG6hoA7ZR1fkrvmwimYbzGPcQpo4owEpvvNFXDZSZmBj6sxVibHqBFWwMpbcHKwmF27Eji",
  "key27": "3LPYxvPnt291FGyw6UCQP9WTaHckg1ZQoH9qHFF3aJJcGL65759UPwbjdmTZQpzNufy7i3CEQHSQoD2rL445qTCc",
  "key28": "2RHyXkHRYfPkxKW77A1tWwvp1X2ZztK7NEBhPcgULSoXxMwU3932F5xSE9Dey6ZFSAq3BxQx3SCD1udz4PjD75TD"
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
