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
    "dP6nmcabzTVDpgsryzymhgCoTTgVenTDsYjeqDYt2bUEmR8DvA4bxJ7x8wYAntFsnkc4QUMLaPSPk4PzdL7Ez7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yx4wjWcc7pdGbn1mddridq4qR9LCvmBZnneKfZ3K2qDfdshZxKQnsh6gJNTVwcPardS4femqUuCASdusCe1KjFn",
  "key1": "4VzBX6GCG6Sfzb3N96DmSRrtB69NVUSwRKeYtuJaZuYNNxhgVbo3g4dRaYxwhmyCzLLEkEYGAAgkBQVAN9hPLRcm",
  "key2": "3ExmVC7jWt1ZjzeCmhHB9B5JgMrMu7dd82vvAV76HNyK6N9XihXeg58C83sQivUvwQnAjLtPdzwV1uZs6pfSs31X",
  "key3": "2RZAYcXXqMTiA4XbXg4tAacbfG17aTCropFifPuYFK2BbbFmZhDDQQg1eRQxCHmsrT3dvY23zwZwwhR198Q26t5Z",
  "key4": "AEFT6AQwZhX2sSJrsDX7vgm8saPtT7TsDrE9WxS44BkMVNQxGSX4LCFGCtdFuJvxdL4L1M6SJXJ7LfC8VnKYW2B",
  "key5": "3oa29vqEXCPL7CUvuC6vSaV8oMP5yr9UjEa6mV2vpQAfHnTCQYo4EqnNtMGgswPbyXvj8xFN8Q9y8N6nXkUQEfNj",
  "key6": "49AoqDXSSqwNStxuxYdb3fgvWAJc1KijpdhVEvZSdppkxjEoDmdb4dMs4hCB8T6Lb9un2BNzuS3P9rb3g32uKJuC",
  "key7": "3BRGQw2wkVHyPwY5HVJzxzpx5EkMXZpAU5X9peczSSNvtNRfAr4ZpzEV4xK7DhbUwmAyWKtuaC7tTNSWtJ8jN8y6",
  "key8": "5ZXtvTMAvSiNC7qPztYT1FWaKGmunzoh3DSSqDcYtPqBzGxNB8V85642ELcX6c6mngv1FJc88oGRkDXUMGnxrJhT",
  "key9": "5Kpd3au56pTSABW2KgSHDgf5uoYu6zD1TyCYPNJHy2en7XuhB6zeST7CS3Qw3DHoFCF1wg2kPd6w6mExv8k3Um4a",
  "key10": "2ELodng8YYFx9LAKfqNEhYLMqQUPLQdJc4EoprvtE88MHWKXPy9F15QBCniuq2nZmb4nXFWrTGguSQ1yLSgDarCu",
  "key11": "3y5cQZuGchNsBhaEo8DtC1UUFRCJo9N8MY8PML2cXgiHBicFCq5GTebzehRVwRov6J29P7NctF6Djp8qPBwWFCps",
  "key12": "oGzPYcwet3o6FuS2KSeedKQfKwXtRgz3eZ1cFcBZopiesTzmQWUG4PCYaZftN6TkQphC8KaRMT5Agy2VM6trQWW",
  "key13": "4BVTY1kpEdsX83i7dajhdeehs3Cr6Jr9mNGPgQyApWexstK9reRc7trAA7oL9mz4CpGFw5TBAPxMEj4gMj9ixS5",
  "key14": "5tZFq4oczFAM9NVoaSYjFjNFSkykANoZmj2x476tXsuKhigkxkgBHjgpDi6BmAsskkKkjh7h7SkCsYJGfvGi2rZY",
  "key15": "dRNq9mG8fUftX4d3nz7LXniTKHLtTrCZDUKoj8PqjSRTXfybHzvHyUyoSEjDQdCxjCGtEQsf3RcZtF8ev3ULw5U",
  "key16": "5s3qXLDdcQRivvoxgtEtibv2X3EC64HqYc3t8RUcztFbeW5MChW6gYqmhTKytwirtRyUatuBFmAkEo3rDMze7hxt",
  "key17": "ssTtK4ePUcft5uQ48RdpVArynvV4wDzz33NoCxvyKM3Pmix9eN5c3V49BEjF7pXYvjcZLEyJQcnDFy16rbkL5gS",
  "key18": "3Hdqin6qd39zsirT5sZyeYAu2zzmRn2Y3TWSG2kitZZNKmP3cw2VWPFUTXcntL3icjRiteMgFybpU5YE1bcmo9ZX",
  "key19": "62ceUhd8KTQnarrzNjrNYZVm5jJ3zCiezpG7Y5NLRDQE2odzcMKscQufbJAQNwJcafD1Pu86Zbr8kTeEcg2jKbEG",
  "key20": "81Z5TdXeXLoKojPgr3HLDN5asG8ptKSE28wESUExeSS4o3HpgvhCnejKafUXTjps5YxaGscG8hW9FG8hTeCory6",
  "key21": "22mNhUuRjFjWTb2DtGDVoBx3mx8Uvh4fcRZxhXb3s58ghYvPNVXwNshgp3rXAcZid3q3hEmQY6R5Bwo2v5mGsQVy",
  "key22": "4D7eqcJU1qBGEmUmCU4fPxiCZ3NkLsXUDpXRX5E9zi4NTvsTZJ1oLs2zK7bWGwc87Gzqtq1JyhojKAnzSuN8Yszh",
  "key23": "29syE5MipM3C9FznmfJeiwZfqmKnScdXgvm9MancYRUrS5eGaNxZVVoWCXZMuqokSFYDBuqd9P3iJGuaNBH8L4n7",
  "key24": "4cGo5djeoH17NZpCQAxfXUD77yXCfRrbkrjaAjqj7H4Tu1dC88yyNZXuP1mw66qg7gHwr4JieCnwuzRFfMs12G7a",
  "key25": "rJVFY54a62v5ojdk6LsAUwKquyqwfrgJ7fU15X2ZfW1wYGAsFZmN33BFfRziApz86EgF4WF8wiqSJy9UDGi8P6z",
  "key26": "2pjAfLvBfJqPpNMgYobazD3pusiaBCLQvGuEULzbQ9S9xvHxqMUNGuvx4DQm9z2M3XfSzLvYVAcMbNUqwoMBeGjr",
  "key27": "2CDATn7SoQMWpBxUEsmatvnRhPYT42kJWhfkzTkgvUwGgXb3cfSJTDw8RgrB31U2ndKJUbWdTc7d84K3KGRCVWzV",
  "key28": "QcvtRUMsLv3F95anPFrmRujrJSs1Nv2mEpnJLsousNFhd42Lf6erf9tCicmTrmLqvgSnXvxbdBWpYNEVwfLwAmm",
  "key29": "36uGnVbHpXQC696cSEFMKGLzqDiwVFxz97J3nGGHN4Nmtc6Noxp29BtJ4Zea2pfWDMjZbsk175WrPAcMAvTiUqer",
  "key30": "4AGMFhKGXg1GnfhVpHoE9ZdoEvNmPFNJDpSdqrXeAhnysqBg14s9wJwfjSsoqAq7NjmCoanSpptv53C5g3HKxgts",
  "key31": "3xzuHpwS6xqnX76HhhpY7vsmBqgv7an1TQqXjQNLUXHHBkGJid9ySd6neMR9sLTgpNGjfV96RaVdapJFCBq5Fhfo",
  "key32": "2X1Z2bcJfwNwTKZsyfVMsqkUEAnpPHg6ZPpJE2HR7mAjyPVSVRkjm2sDV8Bow4uDMsxh2ehsfDgLAvhaxR7kvp5M"
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
