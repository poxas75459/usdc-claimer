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
    "3u18m2JCrtSY3HbW1q8WTkB2fswSPR1qXpVrCbY4tNNxAnGg5H3GB5ssxTRvMDkNBYNmrSDMz2sTSm9mzkPRfWnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5F6rHWtoS6NATnnZw3C16A9JkTDt4SdMHMkK8oVLJdvQntmfmcuDZcH7LAHAxZNdo7ZXVnCZJmX9waSZWtAgyH",
  "key1": "3N7JxTueQT5SNYEV4qBgET6xqTA6Z6pPNrg5AdfkCKQZpCDNMCfr2YKbgqZVF978TtdbrgN3EGKc5sKuMAnQ8VFD",
  "key2": "3eNrEhEQ4fBEWUDwJZonVDKoMXrvgeLY2BBiRyvCK7HZw4AaJEsaBNdvZW4AewncUHMR1Crbu1G9EgxnasDMJwiS",
  "key3": "4D9aBvaaAobmcN3p5TGWbYEyMhd8c3WMc7e3TViJrczQSxjKZ5bczMVjL72Wdy2CFSqz2dfJX4mTNoXkQvJBEG93",
  "key4": "4R13xbRBUSJVyro3rRRwVMA8pYBk2Zo4Ate3ZeGQ5ZwkUuSfLatNEu6J13icCJRdYYB8PsSKcZ1nvLgjwQVqxP1H",
  "key5": "ne4wtAociBNBDjw78Cjmi1CqyfkpJYjYDRLzA95hPLoWBimVudvH7Y8hcymq15gK2CqqTHLUahYUz4A1riSymtL",
  "key6": "YNvi3jgg1QA1z7uiMxPwnQ4AWBUeHymxP9aRTPovzTihKCSd2wVSKsv55goKFg1T79aJEj6XDT47uRaK4FUZFpw",
  "key7": "3QB78YJHiD9Wqp9D7TGFU9TYscNv4z1oEgWCbdiA9yX3jcNJy7ELBrGzT2DMN6kPGdvnY4TBTLjYkcMbsRBtxgmD",
  "key8": "5Buua4cs9BEz6UiF9ATiHrMDxgfAYghwiJsE1ZUv6n7TT6NHiTkAH2DJYtkBKNGamjDCPGmLCSbaGTukRD8GwcXD",
  "key9": "337uoufMfAY9PoH1poppm4wvtm4f9izQHXbtREEBDBL7faTyDFMjKENK9wPWpSMgySNG4Fn4r31fFmcmFYiTEANy",
  "key10": "2PbgEs845d5RKVZN14P3Dn8ciFNVRdQcZQMM8rvTPEzjUDjTBz5wmEwm4n5ER9R62Mcdr3WBjypDCATRakhbkSyg",
  "key11": "CdNqP2q2iBdWmpdR6kBuupxawBj267v1qiDmrrAB4FyN8PKGURwsavoZuadDy5qQTSThgmpNXAcbJy6fDrBPSF5",
  "key12": "dM5FSyhBQXjTWcaRyijB8GjtU4wRpLzEtrC8UhqUm1KffZ2wAdYkGeKGGt6NFGJw3djyv5ADrMo1EGeXVadgRci",
  "key13": "3S6hESnxfbxEtArsLQz75iQ6E6HuGTDTG7JWvwzRjLqdPWz97bra9EqnAXkDMau3wVqWmCCs4KwkrTYsKuUVSr8d",
  "key14": "3AJbfYCzLVz81fsmASyrjZup9ouUsrokk2iG2Mb7baTGSafYS4eqapTF5Qr9DeQkZvtZt5HEK29LgDtVvNCnG2UM",
  "key15": "3c1ruejF8ZrFVwpeCt9VxGYPmyMDcWrKJp32CSrtmbdU2SxYw6BwywcExZ9GkrUTv3SToqzt6oUS7f8gC5Rrmmdt",
  "key16": "5k9uD2nLUCr9GJXWVqdVH8uTC8AZWQU3RujXyMrefzTDpRBgSa6LwD1FjsEk9BEGqJLCa2vLTqjYRepduVwz74EH",
  "key17": "1Y3arCQh9pEB9di2Rbxxug2hzLymeeyw78SVmGN4t1uhtZvE7HVjRTuUtvg98ebG97tVfo7C88XJS5ZQcMCViy1",
  "key18": "CzJ7amYBrE36eDF9g6urbZH4aNx6p7jYBw7BrAewWJBbXLitETy6WMXho64EdiNytjEayQcRjhpakNn4CHenPXm",
  "key19": "5CQvvM9GJMvikZqZshHbUhCHChKhixvoKsQJyShLeHhK4iuWF6dxGvunxRxBQLghqMoTJau3sktRLMm4D5FaBjn5",
  "key20": "3LtQAZSPkz4ZQycAPsUUrWZnPCaKVZVB2S9wMetFiP8SGYCLXgPPXEtGYr3xRRZydGXVfBBf9WGaZsPMsow84hF4",
  "key21": "5Re2MxkmS7baZ18HKJCbAk53BK2m32XV7EzkR4kMANzYz58K1RLjs2zJF1LbMQGcHiq3RkVuNBiPfGEpjrWWn6MG",
  "key22": "5st2eJAFDnUaf88TXwXtLLazv4mKrvrL6wkrg322D5hxZE1KWfHRzdj83zmkEs7zSpkYgBFobYTKcVRDnVgodfiP",
  "key23": "5CXuZCBbXnB222j41JLsXuKZS8V9QzBL1K2xGT2E6ZCVKj5SaFS7MjwchyWWhEuXHotRX4zxNCu48JmewHtbHn1X",
  "key24": "TpH87D9d2xtTy8D8iLM5VzRa4Bj6BXH4fjhJYmVVjk4MzVsQCcwxBVWXDrkSvSE6dxQCiE1SACNHPMWhub5s4H4",
  "key25": "5pkLqJnhDhhVWo2zpxjWHNRrnZCTaeREigdfifnKPBDjEo1LcvyH8fuwhogdZSu4RXDoJ3jFFsLB6pC5sUgiYiRx",
  "key26": "3Dcz4F3EPHCdHH7EpPUGbmv5vZD3xjpz7uEnYxo6KkMGMaZuM15AQggsVNVuadVwAK1Y6bUCafNzzHui2v4Frmgs",
  "key27": "2ov2URWAXV92aaYS9ebnv91bcMycPMZfgK6ao667KCgG1EPNGrZkwCH9ERF6nXjp8CM2ndUSXsVMJgbMcfNFPGSc",
  "key28": "5wPpkDbPehqCkAqHRACfd4uQoyV121LA6AB6dwBvPLBwTtKxjNBRjm6uifeRWoPpStJebxjwrDMMN8hTJNycP5Mr",
  "key29": "5mAoY5p2aN7gXkW31A3Q5Ha89jtBEktrkawNxbCJYSjRmkJbhe8oSYsawZcD5SUgwAmpQ9Yod17EijnNPX4XBgLK"
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
