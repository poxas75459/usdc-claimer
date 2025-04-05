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
    "2WfE1VA6J7vqMeNvrLXUVMttNA1u2LJrYgLV557GkwZu5SB7QdA4dLz4YKqQGhaq9s1HfEkWN1oQFMSPsDdMmfN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWwekVyLdH3hhV7XoRsduPk3Y18YZP9k1dBvgFQDcmkLURAS2is9i2AgLmygcDdUMEXJM3c5coRVjrYu94ykTKX",
  "key1": "2PocWBsyHrMx2yEH6wph3bQdfnwsDstwVQupZmZXfWi2jKRArr4cSjaL8FSPsKcExGdJVzJYtzBYvbjDLsz5pNG7",
  "key2": "LM4op5ixRKGSeVBvhXyWbUVMpP8jo9JV7i4o2CLZiVDRHUxAnuybXV5dpiEukoS8sBgYrbch2sLvDLvNxtEog9N",
  "key3": "5jXy4p7ENBchAnm8LuU5bRhjafcwxDZtgfbsgbEDJ5dLXqwtxukHKhKKHvZrJZeLrLq6eN6T16Gcj896mL6GwyFS",
  "key4": "2PoNP4U6WSwsBue7ZfzCm8fS9qfeVF8owXEGtsvZ3ant95vSbV2ukFtry9pvJFC14wvdjYTGNjzNfd3AxnC9Ctob",
  "key5": "4gR54z3K9nRJ187Yx45BktYzvQajya5CSMCXSCeJSchr1SzJkjmYHkJfKWypxEMFgvbEf2GZPvPKLGvLiwN7VM1X",
  "key6": "5FmhBykAWazfHPX6NDkvPCWK1gSY5NRAPGuEdUTNWdzY2jRvm9oi5ZFJuSZ6MQpqkR9jaMkTJ3c7AqYsknE2wRMA",
  "key7": "3hqnGiDiSMqdxp1aMQnmbrLuWqbfRQkdeY5pcwwVRYnL5sAhAos5QsSMSaK45RBKjpG1fmtKW5631H7a3KrFDTWY",
  "key8": "2YXKLBdCYwATDTdqGHsPS8Lam9p4es1d33YRzL8aiLhB1iUtgCiucarY1JLaWyap3geY79e1PxRJyowNB1fTSv1d",
  "key9": "3Xc8DPC7ECPhnnQDyk3W8HgRKopHLCPi9jjysosPEEeFTpPNTyXon8kqGe7T7hNrNxWzXXj9htDamjYLryVcCqbY",
  "key10": "3kXdMwJwz3HyRMBRFFTW71aN5wUo5MkHphpEFMKWDEyXRFShV5PQimpZJ8rnp8KxPn4xyByT3qmWHtWpiWQNF4de",
  "key11": "4uwxuTKErgGVXusAgs7KMihxKQdri8pdoQfzLj4zfwBLTTMEFixxANi78XnQvvpGpXEWjyCcgV4R38zaPSyJXPNz",
  "key12": "3BrHRWZaA4Gd1FR98PjVGkmZgFZ4vkC5JbsZDcoyry7GVg51DU1NFNCnn4geRhHwikWixY7SEWJhpwnrmsFpeNhD",
  "key13": "xBdHGB2145pVffuMnQtUdHemJ1DPVWWfzpux7k3Z1L8nMYD566cawuvxRMKoYZRkkoMAYHoASKXUma3pN1EBzXN",
  "key14": "2uHRxLsgHXUGVyyqFdKVAw6sCJ7euaRujPtnrBBJwtBCRU3n84x7FhygyAP5hxTWE3mz6ws8f4pyZDpexDvdfSc1",
  "key15": "5jdW1SyXhPB16P7vozuzBmV3aubBM1ptNobSFAqEKoC1PbFqHPMQ2HnGnvV3PKTjgGf9GiWLrGeSykZMiQxBUwDr",
  "key16": "4Erh4f5BMQzqgyQSnSVx7SC7YvyC7EhSbZ7kzYBJC9hewoSSQsZFz1FDVmNQWPGKyE1v93g44vLJTVyCkc482Cd5",
  "key17": "2UkuUnrq1vfc6Sj3zqXJKMsYbDByZL5JmYPjJtDiaacdz2LVefemdjNPNFjRQAtPvHpKDX29qrQLmypdkNAdXP13",
  "key18": "5jfyTfEH5rgWhWArRALXRnmqrddBVR7rTsAcV634MLFnnAtUU3Q63dJiLTYVtGcsxDLDuDs1LriujUFykwPm8QwD",
  "key19": "49PPVi4NYsXQ2pi4kw1zEQqSMYXWjQiEgvQgj3b68NaD7QbvRaEJZzA1AZ9D1Q7BYnqcp7mGE1coicL8mpUxSMf1",
  "key20": "3NEcJdpPiXiUtrR3DCXbRtDYsaaAbaFJEjWftoN8vWfSJDW6YnK9QrpmM6fq5UYgy5DC4k9ejRy4T36bvxPFvpVE",
  "key21": "3TCsjWAMwj68YjdEPZJsvLokPQG9bqpmxBj11fEXNGqetaebgQmatZo3aUUTqPV4hoVWYv2Zt19vijZ7KudVyL27",
  "key22": "5phGzTpoWzPnVT32GYmECd7MUF7RxFoFzN3jk47RhZZfM23vi1RaVqqD66semeVjiFkPgpr8PSF4xKnKxLxYhTY9",
  "key23": "3gezWR7MWx3fXkyvkTiA4tVFp1fabgnJFLcB6ycKjBgsPaVdB41TvfoqHBpHgpULDfN8dZbcp4YRSXx8CskBFPBB",
  "key24": "4Ww4742mCxnHTHpSb1USShxQSVxoBQbBCbTsYxc5u5wmhGszFPz5Z6aMtgLxNxo1jXxY3eJ3ZXwwEfrqLcadqP1Y",
  "key25": "5QcUxHHv5jSui493yj5Gg9Q3xY7H9FxzgGmXmfqDvKyDPUbm9SdjmPcfZCAWSqqkTR1Mt5Qhkq2BiMuySTqMqUiW",
  "key26": "3d5ZyVk6o2gwD7WWVK9JV9b9CRZ7J2KqGvT1TovEGcChWKWGqNyTA7KXRuUss8DhvFPX4YdyC9UVuEPdeS3uG7j2",
  "key27": "59kg3HqXouwWjwZJs1DJzGaRtdEcFN6TP7sHgzDGmyepfKFh4HzhdzTGjP58dve5Fcs1Zo9JoYf7PEgcjbqXP2p",
  "key28": "4EQbzDHzuuifh7Pck8fRhYPMM6YCUWuf7aRDwwbpedfsEpw7mA3CFocA6ugAsrxaw8YbGpfPjS9CgFXv3SgHsChh",
  "key29": "5GqDKgo3weChP8PbygWVnHV9365LJg9dzLPCc9twHWLx3vRwG2MDN57Aj1r5X2sTztiZZuTAXxGtKKY2ggWVf3p",
  "key30": "2bbLUiEmNuJuU2oyA6AW3aiPLe3CkwLzaKh3cKkUwytFxXqRX83QeTFRx3Ew5auye5vLQfG9wUpVmwgkWxdvcMoL",
  "key31": "3NqxsFmuc6Bv6iEBC4tUukNjXWx4GVmNTfYHPjGFSBzvpb1yGaMwAMqBLFo45Qj1gDWw1qvCduK221SP8rZCCasG",
  "key32": "iEE36otgw31WTncgTDhZEeQmYae9KM5qnZrnZmUzv34H6K4kxFUTKiHKhBEkL6AACBuH4y2Pkzpz9a49x8bc1Ay",
  "key33": "4ZUm98hmHJwdiKtkYE4boV98tVq5jDsD64RtZv6rsVVJDvCboC58oNVSySrWqH3QHE66BFUh4yszhjfbG4HF6PpW",
  "key34": "5unn6mPbtxS3d17BDrmMHESn3jnGezXrGWrgnu9u91iyMcHAGTuCxWnDcLmmVaLHAKkyNioidW6BJbcQz56nYdFC",
  "key35": "22qkQpQ4Pb8vDPDUcKvy9BMNx6j2SyWyd5ZaY9d2JauZFVLPhUrKW4hvHZTqFVVpNXxa8UTTFkB2sG9jB5ukJbHp",
  "key36": "8sHrPrH8HUTbUKJb9ewiBKpFJjuyTcQDf9UVTv38XEuRUHDdbouxxqwUmT6qDs6NG4dYSZzA6zQVLEGtnTiYXeu",
  "key37": "4e9yEkMHBDJgxfnpi1VxxsXXfVNwCLr2YCHsGvnckJiQihY1s7y1FgiEAvp3qc3HmBzh9421jvnUjrw7pzqaB5sR",
  "key38": "3xGXo4iutCqQwcoJHKiPtDCk6JPc8djPiHQ8LK3376ButoHiB7GSyDwFsCTXkPwcUx8DM4DrrXYbFGfNmpYnjztV",
  "key39": "5zfkdvbVAq8kfDqkQEvV1rfJrp8T9q78yLYYEtsWHC3E7jT4pUK8NrvzKauD9xbpyso1LYeLA5KkZ9ACLHV3iuFx",
  "key40": "2wunmy25MBtTnSmwEJ2quy7EcyQzSqnvubPLVbLyYt8BAtkzKTEJCeZktUvMSdkfDT8r1jkhfBNUkQZgHGbTvvmS",
  "key41": "5QUiL5XfCLYqhvGxN8mfNP1qF8hDF5sHX87o8EcZ3uJo8vgVF4SVSquEWT7knesxH8kQ2DJYcgZYeYa4b7jsfkGM",
  "key42": "4NqdVkoQkichBkyBdyuqBg2omM6HaYZcgDfzWis7XVb6L1SdgSqYGPiPkLCeroZcifUFS8omSR7c41ZBQN4Rg8Lw",
  "key43": "2RuR4AZ1WYmhgkh6qyXeucR4BQrb5VoMQfwhGvy7xbpsS9fWbRpEMSwRqCL2uBR2DaWSva3ehL5fNi8snrDxj3iM",
  "key44": "sNyFbjCpqPM3BQz1Md56f4g5n2nvqpXkZL7m8E73cD7NhsH38WtbGwM678ccMPd2JfRinPqKUA9MgBrB56qxnE4"
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
