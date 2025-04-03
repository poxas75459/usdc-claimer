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
    "vefTB7Jg1mgWucQ9cfocdULwKZPKZGQ6Q6DhrkpBMkkfyosAxVFaND5qG6irFVyvmc4quuAfCfGGduqeMgZ68Wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J3vmeg9htdCkWe1Bs55FsHNBjhmYKknXSudB3Y5yme7rRgwiqR9u9tS9dxzyFpFG3t6F4TwQtdiYTfM5PaUsNWf",
  "key1": "2i2QNtPKLJdJcJhUaoMa9UZdiHoB1fLLyydgDAa4FyehBnZVoovyu4kJE3E4SkQsXJbwtmSFEbxbe492YgxthN8b",
  "key2": "2hkDuTRQ6tnM7hGaoH3Xg9wGPuwRWLMST6B1ZsyeteBkh41XSHbkSGctkd2Hf4epkZjWeRWeovpaqgEdexhW1iCm",
  "key3": "2gN2CNuqGr7fPdKJBssiE3PUhc8MGukMZA7PH2GPrkR34R1pS2E6rpAJ3KG4c3A7oqbTcj2fSTd4KGB92mu1TaVU",
  "key4": "3TCzeKSmncbhXFYCbVM9oNkKuZJ5wX8MN4MhTCWFLqjgcfhRKkrSUnEZ3tttdfY5vYgxPUH8XPGQ744HnQriun79",
  "key5": "2q82oCDms8dck2RfVGzEvxdWEn5n4k3T4Xm4WPAYBZQHvYdqDNizKKofnessPDN5CGhA96YX9NnMmh4Htz4LsRDq",
  "key6": "4QqnU5h4yGJfcZ1rYRe29cgUcXmB2q7AwPZAe6MQSirXfguE6xCoc3nxTzRdzvSbE7GqJeZfiMotR3vqkhhmKwj6",
  "key7": "3nhmACzakRntq5X3DYaNC1VZKxEErkWYeNVRjtbdqzo9gBdkdts472Ghowx6d8TZpQGyHAsaDXBjokK5Ad2g2h2w",
  "key8": "uAJZdsgiYcvg5vbcmGBm6YytMT2JXHUCg1o9LTJywiZdT8z432LwyKnQ6ZTN5bYccHWSJbJfAes6q3BADfrwmy3",
  "key9": "3Asba7SUCrbwexBAnD6SFZb7tNwsYoromRy788m2x2fbSgurmd6mgbhRMrV8fLw1RJMF43HQ3uDXv44NnM7jWDL8",
  "key10": "ToENXnfzsmMqh3VLy5ZXCLxUeGDSaZmv2bgXbs1PYLbyQw7XKbPDX7wuNYk4vtXk7tmibJaMYgTE5TWRqYtTvvS",
  "key11": "5hKGGVtCZhTeiFyG9M2yVZzvtMcCM8Qr9DriDvckafuXeV8dUoiPXAcQMfgABeyhqKeWLoiy6QRYztYaETJj4Q9w",
  "key12": "3Ggu4tSc52bTnqEJdgaL8okUAMhDXVeoZTwmuff9ZLBgkKojQt6ZSpNwAeM9UBw6ejrcZdyi8vP42SBaAjj3qNeN",
  "key13": "4pgk1x8YXQqMs7QuDgvAwd7hFnS6bvsiNe5ah8hNe4bvhbNgu6avfMHxEPpyrCfS2pF53SKTXf4nLQzSWLvLWi5X",
  "key14": "2JuGdoaPe5Z79MdpoUZRcNLAW9zqKUiTSMyh6ykvHtMyVCUeZ1WpzTfLnR5gMgXEHYkJVgxb3oQg671iWw7N8EsA",
  "key15": "UqasyTyUNbjxVkQG1St57izsSLse8A78rp2HeA6PYA6X2rGRxB9sKQcKEFDWan7B34dmEJdy81agStzJFPwNMfs",
  "key16": "4UQs4UunVobUwCToTohYv8zyRN4HFC9hFeB3rJyxsdFzcHqGW9bMYjqV7FN2J4RnqwfcGkAEQnAwzXu2RuRvFVmv",
  "key17": "34DnqEMmFHA79hmyAZiVvehaY6ptHe3aadgAsztUBc9TA3oH57PVZiUqeTYm9f2ndZkuTR7ptAwrpgWZ75NkUmXP",
  "key18": "5pq76VX9K1CcZXsb1g2rrtzxgWvukjEpAA1y6L4NE9n8dbp9XN5WtyXZ5LbyrUA686DYLRabGf5WQ5JdGBbMmicd",
  "key19": "oyjG4XjMjW674k72L8DUBmkSpEU7zDmahjbY5QjPmarHnY3qjF9AXqbZ5jzvZE6LomvMe3rL6fmMCBZuLfgEaHF",
  "key20": "3EXbAr7oAtnZXoac7RuC6R23uFocvf6CQrCHPRJJeVZ3ZTxzcjFPZyw8fdssGUVPkx4WnNWvSvzUFN9cuyNKwq9t",
  "key21": "BK88EXxYZKoGetizp6Aowb9SnV13iUHRQDVYAmeRNwnKkFNMhexWrZKw899PFQbKUUGQ8rFcohtikDHCBXvej8e",
  "key22": "4DXoFBpx5nJyR84KzTHESCw8ZrfFDVwVfSUjch2thn71G6F1DRMEHmmemvzdELfMsz9BfLZ2eqE4PPDb1XN1L2CP",
  "key23": "5wUJeMxbHASDjrvz8P1MfPMc6qZQpFP8zKbuihg4U7kkWwwsQuqxmy9aWFE5LyHVm67L8CVrFv27Cqbxhxzh4CaQ",
  "key24": "LrsW3bAAjqAUTKkUfXoBHhuLxW4ZdWxPp3nyJDyMvhCnofZsK9gdcKeHMue7ifBQujMwAFFLoYwy521EbAvysyu",
  "key25": "3fAA2JMtTkwM1U4Ghkq8RJJQLjcZMw4zDJ8jKoQBq5KgDB9mJC15fjbUjQ4bNDRBTQdCaKPgpNRV6aoJ22NJE16P",
  "key26": "57DX52A7tyqGu1BbLGPiQnFUKmHQw9JrbjfRyvzVmR6Lox2qL9p4vE8yhvvzdrg3oRh3r4SBgHyQBVRTBteEo9vL",
  "key27": "2Z7g8dsG66Ez7WYjJv5NreoyeEAufAvuLsHnut6PBexbmEouUs4VC3VJCiaabynArhMaaJ7W3fg9tYvtFZWAuAPq",
  "key28": "3JzXNSoNMwZmvYqD1akgvC7mhoNbCfNVFYvHKv5gVt2uGvzQGJcbRVqAgYeEoXmyBD5K1T3xbkpY6minFkXqrwPE",
  "key29": "3MR4qPsvYexpXs4ko922mwySKb5bakxQo4FxJrfk2HTYUeyKY31CCjXbpNjQfLT8rkezTF695GUcKYoFwAD2yCQN",
  "key30": "5erTJMpXb6qXURqKya9rokZMrXrRD7goffSDPtkiWjcmfQm56LtSvifGmnXRdwiwJcVd4C4T4ACzBv7TBcBxD8wz",
  "key31": "482iaLVBSPz9oKq18RMEeYrMhuGVWWneUgKziFGvJC6dzrVBGnKpQdD7JPvw1aVhSbLYhEHheP4MVRatF9CkedaM",
  "key32": "xp26p9n7w4VYBxrxBNWuKmpQG34tEL6sKRfgHZqep9pzJD6XraKPqrfuCiDnNQGmwb7vLp6Xy6XYGkEZHSUeXMf",
  "key33": "2Q5UVKPemWFJcf6Kjy1cwDrNvPsi8DXqsW83o9CtKjmSVnMbBnKf1o6tPSwfsYQp572aD13tAHiy9fCDK49XXuyF",
  "key34": "5NHDbT7ydoHPsV5PtY9Gh8Wo51b8pavzEQg22J9hQwhE4SKcvXY9mMRC69LATsiF62bn2evNjg9fBWGVW1oNy2nN",
  "key35": "2tr3WtTGrxMuYrZihWeVrhFoJLKBXSGpg1psZNuDjT7xwLL4LpH142h2aC9LJkqg31GYamx1hKwxqovMfQ1qShgo",
  "key36": "3ASDnG9uG7xbZpbeg3XMnssAsRsUDTdzBmPoeJR5AFFjDp9ZoN2Le5drtQSNifiarzDX2idd3DLrVboN7hJ1T8Pd",
  "key37": "38f7CUNSHtn8CDZnjG6T35NGLTJ7pjQMBzpEULbAdwFubQCnGvRU61LETxEjg6V7gWxmZcpNirLqyhFLLUi47ZWr",
  "key38": "YMiANYeLg3yixVmzHTuRbqXYm5jELCGcZuQwaP2bqc8a3zhESj39KyBd1xbHozncuUYhyyt6L55PRuneZnY3KdH",
  "key39": "3cH8dW5Pe2vszSykmfDMXZdLQ5RwArsjExzc48bDHGKPWi3EBfbRKyATzGT5QxxBBHPG32mdmyByH2fhyzTrXJKb",
  "key40": "5pj3kHPatft3xDmNBJv4HDr12G5pehaeqcNfTqdkvtXRM9Ao8BYqFemJg8EUdib3c1riMyyw5epNDap16qnvPn4w",
  "key41": "4FVzBwxZkR6JTvqBV29eRmM3re8oLK7q12pZqPg48iPQ4p2EgKFp3hz4FPv4vGi633SarfMDfkeUsd7tjN3A2PUc",
  "key42": "452NJZW8NhZuwyhBCAMoUfdUk6AngRHuZ5Uj5hG786sRTv8GkmbfwGnE1PjiW3gnUpcZfiwwzZvhdMMLHesF7Gxh",
  "key43": "nXDugq65zMqMUZoMkKqzxkuRTMx5mLWs8FGdR1a3hLN1S2z1A7jRaEMQLC4ps13mraEeGxnJhr3FHpaLk4cpmnS",
  "key44": "3CCDXu4SFoac1PVf2eMivNbhWyZjUn9R1DfsQZ4tqp17KdNevN4ExkizqekhChsWpiJBK4M4QznW5s7tBXPqeQR",
  "key45": "2CVzTpBtGzs2dHBNLve9WJdXXdDXqKki3aFdeNS4z6hyQJoWXHUE2EWNk58zyBfEGjnnabDXTkjJfw2nThFLgrcU"
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
