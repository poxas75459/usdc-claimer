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
    "5XedTxM5zsuerrVEasWsW1gXHQpsqwFoKqDG2xtzUznqE7ucdAC7gs6kiXpic2bp578tSJQaXVovBYLYG4z1nAMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tYz4fPNSGSbzvuuwKFWGWQStkVME6xjA1ArQttu7Xc3GnSb7aKrvYhH8vdqrEKAwVMYn8hvEhE4gzry3JhJbkGc",
  "key1": "4sAoxUZy3wpPzpH7tavuE5rXATJ3pTLWS3txRHJwF4rZssPD8e5hK5dTH5RiD6px1fB3fGjx4R3wYbXM9A2iqoMi",
  "key2": "24kNXK6HEDQMxXHpyheZk6S7oekywuWGceU35xX5pezr9xBvsEXY29kvrEoYAGDYEP8zcsgyb14LkvKUbqEyAHND",
  "key3": "r7HfF9GUeRwUKBrEFtCcKs19hqKciKTK3UPLbtUpdUL6CSQ2fibmnSt5xL3YVEYSSQ4fXgKtkNTjpksMAz5NrpT",
  "key4": "4jKyoXiNNpnmdpmj9hv3TJBR2uGdtnB75EY55JtUoujg9r8VWhANdP9udPmBHWfwH7A79Fe7RQgBse2UDrt57hHZ",
  "key5": "51ubf6uD64SSDJdqRm5J3sJENUKEikqzuPwQZUjD9tNNvcCAZogv8qsWhbfx5i5knSM92cyvgbrnckGChH7GB5ey",
  "key6": "55tNuTAd8PEbJsyXQC4TEkB4uzRrJhjKunTSHrLndqGHqe5xyrTabqj83c1qQ9vmdGP6sViWbLHpn9aF6X868veA",
  "key7": "2dm9rvGgzubGaWAuCgrF1s32D7DJRDkDs29epLHv1ooiFXx4mLDdQZn62nfT9anHX8VScpejDpcqaASfgeQWfwko",
  "key8": "4WwhZVrgTiD2NWPToj8fNvW8LNG48Z3CFpqADpGWq9qS698n1cBFjsHXYjA8uZETMtnegys2NRYbpZwx52f8XvEQ",
  "key9": "4hNXxvV3aujH21zwDxtdkVTdAgg8ES7KoEki6WkWYnDDmsMzxENetyGUJAYBgx7X12UBq2UmBXs6qtgFNRJoP39j",
  "key10": "5Fgvk2qbu3NaZBCMARd7mFbogtX618nbRyW9a42nXSrNa7tYqDDdrBvWNVfhKDwtWwWnaPZEBZeHggN7ZrsSWLGo",
  "key11": "3MZMzpVcHfmWRVvLzR78RYWhen3eoFqgbYhqHdnRyHa7mDw2WH9KxTuxgTzGrkHmxSXPpERFhbYQKcJGugmhdbrQ",
  "key12": "PKvm4y4fs7HbQ7iNCEhjvof3h6RgZLZ6TdSEmovVKVcGnBrwft99M2mK5xZ7QV8mmVBKwhZvZgv7UxSwHqtQpKS",
  "key13": "4ta1PTAZCfhfKsDAUttPnVZcZcy7hzy9RAKZwt2XWWcudycaMhKEf93UA3o9PmEff9hfG9SS9WymyafX2dEowubQ",
  "key14": "ybutbJs5CRaZov2a64NsA5Pv5UEidwjmuqpcPp2si4oiC17D97vu6W6w3QUvs7ibsK8DJnV1UqVFFFfVLQ3qVsT",
  "key15": "4kCcXW1DbqcV3CJnotMVAS2udsSraKsVJUS6zFfAgKtceUeQgq9nrgc1Dj8D2rAW8fbyb7ub2spTJ47aRA14kH9u",
  "key16": "3fnAZvW6i4hpfvg29hhHuxCk5vq7AnGnHc5hW2bjZ8j9kXuhBHDpDwm2pYz68NKDLK9Uqzg7yPjMtc8mZrJFs8Hv",
  "key17": "v5ttmXKtaaaCtHddoLFmqyM3QtJL6UZYsVrzHFkDyrGkmy53BEYhaCJis9ujZdsZRmKtiZ6T3FofnZ4yxJP9gPE",
  "key18": "2npmgPY8zDvvGEm56DrCLpiyygkXD5NsMCR3D35X5w9tpohZeS3WkERaskN6xDRj8ac29zmYUajXLHmYjFt9sBk9",
  "key19": "2v8y93x2JnxyAoSkESSUAqtQ9sJD96xLNu1dn8LfYhiw3UFdeEM4ehrh2eF6K1Z1sVHrHqsc1WnttxfqBjFMpiQK",
  "key20": "5UeRcqZiKTkfcB6UfhFZebWun9C5bWRJ2vspCjmggxSpXX8tnsLzQ38ANgJQ3EhDcbHVJLALk3ZKwK4FzJ8GeXWm",
  "key21": "2TowcenQxESfdCY6cqCZ4aGPeM2eV9LF3wsB5MDHnk8S83SptMvtoYUypZbp8feeWXSD9YSAXzBpfSuW4WDUEKGA",
  "key22": "2zbGgwciKf18WWUX3RUZxVw328LngA3LABRa6oiBBnMyYYugYzppyH43uK87dQ8B9i4mc5MMJyknt2VocJnd6wof",
  "key23": "2jawgQppNNszLqcDecbEonHEizFtHEhrNt9Xmmw8Q3v2hQEJRTs2aU1GpD2HaxfvBQDAxjjSYFYn4xeBa8WJdWcn",
  "key24": "2mD198U2YcfqW9TQMQ9H8YBTJdxLcpPoUvbY3fKNMBC1ae3BEEb59BsZf1KAt1kHw5A4ktTbKhHqYPpx4tb3n1g9",
  "key25": "5ukUXSx5aSW9KncBLcAj2CRzqzaUH4tyQsFzed3zCUatUKzuMBgcRZGSd2Q8H6XCFJa6HZkv7SHyAfZkgAoxHdda",
  "key26": "5otBvUhxaCrMZXgnMLhDaBLnoPC7uTpGXCzkAdsJTTFFmcv1ssZmUkKYciheLcoUxXoUsZX794rSNLYU55Krw79k",
  "key27": "2u43UFQUQQKDCJkjVLXtDGYFBS2wGQ94Ajb8v6Qsnx83EBxt4iAqweLTamTx3T8WG1D2fVWD9DE2CzuHtG1mkFpH",
  "key28": "3osTSg1DZ5qyvJhMJYn8MwbUMSUJxN3LCEz583MZYFL3mk6421UjMEB9hEQd48FEghHewDPHq8aCp8gqC1419SgB",
  "key29": "dg9pTBJeYxLoj7RcxFeKsfeTAhotok4exXntHAHK8mJYhK5jnHSvN2UiNwnAAQy9CJSEhh6jDUgwpwa5pBJPmP7",
  "key30": "5vksd9EdrQevwjxk8k3k13S2CutxZ4XXDhCjRAZ7m4s3RtNth7X5sbycvrzR9Quvsp9yYNhjSkkSzTbwcM2qd44k",
  "key31": "1BFe4UQ9jGP6cxGNgFRdyhbXQ9e1rf1CRPzUvaypb2FsFhwzidsZqoQRWTFYPuubvLYLiNXDR2EcqhHFiE8oQzc",
  "key32": "4HEkCSjNuxA5d1Xi7Qet6KhdWPtypyVLDHvYygehbzs4zh7yeCAcP9e9qDr3mrzeaRCs4BjmNupAx5Vqa7Yaz44T",
  "key33": "2ZcwvSHLqdYRf9ytKje7YswBHvF9ehxmtxvQwDKfpKqth1X9jZmB4mcNPznw3KCUT2V2yVpMvE9qhKC3ENn52gRp",
  "key34": "2NqzkrpcS9msmzihukuxb5oCL4bt7XebdKx4gJo6ELXnAu88Nh74GUqEZ5XMqm91hexV1o7BenFfUdp8a2DWS47F",
  "key35": "54S9fwmARnUyWmVo6zWy3HHke5V9aBMEP3MzYEvqJzZHR5sMcTbczfN6iePXgGRN9hzanMpb4wfj3mL9EzGvcNUS",
  "key36": "3fYMxXNQ1UGf1k6f7ZsRRs9AV65iovKStoUF8KrC9kNN6ATsLPbui5F22Wak329RD4fDtcn9R9D9LHVYtoWCp7YH",
  "key37": "53bwY9Zzb5hyG81yXpcyszNGkwwchptEeWDtxoeKBsnXitdvdBNGhebtiEtPis9TKdnEhraKGFNGqeLh1TXpJoje",
  "key38": "C2CS8NisqvWBzboWFNvXMnMn8r2B5sp3SmrvN3TC6VnqeBMS3Geb5dz6D5th9DPJvPAZLwc6ukV4ysuQcYRpBjs",
  "key39": "4zksL5A8DhWkr44BYAhyjKfK1CVD6uLchj8yMfbj8VFnNxyQg7KPuy7DXCAfZbRJJH3TvGkreDaGegDe99zHEfk3",
  "key40": "2GUvCw1ydqRu2cSUCqJj51kHvDsfuKsC6Qj4K1ZTPM9pypT8yiN4yVNQz2hQPBkKgLdWqLwad64pD1mqHqGetXm4",
  "key41": "31zqiJ88aRQnpR5L6baofpdSUwNE38pYXvuhhXBwDR1rF8z128p5DKXfXGR733JRF3F6SP3eHs1JrKGAa8ezhioG",
  "key42": "5BYA2Lhehm7WD8fza7fKVdLccYwNmiuBhUN7gRkDZaqqtwj8AkRzuJks7f9ruZ7NquMG1F7cgz4KDacbwt48zZTo"
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
