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
    "5koeZnt4cn6jBcj4tPyeuWfYZTnk1CriM8pCAYTAn8oneFQkF6rztYm1ebbZVCeaaSwV2TQyk7VSU7KEKn3H1JoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9a1q9C9fzrWSYh2Pjo5gfwCmnbxF7uZyvppytT45cj7PydcdSj2XPzSyAgViYBSWRcRypfZDtCNRBPsX1XDeYe",
  "key1": "L2vvhtRQDyAycW9uc63jCtu4RQ26oQQaCb52kds1pw87w7ct3j2wW1tAaHKTnJnjwRhS2vvSHnhVnuoyx71HeNW",
  "key2": "2gJfVpLFXFuszGzAhhRC7i4UyNUAvzeXu2UZwRBc28X9P45Kt1DjmyUj6TkQuHYNxiFaZ8Z8qNAfKjhEAytQQ7C4",
  "key3": "55hsjaJrgqCYdCsENZw4W7zVwtP9eUCURVShZKPLE1yS6vfXWmtPeW9yVdWJ7F7ftSmLr6MUvXuXhH9k3Yhmh1iz",
  "key4": "2SgrXvmAq4Lx4MaBdBLQNjvYULEbCgMfQuJfR5y2Us6BVEtrq7FiUbhG7d1tjmxUTdXys2GdchZ7gyeC6uhLXtAa",
  "key5": "4iGogSYrYYRDx1qxGevEzPMLEWzdYYbTxbFey85H5cqyAueAD4VXx2UY1owYaxxKoEFScQnLCCjrHpfDkMC7uETY",
  "key6": "iP32PK3fBXkiN1vvMxBQ3NKQPNQWbhHVq3PWiDWtDbSPFJiSP7vf13JHbQZgRKqokNGDfKUNyN1sjvuFoKEUxMb",
  "key7": "4a7B7BJgfEFB25rLjjpCMHVNif55qvUCYSDvTBZaPMgiKPeMfyofKx2KwgJDbdbyKMRdPLuZj3JuzVqcWbNjzNkD",
  "key8": "62YSDqPnsjptxbRWb1vVZRcjm4e2s1G3j2S8vEd9uyv8EFfdoSZb9X3c4C2f1QeYqCJu8Gjc2xbFAmhdc8iee7CD",
  "key9": "4AfXwFUwUaaTKwB5Tr2KHVDe7ujErHYEkBn4xKFA12qHDNmhEsp1iBiKVm7fobVuDt2YXyiENZSZw1jydNRkuT9Y",
  "key10": "MLJokqjZVMMqnwBMnVMTK9iR8UbotmKFxF66W6eo1HLkRthxjfcQbViuBhYKidTd2JzGmHCqUj6S5qVgyVaZi9z",
  "key11": "2MV8dyqZBzdUJopsRJPtnJ8yfYJzJZoKffts2iDPfXXwujiYtC97nVsyHg6Fo4d19B5qroqGbNNrJYbnSw9Dovym",
  "key12": "4pQXzVEdgK7zmG7dxqJcFddoiipKARBmH8WrMJtZRUZbkJx61f5JthiiWdhanQeP71J3YBRzFFh2EJddoTGHmjnf",
  "key13": "2nFG3beHWoefkRQN64qTW8RPBvoMMBZ3TcjXbaezb2XupPit4CVrBNsWpUziP4vZmVUMLZYEcDxqd3qRWWpiciRX",
  "key14": "599bX93DvgwPhQJZrjCYQR79yDv7UAp6ztbbqPjQvpPtftS6GC3PLKJGufndNVnsXpBrZ5Hec6RNaHGwHZkqXFgK",
  "key15": "5rKAEXXzndgkNvaWTUyHC8wYTumVDwXs7pizhHY6ibcAa3Uvu8oqacemBMpJ65wd8AiWFvJArMbdReYhdRJ13y9h",
  "key16": "yePFsHb4k6p9e9QbYJggfBHWYapw7ZnnBuuPH991TZRG6umBxor1a2fMynA8P88JjFXrdQFjU2rH3ZxgVWuokPA",
  "key17": "2QHX9PWNBYvgtXNGHZMpXFQThsjc3RDWb1BH95UVqAhRMVaBvWsSo1kBY2dCdNapqKs5hcrUnNKdbcoNLFnfm1pb",
  "key18": "4JrMkUEpMuwUULytxfhKopasQjcuNGRNeZ77dzqRL5r3yC57m52SQBpd1CYq7TnXBjBD25DNg7p2w6UEjrPMjwcD",
  "key19": "125FxVK2gcmndjmpSvLmfMXYKyWsojjZn1uACEdgyenJPmSDJA7etuyVnLbkmMymkWQRZis1WkknwV3G5GbjjDin",
  "key20": "gHDy9G8rKs7FtzQLKLXvAwhM4fqsJ5wYgDm1j88KfoJKkK81oWFff7onGTeuVo4BU6wew1uskNaspCMuePsADwE",
  "key21": "53UCQbnmPWN42EiqxpAyBs34JVEgcwJYwZAPagnnzo2mcKARTzAEVCm5VvoyDjZmcoUuNjsduQtkxjAE9jR94SVF",
  "key22": "3Rk3ezpRAa2AzPjrpfJEmH4UFe4anAEbTGwbmMoN67sdGqPDudSEd32cV6zsdj4zoMJzunobRzhbsb1v71GJeYnc",
  "key23": "CHDtbXik2DYcJYGFtrtK281Ku1fkrAKqewkCiiDRp7Qw7WPz9ktoUUtzbBiRhZsTC9K2hNZ9SfHCAdYHtWuhRo1",
  "key24": "2vq7EvLcoK3SsaKYzPPcqdo2fhxwVdXwwVetywgXEaQ62zZtCn8mGK88gBTzcGxTWi4cSGE9UjaeHhrX6jRafWTb",
  "key25": "3MLmqsys8BEPdRVyKJtk5C62zs83uYrjmyqa8mpA7fDg7XnM8QBtQ79tBnoA6FyTfNUW4Ex4NSY9PvsB2WEubb7t",
  "key26": "4AUFxkwegE7N64E96PnqYonH8rEroicpkvjpsjR46f9HB3GQHz4zaadY1nbw2yyWkZvJPqcicXVn2jMMfxVuzyjk",
  "key27": "4ZxSRmrNAwyG8YzoLNRm62gpp7fzvQ8FXhM2scxRVPBD51kAEibsYYZ3dzNqdSCWrZJSDDYKWEkidA18dL1xSUhR",
  "key28": "4G1Cg4UtFXD2CCKN4HSEJg4114XX4nE9M4KLPLn68AwdUQQJUUSNyYctNmUCypWhRCt2UtaU9d41tHJvhNhJ1hGh",
  "key29": "DaVjqtSorgEwoQGjbmfjppPCvZKS7Ex71oA32CsEVRABkDT3FGFAX8TbchG6ijbUp2RicFEWapjEaMp36GEPLNh",
  "key30": "5VJY1rCczjJ8kUyyrQRViTS5eVAUs9w5LKiZXz55DzjdU1Bq7TgP6rsRAAwnu1tsmPownvmJJFX2SjtR3TLMj8wk",
  "key31": "43LiBQ5vRZGJxg4hMHVXPiQpYThEvc6Ysfs5e54WADRcDj8VwQuwrD87HksMmLfb9XJ86oVCNYhbCzf6VnEt5xug",
  "key32": "UmZ8cdERSwMoKibgn8MjQMqSFrFNJ2S6a5gvPNSUGUwBt52skkd6ma9xAW9prTbuKuaz41dA4RbbkH64wU6RLm8",
  "key33": "4kicQp7DZ87jLigYchci3esqEmVvPR2PFVCsxgX3wnptiqWvd18qXk3kmUKxrVbxe46c1STC1S5MiX7boUJXQJZu",
  "key34": "5U9Z6Gkx6TyzgvxmH5FxvsBM1Vb6nozgtLNBraDcwCVmCdd6ohzHUvMoGAEKJ43ysobBFzfjMnAp9fd4Xnn47Tax",
  "key35": "2fZ82KK8EgRhpDzTTPrXhHCdWyH822aGG6adJX1utkZpeScyh78JrxSejiW4qSrtemVVwWPNoNnUbR2aZVnamByk",
  "key36": "4f8Dbf6JVYtYJykJAfjEYVKeUqd39BKBow1B2AUMpb4doE1J99LFsVuqdesTZHjjj7SCHinq1XJbaJ9hEu4AytqH",
  "key37": "JzWUPBHc6rdJsW81RE8Nhz5iELFVoCGQuoaBvJ3o1scHWUp4RWvywGKYzJqomf3Hq5jfm6gAxwd2UZ9vAsMDBFM"
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
