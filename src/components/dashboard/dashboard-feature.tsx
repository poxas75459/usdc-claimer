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
    "2cvp1abim2xsmyRW1yP3oPYTYbnESWGxTGsmDW2izuPvar9GGRoJYr2DKjUiSg3eLhrqEFAe4TTYDoeJHo2c52Us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDEibBFeCz684BSGLGU5LkKizLrLSxwNjcEUsC78gJ9TjDw8Moo4vUfn7eovkMAhqmMowS8KecF3Zdr2kfMXcdv",
  "key1": "5RgygKQetmp7N9a9VHnZrbYNZDCMSY2SAbJfNHrSZiVnF2yvEdHvnkVpiGaJ5FMLQKBcCxPVhiPeTEqTtvXpgz9a",
  "key2": "3NfFtsNxCmEiJu6p1VpRXEELipgB4XpZfUGEphMbRpDsdWRiG1sWno39ocMB3UHC4aU2SafmSZq35fcS2XpCqsUy",
  "key3": "mHGmEbSCJbGLjhejJSftVw3hVEVQc753Z8gGaHmsUsNQZ916CH4wZLfvrXxTNGkMrmkVX3X9jkq8KcmrzXdETru",
  "key4": "5PAZxbaCz3N5M5Kef9yidfysf3to4CXc4WWKNdS5JRZ58TqhxouuJXane1d4QJt1TXygdRiALRF2ULEvXSCFVvpS",
  "key5": "5PoBAY4yNqj9AP7SvYsXJh9zSUyJTHY1Zx2Fu7JVjWska1rmyyjkdswBDy5689LYyhVSq6vJcjyNbvxZjDe6H8wG",
  "key6": "3ZEb6TDuB1Cu9m3H9LSWNe6YRQkpeoW5VHnhXkxUZiJNnbsYHXsP4cLDAnqM6HZBD3no7NTwsvKL9LueEwwrrRgo",
  "key7": "B6nobWpBcGCB7cDo9og5zeRNGKPxi6BwQBYqcgAy5egVtiCb7Joqkif4bPUEwciU1MuPAtvgvBshWMbtDv6znT8",
  "key8": "5H9x2DiNPXnc5dScYNwBECSttF3tXh3f2QuUCd7akYpo41keFnjUGL6o2b9MSJ8VahzhJJ5T2f5mr45VG2ryvhvA",
  "key9": "594xTT32LTBSmvc16dpnDHLKcAFAbL7PfEWNthgLwVB4EP2A5uScMAhV8dvxEcFSb9eyjF2GyHBsZkimkeAN78uY",
  "key10": "58v8EUEzsoo2nfS52C4TC4ru6Q1qYhqwvrMgjL4McxfhqiMdm8TWPqtUViSXzqHni7vntqkcXK1mXnaCgHo9zVm4",
  "key11": "4z2w5v3xzNaVbQsrnkfNQA96kVRgXa6rC8KZimpebpnqPoCjWKRLWvjyFYdwuEFHzN3biWAgu7FSTvm9Spb2c9KJ",
  "key12": "4qj8YrJ9vnCBSrt8WsBWGNELCv1uCb41AtasBdQow6pNPzkafifH6QUYsFeuUKJsBpojsJ8qEgBxi7EZustxFnVx",
  "key13": "4CAud5fkk2u9B4Ywva6eeY6mUDwZb1ZqRVrwM6ZHngAvpGqip8ZujQZ16iUnvpBDFp2HQeiXmfp5WzqsvTmMQrp3",
  "key14": "3WgqCwZnUtmg4TFyiL9L2bTWZL8wXxcivZvCt7r3YY8YvoJR27SgLo3M35rL8J5FbD781VcKnnpdgJuLoPd3ANwS",
  "key15": "2Vbibk9rhDKUNqyLT8dHYF6vbTSoGhpsY1Tt5Vjyrn88G2byarq3ZHNq4b8XjzRNsXws7cWYeMckxvGwRr3TLdmP",
  "key16": "SCuiobCxFV7a5XMq6s56ED8Vj5546C7pf36cbaewMpwwz5fwANciqBoo52KpTPymhGkrmCWZPfNHDP2VxVH7cps",
  "key17": "2z4A7JNtXY1K46WPmthz14cru844edZekEadgBwnrGciLDj4eyzxq1jPhrsVRG2tyGqkMj2gY5b4CrdixT3QuuDk",
  "key18": "3WFPCTm9NngwQRfqYCbyEjjXwPEzYLeWWtyRcQoLgiWM5tbzN3MUQyGZscAS9rzJej66vvAN9VbvAzT8rZy8F6na",
  "key19": "4jGK1ojUnTBmAkVABJPQMk7aegw8GVZ5KBcDUjzWFevdVDUNKL3dbMnMqHSkcotENtAgS1rTMeYpCsQrNt56SwYw",
  "key20": "gc29qsrWEiN1Hbub7cFVphSbfMZ4P1sEys6kJv7dqY1B3jYPkTLQr7WqQyTRLrw3466fUh8m5fZHxx9UxyQMyeH",
  "key21": "soTLttZkkZLVRY8gjheqv8p7r2V6PLG2EJTktkjkc8HbtD7vL2ZktMwNJS6PEt5G3EAnkWzGYdrpXemDD3h2eNd",
  "key22": "2xgjbTGHBJXyqnCXJtS7NbTWAzqM2DsPJCHDouWbeLmYGobqU6ZmqhajURVy8gxruW6Hx8iPPcGBmkSscRVCZUUe",
  "key23": "2JqQqHvZ7b7pzAp8xzmWxWtkNmpR4AbAy2PXNkCHQM4XYFTFWjNFfaigvDjinmdGjcNwQKPijTQNqFMhb3rjDBmr",
  "key24": "3BWLbpkRKrA4VhGHNyRC72j94bxm82DPJVdoyvkWwNZYruZTnDePA5ZSsuoNWaFquHNain5FNtavxhhMCFoGKB4c",
  "key25": "5YR5QVCfwcFC5QP2LdiJV6YEBePueSz4Yram8y8jLeLsjHUVWtBd552skBp6W5nLh6XpTZnFZfG28qwYiMKCCdBF",
  "key26": "irXU6vmurQh1L1YDktp7BJzYXKn3z8juFg7m9s2RFdNQkgMdTK4erPE9BVj7R7iELyzXMrjM4MLXJCS1J2ajYuB",
  "key27": "2wzmUx2x3atRTPFVWv5ijVSzbVWBt7QnkPyoGjusTLQsPxDV48A6F9Twp1VuYcZdZforoBNHRrkzXfnpbqnoJpq7",
  "key28": "3VJcwhyaPScVkPxuGHLbMwguXhpUct4xRhpMRACcpWfUB2QUQBqoxUuZTrUsY2v6coo11wvxSYYWZj8EjXsjSVBx",
  "key29": "3V8EZQTE3s6jGR5RChohQp4GXMtQvHdKox3QfJCF7icwiMEHhjZgf9aeMypgKs8ANZ6DzVaJQWBgNDVhbBBk7E86",
  "key30": "5mBXo2YHcrNmYzPZNcJKfB5a9QPsYsDB8CDNDGXj9q7cJ4UjMGxmkWHVo1Wi3xgN2PmmsfSeueFxnBPRpGNhDJeM",
  "key31": "AhRxGNcurTEoMR9FKtFzxiHZGfE3W8tBA7E8fh9K9fE2Avc6FxkVHZYg9jBr3U5e7Lm7PJptixG7bkW2VC1Gov1",
  "key32": "67EU3NqJoNGk5xB1z9uSXSQXNio2TYAumQhUL2apomno8Zah3MoQ9F5rNxoEuLkZRyfnjUB8g62qWGXe4JDHSfKM",
  "key33": "5c3okueFPFYSfsTmZ7oqD2BTqP6LtSBABRnLiG59GpnbHnoSmYQBWShqwpUULq6iQmatPbNxAoaQkwVwRR3SpDcC",
  "key34": "3nTRnragRTtQrmrEtEeWFtmgVq4pED2RcH5DgcQEvEgHrNpsHQcDnn4jVv5c1MUGdhJPEFGvq9JqiPFpFmveUGt1",
  "key35": "4bJ99VeMYQnKDHiE5Q6Gukc9pvV515wHETzW7NsaULt8SAqSXmMvSKkD1DJMK3k91cNR323K7gS6pvRYf4m5jVNZ",
  "key36": "62VREbd8b5fv4UmXZWBz8ybD6SCRP6CyzuPp7kETsJsvxLjY7xH5kcNUADe2pScK9oU67WkYVLK6GbfQQ61uoMMz",
  "key37": "5eonSMksiMYQsddetb4QK3DcyvPZduNPsAJCAucnUumtk6AWNGPvym4EiNGxRMMmDLjyksp1FDTJLfQwsS4CSpvW",
  "key38": "4p7j5jaBU2ccCHDffb7KGFNJowkD34KJ2B8rDGE511436DVDFrSe2Gdw9vd5ZNhAafHdYTDLfdK1gaYpYy4pSMUE",
  "key39": "UpNmYXYGRfuBaG3LWaxmdwPmR1vci8WHZwvDwnvmBzNNpQ6aq3uv2qLvQTWbtDLNmKfSGt9TBfcmyNjEWoHMMHd",
  "key40": "kihCVwBpr1mcagAFU5SdUtfisUTsc5wddVn4F4TzAadC3jkq3BvH9qwwYjbUGrAKYw3tAtTN1zcguQH11WuggmZ",
  "key41": "4qQNqjWqWqiHqM4DZz1VBQwKfSdtvE8bbFa6BAsg425CCX7Cv14VLM6AHU9AdhWLMAXKjpyhE7Vnf9ymg49QdG6v",
  "key42": "5kNoSsMqkENaGxTCg3namVvBCUyQ8RPe3jVR9r5bafcMmeR24t4ARbhQT5hHf7TRDrujJm5LZwXc7GKhofasaVwu",
  "key43": "3qydXxz1b1BqFP9PvreAhZVNdAuGbHgt8921bTsxzKJeQ7qqX5VMwUgauDWghqmdrsc31wwWT8yLyBGYjHWvHfYG",
  "key44": "2766Mioif88bwDgdLYmuJE5vYv1UuJRassg317f7MKLywoCCcNRYsf4SbPuH7q6uuBx8moMCST3dgFZ3gFfcuHpz",
  "key45": "5qbuRJrVTgm8sfbCi3TdvhoFMumvRzQDq5XKMQdUY4z6r3UczyN4XVdbTunR8PZJKU5DnKWnPHCYSnia4pDmqXmm",
  "key46": "erhegxizw2FTUXeBzrW3CqkQGhu3je4gbSv3RLdNV43GYaxgeTT8QfvbXKQVvEVK63JTzBUKt5kzdqL9uBYKFCi",
  "key47": "2EnMc2Z8rVJs9CVtN9kxmEEfKKcAHPgzzS3rS99agVcN7VUaE2hU6mqtJjoLvhYRLXjsjpe1LqapwDhjcqmn8Tzr"
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
