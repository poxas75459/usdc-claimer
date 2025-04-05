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
    "5bJLG2caX2CGAiEgPAcpkBBjWm1SYYsfEovQ8yosdS51bNSeKouSoFQZKd4xHyjvhZhBjok8XtwHt3vzkopvuDQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RyaxQhpj8mBJ481WnM294fC5vNmnQSxavVWo1ZJ6iHHPvn7uznvLX7wshPizz4yCMbKbRJXSmjMhQGyuDv9wiJe",
  "key1": "45AguDyN68Ei8Kin1PSjjz1Weutty7ZaAUcn3wcpQepc8Sey1NGU7FcpZfvgKLWBvVtVtamZfRXih2f5ucauMrwX",
  "key2": "2BraVSuQ6ewBznN3p4jo1Ubd3ar2zd9GYHBHEk9NizZSxK62WMdhyjwQZwCYPBzmBQwSeut9FxwVrchCyxTYq4Ec",
  "key3": "HMQ8hm53kWqETvZT2WzUaVtT2BHURn6E1vzbrZuiv3JziuFXWBUqGuofXfHxMn6BySndshoLNki72izANHQs7Ym",
  "key4": "L21Git3jCJavYhjQkPmZSjaNh8Zdq8Wz29EcESXx6wqnzTU3JmMV3HdPJWFEKgYne3BAJBkRzKfHKVZqhtptJBV",
  "key5": "2GJqkW41rtV1nnWDoWDeV4jvtrFqTS2KKTtBRAwfYRyvck8WvwTkc35j3we4yCbsdcLN39AtVb4r2UTU3dqYMycV",
  "key6": "2UR3oRdYM71r2A2XqCbu98TRGUDqSfxMzAZme8GC5kFRVJorHXwJSop1A8swPsH8PaXEzp2W1SfxMTjDEnkYzfs5",
  "key7": "DWu72nU4PpFhwRmbqxNdHfRuzdoooLzGrCZ5AVG2y5S9HQYTZgAua8nQpCNowpU4H7TBbAxdtMbAWhbk6sW8wvM",
  "key8": "67ZUzWqWjHJcLk5YTZXE9DjfN3kdkmjsKobyk5Nkt1175ZCALc78tQxas4iMBA39dNH4HLAAuaQtvVHe6NksCmzt",
  "key9": "5gdL2TJMSjTWQviK2n73s8NxH3v1BxmMnWrUksqtDhCYPFd59fPutqcJvdK5oeMp6CbVo71g2eHpHszqD4t4dkBs",
  "key10": "3ahWMeU4hG6bdzUuX8mC2yQyBCt7j2FwAFQNp2jsr9beKbA9N1i8CigyhQqTmW5hcC75s8tQ41VxSUtZKAkZfuur",
  "key11": "5Wy5AAvWoYV4T8uUnVcB1qYwSLWvT9Qzbo4y8qz7PwA5jhnhVB7fksKQXbQ5YBfkmAn2hFmyn8EpRPFLUfV3Vxm9",
  "key12": "5hEDmECCVXhFZrtQpa14SQmVuC6dTagVSm6cpfLPcfWBshNiDd4WVSu7WvtQPZeEVC9jpJyMCwA9nkfjYFfYCtpa",
  "key13": "59xHHA7Qjk14L9DZ2Qsxg4SsVogtTPSN8q8wGH9TUZbyTVJtzibF8UDkT3TYokRY6kEsNDLZeM9nT7z21zSjYsMg",
  "key14": "479rskPChTPVo15r49Yo35nGD7sKWdEpSCVYk68mEv1ERsvCL9PGnkW2TokSPmTj43oFxMmBnjKeq1vvbW6ARrem",
  "key15": "2QFGNU6mUQEinzLqU2L4KQzfyameMLhnKBLQKPUhzHUaDPvYrBZSMncd3UC5xbv2CyJgVX6VDAdZFWVMhS2EjHea",
  "key16": "38631LDQveVBSj8dCep1TL343JPQK6qzAojqTZciimunJLJcFrBn29pZ3ZjgZjcV58NpQT79geyxxZN8W6q3VFnE",
  "key17": "4AS3cnDnfqzzqC8jqFfsfFYpUm2PKFJQracSFL8sYAj5URH6etvHzcjcPoLUAhfaXHgnGsvyURpRKBNfjk2XwD7S",
  "key18": "65D8Ef824D68jp1WMg3UNweah8prgbugLeK9ypog3D4BH1D7adwgBhD7PYMJUcNkm51Y77xjNvnT4Kc7ZtUzbC6u",
  "key19": "y7kbLMrNJKB1rvwieVobe9w78cmCJtakz71CBwRzfYKW4H7f4umU6TMtCdSJLLpTD79KS9vmb5M8FZD358meeNJ",
  "key20": "2kujnAi8Fm1G8g1LKHTt814k6zEDAQss5soVQasMrSegy1iyxTVVP6cSYzXkdTKu58VrecLaan41ETVhUNv2giKt",
  "key21": "3PKrH16nV51APopZAjAmNdMGF6ZUvVg6NnBcgqK53k9yM1LD1fjmDagLEpNptWUq2q1UghEgyS2EBoNa8JpEiVJN",
  "key22": "5gQ3WuW43MLNC6TTcWRT78VixEwurmgUN3Uo3ttR8wa1YY2bGPZmW1hSbWJcYzQDViFrsJRdnrSYmpCNhwG8CSRw",
  "key23": "3PVeBjt9HuDdFwSjE991m8yG92CbPj1mvx7vG12csMMTcsYTQdw2n7uAGwpRXjzNeerDYLgkApExyjQ8Nffgqj55",
  "key24": "3N68iqXPcbp5GajnxoRf77mgfFDunp62KtRramjRN3zUTD78V2jzNVTaZTXURBApDKmCi1v8mAFcFudsLPf8d2nu",
  "key25": "3yoT4q1WozSNrnaGkpsrSQoUPL4kS3x4rmSqUNrSpjai6vZQ5rDxGAf4CYbQaFdpe6jkHJJDiTGhxG4k7Nk6eLdx",
  "key26": "J4XDEHBUJ4buqJSwuEQrKv3hn4SYKAWiJUTiJ7jmHya36WYtLrizCiWsEUCr23rFavckXDqZhCvfzCP9fvoFZ9f",
  "key27": "1237Y8C93ikSijFwzQVeYrz514z4cH72b7mzcHYgF2WBc3bAPfwe9NrfjWzG4v5RpAe1tcWNDnbPRWfpCr9hnKrk",
  "key28": "1BMNhCgm6hoZPFvQ1XwXZboxkqAq4ai6Z9URx6TSDb7bj33iwSNxbjLBtM8JvpUaA8zgYNSRGjvNuGFriRJqoDa",
  "key29": "qNcnepuWW683ZLZqB1aUbh58ysWMYgG7bBf9gto3RDa2KxJngkkkKVTMvZGwQhHRbPtMhKZxca67N6VMyV9abta",
  "key30": "unMYsoT76Cce9ZREgHtn9PGnovasaD3gZQPya5onv764P3Wb4N1e4L3MgGSbTXxZm5XcQEUzjzg1vNLRPZkeeMN",
  "key31": "3p5FjzrL1xPjoGds2oXUptpNAuXZjwFTbg1joAnh9WSMt7tf2HWbnvnu2Eo9iki6Mf5cBt4pSFBYznwgqNuMXD3h",
  "key32": "2EAraEN7Pn8UncSc1tzEBy9aobN87BGBfnRVqkoY5BuTT2S4F9i8nsSoWxzzA1v86GJHzMYyqmt6HtATekBxY6fb",
  "key33": "34N6yivgBAaGcYyGCpUurLwYCDSW774j6ES56Vec8baR2LadPZjxFK8AAHbncAvkrpwzQwfajnAdvfRbHWoG7SNi",
  "key34": "3iKexcEd7wgjuZuCECW54Ky8dxVXquDG5Etd5Hsx7K76K1Ck7oUvskN73pVUN6HTZunWUhdQ8bCEUGtE5Xz8rPye",
  "key35": "5sRpBNZ3TzC5Ca55zduDhyMvpzDRwajmPr2F4AkY2oAr2kTVMgsnXwtKpov6jKDDDHTBeV2zGAocftSpb5zsDg3k",
  "key36": "s2xSDdg1C7cB1QZ3Z1Kj3YHrYVtEjVnPNMC8MRMUS9cm58qc8V4sBak6b88Mtoxhe5BwFSyYtTDHxK6Kc5BjLw7"
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
