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
    "5AGMbxZLdXpJHi53GLpPAPG3AHqLER6szcuVKBePfmKHm6aQhK6QFoXMYnxrV6KqvDoZnLiFDjU43KycgyQoDRxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38G5Ru3vxMXBFx1YVquopiezYWnMpZnbbwv2ctgbvCKEvwGr3oHRMKPgXDjGkC9A5vvCuErbnS7y8xZYdzG8e22r",
  "key1": "213BP5m4vnyJQtMBt78Z5izK8r1eAUhWJqZBZ34GQgXAKk2AXaYhjocrreBwNH2pFjaJ3Kh3mEy5MpYY1v8PrXFm",
  "key2": "4yBESUmqFsbdzu94SxH2P7gbpH2REMuLSzcJujpHFM1A9knoaFUfnpKzBMgwJvKcdTm52ZmvLCYM2yRfuU9fRgey",
  "key3": "49Yk2kpr2pux8GaGzfdAhqdsmvSc5H8YDafA4tw7v6DUihb28wFKVPB5EQBmEYrkbCbPs2EkX2r64j6BDn3oFRZu",
  "key4": "3m9G9MxVCVbrJXbpwbKLBX6ZmGPB6AWDKgbpK7iNBkgp7A6XrAGBaoGzSaEie9x9xmPbXBos7X9YX7BHGXqvkrzT",
  "key5": "5FmPXKrJhfLCayVS9vNnC4isg7HDkcnCYD3S1BaHi5LEMhujQeyhSw1KhnNhjAcQNEArju49m4cScKoPXYCuSZCU",
  "key6": "2CxXvLgg7jZrNzTV9deyBA7fqRTh3trjX3QRvuq6Gwm8UWAThc5881HydJGnTYD5PZPqkbQwt1rntEWZzGp7ERx8",
  "key7": "247GWSBSoSmTGYDvJCPCGM7ueoHiHWHKFpKMERCrPEQsf36Vx2ufTXhWwjMmt8qHvZFi1mKUpoaXYZUwteRd33yU",
  "key8": "3SDHMx8U7SPZhsxFPdS97ycC4MMsky1NxAWxxJPURKpdoAAcYiNs8khgnUYZSa6Eifjyysmd3xBn9ZdYVaHbisqy",
  "key9": "2i6DndNs4DG8fLHSy3bmpQQFvcv5QXc7VeoX4VfJnNi353LwbE39fwTZ5wuofS7iTtxe1WUvTbqcodQtAWoJsfvX",
  "key10": "5zFJ91qzYQjVxCGXpURUipx9EXyvAc8ME4k9ho2AEHBvMwf7Vrv9oZ79BNnkhSdZs1zQtY1VmmrxnBPD4QornXrs",
  "key11": "2iNTiPzBxKpUL1KSreGrcLB4qphHfC9ckxcNvbEYg1pyCeTEDpWp5trPrSz3cYAQTsomVaS98Mavkiozvq3sHRrj",
  "key12": "3cdTNTPik4sbyJ27JFUEaissjpXbGBD5vQkE19HSe4yjv3qab1QEGoWVFiH36YZ9Ka8ciUAN7qLrFUEHktqioXxc",
  "key13": "VKSzFwp171VtLTQ1AK46EamkXZMjLqrEGqT76ZS4p4tE9qQ37KXfxC7c1p3TKiorSnyCvAd9kQkRetiuDqDDpxW",
  "key14": "3CehCwbKBeypv3yh8koccABDXdBVLiYkUn1JxrzGTYBw4mu7Qs5fGbAuUPTsjfdKPyWy9i8MWwTsZdiuHGYcaoTT",
  "key15": "4z5SU4DFavfNbnhXqrtDqv8dDRqQWDbE56fyWWC2CsA18S9fkYi6Gy6vjT6KAbmFfkagQ5pCCy6xbdR329nuhZfS",
  "key16": "2eKMRz5YR8wLvrE7HdVeYHCYMpnNEc7ptPAZDysf6XRXSzVbuCo6VL9esr8JupYWQ3i1dEgR3HUPPGU1dE2aCERx",
  "key17": "3JBZmi6rWViqDVcQzui1WhJBkScUkZqMTBdpLb4KTdDgRWtaeGUVGeABQB8cw685R22XhqeVKkp9TiK54CHRqE6i",
  "key18": "4Bhx2uKUa2k2fEGBYWtTQmgXDroxaNqBEfLgAUQhRXBzWNn5SCu3cgsqqDmJCZgX48GfQaT79BEyrheQEKHBBFYo",
  "key19": "2yAgVaHj3xPS6ZJAM2k5ueN1HTC84WX4nUzYM2pam5TrckDAoGhhtqohoR6Pwwai1Cp2qRqvKyhwqsXDzoTVLkan",
  "key20": "4M6qkH3dSy6oe1r4GYgquf64MxJaVL4y3sikcSjwohYb6iCJChAQyUDvzqAEw97bzsXgjmB3Q3tEDpNQQmpxpNtv",
  "key21": "3E15U9V23zAFm41bfeVj3KKYi8fMQe2MVVQJGPM5Aj2brnibLvo2B2reoHooQFCZS8R3NcgNa7QyU7mv23r4Z4UN",
  "key22": "rxLPjgAiLuE7fFwTmzpKRTGJKkfWYRcR5So7noeRCZm2h7vjQXW5NDdLWawHEuwv7T2RdjYQvn5Wbp9HKwdqrDT",
  "key23": "4D46Lkoeq1i5SBDs1Vo9WsvoBhK77sJoJ96eByLoipMLKyYmq7eUa43cpDrTrQqDHhwKLaKVAbH2YkYJjBJgv4dn",
  "key24": "3vSQUmv9BYie3ZWbYYa7S6Pssbofb229mPdzCJV25tK7c4mDdTqP51PnZdL8seTCQeUwihXirYX4oMu9UymDkaeX",
  "key25": "3xTauFjgWsQxj691k52Pn97FNzmyaqHQrNUWU4n689sdjiYqpnHqr1QXr9r6F8JSqKMzEGv3c9FyZgpRKXLy81aD",
  "key26": "aBgvr7cFgYM6zj5UT2XmudP8bZ3ERum9oXWY6779NX2nXqHNSmpSXHbAmXUCtwgeSPTZZqivxC2EJa28APnV1Fg",
  "key27": "4xbzacY6uJTyov5BeKV9AJRh5sR54N2HEU4ENmz9n8X4XbZ8ZHoeywPhKZuMdUFgH36eaWrgxFw3QjkikDTCZGtV",
  "key28": "2Q6TuBeXdcKWi4SLMXZ7v4YreeXmhgfE8h3M2FMNWjJXsWg8xswhmDUmydzK9KSTg7kTYCw9JF1xPEnvFcnFtJfv",
  "key29": "2yqWADbaRUo3jZiCdbGaPszng2B9pJtgJzskDY1sRnf4wytFHfpV5PaP1vQzyRi1bLMQ7x1mvt4LCePB1NLeupq6",
  "key30": "24mU6A3ZKVFrhRfNEmL1DtVnqiN22cYPTU8EZNWpyejAJsiyWyxgvv9Bq7kEWvYpTPTF2W2gHLSEPX2AV2d3UC17",
  "key31": "5jDXWCmFf4vVjcw7SULpPbA3ukSLexjEJoVsJhn2EHhQdGJDAXR8EJ9i9fCmS59oqTdPYUhfRxVM6yT285U8wc8L",
  "key32": "3gyvzkcqLR1AMsAcr3vLHVU3tfrDHuMpbqSD38x7qYfKLPz2nXCx8EmUqTaUcqU2jS4wLDX5x3UM1fCHCm6WCBDq",
  "key33": "2rvEXTW9pgdNTMnhUxRg524QFeMcHZBherbZRVcanauiMMXv6XVWKJgC1i464LEqudoMSVbNZT2mq1s8n9XDqNNM",
  "key34": "3F36iCj94KF2c7ivUwXWxrJ6uhWpGv9UY2YNvEsdULMKTLjnZLHAnFhwEYsuK2cJdEWKpSRH7ggn9mmsjSVLHgEF",
  "key35": "3BMVSeobeoDG1rfMjfgpvdtWT9inWkHZUWhWAh7gB5EGNLCCEr4DHiw7LW96UbcUFrQYDiZwC85eduf8CBAUTNMW",
  "key36": "Y1yF39qczrh3wwtxjV2yFfaurtb96cPiQ3TTDHCtEe4pXSASCqaRzpfKCjbebmMJ6Mvz6v5VBto9AnJQjEbmMki",
  "key37": "2qPCLEb91BDr5Ge7YCxvdGwTq76M4k7GFFjMtL5uT54rbuLJQvWzLW2S7TCE8TAZaefUCuzZu6tVWebvx3V1o3Gc",
  "key38": "4XFoZsX9gndgYPmJte1dxz1qNkr4kKuCG1mwJcY7oPSPyDZjMSSFUXRVST6ciiLf2zakSwx3TGedUo4mDAvrUCTd",
  "key39": "3LzbawBtihS3X7n6StowAUqsh7JqRwDvbqV7n7rJL62GpshbnisuAppFnpq7zrKRpBxJwKDycdxUcYVHG73CiJCy",
  "key40": "2kheyP9YDeGw6mmZstbVryW5DtcyVtENcQpqTg6RaMtJRaYYFLQSmmPQmRvVn5c46rXfNWMHbtFLWSFA8tjLd62b",
  "key41": "n3ZZY6E5BZhme7EAJBHo7oxKw5QGuqBs8TLo6SrTYyaZ7qNT2cKNVrkEkBgu9ia818FQDpmKmpsN1Y5yaBf5LAT",
  "key42": "5Li2PuXE7GpiYkUpVpsBcoJN1zhRd2E8untq5DD6wGJiZhx5bgcrsyih2nKGJmvN5wQr8PgTxu2osRiVrXfP1H4",
  "key43": "4dePRVYn3JbG22t1xirS7eifbj7qAycXZXAt1Y9SqGe7igCPDexKY2urNtPcKeqKggPzehZKTmUobFUEpnN2gr7",
  "key44": "RxdGKoCmcrAN1THDJPvyPCHGR39zZzrPXxx8fxBKsyLt7k6NJfwM9kBqw6oVMg8uzKet4B1ZGD5ayqCzBbYfMkW",
  "key45": "4emFHFLctrFyKydrLarEFtP9QbSuHjWcqw1PgcPY7AzEMcWMn49Bgq8EFm5VpKgWtH6ykJHeWYh9itPkjndD8Tap",
  "key46": "37ieaVAsKKhWHsypjqj3ZCLduX3e6PyUE1CVSRt46qBTECRYbYDrHCyZ3KHvjG5bsEeXCvtpwsgfDUhmYhAe1bk9"
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
