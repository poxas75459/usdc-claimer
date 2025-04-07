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
    "5NqRRJ8eabBzevazNA3rbDF2CdSen121bPW5Z4wyivmPudHG3tv9W1z6cgHteTfpZKhVowTEXiXGLHxgetDMFFqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VLvqAfFAoQx3Rp7Pw57dJxnJ42nCrr3LhZ2N6HjVkVQih6kP5rBbEjT76XuE7hhA5QopKaQ1pSAtpE8NJB7Vb64",
  "key1": "4WYNZKkXwKyeokr9abwpCJnPL62sfemLCgGuTiUNzX6p1d5BrciYHXDGbDrtMWBaEVkLSKb59FjUR4gZvsdDxfRH",
  "key2": "3gm7MszsxyHAoryZaaXfWBr8YESnWmd6B1qnkbFNgXcEvXdUR18U5jxKBxhdLP1SvDaZVV4FFfDzudBFeUEgzBau",
  "key3": "uTWttmVgKHXBJhSbJWu1XH1p2oNrW262r1LGwhZ4DT9SqnKaGRhn3AP9amUvgNeMbCL2yysxoFLdTYRna5ffbJE",
  "key4": "4BcvLEHAK9585P31dZR2TJg3fyXxrZyfT2jVtHtL88hviPkuLqe1yPnLKy5JbXAz5KgQkRo9YMtACTAGSTEA5dbE",
  "key5": "3o4h15XcodFKcquXZk71ZNBaHcquAfbA6vZxiqAJrrybvYkq96y1XMF93Mr5NNSQ468uoAn2nsmEcsXk3ticER5E",
  "key6": "3Y3VKbL7C6RG4tSgfY4JcPbSKqUS8h8BjTT6GUJNA2yjc4u8yXz8Q1Vi5WKZKNWC7x8Cm6DVMoMz4eAGGu1DM4Gv",
  "key7": "3DYCkxVpuodfSeHDAuADFJJyiMaKx7NazPPdWyTJZtpF2pLdY7ncBFpUdHtsFzuJK75LUAxuDY923gz5s9AYvncN",
  "key8": "3UxdHHgWVqbJNntvz9SuGVimKviPJyTRahDSz1BWJFsTEELS13NaE8iYYJUdsSLTrpx7JHaX9JifTtEmpq7pfEXL",
  "key9": "tT8znVs3w5oegt6ifeXBCPggY5nTQ7wRVtNfmt9Jgza9Twe9nmM7uo7zNt1tuVuHkznqW2W9ESGpHSu1L5tJoiQ",
  "key10": "7gjdAXbYoJcQSa2VWwphojWebMuBCWaFduZNGuhHyLWaZ4DpTDoA4wg3FmB3jrp6vwW2STK65VyN6SduKDyGpTz",
  "key11": "3pe4KGMq8gJRhCRcRVUPXdMsmEcJJvt7VdTqub83wKgMhZD4wcTGf6zu2ev8eiCPkSY7YSB52uqVGNcAx3GzL1BL",
  "key12": "4U3kUkKydcMfcP2suJsJrb6kY8cXrjJj8Avysie3CZ9AeXWHKAcH4dvhD9ZXraaxprnLgHH7Hu1acPZXX8Kw7MZb",
  "key13": "56yoKqLeBMsnB6mNFHSW9AUVEj6nnFLvafPp7rurJD6hibox4funcr3Ncr9Lrp1VPXjb3NMYJ2RuJ1cLHr36N1NA",
  "key14": "AbUsUZxTzR8Fqn56LrRbVVLVEPc93b4ru9mCcUb18inBEuMskriutidaEU3fMa6srKkBJ5Jbnzsw23u9YRwtUKJ",
  "key15": "5fLqL3Z4U4g7nDZgAbn7jidPF9XbSxn3Kth5sbYkiZJWBBAeeMKCszRWx3W9r5p8qKn9hNphczzMd9P3XjApYaAH",
  "key16": "VwQVRpCYNRR5vXXQVtEYVKjnHWM8kzLCGELWqzvbK4iTVnLxaaqPFUeMa2uPPDiyhnBC6WRs8Cd63WXAeEvSFyH",
  "key17": "2B5kVh8F5N6k9YVdQ6Gqwbd6HSEzofhLZra8Di7JqE4we26q1PXt9yBpV8Ff1WMG2ief1rHPxL4JdUhUWm7rUZkv",
  "key18": "aFxRNtySBEFYjw4gFNJYcbKuwGA5nhyUz5s5mdQ5df8iFXCZmq4DmiRounskKg8YdR8niU3yBrWUAkK8pkucvZv",
  "key19": "64XHdC2TVQ9X1SgChSRQ9arramhmWwauJJgm9DooDxNe8cZ4JF29My4tqQbuN4BYB5vJvrHWXhqEhBfHg3QNzgnQ",
  "key20": "5DfeaGW4F2EDQHW5we7aRCjZLh8HhmsBGABZifpGiHGWUZJdQpsUMqPDL8QFTatQYq2boNG5jUjVVsAjh5NMPURn",
  "key21": "itzMjbcTYQEU15RdQShATEqXEJCFYkxEY8cKYgFaTTeF4NTzaZg9NMrEsE4vDhkFJT5nRpb4ykqQJHU8bGkwKXX",
  "key22": "C8QqjcT9oot2UiKo6kHtxEYZf9kRAiFSjndExRdsMFvoExEUje4K7H2NJfP4kqGMoMGrQSTnGDw1hp2zf7e3NCY",
  "key23": "3jvyLjjkTNDTxh3xZnhSG3CRAiwppHvWKtJePjzUSfD2nUFyYxJP8gqFFBgsjbHEkLbAXhpu5gLBPF9m19vXJ5nH",
  "key24": "55cTPKaM2kSurY85RoEVj4sb31JKZzZ4sN2HfmdwE6acHtTDMstA3qf5vCBSWLu3GpjW1ALtGKVomYGTuSse58JC",
  "key25": "H7hXYpF36Yrj7hD3hpgDGL7qCTMf6wMweiov3REfBsVyE8ytbrjMgNmzKgLpxiugx15pWVxDw3FLjHR9jHLAaVe",
  "key26": "3bFjpsDL4v1VnC1cTcm4kmE4Zb5GLF9vAygg6FUhVVLASx4wYFYKsa3RV7WTtwE4Sco6wKentJ5ENVkGsJrPQpHW",
  "key27": "2Ui8mAu54ZtNLFjtMPCKYaXLG7WzJMhgEEx1Bp5e3vcs139FHieBvSMhGPnkNpLfh7Fdf5pGLrV4NM2e7cCJhnpi",
  "key28": "2NbGywBrCezi3KJ4Xjetwa3DB3utA3VKTmzmMDcH1HgeqxqNLYeysaK2rr3umu4w4uaemQzEGejuiJZ6G8JYrJVL",
  "key29": "49zfpvXzdUs95B2yqfo2RUyVXnvFJqroDpVfsm3jtLhftsTj4vUGhnUonLC1Qauo6YzWjsi5pvHpfS6HQsN2ACu4",
  "key30": "5g7DcMMcVYYm8NEhTwqYRAt4E4QfXuN9Qr6ncJj7JTkfnrHweyvg7vy9T4oPigeWdvNgivh8oo9BHrbZCatJ7fVa",
  "key31": "3tdTKqUQyMuBSgkAezrjPMXBSB6hi1QjvcoWeD6dK7BatHtE6TbB4No4Y4cvg9hdqcVJPKRT8p6QC74b3DEmW9o5",
  "key32": "Q8qWsnP4TNRFk4sfupVnsnHu7gv5Bh5mGRqh6qQ936WYpXWchY7MMGkKSkiEnccYhVi2miqojMnY8KwDeFHbY3w"
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
