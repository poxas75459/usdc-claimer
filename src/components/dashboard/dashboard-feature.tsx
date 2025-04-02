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
    "5QqjSLBL2vYUWzy4nqRrNcGhVcwmZSaK8DbMhNBJ6v9U1QqhyfktG98vJxeZfA2ZX97vNZVNGWvuBKTkUGapit8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kA4WSQwYJ3eXiRjxhwXSDR9HyBhNfbcT54sYKu9tbVuPMusrAynwhfZUwCqXBxeEDJFdMLaoKwKPei196SVbgCi",
  "key1": "5afVYheL6yidDqd3iiaVH3Jods3V1gdvc59UDfaytUVZ6tAZpxJ1AFLXXozFSqvEGYMcQ5PnpQRMYG8R4PFdM1KV",
  "key2": "XtGhhYzMGtb35d7UThkuWnRPMvLiPRoLLBhK6iZwcF7rWuuLTYDSZEzHE449DaJsdYsmb3GtCLRT2u79D1Wwpz2",
  "key3": "2bhVGENUDxrjwecza8YVZ7foW2kLLQhiqN8ZhtoE8cgnhpKgjFRuDu4GRWXRgg3DwZHtZ7yY4wir4vLHwUnPFT8y",
  "key4": "2k64Hkh9QDTj8t4HyVZuRdGQ7vzxwRJBCEx3nPcrg9gj8rEiRuqpDEXxag383HwL8ura8BUNt5WXmqdBketvXZNL",
  "key5": "56HQ5aEfD1FMU5pNHTur3tM9hb2T5EodVAs2HmEjaNdafR71SMHzJ7NS4AJEGUBqUe2FKtWZ6WEn2j7u5yrcmYRY",
  "key6": "41QzccTvfLddJ4ZFk3KrEm87ZTcDaFnqps2aS2e7XJjDPA34MwgLFvsdRLyGP6ZphjqHSyGgqRJPVtJWBC4dT96j",
  "key7": "cHgnjKTUKN4DAch5L2GY9WC68PbcVTPfRBEuu1XfNYMMzUg7QmTqDeNnvom5Xx1mnHueEDz78s2MULP7fz6Lf7E",
  "key8": "53A629oMwr9YSC7XaG8rB4Lz2qsiE497FUiaGSwHST3Cz9DV8LDGKoHRetksnDWKFb9duGabnBoigUkKG4BCyDws",
  "key9": "2dS5k3A7dcnfeZGpuANub2bbxTwkjuwFmBrF1atLJ3Vd7ifzotsBaTRCwgLrusDpAWaMwLYcmMShgFuU1kFme5yR",
  "key10": "2nmALfoNauPuZaXKrp94e84gcqdmfo1GhfUvRaoh9LENXbeny3ihi19wb49876sVf3FNFZwTTUkiwNcU643DU18X",
  "key11": "4MzAryLyDVPVpvmdxpEBwrP5gZvVuzwK7knCezPQkzU2t1okMw3GKLvExSvwMF4YE2yL3QKJReFvsZNu93VhKLt6",
  "key12": "4i8UxX95pyJqsvP1n4DNcS9PfGtZ88uaL3RHGh9B1rsJfH5H1LX7S4Vqv3v3YQd4FicR1riBg98QfoAgYbUipHEq",
  "key13": "4Ego5UAeJepWMgLkZ9KW7dgtkXB2M4AD1JDNiyFpW2HZBiNcrSzVYw92Ku9UM3D6Sqn1E21g8RrvsZWu1xU3htaB",
  "key14": "3chVriCkyjrC1kC1C4ZV78Rg2wKgzZ27BrKtKgGHgVkv7Y4m3vixxx1fpGcrzV9JJdTBBhiZa5YuD8h8NNnQTeuV",
  "key15": "2zonPjwBfpZFoB1nLr3EZZ3tG97ihEoVdhwHbPPaWyvEcSgCZ1adCt3sm31VbLuxwz7T3AojayjCxuc6hPu61gJx",
  "key16": "4y9T2Jytdbi24TpKZFebZAMNDqqGWR4nhETTfobq4ct5Br7xATTKS4HuDxsaFDCq19YDAAwZywJmDvZqYAKqz5La",
  "key17": "3GZ9fQ3UpbnojTw8hnwke4zJayiv5yj5hghguqaScewsm4YCC3cRcdMmtjBUBkCJZ5ZzeXyHcxZKJ3NxyXt5BQ9t",
  "key18": "4ekZwKeHVqP1gUVgLHegwLLkWLsswPE4dGNK9Yy3s6VKCqauFH1jusvbkP58MsADxMED244qnY7Ff1LfxpyDH5s6",
  "key19": "4hbmRtXtCNELGZpwNLbvxVPYQKwJF6ySgupoizhTJMgapVhpX1DrMKfQh2vxJb3nLYKnvnu1JawEfkPkR4me9i7N",
  "key20": "5YpH8t1Qfp5oyxHJSyBc479n53YbWXF1PgXnqkVhg94un2bxvk5U4Y6WtKRpvFUB3hw1tYsLK5RBvq43zE1Pryci",
  "key21": "23hs61yVcjg97XXxn5ymtyaWhxTN9mP4ng3sveX6k1y46BbKKbXNjmYKTjLAMrTt2yQxCKxNmW8ebQA5d2QbHREE",
  "key22": "XBXDR45BZFGVxFNb3h5953sWxrZN4TT1o9DKn2em18f64FDRt3apsS1pJeks9nd6eVrnjEfXVgvXQSH4fdrUvqw",
  "key23": "31sr5LJ5Jb9NBvjpx8Zb8josnHMcBqpYrNM3ktt7tNp3tSxxr1VgHJFwKkV7m1tMFuhDFmohV3KvL4e8cn7qjzSz",
  "key24": "NeNemumrWapwLoKRowr26wVXH5S842sW4EusVFCWXw8gs1hKdR8suaBaqCJP8kxnHrBuhFDjxfszaCqKB9ZZCfW",
  "key25": "XVwcus8sbCSHVGh8Tq3WM9tTpaTQ2Su99dmyq4ak1ytYiQgvDwF5937zA71H6SZvL5d6PtU8SiG9yvkfGyfjuE2",
  "key26": "5xD2BL8khxaZnpB9jyyCVpcp75nT5rcKVUePdjSzRhYK27nNoHqRaCowttYJJuJjJEAXjK5EoYe1skp7eRaMBqPP",
  "key27": "NhtXkdwThVujDDGpyKPjtzmtmC21nAFJHprzPbUJVH4M717QGxHm5Cx1gng141LfCn24qU4ah2HVQGmL43c6AVx",
  "key28": "3FAPZJjhGkxP47JPFzd7DRJbKXkmoEb3dvL7ZZdcy8GQNYwiLQro4W76YgGhVVLAq3A79Pigg9Nskkv5ysN7Ugxa",
  "key29": "3DrCNiUmoCKwJdCusr1Qq6qWoHWDFQHdd2Q7ETXrmnBYdwfQznpPtqyt4vMKDfRbkKoLnBmPAvswGMfXb2VdT7PT",
  "key30": "2bYBRPtbVPVQiGmXjM1WNSujXoybvDkZ1RR7A4aKkQLHaC5dE7gjeuogp8yoxs1thDopHmZvD5VMBDrPZHpDFUQE",
  "key31": "4JDZCPw1hJ3QrUtpNnqyvBj3UqW63zZz92m3J5bjwnL29dERa6jfHXpH1ztyRQemaQ869o7MEkcBRbRypYjLhqPm",
  "key32": "R3R3oVnRrru8d5dKFpR3ts22gnhPs5D4tdR7FcGUQU1gLutBNZVmxP1noJAg79iCPNthy5d5EnLJVbGYGPsWVxc",
  "key33": "2M6n5A3H6AHjWKP17snyyPvAexKu5p2vQKLJzEm98c1esKYLNEUsZSJUFxXteev7pzdcFPCW7GYZXofMLW1zE6tv",
  "key34": "2sq7sV4Zqd1x6emwb9pL1Nfzgh2vHpHB9DwHdY98eJ7staGUq1QD23nC8Kd9K3mR4GZNvXaa8Bi8H6NyAxSNaZ6H",
  "key35": "2yXhtCdp6tBueztToHACdPBoBBQG4LMEyPT4UP8TX2jEJ9u7sVaPF4tvaa8JXjwWA9fjC5v5Q9yVxzBgUAMSPVZk",
  "key36": "45p4nwTm3Q1vhYRvnZ62CV9qmigcJZGq5eB7qbm8t8P9GLws1RbQVqbPnY7stbqaPUGd6wjCSA4eLnrnpXzVYBnv",
  "key37": "51CJW9YijverFhnCUYzLzrRoAnN9b9Yx4mHS4LAztUD53iS4G4nRZeKhPmBSsQZizxcz1vy1D6LEGQn6Hrcx73WT",
  "key38": "2J8CoUh9Js66btKtTT6dBujfjM7wa3knVwHYa932LLKxfJiz3SBrQxoruere1jQL4WKbEFQuHsLWQqK1rP9VSxEW",
  "key39": "3nmPvTvFTqvgPvy1PA74vASEaaVexcnq1kNByHJcKazmR3tzxABvU57QdKfLzCzhHDdukYoEV7uVPAbTMv5DVGcA",
  "key40": "67VpMBb37B4WgJv5KHKpW1TV6Cmt4LyrTf5CDgmsFXzvUwjpeTewUrH976YZ3Y8DD4h1tdUfK6trCuDAm5AU2av2",
  "key41": "4wYhHbMZp3iTekcZ62a4mtp9vFh84HW4me3Tdiozrmb2752FS4H51Z5mhvyXvJXtq1E8WZ8QhuCND3aqSUBpBmtR",
  "key42": "3vmZTARmFLc5Z87MqPr6phgqAPEDZdFdcVeSSvSrw8f7bp3u5Ck5MrgVmyKzaYmRz1pf5CV4pjR161Es19iGvLHc",
  "key43": "3m6nqX36NH6wdxM3ccSQ9K5tw8aPFbENKUrAQCYkYa78D8SZ6qYJ8DsMrQyQXL2aYbJKtstgDDe7Pw5ueL7i9G7X",
  "key44": "3PFpkMcZ8GAgYd6WJZ3VJj1z6enTKhVmkScCzQt9DeY7wCC5DeX2zm3TtvpuFP8a8ELWvf4WuJCfKiucKffu9BkW",
  "key45": "52yK1ab9P2keJhMd4cto5eoyNECsHjLioYqUZGa1aNPAKTtuhocKW3MoKc8PuEXvkDwtT9g1tuvC2VaJe8Ky6Rjt",
  "key46": "4DVXkngsspDiUnEfA3PdVQSK6MaYe6E1ZpeAyi5EiPD2bmZsS7JLvy7MeBfZuPiRFvYmvKPcBRaVWaj6nGa1fdZv",
  "key47": "UgYY91qVdAAUSzUdPqcpvhTTSCPQKZBuJd9bk1Mx5HafXor9XhgWprAiQr66u883PCx6e5po6xsKm1dyBfdaKzJ"
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
