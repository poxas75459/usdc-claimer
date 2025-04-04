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
    "3PR3C92by7Hskuz8dP6pb3uiYA2h5C8HAaKoGJZTdreTKwFfYGKFHK9SXtDQSP7ZVUSHE8ixTixMjPoyVWH23wjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5C4EkafWomQu5xAHuALnymAWJkRKok5HhnKaXm1H7iMgN7np6rD113HJxfVYpjGUrpipWxU8m6CU8peS9uK1j1",
  "key1": "inTDzZqAPYzNxer8cZXWWE4jGMjCBL33JwRTzjAtPBUdAGw3NMZbFne4STHAv3p4epe5YoAcs72F8mmKAGUkmh5",
  "key2": "317cCDSy64NpT7E3wsfWCGTXXKyU5VRG4xnN67WMqncjCJGURen2dLmP1vY9hjebixVoj6uhWLUeYrCatGyuE8ZS",
  "key3": "5AWMU66TWwUjYGJ9818E8Ao38viZdTXF1wU1z3YK7FHEKE2xP9Ka2LH6PLovzueV1GCvCc7QGW1gUppdzmWRyQaF",
  "key4": "5BaXyaTTGAKhK3Ch2mXtcZ8mWBsUXpjuqZHKT1iNrKzJUXpJAqwhuCXibw3UpAxPFxHnLJpV29friFzkjTKezdfh",
  "key5": "5LFGXvX6CzizNmyifDAfoZim9ShcHyFM2idBPPziMUjYTku1TmzE6TETm15YqyJkQ6ELhYRmSrEu2fcheHnCMAAk",
  "key6": "5EmYQNcND8XLMhZUxe3hE89EKXotUSSrFmK3dtNgdeGpoZerVmchK3MwFUfZZDDSpXEjv79ww2oeoLXyXLhhwyrb",
  "key7": "3bRUzs3SunH1BBJHpR994o6sJiqAMLoU4MWLeDGe3joxuDuw2PDhHb14ZnhQjG1s5yghahNdLi4hFTm87vg6Sghi",
  "key8": "66ztpjZDdwB7Voqt4bztrD1LwRsdRX2L67ebptzHTSW247ifjWmyaDX8UGEjrXTDbMQoYwx6WiCWyos46VmyH8in",
  "key9": "4nKEdYWNgcaUJpHMmL8gcFPr7n4xoFG5gPHhRy1XhhhvLQ5KpQDvYSXLprWwgr3LqioK9Xqg9ky3XJuCBuZ5qTa2",
  "key10": "3EZhMUp9vc7a3XdcMZacqvFBpLdz1xmLQinWSgD78WfwhvQTetCDwcKzWRb1YB1nDVrWoUbnkDpAYSCMY6QypTXz",
  "key11": "5eqpBDZJQa7Wm9kP3V8jxKwP1UpXbMj9wCY2hBQ8U4Re1kG5Qfspq7BZgRi4Spbzj2EFZL9onYAgiaDc372sxjkn",
  "key12": "5ssYEMgvFHdwECvbfuNydKbL5kzn7ngB3qeuj8NCUKbkjZHnN3NVwKBy45BiscoqaEXVwhUkNuxewWCBFJd5DkTf",
  "key13": "4pGSstyxoiRaRHWCnJ1VhrEYwpMHWPV5MGvk5VdLJiN7WNNkUXs4oNyDmZf4tXJrbKcRA7jbM4z9G6bKqaB68AYA",
  "key14": "57CpfhJc9Uf6TgmUY6ZZxSDQHzEG9J4CuAUSmXN4ULkVd2FuVFsr2g53BETACCzuKDtN2g9avW8qLLS52J1UY5ne",
  "key15": "3jaHBjBve5mJD8TpE2GCXtNwvhS3a6ASyLaEikqD4bqsJihfWgkmz1KAVULXw7vCob2aFtLgm67f9KBNQodMoaA",
  "key16": "LY4FPzvRuhobJu8p6DZ8ATxkytB2w1vTVnR9BTCEk2MLG9gnCg63EyPUMYqwGwpBLsE1EVH1LbAx2njoDt14UAG",
  "key17": "3ZpbYHUJ6DQgKwerjcVmmpZowbNE7h8ZaKypHoTNgQSgwksC8y1NKZf7DxTth8PkHQrSkmDEtK86eg16q8umH2Py",
  "key18": "gfwFQKCwqPxyK2MD9jZsj68BCPsLA6zhF3fZea7Gf8ZGNVkFaxW8j5SiAzrTwcipp8XFggrTzf6drw3QKYgCpBE",
  "key19": "2JuhS644F2AEQ485BeY7U9TCidxD1tNWJifTUafwMEcAs55jCKWP9x5ZFT4vzMzyycLMJjy4gWGT5Fb75Drm1aME",
  "key20": "4r3vvodKeNZoYPc4uMkFw3FjgoN64kQLjRd4fpGN5qMN5A1tDMuxzgCj7KfTFkG5JyPkcDhc7AbGrSeWXACohEEC",
  "key21": "3GZdgyLeQAmYE4cyAKrVkS15UzNg2YtEK3prGGbuG6W87XjQSz5vhnqx8QEiLkGiX6r45TeJb3EJBsgxKgh67j3d",
  "key22": "5xNuCdP8Brf2cQggkH88ugwQLD5Kty2Sc4ef1CitwBr13DcAehvu46QexG77KETZt89ntAe75Bs3zXzvG1gigJjY",
  "key23": "3uNCdBpbvPaj3F9N39GgqQx5gPAVthEuXJwbTkTL2ypEtnDy4GfF7Ztv34KjytwUDwt9vs41HmtAc7eBULMxjbbJ",
  "key24": "2Py9rQmkd3VodUEAkUmfvPE2axZvZBBzAASz6nStfSDnqrvcmZfmXe4jTGoHmgPYDtFdVjj1rnzP3uMqFiDVUzT8",
  "key25": "AeLRw4MsZwaDoARfAmyA1FQsbea7gVkyQPQ8sc1fsCjgDxPUUYQGthJ9vHoVbQojdisb6GtEcECRUpWDTaDUeud",
  "key26": "HkXaHN45U4qa9oK9ZLxjKabcszrH4opq9oFLXzGG7RfMzgG4oheWBk227qcJjNvoadQJe9AyzwwF9317rztARMo",
  "key27": "5ijjCqNjPtHrUZ9xfsboVjSwsrDSkJrzyPi3ajJRdbG3L8RnUMCJa4cVz8kJhfVYg9Bm5zMqNTWaicqqjCM8DanX",
  "key28": "31drZRomt2PbvBBwjzpTzxKEKySWxkTFAN1PQnoo3DMMwUBkkkve1bojLGSfL6jcsVZTtZ2jxhi9XpuViHgdCGDi",
  "key29": "a8RFgZ7fBjEUxFFXXJ5HeYg5N8pnrRfgp5nZdCZyAXpP1RBXMRm778JU4MMKztxnMJ2py3eagPQ56LNhTEXCcwb",
  "key30": "41BaGYzCZrFh8fWybNWwg72cb9ogYJQA7GzSFMZtkquAVRPEqDbgsgQ9NuynoKtQ4C8kxxz6DjFiZ9KGikq9EfX7",
  "key31": "m7Kv5yYcpRp1j7nL6NKJxz9JgRBWGfjju7TMjLGT36kfxZHPiWuXAzC3jQCb6V3xt7fGr5iPe3GnTLNzrWjmwdE",
  "key32": "pEX1Krz91q5gv9jgiqtPpgH2HXFQajX3ZJ31UpRs2eBQKY6R15FTtGQtjoYWAWDnsF1ZGoJGEvi23yog8NdQP9G",
  "key33": "4ehypzMGc8XTKSuHyXyyFT2ujE6sdf1UzFWhfeMdxCkBA3LEexeR7TBEtkndJ5Q4Xm99Pb3WZZAV9r4ywjXsjkYd"
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
