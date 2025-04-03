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
    "4EM4GEJtHoD4AC5fhTXcvhMrStkJ18xupGzCvgePd26e6WvTRgqbzaMa4CKUPm4ajis1TV7znJqBiG5RBS22Left"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vjXoBzUjTNyLWH9ZrYRwLZNhP2t4ZPzyPuzxoUa9aJ3PXntMhHRqThzUMSCFijpLanFHGALHWenoCLqeS86LiUM",
  "key1": "51iFwZZjEmLL2WLRV9mZjWFHHMVEfmAQRcPXEb5GtsL7bjPEF4er88BZDHX4BcxUXgAprCit9WicDr87UG2Wc9fL",
  "key2": "4gi9xPiMfneek12rumimbZB6FLgUDqbpf2Phxw58wYPQZ5YYgrK2sjCkiRDrQecx69uYcLgZxxvzQdJA49pAq4zq",
  "key3": "5MRrkEgmZoDatmgR1GiGCmWaRH1cwsTim6Tqbs8vVd1HS85BWp4RiuNSSAJcusCSnzvYw9PBV37KxoU4e57MqFSw",
  "key4": "2XSpfpCzqN6wRhUfCW1XaTVV6z3vxzjL6y1zwHHbi67u6npQ8uAN6daqfE17Yr1BAtQ5pfudRpZ688Lmk5u7xiLf",
  "key5": "3tUJwPbGiskVku9eiLNN3zvTAP6Bm1U18XXxiNdMtfCRjhtb9zg1mrE8N9mMSKUMLvK2tQWudzBm27zBPGxcdCBk",
  "key6": "5T1M97LMJq2upXxzwxKtrWGo24oiKoV1ZVeq1RqB98Kiqzq8LaK9Km1ktmJc3kExWEUQvxcfjoapRfdoURC4ztZr",
  "key7": "3Q5GqjKfyYzuGzhZfvRYuzT3MqGL5eW9no1iu3wo5SmqxWWUTENXjRZ59mGxq8eUbQDSpaB1KRG3rxBNMtweHgj4",
  "key8": "3mRv8W6nKVAB8RmAnH1tTv4UsiWdUKTgg4uXCf5fmH8jzbEPPeCS5ShDUt8a5L2se5NMDhEgt6Scnz6ZQrJoxCiL",
  "key9": "2XUXsRQKY1RNxLnQaqXEA9id9Znk4XsLUk2BwNNCkVhPrExaWjLRMJgCqjgJUenDXjLtMTjnsytuBFnQZZtFF8pD",
  "key10": "5wDhPfKBi9k3SuQdRWgPoUupAMWjd1U1o9MQJARYh3qS6oL7xTCFcnn2NCEZHes8PA4fuTbpFr2SLGSrfstW66FN",
  "key11": "5K6qETpCMnqaxHrZdnDdgDHCmAESKgWLH8Gbfc3zmJaEzsacVzfo9SveW27tP2Li1cqUd9H7hq3LUgzTHQYy94d3",
  "key12": "2vtjbcbsu6Bo4jGFSpQsjxLaAFRJYmFAVKS2qYbpVGHhAgB7nzn6PhEvUim4zdUgxpAu79uKpdZqJS8VPPkBoXdE",
  "key13": "49utCsP5CNLbNmw8fHoD7FWWxCuQBawz1ArC5vbswXXUro5rhG9LjtyEaGMW5rj9L8qErTtLhY9wrEZ76UjSCPEc",
  "key14": "1Wbuc9UmnMvzcgoVMHPRAiiJNNN3cJb71x5wGWL6vwRbARQYpFcPZzynQGcgei5LDMY3gojEoMi3bPwCRa8UcQm",
  "key15": "3uM2uoANdntDKgRj8BdZFVgtsC35cRRHf2CaVVnXqEGAboB82hbkc7Lz5dCjuhf3cvTPPecgaaWLm1gSbcVLxmq9",
  "key16": "4uFhpPJ8zxb2JbbHQde925BB1WFbjhHoin8HMLNz4GTHb69A1eEmNiHKr6Fm7TucqXKB589NiUG5q7CKUfAeoLub",
  "key17": "ZYbyQeVoXPLASPsvfdFUufH6PUouujZ4SB4k3roUNfspUwL1G4U3fZYCKyt6j4oNPPD9LMtPXwfAoJ5vuYsBUGo",
  "key18": "2qMGVWkAS5xDW8nNUgUV437xmGhLr1scpBy2XSWgtzYCWZXkdgjBUQnbPevdTWNjurLYJXeHzsJUnCwUBRq5oQFk",
  "key19": "3uzXCaz48g37HWgULcED4kRNjwhKK5PPxXMqjNJaKr7sifZtruJDb5pbW9BERDNadAkHy3tazkfxygba83CWQexf",
  "key20": "4LRJzCoDzFL4SCYhwXEoDcxcHa27JZvLwc5h19LGoLeAa7tcCP3nD1HqNCjc1aSLmc9Di4zx4i3cZTAMDHBvZ9KC",
  "key21": "5r5Sy1TPWjN3hmmYrxjpYM5ZdwB4Ed87bnipCK39qxsGjeRBxsYqs57Z1wD4kevCtks76Tmcg3yebXPjgkpezKDG",
  "key22": "3hsSGAsXTB3tFGwkyNLcN64L8ZZT2oD8hBHiGqT3y8AT3i6S8d7UX8tnjFvmowYnq8SQeJKTJkbAp4zEbMqfbEUg",
  "key23": "4JiqoHja2terVM8RqgPw2oC8uHxebBTLZ785GERBUqdXbN9fttfzoE1NxLzfqvHWG78BjurQ3ewXnKCZ8wjr2UJ8",
  "key24": "5XCxcNewSp5mUynZoZU4m3YjGdUuzBxCHVqUMHJHGB4cp78siiAbos3F6Mnzd1rAb5AYWCLh6GMWxbayU1aS3gm2",
  "key25": "2hYwXe3PWKTeciH4ZoMEyv2KCaV6fqWfc1x5fgXY2uZNKKyGbakFvJSPtGbovZkzKFXcmhUghNPtuRv8YqwHKPzp",
  "key26": "2AX2WH1zqHoyBLgAviysfFzHiSiRWMSdB6hZhqsVoefesWUa8dEhYbp8WWg67dPycF4vvh1Xb6VsfhZM1bBvnf6w",
  "key27": "5UWVMJGc3PcweMfpAcp9AT5G3tEaaokDw1nLwU2n8qaSgrKtSxmjUPRb2VwSaBKsEWGg5FKM3oivuWAqmDRhkueP",
  "key28": "5j6KHAFxbqiwtfJojuTFBzT6DSGn91y6ynBG5b3CRreMX3qWJobiDVmG99eeu1ycjJ329Db7LFQfBKGuxWZfiVBb",
  "key29": "2G1n8PN9WFut4KvT528WaymC4pLdZD4bVh5SviThr3p9YGnwmufrZUgnNpkvPxGnuxmNEEDXeWgXPTZNUZZRM6cG"
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
