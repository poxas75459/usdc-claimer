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
    "ym4yaBdBticjXkeavV5vMSc7JrYMLPRftiHBcfw4jDaz36Uqc5XPAW2TTCzRNUF5MJv2V3vSHS2keg5xBRBAwTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ggWcgyFVZeTVJpcLdjHU6wRK3HwfQPKQQfzepZbM3NW42iH2sYBWdYhVxTHJAeDAduMdR6pA5uHHcK1CGJffyvp",
  "key1": "2sdCdJ6oAyick5f1K1HE8F9XyJtdxsthZp6vnKha6t2bXtmq383dGTJBeUnZn8YqQwTMjzCUs2zeTFM7VLfZsPE7",
  "key2": "1WopsBMwxCoePC5kAgEC1vocHpcYpivn2Xg1HqvYR6zJTyd3y3RbuSHceAbGbfiDccyQ9zAP7fo2RUFmcbbW8GN",
  "key3": "4Kqg8JVgZRpt9dhU9GiMDhnMP4QRgHo9oF9iEAoxZGWryKxjVaP4JjEJLuQDkzFgrqGAw3coCEobWT1XvFTHvpga",
  "key4": "38xQULJzaxfBPHCqeTWTLr7eGsBHVUPN7U2qLKMt8CFNQ2rDLbsNxFBC6P29ALzsU5PkPnrfaDQm1r6UyVg34F6U",
  "key5": "3Ywh4vAPNCMWmjn7hevcqH5ez4VF8biLo2QwSAFiwR5NjU2zLJbMkP9QkSUDx7mLFhu239HjJEEbsSSUrQ3n9Q1",
  "key6": "396pZVFgoxftTyVQFR3bf89jA3XrnjdTuN5gMYN5r7eszNwkWuG2hRCyhUhjqqA34vGhc57uj2rraptiRLqrgQrA",
  "key7": "4H8GLtjPufa3vvMvo66iWqtzcHmX5kDnCquy6kQcMiTMaVmtpnRfumQQHwj2C9LRmTTfGDhP57hxrN9ELuuCNDH3",
  "key8": "2SLz1LbcRyb6kX3t7oFmN5wsjhAEEzQhGiTyMQRA9eiZfyE1RYpx5mLHn5sZWrJf12371NnkFNq6z6VRUD1DATZH",
  "key9": "5tLNF6PEPjD6gamM2qeUnvP3kHaS6gCJVEsdxLxoursSdiSaQf98hSvN7f2VpQM9o3GcYmR3UZPoQmY9AnpFc2oH",
  "key10": "4rku11DMVzVjTW2txFkpvpnbFrPYenwe1CcEg317QhNxJfFWJwo1CpmTADePxhUzL8DLjwcmN2RaJvKbVwQb949v",
  "key11": "XoonZNZJaut4s9WYrqdvnZ7tZki2rHXBsXpMtd2VZm6WvDtbFLewkytuSA4ghegqz3FEaXuDEkkB51HQTAxgTGS",
  "key12": "2Q87oUh8H7oLokn3ZC5ZCpnCQAPTcNJ7DGbirrvSrDAEsFMQB6jhYu8onZpWAECkiLWDTR5xPeL4rbmka9PbYctQ",
  "key13": "35yix9UoZeUWLGqFy13dkvKMNy9FMSeuqcGdATUT71yWkK8CkoH49izCdSUypEzh4q7QeDS9hkeTPKPvmDnnWT1X",
  "key14": "66CKb3j81sGsKUvp5f6cVjmA9ofrCLuxrUcwFxvKTDcSHh6L69jTmyzTvJJhpScFk7GEn9G7no91y6hUBz1Smvum",
  "key15": "4LLCxNw8TQqm4Cf8FPruotQkcuoUVo9aLurXmMKkJ2UX6zbNse48uzQNAV3TSnzMNYGjEWBqx1UkGaiodYTzbdiH",
  "key16": "5U1jp8J1vhFpAfKNfHgy24V91qKzpsGR75WiZodB8jz6oAp99CJDzpMkDwSvy43SEmptyx85E3JbEmDCDwcHnNvB",
  "key17": "5zDjCDFJaaRRwHivjpnWNehBL7XmrFxnMZLURMtGHUbGWaFXQo5cFnB9GjcRFnLCNLLKyQYprsPDNB4nfybQjDDA",
  "key18": "2MDH6FCHAShchQEyVc6yh3o9jhyX2EJP4dy2nZMpQ6JpWHQUC58g3A8jfnYus2o1EQQgmepqV1M8yEiYYGa8KrSG",
  "key19": "3wgBF1fTC8QkSs7c7shz7LvSphbnnfJFdun4szwG2AbcWAa7wXDMBZJ5ycPn4SXDukynJXrdZAgeBVQ53cfyB8Se",
  "key20": "2hJVv4MWhGuBF41wRcFAgtZahWiNTDpVQ4ZFA21Bb3tv8Lmmga8N2WaXCNBtTerkFG1EUNqhiKAfDBRAnco2DGoF",
  "key21": "HP29eDS2MJvnmdoULqYbtQMiiE5idynyD3j5EYVwX2LnQPWhFDcCifA4dPtQX8YEZwdw6gD1FJ26vHw4SJWYLVq",
  "key22": "4Z7mYfpvZ11KhakczcXcfcECFN6Cn5JHWYELNrLS76qJJnU4Jr6RPPormmtyAGdexPSXmyXqR6uXS45k1zQK7U5h",
  "key23": "3my3cfG1m8CrjX26xvzAdrY9iZLXmGiFxYrKiEqfWTJw5AnexN4NvNMLxREit3uXnizVtTx7HpUj9ew2SZwoBSng",
  "key24": "2gt93dh3bSjXzcC5VnbouWWme63Fz7JmfVQUjJAXTqA8Yy7PfudhnQcGWcJTrD8XfmkApRZm5qSAVGzecGSJTKhA",
  "key25": "2JuQEcCv9jJRTnCWwWaW9u3XP7x1KXMDiAtzz1w9zStvVK8xuv36ydtwNch38Ub1pDuEmTwboFNbLrUGgZNBSazT",
  "key26": "4DawQh6rXkKBHwHjQvoVjAHDcHWGjRAfeC2AvktPozGUiW51cgJ7m7nMHzrvr7tvhWuUzsL4DiiEoxZpW2F2Tr4g",
  "key27": "5C3wQ4Lx4j4kitpkp57ACWF4eCfXpWMiwke8vgZHtSZS3rgZycNwznBkEdMs4n5QuAhVRJD47jm95gPTiyKjddD",
  "key28": "Hvc9raZxcdL9vf9e9ZrwF56deVvBnmgbK65TbVxno5RV5yT2FPpRyknj293toeYFBHkcrchGsniXmjcTiT6uRsL",
  "key29": "3kP9wLr1gWQcy3arCSR6jtzQKRp4vrKu9tBskLqzB1yxXdToeRZAYEbrK5fvGWT2wp8VHd3dBRSbMEwzaYiKRMSu",
  "key30": "2z9mnqbia6B6uB5vKYw8ios6fBNesc21K5RKuMRN2Tv1caZDSctu1dzmKbtVEuNARFi94rkJWZdGFhFgdxGRQY4E",
  "key31": "5tcVaRg3FKNabtwy9HsHgsKPYFA7gNtSGYkumuaoJM1Mh4nHwDoA4M5G7re36kVogtzA17ZhWvN2CxhTi7QoPkDT",
  "key32": "3piNHqPejMkcxigyowNd7RzoSYEub5XznZJd4VfazRBfDq4G9ifbKzePSgFxrmqk4CQCaJdoz9Gn4uYvVb8jifWH",
  "key33": "5N7bDT6rYWbfdb8JLfehdx9ExaBKounjXYXv47RKxpwknm92Rzq5yy8YjT1R6nmhds9HxMw2RYVb8sZVtdnQ8R3s",
  "key34": "3KeheKcvAMTXf79jjDAtDoFkZyZ99nCkV66sQp46YFXoQES3TEQfQxxLDKfZicweaHQtscTBE8NSS3fGAbH7x3tp",
  "key35": "5VA5rJ5PHTvKhWUYTnuuZrBFeTg4wPedb38W7PgoUaQDs3s1FXSDE2Ccf4EhAFgAzLbcwEhzguEjBKzMAGbx2vw7",
  "key36": "2uprAK7jGpPS2pLyJg5xmEq6bWwEop6S1vUXRxC5Uus6W7tRZL1fV59QBZDmh5T5i6TCNYPY6F3mYExcCoMaEL7B",
  "key37": "3kCwUmSwVtemBAKi9US1eY5C3nxbYrn8EgTvkpG6DjbAJg3RgzPBjTVSM5naEtFGrEVau8NBuJa9JU6CJaCvxY8B",
  "key38": "3fuQdB1KqzhTEi3egKYcCghvjMordoMW4NLktGZEUu5zPGduEj3A2nbvdtdCbWfUNtikEQ5o1LkZ1nocnzECZcdG",
  "key39": "2829THZPGsjFzMETUjmBkqbGQKAwkTwRgHF11RpgYL8uNs3YiwgnCQHY7WYGgN6fgpa2xNxHfDw9BpUG9AxJm1PY",
  "key40": "CYw1fkAP1iRe2KkCPWau43JjtbKzGkpshP6NWKDDWRJW58uBnRPuAUNGepTDMDYbsc795dWu1HSR4equNxkwYbD",
  "key41": "3AyoLkJyAbsEpxiDSyXf2oN94qWGYauPmsEN5B2bJmhdzNjN8y8jWFhgyv7geoHdMrMztmHsbv2qiJDazZXDCp2S",
  "key42": "51Q69kpiZUeZD9h3YacG9MJTM5QvaWno3GTSmDyGBuSBpZzVksxJ6YkbaZA7Xm4VpEtiCgnKc6hKAQGC9nRiqt8V"
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
