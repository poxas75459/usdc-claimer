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
    "5o6fgYZyf7jdB5upvqDJe6R3HXmNqCbK53N69mNbJy1EpXrSy6BeSkc4QNFgmHEQqBkm5kgb4Xi8zUNYdGrPvHJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vBLgGm4pC4fDSiehPEEHfoV4zArch7asadp5MPRfwMAARHaw4ifUUu1hQEsoQg84bc7E6EV9EQ63KsbgroPSpRx",
  "key1": "cphptzZbC2WJc5ev4EArKfSEXnhvRRvT2GTPfYknoTTyphGbDhFR5gJfT8Rj9xKBQXdQHrCX5Y98MnEDMjfCZpo",
  "key2": "3nqhKGeHXoLfKMJnfUhz3ZzL6g8t8UduWFjfSiA5ZD6tbaqHLjQeEYVZ1VCYMWJKVPBdwkhZKkzrnNiAhhUdT82A",
  "key3": "3aSxNqy3rJK1NJEr2MjxSW8jEzn8Fu9zajf9ZkdMpRmYPPk98CNpjSoRBpRmNYLMk7p1pf2rcBSwMvy4o8b6etQ5",
  "key4": "28r5wftyBo7L7AQNvUmQXWdQtH6Jkz5pFCEmopz9eLtMc6V7CeWbhQ34dM1wiAvkHDjJHZqQTfdqE6unsmLv3dvP",
  "key5": "9XYg57PAc2MXmtFEH71yBProhjSMRyWD8GkTUBEtfhYvDXP2LTRt4NT2TFpapNjbQ2n4hysSXeQ3b3ckus6NQDR",
  "key6": "oKgaQ8Q7yr5AjtRi7hf4vX3x6zFwnE86fMhGVWa6R6WyoR5Rm1KZ2UFTov75KgshownmNiSyzvHUGYx69U2q4RH",
  "key7": "2VJRhF4L4EgTgZxAZPmHmnkszj3LwoGnMMrt2PQTkodGWfjswEUrN6846Qxn1xomAK7kmyRnUhMcP6zvo1Ki8VwN",
  "key8": "33BHujCaP7J7TkQRhCTsr2V2a4hGSCw7AtGCXumNopTKTGn38DGUkSTiJ8sq9S4vkkugGQYPkLAM4hkFCPcMp1vn",
  "key9": "4QLdMNGmQqGezMxRZojTFQ4PdoL5L6LAvuVQQ3nb37wxYFkV49Aqd7n9nrcAVuskeqtS4Skrkxcat2byiczXi9LH",
  "key10": "5FRJGf8UiGYvG6X8GP2jTP4PH431uEfCyHN8dKaQs9snqYens2Sen37R6ZbxdD7Uj9ZekqbbJMnY4UFALK6c1v8T",
  "key11": "2fjD1eSf26aEwsg3sHH1KayBur3P8Q4Hz43CGL5p7SYN5RoWVtaaeW2vpKE3UM4Ytm35m7aDFZEcVrHZ7BMD6pEn",
  "key12": "3jTEpwGBqoPFTMuew7b7YSSJ86FCvVEpQa1KY9PNVNrViymrwUFXzUai5peEH2yRK1WmR4aYFL2sLPAFMXaYKfBs",
  "key13": "TCwe3ysuTH2fdFRG6bZ62dc55ERp4zoHoc66UmQX6ph5VvqntqGwPhuaWva4DJdEVtDEdM9bQhFoDdaaB75thLP",
  "key14": "5kYV6gmwSEUmjkJDwNXyhZFP7EBXpFwtoMbESLB9Uf8pgJ5xZ8Dp5wV5f45NFCgApGW5NkweyuTBMa5s8Uz99ssm",
  "key15": "4WaJPyXzmQ3vaEeqceSSLJEHf9ynCvt1C3G3jST69urLLDm73CPwmtfsaCUiGuyTNBzQ1zTirMoq53uSEpCFKEhx",
  "key16": "7iPjxw1k93vVBHquBaWfFV9CoQDwhRDs2ZV5uusgctt1tjUw1t3f2EGGuLFHHkWpErtLJpEXaUCaMP7hogFVqxs",
  "key17": "2BYyvLT44Cau8oDk6dUPmJrZp4rqRULeddRU17ZmHTrE7L17rRzfQaAHDM3PuFHhzBNBqmu8TdMbi5tY234f8Rw6",
  "key18": "2CbjDoC1C3gaEvQR5hrFy9ki8sGFifuJV9aj1dqf29p2CB9xSYCCbAb9QbQuhZpCY89LsaAQAjPk7th2Z8mEURQx",
  "key19": "iP6Dc91rQLDnMaZp1mfbLdz6sr78sNfQ1puPmSs6WvsP3NGu4V7861z9QoYWPjVJ87F33NDifb69sHpEQEN2CHY",
  "key20": "5HZfmKZ9kJ7oYkMJikCMTnkcUbqVsDx36UgvHZHgdp5qgfoTnQM8MFZBjDsKaTe5L3xd7aE1ZybFu92ygYpkXUEJ",
  "key21": "2XMibGJvjRxis9tz5e9W6aPCB4LoVJNuNfW5dQY178u6EZ8hnqtwYbAm5hZeBXFXJUN3E7baJJzLdn6Ewzs4pTv3",
  "key22": "3b4fBf99sW67cBFfLGwTrLHVdkrswk43VJSd9eFEAxMFYoCs7TS614uWsUGFVgVAK46P4ynjF6VCKqWsg5y936rp",
  "key23": "5ppwanvuTmaEkkeVpYRGk1L79jrL3vsDAvWr1dtYYgbrhZmENzP8QqH5o3d2xk9xxxjHhH32KyJqYprW8hNZLpN",
  "key24": "4xUzGyKX7KFz2es2dN5NjPAEN3FXBvSriPsGeatsLiVw3UAjpcesCgpbLGPuJgra52XXFvyDUHHenwfoK6jqxcwW",
  "key25": "4qY1fjStzTggHhTQq4Z2SHe7bDgrLoE53TUsQnS8QxuDSRdkmmKfxgUusLSnvvrFzcmPGs2cmGzDM65w7hCLYkgQ",
  "key26": "d8kzrLASpFQC2XtEEg51yGMQGPjJPNz1NFB6RB7gvjRjr9x892e5CgwuaRxAVq3GLuYaRZwnsBvpKUSVGdgNMre",
  "key27": "4NzK5Abi1vmmhFuB292x6EzotKniZ6GibTnGYgEcYgJHmbTuscTCcvZQotgznj9PY7wqJXYV9FmtnREfuUMzyRZ9",
  "key28": "5EoLehQJ7AzDmavj7HsjqLCuj2cUFxmxQhrYv3NxKN97Mnt1zSqMEDwRmLXJ3zx7LekmC1ThmLTEnQHbJiR3Xyqo",
  "key29": "Lq5ynaZeumc7E6dfkZo1eyoxk83cqKGR9bDnRpPPLviNvBBdy9ciKZBW4wHUzzEHFU5AyLUcj7dgz4XuM8x2gYh"
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
