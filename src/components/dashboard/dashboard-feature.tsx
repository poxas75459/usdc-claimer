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
    "kzyfNDYixZb5mcTVszqp8MBoLeZjLf894uq3SAfBDGwPThgiiK8kZ7vVHbMKWDksQU3oR8x9441mp3XLfCgP4pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sm6RAbjCwAwjrnnmixqeNWzUq9gtY3RCshhjAn7JwH8VomZhHWc4JjoX3gQosfr7ZtCSRLhBonx29sZNVkT6RwG",
  "key1": "4T2YonDajkcLKDcmqUA1jdEXN6Etpei7MaqnrCyZ3zvnVuR7dM6Z3EYX5WxiiGmWgpv7wDdWRB2xq9iXMmZbeqV7",
  "key2": "2qMpRz5h8VoUwjUPCLcAkiSCppa4b6yWhRhr6VyPQ4APigJ9q5A33RoV55S8CSnbJZ7sAw6EpB2vugMRuFjSewLg",
  "key3": "3xbQ442Gx93Baodn27kjFTLPjLnRvxFqjXxtaBWACEotwT4otnLBiZh6ZWbszneQo7yn5bmS4xepeecdwmXfjzDm",
  "key4": "3dyBpJNr7PTDN2Wnncdp7SK8SFrYCdwWfNMydt23G5ZcL9AS3KPgaw1bsCJo2uD2SJz4pjnv1nxu2WfT73JgYDRm",
  "key5": "49s6K4ApbFTUXPJhXpFAGTEAYwJiD9mndG1SfeLRqT7pm2EqbFaDT4mi7pdfx6R8UQHgTktmHeTQzAS8KHVFzMc1",
  "key6": "3pPx33qhHSheAuGYNqL6cDVo8yGhC6a9XBovqxMssFq5av4G5kVoexUWt6CSNhypawgjtkJuGVkdpMh8wehizQMq",
  "key7": "FBge7baSEhJCVCLud2McpPxUhjW7u6zmtveykpGW2H23KNK18raWM9NLWDFJwzopqTKNRSe9YUcEb65DAuzxTec",
  "key8": "YPWQH5uBRAfytg6z8By39L8FGQKpp4juJt9JxDhvXZ6UWK7Ts3FgNpHcTZVkeAg3xoT6kjKcymjy2QDpvpERtQX",
  "key9": "3NBQDs8DrKvjg6kP5CMR9TGfSAMQ7tQ9i98Yx8fJxydwiC8jcW4wXqYPL1VrfCmWyQWAXmBS9UfbL5tvdY84kMfs",
  "key10": "2wcVC73JkXBYNjqS5ewwZZPxxmAWDPByaRfGiSRDwfgJZwAzk7LvpHXZbXGmwje1uoewLGZ4hARKBKmgkaitpfwE",
  "key11": "2XhMnbArQ1LU3KRmyeMjAKphPPoh1ZQPY1BjmmAUmhrpc9czCHMYtcrzDx1geqcRbZtdu3s4Gpbs3nNnRtHg1aRT",
  "key12": "ABhQXhVMRx1QtTGeVLCoxnALiFV9tyZkDsvL4cWYn5GBH3yX839wBH1vfzYwWtNQfjGunwuWRTAuphMPywG1EaS",
  "key13": "5oFHk88uGTnxMRJ3BooA45pJgHJ4d2cuVXnXoSWaGYx43BWu4NLxY7vEo3GQGzLtzLXWSQEUVu8Yc1DH7evFE8oB",
  "key14": "4KF8bgTtT9Z8urKSTRWWh6auJkFnKsrq7sMrdCG1DRnJysqabArYA1Dezo1aDyJ16PotMAC6VkjBmTaknxsfD8XE",
  "key15": "3Hmb87HqcHyyXnoHrbUjzsyCgJbGVwTjMDSiZwwpGVTkh51khRKKJeubDJZgyukPgze1Z1McivQ4YmF9bGjmGnT1",
  "key16": "4gx2MoWock8VAzEH3wTGHwwQorAG2EdJP5YYzkeWDM5EAa6w4H3vP8UwSkY9us9RuzNgWyLS5AoVmNMS6zcKS2Lu",
  "key17": "38ks5qY5LDcAH8NZvKN8eZBofA2ZfKUrfTkrSKb3xs2f9eT8ZuoNiBMUxeaVb2JygJHXdY9C3ZxBjwKviZP37VMX",
  "key18": "1d7obhBNnjwBV4j8eoxS6saFgwrhe83uEF5v6nToz3hYNHADfMU1Qm5aTqCJtaCETGqoHhNRknthk6AcAze6uRi",
  "key19": "4j9spw11YaBDsRYuXTCaDSaqhuohgw3CuxZ1VEmUgAgy9wfakj9NHg4L7i285gSt2hryYNpZdhZkR2Jwn7bwiyWM",
  "key20": "21oDxekyWus5VJh9czCZX3nCTYAHtGvb3Zc2hPhzincnFRTmj33AkRVPKh1ZJ1We4s5xQ1hRYvriC3LFs335717W",
  "key21": "3wdhuw1wt6QiRrpu85HxLa5WDNqtnShHAPrEE6XfhmrzrFwXS7M4PbwGveRjRLud2w6QgzBmfmBn78v7zGWtzPji",
  "key22": "ybvd3LRQQXvt3kzZWPB79z2oXcZQZpHzg5zkkDzui9YsKrW6jp6Yhe59CpoNJHihTqYfvpF4hPGe6NLSxDSUeuk",
  "key23": "5YkfRFeH7aUQ3ojWwQVDqJfvXMEqsPUiLYAtypLJi515KsPmzDBbiJZgpSR8nMZuY1FhQekAvFt6Aupc6fhVV9Lt",
  "key24": "2hYuk51aCVf2W2vQjw8bEyivMrfUxj2H9eyJUhMUao96bWXnywYziXGXqUSP6TYM22YzcHeohBJMWSSATJtBMW1X",
  "key25": "5aeRqoDWxeaZbqYazFSYBVA4fRMM2KvF4fsMLtp2ZYaqGjsY66CAaYroagySR1HWLQDzeXLbP8CdJV62Dyzwd2ty",
  "key26": "5Mz3LimK9wNpgPuGPPy95vcMbpfe86cQz97LCxnG9qdzmbDfYvcDPP3kTWYx3JsHZYT1edWZW1ZDZeZsg5hLZkQW",
  "key27": "5vejZ6goLVfRdcxFTZBanDi47zrEw6uMvznhAinYncrYAxY9kVhMxLpebZkvaMvntsXMeWfHopFuXmfWf1u6ogQd",
  "key28": "5at7HGR6P1LhcEzUZ2Z84cja4qz12jhYo7jXvvpKTNEdpe7gjL1EjTc3nQkuPi9pmY7ZLHtAU4ZoCQSu6XSoSHZ8",
  "key29": "2h27QptNeB3yduZMSXuS1m5aAFQuThy7UE4ZXn16u8JJHKxaQqYuoYG3xUik6YJDeDDBLapiFeLkybryuNF1yECc",
  "key30": "5yYoq33qYamYgXwbb198o9R9We4n9Qxusn7dKek1ShafNdyY1tHXmTp3nSyPhYd7QmPVif2Cj7jpALdH7uvs2rPP",
  "key31": "3M9bqp2tXJAg1bGXpMy4tcVc2ULmZWDQipKnKKhTHjhCSavhXLYaWytbXo5XbX5G1r6sYRixtFrhhViCpP48s6Wz",
  "key32": "5sBTxm9xXMvgmNcYCMfMWoYyYYJck4XSYS9R5MZiJ8biojcQG72SERLaDPvpFcLeroNizUHwoPU4YuKhzegzqidh"
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
