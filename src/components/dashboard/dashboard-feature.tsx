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
    "5EKKmwdtEmGaTnX3HNM3qBD6pBLad16ad2gPCdcG43oeoxzmDGnyT9GPWj6x1iFD83fzzqDbPSog8DJ9ehzBmKZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WjH7V2Kty21EYYtH567cdVUDeXTQgnjRzTNkpUzR933jPZBypspfpT42RT65qmG66rcHRtgEtyyjfRKWxwtxdTq",
  "key1": "2HsGkz9Pshdusa3xPELov5QaWjvmDD5JhFZRixR89KqtTbcqsgQaKGYudPj1sJ6rpheNT8avf2htVQXzRgpovNwt",
  "key2": "22RDcisfPW5rZw8TjCci9akbdAxwsh63Zx38eZkMBSpWecuaKSsc2MB29HPRgSV1xnA5kKAjMqxKiVyqb9WA8N9q",
  "key3": "3SrYMU516h2jriFRYJQjn85CwoFFSWZkmA3t1ANXk8Cmwi3CkaxQo9h1hd3nZGpsWEYMJLTBM7jMWibP4yi7ZYzU",
  "key4": "ZohkvNCtU8xjpwKwoyikPmGD24xhutfoa1tmRz7N4cfAcQg517m8u1QUQjZJeZQSs8UzgbCfLXUirn3XPPbEawE",
  "key5": "4JSbFrGxwok2RYA9t1hCTsBQyePEgY4zhWSoPjhjS4vWTQSUqCC2i7Kyp5UaFyTJRzNZVspy6kiZLg4bSjHtqYQm",
  "key6": "3evbzmvRBJDgCBbaq5GoNjBRfuMFswGVp2UXdHWqzBrC2iwVqBoJB4ngru2qfCV4yHLGgcCdBtuFo3gTTrEbRtDT",
  "key7": "4LTyZQ2hJdeRqMHgFy4t3S67DH9kSCKfFsWq1bvQv9iVQN3zfUwzAw3UVXcQbQYfZGfDCsYtEChUye52FPqMESwx",
  "key8": "46PVRn7k9pfZEJ4xbu93r1JyE15g6ZnKTQhR3m7EiArofpXmni4yX3jL1qqb7e4TrJsw4Zz77Jn1QyV818MqpvNN",
  "key9": "5FoPadnkduoBb5mf4Qen7iUXiQ41LDRo7W4HHkQxcKpkYrtsoLfHxpGoRNLTEtVTPB6rMdKPCxyd19eYPyFBDLM6",
  "key10": "HynWnrhqVP5poWMTgUtRaMz3riRkCZPcvN3Lfrtooo7FcUbmFLmq5HUTjcRBUi2rkTNaifT3cxXgJRttktg9pLJ",
  "key11": "4JaZH4bPgpWRxH18RSXpGFZEuiDwEnpK681CEE7YDiv2ZkrDY6C3HeomTEdDBverxzvb9XwEKLTvXQDwkk1xjRSg",
  "key12": "2ox4YnmcbtPvoiGNB7j4WoEZb4odVVMiWm8iokuTqdcDBMxvEYXf8YcSKETJPrQU1gEFgXqntJe1VyUkE6H3DSqU",
  "key13": "3CHuMotNsWkwZPaJxDfb5DLBcBHkdzA2ZJscC9gpYxs4Dzn8iv7Yk3N49A6RVc7jXp5sL7pKjd21UzyELNG5U4JW",
  "key14": "2VNRkmp5HtcyCS9izg1KZY8BuDvYuHNBz3ytEGctKxBkACidB8CAEqHS71gtUrqh4Bg1oJPPR3Yw5Jh6ivyd4CpP",
  "key15": "3AnyKLNzeJjwVSh4sVeQokYCd6vK1fFaQjDyuPb4eo7Sf8fLfyrMtgcRTpGgViyi75DQU99wqRYroYpzuXXjrJMj",
  "key16": "4Xz21Eu35KvL2UYp7NSM9KUpttpWEMkwPVMajLMBXj9uWiCUWZdYriLaUUxg24GCX9KrajaFgRJueBnAnVP2z5nd",
  "key17": "2KVZ4wPJCZPskcx9oYL2uSHUMB9aMNBgLET1XPvzjvyTV3QoTVrMakmXXpw1t2sQxjXpLBNV7Xtt7Mat5ZXe3jf4",
  "key18": "56XMWhtr4JfBQGhYFNrmcWkqzAbp9HxsDCbuu4TR8i6ckbtto8ccinz1Jefpi8T8uD2EVrALGeqsC5tjVfJ2L6SH",
  "key19": "2FB6Mef2gvJJmS4ebnPFcgjsRGS3RjbG2VTgdZnkoZdrjHBFvvNmb3S1Tbpz4UUtwre8yppvVyxoVk7JGF7j3NJi",
  "key20": "61LEFPHq4ovqK6ds57D6698Q9pdfNB2kLqJuWpdJWWNUbFuJBGwGURixZZp3KxL1vffHN6ia1d1pFA6cLFjMMzsr",
  "key21": "4ZDgHGap1ccZMZgxQvarGTwh4taMDw5q9P2yjcqK5wuF1yBf3B2eLdqpaiai2Tf9VhaHD6vpw3hnrTL7sF9uQYum",
  "key22": "5V6VMrgobowLTmze8ZriizDDbSnGLJyDdSNtF5n15nkKHN1kjoaMMCtrmWahLX177Zy9A5oZfUvtdC6mqmzxqtqQ",
  "key23": "3goGtdYAhGmQqHSzpfv2qNp1KmieNpihW2BQsPPzFuCpaPQpDSxkhSjq8E4QC6NCqH5HeVQMewVmGggyJNjHwSW7",
  "key24": "3JgyZBgLR8f9RhHd47xpGMuE4aGthZvggPVUTtFz86x2MvFxGj1NTRQ1ScUcEKqvFazFeFitv4hzzqJtY6vrpfRK",
  "key25": "48Kw5coAnHnLwmhz43UGS7JZXMBK37pyxwaEUnLSyMRXRLvL5xmuK2fbBC1msei1ggxp9HAHFA8Ny8iEtpcimE5s",
  "key26": "5azdm7yhCPwdAGPVLfqFRND9v6Ct9xmmDy4C7sHQ3oia6ENc9GroVjLAELXwKeeBqbF678A8cP6QQ8rNizacoBmE",
  "key27": "4QbY273hvGgDY57kresKSp8Sr5Uxq8bXihkDbdJZwfNWRefdFcd4eWRq8mn5Vnb7fJwqzZah1i4qJGTCw67rZrJK",
  "key28": "64HHWMRXMyr881rndXjh4j9qxfxN7NmL9Ho19N7vxEWaohpam2vFVkoWmzskHTfsAvYf657DY2E5wg3r7DrnSHZW",
  "key29": "3USCFMd2Kpvau2FdnktSaYKdFCeV7q4JW2SMVGUSarxsj6yV58ykTwu2Bp5kuGYsyeF8NQWtcpjN4aLPepK3SGGT",
  "key30": "2vYBKWtpy9i1a6ua8wRnuQ93mhGrXSMeCNc31kFbGTtHoaizY6XMH9CwBE1L5b5H3v2Jek9cDVBZjWHCksyCBkJp",
  "key31": "5UBCqCP9eyjKBpT9pqFUthARabG5ELUhBwVmUVMBv5AW1zkivjEHFR42YxNWKmfXpd5xySpHn2WnVf7PycY9ajAS",
  "key32": "3x9yH3zdZBqYe5ACnZPcUrjXCbeGnrvUhKom5wXdm1JpWjkr1uGM8FN4WqTSW6YPSu3mTxbodsktM5kZkYdNGh5H",
  "key33": "2otkkppfcnFKcA19eJUyjNtURni6CU2aDmPs8on1KKn8jm13dbA61ANUwVu54k5ER3RvLWUhPn7cLjE42qYXGZdM",
  "key34": "4agZEk815Pr7kF9i7XZ5aK6f92A1ViXv29Lqw4Ci57Wc8QSmFZMPfFJsVdcSVXx1eyRRcxcCQKV65UrGx3yjW4ji",
  "key35": "2VCTbE7uco2uAvKfRSn3GUa2qyGoo4VYii65RW1ZL6ZFmanpXvKXpQeXmhvMb7LxDRezVr1B2gNnmo4hVWb6wD2N",
  "key36": "6429HmkdrhTgnjaMV2VjsidzBvUW3owtmiYMBWYdpuTxhcGUJPu8ZfsVfeuSoku6H4RRQroVL7NFkvDzb9UHSGTs",
  "key37": "S4HtCDp52PQs3Dhv6CrJpQuf2b3yVLH2BDME7VuWwghxVR4RPn9TXQgea9z4VxwgXPFmU3c9fAMFEfjvFznLE3E",
  "key38": "38JHVue2nyokwMy4c4e7LQ6u1RJNeojrYmZA3r2V5gVJ9uPLBxRVmR5NX2ggi2GPUYPfSM9yRBBFvp3cVbbFsy82",
  "key39": "5kN4ud7i5UdrB4AhbyRJBcHhzxpq4UZ6jzYNrFJdLewovmRFotdwjyorEbd1nJKbh5Pe2xrQF171WcTwQ25JWMhg",
  "key40": "4BCPn6WWwMbf3zTWsPVePmFFcGXs77aZ3T26g2zCsSwPpwKbkjvHEP3dMVvTUiyCPefqfxs8yWjoHt1hMZUEfopg",
  "key41": "4RS4HQytdTjfDLAhoZQ25DHhd8mwPzrw9F8S43WXNgsN1uAUyixutqjHVSLWjeFpVTyTshjmNKwtgxXpaW9RHg6G",
  "key42": "2YMQj1g7qqKxdJPgCzYYquHXxixPvA1fQ6w6gYGZWkZCrg14pCyAnBTLkNQxDNNN1DXYkEQhYvGFW9xJoZMwUxA3",
  "key43": "3bjfdfooWY4BE7SuVMYujgPheEgf3E9Tj76eRiLJ6xDyCArw6Hvt8T1gzHvr7LRyzCk98agQsbstpGbRe7QMbiHX",
  "key44": "4FgTLjp4Ns4N9nCR6fif37kNBRLGt7eUFoi3ENPDd2QeabCMhcdDxhdruui2WEHCFBgML8DkJUTF28Fcz7nLRc4R",
  "key45": "3X4hc71sfCRzz1CKAniq2JuprLv2Zxx6nS8HxonUDvuPkN8r85DH6SEyR4LQ12LaGF5pB4iY4TdC8r4arzmm2BGS"
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
