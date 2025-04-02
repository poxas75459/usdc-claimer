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
    "55KhCTUHJCtT7DSMPp3RFVxLLxku6zJXF4i4Vg73M2vVLffcbSyccm37VmGp1Rbrqh4MatW9cxLTTEsEpLpc5bV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ci9TcHT2dZsgDeEtE5rokmRdvCfGaPUQFKhJTP9fp5GTEjNKpSpJqfHAbACgXSJPFugERZUtB4ydbvpDS3dqbzD",
  "key1": "5ZW7wJVVrDCRN2dV6PiFhJH2pfzsKzDPUVGkubPFTGRNQJYu8iV6JgrjkrHouPKB5xWe1dF7PuR1jGFTZb9J6hno",
  "key2": "4eZJmw2u7TobG72bfUzbCje6XZsbaE7EUBQE9JHAF93M5E93hReQhQRwHFA15RpDhszyF8dE96tZzW5mw8VQ3JFc",
  "key3": "spVqg8dMaqXZnsPtdqygcumTEFz3GQtaVYUBKrJkJu7pvUpvnNEsPpaQmx6eRH7P7UM3Lf3EqfzeX8kkCkJNRr3",
  "key4": "5DrbAQLLdhap5zf4pPerbXpwMPXzqp2JkyD71ZRyC43yXXQe7nWvg1SEcf7gurwpAgJRQ9hydku7XTd8p2Hh1La6",
  "key5": "32nBsS5KgXhXwyYoL8PjuwUd7HGfRAh13YoxT8YRcBfyHArHjsCN2msQtZeBGfaUw12qJbcP6LCGW1ik739MHxm7",
  "key6": "mG5tPhM15Qa4ehdePW46uoZGQRpyBShRvdCRZoGTQmF2eRWsAhTRuaDCyzU1pbXnt9vaNswqUGQwhfdkVyuFieQ",
  "key7": "5KDDaxmGSeyad3L5VXBxGQ6ow2g1YZEQQzLKt9R9f3UhJuDNTm3795zibYGksWpyMN9kXVmr9zdSa7wUNKu7UnHQ",
  "key8": "4tKo2bJ3xgQg29Aip3DCz5x1amc7aKYCymHVSsYdywehCU8mV9j6fQ4Trik42qpgA2oJUE3RCXToydpcv1eCKCyX",
  "key9": "58CagqZXYk25VYFv2YBe2z1Xq8ieU6vhFjFGspAnpbACufwUFm2NthuBxc7qm5YBo4wfeKs1Jk1CkQvjT2kpY8GB",
  "key10": "3Er99eZTah6kKevcohxyufuthsjPokmEetZ5eZ2VyLAYmDUaKUq8cXLPV2xuUNG6DwRqoEQcWNt75rUDCkzhwxjD",
  "key11": "4Jd8NmQcZuhCyTo6WuUjGLKqHg82fdjpv3sbDLkpaqaFv8N1atJN6Cipnb9QBLDpwC7cJQrDHSXtg2pfLjuSJ5fm",
  "key12": "3eQSFnbEK8rEJrnegLrpzdTcrzeFukkQG311zn6uRfSAji17xEqRmZVNE4xtS931XnRpJGTChrPxGwwvpmPTNESA",
  "key13": "2egkiysQz3wzHHBpZjk6LURow6jwjpTR6gqmgMtSMc3q3jX6jLdh7TS3aEE4MXPkxrhXDusUxEZKjx7QwiaizjnH",
  "key14": "4DBJMSA48XCzmgAmquK8B1hrGVDjwjasftKvTGg4hp3bfGm6my8qQGGfEHJvMjo7KqcTCxpqqXERYx7wfBaJyHEZ",
  "key15": "5ZbqAs4XRvN3UnJRxsG61hKoVpDY5ojBhe9E25A5AMVzTASsNujje8SNTLo2eY2oL92YRtpXQPEkxF1sfsFFS3KZ",
  "key16": "5QsQnEsJKhEPWTDV4Q53neYNUvt7irNg7dxM6kuGFNptaccjZySQU8weZQDcmQFgeBrvVcWr1kqcNMUZ4XEwbLXS",
  "key17": "j5PzWG7eUdg2adXKDajUMfTXPAGMzkLFfkb9DXstyihBwq27eWtviQwQULJdWTxmL2oroecnvJPRrXgir1hSapt",
  "key18": "Kmwj93uoNPfNULgt8HppmxMbf6wKjX3d2h4tu1Yhn6d2GRLxKBgTpnFBMUofJPnmBn1tAaJpJAb8r26NhqwMhAz",
  "key19": "5AxgzYDUisCyeFM34DiDy8y2y9Y29dY1kWouf1451eSSMqPrXES6oPTfaKboDeaZgm4imz74aqd55idjT6VJYsov",
  "key20": "4nmDAL6ZHbsXCTCCqx48cPTbAjVbN7UBxdy4JHbctEexudq5hWjh3RegZPz1rsbMNpxiFexMmybzB3f7eJQWhdzP",
  "key21": "25PkbRiWQd3mgtdYJUDPMRYTTov639WMLcg7V4v5VmsQNRHPTUXSZ8zRcypBQxrRJJaVL1DLGNacgKa3ndGgQHex",
  "key22": "3mmkUtKn9pBGyR3u23WHsjK2pYCWZkN2SzvCm4hYsm7bWb3TAvMKWSn4eKNFgyGSwtZgtP6hyE5oMFkenuaC1w4v",
  "key23": "5Rds7wxz1vHnbtMu9CTkX2ChTsiB2qej2HhtETJeXKWDt1k8JFWHssUzSSGLGy98jbFEjHmeWGuqzZq22HG4bhv1",
  "key24": "3awPQMtj1qo5adwtvQ7NUF4as7U1PHEs3Fwd7Su4Qb9i9aKvSZEy2hUfn1DzJMKJ5SyKLLweBmoJ8MH3cVsp6iZ5",
  "key25": "35WLB1VYVXUXsyVQQKapCLNUztrZST7AhQTiYyYfQ85fY4BjiFnbpn8kyfcv5DNKw5nv5sZ1XRz2m9kPtHaAYf9Y",
  "key26": "3HbRHhkG338UBCcUD8qtkiEFpRAvmkF4t3iMAYu8xxYHAVxwmv6e3u95Q9gHDGPXj3XfpdbTaL6eneKoGBzvPkT7",
  "key27": "5UhfwahZRAvFkhNrXnrzgeQnk1b3BuMBF3rqd1psLEXZSqNCaoUMFWxgxDJ3f6Zi19HRbCpiM9oZFRryz9Q8hmmy",
  "key28": "2cmizQo4EkmpMXLK3yJ4NvWaCVVumHYoHRWF2x8nmuDc2sEdYbKvSXcgGsTAeppb1kEA8xKoSk6YQAQBDkH8HN5i",
  "key29": "2YtoKwXHm6sLBciuyw9yuHX1RswGXFug1ggnsmjvJng1Kq92LoJ47if3kbLTyreqzBd3rcKXMZ19E4ZtU3Y7bm19",
  "key30": "3rw1FKtKyPwRhnS8FgN5DRFwFSfRpi6tc3ZgrXxaTdRYYfQWx475qXf7PhtDNwBRQSpfmHRJs9kCUQd8S1FoxmWd",
  "key31": "3NmHm2zXF2t9VLToB1z2yiFnTNiVnVyRMYBcJoEfaUGwbnfQh1ZmDsTiucU9164XGksgFiTxspHwFxseafWwQMXS",
  "key32": "4fhvdFRUJNmuJSNtVWuPiZZZgq9JjQm4emBWbJ1RFk7S8yawWA31W25sPm52s3yYYzQJEdZkdHeNTvXcE1Yuh7i1",
  "key33": "5Y8QNDPKPDj93Bxrei4mrc7YHeTj6JEDxNENczZ83N9X6P3jfEYnhWs2zKbZLXAxgXLQhJpjfTyF6tssb7SkxtAp",
  "key34": "241NNhXy1TgR4Z3gLh5sMnncKhqwqeKRbJiutCQuvw1r4FsGLGfD3sV3tD5hYHKZUmFyrzyfsfDMfZoP4oWt237j",
  "key35": "5feXDMxzjqLybwM1ZTaBZrH8WNa9TZuUL5qtSAqPtTqtC6Z93cRk5cZ8sCpCmwp5ccEGcbF8oPYJxnHsG2ceVLUb",
  "key36": "3MjxFDipw23L44wF6vvjE53qNhkSTHcBcqK1knqxUcS7j1ETPq6ArR2ETpx1TpgC3xXKtb9FwBZnNr2EWap7ZEwK",
  "key37": "22R5MTARhUfPGB8Fewd3amq3nvLyDAtForXaBXZ6aQWzk8gu9q266QzcXs1vzdF4MqjAc65eorCXAF9TftayNc5o",
  "key38": "4if4zdJdw9kceevE1tocCd4JibB9AGDUhJbDFVYvsP2GgkXUZgqxDCsejqf3NsgoEnSiUoXf3pQvARLMbwsmAuR6",
  "key39": "3RbsVTS1CJzj4wiw7MdRwDrF1wM35h7Ueg66WEEJH28m7vkZHMwUeZpytvTvQGVHg3QVyg2TfCHpUKGrvBq2quW6"
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
