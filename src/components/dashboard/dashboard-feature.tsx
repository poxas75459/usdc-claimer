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
    "5wrV6Wmkay9JkT4E4EnQGZ9PCEeDnDbdi6oyHW5BSjaZQ83q9sw5HTTtAATFdW2RWXws3H4EMhiHmYeANVPZhFRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ww6chzSwshSKDZDtQw4RR3vTQmzxuZ5zDbXAvcBzwzwmRWKcsPt9xtWL8QU1bhZEeUWv72jviQe2HWR56vmDdyu",
  "key1": "45nmoArzdfnwUiMmzRXymF2JNuqcf7ZvCQeaZbTNQ4XFjWSjPq46JLWG81zDGJo8iwbe3HvmVLc8u3R28q58WLUP",
  "key2": "4RYw1dubKxCFE4BtqaBVdiZ3HNsJaHpbKFWRN6QAmJPBFE3nRawrBD7guprmMi66aHBjGB2xsnbYYfae2WgfgpnF",
  "key3": "51Yei7vVhtHtn3s98p5Egc3iMj2ere52GvrEw1GGEm65SRggtRQzNSJzRTTviG3XLDsUwfNNFcyq7zW7tMmJZhY9",
  "key4": "2YvPfoi4L7ZsVaxoGaC9981v2u2KsKs5TZrNGMc45jbx2xYmHHzUjaEh6Ch6J9LNYCQBTTMSN1UvUsMXtwEyC1vf",
  "key5": "5GsMoDDkuSmFEPCMUtFEFrqSehkBAZAA61uoJQVwiGnt84qPaEviCpPB9vTB8yn5rDRK2drowwjmJv3GmX9Gms7D",
  "key6": "3apUidfXWaPRxLDExqRRc1fagpvMBTxhJ7MVmQVYVLi6bCuzu9aa3YDssU6v14ZQRw4uiv7QddfHQDTpmuJ2RB1p",
  "key7": "5RcTqmVrejYDbpP7YNsCzwuytvcs3GQJb9r9P2qDNBVSyWMg2cVbFFbeXE9pQdkp7piXCXNufmkaVEbvmxojUtcM",
  "key8": "9Sm8YcuV9tFndNCMmk4a6Xucp7Q9gP5W5EdB5Z4k6jwHbbbhJMHWcg6mLz8HmLqUesL4cBdWdwTqjJ9QBTppuQp",
  "key9": "zzy4NtJTymxrdXW3bmw5BLe5VzQauYuzx8HJvSWceFJpjBHyPso5ZLtQ8kwC8aFr35tC1WZkTFUGvs5C4ndJCTp",
  "key10": "2kMeokLxgExXe72gDWiSiZqxJcsdq74Tj1gLy2e3L8nVRcYrDpQw93tEMBpuJrfYwF55DxMt2YnZKLNUYAt2hpLX",
  "key11": "sEXr1iu3iyP2eTD4zbCy5PghxpBy7FzzLfAhfNQDbPt1WBDAJ7udjGNboMSspvXT8HRE4zQcWfmCaYBk1bxfuHN",
  "key12": "3rq4D8tYHujJc2j21sA6cBWqxQnewTmkrFN2MLas66QmNTbwcLLtpbMkX4bECwH13xQN5Cn3G5ENQprwS7WF5h49",
  "key13": "d3kZfmHBXzQ4LbWTbDqPpWFZ2VAWVsNkhtPQiTFis9AgR5sTsypZyTkvpaFAzHvjKSgjysvexE8iQ7mAxye4A3y",
  "key14": "5NAvcBTEWCiu4XHZPmWGT4E7K9mZdTymZsNxkCX9Y8vAv6YU8Bqsz8aLtrM1mpuAXyXk5YYiEoxnneYPH9Z8JDAw",
  "key15": "S4wxjJqMATsBEC87TckY34r2U4iEg7Tjy1sjCyC8d9KCqWTUBrVN8XxfW7EJnqCMAC5EwsR2MqnwhCZ74EosXoT",
  "key16": "n8uKZwavyTpKvkDXkd4mLYvwhPFhpxepZSCPPb35Fc8b2frqkLB8zsXCDntdFtmfv6C4t6ygX7fJEC2cE8g3pAf",
  "key17": "2BwnT4FmCkphTwZ3C4yF6waXuUpc58tPmgimrgrb9994T8psPzjBhbEApBPoLDxL7jxiwzJKHzsktuZeugno4JFE",
  "key18": "4Go7rmkmd1L5DG72eAuXanx2Xoc5H6QXBDFy2NDa4Lrnktvb33bZsvcNSq93J2xmmobgo4YdLJNNyQ9Rb7fPqAzV",
  "key19": "4M2B3m4tGxoWMtaATLzWLPmmj79ybQhsreobgPBPKVgDme5Dz8dMERAsDo6BByHVDQMspATu1cCoikVEWqMNhz2j",
  "key20": "BuhbfrrMPbfxXVtSToYN5Eq2jdguvYGM9Luej98P6YWE5JYiRZJst1GpT4cYegyD2rK9i5AMhUFBaaAU24mxfXv",
  "key21": "HhnLZfG6wPVvQ8HH5evEPg3ers2SysmQAxQzB9nTNQnwrWhER4oQGmH5ppZuFBjjVYnfJZpd43JuHAhTx6RbcUF",
  "key22": "4P9yGSLVgk4G4zSA65hUmKDDchyaX8aPeZueD95JPLBocSNRsgvSbQcKmfetTAVFakokKBzNFdn635jmRTiDjx11",
  "key23": "3DPdcyuQvrBvG398sriSYdxf7h5q3fcaAVNUFnhQAWtLkChbaUdyF825STbin2jVxjgfMfXU27DvY2j4u1LykkZg",
  "key24": "4mD99aGA7GfSACqtQuinBgQ3WCm62z5nbLBSiBmdP3k8VS1X9Cv4AnK3ruwE9uw92AGTpGSv6Jd7wMyasuDrNFFz",
  "key25": "2MHU3LdeXY3JcXNv5gRXw9ZZYfUCDsQ6qb16Z7UAtjX5PjfTk2MAu8BkNNHFcHpVmMmXj2WvCjyaDQ8q77qP5pbS",
  "key26": "471qSfveAFZtUyfSq72ayakQDS5C1CCiiqFPecGyHbpfushSuE8gD4K5riMxmC3biJqvXphuLALiJ2gwhSbg3Yb4",
  "key27": "Suf2wUuD91E4bEEgW8aPCvniLZoF8R1zhGHgx4yt2iEy4k8msM2AFrq3atuUApuPKtd4LvCyW6TrZZ4Djb5iavZ",
  "key28": "3WNkB2LqL98mR9Zg7qE71hzJFJQLUoRWsv3mNsBjEYp4kBvnvZGsGnD6mYCg4687Es9gp6kDey4ciaUndTV732xN",
  "key29": "5hFkXtixE7wQWgjY9ToGn1sPzCFbodPkgW8KVwG5EijV5VLXMBvPT6yQEan4RZnrHFNRfmqCL86wvRMkuX5YsaDX",
  "key30": "2wzLxJEJrA8sqmeaMwCAm3MUBSVmueVWVwoUx8UvuTGjY66ZkaQ4kXfzzX627jyJM4DADMESNLD1ST5XsKTntcXz",
  "key31": "5647nW2ZmVzBkBmJGtdJVEqULdQop7cVCfcVfLNPezcHT1TUTfGVGVEKr9emQHF9bbcKaGyBQhiXp8vijGS45BMY",
  "key32": "671b2iuVbJdZbzwEqJEXnwgyc7fJnwovynM1unrwPH1e7jxtwomjG8xcAHmCKT35ss6B6Gjc2cgT4vrvrDUwRsYT",
  "key33": "52yXF4QMocUThaBV3kdgkZaAZPrUGfBLDtDxKE2HwGewEahMWah6NB8Rwrh4F2L28A5eZm9Q4nAGMFJaSCRaF7fv",
  "key34": "3yTW6jitwNCm2A9FTJBUrxuPsteqv63huDysf7ggLtgsJpPLgzPbgWYVuY4VqEnXoNPaurRyCA5nrorn1Kfo6ANu",
  "key35": "2gEjZSsbJ5Ya5LnTBgLN8maHTafDxf4SGEQntdauYdCwrXjv9QmQy2P71S4yJAngGGKXKssnx5NW68kittpbXb1T",
  "key36": "3pH2C4qgezFcDy7pfPreSTendzHgHEGmaSLmHLcAEt1Q5UYiaeS6AWHpX5bnJMW9Xmc1VL2hr7vFpmHD6wXTXZ7g",
  "key37": "2sXuRLbbLUrHLC29bYkrBeWuzauQo6Yp96xYFBkH7x4AsvVj1tGnD5TEKS5dwJ26bmahDGPV6oN3jE8ZKAPTWuQu",
  "key38": "5g3H3agHBkz8h8ZHdYcXSHCcdNaAXTki3WqW7zj8UiYSZkoopZUtQAXC2e12btGNkLnv7g9BDPNoEw7NJmyVmzDk",
  "key39": "2zzEvmsV899nZuA8P651nwYirVBRT3aXeMXX2uzV56zG7A8ezCeogS5TVrpo183eFND6zfgRnPeT5E7AVXsRVtQ7",
  "key40": "8NCoCoQyErtX98yqZRgd3WH7C15F3T6rWLqiaPFKkQfc4T52Az1husrrMcEyZyzFnGXYSepnp96wPWD2nzRNkQi",
  "key41": "4aGZXizFWWitnor5K9Typx39f1C7RwkNjyJPVAh9MizEhwdEnjZSDtawEC6TyLW9htPea8t15qQf3fv2dN4sfmG6"
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
