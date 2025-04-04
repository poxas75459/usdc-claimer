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
    "4PcVrFRJCyH6XiCKVwbVEdib6fbVNu3uPPeLWjX2xXqHk6qtFNhrAMxGjFoQE4erFiLMoEWn3LFve2wcjuHSTU3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "648wFyA3iUz2LmUqpfA1W5ErUJNhwQ6XAj4LapiqxuJ6Q6nJ9dtB3jSgkuMmFt8ZQvrfgTav9LziUB1LDLYivxSA",
  "key1": "2MiH2jXXYDRwSRfjjCf2Gr6vyUu8rDFHjfEmKXqTpRZcMSZMum9T5TuaqiYT5Ra6oZF6KhesyCfFBqsj3JoVGMv8",
  "key2": "3LGkt5biddwnffhK8j6gYugWtntyrQbTx2FUVVKz1K8sqoF5CDuJMcyJU6fxSRqz3RpbNzpFsj2EfFPGfdtVNGdq",
  "key3": "39CwdyzpF5KhbfbgZ3oXPXJVvdkmEevzVBppozigu7SbB21bxFwtkHYieqaKU7e1V3oBXQoAH9dBUSKMFUCDZdwH",
  "key4": "52cLGH2ZzfL2EQQgA9JNodmHqLYo286q5jx9ph4X9AJjUqXMqZp3cUBAsGVseo8BGwcXd7N8qV291xbc32nkV43H",
  "key5": "3D8XLBJZpsBtkK3gPPxN1sSg2DHyXAedjMHC2LGqcp9Urg87CMcLnvSrZAEnc7HQVCoCunqBh2VYddWSTTeAaxfx",
  "key6": "Mke9U389Hz9ddm4eVBhi7qB2q5tEyfjHEr5qAbhMuhqriFs2CDUW8Egrtny5hwM2T6gjLTXcW7xBZTnQZYs2Pz7",
  "key7": "48u3kzK8qXQWiKFSHAoWfTzbdmTsU57QsgyMGdiUNo3nD7TbxiT8vTSVadMRx4Duusj496SUXGvRcXPCkG9SzXSJ",
  "key8": "inibp13KPRwkR99PPUy5MwAhpLp3LRbiim9bNEf7oNjcYV1uy3eToEwaoq1Hm2mj94Z5LZBXyW2y6AHBgh23uyU",
  "key9": "9pvcGAbr32skbNnrvELEoFazyTLngwCi6Pv3buKcxjPoiv853QTFE64B6Q61nfS569kULxpc1DJdB6AL7Z3Fyui",
  "key10": "3tYH6YbxmVsbBs1Nv5VRYT4N5BZVJtA4fPajjjnzdPDbBt1hAEVf2tYxFLLAYT6VPsAhHuFnZDszQft5nbaq4PpM",
  "key11": "1Rm2PLeK5z4GJC23TebJAK14FB4M6CfwsaMFxqcHuESar12yx6316JBL82MLnEk7keNc2M6tgTfEJd2NoZoGgp2",
  "key12": "3wzepnyhuULGmWqT3ijsMhHkmep2XJLMTUQXLMxAJXMK2nKckzTNBDNG6Gu5EFvoYJkMXEKWKbX3Q6dWqgQyaTay",
  "key13": "2cYjbjXy2juhtrTRtKWrTArjqtfsxqyFEC9kgKSJBScLz7noKrderPBGz5WFKHRakuwYTB86QooFQqT7RTjMWDRX",
  "key14": "4ef4ZnSy3tqpXmMJdNc6pgXKUEMbHkj7Tpwh9eJA8QTfa7V23E5QttvpbHi3qNBxLPiwe8dwroZgioKjycqqwGVy",
  "key15": "3NwbPYDMGczD5bi3YvRdpzZoCx18kk4jQYCf4echSrxYistQfXjgdEktsBGrRNgSi9fgof1afgcfNFqAZLy4LYR4",
  "key16": "5MBmt3q7kuAEMSTVhbk3iRoYf1Qwoev1kY3fCtkRobqosARCX5T49Fu5W9QF5Qgcy3VFifeSy1Pge2aH9f8SdcXE",
  "key17": "56xkApUkwcf1JfJgDwvzPLpkgqQqacEkjrVcYmHLJ64yWobVYGUDMCX6zxCaZZGxELfeBkXHRndpLub8bRWbuW8w",
  "key18": "5wcDtWq9L1vrHazo9Dg3dZMNcwXG68FuBfZWdM7rn5c5KcbvMZ4dJxXZhiF6AjZkvQcCtzV37PDP5hXhCTKZ5fSj",
  "key19": "2wY5Ndk9aXwGk1QyLJEcVvJbhpTXa5q2SxASnFMtLv6Xa3RygMXzpYfVmhjZFzhsARgDcUHgoDH3C1u4sfrrhN9Z",
  "key20": "3Yk6zaYS8ER3hRhnqJirKnE92Kg6CTPDS3jZ8w5ewf7AQrjQDhySFU7XQu7Q6z4gt1aX8bBcJpypJ5guYokbvYiY",
  "key21": "3Z3VMmSzsPUSyA9mBFbKtMkP4P4Gzpvit3hJSDjNWAxniRtWwWMDk9T7XHRuHa2W6MxAnrqcyfRi3MxjHRn3Z1qc",
  "key22": "vHghTLdEJiYGhrSQr5Sdk5sgZL79YE2Q5NW6Cpx3ULmEhdmTneZEwAgL9iBDTKTYUrCBfN2cEmq1AhffAt4CMAW",
  "key23": "5kW16GnrCaJRjvgKhw3B7bh8XBAkrUx9oDDJaUxrZab7ev69RezncavNBURTwv4oh5cmqs9PVhVQVedToHkxqKZ8",
  "key24": "5hPQWPYa4svjR9NW347dAynTXPPsaYqv1qsfJo16yA1AsVVPBUqNo8yyCQ7kDkvtfV1Sj8nqwwCTHDNxXrj3z7Pz",
  "key25": "5PhoQfjAZfppiaHVYPSAYwiimQdMMh9sqhZXidDhDcjRp7fdpgQrYZiLDd5KCMSvakxMXyiAuSPBebANnNinxoKL",
  "key26": "4kkAKEsn99HYZPTRgBex3dtpnwVKyGa1Z5TcQCJToTkpYXoGrFKV4SbgkZiHanexPwnXxP8hnHCkEnxZ1Tw9dz4L",
  "key27": "3Czhpj9P6pYnB8kCFEocovXrqCufpjSzpdM3xPrzSod9bDmQjowmi2GUmsReTJinTqXSti2sV2ARMWnAe62Jv7hn",
  "key28": "4viXkcKENuqHQNPXW2CfC78XrM3vkrjBgC4FzPEa2HBw8btqzcdU1p8vEHkvEUPTAzkg4wzQnDKDk2gi6mgNfoSY",
  "key29": "5YyCSysvrXpGrB3cPHdD8umQNaeatVqPEcDoE1DXK7PnnkX1JrP71qGbfjDVZQi4vCQqtEbv6M1irZETYWji6qQQ",
  "key30": "2KYVnHmHvVTHWPYbvc3MUbVa1b7zRyPALPN2UpLGUCNWXtjhyi7ss87Mmtnfg3ecmDcf8ZdUK7chtD3oS59GiaTM",
  "key31": "3vdUKxHkEDMaaJuCGP1SNJDXPHqsdjd4SDPvq3zt9vU6uRB7LV4XtZai1PxQ9f3XYjDohCjRLLCiKZs9eMVLpy9j",
  "key32": "3WCAzpxyw9uirExS5BWcZBL23bqL4sqsjpbPLrmHuEu5N5wA45A3FXHpeMKpUMRLJmL6NAbKQPpzQbP7vGpJSyj7",
  "key33": "5Cfdc6nV9B55FdizM3F7Swh7NHyTJYwzE8QjpQgxJMya2QvJM3eWyNPuMxozY6uanjwhTxKFKN6Xh4MW3PFkofxD",
  "key34": "5CKpbRxHyfSv53C1ApTMXPp8pN7dsaLqph5KFaGe7no7qyGwwLqj8AZVdCEQUApH5aJ9bynXJcX1sp89ubbJNAqz",
  "key35": "5jC5K3jsqa8LrtuA9QXbRdTcyVDrQ1kVkW8sjybwYa5YzEEpHSn42Tjetc4Nt4EwKgEAZWtTyuGLSJkZX6HvXNht",
  "key36": "5MkfoiaabpH86vqnmawGn1zeef1TsXpJVUV1td88mRM8dMrKPNW1ezEbSRu2Jw5SYBu9zji8cZhdfhjfyPDot6kg",
  "key37": "2Y4FZGxJP177qeL9wQDYGUNtWJFKSrQBMdTS6WbbuAhrB4uxv6tU2SzEMo7UBxMM2xjANoVxSXkXS3dCmCwjJ78p"
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
