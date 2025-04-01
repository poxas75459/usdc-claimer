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
    "5gyiSASZ5PhywwZDPyMHCD4QMb2TssRvKR9pKMURG58LD19nwmmeMGAeKLvuYoS1Je6YSdcZeRNdkVJZAqCCeYb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rmz6W4Vpi7ho8hXQGtCK4pVHFrHUDbtdqDpu9WeqVYDYaqRLr5S93u724mTo5LrVTkUhr8GA874KZkrSpHvQvkv",
  "key1": "23RR6JK3gJqt5tFFvDhAcpAx8qGZKts4wzMwHb3AftBkDc3y5DbA8QZuyrxyK8zsK2vgcmhPEDkqRwaezddEArN1",
  "key2": "9x2g7tMHeSmkj67pHbwyzWEgbo8XZAPtN6FcGd1fTpX5KANFybrUN6NDiBCQp8McSTFQvWZPRb6RsREho5U8sni",
  "key3": "2PbRCyWumaVsEKiCxukkhb32UX9A11asZPbv3aCsV53X8m1izywoi7ny1iwgbFSwSLJTAQKuaGGGEM5vsWU9DLra",
  "key4": "2GKbKQXdiSFJnHqJFsufUBbqYZVd38kkqXNtVz6hgJEJEPATkE8CngjQHQg1Nwi8kXif1iDfpSbhiCXiND6vm6Zm",
  "key5": "3GzrWwqGsoUzfR2PRy7KYf2Uv44psj4w2LRZe9CWT77phxJhnh9Jbtx1tk3L1cnGT2XzEcY4FhUzaFRSiePdu58U",
  "key6": "2apasqYrNn8cjT2fjE3uL9fyQsqLWwuvhm3g4BHtp2W5wSxDWKUcWUrktLXqz9PndPPTfxv4h5boATu5jTa2EvHV",
  "key7": "3FdQMjF9Zb5qNVSCs7Rq9uxUtGDWbc4CKU9t4hdrVXnpf4asb6qAmGbhScg4WZHW9PhTNy4tVFWimsaGVLm9xKjX",
  "key8": "5DbDW5zzt1FZsuvoH7Cc2jcKjcWoeXvZjH4twfdhCJArQZE3U58W94Y5zyU3pyLzrcNpPQgUGCqvaNdmLJ8eD8hX",
  "key9": "5vKX5t6FMLujB3SCkpw35WfNaTd9iXhfZKDm2ZrJiSE9mtCG9issE8yp8AH6SChWpap7vNjcZoX7W7sLyv9fMGgp",
  "key10": "2ZNRzT7DoXgwCuAEsJANLoXByav6TKPzW62KfQFtNwsoat2gR5VSNc233bu3PfvkkANpcHmF8CH2B26Cw8BqGnwr",
  "key11": "4wCxu3RPdCEfmUAfzy9AwChqtiuwE89GDLWBfvgVw9pwrHrjWzGycKUcAYgQbfyoW5H6i56tDKEJqUmbebjfG78P",
  "key12": "4iUmrPnscMvDenAqTdYNctLrBY1mNMqC7ANuARP5sthvSzquRJX4CELmS5LQVprZ4VXdGzqLrpLCUazCLRRUZ6xv",
  "key13": "64vEPVe7qMx5qmyPQp58uwSqbfHbheiz8KUMvKybD4LGiqmyx1KQwXHrBfTCJe6Lik8gcKGgfJuzqAWqbN1F2BJe",
  "key14": "62Q3n2jNTCa5oZUraNpzMBD3ZRViADFSeiWskjwgdtUNXMg3gvhXcB2GTjdb8tb6eDHPfQBhxQRkxN3TF4wea8sS",
  "key15": "23LoQDqyrUPHcFFYtdWJGYcSRtSndnV1ESY5RRufPbXZtCjsDeP9H7LoTRGT3KcCdJeBoQTThMM18AGzQ59xR94u",
  "key16": "fTQYs4CXoQf4gep4oGQqDn3is5nAFV9r87aYAqVWPqDhjHQQhR9uHyWQpQNM35faKSbnKP7shr8WPRtXEEwRrRa",
  "key17": "5MeyviSenT7UQdJNWqjixGVfjRRqXfxvt4K2spfvtzesyi4A3R35yPDDqAvTUeZdutkMDzi4HyfxTeVaMXtoSm9k",
  "key18": "5EjEHM6ffppay2WcY8RLP5cedrnwy1UiTV9LHiVJKSoxt6Ws1yt4au39Ra5aaCZdy8Vn2C3o7MjFzUCZgAUPkgoY",
  "key19": "3PFEpLcB3Ryt1ix13xAPsfZBVYZu1yHB9Citv16AfES5NtrZ7ngkDXM9YKG5T7H8E8FCECCMBHbC1wpy4LSbAvM9",
  "key20": "591z3PDBKNbV4WybV2qiLPagHPWLnf8atzcqC7RNngAvtaqWYEPi8tvspYpHQEFKG1QsdDBcFhmV9aHXwXdjYU3L",
  "key21": "JBKiDq1AKjpMDSUraM1TUKZCXYx2X7MPnw4UK7bCWRU89sf9vEMcd9ABdLhMxKbWxRSWfWxSxjHgE2P1Jmj96BZ",
  "key22": "4LkkSQW91HEvpaUEoGY4k9wLd6XNg1rAW6PLYnL1RYVZUbb15PCesBLeNEVSMobQ7XMmyQyY1GGAmoaFjdvVLhtP",
  "key23": "5S2mKeCqnB6r17zYA6SNR26842f6xgZUZEyGs3zeDnU3Th5i87Jr4bsihE9Bomym25SST9jDJWJR8zsnFn1rtNic",
  "key24": "64r2aaqEsHQZG7wyCHqph7En4z8BYPmyiYt2sczedtZCmDcKZ839DXJetBNvYzrVcymkLGWSVySo4yugCTGv1GK6",
  "key25": "4c3tq7rJy6rgyD88ciL2t6Z5wBarJ3sn5QojeGtDXNJigg7vpUNbLQKcyxRevpG1Cms78VoYm9P5TZmmgRQLoM2Z",
  "key26": "43e35uvG326uNkWGbAefop6fXawRK2o9s4DUH4s3rkn2c3SbGg5KcxKopfnx78h7ZHrtt596qN3xFpYsqjFoEGEu",
  "key27": "iaBsqJe3S9mfLCh4t1aybKA1975T3sw6qHs7ULHdqhfWLobqCRs8sMBKcdA6ZZsipU9Qtc2u87EzboqW3Qw7uVZ",
  "key28": "4rhZoLogVmVLzsNoz8PMDtdYdpRBKxZmQihniP2VzJQxdfNNtmKUub1a97Ctsj6yCUB6ddXfJpQCdJ1PAcPy7uh2",
  "key29": "J9ae2kbqZj63huRkBGC7gWMcuRbKxJMR626kXUjUFBNNMMPH4Bv9qvmyuCnQtMUqvV3VyvJffRRD6QbMdpCPCae",
  "key30": "5KPs835jzLrcFSJvd2S66WzdRyJtdwebzfBUE2cG1U4y2ds8NbT9E4iHb8LGwPRNFgQLaeG2Ajrb1jf63U6EkXYu",
  "key31": "fFgtpBpVjMSZbmok8pTfkJdsWG3eAzeA2LGMGbPqjokJgg6oRD6wr5dyaAT9fJH54bGYF5efgYGXRDaSZDaVFqk",
  "key32": "2AfAJsTgvmykxvsQasLq54K9WtmyyNAWjUmeiyt76FL9EzbMUqtC2DNG8TM2Sxqxoqkki4yCiK4mYqThWGXhep1m",
  "key33": "5QjkL1zUt1xZNSFFcHKdUDPgf144q4KR86WDGSboDfeMp6tFe8gpDFcK6vscMX7iqK6uFSaQ4yYrPpYiSjbKvVH1",
  "key34": "2VHjvN4u5UvxjjF1Txrn2MuJymRNbPxgHUg2xEmvwx4bApLFfmorPV3XQgR7WheipxZdcxaeh7P7qfMHTeuB3CEb",
  "key35": "3EgCNma64bvpt9QMD6By59WktTU7eqS3Zp5YGS56oFsvE4xJCgShicEqE8ftd94wuBWUtwvaAMKnpsaXj9MEZCaQ",
  "key36": "cuiUg8CZHnq1qYGoc5BKPyDv7nMemPupU7W5NFn3y3ChcMkM7YEb52sFBq6xScT6zxFRuNGMNVEs1zZWidvFieQ",
  "key37": "Dd3REC8S9HBPcSxFoxp5h8ZMQa5eNZBbesHnykcifyYTL9rqKYt8Xd7CJcTTzZsXPwuivHsXLFKYF14LYVAXi1C",
  "key38": "4vZdspN6wGuoo6vVJxCotT4xv2sBCVEvEaTeb8auqqxJS1FL6E5deLs5xfKrrUGgFBcBoLwKnaArRoogDUK122Ef",
  "key39": "2eiiWw37XvBrfNfobFXZ6LjThSzv5T7FZvSTkjbfnXhjcxLKrVfHErAYfqMLqgpFtvzDu7LSEaTqbz8LqpudqB9L",
  "key40": "58Nbsv5moYBbdu2oE6hrByGdWyN6vGgabbNDhBeg4YWGzJpDbEhvzWoPzdHXAqPJGzjsMmWpbd6RBMSsmtCJmyeE",
  "key41": "4oM7n9GMHGZWxg4FHMWKmZv9ajFaqDpahL6QKqsurD8YjjevPo1zUEDkihWxx8CZDLs9hcZtZvuYkahn6ExQqz3Z",
  "key42": "4tx8ipJdHyCggWgY9mtQNNXXPDcfmAY4yG4BHhFutVsvPYB9KJarpGdCAcuFBUodZzLmazbPkf9EiCbW8iPAPdaW",
  "key43": "5M2FwmF5KVBeMrwqNVYxTeZhGvA9Ysm6kBEWqvQcyz7dBNssLaRQuBB5VCPbT2XgnhSUKDxi768W8EN1cCKZaua9",
  "key44": "5AshVBLhmSMgvQc8fKFXyKDhLbB6Qyp6SwbSW3d58PAix2SwUFspdKqxYEQdpe6v31wH9QUCFpbAEFvDckf175me"
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
