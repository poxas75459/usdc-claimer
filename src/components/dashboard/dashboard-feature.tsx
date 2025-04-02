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
    "4iJkYWAtzPRRnho1pq2kMwN4oupthrLyM5Ffqy6usGuxDMNoshfqhrZ9Bj5vuuRbnfrgtp7VN3urcj9xB7zNeAiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NkmPNk9RfWLURKjvBGCsS1XFk4Y6sbo88qtgbm85ZnTfFsovWamSSk8EE7vGj8vHzEXkq17JdHUZRJXNokDAnTj",
  "key1": "bm1GEuJiUgeopUpmdUzCeBwbWTatAY1iGPoMtj4FkMaCSfGgoTqwzUCXuYVBWeAUGaGJoEZVTtyaaQW5uS434HM",
  "key2": "4KubXxXyqmcVVSDqh7scdebQDWGU81kpEkpikXrsapsKj34eoPAXwFEuxXfP6YhzhZuUPwMsGwAazQrhcRPrYUxi",
  "key3": "4fJPeSkkBErcHRSzCXfvCxZgU8ojYpCSKnkZN1G4kdarpBpzQKhbWaJhbbT5nq4afyXNzJS7TNkgvAwrJAig3ZQ3",
  "key4": "4a4zEn6BrmQNGfkX85EQ54TCRudHYzs2jUTH5n7jMmEkaxPFPhbuzJSFrzu1Hqqzcn9VBsJaUQ5hyeBoCTLvViXj",
  "key5": "3SqjdkimLAFJDji3s2SXLdsbAUPfyuxBmbwXUDhYM7CrfSkgNT5aiofY8dTQoH5b56r6az8AG8CfMc6KvnELsSTU",
  "key6": "Eaere2fM6FzPoJBrTbtLGc79yQkDLRUHReapYGhN5t9LaD6W5cedT7FTHvYC8EV3ggzbwe88CYqh924KTpoWV4u",
  "key7": "4uUBqeqcJsbkLFLEXPDVk1DnVWTQW936zgChYNd1sQ21wvoTB94QUCgFpx8HDgXiEteEwaB8hXoS6o2281XJ1JHX",
  "key8": "48iEepPNpD9PZMLxeNhTUvVwkx3hmsm3iZaTixpC36jcxYGCn6LTEhTK8haUbZpktC3MzBcRL82MWNaLSRsBP5aj",
  "key9": "4L25BEBzMVPqy5zfytiPcvuDMJzAUg8g9edJEZinVBqe9E4ctW7be84sxRS9ZSSbvKP2wif2jUFH8TgbBsgVXNeA",
  "key10": "E11LC6KukFWtWGQBM8TFz2J8QEeUqmjNenhCmTWP22YYaGuk8ZcCFXryug9ar1oLWNhKqukZsber7fp35Ptbid9",
  "key11": "5eqq4ySk3WBo6t6oVHYo61wzjF39YC2niVvgjBr3Fx761K1Ap7UbzG8tpCDbFcBtvtcyGB1woiYZ7L5DjT2KC5CP",
  "key12": "3i6G4UVPQD7KNRS3Wfykkq6VpmQNbjYH8iYyMAjUrQkBQCPyxSjdpGVugewCBWiv1SHXLHg3EdFakfziBF43XB9X",
  "key13": "2n7j94wsM39K9CVE56FzhANn4jRFDEr5j8pvGLWBP5p2LoVBkLQRtu7iaZGh7kH29CdZYMqYNsXVVZ5LJLtYaAuz",
  "key14": "btcrVqfCHNr2m6wSTeSrcA8V1eC16UuK9X85ANq4TkFsaWyMs36khKR9E4h4NbBjKcvFpa7LgLJeWViTy6fjfwR",
  "key15": "2Nt1uCHXU87uhNxCRunrEFTVKoY8PSy7AvL82nbjczQS2ver1vCpENqnG5ZN4p1oQdXjuMANyktp5GryLAthyrEJ",
  "key16": "5fECPzoDiMvhaMNbAyJHMpQsFoJUJkGuxX9zfuvHuSzGJFzHdQFzRRxLSyW2MJ1vA5ZAfP2eaAc8z1x33qLPujjT",
  "key17": "3vRuwy6f5CR7chBMq6TiVnRWDNxneSNErKc3KMsvRcNEp1SA9PKHFjJ81zFfMLczo16Tk5VYmYSG4hUtqRCs1Kv5",
  "key18": "5xAzGNzM6hSNi6BjCvgnmwf7FTigm8PkThzKN4rMxsCAdzJCaUvR1tFbYFxrMiZzJyBMN7BF1KKKTbBx4yrUueWz",
  "key19": "4dngkovBQ1g2HZc3u791usmoKmTbgztMfMGQFbWYcx7Pdba2WMVCo6or9Rm2AmA514zuct3XqQ2znsQ6WE6gqdvX",
  "key20": "w1pTPob1gw7SrBjdKPUqH1h9wrLm8ou5TcewCHNKAbefYMF1UzYWdHSHTJ9jAtAp9Q1Ffyw1aCeePvsVRev7Tav",
  "key21": "4WWQmNGNsv4remmZVykzU5CNageN4w5MgJQDBUJzZvU2N8BRUxn8KYD2wbezDG4RvvJARubosKekgECj8rtnyMeZ",
  "key22": "CyvNxkgRh4tdTDsTH9pVDTSwo5UJSr1227CHvq1A7YSjLP462aPx5RxeFx5oRJMV9vCkn4LXyuc3nbaHiZFagPx",
  "key23": "5SrhU3BMPoCCyJTZqR9RTesCLPZcb7mX9PmZxm3z64jzDNFUFWX5LzLv6CSMLbba6aUhompRYzC7PQHSPug8VjpC",
  "key24": "2gqUkmPiXddrXj5sThmYnT73B8hUEAPU8wGP7XLWEFWcfkU6Rkza5oBV233RkxXq96xPJfB7XoEU9JPcvis2NQB3",
  "key25": "2EkaiU2LCxC3SfKfmAGuUg2CkeUkWBBLVZwdHE22FQG3VoBSet2qQKvj5WDQ5V6p5HfmLtZLZPM9USfiSCyEL7H1",
  "key26": "3sS7XyXZr7DqTNewmN75aacuEny5mMBcD2oVUT7L5S4vpnnvTaWCa8Ww5DVZkSE4nS9a5sryVkBCXtPtpQj7KAEh",
  "key27": "2CLDPH142ezAEub3Q3eUQiiT29zvNFrDsFMRi11W5KZwN9e5B9VQDAhRoHdR98JXfuSYuL5BcRZLdRgpFRhUhqv8",
  "key28": "3CS6ykSmUGSPdezQLKyAApk1d4UCVFJ75U8LXJ8wBiumNnDuxo6zAPDsFM42tafKFcf23MXznHVze9b1KrfXEhuq",
  "key29": "5uxTT8Yqvur1UiBTvZC4bTFZxamF4N1jjASCByvqRFfpeJeudfScS16SK69vomwH64Mv5CsWyD7VFPjZcunW7BFy",
  "key30": "2MzZRvecngkpuX5bR5R59A5TqGA86RCGs161kdvgwBgjoxAbmzbpCNBXwprP12KezFvXNfDzWwi6Mkq7w2JQzspx",
  "key31": "y7REa6jopVn65QPqbw2Aad6WkWKGLDVE8LJXfy5EVcRfBNwj3qa4rQJiQ9N31YuixRpn7gKsWLtC9PfXAqC8445",
  "key32": "YoeR6QTjtBE49ZPaVoKz8kfysd1w9teaf1af49r7o1rKchdpXasrUy4BqLs39zUB3Vaf5WscXq288eE63c1wQhq",
  "key33": "4HHPMkb32B7xePmyx6SwNMfkk5WrYct193FEL2qesZTaPsiaFkdwudQLjMxW4xr6TU9eTdLMBZFbC56dkYuha71D",
  "key34": "3PzTbm4XKGUwyM9QjuDe4PdWHEUTwKxAorpwGmCqJtB3a6dixdEwVhZ5dMCuaZ2KTgucvsANf2FNDjkhGrCuin1T",
  "key35": "5bMLrV8VS4YqzSWmcVmrcUXpkbQKtxTZiHbbr8uQatFkrmG1xW964p2j6i6WuoVZsxRfwHAArXPw1kfyyBQH3msq",
  "key36": "4sjuCM2ijHEMjpT9LpnRP9bdAShwrLRMmgdLfyDTQhZYHCczsh6Gskiyyiap4TerHkXkuL3aVFSXM3Z1CpW7pFV4",
  "key37": "3Pgc5HBcZ5UAd1m6WXkEBVbhqttAbFJRZUmo5UyiKLonnm6aBBa8Qmht2AqEiKR7Wc9kYKSQLWmTsP2ETQEtdxjf",
  "key38": "3q5m5uDpoNxqsUiVqoDfaDxehy1LFUhHRQWTuzmFebtPUMSPTcb3qYjPAwKshBrp5h3txobg2doSBC7eBVkSLwqE",
  "key39": "2NdfP8V9ZfsXeDvsM6kxTjN8d7xwLPV3YTRKbkyPbttpeiNxTEaUS23dFysLXS7WDWK9rfDc3MtWP6xw2MA1TsQG"
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
