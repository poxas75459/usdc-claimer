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
    "5EtW4HZgTH6esBH4n1oXryTpE9ibJMjw99oSFiLe23UqYNKufA3SCsmyMEWH9P9GKAnykSVNZCtchfqeKcW7X6Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45DeogMDnaCkY1vzpBMn7h4abFTLrPDYYvqufyyAZLsQdrxtPdk3q9vc11JeH2ESrZinkBAvbkbFdeo89rBzFdQt",
  "key1": "3auwJqNxpvjAaaGChrxbEr5PJefJmMHrSZH1T1T8nqM14E4E2DTBXED4X714s8i9S5SPwrxko98kgaa8gCWexcLf",
  "key2": "5ousNW8DKigrSSgLfcSczfp8rpZDgbEPvuysspp9AypgPdJ8bXe1ADkonqUkLv7Unvg82kqcJ692dLgNuagwiAGQ",
  "key3": "3sAEwcgzr85bSAPawbjD19B8MmMPjqtVudWwKfpMTm9QqeHiyByjjnTTJAkhVKMdLwRw53PPy2PQNBmCm6bCBxJ7",
  "key4": "664N7JCZto2ctUSBpbMggjCkiURjjmZBFDgk2fGquv3rTCK9rEoqUpo7jQdF9YZoDKjYCbo9j9TzdmoeLT8F8buG",
  "key5": "3k1fYpSHCJSt751KpJDTsXtAx5UUmAcokuPEPBectZmXjjbLNDbxcH8YgmSrwDkRUbmZWp46E6ckyvCQMNRZ3v9o",
  "key6": "3od4yz441LsxRbLQ7Ejf5b8zJ5t153MhdbNE67M1Umwjgdi1MswxmmLuVrheYnHWNo5AHv5KyZkg15FD8hM9kAWr",
  "key7": "4QsLY8oKq98qMEoAQuUy5PwnL6yq8X9Qhk2XnQKTm1bT4QDwE4jqFro85oE4m5zWxZpau9xfTNiFBRXsrwaR4mM",
  "key8": "4UnmxYJtngWEsNbh3CVXKA4Zcsap98GhXzDEC4uA3KB6VRCZfpBamPPqCXJefyQjNYXaNxbQYdUGFykiqUaZHFGW",
  "key9": "2jTCa1QGHstG6jH5VbJbh2tFyMuqHHfs28MJPQQ2ea3wBkrkgNvi8Mv6cfPL9VZWseywKu89tLh8X5u1hgbkCcHZ",
  "key10": "4npjtEtkZdycgDPUfXGhcLJSrVtyznbbN2EqhP9RHdbQ3Sn9zGZeJc9CZyWCvbvkZdBGchz26ehTtyqppQcAPAc4",
  "key11": "2v9d1hW1sviGx9mbeLLy2gspUVCDP3FTdQT6fRC8QDsP7vgtbxG3WY8CvYk75KWTN9qajNEbxWjsXU3kGfWN4Z8t",
  "key12": "3rTHX29CpEvRoTLvyjEhAFTPkwxN97LyQrz14dyU5bM3w7177tDCsPXFw7VULGdzRGjrbQ2NVPbeM64QvRp8qkah",
  "key13": "3DMsTGMVP5p6FU9PVZ5PZkSTCmTvCkGHK1Mip16KrpwabgemMh33e8Fr2tcgcCbZ8R1rFDsXJLW5qDRMMW3W1L1Z",
  "key14": "sYXYB6WjSK14JTNkzCFWLBQ8VtcTRw3cAfwrWKotZsxRqDYp6yQBmw9YSpUB6Cqa5JSXXrBqrV6rEeLaTxpKwsG",
  "key15": "5TGchpRNHqzjthnqf5jZiqC5ubUQmF1cCrkbPXWeXdu9cFLriUGP9wMtpa13gC5W5XdVVfjx8zUpoWM7cABMakPM",
  "key16": "61k6moguj5ho2pEcF2paJzx9GcSwqk9ikHsEBLeZWttqM6tBoJLuJuNBXegu7GCrT2ieiwuzYaR8pwH5aAh4orW1",
  "key17": "4o3nCDJjArsDnxtcFe4Xd8BQ81HsZPKPNxYn7rkEatCZkVHvs7AkzcRNZ7U4b8aV7TJyjdpHpDKjiM1AQWdGT7Ri",
  "key18": "ireQ6udvuw1yXuY3h1bmNSDSKbWRqwNeMjPSfwmJ5GJqHeTVERrf2qdiEn6vEPjCrKsQPqg8w2ygoXF7namuRMM",
  "key19": "4zeCLn1TgN7FoLtJgcAgXKnNjuxtYJzwsTCD1XLNAnYB9NWYj7fKDRQz1Gs1iwJSy1915VcB7cZRJAVe4PP9HZtC",
  "key20": "3DQLYFPHx3uAo3Y5HgFnociANWN95skvLGYJsXtY13dxVYyWFqGuyoq5GL8YaWtTxVHBcYU7KYqbCqDsR3znHcD3",
  "key21": "4KzCTbrocWKds8snrdfrgg8EvdJzMfHQ1MrAjjFhynExkKuJe3bWAy1Ww9tXqKWn9a4hruUPnTwemLSRB1cdZU1A",
  "key22": "2YBK9Ges4W3VXRSCtMebeNaVZqxWisRtGEkzdosUVYzDttdvyZUQDpwkfesLUvkBJPiUXMcz9wENMWDH2VKoyKrW",
  "key23": "8bvkbRcA16aR5KEf41AHkCQiTx5oikA6h5VPv7Locuup8KLJq4e4aqYGkgUhJWj4ii5vj3HoW2hTpV2UL4Jgt3R",
  "key24": "5uypfMJxVC7KE77L3mxbD7VJAsDPKSqrzqiA971z5dHp7FPKebqDNhLsfyRE1W1C8QnqGMsjPLw6KY1MdtKqKVq4",
  "key25": "5kcafQWAa2QB3t9oFkpwBH8Pne9gwqb9Ti4VD7FAEhdKAuq7FhNNnGwXTwTTC4QUWYsHeVgmMbYA1AukDcC42Eso",
  "key26": "3UKdyKN7EGpNCxko4HzQByz2B1Dcow4X9cvQu4AaWq6bCTHiLv2dTKFr8qgfsa5J74r1qTjzDC1PqpZmNudSUtVg",
  "key27": "54vDueiWxB9jkBZoLjuUkCrCengpaQLcdF2PQfBnXoJoeVZHeDwFqXamk9oPcJzCDoHPZENd3zJVbWDc5oDv1HVz",
  "key28": "4Miz79ag3Kzvyb24XMqZG5UQxgdsDBrJNpkeZfajjPtkdauKfZP9F5uw1Vh1LQp2MEkdX8y8g1qBKnkcenSwRUt6",
  "key29": "3NtJpwaEa5toKRYhikN4fvkPBzDt7mDBaJZLUFb4vtRiog2qPGTH97vERagrUnrHkRVETFr5pkkrgBSPUkQeLvEt",
  "key30": "4yNMF937ZvMSEMNGb3dhSgpPiY1XDa1trPg3SSGJxHkf3cJ4yavPStPtfVZobH5z5hD6DwqDo1m7FP8PW77MJojq",
  "key31": "5ofpFXUbVpaQti3922mK9uh1T8nYi7ACnAxjkzHR9zoaFxAnrUGteF1dDRFsLXWjVN57BszmfinSjtYbVHb3YDP2",
  "key32": "5WE5e7nPWCTAeENvUbF3rEHhsxRMurX6tiG2XiL1LFbG6phuM78s1KQAWvW3HkGUhikPiXUJ8ouFDzD51HQWwjjc",
  "key33": "8GKVKRJXqoQBa6fjAXCKLSjFKdc59Fq173NqbhZXubAZivSb8aoMvxwmsqL2s5GjYia3D4Pgkse6KnEr35QGSBW",
  "key34": "2WZBCuZZjhwf7deXLo7J7ERNCBxgkFzFr7pZGamuAhDmeTXapC2cyyVZkDtvZ5p8SjDK5XSerZynsdTuTxKf5too",
  "key35": "B6qmFdst4j2LYZgCWcYu6sVXMyZ397dyMe6tf3MaXNcCNyT4Ej771wQSnXzbZcvLERkAicdKANcS6Ze8KdfhRLY",
  "key36": "F4E8cd2LkjJhCNwV2nVXwpkDHAMt1MfXeBboEgdKgsQfzs9xJsz3ArfV62KSp9VRnUT31SmiCKo89GvpsYUiwPF",
  "key37": "2yS7eqBPqBBVfaVERERg5qdQkotoThcP7udUhXb14gnYbBw33QrhTViAVru3he4LtCDEfhrwgMhAna6Q4Pfbi72J",
  "key38": "2pHduFwEK5q8Wvs1D1s1bEi3hsjQMvykxv27Bh8JihFUB7UTbvs4Yts1zuzzvp5zgCjbc5azRgkGUZCa7kh6sTB1",
  "key39": "5vNQEvjy8mS6sveno4mdQrR21MZu3jadhtaLDpeAuE4LP9P5nkmu4ooZaFhNBvuZGTA9gwQeJxrQWo78SSLeConW",
  "key40": "4xKqNARyiWtPMYxrPowNsXBzbozam1GMsqPvPGK42wCUWHfvJzyu8PmW6hwo9ZNKMMEpqnBWjBJHdSvqRNrv6YcM",
  "key41": "2LV4szLQNFnD2fbzG1K5wQCjqxKNnLkv7JGeR8FtuWPvi5huqG3egLD89BhKrXiDHd3at9BGyvSvT4WpkQef1rq3",
  "key42": "2VyVUDwWS7zuWy12EAbiNsba49Fc4nDBY81nHB1Ezn5mEYKzu8RMNp8pieFVAfPbaXsaohGQEYQRxrGecbvc74Ti",
  "key43": "W2fGJWXUy1ttpA9nQus7eQw1Cj4naNGT6pWpSNXzD3DZptKh1SdZxR87wNxMK2nTCefC6apqoZSdvz5EzuqE6eb",
  "key44": "3YNAW5gEwtNgAdJ6kFH3FpLxS8m5CEWxLamhBsR9dG6zBU3TaxgUHDLG5tY5C2KgQhUEW8yS8w13cU7x7X1rVJ7N"
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
