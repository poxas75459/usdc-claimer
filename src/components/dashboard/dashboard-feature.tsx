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
    "5R9dPqFMxkUcZi7DgPoWRZbSDwHqGSVEa8xh4GK3iaegqTMQpMhDAL8hAaHUeCkL3UmDgSthriAvpNGDYnicyz6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GuHT3ZK77oFdtfyLUofQGiZmsksDMQPerqWCm7tA6tryyRswKsWtoJWpbJjBqZGii8TWDBmTfQHRUpQ3gGUR1xz",
  "key1": "zwvg9Dwu81sBHFYFqunSnScFuXTvkLa9yVMUFR3MG5gzEyELh2AEY5fR5NrYUqsGR3fx4n2S22tx8ukykwtGgAf",
  "key2": "W12UdYR6uprdMabVQkoZJjMhhxYBTQtkwPokpS4vahn4u3ELFipE8644y6KmJLTSzG8YZmej3GQfdfEmib7CwKZ",
  "key3": "2BiyY9zhzAkNbin24JNgnWQoaDL9WFhdFSN5DgSGr6DH4BtmpM1zm26LHC2T3V9angao7WXUVT97tY9tnLE3Xmo9",
  "key4": "3WGxuqJ9mFyjaMzddm3wWtY6Go94XKzr9j2y1oWRqb5NW3MMvi3UQ8j1mk4NUR3csxin7UpMjn7siRaudKxJZtDa",
  "key5": "gtGtA7jk9orRXwBZpPmQBpUzRg1DzNG85Gfi3nf2bnX6VcBmugqddE2eMA4fwZfjh1N5fzMyF1o5x66pZAp9CHT",
  "key6": "2jP24GySQfRHrexvkoJbU9W8vaMAcXyvF9UwrUYACugMcfP4V5H9JE4bkJDLKyiDS54fYU8yDnvp5fBxgScH7sDv",
  "key7": "2KoxQBFkxuKG4YP3cSkUiWpBdFG2ZwVxTe4F7C43Jb9yCUBvJvHH2K6xyEZaK51fRqqfwtPjE3Y5sy9jtoKkFLnT",
  "key8": "2HeNgEBWGHJHnGewB7f2PAk2hAkgMtnmGict99UjgYrbeGFhqNRUQvHV6qe5iBKahu2HazwfK5SELiftdPX8s2iN",
  "key9": "83e82mn5Cu4s263GYCS6oUTvEfz2eTk6WqUi79uy6F6ZrzvSfppNbA6p25Bmk2FQgwXbQemA63hBV87zATAGsWt",
  "key10": "4NdzUNSsRiDqLNdWZr191nypewNiWfoQzboRpQKeKGPqzE5Yzc44QY926PwyoAyo9V5Zmc8Vc4hLmtigYqkbFg6w",
  "key11": "2gUzxkRrYHHQPjWUpoaL2q4mi9krX3wasQvnJ13oSY63J6RMyENQqPYjZ36v1AADGhpRcuwC8g3nbUGCsMP5F4hF",
  "key12": "3U6USoucm7vnx1JhnjdVpuBg6cof4zFzJJB7yfofrDW3vWGF7ESmpqh8Wq23rbhyvyEj2NjxzzSdfkZ6QSuu2cFc",
  "key13": "4ybGzZvoUkpFEK1s7yw4cFmujnexzat5ryTgc6fuJqGMDNDsgxohG4oyQmjA1hSFfT2ZeBfN9KmxLCXwYFrg1BWy",
  "key14": "WscBazAEHhKz1J2H1gdbqp15TT94Hj5pqcG5m1BzPjTkthZ1TvTDNzRHoChUmv2ZsnFhNV2R5qq4wjN7hxKFHgs",
  "key15": "uU9WAiXECBbEqjvkRXj1SJ8e9VvQHLK4ttqTtp8xV7QtWk7CJTQQ6oHJQmhtVGHsbWB7keptE97madBXByDuPiT",
  "key16": "423kpxHLKZu8i8DQLWMpS1Z4JebvNrcS7moKcTcAoXhFB4wu3PjUmqnvG5yTXHHkZ61rz6ksEVTw1e7ky7LCvCx1",
  "key17": "4kMkcwvQZvkjwVdBXs1dXSQwcidKyUsdmmppEfSmqMpQf9XHFQFhdbvjvzREML3t4pqmXYvcfRT1H3dX7zYisrZZ",
  "key18": "3VNgeGi1vkuftAzKSoPXzx95o8JtNXX6M1kZZDmnB2A58GoEh6U6kQwSvg7JF6bnmTcspg9y4VXMrgqdcEofqoec",
  "key19": "2sVdHhRB2XF89NpMR48eBERUh4qX2nCVcyEH1jRAoBNnrzgpH3JuZg2Uj7pqHtx1ckaWLLdR9NvotdcZG35ieCL",
  "key20": "4VVXTyZpwqNNinQCaXSc1rRnK8wwK8zAa7w1hJ6wgEibumqdtj5RwKCq7u8v8RSyr7p5SLHc8HHeoaVMmjvQKcGh",
  "key21": "CE1333rASQsCme3D7qzJWu2pL1WooUTK3h5TxLnHdKhTMqsCVpwBMrnZDyDXWQ7QgobA5sBxBjuL5mSAT4jCkoc",
  "key22": "57AyNoEkWGS6Viu2vxALRdnSx3eFd295qE7ra1L4tXBAQE6FLLXfRQjxtfWyDA8nsvXvpz9jdT9roLo6NgtfPtqy",
  "key23": "2CrVs3y3c2mzknJDPoAmcPzUQ7c5P8g8V2eGcxK9mPLQ356UsYEjWWzU1pxpT8qgM3z5J1avsirzx32HbMxaScQK",
  "key24": "5mMFFs3o46t8WshycLXBvxUG79oLDCRn8ct2onNjSpuBNxPXMEwERPf3kLSKnmRc4UaVKS5g1zNVvn9uvKN2DNC8",
  "key25": "3AUqXXLAUUssQACFZ6bgxXgfqBonjVNPTHYsm1chGwJXkNhnbstyhzJstz48QzZgDXZXsm3pRCtRUcnFoykuExu8",
  "key26": "2KS43LdxZhh3wXdpqwYg6F8BuJkeD1KtFJ1Fye3jtdzavs1oEbnWV5dPfjUxDL6gZFP53EBB14jzHeBQ6mw5qpzt",
  "key27": "v8cEKfoVkfr1PiTNnDcho5QurWTesTFduXN6GMBpzWNpfjQ14x4ocJAvJgREkiJvZzGB8iAFqVSpQG1WJC7pBDD",
  "key28": "2W3GBTRw4p1bTg5BQyNw7GUmyqD9V3QzsNmdJ8McTqYG7Pj6DLdkjvUxgBtCaJcreoNR7rL4BZbsqjVD6CbnR8ir",
  "key29": "2MsMsH2GKiiY7ENuSf3rufkBo6PUT2qC28MoRgKkBpS1wJFajsnjqtWU173qwzjUMiKEj5pssBpSyQ615Aw6JRHF",
  "key30": "ZtXjApwP9StNEs3cn4zBc9BpUDnxX8gySatFdzcRY6Hzy67H8f8YLnkUDwdggtRGMu9dcMqBMQeM49Z5Lvm6pce",
  "key31": "3Mi242KEQVJ3WrVrdS7HQnptRRshAoHBwxjkKCGwRucUHBBurr2hd6CM7FiwYePL6dvnXQs7VRPVHi1eAnmS5o4P",
  "key32": "4gnqz56PGRvEq35EvxBC89EJKj72QKsigtL1RvzXN5cKjjxju63AiHkfFtVXgqgnTxXV92SxunTdZEQjD2juUie4",
  "key33": "5nwJGKoB8hcysYtzwnpsUNygXwM9ZEuPSA78WHKrjvVfCaTXZUpv1zFXbmCGaSHHtXEtX2dt7noMKPkQ2HPfqtSE",
  "key34": "5BPPJaP3tpFALQSdbVbNc2VfsquqsHxtdRfFrMpRthoFfqf27QGuKXpCQgQi2uQhm2MBswux6mDDDeH9YnA9Q3Ya",
  "key35": "5TfDp7HJArKmJdvSKJyfu8kUkTBpqG8iH5na3aSsEZkdFDS1PJk2d8795Yj9TUqSxRyMgypGQPnFrLXCrMyEP7JX",
  "key36": "3yAerPwwo92PRtPGub7xH7y4NHEUJdxM13N7f2XX4JbEBDaxMZ4VDTku5ZWSj2Ft8CRFHFCzpvYS1AjRhB7yreKW",
  "key37": "4kactZstdyEQxN7tVJJQbmt9F1ysamZwQebjuAd77aawiq2JXwJphvnwL3zZVECTrwkCKTvFVkdqXThEvjMxT4Sa",
  "key38": "46qftMxidskPjRx7xM6rnr5hWErrBRreRYj3nEFR8f7Nd72oerHC6KCWMTUCCbopS9VKPdTpw8aNQkze5hHDWNQS",
  "key39": "2FFQvKZ4NtuY8uhV6P5D6X2x1amPUfCdpd4fYeHzyyC3iqBXMk17fMhdpnLiv4wCdretLGXTChNLFVkQ8QKkNMxF",
  "key40": "3VBiMDPuKcz2iwnP4t9omnqd1LoXX66UXRaZaVaMF3PHpxXpiVfXS3rYXzdJBBSe6UGUEFQZf2psZLVmyoa318LT",
  "key41": "4SpZg7BJCAhiRMNfZFUbTZFVWbDzogCSEPP3Re5a5XQAuqGYV3vFQ1kSNoRtTZ6fT2g3sEtoV7uD6jULNQPaXs3D",
  "key42": "3g7P1BVwDCCfATU7kfrdeYeAfXYCTMBqCASxGthscSJHKLbFXTjF7Qngeuot6vuhUKx1he6Pv3769PfBDw7MAR1e",
  "key43": "tKwdYP4YgGdyeryetM4zQq9UiUpcJDbUwfxSmyaD41PJDY1VeLAcqZ24cpApokVTWxzsYjcHa9UmBB98wbphWsn",
  "key44": "3QTPEgqPj6d1bt7W3MNuZWxMBNQWqHPJ77hTMAoVQb3qyF1roTWCSehBjx2o2VAw881eAomaKMCRSMiGUHSQ6e5t"
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
