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
    "2s2HwECegT4jnZGPGrjheFho4dJL1NUfvp6owAi9pEfis6q8As6YGqw7VvCiSo8mYUyUzEDJ6ioFNdqKggS45rkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GAw6fAqHfYFvykiNZqV59ucUvQkYZc7b3F5aPo7VMXGNmfnhvc1X8r58AqHHtMxViBDP9tDXt7syTpdoyjLWw2n",
  "key1": "3MwWAeCpCRxEpYntbd9L1G2shW7Qwh4VMQX6GQc1eMDTV1FKe1w5koGPvr22ZNWeLe6CpjtsMyhXCYzzmutBbTtn",
  "key2": "37vqTVLPEyUV7TzTQpeG6CiJTZv18mEMuBdTFvVXbNVwSwJT2r4hvgyGRvTGpAoLRm1o8FfYjWAVPgqoT7nYVBqL",
  "key3": "dj1YT6CFHTyiaqfndaH1YfLLGQEcPz8xRCgXiFHt6e9E7VnJfvzE2bV16Hk7C5ia2Ji3Bo3t4Deu9vLHNJYw6T4",
  "key4": "4exNXsHimTNoqBMbRfTBuY9AHdXWdjdX5oYcatErm8xqnFC2BghWa5hxchck5sc7RZh2uwr9oWUyN246QVDTCWee",
  "key5": "4fAjhZ94bFoccevnMknPeEbDoh9YHHgSDX86eSsjHQXZmzvN5AWTWSPWE6K7RpSJzzjx11maxpScZbaUx2gQyfqr",
  "key6": "2GfFWtsA6dhS6HZ3aVv44DVkSLuSW2PVPnmok59ZAbtXiC8qPaGSMrpJfftNS78ZSi9LBGjdAGPHDXyQSMgweCZT",
  "key7": "25Enfoz48M8DEFC31qKWCkcDNPjwfcUp7JpNa3Z5MGjAGF6kcF3EqnQDvwP67MXExbvPYPdScY9PY7V29KoNG8gP",
  "key8": "3rwfHTnoQZa1bjTckfaZB5LqeSx5EFi3VxCeVbcdH4bWM3CLhci6HadNZQgWj9yt3bAEFSiX1CsamST3Esfy93iP",
  "key9": "ENxGNzWsLJcdmHWpXDpyDNqL2mpef2sw9GVTU9HUzC9StGtHysFqBbgKPoZMFFkrLw4MLFyRc8kKXwjNYRicCrT",
  "key10": "3epoSgavG7haDHr5RSgETLppx1RBvs4b8hhoxW2ndrh45xcMwCTHPYB2emMuoNXGzJogBEcVTV2vBqLZCngrYrwQ",
  "key11": "ADq1YQN7UK5PZB5ozeAvDuKTjnRftZGuE9bsg4ETgZKKFtNGDMwtAPFvVdFaQCPsomShSxB9fXoXsTC6oKACPaq",
  "key12": "4zyqKBAxrDPVjqXPpuwrjoV5SXVWRtxB1gTqqxgdBHnbsxB2yiofpnm1CcQBaTfuBmswKtVwDJ3N7NWKWS9jPkY1",
  "key13": "2pqKZgCoMGJSWh69aYcLyeAmJVRzfysQyNKL2zAMCjCDWLRE3jXFXndqP5iWsTcuPLovV2vSY8CffspYBGhTJjhB",
  "key14": "3ijAkkdujBxeLU6t83H89U1WucWc36G1PFEESQ6QijZ6gPd7wLV3r77K5vF4WoN1xfS5PcCBaaJBk6sPeeHRN4Ak",
  "key15": "4VHFoG6JJdxK71hNkZW4s2YwgLaViQP5hpWPu5HPRy9GsM364DBM1UmBaWZUgqXuAJrpmkDDrE1fk6B7hgtsqmUp",
  "key16": "3r9NkGXdxb4bz2sCRFH13Y59iTSHiFXcUo8CVtBk8ewuKBUp4vW54Cmoct4atv5o49N6D8DJy8JxCgkZyFm2t47W",
  "key17": "3J45ZK2pbU9z4rMeBUNAkj1uoiNvSxBXGVykUyJezAUyNmMVxJdMEjmxpWSLmyek1eZpQZX16iMUedn7VNBTxvgx",
  "key18": "5ZQ99fHMF8fMH8xPNFaKpX1zqmJptk2LNkmSoYAvQUzBi8Dpd95kFoYSYW2ncUaoynRFBciVqa2iFJV1xWkr5Mr8",
  "key19": "5xumQ3kqrmXupYHdm5RSBJj7DGb48jGpQgCGcfkEp2z8o24DLnCyBYVAQLdGBEMTbRN34tGDvTA1cvYSWGgBwccZ",
  "key20": "4gAMC2kzW6KYhRhgssP6ZHSVjnerBKHnPyuNMkj163EK19Qf9w4tinpnKwPUkUDombF23NSRZ5sAqTnx3ngSRdFJ",
  "key21": "WfKvT564PGvpfNK9mHpJUk4uaXZPiuM6DYaP1FpNFp1fjRUJFJeUxYUPmnKh3juS4Qx8JDKNhc2AfZXCbjvi9xz",
  "key22": "3bPs7ZzbTZcHx3ZjJWAs1LQ3L9BqaodVC7XYrNitQw82zbX1WqMX1rEN81Kgy3TJ36j2CvrTG4Fb9tx8Eqy72WnZ",
  "key23": "3xhyEBmGun3eRg5uAvL5B8vGg1XpDYzivi11nGKYmDrwozUum7AksmpVdbyiqrUdUzpscduKDWfp5Xa67j9N2QwG",
  "key24": "4trzvbsmKKVtek5M3UQ9SynmtfGw64c9RKojiKWKvdx8hmU7Q6WRjJFFomomrpbd1WvG4rg4PZ95BHJ9etdVfQFj",
  "key25": "4CTQkR8kbY5TPDdLQ2tJfJG3SYor35WH5WN2FRU34Qg4bAhUsVzLoN46rPahbMNiWXTcyPLvYugGDLS8EDTLigWp",
  "key26": "4YMV6CFbkhVcp3gZ8dfdRhGmRGrzgSC6cnQpsHbtbSVLra6STDAhMcrCkcCTbaeojvoRMToqd5GXxt4tL3bhF3yT",
  "key27": "5C7st9NieC3e2WbWkMBmhy9KegGzR11DhGpyM5d1bW28yG1mbHTuaeRCVNmobEgLXvsANgpToLPmNdj6JXbqrM5g",
  "key28": "BdvfAAsYRM75r2eYnRShjnGJPDQmzXeAbmfNaEr2JKGNeEM3AsGLnLwTrHoECC19BTfubkvWpQU7hNg6kYwFwXn",
  "key29": "27g1mnCYoqWbpnQ3jRJyfbjntWTS1ywsgteoKo4m8PPCmtXx8SAuB1qKSmS57aW1tf3oFRdVM1ygydDkD79hKoEU"
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
