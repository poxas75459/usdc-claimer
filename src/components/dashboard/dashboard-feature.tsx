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
    "4v9uj8ZFNkB9Jf4nMrHZYUSHR8ombPAYoppapKW2MUj223PGVDaZ7McxFEpar8NMkW5KzdEY2mA6wRMe2eAdivMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GenGX8G1vwHCg1hfP8JmrUow9dJ6yidjGxZCpnNaBC1odxniqWSLCd91H4NaSpA2Jupx8bVEFwNqsoqQUh4RFVJ",
  "key1": "5SVcz638MWfNtmjLssBhD4CzSXJyEssbsP67JN9Y4dBcVY3sK9kHnrwRkD2Zs1b9HN4MXRfw9EzpRh6sKtSataD3",
  "key2": "1THRpQsAuU1fQnmLxoL4K8wAcZuLH5fSzet9uQ4sun7o3uP8JSAEoHH8TQiMZKFJBnnu3iMZAZSqTAtGCLsLkFf",
  "key3": "3FMZhZBWRWv4aTD6YF3UPXhUNdbuZ43fdLHycB7dXRBqE12TetpxTgheQg5tSqGujWn2yGhbhy329KYTCfao75Pw",
  "key4": "5vX3tfHFoWMMuMUPuhAWVhUFPjnkS6rW6TsuUS2nafANuMBwaQQq6d7PUUqnajJeiJFLwj7RHTQ2dGQFVvkRBnct",
  "key5": "8UqHyRrH23T4A7oPwZQMGcbjwHs5gjPLVYNdN315cn1Rk44VfstKqcyLuWs41kBVfuvwfeY4W9JvL5HENv77QWe",
  "key6": "21ST24yionkqmuP4u3Yu8hR43iZAum85Dr7v91AiFDg1CHicDP6f6sjafBhNWHbxRrSDwBpJTDgUPC3hyefdt2FA",
  "key7": "DcdjPVtj36BM2Edx1rHs4EQZVFk1YMABoRKKbnZhUmg3kMAQonvuEJRYraqfiVXnCkSHTBeGMr3tSm5N5i5dWJZ",
  "key8": "2Bq2gpRLRjaN72pV2KFr5c4z1K4hPpJke44DdrZqQaFHhFsyANPyMxwgTyEEmEXEGBDNPxi6XkgGTzgHk6SGFoUZ",
  "key9": "QFi5jKxhrTafJPeRVWizzdSSKd5f2yX6ezXjPgeecCzERwHNX4oULa8MWabmCoobtN1jHVpvCnFy2oTnzwm7tb1",
  "key10": "TQ6Ep5mWsmHNDg1FTCiCKhDERm8BjBZKikD41gYAoxqKKdRw6aHD2GGrC2zcKUWhCyvfcDU3cG87UAsMx3xPFPz",
  "key11": "3ihbyQVadVT9Z1VMWAjB8wNtazSzybWoV6CwtRYk1FdeNRcfMb5rarbLTTa7y9WZnLbV1VcZhHw2JuG2pX6m5KFZ",
  "key12": "2A4me7K1A5fHcNVqyGgUuVopQy4MidZ8iCpHdXLYNSB7qL4A9fJ9rWomQpSv87NXPA2XM1zHzWfdSoSCf7zYcefE",
  "key13": "kztL2CPqa85WiUF3sy4oJHoBrGTpq7gNZaAUs9GbhKezK5p1U1EYm9LpvR91HHY6zZLYSgnBMety3LtTmmKbzaT",
  "key14": "3Tf7qbUKnasLA1nfffZgtbDzg3XJwrnRuKZgmhn37dNMGcz7kG9P65etK89MiEuWdMe1QGSSD6KLcc3NkcVWaLzo",
  "key15": "2YKoHQE33pyBrfXouKRnsR67gh9tcVuM9SV115usxdLTBttDLaB4ySXw4kJNN7TokFQWk1VP4PiNY4RHvT8QsijP",
  "key16": "3whzEZqXfsTeZbMen46UU6umWCwvbErB5diFKfb8nNAQv3c2anSqtzByWRrHFgsvZrJ1rVp222YDe96S7a1GUtXi",
  "key17": "2yyWeh3QriEnap4Uon1NWPVzWoWERCsZ5sQeTXa9dh3Crj5HV3NVQcsrPVx2AfZZjSgqv7dx2E31pQaCzE1BZsTS",
  "key18": "3i3K4dvrG4HdJJuXPxQ7hVFDBCBbPmgR6nX3YkbefQapDaXQrTQCVZdfKGCZcWszF2fgJnhwCkUYtzYs4tdvhdRp",
  "key19": "428ZzavbMXRtdk5rhynVzsDFhwghjLHdFUstg3RMDgSX4WoJocLS9wJHDyeTePKomTJvG3h1WqEKtHwBbgcfxUU4",
  "key20": "WBzE7oAzajyAyCQDYbZsXg9aUdc62kkVN1rNS71M2CdDoJHHHd3YZCHQJD3TX5nZkKcDorrmH78xPN5kAKHNaqi",
  "key21": "3pPY11KghDzE51h4VDYoE2ho6AWKHoGbtBy9LmiqCzhaM92ygJxhxJ9honTw3yaYfjdU3SKcAAuc95ZHzvgupVMZ",
  "key22": "ZTGwpGh27DDg1JRNP6FZW58xSMpDDDUgsbbaRwvTC44Gn7vcS4h95QBqqpz8gdzEbkyboN9NZKQQr4hbCaRDQZn",
  "key23": "Zaj6u2MyLQtw6Z57ngbPr6d3ezddTtcjK6reyxDv9YCpV4CG3eatxy8L2cgdmHTeVvNcKpwo5QFuEbTBKxvQW26",
  "key24": "5nKiqdGY2ood3MXaerGk45D6K4fztHhQNYZmvhcvL6zV2jR4mVtvD9xbt2nwrefw3svoMjRngbdufpjyVERDzR5j",
  "key25": "4kdqfTcrDHHLyLUCxFzydHVx97M6bP8Qfd5147txYBDeTpG6xvpMAkCaPxtJLPmmXNUEkQcVdMiic6ttfChKAU2s",
  "key26": "54uJGh4TAtx5ax28JVJMGJ5oGfbfZLjZBuU2ig2L8dcxmFJXSQmj24u8faYvoo7QQFAnf1HV5Q4RiT6JkCKsQPGn",
  "key27": "4F5B77RxwWhvcEmegwVzXWnqnyF64qMiLT7QkXVShfDNVPMmQYPq8FVA7a6Y1ZNMXZxqUG3Kzmy7M5Azz6PiFQuT",
  "key28": "uEKGTDWVyH7c4uBQLJYh4HqoFU4W6W61ZTe94bjbU5mKVLamDgDWSjT9eUj78JqAovMLhuewBEv7bHqDGkBS6sp",
  "key29": "2bQoUyrvFP4mfEhqBsaYQZsPMXSh3XGsgXjBjsDuM5pmuFgxpVGbhuWDn5xZsYKM5xaiaToE1WbNC4NSWR1tjXvk",
  "key30": "5UZzbbxfxeYM54YCkwf5L6QjmQnVr9zzjEySa4vTGzAuq6327PbjJMXwAQnqmsMZ5Y5inBqVndqx9D2hZsjaSJgd",
  "key31": "5UUm3etJZzkj7zfe6UPi8APKcTwwgQTg38bjNTnG1faD4kEbXQQqTkGSF7WdTsPYcrdo1mcd7zxh7iDh3M6AwyGk",
  "key32": "3x9KLShXqqhiv39hBRp8id4GvaCDeXe2791e8PBsoidxNoaxnSxKRvRfm1xdNwqDg2oaqL8Q1H9rt1t1NCkv5BrD",
  "key33": "785r6RHrtginWMeoQydYhxqqxpukSZ9ZkpriTziQSTQP81qSWZt3jDGiAUwAPpfTegJCWc2jbxUr4ZW8JwWqKCa",
  "key34": "2Pp6GRAJePd71ZmdJMtTu7kvAPVSMTtMRmiyiFkkuTvdLGKA2zx14RE7fniSY3ysq2H16xG2AEfuXkfnoKp2NoMd",
  "key35": "51sACEfdoPnbagjS1ti4t6SWUivpw3EWuqrv2c7BHfY1QqawVvfHNQvbZ5seAJN6XuVnQg2EkaDydU5HSUoJ6i9m",
  "key36": "62vnQkHvTocEzmANpDPT3YJEQqE2vdE9ast1seXq5hmyXFNkqCrfy8SiFQrVnbLp84vHRCYZwmsv9J7k364ADoLo",
  "key37": "24QvAqgcwWQ54Pgu8sGRGofRCttogf4KUPnpZjtQce7PHaSkn5Y6hsaDjp58k4EC5RgKRJUb5kbnSJuborcFDD14",
  "key38": "Zfj5oPtR2Ngkb64iy2ajy3ZA6aMQJVeeau6ybCkWLPgzz51ysfUAST6ZL6rgHKwCnV86GEjEfpgKsvVSU8wNTQS",
  "key39": "2wfUSdK8W8cGypWRARfnUhzx1mcz8cBCfcv7G8dDMepUBb2AeHe1F3tfhWQvkYFATHDZD1ZgDXibfMA9ukmsB1D9",
  "key40": "3MvvWruZTQp41gCzRCiy4RNS6pLREHfQeKuPUkESw5qf5uy9S3mK8nuJ4JKQcaq8etyrEakE2U2n3ofmqX9vF3av",
  "key41": "5LAdXgQT1RtuYzGMJyjVPskwNinyRG48uPSkJDbZ4c1wXu3JTWUCmtCVRuVQiorpkbAgonWNnDAg6NVCpxKvoZdK"
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
