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
    "29zzzdNCyMRMps7DdDLW4HP5eVXT2y7S4XUniHXkjiaR1DHNutxyQ44ufjGSaGbiHtbbFJ4Kgj6m6fhHK1ifNXcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "og4x5botva9WAbdYdfgeeGgbL7puwLdy6k2BRqKqVBStr9o1Hg5G22fdNCbRhxBBS1QSkMsxHvjmHMgqqX2dAfy",
  "key1": "4JYa8dHtb6C66TaEHmRrnTi2bj1qoxAMALFL5VHhsY8m9te6YJiTYQ85bhANSa8s2JmefoiVYLMbYs8S4fJVTjq8",
  "key2": "2FR3v87jui3g9i6xoFdmU7mDnUxc6UX5YEX5VEoxAUZdwoAjL6LuDzk342Tja4rzPJ64MNnDdyZWoKW6oM2n8pU9",
  "key3": "66TKkVzJs2vhxvftsrsV5WJnp1wNAaD4oxmZsJmbsB57efP2qZ8DMLbDCxRGWwBCuzDH5QPbCcJ3oEwDe6ayzadv",
  "key4": "3kN96kfTYNScvQgL4TuGXmjdTooAHFCXpbN9zs1JHxCA2j2HaZ2RZzny43VTPQkHtrQeb6rrzCTmC9UhgYjkhhCJ",
  "key5": "4EBBJeArRgTHVtb83U4o5yDsPsCZ5xVrEL2w8UtydbeRzc1fmoYGoj58gvSkDYLdhPXJuuLrFscwCg946tmbLGZp",
  "key6": "4gvULLaSJbSp9pZG47CBq6rMFDhZjdQtnL7r4c6P4Y95fhPUqPwL2RQmHZn49HD1qEPzN9LvqvRhNo7byWyRYzwy",
  "key7": "2fSK6FKbXYhxecJCmuikta9kyp8CKkjhcuh8qu1Nv24y7Cc9BtM6ZJL2KSHatj4FyK86cc3jEU2dQmGTy55AwQ5K",
  "key8": "4C2YadZDXpWbqTgKr1ikHPCTh58bNA6hPy1WCD1kjMTkUYd6pSkSBvX97sknwSL4yAFNybMuL3KCNoFouKsH4yQY",
  "key9": "2ZbTTeeyhG5Gem1U5wzQ92hHpr1asyyszwfW7tvfvzMSNu2hr68VmmtVpFuJDX8rHzo8G8is182BwQrTh6YwoWGw",
  "key10": "5JfrgKVDT7zqSjQL3eTRU6GsNa8p1f1QT3xvWnLsnFtehD4s4VbgTCoH5YJsrNoD68XnL6kBQ5h45tYqGTYeBiYq",
  "key11": "kwm36X7JW1ZHKbPwSMJnnMFGVdQx6XjuzWFzm6btytjPDY7bUSNKMaPoztZy85hmpQneFzMmHA5kwamMG7Ka1SF",
  "key12": "2NfMamcmigcstuaCDF5QcEt22xHfK5ctT269WUyLvSizHQf3mCvsFN3isPsAJZxQ7DH4ATeNJerUDtAhXKrjNqwr",
  "key13": "3Gk6yaZTcymk77uXyYyG9jyHb1Ubdwveag6qD99AHfZMmXupy2sGggpUwvaBRjzBdEwqFGwGrQpnWA2BBAwvhjhZ",
  "key14": "3AXVUjcc7RpxreNkKVULBJvySNeFtyjfpLVMF9KpshyiaCxxEbiXp4nUwr8L2jdYdmyDqs2XPFgZcD7WWjSuXdax",
  "key15": "2BtVm6LmnQajZnudgU1bgvNUiKux6cFqN7Br97c3BX9cvKrqmhCwJyajqE6Aw4A4w7kVnRmMmjVAfqMLXZ4oU7bv",
  "key16": "3NjUU2Y9pmmLvcRT1vphiE4e41DA7wV1KStBPNTbMojUoc5yh8K5ustoAatWLR9mEWFNTAowaXi7w8hbgrwwyzRU",
  "key17": "3tqB9vfL56JkVkbZ2LqPNFxs4QuzbXyJ6uqYwnfKUQXJmUXeXTfhwoW7LdCtMwwHz8wEp6H3pU3hoMu9xCyxahXh",
  "key18": "4jA7qjy2VVoUaBkvSkanv2ZVq6yfW6rJmAr8t5waw7Ek3h5uhbKBg9JbEgRZttN8UdDQPvHtEJB9a1gTr4oBWuu6",
  "key19": "2fBGFjmtDyCyrzMotRjn2NoRN1Ef32xu1u8dx3p9zk86YBYx1me41Bo8FVfpxDgJgu2NwcVb4449W5VfZof2uuoc",
  "key20": "5oKn1otsZtFG114aUNo3oypbEqXebkwtGogLQ5Nbbyzkp7CZ2Bj6bNDVraBQzdtnvP1qq1xfNZXBp4DKHVyiy7KG",
  "key21": "3Z91Mk45fwnEE6MARNXNmHCzkME3ZAnxYEqGnGNQzQZwD84qYKosjsKusFqwddKmJmTdwZ8bhvFPzV2mQ8nqdE1w",
  "key22": "3raV1jDLeAcuNcceqHYfHV47BNNbaiWsMKm9Lj8Te3oVWvAJbkXniR66ZjwWgsDFrumte7zhKLxzcXt2F25mCLGY",
  "key23": "2Njhm66Ddmobk11pmtgjNRHe9sqVmJt5kJj2nuXTRrGVdcsKciq5T4ZhQcrtMAfEVvnP3JZp7yTUfcNL5ct9Uo2a",
  "key24": "v6TTf9EEENJ9VxTsVEwSgkuKx2KU1mk2iMBNRs9hea7sCKub75V62uqHJuKPRgrvMzZGYQTKsMffm43G5rNhQvL",
  "key25": "3yK2uqmVSQdxVsYRDhy1Qe8Rs4o6b1Wa7W3MwcTikDNs18j4QV8FryQJsd419ARwZejQAJV74bkpuv3Qp3A3TVLF",
  "key26": "yA2KENux6Mp8MGobbu3szZNfnmLBXinJcjNcZegKfmvFsGuMu9ZryEqK9FKQmpoefuhz2Ncv7u7JPkdtbv9DH35",
  "key27": "5KjiMNzkQ4gAuu7JQsZzaqEgHLJWJgHGsUaMGN6cMiUHnkYjU7gqZfT9VRPbLDT4EXZ4E4ceHdcnuz4yyeT4kubi",
  "key28": "2HWmQKM6FfR5cbPHkTuCuYiGY2LvnBif1tKHeigNspQpTCk56qmqLw1fsGnLhKzKC2sD6xDuUQZeQDs5ahaBNtRX",
  "key29": "5G4tdC7FXSwpFxwbMhF8fEqkkuqxmsw2UaEuirKbxcgatDXMTZPRGi5pxcqSd4oYoY8dpbibpp2aiwaBeUxoNQ7a",
  "key30": "2HV2mrdKY4G9vpf5L9BNYeLpLwP4HoyUow73BZiK9HcdjX39o1eKuPHrbjyy7BvKsKYcqkd7chBuXFRvTnfteDgQ",
  "key31": "3Bz47pcp8pYpSDReEuh47jRNBE2YB7wrqYq9JpMnTSicDxLyHwyvfxUgorvoCYcomj4PenfSianMgxBtBbjBgaAL",
  "key32": "3kbWbFf6iuZg8HxFupeyQbm2XMQ7LFpizMSJrtVCMTz66vx4GgLVu2g3H47UkDtFxNPQgtmQAPKKWjYJUxMvuVEt",
  "key33": "5ioLEs7xYzobPTPdArDgP4sAvmdK9NiDQgynq2NtWrEHCdbvJFtQir8pyeEX1qVgdfDQsQmWr19MfE3bJLvYmThk",
  "key34": "5YoeWnfV2Ap9C8MWNcoqJWTJS64s6ed1mnLJfnxKDRJ6zNFWfZ8SKVRsG9ykMdAsomzv1LMdzDzxnz9B8CXVGyZQ",
  "key35": "5hq4ih44GiqQrKUV4BGLPUHNoAu7aLY7yVizNoPVhjTBCBCzZ6cC4LvAjp5A6t2Tj4e7chn84Squk7cK1BgmyJsA",
  "key36": "5pRih8KsfaYUb7KwZWnUwzXY2oabUu1GocADX2jp3mFHCEas3abDsyGM1apfg7xP3t1qKgRvxgXH3y4xErfPfwpd",
  "key37": "2rDm7uMzVTDmKfADm8eNyzbG8qNY55affUyEwERarQwSUeqSesaAeC2w8TzyTUmBMNR237hvRuScNafWg9ScyNnY",
  "key38": "537LFYAMVdX2z8szgxUUSAcajsY9ghtYh1aGJwg2eqpjqvF8g5Q1u7biH4sP5DE9ugkDh2EZGTUKsTphReWQECgV",
  "key39": "2qyBDKnrAHTiNabQmMQyQhXYa3syeLNNQnH9rFoVqp33AaHDATob17EfServKSwTAPrFu2kHhR1Wz1Lxcq1WQtHQ",
  "key40": "qSyZQdxskDTdTKU87EKixYriavEKFcorgjhCshBXvvwF69atb78s1xEfRqVnbiFFsk659k5eKBNBshkAC6sNTw7",
  "key41": "GWN3HsBXc4WiesnTNrDRSrJhNcGoc78XDTy3y4uTM4RNNGxMTspehfKqjmLb5fzHiPg66vYxVZFnDXiZW5jsC94",
  "key42": "5Si92Mmdyyxx9bgjiKUqFSAoYEJuwAPHByLs8yuRPfyDkKZH8AJPYXSWBtMw39dfTpdvMJqPm8HhNo6XAA1YySYG",
  "key43": "4RCXavXXCnXJ1C8HjaDCR3gaoCkQw9919UNCBXzBknsfncPc9ELm4wEVU875svP6RhYU2RLqMh9w99THaBJTinGj",
  "key44": "3P9Bb45WgKkAXqputvbt7TDVMz2ra9udZfVmcdJd5GRn4skqYQDjx3cstEhduG4PfgQiMok7HgQeBaA4NEx4EgS9"
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
