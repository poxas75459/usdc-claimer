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
    "3TC2XcLeZAr1pykNRrDRuXGPNPC2QMkn8Qoya5cPkXkWpmqX7vEmtC3QBebtHRfdcZkNAsiJQ5kaot2B5ikVztzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dHwYXFas1n2HJDZLCEM6HzT8CWabFJfNGspnY4hT5Em8nMYjYR5SLpxcEByRMHeNYreYhNAFLgvijisPRs2fMzc",
  "key1": "5R2MVdU81UKZCPEgSPF6wt4zTLsiJAnpKufU9Q7r7eGNUcMvi6RzyDysNAySGB61jtz3c3eDuy6CQdECdrEye6KA",
  "key2": "38bupDGiLTc9tBSuBvvRBn7eirCnzNuctceBW8nYyBnedcRpnmf14iwwGzFojXyURKmgqZJmH9H7woqZKnsE2iZB",
  "key3": "44aE4tmQUpDaBkDRuhEd57TLvePhPBYdeDCg2GC9cNDG9qfhQMNxYyCjdaAraGoSfC2RyjPWtLxiMtpwrrH29Xk2",
  "key4": "2LHWKU51H8NcWQJTv93yPv9CQjZi7udbvDWXH6oFB9mnSCo59jZZybBw55UCjx92wvoNSrrKDiYwpKUscFJGwGsb",
  "key5": "36umqvSadaSfcqu1tPgqKov9aaEWYXVPDes4Zt5BEBZXLWmmPT5xTaAoZQogHpqX7a6poRXh8FW2qiJoitfUXLb3",
  "key6": "3A4PRsWmjeV8iLjLoQmXth8KeHvMRdm2HqQa982njfqdUyqcbkn2aiJWbgjZiUBUZAns57pN8wVMFoTtpc88dCEi",
  "key7": "4ZCJJAm3NvCuPM1iGUyJKEaWDzSwYGznwHGueumWhcoQHQ9CHPkipkPPdpn2aFR1dPLKUBpnyD6V6NeUTaDuqT5C",
  "key8": "3EtXvjhqsWGxxzTP6TWKTtr7AQek3k1hE4fYRzYgAJVFFHjWFcF8zizHSA4yoqzszgvtquAvsRGzMo2hbz24tA8s",
  "key9": "2mdbsaYQKGHathin1kzNS1W2s69NGxqof18WpxPvg79V2Zwo2uAACvskD9gKeWF2mcha2HXbrA1VBWbSVXdZMKoV",
  "key10": "4W9ZrhywDS7WQr43VW58yZPn4mYGk5kq7Eov3EAcmGrR5SinaFWHJZuDLpxf6iemGd8vMrv7K1P3otDV5pkKHAMx",
  "key11": "5DcFwjarJzV4JqyD71aehPAh4Ny4kHA7xmTRi7wdrDaLR21SCACEjcfmGpogHraj1rgrM9Eik4R4UaKiiM3oGStm",
  "key12": "3bBnFWYf95ezzTyMkZ3tK8B3SFX3RHBhZ3aAkNaQWj4RmQLWvyiaLFq5p29RCQFP71m8fPjy4cosxaZDiPiGBPGs",
  "key13": "53mWQZyH1dhVufRJSa87aPQeFdLUi4KnDzkMjGijTkBFAzWToKX44tc32CDbkMEVGQqU2B71Q66nqUPDwRWFrak6",
  "key14": "4PHLBiSX14BvtzpQnxPREQVcjctS6xgAytSVtRRJdCb71L22xeK3dqnZwptTNMJC7ZbXz646PWaaS8nfkjAWYmFB",
  "key15": "4B6LbMbaXozo8JFwxg29ETVknSgemwCWQJyALd3KGQ9DwVUYZkYHDTRQLK8rYjYSe5vL9ytVbjd5bUSFCLW9MA8b",
  "key16": "3UBSJcijyweXEisJLoyMS7htiLEAwbyMGZake4JR7wHU3KBMVCesLKe2tUamqRAkQiVHyNiUMUn4khm4U5m7XCta",
  "key17": "3tCRDLoV3JvqUzRxzQLHvigF5tAitqJ6WNJkWAajHSRKES4ATMYjwhGNSFvfDPg6Dagz6S7PRFH2FkdqZdREJAuK",
  "key18": "3Vix4mCkVTv4CU6fcLGk99nWiuZu7eSPEj8XhUPMA6Y4yfMVdZ3xZLhtAfieLSmRduqFPRUJBiVggfMp5A1dK3rh",
  "key19": "r6QLqYCVjJj11vPnvgR7g9cZJmzwCUXRDaj7jLv4pCPQZsHJYX6cJwZ2W2j2ME8LGwnNv8c73u94az78AeNAH8f",
  "key20": "4gVMRKRmgRekkaM9NS6kMGp57VzCiPupy389b7GBQue1MCgNcpW4qkh8hZFPuE5L9yyCn63UCo32g3PpdJ7N4Umd",
  "key21": "3wtcWaghCLH5JUhf9E5p4DMtE5AgLLtiwb49thchofkbH2A8JMNUvAiNNKUSykFH6bHaH9dB1gMrinkD1MCLegBo",
  "key22": "3RDkHXc4QsNeCf2ZWpPEc9X9wPxTNeFtUpoVdnzQGk6bpPmA7ut8ecGoJAz2QsQhRSwQNzoN8m5t2SybJWbyugyH",
  "key23": "2h9cRmVvpwuJrV8SuCvNSxyNmunqt7KjEKjJFYRoqNuqXar2wX7ByCEDdtZKyorzYvTJx2q6EVxNuW5kdLNrp7yy",
  "key24": "atE3a1z4uK2xuHgJrzYtLCDvpA4YT6bcvkkQpS9Z8YXN3JTJdiBKUe6ifXa8u8KvC5nUWts93w2mYw4mbvwzKg6",
  "key25": "5QZxjvqzfqb6PLTDaKwA9iWP3FiSzoG8mK8sqnBmE1wZYCDxQtwHs5Zju4PTqXD7kZ1na664yzs3bwqYLoi6V89G",
  "key26": "BBvkEgKM8X1nNe4rWKwhVa98zncAGiEe5b6kYb8rQdhkykM1rWt27eY8nDR5v3FYzmwHLKJyXm7e2Y7iGL5ghDY",
  "key27": "2X16jeNEgy4tLTbuEHLjGS6wNa3BEAn9q4Dj5LgBQcAmtgSJVdPrzRRK5VSYciGfjVxkyoo5thHegtwsHmjcZScC",
  "key28": "3TcwGwz5HLEK15QysiwqcjfcX6hoTohnnZBubQNabwACkqZG8VFrSbVxQoB9cGsE1NC4QzuN3yWXMhhYnYZtLWfc",
  "key29": "2kCnAEPjo2AAEFp1c5Ty6Q6h2u9bz8F5tzvX86gq9dnw5mxC4L3aY5f4pFYmPQgNaH8tuYtcPFUxpnDWSmrgP13S",
  "key30": "3T4wr4snhdv5F44AW9htoaFWD1EiWo1cBHVELwjJHsKYM6XcwiuyB9icTTG8GEajPBHR7GNy3u9jeD8pXhRPfm5W",
  "key31": "3DR6og7Cchr8DgeBCq5NWUMB2ubuNBVbxNucFZnPebGskcEXSH8mSWf8UQkxeqqskrMFGySDDceVBHXmvbDnmLpq",
  "key32": "5uu7qS22j5excAHSNmXG97ex2MaFhKYnTnKbppUxqiZZD5YaYxqcXphj5jthsfxoSyJ8yw46kkFMBVfBx3NAe7fi",
  "key33": "jPERL1xiV4n2pTtMt3LgoFUpfReJo4cYcAKBfBdDzQspMWh21C3zEdywuAin6fB86Hr2H7GXXAYKjb2oSjEeTFZ",
  "key34": "4Y96NBkniYNriwNWUAb1AYwNC6sum9K3ctfzTjPit3MF1YzcvititR19Jp7YKZhz9sk5NDcKgWx3bs9gc76wkRyj",
  "key35": "3jJ2H2FC8RmaxGH9uh6b4AFwEDikCXmizgmnugpfDH11g9DM24mMBiszXPJSipZKZg9d1XgqoTuu1bwARef3y5ts",
  "key36": "ogCT52H7hYpVNxQXcy3MHmN8MVFjCjMit6WSWdakV89XKHEHqKXrfSoeTVnjbxmvcnrwJq9uN1RbcXnB5pUk14t",
  "key37": "3Ptp4zbmvAHmTcZP5F5qPNZCod9A4xbD5QRvLUqiokNsmxnEKpH2bRJfxUKTivkQ9RWsagRUQ8nCkKFoQFXkq5Z",
  "key38": "5X9tDDH8NLr7437zwdwKzS3ZQH3y6o7SLWen6ZmCSwNuebsQ1XM548ycZJZ5pu7ssyUfeNAmrz3bHti6y6qvkYwj",
  "key39": "39kudV8LRZMfYLHoHQHixGjAV1U9SPHTvpprnHH3J4NH9gjjFHhLebYiCNjuTP54ru9Nn7YE4hPZBd7RaeSaJ2qC",
  "key40": "4US8JBj6M45pVn2CoXUh7XqsoFEkXYaHcdMbDcCFG16yuotvuD9m3gwG3eXxvc5PfHr8v6BP3Ks4byWAMPX1DefV",
  "key41": "3nfYQjNqk9fHhaXcGhZanqi2pqyec9FYauahrovy8JoWc57ap74Fe5RCH9UAUsJJUPdzbS9j8u93nJs2v6aLZGa3",
  "key42": "5QW29fDUVKm47p1e5RBFDUdSuH4dHtvy31j5vMBpM5xZcoX7xEKv8tECwLeCBTYZAxJJZxPcR8SGySpS3Eeci4zg",
  "key43": "UmTU9UtwxVqcP6BV8eDXEErVb6dsYwZj6pSBh7u8y78imhK98UYFYJTmtiMpDp2BgRA1a8SjQBjcAdQrkYkiZ2i",
  "key44": "2N2ToPeazzo9qPaaaWokKFshmr9UvJpHeGaTJmecjL5e5m8gtUBTXvrBS7HDKk9cQyVP7QbV2YktK9tzV39eDTEr",
  "key45": "5onsW1hbNco12NhDyvm1UQrXg1g8bsNavmfci8mRjFSu1YWCEFi8w9bB7CXhmPjP6QBwDzfyK2M5nReh4cAerhX7",
  "key46": "wxungoYg57BNk1qiaQ2YVNXg6YLwT5ZZEpGBeL6ZGwLhHzAdRVeLYJWS2a9BALsHjmcvfNH8r7YB2TeYzGLUtvR",
  "key47": "3a75s1yLEcnEMhu7CX88yAW4gRHiJcgwPo4gy2Qgenpa7JxJHsFXSwZ5FANnktGd8dBsbmQRMrkHdquj8JZLwJyJ"
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
