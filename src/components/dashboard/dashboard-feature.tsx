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
    "5C5CaR3NRWxS5JU1ZerfNKdKdka4XiqACwcfe8zbyyPKDDpAm1tH81NnQyYskGzJJ7CLfTLBo2xiSkypp4rSS8XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33AL5CkL1ufGnzqWZYT2A9r1QxEPumcQGovrTVamtvuwk48JW17KxX6APW93aBCCCqnuCD4H35JUGiBcEGRgggEb",
  "key1": "4f6irFzFZoggCEULVbd3bspjCbFK94BDvHsZd7p8awXjw6T6zY4rJVoKp7DGbU6guwQ9thVsoDw7bx3xRajD3L87",
  "key2": "2tb1MP3SuwSJwwQURp2ZBVCP9xJyfJJxP1tieqst65VaGryqsh6zGQVz8wSYh1FjBnEHuikHUVydnmuF9meP3QaF",
  "key3": "597bta4jZE41uAK7FPJk3TLNxw2V2pdd665FT995TJ4SVcnrrEywD8y3xmGLrHRs2MNTgVKm5pTbzda2UYFh48fP",
  "key4": "YzVyacG6viDg4dMqeFiywtD1Ux1j5JpC7BPL4iq5GC7D4n1evBQhwQgF4j2gQ6prit74DhYy2rAkMYz2eviEFzZ",
  "key5": "4UBnsw6pPs1NC8d4ZFTEECVtWRfmo5wBZpEmgK17V4WV917AsZ6hcWv4m1nGmbdhGpNn6fXQ9Eti3XYxuF53RSpZ",
  "key6": "67cDtRVfCDyWyL2Mpj7DycNgDXqyWbBaG3aGQR26mE7Px964K3eKvk6RapbqsBiJga81n9RRcY2BM19i46BrFwtk",
  "key7": "5Xsn5fELNkpEAQd3Xiyi5D8uCre4Lf5G2ycNdEtTP9i4cGgT15sFNxiNPGg759oufcv4W5EmMb3qom34pZJ9tQNF",
  "key8": "2ojK3qV6ktoJncxFN4STPkNS8aCRxeomkf6Ue2hTP6smw3vz2va74nfGbVAqTvhi5oD9mFR8GXddXtDm6pjjkSwQ",
  "key9": "66QSwEWKFHnJhB31eYE3GapEqWfqR3aB76vR2dkaa4Nce95iCzW69ercEjbtXa6zPy2AJYe6GNLNqWFTKNMWXxKb",
  "key10": "5pcSz3CTj7akT8ecT5Y2hpJymy9gVKK9RzDD7ywjDsVnpMPa6T8Mri7sNcTD3uhqj4jZqVowpdTSi77D35AHaHn5",
  "key11": "3cvzNATQ58683SvYqSfXPDX4TYfUVYMqfurch9LGtLD4bqUaNL7YjPDzwGmUTK9QoiyL9FaND1NvcqAYN1vY1nXR",
  "key12": "64fT44pgUFk4ArmzQde1ZhunFiAGj7y7X2AvS5mE3J9yQhnNSNfRposxXwrdr77BZ4kk1dmG2fQKvnTveFZKGR6X",
  "key13": "rF22PjSzik5uepZrFSHKPWx4mR2fxYF5rcFZ6ZJBcKz3tnvWCP3JroDtzEx9BPh5UYrvmk8sZ7RiNcUVh8Cem6G",
  "key14": "4r1VuKeD5CHW5yGHNcLYHqP8pUs3Df9kGg3LLGEYsyGoPwpGWEj8haLcNZ9HdEoxniB7Lbn2oGQqvS4EzpUAGEXh",
  "key15": "53RLtzYnKd4C74cdM2zYY3UGkVa3VCgUwkJeasyYXiX3LPNWDPLSMetYD8zg8ZhkNUTUPR2aHfZk7TzmWofR8EVs",
  "key16": "5E4hd5CoEjnC3zh6EWKWokpgZfWNhnx2i1BoDdY8jZPVJzwaB1cKhPJzeY57Xb7maZuWFspZpiARr16Au7KwPo2K",
  "key17": "5F5WsszM7NFDakBKNHERLqmE4HNccbpkkkNzYgVAjSt5BVaE5bMAC8xMkPb1YxUZ8eXQArpxEXMf8j9GE1uBb55W",
  "key18": "5vagLxBTcoW6e1oSUJpySifBy4waWEg5B5hC2YpLpxEaDWCJgmhfZZMbezs8yw3v3iCQhGkYDtKdksM5ivZzeWsv",
  "key19": "keRfWXV1BLuipzXZ6A59GoLMzSBT16xwkCipfv7s1BKoiJEwZ24vg3U2W3zxrNfHXYxBqqLkYdjGYgfZG8bVTJD",
  "key20": "4dPiLXhrARXFWSGMLiqQjH4T6Ck4oYPZD3uAC1NA2NSkrrux5i23EFgFDGs2h5jgSUwb4vffCsCHPzjKW8ZF2rsi",
  "key21": "5gwh2MgvVb9wyih9zNnZWzV4QKWxQfHh1Kysbg4XjctfLL151dn3nQHp5dgT23V5vYsWPomPXeBRjPdrgV4RpnMJ",
  "key22": "4Y7f33qLKLmfJScQrCTwtZR8KDd7xBd78mGUiFPZ6sZGeps9D2b4m8UVKLKbCtXeEaRaXUBZMRoZE3C9raYmubr2",
  "key23": "2sp1PyPmXZ7K9JKyz3nGxQnye4vS25qzUTmN1K9R6XFbL1FkgDikWuBHbkXFFYC3XFreoXtvubTkrrU172p5g8uA",
  "key24": "5g5eh6ZZHXeRksPzZFA6zzcmWArJxh41WT8jyL9VHbhFAz9Hdot9E1vwSMQfpN4Pd238G1dZFpMYaMX26gn299NK",
  "key25": "4sVToqZdQ1dYeGJ2Whkg7gyT86b5JuihGjbXRf3iiTaTaDwwHVjnovzLzmTCF9qzvwpui3CjAmZefEkmzB31suNG",
  "key26": "BB7UJYt9DbJFi2BkgXHYdk6U9KCxvyez4D1Y6pav1orfsUZwBmXjyzRGY86xDvPygxAJPBXkzBvQZkkgXjk2DRb",
  "key27": "4JLgXSkfEjkrUNKPBZ6jWvwqvkEYoB4ntQQCuZ8zqJs9F8F6XTu6pRfKodwvKJKG8YSSmqEDXi5MKKbQsqBAmXYH",
  "key28": "2Nooatm2JRbG1Ba6mUP3oRMUfxWk8heFYJWAxcEUF1biGvVo5cwYjKYyYymkEug2uctUA8gY46G928kHbGTebmXU",
  "key29": "3J1JAof1MbAgVmz8BxdD5cbVniCjaCjpJQ6cQTz6qAMCNeEmSKRBypLrQ6nY3usdGiv3yENX2ythAjtG1wYnUe7t",
  "key30": "3NNtMdZX33FHjbMW1aXFaEUEUxtjV5tGrRrEgixdMZcKu1M1NN1HnMMFXNF124wGZ5P7cAoVEGd96o8CgpD6cuTK",
  "key31": "386PB8dP3SxNwuDTz7Hkb831CcuNRpjviGTuYdJ6zXPqcFe6K4Hwch9WJYtaSSTTt9X4ToT7jtVqVXaQzeKsBUU2",
  "key32": "7rSgRLLUrVcK7Wr4jMmAoEsN844G5BgJt7gnZa7VYry9NXGzAtTsB72MAMPSKhvLLdtisovi6ZanEb6r9LUGuLp",
  "key33": "3Ru3viUSmoYWr1qVSQw6LD7mDimFPb9uf6Dq5EqK4of9VbTeJcZW2Te81zTaEvp17952hh84XrTGZAaLZi3fxa2w",
  "key34": "4UsDxjQYXU1Wdj1PYTCunbfGPoucQYuqbhKtETcuyCYqn5mqM567cGbLYrX5he4yYTPrwa28cNBQKGeGSBRRyMuP",
  "key35": "WHwFDoRNo5W7iyXn7MCWKn5QRTP9yiAvJ3Dacxcu7QXuzhjRGwWt3rDbtM4UfbN9h8Fw7DskByWwsrkPD8ndfSR",
  "key36": "PkqXmHAJ8sGuEinmVqJUNYozrKopujad5XtcAGyAMc69yZi86tVv3yyTBfjArcRpxMQ2NmhqA3beKsg4Za9BBdx",
  "key37": "dDZCNWV7uz9eHLfrBcmFqZ7ShCrUzkipLqJUCNifE9FQH71pnDTKxqfsTKXFdyJrS3sBmkzCj5bxBtSSiNNnVFc",
  "key38": "BkeqW4ZGP7Df6cHswcbNY9P4UH8M34fr8gNcyykDzy5GqNxP3JG3TQJkm7AF6VxcVvVcKscFcyXw41HJJtJPSkc",
  "key39": "4P6X6eLPXgjvpYN2MDP4JHHVaWdtKPu2G7J9r5v2JDm9FyKBAGzGyZ12MabHnqu8e8tgUXR2ogTJPaCkBFyNsxpC",
  "key40": "4zdmJwrtsV1Hp9mqPNKLBcESGFAHVuNmZPirBFeySQpuXxkuJVohRTzF5vSe7sjR9E1si7kVNsNJzn1zL9nfmayB",
  "key41": "3QewUvtJRUtjgjXRFgiNUcfBhLhqxmS2wSmuJnrXWiMWzkvm7y3oCdqEooqbNi5DENUbvq36yfAfGdMnRV4HJnWs",
  "key42": "64YoCURLxhJxbXtPKpTUM3FfQ9s7yWmroDL4pATzfKB2KVWY2E2y6FUk7usFWqu4qTVu72PmjTM1x6EnqtqPNMDs",
  "key43": "2CTeSnce8HBCyofHWmvQ6t3yZSwweVm5W5kESKKkRmNkaK2nk7ekEsbfnYE22xZixVnyw3o6SXpF85v3EDEjJGtS",
  "key44": "33vx42KadVh4qrqe4emjvQVF6DEmyi9eDqnm9Dww5VqHQiJm4U5CqJHJ6kPyCfs1DxrQTMhgTvQhLHGJaMvvLaFr",
  "key45": "3toahd4mKbYQ7RNPVuknxjTE6e14yXZyYiZQrsGWuegwVpC9xcHjHiBtmp6mEvyDYfqh4s5tYkH6yo5V2DLbYDYt",
  "key46": "35cZmLtfqrqqV5DTLajjwtq2u69Hzsr2oJPRGckB6ZoWNKF6vpDBNLRWDB9ppB1ak7TUfaMHuZxbQkoyXB993mNx",
  "key47": "3d9NrWEFaAjfYEFaPJ8bxW1sAJb3Gd4uiFuFpiDiouQ9BtKUqARpAQQktsJPMG5sWx4MtRKM3txMZhfaJypRUBp3",
  "key48": "5vyjB77yL3TrqVkyHQB1M9LzkYpJA4XywQiDbtYHRcKKGuj2pjGpTgswhbbU6u6q5Ry2b6TcNEQ4oBbStcDbtH8n",
  "key49": "57RVLe2fwfjdQLZrDNuVFAKCW2XBZQJ3pSd9a6bcuK16kojTYwYWgrZGHA1H8PL4M24y9FedKfFRpWuimYeJW1mZ"
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
