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
    "44t2LCCJyqhNvEENhuYw6ghW5Bg2bRoGi6SStgmK83MKGAdxPTGfdP7s9BuX8ZzxyNugfe3AWD2B3ZsrXacCxkqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31xKETkrCu3aonBS9ZVnxK1mN4R5312otJChN2XbqTeKzy579BPEjTwZXDSxnLQ6MysQkV5qHCoLe4iHr9tzTmTz",
  "key1": "bdg1xMKCrPZeRSq3hUZ3us5CriSar1tftspCpPiUQYEN3QASGFAD81NbAgZ2y3kJcqWxgU8i6m9Jm8rodt2LKLZ",
  "key2": "hwxYmSpxiJDn8jYpvUon3dtNnWLmqhM3x6top4XbFe5JF58zGCGB1Zku7zncG9SwziXrgN8Lt233GUasFCxLKKz",
  "key3": "3dwHDxJeQAurbp6NTRkq9dy3Tta9NPSjz8zPDjGWFskbpifhuEyh25KnzWub4xs9iau3pnmRu9V2rd7pibYiWHiZ",
  "key4": "32E4WJ9BSLobLhUChhKHiHd6wDBX31has1vhGgGtLduRqGdiF8wV4ihXXp1FnaeTgTpD45Mtypq35nMoSAGc2dEt",
  "key5": "5JBQtaMKDQns1rB2P9Co1t8GFGPCqnhqndNA44uL8rs6KhAN5yNrMCmQ58kvTvKxqHKnA6X5efcqhcUqyuvAWqHf",
  "key6": "2nyE5itZZHYvzVALxFYuLsq38okbQmr5harZV5rH5ceGoxdyeAjD3Vh6BdncTNApy9VEwjh6XVSnis3xMoyJdJQN",
  "key7": "5f5cJRDWiKPb6SsfVFws61g8gJG7VHqAYdEgd9FyRTAYMpiyhyvCZpLziqfY648vNRf341mf8dY6bpotgEWGGucK",
  "key8": "52ALcXxQFicf31ENG58s7qyV3R1zKPEnaurxdpuWrBHHZwESBJfuC1t56wupNBi2GcfcHzTTWxNoAwDHhzX4wDsD",
  "key9": "36YYp49vnEw8hhyPnGswsV6BvS3bcg9HdFPoxNEpDiBrM5jiBJYeXq96uCcap1U8u3j2qPET46GboL4T6NfmTRfZ",
  "key10": "4BdXyZ7qou6cPX91qBnUBayXGRepkjVugtNGHxTYJcUrDwXo956RPYNThDh6WKY4d2mR1S2G5qTkkbvhh5hP5MpF",
  "key11": "4vih6W4GxgY1987UZGWLHvaiC6Zd4PVMGuUQwuacspVSurT3mZu2GcAN5Gt3yJ9WZ5dRUipVa6S8Wkq8BWeXq2B5",
  "key12": "otJEoNMyQ8XvkkdW4gUwU5Go4hAS8Q7BAhTwmYmGTS6uVHSxqNurSFyoymscYtsCWgq59GPr21D31F4z6ffRmJa",
  "key13": "mXEiYwuHpiyaJPUuf8FSZWsxZA8rj4WD6uFbjBdiRvCQbmfBo7fG11KgwAHNSEzJPTT4nqmoL6EGhh5SEFeLAGV",
  "key14": "3TXBmHb3vgDLN3rEASV2rjV7gdGH4Ygt9Eqt9KSDezTo6ZHA3SzSHmRwFnWneqbrRTLZF4viRKyymjVDwyxyy3Bn",
  "key15": "6CCZySzHWi2AEkyDbH37tTy5UAewwDFJyPfzxvBaoLjLAt5bRPR33z2YoVkQapHxcgKhJUJHsdULtKZgJXEgcck",
  "key16": "RMJW8Ky2tnDYWAYcU13mYunkVnx8GNVB9XPSSybmYuR7C4hXiKMRK8rx9hcAkfhNw2UNf3GpK1gVDAqWJTjRtMo",
  "key17": "52aKsgeMUGtiiDKfxr7x787sVt5qYAjMiA8N31u84hPNzzYftjnhtHz3CdBYx3XrhQqLe5TdKoRvu1mWYvjL6A3k",
  "key18": "5qB93kKSrVTAcvx8NFvDmwhTHPbZjcW1vruy1t6bGwdUUU8yx89Gub9P4EykZHPCsky6hHmUV8HKHQnTGSwfNh5i",
  "key19": "eKVG85yZmo7ji3THyvckKEEZqHPK5zqEJXqNeLGsjDm9PyaSM3SmXZTgg2UsBgkJ2nGfog2YengUkGSw9d5sGx5",
  "key20": "P3JEKCucnWpzdTMNvkZHT36ar1LSKTBi56h3wSQZK87cj1oqRSLf8Dob7N98J8bhANQa8ctR7wziQmHYpB6ZaH9",
  "key21": "2XfUjvf9SWaKjNGAFAEeaW5JW7gTQf6uhK9mtCFa3QnDffuC12A43bHV3pE4WwqW8nJ6r7kTBebF7thKiUgraLNN",
  "key22": "3PRjhujYKNTSXUeTBGdtVZQw5wjyVW57xheB8vXuiFwEqeMuJeJNsWvACEw2qF5w4fe7iEBLX56x4sUx1Nj1hmYg",
  "key23": "3XgBHFTMnVs9ahQ4nPa8ifHdQd3QBz9wg3DYB354aZXyAvy6Av8m316R7QVfpPPZLUrF1SKeY7kkRmJXMDHPCCG1",
  "key24": "4gzKDcnNGeAQsZogWjTjRQpgeuaHXgWAZ35qhu9jq9gq24LGHbHgeTMQyNaeLEjEz1stBWhyMCC6SLEWDmV6z2Bt",
  "key25": "5qC9kJGbgVAo6w5BNgi8hCsVKJ4hN8ThmBVY6WheaMToZc6xWsEvcjZFDsE72pHXnj6NF4SNpyuHtd7HoCbRda7E",
  "key26": "5VXo933zfja7URoe4GyYhjRXunXjwkgQGZPCzSTu4Z1oZdRxD7qTL8Qxc1UMkxfponYBfHxrycq9TWAE8tQqFHuK",
  "key27": "BdMVuqTvXewUpy4D3AykEaoPL5iYXrsiRsJaBMc6gAVnURetHdRQeDM2jDruKyJkNcoajt5erKkQCKZ2pKNdU6B",
  "key28": "5zXr1CfqstG7SuGpbnDuk88uiq1YLTZHc98tE8mb5GrcqxAMUtFY93pvgSJ3GYf25MUix8vtPamYCkxeCAzz9KSL",
  "key29": "2kXmn6DARGKoc1oxLQRMC6o3R3LW5u7Z5TUXNijCAnrj2fDxSbuPBhzBzWLJxQeKUdvM7T7o4yHeb78W5if1vDbA",
  "key30": "2zBdvxNaaYiBx4qjAsdYsMM1i6p9rqg4rQz1BLiLTciYHxZqL3MMTsw6kGWkmGGcuAuP2KVwUHovnoi5cvdu7YLi",
  "key31": "4f7hKwp5AVvkCuorhyEhDxRgeYqoM7GtJ1aPpprkMtUTRVTurEw7iNchgRormxbqTqKw2CBQUUwnHWaUUmjHv6N6",
  "key32": "rYnps7SjdybqaY4tiH2rpLwhypz8UnSqAGwzu4K29y2vZsZkmQN2iwHVvWLx1tRXsYrTnwdzaUcYC2g8mLmvpwA",
  "key33": "vqqLLAdG76D5fbgqWoYzAmDk9fyV8RmxmuEFmKirRRkhK56S97Cqr5kP3kEr9Vsb5kSFHU3hSQnW5dnHiAZ8jxf",
  "key34": "5fN5pdNfShCR8mMbcgi37NozhZZA555vL3qGUWv9HYwCKos3SE9ojRnuLMAY3Snsnmh1mCkbYLfKoekZ3ZGXgo8T",
  "key35": "8K9cBKhoEQNZo8LhkPdu3JbGLocRe7jaKwcwb931mAnXv7rZwMMnJ3mdACTZ2zztycS8i4jDg3FKsD2KX8t3piA",
  "key36": "2PHXznj5VnFYVj3JEzK3TVmKaH2GRLLyUZbwzpjaMYFyUHFyUzcBhTKUr7LeHBQUj93zaSqwkPYmVc2YYEwxXBGS",
  "key37": "4ZNxR8PtfnvZm27QqUh6vWTSazipFtMYYNQY67PaEsmvrajpV9HskhomyhSrCiHyoNya9nDa44jWNtf9YuE4N1i3",
  "key38": "38KHfyxcotPvSmJoShrW4H2EFadBFbLuwkQ8GojcEjsXAkf116L5aBwnFXbJCPEwS8BAjPTFxz6XG5HwRZD1pWnf",
  "key39": "2eRAcQBG2fsMNimHPgAvxZmAYZeAWaHMfny5sCJXjyGXZ35jUWCD3JThbUvkweJ4QJeswnbY16uCGDtKKnXAiTa1",
  "key40": "5zKkK3GxtNAWqZ5yT94GVu2rTy1e2bmbWoS9UztzYLmXU5fug8sQTaSeVhuzp3Zij2vTWVWRDVuzYsrQqzgWW5RP",
  "key41": "3QWBPHqLCVMKrf4f5JFQ957UoAPSnRxiZc4crCVKdc14ZgdqnHLhHgr3F5SeXUJTBe76RgSCd5vPY1zMVeTFkZiv",
  "key42": "5r1axTQax9esg7yfUfHDVaCsH6BvRbtAzB9Hv3bsB8Ash9G9Z4M97SwsNoU15hijL7CrpWiA9i8YQ3oTc2JNKKVR",
  "key43": "47APRiQM9vUa3ZJTDYGyUMm1YjhfWVJjBrGk52bujKBym8gXfH165AnutsscfqviDsEePGm4QWVLHzLo1CZRrEgr",
  "key44": "5vD3FUddu9bXUTJZPFa4ywdVQ4NYhQYyEL4hRpHuM5G5UKu9BSxKujFJSykx5MQGgjmgYV6ibQBrNXm7gmr6Ukem",
  "key45": "F7iqWUwCoan7ip7jM6vV7Z3d2uQFicp3JujQMQ5PqXJPMcXhwCupF7wPizU82YeLCerCGY26tiYhWYHpEwx7dXM",
  "key46": "gY88LS1ZgtpMg5PwkUuUT5JqUCujC5H9DSAQUMKgwkXZm6iDJULYjEH4BGGsAnXd5mX9VGethVVoHtAYz8Uc5q4",
  "key47": "4kZjtdZFc8c5EX9oDJkCW3ZqXpspTYGLnGh5gBGXh34WNRs2wuJMqYQyrA4AQ9Zub7YYyBWipFN3WH39sFvkn6WP",
  "key48": "5zsqDxZunkXVaf4kcuABRxo9FH7Cox9Y4kXH4Pc7UVjVYSkgvehJb5Suuhec93RcexgKD5zForqKtkntKfT74A1p",
  "key49": "2Kx3oZthYZ5HN4hQXjamNSy5PVEDA1nj6Bw6UHsCsvnpijpDDyG11owdd4Qz7BJmY8Vo5LGyLWvpupeXPcrMKUTb"
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
