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
    "55jhPsJaa6DqhMDYfe7zQEZjATaDopD3RXcbxypQefF8XHjQUWvK1sqEAGdensJ7omYor88nMC4Wsmh5dMGDKLNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzp6szFdBiuy4r5w7xXMYX2BPYHLjLqM9KBCY5DKfPEtRmZeKA6ToZYnmaf4sa13r1ruKnCv2v6CuBJJSJGvdu8",
  "key1": "2yXRKHGpge6xU9Uoj2AxpAwoc3Ef91mSTmjWL25B65NBb8LKdkmXVzGb5Kmm9YVodux2Rqm1movh1rfgXYYXpUsc",
  "key2": "48fp1CGpX3Zo2WN93Mm2rVhNeVuNn9CUJKy4jKyu8qENaSpJxNjXYtTjY37W2MkDqqRJbuhUv9PJnKRpjUzXCo1q",
  "key3": "5wgBnxoEV7gfz5xe6SUk6kbwdtPwsnGESfaq699Srgndn8nUngM5DDnT3Fifs3jXWZm8t3ZYbi8jmS2YAg6CEQJr",
  "key4": "4Pg4aiJksVMfuTPNuSx1vejxYHENXns8ktb9TQ1BtnWFTZ3Mcjwobw5js72cBSQYf8hHZymHTdsr7QG6M1gkYkRk",
  "key5": "5GzaRHWwhDm7UyiVVeJCCsidbKhP5UWpYU7uRvvNRok19gwV9HmqaNEnfFQaZzC6psWCA8AH89G3ht5MTui3oYpt",
  "key6": "3AfinYegipPrby2LpcsnGfJiuPg3SeQqm7TfQx2YvpUUGCYUqVevkZZCAsMqwjqK7fuF1S8eEZeHqvgvSFErqDHx",
  "key7": "hXbkH4GKHZMbkWrSGBnnC8JuJrrdDhe1eiw9i3yCZDFVimgNdfNuUpAfrWSJjSoswRxmScxyLjqVPRkthdmxzt9",
  "key8": "4eVdGeqeqkvhAAJbogRrKvNQYJkSjaXwBqZ2SixxsJvbpi9tf4vUZPA37hGfAhRbdmwZrunCM94CiQFUcnP2go2U",
  "key9": "5tfkHRserF8URK14w1RFPH7PXxByMLQhHgjETXMv6kaHA4MxGbsWboBdbk92Ehwq7MPQKf7y5TW7yX1f9jqoxHmp",
  "key10": "2scXrZFGzryiiCn1GY1HU7qPBwcDaVweGQ7aM27avg2VMDszrQjmCd31KtRs79Dhu2zphLvLMoPpVYWfupqshkPs",
  "key11": "3HmvCuah41aZEM5suuSqCV9G3kx2F6rwoZBNG2Z6CSVn4Y2yaBvKMoWE2MsjtcseXwmkhh3XEST49d5oowbJPmWu",
  "key12": "3wJ8n1qKFsB2LBfnbpoF1XmksE3yYmPD4dUnb1bypWAE9MrPcbK8NSEJnDVGXg1BSexY4tb4KmMPbiuF3MVpU8Z6",
  "key13": "3uysQ9DHXU1JP2n78EsDJnBMAf3LSsMAfVhYycBMmaSD4Yd5gLDFM5XWkVGCgQBXuQvmndyk1AMiNXJDYJURQK3",
  "key14": "5nsuPHkqfzt5oxU9KTRPbdG9WrqioAKpCVDByUbM3mF2mSWHKmxZZJMwDjBpTAoYHKApFv3CYPhgULpTwMW8tvpn",
  "key15": "2zqz6XbQiULYmtbsn4JBcKwSNHm9uVL1AWSqb29UTivY9EsUjavPsCj4Jg57aXZABfRTTYVGwPMmmsohdsPb5bpj",
  "key16": "5UN3X1Sqyqdt1t8Sg4nkGrnpGdhUvVEYAMeoGPxQyrrPfKnuw3Zbww8yDwmqQ35snqZ16FqmnG3xJ2YkzAuUDA3Q",
  "key17": "26eGg7gkAXUbGrX7ySJwTq4r3Y8Wyoha6sB2fEJPRyeLSxCR55jQpRF5TUS24gxVACU4SUybkme8vC9dnqezHLXD",
  "key18": "4xxqcTwMQ8JBrubwqFnz2fDtA72rw3oVDxc3XqCUy66mELHXpdp4CK5At6SzQCaJLtPWYtSrecp7Chu6NeaLJbSf",
  "key19": "3FpFz4MHYVEvvteVqBPLHUt42EZvCLdnWJPPDLvP2KEz8DXwE7uzHNdJ98hgX4MhogYoDyUo4Hwut4C2GHTuupFG",
  "key20": "5gXNZQ86curwcddmJdWf5ywigWkwdRQJxV6joCGeX6bGY1zqQxtUavQS19yZJXhMnGTHeHZx3tYFfTFSv7J8i9oY",
  "key21": "35Qch6UCtzd2dmcKcCfoXRtd8QThmUrYFsfJqA3PJDm6DVdqthtVpszw24tTrkDKU7Ed3ztwAbkUSbPpMDS3BJuW",
  "key22": "35r239r8YErxx6vTk2MG7UyCvJnfprrNPFSLnqsvaqCbVo18BS6fENZFLpbd1JzMWc4piJY2HKquUpJPLpE8Zvjd",
  "key23": "31duUrTMZhPD3JBNhCaoD4gZnfXHLqX3mcs1SJYKjV8e96x4Gyf7kBGVyH41pH5gzpZraRg336W1vXz8eV7Cf2qM",
  "key24": "4Q4ssrYRVMWYGh3JyE2upA66paJuzhb8KopF2Atb7kBgGbk1NHCq9EkXPYPVZ8RGHAKaGrEstoq8skjyp3mUtioH",
  "key25": "4ZKzH6jdEy9yyaGiGftxFunDe5KNYUw1NMLpntHQEA1c2Ryf48PuCqE9Y9V4Xt6Jr1Ar2S3mxdi5KmZK4enNuTDH",
  "key26": "4H9sHzcfM7rHbhttg5BruVY5iqpCMRWaXFF3moXhi2WLfd66EePtphVzoWapadU4hLJourwoPfifupWpceuhXHAg",
  "key27": "GtGYLa9xEMzUXRv9ZhXzjFBHutijWJT1vPiLnPXUCAijvawsBNA88MtkQ1BnQZeXuRbBW3tAdn4qUo1J77VtsVg",
  "key28": "44LUKtT6c6XHxdXj2cBYtwMv9ahstFKUEUXeUyhaxHZotX45hN7SB9qV47ssiAHzfeEYK9x2W2HGSD6tbYmjiXZc",
  "key29": "2tUC15dyMwBPTkFEPDEp2R4oeWaZbGrCyS7CgjKKmCpoLrgv6xbgwojS57vUwPkkSn7hWhnX2zXHdQ3ShvK4RAZK",
  "key30": "VHDR88gSf1XFAttpvuDt8CWgZ7tBszX8PybRRv2XtTDyY8d3DYJTopjBneQxQK6RwR7bpAncy3rGhKDVLNEmDvW",
  "key31": "4bfXSPdX35ssrTv27xUqYxo4srzBswE2etb9rJoDmRYJHtrDgwViyBuKwgryvYAfNcogPuaVFzDEnYBnzEJRWoWL",
  "key32": "4iPHztxR9ECrZxLDEPGjjmbCABmuFymXsZtopMXEPmjbSMQshVqdNRLw868QLm724kuUnhQnmDGYKHNP2dQDV1mG",
  "key33": "48NQq6ygyjWrgXYqEQjc76iKeoE3RwM5d5S34JrbMc2Hcm4bAd2jyKURegrpYnDroFbYurqyJ2sLSwf9eJxskpXb",
  "key34": "2jLdjXWQRq7pB3qU1Pbi88BNu6oSkmEtZrqTo3Y2oyqgViPX7rJwwoUKwZkhxxX76obtBR3s5Knr6iijquTBgpNT",
  "key35": "5ThURw5jfzZUYbQrwTk2aX9QpnuqAAZgmHP3iokchaT7S18p2sBoxC7EuuQzVj38XMqkNpuRc75BLVJ2p6KdHzc1",
  "key36": "56S3scjM85Ej7M5HwEaHhpgfckHfaGNEvfQUQ12Bvm3BjNX6HTardjCgtb6hFGpbQ9ibifnKveY6njGowVpxMUkf",
  "key37": "3sJbxo11KNTfWvpeLYUtUGrYwrNPfKwXbRdLEzu2iRWQ311AGPbq1Qfs2XhSWzreH9DGA1X4sLh6Tq5rXDa8oA9G",
  "key38": "3JBf7FpDMgu5mVnLZXJarydCdmh3hNwhyBG4An45sErHwdXnarEwBMdti1xn7WnaYmjgMBdcTBYYcXNjRNBufFDZ",
  "key39": "63rDps42uPPoCvJCn7yjY3SJFKYrKyudKZprZKX8K5n1FDuqYkryzzB9SabMtNSUj3xqvPBJoHCaSDoU9F9qcizD",
  "key40": "3e3CEUbTJ5oyCDTUZPVhZiHaLhJCJYKFEzEGLQPnykvsp6aQV8adoLBzQ4BhxkpfEr1Utx23KCTZRh89doxzccA9",
  "key41": "5nQgsXkGsyHfbrqmRRq54GhAv1NbhMrRGtseAHXgRg5Hpzd4ohCkVXKMVk62eS79nqWia8nigpcXLDLnATM1qaEd",
  "key42": "3vhQh32ZSzPNwBT45PoFZWErKaJa8yhg5K5fNyMyS7SzQRMee93Zb2c7f13UTZUbn5WZLHmspzrc7Kv2rnHrD5Kk"
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
