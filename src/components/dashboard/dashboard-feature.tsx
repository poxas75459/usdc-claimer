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
    "2Hf6qXfiYJvPXUtwKZcFJTRQeUiusKDGWBqMwnXTUAdaKPiPKnhDaNEdmbkTTEYjnBUuUWPu9cFMwGg4wZahLqgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWLqS54LgFLb2Wo4pzsdfnGbaJSXTjftvHNwS5Huph7wHZaT6dNDUsfNsZ8KzFiFxBaFYWemUfzM1enJS4HgUSG",
  "key1": "2CFXyTQ4TwX7uMRbun2zq4BYjac3q3VDND5usEMkC4jZQP6ugDwQGYYS7TnCXuKgQx8NU7sppzkuzzNwVskETjLt",
  "key2": "3EgVjWspcPzUfPNx94UnxoqUd21NXkeAL88RmHbGSMwhZziqmQEhyGdpnwN6nWFWEU9U2LxsPpKkqN2QPwQe4HDX",
  "key3": "3WzAV8vA7uFCSXArF2AozSdv4GwdXvkUgRQzMposmvrtWPi98iQ9GXVMbx3pzp6BP3nb7HW6ZhvdLZWHTmAKKuoU",
  "key4": "uJuswfPMFRRp8xBPU4gY71hLmeHB1BXSJ98tbmkfzeiawV898Dt56FpJ8JQHYTixW7vKxNL4dmyYERqUn9udscv",
  "key5": "62oXUyL9CNG2XBxbij6cYmZTGbmwtbLFuDd8nTgB6CcreD4iJ3Eckg5w9wQqm9pmQYdfNCzHWY6i5zKnhH2CkLLi",
  "key6": "2q1wRU5vCadXasQne8XeKMGFa8Kn43porH3E8vF8RMELTEJ3e7BHZModeWJHBE1P2kwBDn1XqsYSBhsZZL7GwUrg",
  "key7": "5hevnCBZDZaocd6ChSMBfaofBbVpMzP2ETGWhwrvqDifwNmXPsmCKFF2BApZgaEFYteTPky1JN6PBf6c7gZP2pnk",
  "key8": "3bgQdzSpJqTZBMQjTPxwZrobmh2xqmkkqjo9c9hNaWoGoUmtvfXRFAyp57iegWReqMqtksfypQ4sbAHbm5dBt75m",
  "key9": "2JNTCdN2FMNPxpeiWEFBo9dJ1ofsgzyUgWdAMtFPFdJoTE2BRtAmrXrPFVCZ32fDJw1HjYNPduJdqF87kZZLM2Tp",
  "key10": "4jNhK2TN5YtxTKDA93ZhNS2YhagLY5LAeBSFYofdDhS6KRa5FLFiCY5j1yYVx1gZvbqiwGgXymU78qjznWRjtk8q",
  "key11": "21Gi4C4bGn7iZFNjVx7A8ZtQ5a7py36QMbm4XTgZsGWUAFdb8hva5Ah7PGCfz2ASLYRQ5utxktWKZ3Xis9HYm9tZ",
  "key12": "4okmZtRDoEL4MDttLYEtxqCSyjwPSmfv3X5GHezBBt8H8aDWvEucbTh2Mpj8FBU9B6AhRLq6SXUxmvAwf2Bmdk8a",
  "key13": "2y5HUxrWtQYrfRUyLM6CZWa8CJieYUYcHCWjZUCFFPg3ubxswouvMJGUbvmHfkhviCqfbdBaNbT8RiL21sn6Qaf6",
  "key14": "5x4as2ksmfLPZvMUyYQ3S595xbEb1rNAtNAtrc5U8H17R2hcu2ZPawuTauATgvc2tvJibq5fYKQFSkDKN4DjBavA",
  "key15": "3hWTcL5bowAo1RLRGyfkidGNXCrNKHxUCvMqKZfEqgHjCMezkVPpRsq25cqtpzGrFnqf44ugzkZnb3egeiJeWCUX",
  "key16": "KFR8nGhUstSq737S9rbJsLxRTuvQjbvwxow42h2cM4Uibge4gJdxyb3R4P52FtKbihQHEKW6EiTThQ9q21b4vD6",
  "key17": "2MPDrDn92mCizFYxsSucXzqng85fdvqVzooSknVhr2QpPF4WpMVrmJEu7G2VasA2yPLEXeZYAhhgEDPpvKzadkGq",
  "key18": "3Hvp2y748Johw7Ti1dpzEgRJE1JnDq2katHmXdAGgq7MECBHN1dhKxcnQBTcM6njqxjdgCzWESrMkS8zgcFuLam3",
  "key19": "tKpwgs38m4BUPo8fQfCDEkU75ut55Q4RT5mc76JWEYtxA8C6DN3Havu7Ynxs5Wmk8mMZeRQ9sedwGZT5Hzjkp3o",
  "key20": "5Nym4x4hSVp7PSbsuzwY35q8gka1XRjsFhHz4mZmVYaTLBLRyGcL75D9tEabdtTfMMKMWiv1FEjHZ9jCQ4CPsgJ1",
  "key21": "64YXLTp6JrFe7jU2s9o2FsWU1ro9RWjHwGBAQSNSuEYBPQNc5eEU3weUZVx9Ph9kzc4pL6jtxNvBUVdUmLBKHYDf",
  "key22": "yAFNZeqwyap6z8iriyeqsuFicf7DT1iqgeuXibenMMLsNK41VqkyEPPprFWpmc6M8PxgGd5efUTrgxeVDv7ctcw",
  "key23": "H1WEggufEH5nD7bfutuzcHQ2WpCwfZL7aswNH8tqhWVsz7zpSe5HvL5SdDTCTs6pEZ6d7SVdrmv3DQNXyF7JGbc",
  "key24": "2CaSFNQe8UYChKebxQhV3Lb95TDkQLFRqZdRjhz5a4hHsEp5SvRD1EwtHUD7NUAdNUV4oQrtzsiu97dYKbpRQCP",
  "key25": "62DLsDsXGGQj5TzG8wnGR3vHkUfqHZjamZLYJAnyv3ufekPoagtrzioFhPLt8N3Fbxj3GV3AYz9zBY1puRLnhbg7",
  "key26": "3zZxduvsTA7kS1gq1PHDszx3tcVgXVNjCBd1QgtAvVQGAnpAYRQar7FtvdXu2kYc7xkaxamZQQ6izhkcTGqfAkpG",
  "key27": "26HbEGytQ4i48WkbehXqLw8qAPiBBSttPEwkf52V2Mu6eTWonkuMwHbgV2mhwQnfwibtZuhS8zDSEm4WvuYa5uHi",
  "key28": "3N6LHJoMpVyS1hbo8LkLenMYKhb6U1KU5TZQiEv5ueLxwxfRoXzZcSL5GQFrJ2r46SgDpoJhmZXNRyLyRLH12wC8",
  "key29": "5XP6Fqe8YSyNVS72oMMvdBFPrPDZojq7VrEd2kLeRTR3MVo4BZ7PL7qLyzEgcnGSSxX6VKfjgXqzKtoC689i3D85",
  "key30": "uhRsA2ZA3n2CTKgLSE2RotRJdN2avhvZBPDmzo7kMSA3CwVVUvxRRgyNRpHC8RFymE9nq3vW57FAwH9iFRBuReZ",
  "key31": "3RDomwxgmmauYFtuzJ4Jo156YQH74UEzNitUuALoFQ1gfsmyDC2Yp4nN6ocbKYs1qg7omowhdr8LtqPvBri71ASQ",
  "key32": "bB6mU22mQF8vjUKEDc44e9nZpY6j9djvjvvvmXrQVtrTihjCaUu5CVw2xTYiR7LWaZC2gZY2AofTLpGnhHoBbgx",
  "key33": "4FFRrba525iBEUN44SCD8664p7vAjCnNzN8bo8FZTHnKziKejTf6AcrKCrUbvmYGM2a1E7UCFq5e4U9rsc8drNXS",
  "key34": "5kJXAVBPpesbUda4Q6CyhVmkyTsHosmXcSfdwjTrdFQXSswPqnXtXqxumsNNFNM17tfi3tzvfS9VESje2xZiwJwL",
  "key35": "2etDRBvnU8ZL4ujafiHVX3opaMzUvwW3VohJTxPysktuXUy6EFy2qMnuiTDzbUdZ4wJvbPHxXP38cV4jRY9Kofd9",
  "key36": "3dudGUXERG1rHAsXYzZMCAVKMDQcJAWk1aoZu6X6nn3KFFS8AiZFHWmxhm5m8d2EeKeK88XoNpve91Ew5KHWwL4f",
  "key37": "37eiUHZKY9RZY66md7rDeLpW6gKudSSGiXMg5qe1GgwMTCGn8tswPjTHG1JncyEmrrRrad6HfaHoaqFDBuzP4jjA",
  "key38": "3rNrVvvseZVwByBXsxkyEh12RKqfBxqYAdQgVcacPVSs7xgSkia1M8yeCrbG4CvihRcFUi1EZhbHfK7onT52wQ9y",
  "key39": "32YoLwbrGv4k1XRFTAWbzAvDbDnvQbHWoBxabcnEbSbEFcPqNxWErbJD4KNx2KQbeLrrJ4ZExvpYFzfSX6dsxa4D",
  "key40": "5TdfNYoijVi3agbzDxcdR2uRKAcfjeciyAbQ41cnAysf7vBbTAtq774aNmkPz9q4wRqBF1Kf5Bs5AhCDPLbh652p",
  "key41": "5ViFKGRMk4ADLqmZKK2aCnx2SziFSrUGf75zueiP4RUEmJyTj34gjieDWGcZ89HJsVAK9vubrPzrmZWmpvUvdg5B",
  "key42": "5g5msvKoTpUaCuWLiu6FefTLHafkJzwRLbqnjPRvSmC2s8FHGDbkDHc6pD4wEbGmHnjTS5FyoYui16ZG5pwo3LaF",
  "key43": "4vWBckEXHrPLuCGVqcGwk9XjTrDFfWaGCoND1YmqhXbypyisHDQSTMBoLMjGbMByLKQq21R1AAnkqpRuu7LbFoaU",
  "key44": "2wVqndRzajUt9w5q5QyKZt5iGRujFxnz77fKw2P3YVePm4bCDizB4DuUzohNCRq7nMtqzGGWHUaLK2QNQaP4EUMT",
  "key45": "4tjcoD6LRjiHvKqkV6R72Pfn81kZkcChYfG1yt1PTVDpm6nNmrA3GMmbrtDN7VpnjXM9Hsmbqdf7w6NAMiN2Wkks",
  "key46": "3VctSffVmeczPjHdNmMP4y6E5dmXJ7Ei6psgb4ZGdn4aYabHRtoUv9tikVnAVTzwLmQ3Rgg8dbyFX1E8u5jxJgh6"
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
