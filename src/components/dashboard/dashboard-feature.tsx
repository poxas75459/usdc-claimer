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
    "PxBzXPECUHnnms3eaNZ6KYUaAd1DkVnCX9CSTQcDp4NbYxTbehYYXRqieU12XcnNif7XVB5rWYqKcwxFzhcWMnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBtqj8ug4PKoRiKe6ZE7ci7QSs98BTMD66ZDhc4Bv8LTrfis9aGJdu6KY2QzuZbsaib255jdx7GyLnsEt9MzwGq",
  "key1": "675ty5s6m3SSdU5yJhL7hMsNxjx8cgrQcjCzDDvUGL71kJy6kRFLotRcqZKvcXWyc5C8woUUUvnXkQsutKHeTdcD",
  "key2": "49YjLeSiBVpZbPcPVu64TbCTieR6QebwKQWG6E2PgvhcSyEAPRpAwFYwLa7iXKueRgD4zyu2LQ7gLCHXff99JkTb",
  "key3": "5Hia21yKbnA3voc5LzKsSHGN9YoM6dyvBNAFRx87PMiT93RnVkzL4UEb5KwghoCNSMidjSpBJz3bWT6v66Cdk6iF",
  "key4": "5Z9LVerombXnTQdd1KzAEeppWAJMh9SJ6VKkiCezTcNya1qFQMEPimxcSwvSZPFCJuCedRTWAYTNQru3pgLcMUhw",
  "key5": "4BQe8UDnR2RCBKGzNDQ32K4BiPedKKwhksoTDDo9YG3qZJbwtJ8xqucHJPT1baaLU5juTXMZGgEfx7yicKCG1vzf",
  "key6": "4pPS4Q3NmwxEGEVk1rCxaaKjnhGyjyTYiTGyDYz2E1hBVkkZ18t3qkw5Ec3wtaytdbdtVGfz7pmEeMaThLUDBSe5",
  "key7": "4AWrmEvkJad7HA2N7UkkQU2vCf7QkJqHGBQMqn1sSet1LHuFRL4z3wapfQ3SpTTwZVxqQ4Ya92oMWTZ1zU15QTWr",
  "key8": "5jYz5RGDRLXHy91ybVjH7DVx681XxhbMHjKsa6SU7wKe48t8PSrHVgZvNMgwKREBQStx15b1dBJXpUiSFAGwvPxx",
  "key9": "2xiS2ifebvgRtdowrG48Vx8e75v6bLpiSnMu93eRAhJNjsicrVLok1FmSTw8cizSakMeaPvW29xotXu2VbH3BwT3",
  "key10": "36BceLWC5h5KBtUuPw7MoFa8dg6ZLq5mVQ5VwKyS6GtLF2YW1cs9StoADqobwgzpM2V2yPdP7Z7Y1mSPZUa6jRYt",
  "key11": "4EpFXUsucr19fXyTL8USjSE4WC7WLh8PoaC3gmEgTWXw7MMBkd8iHbkmKdmPNV9maooETgkbjyfbbVeUKpfmwWcJ",
  "key12": "5PR1XCyuV5dEaGzy5tCezEdqZwQr9JXwHGK4cz27EjYvD53TX5pTCuEzzfe9vSgaYWtYkWF4HUUJCXfQbf9UB8Pv",
  "key13": "63wnRAiqCGF6cUdKerh3yuNqFyWTNnWiyGSjqs14AF4HcJzUsCvT5xWadvDoUVuJSC2jUmj3xLnCEkRg8DnKyAUU",
  "key14": "2RsZn3xtYuUZrafD7rXbB5vtoL9fWW9UXRLuYYTabbyShx6eHEGwX6zRLDpLvLngvHF4Sbsni3fHkatZQgmqsXKj",
  "key15": "2iMRygYW4HRVZBrzotCoLuRJKtrodNvYv7uR89EXsTi1Mtgpgi3TAQAuviEdx6UWE2Jth4erempgkmVEQ2Ya53QU",
  "key16": "5xTJXAiyrVZt4VpJ17jXmwb4hDUtqCpQLcfz4EKPxky9wbBnPWHZ7Zcp2MFwf6H98Y2sPV1FkccLyNU7UnnSGTT6",
  "key17": "4V2ChUFucYyLQRdfByhSn1cgGrQ9rNnbdcr2uyySjyKkuj5pNRdqHXMy4TFwwA4sE7eMWqbMSRw87Ssq4PcTXedy",
  "key18": "5fKp4Dc9U1ZP9KG81jNqUMBavi9WjTcVwefWPnGDk47GXP3itxu5JD1TU4CSkx9RzrHUxdcsuQpepN2ptB1LBoJq",
  "key19": "4D7Gq384LPbdXG8iFqhvrZkiPfHZ8DzKR34zpBJszSib15AfUiDZpKC5Ap9evKvjbunafVvFccbACcTDKavBUcCb",
  "key20": "3isW64PftN1UkB7pFop7tDLoxMakFDBgeCu1FW7pCJ5VMBzpxLwsK3nJPou4QkBrjF7BEaYozDE6NXpDTgX6q85P",
  "key21": "3LEu4a4X15GNXTrza6kvV9doQG7ycxKXPrQizvbjNwFn6tBHwyHHrHJYAgVwdWfK2DaJxG8t8nwEGJisBJHv4R4A",
  "key22": "3CRZE3CKa664aLqCq6gUopZ4Vm58cYRa6u7iHHW8QuEEQCKPDt1eGsyd72eXTzmnmKiEL2m3E5dE2RZQPcPaVEva",
  "key23": "JwSuK1NQxGoYoByMu5yu1RVCxaw8EtsibgzYYkeUtAAD6nFioVu5BgK1SKfUo4gJTABy7jTtMULSh1yHBeDNtcY",
  "key24": "2X1Yqd1pf7qxDx8L42zFvy7PLGrKuL1CdPC6vtdGAmteB2ThbVJe3Up591nw6qoXGZiAjFBNvuYxpqsfH5Mh9bEo",
  "key25": "5Fp9UZ3uGSyR7oGJevWzh1ejg854h3qDn5qrbSNHs8Fz6EZSHbKo7Sks3fvtJAaCHrFza2yhhznxZkfvWEPSeWBj",
  "key26": "5bXSDoqqhFbVnarc1VtgWgzkPJ6V4PF27KEApvdAHJiC8i3sc8Hm8pcVMnHV5N9CS2fU3p6uX9raMBRvPWnuW479",
  "key27": "4rZt3jgcjnMuj9b59tTyLKo8i6DacaeUDjovkMiaqoXFL1dGfnkxyxTmuE4snZikET1fdF3GjNGdYpuuvvtEC8yj"
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
