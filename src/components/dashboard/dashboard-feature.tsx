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
    "3LZZ78UbXoV4ENMSRgQEBAeL5tgLAM4jyKtUaS1SfnVKS9r7ce3n5nPzLvsG6b4EwkWW8Skek5tb45UVKxjP4JB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CkP5riQAVzEaFQ4mNHfXhgM4kZnGHLCsACbqUpYhDTRsECWhQXgrn55j6ofqTvdQCmWhAkr83fYnGWkhFvSXvGE",
  "key1": "4mmT3EcZGuTTmGArnihP33WUiApV4bpRULSUBAkWycQsd855mFyn1QjrDyMRdCN5guUzoprhuGzb6heBEvDyXoWd",
  "key2": "2z38VouyW6JLMMGEsLBVvber5UNUwvAYt9iV3mqRgC5U6H5eAdcbbGfua2uDSRMs7rjhghZPYJaTgdbEntv2eeCw",
  "key3": "oAWu7bjpDZw9RaoE1Q9WGQbCnuJpEtWuufq74L1vowYFGvMTtbbmUmDhNDsjmpBoMMQ58vQAgTiLAWiMo8Nf3Gg",
  "key4": "634HGycV9FebV6ud9SrzV88JHvgbZhaggeKZvgXoqvTukz2t8QByKyTwgp5VegAAoracTGvuNXWrYnPuwNEJeApV",
  "key5": "2pJnUbaVcGwNXMrKtWan837VHqx19rFKNysq9yBDPjGZkbEmnkFos6NekvCxbLbnh1gsdadv4EPxU2sZj1VTW9f6",
  "key6": "5236h2gpkCQo816rpVtjrqcHsDDX6iAAvo8DW6q1AQDHNSQF3smvnar6stpzvajjGMAQ2oBx5XxHAU9C3NfrHWw2",
  "key7": "5nzVBN78DgD5UGjkGFuKTswAhLEmiidqFDZMm3BEqZiZJgJmyxkRSuBYYEJr8XFDbPn7DWtohqeLmKBxVwAwEa4Y",
  "key8": "MCBg4NtWymPJYFhEBzBu61JSFqCGNwmdqPo3oMue7KuDn9G2CXjXg6XrKSBAYf3UXJrvPqguLwVqFGtN53gi6DM",
  "key9": "3STKzV7Uxpp9HmPSJ2PgJQGC1T312i56KePVxBzLQsJQDGm2pFkPksUmi6wSGo8qLhpdi22XtK3XUYruWprVQ6GY",
  "key10": "2ZLJDyMmdjCSnVktbWgTB5d74SVvywmuLS11PmmykJZXVBr8J5ehgVQuAJxac2WEixqBakErL4aus5ddxRCLuvWQ",
  "key11": "49F7qPPYVvBFmiXuj2jd5wpxKbKLCdaRurq4PFxvdydoy1TXcSiiSvwcKsXvX5Fm1wj2SpfHSH6wDdHiVsuYkAdq",
  "key12": "2kGr1bva8r3VHDsSXfYuyEracpKRSkBWnMDTwwu6cp3vp8qJeivUre1J69Q4DqeLb5Hst8WpKfLQN5RKfeJFWBKk",
  "key13": "5Qqpt97y1Yhg5tzu7B2WW51ixttdX1kCvG6mrDYDaz6eZoMtbYq8PF2uoBj3QJy22DZf1UUhWhXXqAZQRb2uAyVf",
  "key14": "3iLvg9h97AK1g6Twn2FHtafRdc1QpixupixthsBeuQKyTQrTNJNmhtoD5Yz6xJhpTVFeLECkgKmhqoSZ7Y7bhxeP",
  "key15": "JHmXm6CAuMAtPhm3uRosDQ46HoGPMrVXac36mWu9KtoFAXVAcMcJL7zfPzBJtFFw9WHCieMLszGA3PFp4wjoMnn",
  "key16": "5YunSXCWP1Ei7uykF3raFK6Ea5kTtmfz5PSKu9SdYQVGYGiHxdyodQMupE5Qd3e9dAH4d6gwmCqXDQuLz7hQjcpm",
  "key17": "4TL8xNwBs4pYtfkkzpP6nnk2XjZwo6i8VEGKG5CGyjmToVh4PFRrxw81vtsUGymn4aTeFjLbeXM4C18GNXRSJ9U5",
  "key18": "rj1SkM1dk58Wr6J4mKynebejd9xyShyQjByfq3ytu15TfYzo5CECkEzZ9A6x7MATUHM3JBJwZjBGL1LGtQ1eYD1",
  "key19": "3Joy74kqPnJF355Gw1FPDo9KBGfzsM716G454wKyyYLL7zqcMrwLCk6cd13YkEmBp3asegbBEJAzyTQnxR7NCA3V",
  "key20": "2GwXK1WVMEnnSvFpHaoiPdQcPf8LjBJcHBAuhtHrCrcPTmHytr3uvSpcW2jujKZdYzWT6KVVwYed3yrGVEZ3PTdZ",
  "key21": "2mtmcCCWCkwCs4mwXuAHwFStftkZDYXAhpiHjpUdirRhUxLutdS8ckVTgqjyD2Djcyy37qXjXRHfwHiQkbYtYmHb",
  "key22": "4UXxEYXp2cB1BYDGsBHvpHxX5W8jynXJTa763onhDmA4NtWoHJqbZMLHtU4L5UQKY6tbLzew5m7faKmsaT63bwh8",
  "key23": "2P2tcoGXmRzrANZnDxEm9RYGd52LHzo6wzvEmw9GH8svXe9Ah5xdRLAqUVinm2C3DwBbfp1LZ1P5L3gdeKStWGsg",
  "key24": "2tVaPEBCN5x9t96dJMwNH8JGwD3Rd9kEWttbyjbvSMo3JopDhbzBYmZEuU3jGFtMk5ecWDfg8v8vyGSfris67THK",
  "key25": "3tXUaXHSZdGiwYpMBnjkqHo3NoFaQ2WvZDn7HbbbTfkZHr9XVjXRHQbiUmFyeRY677qXyp4gUTzDmEWNCNsN5i3D",
  "key26": "41ScTDrmZzP7FTZYt1cPqhCCXLbKwygFNNBVP5W4BggJVGqUKkkRNXL58CwPYn7pT3i4rjqPukSWNnftaPSQPAFX",
  "key27": "5Vw3nUhrzz7F1dXu9Xp2MRv6NmtM5ycXXnzbaysurd8j1FqtrogfvUcueAp6kHd65pvSM7vV2p1doAzrPhoNg9mp",
  "key28": "2wbuNWCBX6f7sXdCC9GY5mJ5tPJyN4c5KC6BMSZbAeo5XF16fkLqTrmmpWPDSbZ6HVjqG1KHGS5GtAHnUhPhrw1K",
  "key29": "3UqKYcNL2mBb3n2UTb5Lmg4VmWutVgVebmfWNCAGzAAbzxvB9RhxN34LZuccCVz4VapY468dupJKazpUTx6zJ1Q6",
  "key30": "E6LGXxmv5F1BDzAAkqeBK5LpbCNTSFvUV2wnipUFfDh8DybtQxfjnNb318yCxG1DWnqmrwwrn1jrh6gf2hu1EZ5",
  "key31": "4N9bHo5PUC4UtqKPKi6KBnrbCezvTSRndBd8bhZgFDenKSDkV4mcDV3aB63tJ22PrNJA6NHws4WHTPaz7KVfFWLa",
  "key32": "cPsZo5FQ8ZPoZGfvdsYe7eyeM1FX18P85VkKtDhYYY15JkwUwe4j5sPMzj3ZyhaX3RPSeMxFmgZ9SvbWHLPfb6W",
  "key33": "iaieJs8EeWQUzi69TNzx5Ywf9PzJezJRH4mqRnB8UHSi2g7idVqUcEhEdNHoLEV7tZq9VYndXtTBcL2Rygznxiq",
  "key34": "5aKwTVdU2dAaPGdZuj4Kx2iesSvYDvehycMd3wFgKvJPVjgVUUmPfiAwrYaRwzPq4W3MTyLksCcpS4XTuRaWzycF",
  "key35": "YKLUgUsnSrvN1Wywe2dzUpT4qJep7RVsiDu7yfgjEpy14bqyDF59YmoSLpgacHRuqRnHpvLW6aq83zgs3yjqP52",
  "key36": "2zk3PBVKMt2Hk8izqGeMdVvbdreRTz8Ha4F1nwxxFX57yKu4KPbvy6gAc3YLqEAqM9zPoXXUP7T4LeHGxqGLGuhd",
  "key37": "N5M2EyMGfED62vvntArZCPTmGHs9RS2Qoseq1xYzxqn96VheAEDfpyd6yaeTP2h2Zk4twc71ofoUsPjUJ1Zbqd1",
  "key38": "4uUedvQeuHGJUMGKwFkCa7EL8JVL8kbh6hp8h8SSNuLZ5tKVoDNHb1YDgHSahmn5ZVZjYNbTNnSfGAtpcAYhvERM"
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
