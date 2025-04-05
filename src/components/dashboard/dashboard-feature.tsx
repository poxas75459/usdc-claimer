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
    "LZv3QEb6XttB1X5CiGkMGirTW1U71WbrWqu68vcTkNKG9rCV9rxVQhKZMEPpnNe9B8mH7m4YzvdgX2os243bWCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cRjQvGqLomnPmEaVA7dfizBEwmQ8ML5Ccv5XBPmvEvw3YqdS7jXmK4vtZ2Pby6FQMuWexgG3rD1bdJYR91wDNBh",
  "key1": "2rXdsWyJHePWVzTQAjRMNqP2po1X4MHndMeWeA4uVXg92x8q5QNUR2KAdC34UyoZXUQTWJokqEfYdaApRgUC5Y5h",
  "key2": "21rAbq2n3cXuaVoVov1ZY4siPQ4Gj2iptYrSPnjK1DagoiZDA8ap4fvxfmjR4PkM1fTgx6VgS2rWHHjdoPZSaJXe",
  "key3": "4C8xwv5XYCEHiPuHWYjGw5kshKLrd8ASpdPuAGDuWnNEj56BLZFKhcjqgw43JTUZsvSjkzLVCkEvfwi7Zsyk7f4K",
  "key4": "5xXjGEEjDZsXbj3CESipZ3L4XxqtbiFPoPaz5sufrdczkVgJMMQH4YU8h4qUNzaQHLqVcN3dYSJAtUZUUvVKMhwj",
  "key5": "2CXmQTZp9PnCGoRzNgqe8cVnewN1g6qoNbBnMtJVdkb6SaUjs58dKT7CQDfN4gq5pyZErgs7mpk61RGyzTaJGFfP",
  "key6": "2sCTkZdYi4YmEr2qP5NLSkJ84vAgM28jq39KF9nLKGzLxjvSVwyxh5BPWSh7MEJUsMti5jYNY4FCxsYDZAZWwZ1V",
  "key7": "3BfonPhKdp7EmvXVCSRqc5x3MTCFSWfAwRDKGPxiuJZrq3z7fuCkwAQjD3MJLTacUnR78EE8MJMQzMLZgbLFiXNp",
  "key8": "57FQCd6f6uhyw8Vo18rwTYeQSjJPsvBP4jQ19fegQysFFdrbqgCcEZwzHHd7gNtt5KMdtAcbEiuA24si8UKnFCwi",
  "key9": "2gBEMyYQ3m5tLDJEduqGbLywBA83e4BSWvpNnADQoWyX3CjZUgvPNn7epzjFpfvDh5w4Wif3aJn1CvbR62oaBVxu",
  "key10": "4T8Npk19gogFiXJCZysCnfF2XSU2cZ8xpputFoRKmEXtbzSXUpaRC8UuMHaEaJnNRA4zhA9mA3S8KjsfsLxLfccx",
  "key11": "21pckGq3Q8g5tzH1WSy56y6A5BUQLKhtMfk6KiQM55SeDWv4tKBjdeQsPt4qiS6jaHwYEj9xbHbky3jZPSnjdikA",
  "key12": "66ahEuGogcAGDTdhKjfURc5G2SGPcf1jC9PBfJrBZzj9isLQCxrAe2jJUfGQh6K7ycPbmzDw21876vDLEC6vKcjW",
  "key13": "FxcTa3YhLntwATwdKRM4DU2fC1mX9hi7nRPLpi512Ti4qFXsgJEX6njnvTsUjhhzWfXsTWaBAhPBdmDhmJHL8U8",
  "key14": "5c5KLmNp9druUmDPEkNrqfV9bsEcCeUodzJ57zGQ8hNLbRn9sm7SUQ9ky4UfrL2AX11v2Zkiq8ytXMQiQX7bpULC",
  "key15": "4zbiDsB4iW1g4whHXDy6a86uKBhhr4uqE1RtEgWaiAP8DmhTGyST3JtDHcggzShHRZWi8TojVvNTbZUvJiYfJqAB",
  "key16": "83wpaewCKxobYJrTftcEQUTS7shwz8xkucduDLVVEiGWLyv3Dsrxuigfzm68AtRbLhCfqDtaHqUDw9vVP9xstXj",
  "key17": "2m55fKUmXGZxCdibnC1nfTq6SYMLA1iWimFLiSzqmBMjLpqmiaNRNuFhwgTkswL7qwoUzqiyidgUYT2fHd9dfHmj",
  "key18": "3WSs7r6ZSRPQNHr9W2WhNuenog7GnmKsunTYvuGto4pkQAyPkxAFWZqU8Yp3QjH6WzKLqycuuSdbmYJyb2wrFA1X",
  "key19": "2zAhY1GExWUiLD1wr1KHiv3V3PaWPbQqrVZW69wgmeXQ6xo2GjpoLDNVWQtGqRKfc7sV4rdbLnKqn5WPZAXkEb4V",
  "key20": "3b4UXDSutd22K7wSrE8qsHhKQE2xtvBsweqxikhR11jbgTaW8ZxYv6Wo5RNrStnogSvYhqFE47DSmiXx5EDrkEpt",
  "key21": "p7ogeHMKwsn1X5TGon7K8TiUBqGGZmuvmttM2saDcPi3ddCLMhsr4VqqpnibGee6HaC9BFGU34yyfufkGT8jNaq",
  "key22": "KHepwpCxueQGWNRuAXNC1wVcEVEXHXZVSQseMpuC42yW3JKGJEmbmzHYaSYT745gwKA9qh3pbQAk12cvh9nJ8L6",
  "key23": "5APJuWswHUjFVr8HqpFiqMRCCGNuBBTqNT6kFmK1oMSgWgMcgRKc76qxP4zX1a6FYso7YvsW8D5BiZ9QjnLF9BS2",
  "key24": "ez3SGnG7bSx9kkyfwpZFVroM6swtMLhsH3u4h46myb9gbfa3jokQM2H7nHA1FeubPq82qwXfxmQgosADcTKQ8S8",
  "key25": "5o87t3cw7mjQWayzypAXtwUa7HcYPdwVmP5R5DJprgCWk4ntGJ3HfE5nNo5cVxh4Re5sMqRgRacW2tzER8aPDgmy",
  "key26": "5kJeGsa5kK3eqFzLyeADAxC7Hh4MidQSV5gwGVe3DS9N6zeoo1jEoSRtiJJ48uZgd3BrjYXvZoR8nFbuXTdunfZi",
  "key27": "4a6wqmps4GPe12oAi6L5pHXL7SxbpKH4VxNEMfqxLnAwBngJFuhJjB1b8hK8FYF4rKqLG9scwBzBwx3YAytZPeun",
  "key28": "4NHELQEEaHP1eSoGkLHbLpBnYfSANaBLyiLVKRrLRpTbx2NcJPmuo8c6G3jTVhJZ2gTDo1M6HwR6YUnqaRtADHqt",
  "key29": "3gaPKfHVqysG4jnwmzArbonKfnvzMmNa6UoyxDWyLe23MpG7x5MGt6dBUGos9YdoSPWibwjS6SGq3VA7bQ6LeTdQ",
  "key30": "2omPFbXq3eFWzXveXanaMZzfyA625eaSUyR8FNPChfTmbozMQWFJq9H2TiqKMV3KRLqRHUr67aNfX4UwViicJA3P",
  "key31": "9J7ag1iawj2KUXeKhrkSQM6amS5fPWvsDRp4WrJ1BxQedxFDhBSbi4z5ACUjCxCYK27ZCXXUWWFHAmfRbLiBZJz",
  "key32": "4A5Whqat7wAqcCJqf9KJBTBh7NmZ6tPiTXDVqcAxeAWvVqVUWxaLqRanPcsjtXYXFtzSG14thVYoqyg56twKy4Q",
  "key33": "5DjfwGZZV6XgDyeef4H5KtC1VKgCg9ddGtK5DN9e5CA4HKQqnZZAs4heiD5SdtJEeXj9kg7iWPCfU5LtAr9YCpZH",
  "key34": "5qDSidGyRCPDw9oJiKvvz4Ju16kNzMTomnYhVfyzfwKJ48GL7E7ziCXm39ji9Z5PSvG9zLe5xcswcsFqbGg3vsz6"
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
