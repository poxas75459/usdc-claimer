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
    "3qKEyWPdazdCBSRthx9eQ89zmvUf9Z6j8xbqDSZkq6aHE3q36rkg1YPh6HUo9Dvrioo4qirYUappQ38Fi2L6ctHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mNQZC4t6sapb8x85NLyYNSEcpHEA3N7iLuUW4JGbsN5HvrSMRwkjXQVDp4ertDZvf6hJcKaNaxArMJHNsgj4dJu",
  "key1": "676wBJ67G9LGVnf64Dwcgt9PrCwzcp6n9WcjZvgnCipz6DSc96yMhGXPLcW3hGWbVSGS6xVkXqEvm4k4MvB3f7sZ",
  "key2": "5hMHL5xL5jyqeHGA8of61UaRLkJKh7dBonvLusxi1jk6VS8Ry29PukhPd17SPSVfRyXfjNFjNLsb9M2FJXce3TFm",
  "key3": "614QxG1PhZam4EAG5vEuR58kPhJL3krPQ3B5jgGfRF6GY929pYPE3wEkkQoQaym7kru1w6vruUgdf24YdQnaiLGh",
  "key4": "5zKaC87EmZac77dNPDj88dRg5tQQCSbJN4XCLeTuBPthEWj8Zp4yUe5VvZFYH5GjdEbi2t121MNvqijANVxtvVqE",
  "key5": "3rzdWFRTwFMcvbBnz9cUCAviADN5d4maxBi1ezDRK7hBh2MjrKj9FdNA5Ug832bUrSYt4wfWDz93nsGDQ2u53fKZ",
  "key6": "21CtLZjtdUYaQcZkUo4VN1Qw4d4jYNkk26USEGBTMGPtTrNYgRUoEAcThiCrEV2E9dWpcXhvnu8zwRY8jRReEdLk",
  "key7": "4NiJTCtooU4offWXHT2ymub7ciDky7oGNHcEcksv9dTeMEx7r6iHebwEAQNcRcLaE7F6toQdFVFuGc9xfRUtdJRi",
  "key8": "mzqYNzTGCWr7Bz8w82TCnRxLcBNEV8ymcjvGep1RbxEP9wuo9LSonSFVPZ43FaD6g73SEcqVvaz54QEmP7Nushf",
  "key9": "61UVN72FXoHXGcpMCuTXkWzESR8rtu6iGpVNTsZcmn6tCjtg7oCv3y5JgTxBoC2J7Ttt8EDqDHFeFUYytRHjRQKe",
  "key10": "g16uxbxeYPRewsfXhqpgwhi9QQbS2kNLsNxXSzxcoXwA6jhZB6uVM8G1HTS6Sn4TPMzef6ujp8g8Q8x78kfhAeU",
  "key11": "4BM4h6fYBrYbi9jThwJ9yUr8tnLmcHCp9LecbNRkwTiubk3kPYJ7G76sfaAEH6vLk5d329bNR8RFWs2baM3Hd84j",
  "key12": "3339xva7tbqj73bd6GrZ81D8uqSPPChV6uT8QQeL1CXV7rT6FYQmyXeRzuGPTf9Gmq8oKk4uaRFXGx8en4dJMifr",
  "key13": "Wv9HQuxYa17k1g48fT6U3YtkNn4EV84iVDTGyw3Emesx1dkpUnH9nknmrBBzJ6jiqaBXtyofh2iu8TeSLguNH2i",
  "key14": "4T8av262zVExNXuEwdGu2y52kuFv6u5WNrU4KbVZt9EWastQQxHVFhHfPUCBgecqVfN6gtQJyJXQkgekFcwPduQM",
  "key15": "3pKqYjWHJ9YQawCQkogQo8zjyVidGwrG89Jf3tPfrhY6ynsdtss7D7nSzqENHgxUQqfKHda6PmFGBcsMEbQHrJ7G",
  "key16": "5AsNRehhwpuj5EUNqTTS5xhYyepX7Ne2PboHBM41ZuZUaru4rdPFVUTtLdwdPa6JKTJqHP3EgTFDSGX5d58d94WX",
  "key17": "4euvo4hfq6EN7B2GMuyMqCDE1hBMrWMmuu2L18JLQkuJbKtbMgKsf1nRECURuUH28xVoYTofKuNQtdDeoALiFhUU",
  "key18": "3xwmjRtD2GqAMCuBukneYqTeD5ZUPHWrgrCAMk3T3zy1UYfdLKwUK7dZxPiopXCTxEYyVUUBcskCP9KcuK6rqN22",
  "key19": "qV4d9M9SNah5EJBgok7NN2gH8VghvaEwKtUsJyU8unfXEYgUxKL8S7mXuHCBVc8ab8oEnoJVmMQnqu1XefoDfCT",
  "key20": "2UFSDj1e3JnZQzz336BHnnBMMVRt8aHEvGpWADqeUiqL66hXHNKCsM33o6Ec22iciCW4kwh1nhVzbF1RNRtkWHYz",
  "key21": "2VY9yPv5Y5scgo9FCQQAWu3Wox151j78GZoTJvYtwEPcfFK9TLbZmQiZEQjyymcS4cEzjr2tNctKWiRw81nUsQTk",
  "key22": "5ouY5FDsfQSn5yfGbHXt6g3x7FyDJ2N5eyC3VMR4gToor4sq1C6fhB6jsNNq9phEYEre1VEEQdNttWNBNvUQqhoS",
  "key23": "4TybiGRARQbbygasbZ3vqBrTKsWzLTD4bmhC5oSEwFpH1j834YGMu8YvyhornfwG7YsEutdTTkZjQVRL6uq58zE4",
  "key24": "333HQGH1rjm9nSVZMc7bUynEh3apxrjgRG5ACEYifZwuVnyEoocQbNT1ijZRmdSSGsUnVr5U3jxAC4Yc974tUYpB",
  "key25": "3CDxVJ5peXxtGMCKXQtnqQgoNi4NnLiKCeKg7sYdYzmtzcAMujQiW8VC7qE8YyYSDbmBvRiXPYRdUzA2dLBRtZwq",
  "key26": "3HqLGDgpwV3K85fUz8HcZDhdrYRHP2nEGt5jxQ5mzDWYC9Jn3EuzVdHWL4SDpf1KEk1dR37npQyAhZS3xHDqZjMw",
  "key27": "5U5sxX55tAzP2KGfsq9C4v7skk7VtauwmNXdTRZNnQXH1B1e77kXoMLwEnta5dzdRWs28zYeMXmHgutwcr3QoDTd",
  "key28": "2P9WWoMPMgWMhaxhsT3RUd2TzYVPT1uh7Atckci7Y4xeTeMD2ZvyZ7SjqdGNpB7nWtBLixAwr9EPRKEmYY3LaDkS",
  "key29": "Fn2Wo7G3Tdnj3ExoZXRcx9ZubxRNHG4yZjh4rWmvWLkgeNJArg6ES8dmwTrgvCYW6StXM8ksw6hMUs7FESBUBkh",
  "key30": "52pXyXobUcjUYJ7WAFmHh9Zein4UCTJFXTW7H2mBZq1Bv9434xuYyHRb3EUn7RHEHVnNoYVMoA9nrzfWxCuYhnWy",
  "key31": "58xJtoh2jEib3SxoJ2jmjwMR4UTaBu7Ui6iin6KqwdU8oR8dA6hLUNGSSXjpheVBw4KnjGGPduou2PSTPmz6aaag",
  "key32": "21iZHyeipFeZMb5XFV7VAqeZKRAid4Gtihi21VMDPUBwff4WSPeN8Lg9zu1P6KfALtE4oEiNwaj69SgRVAUQU2eg",
  "key33": "3exShV9KVG1CMnWAPoSmY4vcjsNSmskLZkGbeyTTrfRHCp2RBsGnEw2HT7GN9hTkWL8R9DGZmvnhZvmqopMHkdaV",
  "key34": "4fDmGguaPUpQgaYTs6DuseggSHar9SQ8fyWySAvEUV7eFd2QMJ6HcHstWvPNM7oTydzvDbLo1ywZTbU4xF6qTQZQ",
  "key35": "iPSriTJAgxhu2Mnx3bb7MVpFAhJFZRLFjPSJzMfQzLTFemxMJZZnLtg3aGQ5YKpuJuMPYvGPfNihvoCS4Lhzfzr",
  "key36": "3LFBQbdqUZCU4HXAnRPSLSd4LZuMdsu2AkSzmra6yyqifvpVnvjiTa1rd9CJr3LicTokHEKjuphjJpHVncy3TUqY",
  "key37": "3CAa8cMP84dbhqx5MXAqpM1aphhUnxqef2doVmiHD2tVG1Gvu8njwjtB9puChAo4NTpBQGJa2FUsTB6onbRyzUpQ",
  "key38": "5wUTUmEJ36MiwQWDcLvDrCtcWW4wm7FvA68G366te33bge4zK4XkgATHPTmpud4ZutwyZR5n9R1WzvGDDc5WY8EW",
  "key39": "5foizgt7rkBKs6N7ekRdTQUJZjHPvotEtHcnujeFSUijtT9dwpEMA62P2kMvxKJQHX9rQquCAuHfbaHpq4SiuPJ1",
  "key40": "oFk3egzVuAWxdoDbkroBYBAb1SKjQK5xeDt5Z9MNqAyvR4EvvZ7rsknQJwErjpPFsTviLVS214Y7tqVgv1SnyEP",
  "key41": "36WvFu4TgSLb78sSELWkrEfH1KyP8ry2kNFNikhUjaVh6ckiufu6qLg18T1urPy6voe5oWcazFL51fY7SgaFAy4A",
  "key42": "AHSiwb8fdsq5wpfiC3msCKMyy2onNzsarKum1z8ospmGWvjs96PU4XiBG4iucTjhM3SENo1RCqau8M6C89LNsCm",
  "key43": "38BQ2crbUHQ6KBceYWbTse3NfRkoEnUQzm4byNLEEME7A8av16mrHnXbhmVtX4dXY6mFsNzBAhfr7KjFVznhnYrV",
  "key44": "3jRgWDnVZdEp3FZfYijALYrbCfFPGRWmUxwUTyrriLijhkszGbCB69Z7xKTipsdaEqMbaLGQzvx4dqRWAW11DPY8",
  "key45": "brBgPVPa6AGsCjc85HZ1N1NawD6nPoRBLDLnEBVYaxU3GTooBKLUB2W373CwSodMvEaCoBUh6NuyojRCYCNx1tu",
  "key46": "2gLYqkGtUPBSZMNUXWjiJYACM7qkKLpGPidezpMMfxWH7dJeJ7rmvjPd6CN8Afvn8tVFu4HZgUGhj8CQzfAuxjQN"
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
